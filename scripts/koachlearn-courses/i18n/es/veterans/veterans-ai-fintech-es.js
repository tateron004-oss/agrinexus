"use strict";

// Koach Learn course (Spanish translation of veterans-ai-fintech). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Explains how financial technology works and its risks; it gives no investment advice. US agency names (FDIC, CFPB, FTC) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-fintech-es",
  lang: "es",
  translationOf: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "Tecnología financiera con IA",
  skills: "Explicar cómo funcionan las apps de tecnología financiera, Saber qué está asegurado y qué no, Revisar una app antes de confiar en ella, Configurar la seguridad de una cuenta, Detectar y denunciar estafas de tecnología financiera",
  outcome: "explicar cómo una app de dinero usa la IA, revisar si es legítima y si tu dinero está asegurado, configurar sus opciones de seguridad, y detectar y denunciar una estafa de tecnología financiera dirigida a veteranos.",
  about: [
    "La tecnología financiera (fintech) son las apps y los sitios web que la gente usa para hacer operaciones de banco, pagar, pedir préstamos, hacer presupuestos e invertir. La mayoría ya usa IA por detrás. A los veteranos se les busca mucho para estafas por su sueldo y sus beneficios estables, así que saber cómo funcionan estas herramientas te protege a ti y a tu familia.",
    "En este curso vas a aprender cómo funcionan las apps de pago, los bancos digitales, los asesores automatizados y las criptomonedas, qué cubre y qué no cubre el seguro de depósitos, cómo revisar una app antes de confiar en ella, cómo proteger tus cuentas y cómo detectar y denunciar estafas. Estas habilidades también te ayudan si quieres trabajar en la banca o en tecnología financiera.",
    "Cada lección toma unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Este curso explica cómo funcionan las cosas y sus riesgos; no te dice qué comprar ni en qué invertir. Para decisiones personales de dinero, habla con un profesional calificado e independiente o con un orientador financiero gratuito militar o del VA (el Departamento de Asuntos de Veteranos)."
  ],
  finalTask: "Haz una Tarjeta de Seguridad Fintech de una página para una app de dinero que uses o que estés pensando usar: qué hace y cómo usa la IA, si tu dinero en ella está asegurado por la FDIC (y cómo lo revisaste), las opciones de seguridad que activaste, tres señales de alerta de estafa y dónde denunciarías un problema.",
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona la tecnología financiera",
      lessons: [
        {
          title: "Qué es la tecnología financiera y dónde entra la IA",
          minutes: 4,
          goal: "Nombrar cuatro tipos de tecnología financiera y una forma en que cada uno usa la IA.",
          text: [
            "Fintech significa tecnología financiera: apps y sitios web para el dinero. Los tipos comunes son la banca móvil, las apps de pago para enviar dinero a personas, las apps de presupuesto, los prestamistas en línea y las apps de inversión.",
            "La IA se usa por detrás: para detectar fraudes (una tarjeta usada en dos países en una hora), para responder preguntas en chatbots, para ordenar tus gastos por categorías y para ayudar a decidir a quién se le da un préstamo.",
            "Las decisiones de la IA pueden estar mal. Una compra real puede ser bloqueada, o un préstamo rechazado por datos incorrectos. Tienes derecho a preguntar por qué y a disputar los errores; la Consumer Financial Protection Bureau (CFPB, la Oficina para la Protección Financiera del Consumidor) los explica."
          ],
          words: [["Fintech", "tecnología financiera: apps y sitios web para hacer operaciones de banco, pagar, pedir préstamos, hacer presupuestos e invertir."], ["Detección de fraude", "herramientas que vigilan los pagos que parecen robados o falsos."], ["Chatbot", "un programa de IA que responde preguntas por chat."]],
          slides: [
            { title: "Fintech = apps de dinero", bullets: ["Banca móvil y apps de pago", "Apps de presupuesto y prestamistas en línea", "Apps de inversión"] },
            { title: "La IA por detrás", bullets: ["Detecta fraudes", "Responde preguntas en chatbots", "Ordena los gastos y ayuda a decidir préstamos"] },
            { title: "La IA puede estar mal", bullets: ["Compras reales bloqueadas", "Préstamos rechazados por datos incorrectos", "Puedes preguntar por qué y disputar los errores"] }
          ],
          sources: [{ name: "CFPB: el dinero a lo largo de la vida militar (militares y veteranos)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Haz una lista de todas las apps de dinero de tu teléfono. Junto a cada una, escribe qué tipo de tecnología financiera es y una forma en que podría usar la IA.",
          youCanNow: "describir los tipos principales de tecnología financiera y cómo usan la IA."
        },
        {
          title: "Dónde está de verdad tu dinero: bancos, apps y seguros",
          minutes: 5,
          goal: "Revisar si el dinero en una app está protegido por el seguro de depósitos de la FDIC.",
          text: [
            "El seguro de depósitos de la FDIC (Corporación Federal de Seguro de Depósitos) protege el dinero en cuentas de depósito (cheques, ahorro, cuentas de depósito del mercado monetario y certificados de depósito) en un banco asegurado por la FDIC. Cuando revisamos fdic.gov en octubre de 2026, el monto estándar era de al menos $250,000 por depositante en cada banco asegurado.",
            "El seguro de la FDIC no cubre acciones, bonos, fondos de inversión, rentas vitalicias, seguros de vida ni criptoactivos. Muchas apps de pago no son bancos. Un saldo que dejas en la app puede no estar asegurado, a menos que la app lo ponga por ti en una cuenta de banco asegurada.",
            "Para revisarlo: lee la página de ayuda de la propia app para encontrar el nombre de su banco asociado y luego busca ese banco con la herramienta BankFind de la FDIC en fdic.gov."
          ],
          steps: ["Abre la página de ayuda o la página legal de la app y busca \"FDIC\" y el nombre de un banco.", "Busca ese banco con BankFind de la FDIC en fdic.gov.", "Revisa si tu tipo de dinero (depósito, acciones, cripto) está cubierto.", "Si no estás seguro, pasa el dinero para tus gastos a una cuenta de banco asegurada."],
          words: [["FDIC", "Corporación Federal de Seguro de Depósitos: protege los depósitos en bancos asegurados si el banco quiebra."], ["Cuenta de depósito", "una cuenta de cheques, de ahorro, de depósito del mercado monetario o un certificado de depósito en un banco."], ["BankFind", "la herramienta gratuita de la FDIC para revisar si un banco está asegurado por la FDIC."]],
          slides: [
            { title: "La FDIC cubre depósitos", bullets: ["Cheques, ahorro, depósitos del mercado monetario, certificados de depósito", "Al menos $250,000 por depositante, en cada banco (oct. 2026)"] },
            { title: "La FDIC NO cubre", bullets: ["Acciones, bonos y fondos de inversión", "Rentas vitalicias y seguros de vida", "Criptoactivos"] },
            { title: "Revisa tu app", bullets: ["Encuentra su banco asociado en las páginas de ayuda", "Búscalo con BankFind de la FDIC", "¿No estás seguro? Deja el dinero en un banco asegurado"] }
          ],
          sources: [{ name: "FDIC: seguro de depósitos", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Elige una app de dinero que uses. Encuentra su banco asociado en las páginas de ayuda de la app y revisa ese banco en BankFind de la FDIC. Anota si tu saldo está asegurado.",
          youCanNow: "revisar si el dinero en una app está protegido por el seguro de depósitos de la FDIC."
        },
        {
          title: "Cómo funcionan los asesores automatizados y las criptomonedas, y sus riesgos",
          minutes: 5,
          goal: "Explicar cómo funcionan un asesor automatizado y las criptomonedas y nombrar sus riesgos principales.",
          text: [
            "Un asesor automatizado (robo-advisor) es una app que usa reglas de computadora para poner tu dinero en inversiones según las respuestas que das, como tus metas y cuánto falta para que necesites el dinero. Cobra una comisión. Las inversiones pueden perder valor y no están aseguradas por la FDIC.",
            "La criptomoneda (cripto) es dinero digital registrado en un libro contable compartido en línea llamado blockchain (cadena de bloques). Los precios pueden subir y bajar mucho. La FTC (la Comisión Federal de Comercio) advierte que los pagos con cripto normalmente no se pueden revertir y que las criptomonedas no están aseguradas por el gobierno como los depósitos bancarios.",
            "Este curso no te dice si debes usar alguno de los dos. Antes de cualquier decisión de inversión, conoce las comisiones y los riesgos en páginas oficiales y habla con un profesional calificado e independiente o con un orientador financiero gratuito militar o del VA."
          ],
          words: [["Asesor automatizado", "una app que invierte dinero usando reglas de computadora según tus respuestas."], ["Criptomoneda", "dinero digital registrado en una blockchain."], ["Blockchain", "un registro compartido en línea de transacciones que es muy difícil de cambiar."], ["Volátil", "un precio que puede subir y bajar mucho y rápido."]],
          slides: [
            { title: "Asesores automatizados", bullets: ["Invierten con reglas de computadora y tus respuestas", "Cobran una comisión", "Pueden perder valor; no están asegurados por la FDIC"] },
            { title: "Criptomonedas", bullets: ["Dinero digital en una blockchain", "Los precios pueden cambiar mucho", "Los pagos normalmente no se pueden revertir"] },
            { title: "Antes de cualquier decisión", bullets: ["Conoce comisiones y riesgos en páginas oficiales", "Habla con un profesional calificado e independiente", "Este curso no da consejos de inversión"] }
          ],
          sources: [{ name: "FTC: lo que debes saber sobre las criptomonedas y las estafas", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: seguro de depósitos", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Pregúntale a un asistente de IA: \"Explica con palabras sencillas cómo funciona un asesor automatizado y cómo funcionan las criptomonedas, con los riesgos principales de cada uno.\" Compara su lista de riesgos con la página de criptomonedas de la FTC y anota lo que le faltó.",
          youCanNow: "explicar cómo funcionan los asesores automatizados y las criptomonedas y nombrar sus riesgos principales."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona la tecnología financiera",
        questions: [
          { q: "¿Cuál es un ejemplo de IA en la tecnología financiera?", options: ["La puerta de un banco", "Imprimir cheques en papel", "Detectar una tarjeta usada en dos países en una hora", "Un recibo en papel"], answer: 2, why: "La detección de fraudes es un uso común de la IA." },
          { q: "Una IA bloquea por error tu compra real. ¿Qué puedes hacer?", options: ["Preguntar por qué y disputar el error", "Nada, la IA tiene la última palabra", "Cerrar todas tus cuentas", "Publicar tu número de tarjeta en internet"], answer: 0, why: "Tienes derecho a cuestionar y disputar los errores." },
          { q: "Según fdic.gov en octubre de 2026, ¿qué está asegurado por la FDIC en un banco asegurado?", options: ["Un fondo de inversión", "Las criptomonedas", "Las acciones", "Una cuenta de ahorro"], answer: 3, why: "Las cuentas de depósito como el ahorro están cubiertas." },
          { q: "¿Cómo revisas si el banco asociado de una app está asegurado por la FDIC?", options: ["Confiando en los anuncios de la app", "Buscando el banco con BankFind de la FDIC", "Preguntándole a un desconocido", "Revisando las redes sociales"], answer: 1, why: "BankFind es la herramienta oficial de la FDIC." },
          { q: "¿Qué dice la FTC sobre los pagos con criptomonedas?", options: ["Siempre están asegurados", "Normalmente no se pueden revertir", "Los bancos los garantizan", "No tienen riesgo"], answer: 1, why: "La FTC advierte que los pagos con cripto normalmente son irreversibles." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar la tecnología financiera con seguridad",
      lessons: [
        {
          title: "Revisar una app antes de confiar en ella",
          minutes: 5,
          goal: "Hacer una revisión de cinco puntos a una app de dinero antes de poner dinero en ella.",
          text: [
            "Los estafadores crean apps y sitios web de dinero falsos que parecen reales. Antes de descargar o depositar, revisa quién maneja la app y si es real.",
            "Descarga la app solo de la tienda de apps oficial y revisa que el nombre del desarrollador coincida con la empresa real. Lee el sitio web de la propia empresa para conocer su nombre completo y su banco asociado. Revisa el banco en BankFind de la FDIC. Busca el nombre de la empresa más \"quejas\" y revisa la información de quejas de la CFPB.",
            "Le puedes pedir a un asistente de IA que te explique qué significan los términos de una app, pero no confíes en que la IA te diga que una app es segura. Revisa tú mismo las fuentes oficiales."
          ],
          steps: ["Descarga solo de la tienda de apps oficial.", "Revisa que el nombre del desarrollador coincida con la empresa real.", "Encuentra el nombre completo de la empresa y su banco asociado en su propio sitio web.", "Revisa el banco en BankFind de la FDIC.", "Busca quejas, incluso en consumerfinance.gov."],
          words: [["Desarrollador", "la empresa que hizo una app, que aparece en la ficha de la tienda de apps."], ["Términos de servicio", "las reglas y comisiones que aceptas al usar una app."]],
          slides: [
            { title: "Las apps falsas parecen reales", bullets: ["Revisa antes de descargar o depositar"] },
            { title: "Revisión de cinco puntos", bullets: ["Tienda de apps oficial, desarrollador correcto", "Nombre completo de la empresa y banco asociado", "BankFind de la FDIC para el banco", "Busca quejas"] },
            { title: "La IA puede explicar, no aprobar", bullets: ["Pídele a la IA que explique los términos", "Revisa tú la seguridad en fuentes oficiales"] }
          ],
          sources: [{ name: "CFPB: el dinero a lo largo de la vida militar (quejas y derechos)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: seguro de depósitos (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Haz la revisión de cinco puntos a una app de dinero que uses o que estés pensando usar. Escribe sí o no junto a cada punto.",
          youCanNow: "revisar si una app de dinero es real antes de confiarle tu dinero."
        },
        {
          title: "Proteger tus cuentas de dinero",
          minutes: 5,
          goal: "Activar las opciones de seguridad principales en una app de dinero.",
          text: [
            "Trata tus cuentas de dinero como un área segura: capas de protección. Usa una contraseña fuerte y única para cada cuenta de dinero, y activa la verificación en dos pasos para que se necesite un código o una app para iniciar sesión.",
            "Activa las alertas para que la app te avise de cada pago, inicio de sesión o cambio en tus datos. Las alertas rápidas te permiten detener un fraude a tiempo.",
            "Nunca compartas un código de inicio de sesión con nadie, ni siquiera con alguien que diga ser del banco, del VA o de la app. Las empresas reales no lo piden. Nunca escribas contraseñas ni números de cuenta completos en un asistente de IA."
          ],
          steps: ["Pon una contraseña fuerte y única.", "Activa la verificación en dos pasos en las opciones de seguridad de la app.", "Activa las alertas de pagos, inicios de sesión y cambios.", "Revisa tus dispositivos vinculados y quita los que no reconozcas.", "Prométete: nunca compartir un código de inicio de sesión."],
          words: [["Verificación en dos pasos", "una segunda revisión, como un código o una aprobación en una app, que se necesita para iniciar sesión."], ["Alerta", "un mensaje que la app envía cuando pasa algo en tu cuenta."]],
          slides: [
            { title: "Capas de protección", bullets: ["Contraseña fuerte y única", "Verificación en dos pasos activada"] },
            { title: "Activa las alertas", bullets: ["Cada pago", "Cada inicio de sesión", "Cada cambio en tus datos"] },
            { title: "Nunca compartas", bullets: ["Códigos de inicio de sesión, con nadie", "Contraseñas ni números de cuenta con herramientas de IA"] }
          ],
          tryIt: "Abre las opciones de seguridad de una app de dinero. Activa la verificación en dos pasos y las alertas de pagos, y quita cualquier dispositivo que no reconozcas.",
          youCanNow: "configurar las opciones de seguridad principales que protegen una cuenta de dinero."
        },
        {
          title: "Detectar y denunciar estafas de tecnología financiera",
          minutes: 5,
          goal: "Detectar las señales de alerta de una estafa de tecnología financiera y saber dónde denunciarla.",
          text: [
            "La FTC advierte que solo los estafadores exigen pagos en criptomonedas, solo los estafadores garantizan ganancias o rendimientos grandes, y un empleo que te pide pagar por adelantado una comisión en cripto es una estafa. Los contactos románticos que ofrecen consejos de inversión también son una señal de alerta.",
            "Los estafadores también se hacen pasar por el banco, una agencia del gobierno o el VA y dicen que tu dinero está en riesgo. La IA les permite escribir mensajes perfectos y hasta copiar voces. No hagas clic en sus enlaces ni llames a los números que te dan; usa el número del sitio web oficial o el de tu tarjeta.",
            "Para denunciar: presenta una queja sobre un producto financiero ante la CFPB en consumerfinance.gov o por teléfono, y denuncia el fraude ante la FTC en ReportFraud.ftc.gov. Avísale de inmediato a tu banco si salió dinero de tu cuenta."
          ],
          steps: ["Fíjate en: exigencias de pago en cripto, rendimientos garantizados, cobros por adelantado, llamadas urgentes de \"tu dinero está en riesgo\".", "Detente. No hagas clic, no pagues ni compartas códigos.", "Llama a la empresa a un número de su sitio web oficial o de tu tarjeta.", "Avísale de inmediato a tu banco si se movió dinero.", "Denúncialo ante la CFPB o en ReportFraud.ftc.gov."],
          words: [["Estafa de suplantación", "cuando un estafador se hace pasar por una empresa, una agencia o una persona en la que confías."], ["Rendimientos garantizados", "una promesa de ganancia sin riesgo; las inversiones reales nunca prometen esto."]],
          slides: [
            { title: "Señales de alerta de la FTC", bullets: ["Exigen el pago en cripto", "Ganancias o rendimientos grandes garantizados", "Comisión en cripto por adelantado para un empleo"] },
            { title: "Los suplantadores usan IA", bullets: ["Mensajes perfectos y voces copiadas", "No hagas clic en sus enlaces ni llames a sus números", "Usa el número oficial"] },
            { title: "Denúncialo", bullets: ["Avísale de inmediato a tu banco", "Queja ante la CFPB: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: lo que debes saber sobre las criptomonedas y las estafas", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: el dinero a lo largo de la vida militar (presentar una queja)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Tarea final: haz tu Tarjeta de Seguridad Fintech de una página para una app: qué hace y cómo usa la IA, si tu dinero está asegurado y cómo lo revisaste, las opciones de seguridad que activaste, tres señales de alerta de estafa y dónde denunciarías un problema.",
          youCanNow: "entender cómo funciona una app de dinero, revisarla y protegerla, y detectar y denunciar estafas de tecnología financiera."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Usar la tecnología financiera con seguridad",
        questions: [
          { q: "¿De dónde debes descargar una app de dinero?", options: ["De cualquier sitio web", "De un enlace en un mensaje de un desconocido", "De un anuncio emergente", "De la tienda de apps oficial, de la empresa real"], answer: 3, why: "Las tiendas oficiales y el desarrollador correcto reducen las apps falsas." },
          { q: "¿Puede un asistente de IA decirte con seguridad que una app es segura?", options: ["No; revisa tú las fuentes oficiales", "Sí, siempre", "Solo los fines de semana", "Solo para apps de cripto"], answer: 0, why: "La IA puede explicar los términos, pero no puede verificar la seguridad." },
          { q: "¿Qué hace la verificación en dos pasos?", options: ["Quita tu contraseña", "Duplica tu dinero", "Pide una segunda revisión, como un código, para iniciar sesión", "Comparte tu cuenta"], answer: 2, why: "Una segunda revisión bloquea a quien roba tu contraseña." },
          { q: "Alguien dice ser de tu banco y te pide el código de inicio de sesión que te llegó al teléfono. Tú:", options: ["Lo publicas en internet", "Se lo lees", "Se lo mandas por mensaje", "Nunca lo compartes; llamas al banco al número oficial"], answer: 3, why: "Las empresas reales nunca piden tu código de inicio de sesión." },
          { q: "Según la FTC, ¿cuál es una señal de estafa?", options: ["Un recibo de una tienda", "Un estado de cuenta mensual del banco", "Una promesa de rendimientos grandes garantizados", "Una alerta que configuraste"], answer: 2, why: "Solo los estafadores garantizan ganancias." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Tecnología financiera con IA",
    questions: [
      { q: "Fintech significa:", options: ["Tecnología fina", "Tecnología financiera: apps y sitios web para el dinero", "Tecnología para el ejercicio", "Un tipo de bóveda de banco"], answer: 1, why: "Abarca la tecnología para operaciones de banco, pagos, préstamos, presupuestos e inversiones." },
      { q: "¿Cuál es un uso común de la IA en las apps de dinero?", options: ["Ordenar tus gastos por categorías", "Imprimir efectivo", "Abrir las puertas del banco", "Enviar estados de cuenta por correo"], answer: 0, why: "La IA ordena los gastos por categorías en las apps de presupuesto." },
      { q: "Te rechazan un préstamo por datos incorrectos. Puedes:", options: ["Pagarle a un desconocido para que lo arregle", "No hacer nada", "Preguntar por qué y disputar el error", "Darle tu contraseña a un chatbot"], answer: 2, why: "Tienes derecho a disputar los errores." },
      { q: "¿Qué agencia explica tus derechos con los productos financieros y recibe quejas?", options: ["La Consumer Financial Protection Bureau (CFPB)", "El Servicio Postal", "La NASA", "El Servicio de Parques Nacionales"], answer: 0, why: "La CFPB atiende las quejas sobre finanzas del consumidor." },
      { q: "El seguro de la FDIC protege:", options: ["Cualquier saldo de una app", "Todas las criptomonedas", "Todas las acciones", "Los depósitos en bancos asegurados por la FDIC"], answer: 3, why: "Cubre las cuentas de depósito en bancos asegurados." },
      { q: "Según fdic.gov en octubre de 2026, el monto asegurado estándar es de al menos:", options: ["$2,500", "$250,000 por depositante, en cada banco asegurado", "$25,000", "Ilimitado"], answer: 1, why: "La página de la FDIC dice al menos $250,000 en cada banco asegurado." },
      { q: "¿El saldo en una app de pagos siempre está asegurado por la FDIC?", options: ["Sí, siempre", "No; depende de si la app lo guarda en un banco asegurado", "Solo los viernes", "Solo si es cripto"], answer: 1, why: "Muchas apps de pago no son bancos." },
      { q: "BankFind es:", options: ["Una bolsa de trabajo", "Una billetera de cripto", "Una app de préstamos", "La herramienta de la FDIC para revisar si un banco está asegurado"], answer: 3, why: "BankFind está en fdic.gov." },
      { q: "Un asesor automatizado es:", options: ["Una app que invierte con reglas de computadora según tus respuestas", "Un robot del banco que entrega efectivo", "Un préstamo gratuito del gobierno", "Una póliza de seguro"], answer: 0, why: "Automatiza la inversión a cambio de una comisión." },
      { q: "¿Qué es cierto sobre las criptomonedas?", options: ["La FDIC las asegura", "Siempre suben", "Los precios pueden cambiar mucho y no están aseguradas como los depósitos bancarios", "Los pagos son fáciles de revertir"], answer: 2, why: "Las cripto son volátiles y no tienen seguro de depósitos." },
      { q: "Antes de cualquier decisión de inversión, este curso dice que debes:", options: ["Invertir todo de una vez", "Hacer lo que diga una IA", "Seguir un consejo de redes sociales", "Conocer las comisiones y los riesgos y hablar con un profesional calificado e independiente"], answer: 3, why: "El curso explica, no aconseja." },
      { q: "El primer punto de la revisión de una app es:", options: ["Compartirla con tus amigos", "Depositar dinero primero", "Descargar solo de la tienda de apps oficial, del desarrollador correcto", "Desactivar las alertas"], answer: 2, why: "Las apps falsas son comunes fuera de las tiendas oficiales." },
      { q: "¿Dónde encuentras el banco asociado de una app?", options: ["En un anuncio cualquiera", "En el sitio web o las páginas de ayuda de la propia empresa", "En un mensaje de texto", "En una suposición de la IA"], answer: 1, why: "Las páginas oficiales de la empresa nombran al banco." },
      { q: "¿Cuál es un buen paso de seguridad?", options: ["Activar la verificación en dos pasos", "Usar la misma contraseña en todos lados", "Compartir códigos con soporte", "Desactivar las alertas"], answer: 0, why: "Un segundo paso bloquea los inicios de sesión con contraseñas robadas." },
      { q: "¿Por qué activar las alertas de pagos?", options: ["Para hacer más lento tu teléfono", "Para recibir más anuncios", "Para detectar y detener fraudes a tiempo", "Para compartir tu saldo"], answer: 2, why: "Las alertas rápidas te permiten actuar pronto." },
      { q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["Tu contraseña o tu número de cuenta completo", "\"Explica el seguro de la FDIC\"", "\"¿Qué es un asesor automatizado?\"", "\"Haz una lista de señales de estafa\""], answer: 0, why: "Los datos financieros privados deben quedar fuera de las herramientas de IA." },
      { q: "Alguien llama, dice que tu dinero está en riesgo y que debes pasarlo a una cuenta de cripto \"segura\". Esto es:", options: ["Una actualización de seguridad", "Una práctica normal del banco", "Un beneficio del VA", "Una estafa de suplantación"], answer: 3, why: "La FTC advierte que estas son estafas." },
      { q: "Un empleo te pide pagar por adelantado una comisión en cripto. Esto es:", options: ["Un paso normal de contratación", "Una estafa, según la FTC", "Un costo de formación que paga el VA", "Un impuesto"], answer: 1, why: "La FTC dice que las comisiones en cripto por adelantado para un empleo son estafas." },
      { q: "¿Cómo debes volver a llamar a una empresa por un mensaje sospechoso?", options: ["Usar el número del mensaje", "Usar el número de su sitio web oficial o de tu tarjeta", "Responder el mensaje", "Pedirle un número a quien llamó"], answer: 1, why: "Los estafadores dan números falsos." },
      { q: "¿Dónde puedes denunciar un fraude ante la FTC?", options: ["En un chatbot de IA", "En un comentario de redes sociales", "En el sitio web del estafador", "En ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov es el sitio de denuncias de la FTC." }
    ]
  }
};

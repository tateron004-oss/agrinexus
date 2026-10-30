"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-mobile-money-safety.js). See scripts/koachlearn-courses/README.md, "Translations".
// Fees and help numbers change: learners read them on their own provider's official channels. No investment advice. Figures are examples only.

const SAF_FRAUD = { name: "The Star, Kenia (27 de marzo de 2025): fraudes comunes contra usuarios de M-Pesa; denuncia al 333, a Zuri o en la app; Safaricom nunca pide tu PIN", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenia: cómo revertir un pago de M-Pesa (reenvía el SMS de confirmación al 456; si es un till o Paybill equivocado, llama al 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Agencia de Noticias de Ghana (octubre de 2026): MTN advierte a sus clientes que no compartan su PIN de MoMo", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Banco Central de Kenia (regula el dinero móvil y publica la lista de proveedores de pago autorizados)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Banco Central de Nigeria: protección del consumidor", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Banco de Ghana: procedimientos de reclamo y lista de instituciones autorizadas", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Banco Central de los Estados de África Occidental: instituciones de dinero electrónico (países del franco XOF, como Senegal y Costa de Marfil)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety-es",
  lang: "es",
  translationOf: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Usar el dinero móvil con seguridad (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Proteger tu PIN y tu teléfono, Revisar el nombre antes de enviar, Usar agentes y comisiones con seguridad, Reconocer estafas de dinero móvil, Actuar rápido después de un envío equivocado o un fraude, Escribir un plan de seguridad personal",
  outcome: "enviar, recibir y pagar con dinero móvil de forma segura: proteger tu PIN, revisar el nombre antes de confirmar, reconocer las estafas comunes, actuar rápido después de un envío equivocado o un fraude, y tener un plan de seguridad de una página para ti y tu familia.",
  about: [
    "El dinero móvil es la forma en que millones de personas en África envían, ahorran y pagan cada día: M-Pesa en Kenia, MTN MoMo en Ghana y Nigeria, Orange Money en Costa de Marfil y Camerún, Wave en Senegal, y billeteras móviles en Egipto y Marruecos. Es rápido y útil, y los estafadores también lo saben.",
    "Este curso es para comerciantes, padres y madres, estudiantes, trabajadores y cualquier persona que usa un teléfono básico o un teléfono inteligente para manejar dinero. Aprenderás cómo funcionan tu billetera, tu PIN y el agente, cómo revisar cada pago antes de confirmarlo, los trucos que usan los estafadores y qué hacer exactamente si el dinero llega a la persona equivocada.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\" en tu propio teléfono, sin escribir nunca tu PIN real para practicar. Hay una prueba corta después de cada lección y de cada capítulo, y un examen de 20 preguntas al final. Las comisiones, los límites y los números de ayuda cambian, así que aprenderás a leerlos en los canales oficiales de tu propio proveedor."
  ],
  finalTask: "Escribe un plan de seguridad de dinero móvil de una página para ti o tu familia: tus reglas para el PIN y el bloqueo del teléfono, cómo revisas el nombre antes de enviar, los canales oficiales de ayuda y de fraude de tu proveedor (copiados de su sitio web oficial, su app o el paquete de la SIM), las seis señales de estafa, lo que haces en la primera hora después de un envío equivocado o un fraude, y una revisión mensual de tu estado de cuenta.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes de toda África, en ciudades y pueblos: comerciantes de mercado, mototaxistas (boda boda, okada), padres y madres, estudiantes, trabajadores y dueños de pequeños negocios que envían, reciben y pagan con dinero móvil. Ejemplos de Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Camerún, Egipto y Marruecos.",
    startingPoint: "La mayoría ya envía y recibe dinero con un menú USSD (*xxx#) o una app. Muchos nunca han leído la tabla de comisiones, no saben cómo revertir un envío equivocado, comparten el teléfono o el PIN con la familia, o han recibido una llamada o un SMS de estafa.",
    gap: "La gente pierde dinero por mensajes falsos de reversión, pedidos del PIN o de códigos, agentes falsos y trucos de \"número equivocado\", y muchos no conocen los pasos oficiales y rápidos después de un envío equivocado. Los participantes necesitan hábitos y un plan escrito que protejan su dinero y el de su familia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; traducido al francés y al árabe",
      "Dispositivos: muchos usan un teléfono básico con menús USSD; los datos móviles son caros",
      "Tiempo: lecciones de 4 a 6 minutos que se acomodan al trabajo y a los días de mercado",
      "Las comisiones, los límites y los números de ayuda varían según el país y cambian: siempre se leen en los canales oficiales del proveedor",
      "Nunca escribir un PIN, una contraseña o un código de un solo uso reales en una tarea de práctica"
    ],
    prerequisites: "Una cuenta de dinero móvil, o el teléfono de un familiar para ver juntos el menú (sin el PIN)."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con tu propio teléfono y tu cuenta de dinero móvil", action: "poner un PIN difícil de adivinar, bloquear tu teléfono y guardar el PIN solo para ti", standard: "sin compartir el PIN con nadie, ni con la familia ni con alguien que dice ser del personal" },
    { id: "O2", condition: "Cuando envías dinero, pagas a un comercio o usas un agente", action: "revisar el nombre del destinatario, el número y el monto en la pantalla de confirmación antes de escribir tu PIN, y guardar el mensaje de confirmación", standard: "cada vez, y detenerte si algo no coincide" },
    { id: "O3", condition: "Ante seis llamadas o mensajes sobre dinero móvil", action: "identificar cuáles son estafas y nombrar la señal de alerta de cada una", standard: "con al menos 5 de 6 correctas" },
    { id: "O4", condition: "Después de que el dinero va a un número equivocado o sospechas un fraude", action: "denunciarlo por los canales oficiales de tu proveedor y seguir los pasos de reversión", standard: "el mismo día, guardando el mensaje de confirmación original y sin usar ningún número que te dé un desconocido" },
    { id: "O5", condition: "Con lo que aprendiste y el sitio web oficial o el paquete de la SIM de tu proveedor", action: "escribir un plan de seguridad de dinero móvil de una página para ti o tu familia", standard: "que incluya las reglas del PIN, la revisión del nombre, los canales oficiales de ayuda, las señales de estafa, los pasos de la primera hora y una revisión mensual del estado de cuenta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona el dinero móvil y cómo usarlo con seguridad",
      lessons: [
        {
          title: "Tu billetera, tu PIN y tu teléfono",
          objectives: ["O1"],
          minutes: 5,
          goal: "Poner un PIN fuerte, bloquear tu teléfono y nombrar a las personas que nunca deben tener tu PIN.",
          text: [
            "Una billetera de dinero móvil es una cuenta conectada a tu tarjeta SIM. Depositas efectivo con un agente, lo envías, pagas con él y lo vuelves a retirar. Tu PIN (número de identificación personal) es la llave de la billetera. Cualquiera que tenga tu teléfono y tu PIN puede vaciarla.",
            "Elige un PIN difícil de adivinar: no tu año de nacimiento, no 1234 ni 0000, no los últimos dígitos de tu número de teléfono. Tapa el teclado cuando lo escribas con un agente o en un matatu (minibús) o un mercado lleno de gente. Bloquea también el teléfono con un PIN, un patrón o tu huella, y si tu teléfono lo permite, pon también un PIN a la SIM, para que un ladrón no pueda usar tu SIM en otro teléfono.",
            "Nunca compartas tu PIN de dinero móvil ni un código de un solo uso con nadie: ni con un amigo, ni con un hijo, ni con un agente, ni con alguien que llama y dice ser de Safaricom, MTN, Orange o Wave. Los proveedores dicen claramente que su personal nunca te pedirá el PIN. Si alguien te lo pide, es una estafa.",
            "Si pierdes el teléfono o te lo roban, o tu línea deja de funcionar de repente, llama de inmediato a tu proveedor desde otro teléfono para bloquear la SIM y la billetera. Una línea que se apaga sin razón puede ser un cambio de SIM (SIM swap), cuando un delincuente pasa tu número a su propia SIM."
          ],
          steps: ["Cambia tu PIN desde el menú si es fácil de adivinar (año de nacimiento, 1234, números repetidos).", "Pon un bloqueo de pantalla en tu teléfono.", "Activa el PIN de la SIM si tu teléfono lo ofrece.", "Tapa el teclado cuando escribas tu PIN.", "Anota en papel el número oficial de ayuda de tu proveedor, no el que viene en el mensaje de un desconocido.", "Si pierdes el teléfono o la línea se apaga, llama al proveedor desde otro teléfono para bloquearlo."],
          words: [["Billetera", "tu cuenta de dinero móvil, conectada a tu tarjeta SIM."], ["PIN", "número de identificación personal: el número secreto que te permite usar tu billetera."], ["Cambio de SIM (SIM swap)", "cuando tu número de teléfono pasa a una tarjeta SIM nueva; los delincuentes lo intentan para quedarse con tu billetera."]],
          slides: [
            { title: "Tu PIN es la llave", bullets: ["Teléfono + PIN = acceso a todo tu dinero", "Ni tu año de nacimiento, ni 1234, ni 0000", "Tapa el teclado cuando lo escribas"] },
            { title: "Bloquea el teléfono y la SIM", bullets: ["Bloqueo de pantalla: PIN, patrón o huella", "PIN de la SIM si tu teléfono lo ofrece", "Así un ladrón no puede usar tu SIM en otro lado"] },
            { title: "Nunca lo compartas", bullets: ["Ni amigos, ni hijos, ni agentes, ni quien llama", "El personal real nunca pide tu PIN", "Quien lo pide es un estafador"] },
            { title: "¿Perdiste el teléfono o se apagó la línea?", bullets: ["Llama al proveedor desde otro teléfono de inmediato", "Bloquea la SIM y la billetera", "Una línea que se apaga sin razón puede ser un cambio de SIM"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Piensa en tu PIN, solo en tu cabeza (no lo escribas ni se lo digas a nadie). ¿Es tu año de nacimiento, 1234 o un número repetido? Si es así, cámbialo hoy desde el menú. Luego revisa que tu teléfono tenga bloqueo de pantalla.",
          youCanNow: "poner un PIN difícil de adivinar, bloquear tu teléfono y tu SIM, y negarte cuando alguien te pide el PIN.",
          quickCheck: [
            { objective: "O1", q: "¿Qué PIN es el más seguro?", options: ["1990, tu año de nacimiento", "1234", "Un número sin relación con tu cumpleaños ni con tu número de teléfono", "Los últimos cuatro dígitos de tu número de teléfono"], answer: 2, why: "Un PIN sin relación con datos tuyos es difícil de adivinar para otros." },
            { objective: "O1", q: "Alguien llama, dice que es de tu proveedor de dinero móvil y que necesita tu PIN para arreglar tu cuenta. ¿Qué haces?", options: ["Cuelgo; el personal real nunca pide el PIN", "Le doy el PIN y lo cambio después", "Le doy solo los dos primeros dígitos", "Le envío en cambio el código que llegó a mi teléfono"], answer: 0, why: "Los proveedores nunca piden tu PIN ni tus códigos; quien lo hace es un estafador." }
          ]
        },
        {
          title: "Enviar y pagar: revisa el nombre antes del PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Revisar el nombre, el número y el monto en la pantalla de confirmación antes de escribir tu PIN.",
          text: [
            "La mayoría de los errores y muchas estafas se pueden detener en un solo lugar: la pantalla de confirmación. Antes de que escribas tu PIN, el teléfono muestra a quién le pagas y cuánto. En Kenia, M-Pesa muestra el nombre de un número, un till o un Paybill; otros proveedores también muestran un nombre o el nombre del comercio.",
            "Léelo despacio. ¿Es la persona o la tienda correcta? ¿El monto está bien? 5,000 no es 50,000. Cuando pagas en una tienda, toma el número de till, de comercio o de Paybill de un letrero o un recibo de la tienda, no de un número que alguien te envía.",
            "Si el nombre está mal o es extraño, cancela. No escribas el PIN \"para ver qué pasa\". Después de pagar, guarda el mensaje de confirmación (SMS) hasta que estés seguro de que la persona o la tienda recibió el dinero. Es tu prueba.",
            "Ejemplo: Ama, en Kumasi, le paga GHS 600 a un proveedor con MTN MoMo. La pantalla muestra un nombre distinto al del proveedor. Ella cancela, llama al proveedor al número que ya tiene y descubre que se equivocó en un dígito."
          ],
          steps: ["Escribe el número, el código de comercio o el till.", "Escribe el monto y léelo dos veces.", "En la pantalla de confirmación, lee el nombre, el número y el monto.", "Si algo no coincide, cancela.", "Si todo coincide, tapa el teclado y escribe tu PIN.", "Guarda el SMS de confirmación como prueba."],
          words: [["Pantalla de confirmación", "la pantalla que muestra a quién le pagas y cuánto, antes de que escribas tu PIN."], ["Till / código de comercio / Paybill", "números que usan las tiendas y las empresas para recibir pagos."], ["SMS de confirmación", "el mensaje que te envía tu proveedor después de un pago; tu prueba."]],
          slides: [
            { title: "Detente en la pantalla de confirmación", bullets: ["Muestra el nombre, el número y el monto", "Léela despacio, antes del PIN", "5,000 no es 50,000"] },
            { title: "Pagar en una tienda", bullets: ["Toma el till o el código de comercio del letrero de la tienda", "No de un número que alguien te envía", "Revisa el nombre de la tienda en la pantalla"] },
            { title: "¿Algo está mal? Cancela", bullets: ["No escribas el PIN para ver qué pasa", "Llama a la persona a un número que ya tienes", "Luego vuelve a intentarlo con cuidado"] },
            { title: "Guarda tu prueba", bullets: ["Guarda el SMS de confirmación", "Hasta que el dinero llegue sin problemas", "Lo necesitas para cualquier reversión"] }
          ],
          sources: [SAF_REV],
          tryIt: "La próxima vez que envíes dinero o pagues, detente en la pantalla de confirmación y di en voz alta el nombre, el número y el monto antes de escribir tu PIN. Luego busca el SMS de confirmación y no lo borres.",
          youCanNow: "revisar el nombre, el número y el monto antes de escribir tu PIN, y guardar el mensaje de confirmación como prueba.",
          quickCheck: [
            { objective: "O2", q: "La pantalla de confirmación muestra un nombre que no conoces. ¿Qué haces?", options: ["Escribo el PIN; los nombres a menudo están mal", "Escribo el PIN y pregunto después", "Primero envío un monto más pequeño", "Cancelo y verifico el número con la persona"], answer: 3, why: "Un nombre extraño significa un número equivocado o un truco; cancela antes del PIN." },
            { objective: "O2", q: "¿Por qué guardar el SMS de confirmación después de pagar?", options: ["Es tu prueba si algo sale mal", "Te da puntos", "La ley dice que lo borres", "Hace que el próximo pago sea más barato"], answer: 0, why: "El mensaje de confirmación prueba el pago y se necesita para una reversión o un reclamo." }
          ]
        },
        {
          title: "Agentes, comisiones y tus registros",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Leer la comisión de una operación en la tarifa oficial de tu proveedor y hacer un retiro seguro con un agente.",
          text: [
            "Un agente es una tienda donde depositas efectivo en tu billetera (depósito) o sacas efectivo (retiro). Usa un agente registrado, con el letrero del proveedor y su número de agente. Cuando puedas, haz la operación tú mismo en tu propio teléfono, y cuenta el efectivo antes de irte.",
            "Las comisiones dependen del proveedor, del país, del monto y del tipo de operación. No adivines y no confíes en la comisión que alguien te dice. Lee la tarifa oficial en el sitio web o la app del proveedor, en la tienda o marcando el menú. Muchas apps también muestran la comisión antes de que confirmes. Enviar a alguien de otra red o a un banco puede costar más.",
            "Un agente falso puede decir \"dame tu teléfono, yo lo hago por ti\", o pedirte el PIN. Nunca entregues tu teléfono con el PIN. Los agentes reales no lo necesitan.",
            "Una vez al mes, lee tu mini estado de cuenta o tu estado de cuenta completo desde el menú o la app. Busca pagos que no reconoces. Ejemplo: Moussa, un sastre de Dakar, revisa su historial de Wave cada fin de mes y anota en un cuaderno el total que envió y el total que recibió. Las cifras de este curso son solo ejemplos."
          ],
          steps: ["Busca la tabla oficial de comisiones en el sitio web, la app o el cartel de la tienda del proveedor.", "Busca la comisión para el monto que quieres enviar o retirar.", "Con el agente, revisa el letrero y el número de agente.", "Empieza el retiro en tu propio teléfono; revisa el nombre del agente en la pantalla.", "Cuenta el efectivo antes de irte.", "Lee tu estado de cuenta una vez al mes."],
          words: [["Agente", "una tienda registrada que hace depósitos y retiros de efectivo para un proveedor de dinero móvil."], ["Tarifa", "la tabla oficial de comisiones para cada tipo y tamaño de operación."], ["Mini estado de cuenta", "una lista corta de tus últimas operaciones, desde el menú o la app."]],
          slides: [
            { title: "Usar un agente", bullets: ["Agente registrado: letrero del proveedor y número de agente", "Empieza en tu propio teléfono; revisa el nombre", "Cuenta el efectivo antes de irte"] },
            { title: "Comisiones: léelas, no adivines", bullets: ["Dependen del proveedor, el país, el monto y el tipo", "Tarifa oficial: sitio web, app, cartel en la tienda", "Otras redes o bancos pueden costar más"] },
            { title: "Señales de un agente falso", bullets: ["\"Dame tu teléfono, yo lo hago\"", "Te pide el PIN", "No tiene letrero ni número de agente"] },
            { title: "Revisión mensual", bullets: ["Lee tu estado de cuenta en el menú o la app", "Busca pagos que no conoces", "Anota el total enviado y el total recibido"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Busca la tabla oficial de comisiones de tu proveedor (sitio web, app o cartel en la tienda). Anota la comisión para enviar un monto que envías a menudo, por ejemplo KES 1,000, NGN 5,000, GHS 100 o XOF 10,000. Luego abre tu mini estado de cuenta y revisa cada línea.",
          youCanNow: "leer la comisión real en la tarifa oficial, usar un agente con seguridad y revisar tu estado de cuenta para encontrar pagos extraños.",
          quickCheck: [
            { objective: "O2", q: "El agente te pide el teléfono y el PIN para \"hacerlo más rápido\". ¿Qué haces?", options: ["Se los doy; los agentes son de confianza", "Le doy el teléfono pero no el PIN", "Lo hago yo mismo y guardo mi PIN en privado", "Le escribo el PIN en un papel al agente"], answer: 2, why: "Los agentes reales nunca necesitan tu PIN; tú empiezas y confirmas la operación." },
            { objective: "O5", q: "¿Dónde encuentras la comisión real de un envío?", options: ["Lo que te dice un desconocido", "La tarifa oficial del proveedor, su app o el cartel de la tienda", "Un mensaje reenviado por WhatsApp", "Lo que calcula tu vecino"], answer: 1, why: "Las comisiones cambian y varían según el país, así que léelas en los canales oficiales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona el dinero móvil y cómo usarlo con seguridad",
        questions: [
          { objective: "O1", q: "¿Quién debe conocer tu PIN de dinero móvil?", options: ["Tú y el agente", "Toda tu familia", "Solo tú", "Tú y el servicio al cliente"], answer: 2, why: "Solo tú; el personal, los agentes y la familia nunca lo necesitan." },
          { objective: "O1", q: "Tu línea deja de funcionar de repente y no cambiaste nada. ¿Qué puede ser y qué haces?", options: ["Un cambio de SIM; llamo al proveedor desde otro teléfono para bloquearla", "Batería baja; cargo el teléfono", "Un día festivo; espero una semana", "Nada; ya volverá"], answer: 0, why: "Una línea muerta puede significar que un delincuente pasó tu número; bloquear rápido protege tu billetera." },
          { objective: "O2", q: "¿Cuál es el momento correcto para revisar a quién le pagas?", options: ["Después de escribir el PIN", "En la pantalla de confirmación, antes del PIN", "Al día siguiente", "Solo para montos grandes"], answer: 1, why: "Una vez escrito el PIN, el dinero se mueve; la revisión tiene que ir primero." },
          { objective: "O2", q: "Pagas en una tienda. ¿De dónde debe venir el till o el código de comercio?", options: ["De un mensaje de un número desconocido", "De alguien que llama y dice que la tienda cambió su número", "De un estado de WhatsApp", "Del letrero o el recibo de la tienda"], answer: 3, why: "Los estafadores envían números de pago falsos; tómalo de la propia tienda y revisa el nombre en la pantalla." },
          { objective: "O5", q: "¿Por qué leer tu estado de cuenta una vez al mes?", options: ["Para encontrar pagos que no reconoces", "Para bajar tus comisiones", "Para cambiar tu número", "Porque el proveedor te paga por hacerlo"], answer: 0, why: "Una revisión mensual detecta pronto los fraudes y los errores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Estafas, errores y tu plan de seguridad",
      lessons: [
        {
          title: "Reconocer las estafas de dinero móvil",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identificar las seis estafas comunes de dinero móvil y la señal de alerta de cada una.",
          text: [
            "Los estafadores usan llamadas, SMS, WhatsApp y redes sociales. Se hacen pasar por tu proveedor, un familiar, un agente, un comprador o una empresa que ofrece trabajo. Los trucos cambian, pero las señales de alerta son siempre las mismas.",
            "1. Reversión falsa: te llega un SMS que parece un pago para ti y luego una llamada: \"Te envié dinero por error, por favor devuélvemelo\". Primero revisa tu saldo real. Muchas veces no llegó nada; el SMS vino de un número de teléfono común, no del proveedor. 2. Pedido del PIN o de un código: cualquiera que te pida el PIN o un código de un solo uso. 3. Personal falso: \"Tu cuenta será bloqueada si no marcas este código o no nos das tus datos\". 4. Premio o promoción: \"Ganaste, envía una comisión para recibir tu premio\". 5. Trabajo o préstamo falso: una oferta que te pide pagar una comisión primero. 6. Mensaje urgente de un familiar: \"Mamá, estoy en problemas, envía dinero a este número nuevo\".",
            "Los mensajes reales del proveedor llegan desde su nombre oficial o su número corto, no desde un número de celular común. Los proveedores no te piden marcar códigos para arreglar tu cuenta ni para ganar un premio. Si algo parece urgente, detente. Vuelve a llamar a la persona o al proveedor a un número que ya conoces.",
            "Ejemplo: a Chinedu, en Enugu, le llega un SMS que dice que recibió NGN 20,000, y luego una llamada que le pide devolverlos. Revisa su saldo en la app: no llegó nada. Cuelga y denuncia el número."
          ],
          steps: ["Revisa el remitente: ¿nombre oficial o número corto, o un número común?", "Revisa tu saldo real en el menú o la app.", "Pregúntate: ¿me piden el PIN, un código, una comisión o que me apure?", "Detente y vuelve a llamar a un número que ya conoces.", "Denuncia el número del estafador a tu proveedor."],
          words: [["Reversión falsa", "un truco en el que alguien finge que te envió dinero por error y te pide que se lo devuelvas."], ["Código de un solo uso (OTP)", "un código corto que llega a tu teléfono para confirmar una acción; nunca lo compartas."], ["Número corto", "el número oficial corto desde el que un proveedor envía mensajes."]],
          slides: [
            { title: "Seis estafas comunes", bullets: ["Reversión falsa; pedido del PIN o de un código; personal falso", "Premio que pide una comisión; trabajo o préstamo que pide una comisión", "Mensaje urgente de un familiar desde un número nuevo"] },
            { title: "Reversión falsa", bullets: ["Un SMS parece decir que llegó dinero", "Llamada: \"Te lo envié por error, devuélvemelo\"", "Revisa tu saldo real: muchas veces no llegó nada"] },
            { title: "Señales de alerta", bullets: ["Te piden el PIN o un código", "Te piden una comisión primero", "Te apuran; llega desde un número común"] },
            { title: "Qué hacer", bullets: ["Detente. Revisa tu saldo", "Vuelve a llamar a un número que ya conoces", "Denuncia el número a tu proveedor"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Revisa tu bandeja de SMS y busca mensajes sobre dinero. Para cada uno, decide: ¿número corto oficial o número común? ¿Pide un PIN, un código, una comisión o que te apures? Anota las señales de estafa que encuentres.",
          youCanNow: "reconocer las seis estafas comunes de dinero móvil y decir la señal de alerta de cada una.",
          quickCheck: [
            { objective: "O3", q: "Un SMS de un número de celular común dice que recibiste XAF 25,000. Luego alguien llama y te pide que se los devuelvas. ¿Qué haces primero?", options: ["Lo devuelvo rápido para ser honesto", "Reviso mi saldo real en el menú o la app", "Le doy mi PIN para que lo revierta", "Reenvío el SMS a mis amigos"], answer: 1, why: "Los SMS de reversión falsa vienen de números comunes; tu saldo real muestra la verdad." },
            { objective: "O3", q: "Un mensaje dice que ganaste un teléfono y que primero debes pagar el envío. ¿Cuál es la señal de alerta?", options: ["Menciona un teléfono", "Llegó en la noche", "Te pide pagar una comisión para recibir un premio", "Usa tu nombre"], answer: 2, why: "Los premios reales no piden una comisión primero; pagar para recibir es una estafa clásica." }
          ]
        },
        {
          title: "Envío equivocado o fraude: la primera hora",
          objectives: ["O4"],
          minutes: 5,
          goal: "Denunciar un envío equivocado o un fraude por los canales oficiales de tu proveedor el mismo día.",
          text: [
            "Actúa rápido. Una reversión es más fácil mientras el dinero sigue en la otra billetera. Guarda el SMS de confirmación original; no lo borres ni lo cambies.",
            "Usa solo canales oficiales: la línea de ayuda impresa en el paquete de tu SIM o en el sitio web del proveedor, la app oficial, el número corto oficial o una tienda del proveedor. Nunca uses un número que te da un desconocido o que aparece en un comentario en redes sociales, y nunca le pagues a alguien que ofrece \"recuperar\" tu dinero a cambio de una comisión.",
            "Ejemplo de Kenia: entre los canales que publica Safaricom están reenviar el SMS de confirmación de M-Pesa al 456 para pedir la reversión de un envío a la persona equivocada, llamar al 100 si el till o el Paybill estaba equivocado, y reenviar un número o un mensaje de fraude al 333. Otros proveedores tienen sus propios pasos; léelos en el sitio web o la app oficial del proveedor, porque los números y los pasos cambian.",
            "Una reversión no está garantizada. Si la persona ya retiró el dinero y se niega a devolverlo, el proveedor puede indicarte que vayas a la policía. Si te robaron el PIN o la línea, denúncialo primero al proveedor y luego a la policía. Si el proveedor no lo resuelve, el banco central tiene un proceso de reclamos para consumidores (por ejemplo, el Banco Central de Nigeria o el Banco de Ghana)."
          ],
          steps: ["No borres el SMS de confirmación.", "Dentro de la primera hora, usa el canal oficial de reversión o de fraude de tu proveedor.", "Anota la fecha, la hora, el monto, el ID de la transacción y con quién hablaste.", "Si te robaron el PIN o la línea, primero bloquea la SIM y la billetera.", "Si hace falta, denuncia a la policía con el SMS.", "Si el proveedor no lo resuelve, usa el proceso de reclamos del banco central."],
          words: [["Reversión", "cuando el proveedor devuelve el dinero enviado a un número equivocado, si todavía está allí."], ["ID de la transacción", "el código en el SMS de confirmación que identifica un pago."], ["Estafa de recuperación", "una oferta falsa para recuperar tu dinero perdido si pagas una comisión."]],
          slides: [
            { title: "Actúa en la primera hora", bullets: ["La reversión es más fácil mientras el dinero sigue allí", "Guarda el SMS de confirmación original", "Anota fecha, hora, monto e ID de la transacción"] },
            { title: "Solo canales oficiales", bullets: ["Línea de ayuda del paquete de la SIM o del sitio web oficial", "App oficial, número corto o tienda del proveedor", "Nunca un número que te da un desconocido"] },
            { title: "Ejemplo: Kenia (Safaricom)", bullets: ["Persona equivocada: reenvía el SMS al 456", "Till o Paybill equivocado: llama al 100", "Número o mensaje de fraude: reenvíalo al 333"] },
            { title: "Si no se resuelve", bullets: ["Denuncia a la policía con el SMS", "Proceso de reclamos del banco central", "Nunca pagues una comisión de \"recuperación\""] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Busca los pasos oficiales de reversión y de fraude de tu proveedor en su sitio web, su app o el paquete de la SIM. Escríbelos en papel: el número o el código, y qué hay que enviar. No los copies de un mensaje reenviado por WhatsApp.",
          youCanNow: "actuar dentro de la primera hora después de un envío equivocado o un fraude, usando solo los canales oficiales de tu proveedor.",
          quickCheck: [
            { objective: "O4", q: "Enviaste dinero a un número equivocado. ¿Qué guardas?", options: ["Nada; borro el SMS", "Solo el monto, en la cabeza", "Una captura de pantalla de un desconocido", "El SMS de confirmación original"], answer: 3, why: "El mensaje de confirmación original tiene el ID de la transacción que necesita el proveedor." },
            { objective: "O4", q: "Alguien en Facebook ofrece recuperar tu dinero perdido por una pequeña comisión. ¿Qué es esto?", options: ["Una estafa de recuperación; uso solo los canales oficiales", "Un servicio útil", "El proceso del banco central", "Una tienda del proveedor"], answer: 0, why: "Pagarle a un desconocido para recuperar dinero es una segunda estafa; los canales oficiales son gratuitos." }
          ]
        },
        {
          title: "Tu plan de seguridad de dinero móvil",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir un plan de seguridad de dinero móvil de una página para ti o tu familia.",
          text: [
            "Un plan de seguridad reúne todo lo de este curso en una página, para que tú y tu familia sepan qué hacer antes de que algo salga mal. Guárdalo en papel en casa, no solo en el teléfono.",
            "Tiene seis partes: 1. Reglas del PIN y del teléfono (PIN difícil, bloqueo de pantalla, PIN de la SIM, nunca compartir). 2. La revisión del nombre antes de cada PIN. 3. Los canales oficiales de ayuda y de fraude de tu proveedor, copiados de su sitio web, su app o el paquete de la SIM. 4. Las seis señales de estafa. 5. Los pasos de la primera hora después de un envío equivocado o un fraude. 6. Una revisión mensual del estado de cuenta, con una fecha.",
            "Conversen sobre el plan con los padres mayores y los adolescentes, que a menudo son el blanco de las estafas. Acuerden una regla familiar: \"Nunca enviamos dinero a un número nuevo por un mensaje urgente. Primero volvemos a llamar al número de siempre\".",
            "Ejemplo: Fátima, una comerciante de Casablanca, guarda su plan dentro de su libro de caja. Cada fin de mes revisa el historial de su billetera y marca la fecha en el plan."
          ],
          steps: ["Escribe tus reglas del PIN y del bloqueo del teléfono.", "Escribe la regla de revisar el nombre.", "Copia los canales oficiales de ayuda y de fraude de tu proveedor desde una fuente oficial.", "Haz una lista de las seis señales de estafa.", "Escribe tus pasos de la primera hora.", "Fija una fecha cada mes para revisar tu estado de cuenta.", "Léelo con tu familia."],
          words: [["Plan de seguridad", "una lista corta y escrita de reglas y pasos que protegen tu dinero."]],
          slides: [
            { title: "Una página, seis partes", bullets: ["Reglas del PIN y del teléfono; la revisión del nombre", "Canales oficiales de ayuda y de fraude", "Señales de estafa; pasos de la primera hora; revisión mensual"] },
            { title: "Solo canales oficiales", bullets: ["Cópialos del sitio web, la app o el paquete de la SIM", "No de un mensaje reenviado ni de un desconocido"] },
            { title: "Compártelo en casa", bullets: ["Los padres y los adolescentes suelen ser el blanco", "Regla familiar: primero vuelve a llamar al número de siempre", "Guarda el plan en papel"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Tarea final: escribe tu plan de seguridad de dinero móvil de una página con las seis partes. Copia los canales de ayuda y de fraude de tu proveedor desde su sitio web oficial, su app o el paquete de la SIM. Léelo con un familiar.",
          youCanNow: "escribir y compartir un plan de seguridad de dinero móvil que te protege a ti y a tu familia.",
          quickCheck: [
            { objective: "O5", q: "¿De dónde deben venir los números de ayuda de tu plan?", options: ["De un mensaje reenviado por WhatsApp", "Del sitio web oficial, la app o el paquete de la SIM del proveedor", "De alguien que llama y dice ser del personal", "De un comentario en redes sociales"], answer: 1, why: "Los estafadores difunden números de ayuda falsos; cópialos solo de fuentes oficiales." },
            { objective: "O5", q: "¿Qué regla familiar protege contra la estafa del mensaje urgente?", options: ["Enviar siempre rápido en una emergencia", "Compartir un mismo PIN para toda la familia", "Responder con tu PIN para probar que eres tú", "Volver a llamar al número de siempre de la persona antes de enviar"], answer: 3, why: "Llamar a un número conocido muestra si el mensaje urgente es real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Estafas, errores y tu plan de seguridad",
        questions: [
          { objective: "O3", q: "\"Tu cuenta será bloqueada hoy. Marca este código y escribe tu PIN para conservarla\". Esto es:", options: ["Un mensaje normal del proveedor", "Una estafa: te apura y te pide el PIN", "Una reversión", "Una promoción"], answer: 1, why: "Los proveedores nunca te piden marcar un código con tu PIN; apurarte es una señal de alerta." },
          { objective: "O3", q: "¿Qué mensaje es más probable que sea real?", options: ["De un número común: \"Devuélveme el dinero que te envié por error\"", "\"¡Ganaste! Paga una comisión para reclamarlo\"", "Una confirmación de pago desde el nombre oficial del proveedor, que coincide con tu saldo", "\"Mamá, número nuevo, envía dinero ya\""], answer: 2, why: "Las confirmaciones reales llegan desde el nombre oficial o el número corto y coinciden con tu saldo real." },
          { objective: "O4", q: "¿Cuándo debes denunciar un envío equivocado?", options: ["El mes que viene", "Solo si es un monto grande", "Después de que la otra persona lo gaste", "El mismo día, lo más rápido posible"], answer: 3, why: "Una reversión es más fácil mientras el dinero sigue en la otra billetera." },
          { objective: "O4", q: "La persona que recibió tu dinero por error ya lo retiró y se niega a devolverlo. ¿Qué sigue?", options: ["Seguir el consejo del proveedor y denunciar a la policía con tu SMS", "Pagarle a un desconocido para recuperarlo", "Borrar el SMS", "Enviarle más dinero"], answer: 0, why: "Una vez retirado, puede volverse un asunto policial; tu SMS es tu prueba." },
          { objective: "O5", q: "¿Cada cuánto dice el plan de seguridad que revises tu estado de cuenta?", options: ["Nunca", "Una vez al mes", "Una vez cada cinco años", "Solo cuando se pierde el teléfono"], answer: 1, why: "Una revisión mensual regular detecta pronto los pagos extraños." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Usar el dinero móvil con seguridad (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "¿Cuál es el PIN más débil?", options: ["Cuatro dígitos al azar", "Un número que solo tú conoces", "Un PIN que cambiaste hace poco", "Tu año de nacimiento"], answer: 3, why: "Tu año de nacimiento es fácil de encontrar y de adivinar para otros." },
      { objective: "O1", q: "¿Quién puede pedirte con seguridad tu PIN de dinero móvil?", options: ["Nadie", "El servicio al cliente", "Un agente registrado", "Tu banco"], answer: 0, why: "Nadie necesita tu PIN; el personal real y los agentes nunca lo piden." },
      { objective: "O1", q: "Te roban el teléfono. ¿Cuál es el primer paso?", options: ["Comprar un teléfono nuevo el mes que viene", "Llamar al proveedor desde otro teléfono para bloquear la SIM y la billetera", "Enviarle un mensaje al ladrón", "Esperar a ver si aparece"], answer: 1, why: "Bloquear rápido impide que el ladrón use tu billetera." },
      { objective: "O1", q: "¿Por qué poner un bloqueo de pantalla y un PIN de la SIM?", options: ["Para que el teléfono sea más rápido", "Para bajar las comisiones", "Para que un ladrón no pueda usar fácilmente tu teléfono o tu SIM", "Porque los agentes lo necesitan"], answer: 2, why: "Los bloqueos frenan a cualquiera que se quede con tu teléfono o tu SIM." },
      { objective: "O2", q: "¿Qué tres cosas revisas en la pantalla de confirmación?", options: ["La hora, el clima y la batería", "El nombre, el número y el monto", "El agente, el color y la fecha", "La comisión, la red y la señal"], answer: 1, why: "El nombre, el número y el monto te dicen que el dinero va al lugar correcto." },
      { objective: "O2", q: "Querías enviar GHS 50 y la pantalla muestra GHS 500. ¿Qué haces?", options: ["Cancelo y lo escribo otra vez", "Escribo el PIN y pido el cambio", "Lo envío y lo revierto después", "Escribo la mitad del PIN"], answer: 0, why: "Cancela antes del PIN; corregirlo después es difícil." },
      { objective: "O2", q: "Un mensaje dice que tu proveedor de mercancía tiene \"un nuevo número de pago\". ¿Qué haces?", options: ["Pago de inmediato al número nuevo", "Lo reenvío a otros clientes", "Llamo al proveedor al número que ya tengo para verificar", "Pago la mitad a cada número"], answer: 2, why: "Los números de pago falsos son un truco común; verifica con la persona en un número conocido." },
      { objective: "O2", q: "Con un agente, ¿qué es seguro?", options: ["Darle al agente tu teléfono y tu PIN", "Irte antes de contar el efectivo", "Usar un agente sin letrero", "Empezar el retiro en tu propio teléfono y contar el efectivo"], answer: 3, why: "Mantienes el control de tu PIN y revisas el efectivo antes de irte." },
      { objective: "O3", q: "En una estafa de reversión falsa, ¿qué pasó normalmente?", options: ["Llegó dinero real por error", "Un SMS falso desde un número común fingió que llegó dinero", "El proveedor cometió un error", "El agente perdió el dinero"], answer: 1, why: "El SMS falso parece un pago, pero tu saldo real muestra que no llegó nada." },
      { objective: "O3", q: "¿Cuál es una señal de alerta de estafa?", options: ["Te piden una comisión antes de darte un premio, un trabajo o un préstamo", "El mensaje viene del número corto oficial", "El monto coincide con tu saldo", "Tú mismo empezaste el pago"], answer: 0, why: "Pagar primero para recibir es una señal clásica de estafa." },
      { objective: "O3", q: "Un mensaje de WhatsApp desde un número nuevo: \"Papá, perdí mi teléfono, envía XOF 30,000 a este número ya\". ¿Qué haces?", options: ["Lo envío rápido", "Envío la mitad", "Primero llamo a mi hijo a su número de siempre", "Respondo con mi PIN"], answer: 2, why: "Llamar al número de siempre comprueba si el mensaje urgente es real." },
      { objective: "O3", q: "¿Cómo llegan normalmente los mensajes reales del proveedor?", options: ["Desde un número de celular común", "Desde el nombre oficial o el número corto del proveedor", "Por el WhatsApp de un desconocido", "Desde una página de redes sociales que pide tu PIN"], answer: 1, why: "Los proveedores envían desde nombres oficiales o números cortos; los números comunes son una señal de alerta." },
      { objective: "O4", q: "En Kenia, el paso que publica Safaricom para pedir la reversión de un envío a la persona equivocada es:", options: ["Publicarlo en Facebook", "Llamar a cualquier número de internet", "Reenviar el SMS de confirmación al 456", "Enviar tu PIN al 100"], answer: 2, why: "Reenviar la confirmación original de M-Pesa al 456 inicia una solicitud de reversión (revisa el sitio de Safaricom para ver los pasos actuales)." },
      { objective: "O4", q: "¿Qué datos anotas cuando denuncias un problema?", options: ["Fecha, hora, monto e ID de la transacción", "Tu PIN", "Tu código de un solo uso", "Tu contraseña"], answer: 0, why: "Estos datos ayudan al proveedor a encontrar el pago; nunca compartas tu PIN ni tus códigos." },
      { objective: "O4", q: "¿Dónde encuentras el número oficial de ayuda de tu proveedor?", options: ["En un comentario de una publicación de Facebook", "Con alguien que llama y dice ser del personal", "En un mensaje de un número común", "En el paquete de la SIM, el sitio web oficial o la app oficial"], answer: 3, why: "Las fuentes oficiales dan números reales; los estafadores difunden números falsos." },
      { objective: "O4", q: "El proveedor no resolvió tu reclamo. ¿Qué más puedes usar?", options: ["Un desconocido que cobra una comisión de recuperación", "El proceso de reclamos para consumidores del banco central", "Nada más", "Un PIN nuevo para la otra persona"], answer: 1, why: "Los bancos centrales, como el CBN (Banco Central de Nigeria) y el Banco de Ghana, tienen procesos de reclamos." },
      { objective: "O5", q: "¿Qué va en tu plan de seguridad de dinero móvil?", options: ["Tu PIN escrito completo", "Tus códigos de un solo uso", "El canal oficial de fraude de tu proveedor", "El PIN de tu vecino"], answer: 2, why: "El plan incluye reglas y canales oficiales, nunca números secretos." },
      { objective: "O5", q: "¿Por qué guardar el plan de seguridad en papel en casa?", options: ["Para que la familia pueda usarlo aunque se pierda el teléfono", "Porque los teléfonos no guardan notas", "Para mostrárselo a los agentes", "Para publicarlo en internet"], answer: 0, why: "Si te roban el teléfono, el plan en papel todavía te dice qué hacer." },
      { objective: "O5", q: "¿Con quién deberías repasar el plan de seguridad?", options: ["Con desconocidos en el mercado", "Con alguien que llama y dice ser del proveedor", "Con nadie", "Con familiares como los padres mayores y los adolescentes"], answer: 3, why: "Los familiares suelen ser el blanco de las estafas; compartir el plan también los protege." },
      { objective: "O5", q: "¿Dónde lees la comisión real de una operación?", options: ["En un mensaje reenviado por WhatsApp", "En la tarifa oficial del proveedor, su app o el cartel de la tienda", "En lo que calcula un amigo", "En un comentario en redes sociales"], answer: 1, why: "Las comisiones varían según el país y cambian; los canales oficiales muestran la comisión actual." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Reglas del PIN y del teléfono", objective: "O1", notYet: "No hay reglas del PIN, o el plan contiene un PIN o un código real.", meets: "Dice: PIN difícil de adivinar, bloqueo de pantalla, nunca compartir el PIN ni los códigos, bloquear de inmediato si se pierde el teléfono.", exceeds: "También incluye un PIN de la SIM y qué hacer si la línea se apaga de repente (posible cambio de SIM)." },
      { name: "Revisión del nombre", objective: "O2", notYet: "No hay ningún paso de revisión antes del PIN.", meets: "Dice que hay que revisar el nombre, el número y el monto en la pantalla de confirmación y guardar el SMS de confirmación.", exceeds: "Agrega tomar los códigos de till o de comercio solo de la propia tienda y volver a llamar a un número conocido cuando aparecen números de pago \"nuevos\"." },
      { name: "Señales de estafa", objective: "O3", notYet: "Menos de cuatro señales de estafa, o señales vagas.", meets: "Enumera las seis estafas comunes con una señal de alerta para cada una.", exceeds: "Agrega un ejemplo real que el participante o su familia haya visto y cómo lo reconocieron." },
      { name: "Canales oficiales y primera hora", objective: "O4", notYet: "Faltan los números de ayuda, o se copiaron de una fuente no oficial.", meets: "Da los canales oficiales de ayuda, reversión y fraude del proveedor (del sitio web, la app o el paquete de la SIM) y los pasos de la primera hora.", exceeds: "También nombra la vía de reclamos del banco central y el paso de la policía, y dice de dónde se copió cada canal." },
      { name: "Revisión mensual y compartir", objective: "O5", notYet: "No hay revisión regular y el plan no se compartió.", meets: "Fija una revisión mensual del estado de cuenta y el plan se leyó con un familiar.", exceeds: "Incluye una regla familiar de volver a llamar y una primera revisión ya hecha y con fecha." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que dicen, a los 30 días, que revisan el nombre antes de cada PIN y leen su estado de cuenta cada mes",
      "Participantes que dicen haber reconocido y rechazado una llamada o un mensaje de estafa en 30 días",
      "Menos pérdidas de dinero móvil reportadas por los miembros de un grupo de ahorro, una asociación de mercado o un grupo comunitario asociado"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono con una cuenta de dinero móvil (teléfono básico o inteligente)",
      "La tabla oficial de comisiones y los canales de ayuda del proveedor (sitio web, app, cartel en la tienda o paquete de la SIM)",
      "Papel y lápiz para el plan de seguridad",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Sirve para asociaciones de mercado, grupos de ahorro, iglesias, mezquitas, grupos de jóvenes y grupos de mujeres: hagan juntos la prueba inicial y un capítulo por reunión.",
      "Nunca pidas a los participantes que escriban o digan un PIN o un código real en la práctica. Muestra los menús en un teléfono de demostración o dibujando las pantallas.",
      "Antes de la sesión, busca los pasos oficiales de reversión y de fraude de los proveedores que usa tu grupo en tu país, en los propios sitios web o tiendas de los proveedores, y verifica que estén vigentes.",
      "Invita a los miembros a compartir mensajes de estafa que recibieron (con los números personales ocultos) y a ordenarlos por señal de alerta.",
      "Califica la tarea final con la rúbrica; nunca recojas los planes si los participantes agregaron datos personales."
    ]
  }
};

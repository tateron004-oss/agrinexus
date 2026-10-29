"use strict";

// Koach Learn course (shared), Spanish translation of shared/online-shopping-banking.js. See scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026 against the FTC, FDIC and NCUA pages in `sources`).

module.exports = {
  id: "online-shopping-banking-es",
  lang: "es",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Compras y banca en línea con seguridad",
  skills: "Comprobar que una tienda es real, Pagar de la forma más segura, Rastrear y devolver un pedido, Usar la aplicación del banco con seguridad, Detectar y denunciar estafas de dinero",
  outcome: "comprar algo en línea en una tienda que revisaste, pagar de la forma más segura, guardar los comprobantes y usar la aplicación o el sitio web oficial de tu banco para ver tu saldo y detectar un cargo que no hiciste.",
  about: [
    "Hoy mucha gente compra comida, medicinas y cosas para la casa en línea y paga sus cuentas desde el teléfono. Hecho con seguridad, ahorra viajes y tiempo. Hecho sin cuidado, puede costar dinero.",
    "Este curso te enseña a revisar una tienda antes de comprar, a pagar de la forma que más te protege, a rastrear y devolver un pedido, a usar la aplicación o el sitio web de tu banco con seguridad y a detectar estafas de dinero.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una breve comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso enseña hábitos seguros; no es asesoría financiera. Para preguntas sobre tu propia cuenta, llama al número que está detrás de tu tarjeta bancaria."
  ],
  finalTask: "Elige una cosa que necesites. Revisa la tienda con tres comprobaciones (dirección web real, reseñas y quejas, política de devoluciones), agrégala al carrito y detente en la página de pago, anotando qué forma de pago usarías y por qué. Luego abre la aplicación o el sitio web oficial de tu banco, revisa tu saldo y tus movimientos recientes, y explica qué harías si vieras un cargo que no hiciste.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que quieren comprar y usar el banco en línea con seguridad: personas mayores, cuidadores que manejan el dinero de un pariente, personas que regresan a la comunidad y están abriendo cuentas nuevas, y cualquiera que haya evitado las compras o la banca en línea por miedo a las estafas.",
    startingPoint: "Pueden usar un teléfono o una computadora para abrir sitios web y aplicaciones, y quizás tienen una cuenta bancaria y una tarjeta de débito o de crédito. Muchos no están seguros de cómo distinguir una tienda falsa de una real, qué formas de pago los protegen, cómo rastrear y devolver un pedido, o qué hacer con un cargo que no hicieron.",
    gap: "Las compras, el pago de cuentas y la banca se han mudado a internet, y los estafadores también, con tiendas falsas, mensajes de texto falsos de entregas y llamadas falsas del banco. Saber unas pocas comprobaciones y la forma más segura de pagar permite ahorrar tiempo y dinero y evitar pérdidas que son difíciles o imposibles de recuperar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explican palabras como disputa, saldo y verificación en dos pasos",
      "Dispositivos: un teléfono o una computadora con internet; la aplicación o el sitio web oficial del banco",
      "Tiempo: unos 5 minutos por lección, unos 60 minutos en total",
      "No hace falta una compra real: la tarea final se detiene en la página de pago",
      "Privacidad: nunca se escriben números de tarjeta, contraseñas ni códigos frente a otras personas, en un Wi-Fi público sin datos propios, ni en un correo, un mensaje de texto o un chat"
    ],
    prerequisites: "Ninguno. Fundamentos de internet o Usar un teléfono inteligente y una tableta ayudan a quienes son nuevos con los sitios web y las aplicaciones."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante una tienda o una oferta en línea", action: "revisar la tienda con tres comprobaciones antes de comprar: una dirección web real, reseñas y quejas, y la política de devoluciones", standard: "con las tres comprobaciones hechas y una decisión clara de comprar o no comprar" },
    { id: "O2", condition: "En la página de pago de una tienda", action: "elegir una forma de pago que te proteja y explicar por qué", standard: "sin elegir nunca tarjetas de regalo, transferencias de dinero, aplicaciones de pago ni cripto para un vendedor en línea" },
    { id: "O3", condition: "Después de hacer un pedido", action: "guardar los comprobantes del pedido, rastrear el paquete desde el sitio o la aplicación de la propia tienda y empezar una devolución", standard: "con la confirmación guardada y sin rastrear nada desde enlaces de mensajes de texto inesperados" },
    { id: "O4", condition: "Con la aplicación o el sitio web oficial de tu banco", action: "iniciar sesión con seguridad y revisar tu saldo y tus movimientos recientes", standard: "llegando al banco sin un enlace de un correo o un mensaje de texto, y cerrando sesión al final" },
    { id: "O5", condition: "Con la lista de tus movimientos recientes", action: "identificar un cargo que no hiciste y describir los pasos para reportarlo y bloquear la tarjeta", standard: "llamando al número de la tarjeta o de la aplicación oficial y actuando rápido" },
    { id: "O6", condition: "Ante una llamada, un mensaje de texto o un correo sobre tu dinero", action: "identificar las señales de una estafa de dinero y detenerla", standard: "sin dar nunca una contraseña ni un código y llamando siempre al número de tu tarjeta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comprar en línea con seguridad",
      lessons: [
        {
          objectives: ["O1"],
          title: "Comprobar que una tienda es real",
          minutes: 5,
          goal: "Revisar un sitio web antes de comprar en él.",
          text: [
            "Las tiendas falsas copian el aspecto de las reales y anuncian precios demasiado buenos para ser verdad. Antes de comprar, tómate un minuto para revisar.",
            "Escribe tú mismo la dirección de la tienda, o usa su aplicación oficial, en lugar de hacer clic en un anuncio o en un enlace de un mensaje. Mira la barra de direcciones: ¿el nombre está bien escrito? Busca https y un candado, pero ten en cuenta que la Comisión Federal de Comercio de EE. UU. (FTC) advierte que los estafadores también pueden usarlos.",
            "La FTC sugiere buscar el nombre de la tienda o del producto con la palabra \"queja\" o \"estafa\" (o en inglés, \"complaint\" o \"scam\") para ver lo que dicen otros compradores, leer las reseñas con cuidado porque algunas son falsas y revisar la política de devoluciones antes de comprar: cuántos días tienes y quién paga el envío de vuelta."
          ],
          steps: ["Escribe tú mismo la dirección de la tienda o usa su aplicación oficial.", "Revisa cómo está escrita la dirección web.", "Busca el nombre de la tienda más \"queja\" o \"estafa\".", "Lee varias reseñas, no solo las estrellas.", "Lee la política de devoluciones: cuántos días y quién paga el envío de vuelta."],
          words: [["Dirección web", "el nombre de un sitio web, que aparece en la barra de arriba del navegador, como target.com."], ["https", "una señal de que la conexión con un sitio está protegida; los estafadores también pueden usarla."], ["Política de devoluciones", "las reglas de la tienda para devolver cosas."]],
          slides: [
            { title: "Las tiendas falsas parecen reales", bullets: ["Copian logotipos reales", "Precios demasiado buenos para ser verdad"] },
            { title: "Llega con seguridad", bullets: ["Escribe tú la dirección o usa la aplicación oficial", "Revisa cómo está escrita", "https y un candado ayudan, pero los estafadores también los usan"] },
            { title: "Tres comprobaciones antes de comprar", bullets: ["Busca el nombre más \"queja\" o \"estafa\"", "Lee varias reseñas, no solo las estrellas", "Lee la política de devoluciones"] }
          ],
          sources: [{ name: "FTC: Comprar en línea", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Elige una tienda donde podrías comprar. Haz las tres comprobaciones: busca su nombre con \"queja\", lee tres reseñas y encuentra cuántos días tienes para devolver algo.",
          youCanNow: "revisar la dirección, la reputación y la política de devoluciones de una tienda antes de comprar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debes revisar en la barra de direcciones antes de comprar?", options: ["El color de la página", "Cuántas cosas hay en el carrito", "La hora del día", "Que el nombre de la tienda esté bien escrito"], answer: 3, why: "Las tiendas falsas suelen usar nombres parecidos, así que revisa cómo está escrito." },
            { objective: "O1", q: "Ves en las redes sociales un anuncio de zapatos a un precio muy bajo. ¿Qué harías?", options: ["Escribir tú mismo la dirección de la tienda y buscar su nombre con \"quejas\" o \"estafa\"", "Hacer clic en el anuncio y pagar de inmediato", "Enviarle al vendedor una tarjeta de regalo", "Compartir el número de tu tarjeta en un mensaje"], answer: 0, why: "Ir tú mismo a la tienda y buscar quejas te ayuda a detectar tiendas falsas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pagar de la forma más segura",
          minutes: 5,
          goal: "Elegir una forma de pago que te proteja si algo sale mal.",
          text: [
            "Cómo pagas importa. La FTC dice que pagar con tarjeta de crédito te da una protección fuerte: puedes disputar un cargo equivocado, por algo que nunca llegó o que no era como lo describían. Actúa rápido y avisa a la compañía de tu tarjeta en cuanto veas un problema.",
            "La FTC advierte que nunca le pagues a un vendedor en línea con tarjetas de regalo, transferencias de dinero, aplicaciones de pago o criptomonedas. Es difícil recuperar ese dinero, y por eso los estafadores los piden.",
            "Escribe los datos de tu tarjeta solo en la página de pago de una tienda que revisaste, nunca en un correo, un mensaje de texto o un chat. En una computadora compartida o de la biblioteca, no dejes que el navegador guarde tu tarjeta."
          ],
          steps: ["Usa una tarjeta de crédito cuando puedas, o un pago confiable de la tienda que revisaste.", "Nunca le pagues a un vendedor con tarjeta de regalo, transferencia, aplicación de pago o criptomonedas.", "Escribe los datos de la tarjeta solo en la página de pago de la tienda revisada.", "No guardes tu tarjeta en una computadora compartida.", "Revisa tu estado de cuenta y avisa rápido de cualquier problema."],
          words: [["Tarjeta de crédito", "una tarjeta que te presta dinero que pagas después; tiene protecciones fuertes para disputas."], ["Disputa", "decirle a la compañía de tu tarjeta que un cargo está mal para que lo investigue."], ["Transferencia de dinero", "enviar dinero directo de una cuenta a otra; es muy difícil de recuperar."]],
          slides: [
            { title: "Cómo pagas importa", bullets: ["Tarjeta de crédito: protección fuerte para disputas", "Avisa rápido a la compañía de tu tarjeta"] },
            { title: "Nunca le pagues a un vendedor con", bullets: ["Tarjetas de regalo", "Transferencias de dinero", "Aplicaciones de pago", "Criptomonedas"] },
            { title: "Datos de la tarjeta", bullets: ["Solo en la página de pago de una tienda revisada", "Nunca en un correo, mensaje o chat", "No los guardes en computadoras compartidas"] }
          ],
          sources: [{ name: "FTC: Comprar en línea", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Mira las tarjetas y formas de pago que tienes. Escribe cuál usarías para comprar en línea y por qué, y qué formas rechazarías si un vendedor te las pidiera.",
          youCanNow: "elegir la forma de pago que te protege y rechazar las que piden los estafadores.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa disputar un cargo?", options: ["Pagarlo dos veces", "Pedirle a la compañía de tu tarjeta que corrija un cargo equivocado", "Enviarle al vendedor una tarjeta de regalo", "Borrar tu cuenta"], answer: 1, why: "Con una tarjeta de crédito puedes disputar un cargo por algo equivocado o que nunca llegó." },
            { objective: "O2", q: "Un vendedor en línea dice que solo acepta una transferencia de dinero. ¿Qué harías?", options: ["Enviar la transferencia", "Pagar la mitad con transferencia y la mitad con tarjeta de regalo", "No comprar; la FTC advierte que nunca hay que pagar así a vendedores en línea", "Pagar con criptomonedas en su lugar"], answer: 2, why: "Las transferencias de dinero son difíciles de recuperar, y por eso los estafadores las piden." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Rastrear, recibir y devolver un pedido",
          minutes: 4,
          goal: "Guardar los comprobantes de tu pedido, rastrear un paquete y empezar una devolución.",
          text: [
            "Después de comprar, la tienda envía una confirmación del pedido por correo. Guárdala. La FTC sugiere guardar los datos de tu pedido, la política de devoluciones, la promesa de envío del vendedor, tus mensajes con el vendedor y tu estado de cuenta.",
            "Rastrea el paquete desde tu cuenta en el sitio web o la aplicación de la tienda, no desde un enlace en un mensaje inesperado. Los mensajes falsos de \"problema con la entrega\" son una estafa común.",
            "Para devolver algo, inicia sesión en tu cuenta, busca el pedido y elige devolver. Sigue los pasos, guarda el recibo de cuando lo entregaste y espera el reembolso en tu estado de cuenta. Si el vendedor no arregla un problema, puedes denunciarlo ante la FTC en reportfraud.ftc.gov."
          ],
          steps: ["Guarda el correo de confirmación del pedido.", "Rastrea el paquete desde tu cuenta en el sitio o la aplicación de la tienda.", "Ignora los mensajes inesperados de entregas que traen enlaces.", "Para devolver: inicia sesión, busca el pedido, elige devolver y sigue los pasos.", "Guarda el recibo de entrega y revisa que llegue el reembolso."],
          words: [["Confirmación del pedido", "el correo que prueba lo que compraste y lo que pagaste."], ["Rastreo", "seguir dónde está tu paquete en camino hacia ti."], ["Reembolso", "dinero que te devuelven."]],
          slides: [
            { title: "Guarda los comprobantes", bullets: ["Confirmación del pedido", "Política de devoluciones y promesa de envío", "Mensajes y tu estado de cuenta"] },
            { title: "Rastrea con seguridad", bullets: ["Usa tu cuenta en el sitio o la aplicación de la tienda", "Ignora los mensajes inesperados de entregas con enlaces"] },
            { title: "Devoluciones", bullets: ["Inicia sesión, busca el pedido, elige devolver", "Guarda el recibo de entrega", "Espera el reembolso"] }
          ],
          sources: [{ name: "FTC: Comprar en línea", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Busca un correo de confirmación de pedido en tu bandeja de entrada (o uno de una compra pasada) y crea una carpeta o etiqueta de correo llamada \"Pedidos\" para guardarlo. Si tienes un pedido en camino, rastréalo desde la aplicación o el sitio de la propia tienda.",
          youCanNow: "guardar los comprobantes de tus pedidos, rastrear un paquete con seguridad y empezar una devolución.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una confirmación del pedido?", options: ["Un mensaje de texto que te pide pagar una tarifa", "Un anuncio de un producto nuevo", "El correo que la tienda envía después de que compras", "Un estado de cuenta del banco"], answer: 2, why: "La tienda envía por correo una confirmación del pedido; guárdala con tus comprobantes." },
            { objective: "O3", q: "Entregaste una devolución en la oficina de correos. ¿Qué harías después?", options: ["Tirar el recibo", "Comprar la cosa otra vez", "Borrar la aplicación de la tienda", "Guardar el recibo de entrega y buscar el reembolso en tu estado de cuenta"], answer: 3, why: "El recibo prueba que la devolviste, y el estado de cuenta muestra el reembolso." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comprar en línea con seguridad",
        questions: [
          { objective: "O1", q: "Un anuncio muestra un televisor de marca a la décima parte del precio normal. ¿Qué debes hacer primero?", options: ["Comprarlo antes de que se acabe", "Revisar la tienda: buscar su nombre con \"queja\" o \"estafa\"", "Pagar con una tarjeta de regalo", "Enviar el número de tu tarjeta por mensaje"], answer: 1, why: "Los precios demasiado buenos para ser verdad son una señal de alerta; revisa primero." },
          { objective: "O1", q: "¿Qué dice la FTC sobre https y el ícono del candado?", options: ["Prueban que una tienda es honesta", "Solo aparecen en tiendas falsas", "Significan envío gratis", "Ayudan, pero los estafadores también pueden usarlos"], answer: 3, why: "El cifrado protege la conexión, no la honestidad del vendedor." },
          { objective: "O2", q: "¿Qué forma de pago te da la protección más fuerte para disputar un cargo equivocado?", options: ["Una tarjeta de crédito", "Una tarjeta de regalo", "Una transferencia de dinero", "Criptomonedas"], answer: 0, why: "La FTC dice que las tarjetas de crédito dan la protección más fuerte para disputas." },
          { objective: "O2", q: "Un vendedor te pide pagar con tarjetas de regalo. ¿Qué haces?", options: ["Compras las tarjetas de regalo", "Pagas la mitad con tarjetas de regalo", "Te niegas; es una señal de estafa", "Envías una foto de las tarjetas"], answer: 2, why: "La FTC advierte que nunca pagues a vendedores en línea con tarjetas de regalo." },
          { objective: "O3", q: "Recibes un mensaje sobre un \"problema con la entrega\" con un enlace. ¿Cuál es el paso más seguro?", options: ["Hacer clic en el enlace", "Responder con tu dirección", "Revisar tu pedido en la aplicación o el sitio de la propia tienda", "Pagar la pequeña cuota"], answer: 2, why: "Rastrea desde tu cuenta, no desde enlaces inesperados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Banca en línea con seguridad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Usar la aplicación o el sitio web de tu banco con seguridad",
          minutes: 5,
          goal: "Iniciar sesión en la aplicación o el sitio web oficial de tu banco y revisar tu saldo y tus movimientos.",
          text: [
            "La banca en línea te permite ver tu saldo, revisar lo que entró y salió, pagar cuentas y mover dinero entre tus propias cuentas, desde tu teléfono o tu computadora.",
            "Consigue la aplicación del banco solo en la tienda oficial de aplicaciones y revisa que el desarrollador sea tu banco real. O escribe tú mismo la dirección web del banco; la encuentras en tu tarjeta, en tu estado de cuenta o preguntando en la sucursal. Nunca inicies sesión desde un enlace en un correo o un mensaje.",
            "Usa una contraseña segura que no uses en ningún otro lugar y activa la verificación en dos pasos. No uses el banco en un Wi-Fi público sin los datos propios de tu teléfono, y cierra siempre la sesión al terminar, sobre todo en una computadora compartida."
          ],
          steps: ["Instala la aplicación oficial del banco o escribe tú mismo su dirección.", "Inicia sesión con una contraseña segura y única.", "Activa la verificación en dos pasos en la configuración de seguridad.", "Mira tu saldo y tus movimientos recientes.", "Cierra la sesión al terminar."],
          words: [["Saldo", "cuánto dinero hay ahora en tu cuenta."], ["Movimiento (transacción)", "un pago que entra o sale de tu cuenta."], ["Verificación en dos pasos", "una segunda comprobación, normalmente un código que llega a tu teléfono, al iniciar sesión."]],
          slides: [
            { title: "Qué hace la banca en línea", bullets: ["Ver tu saldo y tus movimientos", "Pagar cuentas", "Mover dinero entre tus propias cuentas"] },
            { title: "Llega con seguridad", bullets: ["Aplicación oficial de la tienda de aplicaciones", "O escribe tú la dirección del banco", "Nunca inicies sesión desde un enlace de un correo o mensaje"] },
            { title: "Mantente seguro", bullets: ["Contraseña segura y única", "Verificación en dos pasos activada", "Cierra la sesión al terminar"] }
          ],
          tryIt: "Abre la aplicación o el sitio web oficial de tu banco (escribe tú la dirección). Inicia sesión, mira tu saldo y tus últimos cinco movimientos y luego cierra la sesión.",
          youCanNow: "iniciar sesión en tu banco con seguridad y revisar tu saldo y tus movimientos.",
          quickCheck: [
            { objective: "O4", q: "¿Dónde puedes encontrar la dirección web real de tu banco?", options: ["En tu tarjeta, en tu estado de cuenta o preguntando en la sucursal", "En un mensaje de texto que dice que tu cuenta está bloqueada", "En un anuncio de las redes sociales", "En un correo de alguien que no conoces"], answer: 0, why: "Tu tarjeta, tu estado de cuenta y la sucursal te dan la dirección real del banco." },
            { objective: "O4", q: "Revisaste tu saldo en una computadora de la biblioteca. ¿Qué harías antes de irte?", options: ["Dejar la página abierta", "Cerrar sesión", "Guardar tu contraseña en el navegador", "Escribir tu contraseña en una nota"], answer: 1, why: "Cierra sesión siempre que termines con el banco, sobre todo en una computadora compartida." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Detectar un cargo equivocado y saber que tu dinero está protegido",
          minutes: 5,
          goal: "Revisar tus movimientos y saber qué hacer con un cargo que no hiciste.",
          text: [
            "Revisa tus movimientos al menos una vez por semana. Busca cargos que no reconozcas, aunque sean pequeños; a veces los ladrones prueban una tarjeta primero con un cargo muy pequeño. Muchos bancos te dejan activar alertas que te envían un mensaje o un correo cuando sale dinero de tu cuenta.",
            "Si ves un cargo que no hiciste, llama al número que está detrás de tu tarjeta o en la aplicación oficial, y actúa rápido. Muchas tarjetas y aplicaciones te dejan bloquear o congelar la tarjeta de inmediato.",
            "El dinero en un banco asegurado por la FDIC (la agencia federal de EE. UU. que asegura los depósitos bancarios) está protegido hasta $250,000 por depositante, por banco, por cada categoría de titularidad de la cuenta. Las cooperativas de crédito aseguradas por la NCUA tienen el mismo límite estándar de $250,000. La FDIC dice que las criptomonedas, las acciones, los bonos y los fondos mutuos no están asegurados, aunque los venda un banco."
          ],
          steps: ["Revisa tus movimientos cada semana.", "Activa las alertas de la cuenta en la aplicación.", "Si un cargo no es tuyo: bloquea la tarjeta en la aplicación si puedes.", "Llama al número que está detrás de tu tarjeta.", "Atiende el seguimiento del banco y revisa tu próximo estado de cuenta."],
          words: [["Alerta", "un mensaje o correo que te envía tu banco cuando pasa algo en tu cuenta."], ["FDIC", "la Corporación Federal de Seguro de Depósitos, que asegura el dinero en los bancos de EE. UU."], ["NCUA", "la Administración Nacional de Cooperativas de Crédito, que asegura el dinero en las cooperativas de crédito de EE. UU."]],
          slides: [
            { title: "Revisa cada semana", bullets: ["Busca cargos que no conozcas", "Aunque sean pequeños", "Activa las alertas de la cuenta"] },
            { title: "Un cargo no es tuyo", bullets: ["Bloquea la tarjeta en la aplicación", "Llama al número que está detrás de tu tarjeta", "Actúa rápido"] },
            { title: "Tus depósitos están asegurados", bullets: ["Bancos FDIC: $250,000 por depositante, por banco, por categoría de titularidad", "Cooperativas NCUA: límite estándar de $250,000"] },
            { title: "No están asegurados", bullets: ["Cripto, acciones, bonos y fondos mutuos", "Aunque los venda un banco"] }
          ],
          sources: [{ name: "FDIC: Entender el seguro de depósitos", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Cobertura del seguro de acciones", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "En la aplicación de tu banco, busca dónde se configuran las alertas y activa una alerta para los pagos. Luego busca el botón que bloquea o congela tu tarjeta (no lo presiones a menos que lo necesites).",
          youCanNow: "revisar tus movimientos, configurar alertas y actuar rápido ante un cargo que no hiciste.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué debes fijarte en los cargos pequeños que no reconoces?", options: ["Los cargos pequeños siempre están bien", "Los bancos nunca se equivocan", "Los cargos pequeños son gratis", "A veces los ladrones prueban una tarjeta primero con un cargo muy pequeño"], answer: 3, why: "Un cargo muy pequeño y desconocido puede ser una prueba antes de cargos más grandes." },
            { objective: "O5", q: "Quieres saber de inmediato cuando sale dinero de tu cuenta. ¿Qué harías?", options: ["Revisar una vez al año", "Pedirle a un desconocido que la vigile", "Activar las alertas en la aplicación de tu banco para que te envíe un mensaje de texto o un correo", "Cerrar tu cuenta"], answer: 2, why: "Muchos bancos ofrecen alertas cuando sale dinero de tu cuenta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Estafas de dinero: llamadas falsas del banco y trucos con aplicaciones de pago",
          minutes: 5,
          goal: "Reconocer una estafa de dinero y detenerla.",
          text: [
            "Una estafa común: alguien llama, escribe o envía un correo haciéndose pasar por el equipo de fraudes de tu banco. Dice que tu cuenta está en peligro y te pide tu contraseña, un código que llegó a tu teléfono o que muevas dinero a una \"cuenta segura\". Un banco real nunca te pedirá esto.",
            "La FTC menciona cuatro señales de estafa: se hacen pasar por alguien en quien confías, hay un problema o un premio, te presionan para actuar ya y quieren que pagues de una forma poco común, como tarjetas de regalo, transferencias de dinero, aplicaciones de pago o criptomonedas.",
            "Si tienes dudas, cuelga. Llama al número que está detrás de tu tarjeta. Trata el dinero enviado por aplicaciones de pago como si fuera efectivo: envíalo solo a personas que conoces. En Estados Unidos, denuncia las estafas en reportfraud.ftc.gov."
          ],
          steps: ["Nunca compartas tu contraseña ni un código que llegó a tu teléfono.", "Nunca muevas dinero a una \"cuenta segura\" porque alguien que llama te lo dice.", "Cuelga y llama al número que está detrás de tu tarjeta.", "Envía dinero por aplicaciones de pago solo a personas que conoces.", "Denuncia las estafas en reportfraud.ftc.gov."],
          words: [["Suplantación", "hacerse pasar por otra persona o entidad, como tu banco o una oficina del gobierno."], ["Aplicación de pago", "una aplicación que envía dinero de persona a persona, como Venmo, Cash App o Zelle."]],
          slides: [
            { title: "Llamadas falsas del banco", bullets: ["\"Tu cuenta está en peligro\"", "Te piden tu contraseña o un código", "O que muevas dinero a una \"cuenta segura\""] },
            { title: "Señales de estafa de la FTC", bullets: ["Se hacen pasar por alguien en quien confías", "Un problema o un premio", "Presión para actuar ya", "Pago poco común: tarjeta de regalo, transferencia, aplicación, cripto"] },
            { title: "Qué hacer", bullets: ["Cuelga", "Llama al número que está detrás de tu tarjeta", "Aplicaciones de pago: solo a personas que conoces"] },
            { title: "Denúncialo", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Práctica de la tarea final: anota el número que está detrás de tu tarjeta bancaria en un lugar seguro de tu casa. Luego haz la tarea final: revisa una tienda, elige tu forma de pago y revisa los movimientos de tu banco.",
          youCanNow: "detectar una llamada falsa del banco o un truco con una aplicación de pago, detenerlo y denunciarlo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué no te pedirá nunca un banco real?", options: ["Que vayas a una sucursal", "Tu contraseña o el código enviado a tu teléfono", "Que revises tu estado de cuenta", "Que actives la verificación en dos pasos"], answer: 1, why: "Un banco real nunca te pedirá tu contraseña, un código ni que muevas dinero a una \"cuenta segura\"." },
            { objective: "O6", q: "Un mensaje de texto de \"tu banco\" dice que tu cuenta está en peligro y que llames a un número del mensaje. ¿Qué harías?", options: ["Ignorar el número del mensaje y llamar al número que está detrás de tu tarjeta", "Llamar al número del mensaje", "Responder con tu contraseña", "Mover tu dinero a la cuenta que te dan"], answer: 0, why: "Llamar al número de tu tarjeta te comunica con tu banco real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Banca en línea con seguridad",
        questions: [
          { objective: "O4", q: "¿Cuál es la forma más segura de llegar al sitio web de tu banco?", options: ["Escribir tú mismo la dirección o usar la aplicación oficial", "Hacer clic en un enlace de un mensaje", "Buscar y hacer clic en el primer anuncio", "Usar un enlace que te da alguien que llama"], answer: 0, why: "Escribir la dirección o usar la aplicación oficial evita los sitios falsos." },
          { objective: "O5", q: "Ves un cargo pequeño que no reconoces. ¿Qué haces?", options: ["Lo ignoras porque es pequeño", "Lo publicas en internet", "Esperas un año", "Bloqueas la tarjeta y llamas al número que está detrás"], answer: 3, why: "Los ladrones a menudo prueban una tarjeta con un cargo pequeño; actúa rápido." },
          { objective: "O5", q: "¿Cuál es la cantidad estándar del seguro de la FDIC?", options: ["$1,000 por persona", "$250,000 por depositante, por banco asegurado, por categoría de titularidad", "Ilimitada", "Nada; los bancos no están asegurados"], answer: 1, why: "La FDIC asegura hasta $250,000 por depositante, por banco, por categoría de titularidad." },
          { objective: "O6", q: "Alguien que llama de \"tu banco\" te pide el código que acaba de llegar a tu teléfono. ¿Qué haces?", options: ["Se lo lees", "Cuelgas y llamas al número de tu tarjeta", "Le das la mitad", "Se lo envías por mensaje"], answer: 1, why: "Los bancos reales nunca piden ese código." },
          { objective: "O5", q: "¿Qué NO está asegurado por la FDIC?", options: ["Una cuenta de cheques en un banco asegurado", "Una cuenta de ahorros en un banco asegurado", "Un certificado de depósito en un banco asegurado", "Las criptomonedas"], answer: 3, why: "La FDIC dice que las criptomonedas no están aseguradas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Compras y banca en línea con seguridad",
    questions: [
      { objective: "O1", q: "La forma más segura de llegar a una tienda en línea es:", options: ["Escribir tú mismo su dirección o usar su aplicación oficial", "Hacer clic en un anuncio de redes sociales", "Usar un enlace del mensaje de un desconocido", "Escanear cualquier código QR"], answer: 0, why: "Así evitas los sitios imitadores." },
      { objective: "O1", q: "La FTC sugiere buscar el nombre de una tienda con:", options: ["\"gratis\"", "\"cupón\"", "\"queja\" o \"estafa\"", "\"barato\""], answer: 2, why: "Muestra las malas experiencias de otros compradores." },
      { objective: "O1", q: "Las reseñas se deben leer:", options: ["Solo las estrellas", "Para nada", "Con cuidado, porque algunas son falsas", "Solo la primera"], answer: 2, why: "La FTC advierte que algunas reseñas son falsas." },
      { objective: "O1", q: "Antes de comprar, revisa en la política de devoluciones:", options: ["Cuántos días tienes y quién paga el envío de vuelta", "El nombre del dueño", "El logotipo de la tienda", "Los colores del sitio web"], answer: 0, why: "Las condiciones de devolución cambian y importan si algo sale mal." },
      { objective: "O1", q: "Una oferta de un artículo caro de marca que parece demasiado buena para ser verdad puede ser:", options: ["Un regalo del banco", "Siempre real", "Una oferta del gobierno", "Falsificada o robada"], answer: 3, why: "La FTC advierte que esas ofertas pueden ser productos falsos o robados." },
      { objective: "O2", q: "¿Qué forma de pago dice la FTC que da la protección más fuerte para disputas?", options: ["Transferencia de dinero", "Tarjeta de crédito", "Tarjeta de regalo", "Criptomonedas"], answer: 1, why: "Las tarjetas de crédito te dejan disputar cargos equivocados." },
      { objective: "O2", q: "¿Dónde debes escribir el número de tu tarjeta?", options: ["En un correo de respuesta", "En la página de pago de una tienda que revisaste", "En un mensaje de texto", "En un chat de redes sociales"], answer: 1, why: "Solo en la página de pago de la tienda revisada." },
      { objective: "O2", q: "En una computadora de la biblioteca, el navegador ofrece guardar tu tarjeta. Tú:", options: ["Dices que sí", "La guardas dos veces", "La escribes en una nota adhesiva", "Dices que no"], answer: 3, why: "Nunca guardes los datos de la tarjeta en una computadora compartida." },
      { objective: "O3", q: "¿Qué comprobante debes guardar después de comprar en línea?", options: ["La confirmación del pedido", "Nada", "Solo la caja", "El anuncio que viste"], answer: 0, why: "Prueba lo que compraste y lo que pagaste." },
      { objective: "O3", q: "Un mensaje dice que tu paquete está detenido y te pide pagar una pequeña cuota con un enlace. Debes:", options: ["Pagar la cuota", "Hacer clic para ver", "Revisar el pedido en la aplicación o el sitio de la propia tienda", "Responder con el número de tu tarjeta"], answer: 2, why: "Los mensajes falsos de entregas son una estafa común." },
      { objective: "O3", q: "Si un vendedor no arregla un problema, en EE. UU. puedes denunciarlo en:", options: ["Un grupo de redes sociales", "El anuncio del vendedor", "reportfraud.ftc.gov", "Ningún lugar"], answer: 2, why: "La FTC recibe allí las denuncias de fraude." },
      { objective: "O4", q: "El \"saldo\" es:", options: ["Cuánto dinero hay ahora en tu cuenta", "Un pago", "Una contraseña", "Una sucursal bancaria"], answer: 0, why: "El saldo muestra lo que tienes ahora." },
      { objective: "O4", q: "Cuando terminas con la banca en línea debes:", options: ["Dejarla abierta", "Guardar tu contraseña en el navegador de una computadora compartida", "Compartir la pantalla", "Cerrar la sesión"], answer: 3, why: "Cerrar la sesión deja fuera a la siguiente persona." },
      { objective: "O4", q: "La verificación en dos pasos en tu cuenta bancaria significa:", options: ["Dos contraseñas anotadas", "Una segunda comprobación, como un código que llega a tu teléfono", "Dos tarjetas bancarias", "Una aplicación más lenta"], answer: 1, why: "Agrega un código que un ladrón no tendría." },
      { objective: "O5", q: "¿Con qué frecuencia conviene revisar tus movimientos?", options: ["Una vez al año", "Al menos una vez por semana", "Nunca", "Solo cuando llama el banco"], answer: 1, why: "Revisar cada semana detecta rápido los problemas." },
      { objective: "O5", q: "Los depósitos en cooperativas de crédito los asegura:", options: ["La FTC", "La tienda de aplicaciones", "Tu empleador", "La NCUA"], answer: 3, why: "La NCUA asegura las cooperativas de crédito con seguro federal." },
      { objective: "O6", q: "Alguien que llama dice que tu cuenta está en peligro y que debes mover dinero a una \"cuenta segura\". Esto es:", options: ["Una estafa", "Un reembolso", "Una ley nueva", "Un paso normal del banco"], answer: 0, why: "Los bancos reales nunca piden esto; es una estafa común." },
      { objective: "O6", q: "El dinero enviado por una aplicación de pago se debe tratar como:", options: ["Un préstamo", "Una tarjeta de crédito", "Efectivo: envíalo solo a personas que conoces", "Ahorros asegurados"], answer: 2, why: "Es difícil de recuperar, como el efectivo." },
      { objective: "O6", q: "¿Cuál es una de las cuatro señales de estafa de la FTC?", options: ["Un saludo amable", "Una cuenta en papel de tu compañía de servicios por correo", "Presión para actuar ya", "Pagar en el mostrador de una tienda"], answer: 2, why: "Los estafadores te apuran para que no te detengas a comprobar." },
      { objective: "O6", q: "Si tienes dudas sobre una llamada de tu banco, el mejor paso es:", options: ["Colgar y llamar al número que está detrás de tu tarjeta", "Darles tu contraseña", "Seguir hablando", "Enviar un pago pequeño"], answer: 0, why: "Llamar a un número conocido te comunica con el banco real." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      8,
      9,
      12,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Revisar la tienda",
        objective: "O1",
        notYet: "Se hicieron menos de tres comprobaciones, o se llegó a la tienda desde un anuncio o un enlace de un mensaje de texto.",
        meets: "Las tres comprobaciones hechas: dirección web real, reseñas y quejas, y política de devoluciones.",
        exceeds: "Además, anota cuántos días tienes para devolver la cosa y quién paga el envío de vuelta."
      },
      {
        name: "Elegir cómo pagar",
        objective: "O2",
        notYet: "No se eligió forma de pago, o se eligió tarjeta de regalo, transferencia, aplicación de pago o cripto.",
        meets: "Elige una forma que protege, como una tarjeta de crédito, y dice por qué.",
        exceeds: "Además, dice que no hay que guardar la tarjeta en una computadora compartida."
      },
      {
        name: "Revisar la cuenta del banco",
        objective: "O4",
        notYet: "Inició sesión desde un enlace, o no pudo encontrar el saldo o los movimientos.",
        meets: "Inicia sesión con la aplicación oficial o escribiendo la dirección y encuentra el saldo y los movimientos recientes.",
        exceeds: "Además, activa la verificación en dos pasos o las alertas, y cierra sesión."
      },
      {
        name: "Plan ante un cargo equivocado",
        objective: "O5",
        notYet: "No hay plan, o el plan usa un número de un mensaje de texto o un correo.",
        meets: "Dice que bloquearía la tarjeta y llamaría rápido al número de la tarjeta o de la aplicación oficial.",
        exceeds: "Además, dice que revisaría los movimientos cada semana y guardaría los comprobantes para una disputa."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y obtienen Cumple o Supera en cada fila de la rúbrica de la tarea final",
      "Participantes que dicen revisar los movimientos de su banco al menos una vez por semana 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber evitado una tienda falsa, un mensaje de texto falso de entrega o una llamada de alguien que fingía ser del banco",
      "Participantes que dicen haber detectado y reportado un cargo que no hicieron"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet, en una conexión privada (el Wi-Fi de la casa o los datos del propio teléfono)",
      "La aplicación oficial del banco de la persona o su dirección web escrita por la persona en el navegador, si tiene cuenta bancaria",
      "Una cosa de ejemplo para revisar, como algo que necesita este mes",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Nadie hace una compra real en clase; la tarea de compras se detiene en la página de pago.",
      "Nunca pida ver el saldo, los números de tarjeta ni las contraseñas; deje que cada persona haga los pasos del banco en privado en su propio aparato.",
      "Eviten usar el banco en el Wi-Fi público del programa; pida que usen los datos de su propio teléfono o que hagan el paso del banco en casa.",
      "Quienes no tienen cuenta bancaria pueden hacer la lección del banco con una demostración pública de un banco o describiendo los pasos; si su programa tiene uno, indíqueles programas locales que ayudan a abrir cuentas seguras y de bajo costo.",
      "Practiquen la llamada falsa del banco como una dramatización para que ensayen colgar y llamar al número de su tarjeta."
    ]
  }
};

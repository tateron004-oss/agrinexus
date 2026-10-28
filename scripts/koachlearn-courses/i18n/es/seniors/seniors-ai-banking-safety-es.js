"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-banking-safety.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026).

module.exports = {
  id: "seniors-ai-banking-safety-es",
  lang: "es",
  translationOf: "seniors-ai-banking-safety",
  category: "Seniors and Technology",
  name: "La IA y la seguridad en la banca en línea",
  skills: "Conseguir la aplicación real de tu banco, Iniciar sesión con seguridad con verificación en dos pasos, Configurar alertas de la cuenta, Detectar estafas bancarias hechas con IA, Usar aplicaciones de pago con seguridad, Saber qué hacer si algo sale mal",
  outcome: "iniciar sesión con seguridad en la aplicación o el sitio web oficial de tu banco, activar alertas para tu cuenta, detectar una llamada o un mensaje falso “del banco” y saber exactamente a quién llamar si algo sale mal.",
  about: [
    "La banca en línea te deja ver tu saldo, revisar pagos y pagar cuentas sin ir a la sucursal. Este curso es para personas mayores que quieren usarla con confianza, y protegerse de los estafadores que ahora usan IA para sonar y parecerse a tu banco.",
    "Conseguirás la aplicación real de tu banco, iniciarás sesión con seguridad, configurarás alertas para notar cualquier cosa extraña, aprenderás los trucos que usan los falsos empleados “del banco”, usarás con cuidado las aplicaciones de pago y harás un plan para saber qué hacer si algo sale mal.",
    "Este curso no da consejos financieros, y nunca se te pedirá que escribas aquí ni en un asistente de IA los datos reales de tu cuenta. Un familiar de confianza puede sentarse contigo durante la configuración. Cada lección dura unos cinco minutos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Inicia sesión en la aplicación o el sitio web oficial de tu banco, activa al menos dos alertas (como para compras grandes y saldo bajo), anota en tu tarjeta de seguridad el número de teléfono de tu banco tomado del reverso de tu tarjeta, y usa las cuatro señales para juzgar un mensaje de texto de ejemplo “del banco”.",
  chapters: [
    {
      name: "Capítulo 1: Usar la banca en línea con seguridad",
      lessons: [
        {
          title: "Conseguir la aplicación o el sitio web real de tu banco",
          minutes: 5,
          goal: "Encontrar y abrir la aplicación o el sitio web oficial de tu banco sin caer en uno falso.",
          text: [
            "Los estafadores hacen aplicaciones y sitios web bancarios falsos que parecen reales. La IA hace que las copias se vean todavía mejor. Por eso, empieza siempre desde una fuente de confianza.",
            "Para la aplicación: abre la tienda de aplicaciones oficial de tu teléfono, busca el nombre exacto de tu banco y comprueba que la aplicación la publica tu banco. Si no estás seguro, el sitio web oficial de tu banco o un empleado de la sucursal te puede decir el nombre exacto de la aplicación. Para el sitio web: escribe tú mismo la dirección de tu banco, o usa la dirección impresa en tu estado de cuenta. No entres a tu banco desde un enlace en un mensaje de texto o un correo.",
            "Tu banco también puede ayudarte a configurar la banca en línea en una sucursal o por teléfono, usando el número del reverso de tu tarjeta."
          ],
          steps: ["Abre la tienda de aplicaciones oficial.", "Busca el nombre exacto de tu banco.", "Comprueba que la aplicación la publica tu banco.", "En una computadora, escribe tú mismo la dirección de tu estado de cuenta.", "Nunca uses un enlace de un mensaje o un correo para entrar a tu banco."],
          words: [["Banca en línea", "usar la aplicación o el sitio web de tu banco para ver y manejar tus cuentas."], ["Aplicación falsa", "una aplicación hecha para parecerse a una real con el fin de robar información."]],
          slides: [
            { title: "Las falsas parecen reales", bullets: ["Existen aplicaciones y sitios bancarios falsos", "La IA hace que se vean todavía mejor"] },
            { title: "Consigue la aplicación real", bullets: ["Solo en la tienda de aplicaciones oficial", "Busca el nombre exacto del banco", "Comprueba que la publica tu banco"] },
            { title: "Entra al sitio web real", bullets: ["Escribe tú mismo la dirección", "Usa la de tu estado de cuenta", "Nunca desde un enlace en un mensaje o correo"] }
          ],
          tryIt: "Mira un estado de cuenta o tu tarjeta bancaria y busca la dirección del sitio web y el número de teléfono de tu banco. Anótalos en una tarjeta que guardes en casa.",
          youCanNow: "encontrar la aplicación o el sitio web real de tu banco desde una fuente de confianza."
        },
        {
          title: "Iniciar sesión con seguridad",
          minutes: 6,
          goal: "Iniciar sesión con una contraseña segura y verificación en dos pasos, y cerrar sesión con seguridad.",
          text: [
            "Tu contraseña debe ser larga y difícil de adivinar: una frase de varias palabras sin relación entre sí funciona bien. Úsala solo para tu banco. Guárdala en un lugar seguro en casa o en un administrador de contraseñas, nunca en una nota común de tu teléfono, y nunca la compartas.",
            "La verificación en dos pasos (también llamada de dos factores) agrega una segunda comprobación, por lo general un código que te llega por mensaje o un aviso en la aplicación. Aunque alguien sepa tu contraseña, no puede entrar sin ese código. Actívala en los ajustes de seguridad de la aplicación, o pídele ayuda a tu banco.",
            "Tu banco nunca te llamará ni te enviará un mensaje para pedirte ese código. Cualquiera que te lo pida es un estafador. Muchas aplicaciones también te dejan iniciar sesión con tu huella o tu cara, lo que es seguro y fácil. En una computadora compartida o de la biblioteca, no guardes tu contraseña y cierra sesión al terminar."
          ],
          steps: ["Elige una contraseña larga y única, como varias palabras sin relación.", "Guárdala en un lugar seguro, nunca en una nota común.", "Activa la verificación en dos pasos.", "Nunca compartas el código con nadie.", "Cierra sesión en las computadoras compartidas."],
          words: [["Verificación en dos pasos", "una segunda comprobación, como un código por mensaje, necesaria para iniciar sesión."], ["Administrador de contraseñas", "una aplicación que guarda tus contraseñas de forma segura."]],
          slides: [
            { title: "Una contraseña segura", bullets: ["Larga: varias palabras sin relación", "Solo para tu banco", "Guardada en lugar seguro, nunca compartida"] },
            { title: "Verificación en dos pasos", bullets: ["Un código o un aviso en la aplicación como segunda comprobación", "Detiene a los ladrones que saben tu contraseña", "Actívala en los ajustes de seguridad"] },
            { title: "Regla de oro", bullets: ["Tu banco nunca te pide ese código", "Quien te lo pide es un estafador"] },
            { title: "Computadoras compartidas", bullets: ["No guardes tu contraseña", "Cierra sesión al terminar"] }
          ],
          tryIt: "Con un familiar o un empleado del banco si quieres, abre la aplicación o el sitio web de tu banco y comprueba que la verificación en dos pasos está activada. Si no lo está, actívala. No compartas ningún código con nadie, tampoco con nosotros.",
          youCanNow: "iniciar sesión con seguridad con una contraseña segura y verificación en dos pasos."
        },
        {
          title: "Configurar alertas para detectar problemas a tiempo",
          minutes: 5,
          goal: "Activar alertas de la cuenta para notar rápido cualquier movimiento extraño.",
          text: [
            "Las alertas son mensajes que tu banco te envía por mensaje de texto, correo o notificación de la aplicación cuando pasa algo en tu cuenta: una compra grande, un saldo bajo, un destinatario nuevo o un cambio de contraseña.",
            "En la aplicación o el sitio web del banco, busca Alertas o Notificaciones, a menudo dentro de tu perfil o de los ajustes. Activa alertas para compras de más de una cantidad que tú elijas, para saldo bajo y para cualquier cambio en tus datos de inicio de sesión.",
            "Cuando te llegue una alerta de algo que tú no hiciste, no le respondas ni llames a un número que venga en ella. Abre tú mismo la aplicación de tu banco, o llama al número del reverso de tu tarjeta."
          ],
          steps: ["Abre la aplicación o el sitio web de tu banco.", "Busca Alertas o Notificaciones.", "Activa alertas para compras grandes, saldo bajo y cambios en el inicio de sesión.", "Si una alerta muestra algo que no hiciste, llama al número de tu tarjeta."],
          words: [["Alerta", "un mensaje de tu banco sobre los movimientos de tu cuenta."], ["Destinatario", "una persona o empresa a la que le envías dinero."]],
          slides: [
            { title: "Las alertas detectan problemas a tiempo", bullets: ["Compras grandes", "Saldo bajo", "Destinatario nuevo o cambio de contraseña"] },
            { title: "Actívalas", bullets: ["Busca Alertas o Notificaciones", "Elige tus cantidades", "Mensaje, correo o aplicación"] },
            { title: "¿Algo que no hiciste?", bullets: ["No respondas ni llames a un número que venga en ella", "Abre tú mismo la aplicación", "O llama al número de tu tarjeta"] }
          ],
          tryIt: "Activa al menos dos alertas en la aplicación o el sitio web de tu banco: una para compras de más de una cantidad que elijas y otra para saldo bajo.",
          youCanNow: "configurar alertas bancarias y responder con seguridad cuando llegue una."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Usar la banca en línea con seguridad",
        questions: [
          { q: "Un mensaje trae un enlace para “actualizar tus datos bancarios”. ¿Cómo debes entrar a tu banco?", options: ["Respondes con tu contraseña", "Tocas el enlace", "Escribes tú mismo la dirección o usas la aplicación oficial", "Llamas al número del mensaje"], answer: 2, why: "Los enlaces de los mensajes pueden llevar a sitios falsos." },
          { q: "¿Cómo sabes que una aplicación bancaria es la real?", options: ["Está en la tienda oficial y la publica tu banco", "Vino de una ventana emergente", "Te la envió un desconocido", "Tiene una imagen bonita"], answer: 0, why: "Revisa la tienda y quién la publica." },
          { q: "¿Qué agrega la verificación en dos pasos?", options: ["Una segunda contraseña para compartir", "Una segunda cuenta bancaria", "Dinero gratis", "Una segunda comprobación, como un código por mensaje"], answer: 3, why: "Detiene a los ladrones que solo saben tu contraseña." },
          { q: "Alguien llama, dice que es de tu banco y te pide el código que te acaba de llegar por mensaje. Tú:", options: ["Se lo lees", "Cuelgas; tu banco nunca pide ese código", "Se lo envías por mensaje", "Le das la mitad"], answer: 1, why: "Cualquiera que pida el código es un estafador." },
          { q: "Una alerta muestra una compra que no hiciste. Tú:", options: ["Respondes a la alerta", "Llamas al número del reverso de tu tarjeta", "Llamas a un número de la alerta", "No le haces caso"], answer: 1, why: "Usa un número que ya sabes que es confiable." }
        ]
      }
    },
    {
      name: "Capítulo 2: Detectar estafas y mantenerte protegido",
      lessons: [
        {
          title: "Llamadas y mensajes falsos del banco hechos con IA",
          minutes: 5,
          goal: "Reconocer una llamada o un mensaje falso del “departamento de fraudes del banco”.",
          text: [
            "Una estafa común: una llamada o un mensaje dice que es el departamento de fraudes de tu banco y que hay un problema con tu cuenta. El identificador de llamadas puede incluso mostrar el nombre de tu banco, y la IA puede hacer que la voz y los mensajes suenen muy profesionales.",
            "Luego te piden que hagas algo: que les leas un código, que “verifiques” tu contraseña, que pases tu dinero a una “cuenta segura”, que saques efectivo para un mensajero o que compres tarjetas de regalo. Son las señales de estafa de la FTC (la Comisión Federal de Comercio de Estados Unidos): se hacen pasar por otro, hay un problema, hay presión y piden una forma de pago rara. La FTC dice que las organizaciones reales nunca te pedirán mover tu dinero para protegerlo.",
            "Qué hacer: cuelga. Luego llama tú mismo al número del reverso de tu tarjeta. Si era real, el banco lo sabrá."
          ],
          steps: ["Fíjate: un “banco” te contacta por un problema.", "Fíjate: te pide un código, una contraseña, mover dinero, efectivo o tarjetas de regalo.", "Cuelga o deja de responder.", "Llama tú mismo al número del reverso de tu tarjeta."],
          words: [["Suplantación del número", "hacer que un identificador de llamadas falso muestre el nombre o el número de una empresa real."], ["Estafa de la cuenta segura", "un engaño que te dice que pases tu dinero a otra cuenta para “protegerlo”, y que va directo al estafador."]],
          slides: [
            { title: "La falsa llamada de fraudes", bullets: ["“Le hablamos del departamento de fraudes de su banco”", "El identificador de llamadas se puede falsificar", "La IA hace que suene profesional"] },
            { title: "Lo que piden", bullets: ["Códigos o contraseñas", "Pasar dinero a una “cuenta segura”", "Efectivo para un mensajero, o tarjetas de regalo"] },
            { title: "Lo que haces", bullets: ["Cuelga", "Llama al número de tu tarjeta", "Si era real, el banco lo sabrá"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Pregúntale a un asistente de IA: “¿Qué señales indican que una llamada del departamento de fraudes de mi banco es falsa?” Compara su respuesta con esta lección y anota en tu tarjeta las tres que te parezcan más importantes.",
          youCanNow: "reconocer una llamada o un mensaje falso del banco y comprobarlo con seguridad."
        },
        {
          title: "Usar las aplicaciones de pago con cuidado",
          minutes: 5,
          goal: "Enviar dinero con una aplicación de pago solo a personas que conoces y en quienes confías.",
          text: [
            "Las aplicaciones de pago (como Zelle, Venmo, PayPal y Cash App) te dejan enviar dinero desde tu teléfono. Son prácticas para devolverle dinero a un familiar, pero el dinero por lo general se mueve al instante y puede ser muy difícil de recuperar.",
            "Envía dinero solo a personas que conoces en persona. Revisa dos veces el nombre, el número de teléfono o el correo antes de enviar. Nunca le pagues a un desconocido, a un vendedor en línea que no conoces ni a nadie que te haya contactado primero diciendo que es tu banco, el gobierno o una empresa.",
            "Cuidado con el truco del “pago por error”: un desconocido te envía dinero y te pide que se lo devuelvas. No lo envíes; comunícate con tu banco o con la empresa de la aplicación a través de su aplicación o sitio web oficial."
          ],
          steps: ["Págales solo a personas que conoces en persona.", "Revisa dos veces el nombre y el número antes de enviar.", "Nunca le pagues a alguien que te contactó primero.", "Si un desconocido te paga “por error”, comunícate con tu banco o con la aplicación; no le devuelvas dinero."],
          words: [["Aplicación de pago", "una aplicación que envía dinero desde tu teléfono a otra persona."], ["Transferencia instantánea", "dinero que se mueve al instante y es difícil de revertir."]],
          slides: [
            { title: "Prácticas, pero rápidas", bullets: ["Zelle, Venmo, PayPal, Cash App", "El dinero se mueve al instante", "Es difícil recuperarlo"] },
            { title: "Uso seguro", bullets: ["Solo con personas que conoces en persona", "Revisa dos veces el nombre y el número", "Nunca le pagues a quien te contactó primero"] },
            { title: "“Uy, te lo envié por error”", bullets: ["No devuelvas dinero", "Comunícate con tu banco o con la aplicación"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (señales de alerta en los pagos, en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Escribe en tu tarjeta: “Solo uso aplicaciones de pago con personas que conozco en persona. Nunca le pago a nadie que me contacte primero.”",
          youCanNow: "usar aplicaciones de pago con seguridad y evitar los trucos comunes con ellas."
        },
        {
          title: "Si algo sale mal",
          minutes: 5,
          goal: "Saber qué pasos dar rápido si te roban dinero o información.",
          text: [
            "Actúa rápido. Llama de inmediato a tu banco al número del reverso de tu tarjeta. Cuéntales lo que pasó. Pídeles que detengan o reviertan los pagos si es posible, cambia tu contraseña y vigila tu cuenta.",
            "Luego denúncialo. Denuncia la estafa ante la Federal Trade Commission en ReportFraud.ftc.gov. Si alguien está usando tu identidad, entra en IdentityTheft.gov para recibir un plan de recuperación gratuito. Si tienes 60 años o más, la National Elder Fraud Hotline (la línea nacional contra el fraude a personas mayores) es gratuita: 833-FRAUD-11 (833-372-8311).",
            "Cuidado con una segunda estafa: quienes llaman ofreciendo “recuperar” tu dinero a cambio de una tarifa casi siempre también son estafadores. Y no hay vergüenza en ser víctima. Contárselo a un familiar de confianza te protege a ti y a otros."
          ],
          steps: ["Llama de inmediato a tu banco al número de tu tarjeta.", "Cambia tu contraseña.", "Denuncia en ReportFraud.ftc.gov.", "Usa IdentityTheft.gov si usaron tu identidad.", "Si tienes 60 años o más: llama al 833-372-8311.", "No le hagas caso a nadie que ofrezca recuperar tu dinero a cambio de una tarifa."],
          words: [["Robo de identidad", "cuando alguien usa tu información personal para hacerse pasar por ti."], ["Estafa de recuperación", "un engaño en el que los estafadores ofrecen recuperar el dinero robado a cambio de una tarifa."]],
          slides: [
            { title: "Actúa rápido", bullets: ["Llama a tu banco al número de tu tarjeta", "Pide que detengan o reviertan los pagos", "Cambia tu contraseña"] },
            { title: "Denúncialo", bullets: ["ReportFraud.ftc.gov", "IdentityTheft.gov", "60 años o más: 833-FRAUD-11 (833-372-8311)"] },
            { title: "Cuidado con una segunda estafa", bullets: ["Tarifa para “recuperar” dinero = estafa", "Sin vergüenza: cuéntaselo a alguien de confianza"] }
          ],
          sources: [{ name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }, { name: "FTC: Lo que debes saber sobre el robo de identidad (en inglés)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Oficina para Víctimas del Delito del Departamento de Justicia: National Elder Fraud Hotline (en inglés)", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }],
          tryIt: "Tarea final: inicia sesión en la aplicación o el sitio web oficial de tu banco, activa dos alertas, anota en tu tarjeta de seguridad el número de tu banco tomado del reverso de tu tarjeta, y juzga este mensaje de ejemplo con las cuatro señales: “ALERTA DEL BANCO: Su cuenta está bloqueada. Verifíquela ahora en el enlace o será cerrada hoy.”",
          youCanNow: "usar la banca en línea con seguridad, detectar contactos falsos del banco, usar con cuidado las aplicaciones de pago y actuar rápido si algo sale mal."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Detectar estafas y mantenerte protegido",
        questions: [
          { q: "El identificador de llamadas muestra el nombre de tu banco. ¿Eso prueba que la llamada es real?", options: ["Solo si saben tu nombre", "Sí, siempre", "Solo por la mañana", "No, el identificador de llamadas se puede falsificar"], answer: 3, why: "La suplantación del número crea identificadores falsos." },
          { q: "Alguien te llama y te dice que pases tus ahorros a una “cuenta segura”. Esto es:", options: ["Una estafa", "Una práctica normal del banco", "Obligatorio por ley", "Un buen consejo"], answer: 0, why: "Las organizaciones reales nunca te piden mover dinero para protegerlo." },
          { q: "¿A quién debes enviarle dinero con una aplicación de pago?", options: ["A vendedores en línea que no conoces", "A cualquiera que te lo pida", "Solo a personas que conoces en persona", "A quienes llaman “del gobierno”"], answer: 2, why: "El dinero de las aplicaciones de pago es difícil de recuperar." },
          { q: "Un desconocido te envía dinero “por error” y te pide que se lo devuelvas. Tú:", options: ["Le das tu contraseña", "Se lo devuelves de inmediato", "Le envías el doble", "Te comunicas en cambio con tu banco o con la aplicación"], answer: 3, why: "Es un truco común; deja que el banco se encargue." },
          { q: "Alguien ofrece recuperar tu dinero robado a cambio de una tarifa. Probablemente es:", options: ["Tu banco", "Un programa del gobierno", "Otra estafa", "Ayuda gratuita"], answer: 2, why: "Las estafas de recuperación buscan a personas que ya fueron estafadas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y la seguridad en la banca en línea",
    questions: [
      { q: "La banca en línea te deja:", options: ["Imprimir dinero", "Ver y manejar tus cuentas en una aplicación o sitio web", "Saltarte todas las cuentas", "No usar contraseñas"], answer: 1, why: "Es tu banco, en tu teléfono o tu computadora." },
      { q: "El lugar seguro para conseguir la aplicación de tu banco es:", options: ["La tienda de aplicaciones oficial, publicada por tu banco", "Un enlace en un mensaje", "Una ventana emergente", "Un archivo adjunto de un correo"], answer: 0, why: "Las tiendas oficiales y los editores verdaderos son confiables." },
      { q: "¿Dónde puedes encontrar la dirección real del sitio web de tu banco?", options: ["En tu estado de cuenta o en tu tarjeta", "En un mensaje de un desconocido", "En un anuncio emergente", "En un comentario de redes sociales"], answer: 0, why: "Tu estado de cuenta y tu tarjeta vienen del banco." },
      { q: "Una contraseña segura es:", options: ["Tu fecha de cumpleaños", "Larga, como varias palabras sin relación, y usada solo para tu banco", "“contraseña”", "El nombre de tu mascota"], answer: 1, why: "Las contraseñas largas y únicas son difíciles de adivinar." },
      { q: "¿Dónde NO debes guardar la contraseña de tu banco?", options: ["En un lugar seguro en casa", "En un administrador de contraseñas", "En una nota común de tu teléfono", "En tu memoria"], answer: 2, why: "Las notas comunes no son seguras." },
      { q: "La verificación en dos pasos te protege porque:", options: ["Elimina las contraseñas", "Comparte tu contraseña", "Apaga las alertas", "Un ladrón necesita el código además de tu contraseña"], answer: 3, why: "La segunda comprobación bloquea a los ladrones." },
      { q: "¿Tu banco llama alguna vez para pedirte el código que te envió por mensaje?", options: ["Solo en días festivos", "Sí, todas las semanas", "No", "Solo para cuentas grandes"], answer: 2, why: "Cualquiera que pida el código es un estafador." },
      { q: "En una computadora de la biblioteca, después de usar el banco, debes:", options: ["Cerrar sesión y no guardar tu contraseña", "Dejar la sesión abierta", "Guardar la contraseña", "Anotar la contraseña ahí"], answer: 0, why: "Así la siguiente persona no puede entrar." },
      { q: "Las alertas del banco te avisan sobre:", options: ["Aplicaciones nuevas", "El clima", "Resultados deportivos", "Los movimientos de tu cuenta, como compras grandes"], answer: 3, why: "Las alertas señalan los movimientos de la cuenta." },
      { q: "Una alerta útil para activar es:", options: ["Chistes diarios", "Saldo bajo", "Anuncios de ofertas", "Ninguna"], answer: 1, why: "Las alertas de saldo bajo evitan problemas." },
      { q: "Una alerta muestra un cargo que no hiciste. Llamas:", options: ["Al número de la alerta", "Al número del reverso de tu tarjeta", "Al amigo de un amigo", "A nadie"], answer: 1, why: "Usa un número que ya sabes que es confiable." },
      { q: "La “suplantación del número” es:", options: ["Una alerta del banco", "Un tipo de cuenta de ahorros", "Un administrador de contraseñas", "Falsificar el identificador de llamadas"], answer: 3, why: "Las llamadas con número suplantado parecen venir de tu banco." },
      { q: "Alguien del “departamento de fraudes” te pide sacar efectivo para un mensajero. Esto es:", options: ["Una estafa", "Un trámite normal del banco", "Una regla de impuestos", "Una función de seguridad"], answer: 0, why: "Los bancos no mandan mensajeros a buscar tu efectivo." },
      { q: "¿Qué debes hacer ante una llamada sospechosa del banco?", options: ["Darles un código", "Quedarte en la línea", "Colgar y llamar al número de tu tarjeta", "Mover tu dinero"], answer: 2, why: "Devolver la llamada a un número de confianza revela la verdad." },
      { q: "El dinero de las aplicaciones de pago:", options: ["Tarda un mes", "Siempre se puede reembolsar", "Se revierte gratis", "Por lo general se mueve al instante y es difícil de recuperar"], answer: 3, why: "Por eso solo les pagas a personas que conoces." },
      { q: "Antes de enviar dinero con una aplicación, debes:", options: ["No revisar nada", "Enviarlo rápido", "Revisar dos veces el nombre y el número", "Pedirle al desconocido que lo confirme"], answer: 2, why: "Un pequeño error de escritura puede enviar el dinero a la persona equivocada." },
      { q: "Si te roban dinero, la PRIMERA llamada es a:", options: ["El estafador", "Tu banco, al número de tu tarjeta", "Una empresa de recuperación", "Un número de una ventana emergente"], answer: 1, why: "Tu banco tal vez pueda detener o revertir los pagos." },
      { q: "¿Dónde denuncias una estafa ante la FTC?", options: ["En ReportFraud.ftc.gov", "En una publicación de redes sociales", "En el sitio del estafador", "Respondiendo un mensaje"], answer: 0, why: "Es el sitio de denuncias de la FTC." },
      { q: "IdentityTheft.gov te da:", options: ["Un plan de recuperación gratuito", "Una cuenta bancaria nueva", "Dinero gratis", "Una contraseña"], answer: 0, why: "Te guía para recuperarte de un robo de identidad." },
      { q: "El número de la National Elder Fraud Hotline es:", options: ["Un número de un mensaje de estafa", "833-372-8311", "411", "0"], answer: 1, why: "833-FRAUD-11 (833-372-8311) lo administra el Departamento de Justicia." }
    ]
  }
};

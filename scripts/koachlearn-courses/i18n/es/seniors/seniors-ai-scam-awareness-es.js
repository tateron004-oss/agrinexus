"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-scam-awareness.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (checked 27 October 2026).

module.exports = {
  id: "seniors-ai-scam-awareness-es",
  lang: "es",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "Seguridad con la IA y prevención de estafas para personas mayores",
  skills: "Reconocer las cuatro señales de una estafa, Identificar trucos de voz y mensajes con IA, Comprobar un mensaje con seguridad, Rechazar pagos riesgosos, Denunciar una estafa",
  outcome: "mirar una llamada, un mensaje de texto o un correo, decidir si muestra las señales de una estafa, comprobarlo con seguridad usando un número que ya sabes que es confiable y saber dónde denunciarlo.",
  about: [
    "Este curso es para personas mayores, y para quienes las cuidan, que quieren ir un paso por delante de los estafadores. Los estafadores ahora usan IA para escribir mejores mensajes e incluso copiar voces, así que las viejas señales de alerta son más importantes que nunca.",
    "Aprenderás las cuatro señales de una estafa, cómo funcionan los trucos con IA, una costumbre sencilla de Detente, Comprueba, Llama, y dónde denunciar una estafa en Estados Unidos.",
    "Cada lección dura unos cinco minutos. Haz las tareas “Pruébalo ahora”; con ellas armas tu propia tarjeta de seguridad contra estafas. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Caer en un engaño no es señal de debilidad: estos delincuentes son profesionales y cualquiera puede ser su blanco."
  ],
  finalTask: "Haz tu propia tarjeta de seguridad contra estafas: anota tres números de teléfono de confianza (un familiar, tu banco tomado del reverso de tu tarjeta y el consultorio de tu médico), tu palabra clave familiar, los pasos Detente, Comprueba, Llama y los lugares para denunciar una estafa. Luego juzga dos mensajes de ejemplo con las cuatro señales.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas mayores en Estados Unidos que reciben llamadas, mensajes de texto y correos todos los días, y algunos son estafas. Muchas viven solas, tienen ahorros o beneficios, y tienen nietos cuyas voces o fotos están en internet.",
    startingPoint: "Usan un teléfono y muchas veces el correo electrónico. Muchas saben que existen las estafas, pero no han oído de las voces copiadas con IA, y pueden confiar en mensajes bien escritos o con logotipos oficiales.",
    gap: "La IA permite a los estafadores copiar la voz de un ser querido y escribir mensajes falsos perfectos, así que las viejas señales, como la mala ortografía, ya no sirven. Las personas mayores necesitan reconocer las cuatro señales, usar Detente, Comprueba, Llama, proteger su dinero y su información, y saber dónde denunciar, para no perder sus ahorros ni sentir vergüenza de pedir ayuda.",
    constraints: [
      "Nivel de lectura: palabras sencillas, oraciones cortas y pasos simples y grandes",
      "Dispositivos: cualquier teléfono; una computadora o tableta para el correo y las ventanas emergentes",
      "Tiempo: unos 5 minutos por lección, sin prisa",
      "Los datos de las agencias y las líneas de ayuda de Estados Unidos pueden cambiar; cada persona los revisa en los sitios web oficiales",
      "En la práctica no se usan números privados reales; solo mensajes de ejemplo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una llamada, un mensaje de texto o un correo", action: "identificar las cuatro señales de una estafa: se hacen pasar por otro, un problema o un premio, presión y un pago raro", standard: "nombrando cada señal que muestra el mensaje" },
    { id: "O2", condition: "Cuando alguien que llama suena como un ser querido en una emergencia", action: "colgar y comprobarlo con tu ser querido o con uno de sus padres a un número que ya tienes", standard: "sin enviar dinero antes de comprobarlo" },
    { id: "O3", condition: "Con un mensaje de texto, un correo, un sitio web o una ventana emergente inesperados", action: "comunicarte tú mismo con la empresa escribiendo su dirección real o llamando a un número de tu tarjeta o de una factura", standard: "sin hacer clic en el enlace ni llamar al número del mensaje" },
    { id: "O4", condition: "Cada vez que un mensaje o una llamada te preocupe", action: "usar los pasos Detente, Comprueba, Llama", standard: "usando solo un número en el que ya confías" },
    { id: "O5", condition: "Cuando una llamada o un mensaje inesperado te pide información o dinero", action: "negarte a dar números privados, contraseñas, códigos o pagos raros, y llamar a tu banco si ya los diste", standard: "sin compartir nada con un contacto inesperado" },
    { id: "O6", condition: "Después de una estafa o un intento de estafa", action: "nombrar dónde denunciarla y conseguir ayuda en Estados Unidos", standard: "nombrando al menos dos lugares correctos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan las estafas hoy",
      lessons: [
        {
          objectives: ["O1"],
          title: "Las cuatro señales de una estafa",
          minutes: 5,
          goal: "Nombrar las cuatro señales de que una llamada, un mensaje o un correo probablemente es una estafa.",
          text: [
            "La Federal Trade Commission (FTC), la agencia del gobierno de Estados Unidos que protege a los consumidores, describe cuatro señales comunes de una estafa. Aprende estas cuatro y descubrirás la mayoría de las estafas, con o sin IA.",
            "1. Se hacen pasar por alguien de confianza: una oficina del gobierno, tu banco, una empresa conocida, una organización benéfica o un familiar. 2. Dicen que hay un problema o un premio: debes dinero, tu cuenta está bloqueada, o ganaste algo pero tienes que pagar una tarifa. 3. Te presionan para actuar ya y pueden decirte que no cuelgues o que no se lo cuentes a nadie. 4. Quieren que pagues de una forma rara: tarjetas de regalo, giros electrónicos, criptomonedas, una aplicación de pago, o un cheque que quieren que cobres para luego devolverles dinero.",
            "Si ves aunque sea una de estas señales, ve más despacio y comprueba antes de hacer nada."
          ],
          words: [["FTC", "la Federal Trade Commission (Comisión Federal de Comercio), la agencia del gobierno de Estados Unidos que protege a las personas de las estafas."], ["Suplantar", "hacerse pasar por otra persona."]],
          slides: [
            { title: "Señal 1: Se hacen pasar por otro", bullets: ["Gobierno, banco, empresa, organización benéfica", "Incluso un familiar"] },
            { title: "Señal 2: Un problema o un premio", bullets: ["“Usted debe dinero”", "“Su cuenta está bloqueada”", "“Ganó un premio, solo pague una tarifa”"] },
            { title: "Señal 3: Presión", bullets: ["“Actúe ya”", "“No cuelgue”", "“No se lo cuente a nadie”"] },
            { title: "Señal 4: Un pago raro", bullets: ["Tarjetas de regalo o giros electrónicos", "Criptomonedas o aplicaciones de pago", "Cobrar un cheque y devolver dinero"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Toma una ficha o una hoja de papel. Escribe “Mi tarjeta de seguridad contra estafas” arriba y luego escribe las cuatro señales con tus propias palabras.",
          youCanNow: "nombrar las cuatro señales de una estafa.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una de las cuatro señales de una estafa?", options: ["Un mensaje de un número que tú mismo guardaste", "Una carta que estabas esperando", "Quieren que pagues con tarjetas de regalo o por giro", "Un amigo que te pregunta cómo estás"], answer: 2, why: "Un pago raro, como tarjetas de regalo o giros, es una de las cuatro señales." },
            { objective: "O1", q: "Alguien llama y dice que debes impuestos y que tienes que pagar hoy o te arrestarán. ¿Cuántas señales ves, y qué haces?", options: ["Ninguna; pagas para estar seguro", "Varias señales: un problema y presión; vas despacio y compruebas antes de hacer nada", "Una señal, así que debe ser real", "Ninguna señal porque es el gobierno"], answer: 1, why: "Un problema más la presión para actuar ya son señales de estafa; con una sola señal ya debes ir despacio y comprobar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Voces copiadas con IA y falsas emergencias familiares",
          minutes: 5,
          goal: "Reconocer una llamada de falsa emergencia que puede usar una copia hecha con IA de la voz de un ser querido.",
          text: [
            "Con una grabación corta de la voz de alguien, como un video publicado en internet, los estafadores pueden usar IA para copiar esa voz. Luego llaman a un abuelo, llorando o con pánico: “Abuela, tuve un accidente, necesito dinero para la fianza, por favor no le digas a mamá.”",
            "A veces se pone al teléfono una segunda persona que se hace pasar por abogado o policía. Piden efectivo, tarjetas de regalo o un giro electrónico, e incluso pueden mandar a un mensajero a tu puerta para recoger el dinero.",
            "La voz puede sonar real, pero las cuatro señales siguen ahí: se hacen pasar por otro, hay un problema, hay presión y secreto, y piden un pago raro. Cuelga y llama a tu ser querido, o a su padre o madre, al número que ya tienes. Una palabra clave que solo conoce tu familia es una buena comprobación extra."
          ],
          steps: ["Fíjate en las señales: pánico, secreto, un pedido de dinero.", "Cuelga, aunque la voz suene real.", "Llama a tu ser querido o a su padre o madre al número que ya tienes.", "Pide la palabra clave familiar si tienen una."],
          words: [["Clonación de voz", "usar IA para copiar la voz de alguien a partir de una grabación corta."], ["Mensajero", "una persona enviada a recoger o entregar algo."]],
          slides: [
            { title: "La IA puede copiar una voz", bullets: ["A partir de un video o una grabación corta", "Puede sonar igual que un nieto"] },
            { title: "La emergencia falsa", bullets: ["Accidente, arresto u hospital", "“No le digas a mamá”", "Efectivo, tarjetas de regalo, giro o un mensajero en tu puerta"] },
            { title: "Qué hacer", bullets: ["Cuelga, aunque suene real", "Llámalo al número que ya tienes", "Pide la palabra clave familiar"] }
          ],
          tryIt: "En tu tarjeta de seguridad, escribe los nombres y números de dos familiares a quienes llamarías para comprobar una emergencia. Luego llama a uno de ellos y acuerden una palabra clave familiar.",
          youCanNow: "reconocer una llamada de falsa emergencia familiar y comprobarla con seguridad.",
          quickCheck: [
            { objective: "O2", q: "¿Cómo pueden los estafadores copiar la voz de un ser querido?", options: ["Solo si lo conocen en persona", "No pueden", "Adivinando", "Con IA y una grabación corta, como un video publicado en internet"], answer: 3, why: "Una grabación corta basta para que la IA copie una voz." },
            { objective: "O2", q: "Una voz llorando, como la de tu nieta, dice que necesita dinero para la fianza y que no le digas a su mamá. ¿Qué haces?", options: ["Colgar y llamarla a ella o a uno de sus padres al número que ya tienes", "Enviar el dinero rápido", "Guardar el secreto como te pide", "Darle al abogado tu número del banco"], answer: 0, why: "Aunque la voz suene real, vuelve a llamar a un número de confianza antes de hacer nada." }
          ]
        },
        {
          objectives: ["O3","O1"],
          title: "Mensajes, sitios web y ventanas emergentes falsos",
          minutes: 5,
          goal: "Detectar un mensaje de texto, correo, sitio web o aviso emergente falso.",
          text: [
            "La IA ayuda a los estafadores a escribir mensajes y correos sin faltas de ortografía que parecen venir de tu banco, de una empresa de envíos, de Medicare (el seguro médico federal para mayores) o de Amazon. Una buena ortografía ya no prueba que un mensaje sea real.",
            "Trucos comunes: “No pudimos entregar su paquete, haga clic aquí.” “Actividad inusual en su cuenta, inicie sesión ahora.” Una ventana en tu computadora que dice que tiene un virus y que debes llamar a un número. Esos enlaces y números llevan al estafador.",
            "No hagas clic en enlaces ni llames a números de mensajes inesperados. Cierra el mensaje y ve al sitio web real de la empresa escribiendo tú mismo la dirección, o llama al número del reverso de tu tarjeta o de una factura de confianza. Medicare dice que nunca te llamará para venderte nada ni irá a tu casa."
          ],
          steps: ["No hagas clic en el enlace ni llames al número del mensaje.", "Cierra el mensaje o la ventana emergente.", "Escribe tú mismo la dirección real de la empresa, o llama al número de tu tarjeta o factura.", "Si una ventana emergente no se cierra, apaga el aparato y pregúntale a alguien de confianza."],
          words: [["Enlace", "texto que tocas o en el que haces clic y que te lleva a un sitio web."], ["Ventana emergente", "un cuadro que aparece de repente en tu pantalla."], ["Phishing", "un mensaje falso que intenta que entregues información privada."]],
          slides: [
            { title: "Buena ortografía no es prueba", bullets: ["La IA escribe mensajes que parecen reales", "Banco, envíos, Medicare, Amazon"] },
            { title: "Trucos comunes", bullets: ["“No pudimos entregar su paquete”", "“Inicie sesión ya, actividad inusual”", "“¡Virus! Llame a este número”"] },
            { title: "Qué hacer", bullets: ["No hagas clic ni llames desde el mensaje", "Escribe tú mismo la dirección real", "Llama al número de tu tarjeta o factura"] }
          ],
          sources: [{ name: "Medicare: Cómo denunciar fraude y abuso (en inglés)", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "En tu tarjeta de seguridad, escribe el número de teléfono de tu banco copiado del reverso de tu tarjeta bancaria, y el número del consultorio de tu médico tomado de una factura o tarjeta de cita. Estos son tus números de confianza.",
          youCanNow: "detectar mensajes y ventanas emergentes falsos y comunicarte con las empresas de forma segura usando números de confianza.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué una ortografía perfecta ya no prueba que un mensaje es real?", options: ["Los bancos nunca revisan la ortografía", "La IA ayuda a los estafadores a escribir mensajes con ortografía perfecta", "El gobierno revisa todos los correos", "La ortografía no importa en los mensajes de texto"], answer: 1, why: "La IA escribe mensajes limpios que parecen reales, así que la buena ortografía no prueba nada." },
            { objective: "O3", q: "Un correo dice que hay actividad extraña en tu cuenta del banco y que entres con un enlace. ¿Qué haces?", options: ["Hacer clic en el enlace y entrar", "Responder con tu contraseña", "Llamar al número del correo", "Cerrarlo y escribir tú mismo la dirección real de tu banco, o llamar al número de tu tarjeta"], answer: 3, why: "Los enlaces y números de los mensajes inesperados llevan al estafador; comunícate tú mismo con el banco." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan las estafas hoy",
        questions: [
          { objective: "O1", q: "¿Cuál es una de las cuatro señales de una estafa?", options: ["El mensaje tiene una fecha clara", "Conoces bien a quien lo envía y lo esperabas", "Te presionan para actuar ahora mismo", "Llegó por correo postal normal"], answer: 2, why: "La presión para actuar ya es una señal clásica de estafa." },
          { objective: "O1", q: "Alguien te pide pagar una “tarifa del gobierno” con tarjetas de regalo. Esto es:", options: ["Una señal de estafa", "Normal", "Una regla de impuestos", "Una regla del banco"], answer: 0, why: "Las oficinas de verdad no aceptan pagos con tarjetas de regalo." },
          { objective: "O2", q: "Alguien llama, suena igual que tu nieto y te ruega dinero para la fianza. ¿Qué haces?", options: ["Envías el dinero rápido", "Esperas al mensajero", "Le das el número de tu tarjeta", "Cuelgas y llamas a tu nieto o a su padre o madre al número que tienes"], answer: 3, why: "La IA puede copiar voces; comprobar en un número conocido es lo seguro." },
          { objective: "O3", q: "Un correo no tiene faltas y lleva el logotipo de tu banco. ¿Eso prueba que es real?", options: ["Sí, siempre", "No, la IA hace que los mensajes falsos parezcan reales", "Sí, si es largo", "Sí, si tiene un enlace"], answer: 1, why: "La buena ortografía y los logotipos son fáciles de copiar para los estafadores." },
          { objective: "O3", q: "Una ventana emergente dice que tu computadora tiene un virus y que llames a un número. Debes:", options: ["Llamar al número", "No llamar; cerrarla, o apagar el aparato y preguntarle a alguien de confianza", "Pagar para arreglarlo", "Darles acceso remoto"], answer: 1, why: "Los avisos de virus en ventanas emergentes con números de teléfono son una estafa común." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cómo protegerte",
      lessons: [
        {
          objectives: ["O4"],
          title: "La costumbre de Detente, Comprueba, Llama",
          minutes: 4,
          goal: "Usar tres pasos cada vez que un mensaje o una llamada te preocupe.",
          text: [
            "Los estafadores ganan cuando te apuran. Tu mejor defensa es una costumbre que usas siempre: Detente, Comprueba, Llama.",
            "Detente: no hagas clic, no pagues y no des ninguna información. Está bien colgarle a cualquiera, aunque diga que es la policía o el banco. Comprueba: busca las cuatro señales. Habla con alguien de confianza antes de actuar. Llama: comunícate tú mismo con la persona o la empresa, usando un número de tu tarjeta de seguridad, de tu tarjeta bancaria, de una factura o del sitio web oficial que escribiste tú mismo.",
            "También puedes pedirle una segunda opinión a un asistente de IA. Pega el mensaje, después de quitar cualquier dato privado, y pregunta: “¿Este mensaje muestra señales de estafa?” Toma su respuesta como una ayuda, no como la última palabra; tus pasos Detente, Comprueba, Llama siguen siendo lo primero."
          ],
          steps: ["Detente: no hagas clic, no pagues ni compartas nada.", "Comprueba: busca las cuatro señales y habla con alguien de confianza.", "Llama: usa un número que ya sabes que es confiable, nunca uno del mensaje."],
          words: [["Segunda opinión", "pedirle a otra persona que mire algo antes de que decidas."]],
          slides: [
            { title: "Detente", bullets: ["No hagas clic, no pagues ni compartas", "Está bien colgarle a cualquiera"] },
            { title: "Comprueba", bullets: ["Busca las cuatro señales", "Habla con alguien de confianza"] },
            { title: "Llama", bullets: ["Usa un número que ya sabes que es confiable", "Nunca un número del mensaje"] },
            { title: "La IA como ayuda", bullets: ["Primero quita los datos privados", "Pregunta: “¿Esto muestra señales de estafa?”", "Tus propios pasos siguen siendo lo primero"] }
          ],
          tryIt: "Escribe Detente, Comprueba, Llama en tu tarjeta de seguridad. Luego pregúntale a un asistente de IA: “¿Este mensaje muestra señales de estafa? Su paquete está retenido. Pague $1.99 en este enlace hoy o será devuelto.” Compara su respuesta con las cuatro señales.",
          youCanNow: "usar la costumbre de Detente, Comprueba, Llama y pedirle a la IA una segunda opinión con cuidado.",
          quickCheck: [
            { objective: "O4", q: "En Detente, Comprueba, Llama, ¿qué significa Llama?", options: ["Llamar al número del mensaje", "Devolverle la llamada a quien te llamó", "Comunicarte con la persona o la empresa usando un número en el que ya confías", "Llamar a un amigo para que pague por ti"], answer: 2, why: "Llama significa usar un número de tu tarjeta de seguridad, de tu tarjeta del banco, de una factura o de un sitio web que escribiste tú mismo." },
            { objective: "O4", q: "Un hombre llama, dice que es de la policía y que no debes colgar. ¿Qué puedes hacer?", options: ["Colgar; está bien colgarle a cualquiera", "Quedarte en la línea pase lo que pase", "Darle tu dirección", "Pagarle para terminar la llamada"], answer: 0, why: "Detente significa que puedes colgarle a cualquiera, incluso a alguien que dice ser de la policía." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Proteger tu dinero y tu información",
          minutes: 5,
          goal: "Enumerar los datos y los pagos que nunca das a una llamada o un mensaje inesperado.",
          text: [
            "Nunca le des esto a nadie que te contacte sin que lo esperes: tu número de Social Security (el Seguro Social de Estados Unidos) o de Medicare, números de banco o de tarjeta, contraseñas o un código que te llegó por mensaje al teléfono. Tu banco ya sabe tu número de cuenta; un banco de verdad no te pedirá tu contraseña ni el código del mensaje.",
            "Nunca le pagues a un desconocido con tarjetas de regalo, giros electrónicos, criptomonedas o una aplicación de pago, y nunca deposites un cheque para devolver parte del dinero. La FTC dice que las oficinas reales del gobierno nunca te dirán que muevas tu dinero para “protegerlo”, que saques efectivo o que compres oro.",
            "Nunca dejes que alguien que te llama se conecte a tu computadora para “arreglarla”. Si ya diste dinero o información, actúa rápido: llama a tu banco al número de tu tarjeta y cuéntale lo que pasó."
          ],
          steps: ["Nunca compartas números de Social Security, Medicare, banco o tarjeta con un contacto inesperado.", "Nunca compartas contraseñas ni códigos recibidos por mensaje.", "Nunca les pagues a desconocidos con tarjetas de regalo, giros, criptomonedas o aplicaciones de pago.", "Si ya pagaste o compartiste algo, llama a tu banco de inmediato al número de tu tarjeta."],
          words: [["Código por mensaje", "un número corto que te envían al teléfono para comprobar que de verdad eres tú quien inicia sesión."], ["Giro electrónico", "enviar dinero por vía electrónica; es muy difícil recuperarlo."]],
          slides: [
            { title: "Nunca compartas", bullets: ["Números de Social Security o Medicare", "Números de banco o tarjeta, contraseñas", "Códigos que te llegan por mensaje"] },
            { title: "Nunca les pagues a desconocidos con", bullets: ["Tarjetas de regalo o giros electrónicos", "Criptomonedas o aplicaciones de pago", "Dinero de un cheque que acabas de cobrar"] },
            { title: "Las oficinas reales nunca te piden", bullets: ["Mover tu dinero para “protegerlo”", "Sacar efectivo o comprar oro"] },
            { title: "¿Ya pagaste?", bullets: ["Llama a tu banco de inmediato", "Usa el número de tu tarjeta"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "En tu tarjeta de seguridad, escribe: “Nunca comparto mis números, contraseñas ni códigos con nadie que me contacte primero. Nunca les pago a desconocidos con tarjetas de regalo, giros ni criptomonedas.”",
          youCanNow: "proteger tus datos privados y rechazar pagos riesgosos.",
          quickCheck: [
            { objective: "O5", q: "¿Qué nunca te pedirá un banco de verdad?", options: ["Que vayas a una sucursal", "Tu contraseña o un código que te llegó por mensaje al teléfono", "Que leas tu estado de cuenta", "Que llames al número de tu tarjeta"], answer: 1, why: "Tu banco ya conoce tu cuenta; no te pedirá tu contraseña ni un código que te llegó por mensaje." },
            { objective: "O5", q: "Te das cuenta de que hace una hora le diste el número de tu tarjeta a un estafador. ¿Qué haces primero?", options: ["Esperar a ver qué pasa", "Volver a llamar al estafador", "Publicarlo en internet", "Llamar a tu banco de inmediato al número de tu tarjeta"], answer: 3, why: "Si ya compartiste dinero o información, el primer paso es actuar rápido con tu banco." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Denunciar una estafa y conseguir ayuda",
          minutes: 5,
          goal: "Nombrar dónde denunciar una estafa y dónde conseguir apoyo.",
          text: [
            "Denunciar ayuda a detener a los estafadores y puede ayudarte a ti. En Estados Unidos, puedes denunciar estafas ante la Federal Trade Commission en ReportFraud.ftc.gov. Los delitos por internet también se pueden denunciar ante el Internet Crime Complaint Center del FBI (su centro de denuncias de delitos por internet) en ic3.gov.",
            "Si tienes 60 años o más, la National Elder Fraud Hotline (la línea nacional contra el fraude a personas mayores), del Departamento de Justicia, es gratuita: llama al 833-FRAUD-11 (833-372-8311). Cuando lo revisamos, atendía de lunes a viernes, de 10 am a 6 pm hora del Este, con ayuda en inglés, español y otros idiomas. Revisa el sitio web de la línea para ver el horario actual.",
            "Si alguien usa tu información, entra en IdentityTheft.gov para recibir un plan de recuperación gratuito. Si se trata de fraude con Medicare, llama al 1-800-MEDICARE (1-800-633-4227). Los sitios reales para denunciar nunca te pedirán que pagues para recuperar tu dinero; quien lo haga es otra estafa."
          ],
          steps: ["Si te quitaron dinero, llama primero a tu banco.", "Denuncia en ReportFraud.ftc.gov.", "Si tienes 60 años o más: llama a la Elder Fraud Hotline, 833-372-8311.", "Si usaron tu identidad: entra en IdentityTheft.gov.", "Desconfía de quien te cobre por recuperar tu dinero."],
          words: [["Denunciar", "contarle a la oficina correcta lo que pasó para que pueda actuar."], ["Robo de identidad", "cuando alguien usa tu información personal para hacerse pasar por ti."]],
          slides: [
            { title: "Dónde denunciar", bullets: ["ReportFraud.ftc.gov", "ic3.gov del FBI para delitos por internet"] },
            { title: "Si tienes 60 años o más", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "Gratis; revisa su sitio para el horario actual"] },
            { title: "Más ayuda", bullets: ["IdentityTheft.gov si usan tu información", "1-800-MEDICARE para fraude con Medicare", "Nunca le pagues a nadie para “recuperar” tu dinero"] }
          ],
          sources: [{ name: "FTC: Denunciar un fraude", url: "https://reportfraud.ftc.gov/" }, { name: "Oficina para Víctimas del Delito del Departamento de Justicia: National Elder Fraud Hotline (en inglés)", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "Internet Crime Complaint Center del FBI", url: "https://www.ic3.gov/" }, { name: "FTC: Lo que debes saber sobre el robo de identidad (en inglés)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Cómo denunciar fraude y abuso (en inglés)", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Tarea final: termina tu tarjeta de seguridad contra estafas. Agrega los lugares para denunciar una estafa y el número de la Elder Fraud Hotline. Luego juzga estos dos mensajes con las cuatro señales: (1) “Hola abuelo, número nuevo, estoy en problemas, envíame $500 en tarjetas de regalo”; (2) un recordatorio de tu farmacia de que tu receta está lista, sin enlace y sin pedir dinero.",
          youCanNow: "detectar una estafa, comprobarla con seguridad, proteger tu dinero y denunciarla en el lugar correcto.",
          quickCheck: [
            { objective: "O6", q: "¿Para qué sirve IdentityTheft.gov?", options: ["Un plan de recuperación gratis si alguien usa tu información", "Comprar un seguro de identidad", "Pagar tus impuestos", "Denunciar un teléfono perdido"], answer: 0, why: "IdentityTheft.gov da un plan de recuperación gratis cuando alguien usa tu información." },
            { objective: "O6", q: "Una empresa llama y ofrece recuperar tu dinero perdido a cambio de un pago. ¿Qué es esto?", options: ["Un servicio del gobierno", "Un reembolso normal", "Probablemente otra estafa", "Un banco de confianza"], answer: 2, why: "Los sitios reales para denunciar nunca te piden pagar para recuperar tu dinero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cómo protegerte",
        questions: [
          { objective: "O4", q: "¿Cuáles son los tres pasos de la costumbre de seguridad?", options: ["Haz clic, Paga, Olvida", "Responde, Comparte, Envía", "Espera, Confía, Paga", "Detente, Comprueba, Llama"], answer: 3, why: "Detente, Comprueba, Llama frena al estafador." },
          { objective: "O4", q: "Cuando llamas para comprobar, ¿qué número debes usar?", options: ["Uno de tu tarjeta de seguridad, tu tarjeta bancaria o una factura", "El del mensaje", "Uno que te da quien llama", "Uno de una ventana emergente"], answer: 0, why: "Solo los números que ya sabes que son confiables son seguros." },
          { objective: "O5", q: "Alguien te llama y te dice que pases tus ahorros a una “cuenta segura” para protegerlos. Esto es:", options: ["Un buen consejo", "Una regla del banco", "Una estafa; las oficinas reales nunca piden esto", "Un requisito de impuestos"], answer: 2, why: "La FTC dice que las oficinas reales nunca te piden mover dinero para protegerlo." },
          { objective: "O6", q: "¿Dónde puedes denunciar una estafa ante la FTC?", options: ["En una ventana emergente", "En el sitio web del estafador", "En una publicación de redes sociales", "En ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov es el sitio de denuncias de la FTC." },
          { objective: "O6", q: "Alguien te ofrece recuperar tu dinero perdido a cambio de una tarifa. ¿Qué es esto?", options: ["Un programa del gobierno", "Ayuda normal", "Probablemente otra estafa", "Un consejo gratuito"], answer: 2, why: "Los sitios reales para denunciar nunca cobran por recuperar dinero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Seguridad con la IA y prevención de estafas para personas mayores",
    questions: [
      { objective: "O1", q: "¿Qué agencia de Estados Unidos describe las cuatro señales de una estafa?", options: ["El servicio meteorológico", "La Federal Trade Commission (FTC)", "El correo postal", "Una compañía de teléfonos"], answer: 1, why: "La FTC protege a los consumidores de las estafas." },
      { objective: "O1", q: "Un mensaje dice que ganaste un premio pero que primero debes pagar una tarifa. Esto es:", options: ["Una señal de estafa", "Un premio normal", "Una regla de impuestos", "Una regla del banco"], answer: 0, why: "Un premio que exige una tarifa es una estafa común." },
      { objective: "O1", q: "“No cuelgue y no se lo cuente a nadie” es una señal de:", options: ["Presión, una señal de estafa", "Buen servicio", "Una emergencia real", "Una llamada del médico"], answer: 0, why: "La presión y el secreto son señales de estafa." },
      { objective: "O1", q: "¿Qué forma de pago es una señal de alerta cuando un desconocido te la pide?", options: ["Pagar tu propia factura de servicios en su sitio oficial", "Tarjetas de regalo", "Pagar en la caja del supermercado", "Un cheque que le envías por correo a tu casero"], answer: 1, why: "Los estafadores piden tarjetas de regalo porque son difíciles de rastrear." },
      { objective: "O2", q: "¿Qué es la clonación de voz?", options: ["Una clase de canto", "Una reparación de teléfono", "Usar IA para copiar la voz de alguien", "Un tipo de audífono"], answer: 2, why: "La IA puede copiar una voz a partir de una grabación corta." },
      { objective: "O2", q: "En una llamada de falsa emergencia, una segunda persona puede hacerse pasar por:", options: ["Un cocinero", "El perro del vecino", "Un reportero del clima", "Un abogado o un policía"], answer: 3, why: "Los estafadores agregan falsos funcionarios para parecer reales." },
      { objective: "O2", q: "Una palabra clave familiar te ayuda a:", options: ["Desbloquear tu teléfono", "Pagar cuentas", "Comprobar quién llama de verdad", "Cambiar tu contraseña"], answer: 2, why: "Solo tu familia de verdad la conoce." },
      { objective: "O3", q: "¿Una ortografía perfecta prueba que un mensaje es real?", options: ["No", "Sí", "Solo los domingos", "Solo si viene de un banco"], answer: 0, why: "La IA escribe mensajes falsos con ortografía perfecta." },
      { objective: "O3", q: "Un mensaje dice que tu paquete está retenido y que pagues una pequeña tarifa en un enlace. Debes:", options: ["Hacer clic y pagar", "Reenviarlo a tus amigos", "Responder con el número de tu tarjeta", "No hacer clic; comprobarlo tú mismo con la empresa de envíos"], answer: 3, why: "Los enlaces de mensajes inesperados llevan a los estafadores." },
      { objective: "O3", q: "Una ventana emergente dice “¡Virus! Llame a este número ya.” Tú:", options: ["Llamas", "No llamas; la cierras o apagas el aparato", "Pagas la reparación", "Dejas que se conecten a tu computadora"], answer: 1, why: "Los avisos de virus en ventanas emergentes son una estafa común." },
      { objective: "O3", q: "Según Medicare, Medicare nunca:", options: ["Te envía información por correo", "Te llama para venderte algo ni va a tu casa", "Paga atención médica", "Tiene un sitio web"], answer: 1, why: "Medicare dice que no llama para vender ni va a tu casa." },
      { objective: "O4", q: "En Detente, Comprueba, Llama, “Detente” significa:", options: ["Dejar de pagar las cuentas", "Dejar de usar tu teléfono para siempre", "Dejar de hablar con tu familia", "No hacer clic, no pagar ni compartir"], answer: 3, why: "Detenerte le quita la prisa al estafador." },
      { objective: "O4", q: "Antes de pegar un mensaje en la IA para pedir una segunda opinión, debes:", options: ["Quitar los datos privados", "Agregar tu número de banco", "Agregar tu contraseña", "Agregar tu dirección"], answer: 0, why: "Los datos privados nunca van a la IA." },
      { objective: "O4", q: "La opinión de un asistente de IA sobre un mensaje es:", options: ["Una decisión legal", "Siempre correcta", "Una ayuda, no la última palabra", "Una decisión del banco"], answer: 2, why: "La IA puede equivocarse; tus propios pasos van primero." },
      { objective: "O5", q: "Un banco de verdad nunca te pedirá:", options: ["Que llames a su número", "Que vayas a una sucursal", "Que leas tu estado de cuenta", "Tu contraseña o el código del mensaje"], answer: 3, why: "Los bancos no piden contraseñas ni códigos." },
      { objective: "O5", q: "Alguien te pide que deposites su cheque y le devuelvas una parte. Esto es:", options: ["Una regla del banco", "Un favor normal", "Una estafa de cheque falso", "Una devolución de impuestos"], answer: 2, why: "El cheque rebota y pierdes el dinero que enviaste." },
      { objective: "O5", q: "Si ya le enviaste dinero a un estafador, la primera llamada es a:", options: ["El estafador", "Tu banco, al número de tu tarjeta", "Un número de una ventana emergente", "Nadie"], answer: 1, why: "Tu banco tal vez pueda detener o revertir el pago." },
      { objective: "O6", q: "El número de la National Elder Fraud Hotline es:", options: ["833-372-8311", "911", "411", "Un número de un mensaje de texto"], answer: 0, why: "833-FRAUD-11 (833-372-8311) es la línea del Departamento de Justicia." },
      { objective: "O6", q: "Si alguien usa tu información personal, hay un plan de recuperación gratuito en:", options: ["IdentityTheft.gov", "Un anuncio emergente", "El sitio del estafador", "Una página de redes sociales"], answer: 0, why: "IdentityTheft.gov es el sitio de recuperación de la FTC." },
      { objective: "O6", q: "El sitio del FBI para denunciar delitos por internet es:", options: ["fbi-refund.win", "ic3.gov", "un enlace en un mensaje", "un sitio de tarjetas de regalo"], answer: 1, why: "IC3 es el Internet Crime Complaint Center del FBI." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      8,
      11,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Números de confianza y pasos",
        objective: "O4",
        notYet: "Menos de tres números de confianza, o un número copiado de un mensaje.",
        meets: "Tres números de confianza (un familiar, el banco según el reverso de la tarjeta, el consultorio del médico) y los pasos Detente, Comprueba, Llama escritos.",
        exceeds: "Puede explicar de dónde salió cada número y por qué es de confianza."
      },
      {
        name: "Palabra clave familiar",
        objective: "O2",
        notYet: "No hay palabra clave familiar, o es fácil de adivinar o está publicada en internet.",
        meets: "La palabra clave familiar está escrita en la tarjeta y la familia la conoce.",
        exceeds: "Practicó pedirla en una llamada de emergencia de práctica."
      },
      {
        name: "Lugares para denunciar",
        objective: "O6",
        notYet: "No hay lugares para denunciar, o están mal.",
        meets: "Al menos dos lugares correctos, como ReportFraud.ftc.gov y la Elder Fraud Hotline.",
        exceeds: "También anota IdentityTheft.gov y dice que primero hay que llamar al banco si se llevaron dinero."
      },
      {
        name: "Mensajes de ejemplo juzgados",
        objective: "O1",
        notYet: "No se dio cuenta de que un mensaje de ejemplo era una estafa.",
        meets: "Juzgó bien los dos mensajes de ejemplo y nombró las señales que encontró.",
        exceeds: "Dijo qué haría después, usando Detente, Comprueba, Llama."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que, en el seguimiento a los 30 días, tienen su tarjeta de seguridad contra estafas junto al teléfono",
      "Personas que dicen haber reconocido y evitado una llamada, un mensaje o un correo de estafa dentro de 30 días (encuesta de seguimiento)",
      "Familias que acuerdan una palabra clave familiar"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, y una computadora o tableta si hay",
      "Una tarjeta en blanco o papel y lápiz para la tarjeta de seguridad contra estafas",
      "Dos mensajes de ejemplo impresos (uno de estafa y uno real) para la tarea final",
      "Unos 60 minutos en total, en sesiones cortas y sin prisa: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Usa mensajes de ejemplo inventados; nunca pidas que compartan números reales de cuenta, de Medicare o del Seguro Social.",
      "Hagan una práctica de roles con una falsa llamada de un nieto para practicar colgar y volver a llamar.",
      "Di que cualquiera puede caer en un engaño; ser víctima de una estafa no es motivo de vergüenza, y denunciar ayuda.",
      "Los horarios y números de las líneas de ayuda pueden cambiar; revisa los sitios web oficiales antes de la sesión.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

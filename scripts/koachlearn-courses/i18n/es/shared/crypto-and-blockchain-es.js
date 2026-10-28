"use strict";

// Koach Learn course (shared), Spanish translation of shared/crypto-and-blockchain.js. See scripts/koachlearn-courses/README.md, "Translations".
// Explains how crypto works and its risks; it does NOT recommend buying (README rule 6).

const FTC_CRYPTO = { name: "FTC: Lo que debe saber sobre las criptomonedas y las estafas", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" };

module.exports = {
  id: "crypto-and-blockchain-es",
  lang: "es",
  translationOf: "crypto-and-blockchain",
  category: "Seniors and Technology",
  name: "Entender las criptomonedas y la cadena de bloques",
  skills: "Explicar la cadena de bloques con palabras sencillas, Explicar cómo se envían y guardan las criptomonedas, Nombrar los riesgos, Reconocer estafas con criptomonedas, Denunciar una estafa",
  outcome: "explicar con palabras sencillas cómo funcionan una cadena de bloques y una criptomoneda, nombrar los riesgos principales y revisar cualquier oferta o mensaje de criptomonedas buscando las señales de estafa, para tomar tu propia decisión con cuidado y saber dónde denunciar un fraude.",
  about: [
    "Oyes hablar de Bitcoin y de las criptomonedas en las noticias, en el trabajo, en la familia y en anuncios. Algunas personas ganan dinero; muchas lo pierden, y las criptomonedas son una de las formas más comunes en que los estafadores piden que les paguen. Este curso explica cómo funcionan para que las entiendas y te protejas a ti y a las personas que quieres.",
    "En el Capítulo 1 aprendes qué es una cadena de bloques, qué es una criptomoneda y cómo funcionan las billeteras y las claves. En el Capítulo 2 aprendes los riesgos, las señales de alerta de las estafas con criptomonedas y dónde denunciar un fraude.",
    "Este curso no te dice si debes comprar criptomonedas. No es asesoría financiera. Para decisiones de dinero, habla con un profesional con licencia que elijas tú. Cada lección dura unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz una \"tarjeta de seguridad sobre criptomonedas\" de una página para ti o para un familiar: dos oraciones sobre qué son una cadena de bloques y una criptomoneda, tres riesgos, cuatro señales de alerta de una estafa con criptomonedas y los lugares oficiales para denunciar un fraude. Luego lee un anuncio o mensaje real sobre criptomonedas (de un correo, un mensaje de texto o las redes sociales) y marca qué señales de alerta muestra.",
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan las criptomonedas y la cadena de bloques",
      lessons: [
        {
          title: "Qué es una cadena de bloques",
          minutes: 5,
          goal: "Explicar una cadena de bloques con palabras sencillas usando una imagen simple.",
          text: [
            "Imagina un cuaderno de pagos del que miles de computadoras tienen cada una su copia. Cada pocos minutos se agrega una página nueva de pagos. Cada página queda unida a la anterior con una especie de huella matemática, así que si alguien cambia una página vieja, todas las demás copias muestran que no coincide.",
            "Ese cuaderno compartido es una cadena de bloques (en inglés, \"blockchain\"). Cada página es un bloque, y las páginas están encadenadas en orden. Ningún banco ni empresa guarda el cuaderno; lo guarda la red de computadoras. Esto se llama descentralizado.",
            "Por este diseño, un pago escrito en la cadena de bloques es muy difícil de cambiar o deshacer. La mayoría de las cadenas de bloques también son públicas: cualquiera puede consultar los pagos, aunque no se muestren los nombres de las personas."
          ],
          words: [["Cadena de bloques (blockchain)", "un registro compartido de transacciones, guardado por muchas computadoras, donde cada bloque nuevo está unido al anterior."], ["Bloque", "un grupo de transacciones que se agregan juntas a la cadena de bloques."], ["Descentralizado", "manejado por una red de muchas computadoras en lugar de un solo banco o empresa."], ["Libro de cuentas", "un registro de pagos, como un libro de contabilidad."]],
          slides: [
            { title: "Imagina un cuaderno compartido", bullets: ["Miles de computadoras tienen una copia", "Se agregan seguido páginas nuevas de pagos", "Cada página queda unida a la anterior"] },
            { title: "Palabras de la cadena de bloques", bullets: ["Bloque = una página de pagos", "Cadena = páginas unidas en orden", "Descentralizado = ningún banco está a cargo"] },
            { title: "Lo que significa para ti", bullets: ["Los pagos son muy difíciles de cambiar o deshacer", "La mayoría de las cadenas de bloques son registros públicos"] }
          ],
          tryIt: "Explícale una cadena de bloques a alguien (o en voz alta a ti mismo) usando la imagen del cuaderno compartido. Incluye las palabras bloque, cadena y descentralizado.",
          youCanNow: "explicar qué es una cadena de bloques y por qué sus registros son difíciles de cambiar."
        },
        {
          title: "Qué es una criptomoneda",
          minutes: 5,
          goal: "Explicar qué es una criptomoneda y en qué se diferencia de los dólares en un banco.",
          text: [
            "Una criptomoneda (cripto) es dinero digital registrado en una cadena de bloques. Bitcoin fue la primera; ahora hay miles, como Ether. Una moneda estable (\"stablecoin\") es un tipo de cripto diseñada para mantenerse cerca del valor de una moneda normal como el dólar de EE. UU., pero aun así puede fallar.",
            "Las criptomonedas no las emite un gobierno, y su precio sube y baja según lo que la gente esté dispuesta a pagar. Los precios pueden subir o bajar mucho en un solo día.",
            "Los pagos con cripto son distintos de los pagos con tarjeta. La FTC (la Comisión Federal de Comercio de EE. UU., que protege a los consumidores) dice que los pagos con cripto no tienen las protecciones legales que tienen las tarjetas de crédito y débito, y que normalmente no se pueden revertir. El dinero en cripto tampoco es lo mismo que el dinero en una cuenta bancaria asegurada."
          ],
          words: [["Criptomoneda (cripto)", "dinero digital registrado en una cadena de bloques, como Bitcoin o Ether."], ["Moneda estable (stablecoin)", "cripto diseñada para mantenerse cerca del valor de una moneda normal, como el dólar de EE. UU."], ["Volátil", "un precio que puede subir o bajar mucho y rápido."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "La cripto es...", bullets: ["Dinero digital registrado en una cadena de bloques", "Bitcoin fue la primera; Ether es otra", "Las monedas estables intentan igualar una moneda como el dólar"] },
            { title: "No es como los dólares en un banco", bullets: ["No la emite un gobierno", "El precio puede cambiar mucho en un día"] },
            { title: "No es como un pago con tarjeta", bullets: ["Sin las protecciones legales de las tarjetas (FTC)", "Normalmente no se puede revertir"] }
          ],
          tryIt: "Escribe tres diferencias entre pagar con tarjeta de débito y pagar con cripto. Usa la página de la FTC de las fuentes de esta lección para revisar tu respuesta.",
          youCanNow: "explicar qué es una criptomoneda y en qué se diferencia del dinero en el banco y de los pagos con tarjeta."
        },
        {
          title: "Billeteras, claves y casas de cambio",
          minutes: 5,
          goal: "Explicar cómo se guardan y se envían las criptomonedas, y qué nunca se debe compartir.",
          text: [
            "Las criptomonedas se guardan en una billetera (\"wallet\"): una aplicación, un sitio web o un pequeño aparato que guarda tus claves. La dirección pública es como un número de cuenta que puedes dar a alguien para que te envíe cripto. La clave privada, que a menudo se muestra como una frase de recuperación (una lista de 12 o 24 palabras), es como la llave maestra. Quien la tenga controla la cripto.",
            "Nunca compartas una frase de recuperación ni una clave privada con nadie: ni con el personal de soporte, ni con un \"ayudante\", ni con una aplicación, ni con un asistente de IA. Una empresa real nunca te la pedirá. Si la pierdes, la cripto puede perderse para siempre.",
            "Una casa de cambio (\"exchange\") es una empresa donde la gente compra, vende y guarda cripto. Las casas de cambio pueden ser hackeadas o cerrar. En Estados Unidos, revisa si una empresa está registrada y lee sus quejas antes de confiar en ella; los organismos reguladores como la SEC (Comisión de Bolsa y Valores) y la CFTC (Comisión de Comercio de Futuros) publican advertencias."
          ],
          words: [["Billetera (wallet)", "una aplicación o aparato que guarda las claves de tu cripto."], ["Dirección pública", "un código que otros usan para enviarte cripto, como un número de cuenta."], ["Clave privada / frase de recuperación", "el secreto que controla la cripto; nunca lo compartas."], ["Casa de cambio (exchange)", "una empresa donde la gente compra, vende y guarda cripto."]],
          sources: [FTC_CRYPTO, { name: "SEC: Enviar un aviso o una queja", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Presentar una queja", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Billetera y claves", bullets: ["Billetera = aplicación o aparato que guarda tus claves", "Dirección pública = como un número de cuenta", "Clave privada / frase de recuperación = la llave maestra"] },
            { title: "Nunca compartas", bullets: ["Tu frase de recuperación ni tu clave privada", "Ni con soporte, ayudantes, aplicaciones ni IA", "Las empresas reales nunca la piden"] },
            { title: "Casas de cambio", bullets: ["Empresas para comprar, vender y guardar cripto", "Pueden ser hackeadas o cerrar", "Revisa primero las quejas y las advertencias de los reguladores"] }
          ],
          tryIt: "Escribe una oración para cada cosa: qué es una dirección pública, qué es una frase de recuperación y qué dirías si un \"agente de soporte\" te pidiera tu frase de recuperación.",
          youCanNow: "explicar cómo se guarda y se envía la cripto y por qué nunca se debe compartir una frase de recuperación."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan las criptomonedas y la cadena de bloques",
        questions: [
          { q: "¿Qué imagen describe mejor una cadena de bloques?", options: ["La lista de contactos de un teléfono", "La hoja de cálculo privada de un banco", "Un cheque de papel", "Un cuaderno compartido de pagos del que muchas computadoras tienen una copia"], answer: 3, why: "Una cadena de bloques es un registro compartido que guardan muchas computadoras." },
          { q: "¿Por qué es difícil cambiar un registro viejo en una cadena de bloques?", options: ["Está impreso en papel", "Lo cuida un juez", "Cada bloque está unido al anterior, así que los cambios no coinciden con las otras copias", "Se borra todos los días"], answer: 2, why: "Los bloques unidos y las muchas copias hacen que los cambios se noten." },
          { q: "¿Qué dice la FTC sobre los pagos con cripto comparados con las tarjetas de crédito?", options: ["Tienen más protección", "Son iguales", "No tienen las mismas protecciones legales y normalmente no se pueden revertir", "Siempre están asegurados"], answer: 2, why: "La FTC advierte que los pagos con cripto no tienen las protecciones de las tarjetas." },
          { q: "¿Qué es una moneda estable (stablecoin)?", options: ["Una moneda de metal", "Un tipo de billetera", "Un bono de ahorro del gobierno", "Cripto diseñada para mantenerse cerca de una moneda como el dólar"], answer: 3, why: "Las monedas estables intentan seguir a una moneda normal, aunque aun así pueden fallar." },
          { q: "Alguien de \"soporte de la billetera\" te pide tu frase de recuperación de 12 palabras para arreglar un problema. ¿Qué haces?", options: ["Se la das para que te ayude", "Le das la mitad", "La escribes en una IA para revisarla", "Te niegas; las empresas reales nunca la piden"], answer: 3, why: "Quien tenga la frase de recuperación controla la cripto." }
        ]
      }
    },
    {
      name: "Capítulo 2: Riesgos, estafas y denuncias",
      lessons: [
        {
          title: "Los riesgos reales",
          minutes: 5,
          goal: "Nombrar los riesgos principales de tener o recibir criptomonedas.",
          text: [
            "Riesgo de precio: los precios de las criptomonedas pueden caer mucho, y nadie puede prometer que vuelvan a subir. Nunca pongas dinero que necesitas para la renta, la comida, las cuentas o las medicinas.",
            "Riesgo de pérdida: si pierdes tu frase de recuperación, o envías cripto a la dirección equivocada, normalmente se pierde. Los pagos normalmente no se pueden revertir.",
            "Riesgo de la empresa: las casas de cambio y las aplicaciones pueden ser hackeadas o cerrar. La FDIC (la agencia de EE. UU. que asegura los depósitos bancarios) dice que las criptomonedas no están cubiertas por su seguro de depósitos, que solo cubre depósitos en bancos asegurados por la FDIC. Riesgo de estafa: la cripto es una de las formas de pago favoritas de los estafadores porque es rápida y difícil de recuperar.",
            "Este curso no te dice si debes comprar. Si lo estás pensando, habla con un profesional financiero con licencia que elijas tú y lee primero las advertencias oficiales."
          ],
          words: [["Riesgo", "la posibilidad de perder dinero o de que algo salga mal."], ["Seguro de la FDIC", "protección del gobierno de EE. UU. para el dinero en cuentas de depósito de bancos asegurados; no cubre la cripto."]],
          sources: [FTC_CRYPTO, { name: "FDIC: Entender el seguro de depósitos", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Riesgo de precio", bullets: ["Los precios pueden caer mucho", "Nunca uses dinero de la renta, comida, cuentas o medicinas"] },
            { title: "Riesgo de pérdida", bullets: ["Frase de recuperación perdida = cripto perdida", "Dirección equivocada o estafa = normalmente se pierde"] },
            { title: "Riesgo de empresa y de estafa", bullets: ["Las aplicaciones y casas de cambio pueden ser hackeadas o cerrar", "La cripto no está asegurada por la FDIC", "A los estafadores les encantan los pagos con cripto"] },
            { title: "No es asesoría", bullets: ["Este curso no dice que compres ni que vendas", "Habla con un profesional con licencia que elijas"] }
          ],
          tryIt: "Escribe los cuatro riesgos con tus propias palabras: precio, pérdida, empresa y estafa. Para cada uno, escribe una forma en que una persona podría protegerse.",
          youCanNow: "nombrar los riesgos principales de la cripto y explicar por qué nunca se debe arriesgar el dinero que necesitas."
        },
        {
          title: "Reconocer estafas con criptomonedas",
          minutes: 5,
          goal: "Revisar una oferta o mensaje de criptomonedas buscando las señales de estafa.",
          text: [
            "La FTC enumera señales de estafas con cripto. Solo los estafadores exigen pagos en cripto, sobre todo por adelantado o para \"proteger\" tu dinero. Solo los estafadores garantizan ganancias o rendimientos grandes y rápidos. El apoyo de famosos puede ser falso.",
            "Cuidado con un nuevo amigo en línea o una pareja romántica que empieza a dar consejos de inversión o pide cripto. Cuidado con llamadas o mensajes que dicen ser de una agencia del gobierno, un banco o una empresa de servicios y dicen que debes dinero o que tu cuenta está congelada y tienes que pagar en cripto o en un cajero de cripto.",
            "También cuidado con trabajos que te piden pagar una cuota en cripto, y con correos que amenazan con compartir cosas privadas si no pagas en cripto. Cuando veas cualquiera de estas señales, detente. No pagues, no hagas clic y habla con alguien de confianza."
          ],
          steps: ["¿Te pide pagar en cripto o usar un cajero de cripto?", "¿Promete ganancias garantizadas o rápidas?", "¿Viene de un nuevo amigo en línea, un contacto romántico o un desconocido?", "¿Te apura o te amenaza?", "Si alguna respuesta es sí: detente, no pagues y consulta con alguien de confianza."],
          words: [["Estafa", "un engaño para robar dinero o información."], ["Cajero de cripto", "una máquina que convierte efectivo en cripto; los estafadores a menudo les dicen a sus víctimas que usen una."], ["Estafa romántica", "una estafa en la que alguien crea una relación en línea para sacar dinero."]],
          sources: [FTC_CRYPTO],
          slides: [
            { title: "Solo los estafadores...", bullets: ["Exigen pagos en cripto", "Garantizan ganancias o rendimientos rápidos", "Usan falsos apoyos de famosos"] },
            { title: "Cuidado con", bullets: ["Nuevos amigos en línea que dan consejos de inversión", "Llamadas del \"gobierno\" o del \"banco\" que piden pagar en cripto", "Trabajos que cobran una cuota en cripto"] },
            { title: "Cuando veas una", bullets: ["Detente", "No pagues ni hagas clic", "Habla con alguien de confianza"] }
          ],
          tryIt: "Busca un anuncio, mensaje o publicación en redes sociales sobre cripto. Responde las cinco preguntas de revisión y anota cada señal de alerta que muestra.",
          youCanNow: "revisar una oferta o mensaje de cripto buscando las señales de alerta y detenerte antes de pagar."
        },
        {
          title: "Denunciar un fraude y ayudar a otros",
          minutes: 5,
          goal: "Saber dónde denunciar una estafa con cripto y qué anotar.",
          text: [
            "Si tú o alguien que conoces fue víctima, denúncialo. La FTC menciona estos lugares: la FTC en ReportFraud.ftc.gov, la CFTC en cftc.gov/complaint, la SEC en sec.gov/tcr, el Centro de Denuncias de Delitos en Internet del FBI (IC3) en ic3.gov, y la casa de cambio o la aplicación que se usó para enviar el dinero.",
            "Anota lo que pasó: fechas, la cantidad, la dirección de la billetera o el número de la transacción, los nombres y números de teléfono que usó el estafador y capturas de pantalla de los mensajes. No envíes más dinero a nadie que prometa \"recuperar\" tu cripto perdida; muchas veces es una segunda estafa.",
            "Habla de las estafas con tu familia y tus amigos, sobre todo con los familiares mayores y los jóvenes que son nuevos en las aplicaciones de dinero. Una conversación corta puede evitar una pérdida."
          ],
          steps: ["Detén todos los pagos y el contacto con el estafador.", "Anota fechas, cantidades, direcciones de billetera, números de transacción, nombres y números de teléfono.", "Guarda capturas de pantalla.", "Denuncia en ReportFraud.ftc.gov y en ic3.gov, y también ante la SEC o la CFTC si fue una inversión.", "Avisa a la casa de cambio o a la aplicación que usaste.", "Ignora a cualquiera que ofrezca recuperar tu dinero a cambio de una cuota."],
          words: [["Número de transacción (ID)", "el código que identifica un pago con cripto en la cadena de bloques."], ["IC3", "el Centro de Denuncias de Delitos en Internet del FBI, que recibe denuncias de delitos en línea."], ["Estafa de recuperación", "una segunda estafa que promete recuperar tu dinero perdido a cambio de una cuota."]],
          sources: [FTC_CRYPTO, { name: "FTC: ReportFraud (denunciar un fraude)", url: "https://reportfraud.ftc.gov" }, { name: "Centro de Denuncias de Delitos en Internet del FBI (IC3)", url: "https://www.ic3.gov" }, { name: "SEC: Enviar un aviso o una queja", url: "https://www.sec.gov/tcr" }, { name: "CFTC: Presentar una queja", url: "https://www.cftc.gov/complaint" }],
          slides: [
            { title: "Dónde denunciar", bullets: ["ReportFraud.ftc.gov", "ic3.gov (FBI)", "sec.gov/tcr o cftc.gov/complaint para inversiones", "La casa de cambio o aplicación que usaste"] },
            { title: "Anótalo", bullets: ["Fechas y cantidades", "Dirección de la billetera y número de transacción", "Nombres, números, capturas de pantalla"] },
            { title: "Cuidado con las estafas de recuperación", bullets: ["Nadie legítimo cobra por \"recuperar\" cripto", "No vuelvas a pagar"] }
          ],
          tryIt: "Tarea final: haz tu tarjeta de seguridad sobre criptomonedas de una página (qué son la cadena de bloques y la cripto, tres riesgos, cuatro señales de estafa, dónde denunciar). Luego marca las señales de alerta en un anuncio o mensaje real sobre cripto.",
          youCanNow: "denunciar una estafa con cripto en los lugares correctos y ayudar a tu familia y amigos a evitarla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Riesgos, estafas y denuncias",
        questions: [
          { q: "¿Qué dinero nunca se debe poner en cripto?", options: ["Dinero de juego en un videojuego", "Dinero que puedes perder después de recibir asesoría", "Dinero que necesitas para la renta, la comida o las medicinas", "Nada de eso es un riesgo"], answer: 2, why: "Los cambios de precio significan que podrías perder dinero que necesitas." },
          { q: "Según la FDIC, la cripto:", options: ["Está totalmente asegurada por la FDIC", "Está asegurada solo los fines de semana", "No está cubierta por el seguro de depósitos de la FDIC", "Está asegurada si la compras en un teléfono"], answer: 2, why: "El seguro de depósitos de la FDIC no cubre la cripto." },
          { q: "Alguien llama, dice que es del gobierno y que debes pagar una multa hoy en un cajero de cripto. Esto es:", options: ["Un pago normal al gobierno", "Una devolución de impuestos", "Una regla del banco", "Una señal de alerta de estafa"], answer: 3, why: "Solo los estafadores exigen pagos en cripto." },
          { q: "Un nuevo amigo en línea promete ganancias garantizadas si inviertes en cripto. ¿Qué haces?", options: ["Inviertes un poco para probar", "Le envías tu frase de recuperación", "Le pides una garantía más grande", "Te detienes; las ganancias garantizadas son señal de estafa"], answer: 3, why: "Solo los estafadores garantizan ganancias." },
          { q: "Después de perder dinero en una estafa con cripto, alguien ofrece recuperarlo a cambio de una cuota. Probablemente es:", options: ["Una estafa de recuperación", "El FBI", "Tu banco", "Un reembolso"], answer: 0, why: "Pagar una cuota para recuperar cripto es una segunda estafa común." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Entender las criptomonedas y la cadena de bloques",
    questions: [
      { q: "Una cadena de bloques es:", options: ["Un registro compartido de transacciones que guardan muchas computadoras", "Un tipo de candado para bicicleta", "El archivo secreto de una empresa", "Un recibo de papel"], answer: 0, why: "Muchas computadoras guardan copias del mismo registro encadenado." },
      { q: "En una cadena de bloques, un \"bloque\" es:", options: ["Un grupo de transacciones agregadas juntas", "Una contraseña", "Un cajero de cripto", "Una sucursal bancaria"], answer: 0, why: "Cada bloque contiene un grupo de transacciones." },
      { q: "\"Descentralizado\" significa:", options: ["Manejado por un banco", "Cerrado los fines de semana", "Manejado por una red de muchas computadoras en lugar de una empresa", "Solo para gobiernos"], answer: 2, why: "Ninguna empresa sola guarda el registro." },
      { q: "La mayoría de las cadenas de bloques son:", options: ["Secretas y ocultas", "Borradas cada año", "Impresas en los periódicos", "Registros públicos que cualquiera puede consultar"], answer: 3, why: "Cualquiera puede consultar las transacciones, aunque no se muestren los nombres." },
      { q: "Bitcoin es un ejemplo de:", options: ["Una tarjeta de crédito", "Una cuenta bancaria", "Una criptomoneda", "Una moneda estable del gobierno"], answer: 2, why: "Bitcoin fue la primera criptomoneda." },
      { q: "Se dice que los precios de la cripto son volátiles porque:", options: ["Nunca cambian", "Solo suben", "Los fija la ley", "Pueden subir o bajar mucho y rápido"], answer: 3, why: "Volátil significa cambios de precio grandes y rápidos." },
      { q: "Si le pagas a un estafador con cripto, la FTC dice que:", options: ["Siempre puedes cancelarlo", "Normalmente no puedes revertir el pago", "El banco te devuelve el dinero", "Estás asegurado"], answer: 1, why: "Los pagos con cripto normalmente no se pueden revertir." },
      { q: "Una billetera de cripto es:", options: ["Una billetera de cuero", "Una aplicación o aparato que guarda las claves de tu cripto", "Una cuenta bancaria", "La oficina de una casa de cambio"], answer: 1, why: "Las billeteras guardan las claves que controlan la cripto." },
      { q: "¿Qué es seguro dar a alguien que te va a enviar cripto?", options: ["Tu dirección pública", "Tu frase de recuperación", "Tu clave privada", "La contraseña de tu banco"], answer: 0, why: "La dirección pública es como un número de cuenta." },
      { q: "¿Quién controla la cripto de una billetera?", options: ["La compañía telefónica", "Quien tenga la clave privada o la frase de recuperación", "El gobierno", "La persona con la dirección pública"], answer: 1, why: "La clave privada es la llave maestra." },
      { q: "Una casa de cambio es:", options: ["Una empresa donde la gente compra, vende y guarda cripto", "Una oficina del gobierno", "Un tipo de bloque de la cadena", "Una frase de recuperación"], answer: 0, why: "Las casas de cambio son empresas para comerciar y guardar cripto." },
      { q: "¿Cuál es un riesgo de empresa con la cripto?", options: ["La casa de cambio podría ser hackeada o cerrar", "El precio es fijo", "Está asegurada por la FDIC", "No se puede robar"], answer: 0, why: "Las casas de cambio y las aplicaciones pueden ser hackeadas o quebrar." },
      { q: "¿Este curso te dice que compres cripto?", options: ["Sí, siempre", "Sí, pero solo Bitcoin", "No; para decisiones de dinero habla con un profesional con licencia que elijas", "Sí, con el dinero de la renta"], answer: 2, why: "El curso explica cómo funciona la cripto y sus riesgos; no es asesoría." },
      { q: "Envías cripto a la dirección equivocada. ¿Qué pasa normalmente?", options: ["Vuelve sola", "Normalmente se pierde", "El banco te la devuelve", "La FTC la envía de vuelta"], answer: 1, why: "Los pagos en la cadena de bloques normalmente no se pueden deshacer." },
      { q: "¿Cuál es una señal de alerta de una estafa con cripto?", options: ["Una promesa de ganancias garantizadas", "Una lista de precios clara", "Una tienda que acepta tarjetas", "Un recibo por correo"], answer: 0, why: "Solo los estafadores garantizan ganancias." },
      { q: "Una persona de una aplicación de citas a quien nunca conociste te pide invertir en cripto. Esto es:", options: ["Amor verdadero", "Una señal común de estafa romántica", "Un requisito del banco", "Una regla de impuestos"], answer: 1, why: "Los contactos nuevos en línea que insisten en la cripto son una señal de estafa." },
      { q: "Una oferta de trabajo dice que debes pagar una cuota de capacitación en cripto. Debes:", options: ["Pagarla rápido", "Detenerte; los trabajos que exigen una cuota en cripto son señal de estafa", "Pagar la mitad", "Enviar tu frase de recuperación en su lugar"], answer: 1, why: "La FTC menciona los trabajos con cuota en cripto como señal de estafa." },
      { q: "¿Dónde puedes denunciar un fraude con cripto en EE. UU.?", options: ["En ReportFraud.ftc.gov y en ic3.gov", "En un grupo cualquiera de redes sociales", "En la línea de ayuda del estafador", "En ningún lugar"], answer: 0, why: "La FTC y el IC3 del FBI reciben denuncias de fraude." },
      { q: "¿Qué debes anotar después de una estafa?", options: ["Nada", "Fechas, cantidades, dirección de la billetera, número de transacción y capturas de pantalla", "Solo tu contraseña", "Tu frase de recuperación"], answer: 1, why: "Estos datos ayudan a los investigadores." },
      { q: "La mejor forma de proteger a un familiar de las estafas con cripto es:", options: ["No hablar nunca del tema", "Compartir las señales de alerta y dónde denunciar", "Darle tu frase de recuperación", "Decirle que invierta rápido"], answer: 1, why: "Una conversación corta sobre las señales de alerta puede evitar una pérdida." }
    ]
  }
};

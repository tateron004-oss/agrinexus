"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-financial-literacy.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-financial-literacy-es",
  lang: "es",
  translationOf: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "IA para la educación financiera",
  skills: "Hacer un presupuesto mensual, Usar la IA para ordenar el dinero sin compartir datos privados, Poner una meta de ahorro, Revisar tu reporte de crédito gratis, Encontrar ayuda gratuita con impuestos y dinero, Reconocer estafas de dinero",
  outcome: "armar un presupuesto mensual sencillo para tu hogar con ayuda de un asistente de IA gratuito (sin compartir ningún número privado), poner una meta de ahorro y saber dónde conseguir tu reporte de crédito gratis y ayuda gratuita con los impuestos.",
  about: [
    "El estrés por el dinero es real, sobre todo cuando cada dólar ya tiene un destino. Este curso te da herramientas sencillas para ver a dónde se va tu dinero, planear para lo que le importa a tu familia y evitar trampas que cuestan caro.",
    "Vas a armar un presupuesto mensual, usar un asistente de IA gratuito para que te ayude a ordenarlo y explicarlo sin escribir ningún número privado, poner una meta de ahorro, revisar tu reporte de crédito gratis, encontrar ayuda gratuita con impuestos y dinero, y reconocer estafas de dinero.",
    "Este curso enseña habilidades, no da consejos de inversión. Para decisiones grandes de dinero, habla con un consejero gratuito de una organización sin fines de lucro o revisa fuentes oficiales como consumerfinance.gov, fdic.gov e irs.gov. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un presupuesto de un mes para tu hogar: haz una lista de ingresos, necesidades y gustos con cantidades redondeadas, usa un asistente de IA para ordenarlo y sugerir un lugar donde ahorrar (sin números de cuenta ni datos privados), pon una meta de ahorro con una cantidad y una fecha, y anota dónde vas a conseguir tu reporte de crédito gratis y ayuda gratuita con los impuestos.",
  chapters: [
    {
      name: "Capítulo 1: Tu plan de dinero",
      lessons: [
        {
          title: "Lo básico del presupuesto: ingresos, necesidades y gustos",
          minutes: 5,
          goal: "Hacer la lista de tus ingresos del mes y separar tus gastos en necesidades y gustos.",
          text: [
            "Un presupuesto es un plan para tu dinero. Muestra lo que entra cada mes y a dónde se va. Tener un presupuesto no quiere decir que nunca te puedes divertir; quiere decir que tú decides a propósito.",
            "Los ingresos son el dinero que entra: sueldos, beneficios, pensión alimenticia, trabajos extra. Las necesidades son lo que tienes que pagar para vivir y trabajar: renta, comida, luz y agua, transporte, cuidado de niños, medicinas. Los gustos son cosas que está bien tener: comer fuera, servicios de streaming, ropa nueva que todavía no necesitas.",
            "Empieza con un mes. Mira tus talones de pago, los estados de cuenta del banco o la tarjeta y los recibos. Redondea las cantidades al dólar o a los cinco dólares más cercanos; algo aproximado basta para empezar."
          ],
          steps: ["Anota cada fuente de ingresos de un mes.", "Haz una lista de cada gasto que recuerdes o encuentres.", "Marca cada gasto como necesidad o gusto.", "Suma los ingresos, las necesidades y los gustos."],
          words: [["Presupuesto", "un plan de cómo vas a usar tu dinero cada mes."], ["Ingreso", "dinero que entra."], ["Gasto", "dinero que sale."]],
          slides: [
            { title: "Un presupuesto es un plan", bullets: ["Lo que entra", "A dónde se va", "Tú decides a propósito"] },
            { title: "Necesidades o gustos", bullets: ["Necesidades: renta, comida, luz y agua, transporte, cuidado de niños", "Gustos: comer fuera, streaming, extras"] },
            { title: "Empieza sencillo", bullets: ["Un mes", "Usa talones de pago, estados de cuenta, recibos", "Redondea las cantidades"] }
          ],
          tryIt: "En papel o en una hoja de cálculo gratuita, escribe tus ingresos del mes y al menos diez gastos. Marca cada uno con N de necesidad o G de gusto.",
          youCanNow: "hacer la lista de tus ingresos y separar tus gastos en necesidades y gustos."
        },
        {
          title: "Usar la IA para ordenar tu presupuesto con seguridad",
          minutes: 5,
          goal: "Pedirle a un asistente de IA gratuito que ordene y explique tu presupuesto sin compartir información privada.",
          text: [
            "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini puede convertir tu lista en una tabla ordenada, sumarla y señalar a dónde se está yendo el dinero. Tú sigues tomando cada decisión.",
            "Comparte solo cantidades redondeadas y categorías. Nunca escribas números de cuenta, números de tarjeta, tu número de Seguro Social, contraseñas ni el acceso a tu banco. Ejemplo de instrucción: \"Mi familia de 4 recibe unos $3,200 al mes. Renta $1,400, comida $650, teléfono $90, pases de autobús $100, comer fuera $200, streaming $40. Ponlo en una tabla, súmalo y sugiere dos lugares donde podríamos gastar menos.\"",
            "La IA se puede equivocar en las cuentas. Suma tú los totales o usa una calculadora para revisarlos. Sus consejos son ideas, no reglas; elige lo que le queda a tu familia."
          ],
          steps: ["Escribe tus categorías y cantidades redondeadas.", "Quita cualquier número de cuenta o dato privado.", "Pide a la IA que haga una tabla, la sume y sugiera recortes.", "Revisa tú los totales.", "Elige qué sugerencias le quedan a tu familia."],
          words: [["Categoría", "un grupo de gastos, como comida o transporte."], ["Marcador", "algo como \"[mi banco]\" que se usa en lugar de datos privados."]],
          slides: [
            { title: "La IA te puede ayudar a ordenar", bullets: ["Hacer una tabla", "Sumarla", "Sugerir dónde gastar menos"] },
            { title: "Comparte solo esto", bullets: ["Cantidades redondeadas", "Categorías como renta y comida", "Nunca números de cuenta, tarjeta o Seguro Social"] },
            { title: "Revisa y elige", bullets: ["Revisa tú las cuentas", "Los consejos son ideas, no reglas", "Elige lo que le queda a tu familia"] }
          ],
          tryIt: "Dale a un asistente de IA tus categorías y cantidades redondeadas (sin datos privados). Pide una tabla, un total y dos ideas para gastar menos. Revisa el total con una calculadora.",
          youCanNow: "usar la IA para ordenar un presupuesto sin compartir información privada, y revisar sus cuentas."
        },
        {
          title: "Poner una meta de ahorro y cuidar tu dinero",
          minutes: 5,
          goal: "Poner una meta de ahorro con una cantidad y una fecha, y saber cómo se protegen los depósitos en el banco.",
          text: [
            "Hasta una cantidad pequeña ahorrada cada semana puede ayudar cuando se descompone el auto o te recortan horas. Mucha gente empieza con un fondo de emergencia: dinero que se aparta solo para imprevistos.",
            "Haz que la meta sea clara: \"Ahorrar $300 para emergencias antes del 1 de junio.\" Divide entre el número de semanas para ver cuánto apartar cada semana. Pide a la IA que haga la cuenta y luego revísala.",
            "Importa dónde guardas tus ahorros. El dinero en un banco asegurado por la FDIC (la agencia federal que asegura los depósitos bancarios) está protegido hasta $250,000 por depositante, por banco, por cada tipo de propiedad de la cuenta. El seguro de la FDIC no cubre acciones ni criptomonedas. Revisa en fdic.gov que un banco esté asegurado por la FDIC antes de abrir una cuenta."
          ],
          steps: ["Elige para qué estás ahorrando.", "Elige una cantidad y una fecha.", "Divide la cantidad entre el número de semanas.", "Guarda tus ahorros en un banco o cooperativa de crédito con seguro federal."],
          words: [["Fondo de emergencia", "dinero ahorrado solo para gastos inesperados."], ["FDIC", "la Corporación Federal de Seguro de Depósitos, que protege el dinero en bancos asegurados."], ["Cooperativa de crédito", "una institución financiera sin fines de lucro que es de sus miembros."]],
          sources: [{ name: "FDIC: Entender el seguro de depósitos", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Empieza un fondo de emergencia", bullets: ["Dinero solo para imprevistos", "Las cantidades pequeñas se juntan"] },
            { title: "Una meta clara", bullets: ["Ejemplo: $300 antes del 1 de junio", "Cantidad entre semanas = ahorro semanal", "Revisa tú la cuenta"] },
            { title: "Cuida tus ahorros", bullets: ["Banco con FDIC: hasta $250,000 por persona, banco y tipo", "No cubre acciones ni criptomonedas", "Revisa un banco en fdic.gov"] }
          ],
          tryIt: "Escribe una meta de ahorro con una cantidad y una fecha. Calcula cuánto ahorrar cada semana y luego pide a la IA que revise tu cuenta.",
          youCanNow: "poner una meta de ahorro clara y elegir un lugar seguro y asegurado para guardarla."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu plan de dinero",
        questions: [
          { q: "¿Cuál es una necesidad?", options: ["Un servicio de streaming", "La renta", "Comer fuera", "Un juego nuevo"], answer: 1, why: "La renta es un gasto obligatorio para vivir." },
          { q: "¿Qué es seguro escribir en un asistente de IA para que te ayude con el presupuesto?", options: ["Tu número de cuenta bancaria", "Tu número de tarjeta", "Cantidades redondeadas como \"renta unos $1,400\"", "La contraseña de tu banca en línea"], answer: 2, why: "Las cantidades redondeadas y las categorías te dan la ayuda que necesitas sin datos privados." },
          { q: "La IA suma tu presupuesto y el total se ve raro. ¿Qué haces?", options: ["Le crees", "Borras tu presupuesto", "Le preguntas a un desconocido en internet", "Revisas el total con una calculadora"], answer: 3, why: "La IA se puede equivocar en las cuentas; revísalas tú." },
          { q: "¿Cuál es una meta de ahorro clara?", options: ["\"Ahorrar $300 para emergencias antes del 1 de junio\"", "\"Ahorrar algo\"", "\"Ser rico\"", "\"Dinero después\""], answer: 0, why: "Tiene un propósito, una cantidad y una fecha." },
          { q: "¿Qué cubre el seguro de la FDIC?", options: ["Acciones", "Los depósitos en un banco asegurado, hasta el límite", "Criptomonedas", "El efectivo debajo del colchón"], answer: 1, why: "La FDIC protege los depósitos en bancos asegurados; no acciones ni criptomonedas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Crédito, ayuda y cómo protegerte",
      lessons: [
        {
          title: "Revisar tu reporte de crédito gratis",
          minutes: 5,
          goal: "Saber cómo conseguir tu reporte de crédito gratis y qué buscar en él.",
          text: [
            "Un reporte de crédito es un registro de tus préstamos, tarjetas y cuentas. Los dueños de vivienda, los prestamistas y algunos empleadores lo pueden revisar. Hay errores, y un error te puede costar un departamento o un préstamo.",
            "Puedes conseguir reportes de crédito gratis de las tres grandes agencias de crédito, Equifax, Experian y TransUnion, cada semana en AnnualCreditReport.com. Ese es el sitio oficial. Otros sitios que prometen reportes \"gratis\" pueden querer venderte algo.",
            "Busca cuentas que no reconoces, direcciones equivocadas y pagos atrasados que sí hiciste a tiempo. Si algo está mal, puedes disputarlo con la agencia de crédito. La Oficina para la Protección Financiera del Consumidor (CFPB) en consumerfinance.gov explica cómo."
          ],
          steps: ["Escribe tú AnnualCreditReport.com en el navegador.", "Pide tus reportes de Equifax, Experian y TransUnion.", "Busca cuentas que no conoces, datos equivocados y atrasos que no son ciertos.", "Si algo está mal, sigue los pasos para disputar en consumerfinance.gov."],
          words: [["Reporte de crédito", "un registro de tus préstamos, tarjetas de crédito y pagos de cuentas."], ["Agencia de crédito", "una empresa que guarda reportes de crédito: Equifax, Experian, TransUnion."], ["Disputar", "pedir de manera oficial que se corrija un error."]],
          sources: [{ name: "FTC: Reportes de crédito gratuitos", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Oficina para la Protección Financiera del Consumidor: herramientas para el consumidor", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Tu reporte de crédito", bullets: ["Registro de préstamos, tarjetas y cuentas", "Dueños de vivienda y prestamistas lo pueden revisar", "Hay errores"] },
            { title: "Consíguelo gratis", bullets: ["AnnualCreditReport.com es el sitio oficial", "Equifax, Experian, TransUnion", "Gratis cada semana"] },
            { title: "Qué buscar", bullets: ["Cuentas que no conoces", "Direcciones o atrasos equivocados", "Disputa los errores: mira consumerfinance.gov"] }
          ],
          tryIt: "Anota el sitio oficial para reportes de crédito gratis y los nombres de las tres agencias. Si estás listo y en un aparato privado, pide un reporte y busca cualquier cosa que no reconozcas.",
          youCanNow: "conseguir tus reportes de crédito gratis en el sitio oficial y detectar errores para disputarlos."
        },
        {
          title: "Ayuda gratuita con impuestos y dinero",
          minutes: 5,
          goal: "Encontrar un lugar con ayuda gratuita para impuestos y una fuente confiable para preguntas de dinero.",
          text: [
            "No tienes que pagar mucho para que te hagan los impuestos. El programa de Asistencia Voluntaria con los Impuestos sobre los Ingresos del IRS (el servicio de impuestos de Estados Unidos), VITA, da ayuda gratuita con impuestos, sobre todo a personas que cumplen los límites de ingresos del Crédito Tributario por Ingreso del Trabajo (EITC). Muchos lugares también ayudan a personas que ganan unos $70,244 o menos, a personas con discapacidades y a personas que hablan poco inglés. Cada lugar puede poner sus propias reglas, así que pregunta en el lugar.",
            "Encuentra un lugar de VITA con el localizador VITA/TCE del IRS en freetaxassistance.for.irs.gov o llamando al 800-906-9887. TCE da una ayuda gratuita parecida, sobre todo a personas de 60 años o más.",
            "Para otras preguntas de dinero, la Oficina para la Protección Financiera del Consumidor en consumerfinance.gov tiene guías gratuitas sobre cuentas de banco, cobro de deudas, préstamos de día de pago y más, y una forma de presentar una queja contra una empresa. Los préstamos de día de pago y las aplicaciones de dinero rápido pueden costar mucho más de lo que parece; lee el costo total antes de firmar."
          ],
          steps: ["Busca en el localizador VITA/TCE del IRS o llama al 800-906-9887.", "Pregunta en el lugar qué llevar.", "Usa consumerfinance.gov para preguntas de dinero.", "Antes de cualquier préstamo, pide el costo total en dólares."],
          words: [["VITA", "Asistencia Voluntaria con los Impuestos sobre los Ingresos: ayuda gratuita con impuestos respaldada por el IRS."], ["Préstamo de día de pago", "un préstamo pequeño y a corto plazo que puede ser muy caro."]],
          sources: [{ name: "IRS: Preparación gratuita de declaraciones para contribuyentes que califican", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Oficina para la Protección Financiera del Consumidor: herramientas para el consumidor", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Ayuda gratuita con impuestos: VITA", bullets: ["Respaldada por el IRS, con voluntarios capacitados", "Muchos lugares ayudan si ganas unos $70,244 o menos", "Los lugares pueden poner sus propias reglas"] },
            { title: "Encuentra un lugar", bullets: ["freetaxassistance.for.irs.gov", "O llama al 800-906-9887", "TCE: ayuda gratis sobre todo para mayores de 60"] },
            { title: "Ayuda confiable con el dinero", bullets: ["Guías y quejas en consumerfinance.gov", "Los préstamos de día de pago pueden costar mucho", "Pide el costo total antes de firmar"] }
          ],
          tryIt: "Usa el localizador VITA/TCE del IRS para encontrar el lugar de ayuda gratuita con impuestos más cercano. Anota su dirección y lo que dice que debes llevar.",
          youCanNow: "encontrar ayuda gratuita con los impuestos e información confiable sobre dinero."
        },
        {
          title: "Reconocer estafas de dinero, y tu plan final",
          minutes: 5,
          goal: "Reconocer estafas de dinero comunes y terminar tu plan de presupuesto.",
          text: [
            "Los estafadores van tras personas a las que les falta dinero con préstamos falsos, falsa ayuda para deudas, falsas ayudas del gobierno y ofertas para \"hacerse rico rápido\", incluidos esquemas con criptomonedas. Algunos ya usan la IA para escribir mensajes que parecen reales o para copiar la voz de un familiar.",
            "Señales de alerta: te apuran, te piden pagar con tarjetas de regalo, transferencias, aplicaciones de pago o criptomonedas, prometen dinero garantizado, o te piden el acceso a tu banco o el código que llegó a tu teléfono. Una agencia del gobierno de verdad no te va a llamar para exigirte un pago de esa forma.",
            "Si algo se siente mal, detente, cuelga y vuelve a llamar a un número que sabes que es real. Puedes reportar estafas a la Comisión Federal de Comercio (FTC) en ReportFraud.ftc.gov."
          ],
          steps: ["Cuidado con las prisas, las tarjetas de regalo, las criptomonedas y el dinero garantizado.", "Nunca compartas el acceso a tu banco ni los códigos del teléfono.", "Cuelga y vuelve a llamar a un número que conoces.", "Reporta las estafas a la FTC."],
          words: [["Estafa", "un engaño para robar dinero o información."], ["Ganancias garantizadas", "la promesa de que seguro vas a ganar dinero; una frase común de estafa."]],
          sources: [{ name: "Comisión Federal de Comercio: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Estafas de dinero comunes", bullets: ["Préstamos y ayuda para deudas falsos", "Ayudas del gobierno falsas", "\"Hazte rico rápido\" y esquemas con criptomonedas"] },
            { title: "Señales de alerta", bullets: ["Te apuran", "Tarjetas de regalo, transferencias, aplicaciones o criptomonedas", "Dinero garantizado; te piden tu código"] },
            { title: "Qué hacer", bullets: ["Detente y cuelga", "Vuelve a llamar a un número que conoces", "Repórtalo en ReportFraud.ftc.gov"] }
          ],
          tryIt: "Tarea final: termina tu presupuesto de un mes con ayuda de la IA (sin números privados), revisa los totales, escribe una meta de ahorro con cantidad y fecha, y anota dónde vas a conseguir tu reporte de crédito gratis y ayuda gratuita con los impuestos.",
          youCanNow: "hacer un presupuesto del hogar, planear tus ahorros, encontrar ayuda gratuita y evitar estafas de dinero."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Crédito, ayuda y cómo protegerte",
        questions: [
          { q: "¿Cuál es el sitio oficial para los reportes de crédito gratis?", options: ["Cualquier sitio que diga \"gratis\"", "Un enlace en un mensaje de texto", "Un anuncio en redes sociales", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com es el sitio oficial para reportes gratis." },
          { q: "Encuentras en tu reporte de crédito una cuenta que no es tuya. Debes:", options: ["Disputarla con la agencia de crédito", "Ignorarla", "Pagarla de inmediato", "Publicarla en internet"], answer: 0, why: "Disputar corrige los errores de tu reporte." },
          { q: "¿Qué es VITA?", options: ["Un préstamo de día de pago", "Ayuda gratuita con impuestos respaldada por el IRS", "Una agencia de crédito", "Una cuenta de ahorros"], answer: 1, why: "VITA ofrece preparación gratuita de impuestos con voluntarios capacitados." },
          { q: "Alguien llama diciendo que es del gobierno y que debes pagar hoy una multa con tarjetas de regalo. Esto es:", options: ["Normal", "Un reembolso de impuestos", "Una estafa", "Un servicio de VITA"], answer: 2, why: "Las agencias del gobierno no exigen pagos con tarjetas de regalo." },
          { q: "¿Dónde puedes reportar una estafa?", options: ["Al estafador", "En ningún lado", "Solo en un chat de grupo", "En ReportFraud.ftc.gov"], answer: 3, why: "La Comisión Federal de Comercio recibe reportes de estafas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la educación financiera",
    questions: [
      { q: "Un presupuesto es:", options: ["Un plan para tu dinero", "Un tipo de préstamo", "Una tarjeta de crédito", "Una comisión del banco"], answer: 0, why: "Un presupuesto planea los ingresos y los gastos." },
      { q: "¿Cuál es un ingreso?", options: ["La renta", "Un sueldo", "La comida", "La cuenta del teléfono"], answer: 1, why: "El ingreso es dinero que entra." },
      { q: "¿Cuál es un gusto?", options: ["Cuidado de niños para trabajar", "La luz", "Comer fuera", "Las medicinas"], answer: 2, why: "Comer fuera está bien tenerlo, pero no es obligatorio." },
      { q: "Al empezar un presupuesto, está bien:", options: ["No anotar los ingresos", "Usar tu contraseña", "Adivinar sin pensar", "Redondear las cantidades al dólar o a los cinco más cercanos"], answer: 3, why: "Cantidades aproximadas y redondeadas bastan para empezar." },
      { q: "¿Qué NUNCA debes escribir en un asistente de IA?", options: ["El número de tu tarjeta", "\"Comida unos $600\"", "\"Familia de 4\"", "\"Sugiere dos recortes\""], answer: 0, why: "Los números de tarjeta son información privada." },
      { q: "La IA sugiere quitar el pase de autobús de tu hijo. Tú:", options: ["Tienes que hacerlo", "Decides qué le queda a tu familia; ese consejo puede no servir", "Le preguntas a un desconocido", "Le das a la IA el acceso a tu banco"], answer: 1, why: "Los consejos de la IA son ideas; tú eliges lo que te queda." },
      { q: "¿Por qué revisar los totales del presupuesto que hace la IA?", options: ["La IA nunca se equivoca", "Es la ley", "La IA se puede equivocar en las cuentas", "Cambia el saldo de tu banco"], answer: 2, why: "Revisa siempre tú las cuentas." },
      { q: "Un fondo de emergencia es:", options: ["Dinero para gustos", "Un préstamo", "Un reporte de crédito", "Dinero ahorrado solo para gastos inesperados"], answer: 3, why: "Cubre imprevistos como una reparación del auto." },
      { q: "Quieres $260 en 26 semanas. ¿Cuánto cada semana?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 entre 26 semanas son $10." },
      { q: "El seguro de la FDIC protege los depósitos hasta:", options: ["$1,000", "$250,000 por depositante, por banco asegurado, por tipo de propiedad", "Cualquier cantidad", "Solo criptomonedas"], answer: 1, why: "Esa es la cantidad estándar de la FDIC." },
      { q: "¿Qué NO cubre el seguro de la FDIC?", options: ["Una cuenta de ahorros en un banco asegurado", "Una cuenta de cheques en un banco asegurado", "Las criptomonedas", "Un certificado de depósito en un banco asegurado"], answer: 2, why: "La FDIC no cubre criptomonedas ni acciones." },
      { q: "Un reporte de crédito es:", options: ["Tu sueldo", "Tu declaración de impuestos", "Tu presupuesto", "Un registro de tus préstamos, tarjetas y pagos de cuentas"], answer: 3, why: "Los prestamistas y los dueños de vivienda lo pueden revisar." },
      { q: "Las tres grandes agencias de crédito son:", options: ["Equifax, Experian y TransUnion", "Google, Bing y Yahoo", "FDIC, IRS y FTC", "Visa, Mastercard y Discover"], answer: 0, why: "Esas tres guardan los reportes de crédito." },
      { q: "¿Cada cuánto puedes conseguir reportes gratis en AnnualCreditReport.com?", options: ["Una vez cada diez años", "Cada semana", "Nunca", "Solo si pagas"], answer: 1, why: "Las agencias ofrecen ahí reportes gratis cada semana." },
      { q: "¿Dónde puedes encontrar guías gratuitas sobre cobro de deudas y préstamos de día de pago?", options: ["En un anuncio emergente", "En un mensaje de un estafador", "En consumerfinance.gov", "En una tienda de tarjetas de regalo"], answer: 2, why: "La Oficina para la Protección Financiera del Consumidor publica guías gratuitas." },
      { q: "¿Cómo encuentras un lugar de VITA con ayuda gratuita para impuestos?", options: ["Preguntándole a un desconocido", "Pagando una cuota primero", "Esperando una llamada", "Con el localizador VITA/TCE del IRS o llamando al 800-906-9887"], answer: 3, why: "Esas son las formas oficiales del IRS para encontrar un lugar." },
      { q: "Antes de pedir un préstamo de día de pago o usar una aplicación de dinero rápido, debes:", options: ["Pedir el costo total en dólares", "Firmar rápido", "Dar el acceso a tu banco", "No leer nada"], answer: 0, why: "Estos préstamos pueden costar mucho más de lo que parece." },
      { q: "Alguien te promete ganancias \"garantizadas\" con criptomonedas. Esto es:", options: ["Un negocio seguro", "Una señal de alerta de estafa común", "Asegurado por la FDIC", "Ayuda gratuita con impuestos"], answer: 1, why: "El dinero garantizado es una frase clásica de estafa." },
      { q: "Un mensaje te pide el código que llegó a tu teléfono para \"verificar tu banco\". Tú:", options: ["Lo envías", "Lo publicas", "Nunca lo compartes y llamas a tu banco a un número que conoces", "Lo lees en voz alta"], answer: 2, why: "Ese código protege tu cuenta." },
      { q: "Para una decisión grande de dinero, el mejor paso es:", options: ["Creer cualquier respuesta de la IA", "Seguir una publicación de redes sociales", "Preguntarle a quien te lo vende", "Revisar fuentes oficiales o hablar con un consejero gratuito sin fines de lucro"], answer: 3, why: "Las fuentes oficiales y los consejeros de verdad te protegen." }
    ]
  }
};

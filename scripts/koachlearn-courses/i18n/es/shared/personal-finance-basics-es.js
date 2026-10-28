"use strict";

// Koach Learn course (Spanish translation of shared/personal-finance-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "personal-finance-basics-es",
  lang: "es",
  translationOf: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Finanzas personales básicas: presupuesto, crédito y ahorro",
  skills: "Hacer un presupuesto mensual, Leer tu informe de crédito, Planear cómo pagar deudas, Crear ahorros para emergencias, Ahorrar con un banco o dinero móvil, Reconocer préstamos abusivos y estafas",
  outcome: "hacer un plan de dinero de una página: un presupuesto mensual, un plan para pagar deudas, una meta de ahorro para emergencias y una fecha para revisar tus informes de crédito, y reconocer un préstamo u oferta que podría atraparte.",
  about: [
    "Este curso es para cualquier persona que quiera tener más control sobre su dinero: un abuelo con ingresos fijos, un joven con su primer sueldo, un agricultor que cobra en la cosecha, un atleta con un nuevo patrocinador, un veterano que empieza un trabajo civil o alguien que vuelve a casa y empieza de nuevo.",
    "Vas a escribir un presupuesto sencillo, leer tu propio informe de crédito, elegir qué deuda pagar primero, empezar un fondo de emergencia, aprender formas seguras de ahorrar con un banco, una cooperativa de crédito o dinero móvil, y conocer las señales de alerta de los préstamos tipo \"payday\" y de las estafas de dinero.",
    "Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\" que haces con tus propios números, en papel o en una hoja de cálculo. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso enseña habilidades de dinero; no da consejos de inversión. Para decisiones grandes, habla con una persona de confianza y calificada, como un asesor de crédito sin fines de lucro."
  ],
  finalTask: "Escribe un plan de dinero de una página: (1) un presupuesto mensual con tus ingresos, necesidades, gustos y ahorros; (2) una lista de tus deudas y la deuda a la que le pagarás extra; (3) una meta de ahorro para emergencias, cuánto apartarás cada semana o cada mes, y dónde; (4) la fecha en que revisarás tus informes de crédito. Luego lee una oferta de préstamo o de dinero que hayas visto y anota todas las señales de alerta.",
  chapters: [
    {
      name: "Capítulo 1: Saber a dónde va tu dinero",
      lessons: [
        {
          title: "Hacer un presupuesto mensual sencillo",
          minutes: 5,
          goal: "Escribir un presupuesto mensual que muestre tus ingresos, necesidades, gustos y ahorros.",
          text: [
            "Un presupuesto es un plan para tu dinero. Responde dos preguntas: cuánto dinero entra cada mes y a dónde va. Sin un plan, el dinero suele desaparecer en cosas pequeñas y las cuentas grandes llegan como una sorpresa.",
            "Empieza con los ingresos: tu sueldo después de impuestos, beneficios como Social Security (el seguro social de EE. UU.) o una pensión, dinero de la venta de cosechas o productos, propinas o un pago de un patrocinador. Si tus ingresos cambian de un mes a otro, usa el mes normal más bajo, para que el plan funcione también en un mes flojo.",
            "Después anota tus gastos en tres grupos. Las necesidades son lo que tienes que pagar: vivienda, comida, servicios como luz y agua, transporte, medicinas y los pagos mínimos de tus deudas. Los gustos son agradables pero no obligatorios: comer fuera, ropa nueva, servicios de streaming. El ahorro es dinero que apartas a propósito. Pon el ahorro en el plan como si fuera una cuenta por pagar, aunque sea poco.",
            "Si gastas más de lo que ganas, recorta primero los gustos y luego busca formas más baratas de cubrir las necesidades. Un asistente de IA puede ayudarte a hacer una tabla de presupuesto en blanco o sugerirte formas de ahorrar, pero escribe solo cantidades aproximadas, nunca números de cuenta ni contraseñas."
          ],
          steps: ["Escribe tus ingresos mensuales totales después de impuestos. Si cambian, usa un mes bajo.", "Haz una lista de tus necesidades y cuánto cuesta cada una al mes.", "Haz una lista de tus gustos y cuánto cuesta cada uno al mes.", "Elige una cantidad para ahorrar, aunque sea pequeña.", "Resta las necesidades, los gustos y el ahorro de los ingresos. Si el resultado es menor que cero, recorta primero los gustos.", "Revisa el plan al final del mes y ajústalo."],
          words: [["Presupuesto", "un plan de cómo vas a usar el dinero que recibes cada mes."], ["Ingresos", "el dinero que entra: sueldo, beneficios, ventas, propinas."], ["Necesidades", "gastos que tienes que pagar para vivir y trabajar, como el alquiler, la comida y las medicinas."], ["Gustos", "cosas agradables de tener, pero sin las que podrías vivir."]],
          slides: [
            { title: "Un presupuesto es un plan para tu dinero", bullets: ["Cuánto entra", "A dónde va", "Se acaban las cuentas sorpresa"] },
            { title: "Empieza con los ingresos", bullets: ["Sueldo después de impuestos, beneficios, ventas, propinas", "Si cambian, planea con un mes bajo"] },
            { title: "Tres grupos de gastos", bullets: ["Necesidades: vivienda, comida, transporte, medicinas", "Gustos: comer fuera, extras, suscripciones", "Ahorro: apártalo como si fuera una cuenta"] },
            { title: "Si no te alcanza", bullets: ["Recorta primero los gustos", "Busca formas más baratas de cubrir las necesidades", "La IA puede hacer una tabla; nunca escribas números de cuenta"] }
          ],
          sources: [{ name: "Oficina para la Protección Financiera del Consumidor (CFPB): herramientas y guías de dinero", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "En papel o en una hoja de cálculo gratis (Google Sheets o Excel), escribe los ingresos del mes pasado y todos los gastos que recuerdes. Marca cada gasto con N si es necesidad o G si es gusto, agrega una línea de ahorro y resta. ¿Tu resultado está por encima o por debajo de cero?",
          youCanNow: "escribir un presupuesto mensual con ingresos, necesidades, gustos y ahorro, y ver si te alcanza."
        },
        {
          title: "Leer tu informe de crédito y tu puntaje",
          minutes: 5,
          goal: "Conseguir tus informes de crédito gratis y revisarlos para encontrar errores.",
          text: [
            "En Estados Unidos, un informe de crédito es un registro de cómo has pedido prestado y cómo has pagado: préstamos, tarjetas de crédito, algunas cuentas y deudas enviadas a cobranza. Lo revisan prestamistas, arrendadores y algunos empleadores. Un puntaje de crédito es un número que se calcula con ese informe y que intenta predecir si vas a pagar a tiempo.",
            "Puedes obtener tus informes de crédito gratis de las tres compañías nacionales, Equifax, Experian y TransUnion, en AnnualCreditReport.com o llamando al (877) 322-8228. La Consumer Financial Protection Bureau (CFPB, la oficina federal que protege a los consumidores en temas de dinero) dice que ahora puedes obtenerlos gratis una vez por semana. Revisar tu propio informe no baja tu puntaje.",
            "Ten cuidado: algunos sitios web dicen \"informe de crédito gratis\" pero después te inscriben en productos de pago. Usa AnnualCreditReport.com.",
            "Lee cada informe y busca cualquier cosa que no sea tuya: una cuenta que nunca abriste, un pago atrasado que sí hiciste a tiempo, una deuda que aparece dos veces, o un nombre o una dirección equivocados. Tienes derecho a disputar los errores con la compañía de crédito y con el negocio que los reportó. Pagar a tiempo, mantener bajos los saldos de tus tarjetas y no abrir muchas cuentas nuevas a la vez ayudan a tu puntaje con el tiempo."
          ],
          steps: ["Entra a AnnualCreditReport.com (escribe la dirección tú mismo) o llama al (877) 322-8228.", "Pide tus informes de Equifax, Experian y TransUnion.", "Revisa tu nombre, tus direcciones y cada cuenta.", "Marca con un círculo todo lo que no reconozcas o que esté mal.", "Disputa los errores con la compañía de crédito y guarda copias de lo que envíes."],
          words: [["Informe de crédito", "un registro de cómo has pedido dinero prestado y cómo lo has devuelto."], ["Puntaje de crédito", "un número calculado con tu informe de crédito que los prestamistas usan para medir el riesgo."], ["Disputar", "avisar a la compañía de crédito que algo en tu informe está mal y pedirle que lo corrija."], ["Cobranza", "cuando una deuda se envía a una compañía que intenta cobrar el dinero que no se pagó."]],
          slides: [
            { title: "Informe y puntaje", bullets: ["Informe: tu historial de préstamos y pagos", "Puntaje: un número calculado con el informe", "Lo revisan prestamistas, arrendadores y algunos empleadores"] },
            { title: "Consigue tus informes gratis", bullets: ["AnnualCreditReport.com o (877) 322-8228", "Equifax, Experian y TransUnion", "Revisar tu propio informe no baja tu puntaje"] },
            { title: "Busca errores", bullets: ["Cuentas que nunca abriste", "Pagos atrasados falsos o deudas repetidas", "Nombre o dirección equivocados"] },
            { title: "Mejora tu puntaje con el tiempo", bullets: ["Paga todas las cuentas a tiempo", "Mantén bajos los saldos de tus tarjetas", "Disputa los errores y guarda copias"] }
          ],
          sources: [
            { name: "CFPB: ¿Cómo obtengo una copia gratis de mis informes de crédito?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Informes y puntajes de crédito", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "Si vives en EE. UU., pide al menos un informe de crédito gratis en AnnualCreditReport.com y revisa cada cuenta. Si vives fuera de EE. UU., averigua si tu país tiene una oficina de información crediticia y cómo pedirle tu informe. Anota una cosa que revisaste y lo que encontraste.",
          youCanNow: "conseguir tus informes de crédito gratis, revisarlos para encontrar errores y saber cómo disputar un error."
        },
        {
          title: "Hacer un plan para pagar tus deudas",
          minutes: 5,
          goal: "Hacer una lista de tus deudas y elegir a cuál pagarle extra primero.",
          text: [
            "Es más fácil vencer una deuda cuando la puedes ver completa. Haz una lista de todas tus deudas: a quién le debes, cuánto, la tasa de interés, el pago mínimo y la fecha de vencimiento. Incluye tarjetas de crédito, tarjetas de tiendas, préstamos de auto, cuentas médicas, préstamos de familiares y cualquier préstamo que hayas sacado con una aplicación del teléfono.",
            "Paga siempre por lo menos el mínimo de cada deuda, a tiempo. Los pagos atrasados agregan cargos y pueden dañar tu crédito. Luego pon todo el dinero extra en una sola deuda a la vez.",
            "Hay dos formas comunes de elegir. La forma de la tasa más alta primero pone el dinero extra en la deuda con la tasa de interés más alta, y casi siempre es la que más dinero ahorra. La forma del saldo más pequeño primero paga primero la deuda más pequeña, lo que da un logro rápido y ayuda a muchas personas a seguir adelante. Las dos funcionan si eres constante. Cuando termines de pagar una deuda, pasa ese pago a la siguiente.",
            "Si no puedes hacer un pago, llama al prestamista antes de la fecha de vencimiento y pregunta qué opciones hay. Un asesor de crédito sin fines de lucro también puede ayudarte a hacer un plan. Ten cuidado con las compañías que piden cargos grandes por adelantado para \"borrar\" tu deuda."
          ],
          steps: ["Haz una lista de todas tus deudas: a quién, cuánto, tasa de interés, mínimo y fecha de vencimiento.", "Prepara una forma de pagar todos los mínimos a tiempo, como recordatorios.", "Elige una deuda para los pagos extra: la de tasa más alta o la de saldo más pequeño.", "Cuando la termines de pagar, suma ese pago a la siguiente deuda.", "Si vas a atrasarte en un pago, llama al prestamista antes de la fecha de vencimiento."],
          words: [["Tasa de interés", "el precio de pedir prestado, mostrado como un porcentaje de lo que debes."], ["Pago mínimo", "la cantidad más pequeña que debes pagar cada mes para estar al día."], ["Saldo", "cuánto debes todavía."]],
          slides: [
            { title: "Mira todas tus deudas", bullets: ["A quién le debes y cuánto", "Tasa de interés, mínimo y fecha de vencimiento", "Incluye préstamos de aplicaciones y de familiares"] },
            { title: "Dos reglas", bullets: ["Paga todos los mínimos a tiempo", "Pon el dinero extra en una sola deuda a la vez"] },
            { title: "¿Qué deuda primero?", bullets: ["Tasa más alta primero: casi siempre ahorra más", "Saldo más pequeño primero: logros rápidos", "¿Ya la pagaste? Pasa ese pago a la siguiente"] },
            { title: "¿No puedes pagar?", bullets: ["Llama al prestamista antes de la fecha de vencimiento", "Pide ayuda a un asesor de crédito sin fines de lucro", "Cuidado con cargos grandes por adelantado para borrar deudas"] }
          ],
          sources: [{ name: "CFPB: Cobro de deudas y manejo de deudas", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Haz una tabla de tus deudas (o un ejemplo inventado si no tienes) con a quién le debes, saldo, tasa, mínimo y fecha de vencimiento. Marca con un círculo la deuda a la que le pagarías extra con la forma de la tasa más alta, y la que elegirías con la forma del saldo más pequeño.",
          youCanNow: "hacer una lista de tus deudas, pagar los mínimos a tiempo y elegir a qué deuda pagarle extra primero."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Saber a dónde va tu dinero",
        questions: [
          { q: "Tus ingresos cambian de un mes a otro. ¿Con qué cantidad debes planear tu presupuesto?", options: ["Tu mejor mes", "Lo que esperas ganar en promedio el próximo año", "Un mes normal y bajo", "Lo que ganan tus amigos"], answer: 2, why: "Planear con un mes bajo hace que el presupuesto funcione también cuando entra menos dinero." },
          { q: "¿Cuál de estas cosas es una necesidad y no un gusto?", options: ["Una medicina que tomas todos los días", "Un servicio de streaming", "Comer fuera los viernes", "Una funda nueva para el teléfono"], answer: 0, why: "La medicina es algo que tienes que pagar para mantenerte sano." },
          { q: "¿Dónde pueden las personas en EE. UU. obtener sus informes de crédito gratis?", options: ["En cualquier sitio que muestre un anuncio de informes gratis", "En un enlace de un mensaje de texto", "En el sitio web de un cobrador de deudas", "En AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com es la fuente oficial y gratuita de los informes de las tres compañías." },
          { q: "Encuentras en tu informe una tarjeta de crédito que nunca abriste. ¿Qué haces?", options: ["La ignoras", "La disputas con la compañía de crédito y guardas copias", "La pagas para que desaparezca", "Cierras tu cuenta de banco"], answer: 1, why: "Tienes derecho a disputar errores; una cuenta que no abriste también podría ser robo de identidad." },
          { q: "Puedes pagar un poco extra en una deuda. Con la forma de la tasa más alta, ¿cuál recibe el dinero extra?", options: ["La de saldo más pequeño", "La que vence más tarde", "La de tasa de interés más alta", "La más nueva"], answer: 2, why: "Pagar primero la tasa más alta casi siempre ahorra más intereses." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir tu red de seguridad",
      lessons: [
        {
          title: "Empezar un fondo de emergencia",
          minutes: 4,
          goal: "Fijar una meta de ahorro para emergencias y una forma automática de alcanzarla.",
          text: [
            "Un fondo de emergencia es dinero que se aparta solo para sorpresas: una reparación del auto, una cuenta del médico, una bomba de agua que se daña, un turno de trabajo perdido o un mes de pocas ventas. Sin él, un problema pequeño puede llevarte a una deuda cara.",
            "Empieza poco a poco. La CFPB dice que incluso una cantidad pequeña da algo de seguridad. Una forma de elegir una meta: piensa en los gastos sorpresa que tuviste el año pasado y cuánto costaron. Luego elige una primera meta que puedas alcanzar, y después una meta más grande.",
            "Haz que el ahorro sea automático. Programa una transferencia fija a tu cuenta de ahorros el día de pago, o pide a tu empleador que divida tu depósito directo, si lo permite. Pon las devoluciones de impuestos, los regalos en efectivo o parte del pago de la cosecha directamente en tus ahorros.",
            "Guarda el dinero en un lugar seguro pero separado del dinero para gastar, como una cuenta de ahorros en un banco o una cooperativa de crédito. El efectivo en casa se puede perder o te lo pueden robar. Decide de antemano qué cuenta como emergencia, usa el fondo cuando lo necesites y después vuelve a llenarlo."
          ],
          steps: ["Anota los gastos sorpresa que tuviste el último año.", "Elige una primera meta que puedas alcanzar y una meta más grande para después.", "Programa una transferencia automática o una cantidad fija que ahorres cada día de pago.", "Mantén el fondo separado del dinero para gastos diarios.", "Escribe qué cuenta como emergencia. Después de usarlo, vuelve a llenarlo."],
          words: [["Fondo de emergencia", "dinero que se guarda solo para gastos inesperados o para cuando bajan los ingresos."], ["Transferencia automática", "un pago que tu banco hace por ti un día fijo, sin que tengas que hacerlo cada vez."], ["Cooperativa de crédito", "una institución financiera sin fines de lucro que pertenece a sus miembros (en EE. UU., credit union)."]],
          slides: [
            { title: "Para qué sirve", bullets: ["Reparaciones, cuentas médicas, ingresos perdidos", "Evita que un problema pequeño se vuelva una gran deuda"] },
            { title: "Elige una meta", bullets: ["Mira los gastos sorpresa del año pasado", "Empieza poco a poco y luego crece", "Hasta un poco ayuda"] },
            { title: "Hazlo automático", bullets: ["Transferencia el día de pago", "Divide el depósito directo si se permite", "Ahorra devoluciones, regalos y parte del dinero de la cosecha"] },
            { title: "Seguro y separado", bullets: ["Ahorros en un banco o cooperativa de crédito", "El efectivo en casa se puede perder o robar", "Úsalo y después vuelve a llenarlo"] }
          ],
          sources: [{ name: "CFPB: Guía esencial para crear un fondo de emergencia", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Escribe tu primera meta de ahorro para emergencias, la cantidad que ahorrarás cada semana o cada mes, el día en que la ahorrarás y dónde la guardarás. Agrégala como una línea en tu presupuesto de la lección 1.",
          youCanNow: "fijar una meta de ahorro para emergencias, ahorrar para ella de forma automática y guardarla segura y separada."
        },
        {
          title: "Ahorrar con un banco, dinero móvil o un grupo de ahorro",
          minutes: 5,
          goal: "Elegir un lugar seguro para ahorrar y revisar sus cargos y reglas antes de usarlo.",
          text: [
            "Dónde ahorras importa. En EE. UU., una cuenta de ahorros en un banco o una cooperativa de crédito con seguro federal es uno de los lugares más seguros para el dinero. En muchos países, sobre todo en África, la gente ahorra con dinero móvil en el teléfono, en un banco o en una SACCO, o en un grupo de ahorro.",
            "Los servicios de dinero móvil como M-Pesa te permiten guardar dinero en el teléfono, enviarlo y pagar cuentas. Muchos también tienen una opción de ahorro aparte o de ahorro bloqueado, que ayuda a separar el ahorro del dinero para gastar. Los cargos y los intereses son distintos en cada servicio y cambian con el tiempo, así que lee la tabla oficial de cargos en la aplicación o en el sitio web del proveedor, o pregunta a un agente oficial, antes de mover dinero.",
            "Ejemplo: una agricultora en Kenia recibe el pago por su maíz en la cosecha. Ese mismo día manda una parte del pago a una opción de ahorro aparte, antes de gastar nada, y deja el resto para semillas, cuotas escolares y comida. Antes revisa en la tabla oficial de cargos cuánto cuesta cada transferencia.",
            "En un grupo de ahorro, que a menudo se llama chama, cada miembro paga una cantidad fija según un calendario. Anota cada pago, guarda una copia de las reglas del grupo y únete solo a grupos cuyos miembros conoces y en quienes confías. Uses lo que uses: nunca compartas tu PIN, y ten cuidado con quien te llame para pedirte que devuelvas dinero después de una transferencia \"equivocada\". Revisa primero tu saldo."
          ],
          steps: ["Elige dónde ahorrar: banco, cooperativa de crédito, SACCO, ahorro con dinero móvil o un grupo de ahorro de confianza.", "Busca la tabla oficial de cargos y las reglas en la aplicación, en el sitio web oficial o con un agente oficial.", "Aparta tus ahorros el día de pago o el día de la cosecha, antes de gastar.", "Lleva un registro escrito de cada depósito.", "Nunca compartas tu PIN, y revisa tu saldo antes de devolverle dinero a nadie."],
          words: [["Dinero móvil", "un servicio que te permite guardar, enviar y recibir dinero con un teléfono."], ["SACCO", "cooperativa de ahorro y crédito: un grupo que pertenece a sus miembros, que ahorra y presta, común en África del Este."], ["Chama", "un grupo de ahorro, muy común en Kenia, donde los miembros ahorran juntos según un calendario."], ["PIN", "un número secreto que protege tu cuenta. Nunca lo compartas."]],
          slides: [
            { title: "Elige un lugar seguro para ahorrar", bullets: ["EE. UU.: ahorros asegurados en un banco o cooperativa de crédito", "África: banco, SACCO, dinero móvil o grupo de ahorro"] },
            { title: "Ahorro con dinero móvil", bullets: ["Usa una opción de ahorro aparte si existe", "Lee primero la tabla oficial de cargos", "Los cargos cambian: revisa en la aplicación o con un agente"] },
            { title: "Primero ahorra, luego gasta", bullets: ["Aparta el ahorro el día de pago o de la cosecha", "Después paga semillas, cuotas escolares, comida"] },
            { title: "Mantente seguro", bullets: ["Nunca compartas tu PIN", "Revisa tu saldo antes de devolver dinero", "Únete solo a grupos que conoces y en los que confías"] }
          ],
          sources: [
            { name: "CFPB: Guía esencial para crear un fondo de emergencia (dónde guardar los ahorros)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Elige el lugar donde guardarás tus ahorros para emergencias. Busca su tabla oficial de cargos o las reglas de la cuenta y anota cuánto cuesta meter dinero y sacarlo. Si usas dinero móvil, busca la opción de ahorro en el menú de la aplicación, sin mover dinero todavía.",
          youCanNow: "elegir un lugar seguro para ahorrar, revisar primero sus cargos y reglas, y proteger tu cuenta."
        },
        {
          title: "Reconocer préstamos abusivos y estafas de dinero",
          minutes: 5,
          goal: "Leer una oferta de préstamo o de dinero y encontrar las señales de alerta antes de decir que sí.",
          text: [
            "Un préstamo abusivo es un préstamo hecho para que sigas pagando sin fin. Los préstamos de día de pago (payday loans), algunos préstamos con el título del auto como garantía y algunos préstamos de aplicaciones son cortos y muy caros. El cargo puede parecer pequeño, pero como tasa de porcentaje anual (APR) el costo puede ser muy alto, y mucha gente renueva el préstamo una y otra vez. Antes de pedir prestado, mira la APR y todos los cargos, y pregúntate cómo lo vas a pagar.",
            "Conoce tus derechos en EE. UU.: la CFPB dice que no te pueden arrestar por no pagar un préstamo de día de pago, y que un prestamista solo puede quedarse con parte de tu sueldo con una orden de un tribunal. Los miembros de las fuerzas armadas tienen protección adicional bajo la Military Lending Act (una ley federal sobre préstamos a militares). También puedes revisar si un prestamista tiene licencia en tu estado.",
            "Las estafas tienen señales de alerta. Te apuran. Te piden pagar con tarjetas de regalo, una transferencia bancaria, criptomonedas o una transferencia de dinero móvil a un desconocido. Te prometen un préstamo o una subvención si primero pagas un cargo. Te dicen que ganaste un premio en un concurso en el que nunca participaste. Te piden tu PIN, tu contraseña o un código enviado a tu teléfono.",
            "Cuando veas una señal: detente, no pagues y verifica con la compañía real usando un número que encuentres tú mismo. Habla con alguien de confianza. Opciones más baratas que un préstamo abusivo pueden ser pedirle más tiempo al acreedor, un préstamo pequeño de una cooperativa de crédito o la ayuda de una organización local sin fines de lucro."
          ],
          steps: ["Busca la APR y todos los cargos en la oferta.", "Pregúntate: ¿cómo y cuándo voy a pagar esto, y qué pasa si no puedo?", "Busca señales de estafa: prisa, tarjetas de regalo o transferencia, cargo por adelantado, premio, petición de PIN o código.", "Detente y verifica con la compañía real usando un número que encuentres tú mismo.", "Busca opciones más baratas: más tiempo del acreedor, un préstamo de una cooperativa de crédito, una organización sin fines de lucro."],
          words: [["APR", "tasa de porcentaje anual: el costo de un préstamo en un año, incluidos los cargos, mostrado como porcentaje. Sirve para comparar préstamos."], ["Préstamo de día de pago", "un préstamo pequeño y corto (payday loan), que a menudo se paga en tu próximo día de pago, y que puede ser muy caro."], ["Renovación", "sacar un préstamo nuevo para pagar el anterior, lo que suma más cargos."], ["Préstamo abusivo", "un préstamo con costos injustos o muy altos que atrapa a quien lo pide."]],
          slides: [
            { title: "Préstamos que te atrapan", bullets: ["De día de pago, algunos con título del auto y de aplicaciones", "Cargo pequeño, APR muy alta", "Las renovaciones suman más cargos"] },
            { title: "Antes de pedir prestado", bullets: ["Busca la APR y todos los cargos", "Ten claro cómo lo vas a pagar", "EE. UU.: revisa que el prestamista tenga licencia en tu estado"] },
            { title: "Señales de alerta de estafa", bullets: ["Te apuran", "Tarjetas de regalo, transferencia, criptomonedas o envío a un desconocido", "Un cargo primero para un préstamo o un premio", "Te piden tu PIN o un código"] },
            { title: "Mejores opciones", bullets: ["Pide más tiempo al acreedor", "Préstamo pequeño de una cooperativa de crédito", "Ayuda de una organización local sin fines de lucro"] }
          ],
          sources: [
            { name: "CFPB: Préstamos de día de pago", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraudes y estafas", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Tarea final: termina tu plan de dinero de una página: tu presupuesto de la lección 1, tu lista de deudas con la deuda a la que le pagarás extra, tu meta de ahorro para emergencias y dónde la guardas, y la fecha en que revisarás tus informes de crédito. Luego lee una oferta de préstamo o de dinero que hayas visto (un mensaje de texto, un anuncio o una carta) y anota todas las señales de alerta que encuentres.",
          youCanNow: "leer una oferta de préstamo o de dinero, encontrar la APR y las señales de alerta, y elegir una opción más segura."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construir tu red de seguridad",
        questions: [
          { q: "¿Para qué sirve un fondo de emergencia?", options: ["Para las compras de fin de año", "Para gastos inesperados, como una reparación o la pérdida de ingresos", "Para comprar billetes de lotería", "Para prestarles a los amigos"], answer: 1, why: "Un fondo de emergencia se guarda solo para sorpresas y para cuando bajan los ingresos." },
          { q: "¿Cuál es la mejor forma de seguir ahorrando cada mes?", options: ["Ahorrar lo que sobre al final del mes", "Guardar el dinero en tu billetera", "Esperar primero a un gran aumento", "Programar una transferencia automática el día de pago"], answer: 3, why: "El ahorro automático ocurre antes de que el dinero se gaste." },
          { q: "Antes de usar una opción de ahorro con dinero móvil, ¿qué debes revisar?", options: ["La tabla oficial de cargos y las reglas", "Lo que dice un desconocido en las redes sociales", "Nada; siempre es gratis", "El PIN de tu vecino"], answer: 0, why: "Los cargos y las reglas cambian según el servicio y con el tiempo, así que revisa primero la fuente oficial." },
          { q: "Alguien te escribe que te mandó dinero por error y te pide que se lo devuelvas ya. ¿Qué haces primero?", options: ["Devolverlo enseguida", "Compartir tu PIN para que lo arreglen", "Revisar tú mismo tu saldo real antes de hacer nada", "Mandar el doble para ser amable"], answer: 2, why: "Es una estafa común; revisa tu propio saldo y pregunta a tu proveedor." },
          { q: "Un prestamista dice que recibirás un préstamo en cuanto pagues un cargo con una tarjeta de regalo. Esto es:", options: ["Un préstamo bancario normal", "Una señal de alerta de estafa", "Una subvención del gobierno", "Un informe de crédito"], answer: 1, why: "Pagar un cargo primero, sobre todo con una tarjeta de regalo, es una señal de estafa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Finanzas personales básicas: presupuesto, crédito y ahorro",
    questions: [
      { q: "Un presupuesto es:", options: ["Un plan para el dinero que recibes cada mes", "Un tipo de préstamo", "Un puntaje de crédito", "Un cargo del banco"], answer: 0, why: "Un presupuesto planea a dónde va tu dinero." },
      { q: "¿Qué va en el grupo de ahorro de un presupuesto?", options: ["El alquiler", "Una cena para llevar cada semana", "Dinero apartado para tu fondo de emergencia", "La cuenta del teléfono"], answer: 2, why: "El ahorro es dinero que apartas a propósito." },
      { q: "Tu presupuesto da menos de cero. ¿Qué debes recortar primero?", options: ["Las medicinas", "Los gustos", "El alquiler", "Los pagos mínimos de las deudas"], answer: 1, why: "Recorta los gustos antes que las necesidades." },
      { q: "¿Qué NO debes escribir en un asistente de IA cuando haces un presupuesto?", options: ["Gastos mensuales aproximados", "\"Hazme una tabla de presupuesto\"", "\"Sugiere formas de recortar gastos\"", "Tu número de cuenta bancaria"], answer: 3, why: "Nunca compartas números de cuenta ni contraseñas con herramientas de IA." },
      { q: "¿Qué es un puntaje de crédito?", options: ["El saldo de tu banco", "Un número calculado con tu informe de crédito", "Tus ingresos", "Un cargo de un préstamo"], answer: 1, why: "El puntaje de crédito se basa en la información de tu informe de crédito." },
      { q: "¿Revisar tu propio informe de crédito baja tu puntaje?", options: ["No", "Sí, mucho", "Sí, un poco cada vez", "Solo los fines de semana"], answer: 0, why: "La CFPB dice que pedir tus propios informes no daña tu puntaje." },
      { q: "¿Qué tres compañías dan informes de crédito nacionales en EE. UU.?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "Son las tres compañías nacionales de informes de crédito." },
      { q: "Un sitio web ofrece un \"informe de crédito gratis\" pero pide una tarjeta para empezar una prueba. ¿Cuál es la opción más segura?", options: ["Inscribirte de todos modos", "Dar tu número de tarjeta", "Usar AnnualCreditReport.com en su lugar", "Compartir el enlace con tus amigos"], answer: 2, why: "Algunos sitios te inscriben en productos de pago; AnnualCreditReport.com es la fuente oficial y gratuita." },
      { q: "Tu informe muestra un pago atrasado que sabes que hiciste a tiempo. Debes:", options: ["Esperar a que desaparezca", "Abrir una tarjeta nueva", "Disputar el error y guardar copias", "Dejar de pagar todas las cuentas"], answer: 2, why: "Puedes disputar los errores con la compañía de crédito y con el negocio." },
      { q: "En tu lista de deudas, ¿qué debes pagar siempre en cada deuda?", options: ["Nada hasta que puedas pagarla toda", "Por lo menos el mínimo, a tiempo", "Solo la más grande", "El doble del saldo"], answer: 1, why: "No pagar los mínimos suma cargos y daña tu crédito." },
      { q: "¿Por qué alguien elegiría pagar primero el saldo más pequeño?", options: ["Un logro rápido lo mantiene motivado", "Siempre ahorra más dinero", "Los prestamistas lo exigen", "Elimina todos los intereses"], answer: 0, why: "Terminar rápido una deuda pequeña da un logro rápido; la forma de la tasa más alta casi siempre ahorra más." },
      { q: "La próxima semana te vas a atrasar en el pago del auto. ¿Qué es lo mejor que puedes hacer?", options: ["No decir nada y esperar", "Sacar un préstamo de día de pago", "Cambiar tu número de teléfono", "Llamar al prestamista antes de la fecha de vencimiento y preguntar por opciones"], answer: 3, why: "Los prestamistas pueden ofrecer opciones si llamas a tiempo." },
      { q: "Una buena primera meta de ahorro para emergencias es:", options: ["Una cantidad enorme que no puedes alcanzar", "Una cantidad pequeña que puedes alcanzar, y luego una más grande", "Cero hasta que seas rico", "Lo mismo que tiene tu vecino"], answer: 1, why: "Empieza poco a poco y luego crece; hasta un poco ayuda." },
      { q: "¿Qué lugar es más seguro que el efectivo en casa para guardar tus ahorros de emergencia?", options: ["Debajo del colchón", "Con un desconocido en internet", "Una cuenta de ahorros en un banco o cooperativa de crédito", "En tu billetera de todos los días"], answer: 2, why: "El efectivo se puede perder o robar; las cuentas aseguradas son más seguras." },
      { q: "A un agricultor le pagan en la cosecha. ¿Cuál es un buen hábito de ahorro?", options: ["Gastar primero y ahorrar lo que sobre", "Prestárselo todo a un primo", "Guardarlo todo en efectivo en casa", "Pasar una parte al ahorro ese mismo día, antes de gastar"], answer: 3, why: "Ahorrar primero, antes de gastar, hace que el plan funcione." },
      { q: "Los cargos del dinero móvil:", options: ["Cambian según el servicio y con el tiempo, así que revisa la tabla oficial de cargos", "Siempre son cero", "Son iguales en todos los países", "Nunca importan"], answer: 0, why: "Revisa los cargos actuales en la aplicación, en el sitio oficial o con un agente oficial." },
      { q: "En un grupo de ahorro (chama), ¿qué te protege mejor?", options: ["Pagar sin registros", "Unirte a cualquier grupo en internet", "Registros escritos de cada pago y una copia de las reglas", "Compartir tu PIN con el grupo"], answer: 2, why: "Los registros y las reglas escritas protegen a todos los miembros." },
      { q: "¿Qué te dice la APR?", options: ["Tu puntaje de crédito", "El costo de un préstamo en un año, incluidos los cargos, como porcentaje", "Cuánto ganas", "La dirección de tu banco"], answer: 1, why: "La APR te permite comparar el costo real de los préstamos." },
      { q: "En EE. UU., ¿te pueden arrestar por no pagar un préstamo de día de pago?", options: ["Sí, siempre", "Sí, después de un día", "Solo los fines de semana", "No"], answer: 3, why: "La CFPB dice que no te pueden arrestar por no pagar un préstamo de día de pago." },
      { q: "¿Cuál es una opción más barata que un préstamo de día de pago?", options: ["Un préstamo pequeño de una cooperativa de crédito", "Renovar un préstamo de día de pago", "Pagarle a un desconocido con tarjetas de regalo", "Un préstamo que pide un cargo por adelantado"], answer: 0, why: "Los préstamos de cooperativas de crédito y pedir más tiempo suelen costar mucho menos." }
    ]
  }
};

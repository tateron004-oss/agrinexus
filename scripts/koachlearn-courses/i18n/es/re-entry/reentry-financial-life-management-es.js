"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-financial-life-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-financial-life-management-es",
  lang: "es",
  translationOf: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Manejo del dinero y de la vida con IA",
  skills: "Hacer un presupuesto mensual sencillo con IA, Llevar la cuenta de tus gastos, Poner recordatorios de pagos, Elegir formas más seguras de usar el banco y pedir prestado, Revisar gratis tu informe de crédito, Planear metas semana a semana",
  outcome: "hacer un presupuesto mensual sencillo con un asistente de IA usando cifras aproximadas, poner recordatorios para tus pagos, saber cómo obtener tu informe de crédito gratis y convertir una meta de dinero o de vida en pasos semanales.",
  about: [
    "Este curso es para personas que regresan a casa y quieren tener bajo control su dinero y su semana. Empezar de nuevo puede significar un primer cheque de pago, cuentas nuevas, tal vez deudas viejas y muchas citas al mismo tiempo. Un plan lo hace más manejable.",
    "Vas a usar un asistente de IA gratis como ChatGPT, Microsoft Copilot o Google Gemini para armar un presupuesto, planear tu semana y fijar metas, y vas a aprender opciones más seguras para usar el banco y pedir prestado, y cómo revisar tu crédito gratis.",
    "Nunca escribas en la IA números de cuenta reales, tu número de Seguro Social ni detalles de tu caso; con cantidades aproximadas basta. Este curso no da asesoría financiera ni legal; para deudas, multas o manutención de hijos, habla con la oficina correspondiente, una oficina de asistencia legal o un asesor de crédito sin fines de lucro. Cada lección dura unos cinco minutos. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Usa un asistente de IA para armar un presupuesto mensual sencillo con cifras aproximadas (ingresos, renta, teléfono, transporte, comida, otras cuentas y una pequeña cantidad para ahorrar). Pon un recordatorio en el teléfono para la fecha de pago de cada cuenta, escribe cómo vas a obtener tu informe de crédito gratis y convierte una meta en pasos para las próximas cuatro semanas.",
  chapters: [
    {
      name: "Capítulo 1: Lo básico del dinero con IA",
      lessons: [
        {
          title: "Hacer un presupuesto sencillo con IA",
          minutes: 6,
          goal: "Armar un presupuesto de un mes con cifras aproximadas y un asistente de IA.",
          text: [
            "Un presupuesto es un plan para tu dinero: lo que entra y a dónde va. Te ayuda a pagar primero lo que importa y a no quedarte sin dinero antes del día de pago.",
            "Escribe cifras aproximadas, sin datos de cuentas: \"Recibo unos $1,800 al mes. La renta es de $700, el teléfono $40, el pase de autobús $60 y la comida unos $300. Debo un pago mensual de $50. Ayúdame a hacer un presupuesto mensual sencillo en una tabla, con un poco de ahorro, y dime cuánto queda para otras cosas.\"",
            "Pon primero las necesidades: vivienda, comida, transporte al trabajo, teléfono y pagos obligatorios. Luego el ahorro, aunque sean $10 a la semana; se va sumando y ayuda en emergencias. Después los gustos. Si los números no cuadran, pregúntale a la IA: \"¿Dónde podría recortar?\" y decide qué es lo correcto para ti."
          ],
          steps: ["Escribe tu sueldo neto y tus cuentas principales con cifras aproximadas.", "Pídele a la IA una tabla de presupuesto mensual sencilla.", "Pon primero las necesidades, luego el ahorro y después los gustos.", "Pregunta dónde podrías recortar si no cuadra.", "Guarda el presupuesto."],
          words: [["Presupuesto", "un plan de cómo vas a usar tu dinero cada mes."], ["Sueldo neto", "el dinero que de verdad recibes después de impuestos y descuentos."], ["Necesidades y gustos", "las necesidades son cosas que tienes que pagar; los gustos son cosas que está bien tener."]],
          slides: [
            { title: "Un presupuesto es un plan", bullets: ["Lo que entra", "A dónde va", "Paga primero lo que importa"] },
            { title: "Pregúntale a la IA con cifras aproximadas", bullets: ["Sueldo neto y cuentas principales", "Sin números de cuenta", "\"Haz una tabla de presupuesto sencilla.\""] },
            { title: "El orden importa", bullets: ["Primero las necesidades", "Luego el ahorro, aunque sean $10 a la semana", "Después los gustos"] }
          ],
          tryIt: "Escribe tu sueldo neto real o estimado y cinco cuentas con cifras aproximadas. Pídele a un asistente de IA una tabla de presupuesto mensual sencilla con una pequeña línea de ahorro.",
          youCanNow: "hacer un presupuesto mensual sencillo con ayuda de la IA, sin compartir datos privados."
        },
        {
          title: "Llevar la cuenta de gastos y pagos",
          minutes: 5,
          goal: "Anotar lo que gastas durante una semana y poner recordatorios para las fechas de pago.",
          text: [
            "Un presupuesto solo funciona si sabes a dónde se va el dinero de verdad. Durante una semana, anota todo lo que gastas en una nota del teléfono: la cosa y la cantidad. Las cosas pequeñas, como botanas y viajes en aplicaciones de transporte, se van sumando.",
            "Al final de la semana, pega la lista (sin números de tarjeta) en la IA y pregúntale: \"Agrupa mis gastos por categorías y suma cada una. ¿En qué se fue la mayor parte de mi dinero?\"",
            "Los cargos por pago tardío son dinero tirado. Pon un recordatorio en el teléfono unos días antes de que venza cada cuenta: \"Recuérdame pagar el teléfono el día 12 de cada mes.\" Paga tus cuentas solo por la aplicación o el sitio web oficial de la empresa, o en persona."
          ],
          steps: ["Anota cada compra en una nota del teléfono durante una semana.", "Pídele a la IA que la agrupe y la sume.", "Compárala con tu presupuesto.", "Pon un recordatorio mensual antes de la fecha de pago de cada cuenta.", "Paga solo por aplicaciones o sitios oficiales, o en persona."],
          words: [["Categoría", "un grupo de gastos parecidos, como comida o transporte."], ["Cargo por pago tardío", "dinero extra que te cobran cuando pagas una cuenta después de su fecha límite."], ["Fecha de pago", "el último día para pagar una cuenta a tiempo."]],
          slides: [
            { title: "Sabe a dónde se va", bullets: ["Anota cada compra durante una semana", "Las cosas pequeñas se suman"] },
            { title: "Deja que la IA lo ordene", bullets: ["Pega la lista, sin números de tarjeta", "\"Agrupa y suma por categoría.\""] },
            { title: "Evita los cargos por pago tardío", bullets: ["Recordatorio unos días antes de cada fecha de pago", "Paga solo por medios oficiales"] }
          ],
          tryIt: "Empieza hoy una nota de gastos. Luego pon un recordatorio mensual que se repita para una cuenta, unos días antes de que venza.",
          youCanNow: "llevar la cuenta de tus gastos y poner recordatorios para pagar tus cuentas a tiempo."
        },
        {
          title: "Formas más seguras de usar el banco y pedir prestado",
          minutes: 5,
          goal: "Comparar opciones de banco y de préstamos y detectar las que son caras o riesgosas.",
          text: [
            "Una cuenta en un banco o en una cooperativa de crédito suele ser más barata y segura que cambiar cheques en una casa de cambio de cheques, que te cobra cada vez. Si tuviste problemas con una cuenta de banco en el pasado, pregunta en bancos y cooperativas de crédito si tienen cuentas de \"segunda oportunidad\" o con cargos bajos.",
            "Ten cuidado con el dinero rápido. Los préstamos de día de pago, los préstamos con el título del auto y algunas aplicaciones de adelanto de efectivo pueden costarte mucho más de lo que pides cuando se suman los cargos y los intereses. Antes de pedir prestado, pregunta: \"¿Cuánto voy a pagar en total y cuándo?\" Puedes pedirle a la IA que te explique en palabras sencillas las condiciones de una oferta, pero no que decida por ti.",
            "Alerta de estafa: ningún prestamista real te pide pagar un cargo por adelantado con tarjetas de regalo o por transferencia. Para ayuda con deudas, busca un asesor de crédito sin fines de lucro o una oficina de asistencia legal; evita las empresas que prometen borrar tus deudas a cambio de un cargo grande por adelantado."
          ],
          steps: ["Pregunta en bancos y cooperativas de crédito por cuentas con cargos bajos o de segunda oportunidad.", "Si puedes, evita pagar por cambiar cheques cada día de pago.", "Antes de pedir prestado, pide el costo total y las fechas.", "Pídele a la IA que te explique las condiciones en palabras sencillas.", "Nunca pagues un cargo por adelantado con tarjetas de regalo o por transferencia."],
          words: [["Cooperativa de crédito", "una institución financiera sin fines de lucro que pertenece a sus socios."], ["Intereses", "el dinero extra que pagas por pedir prestado."], ["Préstamo de día de pago", "un préstamo pequeño y corto que por lo general tiene cargos muy altos."]],
          slides: [
            { title: "Usa el banco, no pagues por cambiar cheques", bullets: ["Los cargos por cambiar cheques se suman", "Pregunta por cuentas de segunda oportunidad o con cargos bajos", "Vale la pena ver las cooperativas de crédito"] },
            { title: "Cuidado con el dinero rápido", bullets: ["Los préstamos de día de pago y con título cuestan mucho", "Pregunta: ¿cuánto pago en total y cuándo?", "La IA explica las condiciones; tú decides"] },
            { title: "Alerta de estafa", bullets: ["Nada de cargos por adelantado con tarjetas de regalo o transferencia", "Usa asesores sin fines de lucro o asistencia legal"] }
          ],
          sources: [{ name: "FTC: Cómo evitar una estafa (señales de alerta en los pagos) (en inglés)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Pregúntale a un asistente de IA: \"Explícame con palabras sencillas la diferencia entre una cooperativa de crédito, un banco y una casa de cambio de cheques, y qué preguntas debería hacer antes de abrir una cuenta.\" Anota tres preguntas para hacer.",
          youCanNow: "elegir formas más seguras de usar el banco y detectar préstamos caros o riesgosos."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Lo básico del dinero con IA",
        questions: [
          { q: "¿Qué deberías escribir en la IA para armar un presupuesto?", options: ["Tu número de Seguro Social", "Tu número de cuenta bancaria", "Solo cantidades aproximadas", "El PIN de tu tarjeta"], answer: 2, why: "Las cifras aproximadas bastan y te mantienen seguro." },
          { q: "En un presupuesto, ¿qué va primero?", options: ["Las necesidades como vivienda, comida y transporte", "Los gustos", "Los regalos", "El entretenimiento"], answer: 0, why: "Las necesidades te mantienen con techo, comida y trabajo." },
          { q: "¿Por qué anotar tus gastos durante una semana?", options: ["Lo exige la ley", "Para impresionar a otros", "Para que te suban el sueldo", "Para ver a dónde se va de verdad tu dinero"], answer: 3, why: "Anotar te muestra qué cambiar." },
          { q: "¿Cómo puedes evitar los cargos por pago tardío?", options: ["Pagando cuando te acuerdes", "Poniendo un recordatorio unos días antes de cada fecha de pago", "Ignorando las cuentas", "Pagándole a desconocidos"], answer: 1, why: "Los recordatorios te ayudan a pagar a tiempo." },
          { q: "Un prestamista te pide un cargo por adelantado en tarjetas de regalo. Esto es:", options: ["Normal", "Una estafa", "Algo que exigen los bancos", "Una buena oferta"], answer: 1, why: "Los prestamistas reales no cobran cargos con tarjetas de regalo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear tu vida",
      lessons: [
        {
          title: "Revisar gratis tu informe de crédito",
          minutes: 5,
          goal: "Saber cómo obtener tu informe de crédito gratis y qué buscar en él.",
          text: [
            "Un informe de crédito es un registro de tus préstamos y tus pagos. Los caseros, algunos empleadores y los prestamistas pueden revisarlo. Después de un tiempo fuera, puede tener poca información, estar desactualizado, tener errores o incluso cuentas que alguien abrió a tu nombre.",
            "Puedes obtener gratis tus informes de crédito de las tres agencias nacionales de crédito (Equifax, Experian y TransUnion) una vez por semana en AnnualCreditReport.com, el sitio oficial. También puedes llamar al 1-877-322-8228. Hazlo en un dispositivo privado, no en una computadora compartida, porque ahí vas a poner datos personales, no en la IA.",
            "Busca cuentas que no reconozcas e información equivocada. Si alguien usó tu identidad, entra a IdentityTheft.gov (el sitio del gobierno de Estados Unidos sobre robo de identidad) para obtener un plan de recuperación gratis. Puedes pedirle a la IA que te explique palabras del informe de crédito, pero nunca pegues tu informe en ella."
          ],
          steps: ["Entra a AnnualCreditReport.com en un dispositivo privado, o llama al 1-877-322-8228.", "Pide los informes de las tres agencias.", "Busca cuentas que no reconozcas y errores.", "Si usaron tu identidad, entra a IdentityTheft.gov.", "Pídele a la IA que te explique términos, pero nunca pegues el informe."],
          words: [["Informe de crédito", "un registro de tus préstamos, tarjetas de crédito y pagos de cuentas."], ["Agencia de crédito", "una empresa que guarda informes de crédito: Equifax, Experian o TransUnion."]],
          slides: [
            { title: "Tu informe de crédito", bullets: ["Un registro de préstamos y pagos", "Caseros y prestamistas pueden revisarlo", "Puede tener errores después de un tiempo fuera"] },
            { title: "Gratis, en el sitio oficial", bullets: ["AnnualCreditReport.com, cada semana", "O llama al 1-877-322-8228", "Usa un dispositivo privado"] },
            { title: "Qué buscar", bullets: ["Cuentas que no reconoces", "Información equivocada", "¿Usaron tu identidad? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC: Informes de crédito gratuitos (en inglés)", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC: Lo que debes saber sobre el robo de identidad (en inglés)", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Pídele a un asistente de IA que te explique con palabras sencillas estos términos del informe de crédito: \"cuenta en cobranza\", \"consulta dura\" e \"historial de pagos\". Luego anota cuándo vas a pedir tu informe gratis en un dispositivo privado.",
          youCanNow: "obtener tu informe de crédito gratis y saber qué buscar en él."
        },
        {
          title: "Planear tu semana",
          minutes: 5,
          goal: "Usar la IA para convertir una semana llena de citas, trabajo y pendientes en un plan sencillo.",
          text: [
            "Regresar a casa puede significar muchas cosas a la vez: turnos de trabajo, citas de control, solicitudes de empleo, oficinas de identificación, tiempo con la familia, tal vez clases. Un plan semanal evita que choquen.",
            "Haz una lista de todo lo de la semana con días y horas, en palabras generales. Pregúntale a la IA: \"Estos son mis turnos de trabajo, citas y pendientes. Haz un plan semanal sencillo, avísame si algo choca y deja tiempo de traslado entre una cosa y otra.\" No necesitas decir qué tipo de cita de control es.",
            "Pon lo que no se mueve en el calendario de tu teléfono con recordatorios. Deja algo de tiempo libre. Si dos cosas chocan, llama pronto para cambiar la cita; las oficinas suelen responder mejor a una llamada a tiempo que a alguien que no se presenta."
          ],
          steps: ["Haz una lista de los turnos, citas y pendientes de la semana en palabras generales.", "Pídele a la IA un plan semanal con tiempo de traslado, y que te avise si algo choca.", "Agrega lo que no se mueve a tu calendario con recordatorios.", "Deja algo de tiempo libre.", "Llama pronto para cambiar cualquier cita que choque."],
          words: [["Choque de horario", "dos cosas programadas a la misma hora."], ["Calendario", "la aplicación de tu teléfono que guarda las citas por fecha."]],
          slides: [
            { title: "Muchas cosas a la vez", bullets: ["Turnos, citas, pendientes, familia", "Un plan semanal evita que choquen"] },
            { title: "Pídele un plan a la IA", bullets: ["Escribe todo en palabras generales", "Agrega tiempo de traslado", "Que te avise de los choques"] },
            { title: "Hazlo realidad", bullets: ["Pon lo fijo en tu calendario", "Deja tiempo libre", "Llama pronto para cambiar citas"] }
          ],
          tryIt: "Haz una lista de tus compromisos reales o de práctica para la próxima semana en palabras generales. Pídele a la IA un plan semanal con tiempo de traslado y resuelve un choque que encuentre.",
          youCanNow: "convertir una semana llena en un plan sencillo sin choques de horario."
        },
        {
          title: "Convertir metas en pasos semanales",
          minutes: 5,
          goal: "Dividir una meta de dinero o de vida en pasos pequeños para las próximas cuatro semanas.",
          text: [
            "Las metas grandes, como ahorrar para el depósito de un departamento, sacar la licencia de manejo o pagar una deuda, pueden sentirse muy lejos. Dividirlas en pasos semanales las hace posibles.",
            "Pregúntale a la IA: \"Mi meta es ahorrar $600 para el depósito de un departamento en cuatro meses. Recibo unos $1,800 al mes. Divídelo en pasos semanales y acciones pequeñas.\" O: \"Ayúdame a planear los pasos para recuperar mi licencia de manejo en mi estado. Dime qué debo confirmar con el DMV (la oficina de vehículos motorizados).\"",
            "Elige una meta, escribe los cuatro pasos semanales y pon el primero en tu calendario. Revisa cada semana: ¿qué hice?, ¿qué sigue? Para los pasos legales, como recuperar la licencia, multas o preguntas sobre antecedentes, confirma con la oficina oficial o con un programa de asistencia legal; la IA solo puede darte una lista para empezar."
          ],
          steps: ["Elige una meta.", "Pídele a la IA que la divida en pasos semanales.", "Escribe las primeras cuatro semanas.", "Pon la semana uno en tu calendario.", "Revisa cada semana y confirma los pasos legales con la oficina oficial."],
          words: [["Meta", "algo que quieres lograr."], ["Asistencia legal", "ayuda legal gratis o de bajo costo para quienes califican."]],
          slides: [
            { title: "Metas grandes, pasos pequeños", bullets: ["Ahorrar para un depósito", "Recuperar una licencia", "Pagar una deuda"] },
            { title: "Pídele a la IA que la divida", bullets: ["Tu meta y tu plazo", "Pasos y acciones semanales"] },
            { title: "Cúmplelo", bullets: ["El primer paso en tu calendario", "Revisa cada semana", "Confirma los pasos legales con la oficina o asistencia legal"] }
          ],
          tryIt: "Tarea final: arma con la IA tu presupuesto mensual con cifras aproximadas, pon un recordatorio para la fecha de pago de cada cuenta, anota cuándo y cómo vas a obtener tu informe de crédito gratis y convierte una meta en cuatro pasos semanales.",
          youCanNow: "manejar tu dinero y tu semana con ayuda de la IA, y convertir tus metas en pasos que puedes dar."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear tu vida",
        questions: [
          { q: "¿Dónde obtienes informes de crédito gratis de la fuente oficial?", options: ["En cualquier sitio que pida un pago", "En un anuncio emergente", "En un enlace de un mensaje de texto", "En AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com es la fuente oficial y gratuita." },
          { q: "¿Deberías pegar tu informe de crédito en un asistente de IA?", options: ["No; pídele a la IA solo que explique términos", "Sí, siempre", "Solo la mitad", "Solo en una computadora de la biblioteca"], answer: 0, why: "Los informes de crédito tienen datos privados." },
          { q: "Encuentras una cuenta que nunca abriste. ¿Qué haces?", options: ["Pagarla de inmediato", "Ignorarla", "Entrar a IdentityTheft.gov para obtener un plan de recuperación", "Publicarla en internet"], answer: 2, why: "IdentityTheft.gov te guía en los pasos de recuperación." },
          { q: "Dos citas son a la misma hora la próxima semana. ¿Cuál es el mejor paso?", options: ["Esperar que se arregle solo", "Faltar a las dos", "No ir a ninguna y no decir nada", "Llamar pronto para cambiar una"], answer: 3, why: "Llamar a tiempo funciona mejor que no presentarse." },
          { q: "La IA te da pasos para recuperar una licencia. ¿Qué sigue?", options: ["No hacer nada", "Creerle por completo", "Confirmar con el DMV o con asistencia legal", "Pagarle a un desconocido"], answer: 2, why: "Los pasos legales se deben confirmar con las oficinas oficiales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Manejo del dinero y de la vida con IA",
    questions: [
      { q: "Un presupuesto es:", options: ["Un tipo de préstamo", "Un plan para tu dinero", "Una tarjeta del banco", "Una cuenta por pagar"], answer: 1, why: "Planea lo que entra y lo que sale." },
      { q: "El sueldo neto es:", options: ["Lo que recibes después de impuestos y descuentos", "Lo que ganas por hora antes de impuestos", "Un bono", "Un préstamo"], answer: 0, why: "Es el dinero que de verdad recibes." },
      { q: "¿Cuál es una necesidad?", options: ["La renta", "Un videojuego nuevo", "Comer fuera todos los días", "Un segundo servicio de streaming"], answer: 0, why: "La vivienda es una necesidad básica." },
      { q: "Incluso ahorrar poco, como $10 a la semana, ayuda porque:", options: ["Te sube el sueldo", "Se va sumando y ayuda en emergencias", "Es obligatorio", "Detiene todas las cuentas"], answer: 1, why: "Las cantidades pequeñas se convierten en un colchón." },
      { q: "Si tu presupuesto no cuadra, puedes preguntarle a la IA:", options: ["\"Paga mis cuentas.\"", "\"¿Cuál es mi PIN?\"", "\"¿Dónde podría recortar?\"", "\"Pide un préstamo por mí.\""], answer: 2, why: "La IA puede sugerir opciones; tú decides." },
      { q: "Una categoría de gastos es:", options: ["Una fecha de pago", "Un banco", "Un préstamo", "Un grupo de gastos parecidos, como comida"], answer: 3, why: "Las categorías muestran a dónde va el dinero." },
      { q: "Una fecha de pago es:", options: ["Un día festivo", "El día en que te pagan", "El último día para pagar una cuenta a tiempo", "Un cumpleaños"], answer: 2, why: "Pagar después puede traer cargos por pago tardío." },
      { q: "La forma más segura de pagar una cuenta es:", options: ["Por la aplicación o el sitio web oficial de la empresa, o en persona", "Por un enlace en un mensaje de texto", "Con tarjetas de regalo a alguien que te llama", "Por transferencia a un desconocido"], answer: 0, why: "Los medios oficiales evitan estafas." },
      { q: "Las casas de cambio de cheques por lo general:", options: ["Son del gobierno", "Son gratis", "Te pagan intereses", "Cobran un cargo cada vez"], answer: 3, why: "Los cargos se suman cada día de pago." },
      { q: "Una cooperativa de crédito es:", options: ["Un prestamista de día de pago", "Una institución financiera sin fines de lucro que pertenece a sus socios", "Una agencia de crédito", "Una casa de cambio de cheques"], answer: 1, why: "Las cooperativas de crédito pertenecen a sus socios." },
      { q: "Si antes tuviste problemas con una cuenta de banco, pregunta por:", options: ["Cuentas de tarjetas de regalo", "Cuentas de segunda oportunidad o con cargos bajos", "Solo criptomonedas", "Nada"], answer: 1, why: "Muchos bancos y cooperativas de crédito las ofrecen." },
      { q: "Antes de aceptar cualquier préstamo, pregunta:", options: ["El color favorito del prestamista", "Solo el pago mensual", "Nada", "Cuánto vas a pagar en total y cuándo"], answer: 3, why: "El costo total muestra lo que de verdad pagas." },
      { q: "Los intereses son:", options: ["El dinero extra que pagas por pedir prestado", "Un regalo gratis", "Tu sueldo", "Un recordatorio de pago"], answer: 0, why: "Pedir prestado cuesta intereses." },
      { q: "Para ayuda con deudas, una opción segura es:", options: ["Un desconocido en internet", "Una empresa que cobra un cargo grande por adelantado para borrar deudas", "Un asesor de crédito sin fines de lucro o asistencia legal", "Una oferta de tarjetas de regalo"], answer: 2, why: "Las organizaciones sin fines de lucro y la asistencia legal evitan las estafas de alivio de deudas." },
      { q: "¿Cada cuánto puedes obtener gratis los informes de crédito de cada agencia en el sitio oficial?", options: ["Solo pagando", "Una vez cada diez años", "Nunca", "Una vez por semana"], answer: 3, why: "Las agencias ampliaron los informes gratuitos a cada semana." },
      { q: "Las tres agencias nacionales de crédito son:", options: ["Google, Apple y Microsoft", "Visa, Mastercard y Discover", "Equifax, Experian y TransUnion", "El DMV, el IRS y la SSA"], answer: 2, why: "Esas tres guardan los informes de crédito." },
      { q: "Pide tu informe de crédito en:", options: ["Una computadora compartida de la biblioteca con todas tus sesiones abiertas", "Un dispositivo privado", "El teléfono de un desconocido", "Un chat de IA"], answer: 1, why: "Ahí vas a poner datos personales." },
      { q: "Cuando le pidas a la IA que planee tu semana, describe tus compromisos:", options: ["En palabras generales", "Con tu número de caso", "Con tu número de identificación", "Con tu número de Seguro Social"], answer: 0, why: "Las palabras generales bastan." },
      { q: "Un \"choque\" en un horario significa:", options: ["Dos cosas a la misma hora", "Una pelea", "Un día libre", "Una cuenta"], answer: 0, why: "Los choques requieren cambiar una cita." },
      { q: "Para que una meta grande sea posible, tú:", options: ["Esperas tener suerte", "La divides en pasos semanales", "La haces toda en un día", "Te la guardas en secreto"], answer: 1, why: "Los pasos pequeños se suman hasta lograr grandes resultados." }
    ]
  }
};

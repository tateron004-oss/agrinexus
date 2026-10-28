"use strict";

// Koach Learn course (Spanish translation of agriculture-africa/agri-agribusiness-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations".

const CBK = { name: "Banco Central de Kenia (ver sus listas de instituciones con licencia)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Banco Central de Nigeria (protección al consumidor e instituciones con licencia)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Libro de consulta sobre agricultura climáticamente inteligente (gestión de riesgos de la finca)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-es",
  lang: "es",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Agronegocios y administración de la finca",
  skills: "Llevar registros sencillos de la finca, Calcular el margen bruto de cada cultivo o animal, Encontrar mercados y conseguir mejores precios, Manejar el flujo de efectivo con dinero móvil, Juzgar el costo del crédito y manejar el riesgo, Escribir un plan de negocio de la finca de una página",
  outcome: "manejar tu finca como un negocio: llevar registros, calcular qué cultivos o animales ganan más por acre, planear tu dinero a lo largo del año, juzgar si un préstamo tiene sentido y escribir un plan de negocio de la finca de una página que puedas mostrar a una cooperativa, a un prestamista o a un socio.",
  about: [
    "Este curso es para pequeños agricultores, jóvenes agroemprendedores, grupos de mujeres y de jóvenes, líderes de cooperativas y extensionistas en Kenia, Nigeria y en toda África que quieren que su finca gane más y tenga menos riesgo.",
    "El capítulo 1 trata la finca como un negocio: llevar registros sencillos, calcular el margen bruto de cada actividad (como maíz, frijol, tomate, aves o lechería) y encontrar mercados y mejores precios. El capítulo 2 trata del dinero y del crecimiento: usar dinero móvil para manejar el flujo de efectivo, decidir si pedir prestado y cómo manejar el riesgo, y escribir un plan de negocio de una página.",
    "Todos los ejemplos de dinero de este curso son números inventados para mostrar el método; usa tus propios precios locales. Este curso no da consejos de inversión ni de préstamos: antes de pedir prestado, compara ofertas, revisa que el prestamista tenga licencia y habla con un asesor de confianza, como tu cooperativa, tu SACCO o tu extensionista. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de negocio de una página para tu finca (o para una finca de ejemplo): qué produces y en cuánta tierra, los márgenes brutos de al menos dos actividades (con tus propios precios y costos locales), a quién vas a vender y cómo, un esquema del flujo de efectivo de 12 meses que muestre cuándo entra y sale el dinero, cualquier préstamo que estés pensando pedir con su costo total y cómo lo pagarías, tus riesgos principales y cómo los vas a reducir, y tres metas para la próxima temporada.",
  chapters: [
    {
      name: "Capítulo 1: La finca como negocio",
      lessons: [
        {
          title: "Llevar registros sencillos de la finca",
          minutes: 5,
          goal: "Empezar un registro sencillo del dinero que entra, el que sale y la producción de la finca.",
          text: [
            "No puedes manejar lo que no mides. Muchos agricultores saben más o menos cuánto gastan y cuánto ganan, pero sin registros es difícil ver qué cultivo deja dinero, planear o conseguir un préstamo o un contrato con un comprador.",
            "Lleva tres registros sencillos. Dinero que sale: fecha, para qué (semilla, fertilizante, mano de obra, transporte, veterinario), qué cultivo o animal, cantidad. Dinero que entra: fecha, qué vendiste, cuánto, a quién, cantidad. Producción: fechas de siembra, insumos usados, cosecha por parcela, huevos o leche por día. Un cuaderno sirve; una hoja de cálculo en el teléfono también. Los estados de cuenta del dinero móvil también te ayudan a recordar.",
            "Anota los registros el mismo día. Separa en tus registros el dinero de la finca del dinero de la casa, aunque salgan de la misma bolsa, y cuenta también los días de trabajo de la familia, porque tu tiempo tiene valor."
          ],
          steps: ["Elige un cuaderno o una hoja de cálculo en el teléfono.", "Haz tres páginas u hojas: dinero que sale, dinero que entra, producción.", "Anota cada cosa el mismo día: fecha, qué, qué cultivo o animal, cantidad.", "Usa los estados de cuenta del dinero móvil para llenar huecos.", "Cuenta los días de trabajo de la familia además de la mano de obra pagada."],
          words: [["Llevar registros", "anotar lo que pasa en la finca: dinero, insumos y producción."], ["Actividad productiva", "una actividad de la finca, como maíz, frijol, aves o lechería."]],
          slides: [
            { title: "¿Por qué llevar registros?", bullets: ["Ver qué cultivo deja dinero", "Planear la temporada", "Conseguir un préstamo o un contrato"] },
            { title: "Tres registros sencillos", bullets: ["Sale: fecha, qué, qué actividad, cantidad", "Entra: fecha, qué vendiste, a quién, cantidad", "Producción: siembra, insumos, cosecha, huevos, leche"] },
            { title: "Buenos hábitos", bullets: ["Anótalo el mismo día", "Dinero de la finca separado del de la casa", "Cuenta también el trabajo de la familia"] }
          ],
          tryIt: "Empieza hoy tus registros. Haz las tres hojas y llena al menos cinco cosas del último mes, de memoria y con tu estado de cuenta del dinero móvil.",
          youCanNow: "llevar registros sencillos del dinero que entra, el que sale y la producción de cada actividad de la finca."
        },
        {
          title: "Margen bruto: ¿qué cultivo deja más?",
          minutes: 6,
          goal: "Calcular el margen bruto por acre de dos actividades y compararlas.",
          text: [
            "Margen bruto = ingresos de una actividad menos los costos que le corresponden (costos variables: semilla, fertilizante, químicos, mano de obra pagada, costales, transporte). Calcúlalo por acre (o por hectárea, o por cada 100 aves) para poder comparar las actividades de forma justa.",
            "Ejemplo con números inventados en chelines kenianos (KSh), un acre cada uno. Maíz: 18 costales a 3,500 = 63,000 de ingresos; costos 34,000 (semilla 3,000, fertilizante 14,000, mano de obra 12,000, químicos 2,000, costales y transporte 3,000); margen bruto 29,000. Frijol: 5 costales a 9,000 = 45,000 de ingresos; costos 18,000; margen bruto 27,000. Los márgenes son parecidos, pero el frijol además agrega nitrógeno y se cosecha antes. Usa tus propios precios: cambian según el lugar y la temporada.",
            "Compara también el margen por día de trabajo y el riesgo: un cultivo con un margen alto pero con mucha probabilidad de fallar puede no ser la mejor opción. Los costos fijos (renta de la tierra, herramientas, un tanque de agua) se cubren con la suma de todos los márgenes brutos."
          ],
          steps: ["Elige dos actividades.", "Escribe el rendimiento esperado y el precio por unidad para sacar los ingresos.", "Haz la lista de los costos variables de cada una.", "Margen bruto = ingresos - costos variables, por acre.", "Compara el margen, la mano de obra y el riesgo."],
          words: [["Margen bruto", "los ingresos de una actividad menos los costos que le corresponden."], ["Costos variables", "costos que cambian según cuánto siembras, como la semilla, el fertilizante y la mano de obra."], ["Costos fijos", "costos que se quedan igual siembres lo que siembres, como la renta de la tierra o un tanque de agua."]],
          slides: [
            { title: "La fórmula", bullets: ["Margen bruto = ingresos - costos variables", "Por acre, hectárea o 100 aves"] },
            { title: "Ejemplo (KSh inventados, 1 acre)", bullets: ["Maíz: 63,000 - 34,000 = 29,000", "Frijol: 45,000 - 18,000 = 27,000", "Usa tus propios precios locales"] },
            { title: "Compara también", bullets: ["Margen por día de trabajo", "Riesgo de que falle", "Costos fijos pagados con todos los márgenes"] }
          ],
          tryIt: "Calcula el margen bruto por acre de dos actividades de tu finca (o dos que estés pensando) con tus precios locales. ¿Cuál es más alto y cuál tiene más riesgo?",
          youCanNow: "calcular y comparar márgenes brutos para decidir qué sembrar o qué conservar."
        },
        {
          title: "Encontrar mercados y mejores precios",
          minutes: 5,
          goal: "Comparar al menos tres formas de vender y elegir la mejor para un cultivo.",
          text: [
            "Los precios suelen bajar justo después de la cosecha, cuando todos venden, y subir meses después. Vender solo, en cantidades pequeñas, al primer intermediario que llega a la finca es fácil pero muchas veces paga lo menos. Compara: el mercado local, los intermediarios, las cooperativas que juntan la producción, las procesadoras y las escuelas u hoteles, la agricultura por contrato con un comprador y, donde existan, los almacenes certificados que guardan el grano y pueden ayudar a los agricultores a conseguir crédito con él como respaldo.",
            "Busca información de precios: pregunta a varios compradores, revisa los servicios de precios de mercado y la radio, y habla con tu cooperativa. Conoce el estándar de calidad del comprador (humedad, clasificación, tamaño, limpieza) y cúmplelo: la producción limpia, seca y seleccionada se paga mejor y dura más.",
            "Los contratos te pueden dar un mercado seguro, pero lee las condiciones: el precio o cómo se fija, la cantidad, el estándar de calidad, las fechas de entrega, quién paga el transporte, la fecha y la forma de pago, y qué pasa si la cosecha falla. Pídelo por escrito y pide a tu cooperativa o a tu extensionista que lo revise."
          ],
          steps: ["Haz una lista de al menos tres formas de vender tu cultivo.", "Consigue precios de varios compradores y de servicios de información de mercado.", "Conoce el estándar de calidad de cada comprador.", "Considera juntar tu producción con un grupo o guardarla para un mejor precio.", "Lee las condiciones de cualquier contrato y pídelo por escrito."],
          words: [["Acopio", "juntar la producción de muchos agricultores para vender cantidades más grandes a mejor precio."], ["Agricultura por contrato", "un acuerdo para sembrar y vender la producción a un comprador con condiciones fijadas."], ["Estándar de calidad", "las reglas del comprador sobre humedad, tamaño, clasificación y limpieza."]],
          slides: [
            { title: "El momento importa", bullets: ["Precios bajos justo después de la cosecha", "Más altos meses después", "Guardar y juntar la producción puede ayudar"] },
            { title: "Formas de vender", bullets: ["Mercado, intermediarios, cooperativas", "Procesadoras, escuelas, hoteles", "Contratos, almacenes certificados"] },
            { title: "Que te paguen más", bullets: ["Compara varios precios", "Cumple el estándar de calidad", "Lee los contratos; pídelos por escrito"] }
          ],
          tryIt: "Para tu cultivo principal, escribe tres formas en que lo podrías vender, el precio que pagaría cada una hoy (pregunta o calcula), la calidad que pide cada una y cuál vas a elegir y por qué.",
          youCanNow: "comparar mercados y elegir la mejor forma de vender un cultivo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La finca como negocio",
        questions: [
          { q: "¿Por qué llevar registros de la finca?", options: ["Solo sirven para los cobradores de impuestos", "Para ver qué actividad deja dinero, planear y conseguir préstamos o contratos", "Para pasar el tiempo", "Los registros no sirven"], answer: 1, why: "Los registros convierten las suposiciones en decisiones." },
          { q: "El margen bruto es:", options: ["El total de la tierra de la finca", "Los ingresos menos los costos variables de una actividad", "El precio del fertilizante", "El dinero prestado"], answer: 1, why: "Muestra lo que gana cada actividad antes de los costos fijos." },
          { q: "¿Cuál es un costo variable?", options: ["La semilla", "La tierra que es tuya", "Un tanque de agua ya construido", "Tu casa"], answer: 0, why: "La semilla cambia según cuánto siembras." },
          { q: "Un comprador te ofrece un contrato. ¿Qué debes revisar?", options: ["Solo el nombre del comprador", "Nada; los contratos siempre son justos", "Solo el color de los costales", "Precio, cantidad, calidad, entrega, pago y qué pasa si la cosecha falla"], answer: 3, why: "Las condiciones deciden si el contrato te ayuda." },
          { q: "¿Por qué los precios suelen bajar justo después de la cosecha?", options: ["Los cultivos se encogen", "Los compradores dejan de comer", "Muchos agricultores venden al mismo tiempo", "El gobierno los pone bajos"], answer: 2, why: "Tanta oferta en la cosecha empuja los precios hacia abajo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dinero, riesgo y crecimiento",
      lessons: [
        {
          title: "Dinero móvil y flujo de efectivo",
          minutes: 5,
          goal: "Planear un flujo de efectivo de 12 meses y usar el dinero móvil con seguridad para la finca.",
          text: [
            "Muchas fincas tienen problemas de dinero no porque pierdan, sino porque el dinero entra una o dos veces al año y sale todo el año. Un plan de flujo de efectivo muestra, mes por mes, el dinero que esperas que entre y que salga, para que veas venir los meses difíciles y puedas planear.",
            "El dinero móvil (como M-Pesa en Kenia, y las billeteras móviles y aplicaciones bancarias en Nigeria) facilita pagar a los trabajadores y a los proveedores, recibir los pagos de los compradores, ahorrar y llevar un registro. Algunos agricultores tienen una billetera o cuenta aparte para la finca, para que el dinero de la finca y el de la casa no se mezclen.",
            "Cuídate: nunca compartas tu PIN ni tu código de un solo uso con nadie, incluidas personas que dicen ser de la compañía de dinero móvil o un comprador; revisa el nombre antes de enviar; y ten cuidado con los mensajes inesperados de \"transferencia por error\" que te piden devolver dinero. Reporta los problemas al proveedor por sus canales oficiales."
          ],
          steps: ["Dibuja 12 columnas de meses.", "Escribe el dinero que esperas que entre cada mes (ventas, otros ingresos).", "Escribe el dinero que esperas que salga (insumos, mano de obra, colegiaturas, comida).", "Encuentra los meses en que sale más de lo que entra y planea ahorros o fechas.", "Usa una billetera o cuenta aparte para el dinero de la finca; nunca compartas tu PIN."],
          words: [["Flujo de efectivo", "el momento en que el dinero entra y sale."], ["Meses difíciles", "meses en que falta dinero o comida, muchas veces antes de la cosecha."], ["PIN", "el número secreto que protege tu cuenta de dinero móvil."]],
          slides: [
            { title: "Flujo de efectivo, no solo ganancia", bullets: ["El dinero entra una o dos veces al año", "El dinero sale todo el año", "Planea para los meses difíciles"] },
            { title: "El dinero móvil ayuda", bullets: ["Pagar a trabajadores y proveedores", "Recibir pagos de compradores", "Ahorrar y llevar un registro"] },
            { title: "Cuídate", bullets: ["Nunca compartas el PIN ni el código", "Revisa el nombre antes de enviar", "Cuidado con la trampa de \"transferencia por error\""] }
          ],
          tryIt: "Dibuja tu plan de flujo de efectivo de 12 meses con el dinero que entra y el que sale. Encierra en un círculo los meses difíciles y escribe una forma de prepararte para cada uno (ahorrar de la cosecha, escalonar las ventas, una pequeña actividad fuera de temporada).",
          youCanNow: "planear el flujo de efectivo de tu finca a lo largo del año y usar el dinero móvil con seguridad."
        },
        {
          title: "Crédito y riesgo: pedir prestado con cuidado",
          minutes: 6,
          goal: "Calcular el costo total de un préstamo y decidir si tiene sentido para la finca.",
          text: [
            "Un préstamo puede ayudar a comprar insumos o equipo que ganen más de lo que cuestan. También se puede volver una trampa. Antes de pedir prestado, pregúntate: ¿qué va a comprar el dinero, cuánto más va a ganar y cuándo? ¿Vas a poder pagar en las fechas que pone el prestamista, aunque la cosecha sea mala?",
            "Compara las ofertas por la cantidad total que vas a pagar, no solo por la tasa de interés: suma todos los intereses, comisiones y cargos de seguro. Por ejemplo (números inventados), pedir 20,000 prestados y pagar 2,000 al mes durante 12 meses quiere decir pagar 24,000: el préstamo cuesta 4,000. Revisa que las fechas de pago coincidan con cuándo te entra el dinero. Los préstamos digitales cortos pueden salir muy caros cuando sumas las comisiones.",
            "Usa prestamistas con licencia: bancos, bancos de microfinanzas, SACCO y cooperativas, y prestamistas digitales aprobados por el banco central o el regulador que corresponda (en Kenia, el Banco Central de Kenia publica la lista de instituciones con licencia; en Nigeria, el Banco Central de Nigeria). Reduce el riesgo con ahorros, varios cultivos, seguros donde los haya, y pidiendo solo lo que necesita el plan. Habla con un asesor de confianza antes de firmar."
          ],
          steps: ["Escribe qué va a comprar el préstamo y cuánto más debería ganar.", "Suma el total que vas a pagar: intereses, comisiones, seguro.", "Revisa las fechas de pago con tu plan de flujo de efectivo.", "Revisa que el prestamista tenga licencia.", "Planea para una mala temporada: ahorros, seguro, un préstamo más chico.", "Pregunta a un asesor de confianza antes de firmar."],
          words: [["Interés", "el precio que pagas por pedir dinero prestado."], ["Costo total del crédito", "todo lo que pagas por encima de lo que pediste prestado: intereses más comisiones y cargos."], ["SACCO", "una cooperativa de ahorro y crédito que es de sus miembros."], ["Garantía", "algo que le prometes al prestamista si no puedes pagar."]],
          slides: [
            { title: "Antes de pedir prestado", bullets: ["¿Qué va a comprar?", "¿Cuánto más va a ganar, y cuándo?", "¿Puedes pagar si la cosecha es mala?"] },
            { title: "Compara el total", bullets: ["Intereses + comisiones + seguro", "Pides 20,000, pagas 24,000: cuesta 4,000", "¿Los pagos coinciden con tu flujo de efectivo?"] },
            { title: "Usa prestamistas con licencia", bullets: ["Bancos, microfinanzas, SACCO, cooperativas", "Kenia: listas del CBK; Nigeria: CBN", "Habla primero con un asesor de confianza"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Toma una oferta de préstamo real o de ejemplo. Escribe la cantidad prestada, cada pago y cada comisión, el total pagado y el costo total. Luego compara los meses de pago con tu plan de flujo de efectivo y escribe si tiene sentido.",
          youCanNow: "calcular el costo real de un préstamo y juzgar si pedir prestado tiene sentido para tu finca."
        },
        {
          title: "Escribir un plan de negocio de la finca de una página",
          minutes: 5,
          goal: "Escribir un plan de negocio de una página que podrías mostrar a una cooperativa, un prestamista o un socio.",
          text: [
            "Un plan de negocio es la historia de tu finca en números y metas. Los prestamistas, las cooperativas, los compradores y los socios quieren ver que conoces tu finca, tu mercado y tus riesgos. Una página clara es mejor que diez páginas vagas.",
            "Incluye: quién eres y cómo es tu finca (ubicación, tierra, qué produces); tus actividades con sus márgenes brutos; tu mercado (quién compra, cómo, a qué precio); el esquema de tu flujo de efectivo; lo que necesitas (insumos, equipo, un préstamo) y cómo se va a pagar; tus riesgos principales (clima, plagas, precios) y qué haces al respecto; y tres metas con números para la próxima temporada.",
            "Ten tus registros y cuentas detrás del plan, para poder responder preguntas. Actualízalo cada temporada con lo que de verdad pasó."
          ],
          steps: ["Resumen de la finca: ubicación, tierra, actividades.", "Márgenes brutos de cada actividad.", "Mercado: compradores, canal, precio.", "Esquema del flujo de efectivo y lo que necesitas.", "Riesgos y cómo los manejas.", "Tres metas con números; actualízalo cada temporada."],
          words: [["Plan de negocio", "un documento corto que explica qué hace un negocio, cómo gana, qué necesita y cuáles son sus metas."], ["Meta", "un objetivo claro con un número y una fecha."]],
          slides: [
            { title: "La historia de tu finca en números", bullets: ["Para prestamistas, cooperativas, compradores, socios", "Una página clara gana a diez vagas"] },
            { title: "Qué lleva", bullets: ["Resumen de la finca y actividades", "Márgenes brutos y mercado", "Flujo de efectivo, necesidades, cómo se paga"] },
            { title: "Termina bien", bullets: ["Riesgos y cómo los manejas", "Tres metas con números", "Actualízalo cada temporada"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Tarea final: escribe tu plan de negocio de la finca de una página con los márgenes brutos de dos actividades, el mercado, el flujo de efectivo de 12 meses, cualquier préstamo y su costo total, los riesgos y cómo respondes, y tres metas para la próxima temporada.",
          youCanNow: "escribir un plan de negocio de la finca de una página respaldado por tus propios registros y números."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Dinero, riesgo y crecimiento",
        questions: [
          { q: "¿Por qué una finca que gana dinero se puede quedar sin efectivo?", options: ["La ganancia no es real", "El dinero entra una o dos veces al año pero sale todo el año", "El dinero móvil lo pierde", "Los registros lo causan"], answer: 1, why: "El momento del flujo de efectivo, no solo la ganancia, decide si puedes pagar las cuentas." },
          { q: "Alguien que llama de \"tu proveedor de dinero móvil\" te pide tu PIN. Debes:", options: ["Dárselo rápido", "Darle la mitad", "Nunca compartirlo; contactar al proveedor por los canales oficiales", "Mandárselo por mensaje"], answer: 2, why: "Los proveedores de verdad nunca piden tu PIN." },
          { q: "Pides 20,000 prestados y pagas 2,000 al mes durante 12 meses. El préstamo cuesta:", options: ["4,000", "2,000", "20,000", "Nada"], answer: 0, why: "Pagas 24,000, que son 4,000 más de lo que pediste." },
          { q: "Antes de pedir un préstamo, revisa que el prestamista:", options: ["Sea amigo de tu vecino", "Sea muy rápido", "Esté en redes sociales", "Tenga licencia del banco central o del regulador que corresponda"], answer: 3, why: "Los prestamistas con licencia siguen reglas que protegen a quien pide prestado." },
          { q: "Un buen plan de negocio de la finca es:", options: ["Largo y vago", "Una página clara respaldada por registros y números", "Solo una lista de deseos", "Secreto para todos"], answer: 1, why: "Los planes cortos y concretos son más fáciles de seguir y de creer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Agronegocios y administración de la finca",
    questions: [
      { q: "¿Cuál es un registro sencillo de la finca?", options: ["Dinero que sale: fecha, qué, actividad, cantidad", "Una foto del cielo", "Una lista de canciones", "Nada escrito"], answer: 0, why: "Anotar el dinero que sale por actividad muestra los costos." },
      { q: "¿Cuándo debes anotar los registros?", options: ["Una vez al año", "El mismo día", "Solo cuando te lo pidan", "Nunca"], answer: 1, why: "Los registros del mismo día son exactos." },
      { q: "¿Por qué contar los días de trabajo de la familia?", options: ["Son gratis", "Para pagar impuestos", "Tu tiempo tiene valor y cambia qué actividad deja dinero", "No hace falta"], answer: 2, why: "El trabajo no pagado sigue siendo un costo real de tiempo." },
      { q: "Una actividad productiva es:", options: ["Un banco", "Un tractor", "Un mercado", "Una actividad de la finca, como el maíz o las aves"], answer: 3, why: "Cada actividad se mide por separado." },
      { q: "Ingresos 63,000, costos variables 34,000. El margen bruto es:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { q: "¿Por qué calcular el margen bruto por acre?", options: ["Para que los números se vean más grandes", "Para comparar las actividades de forma justa", "Porque los compradores lo piden", "Para pagar la renta"], answer: 1, why: "Usar la misma unidad de tierra hace justa la comparación." },
      { q: "La renta de la tierra que pagas siembres lo que siembres es:", options: ["Un costo variable", "Un margen bruto", "Un costo fijo", "Una venta"], answer: 2, why: "Los costos fijos no cambian según cuánto siembras." },
      { q: "Dos cultivos tienen márgenes parecidos, pero uno falla seguido. Debes:", options: ["Ignorar el riesgo", "Sembrar solo el riesgoso", "Elegir por el color", "Tomar en cuenta el riesgo además del margen"], answer: 3, why: "Un margen alto vale menos si es probable que falle." },
      { q: "Juntar la producción con una cooperativa ayuda porque:", options: ["Las cantidades grandes pueden conseguir mejores precios", "Los cultivos crecen más rápido", "No se pide calidad", "Los compradores pagan menos"], answer: 0, why: "Los compradores pagan más por una oferta grande y constante." },
      { q: "La producción limpia, seca y seleccionada:", options: ["Se paga menos", "Se paga mejor y dura más", "Nadie la quiere", "Se echa a perder más rápido"], answer: 1, why: "Cumplir los estándares de calidad sube el precio y la vida en almacén." },
      { q: "Antes de firmar un acuerdo de agricultura por contrato debes:", options: ["Firmar de inmediato", "Acordarlo solo por teléfono", "Leer las condiciones y pedirlo por escrito", "Dejar que el comprador decida todo"], answer: 2, why: "Las condiciones por escrito te protegen." },
      { q: "Un plan de flujo de efectivo muestra:", options: ["Solo la ganancia total", "Las variedades de los cultivos", "La lluvia", "El dinero que entra y sale mes por mes"], answer: 3, why: "Eso es el flujo de efectivo: el momento del dinero." },
      { q: "Los meses difíciles son:", options: ["Meses en que falta dinero o comida", "Meses de cosecha", "Días festivos", "Días de mercado"], answer: 0, why: "Planear para ellos evita préstamos o ventas de emergencia." },
      { q: "Una ventaja de tener una billetera o cuenta aparte para la finca es:", options: ["Precios más altos", "Que el dinero de la finca y el de la casa no se mezclan", "No necesitar registros", "Fertilizante gratis"], answer: 1, why: "Separarlo muestra lo que de verdad gana y gasta la finca." },
      { q: "Un mensaje dice que recibiste dinero por error y te pide devolverlo. Debes:", options: ["Mandarlo de inmediato", "Mandar el doble", "Revisar tu saldo real y tu estado de cuenta, y contactar al proveedor por los canales oficiales", "Compartir tu PIN"], answer: 2, why: "Los mensajes falsos de \"transferencia por error\" son una trampa común." },
      { q: "Para comparar préstamos, mira:", options: ["Solo el anuncio", "Solo la tasa de interés", "Solo qué tan rápido te lo dan", "La cantidad total que vas a pagar, con todas las comisiones"], answer: 3, why: "Las comisiones pueden volver caro un préstamo de tasa baja." },
      { q: "Una SACCO es:", options: ["Una cooperativa de ahorro y crédito que es de sus miembros", "Una plaga de los cultivos", "Un impuesto del gobierno", "Un dron"], answer: 0, why: "Las SACCO juntan los ahorros de sus miembros y les prestan." },
      { q: "Las fechas de pago de un préstamo deben:", options: ["Ignorarse", "Coincidir con los meses en que te entra el dinero", "Ser siempre semanales", "Decidirse después de gastar el dinero"], answer: 1, why: "Hacer coincidir los pagos con los ingresos evita caer en impago." },
      { q: "¿Qué reduce el riesgo de la finca?", options: ["Pedir prestado lo más posible", "Sembrar un solo cultivo", "Ahorros, varios cultivos y seguros donde los haya", "Vender todo en la cosecha"], answer: 2, why: "Repartir el riesgo protege a la finca en las malas temporadas." },
      { q: "Un plan de negocio se debe actualizar:", options: ["Nunca", "Cada diez años", "Solo cuando lo pida un prestamista", "Cada temporada con lo que de verdad pasó"], answer: 3, why: "Actualizarlo mantiene el plan real y útil." }
    ]
  }
};

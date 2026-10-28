"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-medicare-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-medicare-basics-es",
  lang: "es",
  translationOf: "seniors-medicare-basics",
  category: "Seniors and Technology",
  name: "Conceptos básicos de Medicare",
  skills: "Conocer las Partes A, B, C y D, Comparar Original Medicare y Medicare Advantage, Proteger tu número de Medicare, Encontrar tu período de inscripción, Revisar tu plan cada otoño, Recibir ayuda gratis de SHIP",
  outcome: "explicar qué cubren las Partes A, B, C y D, calcular tu propio período de inscripción, hacer la lista de lo que necesitas para comparar planes y recibir ayuda gratis e imparcial de tu State Health Insurance Assistance Program (SHIP, el programa estatal de asesoría sobre seguros médicos) o de 1-800-MEDICARE.",
  about: [
    "Este curso es para personas que van a cumplir 65 años, personas que ya tienen Medicare y lo encuentran confuso, y familiares que ayudan a un padre, una madre o un abuelo con su seguro médico.",
    "Vas a aprender qué cubre cada parte de Medicare, la diferencia entre Original Medicare y Medicare Advantage, cuándo puedes inscribirte o hacer cambios, cómo proteger tu número de Medicare de las estafas y dónde recibir ayuda gratis de una persona real.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas, fechas y costos de Medicare cambian. Confírmalos siempre en medicare.gov, llamando al 1-800-MEDICARE o con tu consejero local de SHIP, y pregunta a tu médico o farmacéutico sobre tu propia atención."
  ],
  finalTask: "Haz un plan de Medicare de una página: tu período de inscripción (los meses de tu Initial Enrollment Period, o las fechas de Open Enrollment de este año si ya tienes Medicare), qué partes tienes o necesitas, una lista de tus médicos, medicinas y farmacia, tres preguntas que quieres que te respondan y la ayuda gratis que vas a usar (tu SHIP local, medicare.gov y 1-800-MEDICARE). Luego comunícate con tu SHIP o usa la herramienta para comparar planes de medicare.gov.",
  chapters: [
    {
      name: "Capítulo 1: Las partes de Medicare",
      lessons: [
        {
          title: "Para quién es Medicare, y las Partes A y B",
          minutes: 5,
          goal: "Decir quién puede tener Medicare y qué cubren las Partes A y B.",
          text: [
            "Medicare es el seguro médico del gobierno de EE. UU. para personas de 65 años o más, personas menores de 65 con ciertas discapacidades y personas de cualquier edad con End-Stage Renal Disease (enfermedad renal en etapa terminal, es decir, falla permanente de los riñones). Lo administran los Centers for Medicare & Medicaid Services (CMS), la agencia federal a cargo de Medicare y Medicaid.",
            "Medicare tiene partes, que se nombran con letras. La Parte A es el seguro de hospital. Ayuda a cubrir la atención cuando te internan en un hospital, y también los cuidados paliativos (hospice) y algunos cuidados de salud en el hogar.",
            "La Parte B es el seguro médico. Ayuda a cubrir las visitas al médico, la atención ambulatoria (atención en la que vuelves a casa el mismo día), muchos análisis y servicios preventivos, como algunas pruebas de detección y vacunas.",
            "Juntas, la Parte A y la Parte B se llaman Original Medicare (Medicare Original). La mayoría de las personas no paga una prima mensual por la Parte A si ellas o su cónyuge trabajaron y pagaron impuestos de Medicare el tiempo suficiente. La mayoría paga una prima mensual por la Parte B. Las primas y los deducibles cambian cada año, así que busca las cantidades de este año en medicare.gov o pregunta a SHIP."
          ],
          words: [["Medicare", "el programa de seguro médico del gobierno de EE. UU. para personas de 65 años o más y algunas personas más jóvenes con discapacidades."], ["Prima", "la cantidad que pagas cada mes para tener el seguro."], ["Deducible", "la cantidad que pagas por tu atención antes de que el seguro empiece a pagar."], ["Ambulatoria", "atención en la que vuelves a casa el mismo día, como una visita al médico."]],
          slides: [
            { title: "Para quién es Medicare", bullets: ["Personas de 65 años o más", "Algunas personas menores de 65 con discapacidades", "Personas con falla permanente de los riñones"] },
            { title: "Parte A: seguro de hospital", bullets: ["Estancias en el hospital cuando te internan", "Cuidados paliativos y algunos cuidados en el hogar"] },
            { title: "Parte B: seguro médico", bullets: ["Visitas al médico y atención ambulatoria", "Muchos análisis y servicios preventivos"] },
            { title: "A + B = Original Medicare", bullets: ["La mayoría no paga prima por la Parte A", "La mayoría paga una prima mensual por la Parte B", "Costos de este año: medicare.gov o SHIP"] }
          ],
          sources: [{ name: "CMS: Medicare (Partes A, B y D, quién puede tenerlo)", url: "https://www.cms.gov/about-cms/what-we-do/medicare" }],
          tryIt: "Anota dos tipos de atención que tú o un familiar usaron el último año, como una estancia en el hospital, un chequeo o un análisis de sangre. Al lado de cada uno, escribe si corresponde a la Parte A o a la Parte B.",
          youCanNow: "decir para quién es Medicare y clasificar la atención de todos los días en Parte A o Parte B."
        },
        {
          title: "Partes C y D: Medicare Advantage y planes de medicamentos",
          minutes: 5,
          goal: "Explicar la diferencia entre Original Medicare y un plan Medicare Advantage, y qué cubre la Parte D.",
          text: [
            "La Parte C es Medicare Advantage. Son planes de compañías de seguros privadas aprobadas por Medicare. Un plan Medicare Advantage te da todos tus beneficios de la Parte A y la Parte B en un solo plan, y la mayoría también incluye cobertura de medicamentos. Muchos tienen redes: listas de médicos y hospitales que se espera que uses.",
            "La Parte D es la cobertura de medicamentos recetados. Está disponible para todas las personas con Medicare a través de planes privados aprobados por Medicare. Las personas con Original Medicare normalmente agregan un plan de medicamentos de la Parte D aparte.",
            "Entonces hay dos caminos principales. Camino uno: Original Medicare (A y B), muchas veces con un plan de medicamentos de la Parte D aparte; algunas personas también compran una póliza Medicare Supplement Insurance (Medigap, seguro suplementario) para ayudar con los costos que Original Medicare no paga. Camino dos: un plan Medicare Advantage (Parte C) que junta A, B y normalmente D.",
            "Ningún camino es el mejor para todos. Depende de tus médicos, tus medicinas, dónde vives y viajas, y tu presupuesto. Eso es justo lo que un consejero gratis de SHIP te ayuda a comparar."
          ],
          words: [["Medicare Advantage (Parte C)", "un plan de una compañía privada, aprobado por Medicare, que incluye la Parte A y la Parte B y muchas veces cobertura de medicamentos."], ["Parte D", "la cobertura de medicamentos recetados de Medicare, ofrecida por planes privados."], ["Red", "los médicos, hospitales y farmacias con los que trabaja un plan."], ["Medigap", "Medicare Supplement Insurance: una póliza privada que ayuda a pagar costos que Original Medicare no paga."]],
          slides: [
            { title: "Parte C: Medicare Advantage", bullets: ["Planes privados aprobados por Medicare", "Incluye A y B; la mayoría incluye medicamentos", "Muchas veces usa una red de médicos"] },
            { title: "Parte D: medicamentos recetados", bullets: ["Disponible para todos los que tienen Medicare", "A través de planes privados", "Muchas veces se agrega a Original Medicare"] },
            { title: "Dos caminos principales", bullets: ["Original Medicare + Parte D (+ Medigap para algunos)", "O un plan Medicare Advantage"] },
            { title: "¿Cuál es el mejor para ti?", bullets: ["Tus médicos y medicinas", "Dónde vives y viajas", "Tu presupuesto: pide a SHIP que te ayude a comparar"] }
          ],
          sources: [{ name: "CMS: Planes Medicare Advantage y de la Parte D", url: "https://www.cms.gov/medicare/enrollment-renewal/health-plans" }],
          tryIt: "Haz una lista de todos los médicos que ves y todas las medicinas que tomas, con la dosis, y la farmacia que usas. Si quieres, pide ayuda a un familiar. Guarda esta lista: es lo que necesitas para comparar planes.",
          youCanNow: "explicar las Partes C y D, describir los dos caminos principales de Medicare y hacer la lista que necesitas para comparar planes."
        },
        {
          title: "Proteger tu tarjeta y tu número de Medicare",
          minutes: 4,
          goal: "Reconocer una estafa de Medicare y saber a quién avisar.",
          text: [
            "Tu tarjeta de Medicare roja, blanca y azul tiene tu número de Medicare. Trátala como una tarjeta de crédito. Muéstrala a tus médicos, tu farmacia y tu plan, y guárdala en un lugar seguro.",
            "Los estafadores llaman, mandan mensajes de texto o tocan la puerta haciéndose pasar por Medicare. Pueden ofrecerte un aparato ortopédico, un kit de pruebas o una tarjeta nueva \"gratis\", o decirte que tus beneficios se van a cortar si no les das tu número. Un representante real de Medicare no te va a llamar de repente para pedirte tu número de Medicare o tus datos bancarios.",
            "Revisa tus estados de cuenta. Original Medicare manda un Medicare Summary Notice (resumen de Medicare), y los planes mandan una Explanation of Benefits (explicación de beneficios). Busca atención que nunca recibiste. Si ves algo mal, o si alguien que llama te pide tu número, repórtalo al 1-800-MEDICARE.",
            "Si un nieto o un amigo te ayuda en internet, siéntate con esa persona, usa solo el sitio oficial medicare.gov y nunca escribas tu número de Medicare en un chatbot ni en un sitio web al que llegaste desde un mensaje de texto."
          ],
          steps: ["Guarda tu tarjeta en un lugar seguro y comparte el número solo con tus médicos, tu farmacia y tu plan.", "Cuelga las llamadas inesperadas que te piden tu número.", "Lee cada Medicare Summary Notice o Explanation of Benefits.", "Reporta cualquier cosa que esté mal al 1-800-MEDICARE."],
          words: [["Medicare Summary Notice", "un estado de cuenta de Original Medicare que muestra la atención cobrada con tu número."], ["Explanation of Benefits", "un estado de cuenta de un plan que muestra lo que se cobró y lo que pagó el plan."], ["Estafa", "un engaño para robar dinero o información personal."]],
          slides: [
            { title: "Trata tu tarjeta como una tarjeta de crédito", bullets: ["Muéstrala a tus médicos, tu farmacia y tu plan", "Guárdala en un lugar seguro"] },
            { title: "Señales de estafa", bullets: ["Aparatos ortopédicos, kits de pruebas o una tarjeta nueva \"gratis\"", "\"Tus beneficios se van a cortar\"", "Llamadas inesperadas que piden tu número"] },
            { title: "Revisa tus estados de cuenta", bullets: ["Medicare Summary Notice o Explanation of Benefits", "Busca atención que nunca recibiste", "Reporta problemas al 1-800-MEDICARE"] }
          ],
          sources: [{ name: "Medicare.gov: Reportar fraude (confirma aquí los pasos actuales)", url: "https://www.medicare.gov/fraud" }],
          tryIt: "Busca tu Medicare Summary Notice o Explanation of Benefits más reciente (o pide a un familiar que te ayude a encontrarlo). Revisa tres líneas: ¿cada una es atención que de verdad recibiste?",
          youCanNow: "mantener seguro tu número de Medicare, revisar tus estados de cuenta para encontrar problemas y saber dónde reportar una estafa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Las partes de Medicare",
        questions: [
          { q: "¿Qué parte de Medicare es el seguro de hospital?", options: ["Parte D", "Parte A", "Parte B", "Medigap"], answer: 1, why: "La Parte A ayuda a cubrir estancias en el hospital, cuidados paliativos y algunos cuidados de salud en el hogar." },
          { q: "Tu abuela tiene un chequeo con el médico. ¿Qué parte normalmente ayuda a pagarlo?", options: ["Parte A", "Parte D", "Parte B", "Ninguna"], answer: 2, why: "La Parte B cubre visitas al médico y atención ambulatoria." },
          { q: "¿Qué es Medicare Advantage?", options: ["Un plan privado aprobado por Medicare que incluye las Partes A y B", "Un teléfono gratis", "Un pago del Seguro Social", "Un tipo de hospital"], answer: 0, why: "Los planes de la Parte C son planes privados que juntan A, B y normalmente cobertura de medicamentos." },
          { q: "¿Dónde debes buscar la prima de la Parte B de este año?", options: ["En un mensaje de texto de un desconocido", "En el periódico del año pasado", "En lo que adivine un vecino", "En medicare.gov o con tu consejero de SHIP"], answer: 3, why: "Las primas cambian cada año; consulta la fuente oficial." },
          { q: "Alguien llama diciendo que es de Medicare y que necesita tu número de Medicare para mandarte un aparato ortopédico gratis. ¿Qué haces?", options: ["Le das el número", "Cuelgas y lo reportas al 1-800-MEDICARE", "Le das tu número de banco en su lugar", "Le devuelves la llamada al número que te dio"], answer: 1, why: "Medicare no llama de repente para pedir tu número; es una estafa común." }
        ]
      }
    },
    {
      name: "Capítulo 2: Inscribirte a tiempo y recibir ayuda",
      lessons: [
        {
          title: "Encontrar tu período de inscripción",
          minutes: 6,
          goal: "Calcular tu propio Initial Enrollment Period y saber qué pasa si no te inscribes a tiempo.",
          text: [
            "Tu primera oportunidad para inscribirte es tu Initial Enrollment Period (período de inscripción inicial). Dura 7 meses: empieza 3 meses antes del mes en que cumples 65 años, incluye el mes de tu cumpleaños y termina 3 meses después. Ejemplo de CMS: si cumples 65 en junio, tu período va de marzo a septiembre.",
            "Si ya recibes beneficios del Social Security (Seguro Social, la agencia federal de jubilación) cuando cumples 65, normalmente te inscriben en las Partes A y B automáticamente. Si no, te inscribes a través del Seguro Social. Revisa ssa.gov o llama al Seguro Social para confirmar cómo funciona en tu caso.",
            "Si tú o tu cónyuge todavía trabajan y tienen seguro médico por ese trabajo, es posible que puedas esperar. CMS dice que puedes inscribirte mientras tienes esa cobertura, o dentro de los 8 meses después de que termine el trabajo o la cobertura, lo que pase primero. Esto es un Special Enrollment Period (período de inscripción especial). Pregunta a la oficina de beneficios de tu empleador y a SHIP antes de decidir esperar.",
            "Si no te inscribes a tiempo y no calificas para un Special Enrollment Period, puedes inscribirte en el General Enrollment Period (período de inscripción general), del 1 de enero al 31 de marzo de cada año, y la cobertura empieza el mes siguiente a tu inscripción. Pero puedes pagar una multa por inscripción tardía mientras tengas la Parte B: CMS dice que la prima puede subir un 10% por cada período completo de 12 meses en que pudiste tener la Parte B y no la tuviste. También puede haber una multa por estar sin cobertura de medicamentos; pregunta a SHIP o revisa medicare.gov."
          ],
          steps: ["Escribe el mes en que cumples 65 años.", "Cuenta 3 meses hacia atrás y 3 meses hacia adelante: ese es tu período de 7 meses.", "Si tienes seguro médico por tu trabajo, pregunta a tu empleador y a SHIP si puedes esperar.", "Anota en tu calendario el primer mes de tu período.", "Confirma los detalles en ssa.gov, medicare.gov o con SHIP."],
          words: [["Initial Enrollment Period", "tu primer período de 7 meses para inscribirte en Medicare, alrededor de tu cumpleaños número 65."], ["Special Enrollment Period", "una oportunidad de inscribirte fuera de los períodos normales por una situación de vida, como perder la cobertura del trabajo."], ["General Enrollment Period", "del 1 de enero al 31 de marzo de cada año, para quienes no se inscribieron en su primer período."], ["Multa por inscripción tardía", "una prima más alta que pagas por inscribirte tarde."]],
          slides: [
            { title: "Initial Enrollment Period: 7 meses", bullets: ["3 meses antes del mes en que cumples 65", "El mes de tu cumpleaños", "3 meses después"] },
            { title: "Ejemplo", bullets: ["Cumples 65 en junio", "Período: de marzo a septiembre"] },
            { title: "¿Todavía trabajas y tienes seguro del trabajo?", bullets: ["Es posible que puedas esperar", "Inscríbete dentro de los 8 meses después de que termine", "Pregunta primero a tu empleador y a SHIP"] },
            { title: "¿No te inscribiste a tiempo?", bullets: ["General Enrollment: del 1 de enero al 31 de marzo", "Multa de la Parte B: hasta 10% por cada año completo de retraso", "Confirma en medicare.gov o con SHIP"] }
          ],
          sources: [
            { name: "CMS: Original Medicare (Partes A y B), quién puede tenerlo e inscripción", url: "https://www.cms.gov/medicare/enrollment-renewal/original-part-a-b" },
            { name: "Seguro Social: Inscribirse en Medicare", url: "https://www.ssa.gov/medicare/sign-up" }
          ],
          tryIt: "Calcula el Initial Enrollment Period para ti o para un familiar: escribe el mes del cumpleaños y luego el primer y el último mes del período de 7 meses. Si esa persona ya tiene Medicare, escribe en su lugar las fechas del General Enrollment Period.",
          youCanNow: "calcular un Initial Enrollment Period, saber cuándo puedes esperar y conocer el costo de inscribirte tarde."
        },
        {
          title: "Revisar tu cobertura cada otoño",
          minutes: 5,
          goal: "Usar el período de Open Enrollment de otoño para ver si tu plan todavía te conviene.",
          text: [
            "Los planes cambian cada año: los costos, los medicamentos cubiertos y qué médicos están en la red. Cada otoño, Medicare tiene un período de Open Enrollment (inscripción abierta) del 15 de octubre al 7 de diciembre. Durante ese tiempo puedes cambiar tu plan Medicare Advantage o tu plan de medicamentos de la Parte D, o cambiarte entre Original Medicare y Medicare Advantage. Los cambios empiezan el 1 de enero. Si estás contento con tu cobertura, no tienes que hacer nada.",
            "Antes de Open Enrollment, los planes mandan un Annual Notice of Change (aviso anual de cambios). Léelo para ver cambios en tu prima, tus medicamentos y tus médicos.",
            "Para comparar planes, usa la herramienta para comparar planes de medicare.gov. Escribe tus medicinas y tu farmacia de la lista que hiciste en la lección 2. Mira el costo total del año, no solo la prima mensual, y revisa que tus médicos estén en la red.",
            "Ten cuidado con las llamadas de venta insistentes y los anuncios en el otoño. Nadie debe presionarte para cambiar. Un consejero de SHIP es gratis y no vende planes. Las personas con Medicare Advantage pueden tener otra oportunidad de cambiar de plan a principios del año; revisa las fechas en medicare.gov."
          ],
          steps: ["Lee el Annual Notice of Change de tu plan cuando llegue.", "Ten a mano tu lista de médicos, medicinas y farmacia.", "Entre el 15 de octubre y el 7 de diciembre, compara planes en medicare.gov o con SHIP.", "Revisa el costo total del año y que tus médicos estén en la red.", "Si te cambias, anota el nuevo plan y el número de confirmación."],
          words: [["Open Enrollment", "del 15 de octubre al 7 de diciembre de cada año, cuando las personas con Medicare pueden cambiar de plan para el año siguiente."], ["Annual Notice of Change", "una carta de tu plan cada otoño que muestra lo que va a cambiar el año siguiente."], ["Formulario de medicamentos", "la lista de medicamentos que cubre un plan."]],
          slides: [
            { title: "Los planes cambian cada año", bullets: ["Costos, medicamentos cubiertos, redes de médicos", "Lee tu Annual Notice of Change"] },
            { title: "Open Enrollment", bullets: ["Del 15 de octubre al 7 de diciembre", "Cambia de plan; el nuevo plan empieza el 1 de enero", "¿Estás contento? No tienes que hacer nada"] },
            { title: "Compara de la forma correcta", bullets: ["Escribe tus medicinas y tu farmacia", "Mira el costo total del año", "Revisa que tus médicos estén en la red"] },
            { title: "Sin presión", bullets: ["No hagas caso a las llamadas de venta insistentes", "SHIP es gratis y no vende planes"] }
          ],
          sources: [
            { name: "CMS: Materiales de difusión sobre Open Enrollment de Medicare", url: "https://www.cms.gov/outreach-and-education/reach-out/find-tools-to-help-you-help-others/open-enrollment-outreach-and-media-materials" },
            { name: "Medicare.gov: Buscar y comparar planes", url: "https://www.medicare.gov/plan-compare/" }
          ],
          tryIt: "Anota en tu calendario las fechas de Open Enrollment de este año. Luego busca el Annual Notice of Change de tu plan (o pide a un familiar que te ayude) y escribe una cosa que va a cambiar el año que viene. Si todavía no tienes Medicare, escribe las preguntas que harías sobre un plan.",
          youCanNow: "usar el período de Open Enrollment de otoño para revisar tu plan y comparar opciones con tus propias medicinas y médicos."
        },
        {
          title: "Recibir ayuda gratis de SHIP y de Medicare",
          minutes: 5,
          goal: "Comunicarte con ayuda gratis e imparcial sobre Medicare y llegar preparado con tus preguntas.",
          text: [
            "No tienes que entender Medicare tú solo. Cada estado tiene un State Health Insurance Assistance Program, o SHIP. SHIP da asesoría sobre Medicare local y personal, sin costo para ti. Los consejeros son imparciales: no venden seguros. Pueden ayudarte a comparar los costos de los planes, revisar tu cobertura, revisar las redes y explicarte tus opciones. Encuentra el tuyo en shiphelp.org.",
            "La ayuda de Medicare: el sitio web oficial medicare.gov y la línea telefónica 1-800-MEDICARE (1-800-633-4227), que según CMS está abierta las 24 horas del día, los 7 días de la semana. Para preguntas sobre la inscripción en las Partes A y B, comunícate con el Seguro Social en ssa.gov.",
            "Prepárate antes de llamar: ten cerca tu tarjeta de Medicare (no le leas el número a nadie que te haya llamado a ti), tu lista de médicos y medicinas, las cartas de tu plan y tus preguntas por escrito. Toma notas: la fecha, el nombre de la persona y lo que te dijo.",
            "Un familiar puede participar en la llamada con tu permiso. Si le pides a un asistente de IA que te explique una carta de Medicare, primero quita tu nombre, tu número de Medicare y otros datos privados, y aun así confirma la respuesta con SHIP o en medicare.gov."
          ],
          steps: ["Entra a shiphelp.org y elige tu estado para encontrar tu SHIP local.", "Escribe tus preguntas y reúne tu lista de médicos y medicinas.", "Llama a SHIP o al 1-800-MEDICARE, o usa medicare.gov.", "Toma notas: fecha, nombre y respuesta.", "Anota la próxima fecha límite en tu calendario."],
          words: [["SHIP", "State Health Insurance Assistance Program: asesoría local sobre Medicare, gratis e imparcial."], ["Imparcial", "que no intenta venderte nada ni empujarte hacia una sola opción."]],
          slides: [
            { title: "SHIP: ayuda local gratis", bullets: ["Asesoría personal sobre Medicare", "Sin costo, no vende seguros", "Encuentra el tuyo en shiphelp.org"] },
            { title: "La ayuda de Medicare", bullets: ["medicare.gov", "1-800-MEDICARE (1-800-633-4227), 24/7", "Preguntas sobre inscripción: ssa.gov"] },
            { title: "Antes de llamar", bullets: ["Tu lista de médicos y medicinas", "Las cartas de tu plan", "Tus preguntas por escrito"] },
            { title: "Durante la llamada", bullets: ["Toma notas: fecha, nombre, respuesta", "Un familiar puede participar", "Anota la próxima fecha límite en tu calendario"] }
          ],
          sources: [
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" },
            { name: "Medicare.gov: Hablar con alguien (confirma aquí el horario de atención)", url: "https://www.medicare.gov/talk-to-someone" }
          ],
          tryIt: "Tarea final: haz tu plan de Medicare de una página con tu período de inscripción, las partes que tienes o necesitas, tus médicos, medicinas y farmacia, tres preguntas y el número de teléfono de tu SHIP que encuentres en shiphelp.org. Luego llama a tu SHIP para pedir una cita de asesoría, o usa la herramienta para comparar planes de medicare.gov con tu lista de medicinas.",
          youCanNow: "encontrar ayuda gratis sobre Medicare, comunicarte con ella y llegar preparado con tu propio plan y tus preguntas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Inscribirte a tiempo y recibir ayuda",
        questions: [
          { q: "Cumples 65 años en junio. ¿Cuándo es tu Initial Enrollment Period?", options: ["Solo en junio", "De enero a marzo", "Del 15 de octubre al 7 de diciembre", "De marzo a septiembre"], answer: 3, why: "Empieza 3 meses antes del mes de tu cumpleaños y termina 3 meses después." },
          { q: "¿Qué puede pasar si te inscribes tarde en la Parte B sin un Special Enrollment Period?", options: ["Puedes pagar una prima más alta mientras tengas la Parte B", "No pasa nada", "Te devuelven dinero", "Nunca podrás tener Medicare"], answer: 0, why: "CMS dice que la prima de la Parte B puede subir un 10% por cada 12 meses completos de retraso." },
          { q: "¿Cuándo es el Open Enrollment de otoño de Medicare?", options: ["Del 1 de enero al 31 de marzo", "El mes de tu cumpleaños", "Del 15 de octubre al 7 de diciembre", "Cualquier día que quieras"], answer: 2, why: "Cada otoño, las personas con Medicare pueden cambiar de plan del 15 de octubre al 7 de diciembre." },
          { q: "¿Cuál es la mejor forma de comparar planes de medicamentos?", options: ["Elegir solo la prima mensual más baja", "Escribir tus propias medicinas y tu farmacia y mirar el costo total del año", "Elegir el plan que recomienda alguien que te llama", "Elegir el plan con el anuncio más bonito"], answer: 1, why: "El costo total del año con tus propias medicinas muestra el precio real." },
          { q: "¿Qué es cierto sobre SHIP?", options: ["Vende planes de seguro", "Cobra por cada llamada", "Da asesoría sobre Medicare gratis e imparcial", "Solo ayuda a personas menores de 65"], answer: 2, why: "La asesoría de SHIP es gratis, local e imparcial." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Conceptos básicos de Medicare",
    questions: [
      { q: "¿Quién puede tener Medicare?", options: ["Solo personas menores de 30", "Personas de 65 años o más, y algunas personas más jóvenes con discapacidades o falla de los riñones", "Solo veteranos", "Solo personas que viven en el extranjero"], answer: 1, why: "Medicare cubre a personas de 65 o más, a algunas personas con discapacidades y a personas con End-Stage Renal Disease." },
      { q: "La Parte B cubre principalmente:", options: ["Estancias en el hospital", "Solo medicamentos recetados", "Solo limpiezas dentales", "Visitas al médico y atención ambulatoria"], answer: 3, why: "La Parte B es el seguro médico para médicos y atención ambulatoria." },
      { q: "Original Medicare es:", options: ["La Parte A y la Parte B", "Solo la Parte C", "Solo la Parte D", "Un plan privado"], answer: 0, why: "Original Medicare significa las Partes A y B juntas." },
      { q: "La mayoría de las personas paga una prima mensual por:", options: ["Nada", "Solo la Parte A", "La Parte B", "Su tarjeta de Medicare"], answer: 2, why: "La mayoría no paga prima por la Parte A, pero sí paga una por la Parte B." },
      { q: "La Parte D cubre:", options: ["Medicamentos recetados", "Estancias en el hospital", "Solo anteojos", "Vivienda"], answer: 0, why: "La Parte D es la cobertura de medicamentos recetados de Medicare." },
      { q: "Un plan Medicare Advantage normalmente:", options: ["Cubre solo medicamentos", "Incluye las Partes A y B y muchas veces cobertura de medicamentos", "Lo administra tu banco", "Reemplaza al Seguro Social"], answer: 1, why: "Los planes de la Parte C juntan A, B y normalmente D." },
      { q: "¿Qué es la red de un plan?", options: ["Su sitio web", "Su número de teléfono", "Los médicos, hospitales y farmacias con los que trabaja", "Su factura mensual"], answer: 2, why: "Muchos planes esperan que uses su red." },
      { q: "¿Qué debes tener listo para comparar planes?", options: ["El PIN de tu banco", "Un anuncio del periódico", "Nada", "Una lista de tus médicos, medicinas y farmacia"], answer: 3, why: "Tus propios médicos y medicinas deciden qué plan te conviene." },
      { q: "Alguien que llama te ofrece un kit de pruebas gratis si le das tu número de Medicare. Esto es:", options: ["Un servicio normal de Medicare", "Probablemente una estafa", "Un resurtido de la farmacia", "Un consejero de SHIP"], answer: 1, why: "Medicare no llama de repente para pedir tu número; las ofertas gratis son un engaño común." },
      { q: "Tu Medicare Summary Notice muestra una silla de ruedas que nunca recibiste. Debes:", options: ["Reportarlo al 1-800-MEDICARE", "No hacerle caso", "Pagarla", "Tirar el aviso"], answer: 0, why: "La atención que nunca recibiste puede ser fraude; repórtala." },
      { q: "¿Cuánto dura el Initial Enrollment Period?", options: ["1 semana", "1 mes", "1 año", "7 meses"], answer: 3, why: "3 meses antes, el mes del cumpleaños y 3 meses después." },
      { q: "Recibes beneficios del Seguro Social antes de los 65. Normalmente:", options: ["Nunca puedes tener Medicare", "Te cobran una multa", "Te inscriben en las Partes A y B automáticamente", "Te pasan solo a la Parte D"], answer: 2, why: "A quienes ya reciben Seguro Social normalmente los inscriben automáticamente; confírmalo en ssa.gov." },
      { q: "Tienes 66 años y todavía tienes seguro médico de tu trabajo actual. ¿Qué debes hacer antes de decidir esperar para la Parte B?", options: ["Nada; esperar siempre está bien", "Cancelar el seguro de tu trabajo", "Preguntar a la oficina de beneficios de tu empleador y a SHIP", "Preguntar a un vendedor que te llama"], answer: 2, why: "Puede aplicar un Special Enrollment Period, pero revisa primero tu situación." },
      { q: "El General Enrollment Period va:", options: ["Del 1 de enero al 31 de marzo", "Del 15 de octubre al 7 de diciembre", "Solo el día de tu cumpleaños", "De junio a agosto"], answer: 0, why: "CMS fija el General Enrollment Period del 1 de enero al 31 de marzo de cada año." },
      { q: "La multa por inscripción tardía de la Parte B puede subir la prima:", options: ["1% una sola vez", "50% durante un mes", "Nada", "10% por cada 12 meses completos en que pudiste tener la Parte B y no la tuviste"], answer: 3, why: "CMS dice que la multa es de hasta 10% por cada período completo de 12 meses, mientras tengas la Parte B." },
      { q: "Durante el Open Enrollment de otoño puedes:", options: ["Cambiar tu número de Seguro Social", "Cambiar tu plan Medicare Advantage o de medicamentos para el año siguiente", "Recibir dinero en efectivo de Medicare", "Solo cancelar Medicare"], answer: 1, why: "Del 15 de octubre al 7 de diciembre puedes cambiar de plan para el 1 de enero." },
      { q: "Cada otoño tu plan te manda una carta con los cambios del año siguiente. Es el:", options: ["Annual Notice of Change", "Tarjeta de cumpleaños", "Declaración de impuestos", "Reporte de crédito"], answer: 0, why: "Lee el Annual Notice of Change antes de Open Enrollment." },
      { q: "¿Dónde encuentras tu SHIP local?", options: ["En un anuncio emergente", "En un enlace de un mensaje de texto", "En shiphelp.org", "Con cualquier agente de seguros"], answer: 2, why: "shiphelp.org tiene el SHIP de cada estado." },
      { q: "Quieres pedirle a un asistente de IA que te explique una carta de Medicare. Primero debes:", options: ["Pegar tu número de Medicare", "Agregar tus datos bancarios", "Mandar una foto de tu tarjeta", "Quitar tu nombre, tu número de Medicare y otros datos privados"], answer: 3, why: "Nunca compartas números privados con herramientas de IA; después confirma con SHIP o en medicare.gov." },
      { q: "Cuando llamas a SHIP o al 1-800-MEDICARE, un buen hábito es:", options: ["Colgar rápido", "Tomar notas: fecha, nombre y respuesta", "Leerle tu número a cualquiera que te haya llamado", "Olvidar tus preguntas"], answer: 1, why: "Las notas te ayudan a recordar y a dar seguimiento." }
    ]
  }
};

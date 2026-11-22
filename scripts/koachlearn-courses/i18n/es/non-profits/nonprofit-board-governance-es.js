"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-board-governance.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-board-governance-es",
  lang: "es",
  translationOf: "nonprofit-board-governance",
  category: "Non Profits",
  name: "Gobierno de la junta directiva de una organización sin fines de lucro",
  skills: "Deberes de la junta: cuidado, lealtad y obediencia, Funciones de la junta y del personal, Estatutos, reuniones y actas, Manejo de conflictos de intereses, Supervisión financiera y Formulario 990, Reclutamiento de miembros de la junta",
  outcome: "servir en una junta directiva sin fines de lucro o dirigirla bien: explicar los deberes legales de la junta, mantener claras las funciones de la junta y del personal, dirigir una reunión como se debe y escribir el acta, manejar un conflicto de intereses, revisar las finanzas y los trámites anuales, y reclutar a los nuevos miembros adecuados.",
  about: [
    "Este curso es para miembros de juntas directivas sin fines de lucro, fundadores, directores ejecutivos, líderes de iglesias y grupos comunitarios, y cualquier persona a la que inviten a unirse a una junta por primera vez.",
    "La junta es legalmente responsable de la organización. Vas a aprender los tres deberes principales de la junta, cómo se reparten el trabajo la junta y el personal, para qué sirven los estatutos, cómo dirigir reuniones y escribir actas, cómo manejar los conflictos de intereses, qué informes financieros y qué Formulario 990 del IRS (la agencia federal de impuestos de Estados Unidos) debe revisar una junta, las reglas de registro de organizaciones benéficas de California y cómo reclutar buenos miembros para la junta.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\" que puedes hacer con los documentos de tu propia organización. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso es educación general, no asesoría legal ni fiscal. Las reglas cambian de un estado a otro y con el tiempo, así que revisa las fuentes oficiales que se nombran en las lecciones y pide consejo a un abogado o contador de organizaciones sin fines de lucro para tu caso."
  ],
  finalTask: "Haz una lista de control de una página sobre el gobierno de la junta para una organización sin fines de lucro real o de ejemplo: los tres deberes en palabras sencillas, cómo se reparten entre la junta y el personal cinco decisiones comunes, un orden del día de reunión con un modelo de acta, una lista de pasos para los conflictos de intereses, un calendario anual de revisiones financieras y trámites (qué versión del Formulario 990, su fecha límite y cualquier registro estatal, como el Registro de Organizaciones Benéficas y Recaudadores de Fondos de California) y un plan para llenar dos puestos vacantes basado en una tabla de habilidades.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Miembros de juntas directivas de organizaciones sin fines de lucro, fundadores, directores ejecutivos, líderes de iglesias y grupos comunitarios, y personas a las que les piden entrar a una junta por primera vez.",
    startingPoint: "Les importa una misión y quizás han ido a reuniones de la junta. Muchos nunca han leído sus estatutos, escrito un acta, revisado un Formulario 990 ni manejado un conflicto de intereses.",
    gap: "Una junta es legalmente responsable de su organización. Los miembros que no conocen sus deberes, el límite entre la junta y el personal o los trámites anuales ponen en riesgo la exención de impuestos, el dinero y la reputación de la organización. Una lista de verificación clara les ayuda a gobernar bien y a mantener la confianza del público.",
    constraints: [
      "Voluntarios con poco tiempo; lecciones de 5 minutos",
      "Las reglas cambian según el estado y con el tiempo; se revisan en irs.gov y en la oficina estatal de organizaciones benéficas",
      "Educación general, no asesoría legal ni fiscal; las decisiones serias se consultan con un abogado o contador de organizaciones sin fines de lucro",
      "Palabras sencillas para miembros nuevos de juntas y grupos pequeños formados solo por voluntarios"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante una decisión o situación de la junta", action: "explicar los deberes de cuidado, lealtad y obediencia e identificar cuál deber está en riesgo", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Usando tus estatutos y una tabla de habilidades", action: "repartir decisiones comunes entre la junta y el personal, encontrar las reglas clave de los estatutos y planear cómo llenar los puestos vacantes de la junta", standard: "con cinco decisiones repartidas y dos puestos asignados a habilidades que faltan" },
    { id: "O3", condition: "Para una próxima reunión de la junta", action: "escribir una agenda con una agenda de consentimiento y redactar un acta con asistencia, quórum, mociones, votos y acciones", standard: "con todas las partes obligatorias del acta" },
    { id: "O4", condition: "Cuando un miembro de la junta, su familia o su negocio podría ganar con una decisión", action: "seguir los pasos para un conflicto de intereses: declararlo, salirse, revisar que el trato sea justo y anotarlo", standard: "en el orden correcto y anotado en el acta" },
    { id: "O5", condition: "Con los ingresos, los bienes y la fecha de cierre del año de una organización sin fines de lucro", action: "revisar sus informes financieros y armar un calendario anual de su Formulario 990 y sus trámites estatales", standard: "con la versión y la fecha límite confirmadas en irs.gov y en el sitio de la oficina estatal de organizaciones benéficas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Qué hace una junta directiva",
      lessons: [
        {
          objectives: ["O1"],
          title: "Los tres deberes: cuidado, lealtad y obediencia",
          minutes: 5,
          goal: "Explicar los tres deberes principales de la junta y darte cuenta cuando uno está en riesgo.",
          text: [
            "Los miembros de la junta de una organización sin fines de lucro cuidan la organización en nombre del público y de las personas a las que sirve. Esa confianza se suele describir como tres deberes.",
            "Deber de cuidado: poner atención y tomar decisiones informadas. Ve a las reuniones, lee los informes, haz preguntas y usa el buen juicio. Deber de lealtad: poner los intereses de la organización antes que los tuyos, y nunca usar tu puesto para beneficiarte tú, tu familia o tu negocio. Deber de obediencia: asegurarte de que la organización cumpla su misión, sus propios estatutos y la ley.",
            "Estos deberes son de todos los miembros de la junta, no solo del presidente o del tesorero. \"No leí el presupuesto\" no es una excusa. Las reglas legales exactas cambian según el estado, así que consulta a un abogado de organizaciones sin fines de lucro cuando una decisión sea seria."
          ],
          words: [["Junta directiva", "el grupo legalmente responsable de supervisar una organización sin fines de lucro."], ["Deber fiduciario", "el deber legal de actuar en el mejor interés de otro; los miembros de la junta lo tienen con la organización."], ["Deber de cuidado", "tomar decisiones informadas y cuidadosas."], ["Deber de lealtad", "poner los intereses de la organización antes que los tuyos."], ["Deber de obediencia", "mantener a la organización fiel a su misión, sus estatutos y la ley."]],
          slides: [
            { title: "Cuidas la organización en nombre de otros", bullets: ["Del público y de las personas a las que sirve", "Tres deberes principales"] },
            { title: "Cuidado, lealtad, obediencia", bullets: ["Cuidado: asiste, lee, pregunta, decide con juicio", "Lealtad: primero la organización, nunca tú", "Obediencia: misión, estatutos y la ley"] },
            { title: "Cada miembro, cada vez", bullets: ["No solo el presidente o el tesorero", "\"No lo leí\" no es una excusa", "¿Decisión seria? Consulta a un abogado de organizaciones sin fines de lucro"] }
          ],
          tryIt: "Escribe un ejemplo real de cada deber para una organización sin fines de lucro que conozcas, como un banco de alimentos, una iglesia o una liga deportiva juvenil. Luego escribe una acción que rompería cada deber.",
          youCanNow: "explicar los deberes de cuidado, lealtad y obediencia y darte cuenta cuando uno está en riesgo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué le pide el deber de lealtad a un miembro de la junta?", options: ["Llegar a tiempo a todas las reuniones", "Seguir los estatutos y la ley", "Poner los intereses de la organización antes que los suyos", "Recaudar la mayor cantidad de dinero"], answer: 2, why: "La lealtad significa no usar nunca tu puesto para beneficiarte a ti, a tu familia o a tu negocio." },
            { objective: "O1", q: "Un miembro dice: \"Yo no leo los informes; el tesorero se encarga del dinero\". ¿Qué le dices?", options: ["Todos los miembros tienen el deber de cuidado, así que hay que leer los informes y hacer preguntas", "Está bien; solo el tesorero es responsable", "Pídele al personal que vote por ti", "No votes en temas de dinero"], answer: 0, why: "Los tres deberes son de todos los miembros de la junta, y no leer el presupuesto no es excusa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Funciones de la junta y del personal, y los estatutos",
          minutes: 6,
          goal: "Repartir decisiones comunes entre la junta y el personal y encontrar las reglas clave en tus estatutos.",
          text: [
            "En la mayoría de las organizaciones sin fines de lucro con personal pagado, la junta marca el rumbo y supervisa; el personal hace el trabajo diario. La junta aprueba la misión, la estrategia y el presupuesto; contrata, apoya y evalúa al director ejecutivo; vigila el dinero y los riesgos; y ayuda a recaudar fondos. El director ejecutivo dirige los programas, contrata y dirige al resto del personal y toma las decisiones diarias.",
            "Los problemas empiezan cuando una junta controla cada detalle del trabajo del personal, o cuando una junta aprueba todo sin hacer preguntas. En grupos pequeños formados solo por voluntarios, los miembros de la junta muchas veces también hacen trabajo práctico, así que ten claro qué \"sombrero\" llevas puesto.",
            "Los estatutos son el reglamento propio de la organización. Por lo general fijan el número de miembros de la junta, cómo se eligen y por cuánto tiempo, los cargos directivos, cómo se convocan las reuniones, cuántos miembros forman el quórum y cómo se vota. Ten una copia actual, léela y cúmplela. Cambia los estatutos solo con el proceso que ellos mismos describen."
          ],
          steps: ["Haz una lista de cinco decisiones comunes (presupuesto, contratar personal, un programa nuevo, un contrato grande, la fecha de un evento).", "Marca cada una como de la junta, del personal o de ambos.", "Abre tus estatutos y busca: tamaño de la junta, periodos, cargos directivos, quórum y reglas de votación.", "Anota lo que tu junta no esté cumpliendo."],
          words: [["Director ejecutivo", "el líder principal del personal, que dirige la organización día a día y rinde cuentas a la junta."], ["Estatutos", "las reglas de la organización sobre cómo funcionan la junta y la organización."], ["Quórum", "el número mínimo de miembros que deben estar presentes para que una reunión pueda tomar decisiones."], ["Microgestión", "controlar los pequeños detalles del trabajo de otra persona."]],
          slides: [
            { title: "Junta: rumbo y supervisión", bullets: ["Misión, estrategia y presupuesto", "Contrata y evalúa al director ejecutivo", "Vigila el dinero y los riesgos, ayuda a recaudar fondos"] },
            { title: "Personal: el trabajo diario", bullets: ["Dirige los programas", "Contrata y dirige al resto del personal", "Decisiones diarias"] },
            { title: "Dos trampas", bullets: ["Controlar cada detalle del personal", "Aprobar todo sin hacer preguntas", "¿Solo voluntarios? Ten claro qué sombrero llevas"] },
            { title: "Estatutos: tu reglamento", bullets: ["Tamaño de la junta, periodos, cargos directivos", "Reuniones, quórum, votación", "Léelos, cúmplelos y cámbialos solo con su proceso"] }
          ],
          tryIt: "Consigue los estatutos de tu organización (o un ejemplo de una organización sin fines de lucro que conozcas). Busca el tamaño de la junta, la duración de los periodos, el quórum y cómo se vota. Luego reparte cinco decisiones comunes entre la junta, el personal o ambos.",
          youCanNow: "mantener claras las funciones de la junta y del personal y encontrar las reglas clave en unos estatutos.",
          quickCheck: [
            { objective: "O2", q: "¿Qué son los estatutos?", options: ["Las reglas de impuestos del estado", "La descripción del puesto del director ejecutivo", "Una lista de donantes", "El reglamento propio de la organización, como el tamaño de la junta, los periodos, el quórum y las votaciones"], answer: 3, why: "Los estatutos son las reglas propias de la organización sobre cómo funciona la junta." },
            { objective: "O2", q: "La presidenta de la junta empieza a decirle al personal de los programas cómo hacer cada actividad diaria. ¿Cuál es el problema?", options: ["Ninguno; la presidenta dirige el trabajo diario", "La junta está microgestionando; el trabajo diario le corresponde al personal dirigido por el director ejecutivo", "La presidenta también debería hacer la nómina", "El personal debería votar el presupuesto en su lugar"], answer: 1, why: "La junta marca la dirección y supervisa; el personal hace el trabajo diario." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reuniones de la junta y actas",
          minutes: 5,
          goal: "Dirigir una reunión de la junta que cumpla los estatutos y escribir un acta clara.",
          text: [
            "Envía el orden del día y los informes con varios días de anticipación para que los miembros se preparen. Muchas juntas usan una agenda de consentimiento para los asuntos de rutina (como aprobar el acta de la reunión anterior) y así dedicar tiempo a las preguntas importantes.",
            "Confirma que hay quórum antes de votar. En cada decisión, alguien presenta una moción, la junta la discute y el presidente la somete a votación. Los miembros con un conflicto de intereses se retiran de la discusión y de la votación.",
            "El acta es el registro oficial. Incluye la fecha, quiénes estuvieron presentes, si hubo quórum, cada moción y el resultado de la votación, los conflictos declarados y las tareas con su responsable. Que sea breve y objetiva; no es una transcripción palabra por palabra. Apruébala en la siguiente reunión y guárdala en un lugar seguro."
          ],
          steps: ["Envía el orden del día y los informes con días de anticipación.", "Usa una agenda de consentimiento para los asuntos de rutina.", "Confirma que hay quórum antes de cualquier votación.", "En cada decisión: moción, discusión, votación.", "Escribe el acta: fecha, asistencia, quórum, mociones, votos, conflictos, tareas.", "Aprueba el acta en la siguiente reunión y guárdala en un lugar seguro."],
          words: [["Acta", "el registro escrito oficial de lo que decidió la junta en una reunión."], ["Moción", "una propuesta formal para que la junta la vote."], ["Agenda de consentimiento", "un grupo de asuntos de rutina que se aprueban con una sola votación."]],
          slides: [
            { title: "Antes de la reunión", bullets: ["Orden del día e informes con días de anticipación", "Agenda de consentimiento para asuntos de rutina"] },
            { title: "Cómo se toman las decisiones", bullets: ["Confirma que hay quórum", "Moción, discusión, votación", "Quien tiene un conflicto se retira"] },
            { title: "Qué registra el acta", bullets: ["Fecha, asistencia y quórum", "Cada moción y el resultado de la votación", "Conflictos declarados, tareas con su responsable"] },
            { title: "El acta no es una transcripción", bullets: ["Breve y objetiva", "Se aprueba en la siguiente reunión", "Se guarda en un lugar seguro"] }
          ],
          tryIt: "Escribe un orden del día de una página para una reunión de la junta, con una sección de agenda de consentimiento y dos temas para discutir. Luego escribe un acta de ejemplo para una moción, con quién la presentó, el conteo de votos y el resultado.",
          youCanNow: "dirigir una reunión de la junta que cumpla las reglas y escribir un acta oficial y clara.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es el acta de la junta?", options: ["Una transcripción palabra por palabra de todo lo que se dijo", "El registro oficial, corto y con hechos, de la reunión", "La agenda que se envía antes de la reunión", "Una lista de los teléfonos de los miembros"], answer: 1, why: "El acta es el registro oficial: quién estuvo, el quórum, las mociones, los votos, los conflictos y las acciones." },
            { objective: "O3", q: "Solo llegan unos pocos miembros y no estás seguro de si pueden votar. ¿Qué revisas primero?", options: ["Si el café está listo", "Si el acta es lo bastante larga", "Si el personal está de acuerdo", "Si hay quórum según los estatutos"], answer: 3, why: "La junta solo puede tomar decisiones cuando hay quórum." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Qué hace una junta directiva",
        questions: [
          { objective: "O1", q: "¿Qué deber significa leer los informes y hacer preguntas antes de votar?", options: ["Deber de lealtad", "Deber de obediencia", "Deber de cuidado", "Deber de silencio"], answer: 2, why: "Cuidado significa tomar decisiones informadas y cuidadosas." },
          { objective: "O1", q: "Un miembro de la junta quiere que la organización le rente un local a su empresa a un precio alto. ¿Qué deber está en riesgo?", options: ["Deber de lealtad", "Deber de cuidado", "Deber de obediencia", "Ninguno"], answer: 0, why: "Lealtad significa poner a la organización antes que tus propios intereses." },
          { objective: "O2", q: "En una organización sin fines de lucro con personal pagado, ¿quién suele contratar al director ejecutivo?", options: ["El voluntario más nuevo", "El director ejecutivo", "Un donante", "La junta"], answer: 3, why: "Contratar y evaluar al director ejecutivo es una tarea central de la junta." },
          { objective: "O3", q: "¿Qué es el quórum?", options: ["La cuenta de banco de la junta", "El número mínimo de miembros presentes para tomar decisiones", "Un tipo de moción", "El presupuesto anual"], answer: 1, why: "Sin quórum, la junta no puede votar de forma válida." },
          { objective: "O3", q: "¿Qué debe ir en el acta de la junta?", options: ["Cada palabra que dijeron todos", "Los chistes de la reunión", "Cada moción y el resultado de la votación", "Las direcciones de casa de los miembros"], answer: 2, why: "El acta registra decisiones, no es una transcripción." }
        ]
      }
    },
    {
      name: "Capítulo 2: Supervisión y formación de la junta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Cómo manejar los conflictos de intereses",
          minutes: 5,
          goal: "Seguir pasos claros cuando un miembro de la junta tiene un conflicto de intereses.",
          text: [
            "Hay un conflicto de intereses cuando un miembro de la junta, o su familia o su negocio, podría salir ganando con una decisión de la junta. Los conflictos son comunes en comunidades pequeñas y no siempre están mal, pero hay que manejarlos de forma abierta.",
            "La mayoría de las juntas adoptan una política escrita de conflicto de intereses y piden a los miembros que firmen cada año un formulario de declaración. Cuando surge un conflicto: el miembro se lo dice a la junta, se retira de la discusión y de la votación, y la junta decide si el trato es justo para la organización, de preferencia después de comparar otras opciones. El acta registra todo esto.",
            "Ejemplo: el primo del tesorero tiene una imprenta que hace una oferta para imprimir el informe anual. El tesorero lo declara y se retira; la junta compara tres cotizaciones y escoge la de mejor valor. Los tratos con personas de adentro pueden tener consecuencias fiscales y legales, así que pide consejo a un abogado o contador en cualquier asunto grande."
          ],
          steps: ["Adopta una política escrita de conflicto de intereses.", "Pide cada año a cada miembro un formulario de declaración firmado.", "Cuando surge un conflicto, el miembro lo declara.", "El miembro se retira de la discusión y de la votación.", "La junta revisa que el trato sea justo, de preferencia comparando opciones.", "Registra todo en el acta; pide consejo en los tratos grandes."],
          words: [["Conflicto de intereses", "cuando los intereses propios de una persona podrían influir en una decisión que toma por la organización."], ["Declaración", "decirle abiertamente a la junta que hay un posible conflicto."], ["Abstenerse (recusarse)", "retirarse de una discusión y de una votación por un conflicto."]],
          slides: [
            { title: "Qué es un conflicto", bullets: ["Un miembro, su familia o su negocio podría ganar", "Es común y no siempre está mal", "Hay que manejarlo de forma abierta"] },
            { title: "Política y declaración anual", bullets: ["Política escrita de conflicto de intereses", "Formulario de declaración firmado cada año"] },
            { title: "Cuando surge", bullets: ["Declararlo", "Retirarse de la discusión y de la votación", "La junta revisa que el trato sea justo", "Registrarlo en el acta"] }
          ],
          tryIt: "Escribe en palabras sencillas los cinco pasos que seguirá tu junta cuando surja un conflicto. Luego aplícalos a este caso: la esposa de un miembro de la junta quiere venderle a la organización una camioneta usada.",
          youCanNow: "manejar un conflicto de intereses con una declaración, la abstención del miembro, una revisión justa y un registro escrito.",
          quickCheck: [
            { objective: "O4", q: "¿Cuándo hay un conflicto de intereses?", options: ["Cuando un miembro, su familia o su negocio podría ganar con una decisión de la junta", "Cuando dos miembros no están de acuerdo", "Cuando una reunión se alarga", "Cuando el presupuesto está apretado"], answer: 0, why: "Hay un conflicto cuando alguien de la junta podría ganar personalmente con la decisión." },
            { objective: "O4", q: "La hermana de un miembro tiene la empresa de comida que se ofrece para tu cena de gala. ¿Qué pasa después?", options: ["El miembro vota, ya que la familia ayuda", "Se oculta en el acta", "El miembro lo declara y se sale, y la junta compara cotizaciones", "Se cancela la gala"], answer: 2, why: "El miembro lo declara y sale de la conversación y del voto, y la junta revisa que el trato sea justo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Supervisión financiera, Formulario 990 y registro estatal",
          minutes: 6,
          goal: "Revisar las finanzas de una organización sin fines de lucro como miembro de la junta y poner los trámites anuales en un calendario.",
          text: [
            "Todos los miembros de la junta, no solo el tesorero, deben entender lo básico: el presupuesto aprobado, los informes periódicos que comparan los ingresos y gastos reales con el presupuesto, el balance general (lo que la organización tiene y lo que debe), el efectivo disponible y las donaciones restringidas que deben usarse para un fin específico. Haz preguntas cuando las cifras cambien mucho. Usa controles, como que participen dos personas en el pago de cuentas, y una revisión externa o auditoría cuando el tamaño de la organización lo pida.",
            "La mayoría de las organizaciones exentas de impuestos deben presentar cada año una declaración ante el IRS de la serie del Formulario 990. El IRS dice que las organizaciones cuyos ingresos brutos son normalmente de $50,000 o menos pueden presentar el Formulario 990-N, una tarjeta electrónica (e-Postcard); las que tienen ingresos brutos de menos de $200,000 y activos totales de menos de $500,000 pueden presentar el Formulario 990-EZ o el 990; las más grandes presentan el Formulario 990. La fecha límite es el día 15 del 5.º mes después del cierre del año (el 15 de mayo si el año cierra el 31 de diciembre). El IRS dice que las organizaciones que no presentan la declaración tres años seguidos pierden automáticamente su exención de impuestos. Estas declaraciones también deben estar a disposición del público. Los límites y las reglas pueden cambiar, así que revisa irs.gov cada año. Las iglesias y algunos otros grupos tienen reglas diferentes.",
            "Los estados tienen sus propias reglas. En California, el Registro de Organizaciones Benéficas y Recaudadores de Fondos del Procurador General pide a las organizaciones benéficas que se registren y presenten informes anuales, con pocas excepciones. Revisa oag.ca.gov/charities para ver los formularios y las tarifas actuales. Otros estados tienen sus propias oficinas para organizaciones benéficas. Pide ayuda a un contador para preparar los trámites, y la junta debe revisarlos antes de presentarlos."
          ],
          steps: ["Aprueba un presupuesto anual.", "Revisa en cada reunión los informes de presupuesto contra lo real.", "Revisa el efectivo, el balance general y las donaciones restringidas.", "Usa controles: dos personas en los pagos; una revisión externa cuando haga falta.", "Pon en el calendario la fecha límite del Formulario 990; confirma qué versión en irs.gov.", "Pon en el calendario los trámites estatales (California: oag.ca.gov/charities).", "Revisa los trámites antes de enviarlos; pide ayuda a un contador."],
          words: [["Presupuesto contra lo real", "un informe que compara los ingresos y gastos planeados con lo que de verdad pasó."], ["Balance general", "un informe de lo que una organización tiene y lo que debe en una fecha."], ["Donación restringida", "una donación que debe usarse para un fin específico."], ["Formulario 990", "la declaración informativa anual del IRS para la mayoría de las organizaciones exentas de impuestos."], ["Registro de Organizaciones Benéficas y Recaudadores de Fondos", "la oficina del Procurador General de California donde las organizaciones benéficas se registran y presentan informes anuales."]],
          slides: [
            { title: "Lo que revisa cada miembro", bullets: ["Presupuesto y presupuesto contra lo real", "Balance general y efectivo", "Donaciones restringidas"] },
            { title: "Controles", bullets: ["Dos personas participan en los pagos", "Revisión externa o auditoría cuando el tamaño lo pida", "Pregunta cuando las cifras cambien mucho"] },
            { title: "Serie del Formulario 990 del IRS (revisa irs.gov)", bullets: ["990-N: ingresos brutos normalmente de $50,000 o menos", "990-EZ: ingresos < $200,000 y activos < $500,000", "990: organizaciones más grandes", "Vence el día 15 del 5.º mes; 3 años sin presentar = se pierde la exención"] },
            { title: "Reglas estatales", bullets: ["California: registrarse en el Registro de Organizaciones Benéficas del Procurador", "Presentar informes anuales; revisa oag.ca.gov/charities", "Busca un contador; la junta revisa antes de presentar"] }
          ],
          sources: [
            { name: "IRS: serie del Formulario 990, qué formularios presentan las organizaciones exentas", url: "https://www.irs.gov/charities-non-profits/form-990-series-which-forms-do-exempt-organizations-file-filing-phase-in" },
            { name: "IRS: fechas límite de la declaración anual de las organizaciones exentas", url: "https://www.irs.gov/charities-non-profits/return-due-dates-for-exempt-organizations-annual-return" },
            { name: "IRS: revocación automática de la exención", url: "https://www.irs.gov/charities-non-profits/automatic-revocation-of-exemption" },
            { name: "IRS: divulgación pública de las declaraciones de organizaciones exentas", url: "https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure" },
            { name: "Procurador General de California: Registro de Organizaciones Benéficas y Recaudadores de Fondos", url: "https://oag.ca.gov/charities" },
            { name: "Guía para organizaciones benéficas del Procurador General de California (PDF, en inglés)", url: "https://oag.ca.gov/system/files/media/Guide%20for%20Charities.pdf" }
          ],
          tryIt: "Busca una organización sin fines de lucro que conozcas en una base de datos pública o en su informe anual. Anota sus ingresos anuales aproximados y decide qué versión del Formulario 990 probablemente presenta; luego confirma la regla en irs.gov. Escribe en un calendario anual la fecha límite de su Formulario 990 y, si está en California, la renovación de su registro.",
          youCanNow: "revisar las finanzas de una organización sin fines de lucro como miembro de la junta y planear sus trámites anuales ante el IRS y el estado.",
          quickCheck: [
            { objective: "O5", q: "¿Qué muestra un balance general?", options: ["Quién vino a la reunión", "Los límites de periodos de la junta", "Los eventos del próximo año", "Lo que la organización tiene y lo que debe"], answer: 3, why: "El balance general muestra lo que la organización tiene y lo que debe." },
            { objective: "O5", q: "El año de tu organización termina el 31 de diciembre. ¿Qué pones en el calendario de la junta?", options: ["Nada; los trámites son opcionales", "La fecha límite del Formulario 990, el 15 de mayo, después de confirmar la versión en irs.gov", "Un recordatorio de hacer el trámite cada cinco años", "Solo la fiesta de fin de año"], answer: 1, why: "La declaración vence el día 15 del 5.º mes después del cierre del año, y la versión se confirma en irs.gov." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reclutar y dar la bienvenida a los miembros de la junta",
          minutes: 5,
          goal: "Usar una tabla de habilidades para reclutar a los miembros de la junta que tu organización necesita.",
          text: [
            "Recluta con un plan, no solo entre amigos. Haz una tabla de habilidades: anota las habilidades y los contactos que necesita tu junta (por ejemplo finanzas, leyes, recaudación de fondos, la comunidad a la que sirves, tecnología) y marca qué miembros actuales los tienen. Los huecos te dicen a quién buscar. Incluye a personas que han vivido en carne propia el problema en el que trabajas.",
            "Sé honesto sobre el puesto: cuántas reuniones, qué comités, cuánto tiempo y si se espera que donen o ayuden a recaudar dinero. Reúnete con los candidatos más de una vez, invítalos a una reunión y pide referencias. Elígelos con el proceso de tus estatutos.",
            "Da la bienvenida a los nuevos miembros con una orientación: la misión, los estatutos, el presupuesto y el informe financiero más reciente, las actas recientes, la política de conflicto de intereses para firmar y un compañero de la junta que los acompañe. Evalúa cada año el trabajo de la propia junta y usa límites de periodos para que siempre entren personas nuevas."
          ],
          steps: ["Haz una tabla de habilidades; encuentra los huecos.", "Busca más allá de tus amigos; incluye experiencia vivida.", "Escribe una descripción honesta del puesto y del tiempo.", "Reúnete con los candidatos, invítalos a una reunión, pide referencias.", "Elígelos con el proceso de los estatutos.", "Haz una orientación y asigna un compañero de la junta.", "Evalúa la junta cada año."],
          words: [["Tabla de habilidades", "un cuadro de las habilidades que necesita una junta y qué miembros las tienen."], ["Orientación", "la bienvenida y la capacitación que recibe un miembro nuevo."], ["Límite de periodos", "un tope de cuántos periodos seguidos puede servir una persona."]],
          slides: [
            { title: "Recluta con un plan", bullets: ["Haz una tabla de habilidades", "Encuentra los huecos", "Busca más allá de tus amigos; incluye experiencia vivida"] },
            { title: "Sé honesto sobre el puesto", bullets: ["Reuniones, comités, tiempo", "Lo que se espera en donaciones o recaudación", "Reúnete más de una vez, pide referencias"] },
            { title: "Dales una buena bienvenida", bullets: ["Paquete de orientación: misión, estatutos, finanzas, actas", "Firmar la política de conflicto de intereses", "Asignar un compañero de la junta"] },
            { title: "Mantén la junta renovada", bullets: ["Evalúa la junta cada año", "Usa límites de periodos"] }
          ],
          tryIt: "Tarea final: haz tu lista de control de una página sobre el gobierno de la junta. Incluye los tres deberes, el reparto de cinco decisiones entre la junta y el personal, un orden del día y un modelo de acta, los pasos para los conflictos de intereses, un calendario anual de trámites y finanzas, y un plan para llenar dos puestos a partir de una tabla de habilidades.",
          youCanNow: "reclutar y dar la bienvenida a miembros de la junta que llenen huecos reales, y mantener la junta sana año tras año.",
          quickCheck: [
            { objective: "O2", q: "¿Qué muestra una tabla de habilidades?", options: ["Los cumpleaños de los miembros", "El calendario de reuniones", "Las habilidades y contactos que necesita la junta, y qué miembros los tienen", "El presupuesto anual"], answer: 2, why: "Una tabla de habilidades muestra lo que falta, y eso te dice a quién reclutar." },
            { objective: "O2", q: "Tu tabla muestra que nadie tiene habilidades de finanzas. ¿Cuál es un buen siguiente paso?", options: ["Buscar más allá de tus amigos a alguien con habilidades de finanzas, reunirte con esa persona e invitarla a una reunión", "Pedírselo a tu mejor amigo, tenga las habilidades que tenga", "Dejar el hueco; no importa", "Hacer que el tesorero lo haga todo"], answer: 0, why: "Recluta a propósito para llenar lo que falta, y reúnete con las personas candidatas e invítalas antes a una reunión." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Supervisión y formación de la junta",
        questions: [
          { objective: "O4", q: "Un miembro de la junta tiene un conflicto en un contrato. ¿Qué debe hacer?", options: ["Votar primero y mencionarlo después", "Declararlo y retirarse de la discusión y de la votación", "Quedarse callado", "Renunciar a la junta"], answer: 1, why: "La declaración y la abstención permiten que la junta decida de forma justa." },
          { objective: "O5", q: "¿Qué informe compara los ingresos y gastos planeados con los reales?", options: ["Presupuesto contra lo real", "Acta", "Estatutos", "Tabla de habilidades"], answer: 0, why: "El presupuesto contra lo real muestra dónde el plan y la realidad no coinciden." },
          { objective: "O5", q: "Según el IRS, ¿qué organizaciones pequeñas pueden presentar el Formulario 990-N (tarjeta electrónica)?", options: ["Cualquier organización", "Las que tienen ingresos brutos normalmente de $50,000 o menos", "Solo las iglesias", "Las que tienen más de $1 millón en activos"], answer: 1, why: "El IRS fija el límite del 990-N en ingresos brutos normalmente de $50,000 o menos." },
          { objective: "O5", q: "¿Qué pasa si una organización no presenta su declaración anual obligatoria tres años seguidos?", options: ["Nada", "Solo recibe una carta de advertencia", "Tiene que cambiar de nombre", "Pierde automáticamente su exención de impuestos"], answer: 3, why: "El IRS dice que la exención se revoca automáticamente." },
          { objective: "O2", q: "Una primera herramienta útil para reclutar miembros de la junta es:", options: ["Una tabla de habilidades", "Una lista solo de tus amigos", "Una rifa", "La portada de los estatutos"], answer: 0, why: "La tabla muestra qué habilidades faltan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Gobierno de la junta directiva de una organización sin fines de lucro",
    questions: [
      { objective: "O1", q: "¿Qué deber significa mantener a la organización fiel a su misión y a la ley?", options: ["Deber de cuidado", "Deber de lealtad", "Deber de obediencia", "Deber de rapidez"], answer: 2, why: "Obediencia significa misión, estatutos y la ley." },
      { objective: "O1", q: "Un miembro de la junta no lee el presupuesto y vota que sí de todos modos. ¿Qué deber está más débil?", options: ["Deber de cuidado", "Deber de lealtad", "Deber de obediencia", "Ninguno; está bien"], answer: 0, why: "El cuidado exige decisiones informadas." },
      { objective: "O1", q: "¿A quién se aplican los tres deberes de la junta?", options: ["Solo al presidente", "Solo al tesorero", "Solo al personal pagado", "A cada miembro de la junta"], answer: 3, why: "Cada miembro tiene estos deberes." },
      { objective: "O2", q: "En una organización sin fines de lucro con personal pagado, ¿quién dirige los programas diarios?", options: ["El presidente de la junta", "El personal, dirigido por el director ejecutivo", "Los donantes", "El IRS"], answer: 1, why: "El personal hace el trabajo diario; la junta supervisa." },
      { objective: "O2", q: "Una junta vota que sí a todo sin hacer preguntas. Esto se llama:", options: ["Buen gobierno", "Microgestión", "Aprobar sin revisar", "Abstenerse"], answer: 2, why: "Aprobar sin revisar no cumple con el deber de cuidado." },
      { objective: "O2", q: "¿Dónde encuentras el tamaño de tu junta, los periodos y las reglas de votación?", options: ["En los estatutos", "En el Formulario 990-N", "En una carta de un donante", "En un periódico"], answer: 0, why: "Los estatutos son el reglamento de la organización." },
      { objective: "O3", q: "Antes de que la junta vote, el presidente debe confirmar que:", options: ["Todos están de acuerdo", "Hay quórum", "La prensa está presente", "El voto es secreto"], answer: 1, why: "Las decisiones necesitan quórum para ser válidas." },
      { objective: "O3", q: "Una agenda de consentimiento se usa para:", options: ["Grandes debates de estrategia", "Despedir al director", "Conflictos de intereses", "Asuntos de rutina aprobados con una sola votación"], answer: 3, why: "Ahorra tiempo para los temas importantes." },
      { objective: "O3", q: "El acta de la junta debe ser:", options: ["Breve, objetiva y aprobada en la siguiente reunión", "Una transcripción palabra por palabra", "Secreta para la junta", "Escrita solo si hay tiempo"], answer: 0, why: "El acta registra decisiones y se aprueba formalmente." },
      { objective: "O4", q: "El formulario de declaración de conflictos de intereses debe firmarse:", options: ["Nunca", "Solo cuando te descubren", "Cada año, por cada miembro de la junta", "Solo por el personal"], answer: 2, why: "La declaración anual mantiene los conflictos a la vista." },
      { objective: "O4", q: "La esposa de un miembro quiere venderle una camioneta a la organización. La junta debe:", options: ["Comprarla a cualquier precio", "Hacer que el miembro lo declare y se retire, y luego revisar que el trato sea justo", "Dejar que el miembro decida", "Ocultarlo del acta"], answer: 1, why: "Declarar, abstenerse, revisar con justicia y registrar." },
      { objective: "O4", q: "\"Abstenerse\" (o \"recusarse\") significa:", options: ["Retirarse de una discusión y de una votación por un conflicto", "Renunciar para siempre", "Aprobar un presupuesto", "Convocar una reunión"], answer: 0, why: "Abstenerse mantiene justa la decisión." },
      { objective: "O5", q: "Una donación restringida es:", options: ["Una donación que la junta puede gastar en lo que sea", "Un préstamo", "Una donación que debe usarse para un fin específico", "Una donación que fue rechazada"], answer: 2, why: "Los donantes ponen restricciones que la organización debe respetar." },
      { objective: "O5", q: "Un buen control financiero es:", options: ["Una sola persona maneja todo el dinero", "No tener informes", "Pagar las cuentas solo en efectivo", "Que dos personas participen en el pago de cuentas"], answer: 3, why: "Dos personas reducen el riesgo de errores y robos." },
      { objective: "O5", q: "Según el IRS, una organización con ingresos brutos de menos de $200,000 y activos totales de menos de $500,000 puede presentar:", options: ["El Formulario 990-EZ o el 990", "Solo el Formulario 990-PF", "Ninguna declaración nunca", "El Formulario 1040"], answer: 0, why: "El IRS permite el 990-EZ o el 990 en ese rango." },
      { objective: "O5", q: "Para una organización cuyo año cierra el 31 de diciembre, el Formulario 990 vence el:", options: ["1 de enero", "1 de abril", "15 de mayo", "31 de diciembre"], answer: 2, why: "Vence el día 15 del 5.º mes después del cierre del año." },
      { objective: "O5", q: "¿Las declaraciones del Formulario 990 se mantienen en privado?", options: ["Sí, siempre", "No; deben estar a disposición del público para su consulta", "Solo la primera página es pública", "Solo los donantes pueden verlas"], answer: 1, why: "El IRS exige que las declaraciones anuales estén a disposición del público." },
      { objective: "O5", q: "En California, las organizaciones benéficas se registran y presentan informes anuales ante:", options: ["El DMV (Departamento de Vehículos Motorizados)", "La feria del condado", "La FAA (la agencia federal de aviación)", "El Registro de Organizaciones Benéficas y Recaudadores de Fondos del Procurador General"], answer: 3, why: "El Registro del Procurador General se encarga del registro de organizaciones benéficas en California." },
      { objective: "O5", q: "¿Dónde deben confirmar cada año los miembros de la junta las reglas actuales de los trámites?", options: ["En sitios oficiales como irs.gov y la oficina estatal de organizaciones benéficas", "En un blog cualquiera", "En lo que recuerdan del año pasado", "En lo que adivina un amigo"], answer: 0, why: "Las reglas cambian; las fuentes oficiales están al día." },
      { objective: "O2", q: "Un miembro nuevo de la junta debe recibir:", options: ["Nada; ya lo averiguará", "Solo una camiseta", "Una orientación con la misión, los estatutos, las finanzas, las actas y la política de conflictos", "Las contraseñas del director ejecutivo"], answer: 2, why: "La orientación prepara a los miembros para cumplir sus deberes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      5,
      6,
      8,
      10,
      11,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Los tres deberes",
        objective: "O1",
        notYet: "Falta un deber o está mal explicado.",
        meets: "Cuidado, lealtad y obediencia, cada uno explicado con palabras sencillas.",
        exceeds: "Cada deber tiene un ejemplo real de cumplirlo y de romperlo."
      },
      {
        name: "Funciones y reclutamiento",
        objective: "O2",
        notYet: "Las decisiones no están repartidas, o solo se recluta entre amigos.",
        meets: "Cinco decisiones repartidas entre junta, personal o ambos, y dos puestos vacantes asignados a lo que falta en una tabla de habilidades.",
        exceeds: "Además anota reglas de los estatutos que la junta no está siguiendo y un plan de bienvenida para los miembros nuevos."
      },
      {
        name: "Reuniones y actas",
        objective: "O3",
        notYet: "No hay agenda, o al acta le faltan el quórum, las mociones o los votos.",
        meets: "Una agenda con agenda de consentimiento y un modelo de acta con todas las partes obligatorias.",
        exceeds: "Un acta de ejemplo para una moción con quién la propuso, el conteo de votos y el resultado."
      },
      {
        name: "Conflicto de intereses",
        objective: "O4",
        notYet: "Faltan pasos o están en desorden.",
        meets: "Declarar, salirse, revisar que el trato sea justo y anotarlo, en orden.",
        exceeds: "Además incluye el formulario de declaración firmado cada año y cuándo pedir asesoría legal."
      },
      {
        name: "Finanzas y calendario de trámites",
        objective: "O5",
        notYet: "No hay versión ni fecha límite del Formulario 990, o falta el trámite estatal.",
        meets: "Revisiones del presupuesto, la versión correcta del Formulario 990 y su fecha límite, y cualquier registro estatal, confirmados en sitios oficiales.",
        exceeds: "Además enumera controles financieros, como dos personas para aprobar pagos, y dice dónde se revisó cada regla."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Juntas que adoptan una política escrita de conflicto de intereses y formularios de declaración anuales dentro de 90 días",
      "Organizaciones que presentan a tiempo su Formulario 990 y sus informes estatales el año siguiente",
      "Juntas que llenan los puestos vacantes con una tabla de habilidades y hacen una sesión de bienvenida para los miembros nuevos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono con internet para revisar irs.gov y la oficina estatal de organizaciones benéficas",
      "Los estatutos de tu organización, el último informe del presupuesto y actas recientes, o un juego de ejemplo",
      "Papel o un documento para la lista de verificación de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hazlo como una sesión de retiro de la junta: los miembros arman juntos la lista de verificación con sus propios estatutos e informes.",
      "Recuérdale al grupo que esto es educación general, no asesoría legal ni fiscal; las preguntas serias van a un abogado o contador de organizaciones sin fines de lucro.",
      "Pide que confirmen durante la sesión los límites del Formulario 990 y las reglas estatales en los sitios oficiales, porque pueden cambiar.",
      "Usa juegos de roles para los pasos del conflicto de intereses, para que los miembros practiquen salirse de una votación.",
      "Califica la lista de verificación con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};

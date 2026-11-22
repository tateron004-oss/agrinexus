"use strict";

// Koach Learn course (Spanish translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

const SRC = {
  naicDepts: { name: "NAIC: Encuentra el departamento de seguros de tu estado", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: Registro Nacional de Productores de Seguros (solicitar y renovar licencias de productor)", url: "https://nipr.com/" },
  tdiAgent: { name: "Departamento de Seguros de Texas: Licencias de agente", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Departamento de Seguros de Texas: Cómo solicitar una licencia general de vida, accidentes, salud y HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Instituto de Información Legal de Cornell)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "Ley modelo 880 de la NAIC: Ley de Prácticas Comerciales Desleales", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-es",
  lang: "es",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Preparación para el examen de licencia de agente de seguros",
  skills: "Elegir una línea de licencia, Encontrar los pasos de licencia de tu estado, Explicar términos de seguros, Resolver reclamos de práctica, Detectar prácticas de venta poco éticas, Planear el examen",
  outcome: "prepararte para el examen de licencia de agente de seguros de tu estado: elegir la línea de licencia correcta, encontrar los pasos oficiales y el temario del examen de tu estado, explicar los términos básicos, resolver reclamos de práctica, detectar prácticas de venta poco éticas y seguir un plan de estudio y examen con fechas.",
  about: [
    "Este curso es para personas adultas que quieren vender seguros como agentes con licencia, también llamados productores: personas que buscan trabajo, que cambian de carrera, que regresan a casa después de estar en prisión, veteranos y quienes quieren abrir su propia agencia. En Estados Unidos, cada estado da la licencia a los agentes de seguros, no el gobierno federal.",
    "Vas a aprender las principales líneas de licencia, cómo encontrar los pasos y el temario del examen de tu estado, las palabras e ideas básicas que evalúan los exámenes, cómo resolver reclamos de práctica con deducibles y límites, y las reglas de ética que protegen a los clientes. Al final escribes tu propio plan de estudio y examen con fechas reales.",
    "Este curso te PREPARA para el examen. No te da una licencia y no reemplaza ningún curso previo a la licencia que tu estado pueda exigir. Los requisitos, las tarifas y los detalles del examen los fija el departamento de seguros de tu estado y cambian, así que cada lección te lleva a la página oficial. Nada de esto es un consejo para comprar seguros o inversiones."
  ],
  finalTask: "Escribe un Plan de Estudio y Examen para la Licencia de Seguros de una página para tu estado: (1) la línea de licencia que vas a sacar y por qué; (2) los pasos oficiales de tu estado en orden (educación previa a la licencia si se exige, examen y empresa evaluadora, huellas digitales o verificación de antecedentes, solicitud, nombramiento), cada uno con su dirección web oficial; (3) los temas y su peso según el temario del examen de tu estado; (4) un horario de estudio semanal con fechas, una fecha meta para el examen y al menos dos fechas de examen de práctica con un puntaje meta; (5) tres reclamos de práctica que resolviste bien y tres reglas de ética con tus propias palabras.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas en Estados Unidos que quieren trabajar como agentes de seguros (productores) en un centro de llamadas, un banco, una agencia o una compañía de seguros, o que quieren abrir su propia agencia. Grupo mixto: personas que buscan trabajo, que cambian de carrera, veteranos, personas que regresan de prisión, inmigrantes y dueños de pequeños negocios.",
    startingPoint: "Han comprado seguro de auto, de inquilino o de salud, pero casi nunca leen una póliza. No saben cómo funcionan las licencias, qué licencia sacar ni qué palabras se usan en el examen. Pueden hacer cálculos sencillos de porcentajes con algo de ayuda.",
    gap: "Muchas personas pagan un curso previo a la licencia o un examen sin saber qué licencia corresponde al trabajo, qué exige su estado ni cómo está armado el examen, y reprueban o se rinden. Conocer el camino, los términos básicos, los cálculos de reclamos y las reglas de ética convierte un proceso confuso en un plan con fechas, y lleva a un trabajo que muchas veces no exige título universitario.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 8.º grado); se explica cada palabra del examen",
      "Dispositivos: un teléfono o una computadora de la biblioteca; papel, lápiz y una calculadora básica sirven para todas las tareas",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Las licencias son por estado: los pasos, las horas previas a la licencia, las tarifas, la empresa evaluadora y el puntaje para aprobar cambian, así que cada participante revisa la página oficial de su estado",
      "Verificación de antecedentes: algunas personas tienen antecedentes penales; el curso explica la regla con honestidad y las manda al departamento de su estado",
      "No se aconseja qué seguro o inversión debe comprar nadie; la práctica usa números inventados"
    ],
    prerequisites: "Ninguno. Quien quiera ayuda con los porcentajes puede tomar primero \"Matemáticas para la vida diaria\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Dado un trabajo o un producto de seguros", action: "identificar qué línea de licencia y qué rol le corresponde", standard: "acertando al menos 5 de 6 ejemplos" },
    { id: "O2", condition: "Para tu propio estado", action: "encontrar los pasos oficiales de la licencia, la empresa evaluadora y el temario del examen", standard: "anotando cada paso con su dirección web oficial" },
    { id: "O3", condition: "Dada una lista de palabras e ideas del examen", action: "explicar los términos básicos de seguros y los principios del contrato con palabras sencillas", standard: "con el significado correcto en al menos 8 de 10" },
    { id: "O4", condition: "Dado un reclamo de práctica con deducible, coaseguro o límite de póliza", action: "calcular cuánto paga la aseguradora y cuánto paga el asegurado", standard: "exacto al dólar en 3 reclamos de práctica" },
    { id: "O5", condition: "Dada una situación de venta o de servicio", action: "detectar prácticas poco éticas o ilegales y elegir la acción honesta", standard: "acertando al menos 4 de 5 situaciones" },
    { id: "O6", condition: "Con los pasos oficiales y el temario del examen de tu estado", action: "escribir un plan de estudio y examen con fechas para tu examen de licencia", standard: "cubriendo cada paso oficial, cada tema del temario y al menos dos fechas de examen de práctica" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Tu camino hacia una licencia de seguros",
      lessons: [
        {
          title: "Qué hace un agente y qué línea de licencia necesitas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Elegir la línea de licencia que corresponde al trabajo de seguros que quieres.",
          text: [
            "Un agente de seguros, al que la ley llama productor, vende, ofrece o negocia seguros para los clientes. Todos los estados exigen una licencia para hacerlo. Un agente cautivo vende para una sola compañía. Un agente independiente vende para varias compañías y muchas veces maneja un pequeño negocio. Además, cada compañía de seguros para la que vende un agente debe nombrarlo.",
            "Los estados dan licencias por línea de autoridad. Las cuatro líneas principales más comunes son Vida, Accidentes y Salud (enfermedad), Propiedad y Accidentes y Responsabilidad (Casualty). Muchas personas empiezan con Vida y Salud juntas, o con Propiedad y Responsabilidad juntas. Algunos estados también ofrecen una licencia más pequeña de Líneas Personales, solo para seguros de casa y auto.",
            "Vida cubre la muerte y algunas pólizas de ahorro a largo plazo. Accidentes y Salud cubre gastos médicos, ingresos por discapacidad y costos parecidos. Propiedad cubre daños a cosas que tienes, como una casa o un auto. Responsabilidad (Casualty) cubre la responsabilidad civil, que es el dinero que debes si lastimas a alguien o dañas sus cosas.",
            "Otros trabajos de seguros usan una licencia distinta. Un ajustador investiga y resuelve reclamos. Vender algunos productos tipo inversión, como las anualidades variables, también exige una licencia de valores. Revisa la lista de tipos de licencia de tu estado antes de pagar cualquier curso."
          ],
          words: [["Productor", "la palabra legal para un agente o corredor de seguros con licencia que vende seguros."], ["Línea de autoridad", "un tipo de seguro que tu licencia te permite vender, como Vida o Propiedad."], ["Nombramiento", "la aprobación oficial de una compañía de seguros para que vendas sus productos."], ["Responsabilidad civil", "el dinero que legalmente le debes a alguien si lo lastimas o dañas su propiedad."], ["Ajustador", "una persona que investiga y resuelve reclamos de seguros; casi siempre es una licencia aparte."]],
          slides: [
            { title: "Los agentes son productores", bullets: ["Venden, ofrecen o negocian seguros", "Todos los estados exigen una licencia", "Cada compañía para la que vendes debe nombrarte"] },
            { title: "Cautivo o independiente", bullets: ["Cautivo: vende para una sola compañía", "Independiente: vende para varias compañías y muchas veces maneja un negocio"] },
            { title: "Las cuatro líneas principales", bullets: ["Vida: paga cuando alguien muere", "Accidentes y Salud: gastos médicos, discapacidad", "Propiedad: daños a tus cosas", "Responsabilidad (Casualty): cuando le haces daño a otros"] },
            { title: "Revisa antes de pagar", bullets: ["Los ajustadores necesitan otra licencia", "Los productos variables también exigen una licencia de valores", "Primero busca la lista de tipos de licencia de tu estado"] }
          ],
          tryIt: "Anota tres trabajos de seguros a los que podrías aplicar (por ejemplo, agente de centro de llamadas que vende seguros de auto, empleado de banco que vende seguros de vida o tu propia agencia). Al lado de cada uno, escribe la línea o las líneas de licencia que necesita.",
          youCanNow: "decir qué hace un productor de seguros y elegir la línea de licencia que corresponde a un trabajo.",
          quickCheck: [
            { objective: "O1", q: "Un anuncio de trabajo dice que venderás seguros de auto y de vivienda. ¿Qué líneas de licencia corresponden?", options: ["Vida y Salud", "Propiedad y Responsabilidad", "Solo valores", "Solo ajustador"], answer: 1, why: "Las pólizas de auto y de vivienda cubren daños a la propiedad y la responsabilidad hacia otros, que son Propiedad y Responsabilidad." },
            { objective: "O1", q: "¿Qué es un agente cautivo?", options: ["Un agente que vende para una sola compañía de seguros", "Un agente sin licencia", "Un agente que solo resuelve reclamos", "Un agente que trabaja para el estado"], answer: 0, why: "Un agente cautivo representa a una compañía; un agente independiente representa a varias." }
          ]
        },
        {
          title: "Encontrar los pasos oficiales de licencia de tu estado",
          objectives: ["O2"],
          minutes: 6,
          goal: "Encontrar en páginas oficiales los pasos de licencia, la empresa evaluadora y el temario del examen de tu estado.",
          text: [
            "El departamento de seguros de tu estado pone las reglas. Para encontrarlo, usa la página de la NAIC (Asociación Nacional de Comisionados de Seguros) que tiene enlaces a todos los departamentos estatales. Busca páginas llamadas producer licensing, agent licensing o how to apply (licencias de productor, licencias de agente o cómo solicitar).",
            "La mayoría de los estados siguen un camino parecido: un curso previo a la licencia (obligatorio en muchos estados, no en todos), un examen estatal que da una empresa evaluadora, huellas digitales o verificación de antecedentes, una solicitud y luego el nombramiento de una aseguradora. Ya con licencia, la renuevas y tomas educación continua. Por ejemplo, cuando revisamos en octubre de 2026, Texas daba su examen a través de Pearson VUE, pedía huellas digitales y recibía solicitudes por Sircon o NIPR solo después de aprobar el examen.",
            "La empresa evaluadora publica un manual del candidato y un temario del examen para tu estado. El temario muestra cada tema y cuántas preguntas salen de cada uno. Es la herramienta de estudio más útil que tienes, y es gratis.",
            "Si tienes antecedentes penales, sé honesto en la solicitud. Una ley federal (18 U.S.C. 1033) dice que una persona condenada por un delito grave (felony) que implique deshonestidad o abuso de confianza necesita el consentimiento por escrito de un regulador de seguros para trabajar en seguros. El departamento de tu estado explica cómo pedirlo. No dejes que un vendedor de cursos te diga que eso no importa."
          ],
          steps: ["Abre la página de departamentos estatales de seguros de la NAIC y elige tu estado.", "Encuentra la página de licencias de productor o de agente y la lista de tipos de licencia.", "Anota cada paso: educación previa a la licencia, examen, huellas digitales, solicitud, nombramiento.", "Encuentra el nombre de la empresa evaluadora y descarga el manual del candidato y el temario gratis.", "Anota la dirección web oficial de cada paso y la fecha en que la revisaste."],
          words: [["NAIC", "Asociación Nacional de Comisionados de Seguros: el grupo de reguladores estatales de seguros."], ["Educación previa a la licencia", "un curso que algunos estados exigen antes de que puedas tomar el examen de licencia."], ["Temario del examen", "la lista de temas del examen y cuántas preguntas salen de cada uno."], ["NIPR", "Registro Nacional de Productores de Seguros: un sitio web que muchos estados usan para solicitar y renovar licencias."], ["Educación continua", "clases que los agentes con licencia deben tomar para renovar su licencia."]],
          slides: [
            { title: "Empieza en la fuente oficial", bullets: ["El departamento de seguros de tu estado pone las reglas", "Encuéntralo en la página de departamentos estatales de la NAIC", "Busca licencias de productor o de agente"] },
            { title: "El camino de siempre", bullets: ["Curso previo a la licencia (en muchos estados)", "Examen estatal con una empresa evaluadora", "Huellas digitales o verificación de antecedentes", "Solicitud y luego nombramiento de una aseguradora"] },
            { title: "Consigue el temario gratis", bullets: ["La empresa evaluadora publica un manual del candidato", "El temario muestra los temas y cuántas preguntas tiene cada uno", "Estudia según el temario"] },
            { title: "Tener antecedentes no es el final", bullets: ["Sé honesto en la solicitud", "Algunos delitos graves exigen el consentimiento escrito de un regulador", "Pregunta cómo al departamento de tu estado"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Abre la página de la NAIC, elige tu estado y encuentra su página de licencias de productor. Escribe en orden cada paso de la licencia, el nombre de la empresa evaluadora y la dirección web del temario del examen.",
          youCanNow: "encontrar los pasos oficiales de licencia, la empresa evaluadora y el temario del examen de tu estado.",
          quickCheck: [
            { objective: "O2", q: "¿Dónde encuentras los verdaderos pasos de licencia de tu estado?", options: ["Una publicación en redes sociales", "Un anuncio de un curso previo a la licencia", "La página oficial del departamento de seguros de tu estado", "Un amigo con licencia en otro estado"], answer: 2, why: "El departamento de seguros de cada estado fija y publica sus propias reglas de licencia." },
            { objective: "O2", q: "¿Qué documento gratis te dice qué temas vienen en el examen de tu estado?", options: ["Una factura de seguro de auto", "La página de declaraciones de una póliza", "El volante de un reclutador", "El temario del examen de la empresa evaluadora"], answer: 3, why: "El temario muestra cada tema del examen y cuántas preguntas salen de cada uno." }
          ]
        },
        {
          title: "Términos básicos y cómo funciona un contrato de seguro",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar con tus propias palabras los términos básicos de seguros y las ideas del contrato.",
          text: [
            "El seguro pasa el riesgo de una persona a una compañía de seguros. El asegurado paga una prima. A cambio, la aseguradora promete pagar ciertas pérdidas. La póliza es el contrato escrito, y la página de declaraciones muestra quién y qué está cubierto, los límites y la prima.",
            "Los exámenes evalúan unas cuantas ideas grandes. Interés asegurable: tienes que perder dinero si ocurre la pérdida. Indemnización: el seguro te deja como estabas, no mejor. Máxima buena fe: las dos partes deben ser honestas, así que una mentira en la solicitud (declaración falsa) puede anular la cobertura. Suscripción: la aseguradora estudia el riesgo y decide si lo acepta y a qué precio.",
            "Una póliza de seguro es un contrato, así que necesita oferta y aceptación, contraprestación (la prima y la promesa), partes capaces y un propósito legal. También es un contrato de adhesión: la aseguradora lo escribe y el cliente lo acepta tal como está, así que la redacción poco clara casi siempre se interpreta a favor del cliente.",
            "Aprende estas palabras con tarjetas de estudio. Los exámenes muchas veces cuentan una historia corta y preguntan qué idea muestra."
          ],
          words: [["Prima", "el dinero que paga el asegurado por la cobertura."], ["Interés asegurable", "tener una pérdida real de dinero si ocurre el hecho asegurado."], ["Indemnización", "pagar la pérdida para que quedes como estabas, no mejor."], ["Suscripción", "estudiar un riesgo para decidir si se asegura y a qué precio."], ["Página de declaraciones", "la página de una póliza que muestra quién está cubierto, qué está cubierto, los límites y la prima."], ["Contrato de adhesión", "un contrato que escribe una parte y la otra acepta tal como está."]],
          slides: [
            { title: "El seguro pasa el riesgo", bullets: ["El asegurado paga una prima", "La aseguradora promete pagar las pérdidas cubiertas", "La póliza es el contrato"] },
            { title: "Ideas grandes del examen", bullets: ["Interés asegurable: puedes perder dinero", "Indemnización: volver a como estabas", "Máxima buena fe: las dos partes son honestas", "Suscripción: decidir si se asegura y a qué precio"] },
            { title: "Una póliza es un contrato", bullets: ["Oferta y aceptación, contraprestación", "Partes capaces, propósito legal", "Adhesión: lo poco claro favorece al cliente"] }
          ],
          tryIt: "Haz 10 tarjetas de estudio en papel o en el teléfono: de un lado la palabra (prima, interés asegurable, indemnización, suscripción, página de declaraciones, contraprestación, adhesión, declaración falsa, asegurado, aseguradora), del otro lado tu propio significado en una línea. Ponte a prueba hasta que aciertes 8 de 10.",
          youCanNow: "explicar con palabras sencillas los términos básicos de seguros y las partes de un contrato de seguro.",
          quickCheck: [
            { objective: "O3", q: "Un hombre quiere comprar un seguro contra incendio para la casa de un desconocido. ¿Qué idea se lo impide?", options: ["Indemnización", "Suscripción", "Contraprestación", "Interés asegurable"], answer: 3, why: "Él no perdería dinero si se quemara la casa del desconocido, así que no tiene interés asegurable." },
            { objective: "O3", q: "Después de un robo cubierto, la aseguradora paga el valor del televisor robado, no uno más grande. ¿Qué idea es esta?", options: ["Indemnización", "Adhesión", "Nombramiento", "Responsabilidad civil"], answer: 0, why: "La indemnización deja al asegurado como estaba, no mejor." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu camino hacia una licencia de seguros",
        questions: [
          { objective: "O1", q: "Vas a vender pólizas de vida a término y seguros de ingresos por discapacidad. ¿Qué líneas corresponden?", options: ["Propiedad y Responsabilidad", "Vida, y Accidentes y Salud", "Solo Líneas Personales", "Ajustador"], answer: 1, why: "Las pólizas de vida necesitan la línea de Vida y los ingresos por discapacidad son Accidentes y Salud." },
          { objective: "O1", q: "¿Qué hace el nombramiento de una compañía de seguros?", options: ["Reemplaza el examen estatal", "Da una licencia de valores", "Te aprueba oficialmente para vender los productos de esa compañía", "Fija la tarifa de licencia de tu estado"], answer: 2, why: "La licencia la da el estado; luego cada aseguradora te nombra para vender para ella." },
          { objective: "O2", q: "¿Quién da las licencias de agente de seguros en Estados Unidos?", options: ["El departamento de seguros de cada estado", "El gobierno federal", "La compañía de seguros para la que trabajas", "La empresa evaluadora"], answer: 0, why: "Los productores de seguros reciben su licencia estado por estado." },
          { objective: "O2", q: "Tienes una condena anterior por un delito grave de fraude. ¿Cuál es el primer paso honesto?", options: ["No ponerlo en la solicitud", "Renunciar al trabajo en seguros", "Usar el nombre de un amigo", "Preguntar al departamento de tu estado cómo pedir el consentimiento escrito de un regulador"], answer: 3, why: "La ley federal exige consentimiento escrito para algunas condenas, y el departamento estatal explica cómo pedirlo." },
          { objective: "O3", q: "En una solicitud, un comprador oculta un problema de salud grave. ¿Qué principio rompió?", options: ["Indemnización", "Interés asegurable", "Máxima buena fe", "Adhesión"], answer: 2, why: "Las dos partes deben ser honestas; una mentira importante puede anular la cobertura." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contenido del examen y preparación para la prueba",
      lessons: [
        {
          title: "Lo básico de vida y salud y el cálculo de un reclamo de salud",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Calcular quién paga qué en un reclamo de salud de práctica con deducible y coaseguro.",
          text: [
            "Seguro de vida: el seguro de vida a término cubre una cantidad fija de años y no tiene valor en efectivo. El seguro de vida permanente, como el de vida entera, puede durar toda la vida y acumula valor en efectivo. El beneficiario es la persona que recibe el beneficio por muerte; un beneficiario contingente lo recibe si el primero ya murió. El dueño de la póliza la controla y puede ser una persona distinta del asegurado.",
            "El seguro de salud tiene sus propias palabras. El deducible es lo que pagas cada año antes de que el plan empiece a compartir los costos. El coaseguro es el porcentaje que compartes después, por ejemplo 80/20: el plan paga el 80% y tú pagas el 20%. El copago es una cantidad fija en dólares por cada consulta. El máximo de gastos de bolsillo es lo más que pagas en un año por la atención cubierta.",
            "Solo para practicar, con números inventados: una cuenta cubierta de $3,000, un deducible de $1,000 que aún no se ha cubierto y coaseguro 80/20. Tú pagas los primeros $1,000. Los $2,000 que quedan se comparten: el plan paga el 80% ($1,600) y tú pagas el 20% ($400). Tú pagas $1,400 en total; el plan paga $1,600. Comprueba: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Escribe el monto de la cuenta cubierta.", "Resta la parte del deducible que todavía se debe; esa parte la paga el asegurado.", "Divide lo que queda según los porcentajes del coaseguro.", "Suma el deducible y el coaseguro del asegurado; detente en el máximo de gastos de bolsillo.", "Comprueba que las dos partes sumen el total de la cuenta."],
          words: [["Beneficiario", "la persona que recibe el dinero cuando muere la persona asegurada."], ["Valor en efectivo", "el ahorro que se acumula dentro de una póliza de vida permanente."], ["Deducible", "la cantidad que pagas antes de que el seguro empiece a pagar."], ["Coaseguro", "el porcentaje del costo que compartes con el plan después del deducible."], ["Máximo de gastos de bolsillo", "lo más que pagas en un año del plan por la atención cubierta."]],
          slides: [
            { title: "Palabras del seguro de vida", bullets: ["A término: años fijos, sin valor en efectivo", "Vida entera: toda la vida, acumula valor en efectivo", "Beneficiario y beneficiario contingente"] },
            { title: "Palabras del seguro de salud", bullets: ["Deducible: tú pagas primero", "Coaseguro: porcentaje compartido, como 80/20", "Copago: cantidad fija por consulta", "Máximo de gastos de bolsillo: el tope anual"] },
            { title: "Reclamo de práctica (inventado)", bullets: ["Cuenta de $3,000, deducible de $1,000, 80/20", "Tú: $1,000 + 20% de $2,000 = $1,400", "Plan: 80% de $2,000 = $1,600"] }
          ],
          tryIt: "Solo para practicar: resuelve este reclamo en papel. Una cuenta cubierta de $5,000, un deducible de $500 que aún no se ha cubierto y coaseguro 80/20. ¿Cuánto paga el asegurado y cuánto paga el plan? (Respuesta: el asegurado $500 + $900 = $1,400; el plan $3,600.)",
          youCanNow: "explicar las palabras principales de los seguros de vida y de salud y resolver un reclamo de salud con deducible y coaseguro.",
          quickCheck: [
            { objective: "O4", q: "Solo para practicar: una cuenta cubierta de $2,000, un deducible de $500 que aún no se ha cubierto y coaseguro 80/20. ¿Cuánto paga el asegurado?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "El deducible de $500 más el 20% de los $1,500 que quedan ($300) da $800." },
            { objective: "O3", q: "¿Qué póliza de vida acumula valor en efectivo?", options: ["Vida entera", "A término de diez años", "A término de veinte años", "Accidentes de viaje"], answer: 0, why: "Las pólizas permanentes, como la de vida entera, acumulan valor en efectivo; las de término no." }
          ]
        },
        {
          title: "Lo básico de propiedad y responsabilidad y el cálculo de un reclamo de propiedad",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Calcular cuánto paga una póliza de propiedad o de responsabilidad de auto en un reclamo de práctica.",
          text: [
            "Las pólizas de propiedad pagan los daños a las cosas que tienes. El costo de reposición paga para reemplazar el objeto por uno nuevo del mismo tipo. El valor real en efectivo paga el costo de reposición menos la depreciación (desgaste y antigüedad). Solo para practicar: un sofá cuesta $1,200 nuevo y tiene $500 de depreciación, así que su valor real en efectivo es $700. El deducible se resta del pago.",
            "La cobertura de responsabilidad (Casualty) le paga a otras personas cuando eres legalmente responsable de hacerles daño. Los límites de responsabilidad de auto muchas veces se escriben con tres números, como 25/50/25: hasta $25,000 por las lesiones de una persona, hasta $50,000 por todas las lesiones en un accidente y hasta $25,000 por daños a la propiedad. Tu estado fija los mínimos; revísalos.",
            "Solo para practicar: un conductor con límites 25/50/25 lesiona a una persona cuyas cuentas suman $40,000. La póliza paga $25,000, su límite por persona. Es posible que el conductor tenga que pagar los otros $15,000 de su bolsillo. Por eso los agentes explican los límites con cuidado."
          ],
          steps: ["Encuentra el monto de la pérdida y el tipo de cobertura.", "Para el valor real en efectivo, resta la depreciación del costo de reposición.", "Resta el deducible.", "Compara con el límite de la póliza; la aseguradora nunca paga más que el límite.", "Todo lo que pase del límite lo paga el asegurado."],
          words: [["Costo de reposición", "el costo de reemplazar un objeto por uno nuevo del mismo tipo y calidad."], ["Valor real en efectivo", "el costo de reposición menos la depreciación."], ["Depreciación", "la pérdida de valor por antigüedad y desgaste."], ["Límite de la póliza", "lo más que pagará la aseguradora por una pérdida cubierta."], ["Límites divididos", "límites de responsabilidad de auto escritos con tres números, como 25/50/25."]],
          slides: [
            { title: "Propiedad: dos formas de pagar", bullets: ["Costo de reposición: un objeto nuevo del mismo tipo", "Valor real en efectivo: costo de reposición menos depreciación", "El deducible se resta del pago"] },
            { title: "Responsabilidad: daños a otros", bullets: ["Paga cuando legalmente le haces daño a otros", "Límites de auto como 25/50/25", "Tu estado fija los mínimos"] },
            { title: "Reclamo de práctica (inventado)", bullets: ["25/50/25, una persona lesionada, $40,000 en cuentas", "La póliza paga el límite por persona de $25,000", "El conductor podría deber los otros $15,000"] }
          ],
          tryIt: "Solo para practicar: un incendio en la cocina causa $18,000 de daños cubiertos. La póliza de vivienda paga costo de reposición, el deducible es de $1,000 y el límite de la vivienda es de $250,000. Escribe cuánto paga la aseguradora y cuánto paga el dueño de la casa. (Respuesta: la aseguradora $17,000; el dueño $1,000.)",
          youCanNow: "distinguir la cobertura de propiedad de la de responsabilidad y resolver reclamos de práctica con depreciación, deducibles y límites.",
          quickCheck: [
            { objective: "O4", q: "Solo para practicar: un televisor cuesta $900 nuevo y tiene $300 de depreciación. ¿Cuál es su valor real en efectivo?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "El valor real en efectivo es el costo de reposición menos la depreciación: $900 - $300 = $600." },
            { objective: "O1", q: "Un cliente lesiona sin querer a un repartidor en su casa y lo demandan. ¿Qué tipo de cobertura responde?", options: ["Vida", "Responsabilidad (Casualty)", "Ingresos por discapacidad", "Daños a la propiedad de la casa"], answer: 1, why: "La cobertura de responsabilidad le paga a otros cuando el asegurado es legalmente responsable de hacerles daño." }
          ]
        },
        {
          title: "Reglas de ética y tu plan de estudio y examen",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Detectar prácticas de venta poco éticas y escribir un plan de estudio y examen con fechas.",
          text: [
            "Los estados tienen leyes sobre prácticas comerciales desleales, y todos los exámenes las evalúan. La declaración falsa es mentir u ocultar lo que hace una póliza. El twisting (inducción engañosa) es convencer a un cliente de reemplazar una póliza con una mentira o una comparación engañosa, en su perjuicio. El churning (reemplazo excesivo) es reemplazar pólizas una y otra vez principalmente para ganar comisiones nuevas. El rebating (reembolso de comisión) es dar parte de tu comisión o un regalo para lograr una venta; es ilegal en muchos estados, así que revisa la regla de tu estado. Las primas que cobras son del cliente y de la aseguradora: el agente las guarda en fideicomiso (un deber fiduciario) y no debe mezclarlas con su dinero personal (mezcla de fondos).",
            "La acción honesta es sencilla: di la verdad sobre la cobertura, pon primero las necesidades del cliente, compara pólizas de forma justa, deja todo por escrito y mantén aparte el dinero de las primas. Si no estás seguro, pregúntale a tu gerente o al departamento estatal.",
            "Ahora, a planear. Usa el temario de tu estado para hacer una lista de cada tema y su número de preguntas. Da más días de estudio a los temas más pesados. Fija una fecha meta para el examen, dos o más fechas de examen de práctica y un puntaje meta. Termina cualquier curso previo a la licencia que se exija antes de reservar el examen. Lee cada pregunta del examen dos veces y fíjate en palabras como EXCEPT y NOT (EXCEPTO y NO).",
            "Tarea final: escribe tu Plan de Estudio y Examen de una página con tu línea de licencia, los pasos oficiales de tu estado con sus direcciones web, los temas del temario y su peso, un horario semanal con fechas, las fechas de los exámenes de práctica, tres reclamos de práctica y tres reglas de ética."
          ],
          steps: ["Haz una lista en orden de los pasos oficiales de tu estado con sus direcciones web.", "Copia cada tema del temario y su número de preguntas.", "Da más días de estudio a los temas con más preguntas.", "Elige una fecha meta para el examen y al menos dos fechas de examen de práctica con un puntaje meta.", "Agrega tres reclamos de práctica y tres reglas de ética con tus propias palabras."],
          words: [["Declaración falsa", "mentir u ocultar lo que hace o cuesta una póliza."], ["Twisting (inducción engañosa)", "usar mentiras o comparaciones engañosas para que un cliente reemplace una póliza."], ["Churning (reemplazo excesivo)", "reemplazar pólizas una y otra vez principalmente para ganar comisiones."], ["Rebating (reembolso de comisión)", "devolver parte de una comisión o dar un regalo para ganar una venta; ilegal en muchos estados."], ["Fiduciario", "una persona a quien se le confía manejar con honestidad el dinero de otra."], ["Mezcla de fondos", "mezclar el dinero de las primas de los clientes con tu propio dinero."]],
          slides: [
            { title: "Prácticas que evalúa el examen", bullets: ["Declaración falsa: mentir sobre una póliza", "Twisting: engañar a un cliente para que reemplace una póliza", "Churning: reemplazar pólizas para ganar comisiones", "Rebating: ilegal en muchos estados, revisa el tuyo"] },
            { title: "El dinero de las primas", bullets: ["Lo guardas en fideicomiso: deber fiduciario", "Nunca lo mezcles con tu propio dinero"] },
            { title: "Arma tu plan", bullets: ["Pasos y direcciones web de tu estado", "Temas del temario y su peso", "Horario semanal con fechas y exámenes de práctica"] },
            { title: "El día del examen", bullets: ["Lee cada pregunta dos veces", "Fíjate en EXCEPT y NOT (EXCEPTO y NO)", "Lleva la identificación que pide el manual"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Tarea final: escribe en una página tu Plan de Estudio y Examen para la Licencia de Seguros, usando los pasos oficiales y el temario de tu estado, con fechas reales para cada semana de estudio, dos exámenes de práctica y tu fecha meta para el examen.",
          youCanNow: "detectar prácticas de venta poco éticas, elegir la acción honesta y seguir un plan de estudio y examen con fechas para tu examen de licencia.",
          quickCheck: [
            { objective: "O5", q: "Un agente le dice a una señora mayor que su póliza vieja \"no vale nada\" para que compre una nueva que le deja más dinero al agente. ¿Qué es esto?", options: ["Suscripción", "Indemnización", "Twisting (inducción engañosa)", "Un nombramiento"], answer: 2, why: "Usar una afirmación engañosa para que un cliente reemplace una póliza es twisting." },
            { objective: "O6", q: "El temario de tu estado le da a un tema muchas más preguntas que a los demás. ¿Qué haces en tu plan?", options: ["Darle más días de estudio a ese tema", "Saltarlo porque es largo", "Estudiar solo los temas más pequeños", "Ignorar el temario"], answer: 0, why: "Los temas con más preguntas merecen más tiempo de estudio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Contenido del examen y preparación para la prueba",
        questions: [
          { objective: "O4", q: "Solo para practicar: una cuenta cubierta de $4,000, el deducible ya cubierto y coaseguro 80/20. ¿Cuánto paga el plan?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Con el deducible ya cubierto, el plan paga el 80% de $4,000, que es $3,200." },
          { objective: "O4", q: "Solo para practicar: $12,000 de daños cubiertos por una tormenta, costo de reposición y un deducible de $2,000. ¿Cuánto paga la aseguradora?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "El deducible se resta de la pérdida: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "¿Quién recibe el beneficio por muerte si el beneficiario principal ya murió?", options: ["El agente", "El beneficiario contingente", "La aseguradora", "El estado"], answer: 1, why: "El beneficiario contingente es el siguiente en la lista cuando el beneficiario principal ya murió." },
          { objective: "O5", q: "Un cliente te paga una prima en efectivo. ¿Qué haces con ella?", options: ["Ponerla por ahora en tu cuenta personal", "Gastarla y devolverla después", "Manejarla como dinero en fideicomiso, aparte, como lo exigen tu agencia y tu estado", "Devolverle una parte al cliente como agradecimiento"], answer: 2, why: "Las primas se guardan en fideicomiso; mezclarlas con tu propio dinero es mezcla de fondos." },
          { objective: "O6", q: "¿Qué debe tener un buen plan de estudio y examen?", options: ["Solo la fecha del examen", "Pasos oficiales, temas del temario, semanas de estudio con fechas y exámenes de práctica", "Una lista de las comisiones del agente", "Respuestas copiadas de un sitio web"], answer: 1, why: "Un plan completo cubre los pasos oficiales, los temas del temario y fechas reales para estudiar y practicar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el examen de licencia de agente de seguros",
    questions: [
      { objective: "O1", q: "¿Cuál es la palabra legal para un agente de seguros con licencia que vende seguros?", options: ["Productor", "Suscriptor", "Ajustador", "Actuario"], answer: 0, why: "Las leyes estatales llaman productores a los agentes y corredores con licencia." },
      { objective: "O1", q: "Un banco te contrata para vender seguros de vida y cobertura de discapacidad a largo plazo. ¿Qué líneas necesitas?", options: ["Propiedad y Responsabilidad", "Líneas Personales", "Vida, y Accidentes y Salud", "Ajustador"], answer: 2, why: "Las pólizas de vida necesitan Vida, y la cobertura de discapacidad es Accidentes y Salud." },
      { objective: "O1", q: "¿Qué trabajo suele necesitar una licencia distinta de la de agente?", options: ["Vender seguros de inquilino", "Vender seguros de vida a término", "Vender seguros de auto", "Investigar y resolver reclamos como ajustador"], answer: 3, why: "Los ajustadores investigan y resuelven reclamos y casi siempre necesitan su propia licencia." },
      { objective: "O2", q: "¿Qué sitio web te ayuda a encontrar el departamento de seguros de cada estado?", options: ["La página de departamentos estatales de seguros de la NAIC", "El blog de un vendedor de cursos", "Un grupo de redes sociales", "Un foro en internet"], answer: 0, why: "La NAIC, el grupo de reguladores estatales, tiene enlaces a todos los departamentos estatales." },
      { objective: "O2", q: "En Texas, cuando revisamos, ¿cuándo podías solicitar una licencia general?", options: ["Antes de tomar cualquier examen", "Después de aprobar el examen estatal", "Solo después de cinco años de trabajo", "Solo a través de la compañía de seguros"], answer: 1, why: "El TDI (Departamento de Seguros de Texas) decía que primero hay que aprobar el examen y luego solicitar por Sircon o NIPR." },
      { objective: "O2", q: "Un amigo te dice que en todos lados se exige un curso de 20 horas. ¿Qué haces?", options: ["Creerle", "Pagar el curso más largo que encuentres", "Revisar la página del departamento de tu propio estado", "No tomar ningún curso"], answer: 2, why: "Las reglas previas a la licencia cambian según el estado, así que revisa la página oficial." },
      { objective: "O3", q: "¿Qué es una prima?", options: ["Lo que paga la aseguradora por un reclamo", "El dinero que paga el asegurado por la cobertura", "La licencia del agente", "El límite de la póliza"], answer: 1, why: "La prima es lo que paga el asegurado para comprar la cobertura." },
      { objective: "O3", q: "¿Qué página de una póliza muestra quién está cubierto, los límites y la prima?", options: ["La carta de presentación", "El formulario de reclamo", "La solicitud", "La página de declaraciones"], answer: 3, why: "La página de declaraciones resume quién y qué está cubierto, los límites y la prima." },
      { objective: "O3", q: "¿Por qué la redacción poco clara de una póliza casi siempre se interpreta a favor del cliente?", options: ["Porque la póliza es un contrato de adhesión escrito por la aseguradora", "Porque la escribió el agente", "Porque el cliente siempre tiene la razón", "Por la indemnización"], answer: 0, why: "La aseguradora escribe el contrato y el cliente lo acepta tal como está, así que lo poco claro favorece al cliente." },
      { objective: "O3", q: "¿Qué póliza de vida cubre una cantidad fija de años y no tiene valor en efectivo?", options: ["Vida entera", "Vida universal", "Vida a término", "Vida permanente"], answer: 2, why: "La vida a término cubre un periodo fijo y no acumula valor en efectivo." },
      { objective: "O4", q: "Solo para practicar: una cuenta cubierta de $6,000, un deducible de $1,000 que aún no se ha cubierto y coaseguro 80/20. ¿Cuánto paga el asegurado?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "El deducible de $1,000 más el 20% de los $5,000 que quedan ($1,000) da $2,000." },
      { objective: "O4", q: "Solo para practicar: un conductor con límites 25/50/25 lesiona a una persona cuyas cuentas suman $30,000. ¿Cuánto paga la póliza por esa persona?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "El límite por lesiones por persona es de $25,000; el conductor podría deber los otros $5,000." },
      { objective: "O4", q: "Solo para practicar: una laptop cuesta $1,000 nueva y tiene $400 de depreciación; el deducible es de $100. ¿Cuánto paga una póliza de valor real en efectivo?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "El valor real en efectivo es $1,000 - $400 = $600, menos el deducible de $100, lo que da $500." },
      { objective: "O4", q: "¿Qué cantidad pone un tope a lo que una persona paga en un año por atención de salud cubierta?", options: ["El copago", "La prima", "El máximo de gastos de bolsillo", "El deducible"], answer: 2, why: "El máximo de gastos de bolsillo es lo más que paga el asegurado en un año del plan por la atención cubierta." },
      { objective: "O5", q: "Un agente le ofrece a un cliente una tarjeta de regalo de $100 para que compre una póliza. ¿Cómo se llama esto?", options: ["Twisting (inducción engañosa)", "Rebating (reembolso de comisión)", "Suscripción", "Indemnización"], answer: 1, why: "Dar algo de valor para ganar una venta es rebating, que es ilegal en muchos estados." },
      { objective: "O5", q: "Un agente reemplaza la póliza de un cliente cada año principalmente para ganar comisiones nuevas. ¿Qué es esto?", options: ["Churning (reemplazo excesivo)", "Coaseguro", "Nombramiento", "Máxima buena fe"], answer: 0, why: "Reemplazar pólizas una y otra vez principalmente por las comisiones es churning." },
      { objective: "O5", q: "Un cliente pregunta si una póliza barata cubre daños por inundación y no estás seguro. ¿Qué haces?", options: ["Decir que sí para cerrar la venta", "Cambiar de tema", "Decir que la inundación siempre está cubierta", "Revisar la redacción de la póliza o preguntar a la compañía antes de responder"], answer: 3, why: "Adivinar sobre la cobertura arriesga una declaración falsa; revisa primero y di la verdad." },
      { objective: "O6", q: "¿Cuál es el mejor primer paso al armar tu plan de estudio para el examen?", options: ["Reservar el examen para mañana", "Comprar el curso más caro", "Conseguir los pasos oficiales y el temario del examen de tu estado", "Memorizar preguntas de práctica al azar"], answer: 2, why: "Los pasos oficiales y el temario muestran qué hacer y qué estudiar." },
      { objective: "O6", q: "Tu puntaje en el primer examen de práctica está por debajo de tu meta. ¿Qué cambias en tu plan?", options: ["Agregar días de estudio a tus temas más débiles del temario y fijar otro examen de práctica", "Cancelar el plan", "Tomar el examen real de inmediato", "Estudiar solo los temas que ya sabes"], answer: 0, why: "Los exámenes de práctica muestran los temas débiles; dedícales más tiempo y vuelve a practicar antes del examen real." },
      { objective: "O6", q: "En el examen, una pregunta pide qué elemento está cubierto, con la palabra \"EXCEPT\" (excepto). ¿Qué debes hacer?", options: ["Elegir la primera afirmación verdadera", "Saltarla", "Adivinar rápido", "Leerla dos veces y elegir el elemento que NO está cubierto"], answer: 3, why: "EXCEPT pide la única opción que no encaja; leer dos veces evita un error por descuido." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Línea de licencia correcta", objective: "O1", notYet: "No nombra ninguna línea, o nombra una que no corresponde al trabajo.", meets: "Nombra la línea de licencia que corresponde al trabajo y explica por qué.", exceeds: "También nombra una segunda línea o licencia que podría necesitar más adelante y por qué." },
      { name: "Pasos oficiales", objective: "O2", notYet: "Faltan pasos o vienen de anuncios o de amigos.", meets: "Todos los pasos de la página oficial del estado, en orden, con direcciones web.", exceeds: "Agrega la fecha de revisión, el manual de la empresa evaluadora y los pasos de verificación de antecedentes." },
      { name: "Temas del temario y términos", objective: "O3", notYet: "No hay temas del temario, o los términos básicos están mal explicados.", meets: "Enumera cada tema del temario con su peso y explica bien los términos clave.", exceeds: "Marca sus temas más débiles y agrega tarjetas de estudio para ellos." },
      { name: "Reclamos de práctica", objective: "O4", notYet: "Menos de tres reclamos, o respuestas equivocadas.", meets: "Tres reclamos de práctica bien resueltos, mostrando cada paso.", exceeds: "Los reclamos incluyen un deducible, un coaseguro y un límite de póliza, cada uno con la comprobación del cálculo." },
      { name: "Reglas de ética", objective: "O5", notYet: "Faltan reglas o están mal.", meets: "Tres reglas de ética bien explicadas con sus propias palabras.", exceeds: "Cada regla trae un ejemplo corto de la acción honesta." },
      { name: "Plan con fechas", objective: "O6", notYet: "No tiene fechas, o no tiene exámenes de práctica.", meets: "Un horario semanal con fechas, una fecha meta para el examen y dos exámenes de práctica con un puntaje meta.", exceeds: "Da más días de estudio a los temas más pesados del temario e incluye una fecha de examen de respaldo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que reservan su examen estatal de licencia en 60 días (encuesta de seguimiento)",
      "Participantes que dicen haber aprobado el examen estatal y obtenido la licencia (encuesta de seguimiento)",
      "Participantes que dicen haber recibido una oferta de trabajo o un nombramiento como agente de seguros, o haber abierto su propia agencia"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para abrir las páginas oficiales del estado",
      "Papel, lápiz y una calculadora básica",
      "El temario del examen y el manual del candidato del estado de cada participante (gratis en la empresa evaluadora)",
      "Unos 60 a 75 minutos en total, en sesiones cortas, más tiempo para el plan final"
    ],
    facilitatorNotes: [
      "Si puedes, agrupa a los participantes por estado y abran juntos la página de licencias de cada estado; no presentes las reglas de un estado como si valieran en todos.",
      "Deja claro que el curso prepara a los participantes y no reemplaza un curso previo a la licencia exigido por el estado ni da una licencia.",
      "Con participantes que tienen antecedentes penales, explica con honestidad la regla del consentimiento por escrito y mándalos al departamento de su estado; no adivines sobre su caso.",
      "Todos los cálculos de reclamos usan números inventados; no aconsejes qué póliza debe comprar nadie.",
      "Califica el plan final con la rúbrica y revisa que cada paso tenga una dirección web oficial."
    ]
  }
};

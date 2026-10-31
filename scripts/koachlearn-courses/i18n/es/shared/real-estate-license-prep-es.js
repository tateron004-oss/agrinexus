"use strict";

// Koach Learn course (Spanish translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

const SRC = {
  arello: { name: "ARELLO (asociación de funcionarios de las leyes de licencias inmobiliarias): agencias reguladoras", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "Departamento de Bienes Raíces de California: requisitos de la licencia de vendedor", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Comisión de Bienes Raíces de Texas: hazte agente de ventas", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: resumen de la Ley de Vivienda Justa", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: ¿Qué es una Estimación del Préstamo (Loan Estimate)?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: ¿Qué es una Declaración de Cierre (Closing Disclosure)?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Comprar una casa (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-es",
  lang: "es",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Preparación para el examen de licencia de bienes raíces",
  skills: "Encontrar los pasos de licencia de tu estado, Usar términos de propiedad y titularidad, Aplicar las reglas de representación y de vivienda justa, Seguir un contrato hasta el cierre, Resolver la matemática del examen inmobiliario, Armar un plan de estudio y examen con fechas",
  outcome: "encontrar los pasos para la licencia de bienes raíces de tu estado en la página oficial, explicar las ideas clave que evalúa el examen (propiedad, representación, vivienda justa, contratos y cierre), resolver la matemática más común del examen y seguir un plan de estudio y examen con fechas que hiciste tú.",
  about: [
    "Este curso es para personas adultas que quieren obtener la licencia de vendedor de bienes raíces (en algunos estados se llama agente de ventas): personas que cambian de carrera, que empiezan un pequeño negocio, veteranos, madres y padres que vuelven a trabajar y cualquiera que busque un trabajo en el que pueda crecer. Muchos agentes trabajan como contratistas independientes bajo un corredor con licencia, así que también sirve para emprendedores.",
    "En Estados Unidos, cada estado otorga las licencias de agente de bienes raíces. El regulador del estado fija las clases previas obligatorias, el examen, la revisión de antecedentes y las tarifas. Este curso te PREPARA; no otorga una licencia ni reemplaza las clases previas aprobadas por tu estado. Cada lección te muestra dónde revisar las reglas de tu propio estado.",
    "Vas a aprender las ideas clave que evalúan la mayoría de los exámenes estatales, practicar la matemática con números inventados y terminar con tu propio plan de estudio y examen con fechas. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel o en el teléfono. Este curso enseña cómo funcionan los bienes raíces; no da consejos para comprar propiedades ni para invertir."
  ],
  finalTask: "Haz tu propio Plan de estudio y examen para la licencia de bienes raíces (una o dos páginas): (1) el regulador de tu estado, la página oficial que usaste y los pasos que indica (edad, educación previa a la licencia, examen, huellas digitales o revisión de antecedentes, corredor patrocinador), cada uno con una fecha meta; (2) los temas del temario oficial del examen de tu estado, con tus tres temas más débiles marcados y un plan para cada uno; (3) una hoja de reglas de una página sobre los deberes del agente, las siete clases protegidas federales de vivienda justa y las partes de un contrato válido; (4) cinco problemas de matemática de práctica (comisión, relación préstamo-valor, impuesto a la propiedad, prorrateo, área) con el procedimiento a la vista; (5) un horario semanal de estudio hasta la fecha meta de tu examen.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas en Estados Unidos que se preparan para la licencia estatal de vendedor (agente de ventas) de bienes raíces: personas que cambian de carrera, dueños de pequeños negocios, emprendedores, veteranos, personas que vuelven al trabajo y jóvenes mayores de 18 años. Algunas solo terminaron la secundaria o el GED (examen de equivalencia de la secundaria); algunas hablan inglés como segundo idioma.",
    startingPoint: "Pueden leer un formulario sencillo y hacer cuentas básicas con calculadora. La mayoría no sabe quién otorga las licencias de agente en su estado, el orden de los pasos ni las palabras legales que usa el examen (dominio pleno, servidumbre, fiduciario, contraprestación, prorrateo).",
    gap: "Muchas personas pagan clases o un examen sin un plan, se saltan un paso (como las huellas digitales o un corredor patrocinador) o reprueban el examen por el vocabulario y la matemática. Quien conoce los pasos oficiales, las ideas clave y la matemática del examen, y tiene un plan con fechas, tiene muchas más probabilidades de aprobar y empezar a trabajar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 7.º a 8.º grado); cada palabra legal se explica",
      "Dispositivos: un teléfono o una computadora de la biblioteca para leer la página oficial del estado; papel, bolígrafo y una calculadora básica para cada tarea",
      "Tiempo: lecciones de 4 a 6 minutos que quepan alrededor del trabajo",
      "Las reglas cambian según el estado: las horas de estudio, el formato del examen, la nota para aprobar y las tarifas se revisan en la página del regulador estatal, nunca se suponen",
      "Este curso prepara; no reemplaza la educación previa a la licencia aprobada por el estado ni otorga una licencia",
      "Sin consejos de inversión, legales ni de impuestos; la matemática usa números inventados solo para practicar"
    ],
    prerequisites: "Ninguno. Quien quiera repasar los porcentajes puede tomar primero \"Matemática para el día a día\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando el sitio web oficial del regulador de bienes raíces de tu estado", action: "enumerar en el orden correcto los pasos para obtener la licencia de vendedor", standard: "sin que falte ningún paso y nombrando la página oficial" },
    { id: "O2", condition: "Con una descripción corta de una propiedad o de una situación de titularidad", action: "identificar el término inmobiliario correcto", standard: "acertando al menos 4 de 5" },
    { id: "O3", condition: "Con un caso de un cliente o de una persona que busca vivienda", action: "elegir la acción que cumple los deberes del agente y la ley de vivienda justa", standard: "acertando al menos 4 de 5 casos y nombrando la regla" },
    { id: "O4", condition: "Con una oferta de compra de ejemplo", action: "revisar que tenga las partes de un contrato válido y ordenar los pasos del cierre", standard: "sin que falte ninguna parte y con los plazos federales de las declaraciones correctos" },
    { id: "O5", condition: "Con un problema de palabras al estilo del examen y una calculadora", action: "calcular comisión, relación préstamo-valor, impuesto a la propiedad, prorrateo y área", standard: "acertando al menos 4 de 5 con el procedimiento a la vista" },
    { id: "O6", condition: "Usando el temario oficial del examen de tu estado y un calendario", action: "escribir un plan de estudio y examen con fechas", standard: "que cubra todos los temas del temario y tus tres temas más débiles" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La licencia y las ideas clave",
      lessons: [
        {
          title: "Cómo funciona la licencia de bienes raíces en tu estado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar los pasos de tu estado para la licencia de vendedor a partir de la página oficial.",
          text: [
            "En Estados Unidos no hay una licencia nacional de bienes raíces. Cada estado tiene su propio regulador, que a menudo se llama comisión de bienes raíces o departamento de bienes raíces. Este decide las clases, el examen, la revisión de antecedentes y las tarifas. ARELLO, la asociación de funcionarios de las leyes de licencias, tiene una lista de reguladores que puedes usar para encontrar el tuyo.",
            "Los pasos se parecen en la mayoría de los estados: cumplir la edad mínima, terminar las clases previas aprobadas por el estado, presentar la solicitud, pasar una revisión de antecedentes (a menudo con huellas digitales), aprobar el examen y trabajar bajo un corredor con licencia. Muchos exámenes tienen una parte nacional y una parte de leyes del estado.",
            "Los detalles cambian mucho. California pide tres cursos de nivel universitario (Principios de Bienes Raíces, Práctica de Bienes Raíces y uno optativo). Texas pide 180 horas de clase en seis cursos, huellas digitales con la policía estatal y exámenes aplicados por Pearson. Tu estado puede ser distinto, así que lee siempre la página de tu propio estado."
          ],
          steps: ["Encuentra el regulador de bienes raíces de tu estado (usa la lista de ARELLO o busca el nombre de tu estado más \"real estate commission\" y fíjate que sea .gov).", "Abre la página de la nueva licencia de vendedor o agente de ventas.", "Escribe cada paso en orden: edad, clases, solicitud, revisión de antecedentes, examen, corredor.", "Anota la dirección de la página y la fecha en que la revisaste."],
          words: [["Regulador de bienes raíces", "la oficina del estado que otorga las licencias de agente y hace cumplir las reglas, como una comisión de bienes raíces."], ["Vendedor (agente de ventas)", "la primera licencia de bienes raíces; trabajas bajo un corredor."], ["Corredor (broker)", "una licencia más alta; un corredor puede dirigir una oficina inmobiliaria y supervisar a los vendedores."], ["Educación previa a la licencia", "las clases aprobadas por el estado que debes terminar antes del examen o de la licencia."], ["Corredor patrocinador", "el corredor que acepta supervisarte cuando ya tienes la licencia."]],
          slides: [
            { title: "La licencia la da cada estado", bullets: ["No hay licencia nacional de bienes raíces", "El regulador de tu estado fija las clases, el examen y las tarifas", "ARELLO tiene la lista de reguladores"] },
            { title: "Pasos en la mayoría de los estados", bullets: ["Edad mínima y clases previas a la licencia", "Solicitud y revisión de antecedentes", "Examen (a menudo con parte nacional y estatal)", "Trabajar bajo un corredor con licencia"] },
            { title: "Los estados cambian: dos ejemplos", bullets: ["California: tres cursos de nivel universitario", "Texas: 180 horas en seis cursos, exámenes de Pearson", "Lee siempre la página de tu propio estado"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Encuentra el regulador de bienes raíces de tu estado. En papel, enumera en orden todos los pasos para la licencia de vendedor, con la dirección de la página y la fecha de hoy. Encierra en un círculo cualquier paso que no conocías.",
          youCanNow: "encontrar el regulador de bienes raíces de tu estado y enumerar en orden los pasos para la licencia de vendedor.",
          quickCheck: [
            { objective: "O1", q: "¿Quién decide las clases y el examen para la licencia de vendedor de bienes raíces?", options: ["Una junta nacional de bienes raíces", "La empresa inmobiliaria en la que entras", "El regulador de bienes raíces de tu estado", "El banco que presta a los compradores"], answer: 2, why: "Cada estado otorga las licencias de bienes raíces, y el regulador estatal fija los requisitos." },
            { objective: "O1", q: "Un sitio web que encontraste dice que las clases duran 60 horas. ¿Qué haces?", options: ["Revisar las horas en la página oficial del regulador de tu estado", "Creerle si se ve profesional", "Pagar ya la clase más barata", "Preguntarle a un amigo de otro estado"], answer: 0, why: "Las horas cambian según el estado y con el tiempo, así que solo la página oficial de tu estado es confiable." }
          ]
        },
        {
          title: "Palabras de propiedad y titularidad que usa el examen",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar el término correcto para una situación de propiedad o de titularidad.",
          text: [
            "La propiedad inmueble (real property) es el terreno y todo lo que está fijo a él, como una casa, una cerca o un árbol, más los derechos que vienen con él. La propiedad personal es lo que se puede mover, como un sofá. Un accesorio fijo (fixture) era propiedad personal pero ahora está fijo, como un ventilador de techo o un lavavajillas empotrado, así que normalmente se queda con la casa.",
            "Ser dueño de una propiedad inmueble significa tener un conjunto de derechos: poseerla, usarla, disfrutarla, excluir a otros y venderla o heredarla. El dominio pleno (fee simple) es la forma más completa de propiedad. Cuando dos o más personas son dueñas juntas, la tenencia conjunta (joint tenancy) suele incluir el derecho de supervivencia (al morir uno, su parte pasa a los otros dueños), y la tenencia en común (tenancy in common) no lo incluye.",
            "La escritura (deed) transfiere la propiedad; el título es el derecho de propiedad en sí. Lo que limita o carga una propiedad son gravámenes (encumbrances): un embargo o derecho de retención (lien), que es un reclamo de dinero, como una hipoteca o un impuesto sin pagar, y una servidumbre (easement), que es un derecho a usar el terreno de otra persona, como una línea de servicios. El terreno se describe de tres maneras principales: rumbos y distancias (metes and bounds), el sistema de agrimensura rectangular (del gobierno) y lote y manzana (lot and block) de un plano registrado."
          ],
          words: [["Propiedad inmueble", "el terreno, lo que está fijo a él y los derechos de propiedad."], ["Accesorio fijo", "un objeto fijo a la propiedad, por eso se trata como parte de ella."], ["Dominio pleno", "la forma más completa de propiedad."], ["Derecho de supervivencia", "cuando muere un copropietario, su parte pasa a los otros copropietarios."], ["Gravamen", "cualquier cosa que limita o carga una propiedad, como un embargo o una servidumbre."], ["Embargo (lien)", "un reclamo legal de dinero sobre una propiedad."], ["Servidumbre", "un derecho a usar parte del terreno de otra persona para un fin determinado."]],
          slides: [
            { title: "Propiedad inmueble y personal", bullets: ["Inmueble: el terreno y lo que está fijo", "Personal: cosas que se pueden mover", "Accesorio fijo: está fijo, así que suele quedarse"] },
            { title: "La propiedad", bullets: ["Conjunto de derechos: poseer, usar, disfrutar, excluir, vender", "Dominio pleno: la propiedad más completa", "Tenencia conjunta tiene supervivencia; tenencia en común no"] },
            { title: "Título y límites", bullets: ["La escritura transfiere; el título es la propiedad", "Embargo (lien): un reclamo de dinero", "Servidumbre: derecho a usar el terreno de otro"] },
            { title: "Describir el terreno", bullets: ["Rumbos y distancias", "Agrimensura rectangular (del gobierno)", "Lote y manzana de un plano registrado"] }
          ],
          tryIt: "Haz 10 tarjetas de estudio en papel: el término al frente y, atrás, tu propio significado sencillo más un ejemplo (propiedad inmueble, propiedad personal, accesorio fijo, dominio pleno, tenencia conjunta, tenencia en común, escritura, título, embargo, servidumbre). Ponte a prueba dos veces.",
          youCanNow: "nombrar el término inmobiliario correcto para situaciones comunes de propiedad y titularidad.",
          quickCheck: [
            { objective: "O2", q: "La compañía de luz tiene derecho a pasar una línea por el fondo de un patio. Esto es:", options: ["Un accesorio fijo", "Dominio pleno", "Propiedad personal", "Una servidumbre"], answer: 3, why: "Una servidumbre es un derecho a usar parte del terreno de otra persona para un fin determinado." },
            { objective: "O2", q: "Dos hermanas son dueñas de una casa. Cuando una muere, su parte pasa a la otra automáticamente. Lo más probable es que tengan el título como:", options: ["Tenientes en común", "Tenientes conjuntas", "Inquilinas", "Titulares de un embargo"], answer: 1, why: "La tenencia conjunta suele incluir el derecho de supervivencia; la tenencia en común no." }
          ]
        },
        {
          title: "Deberes del agente y vivienda justa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Elegir en un caso la acción que cumple los deberes del agente y la ley de vivienda justa.",
          text: [
            "Cuando representas a un cliente, eres su agente y le debes deberes fiduciarios. Muchos libros los resumen con la sigla en inglés OLDCAR: obediencia (a instrucciones legales), lealtad, divulgación (de hechos importantes), confidencialidad, rendición de cuentas (del dinero que guardas) y cuidado razonable. La ley de tu estado fija los deberes exactos y los formularios de divulgación.",
            "Representar al comprador y al vendedor en el mismo negocio se llama representación dual (dual agency). Algunos estados la permiten solo con el consentimiento por escrito de ambas partes, y otros la limitan o la prohíben. Revisa las reglas de tu estado.",
            "La Ley federal de Vivienda Justa (Fair Housing Act) prohíbe discriminar en la vivienda por raza, color, origen nacional, religión, sexo, situación familiar (como tener hijos) o discapacidad. Los estados y las ciudades pueden agregar más grupos. Las prácticas ilegales incluyen el direccionamiento (steering: guiar a las personas hacia ciertas zonas o lejos de ellas por una clase protegida), el pánico inmobiliario (blockbusting: presionar a los dueños para que vendan avisando que un grupo se está mudando a la zona) y la línea roja (redlining: negar préstamos o seguros en ciertas zonas)."
          ],
          steps: ["Pregúntate: ¿quién es mi cliente y qué le debo?", "Pregúntate: ¿esta petición trata distinto a alguien por una clase protegida?", "Si es así, no lo hagas; explica la ley con amabilidad.", "Anota lo que pasó y avísale a tu corredor."],
          words: [["Agente", "una persona autorizada para actuar en nombre de otra (el cliente o mandante)."], ["Fiduciario", "una persona en una posición de confianza que debe poner primero los intereses del cliente."], ["Representación dual", "un agente o una oficina que representa al comprador y al vendedor en el mismo negocio."], ["Clase protegida", "un grupo que la ley protege de la discriminación, como la raza o la discapacidad."], ["Direccionamiento (steering)", "guiar a las personas hacia ciertas zonas o lejos de ellas por una clase protegida; es ilegal."]],
          slides: [
            { title: "Deberes con tu cliente (OLDCAR)", bullets: ["Obediencia, lealtad, divulgación", "Confidencialidad, rendición de cuentas, cuidado razonable", "La ley de tu estado fija los deberes exactos"] },
            { title: "Representación dual", bullets: ["Representar a ambas partes en un negocio", "Las reglas cambian: consentimiento, límites o prohibición", "Revisa tu estado"] },
            { title: "Ley de Vivienda Justa: 7 clases", bullets: ["Raza, color, origen nacional, religión", "Sexo, situación familiar, discapacidad", "Estados y ciudades pueden agregar más"] },
            { title: "Prácticas ilegales", bullets: ["Direccionamiento (steering)", "Pánico inmobiliario (blockbusting)", "Línea roja (redlining)"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Escribe tres casos cortos en los que un vendedor o un comprador te pide algo injusto (por ejemplo, \"No le muestres mi casa a familias con niños\"). Para cada uno, escribe la clase protegida que está en juego y una frase amable que dirías en su lugar.",
          youCanNow: "aplicar los deberes del agente y la ley de vivienda justa para elegir la acción correcta con los clientes.",
          quickCheck: [
            { objective: "O3", q: "Un vendedor dice: \"Muestra mi casa solo a personas sin hijos\". ¿Qué haces?", options: ["Explicar que la situación familiar está protegida y que debes mostrarla a todos", "Aceptar, porque el vendedor es tu cliente", "Mostrarla solo entre semana", "Preguntar a los compradores cuántos hijos tienen"], answer: 0, why: "La situación familiar es una clase protegida por la Ley de Vivienda Justa, y la obediencia solo cubre instrucciones legales." },
            { objective: "O3", q: "Tu vendedor te dice el precio más bajo que aceptaría. Un comprador te lo pregunta. ¿Qué deber se aplica?", options: ["Rendición de cuentas", "Confidencialidad", "Divulgación al comprador", "Obediencia al comprador"], answer: 1, why: "Un agente mantiene confidencial la información privada del cliente, como su precio más bajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La licencia y las ideas clave",
        questions: [
          { objective: "O1", q: "¿Cuál suele ser el PRIMER paso hacia la licencia de vendedor?", options: ["Entrar a la oficina de un corredor patrocinador", "Tomar el examen estatal", "Conseguir tu primer cliente", "Leer los requisitos del regulador de tu estado"], answer: 3, why: "Necesitas la lista oficial de pasos antes de pagar las clases o el examen." },
          { objective: "O2", q: "Un lavavajillas empotrado que estaba fijo en la cocina es muy probablemente:", options: ["Propiedad personal", "Un accesorio fijo", "Una servidumbre", "Un embargo"], answer: 1, why: "Un objeto fijo a la propiedad es un accesorio fijo y normalmente se queda con la casa." },
          { objective: "O2", q: "Una factura de impuesto a la propiedad sin pagar le da al condado un reclamo sobre la casa. Esto es:", options: ["Un embargo (lien)", "Una escritura", "Dominio pleno", "Tenencia conjunta"], answer: 0, why: "Un embargo es un reclamo legal de dinero sobre una propiedad." },
          { objective: "O3", q: "Un agente le dice a un comprador: \"Estarías más cómodo en un barrio con gente de tu religión\". Esto es:", options: ["Buen servicio al cliente", "Pánico inmobiliario", "Direccionamiento, que es ilegal", "Línea roja"], answer: 2, why: "Guiar a las personas hacia ciertas zonas o lejos de ellas por una clase protegida es direccionamiento." },
          { objective: "O3", q: "¿Cuál NO es una clase protegida por la Ley federal de Vivienda Justa?", options: ["Discapacidad", "Origen nacional", "Situación familiar", "Equipo deportivo favorito"], answer: 3, why: "Las siete clases federales son raza, color, origen nacional, religión, sexo, situación familiar y discapacidad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Contratos, matemática y tu plan de examen",
      lessons: [
        {
          title: "Los contratos y el camino al cierre",
          objectives: ["O4"],
          minutes: 6,
          goal: "Revisar una oferta de compra para ver si tiene las partes de un contrato válido y ordenar los pasos del cierre.",
          text: [
            "Un contrato válido necesita: partes que legalmente pueden firmar (capaces), una oferta y una aceptación (acuerdo mutuo), una contraprestación (algo de valor que da cada parte) y un fin legal. Un contrato para comprar o vender bienes raíces por lo general debe estar por escrito para poder hacerse cumplir; esta regla se llama ley de fraudes (statute of frauds).",
            "Un contrato es nulo (void) si nunca fue válido (por ejemplo, si tiene un fin ilegal). Es anulable (voidable) si una de las partes puede cancelarlo, por ejemplo cuando lo firmó un menor de edad. La mayoría de las ofertas de compra incluyen condiciones (contingencies), como conseguir un préstamo o una buena inspección, y un depósito de buena fe (earnest money), que muestra que el comprador va en serio.",
            "Un camino común es: oferta, aceptación, apertura de la cuenta de garantía (escrow) o del agente de cierre, inspección, avalúo y aprobación del préstamo, recorrido final y cierre. Las reglas federales protegen a quien pide el préstamo: el prestamista entrega una Estimación del Préstamo (Loan Estimate) dentro de los tres días hábiles después de la solicitud, y una Declaración de Cierre (Closing Disclosure) al menos tres días hábiles antes del cierre, para que el comprador pueda compararlas."
          ],
          steps: ["Revisa que las partes estén nombradas y puedan firmar.", "Revisa que haya una oferta clara y una aceptación firmada.", "Revisa el precio, el depósito de buena fe y lo que da cada parte (contraprestación).", "Revisa que esté por escrito y tenga un fin legal.", "Enumera las condiciones y sus plazos.", "Ordena los pasos del cierre, con los plazos de la Estimación del Préstamo y de la Declaración de Cierre."],
          words: [["Contraprestación", "algo de valor que da cada parte, como dinero o una promesa."], ["Ley de fraudes", "la regla de que los contratos de bienes raíces por lo general deben estar por escrito para hacerse cumplir."], ["Nulo / anulable", "nulo: nunca fue un contrato válido; anulable: es válido, pero una parte puede cancelarlo."], ["Condición (contingency)", "algo que tiene que pasar para que el negocio siga, como la aprobación del préstamo."], ["Depósito de buena fe", "un depósito que hace el comprador para mostrar que va en serio."], ["Declaración de Cierre", "el formulario final del prestamista con los términos del préstamo y los costos de cierre."]],
          slides: [
            { title: "Partes de un contrato válido", bullets: ["Partes capaces", "Oferta y aceptación", "Contraprestación y fin legal", "Por escrito en bienes raíces"] },
            { title: "Nulo, anulable, con condiciones", bullets: ["Nulo: nunca fue válido", "Anulable: una parte puede cancelarlo", "Condición: algo que debe pasar, como el préstamo"] },
            { title: "Camino al cierre", bullets: ["Oferta, aceptación, cuenta de garantía", "Inspección, avalúo, aprobación del préstamo", "Recorrido final y luego el cierre"] },
            { title: "Formularios federales del préstamo (CFPB)", bullets: ["Estimación del Préstamo: 3 días hábiles tras la solicitud", "Declaración de Cierre: 3+ días hábiles antes del cierre"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Escribe una oferta de compra corta e inventada (nombres, dirección, precio, depósito de buena fe, una condición, firmas). Luego revísala con los seis pasos de arriba y anota lo que falta. Termina con los pasos del cierre en orden.",
          youCanNow: "revisar una oferta de compra para ver si tiene las partes de un contrato válido y ordenar los pasos hasta el cierre.",
          quickCheck: [
            { objective: "O4", q: "Un comprador y un vendedor acuerdan la venta de una casa solo por teléfono. Según la ley de fraudes, el acuerdo:", options: ["Se puede hacer cumplir por completo", "Se puede hacer cumplir después de una semana", "Por lo general no se puede hacer cumplir hasta que esté por escrito", "Es ilegal"], answer: 2, why: "Los contratos de bienes raíces por lo general deben estar por escrito para hacerse cumplir." },
            { objective: "O4", q: "¿Cuándo debe recibir el prestatario la Declaración de Cierre?", options: ["Al menos tres días hábiles antes del cierre", "El día del cierre", "Dentro de un mes después del cierre", "Antes de hacer una oferta"], answer: 0, why: "La CFPB (Oficina para la Protección Financiera del Consumidor) dice que el prestamista entrega la Declaración de Cierre al menos tres días hábiles antes del cierre." }
          ]
        },
        {
          title: "La matemática del examen de bienes raíces",
          objectives: ["O5"],
          minutes: 6,
          goal: "Calcular comisión, relación préstamo-valor, impuesto a la propiedad, prorrateo y área.",
          text: [
            "Solo para practicar: todos los números aquí son inventados. Comisión: precio de venta por la tasa. Una venta de $300,000 al 6% da $18,000. Si a la oficina que listó la casa le toca la mitad, son $9,000; si al agente le toca el 60%, el agente recibe $5,400.",
            "La relación préstamo-valor (LTV) es el préstamo dividido entre el valor. Un préstamo de $240,000 sobre una casa de $300,000 da 0.80, o sea 80%. El impuesto a la propiedad es el valor tasado por la tasa del impuesto: $200,000 por 1.5% da $3,000 al año, o $250 al mes.",
            "El prorrateo reparte un costo por días. Si el impuesto anual es de $3,650 y el año tiene 365 días, son $10 al día; si el vendedor fue dueño de la casa 120 días y el comprador paga la factura después, el vendedor le debe al comprador $1,200. Área: largo por ancho. Un lote de 50 pies por 120 pies mide 6,000 pies cuadrados. Un acre son 43,560 pies cuadrados. Revisa si tu examen usa un año de 360 o de 365 días."
          ],
          steps: ["Lee la pregunta y subraya lo que te pide.", "Escribe la fórmula (parte = total por tasa).", "Convierte los porcentajes en decimales (6% = 0.06).", "Haz un paso a la vez en papel.", "Pregúntate: ¿tiene sentido la respuesta?"],
          words: [["Comisión", "el pago por vender, por lo general un porcentaje del precio de venta."], ["Reparto (split)", "cómo se divide una comisión entre oficinas o entre un corredor y un agente."], ["Relación préstamo-valor (LTV)", "el monto del préstamo dividido entre el valor de la propiedad, como porcentaje."], ["Valor tasado", "el valor que usa el gobierno local para calcular el impuesto a la propiedad."], ["Prorrateo", "dividir un costo entre comprador y vendedor según los días que cada uno es dueño de la propiedad."]],
          slides: [
            { title: "Comisión", bullets: ["Precio de venta x tasa", "$300,000 x 6% = $18,000", "Mitad a la oficina que listó = $9,000; reparto del 60% = $5,400"] },
            { title: "LTV e impuesto a la propiedad", bullets: ["LTV = préstamo / valor: $240,000 / $300,000 = 80%", "Impuesto = valor tasado x tasa: $200,000 x 1.5% = $3,000"] },
            { title: "Prorrateo y área", bullets: ["$3,650 / 365 = $10 al día; 120 días = $1,200", "50 pies x 120 pies = 6,000 pies cuadrados", "1 acre = 43,560 pies cuadrados"] },
            { title: "Método", bullets: ["Subraya la pregunta", "Escribe la fórmula, usa decimales", "Revisa que la respuesta tenga sentido"] }
          ],
          tryIt: "Solo para practicar. Resuelve en papel con calculadora: (1) comisión del 5% sobre $250,000; (2) LTV de un préstamo de $180,000 sobre una casa de $200,000; (3) impuesto anual de un valor tasado de $150,000 al 2%; (4) la parte del vendedor de un impuesto anual de $1,825 por 73 días (año de 365 días); (5) pies cuadrados de un lote de 80 pies por 100 pies. Respuestas: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "resolver la matemática común de un examen de bienes raíces y mostrar tu procedimiento.",
          quickCheck: [
            { objective: "O5", q: "Solo para practicar: ¿cuál es la LTV de un préstamo de $270,000 sobre una casa de $300,000?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 entre $300,000 da 0.90, o sea 90%." },
            { objective: "O5", q: "Solo para practicar: un lote mide 100 pies por 150 pies. ¿Cuántos pies cuadrados tiene?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "El área es largo por ancho: 100 por 150 da 15,000 pies cuadrados." }
          ]
        },
        {
          title: "Tu plan de estudio y examen",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Escribir un plan de estudio y examen con fechas a partir del temario oficial del examen de tu estado.",
          text: [
            "Tu estado o su empresa de exámenes publica un manual del candidato. Por lo general trae el temario del examen (los temas y cuántas preguntas hay de cada uno), las reglas del día del examen, la identificación que debes llevar y cómo programar la cita. Descárgalo del sitio oficial, no de una copia que alguien publicó.",
            "Convierte el temario en un plan. Enumera todos los temas, califícate del 1 al 3 en cada uno y marca tus tres más débiles. Pon las fechas importantes en un calendario, contando hacia atrás desde una fecha meta para el examen: terminar las clases, presentar la solicitud, tomar las huellas digitales, programar el examen. Luego fija bloques cortos de estudio cada semana, con preguntas de práctica y matemática todas las semanas.",
            "Los exámenes de práctica ayudan más cuando revisas cada respuesta equivocada y escribes por qué la respuesta correcta es correcta. Cuidado con cualquier sitio que prometa \"aprobación garantizada\" o que venda preguntas reales del examen; eso es una estafa o una trampa, y los estados pueden negarte la licencia por ello."
          ],
          steps: ["Descarga el manual del candidato de tu estado desde el sitio oficial.", "Copia los temas del temario del examen.", "Califícate del 1 al 3 en cada tema; marca tus tres más débiles.", "Fija una fecha meta para el examen y cuenta hacia atrás hasta cada paso.", "Planea bloques de estudio semanales con preguntas de práctica y matemática.", "Revisa cada respuesta equivocada y escribe por qué la correcta es correcta."],
          words: [["Manual del candidato", "la guía oficial del examen: temas, reglas, identificación y cómo programarlo."], ["Temario del examen", "la lista de temas del examen y cuánto vale cada uno."], ["Fecha meta", "la fecha en que piensas tomar el examen; planeas hacia atrás desde ella."]],
          slides: [
            { title: "Empieza con el manual oficial", bullets: ["Temario del examen", "Reglas e identificación para el día del examen", "Cómo programar la cita"] },
            { title: "Arma el plan", bullets: ["Califica cada tema del 1 al 3", "Marca tus tres más débiles", "Cuenta hacia atrás desde una fecha meta"] },
            { title: "Practica con inteligencia", bullets: ["Preguntas de práctica y matemática cada semana", "Revisa cada respuesta equivocada", "Nada de \"aprobación garantizada\" ni preguntas filtradas"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Tarea final: haz tu Plan de estudio y examen para la licencia de bienes raíces: los pasos de tu estado con fechas y la página oficial, los temas del temario con tus tres más débiles marcados, una hoja de reglas sobre representación, vivienda justa y contratos, cinco problemas de matemática resueltos y un horario semanal hasta la fecha de tu examen.",
          youCanNow: "convertir el temario del examen de tu estado en un plan de estudio y examen con fechas, y seguirlo.",
          quickCheck: [
            { objective: "O6", q: "¿De dónde debe salir la lista de temas de tu plan de estudio?", options: ["De una publicación en redes sociales", "Del temario oficial del examen de tu estado", "De los temas que más te gustan", "De un sitio que vende preguntas reales del examen"], answer: 1, why: "El temario oficial muestra lo que el examen evalúa de verdad." },
            { objective: "O6", q: "Sigues fallando las preguntas de prorrateo en los exámenes de práctica. ¿Cuál es el mejor plan?", options: ["Saltarte el prorrateo; son pocas preguntas", "Tomar el examen antes", "Marcarlo como tema débil y agregar práctica de matemática cada semana", "Comprar un paquete de \"aprobación garantizada\""], answer: 2, why: "Marcar los temas débiles y practicarlos cada semana cierra la brecha antes del día del examen." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Contratos, matemática y tu plan de examen",
        questions: [
          { objective: "O4", q: "¿Cuál NO es una de las partes de un contrato válido?", options: ["Oferta y aceptación", "Contraprestación", "Un sello de notario en cada página", "Fin legal"], answer: 2, why: "Un contrato válido necesita partes capaces, acuerdo mutuo, contraprestación y un fin legal; un sello en cada página no es una de ellas." },
          { objective: "O4", q: "Una oferta de compra dice que el negocio sigue solo si el comprador consigue un préstamo. Esto es una:", options: ["Condición", "Embargo", "Servidumbre", "Comisión"], answer: 0, why: "Una condición es algo que tiene que pasar para que el negocio siga." },
          { objective: "O5", q: "Solo para practicar: una venta de $400,000 con 5% de comisión da:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 por 0.05 da $20,000." },
          { objective: "O5", q: "Solo para practicar: un valor tasado de $250,000 con una tasa de impuesto del 2% da un impuesto anual de:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 por 0.02 da $5,000." },
          { objective: "O6", q: "¿Cuál es la mejor manera de usar un examen de práctica?", options: ["Memorizar solo las respuestas", "Revisar cada respuesta equivocada y escribir por qué la correcta es correcta", "Hacerlo una vez y parar", "Compartir las preguntas en internet"], answer: 1, why: "Revisar por qué cada respuesta es correcta crea la comprensión que evalúa el examen real." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el examen de licencia de bienes raíces",
    questions: [
      { objective: "O1", q: "¿Quién otorga las licencias de vendedor de bienes raíces en Estados Unidos?", options: ["El gobierno federal", "El regulador de bienes raíces de cada estado", "La Asociación Nacional de Agentes Inmobiliarios (NAR)", "Tu banco local"], answer: 1, why: "Las licencias las da cada estado, a través de su regulador de bienes raíces." },
      { objective: "O1", q: "¿Qué paso viene en la mayoría de los estados antes de poder trabajar como vendedor?", options: ["Ser dueño de una casa", "Vender cinco casas", "Aprobar el examen estatal y una revisión de antecedentes", "Hacerte corredor"], answer: 2, why: "La mayoría de los estados piden el examen y una revisión de antecedentes, y luego trabajar bajo un corredor." },
      { objective: "O1", q: "Un vendedor debe trabajar bajo:", options: ["Un corredor con licencia", "Un banco", "Un inspector de viviendas", "Una compañía de títulos"], answer: 0, why: "A los vendedores los supervisa un corredor con licencia." },
      { objective: "O2", q: "¿Cuál es propiedad personal?", options: ["Una calefacción empotrada", "Un árbol en el patio", "El terreno", "Un sofá en la sala"], answer: 3, why: "La propiedad personal se puede mover; el sofá no está fijo." },
      { objective: "O2", q: "La forma más completa de propiedad es:", options: ["Servidumbre", "Dominio pleno", "Embargo", "Arrendamiento"], answer: 1, why: "El dominio pleno le da al dueño el conjunto de derechos más completo." },
      { objective: "O2", q: "¿Qué forma de describir el terreno usa un plano registrado de un fraccionamiento?", options: ["Rumbos y distancias", "Dominio pleno", "Lote y manzana", "Prorrateo"], answer: 2, why: "Lote y manzana se refiere a lotes en un plano registrado de un fraccionamiento." },
      { objective: "O2", q: "Los copropietarios cuyas partes NO pasan automáticamente a los otros al morir tienen el título como:", options: ["Tenientes en común", "Tenientes conjuntos", "Corredores", "Titulares de un embargo"], answer: 0, why: "La tenencia en común no tiene derecho de supervivencia." },
      { objective: "O3", q: "¿Cuál es uno de los deberes fiduciarios de un agente con su cliente?", options: ["Decirle a la otra parte el precio más bajo del cliente", "Lealtad", "Elegir el prestamista por el cliente", "Ignorar las instrucciones legales del cliente"], answer: 1, why: "La lealtad es un deber fiduciario central (OLDCAR)." },
      { objective: "O3", q: "Decirles a los dueños que vendan rápido porque cierto grupo se está mudando a la zona se llama:", options: ["Direccionamiento", "Línea roja", "Representación dual", "Pánico inmobiliario"], answer: 3, why: "El pánico inmobiliario presiona a los dueños para que vendan, sembrando miedo sobre un grupo que llega a la zona." },
      { objective: "O3", q: "Negar préstamos en una zona por quienes viven allí se llama:", options: ["Línea roja", "Prorrateo", "Direccionamiento", "Cuenta de garantía"], answer: 0, why: "La línea roja es negar préstamos o seguros en ciertas zonas; es ilegal." },
      { objective: "O3", q: "Un comprador que usa silla de ruedas pide ver una casa. Según la Ley de Vivienda Justa, tú:", options: ["Le muestras solo casas con rampas sin preguntarle", "Te niegas por las escaleras", "Le muestras la casa en las mismas condiciones que a cualquier otra persona", "Le pides una nota del médico"], answer: 2, why: "La discapacidad es una clase protegida, así que el comprador recibe un trato igual." },
      { objective: "O4", q: "Un contrato firmado por un menor de edad, que el menor puede cancelar, es:", options: ["Nulo", "Anulable", "Exigible por completo", "Un embargo"], answer: 1, why: "Anulable significa que es válido, pero una parte puede cancelarlo." },
      { objective: "O4", q: "¿En cuántos días hábiles después de la solicitud del préstamo debe el prestamista entregar la Estimación del Préstamo?", options: ["Tres", "Diez", "Treinta", "Uno"], answer: 0, why: "La CFPB dice que la Estimación del Préstamo llega dentro de los tres días hábiles después de la solicitud." },
      { objective: "O4", q: "El depósito de buena fe es:", options: ["La comisión del agente", "El impuesto anual a la propiedad", "Un embargo sobre la casa", "Un depósito que muestra que el comprador va en serio"], answer: 3, why: "El depósito de buena fe es el depósito que hace el comprador como muestra de seriedad." },
      { objective: "O5", q: "Solo para practicar: a un agente le toca el 50% de una comisión de $9,000. El agente recibe:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 por 0.50 da $4,500." },
      { objective: "O5", q: "Solo para practicar: un préstamo de $160,000 sobre una casa de $200,000 tiene una LTV de:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 entre $200,000 da 0.80, o sea 80%." },
      { objective: "O5", q: "Solo para practicar: el impuesto anual es de $3,650 (año de 365 días). El vendedor fue dueño de la casa 30 días. La parte del vendedor es:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 entre 365 da $10 al día; 30 días son $300." },
      { objective: "O5", q: "¿Cuántos pies cuadrados tiene un acre?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Un acre son 43,560 pies cuadrados." },
      { objective: "O6", q: "El manual del candidato de tu estado por lo general te dice:", options: ["Las preguntas exactas del examen", "Qué casa comprar", "El temario del examen y las reglas del día del examen", "Tu sueldo futuro"], answer: 2, why: "El manual trae el temario, las reglas, la identificación necesaria y cómo programar la cita." },
      { objective: "O6", q: "Un buen plan de estudio empieza por:", options: ["Elegir una fecha meta para el examen y contar hacia atrás hasta cada paso", "Comprar el curso más caro", "Estudiar solo tus temas favoritos", "Esperar hasta sentirte listo"], answer: 0, why: "Planear hacia atrás desde una fecha meta pone cada paso y cada bloque de estudio en el calendario." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Pasos oficiales", objective: "O1", notYet: "Faltan pasos, están fuera de orden o se copiaron de un sitio no oficial.", meets: "Todos los pasos de la página del regulador estatal están en orden, con la dirección de la página y la fecha de revisión.", exceeds: "También anota los costos y documentos de cada paso tal como los indica la página oficial." },
      { name: "Términos clave", objective: "O2", notYet: "Varios términos de propiedad o titularidad están mal o faltan en la hoja de reglas.", meets: "La hoja de reglas define bien, con palabras sencillas, los términos clave de propiedad y titularidad.", exceeds: "Cada término tiene un ejemplo de la vida real que inventó el participante." },
      { name: "Representación y vivienda justa", objective: "O3", notYet: "Faltan o están mal los deberes fiduciarios o las siete clases protegidas federales.", meets: "Enumera los deberes y las siete clases federales, además del direccionamiento, el pánico inmobiliario y la línea roja.", exceeds: "Agrega las clases protegidas adicionales del estado o la ciudad del participante, con la fuente." },
      { name: "Contrato y cierre", objective: "O4", notYet: "Faltan partes del contrato o pasos del cierre, o están mal los plazos de la Estimación del Préstamo y la Declaración de Cierre.", meets: "Enumera todas las partes de un contrato válido y los pasos del cierre en orden, con los plazos correctos de las declaraciones.", exceeds: "Agrega las condiciones y sus plazos de una oferta de ejemplo." },
      { name: "Matemática", objective: "O5", notYet: "Menos de 4 de los 5 problemas están bien, o no se muestra el procedimiento.", meets: "Al menos 4 de 5 problemas están bien, con el procedimiento a la vista.", exceeds: "Los 5 están bien, más un problema extra escrito y resuelto por el participante." },
      { name: "Plan con fechas", objective: "O6", notYet: "No hay fecha meta, o los temas no salen del temario oficial.", meets: "Cubre todos los temas del temario, marca los tres más débiles y tiene bloques de estudio semanales hasta una fecha meta.", exceeds: "Incluye fechas para revisar exámenes de práctica y una fecha de examen de respaldo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que completan la educación previa a la licencia aprobada por el estado en 6 meses (encuesta de seguimiento)",
      "Participantes que aprueban el examen estatal de bienes raíces, y en qué intento (según lo que informan)",
      "Participantes con licencia que trabajan bajo un corredor patrocinador en 12 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para leer la página oficial del regulador estatal y el manual del candidato",
      "Papel, bolígrafo y una calculadora básica",
      "Un calendario (de papel o en el teléfono) para el plan de estudio y examen",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Si el grupo es de un solo estado, abran juntos la página del regulador de ese estado en la Lección 1 y usen su manual del candidato en la Lección 6.",
      "Deje claro que este curso prepara a los participantes; no reemplaza las clases previas aprobadas por el estado ni otorga una licencia.",
      "Haga la lección de matemática en parejas frente a un pizarrón: una persona resuelve y la otra revisa los pasos.",
      "Use juegos de roles para los casos de vivienda justa; deténgase y nombre la regla cada vez.",
      "No dé consejos sobre comprar propiedades, invertir, préstamos o impuestos; dirija a los participantes a fuentes oficiales y a profesionales con licencia.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

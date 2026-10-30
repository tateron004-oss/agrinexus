"use strict";

// Koach Learn course (Spanish translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations".
// Codes (ICD-10-CM, CPT, HCPCS) and 1500 form box numbers are kept exactly as in the English; they are practice examples only.

module.exports = {
  id: "medical-billing-coding-es",
  lang: "es",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Introducción a la facturación y codificación médica",
  skills: "Elegir una certificación de facturación y codificación, Seguir el ciclo de facturación, Elegir el sistema de códigos correcto, Buscar un código de la forma correcta, Llenar una reclamación de práctica, Proteger la privacidad del paciente (HIPAA)",
  outcome: "convertir una visita médica inventada en una reclamación de práctica completa: elegir los códigos correctos de diagnóstico y de servicio, llenar las casillas principales del formulario de reclamación, revisarlo antes de enviarlo y mantener privada la información del paciente.",
  about: [
    "Los facturadores y codificadores médicos convierten una visita al médico en códigos y en una reclamación (una factura al seguro), para que el consultorio reciba el pago de la compañía de seguros. Muchos de estos trabajos se hacen en una oficina y algunos son remotos. Este curso es un primer paso para personas que buscan trabajo, veteranos, personas que regresan a casa después de estar en prisión y adultos que cambian de carrera.",
    "Vas a aprender en qué consiste el trabajo, qué certificaciones piden los empleadores (como la CBCS de NHA, la CPC de AAPC y la CCA de AHIMA), cómo avanza una factura desde el registro del paciente hasta el pago, los tres sistemas principales de códigos, cómo buscar un código de la forma correcta, cómo llenar una reclamación de práctica y cómo proteger la privacidad del paciente según la ley HIPAA.",
    "Este curso te prepara. No te da un certificado. Cada certificación tiene sus propias reglas, capacitación, cuotas y examen, así que los revisarás en la página oficial. Todos los pacientes y las visitas de este curso son inventados, y los códigos son solo para practicar: los códigos cambian cada año, así que un codificador de verdad siempre usa el libro de códigos vigente.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel o en una hoja de cálculo gratis. Hay una comprobación corta después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Convierte la visita inventada de la Lección 6 en una reclamación de práctica completa: escribe el código de diagnóstico y los códigos de servicio, llena las casillas principales de un formulario de reclamación 1500 de práctica (en papel o en una hoja de cálculo), revísalo con tu lista de revisión antes de enviar y escribe un plan de una página con la certificación que buscarás, dónde te capacitarás y la fecha en que piensas presentar el examen.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan un trabajo de oficina estable en el área de la salud: personas que buscan empleo, veteranos, personas que regresan a casa después de estar en prisión, adultos jóvenes, inmigrantes y adultos que vuelven a estudiar. Muchas nunca han trabajado en un consultorio médico. Algunas quieren trabajar a distancia.",
    startingPoint: "Pueden leer y escribir en el idioma de todos los días y usar un teléfono o una computadora de la biblioteca. La mayoría no conoce las palabras médicas, los sistemas de códigos, los términos de seguros ni cómo se paga una reclamación.",
    gap: "Los trabajos de facturación y codificación piden una certificación y habilidades básicas desde el primer día: conocer el ciclo de facturación, elegir el sistema de códigos correcto, buscar códigos con cuidado, llenar una reclamación y mantener privada la información de salud. Los participantes necesitan un mapa claro del trabajo y de las certificaciones, y práctica con cada paso, antes de pagar un programa de capacitación o un examen.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra médica y de seguros",
      "Dispositivos: un teléfono o una computadora de la biblioteca; todas las tareas se pueden hacer en papel",
      "Los libros de códigos y algunas herramientas de codificación cuestan dinero; el curso usa herramientas oficiales gratis y ejemplos inventados",
      "Los códigos cambian cada año: todos los códigos que se muestran son solo para practicar",
      "Privacidad: en ninguna parte del curso se usa información real de pacientes",
      "Algunas certificaciones preguntan por los antecedentes; cada participante revisa las reglas propias de cada programa"
    ],
    prerequisites: "Ninguno. \"Excel y hojas de cálculo\" y \"Alfabetización en salud\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando las páginas oficiales de NHA, AAPC y AHIMA", action: "comparar tres certificaciones de facturación y codificación y escribir un plan de estudio y de examen con fechas", standard: "con los requisitos revisados en la página oficial, no adivinados" },
    { id: "O2", condition: "Con los pasos de una visita médica en desorden", action: "ordenar los pasos del ciclo de facturación, desde agendar la cita hasta el pago", standard: "sin que falte ningún paso" },
    { id: "O3", condition: "Con cinco partes de una visita inventada", action: "relacionar cada parte con el sistema de códigos correcto: ICD-10-CM para el diagnóstico, CPT para el servicio del médico, HCPCS Level II para los suministros", standard: "acertando por lo menos 4 de 5" },
    { id: "O4", condition: "Con un diagnóstico de una nota de visita inventada", action: "buscar un código de diagnóstico encontrando el término en el índice y confirmándolo después en la lista de códigos", standard: "siempre, sin codificar nunca solo con el índice" },
    { id: "O5", condition: "Con una visita inventada y un formulario de reclamación de práctica en blanco", action: "llenar las casillas principales de la reclamación y encontrar la razón por la que se rechazó una reclamación de práctica", standard: "con el paciente, el seguro, los códigos y los cargos de acuerdo con la visita" },
    { id: "O6", condition: "En situaciones de práctica en el trabajo", action: "compartir la información del paciente solo con quien la necesita, y solo lo mínimo que necesita", standard: "en todas las situaciones, siguiendo la ley HIPAA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, las certificaciones y los códigos",
      lessons: [
        {
          title: "El trabajo y las certificaciones que piden los empleadores",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar tres certificaciones de facturación y codificación y elegir una como meta.",
          text: [
            "Un codificador médico lee las notas del médico y convierte el diagnóstico y los servicios en códigos. Un facturador médico usa esos códigos para enviar una reclamación a la compañía de seguros y le da seguimiento hasta que se paga. En los consultorios pequeños, muchas veces una sola persona hace las dos cosas.",
            "Los empleadores suelen pedir una certificación. Tres comunes: la Certified Billing and Coding Specialist (CBCS) de NHA, la National Healthcareer Association (una organización de exámenes para trabajadores de la salud); la Certified Professional Coder (CPC) de AAPC (una asociación de codificadores); y la Certified Coding Associate (CCA) de AHIMA, la American Health Information Management Association (la asociación de gestión de información de salud de EE. UU.).",
            "Cada una tiene sus propias reglas. Por ejemplo, la CBCS de NHA pide un diploma de secundaria o el GED (el examen que equivale a la secundaria en EE. UU.) más un programa de capacitación o experiencia de trabajo supervisada. Las cuotas, las reglas del examen y los requisitos cambian, así que lee la página oficial de cada una antes de pagar nada. Este curso te prepara; no te da un certificado.",
            "Ten cuidado con los programas que prometen un trabajo o un certificado en pocos días. Pregúntale a cualquier escuela para qué examen de certificación te prepara, y revisa ese examen en la página oficial."
          ],
          steps: ["Abre la página oficial de la CBCS (nhanow.com), de la CPC (aapc.com) y de la CCA (ahima.org).", "Para cada una, anota quién la da, qué necesitas antes del examen y cómo se presenta el examen.", "Mira anuncios de empleo cerca de ti y cuenta qué certificación piden más.", "Elige una como meta y escribe el mes en que piensas presentar el examen."],
          words: [["Codificador médico", "persona que convierte las notas del médico en códigos estándar."], ["Facturador médico", "persona que envía reclamaciones a las compañías de seguros y les da seguimiento hasta que se pagan."], ["Certificación", "prueba de una organización de exámenes de que aprobaste su examen; también se llama credencial."], ["Reclamación", "una factura enviada a una compañía de seguros para pedirle que pague una visita."]],
          slides: [
            { title: "Codificador y facturador", bullets: ["Codificador: convierte las notas del médico en códigos", "Facturador: envía la reclamación y la sigue hasta que se paga", "Consultorios pequeños: a menudo una persona hace las dos cosas"] },
            { title: "Tres certificaciones comunes", bullets: ["CBCS de NHA", "CPC de AAPC", "CCA de AHIMA"] },
            { title: "Revisa antes de pagar", bullets: ["Las reglas, cuotas y exámenes cambian", "Lee cada página oficial", "Este curso te prepara; no es un certificado"] },
            { title: "Elige tu camino", bullets: ["Cuenta lo que piden los anuncios de empleo locales", "Elige una certificación", "Escribe el mes de tu examen"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Haz una tabla de tres columnas en papel o en una hoja de cálculo: CBCS, CPC, CCA. Para cada una, escribe quién la da y qué necesitas antes del examen, según la página oficial. Luego mira cinco anuncios de empleo locales y encierra en un círculo la certificación que buscarás.",
          youCanNow: "decir qué hacen los facturadores y codificadores, nombrar tres certificaciones y quién las da, y elegir una como meta.",
          quickCheck: [
            { objective: "O1", q: "¿Quién da la certificación CPC?", options: ["El consultorio médico donde trabajas", "AAPC", "La oficina de licencias de conducir de tu estado", "Cualquier escuela en línea"], answer: 1, why: "La Certified Professional Coder (CPC) es la certificación de AAPC." },
            { objective: "O1", q: "Un sitio web dice que puedes ser codificador certificado en tres días por una cuota pequeña. ¿Qué haces primero?", options: ["Pagar rápido antes de que suba el precio", "Decirles a los empleadores que estás certificado", "Revisar las reglas del examen real en la página oficial", "No capacitarte; el sitio web es suficiente"], answer: 2, why: "Solo la organización que da la certificación puede decirte sus reglas y su examen reales." }
          ]
        },
        {
          title: "Cómo avanza una factura: el ciclo de facturación",
          objectives: ["O2"],
          minutes: 5,
          goal: "Ordenar los pasos del ciclo de facturación, desde agendar la cita hasta el pago.",
          text: [
            "El ciclo de facturación, también llamado ciclo de ingresos, es el camino desde que un paciente agenda una cita hasta que el consultorio recibe el pago completo.",
            "Los pasos principales: 1) Agendar la cita y verificar el seguro. 2) Registrar la llegada del paciente: confirmar su nombre, su fecha de nacimiento y su tarjeta del seguro. 3) El médico atiende al paciente y escribe notas. 4) El codificador convierte las notas en códigos. 5) El facturador prepara la reclamación y la revisa. 6) Se envía la reclamación a la compañía de seguros. 7) La compañía de seguros paga, paga una parte o la rechaza, y envía una explicación. 8) El consultorio le cobra al paciente lo que debe, como un copago, y da seguimiento a todo lo que no se ha pagado.",
            "Los errores al principio del ciclo causan problemas después. Un número de seguro equivocado en el registro puede hacer que una reclamación se rechace semanas más tarde. Por eso un registro cuidadoso importa tanto como una codificación cuidadosa."
          ],
          steps: ["Agenda la cita y verifica el seguro.", "Registra la llegada del paciente y confirma sus datos.", "El médico atiende al paciente y escribe notas.", "Codifica la visita.", "Prepara y revisa la reclamación.", "Envía la reclamación.", "Lee el pago o el rechazo.", "Cobra la parte del paciente y da seguimiento."],
          words: [["Ciclo de facturación (ciclo de ingresos)", "todos los pasos desde agendar una cita hasta recibir el pago completo."], ["Copago", "una cantidad fija que el paciente paga por una visita."], ["Deducible", "la cantidad que un paciente paga cada año antes de que el seguro empiece a pagar muchos servicios."], ["Pagador", "la compañía de seguros o el programa del gobierno que paga la reclamación."], ["Rechazo", "cuando el pagador se niega a pagar una reclamación."]],
          slides: [
            { title: "De la cita al pago", bullets: ["Se llama ciclo de facturación o ciclo de ingresos", "Cada paso afecta el pago"] },
            { title: "Inicio del ciclo", bullets: ["1. Agendar y verificar el seguro", "2. Registro: nombre, fecha de nacimiento, tarjeta del seguro", "3. El médico atiende al paciente y escribe notas"] },
            { title: "Mitad del ciclo", bullets: ["4. Codificar la visita", "5. Preparar y revisar la reclamación", "6. Enviarla al pagador"] },
            { title: "Final del ciclo", bullets: ["7. El pagador paga, paga una parte o rechaza", "8. Cobrar la parte del paciente y dar seguimiento", "Los errores tempranos causan rechazos tardíos"] }
          ],
          tryIt: "Escribe los ocho pasos del ciclo de facturación en ocho pedazos de papel. Revuélvelos y vuelve a ponerlos en orden sin mirar. Junto a cada paso, escribe un error que podría pasar ahí, por ejemplo un nombre mal escrito en el registro.",
          youCanNow: "nombrar en orden los pasos del ciclo de facturación y explicar cómo un error temprano puede causar un rechazo después.",
          quickCheck: [
            { objective: "O2", q: "¿Qué paso viene justo después de que el codificador convierte las notas en códigos?", options: ["Agendar la cita", "Registrar la llegada del paciente", "El pagador envía el pago", "El facturador prepara y revisa la reclamación"], answer: 3, why: "Primero se codifica; luego el facturador prepara la reclamación con esos códigos y la revisa." },
            { objective: "O2", q: "En el registro, el número de seguro del paciente se escribe mal. ¿Cuál es el resultado más probable?", options: ["La reclamación puede ser rechazada después", "Nada; el codificador lo notará", "Al médico le pagan más rápido", "El copago del paciente baja"], answer: 0, why: "El pagador compara la reclamación con sus registros de afiliados; un número equivocado a menudo causa un rechazo." }
          ]
        },
        {
          title: "Los tres sistemas de códigos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Relacionar cada parte de una visita con el sistema de códigos correcto.",
          text: [
            "Una reclamación responde dos preguntas: ¿por qué vino el paciente y qué hizo el consultorio? Cada pregunta se responde con un sistema de códigos distinto.",
            "Los códigos ICD-10-CM dicen POR QUÉ: el diagnóstico, el signo o el síntoma. Empiezan con una letra, luego números, y pueden tener un punto; por ejemplo, I10 para la presión arterial alta sin causa conocida (ejemplo de práctica). En EE. UU., el National Center for Health Statistics (NCHS, el centro nacional de estadísticas de salud) de los CDC mantiene el ICD-10-CM.",
            "Los códigos CPT dicen QUÉ hizo el médico u otro profesional: una consulta en el consultorio, un análisis de laboratorio, un procedimiento. Tienen cinco dígitos; por ejemplo, 36415 para sacar sangre de una vena (ejemplo de práctica). La American Medical Association (AMA, la asociación médica de EE. UU.) es dueña del CPT y lo actualiza. CMS llama al CPT \"HCPCS Level I\".",
            "Los códigos HCPCS Level II cubren lo que el CPT no cubre, como suministros, equipo y viajes en ambulancia. Tienen una letra y cuatro dígitos. CMS (los Centers for Medicare & Medicaid Services, la agencia federal de Medicare y Medicaid) los mantiene. Todos los sistemas de códigos se actualizan cada año, así que usa siempre el libro o la herramienta vigente."
          ],
          words: [["Diagnóstico", "el problema de salud que el médico encuentra o trata."], ["ICD-10-CM", "el sistema de códigos para diagnósticos en EE. UU."], ["CPT", "el sistema de códigos de cinco dígitos de la AMA para servicios y procedimientos; también se llama HCPCS Level I."], ["HCPCS Level II", "el sistema de códigos de CMS para suministros, equipo y otros artículos que el CPT no cubre; una letra y cuatro dígitos."], ["CMS", "los Centers for Medicare & Medicaid Services, la agencia federal que administra Medicare y trabaja con los estados en Medicaid."]],
          slides: [
            { title: "Dos preguntas que responde cada reclamación", bullets: ["¿POR QUÉ vino el paciente? (diagnóstico)", "¿QUÉ hizo el consultorio? (servicio o artículo)"] },
            { title: "ICD-10-CM: el porqué", bullets: ["Diagnósticos, signos y síntomas", "Letra + números, a menudo con punto: I10", "En EE. UU. lo mantiene el NCHS de los CDC"] },
            { title: "CPT: el qué", bullets: ["Servicios de médicos y otros profesionales", "Cinco dígitos: 36415 (ejemplo de práctica)", "Es de la AMA; también se llama HCPCS Level I"] },
            { title: "HCPCS Level II: artículos y extras", bullets: ["Suministros, equipo, viajes en ambulancia", "Una letra + cuatro dígitos", "Lo mantiene CMS; todos los sistemas cambian cada año"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (el Level I es el CPT; el Level II lo mantiene CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Solo para practicar. Para esta visita inventada, escribe el sistema de códigos de cada parte: (1) dolor de garganta, (2) consulta con el médico, (3) prueba rápida de estreptococo, (4) presión arterial alta, (5) un par de muletas que el paciente se lleva a casa. Respuestas: 1 y 4 son ICD-10-CM, 2 y 3 son CPT, 5 es HCPCS Level II.",
          youCanNow: "decir qué sistema de códigos responde por qué vino el paciente y cuál responde qué se hizo, y relacionar partes de una visita con ICD-10-CM, CPT o HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "¿Qué sistema de códigos usas para el diagnóstico del paciente?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Un código postal"], answer: 2, why: "Los códigos ICD-10-CM dicen por qué vino el paciente: el diagnóstico, el signo o el síntoma." },
            { objective: "O3", q: "Un paciente se va a casa con una andadera. ¿Qué sistema de códigos suele cubrir la andadera?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "No se necesita código"], answer: 0, why: "El equipo y los suministros que el CPT no cubre usan códigos HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, las certificaciones y los códigos",
        questions: [
          { objective: "O1", q: "¿Qué certificación de facturación y codificación da NHA?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "La certificación de facturación y codificación de NHA es la Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "¿Qué es el ciclo de facturación?", options: ["Los pasos desde agendar una cita hasta recibir el pago completo", "Una bicicleta para oficinistas", "El horario diario del médico", "El orden de los códigos en una reclamación"], answer: 0, why: "El ciclo de facturación (de ingresos) va desde agendar la cita hasta el último pago." },
          { objective: "O2", q: "El pagador paga una parte de una reclamación. ¿Cuál suele ser el siguiente paso?", options: ["Borrar la reclamación", "Cobrarle al paciente su parte y dar seguimiento", "Cambiar el diagnóstico", "Agendar una cita nueva"], answer: 1, why: "Después de la parte del pagador, el consultorio cobra la parte del paciente, como un copago o un deducible." },
          { objective: "O3", q: "¿Cuál es el formato de un código CPT?", options: ["Una letra y cuatro dígitos", "Una letra, números y un punto", "Cinco dígitos", "Una palabra de diez letras"], answer: 2, why: "Los códigos CPT tienen cinco dígitos; el ICD-10-CM empieza con una letra y el HCPCS Level II es una letra más cuatro dígitos." },
          { objective: "O3", q: "¿Quién mantiene el ICD-10-CM en Estados Unidos?", options: ["El National Center for Health Statistics de los CDC", "La American Medical Association", "Cada consultorio médico", "El empleador del paciente"], answer: 0, why: "El NCHS de los CDC mantiene la versión de EE. UU. del ICD-10, llamada ICD-10-CM." }
        ]
      }
    },
    {
      name: "Capítulo 2: Códigos, reclamaciones y privacidad",
      lessons: [
        {
          title: "Buscar un código de la forma correcta",
          objectives: ["O4"],
          minutes: 5,
          goal: "Buscar un código de diagnóstico en el índice y confirmarlo en la lista de códigos.",
          text: [
            "El ICD-10-CM tiene dos partes principales. El índice alfabético enumera las enfermedades por nombre, como el índice de un libro. La lista tabular muestra todos los códigos en orden, con notas sobre cuándo usarlos y cuándo no.",
            "La regla que siguen los codificadores: primero busca la palabra principal en el índice y luego confirma siempre el código en la lista tabular. Nunca codifiques solo con el índice, porque la lista tabular puede decir que agregues un carácter o que uses otro código.",
            "Busca la enfermedad, no la parte del cuerpo. Para \"dolor de garganta agudo\", la palabra principal es faringitis (la palabra médica para una garganta adolorida e inflamada). Luego lee las notas de la lista tabular antes de elegir el código. El CPT también tiene su propio índice y su lista de códigos, y funciona igual.",
            "Práctica gratis: el ICD-10-CM Browser Tool de los CDC te permite buscar en el sistema de códigos en línea. En un trabajo real, usas el libro de códigos vigente o la herramienta que paga tu empleador, y las notas del médico, nunca una suposición."
          ],
          steps: ["Lee la nota del médico y encuentra el diagnóstico.", "Busca la palabra principal de la enfermedad en el índice alfabético.", "Anota el código que indica el índice.", "Ve a ese código en la lista tabular.", "Lee las notas: \"incluye\", \"excluye\" y si se necesitan más caracteres.", "Elige el código que coincide exactamente con la nota."],
          words: [["Índice alfabético", "la parte del libro de códigos que enumera las enfermedades por nombre, de la A a la Z."], ["Lista tabular", "la parte del libro de códigos que enumera todos los códigos en orden, con las reglas para usarlos."], ["Término principal", "la palabra de la enfermedad que buscas primero, no la parte del cuerpo."], ["Especificidad", "qué tan exacto es un código; los codificadores usan el código más exacto que permiten las notas del médico."]],
          slides: [
            { title: "Dos partes del libro de códigos", bullets: ["Índice alfabético: enfermedades de la A a la Z", "Lista tabular: todos los códigos en orden, con reglas"] },
            { title: "La regla de dos pasos", bullets: ["1. Busca la palabra principal en el índice", "2. Confirma el código en la lista tabular", "Nunca codifiques solo con el índice"] },
            { title: "Busca la enfermedad", bullets: ["Palabra principal = la enfermedad, no la parte del cuerpo", "Lee las notas de \"incluye\" y \"excluye\"", "Usa el código más exacto que permiten las notas"] },
            { title: "Practica gratis", bullets: ["ICD-10-CM Browser Tool de los CDC", "En el trabajo: el libro vigente o la herramienta del empleador", "Codifica con las notas del médico, nunca adivines"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM y el ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Solo para practicar. Abre el ICD-10-CM Browser Tool de los CDC desde el enlace de la fuente. La herramienta está en inglés, así que busca estos diagnósticos inventados con sus nombres en inglés: \"acute pharyngitis\" (faringitis aguda), \"essential hypertension\" (hipertensión esencial) y \"type 2 diabetes without complications\" (diabetes tipo 2 sin complicaciones). Para cada uno, escribe la palabra principal que buscaste, el código que encontraste y una nota que leíste antes de elegirlo.",
          youCanNow: "buscar un código de diagnóstico en dos pasos, primero el índice y luego la lista tabular, y explicar por qué nunca te quedas solo con el índice.",
          quickCheck: [
            { objective: "O4", q: "Encontraste un código en el índice alfabético. ¿Qué haces después?", options: ["Ponerlo en la reclamación de inmediato", "Confirmarlo en la lista tabular y leer sus notas", "Preguntarle al paciente si le parece bien", "Elegir el código más corto que esté cerca"], answer: 1, why: "La lista tabular tiene las reglas y puede pedir caracteres extra; nunca codifiques solo con el índice." },
            { objective: "O4", q: "La nota dice \"bronquitis aguda\". ¿Cuál es la palabra principal que debes buscar?", options: ["Aguda", "Pecho", "Pulmones", "Bronquitis"], answer: 3, why: "Buscas la enfermedad (bronquitis) y luego encuentras \"aguda\" debajo de ella." }
          ]
        },
        {
          title: "Llenar una reclamación y corregir un rechazo",
          objectives: ["O5"],
          minutes: 6,
          goal: "Llenar las casillas principales de una reclamación 1500 de práctica y encontrar por qué se rechazó una reclamación.",
          text: [
            "Los consultorios médicos facturan con el formulario de reclamación 1500, que mantiene el National Uniform Claim Committee (NUCC, el comité nacional que define este formulario). La versión en papel que se usa es la 02/12. Hoy la mayoría de las reclamaciones se envían por vía electrónica, pero la reclamación electrónica tiene la misma información, así que aprender el formulario en papel te enseña los datos.",
            "Casillas principales que debes conocer (práctica): casilla 1a, el número de identificación del asegurado que aparece en la tarjeta del seguro. Casilla 2, el nombre del paciente. Casilla 21, los códigos de diagnóstico, marcados A, B, C, etc. Casilla 24, las líneas de servicio: la fecha del servicio (24A), el código CPT o HCPCS (24D), el indicador de diagnóstico que une el servicio con una letra de diagnóstico de la casilla 21 (24E) y el cargo (24F). Casilla 33, el proveedor que factura.",
            "Antes de enviar una reclamación, revísala: el paciente y la identificación correctos, cada servicio tiene un indicador de diagnóstico, los códigos están vigentes, y las fechas y los cargos coinciden con la visita. Encontrar los errores ahora cuesta menos que corregir un rechazo después.",
            "Cuando se rechaza una reclamación, el pagador envía una remesa (una explicación del pago) con una razón. Razones comunes: identificación o nombre equivocado, código faltante o no válido, servicio no cubierto, falta de autorización previa, reclamación duplicada o enviada demasiado tarde. Encuentra la razón, corrígela y vuelve a enviar o apela según las reglas del pagador."
          ],
          steps: ["Copia exactamente de la tarjeta inventada la identificación del asegurado (1a) y el nombre del paciente (2).", "Escribe los códigos de diagnóstico en la casilla 21 como A, B, C.", "En cada línea de servicio de la casilla 24, escribe la fecha, el código CPT o HCPCS, el indicador de diagnóstico y el cargo.", "Llena el proveedor que factura (33).", "Revisa la reclamación con tu lista de revisión antes de enviar.", "Si la rechazan, lee la razón, corrige la causa y vuelve a enviarla según las reglas del pagador."],
          words: [["Formulario de reclamación 1500", "el formulario estándar en papel para los consultorios médicos, que mantiene el NUCC."], ["Indicador de diagnóstico", "la letra en una línea de servicio (A, B, C) que la une con un diagnóstico de la casilla 21."], ["Remesa (EOB o ERA)", "la explicación del pagador sobre lo que pagó o rechazó, y por qué."], ["Autorización previa", "aprobación del pagador antes de hacer algunos servicios."], ["Reclamación limpia", "una reclamación sin errores, que se puede pagar a la primera."]],
          slides: [
            { title: "El formulario de reclamación 1500", bullets: ["Lo mantiene el NUCC; versión en papel 02/12", "Las reclamaciones electrónicas llevan los mismos datos"] },
            { title: "Casillas principales (práctica)", bullets: ["1a: identificación del asegurado  •  2: nombre del paciente", "21: códigos de diagnóstico A, B, C...", "24: fecha, código, indicador, cargo  •  33: proveedor que factura"] },
            { title: "Revisa antes de enviar", bullets: ["Paciente e identificación correctos", "Cada línea de servicio tiene un indicador", "Códigos vigentes; fechas y cargos coinciden"] },
            { title: "Razones comunes de rechazo", bullets: ["Identificación o nombre equivocado; código faltante o no válido", "No cubierto; sin autorización previa", "Duplicada o enviada tarde: corrige y vuelve a enviar"] }
          ],
          sources: [
            { name: "NUCC: formulario de reclamación 1500", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Solo para practicar. Paciente inventado: Sam Rivera, identificación del asegurado ABC123456. Visita en la fecha que elijas: consulta en el consultorio (99213) por dolor de garganta (J02.9) con una prueba rápida de estreptococo (87880), cargos de $100 y $25 (inventados). En papel o en una hoja de cálculo, llena las casillas 1a, 2, 21, 24 (dos líneas) y 33 (\"Practice Clinic\"). Luego la reclamación regresa con: \"identificación de afiliado no válida\". Escribe qué revisarías y qué corregirías.",
          youCanNow: "llenar las casillas principales de una reclamación de práctica, revisarla antes de enviarla, y encontrar y corregir la razón de un rechazo.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde van los códigos de diagnóstico en el formulario 1500?", options: ["Casilla 2", "Casilla 33", "Casilla 21", "Casilla 1a"], answer: 2, why: "La casilla 21 contiene los códigos de diagnóstico, marcados A, B, C, etc." },
            { objective: "O5", q: "Una reclamación se rechaza con \"el servicio requiere autorización previa\". ¿Qué faltó?", options: ["La aprobación del pagador antes del servicio", "El segundo nombre del paciente", "Una segunda copia de la reclamación", "La firma del médico en el expediente en papel"], answer: 0, why: "La autorización previa es la aprobación del pagador antes de algunos servicios; sin ella, la reclamación se rechaza." }
          ]
        },
        {
          title: "Proteger la privacidad del paciente, y tu reclamación de práctica",
          objectives: ["O6"],
          minutes: 5,
          goal: "Compartir la información del paciente solo con quien la necesita, y solo lo que necesita.",
          text: [
            "Los facturadores y codificadores ven información privada de salud todos los días: nombres, fechas de nacimiento, diagnósticos, números de seguro. HIPAA es la ley federal de EE. UU. que la protege. Su Regla de Privacidad cubre a los planes de salud, a la mayoría de los consultorios médicos y hospitales, y a las empresas que trabajan para ellos, como las empresas de facturación.",
            "La información de salud protegida (PHI, por sus siglas en inglés) es cualquier información de salud que pueda identificar a una persona. La regla del \"mínimo necesario\" significa que usas y compartes solo lo que se necesita para el trabajo. Un pagador puede necesitar el código de diagnóstico en la reclamación; un compañero en la sala de descanso no necesita oírlo.",
            "Hábitos de todos los días: bloquea tu pantalla cuando te alejes, nunca hables de pacientes en público, confirma la identidad de quien llama, envía las reclamaciones solo por sistemas aprobados y nunca mandes PHI por correo o mensaje de texto desde una cuenta personal. Si ves un error de privacidad, díselo de inmediato a tu supervisor o al encargado de privacidad.",
            "Ahora junta todo en tu tarea final: una reclamación de práctica completa y tu plan de certificación."
          ],
          steps: ["Antes de compartir, pregúntate: ¿esta persona tiene una razón de trabajo para saberlo?", "Comparte solo lo mínimo que necesita.", "Confirma quién llama antes de dar cualquier dato.", "Bloquea tu pantalla y usa solo sistemas aprobados.", "Reporta los errores de privacidad a tu supervisor o al encargado de privacidad."],
          words: [["HIPAA", "la ley federal de EE. UU. que protege la privacidad y la seguridad de la información de salud."], ["PHI", "información de salud protegida: información de salud que puede identificar a una persona."], ["Mínimo necesario", "la idea de HIPAA de usar o compartir solo la información que se necesita para la tarea."], ["Encargado de privacidad", "la persona en el trabajo a cargo de las reglas y los reportes de privacidad."]],
          slides: [
            { title: "HIPAA protege a los pacientes", bullets: ["Ley federal de privacidad para la información de salud", "Cubre planes de salud, la mayoría de los médicos y sus empresas de facturación"] },
            { title: "Mínimo necesario", bullets: ["Comparte solo con quien lo necesita para el trabajo", "Comparte solo lo que necesita"] },
            { title: "Hábitos de todos los días", bullets: ["Bloquea tu pantalla", "No hables de pacientes en público", "Confirma quién llama", "Solo sistemas aprobados, nunca correo personal"] },
            { title: "Tarea final", bullets: ["Completa la reclamación de práctica", "Revísala con tu lista de revisión antes de enviar", "Escribe tu plan de certificación con fechas"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profesionales (Regla de Privacidad)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Tarea final, solo para practicar. Visita inventada: Ana Lee, identificación del asegurado XYZ987654, consulta con el médico (99213) por presión arterial alta (I10) y le sacan sangre de una vena (36415); cargos inventados de $100 y $15. Llena una reclamación 1500 de práctica (casillas 1a, 2, 21, 24, 33), revísala con una lista de revisión antes de enviar que escribas tú mismo, y agrega un plan de una página: tu certificación, dónde te capacitarás y la fecha en que piensas presentar el examen. No uses información real de pacientes.",
          youCanNow: "proteger la información del paciente con la regla del mínimo necesario y convertir una visita inventada en una reclamación de práctica completa y revisada.",
          quickCheck: [
            { objective: "O6", q: "Una persona llama, dice que es la hermana de un paciente y pide su diagnóstico. ¿Qué haces?", options: ["Leerle el diagnóstico para ayudar", "Mandárselo por mensaje de texto más tarde", "Decirle solo el código de diagnóstico", "Seguir las reglas de tu consultorio para confirmar quién puede recibir información; no compartirlo"], answer: 3, why: "HIPAA limita quién puede recibir PHI; sigues las reglas de tu consultorio y no compartes nada hasta confirmar." },
            { objective: "O6", q: "¿Qué significa \"mínimo necesario\"?", options: ["Compartir solo la información que se necesita para la tarea", "Trabajar la menor cantidad de horas posible", "Codificar un solo diagnóstico por reclamación", "Cobrar el precio más bajo"], answer: 0, why: "Según HIPAA, usas y compartes solo la información que se necesita para el trabajo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Códigos, reclamaciones y privacidad",
        questions: [
          { objective: "O4", q: "¿Por qué los codificadores nunca codifican solo con el índice alfabético?", options: ["El índice siempre está desactualizado", "El índice no tiene códigos", "La lista tabular tiene reglas y puede pedir más caracteres", "Los pagadores no aceptan códigos del índice"], answer: 2, why: "Las notas de la lista tabular pueden cambiar el código o pedir caracteres extra." },
          { objective: "O5", q: "¿Qué hace el indicador de diagnóstico de la casilla 24E?", options: ["Muestra la dirección del pagador", "Une una línea de servicio con un diagnóstico de la casilla 21", "Indica el domicilio del paciente", "Muestra la licencia del médico"], answer: 1, why: "La letra del indicador une cada servicio con el diagnóstico que lo explica." },
          { objective: "O5", q: "Una reclamación se rechaza como \"duplicada\". ¿Cuál es el mejor primer paso?", options: ["Revisar si la misma reclamación ya se envió o se pagó", "Enviarla tres veces más", "Cambiar los códigos para que se vea distinta", "Cobrarle todo al paciente"], answer: 0, why: "Un rechazo por duplicado significa que el pagador ya la tiene; revisa su estado en lugar de volver a enviarla." },
          { objective: "O6", q: "Necesitas alejarte de tu escritorio con una reclamación en la pantalla. ¿Qué haces?", options: ["Dejarla abierta; vas a tardar poco", "Pedirle a un visitante que la cuide", "Voltear la pantalla hacia la pared", "Bloquear tu pantalla"], answer: 3, why: "Bloquear tu pantalla evita que vean la PHI personas que no deben verla." },
          { objective: "O6", q: "¿Cuál de estas es información de salud protegida (PHI)?", options: ["Un formulario de reclamación en blanco", "El horario de atención del consultorio", "El nombre de un paciente con su diagnóstico", "El nombre de un libro de códigos"], answer: 2, why: "La información de salud que puede identificar a una persona es PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la facturación y codificación médica",
    questions: [
      { objective: "O1", q: "¿Qué hace un codificador médico?", options: ["Convierte las notas del médico en códigos estándar", "Saca sangre a los pacientes", "Vende planes de seguro", "Arregla las computadoras de la oficina"], answer: 0, why: "Los codificadores convierten en códigos los diagnósticos y los servicios de las notas." },
      { objective: "O1", q: "¿Dónde debes revisar los requisitos y las cuotas vigentes de una certificación?", options: ["Una publicación en redes sociales", "Un amigo que la presentó hace años", "La página oficial de la organización que la da", "Cualquier anuncio de capacitación"], answer: 2, why: "Las reglas y las cuotas cambian; la página oficial tiene las vigentes." },
      { objective: "O1", q: "¿Qué pareja es correcta?", options: ["CPC de NHA", "CBCS de AHIMA", "CCA de AAPC", "CCA de AHIMA"], answer: 3, why: "La CCA es de AHIMA; la CPC es de AAPC; la CBCS es de NHA." },
      { objective: "O1", q: "¿Qué te da este curso?", options: ["Una licencia de codificación", "Preparación para un examen de certificación", "Un trabajo garantizado", "Un certificado CPC"], answer: 1, why: "El curso te prepara; las certificaciones solo se obtienen al aprobar el examen oficial." },
      { objective: "O2", q: "¿Cuál es el primer paso del ciclo de facturación?", options: ["Agendar la cita y verificar el seguro", "Enviar la reclamación", "Cobrarle al paciente", "Codificar la visita"], answer: 0, why: "El ciclo empieza cuando se agenda la cita y se verifica el seguro." },
      { objective: "O2", q: "¿Qué paso viene justo antes de enviar la reclamación?", options: ["El registro del paciente", "Preparar y revisar la reclamación", "Agendar la cita", "El pago del pagador"], answer: 1, why: "El facturador prepara y revisa la reclamación, y luego la envía." },
      { objective: "O2", q: "¿Qué es un copago?", options: ["Una copia de la reclamación", "Un pago del pagador al médico", "Una cantidad fija que el paciente paga por una visita", "Un error de codificación"], answer: 2, why: "Un copago es una cantidad fija que paga el paciente." },
      { objective: "O3", q: "Un paciente llega con tos. ¿Qué sistema de códigos describe la tos?", options: ["CPT", "HCPCS Level II", "Ninguno", "ICD-10-CM"], answer: 3, why: "Los signos, los síntomas y los diagnósticos usan ICD-10-CM." },
      { objective: "O3", q: "¿Quién es dueño del sistema de códigos CPT y lo actualiza?", options: ["La American Medical Association", "El empleador del paciente", "Cada estado", "El NUCC"], answer: 0, why: "La AMA es dueña del CPT; CMS lo llama HCPCS Level I." },
      { objective: "O3", q: "¿Qué código parece un código HCPCS Level II?", options: ["99213", "I10", "E0100 (ejemplo de práctica)", "36415"], answer: 2, why: "Los códigos HCPCS Level II son una letra seguida de cuatro dígitos." },
      { objective: "O3", q: "¿Cada cuánto cambian los sistemas de códigos?", options: ["Nunca", "Cada año", "Cada 50 años", "Solo cuando un médico lo pide"], answer: 1, why: "Los sistemas de códigos se actualizan cada año, así que los codificadores usan el libro o la herramienta vigente." },
      { objective: "O4", q: "En el libro de códigos, ¿qué parte enumera las enfermedades de la A a la Z?", options: ["El índice alfabético", "La lista tabular", "El formulario de reclamación", "La remesa"], answer: 0, why: "El índice alfabético enumera las enfermedades por nombre." },
      { objective: "O4", q: "El médico escribe \"sinusitis crónica\". ¿Qué buscas primero?", options: ["Crónica", "Nariz", "Sinusitis", "Cabeza"], answer: 2, why: "Busca la enfermedad (sinusitis) y luego la palabra \"crónica\" debajo de ella." },
      { objective: "O4", q: "¿Cuál es una herramienta oficial gratis para practicar búsquedas en el ICD-10-CM?", options: ["Un foro de codificación cualquiera", "Un juego de preguntas en redes sociales", "El formulario de reclamación 1500", "El ICD-10-CM Browser Tool de los CDC"], answer: 3, why: "El NCHS de los CDC ofrece un ICD-10-CM Browser Tool gratis." },
      { objective: "O5", q: "¿Dónde va el número de identificación del asegurado en el formulario 1500?", options: ["Casilla 21", "Casilla 1a", "Casilla 24F", "Casilla 33"], answer: 1, why: "La casilla 1a contiene el número de identificación del asegurado de la tarjeta del seguro." },
      { objective: "O5", q: "¿Quién mantiene el formulario de reclamación 1500?", options: ["El National Uniform Claim Committee (NUCC)", "El paciente", "La AMA", "Cada médico"], answer: 0, why: "El NUCC mantiene el formulario de reclamación 1500." },
      { objective: "O5", q: "¿Qué es una \"reclamación limpia\"?", options: ["Una reclamación impresa en papel nuevo", "Una reclamación sin cargos", "Una reclamación sin errores que se puede pagar a la primera", "Una reclamación enviada por correo electrónico"], answer: 2, why: "Una reclamación limpia no tiene errores, así que el pagador puede pagarla a la primera." },
      { objective: "O5", q: "¿Qué te dice una remesa (EOB o ERA)?", options: ["El domicilio del paciente", "El horario de mañana", "El número de licencia del médico", "Lo que el pagador pagó o rechazó, y por qué"], answer: 3, why: "La remesa explica el pago o el rechazo y da la razón." },
      { objective: "O6", q: "Un compañero en su descanso te pregunta qué tiene un paciente que codificaste. ¿Qué haces?", options: ["Decírselo; él también trabaja aquí", "No compartirlo; no tiene una razón de trabajo para saberlo", "Decírselo en voz baja", "Mostrarle la reclamación"], answer: 1, why: "Según la regla del mínimo necesario, la PHI solo va a quienes la necesitan para su trabajo." },
      { objective: "O6", q: "¿Qué hábito protege la PHI?", options: ["Enviar reclamaciones desde tu correo personal", "Hablar de pacientes en el autobús", "Usar solo sistemas de trabajo aprobados para enviar reclamaciones", "Dejar reclamaciones en la impresora"], answer: 2, why: "Los sistemas aprobados protegen la PHI; el correo personal y las conversaciones en público no." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Plan de certificación", objective: "O1", notYet: "No nombra ninguna certificación, o adivina los requisitos en lugar de revisarlos.", meets: "Nombra una certificación y quién la da, con los requisitos y una fecha de examen tomados de la página oficial.", exceeds: "También incluye un programa de capacitación, fechas de estudio semanales y lo que piden los anuncios de empleo locales." },
      { name: "Sistemas de códigos correctos", objective: "O3", notYet: "Un diagnóstico se codifica con CPT, o un servicio con ICD-10-CM.", meets: "El diagnóstico usa ICD-10-CM y cada servicio usa CPT.", exceeds: "Puede explicar por qué cada código pertenece a su sistema de códigos." },
      { name: "Códigos buscados de la forma correcta", objective: "O4", notYet: "Códigos copiados sin revisar, o tomados solo del índice.", meets: "Cada diagnóstico se encontró en el índice y se confirmó en la lista tabular (o en la herramienta de los CDC).", exceeds: "Anota la palabra principal que buscó y una regla que leyó para cada código." },
      { name: "Casillas de la reclamación llenas", objective: "O5", notYet: "Faltan casillas, o la identificación, los códigos o los cargos no coinciden con la visita.", meets: "Las casillas 1a, 2, 21, 24 y 33 están llenas y coinciden con la visita; cada línea de servicio tiene un indicador.", exceeds: "Incluye una lista de revisión escrita antes de enviar que detecta por lo menos un error puesto a propósito." },
      { name: "Ciclo de facturación y seguimiento", objective: "O2", notYet: "No puede decir qué pasa después de enviar la reclamación.", meets: "Dice los pasos desde el envío hasta el pago, y qué hacer si la rechazan.", exceeds: "Nombra dos razones de rechazo y cómo corregir cada una." },
      { name: "Privacidad protegida", objective: "O6", notYet: "Usa información real de pacientes, o comparte PHI con alguien que no la necesita.", meets: "Usa solo información inventada y mantiene privada la reclamación.", exceeds: "Nombra tres hábitos diarios que protegen la PHI en el trabajo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de capacitación en facturación y codificación o se registran para un examen de certificación en un plazo de 90 días",
      "Participantes que aprueban un examen CBCS, CPC o CCA (según lo que ellos mismos reportan)",
      "Participantes contratados en puestos de facturación, codificación, recepción o registro de pacientes en un plazo de 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas oficiales de certificación y el ICD-10-CM Browser Tool de los CDC",
      "Papel y lápiz, o una hoja de cálculo gratis (Google Sheets o Excel), para la reclamación de práctica",
      "Un modelo del formulario de reclamación 1500 de práctica, impreso o dibujado (casillas 1a, 2, 21, 24, 33)",
      "Unos 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Recalque que todos los códigos del curso son ejemplos de práctica; confirme que los participantes saben que los códigos cambian cada año.",
      "Nunca use expedientes reales de pacientes ni tarjetas de seguro reales en clase; use solo los pacientes inventados.",
      "Lleve impresos anuncios de empleo locales para que los participantes vean qué certificaciones piden los empleadores.",
      "Ponga a propósito un error (una identificación equivocada o un indicador faltante) en una reclamación de muestra y deje que los grupos lo encuentren.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una sola fila de Todavía no a la vez.",
      "Participantes con antecedentes penales: dígales que pregunten a cada organización certificadora y a cada programa de capacitación por sus propias reglas, y que revisen los requisitos de empleo en su estado."
    ]
  }
};

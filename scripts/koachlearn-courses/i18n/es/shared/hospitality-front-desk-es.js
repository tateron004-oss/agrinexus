"use strict";

// Koach Learn course (Spanish translation of shared/hospitality-front-desk.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "hospitality-front-desk-es",
  lang: "es",
  translationOf: "hospitality-front-desk",
  category: "Workforce Development",
  name: "Carreras en hotelería: recepción y atención al huésped",
  skills: "Hacer el check-in y el check-out de los huéspedes, Leer la cuenta del huésped (folio), Resolver problemas de los huéspedes, Proteger la privacidad y la seguridad de los huéspedes, Llevar un turno de recepción, Planear tu camino hacia la credencial CFDR",
  outcome: "trabajar un turno de recepción de hotel de la forma correcta: hacer el check-in y el check-out de un huésped, explicar una cuenta, resolver un problema con calma, cuidar la privacidad y la seguridad de los huéspedes, y seguir un plan escrito hacia un empleo y una credencial de recepción.",
  about: [
    "Los hoteles contratan recepcionistas en todas las ciudades y en muchos pueblos pequeños, y muchos contratan a personas sin experiencia en hoteles si son amables, cumplidas y cuidadosas. Este curso es para personas que buscan trabajo, jóvenes adultos, personas que salen de prisión y cualquiera que quiera dar un primer paso en la hotelería.",
    "Practicarás el trabajo real de la recepción: hacer el check-in de un huésped, leer su cuenta (el folio), hacer su check-out, manejar un hotel lleno o a un huésped molesto, y seguir las reglas que protegen a los huéspedes, como nunca decir en voz alta el número de una habitación.",
    "El curso te prepara para el trabajo y para una credencial de recepción, como la START Certified Front Desk Representative (CFDR) del American Hotel & Lodging Educational Institute (AHLEI, el instituto educativo de la asociación de hoteles de EE. UU.). Este curso no otorga esa credencial; la obtienes con el curso y el examen propios de AHLEI.",
    "Cada lección dura unos cinco minutos, con una tarea de \"Inténtalo ahora\" y una comprobación rápida de dos preguntas. Hay una comprobación de conocimientos después de cada capítulo, un examen de 20 preguntas al final y una tarea final que puedes mostrar en una entrevista."
  ],
  finalTask: "Arma tu kit para el empleo de recepción: (1) una lista de tareas de una página para el inicio, la mitad y el final de un turno de recepción; (2) un guion de check-in que puedas decir en voz alta, con la regla de privacidad incluida; (3) un plan de 30 días con fechas: tres hoteles donde vas a postularte, cuándo practicarás el guion con alguien y cuándo revisarás la página de la CFDR de AHLEI o preguntarás a un empleador por formación en recepción.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan un primer empleo o uno mejor: personas que buscan trabajo, personas que salen de prisión, inmigrantes, personas que cambian de carrera y jóvenes en programas de empleo. La mayoría ha usado un teléfono y ha tratado con clientes, pero nunca ha trabajado en un hotel.",
    startingPoint: "Saben saludar a las personas y usar un teléfono inteligente. La mayoría no ha usado un sistema de hotel, no ha leído la cuenta de un huésped ni ha manejado pagos, llaves y reglas de privacidad de los huéspedes.",
    gap: "Los hoteles contratan recepcionistas todo el año y a menudo forman en el trabajo, pero buscan personas que ya conozcan los pasos básicos del check-in y el check-out, puedan mantener la calma con huéspedes molestos y protejan la privacidad y la seguridad de los huéspedes. Conocer esos pasos, y tener un plan hacia una credencial, hace más fácil que te contraten y te ayuda a conservar el empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (de 6.º a 7.º grado aproximadamente)",
      "Dispositivos: un teléfono o una computadora de biblioteca; toda la práctica se puede hacer en papel",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre el trabajo y las citas",
      "No se necesita un sistema de hotel real; los sistemas cambian de un hotel a otro, así que el curso enseña los pasos, no los nombres de los menús",
      "Privacidad: la práctica usa solo huéspedes, números de tarjeta y números de habitación inventados",
      "Las reglas de contratación cambian: los límites de edad para adolescentes y las verificaciones de antecedentes varían según el estado y el empleador"
    ],
    prerequisites: "Ninguno. \"Excelencia en el servicio al cliente\" es un buen curso complementario para las habilidades generales de servicio."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Dada una oferta de empleo de recepción", action: "enumerar las tareas principales de la recepción, las habilidades que piden los hoteles y una credencial que corresponda al puesto", standard: "nombrando al menos cuatro tareas y dónde revisar la credencial" },
    { id: "O2", condition: "Dado un huésped de práctica con una reservación", action: "hacer el check-in del huésped paso a paso, desde el saludo hasta la entrega de la llave", standard: "sin saltarte ningún paso y sin decir en voz alta el número de habitación" },
    { id: "O3", condition: "Dado el folio de un huésped de práctica en el check-out", action: "explicar cada cargo del folio y hacer el check-out del huésped", standard: "con cada cargo explicado y cualquier cargo erróneo enviado a un gerente o corregido según las reglas" },
    { id: "O4", condition: "Ante un huésped molesto o un hotel lleno", action: "resolver el problema del huésped con una disculpa, opciones y una nota de seguimiento", standard: "manteniendo la calma y dando al huésped al menos dos opciones" },
    { id: "O5", condition: "Ante una situación de privacidad, seguridad o emergencia en la recepción", action: "responder según las reglas de seguridad y privacidad del hotel", standard: "sin dar nunca el número de habitación ni la llave de un huésped, y llamando al 911 o a un gerente cuando haga falta" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Trabajar en la recepción",
      lessons: [
        {
          title: "El trabajo de recepción y el camino para llegar a él",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar las tareas principales de la recepción y la credencial que puede ayudarte a conseguir el empleo.",
          text: [
            "La recepción es el centro de un hotel. Los recepcionistas (también llamados agentes de servicio al huésped) dan la bienvenida a los huéspedes, hacen su check-in y su check-out, toman reservaciones, contestan el teléfono, manejan pagos y llaves, resuelven problemas y pasan mensajes a limpieza y mantenimiento. El auditor nocturno trabaja de noche, revisa los números del día y cierra el día contable.",
            "Los hoteles contratan primero por la actitud y la responsabilidad. Las ofertas suelen pedir un trato amable, hablar con claridad, saber lo básico de computadoras, cuidado con el efectivo y las tarjetas, y poder trabajar de noche, fines de semana y días festivos. Hablar un segundo idioma es una ventaja en muchas ciudades.",
            "Una credencial puede ayudarte a destacar. El American Hotel & Lodging Educational Institute (AHLEI) ofrece el curso y el examen en línea START Certified Front Desk Representative (CFDR). Este curso te prepara para el trabajo y para ese tipo de examen; no otorga la credencial. Revisa la página de AHLEI para ver los detalles actuales, o pregunta a un hotel si paga la formación. Algunos empleadores también ofrecen aprendizajes pagados (apprenticeships), publicados en apprenticeship.gov.",
            "Adolescentes: los trabajos y horarios que puedes tener dependen de tu edad y de tu estado. Revisa dol.gov/youthrules y la oficina de trabajo de tu estado. Si tienes antecedentes penales, muchos hoteles contratan de forma justa: sé honesto en la solicitud y prepárate para hablar de lo que has hecho desde entonces."
          ],
          words: [["Recepcionista", "el empleado del hotel que hace el check-in y el check-out de los huéspedes y los ayuda durante su estancia; también se llama agente de servicio al huésped."], ["Auditor nocturno", "el recepcionista del turno de noche que revisa los cargos y pagos del día y cierra el día contable."], ["Credencial", "un certificado que muestra que aprobaste un curso o un examen."], ["AHLEI", "el American Hotel & Lodging Educational Institute, que ofrece formación hotelera y exámenes de certificación."]],
          slides: [
            { title: "Lo que hace la recepción", bullets: ["Dar la bienvenida, hacer el check-in y el check-out", "Tomar reservaciones y contestar el teléfono", "Manejar pagos y llaves de habitación", "Resolver problemas y pasar mensajes a otros equipos"] },
            { title: "Lo que buscan los hoteles", bullets: ["Amable, claro y responsable", "Cuidadoso con efectivo, tarjetas y llaves", "Conocimientos básicos de computadora", "Noches, fines de semana y días festivos"] },
            { title: "Una credencial que puede ayudar", bullets: ["AHLEI START Certified Front Desk Representative (CFDR)", "Este curso te prepara; el examen de AHLEI la otorga", "Revisa la página de AHLEI para ver los detalles actuales"] },
            { title: "Revisa tus propias reglas", bullets: ["Adolescentes: dol.gov/youthrules y la oficina de trabajo de tu estado", "Aprendizajes pagados: apprenticeship.gov", "Con antecedentes: sé honesto y muestra lo que has hecho desde entonces"] }
          ],
          sources: [
            { name: "AHLEI: curso y examen en línea START Certified Front Desk Representative (CFDR)", url: "https://shopahlei.servsafebrands.com/start-cfdr-online-course-and-exam" },
            { name: "AHLEI: exámenes de certificación", url: "https://shopahlei.servsafebrands.com/training-and-certification/resourcetype/certification-exam" },
            { name: "Apprenticeship.gov (Departamento de Trabajo de EE. UU.)", url: "https://www.apprenticeship.gov/" },
            { name: "YouthRules! (Departamento de Trabajo de EE. UU.)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Busca una oferta real de recepcionista o agente de servicio al huésped cerca de ti (en un sitio de empleos o en la página de empleos de un hotel). En papel, anota cuatro tareas que menciona, tres habilidades que pide y los horarios de los turnos. Encierra en un círculo una habilidad que ya tienes y una que necesitas desarrollar.",
          youCanNow: "decir lo que hace un recepcionista, nombrar las habilidades que piden los hoteles y nombrar una credencial que puede ayudar y dónde revisarla.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una tarea normal de la recepción?", options: ["Arreglar el aire acondicionado de una habitación", "Cocinar el desayuno de los huéspedes", "Hacer el check-in y el check-out de los huéspedes", "Limpiar la piscina"], answer: 2, why: "El check-in y el check-out son el trabajo central de la recepción; las reparaciones, la cocina y la limpieza son de otros equipos." },
            { objective: "O1", q: "¿Qué hace este curso respecto a la credencial CFDR?", options: ["Otorga el certificado CFDR", "Te prepara; la credencial la obtienes con el curso y el examen de AHLEI", "Reemplaza cualquier otra formación", "Es lo mismo que una licencia estatal"], answer: 1, why: "AHLEI otorga la CFDR después de su propio curso y examen; este curso solo te prepara." }
          ]
        },
        {
          title: "Hacer el check-in de un huésped",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hacer el check-in de un huésped de práctica en siete pasos, desde el saludo hasta la llave.",
          text: [
            "El check-in es el primer momento real del huésped con el hotel. Hazlo siempre en el mismo orden para que no se te pase nada, aunque haya fila.",
            "Saluda al huésped, busca la reservación y verifica que la identificación con foto coincida con el nombre. Confirma las fechas, el tipo de habitación y la tarifa. Toma la tarjeta de pago, o un depósito según las reglas del hotel; muchos hoteles hacen una retención en la tarjeta para la estancia y los cargos extra, y tú lo explicas con palabras sencillas.",
            "Entrega la tarjeta llave y señala la habitación en el sobre de la llave o en un papelito, pero no digas el número de habitación en voz alta: otras personas en el vestíbulo pueden oír. Explica lo básico (Wi-Fi, desayuno, hora del check-out) y pregunta si necesita algo más.",
            "Todo hotel usa un sistema de computadora, llamado sistema de gestión hotelera (PMS, por sus siglas en inglés), para registrar todo esto. Los sistemas cambian, y el hotel te enseñará el suyo; los pasos son los mismos."
          ],
          steps: ["Saluda al huésped con una sonrisa y tu nombre.", "Busca la reservación y verifica que la identificación con foto coincida.", "Confirma las fechas, el tipo de habitación y la tarifa.", "Toma la tarjeta de pago o el depósito y explica cualquier retención.", "Prepara la tarjeta llave y escribe el número de habitación en el sobre de la llave; no lo digas en voz alta.", "Explica el Wi-Fi, el desayuno y la hora del check-out.", "Pregunta \"¿Hay algo más en lo que pueda ayudarle?\" y deséale una buena estancia."],
          words: [["Reservación", "una reserva que guarda una habitación para un huésped en ciertas fechas."], ["Tarifa", "el precio por noche de la habitación."], ["Retención (autorización)", "una cantidad que el hotel retiene en la tarjeta del huésped para cubrir la estancia y los cargos extra; no es el cobro final."], ["Sistema de gestión hotelera (PMS)", "el sistema de computadora del hotel para reservaciones, habitaciones, check-in, cuentas y check-out."]],
          slides: [
            { title: "El check-in, siempre igual", bullets: ["Saluda con una sonrisa y tu nombre", "Busca la reservación y revisa la identificación con foto", "Confirma fechas, tipo de habitación y tarifa"] },
            { title: "Pago y llaves", bullets: ["Toma la tarjeta o el depósito según las reglas del hotel", "Explica cualquier retención con palabras sencillas", "Prepara la tarjeta llave"] },
            { title: "La regla de privacidad", bullets: ["Escribe el número de habitación en el sobre de la llave", "Señálalo; nunca lo digas en voz alta", "Otros en el vestíbulo pueden oír"] },
            { title: "Termina bien", bullets: ["Wi-Fi, desayuno y hora del check-out", "\"¿Hay algo más en lo que pueda ayudarle?\"", "Deséale una buena estancia"] }
          ],
          tryIt: "Con un amigo o frente a un espejo, haz el check-in de un huésped inventado: \"Sra. Rivera, dos noches, una habitación king\". Di los siete pasos en voz alta. Escribe la habitación 214 en un sobre de llave de papel y señálalo en vez de decirlo. Hazlo dos veces, la segunda en menos de tres minutos.",
          youCanNow: "hacer el check-in de un huésped en siete pasos y entregar la llave sin decir en voz alta el número de habitación.",
          quickCheck: [
            { objective: "O2", q: "Le estás entregando la llave a un huésped. ¿Qué haces con el número de habitación?", options: ["Decirlo fuerte para que lo recuerde", "Decírselo a toda la fila para que lo sepan", "Mandarlo por mensaje a un amigo del huésped", "Escribirlo en el sobre de la llave y señalarlo"], answer: 3, why: "Decir el número de habitación en voz alta permite que desconocidos en el vestíbulo sepan dónde se hospeda el huésped." },
            { objective: "O2", q: "¿Qué verificas justo después de encontrar la reservación?", options: ["Que la identificación con foto coincida con el nombre de la reservación", "El trabajo del huésped", "Cómo llegó el huésped al hotel", "La dirección del huésped en las redes sociales"], answer: 0, why: "Comparar la identificación con la reservación asegura que la habitación se entregue a la persona correcta." }
          ]
        },
        {
          title: "Leer el folio y hacer el check-out de un huésped",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explicar cada cargo del folio de un huésped y hacer su check-out.",
          text: [
            "El folio es la cuenta del huésped. Muestra la tarifa de cada noche, los impuestos y cualquier cargo extra, como estacionamiento, servicio a la habitación, minibar o un cargo por salida tardía, y cada pago.",
            "En el check-out, saluda al huésped, pregúntale cómo estuvo su estancia e imprime o envía por correo el folio. Revísalo línea por línea si el huésped quiere, y escucha cualquier cosa que haya salido mal en su estancia.",
            "Si el huésped duda de un cargo, mantén la calma y revísenlo juntos. Si es un error claro que el hotel te permite corregir, corrígelo y díselo. Si no tienes permiso para quitarlo, di \"Permítame llamar a mi gerente para resolver esto\" y no discutas. Muchos hoteles también ofrecen check-out exprés por teléfono, televisión o aplicación.",
            "Protege los datos de las tarjetas: nunca escribas ni leas en voz alta un número de tarjeta completo. Los folios muestran solo los últimos dígitos."
          ],
          steps: ["Saluda al huésped y pregúntale cómo estuvo su estancia.", "Imprime o envía por correo el folio.", "Revisa cada cargo si el huésped lo pide.", "Corrige un error claro si tu hotel lo permite; si no, llama al gerente.", "Cobra el pago final, agradece al huésped e invítalo a volver."],
          words: [["Folio", "la cuenta del huésped, con los cargos de habitación, impuestos, extras y pagos."], ["Cargos adicionales (incidentals)", "cargos extra durante una estancia, como estacionamiento, comida o llamadas telefónicas."], ["Salida tardía (late check-out)", "salir después de la hora normal de check-out, a veces con un cargo."], ["Check-out exprés", "hacer el check-out sin pasar por la recepción, por teléfono, televisión o aplicación."]],
          slides: [
            { title: "El folio es la cuenta del huésped", bullets: ["La tarifa de cada noche, más impuestos", "Extras: estacionamiento, comida, salida tardía", "Cada pago hecho"] },
            { title: "Hacer el check-out", bullets: ["Pregunta cómo estuvo la estancia", "Imprime o envía por correo el folio", "Revisa los cargos si el huésped lo pide"] },
            { title: "El huésped duda de un cargo", bullets: ["Mantén la calma y revísenlo juntos", "Corrige un error claro si tienes permiso", "Si no: \"Permítame llamar a mi gerente\"."] },
            { title: "Protege los datos de las tarjetas", bullets: ["Nunca escribas un número de tarjeta completo", "Nunca lo leas en voz alta", "Los folios muestran solo los últimos dígitos"] }
          ],
          tryIt: "Haz en papel un folio de práctica para un huésped inventado: dos noches a $129, el impuesto en una línea aparte (usa cualquier cantidad inventada), estacionamiento de $15 cada noche y un cargo de $12 de servicio a la habitación que el huésped dice que no pidió. Súmalo y luego escribe qué dirías sobre cada línea y cómo manejarías el cargo del servicio a la habitación.",
          youCanNow: "leer un folio línea por línea, explicar cada cargo y manejar con calma un cargo dudoso según las reglas del hotel.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un folio?", options: ["La llave de la habitación del huésped", "La cuenta del huésped con cargos y pagos", "Una lista de reglas del hotel", "El horario de limpieza"], answer: 1, why: "El folio muestra cada cargo de habitación, impuesto, extra y pago de la estancia." },
            { objective: "O3", q: "Un huésped duda de un cargo que no tienes permiso para quitar. ¿Qué dices?", options: ["\"Lo siento, tiene que pagarlo\".", "\"Lo voy a borrar y ya\".", "\"Permítame llamar a mi gerente para resolver esto\".", "\"Llame a su banco\"."], answer: 2, why: "Llamar a un gerente te ayuda a mantener la calma y seguir las reglas, y le da una respuesta al huésped." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Trabajar en la recepción",
        questions: [
          { objective: "O1", q: "¿Qué empleado revisa de noche los cargos del día y cierra el día contable?", options: ["El auditor nocturno", "La camarista", "El cocinero", "El valet"], answer: 0, why: "El auditor nocturno cuadra los cargos y pagos del día y cierra el día." },
          { objective: "O1", q: "¿Dónde revisas los detalles actuales de la credencial START CFDR?", options: ["En una publicación de redes sociales", "Con un amigo que oyó hablar de ella", "En cualquier sitio web que venda un certificado", "En la página oficial de AHLEI"], answer: 3, why: "AHLEI ofrece la CFDR, así que su página oficial tiene los detalles actuales." },
          { objective: "O2", q: "En el check-in, en un vestíbulo lleno, un huésped pregunta: \"¿En qué habitación estoy?\". ¿Qué haces?", options: ["Decir el número en voz alta", "Señalar el número escrito en el sobre de la llave", "Negarte a decírselo", "Escribirlo en el pizarrón del vestíbulo"], answer: 1, why: "Señalar el número escrito se lo dice al huésped sin decírselo a todos los demás." },
          { objective: "O2", q: "¿Por qué explicas en el check-in la retención en la tarjeta?", options: ["Para que el huésped sepa que se retiene una cantidad para la estancia y los extras, no un cobro final", "Para que el huésped pague dos veces", "Porque es la cuenta final", "Las retenciones son secretas y no se deben explicar"], answer: 0, why: "Una explicación clara evita sorpresas y quejas cuando los huéspedes ven la retención en su tarjeta." },
          { objective: "O3", q: "Un folio muestra estacionamiento por tres noches, pero el huésped se quedó dos. ¿Cuál es el mejor primer paso?", options: ["Ignorarlo", "Decirle al huésped que está equivocado", "Revisarlo juntos y corregirlo o llamar a un gerente según las reglas", "Cobrar otra noche para que cuadre"], answer: 2, why: "Revisarlo juntos y seguir las reglas para corregir trata al huésped con justicia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Problemas, privacidad y tu turno",
      lessons: [
        {
          title: "Resolver problemas de los huéspedes, aun con el hotel lleno",
          objectives: ["O4"],
          minutes: 5,
          goal: "Resolver un problema de un huésped con una disculpa, dos opciones y una nota de seguimiento.",
          text: [
            "En los hoteles las cosas salen mal: una habitación no está lista, el aire acondicionado hace ruido, falta una reservación. El huésped está cansado y quiere una solución. Tu trabajo es mantener la calma, hacerte cargo del problema y ofrecer opciones.",
            "Usa cuatro pasos: escucha sin interrumpir, discúlpate (\"Lo siento, no es la estancia que queremos para usted\"), ofrece al menos dos opciones (otra habitación, una solución a cierta hora, una oferta del gerente), y luego da seguimiento y anótalo en la bitácora del turno para que el siguiente turno lo sepa.",
            "A veces un hotel tiene sobreventa y un huésped con reservación se queda sin habitación. Los hoteles pueden \"reubicar\" al huésped (en inglés, walk): reservarle en un hotel cercano. Sigue la política de reubicación de tu hotel y llama a un gerente. Nunca prometas dinero ni noches gratis que no tienes permiso de dar.",
            "Si un huésped grita, amenaza o se vuelve peligroso, no tienes que manejarlo solo. Aléjate y llama a tu gerente o a seguridad."
          ],
          steps: ["Escucha todo el problema sin interrumpir.", "Discúlpate y agradece al huésped por avisarte.", "Ofrece al menos dos opciones que tengas permiso de dar.", "Haz lo que prometiste, o llama a un gerente.", "Da seguimiento al huésped y anótalo en la bitácora del turno."],
          words: [["Sobreventa", "cuando el hotel tiene más reservaciones que habitaciones."], ["Reubicar a un huésped (walk)", "reservar en otro hotel cercano a un huésped que no puede tener habitación, según la política del hotel."], ["Bitácora del turno", "un registro escrito o en computadora donde la recepción anota problemas y mensajes para el siguiente turno."]],
          slides: [
            { title: "Cuatro pasos para cualquier problema", bullets: ["Escucha sin interrumpir", "Discúlpate y agradece", "Ofrece al menos dos opciones", "Da seguimiento y anótalo en la bitácora"] },
            { title: "Cuando el hotel está lleno", bullets: ["Los hoteles pueden \"reubicar\" a un huésped en un hotel cercano", "Sigue la política de reubicación y llama a un gerente", "Nunca prometas lo que no puedes dar"] },
            { title: "Si un huésped se vuelve peligroso", bullets: ["Aléjate del mostrador", "Llama a tu gerente o a seguridad", "No manejas las amenazas solo"] }
          ],
          tryIt: "Escribe lo que le dirías a este huésped: \"Reservé una habitación con dos camas y me dieron una king. Vengo con mis hijos\". Escribe tu disculpa, dos opciones que podrías ofrecer y la nota de una línea que pondrías en la bitácora del turno. Luego dilo en voz alta.",
          youCanNow: "calmar a un huésped molesto, ofrecer dos opciones, dar seguimiento y anotar el problema, y saber cuándo llamar a un gerente.",
          quickCheck: [
            { objective: "O4", q: "La habitación de un huésped no está lista. ¿Qué respuesta sigue los cuatro pasos?", options: ["\"No es mi culpa, vuelva más tarde\".", "\"Las habitaciones nunca están listas a tiempo\".", "\"Le regalo una semana gratis\".", "\"Lo siento. Puedo guardar sus maletas y llamarle antes de las 3 pm, o buscar otra habitación ahora\"."], answer: 3, why: "Se disculpa y ofrece dos opciones que el recepcionista puede dar." },
            { objective: "O4", q: "El hotel tiene sobreventa y un huésped no tiene habitación. ¿Qué haces?", options: ["Seguir la política de reubicación y llamar a un gerente", "Decirle al huésped que duerma en el vestíbulo", "Prometer un reembolso de un mes entero", "Cancelar la habitación de otro huésped sin preguntar"], answer: 0, why: "Reubicar a un huésped según la política, con un gerente, es como los hoteles manejan la sobreventa de forma justa." }
          ]
        },
        {
          title: "Privacidad, llaves y seguridad de los huéspedes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Responder a situaciones de privacidad, llaves y seguridad según las reglas del hotel.",
          text: [
            "La privacidad de los huéspedes protege a las personas. Nunca le digas a alguien que llama o que visita si una persona se hospeda en el hotel ni en qué habitación está. Di \"No puedo compartir información de los huéspedes, pero puedo comunicarle con la habitación si la persona se hospeda aquí\" o toma un mensaje. Nunca des una llave a alguien cuyo nombre no esté en la habitación sin seguir el proceso de identificación del hotel.",
            "Tarjetas llave: revisa la identificación antes de hacer una llave nueva, nunca dejes tarjetas llave ni la máquina de llaves al alcance de los huéspedes, y reporta de inmediato la pérdida de una llave maestra.",
            "Animales de servicio: según la ADA, cuando no es evidente, el personal solo puede hacer dos preguntas: si el perro es necesario por una discapacidad, y qué trabajo o tarea está entrenado para hacer. No puedes pedir papeles ni cobrar una tarifa de mascota por un animal de servicio.",
            "Pon atención a las señales de trata de personas, como alguien que parece controlado por otra persona, que le dicen qué decir o que tiene miedo. No confrontes a nadie. Avisa a tu gerente y sigue la política del hotel; puedes reportarlo a la Línea Nacional contra la Trata de Personas al 1-888-373-7888. En cualquier emergencia (incendio, emergencia médica, violencia), llama primero al 911 (o a tu número local de emergencias) y luego a tu gerente."
          ],
          steps: ["Nunca confirmes que un huésped se hospeda ni compartas un número de habitación.", "Ofrece comunicar la llamada a la habitación o tomar un mensaje.", "Revisa la identificación antes de hacer cualquier llave nueva.", "Con un animal de servicio, haz solo las dos preguntas permitidas cuando haga falta.", "Reporta las señales de trata a tu gerente; no confrontes a nadie.", "En una emergencia, llama primero al 911 y luego a tu gerente."],
          words: [["Control de llaves", "las reglas para hacer, guardar y registrar las llaves de las habitaciones para que solo entren las personas correctas."], ["ADA", "la Americans with Disabilities Act, la ley de EE. UU. que protege a las personas con discapacidad, incluido su uso de animales de servicio."], ["Animal de servicio", "según la ADA, un perro entrenado para hacer trabajos o tareas para una persona con discapacidad."], ["Trata de personas", "usar la fuerza, el engaño o las amenazas para obligar a alguien a trabajar o a hacer actos sexuales."]],
          slides: [
            { title: "Protege la privacidad de los huéspedes", bullets: ["Nunca confirmes quién se hospeda", "Nunca compartas un número de habitación", "\"Puedo comunicarle con la habitación o tomar un mensaje\"."] },
            { title: "Control de llaves", bullets: ["Revisa la identificación antes de cualquier llave nueva", "Mantén las llaves y la máquina fuera del alcance", "Reporta de inmediato una llave maestra perdida"] },
            { title: "Animales de servicio (ADA)", bullets: ["Pregunta solo: ¿es necesario por una discapacidad?", "Y: ¿qué trabajo o tarea está entrenado para hacer?", "Sin papeles ni tarifa de mascota para un animal de servicio"] },
            { title: "Señales de trata y emergencias", bullets: ["Pon atención a alguien controlado, instruido o con miedo", "No confrontes; avisa a tu gerente", "Línea: 1-888-373-7888", "Emergencia: llama primero al 911 y luego a tu gerente"] }
          ],
          sources: [
            { name: "ADA.gov: requisitos de la ADA sobre animales de servicio", url: "https://www.ada.gov/resources/service-animals-2010-requirements/" },
            { name: "Campaña Azul del DHS: indicadores de trata de personas", url: "https://www.dhs.gov/blue-campaign/indicators-human-trafficking" },
            { name: "AHLA Foundation: No Room For Trafficking (formación gratuita para el personal de hoteles)", url: "https://www.ahlafoundation.org/nrft/" }
          ],
          tryIt: "Escribe tu respuesta a cada caso: (1) Alguien llama y dice \"Comuníqueme con mi esposa, Jane Lee. ¿En qué habitación está?\". (2) Un hombre sin identificación dice que perdió su llave de la habitación 305. (3) Un huésped trae un perro; no estás seguro de que sea un animal de servicio. Luego, si puedes, toma la formación gratuita de 30 minutos \"Your Role in Preventing Human Trafficking\" (tu papel en la prevención de la trata de personas), enlazada desde la página No Room For Trafficking de la AHLA Foundation.",
          youCanNow: "proteger la privacidad de los huéspedes por teléfono y en el mostrador, controlar las llaves, atender un animal de servicio según la ADA, y reportar de la forma correcta las señales de trata y las emergencias.",
          quickCheck: [
            { objective: "O5", q: "Alguien llama y pregunta en qué habitación está un huésped. ¿Qué dices?", options: ["Dar el número de habitación", "\"No puedo compartir información de los huéspedes, pero puedo comunicarle o tomar un mensaje\".", "\"Ella hizo el check-out hace una hora\".", "\"Llame cuando yo termine mi turno\"."], answer: 1, why: "Nunca confirmes que un huésped se hospeda ni compartas un número de habitación; comunicar la llamada o tomar un mensaje protege al huésped." },
            { objective: "O5", q: "Un huésped trae un perro y no es evidente que sea un animal de servicio. ¿Qué puedes preguntar?", options: ["Los papeles de certificación del perro", "Cuál es la discapacidad del huésped", "Que primero pague la tarifa de mascota", "Si el perro es necesario por una discapacidad y qué tarea está entrenado para hacer"], answer: 3, why: "La ADA permite solo esas dos preguntas; sin papeles ni tarifa de mascota para un animal de servicio." }
          ]
        },
        {
          title: "Tu lista de tareas del turno y tu plan de empleo",
          objectives: ["O1", "O2"],
          minutes: 5,
          goal: "Escribir una lista de tareas para un turno de recepción y un plan de 30 días hacia un empleo de recepción.",
          text: [
            "Los buenos recepcionistas trabajan con una lista de tareas. Al inicio del turno: llega temprano, lee la bitácora del turno, cuenta tu caja con un gerente o según el proceso del hotel, y revisa las llegadas, las salidas y las habitaciones listas del día.",
            "Durante el turno: saluda a cada huésped, haz el check-in y el check-out con los mismos pasos, contesta el teléfono antes del tercer timbre si puedes, mantén el mostrador ordenado y las llaves seguras. Al final: termina las tareas pendientes, cuenta de nuevo tu caja y anota en la bitácora todo lo que el siguiente turno debe saber.",
            "Ahora planea tu camino. Elige tres hoteles cerca de ti, practica tu guion de check-in con una persona real y decide cuándo revisarás la página de la CFDR de AHLEI o preguntarás a un empleador si paga la formación. Pon fechas reales en cada paso. Lleva tu lista y tu guion a la entrevista: muestra que ya conoces el trabajo."
          ],
          steps: ["Escribe las tareas del inicio del turno.", "Escribe las tareas durante el turno.", "Escribe las tareas del final del turno.", "Escribe tu guion de check-in con la regla de privacidad incluida.", "Escribe un plan de 30 días con fechas: tres hoteles, la práctica y la revisión de la credencial."],
          words: [["Caja (fondo de caja)", "el efectivo del que un recepcionista es responsable durante un turno; se cuenta al inicio y al final."], ["Llegadas y salidas", "las listas de huéspedes que hacen el check-in y el check-out hoy."], ["Entrega de turno", "pasar las tareas pendientes y las notas al siguiente turno."]],
          slides: [
            { title: "Inicio del turno", bullets: ["Llega temprano y lee la bitácora del turno", "Cuenta la caja según el proceso del hotel", "Revisa llegadas, salidas y habitaciones listas"] },
            { title: "Durante el turno", bullets: ["Los mismos pasos de check-in y check-out siempre", "Contesta el teléfono rápido y con cortesía", "Mantén el mostrador ordenado y las llaves seguras"] },
            { title: "Final del turno", bullets: ["Termina las tareas pendientes", "Cuenta la caja de nuevo", "Anota lo que el siguiente turno debe saber"] },
            { title: "Tu plan de 30 días", bullets: ["Tres hoteles donde postularte, con fechas", "Practica tu guion con una persona real", "Revisa la página de la CFDR de AHLEI o pregunta por formación"] }
          ],
          tryIt: "Arma tu kit para el empleo en papel o en un documento gratuito: tu lista de tareas del turno (inicio, durante, final), tu guion de check-in en siete pasos y un plan de 30 días con fechas reales. Pide a alguien que haga de huésped mientras lees el guion.",
          youCanNow: "mostrar a un gerente de contratación una lista de tareas para un turno de recepción, un guion de check-in y un plan con fechas hacia el empleo y una credencial.",
          quickCheck: [
            { objective: "O1", q: "¿Qué va en un plan de 30 días para un empleo de recepción?", options: ["\"Algún día buscar trabajo\"", "\"Postularme a tres hoteles con nombre antes del día 15 y practicar mi guion el día 10\"", "\"Pagarle a alguien por un empleo garantizado\"", "\"Esperar a que un hotel me llame\""], answer: 1, why: "Un plan real nombra pasos concretos con fechas." },
            { objective: "O2", q: "¿Cuál es una buena tarea al inicio del turno?", options: ["Leer la bitácora del turno y revisar las llegadas del día", "Dejar la caja sin contar", "Apagar los teléfonos", "Repartir llaves de repuesto para ahorrar tiempo"], answer: 0, why: "Leer la bitácora y las llegadas te dice lo que necesita el turno antes de que lleguen los huéspedes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Problemas, privacidad y tu turno",
        questions: [
          { objective: "O4", q: "¿Qué debes hacer siempre después de resolver el problema de un huésped?", options: ["Olvidarlo", "Publicarlo en internet", "Darle seguimiento y anotarlo en la bitácora del turno", "Cobrarle extra al huésped"], answer: 2, why: "Dar seguimiento y anotarlo le avisa al siguiente turno y muestra al huésped que te importa." },
          { objective: "O4", q: "Un huésped empieza a gritar amenazas en la recepción. ¿Qué haces?", options: ["Gritarle también", "Alejarte y llamar a tu gerente o a seguridad", "Saltar por encima del mostrador", "Ignorarlo y seguir escribiendo"], answer: 1, why: "No manejas las amenazas solo; alejarte y pedir ayuda mantiene a todos seguros." },
          { objective: "O5", q: "Un visitante sin identificación dice que perdió la llave de la habitación 305. ¿Qué haces?", options: ["Hacerle una llave rápido", "Darle la llave maestra", "Decirle quién está en la 305", "Seguir el proceso de identificación; sin él, no hay llave"], answer: 3, why: "El control de llaves significa revisar la identificación antes de cualquier llave nueva, para que los desconocidos no puedan entrar a las habitaciones." },
          { objective: "O5", q: "Un huésped se desmaya en el vestíbulo. ¿Cuál es tu primer paso?", options: ["Llamar al 911 (o a tu número local de emergencias) y luego a tu gerente", "Terminar el check-in del siguiente huésped", "Publicarlo en redes", "Esperar a ver si se levanta"], answer: 0, why: "En cualquier emergencia médica, llama primero al 911; luego avisa a tu gerente." },
          { objective: "O5", q: "Notas a una persona joven que parece controlada e instruida por un adulto. ¿Qué haces?", options: ["Confrontar al adulto", "Preguntarle en voz alta a la persona joven si es víctima de trata", "No confrontar; avisar a tu gerente y seguir la política del hotel", "Ignorarlo"], answer: 2, why: "Confrontar puede poner a las personas en peligro; repórtalo a tu gerente y a la línea correspondiente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Carreras en hotelería: recepción y atención al huésped",
    questions: [
      { objective: "O1", q: "¿Cuál es una tarea principal de un recepcionista?", options: ["Reparar la plomería de las habitaciones", "Tomar reservaciones y contestar el teléfono", "Lavar la ropa del hotel", "Cocinar el servicio a la habitación"], answer: 1, why: "Las reservaciones y el teléfono son trabajo de la recepción; lo demás es de otros equipos." },
      { objective: "O1", q: "¿Quién ofrece la credencial START Certified Front Desk Representative (CFDR)?", options: ["El American Hotel & Lodging Educational Institute (AHLEI)", "El IRS (la agencia de impuestos de EE. UU.)", "El DMV de tu estado", "Cualquier huésped del hotel"], answer: 0, why: "AHLEI ofrece el curso y el examen de la CFDR." },
      { objective: "O1", q: "Un adolescente quiere un empleo de recepción. ¿Dónde debe revisar qué trabajos y horarios están permitidos?", options: ["Lo que adivine un amigo", "Cualquier anuncio de empleo", "dol.gov/youthrules y la oficina de trabajo de su estado", "En ningún lado; las reglas para adolescentes son iguales en todas partes"], answer: 2, why: "Las reglas de trabajo para jóvenes dependen de la edad y del estado, así que revisa las páginas oficiales." },
      { objective: "O1", q: "¿Qué buscan primero los hoteles en un nuevo recepcionista?", options: ["Solo años de experiencia en hoteles", "Solo un título universitario", "Solo tener carro", "Una persona amable y responsable que cuida el efectivo y las llaves"], answer: 3, why: "Los hoteles suelen formar en el trabajo y contratan por la actitud y la responsabilidad." },
      { objective: "O2", q: "¿Cuál es el orden correcto para empezar un check-in?", options: ["Hacer la llave y luego saludar al huésped", "Saludar, buscar la reservación, revisar la identificación", "Cobrar y luego averiguar quién es", "Decir el número de habitación y luego saludar"], answer: 1, why: "Primero saluda, luego busca la reservación y compara la identificación." },
      { objective: "O2", q: "¿Qué es un sistema de gestión hotelera (PMS)?", options: ["El sistema de computadora del hotel para reservaciones, habitaciones y cuentas", "Un horario de limpieza", "Una aplicación de estacionamiento", "Un tipo de tarjeta llave"], answer: 0, why: "El PMS registra las reservaciones, el check-in, las cuentas y el check-out." },
      { objective: "O2", q: "¿Cómo le dices a un huésped su número de habitación en el check-in?", options: ["Anunciarlo a todo el vestíbulo", "Gritarlo mientras se aleja", "Escribirlo en el sobre de la llave y señalarlo", "Ponerlo en el pizarrón"], answer: 2, why: "Escribirlo y señalarlo mantiene privado el número de habitación." },
      { objective: "O2", q: "¿Qué debes explicar antes de que el huésped se vaya del mostrador?", options: ["La dirección de la casa del gerente", "Los números de habitación de otros huéspedes", "Los códigos de alarma del hotel", "El Wi-Fi, el desayuno y la hora del check-out"], answer: 3, why: "Estos datos básicos ayudan al huésped y reducen las llamadas a la recepción." },
      { objective: "O3", q: "¿Cuál es un cargo adicional (incidental)?", options: ["Estacionamiento o servicio a la habitación", "La renta de la casa del huésped", "La cuenta de luz del hotel", "Tu cheque de pago"], answer: 0, why: "Los cargos adicionales son extras durante una estancia, como el estacionamiento y la comida." },
      { objective: "O3", q: "¿Cómo debe aparecer un número de tarjeta completo cuando hablas con un huésped sobre la cuenta?", options: ["Leído en voz alta completo", "Escrito en una nota adhesiva", "Nunca se lee en voz alta ni se escribe; solo los últimos dígitos", "Enviado por mensaje al huésped"], answer: 2, why: "Proteger los números de tarjeta evita fraudes; los folios muestran solo los últimos dígitos." },
      { objective: "O3", q: "Un huésped dice que un cargo de servicio a la habitación no es suyo. No puedes quitar cargos. ¿Qué haces?", options: ["Discutir hasta que pague", "Borrarlo de todos modos", "Decirle que lo reclame con su banco", "Revisarlo con él y llamar a tu gerente"], answer: 3, why: "Mantener la calma y traer a un gerente sigue las reglas y le da una respuesta al huésped." },
      { objective: "O3", q: "¿Qué es el check-out exprés?", options: ["Hacer el check-out sin pasar por la recepción, por teléfono, televisión o aplicación", "Irse sin pagar", "Un elevador más rápido", "Hacer el check-out solo a medianoche"], answer: 0, why: "El check-out exprés permite a los huéspedes irse sin hacer fila." },
      { objective: "O4", q: "¿Cuáles son los cuatro pasos para un problema de un huésped?", options: ["Ignorar, esperar, culpar, irse", "Escuchar, disculparse, ofrecer opciones, dar seguimiento y anotar", "Discutir, reembolsar, disculparse, olvidar", "Transferir, colgar, anotar, repetir"], answer: 1, why: "Escuchar, disculparse, ofrecer opciones y dar seguimiento resuelve la mayoría de los problemas." },
      { objective: "O4", q: "¿Qué significa \"reubicar a un huésped\" (walk)?", options: ["Acompañar a un huésped al elevador", "Sacar a pasear al perro de un huésped", "Reservar a un huésped en un hotel cercano cuando el tuyo tiene sobreventa", "Pedirle a un huésped que se vaya"], answer: 2, why: "Los hoteles reubican a los huéspedes en otro hotel, según la política, cuando tienen sobreventa." },
      { objective: "O4", q: "Un huésped quiere una semana gratis porque la televisión no funcionó. No tienes permiso de dar eso. ¿Qué haces?", options: ["Prometerlo de todos modos", "Decirle que está mintiendo", "Colgarle", "Disculparte, ofrecer opciones que sí puedes dar y llamar a un gerente para cualquier cosa más"], answer: 3, why: "Nunca prometas lo que no puedes dar; ofrece lo que puedes y llama a un gerente." },
      { objective: "O4", q: "¿Por qué anotar los problemas de los huéspedes en la bitácora del turno?", options: ["Para que el siguiente turno lo sepa y pueda dar seguimiento", "Para culpar al huésped", "Porque los huéspedes la leen", "No hace falta"], answer: 0, why: "La bitácora pasa información importante al siguiente turno." },
      { objective: "O5", q: "Alguien en la recepción pregunta: \"¿Mi jefe, el Sr. Díaz, se hospeda aquí?\". ¿Qué dices?", options: ["\"Sí, en la habitación 410\".", "\"No puedo compartir información de los huéspedes, pero puedo tomar un mensaje\".", "\"Hizo el check-in ayer\".", "\"Déjeme buscar la dirección de su casa\"."], answer: 1, why: "Nunca confirmas que un huésped se hospeda; tomar un mensaje lo protege." },
      { objective: "O5", q: "Según la ADA, ¿qué NO puedes hacer con un animal de servicio?", options: ["Preguntar si el perro es necesario por una discapacidad", "Preguntar qué tarea está entrenado para hacer", "Cobrar una tarifa de mascota o pedir papeles", "Dar la bienvenida al huésped"], answer: 2, why: "La ADA prohíbe cobrar tarifas de mascota y exigir papeles por los animales de servicio." },
      { objective: "O5", q: "¿Cuál es el número de la Línea Nacional contra la Trata de Personas?", options: ["411", "1-800-555-0000", "La extensión de la recepción del hotel", "1-888-373-7888"], answer: 3, why: "1-888-373-7888 es la Línea Nacional contra la Trata de Personas que publica el DHS." },
      { objective: "O5", q: "Suena la alarma de incendio y huele a humo. ¿Qué va primero?", options: ["Llamar al 911 (o a tu número local de emergencias) y seguir el plan de emergencia del hotel", "Terminar el check-in que estás haciendo", "Publicar un video", "Esperar a que un huésped se queje"], answer: 0, why: "En una emergencia, llama primero al 911 y sigue el plan de emergencia del hotel." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 6, 8, 10, 12, 13, 16, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Lista de tareas del turno", objective: "O1", notYet: "A la lista le falta el inicio, la mitad o el final del turno.", meets: "Tiene tareas de inicio, durante y final, incluidas la bitácora del turno y el conteo de la caja.", exceeds: "También agrega tareas de control de llaves y de teléfono, y cabe en una página clara." },
      { name: "Guion de check-in", objective: "O2", notYet: "Faltan pasos o el guion dice el número de habitación en voz alta.", meets: "Los siete pasos en orden, con el número de habitación escrito y señalado, no dicho.", exceeds: "Leído en voz alta a un compañero en menos de tres minutos, con un saludo y una despedida cálidos." },
      { name: "Folio y check-out", objective: "O3", notYet: "No puede explicar los cargos, o discutiría por un cargo dudoso.", meets: "Explica cada cargo de un folio de práctica y dice que corregiría un error claro o llamaría a un gerente.", exceeds: "También explica una retención en la tarjeta con palabras sencillas y nunca muestra un número de tarjeta completo." },
      { name: "Resolución de problemas", objective: "O4", notYet: "La respuesta discute, culpa o promete lo que el recepcionista no puede dar.", meets: "Se disculpa, ofrece al menos dos opciones permitidas y escribe una nota en la bitácora del turno.", exceeds: "También dice cuándo llamar a un gerente y cómo daría seguimiento al huésped." },
      { name: "Privacidad y seguridad", objective: "O5", notYet: "Comparte un número de habitación, da una llave sin identificación o confrontaría a un presunto tratante.", meets: "Protege la información de los huéspedes, revisa la identificación para las llaves y reporta correctamente las emergencias y las señales de trata.", exceeds: "También atiende un animal de servicio con solo las dos preguntas de la ADA y ya tomó una formación gratuita sobre la trata." },
      { name: "Plan de 30 días", objective: "O1", notYet: "Sin fechas, o sin hoteles con nombre.", meets: "Tres hoteles con nombre, una fecha de práctica y una fecha para revisar la página de la CFDR o preguntar por formación.", exceeds: "También anota quién será su referencia y cómo llegará a cada turno." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se postulan a por lo menos tres empleos en hoteles u hotelería en 30 días (encuesta de seguimiento)",
      "Participantes contratados en recepción, atención al huésped u otro empleo de hotel en 90 días",
      "Participantes que empiezan una credencial de recepción, como la CFDR de AHLEI, en 90 días",
      "Los hoteles aliados informan que sus nuevos empleados necesitan menos formación básica de recepción"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet, o las lecciones en papel",
      "Papel y pluma para los folios de práctica, los sobres de llave y la lista de tareas del turno",
      "Un compañero que haga de huésped (un amigo, un familiar o un compañero de clase)",
      "Unos 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Arme una recepción de práctica con una mesa, un sobre de llave de papel y un folio de práctica; los participantes se turnan como recepcionista y como huésped.",
      "Use solo nombres de huéspedes, números de tarjeta y números de habitación inventados en toda la práctica.",
      "Invite a un gerente de un hotel local a observar los juegos de roles de check-in y a hablar de cómo contrata.",
      "Programas para jóvenes: revise las reglas estatales sobre los horarios de trabajo de adolescentes antes de colocar a alguien; programas de reinserción: dirija a los participantes a empleadores conocidos por contratar con una segunda oportunidad.",
      "Califique la tarea final con la rúbrica y dé retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};

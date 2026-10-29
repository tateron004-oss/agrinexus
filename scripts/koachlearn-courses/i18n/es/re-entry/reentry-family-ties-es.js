"use strict";

// Koach Learn course (Spanish translation of re-entry/reentry-family-ties.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "reentry-family-ties-es",
  lang: "es",
  translationOf: "reentry-family-ties",
  category: "Re-Entry",
  name: "Reconstruir los lazos con la familia y la comunidad",
  skills: "Planear un primer contacto, Volver a conectar con tus hijos, Pedir una revisión de la manutención de hijos, Escuchar y pedir disculpas, Encontrar mentores y grupos de la comunidad, Poner límites sanos",
  outcome: "hacer un plan para volver a conectar con tu familia y tus hijos, dar el primer paso con la manutención de hijos si te corresponde, encontrar mentores y apoyo en la comunidad, y poner límites que protejan tu progreso.",
  about: [
    "Regresar a casa no es solo conseguir trabajo y un lugar donde vivir. La gente a tu alrededor importa igual. La familia, los hijos, los amigos, los mentores y los grupos de la comunidad pueden ayudarte a mantenerte en buen camino, y reconstruir esos lazos es una habilidad que se puede aprender.",
    "En este curso vas a planear un primer contacto, aprender a volver a conectar con tus hijos a su ritmo, pedir una revisión de la manutención de hijos si tu orden ya no va con tus ingresos, practicar cómo escuchar y pedir disculpas, encontrar mentores y grupos de la comunidad, y poner límites sanos. También vas a hacer una lista de apoyo que incluye la 988 Suicide and Crisis Lifeline (línea de ayuda para crisis y prevención del suicidio).",
    "Cada familia es distinta. Algunas personas te van a recibir rápido, otras necesitan tiempo y con algunas el contacto puede no ser seguro o no estar permitido. Sigue siempre las órdenes del tribunal y pregúntale a un consejero, a asistencia legal o a tu oficial de libertad condicional cuando no estés seguro.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe un plan de reconexión y apoyo de una página: el primer familiar al que vas a contactar y tu primer mensaje para esa persona, un paso sobre la crianza o la manutención de hijos si te corresponde, dos apoyos de la comunidad (un mentor, un grupo o una comunidad de fe), dos límites que vas a mantener y una lista de apoyo con personas y números a los que llamar, incluido el 988.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas adultas que regresan a casa después de estar en prisión (reinserción) y quieren volver a conectar con su familia, sus hijos, sus amigos y su comunidad. Algunas son madres o padres con órdenes de manutención de hijos; otras tienen órdenes del tribunal que limitan el contacto.",
    startingPoint: "Conocen a las personas que quieren contactar y tal vez tienen algo de contacto por teléfono o por carta. Muchas no saben cómo empezar, temen el rechazo y no saben cómo funcionan las revisiones de la manutención de hijos, las mentorías o los grupos de apoyo.",
    gap: "Los lazos fuertes con la familia y la comunidad ayudan a mantenerse en buen camino después de salir, pero un primer contacto apurado o mal planeado puede dañar las relaciones, y la manutención de hijos ignorada puede convertirse en una deuda grande. Necesitan un plan para volver a conectar al ritmo de los demás, reconstruir la confianza, encontrar apoyo y proteger su avance.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Dispositivos: un teléfono básico o inteligente; papel y lápiz también sirven",
      "Tiempo: lecciones de unos 5 minutos que caben entre el trabajo y las citas",
      "Las órdenes del tribunal, las órdenes de no contacto y las condiciones de libertad condicional o probatoria siempre van primero",
      "Temas emocionales: cada persona comparte solo lo que quiere, y el 988 está en todas las listas de apoyo"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con las personas con las que quieres volver a conectar", action: "elegir a quién contactar primero y escribir un primer mensaje corto y respetuoso", standard: "sin pedir dinero, sin culpar ni presionar, y siguiendo cualquier orden del tribunal" },
    { id: "O2", condition: "Con un hijo o una hija con quien quieres volver a conectar", action: "planear una primera visita o llamada que ponga primero lo que el niño necesita", standard: "con preguntas para quien lo cuida y una promesa pequeña que puedas cumplir" },
    { id: "O3", condition: "Con una orden de manutención de hijos que ya no va con tus ingresos", action: "pedirle una revisión a tu agencia de manutención de hijos", standard: "con el contacto de la agencia, los papeles que se necesitan y una fecha para contactarla" },
    { id: "O4", condition: "Ante una conversación difícil", action: "usar la escucha, los mensajes en primera persona y una disculpa de tres partes", standard: "sin ningún \"pero\" en la disculpa y sin pedir que te perdonen" },
    { id: "O5", condition: "Usando el 211, a tu administrador de caso o grupos locales", action: "encontrar un mentor y un grupo de la comunidad y pedirle al mentor un compromiso específico", standard: "con los datos de contacto de cada uno y las palabras exactas de tu petición" },
    { id: "O6", condition: "Ante personas o situaciones que podrían hacerte retroceder", action: "poner dos límites sanos y escribir una lista de apoyo que incluya el 988", standard: "con la lista guardada en tu teléfono y en papel" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Volver a conectar con la familia y los hijos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear tu primer contacto",
          minutes: 5,
          goal: "Elegir a quién contactar primero y escribir un primer mensaje corto y respetuoso.",
          text: [
            "Mientras estuviste fuera, tu familia siguió viviendo. Los niños crecieron, la gente se mudó, algunas relaciones se hicieron más fuertes y otras salieron lastimadas. Volver a conectar sale mejor cuando lo planeas en vez de llegar sin avisar.",
            "Empieza con una lista de las personas que quieres de vuelta en tu vida. Al lado de cada nombre, escribe cómo quedaron las cosas y si hay alguna orden del tribunal, como una orden de no contacto o de custodia. Sigue cada orden. Si no estás seguro, pregúntale a tu oficial de libertad condicional o a asistencia legal.",
            "Elige a una persona que probablemente esté abierta y empieza con poco: una carta, un mensaje de texto o una llamada corta. Dile que ya estás en casa, que te gustaría volver a conectar y deja que ella elija el ritmo. No pidas dinero ni un lugar donde quedarte en el primer mensaje.",
            "Espera sentimientos encontrados, también los tuyos. Si alguien no está listo, dale las gracias y deja la puerta abierta. No es el final; es el comienzo."
          ],
          steps: ["Haz una lista de las personas con las que quieres volver a conectar.", "Anota cómo quedaron las cosas y cualquier orden del tribunal; sigue cada orden.", "Elige a una persona que probablemente esté abierta.", "Escribe un mensaje corto: ya estás en casa, te gustaría volver a conectar, la otra persona puede elegir el ritmo.", "Mándalo y luego dale tiempo para responder."],
          words: [["Orden de no contacto", "una orden del tribunal que dice que no puedes contactar a cierta persona."], ["Orden de custodia", "una orden del tribunal sobre con quién viven los hijos y quién toma decisiones por ellos."], ["Ritmo", "qué tan rápido pasa algo."]],
          slides: [
            { title: "Planea, no sorprendas", bullets: ["Tu familia siguió viviendo mientras no estabas", "Un primer contacto planeado sale mejor"] },
            { title: "Haz tu lista", bullets: ["A quién quieres de vuelta en tu vida", "Cómo quedaron las cosas", "Cualquier orden del tribunal: síguelas todas"] },
            { title: "Empieza con poco", bullets: ["Una carta, un mensaje o una llamada corta", "Di que estás en casa y que quieres volver a conectar", "Deja que la otra persona elija el ritmo"] },
            { title: "Si no está lista", bullets: ["Dale las gracias", "Deja la puerta abierta", "Vuelve a intentarlo más adelante, con calma"] }
          ],
          tryIt: "Escribe tu lista de personas, luego elige a una y escribe un primer mensaje de tres o cuatro oraciones. Léelo en voz alta. Quita todo lo que pida dinero, culpe a alguien o presione para que te respondan rápido.",
          youCanNow: "planear un primer contacto, seguir cualquier orden del tribunal y escribir un mensaje corto y respetuoso que deja que la otra persona elija el ritmo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debe incluir un primer mensaje a un familiar?", options: ["Una petición para quedarte en su casa", "Que ya estás en casa y te gustaría volver a conectar", "Una lista de lo que hizo mal", "La exigencia de una respuesta hoy mismo"], answer: 1, why: "Un mensaje corto y respetuoso abre la puerta sin presionar." },
            { objective: "O1", q: "Tu hermano te responde que necesita tiempo antes de hablar. ¿Qué harías?", options: ["Llamarlo todos los días hasta que conteste", "Presentarte en su casa", "Darle las gracias y dejar la puerta abierta", "Pedirle a otros familiares que lo presionen"], answer: 2, why: "Respetar su ritmo deja la puerta abierta para más adelante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Volver a conectar con tus hijos",
          minutes: 6,
          goal: "Planear una primera visita o llamada con tu hijo o hija que ponga primero lo que el niño necesita.",
          text: [
            "Los niños necesitan tres cosas de un padre o una madre que regresa: seguridad, una honestidad que puedan entender y alguien que aparezca una y otra vez. Ser constante importa más que los regalos grandes o las promesas grandes.",
            "Trabaja con el adulto que cuida a tu hijo ahora. Pregúntale qué sabe el niño, para qué está listo y qué horarios funcionan. Habla con respeto del otro padre o de quien lo cuida delante del niño, aunque cueste.",
            "Sé honesto con palabras que vayan con la edad del niño. A un niño pequeño tal vez solo le haga falta oír: cometí un error, estuve fuera y ahora estoy aquí. Los niños más grandes pueden tener preguntas o enojo. Escucha, no discutas y no hagas promesas que no puedes cumplir.",
            "Si necesitas visitas o un cambio de custodia, el sitio web de autoayuda del tribunal de tu estado explica los formularios, y los facilitadores de derecho familiar o asistencia legal pueden ayudarte. Nunca te lleves a un niño ni presiones a quien lo cuida fuera de lo que diga una orden del tribunal."
          ],
          steps: ["Habla primero con quien cuida al niño.", "Pregunta qué sabe el niño y para qué está listo.", "Planea una primera visita o llamada corta a una hora que le funcione al niño.", "Usa palabras honestas que vayan con su edad.", "Cumple cada promesa, empezando por las pequeñas, como llamar cuando dijiste que lo harías."],
          words: [["Cuidador", "el adulto que se encarga de un niño en el día a día."], ["Visitas", "el tiempo que pasa un padre o una madre con un hijo que no vive con él, muchas veces fijado por un tribunal."], ["Facilitador de derecho familiar", "una persona del tribunal que explica los formularios de derecho familiar, muchas veces gratis. En inglés se dice family law facilitator."]],
          slides: [
            { title: "Lo que necesitan los niños", bullets: ["Seguridad", "Una honestidad que puedan entender", "Alguien que aparezca una y otra vez"] },
            { title: "Trabaja con quien lo cuida", bullets: ["Pregunta qué sabe el niño y para qué está listo", "Pónganse de acuerdo en los horarios", "Habla de esa persona con respeto"] },
            { title: "Palabras honestas, según la edad", bullets: ["Pequeños: estuve fuera, ahora estoy aquí", "Más grandes: escucha sus preguntas y su enojo", "Nada de promesas que no puedes cumplir"] },
            { title: "Visitas y custodia", bullets: ["Usa el sitio de autoayuda del tribunal de tu estado", "Pregunta a un facilitador de derecho familiar o a asistencia legal", "Sigue siempre las órdenes del tribunal"] }
          ],
          tryIt: "Escribe tres preguntas para hacerle a quien cuida a tu hijo antes de una primera visita o llamada, y una promesa pequeña que sabes que puedes cumplir, como llamar cada domingo a las 6 pm.",
          youCanNow: "planear una primera visita o llamada que ponga primero a tu hijo, trabajar con quien lo cuida y cumplir promesas pequeñas que generan confianza.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es lo que más construye la confianza de un niño cuando su papá o su mamá regresa a casa?", options: ["Regalos caros", "Grandes promesas sobre el futuro", "Una sola visita larga", "Cumplir promesas pequeñas una y otra vez"], answer: 3, why: "Los niños confían en el papá o la mamá que sigue presente y cumple sus promesas pequeñas." },
            { objective: "O2", q: "Quieres llamar a tu hija por primera vez en años. ¿Qué harías primero?", options: ["Hablar con quien la cuida", "Llamar a su escuela", "Mandarle un mensaje por redes sociales", "Presentarte a la salida de la escuela"], answer: 0, why: "Quien la cuida puede ayudarte a planear un contacto que ponga primero lo que la niña necesita." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Manutención de hijos: pedir una revisión",
          minutes: 5,
          goal: "Pedirle a tu agencia de manutención de hijos una revisión cuando tu orden ya no va con tus ingresos.",
          text: [
            "La manutención de hijos (child support) no se detiene sola cuando cambian tus ingresos. Lo que no se paga se puede convertir en una deuda grande y traer problemas, como que te suspendan la licencia de manejo. Ignorarla lo empeora. Pedir una revisión es lo correcto.",
            "En California, cualquiera de los dos padres puede pedirle a la agencia local de manutención de hijos una revisión y ajuste, que se llama modificación. No cuesta nada. Puede aplicarse cuando la orden cambiaría en un 20% o en $50, lo que sea menos. Los cambios que cuentan incluyen perder o empezar un trabajo, un cambio de ingresos, cambios de custodia, discapacidad, encarcelamiento y despliegue militar. Un padre o una madre que va a estar encarcelado 60 días seguidos o más puede pedir una orden más baja con el formulario Incarcerated Parent's Request to Review Child Support (solicitud de revisión de la manutención para padres encarcelados).",
            "Lleva pruebas de tus ingresos y gastos, como talones de pago o una carta de beneficios. Si los dos padres están de acuerdo, pueden firmar un acuerdo para el tribunal; si no, decide el tribunal. El facilitador de derecho familiar de tu condado puede ayudarte.",
            "Fuera de California, contacta a la agencia de manutención de hijos de tu estado o de tu tribu y pregunta cómo pedir una revisión. Pregunta pronto: en muchos lugares el cambio cuenta solo desde la fecha en que lo pides, no desde que bajaron tus ingresos."
          ],
          steps: ["Busca tu agencia local de manutención de hijos (en California, childsupport.ca.gov).", "Llama o escribe para pedir una revisión y ajuste.", "Reúne pruebas de tus ingresos y gastos.", "Guarda copias y anota la fecha en que lo pediste.", "Paga lo que puedas mientras esperas y guarda el comprobante de cada pago."],
          words: [["Orden de manutención de hijos", "una orden del tribunal que dice cuánto paga un padre o una madre para ayudar a mantener a un hijo."], ["Modificación", "un cambio a una orden de manutención de hijos."], ["Atrasos", "la manutención que se debía y no se pagó. En inglés se dice arrears."]],
          slides: [
            { title: "No ignores la manutención de hijos", bullets: ["No se detiene sola", "Lo que no se paga se vuelve una deuda grande", "Pedir una revisión es lo correcto"] },
            { title: "Revisión y ajuste en California", bullets: ["Cualquiera de los padres la puede pedir; es gratis", "Cambios: trabajo, ingresos, custodia, encarcelamiento", "Encarcelado 60+ días seguidos: pide una orden más baja"] },
            { title: "Qué llevar", bullets: ["Pruebas de ingresos y gastos", "Ayuda: el facilitador de derecho familiar de tu condado"] },
            { title: "Fuera de California", bullets: ["Contacta a la agencia de tu estado o de tu tribu", "Pide pronto: el cambio suele contar desde que lo pides"] }
          ],
          sources: [
            { name: "Departamento de Servicios de Manutención de Hijos de California: Modificar mi pago", url: "https://childsupport.ca.gov/overview/modify-my-payment/" },
            { name: "Departamento de Servicios de Manutención de Hijos de California: Inicio", url: "https://childsupport.ca.gov/" }
          ],
          tryIt: "Busca el sitio web o el teléfono de tu agencia de manutención de hijos. Anota cómo pedir una revisión, qué papeles te piden y la fecha en que los vas a contactar. Si no tienes una orden, anota una manera en que puedes ayudar a tu hijo este mes.",
          youCanNow: "pedirle a tu agencia de manutención de hijos una revisión y llevar las pruebas correctas, en vez de dejar que la deuda crezca.",
          quickCheck: [
            { objective: "O3", q: "¿Qué puede pasar si ignoras la manutención de hijos después de que bajan tus ingresos?", options: ["La orden se detiene sola", "La manutención sin pagar puede convertirse en una deuda grande", "La agencia de manutención de hijos se olvida", "Tu hijo la paga"], answer: 1, why: "La manutención ignorada se sigue acumulando, por eso importa pedir una revisión." },
            { objective: "O3", q: "Te bajaron las horas en el trabajo y tu orden de manutención de hijos ahora es demasiado alta. ¿Qué harías?", options: ["Dejar de pagar y esperar", "Pagar solo cuando puedas", "Pedirle a un amigo que llame por ti", "Contactar a tu agencia de manutención de hijos y pedir una revisión"], answer: 3, why: "Una revisión es la forma oficial de ajustar una orden a tus ingresos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Volver a conectar con la familia y los hijos",
        questions: [
          { objective: "O1", q: "Quieres volver a conectar con un primo con el que no hablas hace años. ¿Cuál es el mejor primer paso?", options: ["Llegar a su casa tarde en la noche", "Mandarle un mensaje corto diciendo que estás en casa y que te gustaría volver a conectar", "Pedirle dinero enseguida", "Publicar algo sobre él en internet"], answer: 1, why: "Un mensaje corto y respetuoso deja que la otra persona elija el ritmo." },
          { objective: "O1", q: "Hay una orden de no contacto con un familiar. ¿Qué debes hacer?", options: ["Seguir la orden", "Ignorarla si te sientes listo", "Pedirle a un amigo que le pase mensajes", "Contactarlo una vez para explicarle"], answer: 0, why: "Las órdenes del tribunal se tienen que seguir siempre; si tienes dudas, pregunta a asistencia legal o a tu oficial." },
          { objective: "O2", q: "¿Qué es lo que más le importa a un niño cuando su padre o su madre regresa?", options: ["Regalos caros", "Promesas grandes", "Que aparezca una y otra vez", "Que hable mal de quien lo cuida"], answer: 2, why: "Ser constante genera más confianza en un niño que los regalos o las promesas." },
          { objective: "O3", q: "Tus ingresos bajaron y no puedes pagar la manutención de hijos. ¿Qué haces?", options: ["Dejar de pagar y no decir nada", "Esperar a que la deuda sea grande", "Mudarte lejos", "Pedirle a tu agencia de manutención de hijos una revisión"], answer: 3, why: "Una revisión puede bajar la orden; ignorarla deja que la deuda crezca." },
          { objective: "O3", q: "En California, ¿cuánto cuesta pedir una revisión de la manutención de hijos?", options: ["$500", "Nada", "Un mes de manutención", "Depende del juez"], answer: 1, why: "La revisión y ajuste de California es gratis." }
        ]
      }
    },
    {
      name: "Capítulo 2: Comunidad, límites y apoyo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escuchar, pedir disculpas y reconstruir la confianza",
          minutes: 5,
          goal: "Usar la escucha, los mensajes en primera persona y una disculpa real en una conversación difícil.",
          text: [
            "La confianza se reconstruye con acciones a lo largo del tiempo, no en una sola conversación. Comunicarte bien ayuda a que esas acciones se vean.",
            "Primero escucha. Deja que la otra persona termine y luego repite lo que oíste: O sea que te sentiste decepcionada cuando no fui a tu graduación. Esto muestra que entiendes, aunque tú lo veas distinto.",
            "Usa mensajes en primera persona (con yo) para contar lo que sientes sin culpar: Me siento nervioso por esto, en vez de Tú siempre lo haces difícil. Una disculpa real dice lo que hiciste, dice cómo le dolió a la otra persona y dice qué vas a hacer distinto. No lleva pero y no exige perdón.",
            "Algunas personas van a necesitar mucho tiempo. Ten paciencia. Sigue apareciendo, cumple tu palabra y deja que la confianza vuelva a su ritmo."
          ],
          steps: ["Deja que la otra persona termine de hablar.", "Repite lo que oíste.", "Cuenta lo que sientes con mensajes en primera persona.", "Pide disculpas: qué hiciste, cómo dolió y qué vas a hacer distinto.", "No agregues pero; no exijas perdón.", "Después, cumple tu palabra."],
          words: [["Mensaje en primera persona", "una manera de contar lo que sientes empezando con yo, sin culpar."], ["Repetir lo que oíste", "decir con tus propias palabras lo que alguien dijo, para mostrar que entendiste."], ["Confianza", "creer que alguien va a hacer lo que dice."]],
          slides: [
            { title: "La confianza vuelve con acciones", bullets: ["No en una sola conversación", "Comunicarte bien ayuda a que se vean las acciones"] },
            { title: "Primero escucha", bullets: ["Deja que termine", "Repite lo que oíste"] },
            { title: "Una disculpa real", bullets: ["Di lo que hiciste", "Di cómo le dolió", "Di qué vas a hacer distinto", "Sin pero; sin exigir que te perdonen"] },
            { title: "Ten paciencia", bullets: ["Algunas personas necesitan mucho tiempo", "Sigue apareciendo y cumple tu palabra"] }
          ],
          tryIt: "Escribe una disculpa real para una persona con las tres partes: qué hiciste, cómo le dolió y qué vas a hacer distinto. Revisa que no tenga pero y que no pida perdón. Tú decides más adelante si la compartes y cuándo.",
          youCanNow: "escuchar y repetir lo que oíste, hablar con mensajes en primera persona y dar una disculpa real que ayude a reconstruir la confianza.",
          quickCheck: [
            { objective: "O4", q: "¿Cuáles son las tres partes de una disculpa real?", options: ["Lo que hiciste, cómo le dolió y qué vas a hacer distinto", "Por qué lo hiciste, quién más tuvo la culpa y qué debería hacer la otra persona", "Perdón, pero, y por favor perdóname", "Un regalo, un abrazo y una promesa de olvidar"], answer: 0, why: "Una disculpa real nombra el daño y el cambio, sin excusas." },
            { objective: "O4", q: "Tu mamá empieza a contarte lo mucho que le dolió. ¿Qué harías primero?", options: ["Explicar tu lado de inmediato", "Cambiar de tema", "Escuchar y dejar que termine", "Salirte del cuarto"], answer: 2, why: "Escuchar primero muestra respeto y ayuda a reconstruir la confianza." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Mentores, fe y grupos de la comunidad",
          minutes: 5,
          goal: "Encontrar un mentor y un grupo de la comunidad al que puedas unirte este mes.",
          text: [
            "Un mentor es alguien que va unos pasos más adelante que tú y que puede darte consejos, preguntarte cómo vas y animarte. Muchos programas de reinserción conectan a la gente con mentores, muchas veces personas que también regresaron a la comunidad.",
            "Los grupos de la comunidad te dan un lugar al que pertenecer: grupos de apoyo para la reinserción, reuniones de recuperación, comunidades de fe, ligas deportivas, grupos de voluntarios, clases para padres y grupos de exalumnos de programas que terminaste. Estar cerca de gente que está construyendo una buena vida hace más fácil que tú hagas lo mismo.",
            "Para encontrarlos, pregúntale a tu programa de reinserción, a tu administrador de caso o a tu oficial de libertad condicional, llama al 211 o pregunta en una comunidad de fe cerca de ti. Ve una vez y luego vuelve. La mayoría de los grupos se sienten raros al principio y mejor para la tercera visita.",
            "Cuando le pidas a alguien que sea tu mentor, sé específico: ¿Podríamos hablar 30 minutos una vez al mes? Estoy trabajando en mantener mi trabajo y en volver a conectar con mis hijos."
          ],
          steps: ["Pregúntale a tu programa de reinserción o a tu administrador de caso por mentores.", "Llama al 211 o pregunta en una comunidad de fe por grupos cerca de ti.", "Elige un grupo y ve por lo menos tres veces.", "Pídele a un posible mentor un compromiso pequeño y específico.", "Dales las gracias a las personas que te ayudan."],
          words: [["Mentor", "una persona de confianza que te da consejos y apoyo mientras creces."], ["Grupo de apoyo", "personas con una experiencia en común que se reúnen para ayudarse."], ["Comunidad de fe", "una iglesia, mezquita, templo u otro lugar de culto y sus miembros."]],
          slides: [
            { title: "Por qué un mentor", bullets: ["Alguien unos pasos más adelante que tú", "Consejos, seguimiento y ánimo", "Muchas veces alguien que también regresó"] },
            { title: "Lugares a los que pertenecer", bullets: ["Grupos de reinserción y de recuperación", "Comunidades de fe y voluntariado", "Deportes, clases para padres y grupos de exalumnos"] },
            { title: "Cómo encontrarlos", bullets: ["Pregunta a tu programa o a tu administrador de caso", "Llama al 211", "Ve por lo menos tres veces"] },
            { title: "Pedirle a alguien que sea tu mentor", bullets: ["Sé específico y pide poco", "30 minutos una vez al mes", "Di en qué estás trabajando"] }
          ],
          sources: [
            { name: "211: Encuentra ayuda local", url: "https://www.211.org/" }
          ],
          tryIt: "Encuentra un posible mentor y un grupo de la comunidad. Anota cómo contactar a cada uno. Luego escribe las palabras exactas que vas a usar para pedirle al mentor un compromiso pequeño y específico.",
          youCanNow: "encontrar un mentor y un grupo de la comunidad y pedir apoyo de manera clara y específica.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un mentor?", options: ["Alguien que paga tus cuentas", "Una persona de confianza que va unos pasos adelante y te da consejo y apoyo", "Tu oficial de libertad condicional", "Cualquier persona que conoces una vez"], answer: 1, why: "Un mentor ya recorrió un camino parecido y te ayuda a orientarte." },
            { objective: "O5", q: "Quieres que alguien de tu iglesia sea tu mentor. ¿Qué le dirías?", options: ["¿Me arreglas la vida?", "¿Puedes estar para mí cada vez que te necesite?", "¿Me prestas dinero?", "¿Podríamos vernos 30 minutos una vez al mes para hablar de mis metas?"], answer: 3, why: "Una petición pequeña y específica es más fácil de aceptar para un mentor." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Límites sanos y buscar apoyo",
          minutes: 6,
          goal: "Poner dos límites sanos y armar una lista de apoyo que incluya el 988.",
          text: [
            "Un límite es una línea que trazas para proteger tu salud, tu libertad y tu progreso. Algunos amigos, lugares y costumbres de antes te pueden jalar hacia atrás. Un límite puede ser: Ya no voy a esa cuadra, o No voy a guardar nada en mi carro para nadie.",
            "Di un límite de forma simple y amable: Te quiero, y ahorita no puedo estar donde se toma alcohol. No tienes que discutir ni explicarlo muchas veces. Los límites también van en los dos sentidos: respeta los límites que tu familia pone contigo.",
            "Regresar es estresante. Sentirte ansioso, enojado, triste o solo es común, y pedir ayuda es normal. La 988 Suicide and Crisis Lifeline (línea de ayuda para crisis y prevención del suicidio) es gratis, confidencial y está abierta las 24 horas, todos los días. Puedes llamar o mandar un mensaje de texto al 988, o chatear en 988lifeline.org, por ti o por alguien que te preocupa. En una emergencia, llama al 911.",
            "Haz una lista de apoyo: dos o tres personas de confianza, tu mentor o tu grupo, tu administrador de caso y el 988. Guárdala en tu teléfono y en papel."
          ],
          steps: ["Nombra dos situaciones que te podrían jalar hacia atrás.", "Escribe un límite para cada una.", "Practica decir cada uno de forma amable y simple.", "Escribe tu lista de apoyo: personas de confianza, mentor o grupo, administrador de caso y 988.", "Guarda la lista en tu teléfono y en papel."],
          words: [["Límite", "un tope que pones para proteger tu salud, tu seguridad y tu progreso."], ["988", "la Suicide and Crisis Lifeline; llama, manda un texto o chatea gratis, las 24 horas, todos los días."], ["Detonante", "una persona, un lugar o un sentimiento que hace más fuerte una costumbre de antes."]],
          slides: [
            { title: "Qué es un límite", bullets: ["Una línea que protege tu progreso", "Ejemplo: Ya no voy a esa cuadra"] },
            { title: "Cómo decirlo", bullets: ["Simple y amable", "No hace falta discutir ni explicar una y otra vez", "Respeta también los límites de tu familia"] },
            { title: "988: ayuda a cualquier hora", bullets: ["Llama o manda un texto al 988, o chatea en 988lifeline.org", "Gratis, confidencial, 24/7", "Emergencia: llama al 911"] },
            { title: "Tu lista de apoyo", bullets: ["Dos o tres personas de confianza", "Mentor, grupo y administrador de caso", "El 988, en tu teléfono y en papel"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline (línea de ayuda para crisis y prevención del suicidio)", url: "https://988lifeline.org/" }
          ],
          tryIt: "Tarea final: escribe tu plan de reconexión y apoyo de una página con el primer familiar al que vas a contactar y tu mensaje, un paso sobre la crianza o la manutención de hijos si te corresponde, dos apoyos de la comunidad, dos límites y tu lista de apoyo con el 988.",
          youCanNow: "poner límites sanos, decirlos con amabilidad y buscar apoyo, incluido el 988, cuando las cosas se ponen difíciles.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un límite?", options: ["Un tope que pones para proteger tu salud y tu avance", "Una regla que tu familia pone por ti", "Una orden del tribunal", "Una forma de castigar a la gente"], answer: 0, why: "Los límites son topes que tú eliges para protegerte a ti y a tu avance." },
            { objective: "O6", q: "Un viejo amigo te sigue invitando a lugares donde podrías meterte en problemas. ¿Qué harías?", options: ["Ir una vez para que deje de insistir", "Decir que no con amabilidad y proponer otra cosa, o alejarte", "Ir pero salir temprano", "Bloquear a todas las personas que conoces"], answer: 1, why: "Un no claro y amable protege tu avance." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Comunidad, límites y apoyo",
        questions: [
          { objective: "O4", q: "¿Cuál es una disculpa real?", options: ["Perdón, pero tú me obligaste", "Perdón si te molestaste", "¿Podemos olvidarlo y ya?", "No estuve en tus cumpleaños. Sé que te dolió. Ahora te voy a llamar cada semana."], answer: 3, why: "Dice lo que hiciste, cómo dolió y qué vas a hacer distinto." },
          { objective: "O4", q: "¿Cuál es un mensaje en primera persona?", options: ["Tú nunca escuchas", "Me siento nervioso por esta conversación", "Tú siempre lo arruinas todo", "Todos están en mi contra"], answer: 1, why: "Un mensaje en primera persona cuenta lo que sientes sin culpar." },
          { objective: "O5", q: "¿Cuál es una buena manera de pedirle a alguien que sea tu mentor?", options: ["¿Podríamos hablar 30 minutos una vez al mes sobre cómo mantener mi trabajo?", "Arregla mi vida", "Dame dinero", "Está disponible todo el tiempo"], answer: 0, why: "A una petición pequeña y específica es fácil decirle que sí." },
          { objective: "O6", q: "Un amigo de antes quiere que le guardes algo en tu carro. Un límite sano es:", options: ["Decir que sí para cuidar la amistad", "Decir que sí solo esta vez", "Decir que no con amabilidad: ya no puedo hacer eso", "Ignorar las reglas de tu libertad condicional"], answer: 2, why: "Un no claro y amable protege tu libertad y tu progreso." },
          { objective: "O6", q: "Te sientes sin esperanza tarde en la noche. ¿Qué puedes hacer?", options: ["Esperar hasta el mes que viene", "Llamar o mandar un texto al 988", "Guardártelo", "Buscar un foro cualquiera"], answer: 1, why: "El 988 es gratis, confidencial y está abierto 24/7 por llamada, texto o chat." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Reconstruir los lazos con la familia y la comunidad",
    questions: [
      { objective: "O1", q: "¿Por qué planear tu primer contacto en vez de llegar sin avisar?", options: ["Un plan respeta a la otra persona y sale mejor", "La ley exige un plan", "Es más rápido sorprender a la gente", "No importa"], answer: 0, why: "Un contacto planeado y respetuoso le da a la relación un mejor comienzo." },
      { objective: "O1", q: "¿Qué NO debe incluir un primer mensaje?", options: ["Que ya estás en casa", "Que te gustaría volver a conectar", "Una exigencia de dinero o de un lugar donde quedarte", "Que la otra persona puede elegir el ritmo"], answer: 2, why: "Pedir dinero o vivienda primero presiona a la otra persona." },
      { objective: "O1", q: "Un familiar dice que no está listo para hablar. ¿Qué es lo mejor?", options: ["Seguir llamando cada hora", "Enojarte", "Pedirles a otros que lo presionen", "Darle las gracias y dejar la puerta abierta"], answer: 3, why: "Respetar su ritmo deja la puerta abierta para más adelante." },
      { objective: "O2", q: "Antes de tu primera visita con tu hijo, primero debes hablar con:", options: ["Quien cuida al niño", "Un desconocido en internet", "Tus amigos de antes", "Nadie"], answer: 0, why: "Quien cuida al niño sabe para qué está listo y qué horarios funcionan." },
      { objective: "O2", q: "Un niño pequeño te pregunta dónde estabas. Una buena respuesta es:", options: ["Una historia larga con todos los detalles", "Cometí un error, estuve fuera y ahora estoy aquí", "Fue culpa de tu mamá", "Nada"], answer: 1, why: "Palabras simples y honestas van con la edad de un niño pequeño." },
      { objective: "O2", q: "Quieres visitas regulares fijadas por un tribunal. ¿Por dónde puedes empezar?", options: ["Un grupo en redes sociales", "Tu antiguo compañero de celda", "El sitio de autoayuda del tribunal de tu estado o un facilitador de derecho familiar", "Una casa de empeño"], answer: 2, why: "Los sitios de autoayuda de los tribunales y los facilitadores de derecho familiar explican los formularios." },
      { objective: "O2", q: "¿Qué es lo que más genera confianza en un niño?", options: ["Promesas grandes", "Regalos grandes una vez al año", "Hablar mal de quien lo cuida", "Cumplir promesas pequeñas una y otra vez"], answer: 3, why: "Ser constante le muestra al niño que puede contar contigo." },
      { objective: "O3", q: "¿Qué pasa con la manutención de hijos si la ignoras después de que bajan tus ingresos?", options: ["Lo que no pagas se puede volver una deuda grande", "Se detiene sola", "Te la perdonan automáticamente", "No pasa nada"], answer: 0, why: "Las órdenes siguen vigentes hasta que se cambian, así que lo que no pagas se acumula." },
      { objective: "O3", q: "En California, ¿quién puede pedir una revisión de la manutención de hijos?", options: ["Solo el juez", "Cualquiera de los dos padres", "Solo el hijo", "Solo un abogado"], answer: 1, why: "Cualquiera de los padres puede pedirle una revisión a la agencia local de manutención de hijos." },
      { objective: "O3", q: "En California, un padre o una madre encarcelado 60 días seguidos o más puede:", options: ["No cambiar nunca la orden", "Ignorar la orden", "Pedir una orden más baja con el formulario Incarcerated Parent's Request to Review Child Support", "Pagar el doble"], answer: 2, why: "California tiene un formulario específico para que los padres encarcelados pidan una revisión." },
      { objective: "O3", q: "Fuera de California, ¿dónde preguntas por un cambio a una orden de manutención de hijos?", options: ["A tu empleador", "A tu arrendador", "En una estación de radio", "En la agencia de manutención de hijos de tu estado o de tu tribu"], answer: 3, why: "Las agencias de manutención de hijos estatales y tribales hacen las revisiones." },
      { objective: "O4", q: "¿Qué debes hacer primero en una conversación difícil?", options: ["Escuchar y dejar que la otra persona termine", "Interrumpir para explicar", "Irte", "Levantar la voz"], answer: 0, why: "Escuchar primero muestra respeto y te ayuda a entender." },
      { objective: "O4", q: "Decir con tus palabras lo que oíste se llama:", options: ["Discutir", "Repetir lo que oíste", "Ignorar", "Culpar"], answer: 1, why: "Repetir lo que oíste le muestra a la otra persona que entendiste." },
      { objective: "O4", q: "¿Qué palabra debes dejar fuera de una disculpa?", options: ["Perdón", "Voy a", "Pero", "Yo"], answer: 2, why: "El pero convierte una disculpa en una excusa." },
      { objective: "O5", q: "Un mentor es:", options: ["Tu oficial de libertad condicional", "Alguien que paga tus cuentas", "Un juez", "Una persona de confianza que va unos pasos adelante y te da consejos y apoyo"], answer: 3, why: "Los mentores comparten consejos y ánimo mientras creces." },
      { objective: "O5", q: "Fuiste una vez a un grupo de apoyo y te sentiste fuera de lugar. ¿Cuál es un buen siguiente paso?", options: ["Ir por lo menos dos veces más antes de decidir", "No volver nunca", "Quejarte en internet", "Decirles a otros que no vayan"], answer: 0, why: "La mayoría de los grupos se sienten mejor para la tercera visita." },
      { objective: "O5", q: "¿Cuál es una manera de encontrar grupos de la comunidad?", options: ["Pedirle dinero a un desconocido", "Llamar al 211 o preguntarle a tu administrador de caso", "Esperar a que alguien te encuentre", "Volver a los lugares de antes"], answer: 1, why: "El 211 y los administradores de caso conocen los grupos y programas de la zona." },
      { objective: "O6", q: "¿Qué es un límite?", options: ["Una cerca alrededor de tu casa", "Una regla que otros te ponen", "Un tope que pones para proteger tu salud y tu progreso", "Un tipo de orden del tribunal"], answer: 2, why: "Un límite protege tu salud, tu seguridad y tu progreso." },
      { objective: "O6", q: "¿Qué es cierto sobre el 988?", options: ["Cuesta dinero", "Solo funciona entre semana", "Es solo para emergencias con policía", "Puedes llamar, mandar un texto o chatear gratis, 24/7"], answer: 3, why: "El 988 es gratis, confidencial y está abierto 24/7 por llamada, texto o chat." },
      { objective: "O6", q: "¿Dónde debes guardar tu lista de apoyo?", options: ["En tu teléfono y en papel", "Solo en tu cabeza", "En ningún lado", "Con un desconocido"], answer: 0, why: "Tenerla en dos lugares significa que la puedes encontrar cuando la necesites." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      3,
      6,
      7,
      10,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Primer contacto",
        objective: "O1",
        notYet: "No hay mensaje, o pide dinero, culpa o presiona.",
        meets: "Nombra a quién contactar primero y un mensaje corto y respetuoso.",
        exceeds: "El mensaje se leyó en voz alta y le da espacio a la otra persona para tomarse su tiempo."
      },
      {
        name: "Paso sobre crianza o manutención",
        objective: "O3",
        notYet: "No hay ningún paso cuando hace falta uno.",
        meets: "Un paso claro, como contactar a quien cuida al niño o pedirle una revisión a la agencia, con una fecha.",
        exceeds: "Anota los papeles que se necesitan o las preguntas para quien cuida al niño."
      },
      {
        name: "Apoyos en la comunidad",
        objective: "O5",
        notYet: "Menos de dos apoyos.",
        meets: "Dos apoyos, como un mentor, un grupo o una comunidad de fe, con la forma de contactarlos.",
        exceeds: "Incluye las palabras exactas para pedirle a un mentor un compromiso específico."
      },
      {
        name: "Límites",
        objective: "O6",
        notYet: "Menos de dos límites, o son vagos.",
        meets: "Dos límites claros que protegen el avance de la persona.",
        exceeds: "Cada límite tiene las palabras que la persona usará para mantenerlo."
      },
      {
        name: "Lista de apoyo",
        objective: "O6",
        notYet: "No hay lista, o falta el 988.",
        meets: "Una lista de personas y números a los que llamar, que incluye el 988.",
        exceeds: "Guardada en el teléfono y en papel."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que dicen haber contactado a un familiar o a un hijo en 30 días (encuesta de seguimiento)",
      "Personas que se unen a un programa de mentoría, un grupo de apoyo o una comunidad de fe en 60 días",
      "Personas que piden una revisión de la manutención de hijos cuando su orden ya no va con sus ingresos"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel y lápiz, o una aplicación de notas en el teléfono",
      "Un teléfono para guardar la lista de apoyo",
      "Unos 60 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Estos temas pueden despertar sentimientos fuertes; deja que cada persona comparta solo lo que quiera y ten el 988 a la vista.",
      "Recuerda a los participantes que las órdenes del tribunal, las órdenes de no contacto y las condiciones de libertad condicional o probatoria van primero.",
      "Ten listos los contactos de tu agencia local de manutención de hijos, de la asistencia legal y del 211.",
      "Practiquen en parejas la escucha y los mensajes en primera persona con situaciones inventadas, no con conflictos familiares reales.",
      "Califica el plan con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

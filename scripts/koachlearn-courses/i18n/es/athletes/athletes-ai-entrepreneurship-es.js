"use strict";

// Koach Learn course (Spanish translation of athletes-ai-entrepreneurship). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-ai-entrepreneurship-es",
  lang: "es",
  translationOf: "athletes-ai-entrepreneurship",
  category: "Athletes",
  name: "Emprendimiento con IA para atletas",
  skills: "Encontrar una idea de negocio en tu deporte, Probar una idea con personas reales, Escribir un plan de negocio de una página con IA, Armar un presupuesto inicial sencillo, Conocer las reglas: NIL, marcas registradas, registros e impuestos",
  outcome: "convertir una idea de tu deporte en una idea de negocio probada: hablar con cinco posibles clientes, escribir con IA un plan de negocio de una página y un presupuesto inicial, y hacer la lista de las reglas que debes revisar antes de lanzar.",
  about: [
    "Este curso es para atletas y entrenadores que tienen una idea de negocio, o que quieren tener una: un negocio de entrenamiento, una idea de app, un producto que resuelve un problema que has visto en el deporte o un servicio para equipos locales.",
    "Los emprendedores resuelven problemas por los que la gente está dispuesta a pagar. Vas a encontrar un problema real, probar si la gente quiere tu solución antes de gastar dinero y usar la IA para escribir un plan y un presupuesto de una página.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Esto es educación general; para preguntas legales, de impuestos y de NIL (nombre, imagen y semejanza), revisa las fuentes oficiales y habla con tu oficina de cumplimiento, con tu padre, madre o tutor y con un profesional."
  ],
  finalTask: "Escribe un plan de negocio de una página para una idea de tu deporte: el problema, tu solución, tu cliente, lo que te dijeron cinco personas reales, cómo vas a llegar a los clientes, un presupuesto inicial hecho en una hoja de cálculo y una lista de reglas (NIL, búsqueda de marca, registros e impuestos) con las personas a quienes consultaste.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas y entrenadores de secundaria, universidad y de los primeros años de carrera que tienen una idea de negocio, o quieren tenerla: un negocio de entrenamiento, una idea de app, un producto para un problema que ven en el deporte o un servicio para equipos locales.",
    startingPoint: "Conocen bien su deporte y ven sus problemas de cerca, y usan un teléfono y quizá una hoja de cálculo. Pocos han entrevistado a clientes, probado una idea gastando poco, escrito un plan de negocio o un presupuesto, o revisado las reglas de NIL, marcas registradas, licencias e impuestos.",
    gap: "Muchas veces los deportistas crean o compran antes de comprobar que alguien quiere la idea, o lanzan sin revisar las reglas, y pierden dinero o su elegibilidad. Probar con clientes reales, un plan de una página, un presupuesto real y una lista de reglas les da un comienzo seguro y de bajo costo.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de octavo grado",
      "Un teléfono o una computadora con un asistente de IA gratuito y Google Sheets",
      "Unos 60 minutos de lecciones más tiempo para hablar con cinco personas",
      "Las reglas de NIL, marcas registradas, licencias de negocio e impuestos; consulta con la oficina de cumplimiento, la asociación deportiva del estado o el gobierno local",
      "No es consejo financiero ni de impuestos; los deportistas menores de 18 años necesitan a su madre, padre o tutor para cuentas, contratos y cualquier préstamo"
    ],
    prerequisites: "Ninguno. \"Plataformas de comercio electrónico con IA para atletas\" es un buen siguiente paso para vender por internet."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ante los problemas que has visto en tu deporte", action: "hacer una lista de problemas y calificarlos según cuántas personas los tienen, cuánto les duelen y si la gente ya paga por resolverlos, y luego elegir uno", standard: "con el problema elegido visto por ti en la vida real" },
    { id: "O2", condition: "Con cinco personas que tienen el problema", action: "entrevistarlas sobre lo que han hecho antes y anotar lo que dicen", standard: "sin preguntas de \"¿Comprarías mi idea?\" y anotando los patrones entre las cinco" },
    { id: "O3", condition: "Usando lo que te dijeron los clientes", action: "escribir una solución en una oración y elegir la prueba más sencilla que puedas hacer en dos semanas", standard: "con un número que mostrará si la prueba funcionó" },
    { id: "O4", condition: "Usando tus notas y un asistente de IA", action: "escribir un plan de negocio de una página con el problema, la solución, el cliente, lo que dijeron los clientes, cómo llegarás a ellos, el dinero y los siguientes pasos", standard: "con los números inventados quitados o marcados como suposiciones y con comentarios de un mentor" },
    { id: "O5", condition: "Usando Google Sheets", action: "armar un presupuesto inicial con costos, ingresos esperados, totales y ganancia", standard: "con precios reales de proveedores, fórmulas revisadas y una revisión con un adulto de confianza antes de gastar" },
    { id: "O6", condition: "Antes de lanzar", action: "escribir una lista de reglas que cubra NIL, nombres y logotipos, licencia de negocio, registros e impuestos", standard: "con una búsqueda en la USPTO hecha y nombrando a la persona con la que revisaste cada regla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encontrar y probar una idea",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar un problema que valga la pena resolver",
          minutes: 5,
          goal: "Hacer una lista de problemas que has visto en el deporte y elegir uno que valga la pena resolver.",
          text: [
            "Las buenas ideas de negocio empiezan con un problema, no con un producto. Los atletas ven muchos problemas de cerca: padres que no encuentran buenas clases para principiantes, equipos que pierden material, jugadores que no pueden pagar un buen entrenamiento, entrenadores ahogados en horarios.",
            "Escribe los problemas de los que se quejan tú, tus compañeros, los padres o los entrenadores. Para cada uno, pregunta: ¿Cuántas personas tienen este problema? ¿Qué tanto les molesta? ¿Ya están pagando por una mala solución?",
            "Usa un asistente de IA para generar ideas: \"Soy jugadora de voleibol de secundaria. Haz una lista de 15 problemas que tienen jugadores, padres y entrenadores y que un pequeño negocio podría resolver.\" Luego marca los que de verdad has visto."
          ],
          steps: ["Escribe problemas que has visto en tu deporte.", "Pide a la IA más ideas.", "Marca los que has visto en la vida real.", "Califica cada uno: cuántas personas, qué tanto molesta, si ya pagan.", "Elige uno."],
          words: [["Emprendedor", "alguien que empieza un negocio para resolver un problema."], ["Punto de dolor", "un problema que molesta tanto a la gente que quiere que se lo resuelvan."]],
          slides: [
            { title: "Empieza con un problema", bullets: ["No con un producto", "Los atletas ven los problemas de cerca"] },
            { title: "Califica cada problema", bullets: ["¿Cuántas personas lo tienen?", "¿Qué tanto les molesta?", "¿Ya pagan por una mala solución?"] },
            { title: "La IA da ideas, tú eliges", bullets: ["Pide 15 problemas", "Marca los que has visto"] }
          ],
          tryIt: "Haz una lista de cinco problemas de tu deporte, agrega más con la IA, califícalos y elige en el que vas a trabajar.",
          youCanNow: "encontrar y elegir un problema real que valga la pena resolver.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una señal de un problema que vale la pena resolver?", options: ["Solo lo tienes tú", "La gente ya paga por una mala solución", "Es divertido hablar de él", "Nadie se queja de él"], answer: 1, why: "Si la gente ya paga por una mala solución, el problema le importa." },
            { objective: "O1", q: "La IA te da una lista de 15 problemas de tu deporte. ¿Qué haces?", options: ["Elegir el más emocionante", "Crear soluciones para los 15", "Marcar los que de verdad has visto", "Pedirle a la IA que elija por ti"], answer: 2, why: "Quédate con los problemas que has visto en la vida real." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hablar con clientes reales",
          minutes: 6,
          goal: "Entrevistar a cinco posibles clientes sobre el problema antes de crear nada.",
          text: [
            "Antes de gastar dinero, habla con las personas que tienen el problema. Tu meta es aprender, no vender. Pregunta por lo que hicieron en el pasado, no por lo que quizá harían algún día.",
            "Buenas preguntas: \"Cuéntame de la última vez que te pasó esto.\" \"¿Qué hiciste al respecto?\" \"¿Cuánto te costó?\" \"¿Qué te molesta de las opciones que tienes?\" Evita \"¿Comprarías mi idea?\", porque la gente dice que sí para ser amable.",
            "Habla con cinco personas. Anota lo que dicen con sus propias palabras. Si a la mayoría no le importa, es una gran noticia: ahorraste tiempo y dinero. Elige otro problema o ajusta tu idea."
          ],
          steps: ["Haz una lista de cinco personas que tienen el problema.", "Pregunta por la última vez que les pasó.", "Pregunta qué hicieron y cuánto les costó.", "Anota sus palabras.", "Busca patrones entre las cinco."],
          words: [["Entrevista con clientes", "una conversación corta para conocer el problema de alguien."], ["Validar", "comprobar que un problema y una solución son reales antes de crear algo."]],
          slides: [
            { title: "Aprende, no vendas", bullets: ["Habla con quienes tienen el problema", "Antes de gastar dinero"] },
            { title: "Buenas preguntas", bullets: ["\"Cuéntame de la última vez que...\"", "\"¿Qué hiciste? ¿Cuánto te costó?\"", "No: \"¿Comprarías mi idea?\""] },
            { title: "Después de cinco conversaciones", bullets: ["Anota sus palabras", "Busca patrones", "¿No hay interés? Ahorraste dinero"] }
          ],
          tryIt: "Pide a un asistente de IA que te ayude a escribir cinco preguntas de entrevista sobre lo que la gente hizo en el pasado. Entrevista al menos a dos personas esta semana y anota lo que dijeron.",
          youCanNow: "entrevistar a posibles clientes para comprobar si un problema es real.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es tu meta en una entrevista con un cliente?", options: ["Aprender", "Vender", "Conseguir una promesa de compra", "Lucir tu idea"], answer: 0, why: "Habla para aprender sobre el problema, no para vender." },
            { objective: "O2", q: "Una madre te dice: \"Algún día lo compraría sin dudarlo\". ¿Qué le preguntas después?", options: ["\"Genial, ¿te anoto?\"", "\"¿Cuánto pagarías?\"", "\"¿Tus amigas también lo comprarían?\"", "\"Cuéntame la última vez que te pasó este problema.\""], answer: 3, why: "Pregunta por lo que la gente ha hecho antes, porque dice que sí por amabilidad." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Dar forma a tu solución y tu oferta",
          minutes: 5,
          goal: "Escribir una solución en una oración y la versión más sencilla que podrías probar.",
          text: [
            "Ahora describe tu solución en una oración: \"Clases de baloncesto los sábados para principiantes de 6 a 9 años, dadas por jugadores del equipo principal de la secundaria, a un precio que los padres pueden pagar.\"",
            "Empieza con la prueba más sencilla que puedas hacer, a veces llamada producto mínimo viable: una clase en lugar de una academia completa, un formulario de inscripción en lugar de una app, diez camisetas en lugar de 500.",
            "La IA te puede ayudar a pensar en la versión más sencilla: \"Esta es mi idea y lo que me dijeron cinco clientes. ¿Cuál es la forma más pequeña y barata de probarla en dos semanas?\" Luego elige lo que de verdad puedes hacer."
          ],
          steps: ["Escribe tu solución en una oración.", "Pide a la IA la prueba más pequeña que podrías hacer.", "Elige una prueba que puedas hacer en dos semanas.", "Decide cómo sabrás que funcionó (por ejemplo, 8 inscripciones)."],
          words: [["Producto mínimo viable (MVP)", "la versión más sencilla de tu idea que te deja probarla con clientes reales."], ["Oferta", "exactamente lo que reciben los clientes y lo que cuesta."]],
          slides: [
            { title: "La solución en una oración", bullets: ["Para quién es", "Qué reciben", "Por qué es mejor"] },
            { title: "Primero prueba en pequeño", bullets: ["Una clase, no una academia", "Un formulario, no una app", "10 camisetas, no 500"] },
            { title: "Define el éxito", bullets: ["La prueba más pequeña de dos semanas", "Un número que diga que funcionó"] }
          ],
          tryIt: "Escribe tu solución en una oración. Usa la IA para encontrar la prueba más pequeña de dos semanas y escribe el número que diría que funcionó.",
          youCanNow: "describir tu solución y diseñar una prueba pequeña y barata.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es un producto mínimo viable?", options: ["Tu versión más cara", "Una app completa", "La versión más sencilla que te deja probar con clientes reales", "Un plan de negocio largo"], answer: 2, why: "Un MVP es la prueba más pequeña que puedes hacer con clientes reales." },
            { objective: "O3", q: "Quieres abrir una academia de entrenamiento. ¿Cuál es la mejor primera prueba?", options: ["Alquilar un edificio por un año", "Hacer una sesión con un formulario de inscripción", "Crear una app a medida", "Imprimir 500 camisetas"], answer: 1, why: "Empieza con la prueba más sencilla que puedas hacer en dos semanas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar y probar una idea",
        questions: [
          { objective: "O1", q: "Las buenas ideas de negocio empiezan con:", options: ["Un logo bonito", "Un préstamo grande", "Un problema que tiene la gente", "Una app cara"], answer: 2, why: "La gente paga por resolver problemas reales." },
          { objective: "O2", q: "¿Qué pregunta de entrevista es la mejor?", options: ["\"Cuéntame de la última vez que te pasó esto.\"", "\"¿Comprarías mi idea?\"", "\"¿Verdad que mi idea es genial?\"", "\"¿Cuánto pagarías algún día?\""], answer: 0, why: "Lo que la gente hizo es más honesto que lo que predice." },
          { objective: "O2", q: "A la mayoría de las personas que entrevistas no les importa el problema. Esto significa:", options: ["Fracasaste", "Créalo de todos modos", "Entrevístalos hasta que estén de acuerdo", "Ahorraste tiempo y dinero; ajusta o elige otro problema"], answer: 3, why: "Aprender temprano es una victoria." },
          { objective: "O3", q: "Un MVP es:", options: ["El jugador más valioso", "La versión más sencilla que te deja probar con clientes reales", "Un gran lanzamiento", "Una marca registrada"], answer: 1, why: "En los negocios, MVP significa producto mínimo viable." },
          { objective: "O3", q: "¿Cuál es la mejor primera prueba para una idea de campamento?", options: ["Alquilar un estadio por un mes", "Una clase un sábado con un formulario de inscripción", "Crear una app", "Imprimir 500 camisetas"], answer: 1, why: "Las pruebas pequeñas son baratas y rápidas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Plan, presupuesto y reglas",
      lessons: [
        {
          objectives: ["O4"],
          title: "Un plan de negocio de una página con IA",
          minutes: 5,
          goal: "Escribir un plan de negocio de una página con ayuda de la IA.",
          text: [
            "Un plan de una página te mantiene enfocado. Secciones: Problema, Solución, Cliente, Lo que me dijeron los clientes, Cómo voy a llegar a ellos, Dinero (costos y precio), Próximos pasos.",
            "Dale a un asistente de IA tus notas y los resultados de tus entrevistas y pídele: \"Convierte estas notas en un plan de negocio de una página con estas secciones. Usa palabras sencillas. Marca todo lo que sea una suposición.\"",
            "Léelo con cuidado. La IA puede hacer que tu idea suene más grande de lo que es o inventar números. Quédate solo con lo que es cierto o está claramente marcado como suposición, y compártelo con un mentor, entrenador o maestro para recibir comentarios."
          ],
          steps: ["Reúne tu problema, tu solución y tus notas de entrevistas.", "Pide a la IA un plan de una página con secciones fijas.", "Quita los números inventados o márcalos como suposiciones.", "Compártelo con un mentor para recibir comentarios."],
          words: [["Plan de negocio", "un resumen escrito de cómo va a funcionar un negocio y cómo va a ganar dinero."], ["Mentor", "una persona con experiencia que te da consejos."]],
          slides: [
            { title: "Secciones del plan de una página", bullets: ["Problema, Solución, Cliente", "Lo que me dijeron los clientes", "Cómo llegaré a ellos, Dinero, Próximos pasos"] },
            { title: "La IA hace el borrador", bullets: ["Con tus notas y entrevistas", "\"Marca todo lo que sea una suposición\""] },
            { title: "Tú lo revisas", bullets: ["Nada de números inventados", "Compártelo con un mentor"] }
          ],
          tryIt: "Usa la IA para convertir tus notas en un plan de una página. Marca cada suposición y luego pide a un mentor, entrenador o maestro un comentario.",
          youCanNow: "escribir un plan de negocio de una página con IA y revisar que sea exacto.",
          quickCheck: [
            { objective: "O4", q: "¿Qué sección va en tu plan de una página?", options: ["Lo que me dijeron los clientes", "Tus atletas favoritos", "La historia completa de tu vida", "Tu horario de entrenamiento"], answer: 0, why: "El plan incluye lo que mostraron tus cinco entrevistas." },
            { objective: "O4", q: "El plan de la IA dice 500 clientes en el primer mes, pero no tienes pruebas. ¿Qué haces?", options: ["Dejarlo para impresionar a la gente", "Duplicarlo", "Ponerlo al principio", "Quitarlo o marcarlo como suposición"], answer: 3, why: "Deja solo lo que es verdad o está claramente marcado como suposición." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Armar un presupuesto inicial",
          minutes: 5,
          goal: "Armar un presupuesto inicial sencillo en una hoja de cálculo.",
          text: [
            "Un presupuesto inicial muestra lo que necesitas gastar antes y durante tu primera prueba, y lo que esperas ganar. Al principio, mantenlo pequeño.",
            "En Google Sheets, haz la lista de costos (equipo, instalación, tarifas del sitio web o la plataforma, impresión, seguro si hace falta, publicidad) y de ingresos esperados (precio por clientes esperados). Busca precios reales con los proveedores, no suposiciones.",
            "Pide a la IA que arme las fórmulas de totales y ganancia, y revísalas tú. Nunca pidas dinero prestado ni uses una tarjeta de crédito para una prueba de negocio sin hablar antes con tu padre, madre, tutor o un asesor de confianza. Esto no es asesoría financiera."
          ],
          steps: ["Haz la lista de todos los costos iniciales.", "Busca precios reales.", "Calcula los ingresos: precio por clientes.", "Suma totales y ganancia con fórmulas.", "Revísalo con un adulto de confianza antes de gastar."],
          words: [["Presupuesto inicial", "un plan del dinero que se necesita para empezar y lo que esperas ganar."], ["Gasto", "el dinero que gastas para hacer funcionar el negocio."]],
          slides: [
            { title: "Costos", bullets: ["Equipo e instalación", "Tarifas de la plataforma o el sitio web", "Impresión, seguro, publicidad"] },
            { title: "Ingresos", bullets: ["Precio x clientes esperados", "Usa precios reales, no suposiciones"] },
            { title: "Ten cuidado", bullets: ["La IA arma fórmulas; tú revisas", "No pidas prestado sin un adulto de confianza"] }
          ],
          tryIt: "Arma en Google Sheets un presupuesto inicial para tu prueba de dos semanas con precios reales. Pide a la IA que escriba las fórmulas del total y la ganancia y revísalas.",
          youCanNow: "armar un presupuesto inicial sencillo con números reales.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo calculas los ingresos esperados?", options: ["El precio por el número de clientes esperados", "Los costos menos el precio", "Los seguidores por los me gusta", "Adivinando un número redondo"], answer: 0, why: "Los ingresos esperados son el precio por el número de clientes esperados." },
            { objective: "O5", q: "Tu presupuesto muestra que necesitas comprar equipo. ¿Qué haces antes de gastar?", options: ["Pagarlo con tarjeta de crédito", "Pedirle dinero prestado a un amigo", "Revisar el presupuesto con tu madre, padre, tutor o un asesor de confianza", "Comprar ya la opción más barata por internet"], answer: 2, why: "Habla con un adulto de confianza antes de pedir prestado o gastar en una prueba." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reglas que todo atleta fundador revisa",
          minutes: 6,
          goal: "Escribir una lista de reglas para tu negocio.",
          text: [
            "NIL: si tu negocio usa tu nombre, tu imagen o tu semejanza, puede contar como actividad de NIL. Los atletas universitarios quizá deban reportarlo; al momento de escribir esto, los atletas de la División I reportan los acuerdos con terceros que corresponden en NIL Go. Las reglas de la secundaria cambian según el estado. Pregunta a tu oficina de cumplimiento o a la asociación atlética de tu estado.",
            "Nombres y logos: no uses logos de la escuela, el equipo o la liga sin permiso. Antes de elegir un nombre de negocio, busca en los registros de marcas de la USPTO (la oficina de patentes y marcas de EE. UU.) y en los registros de nombres de negocios de tu estado. Tu ciudad o tu estado pueden exigir una licencia de negocio; revisa el sitio web de tu gobierno local.",
            "Registros e impuestos: guarda cada recibo y cada pago en una hoja de cálculo. El IRS (la agencia de impuestos de EE. UU.) dice que debes presentar una declaración si tus ganancias netas como trabajador por cuenta propia son de $400 o más. Habla con un profesional de impuestos. Si eres menor de 18 años, tu padre, madre o tutor tendrá que ayudarte con las cuentas y los contratos."
          ],
          steps: ["Pregunta a cumplimiento o a la asociación de tu estado sobre las reglas de NIL.", "Asegúrate de usar solo tu propio logo y tu propio nombre.", "Busca en la USPTO y en los registros de nombres de negocios de tu estado.", "Revisa las reglas locales de licencias de negocio.", "Arma una hoja de recibos y pagos.", "Habla con un profesional de impuestos."],
          words: [["Licencia de negocio", "permiso de una ciudad, condado o estado para tener un negocio allí."], ["Trabajo por cuenta propia", "ganar dinero con tu propio negocio en lugar de trabajar para un jefe."]],
          slides: [
            { title: "NIL", bullets: ["Un negocio con tu nombre puede ser NIL", "Universidad: quizá debas reportarlo", "Secundaria: revisa las reglas de tu estado"] },
            { title: "Nombres, logos, licencias", bullets: ["Nada de logos de escuela o liga sin permiso", "Busca en la USPTO y en los registros del estado", "Revisa las reglas locales de licencias"] },
            { title: "Registros e impuestos", bullets: ["Guarda cada recibo", "IRS: declara si ganas $400 o más netos por cuenta propia", "Habla con un profesional de impuestos"] }
          ],
          sources: [
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "USPTO: Lo básico de las marcas registradas (en inglés)", url: "https://www.uspto.gov/trademarks/basics" },
            { name: "IRS: centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Tarea final: termina tu plan de una página con el presupuesto y luego escribe tu lista de reglas con a quién le preguntaste sobre NIL, el resultado de tu búsqueda de marca, tu revisión de licencias locales y tu hoja de registros.",
          youCanNow: "revisar las reglas clave antes de lanzar un negocio como atleta.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde revisas si tu ciudad pide una licencia de negocio?", options: ["En las redes sociales", "En el sitio web de tu gobierno local", "En un chatbot de IA", "En el chat de grupo de tu entrenador"], answer: 1, why: "Tu ciudad o tu estado pueden pedir una licencia; revisa el sitio web de tu gobierno local." },
            { objective: "O6", q: "Elegiste un nombre para tu negocio. ¿Qué revisas antes de usarlo?", options: ["Si rima", "Si les gusta a tus amigos", "Si tiene mascota", "Los registros de marcas de la USPTO y los registros de nombres de negocios de tu estado"], answer: 3, why: "Busca en los registros de marcas y de nombres de negocios del estado antes de elegir un nombre." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Plan, presupuesto y reglas",
        questions: [
          { objective: "O4", q: "La IA agrega \"$1 millón el primer año\" a tu plan sin ninguna base. Tú:", options: ["Lo dejas", "Lo subes a $2 millones", "Se lo muestras a inversionistas", "Lo quitas o lo marcas como suposición"], answer: 3, why: "Quédate solo con números ciertos o suposiciones bien marcadas." },
          { objective: "O5", q: "Los ingresos esperados son:", options: ["Precio por clientes esperados", "Costos por dos", "Seguidores por me gusta", "Una suposición"], answer: 0, why: "Ese es el cálculo básico de ingresos." },
          { objective: "O5", q: "Antes de pedir dinero prestado para una prueba de negocio, debes:", options: ["Usar una tarjeta de crédito rápido", "Preguntarle a un desconocido en internet", "Hablar con tu padre, madre, tutor o un asesor de confianza", "Saltarte el presupuesto"], answer: 2, why: "Las deudas son riesgosas; pide consejo primero." },
          { objective: "O6", q: "¿Por qué buscar en los registros de la USPTO?", options: ["Para conseguir clientes", "Para encontrar un entrenador", "Para pagar impuestos", "Para no usar un nombre que es de otra persona"], answer: 3, why: "Las búsquedas de marca evitan conflictos." },
          { objective: "O6", q: "El límite del IRS de ganancias netas por cuenta propia para declarar es:", options: ["$40,000", "$400", "$4", "No hay ninguno"], answer: 1, why: "Está en la página del centro de impuestos para trabajadores por cuenta propia del IRS." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Emprendimiento con IA para atletas",
    questions: [
      { objective: "O1", q: "Un emprendedor:", options: ["Solo practica deporte", "Solo invierte dinero", "Empieza un negocio para resolver un problema", "Trabaja para un equipo"], answer: 2, why: "Resolver problemas es lo central." },
      { objective: "O1", q: "Un punto de dolor es:", options: ["Un problema que molesta tanto a la gente que quiere que se lo resuelvan", "Una lesión", "Un marcador", "Una penalización"], answer: 0, why: "Los puntos de dolor son oportunidades de negocio." },
      { objective: "O1", q: "Al calificar un problema, pregunta:", options: ["Cuántas personas lo tienen y qué tanto les molesta", "De qué color es", "Quién es famoso", "Cuántos me gusta recibe"], answer: 0, why: "El tamaño y la molestia muestran si vale la pena resolverlo." },
      { objective: "O1", q: "La IA te da 15 problemas. Tú:", options: ["Eliges el primero", "Usas los 15", "Marcas los que has visto en la vida real", "Los ignoras"], answer: 2, why: "La experiencia real es mejor que las suposiciones." },
      { objective: "O2", q: "Las entrevistas con clientes sirven para:", options: ["Vender con insistencia", "Aprender", "Discutir", "Conseguir seguidores"], answer: 1, why: "Aprende antes de crear." },
      { objective: "O2", q: "¿Por qué evitar \"¿Comprarías mi idea?\"?", options: ["Es grosero", "Es ilegal", "Es muy corto", "La gente dice que sí para ser amable"], answer: 3, why: "Lo que la gente hizo es más honesto." },
      { objective: "O2", q: "¿A cuántas personas debes entrevistar como mínimo?", options: ["A una", "A ninguna", "A cinco", "A 500"], answer: 2, why: "Cinco ya muestran los primeros patrones." },
      { objective: "O2", q: "Validar significa:", options: ["Sellar un boleto de estacionamiento", "Ganar un partido", "Firmar un contrato", "Comprobar que un problema y una solución son reales"], answer: 3, why: "Validar ahorra tiempo y dinero." },
      { objective: "O3", q: "¿Cuál es un MVP para una idea de mercancía?", options: ["10 camisetas vendidas a personas que las pidieron", "500 camisetas en una bodega", "Una línea de ropa completa", "El alquiler de un local"], answer: 0, why: "Empieza en pequeño y prueba." },
      { objective: "O3", q: "Una prueba necesita:", options: ["Ninguna meta", "Un número que diga que funcionó", "Un presupuesto enorme", "Una celebridad"], answer: 1, why: "Una meta clara te dice si funcionó." },
      { objective: "O4", q: "Un plan de una página incluye:", options: ["Solo un logo", "Tus estadísticas", "Problema, solución, cliente, dinero, próximos pasos", "Tu contraseña"], answer: 2, why: "Esas secciones explican cómo funciona." },
      { objective: "O4", q: "Pídele a la IA que marque:", options: ["Todo lo que sea una suposición", "Nada", "Solo las buenas noticias", "A tus rivales"], answer: 0, why: "Marcar las suposiciones te mantiene honesto." },
      { objective: "O4", q: "Un mentor es:", options: ["Un competidor", "Un cliente", "Un árbitro", "Una persona con experiencia que da consejos"], answer: 3, why: "Los mentores te ayudan a evitar errores." },
      { objective: "O5", q: "Los precios de tu presupuesto deben salir de:", options: ["Suposiciones", "Precios reales de proveedores", "Recuerdos viejos", "Solo de la IA"], answer: 1, why: "Los precios reales hacen presupuestos reales." },
      { objective: "O5", q: "Un gasto es:", options: ["Dinero que ganas", "Dinero que gastas para hacer funcionar el negocio", "Un trofeo", "Un seguidor"], answer: 1, why: "Los gastos son costos." },
      { objective: "O6", q: "Un negocio que usa tu nombre puede contar como:", options: ["Pago por jugar", "Una beca", "Nada", "Actividad de NIL"], answer: 3, why: "Usa tu nombre, tu imagen o tu semejanza." },
      { objective: "O6", q: "¿Puedes usar libremente el logo de tu escuela en tus productos?", options: ["No, necesitas permiso", "Sí, siempre", "Solo los fines de semana", "Solo en línea"], answer: 0, why: "Las escuelas protegen sus logos." },
      { objective: "O6", q: "¿Dónde revisas si necesitas una licencia de negocio?", options: ["En un blog deportivo", "Con un rival", "En el sitio web de tu gobierno local", "En ningún lado"], answer: 2, why: "Las licencias son reglas locales." },
      { objective: "O6", q: "¿Por qué guardar cada recibo?", options: ["Como decoración", "Para tirarlos después", "No hace falta", "Para los registros y los impuestos"], answer: 3, why: "Los registros ayudan con los impuestos y las decisiones." },
      { objective: "O6", q: "Si tienes menos de 18 años y empiezas un negocio:", options: ["Puedes firmar cualquier cosa solo", "Tu padre, madre o tutor te ayuda con las cuentas y los contratos", "Ocúltalo", "Usa una edad falsa"], answer: 1, why: "Los menores normalmente necesitan la ayuda de un adulto." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      5,
      8,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Problema y cliente",
        objective: "O1",
        notYet: "El problema es vago o no es uno que el participante haya visto.",
        meets: "Un problema real, calificado por tamaño y por cuánto duele, con un cliente claro.",
        exceeds: "Muestra cuánto pagan ya los clientes por una mala solución."
      },
      {
        name: "Entrevistas con clientes",
        objective: "O2",
        notYet: "Hay menos de cinco personas, o las notas tratan de si comprarían.",
        meets: "Cinco entrevistas sobre lo que han hecho antes, escritas con las palabras de los clientes, con los patrones anotados.",
        exceeds: "El plan cambió por lo que dijeron los clientes."
      },
      {
        name: "Plan de una página",
        objective: "O4",
        notYet: "Faltan secciones, o quedaron números inventados sin marcar.",
        meets: "Las siete secciones en una página, las suposiciones marcadas y los comentarios de un mentor recibidos.",
        exceeds: "Incluye la prueba de dos semanas y el número que mostrará si funcionó."
      },
      {
        name: "Presupuesto inicial",
        objective: "O5",
        notYet: "Precios adivinados o fórmulas sin revisar.",
        meets: "Cada costo con un precio real, ingresos esperados, totales y ganancia, revisados y vistos con un adulto de confianza.",
        exceeds: "Muestra cuántos clientes hacen falta para cubrir los costos iniciales."
      },
      {
        name: "Lista de reglas",
        objective: "O6",
        notYet: "Faltan puntos de NIL, nombres, licencia o impuestos, o no se nombra a nadie.",
        meets: "NIL, nombres y logotipos, licencia, registros e impuestos anotados uno por uno con la persona con la que el participante los revisó.",
        exceeds: "Tiene adjuntos el resultado de una búsqueda en la USPTO y una hoja de recibos y pagos."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el plan de negocio y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que hacen su prueba de dos semanas en un plazo de 30 días y dicen si llegó a su número (encuesta de seguimiento)",
      "Participantes que empiezan un negocio, o deciden no hacerlo después de las entrevistas con clientes y así ahorran dinero",
      "Participantes que dicen haber revisado las reglas de NIL, marcas registradas, licencias e impuestos antes de lanzar"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Una cuenta gratuita de Google para usar Google Sheets",
      "Un cuaderno o notas en el teléfono para las entrevistas con clientes",
      "Unos 60 minutos de lecciones más tiempo para cinco entrevistas cortas"
    ],
    facilitatorNotes: [
      "Practiquen primero las entrevistas con clientes en parejas para que los participantes pregunten por lo que la gente ha hecho antes, no \"¿Comprarías mi idea?\".",
      "Consigue mentores, como dueños de negocios locales o un centro de apoyo a pequeñas empresas, para que comenten los planes.",
      "No dejes que los participantes pidan dinero prestado ni firmen contratos como parte del curso; incluye a los padres o tutores de cualquier menor de 18 años.",
      "Invita a la oficina de cumplimiento para las preguntas de NIL y envía las preguntas de impuestos a un profesional de impuestos.",
      "Celebren las ideas que los clientes rechazaron: descubrirlo temprano es un buen resultado."
    ]
  }
};

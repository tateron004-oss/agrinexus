"use strict";

// Koach Learn course (Spanish translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// US agency names (BSIS, FBI, DOJ, FDACS, DPS), Live Scan, BreEZe and the course names of the California training are kept as written.

const BSIS_GUARD = { name: "BSIS de California: Guardias de seguridad (solicitudes, programa de capacitación, manual de Power to Arrest)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "BSIS de California: Hoja informativa sobre el registro de guardias de seguridad", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "BSIS de California: Programa de capacitación para guardias de seguridad (cursos y horas)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "BSIS de California: Manual de capacitación Power to Arrest (facultad de arresto)", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "Departamento de Asuntos del Consumidor de California: Verificar una licencia", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "Departamento de Estado de Nueva York: Licencias de guardias de seguridad", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Departamento de Seguridad Pública de Texas: Programa de Seguridad Privada", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Departamento de Agricultura y Servicios al Consumidor de Florida: División de Licencias (oficial de seguridad Clase D)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Guardias de seguridad y vigilantes de casinos (cómo llegar a serlo)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-es",
  lang: "es",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Preparación para oficial de seguridad (guard card)",
  skills: "Encontrar las reglas de la guard card de tu estado, Patrullar y controlar el acceso según las órdenes de puesto, Observar e informar sin salirte de tu autoridad, Calmar conflictos y responder a emergencias, Escribir un informe de incidente claro, Planear tu licencia y tu búsqueda de empleo",
  outcome: "encontrar los requisitos de la guard card de tu estado y escribir los pasos para obtenerla, seguir las órdenes de puesto en la patrulla y en una entrada, elegir la acción de observar e informar que no se sale de la autoridad de un guardia, escribir un informe de incidente claro y basado en hechos, y hacer un plan con fechas para obtener la licencia y conseguir empleo.",
  about: [
    "Los oficiales de seguridad protegen a personas y bienes en oficinas, tiendas, hospitales, escuelas, almacenes, eventos y edificios de apartamentos. Muchos empleos no piden título universitario, y los empleadores contratan todo el año. Este curso es para quienes buscan empleo, personas que regresan a casa después de estar en prisión, veteranos y jóvenes adultos que quieren empezar en este trabajo.",
    "Vas a aprender lo que un oficial de seguridad hace y lo que no hace, cómo funciona la guard card (la licencia estatal de guardia de seguridad), cómo patrullar y controlar una entrada según las órdenes de puesto, cómo mantener la calma y la seguridad cuando hay un conflicto o una emergencia, y cómo escribir un informe de incidente en el que puedan confiar un supervisor, un abogado o un policía.",
    "Importante: este curso te prepara; no te da una licencia. En la mayoría de los estados, una agencia estatal da la licencia a los guardias de seguridad, y debes tener al menos 18 años, pasar una revisión de antecedentes y terminar la capacitación que exige el estado con una escuela o un empleador aprobado. Las reglas cambian de un estado a otro, así que buscarás la página oficial de tu propio estado. California es nuestro ejemplo porque revisamos sus reglas en la página oficial.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel o en una aplicación de documentos gratis. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un paquete de preparación para la guard card: los requisitos de tu estado escritos como pasos, con la página oficial; una lista de patrulla y de control de acceso para un puesto de práctica; un informe de incidente de práctica completo; una tarjeta de bolsillo con tus pasos de observar e informar y de emergencia; y un plan con fechas para terminar la capacitación, presentar la solicitud y conseguir empleo, con una línea honesta para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos de 18 años o más que buscan empleo como oficiales de seguridad sin armas: personas que buscan trabajo, personas que regresan a casa después de estar en prisión, veteranos y jóvenes adultos. Algunos tienen experiencia en policía militar, en correccionales o en prevención de pérdidas en tiendas; la mayoría es nueva en este trabajo.",
    startingPoint: "Saben leer un formulario corto, seguir instrucciones y usar un teléfono. Pocos saben cómo funciona la licencia de guardia en su estado, cuáles son los límites legales de un guardia o cómo escribir un informe basado en hechos. Algunos se imaginan el trabajo como trabajo de policía.",
    gap: "La seguridad es un sector que contrata a mucha gente y al que se entra rápido, pero hay personas que pierden el empleo o salen heridas cuando se salen de su autoridad, usan una fuerza que no deben o escriben informes vagos. Los estudiantes necesitan una idea real de los pasos de la licencia en su estado, los hábitos de observar e informar que buscan los empleadores y la habilidad de escribir informes claros, para obtener la licencia, ser contratados y mantener el empleo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada término",
      "La licencia depende del estado: el curso enseña el patrón general y cómo encontrar la página oficial, con California como ejemplo revisado",
      "Solo trabajo sin armas: las armas de fuego, los bastones, el gas lacrimógeno y otras armas necesitan permisos aparte y capacitación en persona",
      "Las habilidades prácticas como primeros auxilios, RCP y tácticas defensivas se aprenden en persona con un instructor calificado",
      "Revisión de antecedentes: a quienes tienen antecedentes se les dice que respondan con honestidad y revisen las reglas de su estado o un programa de asistencia legal para la reinserción",
      "Dispositivos: un teléfono o una computadora de la biblioteca para las páginas del estado; papel para las listas y el informe"
    ],
    prerequisites: "Ninguno. \"Excelencia en el servicio al cliente\" y \"Currículum, LinkedIn y entrevistas\" son buenos cursos complementarios."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando la página oficial de licencias de tu estado", action: "enumerar los pasos para obtener una guard card en tu estado", standard: "nombrando la agencia, la edad mínima, la revisión de antecedentes y la capacitación exigida antes y después de obtener la licencia" },
    { id: "O2", condition: "Con un conjunto de órdenes de puesto", action: "hacer una patrulla y una revisión de control de acceso", standard: "cubriendo cada punto de las órdenes de puesto y anotando con la hora lo que viste e hiciste" },
    { id: "O3", condition: "Ante una situación de conflicto, robo o emergencia", action: "elegir la acción de observar e informar que no se sale de la autoridad de un guardia", standard: "acertando al menos 4 de 5 situaciones, y haciendo primero las llamadas de emergencia" },
    { id: "O4", condition: "Después de ver un incidente o leer sobre él", action: "escribir un informe de incidente basado en hechos", standard: "respondiendo quién, qué, cuándo, dónde y cómo, con hechos y no opiniones, en orden de tiempo" },
    { id: "O5", condition: "Usando las reglas de tu estado y las ofertas de empleo locales", action: "escribir un plan con fechas para obtener la licencia y conseguir empleo", standard: "con fechas para la capacitación, las huellas, la solicitud y las solicitudes de empleo, y una línea honesta para el currículum" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, la guard card y el puesto",
      lessons: [
        {
          title: "Lo que hace un oficial de seguridad, y lo que no hace",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explicar las tareas principales de un oficial de seguridad y los límites de la autoridad de un guardia.",
          text: [
            "Un oficial de seguridad protege a personas y bienes. El trabajo diario es dejarse ver, vigilar, controlar quién entra, patrullar, ayudar a la gente, responder a las alarmas y anotar lo que pasa. Estar visible y atento evita muchos problemas antes de que empiecen.",
            "Un oficial de seguridad no es un policía. En la mayoría de los estados, un guardia tiene la misma facultad de arresto que cualquier persona particular, y no más. La mayoría de los empleadores pide a sus oficiales \"observar e informar\": mirar con atención, llamar a la policía o a un supervisor y anotarlo, en lugar de perseguir o agarrar a las personas.",
            "Las reglas de tu empleador (las órdenes de puesto) pueden ser más estrictas que la ley. Si las órdenes de puesto dicen \"no detener\", no detienes a nadie, aunque la ley lo permita. Ir más allá de tus órdenes puede hacer que te despidan, te demanden o te lastimen.",
            "El servicio al cliente es la mitad del trabajo. Das indicaciones, ayudas a visitantes perdidos y te mantienes amable con la gente enojada. Los oficiales tranquilos, puntuales y buenos para escribir informes son los que reciben ascensos."
          ],
          words: [["Oficial de seguridad", "persona a la que se le paga por proteger a personas y bienes; también se le llama guardia de seguridad."], ["Observar e informar", "mirar, pedir ayuda y anotarlo, sin intervenir físicamente."], ["Órdenes de puesto", "las instrucciones escritas para un sitio: qué revisar, cuándo y qué hacer."], ["Detener", "impedir que alguien se vaya. Los guardias solo deben hacerlo si la ley y sus órdenes de puesto lo permiten."], ["Disuadir", "evitar un problema antes de que empiece, por ejemplo dejándose ver."]],
          slides: [
            { title: "El trabajo diario", bullets: ["Déjate ver y mantente atento", "Controla quién entra y patrulla", "Ayuda a la gente y responde a las alarmas", "Anota lo que pasa"] },
            { title: "No eres policía", bullets: ["Por lo general, la misma facultad de arresto que cualquier persona", "La mayoría de los empleadores: observar e informar", "Llama a la policía; no persigas ni agarres"] },
            { title: "Primero, las órdenes de puesto", bullets: ["Pueden ser más estrictas que la ley", "Si dicen no detener, no detienes"] },
            { title: "Lo que te da ascensos", bullets: ["Servicio al cliente tranquilo y amable", "Puntualidad en cada turno", "Informes claros y honestos"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Dibuja dos columnas en papel: \"Un guardia sí hace\" y \"Un guardia no hace\". Pon cada una de estas acciones en una columna: patrullar el estacionamiento, revisar a la fuerza el bolso de una persona, dar indicaciones a un visitante, perseguir a un ladrón de tienda hasta la calle, llamar al 911 por una pelea, escribir un informe, esposar a alguien cuando las órdenes de puesto dicen observar e informar. Luego escribe una oración que explique por qué.",
          youCanNow: "explicar lo que hace un oficial de seguridad y los límites de la autoridad de un guardia.",
          quickCheck: [
            { objective: "O3", q: "¿Qué quiere decir la mayoría de los empleadores con \"observar e informar\"?", options: ["Perseguir a cualquiera que corra", "Mirar, pedir ayuda y anotarlo", "Revisar los bolsos de todos", "Arrestar a la gente por romper cualquier regla"], answer: 1, why: "Observar e informar significa que miras, llamas a la policía o a un supervisor y lo documentas, sin intervenir físicamente." },
            { objective: "O3", q: "La ley podría permitir un arresto por un particular, pero tus órdenes de puesto dicen \"no detener\". ¿Qué haces?", options: ["Detener de todos modos", "Preguntarle al sospechoso qué prefiere", "Seguir las órdenes de puesto: observar, llamar e informar", "Abandonar tu puesto"], answer: 2, why: "Las órdenes de puesto pueden ser más estrictas que la ley, y debes seguirlas." }
          ]
        },
        {
          title: "Cómo obtener tu guard card: así funcionan las licencias estatales",
          objectives: ["O1"],
          minutes: 6,
          goal: "Encontrar la agencia de licencias de tu estado y enumerar los pasos para obtener una guard card.",
          text: [
            "La mayoría de los estados da licencia a los guardias de seguridad por medio de una agencia estatal. El patrón común: tener al menos 18 años, pasar una revisión de antecedentes penales con huellas digitales y terminar la capacitación con una escuela o un empleador aprobado. Muchos estados también piden capacitación cada año. Los nombres cambian: \"guard card\", \"registro\" o \"licencia Clase D\".",
            "California es nuestro ejemplo revisado. La agencia es la Oficina de Servicios de Seguridad e Investigación (BSIS, por sus siglas en inglés). Debes tener al menos 18 años, pasar una revisión de antecedentes del Departamento de Justicia (DOJ) y del FBI con huellas digitales Live Scan, y terminar la capacitación Power to Arrest (facultad de arresto) antes de que se emita el registro. Después terminas 32 horas de capacitación en habilidades de oficial de seguridad dentro de los primeros 6 meses, y 8 horas de capacitación continua cada año. Presentas la solicitud en línea en BreEZe o por correo, y llevas tu tarjeta contigo durante el servicio.",
            "Otros estados tienen su propia agencia, por ejemplo el Departamento de Estado de Nueva York, el Programa de Seguridad Privada del Departamento de Seguridad Pública de Texas (DPS) y la División de Licencias del Departamento de Agricultura y Servicios al Consumidor de Florida (FDACS). Busca la página oficial de tu propio estado para ver las horas de capacitación, las tarifas y los formularios actuales. No confíes en un anuncio de capacitación para saber las reglas.",
            "Si tienes antecedentes penales: cada estado decide qué antecedentes cuentan. Responde todas las preguntas con honestidad, porque una respuesta falsa puede ser por sí sola motivo de rechazo. Un programa de reinserción o una oficina de asistencia legal puede ayudarte a entender las reglas de tu estado."
          ],
          steps: ["Busca la agencia de licencias de guardias de seguridad de tu estado y abre la página oficial .gov.", "Anota: edad mínima, revisión de antecedentes y pasos para las huellas digitales.", "Escribe la capacitación exigida antes de obtener la licencia y después (primeros meses, cada año).", "Encuentra la solicitud (en línea o en papel) y la página de tarifas; no adivines la tarifa.", "Anota cómo se renueva y cuánto dura la licencia."],
          words: [["Guard card", "el nombre común de la licencia o registro estatal de guardia de seguridad."], ["BSIS", "la Oficina de Servicios de Seguridad e Investigación de California, que registra a los guardias en California."], ["Live Scan", "toma electrónica de huellas digitales que se usa para revisar antecedentes en California y otros estados."], ["Revisión de antecedentes", "una búsqueda de antecedentes penales, a menudo por el estado y el FBI, antes de emitir una licencia."], ["Capacitación continua", "capacitación que debes seguir tomando después de obtener la licencia, a menudo cada año."]],
          slides: [
            { title: "El patrón común", bullets: ["Al menos 18 años", "Revisión de antecedentes con huellas digitales", "Capacitación aprobada; en muchos estados, también cada año"] },
            { title: "Ejemplo de California (BSIS)", bullets: ["Capacitación Power to Arrest antes de emitir la tarjeta", "32 horas de capacitación en habilidades dentro de 6 meses", "8 horas de capacitación continua cada año"] },
            { title: "Otros estados", bullets: ["NY: Departamento de Estado", "TX: Programa de Seguridad Privada del DPS", "FL: División de Licencias del FDACS (Clase D)", "Revisa la página oficial, no un anuncio"] },
            { title: "Si tienes antecedentes", bullets: ["Cada estado decide qué antecedentes cuentan", "Responde todas las preguntas con honestidad", "Pide ayuda a un programa de reinserción o de asistencia legal"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Abre la página oficial de licencias de tu estado (o la hoja informativa de BSIS de California si estás practicando). En papel, escribe en orden los pasos de la guard card de tu estado: agencia, edad, revisión de antecedentes, capacitación antes de la tarjeta, capacitación después, cómo presentar la solicitud y la dirección de la página.",
          youCanNow: "encontrar la agencia de licencias de tu estado y enumerar los pasos para obtener una guard card.",
          quickCheck: [
            { objective: "O1", q: "En California, ¿qué capacitación se debe terminar antes de que se emita el registro de guardia?", options: ["Capacitación en armas de fuego", "Capacitación Power to Arrest", "Capacitación con bastón", "Ninguna capacitación"], answer: 1, why: "BSIS dice que la capacitación Power to Arrest se debe terminar antes de que se emita el registro." },
            { objective: "O1", q: "Un anuncio de capacitación dice que tu estado solo pide una clase en línea de 2 horas. ¿Qué haces?", options: ["Creerle al anuncio", "Preguntarle a un amigo", "Pagar y esperar que sea cierto", "Revisar la página oficial de la agencia estatal"], answer: 3, why: "Las reglas cambian y son distintas en cada estado; solo la página oficial de la agencia es confiable." }
          ]
        },
        {
          title: "Órdenes de puesto, patrulla y control de acceso",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hacer una patrulla y una revisión en la entrada siguiendo las órdenes de puesto escritas.",
          text: [
            "Cada sitio tiene órdenes de puesto. Te dicen tu horario, dónde patrullar y con qué frecuencia, qué puertas revisar, quién puede entrar, qué hacer si suena una alarma y a quién llamar. Léelas al inicio de cada turno y pregúntale a tu supervisor por cualquier cosa que no esté clara.",
            "En la patrulla, cambia tus horarios para que nadie pueda predecir cuándo pasas. Usa tus sentidos: busca puertas abiertas, cerraduras rotas, fugas, humo, salidas de emergencia bloqueadas, luces apagadas y personas donde no deberían estar. Anota cada revisión en tu registro diario de actividades con la hora.",
            "El control de acceso significa que solo entra la gente correcta. Revisa gafetes o identificaciones como dicen las órdenes de puesto, registra la entrada y salida de los visitantes, entrega pases de visitante y nunca dejes que alguien entre detrás de ti por una puerta con llave sin mostrar identificación (tailgating). Sé amable y firme: \"Disculpe, necesito ver su gafete\".",
            "Usa tu radio o tu teléfono como lo indica el sitio: mensajes cortos y claros, con tu ubicación. Al cambiar de turno, dile al siguiente oficial qué está abierto y entrégale el registro."
          ],
          steps: ["Lee las órdenes de puesto y el registro del turno anterior.", "Revisa tu radio o teléfono y tus llaves.", "Patrulla cada punto de las órdenes de puesto, a horas distintas.", "En la entrada: revisa la identificación o el gafete, registra a los visitantes, impide el tailgating.", "Anota cada revisión y cualquier cosa fuera de lo normal con la hora.", "Informa al siguiente oficial al cambiar de turno."],
          words: [["Patrulla", "recorrer un sitio a pie o en vehículo por una ruta para buscar problemas."], ["Control de acceso", "asegurarse de que solo entren las personas y los vehículos permitidos."], ["Tailgating", "cuando alguien entra detrás de una persona autorizada por una puerta con llave sin mostrar identificación."], ["Registro diario de actividades", "el registro escrito del oficial con cada revisión y cada hecho del turno, con las horas."]],
          slides: [
            { title: "Inicio del turno", bullets: ["Lee las órdenes de puesto y el último registro", "Revisa radio, teléfono y llaves", "Pregunta por lo que no esté claro"] },
            { title: "En la patrulla", bullets: ["Cambia tus horarios", "Puertas, cerraduras, fugas, humo, salidas de emergencia, luces", "Anota cada revisión con la hora"] },
            { title: "En la entrada", bullets: ["Revisa gafetes o identificaciones como dicen las órdenes", "Registra la entrada y salida de visitantes", "Impide el tailgating: amable y firme"] },
            { title: "Fin del turno", bullets: ["Informa al siguiente oficial", "Entrega el registro"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Elige un puesto de práctica: tu edificio de apartamentos, una biblioteca o una tienda que conozcas. Escribe cinco líneas de órdenes de puesto para ese lugar (horario, puntos de patrulla, regla de la entrada, a quién llamar). Luego escribe un registro diario de actividades de una hora para ese puesto, con al menos cuatro anotaciones con hora, incluyendo un problema que encontraste y lo que hiciste.",
          youCanNow: "hacer una patrulla y una revisión en la entrada según las órdenes de puesto escritas, y anotarlas en el registro.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué debes cambiar la hora de tus patrullas?", options: ["Para que nadie pueda predecir cuándo vas a pasar", "Para terminar temprano", "Porque lo dice el radio", "Para saltarte algunas revisiones"], answer: 0, why: "Las patrullas predecibles son fáciles de evitar para quien quiere hacer algo malo; cambiar las horas disuade los problemas." },
            { objective: "O2", q: "Una persona sin gafete entra justo detrás de un empleado. ¿Cómo se llama esto?", options: ["Patrullar", "Tailgating", "Observar", "Registrar"], answer: 1, why: "El tailgating es entrar detrás de alguien por una puerta controlada sin mostrar identificación." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, la guard card y el puesto",
        questions: [
          { objective: "O3", q: "En la mayoría de los estados, ¿cómo se compara la facultad de arresto de un guardia de seguridad con la de una persona particular?", options: ["Mucho mayor, como la de un policía", "Ninguna en todos los casos", "Solo los fines de semana", "Más o menos la misma que la de cualquier persona particular"], answer: 3, why: "En la mayoría de los estados, un guardia tiene la facultad de arresto de una persona particular, y no más." },
          { objective: "O1", q: "¿Qué forma parte del patrón común de la guard card en la mayoría de los estados?", options: ["Un título universitario", "Tener auto", "Una revisión de antecedentes con huellas digitales", "Un permiso de armas de fuego"], answer: 2, why: "La mayoría de los estados pide una revisión de antecedentes con huellas, tener 18 años y una capacitación aprobada." },
          { objective: "O1", q: "En California, ¿cuánta capacitación continua debe completar un guardia cada año?", options: ["8 horas", "Ninguna capacitación", "40 horas", "1 hora"], answer: 0, why: "BSIS exige 8 horas de capacitación continua cada año." },
          { objective: "O2", q: "¿Dónde encuentras qué puertas revisar y a quién llamar en tu sitio?", options: ["En un anuncio de capacitación", "En las órdenes de puesto", "Con un visitante", "En las redes sociales"], answer: 1, why: "Las órdenes de puesto son las instrucciones escritas para ese sitio." },
          { objective: "O2", q: "Durante la patrulla encuentras una salida de emergencia bloqueada con cajas. ¿Qué haces?", options: ["Ignorarlo; no es tu trabajo", "Dejar una nota en las cajas", "Esperar al siguiente turno", "Informarlo y anotarlo con la hora, como dicen las órdenes de puesto"], answer: 3, why: "Una salida bloqueada es un peligro que se debe informar y anotar de inmediato." }
        ]
      }
    },
    {
      name: "Capítulo 2: Conflictos, emergencias, informes y conseguir empleo",
      lessons: [
        {
          title: "Calmar conflictos, uso de la fuerza y emergencias",
          objectives: ["O3"],
          minutes: 6,
          goal: "Elegir una respuesta tranquila y segura ante un conflicto, un robo o una emergencia.",
          text: [
            "La mayoría de los conflictos se pueden calmar con palabras. Mantén una distancia segura, párate de lado, con las manos abiertas y a la vista, y habla despacio y en voz baja. Escucha, usa el nombre de la persona si lo sabes y ofrécele una opción: \"Puede esperar aquí o puedo llamar a su gerente\". No discutas, no toques a la persona y no le cierres el paso.",
            "El uso de la fuerza es la parte más seria del trabajo. Los estados lo enseñan en su capacitación (California exige los cursos Appropriate Use of Force, sobre el uso adecuado de la fuerza, y Power to Arrest). La regla que debes recordar: solo la fuerza que permiten la ley y tus órdenes de puesto, solo cuando es necesaria, y te detienes en cuanto deja de serlo. A la mayoría de los oficiales sin armas se les dice que se retiren y llamen a la policía.",
            "Robo: observa, recuerda la descripción, llama a la policía o a tu supervisor como dicen tus órdenes, y no persigas a nadie hasta la calle o el estacionamiento. Tu seguridad y la de los demás valen más que la mercancía.",
            "Emergencias: en caso de incendio, emergencia médica, peleas o armas, llama primero al 911 (o al número de emergencias de tu zona) y luego sigue el plan de emergencia del sitio: avisa a la gente, guíala a las salidas, recibe a los equipos de emergencia y diles lo que viste. Los primeros auxilios y la RCP se aprenden y se certifican en persona con un instructor calificado, por ejemplo de la Cruz Roja Americana (American Red Cross) o de la Asociación Americana del Corazón (American Heart Association)."
          ],
          steps: ["Revisa: ¿hay alguien en peligro? Si es así, llama primero al 911.", "Mantén una distancia segura y una ruta de salida.", "Habla con calma; escucha; ofrece una opción.", "Si no se calma, retírate y llama a la policía o a tu supervisor.", "Sigue el plan de emergencia del sitio; guía a la gente hacia afuera; recibe a los equipos de emergencia.", "Anótalo en cuanto estés a salvo."],
          words: [["Desescalar", "usar palabras tranquilas y el lenguaje corporal para bajar el enojo de alguien."], ["Uso de la fuerza", "cualquier acción física para controlar a una persona; los guardias solo pueden usar lo que permiten la ley y sus órdenes."], ["Plan de emergencia", "los pasos escritos del sitio para incendios, emergencias médicas, armas y evacuación."], ["Evacuación", "sacar a todos de un edificio de forma segura."]],
          slides: [
            { title: "Cálmalo con palabras", bullets: ["Distancia segura, manos abiertas, de lado", "Habla despacio; escucha; ofrece una opción", "No discutas, no toques, no cierres el paso"] },
            { title: "Uso de la fuerza", bullets: ["Solo lo que permiten la ley y tus órdenes", "Solo cuando es necesaria; detente cuando ya no lo es", "La mayoría de los oficiales sin armas: retírate y llama"] },
            { title: "Robo", bullets: ["Observa y recuerda la descripción", "Llama a la policía o a tu supervisor", "No persigas; las personas valen más que la mercancía"] },
            { title: "Emergencias", bullets: ["Llama primero al 911 (o al número local)", "Sigue el plan de emergencia; guía a la gente hacia afuera", "Recibe a los equipos de emergencia y diles lo que viste"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Practica con un amigo o frente a un espejo. Escena: un visitante grita en la recepción porque no puede subir sin gafete. Di en voz alta tres oraciones tranquilas, incluyendo una opción que le ofreces. Luego escribe en qué momento te retirarías y llamarías a tu supervisor o a la policía.",
          youCanNow: "elegir una respuesta tranquila y segura ante un conflicto, un robo o una emergencia, sin salirte de tu autoridad.",
          quickCheck: [
            { objective: "O3", q: "Una persona se desmaya en el vestíbulo y no respira con normalidad. ¿Qué haces primero?", options: ["Escribir el informe", "Llamar a tu supervisor y esperar", "Llamar al 911 y luego seguir el plan de emergencia", "Buscar su identificación"], answer: 2, why: "En una emergencia médica llamas primero al 911 (o a tu número local)." },
            { objective: "O3", q: "Un ladrón de tienda corre al estacionamiento con mercancía. Tus órdenes dicen observar e informar. ¿Qué haces?", options: ["Anotar la descripción y la dirección y llamar como dicen tus órdenes", "Perseguirlo entre los autos", "Agarrarle la bolsa", "Bloquear su auto con el tuyo"], answer: 0, why: "Te mantienes a salvo, reúnes los hechos y llamas; la mercancía no vale una vida." }
          ]
        },
        {
          title: "Observar, describir y escribir el informe de incidente",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir un informe de incidente basado en hechos que responda quién, qué, cuándo, dónde y cómo.",
          text: [
            "Tu informe lo pueden leer tu supervisor, el cliente, una compañía de seguros, la policía o un tribunal, a veces meses después. Un buen informe permite que un desconocido vea exactamente lo que pasó. Muchos oficiales pierden credibilidad porque sus informes son vagos.",
            "Escribe hechos, no opiniones. No \"estaba borracho\", sino \"olía a alcohol, se tambaleaba y arrastraba las palabras\". No \"un tipo sospechoso\", sino \"un hombre de unos 30 años, de unos 6 pies de estatura, con chamarra roja con capucha y mochila negra, caminó entre los autos estacionados y probó dos manijas de puerta\".",
            "Responde quién, qué, cuándo, dónde y cómo, en orden de tiempo. Da la fecha y las horas exactas, el lugar exacto, las personas involucradas y los testigos, lo que tú mismo viste y oíste, lo que hiciste, y a quién llamaste y cuándo. Escribe entre comillas las palabras exactas que dijo la gente.",
            "Escríbelo en cuanto estés a salvo, mientras lo recuerdas. Usa la primera persona (\"vi\"), oraciones cortas y los nombres correctos. No adivines, no agregues nada y no dejes nada fuera. Si te equivocas, corrígelo como dice tu empleador; nunca cambies un informe después para que se vea mejor."
          ],
          steps: ["Fecha, hora y lugar exacto.", "Quién: tú, las personas involucradas, los testigos (nombres y descripciones).", "Qué pasó, en orden de tiempo, con lo que tú mismo viste y oíste.", "Lo que hiciste y a quién llamaste, con las horas.", "Palabras exactas entre comillas; hechos, no opiniones.", "Vuelve a leerlo; fírmalo como lo pide tu empleador."],
          words: [["Informe de incidente", "un registro escrito y basado en hechos de un suceso como un robo, una lesión, una pelea o una alarma."], ["Testigo", "una persona que vio u oyó lo que pasó."], ["Hecho", "algo que tú mismo viste, oíste o mediste."], ["Opinión", "lo que piensas o supones, como \"se veía culpable\"."]],
          slides: [
            { title: "¿Quién lee tu informe?", bullets: ["Supervisor, cliente, aseguradora, policía, un tribunal", "Debe entenderlo un desconocido, meses después"] },
            { title: "Hechos, no opiniones", bullets: ["No \"borracho\": olía a alcohol, se tambaleaba, arrastraba las palabras", "Describe a las personas: edad, estatura, ropa, bolsa"] },
            { title: "Quién, qué, cuándo, dónde, cómo", bullets: ["Fecha, horas exactas, lugar exacto", "Personas y testigos", "Lo que viste, lo que hiciste y a quién llamaste"] },
            { title: "Escríbelo bien", bullets: ["En cuanto estés a salvo", "Primera persona, oraciones cortas, citas exactas", "Nunca lo cambies después para que se vea mejor"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Observa cualquier escena pública de 2 minutos (una calle con mucha gente, la entrada de una tienda o un video corto sin sonido). Luego escribe un informe de incidente de práctica: fecha, hora, lugar, personas descritas con hechos, lo que pasó en orden de tiempo, y lo que habrías hecho y a quién habrías llamado. Subraya las palabras de opinión y vuelve a escribirlas como hechos.",
          youCanNow: "escribir un informe de incidente basado en hechos que responda quién, qué, cuándo, dónde y cómo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué oración va en un informe de incidente?", options: ["El hombre parecía un ladrón.", "Era obvio que estaba borracho.", "A las 9:42 p. m. un hombre con chamarra roja probó dos manijas de puertas de autos en la fila C.", "Algo malo estaba pasando."], answer: 2, why: "Da la hora, el lugar, la descripción y la acción como hechos, no como opiniones." },
            { objective: "O4", q: "¿Cuándo debes escribir el informe?", options: ["La próxima semana", "En cuanto estés a salvo, mientras lo recuerdas", "Solo si la policía lo pide", "Después de hablar con todos para ponerse de acuerdo en una versión"], answer: 1, why: "Escribir pronto mantiene exactos los detalles." }
          ]
        },
        {
          title: "Tu plan para la guard card y para conseguir empleo",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Escribir un plan con fechas para terminar la capacitación, solicitar la guard card y conseguir empleo.",
          text: [
            "Convierte los pasos de tu estado en fechas. Por ejemplo: semana 1, encuentra una escuela de capacitación aprobada o un empleador que capacite a oficiales nuevos; semana 2, termina la capacitación exigida antes de la tarjeta; semana 3, toma tus huellas digitales y presenta la solicitud; luego busca empleo mientras la agencia revisa tu solicitud. En California, BSIS dice que calcules unas 4 a 6 semanas para el trámite, y puede tardar más.",
            "Muchas empresas de seguridad contratan a personas y las ayudan con la capacitación. Busca en bolsas de trabajo, en tu American Job Center (centro público de empleo) o centro de desarrollo laboral local, y en los sitios web de las empresas. Revisa que la escuela de capacitación esté aprobada por tu estado (California te deja verificar una licencia en línea). Desconfía de cualquiera que te prometa una licencia \"garantizada\".",
            "Tu currículum: sé honesto. Antes de tener la licencia, escribe \"Terminé un curso de preparación para oficial de seguridad; solicitud de guard card en trámite\". Nombra tus habilidades: redacción de informes, servicio al cliente, patrulla, mantener la calma bajo presión. Veteranos: describan con palabras sencillas su experiencia en policía militar, servicio de guardia o turnos de vigilancia.",
            "Practica respuestas para la entrevista: \"¿Cómo manejarías a un visitante enojado?\" y \"¿Qué harías si vieras un robo?\". Usa lo que aprendiste: mantener la calma, observar e informar, pedir ayuda, anotarlo."
          ],
          steps: ["Copia los pasos de la guard card de tu estado de la lección 2.", "Pon una fecha junto a cada paso.", "Haz una lista de tres empleadores o escuelas aprobadas cerca de ti.", "Escribe una línea honesta para tu currículum y tres habilidades.", "Practica en voz alta dos respuestas para la entrevista."],
          words: [["Escuela aprobada", "un proveedor de capacitación al que tu estado le permite dar la capacitación exigida para guardias."], ["American Job Center", "una oficina pública y gratuita de EE. UU. que ayuda a buscar empleo y capacitación."], ["Tiempo de trámite", "lo que tarda la agencia en revisar tu solicitud y tu revisión de antecedentes."]],
          slides: [
            { title: "De pasos a fechas", bullets: ["Encuentra capacitación; termina lo exigido antes de la tarjeta", "Huellas digitales y solicitud", "Busca empleo mientras esperas"] },
            { title: "Dónde buscar", bullets: ["Empresas de seguridad que capacitan a oficiales nuevos", "American Job Centers y centros de desarrollo laboral", "Revisa que la escuela esté aprobada por el estado"] },
            { title: "Un currículum honesto", bullets: ["\"Solicitud de guard card en trámite\" hasta que la emitan", "Redacción de informes, servicio al cliente, patrulla, calma"] },
            { title: "Práctica para la entrevista", bullets: ["Visitante enojado: palabras tranquilas, ofrece una opción", "Robo: observa, llama, anótalo"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Haz tu plan para la guard card en una página: cada paso de la página de tu estado con una fecha, tres empleadores o escuelas aprobadas de tu zona, una línea honesta para tu currículum y tus respuestas a las dos preguntas de entrevista. Júntalo con tu lista y tu informe de práctica: ese es tu paquete de preparación.",
          youCanNow: "escribir un plan con fechas para obtener tu guard card y un empleo, con una línea honesta para tu currículum.",
          quickCheck: [
            { objective: "O5", q: "Terminaste este curso, pero todavía no te emiten la guard card. ¿Qué línea del currículum es honesta?", options: ["\"Oficial de seguridad con licencia\"", "\"Terminé un curso de preparación para oficial de seguridad; solicitud de guard card en trámite\"", "\"Guardia armado\"", "\"Instructor certificado por el estado\""], answer: 1, why: "Dice exactamente lo que hiciste sin decir que tienes una licencia que no tienes." },
            { objective: "O1", q: "¿Cómo puedes comprobar en California que una escuela de capacitación o una licencia es real?", options: ["Confiar en el anuncio de la escuela", "Preguntar en las redes sociales", "Usar la verificación de licencias en línea del estado", "Mirar su logotipo"], answer: 2, why: "El Departamento de Asuntos del Consumidor de California te permite verificar licencias en línea." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Conflictos, emergencias, informes y conseguir empleo",
        questions: [
          { objective: "O3", q: "Un visitante enojado está gritando. ¿Cuál es el mejor primer paso?", options: ["Gritarle para que escuche", "Pararte muy cerca", "Agarrarle el brazo", "Mantener una distancia segura y hablar despacio y con calma"], answer: 3, why: "La distancia y las palabras tranquilas bajan el enojo y te mantienen a salvo." },
          { objective: "O3", q: "Hueles humo y ves llamas en un cuarto de almacenamiento. ¿Qué va primero?", options: ["Llamar al 911 (o al número local) y empezar el plan de emergencia del sitio", "Escribir el informe", "Terminar tu patrulla", "Tomar una foto para las redes sociales"], answer: 0, why: "En una emergencia llamas primero al 911 y luego sigues el plan de emergencia." },
          { objective: "O4", q: "¿Cuál es un hecho y no una opinión?", options: ["Parecía culpable", "Ella estaba loca", "Él dijo: \"Quítate de mi camino\"", "Tramaban algo malo"], answer: 2, why: "Las palabras exactas que oíste son un hecho; las demás son opiniones." },
          { objective: "O4", q: "Notas un error en el informe de ayer después de que tu supervisor lo leyó. ¿Qué haces?", options: ["Reescribirlo a escondidas para que se vea mejor", "Corregirlo abiertamente como dice tu empleador", "Tirarlo a la basura", "Pedirle a un compañero que lo firme"], answer: 1, why: "Las correcciones se hacen abiertamente con el método del empleador; cambiar un informe a escondidas destruye la confianza." },
          { objective: "O5", q: "¿Qué debe incluir un plan para la guard card?", options: ["Fechas para la capacitación, las huellas, la solicitud y las solicitudes de empleo", "Solo el empleo que quieres", "La promesa de una licencia garantizada", "Nada hasta que te contraten"], answer: 0, why: "Un plan con fechas convierte los pasos de tu estado en acciones que puedes terminar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para oficial de seguridad (guard card)",
    questions: [
      { objective: "O3", q: "¿Qué hace principalmente un oficial de seguridad?", options: ["Arrestar a la gente por romper cualquier regla", "Proteger a personas y bienes dejándose ver, vigilando e informando", "Investigar delitos en un tribunal", "Poner multas de tránsito"], answer: 1, why: "La base del trabajo es la protección visible, observar e informar." },
      { objective: "O3", q: "Tus órdenes de puesto son más estrictas que la ley. ¿Cuál sigues?", options: ["Solo la ley", "Lo que te parezca correcto", "Lo que pida el visitante", "Las órdenes de puesto"], answer: 3, why: "Los empleadores pueden poner reglas más estrictas, y debes seguir tus órdenes de puesto." },
      { objective: "O1", q: "¿Quién emite la guard card en la mayoría de los estados?", options: ["Una agencia estatal", "Cualquier escuela de capacitación", "El centro comercial local", "El FBI"], answer: 0, why: "Una agencia estatal da la licencia a los guardias; las escuelas solo dan la capacitación." },
      { objective: "O1", q: "En California, ¿cuántas horas de capacitación en habilidades de oficial de seguridad se deben terminar dentro de los primeros 6 meses?", options: ["8 horas", "4 horas", "32 horas", "100 horas"], answer: 2, why: "BSIS exige 32 horas de capacitación en habilidades dentro de los primeros 6 meses." },
      { objective: "O1", q: "¿Cuál es la edad mínima para el registro de guardia en California?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS dice que los solicitantes deben tener al menos 18 años." },
      { objective: "O1", q: "Tienes antecedentes penales y estás llenando una solicitud de guard card. ¿Qué debes hacer?", options: ["Responder todas las preguntas con honestidad y revisar las reglas de tu estado", "No mencionar tus antecedentes", "Usar el nombre de un amigo", "Rendirte sin revisar nada"], answer: 0, why: "Las respuestas falsas pueden causar un rechazo; cada estado decide qué antecedentes cuentan." },
      { objective: "O2", q: "¿Qué hay en las órdenes de puesto?", options: ["Las ganancias de la empresa", "Las instrucciones del sitio: horario, puntos de patrulla, reglas de entrada, a quién llamar", "Tu horario personal de la semana", "Una lista de sospechosos"], answer: 1, why: "Las órdenes de puesto son las instrucciones escritas para un sitio específico." },
      { objective: "O2", q: "¿Qué debe incluir cada anotación del registro diario de actividades?", options: ["Tu opinión sobre tus compañeros", "Solo los problemas, sin horas", "La hora y lo que revisaste o viste", "Nada hasta el final del turno"], answer: 2, why: "El registro anota cada revisión y cada hecho con la hora." },
      { objective: "O2", q: "Un visitante sin gafete dice \"Vengo con él\" y entra detrás de un empleado. ¿Qué haces?", options: ["Dejarlo pasar; parece amable", "Gritarle", "Dejar tu puesto para seguirlo", "Detenerlo con amabilidad y revisar su identificación como dicen las órdenes de puesto"], answer: 3, why: "Impedir el tailgating con amabilidad y firmeza es la base del control de acceso." },
      { objective: "O2", q: "¿Por qué le cuentas al siguiente oficial lo que pasó al cambiar de turno?", options: ["Para que sepa qué está abierto y qué vigilar", "Para terminar tu turno temprano", "No hace falta", "Para compartir chismes"], answer: 0, why: "Una buena entrega mantiene el sitio cubierto sin huecos." },
      { objective: "O3", q: "¿Qué ayuda a calmar a una persona enojada?", options: ["Pararte cara a cara", "Hablar despacio y ofrecer una opción", "Señalarla con el dedo", "Bloquear la salida"], answer: 1, why: "Hablar con calma y dar una opción baja la tensión; bloquear y señalar la suben." },
      { objective: "O3", q: "¿Cuándo puede un guardia usar la fuerza?", options: ["Cada vez que alguien es grosero", "Para recuperar cualquier objeto", "Solo como lo permiten la ley y las órdenes de puesto, y solo cuando es necesario", "Cuando el supervisor no está mirando"], answer: 2, why: "La fuerza está limitada por la ley y las órdenes de puesto, y se detiene cuando ya no es necesaria." },
      { objective: "O3", q: "Ves una pelea con un arma en el estacionamiento. ¿Qué haces primero?", options: ["Meterte y separarlos", "Llamar al 911 desde un lugar seguro", "Escribir primero el informe", "Grabarlo para las redes sociales"], answer: 1, why: "Un arma significa llamar primero al 911, desde un lugar seguro." },
      { objective: "O4", q: "¿Quién podría leer tu informe de incidente?", options: ["Solo tú", "Nadie", "Solo tu familia", "Tu supervisor, el cliente, la aseguradora, la policía o un tribunal"], answer: 3, why: "Muchas personas pueden usar los informes, a veces meses después." },
      { objective: "O4", q: "¿Cuál es la mejor descripción de una persona en un informe?", options: ["Mujer, de unos 40 años, de unos 5 pies 5 pulgadas, abrigo azul, mochila gris", "Una persona sospechosa", "Alguien raro", "Una alborotadora"], answer: 0, why: "La edad, la estatura y la ropa son hechos que ayudan a otros a identificar a la persona." },
      { objective: "O4", q: "¿Qué preguntas debe responder un informe?", options: ["Por qué la persona es mala", "Tu opinión sobre el cliente", "Quién, qué, cuándo, dónde y cómo", "Solo lo que dijo la policía"], answer: 2, why: "Quién, qué, cuándo, dónde y cómo hacen un informe completo y basado en hechos." },
      { objective: "O4", q: "¿Cómo escribes lo que dijo alguien?", options: ["Lo resumes según tu opinión", "Lo dejas fuera", "Lo haces sonar más grave", "Escribes sus palabras exactas entre comillas"], answer: 3, why: "Las citas exactas son hechos en los que otros pueden confiar." },
      { objective: "O5", q: "¿Qué línea de currículum es honesta antes de que te emitan la licencia?", options: ["\"Solicitud de guard card en trámite\"", "\"Profesional de seguridad con licencia\"", "\"Oficial armado\"", "\"Oficial de policía\""], answer: 0, why: "Describe tu situación real sin decir que tienes una licencia." },
      { objective: "O5", q: "Una escuela promete una licencia de guardia \"garantizada\" en un día. ¿Qué debes hacer?", options: ["Pagar de inmediato", "Revisar la página de la agencia estatal y si la escuela está aprobada", "Darles tu número de Seguro Social por mensaje de texto", "Decirles a tus amigos que se inscriban"], answer: 1, why: "Solo el estado emite licencias; revisa la página oficial y la aprobación de la escuela." },
      { objective: "O5", q: "Mientras la agencia revisa tu solicitud, ¿qué paso inteligente puedes poner en tu plan?", options: ["No hacer nada", "Dejar de estudiar", "Buscar empleo y practicar respuestas para la entrevista", "Empezar a trabajar sin licencia"], answer: 2, why: "Aprovechar la espera para buscar empleo y practicar hace que te contraten más rápido." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Pasos de la guard card en tu estado", objective: "O1", notYet: "Falta la agencia, la revisión de antecedentes o la capacitación, o usa un anuncio de capacitación en lugar de la página oficial.", meets: "Enumera la agencia, la edad, la revisión de antecedentes, la capacitación antes y después de la licencia, cómo presentar la solicitud y la dirección de la página oficial.", exceeds: "Agrega las reglas de renovación y cómo verificar una escuela o una licencia." },
      { name: "Lista de patrulla y de acceso", objective: "O2", notYet: "Faltan puntos de patrulla, la regla de la entrada o el registro.", meets: "Cubre cada punto de las órdenes de puesto de práctica e incluye un registro con horas y al menos cuatro anotaciones.", exceeds: "Agrega la entrega de turno y un plan contra el tailgating." },
      { name: "Tarjeta de bolsillo de observar e informar", objective: "O3", notYet: "Incluye perseguir, usar más fuerza de la que permiten las órdenes o no pone primero llamar al 911.", meets: "Muestra palabras tranquilas, cuándo retirarse y llamar, no perseguir, y el 911 primero en emergencias.", exceeds: "Agrega los pasos del plan de emergencia del sitio y lo que hay que decir a los equipos de emergencia." },
      { name: "Informe de incidente de práctica", objective: "O4", notYet: "Es vago, tiene opiniones o le faltan las horas o el lugar.", meets: "Responde quién, qué, cuándo, dónde y cómo en orden de tiempo, con hechos y citas exactas.", exceeds: "Las descripciones tienen suficiente detalle para que un desconocido identifique a las personas y los lugares." },
      { name: "Plan con fechas y línea del currículum", objective: "O5", notYet: "No tiene fechas, o dice que tiene una licencia que todavía no tiene.", meets: "Fechas para cada paso, tres empleadores o escuelas aprobadas de la zona, una línea honesta para el currículum.", exceeds: "Incluye respuestas practicadas a dos preguntas de entrevista." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y un paquete de preparación que cumple la rúbrica",
      "Estudiantes que solicitan una guard card estatal en 60 días (encuesta de seguimiento)",
      "Estudiantes que reciben una guard card y son contratados como oficiales de seguridad (seguimiento e informes de los aliados)",
      "Los empleadores aliados informan de oficiales nuevos cuyos informes de incidente no necesitan reescribirse en los primeros 90 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para la página de licencias del estado",
      "Papel y bolígrafo, o una aplicación de documentos gratis, para la lista, el registro, el informe y el plan",
      "Opcional: una copia impresa de la hoja informativa de tu estado y un ejemplo de órdenes de puesto",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Dígalo desde el principio y a menudo: este curso prepara a los estudiantes; la agencia estatal emite la licencia, después de una capacitación aprobada.",
      "Antes de la clase, abra la página oficial de su propio estado y lleve las horas de capacitación, las tarifas y los formularios actuales; las reglas cambian.",
      "No enseñe en este curso inmovilización física, uso de esposas ni armas; eso necesita una capacitación aprobada y en persona.",
      "Con los estudiantes que tienen antecedentes, mantenga la información en privado y diríjalos a las reglas del estado y a un programa de asistencia legal para la reinserción; nunca prometa una aprobación.",
      "Use juegos de rol para la desescalada con una palabra clara para parar, y califique el paquete de preparación con la rúbrica, una fila a la vez."
    ]
  }
};

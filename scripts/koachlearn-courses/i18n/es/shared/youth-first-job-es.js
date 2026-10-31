"use strict";

// Koach Learn course (Spanish translation of shared/youth-first-job.js). See scripts/koachlearn-courses/README.md, "Translations".

const SRC = {
  youthRules: { name: "Departamento de Trabajo de EE. UU.: YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "Departamento de Trabajo de EE. UU.: Hoja informativa 43, reglas de trabajo infantil para empleos no agrícolas", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "Departamento de Trabajo de EE. UU.: Trabajo infantil", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "Departamento de Trabajo de EE. UU.: Leyes estatales de trabajo infantil", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "Departamento de Trabajo de EE. UU.: Salario mínimo", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "Departamento de Trabajo de EE. UU.: Leyes estatales de salario mínimo", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Formulario I-9, Verificación de Elegibilidad de Empleo", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: Sobre el Formulario W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Tema 751, tasas de retención del Seguro Social y Medicare", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Trabajadores jóvenes", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job-es",
  lang: "es",
  translationOf: "youth-first-job",
  category: "Workforce Development",
  name: "Tu primer empleo: permisos de trabajo, cheques de pago y lo que esperan los jefes",
  skills: "Revisar las reglas de trabajo para jóvenes, Preparar tus papeles de trabajo, Leer un talón de pago, Llevar la cuenta de tus horas, Cumplir lo que espera un jefe, Hablar sobre la seguridad",
  outcome: "empezar tu primer empleo preparado: comprobar que el trabajo y las horas son legales para tu edad, reunir tus papeles de trabajo, leer y revisar tu talón de pago, actuar como espera un jefe y hablar si algo es peligroso o injusto.",
  about: [
    "Este curso es para jóvenes que se preparan para su primer empleo, por ejemplo en una tienda, un restaurante, un campamento de verano, un cine o una oficina. También ayuda a padres, mentores y programas de empleo juvenil.",
    "Vas a revisar las reglas para tu edad, preparar tus papeles, leer un cheque de pago y compararlo con tus horas, aprender lo que esperan los jefes en las primeras semanas, y conocer tus derechos y qué hacer si un trabajo es peligroso.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel o en el teléfono. Al final haces tu propia Hoja de inicio para tu primer empleo. Este curso enseña las reglas; no reemplaza a la oficina de trabajo de tu estado. Revisa siempre la página de tu propio estado."
  ],
  finalTask: "Haz una Hoja de inicio para tu primer empleo, de una página, para un trabajo real o planeado: (1) tu edad, el trabajo y las horas que puedes trabajar según las reglas federales y las de tu estado, con la página oficial que revisaste; (2) una lista de los papeles que necesitas (permiso de trabajo si tu estado lo pide, documentos de identidad para el Formulario I-9, Formulario W-4) y dónde conseguir cada uno; (3) una revisión de práctica de un talón de pago: con un talón inventado, escribe el pago bruto, cada deducción y el pago neto, y comprueba las cuentas; (4) tres hábitos que le mostrarás a tu jefe en tus dos primeras semanas; (5) tu plan si algo es peligroso: a quién le dices primero y el número de teléfono oficial al que llamarás.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adolescentes (de unos 14 a 19 años) y adultos jóvenes que buscan su primer empleo, incluidos estudiantes de programas de empleo juvenil de verano, jóvenes en cuidado de crianza (foster care) y jóvenes en programas de capacitación laboral. Algunos son los primeros de su familia en trabajar en un lugar de trabajo de EE. UU.",
    startingPoint: "Saben usar un teléfono y llenar formularios sencillos. La mayoría nunca ha visto un talón de pago, un Formulario W-4 ni un permiso de trabajo, y no conoce las reglas de trabajo infantil ni sus derechos en el trabajo.",
    gap: "A menudo a los trabajadores jóvenes les asignan horas o tareas que la ley no permite para su edad, no saben bien qué papeles necesitan, no pueden saber si su pago es correcto y tienen miedo de hablar sobre la seguridad. Conocer las reglas y los hábitos que esperan los jefes les ayuda a conseguir el trabajo, mantenerlo y estar seguros.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado)",
      "Dispositivos: un teléfono o una computadora de la escuela o la biblioteca; todas las tareas se pueden hacer con papel y lápiz",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Las reglas cambian según el estado; la ley federal pone un mínimo y se aplica la regla más estricta, así que cada lección señala la página oficial",
      "Privacidad: en clase no se comparten números reales del Seguro Social, datos bancarios ni talones de pago reales; la práctica usa números inventados"
    ],
    prerequisites: "Ninguno. Quien quiera ayuda con el currículum y las entrevistas también puede tomar \"Currículums, LinkedIn y entrevistas\"."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con tu edad y una oferta de trabajo con horario", action: "comprobar si las tareas y las horas del trabajo están permitidas para tu edad según las reglas federales y estatales", standard: "nombrando la página oficial que usaste" },
    { id: "O2", condition: "Para un trabajo en tu estado", action: "hacer una lista de los papeles que necesitas para empezar a trabajar y de dónde conseguir cada uno", standard: "incluyendo un permiso de trabajo si tu estado lo pide, la identificación para el Formulario I-9 y el Formulario W-4" },
    { id: "O3", condition: "Con un talón de pago y tu propio registro de horas", action: "encontrar el pago bruto, cada deducción y el pago neto, y compararlos con tus horas", standard: "con las cuentas exactas hasta el centavo" },
    { id: "O4", condition: "Ante una situación de trabajo en tus primeras semanas", action: "elegir y describir la acción profesional que espera un jefe", standard: "acertando al menos 4 de 5 situaciones" },
    { id: "O5", condition: "Ante una situación peligrosa o injusta en el trabajo", action: "describir los pasos para hablar y denunciarla", standard: "nombrando a quién le dices primero y la agencia oficial a la que llamas si no se arregla" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte para trabajar",
      lessons: [
        {
          title: "Qué trabajos y horarios son legales a tu edad",
          objectives: ["O1"],
          minutes: 6,
          goal: "Comprobar si las tareas y las horas de un trabajo están permitidas para tu edad.",
          text: [
            "En EE. UU., la ley federal sobre el trabajo infantil es la Ley de Normas Justas de Trabajo (FLSA, por sus siglas en inglés). Los estados también tienen sus propias leyes de trabajo infantil. Cuando las dos son diferentes, se aplica la regla más estricta.",
            "Según las reglas federales para la mayoría de los trabajos no agrícolas: si tienes menos de 14 años, en general no puedes trabajar (con algunas excepciones en la página oficial). A los 14 y 15 años puedes trabajar fuera del horario escolar, pero solo hasta 3 horas en un día de clases (también los viernes), 18 horas en una semana de clases, 8 horas en un día sin clases y 40 horas en una semana sin clases, y solo entre las 7 a.m. y las 7 p.m. Del 1 de junio al Día del Trabajo (Labor Day), el límite de la noche pasa a las 9 p.m.",
            "A los 16 y 17 años, la ley federal no limita tus horas, pero no puedes hacer trabajos que el Departamento de Trabajo considera peligrosos. Ejemplos: manejar en la vía pública como parte del trabajo (a los 17 años hay una excepción limitada), usar un montacargas u otro equipo de elevación eléctrico, y la mayoría de las máquinas eléctricas para trabajar la madera. Tu estado puede agregar más límites.",
            "Si tienes menos de 18 años y un horario o una tarea parece ir contra estas reglas, tú no estás en problemas: las reglas existen para protegerte, y quien debe cumplirlas es el empleador."
          ],
          steps: ["Escribe tu edad y las tareas y horas del trabajo.", "Lee las reglas federales en YouthRules o en la Hoja informativa 43 del Departamento de Trabajo.", "Abre la página de trabajo infantil de tu estado (el Departamento de Trabajo tiene la lista de todos los estados).", "Usa la regla más estricta. Encierra en un círculo cualquier hora o tarea que no esté permitida."],
          words: [["FLSA", "la Ley de Normas Justas de Trabajo, la ley federal sobre salario mínimo, horas extra y trabajo infantil."], ["Ley de trabajo infantil", "reglas sobre qué trabajos y horas están permitidos para trabajadores menores de 18 años."], ["Trabajo peligroso", "una tarea que el Departamento de Trabajo considera demasiado peligrosa para menores de 18 años, como manejar o usar un montacargas."], ["Semana de clases", "una semana en la que hay clases al menos un día."]],
          slides: [
            { title: "Dos grupos de reglas", bullets: ["La ley federal (la FLSA) y la ley de tu estado", "Cuando son diferentes, se aplica la regla más estricta"] },
            { title: "De 14 y 15 años (federal)", bullets: ["3 horas en un día de clases, 18 horas en una semana de clases", "8 horas en un día sin clases, 40 en una semana sin clases", "De 7 a.m. a 7 p.m.; hasta las 9 p.m. del 1 de junio al Día del Trabajo"] },
            { title: "De 16 y 17 años (federal)", bullets: ["Sin límite federal de horas", "Nada de trabajos peligrosos: manejar, montacargas, muchas máquinas eléctricas", "Tu estado puede agregar límites"] },
            { title: "Cómo revisarlo", bullets: ["Escribe tu edad, tareas y horas", "Lee YouthRules y la página de tu estado", "Encierra en un círculo lo que no esté permitido"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "A una persona de 15 años le ofrecen un trabajo en un supermercado los martes y jueves de 4 a 8 p.m. en octubre, y los sábados de 9 a.m. a 3 p.m. En papel, revisa cada turno con las reglas federales. Luego abre la página de trabajo infantil de tu estado y escribe una regla que agregue.",
          youCanNow: "comprobar si las tareas y las horas de un trabajo son legales para tu edad, usando las reglas federales y la página de tu estado.",
          quickCheck: [
            { objective: "O1", q: "Tienes 15 años. Es octubre. Tu jefe te pone a trabajar hasta las 8 p.m. en una noche de clases. ¿Qué es cierto según las reglas federales?", options: ["Está bien porque son menos de 3 horas", "Es demasiado tarde: los jóvenes de 14 y 15 años terminan a las 7 p.m. fuera del verano", "Está bien si tus padres están de acuerdo", "Solo el estado puede decidir"], answer: 1, why: "Fuera del período del 1 de junio al Día del Trabajo, los jóvenes de 14 y 15 años solo pueden trabajar entre las 7 a.m. y las 7 p.m." },
            { objective: "O1", q: "La regla de tu estado es más estricta que la regla federal. ¿Cuál sigues?", options: ["La regla federal, siempre", "La que elija tu jefe", "Ninguna; se cancelan", "La regla estatal, que es más estricta"], answer: 3, why: "Cuando las leyes federales y estatales de trabajo infantil son diferentes, se aplica la regla más estricta." }
          ]
        },
        {
          title: "Permisos de trabajo y papeles del primer día",
          objectives: ["O2"],
          minutes: 5,
          goal: "Hacer una lista de los papeles que necesitas para empezar tu trabajo y de dónde conseguir cada uno.",
          text: [
            "La ley federal no pide un permiso de trabajo, pero muchos estados sí lo piden a los menores de 18 años. A veces se llama papeles de trabajo o certificado de empleo. Según el estado, lo consigues en tu escuela, en la oficina de trabajo del estado o en internet, y puede necesitar la firma de uno de tus padres. Revisa la página de tu estado para saber si lo necesitas y cómo conseguirlo.",
            "El primer día o antes, todo empleador de EE. UU. te pide llenar el Formulario I-9. Muestra que tienes permiso para trabajar en EE. UU. Presentas documentos de identidad originales de la lista del formulario, por ejemplo un pasaporte de EE. UU., o una identificación escolar o estatal junto con una tarjeta del Seguro Social o un acta de nacimiento.",
            "También llenas el Formulario W-4. Le dice a tu empleador cuánto impuesto federal sobre la renta debe descontar de cada cheque de pago. Tu estado puede tener su propio formulario de impuestos. Si una pregunta te confunde, pregúntale a tu jefe o a uno de tus padres.",
            "Protégete: da tu número del Seguro Social solo en papeles reales de contratación, después de que te contraten. Un empleador real nunca te pide pagar dinero para conseguir un trabajo ni comprar tarjetas de regalo. Eso es una estafa."
          ],
          steps: ["Revisa la página de trabajo infantil de tu estado: ¿necesitas un permiso de trabajo? ¿Quién lo entrega?", "Busca tus documentos de identidad originales para el Formulario I-9 (mira la lista del formulario).", "Lee el Formulario W-4 antes de tu primer día para saber qué pregunta.", "Pon copias de tus papeles en una carpeta. Guarda los originales en un lugar seguro en casa."],
          words: [["Permiso de trabajo", "un papel que algunos estados piden antes de que un menor de 18 años pueda trabajar; también se llama papeles de trabajo o certificado de empleo."], ["Formulario I-9", "el formulario federal que muestra que tienes permiso para trabajar en EE. UU.; para llenarlo presentas documentos de identidad."], ["Formulario W-4", "el formulario federal que le dice a tu empleador cuánto impuesto sobre la renta debe retener de tu pago."], ["Documento original", "el papel o la tarjeta real, no una foto ni una copia."]],
          slides: [
            { title: "Permiso de trabajo", bullets: ["La ley federal no lo pide", "Muchos estados lo piden a menores de 18 años", "La página de tu estado dice quién lo entrega"] },
            { title: "Formulario I-9", bullets: ["Muestra que puedes trabajar en EE. UU.", "Lleva documentos de identidad originales de la lista del formulario"] },
            { title: "Formulario W-4", bullets: ["Le dice a tu empleador cuánto impuesto retener", "Tu estado puede tener su propio formulario"] },
            { title: "Protégete", bullets: ["Da tu número del Seguro Social solo en papeles reales de contratación", "Nunca pagues dinero para conseguir un trabajo"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Haz en papel una lista de \"Papeles del primer día\". Para tu estado, escribe: ¿necesito un permiso de trabajo y dónde lo consigo? ¿Qué dos documentos de identidad llevaré para el Formulario I-9? ¿Quién me puede ayudar con el Formulario W-4?",
          youCanNow: "hacer una lista de los papeles que necesitas para empezar un trabajo, dónde conseguir cada uno y cómo proteger tus números privados.",
          quickCheck: [
            { objective: "O2", q: "¿Qué formulario le muestra a tu empleador que tienes permiso para trabajar en EE. UU.?", options: ["El Formulario I-9", "El Formulario W-4", "Una boleta de calificaciones", "Un talón de pago"], answer: 0, why: "El Formulario I-9 comprueba que tienes permiso para trabajar en EE. UU.; para llenarlo presentas documentos de identidad originales." },
            { objective: "O2", q: "Alguien te ofrece un trabajo si primero pagas $50 por \"materiales de capacitación\". ¿Qué es lo más probable?", options: ["Un gasto normal del primer día", "Una tarifa del Formulario W-4", "Una estafa: los empleadores reales no te cobran por darte un trabajo", "Una tarifa de tu estado por el permiso de trabajo"], answer: 2, why: "Pedirte dinero para darte un trabajo es una señal común de estafa de empleo." }
          ]
        },
        {
          title: "Lo que esperan los jefes en tus primeras semanas",
          objectives: ["O4"],
          minutes: 5,
          goal: "Elegir la acción profesional que espera un jefe en situaciones comunes de un primer empleo.",
          text: [
            "A la mayoría de los jefes de un primer empleo les importa menos la experiencia y más los hábitos: llegar a tiempo, estar listo para trabajar, seguir instrucciones, ser amable con los clientes y los compañeros, y avisar con tiempo cuando surge algo.",
            "Llegar a tiempo significa estar listo para trabajar al empezar tu turno, no ir entrando por la puerta. Si estás enfermo o vas a llegar tarde, avísale a tu jefe lo antes posible, de la forma que pide tu lugar de trabajo (muchas veces una llamada, no solo un mensaje). No faltes a un turno sin avisar.",
            "Guarda el teléfono mientras trabajas, a menos que tu trabajo lo permita. Cuando no sepas hacer algo, pregunta. Repite las instrucciones para asegurarte de que entendiste. Recibe los comentarios con calma y da las gracias; significa que tu jefe quiere que te vaya bien.",
            "Revisa tu horario cada semana y pide los días libres con tiempo. Ser una persona confiable es lo que te da más horas, una buena referencia y tu próximo trabajo."
          ],
          steps: ["Llega unos minutos antes, listo para trabajar.", "Si vas a llegar tarde o estás enfermo, avísale a tu jefe lo antes posible, como te lo pidió.", "Guarda el teléfono, a menos que el trabajo lo permita.", "Pregunta cuando no estés seguro; repite las instrucciones.", "Recibe los comentarios con calma y úsalos."],
          words: [["Turno", "el bloque de tiempo en que te toca trabajar."], ["Avisar que faltas", "decirle a tu jefe con anticipación que no puedes ir a un turno."], ["Referencia", "una persona, muchas veces un jefe anterior, que le cuenta a un nuevo empleador qué tipo de trabajador eres."], ["Comentarios", "opiniones sobre cómo lo estás haciendo y cómo hacerlo mejor."]],
          slides: [
            { title: "Hábitos que buscan los jefes", bullets: ["Llegar a tiempo y listo para trabajar", "Seguir instrucciones", "Ser amable con clientes y compañeros"] },
            { title: "¿Tarde o enfermo?", bullets: ["Avísale a tu jefe lo antes posible", "Usa la forma que pide tu lugar de trabajo", "Nunca faltes a un turno sin avisar"] },
            { title: "En el trabajo", bullets: ["Teléfono guardado, a menos que esté permitido", "Pregunta si no estás seguro; repite las instrucciones", "Recibe los comentarios con calma"] },
            { title: "Por qué importa", bullets: ["Más horas", "Una buena referencia", "Tu próximo trabajo"] }
          ],
          tryIt: "Escribe lo que dirías en dos situaciones: (1) te despiertas enfermo dos horas antes de tu turno; (2) tu gerente te dice que acomodaste mal un estante. Di las dos en voz alta como si hablaras con tu jefe.",
          youCanNow: "elegir y describir lo que espera un jefe cuando llegas tarde o estás enfermo, cuando no sabes qué hacer o cuando recibes comentarios.",
          quickCheck: [
            { objective: "O4", q: "Tu turno empieza a las 4 p.m. ¿Qué significa \"a tiempo\"?", options: ["Entrar por la puerta a las 4:00", "Llegar antes de las 4:15", "Estar listo para trabajar a las 4:00, o sea, llegar unos minutos antes", "Cualquier hora antes de tu descanso"], answer: 2, why: "Llegar a tiempo significa estar listo para empezar a trabajar cuando comienza el turno." },
            { objective: "O4", q: "No estás seguro de cómo usar la caja registradora. ¿Qué es lo mejor?", options: ["Adivinar y esperar que funcione", "Esperar a que un cliente se queje", "Buscarlo en tu teléfono durante el turno", "Pedirle a tu supervisor que te enseñe y luego repetirlo"], answer: 3, why: "Preguntar y repetir las instrucciones muestra interés y evita errores." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte para trabajar",
        questions: [
          { objective: "O1", q: "Tienes 14 años. Es una semana de clases. ¿Cuántas horas en total puedes trabajar esa semana según las reglas federales?", options: ["18", "40", "Sin límite", "8"], answer: 0, why: "Las reglas federales permiten a los jóvenes de 14 y 15 años trabajar hasta 18 horas en una semana con clases." },
          { objective: "O1", q: "Tienes 16 años. Tu jefe te pide manejar la camioneta de la tienda para entregar pedidos. ¿Qué es cierto según las reglas federales?", options: ["Cualquiera con licencia puede hacerlo", "Manejar en la vía pública como parte del trabajo es un trabajo peligroso prohibido antes de los 17, con solo una excepción limitada a los 17", "Está bien los fines de semana", "Está bien si te pagan más"], answer: 1, why: "Las reglas federales de trabajos peligrosos prohíben manejar en el trabajo antes de los 17 años, y a los 17 solo permiten manejar de forma limitada." },
          { objective: "O2", q: "¿La ley federal pide un permiso de trabajo a una persona de 15 años?", options: ["Sí, siempre", "Solo en verano", "No, pero muchos estados sí, así que revisa la página de tu estado", "Solo para trabajos en restaurantes"], answer: 2, why: "Las reglas federales no piden permisos de trabajo, pero muchos estados sí." },
          { objective: "O2", q: "¿Para qué sirve el Formulario W-4?", options: ["Muestra que tienes permiso para trabajar en EE. UU.", "Te da un permiso de trabajo", "Muestra tus horas", "Le dice a tu empleador cuánto impuesto federal sobre la renta debe retener"], answer: 3, why: "El Formulario W-4 fija cuánto impuesto federal sobre la renta se retiene de tu pago." },
          { objective: "O4", q: "Vas a llegar 20 minutos tarde porque se descompuso el autobús. ¿Qué haces?", options: ["Avisarle a tu jefe enseguida, de la forma que pide tu lugar de trabajo", "No decir nada y llegar tarde", "Faltar al turno", "Publicarlo en internet"], answer: 0, why: "Avisarle a tu jefe con tiempo, como te lo pidió, muestra que eres confiable." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tu pago, tus derechos y tu seguridad",
      lessons: [
        {
          title: "Leer tu primer talón de pago",
          objectives: ["O3"],
          minutes: 6,
          goal: "Encontrar el pago bruto, cada deducción y el pago neto en un talón de pago.",
          text: [
            "Un talón de pago (o comprobante de pago) viene con cada cheque o depósito directo. Muestra el período de pago, tus horas, tu tarifa por hora, tu pago bruto, cada deducción y tu pago neto.",
            "El pago bruto es las horas por tu tarifa por hora, antes de descontar nada. Las deducciones son las cantidades que se descuentan. Las más comunes: el impuesto federal sobre la renta (según tu Formulario W-4), el Seguro Social (6.2 por ciento de tu pago) y Medicare (1.45 por ciento), que muchas veces aparecen juntos como FICA, y en muchos estados un impuesto estatal sobre la renta. El pago neto, o lo que te llevas a casa, es lo que queda.",
            "Solo práctica, con números inventados: 20 horas a $12.00 la hora = $240.00 de pago bruto. Seguro Social: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Impuesto federal sobre la renta: $6.00. Impuesto estatal: $3.00. Las deducciones suman $27.36, así que el pago neto = $240.00 - $27.36 = $212.64.",
            "El salario mínimo federal es $7.25 la hora. Muchos estados y ciudades tienen uno más alto, y a ti se te aplica el más alto. Revisa la página de tu estado para saber que tu tarifa es legal."
          ],
          steps: ["Busca las fechas del período de pago y tus horas.", "Revisa el pago bruto: horas x tarifa.", "Anota cada deducción y súmalas.", "Revisa el pago neto: pago bruto menos el total de deducciones.", "Si algo no coincide, pregunta con amabilidad a nómina o a tu jefe."],
          words: [["Pago bruto", "tu pago antes de que se descuente nada: horas x tarifa."], ["Deducción", "una cantidad que se descuenta de tu pago, como los impuestos."], ["Pago neto", "lo que te llevas a casa: pago bruto menos deducciones."], ["FICA", "los impuestos del Seguro Social y Medicare que se descuentan de tu pago."], ["Período de pago", "las fechas de trabajo que cubre un cheque de pago."]],
          slides: [
            { title: "Qué hay en un talón de pago", bullets: ["Período de pago, horas y tarifa", "Pago bruto y cada deducción", "Pago neto (lo que te llevas a casa)"] },
            { title: "Deducciones comunes", bullets: ["Impuesto federal sobre la renta (según tu W-4)", "Seguro Social 6.2% y Medicare 1.45% (FICA)", "Impuesto estatal sobre la renta en muchos estados"] },
            { title: "Práctica: números inventados", bullets: ["20 horas x $12.00 = $240.00 de pago bruto", "Deducciones: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Pago neto: $240.00 - $27.36 = $212.64"] },
            { title: "Salario mínimo", bullets: ["Federal: $7.25 la hora", "Muchos estados y ciudades pagan más; se aplica el más alto"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Solo práctica: trabajaste 15 horas a $13.00 la hora. El impuesto federal sobre la renta es $5.00 y el impuesto estatal es $2.00. En papel, calcula el pago bruto, el Seguro Social, Medicare, el total de deducciones y el pago neto. (Respuesta: $195.00 bruto, $12.09, $2.83, $21.92 en total, $173.08 neto.)",
          youCanNow: "leer un talón de pago, encontrar el pago bruto, cada deducción y el pago neto, y revisar las cuentas.",
          quickCheck: [
            { objective: "O3", q: "Trabajaste 10 horas a $14.00 la hora. ¿Cuál es tu pago bruto?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "El pago bruto es horas por tarifa: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "El pago bruto es $300.00 y las deducciones suman $35.00. ¿Cuál es el pago neto?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "El pago neto es el pago bruto menos las deducciones: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Llevar la cuenta de tus horas para que te paguen bien",
          objectives: ["O3"],
          minutes: 5,
          goal: "Llevar tu propio registro de horas y compararlo con tu talón de pago.",
          text: [
            "En los pagos hay errores. La mejor protección es tu propio registro. En cada turno, anota la fecha, la hora en que empezaste, cuándo empezó y terminó tu descanso, y la hora en que terminaste. El Departamento de Trabajo tiene una aplicación gratis para registrar horas, o puedes usar un cuaderno o las notas de tu teléfono.",
            "Suma las horas del período de pago. Recuerda restar los descansos para comer que no se pagan. Luego compara tu total con las horas de tu talón de pago.",
            "Si los números no coinciden, no te asustes y no acuses a nadie. Lleva tu registro a tu jefe o a nómina y pregunta: \"Mis notas dicen 22 horas y mi talón dice 19. ¿Me ayuda a revisarlo?\" La mayoría de los errores se arreglan así.",
            "Si no te pagan horas que trabajaste y no se arregla, la División de Salarios y Horas (Wage and Hour Division) del Departamento de Trabajo recibe quejas. Es gratis y confidencial."
          ],
          steps: ["En cada turno: anota la fecha, la hora de inicio, las horas del descanso y la hora de salida.", "Al final del período de pago, suma tus horas (menos los descansos sin pago).", "Compara tu total con las horas de tu talón de pago.", "Si son diferentes, lleva tu registro y pide con amabilidad que lo revisen.", "Si no se arregla, comunícate con la División de Salarios y Horas."],
          words: [["Hoja de horas", "un registro de los días y las horas que trabajaste."], ["Descanso sin pago", "un descanso para comer en el que no estás trabajando para nada y no te pagan."], ["Nómina", "la persona o el equipo que les paga a los trabajadores."], ["División de Salarios y Horas", "la parte del Departamento de Trabajo de EE. UU. que hace cumplir las reglas de pago y de trabajo infantil."]],
          slides: [
            { title: "Lleva tu propio registro", bullets: ["Fecha, hora de inicio, descanso y salida", "Cuaderno, notas del teléfono o la aplicación gratis del DOL para registrar horas"] },
            { title: "Compara cada período de pago", bullets: ["Suma tus horas, menos los descansos sin pago", "Compáralas con el talón de pago"] },
            { title: "Si no coincide", bullets: ["Lleva tu registro y pregunta con amabilidad", "\"¿Me ayuda a revisarlo?\""] },
            { title: "¿Todavía no se arregla?", bullets: ["División de Salarios y Horas: gratis y confidencial", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Solo práctica: lunes de 3:30 a 7:00 p.m., miércoles de 3:30 a 7:00 p.m., sábado de 9:00 a.m. a 3:00 p.m. con 30 minutos de almuerzo sin pago. Suma las horas. Tu talón dice 11 horas. Escribe lo que le dirías a tu jefe. (Respuesta: 3.5 + 3.5 + 5.5 = 12.5 horas.)",
          youCanNow: "llevar un registro de tus horas, compararlo con tu talón de pago y pedir con amabilidad que se corrija un error.",
          quickCheck: [
            { objective: "O3", q: "Trabajaste de 9 a.m. a 2 p.m. con 30 minutos de almuerzo sin pago. ¿Cuántas horas pagadas son?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "De 9 a.m. a 2 p.m. son 5 horas; menos 30 minutos de descanso sin pago son 4.5 horas." },
            { objective: "O3", q: "Tus notas dicen 22 horas, pero tu talón de pago dice 19. ¿Qué haces primero?", options: ["Renunciar enseguida", "Llevar tu registro a tu jefe o a nómina y pedir con amabilidad que lo revisen", "No decir nada", "Publicar el talón de pago en internet"], answer: 1, why: "La mayoría de los errores de pago se arreglan mostrando tu registro y preguntando con amabilidad." }
          ]
        },
        {
          title: "Tus derechos y tu seguridad: hablar",
          objectives: ["O5"],
          minutes: 6,
          goal: "Describir los pasos para hablar y denunciar una situación peligrosa o injusta.",
          text: [
            "Todo trabajador, también los adolescentes, tiene derechos. Tu empleador debe darte un lugar de trabajo seguro y pagarte al menos el salario mínimo legal por cada hora que trabajas. Deben capacitarte antes de que hagas una tarea, y puedes hacer preguntas. Tu empleador no puede castigarte por preguntar sobre tus derechos ni por presentar una queja.",
            "Los trabajadores jóvenes se lastiman más cuando son nuevos, van con prisa o no tienen capacitación. Señales de alerta: que te pidan usar una máquina con la que no te capacitaron, una tarea prohibida para tu edad, falta de equipo de protección, pisos resbalosos, aceite caliente, o que te dejen solo tarde en la noche.",
            "Pasos para hablar: detente si estás en peligro. Explícale con calma a tu supervisor cuál es el problema. Si no lo arregla, díselo a otro gerente y a uno de tus padres, a un maestro o al personal del programa de empleo. Si todavía no se arregla, comunícate con el gobierno: OSHA (1-800-321-6742) para la seguridad, o la División de Salarios y Horas (1-866-487-9243) para problemas de pago, horas o trabajo infantil.",
            "Si alguien está gravemente herido, llama primero al 911 (o al número de emergencias de tu zona)."
          ],
          steps: ["Si estás en peligro, detente y aléjate.", "Explícale con calma a tu supervisor qué está mal.", "Si no se arregla, díselo a otro gerente y a un adulto de confianza.", "Si todavía no se arregla: llama a OSHA para la seguridad o a la División de Salarios y Horas para pago, horas o trabajo infantil.", "Emergencia: llama primero al 911."],
          words: [["OSHA", "la Administración de Seguridad y Salud Ocupacional, la agencia federal de seguridad en el trabajo."], ["Represalia", "castigar a un trabajador por hablar o presentar una queja; no está permitido."], ["Equipo de protección", "cosas como guantes, gafas de seguridad o zapatos antideslizantes que te mantienen seguro."]],
          slides: [
            { title: "Tus derechos", bullets: ["Un lugar de trabajo seguro", "Al menos el salario mínimo legal por cada hora", "Capacitación, preguntas y ningún castigo por hablar"] },
            { title: "Señales de alerta", bullets: ["Una máquina con la que no te capacitaron", "Una tarea prohibida para tu edad", "Sin equipo de protección, aceite caliente, pisos resbalosos"] },
            { title: "Habla paso a paso", bullets: ["Detente si hay peligro", "Díselo a tu supervisor, luego a otro gerente y a un adulto de confianza", "Si no se arregla: OSHA o la División de Salarios y Horas"] },
            { title: "Números que debes saber", bullets: ["Emergencia: primero el 911", "OSHA: 1-800-321-6742", "Salarios y Horas: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "Tienes 16 años. Tu gerente te dice que uses la rebanadora de carne en una salchichonería, y no te han capacitado. Escribe las palabras que le dirías a tu gerente y a quién se lo dirías después si insiste. Guarda en tu teléfono los números de OSHA y de Salarios y Horas.",
          youCanNow: "reconocer una situación peligrosa o injusta y hablar paso a paso: tu supervisor, un adulto de confianza y luego la agencia oficial.",
          quickCheck: [
            { objective: "O5", q: "Tu jefe te dice que limpies una freidora con aceite caliente y no te da guantes ni capacitación. ¿Qué haces primero?", options: ["Decirle con calma a tu supervisor que necesitas capacitación y equipo antes de hacerlo", "Hacerlo rápido para no meterte en problemas", "Llamar al 911", "Renunciar sin decir por qué"], answer: 0, why: "Hablar primero con tu supervisor es el primer paso normal cuando todavía nadie está herido." },
            { objective: "O5", q: "Les contaste a dos gerentes de un problema con tu pago y nada cambió. ¿Con quién te puedes comunicar?", options: ["Con nadie; tienes que aceptarlo", "Con un desconocido en internet", "Con la División de Salarios y Horas del Departamento de Trabajo de EE. UU.", "Solo con el entrenador deportivo de tu escuela"], answer: 2, why: "La División de Salarios y Horas recibe quejas gratis y confidenciales sobre pago, horas y trabajo infantil." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tu pago, tus derechos y tu seguridad",
        questions: [
          { objective: "O3", q: "En un talón de pago, ¿qué es el pago neto?", options: ["El pago antes de impuestos", "Tu tarifa por hora", "Lo que te llevas a casa después de las deducciones", "El total de impuestos descontados"], answer: 2, why: "El pago neto es lo que queda después de descontar todas las deducciones del pago bruto." },
          { objective: "O3", q: "Solo práctica: el pago bruto es $200.00. ¿Cuánto es la deducción del Seguro Social al 6.2 por ciento?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "¿Por qué llevar tu propio registro de horas?", options: ["Para compararlo con tu talón de pago y encontrar errores", "Porque la ley dice que solo tú puedes registrar las horas", "Para poder saltarte los descansos", "Para no necesitar un talón de pago"], answer: 0, why: "Tu propio registro te permite comprobar que te pagaron cada hora que trabajaste." },
          { objective: "O5", q: "Un compañero se quema gravemente. ¿Qué haces primero?", options: ["Terminar tu tarea", "Llamar al 911 (o al número de emergencias de tu zona)", "Llamar a OSHA", "Mandarles mensajes a tus amigos"], answer: 1, why: "En una emergencia, llama primero al 911; las denuncias a las agencias vienen después." },
          { objective: "O5", q: "¿Tu empleador puede castigarte por presentar una queja sobre seguridad o pago?", options: ["Sí, si tienes menos de 18 años", "Sí, si la queja está equivocada", "No, las represalias por hablar no están permitidas", "Solo durante tu primer mes"], answer: 2, why: "La ley protege a los trabajadores de represalias por preguntar sobre sus derechos o presentar una queja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Tu primer empleo: permisos de trabajo, cheques de pago y lo que esperan los jefes",
    questions: [
      { objective: "O1", q: "Tienes 15 años y estás de vacaciones de verano en julio. ¿Hasta qué hora puedes trabajar según las reglas federales?", options: ["7 p.m.", "9 p.m.", "11 p.m.", "A cualquier hora"], answer: 1, why: "Del 1 de junio al Día del Trabajo, el límite de la noche para los jóvenes de 14 y 15 años pasa a las 9 p.m." },
      { objective: "O2", q: "¿Qué papeles llena todo empleado nuevo, a cualquier edad?", options: ["El Formulario I-9 y el Formulario W-4", "Un permiso de trabajo y una boleta de calificaciones", "Un talón de pago y una hoja de horas", "Un examen de licencia de manejo"], answer: 0, why: "Todo empleado nuevo llena el Formulario I-9 y el Formulario W-4; los permisos de trabajo dependen de la edad y del estado." },
      { objective: "O3", q: "Solo práctica: 18 horas a $12.50 la hora. ¿Cuál es el pago bruto?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "Te despiertas enfermo dos horas antes de tu turno. ¿Qué es lo profesional?", options: ["Ir enfermo y no decir nada", "Faltar al turno y explicarlo la próxima semana", "Pedirle a un amigo que vaya en tu lugar sin avisar a nadie", "Avisarle a tu jefe enseguida, de la forma que pide tu lugar de trabajo"], answer: 3, why: "Avisarle a tu jefe con tiempo, como te lo pidió, le permite cubrir el turno y muestra que eres confiable." },
      { objective: "O5", q: "¿Qué agencia atiende las quejas sobre seguridad en el trabajo?", options: ["El IRS", "OSHA", "La oficina de correos", "Tu distrito escolar"], answer: 1, why: "OSHA es la agencia federal de seguridad y salud en el trabajo." },
      { objective: "O1", q: "Tienes 14 años. En un día de clases, ¿cuántas horas puedes trabajar según las reglas federales?", options: ["3", "5", "8", "Sin límite"], answer: 0, why: "Los jóvenes de 14 y 15 años pueden trabajar hasta 3 horas en un día de clases, también los viernes." },
      { objective: "O1", q: "Tienes 17 años. ¿Qué tarea está prohibida para ti según las reglas federales de trabajos peligrosos?", options: ["Embolsar compras", "Contestar el teléfono", "Acomodar estantes a mano", "Manejar un montacargas"], answer: 3, why: "Usar equipo de elevación eléctrico, como un montacargas, es un trabajo peligroso prohibido para menores de 18 años." },
      { objective: "O2", q: "¿Dónde averiguas si tu estado pide un permiso de trabajo?", options: ["En la página oficial de trabajo infantil de tu estado (el Departamento de Trabajo tiene la lista)", "En una publicación de redes sociales", "En cualquier sitio web de empleos", "En el reverso de un talón de pago"], answer: 0, why: "Los permisos de trabajo son una regla estatal, así que la página oficial del estado es donde debes revisar." },
      { objective: "O2", q: "Un nuevo jefe te manda un mensaje antes de cualquier entrevista pidiéndote tu usuario y contraseña del banco \"para configurar el pago\". ¿Qué es esto?", options: ["Algo normal para el depósito directo", "Parte del Formulario W-4", "Una señal de alerta de estafa; nunca compartas tus datos de acceso", "Parte del Formulario I-9"], answer: 2, why: "Los empleadores reales nunca necesitan tus datos de acceso al banco; pedirlos es una señal de estafa." },
      { objective: "O3", q: "¿Qué deducción depende de lo que escribiste en el Formulario W-4?", options: ["Medicare", "Seguro Social", "Tu tarifa por hora", "El impuesto federal sobre la renta"], answer: 3, why: "El Formulario W-4 le dice a tu empleador cuánto impuesto federal sobre la renta debe retener." },
      { objective: "O3", q: "Solo práctica: pago bruto $240.00, deducciones $27.36. ¿Cuál es el pago neto?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Tu salario mínimo federal es $7.25, pero el de tu ciudad es más alto. ¿Cuál se te aplica?", options: ["El federal de $7.25", "El que elija tu jefe", "El más alto", "El más bajo"], answer: 2, why: "Cuando el salario mínimo del estado o la ciudad es más alto que el federal, se aplica el más alto." },
      { objective: "O4", q: "Tu gerente dice que acomodaste mal un estante. ¿Cuál es la mejor respuesta?", options: ["Discutir que está bien", "Decir \"Gracias por decírmelo. ¿Me enseña cómo se hace bien?\"", "Ignorarlo", "Quejarte con los clientes"], answer: 1, why: "Recibir los comentarios con calma y preguntar cómo arreglarlo es lo que esperan los jefes." },
      { objective: "O4", q: "¿Cuándo está bien usar el teléfono durante tu turno?", options: ["Cuando hay poco trabajo", "Solo cuando el trabajo lo permite", "Cuando los clientes no están mirando", "En cualquier momento si sigues trabajando"], answer: 1, why: "Guarda el teléfono mientras trabajas, a menos que tu lugar de trabajo lo permita." },
      { objective: "O4", q: "Necesitas un sábado libre para un evento familiar el próximo mes. ¿Qué haces?", options: ["Pedírselo a tu jefe con tiempo, de la forma que pide tu lugar de trabajo", "Simplemente no ir", "Decírselo solo a un compañero", "Pedirlo la noche anterior"], answer: 0, why: "Pedir el día libre con tiempo le da a tu jefe tiempo para organizarse." },
      { objective: "O5", q: "Tienes 16 años y te dicen que uses una rebanadora de carne. ¿Qué debes saber?", options: ["Está bien después de probar una vez", "Está bien si ningún cliente lo ve", "Es tu decisión", "Las rebanadoras de carne eléctricas son un trabajo peligroso prohibido para menores de 18 años, así que habla"], answer: 3, why: "Las reglas federales de trabajos peligrosos prohíben a los menores de 18 años usar rebanadoras de carne eléctricas." },
      { objective: "O5", q: "¿Cuál es el primer paso normal cuando algo en el trabajo es peligroso pero nadie está herido?", options: ["Llamar a las noticias", "Publicarlo en internet", "Decírselo con calma a tu supervisor", "Renunciar sin decir nada"], answer: 2, why: "Decírselo a tu supervisor le da la oportunidad de arreglarlo; si no se arregla, acude a alguien más arriba." },
      { objective: "O1", q: "Tienes 16 años. ¿Cuántas horas a la semana puedes trabajar según la ley federal?", options: ["18", "40", "No hay límite federal, pero revisa tu estado", "8"], answer: 2, why: "La ley federal no limita las horas a los 16 y 17 años, pero tu estado sí puede hacerlo." },
      { objective: "O4", q: "¿Qué es lo que más le importa normalmente a un jefe en un trabajador en su primer empleo?", options: ["Ropa cara", "Años de experiencia", "Conocer al dueño", "Llegar a tiempo y ser confiable"], answer: 3, why: "Los jefes de un primer empleo buscan sobre todo hábitos confiables, como llegar a tiempo y seguir instrucciones." },
      { objective: "O5", q: "Tu pago está mal y dos gerentes no lo arreglaron. ¿A qué número puedes llamar?", options: ["A la División de Salarios y Horas, 1-866-487-9243", "Solo a OSHA", "Al 911", "Al IRS"], answer: 0, why: "La División de Salarios y Horas atiende quejas sobre pago, horas y trabajo infantil." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Horas y tareas revisadas", objective: "O1", notYet: "No escribe las reglas de su edad, o no nota un turno o una tarea que rompe las reglas.", meets: "Revisa cada turno y cada tarea con las reglas federales y estatales, y nombra la página oficial.", exceeds: "También señala una regla estatal más estricta que la federal y cómo cambia el horario." },
      { name: "Papeles listos", objective: "O2", notYet: "A la lista le falta el Formulario I-9, el Formulario W-4 o la pregunta del permiso de trabajo estatal.", meets: "Anota el permiso de trabajo (si hace falta), la identificación para el Formulario I-9 y el Formulario W-4, y dónde conseguir cada uno.", exceeds: "También anota cómo proteger los números privados y una señal de estafa de empleo." },
      { name: "Talón de pago revisado", objective: "O3", notYet: "Faltan el pago bruto, las deducciones o el pago neto, o las cuentas están mal.", meets: "Escribe el pago bruto, cada deducción y el pago neto, y las cuentas están bien hasta el centavo.", exceeds: "También compara las horas del talón con una hoja de horas escrita y dice qué hacer si no coinciden." },
      { name: "Lo que espera el jefe", objective: "O4", notYet: "Los hábitos son vagos, como \"portarse bien\".", meets: "Tres hábitos claros, como llegar temprano, avisar con tiempo si va a faltar y preguntar cuando no está seguro.", exceeds: "Cada hábito tiene un guion corto de lo que diría." },
      { name: "Plan de seguridad", objective: "O5", notYet: "No hay plan, o el plan no incluye decírselo a un supervisor ni nombra una agencia.", meets: "Nombra a quién decirle primero, a un adulto de confianza, y a OSHA o la División de Salarios y Horas con el número de teléfono.", exceeds: "También dice que en una emergencia hay que llamar primero al 911 y anota señales de alerta para su propio trabajo." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que empiezan un trabajo, una pasantía o un puesto de empleo juvenil de verano en un plazo de 90 días (encuesta de seguimiento o registros del programa)",
      "Participantes que siguen en ese trabajo después de 60 días, y la proporción que obtiene una buena referencia",
      "Participantes que dicen haber comparado al menos una vez un talón de pago con sus propias horas (seguimiento a los 30 días)",
      "Los programas juveniles y los empleadores informan menos problemas de horarios o tareas que rompen las reglas de trabajo infantil"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para abrir las páginas del Departamento de Trabajo y del estado, o copias impresas de la página de trabajo infantil del estado",
      "Papel, lápiz y una calculadora (sirve la del teléfono)",
      "Formularios W-4 e I-9 en blanco impresos de irs.gov y uscis.gov para mirarlos (no escriban números reales en clase)",
      "Un talón de pago de ejemplo inventado para practicar",
      "Unos 60 a 75 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Antes del curso, busque las páginas de trabajo infantil y de salario mínimo de su estado e imprima las reglas principales; cambian según el estado y con el tiempo.",
      "En un programa juvenil de verano: hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" en parejas.",
      "Nunca reúna números reales del Seguro Social, copias de identificaciones ni talones de pago reales; use ejemplos inventados.",
      "Practiquen con juegos de roles los guiones para avisar una falta y recibir comentarios de la Lección 3 y los pasos para hablar de la Lección 6.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila en Todavía no a la vez.",
      "Si un participante describe un trabajo real peligroso o ilegal, ayúdelo a seguir los pasos de la Lección 6 e involucre a uno de sus padres o a su tutor."
    ]
  }
};

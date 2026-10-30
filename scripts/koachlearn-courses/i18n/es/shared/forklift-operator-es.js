"use strict";

// Koach Learn course (Spanish translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety: this course prepares learners but does not certify anyone. Under OSHA 29 CFR 1910.178(l) the employer trains and evaluates.
// All load numbers are practice only.

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Vehículos industriales motorizados (la regla federal sobre montacargas)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Vehículos industriales motorizados (montacargas), en inglés", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Tipos de montacargas (Clases I a VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Partes del montacargas", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Inspección antes de operar", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Manejo de cargas", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Desplazamiento y maniobras", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Muelles de carga", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Capacitación de operadores", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: Prohibido operar montacargas a trabajadores menores de 18 años (regla del Departamento de Trabajo de EE. UU., copia de Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-es",
  lang: "es",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Fundamentos para operador de montacargas",
  skills: "Conocer los tipos y partes del montacargas, Hacer la inspección antes del turno, Leer la placa de datos, Manejar cargas con seguridad, Conducir con seguridad cerca de personas y muelles",
  outcome: "nombrar los principales tipos y partes de un montacargas, hacer una inspección completa antes del turno y sacar de servicio un montacargas inseguro, decidir con la placa de datos si una carga se puede levantar con seguridad, elegir la acción segura al conducir, apilar, trabajar en el muelle y estacionar, y armar un plan para que un empleador te capacite y te evalúe.",
  about: [
    "Los operadores de montacargas mueven mercancía en almacenes, tiendas, fábricas, granjas y obras de construcción. Este curso es para personas que buscan trabajo, personas que regresan a casa después de estar en prisión, veteranos y cualquiera que quiera empezar en ese trabajo.",
    "Vas a aprender los tipos y las partes de un montacargas, la inspección diaria, cómo leer la placa de datos y juzgar una carga, las reglas para conducir cerca de personas, rampas y muelles de carga, y cómo estacionar con seguridad.",
    "Importante: este curso te prepara, pero no te certifica. Según la regla de montacargas de OSHA (la Administración de Seguridad y Salud Ocupacional de EE. UU.), 29 CFR 1910.178, tu empleador debe capacitarte, verte conducir su montacargas en su lugar de trabajo y evaluarte antes de que operes solo. Un curso en línea o una tarjeta no bastan. Debes tener al menos 18 años. No conduzcas un montacargas para practicar hasta que estés en una capacitación supervisada.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un paquete de preparación para montacargas: una lista de inspección antes del turno para un tipo de montacargas, tres decisiones de carga con placas de datos de práctica y tu razón para cada una, una tarjeta de bolsillo con los pasos para estacionar y para el muelle, y un plan para conseguir capacitación y evaluación de un empleador con una línea honesta para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan trabajo en almacenes, centros de distribución, bodegas de tiendas o fábricas: personas que buscan empleo, personas que regresan a casa después de estar en prisión, veteranos y jóvenes de 18 años o más. Algunas han manejado montacargas de manera informal; la mayoría no.",
    startingPoint: "Saben manejar un carro o andar en bicicleta y seguir una lista de pasos. Saben poco de las partes del montacargas, la estabilidad, la capacidad de carga o las reglas de OSHA. Algunas creen que una tarjeta en línea por sí sola las certifica.",
    gap: "Los montacargas están detrás de muchas lesiones graves en almacenes, como vuelcos, personas atropelladas y caídas desde el muelle. Los empleadores deben capacitar y evaluar a cada operador, y contratan a personas que ya conocen la inspección, las reglas de carga y los hábitos de seguridad. Los participantes necesitan ese conocimiento, y una idea real de cómo funciona la certificación, para llegar listos a la capacitación del empleador y no pagar por una engañosa \"certificación instantánea\".",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término se explica",
      "En este curso no se conduce ningún montacargas: la práctica real ocurre solo en la capacitación supervisada del empleador",
      "Hay que tener al menos 18 años para operar un montacargas en el trabajo",
      "Dispositivos: un teléfono o una computadora de la biblioteca para las páginas de OSHA; papel para las listas",
      "Estas reglas son de OSHA federal; algunos estados tienen su propio plan de OSHA con reglas al menos igual de estrictas"
    ],
    prerequisites: "Ninguno. \"Fundamentos de seguridad en el trabajo (OSHA)\" es un curso complementario útil."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con fotos o descripciones de montacargas", action: "identificar el tipo de montacargas y señalar sus partes principales", standard: "nombrando al menos 6 partes y lo que hace cada una" },
    { id: "O2", condition: "Usando una lista de inspección", action: "completar una inspección antes del turno y decidir si el montacargas se puede usar", standard: "revisando cada punto y sacando de servicio cualquier montacargas inseguro" },
    { id: "O3", condition: "Con una placa de datos y la descripción de una carga", action: "decidir si la carga se puede levantar con seguridad y explicar por qué", standard: "acertando al menos 4 de 5 decisiones de carga" },
    { id: "O4", condition: "Ante una situación de manejo, apilado, muelle o estacionamiento", action: "elegir la acción segura según las reglas de OSHA", standard: "acertando al menos 4 de 5 situaciones" },
    { id: "O5", condition: "Usando lo que OSHA exige a los empleadores", action: "escribir un plan para conseguir capacitación y evaluación, y una línea honesta para el currículum", standard: "que diga el papel del empleador y no declare ninguna certificación que no tienes" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, el montacargas y la revisión diaria",
      lessons: [
        {
          title: "El trabajo de montacargas y la regla de capacitación de OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar quién capacita y certifica a un operador de montacargas y cuándo hace falta volver a capacitarse.",
          text: [
            "OSHA llama a los montacargas \"vehículos industriales motorizados\" (powered industrial trucks). Su regla, 29 CFR 1910.178, dice que el empleador debe asegurarse de que cada operador sea competente. Eso significa capacitación (en el aula y práctica real con un instructor calificado) y una evaluación tuya conduciendo en el lugar de trabajo real.",
            "Después, el empleador certifica que fuiste capacitado y evaluado. El registro muestra tu nombre, las fechas de la capacitación y de la evaluación, y quién las hizo. Tu evaluación se debe repetir al menos una vez cada tres años.",
            "También recibes capacitación de repaso si te ven conduciendo de forma insegura, tienes un accidente o un casi accidente, sacas una mala evaluación, te pasan a otro tipo de montacargas o el lugar de trabajo cambia de una forma que afecta la seguridad.",
            "Las reglas laborales federales no permiten que nadie menor de 18 años opere un montacargas en el trabajo. Y un curso en línea o una tarjeta de bolsillo no te certifican por sí solos: solo la capacitación y la evaluación de tu empleador lo hacen."
          ],
          words: [["OSHA", "la Administración de Seguridad y Salud Ocupacional, la agencia de EE. UU. encargada de la seguridad en el trabajo."], ["Vehículo industrial motorizado", "el nombre que usa OSHA para los montacargas y máquinas parecidas que levantan y mueven cargas."], ["Evaluación", "una persona calificada te observa operar en el lugar de trabajo para juzgar si lo haces con seguridad."], ["Capacitación de repaso", "capacitación extra para corregir un problema o prepararte para otro montacargas u otro lugar de trabajo."], ["Casi accidente", "un evento en el que nadie se lastimó, pero alguien pudo haberse lastimado."]],
          slides: [
            { title: "¿Quién te certifica?", bullets: ["Tu empleador, no un sitio web", "Capacitación: aula más práctica real con un instructor", "Evaluación: tú conduciendo en el lugar de trabajo real"] },
            { title: "El registro", bullets: ["Tu nombre", "Fechas de la capacitación y de la evaluación", "Quién te capacitó y te evaluó"] },
            { title: "Cuándo vuelves a capacitarte", bullets: ["Al menos cada tres años: una nueva evaluación", "Después de un accidente, un casi accidente o manejo inseguro", "Otro tipo de montacargas o un lugar de trabajo que cambió"] },
            { title: "Antes de empezar", bullets: ["Debes tener al menos 18 años", "Nada de practicar sin un instructor"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "En papel, escribe tres oraciones con tus palabras: quién capacita y evalúa a un operador de montacargas, cada cuánto se repite la evaluación y dos situaciones que significan que necesitas capacitación de repaso.",
          youCanNow: "explicar quién capacita y certifica a un operador de montacargas, cada cuánto te evalúan y cuándo necesitas capacitación de repaso.",
          quickCheck: [
            { objective: "O5", q: "¿Quién debe capacitarte y evaluarte antes de que operes un montacargas en el trabajo?", options: ["Cualquier sitio web que venda tarjetas", "Tu empleador, en tu lugar de trabajo", "Un amigo que maneja montacargas", "Nadie"], answer: 1, why: "La regla de OSHA pone la capacitación y la evaluación en manos del empleador, en el lugar de trabajo real." },
            { objective: "O5", q: "Golpeas un estante con tu montacargas. Nadie se lastima. ¿Qué es cierto?", options: ["No tiene que pasar nada", "Pierdes tu trabajo automáticamente", "Tienes que comprar otra tarjeta en línea", "Es una razón para recibir capacitación de repaso"], answer: 3, why: "Un accidente o un casi accidente es una de las razones de OSHA para la capacitación de repaso." }
          ]
        },
        {
          title: "Tipos y partes del montacargas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar el tipo de montacargas y nombrar sus partes principales.",
          text: [
            "OSHA agrupa los montacargas en siete clases. Clase I: montacargas eléctricos con asiento o plataforma para el operador. Clase II: montacargas eléctricos para pasillos angostos. Clase III: carretillas eléctricas manuales, incluidos los patines (transpaletas) que se manejan caminando detrás. Clases IV y V: montacargas con motor de combustión, con llantas sólidas para pisos lisos bajo techo (IV) o llantas de aire para exteriores (V). Clase VI: tractores de arrastre. Clase VII: montacargas todoterreno para obras y granjas.",
            "La mayoría de los montacargas de contrapeso tienen las mismas partes principales. Las horquillas (uñas) levantan la carga. Las horquillas cuelgan del carro portahorquillas, que sube y baja por el mástil. El respaldo de carga evita que la carga caiga hacia ti. La protección superior (techo protector) te protege de objetos que caen. El contrapeso, atrás, equilibra la carga.",
            "Desde el asiento tienes el volante, el control de dirección (adelante y reversa), las palancas de elevación e inclinación, la bocina, los frenos y el cinturón de seguridad. La placa de datos (también llamada placa de capacidad o placa de identificación) te dice cuánto puede levantar el montacargas."
          ],
          words: [["Mástil", "el marco vertical por el que suben y bajan las horquillas."], ["Carro portahorquillas", "la placa del mástil que sostiene las horquillas."], ["Respaldo de carga", "un marco encima de las horquillas que evita que la carga caiga hacia el operador."], ["Protección superior", "el techo de barras que protege al operador de objetos que caen."], ["Contrapeso", "un peso grande en la parte de atrás del montacargas que equilibra la carga."], ["Placa de datos", "la placa del montacargas que muestra su modelo y cuánto puede levantar."]],
          slides: [
            { title: "Siete clases", bullets: ["I, II, III: eléctricos (con asiento, pasillo angosto, manuales)", "IV, V: con motor, para bajo techo o exteriores", "VI: tractores de arrastre; VII: todoterreno"] },
            { title: "Partes que levantan", bullets: ["Horquillas en el carro portahorquillas", "El carro sube y baja por el mástil", "El respaldo de carga aleja la carga de ti"] },
            { title: "Partes que protegen", bullets: ["Protección superior sobre tu cabeza", "Contrapeso en la parte de atrás", "Cinturón, bocina y luces"] },
            { title: "La placa de datos", bullets: ["Muestra el modelo del montacargas", "Muestra cuánto puede levantar", "Debe estar en su lugar y legible"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "Dibuja una vista de lado sencilla de un montacargas con asiento (cajas y líneas están bien). Marca al menos seis partes: horquillas, carro portahorquillas, mástil, respaldo de carga, protección superior y contrapeso. Junto a cada una, escribe una línea sobre lo que hace.",
          youCanNow: "decir a qué clase pertenece un montacargas y nombrar sus partes principales y lo que hacen.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte evita que una carga caiga hacia el operador?", options: ["El respaldo de carga", "El contrapeso", "Las llantas", "La bocina"], answer: 0, why: "El respaldo de carga está encima de las horquillas y evita que la carga caiga hacia ti." },
            { objective: "O1", q: "¿De qué clase es un montacargas hecho para terreno irregular en una obra?", options: ["Clase I", "Clase III", "Clase VII", "Clase IV"], answer: 2, why: "La Clase VII son montacargas todoterreno para suelo irregular al aire libre." }
          ]
        },
        {
          title: "La inspección antes del turno",
          objectives: ["O2"],
          minutes: 6,
          goal: "Completar una lista de inspección antes del turno y decidir si el montacargas se puede usar con seguridad.",
          text: [
            "OSHA exige revisar cada montacargas antes de usarlo, al menos una vez al día; si los montacargas trabajan las 24 horas, después de cada turno. Si algo hace que el montacargas sea inseguro, se saca de servicio hasta que lo reparen.",
            "Empieza con la llave apagada. Revisa los niveles de líquidos y busca fugas, grietas y mangueras o cadenas del mástil dañadas (nunca metas las manos dentro del mástil). Revisa las llantas, las horquillas, el respaldo de carga y la protección superior, y que la placa de datos y las etiquetas de advertencia estén en su lugar y se puedan leer. Revisa el cinturón de seguridad.",
            "Montacargas eléctricos: revisa los cables, los conectores y el seguro de la batería. Montacargas de gas propano: revisa que el tanque esté bien montado, que la válvula de alivio apunte hacia arriba y que no haya fugas.",
            "Luego, con el montacargas encendido, prueba los frenos, el volante, adelante y reversa, subir, bajar, inclinar, la bocina, las luces y la alarma de reversa. Si algo está mal: no uses el montacargas, ponle una etiqueta o repórtalo, anótalo en la lista y avísale a tu supervisor. Solo personas capacitadas y autorizadas hacen las reparaciones."
          ],
          steps: ["Llave apagada: líquidos, fugas, mangueras y cadenas (mira, no metas la mano).", "Llantas, horquillas, respaldo de carga, protección superior.", "Placa de datos y etiquetas de advertencia presentes y legibles; el cinturón funciona.", "Llave encendida: frenos, volante, adelante y reversa.", "Subir, bajar, inclinar, bocina, luces, alarma de reversa.", "Firma la lista; reporta y etiqueta cualquier falla y no uses el montacargas."],
          words: [["Inspección antes del turno", "la revisión de un montacargas antes de usarlo en el turno."], ["Fuera de servicio", "no se debe usar hasta que lo reparen; casi siempre se marca con una etiqueta."], ["Cadenas del mástil", "las cadenas que suben el carro y las horquillas por el mástil."]],
          slides: [
            { title: "Cuándo revisar", bullets: ["Antes de usarlo, al menos una vez al día", "Después de cada turno si trabajan día y noche"] },
            { title: "Llave apagada", bullets: ["Líquidos, fugas, mangueras, cadenas: mira, no metas la mano", "Llantas, horquillas, respaldo, protección superior", "Placa de datos, etiquetas, cinturón"] },
            { title: "Llave encendida", bullets: ["Frenos, volante, adelante y reversa", "Subir, bajar, inclinar", "Bocina, luces, alarma de reversa"] },
            { title: "¿Encontraste un problema?", bullets: ["No uses el montacargas", "Etiquétalo, anótalo y avísale a tu supervisor", "Solo personas autorizadas lo reparan"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Escribe tu propia lista de inspección antes del turno con dos columnas, \"Llave apagada\" y \"Llave encendida\", usando la página de OSHA sobre la inspección antes de operar. Luego lee este caso de práctica: la bocina no funciona y una horquilla tiene una grieta. Escribe lo que haces, paso a paso.",
          youCanNow: "completar una lista de inspección antes del turno y sacar de servicio un montacargas inseguro.",
          quickCheck: [
            { objective: "O2", q: "¿Cada cuánto hay que revisar un montacargas antes de usarlo?", options: ["Una vez al mes", "Una vez al año", "Solo cuando se descompone", "Al menos una vez al día, antes de usarlo"], answer: 3, why: "OSHA exige una revisión antes de usarlo, al menos una vez al día, y después de cada turno si trabaja las 24 horas." },
            { objective: "O2", q: "Durante tu revisión, los frenos se sienten débiles. ¿Qué haces?", options: ["Lo uso con cuidado hoy", "Lo reporto, lo etiqueto fuera de servicio y no lo uso", "Arreglo los frenos yo mismo", "Le digo a un compañero que lo use"], answer: 1, why: "Un montacargas inseguro se saca de servicio y se reporta; solo personas autorizadas lo reparan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, el montacargas y la revisión diaria",
        questions: [
          { objective: "O5", q: "Tomaste un curso de montacargas en línea y te dieron una tarjeta. ¿Ya puedes manejar cualquier montacargas en un trabajo nuevo?", options: ["No; el empleador debe capacitarte y evaluarte en su montacargas y su lugar de trabajo", "Sí, la tarjeta es todo lo que necesitas", "Sí, si la tarjeta está enmicada", "Solo los fines de semana"], answer: 0, why: "OSHA exige que el empleador capacite y evalúe a cada operador en el lugar de trabajo." },
          { objective: "O5", q: "¿Cada cuánto, como mínimo, se debe repetir la evaluación de un operador?", options: ["Cada mes", "Cada diez años", "Una vez cada tres años", "Nunca"], answer: 2, why: "OSHA dice que la evaluación de cada operador se hace al menos una vez cada tres años." },
          { objective: "O1", q: "¿Qué hace el contrapeso?", options: ["Sube las horquillas", "Sostiene la bocina", "Protege tu cabeza", "Equilibra la carga que va adelante"], answer: 3, why: "El contrapeso pesado, atrás, equilibra el peso que va en las horquillas." },
          { objective: "O1", q: "¿Dónde encuentras cuánto puede levantar un montacargas?", options: ["En las llantas", "En la placa de datos", "En la bocina", "En el asiento"], answer: 1, why: "La placa de datos muestra la capacidad de carga del montacargas." },
          { objective: "O2", q: "¿Qué revisión se hace con el montacargas encendido?", options: ["Probar los frenos, el volante, la elevación y la inclinación", "Mirar las llantas", "Leer las etiquetas", "Revisar los niveles de líquidos"], answer: 0, why: "Los frenos, el volante, la elevación y la inclinación son pruebas de funcionamiento que se hacen con el montacargas encendido." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cargas, manejo y cómo conseguir el trabajo",
      lessons: [
        {
          title: "Leer la placa de datos y juzgar una carga",
          objectives: ["O3"],
          minutes: 6,
          goal: "Decidir con la placa de datos y el centro de carga si una carga se puede levantar con seguridad.",
          text: [
            "La placa de datos muestra lo máximo que el montacargas puede levantar a cierto centro de carga. El centro de carga es la distancia desde la cara delantera de las horquillas hasta el centro (centro de gravedad) de la carga. Muchos montacargas tienen una capacidad calculada para un centro de carga de 24 pulgadas. Si el centro de la carga queda más lejos, o si el montacargas tiene un accesorio, la capacidad segura es menor: revisa la placa y pregúntale a tu supervisor.",
            "Un montacargas se equilibra como un subibaja sobre sus ruedas delanteras. La carga en las horquillas está de un lado; el montacargas y el contrapeso, del otro. Demasiado peso, una carga demasiado adelante o una carga levantada e inclinada hacia adelante pueden voltear el montacargas hacia adelante. Girar demasiado rápido puede voltearlo de lado.",
            "Levanta solo cargas estables y dentro de la capacidad. Centra la carga entre las horquillas y mete las horquillas debajo de al menos dos tercios del largo de la carga. Levanta un poco, inclina el mástil un poco hacia atrás para que la carga se apoye en el respaldo, y mantenla baja."
          ],
          steps: ["Averigua el peso de la carga (etiqueta, documentos o pregunta).", "Lee la placa de datos: capacidad y centro de carga.", "¿El centro de la carga está dentro del centro de carga? ¿El peso es menor que la capacidad?", "¿La carga está estable, envuelta y sin daños?", "Si es así: céntrala, horquillas al menos dos tercios debajo, levanta un poco, inclina hacia atrás. Si no o si dudas: detente y pregunta."],
          words: [["Capacidad", "el peso máximo que un montacargas puede levantar con seguridad, según la placa de datos."], ["Centro de carga", "la distancia desde el frente de las horquillas hasta el centro de la carga."], ["Centro de gravedad", "el punto donde el peso de un objeto está equilibrado."], ["Vuelco", "cuando un montacargas se cae hacia adelante o de lado."]],
          slides: [
            { title: "La placa de datos te dice", bullets: ["Capacidad: lo máximo que puede levantar", "A un centro de carga, muchas veces de 24 pulgadas", "Carga más adelante = puede levantar menos"] },
            { title: "Como un subibaja", bullets: ["Las ruedas delanteras son el punto de apoyo", "La carga de un lado, el contrapeso del otro", "Demasiado pesada o demasiado adelante: se voltea"] },
            { title: "Levántala bien", bullets: ["Carga estable, dentro de la capacidad", "Centrada, horquillas dos tercios debajo", "Levanta un poco, inclina hacia atrás, mantenla baja"] },
            { title: "¿Dudas? Detente y pregunta", bullets: ["Peso desconocido", "Carga dañada o inclinada", "Los accesorios cambian la capacidad"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Solo práctica, números inventados. La placa de un montacargas dice 4,000 lb (libras) a un centro de carga de 24 pulgadas. Decide sí o no, con una razón: (1) una tarima de 3,200 lb, centrada y envuelta; (2) una caja de 4,600 lb; (3) una carga de 2,500 lb inclinada y rota; (4) una carga de 3,000 lb cuyo centro queda mucho más allá de las 24 pulgadas. Escribe lo que harías en cada caso.",
          youCanNow: "leer una placa de datos, decidir si una carga se puede levantar con seguridad y decir por qué.",
          quickCheck: [
            { objective: "O3", q: "La placa dice 5,000 lb a 24 pulgadas. La carga pesa 5,800 lb. ¿Qué haces?", options: ["La levanto despacio", "Pongo a una persona atrás como peso extra", "No la levanto; le aviso a mi supervisor", "La levanto alto para que se equilibre"], answer: 2, why: "Nunca levantes más de la capacidad indicada; nunca se permiten personas extra montadas." },
            { objective: "O3", q: "¿Qué tanto deben entrar las horquillas debajo de una carga?", options: ["Solo las puntas", "Al menos dos tercios del largo de la carga", "Hasta la siguiente tarima de atrás", "No importa"], answer: 1, why: "La guía de OSHA dice al menos dos tercios del largo de la carga, sin golpear las cargas de atrás." }
          ]
        },
        {
          title: "Manejar, trabajar en el muelle y estacionar con seguridad",
          objectives: ["O4"],
          minutes: 6,
          goal: "Elegir la acción segura al manejar, en el muelle y al estacionar.",
          text: [
            "Desplázate con la carga baja e inclinada hacia atrás, nunca levantada ni inclinada hacia adelante. Maneja a una velocidad que te permita frenar con seguridad, y baja la velocidad en pisos mojados, en las curvas y en los cruces de pasillos. Toca la bocina en los cruces de pasillos y en las esquinas sin visibilidad. Mira hacia donde vas. Si la carga te tapa la vista, maneja en reversa. Mantén unos tres largos de montacargas detrás de otro montacargas.",
            "Personas: nadie se para ni pasa debajo de horquillas levantadas, con carga o sin carga. Nadie viaja montado, a menos que el montacargas tenga un lugar seguro para eso y esté permitido. Nunca manejes hacia alguien que está parado frente a una pared o un estante.",
            "Rampas: ve despacio. Con carga, mantén la carga hacia arriba de la rampa: sube hacia adelante y baja en reversa. Nunca gires en una rampa. Muelles: antes de entrar a un remolque, los frenos del remolque deben estar puestos y sus ruedas traseras calzadas; revisa que el piso del remolque no tenga roturas ni partes débiles; mantente lejos del borde del muelle.",
            "Estacionar: si dejas el montacargas (o estás a 25 pies o más de él, o no lo ves), baja las horquillas por completo, pon los controles en neutral, apágalo y pon el freno; calza las ruedas si está en pendiente. Si un montacargas con asiento empieza a voltearse: no saltes. Quédate en el asiento con el cinturón puesto, agarra el volante, apoya firme los pies e inclínate hacia el lado contrario de la caída."
          ],
          steps: ["Carga baja, inclinada hacia atrás; bocina en los cruces; mira hacia donde vas.", "La carga te tapa la vista: maneja en reversa.", "Rampas: carga hacia arriba, sin girar en la rampa.", "Muelles: frenos del remolque puestos, ruedas calzadas, piso revisado.", "Estacionar: horquillas abajo, neutral, apagado, freno puesto.", "Vuelco: quédate adentro, cinturón puesto, agárrate, inclínate al lado contrario."],
          words: [["Cruce de pasillos", "donde se juntan dos pasillos, como una intersección."], ["Calza", "una cuña que se pone contra una rueda para que el remolque no se mueva."], ["Borde del muelle", "la orilla del muelle de carga donde el piso se acaba."], ["Desatendido", "dejado solo: a 25 pies o más del montacargas, o sin poder verlo."]],
          slides: [
            { title: "Al manejar", bullets: ["Carga baja e inclinada hacia atrás", "Bocina en cruces de pasillos y puntos ciegos", "¿La carga te tapa la vista? Maneja en reversa"] },
            { title: "Personas", bullets: ["Nadie debajo de horquillas levantadas", "Nadie viaja montado", "Nunca atrapes a alguien contra una pared o un estante"] },
            { title: "Rampas y muelles", bullets: ["Carga hacia arriba; sin girar en rampas", "Frenos del remolque puestos y ruedas calzadas", "Revisa el piso del remolque; aléjate del borde"] },
            { title: "Estacionar y vuelco", bullets: ["Horquillas abajo, neutral, apagado, freno puesto", "Si se voltea: quédate adentro, cinturón puesto, inclínate al lado contrario"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Haz una tarjeta de bolsillo con dos listas: \"Antes de entrar a un remolque\" y \"Cuando estaciono\". Luego responde por escrito este caso de práctica: llevas una carga alta que te tapa la vista y tienes que bajar por una rampa. ¿Qué haces?",
          youCanNow: "elegir la acción segura al manejar, en el muelle, en una rampa, al estacionar y si un montacargas empieza a voltearse.",
          quickCheck: [
            { objective: "O4", q: "Un compañero quiere pararse debajo de tus horquillas levantadas para arreglar una etiqueta. ¿Qué le dices?", options: ["\"Adelante, hazlo rápido.\"", "\"Solo si las horquillas están vacías.\"", "\"Solo si usas casco.\"", "\"No. Nadie pasa debajo de horquillas levantadas. Primero las bajo.\""], answer: 3, why: "OSHA prohíbe que alguien se pare o pase debajo de las horquillas levantadas, con carga o sin carga." },
            { objective: "O4", q: "Tu montacargas con asiento empieza a voltearse. ¿Qué haces?", options: ["Me quedo en el asiento, con el cinturón puesto, agarro el volante y me inclino al lado contrario", "Salto rápido", "Me agarro del mástil", "Subo las horquillas"], answer: 0, why: "En un montacargas con asiento, quedarte adentro con el cinturón puesto es la forma de evitar que te aplaste." }
          ]
        },
        {
          title: "Conseguir capacitación y trabajo como operador de montacargas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir un plan para conseguir capacitación y evaluación, y una línea honesta para el currículum.",
          text: [
            "Muchos almacenes, centros de distribución y tiendas contratan personas para trabajo general de almacén y luego las capacitan en montacargas. Algunas agencias de empleo temporal, centros de empleo y colegios comunitarios también dan capacitación en montacargas con práctica real. Pregunta si incluye manejar con un instructor y una evaluación práctica.",
            "Recuerda: donde sea que te capacites, cada empleador nuevo debe asegurarse de que estés capacitado y evaluado para sus montacargas y su lugar de trabajo antes de que manejes solo. La capacitación previa ayuda, y puede que un empleador no tenga que repetir temas que ya aprendiste y en los que ya te evaluaron.",
            "En tu currículum, sé honesto. Si terminaste este curso, escribe que completaste una capacitación de conocimientos de seguridad en montacargas. Si un empleador te capacitó y te evaluó, escribe los tipos de montacargas y el año. Nunca escribas \"certificado\" si no lo estás.",
            "En una entrevista, habla de la inspección antes del turno, la placa de datos y la seguridad de los peatones. Los empleadores buscan operadores que primero son cuidadosos y después rápidos."
          ],
          steps: ["Haz una lista de tres empleadores o programas de tu zona que capaciten operadores de montacargas (lugares de trabajo, centro de empleo, colegio comunitario).", "Pregunta en cada uno: ¿incluye manejo supervisado y una evaluación?", "Escribe una línea honesta para el currículum con lo que has hecho hasta ahora.", "Practica una respuesta de 30 segundos: \"¿Cómo te mantienes seguro en un montacargas?\""],
          words: [["Agencia de empleo temporal", "una empresa que coloca trabajadores en empleos con otros negocios."], ["Centro de empleo", "una oficina pública (muchas veces llamada American Job Center) que ayuda a las personas a encontrar trabajo y capacitación."]],
          slides: [
            { title: "Dónde se capacita", bullets: ["Empleadores que contratan y luego capacitan", "Centros de empleo y colegios comunitarios", "Pregunta: ¿manejo supervisado y una evaluación?"] },
            { title: "Cada empleador te evalúa", bullets: ["Para sus montacargas y su lugar de trabajo", "Antes de que manejes solo"] },
            { title: "Sé honesto en tu currículum", bullets: ["Curso: capacitación de conocimientos de seguridad en montacargas", "Capacitado por un empleador: tipos de montacargas y el año", "Nunca digas \"certificado\" si no lo estás"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Escribe tu plan: tres lugares que podrían capacitarte, la pregunta que le harás a cada uno, una línea honesta para el currículum y tu respuesta de 30 segundos a \"¿Cómo te mantienes seguro en un montacargas?\" Lee la respuesta en voz alta.",
          youCanNow: "escribir un plan para conseguir capacitación y evaluación en montacargas y describir tu capacitación con honestidad en un currículum.",
          quickCheck: [
            { objective: "O5", q: "Terminaste este curso, pero ningún empleador te ha evaluado. ¿Qué línea del currículum es honesta?", options: ["\"Operador de montacargas certificado, todas las clases\"", "\"Completé una capacitación de conocimientos de seguridad en montacargas (Koach Learn), 2026\"", "\"Conductor de montacargas con licencia de OSHA\"", "\"Experto en montacargas, 10 años\""], answer: 1, why: "Dice exactamente lo que hiciste, sin declarar una certificación que no tienes." },
            { objective: "O5", q: "¿Qué debes preguntarle a un programa de capacitación en montacargas?", options: ["Si incluye manejo supervisado y una evaluación práctica", "Si da una tarjeta elegante", "Si puedes saltarte la parte práctica", "Si es el más barato en línea"], answer: 0, why: "La capacitación de OSHA incluye práctica real y una evaluación, así que revisa que el programa las tenga." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cargas, manejo y cómo conseguir el trabajo",
        questions: [
          { objective: "O3", q: "¿Qué es el centro de carga?", options: ["El centro del almacén", "El centro del volante", "La distancia desde la cara de las horquillas hasta el centro de la carga", "La altura del mástil"], answer: 2, why: "El centro de carga se mide desde la cara delantera de las horquillas hasta el centro de gravedad de la carga." },
          { objective: "O3", q: "Una carga está inclinada y su envoltura está rota. ¿Qué haces?", options: ["La levanto rápido", "La levanto alto para ver", "La empujo con las horquillas", "No la levanto; la reporto para que la arreglen o la vuelvan a acomodar"], answer: 3, why: "Solo se deben mover cargas estables y bien acomodadas." },
          { objective: "O4", q: "Tu carga te tapa la vista hacia adelante. ¿Cómo te desplazas?", options: ["En reversa, mirando hacia donde vas", "Hacia adelante, con la carga levantada", "Hacia adelante, más rápido", "Con un compañero montado en las horquillas"], answer: 0, why: "Si la carga te tapa la vista, desplázate con la carga detrás (en reversa)." },
          { objective: "O4", q: "Antes de entrar a un remolque de camión en el muelle, ¿qué se debe hacer?", options: ["Nada", "Abrir las ventanas traseras del remolque", "Poner los frenos del remolque, calzar sus ruedas y revisar el piso", "Tocar la bocina tres veces"], answer: 2, why: "OSHA exige frenos puestos y ruedas calzadas, y revisar el piso del remolque antes de entrar." },
          { objective: "O5", q: "Te cambias a un trabajo que usa otro tipo de montacargas. ¿Qué es cierto?", options: ["Necesitas capacitación y evaluación para el nuevo tipo", "Tu tarjeta anterior cubre todo", "Puedes aprenderlo solo después del horario", "No cambia nada"], answer: 0, why: "Otro tipo de montacargas es una razón para recibir capacitación y evaluación en ese montacargas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos para operador de montacargas",
    questions: [
      { objective: "O5", q: "Según la regla de OSHA, ¿quién certifica que un operador de montacargas fue capacitado y evaluado?", options: ["El operador", "Un sitio web", "El empleador", "El fabricante del montacargas"], answer: 2, why: "El empleador certifica la capacitación y la evaluación del operador." },
      { objective: "O5", q: "¿Cuál es la edad mínima para operar un montacargas en el trabajo?", options: ["16", "18", "14", "21"], answer: 1, why: "Las reglas laborales federales prohíben que trabajadores menores de 18 años operen montacargas." },
      { objective: "O5", q: "¿Cuál es una razón para recibir capacitación de repaso?", options: ["Un casi accidente con un peatón", "Un uniforme nuevo", "Un aumento de sueldo", "Un día feriado"], answer: 0, why: "Un accidente o un casi accidente es una de las razones de OSHA para la capacitación de repaso." },
      { objective: "O1", q: "¿Qué hace la protección superior?", options: ["Sostiene la carga", "Equilibra el montacargas", "Dirige el montacargas", "Protege al operador de objetos que caen"], answer: 3, why: "La protección superior cubre al operador de objetos que caen desde arriba." },
      { objective: "O1", q: "¿De qué parte cuelgan las horquillas?", options: ["Del contrapeso", "Del carro portahorquillas", "De las llantas", "Del asiento"], answer: 1, why: "Las horquillas cuelgan del carro portahorquillas, que sube y baja por el mástil." },
      { objective: "O1", q: "¿De qué clase es un patín eléctrico que se maneja caminando detrás?", options: ["Clase VII", "Clase V", "Clase III", "Clase VI"], answer: 2, why: "La Clase III incluye las carretillas eléctricas manuales, también las que se manejan caminando detrás." },
      { objective: "O2", q: "¿Cuándo se debe revisar un montacargas?", options: ["Antes de usarlo, al menos una vez al día", "Una vez al año", "Solo después de un accidente", "Solo cuando es nuevo"], answer: 0, why: "OSHA exige una revisión antes de usarlo, al menos una vez al día." },
      { objective: "O2", q: "¿Por qué no metes las manos dentro del mástil para revisar las cadenas?", options: ["Porque está sucio", "Porque no es parte de la revisión", "Porque eso lo hace el supervisor", "Porque el mástil se puede mover y aplastarte las manos"], answer: 3, why: "Las partes móviles del mástil pueden aplastar las manos; la guía de OSHA es mirar, o usar un palo para revisar la tensión." },
      { objective: "O2", q: "A un montacargas le falta la placa de datos. ¿Qué haces?", options: ["Adivino la capacidad", "Lo reporto; la placa debe estar en su lugar y legible", "Uso la foto de la placa de otro montacargas", "No le hago caso"], answer: 1, why: "Las placas y marcas deben estar en su lugar y legibles; repórtalo antes de usarlo." },
      { objective: "O2", q: "¿Quién puede reparar un montacargas?", options: ["Solo personas capacitadas y autorizadas", "Cualquier operador", "Cualquiera con herramientas", "El trabajador más nuevo"], answer: 0, why: "Solo personas autorizadas y capacitadas deben hacer reparaciones." },
      { objective: "O3", q: "La placa dice 3,000 lb a 24 pulgadas. ¿Qué carga puedes levantar (solo práctica)?", options: ["Una caja de 3,500 lb", "Una carga de 3,000 lb cuyo centro queda a 40 pulgadas", "Una carga de 1,000 lb rota e inclinada", "Una tarima de 2,400 lb envuelta y centrada"], answer: 3, why: "Está por debajo de la capacidad, es estable y está centrada dentro del centro de carga indicado." },
      { objective: "O3", q: "¿Qué pasa cuando el centro de la carga queda más lejos que el centro de carga indicado?", options: ["El montacargas puede levantar más", "La capacidad segura baja", "No cambia nada", "El montacargas va más rápido"], answer: 1, why: "Un centro de carga más largo hace al montacargas menos estable, así que puede levantar menos." },
      { objective: "O3", q: "Después de levantar un poco una carga, ¿qué haces antes de desplazarte?", options: ["Inclino el mástil un poco hacia atrás para que la carga se apoye en el respaldo", "Lo inclino hacia adelante", "La subo lo más alto que pueda", "Dejo que alguien la sostenga"], answer: 0, why: "Inclinar un poco hacia atrás asienta la carga contra el respaldo." },
      { objective: "O4", q: "¿Cómo debes llevar una carga mientras manejas?", options: ["Alta, para ver", "Inclinada hacia adelante", "Baja e inclinada hacia atrás", "Con una persona sosteniéndola"], answer: 2, why: "Una carga baja e inclinada hacia atrás mantiene estable el montacargas; nunca te desplaces con la carga levantada o inclinada hacia adelante." },
      { objective: "O4", q: "Llegas a un cruce de pasillos donde no ves qué hay en la esquina. ¿Qué haces?", options: ["Acelero para pasar rápido", "Bajo la velocidad y toco la bocina", "Subo las horquillas", "Cierro los ojos y avanzo"], answer: 1, why: "OSHA dice que bajes la velocidad y toques la bocina donde no tienes visibilidad." },
      { objective: "O4", q: "Bajas por una rampa con un montacargas cargado. ¿En qué sentido?", options: ["Hacia adelante, con la carga primero", "De lado", "Me doy la vuelta a mitad de la rampa", "En reversa, para que la carga quede hacia arriba"], answer: 3, why: "Mantén la carga hacia arriba: hacia adelante al subir, en reversa al bajar, y nunca gires en una rampa." },
      { objective: "O4", q: "Te alejas de tu montacargas para tomar un descanso. ¿Qué debes hacer?", options: ["Bajar las horquillas, ponerlo en neutral, apagarlo y poner el freno", "Dejarlo encendido para que esté listo", "Dejar las horquillas arriba", "Pedirle a un compañero que lo cuide"], answer: 0, why: "Un montacargas desatendido tiene las horquillas abajo, los controles en neutral, el motor apagado y el freno puesto." },
      { objective: "O4", q: "¿A qué distancia debes ir detrás de otro montacargas?", options: ["Un pie", "Lo más cerca posible", "Unos tres largos de montacargas", "No importa"], answer: 2, why: "OSHA pide unos tres largos de montacargas entre uno y otro." },
      { objective: "O5", q: "Un sitio web dice que su video en línea te deja \"certificado por OSHA\" en 20 minutos. ¿Qué es cierto?", options: ["Reemplaza la capacitación del empleador", "OSHA vende la tarjeta", "Sirve para cualquier trabajo", "Igual se necesitan la capacitación práctica y la evaluación del empleador"], answer: 3, why: "Solo la capacitación y la evaluación del empleador en el lugar de trabajo cumplen la regla de OSHA." },
      { objective: "O1", q: "¿Qué muestra la placa de datos?", options: ["El modelo del montacargas y cuánto puede levantar", "El nombre del operador", "La dirección del almacén", "El precio del combustible"], answer: 0, why: "La placa de datos muestra el modelo y la información de capacidad." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a revisar.",
    criteria: [
      { name: "Lista de inspección", objective: "O2", notYet: "Faltan revisiones con la llave apagada o encendida, o no hay un paso para un montacargas inseguro.", meets: "Cubre todos los puntos con la llave apagada y encendida para el tipo de montacargas elegido y dice qué hacer con una falla.", exceeds: "Agrega las revisiones extra para montacargas eléctricos o de propano." },
      { name: "Partes nombradas", objective: "O1", notYet: "Menos de seis partes nombradas, o usos equivocados.", meets: "Al menos seis partes nombradas con lo que hace cada una, y la clase del montacargas.", exceeds: "Explica cómo el contrapeso y el respaldo de carga mantienen seguro al operador." },
      { name: "Decisiones de carga", objective: "O3", notYet: "Una carga que pasa la capacidad o que es inestable se marca como segura.", meets: "Las tres decisiones de carga son correctas, con una razón que usa la placa de datos.", exceeds: "Indica cuándo preguntarle al supervisor, por ejemplo con un peso desconocido o un accesorio." },
      { name: "Tarjeta de manejo, muelle y estacionamiento", objective: "O4", notYet: "Falta la revisión del muelle o un paso para estacionar.", meets: "Incluye los pasos del muelle (frenos, calzas, piso) y los cuatro pasos para estacionar.", exceeds: "Agrega las reglas de rampas, peatones y vuelco." },
      { name: "Plan de capacitación y línea del currículum", objective: "O5", notYet: "Dice estar certificado, o dice que no hace falta capacitación del empleador.", meets: "Nombra tres lugares para capacitarse, dice que el empleador debe evaluar y da una línea honesta para el currículum.", exceeds: "Incluye una respuesta de seguridad de 30 segundos practicada para entrevistas." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y un paquete de preparación que cumple la rúbrica",
      "Participantes que empiezan una capacitación en montacargas con un empleador o un programa en 60 días (encuesta de seguimiento)",
      "Participantes contratados en puestos de almacén o de montacargas (informes de socios y de seguimiento)",
      "Los empleadores socios informan de nuevos empleados que aprueban su evaluación práctica la primera vez"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas del eTool de OSHA",
      "Papel y pluma para el dibujo, la lista de inspección y la tarjeta de bolsillo",
      "Opcional: fotos impresas de montacargas y una placa de datos de ejemplo",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Déjalo claro desde el principio: este curso no certifica a nadie; el empleador capacita y evalúa.",
      "No dejes que los participantes practiquen en montacargas reales como parte de este curso. Si tu programa tiene un montacargas de capacitación, la práctica real ocurre solo con un instructor calificado.",
      "Usa placas de datos impresas con números inventados para la práctica de cargas.",
      "Pon atención a participantes menores de 18 años; pueden tomar el curso, pero no pueden operar montacargas en el trabajo.",
      "Califica el paquete de preparación con la rúbrica y revisa una fila en Todavía no a la vez."
    ]
  }
};

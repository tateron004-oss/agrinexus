"use strict";

// Koach Learn course (Spanish translation of africa-life/afr-mother-child-health.js). See scripts/koachlearn-courses/README.md, "Translations".
// No medicine doses, treatment plans or diagnosis, exactly as in the English: every lesson points to the clinic, the midwife and the community health worker.

const WHO_ANC = { name: "OMS: Nuevas directrices sobre la atención prenatal para una experiencia positiva del embarazo (ocho contactos, el primero en las primeras 12 semanas)", url: "https://www.who.int/news/item/07-11-2016-new-guidelines-on-antenatal-care-for-a-positive-pregnancy-experience" };
const WHO_MATERNAL = { name: "OMS, nota descriptiva: Mortalidad materna (causas principales; atención calificada antes, durante y después del parto)", url: "https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" };
const WHO_NEWBORN = { name: "OMS, nota descriptiva: Mortalidad neonatal (cuidados del recién nacido y signos de peligro)", url: "https://www.who.int/news-room/fact-sheets/detail/newborn-mortality" };
const WHO_IYCF = { name: "OMS, nota descriptiva: Alimentación del lactante y del niño pequeño", url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding" };
const WHO_DIARRHOEA = { name: "OMS, nota descriptiva: Enfermedades diarreicas (prevención, cuidados en casa, signos de deshidratación)", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_IMMUNIZATION = { name: "OMS, nota descriptiva: Cobertura de vacunación (qué previenen las vacunas infantiles)", url: "https://www.who.int/news-room/fact-sheets/detail/immunization-coverage" };

module.exports = {
  id: "afr-mother-child-health-es",
  lang: "es",
  translationOf: "afr-mother-child-health",
  category: "Africa: Life and Work",
  name: "Salud de la madre y el niño: embarazo, parto y primeros años",
  skills: "Planificar las visitas a la clínica durante el embarazo, Reconocer los signos de peligro en el embarazo y después del parto, Hacer un plan de parto, Cuidar a un recién nacido en los primeros días, Reconocer los signos de peligro en un bebé o un niño pequeño, Mantener al día la tarjeta de salud del niño",
  outcome: "hacer un plan de salud familiar sencillo para un embarazo y un niño pequeño: cuándo ir a la clínica, dónde nacerá el bebé y cómo llegarán, cómo cuidar al recién nacido, qué signos de peligro significan \"ve a la clínica ahora\" y cómo mantener al día las vacunas y los controles de crecimiento.",
  about: [
    "Este curso es para madres y futuras madres, padres, abuelas, hermanas mayores y cualquier persona que ayude a cuidar a una mujer embarazada o a un niño pequeño, en pueblos y ciudades de toda África. No necesitas ninguna formación en salud.",
    "El capítulo 1 trata del embarazo y el parto: las visitas a la clínica, los signos de peligro que significan \"ve ahora\" y el plan de parto. El capítulo 2 trata de los primeros días y los primeros años del bebé: los cuidados del recién nacido, los signos de peligro en bebés y niños pequeños, y la alimentación, las vacunas y los controles de crecimiento.",
    "Este curso enseña prevención, hábitos saludables y cuándo buscar ayuda. No te dice qué medicina tomar ni cuánta, y no reemplaza a la enfermera, la partera, el médico ni el agente comunitario de salud. Sigue siempre lo que dicen tu clínica y tu ministerio de salud. Cada lección dura unos cinco minutos y termina con una tarea. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Escribe un plan de salud familiar de una página para un embarazo o un niño pequeño de tu familia (o para un ejemplo, como Amina, con 5 meses de embarazo en Kano, o el bebé Kofi, de 3 meses, en Kumasi): las visitas a la clínica que faltan, el plan de parto (lugar, personal de salud calificado, transporte, dinero ahorrado, quién la acompaña y quién cuida la casa), los pasos de cuidado del recién nacido para el primer día, los signos de peligro de la madre y del niño con la clínica más cercana y un número de emergencia, y las próximas fechas de vacunas y de controles de crecimiento según la tarjeta de salud.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Madres y futuras madres, padres, abuelas y otras personas que cuidan, en Kenia, Nigeria, Ghana, Senegal, Costa de Marfil, Egipto y en toda África. Muchas viven lejos de un hospital, usan un teléfono Android sencillo con datos caros y reciben consejos de salud de la familia, los vecinos y el agente comunitario de salud.",
    startingPoint: "La mayoría sabe que las mujeres embarazadas deben ir a la clínica, pero muchas empiezan tarde, van menos veces de lo aconsejado o esperan en casa cuando aparece un signo de peligro. Pocas tienen un plan de parto por escrito, dinero ahorrado para el transporte o una lista de los signos de peligro del recién nacido y del niño. Muchas guardan la tarjeta de salud del niño, pero no leen en ella la fecha de la próxima vacuna.",
    gap: "África subsahariana concentra la mayoría de las muertes del mundo durante el embarazo y el parto, y el primer mes es el momento más peligroso para un bebé. Muchas de estas muertes se deben a retrasos: en decidir ir, en llegar y en recibir atención. Las familias que planifican con tiempo, conocen los signos de peligro y no faltan a las visitas actúan más rápido y protegen mejor a las madres y a los niños.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas; se explica cada palabra de salud",
      "Dispositivos: un teléfono sencillo; el curso también se puede enseñar en voz alta en un grupo o una reunión de mujeres",
      "Los servicios de salud, los programas de maternidad gratuita, los calendarios de vacunación y las tarjetas de salud cambian según el país y con el tiempo: cada persona lo confirma con su clínica o su ministerio de salud",
      "Sin dosis de medicinas, planes de tratamiento ni diagnósticos: el curso enseña prevención y cuándo buscar ayuda",
      "Privacidad: nadie tiene que contar en el grupo detalles de su propio embarazo o de su salud"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "A partir de un embarazo en tu familia y del mes previsto del parto", action: "escribir un plan de visitas a la clínica para el embarazo que empiece en las primeras 12 semanas", standard: "con al menos ocho contactos, como aconseja la OMS, o el número que te indique tu clínica" },
    { id: "O2", condition: "A partir de una lista de signos durante el embarazo o después del parto", action: "señalar los signos de peligro que significan que la mujer debe ir a la clínica ahora", standard: "con al menos 4 de 5 aciertos y eligiendo \"ir ahora\" en lugar de \"esperar a ver\"" },
    { id: "O3", condition: "Para un parto que se acerca", action: "escribir un plan de parto que nombre el centro de salud, el transporte, el dinero ahorrado y las personas que ayudarán", standard: "con todas las partes completas y acordado con la familia antes del último mes" },
    { id: "O4", condition: "Para el primer día de un bebé", action: "enumerar los pasos de cuidado del recién nacido: mantenerlo caliente, darle el pecho en la primera hora y mantener el cordón limpio y seco", standard: "en el orden correcto y sin prácticas dañinas" },
    { id: "O5", condition: "A partir de la descripción de un bebé o un niño pequeño enfermo", action: "identificar los signos de peligro que significan que el niño debe ir a la clínica ahora", standard: "con al menos 4 de 5 aciertos" },
    { id: "O6", condition: "Con la tarjeta o la libreta de salud de un niño", action: "encontrar las próximas fechas de vacunas y de controles de crecimiento y escribir el paso de alimentación para la edad del niño", standard: "sin dejar ninguna visita perdida sin planificar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Un embarazo sano y un parto seguro",
      lessons: [
        {
          title: "Las visitas a la clínica durante el embarazo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir un plan de visitas a la clínica para un embarazo, empezando en las primeras 12 semanas.",
          text: [
            "La atención durante el embarazo se llama atención prenatal. En cada visita, la enfermera o la partera revisa la presión arterial, el peso y la sangre de la madre, escucha al bebé y da la atención que ofrece la clínica de tu país. Muchos problemas se pueden encontrar pronto, antes de que se vuelvan peligrosos.",
            "La OMS (Organización Mundial de la Salud) aconseja al menos ocho contactos con personal de salud durante el embarazo, y el primero en las primeras 12 semanas (los tres primeros meses). Así que, en cuanto una mujer cree que está embarazada, va a la clínica. Tu clínica puede darte su propio calendario; síguelo.",
            "En la primera visita, la clínica suele dar una libreta o tarjeta de salud de la madre y el niño. El nombre cambia según el país (por ejemplo, el Mother and Child Health Handbook de Kenia o el Maternal and Child Health Record Book de Ghana). Guárdala en una bolsa de plástico, llévala a cada visita y anota la próxima fecha en el calendario de tu teléfono.",
            "Los padres y la familia también ayudan: con el dinero del transporte, acompañándola a una visita y dejándola descansar. Pregunta en la clínica o en la oficina de tu seguro de salud si la atención del embarazo es gratuita o está cubierta donde vives; esto cambia, así que pregunta cada vez."
          ],
          steps: ["Ve a la clínica en cuanto creas que estás embarazada, de preferencia en las primeras 12 semanas.", "Pregunta cuántas visitas planea la clínica y cuándo.", "Anota cada fecha en la libreta y en el calendario de tu teléfono.", "Lleva la libreta a cada visita.", "Si faltas a una visita, ve lo antes posible; no esperes a la siguiente."],
          words: [["Atención prenatal", "controles de salud de una mujer durante el embarazo, antes de que nazca el bebé."], ["Contacto", "una visita o encuentro con personal de salud, en la clínica o en casa."], ["Partera", "persona de salud formada que cuida a las mujeres en el embarazo, el parto y después del parto."]],
          slides: [
            { title: "Atención prenatal", bullets: ["Controles de salud durante el embarazo", "Encuentra los problemas a tiempo", "Presión arterial, peso, sangre y el bebé"] },
            { title: "Cuándo ir", bullets: ["Primera visita en las primeras 12 semanas", "La OMS aconseja al menos 8 contactos", "Sigue el calendario de tu propia clínica"] },
            { title: "Guarda la libreta", bullets: ["Llévala a cada visita", "Mantenla seca en una bolsa de plástico", "Anota la próxima fecha en tu teléfono"] },
            { title: "La familia puede ayudar", bullets: ["Dinero para el transporte", "Acompañarla a una visita", "Dejarla descansar"] }
          ],
          sources: [WHO_ANC],
          tryIt: "Piensa en un embarazo de tu familia, o en el ejemplo de Fatou, en Thiès (Senegal), que tiene 10 semanas de embarazo. Escribe el mes de la primera visita y haz una lista con los meses de las siguientes visitas. Al lado de cada una, escribe quién la acompañará.",
          youCanNow: "planificar las visitas a la clínica de un embarazo, empezando pronto, y tener las fechas donde las verás.",
          quickCheck: [
            { objective: "O1", q: "¿Cuándo debe hacer una mujer su primera visita a la clínica en el embarazo?", options: ["Solo cuando el bebé está a punto de nacer", "En los últimos tres meses", "En cuanto cree que está embarazada, de preferencia en las primeras 12 semanas", "Solo si se siente mal"], answer: 2, why: "La OMS aconseja el primer contacto en las primeras 12 semanas, para encontrar los problemas a tiempo." },
            { objective: "O1", q: "¿Cuántos contactos con personal de salud aconseja la OMS durante el embarazo?", options: ["Al menos ocho", "Uno", "Dos", "Ninguno si se siente bien"], answer: 0, why: "La OMS aconseja al menos ocho contactos; tu clínica puede darte su propio calendario." }
          ]
        },
        {
          title: "Signos de peligro en el embarazo y después del parto",
          objectives: ["O2"],
          minutes: 5,
          goal: "Identificar los signos de peligro que significan que una mujer embarazada o una madre reciente debe ir a la clínica ahora.",
          text: [
            "La mayoría de los embarazos van bien. Pero algunos signos significan peligro para la madre o el bebé. Con estos signos, no esperes a ver si pasan y no esperes a la próxima visita. Ve a la clínica o al hospital ahora, de día o de noche.",
            "Signos de peligro en el embarazo: sangrado por la vagina; dolor de cabeza fuerte con la vista borrosa; convulsiones (ataques); hinchazón de la cara y las manos; fiebre; dolor fuerte en la barriga; el bebé se mueve mucho menos o nada; se rompe la fuente antes del trabajo de parto; dificultad para respirar.",
            "Signos de peligro después del parto: sangrado abundante (empapa rápido los paños o las toallas); fiebre; flujo con mal olor; dolor de cabeza fuerte, vista borrosa o convulsiones; dolor o hinchazón en una pierna; sentirse muy triste o incapaz de salir adelante durante muchos días.",
            "El sangrado abundante, las infecciones y la presión arterial alta están entre las principales causas de muerte en el embarazo y el parto, y pueden matar rápido. La rapidez salva vidas. Llama por el camino al agente comunitario de salud o al número de emergencia de tu zona."
          ],
          steps: ["Aprende los signos de peligro y pega la lista en la pared de la casa.", "Si ves uno, deja lo que estás haciendo.", "Ve a la clínica o al hospital ahora con la libreta.", "Llama antes de llegar o llama al agente comunitario de salud por el camino."],
          words: [["Signo de peligro", "una señal de que la madre o el bebé pueden estar en grave peligro y necesitan atención ahora."], ["Convulsiones (ataques)", "sacudidas repentinas del cuerpo que la persona no puede controlar."], ["Flujo", "líquido que sale por la vagina."]],
          slides: [
            { title: "Signo de peligro: ir AHORA", bullets: ["No esperes a ver si pasa", "No esperes a la próxima visita", "De día o de noche"] },
            { title: "En el embarazo", bullets: ["Sangrado, convulsiones, fiebre, dolor fuerte de barriga", "Dolor de cabeza fuerte con vista borrosa; cara o manos hinchadas", "El bebé se mueve mucho menos; la fuente se rompe antes; cuesta respirar"] },
            { title: "Después del parto", bullets: ["Sangrado abundante o fiebre", "Flujo con mal olor", "Dolor de cabeza fuerte, vista borrosa o convulsiones", "Muy triste o sin poder salir adelante durante muchos días"] },
            { title: "La rapidez salva vidas", bullets: ["Lleva la libreta", "Llama al personal de salud por el camino"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Escribe en una hoja los signos de peligro del embarazo y de después del parto, en tu propio idioma si lo prefieres. Añade el nombre de la clínica más cercana y un número de teléfono de emergencia. Pégala en la pared o guarda una foto en tu teléfono.",
          youCanNow: "señalar los signos de peligro en el embarazo y después del parto, y sabes que hay que ir a la clínica enseguida.",
          quickCheck: [
            { objective: "O2", q: "Mariam, en Bouaké, tiene 7 meses de embarazo, un dolor de cabeza fuerte y la vista borrosa. ¿Qué debe hacer?", options: ["Descansar y ver cómo se siente mañana", "Esperar a su próxima visita a la clínica", "Beber más agua y acostarse", "Ir a la clínica o al hospital ahora"], answer: 3, why: "Un dolor de cabeza fuerte con la vista borrosa es un signo de peligro; puede indicar una presión arterial peligrosamente alta." },
            { objective: "O2", q: "¿Cuál es un signo de peligro después del parto?", options: ["Sentirse cansada después del parto", "Un sangrado abundante que empapa rápido los paños", "Querer dormir cuando el bebé duerme", "Tener hambre"], answer: 1, why: "El sangrado abundante después del parto es una causa principal de muerte en las madres y necesita atención ahora." }
          ]
        },
        {
          title: "Hacer un plan de parto",
          objectives: ["O3"],
          minutes: 5,
          goal: "Escribir un plan de parto que nombre el lugar, el transporte, el dinero y las personas que ayudan.",
          text: [
            "Muchos peligros del parto llegan rápido y son difíciles de prever. La atención de personal de salud calificado (una partera, una enfermera o un médico) durante y después del parto salva la vida de madres y bebés. Por eso, el plan más seguro es dar a luz en un centro de salud.",
            "Un plan de parto responde preguntas sencillas antes de que empiece el trabajo de parto: ¿En qué centro de salud? ¿Cómo llegaremos de noche? ¿Quién pagará el transporte y cuánto hemos ahorrado? ¿Quién la acompaña? ¿Quién cuida a los otros niños? ¿Quién podría donar sangre si hiciera falta?",
            "Empieza a ahorrar pronto, un poco cada semana. Por ejemplo, una familia de Kisumu aparta KES 200 por semana y una familia de Tamale aparta GHS 20 por semana (son cantidades de ejemplo; planifica las tuyas). Guarda ya en el teléfono el número del mototaxi (boda boda, okada), del taxi o de la ambulancia.",
            "Prepara una bolsa pequeña en los últimos meses: la libreta de salud, paños limpios, ropa y un gorro para el bebé, y cosas para la madre. Acuerden el plan con toda la familia para que nadie discuta cuando empiece el trabajo de parto."
          ],
          steps: ["Elige el centro de salud y visítalo antes del parto si puedes.", "Organiza el transporte de día y de noche, y guarda los números.", "Ahorra dinero cada semana para el transporte y los gastos.", "Elige quién la acompaña y quién cuida la casa.", "Prepara la bolsa y acuerda el plan con la familia."],
          words: [["Plan de parto", "un plan escrito de dónde y cómo nacerá el bebé y de cómo llegarán allí."], ["Personal de salud calificado", "una partera, una enfermera o un médico formados para atender partos."], ["Trabajo de parto", "los dolores y el esfuerzo del cuerpo que empujan al bebé hacia fuera."]],
          slides: [
            { title: "Por qué un plan de parto", bullets: ["Los peligros del parto pueden llegar rápido", "La atención calificada salva a madres y bebés", "Planifica antes del trabajo de parto"] },
            { title: "El plan responde", bullets: ["¿Qué centro de salud?", "¿Transporte de día y de noche?", "¿Dinero ahorrado?", "¿Quién la acompaña y quién cuida la casa?"] },
            { title: "Ahorra pronto", bullets: ["Un poco cada semana (las cantidades son ejemplos)", "Guarda ya los números del transporte"] },
            { title: "Prepara la bolsa", bullets: ["Libreta de salud", "Paños limpios, ropa y gorro para el bebé", "Cosas para la madre"] }
          ],
          sources: [WHO_MATERNAL],
          tryIt: "Escribe un plan de parto para un embarazo de tu familia, o para Amina, en Kano, que dará a luz dentro de tres meses. Completa: centro de salud, transporte (de día y de noche), ahorro semanal, quién la acompaña, quién cuida la casa y qué lleva la bolsa.",
          youCanNow: "escribir un plan de parto que nombre el lugar, el transporte, el dinero y las personas que ayudan.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es el lugar más seguro para dar a luz?", options: ["En casa, sin nadie formado", "Donde empiece el trabajo de parto", "Un centro de salud con personal de salud calificado", "En el camino, para ganar tiempo"], answer: 2, why: "La atención calificada durante y después del parto salva la vida de madres y recién nacidos." },
            { objective: "O3", q: "¿Cuándo debe la familia acordar el plan de parto?", options: ["Cuando empiece el trabajo de parto", "Antes del último mes de embarazo", "Después de que nazca el bebé", "Solo si hay un problema"], answer: 1, why: "Planificar con tiempo evita retrasos y discusiones cuando empieza el trabajo de parto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Un embarazo sano y un parto seguro",
        questions: [
          { objective: "O1", q: "Salma, en Asiut, cree que tiene 8 semanas de embarazo. ¿Cuál es el mejor paso ahora?", options: ["Ir a la clínica ahora para la primera visita", "Esperar a que el bebé se mueva", "Esperar al último mes", "Preguntar a una vecina en lugar de ir a la clínica"], answer: 0, why: "La OMS aconseja el primer contacto en las primeras 12 semanas." },
          { objective: "O1", q: "¿Por qué hay que llevar la libreta de la madre y el niño a cada visita?", options: ["La clínica la volverá a vender", "Es solo para el padre", "Guarda el registro de los controles y las próximas fechas", "No hace falta después de la primera visita"], answer: 2, why: "La libreta guarda el historial y las fechas de las próximas visitas en un solo lugar." },
          { objective: "O2", q: "¿Cuál de estos es un signo de peligro en el embarazo?", options: ["Tener antojo de ciertos alimentos", "El bebé se mueve mucho menos o nada", "Sentirse un poco cansada", "Tener que orinar más a menudo"], answer: 1, why: "Que el bebé se mueva mucho menos puede significar que está en peligro; hay que ir ahora." },
          { objective: "O2", q: "Akosua tiene fiebre y un flujo con mal olor cinco días después del parto. ¿Qué debe hacer la familia?", options: ["Esperar una semana", "Darle té y que descanse", "Llevarla a la clínica ahora", "Esperar a la visita de vacunas del bebé"], answer: 2, why: "La fiebre y el flujo con mal olor son signos de infección después del parto; necesita atención ahora." },
          { objective: "O3", q: "¿Qué forma parte de un buen plan de parto?", options: ["Números de transporte guardados para el día y la noche", "Esperar a decidir cuando empiece el trabajo de parto", "Gastar primero los ahorros", "No decírselo a la familia"], answer: 0, why: "Tener organizados el transporte, el dinero y las personas que ayudan evita retrasos peligrosos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Los primeros días y los primeros años de tu bebé",
      lessons: [
        {
          title: "Cuidar a un recién nacido en los primeros días",
          objectives: ["O4"],
          minutes: 5,
          goal: "Enumerar los pasos de cuidado del recién nacido para el primer día: calor, lactancia temprana y cordón limpio.",
          text: [
            "Un recién nacido no puede mantenerse caliente solo. Seca al bebé, ponlo piel con piel sobre el pecho de la madre, con un paño que cubra a los dos, y ponle un gorro. Retrasa el primer baño; pregunta al personal de salud cuándo darlo.",
            "Empieza a darle el pecho en la primera hora después del parto. La primera leche, espesa y amarilla (el calostro), es buena para el bebé; no la tires. La OMS aconseja solo leche materna durante los primeros 6 meses: nada de agua, té, agua con glucosa ni otras bebidas o alimentos.",
            "Mantén el cordón limpio y seco. No le pongas nada a menos que el personal de salud te lo indique, y lávate las manos antes de tocarlo. Lávate las manos con jabón antes de dar de comer y después de cambiar al bebé.",
            "Si puedes, quédate en el centro de salud alrededor de un día después del parto, y ve a los controles posparto que planee la clínica, para la madre y para el bebé. Registra el nacimiento y empieza las vacunas que se ponen al nacer."
          ],
          steps: ["Seca al bebé y ponlo piel con piel sobre la madre, tapado y con gorro.", "Dale el pecho en la primera hora.", "Dale solo leche materna.", "Mantén el cordón limpio y seco; lávate las manos antes de tocarlo.", "Ve a los controles posparto; registra el nacimiento; empieza las vacunas."],
          words: [["Recién nacido", "un bebé en sus primeros 28 días."], ["Piel con piel", "sostener al bebé desnudo contra el pecho descubierto de la madre para mantenerlo caliente."], ["Calostro", "la primera leche materna, espesa y amarilla, llena de protección para el bebé."], ["Cordón", "la parte del cordón umbilical que queda en la barriga del bebé después del parto."]],
          slides: [
            { title: "Mantén caliente al bebé", bullets: ["Seca al bebé", "Piel con piel sobre la madre, tapado", "Con gorro; retrasa el primer baño"] },
            { title: "Dale el pecho pronto", bullets: ["En la primera hora", "El calostro es bueno: no lo tires", "Solo leche materna durante 6 meses"] },
            { title: "Mantén limpio el cordón", bullets: ["Limpio y seco", "Nada encima, salvo si lo indica el personal de salud", "Lávate antes las manos"] },
            { title: "Después del parto", bullets: ["Controles para la madre y el bebé", "Registra el nacimiento", "Empieza las vacunas del nacimiento"] }
          ],
          sources: [WHO_NEWBORN, WHO_IYCF],
          tryIt: "Escribe en orden los pasos de cuidado del recién nacido para el primer día, como una lista corta que podrías dar a una madre reciente o a una abuela. Luego escribe una costumbre dañina que hayas oído en tu zona y el paso seguro que la reemplaza.",
          youCanNow: "enumerar los pasos de cuidado del recién nacido para el primer día: calor, lactancia temprana, solo leche materna y cordón limpio.",
          quickCheck: [
            { objective: "O4", q: "¿Cuándo debe empezar la lactancia?", options: ["Después del primer baño del bebé", "Después de tres días", "Cuando la leche se vuelva blanca", "En la primera hora después del parto"], answer: 3, why: "La OMS aconseja empezar en la primera hora; la primera leche protege al bebé." },
            { objective: "O4", q: "Una pariente dice que hay que darle agua al recién nacido porque hace calor. ¿Qué aconseja la OMS?", options: ["Solo leche materna durante los primeros 6 meses", "Agua cada hora", "Agua con azúcar", "Té junto con la leche materna"], answer: 0, why: "La leche materna tiene toda el agua que necesita un bebé menor de 6 meses; otras bebidas pueden llevar microbios." }
          ]
        },
        {
          title: "Signos de peligro en bebés y niños pequeños",
          objectives: ["O5"],
          minutes: 5,
          goal: "Identificar los signos de peligro que significan que un bebé o un niño pequeño debe ir a la clínica ahora.",
          text: [
            "Los bebés y los niños pequeños pueden enfermarse gravemente muy rápido. Algunos signos significan ir a la clínica ahora, no mañana.",
            "En un recién nacido: no se alimenta bien o no puede succionar; está menos activo o flojo; respira rápido o con dificultad; tiene fiebre o está frío; tiene convulsiones.",
            "En un niño pequeño: no puede beber ni tomar el pecho; vomita todo; tiene convulsiones; está muy dormido o cuesta despertarlo; respira rápido o con dificultad; tiene fiebre (en una zona con malaria, hazle la prueba el mismo día); tiene diarrea con sangre, o con los ojos hundidos y el niño muy sediento o muy débil.",
            "Con diarrea, sigue dándole el pecho, bebidas y comida, y pregunta al personal de salud por las sales de rehidratación oral (SRO) y el zinc. Pero si ves un signo de peligro, ve ahora. No uses medicinas del mercado o de una vecina sin el consejo del personal de salud."
          ],
          steps: ["Busca los signos de peligro, también de noche.", "Si ves uno, ve a la clínica ahora con la tarjeta de salud del niño.", "Sigue dándole el pecho y bebidas por el camino.", "Llama al agente comunitario de salud si no puedes llegar."],
          words: [["Convulsiones (ataques)", "sacudidas repentinas que el niño no puede controlar."], ["Deshidratación", "cuando el cuerpo pierde demasiada agua, por ejemplo por diarrea o vómitos."], ["SRO", "sales de rehidratación oral: una bebida de agua limpia, sal y azúcar que repone el agua perdida por la diarrea."]],
          slides: [
            { title: "Ve ahora, no mañana", bullets: ["Los niños se enferman gravemente muy rápido", "Lleva la tarjeta de salud del niño"] },
            { title: "Signos de peligro en el recién nacido", bullets: ["No se alimenta o no succiona", "Flojo o menos activo", "Respira rápido o con dificultad; fiebre o frío; convulsiones"] },
            { title: "Signos de peligro en el niño pequeño", bullets: ["No puede beber ni tomar el pecho; vomita todo", "Convulsiones; muy dormido o cuesta despertarlo", "Respira rápido o con dificultad; fiebre; diarrea con sangre"] },
            { title: "Diarrea", bullets: ["Sigue dándole el pecho y bebidas", "Pregunta al personal de salud por las SRO y el zinc", "Ojos hundidos o muy débil: ve ahora"] }
          ],
          sources: [WHO_NEWBORN, WHO_DIARRHOEA],
          tryIt: "Haz una tarjeta de signos de peligro para bebés y niños pequeños: una columna para los recién nacidos y otra para los bebés mayores y los niños. Añade la clínica más cercana, el número del agente comunitario de salud y cómo llegarías de noche.",
          youCanNow: "reconocer los signos de peligro en un bebé o un niño pequeño y llevarlo a la clínica enseguida.",
          quickCheck: [
            { objective: "O5", q: "Un bebé de 3 semanas en Kumasi deja de succionar y está frío. ¿Qué debe hacer la familia?", options: ["Esperar hasta la mañana", "Darle agua al bebé", "Ir a la clínica ahora", "Darle una medicina del mercado"], answer: 2, why: "No alimentarse y estar frío son signos de peligro en el recién nacido que necesitan atención ahora." },
            { objective: "O5", q: "Un niño de 2 años con diarrea tiene los ojos hundidos y está muy débil. ¿Qué es lo correcto?", options: ["Quitarle todas las bebidas", "Ir a la clínica ahora", "Dejar de darle el pecho", "Esperar tres días"], answer: 1, why: "Los ojos hundidos y la debilidad son signos de deshidratación, que puede matar a un niño; hay que ir ahora." }
          ]
        },
        {
          title: "Alimentación, vacunas y controles de crecimiento",
          objectives: ["O6"],
          minutes: 6,
          goal: "Encontrar en la tarjeta de salud del niño las próximas fechas de vacunas y de controles de crecimiento, y escribir el paso de alimentación para su edad.",
          text: [
            "La tarjeta o libreta de salud del niño muestra las vacunas puestas, las fechas de las próximas vacunas y la curva de crecimiento. Las vacunas protegen contra enfermedades como el sarampión, la polio, la tos ferina, el tétanos y algunos tipos de neumonía y de diarrea. El calendario cambia según el país; sigue tu tarjeta y tu clínica.",
            "En los controles de crecimiento, en la clínica o con el agente comunitario de salud, se pesa y se mide al niño. Una línea de crecimiento que se queda plana o baja es una alerta: pregunta al personal de salud qué hacer.",
            "Alimentación por edad (OMS): solo leche materna durante los primeros 6 meses. Desde alrededor de los 6 meses, añade comida familiar blanda y triturada, y sigue dando el pecho hasta los 2 años o más. Empieza con poca cantidad y poco a poco da más, más espesa y más variada. Los bebés de 6 a 8 meses necesitan 2 a 3 comidas al día; los niños de 9 a 23 meses necesitan 3 a 4 comidas, con 1 a 2 meriendas si hace falta.",
            "Si se pasa la fecha de una vacuna, no te rindas: ve lo antes posible y la clínica pondrá al día al niño. Anota cada próxima fecha en el calendario de tu teléfono."
          ],
          steps: ["Abre la tarjeta de salud del niño.", "Busca la última vacuna y la próxima fecha.", "Busca el último control de crecimiento y mira si la línea sube.", "Escribe el paso de alimentación para la edad del niño.", "Pon las próximas fechas en el calendario de tu teléfono."],
          words: [["Vacuna", "medicina que se da para proteger a un niño de una enfermedad antes de que la contraiga; la clínica la pone según un calendario."], ["Curva de crecimiento", "un gráfico de la tarjeta que muestra el peso del niño a lo largo del tiempo."], ["Alimentación complementaria", "añadir comida familiar desde alrededor de los 6 meses mientras sigue la lactancia."]],
          slides: [
            { title: "La tarjeta de salud del niño", bullets: ["Vacunas puestas y próximas fechas", "Curva de crecimiento", "Llévala a cada visita"] },
            { title: "Vacunas y crecimiento", bullets: ["Sigue el calendario de tu país", "Línea plana o que baja: pregunta al personal de salud", "¿Se pasó una fecha? Ve lo antes posible"] },
            { title: "Alimentación por edad (OMS)", bullets: ["0-6 meses: solo leche materna", "Desde unos 6 meses: comida familiar blanda más leche materna", "6-8 meses: 2-3 comidas; 9-23 meses: 3-4 comidas, 1-2 meriendas"] }
          ],
          sources: [WHO_IMMUNIZATION, WHO_IYCF],
          tryIt: "Tarea final: escribe tu plan de salud familiar de una página. Incluye las visitas a la clínica que faltan, el plan de parto, los pasos del primer día del recién nacido, los signos de peligro de la madre y del niño con la clínica y un número de emergencia, y las próximas fechas de vacunas y de controles de crecimiento según la tarjeta, con el paso de alimentación para la edad del niño.",
          youCanNow: "leer en la tarjeta de salud del niño las próximas fechas de vacunas y de controles de crecimiento, y planificar la alimentación para su edad.",
          quickCheck: [
            { objective: "O6", q: "Al bebé Kofi se le pasó la fecha de su vacuna la semana pasada. ¿Qué debe hacer la familia?", options: ["Esperar al año que viene", "Saltarse esa vacuna", "Empezar de nuevo desde la primera vacuna", "Ir a la clínica lo antes posible para ponerse al día"], answer: 3, why: "La clínica puede poner al día a un niño; ve lo antes posible." },
            { objective: "O6", q: "¿A qué edad, más o menos, empieza un bebé a comer comida familiar además de la leche materna?", options: ["Alrededor de los 6 meses", "2 semanas", "1 mes", "2 años"], answer: 0, why: "La OMS aconseja añadir comida familiar blanda desde alrededor de los 6 meses, sin dejar la lactancia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Los primeros días y los primeros años de tu bebé",
        questions: [
          { objective: "O4", q: "¿Cuál es la mejor manera de mantener caliente a un recién nacido justo después del parto?", options: ["Piel con piel sobre el pecho de la madre, tapado y con gorro", "Un baño frío", "Dejar al bebé destapado", "Poner al bebé en otra habitación"], answer: 0, why: "El contacto piel con piel mantiene caliente al bebé y ayuda a empezar la lactancia." },
          { objective: "O4", q: "¿Qué hay que ponerle al cordón?", options: ["Ceniza o boñiga de vaca", "Nada, salvo si lo indica el personal de salud; mantenerlo limpio y seco", "Mantequilla", "Barro"], answer: 1, why: "Un cordón limpio y seco reduce el riesgo de infección." },
          { objective: "O5", q: "¿Qué signo en un niño pequeño significa ir a la clínica ahora?", options: ["Una tos leve y come con normalidad", "El niño no puede beber ni tomar el pecho", "Le están saliendo los dientes", "Moquea y juega bien"], answer: 1, why: "No poder beber ni tomar el pecho es un signo general de peligro." },
          { objective: "O5", q: "Un niño en Kano respira rápido y con dificultad por la noche. ¿Qué deben hacer los padres?", options: ["Esperar a la clínica de la mañana", "Darle un jarabe para la tos de la tienda", "Ir a la clínica o al hospital ahora", "Frotarle el pecho y esperar"], answer: 2, why: "Respirar rápido o con dificultad puede ser neumonía y necesita atención ahora." },
          { objective: "O6", q: "La línea de crecimiento de la tarjeta lleva dos meses plana. ¿Qué debe hacer el padre o la madre?", options: ["Nada; es normal", "Dejar de ir a la clínica", "Darle solo agua", "Preguntar al personal de salud"], answer: 3, why: "Una línea plana o que baja es una alerta; el personal de salud puede ayudar a averiguar por qué." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud de la madre y el niño: embarazo, parto y primeros años",
    questions: [
      { objective: "O1", q: "La atención a una mujer durante el embarazo se llama:", options: ["Atención prenatal", "Atención posnatal", "Primeros auxilios", "Control de crecimiento"], answer: 0, why: "Prenatal significa antes del nacimiento." },
      { objective: "O1", q: "La OMS aconseja el primer contacto del embarazo:", options: ["En el último mes", "En las primeras 12 semanas", "Solo si hay dolor", "Cuando el bebé se mueva"], answer: 1, why: "Empezar pronto ayuda a encontrar los problemas a tiempo." },
      { objective: "O1", q: "Una mujer embarazada faltó a una visita a la clínica. ¿Qué es lo mejor?", options: ["Esperar al trabajo de parto", "Dejar de ir", "Ir lo antes posible", "Esperar a la visita siguiente"], answer: 2, why: "Ir lo antes posible mantiene su atención al día." },
      { objective: "O2", q: "¿Cuál es un signo de peligro en el embarazo?", options: ["Tener hambre", "Sentir las patadas del bebé", "Sangrado por la vagina", "Querer dormir más"], answer: 2, why: "El sangrado en el embarazo puede significar peligro para la madre y el bebé." },
      { objective: "O2", q: "A una mujer embarazada se le hinchan de repente la cara y las manos y tiene un dolor de cabeza fuerte. Debe:", options: ["Ir a la clínica ahora", "Comer menos sal y esperar", "Esperar a la próxima visita", "Dormir para que se le pase"], answer: 0, why: "Pueden ser signos de una presión arterial peligrosamente alta." },
      { objective: "O2", q: "Dos días después del parto, la madre empapa rápido los paños de sangre. La familia debe:", options: ["Esperar un día", "Darle té", "Llevarla a la clínica ahora", "Pedirle que descanse"], answer: 2, why: "El sangrado abundante después del parto puede matar rápido." },
      { objective: "O2", q: "¿Por qué no hay que \"esperar a ver\" ante un signo de peligro?", options: ["La clínica cierra temprano", "Los signos de peligro pueden empeorar rápido y la rapidez salva vidas", "Esperar es más barato", "Los signos siempre se pasan"], answer: 1, why: "Muchas muertes se deben a retrasos en decidir ir y en llegar." },
      { objective: "O3", q: "¿Qué pregunta va en un plan de parto?", options: ["¿De qué color será la ropa del bebé?", "¿Cómo llegaremos al centro de salud de noche?", "¿Quién cocinará para las visitas?", "¿Cómo se llamará el bebé?"], answer: 1, why: "El transporte, sobre todo de noche, es una parte clave del plan de parto." },
      { objective: "O3", q: "Una familia de Dakar quiere tener dinero listo para el parto. Un buen paso es:", options: ["Ahorrar un poco cada semana, empezando pronto", "Pedir prestado ese mismo día", "Esperar que pague una vecina", "Esperar al trabajo de parto"], answer: 0, why: "Ahorrar pronto hace que el dinero esté listo cuando empiece el trabajo de parto." },
      { objective: "O3", q: "¿Qué va en la bolsa del parto?", options: ["Nada; la clínica lo tiene todo", "Solo dinero", "Comida para toda la familia", "La libreta de salud, paños limpios y ropa para el bebé"], answer: 3, why: "La libreta y las cosas limpias para la madre y el bebé se necesitan en el parto." },
      { objective: "O4", q: "¿Qué es el calostro?", options: ["Una vacuna", "Un tipo de té para bebés", "La primera leche materna, espesa y amarilla", "Una crema para bebés"], answer: 2, why: "El calostro es la primera leche y protege al bebé." },
      { objective: "O4", q: "Durante los primeros 6 meses, la OMS aconseja darle al bebé:", options: ["Leche materna y agua", "Solo leche materna", "Papilla", "Leche de vaca"], answer: 1, why: "Solo leche materna; ninguna otra bebida ni alimento." },
      { objective: "O4", q: "¿Qué paso del primer día es correcto?", options: ["Bañar al bebé en agua fría enseguida", "Poner ceniza en el cordón", "Esperar dos días para darle el pecho", "Secar al bebé y ponerlo piel con piel"], answer: 3, why: "Secarlo y el contacto piel con piel mantienen caliente al recién nacido." },
      { objective: "O5", q: "¿Cuál es un signo de peligro en un recién nacido?", options: ["Dormir entre tomas", "No poder succionar", "Estornudar una vez", "Llorar antes de comer"], answer: 1, why: "Un recién nacido que no puede succionar necesita atención ahora." },
      { objective: "O5", q: "Un niño vomita todo y está muy dormido. La familia debe:", options: ["Esperar a mañana", "Darle una medicina del mercado", "No darle nada de beber", "Ir a la clínica ahora"], answer: 3, why: "Vomitar todo y estar muy dormido son signos generales de peligro." },
      { objective: "O5", q: "Un niño tiene diarrea con sangre. La familia debe:", options: ["Llevar al niño a la clínica", "Quitarle toda la comida y la bebida", "Esperar a que se le pase", "Darle las pastillas de una vecina"], answer: 0, why: "La sangre en las heces es un motivo para buscar atención." },
      { objective: "O5", q: "De camino a la clínica con un niño que tiene diarrea, debes:", options: ["Dejar de darle el pecho", "Seguir dándole el pecho y bebidas", "No darle agua", "Darle solo té fuerte"], answer: 1, why: "Las bebidas y la leche materna reponen el agua perdida." },
      { objective: "O6", q: "¿Dónde encuentras la fecha de la próxima vacuna?", options: ["En la tarjeta de salud del niño", "En la radio", "Preguntando a un vendedor del mercado", "En ningún sitio; la adivinas"], answer: 0, why: "La tarjeta muestra las vacunas puestas y las próximas fechas." },
      { objective: "O6", q: "Según la OMS, ¿cuántas comidas al día, más o menos, debe tener un niño de 10 meses?", options: ["Una", "3 a 4, más 1 a 2 meriendas si hace falta", "Solo leche materna", "Diez"], answer: 1, why: "La OMS aconseja 3 a 4 comidas de los 9 a los 23 meses, más meriendas si hace falta." },
      { objective: "O6", q: "¿Hasta qué edad aconseja la OMS seguir dando el pecho?", options: ["3 meses", "6 meses", "1 año exacto", "2 años o más"], answer: 3, why: "La lactancia sigue junto con la comida familiar hasta los 2 años o más." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 6, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Visitas a la clínica", objective: "O1", notYet: "No hay fechas de visitas, o la primera visita es tarde en el embarazo.", meets: "Enumera las visitas que faltan, con la primera en las primeras 12 semanas, anotadas en la libreta o en el teléfono.", exceeds: "También dice quién la acompaña a cada visita y cómo se paga." },
      { name: "Plan de parto", objective: "O3", notYet: "Falta uno o más de estos: lugar, transporte, dinero o personas que ayudan.", meets: "Nombra el centro de salud, el transporte de día y de noche, el ahorro semanal, quién la acompaña y quién cuida la casa.", exceeds: "Además tiene guardados los números de transporte, la bolsa preparada y el plan acordado con la familia." },
      { name: "Primer día del recién nacido", objective: "O4", notYet: "Faltan pasos, están desordenados o incluyen una práctica dañina.", meets: "Calor (piel con piel), pecho en la primera hora, solo leche materna y cordón limpio y seco.", exceeds: "También nombra una costumbre dañina local y el paso seguro que la reemplaza." },
      { name: "Signos de peligro", objective: "O2", notYet: "La lista deja fuera signos clave o dice que hay que esperar a ver.", meets: "Enumera los principales signos de peligro de la madre y del niño, con la clínica más cercana y un número de emergencia.", exceeds: "También incluye el transporte de noche y el número del agente comunitario de salud." },
      { name: "Signos de peligro en el niño", objective: "O5", notYet: "Faltan los signos de peligro del niño o se mezclan con signos normales.", meets: "Enumera los signos de peligro del recién nacido y del niño pequeño que significan ir ahora.", exceeds: "Los explica con tanta claridad que una abuela o un hermano mayor podría usarlos." },
      { name: "Tarjeta, vacunas y alimentación", objective: "O6", notYet: "No hay próximas fechas, o el consejo de alimentación no corresponde a la edad del niño.", meets: "Da las próximas fechas de vacunas y de controles de crecimiento según la tarjeta y el paso de alimentación correcto para la edad.", exceeds: "Las fechas están en el calendario del teléfono con recordatorios." }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes embarazadas o familiares que hacen la primera visita a la clínica en las primeras 12 semanas (encuesta de seguimiento a los 30 días)",
      "Familias que dicen tener un plan de parto por escrito, con dinero ahorrado y el transporte organizado",
      "Niños cuyas próximas visitas de vacunas y de controles de crecimiento se cumplen a tiempo, según los participantes o las clínicas asociadas",
      "Los agentes comunitarios de salud asociados dicen que las familias llegan antes cuando aparece un signo de peligro"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono sencillo, o una sesión en grupo donde las lecciones se leen en voz alta",
      "La libreta de salud de la madre y el niño o la tarjeta de salud del niño, si la familia tiene una",
      "Papel y bolígrafo para las tarjetas de signos de peligro, el plan de parto y el plan de salud familiar",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Buenos aliados: agentes comunitarios de salud, parteras de la clínica, grupos de mujeres, grupos de ahorro y grupos de fe; invita a una partera o una enfermera para responder preguntas.",
      "Nunca pidas a los participantes que cuenten en el grupo su propio embarazo, su estado de VIH u otros detalles de salud; usa en su lugar los ejemplos del curso.",
      "No des dosis de medicinas ni consejos de tratamiento; envía todas esas preguntas a la clínica.",
      "Confirma los datos locales antes de la sesión: el centro de salud más cercano, los números de emergencia, el calendario local de vacunación y si la atención de maternidad es gratuita o está cubierta.",
      "Invita a los padres y a las abuelas: la decisión de ir a la clínica la suele tomar la familia.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};

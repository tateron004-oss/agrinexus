"use strict";

// Koach Learn course (Spanish translation of shared/mental-health-stress.js). See scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English: coping skills and how and when to get help; never diagnoses. The 988 Lifeline offers help in Spanish by call, text and chat.

module.exports = {
  id: "mental-health-stress-es",
  lang: "es",
  translationOf: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Salud mental y manejo del estrés",
  skills: "Reconocer tus señales de estrés, Calmar tu cuerpo con la respiración y el anclaje, Crear hábitos de sueño y movimiento, Pedirle apoyo a alguien, Reconocer señales de alerta y buscar ayuda en una crisis, Escribir un plan personal para afrontar el estrés",
  outcome: "notar a tiempo tus propias señales de estrés, calmar tu cuerpo en pocos minutos con la respiración y el anclaje, mantener hábitos diarios que protegen tu ánimo, pedir apoyo, reconocer señales de alerta en ti o en otra persona y saber exactamente a quién llamar cuando es grave, incluido el 988 en Estados Unidos.",
  about: [
    "Todos sentimos estrés: una madre o un padre con cuentas por pagar, un agricultor que espera la lluvia, un jugador antes de un partido importante, un veterano que vuelve a casa, alguien que acaba de salir de prisión y busca trabajo, una abuela que cuida a su esposo, una dueña de negocio en un mes flojo. El estrés es normal. Demasiado estrés por mucho tiempo puede dañar tu sueño, tu cuerpo, tu trabajo y a las personas que te rodean.",
    "Este curso enseña habilidades que puedes usar hoy: cómo notar el estrés a tiempo, calmar tu cuerpo rápido, crear hábitos que te protegen, hablar con alguien y reconocer las señales de que es momento de buscar más ayuda. No diagnostica nada y no reemplaza a un médico, consejero o terapeuta. Te ayuda a saber cuándo y cómo buscar uno.",
    "Si estás en peligro ahora mismo o piensas en quitarte la vida: en Estados Unidos, llama o envía un mensaje de texto al 988 (la Línea 988 de Prevención del Suicidio y Crisis). Hay ayuda en español por llamada, texto y chat. Los veteranos y los miembros del servicio militar pueden llamar al 988 y marcar 1. Fuera de Estados Unidos, llama a la línea de crisis o al número de emergencias de tu país. No tienes que terminar este curso primero.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe tu plan personal de una página para afrontar el estrés: tres de tus propias señales tempranas de estrés, dos habilidades para calmarte que hayas practicado, dos hábitos diarios que vas a mantener, dos personas con quienes puedes hablar (y cómo contactarlas), un lugar donde buscar ayuda profesional y los números de crisis de donde vives (988 en Estados Unidos; 988 y luego 1 para veteranos). Guárdalo en tu teléfono y en papel.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y adolescentes mayores de todo origen que sienten estrés: madres y padres, personas mayores y cuidadores, agricultores, deportistas, veteranos, personas que vuelven a casa después de la prisión y dueños de pequeños negocios.",
    startingPoint: "Saben cómo se siente el estrés y tienen sus propias formas de afrontarlo, algunas útiles y otras no. Muchos no han nombrado sus señales tempranas de estrés, no han practicado una habilidad para calmarse ni han guardado los números de crisis.",
    gap: "Demasiado estrés durante mucho tiempo daña el sueño, la salud, el trabajo y las relaciones, y algunas personas no conocen las señales de que es hora de buscar más ayuda. Necesitan habilidades sencillas para notar y calmar el estrés, pedir apoyo y llegar rápido a la ayuda en crisis, escritas en un plan que puedan usar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "No es diagnóstico ni tratamiento; el curso dirige a médicos, consejeros y líneas de crisis",
      "La seguridad primero: los números de crisis (988 en Estados Unidos, 988 y luego 1 para veteranos, o la línea de crisis local) se dan antes de cualquier lección",
      "Privacidad: cada persona guarda para sí su registro de estrés y su plan, salvo que decida compartirlos",
      "Tiempo: lecciones de unos cinco minutos; algunas personas pueden estar pasando por un momento difícil"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Después de llevar un registro de estrés durante un día", action: "nombrar tres de tus propias señales tempranas de estrés en tu cuerpo, tus pensamientos, tus sentimientos o tus acciones", standard: "con cada señal escrita con tus propias palabras" },
    { id: "O2", condition: "Cuando sientes que el estrés crece", action: "usar la respiración cuadrada y el anclaje 5-4-3-2-1 para calmar tu cuerpo", standard: "calificando tu estrés de 0 a 10 antes y después" },
    { id: "O3", condition: "Para la próxima semana", action: "elegir dos hábitos diarios pequeños de sueño, movimiento, comida o personas y planificar cuándo los harás", standard: "con una hora o un recordatorio fijado para cada uno" },
    { id: "O4", condition: "Con una persona de confianza", action: "empezar una conversación que diga lo que te pasa y lo que necesitas", standard: "usando tus propias dos primeras frases" },
    { id: "O5", condition: "Ante señales de crisis en ti o en otra persona", action: "reconocer las señales de alerta de suicidio y contactar la ayuda de crisis correcta", standard: "con los números de crisis guardados en tu teléfono y listas las palabras para preguntar de forma directa" },
    { id: "O6", condition: "Usando lo que practicaste en este curso", action: "escribir un plan personal de una página para afrontar el estrés", standard: "con las seis partes, guardado en tu teléfono y en papel" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Notar y calmar el estrés",
      lessons: [
        {
          objectives: ["O1"],
          title: "Reconocer tus propias señales de estrés",
          minutes: 5,
          goal: "Nombrar tres señales tempranas de que el estrés está creciendo en ti.",
          text: [
            "El estrés es la alarma de tu cuerpo. Acelera tu corazón y tu respiración para que puedas enfrentar un desafío. Un poco de estrés puede ayudarte a concentrarte antes de un examen, un partido o una entrevista de trabajo. El problema es cuando la alarma se queda encendida por días o semanas.",
            "El estrés aparece en cuatro lugares. En tu cuerpo: hombros tensos, dolores de cabeza, malestar de estómago, el corazón acelerado. En tus pensamientos: preocupaciones que dan vueltas, dificultad para concentrarte, esperar lo peor. En tus sentimientos: mal genio, tristeza, sentirte vacío o al límite. En tus acciones: dormir mucho o muy poco, comer distinto, beber o fumar más, alejarte de la gente.",
            "Las señales de cada persona son diferentes. Un entrenador puede notar que les grita a sus jugadores. Una abuela puede notar que no puede dormir. Si aprendes tus propias señales tempranas, puedes actuar antes de que el estrés crezca."
          ],
          steps: ["Piensa en la última vez que te sentiste muy estresado.", "Pregúntate: ¿qué sentí en el cuerpo, qué pensé, qué sentí y qué hice?", "Escribe las primeras señales que notaste.", "Elige tus tres principales. Son tus luces de alerta temprana."],
          words: [["Estrés", "la reacción del cuerpo y la mente ante la presión o un desafío."], ["Señal", "algo que te avisa que está pasando algo, como una luz de advertencia en un auto."]],
          slides: [
            { title: "El estrés es la alarma de tu cuerpo", bullets: ["Un poco puede ayudarte a concentrarte", "Demasiado, por mucho tiempo, te desgasta"] },
            { title: "Dónde aparece el estrés", bullets: ["Cuerpo: hombros tensos, dolor de cabeza, corazón acelerado", "Pensamientos: preocupaciones que dan vueltas, poca concentración", "Sentimientos: mal genio, tristeza, estar al límite", "Acciones: sueño, comida, bebida, alejarte de la gente"] },
            { title: "Conoce tus señales tempranas", bullets: ["Las de cada persona son diferentes", "Detéctalas a tiempo, actúa a tiempo", "Elige tus tres principales"] }
          ],
          tryIt: "Lleva un registro rápido de estrés durante un día. Tres veces hoy (mañana, tarde y noche), escribe tu nivel de estrés del 0 al 10 y una cosa que notaste en tu cuerpo, tus pensamientos, tus sentimientos o tus acciones. Encierra en un círculo tus tres señales principales.",
          youCanNow: "nombrar tus propias señales tempranas de estrés en tu cuerpo, tus pensamientos, tus sentimientos y tus acciones.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una señal de estrés en tu cuerpo?", options: ["Hombros tensos o la mandíbula apretada", "Sentirte descansado después de dormir", "Reírte con un amigo", "Disfrutar una comida"], answer: 0, why: "Los músculos tensos son una señal temprana común del estrés en el cuerpo." },
            { objective: "O1", q: "Notas que esta semana le contestas mal a tu familia casi todas las noches. ¿Qué harías?", options: ["Ignorarlo; a todos les pasa", "Escribirlo en tu registro de estrés como una posible señal", "Dejar de hablar con tu familia", "Esperar a que empeore"], answer: 1, why: "Notar y anotar las señales te ayuda a actuar antes de que el estrés crezca." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Calmar tu cuerpo rápido: respiración y anclaje",
          minutes: 5,
          goal: "Usar la respiración lenta y un ejercicio de anclaje para calmarte en pocos minutos.",
          text: [
            "Cuando llega el estrés, respirar despacio le dice a tu cuerpo que está a salvo y que puede bajar la alarma. Un método fácil es la respiración cuadrada: inhala contando hasta 4, aguanta 4, exhala 4, aguanta 4. Repite cuatro veces. Si aguantar el aire te cuesta, solo haz que la exhalación sea más larga que la inhalación, por ejemplo inhala en 4 y exhala en 6.",
            "El anclaje trae tu mente de vuelta al presente cuando la preocupación se adelanta. Prueba el 5-4-3-2-1: nombra 5 cosas que ves, 4 cosas que puedes tocar, 3 cosas que oyes, 2 cosas que hueles y 1 cosa que saboreas. Puedes hacerlo en cualquier lugar: en el autobús, antes de una reunión, en el vestuario, en una sala de espera.",
            "Estas habilidades funcionan mejor con práctica. Pruébalas cuando estés tranquilo, para que estén listas cuando las necesites. Hay aplicaciones gratis que pueden guiarte, pero no necesitas ninguna. Si los ejercicios de respiración te marean, detente y respira normalmente."
          ],
          steps: ["Nota una señal de estrés.", "Respiración cuadrada: inhala 4, aguanta 4, exhala 4, aguanta 4. Repite cuatro veces.", "Si la preocupación sigue: haz el anclaje 5-4-3-2-1.", "Vuelve a medir tu nivel de estrés del 0 al 10."],
          words: [["Respiración cuadrada", "inhalar, aguantar, exhalar y aguantar, cada paso con la misma cuenta, casi siempre 4."], ["Anclaje", "usar tus sentidos para traer tu atención de vuelta al momento presente."]],
          slides: [
            { title: "Respiración cuadrada", bullets: ["Inhala contando 4", "Aguanta 4", "Exhala 4, aguanta 4", "Repite cuatro veces"] },
            { title: "Versión más fácil", bullets: ["Haz la exhalación más larga que la inhalación", "Inhala en 4, exhala en 6", "¿Te mareas? Detente y respira normalmente"] },
            { title: "Anclaje 5-4-3-2-1", bullets: ["5 cosas que ves, 4 que puedes tocar", "3 que oyes, 2 que hueles, 1 que saboreas", "Funciona en cualquier lugar: autobús, vestuario, sala de espera"] },
            { title: "Practica cuando estés tranquilo", bullets: ["Así estará lista cuando la necesites", "No necesitas ninguna aplicación"] }
          ],
          sources: [{ name: "Instituto Nacional de Salud Mental (NIMH): hoja informativa sobre el estrés (en inglés)", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Mide tu estrés del 0 al 10. Haz cuatro rondas de respiración cuadrada y luego una ronda de anclaje 5-4-3-2-1. Vuelve a medir tu estrés y anota los dos números.",
          youCanNow: "calmar tu cuerpo en pocos minutos con la respiración lenta y traer tu mente de vuelta con el anclaje.",
          quickCheck: [
            { objective: "O2", q: "¿Para qué te sirve el anclaje 5-4-3-2-1?", options: ["Para dormirte al instante", "Para contar tu dinero", "Para traer tu mente al presente usando tus sentidos", "Para recordar tu número de teléfono"], answer: 2, why: "El anclaje usa tus cinco sentidos para traer tu atención de vuelta al presente." },
            { objective: "O2", q: "Sientes el corazón acelerado antes de una llamada difícil. ¿Qué harías?", options: ["Aguantar la respiración todo lo que puedas", "Hacer unas cuantas rondas de respiración cuadrada y luego hacer la llamada", "Tomar tres tazas de café", "Cancelar todas las llamadas de la semana"], answer: 1, why: "La respiración cuadrada lenta puede calmar tu cuerpo en pocos minutos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hábitos diarios que te protegen: sueño, movimiento, comida y personas",
          minutes: 5,
          goal: "Elegir dos hábitos diarios pequeños que hacen el estrés más fácil de manejar.",
          text: [
            "La respiración ayuda en el momento. Los hábitos ayudan todos los días. Los CDC (la agencia de salud pública de Estados Unidos) dicen que la mayoría de los adultos necesita 7 horas o más de sueño por noche, y los adolescentes de 13 a 17 años, de 8 a 10. Buenos hábitos de sueño: acostarte y levantarte a la misma hora, mantener el cuarto oscuro, tranquilo y fresco, dejar las pantallas unos 30 minutos antes de dormir y limitar la cafeína en la tarde y el alcohol cerca de la hora de dormir.",
            "El movimiento quema el estrés. Los CDC dicen que los adultos necesitan unos 150 minutos de actividad moderada por semana, por ejemplo 30 minutos 5 días, más ejercicios para fortalecer los músculos 2 días. Una caminata a paso rápido cuenta. Atletas: los días de descanso y el sueño también son parte del entrenamiento. Comer a horas regulares y tomar suficiente agua también estabilizan tu ánimo.",
            "Las personas te protegen. Pasar tiempo con alguien que te hace sentir mejor, aunque sea una llamada corta, baja el estrés. Escribir en un diario y limitar las noticias y las redes sociales cuando te alteran también ayudan. Empieza poco a poco: un hábito que mantienes vale más que cinco que abandonas."
          ],
          steps: ["Mira tu registro de estrés de la lección 1.", "Elige dos hábitos: uno de sueño o movimiento, y otro de personas o descanso.", "Haz que cada uno sea pequeño y concreto (\"caminar 15 minutos después del almuerzo\").", "Hazlos durante una semana y nota la diferencia."],
          words: [["Hábito", "algo que haces tan seguido que se vuelve automático."], ["Actividad moderada", "movimiento que te hace respirar más fuerte pero todavía te deja hablar, como caminar a paso rápido."]],
          slides: [
            { title: "Sueño", bullets: ["Adultos: 7 horas o más; adolescentes de 13 a 17: de 8 a 10 horas", "Misma hora para acostarte y levantarte", "Deja las pantallas unos 30 minutos antes de dormir"] },
            { title: "Movimiento", bullets: ["Adultos: unos 150 minutos por semana", "Ejemplo: 30 minutos, 5 días", "Una caminata a paso rápido cuenta"] },
            { title: "Comida, agua y personas", bullets: ["Comidas regulares y suficiente agua", "Habla con alguien que te levanta el ánimo", "Tómate descansos de las noticias que te alteran"] },
            { title: "Empieza poco a poco", bullets: ["Elige dos hábitos", "Hazlos concretos", "Pruébalos durante una semana"] }
          ],
          sources: [
            { name: "CDC: Acerca del sueño (en inglés)", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC: Pautas de actividad física para adultos (en inglés)", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Escribe dos hábitos pequeños para esta semana, uno de sueño o movimiento y otro de personas o descanso, con el momento en que los harás. Pon un recordatorio en tu teléfono o anótalos en tu calendario.",
          youCanNow: "elegir y programar hábitos diarios pequeños de sueño, movimiento y contacto con otros que te protegen del estrés.",
          quickCheck: [
            { objective: "O3", q: "¿Qué meta de hábito es la más fácil de mantener?", options: ["\"Estar más sano\"", "\"No volver a sentir estrés nunca\"", "\"Hacer ejercicio dos horas todos los días a partir de hoy\"", "\"Llamar a mi hermana los domingos por la tarde\""], answer: 3, why: "Los hábitos pequeños y concretos con una hora fija son más fáciles de mantener." },
            { objective: "O3", q: "Sueles mirar el teléfono en la cama hasta tarde. ¿Qué hábito pequeño probarías?", options: ["Guardar el teléfono unos 30 minutos antes de dormir", "Usar más el teléfono para cansarte", "Dormir con la tele prendida", "Quedarte despierto más tarde entre semana"], answer: 0, why: "Dejar las pantallas antes de dormir es un consejo de sueño que enseña esta lección." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Notar y calmar el estrés",
        questions: [
          { objective: "O1", q: "¿Cuál de estas es una señal temprana de estrés en tus acciones?", options: ["Dormir mucho menos de lo normal", "Sentir el sol en la cara", "Comer tu almuerzo de siempre", "Reírte de un chiste"], answer: 0, why: "Los cambios en el sueño, la comida, la bebida o alejarte de la gente son señales de estrés en tus acciones." },
          { objective: "O2", q: "¿Qué es la respiración cuadrada?", options: ["Respirar dentro de una bolsa de papel", "Aguantar la respiración todo lo que puedas", "Inhalar, aguantar, exhalar y aguantar, cada paso contando unos 4", "Respirar rápido para despertarte"], answer: 2, why: "La respiración cuadrada usa cuatro cuentas iguales para calmar tu cuerpo." },
          { objective: "O2", q: "Tu mente va a mil antes de una entrevista de trabajo. ¿Qué habilidad de anclaje sirve?", options: ["Revisar las redes sociales", "Nombrar 5 cosas que ves, 4 que puedes tocar, 3 que oyes, 2 que hueles y 1 que saboreas", "Tomar tres cafés", "Repasar todos tus errores pasados"], answer: 1, why: "El 5-4-3-2-1 trae tu atención de vuelta al presente." },
          { objective: "O3", q: "Según los CDC, ¿cuánto sueño necesita la mayoría de los adultos?", options: ["4 horas", "5 horas", "6 horas", "7 horas o más"], answer: 3, why: "Los CDC dicen que los adultos necesitan 7 horas o más por noche." },
          { objective: "O3", q: "¿Qué meta de hábito es la más fácil de mantener?", options: ["\"Ser más sano\"", "\"No volver a sentir estrés nunca\"", "\"Correr un maratón la próxima semana\"", "\"Caminar 15 minutos después del almuerzo de lunes a viernes\""], answer: 3, why: "Los hábitos pequeños y concretos son más fáciles de empezar y mantener." }
        ]
      }
    },
    {
      name: "Capítulo 2: Buscar apoyo y ayudar a otros",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hablar con alguien y pedir ayuda",
          minutes: 5,
          goal: "Empezar una conversación para pedirle apoyo a una persona de confianza.",
          text: [
            "Mucha gente espera demasiado para hablar porque se siente débil, siente vergüenza o no quiere ser una carga. Pedir ayuda es una habilidad, no una debilidad. Los entrenadores, los soldados, los agricultores y los dueños de negocios dependen de un equipo.",
            "Con quién puedes hablar: un amigo o un familiar, un líder religioso, un entrenador, un mentor o padrino, un administrador de casos o consejero de reinserción, un maestro o consejero escolar, tu médico, o un consejero o terapeuta. Tu médico puede revisar si hay causas de salud y ayudarte a encontrar atención de salud mental. En Estados Unidos, la Línea Nacional de Ayuda de SAMHSA (1-800-662-4357; SAMHSA es la agencia federal de salud mental y uso de sustancias) es una línea gratuita, confidencial y abierta las 24 horas que orienta sobre salud mental y uso de sustancias, con atención en español; te conecta con tratamiento y grupos de apoyo locales, pero no da consejería. Los veteranos también pueden preguntarle a su equipo de salud del VA (el Departamento de Asuntos de Veteranos).",
            "Cómo empezar: elige un momento tranquilo, dilo de forma sencilla y di lo que necesitas. Por ejemplo: \"Últimamente he estado muy estresado y no duermo bien. ¿Puedo hablar contigo unos minutos? Sobre todo necesito que me escuches.\" Un chatbot de IA puede ayudarte a practicar las palabras, pero no es un consejero. No escribas datos privados en él y, en una crisis, busca a una persona real."
          ],
          steps: ["Elige a una persona de confianza.", "Escoge un momento y un lugar tranquilos.", "Di lo que está pasando en una o dos frases.", "Di lo que necesitas: que te escuche, un consejo, ayuda con una tarea o ayuda para encontrar a un profesional."],
          words: [["Consejero o terapeuta", "un profesional capacitado que ayuda a las personas con el estrés, los sentimientos y la salud mental."], ["Referencia", "cuando te orientan o te envían al servicio o profesional adecuado."], ["Confidencial", "que se mantiene en privado."]],
          slides: [
            { title: "Pedir ayuda es una habilidad", bullets: ["No es una debilidad", "Los equipos ganan: entrenadores, unidades, familias, cooperativas"] },
            { title: "Personas con quienes puedes hablar", bullets: ["Amigo, familia, líder religioso, entrenador, mentor", "Administrador de casos, maestro, consejero escolar", "Tu médico, un consejero o terapeuta"] },
            { title: "Encontrar atención en Estados Unidos", bullets: ["Línea de SAMHSA: 1-800-662-4357, gratis, las 24 horas", "Te orienta hacia tratamiento y grupos de apoyo locales", "Veteranos: pregunten a su equipo de salud del VA"] },
            { title: "Cómo empezar", bullets: ["Momento tranquilo, palabras sencillas", "\"He estado muy estresado. ¿Podemos hablar?\"", "Di lo que necesitas"] }
          ],
          sources: [{ name: "Línea Nacional de Ayuda de SAMHSA", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Escribe las dos primeras frases que le dirías sobre tu estrés a una persona de confianza, incluido lo que necesitas de ella. Si te sientes listo, envía el mensaje o ten esa conversación esta semana.",
          youCanNow: "elegir a una persona con quien hablar, empezar la conversación con palabras sencillas y decir qué tipo de apoyo necesitas.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál es una buena primera frase para pedir apoyo?", options: ["\"Olvídalo, no es nada.\"", "\"Tú nunca me ayudas.\"", "\"Últimamente he estado muy estresado y me gustaría hablar unos minutos.\"", "\"Arregla mis problemas.\""], answer: 2, why: "Decir de forma sencilla lo que pasa y lo que necesitas abre la puerta a la ayuda." },
            { objective: "O4", q: "Te sientes estresado y usas un chatbot de IA por la noche. ¿Qué harías si empiezas a sentirte en peligro?", options: ["Seguir hablando solo con el chatbot", "Buscar a una persona real, como el 988 en Estados Unidos o tu línea de crisis local", "Apagar el teléfono y esperar", "Buscar más datos sobre el estrés"], answer: 1, why: "Un chatbot puede ayudarte a practicar las palabras, pero en una crisis buscas a una persona real." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Señales de alerta y cómo buscar ayuda en una crisis",
          minutes: 6,
          goal: "Reconocer señales de alerta graves en ti o en otra persona y saber a quién llamar.",
          text: [
            "A veces el estrés se convierte en algo más grave. El Instituto Nacional de Salud Mental de Estados Unidos (NIMH) menciona señales de alerta de suicidio, entre ellas: hablar de querer morir, sentirse sin esperanza o atrapado, sentirse una carga, buscar formas de morir, regalar cosas importantes o despedirse, alejarse de la gente, beber más alcohol o usar más drogas, cambios fuertes de ánimo y cambios grandes en el sueño o la comida. Las señales nuevas o que empeoran necesitan ayuda rápido.",
            "Si ves señales en otra persona: pregúntale de forma directa y con calma: \"¿Estás pensando en suicidarte?\" Preguntar no le mete la idea en la cabeza. Escucha sin juzgar, quédate con ella y ayúdala a conectarse con ayuda. Si alguien está en peligro inmediato, llama a tu número de emergencias (911 en Estados Unidos).",
            "Ayuda en crisis en Estados Unidos: llama o envía un mensaje de texto al 988, o chatea en 988lifeline.org, para comunicarte con la Línea 988 de Prevención del Suicidio y Crisis. Es gratis, confidencial y está abierta las 24 horas, todos los días, con ayuda en español por llamada, texto y chat. Veteranos, miembros del servicio militar y sus familias: llamen al 988 y marquen 1, o envíen un texto al 838255, para la Línea de Crisis para Veteranos; no hace falta estar inscrito en la atención del VA. Fuera de Estados Unidos, llama a la línea de crisis o al número de emergencias de tu país; guárdalo hoy en tu teléfono.",
            "Busca ayuda también (con tu médico o un consejero) cuando el estrés o la preocupación no se van, te impiden hacer tu vida diaria o hacen que evites cosas que necesitas hacer."
          ],
          steps: ["Nota la señal de alerta.", "Pregunta de forma directa y escucha sin juzgar.", "Quédate con la persona; no la dejes sola si está en peligro.", "Llamen o envíen un texto juntos al 988 (veteranos: 988 y luego 1), o a la línea de crisis de tu país.", "Peligro inmediato: llama al 911 o a tu número de emergencias."],
          words: [["Crisis", "un momento en que la seguridad de alguien o su capacidad de salir adelante corre un riesgo grave."], ["Línea 988", "la Línea 988 de Prevención del Suicidio y Crisis de Estados Unidos: llama o envía un texto al 988 para recibir ayuda gratis y privada a cualquier hora, también en español."]],
          slides: [
            { title: "Señales de alerta", bullets: ["Hablar de querer morir o de ser una carga", "Sentirse sin esperanza o atrapado", "Regalar cosas, despedirse", "Alejarse de la gente, más alcohol o drogas"] },
            { title: "Si ves señales en alguien", bullets: ["Pregunta de forma directa y con calma", "Escucha sin juzgar", "Quédate con la persona y conéctala con ayuda"] },
            { title: "Ayuda en crisis en Estados Unidos", bullets: ["Llama o envía un texto al 988, o chatea en 988lifeline.org", "Gratis, confidencial, 24 horas; ayuda en español", "Veteranos: 988 y luego 1, o texto al 838255"] },
            { title: "Fuera de Estados Unidos y emergencias", bullets: ["Guarda ya la línea de crisis o el número de emergencias de tu país", "Peligro inmediato: llama al 911 o a tu número de emergencias"] }
          ],
          sources: [
            { name: "Línea 988 de Prevención del Suicidio y Crisis", url: "https://988lifeline.org/" },
            { name: "Línea de Crisis para Veteranos", url: "https://www.veteranscrisisline.net/" },
            { name: "Instituto Nacional de Salud Mental (NIMH): señales de alerta de suicidio (en inglés)", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Guarda ahora mismo en tu teléfono los números de crisis de donde vives: en Estados Unidos, el 988 (y 988 y luego 1 para veteranos); fuera de Estados Unidos, la línea de crisis y el número de emergencias de tu país. Luego escribe las palabras exactas que usarías para preguntarle a un amigo si está pensando en suicidarse.",
          youCanNow: "reconocer señales de alerta graves, preguntarle a alguien de forma directa y conectarlo a él, o a ti mismo, con ayuda en una crisis.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál de estas es una señal de alerta de suicidio?", options: ["Planear una fiesta de cumpleaños", "Sentirse cansado después del trabajo", "Hablar de ser una carga o de querer morir", "Estar ocupado con un empleo nuevo"], answer: 2, why: "Hablar de ser una carga o de querer morir es una señal de alerta grave." },
            { objective: "O5", q: "Un amigo veterano te dice que tiene un plan para quitarse la vida. ¿Qué harías?", options: ["Cambiar de tema", "Prometerle que guardarás el secreto", "Dejarlo solo para que descanse", "Quedarte con él y llamar al 988 y marcar 1, o al 911 si está en peligro inmediato"], answer: 3, why: "Quédate con la persona y conéctala de inmediato con la ayuda de crisis." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer tu plan personal para afrontar el estrés",
          minutes: 5,
          goal: "Escribir un plan de una página que te diga qué hacer cuando el estrés crece.",
          text: [
            "Cuando estás muy estresado, es difícil pensar con claridad. Un plan para afrontar el estrés es una página corta que escribes mientras estás tranquilo, para saber qué hacer cuando las cosas se pongan difíciles.",
            "Tu plan tiene seis partes: tus señales tempranas de estrés, tus habilidades para calmarte, tus hábitos diarios, las personas con quienes puedes hablar, la ayuda profesional y los números de crisis. Que sea corto y con tus propias palabras.",
            "Guarda el plan donde puedas alcanzarlo: en papel en tu cartera o bolso, y en tu teléfono. Compártelo con una persona de confianza. Vuelve a revisarlo cada pocos meses y después de un cambio grande, como un trabajo nuevo, una mudanza, el fin de una temporada o el regreso a casa."
          ],
          steps: ["Escribe tus tres señales tempranas de estrés principales.", "Escribe dos habilidades para calmarte que hayas practicado.", "Escribe dos hábitos diarios que vas a mantener.", "Escribe dos personas con quienes puedes hablar y cómo contactarlas.", "Escribe un lugar donde buscar ayuda profesional y tus números de crisis."],
          words: [["Plan para afrontar el estrés", "un plan corto por escrito de lo que harás y a quién llamarás cuando el estrés crezca."]],
          slides: [
            { title: "Por qué escribir un plan", bullets: ["El estrés hace difícil pensar", "Escríbelo mientras estás tranquilo"] },
            { title: "Seis partes", bullets: ["Señales, habilidades para calmarte, hábitos diarios", "Personas, ayuda profesional, números de crisis"] },
            { title: "Tenlo a mano", bullets: ["Una copia en papel y otra en el teléfono", "Compártelo con una persona de confianza", "Actualízalo después de cambios grandes"] }
          ],
          tryIt: "Tarea final: escribe tu plan de una página con las seis partes, incluido el 988 (y 988 y luego 1 para veteranos) o la línea de crisis de tu país. Guarda una copia en tu teléfono y otra en papel.",
          youCanNow: "escribir y usar un plan personal que te dice exactamente qué hacer y a quién llamar cuando el estrés crece.",
          quickCheck: [
            { objective: "O6", q: "¿Qué parte de un plan para afrontar el estrés va primero para ayudarte a actuar a tiempo?", options: ["Tus propias señales tempranas de estrés", "Tu comida favorita", "Tu horario de trabajo", "El saldo de tu cuenta bancaria"], answer: 0, why: "Conocer tus señales te dice cuándo usar el resto del plan." },
            { objective: "O6", q: "Terminaste tu plan para afrontar el estrés. ¿Qué harías con él?", options: ["Tirarlo después de leerlo una vez", "Guardarlo en papel y en tu teléfono, y compartirlo con alguien de confianza", "Publicarlo en internet", "Esconderlo para que nadie lo vea nunca"], answer: 1, why: "Tener el plan a mano y compartido hace que esté ahí cuando lo necesites." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Buscar apoyo y ayudar a otros",
        questions: [
          { objective: "O4", q: "¿Cuál es la mejor manera de empezar a pedirle apoyo a un amigo?", options: ["Esperar a que las cosas empeoren mucho", "Decir de forma sencilla lo que pasa y lo que necesitas de él", "Publicarlo en internet sin decírselo", "Dar pistas y esperar que adivine"], answer: 1, why: "Las palabras sencillas y un pedido claro ayudan a la otra persona a ayudarte." },
          { objective: "O5", q: "Una compañera de trabajo dice que se siente una carga y ha estado regalando sus cosas. ¿Qué debes hacer?", options: ["Cambiar de tema", "Decirle que se anime", "Preguntarle de forma directa si está pensando en suicidarse, quedarte con ella y conectarla con ayuda", "Esperar un mes a ver si se le pasa"], answer: 2, why: "Son señales de alerta. Preguntar de forma directa y conectarla con ayuda puede salvar una vida." },
          { objective: "O5", q: "En Estados Unidos, ¿cómo te comunicas con la Línea 988 de Prevención del Suicidio y Crisis?", options: ["Solo por correo electrónico", "Llamando o enviando un texto al 988, o chateando en 988lifeline.org", "Yendo a una oficina en persona", "Llamando al 411"], answer: 1, why: "Al 988 se llega por llamada, texto o chat en línea, gratis y las 24 horas." },
          { objective: "O5", q: "¿Cómo puede un veterano comunicarse con la Línea de Crisis para Veteranos?", options: ["Llamando al 988 y marcando 1", "Solo yendo a una oficina del VA", "Solo si está inscrito en la atención de salud del VA", "Enviando una carta por correo"], answer: 0, why: "Los veteranos llaman al 988 y marcan 1 (o envían un texto al 838255); no hace falta estar inscrito." },
          { objective: "O6", q: "¿Qué va en un plan personal para afrontar el estrés?", options: ["La contraseña de tu banco", "Una lista de las personas con quienes estás enojado", "Nada; los planes no sirven", "Tus números de crisis y dos personas con quienes puedes hablar"], answer: 3, why: "El plan incluye tus señales, habilidades, hábitos, personas, ayuda profesional y números de crisis." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Salud mental y manejo del estrés",
    questions: [
      { objective: "O1", q: "La mejor descripción del estrés es:", options: ["Siempre una señal de debilidad", "La reacción de alarma del cuerpo y la mente ante la presión", "Algo que solo sienten los adultos", "Una enfermedad que solo un médico puede ver"], answer: 1, why: "El estrés es una reacción normal; se vuelve un problema cuando dura demasiado o es demasiado fuerte." },
      { objective: "O1", q: "¿Cuál es una señal de estrés en tus pensamientos?", options: ["Una preocupación que sigue dando vueltas", "Un músculo adolorido después de hacer ejercicio", "Sentirte lleno después del almuerzo", "Un día soleado"], answer: 0, why: "Las preocupaciones que dan vueltas y la dificultad para concentrarse son señales en los pensamientos." },
      { objective: "O1", q: "¿Para qué aprender tus propias señales tempranas de estrés?", options: ["Para poder esconderlas", "Para actuar antes de que el estrés crezca", "Para no sentir estrés nunca", "Para diagnosticarte a ti mismo"], answer: 1, why: "Detectar las señales a tiempo te deja usar tus habilidades antes." },
      { objective: "O2", q: "En la respiración cuadrada, las cuentas suelen ser:", options: ["Inhala 1, exhala 1", "Inhala 10, aguanta 30", "Inhala 4, aguanta 4, exhala 4, aguanta 4", "Lo más rápido posible"], answer: 2, why: "Cuatro cuentas iguales hacen más lenta tu respiración y calman tu cuerpo." },
      { objective: "O2", q: "Los ejercicios de respiración te marean. ¿Qué debes hacer?", options: ["Respirar más rápido", "Aguantar la respiración más tiempo", "Seguir pase lo que pase", "Detenerte y respirar normalmente"], answer: 3, why: "Si te mareas, detente y respira normalmente." },
      { objective: "O2", q: "El anclaje 5-4-3-2-1 usa:", options: ["Tus cinco sentidos", "Cinco aplicaciones", "Cinco amigos", "Cinco minutos de carrera"], answer: 0, why: "Nombras cosas que ves, tocas, oyes, hueles y saboreas." },
      { objective: "O2", q: "¿Cuál es el mejor momento para practicar las habilidades para calmarte?", options: ["Solo durante una crisis", "Nunca; funcionan sin práctica", "Cuando estás tranquilo, para que estén listas después", "Solo con una aplicación de pago"], answer: 2, why: "La práctica deja la habilidad lista para cuando la necesites." },
      { objective: "O3", q: "Según los CDC, ¿cuánto sueño necesitan aproximadamente los adolescentes de 13 a 17 años?", options: ["De 8 a 10 horas", "De 5 a 6 horas", "4 horas", "De 12 a 14 horas"], answer: 0, why: "Los CDC indican de 8 a 10 horas para los adolescentes de 13 a 17 años." },
      { objective: "O3", q: "¿Cuál es un consejo de sueño de los CDC?", options: ["Tomar café tarde en la noche", "Cambiar tu hora de dormir cada noche", "Dormir con luces fuertes encendidas", "Dejar las pantallas unos 30 minutos antes de dormir"], answer: 3, why: "Dejar las pantallas antes de dormir te ayuda a dormir." },
      { objective: "O3", q: "¿Cuánta actividad moderada por semana sugieren los CDC, más o menos, para los adultos?", options: ["10 minutos", "150 minutos", "1,000 minutos", "Ninguna"], answer: 1, why: "Los adultos necesitan unos 150 minutos de actividad moderada por semana, más ejercicios de fuerza 2 días." },
      { objective: "O4", q: "Pedir ayuda es:", options: ["Una señal de que fracasaste", "Solo para personas sin amigos", "Una habilidad que usan las personas fuertes y los equipos", "Algo que hay que evitar"], answer: 2, why: "Pedir ayuda es una habilidad, no una debilidad." },
      { objective: "O4", q: "¿Qué hace la Línea Nacional de Ayuda de SAMHSA?", options: ["Da referencias gratis y confidenciales a tratamiento y apoyo locales", "Envía a la policía a tu casa", "Escribe recetas médicas", "Cobra por cada llamada"], answer: 0, why: "Es una línea gratuita de referencias abierta las 24 horas; no da consejería." },
      { objective: "O4", q: "Si usas un chatbot de IA cuando te sientes estresado, ¿qué es lo más seguro?", options: ["Darle tu nombre completo, tu dirección y tu número de identificación", "Usarlo para practicar las palabras de una conversación, y buscar a una persona real en una crisis", "Tratarlo como tu terapeuta en lugar de ver a alguien", "Seguir cualquier consejo médico que te dé sin revisarlo"], answer: 1, why: "La IA puede ayudarte a prepararte, pero no es un consejero; una crisis necesita a una persona real." },
      { objective: "O5", q: "¿Cuál es una señal de alerta de suicidio?", options: ["Planear una fiesta de cumpleaños", "Empezar un pasatiempo nuevo", "Despedirse y regalar cosas importantes", "Dormir bien"], answer: 2, why: "Regalar cosas y despedirse son señales de alerta que menciona el NIMH." },
      { objective: "O5", q: "¿Preguntarle a alguien de forma directa sobre el suicidio le mete la idea en la cabeza?", options: ["Sí, siempre", "Solo a los adolescentes", "Solo por teléfono", "No; preguntar con calma abre la puerta a la ayuda"], answer: 3, why: "Preguntar de forma directa y con calma ayuda a la persona a hablar y a recibir ayuda." },
      { objective: "O5", q: "Alguien está en peligro inmediato en Estados Unidos. ¿Qué haces?", options: ["Lo publicas en internet", "Llamas al 911", "Esperas hasta mañana", "Le envías un enlace a este curso"], answer: 1, why: "El peligro inmediato necesita servicios de emergencia: el 911 en Estados Unidos." },
      { objective: "O5", q: "Vives fuera de Estados Unidos y un amigo está en crisis. ¿Qué haces?", options: ["Llamas a la línea de crisis o al número de emergencias de tu país", "Envías un texto al 988 desde el extranjero y esperas", "No haces nada", "Le pides a una IA que se encargue"], answer: 0, why: "El 988 es la línea de Estados Unidos; fuera del país, usa la línea de crisis o el número de emergencias local." },
      { objective: "O6", q: "¿Cuándo debes ver a un médico o consejero por el estrés, aunque no haya una crisis?", options: ["Nunca", "Solo si un amigo te lo dice", "Solo una vez al año", "Cuando el estrés no se va o te impide hacer tu vida diaria"], answer: 3, why: "El estrés que dura o que te impide hacer tu vida diaria es una señal para buscar ayuda." },
      { objective: "O6", q: "¿Dónde debes guardar tu plan para afrontar el estrés?", options: ["Escondido donde no puedas encontrarlo", "Solo en tu cabeza", "En papel y en tu teléfono, y compartido con alguien de confianza", "En una publicación pública en redes sociales"], answer: 2, why: "Tener copias a mano ayuda cuando el estrés hace difícil pensar." },
      { objective: "O6", q: "¿Qué parte del plan te dice a quién llamar en una emergencia?", options: ["Hábitos diarios", "Habilidades para calmarte", "Señales de estrés", "Números de crisis"], answer: 3, why: "Los números de crisis, como el 988 o la línea de tu país, van en todo plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      6,
      8,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Señales tempranas",
        objective: "O1",
        notYet: "Menos de tres señales, o son demasiado generales, como \"estrés\".",
        meets: "Tres señales tempranas personales escritas con sus propias palabras.",
        exceeds: "Las señales salen de un registro de estrés real y cubren el cuerpo, los pensamientos o las acciones."
      },
      {
        name: "Habilidades para calmarse",
        objective: "O2",
        notYet: "Las habilidades para calmarse están en la lista pero no se practicaron.",
        meets: "Dos habilidades para calmarse practicadas, con la calificación del estrés antes y después.",
        exceeds: "Anota cuándo y dónde le funciona mejor cada habilidad."
      },
      {
        name: "Hábitos diarios",
        objective: "O3",
        notYet: "Los hábitos son vagos o no tienen hora.",
        meets: "Dos hábitos pequeños con una hora o un recordatorio para cada uno.",
        exceeds: "Los hábitos ya se probaron durante al menos unos días."
      },
      {
        name: "Personas de apoyo y ayuda",
        objective: "O4",
        notYet: "No hay personas en la lista, o no hay forma de contactarlas.",
        meets: "Dos personas con cómo contactarlas, y un lugar donde buscar ayuda profesional.",
        exceeds: "Ya habló con una de ellas."
      },
      {
        name: "Números de crisis",
        objective: "O5",
        notYet: "Faltan los números de crisis o no son los correctos para donde vive.",
        meets: "El 988 (y el 988 y luego 1 para veteranos) o la línea de crisis local y el número de emergencias están en el plan y guardados en el teléfono.",
        exceeds: "Además conoce las palabras para preguntarle a un amigo de forma directa sobre el suicidio."
      },
      {
        name: "Plan a la mano",
        objective: "O6",
        notYet: "Al plan le faltan partes o no está guardado.",
        meets: "Las seis partes en una página, guardada en papel y en el teléfono.",
        exceeds: "Lo compartió con una persona de confianza."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que cuentan que usaron una habilidad para calmarse o su plan para afrontar el estrés en 30 días (encuesta de seguimiento)",
      "Participantes que tienen los números de crisis guardados en su teléfono a los 30 días",
      "Participantes que buscaron a una persona de apoyo o a un profesional en 30 días",
      "Participantes que empiezan otro curso de habilidades para la vida de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono para guardar los números de crisis y el plan",
      "Papel y lápiz para el registro de estrés y el plan para afrontar el estrés",
      "Un lugar tranquilo para practicar la respiración",
      "Unos 60 minutos en total, más un día para el registro de estrés"
    ],
    facilitatorNotes: [
      "Comparte los números de crisis al inicio de cada sesión: 988 en Estados Unidos (988 y luego 1 para veteranos) o la línea de crisis local y el número de emergencias.",
      "Ten un plan para alguien que esté pasando por un momento difícil: conoce la línea de crisis local y quién puede ayudar en el lugar, y nunca dejes sola a una persona en riesgo.",
      "No pidas que compartan en voz alta su registro de estrés ni su plan; compartir siempre es opcional.",
      "Recuerda que este curso no diagnostica ni da tratamiento; anima a ver a un médico o consejero cuando el estrés no se va.",
      "Practiquen juntos la respiración y el anclaje, y di que se detengan y respiren normalmente si se marean."
    ]
  }
};

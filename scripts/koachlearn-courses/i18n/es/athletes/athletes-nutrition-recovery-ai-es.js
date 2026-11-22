"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-nutrition-recovery-ai.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English: no doses, calorie targets or medical advice.

module.exports = {
  id: "athletes-nutrition-recovery-ai-es",
  lang: "es",
  translationOf: "athletes-nutrition-recovery-ai",
  category: "Athletes",
  name: "Nutrición y recuperación con IA",
  skills: "Planear comidas balanceadas alrededor del entrenamiento, Armar una rutina de comida y agua para el día de partido, Usar la IA para listas de compras e ideas de comidas, Registrar hábitos de sueño y recuperación, Saber cuándo ver a un profesional",
  outcome: "usar un asistente de IA para planear una semana de comidas sencillas y balanceadas y una rutina de recuperación alrededor de tu horario de entrenamiento, y luego revisar el plan con un dietista certificado, un preparador físico o un médico.",
  about: [
    "Este curso es para deportistas y entrenadores que quieren entender lo básico de comer, beber y recuperarse bien, y usar la IA para que planear sea más fácil. Es educación general, no consejo médico ni de nutrición.",
    "Cada cuerpo es distinto. Tu edad, tu deporte, tu salud y tus metas cambian lo que necesitas; por eso el plan que armes aquí es un borrador para revisar con un dietista certificado, tu preparador físico o tu médico.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Usa un asistente de IA para hacer un borrador de un plan de comidas y recuperación de una semana alrededor de tu horario real de entrenamientos y partidos: platos balanceados, una rutina de comida y agua para el día de partido, una lista de compras según tu presupuesto y una rutina de sueño. Quita cualquier dato privado de salud y luego muéstrale el plan a un dietista certificado, a un preparador físico o a un médico, y cámbialo según lo que te digan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y clubes, y los entrenadores que los apoyan, que quieren comer, hidratarse y recuperarse bien y usar la IA para planear con más facilidad.",
    startingPoint: "Comen y duermen alrededor de un horario apretado de entrenamientos, clases y partidos, y usan el teléfono todos los días. Muchos se saltan comidas, adivinan qué comer y beber el día de partido, duermen poco y no saben bien cuándo un dolor necesita a un profesional.",
    gap: "Comer, hidratarse y dormir mal frena el rendimiento y aumenta el riesgo de lesiones y de enfermedades por calor, y los consejos de la IA o de internet sobre calorías y suplementos pueden ser peligrosos. Un plan semanal sencillo, revisado por un profesional, ayuda a los deportistas a recuperarse y mantenerse sanos.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de séptimo grado",
      "Solo educación general, no consejo médico ni de nutrición; las cantidades exactas las da un dietista certificado, un preparador físico o un médico",
      "Un teléfono o una computadora con un asistente de IA gratuito; los planes deben ajustarse a un presupuesto de comida y una cocina reales",
      "Unos 60 minutos en total",
      "No se pegan en la IA registros médicos, medicamentos ni datos privados de salud; el peso y la imagen corporal son temas delicados"
    ],
    prerequisites: "Ninguno"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando alimentos que ya comes", action: "armar un plato balanceado con carbohidratos, proteína, y frutas y verduras", standard: "con las tres partes en el plato y más energía planeada para los días de entrenamiento duro" },
    { id: "O2", condition: "Ante la hora de inicio de un partido o un entrenamiento duro", action: "planear una rutina de comida y agua para el día de partido, desde la comida previa hasta la recuperación", standard: "con una comida y un refrigerio conocidos, agua durante todo el día y un refrigerio de recuperación con carbohidratos y proteína" },
    { id: "O3", condition: "Usando un asistente de IA gratuito", action: "crear una semana de ideas de comidas y una lista de compras que se ajusten a tu horario, tu presupuesto y tu cocina", standard: "describiendo las alergias con palabras generales y sin pedir metas de calorías, planes para bajar de peso ni dosis de suplementos" },
    { id: "O4", condition: "Según tu horario de entrenamientos y partidos", action: "planear una rutina de sueño con una hora fija para despertarte, una hora para acostarte y una hora para apagar las pantallas", standard: "registrando la rutina durante una semana" },
    { id: "O5", condition: "Ante la descripción de un dolor muscular, un dolor o un golpe en la cabeza", action: "explicar si es dolor muscular normal o una señal para parar y avisar a tu preparador físico", standard: "acertando en todos los casos de dolor agudo, hinchazón o síntomas después de un golpe en la cabeza" },
    { id: "O6", condition: "Usando tu horario y un asistente de IA", action: "crear un plan de comidas y recuperación de una semana y pedir que lo revise un dietista, un preparador físico o un médico", standard: "sin datos privados de salud y con el plan actualizado según sus consejos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Alimentarte alrededor del entrenamiento",
      lessons: [
        {
          objectives: ["O1"],
          title: "El plato balanceado del deportista",
          minutes: 5,
          goal: "Armar un plato balanceado con alimentos que ya comes.",
          text: [
            "La comida te da energía para entrenar y los materiales para recuperarte. Una forma sencilla de pensar en una comida es un plato con tres partes principales: carbohidratos para la energía (arroz, pasta, pan, papas, fruta), proteína para ayudar a reparar los músculos (huevos, frijoles, pescado, pollo, yogur) y frutas y verduras para las vitaminas y los minerales.",
            "Los deportistas que entrenan duro suelen necesitar más energía que quienes no hacen deporte, y los días más duros por lo general piden más carbohidratos. Cuánto necesitas depende de tu cuerpo, tu deporte y tu entrenamiento; por eso un dietista certificado es la persona indicada para tus cantidades exactas.",
            "Saltarte comidas o dejar grupos enteros de alimentos para verte de cierta forma puede dañar tu rendimiento y tu salud. Si la comida, el peso o tu imagen corporal te están estresando, habla con alguien de confianza y con tu preparador físico o tu médico."
          ],
          words: [["Carbohidratos", "alimentos como el arroz, el pan, la pasta, las papas y la fruta que dan energía rápida."], ["Proteína", "alimentos como los huevos, los frijoles, el pescado, la carne y el yogur que ayudan al cuerpo a reparar los músculos."], ["Dietista certificado (RD o RDN)", "un profesional de la alimentación y la nutrición con licencia."]],
          slides: [
            { title: "Tres partes del plato", bullets: ["Carbohidratos: energía", "Proteína: reparación", "Frutas y verduras: vitaminas y minerales"] },
            { title: "Días duros, más combustible", bullets: ["Los días de entrenamiento suelen pedir más energía", "Cantidades exactas: pregúntale a un dietista certificado"] },
            { title: "Cuidado con", bullets: ["Saltarte comidas", "Dejar grupos enteros de alimentos", "Estrés por la comida o el cuerpo: habla con alguien"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Encuentra un experto en nutrición (en inglés)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Anota lo que comiste ayer en una comida. Marca el carbohidrato, la proteína y la fruta o verdura. ¿Qué podrías agregar para que sea un plato balanceado?",
          youCanNow: "armar un plato balanceado con carbohidratos, proteína y frutas y verduras.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es la función principal de la proteína en el plato de un deportista?", options: ["Dar energía rápida", "Ayudar a reparar los músculos", "Solo agregar vitaminas", "Mantenerte fresco"], answer: 1, why: "La proteína da los materiales que los músculos necesitan para repararse." },
            { objective: "O1", q: "Mañana tienes un día de entrenamiento duro. ¿Qué cambio en tu plato tiene sentido?", options: ["Saltarte el desayuno", "Quitar los carbohidratos", "Agregar más carbohidratos para tener energía", "Comer solo verduras"], answer: 2, why: "Los días más duros suelen pedir más carbohidratos para tener energía." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Rutina de comida y agua para el día de partido",
          minutes: 5,
          goal: "Planear qué y cuándo comes y bebes un día de partido o de entrenamiento duro.",
          text: [
            "El momento importa. Muchos deportistas comen una comida balanceada normal unas horas antes del partido y una merienda pequeña y fácil más cerca de la hora de inicio, como fruta o galletas saladas. El día de partido lo mejor son los alimentos a los que estás acostumbrado: no pruebes nada nuevo.",
            "El agua importa todo el día, no solo durante el partido. Lleva una botella de agua, bebe con regularidad y bebe más con calor. La sed, la orina oscura, el dolor de cabeza y los calambres pueden ser señales de que necesitas más líquido. Sentirte mareado, confundido o muy mal con el calor es una emergencia: para y avísale de inmediato a tu entrenador o a tu preparador físico.",
            "Después de un entrenamiento duro, comer una comida o una merienda con carbohidratos y proteína ayuda a la recuperación. Tu preparador físico o tu dietista te pueden decir qué funciona para tu cuerpo y tu deporte."
          ],
          steps: ["Anota la hora de inicio de tu partido o entrenamiento.", "Planea una comida balanceada normal unas horas antes.", "Planea una merienda pequeña y conocida más cerca del inicio.", "Planea tu botella de agua para todo el día.", "Planea una comida o merienda de recuperación para después."],
          words: [["Hidratación", "mantener suficiente agua en tu cuerpo."], ["Comida de recuperación", "comida después del entrenamiento que ayuda a tu cuerpo a recargar energía y repararse."]],
          slides: [
            { title: "Antes del partido", bullets: ["Comida balanceada unas horas antes", "Merienda pequeña y conocida más cerca del inicio", "Nada nuevo el día de partido"] },
            { title: "Agua todo el día", bullets: ["Lleva una botella", "Más con calor", "¿Mareado o confundido con el calor? Para y avisa ya al personal"] },
            { title: "Después", bullets: ["Carbohidratos y proteína", "Pregúntale a tu preparador físico qué te funciona"] }
          ],
          tryIt: "Escribe un horario del día de partido para tu próximo partido o entrenamiento duro: comida, merienda, agua y comida de recuperación, con horas.",
          youCanNow: "planear una rutina sencilla de comida y agua para el día de partido.",
          quickCheck: [
            { objective: "O2", q: "¿Cuándo comen muchos deportistas su comida balanceada normal el día de partido?", options: ["Unas horas antes del partido", "Justo cuando empieza el partido", "Solo después del partido", "Solo la noche anterior"], answer: 0, why: "Una comida normal unas horas antes y un refrigerio pequeño más cerca del inicio es una rutina común." },
            { objective: "O2", q: "Hace calor y tienes un entrenamiento largo. ¿Qué planeas?", options: ["Tomar agua solo cuando lo diga el entrenador", "No tomar agua para no tener calambres", "Esperar a tomar agua hasta después del entrenamiento", "Llevar una botella de agua y tomar con regularidad todo el día, más con el calor"], answer: 3, why: "El agua importa todo el día, y con calor necesitas más." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar la IA para ideas de comidas y listas de compras",
          minutes: 5,
          goal: "Usar un asistente de IA para hacer una semana de ideas de comidas y una lista de compras según tu presupuesto.",
          text: [
            "Los asistentes de IA son buenos para dar ideas de comidas, recetas y listas de compras. Dales tu horario, tu presupuesto, tu cocina y lo que te gusta. Ejemplo: “Soy deportista universitario, tengo un microondas en la residencia y un presupuesto de $50 a la semana para comida. Entreno de 3 a 6 de la tarde. Dame 7 días de comidas sencillas y balanceadas y una lista de compras.”",
            "Cuéntale con palabras generales si tienes alergias a alimentos o reglas religiosas o culturales sobre la comida, para que las ideas te sirvan. No pegues historiales médicos ni medicamentos.",
            "No le pidas a la IA metas de calorías, planes para bajar de peso ni dosis de suplementos. Eso depende de tu salud, y las respuestas pueden estar equivocadas o ser peligrosas. Eso le corresponde a un dietista certificado o a un médico."
          ],
          steps: ["Da tu horario, tu presupuesto y tu cocina.", "Di qué alimentos te gustan y cuáles evitas.", "Pide ideas de comidas balanceadas para 7 días.", "Pide una lista de compras agrupada por sección de la tienda.", "Revisa los precios en tu tienda y ajusta."],
          words: [["Presupuesto", "la cantidad de dinero que planeas gastar."], ["Alergia", "cuando tu cuerpo reacciona mal a un alimento; puede ser grave."]],
          slides: [
            { title: "Dale los detalles a la IA", bullets: ["Horario y presupuesto", "Cocina: residencia, casa, ninguna", "Alimentos que te gustan y que evitas"] },
            { title: "Pide", bullets: ["7 días de ideas de comidas balanceadas", "Lista de compras por sección de la tienda"] },
            { title: "NO le pidas a la IA", bullets: ["Metas de calorías ni planes para bajar de peso", "Dosis de suplementos", "Consejos médicos"] }
          ],
          tryIt: "Pídele a un asistente de IA siete días de comidas sencillas y balanceadas y una lista de compras según tu presupuesto y tu cocina reales. Revisa tres precios en tu tienda.",
          youCanNow: "usar la IA para conseguir ideas de comidas y una lista de compras que se ajusten a tu presupuesto y tu horario.",
          quickCheck: [
            { objective: "O3", q: "¿Qué datos ayudan a un asistente de IA a darte ideas de comidas útiles?", options: ["Tus registros médicos", "Tu horario, tu presupuesto y tu cocina", "Tus medicamentos", "Tu meta de peso"], answer: 1, why: "El horario, el presupuesto y la cocina hacen que las ideas encajen con tu vida sin compartir datos privados de salud." },
            { objective: "O3", q: "Quieres saber exactamente cuántas calorías comer para bajar de peso. ¿A quién le preguntas?", options: ["A un asistente de IA", "A un compañero de equipo", "A un dietista certificado o a un médico", "A un influencer de redes sociales"], answer: 2, why: "Las metas de calorías dependen de tu salud y le tocan a un dietista o a un médico." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Alimentarte alrededor del entrenamiento",
        questions: [
          { objective: "O1", q: "¿Cuál es la función principal de los carbohidratos para los deportistas?", options: ["Solo reparar músculos", "Solo vitaminas", "Energía", "Ninguna"], answer: 2, why: "Los carbohidratos son la principal fuente de energía rápida del cuerpo." },
          { objective: "O1", q: "¿Quién es la persona indicada para tus cantidades exactas de comida?", options: ["Un dietista certificado", "Un asistente de IA", "Un influencer de redes sociales", "Un compañero de equipo"], answer: 0, why: "Los dietistas certificados dan consejos de nutrición personales." },
          { objective: "O2", q: "El día de partido, ¿cuál es la mejor merienda?", options: ["Una bebida energética nueva que nunca probaste", "Nada en todo el día", "Una comida enorme y grasosa justo antes", "Una merienda pequeña y conocida, como fruta"], answer: 3, why: "Los alimentos conocidos y fáciles son los más seguros el día de partido." },
          { objective: "O2", q: "Un compañero está mareado y confundido en el entrenamiento con calor. ¿Qué haces?", options: ["Le dices que aguante", "Avisas de inmediato al entrenador o al preparador físico", "Esperas a que termine el entrenamiento", "Le das una bebida energética y te vas"], answer: 1, why: "Esas señales pueden ser una emergencia; el personal debe actuar ya." },
          { objective: "O3", q: "¿Qué pedido NO debe ir a un asistente de IA?", options: ["Una lista de compras con $50 de presupuesto", "Una dosis de suplemento para ti", "Ideas de comidas para microondas", "Recetas con frijoles"], answer: 1, why: "Las dosis dependen de tu salud; pregúntale a un dietista o a un médico." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hábitos de recuperación",
      lessons: [
        {
          objectives: ["O4"],
          title: "El sueño: tu mejor herramienta de recuperación",
          minutes: 5,
          goal: "Armar una rutina de sueño sencilla que se ajuste a tu horario.",
          text: [
            "Mientras duermes, tu cuerpo se repara y tu cerebro guarda lo que practicaste. Los adolescentes por lo general necesitan dormir más que los adultos, y muchos deportistas no duermen lo suficiente.",
            "Una rutina de sueño ayuda: una hora fija para acostarte y levantarte, pantallas apagadas antes de dormir, una habitación fresca y oscura, y cafeína solo temprano en el día. La IA puede ayudarte a armar un plan para la hora de dormir alrededor de entrenamientos temprano o partidos tarde.",
            "Si a menudo no puedes dormir, roncas fuerte o te sientes agotado incluso después de dormir, habla con tu médico."
          ],
          steps: ["Elige una hora fija para levantarte.", "Cuenta hacia atrás hasta una hora de dormir que te dé suficiente sueño.", "Fija una hora para apagar las pantallas antes de dormir.", "Toma la cafeína solo temprano en el día.", "Registra tus horas de sueño durante una semana."],
          words: [["Rutina de sueño", "los mismos pasos a la misma hora cada noche para ayudarte a dormir."], ["Cafeína", "un estimulante del café, el té, los refrescos y las bebidas energéticas que puede mantenerte despierto."]],
          slides: [
            { title: "Por qué importa el sueño", bullets: ["El cuerpo se repara", "El cerebro guarda las habilidades", "Los adolescentes necesitan más que los adultos"] },
            { title: "Una rutina sencilla", bullets: ["Misma hora para acostarte y levantarte", "Pantallas apagadas antes de dormir", "Habitación fresca y oscura", "Cafeína solo temprano"] },
            { title: "Ve a tu médico si", bullets: ["A menudo no puedes dormir", "Roncas fuerte", "Siempre estás agotado"] }
          ],
          tryIt: "Pídele a un asistente de IA: “Entreno a las 6 de la mañana entre semana y los partidos terminan a las 9 de la noche los viernes. Ayúdame a hacer una rutina de sueño sencilla.” Elige tu hora de dormir y registra tu sueño las próximas tres noches.",
          youCanNow: "armar y registrar una rutina de sueño sencilla.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál de estas cosas es parte de una buena rutina de sueño?", options: ["Tomar cafeína tarde en la noche", "Acostarte a una hora distinta cada noche", "Un cuarto con luz y caluroso", "Una hora fija para acostarte y para despertarte"], answer: 3, why: "Las horas fijas, apagar las pantallas, un cuarto fresco y oscuro y tomar cafeína temprano ayudan a dormir." },
            { objective: "O4", q: "El entrenamiento empieza a las 6 de la mañana. ¿Cómo eliges tu hora de acostarte?", options: ["Eliges tu hora de despertarte y cuentas hacia atrás hasta una hora de acostarte que te dé suficiente sueño", "Te acuestas cuando termines con el teléfono", "Duermes hasta tarde los días de entrenamiento", "No duermes antes de un entrenamiento temprano"], answer: 0, why: "Contar hacia atrás desde una hora fija para despertarte te da una hora de acostarte con suficiente sueño." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Días de descanso, dolor muscular y dolor de lesión",
          minutes: 5,
          goal: "Distinguir el dolor muscular normal del entrenamiento del dolor que necesita a un profesional.",
          text: [
            "Los días de descanso son parte del entrenamiento, no una pausa del entrenamiento. Tu entrenador los planea para que tu cuerpo se adapte y se haga más fuerte.",
            "El dolor muscular normal se siente como un cansancio sordo y general de los músculos uno o dos días después de un entrenamiento duro, y mejora poco a poco. El dolor agudo, en una articulación o un hueso, que te hace cojear, que causa hinchazón o que empeora es distinto: para y avísale a tu preparador físico.",
            "Los golpes en la cabeza necesitan un cuidado especial. Si tú o un compañero reciben un golpe y tienen dolor de cabeza, mareo, confusión o se sienten “raros”, dejen de jugar y avísenle al entrenador o al preparador físico. La capacitación gratuita HEADS UP de los CDC (los Centros para el Control y la Prevención de Enfermedades de Estados Unidos) explica las señales."
          ],
          steps: ["Fíjate dónde y cómo te duele.", "Sordo, general y mejorando: dolor muscular normal.", "Agudo, en una articulación, con hinchazón, cojera o empeorando: avísale a tu preparador físico.", "Cualquier golpe en la cabeza con síntomas: para y avisa al personal."],
          words: [["Dolor muscular", "cansancio sordo de los músculos después de un entrenamiento duro que se va en uno o dos días."], ["Conmoción cerebral", "una lesión del cerebro por un golpe o una sacudida en la cabeza o el cuerpo."]],
          slides: [
            { title: "Los días de descanso son entrenamiento", bullets: ["Tu cuerpo se adapta en los días de descanso", "Sigue el plan que fija tu entrenador"] },
            { title: "Dolor muscular frente a dolor de lesión", bullets: ["Muscular: sordo, general, se va", "De lesión: agudo, en articulación, hinchazón, cojera, empeora"] },
            { title: "¿Golpe en la cabeza?", bullets: ["Dolor de cabeza, mareo, confusión, sentirse “raro”", "Deja de jugar y avisa al personal", "Aprende las señales: CDC HEADS UP"] }
          ],
          sources: [{ name: "CDC: Capacitación HEADS UP sobre conmociones cerebrales (en inglés)", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Escribe dos listas: señales de dolor muscular normal y señales de dolor que hay que avisar. Luego escribe a quién de tu equipo se lo dirías y cómo te comunicarías con esa persona.",
          youCanNow: "distinguir el dolor muscular normal del dolor que necesita a tu preparador físico, y saber qué hacer después de un golpe en la cabeza.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es una señal de dolor que necesita a tu preparador físico?", options: ["Cansancio sordo en las piernas el día después de un entrenamiento duro", "Un dolor agudo en una articulación que está empeorando", "Un dolor muscular leve que se va en dos días", "Tener hambre después de entrenar"], answer: 1, why: "El dolor agudo, el dolor en articulaciones o huesos, la hinchazón, cojear o un dolor que empeora necesitan a un profesional." },
            { objective: "O5", q: "Un compañero recibe un golpe en la cabeza y dice que se siente mareado. ¿Qué pasa?", options: ["Sigue jugando si quiere", "Descansa una jugada", "Deja de jugar y tú avisas al entrenador o al preparador físico", "Toma agua y vuelve a entrar"], answer: 2, why: "Un golpe en la cabeza con síntomas significa dejar de jugar y avisar al personal." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Armar tu plan de recuperación",
          minutes: 5,
          goal: "Juntar comida, agua y sueño en un plan de recuperación semanal y revisarlo con un profesional.",
          text: [
            "Ahora júntalo todo. Tu plan semanal tiene comidas alrededor del entrenamiento, una rutina para el día de partido, un hábito de agua y una rutina de sueño.",
            "Pídele a un asistente de IA que los combine: “Este es mi horario de entrenamientos y partidos, mi presupuesto y mi cocina. Haz una tabla de una semana con comidas, meriendas, recordatorios para beber agua y horas de dormir.” Quita primero cualquier dato privado de salud.",
            "Luego llévaselo a un dietista certificado, a tu preparador físico o a tu médico. Pregunta: “¿Esto se ajusta a mi cuerpo y a mi deporte? ¿Qué cambiarías?” El plan que te ayudan a corregir es el que debes seguir. Tu escuela, tu equipo o el centro de salud estudiantil quizá puedan ponerte en contacto con uno."
          ],
          steps: ["Reúne tu horario, tu presupuesto y la información de tu cocina.", "Pídele a la IA una tabla de una semana: comidas, meriendas, agua, horas de dormir.", "Quita los datos privados de salud.", "Muéstrasela a un dietista, un preparador físico o un médico.", "Actualízala con sus consejos."],
          words: [["Plan de recuperación", "tu rutina semanal de comida, agua, sueño y descanso que ayuda a tu cuerpo a recuperarse."]],
          slides: [
            { title: "Tu plan de recuperación", bullets: ["Comidas alrededor del entrenamiento", "Rutina para el día de partido", "Hábito de agua", "Rutina de sueño"] },
            { title: "La IA hace el borrador", bullets: ["Tabla de una semana", "Sin datos privados de salud"] },
            { title: "Un profesional lo revisa", bullets: ["Dietista, preparador físico o médico", "“¿Qué cambiarías?”", "Sigue el plan corregido"] }
          ],
          sources: [{ name: "Academy of Nutrition and Dietetics: Encuentra un experto en nutrición (en inglés)", url: "https://www.eatright.org/find-a-nutrition-expert" }],
          tryIt: "Tarea final: usa un asistente de IA para hacer el borrador de tu plan de comidas y recuperación de una semana, quita los datos privados de salud y muéstraselo a un dietista, un preparador físico o un médico.",
          youCanNow: "armar con IA un plan semanal de comida, agua y sueño y hacer que lo revise un profesional.",
          quickCheck: [
            { objective: "O6", q: "¿Qué va en tu plan de recuperación de una semana?", options: ["Comidas y refrigerios, recordatorios de agua y horas de acostarte", "Solo tus entrenamientos", "Solo tu calendario de partidos", "Una lista de suplementos"], answer: 0, why: "El plan junta comida, agua y sueño alrededor de tu horario." },
            { objective: "O6", q: "Tu preparador físico sugiere cambios en el plan que hiciste con la IA. ¿Qué haces?", options: ["Mantener la versión de la IA", "Pedirle a la IA que le discuta", "Usar la mitad de cada uno", "Actualizar el plan con sus consejos y seguir esa versión"], answer: 3, why: "El plan que corregiste con ayuda del profesional es el que debes seguir." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hábitos de recuperación",
        questions: [
          { objective: "O4", q: "¿Por qué importa el sueño para los deportistas?", options: ["No importa", "Reemplaza el entrenamiento", "Solo para el peso", "El cuerpo se repara y el cerebro guarda las habilidades"], answer: 3, why: "El sueño es cuando ocurren la reparación y el aprendizaje." },
          { objective: "O4", q: "¿Qué es parte de una buena rutina de sueño?", options: ["Pantallas apagadas antes de dormir", "Bebidas energéticas por la noche", "Una hora de dormir distinta cada noche", "El teléfono en la cama hasta dormirte"], answer: 0, why: "Apagar las pantallas antes de dormir te ayuda a conciliar el sueño." },
          { objective: "O5", q: "Tienes un dolor agudo e hinchazón en la rodilla después del entrenamiento. ¿Qué haces?", options: ["No le haces caso", "Le pides un tratamiento a la IA", "Le avisas a tu preparador físico", "Corres más para aflojarla"], answer: 2, why: "El dolor agudo y la hinchazón necesitan a un profesional." },
          { objective: "O5", q: "Un compañero se siente mareado y “raro” después de un golpe en la cabeza. ¿Qué debe pasar?", options: ["Sigue jugando", "Toma un descanso corto y vuelve a entrar", "Le pregunta a una aplicación", "Deja de jugar y se avisa al personal"], answer: 3, why: "Posible conmoción cerebral: para y avisa a un entrenador o al preparador físico." },
          { objective: "O6", q: "¿Quién debe revisar tu plan de recuperación hecho con IA?", options: ["Una sección de comentarios cualquiera", "Un dietista, un preparador físico o un médico", "La IA otra vez", "Nadie"], answer: 1, why: "Un profesional puede ajustar el plan a tu cuerpo y tu deporte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Nutrición y recuperación con IA",
    questions: [
      { objective: "O1", q: "¿Qué alimento es principalmente una proteína?", options: ["Arroz", "Manzanas", "Huevos", "Pan"], answer: 2, why: "Los huevos son un alimento con proteína." },
      { objective: "O1", q: "Las tres partes principales de un plato balanceado son:", options: ["Carbohidratos, proteína, y frutas y verduras", "Dulces, refrescos y papitas", "Solo proteína", "Solo verduras"], answer: 0, why: "Esas tres partes cubren la energía, la reparación y las vitaminas." },
      { objective: "O1", q: "Los días de entrenamiento duro por lo general piden:", options: ["Más combustible", "Saltarse comidas", "Nada de agua", "Solo meriendas"], answer: 0, why: "Más entrenamiento por lo general significa que necesitas más energía." },
      { objective: "O1", q: "La comida o tu imagen corporal te están estresando. Debes:", options: ["Dejar de comer", "Ocultarlo", "Hablar con alguien de confianza y con tu preparador físico o tu médico", "Pedirle una dieta a la IA"], answer: 2, why: "Estas preocupaciones merecen apoyo de verdad." },
      { objective: "O2", q: "El día de partido, prueba:", options: ["Un alimento totalmente nuevo", "Alimentos a los que estás acostumbrado", "Nada en todo el día", "Un suplemento nuevo"], answer: 1, why: "Los alimentos conocidos son los más seguros." },
      { objective: "O2", q: "¿Cuándo debes beber agua?", options: ["Solo en el partido", "Nunca antes de los partidos", "Solo cuando te lo digan", "Durante todo el día, más con calor"], answer: 3, why: "La hidratación es un hábito de todo el día." },
      { objective: "O2", q: "¿Cuál puede ser una señal de que necesitas más líquido?", options: ["Sentirte descansado", "Pensar con claridad", "Orina oscura y dolor de cabeza", "Dormir bien"], answer: 2, why: "La orina oscura, el dolor de cabeza y los calambres pueden indicar poco líquido." },
      { objective: "O2", q: "Después de un entrenamiento duro, una merienda de recuperación tiene:", options: ["Solo agua", "Solo dulces", "Nada", "Carbohidratos y proteína"], answer: 3, why: "Los carbohidratos recargan energía; la proteína ayuda a reparar." },
      { objective: "O3", q: "¿Qué debes darle a la IA para conseguir ideas de comidas útiles?", options: ["Tu horario, tu presupuesto y tu cocina", "Tu historial médico", "Tu contraseña", "Tu tarjeta bancaria"], answer: 0, why: "Esos datos hacen que las ideas se ajusten a tu vida." },
      { objective: "O3", q: "¿Qué NO debes pedirle a la IA?", options: ["Recetas para microondas", "Una meta de calorías para bajar de peso", "Una lista de compras", "Ideas de comidas con frijoles"], answer: 1, why: "Las metas de calorías dependen de tu salud; pregúntale a un dietista." },
      { objective: "O3", q: "¿Cómo debes mencionarle a la IA una alergia a un alimento?", options: ["Pegando tu historial médico", "Escribiendo las notas de tu médico", "Con palabras generales, como “sin maní”", "No la menciones"], answer: 2, why: "Las palabras generales consiguen ideas seguras sin compartir historiales." },
      { objective: "O3", q: "Después de que la IA hace una lista de compras, debes:", options: ["Revisar los precios en tu tienda", "Confiar en los precios", "Comprar todo dos veces", "Publicarla"], answer: 0, why: "La IA no puede saber los precios reales de tu tienda." },
      { objective: "O3", q: "Los suplementos son riesgosos porque:", options: ["Siempre son ilegales", "Son gratis", "Los venden los entrenadores", "La FDA no los revisa antes de la venta y algunos contienen sustancias prohibidas"], answer: 3, why: "La USADA (la agencia antidopaje de Estados Unidos) advierte sobre suplementos contaminados y mal etiquetados." },
      { objective: "O4", q: "¿Qué te ayuda a dormirte?", options: ["Cafeína tarde en la noche", "Una habitación fresca y oscura", "Mirar el teléfono en la cama", "Una hora de dormir distinta cada noche"], answer: 1, why: "Una habitación fresca y oscura favorece el sueño." },
      { objective: "O4", q: "Siempre estás agotado incluso después de dormir. Debes:", options: ["Tomar más bebidas energéticas", "Hablar con tu médico", "No hacerle caso", "Entrenar más duro"], answer: 1, why: "El agotamiento constante es una razón para ver a un médico." },
      { objective: "O5", q: "Los días de descanso son:", options: ["De flojos", "Prohibidos", "Solo para lesionados", "Parte del entrenamiento"], answer: 3, why: "Tu cuerpo se adapta y se hace más fuerte en los días de descanso." },
      { objective: "O5", q: "¿Qué suena a dolor muscular normal?", options: ["Cansancio sordo de los músculos que se va en uno o dos días", "Dolor agudo en una articulación", "Hinchazón y cojera", "Dolor que sigue empeorando"], answer: 0, why: "El dolor muscular normal es sordo y se va." },
      { objective: "O5", q: "¿Dónde puedes aprender gratis las señales de una conmoción cerebral?", options: ["En un meme cualquiera", "En un anuncio de bebida deportiva", "En CDC HEADS UP", "En ninguna parte"], answer: 2, why: "Los CDC ofrecen la capacitación gratuita HEADS UP." },
      { objective: "O6", q: "Antes de pegar tu plan en la IA, quita:", options: ["Los horarios de entrenamiento", "Tu presupuesto", "Tus comidas favoritas", "Los datos privados de salud"], answer: 3, why: "Los datos de salud se mantienen privados." },
      { objective: "O6", q: "El plan que debes seguir es:", options: ["El primer borrador de la IA", "El que corregiste con un dietista, un preparador físico o un médico", "El plan de un influencer", "El plan de tu rival"], answer: 1, why: "Un profesional ajusta el plan a ti." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      8,
      9,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Comidas balanceadas",
        objective: "O1",
        notYet: "Las comidas dejan fuera un grupo de alimentos entero, o faltan comidas alrededor del entrenamiento.",
        meets: "Cada comida principal tiene carbohidratos, proteína, y frutas o verduras.",
        exceeds: "Se planea más energía los días duros y las comidas usan alimentos que al deportista ya le gustan."
      },
      {
        name: "Rutina del día de partido",
        objective: "O2",
        notYet: "No hay horarios, no hay plan de agua, o hay un alimento nuevo el día de partido.",
        meets: "Una comida conocida unas horas antes, un refrigerio pequeño más cerca del inicio, agua todo el día y un refrigerio de recuperación después.",
        exceeds: "Incluye un plan para el calor y las señales de alerta que significan parar y avisar al personal."
      },
      {
        name: "Lista de compras dentro del presupuesto",
        objective: "O3",
        notYet: "No hay lista de compras, o el plan le pide a la IA metas de calorías o dosis de suplementos.",
        meets: "Una lista de compras que se ajusta al presupuesto y a la cocina indicados, con las alergias descritas con palabras generales.",
        exceeds: "Los precios se revisaron en la tienda del deportista y la lista se ajustó."
      },
      {
        name: "Rutina de sueño",
        objective: "O4",
        notYet: "No hay una hora fija para despertarse o para acostarse.",
        meets: "Una hora fija para despertarse, para acostarse y para apagar las pantallas que encaja con el horario.",
        exceeds: "Las horas de sueño se registraron durante una semana y la rutina se ajustó a los entrenamientos temprano o a los partidos tarde."
      },
      {
        name: "Revisión profesional",
        objective: "O6",
        notYet: "El plan no se le mostró a un profesional, o tiene datos privados de salud.",
        meets: "Sin datos privados, el plan se le mostró a un dietista, un preparador físico o un médico y se actualizó según sus consejos.",
        exceeds: "El deportista anota qué se cambió y por qué."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarea final y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que dicen seguir su plan revisado de comidas y sueño 30 días después (encuesta de seguimiento)",
      "Participantes que dicen haber hablado de su plan con un dietista, un preparador físico o un médico",
      "Participantes que dicen haber avisado al personal de un dolor agudo, señales de enfermedad por calor o un golpe en la cabeza en lugar de seguir jugando"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Tu horario de entrenamientos y partidos, tu presupuesto semanal de comida y los datos de tu cocina",
      "El contacto de un dietista certificado, un preparador físico, el centro de salud estudiantil o un médico",
      "Unos 60 minutos, más tiempo para reunirte con el profesional"
    ],
    facilitatorNotes: [
      "Di con claridad que esto es educación general; no des en el grupo consejos individuales sobre calorías, peso o suplementos.",
      "Ten cuidado con el peso y la imagen corporal: nunca peses ni compares a los deportistas, y ten claro a quién derivar a alguien que esté pasando por un mal momento.",
      "Consigue acceso a un dietista certificado, un preparador físico o el centro de salud estudiantil antes de la tarea final, para que cada deportista pueda hacer revisar su plan.",
      "Repasa con todo el grupo las señales de enfermedad por calor y de golpe en la cabeza, y asegúrate de que los deportistas sepan a quién avisar.",
      "Respeta los presupuestos de comida, las alergias y las normas culturales o religiosas sobre la comida al compartir ejemplos de comidas."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-mental-performance.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// General education only, as in the English. The 988 Lifeline offers help in Spanish.

module.exports = {
  id: "athletes-mental-performance-es",
  lang: "es",
  translationOf: "athletes-mental-performance",
  category: "Athletes",
  name: "Rendimiento mental y concentración",
  skills: "Respiración cuadrada para calmar los nervios, Escribir palabras clave y diálogo interno, Armar una rutina antes del partido, Recuperarte después de un error, Saber cuándo y dónde pedir apoyo",
  outcome: "armar y usar una rutina escrita antes del partido con una pausa de respiración, palabras clave y un plan para recuperarte de los errores, y saber exactamente a quién acudir cuando el estrés es más que nervios.",
  about: [
    "Este curso es para deportistas que se ponen nerviosos, pierden la concentración o les cuesta recuperarse de los errores, y para entrenadores que quieren enseñar habilidades mentales sencillas. Son habilidades generales de rendimiento, no terapia.",
    "Practicarás habilidades que usan los deportistas de todos los niveles: respiración lenta, diálogo interno útil, rutinas y pausas rápidas para recuperarte. Usarás un asistente de IA para ayudarte a escribir tu rutina, y aprenderás cuándo hablar con una persona de verdad.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Si alguna vez te sientes en peligro o sin esperanza, llama o envía un mensaje de texto al 988 en Estados Unidos (hay ayuda en español), o habla de inmediato con un adulto de confianza."
  ],
  finalTask: "Escribe una tarjeta de una página con tu rutina antes del partido: el horario antes del partido, una pausa de respiración cuadrada, tres palabras clave y un plan de tres pasos para recuperarte de un error. Usa un asistente de IA para ayudarte con la redacción, practícala en dos entrenamientos y luego compártela con tu entrenador y ajústala.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas de secundaria, universidad y clubes que se ponen nerviosos, pierden la concentración o les cuesta recuperarse de los errores, y entrenadores que quieren enseñar habilidades mentales sencillas.",
    startingPoint: "Compiten con regularidad y sienten nervios el día de partido. La mayoría no tiene una rutina escrita, usa un diálogo interno negativo sin darse cuenta y no sabe bien a quién acudir cuando el estrés es más que nervios.",
    gap: "Los nervios sin manejar y quedarse pegado a los errores le cuestan rendimiento al deportista, y el estrés serio puede pasar sin que nadie lo note. Habilidades sencillas y practicadas ayudan a rendir bajo presión, y saber cuándo y dónde buscar apoyo de verdad puede proteger su salud y su vida.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de séptimo grado",
      "Solo habilidades generales de rendimiento, no terapia ni un reemplazo de un consejero",
      "Un teléfono o una computadora con un asistente de IA gratuito, o papel",
      "Unos 60 minutos de lecciones más práctica en dos entrenamientos del equipo",
      "La salud mental es privada y delicada; los recursos de crisis (988, 911) son de Estados Unidos"
    ],
    prerequisites: "Ninguno"
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pensando en un partido importante reciente", action: "describir tus propias señales de nervios en el cuerpo, tus pensamientos y cuándo empiezan", standard: "nombrando al menos dos señales del cuerpo y un pensamiento" },
    { id: "O2", condition: "Antes o durante el entrenamiento", action: "demostrar la respiración cuadrada durante cuatro rondas", standard: "contando cuatro en cada paso, o respirando despacio sin pausas si retener el aire te incomoda" },
    { id: "O3", condition: "Ante un pensamiento negativo que tienes a menudo", action: "escribir tres palabras clave que le digan a tu cuerpo qué hacer", standard: "con cada palabra clave de una a tres palabras y sobre algo que tú controlas" },
    { id: "O4", condition: "Usando tu horario del día de partido", action: "escribir una rutina antes del partido, desde la noche anterior hasta el primer silbatazo", standard: "solo con pasos que tú controlas, una pausa de respiración, tus palabras clave y los horarios revisados con tu entrenador" },
    { id: "O5", condition: "Después de un error durante un partido o un entrenamiento", action: "usar la pausa de tres pasos: soltar, reiniciar y reenfocar", standard: "completando los tres pasos antes de la siguiente jugada y dejando la revisión para después del partido" },
    { id: "O6", condition: "Ante señales de que el estrés es más que nervios", action: "identificar las señales de alerta y nombrar a quién acudir, incluidos el 988 y el 911", standard: "nombrando al menos a dos personas de confianza y el número correcto para una crisis y para una emergencia" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Calma y concentración",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entender los nervios del día de partido",
          minutes: 4,
          goal: "Notar tus propias señales de nervios y verlas como energía que puedes manejar.",
          text: [
            "Antes de un partido importante, tu corazón late más rápido, tus manos pueden sudar y puedes sentir mariposas en el estómago. Es tu cuerpo preparándose para rendir. Un poco ayuda; demasiado te puede poner tenso o apurado.",
            "Todos lo sienten, incluso los profesionales. La habilidad no es hacer que los nervios desaparezcan, sino notarlos y bajarlos a un nivel que te ayude.",
            "Empieza por notarlos. ¿Qué sientes en el cuerpo, qué pensamientos aparecen y cuándo empiezan? Escribirlo hace que sea más fácil manejarlo."
          ],
          words: [["Nervios", "la reacción natural del cuerpo antes de algo importante: corazón más rápido, manos sudadas, mariposas en el estómago."], ["Nivel de activación", "qué tan acelerado te sientes, desde muy tranquilo hasta muy tenso."]],
          slides: [
            { title: "Los nervios son normales", bullets: ["Corazón rápido, manos sudadas, mariposas", "Tu cuerpo se está preparando", "Los profesionales también los sienten"] },
            { title: "La habilidad", bullets: ["No es tener cero nervios", "Es tener la cantidad justa para ti"] },
            { title: "Empieza por notarlos", bullets: ["¿Qué siento en el cuerpo?", "¿Qué pensamientos aparecen?", "¿Cuándo empiezan?"] }
          ],
          tryIt: "Piensa en tu último partido importante. Escribe tres señales del cuerpo y dos pensamientos que tuviste antes de que empezara, y cuándo comenzaron.",
          youCanNow: "notar tus propias señales de nervios y describirlas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué son las mariposas en el estómago antes de un partido?", options: ["Una señal de que no deberías jugar", "Una señal de que eres débil", "Tu cuerpo preparándose para rendir", "Una señal de que estás enfermo"], answer: 2, why: "Estas señales son tu cuerpo preparándose; la habilidad está en manejarlas." },
            { objective: "O1", q: "Quieres empezar a manejar tus nervios. ¿Qué haces primero?", options: ["Escribir lo que sientes, lo que piensas y cuándo empieza", "Intentar que los nervios desaparezcan", "No hacerles ningún caso", "Saltarte el calentamiento"], answer: 0, why: "Notar los nervios y escribirlos hace que sea más fácil manejarlos." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Respiración cuadrada: una pausa de 60 segundos",
          minutes: 5,
          goal: "Usar la respiración cuadrada para calmar tu cuerpo en más o menos un minuto.",
          text: [
            "Respirar despacio es una de las formas más rápidas de calmar el cuerpo. La respiración cuadrada es sencilla: inhala contando hasta cuatro, aguanta cuatro, exhala cuatro y aguanta cuatro. Repítelo cuatro veces.",
            "Puedes hacerla en el banco, en la línea de tiro libre con cuentas más cortas, en el vestuario o antes de un examen. Practícala cuando estés tranquilo para que funcione cuando estés nervioso.",
            "Si aguantar la respiración te resulta incómodo, sáltate las pausas: solo inhala despacio y exhala todavía más despacio. Para si te mareas."
          ],
          steps: ["Inhala por la nariz contando 4.", "Aguanta 4.", "Exhala despacio contando 4.", "Aguanta 4.", "Repite 4 veces."],
          words: [["Respiración cuadrada", "inhalar, aguantar, exhalar y aguantar contando lo mismo, como los cuatro lados de un cuadrado."]],
          slides: [
            { title: "Respiración cuadrada", bullets: ["Inhala 4", "Aguanta 4", "Exhala 4", "Aguanta 4"] },
            { title: "Dónde usarla", bullets: ["En el banco o el vestuario", "Antes de un tiro libre o un saque", "Antes de un examen"] },
            { title: "Consejos", bullets: ["Practícala cuando estés tranquilo", "Sáltate las pausas si te incomodan", "Para si te mareas"] }
          ],
          tryIt: "Haz ahora mismo cuatro vueltas de respiración cuadrada. Califica del 1 al 10 qué tan tenso te sientes antes y después.",
          youCanNow: "usar la respiración cuadrada para calmar tu cuerpo en más o menos un minuto.",
          quickCheck: [
            { objective: "O2", q: "¿Cuántas rondas de respiración cuadrada sugiere la lección?", options: ["Una", "Diez", "Cuatro", "Veinte"], answer: 2, why: "Inhala 4, retén 4, exhala 4, retén 4, y repite cuatro veces." },
            { objective: "O2", q: "Te mareas durante la respiración cuadrada. ¿Qué haces?", options: ["Retener el aire más tiempo", "Parar", "Respirar más rápido", "Seguir diez rondas más"], answer: 1, why: "La lección dice que pares si te mareas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Palabras clave y diálogo interno",
          minutes: 5,
          goal: "Escribir tres palabras clave y convertir el diálogo interno negativo en instrucciones útiles.",
          text: [
            "El diálogo interno es lo que te dices a ti mismo en la cabeza. “No falles” pone en tu mente la imagen de fallar. “Suelta suave, termina el movimiento” le dice a tu cuerpo qué hacer.",
            "Las palabras clave son de una a tres palabras que dirigen tu atención: “mirada arriba”, “pies rápidos”, “siguiente jugada”, “fuerte y firme”. Elige palabras sobre lo que controlas, no sobre el marcador.",
            "Un asistente de IA puede ayudarte. Prueba: “Saco en voleibol. Cuando estoy nervioso pienso ‘no la mandes a la red’. Dame cinco palabras clave cortas que me digan qué hacer en lugar de eso.” Elige las que vayan contigo."
          ],
          steps: ["Escribe un pensamiento negativo que tienes a menudo.", "Pregúntate: ¿qué quiero que haga mi cuerpo en su lugar?", "Conviértelo en 1 a 3 palabras.", "Elige tres palabras clave y practica decirlas."],
          words: [["Diálogo interno", "las palabras que te dices a ti mismo en la cabeza."], ["Palabra clave", "una palabra o frase corta que dirige tu atención a lo que tienes que hacer."]],
          slides: [
            { title: "El diálogo interno guía la acción", bullets: ["“No falles” -> imaginas que fallas", "“Suelta suave” -> te dice qué hacer"] },
            { title: "Buenas palabras clave", bullets: ["De 1 a 3 palabras", "Sobre lo que controlas", "“Mirada arriba” “Pies rápidos” “Siguiente jugada”"] },
            { title: "La IA puede ayudar", bullets: ["Dale tu pensamiento negativo", "Pide 5 frases cortas de “haz esto”", "Quédate con las que van contigo"] }
          ],
          tryIt: "Escribe un pensamiento negativo que tengas en los partidos. Usa un asistente de IA para conseguir cinco palabras clave que te digan qué hacer en su lugar. Elige tus tres favoritas.",
          youCanNow: "escribir palabras clave y convertir el diálogo interno negativo en instrucciones útiles.",
          quickCheck: [
            { objective: "O3", q: "¿Qué es una palabra clave?", options: ["Un discurso largo antes de un partido", "Una palabra sobre el marcador", "Una palabra que dice tu rival", "De una a tres palabras que dirigen tu concentración"], answer: 3, why: "Las palabras clave son frases cortas como \"mirada arriba\" que dirigen tu concentración." },
            { objective: "O3", q: "Antes de un penal sueles pensar \"no falles\". ¿Por qué lo cambias?", options: ["\"No vuelvas a fallar\"", "\"Contacto suave, sigue el movimiento\"", "\"Si fallo, perdemos\"", "\"Ojalá entre\""], answer: 1, why: "El diálogo interno útil le dice a tu cuerpo qué hacer, no qué evitar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Calma y concentración",
        questions: [
          { objective: "O1", q: "Antes de un partido importante, tu corazón se acelera. Esto significa que:", options: ["Algo anda mal contigo", "Deberías abandonar", "Tu cuerpo se está preparando para rendir", "No eres lo bastante bueno"], answer: 2, why: "Los nervios son una reacción normal del cuerpo antes de los momentos importantes." },
          { objective: "O1", q: "¿Cuál es el objetivo con los nervios?", options: ["Bajarlos a un nivel que te ayude", "Hacer que desaparezcan del todo", "No hacerles caso nunca", "Hacerlos más grandes"], answer: 0, why: "Algo de nervios ayuda; la habilidad es manejar el nivel." },
          { objective: "O2", q: "¿Cuáles son las cuentas de la respiración cuadrada?", options: ["Inhala 1, exhala 10", "Inhala 10, aguanta 10", "Solo respiraciones rápidas", "Inhala 4, aguanta 4, exhala 4, aguanta 4"], answer: 3, why: "Cuentas iguales, como los lados de un cuadrado." },
          { objective: "O3", q: "¿Cuál es una palabra clave útil?", options: ["“No la arruines”", "“Pies rápidos”", "“No falles”", "“Siempre me ahogo”"], answer: 1, why: "Le dice a tu cuerpo qué hacer." },
          { objective: "O2", q: "¿Cuándo debes practicar la respiración cuadrada?", options: ["Solo en el partido más importante", "Cuando estás tranquilo, para que funcione cuando estés nervioso", "Nunca", "Solo de noche"], answer: 1, why: "Practicar con calma deja lista la habilidad para cuando hay presión." }
        ]
      }
    },
    {
      name: "Capítulo 2: Rutinas, pausas y apoyo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar una rutina antes del partido",
          minutes: 5,
          goal: "Escribir una rutina antes del partido con horarios y pasos que tú controlas.",
          text: [
            "Una rutina es un conjunto de pasos que haces igual antes de cada partido. Le da a tu mente algo conocido a qué agarrarse, para que te sientas listo sin importar el rival.",
            "Una rutina sencilla: la noche anterior (preparar el bolso, rutina de sueño), comida del día de partido, llegada, calentamiento, una pausa de respiración de un minuto, tus palabras clave y concentrarte en tu primera tarea del partido.",
            "Mantén los pasos sobre cosas que tú controlas. Las cábalas están bien para divertirse, pero la rutina tiene que funcionar aunque olvides tus medias de la suerte. Revisa los horarios con tu entrenador para que encaje con el calentamiento del equipo."
          ],
          steps: ["Haz una lista de lo que haces desde la noche anterior hasta el pitazo inicial.", "Agrega una pausa de respiración y tus palabras clave.", "Nombra tu primera tarea del partido.", "Quédate solo con los pasos que controlas.", "Revisa que encaje con el calentamiento de tu equipo."],
          words: [["Rutina", "pasos que repites siempre de la misma manera."], ["Controlable", "algo que puedes elegir o cambiar tú mismo, como el esfuerzo o la preparación."]],
          slides: [
            { title: "Por qué funcionan las rutinas", bullets: ["Algo conocido a qué agarrarse", "Listo contra cualquier rival"] },
            { title: "Una rutina sencilla", bullets: ["La noche anterior: bolso, sueño", "Comida del día de partido y llegada", "Calentamiento, pausa de respiración, palabras clave", "Primera tarea del partido"] },
            { title: "Que sea controlable", bullets: ["Funciona sin las medias de la suerte", "Encaja con el calentamiento del equipo"] }
          ],
          tryIt: "Pídele a un asistente de IA que convierta tu lista de pasos antes del partido en un horario ordenado desde la noche anterior hasta el pitazo inicial. Edítalo para que coincida con tu día de partido real.",
          youCanNow: "escribir una rutina antes del partido hecha con pasos que tú controlas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es una rutina antes del partido?", options: ["Pasos que haces de la misma manera antes de cada partido", "Un plan nuevo para cada rival", "Una lista de amuletos de la suerte", "El plan de juego del entrenador"], answer: 0, why: "Una rutina es el mismo grupo de pasos en cada partido, y le da a tu mente algo conocido." },
            { objective: "O4", q: "Tu rutina depende de usar una camiseta de la suerte. ¿Qué haces?", options: ["Agregar más supersticiones", "No jugar si olvidas la camiseta", "Asegurarte de que la rutina funcione igual con pasos que tú controlas", "Pedirle al entrenador que lleve una de repuesto"], answer: 2, why: "Mantén los pasos en cosas que tú controlas para que la rutina funcione de todos modos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Recuperarte después de un error",
          minutes: 5,
          goal: "Usar una pausa de tres pasos para dejar atrás un error durante un partido.",
          text: [
            "Todos los deportistas se equivocan. Lo que importa es qué tan rápido pasas a la siguiente jugada. Quedarte pensando en un error muchas veces causa el siguiente.",
            "Una pausa de tres pasos: 1. Soltar: una acción física que diga “listo”, como limpiarte las manos, tocar tu zapatilla o soltar el aire. 2. Reiniciar: una respiración lenta. 3. Reenfocar: di tu palabra clave para la siguiente jugada.",
            "Después del partido, no durante, revisa el error para aprender de él con tu entrenador o con el video. En el momento, la única tarea es la siguiente jugada."
          ],
          steps: ["Soltar: una acción física que signifique “listo”.", "Reiniciar: una respiración lenta.", "Reenfocar: di tu palabra clave de la siguiente jugada.", "Aprende del error después del partido, no durante."],
          words: [["Pausa de reinicio", "una rutina rápida para despejar la mente y prepararte para el siguiente momento."], ["Mentalidad de siguiente jugada", "concentrarte en lo que viene, no en lo que acaba de pasar."]],
          slides: [
            { title: "Los errores pasan", bullets: ["Quedarte pensando causa el siguiente", "Importa qué tan rápido te recuperas"] },
            { title: "Pausa de tres pasos", bullets: ["1. Soltar: un “listo” físico", "2. Reiniciar: una respiración lenta", "3. Reenfocar: palabra clave de la siguiente jugada"] },
            { title: "Aprende después", bullets: ["Revísalo después del partido", "Con tu entrenador o con el video"] }
          ],
          tryIt: "Elige tu acción para soltar y tu palabra clave de la siguiente jugada. En tu próximo entrenamiento, usa la pausa de tres pasos después de cada error y cuenta cuántas veces la usaste.",
          youCanNow: "usar una pausa de tres pasos para dejar atrás rápido un error.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es el paso de soltar en la pausa después de un error?", options: ["Discutir con el árbitro", "Repetir el error en tu cabeza", "Decirles a tus compañeros qué salió mal", "Una acción física que diga \"listo\""], answer: 3, why: "Soltar es una acción física, como limpiarte las manos o tocarte el zapato." },
            { objective: "O5", q: "Se te acaba de caer un pase. ¿Cuál es tu tarea ahora mismo?", options: ["Pensar por qué pasó", "Soltar, hacer una respiración lenta y decir tu palabra clave de la siguiente jugada", "Ver la repetición", "Pedir salir del partido"], answer: 1, why: "En ese momento, tu única tarea es la siguiente jugada; aprende del error después del partido." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Cuando es más que nervios: buscar apoyo",
          minutes: 5,
          goal: "Identificar las señales de que el estrés necesita apoyo de verdad y nombrar a quién acudir.",
          text: [
            "Las habilidades mentales ayudan con la presión normal. Pero a veces el estrés es más grande: te sientes triste la mayoría de los días, pierdes el interés por cosas que te gustaban, no puedes dormir o comer, te sientes sin esperanza o piensas en hacerte daño. Eso no es debilidad, y no es algo que pueda arreglar un ejercicio de respiración ni un chatbot de IA.",
            "Acude a una persona de verdad: tu padre, tu madre o un adulto de confianza, tu entrenador, tu preparador físico, un consejero escolar, el médico del equipo o un profesional de salud mental con licencia. Muchas escuelas y universidades ofrecen orientación psicológica gratuita.",
            "Si tú o alguien que conoces está en crisis o piensa en el suicidio en Estados Unidos, llama o envía un mensaje de texto al 988, o chatea en 988lifeline.org. Es gratis, atiende las 24 horas todos los días y hay ayuda en español. En una emergencia, llama al 911."
          ],
          steps: ["Fíjate en las señales de que es más que nervios.", "Cuéntaselo a un adulto de confianza, tu entrenador, tu preparador físico o un consejero.", "Busca el servicio de orientación psicológica de tu escuela.", "En crisis: llama o escribe al 988. En una emergencia: 911."],
          words: [["Profesional de salud mental con licencia", "un consejero, psicólogo o terapeuta formado y con licencia."], ["Línea 988", "la línea gratuita de prevención del suicidio y crisis de Estados Unidos (988 Suicide and Crisis Lifeline): llamada, mensaje de texto o chat, las 24 horas."]],
          slides: [
            { title: "Es más que nervios si", bullets: ["Te sientes triste la mayoría de los días", "Perdiste el interés, no puedes dormir ni comer", "Te sientes sin esperanza o piensas en hacerte daño"] },
            { title: "Habla con una persona de verdad", bullets: ["Adulto de confianza, entrenador, preparador físico", "Consejero escolar o médico del equipo", "Profesional de salud mental con licencia"] },
            { title: "En una crisis", bullets: ["Llama o escribe al 988 (EE. UU.), gratis, las 24 horas", "Chatea en 988lifeline.org", "Emergencia: 911"] }
          ],
          sources: [{ name: "988 Suicide and Crisis Lifeline (Línea 988 de Prevención del Suicidio y Crisis)", url: "https://988lifeline.org/" }],
          tryIt: "Tarea final: escribe tu tarjeta de una página con tu rutina antes del partido, tu pausa de respiración, tres palabras clave y tu pausa de tres pasos para los errores. Abajo, escribe los nombres de dos personas con quienes podrías hablar y cómo comunicarte con el servicio de orientación de tu escuela. Comparte la tarjeta con tu entrenador.",
          youCanNow: "usar tu rutina de rendimiento mental y saber cuándo y dónde buscar apoyo de verdad.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de que el estrés necesita apoyo de verdad?", options: ["Sentirte sin esperanza la mayoría de los días", "Nervios antes de un partido importante", "El corazón acelerado en la línea de salida", "Las manos sudadas en la línea de tiros libres"], answer: 0, why: "Sentirte triste o sin esperanza la mayoría de los días es más que nervios normales." },
            { objective: "O6", q: "Un amigo te escribe que está pensando en el suicidio. En Estados Unidos, ¿qué haces?", options: ["Guardar el secreto", "Decirle que pruebe la respiración cuadrada", "Preguntarle a un chatbot de IA qué hacer", "Avisar de inmediato a un adulto de confianza y compartir el 988, o llamar al 911 si está en peligro ahora"], answer: 3, why: "Tiene que ayudar una persona real; el 988 es la línea de crisis y el 911 es para emergencias." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Rutinas, pausas y apoyo",
        questions: [
          { objective: "O4", q: "¿Por qué los deportistas usan rutinas antes del partido?", options: ["Para saltarse el calentamiento", "Para impresionar a los aficionados", "Para evitar al entrenador", "Para darle a la mente algo conocido y sentirse listos"], answer: 3, why: "Las rutinas crean un camino conocido para sentirte listo." },
          { objective: "O4", q: "¿Qué paso de la rutina es controlable?", options: ["Tu pausa de respiración de un minuto", "Las decisiones del árbitro", "El clima", "La alineación del otro equipo"], answer: 0, why: "Tú eliges hacer tu pausa de respiración." },
          { objective: "O5", q: "¿Cuál es el paso 1 de la pausa después de un error?", options: ["Discutir con el árbitro", "Repetirlo en tu cabeza", "Soltar: una acción física que signifique “listo”", "Salir del partido"], answer: 2, why: "Una acción física para soltar te ayuda a dejarlo ir." },
          { objective: "O5", q: "¿Cuándo debes estudiar un error?", options: ["En medio de la siguiente jugada", "Nunca", "Mientras habla el entrenador", "Después del partido, con tu entrenador o con el video"], answer: 3, why: "Durante el partido, la única tarea es la siguiente jugada." },
          { objective: "O6", q: "Un compañero te dice que se siente sin esperanza y habla de hacerse daño. ¿Qué haces?", options: ["Le dices que haga respiración cuadrada", "Se lo cuentas de inmediato a un adulto de confianza y le compartes la línea 988", "Lo guardas en secreto", "Le dices que le pregunte a un chatbot"], answer: 1, why: "Esto necesita personas de verdad y apoyo de crisis ahora." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Rendimiento mental y concentración",
    questions: [
      { objective: "O1", q: "Las manos sudadas antes de un partido son:", options: ["Una señal para abandonar", "Siempre peligrosas", "Una señal normal de nervios", "Una falta al reglamento"], answer: 2, why: "Es tu cuerpo preparándose." },
      { objective: "O1", q: "¿Los deportistas profesionales sienten nervios?", options: ["Sí, y los manejan", "Nunca", "Solo los novatos", "Solo en los entrenamientos"], answer: 0, why: "Todos sienten nervios; los profesionales los manejan." },
      { objective: "O1", q: "El primer paso para manejar los nervios es:", options: ["Notar lo que sientes y piensas", "No hacerles caso", "Gritar", "Faltar al partido"], answer: 0, why: "No puedes manejar lo que no notas." },
      { objective: "O2", q: "¿Cuántas partes iguales tiene la respiración cuadrada?", options: ["Dos", "Tres", "Cuatro", "Cinco"], answer: 2, why: "Inhalar, aguantar, exhalar, aguantar." },
      { objective: "O2", q: "Si aguantar la respiración te hace sentir mal, puedes:", options: ["Aguantar más tiempo", "Saltarte las pausas y exhalar despacio", "Dejar de respirar", "Respirar muy rápido"], answer: 1, why: "Respirar despacio sin pausas igual te calma." },
      { objective: "O3", q: "El diálogo interno es:", options: ["Hablar con el árbitro", "Un grito del equipo", "Una publicación en internet", "Lo que te dices a ti mismo en la cabeza"], answer: 3, why: "Es tu voz interior." },
      { objective: "O3", q: "¿Qué diálogo interno ayuda más?", options: ["“No falles”", "“Siempre me ahogo”", "“Suelta suave, termina el movimiento”", "“Esto no tiene remedio”"], answer: 2, why: "Le dice a tu cuerpo qué hacer." },
      { objective: "O3", q: "Las buenas palabras clave se centran en:", options: ["El marcador", "El público", "El otro equipo", "Lo que controlas"], answer: 3, why: "Controla lo que puedes controlar." },
      { objective: "O3", q: "¿Cómo puede ayudarte la IA con las palabras clave?", options: ["Puede sugerir frases cortas de “haz esto” entre las que tú eliges", "Puede jugar por ti", "Puede diagnosticar ansiedad", "No puede ayudar en nada"], answer: 0, why: "La IA es buena para redactar; tú eliges lo que va contigo." },
      { objective: "O4", q: "Una rutina antes del partido debe funcionar igual si:", options: ["Ganas", "Olvidas tus medias de la suerte", "El entrenador se va", "Llueve"], answer: 1, why: "Está hecha de pasos controlables, no de la suerte." },
      { objective: "O4", q: "¿Con quién debes revisar los horarios de tu rutina?", options: ["Con tu rival", "Con un desconocido en internet", "Con tu entrenador", "Con nadie"], answer: 2, why: "Tiene que encajar con el calentamiento del equipo." },
      { objective: "O5", q: "¿Qué es la mentalidad de siguiente jugada?", options: ["Concentrarte en lo que viene, no en lo que pasó", "Repetir los errores en tu cabeza", "Culpar a los compañeros", "Mirar el marcador"], answer: 0, why: "La siguiente jugada es la única que puedes cambiar." },
      { objective: "O5", q: "¿Cuál es el paso 2 de la pausa después de un error?", options: ["Discutir", "Salir de la cancha", "Mirar las redes sociales", "Una respiración lenta"], answer: 3, why: "Soltar, reiniciar con una respiración, reenfocar." },
      { objective: "O5", q: "¿Cuál es el paso 3 de la pausa después de un error?", options: ["Gritar", "Reenfocar con tu palabra clave de la siguiente jugada", "Repetir el error en tu cabeza", "Mirar al público"], answer: 1, why: "La palabra clave te dirige a la siguiente tarea." },
      { objective: "O6", q: "¿Cuál es una señal de que el estrés es más que nervios?", options: ["Mariposas antes de un partido", "Sentirte triste la mayoría de los días y perder el interés", "Estar emocionado", "Corazón rápido antes del saque inicial"], answer: 1, why: "El ánimo bajo que no se va necesita apoyo de verdad." },
      { objective: "O6", q: "¿Un chatbot de IA puede reemplazar a un consejero?", options: ["Sí", "Solo los fines de semana", "Solo para deportistas", "No, habla con una persona de verdad"], answer: 3, why: "El estrés serio necesita a una persona formada." },
      { objective: "O6", q: "¿Con quién puedes hablar sobre un estrés serio?", options: ["Con un adulto de confianza, tu entrenador, tu preparador físico o un consejero escolar", "Solo contigo mismo", "Con nadie", "Con los rivales"], answer: 0, why: "Estas personas pueden ayudarte o ponerte en contacto con ayuda." },
      { objective: "O6", q: "En Estados Unidos, el número de la línea de crisis es:", options: ["411", "311", "988", "0"], answer: 2, why: "Llama o escribe al 988 para la línea de prevención del suicidio y crisis." },
      { objective: "O6", q: "¿Cuándo atiende la línea 988?", options: ["Solo entre semana", "Solo de noche", "Solo durante la temporada", "Las 24 horas, todos los días"], answer: 3, why: "Es gratis y atiende las 24 horas, todos los días." },
      { objective: "O6", q: "En una emergencia en la que alguien está en peligro ahora mismo, llamas:", options: ["Solo a tu entrenador", "Al 911", "A un amigo más tarde", "A nadie"], answer: 1, why: "El 911 es para emergencias que están pasando ahora." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      2,
      3,
      6,
      9,
      12,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Horario antes del partido",
        objective: "O4",
        notYet: "A los pasos les faltan horarios, o dependen de cosas que el deportista no controla.",
        meets: "Un horario desde la noche anterior hasta el primer silbatazo, solo con pasos que se pueden controlar, revisado con el entrenador.",
        exceeds: "Nombra la primera tarea del deportista en el partido y encaja exactamente con el calentamiento del equipo."
      },
      {
        name: "Pausa de respiración",
        objective: "O2",
        notYet: "No hay pausa de respiración, o los conteos no están claros.",
        meets: "La respiración cuadrada (o la respiración lenta sin pausas) está en la tarjeta en un momento fijo y se practicó en dos entrenamientos.",
        exceeds: "Incluye una versión más corta para momentos del partido, como la línea de tiros libres."
      },
      {
        name: "Palabras clave",
        objective: "O3",
        notYet: "Hay menos de tres palabras clave, o hablan del marcador o de lo que hay que evitar.",
        meets: "Tres palabras clave de una a tres palabras cada una, sobre lo que el deportista controla.",
        exceeds: "Cada palabra clave reemplaza un pensamiento negativo concreto que el deportista tiene a menudo."
      },
      {
        name: "Pausa después de un error",
        objective: "O5",
        notYet: "Falta uno o más de los tres pasos.",
        meets: "Soltar, reiniciar y reenfocar están escritos con la acción y la palabra clave propias del deportista.",
        exceeds: "El deportista dice haberla usado en el entrenamiento y anota qué revisar después del partido."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarjeta de rutina y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que dicen seguir usando su rutina y su pausa después de un error 30 días después (encuesta de seguimiento)",
      "Participantes que en el seguimiento pueden nombrar a quién acudir y la Línea 988",
      "Entrenadores que dicen haber agregado una pausa de respiración o una pausa después de un error a los entrenamientos del equipo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel o una nota en el teléfono para la tarjeta de rutina",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini), opcional",
      "La hora de tu próximo partido y el plan de calentamiento del equipo",
      "Los datos de contacto de tu consejero escolar o tu preparador físico",
      "Unos 60 minutos, más práctica en dos entrenamientos del equipo"
    ],
    facilitatorNotes: [
      "Di con claridad que estas son habilidades de rendimiento, no terapia; no intentes dar consejería a los deportistas en el grupo.",
      "Antes de la lección 6, averigua cuál es el servicio de consejería de tu escuela y compártelo junto con el 988 y el 911.",
      "Si un deportista dice que está en crisis o que piensa hacerse daño, quédate con él y busca de inmediato a un adulto de confianza o a un profesional.",
      "Practiquen juntos la respiración cuadrada cuando estén tranquilos; diles a los deportistas que se salten las pausas o paren si se marean.",
      "Mantén privadas las tarjetas de rutina, salvo que el deportista decida compartirlas con el entrenador."
    ]
  }
};

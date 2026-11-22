"use strict";

// Koach Learn course (Spanish translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations".
// An AWARENESS course, as in the English: it does not certify anyone. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (Biblioteca Nacional de Medicina de EE. UU.): RCP en adultos y niños después de la pubertad (en inglés)", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Atragantamiento en adultos o niños mayores de 1 año (en inglés)", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Sangrado (en inglés)", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Primeros auxilios en un ataque al corazón (en inglés)", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Signos y síntomas de un derrame cerebral (en inglés)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: cursos de RCP y primeros auxilios", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "Cruz Roja Americana: clases de primeros auxilios, RCP y DEA", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Atención médica y primeros auxilios (en inglés)", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-es",
  lang: "es",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Primeros auxilios y RCP: conocimientos básicos",
  skills: "Revisar la escena y llamar al 911, Pasos de la RCP solo con las manos, Usar un DEA, Ayudar a una persona que se atraganta, Detener un sangrado grave, Reconocer un ataque al corazón y un derrame cerebral",
  outcome: "actuar con calma en los primeros minutos de una emergencia: comprobar que es seguro, llamar al 911 (o al número de emergencias de tu país), seguir los pasos de la RCP solo con las manos y de un DEA, ayudar en un atragantamiento y en un sangrado grave, reconocer un ataque al corazón o un derrame cerebral, e inscribirte en una clase presencial de RCP y primeros auxilios que da un certificado real.",
  about: [
    "Este curso es para cualquier persona que quiera estar lista para ayudar: jóvenes que buscan su primer trabajo, padres y abuelos, trabajadores de guarderías, restaurantes, tiendas, seguridad y oficios, y voluntarios de organizaciones sin fines de lucro e iglesias. Muchos de estos trabajos piden un certificado de RCP y primeros auxilios.",
    "Aprenderás el orden para actuar en una emergencia, los pasos de la RCP solo con las manos, cómo un DEA te guía con su voz para dar una descarga, y qué hacer en un atragantamiento, un sangrado grave, un ataque al corazón y un derrame cerebral. Los pasos siguen las guías generales de la Cruz Roja Americana, la American Heart Association (Asociación Americana del Corazón) y la Biblioteca Nacional de Medicina de EE. UU.",
    "Este es un curso de conocimientos básicos. Te PREPARA; no te da un certificado de RCP ni de primeros auxilios. Las habilidades prácticas reales, como presionar el pecho a la profundidad correcta, se aprenden y se evalúan en persona con un instructor calificado, usando un maniquí de práctica. La última lección te muestra cómo encontrar esa clase.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\" con papel o una almohada. Hay una comprobación rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu propio Plan de preparación en primeros auxilios y RCP en una página: (1) tu número de emergencias y cómo decir tu dirección con claridad; (2) dónde están el DEA y el botiquín de primeros auxilios más cercanos en casa, el trabajo, la escuela o tu lugar de culto; (3) los pasos de emergencia, escritos de memoria y en el orden correcto (revisar, llamar, RCP y DEA, atragantamiento, sangrado, B.E. F.A.S.T.); y (4) una clase presencial de RCP, DEA y primeros auxilios que elijas de la Cruz Roja Americana o de la American Heart Association, con su nombre, quién da el certificado, dónde es y la fecha en que la tomarás.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Un grupo mixto: adolescentes y jóvenes que buscan su primer trabajo, adultos en trabajos que piden RCP y primeros auxilios o que van a empezar en ellos (guarderías, restaurantes, tiendas, seguridad, oficios, cuidado en casa), adultos mayores que cuidan a su pareja o a sus nietos, y voluntarios de organizaciones sin fines de lucro e iglesias. Algunos hablan el idioma como segunda lengua.",
    startingPoint: "La mayoría sabe que hay que llamar al 911, pero se paraliza o no sabe qué hacer después. Muchos han visto la RCP en la televisión pero nunca la han practicado. Pocos saben dónde está el DEA más cercano o cómo funciona. Algunos creen que podrían meterse en problemas por ayudar.",
    gap: "En un paro cardíaco, un atragantamiento o un sangrado grave, los primeros minutos antes de que llegue la ayuda son los más importantes. Los participantes necesitan un orden claro de pasos, la confianza para empezar y un plan para certificarse en persona, porque muchos trabajos exigen un certificado vigente de un proveedor reconocido.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (alrededor de sexto grado)",
      "Dispositivos: un teléfono o una computadora de biblioteca; la práctica se hace con papel, una almohada o una toalla enrollada",
      "Tiempo: lecciones de 4 a 6 minutos",
      "Seguridad: solo conocimientos básicos; no se practica con una persona real; las habilidades prácticas y la certificación se hacen en persona con un instructor calificado",
      "Sin dosis de medicamentos ni consejos clínicos; sigue al operador del 911 y a los equipos de emergencia",
      "Los números de emergencia cambian según el país: 911 en EE. UU.; quienes viven en otro país usan su número local"
    ],
    prerequisites: "Ninguno. Quien quiera aprender más sobre cómo leer información de salud puede tomar también \"Alfabetización en salud\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Dada una escena de emergencia descrita con palabras", action: "revisar si la escena tiene peligros, comprobar si la persona responde y llamar al 911 o al número de emergencias local", standard: "en el orden correcto, diciendo la dirección y lo que pasó en una oración clara" },
    { id: "O2", condition: "Dado un adulto que se desploma y no respira con normalidad", action: "enumerar los pasos de la RCP solo con las manos y del uso de un DEA", standard: "en el orden correcto, con la posición de las manos, un ritmo de 100 a 120 por minuto y una profundidad de unas 2 pulgadas" },
    { id: "O3", condition: "Dada la descripción de un adulto que podría estar atragantado", action: "identificar las señales de atragantamiento y describir los primeros auxilios", standard: "distinguiendo a una persona que puede toser y hablar de una que no puede" },
    { id: "O4", condition: "Dada una herida que sangra mucho", action: "describir cómo controlar el sangrado con presión firme y directa", standard: "mencionando guantes o una barrera, una presión que no se detiene y agregar capas en lugar de levantar la tela" },
    { id: "O5", condition: "Dada una lista de síntomas", action: "reconocer las señales de alerta de un ataque al corazón y de un derrame cerebral con B.E. F.A.S.T.", standard: "acertando al menos 4 de 5 y llamando al 911 en lugar de llevar a la persona en auto" },
    { id: "O6", condition: "Usando el buscador de clases de la Cruz Roja Americana o de la American Heart Association", action: "elegir una clase presencial de RCP, DEA y primeros auxilios y escribir un plan de capacitación con fecha", standard: "indicando el curso, quién otorga el certificado y si tu trabajo lo exige" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Actúa rápido y mantén un corazón funcionando",
      lessons: [
        {
          title: "Revisar, llamar, atender: el primer minuto",
          objectives: ["O1"],
          minutes: 5,
          goal: "Revisar la escena y a la persona, y luego llamar al 911 con un mensaje claro.",
          text: [
            "En cualquier emergencia, empieza con tres palabras: revisar, llamar, atender. Primero REVISA que la escena sea segura para ti: tráfico, fuego, humo, electricidad, una persona agresiva o agua profunda. Si no es segura, quédate lejos y llama. No puedes ayudar a nadie si tú también te lastimas.",
            "Luego revisa a la persona. Tócale el hombro y grita: \"¿Está bien?\". Mira su pecho para ver si respira con normalidad. Jadear de vez en cuando NO es respirar con normalidad.",
            "Después LLAMA al 911 (o al número de emergencias local si estás fuera de EE. UU.). Si alguien está contigo, señálalo y dile: \"Usted, llame al 911 y traiga un DEA\". Pon el teléfono en altavoz. Di primero la dirección, luego lo que pasó, y no cuelgues hasta que el operador te lo diga. El operador puede guiarte para hacer la RCP.",
            "Luego ATIENDE: da la ayuda que puedas hasta que llegue ayuda capacitada. Usa guantes o una barrera si los tienes. Muchos estados de EE. UU. tienen leyes del Buen Samaritano que protegen a quienes ayudan de buena fe; los detalles cambian según el estado."
          ],
          steps: ["Revisa la escena: ¿es segura para mí?", "Revisa a la persona: tócala, grita \"¿Está bien?\" y mira si respira con normalidad.", "Llama al 911 (o a tu número local), o señala a una persona para que llame y a otra para que traiga un DEA.", "Teléfono en altavoz: primero la dirección, luego lo que pasó. No cuelgues.", "Atiende: ayuda hasta que llegue ayuda capacitada."],
          words: [["Operador", "la persona capacitada que contesta las llamadas al 911, envía ayuda y puede decirte qué hacer."], ["Que no responde", "una persona que no se mueve, no abre los ojos ni contesta cuando la tocas y le gritas."], ["Ley del Buen Samaritano", "una ley estatal que protege a quienes ayudan de buena fe en una emergencia; los detalles cambian según el estado."]],
          slides: [
            { title: "Revisar, llamar, atender", bullets: ["Revisar: ¿la escena es segura? ¿La persona responde?", "Llamar: al 911 o al número de emergencias local", "Atender: ayudar hasta que llegue ayuda capacitada"] },
            { title: "Revisa a la persona", bullets: ["Tócale el hombro y grita \"¿Está bien?\"", "Mira el pecho para ver si respira con normalidad", "Jadear NO es respirar con normalidad"] },
            { title: "Llama con claridad", bullets: ["Señala a una persona: \"Usted, llame al 911\"", "Pide a otra que traiga un DEA", "Primero la dirección, luego lo que pasó", "No cuelgues; el operador te ayuda"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Escribe la oración que dirías al 911 desde tu casa: tu dirección completa con la calle que cruza más cercana, y luego \"un hombre se desplomó y no respira\". Léela en voz alta dos veces hasta que puedas decirla sin mirar.",
          youCanNow: "revisar la escena y a la persona, y llamar al 911 con un mensaje claro.",
          quickCheck: [
            { objective: "O1", q: "Ves a un hombre tirado en la calle y pasan autos. ¿Qué haces primero?", options: ["Corres hacia él de inmediato", "Te aseguras de que la escena es segura para ti y luego llamas al 911", "Empiezas la RCP en medio de la calle", "Le grabas un video"], answer: 1, why: "Primero se comprueba que la escena es segura; si no lo es, quédate lejos y llama." },
            { objective: "O1", q: "En la llamada al 911, ¿qué dices primero?", options: ["La historia de tu vida", "El historial médico de la persona", "La dirección o el lugar", "El modelo de tu teléfono"], answer: 2, why: "La dirección va primero para que puedan enviar ayuda aunque la llamada se corte." }
          ]
        },
        {
          title: "RCP solo con las manos: presiona fuerte y rápido",
          objectives: ["O2"],
          minutes: 6,
          goal: "Enumerar los pasos de la RCP solo con las manos en el orden correcto.",
          text: [
            "Cuando un adulto se desploma de repente, no responde y no respira con normalidad, es posible que su corazón se haya detenido. Esto se llama paro cardíaco. La RCP empuja la sangre hacia el cerebro hasta que llegan un DEA y los equipos de emergencia.",
            "La American Heart Association enseña la RCP solo con las manos a cualquier persona que no esté capacitada o no se sienta segura para dar respiraciones: llama al 911 y luego presiona fuerte y rápido en el centro del pecho. No necesitas buscar el pulso, a menos que seas profesional de la salud.",
            "Arrodíllate al lado de la persona, sobre una superficie firme y plana. Pon el talón de una mano en el centro del pecho y la otra mano encima, con los brazos rectos y los hombros sobre las manos. Presiona hacia abajo unas 2 pulgadas (5 centímetros), de 100 a 120 veces por minuto, y deja que el pecho vuelva a subir del todo cada vez.",
            "Sigue hasta que el DEA esté listo, llegue ayuda capacitada o la persona empiece a respirar con normalidad. La RCP cansa: si otra persona sabe hacerla, cámbiense más o menos cada dos minutos, con una pausa mínima. En una clase practicas la profundidad con un maniquí; nunca practiques con una persona real."
          ],
          steps: ["No responde y no respira con normalidad: llama al 911 y manda a buscar un DEA.", "Acuesta a la persona boca arriba sobre una superficie firme y plana.", "Talón de una mano en el centro del pecho y la otra mano encima.", "Brazos rectos, hombros sobre las manos.", "Presiona unas 2 pulgadas de profundidad, de 100 a 120 veces por minuto; deja que el pecho suba del todo.", "No pares hasta que haya un DEA, ayuda capacitada o respiración normal."],
          words: [["RCP", "reanimación cardiopulmonar: compresiones en el pecho (y a veces respiraciones de rescate) que mantienen la sangre en movimiento cuando el corazón se detiene."], ["Paro cardíaco", "cuando el corazón deja de bombear de repente; la persona se desploma y no respira con normalidad."], ["Compresión", "cada vez que presionas el pecho hacia abajo."], ["Maniquí", "un cuerpo de práctica que se usa en las clases de RCP."]],
          slides: [
            { title: "Cuándo empezar la RCP", bullets: ["Un adulto se desploma y no responde", "No respira con normalidad o solo jadea", "Primero llama al 911 y manda a buscar un DEA"] },
            { title: "Las manos en el lugar correcto", bullets: ["Talón de una mano en el centro del pecho", "La otra mano encima", "Brazos rectos, hombros sobre las manos"] },
            { title: "Fuerte y rápido", bullets: ["Unas 2 pulgadas (5 cm) de profundidad", "De 100 a 120 compresiones por minuto", "Deja que el pecho vuelva a subir del todo"] },
            { title: "No pares", bullets: ["Hasta que el DEA esté listo o llegue ayuda", "Cámbiate con otra persona cada 2 minutos más o menos", "Practica la profundidad con un maniquí en una clase"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Arrodíllate junto a una almohada firme o una toalla enrollada en el piso (nunca una persona). Pon las manos como se muestra, con los brazos rectos. Pon un temporizador de 30 segundos en el teléfono y cuenta en voz alta tus compresiones. Intenta hacer de 50 a 60 en 30 segundos, que equivale a 100 a 120 por minuto.",
          youCanNow: "enumerar los pasos de la RCP solo con las manos y mantener el ritmo correcto.",
          quickCheck: [
            { objective: "O2", q: "¿Dónde van tus manos en la RCP de un adulto?", options: ["Sobre el estómago", "Sobre el hombro izquierdo", "Sobre el cuello", "En el centro del pecho"], answer: 3, why: "El talón de una mano va en el centro del pecho, con la otra mano encima." },
            { objective: "O2", q: "¿Qué tan rápido presionas en la RCP?", options: ["De 100 a 120 veces por minuto", "Unas 20 veces por minuto", "Una vez cada 10 segundos", "Lo más lento que puedas"], answer: 0, why: "La guía es de 100 a 120 compresiones por minuto, dejando que el pecho suba cada vez." }
          ]
        },
        {
          title: "Usar un DEA y lo que agrega una clase completa de RCP",
          objectives: ["O2"],
          minutes: 5,
          goal: "Enumerar los pasos para usar un DEA junto con la RCP.",
          text: [
            "Un DEA (desfibrilador externo automático) es una caja pequeña que puede dar una descarga para que el corazón vuelva a un ritmo normal. Los encuentras en escuelas, gimnasios, aeropuertos, oficinas, centros comerciales y lugares de culto, a menudo en una caja en la pared con el dibujo de un corazón y un rayo.",
            "Los DEA están hechos para personas sin capacitación. Lo enciendes y te habla. Descubre el pecho, sécalo, pon los parches donde muestran los dibujos y conecta el cable si hace falta. Todos se apartan mientras revisa el corazón. Si indica dar una descarga, asegúrate de que nadie toque a la persona y presiona el botón. Luego vuelve enseguida a la RCP, como te indica el DEA.",
            "Usa el DEA en cuanto llegue y sigue su voz al pie de la letra. No dejes la RCP para ir a buscarlo tú si otra persona puede traerlo.",
            "En una clase completa de RCP también aprendes las respiraciones de rescate: 30 compresiones y luego 2 respiraciones, una y otra vez. También aprendes la RCP para niños y bebés, que es diferente. Practica esos pasos en clase con un instructor."
          ],
          steps: ["Sigue con la RCP mientras alguien trae el DEA.", "Enciende el DEA y escucha.", "Descubre y seca el pecho; pon los parches donde muestran los dibujos.", "Apártate mientras revisa; nadie toca a la persona.", "Si indica descarga: todos apartados, presiona el botón.", "Vuelve enseguida a la RCP, como te indica."],
          words: [["DEA", "desfibrilador externo automático: una caja que revisa el corazón y, si hace falta, da una descarga para restablecer su ritmo. Te guía con su voz en cada paso."], ["Parches", "almohadillas adhesivas con cables que van sobre el pecho descubierto para que el DEA revise el corazón y dé la descarga."], ["Respiraciones de rescate", "respiraciones que das en la boca de la persona durante la RCP; se aprenden en una clase completa."]],
          slides: [
            { title: "Qué hace un DEA", bullets: ["Revisa el ritmo del corazón", "Da una descarga solo si hace falta", "Te guía con su voz en cada paso"] },
            { title: "Pasos con el DEA", bullets: ["Enciéndelo y escucha", "Pecho descubierto y seco; parches donde muestran los dibujos", "Apártate mientras revisa"] },
            { title: "Si indica descarga", bullets: ["Asegúrate de que nadie toque a la persona", "Presiona el botón de descarga", "Vuelve enseguida a la RCP"] },
            { title: "Una clase completa agrega", bullets: ["Respiraciones de rescate: 30 compresiones y 2 respiraciones", "RCP para niños y bebés", "Práctica con las manos junto a un instructor"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Averigua dónde está el DEA más cercano en tu trabajo, escuela, gimnasio o lugar de culto. Pregunta a un encargado o busca el letrero. Escribe exactamente dónde está y, de memoria, dibuja los dos lugares de los parches en una figura de palitos.",
          youCanNow: "enumerar los pasos para usar un DEA junto con la RCP y decir dónde está el más cercano.",
          quickCheck: [
            { objective: "O2", q: "El DEA dice que se recomienda una descarga. ¿Qué haces antes de presionar el botón?", options: ["Tomar la mano de la persona", "Quitar los parches", "Asegurarte de que nadie toque a la persona", "Darle agua a la persona"], answer: 2, why: "Todos deben estar apartados para que la descarga llegue solo a la persona." },
            { objective: "O2", q: "El DEA ya dio una descarga. ¿Y ahora qué?", options: ["Esperar en silencio a la ambulancia", "Volver a la RCP como te indica el DEA", "Apagar el DEA", "Sentar a la persona"], answer: 1, why: "Después de una descarga vuelves enseguida a la RCP, siguiendo la voz del DEA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Actúa rápido y mantén un corazón funcionando",
        questions: [
          { objective: "O1", q: "¿Cuáles son las tres primeras palabras para cualquier emergencia?", options: ["Esperar, mirar, caminar", "Revisar, llamar, atender", "Correr, esconderse, avisar", "Preguntar, grabar, publicar"], answer: 1, why: "Revisa la escena y a la persona, llama al 911 y luego atiende hasta que llegue la ayuda." },
          { objective: "O1", q: "Tres personas miran a una mujer que se desplomó. ¿Cómo consigues ayuda más rápido?", options: ["Señalas a una persona: \"Usted, llame al 911\", y pides a otra que traiga un DEA", "Gritas \"¡Que alguien llame!\" a todos", "Esperas a que otra persona lo haga", "Lo publicas en redes sociales"], answer: 0, why: "Dar una tarea clara a una persona evita que todos piensen que otro ya llamó." },
          { objective: "O2", q: "¿Qué tan profundo presionas el pecho de un adulto en la RCP?", options: ["Apenas tocándolo", "Alrededor de media pulgada", "Lo más profundo que puedas", "Unas 2 pulgadas (5 cm)"], answer: 3, why: "En un adulto, las compresiones son de unas 2 pulgadas de profundidad, dejando que el pecho vuelva a subir." },
          { objective: "O2", q: "¿Cuándo debes empezar la RCP solo con las manos en un adulto?", options: ["Cuando habla pero está cansado", "Cuando no responde y no respira con normalidad", "Cuando tiene una cortada pequeña", "Cuando tose con fuerza"], answer: 1, why: "La RCP es para alguien que no responde y no respira con normalidad, o solo jadea." },
          { objective: "O2", q: "¿Quién puede usar un DEA?", options: ["Cualquier persona; te guía con su voz en cada paso", "Solo los médicos", "Solo los bomberos", "Solo los mayores de 30 años"], answer: 0, why: "Los DEA están hechos para personas sin capacitación y dan instrucciones habladas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Emergencias comunes y cómo certificarte",
      lessons: [
        {
          title: "Atragantamiento y sangrado grave",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Identificar un atragantamiento y describir cómo detener un sangrado grave con presión directa.",
          text: [
            "Atragantamiento: la persona puede agarrarse la garganta, no poder hablar, toser débilmente, hacer un sonido agudo o ponerse azulada. Pregúntale: \"¿Se está atragantando? ¿Puede hablar?\". Si puede toser con fuerza y hablar, no la golpees; dile que siga tosiendo.",
            "Si no puede hablar, toser ni respirar, pide a alguien que llame al 911. Las guías de EE. UU. muestran dos maneras de sacar el objeto: golpes firmes entre los omóplatos con el talón de la mano (golpes en la espalda) y empujones rápidos hacia adentro y hacia arriba, justo encima del ombligo (compresiones abdominales). A las personas embarazadas o muy corpulentas se les hacen compresiones en el pecho. Si la persona se desmaya, llama al 911, bájala al piso y empieza la RCP. Aprende y practica estos movimientos en clase; no practiques las compresiones con una persona real.",
            "Sangrado grave: llama al 911. Ponte guantes si tienes, o usa una bolsa de plástico como barrera. Presiona fuerte, justo sobre la herida, con una tela limpia, una gasa o incluso una prenda de ropa, y sigue presionando. No la levantes para mirar. Si la sangre la atraviesa, pon más tela encima y sigue presionando.",
            "No saques un objeto clavado en una herida; pon tela alrededor para protegerlo. Un torniquete es para un sangrado que pone en peligro la vida en un brazo o una pierna cuando la presión no basta; las clases de Stop the Bleed (Detén el sangrado) y de primeros auxilios enseñan a usarlo."
          ],
          steps: ["Atragantamiento: pregunta \"¿Se está atragantando? ¿Puede hablar?\"", "Puede toser y hablar: deja que siga tosiendo.", "No puede hablar ni respirar: llama al 911 y da los primeros auxilios que aprendiste en clase (golpes en la espalda y compresiones abdominales).", "Se desmaya: bájala al piso y empieza la RCP.", "Sangrado: llama al 911, guantes o una barrera, presiona fuerte sobre la herida con una tela limpia.", "La sangre atraviesa la tela: agrega capas encima; no levantes la primera tela."],
          words: [["Compresiones abdominales", "empujones rápidos hacia adentro y hacia arriba, justo encima del ombligo, para sacar lo que bloquea la garganta; también se llaman maniobra de Heimlich."], ["Golpes en la espalda", "golpes firmes entre los omóplatos con el talón de la mano para aflojar lo que bloquea la garganta."], ["Presión directa", "presionar con firmeza justo sobre una herida para frenar y detener el sangrado."], ["Torniquete", "una banda apretada que se pone en un brazo o una pierna, más arriba de la herida, para detener un sangrado que pone en peligro la vida; se enseña en clase."]],
          slides: [
            { title: "Señales de atragantamiento", bullets: ["Se agarra la garganta y no puede hablar", "Tos débil o un sonido agudo", "Se pone azulada"] },
            { title: "Atragantamiento: qué hacer", bullets: ["Puede toser y hablar: deja que tosa", "No puede hablar: llama al 911, golpes en la espalda y compresiones", "Se desmaya: bájala al piso y empieza la RCP"] },
            { title: "Sangrado grave", bullets: ["Llama al 911; guantes o una barrera", "Presiona fuerte, justo sobre la herida", "Si la sangre atraviesa: agrega capas y sigue presionando"] },
            { title: "No hagas esto", bullets: ["No levantes la tela para mirar", "No saques un objeto clavado", "No practiques compresiones con una persona real"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Pon una toalla doblada sobre tu propio antebrazo. Presiona fuerte con la palma de la mano durante 60 segundos, mirando el reloj, sin levantarla. Luego pon una segunda toalla encima y sigue presionando. Escribe dos líneas: qué tan difícil fue mantener la presión y las tres señales de atragantamiento de esta lección.",
          youCanNow: "reconocer las señales de atragantamiento y detener un sangrado grave con presión firme y directa.",
          quickCheck: [
            { objective: "O3", q: "Una mujer en el almuerzo tose con fuerza y todavía puede hablar. ¿Qué haces?", options: ["Le golpeas la espalda fuerte de inmediato", "Le haces compresiones abdominales", "La animas a seguir tosiendo y te quedas con ella", "La acuestas en el piso"], answer: 2, why: "Si una persona puede toser con fuerza y hablar, deja que siga tosiendo; no la golpees." },
            { objective: "O4", q: "La sangre atraviesa la tela con la que presionas una herida. ¿Qué haces?", options: ["Levantas la tela para mirar", "Dejas de presionar", "Lavas la herida con agua", "Pones más tela encima y sigues presionando"], answer: 3, why: "Agregar capas mantiene la presión; levantar la tela puede hacer que vuelva a sangrar." }
          ]
        },
        {
          title: "Reconocer un ataque al corazón y un derrame cerebral",
          objectives: ["O5"],
          minutes: 5,
          goal: "Reconocer las señales de alerta de un ataque al corazón y de un derrame cerebral.",
          text: [
            "Un ataque al corazón ocurre cuando se bloquea el paso de la sangre a una parte del corazón. Señales comunes: dolor o presión en el pecho que puede extenderse a la mandíbula, el brazo, la espalda o el estómago, falta de aire, sudor frío, náuseas o mareo, y un cansancio fuera de lo común. Las mujeres, los adultos mayores y las personas con diabetes pueden tener señales más leves o diferentes.",
            "Si crees que es un ataque al corazón, llama al 911 de inmediato. No esperes a ver si se pasa y no dejes que la persona te convenza de no llamar. Haz que se siente y descanse, aflójale la ropa apretada y quédate con ella. No le des ningún medicamento, a menos que sea su propio medicamento recetado o que el operador del 911 te lo indique. Si deja de responder y no respira con normalidad, empieza la RCP y usa un DEA.",
            "Un derrame cerebral ocurre cuando se bloquea el paso de la sangre a una parte del cerebro o se rompe un vaso sanguíneo. Los CDC (Centros para el Control y la Prevención de Enfermedades de EE. UU.) enseñan B.E. F.A.S.T., por sus iniciales en inglés: Balance, equilibrio (mareo o pérdida de equilibrio de repente); Eyes, ojos (problemas para ver de repente); Face, cara (pídele que sonría: ¿se cae un lado?); Arms, brazos (pídele que levante los dos brazos: ¿baja uno?); Speech, habla (¿arrastra las palabras o habla raro?); Time, tiempo (llama al 911 de inmediato).",
            "Anota la hora en que empezaron las señales y díselo al equipo de emergencia. Llama a una ambulancia; no lleves tú a la persona al hospital."
          ],
          steps: ["Señales de ataque al corazón: dolor o presión en el pecho, falta de aire, sudor frío, náuseas, mareo.", "Llama al 911 de inmediato; siéntala, aflójale la ropa y quédate con ella.", "Ningún medicamento, a menos que sea suyo o que el operador lo indique.", "Derrame cerebral: revisa B.E. F.A.S.T.", "Anota la hora en que empezaron las señales; llama a una ambulancia, no la lleves tú."],
          words: [["Ataque al corazón", "cuando se bloquea el paso de la sangre a una parte del corazón; la persona suele estar despierta y tiene dolor o presión en el pecho."], ["Derrame cerebral", "cuando se bloquea el paso de la sangre a una parte del cerebro o se rompe un vaso sanguíneo del cerebro; también se llama accidente cerebrovascular."], ["B.E. F.A.S.T.", "iniciales en inglés de equilibrio, ojos, cara, brazos, habla y tiempo: una forma de reconocer un derrame cerebral y recordar llamar al 911."]],
          slides: [
            { title: "Señales de un ataque al corazón", bullets: ["Dolor o presión en el pecho; puede ir a la mandíbula, el brazo o la espalda", "Falta de aire, sudor frío, náuseas", "Mujeres y adultos mayores pueden tener señales más leves"] },
            { title: "Ataque al corazón: qué hacer", bullets: ["Llama al 911 ya; no esperes", "Que se siente y descanse, ropa floja, quédate con la persona", "Ningún medicamento, salvo el suyo o si el operador lo indica"] },
            { title: "Derrame cerebral: B.E. F.A.S.T.", bullets: ["Equilibrio y ojos: mareo o problemas para ver de repente", "Cara caída, un brazo baja, habla arrastrada", "Tiempo: llama al 911 de inmediato"] },
            { title: "El tiempo importa", bullets: ["Anota cuándo empezaron las señales", "Llama a una ambulancia; no la lleves tú"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Escribe B.E. F.A.S.T. de arriba abajo en un lado de una hoja. Junto a cada letra, escribe de memoria la pregunta o la prueba que usarías. Luego enséñaselo a un amigo o familiar en menos de un minuto.",
          youCanNow: "reconocer las señales de alerta de un ataque al corazón y de un derrame cerebral y llamar rápido al 911.",
          quickCheck: [
            { objective: "O5", q: "A tu tío se le cae un lado de la sonrisa y arrastra las palabras. ¿Qué haces?", options: ["Llamas al 911 de inmediato y anotas la hora", "Dejas que se acueste a dormir para que se le pase", "Lo llevas tú al hospital", "Le das una pastilla para el dolor"], answer: 0, why: "Son señales de derrame cerebral; llama al 911 enseguida, anota la hora y deja que la ambulancia lo lleve." },
            { objective: "O5", q: "¿Cuál es una señal común de un ataque al corazón?", options: ["Una cortada pequeña en la mano", "Dolor o presión en el pecho que se extiende al brazo o a la mandíbula", "Un estornudo", "Un sarpullido que pica en la pierna"], answer: 1, why: "El dolor o la presión en el pecho que puede extenderse es una señal común de ataque al corazón." }
          ]
        },
        {
          title: "Certificarte: tu plan de preparación",
          objectives: ["O6"],
          minutes: 5,
          goal: "Elegir una clase presencial de RCP y primeros auxilios y escribir un plan de capacitación con fecha.",
          text: [
            "Este curso da conocimientos básicos, no un certificado. Los empleadores que piden RCP y primeros auxilios casi siempre quieren una tarjeta de un proveedor reconocido. En EE. UU., los más conocidos son la Cruz Roja Americana y la American Heart Association. Las dos tienen buscadores de clases en sus sitios web.",
            "Elige la clase correcta para tu camino. Muchos trabajos en empresas y en la comunidad (guarderías, entrenamiento deportivo, seguridad, restaurantes, organizaciones sin fines de lucro) aceptan una clase de Primeros auxilios, RCP y DEA para adultos y niños. Los trabajos de salud (auxiliar de enfermería, técnico de emergencias médicas, estudiantes de farmacia y de medicina) casi siempre piden Soporte Vital Básico (BLS). Pregunta a tu empleador o programa cuál aceptan antes de pagar.",
            "Muchas clases son mixtas: una parte en línea y luego una sesión práctica presencial con un instructor y maniquíes. Puede que no acepten una clase totalmente en línea sin prueba práctica. Los precios, la duración de la clase y el tiempo que dura la tarjeta cambian: revisa la página del proveedor y la fecha de tu tarjeta, y renuévala antes de que venza.",
            "Pregunta por clases gratis o de bajo costo: algunos empleadores, programas de empleo, departamentos de bomberos, hospitales y grupos comunitarios las ofrecen. OSHA (la agencia de EE. UU. para la seguridad y la salud en el trabajo) dice que los empleadores deben tener personas y materiales de primeros auxilios acordes con los peligros del lugar de trabajo."
          ],
          steps: ["Pregunta a tu empleador o programa qué clase aceptan (por ejemplo, Primeros auxilios, RCP y DEA, o BLS).", "Abre el buscador de clases de la Cruz Roja o de la American Heart Association.", "Elige una clase presencial o mixta cerca de ti.", "Escribe el nombre del curso, quién da la tarjeta, el lugar, la fecha y el costo.", "Pon la fecha en tu calendario y un recordatorio antes de que venza la tarjeta."],
          words: [["Tarjeta de certificación", "la prueba del proveedor de capacitación de que aprobaste la prueba práctica; los empleadores piden verla."], ["BLS", "Basic Life Support (Soporte Vital Básico): la clase de RCP para trabajadores y estudiantes de salud."], ["Clase mixta", "una clase que es en parte en línea y en parte presencial, con una prueba práctica."], ["Pediátrico", "para niños y bebés."]],
          slides: [
            { title: "Este curso da conocimientos básicos", bullets: ["Te prepara; no te certifica", "Los certificados los da un proveedor reconocido", "En EE. UU.: Cruz Roja Americana, American Heart Association"] },
            { title: "Elige la clase correcta", bullets: ["La mayoría de los trabajos: Primeros auxilios, RCP y DEA (adultos y niños)", "Salud: Soporte Vital Básico (BLS)", "Pregunta a tu empleador cuál acepta"] },
            { title: "Antes de inscribirte", bullets: ["Debe tener una prueba práctica presencial", "Revisa el precio, la duración y cuánto dura la tarjeta", "Pregunta por clases gratis o de bajo costo"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Tarea final: haz tu Plan de preparación en primeros auxilios y RCP en una página. Escribe tu número de emergencias y la oración con tu dirección, dónde están el DEA y el botiquín más cercanos, los pasos de emergencia de memoria y una clase presencial que encontraste en el sitio de la Cruz Roja o de la AHA: nombre, quién la otorga, lugar y fecha.",
          youCanNow: "elegir una clase presencial reconocida de RCP y primeros auxilios y planear cuándo la tomarás.",
          quickCheck: [
            { objective: "O6", q: "Terminaste este curso de conocimientos básicos. ¿Qué te da?", options: ["Una tarjeta de RCP que tu empleador debe aceptar", "Una licencia de enfermería", "Conocimientos que te preparan para una clase presencial de certificación", "Permiso para enseñar RCP"], answer: 2, why: "Este curso te prepara; el certificado viene de una clase presencial con un proveedor reconocido." },
            { objective: "O6", q: "Vas a empezar un programa de auxiliar de enfermería. ¿Qué clase de RCP es más probable que pidan?", options: ["Un video totalmente en línea sin prueba práctica", "Ninguna clase", "Una clase de una publicación en redes sociales", "Soporte Vital Básico (BLS), después de confirmarlo con el programa"], answer: 3, why: "Los programas de salud casi siempre exigen BLS; pregunta al programa cuál aceptan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Emergencias comunes y cómo certificarte",
        questions: [
          { objective: "O3", q: "Un hombre se agarra la garganta y no puede hablar ni toser. ¿Qué haces?", options: ["Esperas a que se sienta mejor", "Pides a alguien que llame al 911 y das primeros auxilios para el atragantamiento", "Le das agua para beber", "Le pides que se acueste a descansar"], answer: 1, why: "Una persona que no puede hablar ni toser está gravemente atragantada; llama al 911 y actúa." },
          { objective: "O4", q: "¿Qué es lo primero que haces ante una cortada profunda que sangra mucho (después de llamar al 911)?", options: ["Presionar fuerte, justo sobre la herida, con una tela limpia", "Dejar que sangre para que se limpie", "Ponerle hielo", "Pedirle a la persona que camine"], answer: 0, why: "La presión firme y directa es la forma principal de detener un sangrado grave." },
          { objective: "O4", q: "Un pedazo de vidrio está clavado en una herida. ¿Qué debes hacer?", options: ["Sacarlo rápido", "Empujarlo más adentro", "Dejarlo donde está y poner tela alrededor", "Echarle agua hasta que salga"], answer: 2, why: "Sacarlo puede empeorar el sangrado; pon tela alrededor y deja que los profesionales lo saquen." },
          { objective: "O5", q: "En B.E. F.A.S.T., ¿qué significa la A?", options: ["Alergia", "Dirección", "Ambulancia", "Arms, brazos: ¿baja uno de los brazos?"], answer: 3, why: "La A es de Arms (brazos): pide a la persona que levante los dos brazos y mira si uno baja." },
          { objective: "O6", q: "¿Cuál es la mejor manera de obtener un certificado de RCP que acepte un trabajo?", options: ["Una clase presencial o mixta de la Cruz Roja o de la AHA", "Ver un video en línea sin prueba", "Leer este curso dos veces", "Pedirle a un amigo que firme una nota"], answer: 0, why: "Los empleadores casi siempre quieren una tarjeta de un proveedor reconocido con prueba práctica." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Primeros auxilios y RCP: conocimientos básicos",
    questions: [
      { objective: "O1", q: "Encuentras a un compañero de trabajo en el piso junto a un cable eléctrico que echa chispas. ¿Qué haces primero?", options: ["Lo agarras del brazo y lo jalas", "Te quedas lejos, llamas al 911 y haces que corten la electricidad", "Echas agua sobre el cable", "Empiezas la RCP ahí mismo"], answer: 1, why: "La escena no es segura; quédate lejos, llama y haz que sea segura antes de tocar a nadie." },
      { objective: "O1", q: "¿Cómo compruebas si una persona responde?", options: ["Le tocas el hombro y gritas \"¿Está bien?\"", "Le echas agua fría en la cara", "Le sacudes la cabeza con fuerza", "Esperas cinco minutos"], answer: 0, why: "Tocar y gritar es la forma segura de comprobar si alguien responde." },
      { objective: "O1", q: "Estás llamando al 911. ¿Cuándo puedes colgar?", options: ["En cuanto das la dirección", "Después de un minuto", "Cuando el operador te lo diga", "Cuando la persona abra los ojos"], answer: 2, why: "No cuelgues; el operador puede necesitar más datos o guiarte en la RCP." },
      { objective: "O1", q: "Fuera de EE. UU., ¿a qué número llamas?", options: ["Siempre al 911, en todas partes", "Al número de un amigo", "A la oficina principal del hospital", "Al número de emergencias local de tu país"], answer: 3, why: "Los números de emergencia cambian según el país; aprende el tuyo." },
      { objective: "O2", q: "Un adulto se desploma, no responde y solo jadea. ¿Qué está pasando?", options: ["Probablemente está dormido", "Puede que su corazón se haya detenido; llama al 911 y empieza la RCP", "Se está atragantando pero está bien", "Necesita un vaso de agua"], answer: 1, why: "Jadear no es respirar con normalidad; trátalo como un paro cardíaco." },
      { objective: "O2", q: "¿Qué significa RCP solo con las manos?", options: ["Llamar al 911 y presionar fuerte y rápido en el centro del pecho", "Frotar las manos de la persona", "Dar solo respiraciones de rescate", "Tomar las manos de la persona hasta que llegue ayuda"], answer: 0, why: "La RCP solo con las manos son compresiones en el pecho sin respiraciones, después de llamar al 911." },
      { objective: "O2", q: "Después de cada compresión en la RCP, ¿qué dejas que haga el pecho?", options: ["Quedarse hundido", "Temblar", "Volver a subir del todo", "Girar hacia un lado"], answer: 2, why: "Dejar que el pecho suba del todo permite que el corazón se llene de sangre antes de la siguiente compresión." },
      { objective: "O2", q: "Alguien trae un DEA. ¿Qué haces?", options: ["Esperas a que lo use la ambulancia", "Primero lees todo el manual", "Lo pones debajo de la cabeza de la persona", "Lo enciendes y sigues su voz"], answer: 3, why: "Los DEA te guían con su voz en cada paso; úsalo en cuanto llegue." },
      { objective: "O3", q: "¿Cuál es una señal de que un adulto se está atragantando?", options: ["Se ríe muy fuerte", "Se agarra la garganta y no puede hablar", "Estornuda", "Pide una servilleta"], answer: 1, why: "Agarrarse la garganta y no poder hablar son señales típicas de atragantamiento." },
      { objective: "O3", q: "Una persona atragantada se desmaya. ¿Qué haces?", options: ["Llamas al 911, la bajas al piso y empiezas la RCP", "Sigues con los golpes en la espalda mientras está en el piso", "La dejas descansar", "Le das agua"], answer: 0, why: "Si una persona atragantada deja de responder, llama al 911 y empieza la RCP." },
      { objective: "O3", q: "¿Dónde debes aprender bien los golpes en la espalda y las compresiones abdominales?", options: ["Practicando fuerte con un amigo", "En un comentario cualquiera de un video", "En una clase práctica con un instructor", "No necesitas aprenderlos"], answer: 2, why: "Estos movimientos se practican de forma segura en clase; nunca practiques las compresiones con una persona real." },
      { objective: "O4", q: "Antes de presionar la herida que sangra de alguien, ¿qué te protege?", options: ["Guantes, o una bolsa de plástico como barrera", "No hace falta nada", "Lavarte las manos durante cinco minutos antes", "Cerrar los ojos"], answer: 0, why: "Los guantes o una barrera te protegen de la sangre mientras ayudas." },
      { objective: "O4", q: "Estás presionando una herida. ¿Cuánto tiempo sigues presionando?", options: ["Diez segundos", "Hasta que te canses", "Hasta que revises debajo de la tela", "Hasta que deje de sangrar o llegue ayuda, sin levantar la tela"], answer: 3, why: "Una presión constante, sin mirar debajo, da tiempo a que la sangre se coagule." },
      { objective: "O4", q: "¿Cuándo se usa un torniquete?", options: ["Para cualquier cortada pequeña", "Para un sangrado que pone en peligro la vida en un brazo o una pierna cuando la presión no basta", "Para un sangrado de nariz", "Para un moretón"], answer: 1, why: "El torniquete es para un sangrado de un brazo o una pierna que pone en peligro la vida, y se enseña en clase." },
      { objective: "O5", q: "Tu abuela dice que siente presión en el pecho y sudor frío, pero quiere esperar. ¿Qué haces?", options: ["Esperas una hora a ver qué pasa", "Llamas al 911 ya y te quedas con ella", "La llevas tú después de cenar", "Le das cualquier pastilla que haya en la casa"], answer: 1, why: "Son señales de ataque al corazón; llama al 911 ya y no dejes que te convenza de no hacerlo." },
      { objective: "O5", q: "En B.E. F.A.S.T., ¿qué te recuerda la T?", options: ["Tomar una foto", "Textear a un amigo", "Decirle que duerma", "Time, tiempo: llamar al 911 de inmediato y anotar cuándo empezaron las señales"], answer: 3, why: "La T es de Time (tiempo): llama al 911 enseguida y anota cuándo empezaron las señales." },
      { objective: "O5", q: "¿Por qué llamar a una ambulancia ante un derrame cerebral en lugar de llevar tú a la persona?", options: ["El equipo puede empezar la atención en el camino y avisar al hospital", "Las ambulancias siempre son gratis", "Los hospitales no atienden a quien llega sin cita", "Es ilegal llevar a alguien en auto"], answer: 0, why: "Los equipos de emergencia empiezan la atención antes y avisan al hospital; los CDC dicen que llames al 911, no que la lleves tú." },
      { objective: "O6", q: "¿Cuáles son las dos organizaciones de EE. UU. más conocidas por certificar en RCP y primeros auxilios?", options: ["El DMV y el correo", "El IRS y la SBA", "La Cruz Roja Americana y la American Heart Association", "Cualquier grupo de redes sociales"], answer: 2, why: "La Cruz Roja y la AHA son los proveedores de RCP y primeros auxilios más conocidos en EE. UU." },
      { objective: "O6", q: "Antes de pagar una clase de RCP para un trabajo, ¿qué debes preguntar?", options: ["Qué clase y qué proveedor acepta el empleador", "Si puedes saltarte la prueba práctica", "Si un amigo puede tomarla por ti", "Nada; todas las clases son iguales"], answer: 0, why: "Los trabajos cambian: algunos aceptan Primeros auxilios, RCP y DEA; en salud suelen pedir BLS." },
      { objective: "O6", q: "Tu tarjeta de RCP tiene una fecha. ¿Qué haces?", options: ["La ignoras", "Tiras la tarjeta", "La enmicas para que nunca venza", "Pones un recordatorio para renovarla antes de que venza"], answer: 3, why: "Las tarjetas vencen; renuévala antes de la fecha para seguir certificado." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Llamada de emergencia lista", objective: "O1", notYet: "No tiene número de emergencias ni oración con la dirección, o la dirección no es clara.", meets: "Tiene el número de emergencias correcto y una oración clara: primero la dirección, luego lo que pasó.", exceeds: "Además agrega una calle que cruza o un punto de referencia y practica decirla en voz alta." },
      { name: "DEA y botiquín ubicados", objective: "O2", notYet: "No sabe dónde hay un DEA o un botiquín de primeros auxilios.", meets: "Dice dónde están el DEA y el botiquín más cercanos en casa, el trabajo, la escuela o el lugar de culto.", exceeds: "Nombra dos lugares y comprobó que se puede llegar a la caja del DEA." },
      { name: "Pasos en orden", objective: "O2", notYet: "Faltan pasos o están en el orden equivocado, o el ritmo y la profundidad de la RCP están mal.", meets: "Escribe revisar, llamar, RCP y DEA en orden, con las manos en el centro del pecho, de 100 a 120 por minuto y unas 2 pulgadas.", exceeds: "Además escribe los pasos del DEA y cuándo cambiar de rescatador." },
      { name: "Atragantamiento y sangrado", objective: "O4", notYet: "Confunde qué hacer, o dice que hay que levantar la tela o sacar un objeto clavado.", meets: "Escribe las señales de atragantamiento (O3) y la presión firme y directa con capas para el sangrado.", exceeds: "Además dice cuándo una persona atragantada necesita RCP y para qué sirve un torniquete." },
      { name: "Ataque al corazón y derrame cerebral", objective: "O5", notYet: "No puede enumerar B.E. F.A.S.T. ni las señales de un ataque al corazón.", meets: "Enumera B.E. F.A.S.T. y tres señales de ataque al corazón, con \"llamar al 911\".", exceeds: "Además indica anotar la hora en que empezaron las señales y no llevar a la persona en auto." },
      { name: "Plan de certificación", objective: "O6", notYet: "No eligió una clase, o eligió una solo en línea sin prueba práctica.", meets: "Indica una clase presencial o mixta, quién da la tarjeta, el lugar y una fecha.", exceeds: "Además confirmó con el empleador o el programa que aceptan la clase y puso un recordatorio para renovarla." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que completan una clase presencial de RCP, DEA y primeros auxilios de la Cruz Roja o de la AHA en 60 días (encuesta de seguimiento, con la tarjeta)",
      "Participantes que ponen una tarjeta vigente de RCP y primeros auxilios en una solicitud de empleo o en su currículum",
      "Lugares de trabajo y organizaciones sin fines de lucro del programa que informan más personal y voluntarios certificados y ubicaciones de DEA conocidas"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para ver las lecciones y los buscadores de clases",
      "Papel y lápiz; una almohada firme o una toalla enrollada para practicar el ritmo de la RCP; una toalla para practicar la presión",
      "Un temporizador en el teléfono o un reloj",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Este curso es solo de conocimientos básicos. Repite a menudo que no certifica y orienta a los participantes hacia una clase presencial con un instructor calificado de la Cruz Roja o de la AHA.",
      "Nunca permitas que los participantes practiquen compresiones, golpes en la espalda o compresiones abdominales entre ellos; usen almohadas o, si los tienen, maniquíes con un instructor certificado.",
      "No des dosis de medicamentos ni consejos clínicos; envía las preguntas de salud a un médico o al operador del 911.",
      "Algunos participantes pueden haber vivido una emergencia o haber perdido a alguien; permite pausas y deja que salgan si lo necesitan.",
      "Con grupos en otros países, cambia el 911 por el número de emergencias local y por los proveedores de capacitación locales (por ejemplo, las sociedades nacionales de la Cruz Roja o de la Media Luna Roja).",
      "Asóciate con un departamento de bomberos, un hospital o una sede de la Cruz Roja de tu zona para ofrecer una clase de certificación justo después del curso."
    ]
  }
};

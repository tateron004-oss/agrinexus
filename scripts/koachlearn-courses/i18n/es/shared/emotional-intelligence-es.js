"use strict";

// Koach Learn course (Spanish translation of shared/emotional-intelligence.js). See scripts/koachlearn-courses/README.md, "Translations".
// STOP is kept as in the English; its letters are glossed in Spanish (Stop / Toma aire / Observa / Procede).

module.exports = {
  id: "emotional-intelligence-es",
  lang: "es",
  translationOf: "emotional-intelligence",
  category: "Athletes",
  name: "Inteligencia emocional",
  skills: "Ponerle nombre a tus emociones, Encontrar lo que te detona, Hacer una pausa antes de responder, Escuchar con empatía, Manejar conflictos con frases en \"yo\", Dar y recibir retroalimentación",
  outcome: "ponerle nombre a lo que sientes, hacer una pausa antes de reaccionar, escuchar de modo que la otra persona se sienta comprendida y manejar una conversación difícil en el trabajo, en un equipo o en casa con frases en \"yo\" dichas con calma y un pedido claro.",
  about: [
    "La inteligencia emocional es la habilidad de notar y manejar tus propias emociones y de entender las de los demás. No se trata de esconder lo que sientes ni de ser siempre amable. Se trata de usar los sentimientos como información, para que elijas lo que haces después en lugar de reaccionar.",
    "Importa en todas partes: un atleta que recibe una corrección dura, una gerente que da retroalimentación, un empleado nuevo con un cliente de mal genio, una líder de voluntarios que mantiene unido a su equipo, un veterano que se adapta al trabajo civil, alguien que vuelve a casa y reconstruye la confianza de su familia, una adolescente en una discusión de un chat de grupo. Los empleadores suelen valorar estas habilidades con las personas tanto como las habilidades técnicas.",
    "Vas a practicar seis habilidades: ponerle nombre a las emociones, encontrar lo que te detona, hacer una pausa, escuchar con empatía, manejar conflictos y dar y recibir retroalimentación. Cada lección dura unos cinco minutos y tiene una tarea \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Planea y ten una conversación real que hayas estado postergando (con un compañero de equipo, un compañero de trabajo, un familiar o un amigo). Antes, escribe lo que sientes y qué lo detonó. Durante la conversación, haz una pausa antes de responder, repite lo que dice la otra persona con tus palabras y usa una frase \"Me siento ... cuando ... porque ... ¿Podríamos ...?\". Después, escribe qué salió bien y una cosa que harías diferente.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas y entrenadores, gerentes y personas recién contratadas, líderes de voluntarios, veteranos que se adaptan al trabajo civil, personas que vuelven a casa y reconstruyen la confianza con su familia, y jóvenes.",
    startingPoint: "Sienten emociones fuertes y tratan con otras personas todos los días. Muchos describen lo que sienten solo como bien, mal, normal o enojado, reaccionan rápido cuando algo los detona, y la retroalimentación y las conversaciones difíciles les resultan incómodas.",
    gap: "Los empleadores valoran las habilidades con las personas tanto como las técnicas, y las reacciones rápidas dañan equipos, empleos y familias. Necesitan nombrar y manejar sus emociones, escuchar con empatía y manejar los conflictos y la retroalimentación con calma, para elegir lo que hacen después en vez de reaccionar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "La práctica usa situaciones reales pero manejables; nadie tiene que compartir detalles privados",
      "No es terapia; a quien tenga un malestar que no se va se le dirige a un consejero o al curso \"Salud mental y manejo del estrés\"",
      "Tiempo: lecciones de unos cinco minutos con prácticas diarias cortas"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tres veces en un día", action: "nombrar lo que sientes con una palabra exacta y la pista del cuerpo que la acompaña", standard: "sin usar bien, mal, normal ni enojado" },
    { id: "O2", condition: "Mirando atrás a reacciones fuertes recientes", action: "identificar dos de tus detonantes y lo que toca cada uno, como el respeto o la justicia", standard: "con una respuesta planeada por escrito para cada uno" },
    { id: "O3", condition: "En un momento acalorado", action: "usar la pausa STOP para elegir tu respuesta", standard: "antes de hablar o de enviar un mensaje" },
    { id: "O4", condition: "Cuando alguien te cuenta un problema", action: "repetir con tus palabras lo que siente y hacer una pregunta abierta", standard: "de modo que diga que lo entendiste" },
    { id: "O5", condition: "Con un problema real con otra persona", action: "decir lo que te molesta con una frase en \"yo\" dicha con calma y un pedido claro", standard: "usando el modelo me siento, cuando, porque, ¿podríamos?" },
    { id: "O6", condition: "Al dar o recibir retroalimentación", action: "dar retroalimentación concreta y amable y responder a la retroalimentación dura sin ponerte a la defensiva", standard: "describiendo acciones, no a la persona" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conocerte y manejarte a ti mismo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ponerle nombre a lo que sientes",
          minutes: 5,
          goal: "Ponerle a tu emoción una palabra precisa, no solo \"bien\" o \"enojado\".",
          text: [
            "La inteligencia emocional empieza por el autoconocimiento: saber lo que sientes mientras lo sientes. Muchos usamos solo unas pocas palabras, como bien, mal, normal o enojado. Pero \"enojado\" en realidad podría ser avergonzado, irrespetado, preocupado o cansado.",
            "Tu cuerpo muchas veces lo sabe primero. La mandíbula apretada, la cara caliente, los puños cerrados, un nudo en el estómago o el corazón acelerado son pistas. Cuando notes una, pregúntate: \"¿Qué estoy sintiendo ahora mismo?\" y busca una palabra más exacta.",
            "Ponerle un nombre claro a un sentimiento te ayuda a calmarlo y a decidir qué hacer. Un jugador que sabe \"estoy frustrado conmigo, no con el entrenador\" vive el entrenamiento de otra manera que uno que solo siente rabia contra todos."
          ],
          steps: ["Nota una pista del cuerpo: mandíbula apretada, cara caliente, nudo en el estómago.", "Pregúntate: ¿qué estoy sintiendo ahora mismo?", "Busca una palabra más exacta que bien, mal o enojado.", "Dítelo a ti mismo: \"Me siento ...\""],
          words: [["Inteligencia emocional", "la habilidad de notar y manejar tus propias emociones y de entender las de los demás."], ["Autoconocimiento", "saber lo que sientes y por qué, en el momento en que pasa."]],
          slides: [
            { title: "Inteligencia emocional", bullets: ["Notar y manejar tus emociones", "Entender las de los demás", "Elegir tu respuesta en lugar de reaccionar"] },
            { title: "Tu cuerpo lo sabe primero", bullets: ["Mandíbula apretada, cara caliente, puños cerrados", "Nudo en el estómago, corazón acelerado"] },
            { title: "Ve más allá de \"enojado\"", bullets: ["¿Avergonzado, irrespetado, preocupado, cansado?", "¿Frustrado, nervioso, decepcionado, celoso?", "Una palabra exacta te ayuda a calmarlo"] }
          ],
          tryIt: "Tres veces hoy, detente y escribe una palabra exacta de lo que sientes y la pista del cuerpo que la acompañó (por ejemplo: \"nervioso - corazón rápido antes de mi turno\"). Trata de no usar bien, mal, normal ni enojado.",
          youCanNow: "notar las pistas de tu cuerpo y ponerle a tu emoción una palabra exacta.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una palabra más exacta para sentirte mal antes de un examen importante?", options: ["Normal", "Nervioso", "Bien", "Mal"], answer: 1, why: "\"Nervioso\" nombra el sentimiento exacto, y eso te ayuda a manejarlo." },
            { objective: "O1", q: "Notas el pecho apretado y el corazón acelerado antes de tu turno. ¿Qué harías?", options: ["Ignorarlo y esperar que se pase", "Decirle a todos que estás bien", "Nombrar el sentimiento con una palabra exacta, como preocupado", "Faltar a tu turno"], answer: 2, why: "Nombrar el sentimiento a partir de la pista del cuerpo es el primer paso para manejarlo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Encontrar lo que te detona",
          minutes: 5,
          goal: "Identificar dos situaciones que provocan en ti reacciones fuertes.",
          text: [
            "Un detonante es una situación, una palabra o una acción que dispara una emoción fuerte muy rápido: que te interrumpan, que te corrijan delante de otros, que alguien llegue tarde, cierto tono de voz, perder un partido reñido, sentirte ignorado.",
            "Los detonantes suelen estar ligados a cosas que te importan, como el respeto, la justicia o la seguridad, o a experiencias pasadas. A alguien que sale de prisión puede dolerle mucho que le hablen con desprecio. A un veterano, un ruido fuerte y repentino. Eso es humano, no un defecto.",
            "Cuando conoces tus detonantes, pierden parte de su fuerza. Puedes planear con tiempo: \"Cuando mi jefe me corrija delante del equipo, voy a respirar, decir 'entendido' y pedirle hablar después.\""
          ],
          steps: ["Piensa en las dos últimas veces que reaccionaste con fuerza.", "Escribe lo que pasó justo antes.", "Escribe qué tocó: ¿el respeto, la justicia, la seguridad, sentirte escuchado?", "Escribe un plan para la próxima vez."],
          words: [["Detonante", "una situación o acción que dispara una emoción fuerte muy rápido."], ["Patrón", "algo que pasa una y otra vez de forma parecida."]],
          slides: [
            { title: "Qué es un detonante", bullets: ["Dispara una emoción fuerte muy rápido", "Que te interrumpan, te corrijan en público, te ignoren", "Compañeros que llegan tarde, cierto tono de voz"] },
            { title: "Por qué pegan tan fuerte", bullets: ["Tocan el respeto, la justicia o la seguridad", "O experiencias pasadas", "Eso es humano, no un defecto"] },
            { title: "Planea con tiempo", bullets: ["Conoce tus detonantes principales", "Decide tu respuesta de antemano", "\"Respirar, decir 'entendido', hablar después\""] }
          ],
          tryIt: "Escribe tus dos detonantes principales. Para cada uno, escribe qué toca (respeto, justicia, seguridad, sentirte escuchado) y una frase sobre cómo vas a responder la próxima vez.",
          youCanNow: "nombrar tus detonantes, ver qué tocan y planear de antemano una mejor respuesta.",
          quickCheck: [
            { objective: "O2", q: "¿Con qué suelen estar ligados los detonantes?", options: ["Con cosas que te importan, como el respeto o la justicia", "Con el clima", "Con el puro azar", "Solo con el hambre"], answer: 0, why: "Los detonantes suelen tocar algo que te importa mucho." },
            { objective: "O2", q: "Que te interrumpan en las reuniones siempre te hace enojar. ¿Qué harías?", options: ["Dejar de ir a las reuniones", "Interrumpir tú primero a los demás", "Esperar que no vuelva a pasar", "Anotarlo como un detonante y planear cómo responderás la próxima vez"], answer: 3, why: "Planear de antemano le quita fuerza al detonante." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer una pausa antes de responder",
          minutes: 5,
          goal: "Usar la pausa STOP para elegir tu respuesta en un momento acalorado.",
          text: [
            "Entre lo que pasa y lo que haces hay un espacio muy pequeño. El autocontrol consiste en hacer ese espacio más grande. Una herramienta fácil es STOP: Stop (detente). Toma aire. Observa lo que sientes y lo que está pasando. Procede con una decisión.",
            "En el momento, unas cuantas respiraciones lentas, contar hasta diez o decir \"Dame un minuto\" te da tiempo. Si estás demasiado alterado para hablar bien, está bien decir \"Quiero hablar de esto, pero primero necesito diez minutos\" y volver. Volver es la parte clave.",
            "Hacer una pausa no es lo mismo que guardarte todo. Igual te ocupas del sentimiento; solo lo haces cuando puedes pensar con claridad. Los atletas lo llaman mantener la compostura; un jugador tranquilo toma mejores decisiones al final del partido."
          ],
          steps: ["Stop (detente): no hables ni presiones enviar todavía.", "Toma aire despacio, una o tres veces.", "Observa: ¿qué estoy sintiendo? ¿Qué está pasando de verdad?", "Procede: elige qué decir o hacer, o pide un descanso corto y vuelve."],
          words: [["Autocontrol", "elegir lo que haces aunque sientas una emoción fuerte."], ["Compostura", "mantener la calma y la mente clara bajo presión."]],
          slides: [
            { title: "Haz más grande el espacio", bullets: ["Algo pasa", "Pausa", "Luego eliges tu respuesta"] },
            { title: "STOP", bullets: ["Stop (detente)", "Toma aire", "Observa", "Procede con una decisión"] },
            { title: "¿Necesitas más tiempo?", bullets: ["\"Necesito diez minutos y luego hablamos.\"", "Vuelve siempre al tema"] },
            { title: "Pausar no es guardarte todo", bullets: ["Ocúpate del sentimiento", "Cuando puedas pensar con claridad"] }
          ],
          tryIt: "Piensa en un mensaje o comentario que te hizo enojar hace poco. Recorre STOP en papel: lo que sentiste, lo que de verdad estaba pasando y lo que dirías ahora. La próxima vez que pase de verdad, usa STOP antes de responder.",
          youCanNow: "usar STOP para hacer una pausa y elegir tu respuesta en lugar de reaccionar.",
          quickCheck: [
            { objective: "O3", q: "¿Qué significa la S de STOP?", options: ["Stop (detente)", "Sube la voz", "Sonríe", "Siesta"], answer: 0, why: "STOP empieza por detenerte antes de reaccionar." },
            { objective: "O3", q: "Te llega un mensaje grosero y empiezas a escribir una respuesta enojada. ¿Qué harías?", options: ["Enviarla rápido antes de cambiar de idea", "Detenerte, tomar aire y decidir qué decir cuando estés tranquilo", "Reenviar el mensaje a tus amigos", "Bloquear a la persona de inmediato"], answer: 1, why: "Hacer una pausa te deja elegir tu respuesta en vez de reaccionar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocerte y manejarte a ti mismo",
        questions: [
          { objective: "O1", q: "La inteligencia emocional es sobre todo:", options: ["Esconder todos tus sentimientos", "Ser siempre amable", "Notar y manejar tus emociones y entender las de los demás", "Ser el que más grita"], answer: 2, why: "Se trata de usar los sentimientos como información para elegir tu respuesta." },
          { objective: "O1", q: "¿Cuál es la palabra más exacta para un sentimiento?", options: ["Mal", "Avergonzado", "Normal", "Da igual"], answer: 1, why: "Una palabra exacta como avergonzado te dice qué está pasando de verdad." },
          { objective: "O2", q: "¿Qué es un detonante?", options: ["Una situación que dispara una emoción fuerte muy rápido", "Un tipo de ejercicio", "Un momento de calma", "Un puesto de trabajo"], answer: 0, why: "Los detonantes disparan emociones fuertes muy rápido." },
          { objective: "O3", q: "En STOP, ¿qué significa la T?", options: ["Tirar la toalla", "Teclear una respuesta rápida", "Tratar mal a todos", "Toma aire"], answer: 3, why: "Stop (detente), Toma aire, Observa, Procede." },
          { objective: "O3", q: "Estás demasiado enojado para hablar bien. ¿Qué es lo mejor?", options: ["Decir lo primero que se te ocurra", "No volver a hablarle nunca", "Pedir diez minutos y volver a hablar", "Publicarlo en internet"], answer: 2, why: "Un descanso corto y luego volver te permite hablar con claridad." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entender a los demás y trabajar con ellos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escuchar con empatía",
          minutes: 5,
          goal: "Escuchar y repetir con tus palabras para que la otra persona se sienta comprendida.",
          text: [
            "Empatía significa entender lo que siente otra persona y por qué, aunque tú te sentirías distinto. No tienes que estar de acuerdo con alguien para entenderlo.",
            "La mayoría escucha para responder. Escuchar con empatía es escuchar para entender. Deja el teléfono, mira a la persona y déjala terminar. Luego refleja: repite lo que oíste y el sentimiento que notaste. \"O sea que has estado cubriendo turnos extra y nadie se dio cuenta. Eso suena muy frustrante.\"",
            "Después haz una pregunta abierta: \"¿Qué te ayudaría?\" o \"¿Y qué pasó después?\" Evita saltar a dar consejos, compararte (\"eso no es nada, una vez yo...\") o decir \"cálmate\". Un entrenador, una persona de atención al cliente, una líder de voluntarios y un padre llegan más lejos cuando la gente primero se siente escuchada."
          ],
          steps: ["Guarda lo que te distrae y mira a la persona.", "Déjala terminar sin interrumpir.", "Refleja lo que oíste y el sentimiento: \"Parece que ...\"", "Haz una pregunta abierta: \"¿Qué te ayudaría?\""],
          words: [["Empatía", "entender lo que siente otra persona y por qué."], ["Reflejar", "repetir con tus propias palabras lo que oíste."], ["Pregunta abierta", "una pregunta que no se puede responder solo con sí o no."]],
          slides: [
            { title: "Empatía", bullets: ["Entender lo que siente y por qué", "No tienes que estar de acuerdo"] },
            { title: "Escucha para entender", bullets: ["Teléfono abajo, mirada arriba", "Déjala terminar", "Refleja: \"Parece que eso fue frustrante.\""] },
            { title: "Luego pregunta", bullets: ["\"¿Qué te ayudaría?\"", "\"¿Y qué pasó después?\""] },
            { title: "Evita", bullets: ["Saltar a dar consejos", "\"Eso no es nada, una vez yo...\"", "\"Cálmate\""] }
          ],
          tryIt: "En tu próxima conversación real, practica un reflejo (\"Parece que te sentiste ...\") y una pregunta abierta. Después, escribe lo que dijo la otra persona y cómo reaccionó.",
          youCanNow: "escuchar para entender, reflejar lo que alguien dijo y sintió, y hacer una pregunta abierta.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa repetir con tus palabras?", options: ["Dar un consejo de inmediato", "Cambiar el tema a tu propia historia", "Decir con tus palabras lo que siente la otra persona y por qué", "Repetir la última palabra que dijo"], answer: 2, why: "Repetir con tus palabras le muestra a la persona que la entendiste." },
            { objective: "O4", q: "Un compañero de trabajo dice: \"Estoy harto de hacer toda la limpieza\". ¿Qué dirías primero?", options: ["\"Cálmate, no es para tanto.\"", "\"Yo hago más que tú.\"", "\"Deberías decírselo al jefe.\"", "\"Parece que sientes que el trabajo no se reparte de forma justa. ¿Qué ha estado pasando?\""], answer: 3, why: "Repetir el sentimiento y hacer una pregunta abierta muestra empatía." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Manejar conflictos con frases en \"yo\"",
          minutes: 5,
          goal: "Decir lo que te molesta con una frase en \"yo\" dicha con calma y un pedido claro.",
          text: [
            "El conflicto es normal en cualquier equipo, en cualquier familia y en cualquier negocio. Bien manejado, resuelve problemas. Mal manejado, rompe la confianza.",
            "Las frases en \"tú\" suenan a culpa: \"Tú siempre me dejas a mí para cerrar.\" La gente se defiende y deja de escuchar. Las frases en \"yo\" describen tu lado: \"Me siento estresado cuando cierro solo tres noches seguidas, porque pierdo mi autobús. ¿Podríamos turnarnos?\"",
            "El modelo: Me siento [emoción] cuando [acción concreta] porque [por qué te importa]. ¿Podríamos [pedido]? Quédate en un solo tema, describe acciones y no la forma de ser (\"llegaste tarde dos veces\", no \"eres un flojo\") y escucha su lado con las habilidades de la lección anterior. Busca una solución con la que los dos puedan vivir."
          ],
          steps: ["Elige un solo tema.", "Escribe: Me siento ... cuando ... porque ... ¿Podríamos ...?", "Elige un momento tranquilo y un lugar privado.", "Dilo, luego escucha y refleja su lado.", "Pónganse de acuerdo en un siguiente paso."],
          words: [["Frase en \"yo\"", "una forma de decir cómo algo te afecta sin culpar a la otra persona."], ["Conflicto", "un desacuerdo entre personas que necesitan o quieren cosas distintas."]],
          slides: [
            { title: "\"Tú\" o \"yo\"", bullets: ["\"Tú siempre me dejas para cerrar.\" (culpa)", "\"Me siento estresado cuando cierro solo...\" (tu lado)"] },
            { title: "El modelo", bullets: ["Me siento [emoción]", "cuando [acción concreta]", "porque [por qué te importa]", "¿Podríamos [pedido]?"] },
            { title: "Que sea justo", bullets: ["Un tema a la vez", "Describe acciones, no la forma de ser", "Escucha y refleja su lado"] },
            { title: "Termina con un paso", bullets: ["Busquen una solución con la que los dos puedan vivir", "Acuerden un siguiente paso"] }
          ],
          tryIt: "Piensa en un problema real con un compañero de equipo, de trabajo o un familiar. Escríbelo primero como frase en \"tú\" y luego reescríbelo como \"Me siento ... cuando ... porque ... ¿Podríamos ...?\" Lee las dos en voz alta y nota la diferencia.",
          youCanNow: "convertir una queja en una frase en \"yo\" dicha con calma y con un pedido claro, y avanzar hacia un siguiente paso compartido.",
          quickCheck: [
            { objective: "O5", q: "¿Qué parte de una frase en \"yo\" es el pedido claro?", options: ["Me siento", "Cuando", "Porque", "¿Podríamos?"], answer: 3, why: "\"¿Podríamos...?\" pide un cambio concreto." },
            { objective: "O5", q: "Un familiar sigue revisando tu teléfono. ¿Qué dirías?", options: ["\"Me siento incómodo cuando revisan mi teléfono, porque quiero que haya confianza. ¿Podríamos hablarlo?\"", "\"Siempre me estás espiando.\"", "\"Para ya o vas a ver.\"", "No decir nada y seguir molesto"], answer: 0, why: "Una frase en \"yo\" dicha con calma nombra lo que sientes y pide un cambio sin culpar." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Dar y recibir retroalimentación",
          minutes: 6,
          goal: "Dar retroalimentación concreta y amable y recibirla sin ponerte a la defensiva.",
          text: [
            "La retroalimentación ayuda a crecer. La buena retroalimentación es concreta, habla de acciones y es útil. En lugar de \"Buen trabajo\" o \"Eso estuvo mal\", di lo que pasó y su efecto: \"Tu resumen al inicio de la reunión mantuvo a todos enfocados.\" \"El informe tenía tres totales equivocados y el cliente llamó dos veces. ¿Puedes revisar los totales antes de enviarlo?\"",
            "Recibir retroalimentación es más difícil. Lo primero que sientes puede ser ganas de defenderte. Usa STOP, escucha todo, repítelo con tus palabras y haz una pregunta: \"¿Me puedes dar un ejemplo?\" Da las gracias, aunque todavía no estés de acuerdo. Luego decide qué vas a usar. Los atletas que aceptan bien las correcciones son los que más rápido mejoran.",
            "Cuando te equivocas, repáralo. Una disculpa de verdad nombra lo que hiciste, su efecto y lo que harás diferente: \"Te hablé mal en la reunión. Eso te hizo pasar vergüenza. La próxima vez te pediré que hablemos después.\" Ahora estás listo para tu tarea final."
          ],
          steps: ["Al dar: di la acción concreta y su efecto.", "Agrega un pedido claro o un agradecimiento.", "Al recibir: haz una pausa, escucha todo, repítelo, pide un ejemplo, da las gracias.", "Al reparar: nombra lo que hiciste, su efecto y lo que harás diferente."],
          words: [["Retroalimentación", "información sobre cómo le fue a alguien, para que mejore o siga haciéndolo bien."], ["A la defensiva", "protegerte rápido de una crítica en lugar de escuchar."], ["Reparar", "arreglar una relación después de un error, muchas veces con una disculpa de verdad."]],
          slides: [
            { title: "Dar retroalimentación", bullets: ["Acción concreta + su efecto", "\"Tu resumen nos mantuvo enfocados.\"", "Agrega un pedido claro o un agradecimiento"] },
            { title: "Recibir retroalimentación", bullets: ["Pausa y escucha todo", "Repítelo y pide un ejemplo", "Da las gracias y luego decide qué usar"] },
            { title: "Repara con una disculpa de verdad", bullets: ["Lo que hice", "El efecto que tuvo", "Lo que haré diferente"] }
          ],
          tryIt: "Tarea final: planea y ten una conversación que hayas estado postergando. Antes, escribe lo que sientes y qué lo detonó. Durante la conversación, haz una pausa, repite lo que dice la otra persona y usa una frase \"Me siento ... cuando ... porque ... ¿Podríamos ...?\". Después, escribe qué salió bien y una cosa que harías diferente.",
          youCanNow: "dar retroalimentación concreta, recibirla sin ponerte a la defensiva, reparar un error y manejar una conversación difícil con inteligencia emocional.",
          quickCheck: [
            { objective: "O6", q: "¿Qué retroalimentación habla de acciones y no de la persona?", options: ["\"Eres descuidado.\"", "\"Nunca te esfuerzas.\"", "\"Ayer salieron dos pedidos sin etiqueta.\"", "\"Eres el peor del equipo.\""], answer: 2, why: "La buena retroalimentación describe acciones concretas que se pueden cambiar." },
            { objective: "O6", q: "Tu entrenador dice que tu defensa fue débil en el último partido. ¿Qué harías primero?", options: ["Discutir que el entrenador está equivocado", "Escuchar, repetirlo con tus palabras y pedir un ejemplo", "Dejar el equipo", "Culpar a un compañero de equipo"], answer: 1, why: "Escuchar y pedir un ejemplo te ayuda a aprender en vez de ponerte a la defensiva." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Entender a los demás y trabajar con ellos",
        questions: [
          { objective: "O4", q: "Empatía significa:", options: ["Estar de acuerdo con todo", "Entender lo que alguien siente y por qué", "Sentir lástima por ti mismo", "Dar consejos rápido"], answer: 1, why: "Puedes entender a alguien sin estar de acuerdo con él." },
          { objective: "O4", q: "Una compañera de equipo te dice que se siente excluida. ¿Qué respuesta muestra escucha con empatía?", options: ["\"Eso no es nada, a mí me ha ido peor.\"", "\"Cálmate.\"", "\"Mira, lo que tienes que hacer es...\"", "\"Parece que te sentiste excluida. ¿Qué pasó?\""], answer: 3, why: "Refleja su sentimiento y hace una pregunta abierta." },
          { objective: "O5", q: "¿Cuál es una frase en \"yo\"?", options: ["\"Me siento estresado cuando cierro solo porque pierdo mi autobús. ¿Podríamos turnarnos?\"", "\"Tú nunca ayudas.\"", "\"Eres un flojo.\"", "\"Todos piensan que estás equivocado.\""], answer: 0, why: "Nombra tu sentimiento, la acción, por qué te importa y un pedido." },
          { objective: "O6", q: "¿Qué retroalimentación es la más útil?", options: ["\"Mal trabajo.\"", "\"Da igual.\"", "\"El informe tenía tres totales equivocados; por favor revisa los totales antes de enviarlo.\"", "\"Eres malísimo para esto.\""], answer: 2, why: "Nombra la acción concreta y un pedido claro." },
          { objective: "O6", q: "¿Cuál es una disculpa de verdad?", options: ["\"Perdón si te molestaste.\"", "\"Te hablé mal; eso te hizo pasar vergüenza; la próxima vez te pediré que hablemos después.\"", "\"Perdón, pero tú empezaste.\"", "No decir nada"], answer: 1, why: "Nombra la acción, su efecto y lo que va a cambiar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Inteligencia emocional",
    questions: [
      { objective: "O1", q: "El autoconocimiento significa:", options: ["Saber lo que sientes y por qué mientras pasa", "Pensar solo en ti", "Ignorar los sentimientos", "Mirarte al espejo"], answer: 0, why: "El autoconocimiento es notar tus sentimientos en el momento." },
      { objective: "O1", q: "¿Cuál es una pista del cuerpo de una emoción fuerte?", options: ["Una camisa limpia", "La mandíbula apretada o el corazón acelerado", "La batería del teléfono llena", "Un día soleado"], answer: 1, why: "Tu cuerpo muchas veces avisa de una emoción antes de que le pongas nombre." },
      { objective: "O1", q: "¿Para qué ponerle a un sentimiento una palabra exacta?", options: ["Para ganar discusiones", "Para sonar inteligente", "Te ayuda a calmarlo y a decidir qué hacer", "Hace el sentimiento más fuerte"], answer: 2, why: "Nombrar el sentimiento con exactitud te ayuda a manejarlo." },
      { objective: "O1", q: "\"Enojado\" en realidad podría ser:", options: ["Tener ganas de pizza", "Solo tener sueño", "Estar feliz", "Avergonzado, irrespetado o preocupado"], answer: 3, why: "El enojo muchas veces tapa un sentimiento más exacto." },
      { objective: "O2", q: "Los detonantes suelen estar ligados a:", options: ["Cosas que te importan, como el respeto o la justicia", "Solo el clima", "Números al azar", "La marca de tu teléfono"], answer: 0, why: "Los detonantes tocan valores como el respeto, la justicia o la seguridad, o experiencias pasadas." },
      { objective: "O2", q: "¿Por qué planear de antemano tu respuesta a un detonante?", options: ["Para no sentir nada nunca", "Para poder culpar a otros", "Para que el detonante tenga menos fuerza y respondas mejor", "No sirve de nada"], answer: 2, why: "Un plan hecho con calma te guía cuando llega el detonante." },
      { objective: "O3", q: "En STOP, la O significa:", options: ["Olvidar", "Observa", "Ofenderse", "Ocultarlo todo"], answer: 1, why: "Stop (detente), Toma aire, Observa, Procede." },
      { objective: "O3", q: "Hacer una pausa antes de responder es:", options: ["Lo mismo que guardarte todo para siempre", "Una señal de debilidad", "Solo para atletas", "Elegir una respuesta cuando puedes pensar con claridad"], answer: 3, why: "Igual te ocupas del sentimiento, solo que en un mejor momento." },
      { objective: "O3", q: "Después de pedir un descanso de diez minutos en una discusión, lo clave es:", options: ["Volver y hablar", "No volver nunca", "Quejarte con otros", "Cambiar de tema para siempre"], answer: 0, why: "Un descanso solo ayuda si vuelves a la conversación." },
      { objective: "O4", q: "Escuchar con empatía significa escuchar para:", options: ["Responder rápido", "Encontrar errores", "Entender", "Esperar tu turno"], answer: 2, why: "Escuchar para entender ayuda a que la persona se sienta escuchada." },
      { objective: "O4", q: "¿Cuál es una pregunta abierta?", options: ["\"¿Estás bien?\"", "\"¿Qué te ayudaría?\"", "\"¿Terminaste?\"", "\"¿Hoy es martes?\""], answer: 1, why: "Las preguntas abiertas no se pueden responder solo con sí o no." },
      { objective: "O4", q: "Cuando alguien te cuenta un problema, ¿qué conviene evitar al principio?", options: ["Mirarlo", "Dejarlo terminar", "Reflejar lo que dijo", "Decir \"cálmate\""], answer: 3, why: "\"Cálmate\" puede hacer que la gente se sienta ignorada." },
      { objective: "O5", q: "¿Por qué suelen fallar las frases en \"tú\"?", options: ["Son demasiado cortas", "Son demasiado amables", "Suenan a culpa, así que la gente se defiende", "Incluyen sentimientos"], answer: 2, why: "La culpa pone a la gente a la defensiva y deja de escuchar." },
      { objective: "O5", q: "Completa el modelo: Me siento ... cuando ... porque ...", options: ["¿Podríamos ...?", "Tú siempre ...", "Todo el mundo sabe ...", "Olvídalo."], answer: 0, why: "El modelo termina con un pedido claro." },
      { objective: "O5", q: "Una buena conversación sobre un conflicto describe:", options: ["La forma de ser de alguien (\"eres un flojo\")", "Todo lo que alguna vez salió mal", "Chismes", "Acciones concretas (\"llegaste tarde dos veces\")"], answer: 3, why: "Las acciones pueden cambiar; los ataques a la persona solo hieren." },
      { objective: "O5", q: "¿Cuál es un buen lugar para una conversación difícil?", options: ["Un chat de grupo", "Un lugar tranquilo y privado", "Delante de todo el equipo", "Una pelea a gritos después de perder"], answer: 1, why: "Un lugar tranquilo y privado ayuda a que los dos escuchen." },
      { objective: "O6", q: "La buena retroalimentación es:", options: ["Concreta, sobre acciones y útil", "Vaga y general", "Sobre la personalidad de alguien", "Solo cuando estás enojado"], answer: 0, why: "La retroalimentación concreta dice exactamente qué mantener o cambiar." },
      { objective: "O6", q: "Recibes una retroalimentación dura de tu entrenador o tu jefe. Una buena primera respuesta es:", options: ["Discutir de inmediato", "Irte", "Escuchar, repetirlo con tus palabras y pedir un ejemplo", "Ignorarla"], answer: 2, why: "Escuchar y hacer preguntas te ayuda a aprender de ella." },
      { objective: "O6", q: "Una disculpa de verdad incluye:", options: ["Una excusa", "Culpar a la otra persona", "\"Perdón si te sientes así\"", "Lo que hiciste, su efecto y lo que harás diferente"], answer: 3, why: "Esas tres partes reparan la confianza." },
      { objective: "O6", q: "Reparar después de un error ayuda porque:", options: ["Demuestra que tenías razón", "Reconstruye la confianza en la relación", "Acaba con todo conflicto futuro", "Lo exige la ley"], answer: 1, why: "Reparar muestra respeto y reconstruye la confianza." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      4,
      7,
      10,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Sentimiento y detonante nombrados",
        objective: "O1",
        notYet: "Usó una palabra vaga como mal o enojado, o no escribió ningún detonante.",
        meets: "Escribió una palabra exacta para el sentimiento y lo que lo detonó antes de la charla.",
        exceeds: "Además nombró lo que toca el detonante, como el respeto o la justicia."
      },
      {
        name: "Pausa antes de responder",
        objective: "O3",
        notYet: "Reaccionó rápido o alzó la voz.",
        meets: "Hizo al menos una pausa antes de responder en un momento difícil.",
        exceeds: "Pidió un descanso corto y volvió para terminar la charla."
      },
      {
        name: "Repitió con sus palabras",
        objective: "O4",
        notYet: "No comprobó lo que quería decir la otra persona.",
        meets: "Repitió con sus palabras el sentimiento de la otra persona al menos una vez.",
        exceeds: "La otra persona dijo que se sintió comprendida."
      },
      {
        name: "Frase en \"yo\"",
        objective: "O5",
        notYet: "Usó frases en \"tú\" que culpan.",
        meets: "Usó una frase completa \"Me siento ... cuando ... porque ... ¿Podríamos ...?\".",
        exceeds: "El pedido llevó a un siguiente paso claro en el que los dos estuvieron de acuerdo."
      },
      {
        name: "Revisión después",
        objective: "O6",
        notYet: "No escribió ninguna revisión.",
        meets: "Escribió qué salió bien y una cosa que haría diferente.",
        exceeds: "Le pidió retroalimentación a la otra persona y la anotó con calma."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que cuentan que tuvieron una conversación que estaban postergando en 30 días (encuesta de seguimiento)",
      "Participantes que cuentan que hicieron una pausa antes de reaccionar en un momento difícil",
      "Entrenadores, gerentes o personal de programas que cuentan un mejor trabajo en equipo o menos estallidos",
      "Participantes que empiezan otro curso de habilidades con las personas de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel o una app de notas para las palabras de sentimientos, los detonantes y el plan",
      "Una lista de palabras de sentimientos (opcional)",
      "Unos 60 minutos en total, más tiempo para la conversación real"
    ],
    facilitatorNotes: [
      "Practiquen primero en parejas con situaciones inventadas; nadie tiene que compartir historias privadas.",
      "Muestra tú mismo cómo repetir con tus palabras y cómo decir frases en \"yo\" antes de pedir que lo intenten.",
      "Recuerda que las conversaciones que incluyen peligro o abuso necesitan ayuda de fuera, no una charla a solas.",
      "Si alguien parece tener un malestar que no se va, indícale un consejero, el curso \"Salud mental y manejo del estrés\" o una línea de crisis local.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

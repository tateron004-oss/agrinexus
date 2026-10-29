"use strict";

// Koach Learn course (Spanish translation of shared/communication-conflict.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "communication-conflict-es",
  lang: "es",
  translationOf: "communication-conflict",
  category: "Athletes",
  name: "Comunicación y resolución de conflictos",
  skills: "Escucha activa, Usar frases en primera persona (\"yo\"), Empezar una conversación difícil, Calmar un momento tenso, Llegar a un acuerdo justo",
  outcome: "tener una conversación tranquila y honesta sobre un desacuerdo real: escuchar hasta que la otra persona se sienta escuchada, decir lo que necesitas sin culpar, bajar la tensión si sube y acordar un siguiente paso justo que ambos pongan por escrito.",
  about: [
    "Los desacuerdos pasan en todas partes: en un equipo, en el trabajo, en casa, con un socio, un cliente, un casero o un voluntario. Las personas que los manejan bien no son las que nunca discuten. Son las que saben escuchar, hablar con claridad y encontrar una salida.",
    "Este curso es para todos: atletas y entrenadores, trabajadores y gerentes, dueños de negocios, personal y voluntarios de organizaciones sin fines de lucro, veteranos, jóvenes y personas que reconstruyen su vida después de la cárcel. Los ejemplos vienen de vestuarios, obras, tiendas, oficinas y mesas de cocina.",
    "Vas a practicar cinco habilidades: escucha activa, frases con \"yo\", empezar una conversación difícil, calmar un momento tenso y llegar a un acuerdo justo. Cada lección dura unos cinco minutos y termina con una práctica corta. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige un desacuerdo real de tu vida (puede ser pequeño). Planea la conversación en papel y luego tenla, o practícala con un amigo: repite con tus palabras lo que dice la otra persona, usa una frase con \"yo\", pregunta qué necesita y termina con un acuerdo escrito que diga quién hace qué y para cuándo.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Cualquiera que enfrenta desacuerdos: deportistas y entrenadores, trabajadores y gerentes, dueños de negocios, personal y voluntarios de organizaciones sin fines de lucro, veteranos, jóvenes y personas que rehacen su vida después de la prisión.",
    startingPoint: "Hablan con la gente todos los días y han manejado algunos desacuerdos, pero a menudo evitan las charlas difíciles, culpan, se acaloran o se van sin un plan claro.",
    gap: "Los conflictos sin resolver dañan equipos, empleos, negocios y familias. Necesitan habilidades prácticas para escuchar, decir lo que piensan sin culpar, bajar la tensión y acordar un siguiente paso justo, para que los desacuerdos terminen en soluciones y no en daños.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "La práctica usa desacuerdos reales pero pequeños, o una simulación con un amigo",
      "Seguridad: si un conflicto incluye peligro, amenazas o acoso, la persona se va y busca ayuda o acude a un gerente o a Recursos Humanos",
      "Privacidad: nadie tiene que compartir los detalles de sus propios conflictos",
      "Tiempo: lecciones de unos cinco minutos con prácticas cortas"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "En una conversación real", action: "repetir con tus palabras lo que dijo la otra persona y hacer una pregunta abierta", standard: "hasta que esté de acuerdo en que la entendiste" },
    { id: "O2", condition: "Con una frase que culpa", action: "reescribirla como una frase con \"yo\" que tenga un pedido claro", standard: "usando el modelo me siento, cuando, porque, ¿podríamos?" },
    { id: "O3", condition: "Para una conversación que has estado aplazando", action: "planear el objetivo, el momento, el lugar y la frase de inicio de una conversación difícil", standard: "con una frase de inicio que puedas decir en voz alta con calma" },
    { id: "O4", condition: "Cuando una charla se acalora", action: "calmarte y calmar a la otra persona con respiración lenta, palabras que calman o un descanso con hora de regreso", standard: "sin alzar la voz ni decir \"cálmate\"" },
    { id: "O5", condition: "Con un desacuerdo", action: "anotar la postura y el interés de cada lado y tres opciones que podrían servir a los dos", standard: "antes de juzgar ninguna opción" },
    { id: "O6", condition: "Al final de una conversación", action: "escribir un acuerdo que diga quién hace qué, para cuándo y cómo van a revisarlo", standard: "con cada parte por escrito y compartida" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Escuchar y hablar con claridad",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escucha activa: que la gente se sienta escuchada",
          minutes: 5,
          goal: "Escuchar a alguien y repetir con tus palabras lo que dijo para que se sienta comprendido.",
          text: [
            "La mayoría de las discusiones empeoran porque cada persona está ocupada pensando qué va a decir después. Escuchar de forma activa significa dejar eso de lado y tratar de entender primero a la otra persona.",
            "Tiene cuatro partes. Presta toda tu atención: deja el teléfono y mira a la persona. Déjala terminar sin interrumpir. Repite con tus palabras lo que oíste, por ejemplo: \"Entonces te sentiste excluido cuando cambiaron el horario sin avisar\". Luego haz una pregunta abierta, que no se pueda contestar con sí o no, como: \"¿Qué te habría ayudado?\"",
            "Repetir lo que oíste no es estar de acuerdo. Solo muestras que entendiste. Cuando la gente se siente escuchada, por lo general se calma y empieza a escucharte también."
          ],
          steps: ["Guarda el teléfono y mira a la persona.", "Déjala terminar. No la interrumpas ni intentes arreglarlo todavía.", "Repite con tus palabras: \"Entonces lo que entiendo es...\"", "Haz una pregunta abierta: \"¿Qué te ayudaría?\" o \"Cuéntame más sobre...\"", "Comprueba: \"¿Lo entendí bien?\""],
          words: [["Escucha activa", "escuchar para entender y luego mostrarle a la persona que entendiste."], ["Repetir con tus palabras", "decir la idea principal de nuevo, con tus propias palabras."], ["Pregunta abierta", "una pregunta que necesita algo más que un sí o un no."]],
          slides: [
            { title: "Por qué primero hay que escuchar", bullets: ["Casi todos planean su respuesta en vez de escuchar", "Quien se siente escuchado se calma", "Entonces está listo para escucharte"] },
            { title: "Las cuatro partes de la escucha activa", bullets: ["Toda tu atención: deja el teléfono y mira a la persona", "Déjala terminar", "Repite con tus palabras", "Haz una pregunta abierta"] },
            { title: "Cómo suena", bullets: ["\"Entonces te sentiste excluido cuando cambió el horario.\"", "\"¿Qué te habría ayudado?\"", "\"¿Lo entendí bien?\""] },
            { title: "Recuerda", bullets: ["Repetir lo que oíste no es estar de acuerdo", "Muestra que entendiste"] }
          ],
          tryIt: "Hoy, en tu próxima conversación real con un compañero de equipo, un compañero de trabajo, un amigo o un familiar, repite con tus palabras algo que dijo y haz una pregunta abierta. Fíjate en cómo responde.",
          youCanNow: "escuchar con toda tu atención, repetir con tus palabras lo que oíste y hacer una pregunta abierta.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una pregunta abierta?", options: ["Una pregunta que se responde con sí o no", "Una pregunta que invita a la persona a explicar con sus propias palabras", "Una pregunta que haces en un lugar público", "Una pregunta de la que ya sabes la respuesta"], answer: 1, why: "Las preguntas abiertas empiezan con palabras como qué o cómo e invitan a una respuesta completa." },
            { objective: "O1", q: "Un compañero de equipo dice: \"El entrenador nunca me pone en el segundo tiempo\". ¿Qué dirías?", options: ["\"Eso no es cierto.\"", "\"Deberías entrenar más duro.\"", "\"¿Entonces sientes que no te dan una oportunidad justa al final de los partidos?\"", "\"No quiero hablar de eso.\""], answer: 2, why: "Repetir con tus palabras muestra que lo escuchaste antes de responder." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Decir lo que necesitas con frases en primera persona",
          minutes: 5,
          goal: "Convertir una frase que culpa en una frase clara con \"yo\".",
          text: [
            "\"Tú siempre...\" y \"Tú nunca...\" hacen que la gente se defienda, y entonces nadie escucha. Una frase con \"yo\" habla de lo que pasó y de cómo te afectó, sin atacar a la otra persona.",
            "Un modelo sencillo: \"Me siento [sentimiento] cuando [lo que pasó] porque [por qué te importa]. ¿Podríamos [petición]?\" Por ejemplo, en vez de \"Nunca me pasas el balón\", prueba: \"Me siento frustrado cuando estoy solo y el balón no me llega, porque quiero ayudar a que anotemos. ¿Podríamos ver el video del partido juntos?\"",
            "Habla de un solo tema, describe lo que pasó como lo vería una cámara y termina con una petición que la persona pueda cumplir. Tu tono y tu cara importan tanto como las palabras, así que mantén la voz tranquila."
          ],
          steps: ["Nombra una cosa que pasó, como la vería una cámara.", "Nombra lo que sientes: frustración, preocupación, dolor, estrés.", "Di por qué te importa.", "Pide un cambio claro y posible."],
          words: [["Frase con \"yo\"", "una frase que empieza por lo que sientes y necesitas, no por la culpa del otro."], ["Petición", "pedir una cosa concreta que la otra persona puede hacer."]],
          slides: [
            { title: "Culpar cierra la conversación", bullets: ["\"Tú siempre...\" y \"Tú nunca...\"", "La gente se defiende en vez de escuchar"] },
            { title: "El modelo de la frase con \"yo\"", bullets: ["Me siento [sentimiento]", "cuando [lo que pasó]", "porque [por qué te importa]", "¿Podríamos [petición]?"] },
            { title: "Antes y después", bullets: ["Antes: \"Nunca limpias.\"", "Después: \"Me estreso cuando se acumulan los platos, porque cocino temprano.", "¿Podríamos turnarnos cada noche?\""] },
            { title: "Consejos", bullets: ["Un tema a la vez", "Descríbelo como lo vería una cámara", "Voz tranquila, cara relajada"] }
          ],
          tryIt: "Escribe tres frases que culpan y que has dicho u oído, por ejemplo en el trabajo o en casa. Cambia cada una por una frase con \"yo\" que tenga una petición clara. Di la mejor en voz alta.",
          youCanNow: "convertir una frase que culpa en una frase con \"yo\" que tiene un sentimiento, un motivo y una petición clara.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la diferencia principal entre una frase con \"yo\" y una frase con \"tú\"?", options: ["Una frase con \"yo\" siempre es más larga", "Una frase con \"yo\" describe lo que sientes y necesitas en vez de culpar", "Una frase con \"tú\" es más amable", "No hay ninguna diferencia"], answer: 1, why: "Las frases con \"yo\" comparten lo que sientes y necesitas, así la otra persona no se siente atacada." },
            { objective: "O2", q: "Tu compañero de cuarto deja los platos en el fregadero. ¿Qué dirías?", options: ["\"Me siento frustrado cuando los platos se quedan toda la noche, porque cocino temprano. ¿Podríamos lavarlos antes de dormir?\"", "\"Eres un flojo.\"", "\"Siempre dejas todo sucio.\"", "\"Como sea, lo hago todo yo.\""], answer: 0, why: "Sigue el modelo me siento, cuando, porque, ¿podríamos? con un pedido claro." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Empezar una conversación difícil",
          minutes: 5,
          goal: "Planear y empezar una conversación difícil en el momento y el lugar adecuados.",
          text: [
            "Mucha gente evita las conversaciones difíciles hasta que explota. Planear un poco las hace mucho más fáciles. Primero, ten claro lo que quieres: no ganar, sino resolver el problema y que la relación siga funcionando.",
            "Elige un buen momento y lugar: en privado, sin prisa y no cuando alguno de los dos esté enojado, cansado o con hambre. Pregunta primero: \"¿Tienes diez minutos hoy? Me gustaría hablar del horario de entregas\". Un mensaje o un correo puede servir para acordar la charla, pero tenla en persona o por llamada cuando puedas, porque el tono se pierde por escrito.",
            "Empieza con una primera frase corta y tranquila que diga el tema y tu objetivo: \"Quiero que trabajemos bien juntos y hay algo que me ha estado molestando. ¿Puedo contártelo y luego escuchar tu versión?\" Después usa tu frase con \"yo\" y pasa a escuchar."
          ],
          steps: ["Escribe tu objetivo: ¿cómo sería un buen resultado?", "Elige un momento en privado en que los dos estén tranquilos.", "Pregunta si es un buen momento.", "Empieza con el tema y tu objetivo en una o dos frases.", "Usa tu frase con \"yo\" y luego escucha."],
          words: [["Conversación difícil", "una charla sobre algo complicado, en la que los sentimientos pueden estar a flor de piel."], ["Frase de inicio", "la primera o las dos primeras frases que empiezan la charla con calma."]],
          slides: [
            { title: "Ten claro tu objetivo", bullets: ["No se trata de ganar", "Se trata de resolver el problema", "Y de que la relación siga funcionando"] },
            { title: "Elige el momento", bullets: ["En privado y sin prisa", "No cuando haya enojo, cansancio o hambre", "En persona o por llamada cuando puedas"] },
            { title: "Un inicio tranquilo", bullets: ["\"Quiero que trabajemos bien juntos.\"", "\"Hay algo que me ha estado molestando.\"", "\"¿Puedo contártelo y luego escuchar tu versión?\""] },
            { title: "Después", bullets: ["Usa tu frase con \"yo\"", "Pasa a escuchar"] }
          ],
          tryIt: "Piensa en una conversación que has estado aplazando. Escribe tu objetivo en una frase, elige un momento y un lugar, y escribe tu frase de inicio. Léela en voz alta hasta que suene tranquila y natural.",
          youCanNow: "planear una conversación difícil, elegir un buen momento y empezarla con calma.",
          quickCheck: [
            { objective: "O3", q: "¿Qué deberías decidir antes de empezar una conversación difícil?", options: ["Quién va a ganar", "Tu objetivo, un buen momento y lugar, y tu frase de inicio", "Qué publicar en internet sobre el tema", "Qué tan fuerte hablar"], answer: 1, why: "Planear el objetivo, el momento, el lugar y el inicio ayuda a que la charla empiece con calma." },
            { objective: "O3", q: "Necesitas hablar con tu gerente sobre tus horas, pero va corriendo a una reunión. ¿Qué harías?", options: ["Sacar el tema ahora mismo en el pasillo", "Enviar un correo enojado", "Renunciar sin decir nada", "Pedirle diez minutos hoy en un momento más tranquilo"], answer: 3, why: "Un momento en privado y tranquilo le da a la charla más posibilidades." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Escuchar y hablar con claridad",
        questions: [
          { objective: "O1", q: "Tu compañero de trabajo está molesto por un cambio de horario. ¿Cuál es la mejor respuesta de escucha activa?", options: ["\"No es mi culpa.\"", "\"Entonces te sentiste excluido porque nadie te avisó. ¿Lo entendí bien?\"", "\"Déjame contarte lo que me pasó a mí.\"", "Mirar tu teléfono mientras habla"], answer: 1, why: "Repetir con tus palabras y comprobar muestra que entendiste." },
          { objective: "O1", q: "¿Cuál es una pregunta abierta?", options: ["\"¿Estás enojado?\"", "\"¿Terminaste?\"", "\"¿Eso es todo?\"", "\"¿Qué es lo que más te ayudaría ahora?\""], answer: 3, why: "No se puede contestar solo con sí o no." },
          { objective: "O2", q: "¿Cuál es una buena frase con \"yo\"?", options: ["\"Me siento preocupado cuando el alquiler se paga tarde, porque podría perder el contrato. ¿Podríamos poner un recordatorio?\"", "\"Siempre pagas tarde el alquiler.\"", "\"Creo que eres un flojo.\"", "\"Nunca te importa nada.\""], answer: 0, why: "Nombra un sentimiento, lo que pasó, por qué importa y una petición clara." },
          { objective: "O3", q: "¿Cuál es el mejor momento para empezar una conversación difícil?", options: ["Justo después de una derrota, cuando todos están enojados", "Delante de todo el equipo", "Un momento en privado en que los dos estén tranquilos", "Nunca; esperar a que se olvide"], answer: 2, why: "En privado y con calma, la charla tiene más posibilidades de salir bien." },
          { objective: "O1", q: "Repetir con tus palabras lo que alguien dijo significa:", options: ["Que estás de acuerdo con esa persona", "Que muestras que entendiste lo que dijo", "Que repites sus palabras para burlarte", "Que cambias de tema"], answer: 1, why: "Repetir con tus palabras es entender, no estar de acuerdo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Calmar el conflicto y acordar cómo seguir",
      lessons: [
        {
          objectives: ["O4"],
          title: "Calmar un momento tenso",
          minutes: 5,
          goal: "Bajar la tensión de un momento difícil, en ti y en la otra persona.",
          text: [
            "Cuando nos enojamos, el cuerpo se prepara para pelear: el corazón se acelera y cuesta pensar con claridad. En ese estado no se decide nada bueno, así que lo primero es calmarse.",
            "Empieza por ti: inhala despacio contando hasta cuatro y exhala contando hasta seis, abre las manos y baja la voz. Habla más despacio y más suave que la otra persona. Nombra lo que ves sin juzgar: \"Veo que esto te importa mucho\". Evita decir \"¡Cálmate!\", que casi siempre logra lo contrario.",
            "Si sigue muy tenso, toma un descanso y fija una hora para volver: \"Quiero resolver esto. Tomemos veinte minutos y hablemos a las 3\". Si en algún momento no te sientes seguro, vete y busca ayuda. Tu seguridad es más importante que cualquier conversación."
          ],
          steps: ["Nota tus propias señales: corazón rápido, cara caliente, puños apretados.", "Respira: inhala en 4, exhala en 6, unas cuantas veces.", "Baja la voz y habla más despacio.", "Nombra el sentimiento que ves: \"Veo que estás molesto\".", "Si hace falta, toma un descanso y fija una hora para volver.", "Si no te sientes seguro, vete y busca ayuda."],
          words: [["Desescalar", "calmar una situación para que no empeore."], ["Pausa", "un descanso corto y acordado para calmarse, con una hora para volver."]],
          slides: [
            { title: "El enojo no deja pensar con claridad", bullets: ["El cuerpo se prepara para pelear", "En caliente no se decide nada bueno", "Lo primero: calmarse"] },
            { title: "Primero cálmate tú", bullets: ["Inhala en 4, exhala en 6", "Abre las manos", "Baja la voz y habla más despacio"] },
            { title: "Calma a la otra persona", bullets: ["Nombra lo que ves: \"Veo que esto te importa.\"", "Evita decir \"¡Cálmate!\"", "Escucha y repite con tus palabras"] },
            { title: "¿Sigue muy tenso?", bullets: ["Toma un descanso: \"Hablemos a las 3.\"", "Vuelve siempre a esa hora", "Si no te sientes seguro, vete y busca ayuda"] }
          ],
          tryIt: "Practica ahora cinco veces la respiración de inhalar en 4 y exhalar en 6. Luego escribe dos frases para calmar: una que nombre lo que siente la otra persona y otra que pida un descanso con una hora para volver.",
          youCanNow: "calmarte, ayudar a calmar a otra persona y tomar un descanso seguro cuando un momento se pone demasiado tenso.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es la respiración de 4 para inhalar y 6 para exhalar?", options: ["Inhalar contando hasta 4 y exhalar contando hasta 6 para calmarte", "Cuatro respiraciones profundas y luego seis rápidas", "Aguantar la respiración 10 segundos", "Respirar solo por la boca"], answer: 0, why: "Exhalar más largo ayuda a que tu cuerpo se calme." },
            { objective: "O4", q: "Una discusión con un cliente sube de tono y te estás enojando. ¿Qué harías?", options: ["Alzar la voz para que te escuche", "Decirle que se calme", "Respirar más despacio, bajar la voz y nombrar lo que siente", "Irte sin decir una palabra"], answer: 2, why: "Calmarte primero y nombrar lo que siente la otra persona baja la tensión del momento." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Descubrir lo que cada persona realmente necesita",
          minutes: 5,
          goal: "Encontrar las necesidades detrás de la postura de cada lado y hacer una lista de opciones que sirvan a los dos.",
          text: [
            "En un conflicto, la gente suele decir una postura: lo que dice que quiere. Detrás hay un interés: la razón por la que lo quiere. Dos jugadores quieren el mismo número de camiseta (postura). Uno lo quiere por suerte; el otro, porque era el número de un abuelo que murió (intereses). Conocer el interés abre nuevas respuestas.",
            "Pregunta el \"por qué\" con amabilidad: \"¿Qué es lo más importante para ti en esto?\" o \"¿Qué te preocupa de ese plan?\" Luego comparte tu propio interés de la misma forma.",
            "Ahora hagan juntos una lista de opciones, sin juzgarlas todavía. Busquen al menos tres. Una dueña de tienda y un empleado que quieren los sábados libres podrían encontrar: fines de semana alternos, turnos divididos o un bono de fin de semana para contratar ayuda extra. La mejor opción suele cubrir la necesidad más importante de cada lado."
          ],
          steps: ["Escribe la postura de cada lado.", "Pregunta qué es lo más importante detrás de ella y escribe los intereses.", "Hagan juntos una lista de al menos tres opciones, sin juzgarlas todavía.", "Elijan la opción que cubre las necesidades más importantes de los dos lados."],
          words: [["Postura", "lo que alguien dice que quiere."], ["Interés", "la necesidad o razón real detrás de la postura."], ["Lluvia de ideas", "decir muchas ideas rápido antes de juzgar ninguna."]],
          slides: [
            { title: "Postura frente a interés", bullets: ["Postura: lo que alguien dice que quiere", "Interés: por qué lo quiere", "Los intereses abren nuevas respuestas"] },
            { title: "Pregunta el porqué", bullets: ["\"¿Qué es lo más importante para ti en esto?\"", "\"¿Qué te preocupa de ese plan?\"", "Luego comparte tu propio porqué"] },
            { title: "Hagan juntos una lista de opciones", bullets: ["Al menos tres ideas", "No las juzguen todavía", "Ejemplo: fines de semana alternos, turnos divididos, un bono"] },
            { title: "Elijan", bullets: ["Elijan la opción que cubre las mayores necesidades de los dos lados"] }
          ],
          tryIt: "Toma el desacuerdo que planeaste en la lección 3. Escribe tu postura y tu interés, y lo que crees que son los de la otra persona. Luego haz una lista de tres opciones que podrían cubrir los dos intereses.",
          youCanNow: "encontrar las necesidades reales detrás de un desacuerdo y hacer una lista de opciones que podrían servir a los dos lados.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un interés en un desacuerdo?", options: ["La primera exigencia de la persona", "La necesidad o la razón detrás de lo que una persona pide", "Qué tan interesante es la discusión", "El dinero que se debe de un préstamo"], answer: 1, why: "Un interés es la necesidad que hay debajo de una postura." },
            { objective: "O5", q: "Tú y un compañero de trabajo quieren el viernes libre. ¿Qué harías primero?", options: ["Echarlo a la suerte con una moneda enseguida", "Dejar que gane el que hable más fuerte", "Ir con el jefe sin hablar entre ustedes", "Preguntar por qué cada uno necesita el viernes y hacer juntos una lista de opciones"], answer: 3, why: "Encontrar la necesidad de cada persona abre opciones que pueden servir a los dos." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Llegar a un acuerdo justo",
          minutes: 5,
          goal: "Convertir una buena conversación en un acuerdo claro y por escrito, y darle seguimiento.",
          text: [
            "Muchas buenas charlas fracasan porque nadie dice exactamente qué pasa después. Un acuerdo claro responde tres preguntas: quién hace qué, para cuándo y cómo van a comprobar que funciona.",
            "Justo significa que los dos pueden aceptarlo y que respeta la necesidad principal de cada lado. Repítelo en voz alta: \"Entonces, yo cubro los cierres del martes, tú cubres las mañanas del sábado, empezando la próxima semana, y lo revisamos el día 15\". Luego escríbelo en un mensaje, un correo o una nota compartida para que nadie lo recuerde distinto más adelante.",
            "Haz el seguimiento en la fecha acordada. Si no funciona, vuelvan a escuchar y a buscar opciones; eso es normal, no un fracaso. Para problemas serios, como acoso, seguridad, dinero o asuntos legales, busca a un gerente, a Recursos Humanos, a un entrenador, a un mediador o a otra persona de confianza. No tienes que resolverlo todo solo."
          ],
          steps: ["Di el acuerdo en voz alta: quién, qué y para cuándo.", "Pregunta: \"¿Podemos aceptar esto los dos?\"", "Escríbelo y envía una copia a la otra persona.", "Fija una fecha para revisarlo.", "Haz el seguimiento. Si no funciona, vuelvan a hablar."],
          words: [["Acuerdo", "lo que las dos personas deciden hacer, dicho con claridad."], ["Seguimiento", "volver a revisar más tarde si el acuerdo está funcionando."], ["Mediador", "una persona neutral que ayuda a dos partes a hablar y llegar a un acuerdo."]],
          slides: [
            { title: "Un acuerdo claro dice", bullets: ["Quién hace qué", "Para cuándo", "Cómo van a comprobar que funciona"] },
            { title: "Que sea justo", bullets: ["Los dos pueden aceptarlo", "Respeta la necesidad principal de cada lado", "Pregunta: \"¿Podemos aceptar esto los dos?\""] },
            { title: "Ponlo por escrito", bullets: ["Repítelo en voz alta", "Envíalo por mensaje, correo o nota compartida", "Fija una fecha para revisarlo"] },
            { title: "Haz seguimiento y pide ayuda", bullets: ["¿No funciona? Vuelvan a hablar", "Temas serios: gerente, Recursos Humanos, entrenador o mediador"] }
          ],
          tryIt: "Tarea final: ten (o practica con un amigo) la conversación que planeaste. Repite con tus palabras lo que oyes, usa una frase con \"yo\", pregunta qué necesita la otra persona, acuerden quién hace qué y para cuándo, y envía un resumen corto por escrito.",
          youCanNow: "cerrar una conversación difícil con un acuerdo justo y por escrito, y darle seguimiento.",
          quickCheck: [
            { objective: "O6", q: "¿Por qué poner una fecha de revisión en un acuerdo?", options: ["Para ver si el acuerdo funciona y arreglarlo si no", "Para castigar a quien no lo cumpla", "Para terminar la relación", "Porque lo exige la ley"], answer: 0, why: "Una revisión deja que los dos vean si el plan funciona y lo ajusten." },
            { objective: "O6", q: "Tú y tu socio de negocio acordaron un plan de palabra. ¿Qué harías después?", options: ["Confiar en que los dos lo recordarán igual", "Contarle tu versión a otras personas", "Enviar un resumen corto por escrito de quién hace qué y para cuándo", "Esperar a que aparezcan los problemas"], answer: 2, why: "Un resumen por escrito hace que nadie lo recuerde distinto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Calmar el conflicto y acordar cómo seguir",
        questions: [
          { objective: "O4", q: "Una discusión sube de tono. ¿Qué deberías hacer primero?", options: ["Hablar más fuerte para que te escuchen", "Decir \"¡Cálmate!\"", "Irte y no volver a hablar del tema nunca", "Respirar más despacio y bajar la voz"], answer: 3, why: "Calmarte primero ayuda a calmar el momento." },
          { objective: "O5", q: "Dos voluntarios quieren el turno del sábado. Uno necesita los días de semana libres para estudiar. Esa necesidad es su:", options: ["Interés", "Postura", "Acuerdo", "Pausa"], answer: 0, why: "Un interés es la razón real detrás de lo que alguien pide." },
          { objective: "O4", q: "Cuando tomas un descanso en medio de una charla tensa, deberías:", options: ["No volver a mencionar el tema nunca", "Fijar una hora para volver y cumplirla", "Publicarlo en internet", "Contárselo primero a todos los demás"], answer: 1, why: "Un descanso funciona cuando vuelves a la hora acordada." },
          { objective: "O6", q: "¿Cuál es el acuerdo más claro?", options: ["\"Lo haremos mejor.\"", "\"Esforcémonos más.\"", "\"Yo cierro los martes, tú abres los sábados, desde el lunes; lo revisamos el día 15.\"", "\"Lo que funcione.\""], answer: 2, why: "Dice quién, qué, cuándo y cómo lo van a comprobar." },
          { objective: "O6", q: "Un conflicto en el trabajo incluye acoso. ¿Cuál es el paso correcto?", options: ["Avisar a un gerente o a Recursos Humanos", "Resolverlo solo pase lo que pase", "Ignorarlo", "Discutir más fuerte"], answer: 0, why: "Los temas serios necesitan a un gerente, a Recursos Humanos o a otra persona de confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Comunicación y resolución de conflictos",
    questions: [
      { objective: "O1", q: "La escucha activa significa:", options: ["Esperar tu turno para hablar", "Escuchar para entender y luego mostrar que entendiste", "Estar de acuerdo con todo", "Dar consejos de inmediato"], answer: 1, why: "Se trata de entender y mostrar que entendiste." },
      { objective: "O1", q: "¿Qué muestra que prestas toda tu atención?", options: ["Mirar el teléfono", "Mirar la televisión", "Dejar el teléfono y mirar a la persona", "Terminar sus frases"], answer: 2, why: "Toda tu atención significa sin distracciones." },
      { objective: "O1", q: "\"¿Entonces la entrega tardía te dejó sin suficiente para la hora del almuerzo?\" es un ejemplo de:", options: ["Culpar", "Cambiar de tema", "Una pregunta cerrada", "Repetir con tus palabras"], answer: 3, why: "Repite la idea principal con tus propias palabras." },
      { objective: "O1", q: "¿Cuál NO es una pregunta abierta?", options: ["\"¿Recibiste mi mensaje?\"", "\"¿Qué te ayudaría?\"", "\"¿Cómo te afectó eso?\"", "\"¿Qué es lo más importante para ti aquí?\""], answer: 0, why: "Se puede contestar con sí o no." },
      { objective: "O2", q: "¿Por qué las frases como \"Tú siempre...\" causan problemas?", options: ["Son demasiado cortas", "Hacen que la gente se defienda", "Son demasiado amables", "Son difíciles de escribir"], answer: 1, why: "Culpar hace que la gente se defienda en vez de escuchar." },
      { objective: "O2", q: "El modelo de la frase con \"yo\" es:", options: ["Yo gano cuando tú pierdes", "Tengo razón porque lo digo yo", "Me siento ___ cuando ___ porque ___. ¿Podríamos ___?", "Te ignoraré hasta que cambies"], answer: 2, why: "Sentimiento, lo que pasó, por qué importa y una petición." },
      { objective: "O2", q: "Un compañero de equipo sigue llegando tarde al entrenamiento. ¿Cuál es el mejor inicio?", options: ["\"Me estreso cuando el calentamiento empieza sin ti, porque perdemos ejercicios. ¿Podrías intentar llegar 10 minutos antes?\"", "\"No te importa este equipo.\"", "\"Todos piensan que eres un flojo.\"", "No decir nada y quejarse con los demás"], answer: 0, why: "Es una frase con \"yo\" tranquila y con una petición clara." },
      { objective: "O2", q: "Una frase con \"yo\" debe describir lo que pasó:", options: ["Con todos los insultos posibles", "Como lo vería una cámara", "Sacando todos los errores del pasado", "En un chat de grupo"], answer: 1, why: "Los hechos simples, sin juicios, mantienen la calma." },
      { objective: "O3", q: "Tu objetivo en una conversación difícil suele ser:", options: ["Ganar la discusión", "Demostrar que el otro está equivocado", "Tener la última palabra", "Resolver el problema y que la relación siga funcionando"], answer: 3, why: "Un buen resultado sirve a las dos personas." },
      { objective: "O3", q: "¿Cuál es la mejor forma de preparar una charla difícil con tu socio de negocio?", options: ["Sacar el tema delante de los clientes", "\"¿Tienes diez minutos hoy para hablar del horario?\"", "Mandar un mensaje enojado a medianoche", "Esperar hasta explotar"], answer: 1, why: "Preguntar primero y elegir un momento tranquilo y en privado funciona mejor." },
      { objective: "O3", q: "¿Por qué tener la charla difícil en persona o por llamada cuando puedas?", options: ["El tono se puede perder por escrito", "Los mensajes son ilegales", "Tarda más", "Es más dramático"], answer: 0, why: "La voz y la cara transmiten un tono que el texto pierde." },
      { objective: "O4", q: "¿Qué forma de respirar te ayuda a calmarte?", options: ["Aguantar la respiración todo lo que puedas", "Respirar muy rápido", "Inhalar contando hasta 4 y exhalar contando hasta 6", "Gritar para sacarlo"], answer: 2, why: "Una exhalación más larga ayuda al cuerpo a calmarse." },
      { objective: "O4", q: "Decirle \"¡Cálmate!\" a una persona molesta por lo general:", options: ["La calma de inmediato", "Empeora las cosas", "Termina el conflicto", "Crea confianza"], answer: 1, why: "Suena despectivo; nombrar lo que siente funciona mejor." },
      { objective: "O4", q: "No te sientes seguro durante una discusión. ¿Qué haces?", options: ["Quedarte y terminarla", "Levantar la voz", "Bloquear la puerta", "Irte y buscar ayuda"], answer: 3, why: "Tu seguridad es más importante que cualquier conversación." },
      { objective: "O5", q: "\"Quiero la oficina de la esquina\" es una postura. ¿Cuál podría ser el interés detrás?", options: ["La oficina de la esquina", "Un escritorio más grande en la oficina de la esquina", "Un lugar tranquilo para hacer llamadas", "Ganar"], answer: 2, why: "Un interés es la razón detrás de la postura." },
      { objective: "O5", q: "Cuando hacen juntos una lista de opciones, deberían:", options: ["Decir varias ideas antes de juzgar ninguna", "Rechazar cada idea en cuanto se dice", "Poner solo tus propias ideas", "Parar en la primera idea"], answer: 0, why: "Hacer primero una lluvia de ideas da más opciones." },
      { objective: "O5", q: "La mejor opción suele ser la que:", options: ["Es más rápida de decir", "Cubre las necesidades más importantes de los dos lados", "Deja ganar a quien grita más", "Cuesta más"], answer: 1, why: "Cubrir las necesidades clave de los dos lados hace que dure." },
      { objective: "O6", q: "Un acuerdo claro responde:", options: ["Quién tuvo la culpa", "Quién gritó primero", "Qué piensa todo el mundo", "Quién hace qué, para cuándo y cómo lo van a comprobar"], answer: 3, why: "Esos detalles hacen que un acuerdo funcione." },
      { objective: "O6", q: "¿Por qué poner el acuerdo por escrito?", options: ["Para usarlo en su contra más tarde", "Para publicarlo en internet", "Porque se ve oficial", "Para que nadie lo recuerde distinto"], answer: 3, why: "Una nota escrita evita que cada persona recuerde algo distinto." },
      { objective: "O6", q: "En la fecha de revisión, el acuerdo no está funcionando. ¿Cuál es el mejor paso?", options: ["Renunciar a la relación", "Hacer como si todo estuviera bien", "Volver a hablar: escuchar y buscar nuevas opciones", "Culpar a la otra persona"], answer: 2, why: "Volver a escuchar y buscar opciones es normal." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      5,
      7,
      9,
      11,
      13,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan para la charla",
        objective: "O3",
        notYet: "No hay un objetivo, un momento ni una frase de inicio claros.",
        meets: "Un objetivo de una oración, un momento y un lugar tranquilos, y una frase de inicio practicada en voz alta.",
        exceeds: "Además planeó cómo tomar un descanso si la charla se acalora."
      },
      {
        name: "Escuchar",
        objective: "O1",
        notYet: "Interrumpió o saltó a las respuestas sin repetir con sus palabras.",
        meets: "Repitió con sus palabras al menos una vez e hizo una pregunta abierta.",
        exceeds: "La otra persona dijo que se sintió comprendida."
      },
      {
        name: "Frase con \"yo\"",
        objective: "O2",
        notYet: "Usó frases con \"tú\" que culpan.",
        meets: "Usó al menos una frase clara con \"yo\" con un pedido.",
        exceeds: "Siguió usando frases con \"yo\" incluso cuando la charla se puso difícil."
      },
      {
        name: "Necesidades y opciones",
        objective: "O5",
        notYet: "Solo discutió posturas.",
        meets: "Preguntó qué necesita la otra persona y miró más de una opción.",
        exceeds: "Encontró una opción que cubre necesidades importantes de los dos lados."
      },
      {
        name: "Acuerdo por escrito",
        objective: "O6",
        notYet: "No hay acuerdo, o es vago.",
        meets: "Un resumen por escrito de quién hace qué y para cuándo, compartido con la otra persona.",
        exceeds: "Incluye una fecha de revisión."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que cuentan que tuvieron una conversación difícil en 30 días (encuesta de seguimiento)",
      "Participantes que cuentan un desacuerdo resuelto con un acuerdo por escrito",
      "Equipos o programas que cuentan menos conflictos que llegan a un gerente, a un entrenador o a Recursos Humanos",
      "Participantes que empiezan otro curso de habilidades con las personas de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Papel y lápiz para planear la conversación y escribir el acuerdo",
      "Un amigo o compañero para la simulación, si es posible",
      "Unos 60 minutos en total, más tiempo para la conversación real"
    ],
    facilitatorNotes: [
      "Usa simulaciones en parejas con desacuerdos inventados o reales pero pequeños; nadie tiene que compartir datos personales.",
      "Muestra tú mismo la escucha activa y las frases con \"yo\" antes de que las prueben.",
      "Recuerda que los conflictos con peligro, amenazas o acoso necesitan la ayuda de un gerente, de Recursos Humanos o de las autoridades, no una charla a solas.",
      "Con equipos, practiquen con conflictos comunes de equipo, como el tiempo de juego, los horarios y las tareas compartidas.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

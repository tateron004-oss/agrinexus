"use strict";

// Koach Learn course (Spanish translation of leadership/lead-change-management.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "lead-change-management-es",
  lang: "es",
  translationOf: "lead-change-management",
  category: "Leadership Development",
  name: "Liderar el cambio",
  skills: "Entender la resistencia, Explicar por qué hace falta el cambio, Involucrar a las personas afectadas, Escribir un plan de cambio sencillo, Comunicar el cambio y lograr victorias rápidas, Hacer que el cambio perdure",
  outcome: "liderar un cambio real en tu trabajo o en tu comunidad: entender por qué la gente se resiste, explicar por qué el cambio importa, involucrar a las personas afectadas, escribir un plan de cambio de una página, comunicarlo bien y mantenerlo vivo después del lanzamiento.",
  about: [
    "Este curso es para cualquier persona a la que le piden liderar un cambio: un supervisor que trae un nuevo horario, una organización sin fines de lucro que pasa a un nuevo sistema de donantes, el dueño de un pequeño negocio que cambia cómo se manejan los pedidos o un grupo de agricultores que pasa a registros digitales.",
    "La mayoría de los cambios no fracasan porque la idea sea mala, sino porque no se lleva a la gente consigo. Vas a aprender por qué la gente se resiste, cómo explicar por qué hace falta el cambio, cómo involucrar a las personas y cómo planear, comunicar y sostener un cambio.",
    "Cada lección dura unos cinco minutos. Al empezar, elige un cambio real que te importe y úsalo en cada tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe un plan de cambio de una página para un cambio real que quieras liderar. Debe incluir qué cambia, por qué (en dos o tres frases que le importen a la gente), a quién afecta y cómo lo vas a involucrar, cuándo ocurre cada paso, cómo sabrás que está funcionando, tres mensajes para tres grupos distintos, una victoria rápida en el primer mes y dos maneras de mantener vivo el cambio.",
  chapters: [
    {
      name: "Capítulo 1: Entender el cambio y llevar a la gente contigo",
      lessons: [
        {
          title: "Por qué la gente se resiste al cambio",
          minutes: 5,
          goal: "Nombrar las razones probables por las que la gente se resistirá a tu cambio, para poder responder a ellas.",
          text: [
            "Cambiar significa perder algo conocido, aunque la nueva forma sea mejor. La gente se resiste por razones comprensibles: no ve por qué hace falta, teme no hacerlo bien de la nueva forma, le preocupa perder tiempo, dinero, posición o amistades, no le preguntaron o los cambios anteriores salieron mal.",
            "La resistencia es información, no un ataque. La persona que se opone muchas veces ve un problema real que a ti se te pasó. Toma en serio su preocupación y pregúntale por ella.",
            "Antes de anunciar nada, haz una lista de quiénes se ven afectados y qué puede perder y ganar cada grupo. Esa lista te dice qué explicar, a quién involucrar y qué apoyo dar."
          ],
          steps: ["Escribe el cambio en una frase.", "Haz una lista de todos los grupos a los que afecta.", "Para cada grupo, escribe qué puede perder y qué puede ganar.", "Marca las preocupaciones que necesitas responder."],
          words: [["Resistencia", "oponerse a un cambio, de forma abierta o callada."], ["Parte interesada", "cualquier persona afectada por un cambio o que puede influir en que funcione."]],
          slides: [
            { title: "Cambiar significa perder algo", bullets: ["Hasta un buen cambio quita algo conocido", "La gente se preocupa antes de ver los beneficios"] },
            { title: "Razones comunes por las que la gente se resiste", bullets: ["No ve por qué", "Teme no hacerlo bien de la nueva forma", "Puede perder tiempo, dinero o posición", "No le preguntaron, o cambios anteriores fallaron"] },
            { title: "La resistencia es información", bullets: ["Pueden ver un problema real que se te pasó", "Pregunta, no discutas"] },
            { title: "Primero haz el mapa", bullets: ["A quién afecta", "Qué puede perder y ganar cada grupo"] }
          ],
          tryIt: "Elige un cambio real que quieras liderar. Escríbelo en una frase. Luego haz una lista de tres grupos a los que afecta y, para cada uno, una cosa que puede perder y una que puede ganar.",
          youCanNow: "prever por qué la gente puede resistirse a un cambio y hacer un mapa de lo que cada grupo puede perder y ganar."
        },
        {
          title: "Explicar por qué hace falta el cambio",
          minutes: 5,
          goal: "Explicar en pocas frases por qué hace falta un cambio, con palabras que les importen a las personas afectadas.",
          text: [
            "La gente necesita entender el porqué antes de aceptar el qué. Una buena explicación responde tres preguntas: ¿Cuál es el problema hoy? ¿Qué va a mejorar después del cambio? ¿Qué pasa si no hacemos nada?",
            "Usa datos y una historia real. \"Las hojas de inscripción en papel perdieron 30 nombres de voluntarios el mes pasado y dos familias se quedaron sin su entrega de comida\" mueve más a la gente que \"tenemos que modernizarnos\". Habla de lo que le importa a cada grupo: el tiempo, la justicia, la seguridad, los clientes, las personas a las que sirven.",
            "Sé honesto sobre lo que será difícil. Si la nueva forma da más trabajo al principio, dilo y explica cómo vas a ayudar. La gente confía en un líder que reconoce los costos. Un asistente de IA puede ayudarte a pulir tus palabras, pero los datos y la historia deben ser tuyos."
          ],
          steps: ["Describe el problema de hoy, con un dato.", "Describe qué va a mejorar.", "Di qué pasa si nada cambia.", "Agrega una historia real.", "Sé honesto sobre lo que será difícil y cómo vas a ayudar."],
          words: [["Razones para el cambio", "una explicación corta de por qué hace falta un cambio y qué va a mejorar."]],
          slides: [
            { title: "El porqué antes del qué", bullets: ["¿Cuál es el problema hoy?", "¿Qué va a mejorar?", "¿Qué pasa si no hacemos nada?"] },
            { title: "Datos más una historia", bullets: ["Un número real muestra el tamaño del problema", "Una historia real muestra por qué importa"] },
            { title: "Habla de lo que les importa", bullets: ["Tiempo, justicia, seguridad", "Los clientes o las personas a las que sirven"] },
            { title: "Sé honesto", bullets: ["Di qué será difícil", "Di cómo vas a ayudar"] }
          ],
          tryIt: "Escribe tus razones para el cambio en cuatro frases: el problema de hoy con un dato, qué va a mejorar, qué pasa si nada cambia y una frase honesta sobre lo que será difícil. Léelo en voz alta. ¿Les importaría a las personas afectadas?",
          youCanNow: "escribir una explicación corta y honesta del cambio que responda el porqué, no solo el qué."
        },
        {
          title: "Involucrar a las personas afectadas",
          minutes: 5,
          goal: "Planear cómo involucrar a las personas a las que afecta un cambio antes de que las decisiones sean definitivas.",
          text: [
            "La gente apoya lo que ayuda a crear. Involúcrala temprano, mientras todavía se puede cambiar el plan. Preguntar cuando ya todo está decidido se siente falso, y la gente lo nota.",
            "Maneras de involucrar a la gente: pide sus ideas en una reunión corta o una encuesta, prueba el cambio primero con un grupo pequeño, invita a algunos compañeros respetados a ayudar a liderarlo y deja que la gente elija cómo se hacen algunas partes.",
            "Deja claro qué está abierto y qué no. \"Vamos a pasar al nuevo sistema para marzo; ustedes pueden ayudar a decidir cómo nos capacitamos y en qué orden cambian los equipos.\" Después muestra qué hiciste con sus aportes, incluso cuando no pudiste usarlos."
          ],
          steps: ["Decide qué está fijo y qué está abierto.", "Pide ideas temprano, en una reunión o una encuesta corta.", "Haz una prueba con un grupo piloto pequeño.", "Invita a compañeros respetados a ayudar a liderar.", "Cuenta qué hiciste con los aportes."],
          words: [["Piloto", "una prueba pequeña de un cambio con pocas personas antes de que todos cambien."], ["Promotor del cambio", "un compañero respetado que ayuda a liderar y explicar el cambio."]],
          slides: [
            { title: "La gente apoya lo que ayuda a crear", bullets: ["Involúcrala temprano", "Preguntar cuando ya está decidido se siente falso"] },
            { title: "Maneras de involucrar a la gente", bullets: ["Pide ideas", "Haz un piloto pequeño", "Invita a promotores del cambio", "Deja que elijan parte del cómo"] },
            { title: "Deja claro qué está abierto", bullets: ["\"La fecha está fija; ustedes ayudan a decidir cómo nos capacitamos\"", "Cuenta qué hiciste con sus aportes"] }
          ],
          tryIt: "Para tu cambio, escribe qué está fijo y qué está abierto. Luego nombra dos maneras en que vas a involucrar a la gente y dos personas a las que podrías pedir que sean promotores del cambio.",
          youCanNow: "involucrar de forma honesta a las personas a las que afecta un cambio y cerrar el círculo sobre sus aportes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Entender el cambio y llevar a la gente contigo",
        questions: [
          { q: "¿Por qué la gente muchas veces se resiste incluso a un buen cambio?", options: ["Porque es floja", "Porque cambiar significa perder algo conocido", "Porque todo cambio es malo", "Porque los líderes siempre se equivocan"], answer: 1, why: "El cambio trae pérdida e incertidumbre aunque ayude." },
          { q: "Un empleado se opone con fuerza a tu plan. ¿Cuál es la mejor primera respuesta?", options: ["Preguntarle qué le preocupa, porque puede ver un problema real", "Decirle que deje de quejarse", "Sacarlo del equipo", "Ignorarlo"], answer: 0, why: "La resistencia es información; pregunta antes de discutir." },
          { q: "¿Qué tres preguntas responde una buena explicación del cambio?", options: ["Quién, dónde, cuánto", "Quién tiene la culpa, cuándo, por qué no", "Cuánto me va a costar, quién lo decidió, puedo saltármelo", "Cuál es el problema, qué va a mejorar, qué pasa si no hacemos nada"], answer: 3, why: "Estas muestran por qué el cambio importa." },
          { q: "¿Cuándo debes involucrar a la gente en un cambio?", options: ["Cuando ya todo está decidido", "Nunca", "Temprano, mientras todavía se puede cambiar el plan", "Solo si se quejan"], answer: 2, why: "Los aportes tempranos son aportes reales y generan apoyo." },
          { q: "¿Qué es un piloto?", options: ["Una prueba pequeña del cambio, primero con pocas personas", "El jefe del líder", "Una fecha límite final", "Un tipo de video de capacitación"], answer: 0, why: "Los pilotos te dejan aprender y corregir problemas antes de que todos cambien." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear, comunicar y hacer que perdure",
      lessons: [
        {
          title: "Escribir un plan de cambio sencillo",
          minutes: 6,
          goal: "Escribir un plan de cambio de una página que responda qué, por qué, quién, cuándo y cómo lo sabrás.",
          text: [
            "Un plan de cambio no tiene que ser largo. Una página que responda cinco preguntas basta para la mayoría de los cambios: ¿Qué cambia? ¿Por qué? ¿A quién afecta y quién hace qué? ¿Cuándo ocurre cada paso? ¿Cómo sabrás que está funcionando?",
            "\"Cómo lo sabrás\" es la parte que la gente se salta. Elige dos o tres señales que de verdad puedas revisar, como \"el 95% de los pedidos registrados en el nuevo sistema para la semana 4\" o \"ninguna entrega perdida durante un mes\". Pon una fecha para revisarlas.",
            "Nombra un responsable para cada paso, planea la capacitación y el apoyo antes del cambio y di qué harás si algo sale mal, como mantener la forma anterior disponible por un tiempo corto."
          ],
          steps: ["Qué: el cambio en una frase.", "Por qué: tus razones en dos o tres frases.", "Quién: los grupos afectados y un responsable para cada paso.", "Cuándo: las fechas clave, incluida la capacitación antes del cambio.", "Cómo lo sabrás: dos o tres medidas y una fecha para revisarlas.", "Un plan de respaldo si algo sale mal."],
          words: [["Plan de cambio", "un plan escrito y corto que dice qué cambia, por qué, quién, cuándo y cómo se medirá el éxito."], ["Medida", "algo que puedes contar o revisar para ver si un cambio está funcionando."], ["Responsable", "la única persona encargada de que un paso se cumpla."]],
          slides: [
            { title: "Cinco preguntas, una página", bullets: ["¿Qué cambia?", "¿Por qué?", "¿A quién afecta y quién hace qué?", "¿Cuándo? ¿Cómo sabrás que funciona?"] },
            { title: "Cómo lo sabrás", bullets: ["Dos o tres señales que puedas revisar", "Ejemplo: \"el 95% de los pedidos en el nuevo sistema para la semana 4\"", "Pon una fecha para revisar"] },
            { title: "No te olvides", bullets: ["Un responsable para cada paso", "Capacitación antes del cambio", "Un respaldo si algo sale mal"] }
          ],
          tryIt: "Escribe el primer borrador de tu plan de una página con las cinco partes. En \"cómo lo sabrás\", escribe dos medidas y la fecha en que las vas a revisar.",
          youCanNow: "escribir un plan de cambio corto con responsables, fechas y medidas de éxito claras."
        },
        {
          title: "Comunicar el cambio y lograr victorias rápidas",
          minutes: 5,
          goal: "Escribir mensajes claros para distintos grupos y planear una victoria temprana y visible.",
          text: [
            "Dilo más de una vez y de más de una manera. La gente está ocupada y escucha un mensaje varias veces antes de que se le quede. Usa una reunión, una nota escrita corta y conversaciones uno a uno. Avisa primero a los más afectados, en persona si puedes, antes de que se enteren por otra persona.",
            "Adapta el mensaje a cada grupo: qué cambia para ellos, por qué, cuándo, qué ayuda van a recibir y a quién preguntar. Deja espacio para preguntas y, si no sabes una respuesta, dilo y di cuándo la vas a averiguar.",
            "Planea una victoria rápida: un éxito temprano y visible en las primeras semanas, como una fila más corta o un informe más rápido. Compártelo y agradece a las personas que lo hicieron posible. Las victorias rápidas muestran que el cambio funciona y convencen a quienes tenían dudas."
          ],
          steps: ["Avisa primero a los más afectados, en persona si es posible.", "Para cada grupo: qué cambia para ellos, por qué, cuándo, ayuda, a quién preguntar.", "Repite en reuniones, notas y conversaciones uno a uno.", "Responde las preguntas con honestidad; di cuándo lo vas a averiguar.", "Planea y celebra una victoria rápida en el primer mes."],
          words: [["Victoria rápida", "un éxito temprano y visible que muestra que un cambio está funcionando."], ["Público", "el grupo de personas para el que se escribe un mensaje."]],
          slides: [
            { title: "Dilo más de una vez", bullets: ["Reuniones, notas y conversaciones uno a uno", "Primero los más afectados, en persona"] },
            { title: "Cada mensaje incluye", bullets: ["Qué cambia para ellos y por qué", "Cuándo y qué ayuda reciben", "A quién preguntar"] },
            { title: "Respuestas honestas", bullets: ["¿No sabes? Dilo", "Di cuándo lo vas a averiguar"] },
            { title: "Victorias rápidas", bullets: ["Un éxito temprano y visible", "Compártelo y agradece a quienes lo lograron"] }
          ],
          tryIt: "Escribe tres mensajes cortos sobre tu cambio para tres grupos distintos (por ejemplo, el personal de primera línea, los gerentes y los clientes). Luego escribe una victoria rápida que podrías mostrar en el primer mes.",
          youCanNow: "comunicar un cambio con claridad a distintos grupos y planear una victoria temprana que genere apoyo."
        },
        {
          title: "Hacer que el cambio perdure",
          minutes: 5,
          goal: "Planear cómo mantener vivo un cambio después del lanzamiento para que la gente no vuelva a la forma anterior.",
          text: [
            "El día del lanzamiento no es la meta. Muchos cambios se apagan después de unas semanas porque la gente vuelve a sus viejos hábitos, sobre todo cuando está ocupada o estresada.",
            "Para que perdure: revisa tus medidas en las fechas que pusiste, mantén el apoyo fácil de encontrar, quita la forma anterior cuando la nueva funcione e integra el cambio en las rutinas diarias, como las listas de verificación, la capacitación de nuevos empleados y lo que se espera de cada puesto.",
            "Sigue escuchando. Pregunta a la gente qué sigue siendo difícil y arréglalo. Agradece a quienes usan bien la nueva forma y comparte los resultados. Cuando el cambio ya sea parte de \"cómo hacemos las cosas aquí\", repasa lo que aprendiste para el próximo cambio."
          ],
          steps: ["Revisa tus medidas en las fechas planeadas.", "Mantén la ayuda fácil de encontrar.", "Retira la forma anterior cuando la nueva funcione.", "Agrega el cambio a las listas de verificación, la capacitación y lo que se espera de cada puesto.", "Pregunta qué sigue siendo difícil y arréglalo.", "Comparte los resultados y agradece a la gente."],
          words: [["Sostener", "mantener algo funcionando con el tiempo."], ["Rutina", "la forma habitual en que se hace el trabajo cada día o cada semana."]],
          slides: [
            { title: "El lanzamiento no es la meta", bullets: ["Los cambios se apagan cuando la gente está ocupada", "Los viejos hábitos jalan a la gente hacia atrás"] },
            { title: "Intégralo en las rutinas", bullets: ["Listas de verificación y capacitación de nuevos empleados", "Lo que se espera de cada puesto", "Retira la forma anterior cuando la nueva funcione"] },
            { title: "Sigue escuchando", bullets: ["Revisa tus medidas en las fechas", "Pregunta qué sigue siendo difícil y arréglalo", "Comparte los resultados y agradece a la gente"] }
          ],
          tryIt: "Tarea final: termina tu plan de cambio de una página. Agrega tres mensajes para tres grupos, una victoria rápida en el primer mes y dos maneras de mantener vivo el cambio después del lanzamiento.",
          youCanNow: "mantener vivo un cambio después del lanzamiento revisando los resultados, integrándolo en las rutinas y escuchando a las personas que hacen el trabajo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear, comunicar y hacer que perdure",
        questions: [
          { q: "¿Qué pregunta forma parte de un plan de cambio sencillo?", options: ["¿A quién podemos culpar?", "¿Cómo evitamos decírselo a la gente?", "¿Cómo sabremos que está funcionando?", "¿Cuánto tiempo podemos esperar?"], answer: 2, why: "Las medidas muestran si el cambio funciona." },
          { q: "¿Cuál es una buena medida de éxito?", options: ["\"La gente se siente moderna\"", "\"Las cosas van mejor\"", "\"Nos esforzamos mucho\"", "\"Ninguna entrega perdida durante un mes\""], answer: 3, why: "Es algo que de verdad puedes revisar." },
          { q: "¿Quién debe enterarse primero de un cambio?", options: ["Las personas más afectadas, en persona si es posible", "El periódico local", "Solo el equipo directivo, para siempre", "Nadie hasta que empiece"], answer: 0, why: "Merecen enterarse directamente, no por rumores." },
          { q: "Alguien hace una pregunta que todavía no puedes responder. ¿Qué haces?", options: ["Inventar una respuesta", "Decir que no sabes y decir cuándo lo vas a averiguar", "Cambiar de tema", "Terminar la reunión"], answer: 1, why: "La honestidad genera confianza durante un cambio." },
          { q: "Tres meses después del lanzamiento, la gente está volviendo a la forma anterior. ¿Qué ayuda más?", options: ["Dejar de hablar del tema", "Volver al sistema anterior para siempre", "Culpar al equipo", "Integrar la nueva forma en las listas de verificación y la capacitación, y preguntar qué sigue siendo difícil"], answer: 3, why: "Las rutinas y la escucha hacen que el cambio perdure." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Liderar el cambio",
    questions: [
      { q: "¿Cuál es una razón común por la que la gente se resiste al cambio?", options: ["Teme no hacerlo bien de la nueva forma", "Le gusta el conflicto", "Quiere más reuniones", "Nunca le gusta su trabajo"], answer: 0, why: "El miedo a no poder hacer bien la nueva forma es muy común." },
      { q: "Tratar la resistencia como información significa:", options: ["Ignorarla", "Grabar a la gente en secreto", "Preguntar qué le preocupa a la gente, porque puede ver un problema real", "Castigarla"], answer: 2, why: "La oposición puede señalar riesgos reales." },
      { q: "Antes de anunciar un cambio, ayuda hacer una lista de:", options: ["A quién culpar si falla", "A quién afecta y qué puede perder y ganar cada grupo", "Solo los costos", "Nada"], answer: 1, why: "Ese mapa muestra qué explicar y qué apoyo dar." },
      { q: "¿Cuál de estas razones para el cambio es la más fuerte?", options: ["\"Tenemos que modernizarnos.\"", "\"Porque lo digo yo.\"", "\"Todos los demás lo están haciendo.\"", "\"Las inscripciones en papel perdieron 30 nombres de voluntarios el mes pasado y dos familias se quedaron sin entrega.\""], answer: 3, why: "Un dato real y una historia real muestran por qué importa." },
      { q: "¿Por qué ser honesto sobre lo que será difícil?", options: ["Para asustar a la gente", "La gente confía en un líder que reconoce los costos", "Para retrasar el cambio", "Nunca es buena idea"], answer: 1, why: "La honestidad genera confianza y te deja planear el apoyo." },
      { q: "Una explicación del cambio debe decir:", options: ["Qué pasa si no hacemos nada", "Solo la opinión del líder", "Quién va a perder su trabajo", "Nada sobre el problema"], answer: 0, why: "El costo de no hacer nada muestra por qué hace falta el cambio." },
      { q: "\"La gente apoya lo que ayuda a crear\" significa que debes:", options: ["Mantener los planes en secreto", "Decidir todo primero y luego preguntar", "Involucrarla temprano, mientras el plan todavía puede cambiar", "Involucrar solo a los gerentes"], answer: 2, why: "Involucrar temprano genera un apoyo real." },
      { q: "Un promotor del cambio es:", options: ["La persona que más se resiste", "Un compañero respetado que ayuda a liderar y explicar el cambio", "Un trofeo", "Un juez externo"], answer: 1, why: "Los promotores ayudan a que los demás confíen en el cambio." },
      { q: "Pediste ideas y no pudiste usar algunas. ¿Qué debes hacer?", options: ["No decir nada", "Fingir que las usaste", "Dejar de pedir ideas", "Contar qué hiciste con los aportes, y por qué"], answer: 3, why: "Cerrar el círculo mantiene la confianza aunque no se usen las ideas." },
      { q: "Las cinco partes de un plan de cambio sencillo son:", options: ["Qué, por qué, quién, cuándo, cómo lo sabrás", "Quién, culpa, costo, retraso, cancelar", "Planear, esperar que salga bien, aguardar, ver, abandonar", "Presupuesto, logo, eslogan, fiesta, foto"], answer: 0, why: "Estas cinco preguntas cubren la mayoría de los cambios." },
      { q: "Cada paso de un plan de cambio debe tener:", options: ["Diez responsables", "Ningún responsable", "Un responsable que se encarga de él", "Un responsable elegido más adelante"], answer: 2, why: "Un responsable claro asegura que se haga." },
      { q: "¿Cuándo debe hacerse la capacitación?", options: ["Meses después del cambio", "Antes del cambio", "Nunca", "Solo para los gerentes"], answer: 1, why: "La gente necesita las habilidades antes de que le pidan usar la nueva forma." },
      { q: "¿Por qué repetir tu mensaje de distintas maneras?", options: ["Para molestar a la gente", "Porque la gente escucha un mensaje varias veces antes de que se le quede", "Para llenar el tiempo", "Porque el primer mensaje estaba mal"], answer: 1, why: "La gente ocupada necesita escucharlo más de una vez." },
      { q: "El mensaje para cada grupo debe incluir:", options: ["Solo la fecha", "Solo la razón", "Una historia larga", "Qué cambia para ellos, por qué, cuándo, qué ayuda reciben y a quién preguntar"], answer: 3, why: "Esto responde las preguntas que la gente de verdad tiene." },
      { q: "Una victoria rápida es:", options: ["Un éxito temprano y visible que muestra que el cambio funciona", "Terminar el cambio en un día", "Ganar una discusión", "Saltarse el plan"], answer: 0, why: "Las victorias rápidas generan confianza y apoyo." },
      { q: "Después de una victoria rápida, debes:", options: ["No decir nada", "Quedarte con todo el mérito", "Compartirla y agradecer a las personas que la hicieron posible", "Detener el cambio"], answer: 2, why: "Compartir y agradecer extiende el apoyo." },
      { q: "¿Por qué el día del lanzamiento \"no es la meta\"?", options: ["Porque los cambios muchas veces se apagan cuando la gente vuelve a sus viejos hábitos", "Porque siempre hay una fiesta después", "Porque los planes nunca empiezan", "Porque el día del lanzamiento es opcional"], answer: 0, why: "Sostener el cambio requiere trabajo continuo." },
      { q: "¿Qué ayuda a que un cambio perdure?", options: ["Mantener también la forma anterior para siempre", "Integrarlo en las listas de verificación y la capacitación de nuevos empleados", "No revisar nunca los resultados", "Cambiarlo otra vez la próxima semana"], answer: 1, why: "Las rutinas hacen que la nueva forma sea lo normal." },
      { q: "Pusiste una medida para revisar en la semana 4. En la semana 4 debes:", options: ["Saltártela", "Cambiar la medida", "Esperar hasta el próximo año", "Revisarla y actuar según lo que encuentres"], answer: 3, why: "Las medidas solo ayudan si las revisas a tiempo." },
      { q: "Cuando el cambio ya es parte de \"cómo hacemos las cosas aquí\", un buen paso final es:", options: ["Olvidarlo", "Repasar lo que aprendiste para el próximo cambio", "Deshacerlo", "Culpar a quienes se resistieron"], answer: 1, why: "Las lecciones aprendidas hacen más fácil el próximo cambio." }
    ]
  }
};

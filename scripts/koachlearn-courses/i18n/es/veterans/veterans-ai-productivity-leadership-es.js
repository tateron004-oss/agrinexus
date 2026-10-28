"use strict";

// Koach Learn course (Spanish translation of veterans-ai-productivity-leadership). Shape and translation rules: scripts/koachlearn-courses/README.md.
// BLUF and SBI are kept as the English acronyms, with the Spanish meaning given.

module.exports = {
  id: "veterans-ai-productivity-leadership-es",
  lang: "es",
  translationOf: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "IA para la productividad y el liderazgo",
  skills: "Planear la semana de un equipo con IA, Escribir correos BLUF, Resumir reuniones en tareas asignadas, Dar retroalimentación clara, Delegar con una lista de verificación, Usar la IA de forma responsable con la información del equipo",
  outcome: "usar un asistente de IA para planear la semana de un equipo pequeño, escribir un correo de actualización claro con lo principal primero (BLUF) y convertir las notas de una reunión en tareas asignadas con responsables y fechas, dejando fuera de las herramientas de IA públicas la información privada de los miembros del equipo.",
  about: [
    "Este curso es para veteranos que lideraron en uniforme, como suboficiales, oficiales o jefes de equipo, y que ahora lideran o quieren liderar en lugares de trabajo civiles. Tus hábitos de liderazgo se transfieren; las palabras y las herramientas son un poco distintas.",
    "Vas a usar un asistente de IA gratuito para planear la semana de un equipo, escribir actualizaciones cortas y claras, convertir notas desordenadas de reuniones en tareas asignadas, preparar retroalimentación y delegar bien. También vas a aprender las reglas para usar la IA de forma responsable con la información de otras personas.",
    "Cada lección toma unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Para un equipo real o de práctica de tres a seis personas: usa un asistente de IA para armar un plan de una semana con prioridades y responsables, escribe un correo de actualización con lo principal primero (BLUF) para tu gerente y convierte un grupo corto de notas de reunión en una tabla de tareas asignadas con responsable y fecha límite, usando roles en vez de nombres y dejando fuera cualquier información privada.",
  chapters: [
    {
      name: "Capítulo 1: Sacar el trabajo adelante",
      lessons: [
        {
          title: "De la planeación de misiones a un plan semanal del equipo",
          minutes: 5,
          goal: "Usar la IA para convertir una lista de tareas en un plan semanal con prioridades y responsables.",
          text: [
            "En las fuerzas armadas planeabas a partir de la misión: qué hay que hacer, para cuándo, con qué personas y recursos. Los equipos civiles necesitan lo mismo; muchas veces lo llaman plan de trabajo o plan de proyecto.",
            "Dale a un asistente de IA tu lista de tareas, fechas límite y roles del equipo, y pídele que las ordene por prioridad y organice la semana. Ejemplo: \"Estas son 8 tareas de esta semana para mi equipo de almacén de 5 personas, con sus fechas límite. Ordénalas por urgencia e importancia y haz una tabla de lunes a viernes con un rol responsable para cada una.\"",
            "Usa roles, no nombres completos (\"Jefe de turno A\", \"Operador de montacargas 2\"). Luego aplica tu criterio: la IA no sabe que una persona está de permiso o que un cliente es el más importante. Tú ajustas y apruebas el plan."
          ],
          steps: ["Haz una lista de las tareas y fechas límite de la semana.", "Haz una lista de los roles del equipo, no de los nombres.", "Pídele a la IA que ordene por urgencia e importancia y haga una tabla semanal.", "Ajusta por lo que la IA no sabe: permisos, habilidades, clientes clave.", "Comparte el plan final con el equipo."],
          words: [["Plan de trabajo", "una lista de tareas con responsables y fechas; la versión civil de un plan de operaciones."], ["Urgente contra importante", "lo urgente necesita acción ya; lo importante es lo que más cuenta para la meta. No siempre son lo mismo."]],
          slides: [
            { title: "La misma habilidad, palabras nuevas", bullets: ["Planeación de misiones = plan de trabajo", "Qué, para cuándo, quién, con qué"] },
            { title: "Deja que la IA ordene y organice", bullets: ["Dale tareas, fechas límite y roles", "Pide un orden de prioridad y una tabla semanal"] },
            { title: "Tú apruebas el plan", bullets: ["Usa roles, no nombres", "Ajusta por permisos, habilidades y clientes clave", "Comparte el plan final"] }
          ],
          tryIt: "Escribe seis tareas que tu equipo (real o de práctica) debe hacer esta semana. Pídele a un asistente de IA que las ordene por urgencia e importancia y arme una tabla de lunes a viernes con un rol responsable para cada una. Cambia una cosa que haya hecho mal.",
          youCanNow: "convertir una lista de tareas en un plan semanal del equipo con prioridades usando la IA, y corregirlo con tu criterio."
        },
        {
          title: "Escribir correos y actualizaciones BLUF",
          minutes: 5,
          goal: "Escribir un correo corto con lo principal primero con ayuda de la IA.",
          text: [
            "BLUF (bottom line up front: lo principal primero) también funciona en las oficinas civiles, aunque la gente no use el término. Pon el punto principal o la decisión que necesitas en la primera oración. Luego da las razones cortas y los siguientes pasos.",
            "Pídele a la IA que reescriba un borrador largo: \"Reescribe esto como un correo corto para mi gerente. Pon lo principal en la primera oración, luego tres puntos y luego el siguiente paso. Tono amable y profesional. Sin términos militares.\"",
            "Revisa el tono. La escritura militar puede sonar brusca para los lectores civiles. Un simple \"Gracias\" o \"Con gusto lo platicamos\" ayuda. Léelo una vez como si fueras quien lo recibe."
          ],
          steps: ["Escribe lo que necesitas decir, aunque esté desordenado.", "Pídele a la IA que ponga lo principal primero, luego puntos y luego el siguiente paso.", "Pídele que quite los términos militares y use un tono amable y profesional.", "Léelo como quien lo recibe y arregla lo que no esté claro."],
          words: [["BLUF", "bottom line up front, lo principal primero: el punto principal o la petición va al inicio."], ["Tono", "cómo suena tu escritura para quien la lee: amable, brusca, formal."]],
          slides: [
            { title: "BLUF funciona en todas partes", bullets: ["Primero el punto principal o la petición", "Luego las razones cortas", "Al final el siguiente paso"] },
            { title: "Pídele a la IA que lo reescriba", bullets: ["\"Lo principal en la primera oración\"", "\"Tres puntos y luego el siguiente paso\"", "\"Amable, profesional, sin términos militares\""] },
            { title: "Revisa el tono", bullets: ["La escritura militar puede sonar brusca", "Agrega \"Gracias\" o \"Con gusto lo platicamos\"", "Léelo como quien lo recibe"] }
          ],
          tryIt: "Escribe una nota desordenada para un gerente sobre un retraso en una tarea. Pídele a un asistente de IA que la reescriba como un correo BLUF con tres puntos y un siguiente paso, en un tono amable y profesional.",
          youCanNow: "escribir un correo corto y claro con lo principal primero que encaje en un lugar de trabajo civil."
        },
        {
          title: "Convertir notas de reunión en tareas asignadas",
          minutes: 5,
          goal: "Usar la IA para convertir notas de reunión en una tabla de tareas asignadas con responsables y fechas límite.",
          text: [
            "Las reuniones hacen perder tiempo cuando nadie sale sabiendo quién hace qué. Un hábito de revisión posterior lo arregla: qué se decidió, quién es responsable de cada acción y para cuándo.",
            "Pega tus notas (con roles en vez de nombres y sin datos privados) y pide: \"Convierte estas notas en: 1) decisiones tomadas, 2) una tabla de tareas asignadas con responsable y fecha límite, 3) preguntas pendientes.\" Si una acción no tiene responsable o fecha, la IA debe señalarlo.",
            "Muchas herramientas de trabajo, como Microsoft Teams con Copilot o Google Meet con Gemini, pueden resumir reuniones si tu empleador lo activó. Sigue las reglas de tu empleador sobre grabaciones e IA, y avísales a las personas cuando una reunión se esté grabando o resumiendo."
          ],
          steps: ["Toma notas cortas durante la reunión.", "Cambia los nombres por roles y quita los datos privados.", "Pídele a la IA decisiones, una tabla de acciones con responsable y fecha límite, y preguntas pendientes.", "Completa los responsables o fechas que falten.", "Envía el resumen al equipo el mismo día."],
          words: [["Tarea asignada", "una tarea que sale de una reunión con un solo responsable y una fecha límite."], ["Revisión posterior a la acción", "una mirada corta hacia atrás: qué pasó, qué funcionó, qué cambiar."]],
          slides: [
            { title: "Toda reunión debe terminar con", bullets: ["Decisiones tomadas", "Tareas asignadas: responsable + fecha límite", "Preguntas pendientes"] },
            { title: "Pídele a la IA que ordene las notas", bullets: ["Pega notas con roles, no nombres", "Pide decisiones, acciones y preguntas", "Que señale lo que no tenga responsable o fecha"] },
            { title: "Sigue las reglas del trabajo", bullets: ["Usa herramientas de IA para reuniones solo si están permitidas", "Avisa cuando grabes o resumas", "Envía el resumen el mismo día"] }
          ],
          tryIt: "Escribe cinco líneas de notas de una reunión de práctica. Pídele a un asistente de IA que las convierta en decisiones, una tabla de tareas asignadas con rol responsable y fecha límite, y preguntas pendientes.",
          youCanNow: "convertir notas de reunión en una tabla clara de tareas asignadas con responsables y fechas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Sacar el trabajo adelante",
        questions: [
          { q: "¿Qué nombre civil se usa a menudo para un plan de misión u operaciones?", options: ["Plan de trabajo o plan de proyecto", "Un currículum", "Un presupuesto", "Un crosswalk"], answer: 0, why: "Los equipos civiles normalmente lo llaman plan de trabajo o plan de proyecto." },
          { q: "¿Por qué usar roles como \"Jefe de turno A\" en vez de nombres en una instrucción a la IA?", options: ["La IA no puede leer nombres", "Para mantener privada la información de los miembros del equipo", "Los nombres alargan las respuestas", "Es más rápido de escribir"], answer: 1, why: "Los roles le dan a la IA lo que necesita sin compartir información de las personas." },
          { q: "El plan de la IA pone una tarea grande en un día en que una persona está de permiso. Tú:", options: ["Mantienes el plan de la IA", "Cancelas la tarea", "Ajustas el plan con tu criterio", "Le pides a la persona que no tome su permiso"], answer: 2, why: "Sabes cosas que la IA no sabe; tú apruebas el plan final." },
          { q: "¿Qué va en la primera oración de un correo BLUF?", options: ["Un saludo largo", "Los antecedentes", "Un chiste", "El punto principal o la petición"], answer: 3, why: "Lo principal primero: el punto principal va al inicio." },
          { q: "¿Qué hace completa a una tarea asignada?", options: ["Un solo responsable y una fecha límite", "Una descripción larga", "Que todos sean responsables", "Que no tenga fecha, para ser flexible"], answer: 0, why: "Una tarea asignada necesita un responsable claro y una fecha límite." }
        ]
      }
    },
    {
      name: "Capítulo 2: Liderar personas con la IA como asistente",
      lessons: [
        {
          title: "Preparar retroalimentación clara y justa",
          minutes: 5,
          goal: "Usar la IA para escribir el borrador de una retroalimentación con situación, comportamiento e impacto, y luego hacerla tuya.",
          text: [
            "La buena retroalimentación es específica y trata del comportamiento, no de la personalidad. Un modelo sencillo es situación, comportamiento, impacto (SBI, por sus siglas en inglés): \"En el cambio de turno del martes (situación), repasaste cada pedido abierto (comportamiento), y el siguiente turno empezó sin retrasos (impacto).\" Sirve para reconocer y para corregir.",
            "La IA te puede ayudar a prepararte: \"Ayúdame a escribir retroalimentación SBI para un miembro del equipo que ha llegado tarde a la reunión de la mañana tres veces este mes. Que sea respetuosa y termine con una pregunta que invite a escuchar su versión.\" Usa un rol, no un nombre.",
            "Dila tú mismo, en persona o por llamada, y escucha. La IA te ayuda a preparar las palabras; la confianza entre tú y tu gente viene de ti."
          ],
          steps: ["Elige una situación específica.", "Describe el comportamiento que viste, no el carácter de la persona.", "Di el impacto en el equipo o en el trabajo.", "Pídele a la IA que te ayude a decirlo con respeto, usando un rol y no un nombre.", "Dila tú mismo y escucha."],
          words: [["SBI", "situación, comportamiento, impacto: una forma sencilla de dar retroalimentación clara."], ["Comportamiento", "lo que alguien hizo o dijo, que puedes ver u oír."]],
          slides: [
            { title: "Retroalimentación SBI", bullets: ["Situación: cuándo y dónde", "Comportamiento: lo que hizo", "Impacto: el efecto en el equipo o el trabajo"] },
            { title: "Deja que la IA te ayude a prepararte", bullets: ["Usa un rol, no un nombre", "Pide palabras respetuosas", "Termina con una pregunta para escuchar su versión"] },
            { title: "Tú la das", bullets: ["En persona o por llamada", "Escucha", "La confianza viene de ti, no de la herramienta"] }
          ],
          tryIt: "Piensa en algo que un compañero hizo bien hace poco. Pídele a un asistente de IA que te ayude a escribir un reconocimiento SBI, usando un rol y no un nombre. Luego reescríbelo con tus propias palabras.",
          youCanNow: "preparar retroalimentación clara y justa de situación, comportamiento e impacto con ayuda de la IA y darla tú mismo."
        },
        {
          title: "Delegar con una lista de verificación clara",
          minutes: 5,
          goal: "Usar la IA para armar una lista de verificación de delegación con la tarea, el estándar, la fecha límite y los puntos de seguimiento.",
          text: [
            "Conoces la intención del comandante: decirle a la gente el propósito y el estado final, no solo los pasos, para que pueda adaptarse. Delegar en el mundo civil funciona igual.",
            "Una buena entrega cubre: la tarea, por qué importa (la intención), cómo se ve terminada (el estándar), la fecha límite, los recursos y la autoridad que tiene la persona, y cuándo vas a darle seguimiento. Pídele a la IA: \"Haz una lista de verificación de una página para entregarle el informe semanal de inventario a un miembro nuevo del equipo. Incluye propósito, estándar, fecha límite, recursos y puntos de seguimiento.\"",
            "Luego entrégala en persona, pídele que te la explique de vuelta y da un paso atrás. Da seguimiento en los puntos acordados en vez de estar encima."
          ],
          steps: ["Nombra la tarea y por qué importa.", "Describe cómo se ve terminada.", "Fija la fecha límite, los recursos y la autoridad.", "Pídele a la IA que lo convierta en una lista de verificación de una página.", "Entrégala, pide que te la expliquen de vuelta y da seguimiento como acordaron."],
          words: [["Delegar", "darle a otra persona una tarea y la autoridad para hacerla."], ["Intención", "el propósito y el estado final de una tarea, para que la gente se adapte cuando las cosas cambian."]],
          slides: [
            { title: "La intención del comandante, estilo civil", bullets: ["Propósito y estado final", "No solo los pasos", "Para que la gente se adapte"] },
            { title: "Una buena entrega cubre", bullets: ["La tarea y por qué importa", "Estándar y fecha límite", "Recursos, autoridad y seguimiento"] },
            { title: "Luego da un paso atrás", bullets: ["Pide que te la expliquen de vuelta", "Da seguimiento en los puntos acordados", "No estés encima"] }
          ],
          tryIt: "Elige una tarea que podrías delegar. Pídele a un asistente de IA una lista de verificación de delegación de una página con propósito, estándar, fecha límite, recursos y puntos de seguimiento.",
          youCanNow: "delegar una tarea con una lista de verificación clara que da propósito, estándar, fecha límite y seguimiento."
        },
        {
          title: "Usar la IA de forma responsable como líder",
          minutes: 5,
          goal: "Aplicar tres reglas para usar la IA de forma responsable con la información del equipo y de la empresa.",
          text: [
            "Como líder, das el ejemplo. Regla 1: sigue la política de IA de tu empleador. Muchas empresas dicen qué herramientas de IA están aprobadas y qué información puede ir en ellas. Si no hay política, pregunta.",
            "Regla 2: deja fuera de las herramientas de IA públicas la información privada de las personas: problemas de desempeño con nombre, salud, sueldo, direcciones o cualquier cosa dicha en confianza. Deja fuera también los secretos de clientes y de la empresa. Usa roles y descripciones generales.",
            "Regla 3: el resultado es tu responsabilidad. Revisa datos, números y tono antes de que algo salga. Si la IA ayudó a escribir algo importante, lee cada palabra. Decirle a tu equipo cómo usas la IA, y cómo la pueden usar ellos, genera confianza."
          ],
          steps: ["Busca y lee la política de IA de tu empleador, o pregúntale a tu gerente.", "Usa solo herramientas aprobadas para la información del trabajo.", "Deja la información privada y confidencial fuera de la IA pública.", "Revisa todo lo que escriba la IA antes de que salga.", "Dile a tu equipo cómo se puede usar la IA."],
          words: [["Política de IA", "las reglas de un empleador sobre qué herramientas de IA se pueden usar y qué información puede ir en ellas."], ["Confidencial", "información que debe mantenerse privada dentro de un grupo o una empresa."]],
          slides: [
            { title: "Regla 1: sigue la política", bullets: ["Usa herramientas de IA aprobadas", "¿No hay política? Pregunta"] },
            { title: "Regla 2: protege a las personas", bullets: ["Nada de nombres con desempeño, salud o sueldo", "Nada de secretos de clientes o de la empresa", "Usa roles y términos generales"] },
            { title: "Regla 3: el resultado es tuyo", bullets: ["Revisa datos, números y tono", "Lee cada palabra del trabajo importante", "Sé abierto con tu equipo sobre la IA"] }
          ],
          tryIt: "Tarea final: para un equipo de tres a seis personas, usa un asistente de IA para armar un plan de una semana con responsables, escribe un correo de actualización BLUF y convierte unas notas cortas de reunión en una tabla de tareas asignadas. Usa roles en vez de nombres y revisa que nada de eso tenga información privada.",
          youCanNow: "usar la IA como líder de una forma que sigue la política, protege a tu gente y te mantiene responsable."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Liderar personas con la IA como asistente",
        questions: [
          { q: "¿Qué significa SBI?", options: ["Situación, comportamiento, impacto", "Personal, presupuesto, inventario", "Velocidad, equilibrio, intención", "Seguridad, sesión informativa, inspección"], answer: 0, why: "SBI es un modelo sencillo para dar retroalimentación clara." },
          { q: "¿Cuál es retroalimentación basada en el comportamiento?", options: ["\"Eres flojo.\"", "\"Llegaste 15 minutos tarde a tres reuniones de la mañana este mes.\"", "\"Tienes mala actitud.\"", "\"Eres el peor.\""], answer: 1, why: "Describe lo que hizo la persona, que se puede ver." },
          { q: "Al delegar, \"intención\" significa:", options: ["Solo los pasos exactos", "Solo la fecha límite", "El propósito y el estado final, para que la gente se adapte", "Lo que sientes sobre la tarea"], answer: 2, why: "La intención permite que la gente se adapte cuando las cosas cambian." },
          { q: "Tu empresa no tiene política de IA. ¿Qué haces?", options: ["Usar cualquier herramienta con cualquier dato", "Prohibir la IA a todos por tu cuenta", "Pegar datos de clientes en un chatbot público", "Preguntarle a tu gerente antes de usar la IA con información del trabajo"], answer: 3, why: "Cuando no hay política, pregunta antes de poner información del trabajo en la IA." },
          { q: "¿Qué está bien poner en una instrucción a una IA pública?", options: ["\"Un miembro del equipo ha llegado tarde a tres reuniones de la mañana\"", "El problema de salud de un empleado con su nombre", "Números de cuenta de clientes", "Las direcciones de tu equipo"], answer: 0, why: "Una descripción general con roles mantiene privada la información de las personas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la productividad y el liderazgo",
    questions: [
      { q: "Un plan de trabajo civil cubre:", options: ["Solo quién está a cargo", "Qué, para cuándo, quién y con qué", "Solo el presupuesto", "Solo la hora de la reunión"], answer: 1, why: "Como un plan de misión, cubre tareas, fechas, personas y recursos." },
      { q: "Al pedirle a la IA que ordene tareas, ayuda pedir:", options: ["Un orden al azar", "Orden alfabético", "Orden por urgencia e importancia", "La tarea más larga primero"], answer: 2, why: "La urgencia y la importancia dan un orden de prioridad útil." },
      { q: "Urgente e importante son:", options: ["Siempre lo mismo", "Dos palabras para \"fácil\"", "Solo términos militares", "No siempre lo mismo"], answer: 3, why: "Urgente significa ya; importante significa que es lo que más cuenta para la meta." },
      { q: "¿Quién aprueba el plan final del equipo?", options: ["Tú, como líder", "La IA", "El miembro más nuevo del equipo", "Nadie"], answer: 0, why: "Tú aplicas un criterio que la IA no tiene." },
      { q: "BLUF significa:", options: ["Sesión, lección, actualización, seguimiento", "Lo principal primero (bottom line up front)", "Liderazgo básico bajo fuego", "El mejor y último archivo de la unidad"], answer: 1, why: "Pon el punto principal primero." },
      { q: "La escritura militar puede sonar brusca para los civiles. Un buen arreglo es:", options: ["Hacerla más larga", "Agregar más siglas", "Agregar una línea amable como \"Con gusto lo platicamos\"", "Escribir todo en mayúsculas"], answer: 2, why: "Un tono amable y profesional ayuda a los lectores civiles." },
      { q: "Antes de enviar un correo escrito con IA, deberías:", options: ["Enviarlo sin leerlo", "Agregar términos militares", "Hacerlo más largo", "Leerlo como quien lo recibe y arreglar lo que no esté claro"], answer: 3, why: "Tú respondes por lo que envías." },
      { q: "Un resumen de reunión debe incluir:", options: ["Decisiones, tareas asignadas con responsable y fecha, y preguntas pendientes", "Solo quién asistió", "Solo chistes", "Solo la hora de inicio"], answer: 0, why: "Esto le dice a todos quién hace qué y para cuándo." },
      { q: "Antes de pegar notas de reunión en una IA pública, deberías:", options: ["Agregar los teléfonos de todos", "Cambiar los nombres por roles y quitar los datos privados", "Agregar los secretos de la empresa", "No hacer nada"], answer: 1, why: "Primero protege la información de las personas." },
      { q: "Usar una herramienta de IA para resumir reuniones en el trabajo está bien cuando:", options: ["Nadie lo sabe", "Usas una cuenta personal con datos de la empresa", "Tu empleador lo permite y se les avisa a las personas", "Siempre, sin importar las reglas"], answer: 2, why: "Sigue las reglas de tu empleador y sé abierto sobre las grabaciones." },
      { q: "Una tarea asignada sin responsable debe:", options: ["Ignorarse", "Dársele a todos", "Borrarse", "Asignarse a un responsable con fecha límite"], answer: 3, why: "Cuando todos son responsables, muchas veces nadie la hace." },
      { q: "La buena retroalimentación trata de:", options: ["El comportamiento que viste", "La personalidad de la persona", "Rumores", "Tu estado de ánimo"], answer: 0, why: "El comportamiento es específico y justo." },
      { q: "En la retroalimentación SBI, el \"impacto\" es:", options: ["El rango de la persona", "El efecto en el equipo o en el trabajo", "El castigo", "La fecha"], answer: 1, why: "El impacto explica por qué importa el comportamiento." },
      { q: "¿Quién debe dar la retroalimentación que la IA ayudó a preparar?", options: ["La IA por correo", "Un compañero de trabajo", "Tú, en persona o por llamada", "Nadie"], answer: 2, why: "La confianza viene de ti, no de la herramienta." },
      { q: "Al delegar, después de entregar la tarea deberías:", options: ["Hacerla tú de todos modos", "Estar encima de cada paso", "No volver a revisar nunca", "Dar seguimiento en los puntos acordados"], answer: 3, why: "El seguimiento acordado equilibra la confianza y la responsabilidad." },
      { q: "Una buena entrega al delegar incluye:", options: ["Propósito, estándar, fecha límite, recursos y seguimiento", "Solo la fecha límite", "Solo \"hazlo\"", "Tu contraseña"], answer: 0, why: "Esas partes permiten que la persona tenga éxito." },
      { q: "Pedirle a la persona que te explique la tarea de vuelta te ayuda a:", options: ["Perder tiempo", "Confirmar que entendió", "Probar su memoria por diversión", "Evitar dar la intención"], answer: 1, why: "Detecta los malentendidos a tiempo." },
      { q: "La regla 1 para usar la IA como líder es:", options: ["Usar cualquier herramienta gratuita para todo", "Nunca usar la IA", "Seguir la política de IA de tu empleador", "Dejar que el equipo decida solo"], answer: 2, why: "La política dice qué herramientas e información están permitidas." },
      { q: "¿Qué nunca debe ir en una herramienta de IA pública?", options: ["\"Planea mi semana\"", "\"Reescribe este correo\"", "Una lista de nombres de tareas", "El sueldo y la información de salud de un empleado con su nombre"], answer: 3, why: "Esa es información privada y confidencial." },
      { q: "Si la IA ayudó a escribir un informe importante, ¿quién es responsable de él?", options: ["Tú", "La empresa de IA", "Quien lo lee", "Nadie"], answer: 0, why: "El resultado es tuyo, así que revisa cada palabra." }
    ]
  }
};

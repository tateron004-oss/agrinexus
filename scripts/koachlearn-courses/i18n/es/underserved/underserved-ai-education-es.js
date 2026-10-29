"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-education.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-education-es",
  lang: "es",
  translationOf: "underserved-ai-education",
  category: "Undeserved Community",
  name: "IA para la educación y el aprendizaje",
  skills: "Usar la IA como un tutor paciente, Hacer preguntas de práctica, Encontrar sitios gratuitos para aprender, Armar un plan de estudio, Ayudar a un niño a aprender sin hacerle el trabajo",
  outcome: "usar un asistente de IA gratuito y un sitio web gratuito de aprendizaje para aprender algo nuevo: lograr que te expliquen una idea difícil, practicar con preguntas hechas por la IA y seguir un plan de estudio sencillo de dos semanas que hiciste tú.",
  about: [
    "Nunca es tarde para aprender. Tal vez quieres terminar un diploma, mejorar tu inglés, aprender una habilidad para el trabajo o seguirle el paso a la tarea de tu hijo. Las herramientas de IA gratuitas pueden ser un tutor paciente que nunca se cansa de tus preguntas.",
    "Vas a aprender a pedirle a la IA que te explique las cosas a tu nivel, a hacer preguntas de práctica, a encontrar sitios web gratuitos para aprender, a armar un plan de estudio que encaje en una vida ocupada y a ayudar a un niño a aprender sin que la IA le haga la tarea.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Elige una cosa que quieras aprender. Haz con un asistente de IA un plan de estudio de dos semanas que use un sitio web gratuito de aprendizaje (como Khan Academy o LearnFree) 20 minutos al día. Luego pide a la IA cinco preguntas de práctica sobre el primer tema, respóndelas tú y revisa tus respuestas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos de comunidades desatendidas que quieren aprender algo nuevo: personas que terminan un diploma, mejoran su inglés, aprenden una habilidad para el trabajo o ayudan a sus hijos con la tarea. Muchos trabajan, crían hijos o cuidan a su familia.",
    startingPoint: "Saben usar un poco el teléfono e internet. Algunos tuvieron malas experiencias en la escuela o la dejaron temprano, y pocos han usado un asistente de IA o un sitio web gratuito para estudiar.",
    gap: "Las herramientas de IA gratuitas y los sitios web para aprender pueden ser como un tutor paciente, pero no saben cómo pedir explicaciones a su nivel, practicar en lugar de solo volver a leer, ni hacer un plan de estudio que quepa en una vida ocupada. Sin esto, muchos abandonan metas de aprendizaje que ayudarían a su trabajo y a su familia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de quinto o sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca",
      "Tiempo: estudio corto cada día, muchas veces 20 minutos o menos",
      "La IA se puede equivocar en matemáticas y en datos; hay que revisar los pasos y las fuentes confiables",
      "Las escuelas tienen sus propias reglas sobre la IA, y muchas herramientas de IA tienen límites de edad para los niños"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una idea que te parece difícil", action: "pedirle a un asistente de IA que te la explique a tu nivel con un ejemplo de todos los días, y decir qué parte todavía no entiendes", standard: "hasta que puedas explicarla con tus propias palabras" },
    { id: "O2", condition: "Después de aprender una idea", action: "pedirle a un asistente de IA preguntas de práctica una por una, contestarlas tú mismo y revisar las respuestas", standard: "respondiendo antes de mirar y revisando cualquier respuesta que parezca equivocada" },
    { id: "O3", condition: "Con una habilidad que quieres aprender", action: "encontrar un curso gratuito en un sitio web para aprender o en tu biblioteca", standard: "abriendo su primera lección" },
    { id: "O4", condition: "Con el tiempo real que tienes cada semana", action: "crear un plan de estudio de dos semanas con un asistente de IA, usando un sitio gratuito para aprender", standard: "con un tema pequeño por día, días de descanso y el plan puesto donde lo vas a ver" },
    { id: "O5", condition: "Con el tema de la tarea de un niño", action: "usar un asistente de IA para que te explique la idea a ti y así puedas enseñarla, sin darle las respuestas al niño", standard: "siguiendo las reglas de la escuela sobre la IA" },
    { id: "O6", condition: "Al final de una semana de estudio", action: "revisar tu avance con una prueba corta y ajustar tu plan", standard: "repasando cada tema en el que fallaste" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA como tu tutor",
      lessons: [
        {
          objectives: ["O1"],
          title: "Que te expliquen una idea difícil a tu nivel",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que te explique una idea difícil de una forma que entiendas.",
          text: [
            "Un tutor es alguien que explica las cosas uno a uno. Un asistente de IA gratuito puede funcionar como un tutor paciente. Puedes hacer la misma pregunta muchas veces y no te juzga.",
            "Dile tu nivel: \"Explícame las fracciones como si apenas estuviera empezando\" o \"Explícalo con un ejemplo de cocina.\" Los ejemplos de tu propia vida hacen que las ideas se queden.",
            "Si sigue siendo confuso, di qué parte no entiendes: \"Entiendo la primera parte, pero no por qué volteamos la segunda fracción.\""
          ],
          steps: ["Di qué idea quieres aprender.", "Dile a la IA tu nivel y pide un ejemplo de todos los días.", "Lee la respuesta despacio.", "Di exactamente qué parte sigue siendo confusa y vuelve a preguntar."],
          words: [["Tutor", "un maestro que ayuda a una persona a la vez."], ["Ejemplo", "un caso de la vida real que muestra cómo funciona una idea."]],
          slides: [
            { title: "La IA puede ser un tutor paciente", bullets: ["Pregunta las veces que necesites", "No te juzga"] },
            { title: "Dile tu nivel", bullets: ["\"Explícalo como si apenas estuviera empezando\"", "\"Usa un ejemplo de cocina o del trabajo\""] },
            { title: "¿Sigues confundido?", bullets: ["Di qué parte no entiendes", "Pide otro ejemplo"] }
          ],
          tryIt: "Elige una idea que siempre te costó (porcentajes, una regla de gramática, cómo funcionan los intereses). Pide a un asistente de IA que te la explique a nivel principiante con un ejemplo de tu vida diaria.",
          youCanNow: "lograr que te expliquen una idea difícil a tu nivel y hacer preguntas hasta que tenga sentido.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un tutor?", options: ["Alguien que te explica las cosas uno a uno", "Un examen que haces en la escuela", "Un tipo de calculadora", "Un edificio de la escuela"], answer: 0, why: "Un tutor ayuda a una persona a aprender, y un asistente de IA puede ser como uno muy paciente." },
            { objective: "O1", q: "Entiendes la primera parte de una explicación, pero no la segunda. ¿Qué preguntas?", options: ["\"Explícame todo otra vez.\"", "\"Entiendo la primera parte, pero no por qué se voltea la segunda fracción.\"", "\"No importa.\"", "\"Dame la respuesta.\""], answer: 1, why: "Decir justo qué parte no entiendes ayuda a la IA a explicar esa parte." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Practicar con preguntas hechas por la IA",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que te haga preguntas y que revise tus respuestas.",
          text: [
            "Leer no es lo mismo que aprender. Recuerdas más cuando practicas: responder preguntas hace que tu cerebro vuelva a sacar la idea.",
            "Pide: \"Dame cinco preguntas de práctica sobre porcentajes, una a la vez. Espera mi respuesta y luego dime si estoy bien y por qué.\"",
            "La IA se puede equivocar en matemáticas y en datos. Si una respuesta se ve mal, pídele que muestre los pasos o revisa con un sitio de aprendizaje confiable o con un maestro."
          ],
          steps: ["Pide pocas preguntas, una a la vez.", "Responde cada una tú antes de buscar nada.", "Pide a la IA que revise tu respuesta y explique.", "Si su respuesta se ve mal, pídele los pasos o revisa otra fuente."],
          words: [["Pregunta de práctica", "una pregunta que respondes para ayudarte a recordar y poner a prueba lo que aprendiste."]],
          slides: [
            { title: "Practicar gana a releer", bullets: ["Responder saca la idea de tu memoria", "Recuerdas más"] },
            { title: "Pide a la IA que te pregunte", bullets: ["\"Dame cinco preguntas, una a la vez\"", "\"Espera mi respuesta y luego explica\""] },
            { title: "La IA también se equivoca", bullets: ["Pídele que muestre los pasos", "Revisa con un sitio de aprendizaje o un maestro"] }
          ],
          tryIt: "Pide a un asistente de IA tres preguntas de práctica sobre la idea de la lección 1, una a la vez. Responde cada una antes de que te diga la respuesta.",
          youCanNow: "usar un asistente de IA para ponerte a prueba y revisar lo que aprendiste.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué pedir las preguntas de práctica una por una?", options: ["La IA solo puede escribir una", "Cuesta menos", "Contestas cada una antes de ver la siguiente", "Hace las preguntas más difíciles"], answer: 2, why: "Una por una te deja contestar cada pregunta tú mismo antes de seguir." },
            { objective: "O2", q: "La IA dice que el 25% de 80 es 25. ¿Qué haces?", options: ["Lo aceptas", "Dejas de practicar", "Borras el chat", "Le pides que muestre los pasos o revisas otra fuente"], answer: 3, why: "La IA se puede equivocar en matemáticas, así que pides los pasos o revisas una fuente confiable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar sitios web gratuitos para aprender",
          minutes: 4,
          goal: "Encontrar un sitio web gratuito con lecciones sobre la habilidad que quieres.",
          text: [
            "La IA es una gran ayuda, pero funciona mejor junto a lecciones de verdad. Los sitios web gratuitos de aprendizaje te dan cursos en orden, con videos y práctica.",
            "Khan Academy es una organización sin fines de lucro con cursos gratis de matemáticas, ciencias, lectura, economía, computación y preparación para exámenes, y tiene versión en español. LearnFree (GCFGlobal en español) tiene lecciones gratis, a tu propio ritmo, sobre computadoras, Microsoft Office, herramientas de Google, búsqueda de empleo, finanzas básicas, lectura y matemáticas.",
            "Tu biblioteca pública también puede ofrecer clases gratis, tutorías o cuentas de aprendizaje en línea. Si estás pensando en la universidad, pregunta en la oficina de ayuda financiera de la escuela por ayuda para pagar, o mira studentaid.gov, el sitio oficial del Departamento de Educación de Estados Unidos."
          ],
          steps: ["Decide qué habilidad quieres aprender.", "Búscala en Khan Academy o LearnFree.", "Elige un curso y mira su primera lección.", "Pregunta en tu biblioteca qué clases o tutorías gratis ofrece."],
          words: [["A tu propio ritmo", "avanzas a tu velocidad, a cualquier hora del día."], ["Sin fines de lucro", "una organización que trabaja por una misión, no para ganar dinero para sus dueños."]],
          sources: [
            { name: "Khan Academy: Acerca de", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (lecciones gratis a tu propio ritmo)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (Departamento de Educación de Estados Unidos)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Usa la IA junto a lecciones reales", bullets: ["Cursos en orden", "Videos y práctica"] },
            { title: "Sitios gratuitos para aprender", bullets: ["Khan Academy: matemáticas, ciencias, lectura, exámenes", "LearnFree: computadoras, empleo, dinero, lectura, matemáticas"] },
            { title: "Más ayuda gratis", bullets: ["Clases y tutorías en la biblioteca", "Dinero para la universidad: ayuda financiera de la escuela o studentaid.gov"] }
          ],
          tryIt: "Entra a Khan Academy o LearnFree y busca un curso sobre una habilidad que quieras. Abre la primera lección y anota su nombre.",
          youCanNow: "encontrar un sitio web gratuito con un curso sobre la habilidad que quieres.",
          quickCheck: [
            { objective: "O3", q: "¿Qué ofrece LearnFree?", options: ["Lecciones gratuitas de computación, búsqueda de empleo, dinero, lectura y matemáticas", "Títulos universitarios de pago", "Teléfonos gratis", "Solo colocación en empleos"], answer: 0, why: "LearnFree tiene lecciones gratuitas, a tu ritmo, sobre habilidades de todos los días." },
            { objective: "O3", q: "Quieres ayuda gratis en persona para leer mejor. ¿Dónde preguntas?", options: ["En una agencia de autos", "En tu biblioteca pública", "En un anuncio de redes sociales", "En un banco"], answer: 1, why: "Las bibliotecas públicas muchas veces ofrecen clases, tutorías o cuentas de aprendizaje en línea gratis." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como tu tutor",
        questions: [
          { objective: "O1", q: "La explicación de la IA es demasiado difícil. ¿Qué debes pedir?", options: ["Nada; me rindo", "\"Explícalo como si apenas estuviera empezando, con un ejemplo de cocina.\"", "\"Usa palabras más difíciles.\"", "\"Hazlo más largo.\""], answer: 1, why: "Decirle tu nivel y pedir un ejemplo de todos los días lo aclara." },
          { objective: "O2", q: "¿Por qué practicar con preguntas ayuda más que releer?", options: ["Saltarlo es más rápido", "Se ve más bonito", "Responder hace que tu cerebro vuelva a sacar la idea, así que recuerdas más", "Cuesta menos"], answer: 2, why: "La práctica fortalece la memoria." },
          { objective: "O2", q: "La IA marca mal tu respuesta de matemáticas, pero tú crees que está bien. ¿Qué haces?", options: ["Le pides que muestre los pasos o revisas otra fuente", "Confías siempre en la IA", "Dejas de aprender matemáticas", "Borras la aplicación"], answer: 0, why: "La IA se puede equivocar en matemáticas; ver los pasos muestra quién tiene razón." },
          { objective: "O3", q: "¿Cuál es un sitio web gratuito y sin fines de lucro para aprender?", options: ["Un sitio de compras", "Una aplicación de redes sociales", "Una tienda de juegos", "Khan Academy"], answer: 3, why: "Khan Academy es un sitio gratuito y sin fines de lucro." },
          { objective: "O3", q: "¿Qué quiere decir a tu propio ritmo?", options: ["Tienes que terminar en un día", "Avanzas a tu velocidad", "Un maestro pone cada horario", "Pagas por minuto"], answer: 1, why: "Las lecciones a tu propio ritmo se acomodan a tu horario." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender de una forma que encaje en tu vida",
      lessons: [
        {
          objectives: ["O4"],
          title: "Armar un plan de estudio para una vida ocupada",
          minutes: 5,
          goal: "Hacer un plan de estudio sencillo de dos semanas con un asistente de IA.",
          text: [
            "Muchos adultos aprenden mientras trabajan, crían a sus hijos y cuidan a la familia. Estudiar poco y seguido funciona mejor que sesiones largas que no puedes mantener.",
            "Pide a la IA un plan que encaje en tu semana real: \"Trabajo en las tardes y tengo 20 minutos cada mañana. Haz un plan de dos semanas para aprender lo básico de Excel con LearnFree. Un tema pequeño al día, con un día de descanso cada semana.\"",
            "Pon el plan donde lo vayas a ver: en el calendario del teléfono, en el refrigerador o en un cuaderno. Marca cada día."
          ],
          steps: ["Elige una habilidad y un sitio gratuito para aprender.", "Dile a la IA cuánto tiempo tienes y cuándo.", "Pide un plan de dos semanas con un tema pequeño al día y días de descanso.", "Ponlo en tu calendario o en el refrigerador y marca cada día."],
          words: [["Plan de estudio", "un horario de lo que vas a aprender y cuándo."]],
          slides: [
            { title: "Poco y seguido gana", bullets: ["20 minutos al día ganan a 3 horas una vez", "Planea alrededor del trabajo y la familia"] },
            { title: "Pide un plan a la IA", bullets: ["Tu habilidad y tu sitio de aprendizaje", "Cuánto tiempo y cuándo", "Un tema pequeño al día, con días de descanso"] },
            { title: "Tenlo a la vista", bullets: ["Calendario del teléfono, refrigerador o cuaderno", "Marca cada día"] }
          ],
          tryIt: "Pide a un asistente de IA que haga un plan de estudio de dos semanas para el curso que encontraste en la lección 3, según el tiempo real que tienes cada día.",
          youCanNow: "hacer un plan de estudio que encaje en tu semana real.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué funcionan los ratos de estudio cortos y constantes para los adultos ocupados?", options: ["Siempre son más fáciles", "No necesitan un plan", "Puedes mantenerlos todos los días", "Reemplazan la práctica"], answer: 2, why: "Los ratos cortos caben en una semana real, así que sigues adelante en lugar de rendirte." },
            { objective: "O4", q: "Solo tienes 15 minutos a la hora del almuerzo. ¿Qué le dices a la IA cuando le pides un plan?", options: ["Nada sobre tu tiempo", "Que puedes estudiar 3 horas al día", "Solo la materia", "Que tienes 15 minutos a la hora del almuerzo cada día"], answer: 3, why: "Decirle a la IA tu tiempo real le permite hacer un plan que puedas seguir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ayudar a un niño a aprender sin hacerle el trabajo",
          minutes: 5,
          goal: "Usar la IA para ayudar a un niño a entender la tarea en lugar de darle las respuestas.",
          text: [
            "La IA te puede ayudar a ayudar a tu hijo, incluso con materias que nunca aprendiste o que ya olvidaste. La clave es usarla para explicar, no para hacer la tarea.",
            "Las escuelas tienen reglas sobre la IA. Muchas no permiten que los estudiantes entreguen trabajos escritos por una IA. Pregúntale al maestro de tu hijo cuáles son las reglas. Revisa también los límites de edad: muchas herramientas de IA son solo para mayores de 13 años y algunas piden permiso de los padres para adolescentes; lee las condiciones de la herramienta.",
            "Buenas instrucciones para padres: \"Explícame cómo sacar el área de un rectángulo para que yo se lo enseñe a mi hijo de 10 años. No des la respuesta de este problema.\" O: \"Dame tres preguntas fáciles para ver si mi hijo entiende.\""
          ],
          steps: ["Lee la tarea con tu hijo.", "Pide a la IA que te explique la idea a ti, no que resuelva el problema.", "Explícasela a tu hijo con tus propias palabras.", "Deja que tu hijo haga el trabajo; usa preguntas hechas por la IA para ver si entendió.", "Sigue las reglas de la escuela sobre el uso de la IA."],
          words: [["Condiciones (términos)", "las reglas que aceptas cuando usas una aplicación o un sitio web, incluidos los límites de edad."]],
          slides: [
            { title: "Explicar, no hacer", bullets: ["Usa la IA para entender tú la idea", "Tu hijo hace el trabajo"] },
            { title: "Sigue las reglas", bullets: ["Pregunta al maestro por las reglas de IA", "Muchas herramientas de IA son para mayores de 13", "Lee las condiciones de la herramienta"] },
            { title: "Instrucciones para padres", bullets: ["\"Explícalo para que se lo enseñe a mi hijo de 10 años\"", "\"No des la respuesta\"", "\"Dame tres preguntas fáciles para comprobar\""] }
          ],
          tryIt: "Toma un tema de la tarea (o un tema del grado de tu hijo). Pide a una IA que te lo explique para que tú lo enseñes, sin resolver el problema. Escribe cómo lo explicarías con tus propias palabras.",
          youCanNow: "usar la IA para ayudar a un niño a aprender, siguiendo las reglas de la escuela y dejando que el trabajo sea suyo.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es la regla clave para usar la IA con la tarea de un niño?", options: ["Usarla para explicar, no para hacer el trabajo", "Dejar que escriba toda la respuesta", "Usarla solo en los exámenes", "Nunca mirar la tarea"], answer: 0, why: "La IA debe ayudarte a explicar la idea; tu hijo sigue haciendo el trabajo." },
            { objective: "O5", q: "Tu hijo de 11 años quiere usar una herramienta de IA solo. ¿Qué revisas primero?", options: ["Sus colores", "Su límite de edad y sus condiciones, y las reglas de la escuela sobre la IA", "Qué tan rápido escribe", "Si tiene juegos"], answer: 1, why: "Muchas herramientas de IA son para mayores de 13 años, y las escuelas tienen sus propias reglas." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Seguir el plan y revisar tu avance",
          minutes: 5,
          goal: "Revisar tu propio avance y ajustar tu plan.",
          text: [
            "Después de una semana, mira hacia atrás. ¿Qué días estudiaste? ¿Qué puedes hacer ahora que antes no podías? Los pequeños logros cuentan.",
            "Pide a la IA que te pregunte sobre toda la semana: \"Estudié estos cinco temas. Dame una pregunta de cada uno.\" Las preguntas que fallas te muestran qué repasar.",
            "Si el plan fue demasiado, hazlo más pequeño. Si fue fácil, agrega un poco. Un plan que cambia sigue siendo un plan."
          ],
          steps: ["Cuenta los días que estudiaste.", "Pide a la IA una pregunta de cada tema que viste.", "Marca las que fallaste y repásalas.", "Haz el plan más pequeño o más grande para que encaje en tu vida."],
          words: [["Avance", "qué tanto te has acercado a tu meta."], ["Repasar", "volver a ver algo para recordarlo mejor."]],
          slides: [
            { title: "Mira hacia atrás cada semana", bullets: ["¿Qué días estudiaste?", "¿Qué puedes hacer ahora?", "Los pequeños logros cuentan"] },
            { title: "Ponte a prueba con toda la semana", bullets: ["Una pregunta por tema", "Las preguntas falladas muestran qué repasar"] },
            { title: "Ajusta tu plan", bullets: ["¿Demasiado? Hazlo más pequeño", "¿Muy fácil? Agrega un poco"] }
          ],
          tryIt: "Tarea final: haz tu plan de estudio de dos semanas con un asistente de IA y un sitio gratuito para aprender, luego pide cinco preguntas de práctica sobre el primer tema, respóndelas tú y revisa tus respuestas.",
          youCanNow: "aprender una habilidad nueva con un plan de estudio, lecciones gratis y práctica con IA, y ajustar sobre la marcha.",
          quickCheck: [
            { objective: "O6", q: "¿Qué te muestran las preguntas en las que fallas en una prueba semanal?", options: ["Que debes rendirte", "Que la IA está equivocada", "Qué repasar después", "Que el plan era perfecto"], answer: 2, why: "Las preguntas en las que fallas señalan los temas que debes repasar." },
            { objective: "O6", q: "Esta semana tu plan te pareció demasiado fácil. ¿Qué haces?", options: ["Dejas de estudiar", "Empiezas una materia nueva", "No haces nada", "Le agregas un poco más al plan"], answer: 3, why: "Un plan debe cambiar para quedarte bien; si es fácil, agrégale un poco." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aprender de una forma que encaje en tu vida",
        questions: [
          { objective: "O4", q: "¿Qué plan de estudio tiene más probabilidad de funcionar para una madre o un padre ocupado?", options: ["Tres horas cada noche", "20 minutos al día con días de descanso", "Solo en días festivos", "Ningún plan"], answer: 1, why: "Estudiar poco y seguido encaja en una vida ocupada." },
          { objective: "O4", q: "¿Qué debes decirle a una IA al pedirle un plan de estudio?", options: ["Tu contraseña", "Tus datos de banco", "La habilidad, el sitio y cuánto tiempo tienes", "Nada"], answer: 2, why: "Esos detalles hacen que el plan encaje en tu semana real." },
          { objective: "O5", q: "Tu hijo tiene tarea de matemáticas. ¿Cuál es la mejor forma de usar la IA?", options: ["Que te explique la idea a ti para que tú la enseñes", "Que escriba las respuestas para tu hijo", "Copiar las respuestas en la tarea", "Ignorar la tarea"], answer: 0, why: "Usar la IA para explicar deja el aprendizaje y el trabajo en manos de tu hijo." },
          { objective: "O5", q: "¿Dónde averiguas las reglas de una escuela sobre la IA?", options: ["En una publicación de redes sociales", "Con la misma IA", "Con un desconocido en internet", "Preguntando al maestro o a la escuela"], answer: 3, why: "Cada escuela pone sus propias reglas." },
          { objective: "O6", q: "Tu prueba semanal muestra que fallaste dos temas. ¿Qué sigue?", options: ["Dejarlo", "Repasar esos dos temas", "Saltarlos para siempre", "Empezar otra habilidad"], answer: 1, why: "Las preguntas falladas muestran qué repasar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la educación y el aprendizaje",
    questions: [
      { objective: "O1", q: "Un tutor es:", options: ["Alguien que ayuda a una persona a aprender", "Un tipo de computadora", "Un examen", "Un edificio escolar"], answer: 0, why: "Un tutor enseña uno a uno." },
      { objective: "O1", q: "Para tener una explicación más clara, dile a la IA:", options: ["Tu dirección", "Tu nivel, y pide un ejemplo de todos los días", "Que use palabras más difíciles", "Nada"], answer: 1, why: "Tu nivel y un ejemplo lo aclaran." },
      { objective: "O1", q: "Entiendes parte de una respuesta pero no todo. Di:", options: ["\"Olvídalo.\"", "\"Hazlo más largo.\"", "Qué parte exacta es confusa", "\"Usa más números.\""], answer: 2, why: "Nombrar la parte confusa da una mejor respuesta." },
      { objective: "O1", q: "¿Por qué ayuda un tutor de IA paciente?", options: ["Califica tus trabajos de la escuela", "Te da un diploma", "Cobra por cada pregunta", "Puedes hacer la misma pregunta muchas veces"], answer: 3, why: "No se cansa ni te juzga." },
      { objective: "O2", q: "¿Qué instrucción hace que la IA te ponga a prueba bien?", options: ["\"Dame cinco preguntas, una a la vez, y revisa mis respuestas.\"", "\"Dime todas las respuestas.\"", "\"Examen.\"", "\"Haz mi prueba.\""], answer: 0, why: "Una a la vez y con revisión es práctica de verdad." },
      { objective: "O2", q: "Antes de que la IA te diga la respuesta, debes:", options: ["Buscarla", "Responderla tú", "Saltarla", "Cerrar el chat"], answer: 1, why: "Responder primero es lo que hace que la práctica funcione." },
      { objective: "O2", q: "Si la respuesta de matemáticas de una IA se ve mal:", options: ["Confías en ella igual", "Dejas de aprender", "Le pides que muestre los pasos o revisas otra fuente", "Acusas a tu amigo"], answer: 2, why: "La IA se puede equivocar en matemáticas." },
      { objective: "O3", q: "Khan Academy es:", options: ["Una universidad de paga", "Un juego", "Una tienda", "Un sitio gratuito y sin fines de lucro para aprender"], answer: 3, why: "Ofrece cursos gratis como organización sin fines de lucro." },
      { objective: "O3", q: "LearnFree ofrece lecciones gratis sobre:", options: ["Computadoras, búsqueda de empleo, finanzas básicas, lectura y matemáticas", "Solo cocina", "Solo deportes", "Nada para adultos"], answer: 0, why: "LearnFree cubre muchas habilidades para la vida diaria y el trabajo." },
      { objective: "O3", q: "¿Dónde más puedes encontrar clases o tutorías gratis?", options: ["En un autolavado", "En tu biblioteca pública", "En la entrada de un banco", "En un anuncio emergente"], answer: 1, why: "Las bibliotecas muchas veces ofrecen clases y tutorías gratis." },
      { objective: "O3", q: "Para preguntas sobre cómo pagar la universidad, ¿dónde puedes buscar?", options: ["En un sitio cualquiera que pide una cuota", "En un mensaje de un desconocido", "En la oficina de ayuda financiera de la escuela o en studentaid.gov", "En un videojuego"], answer: 2, why: "Esas son las fuentes oficiales." },
      { objective: "O4", q: "Un buen plan de estudio para la mayoría de los adultos es:", options: ["Cinco horas cada domingo", "Cuando tengas ganas", "Todo en una noche", "Estudiar poco cada día con días de descanso"], answer: 3, why: "Estudiar poco y seguido es más fácil de mantener." },
      { objective: "O4", q: "¿Dónde debes tener tu plan de estudio?", options: ["Donde lo vayas a ver, como un calendario o el refrigerador", "Escondido en un cajón", "Solo en tu cabeza", "En la basura"], answer: 0, why: "Verlo te recuerda estudiar." },
      { objective: "O4", q: "Al pedirle a la IA un plan de estudio, incluye:", options: ["Tu número de Seguro Social", "Cuánto tiempo tienes de verdad y cuándo", "El NIP de tu banco", "Tu dirección completa"], answer: 1, why: "Tu tiempo real da un plan que puedes seguir." },
      { objective: "O5", q: "Muchas herramientas de IA tienen un límite de edad de:", options: ["Mayores de 5", "Mayores de 10", "Mayores de 13, a veces con permiso de los padres", "Nunca hay límite"], answer: 2, why: "Muchas herramientas de IA son para mayores de 13; revisa las condiciones de cada una." },
      { objective: "O5", q: "Al usar la IA con la tarea de tu hijo, la IA debe:", options: ["Escribir la tarea", "Hacer el examen", "Escribirle al maestro por ti", "Explicar la idea, no hacer el trabajo"], answer: 3, why: "Explicar deja el aprendizaje en manos de tu hijo." },
      { objective: "O5", q: "¿Cuál es una buena instrucción para padres?", options: ["\"Explícalo para que se lo enseñe a mi hijo de 10 años. No des la respuesta.\"", "\"Haz la tarea de mi hijo.\"", "\"Escribe el ensayo.\"", "\"Dame todas las respuestas.\""], answer: 0, why: "Pide una explicación, no respuestas." },
      { objective: "O6", q: "Al final de una semana de estudio, debes:", options: ["Borrar tus notas", "Mirar lo que hiciste y ponerte a prueba", "Empezar de cero", "Dejar de estudiar"], answer: 1, why: "Mirar hacia atrás muestra tu avance y qué repasar." },
      { objective: "O6", q: "Tu plan fue demasiado para tu semana. ¿Qué haces?", options: ["Lo dejas", "Te sientes mal", "Lo haces más pequeño", "Lo duplicas"], answer: 2, why: "Un plan debe encajar en tu vida; ajustarlo es normal." },
      { objective: "O2", q: "En la tarea final, después de que la IA da cinco preguntas de práctica, tú:", options: ["Copias sus respuestas", "Te las saltas", "Las compartes en internet", "Las respondes tú y luego revisas tus respuestas"], answer: 3, why: "Responder tú y revisar demuestra el aprendizaje." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      4,
      7,
      11,
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
        name: "Sitio gratuito para aprender",
        objective: "O3",
        notYet: "No hay sitio para aprender, o es uno de pago.",
        meets: "Nombra un sitio gratuito para aprender y el curso o las lecciones que usó.",
        exceeds: "También nombra una clase o tutoría gratuita en la biblioteca."
      },
      {
        name: "Plan de dos semanas",
        objective: "O4",
        notYet: "No hay plan, o el plan no va con el tiempo real de la persona.",
        meets: "Dos semanas, unos 20 minutos al día, un tema pequeño por día, con días de descanso.",
        exceeds: "Está en un calendario o en el refrigerador, con los días marcados."
      },
      {
        name: "Preguntas de práctica",
        objective: "O2",
        notYet: "Miró primero las respuestas, o no contestó las preguntas.",
        meets: "Cinco preguntas contestadas antes de revisar, y cada una revisada.",
        exceeds: "Le pidió a la IA que mostrara los pasos en cualquier respuesta que parecía equivocada."
      },
      {
        name: "Revisión del avance",
        objective: "O6",
        notYet: "No revisó en qué falló.",
        meets: "Enumera las preguntas en las que falló y qué va a repasar.",
        exceeds: "Dice cómo va a cambiar el plan según los resultados."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que siguen su plan de estudio al menos 10 de 14 días (encuesta de seguimiento)",
      "Personas que se inscriben en un curso gratuito, en una clase de GED o de inglés, o en un programa universitario dentro de 90 días",
      "Padres y madres que dicen ayudar a un niño con la tarea usando la IA para explicar, no para responder"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o de un centro comunitario",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Un sitio web gratuito para aprender, como Khan Academy o LearnFree",
      "Un cuaderno o un calendario para el plan de estudio",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Empieza preguntando a cada persona qué quiere aprender, y usa esa habilidad en cada tarea de práctica.",
      "Muestra cómo pedir una explicación más sencilla; a muchos les da pena volver a preguntar.",
      "Con los padres y madres, insiste en que la IA explica y el niño hace el trabajo, y en que primero van las reglas de la escuela.",
      "Revisa después de una semana quién siguió su plan y ayúdales a hacerlo más chico o más grande.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

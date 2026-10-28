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
  chapters: [
    {
      name: "Capítulo 1: La IA como tu tutor",
      lessons: [
        {
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
          youCanNow: "lograr que te expliquen una idea difícil a tu nivel y hacer preguntas hasta que tenga sentido."
        },
        {
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
          youCanNow: "usar un asistente de IA para ponerte a prueba y revisar lo que aprendiste."
        },
        {
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
          youCanNow: "encontrar un sitio web gratuito con un curso sobre la habilidad que quieres."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como tu tutor",
        questions: [
          { q: "La explicación de la IA es demasiado difícil. ¿Qué debes pedir?", options: ["Nada; me rindo", "\"Explícalo como si apenas estuviera empezando, con un ejemplo de cocina.\"", "\"Usa palabras más difíciles.\"", "\"Hazlo más largo.\""], answer: 1, why: "Decirle tu nivel y pedir un ejemplo de todos los días lo aclara." },
          { q: "¿Por qué practicar con preguntas ayuda más que releer?", options: ["Saltarlo es más rápido", "Se ve más bonito", "Responder hace que tu cerebro vuelva a sacar la idea, así que recuerdas más", "Cuesta menos"], answer: 2, why: "La práctica fortalece la memoria." },
          { q: "La IA marca mal tu respuesta de matemáticas, pero tú crees que está bien. ¿Qué haces?", options: ["Le pides que muestre los pasos o revisas otra fuente", "Confías siempre en la IA", "Dejas de aprender matemáticas", "Borras la aplicación"], answer: 0, why: "La IA se puede equivocar en matemáticas; ver los pasos muestra quién tiene razón." },
          { q: "¿Cuál es un sitio web gratuito y sin fines de lucro para aprender?", options: ["Un sitio de compras", "Una aplicación de redes sociales", "Una tienda de juegos", "Khan Academy"], answer: 3, why: "Khan Academy es un sitio gratuito y sin fines de lucro." },
          { q: "¿Qué quiere decir a tu propio ritmo?", options: ["Tienes que terminar en un día", "Avanzas a tu velocidad", "Un maestro pone cada horario", "Pagas por minuto"], answer: 1, why: "Las lecciones a tu propio ritmo se acomodan a tu horario." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aprender de una forma que encaje en tu vida",
      lessons: [
        {
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
          youCanNow: "hacer un plan de estudio que encaje en tu semana real."
        },
        {
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
          youCanNow: "usar la IA para ayudar a un niño a aprender, siguiendo las reglas de la escuela y dejando que el trabajo sea suyo."
        },
        {
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
          youCanNow: "aprender una habilidad nueva con un plan de estudio, lecciones gratis y práctica con IA, y ajustar sobre la marcha."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aprender de una forma que encaje en tu vida",
        questions: [
          { q: "¿Qué plan de estudio tiene más probabilidad de funcionar para una madre o un padre ocupado?", options: ["Tres horas cada noche", "20 minutos al día con días de descanso", "Solo en días festivos", "Ningún plan"], answer: 1, why: "Estudiar poco y seguido encaja en una vida ocupada." },
          { q: "¿Qué debes decirle a una IA al pedirle un plan de estudio?", options: ["Tu contraseña", "Tus datos de banco", "La habilidad, el sitio y cuánto tiempo tienes", "Nada"], answer: 2, why: "Esos detalles hacen que el plan encaje en tu semana real." },
          { q: "Tu hijo tiene tarea de matemáticas. ¿Cuál es la mejor forma de usar la IA?", options: ["Que te explique la idea a ti para que tú la enseñes", "Que escriba las respuestas para tu hijo", "Copiar las respuestas en la tarea", "Ignorar la tarea"], answer: 0, why: "Usar la IA para explicar deja el aprendizaje y el trabajo en manos de tu hijo." },
          { q: "¿Dónde averiguas las reglas de una escuela sobre la IA?", options: ["En una publicación de redes sociales", "Con la misma IA", "Con un desconocido en internet", "Preguntando al maestro o a la escuela"], answer: 3, why: "Cada escuela pone sus propias reglas." },
          { q: "Tu prueba semanal muestra que fallaste dos temas. ¿Qué sigue?", options: ["Dejarlo", "Repasar esos dos temas", "Saltarlos para siempre", "Empezar otra habilidad"], answer: 1, why: "Las preguntas falladas muestran qué repasar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la educación y el aprendizaje",
    questions: [
      { q: "Un tutor es:", options: ["Alguien que ayuda a una persona a aprender", "Un tipo de computadora", "Un examen", "Un edificio escolar"], answer: 0, why: "Un tutor enseña uno a uno." },
      { q: "Para tener una explicación más clara, dile a la IA:", options: ["Tu dirección", "Tu nivel, y pide un ejemplo de todos los días", "Que use palabras más difíciles", "Nada"], answer: 1, why: "Tu nivel y un ejemplo lo aclaran." },
      { q: "Entiendes parte de una respuesta pero no todo. Di:", options: ["\"Olvídalo.\"", "\"Hazlo más largo.\"", "Qué parte exacta es confusa", "\"Usa más números.\""], answer: 2, why: "Nombrar la parte confusa da una mejor respuesta." },
      { q: "¿Por qué ayuda un tutor de IA paciente?", options: ["Califica tus trabajos de la escuela", "Te da un diploma", "Cobra por cada pregunta", "Puedes hacer la misma pregunta muchas veces"], answer: 3, why: "No se cansa ni te juzga." },
      { q: "¿Qué instrucción hace que la IA te ponga a prueba bien?", options: ["\"Dame cinco preguntas, una a la vez, y revisa mis respuestas.\"", "\"Dime todas las respuestas.\"", "\"Examen.\"", "\"Haz mi prueba.\""], answer: 0, why: "Una a la vez y con revisión es práctica de verdad." },
      { q: "Antes de que la IA te diga la respuesta, debes:", options: ["Buscarla", "Responderla tú", "Saltarla", "Cerrar el chat"], answer: 1, why: "Responder primero es lo que hace que la práctica funcione." },
      { q: "Si la respuesta de matemáticas de una IA se ve mal:", options: ["Confías en ella igual", "Dejas de aprender", "Le pides que muestre los pasos o revisas otra fuente", "Acusas a tu amigo"], answer: 2, why: "La IA se puede equivocar en matemáticas." },
      { q: "Khan Academy es:", options: ["Una universidad de paga", "Un juego", "Una tienda", "Un sitio gratuito y sin fines de lucro para aprender"], answer: 3, why: "Ofrece cursos gratis como organización sin fines de lucro." },
      { q: "LearnFree ofrece lecciones gratis sobre:", options: ["Computadoras, búsqueda de empleo, finanzas básicas, lectura y matemáticas", "Solo cocina", "Solo deportes", "Nada para adultos"], answer: 0, why: "LearnFree cubre muchas habilidades para la vida diaria y el trabajo." },
      { q: "¿Dónde más puedes encontrar clases o tutorías gratis?", options: ["En un autolavado", "En tu biblioteca pública", "En la entrada de un banco", "En un anuncio emergente"], answer: 1, why: "Las bibliotecas muchas veces ofrecen clases y tutorías gratis." },
      { q: "Para preguntas sobre cómo pagar la universidad, ¿dónde puedes buscar?", options: ["En un sitio cualquiera que pide una cuota", "En un mensaje de un desconocido", "En la oficina de ayuda financiera de la escuela o en studentaid.gov", "En un videojuego"], answer: 2, why: "Esas son las fuentes oficiales." },
      { q: "Un buen plan de estudio para la mayoría de los adultos es:", options: ["Cinco horas cada domingo", "Cuando tengas ganas", "Todo en una noche", "Estudiar poco cada día con días de descanso"], answer: 3, why: "Estudiar poco y seguido es más fácil de mantener." },
      { q: "¿Dónde debes tener tu plan de estudio?", options: ["Donde lo vayas a ver, como un calendario o el refrigerador", "Escondido en un cajón", "Solo en tu cabeza", "En la basura"], answer: 0, why: "Verlo te recuerda estudiar." },
      { q: "Al pedirle a la IA un plan de estudio, incluye:", options: ["Tu número de Seguro Social", "Cuánto tiempo tienes de verdad y cuándo", "El NIP de tu banco", "Tu dirección completa"], answer: 1, why: "Tu tiempo real da un plan que puedes seguir." },
      { q: "Muchas herramientas de IA tienen un límite de edad de:", options: ["Mayores de 5", "Mayores de 10", "Mayores de 13, a veces con permiso de los padres", "Nunca hay límite"], answer: 2, why: "Muchas herramientas de IA son para mayores de 13; revisa las condiciones de cada una." },
      { q: "Al usar la IA con la tarea de tu hijo, la IA debe:", options: ["Escribir la tarea", "Hacer el examen", "Escribirle al maestro por ti", "Explicar la idea, no hacer el trabajo"], answer: 3, why: "Explicar deja el aprendizaje en manos de tu hijo." },
      { q: "¿Cuál es una buena instrucción para padres?", options: ["\"Explícalo para que se lo enseñe a mi hijo de 10 años. No des la respuesta.\"", "\"Haz la tarea de mi hijo.\"", "\"Escribe el ensayo.\"", "\"Dame todas las respuestas.\""], answer: 0, why: "Pide una explicación, no respuestas." },
      { q: "Al final de una semana de estudio, debes:", options: ["Borrar tus notas", "Mirar lo que hiciste y ponerte a prueba", "Empezar de cero", "Dejar de estudiar"], answer: 1, why: "Mirar hacia atrás muestra tu avance y qué repasar." },
      { q: "Tu plan fue demasiado para tu semana. ¿Qué haces?", options: ["Lo dejas", "Te sientes mal", "Lo haces más pequeño", "Lo duplicas"], answer: 2, why: "Un plan debe encajar en tu vida; ajustarlo es normal." },
      { q: "En la tarea final, después de que la IA da cinco preguntas de práctica, tú:", options: ["Copias sus respuestas", "Te las saltas", "Las compartes en internet", "Las respondes tú y luego revisas tus respuestas"], answer: 3, why: "Responder tú y revisar demuestra el aprendizaje." }
    ]
  }
};

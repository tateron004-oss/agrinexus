"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-impact-storytelling.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-impact-storytelling-es",
  lang: "es",
  translationOf: "nonprofit-ai-impact-storytelling",
  category: "Non Profits",
  name: "IA para contar historias de impacto social",
  skills: "Conseguir consentimiento informado, Recoger una historia con dignidad, Dar forma a una historia con una estructura sencilla, Agregar números honestos, Usar la IA para escribir y adaptar historias, Revisar que las historias sean ciertas y respetuosas",
  outcome: "conseguir el consentimiento por escrito de una persona que atiende tu programa, dar forma a su historia con una estructura sencilla y un número honesto, usar un asistente de IA para escribir el borrador y adaptarlo para un boletín, una publicación en redes sociales y un informe de subvención, y revisar que sea cierta y digna antes de compartirla.",
  about: [
    "Este curso es para personal, voluntarios y líderes de organizaciones sin fines de lucro y comunidades de fe que cuentan a donantes, financiadores, miembros y al público la diferencia que hace su trabajo.",
    "Las historias mueven a la gente a dar y a ayudar, pero les pertenecen a las personas que aparecen en ellas. Vas a aprender a pedir permiso como se debe, contar una historia con dignidad, respaldarla con números honestos y usar la IA (como ChatGPT, Microsoft Copilot o Google Gemini) para escribirla y adaptarla sin poner en la IA los datos privados de nadie.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos corta después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Toma una historia real de un programa (con consentimiento por escrito) o una historia de práctica totalmente inventada. Escribe los hechos con la estructura Antes, Momento clave, Después y agrega un número honesto del programa. Usa la IA con espacios en blanco para escribir el borrador de una historia de 150 palabras para el boletín, una publicación de 40 palabras para redes sociales y un párrafo de 100 palabras para un informe de subvención. Compara los tres con el formulario de consentimiento y la lista de dignidad, y corrige lo que no pase.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personal, voluntarios y líderes de organizaciones sin fines de lucro y de fe que comparten la diferencia que hace su trabajo con donantes, financiadores, miembros y el público.",
    startingPoint: "Escuchan historias poderosas de las personas que atienden y comparten algunas en boletines o publicaciones. Muchos no tienen un proceso de consentimiento por escrito y no han pensado en la dignidad de las palabras ni en los riesgos de usar la IA con historias reales.",
    gap: "Las historias mueven a donantes y financiadores, pero una historia compartida sin consentimiento, con palabras de lástima o con detalles inventados puede dañar a la persona y la confianza en la organización. Necesitan un proceso seguro, desde el consentimiento hasta la revisión final, usando la IA para preparar y adaptar historias sin exponer a nadie.",
    constraints: [
      "Consentimiento informado por escrito antes de usar cualquier historia, foto o cita; de la madre, el padre o el tutor en el caso de niños",
      "Algunas historias no deben contarse aunque haya consentimiento, como las de sobrevivientes de abuso o de personas con casos de inmigración",
      "Privacidad: nada de nombres completos, direcciones, datos de salud ni notas de casos en herramientas de IA",
      "Las imágenes hechas con IA se marcan como tales y nunca sustituyen a personas atendidas reales",
      "Tiempo: unos 60 minutos en total, en lecciones de 5 minutos"
    ],
    prerequisites: "\"Introducción a la IA para organizaciones sin fines de lucro\", o algo de experiencia usando un asistente de IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Antes de usar la historia, la foto o las palabras de alguien", action: "pedir y guardar un consentimiento informado por escrito, que incluya dónde se va a compartir y cómo quiere que se le nombre", standard: "diciéndole a la persona que puede decir que no o cambiar de opinión sin perder la ayuda" },
    { id: "O2", condition: "Con el borrador de una historia", action: "reescribirla para que la persona sea la protagonista, con palabras que ponen primero a la persona y sin palabras de lástima", standard: "dejando fuera los detalles que podrían identificarla o avergonzarla" },
    { id: "O3", condition: "Con notas para una historia", action: "organizar la historia en Antes, Momento clave y Después y agregar un número honesto del programa", standard: "con el número tomado de tus propios registros revisados" },
    { id: "O4", condition: "Con tus notas para la historia", action: "escribir una instrucción para la IA con espacios en blanco y detalles generales para obtener un borrador", standard: "sin nombre completo, dirección, datos de salud ni notas de casos en la instrucción" },
    { id: "O5", condition: "Con el borrador de una historia", action: "adaptarla en una historia para el boletín, una publicación para redes sociales y un párrafo para un informe de subvención", standard: "usando cada versión solo donde lo permita el formulario de consentimiento" },
    { id: "O6", condition: "Antes de que una historia se publique", action: "revisar la verdad, el consentimiento, la dignidad y los números, y corregir lo que no pase", standard: "con cada detalle igual a tus notas y al formulario de consentimiento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Historias que respetan a las personas",
      lessons: [
        {
          objectives: ["O1"],
          title: "Primero el consentimiento",
          minutes: 5,
          goal: "Pedir y registrar el consentimiento informado antes de usar la historia, la foto o las palabras de alguien.",
          text: [
            "La historia de una persona es suya. Antes de compartirla, pide su consentimiento informado: que entienda qué vas a compartir, dónde (boletín, sitio web, redes sociales, informes de subvenciones), por cuánto tiempo y que puede decir que no o cambiar de opinión sin perder ninguna ayuda.",
            "Consigue el consentimiento por escrito con un formulario sencillo y, para niños, consigue el consentimiento de su madre, padre o tutor. Deja que la persona elija: nombre real, solo nombre de pila o un nombre cambiado; con foto o sin foto. Anota lo que aceptó y guárdalo con la historia.",
            "Algunas historias no deben contarse aunque haya consentimiento si compartirlas podría poner en riesgo a la persona, por ejemplo sobrevivientes de abuso, personas con casos de inmigración o personas en recuperación. Si tienes dudas, pregunta a tu director. Puede que tu organización tenga su propio formulario de consentimiento; úsalo. Pide a un abogado o a tu asociación coordinadora que revise un formulario si lo necesitas."
          ],
          steps: ["Explica qué vas a compartir, dónde y por cuánto tiempo.", "Deja claro que puede decir que no sin perder ninguna ayuda.", "Deja que elija nombre, foto y datos.", "Consigue una firma (de la madre, el padre o el tutor si son niños).", "Guarda el formulario con la historia y respeta cualquier cambio de opinión."],
          words: [["Consentimiento informado", "un sí claro que da alguien que entiende exactamente cómo se va a usar su historia."], ["Tutor", "un adulto legalmente responsable de un niño."]],
          slides: [
            { title: "La historia es de ellos", bullets: ["Pregunta antes de compartir", "Decir que no nunca afecta su ayuda"] },
            { title: "El consentimiento informado cubre", bullets: ["Qué vas a compartir", "Dónde y por cuánto tiempo", "Opciones de nombre y foto", "Derecho a cambiar de opinión"] },
            { title: "Por escrito", bullets: ["Un formulario sencillo firmado", "Madre, padre o tutor si son niños", "Guárdalo con la historia"] },
            { title: "Cuándo no compartir", bullets: ["Si compartir podría ponerlos en riesgo", "Si tienes dudas, pregunta a tu director"] }
          ],
          tryIt: "Escribe una lista de consentimiento de cinco líneas para tu organización que cubra qué, dónde, por cuánto tiempo, opciones de nombre y foto, y el derecho a decir que no. Compárala con cualquier formulario que ya use tu organización.",
          youCanNow: "pedir y registrar el consentimiento informado antes de compartir la historia de alguien.",
          quickCheck: [
            { objective: "O1", q: "¿Qué opciones de nombre se le deben ofrecer a la persona?", options: ["Nombre real, solo el nombre de pila o un nombre cambiado", "Solo su nombre legal completo", "Solo una foto sin nombre", "Lo que prefiera el personal"], answer: 0, why: "Deja que la persona elija cómo se le nombra y si se usa una foto." },
            { objective: "O1", q: "Una sobreviviente de abuso quiere compartir su historia, pero compartirla podría ponerla en riesgo. ¿Qué haces?", options: ["La compartes, porque ella aceptó", "Le preguntas a tu director, porque algunas historias no deben contarse aunque haya consentimiento", "La compartes con su nombre completo", "La publicas solo en redes sociales"], answer: 1, why: "Algunas historias no deben contarse aunque haya consentimiento si compartirlas podría poner en riesgo a la persona." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Contar una historia con dignidad",
          minutes: 5,
          goal: "Reescribir una historia para que la persona sea la protagonista y no una víctima.",
          text: [
            "Dignidad significa mostrar a las personas como personas capaces, con sus propias fortalezas y decisiones, no como víctimas indefensas. La persona es la protagonista de la historia; tu organización es quien ayuda.",
            "Usa palabras que pongan primero a la persona (\"un hombre en situación de calle\", no \"un indigente\"). Evita palabras de lástima como \"pobrecita\", \"sufrido\" o \"destrozado\". No exageres. Usa sus propias palabras entre comillas cuando lo haya aceptado.",
            "Deja fuera los datos que no se necesitan y que podrían identificarla o avergonzarla: direcciones exactas, datos de salud, problemas legales, nombres de las escuelas de sus hijos."
          ],
          steps: ["Haz que la persona sea quien actúa en la historia.", "Usa palabras que pongan primero a la persona.", "Quita las palabras de lástima y las exageraciones.", "Quita los datos que no se necesitan.", "Usa sus propias palabras si lo aceptó."],
          words: [["Dignidad", "mostrar a las personas con respeto, como personas capaces con sus propias fortalezas."], ["Lenguaje que pone primero a la persona", "nombrar a la persona antes que la situación, como \"una mujer en situación de calle\"."]],
          slides: [
            { title: "La persona es la protagonista", bullets: ["Actúa y decide", "Tu organización ayuda"] },
            { title: "Las palabras importan", bullets: ["Primero la persona: \"un hombre en situación de calle\"", "Sin palabras de lástima: pobrecita, sufrido, destrozado", "Sin exagerar"] },
            { title: "Deja fuera", bullets: ["Direcciones exactas", "Datos de salud y legales", "Nombres de las escuelas de sus hijos"] }
          ],
          tryIt: "Reescribe esta frase con dignidad: \"La pobrecita y destrozada María estaba en la calle y sin esperanza hasta que la salvamos.\" Haz que María sea la protagonista y quita las palabras de lástima.",
          youCanNow: "escribir sobre las personas que atiendes con dignidad y respeto.",
          quickCheck: [
            { objective: "O2", q: "En una historia contada con dignidad, ¿qué papel tiene tu organización?", options: ["La protagonista", "La víctima", "La que ayuda", "La que juzga"], answer: 2, why: "La persona es la protagonista; tu organización es la que ayuda." },
            { objective: "O2", q: "Un borrador dice \"la pobre señora [Nombre] estaba sufriendo\". ¿Qué haces?", options: ["Lo dejas; conmueve a los donantes", "Agregas más palabras de lástima", "Lo haces más largo", "Quitas las palabras de lástima y muestras sus fortalezas y sus decisiones"], answer: 3, why: "Evita palabras de lástima como \"pobre\" y \"sufriendo\"; muestra a las personas como capaces." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Una estructura sencilla y un número honesto",
          minutes: 5,
          goal: "Dar forma a una historia como Antes, Momento clave, Después, y agregar un número cierto del programa.",
          text: [
            "Una estructura sencilla hace que una historia sea fácil de seguir. Antes: cómo era la vida y qué quería la persona. Momento clave: lo que hizo, con la ayuda de tu programa. Después: lo que cambió, en términos concretos.",
            "Luego agrega un número honesto para mostrar que la historia es parte de algo más grande: \"María es una de las 84 madres y padres que terminaron nuestro programa de capacitación laboral este año.\" Usa números de tus propios registros, y no redondees hacia arriba ni adivines.",
            "La historia de una persona hace que a la gente le importe; el número muestra el tamaño de tu impacto. Los financiadores quieren las dos cosas."
          ],
          steps: ["Escribe el Antes: la vida y la meta.", "Escribe el Momento clave: su acción con tu ayuda.", "Escribe el Después: el cambio concreto.", "Agrega un número honesto de tus registros.", "Confirma el número con la persona que lleva tus datos."],
          words: [["Impacto", "el cambio real que hace tu trabajo en la vida de las personas."], ["Resultado", "un logro que se puede medir, como \"84 madres y padres terminaron la capacitación\"."]],
          slides: [
            { title: "Antes, Momento clave, Después", bullets: ["Antes: la vida y la meta", "Momento clave: su acción, tu ayuda", "Después: el cambio concreto"] },
            { title: "Agrega un número honesto", bullets: ["De tus propios registros", "Sin redondear hacia arriba ni adivinar"] },
            { title: "Por qué los dos", bullets: ["La historia hace que a la gente le importe", "El número muestra el tamaño del impacto"] }
          ],
          tryIt: "Con una historia con consentimiento o una historia de práctica inventada, escribe tres líneas cortas (Antes, Momento clave, Después) y un número honesto de tu programa.",
          youCanNow: "dar forma a una historia con una estructura clara y respaldarla con un número cierto.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en el Momento clave?", options: ["Lo que hizo la persona, con la ayuda de tu programa", "La dirección de la persona", "Tu presupuesto", "Una lista de donantes"], answer: 0, why: "El Momento clave es lo que hizo la persona, con la ayuda de tu programa." },
            { objective: "O3", q: "Crees que unas 90 personas terminaron el programa, pero tus registros dicen 84. ¿Cuál usas?", options: ["Unas 90, para redondear", "84, de tus registros", "100, para que suene más grande", "Ningún número"], answer: 1, why: "Usa números de tus propios registros; no redondees hacia arriba ni adivines." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Historias que respetan a las personas",
        questions: [
          { objective: "O1", q: "¿Qué debes tener antes de compartir la historia de una persona atendida?", options: ["Una buena foto", "La aprobación de un donante", "Su consentimiento informado", "Un borrador de la IA"], answer: 2, why: "La historia le pertenece a la persona; primero debe estar de acuerdo." },
          { objective: "O1", q: "Una persona atendida dice que no a compartir su historia. ¿Qué pasa con su ayuda?", options: ["Nada cambia; sigue recibiendo ayuda", "Se termina", "Se reduce", "Tiene que pagar"], answer: 0, why: "El consentimiento debe ser libre; decir que no nunca afecta la ayuda." },
          { objective: "O2", q: "¿Cuál es lenguaje que pone primero a la persona?", options: ["\"un indigente\"", "\"los indigentes\"", "\"pobre hombre destrozado\"", "\"un hombre en situación de calle\""], answer: 3, why: "Nombra a la persona antes que la situación." },
          { objective: "O3", q: "En la estructura Antes, Momento clave, Después, ¿qué va en el Después?", options: ["El nombre del donante", "El cambio concreto", "La dirección de la organización", "El presupuesto"], answer: 1, why: "El Después muestra lo que cambió." },
          { objective: "O3", q: "¿Qué número está bien usar?", options: ["Uno adivinado que suena grande", "Un número de tus propios registros, revisado", "Un número redondeado hacia arriba", "Un número que inventó la IA"], answer: 1, why: "Los números honestos salen de tus propios registros revisados." }
        ]
      }
    },
    {
      name: "Capítulo 2: Escribir y compartir historias con IA",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir el borrador de una historia con IA, con seguridad",
          minutes: 5,
          goal: "Usar la IA para convertir tus notas en un borrador sin compartir datos privados.",
          text: [
            "La IA puede convertir en segundos tus notas de Antes, Momento clave, Después en un borrador fluido. Pero nunca pegues en una herramienta de IA el nombre completo, la dirección, los datos de salud o las notas de caso de una persona real. Muchas herramientas de IA pueden guardar lo que escribes.",
            "Usa espacios en blanco y datos generales: \"Escribe una historia de 150 palabras para el boletín. [Nombre], madre sola, quería un trabajo estable. Terminó nuestra capacitación laboral de 10 semanas y ahora trabaja como asistente en un consultorio médico. 84 madres y padres terminaron el programa este año. Cálida, respetuosa, con lenguaje que pone primero a la persona, sin palabras de lástima.\"",
            "Cuando tengas el borrador, pon tú los datos reales, pero solo los que la persona aceptó en el formulario de consentimiento."
          ],
          steps: ["Empieza con tus notas ordenadas.", "Cambia los nombres y los datos privados por espacios en blanco.", "Pide el largo, el tono y lenguaje que pone primero a la persona.", "Pide uno o dos cambios.", "Agrega tú solo los datos reales que se aceptaron."],
          words: [["Espacio en blanco", "un sustituto como [Nombre] que cambias después."], ["Borrador", "una primera versión que vas a revisar y mejorar."]],
          slides: [
            { title: "Nunca pegues en la IA", bullets: ["Nombres completos y direcciones", "Datos de salud o notas de caso", "Datos de niños"] },
            { title: "Una instrucción segura para una historia", bullets: ["Espacios en blanco como [Nombre]", "Tus notas de Antes, Momento clave, Después", "Largo, tono, primero la persona"] },
            { title: "Después del borrador", bullets: ["Agrega solo los datos que aceptó", "Compara con el formulario de consentimiento"] }
          ],
          tryIt: "Convierte tus notas de la Lección 3 en una instrucción segura con espacios en blanco y pide a la IA una historia de 150 palabras para el boletín. Pide un cambio y luego agrega solo los datos aceptados.",
          youCanNow: "escribir con IA el borrador de una historia de impacto protegiendo la privacidad de la persona.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué dejar los nombres reales y las notas de casos fuera de las herramientas de IA?", options: ["La IA no puede leer nombres", "Hace los borradores más largos", "Muchas herramientas de IA pueden guardar lo que escribes", "La IA solo escribe en mayúsculas"], answer: 2, why: "Muchas herramientas de IA pueden guardar lo que escribes." },
            { objective: "O4", q: "La persona aceptó compartir su nombre de pila, pero no su trabajo. ¿Qué agregas al borrador de la IA?", options: ["Su nombre completo y su trabajo", "Su dirección", "Nada", "Solo su nombre de pila"], answer: 3, why: "Agrega solo los datos reales que la persona aceptó en el formulario de consentimiento." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adaptar una historia para distintos públicos",
          minutes: 5,
          goal: "Convertir una historia en una pieza para el boletín, una publicación en redes y un párrafo de informe de subvención.",
          text: [
            "Cada lector necesita una versión distinta. Los donantes en un boletín quieren calidez y una forma de ayudar. Las redes sociales necesitan pocas palabras y una acción clara. Un informe de subvención necesita hechos, resultados y cómo ayudó el dinero del financiador.",
            "Pide a la IA que adapte el borrador: \"Convierte esta historia en una publicación de 40 palabras para redes sociales con un llamado a la acción, y en un párrafo de 100 palabras para un informe de subvención que diga el resultado y el número.\" Usa la historia solo en los lugares que la persona aceptó.",
            "Las imágenes hechas con IA nunca deben hacerse pasar por personas reales que atiendes. Si usas una imagen hecha con IA, indícalo y no la uses en lugar de una persona atendida real."
          ],
          steps: ["Revisa en el formulario de consentimiento dónde puedes compartir.", "Pide a la IA una versión corta para redes con una acción.", "Pide a la IA una versión para el informe de subvención con resultados y el número.", "Compara las versiones para ver que sean ciertas.", "Indica cualquier imagen hecha con IA."],
          words: [["Público", "las personas que van a leer o ver lo que compartes."], ["Informe de subvención", "un informe a un financiador que muestra lo que logró su dinero."]],
          slides: [
            { title: "La misma historia, tres versiones", bullets: ["Boletín: cálido, una forma de ayudar", "Redes: corto, una acción", "Informe de subvención: hechos y resultados"] },
            { title: "Solo donde aceptaron", bullets: ["Revisa primero el formulario de consentimiento", "Que acepte el sitio web no significa que acepte redes"] },
            { title: "Imágenes de IA", bullets: ["Nunca fingir que muestran a personas atendidas reales", "Indica que la imagen se hizo con IA"] }
          ],
          tryIt: "Pide a la IA que adapte tu historia del boletín a una publicación de 40 palabras para redes sociales y un párrafo de 100 palabras para un informe de subvención. Revisa que cada lugar esté permitido en el formulario de consentimiento.",
          youCanNow: "adaptar una historia para donantes, redes sociales y financiadores.",
          quickCheck: [
            { objective: "O5", q: "¿Qué quieren los donantes que leen un boletín?", options: ["Calidez y una forma de ayudar", "Una tabla del presupuesto", "Lenguaje legal", "Solo números"], answer: 0, why: "Los donantes que leen el boletín quieren calidez y una forma de ayudar." },
            { objective: "O5", q: "No tienes una foto de la persona real, así que la IA hace la imagen de una familia sonriente. ¿Cómo la usas?", options: ["Dices que es la familia que atendiste", "La marcas como hecha con IA y no la presentas como una persona atendida real", "La usas sin ninguna marca", "Pones el nombre de la persona debajo"], answer: 1, why: "Las imágenes hechas con IA deben marcarse y nunca sustituir a una persona atendida real." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Revisar una historia antes de que salga",
          minutes: 5,
          goal: "Usar una lista corta para encontrar errores, datos inventados y problemas de dignidad.",
          text: [
            "La IA a veces agrega datos que no son ciertos: un hijo de más, un puesto que la persona nunca tuvo, una cita que nunca dijo. Esto puede dañar a la persona y a la confianza en tu organización.",
            "Antes de compartir, revisa: Verdad (¿cada dato es cierto y está en tus notas?), Consentimiento (¿cada dato y cada lugar están permitidos?), Dignidad (¿la persona es la protagonista, con lenguaje que la pone primero?) y Números (¿el número sale de tus registros?). Si puedes, deja que la persona lea su historia antes de que salga.",
            "Guarda una copia de la versión final con el formulario de consentimiento y quita la historia si la persona lo pide."
          ],
          steps: ["Verdad: compara cada dato con tus notas; quita lo que haya agregado la IA.", "Consentimiento: revisa cada dato y cada lugar con el formulario.", "Dignidad: protagonista, primero la persona, sin lástima.", "Números: confírmalos en tus registros.", "Deja que la persona la lea si puedes y luego archívala con el formulario de consentimiento."],
          words: [["Invención", "un dato inventado que se presenta como cierto."], ["Lista de revisión", "una lista de revisiones que haces cada vez."]],
          slides: [
            { title: "La IA puede agregar datos falsos", bullets: ["Personas o hechos de más", "Puestos o citas que nunca existieron"] },
            { title: "Cuatro revisiones", bullets: ["Verdad", "Consentimiento", "Dignidad", "Números"] },
            { title: "Termina bien", bullets: ["Deja que la persona la lea si puedes", "Archívala con el formulario de consentimiento", "Quítala si lo pide"] }
          ],
          tryIt: "Tarea final: pasa tus tres versiones (boletín, publicación en redes, párrafo de subvención) por las cuatro revisiones. Corrige lo que no pase y anota lo que cambiaste.",
          youCanNow: "revisar que las historias de impacto tengan verdad, consentimiento, dignidad y números honestos antes de compartirlas.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una de las cuatro revisiones antes de compartir?", options: ["El largo", "La letra", "El consentimiento", "El color"], answer: 2, why: "Las cuatro revisiones son Verdad, Consentimiento, Dignidad y Números." },
            { objective: "O6", q: "Una familia te pide quitar su historia un mes después de publicada. ¿Qué haces?", options: ["La dejas; firmaron el formulario", "Les pides que paguen para quitarla", "Cambias una palabra", "Quitas la historia"], answer: 3, why: "Quita la historia si la persona lo pide." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Escribir y compartir historias con IA",
        questions: [
          { objective: "O4", q: "¿Qué es seguro poner en una instrucción a la IA para una historia?", options: ["Las notas de caso de la persona atendida", "La dirección de su casa", "Su expediente médico", "Espacios en blanco y datos generales"], answer: 3, why: "Los espacios en blanco dejan los datos privados fuera de la IA." },
          { objective: "O5", q: "El formulario de consentimiento permite el sitio web pero no las redes sociales. ¿Qué haces?", options: ["Usas la historia solo en el sitio web", "La publicas en redes de todos modos", "Le preguntas a la IA", "Cambias el nombre y la publicas en todos lados"], answer: 0, why: "Comparte solo donde la persona aceptó." },
          { objective: "O6", q: "La IA agregó una cita que la persona nunca dijo. ¿Qué haces?", options: ["La dejas, suena bien", "Agregas más citas", "La quitas", "Le preguntas al donante"], answer: 2, why: "Los datos inventados rompen la confianza y se deben quitar." },
          { objective: "O5", q: "¿Qué versión necesita resultados y cómo ayudó el dinero del financiador?", options: ["La publicación en redes", "El volante del evento", "La tarjeta de agradecimiento", "El informe de subvención"], answer: 3, why: "Los financiadores quieren resultados ligados a su apoyo." },
          { objective: "O5", q: "¿Cómo se debe usar una imagen hecha con IA?", options: ["Presentándola como una persona atendida real", "Escondida en el fondo", "Indicando que es de IA, y nunca en lugar de una persona atendida real", "Para el consentimiento"], answer: 2, why: "Las imágenes de IA no deben fingir que muestran a personas reales que atiendes." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para contar historias de impacto social",
    questions: [
      { objective: "O1", q: "¿A quién le pertenece la historia de una persona atendida?", options: ["A la organización", "A la persona atendida", "Al donante", "A la herramienta de IA"], answer: 1, why: "Es su vida y su historia." },
      { objective: "O1", q: "Consentimiento informado significa que la persona entiende:", options: ["Qué vas a compartir, dónde y por cuánto tiempo", "Solo que le van a tomar una foto", "Nada; basta con una firma", "El presupuesto de la organización"], answer: 0, why: "El consentimiento es informado solo cuando sabe cómo se va a usar." },
      { objective: "O1", q: "Para la historia de un niño, ¿quién da el consentimiento?", options: ["Su maestro", "Un voluntario", "Su madre, padre o tutor", "Nadie"], answer: 2, why: "La madre, el padre o el tutor deben estar de acuerdo en el caso de un niño." },
      { objective: "O1", q: "Una persona que aceptó el mes pasado ahora te pide que quites su historia. Tú:", options: ["La quitas", "Te niegas", "Le pides que pague", "La acortas"], answer: 0, why: "La gente puede cambiar de opinión." },
      { objective: "O1", q: "¿Cuándo podría no compartirse una historia aunque haya consentimiento?", options: ["Cuando es muy corta", "Cuando es lunes", "Nunca", "Cuando compartirla podría poner en riesgo a la persona"], answer: 3, why: "La seguridad va antes que una buena historia." },
      { objective: "O2", q: "En una historia contada con dignidad, la protagonista es:", options: ["La organización", "La persona que atiendes", "El donante", "La IA"], answer: 1, why: "La persona actúa y decide; tú ayudas." },
      { objective: "O2", q: "¿Qué palabra debes evitar?", options: ["\"terminó\"", "\"destrozada\"", "\"decidió\"", "\"empezó\""], answer: 1, why: "\"Destrozada\" es una palabra de lástima." },
      { objective: "O2", q: "¿Qué dato normalmente se debe dejar fuera?", options: ["El cambio concreto", "El programa al que entró", "Su meta", "Su dirección exacta"], answer: 3, why: "Las direcciones pueden identificar o poner en peligro a las personas." },
      { objective: "O3", q: "Las tres partes de la estructura de la historia son:", options: ["Antes, Momento clave, Después", "Título, Logo, Pedido", "Nombre, Dirección, Teléfono", "Problema, Precio, Ganancia"], answer: 0, why: "Esta estructura sencilla es fácil de seguir." },
      { objective: "O3", q: "¿Por qué agregar un número honesto?", options: ["Para que sea más larga", "Porque la IA lo necesita", "Para mostrar que la historia es parte de un impacto más grande", "Para reemplazar el consentimiento"], answer: 2, why: "El número muestra el tamaño de tu impacto." },
      { objective: "O3", q: "¿De dónde debe salir el número de tu programa?", options: ["De una suposición", "De la IA", "Del sitio web de otra organización", "De tus propios registros revisados"], answer: 3, why: "Los números honestos salen de tus registros." },
      { objective: "O4", q: "¿Qué instrucción es segura?", options: ["\"María López, 123 Main St, diagnosticada con...\"", "\"Aquí están sus notas de caso...\"", "\"[Nombre], madre sola, terminó nuestra capacitación y ahora trabaja en un consultorio médico.\"", "\"Esta es la escuela de su hijo...\""], answer: 2, why: "Usa un espacio en blanco y ningún dato privado." },
      { objective: "O4", q: "Después del borrador de la IA, ¿qué datos reales agregas?", options: ["Todos los que sabes", "Solo los que la persona aceptó", "Su número de teléfono", "Lo que sugiera la IA"], answer: 1, why: "El formulario de consentimiento limita lo que compartes." },
      { objective: "O5", q: "Una versión para redes sociales debe ser:", options: ["Corta con una acción clara", "Tan larga como un informe de subvención", "Llena de datos del caso", "Sin ningún pedido"], answer: 0, why: "Las publicaciones cortas con una acción funcionan mejor." },
      { objective: "O5", q: "Una versión para un informe de subvención se enfoca en:", options: ["Chistes", "Palabras de lástima", "Hechos, resultados y cómo ayudó el dinero", "La dirección de la persona"], answer: 2, why: "Los financiadores necesitan resultados." },
      { objective: "O5", q: "Antes de publicar una historia en redes sociales, revisa:", options: ["Que el formulario de consentimiento permita las redes sociales", "Solo la ortografía", "El clima", "La lista de donantes"], answer: 0, why: "El consentimiento cubre cada lugar por separado." },
      { objective: "O5", q: "Una imagen hecha con IA de una familia sonriente se presenta como \"una familia que atendimos\". Esto es:", options: ["Correcto", "Obligatorio", "Mejor que una foto real", "Engañoso; indica que es de IA y no la presentes como una persona atendida real"], answer: 3, why: "Las imágenes de IA no deben fingir que son personas atendidas reales." },
      { objective: "O6", q: "¿Cuál es una de las cuatro revisiones?", options: ["Rapidez", "Verdad", "Precio", "Tipo de letra"], answer: 1, why: "Verdad, Consentimiento, Dignidad y Números son las cuatro revisiones." },
      { objective: "O6", q: "La IA escribió que la persona \"tiene tres hijos\", pero tus notas dicen uno. Tú:", options: ["Lo dejas", "Lo corriges para que coincida con tus notas", "Le preguntas otra vez a la IA y le crees", "Quitas el consentimiento de la persona"], answer: 1, why: "Cada dato debe coincidir con tus notas." },
      { objective: "O6", q: "¿Dónde guardas la historia final?", options: ["Solo en el chat de la IA", "En ningún lado", "En una carpeta pública", "Con el formulario de consentimiento firmado"], answer: 3, why: "Guardarlos juntos muestra lo que se aceptó." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      5,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Consentimiento",
        objective: "O1",
        notYet: "No hay consentimiento por escrito para una historia real, o se usa un detalle que no se aceptó.",
        meets: "Consentimiento por escrito, o una historia de práctica totalmente inventada, con el nombre y los lugares anotados.",
        exceeds: "La persona leyó su historia antes de que se publicara."
      },
      {
        name: "Estructura y número",
        objective: "O3",
        notYet: "Falta una parte de la historia, o el número es adivinado.",
        meets: "Antes, Momento clave y Después, más un número de registros revisados.",
        exceeds: "La parte de Después muestra un cambio concreto con las propias palabras de la persona, con permiso."
      },
      {
        name: "Instrucción segura para la IA",
        objective: "O4",
        notYet: "La instrucción tiene un nombre completo, una dirección, datos de salud o notas de casos.",
        meets: "La instrucción usa solo espacios en blanco y detalles generales.",
        exceeds: "Le pide a la IA lenguaje que pone primero a la persona y sin palabras de lástima."
      },
      {
        name: "Tres versiones",
        objective: "O5",
        notYet: "Falta una versión o se usa donde el consentimiento no lo permite.",
        meets: "Boletín de unas 150 palabras, publicación de 40 palabras y párrafo de subvención de 100 palabras, cada uno donde el consentimiento lo permite.",
        exceeds: "Cada versión va con sus lectores: calidez, una acción, o resultados y fondos."
      },
      {
        name: "Revisión final",
        objective: "O6",
        notYet: "Queda un detalle falso, una palabra de lástima o un número sin revisar.",
        meets: "Las tres pasan las revisiones de Verdad, Consentimiento, Dignidad y Números.",
        exceeds: "Enumera lo que se corrigió y guarda la copia final junto con el formulario de consentimiento."
      }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Organizaciones que adoptan un formulario de consentimiento por escrito para historias en 60 días (encuesta de seguimiento)",
      "Historias compartidas en boletines, publicaciones o informes de subvención con el consentimiento archivado",
      "Estudiantes que empiezan otro curso de Koach Learn para organizaciones sin fines de lucro en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratis",
      "El formulario de consentimiento de tu organización, o un formulario sencillo de ejemplo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Usa en clase historias de práctica totalmente inventadas, a menos que las historias reales tengan consentimiento por escrito.",
      "Hagan un ejercicio en grupo para cambiar palabras de lástima por lenguaje que pone primero a la persona.",
      "Lleva el formulario de consentimiento de la organización para que los estudiantes comparen cada versión con lo que se aceptó.",
      "Recuerda a los estudiantes que pregunten a su director antes de contar historias de personas que podrían quedar en riesgo.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

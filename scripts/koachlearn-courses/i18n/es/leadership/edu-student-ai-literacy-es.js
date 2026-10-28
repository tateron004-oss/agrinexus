"use strict";

// Koach Learn course (Spanish translation of leadership/edu-student-ai-literacy.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "edu-student-ai-literacy-es",
  lang: "es",
  translationOf: "edu-student-ai-literacy",
  category: "Leadership Development",
  name: "IA para líderes escolares y educativos 5: Aprendizaje estudiantil y alfabetización en IA",
  skills: "Definir la alfabetización en IA para estudiantes, Dar una clase práctica de alfabetización en IA, Usar la IA como compañera de aprendizaje, Fijar niveles de uso de IA en el aula, Enseñar a los estudiantes a declarar el uso de IA, Mantener seguros a los estudiantes",
  outcome: "enseñar a los estudiantes a entender, cuestionar y usar la IA con responsabilidad: dar una clase de alfabetización en IA de 30 minutos, fijar niveles claros de uso de IA para las tareas, enseñar a los estudiantes a decir cómo usaron la IA y explicar las reglas de seguridad a estudiantes y familias.",
  about: [
    "Este curso es para docentes, bibliotecarios y especialistas en medios, orientadores, coordinadores pedagógicos y líderes escolares que influyen en cómo los estudiantes aprenden con la IA y sobre ella. Los estudiantes ya usan la IA; la alfabetización en IA los ayuda a usarla para aprender, no para saltarse el aprendizaje.",
    "El capítulo 1 define la alfabetización en IA, te da una clase práctica para enseñarla y muestra cómo usar la IA como compañera de aprendizaje que hace preguntas en lugar de dar respuestas. El capítulo 2 fija las reglas del aula: niveles de uso de IA para las tareas, declaración del uso, seguridad y privacidad, y un plan para toda la escuela.",
    "El uso de cualquier herramienta de IA por parte de los estudiantes depende de la aprobación de tu distrito, de las reglas de edad de la herramienta y, para niños menores de 13 años, de COPPA (la ley federal de privacidad infantil en línea). Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Este es el curso 5 de 8 de IA para líderes escolares y educativos."
  ],
  finalTask: "Prepara un paquete de alfabetización en IA para un grado: un plan de clase de 30 minutos en el que los estudiantes prueban una herramienta de IA (o ven una demostración del docente), detectan un error y conversan sobre el sesgo; una escala de uso de IA de cinco niveles para el aula con una tarea de ejemplo en cada nivel; un formato de declaración de una línea que usarán los estudiantes; y una carta de media página para las familias que explique qué aprenderán los estudiantes y las reglas de seguridad.",
  chapters: [
    {
      name: "Capítulo 1: Enseñar a los estudiantes sobre la IA",
      lessons: [
        {
          title: "Qué significa la alfabetización en IA para los estudiantes",
          minutes: 5,
          goal: "Definir la alfabetización en IA en cuatro habilidades estudiantiles que puedes enseñar.",
          text: [
            "La alfabetización en IA es saber lo suficiente sobre la IA para usarla bien, cuestionarla y tomar buenas decisiones sobre ella. Para los estudiantes, se resume en cuatro habilidades. Entender: la IA predice respuestas probables a partir de patrones; no piensa ni sabe como una persona. Cuestionar: la IA puede equivocarse, inventar o tener sesgos, así que hay que revisarla.",
            "Usar: hacer preguntas claras, usar la IA para aprender (explícame, hazme preguntas, dame retroalimentación) y no para evitar aprender, y seguir las reglas de la clase. Decidir: pensar en la privacidad, la equidad y la honestidad, por ejemplo qué compartir, de quién es el trabajo y cuándo no usar la IA en absoluto.",
            "El grado importa. Los estudiantes más pequeños pueden aprender las ideas con demostraciones del docente y actividades desconectadas, sin cuentas. Los mayores pueden usar directamente herramientas aprobadas con reglas claras."
          ],
          words: [["Alfabetización en IA", "saber lo suficiente sobre la IA para usarla bien, cuestionarla y decidir con criterio."], ["Actividad desconectada", "una clase sobre tecnología que no usa dispositivos."]],
          slides: [
            { title: "Cuatro habilidades estudiantiles", bullets: ["Entender: la IA predice a partir de patrones", "Cuestionar: puede equivocarse o tener sesgos", "Usarla para aprender; decidir con criterio"] },
            { title: "Usarla para aprender, no para saltarse", bullets: ["“Explícalo de otra manera”", "“Hazme preguntas”", "“Dame retroalimentación sobre mi borrador”"] },
            { title: "Según el grado", bullets: ["Pequeños: demostraciones, actividades desconectadas", "Mayores: herramientas aprobadas, reglas claras"] }
          ],
          tryIt: "Escribe las cuatro habilidades de alfabetización en IA con palabras que tus estudiantes entenderían, para un grado que atiendes, con un ejemplo de cada una.",
          youCanNow: "definir la alfabetización en IA como cuatro habilidades estudiantiles que se pueden enseñar."
        },
        {
          title: "Una clase práctica de alfabetización en IA",
          minutes: 6,
          goal: "Planear una clase de 30 minutos en la que los estudiantes prueban la IA y detectan sus errores.",
          text: [
            "Los estudiantes aprenden mejor los límites de la IA cuando los ven. Estructura: enganche (5 minutos): pregunta “¿La IA siempre tiene razón?” y hagan una votación. Investigar (15 minutos): en parejas, o con una demostración del docente, hagan a una herramienta de IA preguntas que preparaste, incluida una que responde mal o inventa (una fuente falsa, un problema verbal de matemáticas engañoso, un dato local).",
            "Verificar (5 minutos): los estudiantes comparan las respuestas con el libro de texto, un sitio web confiable o el docente. Conversar sobre el sesgo (5 minutos): pidan a la herramienta que describa “un científico” o “una enfermera” varias veces y noten los patrones; conversen sobre de dónde vienen esos patrones.",
            "Cierra con un boleto de salida: “Nombra algo para lo que la IA sirve y una razón para revisarla.” Prueba tus preguntas antes de la clase, porque las herramientas de IA cambian y pueden corregir errores o crear otros."
          ],
          steps: ["Enganche: votación “¿La IA siempre tiene razón?”.", "Investigar: preguntas preparadas, incluida una que responde mal.", "Verificar con fuentes confiables.", "Conversar sobre el sesgo con la prueba de describir a una persona.", "Boleto de salida; prueba tus preguntas antes de la clase."],
          words: [["Verificar datos", "comparar una afirmación con una fuente confiable."], ["Sesgo", "un patrón injusto, como describir siempre un oficio con un solo tipo de persona."]],
          slides: [
            { title: "Clase de 30 minutos", bullets: ["Enganche: ¿la IA siempre tiene razón?", "Investigar: preguntas preparadas", "Verificar, conversar sobre el sesgo, boleto de salida"] },
            { title: "Muestra un error real", bullets: ["Una fuente falsa o un problema verbal engañoso", "Un dato local que quizá no sepa", "Prueba tus preguntas antes de la clase"] },
            { title: "Detecta el sesgo", bullets: ["Pídele que describa “un científico” varias veces", "Noten patrones; conversen de dónde vienen"] }
          ],
          tryIt: "Prepara cinco preguntas para la clase, incluida al menos una que la IA responda mal. Pruébalas en una herramienta aprobada y anota las respuestas que vas a usar.",
          youCanNow: "planear una clase práctica que enseña a los estudiantes a cuestionar la IA."
        },
        {
          title: "La IA como compañera de aprendizaje, no como máquina de respuestas",
          minutes: 5,
          goal: "Enseñar a los estudiantes instrucciones que hacen que la IA los ayude a pensar.",
          text: [
            "La misma herramienta puede hacer el razonamiento del estudiante o apoyarlo. La diferencia está en la instrucción. Máquina de respuestas: “Escribe mi párrafo sobre las causas de la Guerra Civil de EE. UU.” Compañera de aprendizaje: “Hazme preguntas, una a la vez, para ayudarme a descubrir las causas, y no me des la respuesta.”",
            "Enseña tres instrucciones de compañera de aprendizaje: “Explícalo de otra manera, con un ejemplo”; “Hazme preguntas sobre esto y dime en qué me equivoqué”; “Este es mi borrador. Dame dos fortalezas y una cosa para mejorar, pero no lo reescribas.”",
            "Algunas herramientas educativas están hechas para dar tutoría de esta forma. Con cualquier herramienta, los estudiantes deben verificar los datos, y el trabajo que entregan debe ser su propio razonamiento, según lo permita el nivel de uso de IA de la clase."
          ],
          steps: ["Muestra una instrucción de máquina de respuestas y su resultado.", "Muestra una instrucción de compañera de aprendizaje y su resultado.", "Enseña tres instrucciones de compañera de aprendizaje.", "Haz que los estudiantes practiquen con el tema del día.", "Recuerda: verificar los datos; entregar el propio razonamiento."],
          words: [["Instrucción de compañera de aprendizaje", "una instrucción que pide a la IA ayudarte a pensar en lugar de hacer el trabajo."], ["Preguntas socráticas", "enseñar haciendo preguntas que llevan al estudiante a razonar por sí mismo."]],
          slides: [
            { title: "Misma herramienta, otra instrucción", bullets: ["Máquina de respuestas: “Escribe mi párrafo”", "Compañera de aprendizaje: “Hazme preguntas, no me lo digas”"] },
            { title: "Tres instrucciones de compañera", bullets: ["“Explícalo de otra manera, con un ejemplo”", "“Hazme preguntas y dime en qué me equivoqué”", "“Dos fortalezas, una mejora, sin reescribir”"] },
            { title: "Sigue siendo trabajo del estudiante", bullets: ["Verificar los datos", "Entregar el propio razonamiento"] }
          ],
          tryIt: "Prueba una instrucción de máquina de respuestas y otra de compañera de aprendizaje sobre un tema que enseñas. Escribe cuál ayudaría más a un estudiante a aprender y por qué.",
          youCanNow: "enseñar a los estudiantes a usar la IA para apoyar su razonamiento, no para reemplazarlo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Enseñar a los estudiantes sobre la IA",
        questions: [
          { q: "¿Cuál es una de las cuatro habilidades de alfabetización en IA?", options: ["Memorizar nombres de empresas de IA", "Escribir más rápido", "Cuestionar: la IA puede equivocarse o tener sesgos", "Evitar toda tecnología"], answer: 2, why: "Cuestionar la IA es central en la alfabetización en IA." },
          { q: "¿Cómo pueden los estudiantes más pequeños aprender sobre la IA sin cuentas?", options: ["Con demostraciones del docente y actividades desconectadas", "No pueden", "Con la contraseña de un padre", "Registrándose con edades falsas"], answer: 0, why: "Las demostraciones y las clases desconectadas enseñan las ideas con seguridad." },
          { q: "¿Por qué probar tus preguntas preparadas antes de la clase?", options: ["Para alargarla", "Es la ley", "Los estudiantes lo prefieren", "Las herramientas de IA cambian y pueden corregir errores o crear otros"], answer: 3, why: "Un error planeado puede ya no aparecer." },
          { q: "¿Cuál es una instrucción de compañera de aprendizaje?", options: ["“Escribe mi ensayo.”", "“Hazme preguntas una a la vez; no me des la respuesta.”", "“Haz mi tarea.”", "“Dame las respuestas.”"], answer: 1, why: "Apoya el razonamiento en lugar de reemplazarlo." },
          { q: "Pedir a la IA que describa “una enfermera” varias veces ayuda a los estudiantes a notar:", options: ["La ortografía", "El costo", "La velocidad", "Sesgos en los patrones"], answer: 3, why: "Los patrones repetidos pueden revelar sesgos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reglas, seguridad y un plan para toda la escuela",
      lessons: [
        {
          title: "Niveles de uso de IA para las tareas",
          minutes: 6,
          goal: "Fijar una escala de uso de IA de cinco niveles y etiquetar las tareas con ella.",
          text: [
            "Los estudiantes necesitan saber, en cada tarea, qué uso de IA se permite. Una escala sencilla de cinco niveles: Nivel 0, sin IA. Nivel 1, IA solo para ideas (generas ideas y luego trabajas por tu cuenta). Nivel 2, IA para retroalimentación (sobre tu propio borrador; tú haces los cambios). Nivel 3, IA como colaboradora (puedes usar partes generadas por IA, marcadas y explicadas). Nivel 4, exploración con IA (usar la IA es el propósito de la tarea).",
            "Etiqueta cada tarea con su nivel y explica por qué: una tarea de nivel 0 puede desarrollar una habilidad que los estudiantes deben tener por sí solos, como escribir un párrafo con tiempo limitado o hacer cálculo mental. Una tarea de nivel 2 desarrolla habilidades de revisión.",
            "Usa la misma escala en toda la escuela para que los estudiantes no enfrenten reglas distintas en cada clase. Existen varias escalas publicadas de uso de IA en la evaluación; adapta una o escribe la tuya con tu personal."
          ],
          steps: ["Acuerda una escala de cinco niveles con el personal.", "Etiqueta cada tarea con su nivel.", "Explica por qué ese nivel sirve a la meta de aprendizaje.", "Publica la escala en el aula y en línea.", "Usa la misma escala en toda la escuela."],
          words: [["Nivel de uso de IA", "una etiqueta que dice a los estudiantes cuánta IA pueden usar en una tarea."], ["Colaborador", "alguien (o algo) que trabaja contigo en una tarea."]],
          slides: [
            { title: "Cinco niveles de uso de IA", bullets: ["0 Sin IA; 1 Solo ideas", "2 Retroalimentación sobre tu borrador", "3 Colaboradora, marcada y explicada", "4 Exploración con IA"] },
            { title: "Etiqueta cada tarea", bullets: ["Di el nivel", "Di por qué sirve a la meta de aprendizaje"] },
            { title: "Una escala, toda la escuela", bullets: ["Las mismas reglas en cada clase", "Adapta una escala publicada con el personal"] }
          ],
          tryIt: "Escribe la escala de cinco niveles con palabras fáciles para los estudiantes. Luego etiqueta cinco de tus próximas tareas con un nivel y una razón de una línea.",
          youCanNow: "decir con claridad a los estudiantes cuánta IA pueden usar en cada tarea y por qué."
        },
        {
          title: "Decir cómo usaste la IA",
          minutes: 5,
          goal: "Enseñar a los estudiantes una forma sencilla de declarar y citar el uso de IA.",
          text: [
            "Ser honesto sobre la IA es una habilidad. Cuando la IA está permitida, los estudiantes deben decir cómo la usaron. Una declaración de una línea sirve para la mayoría de las tareas: “Usé [herramienta] para [qué] el [fecha]. Yo [lo que hice con ello].” Por ejemplo: “Usé Gemini para que me hiciera preguntas de vocabulario el 3 de marzo. Escribí yo todas las respuestas.”",
            "En tareas de investigación, los estudiantes mayores pueden seguir el estilo de citas que usa tu escuela; guías de estilo como MLA y APA publican en sus propios sitios web orientaciones para citar herramientas de IA. La IA no es una fuente confiable de datos, así que los estudiantes deben encontrar y citar la fuente original.",
            "Trata la declaración honesta como algo positivo. Los estudiantes que dicen lo que hicieron con la IA están aprendiendo integridad; no castigues la declaración honesta de un uso permitido."
          ],
          steps: ["Enseña la declaración de una línea.", "Muéstrala con tu propio trabajo hecho con ayuda de IA.", "En investigación, usa la guía de citas de tu escuela.", "Exige fuentes originales para los datos.", "Elogia la declaración honesta."],
          words: [["Declaración", "decir abiertamente cómo usaste la IA."], ["Cita", "una nota que dice al lector de dónde salió la información."]],
          slides: [
            { title: "La declaración de una línea", bullets: ["“Usé [herramienta] para [qué] el [fecha].”", "“Yo [lo que hice con ello].”"] },
            { title: "Tareas de investigación", bullets: ["Usa el estilo de citas de tu escuela", "La IA no es una fuente de datos", "Encuentra y cita la fuente original"] },
            { title: "Premia la honestidad", bullets: ["Hazlo tú primero", "Nunca castigues la declaración honesta de un uso permitido"] }
          ],
          tryIt: "Escribe una línea de declaración para algo en lo que usaste la IA esta semana. Luego escribe las instrucciones que darás a los estudiantes para declarar el uso de IA.",
          youCanNow: "enseñar a los estudiantes a declarar y citar con honestidad el uso de IA."
        },
        {
          title: "Mantener seguros a los estudiantes y planear para toda la escuela",
          minutes: 6,
          goal: "Enseñar reglas de seguridad a los estudiantes y planear la alfabetización en IA a lo largo de los grados.",
          text: [
            "Enseña a los estudiantes cuatro reglas de seguridad. No compartas información personal (nombre completo, dirección, escuela, fotos, contraseñas) con herramientas de IA. Usa solo herramientas aprobadas por la escuela, respetando las reglas de edad de sus términos. La IA puede crear imágenes, voces y videos falsos (deepfakes): ten cuidado con lo que crees y nunca crees falsificaciones de personas reales. Habla con un adulto de confianza si una conversación con la IA se vuelve molesta o insegura, o te pide secretos.",
            "Para niños menores de 13 años, COPPA aplica a los servicios en línea; la FTC (Comisión Federal de Comercio de EE. UU.) dice que una escuela puede dar el consentimiento en lugar de los padres solo cuando el servicio recopila información para uso y beneficio de la escuela, sin ningún otro fin comercial. Tu distrito decide qué herramientas pueden usar los estudiantes; informa a las familias cuáles y por qué.",
            "Planea la alfabetización en IA por bloques de grados, para que cada año se apoye en el anterior: los primeros grados aprenden qué es la IA con demostraciones; los últimos grados de primaria practican cuestionar y verificar; la secundaria añade el sesgo, la declaración y el uso como compañera de aprendizaje; la preparatoria añade ética, carreras y creación responsable. Comparte el plan con las familias."
          ],
          steps: ["Enseña las cuatro reglas de seguridad.", "Confirma las herramientas aprobadas y las reglas de edad; para menores de 13, el consentimiento de COPPA.", "Informa a las familias qué herramientas se usan y por qué.", "Organiza las habilidades de alfabetización en IA por bloques de grados.", "Comparte el plan con las familias."],
          words: [["Deepfake", "una imagen, voz o video falso hecho con IA para que parezca real."], ["Bloque de grados", "un grupo de grados, como K-2 o 6-8."]],
          slides: [
            { title: "Cuatro reglas de seguridad", bullets: ["Nada de información personal", "Solo herramientas aprobadas, con reglas de edad", "Cuidado con los deepfakes; nunca falsifiques a personas reales", "Avisa a un adulto de confianza"] },
            { title: "Menores de 13: COPPA", bullets: ["Consentimiento de la escuela solo para uso escolar", "Ningún otro fin comercial", "Informa a las familias qué herramientas y por qué"] },
            { title: "Un plan por bloques de grados", bullets: ["Primeros grados: qué es la IA", "Fin de primaria: cuestionar y verificar", "Secundaria y preparatoria: sesgo, declaración, ética"] }
          ],
          sources: [{ name: "FTC: Cumplir con COPPA, preguntas frecuentes", url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions" }],
          tryIt: "Tarea final: arma tu paquete de alfabetización en IA para un grado: el plan de clase de 30 minutos, la escala de uso de IA de cinco niveles con una tarea de ejemplo en cada nivel, el formato de declaración de una línea y una carta de media página para las familias con las reglas de seguridad.",
          youCanNow: "liderar la alfabetización en IA de los estudiantes con una clase, niveles de uso claros, declaración honesta y reglas de seguridad que las familias entienden."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Reglas, seguridad y un plan para toda la escuela",
        questions: [
          { q: "En una tarea de nivel 2 (retroalimentación), los estudiantes pueden:", options: ["Hacer que la IA escriba todo", "No usar la IA en absoluto", "Recibir retroalimentación de la IA sobre su propio borrador y hacer ellos los cambios", "Copiar texto de la IA sin marcarlo"], answer: 2, why: "El nivel 2 es retroalimentación sobre el trabajo propio del estudiante." },
          { q: "¿Por qué usar la misma escala de uso de IA en toda la escuela?", options: ["Los estudiantes tienen reglas coherentes en cada clase", "Es más barato", "Prohíbe la IA", "Lo exigen los proveedores"], answer: 0, why: "La coherencia evita confusiones." },
          { q: "Un estudiante declara con honestidad un uso permitido de IA. Debes:", options: ["Bajarle la calificación", "Tratar la declaración como algo positivo", "Denunciarlo", "Ignorarlo"], answer: 1, why: "La declaración honesta es integridad en acción." },
          { q: "¿Cuál es una de las cuatro reglas de seguridad para estudiantes?", options: ["Nunca crear falsificaciones de personas reales", "Compartir tu dirección para obtener mejores respuestas", "Usar cualquier aplicación que encuentres", "Guardar en secreto las conversaciones molestas"], answer: 0, why: "Los deepfakes de personas reales pueden causar daño." },
          { q: "Para estudiantes menores de 13 años, ¿qué ley aplica a los servicios en línea?", options: ["Ninguna", "Una ley de tránsito", "Solo la de derechos de autor", "COPPA"], answer: 3, why: "COPPA protege en línea a los niños menores de 13 años." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para líderes escolares y educativos 5: Aprendizaje estudiantil y alfabetización en IA",
    questions: [
      { q: "La alfabetización en IA significa:", options: ["Saber construir una IA", "Saber lo suficiente sobre la IA para usarla bien, cuestionarla y decidir con criterio", "No usar nunca la IA", "Escribir rápido"], answer: 1, why: "Es comprensión más criterio." },
      { q: "Los estudiantes deben entender que la IA:", options: ["Lo sabe todo", "Piensa como una persona", "Predice respuestas probables a partir de patrones", "Nunca se equivoca"], answer: 2, why: "Eso explica tanto sus fortalezas como sus errores." },
      { q: "Una actividad desconectada:", options: ["Es un corte de luz", "Requiere una computadora portátil", "Enseña sobre tecnología sin dispositivos", "Es un video"], answer: 2, why: "Es adecuada para los estudiantes más pequeños." },
      { q: "En la clase práctica, los estudiantes verifican las respuestas de la IA con:", options: ["El libro de texto, un sitio web confiable o el docente", "Solo otra IA", "Lo que adivina un amigo", "Nada"], answer: 0, why: "Las fuentes confiables revelan los errores." },
      { q: "Una buena pregunta preparada para la clase es una que:", options: ["Es muy larga", "Todos conocen", "No tiene respuesta", "La IA responde mal o inventa"], answer: 3, why: "Ver un error enseña el hábito de verificar." },
      { q: "La prueba de describir a una persona ayuda a los estudiantes a ver:", options: ["Errores de ortografía", "Sesgos", "Precios", "La velocidad"], answer: 1, why: "Los patrones revelan sesgos." },
      { q: "“Hazme preguntas y dime en qué me equivoqué” es:", options: ["Una contraseña", "Hacer trampa", "Una instrucción de máquina de respuestas", "Una instrucción de compañera de aprendizaje"], answer: 3, why: "Apoya el aprendizaje." },
      { q: "“Escribe mi párrafo por mí” convierte a la IA en:", options: ["Una verificadora de datos", "Una tutora", "Una máquina de respuestas", "Una docente"], answer: 2, why: "Reemplaza el razonamiento del estudiante." },
      { q: "El nivel 0 de la escala de uso de IA significa:", options: ["Sin IA", "IA para todo", "Solo retroalimentación", "Solo ideas"], answer: 0, why: "Algunas habilidades deben desarrollarse sin ayuda." },
      { q: "El nivel 3 (colaboradora) exige que los estudiantes:", options: ["Oculten el uso de IA", "Marquen y expliquen las partes generadas por IA", "No usen IA", "Dejen que la IA califique"], answer: 1, why: "La transparencia es la condición." },
      { q: "El nivel de IA de cada tarea debe venir con:", options: ["Una razón ligada a la meta de aprendizaje", "Un precio", "Una contraseña", "Ninguna explicación"], answer: 0, why: "Los estudiantes siguen las reglas que entienden." },
      { q: "Una declaración de uso de IA de una línea incluye:", options: ["Nada", "La dirección del estudiante", "El precio de la herramienta", "La herramienta, lo que hizo, la fecha y lo que hizo el estudiante"], answer: 3, why: "Hace transparente el uso de la IA." },
      { q: "En investigación, los datos deben citarse de:", options: ["Solo el chat de IA", "La fuente original", "La memoria", "Un rumor"], answer: 1, why: "La IA no es una fuente confiable de datos." },
      { q: "Las orientaciones para citar la IA en estilo MLA o APA se encuentran:", options: ["En ningún lado", "Solo en la respuesta de la IA", "En los propios sitios web de esas guías de estilo", "En redes sociales"], answer: 2, why: "Las guías de estilo publican sus propias orientaciones." },
      { q: "Los estudiantes nunca deben compartir con la IA:", options: ["Un tema de práctica", "Una pregunta de matemáticas", "Su nombre completo, su dirección y sus contraseñas", "Una palabra de vocabulario"], answer: 2, why: "La información personal se mantiene privada." },
      { q: "Un deepfake es:", options: ["Una imagen, voz o video falso hecho con IA", "Una piscina profunda", "Un ensayo largo", "Una contraseña segura"], answer: 0, why: "La IA puede crear falsificaciones realistas." },
      { q: "Si una conversación con la IA se vuelve molesta, los estudiantes deben:", options: ["Compartir datos personales", "Guardar el secreto", "Seguir conversando", "Avisar a un adulto de confianza"], answer: 3, why: "Los adultos pueden ayudar a mantenerlos seguros." },
      { q: "Las edades mínimas de las herramientas de IA se encuentran en:", options: ["La memoria de un colega", "Los términos actuales de cada herramienta", "El menú de la escuela", "Un libro de texto de 2010"], answer: 1, why: "Cada herramienta fija y actualiza sus propias reglas." },
      { q: "Un plan por bloques de grados significa:", options: ["Solo la preparatoria aprende sobre IA", "Una clase para todas las edades", "No tener plan", "Habilidades de alfabetización en IA que crecen año tras año"], answer: 3, why: "Las habilidades deben construirse a lo largo de los grados." },
      { q: "A las familias se les debe informar:", options: ["Solo después de los problemas", "Nada", "Qué herramientas de IA se usan, por qué y las reglas de seguridad", "Solo los precios de las herramientas"], answer: 2, why: "La transparencia genera confianza y apoyo." }
    ]
  }
};

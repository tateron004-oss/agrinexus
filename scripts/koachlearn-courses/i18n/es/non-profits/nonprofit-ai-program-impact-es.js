"use strict";

// Koach Learn course (Spanish translation of non-profits/nonprofit-ai-program-impact.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "nonprofit-ai-program-impact-es",
  lang: "es",
  translationOf: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "IA para llevar a cabo programas y medir su impacto",
  skills: "Hacer un modelo lógico sencillo, Elegir medidas de resultados, Escribir con IA una encuesta corta para participantes, Resumir resultados anónimos, Escribir un informe de impacto de una página",
  outcome: "usar la IA para hacer un modelo lógico sencillo de un programa, escribir una encuesta corta para participantes, resumir resultados anónimos y convertirlos en un informe de impacto honesto de una página para tu junta directiva y tus financiadores.",
  about: [
    "Este curso es para gerentes, coordinadores y voluntarios de programas de organizaciones sin fines de lucro y comunidades de fe que manejan programas y necesitan mostrar qué diferencia hacen.",
    "Vas a planear un programa en una página, elegir qué medir, usar la IA para escribir una encuesta justa, resumir los resultados sin exponer la información privada de nadie y escribir un informe de impacto en el que puedan confiar los financiadores y tu junta.",
    "Cada lección dura unos cinco minutos y arma una parte de tu informe de impacto. Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Para un programa real, escribe un informe de impacto de una página que incluya: un modelo lógico sencillo (insumos, actividades, productos, resultados), dos medidas de resultados, una encuesta corta para participantes que escribiste con IA, un resumen de resultados anónimos (datos reales o de práctica sin nombres), una historia compartida con permiso y una lección aprendida dicha con honestidad.",
  chapters: [
    {
      name: "Capítulo 1: Planear qué medir",
      lessons: [
        {
          title: "Productos y resultados: ¿cuál es la diferencia?",
          minutes: 4,
          goal: "Distinguir los productos de los resultados en uno de tus programas.",
          text: [
            "Los productos cuentan lo que hiciste: 300 comidas servidas, 40 sesiones de tutoría, 25 voluntarios capacitados. Los resultados describen lo que cambió para las personas: las familias se preocuparon menos por la comida, los estudiantes subieron sus calificaciones de lectura, los voluntarios se sintieron listos para dirigir.",
            "Los financiadores y las juntas piden cada vez más resultados, no solo productos. Los resultados muestran que tu misión está funcionando.",
            "La IA puede ayudarte a pensarlo. Pide: \"Nuestro programa [descripción pública] hace [actividades]. Haz una lista de los productos probables y de los resultados probables a corto plazo para los participantes.\" Luego escoge los que son ciertos para tu programa."
          ],
          words: [["Producto", "una cuenta de lo que hizo tu programa, como las comidas servidas."], ["Resultado", "un cambio en la vida de las personas gracias a tu programa."], ["Impacto", "la diferencia más grande y de largo plazo que hace tu trabajo en la comunidad."]],
          slides: [
            { title: "Los productos cuentan lo que hiciste", bullets: ["300 comidas servidas", "40 sesiones de tutoría", "25 voluntarios capacitados"] },
            { title: "Los resultados muestran lo que cambió", bullets: ["Las familias se preocupan menos por la comida", "Los estudiantes suben sus calificaciones de lectura", "Voluntarios listos para dirigir"] },
            { title: "Pide ideas a la IA", bullets: ["Productos y resultados probables", "Tú escoges lo que es cierto"] }
          ],
          tryIt: "Para un programa, escribe tres productos y dos resultados. Usa la IA para tener ideas y luego quédate solo con los que son ciertos para tu programa.",
          youCanNow: "distinguir los productos de los resultados en tu propio programa."
        },
        {
          title: "Hacer un modelo lógico sencillo",
          minutes: 5,
          goal: "Hacer con ayuda de la IA un modelo lógico de una página para un programa.",
          text: [
            "Un modelo lógico es una imagen de una página de cómo funciona tu programa: insumos (lo que pones), actividades (lo que haces), productos (lo que cuentas) y resultados (lo que cambia).",
            "Pide a la IA: \"Haz una tabla de modelo lógico para este programa: [descripción pública]. Columnas: insumos, actividades, productos, resultados a corto plazo, resultados a largo plazo. Que cada celda sea corta.\"",
            "Luego corrígelo para que coincida con la realidad. Quita todo lo que no haces. Un modelo lógico es un plan que puedes defender, no una lista de deseos."
          ],
          steps: ["Describe el programa en tres frases públicas.", "Pide a la IA una tabla de modelo lógico con cinco columnas.", "Quita todo lo que en realidad no haces.", "Revisa que cada resultado se relacione con una actividad."],
          words: [["Modelo lógico", "una tabla de una página que muestra insumos, actividades, productos y resultados."], ["Insumo", "lo que pones en un programa: personal, voluntarios, dinero, espacio."]],
          slides: [
            { title: "Un modelo lógico muestra", bullets: ["Insumos: lo que pones", "Actividades: lo que haces", "Productos: lo que cuentas", "Resultados: lo que cambia"] },
            { title: "Pide a la IA una tabla", bullets: ["Cinco columnas", "Celdas cortas"] },
            { title: "Hazlo real", bullets: ["Quita lo que no haces", "Cada resultado se relaciona con una actividad"] }
          ],
          tryIt: "Haz con la IA una tabla de modelo lógico para tu programa y luego edítala hasta que cada celda sea cierta.",
          youCanNow: "hacer un modelo lógico sencillo y honesto para un programa."
        },
        {
          title: "Elegir medidas de resultados",
          minutes: 5,
          goal: "Elegir dos medidas de resultados que de verdad puedas recoger.",
          text: [
            "Una medida es cómo vas a saber que pasó un resultado. Para \"las familias se preocupan menos por la comida\", una medida podría ser: el porcentaje de familias que dicen que se preocuparon menos por quedarse sin comida, preguntado al inscribirse y a los tres meses.",
            "Las buenas medidas son sencillas, tu equipo las puede recoger y son honestas. Comparar antes y después es más fuerte que preguntar una sola vez.",
            "Pide a la IA: \"Sugiere tres formas sencillas en que una organización pequeña podría medir este resultado: [resultado]. Tenemos [tiempo del personal y de voluntarios].\" Escoge dos que de verdad puedas hacer."
          ],
          steps: ["Escoge dos resultados de tu modelo lógico.", "Pide a la IA formas sencillas de medir cada uno.", "Elige las que tu equipo pueda recoger.", "Planea medir antes y después cuando puedas."],
          words: [["Medida", "cómo vas a saber que pasó un resultado, muchas veces un número o un porcentaje."], ["Antes y después", "hacer la misma pregunta al principio y más tarde para ver el cambio."]],
          slides: [
            { title: "Una medida muestra un resultado", bullets: ["\"Porcentaje de familias que se preocupan menos por la comida\"", "Preguntado al inscribirse y a los tres meses"] },
            { title: "Las buenas medidas son", bullets: ["Sencillas", "Tu equipo las puede recoger", "Honestas"] },
            { title: "Antes y después", bullets: ["Más fuerte que preguntar una vez", "Muestra el cambio con el tiempo"] }
          ],
          tryIt: "Elige dos medidas de resultados para tu programa, con las sugerencias de la IA, y escribe cuándo vas a recoger cada una.",
          youCanNow: "elegir medidas de resultados que tu equipo puede recoger."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear qué medir",
        questions: [
          { q: "¿Cuál es un resultado?", options: ["Las familias se preocupan menos por la comida", "300 comidas servidas", "40 sesiones realizadas", "25 voluntarios capacitados"], answer: 0, why: "Los resultados son cambios en la vida de las personas." },
          { q: "¿Cuál es un producto?", options: ["Los estudiantes se sienten más seguros", "40 sesiones de tutoría realizadas", "Las familias están más sanas", "Los voluntarios se sienten listos para dirigir"], answer: 1, why: "Los productos cuentan lo que hiciste." },
          { q: "El modelo lógico de la IA tiene una actividad que no haces. ¿Qué haces?", options: ["La dejas", "Empiezas a hacerla a escondidas", "La quitas", "Le preguntas a un financiador"], answer: 2, why: "Un modelo lógico debe ser cierto." },
          { q: "¿Qué plan de medición es el más fuerte?", options: ["Preguntar una vez al final", "Adivinar", "Preguntar solo al personal", "Hacer la misma pregunta al inscribirse y a los tres meses"], answer: 3, why: "El antes y después muestra el cambio." },
          { q: "¿Qué son los insumos?", options: ["Lo que pones: personal, voluntarios, dinero, espacio", "Las respuestas de la encuesta", "Los nombres de los financiadores", "Los resultados"], answer: 0, why: "Los insumos son los recursos que usa un programa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Recoger, resumir e informar",
      lessons: [
        {
          title: "Escribir una encuesta corta y justa para participantes",
          minutes: 5,
          goal: "Usar la IA para escribir el borrador de una encuesta corta que mide tus resultados.",
          text: [
            "Una encuesta pregunta a los participantes qué cambió para ellos. Que sea corta, de unas 5 a 8 preguntas, con palabras sencillas y en los idiomas que usan.",
            "Pide a la IA: \"Escribe una encuesta anónima de 6 preguntas para adultos de nuestro programa de alimentos que mida [resultado]. Usa lenguaje sencillo a nivel de sexto grado, sobre todo de opción múltiple, con una pregunta abierta. Evita preguntas que empujen la respuesta.\"",
            "Quita cualquier pregunta que pida nombres, datos de salud o situación migratoria a menos que de verdad la necesites y tengas una forma segura de guardarla. Di a las personas que la encuesta es voluntaria y que no afectará sus servicios. Herramientas gratis como Google Forms o Microsoft Forms pueden recoger las respuestas."
          ],
          steps: ["Pide a la IA una encuesta anónima corta que mida tu resultado.", "Reescribe cualquier pregunta que empuje la respuesta.", "Quita las preguntas sobre nombres o datos delicados que no necesitas.", "Agrega una nota de que la encuesta es voluntaria.", "Hazla en una herramienta de formularios gratis."],
          words: [["Encuesta", "un conjunto de preguntas para saber qué piensa o vivió la gente."], ["Anónima", "sin nombres ni datos que muestren quién respondió."], ["Pregunta que empuja la respuesta", "una pregunta que lleva a la gente hacia una respuesta, como \"¿Cuánto le ayudó nuestro gran programa?\""]],
          slides: [
            { title: "Que sea corta", bullets: ["De 5 a 8 preguntas", "Palabras sencillas, en los idiomas de la gente"] },
            { title: "Pide a la IA", bullets: ["Anónima, nivel de sexto grado", "Sobre todo opción múltiple, una pregunta abierta", "Sin preguntas que empujen la respuesta"] },
            { title: "Protege a las personas", bullets: ["Sin nombres ni datos delicados salvo que se necesiten", "Voluntaria: no afectará los servicios"] }
          ],
          tryIt: "Escribe con la IA el borrador de una encuesta anónima de 6 preguntas para tu programa. Encuentra y reescribe cualquier pregunta que empuje la respuesta y agrega una nota de que es voluntaria.",
          youCanNow: "escribir con ayuda de la IA una encuesta corta, justa y anónima para participantes."
        },
        {
          title: "Resumir resultados sin exponer a nadie",
          minutes: 5,
          goal: "Resumir con la IA los resultados de una encuesta anónima y revisar tú los números.",
          text: [
            "Antes de usar la IA con los resultados, asegúrate de que los datos no tengan nombres, datos de contacto ni nada que pueda identificar a una persona. Si un grupo pequeño se pudiera reconocer (por ejemplo, las únicas tres personas mayores que hablan español), junta o deja fuera esos datos.",
            "Tu herramienta de formularios o tu hoja de cálculo pueden contar las respuestas por ti. Luego puedes pegar los conteos, no las respuestas personales tal cual, en la IA: \"Estos son los conteos de la encuesta: [conteos]. Resume los hallazgos principales en 4 puntos y sugiere una gráfica.\"",
            "Revisa tú cada porcentaje en la hoja de cálculo. La IA se equivoca seguido en las cuentas. En las respuestas abiertas, léelas tú primero y quita todo lo que identifique antes de pedirle a la IA que las agrupe por temas."
          ],
          steps: ["Quita nombres y datos que identifiquen.", "Cuenta las respuestas en tu herramienta de formularios o tu hoja de cálculo.", "Pega en la IA los conteos, no las respuestas personales tal cual.", "Pide un resumen corto y una idea de gráfica.", "Revisa tú cada porcentaje."],
          words: [["Datos", "la información que recogiste, como las respuestas de una encuesta."], ["Tema", "una idea que aparece una y otra vez en las respuestas abiertas."], ["Porcentaje", "una parte de 100; por ejemplo, 60 de 100 personas es el 60 por ciento."]],
          slides: [
            { title: "Primero protege a las personas", bullets: ["Sin nombres ni datos de contacto", "Los grupos pequeños se pueden reconocer: júntalos"] },
            { title: "Cuenta y luego resume", bullets: ["Deja que la hoja de cálculo cuente", "Dale a la IA conteos, no respuestas personales tal cual"] },
            { title: "Revisa las cuentas", bullets: ["La IA se equivoca en las cuentas", "Revisa tú cada porcentaje"] }
          ],
          tryIt: "Usa conteos de práctica (por ejemplo, 30 de 40 personas dijeron que se preocupan menos por la comida). Pide a la IA un resumen de 4 puntos y luego revisa cada porcentaje con una calculadora.",
          youCanNow: "resumir resultados anónimos con la IA y revisar los números."
        },
        {
          title: "Escribir un informe de impacto de una página",
          minutes: 5,
          goal: "Convertir tu modelo lógico y tus resultados en un informe de impacto honesto de una página.",
          text: [
            "Un informe de impacto le dice a tu junta, a los financiadores y a la comunidad qué hizo tu programa y qué cambió. Basta con una página: la necesidad, lo que hiciste (productos), lo que cambió (resultados con números), una historia y lo que aprendiste.",
            "Pide a la IA: \"Usando solo esta información, escribe un informe de impacto de una página con estos títulos: La necesidad, Lo que hicimos, Lo que cambió, Una historia, Lo que aprendimos. [tu modelo lógico, tus medidas, tus resultados revisados, una historia compartida con permiso].\"",
            "Incluye una lección aprendida dicha con honestidad. Los financiadores confían en las organizaciones que dicen qué no funcionó y cómo van a mejorar. Nunca dejes que la IA agregue números o afirmaciones que no estén en tus datos."
          ],
          steps: ["Junta tu modelo lógico, tus medidas, tus resultados revisados y una historia con permiso.", "Pide a la IA un informe de una página con cinco títulos, usando solo tu información.", "Compara cada número con tu hoja de cálculo.", "Agrega una lección aprendida dicha con honestidad.", "Pide a un colega que lo lea."],
          words: [["Informe de impacto", "un informe corto sobre lo que hizo un programa y lo que cambió."], ["Lección aprendida", "algo que descubriste y que te va a ayudar a hacerlo mejor la próxima vez."]],
          slides: [
            { title: "Una página, cinco partes", bullets: ["La necesidad", "Lo que hicimos y lo que cambió", "Una historia", "Lo que aprendimos"] },
            { title: "Pide a la IA", bullets: ["\"Usando solo esta información...\"", "Cinco títulos"] },
            { title: "Mantente honesto", bullets: ["Cada número sale de tus datos", "Incluye una lección aprendida", "Un colega lo lee"] }
          ],
          tryIt: "Tarea final: escribe tu informe de impacto de una página con un modelo lógico, dos medidas, tu encuesta, un resumen de resultados anónimos, una historia compartida con permiso y una lección aprendida dicha con honestidad.",
          youCanNow: "planear, medir e informar el impacto de un programa con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Recoger, resumir e informar",
        questions: [
          { q: "¿Cuál es una pregunta que empuja la respuesta?", options: ["\"¿Qué tan seguido se preocupó por la comida el mes pasado?\"", "\"¿Cuánto le ayudó nuestro maravilloso programa?\"", "\"¿Qué día viene?\"", "\"¿Cómo se enteró de nosotros?\""], answer: 1, why: "Lleva a la gente hacia una respuesta positiva." },
          { q: "¿Qué debes decir a las personas sobre tu encuesta?", options: ["Que es obligatoria para recibir servicios", "Nada", "Que es voluntaria y no afectará sus servicios", "Que sus respuestas se publicarán"], answer: 2, why: "La gente debe sentirse libre de responder con honestidad o de no responder." },
          { q: "¿Qué debes pegar en la IA para resumir los resultados?", options: ["Respuestas tal cual con nombres", "Los teléfonos de los participantes", "Toda la base de datos de personas atendidas", "Conteos sin datos que identifiquen"], answer: 3, why: "Los conteos protegen la privacidad." },
          { q: "La IA dice que 30 de 40 es el 80 por ciento. ¿Qué haces?", options: ["Lo revisas tú: es el 75 por ciento", "Lo usas", "Lo redondeas a 100", "Quitas todos los números"], answer: 0, why: "La IA se equivoca en las cuentas; 30 de 40 es el 75 por ciento." },
          { q: "¿Por qué incluir una lección aprendida en un informe de impacto?", options: ["Para llenar espacio", "Los financiadores confían en organizaciones honestas que mejoran", "Lo exige la IA", "Para esconder resultados"], answer: 1, why: "Ser honesto sobre lo que no funcionó genera confianza." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para llevar a cabo programas y medir su impacto",
    questions: [
      { q: "Un producto es:", options: ["Un cambio en la vida de las personas", "Un donante", "Una cuenta de lo que hizo tu programa", "Una pregunta de encuesta"], answer: 2, why: "Los productos cuentan la actividad." },
      { q: "Un resultado es:", options: ["El número de volantes impresos", "El presupuesto", "La dirección de la oficina", "Un cambio en la vida de las personas gracias a tu programa"], answer: 3, why: "Los resultados son cambios para las personas." },
      { q: "¿Por qué los financiadores piden resultados?", options: ["Los resultados muestran que la misión funciona", "Son más fáciles de contar", "Son más cortos", "A los financiadores no les gustan los números"], answer: 0, why: "Los resultados muestran una diferencia real." },
      { q: "¿Qué NO es parte de un modelo lógico?", options: ["Insumos", "Contraseñas de donantes", "Actividades", "Resultados"], answer: 1, why: "Un modelo lógico tiene insumos, actividades, productos y resultados." },
      { q: "Un modelo lógico debe ser:", options: ["Una lista de deseos", "Secreto", "Un plan que puedes defender, fiel a lo que haces", "Escrito solo por la IA"], answer: 2, why: "Debe coincidir con la realidad." },
      { q: "Cada resultado de un modelo lógico debe relacionarse con:", options: ["Un donante", "Un logo", "Un día festivo", "Una actividad"], answer: 3, why: "Las actividades llevan a los resultados." },
      { q: "Una buena medida es:", options: ["Sencilla, se puede recoger y es honesta", "Complicada y cara", "Imposible de recoger", "Inventada"], answer: 0, why: "Tu equipo debe poder recogerla." },
      { q: "Medir antes y después te ayuda a:", options: ["Evitar las encuestas", "Ver el cambio con el tiempo", "Saltarte los resultados", "Esconder resultados"], answer: 1, why: "La comparación muestra el cambio." },
      { q: "¿Qué tan larga debe ser una encuesta para participantes?", options: ["50 preguntas", "Una palabra", "Unas 5 a 8 preguntas", "Sin límite"], answer: 2, why: "Las encuestas cortas reciben más respuestas." },
      { q: "Una encuesta anónima:", options: ["Pide nombres completos", "Es solo para el personal", "No tiene preguntas", "No tiene nombres ni datos que muestren quién respondió"], answer: 3, why: "Lo anónimo protege a los participantes." },
      { q: "¿Qué pregunta de encuesta normalmente debes quitar?", options: ["La situación migratoria, a menos que de verdad se necesite y se guarde con seguridad", "\"¿Qué tan seguido vino?\"", "\"¿Se sintió bienvenido?\"", "\"¿Qué podríamos mejorar?\""], answer: 0, why: "Los datos delicados ponen a la gente en riesgo." },
      { q: "¿Qué herramientas gratis pueden recoger respuestas de encuestas?", options: ["Una calculadora", "Google Forms o Microsoft Forms", "Una impresora", "Un cargador de teléfono"], answer: 1, why: "Las herramientas de formularios recogen y cuentan respuestas." },
      { q: "Un grupo pequeño se podría reconocer en tus resultados. Debes:", options: ["Nombrarlo", "Publicarlo", "Juntar o dejar fuera esos datos", "No hacer nada"], answer: 2, why: "Los grupos pequeños pueden identificar a las personas." },
      { q: "¿Quién debe contar las respuestas de la encuesta?", options: ["La IA adivinando", "Un donante", "Nadie", "Tu herramienta de formularios o tu hoja de cálculo"], answer: 3, why: "Las hojas de cálculo cuentan de forma confiable." },
      { q: "La IA se equivoca en las cuentas, así que debes:", options: ["Revisar tú cada porcentaje", "Confiar en ella", "Quitar todos los números", "Preguntarle dos veces y escoger una"], answer: 0, why: "Tú eres responsable de los números." },
      { q: "Un tema en las respuestas abiertas es:", options: ["Una combinación de colores", "Una idea que aparece una y otra vez", "Un tipo de donante", "El nombre de un programa"], answer: 1, why: "Los temas resumen las respuestas abiertas." },
      { q: "Un informe de impacto debe ser:", options: ["De 100 páginas", "Solo fotos", "De más o menos una página con la necesidad, lo que hiciste, lo que cambió, una historia y lecciones", "Solo un presupuesto"], answer: 2, why: "Una página clara es suficiente." },
      { q: "¿Qué instrucción mantiene honesto un informe de impacto?", options: ["\"Haz más grandes nuestros números.\"", "\"Inventa una historia de éxito.\"", "\"Agrega estadísticas impresionantes.\"", "\"Usando solo esta información, escribe...\""], answer: 3, why: "Limitar a la IA a tus datos evita afirmaciones inventadas." },
      { q: "Una historia en un informe de impacto necesita:", options: ["El permiso de la persona", "Su nombre completo y su dirección", "Una celebridad", "Nada"], answer: 0, why: "Las historias necesitan consentimiento." },
      { q: "¿Quién debe leer el informe de impacto antes de que salga?", options: ["Nadie", "Un colega", "Solo la IA", "Un competidor"], answer: 1, why: "Una segunda lectura encuentra errores." }
    ]
  }
};

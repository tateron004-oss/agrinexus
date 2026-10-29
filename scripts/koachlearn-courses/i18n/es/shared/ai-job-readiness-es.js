"use strict";

// Koach Learn course (shared), Spanish translation of "AI for Job Readiness and Career Development". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-job-readiness-es",
  lang: "es",
  translationOf: "ai-job-readiness",
  category: "Re-Entry",
  name: "IA para prepararte para el empleo y crecer en tu carrera",
  skills: "Encontrar tus habilidades, Escribir un currículum con IA, Adaptarlo a una oferta de empleo, Escribir una carta de presentación, Practicar entrevistas con IA, Buscar empleo de forma segura",
  outcome: "usar un asistente de IA gratuito para convertir tu experiencia en un currículum de una página adaptado a una oferta de empleo real, escribir una carta de presentación corta, practicar en voz alta las respuestas de una entrevista y postularte de forma segura evitando las estafas de empleo.",
  about: [
    "Conseguir un empleo requiere un currículum, una solicitud, una entrevista y mucha confianza. Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini pueden ayudarte en cada paso, sobre todo si tienes periodos sin trabajo, antecedentes o una experiencia que no parece un currículum “normal”.",
    "Este curso es para personas que vuelven de prisión, personas que buscan empleo en programas de capacitación laboral, quienes cambian de carrera y jóvenes que buscan su primer empleo. Cuenta la experiencia de trabajo dentro de prisión, en el ejército, cuidando a alguien, como voluntario o en trabajos por tu cuenta.",
    "Armarás tu propio kit de empleo paso a paso. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. No pongas datos privados en la IA: nada de números del Seguro Social, de identificación, de caso ni de recluso."
  ],
  finalTask: "Busca una oferta de empleo real a la que podrías postularte. Con un asistente de IA, arma un currículum de una página adaptado a ella, una carta de presentación de menos de 200 palabras y respuestas a cinco preguntas probables de la entrevista, incluida una sobre un periodo sin trabajo o tus antecedentes si te aplica. Practica las respuestas en voz alta, revisa la oferta con las señales de estafa y postúlate o déjala lista para enviar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos que vuelven a casa después de estar en prisión (reinserción) y que buscan trabajo, a menudo con periodos sin trabajo en su historial y antecedentes que explicar. Muchos tienen una buena experiencia laboral de empleos en prisión, del servicio militar, del cuidado de otras personas o de trabajos informales.",
    startingPoint: "Saben hacer llamadas y enviar mensajes de texto en un teléfono sencillo; algunos tienen una cuenta de correo y han probado un asistente de IA. Muchos no tienen un currículum al día, no han tenido una entrevista reciente y no saben bien cómo hablar de sus antecedentes.",
    gap: "Un empleo estable es uno de los apoyos más fuertes para volver a casa con éxito, pero ahora las solicitudes se hacen en línea y los empleadores esperan un currículum adaptado y respuestas seguras en la entrevista. Las personas necesitan convertir su experiencia real en materiales para buscar empleo con ayuda de la IA, responder con honestidad sobre los periodos sin trabajo y evitar las estafas de empleo dirigidas a quienes necesitan trabajar pronto.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 5.º a 6.º grado)",
      "Aparatos: puede que solo tengan un teléfono sencillo o una computadora con tiempo limitado en la biblioteca o en un centro de empleo",
      "Tiempo: lecciones de 5 minutos que caben entre citas y el trabajo",
      "Privacidad: nada de números del Seguro Social, de caso o de recluso, ni datos bancarios en las herramientas de IA o en el currículum",
      "Las reglas sobre antecedentes varían según el estado y la ciudad; las personas revisan el departamento de trabajo de su estado o un grupo de ayuda legal para la reinserción, y siguen sus propias condiciones de libertad condicional o probatoria"
    ],
    prerequisites: "Ninguno. \"Introducción a la IA y a la confianza digital\" es un buen primer curso para quienes son nuevos en la IA."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tu experiencia de trabajo, capacitación, voluntariado y vida, dentro o fuera", action: "hacer la lista de tus habilidades laborales con palabras de empleador, con un ejemplo verdadero de cada una", standard: "quedándote solo con las habilidades que son ciertas para ti" },
    { id: "O2", condition: "Con una oferta de empleo real y una plantilla gratuita", action: "crear un currículum de una página adaptado al empleo, con viñetas que empiezan con verbos de acción y números", standard: "con cada palabra verdadera y sin número del Seguro Social, fecha de nacimiento ni foto" },
    { id: "O3", condition: "Para la misma oferta de empleo", action: "escribir una carta de presentación en tres párrafos cortos", standard: "de menos de 200 palabras y que suene como tú cuando la lees en voz alta" },
    { id: "O4", condition: "Usando un asistente de IA como entrevistador de práctica", action: "responder en voz alta cinco preguntas comunes de entrevista, usando STAR en las preguntas de \"cuéntame de una vez que...\"", standard: "sin leer tus notas" },
    { id: "O5", condition: "Si tienes un periodo sin trabajo o antecedentes", action: "preparar una respuesta corta y honesta que pase a por qué estás listo ahora", standard: "usando solo datos que te sientas cómodo compartiendo, dicha con calma en voz alta" },
    { id: "O6", condition: "Cuando buscas empleo y te postulas", action: "encontrar ofertas en sitios de confianza, llevar el control de cada solicitud y revisar cada oferta en busca de señales de estafa", standard: "sin dar números bancarios ni del Seguro Social antes de una oferta real" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar tus documentos para el empleo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar las habilidades que ya tienes",
          minutes: 5,
          goal: "Convertir tu experiencia de vida y de trabajo en una lista de habilidades laborales.",
          text: [
            "La mayoría de las personas tiene más habilidades de las que cree. Trabajar en la cocina, la lavandería o el taller de mantenimiento de una prisión, el servicio militar, cuidar a un familiar, ser voluntario en la iglesia, cortar el pelo o arreglar autos a los vecinos: todo eso desarrolla habilidades que buscan los empleadores.",
            "Pide a un asistente de IA que te ayude a nombrarlas: “Trabajé 3 años en una cocina grande preparando comidas para 500 personas al día y capacité a trabajadores nuevos. ¿Qué habilidades laborales muestra eso? Usa las palabras que usan los empleadores”. Te podría dar: seguridad alimentaria, trabajar con presión de tiempo, capacitar a otros, inventario, trabajo en equipo.",
            "Haz una lista maestra de habilidades con un ejemplo de cada una. No dejes que la IA agregue habilidades que de verdad no tienes. Todo lo que pongas en tu currículum debe ser cierto, porque te lo pueden preguntar en la entrevista."
          ],
          steps: ["Haz una lista de cada trabajo, capacitación, voluntariado y responsabilidad que has tenido, dentro o fuera.", "Para cada uno, pregunta a la IA qué habilidades muestra, con palabras de empleador.", "Quédate solo con las habilidades que son ciertas para ti.", "Escribe un ejemplo real de cada habilidad."],
          words: [["Habilidad transferible", "una habilidad de un lugar que sirve en otro."], ["Habilidad blanda", "una habilidad para tratar con la gente, como el trabajo en equipo, la responsabilidad o la comunicación."], ["Habilidad técnica", "una capacidad concreta, como manejar un montacargas, cocinar o usar Excel."]],
          slides: [
            { title: "Toda experiencia cuenta", bullets: ["Trabajo dentro o fuera", "Ejército, cuidado de familiares, voluntariado", "Trabajos para los vecinos"] },
            { title: "Pide a la IA que nombre las habilidades", bullets: ["Describe qué hiciste y para cuántas personas", "Pide palabras de empleador"] },
            { title: "Que sea cierto", bullets: ["Quita las habilidades que no tienes", "Un ejemplo real de cada una", "Te pueden preguntar por cualquiera"] }
          ],
          tryIt: "Describe a un asistente de IA tres cosas que has hecho y pregúntale qué habilidades laborales muestran. Escribe una lista maestra de al menos ocho habilidades ciertas, cada una con un ejemplo.",
          youCanNow: "convertir tu experiencia en una lista real de habilidades laborales con el lenguaje de los empleadores.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una habilidad transferible?", options: ["Una habilidad que solo puedes usar en un empleo", "Una habilidad de un lugar que sirve en otro", "Una habilidad que pagas por aprender", "Una habilidad que solo tienen los gerentes"], answer: 1, why: "Las habilidades transferibles, como capacitar a otros, pasan de un lugar a otro." },
            { objective: "O1", q: "Arreglaste carros de tus vecinos durante años sin sueldo. ¿Qué haces con esa experiencia?", options: ["Dejarla fuera; no era un empleo de verdad", "Decir que eras un mecánico con licencia", "Esperar a que un entrevistador pregunte por ella", "Preguntarle a la IA qué habilidades muestra y anotar las verdaderas con un ejemplo"], answer: 3, why: "El trabajo informal da habilidades reales; anota solo las que son ciertas, con un ejemplo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir un currículum de una página con IA",
          minutes: 6,
          goal: "Armar un currículum limpio de una página adaptado a una oferta de empleo real.",
          text: [
            "Un currículum es un resumen de una página de tus habilidades, tu experiencia y tu formación. Un diseño sencillo funciona mejor: nombre y contacto, un resumen de dos líneas, habilidades, experiencia, y estudios o capacitación. Usa una plantilla gratuita de Google Docs o Microsoft Word.",
            "Adáptalo a cada empleo. Pega la oferta (no tus datos privados) en la IA y pregunta: “¿Qué habilidades y palabras clave busca este empleo? ¿Cuáles de mis habilidades coinciden?”. Luego pídele que escriba viñetas a partir de tus ejemplos que empiecen con verbos de acción e incluyan números: “Preparé comidas para 500 personas al día cumpliendo las normas de seguridad alimentaria”.",
            "Para el trabajo que hiciste estando en prisión, puedes poner el tipo de institución o el empleador como te sugiera tu consejero de reinserción, por ejemplo el departamento de correccionales del estado, y enfocarte en las habilidades. Nunca pongas tu número del Seguro Social, tu fecha de nacimiento ni una foto en un currículum de EE. UU."
          ],
          steps: ["Abre una plantilla gratuita de currículum en Google Docs o Word.", "Pega la oferta en la IA y pregunta qué palabras clave busca.", "Pide a la IA viñetas con verbos de acción y números a partir de tus ejemplos reales.", "Llena la plantilla y mantenlo en una página.", "Revisa que cada palabra sea cierta y esté bien escrita."],
          words: [["Currículum", "un resumen de una página de tus habilidades, tu experiencia y tu formación."], ["Palabra clave", "una palabra importante de la oferta que buscan los empleadores y sus programas."], ["Adaptar", "cambiar tu currículum para que encaje con un empleo concreto."]],
          slides: [
            { title: "Diseño sencillo de una página", bullets: ["Nombre, contacto, resumen de dos líneas", "Habilidades y experiencia", "Estudios o capacitación"] },
            { title: "Adáptalo al empleo", bullets: ["Pega la oferta en la IA", "Encuentra las palabras clave que coinciden", "Verbos de acción y números"] },
            { title: "Que sea seguro y cierto", bullets: ["Sin Seguro Social, fecha de nacimiento ni foto", "Pregunta a tu consejero cómo poner el trabajo en prisión", "Revisa cada palabra"] }
          ],
          tryIt: "Busca una oferta de empleo real. Usa la IA para encontrar sus palabras clave y escribe cinco viñetas a partir de tus ejemplos reales. Ponlas en una plantilla de currículum de una página.",
          youCanNow: "armar con ayuda de la IA un currículum de una página adaptado a una oferta de empleo real.",
          quickCheck: [
            { objective: "O2", q: "¿Qué debes pegar en la IA para adaptar tu currículum?", options: ["La oferta de empleo", "Tu número del Seguro Social", "Tu número de caso", "Tus datos bancarios"], answer: 0, why: "Pega la oferta de empleo, no tus datos privados, para que la IA encuentre las palabras clave." },
            { objective: "O2", q: "Tu currículum tiene una página y media para un empleo de nivel inicial. ¿Qué haces?", options: ["Hacer la letra diminuta", "Agregar más páginas", "Recortarlo a las viñetas más fuertes que coinciden con el empleo, en una página", "Agregar una foto"], answer: 2, why: "La mayoría de los currículums de nivel inicial deben caber en una página, centrados en lo que pide el empleo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escribir una carta de presentación corta",
          minutes: 5,
          goal: "Escribir una carta de presentación de menos de 200 palabras que suene como tú.",
          text: [
            "Una carta de presentación es una carta corta que dice por qué quieres este empleo y por qué encajas bien. Muchos empleos no la exigen, pero una buena carta te puede hacer destacar.",
            "Usa tres párrafos cortos: por qué este empleo y esta empresa, dos habilidades que coinciden con lo que necesitan con un ejemplo rápido, y un agradecimiento con cómo contactarte. Pide a la IA: “Escribe una carta de presentación de menos de 200 palabras para esta oferta usando estas dos habilidades y ejemplos. Amable, segura, con palabras sencillas”.",
            "Luego hazla tuya. Cambia cualquier frase que tú nunca dirías. Agrega un detalle real de por qué quieres trabajar ahí. Léela en voz alta: si no suena como tú, cámbiala otra vez."
          ],
          steps: ["Párrafo 1: por qué este empleo y esta empresa.", "Párrafo 2: dos habilidades que coinciden, con ejemplos.", "Párrafo 3: agradecimiento y cómo contactarte.", "Pide a la IA un borrador de menos de 200 palabras.", "Edítala para que suene como tú y léela en voz alta."],
          words: [["Carta de presentación", "una carta corta que se envía con el currículum y explica por qué encajas en el empleo."]],
          slides: [
            { title: "Tres párrafos cortos", bullets: ["Por qué este empleo", "Dos habilidades que coinciden, con ejemplos", "Agradecimiento y contacto"] },
            { title: "Que la IA haga el borrador", bullets: ["Menos de 200 palabras", "Amable, segura, palabras sencillas"] },
            { title: "Hazla tuya", bullets: ["Cambia las frases que nunca dirías", "Agrega un detalle real", "Léela en voz alta"] }
          ],
          tryIt: "Escribe con la IA una carta de presentación para tu oferta, mantenla en menos de 200 palabras y edítala hasta que suene como tú al leerla en voz alta.",
          youCanNow: "escribir con ayuda de la IA una carta de presentación corta y personal.",
          quickCheck: [
            { objective: "O3", q: "¿Qué va en el segundo párrafo de la carta de presentación?", options: ["Tu fecha de nacimiento", "Lo que has ganado en otros empleos", "Solo un agradecimiento", "Dos habilidades que coinciden con el empleo, con un ejemplo rápido"], answer: 3, why: "El párrafo 2 da dos habilidades que coinciden, con ejemplos." },
            { objective: "O3", q: "La carta de la IA dice \"Estoy sumamente entusiasmado por potenciar mis sinergias\". ¿Qué haces?", options: ["Dejarlo; suena inteligente", "Cambiarlo por palabras que de verdad dirías", "Hacerla más larga", "Enviarla sin leerla"], answer: 1, why: "Cambia cualquier frase que nunca dirías para que la carta suene como tú." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Preparar tus documentos para el empleo",
        questions: [
          { objective: "O1", q: "Capacitaste a trabajadores nuevos en la cocina de una prisión. ¿Qué habilidad muestra eso?", options: ["Manejar un montacargas", "Contabilidad", "Capacitar a otros", "Ninguna"], answer: 2, why: "Capacitar a trabajadores nuevos es una habilidad transferible." },
          { objective: "O1", q: "La IA agrega “habla inglés con fluidez” a tus habilidades, pero no es así. ¿Qué haces?", options: ["Quitarlo", "Dejarlo", "Aprender inglés antes de la entrevista", "Agregar más idiomas"], answer: 0, why: "Todo lo que va en un currículum debe ser cierto." },
          { objective: "O2", q: "¿Qué NO debe ir en un currículum de EE. UU.?", options: ["Tus habilidades", "Tu experiencia laboral", "Tu número de teléfono", "Tu número del Seguro Social"], answer: 3, why: "Los números privados no van en el currículum." },
          { objective: "O2", q: "¿Qué significa adaptar un currículum?", options: ["Coser ropa", "Cambiarlo para que encaje con una oferta concreta", "Hacerlo de tres páginas", "Usar el mismo currículum para todos los empleos"], answer: 1, why: "Los currículums adaptados coinciden con las palabras clave del empleo." },
          { objective: "O3", q: "¿Qué tan larga debe ser la carta de presentación de este curso?", options: ["Cinco páginas", "Menos de 200 palabras", "Una palabra", "Más de 1,000 palabras"], answer: 1, why: "Las cartas cortas sí se leen." }
        ]
      }
    },
    {
      name: "Capítulo 2: Entrevistas y búsqueda de empleo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Practicar entrevistas con IA",
          minutes: 6,
          goal: "Usar la IA como entrevistador de práctica y mejorar tus respuestas.",
          text: [
            "La IA puede hacer de entrevistador. Pide: “Estás contratando para este empleo [pega la oferta]. Hazme una pregunta de entrevista a la vez. Después de que responda, dime una cosa que hice bien y una que puedo mejorar”. Muchas apps de IA te dejan hablar en voz alta, lo que es una práctica excelente.",
            "Usa el método STAR (siglas en inglés de Situación, Tarea, Acción, Resultado) para las preguntas de “cuéntame de una vez que...”: “En la cocina (situación) teníamos que servir 500 comidas en una hora (tarea). Armé una línea de preparación y capacité a dos trabajadores nuevos (acción). Terminamos a tiempo todos los días de ese mes (resultado)”.",
            "Prepara cinco preguntas comunes: háblame de ti, por qué quieres este empleo, una fortaleza, una vez que resolviste un problema, y ¿tienes alguna pregunta para nosotros? Practica hasta que puedas responder sin leer."
          ],
          steps: ["Pega la oferta y pide a la IA que te entreviste con una pregunta a la vez.", "Responde en voz alta o escribiendo.", "Usa STAR en las preguntas de “cuéntame de una vez que...”.", "Pide una fortaleza y una mejora después de cada respuesta.", "Practica cinco preguntas hasta que no necesites notas."],
          words: [["Método STAR", "una forma de responder: Situación, Tarea, Acción, Resultado."], ["Entrevista de práctica", "una entrevista para practicar."]],
          slides: [
            { title: "La IA como entrevistador de práctica", bullets: ["Una pregunta a la vez", "Comentarios: una fortaleza, una mejora", "Practica en voz alta si puedes"] },
            { title: "Respuestas STAR", bullets: ["Situación y Tarea", "Acción: lo que hiciste", "Resultado: lo que pasó"] },
            { title: "Cinco preguntas para preparar", bullets: ["Háblame de ti; por qué este empleo", "Una fortaleza; un problema que resolviste", "Tus preguntas para ellos"] }
          ],
          tryIt: "Haz una entrevista de práctica con la IA para tu oferta. Responde cinco preguntas en voz alta usando STAR donde encaje, y anota los comentarios.",
          youCanNow: "practicar entrevistas con IA y responder con el método STAR.",
          quickCheck: [
            { objective: "O4", q: "En el método STAR, ¿qué significa \"Resultado\"?", options: ["El nombre de tu puesto", "El problema que tuviste", "Lo que pasó gracias a lo que hiciste", "La pregunta que te hicieron"], answer: 2, why: "El resultado es lo que logró tu acción, como terminar a tiempo todos los días." },
            { objective: "O4", q: "Solo puedes responder \"Háblame de ti\" leyendo tus notas. ¿Qué haces?", options: ["Practicarlo en voz alta con la IA hasta que puedas responder sin notas", "Saltarte esa pregunta en la entrevista", "Memorizar un discurso largo que escribió la IA", "Llevar las notas y leerlas"], answer: 0, why: "Practica en voz alta hasta que puedas responder sin leer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Hablar con confianza de un periodo sin trabajo o de tus antecedentes",
          minutes: 5,
          goal: "Preparar una respuesta corta, honesta y mirando hacia adelante sobre un periodo sin trabajo o tus antecedentes.",
          text: [
            "Los periodos sin trabajo pasan: prisión, enfermedad, cuidar a alguien, mudanzas militares, despidos. Lo que más quieren saber los empleadores es que estás listo ahora. Prepara una respuesta corta: sé honesto, sé breve, muestra lo que aprendiste o hiciste, y pasa a por qué estás listo para este empleo.",
            "Ejemplo: “Cometí un error y cumplí una condena. Mientras estuve ahí saqué mi certificado de manipulador de alimentos y llevé la línea de la cocina. Estoy listo para traer esa ética de trabajo aquí”. Pide a la IA que te ayude a acortar y afirmar tu respuesta, pero usa solo los datos que te sientas cómodo compartiendo, y deja fuera números de caso y detalles.",
            "Conoce tus apoyos. Muchos estados y ciudades de EE. UU. tienen reglas de “oportunidad justa” o “ban the box” sobre cuándo los empleadores pueden preguntar por los antecedentes; consulta el departamento de trabajo de tu estado o un grupo de asistencia legal para la reinserción. El Programa Federal de Fianzas (Federal Bonding Program) ofrece fianzas de fidelidad gratuitas a los empleadores que contratan a personas en riesgo, que cubren los primeros seis meses. Algunos empleadores también pueden calificar para el Crédito Fiscal por Oportunidad de Trabajo (WOTC); revisa la página del WOTC del IRS (la agencia de impuestos de EE. UU.) para ver su situación actual y los grupos que cubre."
          ],
          steps: ["Escribe el hecho honesto en una oración.", "Agrega lo que aprendiste o hiciste desde entonces.", "Agrega por qué estás listo para este empleo.", "Pide a la IA que lo haga más corto y firme.", "Practícalo en voz alta hasta que te salga con calma."],
          words: [["Contratación con oportunidad justa", "reglas o prácticas que dan a las personas con antecedentes una evaluación justa antes de preguntar por su pasado."], ["Fianza de fidelidad", "un seguro que protege al empleador contra pérdidas por la deshonestidad de un empleado."]],
          slides: [
            { title: "Una respuesta corta y fuerte", bullets: ["Honesta y breve", "Lo que aprendiste o hiciste", "Por qué estás listo ahora"] },
            { title: "Usa la IA con cuidado", bullets: ["Acorta y afirma tus palabras", "Solo los datos que eliges compartir", "Sin números de caso"] },
            { title: "Conoce tus apoyos", bullets: ["Reglas de oportunidad justa: consulta tu estado", "Programa Federal de Fianzas: fianzas gratis, primeros 6 meses", "WOTC: revisa la página del IRS para ver su situación actual"] }
          ],
          sources: [{ name: "Programa Federal de Fianzas (The Federal Bonding Program)", url: "https://bonds4jobs.com/" }, { name: "Departamento de Trabajo de EE. UU.: Crédito Fiscal por Oportunidad de Trabajo", url: "https://www.dol.gov/agencies/eta/wotc" }, { name: "IRS: Crédito Fiscal por Oportunidad de Trabajo", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" }],
          tryIt: "Escribe una respuesta de tres oraciones sobre un periodo sin trabajo o tus antecedentes (tuyos o de práctica). Usa la IA para ajustarla y luego dila en voz alta tres veces.",
          youCanNow: "responder con honestidad y confianza preguntas sobre un periodo sin trabajo o tus antecedentes, y nombrar los apoyos que pueden ayudar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué quieren saber sobre todo los empleadores cuando preguntan por un periodo sin trabajo?", options: ["Cada detalle de tu caso", "Tu número de caso", "Que estás listo para trabajar ahora", "Quién fue tu abogado"], answer: 2, why: "Los empleadores quieren saber sobre todo que estás listo ahora, así que sé breve y mira hacia adelante." },
            { objective: "O5", q: "Un entrevistador pregunta por tus antecedentes. ¿Cuál es la mejor respuesta?", options: ["\"Eso no es asunto suyo.\"", "Una historia larga con todos los detalles", "\"Nunca he tenido problemas.\"", "\"Cometí un error y cumplí una condena. Ahí saqué mi certificado de manipulador de alimentos, y estoy listo para trabajar.\""], answer: 3, why: "Honesta, breve y centrada en lo que aprendiste y en por qué estás listo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Buscar empleo y postularte de forma segura",
          minutes: 5,
          goal: "Encontrar ofertas de empleo reales, llevar el control de tus solicitudes y evitar las estafas de empleo.",
          text: [
            "Busca empleo en sitios de confianza, en las páginas de las empresas y en tu American Job Center local (un centro de empleo gratuito financiado por el gobierno de EE. UU.), que ofrece ayuda gratis para buscar empleo y capacitarte. Tu programa de reinserción, la oficina de veteranos o tu programa de capacitación laboral pueden tener ofertas y empleadores que contratan a personas con antecedentes.",
            "Anota cada solicitud en una hoja sencilla: empresa, empleo, fecha en que te postulaste, contacto, fecha de seguimiento. Haz un seguimiento más o menos una semana después con un correo corto y amable. La IA lo puede redactar.",
            "Cuidado con las estafas de empleo. La FTC advierte: los empleadores honestos no te cobran por darte un empleo; desconfía de una paga alta por poco trabajo, de que te pidan depositar un cheque y devolver dinero, de reenviar paquetes o de pagar por adelantado capacitaciones o certificados. Nunca des tu cuenta bancaria ni tu número del Seguro Social antes de tener una oferta real de una empresa real. Denuncia las estafas en ReportFraud.ftc.gov."
          ],
          steps: ["Busca en sitios de confianza, páginas de empresas y tu American Job Center.", "Anota cada solicitud en una hoja.", "Haz un seguimiento más o menos una semana después.", "Revisa cada oferta en busca de señales de estafa.", "Denuncia las estafas en ReportFraud.ftc.gov."],
          words: [["American Job Center", "una oficina gratuita financiada por el gobierno de EE. UU. que ayuda a buscar empleo y capacitarse."], ["Estafa de empleo", "una oferta de empleo falsa hecha para robar dinero o información."]],
          slides: [
            { title: "Dónde buscar", bullets: ["Sitios de empleo de confianza y páginas de empresas", "American Job Centers", "Programas de reinserción, de veteranos y de capacitación laboral"] },
            { title: "Anota y da seguimiento", bullets: ["Empresa, empleo, fecha, contacto", "Seguimiento en más o menos una semana"] },
            { title: "Señales de estafa de empleo (FTC)", bullets: ["Te cobran para darte el empleo", "Depositar un cheque y devolver dinero", "Reenviar paquetes; mucha paga por poco trabajo"] }
          ],
          sources: [{ name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }, { name: "CareerOneStop (Departamento de Trabajo de EE. UU.): encuentra un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarea final: termina tu currículum adaptado, tu carta de presentación y tus cinco respuestas de entrevista practicadas para tu oferta real. Revisa la oferta con las señales de estafa, agrégala a una hoja de seguimiento y postúlate o déjala lista para enviar.",
          youCanNow: "armar un kit de empleo con IA, ir a una entrevista con confianza y postularte de forma segura.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde puedes conseguir ayuda gratuita para buscar empleo y capacitarte?", options: ["En un American Job Center", "En un sitio web que cobra por postularte", "En un mensaje de texto de un número desconocido", "En un empleo que te pide reenviar paquetes"], answer: 0, why: "Los American Job Centers ofrecen ayuda gratuita para buscar empleo y capacitarte." },
            { objective: "O6", q: "Un \"empleo\" ofrece buen sueldo por poco trabajo y te pide tu cuenta bancaria antes de cualquier entrevista. ¿Qué haces?", options: ["Enviarla para empezar más rápido", "Enviar solo la mitad del número de cuenta", "No compartirla; revisar las señales de estafa y denunciarlo", "Pagar primero una cuota pequeña"], answer: 2, why: "Nunca des una cuenta bancaria antes de una oferta real; esto tiene señales de estafa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Entrevistas y búsqueda de empleo",
        questions: [
          { objective: "O4", q: "¿Qué significa STAR?", options: ["Empezar, Hablar, Preguntar, Descansar", "Habilidades, Capacitación, Premios, Referencias", "Sonreír, Agradecer, Responder, Volver", "Situación, Tarea, Acción, Resultado"], answer: 3, why: "STAR ordena las respuestas de “cuéntame de una vez que...”." },
          { objective: "O5", q: "Una buena respuesta sobre un periodo sin trabajo o tus antecedentes es:", options: ["Honesta, breve y enfocada en por qué estás listo ahora", "Una historia larga con todos los detalles", "Una mentira", "Negarte a responder de mala manera"], answer: 0, why: "Las respuestas cortas, honestas y que miran hacia adelante funcionan mejor." },
          { objective: "O5", q: "¿Qué ofrece el Programa Federal de Fianzas?", options: ["Autos gratis", "Dinero en efectivo a quienes buscan empleo", "Fianzas de fidelidad gratuitas a los empleadores que contratan a personas en riesgo", "La salida de prisión"], answer: 2, why: "Da a los empleadores fianzas gratuitas que cubren los primeros seis meses." },
          { objective: "O6", q: "Una oferta de empleo te pide pagar $150 de capacitación antes de empezar. Según la FTC, esto es:", options: ["Normal en todos los empleos", "Un impuesto", "Un bono", "Una señal de alerta de estafa"], answer: 3, why: "Los empleadores honestos no te cobran por darte un empleo." },
          { objective: "O6", q: "¿Cuándo debes hacer el seguimiento después de postularte?", options: ["Cada hora", "Nunca", "Más o menos una semana después, con un correo corto y amable", "Después de un año"], answer: 2, why: "Un seguimiento amable muestra interés." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para prepararte para el empleo y crecer en tu carrera",
    questions: [
      { objective: "O1", q: "Una habilidad transferible es:", options: ["Una habilidad que puedes vender", "Una habilidad de un lugar que sirve en otro", "Una habilidad solo para computadoras", "Una habilidad falsa"], answer: 1, why: "Las habilidades pasan de un lugar a otro." },
      { objective: "O1", q: "¿Cuál es una habilidad blanda?", options: ["La responsabilidad", "Manejar un montacargas", "Soldar", "La velocidad para escribir"], answer: 0, why: "Las habilidades blandas son para tratar con la gente." },
      { objective: "O1", q: "¿Qué experiencia cuenta como habilidad laboral?", options: ["Solo empleos de oficina pagados", "Solo la universidad", "Cuidar a un familiar", "Nada fuera de un empleo"], answer: 2, why: "Toda experiencia real desarrolla habilidades." },
      { objective: "O1", q: "¿Por qué todo lo de tu currículum debe ser cierto?", options: ["Te lo pueden preguntar en la entrevista", "La IA lo revisa", "No tiene por qué serlo", "Para que sea más largo"], answer: 0, why: "Los entrevistadores preguntan por lo que pones." },
      { objective: "O2", q: "Una palabra clave es:", options: ["Una contraseña", "Una llave de la oficina", "Tu nombre", "Una palabra importante de la oferta de empleo"], answer: 3, why: "Coincidir con las palabras clave ayuda a que noten tu currículum." },
      { objective: "O2", q: "¿Qué viñeta es la más fuerte?", options: ["“Hice cosas en la cocina”", "“Preparé comidas para 500 personas al día cumpliendo las normas de seguridad alimentaria”", "“Trabajé”", "“Comida”"], answer: 1, why: "Tiene verbo de acción, números y un resultado." },
      { objective: "O2", q: "Cuando le pides a la IA que adapte tu currículum, pega:", options: ["Tu número del Seguro Social", "La oferta de empleo, no tus datos privados", "Tu número de caso", "Tus datos bancarios"], answer: 1, why: "La oferta es lo que necesita la IA." },
      { objective: "O2", q: "¿Qué tan largo suele ser un currículum para la mayoría de los empleos de nivel inicial?", options: ["Diez páginas", "Media línea", "Lo más largo posible", "Una página"], answer: 3, why: "Una página es fácil de leer." },
      { objective: "O3", q: "Una carta de presentación explica:", options: ["Por qué quieres el empleo y por qué encajas", "La historia completa de tu vida", "Solo tu historial de sueldos", "Tus contraseñas"], answer: 0, why: "Te conecta con el empleo." },
      { objective: "O3", q: "Después de que la IA redacta tu carta de presentación, debes:", options: ["Enviarla sin leerla", "Agregar habilidades que no tienes", "Editarla y leerla en voz alta hasta que suene como tú", "Hacerla de 1,000 palabras"], answer: 2, why: "Tu carta debe sonar como tú." },
      { objective: "O4", q: "Una entrevista de práctica es:", options: ["Un empleo falso", "Una entrevista grosera", "Una entrevista a la que faltas", "Una entrevista para practicar"], answer: 3, why: "Practicar da confianza." },
      { objective: "O4", q: "En STAR, “Acción” significa:", options: ["El clima", "El nombre de la empresa", "Lo que hiciste", "Tu sueldo"], answer: 2, why: "La acción es tu parte de la historia." },
      { objective: "O4", q: "“¿Tienes alguna pregunta para nosotros?” La mejor respuesta es:", options: ["“No”.", "Hacer una pregunta bien pensada sobre el empleo o el equipo", "Solo “¿Cuándo puedo tomar vacaciones?”", "Irte"], answer: 1, why: "Las buenas preguntas muestran interés." },
      { objective: "O5", q: "Al hablar de tus antecedentes, debes:", options: ["Compartir con brevedad solo los datos con los que te sientes cómodo", "Dar tu número de caso", "Mentir", "Hablar de eso durante 20 minutos"], answer: 0, why: "Lo breve, honesto y que mira hacia adelante es lo mejor." },
      { objective: "O5", q: "Las reglas de oportunidad justa o “ban the box”:", options: ["Son iguales en todas partes", "No existen", "Cambian según el estado y la ciudad; consulta el departamento de trabajo de tu estado", "Prohíben toda revisión de antecedentes"], answer: 2, why: "Estas reglas cambian según el lugar." },
      { objective: "O5", q: "¿Dónde puedes revisar la situación actual del Crédito Fiscal por Oportunidad de Trabajo?", options: ["En la página del WOTC del IRS", "En una publicación de redes sociales", "En lo que adivine la IA", "En un anuncio de empleo"], answer: 0, why: "Las reglas y fechas de los créditos fiscales cambian; el IRS es la fuente." },
      { objective: "O6", q: "Los American Job Centers ofrecen:", options: ["Solo redacción de currículums pagada", "Préstamos", "Vivienda", "Ayuda gratuita para buscar empleo y capacitarse"], answer: 3, why: "Son centros gratuitos de ayuda laboral." },
      { objective: "O6", q: "Una hoja de seguimiento de empleos incluye:", options: ["Tus contraseñas", "Empresa, empleo, fecha de postulación, contacto y fecha de seguimiento", "Tu cuenta bancaria", "Nada"], answer: 1, why: "Llevar el control te mantiene organizado." },
      { objective: "O6", q: "Un “empleo” te pide depositar un cheque y devolver una parte. Esto es:", options: ["Un pago normal de nómina", "Una estafa de cheque falso", "Un bono", "Un reembolso de impuestos"], answer: 1, why: "La FTC la nombra como una estafa común." },
      { objective: "O6", q: "¿Cuándo está bien dar tu número de cuenta bancaria para la nómina?", options: ["En tu primer mensaje a cualquier reclutador", "En un comentario de una bolsa de empleo", "A cualquiera que lo pida", "Después de una oferta real de un empleador real y verificado"], answer: 3, why: "Compártelo para la nómina solo después de una oferta real y verificada." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Currículum adaptado",
        objective: "O2",
        notYet: "Tiene más de una página, no coincide con el empleo o incluye números privados.",
        meets: "Una página con las palabras clave del empleo, viñetas con verbos de acción y números, y sin números privados.",
        exceeds: "Cada viñeta se relaciona con una habilidad que pide la oferta de empleo."
      },
      {
        name: "Habilidades verdaderas",
        objective: "O1",
        notYet: "Una habilidad o una afirmación del currículum no es verdadera.",
        meets: "Cada habilidad es verdadera y tiene un ejemplo real que la respalda.",
        exceeds: "Las habilidades de empleos en prisión, del cuidado de otras personas o de trabajos informales están descritas con palabras de empleador."
      },
      {
        name: "Carta de presentación",
        objective: "O3",
        notYet: "Tiene más de 200 palabras, o parece una carta genérica de IA.",
        meets: "Tres párrafos cortos de menos de 200 palabras que suenan como la persona.",
        exceeds: "Incluye un detalle verdadero sobre por qué quiere trabajar ahí."
      },
      {
        name: "Respuestas de entrevista",
        objective: "O4",
        notYet: "Menos de cinco respuestas, o las respuestas se leen de las notas.",
        meets: "Cinco respuestas practicadas en voz alta, con STAR en las de \"cuéntame de una vez que...\".",
        exceeds: "Usa los comentarios de la IA para mejorar al menos dos respuestas."
      },
      {
        name: "Respuesta sobre el periodo sin trabajo o los antecedentes",
        objective: "O5",
        notYet: "La respuesta es larga, a la defensiva o falsa (si aplica).",
        meets: "Corta, honesta y termina con por qué la persona está lista ahora.",
        exceeds: "La dice con calma en voz alta y sin notas."
      },
      {
        name: "Solicitud segura",
        objective: "O6",
        notYet: "No se revisó la oferta de empleo en busca de señales de estafa.",
        meets: "Se revisó la oferta contra las señales de estafa y se lleva el control de la solicitud.",
        exceeds: "Hay una fecha de seguimiento fijada para más o menos una semana después."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se postulan al menos a tres empleos en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que consiguen una entrevista o una oferta de empleo en un plazo de 90 días",
      "Personas que dicen haber detectado y evitado una estafa de empleo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca, de un centro de empleo o del programa",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini) y una plantilla gratuita de currículum en Google Docs o Word",
      "Una oferta de empleo real a la que la persona podría postularse",
      "Papel y lápiz para la lista de habilidades y las notas de la entrevista",
      "Unos 60 minutos en total, en sesiones cortas, más tiempo para practicar"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" hechas en vivo.",
      "Trabaja con un consejero de reinserción o un American Job Center para que las personas reciban ayuda al anotar el trabajo que hicieron en prisión.",
      "Hagan entrevistas de práctica en parejas; deja que cada persona elija si practica frente a otros una pregunta sobre sus antecedentes.",
      "Nunca pidas a las personas que escriban números del Seguro Social, de caso o de recluso en las herramientas de IA; usen marcadores.",
      "Recuerda a quienes estén en libertad condicional o probatoria que sigan sus condiciones sobre el uso de internet, y califica la tarea final con la rúbrica, una fila en Todavía no a la vez."
    ]
  }
};

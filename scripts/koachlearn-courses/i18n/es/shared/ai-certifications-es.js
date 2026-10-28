"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI Certifications: Which to Get and How to Prepare". Rules: ../../../README.md (Translations).
// Certification names, fees and formats were checked on the providers' official pages on 27 October 2026 (see each lesson's sources). They change: the course tells students to re-check before registering.

module.exports = {
  id: "ai-certifications-es",
  lang: "es",
  translationOf: "ai-certifications",
  category: "Re-Entry",
  name: "Certificaciones de IA: cuál sacar y cómo prepararte",
  skills: "Elegir una certificación según una meta laboral, Leer la página oficial de un examen, Comparar costo y tiempo, Encontrar capacitación y exámenes de práctica gratuitos, Hacer un plan de estudio, Prepararte para el día del examen",
  outcome: "elegir un certificado o una certificación de IA que encaje con una meta laboral real, leer la página oficial del examen para encontrar el costo, el formato y las habilidades que evalúa, armar un plan de estudio con la capacitación oficial gratuita y prepararte para el día del examen.",
  about: [
    "Los certificados y las certificaciones muestran a los empleadores que tienes una habilidad, lo que puede ayudar mucho si tienes periodos sin trabajo, no tienes título o tienes antecedentes. En IA, las grandes empresas de tecnología y los grupos de capacitación ya ofrecen credenciales para principiantes.",
    "Este curso es para personas que vuelven de prisión, personas que buscan empleo en programas de capacitación laboral y quienes cambian de carrera. No enseña el contenido del examen. Te enseña a elegir la credencial correcta, a no malgastar dinero y a prepararte de forma inteligente.",
    "Los nombres, los precios y los detalles de los exámenes cambian a menudo, así que aprenderás a revisar la página oficial cada vez. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Elige una credencial de IA que encaje con una oferta de empleo real que te interese. De su página oficial, anota el nombre exacto, el proveedor, el costo, la duración y el formato del examen, las habilidades que evalúa, los requisitos de identificación y cuánto tiempo es válida. Luego haz un plan de estudio de cuatro semanas con capacitación oficial gratuita y al menos un examen de práctica, y reserva una sesión de práctica o una fecha de examen.",
  chapters: [
    {
      name: "Capítulo 1: Elegir la credencial correcta",
      lessons: [
        {
          title: "Certificados y certificaciones, y por qué importan",
          minutes: 4,
          goal: "Distinguir un certificado de un curso de una certificación con examen supervisado y explicar qué le muestra cada uno a un empleador.",
          text: [
            "Un certificado de finalización muestra que terminaste un curso. Una certificación suele significar que aprobaste un examen supervisado que evalúa tus habilidades. Los empleadores a menudo valoran más las certificaciones, pero un buen certificado también muestra esfuerzo y habilidades nuevas.",
            "Las credenciales de IA van desde el nivel principiante (“qué es la IA y cómo la uso en el trabajo”) hasta el técnico (“crear soluciones de IA en la nube”). Las de principiante ayudan en empleos de oficina, atención al cliente, ventas y administración. Las técnicas ayudan en empleos de informática y de la nube, y a menudo necesitan antes algo de programación o de conocimiento de la nube.",
            "Una credencial no garantiza un empleo. Funciona mejor con un currículum que muestre cómo usaste la habilidad, aunque sea en un proyecto pequeño. Combínala con práctica real."
          ],
          words: [["Certificado", "prueba de que terminaste un curso o programa."], ["Certificación", "una credencial que se gana aprobando un examen que evalúa tus habilidades."], ["Examen supervisado", "una prueba vigilada por una persona o una cámara para evitar trampas."], ["Credencial", "cualquier certificado, certificación o licencia que demuestra una habilidad."]],
          slides: [
            { title: "Certificado frente a certificación", bullets: ["Certificado: terminaste un curso", "Certificación: aprobaste un examen supervisado"] },
            { title: "Principiante frente a técnico", bullets: ["Principiante: usar la IA en el trabajo", "Técnico: crear soluciones de IA; puede pedir programación"] },
            { title: "No garantiza un empleo", bullets: ["Combínala con práctica real", "Muestra cómo usaste la habilidad"] }
          ],
          tryIt: "Escribe un empleo que quieras. Al lado, escribe si le va mejor una credencial de IA de principiante o una técnica, y por qué.",
          youCanNow: "distinguir un certificado de una certificación y elegir el nivel correcto para una meta laboral."
        },
        {
          title: "Un recorrido por credenciales de IA conocidas para principiantes",
          minutes: 6,
          goal: "Comparar varias credenciales de IA para principiantes por proveedor, costo, tiempo y nivel.",
          text: [
            "Estos datos se revisaron en las páginas oficiales en octubre de 2026; revísalos siempre otra vez antes de pagar. Google AI Essentials es un curso a tu propio ritmo de Google en Coursera, de menos de 5 horas, con certificado; en EE. UU. y Canadá cuesta $49 al mes después de una prueba gratuita de 7 días. Es para quienes quieren usar herramientas de IA en el trabajo.",
            "AWS Certified AI Practitioner es una certificación de nivel básico de Amazon Web Services: un examen de 90 minutos con 65 preguntas y un costo de $100. La certificación Generative AI Leader de Google Cloud no tiene requisitos previos: 90 minutos, de 50 a 60 preguntas, $99, válida por 3 años, en línea o en un centro de exámenes.",
            "Microsoft Certified: Azure AI Fundamentals ahora usa el examen AI-901, actualizado en abril de 2026. Su precio depende de tu país, la nota para aprobar es 700 y ahora pide algo de conocimiento de Python y Azure, así que es más técnico que antes. Microsoft ofrece una evaluación de práctica gratuita al iniciar sesión."
          ],
          words: [["Nivel básico", "el nivel de entrada de una serie de certificaciones."], ["Requisito previo", "algo que debes tener o saber antes de empezar."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Curso de Google en Coursera, menos de 5 horas", "EE. UU./Canadá: $49 al mes tras 7 días de prueba", "Certificado; usar la IA en el trabajo"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Certificación básica de AWS", "90 minutos, 65 preguntas, $100"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["Sin requisitos previos", "90 minutos, de 50 a 60 preguntas, $99", "Válida por 3 años"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["Actualizado en abril de 2026; el precio cambia según el país", "Nota para aprobar: 700; pide algo de Python", "Evaluación de práctica gratuita al iniciar sesión"] }
          ],
          sources: [{ name: "Grow with Google: Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud: Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn: Examen AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Abre la página oficial de dos de estas credenciales. Para cada una, escribe el nombre exacto, el proveedor, el costo, la duración y para quién es. Anota lo que haya cambiado desde que se escribió este curso.",
          youCanNow: "comparar credenciales de IA para principiantes usando sus páginas oficiales."
        },
        {
          title: "Elegir una credencial según un empleo y un presupuesto",
          minutes: 5,
          goal: "Elegir una credencial usando ofertas de empleo reales, tu presupuesto y tu tiempo.",
          text: [
            "Empieza por los empleos, no por las credenciales. Busca empleos que quieras y cuenta qué credenciales y habilidades aparecen en las ofertas. Si varias mencionan una plataforma de la nube, la credencial de esa plataforma puede valer la pena.",
            "Luego compara el costo total (el examen, el costo de repetirlo, cualquier capacitación), el tiempo para prepararte y tu nivel actual. Si eres completamente nuevo, un curso corto de principiante primero te puede ahorrar pagar un examen que repruebes.",
            "Busca ayuda para pagar. Los programas de capacitación laboral, los American Job Centers (centros de empleo gratuitos de EE. UU.), los programas de reinserción, los beneficios para veteranos, las bibliotecas y algunos empleadores pueden pagar la capacitación o los exámenes; algunos proveedores ofrecen descuentos o ayuda financiera. Pregunta antes de pagar, y nunca le pagues a alguien que “garantiza” que apruebes o que vende las respuestas del examen: es una estafa y te pueden anular la credencial."
          ],
          steps: ["Busca cinco ofertas de empleo que quieras.", "Cuenta qué credenciales y habilidades mencionan.", "Compara el costo total, el tiempo y el nivel de tus dos favoritas.", "Pregunta en tu programa de capacitación laboral o de reinserción si te la pueden pagar.", "Elige una."],
          words: [["Costo de repetición", "lo que pagas para volver a presentar un examen si no lo apruebas."], ["Ayuda financiera", "ayuda para pagar estudios o capacitación."]],
          slides: [
            { title: "Empieza por los empleos", bullets: ["Busca cinco ofertas de empleo", "Cuenta las credenciales que mencionan"] },
            { title: "Compara el costo total", bullets: ["Examen, repeticiones, capacitación", "Tiempo y tu nivel actual"] },
            { title: "Busca ayuda para pagar", bullets: ["Programas laborales, de reinserción y de veteranos", "Empleadores, bibliotecas, descuentos del proveedor", "Nunca pagues por un aprobado “garantizado”"] }
          ],
          tryIt: "Busca cinco ofertas de empleo que quieras y haz una lista de las credenciales de IA o de tecnología que mencionan. Elige una credencial y escribe su costo total y quién te podría ayudar a pagarla.",
          youCanNow: "elegir una credencial que encaje con empleos reales, tu presupuesto y tu tiempo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir la credencial correcta",
        questions: [
          { q: "¿Cuál es la diferencia principal entre un certificado y una certificación?", options: ["No hay diferencia", "Un certificado siempre vale más", "Una certificación suele exigir aprobar un examen supervisado", "Las certificaciones nunca tienen examen"], answer: 2, why: "Las certificaciones evalúan las habilidades con un examen vigilado." },
          { q: "Según la página de AWS, el examen AWS Certified AI Practitioner cuesta:", options: ["$100", "$1,000", "Es gratis", "$10"], answer: 0, why: "AWS indica un costo de $100." },
          { q: "¿La página de qué credencial dice que ahora pide algo de conocimiento de Python y Azure?", options: ["Google AI Essentials", "Ninguna tiene página", "Una tarjeta de manipulador de alimentos", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "La página del AI-901 menciona conocer algo de Python y Azure." },
          { q: "¿Por dónde debes empezar al elegir una credencial?", options: ["Por la más cara", "Por ofertas de empleo reales que quieras", "Por lo que recomiende un desconocido", "Por un anuncio cualquiera"], answer: 1, why: "Las ofertas de empleo muestran lo que quieren los empleadores." },
          { q: "Alguien te ofrece vender las respuestas del examen y te “garantiza” que apruebas. Esto es:", options: ["Un atajo inteligente", "Una estafa que puede hacer que te anulen la credencial", "Algo permitido", "Capacitación gratuita"], answer: 1, why: "Comprar respuestas es hacer trampa y muchas veces es una estafa." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prepararte y aprobar",
      lessons: [
        {
          title: "Leer la página oficial del examen",
          minutes: 5,
          goal: "Sacar los datos clave de la página oficial de un examen y ponerlos en una hoja de datos de una página.",
          text: [
            "La página oficial del examen es la única fuente en la que debes confiar para los datos del examen. Busca: el nombre exacto y el código del examen, el precio, la duración y la cantidad de preguntas, la nota para aprobar, los idiomas, cómo se puede presentar (en línea o en un centro de exámenes), las habilidades que mide y su peso, y cuánto tiempo es válida la credencial.",
            "La lista de habilidades que se miden, a veces llamada guía del examen o guía de estudio, es tu mapa. Si un tema es el 40% del examen, merece más o menos el 40% de tu tiempo de estudio.",
            "Revisa también las reglas: la identificación que piden (a menudo una identificación oficial vigente con foto y con el mismo nombre de tu inscripción), las reglas para el cuarto si presentas en línea, los plazos para cambiar la fecha y las reglas para repetirlo. Si tu situación con la identificación es complicada, resuélvela pronto."
          ],
          steps: ["Abre la página oficial del examen en el sitio del proveedor.", "Anota el nombre, el código, el precio, la duración, las preguntas y la nota para aprobar.", "Copia las habilidades que se miden con sus porcentajes.", "Anota las reglas de identificación, de presentación y de repetición.", "Guarda el enlace de la página y la fecha en que la revisaste."],
          words: [["Código del examen", "el código corto de un examen, como AI-901."], ["Habilidades que se miden", "la lista de temas que evalúa un examen, a menudo con porcentajes."], ["Nota para aprobar", "la calificación que necesitas para aprobar."]],
          slides: [
            { title: "Confía en la página oficial", bullets: ["Nombre, código, precio", "Duración, preguntas, nota para aprobar", "En línea o en un centro de exámenes"] },
            { title: "Las habilidades que se miden = tu mapa", bullets: ["Los temas y su peso", "40% del examen = 40% del tiempo de estudio"] },
            { title: "Revisa pronto las reglas", bullets: ["Identificación con foto y tu mismo nombre", "Reglas del cuarto si es en línea", "Reglas para cambiar la fecha y para repetir"] }
          ],
          tryIt: "Haz una hoja de datos de una página para la credencial que elegiste a partir de su página oficial, con las habilidades que se miden y sus porcentajes, las reglas de identificación y la fecha en que la revisaste.",
          youCanNow: "leer la página oficial de un examen y convertirla en una hoja de datos."
        },
        {
          title: "Armar un plan de estudio con capacitación gratuita e IA",
          minutes: 6,
          goal: "Hacer un plan de estudio de cuatro semanas con capacitación oficial gratuita, tutoría con IA y exámenes de práctica.",
          text: [
            "La mayoría de los proveedores ofrece capacitación gratuita. Microsoft Learn tiene rutas de aprendizaje gratuitas y una evaluación de práctica gratuita para muchos exámenes; AWS Skill Builder y Google también ofrecen aprendizaje gratuito. Empieza por ahí antes de pagar nada.",
            "Usa la IA como tutor, no para hacer trampa. Pide: “Explica [tema de la lista de habilidades] con palabras sencillas y un ejemplo de la vida real. Luego hazme cinco preguntas de opción múltiple y explícame mis errores”. Compara con la capacitación oficial todo lo que te parezca raro, porque la IA puede equivocarse o estar desactualizada.",
            "Planifica cuatro semanas: las semanas 1 a 3 cubren los temas según su peso en el examen, un poco cada día; la semana 4 es para exámenes de práctica y repasar los puntos débiles. Busca sacar una buena nota en el examen de práctica oficial antes de reservar el examen real."
          ],
          steps: ["Haz la lista de las habilidades que se miden y sus pesos.", "Encuentra la capacitación oficial gratuita de cada una.", "Planifica de 30 a 60 minutos al día en las semanas 1 a 3, primero los temas con más peso.", "Usa la IA para que te explique y te haga preguntas; compáralo con la capacitación oficial.", "Semana 4: exámenes de práctica y puntos débiles."],
          words: [["Ruta de aprendizaje", "un grupo de lecciones en orden sobre un tema."], ["Examen de práctica", "un examen de muestra que enseña cómo es el real."]],
          slides: [
            { title: "Primero la capacitación gratuita", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Exámenes de práctica gratuitos donde los haya"] },
            { title: "La IA como tutor", bullets: ["Explícalo con palabras sencillas y ejemplos", "Hazme preguntas y explica mis errores", "Compáralo con la capacitación oficial"] },
            { title: "Plan de cuatro semanas", bullets: ["Semanas 1 a 3: temas según su peso", "Semana 4: exámenes de práctica y puntos débiles", "Reserva cuando tus notas de práctica sean buenas"] }
          ],
          tryIt: "Escribe un plan de estudio de cuatro semanas para tu credencial. Luego pide a un asistente de IA que te explique un tema de la lista de habilidades y te haga cinco preguntas.",
          youCanNow: "armar un plan de estudio con capacitación gratuita, tutoría con IA y exámenes de práctica."
        },
        {
          title: "Prepararte para el día del examen y usar tu credencial",
          minutes: 5,
          goal: "Prepararte para el día del examen y agregar tu nueva credencial a tu currículum y tus perfiles.",
          text: [
            "Antes del día del examen, prueba tu equipo si lo vas a presentar en línea: la mayoría de los proveedores tiene una comprobación del sistema. Despeja tu escritorio y tu cuarto como dicen las reglas. Si es en un centro de exámenes, planifica cómo llegar y llega temprano con la identificación correcta.",
            "Durante el examen: lee cada pregunta dos veces, responde primero las fáciles, marca las difíciles para volver a ellas y no dejes ninguna en blanco, a menos que las reglas digan que las respuestas equivocadas restan puntos.",
            "Cuando apruebes, agrégala a tu currículum en una sección de “Certificaciones” con el nombre exacto, el proveedor y la fecha, y reclama la insignia digital que ofrezca el proveedor para compartirla en internet. Si no apruebas, lee el informe de resultados, estudia los puntos débiles y usa las reglas para repetir. Mucha gente aprueba en el segundo intento."
          ],
          steps: ["Haz la comprobación del sistema en línea o planifica cómo llegar.", "Prepara tu identificación y tu cuarto como piden las reglas.", "En el examen, lee dos veces, haz primero las fáciles y marca las difíciles.", "Cuando apruebes, agrégala a tu currículum con el nombre exacto, el proveedor y la fecha.", "Si no, estudia los puntos débiles del informe de resultados y repite."],
          words: [["Comprobación del sistema", "una prueba de que tu computadora, tu cámara y tu internet funcionan para un examen en línea."], ["Insignia digital", "una imagen en internet que demuestra que ganaste una credencial."], ["Informe de resultados", "los resultados que muestran cómo te fue en cada parte del examen."]],
          slides: [
            { title: "Antes del día del examen", bullets: ["En línea: haz la comprobación del sistema", "Centro de exámenes: planifica cómo llegar, llega temprano", "Identificación correcta, cuarto despejado"] },
            { title: "Durante el examen", bullets: ["Lee cada pregunta dos veces", "Primero las fáciles; marca las difíciles", "No dejes respuestas en blanco"] },
            { title: "Después del examen", bullets: ["Aprobaste: agrégala a tu currículum y reclama la insignia", "Todavía no: estudia los puntos débiles y repite"] }
          ],
          tryIt: "Tarea final: completa tu hoja de datos y tu plan de estudio de cuatro semanas, haz un examen de práctica oficial o un cuestionario con IA, y reserva una fecha para empezar a estudiar o para el examen. Escribe cómo aparecerá la credencial en tu currículum.",
          youCanNow: "elegir, prepararte para y usar una credencial de IA que encaje con tu meta laboral."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Prepararte y aprobar",
        questions: [
          { q: "¿Cuál es la fuente más confiable para el precio y el formato de un examen?", options: ["Una publicación en redes sociales", "La respuesta de un chat de IA", "Lo que recuerda un amigo", "La página oficial del examen del proveedor"], answer: 3, why: "Las páginas oficiales tienen los datos actuales." },
          { q: "Un tema es el 40% del examen. ¿Cuánto tiempo de estudio debe recibir?", options: ["Más o menos el 40%", "Nada", "El 5%", "Todo"], answer: 0, why: "El tiempo de estudio debe seguir el peso en el examen." },
          { q: "¿Cómo debes usar la IA mientras estudias?", options: ["Para que presente el examen por ti", "Para encontrar respuestas filtradas", "Como un tutor que te explica y te hace preguntas, comparándolo con la capacitación oficial", "No usarla para nada"], answer: 2, why: "La IA puede ser tutor, pero debes revisarla y nunca hacer trampa." },
          { q: "¿Qué debes hacer antes de un examen supervisado en línea?", options: ["Nada", "Invitar a amigos a ayudarte", "Dejar notas abiertas en tu escritorio", "Hacer la comprobación del sistema del proveedor"], answer: 3, why: "Una comprobación del sistema evita problemas técnicos." },
          { q: "No aprobaste. ¿Cuál es el mejor siguiente paso?", options: ["Rendirte para siempre", "Comprar las respuestas del examen", "Estudiar los puntos débiles del informe de resultados y repetir", "Mentir en tu currículum"], answer: 2, why: "Mucha gente aprueba en el segundo intento estudiando con enfoque." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Certificaciones de IA: cuál sacar y cómo prepararte",
    questions: [
      { q: "Un certificado de finalización muestra que:", options: ["Aprobaste un examen supervisado", "Terminaste un curso", "Tienes licencia para ejercer como abogado", "Nada"], answer: 1, why: "Los certificados muestran que terminaste un curso." },
      { q: "Un examen supervisado es:", options: ["Vigilado por una persona o una cámara para evitar trampas", "Un cuestionario a libro abierto con amigos", "Una encuesta", "Una entrevista de trabajo"], answer: 0, why: "La supervisión mantiene justo el examen." },
      { q: "¿Una credencial garantiza un empleo?", options: ["Sí, siempre", "Solo los lunes", "No, combínala con práctica real y un buen currículum", "Solo si es cara"], answer: 2, why: "Las credenciales ayudan, pero no garantizan empleos." },
      { q: "Según la página de Google, ¿en qué plataforma se ofrece Google AI Essentials?", options: ["Coursera", "Un banco", "Un canal de televisión", "Una compañía de teléfonos"], answer: 0, why: "Google lo ofrece en Coursera." },
      { q: "Según Google, ¿cuánto dura el curso Google AI Essentials?", options: ["Cuatro años", "Cinco minutos", "Dos semestres", "Menos de 5 horas"], answer: 3, why: "Google indica menos de 5 horas, a tu propio ritmo." },
      { q: "¿Cuánto dura el examen AWS Certified AI Practitioner?", options: ["3 días", "8 horas", "10 minutos", "90 minutos"], answer: 3, why: "AWS indica 90 minutos." },
      { q: "¿Qué requisitos previos indica la certificación Generative AI Leader de Google Cloud?", options: ["Un título en informática", "Ninguno", "Cinco años programando", "Otra certificación de Google"], answer: 1, why: "Google no indica requisitos previos." },
      { q: "Según Google Cloud, ¿cuánto tiempo es válida la certificación Generative AI Leader?", options: ["Para siempre", "1 mes", "10 años", "3 años"], answer: 3, why: "Google indica una validez de 3 años." },
      { q: "El examen de Microsoft Certified: Azure AI Fundamentals ahora es:", options: ["AI-901", "AZ-104", "No hay examen", "PMP"], answer: 0, why: "Microsoft indica AI-901 como el examen requerido." },
      { q: "El precio del examen Azure AI Fundamentals:", options: ["Siempre es gratis", "Es de $5 en todas partes", "Depende del país donde lo presentes", "Se paga con tarjetas de regalo"], answer: 2, why: "Microsoft fija el precio de los exámenes según el país o la región." },
      { q: "¿Por qué volver a revisar las páginas oficiales antes de pagar?", options: ["Las páginas nunca cambian", "Para perder tiempo", "No hace falta", "Los nombres, los precios y los detalles cambian"], answer: 3, why: "Las credenciales se actualizan a menudo." },
      { q: "Al elegir una credencial, empieza por:", options: ["El logo más llamativo", "El examen más largo", "Ofertas de los empleos que quieres", "Elegir al azar"], answer: 2, why: "Lo que necesitan los empleadores guía la elección." },
      { q: "El costo total de una credencial incluye:", options: ["Solo el examen", "El examen, las repeticiones y la capacitación", "Nada", "Tu alquiler"], answer: 1, why: "Planifica todos los costos." },
      { q: "¿Quién te podría ayudar a pagar la capacitación o los exámenes?", options: ["Programas laborales, de reinserción o de veteranos, o un empleador", "Nunca nadie", "Los estafadores", "Alguien que te llama al azar"], answer: 0, why: "Muchos programas pagan capacitación." },
      { q: "La lista de habilidades que se miden es:", options: ["Una lista de vacantes", "Las respuestas del examen", "Tu mapa de qué estudiar", "Opcional de leer"], answer: 2, why: "Muestra lo que evalúa el examen." },
      { q: "¿Qué problema de identificación debes resolver pronto?", options: ["Que tu identificación con foto tenga el mismo nombre que tu inscripción", "Tu color favorito", "La funda de tu teléfono", "La fuente de tu correo"], answer: 0, why: "Si el nombre no coincide, te pueden impedir presentar el examen." },
      { q: "¿Dónde debes buscar primero la capacitación?", options: ["Solo en cursos intensivos caros y no oficiales", "En sitios de respuestas filtradas", "En ningún lado", "En la capacitación oficial gratuita del proveedor"], answer: 3, why: "La capacitación oficial gratuita coincide con el examen." },
      { q: "La IA explica un tema distinto de la capacitación oficial. Debes:", options: ["Confiar en la IA", "Confiar en la capacitación oficial", "Saltarte el tema", "Denunciar al proveedor"], answer: 1, why: "La IA puede equivocarse o estar desactualizada." },
      { q: "Durante el examen, una buena estrategia es:", options: ["Pasar todo el tiempo en la pregunta 1", "Responder primero las fáciles y marcar las difíciles", "Dejar muchas en blanco", "Adivinar sin leer"], answer: 1, why: "Así usas bien tu tiempo." },
      { q: "Cuando apruebes, pon la credencial en tu currículum con:", options: ["Una nota inventada", "Solo “cosas de IA”", "Nada", "El nombre exacto, el proveedor y la fecha"], answer: 3, why: "Los datos exactos se pueden comprobar y se ven profesionales." }
    ]
  }
};

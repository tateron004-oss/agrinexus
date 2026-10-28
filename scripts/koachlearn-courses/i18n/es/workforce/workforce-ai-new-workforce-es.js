"use strict";

// Koach Learn course (Spanish translation of workforce-ai-new-workforce). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Job outlook data is not quoted; students are sent to the official source (bls.gov Occupational Outlook Handbook) to look up their own field.

const BLS_OOH = { name: "Oficina de Estadísticas Laborales de EE. UU.: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" };
const CAREERONESTOP = { name: "CareerOneStop (Departamento de Trabajo de EE. UU.): encontrar formación y American Job Centers", url: "https://www.careeronestop.org/" };

module.exports = {
  id: "workforce-ai-new-workforce-es",
  lang: "es",
  translationOf: "workforce-ai-new-workforce",
  category: "Workforce Development",
  name: "La IA en la nueva fuerza laboral",
  skills: "Entender cómo la IA cambia las tareas, Dividir tu empleo en tareas, Detectar las tareas en las que la IA puede ayudar, Encontrar información confiable sobre las perspectivas de empleo, Armar un plan de mejora de habilidades de 90 días, Hablar de tus habilidades con IA con los empleadores",
  outcome: "dividir tu empleo actual o el que buscas en tareas, marcar en cuáles puede ayudar la IA y cuáles dependen de habilidades humanas, buscar las perspectivas de tu campo en una fuente oficial y convertir eso en un plan de mejora de habilidades de 90 días y una forma corta y honesta de describir tus habilidades con IA ante un empleador.",
  about: [
    "Este curso es para personas que buscan empleo y personas que trabajan, que oyen a cada rato que la IA va a cambiar los empleos y quieren saber qué significa para ellas: trabajadores de almacén y logística, personal de comercio y atención al cliente, trabajadores de oficina y administración, apoyo en salud, oficios y choferes.",
    "Vas a aprender cómo la IA suele cambiar las tareas más que los empleos completos, revisar tu propio empleo tarea por tarea, encontrar información confiable sobre tu campo y hacer un plan práctico para desarrollar las habilidades que te ayudan a seguir siendo valioso. Terminarás practicando cómo hablar de tus habilidades con IA en una entrevista o en una conversación con tu jefe.",
    "No predecimos qué empleos van a desaparecer, y ningún curso puede prometer un empleo o un aumento. Cada lección toma unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu plan de carrera personal con IA: una lista de tareas de tu empleo actual o del que buscas, con cada tarea marcada como \"la IA puede ayudar\", \"habilidad humana\" o \"las dos\"; tres datos sobre tu campo del Occupational Outlook Handbook de la BLS; un plan de mejora de habilidades de 90 días con tres habilidades, recursos gratuitos y tiempo semanal; y una respuesta de 30 segundos a \"¿Cómo usas la IA en tu trabajo?\" que sea honesta y específica.",
  chapters: [
    {
      name: "Capítulo 1: Cómo la IA está cambiando el trabajo",
      lessons: [
        {
          title: "La IA cambia las tareas, no solo los empleos",
          minutes: 5,
          goal: "Explicar cómo la IA afecta las tareas dentro de un empleo.",
          text: [
            "Cada empleo es un conjunto de tareas. Una recepcionista médica contesta el teléfono, agenda citas, revisa el seguro, recibe a los pacientes y calma a las personas preocupadas. Un jefe de almacén planea los turnos, lleva el control de existencias, capacita a los trabajadores nuevos y resuelve problemas en el piso.",
            "Las herramientas de IA son buenas para algunas tareas: escribir borradores de mensajes, resumir, buscar en la información, llenar formularios, ordenar y detectar patrones. Son débiles en otras: el trabajo físico con las manos, leer el ambiente, generar confianza, manejar algo nuevo y hacerse responsable.",
            "Por eso, en muchos empleos, la IA cambia qué tareas toman tiempo. Las personas que aprenden a usar la IA para las tareas rutinarias muchas veces tienen más tiempo para las tareas humanas, y eso las puede hacer más valiosas."
          ],
          words: [["Tarea", "una parte del trabajo dentro de un empleo, como agendar una cita."], ["Tarea rutinaria", "una tarea que se hace igual una y otra vez."], ["Mejora de habilidades", "aprender habilidades nuevas para hacer mejor tu trabajo o subir de puesto."]],
          slides: [
            { title: "Un empleo es un conjunto de tareas", bullets: ["Recepcionista: teléfono, citas, seguro, recibir pacientes", "Jefe de almacén: turnos, existencias, capacitación, problemas"] },
            { title: "Lo que la IA hace bien", bullets: ["Borradores y resúmenes", "Buscar y llenar formularios", "Ordenar y detectar patrones"] },
            { title: "Lo que las personas hacen mejor", bullets: ["Trabajo físico con las manos", "Leer el ambiente y generar confianza", "Manejar lo nuevo; hacerse responsable"] }
          ],
          tryIt: "Escribe el nombre de tu empleo actual o del último y haz una lista de al menos ocho tareas que haces (o hacías) en una semana normal.",
          youCanNow: "explicar cómo la IA afecta las tareas dentro de un empleo."
        },
        {
          title: "Marcar tus tareas: la IA puede ayudar, habilidad humana o las dos",
          minutes: 5,
          goal: "Ordenar las tareas de tu empleo según dónde puede ayudar la IA.",
          text: [
            "Toma tu lista de tareas y marca cada una. \"La IA puede ayudar\": escribir un correo, hacer una lista de verificación, resumir una política larga. \"Habilidad humana\": calmar en persona a un cliente molesto, levantar y cargar con seguridad, reparar una máquina. \"Las dos\": escribir un informe donde la IA hace el borrador y tú revisas los datos, o planear un horario donde la IA sugiere y tú decides.",
            "Le puedes pedir a un asistente de IA que te ayude a pensar: \"Soy jefe de turno en una tienda. Estas son mis tareas. ¿En cuáles me podría ayudar un asistente de IA y cómo?\" Luego usa tu propio criterio; tú conoces el empleo mejor que ella.",
            "Mira las tareas de \"habilidad humana\". Son fortalezas para desarrollar y para mencionar con los empleadores: comunicación, trabajo en equipo, resolución de problemas, seguridad, cuidado."
          ],
          steps: ["Marca cada tarea: la IA puede ayudar, habilidad humana o las dos.", "Pídele ideas a un asistente de IA y luego decide tú.", "Encierra en un círculo dos tareas de \"la IA puede ayudar\" para probar este mes.", "Subraya tus tareas de \"habilidad humana\" más fuertes."],
          words: [["Habilidades humanas", "habilidades como la comunicación, el trabajo en equipo, el criterio y el cuidado, que las personas hacen mejor; también se llaman habilidades blandas o duraderas."]],
          slides: [
            { title: "Tres etiquetas", bullets: ["La IA puede ayudar: correos, listas, resúmenes", "Habilidad humana: calmar personas, cargar con seguridad, reparaciones", "Las dos: la IA hace el borrador, tú revisas y decides"] },
            { title: "Pregúntale a la IA y luego decide", bullets: ["\"¿En cuáles de mis tareas podría ayudar la IA?\"", "Tú conoces el empleo mejor que ella"] },
            { title: "Tus fortalezas", bullets: ["Comunicación y trabajo en equipo", "Resolución de problemas y seguridad", "Cuidado y criterio"] }
          ],
          tryIt: "Etiqueta cada tarea de tu lista. Encierra en un círculo dos tareas de \"la IA puede ayudar\" que vas a probar este mes y subraya tus dos tareas de habilidad humana más fuertes.",
          youCanNow: "ordenar las tareas de tu empleo según dónde puede ayudar la IA y dónde más importan tus habilidades humanas."
        },
        {
          title: "Encontrar información confiable sobre tu campo",
          minutes: 5,
          goal: "Buscar las perspectivas de tu ocupación en una fuente oficial.",
          text: [
            "Los titulares sobre la IA y los empleos muchas veces dan miedo o exageran. Usa mejor fuentes oficiales basadas en datos. En EE. UU., la Bureau of Labor Statistics (BLS, la Oficina de Estadísticas Laborales) publica el Occupational Outlook Handbook (Manual de perspectivas ocupacionales) en bls.gov/ooh. Para cientos de empleos muestra en qué consiste el trabajo, la formación típica, el sueldo y las perspectivas de empleo proyectadas.",
            "Busca tu ocupación y anota: qué hacen los trabajadores, cómo llegar a serlo, el sueldo mediano y las perspectivas de empleo. Mira también las ocupaciones relacionadas; te pueden mostrar los siguientes pasos.",
            "CareerOneStop, del Departamento de Trabajo de EE. UU., te ayuda a encontrar programas de formación y tu American Job Center local (centro de empleo), que puede ofrecer servicios profesionales gratuitos. Pídele a la IA que te explique lo que no entiendas de estas páginas, pero toma los números de la página misma."
          ],
          steps: ["Entra a bls.gov/ooh y busca tu ocupación.", "Anota: qué hacen, cómo llegar a serlo, sueldo mediano, perspectivas.", "Revisa dos ocupaciones relacionadas.", "Encuentra tu American Job Center local en CareerOneStop."],
          words: [["BLS", "Bureau of Labor Statistics: la agencia de EE. UU. que publica datos de empleo y sueldos."], ["Perspectivas de empleo", "el cambio proyectado en el número de empleos de una ocupación."], ["Sueldo mediano", "el sueldo del medio: la mitad gana más y la mitad gana menos."]],
          slides: [
            { title: "Sáltate la exageración", bullets: ["Usa fuentes oficiales basadas en datos", "Occupational Outlook Handbook de la BLS: bls.gov/ooh"] },
            { title: "Qué anotar", bullets: ["Qué hacen los trabajadores", "Cómo llegar a serlo", "Sueldo mediano y perspectivas de empleo"] },
            { title: "Ayuda local gratuita", bullets: ["CareerOneStop: formación y centros de empleo", "Los American Job Centers ofrecen servicios profesionales", "Toma los números de la página, no de la IA"] }
          ],
          sources: [BLS_OOH, CAREERONESTOP],
          tryIt: "Busca tu ocupación actual o la que buscas en bls.gov/ooh. Escribe tres datos de la página y luego encuentra el American Job Center más cercano en CareerOneStop.",
          youCanNow: "encontrar información confiable sobre las perspectivas y la formación en tu campo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo la IA está cambiando el trabajo",
        questions: [
          { q: "En muchos empleos, lo que más cambia la IA es:", options: ["Nada", "Qué tareas toman tiempo", "Cada tarea por completo", "Solo el nombre del puesto"], answer: 1, why: "La IA afecta las tareas dentro de los empleos." },
          { q: "¿En qué tarea suele ser buena la IA?", options: ["Reparar un montacargas", "Calmar en persona a un cliente molesto", "Levantar cajas con seguridad", "Escribir el borrador de un correo rutinario"], answer: 3, why: "Escribir textos es una fortaleza de las herramientas de IA." },
          { q: "Escribir un informe donde la IA hace el borrador y tú revisas los datos se etiqueta como:", options: ["Las dos", "Solo habilidad humana", "Solo IA", "Ninguna"], answer: 0, why: "La IA ayuda y una persona revisa." },
          { q: "¿Dónde encuentras las perspectivas oficiales de empleo de una ocupación en EE. UU.?", options: ["En una suposición de la IA", "En un video viral", "En el Occupational Outlook Handbook de la BLS", "En una sección de comentarios"], answer: 2, why: "La BLS publica los datos oficiales de perspectivas." },
          { q: "¿Qué puede ofrecer un American Job Center?", options: ["Préstamos", "Empleos garantizados", "Servicios profesionales gratuitos e información de formación", "Títulos universitarios"], answer: 2, why: "Ofrecen servicios profesionales; sin garantías." }
        ]
      }
    },
    {
      name: "Capítulo 2: Hacer tu plan",
      lessons: [
        {
          title: "Elegir tres habilidades para desarrollar",
          minutes: 5,
          goal: "Elegir tres habilidades que encajen con tu empleo y tus metas.",
          text: [
            "Elige una mezcla: una habilidad con herramientas de IA, una habilidad de tu campo y una habilidad humana. Ejemplo para un trabajador de almacén que quiere ser jefe: (1) usar un asistente de IA para escribir notas de turno claras, (2) aprender el sistema de gestión del almacén y lo básico del inventario, (3) orientar y capacitar a los trabajadores nuevos.",
            "Usa lo que encontraste: la sección \"How to become one\" (cómo llegar a serlo) de la BLS, ofertas de empleo del puesto que quieres y tu lista de tareas. Las habilidades que aparecen en muchas ofertas de empleo valen la pena.",
            "Pídele a la IA que te ayude a comparar: \"Estas son cinco ofertas de empleo para jefe de almacén. ¿Qué habilidades aparecen más seguido?\" Pega solo las ofertas, nada privado."
          ],
          steps: ["Junta de tres a cinco ofertas de empleo del puesto que buscas.", "Haz una lista de las habilidades que más piden.", "Elige una habilidad con herramientas de IA, una de tu campo y una humana.", "Escribe por qué importa cada una."],
          words: [["Oferta de empleo", "un anuncio de un empleo que muestra las funciones y las habilidades requeridas."], ["Habilidad del campo", "una habilidad propia de tu tipo de trabajo, como los sistemas de inventario o los términos médicos."]],
          slides: [
            { title: "Elige una mezcla de tres", bullets: ["Una habilidad con herramientas de IA", "Una habilidad de tu campo", "Una habilidad humana"] },
            { title: "Dónde buscar", bullets: ["\"How to become one\" de la BLS", "Ofertas de empleo del puesto que buscas", "Tu propia lista de tareas"] },
            { title: "La IA puede comparar ofertas", bullets: ["\"¿Qué habilidades aparecen más seguido?\"", "Pega solo las ofertas, nada privado"] }
          ],
          tryIt: "Encuentra tres ofertas de empleo de un puesto que quieras. Pregúntale a la IA qué habilidades aparecen más seguido, luego elige tus tres habilidades y escribe por qué importa cada una.",
          youCanNow: "elegir tres habilidades para desarrollar basadas en ofertas de empleo reales y en tus metas."
        },
        {
          title: "Armar un plan de mejora de habilidades de 90 días",
          minutes: 5,
          goal: "Convertir tus tres habilidades en un plan realista de 90 días.",
          text: [
            "Un plan hace que el aprendizaje suceda. Para cada habilidad, escribe: un recurso gratuito o de bajo costo, el tiempo semanal y una forma de probar que la aprendiste. La prueba puede ser un certificado, un proyecto, una muestra de trabajo o que tu jefe te vea aplicándola.",
            "Los recursos gratuitos incluyen tu biblioteca local (muchas ofrecen cursos en línea gratuitos), los American Job Centers, los colegios comunitarios, la capacitación del empleador y los cursos gratuitos de las grandes empresas de tecnología. Revisa los costos y los detalles en el sitio oficial de cada uno.",
            "Que sea pequeño: dos o tres horas por semana es mejor que un plan grande que abandonas. Usa un asistente de IA para hacer el horario semanal y para que te haga preguntas, y practica la habilidad de IA en tareas reales del trabajo si tu empleador lo permite."
          ],
          steps: ["Para cada habilidad: recurso, tiempo semanal, prueba.", "Revisa el costo y los detalles de cada recurso en su sitio oficial.", "Pon en tu calendario los horarios semanales para aprender.", "Revisa el plan en los días 30, 60 y 90."],
          words: [["Prueba de habilidad", "algo que muestra que puedes hacerlo: un certificado, un proyecto o una muestra de trabajo."], ["Colegio comunitario", "una universidad pública local con cursos y certificados de bajo costo."]],
          slides: [
            { title: "Para cada habilidad", bullets: ["Un recurso gratuito o de bajo costo", "Tiempo semanal", "Una forma de probarla"] },
            { title: "Lugares gratuitos para aprender", bullets: ["Cursos en línea de la biblioteca", "American Job Centers y colegios comunitarios", "Capacitación del empleador"] },
            { title: "Que sea pequeño", bullets: ["2-3 horas por semana que puedas cumplir", "La IA hace el horario y te hace preguntas", "Revisa en los días 30, 60 y 90"] }
          ],
          sources: [CAREERONESTOP],
          tryIt: "Escribe tu plan de 90 días: para cada una de tus tres habilidades, un recurso, el tiempo semanal y la prueba. Pon en tu calendario los horarios de estudio de las dos primeras semanas.",
          youCanNow: "armar un plan realista de 90 días para aprender tres habilidades nuevas."
        },
        {
          title: "Hablar de tus habilidades con IA con los empleadores",
          minutes: 5,
          goal: "Dar una respuesta corta, honesta y específica sobre cómo usas la IA en el trabajo.",
          text: [
            "Cada vez más empleadores preguntan: \"¿Cómo usas la IA?\" Una respuesta fuerte es específica y honesta, y muestra criterio. Usa el patrón: Tarea, Herramienta, Revisión, Resultado.",
            "Ejemplo: \"Uso Microsoft Copilot para hacer el borrador de mis notas de fin de turno (tarea y herramienta). Siempre reviso los conteos contra el reporte del escáner antes de enviarlas (revisión). Me ahorra unos 15 minutos por turno, y el siguiente jefe recibe notas más claras (resultado).\"",
            "Nunca exageres. No digas que tienes habilidades que no tienes, y sigue la política de IA de tu empleador: no pongas información confidencial de la empresa ni de los clientes en herramientas de IA. Mostrar que conoces los límites es parte de la habilidad."
          ],
          steps: ["Elige una tarea real en la que usaste la IA (o la practicaste).", "Di la tarea, la herramienta, cómo la revisaste y el resultado.", "Que dure unos 30 segundos.", "Practícala en voz alta."],
          words: [["Política de IA", "las reglas de un empleador sobre cómo el personal puede usar las herramientas de IA."], ["Información confidencial", "información de la empresa o de los clientes que no se debe compartir fuera de la empresa."]],
          slides: [
            { title: "Tarea, Herramienta, Revisión, Resultado", bullets: ["Lo que hiciste", "Qué herramienta de IA", "Cómo lo revisaste", "Qué mejoró"] },
            { title: "Ejemplo", bullets: ["\"Uso Copilot para el borrador de mis notas de fin de turno.", "Reviso los conteos contra el reporte del escáner.", "Me ahorra 15 minutos por turno.\""] },
            { title: "Muestra criterio", bullets: ["Nunca exageres tus habilidades", "Sigue la política de IA de tu empleador", "Deja los datos confidenciales fuera de la IA"] }
          ],
          tryIt: "Tarea final: termina tu plan de carrera con IA: la lista de tareas con etiquetas, tres datos de la BLS, tu plan de 90 días y una respuesta de 30 segundos de Tarea-Herramienta-Revisión-Resultado que practiques en voz alta.",
          youCanNow: "planear tu crecimiento en una fuerza laboral cambiada por la IA y hablar con honestidad de tus habilidades con IA con los empleadores."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Hacer tu plan",
        questions: [
          { q: "Una buena mezcla de tres habilidades es:", options: ["Una habilidad con herramientas de IA, una de tu campo y una humana", "Tres apps cualquiera", "Solo habilidades de IA", "Ninguna"], answer: 0, why: "Una mezcla te mantiene equilibrado y valioso." },
          { q: "¿Dónde puedes ver qué habilidades quieren los empleadores?", options: ["En un meme", "En un horóscopo", "En una suposición de la IA", "En ofertas de empleo reales del puesto que buscas"], answer: 3, why: "Las ofertas muestran las habilidades requeridas." },
          { q: "¿Qué plan tiene más probabilidades de funcionar?", options: ["40 horas solo este fin de semana", "2-3 horas por semana, en tu calendario", "Cuando tengas ganas", "Ningún plan"], answer: 1, why: "Los planes pequeños y constantes se cumplen." },
          { q: "En Tarea, Herramienta, Revisión, Resultado, \"Revisión\" significa:", options: ["Cómo verificaste el trabajo de la IA", "Tu pago", "Un cheque del banco", "Revisar tu correo"], answer: 0, why: "Revisar muestra criterio." },
          { q: "¿Qué NO debes hacer al describir tus habilidades con IA?", options: ["Mencionar cómo revisas el trabajo", "Dar un ejemplo específico", "Decir que tienes habilidades que no tienes", "Seguir la política de tu empleador"], answer: 2, why: "La honestidad importa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA en la nueva fuerza laboral",
    questions: [
      { q: "La mejor forma de pensar en un empleo es como:", options: ["Una sola tarea", "Un conjunto de tareas", "Solo un nombre de puesto", "Un pago"], answer: 1, why: "Los empleos tienen muchas tareas." },
      { q: "¿Cuál es una tarea rutinaria?", options: ["Dirigir una reunión de equipo", "Consolar a un paciente asustado", "Atender una emergencia totalmente nueva", "Escribir el mismo informe diario"], answer: 3, why: "Las tareas rutinarias se repiten igual." },
      { q: "¿Qué es la mejora de habilidades?", options: ["Un tipo de IA", "Renunciar", "Trabajar menos horas", "Aprender habilidades nuevas para hacerlo mejor o subir de puesto"], answer: 3, why: "La mejora de habilidades desarrolla habilidades nuevas." },
      { q: "¿Cuál es una habilidad humana?", options: ["Ordenar una hoja de cálculo", "Generar confianza con los clientes", "Resumir un documento", "Revisar la ortografía"], answer: 1, why: "Generar confianza es una fortaleza humana." },
      { q: "Cuando la IA etiqueta tus tareas, ¿quién toma la decisión final?", options: ["Tu vecino", "La IA", "Tú", "Nadie"], answer: 2, why: "Tú conoces mejor el empleo." },
      { q: "¿Por qué subrayar tus tareas de habilidad humana?", options: ["Son fortalezas para desarrollar y para mencionar", "Para borrarlas", "Para ocultarlas", "No importan"], answer: 0, why: "Las habilidades humanas siguen siendo valiosas." },
      { q: "BLS significa:", options: ["Servicio Laboral Básico", "Sistema de Aprendizaje para Empresas", "Bureau of Labor Statistics (Oficina de Estadísticas Laborales)", "Junta de Habilidades con Licencia"], answer: 2, why: "La BLS publica datos de empleo." },
      { q: "El Occupational Outlook Handbook muestra:", options: ["Qué hacen los trabajadores, cómo llegar a serlo, el sueldo y las perspectivas", "Noticias de celebridades", "Consejos sobre acciones", "Recetas"], answer: 0, why: "Esas son sus secciones principales." },
      { q: "¿De dónde debes tomar los números de las perspectivas de empleo?", options: ["De un resumen de la IA sin revisar", "De la página oficial", "De un titular", "De un rumor"], answer: 1, why: "La IA puede dar mal los números." },
      { q: "CareerOneStop es de:", options: ["Una compañía de teléfonos", "Una red social", "Un banco", "El Departamento de Trabajo de EE. UU."], answer: 3, why: "Es un recurso del Departamento de Trabajo." },
      { q: "Las habilidades que aparecen en muchas ofertas de empleo:", options: ["Valen la pena aprenderse", "No son importantes", "Son ilegales", "Están pasadas de moda"], answer: 0, why: "Los empleadores claramente las quieren." },
      { q: "Al pegar ofertas de empleo en la IA, deja fuera:", options: ["Las listas de habilidades", "El texto de la oferta", "El nombre del puesto", "Tu información privada"], answer: 3, why: "Deja fuera los datos privados." },
      { q: "¿Qué es una prueba de habilidad?", options: ["Un rumor", "Un deseo", "Un certificado, un proyecto o una muestra de trabajo", "Una publicación en redes que dice que eres bueno"], answer: 2, why: "La prueba muestra lo que puedes hacer." },
      { q: "¿Dónde puedes encontrar muchas veces cursos en línea gratuitos?", options: ["En anuncios emergentes", "En tu biblioteca local", "En correos de spam", "En ningún lado"], answer: 1, why: "Muchas bibliotecas ofrecen cursos gratuitos." },
      { q: "¿Cuándo debes revisar tu plan de 90 días?", options: ["Cada hora", "Nunca", "Solo el día 1", "En los días 30, 60 y 90"], answer: 3, why: "Las revisiones regulares te mantienen en camino." },
      { q: "Una buena respuesta sobre tus habilidades con IA es:", options: ["Copiada de un sitio web", "Vaga y exagerada", "Específica y honesta", "Inventada"], answer: 2, why: "Las respuestas específicas y honestas generan confianza." },
      { q: "¿Qué va en una respuesta de Tarea-Herramienta-Revisión-Resultado?", options: ["\"Reviso los conteos contra el reporte del escáner.\"", "\"La IA hace todo mi trabajo.\"", "\"Pego datos de clientes en chatbots.\"", "\"Nunca reviso nada.\""], answer: 0, why: "Muestra cómo verificas." },
      { q: "Antes de usar la IA en el trabajo debes conocer:", options: ["La contraseña de tu compañero", "La política de IA de tu empleador", "Los números de tarjeta de los clientes", "Nada"], answer: 1, why: "Las políticas marcan lo que está permitido." },
      { q: "La información confidencial de la empresa debe:", options: ["Pegarse en cualquier chatbot", "Quedarse fuera de las herramientas de IA, a menos que tu empleador lo apruebe", "Publicarse en internet", "Compartirse con amigos"], answer: 1, why: "Hay que protegerla." },
      { q: "¿Qué promete este curso sobre los empleos?", options: ["Nada; te ayuda a planear y desarrollar habilidades", "Un empleo garantizado", "Un aumento garantizado", "Un ascenso"], answer: 0, why: "Ningún curso puede prometer resultados." }
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of veterans-ai-career-transition). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US program and agency names (TAP, VA, USAJOBS, FedsHireVets, CareerOneStop) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-career-transition-es",
  lang: "es",
  translationOf: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "IA para la transición de carrera y el empleo",
  skills: "Encontrar ayuda oficial para la transición, Leer una oferta de empleo buscando palabras clave, Escribir un currículum civil adaptado a un empleo, Escribir una carta de presentación y un perfil cortos, Practicar entrevistas con IA, Detectar estafas de empleo",
  outcome: "usar un asistente de IA para escribir un currículum civil de una página adaptado a una oferta de empleo real y una respuesta de 60 segundos a \"háblame de ti\", revisar los dos para que sean correctos y no tengan datos privados, y saber dónde conseguir ayuda oficial gratuita.",
  about: [
    "Este curso es para veteranos y militares en transición que están buscando empleos civiles. Tienes la experiencia; ahora el trabajo es mostrarla con palabras que entienda un gerente de contratación civil, y estar listo para la entrevista.",
    "Vas a encontrar ayuda oficial gratuita, leer una oferta de empleo como lo hace un gerente de contratación, usar un asistente de IA gratuito para armar un currículum adaptado, una carta de presentación corta y un resumen de perfil en línea, y practicar respuestas de entrevista. También vas a aprender a detectar estafas de empleo.",
    "Cada lección toma unos cinco minutos: lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Elige una oferta de empleo civil real. Usa un asistente de IA para escribir un currículum de una página adaptado a ella (al menos cinco puntos con palabras civiles y números) y una respuesta de 60 segundos a \"háblame de ti\". Revisa que cada afirmación sea cierta y que no tenga números de Seguro Social, del DD-214 ni otros números privados, y practica la respuesta en voz alta dos veces.",
  chapters: [
    {
      name: "Capítulo 1: Armar tu currículum civil",
      lessons: [
        {
          title: "Ayuda oficial gratuita para la transición y el empleo",
          minutes: 5,
          goal: "Nombrar tres fuentes oficiales gratuitas de ayuda para el empleo y elegir una para contactar.",
          text: [
            "No tienes que hacerlo solo. El Transition Assistance Program (TAP, Programa de Asistencia para la Transición) está a cargo de varias agencias, entre ellas el Departamento de Trabajo, el Departamento de Defensa y el VA (el Departamento de Asuntos de Veteranos). La parte del Departamento de Trabajo incluye talleres de empleo y ayuda personal a través de su Employment Navigator and Partnership Program en algunas instalaciones. Encuentra los horarios de las clases en la oficina de transición de tu instalación.",
            "Después de dejar el servicio, los American Job Centers (casi 2,400 centros de empleo en todo el país, que encuentras en CareerOneStop) ayudan con la búsqueda de empleo y la formación, y los veteranos tienen prioridad de servicio. El programa Personalized Career Planning and Guidance del VA da orientación profesional y educativa gratuita, incluida ayuda con el currículum, a veteranos y militares que califican.",
            "La IA es una gran compañera para escribir, pero un orientador capacitado conoce el mercado laboral de tu zona y tus beneficios. Usa los dos."
          ],
          steps: ["Si sigues en servicio: contacta a la oficina de transición de tu instalación sobre TAP.", "Si ya dejaste el servicio: busca el American Job Center más cercano en CareerOneStop.", "Lee la página de Personalized Career Planning and Guidance del VA y revisa los requisitos.", "Agenda una cita esta semana."],
          words: [["TAP", "Transition Assistance Program: formación y ayuda para militares que pasan a la vida civil."], ["American Job Center", "un centro gratuito financiado por el Departamento de Trabajo que ayuda con la búsqueda de empleo y la formación."], ["Prioridad de servicio", "los veteranos son atendidos primero en muchos programas de empleo y formación del Departamento de Trabajo."]],
          slides: [
            { title: "Si sigues en servicio", bullets: ["Transition Assistance Program (TAP)", "Talleres de empleo del Departamento de Trabajo", "Ayuda personal en algunas instalaciones"] },
            { title: "Después de dejar el servicio", bullets: ["American Job Centers, en CareerOneStop", "Los veteranos tienen prioridad de servicio", "Orientación profesional gratuita del VA"] },
            { title: "Usa los dos", bullets: ["La IA para ayudarte a escribir", "Un orientador para los empleos locales y los beneficios"] }
          ],
          sources: [
            { name: "Departamento de Trabajo de EE. UU.: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "Departamento de Trabajo de EE. UU., VETS: encontrar empleo", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance (orientación profesional)", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Elige la fuente oficial de esta lección que te queda ahora. Busca su página o su oficina más cercana y anota cómo contactarla. Agenda o planea una cita.",
          youCanNow: "nombrar fuentes oficiales gratuitas de ayuda para el empleo y elegir la correcta para contactar."
        },
        {
          title: "Leer una oferta de empleo como un gerente de contratación",
          minutes: 5,
          goal: "Sacar los requisitos clave y las palabras clave de una oferta de empleo con ayuda de la IA.",
          text: [
            "Cada oferta de empleo te dice lo que el empleador quiere oír. Muchas empresas usan un sistema de seguimiento de candidatos (ATS) que revisa los currículums buscando palabras que coincidan con la oferta, así que importa usar las mismas palabras de la oferta.",
            "Copia una oferta real en un asistente de IA y pregunta: \"Haz una lista de los requisitos obligatorios, las habilidades deseables y las 10 palabras clave más importantes de esta oferta. Luego dime cuáles de mis habilidades coinciden: fui jefe de suministros en la Infantería de Marina durante 7 años, dirigí a 10 marines y manejé $2 millones en equipo.\"",
            "Revisa tú la lista de la IA contra la oferta. Si cumples con la mayoría de los requisitos obligatorios, postúlate. Mucha gente se postula sin cumplir con todo lo deseable."
          ],
          steps: ["Elige una oferta de empleo real.", "Pega la oferta (no tus datos privados) en un asistente de IA.", "Pide los requisitos obligatorios, lo deseable y las palabras clave principales.", "Pregunta cuáles de tus habilidades coinciden.", "Revisa tú la lista contra la oferta."],
          words: [["Sistema de seguimiento de candidatos (ATS)", "un programa que usan los empleadores para recibir currículums y revisarlos buscando palabras que coincidan."], ["Palabra clave", "una palabra o frase importante de la oferta, como \"control de inventario\"."], ["Requisito obligatorio", "algo que necesitas para que te consideren."]],
          slides: [
            { title: "La oferta te dice qué decir", bullets: ["Los empleadores buscan palabras que coincidan", "Usa las mismas palabras de la oferta"] },
            { title: "Pídele a la IA que saque", bullets: ["Requisitos obligatorios", "Habilidades deseables", "Las 10 palabras clave principales", "Cuáles de tus habilidades coinciden"] },
            { title: "Luego decide", bullets: ["Revisa tú la lista", "¿Cumples la mayoría de lo obligatorio? Postúlate"] }
          ],
          tryIt: "Encuentra una oferta de empleo real que te interese. Pídele a un asistente de IA una lista de sus requisitos obligatorios, lo deseable y las 10 palabras clave principales, y cuáles de tus habilidades coinciden.",
          youCanNow: "sacar los requisitos y las palabras clave de una oferta de empleo y relacionarlos con tu experiencia."
        },
        {
          title: "Escribir un currículum civil adaptado",
          minutes: 6,
          goal: "Usar la IA para escribir el borrador de un currículum de una página adaptado a una oferta, con palabras civiles y números.",
          text: [
            "Un currículum civil normalmente tiene una o dos páginas, no es un historial de servicio completo. Tiene un resumen corto arriba, tu experiencia con puntos, tus habilidades, tu educación y tus certificaciones. Usa puestos civiles cuando encajen (\"supervisor de cadena de suministro\" en vez de \"jefe de suministros\") y explica lo que hiciste, de qué tamaño era y el resultado.",
            "Dale a la IA tu experiencia con palabras sencillas y las palabras clave de la lección 2: \"Escribe un currículum de una página para esta oferta de coordinador de logística. Usa estas palabras clave. Mi experiencia: [descripción sencilla]. Usa verbos fuertes y números, sin siglas militares.\"",
            "Deja fuera tu número de Seguro Social, los datos de tu DD-214, tu fecha de nacimiento completa y los detalles de tu autorización de seguridad más allá de lo que pide la oferta. Nunca dejes que la IA agregue cosas que no hiciste. Luego pídele a un orientador de TAP, de un American Job Center o del VA que lo revise."
          ],
          steps: ["Escribe tu experiencia con palabras sencillas: qué, de qué tamaño, qué resultado.", "Dale a la IA las palabras clave de la oferta.", "Pide un currículum de una página con resumen, puntos de experiencia y habilidades.", "Cambia los términos militares y revisa que cada afirmación sea cierta.", "Quita los datos privados y pídele a un orientador que lo revise."],
          words: [["Resumen", "dos o tres líneas al inicio de un currículum que dicen quién eres y qué ofreces."], ["Adaptar", "cambiar tu currículum para que encaje con un empleo específico."]],
          slides: [
            { title: "La forma de un currículum civil", bullets: ["Resumen corto", "Puntos de experiencia con resultados", "Habilidades, educación, certificaciones"] },
            { title: "Dilo a su manera", bullets: ["Puestos civiles cuando encajen", "Qué, de qué tamaño, qué resultado", "Usa las palabras clave de la oferta"] },
            { title: "Que sea cierto y seguro", bullets: ["Nada de Seguro Social, datos del DD-214 ni fecha de nacimiento completa", "Nunca dejes que la IA agregue lo que no hiciste", "Pide a un orientador que lo revise"] }
          ],
          tryIt: "Usa tu lista de palabras clave de la lección 2. Pídele a un asistente de IA el borrador de un currículum de una página para esa oferta. Cambia cualquier línea que no sea exactamente cierta.",
          youCanNow: "escribir un currículum civil de una página adaptado a una oferta de empleo específica con ayuda de la IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Armar tu currículum civil",
        questions: [
          { q: "Dejas el servicio el próximo mes y quieres ayuda personal para buscar empleo. Una buena primera parada es:", options: ["La oficina de transición de tu instalación y TAP", "Un sitio de empleo cualquiera", "Un influencer de redes sociales", "Un servicio que cobra por postularte"], answer: 0, why: "TAP y el Departamento de Trabajo ofrecen talleres y ayuda personal." },
          { q: "¿Qué es un sistema de seguimiento de candidatos?", options: ["Un GPS para entrevistas de trabajo", "Un programa que revisa los currículums buscando palabras que coincidan", "Un beneficio del VA", "Una base de datos militar"], answer: 1, why: "Muchos empleadores lo usan para ordenar currículums." },
          { q: "¿Por qué usar en tu currículum las mismas palabras de la oferta de empleo?", options: ["Para copiar al empleador", "Para hacerlo más largo", "Para que el programa de revisión y los gerentes de contratación vean que coincides", "Lo exige la ley"], answer: 2, why: "Las palabras clave que coinciden muestran que encajas en el empleo." },
          { q: "¿Qué punto de currículum funciona mejor para un empleo civil de logística?", options: ["\"NCOIC del taller S4\"", "\"Hice cosas de suministros\"", "\"Hooah\"", "\"Manejé $2 millones en equipo con cero pérdidas en 3 inventarios\""], answer: 3, why: "Palabras civiles, números y un resultado." },
          { q: "¿Qué debes dejar FUERA de un currículum civil?", options: ["Tu número de Seguro Social", "Tus habilidades", "Un resumen corto", "Tus certificaciones"], answer: 0, why: "Los números privados no van en un currículum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Postularte y hacer entrevistas",
      lessons: [
        {
          title: "Escribir una carta de presentación y un resumen de perfil cortos",
          minutes: 5,
          goal: "Usar la IA para escribir una carta de presentación corta y un resumen de perfil en línea con tu propia voz.",
          text: [
            "Una carta de presentación es una carta corta que dice por qué quieres este empleo y por qué encajas. Que tenga tres párrafos cortos: por qué este empleo, tus dos o tres mejores coincidencias con pruebas y un cierre amable.",
            "Pídele a la IA: \"Escribe una carta de presentación de 3 párrafos para esta oferta, usando mi currículum. Que suene segura pero no rígida, sin jerga militar.\" Luego haz que suene como tú: cambia las palabras que nunca dirías.",
            "Un resumen de perfil en línea, por ejemplo en LinkedIn, son de dos a cuatro oraciones sobre quién eres y qué trabajo buscas. Pídele a la IA tres versiones, elige una y edítala."
          ],
          steps: ["Dale a la IA la oferta y tu currículum.", "Pide una carta de presentación de tres párrafos.", "Edítala para que suene como tú.", "Pide tres versiones de un resumen de perfil de dos a cuatro oraciones.", "Elige una, edítala y úsala."],
          words: [["Carta de presentación", "una carta corta que se envía con el currículum y dice por qué quieres el empleo y por qué encajas."], ["Resumen de perfil", "unas oraciones sobre ti al inicio de un perfil profesional en línea."]],
          slides: [
            { title: "Carta de presentación: tres párrafos", bullets: ["Por qué este empleo", "Tus mejores coincidencias, con pruebas", "Un cierre amable"] },
            { title: "Hazla tuya", bullets: ["Segura, no rígida", "Sin jerga militar", "Cambia las palabras que nunca dirías"] },
            { title: "Resumen de perfil", bullets: ["De dos a cuatro oraciones", "Quién eres y qué trabajo buscas", "Pídele tres versiones a la IA"] }
          ],
          tryIt: "Pídele a un asistente de IA una carta de presentación de tres párrafos para el empleo de la lección 2. Cambia al menos tres frases para que suene como tú.",
          youCanNow: "escribir una carta de presentación corta y un resumen de perfil con ayuda de la IA, con tu propia voz."
        },
        {
          title: "Practicar entrevistas con IA",
          minutes: 6,
          goal: "Practicar una presentación de 60 segundos y dos respuestas STAR con un entrevistador de IA.",
          text: [
            "La mayoría de las entrevistas empiezan con \"Háblame de ti.\" Una buena respuesta dura unos 60 segundos: quién eres ahora, tu experiencia más relevante y por qué quieres este empleo. No cuentes todo tu historial de servicio.",
            "Para las preguntas de \"Cuéntame de una vez en que...\", usa STAR (por sus siglas en inglés): situación, tarea, acción, resultado. Ejemplo: \"La disponibilidad de vehículos de nuestra unidad estaba en 70% (situación). Me pidieron subirla antes de una inspección (tarea). Armé un registro diario de refacciones y un horario de dos turnos (acción). La disponibilidad llegó a 92% en seis semanas (resultado).\"",
            "Pídele a la IA que haga de entrevistador: \"Haz de gerente de contratación para este empleo. Hazme una pregunta a la vez. Después de cada respuesta, dime algo que hice bien y algo para mejorar.\" Practica en voz alta. Si usas el modo de voz, habla con naturalidad."
          ],
          steps: ["Escribe una respuesta de 60 segundos a \"háblame de ti\".", "Escribe dos historias STAR de tu servicio.", "Pídele a la IA que haga de entrevistador, una pregunta a la vez.", "Responde en voz alta y pide una fortaleza y una mejora cada vez.", "Practica hasta que se sienta natural."],
          words: [["STAR", "situación, tarea, acción, resultado: una forma de contar una historia corta sobre tu trabajo."], ["Pregunta de comportamiento", "una pregunta de entrevista sobre una vez en que hiciste algo."]],
          slides: [
            { title: "\"Háblame de ti\"", bullets: ["Unos 60 segundos", "Quién eres ahora", "Tu experiencia más relevante", "Por qué este empleo"] },
            { title: "Respuestas STAR", bullets: ["Situación", "Tarea", "Acción", "Resultado, con un número si puedes"] },
            { title: "La IA como entrevistador", bullets: ["Una pregunta a la vez", "Una fortaleza y una mejora después de cada una", "Practica en voz alta"] }
          ],
          tryIt: "Pídele a un asistente de IA que haga de gerente de contratación para el empleo que elegiste. Responde tres preguntas en voz alta, incluida \"Háblame de ti\", y anota los comentarios.",
          youCanNow: "dar una presentación de 60 segundos y responder preguntas de comportamiento usando STAR."
        },
        {
          title: "Buscar de forma inteligente y detectar estafas de empleo",
          minutes: 5,
          goal: "Buscar en fuentes oficiales de empleo y detectar las señales de alerta de una estafa de empleo.",
          text: [
            "Busca donde se publican los empleos reales: los sitios web de las empresas, el Job Finder de CareerOneStop, los American Job Centers y, para empleos federales, USAJOBS (el sitio de empleos del gobierno federal) y el sitio FedsHireVets de la Oficina de Administración de Personal (OPM), que explica la contratación federal para veteranos, incluida la preferencia para veteranos.",
            "Los estafadores buscan a quienes buscan empleo. Señales de alerta: una oferta de empleo sin entrevista, una petición de pagar por formación o equipo, un cheque para depositar y devolver parte del dinero, entrevistas solo por chat de texto, o una petición de tu número de Seguro Social o datos bancarios antes de una oferta real.",
            "Pídele a una IA que señale las alertas en una oferta sospechosa, después de quitar tus datos. Luego revisa tú la empresa en su sitio web oficial. Da tus datos privados solo para el papeleo real, después de una oferta real, por el proceso oficial del empleador."
          ],
          steps: ["Busca en sitios de empresas, CareerOneStop, American Job Centers y USAJOBS.", "Busca señales de alerta: sin entrevista, pago por adelantado, cheque para devolver dinero, entrevistas solo por texto.", "No des tu número de Seguro Social ni datos bancarios antes de una oferta real.", "Revisa la empresa en su sitio web oficial.", "Pídele a la IA una lista de las señales de alerta de una oferta sospechosa."],
          words: [["Preferencia para veteranos", "reglas que dan ventaja a los veteranos que califican en la contratación federal."], ["Estafa de empleo", "una oferta de empleo falsa para robar dinero o información personal."]],
          slides: [
            { title: "Busca donde están los empleos reales", bullets: ["Sitios web de las empresas", "CareerOneStop y American Job Centers", "USAJOBS y FedsHireVets para empleos federales"] },
            { title: "Señales de alerta de estafa de empleo", bullets: ["Oferta sin entrevista", "Pagar por formación o equipo", "Depositar un cheque y devolver dinero", "Entrevistas solo por texto"] },
            { title: "Protégete", bullets: ["Nada de Seguro Social ni datos bancarios antes de una oferta real", "Revisa tú la empresa", "Pídele a la IA que detecte las alertas"] }
          ],
          sources: [
            { name: "Departamento de Trabajo de EE. UU., VETS: encontrar empleo", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Oficina de Administración de Personal: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Tarea final: termina tu currículum de una página adaptado a la oferta que elegiste y tu respuesta de 60 segundos a \"háblame de ti\". Revisa que cada afirmación sea cierta y que no haya números privados, y luego di la respuesta en voz alta dos veces.",
          youCanNow: "buscar en fuentes oficiales de empleo, evitar estafas de empleo y postularte con un currículum adaptado y una presentación practicada."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Postularte y hacer entrevistas",
        questions: [
          { q: "Una buena carta de presentación es:", options: ["De cinco páginas", "Tres párrafos cortos: por qué este empleo, tus mejores coincidencias, un cierre amable", "Una copia de tu currículum", "Llena de siglas militares"], answer: 1, why: "Corta, enfocada y ajustada al empleo." },
          { q: "Una respuesta a \"háblame de ti\" debe durar unos:", options: ["10 minutos", "Todo tu historial de servicio", "60 segundos: quién eres, experiencia relevante, por qué este empleo", "Tu historia familiar"], answer: 2, why: "Corta y enfocada en el empleo." },
          { q: "¿Qué significa la R de STAR?", options: ["Rango", "Razón", "Reporte", "Resultado"], answer: 3, why: "Termina con el resultado, de preferencia con un número." },
          { q: "Una \"empresa\" te ofrece un empleo sin entrevista y te pide pagar por la formación. Esto es:", options: ["Una señal de alerta de estafa de empleo", "Una oferta de empleo normal", "Un beneficio para veteranos", "La preferencia para veteranos"], answer: 0, why: "Sin entrevista y con pago por adelantado son señales clásicas de estafa de empleo." },
          { q: "¿Qué sitio explica la contratación federal para veteranos, incluida la preferencia para veteranos?", options: ["Un anuncio emergente", "FedsHireVets de la OPM", "Un enlace en un mensaje de texto", "Cualquier chatbot de IA"], answer: 1, why: "FedsHireVets es el recurso de la OPM para veteranos que buscan carreras federales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la transición de carrera y el empleo",
    questions: [
      { q: "TAP significa:", options: ["Transition Assistance Program (Programa de Asistencia para la Transición)", "Formación y pago", "Programa total del Ejército", "Plan de aprendices de tecnología"], answer: 0, why: "TAP ayuda a los militares a pasar a la vida civil." },
      { q: "¿Qué agencias forman parte de TAP?", options: ["Solo empresas privadas", "Varias, entre ellas el Departamento de Trabajo, el Departamento de Defensa y el VA", "Solo el Ejército", "Solo el VA"], answer: 1, why: "TAP es un esfuerzo entre varias agencias." },
      { q: "¿Dónde tienen los veteranos prioridad de servicio para ayuda con la búsqueda de empleo y la formación?", options: ["En una agencia de autos", "En un grupo de redes sociales", "En los American Job Centers", "En un sitio que cobra por postularte"], answer: 2, why: "El Departamento de Trabajo da prioridad de servicio a los veteranos ahí." },
      { q: "¿Qué programa del VA da orientación profesional gratuita, incluida ayuda con el currículum, a los veteranos que califican?", options: ["Préstamos para vivienda del VA", "TRICARE", "La GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "El VA lo presenta como orientación profesional y educativa gratuita." },
      { q: "¿Por qué usar la IA y también a un orientador?", options: ["La IA te ayuda a escribir; un orientador conoce los empleos locales y los beneficios", "La IA siempre se equivoca", "Los orientadores escriben todo por ti", "Solo necesitas uno"], answer: 0, why: "Cada uno hace algo que el otro no puede." },
      { q: "Un \"requisito obligatorio\" en una oferta de empleo es:", options: ["Un extra agradable", "Algo que necesitas para que te consideren", "El sueldo", "La dirección de la oficina"], answer: 1, why: "Los requisitos obligatorios son lo esencial." },
      { q: "Cuando pegas una oferta de empleo en la IA, NO debes pegar también:", options: ["El nombre del puesto", "Los requisitos", "Tu número de Seguro Social", "Las palabras clave"], answer: 2, why: "Los números privados nunca van en la IA." },
      { q: "Cumples la mayoría de los requisitos obligatorios pero no todo lo deseable. Deberías:", options: ["Nunca postularte", "Mentir sobre lo demás", "Esperar cinco años", "Postularte"], answer: 3, why: "Mucha gente se postula sin cumplir todo lo deseable." },
      { q: "Adaptar un currículum significa:", options: ["Cambiarlo para que encaje con un empleo específico", "Hacerlo más largo", "Agregar todos los empleos que has tenido", "Imprimirlo a color"], answer: 0, why: "Adaptarlo hace que tu currículum coincida con la oferta." },
      { q: "¿Cuál es un mejor puesto civil para un jefe de suministros?", options: ["NCOIC S4", "Supervisor de cadena de suministro", "Gunny", "Jefe de cosas"], answer: 1, why: "Los puestos civiles ayudan a los gerentes de contratación a entender tu rol." },
      { q: "El borrador de currículum de la IA dice que dirigiste a 50 personas; dirigiste a 10. Tú:", options: ["Dejas 50, suena mejor", "Lo cambias a 100", "Lo cambias al número real, 10", "Quitas todos los números"], answer: 2, why: "Cada afirmación debe ser cierta." },
      { q: "¿Quién debe revisar tu currículum antes de que lo envíes?", options: ["Un desconocido en internet", "Nadie", "Solo la IA", "Un orientador de TAP, de un American Job Center o del VA"], answer: 3, why: "Un orientador capacitado detecta problemas que la IA no ve." },
      { q: "Un resumen de perfil es:", options: ["De dos a cuatro oraciones sobre quién eres y qué trabajo buscas", "Tu historial de servicio completo", "La dirección de tu casa", "Una lista de contraseñas"], answer: 0, why: "Es una presentación corta al inicio de un perfil en línea." },
      { q: "Después de que la IA escribe tu carta de presentación, deberías:", options: ["Enviarla sin leerla", "Editarla para que suene como tú", "Agregar jerga militar", "Hacerla de cinco páginas"], answer: 1, why: "Tu carta debe sonar como tú." },
      { q: "STAR significa:", options: ["Habilidades, formación, premios, rango", "Empezar, intentar, responder, repetir", "Situación, tarea, acción, resultado", "Hablar, pensar, actuar, descansar"], answer: 2, why: "STAR es una forma de contar una historia corta de trabajo." },
      { q: "Cuando la IA hace de entrevistador, una buena petición es:", options: ["\"Hazme todas las preguntas a la vez\"", "\"Responde por mí\"", "\"Dime que soy perfecto\"", "\"Hazme una pregunta a la vez y dame una fortaleza y una mejora\""], answer: 3, why: "Una a la vez y con comentarios desarrolla una habilidad real." },
      { q: "Practicar las respuestas de entrevista en voz alta ayuda porque:", options: ["Hablar es distinto de leer; hace las respuestas naturales", "Es obligatorio", "La IA no puede leer texto", "Es más rápido que escribir"], answer: 0, why: "Decirlo en voz alta te prepara para la entrevista real." },
      { q: "¿Dónde se publican los empleos federales?", options: ["Solo en redes sociales", "En USAJOBS", "En mensajes de texto", "Solo en las bases"], answer: 1, why: "USAJOBS es el sitio de empleos del gobierno federal." },
      { q: "Un reclutador te manda un cheque para depositar y te pide que devuelvas una parte. Esto es:", options: ["Un bono de contratación", "Un beneficio del VA", "Una señal de alerta de estafa de empleo", "Un proceso de ingreso normal"], answer: 2, why: "El cheque para devolver dinero es una estafa común." },
      { q: "¿Cuándo está bien darle tu número de Seguro Social a un empleador?", options: ["En el primer chat de texto", "Para conseguir una entrevista", "Antes de cualquier oferta", "Para el papeleo real después de una oferta real, por el proceso oficial"], answer: 3, why: "Los empleadores reales solo lo necesitan para el papeleo de contratación después de una oferta." }
    ]
  }
};

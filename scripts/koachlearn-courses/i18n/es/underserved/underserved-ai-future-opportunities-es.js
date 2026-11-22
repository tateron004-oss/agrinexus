"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-future-opportunities.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-future-opportunities-es",
  lang: "es",
  translationOf: "underserved-ai-future-opportunities",
  category: "Undeserved Community",
  name: "La IA y las oportunidades del futuro",
  skills: "Ver dónde la IA está cambiando el trabajo, Investigar un empleo que está creciendo, Revisar datos de empleo en sitios oficiales, Encontrar capacitación gratuita, Hacer un plan de aprendizaje",
  outcome: "elegir un empleo en crecimiento que te interese, investigarlo con un asistente de IA gratuito y con el sitio oficial de perspectivas de empleo de Estados Unidos, y escribir un plan sencillo de tres pasos para empezar a aprender para ese empleo con capacitación gratuita cerca de ti.",
  about: [
    "La IA está cambiando muchos trabajos: en tiendas, oficinas, almacenes, hospitales, escuelas y en casa. Eso puede dar miedo. Este curso te muestra cómo convertir ese cambio en una oportunidad para ti y tu familia.",
    "Vas a aprender dónde está apareciendo la IA en el trabajo, cómo usar un asistente de IA gratuito para explorar empleos, cómo revisar lo que dice en sitios oficiales y cómo encontrar capacitación gratuita en tu biblioteca, un colegio comunitario o un American Job Center.",
    "Puedes hacer cada lección en un teléfono o en una computadora gratuita de la biblioteca. Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe un plan de una página para un empleo en crecimiento: qué es el empleo, cuánto paga y qué tan rápido está creciendo (revisado en el Occupational Outlook Handbook oficial), dos habilidades que necesitas y tres pasos que vas a dar en el próximo mes con capacitación gratuita cerca de ti.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos y jóvenes adultos de comunidades desatendidas que trabajan en tiendas, oficinas, almacenes, servicios de salud, servicio de comida o en casa, o que buscan trabajo, y que se preocupan por cómo la IA va a cambiar sus empleos.",
    startingPoint: "Conocen bien su propio trabajo y usan un teléfono. Han oído que la IA está cambiando los empleos, pero no saben qué empleos están creciendo, dónde encontrar datos oficiales sobre empleos ni dónde capacitarse gratis.",
    gap: "La IA está cambiando muchas tareas en el trabajo, y quien no tiene un plan se puede quedar atrás. Necesitan encontrar empleos en crecimiento con datos oficiales, usar la IA para explorarlos, encontrar capacitación gratuita y dar pasos pequeños con fecha, evitando las ofertas falsas de empleo y de capacitación.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca",
      "Costo: solo sitios oficiales gratuitos y capacitación gratuita o de bajo costo",
      "La IA se puede equivocar sobre sueldos, licencias y capacitación: hay que revisar bls.gov/ooh y los sitios oficiales del estado",
      "Riesgo de privacidad y de estafas: nada de números de Seguro Social, números de banco ni contraseñas en la IA ni en sitios de empleo"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con un empleo que tú o tu familia conocen", action: "identificar las tareas en las que la IA puede ayudar y las que todavía necesita hacer una persona", standard: "nombrando al menos dos de cada una" },
    { id: "O2", condition: "Con el Occupational Outlook Handbook en bls.gov/ooh", action: "encontrar un empleo en crecimiento y anotar su sueldo mediano, la capacitación que pide y sus perspectivas", standard: "sacados de la página actual" },
    { id: "O3", condition: "Con un asistente de IA gratuito", action: "hacer preguntas claras sobre el trabajo diario y las habilidades de un empleo, y luego revisar en sitios oficiales los datos de sueldo, licencias y capacitación", standard: "sin datos privados en el prompt" },
    { id: "O4", condition: "Con las habilidades que pide un empleo", action: "encontrar dos lugares gratuitos o de bajo costo cerca de ti para aprenderlas", standard: "anotando el nombre, el teléfono y el horario de cada uno" },
    { id: "O5", condition: "Con una meta de empleo", action: "crear un plan de una página con tres pasos pequeños y una fecha para cada uno", standard: "con cada paso posible en una o dos semanas y ajustado a tu tiempo y tu familia" },
    { id: "O6", condition: "Con una oferta de empleo o de capacitación", action: "revisar si tiene señales de estafa y dejar fuera los números privados", standard: "antes de pagar, firmar o compartir nada" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo la IA está cambiando el trabajo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Dónde aparece hoy la IA en el trabajo",
          minutes: 4,
          goal: "Nombrar tres formas en que la IA ya se usa en trabajos a tu alrededor.",
          text: [
            "La IA es un programa de computadora que puede hacer tareas que normalmente necesitan a una persona, como escribir, ordenar, responder preguntas o detectar patrones. Puede que ya la veas todos los días.",
            "En una tienda, la IA ayuda a decidir cuánta mercancía pedir. En un centro de llamadas, un chatbot responde preguntas sencillas antes de que una persona tome la llamada. En una clínica, un programa ayuda a escribir las notas de la consulta. En un almacén, escáneres y robots ayudan a llevar el control de las cajas.",
            "En la mayoría de los trabajos, la IA no reemplaza el trabajo completo. Se encarga de algunas tareas y las personas hacen el resto: hablar con los clientes, resolver problemas, arreglar cosas, cuidar a otros y tomar decisiones."
          ],
          words: [["IA", "inteligencia artificial: programas que hacen tareas que normalmente necesitan a una persona."], ["Tarea", "una parte de un trabajo, como contestar el teléfono o contar mercancía."]],
          slides: [
            { title: "La IA ya está en el trabajo", bullets: ["Tiendas: pedir mercancía", "Centros de llamadas: chatbots responden lo sencillo", "Clínicas: ayuda para escribir notas", "Almacenes: control de cajas"] },
            { title: "La IA toma tareas, no trabajos completos", bullets: ["El programa hace algunas tareas", "Las personas hacen el resto"] },
            { title: "Lo que las personas siguen haciendo mejor", bullets: ["Hablar con la gente y cuidarla", "Resolver problemas nuevos", "Arreglar cosas y tomar decisiones"] }
          ],
          tryIt: "Piensa en un trabajo que hayas tenido tú o alguien de tu familia. Anota dos tareas con las que la IA podría ayudar y dos tareas que todavía necesitan a una persona.",
          youCanNow: "nombrar formas en que se usa la IA en el trabajo y explicar por qué todavía se necesitan personas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es la IA?", options: ["Un programa que hace tareas que normalmente necesitan a una persona", "Un nuevo tipo de teléfono", "Un programa de empleo del gobierno", "Un robot que hace todos los trabajos"], answer: 0, why: "La IA es un programa que puede escribir, ordenar, contestar preguntas o encontrar patrones." },
            { objective: "O1", q: "En una clínica, un programa escribe las notas de las consultas. ¿Qué tarea sigue haciendo una persona?", options: ["Escribir cada palabra de las notas", "Consolar y cuidar al paciente", "Contar las notas", "Nada; el programa lo hace todo"], answer: 1, why: "La IA se encarga de algunas tareas, pero las personas siguen cuidando a otros y tomando decisiones." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Empleos en crecimiento y las habilidades que piden",
          minutes: 5,
          goal: "Encontrar un empleo en crecimiento y su sueldo en el Occupational Outlook Handbook oficial.",
          text: [
            "Algunos empleos están creciendo por la tecnología y otros porque la gente siempre los va a necesitar, como la atención médica, los oficios especializados y el cuidado de niños y adultos mayores.",
            "La Oficina de Estadísticas Laborales de Estados Unidos (BLS) tiene un sitio web gratuito llamado Occupational Outlook Handbook (manual de perspectivas de empleo) en bls.gov/ooh. Para cientos de empleos te dice en qué consiste el trabajo, el sueldo habitual, la capacitación que se necesita y qué tan rápido se espera que crezca.",
            "Por ejemplo, el manual espera que los empleos de computación y tecnología de la información, como grupo, crezcan más rápido que el promedio de 2025 a 2035. Estos números se actualizan, así que lee siempre tú la página actual."
          ],
          steps: ["Entra a bls.gov/ooh en un teléfono o en una computadora de la biblioteca.", "Elige un grupo de empleos, como Healthcare (salud) o Computer and Information Technology (computación y tecnología).", "Haz clic en un empleo.", "Anota el sueldo, la capacitación que se necesita y las perspectivas del empleo."],
          words: [["Perspectivas de empleo", "qué tan rápido se espera que crezca o baje el número de empleos."], ["Sueldo mediano", "el sueldo del medio: la mitad de los trabajadores gana más y la mitad gana menos."]],
          sources: [{ name: "Oficina de Estadísticas Laborales de EE. UU.: Occupational Outlook Handbook, computación y tecnología de la información", url: "https://www.bls.gov/ooh/computer-and-information-technology/home.htm" }],
          slides: [
            { title: "Empleos que están creciendo", bullets: ["Atención médica y cuidado de personas", "Oficios especializados", "Computación y tecnología"] },
            { title: "Tu guía gratuita de empleos: bls.gov/ooh", bullets: ["En qué consiste el trabajo", "Sueldo habitual y capacitación necesaria", "Qué tan rápido está creciendo"] },
            { title: "Cómo usarla", bullets: ["Elige un grupo de empleos", "Haz clic en un empleo", "Anota sueldo, capacitación y perspectivas"] }
          ],
          tryIt: "Abre bls.gov/ooh, elige un empleo que te interese y anota su sueldo mediano, la capacitación que necesita y sus perspectivas de empleo.",
          youCanNow: "buscar cualquier empleo en el Occupational Outlook Handbook oficial y leer su sueldo, capacitación y perspectivas.",
          quickCheck: [
            { objective: "O2", q: "¿Quién publica el Occupational Outlook Handbook?", options: ["Un sitio privado de empleos", "Una empresa de noticias", "La Oficina de Estadísticas Laborales de Estados Unidos", "Un colegio comunitario"], answer: 2, why: "El manual en bls.gov/ooh lo publica la Oficina de Estadísticas Laborales de Estados Unidos." },
            { objective: "O2", q: "Un amigo te dice el sueldo de un empleo según una página que guardó hace años. ¿Qué haces?", options: ["Usas su número", "Adivinas un número más alto", "Le pides a la IA que lo confirme", "Lees la página actual en bls.gov/ooh"], answer: 3, why: "Los números de sueldo y perspectivas se actualizan, así que lees tú mismo la página actual." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Usar la IA para explorar un empleo",
          minutes: 5,
          goal: "Hacerle preguntas claras a un asistente de IA gratuito sobre un empleo y luego revisar las respuestas.",
          text: [
            "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini puede explicar un empleo con palabras sencillas, decir qué habilidades necesita y sugerir preguntas para hacerles a las personas que lo hacen.",
            "Cuéntale tu situación sin datos privados. Por ejemplo: \"He trabajado 3 años en comida rápida y me gusta ayudar a la gente. Explica con palabras sencillas qué hace un asistente médico en un día normal.\"",
            "La IA se puede equivocar sobre sueldos, licencias y capacitación. Revisa esos datos en bls.gov/ooh o en el sitio oficial de tu estado antes de hacer planes."
          ],
          steps: ["Abre un asistente de IA gratuito.", "Dile el empleo y un poco de tu experiencia.", "Pregunta cómo es un día normal y qué habilidades necesita.", "Revisa el sueldo y la capacitación en bls.gov/ooh."],
          words: [["Instrucción (prompt)", "lo que escribes o dices a un asistente de IA."], ["Licencia", "un permiso oficial del estado para hacer ciertos trabajos."]],
          slides: [
            { title: "La IA te puede ayudar a explorar", bullets: ["Explica un empleo con palabras sencillas", "Dice qué habilidades se necesitan", "Sugiere preguntas para los trabajadores"] },
            { title: "Una buena instrucción", bullets: ["El empleo que quieres conocer", "Un poco de tu experiencia", "Cómo quieres la respuesta: palabras sencillas, una lista"] },
            { title: "Revisa siempre", bullets: ["Sueldo, licencias y capacitación pueden estar mal", "Revisa en bls.gov/ooh o en el sitio de tu estado"] }
          ],
          tryIt: "Pide a un asistente de IA que explique cómo es un día normal en el empleo que elegiste y cuáles son sus cinco habilidades principales. Compara un dato con lo que dice bls.gov/ooh.",
          youCanNow: "usar la IA para conocer un empleo y revisar sus datos en un sitio oficial.",
          quickCheck: [
            { objective: "O3", q: "¿Qué datos de una IA debes revisar en sitios oficiales?", options: ["El sueldo, las licencias y la capacitación", "Cómo se escribe el nombre del empleo", "Qué significa la palabra \"empleo\"", "El nombre de la IA"], answer: 0, why: "La IA se puede equivocar sobre el sueldo, las licencias y la capacitación, así que los revisas." },
            { objective: "O3", q: "Quieres que la IA te explique el empleo de supervisor de almacén. ¿Qué incluyes?", options: ["Tu número de Seguro Social", "Tu experiencia y lo que te gusta, sin datos privados", "Tus datos del banco", "Nada sobre ti"], answer: 1, why: "Tu experiencia ayuda a la IA a explicarte el empleo; los datos privados se quedan fuera." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo la IA está cambiando el trabajo",
        questions: [
          { objective: "O1", q: "En la mayoría de los trabajos, ¿qué hace la IA?", options: ["Reemplaza a todos los trabajadores", "Se encarga de algunas tareas y las personas hacen el resto", "Nada", "Toma todas las decisiones"], answer: 1, why: "La IA suele hacer algunas tareas; las personas siguen haciendo lo que necesita criterio y cuidado." },
          { objective: "O2", q: "¿Qué sitio oficial y gratuito muestra el sueldo, la capacitación y las perspectivas de un empleo?", options: ["Una página de redes sociales", "Un anuncio emergente", "El Occupational Outlook Handbook en bls.gov/ooh", "Un enlace en un mensaje de texto"], answer: 2, why: "La Oficina de Estadísticas Laborales publica el Occupational Outlook Handbook." },
          { objective: "O2", q: "¿Qué significa \"sueldo mediano\"?", options: ["El sueldo más alto", "El sueldo más bajo", "El sueldo después de impuestos", "El sueldo del medio: la mitad gana más y la mitad menos"], answer: 3, why: "La mediana es el número del medio." },
          { objective: "O3", q: "La IA te dice que un empleo no necesita licencia en tu estado. ¿Qué haces?", options: ["Lo revisas en el sitio oficial de tu estado o en bls.gov/ooh", "Le crees", "Renuncias hoy a tu trabajo", "Se lo cuentas a todos"], answer: 0, why: "La IA se puede equivocar sobre licencias; los sitios oficiales son la fuente confiable." },
          { objective: "O3", q: "¿Cuál es la mejor instrucción para explorar un empleo?", options: ["\"empleos\"", "\"Trabajé 3 años en comida rápida y me gusta ayudar a la gente. Explica con palabras sencillas qué hace un asistente médico en un día.\"", "\"Este es mi número de Seguro Social\"", "\"dinero\""], answer: 1, why: "Nombra el empleo, da tu experiencia y dice cómo quieres la respuesta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prepararte para tu siguiente paso",
      lessons: [
        {
          objectives: ["O4"],
          title: "Encontrar capacitación gratuita cerca de ti",
          minutes: 5,
          goal: "Encontrar dos lugares gratuitos o baratos para aprender las habilidades de tu empleo.",
          text: [
            "No necesitas mucho dinero para empezar a aprender. Las bibliotecas públicas muchas veces ofrecen clases de computación gratis y aprendizaje en línea gratuito. Los colegios comunitarios ofrecen certificados a bajo costo, y muchos estudiantes califican para ayuda financiera.",
            "Los American Job Centers funcionan con el Departamento de Trabajo de Estados Unidos. Ayudan con la búsqueda de empleo, referencias a empleos y capacitación. Algunos servicios tienen requisitos, así que pregunta en tu centro local para qué calificas. Encuentra uno con el American Job Center Finder de CareerOneStop o llama al 1-877-US-2JOBS.",
            "Pregunta a un asistente de IA gratuito: \"¿Qué formas gratuitas hay de aprender las habilidades básicas para un empleo de asistente médico?\" Luego revisa cada idea con la biblioteca, el colegio o el centro de empleo directamente."
          ],
          steps: ["Pregunta en tu biblioteca qué clases gratis y aprendizaje en línea ofrece.", "Busca el colegio comunitario más cercano y sus programas de certificado.", "Encuentra el American Job Center más cercano con el buscador de CareerOneStop.", "Anota dos lugares, sus teléfonos y sus horarios."],
          words: [["Certificado", "un programa de capacitación corto que demuestra que aprendiste una habilidad de trabajo."], ["American Job Center", "una oficina local, que funciona con el Departamento de Trabajo de Estados Unidos, que ayuda a la gente a encontrar empleo y capacitación."]],
          sources: [{ name: "Departamento de Trabajo de EE. UU.: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" }, { name: "CareerOneStop: buscador de American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          slides: [
            { title: "Lugares gratis o baratos para aprender", bullets: ["Clases y aprendizaje en línea en la biblioteca", "Certificados de colegios comunitarios", "American Job Centers"] },
            { title: "American Job Centers", bullets: ["Ayudan con búsqueda de empleo y capacitación", "Algunos servicios tienen requisitos", "Encuéntralo: buscador de CareerOneStop o 1-877-US-2JOBS"] },
            { title: "Usa la IA y luego llama", bullets: ["Pide a la IA formas gratis de aprender", "Revisa cada idea con el lugar mismo"] }
          ],
          tryIt: "Encuentra dos lugares cerca de ti donde podrías aprender habilidades para tu empleo. Anota el nombre, el teléfono y el horario de cada uno.",
          youCanNow: "encontrar capacitación gratuita o barata cerca de ti para el empleo que quieres.",
          quickCheck: [
            { objective: "O4", q: "¿Qué ofrecen muchas veces los colegios comunitarios?", options: ["Autos gratis", "Solo carreras de cuatro años", "Certificados de bajo costo, con ayuda financiera para muchos estudiantes", "Empleos pagados desde el primer día"], answer: 2, why: "Los colegios comunitarios ofrecen certificados de bajo costo, y muchos estudiantes califican para recibir ayuda." },
            { objective: "O4", q: "No sabes si calificas para capacitarte en un American Job Center. ¿Qué haces?", options: ["Supones que no", "Le pagas a un sitio web para averiguarlo", "Te saltas la capacitación", "Le preguntas a tu centro local para qué calificas"], answer: 3, why: "Algunos servicios tienen requisitos, así que le preguntas directamente al centro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Convertir una meta en pasos pequeños",
          minutes: 4,
          goal: "Dividir una meta de empleo en tres pasos pequeños con fechas.",
          text: [
            "Una meta grande como \"conseguir un mejor empleo\" puede sentirse demasiado grande. Los pasos pequeños con fechas la hacen real.",
            "Un buen paso es algo que puedes terminar en una o dos semanas: \"Llamar a la biblioteca el martes para inscribirme en la clase de computación.\" \"Hablar con una persona que trabaja como asistente médico antes del día 15.\"",
            "Puedes pedirle ayuda a un asistente de IA: \"Ayúdame a dividir mi meta de ser asistente médico en tres pasos pequeños para el próximo mes. Puedo dedicarle 3 horas a la semana.\" Luego cambia el plan para que encaje en tu vida, tu familia y tu horario."
          ],
          steps: ["Escribe tu meta en una frase.", "Pide a la IA que la divida en tres pasos pequeños.", "Ponle una fecha a cada paso.", "Cambia el plan para que encaje en tu tiempo y tu familia."],
          words: [["Meta", "algo que quieres alcanzar."], ["Fecha límite", "la fecha en que planeas terminar un paso."]],
          slides: [
            { title: "Las metas grandes necesitan pasos pequeños", bullets: ["\"Conseguir un mejor empleo\" es demasiado grande", "Los pasos pequeños la hacen real"] },
            { title: "Un buen paso", bullets: ["Lo puedes terminar en una o dos semanas", "Tiene fecha", "Ejemplo: llamar a la biblioteca el martes"] },
            { title: "Deja que la IA ayude y luego ajusta", bullets: ["Dile tu meta y tu tiempo", "Cambia el plan para que encaje en tu vida"] }
          ],
          tryIt: "Escribe tu meta de empleo en una frase. Pide a un asistente de IA que la divida en tres pasos para el próximo mes y luego ponle una fecha a cada paso.",
          youCanNow: "convertir una meta de empleo en tres pasos pequeños con fechas.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es un paso pequeño que puedes terminar en una o dos semanas?", options: ["Hablar con un asistente médico antes del día 15", "Ser enfermero", "Conseguir un mejor empleo", "Cambiar de carrera algún día"], answer: 0, why: "Un paso pequeño es concreto, se puede hacer pronto y tiene fecha." },
            { objective: "O5", q: "El plan de la IA dice que estudies 10 horas a la semana, pero tú tienes 3. ¿Qué haces?", options: ["Lo sigues de todos modos", "Cambias el plan para que quepa en tu tiempo", "Te rindes", "Le pides a la IA que estudie por ti"], answer: 1, why: "Cambias el plan para que vaya con tu vida, tu familia y tu horario." }
          ]
        },
        {
          objectives: ["O6","O5"],
          title: "Tu plan, y cómo cuidarte mientras buscas",
          minutes: 5,
          goal: "Terminar tu plan de una página y reconocer ofertas falsas de empleo y capacitación.",
          text: [
            "Junta todo en una página: el empleo, su sueldo y perspectivas según bls.gov/ooh, dos habilidades que necesitas, dos lugares para aprender y tres pasos con fecha. Guárdalo en tu teléfono o imprímelo en la biblioteca.",
            "Ten cuidado. Los estafadores publican empleos falsos y capacitaciones falsas. Señales de alerta: te piden pagar para conseguir el empleo, piden tu número de banco o de Seguro Social antes de una entrevista, prometen mucho dinero por poco trabajo o te apuran.",
            "Nunca escribas tu número de Seguro Social, tus datos de banco ni tus contraseñas en un asistente de IA. Revisa cualquier programa de capacitación con tu biblioteca, tu centro de empleo o el sitio web oficial de la escuela antes de pagar o firmar algo."
          ],
          steps: ["Escribe el empleo, el sueldo y las perspectivas.", "Agrega dos habilidades y dos lugares para aprender.", "Agrega tus tres pasos con fecha.", "Revisa cada oferta para ver si tiene señales de estafa antes de compartir algo."],
          words: [["Estafa", "un engaño para robar dinero o información."]],
          slides: [
            { title: "Tu plan de una página", bullets: ["Empleo, sueldo y perspectivas (de bls.gov/ooh)", "Dos habilidades y dos lugares para aprender", "Tres pasos con fecha"] },
            { title: "Señales de empleo falso", bullets: ["Tienes que pagar para conseguir el empleo", "Piden banco o Seguro Social antes de una entrevista", "Mucho dinero por poco trabajo, o te apuran"] },
            { title: "Cuídate", bullets: ["Nada de números privados en la IA", "Revisa la capacitación con la biblioteca o el centro de empleo", "Revisa antes de pagar o firmar"] }
          ],
          tryIt: "Tarea final: escribe tu plan de una página con el empleo, el sueldo y las perspectivas, dos habilidades, dos lugares para aprender y tres pasos con fecha. Revisa que no tenga nada privado antes de compartirlo.",
          youCanNow: "hacer un plan real y revisado para un empleo en crecimiento y evitar estafas de empleo comunes.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de un empleo falso?", options: ["Una entrevista en la oficina de la empresa", "Un anuncio en el sitio web de la propia empresa", "Te apuran a pagar antes de que te contraten", "Un empleo anunciado en tu American Job Center"], answer: 2, why: "Los empleadores de verdad no te piden pagar para conseguir el empleo ni te apuran." },
            { objective: "O6", q: "Una escuela de capacitación en línea quiere que le pagues hoy por un \"empleo garantizado\". ¿Qué haces?", options: ["Pagas hoy para apartar tu lugar", "Mandas tu número de banco", "Primero se lo compartes a tus amigos", "La revisas en el sitio oficial de la escuela, en tu biblioteca o en tu centro de empleo"], answer: 3, why: "Revisa cualquier programa de capacitación con fuentes confiables antes de pagar o firmar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Prepararte para tu siguiente paso",
        questions: [
          { objective: "O4", q: "¿Dónde puedes encontrar muchas veces clases de computación gratis?", options: ["En un anuncio emergente", "En un mensaje de un desconocido", "En tu biblioteca pública", "En una tienda de tarjetas de regalo"], answer: 2, why: "Muchas bibliotecas públicas ofrecen clases y aprendizaje en línea gratis." },
          { objective: "O4", q: "¿Qué es un American Job Center?", options: ["Una oficina local que ayuda con empleo y capacitación", "Una tienda", "Un banco", "Una aplicación de redes sociales"], answer: 0, why: "Los American Job Centers funcionan con el Departamento de Trabajo de Estados Unidos para ayudar a quienes buscan empleo." },
          { objective: "O5", q: "¿Cuál es un buen paso pequeño?", options: ["\"Ser rico\"", "\"Algún día aprender cosas\"", "\"Conseguir todos los empleos\"", "\"Llamar a la biblioteca el martes para inscribirme en la clase de computación\""], answer: 3, why: "Es pequeño, claro y tiene fecha." },
          { objective: "O6", q: "Una oferta de empleo te pide pagar $100 para contratarte. Esto es:", options: ["Normal", "Una señal de alerta de estafa", "Una gran oferta", "Una regla del gobierno"], answer: 1, why: "Los empleadores de verdad no te cobran por darte trabajo." },
          { objective: "O6", q: "Una IA sugiere un programa de capacitación. Antes de pagar, debes:", options: ["Revisarlo con el sitio oficial de la escuela, tu biblioteca o tu centro de empleo", "Pagar de inmediato", "Darle a la IA tu número de banco", "Ignorar toda capacitación"], answer: 0, why: "Revisa cualquier programa con una fuente confiable antes de pagar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y las oportunidades del futuro",
    questions: [
      { objective: "O1", q: "La mejor forma de describir la IA es:", options: ["Un tipo de teléfono", "Un programa que hace tareas que normalmente necesitan a una persona", "Una oficina del gobierno", "Un puesto de trabajo"], answer: 1, why: "La IA es un programa que escribe, ordena, responde o detecta patrones." },
      { objective: "O1", q: "¿Cuál es un ejemplo de IA en el trabajo?", options: ["Un chatbot que responde preguntas sencillas de los clientes", "Una engrapadora", "Un calendario de papel", "Una escoba"], answer: 0, why: "Los chatbots son IA que responde preguntas sencillas." },
      { objective: "O1", q: "¿En qué tarea sigue siendo mejor una persona?", options: ["Contar las mismas cosas una y otra vez", "Ordenar correos por fecha", "Consolar a un paciente preocupado", "Copiar números en una tabla"], answer: 2, why: "Cuidar a las personas necesita a un ser humano." },
      { objective: "O2", q: "¿Qué es el Occupational Outlook Handbook?", options: ["Una guía gratuita del gobierno de Estados Unidos sobre empleos, sueldos y capacitación", "Una revista de paga", "Una página de redes sociales", "Una aplicación de banco"], answer: 0, why: "La publica la Oficina de Estadísticas Laborales en bls.gov/ooh." },
      { objective: "O2", q: "Las \"perspectivas de empleo\" te dicen:", options: ["Cómo hay que vestirse en el empleo", "Qué tan rápido se espera que crezca o baje el número de empleos", "El nombre del jefe", "La dirección del empleo"], answer: 1, why: "Las perspectivas tratan del crecimiento esperado." },
      { objective: "O2", q: "¿Por qué leer la página actual en lugar de confiar en un número viejo?", options: ["Los números viejos siempre están bien", "Las páginas nunca cambian", "Los números de sueldo y perspectivas se actualizan con el tiempo", "No importa"], answer: 2, why: "Los números de empleo cambian, así que lee la página oficial más reciente." },
      { objective: "O3", q: "¿Qué instrucción te dará la respuesta más útil sobre un empleo?", options: ["\"empleo\"", "\"ayuda\"", "\"cosas del trabajo\"", "\"Me gusta arreglar cosas y tengo 2 años en mantenimiento. Explica con palabras sencillas qué hace un técnico de aire acondicionado y calefacción.\""], answer: 3, why: "Da el empleo, tu experiencia y el formato." },
      { objective: "O3", q: "La IA te da un sueldo para un empleo. Debes:", options: ["Revisarlo en bls.gov/ooh", "Creerlo por completo", "Publicarlo en internet", "Ignorar todos los sueldos"], answer: 0, why: "La IA se puede equivocar; revisa el sueldo en el sitio oficial." },
      { objective: "O3", q: "¿Qué es una licencia?", options: ["Una aplicación del teléfono", "Un permiso oficial del estado para hacer ciertos trabajos", "Una oferta de empleo", "Un tipo de currículum"], answer: 1, why: "Algunos empleos necesitan una licencia del estado." },
      { objective: "O4", q: "¿Cuál es un lugar de bajo costo para sacar un certificado de trabajo?", options: ["Un anuncio emergente", "Un colegio comunitario", "Un desconocido en internet", "Una tienda de tarjetas de regalo"], answer: 1, why: "Los colegios comunitarios ofrecen certificados a bajo costo, y la ayuda financiera puede ayudar." },
      { objective: "O4", q: "¿Cómo puedes encontrar un American Job Center?", options: ["Preguntándole a un estafador", "Adivinando", "Con el buscador de CareerOneStop o llamando al 1-877-US-2JOBS", "Solo por correo"], answer: 2, why: "Esas son las formas oficiales que da el Departamento de Trabajo." },
      { objective: "O4", q: "Algunos servicios de los American Job Centers tienen:", options: ["Requisitos, así que pregunta para qué calificas", "Una contraseña secreta", "Una tarjeta de regalo obligatoria", "Nada de personal"], answer: 0, why: "El Departamento de Trabajo dice que algunos servicios tienen requisitos." },
      { objective: "O5", q: "¿Por qué dividir una meta grande en pasos pequeños?", options: ["Hace que la meta desaparezca", "Hace que la meta sea real y alcanzable", "Lo exige la ley", "Cuesta dinero"], answer: 1, why: "Los pasos pequeños con fecha son más fáciles de empezar y terminar." },
      { objective: "O5", q: "Un buen paso incluye:", options: ["Ninguna fecha", "Algo que puedes terminar en una o dos semanas, con fecha", "Diez años de trabajo", "Solo un deseo"], answer: 1, why: "Los pasos pequeños con fecha te mantienen avanzando." },
      { objective: "O5", q: "Después de que la IA te hace un plan, debes:", options: ["Seguirlo al pie de la letra pase lo que pase", "Borrarlo", "Cambiarlo para que encaje en tu tiempo y tu familia", "Compartir tu número de banco"], answer: 2, why: "Tú conoces mejor tu vida; ajusta el plan." },
      { objective: "O5", q: "Tu plan de una página debe incluir:", options: ["Tus contraseñas", "Tu número de banco", "Tu número de Seguro Social", "El empleo, su sueldo y perspectivas, habilidades, lugares para aprender y pasos con fecha"], answer: 3, why: "Esas partes hacen un plan completo y seguro." },
      { objective: "O6", q: "Una oferta de empleo pide tu número de Seguro Social antes de cualquier entrevista. Esto es:", options: ["Una señal de alerta", "Normal en todos los empleos", "Un premio", "Algo que exige la IA"], answer: 0, why: "Pedir números privados demasiado pronto es señal de estafa." },
      { objective: "O6", q: "¿Qué nunca debes escribir en un asistente de IA?", options: ["\"Hazlo más sencillo\"", "\"¿Qué habilidades necesita un cocinero?\"", "Tu número de cuenta bancaria", "\"Dame tres pasos\""], answer: 2, why: "Los datos del banco son información privada." },
      { objective: "O6", q: "\"¡Mucho dinero por poco trabajo, empieza hoy!\" lo más probable es que sea:", options: ["Un empleo del gobierno", "Una señal de alerta de estafa", "Una clase de la biblioteca", "Un certificado"], answer: 1, why: "Las promesas que suenan demasiado buenas son una señal de estafa común." },
      { objective: "O6", q: "Antes de pagar un programa de capacitación, revísalo con:", options: ["Un anuncio emergente", "Solo la persona que lo vende", "Nadie", "El sitio oficial de la escuela, tu biblioteca o tu centro de empleo"], answer: 3, why: "Las fuentes confiables e independientes te ayudan a evitar programas falsos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      4,
      7,
      10,
      12,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Datos del empleo",
        objective: "O2",
        notYet: "Falta el sueldo o las perspectivas, o no vienen de bls.gov/ooh.",
        meets: "El empleo, en qué consiste, su sueldo y sus perspectivas, revisados en la página actual de bls.gov/ooh.",
        exceeds: "También anota la capacitación que pide el empleo."
      },
      {
        name: "Habilidades",
        objective: "O3",
        notYet: "No hay habilidades, o no van con el empleo.",
        meets: "Dos habilidades que pide el empleo.",
        exceeds: "Anota qué habilidad ya tiene la persona por trabajos anteriores."
      },
      {
        name: "Lugares para aprender",
        objective: "O4",
        notYet: "Menos de dos lugares, o sin datos de contacto.",
        meets: "Dos lugares gratuitos o de bajo costo con nombre, teléfono y horario.",
        exceeds: "Anota qué ofrece cada lugar y los requisitos por los que hay que preguntar."
      },
      {
        name: "Tres pasos con fecha",
        objective: "O5",
        notYet: "Los pasos son vagos o no tienen fecha.",
        meets: "Tres pasos pequeños para el próximo mes, cada uno con una fecha.",
        exceeds: "Ajustados al tiempo real y al horario familiar de la persona."
      },
      {
        name: "Seguro para compartir",
        objective: "O6",
        notYet: "El plan tiene un número privado, o no se revisó una oferta de capacitación.",
        meets: "Sin números privados, y con las ofertas revisadas para ver si tienen señales de alerta.",
        exceeds: "Puede nombrar las señales de alerta que buscó."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que cumplen al menos un paso de su plan dentro de 30 días (encuesta de seguimiento)",
      "Personas que se inscriben en una capacitación gratuita o de bajo costo dentro de 90 días",
      "Personas que consiguen un empleo o un ascenso en el campo que eligieron dentro de 12 meses"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "El Occupational Outlook Handbook en bls.gov/ooh",
      "Papel o una nota en el teléfono para el plan de una página",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Abran juntos bls.gov/ooh en un proyector y recorran un empleo antes de que cada persona elija el suyo.",
      "Lleva una lista de las bibliotecas, los colegios comunitarios y el American Job Center más cercano.",
      "Recuerda que deben revisar los datos de sueldo y licencias en sitios oficiales, no solo con la IA.",
      "Repasen las señales de alerta de los empleos y las capacitaciones falsos; nunca pidas que compartan números privados.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

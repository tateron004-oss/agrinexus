"use strict";

// Koach Learn course (Spanish translation of shared/home-health-aide.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "home-health-aide-es",
  lang: "es",
  translationOf: "home-health-aide",
  category: "Workforce Development",
  name: "Habilidades de asistente de salud en el hogar",
  skills: "Conocer el trabajo de asistente de salud en el hogar y cómo llegar a él, Revisar la seguridad de una casa, Seguir un plan de cuidado con dignidad, Escribir una nota de visita y avisar de los cambios, Cuidar la privacidad y los límites",
  outcome: "explicar qué hace un asistente de salud en el hogar y cómo formarte en tu estado, y armar un kit de visita de práctica: una lista de seguridad del hogar, una lista de tareas del plan de cuidado y una nota de visita basada en hechos.",
  about: [
    "Los asistentes de salud en el hogar ayudan a las personas a vivir seguras en su casa: personas mayores, personas con discapacidad y personas que se recuperan después de estar en el hospital. Ayudan a bañarse, vestirse, comer y moverse, y están atentos a los cambios para avisar a una enfermera.",
    "Este curso te prepara para la formación y para el trabajo. No te da una certificación. Los asistentes que trabajan para agencias de salud en el hogar o de cuidados paliativos (hospicio) pagadas por Medicare (el seguro médico federal de Estados Unidos) deben terminar una formación oficial y aprobar un examen, y muchos estados agregan sus propias reglas. Vas a aprender dónde revisar las de tu estado.",
    "Vas a practicar la forma de pensar que pide el trabajo: revisar la seguridad de una casa, seguir un plan de cuidado, escribir lo que ves y proteger la información y el dinero del cliente. El cuidado práctico, como los traslados, se aprende con la supervisión de una enfermera, no con una persona real en su casa.",
    "También es un buen camino para personas que regresan a casa después de estar en prisión. Las reglas sobre la revisión de antecedentes cambian según el estado y la agencia, así que el curso te muestra cómo preguntar."
  ],
  finalTask: "Arma un kit de visita de práctica para un cliente inventado (solo práctica): una lista de seguridad del hogar de una página, la lista de las tareas del plan de cuidado que harías en una visita y en qué orden, una nota de visita basada en hechos con un cambio que reportarías, y el nombre de la página oficial de tu estado sobre las reglas para asistentes de salud en el hogar.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan un trabajo estable de cuidado: personas que buscan empleo, personas que regresan a casa después de estar en prisión, inmigrantes, cuidadores familiares que quieren que les paguen por las habilidades que ya tienen, y adultos que vuelven a trabajar.",
    startingPoint: "Muchas han cuidado a un familiar. Pocas conocen la diferencia entre un asistente de salud en el hogar y un asistente de cuidado personal, las reglas de formación o cómo escribir una nota de visita.",
    gap: "Las agencias necesitan asistentes formados que sigan el plan de cuidado, se mantengan seguros en la casa del cliente, avisen de los cambios y protejan la privacidad. Los participantes necesitan conocer el camino de formación y estos hábitos para conseguir trabajo y mantener seguros a sus clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 7.º grado)",
      "Dispositivos: un teléfono o una computadora de la biblioteca; todas las tareas se pueden hacer en papel",
      "Las reglas de formación y de examen vienen de la ley federal, del estado y de la agencia; el curso señala páginas oficiales y no indica horas ni costos",
      "Ningún consejo sobre medicamentos ni dosis; nada de práctica con clientes reales en su casa",
      "Algunos participantes tienen antecedentes; las reglas de revisión de antecedentes cambian según el estado y la agencia"
    ],
    prerequisites: "Ninguno. \"Cuidar a un ser querido\" y \"Alfabetización en salud\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando la página oficial de tu estado y el anuncio de trabajo de una agencia", action: "describir qué hace un asistente de salud en el hogar y los pasos para formarte en tu estado", standard: "nombrando la formación, el examen o la prueba de competencia, y la página que revisaste" },
    { id: "O2", condition: "Con una imagen o una descripción de la casa de un cliente", action: "enumerar los peligros para la seguridad y lo que harías con cada uno", standard: "encontrando al menos 4 peligros, incluido uno para tu propia seguridad" },
    { id: "O3", condition: "Con un plan de cuidado de un cliente inventado", action: "ordenar las tareas de la visita y hacer cada una de forma que proteja la dignidad y las decisiones del cliente", standard: "sin salirte del plan de cuidado" },
    { id: "O4", condition: "Ante un cambio que notas en una visita", action: "escribir una nota de visita basada en hechos y decidir si llamar a la enfermera o al 911", standard: "con la hora, lo que viste u oíste, y a quién avisaste" },
    { id: "O5", condition: "Ante una situación sobre privacidad, dinero, regalos o un posible abuso", action: "elegir la acción que protege al cliente y sigue las reglas", standard: "acertando al menos 4 de 5 situaciones" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo y la casa",
      lessons: [
        {
          title: "Qué hace un asistente de salud en el hogar y cómo formarte",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describir el trabajo de asistente de salud en el hogar y enumerar los pasos para formarte en tu estado.",
          text: [
            "Los asistentes de salud en el hogar y los asistentes de cuidado personal ayudan a las personas en su casa con tareas diarias como bañarse, vestirse, comer y lavar la ropa. Los asistentes de salud en el hogar también pueden hacer tareas básicas de salud, como revisar el pulso, la temperatura y la respiración, según el estado. Los supervisan enfermeras u otro personal médico.",
            "Los asistentes de cuidado personal suelen dar ayuda no médica, como compañía, limpieza, cocina y transporte. Los anuncios de trabajo muchas veces usan los dos nombres, así que lee las tareas.",
            "Las agencias de salud en el hogar y de cuidados paliativos que reciben pagos de Medicare deben seguir reglas federales sobre sus asistentes. La Oficina de Estadísticas Laborales de EE. UU. (BLS) dice que los asistentes de estas agencias deben terminar una formación oficial y aprobar un examen estandarizado. Algunos estados también piden una licencia o certificación, una revisión de antecedentes o un examen de competencia.",
            "Este curso te prepara. Tu formación y tu examen vienen de una agencia o de un programa aprobado. Para revisar las reglas de tu estado, ve a la junta o al departamento de salud de tu estado. Muchas agencias forman a los asistentes nuevos, a veces gratis, así que pregunta."
          ],
          steps: ["Busca el nombre de tu estado más \"home health aide training requirements\" (requisitos de formación para asistentes de salud en el hogar) y abre la página del departamento de salud del estado.", "Anota las reglas de formación, de examen y de revisión de antecedentes.", "Mira dos anuncios de trabajo de agencias de salud en el hogar cerca de ti y haz una lista de las tareas y los requisitos.", "Pregunta a cada agencia si forma a asistentes nuevos."],
          words: [["Asistente de salud en el hogar (HHA)", "un asistente formado que da cuidado personal y algunas tareas básicas de salud en la casa del cliente, con la supervisión de una enfermera."], ["Asistente de cuidado personal", "un asistente que da ayuda no médica en casa, como limpieza, cocina y compañía."], ["Agencia", "una empresa que envía asistentes y enfermeras a las casas de los clientes."], ["Examen de competencia", "un examen que comprueba que conoces y sabes hacer las tareas del trabajo."]],
          slides: [
            { title: "Dos tipos de asistentes", bullets: ["Asistente de salud en el hogar: cuidado personal y algunas tareas básicas de salud", "Asistente de cuidado personal: ayuda no médica", "Lee las tareas de cada anuncio de trabajo"] },
            { title: "Quién supervisa", bullets: ["Los asistentes de salud en el hogar trabajan bajo una enfermera", "La enfermera escribe el plan de cuidado", "Tú lo sigues y avisas de los cambios"] },
            { title: "Reglas de formación", bullets: ["Agencias pagadas por Medicare: formación oficial y un examen", "Los estados pueden agregar licencia, examen o revisión de antecedentes", "Revisa la página del departamento de salud de tu estado"] },
            { title: "Este curso te prepara", bullets: ["No te da una certificación", "Muchas agencias forman a asistentes nuevos", "Pregunta antes de pagar"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU.: Asistentes de salud en el hogar y de cuidado personal", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop: Encuentra un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Busca la página oficial de tu estado sobre las reglas para asistentes de salud en el hogar. Luego busca un anuncio de trabajo de una agencia de salud en el hogar cerca de ti. En papel, escribe la regla de formación de la página del estado, tres tareas del anuncio y una pregunta que le harías a la agencia.",
          youCanNow: "explicar qué hace un asistente de salud en el hogar y encontrar las reglas de formación de tu estado en una página oficial.",
          quickCheck: [
            { objective: "O1", q: "¿Quién supervisa a un asistente de salud en el hogar?", options: ["El vecino del cliente", "Nadie", "Una enfermera u otro personal médico", "Los amigos del asistente"], answer: 2, why: "A los asistentes de salud en el hogar los supervisan enfermeras u otro personal médico." },
            { objective: "O1", q: "¿Dónde revisas las reglas de formación para asistentes de salud en el hogar de tu estado?", options: ["En la junta o el departamento de salud de tu estado", "En un anuncio en internet", "En un comentario de redes sociales", "En un mensaje en cadena"], answer: 0, why: "La página oficial de salud del estado fija y explica las reglas." }
          ]
        },
        {
          title: "Revisar la seguridad de la casa de un cliente",
          objectives: ["O2"],
          minutes: 5,
          goal: "Enumerar los peligros para la seguridad en una casa y lo que harías con cada uno.",
          text: [
            "Una casa no es un hospital. Cada casa es diferente, así que mira a tu alrededor cada vez que llegues. Las caídas son uno de los mayores peligros para las personas mayores. MedlinePlus (el sitio de salud de la Biblioteca Nacional de Medicina de EE. UU.) da formas de bajar el riesgo: quitar lo que puede hacer tropezar, tener barandas en las escaleras y en la bañera o la ducha, y revisarse la vista.",
            "Busca alfombras sueltas, cables en el piso, cosas en las escaleras, poca luz, el piso del baño mojado y cosas que el cliente tiene que alcanzar muy arriba. Avisa a tu supervisor de los peligros que no puedes arreglar, y nunca muevas muebles ni tires cosas sin preguntarle al cliente.",
            "Los gérmenes también importan en casa. Límpiate las manos antes y después de dar cuidado, usa guantes cuando puedas tocar fluidos del cuerpo y límpiate las manos justo después de quitarte los guantes. Usa agua y jabón cuando tus manos se vean sucias.",
            "Cuídate a ti también. Ten a mano la dirección y el número de teléfono de tu agencia. Pide que guarden a las mascotas si te hacen sentir incómodo. Si alguna vez te sientes en peligro, sal y llama a tu supervisor. Nadie espera que te quedes en peligro."
          ],
          steps: ["Mira a tu alrededor al llegar: pisos, escaleras, luz, baño.", "Arregla los peligros pequeños con el permiso del cliente, como un cable en el camino.", "Anota y reporta los peligros que no puedes arreglar.", "Si te sientes en peligro, sal y llama a tu supervisor."],
          words: [["Peligro", "algo que podría causar una lesión, como una alfombra suelta."], ["Riesgo de caída", "qué tan probable es que una persona se caiga."], ["Barra de apoyo", "una barra fuerte fijada a la pared para sostenerse, muchas veces junto al inodoro o la bañera."]],
          slides: [
            { title: "Mira a tu alrededor en cada visita", bullets: ["Pisos: alfombras, cables, cosas tiradas", "Escaleras y luz", "Baño: pisos mojados, sin barandas"] },
            { title: "Bajar el riesgo de caída", bullets: ["Quita lo que hace tropezar, con permiso del cliente", "Barandas en escaleras y en la bañera o ducha", "Reporta lo que no puedes arreglar"] },
            { title: "Gérmenes en casa", bullets: ["Manos limpias antes y después de dar cuidado", "Guantes para fluidos del cuerpo", "Manos limpias al quitarte los guantes"] },
            { title: "Tu propia seguridad", bullets: ["Ten la dirección y el número de la agencia", "Pide que guarden a las mascotas", "¿Te sientes en peligro? Sal y llama a tu supervisor"] }
          ],
          sources: [
            { name: "MedlinePlus: Caídas", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC: Seguridad clínica: higiene de manos para trabajadores de la salud", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Recorre tu propia casa como si fueras un asistente de salud en el hogar. Haz una lista de al menos cuatro peligros que encuentres (por ejemplo una alfombra suelta o un pasillo oscuro), lo que harías con cada uno y una cosa que harías para cuidar tu propia seguridad.",
          youCanNow: "revisar una casa para encontrar peligros, arreglarlos o reportarlos, y proteger tu propia seguridad en una visita.",
          quickCheck: [
            { objective: "O2", q: "Ves el cable de una lámpara en el camino al baño. ¿Qué haces?", options: ["Lo ignoras", "Con permiso del cliente, lo quitas del camino", "Cortas el cable", "Tiras la lámpara"], answer: 1, why: "Quitar algo que hace tropezar, con permiso del cliente, baja el riesgo de caída." },
            { objective: "O2", q: "Una visita en la casa del cliente hace amenazas y te sientes en peligro. ¿Qué haces?", options: ["Te quedas y terminas primero todas las tareas", "Discutes con la visita", "Te escondes en el baño", "Sales y llamas a tu supervisor"], answer: 3, why: "Tu seguridad va primero; sal y llama a tu supervisor." }
          ]
        },
        {
          title: "Seguir el plan de cuidado con dignidad",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ordenar las tareas del plan de cuidado de una visita y hacerlas de una forma que respete al cliente.",
          text: [
            "La enfermera escribe un plan de cuidado para cada cliente. Dice lo que haces en cada visita: por ejemplo ayudar con la ducha, ayudar a vestirse, preparar el almuerzo, una caminata corta y lavar la ropa. Haz lo que dice el plan. Si el cliente pide algo que no está en el plan, llama a tu supervisor.",
            "Los asistentes no cambian el plan de cuidado ni dan consejos médicos. Según el estado y el plan, puedes recordarle al cliente que es hora de su medicina, pero no decides las dosis ni cambias medicinas. Las preguntas sobre medicinas van a la enfermera.",
            "Dignidad significa tratar al cliente como un adulto que manda en su propia vida. Toca la puerta, salúdalo con el nombre que prefiere, explica lo que vas a hacer y pregunta antes de empezar. Ofrece opciones, como qué camisa ponerse. Deja que haga lo que puede por sí mismo, aunque tarde más. Mantenlo cubierto durante el baño.",
            "Las tareas prácticas, como los traslados o bañar a alguien que no puede ponerse de pie, se aprenden y se evalúan en tu formación, con la supervisión de una enfermera."
          ],
          steps: ["Lee el plan de cuidado antes de empezar.", "Saluda al cliente, explica el plan de hoy y pregunta qué desea.", "Haz las tareas en un orden lógico, por ejemplo el baño antes de vestirse, y las comidas a su hora.", "Deja que el cliente haga lo que puede y ofrécele opciones.", "Llama a tu supervisor por cualquier cosa que no esté en el plan."],
          words: [["Plan de cuidado", "la lista escrita por la enfermera con el cuidado que recibe el cliente y cómo."], ["Dignidad", "tratar a una persona con respeto, como un adulto que toma sus propias decisiones."], ["Alcance", "las tareas que estás formado y autorizado para hacer en tu trabajo."]],
          slides: [
            { title: "El plan de cuidado es tu guía", bullets: ["Lo escribe la enfermera", "Haz lo que dice", "¿No está en el plan? Llama a tu supervisor"] },
            { title: "Quédate en tu función", bullets: ["Sin consejos médicos", "Sin cambiar medicinas ni dosis", "Las preguntas sobre medicinas van a la enfermera"] },
            { title: "Dignidad", bullets: ["Toca, saluda, explica, pregunta", "Ofrece opciones", "Deja que haga lo que puede", "Mantenlo cubierto"] }
          ],
          tryIt: "Solo práctica, cliente inventada: el plan de cuidado de la señora Okafor dice \"lavar la ropa, ayudar con la ducha, ayudar a vestirse, almuerzo al mediodía, caminata de 10 minutos después del almuerzo\". Llegas a las 10:30. Escribe las tareas en el orden en que las harías y una forma de ofrecerle una opción en cada una.",
          youCanNow: "seguir un plan de cuidado en un orden lógico, quedarte dentro de tu función y respetar la dignidad y las decisiones del cliente.",
          quickCheck: [
            { objective: "O3", q: "Un cliente te pide que limpies sus canaletas del techo, y eso no está en el plan de cuidado. ¿Qué haces?", options: ["Lo haces para ser amable", "Llamas a tu supervisor por el pedido", "Te niegas de mala manera", "Le pides a un amigo que lo haga por dinero"], answer: 1, why: "Las tareas que no están en el plan de cuidado van a tu supervisor." },
            { objective: "O3", q: "Un cliente quiere abotonarse la camisa solo, pero va despacio. ¿Qué haces?", options: ["Lo haces tú para ahorrar tiempo", "Le dices que se apure", "Dejas que lo haga y ayudas solo si te lo pide", "No le pones la camisa"], answer: 2, why: "Dejar que los clientes hagan lo que pueden protege su dignidad y su independencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo y la casa",
        questions: [
          { objective: "O1", q: "¿Cuál es una diferencia clave entre un asistente de salud en el hogar y un asistente de cuidado personal?", options: ["Los asistentes de salud en el hogar pueden hacer algunas tareas básicas de salud bajo una enfermera", "Los asistentes de cuidado personal hacen cirugías", "No hay ninguna diferencia", "Los asistentes de salud en el hogar nunca ayudan a bañarse"], answer: 0, why: "Los asistentes de salud en el hogar pueden revisar signos vitales y tareas parecidas, según el estado; los asistentes de cuidado personal suelen dar ayuda no médica." },
          { objective: "O2", q: "¿Cuál es un peligro de caída?", options: ["Una luz de noche en el pasillo", "Una baranda en las escaleras", "Una barra de apoyo junto a la bañera", "Una alfombra suelta arriba de las escaleras"], answer: 3, why: "Las alfombras sueltas pueden hacer tropezar; las otras opciones bajan el riesgo." },
          { objective: "O2", q: "Encuentras un peligro que no puedes arreglar, como una baranda de escalera rota. ¿Qué haces?", options: ["La arreglas con cinta", "Lo anotas y se lo reportas a tu supervisor", "No dices nada", "Le dices al cliente que nunca más use las escaleras"], answer: 1, why: "Los peligros que no puedes arreglar se reportan para que la agencia actúe." },
          { objective: "O3", q: "El cliente te pregunta cuánto tomar de una medicina. ¿Qué le dices?", options: ["Le das tu mejor suposición", "Le dices que tome el doble", "Le dices que vas a preguntarle a la enfermera", "Lo buscas y decides por él"], answer: 2, why: "Los asistentes no dan consejos sobre medicinas ni dosis; la enfermera responde las preguntas sobre medicinas." },
          { objective: "O3", q: "¿Quién escribe el plan de cuidado del cliente?", options: ["La enfermera", "El asistente", "El vecino del cliente", "Nadie"], answer: 0, why: "La enfermera escribe el plan de cuidado; el asistente lo sigue." }
        ]
      }
    },
    {
      name: "Capítulo 2: Reportes, privacidad y tu kit de visita",
      lessons: [
        {
          title: "Estar atento a los cambios y escribir una nota de visita",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escribir una nota de visita basada en hechos y decidir si llamar a la enfermera o al 911.",
          text: [
            "Puede que seas la única persona que ve al cliente hoy. Está atento a los cambios: come o bebe menos, tiene un dolor nuevo, una llaga o un moretón nuevo, está más confundido, le cuesta respirar, se cayó o cambió su estado de ánimo.",
            "Escribe tu nota de visita con hechos: lo que hiciste, lo que viste y oíste, y la hora. Usa las propias palabras del cliente entre comillas. \"11:00. Ayudé con la ducha. Zona roja en el talón derecho, del tamaño de una moneda. El cliente dijo: 'Me duele el talón'.\" es una buena nota. \"Se le veía raro\" no lo es.",
            "Llama a tu supervisor o a la enfermera por cualquier cambio. Llama primero al 911 en una emergencia: dificultad para respirar, dolor en el pecho, una persona que no despierta, un sangrado fuerte o señales de un derrame cerebral. Luego llama a tu agencia.",
            "Tu agencia te dirá cómo quiere que escribas las notas, en papel o en una aplicación. Nunca escribas datos privados en otro lugar, como las notas de tu propio teléfono."
          ],
          steps: ["Nota el cambio.", "¿Es una emergencia? Llama primero al 911 y luego a tu agencia.", "¿No es una emergencia? Llama a tu enfermera o supervisor.", "Escribe los hechos, la hora, las palabras del cliente y a quién avisaste."],
          words: [["Nota de visita", "el registro que escribe un asistente sobre cada visita."], ["Emergencia", "un peligro repentino y grave para la vida o la salud que necesita el 911."], ["Úlcera por presión", "piel dañada por estar demasiado tiempo en la misma posición; muchas veces empieza como una zona roja sobre un hueso."]],
          slides: [
            { title: "Atento a los cambios", bullets: ["Come o bebe menos", "Dolor, llaga o moretón nuevo", "Más confusión, una caída o dificultad para respirar"] },
            { title: "Escribe hechos", bullets: ["Lo que hiciste, viste y oíste", "La hora y las propias palabras del cliente", "No: \"Se le veía raro\""] },
            { title: "A quién llamar", bullets: ["Emergencia: primero al 911, luego a tu agencia", "Cualquier otro cambio: tu enfermera o supervisor", "Anota a quién avisaste"] }
          ],
          sources: [{ name: "MedlinePlus: Úlceras por presión", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Solo práctica, cliente inventado: \"El señor Díaz normalmente se come todo el almuerzo. Hoy comió dos bocados, dijo 'No tengo ganas de comer' y su tobillo izquierdo se ve más hinchado que la semana pasada.\" Escribe una nota de visita de tres líneas y decide: ¿llamas a la enfermera o al 911? Escribe por qué.",
          youCanNow: "escribir una nota de visita basada en hechos y decidir si un cambio necesita a la enfermera o al 911.",
          quickCheck: [
            { objective: "O4", q: "Tu cliente de repente tiene dificultad para respirar. ¿Qué haces primero?", options: ["Escribes una nota", "Llamas al 911", "Esperas a ver si se le pasa", "Le escribes a un amigo"], answer: 1, why: "La dificultad para respirar es una emergencia; llama primero al 911 y luego a la agencia." },
            { objective: "O4", q: "¿Qué nota de visita es la mejor?", options: ["\"El cliente estaba raro hoy.\"", "\"Todo bien, creo.\"", "\"Seguramente un mal día.\"", "\"1:15. Comió 2 bocados del almuerzo. Dijo: 'No tengo hambre'.\""], answer: 3, why: "Da la hora, lo que se midió y las palabras del cliente." }
          ]
        },
        {
          title: "Privacidad, dinero y límites",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir la acción que protege la privacidad, el dinero y la seguridad de un cliente.",
          text: [
            "La información de salud de un cliente es privada. La protege HIPAA, una ley federal de EE. UU. Compártela solo con tu equipo de cuidado. No hables de los clientes con amigos, no publiques nada sobre ellos y no tomes fotos en su casa.",
            "Pon límites claros con el dinero y los regalos. Nunca pidas dinero prestado, no prestes dinero, no aceptes regalos de valor ni uses la tarjeta de un cliente, salvo que las reglas de tu agencia y el plan de cuidado permitan una tarea como hacer compras con recibos. Sigue al pie de la letra las reglas de tu agencia y guarda los recibos.",
            "Las personas mayores y con discapacidad pueden ser víctimas de abuso, abandono y robo de dinero, a veces por parte de personas cercanas. Algunas señales de alerta son moretones que nadie puede explicar, mala higiene, llagas por estar en cama, miedo o aislamiento, y cambios repentinos con el dinero.",
            "Si sospechas abuso, díselo a tu supervisor de inmediato. También puedes contactar a Adult Protective Services (Servicios de Protección para Adultos) de tu estado. Si el cliente está en peligro ahora, llama al 911. Algunos estados obligan a los asistentes a reportar; tu agencia te dirá cómo."
          ],
          steps: ["Comparte la información del cliente solo con el equipo de cuidado.", "Sigue las reglas de la agencia sobre el dinero, guarda los recibos y rechaza los regalos de valor.", "Está atento a señales de abuso, abandono o robo de dinero.", "Reporta tus preocupaciones a tu supervisor o a Adult Protective Services; llama al 911 si hay peligro."],
          words: [["HIPAA", "una ley federal de EE. UU. que protege la privacidad de la información de salud."], ["Límite", "un tope claro sobre lo que haces en una relación de trabajo."], ["Explotación financiera", "quitarle a alguien su dinero o sus cosas, o usarlos mal."], ["Adult Protective Services (APS)", "la oficina del estado o del condado que investiga el abuso y el abandono de personas mayores o con discapacidad."]],
          slides: [
            { title: "Privacidad", bullets: ["Comparte solo con el equipo de cuidado", "Nada de comentarios, publicaciones ni fotos", "HIPAA protege la información de salud"] },
            { title: "Dinero y regalos", bullets: ["No pedir ni dar préstamos, ni aceptar regalos de valor", "Compras solo si el plan lo permite, con recibos", "Sigue al pie de la letra las reglas de la agencia"] },
            { title: "Señales de abuso", bullets: ["Moretones que nadie puede explicar", "Mala higiene o llagas por estar en cama", "Miedo, aislamiento o cambios repentinos con el dinero"] },
            { title: "Repórtalo", bullets: ["Díselo a tu supervisor de inmediato", "Adult Protective Services", "Peligro ahora: 911"] }
          ],
          sources: [
            { name: "MedlinePlus: Maltrato de personas mayores", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Lee estas tres situaciones inventadas y escribe qué harías: 1) El cliente te ofrece $200 \"por ser tan amable\". 2) El sobrino del cliente te pide el PIN de la tarjeta bancaria del cliente. 3) Tu amigo te pregunta a qué persona famosa cuidas. Luego escribe una frase amable para poner un límite.",
          youCanNow: "proteger la privacidad, el dinero y la seguridad de un cliente y reportar tus preocupaciones a la persona correcta.",
          quickCheck: [
            { objective: "O5", q: "Un cliente te ofrece un reloj caro para darte las gracias. ¿Qué haces?", options: ["Le dices que no con amabilidad y le avisas a tu supervisor", "Lo aceptas sin decir nada", "Lo vendes y repartes el dinero", "Le pides efectivo en su lugar"], answer: 0, why: "Los regalos de valor cruzan un límite; recházalo con amabilidad y sigue las reglas de la agencia." },
            { objective: "O5", q: "Notas que el dinero del cliente sigue desapareciendo después de que lo visita un familiar. ¿Qué haces?", options: ["Enfrentas al familiar", "Lo ignoras, es asunto de familia", "Se lo reportas a tu supervisor", "Escondes la billetera del cliente en tu bolso"], answer: 2, why: "Una posible explotación financiera se reporta a tu supervisor o a Adult Protective Services." }
          ]
        },
        {
          title: "Tu kit de visita de práctica y los próximos pasos",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Armar un kit de visita de práctica para un cliente inventado y planear tu próximo paso hacia la formación.",
          text: [
            "Ahora vas a juntar todo el curso. Un kit de visita es lo que un asistente preparado lleva en la cabeza y en papel: una revisión rápida de seguridad del hogar, las tareas del plan de cuidado en orden y una nota de visita clara.",
            "Usa un cliente inventado, por ejemplo \"Señor Johnson, 78 años, vive solo, usa andador, plan de cuidado: ayudar con la ducha, vestirse, preparar el desayuno, caminata corta, lavar la ropa\". Nunca uses el nombre ni los datos de una persona real para practicar.",
            "Luego da un paso real hacia el trabajo. Busca cerca de ti una agencia de salud en el hogar o un programa aprobado que forme a asistentes nuevos. Pregunta por la formación, el examen, la revisión de antecedentes, el pago durante la formación y el horario. Un American Job Center (centro de empleo de EE. UU.) puede ayudarte a encontrar formación y a pagarla.",
            "En un currículum, pon el cuidado que ya has dado, como cuidar a un familiar, con palabras sencillas: \"Ayudé a un familiar con las comidas, el baño y las citas durante 2 años\"."
          ],
          steps: ["Escribe una lista de seguridad del hogar con al menos 6 puntos.", "Haz una lista de las tareas del plan de cuidado del cliente inventado en el orden en que las harías.", "Escribe una nota de visita basada en hechos con un cambio que reportarías y a quién avisarías.", "Escribe la página oficial de tu estado y una agencia o programa que vas a contactar esta semana."],
          words: [["Kit de visita", "tu lista de revisión, tu lista de tareas y tu formato de nota para cada visita."], ["Programa aprobado", "un programa de formación que tu estado o una agencia certificada acepta."]],
          slides: [
            { title: "Tu kit de visita", bullets: ["Lista de seguridad del hogar", "Tareas del plan de cuidado en orden", "Una nota de visita basada en hechos"] },
            { title: "Solo práctica", bullets: ["Usa un cliente inventado", "Nunca nombres ni datos reales"] },
            { title: "Tu próximo paso real", bullets: ["Busca una agencia o programa que forme asistentes", "Pregunta por formación, examen, antecedentes y pago", "Un American Job Center puede ayudarte"] },
            { title: "Línea para el currículum", bullets: ["Pon el cuidado familiar con palabras sencillas", "Di lo que hiciste y por cuánto tiempo"] }
          ],
          sources: [{ name: "Oficina de Estadísticas Laborales de EE. UU.: Asistentes de salud en el hogar y de cuidado personal (Cómo llegar a serlo)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Tarea final: arma tu kit de visita de práctica para un cliente inventado: una lista de seguridad del hogar, las tareas del plan de cuidado en orden, una nota de visita basada en hechos con un cambio que reportarías y a quién, y la página oficial de tu estado más una agencia o programa que vas a contactar.",
          youCanNow: "armar un kit de visita de práctica y dar un paso real hacia la formación de asistente de salud en el hogar.",
          quickCheck: [
            { objective: "O1", q: "¿Cuál es una buena pregunta para una agencia de salud en el hogar?", options: ["\"¿Me puedo saltar la formación?\"", "\"¿Forman a asistentes nuevos y hay un examen?\"", "\"¿Puedo dar las medicinas a mi manera?\"", "\"¿Puedo llevar a mis amigos a las casas de los clientes?\""], answer: 1, why: "Preguntar por la formación y el examen te dice cuál es el camino real en esa agencia." },
            { objective: "O3", q: "Tu plan de cuidado inventado dice ducha, vestirse y desayuno. ¿Qué orden tiene sentido?", options: ["Ducha, vestirse y luego desayuno", "Desayuno en la ducha", "Vestirse, ducha y vestirse otra vez", "Saltarse la ducha"], answer: 0, why: "Bañarse antes de vestirse y después comer es un orden lógico para estas tareas." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Reportes, privacidad y tu kit de visita",
        questions: [
          { objective: "O4", q: "¿Qué cambio debes reportar a la enfermera?", options: ["El cliente vio televisión", "El cliente se puso una camisa azul", "Una zona roja nueva en el talón del cliente", "El cliente tuvo una visita"], answer: 2, why: "Una zona roja nueva puede ser el comienzo de una úlcera por presión y hay que reportarla." },
          { objective: "O4", q: "Tu cliente no despierta. ¿Qué haces primero?", options: ["Llamas al 911", "Lo dejas dormir", "Escribes una nota y te vas", "Llamas a su amigo"], answer: 0, why: "Una persona que no despierta es una emergencia; llama primero al 911." },
          { objective: "O5", q: "Un vecino te pregunta qué le pasa a tu cliente. ¿Qué le dices?", options: ["Le dices el diagnóstico", "Le enseñas las notas de visita", "Le dices que no puedes compartir información sobre los clientes", "Publicas una actualización en internet"], answer: 2, why: "La información de salud del cliente es privada y va solo al equipo de cuidado." },
          { objective: "O5", q: "¿Quién investiga el abuso o el abandono de personas mayores o con discapacidad?", options: ["La oficina de correos", "Adult Protective Services", "Un cajero de banco", "El gimnasio del cliente"], answer: 1, why: "Adult Protective Services investiga el abuso y el abandono; llama al 911 si hay peligro inmediato." },
          { objective: "O5", q: "El cliente te pide prestados $50. ¿Qué haces?", options: ["Se los prestas sin decir nada", "Se los prestas y le cobras intereses", "Le das tu tarjeta", "Le dices que no con amabilidad y le avisas a tu supervisor"], answer: 3, why: "Prestar dinero cruza un límite de trabajo; sigue las reglas de la agencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Habilidades de asistente de salud en el hogar",
    questions: [
      { objective: "O1", q: "¿Dónde trabaja normalmente un asistente de salud en el hogar?", options: ["En las casas de los clientes", "Solo en quirófanos", "En un banco", "En el laboratorio de una farmacia"], answer: 0, why: "Los asistentes de salud en el hogar ayudan a las personas en su propia casa." },
      { objective: "O1", q: "¿Qué hace este curso?", options: ["Te certifica como asistente", "Reemplaza la formación de tu agencia", "Te prepara para la formación y el trabajo", "Te da una licencia del estado"], answer: 2, why: "El curso te prepara; la formación y el examen vienen de una agencia o de un programa aprobado." },
      { objective: "O1", q: "Los asistentes de agencias pagadas por Medicare deben:", options: ["Tener un título de enfermería", "Terminar una formación oficial y aprobar un examen", "Trabajar sin ninguna formación", "Trabajar solo de noche"], answer: 1, why: "La BLS dice que los asistentes de agencias certificadas deben terminar una formación oficial y aprobar un examen estandarizado." },
      { objective: "O1", q: "Para conocer las reglas de tu estado para asistentes de salud en el hogar, revisa:", options: ["Un comentario en un video", "Un mensaje en cadena", "El consejo de un desconocido", "La junta o el departamento de salud de tu estado"], answer: 3, why: "La página oficial de salud del estado explica sus reglas." },
      { objective: "O2", q: "¿Cuál es la mejor forma de bajar el riesgo de caída en casa?", options: ["Quitar lo que hace tropezar, con permiso del cliente", "Poner más alfombras", "Apagar las luces del pasillo", "Poner las cosas en estantes altos"], answer: 0, why: "Quitar lo que hace tropezar es una de las principales formas de prevenir caídas." },
      { objective: "O2", q: "¿Cuándo debes limpiarte las manos en una visita?", options: ["Solo al irte", "Antes y después de dar cuidado, y después de quitarte los guantes", "Solo si el cliente lo pide", "Nunca, los guantes bastan"], answer: 1, why: "Límpiate las manos antes y después de dar cuidado y justo después de quitarte los guantes." },
      { objective: "O2", q: "Te sientes en peligro en la casa de un cliente. ¿Qué haces?", options: ["Te quedas hasta que termine la visita", "Te encierras en un cuarto", "Sales y llamas a tu supervisor", "Lo publicas en internet"], answer: 2, why: "Tu seguridad va primero; sal y llama a tu supervisor." },
      { objective: "O2", q: "¿Qué ayuda a prevenir caídas en el baño?", options: ["Un piso mojado", "Un tapete de baño suelto", "Poca luz", "Barandas o barras de apoyo en la bañera o la ducha"], answer: 3, why: "Las barandas en la bañera o la ducha ayudan a prevenir caídas." },
      { objective: "O3", q: "Un cliente pide una tarea que no está en el plan de cuidado. Tú:", options: ["Llamas a tu supervisor", "La haces de todos modos", "Dices que no y te vas", "Le preguntas a otro cliente"], answer: 0, why: "Los cambios al plan pasan por tu supervisor." },
      { objective: "O3", q: "¿Qué muestra respeto por la dignidad de un cliente?", options: ["Decidir todo por él", "Ofrecerle opciones, como qué camisa ponerse", "Hablar de él como si no estuviera", "Dejarlo descubierto durante el baño"], answer: 1, why: "Ofrecer opciones trata al cliente como un adulto que manda en su vida." },
      { objective: "O3", q: "¿Quién responde las preguntas sobre las medicinas de un cliente?", options: ["El asistente", "El vecino del cliente", "La enfermera", "Un foro de internet"], answer: 2, why: "Los asistentes no dan consejos sobre medicinas; la enfermera responde las preguntas sobre medicinas." },
      { objective: "O3", q: "Antes de empezar a dar cuidado, ¿qué haces?", options: ["Empiezas sin hablar", "Lees el plan de cuidado, saludas al cliente y le explicas", "Cambias los muebles de lugar", "Cambias el plan de cuidado"], answer: 1, why: "Primero se lee el plan, se saluda y se explica." },
      { objective: "O4", q: "¿Cuál es una emergencia que necesita primero el 911?", options: ["El cliente quiere un bocadillo", "El cliente está aburrido", "La ropa está atrasada", "Dolor en el pecho o dificultad para respirar"], answer: 3, why: "El dolor en el pecho y la dificultad para respirar necesitan primero el 911 y luego la agencia." },
      { objective: "O4", q: "Una buena nota de visita incluye:", options: ["La hora, lo que viste y las palabras del cliente", "Tu opinión sobre la familia del cliente", "Suposiciones sobre lo que está mal", "Datos privados en tu propio teléfono"], answer: 0, why: "Las notas son hechos con la hora y las propias palabras del cliente." },
      { objective: "O4", q: "Esta semana el cliente come mucho menos de lo normal. Tú:", options: ["No dices nada", "Se lo reportas a la enfermera y lo escribes en tu nota", "Lo obligas a comerse todo", "Tiras su comida"], answer: 1, why: "Un cambio en la alimentación se reporta y se anota." },
      { objective: "O4", q: "Después de llamar al 911 por una emergencia, también:", options: ["Te vas a casa", "Borras tus notas", "Llamas a tu agencia", "Esperas un día para contarle a alguien"], answer: 2, why: "Después del 911, llama a tu agencia para que la enfermera y el supervisor lo sepan." },
      { objective: "O5", q: "¿Qué ley protege la información de salud de los clientes?", options: ["HIPAA", "El límite de velocidad", "La ley del salario mínimo", "La ley de derechos de autor"], answer: 0, why: "HIPAA protege la privacidad de la información de salud." },
      { objective: "O5", q: "¿Cuál es una señal de alerta de explotación financiera?", options: ["El cliente paga una cuenta a tiempo", "El cliente compra comida", "El cliente tiene tarjeta de la biblioteca", "Cambios repentinos y sin explicación con el dinero del cliente"], answer: 3, why: "Los cambios repentinos con el dinero pueden significar que alguien le está quitando dinero al cliente." },
      { objective: "O5", q: "Tomar fotos de un cliente en su casa para compartirlas con amigos es:", options: ["Aceptable si el cliente se ve feliz", "Un problema de privacidad; no lo hagas", "Algo que exige la agencia", "Aceptable si borras la casa en la foto"], answer: 1, why: "Las fotos y publicaciones sobre clientes violan su privacidad." },
      { objective: "O5", q: "Sospechas que un familiar está abandonando a un cliente. Tú:", options: ["Se lo cuentas a los vecinos del cliente", "Esperas a que empeore", "Se lo reportas a tu supervisor o a Adult Protective Services", "No haces nada porque es familia"], answer: 2, why: "El abandono que se sospecha se reporta; llama al 911 si hay peligro ahora." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Lista de seguridad del hogar", objective: "O2", notYet: "Menos de 4 puntos, o ningún punto sobre la seguridad del propio asistente.", meets: "Al menos 6 puntos que cubren pisos, escaleras, luz, baño, gérmenes y la seguridad del asistente.", exceeds: "Dice qué hacer con cada punto: arreglarlo con permiso del cliente, o reportarlo." },
      { name: "Tareas del plan de cuidado", objective: "O3", notYet: "Faltan tareas, no están en un orden lógico o se salen del plan.", meets: "Todas las tareas del plan en un orden lógico, con una forma de ofrecer una opción.", exceeds: "Señala qué tareas puede hacer el cliente en parte por sí mismo." },
      { name: "Nota de visita", objective: "O4", notYet: "La nota tiene suposiciones u opiniones, o no tiene hora.", meets: "Hechos, la hora, las propias palabras del cliente y a quién se avisó.", exceeds: "Dice bien si el cambio necesita a la enfermera o al 911, y por qué." },
      { name: "Privacidad cuidada", objective: "O5", notYet: "El kit usa el nombre o datos privados de una persona real.", meets: "Usa un cliente inventado y ningún dato privado.", exceeds: "Agrega una frase para poner un límite sobre dinero o regalos." },
      { name: "Próximo paso", objective: "O1", notYet: "No pone ninguna página oficial ni agencia.", meets: "Pone la página oficial del estado y una agencia o programa para contactar.", exceeds: "Pone las preguntas que hará sobre formación, examen, revisión de antecedentes y pago." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que contactan a una agencia de salud en el hogar o a un programa de formación aprobado en un plazo de 30 días",
      "Participantes que terminan la formación de asistente de salud en el hogar y aprueban el examen de competencia",
      "Participantes contratados como asistentes de salud en el hogar o de cuidado personal en un plazo de 6 meses (encuesta de seguimiento)",
      "Las agencias aliadas informan que los asistentes nuevos avisan de los cambios y siguen los planes de cuidado desde sus primeras semanas"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para encontrar la página del departamento de salud del estado y las agencias locales",
      "Papel y lápiz para la lista de revisión, la lista de tareas y la nota de visita",
      "Tu propia casa para el recorrido de seguridad",
      "Unos 60 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Antes del curso, busca las reglas de tu estado para asistentes de salud en el hogar y dos agencias locales que formen a asistentes nuevos, y compártelas.",
      "Usa solo clientes inventados; recuerda a los participantes que nunca usen el nombre ni los datos de una persona real al practicar.",
      "No dejes que los participantes practiquen traslados ni baños entre ellos sin un instructor formado.",
      "Di con claridad que el curso prepara a los participantes y no los certifica; las reglas vienen de la ley federal, del estado y de la agencia.",
      "A los participantes con antecedentes, indícales las reglas del estado y un consejero de reinserción o de asistencia legal antes de que presenten su solicitud."
    ]
  }
};

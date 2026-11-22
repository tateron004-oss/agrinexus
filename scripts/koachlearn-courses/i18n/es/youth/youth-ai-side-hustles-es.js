"use strict";

// Koach Learn course (Spanish translation of youth-ai-side-hustles). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Skill-building course for teens about 13-18.

module.exports = {
  id: "youth-ai-side-hustles-es",
  lang: "es",
  translationOf: "youth-ai-side-hustles",
  category: "Youth",
  name: "IA para emprender y ganar dinero extra (jóvenes)",
  skills: "Encontrar una idea para ganar dinero extra que te quede bien, Revisar las reglas de trabajo para jóvenes y obtener el permiso de tu madre o padre, Ponerle precio a un servicio, Hacer un volante sencillo con IA, Llevar la cuenta del dinero que entra y sale, Tratar bien a los clientes",
  outcome: "planear un negocio extra pequeño y seguro con el permiso de tu madre, padre o tutor: elegir una idea que encaje con tus habilidades, fijar un precio justo, hacer un volante sencillo con ayuda de la IA y llevar la cuenta de cada dólar que ganas y gastas.",
  about: [
    "Este curso es para adolescentes de unos 13 a 18 años que quieren ganar su propio dinero: cuidar mascotas, dar clases a niños más pequeños, cortar el césped, hacer arte personalizado, editar videos para grupos locales o vender manualidades.",
    "Vas a encontrar una idea que encaje con tus habilidades y tu horario, revisar las reglas para trabajadores jóvenes, fijar un precio, hacer un volante, llevar la cuenta de tu dinero y aprender a tratar a los clientes para que regresen. La IA es tu compañera de planeación en todo el camino.",
    "Importante: habla con tu madre, padre o tutor antes de empezar, y deja que ellos manejen las apps de pago, los contratos o las cuentas de venta en línea que requieran a un adulto. Revisa la regla de edad de cada herramienta de IA y pon la escuela primero. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\"."
  ],
  finalTask: "Haz un plan de una página para tu negocio extra y muéstraselo a tu madre, padre o tutor: tu servicio y para quién es, tu precio y por qué, un volante hecho con ayuda de la IA (sin la dirección de tu casa), un registro de dinero sencillo con columnas de fecha, dinero que entra, dinero que sale y notas, y dos reglas de seguridad que vas a seguir.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Jóvenes de unos 13 a 18 años en Estados Unidos que quieren ganar algo de dinero propio cuidando mascotas, dando clases, cortando el césped, haciendo arte por encargo, editando videos para grupos locales o vendiendo artesanías.",
    startingPoint: "Tienen habilidades y pasatiempos por los que otros podrían pagar, y quizás han hecho trabajitos para familiares o vecinos. Pocos han fijado un precio, hecho un volante, llevado la cuenta del dinero que entra y sale, o revisado las reglas de trabajo para jóvenes, de impuestos y de seguridad.",
    gap: "Los jóvenes que empiezan un negocio extra sin un plan pueden cobrar de menos, perder la cuenta del dinero, no cumplir las reglas de impuestos y de trabajo para jóvenes, o ponerse en riesgo con desconocidos. Un plan sencillo hecho con su madre, padre o tutor les ayuda a ganar dinero con seguridad, aprender habilidades reales de negocio y ganar confianza.",
    constraints: [
      "La madre, el padre o el tutor aprueba el plan y se encarga de las aplicaciones de pago, los contratos y las cuentas de venta que necesitan a un adulto",
      "Las reglas de trabajo para jóvenes y de impuestos cambian y son distintas en cada estado; se revisan en la oficina de trabajo del estado y en irs.gov",
      "Seguridad: nada de dirección de casa en internet ni en los volantes; a los clientes nuevos se les conoce con un adulto",
      "Privacidad: nada de números de cuenta bancaria ni de tarjeta en herramientas de IA",
      "La escuela va primero; pocas horas a la semana"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tus habilidades y las horas que de verdad tienes", action: "elegir una idea de negocio extra segura que encaje con tu horario y comprobar que la gente pagaría por ella", standard: "preguntándoles al menos a tres personas" },
    { id: "O2", condition: "Con tu madre, padre o tutor", action: "revisar las reglas federales y estatales de trabajo para jóvenes y la regla del IRS sobre el impuesto de trabajo por cuenta propia, y acordar reglas de seguridad", standard: "con al menos dos reglas de seguridad en las que los dos estén de acuerdo" },
    { id: "O3", condition: "Para un servicio", action: "fijar un precio justo que cubra tus costos y tu tiempo y vaya con los precios de tu zona", standard: "comprobado con personas reales, no solo con la IA" },
    { id: "O4", condition: "Usando IA y una herramienta de diseño gratis", action: "crear un volante con un titular, tres puntos cortos, un precio y una invitación a actuar", standard: "sin dirección de casa y con un contacto que aprueba tu madre, padre o tutor" },
    { id: "O5", condition: "En cada trabajo y cada compra", action: "anotar el dinero que entra y el que sale en un registro de cuatro columnas y calcular tu ganancia", standard: "anotando cada movimiento el mismo día y revisándolo cada semana" },
    { id: "O6", condition: "Con cada cliente", action: "confirmar los detalles de cada trabajo con un mensaje amable y responder a los problemas", standard: "contándole a tu madre, padre o tutor cualquier cosa insegura o que no te paguen" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Elegir y planear tu negocio extra",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar una idea que te quede bien",
          minutes: 5,
          goal: "Elegir una idea de negocio extra que encaje con tus habilidades, tu tiempo y tu vecindario.",
          text: [
            "El mejor negocio extra usa algo que ya haces bien y resuelve un problema de alguien cercano. ¿Eres bueno en matemáticas? Da clases a niños más pequeños. ¿Te encantan los animales? Cuida mascotas o pasea perros. ¿Eres bueno con el video? Edita clips para un equipo o una iglesia local.",
            "Pregúntale a la IA: \"Tengo 15 años, tengo 5 horas por semana, soy bueno dibujando y en los videojuegos, y vivo cerca de un parque. Dame 10 ideas de negocios extra que sean seguras para un adolescente.\" Luego elige las ideas que encajen con tu tiempo real y tu horario escolar.",
            "Revisa que haya gente que lo quiera. Pregúntales a tres vecinos, amigos de la familia o compañeros de clase: \"¿Pagarías por esto?\""
          ],
          steps: ["Haz una lista de tus habilidades y de las horas que de verdad tienes.", "Pídele a la IA 10 ideas seguras que encajen.", "Tacha las ideas que no encajan con la escuela o con tu horario.", "Pregúntales a tres personas si pagarían por tu mejor idea."],
          words: [["Negocio extra", "una forma pequeña de ganar dinero fuera de la escuela o de un trabajo principal."], ["Cliente", "la persona que paga por lo que ofreces."]],
          slides: [
            { title: "Empieza por lo que haces bien", bullets: ["Matemáticas: dar clases", "Animales: cuidar mascotas", "Video: editar para grupos locales"] },
            { title: "Pídele ideas a la IA", bullets: ["Tu edad, habilidades y horas", "\"Seguras para un adolescente\"", "Tacha lo que choca con la escuela"] },
            { title: "Revisa que la gente lo quiera", bullets: ["Pregunta a tres personas", "\"¿Pagarías por esto?\""] }
          ],
          tryIt: "Escribe tus habilidades y las horas que de verdad tienes cada semana. Pídele a la IA 10 ideas seguras de negocios extra, elige la mejor y pregúntales a tres personas si pagarían por ella.",
          youCanNow: "elegir una idea de negocio extra que te quede bien y que la gente quiera.",
          quickCheck: [
            { objective: "O1", q: "¿Qué hace fuerte a una idea de negocio extra?", options: ["La idea que suena más genial en internet", "Usa una habilidad que tienes y le resuelve un problema a alguien cerca", "La que necesita más horas", "Cualquier cosa que esté haciendo un amigo"], answer: 1, why: "El mejor negocio extra usa algo que ya haces bien y resuelve un problema cercano." },
            { objective: "O1", q: "Te encanta tu idea, pero nadie a quien le preguntas pagaría por ella. ¿Qué haces?", options: ["Empezar de todas formas y tener esperanza", "Subir el precio", "Seguir preguntando hasta que alguien diga que sí", "Probar otra idea de tu lista"], answer: 3, why: "Preguntarle a la gente comprueba si hay demanda; si nadie pagaría, escoge otra idea." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reglas, seguridad y tu madre, padre o tutor",
          minutes: 5,
          goal: "Revisar las reglas de trabajo para jóvenes y acordar reglas de seguridad con tu madre, padre o tutor.",
          text: [
            "Algunos trabajos tienen reglas de edad. Según la ley federal, cuidar niños de vez en cuando y hacer tareas pequeñas en casas particulares no están cubiertos por las reglas de trabajo infantil, y trabajar para un negocio que pertenece por completo a tus padres tiene reglas especiales. La mayoría de los demás empleos piden que tengas 14 años o más, y nadie menor de 18 puede hacer trabajos peligrosos. Los estados pueden tener reglas más estrictas, así que revisa la oficina de trabajo de tu estado.",
            "Reglas de dinero: si tus ganancias netas por trabajar por tu cuenta son de $400 o más en un año, el IRS (la agencia de impuestos de EE. UU.) dice que debes declarar y pagar el impuesto de trabajo por cuenta propia, sin importar tu edad. Pídele a tu madre, padre o tutor que te ayude a llevar registros y a revisar irs.gov.",
            "Las reglas de seguridad son lo más importante: tu madre, padre o tutor sabe dónde estás y para quién trabajas, conoces a los clientes nuevos acompañado de un adulto, nunca entras solo a la casa de un desconocido y nunca publicas la dirección de tu casa en internet. Muchas apps de pago y sitios de venta requieren a un adulto, así que deja que tu madre, padre o tutor los maneje."
          ],
          steps: ["Revisa las reglas federales de trabajo para jóvenes y las de tu estado.", "Muéstrale tu plan a tu madre, padre o tutor.", "Acuerden juntos las reglas de seguridad.", "Deja que un adulto maneje las apps de pago y las cuentas de venta."],
          words: [["Trabajo por cuenta propia", "trabajar para ti mismo en vez de para un jefe."], ["Ganancias netas", "el dinero que ganaste menos lo que gastaste para ganarlo."]],
          sources: [
            { name: "Departamento de Trabajo de EE. UU., hoja informativa n.º 43: reglas de trabajo infantil en empleos no agrícolas", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
            { name: "IRS: impuesto de trabajo por cuenta propia (impuestos del Seguro Social y Medicare)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" }
          ],
          slides: [
            { title: "Reglas de trabajo para jóvenes", bullets: ["Cuidar niños de vez en cuando y tareas en casas: fuera de las reglas federales", "La mayoría de los demás empleos: desde los 14", "Nada de trabajos peligrosos antes de los 18", "Revisa las reglas de tu estado"] },
            { title: "Reglas de dinero", bullets: ["IRS: $400 o más de ganancias netas por cuenta propia = declarar", "La edad no importa", "Lleva registros con ayuda de tu madre o padre"] },
            { title: "La seguridad primero", bullets: ["Un adulto sabe dónde estás", "Conoce a clientes nuevos con un adulto", "Nunca publiques la dirección de tu casa"] }
          ],
          tryIt: "Busca las reglas de trabajo para jóvenes de tu estado y lee la página del IRS sobre el impuesto de trabajo por cuenta propia con tu madre, padre o tutor. Escriban tres reglas de seguridad en las que los dos estén de acuerdo.",
          youCanNow: "revisar las reglas de tu negocio extra y fijar reglas de seguridad con tu madre, padre o tutor.",
          quickCheck: [
            { objective: "O2", q: "Según la ley federal, ¿qué tipo de trabajo no puede hacer nadie menor de 18 años?", options: ["Dar clases", "Cuidar mascotas", "Trabajo peligroso", "Hacer arte"], answer: 2, why: "La ley federal prohíbe el trabajo peligroso a cualquier persona menor de 18 años." },
            { objective: "O2", q: "Un cliente nuevo te pide que vayas solo a su casa para conocerse. ¿Qué haces?", options: ["Lo conoces junto con tu madre, padre o tutor, que sabe dónde estás", "Vas solo para ser amable", "Le envías tu dirección de casa", "Le pides que pague primero"], answer: 0, why: "Conoce a los clientes nuevos con un adulto y nunca entres solo a la casa de un desconocido." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Fijar un precio justo",
          minutes: 5,
          goal: "Fijar un precio que cubra tus costos, te pague de forma justa y les quede bien a tus clientes.",
          text: [
            "Para fijar un precio, mira tres cosas: lo que te cuesta (materiales, transporte), lo que cobran otros adolescentes o servicios locales parecidos y cuánto vale tu tiempo.",
            "Pídele a la IA que te ayude a pensar, no que decida por ti: \"Paseo perros durante 30 minutos. Ayúdame a pensar en un precio justo para un adolescente en un pueblo pequeño. ¿Qué preguntas debería hacerme?\" Luego pregúntales a personas reales cuánto pagan en tu zona, porque la IA no conoce tu vecindario.",
            "Escribe tu precio con claridad, por ejemplo \"Paseo de perro, 30 minutos\" con la cantidad. Mantenlo sencillo e igual para todos."
          ],
          steps: ["Suma tus costos por trabajo.", "Pregunta a la gente cuánto cuestan servicios parecidos en tu zona.", "Decide cuánto vale tu tiempo.", "Escribe un precio claro para cada servicio."],
          words: [["Costo", "lo que gastas para hacer el trabajo."], ["Ganancia", "el dinero que te queda después de pagar tus costos."]],
          slides: [
            { title: "Tres cosas fijan tu precio", bullets: ["Tus costos", "Lo que otros cobran en tu zona", "Lo que vale tu tiempo"] },
            { title: "La IA te ayuda a pensar", bullets: ["Pregunta qué preguntas considerar", "Pregunta a personas reales los precios locales", "La IA no conoce tu vecindario"] },
            { title: "Que sea claro", bullets: ["Un precio por servicio", "Igual para todos"] }
          ],
          tryIt: "Haz una lista de tus costos para un trabajo, pregúntales a dos personas cuánto pagan por algo parecido y escribe un precio claro para tu servicio.",
          youCanNow: "fijar un precio justo y claro para tu negocio extra.",
          quickCheck: [
            { objective: "O3", q: "¿Qué tres cosas te ayudan a fijar un precio?", options: ["Tus costos, los precios de tu zona y lo que vale tu tiempo", "Solo lo que cree tu amigo", "El precio más alto que encuentres en internet", "Lo que diga la IA"], answer: 0, why: "Un precio justo cubre tus costos, va con los precios de tu zona y te paga tu tiempo." },
            { objective: "O3", q: "La IA te sugiere un precio para cortar el césped. ¿Qué haces antes de usarlo?", options: ["Lo usas de inmediato", "Lo duplicas", "Le cobras distinto a cada cliente", "Les preguntas a personas reales cuánto pagan en tu zona"], answer: 3, why: "La IA no conoce tu vecindario, así que compara con los precios locales preguntándoles a personas reales." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Elegir y planear tu negocio extra",
        questions: [
          { objective: "O1", q: "La mejor idea de negocio extra normalmente:", options: ["Te quita todo el tiempo de la escuela", "Es lo que esté de moda en internet", "Usa una habilidad que tienes y resuelve un problema cercano", "Necesita equipo caro"], answer: 2, why: "Habilidades más una necesidad real hacen una buena idea." },
          { objective: "O1", q: "¿Cómo revisas que la gente quiere tu idea?", options: ["Preguntándoles a algunas personas si pagarían por ella", "Suponiendo que sí", "Preguntando solo a la IA", "Publicando tu dirección en internet"], answer: 0, why: "Las respuestas de personas reales muestran la demanda real." },
          { objective: "O2", q: "Según el IRS, las reglas del impuesto de trabajo por cuenta propia:", options: ["Solo aplican en verano", "Solo aplican a los adultos", "Nunca aplican a los adolescentes", "Aplican sin importar tu edad"], answer: 3, why: "El IRS dice que las reglas aplican sin importar la edad." },
          { objective: "O2", q: "¿Cuál es una buena regla de seguridad?", options: ["Ir solo a la casa de un desconocido", "Conocer a los clientes nuevos con un adulto", "Poner la dirección de tu casa en tu volante", "Mantener tus planes en secreto"], answer: 1, why: "Tener a un adulto contigo te mantiene seguro." },
          { objective: "O3", q: "¿Por qué preguntar a personas reales por los precios locales?", options: ["La IA siempre tiene razón", "La IA no conoce tu vecindario", "Los precios son iguales en todas partes", "Lo exige la ley"], answer: 1, why: "La gente local conoce los precios locales." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manejar tu negocio extra",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer un volante sencillo con IA",
          minutes: 5,
          goal: "Escribir y diseñar un volante claro para tu servicio.",
          text: [
            "Un volante le dice a la gente lo que haces, cuánto cuesta y cómo contactarte. La IA puede ayudar con las palabras: \"Escribe un volante corto y amigable para un servicio de paseo de perros hecho por un adolescente. Incluye un título, 3 puntos y una llamada a la acción.\"",
            "Diséñalo en una herramienta gratuita como Canva, Google Docs o Google Slides. Usa un título grande, líneas cortas y colores fáciles de leer.",
            "Seguridad: nunca pongas la dirección de tu casa en un volante. Usa el número de teléfono o el correo de tu madre, padre o tutor, o un contacto que ellos aprueben. Pide permiso antes de poner volantes en los tableros de tiendas, bibliotecas o centros comunitarios."
          ],
          steps: ["Pídele a la IA un título, 3 puntos y una llamada a la acción.", "Edita las palabras para que suenen como tú.", "Diséñalo en una herramienta gratuita.", "Usa un contacto que apruebe tu madre, padre o tutor, nunca tu dirección."],
          words: [["Llamada a la acción", "una línea que le dice a la gente qué hacer después, como \"Manda un mensaje para reservar un paseo\"."], ["Título", "el texto grande de arriba."]],
          slides: [
            { title: "Un volante dice", bullets: ["Lo que haces", "Cuánto cuesta", "Cómo contactarte"] },
            { title: "La IA escribe, tú editas", bullets: ["Título, 3 puntos, llamada a la acción", "Que suene como tú", "Diséñalo en Canva o Google Docs"] },
            { title: "Mantente seguro", bullets: ["Nada de la dirección de tu casa", "Usa un contacto que apruebe tu madre o padre", "Pide permiso antes de poner volantes"] }
          ],
          tryIt: "Pídele a la IA el texto de un volante para tu servicio. Edítalo para que suene como tú, diséñalo en una herramienta gratuita y agrega un contacto que apruebe tu madre, padre o tutor.",
          youCanNow: "hacer un volante claro y seguro para tu negocio extra.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es el titular de un volante?", options: ["El número de contacto", "La línea grande de arriba que dice lo que ofreces", "La letra pequeña de abajo", "La lista de precios"], answer: 1, why: "Un volante usa un titular grande para que la gente vea rápido lo que ofreces." },
            { objective: "O4", q: "El texto de tu volante hecho con IA incluye la calle de tu casa. ¿Qué haces?", options: ["La dejas para que la gente te encuentre", "Pones el nombre de la calle más pequeño", "La quitas y usas un contacto que aprueba tu madre, padre o tutor", "Publicas el volante solo en internet"], answer: 2, why: "Nunca pongas tu dirección de casa en un volante; usa un contacto aprobado." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Llevar la cuenta del dinero que entra y sale",
          minutes: 5,
          goal: "Armar un registro de dinero sencillo y usarlo en cada trabajo.",
          text: [
            "Los dueños de negocios llevan la cuenta de cada dólar. Un registro sencillo tiene cuatro columnas: fecha, dinero que entra, dinero que sale y notas (quién pagó, qué compraste).",
            "Hazlo en Google Sheets, Microsoft Excel o un cuaderno de papel. La IA puede ayudar: \"Haz una tabla sencilla para llevar el dinero de un negocio de cuidado de mascotas de un adolescente, con un total abajo.\" Nunca escribas números de banco o de tarjeta en la IA.",
            "Revísalo cada semana. El dinero que entra menos el dinero que sale es tu ganancia. Tus registros también le ayudan a tu madre, padre o tutor con cualquier pregunta de impuestos."
          ],
          steps: ["Haz cuatro columnas: fecha, dinero que entra, dinero que sale, notas.", "Escribe cada trabajo y cada compra el mismo día.", "Agrega una fila de total.", "Revísalo cada semana: lo que entra menos lo que sale es la ganancia."],
          words: [["Hoja de cálculo", "una tabla en la computadora, como Google Sheets o Excel."], ["Ganancia", "el dinero que entra menos el dinero que sale."]],
          slides: [
            { title: "Lleva la cuenta de cada dólar", bullets: ["Fecha", "Dinero que entra", "Dinero que sale", "Notas"] },
            { title: "Herramientas gratuitas", bullets: ["Google Sheets o Excel", "Un cuaderno de papel también sirve", "Nunca pongas números de banco en la IA"] },
            { title: "Revisa cada semana", bullets: ["Lo que entra menos lo que sale = ganancia", "Los registros ayudan con preguntas de impuestos"] }
          ],
          tryIt: "Haz un registro de dinero con las cuatro columnas. Agrega dos trabajos inventados o reales y una compra, y calcula tu ganancia.",
          youCanNow: "llevar la cuenta del dinero de tu negocio extra y saber tu ganancia.",
          quickCheck: [
            { objective: "O5", q: "¿Qué va en la columna de \"dinero que sale\"?", options: ["Las propinas que recibiste", "Los pagos de los clientes", "Tu ganancia", "Lo que gastaste, como materiales o transporte"], answer: 3, why: "El dinero que sale es lo que gastas; el dinero que entra es lo que te pagan los clientes." },
            { objective: "O5", q: "Quieres que la IA te ayude a armar tu registro. ¿Qué dejas fuera?", options: ["Tus números de cuenta bancaria o de tarjeta", "Los nombres de las columnas", "La palabra \"total\"", "Tu tipo de negocio"], answer: 0, why: "Nunca escribas números de cuenta bancaria ni de tarjeta en una herramienta de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tratar bien a los clientes",
          minutes: 5,
          goal: "Escribir mensajes claros y amables y manejar un problema con un cliente.",
          text: [
            "Los clientes regresan, y se lo cuentan a sus amigos, cuando eres puntual, amable y honesto. Confirma cada trabajo: día, hora, precio y lo que vas a hacer.",
            "La IA te puede ayudar a escribir mensajes, con copia a tu madre, padre o tutor: \"Escribe un mensaje amable para confirmar un paseo de perro el sábado a las 10 a.m. por el precio acordado.\" Si algo sale mal, pide perdón, explica qué vas a hacer para arreglarlo y cumple tu promesa.",
            "Si un cliente es grosero, te pide hacer algo peligroso o no paga, detente y avísale a tu madre, padre o tutor. No tienes que manejarlo solo."
          ],
          steps: ["Confirma día, hora, precio y tarea antes de cada trabajo.", "Sé puntual y haz lo que prometiste.", "Si algo sale mal: pide perdón, di cómo lo arreglas y hazlo.", "¿Peligro o falta de pago? Avísale a tu madre, padre o tutor."],
          words: [["Confirmar", "revisar y acordar los detalles antes del trabajo."], ["Reseña", "lo que un cliente dice sobre tu trabajo."]],
          slides: [
            { title: "Los clientes regresan cuando eres", bullets: ["Puntual", "Amable", "Honesto"] },
            { title: "Confirma cada trabajo", bullets: ["Día y hora", "Precio", "Lo que vas a hacer"] },
            { title: "Cuando algo sale mal", bullets: ["Pide perdón y di cómo lo arreglas", "¿Peligro o falta de pago? Avísale a tu madre, padre o tutor"] }
          ],
          tryIt: "Tarea final: haz el plan de una página de tu negocio extra: servicio y cliente, precio y por qué, tu volante, tu registro de dinero y dos reglas de seguridad. Muéstraselo a tu madre, padre o tutor y pregúntale qué cambiaría.",
          youCanNow: "planear y manejar un negocio extra pequeño y seguro con la IA como ayudante.",
          quickCheck: [
            { objective: "O6", q: "¿Qué debe incluir un mensaje para confirmar un trabajo?", options: ["Tu dirección de casa", "El día, la hora, el precio y la tarea", "Tu horario de la escuela", "Tus datos bancarios"], answer: 1, why: "Confirmar el día, la hora, el precio y la tarea evita confusiones." },
            { objective: "O6", q: "Se te olvidó rellenar el plato de agua de una mascota. ¿Qué haces?", options: ["Lo escondes", "Le echas la culpa a la mascota", "Pides disculpas, explicas cómo lo vas a arreglar y lo haces", "Dejas de responder mensajes"], answer: 2, why: "Reconocer el error y arreglarlo mantiene la confianza de los clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Manejar tu negocio extra",
        questions: [
          { objective: "O4", q: "¿Qué nunca debe aparecer en tu volante?", options: ["Tu precio", "Una llamada a la acción", "Lo que haces", "La dirección de tu casa"], answer: 3, why: "La dirección de tu casa pone en riesgo tu seguridad." },
          { objective: "O4", q: "¿Qué es una llamada a la acción?", options: ["Una línea que le dice a la gente qué hacer después", "Un tono de teléfono", "Un tipo de precio", "Una regla de la escuela"], answer: 0, why: "Les dice a los clientes cómo reservarte." },
          { objective: "O5", q: "Un registro de dinero sencillo tiene columnas para:", options: ["Contraseñas", "Solo tus canciones favoritas", "Fecha, dinero que entra, dinero que sale y notas", "Solo los nombres de tus amigos"], answer: 2, why: "Esas cuatro columnas llevan la cuenta de cada dólar." },
          { objective: "O5", q: "La ganancia es:", options: ["Tu precio", "Todo el dinero que recibiste", "El dinero que gastaste", "El dinero que entra menos el dinero que sale"], answer: 3, why: "La ganancia es lo que queda después de los costos." },
          { objective: "O6", q: "Un cliente te pide hacer algo peligroso. Tú:", options: ["Lo haces para no perder al cliente", "Discutes en internet", "Te detienes y le avisas a tu madre, padre o tutor", "Lo ignoras y sigues trabajando"], answer: 2, why: "Tu seguridad importa más que cualquier trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para emprender y ganar dinero extra (jóvenes)",
    questions: [
      { objective: "O1", q: "Un negocio extra es:", options: ["Un paso de baile", "Una forma pequeña de ganar dinero fuera de la escuela o de un trabajo principal", "Un club escolar", "Un tipo de examen"], answer: 1, why: "Es trabajo extra que haces en tu propio tiempo." },
      { objective: "O1", q: "Una buena instrucción a la IA para ideas de negocio extra incluye:", options: ["Tu edad, habilidades y horas, y \"seguro para un adolescente\"", "La dirección de tu casa", "Tu número de banco", "Nada"], answer: 0, why: "Esos datos dan ideas que te quedan bien." },
      { objective: "O1", q: "Una idea choca con tu horario escolar. Deberías:", options: ["Hacerla de todos modos", "Faltar a la escuela", "Tacharla y elegir otra", "Pedirle a la IA que haga tu tarea"], answer: 2, why: "La escuela va primero." },
      { objective: "O2", q: "Según la ley federal, cuidar niños de vez en cuando:", options: ["No está cubierto por las reglas de trabajo infantil", "Requiere que tengas 18", "Está prohibido para adolescentes", "Requiere una licencia"], answer: 0, why: "El Departamento de Trabajo dice que cuidar niños de vez en cuando no está cubierto por las reglas federales." },
      { objective: "O2", q: "La regla de trabajo juvenil de tu estado es más estricta que la ley federal. Sigues:", options: ["La regla de tu amigo", "La regla más fácil", "Ninguna regla", "La regla más estricta"], answer: 3, why: "Cuando aplican las dos, cuenta la norma más estricta." },
      { objective: "O2", q: "El IRS dice que debes declarar el impuesto de trabajo por cuenta propia cuando las ganancias netas son:", options: ["Más de $1 millón", "$400 o más", "Cualquier cantidad mayor a $1", "Nunca, si eres adolescente"], answer: 1, why: "El límite del IRS es de $400 de ganancias netas, a cualquier edad." },
      { objective: "O2", q: "¿Quién debe manejar las apps de pago y las cuentas de venta que requieren a un adulto?", options: ["Un desconocido", "Tu madre, padre o tutor", "El primo mayor de un amigo", "Nadie"], answer: 1, why: "Muchas requieren a un adulto, y tu madre, padre o tutor debe saber de tu dinero." },
      { objective: "O3", q: "Tu precio debe cubrir:", options: ["Los costos de tu amigo", "Solo lo que diga la IA", "Nada", "Tus costos y tu tiempo"], answer: 3, why: "Un precio justo paga tus costos y tu tiempo." },
      { objective: "O5", q: "Ganancia significa:", options: ["El dinero que queda después de los costos", "Todo el dinero que recibiste", "Tus gastos", "Una propina"], answer: 0, why: "Ganancia = dinero que entra menos dinero que sale." },
      { objective: "O3", q: "¿Por qué tener un precio claro para cada servicio?", options: ["Es ilegal no hacerlo", "Confunde a los clientes", "Es sencillo y justo para todos", "La IA lo exige"], answer: 2, why: "Los precios claros e iguales generan confianza." },
      { objective: "O4", q: "Cuando la IA escribe tu volante, deberías:", options: ["Dejar que la IA elija tu precio", "Publicarlo sin leerlo", "Agregar la dirección de tu casa", "Editarlo para que suene como tú"], answer: 3, why: "Tu voz hace que el volante sea tuyo." },
      { objective: "O4", q: "¿Qué contacto va en el volante de un adolescente?", options: ["Tu horario escolar", "La dirección de tu casa", "Un contacto que apruebe tu madre, padre o tutor", "La combinación de tu casillero"], answer: 2, why: "Los contactos aprobados te mantienen seguro." },
      { objective: "O4", q: "Antes de poner volantes en una tienda o biblioteca deberías:", options: ["Pegarlos en cualquier lado", "Pedir permiso", "Tapar otros volantes", "No preguntar"], answer: 1, why: "Los lugares tienen reglas para sus tableros." },
      { objective: "O5", q: "¿Qué herramienta gratuita puede guardar un registro de dinero?", options: ["Google Sheets", "Una app de música", "Una consola de juegos", "Un filtro de fotos"], answer: 0, why: "Las hojas de cálculo como Google Sheets son gratuitas." },
      { objective: "O5", q: "¿Qué nunca debes escribir en una herramienta de IA?", options: ["\"Escribe un volante\"", "\"Haz una tabla para llevar el dinero\"", "Números de banco o de tarjeta", "\"Dame ideas\""], answer: 2, why: "Los números de banco y de tarjeta son privados." },
      { objective: "O5", q: "¿Cada cuánto deberías revisar tu registro?", options: ["Cada semana", "Una vez al año", "Nunca", "Solo cuando pierdes dinero"], answer: 0, why: "Las revisiones semanales muestran cómo vas." },
      { objective: "O6", q: "Antes de cada trabajo deberías confirmar:", options: ["Tu bocadillo favorito", "Solo el precio", "Nada", "Día, hora, precio y tarea"], answer: 3, why: "Confirmar evita sorpresas." },
      { objective: "O6", q: "Llegaste tarde a un trabajo. La mejor respuesta es:", options: ["Culpar al cliente", "Pedir perdón, explicar cómo lo arreglas y cumplir tu promesa", "Ignorarlo", "Cobrar más"], answer: 1, why: "Hacerte cargo de tus errores mantiene a los clientes." },
      { objective: "O6", q: "Un cliente no paga. Deberías:", options: ["Ir solo a su casa a exigir el dinero", "Avisarle a tu madre, padre o tutor", "Publicar sobre él en internet", "Seguir trabajando gratis"], answer: 1, why: "Un adulto puede ayudar a manejarlo de forma segura." },
      { objective: "O2", q: "¿Quién debe ver el plan de tu negocio extra antes de empezar?", options: ["Solo la IA", "Nadie", "Solo desconocidos en internet", "Tu madre, padre o tutor"], answer: 3, why: "Tu madre, padre o tutor ayuda con la seguridad, las reglas y el dinero." }
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
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Servicio y cliente",
        objective: "O1",
        notYet: "El servicio o el cliente no están claros.",
        meets: "Dice cuál es el servicio, para quién es y que al menos tres personas dijeron que pagarían.",
        exceeds: "Además muestra que la idea encaja con las horas reales que tiene cada semana."
      },
      {
        name: "Precio",
        objective: "O3",
        notYet: "No hay precio, o no hay una razón para él.",
        meets: "Un precio claro que cubre los costos y el tiempo, comprobado con personas de la zona.",
        exceeds: "Muestra el costo por trabajo y cómo se compara el precio con otras opciones de la zona."
      },
      {
        name: "Volante",
        objective: "O4",
        notYet: "El volante tiene la dirección de casa, o no tiene precio ni contacto.",
        meets: "Un titular, puntos cortos, el precio y un contacto aprobado, sin dirección de casa.",
        exceeds: "Las palabras se editaron para que suenen como la persona, y el diseño es fácil de leer."
      },
      {
        name: "Registro de dinero",
        objective: "O5",
        notYet: "Faltan columnas o no hay forma de ver la ganancia.",
        meets: "Fecha, dinero que entra, dinero que sale y notas, con un total que muestra la ganancia.",
        exceeds: "Tiene movimientos reales o de práctica y una nota sobre cuándo se revisará cada semana."
      },
      {
        name: "Reglas de seguridad",
        objective: "O2",
        notYet: "Menos de dos reglas de seguridad, o la madre, el padre o el tutor no lo revisó.",
        meets: "Dos reglas de seguridad acordadas con la madre, el padre o el tutor, que ya vio el plan.",
        exceeds: "Además anota las reglas de trabajo para jóvenes y de impuestos que aplican, revisadas en sitios oficiales."
      }
    ]
  },
  evaluation: {
    results: [
      "Jóvenes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Jóvenes que empiezan su negocio extra con el visto bueno de su madre, padre o tutor dentro de 60 días",
      "Jóvenes que llevan un registro de dinero durante al menos cuatro semanas",
      "Jóvenes que informan ganancias y clientes que repiten en el seguimiento a los 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono, una computadora de la escuela o de la biblioteca con internet",
      "Un asistente de IA gratuito que la persona tenga permiso de usar, y Canva, Google Docs o Google Slides",
      "Google Sheets, Excel o un cuaderno de papel para el registro de dinero",
      "Una madre, un padre o un tutor que revise el plan",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Envía una nota a casa para que las madres, los padres y los tutores sepan que el curso les pide revisar el plan y encargarse de las cuentas que necesitan a un adulto.",
      "Revisa los volantes antes de que los publiquen o impriman, para asegurarte de que no aparezca una dirección de casa ni un contacto privado.",
      "Recuérdales que las reglas de trabajo para jóvenes y de impuestos cambian; pide que revisen la oficina de trabajo de su estado e irs.gov con un adulto.",
      "Nunca pidas a los jóvenes escribir números de cuenta bancaria o de tarjeta en herramientas de IA; los registros de práctica pueden usar cantidades inventadas.",
      "Haz una muestra corta de planes y califica cada uno con la rúbrica, dando retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};

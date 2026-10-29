"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-community-daily-life.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-community-daily-life-es",
  lang: "es",
  translationOf: "underserved-ai-community-daily-life",
  category: "Undeserved Community",
  name: "IA para la comunidad y la vida diaria",
  skills: "Planear la semana de la familia, Hacer un plan de comidas con poco dinero, Encontrar y verificar ayuda local, Dirigir una reunión de la comunidad, Escribir mensajes claros para un grupo",
  outcome: "usar un asistente de IA gratuito para organizar la vida diaria y el trabajo en la comunidad: planear la semana y las comidas de tu familia con poco dinero, encontrar ayuda local y verificarla, y organizar una pequeña reunión de la comunidad con un orden del día, un recordatorio y una lista de recursos.",
  about: [
    "La vida se llena: turnos de trabajo, recoger a los niños en la escuela, citas, la iglesia, los deportes y ayudar a los vecinos. Un asistente de IA gratuito te puede quitar parte de la planeación de encima.",
    "En el capítulo 1 vas a planear una semana familiar y un plan de comidas con poco dinero, y a encontrar ayuda local cuando el dinero no alcanza. En el capítulo 2 vas a usar la IA para unir a tu comunidad: un orden del día para una reunión, mensajes claros para el grupo y una lista de recursos locales.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Organiza una reunión pequeña para un grupo al que perteneces (un comité de vecinos, un grupo de padres, un grupo de la iglesia o un grupo de inquilinos). Usa un asistente de IA para escribir un orden del día de una página y un mensaje corto de recordatorio, y luego haz una lista de tres recursos de ayuda local (por ejemplo, comida, servicios de luz y agua, y ayuda para encontrar empleo) que verificaste tú en sitios web oficiales o por medio del 211.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos de comunidades desatendidas que hacen malabares entre el trabajo, la familia y la comunidad: padres y madres, cuidadores, y miembros o líderes de clubes de vecinos, grupos de padres, grupos de la iglesia y grupos de inquilinos.",
    startingPoint: "Usan el teléfono para llamar, mandar mensajes y algunas aplicaciones, y planean su semana de memoria o en papel. Pocos han usado un asistente de IA para planear, y muchos no conocen el 211.",
    gap: "Las familias ocupadas faltan a citas, gastan de más en comida y batallan para encontrar ayuda local, y los grupos de la comunidad pierden tiempo en reuniones sin plan. Un asistente de IA gratuito puede encargarse de planear, pero necesitan usarlo con seguridad y revisar todo lo que diga sobre programas locales.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de quinto o sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca",
      "Costo: solo herramientas gratuitas",
      "La IA no sabe los precios de hoy ni qué programas están abiertos; hay que revisar con el 211 y con fuentes oficiales",
      "Privacidad: solo nombres de pila o papeles, y nada de datos de salud o de dinero de otras personas en los prompts"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una semana llena de turnos, escuela y citas", action: "usar un asistente de IA para convertir tu lista en un horario día por día y arreglar los choques", standard: "usando solo nombres de pila o papeles, y tomando tú las decisiones finales" },
    { id: "O2", condition: "Con el tamaño de tu hogar, tu presupuesto y la comida que tienes", action: "crear un plan de cinco cenas y una lista de compras con un asistente de IA", standard: "revisando el costo con los precios reales de tu tienda" },
    { id: "O3", condition: "Ante una necesidad real, como comida, renta o servicios", action: "encontrar un programa local por medio del 211 y confirmarlo con una fuente oficial", standard: "anotando su número de teléfono oficial antes de ir" },
    { id: "O4", condition: "Para un grupo al que perteneces", action: "escribir el orden del día de una reunión, de una página, con un asistente de IA", standard: "con los temas en orden, los tiempos, el tema más importante al principio y tiempo para preguntas" },
    { id: "O5", condition: "Antes y después de una reunión del grupo", action: "escribir un recordatorio y convertir notas sueltas en un resumen con tareas", standard: "sin datos privados, y revisado con alguien que estuvo ahí" },
    { id: "O6", condition: "Para tres necesidades de tu comunidad", action: "crear una lista de recursos de una página con números oficiales y horarios que revisaste tú", standard: "con la fecha en que la revisaste" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA en casa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planear la semana de tu familia",
          minutes: 5,
          goal: "Usar un asistente de IA para convertir una semana desordenada en un horario claro.",
          text: [
            "Cuando se juntan los turnos de trabajo, la escuela, las citas y los mandados, es fácil olvidar algo. Un asistente de IA puede ordenar tu lista en un plan día por día.",
            "Escribe todo lo que tienes que hacer esta semana, en cualquier orden, con las horas que ya conoces. Usa nombres de pila o papeles (\"mi hijo mayor\", \"la abuela\") en lugar de nombres completos. Luego pide: \"Pon esto en un horario día por día. Muestra lo que choca.\"",
            "Busca los choques, cuando dos cosas pasan a la misma hora. Pide a la IA ideas, como compartir el auto o mover un mandado, pero la decisión final es tuya."
          ],
          steps: ["Haz una lista de todo lo de la semana, en cualquier orden, con las horas que sabes.", "Pide a la IA que lo ordene en un horario día por día y muestre los choques.", "Pide ideas para resolver cada choque.", "Copia el plan final al calendario de tu teléfono o a una hoja en el refrigerador."],
          words: [["Horario", "un plan que muestra qué pasa cada día y a qué hora."], ["Choque", "cuando dos cosas están planeadas a la misma hora."]],
          slides: [
            { title: "¿Demasiado que recordar?", bullets: ["Turnos, escuela, citas, mandados", "La IA lo puede ordenar en un plan"] },
            { title: "Cómo pedirlo", bullets: ["Haz una lista de todo, en cualquier orden", "Usa nombres de pila o papeles, no nombres completos", "\"Haz un horario día por día. Muestra los choques.\""] },
            { title: "Resuelve los choques", bullets: ["Pide ideas: compartir el auto, mover un mandado", "La decisión final es tuya", "Ponlo en tu calendario o en el refrigerador"] }
          ],
          tryIt: "Haz una lista de todo lo que tu hogar tiene que hacer esta semana. Pide a un asistente de IA que la convierta en un horario día por día y que señale los choques.",
          youCanNow: "convertir una semana ocupada en un horario claro y ver los choques a tiempo.",
          quickCheck: [
            { objective: "O1", q: "¿Qué debes escribir primero cuando planeas tu semana con la IA?", options: ["Todo lo que tienes que hacer, con las horas que ya sabes", "Los nombres completos y los cumpleaños de tu familia", "Solo el día más difícil", "La contraseña de tu trabajo"], answer: 0, why: "La IA necesita tu lista completa y las horas que ya sabes para ordenarla en un horario." },
            { objective: "O1", q: "Para arreglar un choque, la IA sugiere faltar a la cita médica de tu hijo. ¿Qué haces?", options: ["Haces lo que dice la IA", "Le pides otras ideas, como compartir el auto, y eliges tú", "Cancelas todo lo de ese día", "Dejas de usar el horario"], answer: 1, why: "La IA da ideas, pero la decisión final para tu familia la tomas tú." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Hacer un plan de comidas con poco dinero",
          minutes: 5,
          goal: "Hacer una semana de comidas y una lista de compras que quepan en tu presupuesto.",
          text: [
            "Un asistente de IA puede planear comidas según lo que ya tienes, lo que le gusta a tu familia y cuánto puedes gastar.",
            "Dile: cuántas personas son, tu presupuesto, las comidas que le gustan a tu familia o que no pueden comer, lo que hay en tu cocina y cuánto tiempo tienes para cocinar. Pide una lista de compras agrupada por sección de la tienda.",
            "La IA no sabe los precios de hoy en tu tienda, así que toma sus cálculos de costo como aproximados. Revisa el folleto semanal o la aplicación de la tienda. Para necesidades de salud como diabetes o alergias, sigue los consejos de tu médico o nutricionista."
          ],
          steps: ["Revisa qué comida ya tienes.", "Dile a la IA cuántas personas son, el presupuesto, los gustos, las alergias y el tiempo para cocinar.", "Pide cinco cenas y una lista de compras agrupada por sección de la tienda.", "Compara con los precios reales de tu tienda y ajusta."],
          words: [["Presupuesto", "la cantidad de dinero que planeas gastar."], ["Básicos", "alimentos sencillos que usas seguido, como arroz, frijoles, harina y aceite."]],
          slides: [
            { title: "La IA puede planear comidas", bullets: ["Según lo que ya tienes", "Según lo que le gusta a tu familia", "Según tu presupuesto"] },
            { title: "Dile", bullets: ["Cuántas personas y el presupuesto", "Gustos, alergias, tiempo para cocinar", "Lo que ya hay en tu cocina"] },
            { title: "Revisa antes de comprar", bullets: ["La IA no sabe los precios de hoy", "Revisa el folleto o la aplicación de la tienda", "Salud: sigue a tu médico"] }
          ],
          tryIt: "Pide a un asistente de IA cinco cenas para tu hogar usando alimentos que ya tienes más un presupuesto que tú eliges, con una lista de compras agrupada por sección de la tienda.",
          youCanNow: "hacer con la IA un plan de comidas y una lista de compras con poco dinero, y compararlos con los precios reales.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué agrupar la lista de compras por sección de la tienda?", options: ["Hace la comida más barata", "La IA lo necesita", "Hace que las compras sean más rápidas", "Las tiendas lo exigen"], answer: 2, why: "Agrupar por sección, como frutas y verduras o lácteos, ahorra tiempo en la tienda." },
            { objective: "O2", q: "En casa tienes arroz, frijoles y huevos. ¿Qué le dices a la IA?", options: ["Nada; ella va a adivinar", "Solo tu presupuesto", "Tu restaurante favorito", "Los alimentos que ya tienes, para que planee con ellos"], answer: 3, why: "Planear con la comida que ya tienes ahorra dinero y evita desperdicio." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Encontrar ayuda local cuando el dinero no alcanza",
          minutes: 5,
          goal: "Encontrar un recurso local para una necesidad real y verificarlo con una fuente oficial.",
          text: [
            "Muchas familias necesitan ayuda alguna vez: con la comida, la renta, las cuentas de luz y agua, el cuidado de los niños o un empleo. Pedir ayuda es parte de cuidar a tu familia.",
            "El 211 es una línea confidencial que conecta a las personas con ayuda local para vivienda, comida, transporte, atención médica y más. Puedes marcar 211, y en muchas zonas también hay chat por mensaje de texto o por internet. Tu biblioteca y tu centro comunitario también tienen listas de ayuda local.",
            "Un asistente de IA te puede ayudar a entender qué tipos de ayuda existen y qué preguntar. Pero puede mencionar lugares que ya cerraron o programas que cambiaron. Confirma siempre con el 211, con el sitio web oficial del programa o con una llamada."
          ],
          steps: ["Di cuál es la necesidad: comida, renta, luz y agua, cuidado de niños o empleo.", "Pregunta a una IA qué tipos de programas suelen ayudar y qué preguntarles.", "Marca 211 o entra a 211.org para encontrar programas locales reales.", "Llama o revisa el sitio web oficial del programa antes de ir."],
          words: [["Recurso", "un lugar, programa o persona que puede ayudar con una necesidad."], ["Confidencial", "se mantiene en privado; no se comparte sin tu permiso."]],
          sources: [{ name: "211.org: Acerca de 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Pedir ayuda es fortaleza", bullets: ["Comida, renta, luz y agua, cuidado de niños, empleo", "Hay muchos programas locales"] },
            { title: "El 211 te conecta", bullets: ["Marca 211, a cualquier hora", "Confidencial, y puede ser anónimo", "También: listas de la biblioteca y del centro comunitario"] },
            { title: "Usa la IA y luego confirma", bullets: ["La IA explica qué tipos de ayuda existen", "Puede mencionar lugares cerrados", "Confirma con el 211 o el sitio oficial"] }
          ],
          tryIt: "Elige una necesidad que tenga tu familia o un vecino. Pregunta a una IA qué tipos de programas ayudan con eso. Luego encuentra un programa local real por medio de 211.org o marcando 211, y anota su número de teléfono oficial.",
          youCanNow: "encontrar un recurso local para una necesidad real y confirmarlo con una fuente oficial.",
          quickCheck: [
            { objective: "O3", q: "Además de marcar al 211, ¿de qué otra forma puedes comunicarte muchas veces?", options: ["Por mensaje de texto, por chat en la web o en 211.org", "Solo en persona", "Mandando una carta por correo", "Con una aplicación de pago"], answer: 0, why: "En muchas zonas el 211 atiende por mensaje de texto o chat en la web, y en línea en 211.org." },
            { objective: "O3", q: "Un vecino necesita ayuda para pagar la cuenta de luz. ¿Cuál es un buen primer paso con la IA?", options: ["Pedirle a la IA que pague la cuenta", "Preguntar qué tipos de programas ayudan y qué preguntarles", "Publicar en internet la cuenta del vecino", "Esperar a que corten la luz"], answer: 1, why: "La IA puede explicar los tipos de ayuda y qué preguntar; luego encuentras programas reales con el 211." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA en casa",
        questions: [
          { objective: "O1", q: "Al escribir la semana de tu familia para una IA, ¿cómo debes nombrar a las personas?", options: ["Nombres completos con fechas de nacimiento", "Nombres de pila o papeles como \"mi hijo mayor\"", "Números de Seguro Social", "La dirección de cada persona"], answer: 1, why: "Los nombres de pila o los papeles dejan fuera los datos privados." },
          { objective: "O1", q: "¿Qué es un choque en un horario?", options: ["Dos cosas planeadas a la misma hora", "Un día libre", "Un día festivo", "Un plan cancelado"], answer: 0, why: "Un choque es cuando dos planes se enciman." },
          { objective: "O2", q: "La IA dice que tu lista de compras va a costar $42. ¿Qué haces?", options: ["Confías en ese número exacto", "Pagas $42 antes de comprar", "Lo tomas como un cálculo aproximado y revisas los precios de la tienda", "Ignoras la lista"], answer: 2, why: "La IA no sabe los precios de hoy en tu tienda." },
          { objective: "O2", q: "Tu hijo tiene una alergia a un alimento. ¿Qué consejo va primero para los planes de comida?", options: ["El de la IA", "Una publicación de redes sociales", "Un sitio web cualquiera", "El de tu médico o nutricionista"], answer: 3, why: "Las necesidades de salud siguen el consejo de un profesional." },
          { objective: "O3", q: "La IA menciona un banco de alimentos cerca de ti. ¿Qué debes hacer antes de ir?", options: ["Confirmarlo con el 211, su sitio oficial o una llamada", "Solo ir", "Publicarlo en internet", "Volver a preguntarle a la IA"], answer: 0, why: "La IA puede mencionar lugares que cerraron; confirma primero." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA para tu comunidad",
      lessons: [
        {
          objectives: ["O4"],
          title: "Hacer el orden del día de una reunión",
          minutes: 5,
          goal: "Usar un asistente de IA para escribir un orden del día claro de una página.",
          text: [
            "Los grupos de la comunidad logran más cuando las reuniones tienen un plan. Un orden del día es una lista corta de lo que se va a tratar en la reunión, en orden, con cuánto tiempo para cada parte.",
            "Dile a la IA el grupo, la meta, cuánto dura la reunión y los temas. Por ejemplo: \"Haz un orden del día de una hora para nuestro grupo de inquilinos. Temas: lavadoras descompuestas, una comida al aire libre en el verano y elegir un nuevo secretario. Deja tiempo para preguntas.\"",
            "Léelo pensando en lo que necesita tu grupo. Cambia los temas de lugar, agrega una bienvenida y asegúrate de que el tema más importante no quede apretado al final."
          ],
          steps: ["Anota el grupo, la meta, la duración y los temas.", "Pide a la IA un orden del día de una página con tiempos para cada tema.", "Pon el tema más importante al principio.", "Agrega una bienvenida y tiempo para preguntas, y compártelo antes de la reunión."],
          words: [["Orden del día", "una lista de temas para una reunión, en orden, con tiempos."], ["Secretario", "la persona del grupo que toma notas y lleva los registros."]],
          slides: [
            { title: "Las reuniones necesitan un plan", bullets: ["Un orden del día pone los temas en orden", "Cada tema tiene un tiempo"] },
            { title: "Dile a la IA", bullets: ["El grupo y la meta", "Cuánto dura la reunión", "Los temas"] },
            { title: "Que te funcione", bullets: ["El tema más importante al principio", "Agrega bienvenida y preguntas", "Compártelo antes de la reunión"] }
          ],
          tryIt: "Pide a un asistente de IA que escriba un orden del día de una hora para un grupo real al que perteneces, con tres temas y tiempo para preguntas.",
          youCanNow: "hacer un orden del día claro para una reunión con un asistente de IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué cuatro cosas debe decirle a la IA un prompt para un orden del día?", options: ["Los teléfonos de los miembros", "Solo la fecha", "El grupo, la meta, la duración y los temas", "La lista de botanas de la reunión"], answer: 2, why: "Con el grupo, la meta, la duración y los temas, la IA puede hacer un orden del día útil." },
            { objective: "O4", q: "La IA puso al final, con 5 minutos, la elección de un nuevo secretario. Es tu tema principal. ¿Qué haces?", options: ["Lo dejas así", "Lo quitas", "Haces la reunión más corta", "Lo pasas más al principio y le das más tiempo"], answer: 3, why: "El tema más importante debe ir al principio para que no quede apretado al final." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Escribir mensajes y notas claros para el grupo",
          minutes: 5,
          goal: "Escribir un recordatorio de la reunión y convertir notas sueltas en un resumen corto.",
          text: [
            "Un buen recordatorio dice qué, cuándo, dónde y qué llevar, en pocas líneas cortas. Pide a la IA uno con tono amable, y una segunda versión en otro idioma si tu grupo lo necesita.",
            "Después de la reunión, la IA puede convertir notas sueltas en un resumen limpio: qué se decidió, quién va a hacer qué y para cuándo. Deja fuera los datos privados, como la salud o los problemas de dinero de alguien.",
            "Antes de enviarlo, revisa los nombres, las fechas y las decisiones con alguien que estuvo ahí. Un resumen tiene que coincidir con lo que de verdad pasó."
          ],
          steps: ["Pide un recordatorio amable con qué, cuándo, dónde y qué llevar.", "Pide una versión en otro idioma si hace falta.", "Después de la reunión, pega tus notas sueltas sin datos privados.", "Pide un resumen: decisiones, quién hace qué y para cuándo.", "Revísalo con alguien que estuvo ahí y luego envíalo."],
          words: [["Resumen", "una versión corta que deja solo los puntos principales."], ["Tarea acordada", "algo que alguien se comprometió a hacer después de una reunión."]],
          slides: [
            { title: "Un buen recordatorio", bullets: ["Qué, cuándo, dónde, qué llevar", "Corto y amable", "Otro idioma si hace falta"] },
            { title: "De notas a resumen", bullets: ["Pega notas sueltas, sin datos privados", "Pide decisiones y tareas acordadas", "Quién hace qué y para cuándo"] },
            { title: "Revisa antes de enviar", bullets: ["Nombres, fechas y decisiones", "Pregunta a alguien que estuvo ahí"] }
          ],
          tryIt: "Pide a un asistente de IA un recordatorio de tres líneas para la reunión de la lección 4. Luego escribe cinco notas sueltas de práctica y pídele que las convierta en un resumen con tareas acordadas.",
          youCanNow: "escribir recordatorios claros para reuniones y convertir notas en un resumen con tareas acordadas.",
          quickCheck: [
            { objective: "O5", q: "¿Qué enumera el resumen de una reunión?", options: ["Las decisiones, quién hace qué y para cuándo", "Los problemas privados de todos", "Solo las botanas", "Cada palabra que se dijo"], answer: 0, why: "Un resumen muestra qué se decidió y quién va a hacer qué y para cuándo." },
            { objective: "O5", q: "Tus notas sueltas dicen que un miembro está atrasado con la renta. ¿Qué haces antes de pegarlas en la IA?", options: ["Lo dejas; es útil", "Quitas ese dato privado", "Agregas su nombre completo", "Mandas las notas a toda la calle"], answer: 1, why: "Los datos privados del dinero o la salud de alguien no van en los prompts ni en los resúmenes." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer una lista de recursos de la comunidad",
          minutes: 5,
          goal: "Hacer una lista de una página de ayuda local que verificaste tú.",
          text: [
            "Una lista de recursos ayuda a los vecinos a encontrar ayuda rápido. Que sea de una página: el tipo de ayuda, el nombre del programa, el teléfono o sitio web oficial y el horario.",
            "Usa la IA para armar el formato y explicar cada programa en una frase sencilla. Saca los nombres, números y horarios reales del 211, del sitio web oficial del programa o de una llamada, no de la IA.",
            "Pon la fecha abajo (\"Verificado el ...\"). Los programas cambian, así que vuelve a revisar la lista cada pocos meses."
          ],
          steps: ["Elige tres necesidades que tenga tu comunidad.", "Encuentra un programa real para cada una por medio del 211 o de sitios web oficiales.", "Pide a la IA un formato sencillo de una página y una descripción sencilla de una línea para cada uno.", "Llena tú los números y horarios oficiales.", "Agrega la fecha en que lo verificaste."],
          words: [["Formato", "cómo se acomodan las palabras y los recuadros en una página."]],
          sources: [{ name: "211.org: encuentra tu 211 local", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "Lista de recursos de una página", bullets: ["Tipo de ayuda y nombre del programa", "Teléfono o sitio web oficial", "Horario"] },
            { title: "Quién hace qué", bullets: ["La IA: formato y descripciones sencillas", "Tú: nombres, números y horarios reales de fuentes oficiales"] },
            { title: "Mantenla al día", bullets: ["Escribe \"Verificado el\" y la fecha", "Vuelve a revisar cada pocos meses"] }
          ],
          tryIt: "Tarea final: organiza una reunión pequeña para tu grupo con un orden del día y un recordatorio escritos con IA, y haz una lista de una página con tres recursos de ayuda local que verificaste tú.",
          youCanNow: "organizar una reunión de la comunidad y compartir una lista verificada de ayuda local.",
          quickCheck: [
            { objective: "O6", q: "¿Qué cuatro cosas van en cada línea de una lista de recursos?", options: ["Nombre, edad, dirección y trabajo", "Precio, color, tamaño y marca", "El tipo de ayuda, el nombre del programa, el teléfono o sitio web oficial y el horario", "Solo el nombre del programa"], answer: 2, why: "Estas cuatro cosas permiten que los vecinos encuentren y contacten la ayuda rápido." },
            { objective: "O6", q: "La IA escribe un número de teléfono para un banco de alimentos. ¿Qué haces?", options: ["Lo usas tal como está", "Quitas el banco de alimentos de la lista", "Le vuelves a preguntar a la IA", "Lo cambias por el número del 211 o del sitio oficial"], answer: 3, why: "Los números y horarios reales vienen del 211 o de fuentes oficiales, no de la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA para tu comunidad",
        questions: [
          { objective: "O4", q: "¿Qué es un orden del día?", options: ["Una lista de temas de la reunión, en orden, con tiempos", "Una factura", "Un chat de grupo", "Una hoja de asistencia"], answer: 0, why: "Un orden del día planea lo que cubre la reunión." },
          { objective: "O4", q: "¿Dónde debe ir el tema más importante en un orden del día?", options: ["Al final de todo", "Al principio de la reunión", "Fuera del orden del día", "En otra reunión el próximo año"], answer: 1, why: "Los primeros temas reciben más tiempo y atención." },
          { objective: "O5", q: "Un buen recordatorio de reunión incluye:", options: ["Los teléfonos de todos", "Las direcciones de los miembros", "Qué, cuándo, dónde y qué llevar", "Una larga historia del grupo"], answer: 2, why: "Esos cuatro datos son lo que la gente necesita." },
          { objective: "O5", q: "Tus notas mencionan un problema médico de un miembro. Antes de dárselas a la IA, tú:", options: ["Lo dejas", "Agregas más detalles", "Lo compartes en el chat del grupo", "Quitas ese dato privado"], answer: 3, why: "Los datos privados de otras personas se quedan fuera de las herramientas de IA." },
          { objective: "O6", q: "¿De dónde deben salir los números de teléfono de una lista de recursos?", options: ["Del 211 o del sitio web oficial del programa", "De lo que diga la IA", "De una suposición", "De un volante viejo de hace años"], answer: 0, why: "La IA puede dar números equivocados; las fuentes oficiales son las correctas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la comunidad y la vida diaria",
    questions: [
      { objective: "O1", q: "Para planear la semana de tu familia con IA, primero:", options: ["Haz una lista de todo lo que tienes que hacer, con las horas que sabes", "Escribe tu número de banco", "Compra una aplicación de agenda", "Llama al 211"], answer: 0, why: "La IA necesita tu lista para ordenarla." },
      { objective: "O1", q: "¿Cuál es una forma segura de nombrar a tu familia en una instrucción?", options: ["Nombres completos y fechas de nacimiento", "\"Mi hijo mayor\" o nombres de pila", "Números de identificación escolar", "Números de Seguro Social"], answer: 1, why: "Los papeles o los nombres de pila mantienen los datos en privado." },
      { objective: "O1", q: "Cuando la IA encuentra un choque, tú:", options: ["Dejas que la IA decida", "Lo ignoras", "Pides ideas y luego tomas la decisión final", "Cancelas todo"], answer: 2, why: "La IA sugiere; tú decides." },
      { objective: "O2", q: "Una instrucción para un plan de comidas debe incluir:", options: ["Tu contraseña", "Tu dirección", "El NIP de tu banco", "Cuántas personas son, el presupuesto, los gustos y las alergias"], answer: 3, why: "Esos datos dan forma a un plan útil." },
      { objective: "O2", q: "¿Por qué revisar el folleto semanal de la tienda después de que la IA hace tu lista?", options: ["La IA no sabe los precios de hoy", "La IA siempre cobra de más", "Las tiendas lo exigen", "Es la ley"], answer: 0, why: "Los cálculos de costo de la IA son aproximados." },
      { objective: "O2", q: "Los básicos son:", options: ["Solo artículos de oficina", "Alimentos sencillos que usas seguido, como arroz y frijoles", "Postres elegantes", "Comidas de restaurante"], answer: 1, why: "Los básicos son alimentos sencillos de todos los días." },
      { objective: "O3", q: "El 211 es:", options: ["Una aplicación de IA", "Una tienda", "Una línea confidencial que conecta a las personas con ayuda local", "Un banco"], answer: 2, why: "El 211 te conecta con ayuda local." },
      { objective: "O3", q: "Las llamadas al 211 son:", options: ["Compartidas en internet", "Grabadas para anuncios", "Solo para negocios", "Confidenciales y pueden ser anónimas"], answer: 3, why: "El 211 dice que las llamadas son confidenciales y pueden ser anónimas." },
      { objective: "O3", q: "Una IA te da una lista de bancos de alimentos. Antes de ir, tú:", options: ["Confirmas uno con el 211, su sitio oficial o una llamada", "Vas a todos", "Confías por completo", "Publicas la lista en internet"], answer: 0, why: "Los programas cierran o cambian; confirma primero." },
      { objective: "O3", q: "Pedir ayuda con la comida o las cuentas es:", options: ["Algo que hay que esconder", "Parte de cuidar a tu familia", "No permitido", "Solo para otras personas"], answer: 1, why: "Usar la ayuda local es un paso inteligente y normal." },
      { objective: "O4", q: "El orden del día de una reunión debe incluir:", options: ["Solo la fecha", "Los teléfonos de los miembros", "Los temas en orden con tiempos", "La dirección de todos"], answer: 2, why: "Los temas y los tiempos mantienen la reunión en orden." },
      { objective: "O4", q: "Una buena instrucción para un orden del día le dice a la IA:", options: ["Nada", "Tu contraseña", "Tu banco", "El grupo, la meta, la duración y los temas"], answer: 3, why: "Esos datos dan forma a un orden del día útil." },
      { objective: "O4", q: "¿Cuándo debes compartir el orden del día?", options: ["Antes de la reunión", "Nunca", "Un mes después", "Solo con quien dirige"], answer: 0, why: "Compartirlo antes ayuda a que la gente llegue preparada." },
      { objective: "O5", q: "En tu grupo hay miembros que hablan otro idioma, como inglés. Para el recordatorio puedes:", options: ["Dejarlos fuera", "Pedir a la IA una versión en ese otro idioma", "Usar solo dibujos", "No enviar nada"], answer: 1, why: "Una versión en otro idioma incluye a más miembros." },
      { objective: "O5", q: "Una tarea acordada es:", options: ["Una película", "Un tipo de aplicación", "Algo que alguien se comprometió a hacer después de una reunión", "Un bocadillo"], answer: 2, why: "Las tareas acordadas dicen quién hace qué y para cuándo." },
      { objective: "O5", q: "Antes de enviar el resumen de una reunión, debes:", options: ["Agregar datos privados", "Enviarlo sin leerlo", "Borrar las notas", "Revisarlo con alguien que estuvo ahí"], answer: 3, why: "Un resumen tiene que coincidir con lo que pasó." },
      { objective: "O6", q: "En una lista de recursos, ¿quién debe llenar los teléfonos y horarios?", options: ["Tú, con fuentes oficiales", "La IA", "Nadie", "Un anuncio emergente"], answer: 0, why: "Las fuentes oficiales dan los números correctos." },
      { objective: "O6", q: "¿Por qué agregar \"Verificado el\" y una fecha a tu lista de recursos?", options: ["Se ve bonito", "Los programas cambian, y así la gente sabe qué tan al día está", "Lo exige la ley", "Para hacerla más larga"], answer: 1, why: "La fecha muestra cuándo se confirmó por última vez." },
      { objective: "O6", q: "¿Cada cuánto debes volver a revisar una lista de recursos?", options: ["Nunca", "Cada diez años", "Cada pocos meses", "Solo si alguien se queja"], answer: 2, why: "Los programas cambian, así que revísala seguido." },
      { objective: "O6", q: "En la tarea final, la lista de recursos tiene:", options: ["Diez lugares inventados por la IA", "Las direcciones de los miembros", "Solo un lugar", "Tres recursos locales que verificaste tú"], answer: 3, why: "La tarea pide tres recursos que confirmaste tú." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      6,
      8,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Orden del día",
        objective: "O4",
        notYet: "No hay orden del día, o los temas no tienen orden ni tiempos.",
        meets: "Una página con los temas en orden, los tiempos y tiempo para preguntas.",
        exceeds: "El tema más importante va al principio, y hay una bienvenida."
      },
      {
        name: "Mensaje de recordatorio",
        objective: "O5",
        notYet: "Falta qué, cuándo o dónde.",
        meets: "Un recordatorio corto y amable con qué, cuándo, dónde y qué llevar.",
        exceeds: "También tiene una versión en el segundo idioma que necesita el grupo."
      },
      {
        name: "Recursos revisados",
        objective: "O3",
        notYet: "Los programas o los números salieron de la IA y no se revisaron.",
        meets: "Tres programas locales reales, cada uno confirmado con el 211, un sitio oficial o una llamada.",
        exceeds: "Puede decir cómo revisó cada uno."
      },
      {
        name: "Formato de la lista de recursos",
        objective: "O6",
        notYet: "Faltan los teléfonos, los horarios o la fecha.",
        meets: "Una página con el tipo de ayuda, el programa, el número o sitio oficial, el horario y la fecha de \"Verificado el\".",
        exceeds: "Cada programa tiene una descripción sencilla de una línea."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que hacen una reunión de grupo planeada, con orden del día, dentro de 30 días (encuesta de seguimiento)",
      "Personas o vecinos que se conectan con un programa de ayuda local que encontraron por medio del 211",
      "Los socios de la comunidad reportan listas de recursos compartidas y al día"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o de un centro comunitario",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Acceso al 211 por teléfono, mensaje de texto o 211.org",
      "Papel y lápiz, o el calendario del teléfono, para el horario y las listas",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Da el curso con un grupo real, como un grupo de padres o de inquilinos, para que el orden del día y la lista de recursos sirvan de inmediato.",
      "Muestra el 211 en vivo y recuerda que pedir ayuda es normal.",
      "Revisa que los prompts no tengan datos privados: solo nombres de pila o papeles, y nada sobre la salud o el dinero de otras personas.",
      "Junta las listas de recursos revisadas en una sola lista compartida para el grupo, con la fecha de revisión.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

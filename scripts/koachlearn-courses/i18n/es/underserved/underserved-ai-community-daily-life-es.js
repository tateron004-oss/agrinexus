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
  chapters: [
    {
      name: "Capítulo 1: La IA en casa",
      lessons: [
        {
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
          youCanNow: "convertir una semana ocupada en un horario claro y ver los choques a tiempo."
        },
        {
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
          youCanNow: "hacer con la IA un plan de comidas y una lista de compras con poco dinero, y compararlos con los precios reales."
        },
        {
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
          youCanNow: "encontrar un recurso local para una necesidad real y confirmarlo con una fuente oficial."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA en casa",
        questions: [
          { q: "Al escribir la semana de tu familia para una IA, ¿cómo debes nombrar a las personas?", options: ["Nombres completos con fechas de nacimiento", "Nombres de pila o papeles como \"mi hijo mayor\"", "Números de Seguro Social", "La dirección de cada persona"], answer: 1, why: "Los nombres de pila o los papeles dejan fuera los datos privados." },
          { q: "¿Qué es un choque en un horario?", options: ["Dos cosas planeadas a la misma hora", "Un día libre", "Un día festivo", "Un plan cancelado"], answer: 0, why: "Un choque es cuando dos planes se enciman." },
          { q: "La IA dice que tu lista de compras va a costar $42. ¿Qué haces?", options: ["Confías en ese número exacto", "Pagas $42 antes de comprar", "Lo tomas como un cálculo aproximado y revisas los precios de la tienda", "Ignoras la lista"], answer: 2, why: "La IA no sabe los precios de hoy en tu tienda." },
          { q: "Tu hijo tiene una alergia a un alimento. ¿Qué consejo va primero para los planes de comida?", options: ["El de la IA", "Una publicación de redes sociales", "Un sitio web cualquiera", "El de tu médico o nutricionista"], answer: 3, why: "Las necesidades de salud siguen el consejo de un profesional." },
          { q: "La IA menciona un banco de alimentos cerca de ti. ¿Qué debes hacer antes de ir?", options: ["Confirmarlo con el 211, su sitio oficial o una llamada", "Solo ir", "Publicarlo en internet", "Volver a preguntarle a la IA"], answer: 0, why: "La IA puede mencionar lugares que cerraron; confirma primero." }
        ]
      }
    },
    {
      name: "Capítulo 2: La IA para tu comunidad",
      lessons: [
        {
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
          youCanNow: "hacer un orden del día claro para una reunión con un asistente de IA."
        },
        {
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
          youCanNow: "escribir recordatorios claros para reuniones y convertir notas en un resumen con tareas acordadas."
        },
        {
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
          youCanNow: "organizar una reunión de la comunidad y compartir una lista verificada de ayuda local."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La IA para tu comunidad",
        questions: [
          { q: "¿Qué es un orden del día?", options: ["Una lista de temas de la reunión, en orden, con tiempos", "Una factura", "Un chat de grupo", "Una hoja de asistencia"], answer: 0, why: "Un orden del día planea lo que cubre la reunión." },
          { q: "¿Dónde debe ir el tema más importante en un orden del día?", options: ["Al final de todo", "Al principio de la reunión", "Fuera del orden del día", "En otra reunión el próximo año"], answer: 1, why: "Los primeros temas reciben más tiempo y atención." },
          { q: "Un buen recordatorio de reunión incluye:", options: ["Los teléfonos de todos", "Las direcciones de los miembros", "Qué, cuándo, dónde y qué llevar", "Una larga historia del grupo"], answer: 2, why: "Esos cuatro datos son lo que la gente necesita." },
          { q: "Tus notas mencionan un problema médico de un miembro. Antes de dárselas a la IA, tú:", options: ["Lo dejas", "Agregas más detalles", "Lo compartes en el chat del grupo", "Quitas ese dato privado"], answer: 3, why: "Los datos privados de otras personas se quedan fuera de las herramientas de IA." },
          { q: "¿De dónde deben salir los números de teléfono de una lista de recursos?", options: ["Del 211 o del sitio web oficial del programa", "De lo que diga la IA", "De una suposición", "De un volante viejo de hace años"], answer: 0, why: "La IA puede dar números equivocados; las fuentes oficiales son las correctas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la comunidad y la vida diaria",
    questions: [
      { q: "Para planear la semana de tu familia con IA, primero:", options: ["Haz una lista de todo lo que tienes que hacer, con las horas que sabes", "Escribe tu número de banco", "Compra una aplicación de agenda", "Llama al 211"], answer: 0, why: "La IA necesita tu lista para ordenarla." },
      { q: "¿Cuál es una forma segura de nombrar a tu familia en una instrucción?", options: ["Nombres completos y fechas de nacimiento", "\"Mi hijo mayor\" o nombres de pila", "Números de identificación escolar", "Números de Seguro Social"], answer: 1, why: "Los papeles o los nombres de pila mantienen los datos en privado." },
      { q: "Cuando la IA encuentra un choque, tú:", options: ["Dejas que la IA decida", "Lo ignoras", "Pides ideas y luego tomas la decisión final", "Cancelas todo"], answer: 2, why: "La IA sugiere; tú decides." },
      { q: "Una instrucción para un plan de comidas debe incluir:", options: ["Tu contraseña", "Tu dirección", "El NIP de tu banco", "Cuántas personas son, el presupuesto, los gustos y las alergias"], answer: 3, why: "Esos datos dan forma a un plan útil." },
      { q: "¿Por qué revisar el folleto semanal de la tienda después de que la IA hace tu lista?", options: ["La IA no sabe los precios de hoy", "La IA siempre cobra de más", "Las tiendas lo exigen", "Es la ley"], answer: 0, why: "Los cálculos de costo de la IA son aproximados." },
      { q: "Los básicos son:", options: ["Solo artículos de oficina", "Alimentos sencillos que usas seguido, como arroz y frijoles", "Postres elegantes", "Comidas de restaurante"], answer: 1, why: "Los básicos son alimentos sencillos de todos los días." },
      { q: "El 211 es:", options: ["Una aplicación de IA", "Una tienda", "Una línea confidencial que conecta a las personas con ayuda local", "Un banco"], answer: 2, why: "El 211 te conecta con ayuda local." },
      { q: "Las llamadas al 211 son:", options: ["Compartidas en internet", "Grabadas para anuncios", "Solo para negocios", "Confidenciales y pueden ser anónimas"], answer: 3, why: "El 211 dice que las llamadas son confidenciales y pueden ser anónimas." },
      { q: "Una IA te da una lista de bancos de alimentos. Antes de ir, tú:", options: ["Confirmas uno con el 211, su sitio oficial o una llamada", "Vas a todos", "Confías por completo", "Publicas la lista en internet"], answer: 0, why: "Los programas cierran o cambian; confirma primero." },
      { q: "Pedir ayuda con la comida o las cuentas es:", options: ["Algo que hay que esconder", "Parte de cuidar a tu familia", "No permitido", "Solo para otras personas"], answer: 1, why: "Usar la ayuda local es un paso inteligente y normal." },
      { q: "El orden del día de una reunión debe incluir:", options: ["Solo la fecha", "Los teléfonos de los miembros", "Los temas en orden con tiempos", "La dirección de todos"], answer: 2, why: "Los temas y los tiempos mantienen la reunión en orden." },
      { q: "Una buena instrucción para un orden del día le dice a la IA:", options: ["Nada", "Tu contraseña", "Tu banco", "El grupo, la meta, la duración y los temas"], answer: 3, why: "Esos datos dan forma a un orden del día útil." },
      { q: "¿Cuándo debes compartir el orden del día?", options: ["Antes de la reunión", "Nunca", "Un mes después", "Solo con quien dirige"], answer: 0, why: "Compartirlo antes ayuda a que la gente llegue preparada." },
      { q: "En tu grupo hay miembros que hablan otro idioma, como inglés. Para el recordatorio puedes:", options: ["Dejarlos fuera", "Pedir a la IA una versión en ese otro idioma", "Usar solo dibujos", "No enviar nada"], answer: 1, why: "Una versión en otro idioma incluye a más miembros." },
      { q: "Una tarea acordada es:", options: ["Una película", "Un tipo de aplicación", "Algo que alguien se comprometió a hacer después de una reunión", "Un bocadillo"], answer: 2, why: "Las tareas acordadas dicen quién hace qué y para cuándo." },
      { q: "Antes de enviar el resumen de una reunión, debes:", options: ["Agregar datos privados", "Enviarlo sin leerlo", "Borrar las notas", "Revisarlo con alguien que estuvo ahí"], answer: 3, why: "Un resumen tiene que coincidir con lo que pasó." },
      { q: "En una lista de recursos, ¿quién debe llenar los teléfonos y horarios?", options: ["Tú, con fuentes oficiales", "La IA", "Nadie", "Un anuncio emergente"], answer: 0, why: "Las fuentes oficiales dan los números correctos." },
      { q: "¿Por qué agregar \"Verificado el\" y una fecha a tu lista de recursos?", options: ["Se ve bonito", "Los programas cambian, y así la gente sabe qué tan al día está", "Lo exige la ley", "Para hacerla más larga"], answer: 1, why: "La fecha muestra cuándo se confirmó por última vez." },
      { q: "¿Cada cuánto debes volver a revisar una lista de recursos?", options: ["Nunca", "Cada diez años", "Cada pocos meses", "Solo si alguien se queja"], answer: 2, why: "Los programas cambian, así que revísala seguido." },
      { q: "En la tarea final, la lista de recursos tiene:", options: ["Diez lugares inventados por la IA", "Las direcciones de los miembros", "Solo un lugar", "Tres recursos locales que verificaste tú"], answer: 3, why: "La tarea pide tres recursos que confirmaste tú." }
    ]
  }
};

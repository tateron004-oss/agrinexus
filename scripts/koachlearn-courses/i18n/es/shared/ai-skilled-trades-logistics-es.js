"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI for Skilled Trades and Logistics". Rules: ../../../README.md (Translations).

module.exports = {
  id: "ai-skilled-trades-logistics-es",
  lang: "es",
  translationOf: "ai-skilled-trades-logistics",
  category: "Re-Entry",
  name: "IA para oficios calificados y logística",
  skills: "Explicar manuales y especificaciones con IA, Escribir un presupuesto de trabajo, Hacer una lista de seguridad, Registrar el trabajo con fotos y notas, Planificar rutas y cargas, Encontrar programas de aprendiz y empleos en oficios",
  outcome: "usar un asistente de IA gratuito en tu teléfono para entender un manual, escribir un presupuesto de trabajo claro, armar una lista de seguridad del trabajo comparándola con las reglas oficiales, llevar un registro de trabajo, planificar una ruta de reparto o de servicio, y encontrar programas de aprendiz y empleos en oficios.",
  about: [
    "Los oficios calificados (electricidad, plomería, climatización, carpintería, soldadura, mecánica automotriz) y la logística (almacenes, montacargas, reparto, transporte de carga, envíos) tienen mucha demanda, y muchos caminos empiezan con un programa de aprendiz o una capacitación corta en lugar de un título universitario. Muchos empleadores de estos campos contratan a personas con antecedentes.",
    "La IA no da los martillazos ni maneja el camión. Pero en un teléfono puede explicar un manual con palabras sencillas, escribir presupuestos y notas de trabajo, hacer borradores de listas de seguridad y ayudar a planificar rutas, lo que ahorra tiempo y te ayuda a verte profesional.",
    "Este curso es para personas que vuelven a casa, trabajadores en programas de capacitación laboral y cualquiera que empieza en un oficio o en un empleo de logística. Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Las reglas de seguridad siempre vienen de tu empleador, del fabricante y de OSHA (la agencia de seguridad laboral de EE. UU.), no de la IA."
  ],
  finalTask: "Para un trabajo real o de práctica en un oficio o en logística, crea con ayuda de la IA un paquete de trabajo: un resumen en lenguaje sencillo de una sección de un manual o de una especificación, un presupuesto u orden de trabajo por escrito, una lista de seguridad del trabajo comparada con una fuente oficial, una entrada del registro de trabajo con notas de fotos de antes y después, y un plan de ruta o de carga. Luego busca un programa de aprendiz o un empleo en un oficio al que podrías postularte.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que vuelven a casa después de la prisión, trabajadores de programas de capacitación laboral y cualquiera que empieza en un oficio calificado (electricidad, plomería, climatización HVAC, carpintería, soldadura, mecánica automotriz) o en un empleo de logística (almacén, montacargas, reparto, transporte en camión).",
    startingPoint: "Saben usar un teléfono para llamar, enviar mensajes y tomar fotos, y muchos tienen experiencia de trabajo práctico. Pocos han usado un asistente de IA para leer manuales, escribir presupuestos o planificar rutas.",
    gap: "A quienes trabajan en oficios y logística se les pide leer manuales técnicos, escribir presupuestos y notas de trabajo, seguir reglas de seguridad y planificar rutas. Usar la IA en el teléfono, y comprobarla con fuentes oficiales, ahorra tiempo, da una imagen profesional y ayuda a entrar a programas de aprendiz y a empleos en oficios.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: muchas veces solo un teléfono, usado en la obra o en un camión",
      "Las reglas de seguridad, el torque, el voltaje y los límites de peso vienen del manual, del empleador y de OSHA, nunca de la IA",
      "Privacidad: nada de papeles ni datos privados de clientes en las fotos ni en las instrucciones para la IA",
      "Tiempo: lecciones de unos cinco minutos que caben entre turnos"
    ],
    prerequisites: "Ninguno. Quienes no conocen las herramientas de IA pueden tomar primero \"Introducción a la IA y a la confianza digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con una sección de un manual o de una hoja de especificaciones", action: "usar la IA para explicarla con palabras sencillas y comprobar cada número con el manual", standard: "con cada número igual al de la fuente" },
    { id: "O2", condition: "Para un trabajo real o de práctica", action: "escribir un presupuesto u orden de trabajo con la mano de obra, las piezas, el total, lo que incluye y la fecha de vencimiento", standard: "con las cuentas revisadas a mano y todas las partes necesarias" },
    { id: "O3", condition: "Para una tarea de trabajo real", action: "hacer con la IA un borrador de lista de seguridad del trabajo y compararlo con el manual o con una fuente oficial de seguridad", standard: "agregando lo que la IA omitió antes de empezar el trabajo" },
    { id: "O4", condition: "Después de un trabajo", action: "escribir una entrada del registro de trabajo con fecha, lugar, trabajo hecho, materiales, problemas, siguientes pasos y notas de fotos", standard: "con todas las partes y sin información privada del cliente" },
    { id: "O5", condition: "Con varias paradas o artículos", action: "planificar una ruta y una lista sencilla de carga o de inventario, y luego comprobar la ruta en una app de mapas", standard: "con la carga en el orden inverso de las paradas y los tiempos de manejo comprobados" },
    { id: "O6", condition: "Usando Apprenticeship.gov o un programa local", action: "encontrar un programa de aprendiz o un empleo en un oficio al que podrías postularte", standard: "y anotar sus requisitos y cómo postularte" }
  ],
  chapters: [
    {
      name: "Capítulo 1: La IA en el trabajo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Entender manuales y especificaciones con IA",
          minutes: 5,
          goal: "Usar la IA para explicar con palabras sencillas un manual técnico o una especificación, y luego comprobarlo con la fuente.",
          text: [
            "Los manuales, las hojas de especificaciones y las guías de instalación están llenos de palabras difíciles. La IA las puede explicar. Copia o escribe una sección, o tómale una foto si tu app de IA lee imágenes, y pregunta: “Explica esto con palabras sencillas. ¿Cuáles son los pasos, qué herramientas necesito y cuáles son las advertencias?”.",
            "Haz más preguntas: “¿Qué significa ‘apretar a 25 ft-lbs’ (libras-pie)?” o “¿Qué diferencia hay entre un tomacorriente GFCI (con protección contra fallas a tierra) y uno normal?”. La IA es un gran tutor para términos e ideas.",
            "Pero el manual manda. Los números como el torque, el voltaje, la presión, las distancias y los límites de peso deben venir del manual del fabricante, del código que se usa en tu zona o de tu supervisor. Si la IA y el manual no coinciden, sigue el manual y pregúntale a tu supervisor."
          ],
          steps: ["Copia, escribe o fotografía la sección del manual.", "Pide a la IA que la explique con palabras sencillas: pasos, herramientas, advertencias.", "Pregunta por los términos que no conoces.", "Comprueba cada número con el manual.", "Si no coinciden, sigue el manual y pregúntale a tu supervisor."],
          words: [["Hoja de especificaciones", "un documento con las medidas y requisitos exactos de un producto."], ["Torque", "qué tan apretado se gira algo, como un tornillo."], ["Código", "las reglas oficiales de construcción o de electricidad que exige una zona."]],
          slides: [
            { title: "La IA como tutor del manual", bullets: ["Pega, escribe o fotografía una sección", "Pide pasos, herramientas y advertencias", "Pregunta qué significan los términos"] },
            { title: "El manual manda", bullets: ["Torque, voltaje, presión, límites de peso", "Vienen del manual, el código o el supervisor"] },
            { title: "Cuando no coinciden", bullets: ["Sigue el manual", "Pregúntale a tu supervisor"] }
          ],
          tryIt: "Busca el manual de algo que tengas (una herramienta, un aparato o un vehículo) en internet o en un cajón. Pide a la IA que explique una sección con palabras sencillas y luego comprueba cada número con el manual.",
          youCanNow: "usar la IA para entender manuales y especificaciones confiando en los números oficiales.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una hoja de especificaciones?", options: ["Un folleto de ventas con precios", "Una lista de las medidas y requisitos exactos de un producto", "Un cartel de seguridad para la sala de descanso", "La reseña de un cliente sobre un producto"], answer: 1, why: "Una hoja de especificaciones da las medidas y los requisitos exactos que debes cumplir." },
            { objective: "O1", q: "La IA explica una sección del manual pero da un voltaje distinto al del manual. ¿Qué harías?", options: ["Usar el voltaje del manual y preguntarle a tu supervisor", "Usar el número de la IA porque es más reciente", "Sacar el promedio de los dos números", "Saltarte ese paso"], answer: 0, why: "Números como el voltaje vienen del manual, no de la IA; si tienes dudas, pregúntale a tu supervisor." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir un presupuesto u orden de trabajo claros",
          minutes: 5,
          goal: "Escribir un presupuesto u orden de trabajo profesional con ayuda de la IA.",
          text: [
            "Los clientes y los supervisores confían en quienes ponen las cosas por escrito. Un presupuesto le dice al cliente qué vas a hacer y cuánto costará antes de empezar. Una orden de trabajo registra un trabajo: lo que se pidió, lo que se hizo, los materiales usados y el tiempo dedicado.",
            "Dale los datos a la IA y deja que le dé formato: “Escribe un presupuesto sencillo para cambiar la llave de un lavabo. Mano de obra 2 horas a $60 por hora. Piezas: llave $85, mangueras de agua $15. Válido por 30 días. El cliente debe elegir el modelo de la llave”. Revisa las cuentas y cada detalle.",
            "Sé honesto: pon qué incluye y qué no, y di que el precio puede cambiar si encuentras problemas ocultos, siempre con la aprobación del cliente primero. Usa una plantilla gratuita de Google Docs o Word y guarda una copia de cada uno."
          ],
          steps: ["Escribe el trabajo, las horas y la tarifa de mano de obra, y las piezas con sus precios.", "Pide a la IA que le dé formato a un presupuesto u orden de trabajo sencillos.", "Revisa las cuentas y los detalles.", "Agrega qué incluye, qué no y cuándo vence.", "Guarda una copia."],
          words: [["Presupuesto", "el precio por escrito de un trabajo antes de empezarlo."], ["Orden de trabajo", "el registro de un trabajo: lo que se pidió, lo que se hizo, los materiales y el tiempo."], ["Mano de obra", "el costo del tiempo del trabajador."]],
          slides: [
            { title: "Ponlo por escrito", bullets: ["Presupuesto: antes del trabajo", "Orden de trabajo: registro del trabajo"] },
            { title: "Deja que la IA le dé formato", bullets: ["Dale mano de obra, tarifa y piezas", "Revisa las cuentas"] },
            { title: "Sé honesto", bullets: ["Qué incluye y qué no", "Cambios solo con aprobación del cliente", "Guarda todas las copias"] }
          ],
          tryIt: "Escribe con ayuda de la IA un presupuesto para un trabajo real o de práctica: mano de obra, piezas, total, qué incluye y una fecha de vencimiento. Revisa las cuentas a mano.",
          youCanNow: "escribir con ayuda de la IA un presupuesto u orden de trabajo claros y honestos.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa \"piezas\" en un presupuesto?", options: ["El tiempo del trabajador", "El impuesto del trabajo", "Los materiales que necesita el trabajo", "El tiempo de traslado"], answer: 2, why: "Las piezas son los materiales; la mano de obra es el tiempo del trabajador." },
            { objective: "O2", q: "La IA suma tu presupuesto en $310, pero tus cuentas a mano dan $280. ¿Qué harías?", options: ["Enviar $310 porque la IA es mejor para las cuentas", "Enviar $280 sin revisar", "Enviarle los dos números al cliente", "Revisar cada línea y enviar el total correcto"], answer: 3, why: "Revisa siempre las cuentas línea por línea antes de enviar un presupuesto." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hacer una lista de seguridad del trabajo",
          minutes: 6,
          goal: "Hacer con la IA un borrador de lista de seguridad del trabajo y compararlo con fuentes oficiales de seguridad.",
          text: [
            "Muchos trabajos de oficios y de almacén usan un análisis de seguridad del trabajo (o de riesgos): se hace la lista de los pasos de un trabajo, los peligros de cada paso y cómo controlarlos. Ejemplos de peligros: caídas, descargas eléctricas, lesiones al levantar peso, equipos en movimiento como los montacargas, químicos y calor.",
            "La IA puede hacer un borrador: “Haz una lista de seguridad para cambiar una lámpara de techo: pasos, peligros y controles, incluido el equipo de protección personal”. A menudo incluirá cosas básicas buenas, como apagar el interruptor y comprobar que no hay corriente.",
            "Pero la IA no es una autoridad en seguridad. Revisa la lista con tu supervisor, las instrucciones del fabricante y fuentes oficiales como OSHA (osha.gov). Las clases Outreach de OSHA de 10 y 30 horas enseñan lo básico de la seguridad; OSHA dice que la tarjeta es voluntaria y no es una certificación ni una licencia, aunque algunos empleadores y estados la exigen."
          ],
          steps: ["Haz la lista de los pasos del trabajo.", "Pide a la IA los peligros y controles de cada paso, incluido el equipo de protección.", "Revísala con tu supervisor, el manual y osha.gov.", "Corrige lo que falte o esté mal.", "Repásala con el equipo antes de empezar."],
          words: [["Peligro", "algo que podría lastimar a alguien."], ["EPP", "equipo de protección personal, como guantes, lentes de seguridad, cascos y botas con punta de acero."], ["Análisis de seguridad del trabajo", "una lista de los pasos, los peligros y los controles de un trabajo."]],
          slides: [
            { title: "Análisis de seguridad del trabajo", bullets: ["Pasos del trabajo", "Peligros en cada paso", "Controles y EPP"] },
            { title: "La IA hace el borrador, las personas deciden", bullets: ["La IA hace la lista de peligros comunes", "El supervisor, el manual y OSHA confirman"] },
            { title: "Tarjetas Outreach de OSHA", bullets: ["Clases de seguridad de 10 y 30 horas", "Voluntaria; no es certificación ni licencia", "Algunos empleadores y estados la exigen"] }
          ],
          sources: [{ name: "Programa de capacitación Outreach de OSHA", url: "https://www.osha.gov/training/outreach" }, { name: "Preguntas frecuentes del programa Outreach de OSHA", url: "https://www.osha.gov/training/outreach/faq" }],
          tryIt: "Pide a la IA una lista de seguridad para una tarea real (como levantar cajas pesadas o cambiar una llanta). Luego busca una página oficial de seguridad o el manual de esa tarea y agrega lo que la IA haya olvidado.",
          youCanNow: "hacer con la IA un borrador de lista de seguridad del trabajo y compararlo con fuentes oficiales.",
          quickCheck: [
            { objective: "O3", q: "¿Qué tres cosas tiene un análisis de seguridad del trabajo?", options: ["Pasos, peligros y controles", "Herramientas, precios y tiempos", "Trabajadores, turnos y descansos", "Clientes, direcciones y números de teléfono"], answer: 0, why: "Un análisis de seguridad del trabajo enumera cada paso, sus peligros y los controles para ellos." },
            { objective: "O3", q: "Tu lista de seguridad hecha con IA para levantar cajas no menciona guantes, pero la regla del empleador los exige. ¿Qué harías?", options: ["No usar guantes porque la IA no los puso", "Preguntarle otra vez a la IA hasta que esté de acuerdo", "Agregar los guantes a la lista y seguir la regla del empleador", "Usar guantes solo con las cajas pesadas"], answer: 2, why: "Las reglas oficiales y del empleador mandan; agrega lo que la IA omitió." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA en el trabajo",
        questions: [
          { objective: "O1", q: "La IA dice que aprietes un tornillo a 40 ft-lbs, pero el manual dice 25. ¿Qué haces?", options: ["Seguir a la IA", "Elegir el promedio", "Seguir el manual y preguntarle a tu supervisor", "Apretar lo más fuerte que puedas"], answer: 2, why: "Los números oficiales vienen del manual." },
          { objective: "O2", q: "¿Qué es un presupuesto?", options: ["El precio por escrito de un trabajo antes de empezarlo", "Un recibo después de pagar", "Una regla de seguridad", "Un tipo de herramienta"], answer: 0, why: "Los presupuestos fijan lo que se espera antes de empezar el trabajo." },
          { objective: "O2", q: "Encuentras un problema oculto que sube el precio. ¿Qué debes hacer?", options: ["Cobrar más sin decirle", "Abandonar el trabajo", "Esconder el problema", "Conseguir la aprobación del cliente antes de hacer trabajo extra"], answer: 3, why: "Los cambios de precio necesitan la aprobación del cliente." },
          { objective: "O3", q: "EPP significa:", options: ["Empleado público pagado", "Equipo de protección personal", "Extensión para enchufes", "Entrada a propiedad privada"], answer: 1, why: "El EPP es equipo como guantes y lentes de seguridad." },
          { objective: "O3", q: "Según OSHA, la tarjeta de 10 horas de OSHA es:", options: ["Una licencia federal", "Voluntaria y no es una certificación ni una licencia", "Una licencia de conducir", "Obligatoria por OSHA para todo empleo"], answer: 1, why: "OSHA dice que la tarjeta Outreach no es una certificación ni una licencia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Logística, registros y carreras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Llevar un registro de trabajo con fotos y notas",
          minutes: 5,
          goal: "Llevar un registro diario de trabajo con fotos y notas cortas, usando la IA para ordenarlas.",
          text: [
            "Un buen registro de trabajo te protege e impresiona a los empleadores: muestra lo que hiciste, cuándo, y que se hizo bien. Toma fotos de antes y después, y anota los materiales usados, los problemas encontrados y el tiempo dedicado.",
            "Usa el dictado por voz de tu teléfono para decir tus notas al terminar un trabajo y luego pide a la IA: “Convierte estas notas en una entrada corta y profesional del registro de trabajo con fecha, lugar, trabajo hecho, materiales, problemas y siguientes pasos”. Revisa que sea correcta.",
            "Sigue las reglas de tu empleador sobre las fotos: algunos lugares no permiten fotos, y nunca debes fotografiar a los clientes, sus papeles privados ni sus sistemas de seguridad sin permiso. Guarda los registros donde diga tu empleador."
          ],
          steps: ["Toma fotos de antes y después donde se permita.", "Di o escribe notas rápidas al terminar el trabajo.", "Pide a la IA que le dé formato a una entrada del registro.", "Revisa que sea correcta.", "Guárdala donde diga tu empleador."],
          words: [["Registro de trabajo", "un registro diario del trabajo que hiciste."], ["Dictado por voz", "una función del teléfono que convierte lo que dices en palabras escritas."]],
          slides: [
            { title: "Por qué llevar un registro", bullets: ["Demuestra qué hiciste y cuándo", "Te protege e impresiona a los empleadores"] },
            { title: "Registro rápido", bullets: ["Fotos de antes y después", "Di tus notas en voz alta", "La IA le da formato a la entrada"] },
            { title: "Reglas para las fotos", bullets: ["Sigue las reglas del lugar", "Ni clientes, ni papeles privados, ni sistemas de seguridad", "Guárdalas donde diga tu empleador"] }
          ],
          tryIt: "Haz un trabajo pequeño en casa (arreglar, limpiar u ordenar algo). Toma fotos de antes y después, di tus notas en voz alta y pide a la IA que las convierta en una entrada del registro de trabajo.",
          youCanNow: "llevar un registro de trabajo profesional con fotos y notas ordenadas con IA.",
          quickCheck: [
            { objective: "O4", q: "¿Qué muestra una foto de antes en un registro de trabajo?", options: ["Qué tan rápido trabajaste", "Cómo estaba todo antes de empezar el trabajo", "La cara del cliente", "Tus herramientas a la venta"], answer: 1, why: "Las fotos de antes y después muestran lo que cambiaste y que se hizo bien." },
            { objective: "O4", q: "El estado de cuenta bancario de un cliente está sobre el mostrador donde trabajas. ¿Qué harías antes de tomar una foto?", options: ["Tomar la foto; es solo para el registro", "Preguntarle a la IA si está bien", "Acercar la cámara al estado de cuenta para que se vea claro", "Dejarlo fuera de la foto o pedirle al cliente que lo quite"], answer: 3, why: "No fotografíes papeles privados sin permiso." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planificar rutas, cargas e inventario",
          minutes: 5,
          goal: "Usar apps de mapas y la IA para planificar una ruta y una lista sencilla de carga o de inventario.",
          text: [
            "Los repartidores, los técnicos de servicio y los trabajadores de almacén planifican rutas y cargas todos los días. Las apps de mapas gratuitas como Google Maps te dejan agregar varias paradas y muestran el tráfico. Muchas empresas usan su propio programa de rutas; apréndelo cuando empieces.",
            "La IA te puede ayudar a pensarlo: “Tengo 6 visitas de servicio: [zonas y horarios]. Sugiere un orden que ahorre manejo y cumpla los horarios”. Luego compruébalo en la app de mapas. Para las cargas: “Haz una lista de carga para estas entregas de modo que lo de la última parada entre primero”.",
            "Para el inventario, ayuda una hoja sencilla con artículo, ubicación (pasillo, estante), cantidad y punto de pedido. Nunca dejes que la IA pase por encima de los límites de peso, las reglas para asegurar la carga ni las reglas de horas de servicio de los conductores; esas vienen de tu empleador y de las reglas oficiales de transporte."
          ],
          steps: ["Haz la lista de paradas con zonas y horarios.", "Pide a la IA que sugiera un orden.", "Compruébalo en una app de mapas con tráfico.", "Haz una lista de carga: lo de la última parada entra primero.", "Sigue las reglas de peso, de sujeción de la carga y de horas de manejo de tu empleador."],
          words: [["Ruta", "el orden y el camino de las paradas."], ["Sujeción de la carga", "amarrar la carga para que no se mueva ni se caiga."], ["Horas de servicio", "reglas que limitan cuánto tiempo pueden manejar y trabajar los conductores comerciales."]],
          slides: [
            { title: "Planifica la ruta", bullets: ["Haz la lista de paradas y horarios", "La IA sugiere un orden", "Compruébalo en una app de mapas"] },
            { title: "Planifica la carga", bullets: ["Lo de la última parada entra primero", "Inventario: artículo, ubicación, cantidad"] },
            { title: "Las reglas van primero", bullets: ["Límites de peso y sujeción de la carga", "Horas de servicio de los conductores", "Las da tu empleador y las reglas oficiales"] }
          ],
          tryIt: "Elige cinco lugares reales de tu zona. Pide a la IA que sugiera el mejor orden para visitarlos y luego compruébalo en una app de mapas gratuita comparando los tiempos de manejo.",
          youCanNow: "planificar una ruta y una carga con IA y apps de mapas siguiendo las reglas.",
          quickCheck: [
            { objective: "O5", q: "¿Qué significa inventario?", options: ["Una lista de lo que tienes en existencia y cuántos hay", "La ruta más rápida", "Las horas de un conductor", "Una regla de seguridad para cargar"], answer: 0, why: "El inventario es un conteo de los artículos que tienes." },
            { objective: "O5", q: "La IA sugiere el orden de una ruta con cinco paradas. ¿Qué harías después?", options: ["Seguirlo sin mirar", "Comprobarlo en una app de mapas con tráfico antes de manejar", "Pedirles a los clientes que elijan", "Manejar primero a la parada más lejana"], answer: 1, why: "Las ideas de ruta de la IA hay que comprobarlas en una app de mapas con el tráfico del momento." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Encontrar programas de aprendiz y empleos en oficios",
          minutes: 5,
          goal: "Encontrar un programa de aprendiz registrado o un empleo en un oficio y prepararte para postularte.",
          text: [
            "Un programa de aprendiz registrado (Registered Apprenticeship) te deja ganar un sueldo mientras aprendes un oficio, con clases y una credencial reconocida al final. Apprenticeship.gov, del Departamento de Trabajo de EE. UU., tiene un buscador de empleos de aprendiz (Apprenticeship Job Finder). Los sindicatos, los colegios comunitarios y los programas de preparación para aprendices también ofrecen caminos.",
            "Pide a la IA que te explique un oficio: “¿Qué hace en el día a día un aprendiz de climatización, qué herramientas usa y qué matemáticas necesita?”. Luego pídele que te ayude a convertir tu experiencia en un currículum para el oficio, que todo sea cierto.",
            "Algunos oficios y empleos de manejo necesitan licencias, exámenes o un historial de manejo limpio, y algunas licencias toman en cuenta los antecedentes penales; consulta la agencia de licencias de tu estado y pregunta a tu programa de reinserción o de capacitación laboral qué empleadores y programas reciben a personas con antecedentes. Llega puntual, sé responsable y ten ganas de aprender: en los oficios, eso es lo que más importa."
          ],
          steps: ["Busca en el buscador de Apprenticeship.gov y en los programas de sindicatos o colegios de tu zona.", "Pide a la IA que te explique el oficio y las habilidades que necesita.", "Consulta las reglas de licencias y antecedentes con la agencia de tu estado.", "Pide a tu programa de reinserción o de capacitación laboral empleadores que den una oportunidad justa.", "Arma con ayuda de la IA un currículum para el oficio que sea cierto."],
          words: [["Programa de aprendiz registrado", "un empleo pagado con capacitación que lleva a una credencial reconocida."], ["Preparación para aprendices", "un programa corto que te prepara para entrar a un programa de aprendiz."], ["Oficial del oficio", "un trabajador ya formado por completo en un oficio (en inglés, journeyworker)."]],
          slides: [
            { title: "Gana mientras aprendes", bullets: ["Programa de aprendiz registrado: sueldo más capacitación", "Credencial reconocida al final"] },
            { title: "Dónde buscar", bullets: ["Buscador de Apprenticeship.gov", "Sindicatos y colegios comunitarios", "Programas de preparación para aprendices"] },
            { title: "Revisa las reglas", bullets: ["Licencias, exámenes, historial de manejo", "Agencia de licencias del estado", "Empleadores de oportunidad justa a través de tu programa"] }
          ],
          sources: [{ name: "Apprenticeship.gov (Departamento de Trabajo de EE. UU.)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Tarea final: busca en Apprenticeship.gov o en un programa local un programa de aprendiz o un empleo en un oficio al que podrías postularte. Luego termina tu paquete de trabajo: resumen del manual, presupuesto u orden de trabajo, lista de seguridad revisada, entrada del registro de trabajo y plan de ruta o de carga.",
          youCanNow: "usar la IA para trabajar mejor en un oficio o en logística y encontrar un camino para entrar.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es un programa de preparación para aprendices?", options: ["Una licencia para trabajar solo", "Un empleo pagado como supervisor", "Un programa que te prepara para entrar a un programa de aprendiz", "Un examen que haces después de un programa de aprendiz"], answer: 2, why: "Un programa de preparación te da lo básico para que puedas entrar a un programa de aprendiz." },
            { objective: "O6", q: "Quieres saber si una licencia de oficio que necesitas toma en cuenta los antecedentes penales. ¿Qué harías?", options: ["Adivinar por lo que le pasó a un amigo", "Preguntarle a la IA y confiar en su respuesta", "Renunciar a ese oficio", "Consultar con la agencia de licencias de tu estado"], answer: 3, why: "La agencia de licencias del estado tiene las reglas oficiales de esa licencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Logística, registros y carreras",
        questions: [
          { objective: "O4", q: "¿Por qué guardar fotos de antes y después en un registro de trabajo?", options: ["Para tener me gusta en redes", "Las exigen todas las leyes", "Para fotografiar a los clientes", "Muestran lo que hiciste y que se hizo bien"], answer: 3, why: "Las fotos demuestran el trabajo." },
          { objective: "O5", q: "Al cargar un camión para varias paradas, ¿qué artículos entran primero?", options: ["Los de la última parada", "Los de la primera parada", "Siempre los más livianos", "En cualquier orden"], answer: 0, why: "Si lo de la última parada entra primero, lo de la primera queda a la mano." },
          { objective: "O5", q: "¿De dónde vienen los límites de peso y las reglas de horas de manejo?", options: ["De un chatbot de IA", "De tus amigos", "De tu empleador y de las reglas oficiales de transporte", "De una app de mapas"], answer: 2, why: "Las reglas oficiales fijan estos límites." },
          { objective: "O6", q: "¿Qué es un programa de aprendiz registrado?", options: ["Solo una pasantía sin paga", "Un título universitario", "Un examen de licencia", "Un empleo pagado con capacitación que lleva a una credencial reconocida"], answer: 3, why: "Los aprendices ganan mientras aprenden." },
          { objective: "O6", q: "¿Qué sitio tiene el buscador de empleos de aprendiz del Departamento de Trabajo de EE. UU.?", options: ["Una app de redes sociales", "Un blog cualquiera", "Apprenticeship.gov", "Un sitio de compras"], answer: 2, why: "Apprenticeship.gov lo maneja el Departamento de Trabajo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para oficios calificados y logística",
    questions: [
      { objective: "O6", q: "¿Cuál es un oficio calificado?", options: ["Influencer de redes sociales", "Electricista", "Crítico de cine", "Jugador de lotería"], answer: 1, why: "El trabajo eléctrico es un oficio calificado." },
      { objective: "O1", q: "¿Cómo puede ayudar la IA con un manual difícil?", options: ["Explicándolo con palabras sencillas", "Cambiando los números del manual", "Haciendo el trabajo por ti", "Aprobando la seguridad"], answer: 0, why: "La IA es un buen tutor para términos y pasos." },
      { objective: "O1", q: "Una hoja de especificaciones tiene:", options: ["Tu horario de trabajo", "Tu sueldo", "Las medidas y requisitos exactos de un producto", "Reseñas de clientes"], answer: 2, why: "Las especificaciones dan los requisitos exactos." },
      { objective: "O1", q: "¿Qué números deben venir del manual o del código, no de la IA?", options: ["El voltaje, el torque y los límites de peso", "La fecha", "Tu nombre", "El color del camión"], answer: 0, why: "Los números clave para la seguridad necesitan fuentes oficiales." },
      { objective: "O2", q: "La mano de obra en un presupuesto es:", options: ["Las piezas", "El impuesto", "La dirección del cliente", "El costo del tiempo del trabajador"], answer: 3, why: "La mano de obra es el tiempo pagado." },
      { objective: "O2", q: "2 horas a $60 más $100 de piezas son:", options: ["$62", "$120", "$160", "$220"], answer: 3, why: "2 x 60 = 120, más 100 = 220." },
      { objective: "O2", q: "Un buen presupuesto también dice:", options: ["Nada sobre el trabajo", "Qué incluye, qué no y cuándo vence", "Tu número del Seguro Social", "Un precio fijo garantizado pase lo que pase"], answer: 1, why: "Las condiciones claras evitan conflictos." },
      { objective: "O3", q: "Un análisis de seguridad del trabajo tiene:", options: ["Solo el precio", "Los cumpleaños del equipo", "Las reseñas del cliente", "Pasos, peligros y controles"], answer: 3, why: "Planifica la seguridad de cada paso." },
      { objective: "O3", q: "¿Qué es EPP?", options: ["Lentes de seguridad", "Una funda de teléfono", "Una lonchera", "Una app de mapas"], answer: 0, why: "Los lentes de seguridad protegen tus ojos." },
      { objective: "O3", q: "¿Quién confirma una lista de seguridad que hizo la IA?", options: ["Nadie", "La misma IA", "Tu supervisor, el manual y fuentes oficiales como OSHA", "Un video cualquiera"], answer: 2, why: "La IA no es una autoridad en seguridad." },
      { objective: "O3", q: "La clase Outreach de 10 horas de OSHA:", options: ["Es una licencia de contratista", "Reemplaza toda la capacitación del empleo", "La da una IA", "Enseña lo básico de la seguridad; la tarjeta es voluntaria"], answer: 3, why: "OSHA la describe como una capacitación voluntaria." },
      { objective: "O4", q: "El dictado por voz te ayuda a:", options: ["Hacer llamadas más baratas", "Manejar más rápido", "Decir tus notas en lugar de escribirlas", "Solo leer manuales en voz alta"], answer: 2, why: "Convierte lo que dices en texto." },
      { objective: "O4", q: "¿Qué foto NO debes tomar sin permiso?", options: ["La reparación terminada", "Los papeles privados de un cliente", "La pieza rota", "Tu propia caja de herramientas"], answer: 1, why: "Respeta la privacidad del cliente." },
      { objective: "O4", q: "Una entrada del registro de trabajo incluye:", options: ["Fecha, lugar, trabajo hecho, materiales, problemas y siguientes pasos", "Solo tu opinión", "Contraseñas de clientes", "Nada"], answer: 0, why: "Las entradas completas son registros útiles." },
      { objective: "O5", q: "Después de que la IA sugiere el orden de una ruta, debes:", options: ["Seguirlo sin mirar", "Ignorar los horarios", "Comprobarlo en una app de mapas con tráfico", "Manejar más rápido"], answer: 2, why: "Las apps de mapas muestran los tiempos reales y el tráfico." },
      { objective: "O5", q: "La sujeción de la carga significa:", options: ["Amarrar la carga para que no se mueva ni se caiga", "Cerrar la oficina con llave", "Conseguir un préstamo", "Guardar un archivo"], answer: 0, why: "Las cargas bien sujetas evitan accidentes." },
      { objective: "O5", q: "Las reglas de horas de servicio limitan:", options: ["El horario de las tiendas", "Solo los almuerzos del personal de oficina", "El uso de internet", "Cuánto tiempo pueden manejar y trabajar los conductores comerciales"], answer: 3, why: "Evitan el cansancio de los conductores." },
      { objective: "O6", q: "Un programa de preparación para aprendices:", options: ["Es una licencia completa", "Te prepara para entrar a un programa de aprendiz", "Es un programa de préstamos", "Es un tipo de herramienta"], answer: 1, why: "Desarrolla habilidades para entrar a un programa de aprendiz." },
      { objective: "O6", q: "¿Dónde revisas si una licencia de un oficio toma en cuenta los antecedentes penales?", options: ["En lo que adivine la IA", "En la agencia de licencias de tu estado", "En un comentario de un anuncio de empleo", "En ningún lado"], answer: 1, why: "Las agencias estatales fijan las reglas de las licencias." },
      { objective: "O6", q: "En los oficios, ¿qué es lo que más les importa a muchos empleadores al principio?", options: ["Tener herramientas caras", "Tener un título", "Conocer a todo el mundo", "Llegar puntual, ser responsable y tener ganas de aprender"], answer: 3, why: "La responsabilidad y la actitud abren puertas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      7,
      9,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Resumen del manual",
        objective: "O1",
        notYet: "El resumen tiene un número que no coincide con el manual, o no tiene fuente.",
        meets: "Resumen en lenguaje sencillo con cada número comprobado con el manual.",
        exceeds: "Además indica qué paso necesita a un supervisor o a un trabajador con licencia."
      },
      {
        name: "Presupuesto u orden de trabajo",
        objective: "O2",
        notYet: "Falta la mano de obra, las piezas, el total, lo que incluye o la fecha de vencimiento, o las cuentas están mal.",
        meets: "Tiene todas las partes y las cuentas están revisadas a mano.",
        exceeds: "Además dice qué no incluye y cómo se aprobarán los cambios."
      },
      {
        name: "Lista de seguridad",
        objective: "O3",
        notYet: "Copiada de la IA sin comprobarla con una fuente oficial.",
        meets: "Comparada con el manual o con una fuente oficial, y con lo que faltaba agregado.",
        exceeds: "Nombra la fuente y el EPP para cada peligro."
      },
      {
        name: "Registro de trabajo",
        objective: "O4",
        notYet: "Falta la fecha, el trabajo hecho, los materiales, los problemas o los siguientes pasos, o muestra información privada.",
        meets: "Una entrada completa con notas de fotos de antes y después y sin información privada.",
        exceeds: "Otro trabajador podría continuar el trabajo solo con esta entrada."
      },
      {
        name: "Plan de ruta o de carga",
        objective: "O5",
        notYet: "La ruta no se comprobó, o la carga está en el orden equivocado.",
        meets: "Ruta comprobada en una app de mapas y carga colocada en el orden inverso de las paradas.",
        exceeds: "Además anota los conteos de inventario y las reglas del empleador."
      },
      {
        name: "Siguiente empleo encontrado",
        objective: "O6",
        notYet: "No encontró ningún programa de aprendiz ni empleo.",
        meets: "Un programa de aprendiz o empleo en un oficio real, con sus requisitos y cómo postularse.",
        exceeds: "Además anota el primer paso que dará esta semana."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que se postulan a un programa de aprendiz, de preparación para aprendices o a un empleo en un oficio en 30 días (encuesta de seguimiento)",
      "Participantes que empiezan un programa de aprendiz o un empleo en un oficio en 90 días",
      "Participantes que cuentan que usaron la IA en el trabajo para escribir un presupuesto, un registro de trabajo o una lista de seguridad",
      "Participantes que empiezan otro curso de oficios o de carrera de Koach Learn en 30 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con cámara e internet",
      "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini, y una app de mapas gratuita",
      "El manual de una herramienta, un aparato o un vehículo (en papel o en línea)",
      "Papel y lápiz o una app de notas para el paquete de trabajo",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Recalca en cada sesión que los números y las reglas de seguridad vienen del manual, del empleador y de OSHA, no de la IA.",
      "Lleva manuales reales y presupuestos de ejemplo de oficios locales para que se practique con documentos reales.",
      "No permitas trabajos eléctricos, de gas ni otros trabajos con licencia como práctica; usa tareas domésticas seguras.",
      "Pon a los participantes en contacto con programas locales de preparación para aprendices y con empleadores que contratan a personas con antecedentes.",
      "Califica el paquete de trabajo con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

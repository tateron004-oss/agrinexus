"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI Entrepreneurship Pathways". Rules: ../../../README.md (Translations).
// From idea to a launch-ready business plan. The quick first-dollar course is ai-entrepreneurship-side-hustles.

module.exports = {
  id: "ai-entrepreneurship-pathways-es",
  lang: "es",
  translationOf: "ai-entrepreneurship-pathways",
  category: "Re-Entry",
  name: "Caminos para emprender con IA",
  skills: "Elegir un camino de negocio, Armar un plan de negocio simplificado con IA, Probar la idea con clientes, Entender las estructuras de negocio y el registro, Encontrar financiamiento y evitar estafas de subvenciones, Armar una hoja de ruta de lanzamiento de 90 días",
  outcome: "convertir una idea de negocio en un plan listo para lanzar con ayuda de la IA: un plan de negocio simplificado de una página, pruebas de clientes reales, una lista de los registros y licencias que hay que revisar, una lista realista de financiamiento y ayuda gratuita, y una hoja de ruta de lanzamiento de 90 días.",
  about: [
    "Tener un negocio puede generar ingresos, independencia y patrimonio para tu familia y tu comunidad. También puede ser un camino cuando cuesta abrir las puertas del empleo, por ejemplo después de la prisión o en un barrio con pocos empleadores. Requiere planificación, y las herramientas de IA pueden hacer que planificar sea más rápido y menos solitario.",
    "Este curso es para personas que vuelven a casa y para miembros de comunidades desatendidas que quieren ir más allá de un trabajo extra: un negocio de comida, una empresa de limpieza o de jardinería, una barbería, una tienda en línea, una empresa de transporte o un servicio comunitario.",
    "Usarás asistentes de IA gratuitos como ChatGPT, Microsoft Copilot o Google Gemini, y recursos oficiales gratuitos de la Administración de Pequeños Negocios de EE. UU. (SBA) y del IRS (la agencia de impuestos de EE. UU.). Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso no es asesoría legal ni de impuestos; revisa las fuentes oficiales y consulta a asesores de negocios gratuitos."
  ],
  finalTask: "Crea un paquete de lanzamiento para tu idea de negocio: un plan de negocio simplificado de una página con las nueve partes, notas de al menos diez conversaciones con clientes, una lista de los pasos de estructura del negocio, registros, licencias y número de identificación fiscal que vas a revisar (con los sitios web oficiales), una lista de financiamiento y ayuda gratuita con al menos tres opciones reales locales o nacionales, y una hoja de ruta de lanzamiento de 90 días con fechas.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que vuelven a casa después de la prisión y miembros de comunidades desatendidas que quieren empezar un negocio real: un negocio de comida, una empresa de limpieza o de jardinería, una barbería, una tienda en línea, una empresa de transporte o un servicio comunitario.",
    startingPoint: "Tienen una idea de negocio, una habilidad o un trabajo extra, y saben usar un teléfono. La mayoría no ha escrito un plan de negocio, no ha hablado con clientes de forma ordenada, no ha registrado un negocio ni ha buscado financiamiento para empezar.",
    gap: "Muchos negocios nuevos fracasan por una planificación débil, ideas sin probar, registros olvidados o estafas de financiamiento. Necesitan un plan listo para lanzar, hecho con ayuda de la IA y comprobado con fuentes oficiales, para empezar de forma legal, evitar estafas y generar ingresos para su familia.",
    constraints: [
      "Nivel de lectura: palabras sencillas y frases cortas",
      "Dispositivos: un teléfono o una computadora de la biblioteca o del programa",
      "Las reglas, cuotas y licencias cambian según el estado y la ciudad; se confirman en sitios oficiales (SBA, IRS, del estado y locales)",
      "No es asesoría legal ni fiscal; se usan asesores de negocios gratuitos y fuentes oficiales",
      "Las personas en libertad condicional o vigilada revisan sus condiciones antes de elegir un negocio"
    ],
    prerequisites: "Ninguno. Quienes no conocen las herramientas de IA pueden tomar primero \"Introducción a la IA y a la confianza digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con tu dinero, tus horas, tus habilidades y tus límites", action: "comparar dos o tres caminos de negocio y elegir el que encaja", standard: "escribiendo al menos una razón para tu elección" },
    { id: "O2", condition: "Con la IA haciéndote preguntas", action: "escribir un plan de negocio simplificado de una página que cubra las nueve partes", standard: "con cada número supuesto marcado para revisarlo" },
    { id: "O3", condition: "Con una lista de tres preguntas para clientes", action: "entrevistar a posibles clientes y usar lo que digan para cambiar tu plan", standard: "hablando con al menos diez personas y cambiando al menos una parte del plan" },
    { id: "O4", condition: "Para tu negocio", action: "hacer la lista de los pasos de estructura, registro del nombre, licencias, permisos y número de identificación fiscal, con el sitio web oficial de cada uno", standard: "con cada paso enlazado a una fuente oficial" },
    { id: "O5", condition: "Con tus costos de arranque", action: "armar un plan de financiamiento y una lista de ayuda gratuita, y reconocer las estafas de financiamiento", standard: "con al menos tres opciones reales y ninguna oferta que cobre por adelantado" },
    { id: "O6", condition: "Usando tu plan y tu lista de pasos", action: "crear una hoja de ruta de lanzamiento de 90 días con fechas para organizarte, probar y lanzar", standard: "con una fecha para cada paso y un compañero de responsabilidad nombrado" }
  ],
  chapters: [
    {
      name: "Capítulo 1: De la idea al plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Elegir tu camino de negocio",
          minutes: 5,
          goal: "Comparar caminos de negocio y elegir el que encaja con tus metas y tu situación.",
          text: [
            "Hay más de un camino para tener un negocio. Un trabajo extra genera dinero adicional con poca preparación. Un pequeño negocio de servicios (limpieza, jardinería, acarreo) crece con clientes y cuadrillas. Un negocio de productos (comida, artesanías, ropa) necesita materiales y un lugar para vender. Un negocio en línea vende por un sitio web o un mercado en línea. Algunas personas compran una franquicia o se unen con otros en una cooperativa.",
            "Elige el camino según tu vida: cuánto dinero puedes arriesgar, cuántas horas tienes, tus habilidades, el transporte, las reglas de licencias y, para las personas bajo supervisión, tus condiciones de libertad condicional o vigilada.",
            "Pide a la IA que compare: “Tengo $500, 20 horas por semana, sé cocinar y no tengo auto. Compara un negocio de preparación de comidas, ayudar en eventos de comida y vender pan y postres en mercados: costo para empezar, tiempo hasta la primera venta, licencias que revisar y riesgos”. Luego comprueba con fuentes oficiales lo de las licencias y los costos."
          ],
          steps: ["Haz una lista de tu dinero, tus horas, tus habilidades y tus límites.", "Haz una lista de dos o tres ideas de negocio.", "Pide a la IA que compare el costo para empezar, el tiempo hasta la primera venta, las licencias y los riesgos.", "Comprueba las licencias y los costos con fuentes oficiales.", "Elige un camino para planificar."],
          words: [["Emprendedor", "una persona que empieza y lleva un negocio."], ["Franquicia", "un negocio que compras y que usa la marca y el sistema de otra empresa."], ["Cooperativa", "un negocio que es de sus miembros y que ellos mismos llevan."]],
          slides: [
            { title: "Muchos caminos", bullets: ["Trabajo extra o negocio de servicios", "Negocio de productos o en línea", "Franquicia o cooperativa"] },
            { title: "Que encaje con tu vida", bullets: ["Dinero, horas, habilidades, transporte", "Licencias y condiciones de supervisión"] },
            { title: "Compara con IA", bullets: ["Costo para empezar y tiempo hasta la primera venta", "Licencias y riesgos", "Comprueba con fuentes oficiales"] }
          ],
          tryIt: "Escribe tu dinero, tus horas, tus habilidades y tus límites. Pide a la IA que compare dos o tres ideas, luego elige un camino y escribe por qué.",
          youCanNow: "comparar caminos de negocio y elegir uno que encaje con tu vida.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es una franquicia?", options: ["Un negocio que es de sus miembros", "Un negocio que compras y que usa la marca y el sistema de otra empresa", "Un préstamo para pequeños negocios", "Un asesor de negocios gratuito"], answer: 1, why: "Una franquicia usa la marca y el sistema de otra empresa a cambio de un pago." },
            { objective: "O1", q: "Tienes poco dinero y las noches libres. La IA te sugiere abrir un restaurante. ¿Qué harías?", options: ["Abrir el restaurante porque lo dijo la IA", "Renunciar a tener un negocio", "Compararlo con caminos de menor costo que encajen con tu dinero y tus horas", "Pedir prestado todo lo que puedas"], answer: 2, why: "Elige el camino que encaja con tu dinero, tu tiempo y tus habilidades reales." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Armar un plan de negocio simplificado con IA",
          minutes: 6,
          goal: "Escribir un plan de negocio simplificado de una página con las nueve partes.",
          text: [
            "La SBA describe dos tipos de planes de negocio: un plan tradicional largo, que suelen pedir los prestamistas, y un plan simplificado de arranque (lean startup) que cabe en una página. Empieza por el simplificado.",
            "El plan simplificado de la SBA tiene nueve partes: alianzas clave, actividades clave, recursos clave, propuesta de valor (por qué te eligen los clientes), relación con los clientes, segmentos de clientes (quiénes son tus clientes), canales (cómo llegas a ellos), estructura de costos y fuentes de ingresos.",
            "Pide ayuda a la IA: “Ayúdame a llenar un plan de negocio simplificado con estas nueve partes para mi negocio de lavado y detallado de autos a domicilio en [ciudad]. Hazme las preguntas de una en una”. Responde con datos reales. Luego compara lo que calcula la IA de los costos con precios reales que busques."
          ],
          steps: ["Abre una plantilla de una página con nueve casillas.", "Pide a la IA que te entreviste con una pregunta a la vez para cada parte.", "Llena cada casilla con datos reales.", "Compara los costos y precios con cotizaciones reales.", "Mantenlo en una página."],
          words: [["Plan de negocio simplificado", "un plan de una página que cubre las partes clave de un negocio."], ["Propuesta de valor", "por qué los clientes deberían elegirte."], ["Fuente de ingresos", "una forma en que el negocio gana dinero."]],
          slides: [
            { title: "Dos tipos de planes (SBA)", bullets: ["Tradicional: largo, para prestamistas", "Simplificado: una página; empieza aquí"] },
            { title: "Nueve partes", bullets: ["Alianzas, actividades, recursos", "Propuesta de valor, relaciones, segmentos", "Canales, costos, ingresos"] },
            { title: "La IA como entrevistador", bullets: ["Una pregunta a la vez", "Responde con datos reales", "Compara los costos con precios reales"] }
          ],
          sources: [{ name: "SBA: Escribe tu plan de negocio", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Llena un plan simplificado de una página para el negocio que elegiste mientras la IA te entrevista. Marca las partes en las que tienes que buscar números reales.",
          youCanNow: "escribir con ayuda de la IA un plan de negocio simplificado de una página.",
          quickCheck: [
            { objective: "O2", q: "¿Qué significa \"fuentes de ingresos\" en un plan simplificado?", options: ["Cómo gana dinero el negocio", "Quiénes son tus clientes", "Cómo llegas a los clientes", "El nombre de tu negocio"], answer: 0, why: "Las fuentes de ingresos son las formas en que entra el dinero." },
            { objective: "O2", q: "La IA llena el costo mensual del alquiler con una suposición. ¿Qué harías?", options: ["Dejarlo; la IA casi siempre acierta", "Borrar la línea del costo", "Duplicar el número por si acaso", "Marcarlo y buscar el precio real"], answer: 3, why: "Los números supuestos hay que comprobarlos con precios reales." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Probar la idea con clientes reales",
          minutes: 5,
          goal: "Hablar con diez posibles clientes y usar lo que digan para mejorar el plan.",
          text: [
            "Un plan es una suposición hasta que los clientes lo demuestran. Habla con al menos diez personas que encajan en tu segmento de clientes. Pregunta por su problema, no por tu idea: “¿Cómo lavas tu auto ahora? ¿Cuánto pagas? ¿Qué te molesta de eso?”.",
            "Luego prueba si compran: ofrece un pedido anticipado, un precio de inicio o una lista para apuntarse. Que la gente diga “qué buena idea” es lindo; que la gente pague o se apunte es una prueba.",
            "Pega tus notas (sin nombres ni teléfonos) en la IA y pregunta: “Resume lo que dijeron estos diez clientes. ¿Qué patrones ves y qué debería cambiar en mi plan?”. Actualiza el plan simplificado con lo que aprendiste."
          ],
          steps: ["Escribe tres preguntas sobre el problema del cliente.", "Habla con al menos diez posibles clientes.", "Ofrece un pedido anticipado, un precio de inicio o una lista para apuntarse.", "Pide a la IA que encuentre patrones en tus notas, sin nombres.", "Actualiza el plan simplificado."],
          words: [["Segmento de clientes", "un grupo de clientes con necesidades parecidas."], ["Validar", "demostrar con pruebas reales que los clientes quieren algo."], ["Pedido anticipado", "cuando un cliente acepta comprar antes de que el producto o servicio esté listo."]],
          slides: [
            { title: "Pregunta por su problema", bullets: ["¿Cómo lo resuelven ahora?", "¿Cuánto pagan?", "¿Qué les molesta?"] },
            { title: "Prueba si compran", bullets: ["Pedidos anticipados o listas", "Pagar vale más que “qué buena idea”"] },
            { title: "Aprende y ajusta", bullets: ["La IA encuentra patrones en las notas", "Primero quita los nombres", "Actualiza tu plan"] }
          ],
          tryIt: "Habla esta semana con al menos cinco posibles clientes usando tus tres preguntas. Pide a la IA que resuma los patrones y cambia una parte de tu plan simplificado.",
          youCanNow: "probar una idea de negocio con clientes reales y mejorar el plan.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es la mejor pregunta para una entrevista con un cliente?", options: ["\"¿Comprarías mi gran producto?\"", "\"¿Cómo resuelves este problema ahora?\"", "\"¿Te gusta mi logo?\"", "\"¿Me puedes prestar dinero?\""], answer: 1, why: "Preguntar por su problema y por lo que hacen ahora da pruebas honestas." },
            { objective: "O3", q: "Ocho de cada diez personas dicen que nunca pagarían por tu servicio. ¿Qué harías?", options: ["Ignorarlas y lanzar de todos modos", "Pedirle a la IA que diga que se equivocan", "Dejar de hablar con clientes", "Cambiar el plan, por ejemplo el precio, el servicio o el cliente"], answer: 3, why: "Las pruebas de los clientes sirven para cambiar el plan antes de gastar dinero." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: De la idea al plan",
        questions: [
          { objective: "O1", q: "¿Qué es una cooperativa?", options: ["Una oficina del gobierno", "Un préstamo", "Un negocio que es de sus miembros y que ellos mismos llevan", "Un tipo de licencia"], answer: 2, why: "Los miembros son dueños de las cooperativas y las llevan." },
          { objective: "O4", q: "La IA dice que tu negocio de comida no necesita permisos. ¿Qué debes hacer?", options: ["Comprobarlo con fuentes oficiales de la ciudad, el condado o el estado", "Creerle y empezar", "Preguntarle solo a un amigo", "Ignorar los permisos"], answer: 0, why: "Las reglas de licencias se deben revisar con fuentes oficiales." },
          { objective: "O2", q: "¿Cuántas partes tiene el plan simplificado de arranque de la SBA?", options: ["Dos", "Cincuenta", "Una", "Nueve"], answer: 3, why: "La SBA indica nueve partes." },
          { objective: "O2", q: "¿Qué es una propuesta de valor?", options: ["Tu saldo bancario", "Por qué los clientes deberían elegirte", "Tu número de identificación fiscal", "Tu dirección"], answer: 1, why: "Explica lo que te hace único." },
          { objective: "O3", q: "¿Cuál es la prueba más fuerte de que los clientes quieren tu idea?", options: ["Dicen “qué buena idea”", "Hacen un pedido anticipado o se apuntan", "A tu familia le gusta", "A la IA le gusta"], answer: 1, why: "Las acciones pesan más que los cumplidos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Organizar, financiar y lanzar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lo básico de la estructura del negocio, el registro y el número fiscal",
          minutes: 6,
          goal: "Hacer la lista de los pasos de organización que necesita tu negocio y de los lugares oficiales para revisarlos.",
          text: [
            "Estructuras de negocio comunes en EE. UU.: el negocio individual (sole proprietorship; tú y el negocio son lo mismo; es lo más sencillo), la LLC (sociedad de responsabilidad limitada; puede separar las deudas del negocio de las personales, con cuotas y trámites del estado) y las corporaciones. Las organizaciones sin fines de lucro son otro camino. Pide a la IA que te explique las diferencias y luego elige con ayuda de un asesor de negocios gratuito o un profesional.",
            "La organización suele incluir: registrar el nombre del negocio en tu estado o condado, sacar las licencias de negocio de la ciudad o el condado, permisos especiales (comida, cuidado de niños, transporte de carga, cosmetología y otros) y un número de identificación fiscal. El IRS dice que el Número de Identificación del Empleador (EIN) es gratis si lo pides en el IRS; cuidado con los sitios web que cobran por él.",
            "Las reglas y las cuotas cambian según el estado y la ciudad, así que haz una lista y confirma cada punto en los sitios oficiales: la Secretaría de Estado de tu estado, tu ciudad o condado, la agencia de impuestos de tu estado e irs.gov. Algunas licencias toman en cuenta los antecedentes penales; la agencia de licencias explica sus reglas."
          ],
          steps: ["Pide a la IA que te explique el negocio individual frente a la LLC para tu situación.", "Confirma tu elección con un asesor gratuito o un profesional.", "Haz la lista del registro del nombre, las licencias y los permisos que hay que revisar.", "Busca cada uno en los sitios oficiales del estado, el condado y la ciudad.", "Pide gratis un EIN en irs.gov si lo necesitas."],
          words: [["Negocio individual", "un negocio de una sola persona sin una entidad legal separada."], ["LLC", "sociedad de responsabilidad limitada: una estructura de negocio que puede separar las deudas del negocio de las personales."], ["Secretaría de Estado", "la oficina del estado que suele manejar los registros de negocios."]],
          slides: [
            { title: "Estructuras comunes", bullets: ["Negocio individual: lo más sencillo", "LLC: separa las deudas del negocio; cuotas y trámites", "Busca ayuda para elegir"] },
            { title: "Lista para organizarte", bullets: ["Registro del nombre del negocio", "Licencia de la ciudad o el condado; permisos especiales", "Número de identificación fiscal (EIN)"] },
            { title: "Revisa los sitios oficiales", bullets: ["Secretaría de Estado, ciudad, condado", "Agencia de impuestos del estado e irs.gov", "El EIN es gratis en el IRS"] }
          ],
          sources: [{ name: "IRS: Obtener un Número de Identificación del Empleador", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Elige una estructura de negocio", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }],
          tryIt: "Haz una lista para organizar tu negocio: estructura, registro del nombre, licencias, permisos y EIN. Junto a cada uno, escribe el sitio web oficial donde lo vas a confirmar.",
          youCanNow: "hacer la lista de los pasos de organización que necesita un negocio y dónde confirmar cada uno.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un EIN?", options: ["Una licencia de negocio de la ciudad", "Un tipo de préstamo para negocios", "Un número de identificación fiscal para negocios que da el IRS", "Una cuenta bancaria del negocio"], answer: 2, why: "El EIN es el número de identificación fiscal que el IRS da a un negocio." },
            { objective: "O4", q: "Un amigo te dice que no necesitas permiso para un negocio de comida en casa. ¿Qué harías?", options: ["Consultar con la oficina de salud de tu ciudad, condado o estado", "Confiar en tu amigo", "Preguntarle a la IA y confiar en su respuesta", "Empezar a vender y esperar a ver qué pasa"], answer: 0, why: "Las reglas de permisos cambian según el lugar, así que confírmalas con la oficina oficial." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Financiar tu arranque y encontrar ayuda gratuita",
          minutes: 6,
          goal: "Armar un plan de financiamiento realista y una lista de ayuda gratuita, y evitar las estafas de financiamiento.",
          text: [
            "La mayoría de los pequeños negocios empiezan con ahorros personales, las primeras ventas y la ayuda de la familia o la comunidad. Empieza lo más pequeño que puedas y crece con las ventas. Pide a la IA que te ayude a hacer la lista de costos de arranque y a encontrar formas de reducirlos, como alquilar equipo o usar una cocina compartida.",
            "Si necesitas un préstamo, busca prestamistas con misión social. El programa de micropréstamos de la SBA da préstamos de hasta $50,000 a través de prestamistas comunitarios sin fines de lucro; la SBA dice que el promedio es de unos $13,000 y que el plazo más largo es de siete años. Las instituciones financieras de desarrollo comunitario (CDFI) y los fondos de préstamo locales también atienden a personas que los bancos suelen rechazar. Hay subvenciones, pero suelen ser competidas y muy específicas.",
            "Ayuda gratuita: la SBA indica los Centros de Desarrollo de Pequeños Negocios (SBDC), los mentores de SCORE, los Centros de Negocios para Mujeres y los Centros de Apoyo a Negocios de Veteranos (VBOC) para asesoría gratuita o de bajo costo. Cuidado con cualquiera que prometa subvenciones o préstamos garantizados a cambio de una cuota por adelantado: es una estafa común."
          ],
          steps: ["Haz la lista de costos de arranque y recorta donde puedas.", "Planifica empezar en pequeño y crecer con las ventas.", "Busca prestamistas de micropréstamos de la SBA y CDFI cerca de ti.", "Encuentra el SBDC, SCORE u otro socio de la SBA más cercano.", "Nunca pagues cuotas por adelantado por subvenciones o préstamos “garantizados”."],
          words: [["Micropréstamo", "un préstamo pequeño para negocios, a menudo de un prestamista comunitario."], ["CDFI", "institución financiera de desarrollo comunitario: un prestamista enfocado en comunidades desatendidas."], ["Subvención", "dinero que no se devuelve, que suele darse para un fin concreto."]],
          slides: [
            { title: "Empieza en pequeño", bullets: ["Ahorros y primeras ventas", "Reduce costos: alquila, comparte, pide prestado el equipo"] },
            { title: "Prestamistas con misión social", bullets: ["Micropréstamos de la SBA: hasta $50,000, promedio de unos $13,000", "A través de prestamistas comunitarios sin fines de lucro", "CDFI y fondos de préstamo locales"] },
            { title: "Ayuda gratuita y estafas", bullets: ["SBDC, SCORE, Centros de Negocios para Mujeres, VBOC", "Nada de cuotas por adelantado por subvenciones “garantizadas”"] }
          ],
          sources: [{ name: "SBA: Micropréstamos", url: "https://www.sba.gov/funding-programs/loans/microloans" }, { name: "SBA: Ayuda local", url: "https://www.sba.gov/local-assistance" }],
          tryIt: "Haz la lista de tus costos de arranque y recorta al menos uno. Luego busca dos opciones reales de financiamiento y un centro de asesoría gratuita cerca de ti (o en línea) y escribe cómo contactarlos.",
          youCanNow: "hacer un plan de financiamiento realista, encontrar ayuda gratuita y detectar estafas de financiamiento.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es una CDFI?", options: ["Un formulario de impuestos del gobierno", "Un prestamista enfocado en comunidades desatendidas", "Un tipo de franquicia", "Una licencia de negocio"], answer: 1, why: "Las CDFI son prestamistas que se enfocan en comunidades desatendidas." },
            { objective: "O5", q: "Un anuncio en internet promete una subvención garantizada si primero pagas una cuota. ¿Qué harías?", options: ["Pagar rápido la cuota antes de que se acabe", "Enviar los datos de tu banco para comprobarlo", "Tratarlo como una probable estafa y no pagar", "Pedir una cuota más pequeña"], answer: 2, why: "Las subvenciones reales no piden una cuota por adelantado para garantizar el dinero." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Armar tu hoja de ruta de lanzamiento de 90 días",
          minutes: 5,
          goal: "Convertir tu plan en una hoja de ruta de lanzamiento de 90 días con fechas.",
          text: [
            "Una hoja de ruta convierte el plan en acción. Divide los 90 días en tres partes. Días 1-30: organizarte (estructura, registros, licencias, cuenta bancaria, herramientas básicas). Días 31-60: prepararte y prevender (materiales, precios, marketing, primeros clientes en fila). Días 61-90: lanzar y aprender (primeras ventas, comentarios de los clientes, control del dinero, ajustes).",
            "Pide a la IA: “Convierte mi plan simplificado y mi lista para organizarme en una tabla de hoja de ruta de lanzamiento de 90 días con semana, tarea y fecha límite. Tengo 20 horas por semana”. Luego hazla real: mueve las fechas para que encajen con tu vida y deja tiempo de sobra para las oficinas del gobierno que son lentas.",
            "Elige una hora fija cada semana para revisar la hoja de ruta, y compártela con alguien que te pida cuentas, como un mentor, un asesor o un amigo. Celebra la primera venta."
          ],
          steps: ["Días 1-30: tareas para organizarte.", "Días 31-60: prepararte y prevender.", "Días 61-90: lanzar, llevar el control del dinero y aprender.", "Pide a la IA el borrador de la tabla y luego ajusta las fechas.", "Fija una revisión semanal y una persona que te pida cuentas."],
          words: [["Hoja de ruta", "un plan que muestra los pasos en orden con fechas."], ["Compañero de responsabilidad", "alguien que revisa tu avance y te anima."]],
          slides: [
            { title: "Tres partes de 30 días", bullets: ["1-30: organizarte", "31-60: prepararte y prevender", "61-90: lanzar y aprender"] },
            { title: "La IA redacta, tú ajustas", bullets: ["Semana, tarea, fecha límite", "Que encaje con tus horas reales", "Deja tiempo de sobra para las oficinas lentas"] },
            { title: "No pierdas el rumbo", bullets: ["Revisión semanal", "Un compañero de responsabilidad", "Celebra la primera venta"] }
          ],
          tryIt: "Tarea final: arma con la IA tu hoja de ruta de lanzamiento de 90 días y ajústala. Súmala a tu plan simplificado, tus notas de clientes, tu lista para organizarte y tu lista de financiamiento y ayuda para completar tu paquete de lanzamiento.",
          youCanNow: "convertir una idea de negocio en un plan listo para lanzar y una hoja de ruta de 90 días.",
          quickCheck: [
            { objective: "O6", q: "¿En qué se enfocan los días 31 a 60 de una hoja de ruta de 90 días?", options: ["En retirarte del negocio", "En vender el negocio", "Solo en el papeleo", "En probar con los primeros clientes y mejorar"], answer: 3, why: "El mes del medio es para probar y mejorar antes del lanzamiento completo." },
            { objective: "O6", q: "Sigues sin cumplir las fechas de tu hoja de ruta. ¿Qué harías?", options: ["Pedirle a un compañero de responsabilidad que revise tu avance cada semana", "Borrar la hoja de ruta", "Quitar todas las fechas", "Empezar otro negocio"], answer: 0, why: "Un compañero de responsabilidad te ayuda a seguir adelante y a ajustar el plan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Organizar, financiar y lanzar",
        questions: [
          { objective: "O4", q: "Un sitio web cobra $250 por conseguirte un EIN. Según el IRS:", options: ["Es la cuota oficial", "Los EIN cuestan $1,000", "Solo los abogados pueden sacarlos", "Los EIN son gratis en el IRS; cuidado con los sitios que cobran"], answer: 3, why: "El IRS dice que el EIN es gratis." },
          { objective: "O5", q: "Según la SBA, ¿cuál es el máximo de un micropréstamo de la SBA?", options: ["$50,000", "$5 millones", "$500", "No hay máximo"], answer: 0, why: "La SBA dice que los micropréstamos llegan hasta $50,000." },
          { objective: "O5", q: "Alguien te llama y te promete una subvención garantizada para tu negocio si primero pagas una cuota de $300. Esto es:", options: ["Un proceso normal de subvención", "Un requisito de la SBA", "Una estafa común", "Un impuesto"], answer: 2, why: "Las subvenciones reales no piden cuotas por adelantado a cambio de una garantía." },
          { objective: "O5", q: "Según la SBA, ¿quién ofrece asesoría de negocios gratuita o de bajo costo?", options: ["Los prestamistas de día de pago", "Los anuncios de redes sociales", "Las casas de empeño", "Los Centros de Desarrollo de Pequeños Negocios y SCORE"], answer: 3, why: "Son socios de recursos de la SBA." },
          { objective: "O6", q: "En la hoja de ruta de 90 días, ¿qué pasa en los días 1-30?", options: ["Solo la fiesta de lanzamiento", "Nada", "Organizarte: registros, licencias, cuenta bancaria, herramientas", "Vender el negocio"], answer: 2, why: "Organizarte va primero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Caminos para emprender con IA",
    questions: [
      { objective: "O1", q: "Un emprendedor es:", options: ["Un trabajador del gobierno", "Una persona que empieza y lleva un negocio", "Un banco", "Un tipo de préstamo"], answer: 1, why: "Los emprendedores empiezan negocios." },
      { objective: "O1", q: "Una franquicia es:", options: ["Un negocio que compras y que usa la marca y el sistema de otra empresa", "Una subvención gratuita", "Un formulario de impuestos", "Una cooperativa"], answer: 0, why: "Las franquicias usan una marca que ya existe." },
      { objective: "O1", q: "Al elegir un camino, las personas bajo supervisión también deben revisar:", options: ["Su color favorito", "Nada más", "Sus condiciones de libertad condicional o vigilada", "Solo los precios de un competidor"], answer: 2, why: "Las condiciones pueden limitar algunas actividades de negocio." },
      { objective: "O2", q: "¿Qué tipo de plan describe la SBA como de una página?", options: ["El plan simplificado de arranque", "El plan tradicional", "La declaración de impuestos", "La solicitud de préstamo"], answer: 0, why: "El plan simplificado es un cuadro de una página." },
      { objective: "O2", q: "En un plan simplificado, “segmentos de clientes” significa:", options: ["Tus costos", "Tus socios", "Tu banco", "Quiénes son tus clientes"], answer: 3, why: "Los segmentos son grupos de clientes." },
      { objective: "O2", q: "En un plan simplificado, “canales” significa:", options: ["Solo canales de televisión", "Cómo llegas a los clientes", "Tus proveedores", "Tus impuestos"], answer: 1, why: "Los canales son cómo llegas a los clientes y les vendes." },
      { objective: "O2", q: "La IA calcula que tu equipo costará $200. Debes:", options: ["Usar ese cálculo", "Revisar precios reales antes de creerle", "Duplicarlo sin revisar", "Saltarte el costo"], answer: 1, why: "Las cotizaciones reales valen más que los cálculos de la IA." },
      { objective: "O3", q: "Al entrevistar a clientes, pregunta por:", options: ["Si les encanta tu idea", "Sus contraseñas", "Su impuesto sobre la renta", "Su problema y cómo lo resuelven ahora"], answer: 3, why: "Las preguntas sobre el problema dan respuestas honestas." },
      { objective: "O3", q: "Antes de pegar las notas de los clientes en la IA, quita:", options: ["Los nombres y los teléfonos", "Los patrones", "Tus preguntas", "Nada"], answer: 0, why: "Protege la privacidad de los clientes." },
      { objective: "O3", q: "Validar una idea significa:", options: ["Sellar una multa de estacionamiento", "Registrarse en el estado", "Demostrar con pruebas reales que los clientes la quieren", "Pagar impuestos"], answer: 2, why: "Validar es tener pruebas de los clientes." },
      { objective: "O4", q: "Un negocio individual (sole proprietorship) es:", options: ["Una corporación grande", "Una organización sin fines de lucro", "Una agencia del gobierno", "Un negocio de una sola persona sin una entidad legal separada"], answer: 3, why: "Es la estructura más sencilla." },
      { objective: "O4", q: "Una LLC puede ayudar a:", options: ["No pagar ningún impuesto", "Saltarse las licencias", "Separar las deudas del negocio de las personales", "Garantizar ganancias"], answer: 2, why: "La responsabilidad limitada es su característica principal." },
      { objective: "O4", q: "¿Dónde se suele registrar el nombre de un negocio?", options: ["En una página de redes sociales", "En tu estado, a menudo en la Secretaría de Estado, o en tu condado", "Solo en un banco", "En ningún lado"], answer: 1, why: "El registro lo manejan oficinas estatales o locales." },
      { objective: "O4", q: "Las reglas y las cuotas para organizar un negocio:", options: ["Cambian según el estado y la ciudad, así que confírmalas en sitios oficiales", "Son iguales en todas partes", "Nunca cambian", "Las fija la IA"], answer: 0, why: "Las reglas locales varían." },
      { objective: "O5", q: "La SBA dice que los micropréstamos se dan a través de:", options: ["Prestamistas de día de pago", "Las redes sociales", "Prestamistas intermediarios comunitarios sin fines de lucro", "El IRS"], answer: 2, why: "La SBA financia a intermediarios que dan los préstamos." },
      { objective: "O5", q: "Una CDFI es:", options: ["Un prestamista enfocado en comunidades desatendidas", "Un formulario de impuestos", "Una licencia de negocio", "Una tarjeta de crédito"], answer: 0, why: "Las CDFI atienden a personas que los bancos suelen pasar por alto." },
      { objective: "O5", q: "La mayoría de los pequeños negocios empiezan con:", options: ["Grandes subvenciones garantizadas", "Capital de riesgo", "Premios de lotería", "Ahorros, primeras ventas y ayuda de la comunidad"], answer: 3, why: "Lo más común es empezar en pequeño con ventas." },
      { objective: "O5", q: "SCORE ofrece:", options: ["Préstamos de día de pago", "Mentoría para dueños de pequeños negocios", "Licencias de negocio", "Números de identificación fiscal"], answer: 1, why: "SCORE es un socio de mentoría de la SBA." },
      { objective: "O6", q: "Los días 61-90 de la hoja de ruta se enfocan en:", options: ["Elegir un camino", "Lanzar, primeras ventas, comentarios y control del dinero", "Los trámites para organizarte", "Cerrar el negocio"], answer: 1, why: "La última parte es lanzar y aprender." },
      { objective: "O6", q: "Un compañero de responsabilidad:", options: ["Hace tu trabajo por ti", "Te presta dinero", "Presenta tus impuestos", "Revisa tu avance y te anima"], answer: 3, why: "Rendir cuentas te ayuda a cumplir." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      2,
      4,
      6,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Plan de negocio simplificado",
        objective: "O2",
        notYet: "Faltan partes, o los números supuestos se toman como datos.",
        meets: "Una página que cubre las nueve partes, con los números supuestos marcados o comprobados.",
        exceeds: "Tiene precios reales y el plan refleja lo que dijeron los clientes."
      },
      {
        name: "Pruebas de los clientes",
        objective: "O3",
        notYet: "Menos de diez conversaciones, o ningún cambio en el plan.",
        meets: "Notas de al menos diez conversaciones y al menos un cambio en el plan.",
        exceeds: "Tiene pruebas más fuertes, como pedidos anticipados o personas apuntadas."
      },
      {
        name: "Lista de pasos para organizarse",
        objective: "O4",
        notYet: "Faltan pasos o no tienen fuente oficial.",
        meets: "Estructura, registros, licencias, permisos y EIN en la lista, cada uno con un sitio web oficial.",
        exceeds: "Anota qué pasos cuestan dinero y a qué oficina llamar con preguntas."
      },
      {
        name: "Financiamiento y ayuda gratuita",
        objective: "O5",
        notYet: "Menos de tres opciones reales, o incluye una oferta que cobra por adelantado.",
        meets: "Al menos tres opciones reales de financiamiento o de ayuda gratuita, con cómo contactarlas.",
        exceeds: "Los costos de arranque se recortaron y hay una cita reservada con un asesor."
      },
      {
        name: "Hoja de ruta de 90 días",
        objective: "O6",
        notYet: "No tiene fechas, o los pasos están en desorden.",
        meets: "Pasos para organizarse, probar y lanzar, con una fecha para cada uno.",
        exceeds: "Nombra a un compañero de responsabilidad y revisiones semanales."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que registran un negocio o sacan un EIN en 90 días (encuesta de seguimiento)",
      "Participantes que hacen su primera venta en 90 días",
      "Participantes que se reúnen con SCORE, un Centro de Desarrollo de Pequeños Negocios u otro asesor gratuito en 30 días",
      "Participantes que cuentan que evitaron una estafa de financiamiento o de subvenciones"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet",
      "Un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini",
      "Sitios oficiales: sba.gov, irs.gov y las páginas de negocios de tu estado y tu ciudad",
      "Papel, un cuaderno o un documento gratuito para el paquete de lanzamiento",
      "Unos 60 minutos para las lecciones y las comprobaciones, más una semana para hablar con clientes"
    ],
    facilitatorNotes: [
      "Da una semana entre el capítulo 1 y el capítulo 2 para que hagan sus conversaciones con clientes.",
      "Recuerda que esto no es asesoría legal ni fiscal; ponlos en contacto con SCORE, un Centro de Desarrollo de Pequeños Negocios o un centro de negocios local.",
      "Advierte sobre las estafas de financiamiento: las subvenciones y los EIN reales nunca exigen pagarle una cuota por adelantado a un tercero.",
      "Recuerda a quienes están en libertad condicional o vigilada que revisen sus condiciones antes de elegir un negocio.",
      "Califica el paquete de lanzamiento con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

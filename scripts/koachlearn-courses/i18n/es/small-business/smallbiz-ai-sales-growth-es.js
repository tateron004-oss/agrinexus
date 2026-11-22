"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations".

const CAN_SPAM = { name: "FTC: Ley CAN-SPAM, guía de cumplimiento para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-es",
  lang: "es",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "IA para ventas y crecimiento del negocio",
  skills: "Describir a tu cliente ideal, Escribir una oferta clara, Llevar una lista sencilla de clientes, Escribir mensajes de seguimiento, Leer los números de ventas, Planear un impulso de crecimiento de 30 días",
  outcome: "usar la IA para planear y llevar a cabo un impulso de ventas de 30 días para tu negocio: describir a tu cliente ideal, escribir una oferta clara, armar una lista sencilla de clientes, escribir una serie de mensajes de seguimiento que cumpla las reglas del correo electrónico y registrar los resultados en una hoja de cálculo.",
  about: [
    "Este curso es para dueños de pequeños negocios que quieren vender más a los clientes que ya tienen y a los que están cerca: tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, servicios de banquetes y food trucks. Muchos de nuestros estudiantes son dueños de negocios de comunidades minoritarias que crecen sin un gran presupuesto de marketing.",
    "Vas a usar un asistente de IA gratis para pensar quién te compra, darle forma a una oferta que tenga sentido, dar seguimiento a los clientes que aceptaron recibir noticias tuyas y leer tus propios números para ver qué funciona. La IA te ayuda a escribir y a pensar; tu criterio y tu relación con los clientes son los que venden.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las tareas se van sumando en un plan de ventas de 30 días."
  ],
  finalTask: "Escribe un plan de ventas de 30 días de una página: tu cliente ideal en tres oraciones, una oferta con un precio claro y una fecha de fin, dónde vive tu lista de clientes y cómo se unió la gente a ella, una serie de seguimiento de tres mensajes (con tu dirección y una línea para darse de baja en cualquier correo de marketing) y una tabla de seguimiento con los números que revisarás cada semana.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Dueños de pequeños negocios que quieren vender más a sus clientes actuales y a los de su zona: tiendas, restaurantes, salones de belleza, servicios de limpieza y reparación, servicios de banquetes y camiones de comida. Muchos son dueños de grupos minoritarios que crecen sin un gran presupuesto de marketing.",
    startingPoint: "Conocen bien a sus clientes de siempre y sus productos. Usan poco las ofertas por escrito, las listas de clientes con permiso, los seguimientos por correo o mensaje de texto, el registro de ventas o la IA para planear.",
    gap: "Sin un plan, los esfuerzos de venta son al azar, los descuentos pueden acabar con la ganancia y los mensajes de marketing pueden romper las reglas de correo y de mensajes de texto. Los dueños necesitan un plan sencillo de 30 días, hecho con ayuda de la IA, que apunte a los clientes correctos, haga una oferta con ganancia, dé seguimiento de forma legal y registre lo que funciona.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas",
      "Dispositivos: un teléfono inteligente o una computadora; las hojas de cálculo son más fáciles en computadora",
      "Tiempo: lecciones de unos 5 minutos que caben en un día de trabajo ocupado",
      "Reglas: la ley CAN-SPAM para los correos de marketing y otras reglas federales aparte para los mensajes de texto de marketing",
      "Privacidad: las listas de clientes se protegen y se quedan fuera de las herramientas de IA"
    ],
    prerequisites: "\"Introducción a la IA para pequeños negocios\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con lo que ves en tus mejores clientes", action: "escribir con ayuda de la IA una descripción corta y específica de tu cliente ideal", standard: "en tres oraciones que digan quién es, qué necesita y por qué te elige" },
    { id: "O2", condition: "Con ideas de ofertas de la IA", action: "crear una oferta clara y honesta", standard: "con qué es, precio, razón para actuar y fecha de fin, y la ganancia calculada en papel" },
    { id: "O3", condition: "Usando una hoja de cálculo", action: "armar una lista de clientes que registre el permiso para contactarlos", standard: "con una columna para el permiso y la fecha, una forma de inscribirse y ningún dato real de clientes en la IA" },
    { id: "O4", condition: "Con la ley CAN-SPAM y las reglas de mensajes de texto", action: "escribir con ayuda de la IA una serie de seguimiento de tres mensajes", standard: "con dirección postal y una línea para darse de baja en todo correo de marketing, y mensajes de texto solo con permiso claro" },
    { id: "O5", condition: "Con cuatro semanas de números de ventas", action: "registrar tus números de ventas en una tabla y revisar los patrones que encuentre la IA", standard: "con fórmulas para los totales, sin nombres de clientes y con al menos un patrón confirmado en la hoja" },
    { id: "O6", condition: "Con tu cliente, tu oferta, tu lista, tus seguimientos y tu registro", action: "escribir un plan de ventas de 30 días en una página", standard: "ajustado a tus horas reales, con números semanales para revisar y una revisión el día 30" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Quién compra y qué ofreces",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describir a tu cliente ideal",
          minutes: 5,
          goal: "Escribir una descripción corta y específica del cliente del que más quieres tener.",
          text: [
            "No puedes venderle bien a todo el mundo. Piensa en tus mejores clientes: los que regresan, gastan bien y te mandan a sus amigos. ¿Qué tienen en común?",
            "Escribe tres oraciones: quiénes son, qué necesitan y qué los hace elegirte. Ejemplo para un restaurante de África occidental: \"Oficinistas a menos de dos millas que quieren una comida que llene por menos de $15. Están ocupados y piden desde el teléfono. Nos eligen por las porciones grandes y lo rápido que se recoge.\"",
            "La IA te puede ayudar a pensar: \"Esto es lo que sé de mis mejores clientes. ¿Qué preguntas debería hacerme para describirlos mejor?\" Usa lo que ves en tu negocio, no suposiciones sobre grupos de personas."
          ],
          steps: ["Piensa en tus cinco mejores clientes.", "Escribe lo que tienen en común.", "Escribe tres oraciones: quiénes, qué necesitan, por qué tú.", "Pídele a la IA preguntas para afinarla."],
          words: [["Cliente ideal", "el tipo de cliente que mejor encaja con tu negocio."], ["Cliente que regresa", "alguien que te compra más de una vez."]],
          slides: [
            { title: "No a todo el mundo", bullets: ["Piensa en tus mejores clientes", "¿Quién regresa, gasta bien, manda amigos?"] },
            { title: "Tres oraciones", bullets: ["Quiénes son", "Qué necesitan", "Por qué te eligen"] },
            { title: "Ejemplo: restaurante de comidas", bullets: ["Oficinistas a menos de dos millas", "Quieren comer bien por menos de $15", "Nos eligen por porciones grandes y rapidez"] }
          ],
          tryIt: "Escribe a tu cliente ideal en tres oraciones. Pídele a un asistente de IA cinco preguntas para afinarla, respóndelas y vuelve a escribir tus tres oraciones.",
          youCanNow: "describir en tres oraciones claras al cliente del que más quieres tener.",
          quickCheck: [
            { objective: "O1", q: "¿De dónde debe salir la descripción de tu cliente ideal?", options: ["De lo que ves en tus mejores clientes reales", "De una suposición sobre todos en tu ciudad", "De lo primero que diga la IA", "Del sitio web de tu competencia"], answer: 0, why: "Tus mejores clientes reales te muestran a quién buscar." },
            { objective: "O1", q: "Tu descripción dice \"todos a los que les gusta la comida\". ¿Qué harías?", options: ["Dejarla porque incluye a más gente", "Pedirle a la IA preguntas para afinarla y hacerla específica", "Quitar la descripción", "Copiar la descripción de una cadena grande"], answer: 1, why: "Una descripción específica te ayuda a llegar a la gente correcta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escribir una oferta que tenga sentido",
          minutes: 5,
          goal: "Crear una oferta clara y honesta con un precio, una razón para actuar y una fecha de fin.",
          text: [
            "Una oferta es lo que vendes, a qué precio y por qué alguien debería comprar ahora. Las buenas ofertas son sencillas: \"Combo de comida: arroz, guiso y bebida, $13, entre semana de 11 a 2 hasta el 30 de junio.\"",
            "Pídele ideas a la IA y luego elige tú: \"Tengo un servicio de detallado de autos a domicilio. Mi cliente ideal son padres ocupados. Dame cinco ideas de ofertas para la primavera que mantengan mi ganancia.\" Revisa tú los cálculos: un descuento que pierde dinero en cada venta no es crecimiento.",
            "Que sea honesta. Di el precio real, la fecha de fin real y cualquier límite. No digas que es una oferta si es tu precio de siempre."
          ],
          steps: ["Pídele a la IA cinco ideas de ofertas para tu cliente ideal.", "Elige una y calcula tu costo y tu ganancia.", "Escríbela con qué es, precio, razón para actuar y fecha de fin.", "Revisa que sea honesta y clara."],
          words: [["Oferta", "lo que vendes, el precio y la razón para comprar ahora."], ["Ganancia", "el dinero que queda después de pagar tus costos."], ["Margen", "la parte del precio que es ganancia."]],
          slides: [
            { title: "Una oferta clara tiene", bullets: ["Lo que vendes", "El precio", "Una razón para actuar y una fecha de fin"] },
            { title: "La IA da ideas, tú eliges", bullets: ["Pide cinco ideas para tu cliente ideal", "Revisa los cálculos: conserva la ganancia"] },
            { title: "Que sea honesta", bullets: ["Precio real, fecha de fin real, límites reales", "Una \"oferta\" debe ser más baja que tu precio normal"] }
          ],
          tryIt: "Pídele a la IA cinco ideas de ofertas para tu cliente ideal. Elige una, calcula en papel tu costo y tu ganancia, y escribe la oferta en una oración con una fecha de fin.",
          youCanNow: "escribir una oferta clara y honesta que todavía deje ganancia.",
          quickCheck: [
            { objective: "O2", q: "¿Qué incluye una oferta clara?", options: ["Solo un descuento grande", "Una lista larga de productos", "Qué es, precio, razón para actuar y fecha de fin", "Una promesa de que nunca termina"], answer: 2, why: "Estas partes hacen que una oferta sea fácil de entender y de aprovechar." },
            { objective: "O2", q: "La IA te sugiere todo a mitad de precio durante un mes. ¿Qué harías primero?", options: ["Publicarla hoy", "Hacerla del 70% de descuento", "Preguntarles a los clientes si les gusta", "Calcular en papel si todavía tienes ganancia"], answer: 3, why: "Una oferta debe dejar dinero después de los costos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Empezar una lista sencilla de clientes",
          minutes: 5,
          goal: "Armar una lista sencilla de clientes en una hoja de cálculo, con permiso para contactarlos.",
          text: [
            "Tu lista de clientes es tu herramienta de ventas más valiosa. Puede ser una hoja de cálculo con columnas como Nombre, Cómo contactar (correo o teléfono), Aceptó recibir mensajes (sí/no y fecha), Última visita, Qué compró y Notas.",
            "Agrega solo a personas que te dieron sus datos y aceptaron recibir noticias tuyas: una hoja de registro en el mostrador, un código QR a un formulario o una casilla en tu herramienta de reservas. Anota cuándo y cómo aceptaron.",
            "Mantén la lista privada y segura: una contraseña en el archivo o la cuenta, compartida solo con el personal que la necesita. No pegues la lista en herramientas de IA. Si quieres ayuda de la IA, describe las columnas o usa filas de ejemplo inventadas."
          ],
          steps: ["Haz una hoja de cálculo con las columnas de arriba.", "Agrega una forma de registro: hoja en el mostrador, formulario con QR o casilla en tus reservas.", "Anota cuándo y cómo aceptó cada persona.", "Protege el archivo y mantenlo fuera de las herramientas de IA."],
          words: [["Lista de clientes", "un registro de los clientes que aceptaron recibir noticias tuyas."], ["Aceptar recibir mensajes", "cuando una persona acepta recibir tus mensajes (en inglés, opt in)."], ["CRM", "gestión de la relación con los clientes: un programa o una hoja para dar seguimiento a los clientes."]],
          slides: [
            { title: "Tu herramienta de ventas más valiosa", bullets: ["Basta con una hoja de cálculo sencilla", "Nombre, contacto, aceptó (fecha), última visita, notas"] },
            { title: "Primero el permiso", bullets: ["Registro en el mostrador, formulario con QR o casilla", "Anota cuándo y cómo aceptaron"] },
            { title: "Mantenla segura", bullets: ["Contraseña en el archivo o la cuenta", "Compártela solo con quien la necesita", "Nunca pegues la lista en herramientas de IA"] }
          ],
          tryIt: "Haz tu hoja de lista de clientes con las seis columnas. Agrega tres filas de ejemplo inventadas y luego escribe cómo se van a registrar los clientes reales (hoja en el mostrador, formulario con QR o casilla en tus reservas).",
          youCanNow: "armar una lista privada de clientes con un registro del permiso para contactarlos.",
          quickCheck: [
            { objective: "O3", q: "¿Quién va en tu lista de clientes?", options: ["Las personas que aceptaron recibir mensajes tuyos", "Cualquiera cuyo número puedas encontrar", "Los clientes de tu competencia", "Todos los que aparecen en un directorio telefónico"], answer: 0, why: "Solo van en la lista las personas que dijeron que sí a recibir mensajes tuyos." },
            { objective: "O3", q: "Quieres que la IA te ayude a diseñar la hoja de tu lista de clientes. ¿Qué compartirías?", options: ["Tu lista completa de clientes reales", "Los números de teléfono de los clientes", "Los nombres de las columnas o filas de ejemplo inventadas", "La contraseña de la hoja"], answer: 2, why: "Los nombres de las columnas o las filas de ejemplo te dan ayuda sin compartir datos reales de clientes." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Quién compra y qué ofreces",
        questions: [
          { objective: "O1", q: "¿Qué es un cliente ideal?", options: ["Cualquiera con dinero", "El tipo de cliente que mejor encaja con tu negocio", "Solo la gente que se queja", "Los clientes de tu competidor"], answer: 1, why: "Describe a quién quieres tener más." },
          { objective: "O2", q: "¿Cuál es una oferta clara?", options: ["\"¡Grandes ofertas!\"", "\"Cosas baratas\"", "\"Ven algún día\"", "\"Combo de comida: arroz, guiso y bebida, $13, entre semana de 11 a 2 hasta el 30 de junio\""], answer: 3, why: "Dice qué es, el precio, cuándo y la fecha de fin." },
          { objective: "O2", q: "La IA sugiere un descuento del 60%. ¿Qué revisas primero?", options: ["Si todavía te deja ganancia", "Si suena emocionante", "Nada", "El tipo de letra"], answer: 0, why: "Un descuento que pierde dinero no es crecimiento." },
          { objective: "O3", q: "¿Quién debe estar en tu lista de clientes?", options: ["Cualquiera cuyo número encuentres", "Los clientes de la competencia", "Las personas que aceptaron recibir noticias tuyas", "Números de teléfono al azar"], answer: 2, why: "Primero el permiso." },
          { objective: "O3", q: "Quieres ayuda de la IA para organizar tu lista de clientes. ¿Qué compartes?", options: ["La lista completa con teléfonos", "Los números de tarjeta de los clientes", "Los nombres de las columnas o filas de ejemplo inventadas", "La contraseña de tu archivo"], answer: 2, why: "Los datos reales de los clientes se quedan fuera de las herramientas de IA." }
        ]
      }
    },
    {
      name: "Capítulo 2: Dar seguimiento y crecer",
      lessons: [
        {
          objectives: ["O4"],
          title: "Escribir mensajes de seguimiento que cumplan las reglas",
          minutes: 6,
          goal: "Escribir una serie de seguimiento de tres mensajes y hacer que los correos de marketing cumplan con CAN-SPAM.",
          text: [
            "La mayoría de las ventas vienen del seguimiento. Una serie sencilla: (1) gracias después de una visita, (2) un recordatorio o un consejo una semana después, (3) tu oferta con su fecha de fin. Pregúntale a la IA: \"Escribe tres correos cortos de seguimiento para mi salón con la voz de mi marca. Usa [nombre].\"",
            "En Estados Unidos, los correos de marketing deben cumplir la ley CAN-SPAM. La guía de la FTC (la Comisión Federal de Comercio) dice: usa remitente y asunto honestos, deja claro que es publicidad, incluye una dirección postal válida, da una forma clara de darse de baja y respeta las solicitudes de baja en un plazo de 10 días hábiles.",
            "Los mensajes de texto de marketing tienen sus propias reglas federales (la TCPA, que hace cumplir la FCC, la Comisión Federal de Comunicaciones) y por lo general necesitan el permiso claro del cliente. Antes de enviar mensajes de texto de marketing, revisa las reglas en fcc.gov o pregúntale a un profesional, y usa una herramienta de mensajes que maneje las bajas."
          ],
          steps: ["Planea tres mensajes: gracias, recordatorio o consejo, oferta.", "Pídele a la IA que los redacte con espacios de [nombre].", "Agrega tu dirección postal y una línea para darse de baja a los correos de marketing.", "Respeta pronto las bajas.", "Revisa las reglas de los mensajes de texto antes de enviar textos de marketing."],
          words: [["Serie de seguimiento", "una serie planeada de mensajes que se envían después de la visita o el registro de un cliente."], ["CAN-SPAM", "la ley de Estados Unidos con reglas para el correo comercial."], ["Darse de baja", "una forma de que la gente deje de recibir tus mensajes."]],
          slides: [
            { title: "Una serie de tres mensajes", bullets: ["1. Gracias después de la visita", "2. Recordatorio o consejo una semana después", "3. Tu oferta con una fecha de fin"] },
            { title: "Lo básico de CAN-SPAM (FTC)", bullets: ["Remitente y asunto honestos; di que es publicidad", "Una dirección postal válida", "Baja clara, respetada en 10 días hábiles"] },
            { title: "Mensajes de texto de marketing", bullets: ["Reglas federales aparte (TCPA, FCC)", "Primero consigue un permiso claro", "Revisa fcc.gov o pregunta a un profesional"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Pídele a la IA que redacte tu serie de seguimiento de tres mensajes con [nombre]. Agrega tu dirección postal y una línea para darse de baja al correo de la oferta.",
          youCanNow: "escribir una serie de seguimiento y hacer que los correos de marketing cumplan lo básico de CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Según la ley CAN-SPAM, ¿qué debe incluir todo correo de marketing en Estados Unidos?", options: ["Un cupón", "Una dirección postal válida y una forma de darse de baja", "Una foto", "El nombre completo del cliente"], answer: 1, why: "La ley CAN-SPAM exige una dirección postal y una forma de darse de baja." },
            { objective: "O4", q: "Quieres mandar mensajes de texto de marketing sobre tu oferta. ¿Qué harías primero?", options: ["Mandarles mensaje a todos los de tu teléfono", "Mandar los mensajes tarde en la noche", "Usar una lista de números comprada", "Conseguir un permiso claro y revisar las reglas federales de mensajes de texto"], answer: 3, why: "Los mensajes de texto de marketing tienen sus propias reglas federales y necesitan permiso claro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Leer tus números de ventas con ayuda de la IA",
          minutes: 5,
          goal: "Llevar unos cuantos números de ventas cada semana y usar la IA para ayudarte a ver patrones.",
          text: [
            "Solo necesitas unos cuantos números: ventas por día, número de clientes, venta promedio (ventas divididas entre clientes), tus artículos más vendidos y cuántas personas usaron tu oferta.",
            "Guárdalos en una hoja de cálculo por semana. Deja que la hoja haga los cálculos. Luego puedes pegar los totales semanales (sin nombres de clientes) en un asistente de IA y preguntar: \"Estos son 6 semanas de números de mi panadería. ¿Qué patrones ves? ¿Qué debería revisar?\"",
            "Toma las ideas de la IA como preguntas, no como respuestas. Si dice \"los sábados son flojos\", revisa tu propia hoja para confirmarlo y piensa por qué: el clima, un evento, un cambio de personal."
          ],
          steps: ["Lleva cada semana las ventas, los clientes, la venta promedio, lo más vendido y el uso de la oferta.", "Deja que las fórmulas hagan los totales.", "Pega los totales semanales (sin nombres) en la IA y pregúntale por patrones.", "Confirma cada patrón en tu hoja."],
          words: [["Venta promedio", "el total de ventas dividido entre el número de clientes."], ["Patrón", "algo que pasa una y otra vez en tus números."]],
          slides: [
            { title: "Cinco números para llevar", bullets: ["Ventas por día y clientes", "Venta promedio", "Lo más vendido y el uso de la oferta"] },
            { title: "La IA como un segundo par de ojos", bullets: ["Pega totales semanales, no nombres", "Pregunta: \"¿Qué patrones ves?\""] },
            { title: "Confirma antes de actuar", bullets: ["Las ideas de la IA son preguntas", "Revisa tu propia hoja", "Pregunta por qué: clima, eventos, personal"] }
          ],
          tryIt: "Haz una tabla semanal con los cinco números. Llénala con números de ejemplo o reales de cuatro semanas y pregúntale a la IA qué patrones ve. Confirma uno en tu hoja.",
          youCanNow: "llevar los números clave de ventas y usar la IA para ayudarte a ver patrones que luego confirmas.",
          quickCheck: [
            { objective: "O5", q: "¿Cómo calculas tu venta promedio?", options: ["Ventas divididas entre el número de clientes", "Clientes divididos entre los días", "Ganancia por dos", "Número de artículos vendidos"], answer: 0, why: "La venta promedio es el total de ventas dividido entre el número de clientes." },
            { objective: "O5", q: "Quieres que la IA revise tu tabla de ventas de la semana. ¿Qué harías primero?", options: ["Agregar los nombres de los clientes para que sepa más", "Pegarla así", "Quitar los nombres de los clientes antes de pegarla", "Agregar los números de tarjeta de los clientes"], answer: 2, why: "Los nombres de los clientes se quedan fuera de las herramientas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tu plan de ventas de 30 días",
          minutes: 5,
          goal: "Juntar tu cliente, tu oferta, tu lista, tus seguimientos y tu registro en un plan de 30 días.",
          text: [
            "Un plan convierte las ideas en acción. Semana 1: arma tu lista de clientes y la forma de registrarse. Semana 2: lanza tu oferta y envía el mensaje de agradecimiento. Semana 3: envía el recordatorio y publica la oferta. Semana 4: envía el último aviso antes de la fecha de fin y luego revisa tus números.",
            "Pídele a la IA que convierta tus notas en un calendario con tareas para cada semana. Que sea realista para tus horarios.",
            "Al final, compara tus números con los del mes anterior. Quédate con lo que funcionó, deja lo que no y planea los próximos 30 días."
          ],
          steps: ["Junta tu cliente ideal, tu oferta, la preparación de tu lista, tus seguimientos y tu tabla de registro.", "Pídele a la IA un calendario de tareas de cuatro semanas.", "Ajusta las tareas a tus horarios reales.", "Revisa los resultados el día 30."],
          words: [["Plan de ventas", "un plan escrito de lo que vas a hacer para vender más, y cuándo."], ["Revisión", "mirar los resultados para decidir qué conservar o cambiar."]],
          slides: [
            { title: "Cuatro semanas", bullets: ["Semana 1: lista y registro", "Semana 2: lanza la oferta, envía el agradecimiento", "Semana 3: recordatorio; Semana 4: último aviso y revisión"] },
            { title: "La IA hace el calendario", bullets: ["Pega tus notas", "Pide tareas por semana", "Ajústalo a tus horarios"] },
            { title: "Día 30", bullets: ["Compara con el mes pasado", "Quédate con lo que funcionó", "Planea los próximos 30 días"] }
          ],
          tryIt: "Tarea final: escribe tu plan de ventas de 30 días de una página con el cliente ideal, la oferta, la lista, la serie de tres mensajes y la tabla de registro. Pídele a la IA que lo convierta en un calendario de tareas por semana.",
          youCanNow: "planear, llevar a cabo y revisar un impulso de ventas de 30 días para tu negocio.",
          quickCheck: [
            { objective: "O6", q: "¿Para qué es la Semana 1 del plan de 30 días?", options: ["Para mandar todos los mensajes a la vez", "Para preparar la lista y la forma de inscribirse", "Para terminar la oferta", "Para comparar los resultados"], answer: 1, why: "La primera semana prepara la lista y la forma en que la gente se inscribe." },
            { objective: "O6", q: "Tu plan de 30 días necesita más horas de las que tienes. ¿Qué harías?", options: ["Dejarlo así y trabajar toda la noche", "Abandonar el plan", "Pedirle a la IA que haga las ventas", "Recortarlo para que quepa en tus horas reales"], answer: 3, why: "Un plan que cabe en tus horas es un plan que de verdad puedes hacer." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Dar seguimiento y crecer",
        questions: [
          { objective: "O4", q: "Según CAN-SPAM, ¿qué debe ir en todo correo de marketing en Estados Unidos?", options: ["Una dirección postal válida y una forma de darse de baja", "El número de tarjeta del cliente", "Un asunto falso", "Ningún nombre de remitente"], answer: 0, why: "La FTC menciona los dos como requisitos." },
          { objective: "O4", q: "Según la guía de la FTC, ¿en cuánto tiempo debes respetar una solicitud de baja?", options: ["Solo si llaman", "En un año", "Nunca", "En 10 días hábiles"], answer: 3, why: "La FTC dice que en 10 días hábiles." },
          { objective: "O4", q: "Antes de enviar mensajes de texto de marketing deberías:", options: ["Mandar mensajes a todos los números que tengas", "Conseguir un permiso claro y revisar las reglas federales de mensajes", "Comprar una lista", "Esconder el nombre de tu negocio"], answer: 1, why: "Los textos de marketing tienen reglas federales aparte y necesitan permiso." },
          { objective: "O5", q: "¿Cómo calculas la venta promedio?", options: ["Ventas divididas entre el número de clientes", "Ventas por clientes", "Ganancia menos renta", "Clientes divididos entre días"], answer: 0, why: "Venta promedio = total de ventas / clientes." },
          { objective: "O5", q: "La IA dice que tus martes son flojos. ¿Qué haces?", options: ["Cerrar los martes de inmediato", "Ignorar los números", "Confirmarlo en tus propios números y pensar por qué", "Preguntarle a un competidor"], answer: 2, why: "Los patrones de la IA son preguntas que hay que revisar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para ventas y crecimiento del negocio",
    questions: [
      { objective: "O1", q: "La descripción de tu cliente ideal debe ser:", options: ["\"Todo el mundo\"", "Específica: quiénes, qué necesitan, por qué tú", "Basada en suposiciones sobre grupos", "Muy larga"], answer: 1, why: "Las descripciones específicas guían mejores ofertas." },
      { objective: "O1", q: "¿De dónde debe salir la descripción de tu cliente ideal?", options: ["Solo de la IA", "De estereotipos", "De un sitio web cualquiera", "De lo que ves con tus mejores clientes reales"], answer: 3, why: "Usa observaciones reales, no suposiciones." },
      { objective: "O1", q: "¿Cómo puede ayudarte la IA a describir a tu cliente ideal?", options: ["No puede ayudar", "Leyendo tu cuenta de banco", "Llamando a los clientes", "Haciéndote preguntas para afinarla"], answer: 3, why: "La IA puede sugerir preguntas para pensar." },
      { objective: "O2", q: "Una oferta clara incluye:", options: ["Solo una imagen", "Qué es, precio, razón para actuar y fecha de fin", "Ningún precio", "Un código secreto"], answer: 1, why: "Las cuatro partes la hacen clara." },
      { objective: "O2", q: "¿Qué es la ganancia?", options: ["Un descuento", "Todo el dinero que entra", "El dinero que queda después de los costos", "Un préstamo"], answer: 2, why: "La ganancia es ingresos menos costos." },
      { objective: "O2", q: "Llamar \"oferta\" a tu precio normal es:", options: ["Engañoso", "Inteligente", "Obligatorio", "Aceptable todos los días"], answer: 0, why: "Las ofertas deben ser honestas." },
      { objective: "O3", q: "¿Qué columna ayuda a demostrar que un cliente aceptó recibir mensajes?", options: ["Número de tarjeta", "Color favorito", "Aceptó recibir mensajes (sí/no y fecha)", "Contraseña"], answer: 2, why: "Registrar el permiso importa." },
      { objective: "O3", q: "Una buena forma de juntar registros es:", options: ["Un código QR a un formulario de registro", "Copiar números de los recibos sin preguntar", "Comprar una lista", "Adivinar correos"], answer: 0, why: "La gente elige unirse." },
      { objective: "O3", q: "Tu lista de clientes debe estar:", options: ["Publicada en internet", "Protegida y fuera de las herramientas de IA", "Compartida con cualquiera", "Pegada en los chats"], answer: 1, why: "Los datos de los clientes son privados." },
      { objective: "O4", q: "Una serie de seguimiento sencilla empieza con:", options: ["Nada", "Una venta agresiva", "Una queja", "Un agradecimiento después de la visita"], answer: 3, why: "Agradecer primero construye la relación." },
      { objective: "O4", q: "Según CAN-SPAM, un correo de marketing debe:", options: ["Dejar claro que es publicidad", "Esconder al remitente", "Usar un asunto falso", "No tener dirección"], answer: 0, why: "La FTC exige que la publicidad se identifique." },
      { objective: "O4", q: "¿La guía de qué agencia cubre CAN-SPAM?", options: ["El IRS", "El DMV", "La oficina de correos", "La FTC"], answer: 3, why: "La FTC publica la guía de cumplimiento." },
      { objective: "O4", q: "Los mensajes de texto de marketing están cubiertos por:", options: ["Solo CAN-SPAM", "Ninguna regla", "Reglas federales aparte (TCPA) que hace cumplir la FCC", "Solo reglas estatales de estacionamiento"], answer: 2, why: "Los textos tienen sus propias reglas." },
      { objective: "O5", q: "¿Cuál es uno de los cinco números que debes llevar?", options: ["Tu canción favorita", "La venta promedio", "La renta de tu competidor", "Tu contraseña"], answer: 1, why: "La venta promedio muestra cuánto gasta cada cliente." },
      { objective: "O5", q: "¿Qué debería hacer los totales en tu hoja de registro?", options: ["Los clientes", "Lo que adivine la IA", "La memoria", "Las fórmulas de la hoja de cálculo"], answer: 3, why: "Las fórmulas calculan de forma confiable." },
      { objective: "O5", q: "Antes de pegar números en la IA, quita:", options: ["Los totales", "Las fechas de las semanas", "Los nombres de los clientes", "Los nombres de los artículos"], answer: 2, why: "Los nombres son privados." },
      { objective: "O6", q: "La semana 1 del plan de 30 días es para:", options: ["Armar la lista y el registro", "Cerrar el negocio", "Subir todos los precios", "Despedir al personal"], answer: 0, why: "Primero va la lista." },
      { objective: "O6", q: "¿Por qué ajustar el plan a tus horarios reales?", options: ["Para hacerlo más largo", "Para que de verdad puedas cumplirlo", "No importa", "Para que la IA esté contenta"], answer: 1, why: "Los planes realistas se cumplen." },
      { objective: "O6", q: "El día 30 deberías:", options: ["Olvidar los números", "Comparar los resultados y quedarte con lo que funcionó", "Empezar de nuevo a ciegas", "Borrar la lista"], answer: 1, why: "La revisión guía los próximos 30 días." },
      { objective: "O6", q: "En este curso, ¿quién vende?", options: ["Tú y tu relación con los clientes, con la IA como ayudante", "Solo la IA", "Nadie", "Un bot que se hace pasar por ti"], answer: 0, why: "La IA te ayuda a escribir y a pensar; tú vendes." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      6,
      8,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Cliente ideal",
        objective: "O1",
        notYet: "Es vago, como \"todo el mundo\".",
        meets: "Tres oraciones específicas: quién es, qué necesita y por qué te elige.",
        exceeds: "Se basa en tus mejores clientes reales y se afinó con las preguntas de la IA."
      },
      {
        name: "Oferta",
        objective: "O2",
        notYet: "Le falta el precio o la fecha de fin, o pierde dinero.",
        meets: "Una oferta clara y honesta con precio, razón para actuar y fecha de fin.",
        exceeds: "La ganancia está calculada y escrita a un lado."
      },
      {
        name: "Lista de clientes",
        objective: "O3",
        notYet: "No tiene columna de permiso, o no hay forma de inscribirse.",
        meets: "Dice dónde está la lista y cómo se inscribió la gente, con el permiso registrado.",
        exceeds: "Anota cómo se protege la lista y cómo se mantiene fuera de las herramientas de IA."
      },
      {
        name: "Serie de seguimiento",
        objective: "O4",
        notYet: "Menos de tres mensajes, o un correo de marketing sin dirección o sin línea para darse de baja.",
        meets: "Tres mensajes, con dirección y línea para darse de baja en el correo de marketing.",
        exceeds: "Anota el permiso y las reglas que se necesitan antes de cualquier mensaje de texto de marketing."
      },
      {
        name: "Tabla de seguimiento",
        objective: "O5",
        notYet: "No hay tabla o no hay números semanales.",
        meets: "Una tabla con los números para revisar cada semana, usando fórmulas.",
        exceeds: "Incluye una revisión el día 30 para quedarte con lo que funcionó."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Dueños que hacen su impulso de ventas de 30 días (encuesta de seguimiento a 30 días)",
      "Dueños que reportan más ventas o más clientes que regresan después de 30 días, según su tabla de seguimiento",
      "Dueños que hacen crecer una lista de clientes con permiso en 60 días"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora o un teléfono inteligente con internet",
      "Un asistente de IA gratuito y una hoja de cálculo gratis (Google Sheets o Microsoft Excel)",
      "Papel y lápiz para calcular el costo y la ganancia",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y tarea final"
    ],
    facilitatorNotes: [
      "Usen filas de ejemplo inventadas en las listas de práctica; nunca peguen en la IA listas reales de clientes.",
      "Abran juntos la guía de CAN-SPAM de la FTC y señala que los mensajes de texto tienen reglas aparte.",
      "Recorre en papel un ejemplo de costo y ganancia antes de que los dueños fijen su oferta.",
      "Anima a los dueños a comparar su plan de 30 días con sus horas reales de cada semana.",
      "Califica el plan con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

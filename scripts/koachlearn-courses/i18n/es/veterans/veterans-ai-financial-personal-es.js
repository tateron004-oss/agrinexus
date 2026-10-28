"use strict";

// Koach Learn course (Spanish translation of veterans-ai-financial-personal). Shape and translation rules: scripts/koachlearn-courses/README.md.
// No investment advice. US agency names (VA, DFAS, CFPB, TRICARE, Military OneSource) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-financial-personal-es",
  lang: "es",
  translationOf: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "IA para el éxito financiero y personal",
  skills: "Usar la IA de forma segura con preguntas de dinero, Armar un presupuesto mensual civil, Planear los cambios de ingresos después del servicio, Detectar estafas de dinero dirigidas a veteranos, Fijar metas y una rutina semanal, Encontrar ayuda oficial gratuita sobre dinero",
  outcome: "armar un presupuesto mensual civil sencillo y una rutina semanal con ayuda de un asistente de IA, usando números redondeados y sin datos privados de cuentas, y revisar las preguntas de dinero con una fuente oficial.",
  about: [
    "Este curso es para veteranos y militares en transición que quieren tomar el control de su dinero y de su vida diaria después del servicio. Los ingresos, la vivienda y la rutina cambian cuando dejas las fuerzas armadas, y un plan hace ese cambio más fácil.",
    "Vas a usar un asistente de IA gratuito como ayudante de planeación: para armar un presupuesto, planear los ingresos que vas a perder y ganar, detectar estafas, fijar metas y armar una rutina semanal. Vas a aprender exactamente qué nunca escribir en una IA y dónde conseguir ayuda oficial y gratuita sobre dinero.",
    "Este curso no da consejos de inversión. La IA es una ayudante, no una asesora financiera: revisa siempre las decisiones de dinero con una fuente oficial o un profesional calificado. Cada lección toma unos cinco minutos, con una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Usa un asistente de IA para armar un presupuesto mensual civil de una página con números redondeados (ingresos, necesidades, gustos, ahorro y pagos de deudas), con una línea para un cambio de ingresos después del servicio, y una rutina semanal con tres bloques para tus metas. Revisa que no tenga números de cuenta ni datos privados, y escribe una pregunta de dinero que vas a llevar a una fuente oficial o a un orientador.",
  chapters: [
    {
      name: "Capítulo 1: El dinero después del servicio",
      lessons: [
        {
          title: "Usar la IA de forma segura para preguntas de dinero",
          minutes: 4,
          goal: "Hacerle una pregunta de dinero a un asistente de IA de forma segura, sin datos privados.",
          text: [
            "Un asistente de IA puede explicar palabras de dinero, armar una tabla de presupuesto, comparar opciones que le des y convertir una lista desordenada de cuentas por pagar en un plan. Es un ayudante rápido y paciente.",
            "No es un asesor financiero. No conoce toda tu situación, puede equivocarse con reglas y números, y puede estar desactualizado. Úsalo para entender y organizar; revisa las decisiones con una fuente oficial o un orientador calificado.",
            "Nunca escribas en una IA tu número de Seguro Social, los números de tu DD-214 o de tu expediente del VA (el Departamento de Asuntos de Veteranos), números de banco o de tarjeta, datos de acceso a cuentas ni contraseñas. Usa números redondeados: \"renta de unos $1,200\" es todo lo que necesita."
          ],
          steps: ["Decide qué quieres: una explicación, una tabla o un plan.", "Usa números redondeados, sin datos de cuentas.", "Haz la pregunta.", "Marca cualquier regla, tasa o fecha límite para revisarla con una fuente oficial."],
          words: [["Presupuesto", "un plan de cómo entra y sale tu dinero cada mes."], ["Número redondeado", "un número cercano y sencillo como $1,200 en vez de una cifra exacta ligada a una cuenta."]],
          slides: [
            { title: "La IA te puede ayudar a", bullets: ["Explicar palabras de dinero", "Armar una tabla de presupuesto", "Convertir una lista de cuentas en un plan"] },
            { title: "La IA no es", bullets: ["Una asesora financiera", "Siempre correcta o actualizada", "Quien decide: tú decides"] },
            { title: "Nunca escribas", bullets: ["Números de Seguro Social, DD-214 o expediente del VA", "Números de banco o tarjeta, datos de acceso, contraseñas", "Usa números redondeados"] }
          ],
          tryIt: "Pregúntale a un asistente de IA: \"Explica la diferencia entre una necesidad y un gusto en un presupuesto mensual, con tres ejemplos de cada uno.\" Revisa que tu instrucción no tenga datos privados antes de enviarla.",
          youCanNow: "hacerle preguntas de dinero a un asistente de IA de forma segura y saber qué revisar en otro lugar."
        },
        {
          title: "Armar un presupuesto mensual civil",
          minutes: 6,
          goal: "Armar una tabla de presupuesto mensual con un asistente de IA usando números redondeados.",
          text: [
            "En uniforme, algunos costos pudieron estar cubiertos o pagados como asignaciones, como las de vivienda y alimentación, y la atención médica con TRICARE (el seguro de salud militar). Cuando dejas el servicio, muchos de estos cambian o se acaban. Tu presupuesto civil debe cubrirlos con tu sueldo o tus beneficios. Revisa tu pago final y tus beneficios con tu oficina de finanzas, DFAS (la agencia de pagos de Defensa) o el VA en vez de adivinar.",
            "Empieza con cuatro grupos: ingresos (sueldo, beneficios), necesidades (renta, servicios, comida, transporte, seguros, salud), gustos (comer fuera, suscripciones), y ahorro y pagos de deudas. Pídele a la IA que arme la tabla y sume cada grupo.",
            "Ejemplo de instrucción: \"Haz una tabla de presupuesto mensual. Ingresos de unos $3,800. Renta $1,200, servicios $200, súper $450, pago del auto $350, gasolina $160, teléfono $70, seguros $150, comer fuera $200, suscripciones $40. Muestra los totales y lo que queda.\""
          ],
          steps: ["Haz una lista de tus ingresos mensuales con números redondeados.", "Haz una lista de necesidades, gustos, ahorro y pagos de deudas.", "Pídele a la IA una tabla con totales y lo que queda.", "Agrega los costos que estaban cubiertos en el servicio y ahora no.", "Revisa tú las cuentas con una calculadora."],
          words: [["Asignación", "dinero que se paga en el servicio para un costo como la vivienda o la comida."], ["Necesidad", "un costo que debes pagar para vivir y trabajar, como la renta."], ["Gusto", "un costo que puedes recortar, como comer fuera."]],
          slides: [
            { title: "Lo que cambia después del servicio", bullets: ["Las asignaciones de vivienda y comida pueden acabarse", "La cobertura de salud puede cambiar", "Revisa tu sueldo y beneficios por vía oficial"] },
            { title: "Cuatro grupos del presupuesto", bullets: ["Ingresos", "Necesidades", "Gustos", "Ahorro y pagos de deudas"] },
            { title: "Deja que la IA arme la tabla", bullets: ["Dale números redondeados", "Pide totales y lo que queda", "Revisa tú las cuentas"] }
          ],
          tryIt: "Pídele a un asistente de IA que arme tu tabla de presupuesto mensual con números redondeados. Agrega una línea para un costo que estaba cubierto mientras servías. Revisa los totales con una calculadora.",
          youCanNow: "armar una tabla de presupuesto mensual civil con números redondeados y revisar sus totales."
        },
        {
          title: "Detectar estafas de dinero dirigidas a veteranos",
          minutes: 5,
          goal: "Detectar las señales de alerta de una estafa de dinero y saber qué hacer.",
          text: [
            "Los estafadores buscan a los veteranos por sus beneficios y pensiones. Las trampas comunes incluyen ofertas para \"comprar\" tus pagos futuros de pensión o beneficios a cambio de una suma ahora (adelantos de pensión), personas que cobran por presentar reclamos al VA o por \"subir\" tu calificación de discapacidad, ofertas de empleo falsas y llamadas que se hacen pasar por el VA.",
            "La Consumer Financial Protection Bureau (CFPB, la Oficina para la Protección Financiera del Consumidor) advierte a militares y veteranos sobre los adelantos de pensión y explica tus derechos en temas de dinero. Los estafadores ahora también usan IA para escribir mensajes que parecen reales y hasta copiar voces.",
            "Señales de alerta: te apuran, piden un cargo por adelantado, piden tarjetas de regalo o una transferencia, o piden un código que te llegó al teléfono. Detente, cuelga y vuelve a llamar a un número que encuentres tú mismo en va.gov o en el sitio oficial. También puedes pegar un mensaje sospechoso en una IA y preguntar \"¿Qué señales de alerta tiene esto?\", después de quitar tus datos privados."
          ],
          steps: ["Fíjate en la presión, los cargos por adelantado, las tarjetas de regalo, las transferencias o las peticiones de códigos.", "Detente y no pagues ni compartas nada.", "Busca tú mismo el número oficial y vuelve a llamar.", "Quita los datos privados y luego pídele a la IA que señale las alertas.", "Denúncialo si perdiste dinero."],
          words: [["Adelanto de pensión", "una oferta para pagarte una suma ahora a cambio de tus pagos futuros de pensión o beneficios, a menudo con un costo muy alto."], ["Estafa", "un engaño para robar dinero o información."]],
          slides: [
            { title: "Trampas comunes", bullets: ["Ofertas de adelanto de pensión", "Cobros por presentar o \"subir\" un reclamo al VA", "Empleos falsos y llamadas falsas del VA"] },
            { title: "Señales de alerta", bullets: ["Te apuran", "Cargo por adelantado, tarjetas de regalo o transferencia", "Piden un código que te llegó al teléfono"] },
            { title: "Qué hacer", bullets: ["Detente. No pagues ni compartas", "Llama a un número que encontraste tú", "Pídele a la IA que señale las alertas"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: el dinero a lo largo de la vida militar", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Escribe un ejemplo corto de un mensaje de estafa que ofrezca \"subir tu calificación del VA a cambio de un pago\". Pídele a un asistente de IA que haga una lista de sus señales de alerta. Luego escribe lo que harías si te llegara.",
          youCanNow: "detectar las señales de alerta de estafas de dinero dirigidas a veteranos y responder de forma segura."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El dinero después del servicio",
        questions: [
          { q: "¿Qué deberías escribir en una IA al pedir ayuda con tu presupuesto?", options: ["Tu número de cuenta bancaria", "\"Renta de unos $1,200\"", "Tu número de Seguro Social", "Tu contraseña de banca en línea"], answer: 1, why: "Los números redondeados le dan a la IA lo que necesita sin datos privados." },
          { q: "La mejor forma de usar la IA con el dinero es para:", options: ["Tomar las decisiones finales por ti", "Elegir inversiones por ti", "Explicar, organizar y armar un plan que luego revisas", "Guardar tus contraseñas"], answer: 2, why: "La IA te ayuda a entender y organizar; revisas las decisiones con fuentes oficiales." },
          { q: "¿Por qué un presupuesto civil necesita líneas que quizás no tenía un presupuesto militar?", options: ["Los civiles no pagan renta", "Los impuestos son más bajos", "La IA lo dice", "Algunas asignaciones y costos cubiertos cambian o se acaban después del servicio"], answer: 3, why: "Costos como la vivienda pudieron estar cubiertos o pagados como asignaciones en el servicio." },
          { q: "Alguien te ofrece dinero ahora a cambio de tus pagos futuros de pensión. Esto es:", options: ["Un adelanto de pensión, sobre el que advierte la CFPB", "Un pago de sueldo normal", "Un beneficio del VA", "Una devolución de impuestos"], answer: 0, why: "La CFPB advierte a militares y veteranos sobre las ofertas de adelanto de pensión." },
          { q: "Alguien llama, dice ser del VA y te pide el código que te llegó al teléfono. Tú:", options: ["Le lees el código", "Cuelgas y llamas al VA a un número que encuentres tú mismo", "Le das tu número de Seguro Social en su lugar", "Le mandas una tarjeta de regalo"], answer: 1, why: "Las oficinas reales no piden ese código; vuelve a llamar a un número que sabes que es real." }
        ]
      }
    },
    {
      name: "Capítulo 2: Metas, rutina y ayuda real",
      lessons: [
        {
          title: "Fijar metas de dinero y de vida",
          minutes: 5,
          goal: "Escribir tres metas claras con un número y una fecha, y dividir una en pasos con la IA.",
          text: [
            "Una meta funciona cuando es específica, medible y tiene fecha: \"Ahorrar $1,000 para emergencias antes del 31 de marzo\" es mejor que \"ahorrar más\". Lo mismo pasa con las metas de vida: \"terminar mi curso de certificación antes de junio\" o \"correr tres veces por semana\".",
            "Escribe tres metas: una de dinero, una de carrera o aprendizaje, y una de salud o familia. Luego pídele a una IA que divida una en pasos semanales: \"Divide esta meta en pasos semanales: ahorrar $1,000 antes del 31 de marzo. Puedo recortar unos $60 por semana de comer fuera y suscripciones.\"",
            "La Consumer Financial Protection Bureau tiene herramientas gratuitas para militares, incluida una hoja de trabajo para fijar metas. Úsala junto con tu plan de la IA."
          ],
          steps: ["Escribe una meta de dinero, una de carrera y una de salud o familia.", "Ponle a cada una un número y una fecha.", "Pídele a la IA que divida una meta en pasos semanales.", "Pon el primer paso en tu calendario."],
          words: [["Fondo de emergencia", "dinero ahorrado para gastos inesperados, como una reparación del auto."], ["Medible", "que lo puedes contar, así sabes cuándo está hecho."]],
          slides: [
            { title: "Una meta que funciona", bullets: ["Específica", "Medible: un número", "Una fecha"] },
            { title: "Tres metas", bullets: ["Dinero", "Carrera o aprendizaje", "Salud o familia"] },
            { title: "Divídela", bullets: ["Pídele pasos semanales a la IA", "Pon el paso uno en tu calendario", "La CFPB tiene una hoja gratuita para fijar metas"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: el dinero a lo largo de la vida militar (hoja para fijar metas)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Escribe tus tres metas con un número y una fecha. Pídele a un asistente de IA que divida tu meta de dinero en pasos semanales.",
          youCanNow: "escribir metas claras y dividir una en pasos semanales con ayuda de la IA."
        },
        {
          title: "Armar una rutina semanal",
          minutes: 5,
          goal: "Armar una rutina semanal con tres bloques para tus metas usando un asistente de IA.",
          text: [
            "La vida militar funcionaba con un horario. La vida civil muchas veces no, y muchos veteranos dicen que perder esa estructura es una de las partes más difíciles de la transición. Puedes armar la tuya.",
            "Dale a la IA tus horarios fijos y tus metas: \"Trabajo de 8 a 5 de lunes a viernes. Mis metas: estudiar para mi certificación 4 horas por semana, hacer ejercicio 3 veces por semana, revisar mi presupuesto una vez por semana. Haz un horario semanal sencillo en forma de tabla.\"",
            "Que sea realista. Deja tiempo libre y tiempo para la familia. Revisa la rutina cada domingo y ajústala; un plan es un plan hasta el primer contacto, y te adaptas."
          ],
          steps: ["Haz una lista de tus horarios fijos: trabajo, escuela, familia.", "Haz una lista de tus tres metas de la lección 4.", "Pídele a la IA una tabla de horario semanal.", "Agrega tiempo libre y tiempo para la familia.", "Revísala y ajústala cada semana."],
          words: [["Rutina", "cosas que haces a horas fijas cada semana."], ["Bloque de tiempo", "un tiempo apartado en tu calendario para una sola tarea."]],
          slides: [
            { title: "Reconstruye tu estructura", bullets: ["La vida militar tenía horario", "La vida civil muchas veces no", "Puedes armar la tuya"] },
            { title: "Pídele a la IA una tabla semanal", bullets: ["Tus horarios fijos", "Tus tres bloques de metas", "Tiempo libre y para la familia"] },
            { title: "Revisa cada semana", bullets: ["Revísala cada domingo", "Ajusta lo que no funcionó", "Adáptate, como en cualquier plan"] }
          ],
          tryIt: "Pídele a un asistente de IA que haga tu horario semanal con tres bloques de metas, incluida una revisión semanal del presupuesto. Ponlo en el calendario de tu teléfono o imprímelo.",
          youCanNow: "armar una rutina semanal realista que deje tiempo para tus metas."
        },
        {
          title: "Conseguir ayuda oficial y gratuita sobre dinero",
          minutes: 5,
          goal: "Elegir la fuente oficial correcta para una pregunta de dinero y escribir la pregunta.",
          text: [
            "Algunas preguntas de dinero necesitan a una persona o una respuesta oficial: beneficios y pagos del VA, deudas, impuestos, problemas de crédito, decisiones de retiro o cualquier asunto legal. La IA te puede ayudar a escribir la pregunta con claridad, pero no debe ser la respuesta final.",
            "La ayuda oficial gratuita incluye: el VA (va.gov) para beneficios y pagos del VA; Military OneSource, que ofrece orientación financiera gratuita a militares y familiares que califican (revisa su guía de requisitos para ver si sigues calificando después de la baja); y la Consumer Financial Protection Bureau (consumerfinance.gov) para tus derechos en temas de dinero y para presentar quejas.",
            "Las inversiones y las cuentas de retiro son decisiones personales. Este curso no recomienda ninguna. Habla con un profesional calificado y de confianza, y ten cuidado con cualquiera que prometa ganancias grandes y rápidas."
          ],
          steps: ["Escribe tu pregunta de dinero en una o dos oraciones.", "Pídele a la IA que te ayude a hacerla clara, sin datos privados.", "Elige la fuente correcta: VA, Military OneSource o CFPB.", "Contáctalos con el número o el sitio que encontraste tú mismo."],
          words: [["Orientación financiera", "ayuda gratuita o de bajo costo de un orientador capacitado para planear y resolver problemas de dinero."], ["CFPB", "Consumer Financial Protection Bureau: la agencia de EE. UU. que protege a las personas en temas de dinero."]],
          slides: [
            { title: "Algunas preguntas necesitan respuesta oficial", bullets: ["Beneficios y pagos del VA", "Deudas, impuestos y problemas de crédito", "Preguntas de retiro y legales"] },
            { title: "Ayuda oficial gratuita", bullets: ["va.gov para beneficios del VA", "Orientación financiera de Military OneSource", "consumerfinance.gov para tus derechos"] },
            { title: "Aquí no hay consejos de inversión", bullets: ["Las inversiones son decisiones personales", "Habla con un profesional calificado", "Cuidado con las promesas grandes y rápidas"] }
          ],
          sources: [
            { name: "Military OneSource: orientación financiera", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: el dinero a lo largo de la vida militar", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: carreras y empleo (beneficios y orientación del VA)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Tarea final: termina tu plan de una página: tu presupuesto mensual de la lección 2 con una línea de cambio de ingresos, tu rutina semanal con tres bloques de metas y una pregunta de dinero con la fuente oficial a la que la vas a llevar. Revisa que no tenga números de cuenta ni datos privados.",
          youCanNow: "elegir la fuente oficial y gratuita correcta para una pregunta de dinero y llevarle una pregunta clara."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Metas, rutina y ayuda real",
        questions: [
          { q: "¿Cuál es la mejor meta?", options: ["\"Ahorrar más\"", "\"Ser mejor con el dinero\"", "\"Ahorrar $1,000 para emergencias antes del 31 de marzo\"", "\"Algún día comprar una casa\""], answer: 2, why: "Es específica, medible y tiene fecha." },
          { q: "Muchos veteranos extrañan la estructura después del servicio. ¿Qué ayuda?", options: ["Nunca planear", "Dejar que la IA maneje tu vida", "Trabajar a todas horas", "Armar una rutina semanal y revisarla"], answer: 3, why: "Una rutina realista que revisas cada semana devuelve la estructura." },
          { q: "Tu rutina semanal no funcionó esta semana. Tú:", options: ["La revisas y la ajustas", "Te rindes con las rutinas", "Agregas más horas de trabajo", "Borras tu calendario"], answer: 0, why: "Los planes se ajustan a medida que aprendes qué funciona." },
          { q: "¿Qué fuente ofrece orientación financiera gratuita a los militares?", options: ["Un anuncio emergente", "Military OneSource", "Una empresa de adelantos de pensión", "Cualquier chatbot de IA"], answer: 1, why: "Military OneSource ofrece orientación financiera gratuita a militares y familiares que califican." },
          { q: "Una IA sugiere una inversión específica. ¿Qué deberías hacer?", options: ["Comprarla ya", "Decirles a tus amigos que la compren", "Tratarla como no verificada y hablar con un profesional calificado", "Meter todos tus ahorros en ella"], answer: 2, why: "Las inversiones son decisiones personales; la IA no es una asesora financiera." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para el éxito financiero y personal",
    questions: [
      { q: "Un asistente de IA puede ayudar con el dinero:", options: ["Guardando tus contraseñas", "Explicando términos y armando una tabla de presupuesto", "Garantizando ganancias", "Presentando tu reclamo al VA por ti"], answer: 1, why: "Explicar y organizar son trabajos seguros y útiles para la IA." },
      { q: "¿Qué es seguro escribir en una IA?", options: ["Tu número del DD-214", "Tu número de tarjeta", "Tu contraseña", "\"Súper de unos $450 al mes\""], answer: 3, why: "Los números redondeados sin datos de cuentas son seguros." },
      { q: "Las respuestas de la IA sobre reglas y tasas de dinero deben:", options: ["Revisarse con una fuente oficial", "Creerse porque suenan seguras", "Publicarse en internet", "Ignorarse por completo"], answer: 0, why: "La IA puede equivocarse o estar desactualizada con las reglas y las tasas." },
      { q: "Un presupuesto es:", options: ["Un préstamo", "Un formulario de impuestos", "Un plan del dinero que entra y sale cada mes", "Una cuenta de banco"], answer: 2, why: "Un presupuesto planea los ingresos y los gastos." },
      { q: "¿Cuál es una necesidad?", options: ["Una suscripción de streaming", "La renta", "Comer fuera", "Un videojuego nuevo"], answer: 1, why: "La renta es un costo que debes pagar para vivir." },
      { q: "Después de dejar el servicio, ¿qué costos podrías pagar tú ahora?", options: ["Ninguno", "Solo boletos de cine", "Solo regalos", "Costos que antes estaban cubiertos o pagados como asignaciones, como la vivienda"], answer: 3, why: "Las asignaciones y los costos cubiertos pueden cambiar o acabarse después del servicio." },
      { q: "¿Dónde deberías confirmar tu propio pago final y tus beneficios?", options: ["Con tu oficina de finanzas, DFAS o el VA", "En una publicación de redes sociales", "Con una suposición de la IA", "Con el mensaje de un desconocido"], answer: 0, why: "Las oficinas oficiales tienen tus números reales." },
      { q: "Después de que la IA arma tu tabla de presupuesto, deberías:", options: ["Confiar en los totales", "Revisar tú las cuentas", "Mandársela a desconocidos", "Agregar tus datos de acceso al banco"], answer: 1, why: "La IA se puede equivocar en las cuentas; revísalas con una calculadora." },
      { q: "Una oferta de \"adelanto de pensión\" es:", options: ["Un programa del VA", "Una devolución de impuestos", "Una suma ahora a cambio de tus pagos futuros, a menudo muy costosa", "Dinero gratis"], answer: 2, why: "La CFPB advierte sobre estas ofertas." },
      { q: "Alguien cobra por adelantado para \"subir tu calificación del VA\". Esto es:", options: ["Normal", "Obligatorio", "Una regla del VA", "Una señal de alerta de estafa"], answer: 3, why: "Los cobros por adelantado y las promesas son señales comunes de estafa." },
      { q: "Un mensaje te apura a pagar con tarjetas de regalo. Tú:", options: ["Te detienes y no pagas", "Pagas rápido", "Compartes tu número de Seguro Social", "Les das un código"], answer: 0, why: "Apurarte y las tarjetas de regalo son señales clásicas de estafa." },
      { q: "Antes de pegar un mensaje sospechoso en una IA, deberías:", options: ["Agregar tu número de cuenta", "Quitar tus datos privados", "Reenviárselo a tus amigos", "Responderle al remitente"], answer: 1, why: "Quita los datos privados y luego pídele a la IA que detecte las alertas." },
      { q: "Una buena meta tiene:", options: ["Ninguna fecha", "Ningún número", "Un número y una fecha", "Solo sentimientos"], answer: 2, why: "Las metas específicas, medibles y con fecha se cumplen." },
      { q: "¿Qué agencia ofrece una hoja gratuita para fijar metas para militares?", options: ["Una empresa de adelantos de pensión", "Una agencia de autos", "Una app de criptomonedas", "La Consumer Financial Protection Bureau"], answer: 3, why: "La página de dinero militar de la CFPB tiene un enlace a una hoja para fijar metas." },
      { q: "Al pedirle a la IA que divida una meta en pasos, incluye:", options: ["La meta, la fecha y lo que realmente puedes destinar a ella", "Tu contraseña del banco", "Tu número de Seguro Social", "Nada"], answer: 0, why: "Los detalles claros dan un plan realista." },
      { q: "Una rutina semanal debe incluir:", options: ["Solo trabajo", "Bloques de metas más tiempo libre y para la familia", "Ningún descanso", "Solo tiempo de pantalla"], answer: 1, why: "Una rutina realista equilibra metas y descanso." },
      { q: "¿Cada cuánto deberías revisar tu rutina?", options: ["Nunca", "Una vez al año", "Cada semana", "Solo cuando algo sale mal"], answer: 2, why: "Una revisión semanal te deja ajustar lo que no funciona." },
      { q: "¿Cuál es el lugar correcto para una pregunta sobre tus pagos del VA?", options: ["Un anuncio emergente", "Un foro cualquiera", "Solo un chatbot de IA", "El VA en va.gov"], answer: 3, why: "El VA es la fuente oficial de los beneficios del VA." },
      { q: "¿Este curso recomienda inversiones?", options: ["No; habla con un profesional calificado", "Sí, criptomonedas", "Sí, cualquier acción", "Sí, adelantos de pensión"], answer: 0, why: "Este curso no da consejos de inversión." },
      { q: "Alguien promete ganancias de inversión grandes y rápidas. Deberías:", options: ["Invertir de inmediato", "Tener cuidado y revisarlo con un profesional calificado", "Darle tus datos de acceso a la cuenta", "Pedir prestado para invertir"], answer: 1, why: "Las promesas grandes y rápidas son una señal de alerta." }
    ]
  }
};

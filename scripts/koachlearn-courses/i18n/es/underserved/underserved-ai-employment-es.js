"use strict";

// Koach Learn course (Spanish translation of underserved/underserved-ai-employment.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "underserved-ai-employment-es",
  lang: "es",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "IA para el empleo y la preparación laboral",
  skills: "Encontrar ayuda gratuita para buscar empleo, Nombrar tus habilidades, Escribir un currículum de una página con IA, Ajustar un currículum a una oferta de empleo, Practicar respuestas para la entrevista, Reconocer estafas de empleo",
  outcome: "usar un asistente de IA gratuito para escribir un currículum de una página ajustado a una oferta de empleo real, practicar respuestas a preguntas comunes de entrevista y reconocer las señales de una estafa de empleo.",
  about: [
    "Buscar trabajo es difícil, sobre todo si hay huecos en tu historial laboral, si casi siempre trabajaste en empleos pagados en efectivo o si has estado cuidando a tu familia. Tienes más habilidades de las que crees, y las herramientas gratuitas te pueden ayudar a mostrarlas.",
    "Vas a encontrar ayuda gratuita para buscar empleo cerca de ti, convertir tu experiencia (pagada y no pagada) en una lista de habilidades, escribir un currículum de una página con IA, ajustarlo a una oferta de empleo real, practicar para la entrevista y aprender a reconocer estafas de empleo.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Busca una oferta de empleo real a la que podrías aplicar. Usa un asistente de IA para escribir un currículum de una página ajustado a esa oferta, sin números privados. Luego pide a la IA que te haga tres preguntas comunes de entrevista, responde cada una en voz alta y pide un consejo para mejorar cada respuesta.",
  chapters: [
    {
      name: "Capítulo 1: Prepararte",
      lessons: [
        {
          title: "Encontrar ayuda gratuita para buscar empleo cerca de ti",
          minutes: 4,
          goal: "Encontrar el American Job Center más cercano y otro lugar gratuito donde te ayuden a buscar empleo.",
          text: [
            "Los American Job Centers son centros públicos de empleo en todo Estados Unidos. Ayudan a quienes buscan trabajo con la búsqueda de empleo, las referencias y la colocación, y muchos también ofrecen computadoras, talleres e información sobre capacitación. Algunos servicios tienen reglas sobre quién califica y pueden variar según el estado.",
            "Puedes encontrar el centro más cercano con el buscador American Job Center Finder en CareerOneStop, un sitio web del Departamento de Trabajo de Estados Unidos, o llamando al 1-877-US-2JOBS.",
            "Las bibliotecas públicas también ayudan con la búsqueda de empleo, la impresión del currículum y tiempo gratis en la computadora. La ayuda de empleo de verdad nunca te pide pagar para conseguir un trabajo."
          ],
          steps: ["Abre el American Job Center Finder en careeronestop.org o llama al 1-877-US-2JOBS.", "Escribe tu código postal o tu ciudad.", "Anota la dirección, el teléfono y el horario del centro más cercano.", "Pregunta en tu biblioteca qué ayuda ofrece para buscar empleo."],
          words: [["American Job Center", "un centro público que ayuda a las personas a encontrar trabajo y capacitación."], ["Referencia", "cuando un centro te envía a un empleo o a un programa que te puede quedar."]],
          sources: [
            { name: "Departamento de Trabajo de EE. UU.: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: buscador de American Job Centers", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Centros públicos de empleo en todo el país", "Búsqueda de empleo, referencias y colocación", "Algunos servicios varían según el estado"] },
            { title: "Encuentra el tuyo", bullets: ["American Job Center Finder en careeronestop.org", "O llama al 1-877-US-2JOBS"] },
            { title: "Más ayuda gratis", bullets: ["Bibliotecas públicas: computadoras, impresiones, ayuda", "La ayuda de verdad nunca te cobra por un empleo"] }
          ],
          tryIt: "Encuentra el American Job Center más cercano y anota su dirección, su teléfono y su horario.",
          youCanNow: "encontrar ayuda oficial y gratuita para buscar empleo cerca de ti."
        },
        {
          title: "Nombrar tus habilidades, pagadas y no pagadas",
          minutes: 5,
          goal: "Convertir tu experiencia de trabajo y de vida en una lista de habilidades laborales.",
          text: [
            "Mucha gente dice \"no tengo habilidades\" cuando sí las tiene. Cuidar niños o a un padre mayor, manejar el presupuesto de la casa, cocinar para un evento de la iglesia, arreglar autos de los vecinos o hacer trabajos pagados en efectivo construyen habilidades reales.",
            "Cuéntale a un asistente de IA lo que has hecho, con palabras sencillas, y pídele que lo convierta en habilidades laborales. Por ejemplo: \"Durante cinco años cuidé a mi abuela, manejé sus medicinas y sus citas, y llevé el presupuesto de la casa. ¿Qué habilidades laborales muestra esto?\"",
            "Elige las habilidades que son ciertas y de las que puedes dar un ejemplo. No te quedes con nada que no puedas respaldar en una entrevista."
          ],
          steps: ["Anota todo lo que has hecho: empleos pagados, trabajos en efectivo, cuidar a alguien, voluntariado, escuela.", "Pide a la IA que diga qué habilidades laborales muestra cada cosa.", "Quédate solo con las habilidades de las que puedes dar un ejemplo real.", "Guarda la lista para tu currículum."],
          words: [["Habilidad", "algo que sabes hacer bien, como organizar horarios, atender clientes o usar una caja registradora."], ["Habilidad transferible", "una habilidad de una parte de tu vida que te ayuda en otro trabajo."]],
          slides: [
            { title: "Tienes más habilidades de las que crees", bullets: ["Cuidar a alguien, manejar el presupuesto, cocinar para eventos", "Trabajos en efectivo, voluntariado, arreglar cosas"] },
            { title: "Pide a la IA que las nombre", bullets: ["Describe lo que hiciste con palabras sencillas", "\"¿Qué habilidades laborales muestra esto?\""] },
            { title: "Que sea verdad", bullets: ["Quédate con las que puedes demostrar con un ejemplo", "Quita lo que no puedas respaldar"] }
          ],
          tryIt: "Anota tres cosas que has hecho (pagadas o no). Pide a un asistente de IA que nombre las habilidades laborales que muestra cada una. Quédate con las que puedes demostrar con un ejemplo real.",
          youCanNow: "convertir tu experiencia pagada y no pagada en una lista honesta de habilidades laborales."
        },
        {
          title: "Escribir un currículum de una página con IA",
          minutes: 6,
          goal: "Escribir un currículum sencillo de una página con un asistente de IA y una herramienta de documentos gratuita.",
          text: [
            "Un currículum es un resumen de una página de tus habilidades y tu experiencia. Uno sencillo y limpio es mejor que uno elegante.",
            "Dale a la IA tu lista de habilidades, tus empleos o actividades con fechas y cualquier capacitación o estudio. Pide un currículum de una página con estas partes: línea de contacto, resumen corto, habilidades, experiencia y estudios o capacitación.",
            "No pongas tu número de Seguro Social, tu fecha de nacimiento ni números de identificación completos en un currículum ni en la IA. Escribe tú tu teléfono y tu correo en el documento final. Copia el resultado en una herramienta gratuita como Google Docs o Microsoft Word en la web y guárdalo como PDF para enviarlo."
          ],
          steps: ["Dale a la IA tus habilidades, empleos o actividades con fechas y tu capacitación.", "Pide un currículum de una página: contacto, resumen, habilidades, experiencia, estudios.", "Cópialo en Google Docs o en Word en la web.", "Agrega tú tu teléfono y correo; deja fuera el Seguro Social y la fecha de nacimiento.", "Léelo en voz alta, corrige errores y guárdalo como PDF."],
          words: [["Currículum", "un resumen de una página de tus habilidades, trabajos y capacitación para los empleadores."], ["PDF", "un tipo de archivo que hace que tu documento se vea igual en cualquier aparato."]],
          slides: [
            { title: "Sencillo y limpio gana", bullets: ["Una página", "Fácil de leer"] },
            { title: "Cinco partes", bullets: ["Línea de contacto y resumen corto", "Habilidades", "Experiencia", "Estudios o capacitación"] },
            { title: "Cuida tus datos", bullets: ["Sin número de Seguro Social ni fecha de nacimiento", "Agrega tú tu teléfono y correo", "Guárdalo como PDF para enviarlo"] }
          ],
          tryIt: "Usa tu lista de habilidades de la lección 2 para pedirle a un asistente de IA un currículum de una página. Cópialo en Google Docs o en Word en la web y léelo en voz alta.",
          youCanNow: "escribir un currículum sencillo de una página con IA y una herramienta de documentos gratuita."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte",
        questions: [
          { q: "¿Cómo puedes encontrar el American Job Center más cercano?", options: ["Con un mensaje de texto de un desconocido", "Con el American Job Center Finder de CareerOneStop o llamando al 1-877-US-2JOBS", "Con un anuncio emergente", "Con un sitio web de paga"], answer: 1, why: "Esas son las formas oficiales de encontrar un centro." },
          { q: "Un sitio web dice que debes pagar una cuota para conseguir un empleo. Esto es:", options: ["Normal", "Obligatorio por ley", "Una señal de alerta; la ayuda de empleo real no te cobra por conseguir trabajo", "Una buena oferta"], answer: 2, why: "Los empleadores honestos y los centros de empleo no te cobran por conseguir trabajo." },
          { q: "Cuidaste a tu abuela durante cinco años. En un currículum esto muestra:", options: ["Habilidades reales como organizar horarios y manejar medicinas", "Nada útil", "Un hueco que debes esconder", "Solo cocinar"], answer: 0, why: "Cuidar a alguien construye habilidades reales y transferibles." },
          { q: "La IA pone una habilidad que en realidad no tienes. Debes:", options: ["Dejarla", "Inventar un ejemplo", "Agregar dos más", "Quitarla"], answer: 3, why: "Quédate solo con lo que puedes respaldar en una entrevista." },
          { q: "¿Qué NO debe ir en tu currículum ni en la IA?", options: ["Tus habilidades", "Tu número de Seguro Social", "Tus puestos de trabajo", "Tu capacitación"], answer: 1, why: "Los números de Seguro Social y las fechas de nacimiento no van en un currículum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aplicar y hacer la entrevista",
      lessons: [
        {
          title: "Ajustar tu currículum a una oferta de empleo",
          minutes: 5,
          goal: "Cambiar tu currículum para que coincida con lo que pide una oferta de empleo real.",
          text: [
            "Los empleadores quieren ver que encajas en su puesto. Una oferta de empleo dice lo que necesitan. Cuando tu currículum usa las mismas habilidades y palabras, es más fácil ver que coinciden.",
            "Pega la oferta de empleo y tu currículum en la IA y pregunta: \"¿Qué habilidades de esta oferta ya muestro? Sugiere cambios a mi currículum para que coincida mejor, usando solo información verdadera.\"",
            "Que sea honesto. Ajustar significa mostrar tus habilidades reales con las palabras del empleador, no agregar cosas que no has hecho."
          ],
          steps: ["Busca una oferta de empleo real a la que podrías aplicar.", "Pega la oferta y tu currículum en la IA (sin números privados).", "Pregunta qué habilidades coinciden y qué cambiar, usando solo información verdadera.", "Actualiza tu currículum y guarda una copia nueva con el nombre de ese empleo."],
          words: [["Oferta de empleo", "un aviso de un empleador que describe un puesto y lo que necesita."], ["Palabras clave", "palabras importantes de la oferta de empleo, como \"atención al cliente\" o \"montacargas\"."]],
          slides: [
            { title: "Muestra que coincides", bullets: ["La oferta dice lo que necesitan", "Usa las mismas habilidades y palabras"] },
            { title: "Pregúntale a la IA", bullets: ["Pega la oferta y tu currículum", "\"¿Qué habilidades ya muestro?\"", "\"Sugiere cambios verdaderos para que coincida mejor.\""] },
            { title: "Sé honesto", bullets: ["Tus habilidades reales, sus palabras", "Guarda una copia con el nombre de cada empleo"] }
          ],
          tryIt: "Busca una oferta de empleo real cerca de ti. Pide a un asistente de IA que la compare con tu currículum y sugiera cambios honestos. Guarda una copia nueva para ese empleo.",
          youCanNow: "ajustar tu currículum a una oferta de empleo real con honestidad."
        },
        {
          title: "Practicar para la entrevista",
          minutes: 5,
          goal: "Practicar respuestas a preguntas comunes de entrevista con un asistente de IA.",
          text: [
            "Las entrevistas se sienten más fáciles con práctica. Un asistente de IA puede hacer el papel del entrevistador. Pide: \"Haz de entrevistador para este empleo. Hazme una pregunta común a la vez y espera mi respuesta. Después de cada respuesta, dame un consejo.\"",
            "Algunas preguntas comunes son: \"Háblame de ti.\" \"¿Por qué quieres este empleo?\" \"Cuéntame de una vez en que resolviste un problema.\" Usa una historia real y corta: qué pasó, qué hiciste y cómo terminó.",
            "Di tus respuestas en voz alta, no solo en tu cabeza. Si tienes un hueco en tu historial laboral, practica una frase corta y honesta sobre eso y luego habla de lo que estás listo para hacer ahora."
          ],
          steps: ["Pide a la IA que haga de entrevistador para tu oferta de empleo.", "Responde una pregunta a la vez, en voz alta, y luego escríbela.", "Usa una historia real y corta: qué pasó, qué hiciste, el resultado.", "Pide un consejo después de cada respuesta y vuelve a intentarlo."],
          words: [["Entrevista", "una reunión en la que un empleador te hace preguntas para decidir si te contrata."], ["Hueco laboral", "un tiempo en el que no tuviste un empleo pagado."]],
          slides: [
            { title: "La IA puede hacer de entrevistador", bullets: ["Una pregunta a la vez", "Un consejo después de cada respuesta"] },
            { title: "Preguntas comunes", bullets: ["\"Háblame de ti.\"", "\"¿Por qué quieres este empleo?\"", "\"Cuéntame de una vez en que resolviste un problema.\""] },
            { title: "Responde con una historia corta", bullets: ["Qué pasó", "Qué hiciste", "Cómo terminó"] },
            { title: "Practica en voz alta", bullets: ["Dilo, no solo lo pienses", "Hueco laboral: una frase honesta y sigue adelante"] }
          ],
          tryIt: "Pide a un asistente de IA que te entreviste para el empleo de la lección 4. Responde dos preguntas en voz alta, escribe tus respuestas y pide un consejo para cada una.",
          youCanNow: "practicar respuestas de entrevista con IA y mejorarlas con sus comentarios."
        },
        {
          title: "Reconocer estafas de empleo",
          minutes: 5,
          goal: "Reconocer las señales de una estafa de empleo y saber qué hacer.",
          text: [
            "Las estafas de empleo buscan a personas que necesitan trabajo. La Comisión Federal de Comercio (FTC, la agencia de Estados Unidos que protege a los consumidores) advierte que los empleadores honestos nunca te van a pedir que pagues para conseguir un empleo.",
            "Otras señales de alerta: te mandan un cheque y te piden que devuelvas parte del dinero o que compres tarjetas de regalo; prometen mucho dinero por poco trabajo; el trabajo es recibir y reenviar paquetes; o la oferta sale de la nada.",
            "Si una oferta se ve demasiado buena, detente. Busca tú la empresa, llama a su número real o pregunta en tu American Job Center. Nunca des tu número de banco o de Seguro Social antes de confirmar que el empleo es real."
          ],
          steps: ["Nunca pagues para conseguir un empleo.", "Nunca deposites un cheque para luego devolver dinero.", "Busca tú la empresa y llama a su número real.", "Pregunta en tu American Job Center si tienes dudas."],
          words: [["Estafa del cheque falso", "un estafador te manda un cheque, te pide que devuelvas una parte, luego el cheque rebota y le debes al banco."], ["FTC", "la Comisión Federal de Comercio, la agencia de Estados Unidos que protege a los consumidores de estafas."]],
          sources: [{ name: "FTC: Estafas de empleo", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Nunca pagues para conseguir un empleo", bullets: ["La FTC: los empleadores honestos nunca te piden pagar", "Nada de cuotas por kits, capacitación o garantías"] },
            { title: "Otras señales de alerta", bullets: ["Devolver dinero de un cheque", "Mucho dinero por poco trabajo", "Reenviar paquetes", "Ofertas que salen de la nada"] },
            { title: "Protégete", bullets: ["Busca tú la empresa", "Llama a su número real", "Pregunta en tu American Job Center"] }
          ],
          tryIt: "Tarea final: con tu currículum ajustado a una oferta real, pide a la IA que te haga tres preguntas de entrevista, responde cada una en voz alta y pide un consejo para mejorar cada respuesta. Revisa si la oferta tiene alguna señal de estafa.",
          youCanNow: "aplicar a un empleo real con un currículum ajustado, practicar la entrevista y reconocer estafas de empleo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aplicar y hacer la entrevista",
        questions: [
          { q: "¿Por qué ajustar tu currículum a una oferta de empleo?", options: ["Para que el empleador vea que encajas en el puesto", "Para hacerlo más largo", "Para agregar habilidades que no tienes", "No sirve"], answer: 0, why: "Ajustarlo muestra que encajas de verdad, con las palabras del empleador." },
          { q: "Al ajustarlo, debes:", options: ["Agregar empleos que nunca tuviste", "Copiar la oferta palabra por palabra", "Usar tus habilidades reales con las palabras del empleador", "Quitar toda tu experiencia"], answer: 2, why: "La meta es ajustarlo con honestidad." },
          { q: "¿Cuál es una buena forma de responder \"Cuéntame de una vez en que resolviste un problema\"?", options: ["\"Nunca tengo problemas.\"", "Una lista larga de empleos", "\"No sé.\"", "Una historia real y corta: qué pasó, qué hiciste y cómo terminó"], answer: 3, why: "Una historia corta muestra tu habilidad con claridad." },
          { q: "Una \"empresa\" te manda un cheque y te pide que compres tarjetas de regalo con parte del dinero. Esto es:", options: ["Una tarea normal del primer día", "Una estafa del cheque falso", "Un bono", "Capacitación"], answer: 1, why: "La FTC la menciona como una estafa de empleo común." },
          { q: "No sabes si una oferta de empleo es real. ¿Qué haces?", options: ["Buscas tú la empresa y llamas a su número real", "Mandas tu número de banco para comprobar", "Pagas la cuota para averiguarlo", "Aceptas de inmediato"], answer: 0, why: "Revisar por tu cuenta te protege." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para el empleo y la preparación laboral",
    questions: [
      { q: "Los American Job Centers ayudan con:", options: ["Préstamos para autos", "Búsqueda de empleo, referencias y colocación", "Solo la declaración de impuestos", "Comprar casas"], answer: 1, why: "Son centros públicos de empleo." },
      { q: "CareerOneStop funciona con:", options: ["Una empresa de videojuegos", "Un banco", "El Departamento de Trabajo de Estados Unidos", "Una red social"], answer: 2, why: "Es un sitio web del Departamento de Trabajo." },
      { q: "¿Qué número de teléfono te ayuda a encontrar centros de empleo?", options: ["1-877-US-2JOBS", "911", "Un número de un anuncio emergente", "El número de tu banco"], answer: 0, why: "El 1-877-US-2JOBS es la línea de ayuda de empleo del Departamento de Trabajo." },
      { q: "¿Qué experiencia puede contar como habilidades laborales?", options: ["Solo trabajos de oficina", "Solo trabajos con diploma", "Nada que no sea pagado", "Cuidar a alguien, voluntariado, trabajos en efectivo y empleos pagados"], answer: 3, why: "El trabajo no pagado e informal construye habilidades reales." },
      { q: "Una habilidad transferible es:", options: ["Una habilidad para mover dinero", "Una habilidad de una parte de la vida que ayuda en otro trabajo", "Un pase de autobús", "Un tipo de currículum"], answer: 1, why: "Se transfiere de un lugar a otro." },
      { q: "¿Qué habilidades deben quedarse en tu lista?", options: ["Las que puedes demostrar con un ejemplo real", "Todas las que sugiera la IA", "Las que suenan impresionantes", "Las del currículum de un amigo"], answer: 0, why: "Tienes que poder respaldarlas." },
      { q: "Un buen currículum es:", options: ["De cinco páginas", "Lleno de imágenes", "De una página, sencillo y limpio", "Escrito a mano"], answer: 2, why: "Corto y claro es lo más fácil para los empleadores." },
      { q: "¿Qué nunca debe ir en un currículum?", options: ["Habilidades", "Experiencia", "Capacitación", "Número de Seguro Social"], answer: 3, why: "Los números privados no van en el currículum." },
      { q: "¿Por qué guardar tu currículum como PDF?", options: ["Se ve igual en cualquier aparato", "Lo hace más largo", "Le agrega color", "Los empleadores pagan por él"], answer: 0, why: "Los PDF mantienen fijo el formato." },
      { q: "¿Dónde puedes escribir un currículum gratis?", options: ["En un estudio de diseño de paga", "En Google Docs o en Word en la web", "En un mensaje de texto", "En una calculadora"], answer: 1, why: "Las dos son herramientas de documentos gratuitas." },
      { q: "Las palabras clave son:", options: ["Contraseñas", "Las llaves de tu casa", "Palabras importantes de la oferta de empleo", "Códigos del banco"], answer: 2, why: "Usarlas muestra que coincides." },
      { q: "Una buena instrucción para ajustar el currículum le pide a la IA:", options: ["Inventar experiencia", "Escribirte un nombre nuevo", "Hacer el currículum de tres páginas", "Sugerir cambios verdaderos para que coincida mejor"], answer: 3, why: "La habilidad es ajustarlo con honestidad." },
      { q: "Aplicas a dos empleos diferentes. Debes:", options: ["Guardar una copia del currículum con el nombre de cada empleo", "Usar un solo currículum para todo sin cambios", "No aplicar", "Copiar cada oferta en tu currículum"], answer: 0, why: "Cada empleo recibe su propia copia ajustada." },
      { q: "¿Cómo te puede ayudar la IA a prepararte para una entrevista?", options: ["Va a la entrevista por ti", "Hace de entrevistador y te da consejos", "Te garantiza el empleo", "Llama al empleador"], answer: 1, why: "Practicar con comentarios da confianza." },
      { q: "Las respuestas de entrevista se practican:", options: ["Solo en tu cabeza", "Nunca", "En voz alta", "Solo por escrito"], answer: 2, why: "Decirlas en voz alta te prepara para la entrevista real." },
      { q: "Una buena historia para responder incluye:", options: ["Solo el problema", "La historia de otra persona", "Nada concreto", "Qué pasó, qué hiciste y cómo terminó"], answer: 3, why: "Esa forma muestra tu habilidad." },
      { q: "Si tienes un hueco laboral, practica:", options: ["Una frase corta y honesta, y luego lo que estás listo para hacer ahora", "Esconderlo", "Una disculpa larga", "Un empleo inventado"], answer: 0, why: "Honesto y corto, y luego mira hacia adelante." },
      { q: "Según la FTC, los empleadores honestos:", options: ["Cobran una cuota pequeña", "Nunca te piden pagar para conseguir un empleo", "Quieren tarjetas de regalo", "Pagan con cheques que debes devolver en parte"], answer: 1, why: "Pagar para conseguir un empleo es señal de estafa." },
      { q: "¿Qué trabajo es una estafa común?", options: ["Cajero en una tienda conocida", "Ayudante de biblioteca", "Recibir y reenviar paquetes desde casa", "Chofer de autobús escolar"], answer: 2, why: "Los trabajos de reenviar paquetes son una estafa conocida." },
      { q: "¿Cuándo debes darle tu número de banco a un nuevo empleador?", options: ["En el primer mensaje", "Para conseguir la entrevista", "Antes de ver una oferta de empleo", "Solo después de confirmar que el empleo es real"], answer: 3, why: "Primero confirma que el empleo es real." }
    ]
  }
};

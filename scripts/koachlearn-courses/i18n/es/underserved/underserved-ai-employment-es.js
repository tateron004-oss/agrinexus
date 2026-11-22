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
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que buscan empleo en comunidades desatendidas, como quienes tienen huecos en su historial de trabajo, quienes casi siempre han tenido trabajos pagados en efectivo, cuidadores que vuelven a trabajar, adultos jóvenes y personas que hablan otro idioma.",
    startingPoint: "Tienen experiencia real de trabajo y de vida, pero quizás no la ven como habilidades laborales. Saben usar el teléfono y quizás un poco la computadora. Pocos tienen un currículum al día o han practicado entrevistas, y a algunos ya les han intentado hacer estafas de empleo.",
    gap: "Los empleadores esperan un currículum que coincida con el empleo y una entrevista con confianza, y las estafas de empleo buscan a quienes necesitan trabajo. Necesitan mostrar sus habilidades reales, usar herramientas gratuitas y ayuda gratuita para buscar empleo, y protegerse mientras buscan.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: un teléfono inteligente o una computadora de la biblioteca o de un centro de empleo",
      "Costo: solo herramientas gratuitas y ayuda gratuita para buscar empleo",
      "Privacidad: nada de número de Seguro Social, fecha de nacimiento ni números de identificación completos en la IA ni en el currículum",
      "Honestidad: cada habilidad del currículum debe ser verdad y tener un ejemplo real"
    ],
    prerequisites: "Ninguno. Quien es nuevo con los asistentes de IA puede tomar primero \"Introducción a la IA y el empoderamiento digital\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Con CareerOneStop o la línea 1-877-US-2JOBS", action: "encontrar el American Job Center más cercano y otro lugar gratuito donde te ayuden a buscar empleo", standard: "anotando su dirección, su teléfono y su horario" },
    { id: "O2", condition: "Con tu experiencia pagada y no pagada", action: "enumerar con un asistente de IA las habilidades laborales que muestra", standard: "dejando solo las habilidades de las que puedes dar un ejemplo real" },
    { id: "O3", condition: "Con tu lista de habilidades y tu historial", action: "escribir un currículum de una página con un asistente de IA y una herramienta de documentos gratuita", standard: "con todas las partes principales y sin número de Seguro Social ni fecha de nacimiento" },
    { id: "O4", condition: "Con una oferta de empleo real", action: "cambiar tu currículum para que coincida con las habilidades y las palabras de la oferta", standard: "usando solo información verdadera y guardando una copia con el nombre de ese empleo" },
    { id: "O5", condition: "Con un asistente de IA que hace de entrevistador", action: "contestar en voz alta preguntas comunes de entrevista con historias cortas y reales", standard: "pidiendo y usando un consejo en cada respuesta" },
    { id: "O6", condition: "Con una oferta o un anuncio de empleo", action: "revisar si tiene señales de una estafa de empleo y confirmar tú mismo la empresa", standard: "antes de compartir cualquier número de banco o de Seguro Social" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepararte",
      lessons: [
        {
          objectives: ["O1"],
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
          youCanNow: "encontrar ayuda oficial y gratuita para buscar empleo cerca de ti.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es CareerOneStop?", options: ["Un sitio web del Departamento de Trabajo de Estados Unidos que te ayuda a encontrar centros de empleo", "Una agencia de empleo de pago", "Una red social", "Un banco para personas que buscan empleo"], answer: 0, why: "CareerOneStop es un sitio del Departamento de Trabajo con el buscador de American Job Centers." },
            { objective: "O1", q: "Necesitas imprimir currículums y usar una computadora gratis. ¿A qué otro lugar puedes ir?", options: ["A un sitio web que cobra por inscribirte", "A tu biblioteca pública", "A la oficina en casa de un desconocido", "A una tienda que cambia cheques"], answer: 1, why: "Las bibliotecas públicas ayudan con la búsqueda de empleo, la impresión y el tiempo de computadora gratis." }
          ]
        },
        {
          objectives: ["O2"],
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
          youCanNow: "convertir tu experiencia pagada y no pagada en una lista honesta de habilidades laborales.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una experiencia no pagada que crea habilidades laborales?", options: ["Ver la televisión", "Dormir hasta tarde", "Cocinar para un evento de la iglesia", "Pasar el rato en redes sociales"], answer: 2, why: "Cocinar para un evento muestra habilidades de planeación, trabajo en equipo y manejo de alimentos." },
            { objective: "O2", q: "La IA dice que cuidar niños muestra \"gestión de proyectos\", pero no puedes dar un ejemplo. ¿Qué haces?", options: ["La dejas; suena bien", "Inventas un ejemplo", "La pones dos veces", "La quitas de tu lista"], answer: 3, why: "Deja solo las habilidades que puedes respaldar con un ejemplo real en una entrevista." }
          ]
        },
        {
          objectives: ["O3"],
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
          youCanNow: "escribir un currículum sencillo de una página con IA y una herramienta de documentos gratuita.",
          quickCheck: [
            { objective: "O3", q: "¿Qué partes van en un currículum sencillo?", options: ["Línea de contacto, resumen, habilidades, experiencia y estudios o capacitación", "Número de Seguro Social y fecha de nacimiento", "Una foto de página completa", "Tus datos del banco"], answer: 0, why: "Estas cinco partes les dan a los empleadores lo que necesitan en una página." },
            { objective: "O3", q: "¿Cuándo debes agregar tu teléfono y tu correo al currículum?", options: ["Los escribes primero en la IA", "Los escribes tú mismo en el documento final", "No los pones", "Los publicas en internet"], answer: 1, why: "Agregarlos tú mismo en el documento deja los datos privados fuera de la IA." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepararte",
        questions: [
          { objective: "O1", q: "¿Cómo puedes encontrar el American Job Center más cercano?", options: ["Con un mensaje de texto de un desconocido", "Con el American Job Center Finder de CareerOneStop o llamando al 1-877-US-2JOBS", "Con un anuncio emergente", "Con un sitio web de paga"], answer: 1, why: "Esas son las formas oficiales de encontrar un centro." },
          { objective: "O1", q: "Un sitio web dice que debes pagar una cuota para conseguir un empleo. Esto es:", options: ["Normal", "Obligatorio por ley", "Una señal de alerta; la ayuda de empleo real no te cobra por conseguir trabajo", "Una buena oferta"], answer: 2, why: "Los empleadores honestos y los centros de empleo no te cobran por conseguir trabajo." },
          { objective: "O2", q: "Cuidaste a tu abuela durante cinco años. En un currículum esto muestra:", options: ["Habilidades reales como organizar horarios y manejar medicinas", "Nada útil", "Un hueco que debes esconder", "Solo cocinar"], answer: 0, why: "Cuidar a alguien construye habilidades reales y transferibles." },
          { objective: "O2", q: "La IA pone una habilidad que en realidad no tienes. Debes:", options: ["Dejarla", "Inventar un ejemplo", "Agregar dos más", "Quitarla"], answer: 3, why: "Quédate solo con lo que puedes respaldar en una entrevista." },
          { objective: "O3", q: "¿Qué NO debe ir en tu currículum ni en la IA?", options: ["Tus habilidades", "Tu número de Seguro Social", "Tus puestos de trabajo", "Tu capacitación"], answer: 1, why: "Los números de Seguro Social y las fechas de nacimiento no van en un currículum." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aplicar y hacer la entrevista",
      lessons: [
        {
          objectives: ["O4"],
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
          youCanNow: "ajustar tu currículum a una oferta de empleo real con honestidad.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa hacer que un currículum \"coincida\" con una oferta?", options: ["Agregar empleos que nunca tuviste", "Usar la misma letra que el empleador", "Mostrar tus habilidades reales con las palabras del empleador", "Hacerlo de dos páginas"], answer: 2, why: "Hacerlo coincidir muestra tus habilidades verdaderas con las palabras que usa la oferta." },
            { objective: "O4", q: "La oferta pide \"servicio al cliente\" y tú atendías a los compradores en un trabajo pagado en efectivo. ¿Qué haces?", options: ["No lo pones", "Dices que administrabas la tienda", "Escribes \"sin experiencia\"", "Lo describes como servicio al cliente, con los detalles verdaderos"], answer: 3, why: "Tu experiencia real va con su palabra clave, así que la dices con honestidad y con sus palabras." }
          ]
        },
        {
          objectives: ["O5"],
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
          youCanNow: "practicar respuestas de entrevista con IA y mejorarlas con sus comentarios.",
          quickCheck: [
            { objective: "O5", q: "¿Qué debes pedirle a la IA después de cada respuesta de práctica?", options: ["Un consejo para mejorarla", "Que escriba tu respuesta por ti", "Que termine la entrevista", "Que pase al siguiente empleo"], answer: 0, why: "Un consejo a la vez te ayuda a mejorar cada respuesta." },
            { objective: "O5", q: "El entrevistador pregunta por dos años sin trabajar en los que cuidaste a tu familia. ¿Qué dices?", options: ["Inventas un empleo", "Una oración corta y honesta, y luego lo que estás listo para hacer ahora", "No contestas", "Hablas de eso diez minutos"], answer: 1, why: "Una respuesta corta y honesta, y luego enfocarte en lo que puedes hacer ahora, es lo más fuerte." }
          ]
        },
        {
          objectives: ["O6"],
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
          youCanNow: "aplicar a un empleo real con un currículum ajustado, practicar la entrevista y reconocer estafas de empleo.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es una señal de una estafa de empleo?", options: ["Un anuncio con la dirección real de una empresa", "Una entrevista en la oficina de la empresa", "Un pago grande prometido por muy poco trabajo", "Un empleo anunciado en tu American Job Center"], answer: 2, why: "Las ofertas que prometen mucho dinero por poco trabajo son una señal común de estafa." },
            { objective: "O6", q: "Un \"empleador\" nuevo te manda un mensaje pidiendo tu número de banco antes de cualquier entrevista. ¿Qué haces?", options: ["Se lo mandas para que te paguen más rápido", "Le mandas la mitad del número", "Le pides a un amigo que mande el suyo", "Te detienes y buscas tú mismo la empresa"], answer: 3, why: "Nunca des tu número de banco antes de confirmar que el empleo es real." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Aplicar y hacer la entrevista",
        questions: [
          { objective: "O4", q: "¿Por qué ajustar tu currículum a una oferta de empleo?", options: ["Para que el empleador vea que encajas en el puesto", "Para hacerlo más largo", "Para agregar habilidades que no tienes", "No sirve"], answer: 0, why: "Ajustarlo muestra que encajas de verdad, con las palabras del empleador." },
          { objective: "O4", q: "Al ajustarlo, debes:", options: ["Agregar empleos que nunca tuviste", "Copiar la oferta palabra por palabra", "Usar tus habilidades reales con las palabras del empleador", "Quitar toda tu experiencia"], answer: 2, why: "La meta es ajustarlo con honestidad." },
          { objective: "O5", q: "¿Cuál es una buena forma de responder \"Cuéntame de una vez en que resolviste un problema\"?", options: ["\"Nunca tengo problemas.\"", "Una lista larga de empleos", "\"No sé.\"", "Una historia real y corta: qué pasó, qué hiciste y cómo terminó"], answer: 3, why: "Una historia corta muestra tu habilidad con claridad." },
          { objective: "O6", q: "Una \"empresa\" te manda un cheque y te pide que compres tarjetas de regalo con parte del dinero. Esto es:", options: ["Una tarea normal del primer día", "Una estafa del cheque falso", "Un bono", "Capacitación"], answer: 1, why: "La FTC la menciona como una estafa de empleo común." },
          { objective: "O6", q: "No sabes si una oferta de empleo es real. ¿Qué haces?", options: ["Buscas tú la empresa y llamas a su número real", "Mandas tu número de banco para comprobar", "Pagas la cuota para averiguarlo", "Aceptas de inmediato"], answer: 0, why: "Revisar por tu cuenta te protege." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para el empleo y la preparación laboral",
    questions: [
      { objective: "O1", q: "Los American Job Centers ayudan con:", options: ["Préstamos para autos", "Búsqueda de empleo, referencias y colocación", "Solo la declaración de impuestos", "Comprar casas"], answer: 1, why: "Son centros públicos de empleo." },
      { objective: "O1", q: "CareerOneStop funciona con:", options: ["Una empresa de videojuegos", "Un banco", "El Departamento de Trabajo de Estados Unidos", "Una red social"], answer: 2, why: "Es un sitio web del Departamento de Trabajo." },
      { objective: "O1", q: "¿Qué número de teléfono te ayuda a encontrar centros de empleo?", options: ["1-877-US-2JOBS", "911", "Un número de un anuncio emergente", "El número de tu banco"], answer: 0, why: "El 1-877-US-2JOBS es la línea de ayuda de empleo del Departamento de Trabajo." },
      { objective: "O2", q: "¿Qué experiencia puede contar como habilidades laborales?", options: ["Solo trabajos de oficina", "Solo trabajos con diploma", "Nada que no sea pagado", "Cuidar a alguien, voluntariado, trabajos en efectivo y empleos pagados"], answer: 3, why: "El trabajo no pagado e informal construye habilidades reales." },
      { objective: "O2", q: "Una habilidad transferible es:", options: ["Una habilidad para mover dinero", "Una habilidad de una parte de la vida que ayuda en otro trabajo", "Un pase de autobús", "Un tipo de currículum"], answer: 1, why: "Se transfiere de un lugar a otro." },
      { objective: "O2", q: "¿Qué habilidades deben quedarse en tu lista?", options: ["Las que puedes demostrar con un ejemplo real", "Todas las que sugiera la IA", "Las que suenan impresionantes", "Las del currículum de un amigo"], answer: 0, why: "Tienes que poder respaldarlas." },
      { objective: "O3", q: "Un buen currículum es:", options: ["De cinco páginas", "Lleno de imágenes", "De una página, sencillo y limpio", "Escrito a mano"], answer: 2, why: "Corto y claro es lo más fácil para los empleadores." },
      { objective: "O3", q: "¿Qué nunca debe ir en un currículum?", options: ["Habilidades", "Experiencia", "Capacitación", "Número de Seguro Social"], answer: 3, why: "Los números privados no van en el currículum." },
      { objective: "O3", q: "¿Por qué guardar tu currículum como PDF?", options: ["Se ve igual en cualquier aparato", "Lo hace más largo", "Le agrega color", "Los empleadores pagan por él"], answer: 0, why: "Los PDF mantienen fijo el formato." },
      { objective: "O3", q: "¿Dónde puedes escribir un currículum gratis?", options: ["En un estudio de diseño de paga", "En Google Docs o en Word en la web", "En un mensaje de texto", "En una calculadora"], answer: 1, why: "Las dos son herramientas de documentos gratuitas." },
      { objective: "O4", q: "Las palabras clave son:", options: ["Contraseñas", "Las llaves de tu casa", "Palabras importantes de la oferta de empleo", "Códigos del banco"], answer: 2, why: "Usarlas muestra que coincides." },
      { objective: "O4", q: "Una buena instrucción para ajustar el currículum le pide a la IA:", options: ["Inventar experiencia", "Escribirte un nombre nuevo", "Hacer el currículum de tres páginas", "Sugerir cambios verdaderos para que coincida mejor"], answer: 3, why: "La habilidad es ajustarlo con honestidad." },
      { objective: "O4", q: "Aplicas a dos empleos diferentes. Debes:", options: ["Guardar una copia del currículum con el nombre de cada empleo", "Usar un solo currículum para todo sin cambios", "No aplicar", "Copiar cada oferta en tu currículum"], answer: 0, why: "Cada empleo recibe su propia copia ajustada." },
      { objective: "O5", q: "¿Cómo te puede ayudar la IA a prepararte para una entrevista?", options: ["Va a la entrevista por ti", "Hace de entrevistador y te da consejos", "Te garantiza el empleo", "Llama al empleador"], answer: 1, why: "Practicar con comentarios da confianza." },
      { objective: "O5", q: "Las respuestas de entrevista se practican:", options: ["Solo en tu cabeza", "Nunca", "En voz alta", "Solo por escrito"], answer: 2, why: "Decirlas en voz alta te prepara para la entrevista real." },
      { objective: "O5", q: "Una buena historia para responder incluye:", options: ["Solo el problema", "La historia de otra persona", "Nada concreto", "Qué pasó, qué hiciste y cómo terminó"], answer: 3, why: "Esa forma muestra tu habilidad." },
      { objective: "O5", q: "Si tienes un hueco laboral, practica:", options: ["Una frase corta y honesta, y luego lo que estás listo para hacer ahora", "Esconderlo", "Una disculpa larga", "Un empleo inventado"], answer: 0, why: "Honesto y corto, y luego mira hacia adelante." },
      { objective: "O6", q: "Según la FTC, los empleadores honestos:", options: ["Cobran una cuota pequeña", "Nunca te piden pagar para conseguir un empleo", "Quieren tarjetas de regalo", "Pagan con cheques que debes devolver en parte"], answer: 1, why: "Pagar para conseguir un empleo es señal de estafa." },
      { objective: "O6", q: "¿Qué trabajo es una estafa común?", options: ["Cajero en una tienda conocida", "Ayudante de biblioteca", "Recibir y reenviar paquetes desde casa", "Chofer de autobús escolar"], answer: 2, why: "Los trabajos de reenviar paquetes son una estafa conocida." },
      { objective: "O6", q: "¿Cuándo debes darle tu número de banco a un nuevo empleador?", options: ["En el primer mensaje", "Para conseguir la entrevista", "Antes de ver una oferta de empleo", "Solo después de confirmar que el empleo es real"], answer: 3, why: "Primero confirma que el empleo es real." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      7,
      10,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Currículum de una página",
        objective: "O3",
        notYet: "Tiene más de una página, le faltan partes o incluye números privados.",
        meets: "Una página con línea de contacto, resumen, habilidades, experiencia y estudios, sin números privados.",
        exceeds: "Lo leyó en voz alta, corrigió los errores y lo guardó como PDF."
      },
      {
        name: "Coincide con la oferta",
        objective: "O4",
        notYet: "El currículum no usa las habilidades ni las palabras de la oferta, o agrega cosas falsas.",
        meets: "Usa las habilidades clave de la oferta en frases verdaderas.",
        exceeds: "Lo guardó como una copia aparte con el nombre de ese empleo."
      },
      {
        name: "Habilidades reales",
        objective: "O2",
        notYet: "Pone habilidades de las que no puede dar un ejemplo.",
        meets: "Cada habilidad tiene un ejemplo real de un trabajo pagado o no pagado.",
        exceeds: "Incluye habilidades no pagadas, como cuidar a la familia o el voluntariado, con ejemplos claros."
      },
      {
        name: "Respuestas de entrevista",
        objective: "O5",
        notYet: "Menos de tres respuestas, o no las dijo en voz alta.",
        meets: "Tres preguntas contestadas en voz alta, pidiendo un consejo en cada una.",
        exceeds: "Volvió a intentar cada respuesta usando el consejo, con una historia corta y real."
      },
      {
        name: "Revisión de estafas",
        objective: "O6",
        notYet: "No revisó si el anuncio tenía señales de alerta.",
        meets: "Revisó si el anuncio tenía señales de estafa y buscó la empresa.",
        exceeds: "Puede decir qué señales de alerta había y cuáles no."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que solicitan al menos un empleo dentro de 30 días (encuesta de seguimiento)",
      "Personas que consiguen una entrevista o un empleo dentro de 90 días",
      "Personas que visitan un American Job Center o dicen haber evitado una estafa de empleo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono inteligente con internet, o una computadora de la biblioteca o de un centro de empleo",
      "Un asistente de IA gratuito: Microsoft Copilot, ChatGPT o Google Gemini",
      "Google Docs o Word en la web (gratis) para escribir y guardar el currículum",
      "Una oferta de empleo real que la persona podría solicitar",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Ayuda primero a encontrar las habilidades no pagadas; muchos creen que no tienen ninguna.",
      "Revisa cada prompt y cada currículum para que no tengan números de Seguro Social, fechas de nacimiento ni otros números privados.",
      "Forma parejas para practicar la entrevista, para que también contesten en voz alta a una persona real.",
      "Trabaja con el American Job Center local e invita a alguien de su personal si puedes.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

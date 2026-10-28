"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-memory-support.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-memory-support-es",
  lang: "es",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "IA para apoyar la memoria",
  skills: "Guardar recordatorios y notas con la voz, Usar fotos como ayuda para la memoria, Hacer listas de control con IA, Resumir citas y llamadas, Crear una rutina diaria para la memoria",
  outcome: "armar en tu teléfono un kit sencillo para la memoria: recordatorios de voz, una lista de notas, fotos que te ayudan a recordar y una lista de control hecha con IA, y usarlo en una rutina diaria.",
  about: [
    "Todo el mundo olvida cosas: dónde dejó el auto, si apagó la estufa, qué dijo el médico. Este curso es para personas mayores, y para los familiares que las ayudan, que quieren herramientas sencillas para recordar con más facilidad las cosas de todos los días.",
    "Usarás el asistente de voz de tu teléfono, las notas, la cámara y un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini para guardar recordatorios, llevar listas, hacer listas de control y resumir lo que se dijo en las citas.",
    "Estas herramientas apoyan la memoria; no diagnostican ni tratan nada. Si a ti o a tu familia les preocupan los cambios en la memoria, habla con tu médico. Cada lección dura unos cinco minutos. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Arma tu kit para la memoria: pon dos recordatorios de voz que se repitan, empieza una nota “Cosas para recordar”, toma una foto que te ayude a recordar (como dónde estacionaste o una etiqueta que necesitas), pídele a la IA una lista de control de “antes de salir de casa” y úsalo todo durante un día completo.",
  chapters: [
    {
      name: "Capítulo 1: Guardar lo que necesitas recordar",
      lessons: [
        {
          title: "Recordatorios de voz en el momento en que lo piensas",
          minutes: 5,
          goal: "Guardar un recordatorio con la voz antes de que se te olvide.",
          text: [
            "El mejor momento para guardar un recordatorio es justo cuando lo piensas. El asistente de voz de tu teléfono (Siri en iPhone, Google Assistant o Gemini en Android) lo hace rápido: sin escribir y sin buscar un lápiz.",
            "Di: “Recuérdame llamar a la farmacia mañana a las 10 de la mañana.” “Recuérdame regar las plantas todos los lunes.” “Recuérdame llevar el paraguas cuando salga de casa” funciona en algunos teléfonos, que pueden avisarte según el lugar donde estás.",
            "Cuando aparezca el recordatorio, hazlo o tócalo para posponerlo. Márcalo como hecho cuando termines, para que tu lista quede clara."
          ],
          steps: ["Activa tu asistente de voz.", "Di “Recuérdame...” con qué y cuándo.", "Usa “todos los” o “cada” para los recordatorios que se repiten.", "Cuando aparezca, hazlo o posponlo.", "Márcalo como hecho."],
          words: [["Posponer", "retrasar un recordatorio para que vuelva un poco más tarde."], ["Recordatorio repetido", "un recordatorio que vuelve según un horario, como todos los lunes."]],
          slides: [
            { title: "Guárdalo al instante", bullets: ["En el momento en que lo piensas", "Sin escribir, sin lápiz"] },
            { title: "Dilo", bullets: ["“Recuérdame llamar a la farmacia a las 10.”", "“Recuérdame regar las plantas todos los lunes.”"] },
            { title: "Cuando aparezca", bullets: ["Hazlo o posponlo", "Márcalo como hecho"] }
          ],
          tryIt: "Pon dos recordatorios con la voz: uno para mañana y otro que se repita cada semana.",
          youCanNow: "guardar con la voz recordatorios de una sola vez y recordatorios que se repiten."
        },
        {
          title: "Una lista de notas para las cosas que hay que recordar",
          minutes: 5,
          goal: "Tener en tu teléfono una nota “Cosas para recordar” y agregarle cosas con la voz.",
          text: [
            "Algunas cosas no van atadas a una hora: el nombre del vecino nuevo, el libro que te recomendó una amiga, dónde pusiste la llave de repuesto. Esas cosas van en una nota.",
            "Abre la aplicación de Notas (o Google Keep en muchos teléfonos Android) y crea una nota llamada “Cosas para recordar”. Fíjala arriba si tu aplicación lo permite. Puedes agregarle cosas escribiendo o tocando el micrófono del teclado y hablando.",
            "Mantén la nota sencilla: una línea por cosa, lo más nuevo arriba. Nunca guardes contraseñas, números de banco ni números de Social Security (el Seguro Social de Estados Unidos) en una nota común."
          ],
          steps: ["Abre Notas o Google Keep.", "Crea una nota llamada “Cosas para recordar”.", "Fíjala arriba si puedes.", "Agrega cosas escribiendo o con el micrófono del teclado.", "No pongas números privados en ella."],
          words: [["Aplicación de Notas", "una aplicación para escribir y guardar notas en tu teléfono."], ["Fijar", "mantener algo arriba de una lista para que sea fácil de encontrar."]],
          slides: [
            { title: "¿No va atado a una hora?", bullets: ["El nombre de un vecino", "Un libro para leer", "Dónde está la llave de repuesto"] },
            { title: "Haz tu nota", bullets: ["Notas o Google Keep", "Llámala “Cosas para recordar”", "Fíjala arriba"] },
            { title: "Sencilla y segura", bullets: ["Una línea por cosa", "Usa el micrófono del teclado", "Nada de contraseñas ni números de banco"] }
          ],
          tryIt: "Crea una nota “Cosas para recordar” y agrégale tres cosas, al menos una hablando con el micrófono del teclado.",
          youCanNow: "llevar una lista de notas con las cosas que quieres recordar y agregarle cosas con la voz."
        },
        {
          title: "Fotos que te ayudan a recordar",
          minutes: 4,
          goal: "Usar tu cámara para recordar dónde están las cosas y qué dicen.",
          text: [
            "Una foto rápida puede recordar las cosas por ti. Tómale una foto al letrero o al número del piso del estacionamiento, al interior del refrigerador antes de ir de compras, a la etiqueta de una bombilla que tienes que cambiar o a las perillas de la estufa apagadas antes de salir.",
            "Para encontrarlas después, crea un álbum llamado “Ayudas para la memoria” en tu aplicación de fotos, o simplemente mira tus fotos más recientes. Bórralas cuando ya no las necesites.",
            "No fotografíes documentos privados como tarjetas bancarias o tu tarjeta de Social Security para esto; si pierdes el teléfono, esas fotos podrían usarse mal."
          ],
          steps: ["Toma una foto rápida de lo que quieres recordar.", "Mira las fotos recientes, o ten un álbum “Ayudas para la memoria”.", "Borra las fotos de memoria cuando termines.", "No fotografíes tarjetas ni documentos privados."],
          words: [["Ayuda para la memoria", "cualquier cosa que te ayuda a recordar, como una nota, una alarma o una foto."]],
          slides: [
            { title: "Deja que la cámara recuerde", bullets: ["Dónde estacionaste", "El interior del refrigerador", "Una etiqueta que necesitas", "Las perillas de la estufa apagadas"] },
            { title: "Encuéntralas después", bullets: ["Mira las fotos recientes", "O un álbum “Ayudas para la memoria”", "Bórralas cuando termines"] },
            { title: "Con seguridad", bullets: ["Nada de fotos de tarjetas bancarias ni de identificación"] }
          ],
          tryIt: "Toma hoy una foto que te ayude a recordar, como el interior de tu refrigerador o dónde estacionaste. Vuelve a encontrarla en tus fotos una hora después.",
          youCanNow: "usar fotos para recordar dónde están las cosas y qué dicen."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Guardar lo que necesitas recordar",
        questions: [
          { q: "¿Cuál es el mejor momento para guardar un recordatorio?", options: ["Solo los domingos", "La semana que viene", "En el momento en que lo piensas", "Nunca"], answer: 2, why: "Guardarlo al instante evita que se te olvide." },
          { q: "¿Qué pedido de voz crea un recordatorio semanal?", options: ["“Recuérdame regar las plantas todos los lunes.”", "“Plantas.”", "“Lunes.”", "“Agua.”"], answer: 0, why: "“Todos los” hace que se repita." },
          { q: "¿Dónde debe ir el nombre de un vecino nuevo?", options: ["En un mensaje a desconocidos", "En un campo de contraseña", "En ninguna parte", "En tu nota “Cosas para recordar”"], answer: 3, why: "Las notas guardan cosas que no van atadas a una hora." },
          { q: "¿Qué NUNCA debe ir en una nota común?", options: ["El título de un libro", "Contraseñas y números de banco", "El nombre de un vecino", "Una receta"], answer: 1, why: "Las notas comunes no son seguras para los números privados." },
          { q: "¿Cuál es una buena foto para ayudar a la memoria?", options: ["Tu tarjeta bancaria", "El letrero del piso del estacionamiento", "Tu tarjeta de Social Security", "Tu contraseña"], answer: 1, why: "Las tarjetas privadas no se deben fotografiar para recordatorios." }
        ]
      }
    },
    {
      name: "Capítulo 2: Rutinas y ayudantes de IA",
      lessons: [
        {
          title: "Listas de control hechas con IA",
          minutes: 5,
          goal: "Pedirle a la IA una lista de control corta para una tarea que haces seguido.",
          text: [
            "Las listas de control ayudan a todos, desde los pilotos hasta los médicos. Un asistente de IA puede hacer una para cualquier tarea de rutina: salir de casa, prepararte para un viaje o la noche antes de una cita.",
            "Pide: “Hazme una lista de control corta para salir de casa: no más de ocho cosas, con palabras sencillas.” Luego ajústala a tu casa: “Agrega: revisar la puerta de atrás. Quita: darle de comer al gato.”",
            "Imprímela y pégala junto a la puerta, o guárdala en tus Notas. Una lista de control solo ayuda si está donde la vas a ver en el momento justo."
          ],
          steps: ["Elige una tarea que haces seguido.", "Pídele a la IA una lista de control corta con palabras sencillas.", "Agrega o quita cosas para que se ajuste a tu vida.", "Ponla donde la vas a ver en el momento justo."],
          words: [["Lista de control", "una lista de pasos que vas marcando uno por uno."]],
          slides: [
            { title: "Las listas de control ayudan a todos", bullets: ["Salir de casa", "Prepararte para un viaje", "La noche antes de una cita"] },
            { title: "Pídesela a la IA", bullets: ["“Una lista de control corta, no más de ocho cosas”", "Luego agrega o quita cosas"] },
            { title: "Ponla en el lugar justo", bullets: ["Pégala junto a la puerta", "O guárdala en Notas"] }
          ],
          tryIt: "Pídele a un asistente de IA una lista de control de “antes de salir de casa” de no más de ocho cosas. Cámbiala para que se ajuste a tu casa e imprímela o guárdala.",
          youCanNow: "hacer con IA una lista de control personal y ponerla donde te ayuda."
        },
        {
          title: "Recordar lo que se dijo en las citas",
          minutes: 5,
          goal: "Anotar los puntos clave de una cita o una llamada y convertirlos en un resumen claro.",
          text: [
            "Es fácil olvidar lo que dijo el médico, el abogado o el técnico. Lleva una lista escrita de preguntas y anota las respuestas, o pídele a un familiar que te acompañe y tome notas.",
            "Después, escribe tus notas sueltas en un asistente de IA, sin nombres, fechas de nacimiento ni números de cuenta, y pide: “Convierte estas notas en un resumen corto con una lista de lo que tengo que hacer.” Guarda el resumen en Notas.",
            "Si algo no está claro, llama a la oficina para confirmarlo. Muchos consultorios médicos también publican un resumen de la visita en su portal del paciente. Algunas personas preguntan si pueden grabar la visita con su teléfono; pide siempre permiso primero."
          ],
          steps: ["Lleva una lista de preguntas y anota las respuestas.", "Lleva a un familiar si puedes.", "Escribe tus notas sueltas en la IA sin datos privados.", "Pide un resumen y una lista de tareas.", "Confirma con la oficina lo que no esté claro."],
          words: [["Resumen", "una versión corta de los puntos principales."], ["Portal del paciente", "un sitio web o aplicación donde el consultorio de tu médico comparte las notas de las visitas y los resultados."]],
          slides: [
            { title: "Anótalo en el momento", bullets: ["Lleva preguntas, anota respuestas", "Lleva a un familiar"] },
            { title: "Deja que la IA lo ordene", bullets: ["Escribe las notas sin datos privados", "Pide un resumen y una lista de tareas", "Guárdalo en Notas"] },
            { title: "Confirma", bullets: ["Llama a la oficina si algo no está claro", "Revisa el portal del paciente", "Pide permiso antes de grabar a alguien"] }
          ],
          tryIt: "Escribe tres notas sueltas de una llamada o cita reciente (sin nombres ni números). Pídele a un asistente de IA que las convierta en un resumen corto con una lista de tareas, y guárdalo.",
          youCanNow: "anotar y resumir lo que se dijo en una cita o una llamada."
        },
        {
          title: "Una rutina diaria para la memoria",
          minutes: 5,
          goal: "Juntar tus herramientas para la memoria en una rutina diaria sencilla.",
          text: [
            "Las herramientas funcionan mejor como costumbre. Una rutina diaria sencilla: por la mañana, mira los recordatorios y el calendario del día. Durante el día, guarda recordatorios y notas en el momento en que los piensas. Antes de dormir, revisa los recordatorios de mañana y tu nota “Cosas para recordar”.",
            "Deja las cosas en el mismo lugar todos los días: llaves, lentes y teléfono en un mismo plato junto a la puerta. Un localizador en tus llaves (como un Apple AirTag o un Tile) puede ayudarte a encontrarlas con el teléfono.",
            "Sé amable contigo mismo. Olvidar algunas cosas es normal. Si tú o tu familia notan cambios en la memoria que les preocupan, como perderte en lugares conocidos o tener problemas con las tareas de todos los días, habla con tu médico. MedlinePlus (medlineplus.gov), el sitio gratuito de información de salud de la Biblioteca Nacional de Medicina de Estados Unidos, tiene información confiable sobre la memoria, también en español."
          ],
          steps: ["Mañana: revisa los recordatorios y el calendario.", "Durante el día: guarda recordatorios y notas al instante.", "Noche: revisa lo de mañana y tu nota.", "Deja las llaves, los lentes y el teléfono en un solo lugar.", "Habla con tu médico sobre los cambios que te preocupen."],
          words: [["Localizador", "un aparato pequeño que se pone en las llaves o en un bolso y que tu teléfono puede encontrar."]],
          slides: [
            { title: "Una rutina diaria sencilla", bullets: ["Mañana: revisa recordatorios y calendario", "Durante el día: guárdalo al instante", "Noche: revisa lo de mañana"] },
            { title: "El mismo lugar todos los días", bullets: ["Llaves, lentes y teléfono en un mismo plato", "Un localizador puede ayudarte a encontrar las llaves"] },
            { title: "Sé amable contigo mismo", bullets: ["Olvidar algunas cosas es normal", "¿Te preocupa? Habla con tu médico", "MedlinePlus tiene información confiable"] }
          ],
          sources: [{ name: "MedlinePlus en español (Biblioteca Nacional de Medicina)", url: "https://medlineplus.gov/" }],
          tryIt: "Tarea final: arma tu kit para la memoria (dos recordatorios de voz que se repitan, una nota “Cosas para recordar”, una foto que te ayude a recordar y una lista de control de “antes de salir de casa” hecha con IA) y úsalo todo durante un día completo, con la revisión de la mañana y de la noche.",
          youCanNow: "usar recordatorios, notas, fotos, listas de control y resúmenes de IA en una rutina diaria que apoye tu memoria."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Rutinas y ayudantes de IA",
        questions: [
          { q: "¿Dónde debe ir una lista de control para “salir de casa”?", options: ["En ninguna parte", "En un cajón", "En el maletero del auto", "Junto a la puerta, donde la vas a ver"], answer: 3, why: "Las listas de control ayudan cuando las ves en el momento justo." },
          { q: "Antes de escribir en la IA las notas de una cita, quita:", options: ["Los nombres, las fechas de nacimiento y los números de cuenta", "Las tareas pendientes", "La palabra “médico”", "Nada"], answer: 0, why: "Los datos privados no van a la IA." },
          { q: "Antes de grabar una conversación en una cita, debes:", options: ["Grabar a escondidas", "Esconder el teléfono", "Pedir permiso", "Publicarla en internet"], answer: 2, why: "Pide siempre permiso antes de grabar a alguien." },
          { q: "Una buena costumbre por la noche es:", options: ["Compartir tus contraseñas", "Borrar todos los recordatorios", "Apagar el teléfono una semana", "Revisar los recordatorios de mañana y tu nota"], answer: 3, why: "Te prepara para el día siguiente." },
          { q: "Notas que te perdiste en un lugar conocido. ¿Qué debes hacer?", options: ["No hacerle caso", "Pedirle un diagnóstico a la IA", "Hablar con tu médico", "Comprar un suplemento en internet"], answer: 2, why: "Los cambios en la memoria que preocupan los debe revisar un médico." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para apoyar la memoria",
    questions: [
      { q: "¿Por qué guardar un recordatorio al instante?", options: ["Ahorra batería", "Para que no se te olvide", "Es obligatorio", "Cuesta menos"], answer: 1, why: "El momento pasa rápido." },
      { q: "“Posponer” significa:", options: ["Retrasar un poco el recordatorio", "Borrarlo", "Compartirlo", "Imprimirlo"], answer: 0, why: "Posponer hace que vuelva más tarde." },
      { q: "¿Qué palabras hacen que un recordatorio se repita?", options: ["“todos los”", "“tal vez”", "“una vez”", "“nunca”"], answer: 0, why: "“Todos los lunes” se repite cada semana." },
      { q: "Cuando terminas un recordatorio, debes:", options: ["Dejarlo para siempre", "Marcarlo como hecho", "Ponerlo otra vez", "Borrar la aplicación"], answer: 1, why: "Marcarlo como hecho mantiene clara tu lista." },
      { q: "Una lista de notas sirve mejor para:", options: ["Números de banco", "Contraseñas", "Cosas que no van atadas a una hora", "Números de Social Security"], answer: 2, why: "Las notas guardan nombres, ideas y lugares." },
      { q: "Fijar una nota:", options: ["Bloquea tu teléfono", "La borra", "La comparte con todos", "La mantiene arriba"], answer: 3, why: "Las notas fijadas son fáciles de encontrar." },
      { q: "Para agregar algo a una nota sin escribir, usa:", options: ["El botón del volumen", "La cámara", "El micrófono del teclado", "La linterna"], answer: 2, why: "El micrófono escribe lo que dices." },
      { q: "Una buena foto para ayudar a la memoria es:", options: ["El interior de tu refrigerador antes de ir de compras", "Tu tarjeta bancaria", "La página de tu pasaporte", "Tu PIN"], answer: 0, why: "Los documentos privados no se deben fotografiar para recordatorios." },
      { q: "Cuando ya no necesitas las fotos de memoria:", options: ["Envíalas por correo a desconocidos", "Publícalas", "Imprímelas todas", "Bórralas"], answer: 3, why: "Borrarlas mantiene tus fotos ordenadas y privadas." },
      { q: "Una lista de control es:", options: ["Un estado de cuenta bancario", "Una lista de pasos que vas marcando", "Una contraseña", "Un teléfono"], answer: 1, why: "Las listas de control guían las rutinas." },
      { q: "Un buen pedido de lista de control a la IA es:", options: ["“lista”", "“Una lista de control corta para salir de casa, no más de ocho cosas, con palabras sencillas.”", "“cosas”", "“ayuda”"], answer: 1, why: "Dice la tarea, el largo y el estilo." },
      { q: "Después de que la IA hace una lista de control, debes:", options: ["Compartir tu contraseña", "Usarla sin cambios pase lo que pase", "Borrarla", "Ajustarla a tu casa"], answer: 3, why: "Tu casa es única." },
      { q: "En una cita médica, un familiar puede ayudar:", options: ["Tomando notas", "Respondiendo por ti sin preguntarte", "Compartiendo tus contraseñas", "Grabando a escondidas"], answer: 0, why: "Una segunda persona que escucha capta más." },
      { q: "La IA puede convertir notas sueltas en:", options: ["Una receta médica", "Un diagnóstico", "Un resumen corto con una lista de tareas", "Una sentencia judicial"], answer: 2, why: "Resumir es uno de sus puntos fuertes; diagnosticar no." },
      { q: "Un portal del paciente es:", options: ["Un banco", "La puerta de un hospital", "Una parada de autobús", "Un sitio web o aplicación donde tu médico comparte las notas de las visitas"], answer: 3, why: "Los portales comparten resúmenes de visitas y resultados." },
      { q: "Si un resumen no está claro, debes:", options: ["No hacerle caso", "Adivinar", "Llamar a la oficina para confirmar", "Preguntarle a un desconocido en internet"], answer: 2, why: "La oficina es la fuente confiable." },
      { q: "La revisión de la mañana incluye:", options: ["Cambiar las contraseñas", "Los recordatorios y el calendario del día", "Borrar las notas", "Comprar un teléfono nuevo"], answer: 1, why: "Prepara tu día." },
      { q: "Dejar las llaves, los lentes y el teléfono en un mismo plato ayuda porque:", options: ["Siempre sabes dónde están", "Se ve bonito", "Los carga", "Es obligatorio"], answer: 0, why: "Mismo lugar, menos búsqueda." },
      { q: "Un localizador en las llaves te deja:", options: ["Encontrarlas con tu teléfono", "Abrir cualquier puerta", "Arrancar el auto a distancia", "Pagar cuentas"], answer: 0, why: "Tu teléfono puede ubicar el localizador." },
      { q: "¿Dónde puedes encontrar información confiable sobre la memoria?", options: ["En un anuncio emergente", "En MedlinePlus (medlineplus.gov) y con tu médico", "Con un vendedor de suplementos", "En un rumor de redes sociales"], answer: 1, why: "MedlinePlus es un sitio de salud gratuito del gobierno." }
    ]
  }
};

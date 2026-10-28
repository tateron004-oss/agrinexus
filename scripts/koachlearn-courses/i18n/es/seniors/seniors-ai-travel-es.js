"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-travel.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// Facts as in the English course (tsa.gov/real-id, checked 27 October 2026).

module.exports = {
  id: "seniors-ai-travel-es",
  lang: "es",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "La IA como compañera de viaje",
  skills: "Planear el itinerario de un viaje con IA, Comprobar datos del viaje en sitios oficiales, Hacer una lista de equipaje, Usar aplicaciones de mapas y de traducción, Viajar seguro y conectado",
  outcome: "usar un asistente de IA para planear un viaje corto a un ritmo cómodo, comprobar los datos importantes en sitios oficiales, hacer una lista de equipaje y usar las herramientas de mapas y traducción de tu teléfono durante el viaje.",
  about: [
    "Este curso es para personas mayores que quieren viajar, ya sea para visitar a los nietos al otro lado del país, hacer una excursión en autobús o por fin conocer un lugar con el que siempre han soñado.",
    "Usarás un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini para planear un viaje tranquilo que se ajuste a tu energía y a tus necesidades, y luego comprobarás en sitios web oficiales los datos que importan (las reglas de identificación, los horarios, los precios). También usarás en tu teléfono los mapas, la traducción y la opción de compartir tu ubicación.",
    "Cada lección dura unos cinco minutos. Con las tareas “Pruébalo ahora” armas un plan real para un viaje que te gustaría hacer. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Planea un viaje de tres días con un asistente de IA: un plan día por día a un ritmo cómodo y con tiempo para descansar, una lista de equipaje que incluya tus medicinas y tu identificación, y tres datos que comprobaste en sitios web oficiales (como la identificación que necesitas para volar y el horario de un lugar que vas a visitar). Comparte el plan con un familiar.",
  chapters: [
    {
      name: "Capítulo 1: Planear tu viaje",
      lessons: [
        {
          title: "Planear un itinerario tranquilo con IA",
          minutes: 5,
          goal: "Pedirle a un asistente de IA un plan de viaje día por día que se ajuste a tu ritmo.",
          text: [
            "Un itinerario es un plan de viaje día por día. Un asistente de IA puede escribir un borrador en segundos y cambiarlo todas las veces que quieras.",
            "Dile adónde, cuándo, por cuánto tiempo, quiénes van y qué necesitan: “Planea un viaje tranquilo de tres días a Savannah, Georgia, en abril, para dos personas de más de 70 años. Nos gustan la historia y los jardines, caminamos despacio y queremos descansar todas las tardes. No más de dos actividades al día.”",
            "Pide cambios hasta que te quede bien: “Agrega un lugar para sentarnos a almorzar cerca de cada actividad de la mañana.” “¿Qué lugares tienen ascensor o son fáciles para alguien con bastón?”"
          ],
          steps: ["Di adónde, cuándo y por cuánto tiempo.", "Di quiénes van y qué les gusta.", "Di tu ritmo y lo que necesitas, como descansos o caminatas fáciles.", "Pide cambios hasta que te quede bien."],
          words: [["Itinerario", "un plan de viaje día por día."], ["Accesible", "fácil de alcanzar y de usar para personas con movilidad, audición o vista limitadas."]],
          slides: [
            { title: "Un plan en segundos", bullets: ["Un itinerario es un plan día por día", "La IA lo escribe, tú le das forma"] },
            { title: "Dile al asistente", bullets: ["Adónde, cuándo, por cuánto tiempo", "Quiénes van y qué les gusta", "Tu ritmo y lo que necesitas"] },
            { title: "Que te quede bien", bullets: ["“Agrega un descanso todas las tardes.”", "“¿Qué lugares son fáciles con bastón?”"] }
          ],
          tryIt: "Elige un viaje que te gustaría hacer. Pídele a un asistente de IA un itinerario tranquilo de tres días con tu ritmo y tus necesidades, y luego pide un cambio.",
          youCanNow: "pedirle a la IA un plan de viaje que se ajuste a tu ritmo y a tus necesidades."
        },
        {
          title: "Comprobar los datos del viaje en sitios oficiales",
          minutes: 5,
          goal: "Comprobar los datos importantes de un plan de viaje de la IA antes de fiarte de ellos.",
          text: [
            "Los planes de viaje de la IA pueden tener errores: un museo que cerró, horarios viejos, precios equivocados o reglas que cambiaron. Comprueba siempre los datos que podrían arruinar tu viaje.",
            "Comprueba los horarios y los precios en el sitio web del propio lugar. Comprueba los horarios de vuelos y trenes con la aerolínea o la empresa de trenes. Sobre la identificación: desde el 7 de mayo de 2025, quienes vuelan dentro de Estados Unidos necesitan una licencia o tarjeta de identificación que cumpla con REAL ID, u otra identificación aceptada, como un pasaporte. El sitio web de la TSA (la agencia de seguridad de los aeropuertos de Estados Unidos), tsa.gov, tiene la lista de todas las identificaciones aceptadas.",
            "Pregúntale al asistente: “¿Qué cosas de este plan debo volver a comprobar?” Puede señalarte los datos importantes, pero tú los compruebas en los sitios oficiales."
          ],
          steps: ["Pregúntale a la IA qué datos debes volver a comprobar.", "Comprueba horarios y precios en el sitio web de cada lugar.", "Comprueba los horarios de vuelos o trenes con la empresa.", "Comprueba las reglas de identificación en tsa.gov antes de volar."],
          words: [["REAL ID", "una licencia de conducir o identificación estatal que cumple las reglas federales; por lo general tiene una estrella en una esquina."], ["TSA", "la Transportation Security Administration (Administración de Seguridad en el Transporte), que revisa a los viajeros en los aeropuertos de Estados Unidos."]],
          slides: [
            { title: "Los planes de la IA pueden estar desactualizados", bullets: ["Lugares cerrados", "Horarios o precios viejos", "Reglas que cambiaron"] },
            { title: "Comprueba en sitios oficiales", bullets: ["Horarios y precios: el sitio web del lugar", "Vuelos y trenes: la empresa", "Reglas de identificación: tsa.gov"] },
            { title: "Volar dentro de Estados Unidos", bullets: ["Desde mayo de 2025 se necesita REAL ID u otra identificación aceptada", "Se acepta el pasaporte", "Mira la lista completa en tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID (en inglés)", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Pregúntale al asistente qué datos de tu itinerario debes volver a comprobar. Luego comprueba el horario de un lugar en su propio sitio web, y comprueba si tu identificación cumple con REAL ID (busca la estrella) o qué otras acepta tsa.gov.",
          youCanNow: "comprobar en sitios web oficiales los datos clave de un plan de viaje de la IA."
        },
        {
          title: "Hacer una lista de equipaje inteligente",
          minutes: 4,
          goal: "Pedirle a la IA una lista de equipaje que se ajuste a tu viaje y a tus necesidades de salud.",
          text: [
            "Una lista de equipaje evita la clásica preocupación del viajero: “¿Me olvidé de algo?” Pídele al asistente una lista según tu viaje, la estación y las actividades.",
            "Por ejemplo: “Haz una lista de equipaje para tres días en Savannah en abril. Tomo medicinas todos los días y uso lentes para leer y un audífono. Agrúpala así: documentos, medicinas y salud, ropa y aparatos electrónicos.”",
            "Lleva las medicinas en tu equipaje de mano, en sus envases originales y con un poco de más por si hay retrasos, y lleva una lista de tus medicinas y el teléfono de tu médico. Tu farmacéutico puede aconsejarte sobre cómo viajar con medicinas."
          ],
          steps: ["Dile a la IA el lugar, la estación, la duración y las actividades.", "Menciona tus necesidades de salud, como medicinas o audífonos.", "Pídele que agrupe la lista.", "Lleva las medicinas y la identificación en tu equipaje de mano."],
          words: [["Equipaje de mano", "la maleta o bolso que llevas contigo en el avión, el autobús o el tren."]],
          slides: [
            { title: "No vuelvas a olvidar nada", bullets: ["Pídele a la IA una lista de equipaje", "Según el lugar, la estación y las actividades"] },
            { title: "Agrupa la lista", bullets: ["Documentos", "Medicinas y salud", "Ropa y aparatos electrónicos"] },
            { title: "Las medicinas viajan contigo", bullets: ["En el equipaje de mano, en sus envases originales", "Un poco de más por si hay retrasos", "Una lista de medicinas y el número de tu médico"] }
          ],
          tryIt: "Pídele a un asistente de IA una lista de equipaje agrupada para tu viaje, que incluya tus necesidades de salud. Agrega lo que se le haya olvidado y guarda o imprime la lista.",
          youCanNow: "hacer con IA una lista de equipaje que incluya tus necesidades de salud."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Planear tu viaje",
        questions: [
          { q: "¿Qué es un itinerario?", options: ["Un boleto de avión", "Una maleta", "Un plan de viaje día por día", "Un pasaporte"], answer: 2, why: "Un itinerario organiza cada día de un viaje." },
          { q: "¿Qué pedido dará el mejor plan de viaje?", options: ["“Planea un viaje tranquilo de 3 días a Savannah en abril para dos personas de más de 70 años a las que les gustan los jardines y necesitan descansar por la tarde.”", "“viaje”", "“viajar”", "“ir a algún lado”"], answer: 0, why: "Da el lugar, la fecha, las personas, los intereses y el ritmo." },
          { q: "La IA dice que un museo abre a las 9 de la mañana. ¿Cómo lo compruebas?", options: ["Adivinas", "Confías en la IA", "Le preguntas a un desconocido", "En el sitio web del propio museo"], answer: 3, why: "El sitio web del lugar tiene los horarios actuales." },
          { q: "Desde mayo de 2025, para volar dentro de Estados Unidos necesitas:", options: ["Solo una tarjeta de la biblioteca", "Una identificación que cumpla con REAL ID u otra aceptada, como un pasaporte", "Ninguna identificación", "Una tarjeta bancaria"], answer: 1, why: "La TSA exige REAL ID u otra identificación aceptada." },
          { q: "¿Dónde deben ir las medicinas cuando viajas?", options: ["Solo en el equipaje facturado", "En tu equipaje de mano", "Se quedan en casa", "En la maleta de un desconocido"], answer: 1, why: "Llevarlas contigo evita que se pierdan." }
        ]
      }
    },
    {
      name: "Capítulo 2: Durante el viaje",
      lessons: [
        {
          title: "Usar mapas y direcciones en tu teléfono",
          minutes: 5,
          goal: "Conseguir indicaciones para ir caminando o en auto con una aplicación de mapas.",
          text: [
            "Las aplicaciones de mapas como Google Maps y Apple Mapas muestran dónde estás y cómo llegar adonde vas, en auto, a pie o en transporte público.",
            "Abre la aplicación de mapas y escribe el lugar en el cuadro de búsqueda, o díselo a tu asistente de voz: “Oye Siri, indicaciones a pie para ir a Forsyth Park.” Toca Cómo llegar o Indicaciones, elige a pie, en auto o en transporte público, y luego toca Iniciar. La aplicación te dice en voz alta cada giro.",
            "Antes de un viaje, guarda tu hotel como lugar favorito, así volver es un solo toque. Las indicaciones gastan la batería del teléfono, así que lleva un cargador o una batería portátil pequeña."
          ],
          steps: ["Abre tu aplicación de mapas.", "Escribe o di adónde quieres ir.", "Toca Cómo llegar y elige a pie, en auto o en transporte público.", "Toca Iniciar y sigue los giros que te dice en voz alta.", "Guarda tu hotel como favorito."],
          words: [["GPS", "un sistema que le permite a tu teléfono saber dónde estás en un mapa."], ["Transporte público", "medios de transporte para todos, como autobuses y trenes."]],
          slides: [
            { title: "Tu teléfono conoce el camino", bullets: ["Google Maps o Apple Mapas", "En auto, a pie o en transporte público"] },
            { title: "Consigue indicaciones", bullets: ["Escribe o di el lugar", "Toca Cómo llegar y elige cómo ir", "Toca Iniciar para oír los giros"] },
            { title: "Consejos de viaje", bullets: ["Guarda tu hotel como favorito", "Lleva un cargador o una batería portátil"] }
          ],
          tryIt: "Usa tu aplicación de mapas para conseguir indicaciones a pie desde tu casa hasta una tienda o un parque cercano. Toca Iniciar y escucha la primera indicación.",
          youCanNow: "conseguir y seguir indicaciones con una aplicación de mapas."
        },
        {
          title: "Hablar y leer en otro idioma",
          minutes: 5,
          goal: "Usar una aplicación de traducción para leer un letrero o tener una conversación sencilla.",
          text: [
            "¿Viajas al extranjero o vas a conocer a un nuevo pariente político que habla otro idioma? Las aplicaciones de traducción como Google Translate (Traductor de Google) y la aplicación Traducir del iPhone pueden ayudarte.",
            "Escribe o di una frase y te muestra y te dice la traducción. El modo conversación deja que dos personas hablen por turnos. El modo cámara te deja apuntar el teléfono a un letrero o un menú y verlo en tu idioma.",
            "Las traducciones son buenas pero no perfectas. Para asuntos importantes, como necesidades médicas o alergias, lleva una tarjeta escrita de antemano en el idioma del lugar, y compruébala con alguien del hotel o de una farmacia. Muchas aplicaciones te dejan descargar un idioma antes de salir, para que funcione sin internet."
          ],
          steps: ["Abre una aplicación de traducción y elige los dos idiomas.", "Escribe o di tu frase.", "Usa el modo conversación para hablar por turnos.", "Usa el modo cámara para letreros y menús.", "Descarga el idioma antes de viajar."],
          words: [["Traducir", "pasar palabras de un idioma a otro."], ["Sin conexión", "que funciona sin conexión a internet."]],
          slides: [
            { title: "Tu traductor de bolsillo", bullets: ["Google Translate o la aplicación Traducir", "Escribe, habla o usa la cámara"] },
            { title: "Tres formas de usarlo", bullets: ["Di una frase", "Modo conversación: hablan por turnos", "Modo cámara: letreros y menús"] },
            { title: "Ve preparado", bullets: ["No es perfecto para asuntos médicos", "Lleva una tarjeta escrita de alergias o salud", "Descarga el idioma antes de salir"] }
          ],
          tryIt: "Abre una aplicación de traducción. Traduce “¿Dónde está el baño, por favor?” a un idioma que podrías necesitar y escúchalo en voz alta.",
          youCanNow: "usar una aplicación de traducción para hablar, leer letreros y menús, y prepararte para las necesidades importantes."
        },
        {
          title: "Viajar seguro y conectado",
          minutes: 5,
          goal: "Compartir tus planes y tu ubicación con tu familia y evitar las estafas de viaje.",
          text: [
            "Haz que tu familia sepa dónde estás. Comparte tu itinerario con un familiar y piensa en compartir tu ubicación desde tu teléfono durante el viaje (en iPhone, la aplicación Encontrar; en Android, compartir ubicación en Google Maps). Puedes dejar de compartirla cuando quieras.",
            "Cuidado con las estafas de viaje: sitios falsos de reservas, llamadas que dicen que “ganaste” un viaje y mensajes sobre problemas con tu vuelo que te piden llamar a un número extraño o pagar. Reserva en el sitio web de la propia aerolínea, hotel o empresa de trenes, o con un agente de confianza, y comprueba cualquier mensaje llamando al número de su sitio web oficial.",
            "Guarda una copia de tu identificación y de tu lista de medicinas en un lugar seguro, separada de los originales, y no escribas datos bancarios en el Wi-Fi público de hoteles o aeropuertos."
          ],
          steps: ["Comparte tu itinerario con un familiar.", "Activa compartir ubicación durante el viaje si quieres.", "Reserva solo en sitios oficiales o con agentes de confianza.", "Comprueba los mensajes de viaje en el número oficial de la empresa.", "No hagas operaciones bancarias en el Wi-Fi público."],
          words: [["Compartir ubicación", "dejar que las personas que eliges vean en un mapa dónde está tu teléfono."], ["Wi-Fi público", "internet inalámbrico gratuito en lugares como hoteles y aeropuertos, que otros pueden compartir."]],
          slides: [
            { title: "Mantén informada a tu familia", bullets: ["Comparte tu itinerario", "Comparte tu ubicación durante el viaje", "Deja de compartir cuando quieras"] },
            { title: "Estafas de viaje", bullets: ["Sitios falsos de reservas", "“¡Ganaste un viaje!”", "Mensajes de problemas con el vuelo con números extraños"] },
            { title: "Viaja seguro", bullets: ["Reserva en sitios oficiales", "Llama a los números de los sitios web oficiales", "Nada de bancos en el Wi-Fi público"] }
          ],
          tryIt: "Tarea final: termina tu plan de viaje de tres días con un ritmo cómodo y tiempo de descanso, tu lista de equipaje con medicinas e identificación, y tres datos que comprobaste en sitios web oficiales. Comparte el plan con un familiar.",
          youCanNow: "planear un viaje con IA, comprobarlo, preparar el equipaje, encontrar el camino y viajar seguro y conectado."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Durante el viaje",
        questions: [
          { q: "En una aplicación de mapas, después de elegir adónde ir, tocas:", options: ["Compartir contraseña", "Eliminar", "Cámara", "Cómo llegar y luego Iniciar"], answer: 3, why: "Cómo llegar e Iniciar empiezan la guía en voz alta." },
          { q: "¿Por qué guardar tu hotel como favorito?", options: ["Volver es un solo toque", "Hace que la habitación sea más barata", "Cancela la reserva", "Envía tu contraseña"], answer: 0, why: "Los favoritos hacen rápido volver al lugar." },
          { q: "El modo cámara de una aplicación de traducción te deja:", options: ["Llamar a casa", "Tomarte selfis", "Apuntar a un letrero o un menú para leerlo en tu idioma", "Pagar las comidas"], answer: 2, why: "Traduce el texto que ve la cámara." },
          { q: "Para una alergia grave a un alimento en el extranjero, el mejor plan es:", options: ["Adivinar", "Confiar solo en la aplicación en el momento", "No decir nada", "Llevar una tarjeta escrita en el idioma del lugar y comprobarla con el personal"], answer: 3, why: "Las aplicaciones de traducción no son perfectas para las necesidades médicas." },
          { q: "Un mensaje dice que tu vuelo tiene un problema y que llames a un número del mensaje. Tú:", options: ["Pagas de inmediato", "Llamas al número del mensaje", "Llamas en cambio al número del sitio web oficial de la aerolínea", "Envías el número de tu tarjeta"], answer: 2, why: "Los números oficiales son seguros; los de los mensajes pueden ser estafas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA como compañera de viaje",
    questions: [
      { q: "Un asistente de IA puede ayudarte con un viaje:", options: ["Comprando boletos sin ti", "Escribiendo un borrador del plan día por día", "Garantizando los precios", "Haciendo tu maleta"], answer: 1, why: "Escribe borradores de planes que luego tú ajustas y compruebas." },
      { q: "Decirle a la IA tu ritmo y tus necesidades la ayuda a:", options: ["Hacer un plan que se ajuste a ti", "Cobrar menos", "Reservar hoteles", "Llamar a tu familia"], answer: 0, why: "Los detalles hacen que el plan sea realista." },
      { q: "“Accesible” significa:", options: ["Fácil de usar para personas con movilidad, audición o vista limitadas", "Caro", "Lejano", "Cerrado"], answer: 0, why: "Los lugares accesibles son fáciles de usar para todos." },
      { q: "Los planes de viaje de la IA pueden tener:", options: ["Solo datos perfectos", "Horarios desactualizados o lugares cerrados", "Tu pasaporte", "Boletos de verdad"], answer: 1, why: "La IA puede equivocarse o estar desactualizada." },
      { q: "Una buena pregunta para hacerle a la IA sobre tu plan es:", options: ["“Reserva todo ya.”", "“¿Cuál es mi contraseña?”", "“¿Qué cosas de este plan debo volver a comprobar?”", "“Paga por mí.”"], answer: 2, why: "Te señala los datos que hay que verificar." },
      { q: "¿Dónde compruebas las reglas de identificación para volar en Estados Unidos?", options: ["En un mensaje de estafa de viaje", "En un anuncio emergente", "En una publicación de redes sociales", "En tsa.gov"], answer: 3, why: "La TSA fija las reglas de identificación en los aeropuertos." },
      { q: "Una tarjeta REAL ID por lo general tiene:", options: ["Solo un código de barras", "Ninguna foto", "Una estrella en una esquina", "Tu contraseña"], answer: 2, why: "La estrella marca las tarjetas que cumplen con REAL ID." },
      { q: "Además de REAL ID, una identificación aceptada para volar en Estados Unidos es:", options: ["Un pasaporte", "Una tarjeta de la biblioteca", "Un recibo de una tienda", "Una tarjeta de presentación"], answer: 0, why: "La TSA acepta el pasaporte." },
      { q: "Una lista de equipaje agrupada podría tener secciones para:", options: ["Nada", "Solo zapatos", "Solo bocadillos", "Documentos, medicinas, ropa y aparatos electrónicos"], answer: 3, why: "Agrupar hace fácil revisarla." },
      { q: "Las medicinas se deben llevar:", options: ["Sueltas en el equipaje facturado", "En el equipaje de mano, en sus envases originales", "En casa", "En la maleta de un amigo"], answer: 1, why: "Llévalas contigo y bien etiquetadas." },
      { q: "¿Quién puede aconsejarte sobre cómo viajar con medicinas?", options: ["Un sitio web cualquiera", "Tu farmacéutico", "Un anuncio emergente", "Un desconocido"], answer: 1, why: "Los farmacéuticos conocen las medicinas." },
      { q: "El GPS le permite a tu teléfono:", options: ["Tomar fotos", "Traducir idiomas", "Pagar cuentas", "Saber dónde estás en un mapa"], answer: 3, why: "El GPS encuentra tu ubicación." },
      { q: "“Transporte público” en una aplicación de mapas significa:", options: ["Autobuses y trenes", "Solo caminar", "Volar", "Solo manejar"], answer: 0, why: "El transporte público son los autobuses y los trenes." },
      { q: "Las indicaciones gastan batería, así que lleva:", options: ["Una segunda identificación", "Contraseñas de más", "Un cargador o una batería portátil", "Una cámara"], answer: 2, why: "La navegación agota la batería." },
      { q: "El modo conversación de una aplicación de traducción:", options: ["Quita el sonido", "Llama a casa", "Reserva hoteles", "Deja que dos personas hablen por turnos"], answer: 3, why: "Traduce de ida y vuelta." },
      { q: "Descargar un idioma antes de salir hace que la aplicación funcione:", options: ["Más rápido solo con Wi-Fi", "Solo en casa", "Sin conexión, sin internet", "Nunca"], answer: 2, why: "Los idiomas descargados funcionan sin conexión." },
      { q: "Compartir ubicación deja que:", options: ["Te sigan desconocidos", "Los familiares que eliges vean dónde está tu teléfono", "Los hoteles cobren más", "Las aerolíneas cancelen vuelos"], answer: 1, why: "Solo las personas que eliges pueden verla." },
      { q: "Una llamada dice que ganaste un viaje gratis pero que debes pagar una tarifa. Esto es:", options: ["Probablemente una estafa", "Un premio de verdad", "Una regla de impuestos", "Normal"], answer: 0, why: "Los premios que exigen tarifas son estafas." },
      { q: "La forma más segura de reservar un viaje es:", options: ["En sitios web oficiales o con agentes de confianza", "Con enlaces de mensajes inesperados", "Con anuncios emergentes", "Enviando tarjetas de regalo"], answer: 0, why: "Los sitios oficiales evitan las estafas de reservas falsas." },
      { q: "En el Wi-Fi público de un aeropuerto, evita:", options: ["Leer las noticias", "Escribir datos bancarios", "Ver el clima", "Mirar mapas"], answer: 1, why: "El Wi-Fi público lo pueden compartir otras personas." }
    ]
  }
};

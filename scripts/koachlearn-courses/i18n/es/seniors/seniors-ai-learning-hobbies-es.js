"use strict";

// Koach Learn course (Spanish translation of seniors/seniors-ai-learning-hobbies.js). Rules: scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "seniors-ai-learning-hobbies-es",
  lang: "es",
  translationOf: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "IA para aprender y disfrutar tus pasatiempos",
  skills: "Pedirle a la IA que te enseñe paso a paso, Hacerte preguntas de repaso con IA, Armar un plan de aprendizaje, Encontrar buenos videos tutoriales, Usar la IA para un proyecto de pasatiempo",
  outcome: "usar un asistente de IA para armar un plan sencillo de dos semanas para aprender un pasatiempo o un tema que te interese, hacer que te enseñe y te evalúe paso a paso, y terminar la primera sesión de práctica.",
  about: [
    "Nunca es tarde para aprender. Este curso es para personas mayores que quieren empezar un pasatiempo nuevo, retomar uno viejo o aprender sobre algo que siempre les ha dado curiosidad: jardinería, historia familiar, pintura, un idioma nuevo, aves, música o historia.",
    "Usarás un asistente de IA gratuito como ChatGPT, Microsoft Copilot o Google Gemini como un tutor paciente al que no le molesta repetir. Le pedirás que te enseñe en pasos pequeños, te haga preguntas, planee tu práctica y te ayude con un proyecto real.",
    "Cada lección dura unos cinco minutos. Haz cada vez la tarea “Pruébalo ahora”; con ellas armas tu propio plan de aprendizaje. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Elige un pasatiempo o un tema. Pídele a un asistente de IA un plan de aprendizaje de dos semanas con sesiones diarias cortas, pídele que te enseñe la primera lección paso a paso, deja que te haga tres preguntas de repaso y anota una cosa que vas a practicar mañana.",
  chapters: [
    {
      name: "Capítulo 1: La IA como tu tutor paciente",
      lessons: [
        {
          title: "Pedirle a la IA que te enseñe paso a paso",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que te enseñe un tema en pasos pequeños y claros, a tu ritmo.",
          text: [
            "Un asistente de IA puede actuar como un tutor paciente. Te explica algo todas las veces que necesites, de todas las formas que necesites, y nunca se cansa de las preguntas.",
            "Dile qué quieres aprender, qué sabes ya y cómo te gusta aprender. Por ejemplo: “Quiero empezar a observar aves en mi patio. Soy principiante total. Enséñame las tres primeras cosas que debo saber, una por una, con frases cortas. Espera a que yo diga ‘siguiente’ antes de continuar.”",
            "Pedirle que espere a que digas “siguiente” mantiene cada paso pequeño, para que puedas probarlo o pensarlo antes de seguir."
          ],
          steps: ["Di qué quieres aprender.", "Di lo que ya sabes, aunque no sea nada.", "Pide pasos cortos y sencillos.", "Pídele que espere a que digas “siguiente”."],
          words: [["Tutor", "un maestro que ayuda a una sola persona a aprender a su propio ritmo."]],
          slides: [
            { title: "Un tutor paciente", bullets: ["Explica todas las veces que necesites", "Nunca se cansa de las preguntas"] },
            { title: "Dile", bullets: ["Qué quieres aprender", "Qué sabes ya", "Cómo te gusta aprender"] },
            { title: "Pasos pequeños", bullets: ["“Enséñame una cosa a la vez.”", "“Espera a que yo diga ‘siguiente’.”"] }
          ],
          tryIt: "Elige un tema que te dé curiosidad. Pídele a un asistente que te enseñe las tres primeras cosas que debes saber, una por una, esperando a que digas “siguiente”. Recorre las tres.",
          youCanNow: "pedirle a un asistente de IA que te enseñe un tema en pasos pequeños y a tu propio ritmo."
        },
        {
          title: "Hacerte preguntas para recordar más",
          minutes: 4,
          goal: "Pedirle a un asistente de IA que te haga preguntas sobre lo que acabas de aprender.",
          text: [
            "Recordamos más cuando intentamos traer algo a la memoria, no cuando solo lo volvemos a leer. Un cuestionario corto es una de las mejores formas de que lo nuevo se quede.",
            "Después de una lección, pide: “Hazme tres preguntas fáciles sobre lo que me acabas de enseñar. Una a la vez, y dime si acierto.” Responde con tus propias palabras. Si te equivocas en una, pídele que te lo explique otra vez de otra manera.",
            "Repite el mismo cuestionario al día siguiente. Un poco de práctica repartida en varios días funciona mejor que mucha práctica de una sola vez."
          ],
          steps: ["Termina una lección corta.", "Pide tres preguntas fáciles, una a la vez.", "Responde con tus propias palabras.", "Pide una nueva explicación de lo que fallaste.", "Repite el cuestionario mañana."],
          words: [["Recordar", "traer algo de vuelta a la mente desde la memoria."]],
          slides: [
            { title: "Las preguntas te ayudan a recordar", bullets: ["Recordar es mejor que releer", "Poco y seguido es lo mejor"] },
            { title: "Pide un cuestionario", bullets: ["“Hazme tres preguntas fáciles.”", "“Una a la vez; dime si acierto.”"] },
            { title: "¿Fallaste una?", bullets: ["Pide una explicación diferente", "Vuelve a intentarlo mañana"] }
          ],
          tryIt: "Pídele al asistente que te haga tres preguntas sobre lo que te enseñó en la Lección 1. Respóndelas una por una.",
          youCanNow: "usar la IA para hacerte preguntas y recordar más de lo que aprendes."
        },
        {
          title: "Armar un plan de aprendizaje sencillo",
          minutes: 5,
          goal: "Pedirle a un asistente de IA un plan de aprendizaje corto y realista.",
          text: [
            "Un plan convierte el “algún día” en “hoy”. Pídele al asistente un plan de dos semanas con sesiones cortas que se ajusten a tu energía y a tu horario.",
            "Por ejemplo: “Hazme un plan de dos semanas para aprender acuarela básica. Puedo practicar 20 minutos al día, cinco días a la semana. Tengo un juego pequeño de pinturas y papel. Que cada día tenga una sola meta pequeña.”",
            "Revisa el plan y cambia lo que no te sirva. Pídele que haga los días más fáciles, más cortos o que agregue días de descanso. Luego escribe el plan en tu calendario o en un papel junto a tu sillón."
          ],
          steps: ["Di qué quieres aprender y en cuánto tiempo.", "Di cuántos minutos y días puedes practicar.", "Di qué materiales ya tienes.", "Pide una meta pequeña por día.", "Ajusta el plan y luego escríbelo."],
          words: [["Plan de aprendizaje", "una lista de lo que vas a practicar cada día para llegar a una meta."]],
          slides: [
            { title: "Del “algún día” al “hoy”", bullets: ["Un plan corto y realista", "Una meta pequeña cada día"] },
            { title: "Dile al asistente", bullets: ["Qué y en cuánto tiempo", "Minutos y días que puedes practicar", "Materiales que ya tienes"] },
            { title: "Que se ajuste a ti", bullets: ["Pide días más fáciles o más cortos", "Agrega días de descanso", "Escríbelo en tu calendario"] }
          ],
          tryIt: "Pídele a un asistente un plan de aprendizaje de dos semanas para tu tema, con una meta pequeña al día y el tiempo que puedes dedicar. Haz un cambio para que te quede mejor y luego anota los tres primeros días.",
          youCanNow: "armar con IA un plan de aprendizaje realista que se ajuste a tu tiempo y tu energía."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: La IA como tu tutor paciente",
        questions: [
          { q: "¿Por qué pedirle al asistente que espere a que digas “siguiente”?", options: ["Para que deje de funcionar", "Para que vaya más rápido", "Para que cada paso sea pequeño y puedas pensarlo", "Es necesario para iniciar sesión"], answer: 2, why: "Los pasos pequeños a tu ritmo son más fáciles de aprender." },
          { q: "¿Qué debes decirle al asistente cuando quieres aprender algo?", options: ["Qué quieres aprender, qué sabes y cómo te gusta aprender", "Tu número de banco", "Una sola palabra", "Tu contraseña"], answer: 0, why: "Estos datos lo ayudan a enseñarte al nivel correcto." },
          { q: "¿Qué te ayuda a recordar más?", options: ["Leer la misma página diez veces", "Aprenderlo todo en un día", "No practicar nunca", "Responder un cuestionario corto"], answer: 3, why: "Recordar las respuestas hace que lo aprendido se quede." },
          { q: "Te equivocaste en una pregunta. ¿Cuál es un buen paso siguiente?", options: ["Abandonar el pasatiempo", "Pedirle que lo explique otra vez de otra manera", "Borrar la aplicación", "Saltarte el tema para siempre"], answer: 1, why: "Una explicación nueva muchas veces hace que lo entiendas." },
          { q: "Un buen plan de aprendizaje tiene:", options: ["Diez horas de trabajo al día", "Una meta pequeña por día que se ajuste a tu tiempo", "Ningún día", "Solo metas grandes"], answer: 1, why: "Las metas pequeñas y realistas te ayudan a seguir." }
        ]
      }
    },
    {
      name: "Capítulo 2: Disfrutar tus pasatiempos con IA",
      lessons: [
        {
          title: "Encontrar buenos videos tutoriales",
          minutes: 5,
          goal: "Buscar un video tutorial útil y juzgar si es bueno.",
          text: [
            "Algunas habilidades se aprenden mejor mirando: un punto de tejido, la poda de rosas, un acorde de guitarra. YouTube tiene videos tutoriales gratuitos sobre casi cualquier pasatiempo.",
            "Primero pídele a un asistente de IA buenas palabras para buscar: “¿Qué debo buscar en YouTube para aprender un punto básico de tejido para principiantes?” Luego abre YouTube, toca el cuadro de búsqueda (la lupa) y escribe esas palabras. Busca videos hechos para principiantes, con títulos claros y comentarios útiles.",
            "Puedes pausar, retroceder y volver a mirar todas las veces que quieras. Ten cuidado con los anuncios y con los enlaces en la descripción del video que te piden comprar algo o registrarte; no los necesitas para aprender."
          ],
          steps: ["Pídele a la IA buenas palabras para buscar.", "Abre YouTube y toca la lupa.", "Escribe las palabras y busca videos para principiantes.", "Pausa y repite todas las veces que necesites.", "Sáltate los anuncios y enlaces que te piden comprar o registrarte."],
          words: [["YouTube", "un sitio web y una aplicación gratuitos con videos sobre casi cualquier tema."], ["Cuadro de búsqueda", "donde escribes palabras para encontrar algo; a menudo se muestra con una lupa."]],
          slides: [
            { title: "Aprende mirando", bullets: ["Tejido, jardinería, música y más", "Gratis en YouTube"] },
            { title: "Encuentra un buen video", bullets: ["Pídele a la IA palabras para buscar", "Toca la lupa y escribe", "Elige videos para principiantes"] },
            { title: "Míralo a tu manera", bullets: ["Pausa y repite", "Sáltate los anuncios y los enlaces de “compra ya”"] }
          ],
          tryIt: "Pregúntale a un asistente de IA qué buscar en YouTube para el primer día de tu plan de aprendizaje. Búscalo, mira un video para principiantes y páusalo al menos una vez para probar un paso.",
          youCanNow: "encontrar un video útil para principiantes y aprender con él a tu propio ritmo."
        },
        {
          title: "Usar la IA para un proyecto de pasatiempo",
          minutes: 5,
          goal: "Usar un asistente de IA para planear un proyecto real de principio a fin.",
          text: [
            "La IA puede ayudarte a planear un proyecto: un pequeño huerto, un álbum de recortes para el cumpleaños de un nieto, un libro de recetas de la familia o una casita para pájaros.",
            "Describe el proyecto y pide una lista de materiales y los pasos: “Ayúdame a hacer un álbum de recortes pequeño del primer año de mi nieta. Haz la lista de materiales y los pasos. Que sea sencillo.” Para un huerto, agrega tu zona y la estación del año: “Vivo en Ohio y tengo un patio con mucho sol. ¿Cuáles son tres verduras fáciles de cultivar en macetas esta primavera?”",
            "Para cualquier cosa de seguridad, como herramientas, productos químicos o plantas que pueden hacerles daño a las mascotas, revisa la etiqueta o una fuente confiable, como el vivero de tu zona o la biblioteca."
          ],
          steps: ["Describe el proyecto y para quién es.", "Agrega tu zona, la estación o el espacio si importa.", "Pide una lista de materiales y pasos sencillos.", "Comprueba los datos de seguridad en la etiqueta o con una fuente confiable."],
          words: [["Lista de materiales", "las cosas que necesitas reunir antes de empezar un proyecto."]],
          slides: [
            { title: "Planea un proyecto real", bullets: ["Huerto, álbum de recortes, libro de recetas, casita para pájaros"] },
            { title: "Pide", bullets: ["Una lista de materiales", "Pasos sencillos", "Ideas que se ajusten a tu zona y estación"] },
            { title: "Cuídate", bullets: ["Revisa las etiquetas de herramientas y químicos", "Pregunta en un vivero o en la biblioteca"] }
          ],
          tryIt: "Elige un proyecto pequeño relacionado con tu tema. Pídele a un asistente una lista de materiales y pasos sencillos, y encierra en un círculo los materiales que ya tienes.",
          youCanNow: "planear con IA un proyecto de pasatiempo, desde los materiales hasta los pasos."
        },
        {
          title: "Explorar la historia y los relatos de la familia",
          minutes: 5,
          goal: "Usar la IA para ayudarte a escribir un relato familiar para compartir.",
          text: [
            "A muchas personas mayores les encanta explorar la historia familiar y pasarles sus relatos a los nietos. La IA puede ayudarte a convertir tus recuerdos en una historia corta que otros disfrutarán.",
            "Cuéntale un recuerdo con tus propias palabras: “Mi padre tenía una panadería en Chicago en los años cincuenta. Yo lo ayudaba los sábados. Ayúdame a escribir esto como un relato de una página para mis nietos, con mi propia voz.” Luego haz cambios para que suene como tú.",
            "La IA no conoce la historia real de tu familia, así que no le pidas que complete datos sobre tus antepasados; puede inventarlos. Para los registros, sitios como FamilySearch (gratuito) o el servicio de genealogía de tu biblioteca son mejores lugares para buscar. No pongas en la IA los datos privados de familiares vivos."
          ],
          steps: ["Cuéntale a la IA un recuerdo con tus propias palabras.", "Pide un relato de una página con tu voz.", "Cambia lo que no suene como tú.", "Busca los registros en sitios confiables, no en la IA.", "Comparte el relato con tu familia."],
          words: [["Genealogía", "el estudio de la historia de la familia y de los antepasados."], ["Antepasado", "un familiar de hace mucho tiempo, como un bisabuelo."]],
          slides: [
            { title: "Convierte recuerdos en relatos", bullets: ["Cuéntale a la IA el recuerdo con tus palabras", "Pide un relato corto con tu voz"] },
            { title: "Los datos vienen de los registros", bullets: ["La IA puede inventar datos de la familia", "Prueba FamilySearch o tu biblioteca"] },
            { title: "Compártelo", bullets: ["No incluyas datos privados de familiares vivos", "Léeselo en voz alta a tus nietos"] }
          ],
          tryIt: "Tarea final: elige un pasatiempo o un tema, pídele a un asistente de IA un plan de dos semanas, haz que te enseñe la primera lección paso a paso, deja que te haga tres preguntas de repaso y anota una cosa que vas a practicar mañana.",
          youCanNow: "usar la IA para aprender, planear proyectos de pasatiempos y guardar relatos de tu familia."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Disfrutar tus pasatiempos con IA",
        questions: [
          { q: "¿Cómo puede ayudarte la IA a encontrar un buen video tutorial?", options: ["Borra los anuncios", "Graba el video", "Lo paga por ti", "Te sugiere buenas palabras para buscar"], answer: 3, why: "Buenas palabras de búsqueda llevan a mejores videos." },
          { q: "Un enlace en la descripción de un video dice “Compra el curso completo ya”. ¿Lo necesitas para aprender?", options: ["No, puedes saltártelo", "Sí, siempre", "Sí, es obligatorio", "Solo los fines de semana"], answer: 0, why: "Los videos gratuitos enseñan mucho; no necesitas comprar." },
          { q: "Para planear un huerto, ¿qué debes decirle a la IA?", options: ["Tu contraseña", "Tu número de banco", "Tu zona, la estación y el espacio", "Nada"], answer: 2, why: "La zona, la estación y el espacio influyen en lo que crece bien." },
          { q: "La IA te sugiere un aerosol para el jardín. ¿Cómo compruebas que es seguro?", options: ["Confías en la IA", "Le preguntas a un desconocido", "Rocías más", "Lees la etiqueta o preguntas en un vivero"], answer: 3, why: "Los datos de seguridad deben venir de las etiquetas o de fuentes confiables." },
          { q: "¿Por qué no pedirle a la IA datos sobre tus bisabuelos?", options: ["Cuesta dinero", "Es demasiado lenta", "Puede inventarlos", "Solo habla francés"], answer: 2, why: "La IA no conoce tu historia familiar; los registros sí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para aprender y disfrutar tus pasatiempos",
    questions: [
      { q: "Un asistente de IA puede actuar como:", options: ["Tu médico", "Un tutor paciente", "Tu banco", "Un farmacéutico"], answer: 1, why: "Te explica las cosas todas las veces que necesites." },
      { q: "¿Qué pedido te enseñará mejor?", options: ["“Soy principiante. Enséñame tres cosas sobre las aves del patio, una a la vez.”", "“aves”", "“enseña”", "“todo”"], answer: 0, why: "Dice el tema, tu nivel y el ritmo." },
      { q: "Decir “espera a que yo diga siguiente” ayuda porque:", options: ["Mantiene cada paso pequeño", "Hace que hable más fuerte", "Apaga el aparato", "Pagas menos"], answer: 0, why: "Los pasos pequeños te dejan pensar antes de seguir." },
      { q: "Un tutor es:", options: ["Un tipo de teléfono", "Un maestro que ayuda a una persona a su propio ritmo", "La terminación de un sitio web", "Un video"], answer: 1, why: "Los tutores enseñan a una persona a la vez." },
      { q: "¿Qué te ayuda a recordar lo que aprendes?", options: ["Aprenderlo todo en una noche", "No repasar nunca", "Hacerte preguntas", "Saltarte la práctica"], answer: 2, why: "Recordar las respuestas fortalece la memoria." },
      { q: "¿Cómo debe hacerte preguntas la IA?", options: ["Sin decirte si acertaste", "Cincuenta preguntas de una vez", "Solo preguntas difíciles", "Una pregunta a la vez y diciéndote si acertaste"], answer: 3, why: "Una a la vez y con respuesta es lo más fácil." },
      { q: "La práctica funciona mejor cuando es:", options: ["Una vez al año", "Toda de una vez", "Corta y repartida en varios días", "Solo cuando estás cansado"], answer: 2, why: "La práctica repartida ayuda a la memoria." },
      { q: "Un buen plan de aprendizaje incluye:", options: ["Una meta pequeña cada día", "Ninguna meta", "Horas de práctica al día", "Solo un examen final"], answer: 0, why: "Las metas diarias pequeñas son realistas." },
      { q: "Si el plan te parece demasiado difícil, puedes:", options: ["Borrar el plan", "Abandonar", "Hacerlo todo igual", "Pedirle a la IA días más fáciles o días de descanso"], answer: 3, why: "Los planes deben ajustarse a ti." },
      { q: "¿Qué debes decirle a la IA al pedir un plan?", options: ["Tu contraseña", "Los minutos y días que puedes practicar", "Tu número de banco", "Tu número de Medicare"], answer: 1, why: "El tiempo disponible da forma al plan." },
      { q: "La lupa en YouTube es:", options: ["El volumen", "El botón de búsqueda", "El botón de encendido", "La cámara"], answer: 1, why: "Abre el cuadro de búsqueda." },
      { q: "Mientras miras un video tutorial puedes:", options: ["No retroceder", "Verlo solo una vez", "No detenerlo", "Pausarlo y repetirlo todas las veces que quieras"], answer: 3, why: "Pausar te deja probar cada paso." },
      { q: "Los anuncios que te piden registrarte o comprar:", options: ["No son necesarios para aprender", "Son obligatorios", "Son del gobierno", "Son parte de la lección"], answer: 0, why: "Puedes aprender sin ellos." },
      { q: "Para un proyecto de pasatiempo, la IA te puede dar:", options: ["El saldo de tu banco", "Los materiales mismos", "Una lista de materiales y pasos sencillos", "Una nota del médico"], answer: 2, why: "Puede planear; tú reúnes las cosas y lo haces." },
      { q: "Una lista de materiales es:", options: ["Un número de teléfono", "Un recibo del supermercado", "Una contraseña", "Las cosas que necesitas antes de empezar"], answer: 3, why: "Enumera lo que hay que reunir." },
      { q: "Los datos de seguridad sobre herramientas o químicos se deben comprobar:", options: ["Nunca", "Solo con la IA", "En la etiqueta o con una fuente confiable", "Con un desconocido"], answer: 2, why: "Las etiquetas y los expertos son confiables." },
      { q: "La genealogía es:", options: ["Una planta de jardín", "El estudio de la historia familiar", "Una aplicación del teléfono", "Un tipo de pintura"], answer: 1, why: "La genealogía rastrea a los antepasados." },
      { q: "La IA puede ayudarte con un relato familiar:", options: ["Convirtiendo tu recuerdo en una historia corta con tu voz", "Sabiendo los cumpleaños de tus antepasados", "Encontrando las direcciones de tus parientes", "Firmando documentos"], answer: 0, why: "Da forma a tus palabras; tú pones el recuerdo." },
      { q: "¿Dónde debes buscar registros familiares reales?", options: ["En FamilySearch o en el servicio de genealogía de tu biblioteca", "Solo en la IA", "En un anuncio emergente", "En rumores de redes sociales"], answer: 0, why: "Los registros vienen de fuentes de registros confiables." },
      { q: "¿Qué no debes poner en la IA al escribir relatos familiares?", options: ["Tu color favorito", "Los datos privados de familiares vivos", "El nombre de una mascota", "La estación del año"], answer: 1, why: "Los datos privados de los familiares vivos merecen protección." }
    ]
  }
};

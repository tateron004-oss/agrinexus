"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-ai-digital-marketing.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// SMART is kept as the English acronym (the one most Spanish-speaking teachers use) and each letter is explained in Spanish.

module.exports = {
  id: "athletes-ai-digital-marketing-es",
  lang: "es",
  translationOf: "athletes-ai-digital-marketing",
  category: "Athletes",
  name: "Estrategias de marketing digital con IA para deportistas",
  skills: "Fijar una meta de marketing, Definir tu público, Elegir canales, Hacer con IA un plan de 4 semanas, Medir resultados y ajustar",
  outcome: "usar un asistente de IA para armar y poner en marcha un plan sencillo de marketing digital de 4 semanas para ti como deportista: una meta, un público, dos canales, un plan semanal de publicaciones y tres números que registras.",
  about: [
    "Este curso es para deportistas de secundaria, de universidad y al inicio de su carrera que quieren hacer crecer su público a propósito, ya sea para el reclutamiento, oportunidades de NIL (siglas en inglés de nombre, imagen y semejanza: lo que un deportista puede ganar con su nombre y su imagen), un campamento o una carrera futura, y para los entrenadores que los ayudan.",
    "Hacer marketing significa lograr que las personas indicadas te conozcan, les caigas bien y confíen en ti. Fijarás una meta, elegirás tu público y tus canales, usarás la IA para hacer el borrador de un plan de 4 semanas y aprenderás qué números mirar.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas. Las reglas de NIL cambian según la escuela, el estado y el nivel, así que consulta con tu oficina de cumplimiento o con la asociación deportiva de tu estado antes de cualquier acuerdo pagado."
  ],
  finalTask: "Escribe un plan de marketing de 4 semanas en una página: una meta SMART, una descripción de tu público, dos canales, un plan semanal de publicaciones hecho con IA y tres números para registrar. Pon en marcha la primera semana, anota los números y escribe un cambio para la segunda semana.",
  chapters: [
    {
      name: "Capítulo 1: Meta, público y canales",
      lessons: [
        {
          title: "Fijar una meta de marketing",
          minutes: 5,
          goal: "Escribir una meta de marketing SMART para las próximas cuatro semanas.",
          text: [
            "Hacer marketing sin una meta es solo publicar. Decide qué quieres en las próximas cuatro semanas: que te noten los entrenadores universitarios, llenar un campamento para niños, hacer crecer un público que le interese a una marca o construir seguidores para tu carrera futura.",
            "Hazla SMART (sigla en inglés): Específica, Medible, Alcanzable, Relevante y con un plazo definido. “Conseguir 15 inscripciones para mi clínica gratuita de tiro de verano antes del 30 de junio” es SMART. “Hacerme famoso” no lo es.",
            "Un asistente de IA puede ayudarte a afinarla: “Juego básquetbol en la secundaria. Ayúdame a convertir ‘que más entrenadores universitarios me vean’ en una meta SMART para las próximas 4 semanas.”"
          ],
          steps: ["Elige qué quieres en 4 semanas.", "Agrega un número.", "Agrega una fecha.", "Comprueba que sea realista y que te importe."],
          words: [["Marketing", "lograr que las personas indicadas te conozcan, les caigas bien y confíen en ti o en lo que ofreces."], ["Meta SMART", "una meta Específica, Medible, Alcanzable, Relevante y con un plazo definido (las letras vienen de las palabras en inglés)."]],
          slides: [
            { title: "Sin meta = solo publicar", bullets: ["¿Reclutamiento? ¿Campamento? ¿Público? ¿Carrera?"] },
            { title: "SMART", bullets: ["Específica, Medible, Alcanzable", "Relevante, con un plazo definido"] },
            { title: "Ejemplo", bullets: ["“15 inscripciones para mi clínica gratuita antes del 30 de junio”", "No: “hacerme famoso”"] }
          ],
          tryIt: "Escribe una meta de marketing para las próximas cuatro semanas. Pídele a un asistente de IA que la haga SMART y luego edítala para que sea cierta y realista para ti.",
          youCanNow: "escribir una meta de marketing SMART."
        },
        {
          title: "Conocer a tu público",
          minutes: 5,
          goal: "Describir en un perfil corto a las personas a las que quieres llegar.",
          text: [
            "Tu público es el grupo específico al que quieres llegar. Un entrenador universitario, el padre de un niño de 10 años que quiere ir a un campamento, el dueño de un negocio local y un aficionado de tu deporte quieren cosas distintas.",
            "Escribe un perfil corto de tu público: quiénes son, qué les importa, dónde pasan el tiempo en internet y qué los haría actuar. Ejemplo: “Padres de niños de la zona de 8 a 12 años, ocupados, les importa un entrenamiento seguro y divertido, usan grupos de Facebook e Instagram, se inscriben cuando ven opiniones reales.”",
            "La IA puede ayudarte a pensar ideas sobre lo que le importa a tu público. Después compruébalo preguntándoles a dos o tres personas reales de ese grupo."
          ],
          steps: ["Nombra al grupo.", "Escribe lo que les importa.", "Escribe dónde pasan el tiempo en internet.", "Escribe qué los hace actuar.", "Compruébalo con dos o tres personas reales."],
          words: [["Público", "las personas específicas a las que quieres llegar."], ["Perfil del público", "una descripción corta de quiénes son y qué quieren."]],
          slides: [
            { title: "Públicos distintos", bullets: ["Entrenadores universitarios", "Padres de campamento", "Negocios locales", "Aficionados de tu deporte"] },
            { title: "Perfil del público", bullets: ["Quiénes son", "Qué les importa", "Dónde están en internet", "Qué los hace actuar"] },
            { title: "Compruébalo", bullets: ["Pídele ideas a la IA", "Luego pregúntales a 2 o 3 personas reales"] }
          ],
          tryIt: "Escribe un perfil del público para tu meta. Pregúntale a un asistente de IA: “¿Qué más le podría importar a este público?” Agrega una idea y luego pregúntale a una persona real de ese grupo si es cierta.",
          youCanNow: "escribir un perfil corto del público para tu meta."
        },
        {
          title: "Elegir tus canales",
          minutes: 5,
          goal: "Elegir dos canales donde tu público ya pasa el tiempo.",
          text: [
            "Un canal es un lugar donde llegas a la gente: Instagram, TikTok, YouTube, X, LinkedIn, grupos de Facebook, correo electrónico, un sitio web o en persona en partidos y eventos de la comunidad.",
            "Elige solo dos canales para empezar, según tu público, no según lo que está de moda. Los entrenadores universitarios suelen mirar videos de jugadas destacadas y perfiles de reclutamiento, además del correo. Los padres de campamento pueden usar grupos de Facebook y volantes en la zona. Las marcas miran cuánto interactúan tus seguidores.",
            "Revisa las reglas de edad de cada plataforma y configura tus cuentas para controlar quién puede contactarte. Si tienes menos de 18 años, incluye a tu padre, madre o tutor."
          ],
          steps: ["Haz una lista de dónde pasa el tiempo tu público.", "Elige las dos que mejor coinciden.", "Revisa las reglas de edad y los ajustes de privacidad.", "Escribe por qué elegiste cada canal."],
          words: [["Canal", "un lugar donde llegas a tu público, como una red social o el correo."], ["Interacción", "cómo interactúa la gente con tus publicaciones: me gusta, comentarios, compartidos, guardados."]],
          slides: [
            { title: "Canales", bullets: ["Redes sociales: Instagram, TikTok, YouTube, X, LinkedIn", "Correo y un sitio web", "En persona en partidos y eventos"] },
            { title: "Elige dos", bullets: ["Donde ya está tu público", "No solo lo que está de moda"] },
            { title: "Con seguridad", bullets: ["Revisa las reglas de edad", "Controla quién puede contactarte", "Menos de 18 años: incluye a tu padre o madre"] }
          ],
          tryIt: "Elige tus dos canales y escribe una frase para cada uno que explique por qué tu público está ahí. Revisa los ajustes de privacidad de cada cuenta.",
          youCanNow: "elegir dos canales que coincidan con tu público y configurarlos con seguridad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Meta, público y canales",
        questions: [
          { q: "¿Cuál es una meta SMART?", options: ["Hacerme famoso", "Publicar más", "Conseguir 15 inscripciones para mi clínica gratuita antes del 30 de junio", "Ser una marca"], answer: 2, why: "Es específica, medible y tiene una fecha." },
          { q: "¿Qué es un público?", options: ["Las personas específicas a las que quieres llegar", "Todo el mundo en internet", "Solo tus compañeros de equipo", "Un tipo de publicación"], answer: 0, why: "El marketing funciona mejor dirigido a un grupo específico." },
          { q: "¿Cómo compruebas el perfil de tu público?", options: ["Confías del todo en la IA", "Adivinas", "Publicas y esperas", "Les preguntas a dos o tres personas reales de ese grupo"], answer: 3, why: "Las personas reales te dicen si tus suposiciones son correctas." },
          { q: "¿Con cuántos canales debes empezar?", options: ["Con todas las aplicaciones", "Con dos", "Con diez", "Con ninguno"], answer: 1, why: "Dos canales bien trabajados son mejores que muchos mal trabajados." },
          { q: "Tienes 16 años y vas a abrir una cuenta pública. Debes:", options: ["Compartir tu dirección", "Incluir a tu padre, madre o tutor y revisar las reglas de edad", "Dejar que cualquiera te escriba", "Mentir sobre tu edad"], answer: 1, why: "La seguridad y las reglas de edad van primero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear, poner en marcha y medir",
      lessons: [
        {
          title: "Hacer con IA el borrador de un plan de 4 semanas",
          minutes: 6,
          goal: "Usar un asistente de IA para hacer el borrador de un plan de publicaciones de 4 semanas y editarlo.",
          text: [
            "Dale a un asistente de IA tu meta, el perfil de tu público y tus canales, y pide: “Haz un plan de 4 semanas con 3 publicaciones por semana en estos dos canales. Para cada publicación da la idea, el formato (foto, video corto, historia, correo) y una llamada a la acción. Ponlo en una tabla.”",
            "Una llamada a la acción le dice a la gente qué hacer después: “Inscríbete en el enlace”, “Mira mis jugadas completas”, “Escríbeme para información del campamento”. Toda publicación que apoye tu meta debe tener una.",
            "Edita el plan para que encaje con tu horario de entrenamientos y de clases. Nunca planees publicaciones que les muestren a desconocidos tu ubicación exacta en tiempo real, tu casa o tu horario de clases."
          ],
          steps: ["Pega tu meta, el perfil de tu público y tus canales.", "Pide una tabla de 4 semanas: idea, formato, llamada a la acción.", "Edítala para que encaje con tu horario.", "Quita todo lo que comparta tu ubicación en vivo o tu casa."],
          words: [["Llamada a la acción", "un siguiente paso claro que le pides a la gente que haga."], ["Plan de contenido", "un calendario de lo que vas a publicar y cuándo."]],
          slides: [
            { title: "Dale a la IA", bullets: ["Tu meta SMART", "El perfil de tu público", "Tus dos canales"] },
            { title: "Pide una tabla", bullets: ["3 publicaciones por semana durante 4 semanas", "Idea, formato, llamada a la acción"] },
            { title: "Luego edítala", bullets: ["Que encaje con tus entrenamientos y clases", "Nada de ubicación en vivo ni datos de tu casa"] }
          ],
          tryIt: "Pídele a un asistente de IA tu plan de 4 semanas en una tabla. Edita al menos tres filas para que encajen con tu horario real y tu forma de hablar.",
          youCanNow: "hacer con IA el borrador de un plan de marketing de 4 semanas y editarlo."
        },
        {
          title: "Escribir publicaciones que suenen como tú, con honestidad",
          minutes: 5,
          goal: "Convertir las ideas del plan en publicaciones honestas con tu propia voz, avisando cuando haga falta.",
          text: [
            "La IA puede escribir un primer borrador del texto, pero la gente sigue a los deportistas porque son reales. Pídele a la IA tres opciones y luego reescribe la mejor con tus propias palabras. Léela en voz alta: ¿suena como tú?",
            "Sé honesto. No uses estadísticas falsas, seguidores falsos ni afirmaciones que no puedas demostrar. Los entrenadores, las marcas y los aficionados lo comprueban.",
            "Si una empresa te da dinero, productos gratis o cualquier otro beneficio para publicar, la FTC (la agencia de Estados Unidos que hace cumplir las leyes de publicidad) dice que debes dejarlo claro, por ejemplo “Publicidad” o “Gracias a [marca] por el equipo gratis”, junto a la publicación y no escondido entre los hashtags. En los videos, dilo y muéstralo en pantalla. Los deportistas universitarios también pueden tener que informar sus acuerdos; pregúntale a tu oficina de cumplimiento."
          ],
          steps: ["Pídele a la IA tres opciones de texto.", "Reescribe la mejor con tus propias palabras.", "Quita cualquier afirmación que no puedas demostrar.", "Si hay algún beneficio de una marca, agrega un aviso claro.", "Léela en voz alta antes de publicar."],
          words: [["Texto de la publicación", "las palabras que acompañan a una publicación."], ["Aviso de publicidad", "una frase clara que dice que te pagaron o te dieron algo para publicar."]],
          slides: [
            { title: "La IA hace el borrador, tú lo terminas", bullets: ["Pide tres opciones", "Reescríbela con tus propias palabras", "Léela en voz alta"] },
            { title: "Sé honesto", bullets: ["Nada de estadísticas ni seguidores falsos", "Nada de afirmaciones que no puedas demostrar"] },
            { title: "¿Te pagaron o te regalaron algo?", bullets: ["Dilo claro: “Publicidad” o “Gracias [marca] por el equipo gratis”", "Junto a la publicación, no escondido entre hashtags", "En los videos: dilo y muéstralo"] }
          ],
          sources: [
            { name: "FTC: Avisos básicos para influencers en redes sociales (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "NCAA: Nombre, imagen y semejanza (en inglés)", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" }
          ],
          tryIt: "Toma una idea de publicación de tu plan. Pídele a la IA tres opciones de texto, reescribe una con tu voz y léela en voz alta. Si tiene que ver con alguna marca, agrega un aviso claro.",
          youCanNow: "escribir publicaciones honestas con tu propia voz y avisar con claridad de tus relaciones con marcas."
        },
        {
          title: "Medir y ajustar",
          minutes: 5,
          goal: "Registrar tres números cada semana y hacer un cambio según lo que muestren.",
          text: [
            "Elige tres números relacionados con tu meta. Para una clínica: clics en el enlace, inscripciones y comentarios con preguntas. Para el reclutamiento: visitas al perfil, reproducciones del video de jugadas y respuestas de entrenadores. La cantidad de seguidores por sí sola puede engañar.",
            "La mayoría de las redes sociales muestran estos números en la sección de estadísticas o análisis de las cuentas profesionales o de creador. Anótalos en una hoja una vez por semana.",
            "Cada semana, pregúntate: ¿qué funcionó mejor y qué voy a cambiar? Puedes pegar tus números de la semana en un asistente de IA y pedirle una sugerencia, y luego decides tú."
          ],
          steps: ["Elige tres números relacionados con tu meta.", "Anótalos cada semana en una hoja.", "Busca tu mejor y tu peor publicación.", "Haz un cambio para la semana siguiente."],
          words: [["Estadísticas", "números que muestran cómo les va a tus publicaciones y tus páginas."], ["Métrica de vanidad", "un número que se ve bien pero no muestra avances hacia tu meta."]],
          slides: [
            { title: "Tres números ligados a tu meta", bullets: ["Clínica: clics, inscripciones, preguntas", "Reclutamiento: reproducciones, respuestas de entrenadores"] },
            { title: "Rutina semanal", bullets: ["Anota los números en una hoja", "Mejor y peor publicación", "Un cambio para la semana siguiente"] },
            { title: "Cuidado", bullets: ["Los seguidores por sí solos pueden engañar", "La IA sugiere; tú decides"] }
          ],
          tryIt: "Tarea final: pon en una página tu meta, tu público, tus canales, el plan hecho con IA y tres números. Pon en marcha la primera semana, anota los números y escribe un cambio para la segunda semana.",
          youCanNow: "medir tu marketing con tres números significativos y ajustarlo cada semana."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear, poner en marcha y medir",
        questions: [
          { q: "¿Qué es una llamada a la acción?", options: ["Una llamada telefónica a tu entrenador", "Un tipo de hashtag", "Una penalización", "Un siguiente paso claro que le pides a la gente que haga"], answer: 3, why: "Le dice a tu público qué hacer después." },
          { q: "¿Qué dato debe evitar tu plan?", options: ["Tu ubicación en vivo o tu casa", "Tu deporte", "Tus jugadas destacadas", "El enlace de inscripción a tu campamento"], answer: 0, why: "La ubicación en vivo y los datos de tu casa pueden ponerte en riesgo." },
          { q: "Una tienda de zapatillas te regala zapatillas para que publiques. ¿Qué debe incluir tu publicación?", options: ["Nada más", "Un hashtag escondido al final", "Un aviso claro como “Gracias [tienda] por las zapatillas gratis”", "Una opinión falsa"], answer: 2, why: "La FTC dice que los productos gratis cuentan y deben avisarse con claridad." },
          { q: "Para una meta de clínica, ¿cuál es más probablemente una métrica de vanidad?", options: ["Las inscripciones", "Los clics en el enlace", "Las preguntas sobre la clínica", "La cantidad de seguidores por sí sola"], answer: 3, why: "Los seguidores no muestran avances hacia las inscripciones." },
          { q: "Después de la primera semana, el mejor paso siguiente es:", options: ["Abandonar", "Hacer un cambio según tus números", "Cambiar todo", "Comprar seguidores"], answer: 1, why: "Un cambio a la vez muestra qué funciona." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Estrategias de marketing digital con IA para deportistas",
    questions: [
      { q: "Hacer marketing significa:", options: ["Publicar al azar", "Comprar seguidores", "Lograr que las personas indicadas te conozcan, les caigas bien y confíen en ti", "Solo vender cosas"], answer: 2, why: "Se trata de las personas indicadas y de la confianza." },
      { q: "¿Qué significa la T de SMART?", options: ["Con un plazo definido (en inglés, Time-bound)", "De moda (Trendy)", "Total", "Equipo (Team)"], answer: 0, why: "Una meta SMART tiene una fecha límite." },
      { q: "¿Qué meta NO es SMART?", options: ["Hacerme famoso", "Conseguir 10 respuestas de entrenadores antes del 1 de marzo", "Vender 30 cupos del campamento antes del 15 de mayo", "Conseguir 200 reproducciones del video de jugadas antes del viernes"], answer: 0, why: "“Hacerme famoso” no tiene número ni fecha." },
      { q: "Un perfil del público incluye:", options: ["Sus contraseñas", "Solo tus estadísticas", "Quiénes son y qué les importa", "Las estadísticas de tu rival"], answer: 2, why: "Describe a las personas a las que quieres llegar." },
      { q: "Los padres de campamento pueden pasar el tiempo en:", options: ["Solo videojuegos", "Grupos de Facebook y lugares de la zona", "Solo LinkedIn", "Ningún lugar en internet"], answer: 1, why: "Elige los canales donde está ese público." },
      { q: "¿Cómo debes elegir los canales?", options: ["Lo que esté de moda", "Donde tu público ya pasa el tiempo", "Todos", "Al azar"], answer: 1, why: "Ve adonde está tu público." },
      { q: "La interacción significa:", options: ["Casarse", "Solo los seguidores", "Cómo interactúa la gente: me gusta, comentarios, compartidos, guardados", "Anuncios"], answer: 2, why: "La interacción muestra interés real." },
      { q: "¿Qué debes darle a la IA para hacer el borrador de tu plan?", options: ["Tu contraseña", "Tu dirección", "Tus datos bancarios", "La meta, el perfil del público y los canales"], answer: 3, why: "Eso hace que el plan se ajuste a tu meta." },
      { q: "Una buena tabla del plan incluye:", options: ["Idea, formato y llamada a la acción", "Solo hashtags", "Solo fechas", "Tus calificaciones"], answer: 0, why: "Cada publicación necesita una idea, un formato y un siguiente paso." },
      { q: "¿Cuál es una llamada a la acción?", options: ["“Lindo día”", "“Inscríbete en el enlace”", "“Jaja”", "“El partido estuvo divertido”"], answer: 1, why: "Le dice a la gente qué hacer después." },
      { q: "La IA escribe un texto para tu publicación. Debes:", options: ["Publicarlo sin leerlo", "Copiar el de otra persona", "Reescribirlo con tu propia voz", "Agregarle estadísticas falsas"], answer: 2, why: "La gente te sigue porque eres real." },
      { q: "¿Qué nunca debes publicar?", options: ["Estadísticas falsas", "Tus jugadas destacadas", "Un agradecimiento a tu entrenador", "La información de tu campamento"], answer: 0, why: "La honestidad importa; la gente lo comprueba." },
      { q: "¿Dónde debe ir un aviso de publicidad?", options: ["Escondido entre muchos hashtags", "Solo en tu biografía", "En ningún lado", "Junto a la publicación, fácil de ver"], answer: 3, why: "La FTC dice que los avisos deben ser difíciles de pasar por alto." },
      { q: "En un video patrocinado, el aviso debe:", options: ["Ir solo en la descripción", "Decirse y mostrarse en pantalla", "No ponerse", "Ir en un comentario"], answer: 1, why: "Los avisos en video deben estar dentro del propio video." },
      { q: "¿A quién debe preguntarle un deportista universitario sobre cómo informar sus acuerdos de NIL?", options: ["A un aficionado cualquiera", "A la oficina de cumplimiento", "Solo a una IA", "A nadie"], answer: 1, why: "Las reglas cambian según la escuela y el nivel." },
      { q: "¿Dónde sueles encontrar los números de tus publicaciones?", options: ["En la aplicación del clima", "En tu calendario", "En ningún lado", "En la sección de estadísticas o análisis de la aplicación"], answer: 3, why: "Las cuentas profesionales o de creador muestran estadísticas." },
      { q: "Para una meta de reclutamiento, ¿qué número importa más?", options: ["Las respuestas de entrenadores", "Los me gusta al azar", "La cantidad de emojis", "El color del perfil"], answer: 0, why: "Las respuestas de entrenadores muestran un avance real." },
      { q: "¿Cada cuánto debes anotar tus números?", options: ["Una vez al año", "Nunca", "Cada semana", "Cada minuto"], answer: 2, why: "Cada semana te deja ajustar a tiempo." },
      { q: "La IA sugiere un cambio. ¿Quién decide?", options: ["La IA", "Tus seguidores", "Nadie", "Tú"], answer: 3, why: "La IA sugiere; tú decides." },
      { q: "¿Cuántos cambios debes hacer cada semana?", options: ["Diez", "Uno", "Todo", "Ninguno nunca"], answer: 1, why: "Un cambio a la vez muestra qué funcionó." }
    ]
  }
};

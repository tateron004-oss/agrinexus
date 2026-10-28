"use strict";

// Koach Learn course (Spanish translation of youth-ai-career-exploration). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Skill-building course for teens about 13-18.

module.exports = {
  id: "youth-ai-career-exploration-es",
  lang: "es",
  translationOf: "youth-ai-career-exploration",
  category: "Youth",
  name: "La IA y la exploración de carreras",
  skills: "Encontrar carreras que coincidan con tus intereses, Investigar una carrera con fuentes oficiales, Ver cómo la IA está cambiando los empleos, Hacer un plan de ruta profesional, Prepararte para tu primer empleo",
  outcome: "usar un cuestionario gratuito de intereses, un asistente de IA y sitios oficiales de carreras para elegir dos carreras que te queden bien, revisar su sueldo, su formación y sus perspectivas, y hacer un plan paso a paso desde la preparatoria hasta tu primer empleo en ese campo.",
  about: [
    "Este curso es para adolescentes de unos 13 a 18 años que se preguntan \"¿Qué podría ser?\" Todavía no necesitas saberlo. Este curso te ayuda a explorar.",
    "Vas a hacer un cuestionario gratuito de intereses, usar la IA para generar ideas de carreras que encajen con lo que te gusta (videojuegos, música, deportes, ayudar a las personas, construir cosas), revisar los datos reales en sitios oficiales del gobierno sobre carreras, ver cómo la IA está cambiando el trabajo y armar un plan que puedes empezar este año.",
    "Revisa la regla de edad de cada herramienta y las reglas de IA de tu escuela, y habla con tu madre, padre o tutor antes de registrarte en cualquier cosa. Tu orientador escolar también es un gran compañero para este curso. Cada lección dura unos cinco minutos y termina con una tarea \"Pruébalo ahora\"."
  ],
  finalTask: "Haz un plan de carrera de una página para una carrera que te dé curiosidad: por qué encaja con tus intereses, su formación típica, su sueldo y sus perspectivas de empleo según un sitio oficial, una forma en que se usa la IA en ese trabajo y tres pasos que puedes dar este año escolar (una clase, un club o actividad, y una persona con quien hablar).",
  chapters: [
    {
      name: "Capítulo 1: Encontrar carreras que te queden bien",
      lessons: [
        {
          title: "Empezar por lo que te gusta",
          minutes: 5,
          goal: "Hacer un cuestionario gratuito de intereses y anotar tus intereses principales.",
          text: [
            "Una buena búsqueda de carrera empieza contigo: lo que disfrutas, en lo que eres bueno y lo que te importa. Quizás te encanta arreglar cosas, dibujar, organizar eventos, ayudar a tus amigos con sus problemas o descubrir cómo funciona un juego.",
            "My Next Move es un sitio gratuito de carreras del Departamento de Trabajo de EE. UU. Su perfilador de intereses te pregunta qué tipos de trabajo podrías disfrutar y te sugiere carreras que coinciden. Tu orientador escolar también puede tener otros cuestionarios de intereses.",
            "Anota tus resultados y las tres actividades que más disfrutas. Esas son tus primeras pistas."
          ],
          steps: ["Entra a mynextmove.org.", "Abre el perfilador de intereses y responde con honestidad.", "Anota tus áreas de interés principales.", "Agrega las tres actividades que más disfrutas."],
          words: [["Perfilador de intereses", "un cuestionario que relaciona lo que te gusta con tipos de trabajo."], ["Carrera", "el tipo de trabajo que haces durante mucho tiempo, a menudo con habilidades que van creciendo."]],
          sources: [{ name: "My Next Move (Departamento de Trabajo de EE. UU.)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Empieza por ti", bullets: ["Lo que disfrutas", "En lo que eres bueno", "Lo que te importa"] },
            { title: "Haz un cuestionario gratuito de intereses", bullets: ["My Next Move (mynextmove.org)", "Gratis, del Departamento de Trabajo de EE. UU.", "Tu orientador puede tener otros"] },
            { title: "Anota tus pistas", bullets: ["Tus áreas de interés principales", "Tres actividades que te encantan"] }
          ],
          tryIt: "Haz el perfilador de intereses en mynextmove.org (o uno que te dé tu orientador). Anota tus áreas de interés principales y tres cosas que te encanta hacer.",
          youCanNow: "describir tus intereses de una forma que te ayuda a buscar carreras."
        },
        {
          title: "Generar ideas de carreras con IA",
          minutes: 5,
          goal: "Usar la IA para convertir tus intereses en una lista de carreras para explorar.",
          text: [
            "Ahora dale tus pistas a un asistente de IA que tengas permiso de usar: \"Tengo 15 años. Me gustan los videojuegos, dibujar y ayudar a niños más pequeños. Sugiere 10 carreras que mezclen esto, desde algunas que piden un programa de formación corto hasta otras que piden universidad.\"",
            "Haz preguntas de seguimiento: \"¿Cuáles de estas trabajan con IA?\" \"¿Cuáles puedo probar en la preparatoria?\" \"Explica cómo es un día en la carrera 3.\"",
            "La IA es buena para dar ideas, pero puede equivocarse con el sueldo, la formación y las cifras de empleo. Trata su lista como ideas para revisar, no como hechos."
          ],
          steps: ["Dale a la IA tu rango de edad y tus intereses (sin datos privados).", "Pide 10 carreras con distintas rutas de formación.", "Haz preguntas de seguimiento sobre un día típico y los pasos en la preparatoria.", "Elige dos para investigar."],
          words: [["Ruta de formación", "los estudios o la práctica que necesitas para un trabajo, como un certificado, un aprendizaje o un título universitario."], ["Aprendizaje (apprenticeship)", "un trabajo pagado donde aprendes un oficio calificado mientras trabajas."]],
          slides: [
            { title: "Dale tus pistas a la IA", bullets: ["Tus intereses y tu rango de edad", "Pide 10 carreras", "Mezcla formación corta y rutas universitarias"] },
            { title: "Haz preguntas de seguimiento", bullets: ["\"¿Cómo es un día?\"", "\"¿Qué puedo probar en la preparatoria?\""] },
            { title: "Ideas, no hechos", bullets: ["La IA puede equivocarse con el sueldo y la formación", "Elige dos carreras para revisar"] }
          ],
          tryIt: "Dale tus intereses a un asistente de IA y pídele 10 carreras con distintas rutas de formación. Pregunta cómo es un día en dos de ellas y luego elige tus dos favoritas.",
          youCanNow: "usar la IA para generar ideas de carreras que coincidan con tus intereses."
        },
        {
          title: "Revisar los datos en sitios oficiales de carreras",
          minutes: 5,
          goal: "Buscar el sueldo, la formación y las perspectivas de empleo de una carrera en un sitio oficial.",
          text: [
            "El Occupational Outlook Handbook (Manual de perspectivas ocupacionales) de la Oficina de Estadísticas Laborales de EE. UU. (bls.gov/ooh) es una guía oficial y gratuita de cientos de empleos. Para cada uno muestra el sueldo típico, la educación y la formación habituales, y cuántos empleos se esperan en el futuro.",
            "My Next Move también muestra lo que hacen las personas en cada trabajo, las habilidades que usan y la formación que necesitan. El sueldo cambia con el tiempo y de un lugar a otro, así que siempre busca las cifras actuales en vez de confiar en un número que te dio la IA o un amigo.",
            "Compara lo que te dijo la IA con lo que dice el sitio oficial. Cuando no coincidan, confía en el sitio oficial."
          ],
          steps: ["Abre bls.gov/ooh o mynextmove.org.", "Busca tu carrera.", "Anota el sueldo, la formación típica y las perspectivas de empleo.", "Compara con lo que dijo la IA y confía en el sitio oficial."],
          words: [["Sueldo mediano", "el sueldo del medio: la mitad de los trabajadores gana más y la mitad gana menos."], ["Perspectivas de empleo", "cuántos empleos se esperan en el futuro."]],
          sources: [{ name: "Occupational Outlook Handbook (Oficina de Estadísticas Laborales de EE. UU.)", url: "https://www.bls.gov/ooh/" }, { name: "My Next Move (Departamento de Trabajo de EE. UU.)", url: "https://www.mynextmove.org/" }],
          slides: [
            { title: "Guías oficiales de carreras", bullets: ["bls.gov/ooh: sueldo, formación, perspectivas", "mynextmove.org: tareas, habilidades, formación"] },
            { title: "Busca las cifras actuales", bullets: ["El sueldo cambia con el tiempo y según el lugar", "No confíes solo en un número de la IA"] },
            { title: "Compara y decide", bullets: ["La IA contra el sitio oficial", "Si no coinciden, confía en el sitio oficial"] }
          ],
          tryIt: "Busca tus dos carreras en bls.gov/ooh o mynextmove.org. Anota la formación típica, el sueldo y las perspectivas de empleo de cada una, y apunta una cosa que la IA dijo diferente.",
          youCanNow: "investigar los datos reales de una carrera en un sitio oficial."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Encontrar carreras que te queden bien",
        questions: [
          { q: "¿Qué hace un perfilador de intereses?", options: ["Encuentra tu contraseña", "Relaciona lo que te gusta con tipos de trabajo", "Te da un empleo", "Califica tu tarea"], answer: 1, why: "Sugiere carreras según tus intereses." },
          { q: "¿Quién ofrece My Next Move?", options: ["Una empresa de videojuegos", "Una app de redes sociales", "La cafetería de tu escuela", "El Departamento de Trabajo de EE. UU."], answer: 3, why: "Lo patrocina el Departamento de Trabajo de EE. UU." },
          { q: "¿Qué instrucción es mejor para generar ideas de carreras?", options: ["\"Me gustan los juegos, dibujar y ayudar a niños. Sugiere 10 carreras con distintas rutas de formación.\"", "\"trabajos\"", "\"dame un trabajo\"", "\"qué es el trabajo\""], answer: 0, why: "Da intereses y pide variedad." },
          { q: "La IA dice que un trabajo paga cierta cantidad. Deberías:", options: ["Creerle", "Contárselo a todos", "Revisar el sueldo actual en un sitio oficial", "Elegir ese trabajo de inmediato"], answer: 2, why: "La IA puede equivocarse; los sitios oficiales tienen cifras actuales." },
          { q: "¿Qué es el sueldo mediano?", options: ["El sueldo más alto", "El sueldo más bajo", "El sueldo del medio: la mitad gana más y la mitad gana menos", "El sueldo solo de los practicantes"], answer: 2, why: "La mediana es el punto del medio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Planear tu camino",
      lessons: [
        {
          title: "Cómo la IA está cambiando el trabajo",
          minutes: 5,
          goal: "Describir una forma en que se usa la IA en una carrera que te gusta y las habilidades humanas que siguen importando.",
          text: [
            "La IA está cambiando muchos empleos. Los enfermeros la usan para ayudarse con los expedientes, los mecánicos para encontrar fallas en los autos, los diseñadores para probar ideas rápido y los estudios de videojuegos para probar niveles. Algunas tareas las hace la IA; aparecen tareas nuevas.",
            "Las habilidades humanas importan todavía más: hablar con las personas, resolver problemas nuevos, ser creativo, ser confiable y saber cuándo la IA se equivoca.",
            "Pregúntale a la IA: \"¿Cómo se usa hoy la IA en [carrera]? ¿Qué habilidades humanas siguen siendo las más importantes?\" Luego revisa lo que dice con una persona real que tenga ese trabajo o con un sitio de noticias o de la industria que sea confiable."
          ],
          words: [["Automatización", "cuando máquinas o programas hacen tareas que antes hacían las personas."], ["Habilidades blandas", "habilidades para tratar con personas, como la comunicación, el trabajo en equipo y la responsabilidad."]],
          slides: [
            { title: "La IA está cambiando los empleos", bullets: ["Enfermeros, mecánicos, diseñadores, probadores de juegos", "Algunas tareas pasan a la IA; aparecen tareas nuevas"] },
            { title: "Las habilidades humanas importan más", bullets: ["Hablar con las personas", "Resolver problemas nuevos", "Creatividad y confiabilidad", "Darte cuenta cuando la IA se equivoca"] },
            { title: "Averígualo para tu carrera", bullets: ["Pregúntale a la IA cómo se usa", "Revisa con una persona real o un sitio confiable"] }
          ],
          tryIt: "Pregúntale a la IA cómo se usa la IA en una de tus dos carreras y qué habilidades humanas importan más. Anota un uso de la IA, dos habilidades humanas y una pregunta que le harías a una persona real que tenga ese trabajo.",
          youCanNow: "explicar cómo la IA toca una carrera y qué habilidades humanas siguen importando."
        },
        {
          title: "Armar una ruta desde la preparatoria",
          minutes: 5,
          goal: "Hacer un plan paso a paso desde ahora hasta un primer empleo en una carrera.",
          text: [
            "Una ruta profesional es el camino desde donde estás ahora hasta el trabajo que quieres. Puede incluir clases, clubes, voluntariado, un programa de verano, un certificado, un aprendizaje, un colegio comunitario o una universidad.",
            "Pregúntale a la IA: \"Estoy en décimo grado y me interesa ser electricista. Haz una ruta paso a paso desde ahora hasta mi primer empleo, con cosas que pueda hacer este año.\" Luego revisa las reglas de formación en sitios oficiales, porque las licencias y los programas cambian según el estado.",
            "Tu orientador escolar te puede decir qué clases y programas ofrece tu escuela, como la educación técnica y profesional (CTE) o la inscripción doble."
          ],
          steps: ["Di tu grado y la carrera que buscas.", "Pídele a la IA una ruta paso a paso con acciones para este año.", "Revisa las reglas de formación y de licencias en sitios oficiales.", "Pregúntale a tu orientador qué ofrece tu escuela."],
          words: [["Ruta profesional", "los pasos desde la escuela hasta un trabajo en un campo."], ["CTE", "educación técnica y profesional: clases escolares que enseñan habilidades para el trabajo."], ["Inscripción doble", "tomar clases universitarias mientras sigues en la preparatoria."]],
          slides: [
            { title: "Una ruta es un camino", bullets: ["De donde estás al trabajo que quieres", "Clases, clubes, programas, formación"] },
            { title: "Pídele los pasos a la IA", bullets: ["Tu grado y la carrera que buscas", "Cosas que puedes hacer este año"] },
            { title: "Revisa y pregunta", bullets: ["Las licencias y los programas cambian según el estado", "Pregunta a tu orientador por CTE e inscripción doble"] }
          ],
          tryIt: "Pídele a la IA una ruta paso a paso hacia una de tus carreras. Elige tres cosas que puedes hacer este año escolar y revisa una de ellas con tu orientador o en un sitio oficial.",
          youCanNow: "armar un plan de ruta profesional realista."
        },
        {
          title: "Prepararte para tu primer empleo",
          minutes: 5,
          goal: "Conocer las reglas básicas de trabajo para jóvenes y preparar una presentación sencilla para tu primer empleo.",
          text: [
            "Un primer empleo, el voluntariado o acompañar a un trabajador por un día te ayudan a poner a prueba una carrera. Según la ley federal, la mayoría de los empleos piden que tengas al menos 14 años. Si tienes 14 o 15, tus horas son limitadas; por ejemplo, no más de 3 horas en un día de escuela y solo entre las 7 a.m. y las 7 p.m. durante la mayor parte del año (hasta las 9 p.m. del 1 de junio al Día del Trabajo). A los 16 y 17, la ley federal no limita las horas, pero nadie menor de 18 puede hacer trabajos peligrosos.",
            "Muchos estados tienen reglas más estrictas y pueden pedir un permiso de trabajo. Cuando aplican la ley federal y la estatal, cuenta la más estricta. Revisa la oficina de trabajo de tu estado y habla con tu madre, padre o tutor.",
            "La IA te puede ayudar a escribir una presentación corta sobre ti: \"Tengo 15 años, soy responsable, ayudo a entrenar al equipo de fútbol de mi hermanito y quiero aprender atención al cliente.\" Practica decirla en voz alta. No pongas tu dirección ni tu número de teléfono en la IA."
          ],
          steps: ["Revisa las reglas federales y estatales de trabajo para jóvenes.", "Habla con tu madre, padre o tutor sobre trabajar o hacer voluntariado.", "Usa la IA para escribir un borrador de 3 oraciones sobre ti.", "Practícalo en voz alta."],
          words: [["Permiso de trabajo", "un documento que algunos estados piden antes de que un adolescente pueda trabajar."], ["Acompañamiento laboral (job shadowing)", "seguir a un trabajador durante un día para ver cómo es el trabajo."], ["Trabajo peligroso", "trabajo riesgoso que no está permitido para nadie menor de 18 años."]],
          sources: [{ name: "Departamento de Trabajo de EE. UU., hoja informativa n.º 43: reglas de trabajo infantil en empleos no agrícolas", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }, { name: "Departamento de Trabajo de EE. UU.: trabajo infantil y leyes estatales", url: "https://www.dol.gov/agencies/whd/child-labor" }],
          slides: [
            { title: "Reglas federales de trabajo para jóvenes", bullets: ["La mayoría de los empleos: desde los 14 años", "14-15: máximo 3 horas en días de escuela", "14-15: de 7 a.m. a 7 p.m. (9 p.m. del 1 de junio al Día del Trabajo)", "Nada de trabajos peligrosos antes de los 18"] },
            { title: "Revisa tu estado", bullets: ["Los estados pueden pedir un permiso de trabajo", "Cuenta la regla más estricta", "Habla con tu madre, padre o tutor"] },
            { title: "Tu presentación para un primer empleo", bullets: ["3 oraciones sobre ti", "Haz el borrador con IA, sin datos privados", "Practícala en voz alta"] }
          ],
          tryIt: "Tarea final: haz tu plan de carrera de una página: por qué la carrera encaja contigo, su formación, sueldo y perspectivas según un sitio oficial, una forma en que se usa la IA en ella y tres pasos para este año escolar. Agrega abajo tu presentación de 3 oraciones para un primer empleo.",
          youCanNow: "explorar carreras, revisar los datos, planear tu camino y presentarte para un primer empleo."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Planear tu camino",
        questions: [
          { q: "¿Qué habilidad importa MÁS a medida que se extiende la IA?", options: ["La comunicación y resolver problemas nuevos", "Ignorar a las personas", "Nunca aprender herramientas nuevas", "Copiar respuestas"], answer: 0, why: "Las habilidades humanas valen más cuando la IA se encarga de las tareas rutinarias." },
          { q: "¿Qué es una ruta profesional?", options: ["Un sendero para caminar", "Un mapa de videojuego", "Un tipo de currículum", "Los pasos desde la escuela hasta un trabajo en un campo"], answer: 3, why: "Una ruta es el camino de ahora hasta el trabajo." },
          { q: "¿Quién te puede decir qué clases de CTE o de inscripción doble ofrece tu escuela?", options: ["Un anuncio emergente", "Tu orientador escolar", "Una app cualquiera", "Nadie"], answer: 1, why: "Los orientadores conocen los programas de la escuela." },
          { q: "Según la ley federal, un joven de 15 años puede trabajar en un día de escuela como máximo:", options: ["3 horas", "8 horas", "12 horas", "Sin límite"], answer: 0, why: "El límite federal para jóvenes de 14 y 15 años es de 3 horas en un día de escuela." },
          { q: "La regla de trabajo juvenil de tu estado es más estricta que la federal. ¿Cuál cuenta?", options: ["La regla federal", "Ninguna", "La regla más estricta", "La que le guste a tu amigo"], answer: 2, why: "Cuando aplican las dos, hay que seguir la norma más estricta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y la exploración de carreras",
    questions: [
      { q: "Una buena búsqueda de carrera empieza con:", options: ["Solo el trabajo que más paga", "Lo que disfrutas y en lo que eres bueno", "Una elección al azar", "Lo que dice un desconocido"], answer: 1, why: "Tus intereses son las mejores pistas para empezar." },
      { q: "mynextmove.org es:", options: ["Una tienda de juegos", "Un sitio de citas", "Una app de redes sociales", "Un sitio gratuito de carreras del Departamento de Trabajo de EE. UU."], answer: 3, why: "Lo patrocina el Departamento de Trabajo." },
      { q: "Después de un cuestionario de intereses deberías:", options: ["Olvidar los resultados", "Publicar tu contraseña", "Dejar la escuela", "Anotar tus áreas de interés principales"], answer: 3, why: "Tus resultados son pistas para el siguiente paso." },
      { q: "Al generar ideas de carreras con IA, deja fuera:", options: ["Tus intereses", "Datos privados como tu dirección", "Tu rango de edad", "Tu materia favorita"], answer: 1, why: "Nunca pongas información privada en la IA." },
      { q: "Un aprendizaje (apprenticeship) es:", options: ["Un videojuego", "Una prueba sin paga", "Un trabajo pagado donde aprendes un oficio mientras trabajas", "Una residencia universitaria"], answer: 2, why: "Los aprendices ganan dinero mientras aprenden." },
      { q: "La lista de carreras de la IA debe tratarse como:", options: ["Ideas para revisar", "Hechos garantizados", "Una oferta de trabajo", "Una calificación escolar"], answer: 0, why: "La IA puede equivocarse con el sueldo y la formación." },
      { q: "bls.gov/ooh muestra de cada trabajo:", options: ["Letras de canciones", "El sueldo, la formación y las perspectivas de empleo", "Puntajes de juegos", "El clima"], answer: 1, why: "El Occupational Outlook Handbook da esos datos." },
      { q: "La IA y bls.gov no coinciden sobre la formación para un trabajo. Confía en:", options: ["La IA", "Ninguno", "Un meme", "El sitio oficial"], answer: 3, why: "Los sitios oficiales están revisados y actualizados." },
      { q: "Perspectivas de empleo significa:", options: ["Cuántos empleos se esperan en el futuro", "La vista desde la oficina", "Tu ropa para el trabajo", "El humor de tu jefe"], answer: 0, why: "Las perspectivas tratan de las cifras de empleo futuras." },
      { q: "Automatización significa:", options: ["Manejar un auto", "Una regla de la escuela", "Máquinas o programas que hacen tareas que antes hacían las personas", "Un estilo de música"], answer: 2, why: "La automatización pasa tareas a las máquinas." },
      { q: "¿Cuál es una habilidad blanda?", options: ["Solo la velocidad para escribir", "Tener una laptop", "El trabajo en equipo", "Saber una contraseña"], answer: 2, why: "Las habilidades blandas son habilidades con personas, como el trabajo en equipo." },
      { q: "Para revisar lo que dice la IA sobre la IA en un trabajo, puedes:", options: ["Preguntarle a una persona real que tenga ese trabajo", "Confiar en ella por completo", "Preguntarle a un anuncio emergente", "No revisar"], answer: 0, why: "Las personas que tienen el trabajo saben cómo funciona de verdad." },
      { q: "Inscripción doble significa:", options: ["Tener dos casilleros", "Tener dos teléfonos", "Tener dos almuerzos", "Tomar clases universitarias mientras estás en la preparatoria"], answer: 3, why: "Los estudiantes ganan créditos universitarios antes." },
      { q: "¿Por qué revisar las licencias en sitios oficiales?", options: ["La IA siempre tiene razón", "Las reglas cambian según el estado", "Nunca cambian", "No hace falta"], answer: 1, why: "Las reglas de formación y de licencias varían según el estado." },
      { q: "Una buena instrucción para pedir una ruta incluye:", options: ["Tu grado y la carrera que buscas", "Tu contraseña", "Tu dirección", "Nada"], answer: 0, why: "El grado y la meta le permiten a la IA hacer un plan adecuado." },
      { q: "Según la ley federal, los jóvenes de 14 y 15 años normalmente solo pueden trabajar entre:", options: ["La medianoche y las 6 a.m.", "A cualquier hora", "Las 7 a.m. y las 7 p.m. (9 p.m. del 1 de junio al Día del Trabajo)", "Solo en días de escuela"], answer: 2, why: "Esos son los límites federales de horario." },
      { q: "Según la ley federal, ¿quién no puede hacer trabajos peligrosos?", options: ["Solo los menores de 12", "Cualquier persona menor de 18", "Los adultos", "Nadie"], answer: 1, why: "Los trabajos peligrosos están prohibidos para cualquier menor de 18 años." },
      { q: "Antes de aceptar un primer empleo deberías:", options: ["Mentir sobre tu edad", "Faltar a la escuela", "Darle tu número de teléfono a la IA", "Revisar las reglas de tu estado y hablar con tu madre, padre o tutor"], answer: 3, why: "Las reglas estatales pueden pedir un permiso, y tu madre, padre o tutor debe saberlo." },
      { q: "El acompañamiento laboral (job shadowing) es:", options: ["Esconderte de tu jefe", "Un modo de videojuego", "Un tipo de currículum", "Seguir a un trabajador por un día para ver el trabajo"], answer: 3, why: "El acompañamiento te deja ver un trabajo de cerca." },
      { q: "Una presentación para un primer empleo debe ser:", options: ["Un ensayo de 10 páginas", "Unas 3 oraciones sobre ti, practicadas en voz alta", "Tu dirección y tu número de teléfono", "Escrita por la IA y nunca leída"], answer: 1, why: "Algo corto y practicado es fácil de decir con confianza." }
    ]
  }
};

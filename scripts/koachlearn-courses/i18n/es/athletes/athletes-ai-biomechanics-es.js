"use strict";

// Koach Learn course (Spanish translation of athletes-ai-biomechanics). Shape and translation rules: scripts/koachlearn-courses/README.md.
// General education only: technique and injury questions go to the coach, athletic trainer, physical therapist or doctor.

module.exports = {
  id: "athletes-ai-biomechanics-es",
  lang: "es",
  translationOf: "athletes-ai-biomechanics",
  category: "Athletes",
  name: "Biomecánica con IA",
  skills: "Explicar términos básicos de biomecánica, Grabar un movimiento para analizarlo, Dividir una técnica en fases, Usar herramientas de detección de postura y de cuadro por cuadro, Comparar la técnica de antes y después con tu entrenador",
  outcome: "grabar un movimiento deportivo desde los ángulos correctos, dividirlo en fases, usar la revisión cuadro por cuadro (y, si quieres, una herramienta gratuita de detección de postura) para describir un punto de técnica, y armar una comparación de antes y después para revisarla con tu entrenador.",
  about: [
    "La biomecánica es el estudio de cómo se mueve el cuerpo. Este curso es para atletas y entrenadores que quieren entender mejor la técnica con la cámara del teléfono y herramientas de IA, en deportes con carreras, saltos, lanzamientos, tiros, golpes con bate o raqueta y patadas.",
    "Vas a aprender algunos términos clave, grabar bien un movimiento, dividirlo en fases y usar la cámara lenta, la revisión cuadro por cuadro y las herramientas de postura con IA para ver lo que pasa. Luego vas a comparar el antes y el después con tu entrenador.",
    "Esto es educación general. Los cambios de técnica deben venir de tu entrenador, y las preguntas sobre dolor, lesiones o regreso al juego van con tu preparador físico, un fisioterapeuta o un médico. Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\"; una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso."
  ],
  finalTask: "Elige un movimiento de tu deporte. Grábalo de lado y de frente, divídelo en fases, usa la revisión cuadro por cuadro para describir un punto de técnica con capturas de pantalla, acuerda una indicación con tu entrenador, practícala y vuelve a grabar dos semanas después para hacer una comparación de antes y después, una al lado de la otra.",
  chapters: [
    {
      name: "Capítulo 1: Ver el movimiento",
      lessons: [
        {
          title: "La biomecánica en palabras sencillas",
          minutes: 5,
          goal: "Explicar cinco términos básicos de biomecánica con un ejemplo de tu deporte.",
          text: [
            "La biomecánica estudia cómo las fuerzas y las posiciones del cuerpo crean el movimiento. Los entrenadores la usan para hacer la técnica más eficiente y bajar el riesgo de lesiones.",
            "Cinco palabras útiles: Ángulo articular (el ángulo de una rodilla, cadera o codo). Rango de movimiento (cuánto se mueve una articulación). Centro de masa (el punto de equilibrio del cuerpo). Cadena cinética (cómo pasa la fuerza desde el suelo por las piernas, la cadera, el tronco y los brazos). Fuerza de reacción del suelo (el empuje que te devuelve el suelo cuando lo empujas).",
            "Ejemplo: en un tiro en suspensión, la fuerza empieza en las piernas, pasa por la cadera y el tronco y termina en el brazo y la muñeca. Esa es la cadena cinética. Un asistente de IA te puede explicar cualquier término con un ejemplo de tu deporte."
          ],
          words: [["Biomecánica", "el estudio de cómo las fuerzas y las posiciones del cuerpo crean el movimiento."], ["Cadena cinética", "la forma en que la fuerza pasa de una parte del cuerpo a la siguiente, como de las piernas a la cadera y a los brazos."], ["Centro de masa", "el punto de equilibrio de tu cuerpo."]],
          slides: [
            { title: "Biomecánica", bullets: ["Cómo las fuerzas y las posiciones crean el movimiento", "Técnica más eficiente", "Menos riesgo de lesiones"] },
            { title: "Cinco palabras clave", bullets: ["Ángulo articular, rango de movimiento", "Centro de masa", "Cadena cinética, fuerza de reacción del suelo"] },
            { title: "Ejemplo del tiro en suspensión", bullets: ["Piernas -> cadera -> tronco -> brazo -> muñeca", "Esa es la cadena cinética"] }
          ],
          tryIt: "Elige un movimiento de tu deporte. Pide a un asistente de IA que te explique su cadena cinética con palabras sencillas. Escríbela con tus propias palabras en tres oraciones.",
          youCanNow: "explicar términos básicos de biomecánica con un ejemplo de tu deporte."
        },
        {
          title: "Grabar un movimiento para analizarlo",
          minutes: 5,
          goal: "Grabar un movimiento desde los ángulos correctos para poder analizarlo.",
          text: [
            "El análisis necesita un buen video. Graba de lado (para ver los ángulos articulares hacia adelante y hacia atrás) y de frente o de espaldas (para ver si las rodillas se van hacia adentro, si la cadera se cae o si los brazos se cruzan). Pon la cámara más o menos a la altura de la cadera, fija y lo bastante lejos para ver todo el cuerpo.",
            "Usa el modo de cámara lenta del teléfono y buena luz. Usa ropa que deje ver la forma del cuerpo y pon marcas de cinta en el suelo para grabar desde el mismo lugar la próxima vez.",
            "Graba varias repeticiones, no solo una, y graba cuando ya hayas calentado. Pide permiso antes de grabar a otras personas y sigue las reglas de tu equipo."
          ],
          steps: ["Pon el teléfono a la altura de la cadera en un trípode o soporte.", "Graba de lado.", "Graba de frente o de espaldas.", "Usa cámara lenta y buena luz.", "Marca los lugares de la cámara y del atleta para la próxima vez.", "Graba de tres a cinco repeticiones."],
          words: [["Vista sagital", "una vista de lado, que muestra el movimiento hacia adelante y hacia atrás."], ["Vista frontal", "una vista de frente o de espaldas, que muestra el movimiento de lado a lado."]],
          slides: [
            { title: "Dos ángulos", bullets: ["De lado: ángulos articulares", "De frente o de espaldas: rodillas, cadera, brazos"] },
            { title: "Cómo poner la cámara", bullets: ["A la altura de la cadera, fija", "Todo el cuerpo en la imagen", "Cámara lenta, buena luz"] },
            { title: "Que se pueda repetir", bullets: ["Marca los lugares de la cámara y del atleta", "De tres a cinco repeticiones ya en calor"] }
          ],
          tryIt: "Graba un movimiento de lado y de frente, tres repeticiones de cada uno, con el teléfono a la altura de la cadera y la cámara lenta activada. Marca los lugares.",
          youCanNow: "grabar bien un movimiento para un análisis biomecánico."
        },
        {
          title: "Dividir una técnica en fases",
          minutes: 5,
          goal: "Dividir tu movimiento en fases y encontrar las posiciones clave.",
          text: [
            "La mayoría de las técnicas deportivas tienen fases. Un lanzamiento: preparación, zancada, armado del brazo, aceleración, soltar, seguimiento. Una salida de velocidad: posición de listos, impulso, aceleración, transición. Un salto: carrera, apoyo, despegue, vuelo, caída.",
            "En cada fase hay posiciones clave que miran los entrenadores: dónde cae el pie, el ángulo de la rodilla en el despegue, el ángulo del tronco al soltar. Tu entrenador te puede decir cuáles importan más en tu caso.",
            "Usa la revisión cuadro por cuadro en la app de video de tu teléfono o en una herramienta de video gratuita. Pausa en el cuadro clave de cada fase y toma una captura de pantalla. Pide a un asistente de IA la lista de las fases típicas de tu técnica y luego confírmalas con tu entrenador."
          ],
          steps: ["Pide a la IA las fases típicas de tu técnica.", "Confirma las fases con tu entrenador.", "Avanza cuadro por cuadro por tu video.", "Toma una captura del cuadro clave de cada fase.", "Ponle nombre a cada captura."],
          words: [["Fase", "una parte de un movimiento, como la preparación o el momento de soltar."], ["Posición clave", "una posición importante del cuerpo en un momento dado."], ["Cuadro por cuadro", "avanzar por un video una imagen a la vez."]],
          slides: [
            { title: "Las técnicas tienen fases", bullets: ["Lanzamiento: de la preparación al seguimiento", "Salida de velocidad: de listos a la transición", "Salto: de la carrera a la caída"] },
            { title: "Posiciones clave", bullets: ["Dónde cae el pie", "Ángulo de la rodilla en el despegue", "Ángulo del tronco al soltar"] },
            { title: "Cuadro por cuadro", bullets: ["Pausa en cada cuadro clave", "Captura y ponle nombre", "Confirma las fases con tu entrenador"] }
          ],
          tryIt: "Divide en fases el movimiento que grabaste. Toma una captura de un cuadro clave de cada fase y ponle nombre.",
          youCanNow: "dividir una técnica en fases y captar sus posiciones clave."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Ver el movimiento",
        questions: [
          { q: "¿Qué es la cadena cinética?", options: ["Una pieza de bicicleta", "Una máquina de pesas", "Cómo pasa la fuerza de una parte del cuerpo a la siguiente", "Un tipo de zapato"], answer: 2, why: "La fuerza va de las piernas a la cadera, al tronco y a los brazos." },
          { q: "¿Qué vista de la cámara muestra mejor las rodillas que se van hacia adentro?", options: ["De frente o de espaldas", "Solo de lado", "Solo desde arriba", "Un primer plano de la cara"], answer: 0, why: "El movimiento de lado a lado se ve mejor de frente o de espaldas." },
          { q: "¿A qué altura debe estar la cámara?", options: ["En el suelo", "Por encima de tu cabeza", "En cualquier lugar", "Más o menos a la altura de la cadera"], answer: 3, why: "A la altura de la cadera el cuerpo se deforma menos en la imagen." },
          { q: "¿Por qué grabar varias repeticiones?", options: ["Para llenar la memoria", "Una sola repetición puede no ser la típica", "Es una regla", "Para que sea más largo"], answer: 1, why: "Varias repeticiones muestran tu patrón real." },
          { q: "¿Quién debe confirmarte las fases y las posiciones clave?", options: ["Un video cualquiera", "Tu entrenador", "Un fan", "Nadie"], answer: 1, why: "Tu entrenador sabe qué importa en tu técnica." }
        ]
      }
    },
    {
      name: "Capítulo 2: Herramientas de IA y cambios reales",
      lessons: [
        {
          title: "Detección de postura: IA que encuentra tus articulaciones",
          minutes: 5,
          goal: "Explicar qué hace la detección de postura y cuáles son sus límites.",
          text: [
            "La detección de postura es una IA que encuentra puntos del cuerpo, como hombros, codos, cadera, rodillas y tobillos, en una foto o un video y los une en una figura de palitos. Algunas apps luego calculan los ángulos articulares.",
            "Estas herramientas sirven para ver posiciones y comparar repeticiones, pero se equivocan: la ropa suelta, el movimiento rápido, la imagen borrosa, la poca luz, otras personas en la imagen o una parte del cuerpo tapada por otra las pueden confundir. Los ángulos de un video 2D del teléfono son estimaciones, no medidas de laboratorio.",
            "Si pruebas una app de postura, revisa su política de privacidad, porque el video de tu cuerpo es un dato personal. Si eres menor de edad, un padre o madre debe aprobarlo. Compara siempre la figura de palitos con el video real antes de confiar en un número."
          ],
          steps: ["Elige un clip claro y bien iluminado.", "Si usas una app de postura, revisa primero su política de privacidad.", "Pasa el clip y mira la figura de palitos.", "Revisa que coincida con el cuerpo real en cada cuadro clave.", "Toma los ángulos como estimaciones."],
          words: [["Detección de postura", "una IA que encuentra puntos del cuerpo en un video y dibuja una figura de palitos."], ["Video 2D", "un video plano de una sola cámara; no puede medir la profundidad a la perfección."]],
          slides: [
            { title: "Detección de postura", bullets: ["La IA encuentra hombros, cadera, rodillas, tobillos", "Dibuja una figura de palitos", "Algunas apps calculan ángulos"] },
            { title: "Límites", bullets: ["Imagen borrosa, ropa suelta, poca luz", "Partes del cuerpo tapadas", "Los ángulos en 2D son estimaciones"] },
            { title: "Úsala con seguridad", bullets: ["Revisa la política de privacidad", "Menores: con aprobación de un padre", "Compárala con el video real"] }
          ],
          tryIt: "Pide a un asistente de IA que te explique cómo funciona la detección de postura y tres formas en que se puede equivocar. Luego mira tus cuadros clave y escribe dónde le costaría trabajo a una herramienta de postura.",
          youCanNow: "explicar qué hace la detección de postura y por qué hay que revisar sus números."
        },
        {
          title: "Describir un punto de técnica",
          minutes: 5,
          goal: "Describir con claridad un punto de técnica usando tus capturas de pantalla.",
          text: [
            "Elige una sola cosa para revisar, no diez. Por ejemplo: \"En el despegue, mi rodilla izquierda se dobla mucho menos que la derecha.\" o \"Al soltar, mi codo está por debajo del hombro.\"",
            "Descríbelo con evidencia: la fase, la captura y lo que ves comparado con otra repetición o con un modelo que te dé tu entrenador. Un asistente de IA te puede ayudar a escribir una descripción clara y neutral: \"Ayúdame a describir lo que veo en estos dos cuadros clave con palabras sencillas y neutrales.\" No le pidas un diagnóstico ni una solución para un dolor.",
            "Llévaselo a tu entrenador como una pregunta: \"Noté esto. ¿Es algo que deberíamos trabajar? ¿Qué indicación debería usar?\""
          ],
          steps: ["Elige un punto de técnica.", "Elige las capturas que lo muestran.", "Escribe una descripción neutral con la fase.", "Pregunta a tu entrenador si importa y qué indicación usar."],
          words: [["Indicación", "una instrucción corta que te ayuda a cambiar un movimiento, como \"pecho alto\"."], ["Descripción neutral", "describir lo que ves sin juzgar ni diagnosticar."]],
          slides: [
            { title: "Un punto, no diez", bullets: ["Ejemplo: menos flexión de la rodilla izquierda en el despegue"] },
            { title: "Muestra evidencia", bullets: ["Fase y captura", "Comparado con otra repetición o un modelo", "Palabras neutrales; sin diagnóstico"] },
            { title: "Pregunta a tu entrenador", bullets: ["\"¿Deberíamos trabajar esto?\"", "\"¿Qué indicación debería usar?\""] }
          ],
          tryIt: "Escribe un punto de técnica en dos oraciones neutrales con la fase y las capturas. Usa la IA para hacerlo más claro y luego llévaselo a tu entrenador.",
          youCanNow: "describir un punto de técnica con evidencia y convertirlo en una pregunta para tu entrenador."
        },
        {
          title: "Antes y después: ¿cambió?",
          minutes: 5,
          goal: "Hacer una comparación lado a lado para ver si la técnica cambió.",
          text: [
            "Después de practicar la indicación de tu entrenador durante unas semanas, vuelve a grabar desde los mismos lugares marcados, con los mismos ángulos y la misma luz. Pon los cuadros clave de antes y de después uno al lado del otro en una diapositiva o un diseño de Canva.",
            "Mira la misma posición clave en cada uno. ¿Se ve el cambio? ¿Está en todas las repeticiones o solo en algunas? Los cambios toman muchas repeticiones; un pequeño avance sigue siendo un avance.",
            "Si un cambio te causa dolor, o un movimiento te duele, para y avisa a tu preparador físico, a un fisioterapeuta o a un médico. El trabajo de técnica nunca debe hacerse aguantando el dolor."
          ],
          steps: ["Vuelve a grabar desde los mismos lugares y ángulos.", "Elige los mismos cuadros clave.", "Pon el antes y el después lado a lado.", "Anota qué cambió y en cuántas repeticiones.", "Revísalo con tu entrenador; avisa de cualquier dolor."],
          words: [["Lado a lado", "dos imágenes o videos puestos uno junto al otro para compararlos."], ["Fisioterapeuta", "un profesional con licencia que ayuda a las personas a recuperar el movimiento después de una lesión."]],
          slides: [
            { title: "La misma preparación", bullets: ["Los mismos lugares marcados", "Los mismos ángulos y la misma luz"] },
            { title: "Compara", bullets: ["El mismo cuadro clave, lado a lado", "¿En todas las repeticiones o solo en algunas?", "Los pequeños avances cuentan"] },
            { title: "Seguridad", bullets: ["¿Dolor? Para", "Avisa a tu preparador físico, fisioterapeuta o médico"] }
          ],
          tryIt: "Tarea final: practica la indicación de tu entrenador, vuelve a grabar en dos semanas desde los mismos lugares y arma una comparación de antes y después lado a lado para revisarla con tu entrenador.",
          youCanNow: "comparar con justicia la técnica de antes y después y saber cuándo parar por dolor."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Herramientas de IA y cambios reales",
        questions: [
          { q: "¿Qué hace la detección de postura?", options: ["Diagnostica lesiones", "Escribe planes de entrenamiento", "Cuenta seguidores", "Encuentra puntos del cuerpo en un video y dibuja una figura de palitos"], answer: 3, why: "Ubica las articulaciones en las imágenes." },
          { q: "¿Qué puede hacer que una herramienta de postura se equivoque?", options: ["La imagen borrosa y la ropa suelta", "La buena luz", "La ropa ajustada", "Un fondo despejado"], answer: 0, why: "La imagen borrosa y la ropa suelta esconden la posición de las articulaciones." },
          { q: "Los ángulos de un solo video del teléfono son:", options: ["Perfectos", "Diagnósticos médicos", "Estimaciones, no medidas de laboratorio", "Inútiles"], answer: 2, why: "Un video 2D no puede medir la profundidad a la perfección." },
          { q: "¿Qué debes pedirle a la IA al describir tu técnica?", options: ["Que diagnostique tu dolor de rodilla", "Que te recete un tratamiento", "Que contradiga a tu entrenador", "Ayuda para describir lo que ves con palabras neutrales"], answer: 3, why: "El diagnóstico y el tratamiento son para los profesionales." },
          { q: "Una técnica nueva te causa dolor. Tú:", options: ["Sigues aguantando", "Paras y avisas a tu preparador físico, fisioterapeuta o médico", "Lo ignoras", "Le pides analgésicos a la IA"], answer: 1, why: "Nunca sigas aguantando el dolor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Biomecánica con IA",
    questions: [
      { q: "La biomecánica estudia:", options: ["Las finanzas del equipo", "Las redes sociales", "Cómo las fuerzas y las posiciones del cuerpo crean el movimiento", "El diseño de estadios"], answer: 2, why: "Es la ciencia del movimiento." },
      { q: "El rango de movimiento es:", options: ["Cuánto se mueve una articulación", "Cuánto corres", "Un marcador", "Un tipo de ejercicio"], answer: 0, why: "Describe el movimiento de una articulación." },
      { q: "El centro de masa es:", options: ["El punto de equilibrio de tu cuerpo", "El centro de la cancha", "Un gimnasio", "Un músculo"], answer: 0, why: "Es donde se equilibra tu peso." },
      { q: "La fuerza de reacción del suelo es:", options: ["El viento", "Una penalización", "El empuje que te devuelve el suelo", "Una regla del equipo"], answer: 2, why: "Tú empujas el suelo y él te empuja de vuelta." },
      { q: "En un tiro en suspensión, la fuerza empieza en:", options: ["La muñeca", "Las piernas", "Los ojos", "El balón"], answer: 1, why: "La cadena cinética empieza desde el suelo hacia arriba." },
      { q: "Una vista de lado muestra:", options: ["Solo la cara", "Nada útil", "Solo al público", "El movimiento hacia adelante y atrás y los ángulos articulares"], answer: 3, why: "Esa es la vista sagital." },
      { q: "¿Por qué marcar en el suelo los lugares de la cámara?", options: ["Como decoración", "Es una regla", "Para grabar igual la próxima vez", "Para confundir a otros"], answer: 2, why: "La misma preparación permite comparar con justicia." },
      { q: "La cámara lenta te ayuda a:", options: ["Ahorrar batería", "Esconder errores", "Agregar música", "Ver con claridad los movimientos rápidos"], answer: 3, why: "Muestra los detalles." },
      { q: "Antes de grabar a tus compañeros debes:", options: ["Pedir permiso", "Publicarlo primero", "Grabar a escondidas", "Saltarte ese paso"], answer: 0, why: "Respeta la privacidad y las reglas del equipo." },
      { q: "Una fase es:", options: ["Un periodo del partido", "Una parte de un movimiento", "Un equipo", "Un teléfono"], answer: 1, why: "Las técnicas se dividen en fases." },
      { q: "¿Cuál es una fase de un lanzamiento?", options: ["El medio tiempo", "El tiempo fuera", "Soltar", "La vuelta de enfriamiento"], answer: 2, why: "Soltar es una fase del lanzamiento." },
      { q: "La revisión cuadro por cuadro significa:", options: ["Avanzar por el video una imagen a la vez", "Verlo al doble de velocidad", "Saltar al final", "Borrar cuadros"], answer: 0, why: "Te deja encontrar las posiciones clave." },
      { q: "La IA te da las fases de tu técnica. Después tú:", options: ["Le crees totalmente", "Las publicas", "Ignoras a tu entrenador", "Las confirmas con tu entrenador"], answer: 3, why: "Los entrenadores confirman lo que importa." },
      { q: "La detección de postura dibuja:", options: ["Un logo", "Una figura de palitos sobre tu cuerpo", "Un mapa", "Una gráfica de seguidores"], answer: 1, why: "Une los puntos del cuerpo que detecta." },
      { q: "Antes de usar una app de postura, revisa:", options: ["Su color", "Su política de privacidad", "Su logo", "Nada"], answer: 1, why: "El video de tu cuerpo es un dato personal." },
      { q: "¿En cuántos puntos de técnica debes trabajar a la vez?", options: ["En uno", "En diez", "En todos", "En ninguno"], answer: 0, why: "Con un solo enfoque es más fácil cambiar." },
      { q: "Una indicación es:", options: ["Una instrucción corta para cambiar un movimiento", "Un taco de billar", "Un puntaje", "Una app de video"], answer: 0, why: "Las indicaciones guían los cambios de técnica." },
      { q: "Una descripción neutral:", options: ["Juzga con dureza", "Diagnostica lesiones", "Describe lo que ves sin diagnosticar", "Ignora la evidencia"], answer: 2, why: "Quédate con lo que ves." },
      { q: "Los videos de antes y después deben usar:", options: ["Ángulos distintos cada vez", "Cualquier preparación", "Ningún video", "Los mismos lugares, ángulos y luz"], answer: 3, why: "La misma preparación permite comparar con justicia." },
      { q: "¿Quién ayuda a las personas a recuperar el movimiento después de una lesión?", options: ["Un fan", "Un fisioterapeuta", "Una app de IA", "Un árbitro"], answer: 1, why: "Los fisioterapeutas tienen licencia para esto." }
    ]
  }
};

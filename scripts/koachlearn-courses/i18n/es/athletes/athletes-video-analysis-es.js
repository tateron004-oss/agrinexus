"use strict";

// Koach Learn course (Spanish translation of athletes/athletes-video-analysis.js). Rules: scripts/koachlearn-courses/README.md, "Translations".
// COUNTIF is called CONTAR.SI when Google Sheets is set to Spanish; both names are given.

module.exports = {
  id: "athletes-video-analysis-es",
  lang: "es",
  translationOf: "athletes-video-analysis",
  category: "Athletes",
  name: "Análisis de video e inteligencia de juego",
  skills: "Grabar video útil de partidos y entrenamientos, Ver video con una pregunta, Etiquetar jugadas en una hoja de cálculo, Usar la IA para resumir las jugadas etiquetadas, Convertir el video en un enfoque de entrenamiento",
  outcome: "grabar un partido o un entrenamiento, etiquetar al menos 20 jugadas en una hoja de cálculo con una pregunta clara en mente, usar un asistente de IA para resumir los patrones y convertirlos en un enfoque de entrenamiento acordado con tu entrenador.",
  about: [
    "Este curso es para deportistas y entrenadores que quieren aprender con video sin programas caros. Usarás la cámara de un teléfono, una hoja de cálculo gratuita y un asistente de IA gratuito.",
    "Ver video es una habilidad. La mayoría de la gente solo mira las mejores jugadas. Aprenderás a mirar con una pregunta, etiquetar lo que pasa, encontrar patrones y convertirlos en algo para practicar.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "Graba un partido o un entrenamiento (con permiso), elige una pregunta, etiqueta al menos 20 jugadas en una hoja de Google Sheets, pídele a un asistente de IA que resuma los patrones a partir de tus etiquetas y escribe un enfoque de entrenamiento. Revísalo con tu entrenador.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Deportistas y entrenadores de secundaria, universidad y clubes que quieren aprender del video de partidos y entrenamientos sin programas caros.",
    startingPoint: "Saben grabar video con el teléfono y han visto video de partidos, casi siempre para ver las mejores jugadas. Pocos han grabado con un plan, etiquetado jugadas, contado patrones en una hoja de cálculo o comparado un resumen de la IA con sus propios conteos.",
    gap: "Ver video sin una pregunta muestra sobre todo las mejores jugadas y los errores grandes, así que el entrenamiento no cambia. Etiquetar y contar convierte el video en evidencia que lleva a un enfoque de entrenamiento claro y a una mejor conversación con el entrenador.",
    constraints: [
      "Lenguaje sencillo, a un nivel de lectura de alrededor de séptimo grado",
      "La cámara de un teléfono, Google Sheets gratuito y un asistente de IA gratuito; no hace falta ningún programa de pago",
      "Unos 60 minutos de lecciones más tiempo para grabar y etiquetar un partido o un entrenamiento",
      "Las reglas de grabación del equipo, la escuela y la liga; el video de partidos juveniles muestra a hijos de otras personas",
      "Los nombres y los datos privados de otros jugadores no se ponen en herramientas de IA"
    ],
    prerequisites: "Ninguno. \"Herramientas de IA para deportistas\" ayuda si nunca has usado Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Usando un teléfono en un partido o un entrenamiento", action: "grabar video útil desde un lugar alto y central, con una vista amplia y estable", standard: "con permiso de tu entrenador antes de grabar y antes de compartir" },
    { id: "O2", condition: "Antes de ver el video de un partido o un entrenamiento", action: "escribir una pregunta concreta y ver el video dos veces, pausando en las jugadas que la responden", standard: "con una pregunta por vez y una nota corta para cada jugada relacionada" },
    { id: "O3", condition: "Usando Google Sheets y tu video", action: "etiquetar jugadas con N.º de jugada, Tiempo, Situación, Qué pasó, Resultado y Nota", standard: "etiquetando al menos 20 jugadas con las mismas palabras de etiqueta cada vez" },
    { id: "O4", condition: "Con al menos 20 jugadas etiquetadas", action: "contar tus etiquetas con ordenar, filtrar o COUNTIF y escribir los dos patrones principales con números", standard: "marcando como \"mirar más\" cualquier patrón que se base en pocas jugadas" },
    { id: "O5", condition: "Usando un asistente de IA gratuito y tu tabla de etiquetas", action: "pedir un resumen de los patrones principales con conteos y compararlo con tus propios conteos", standard: "sin los nombres ni los datos privados de otros jugadores y con cada conteo igual al de tu hoja" },
    { id: "O6", condition: "Con tu patrón más fuerte", action: "escribir un enfoque de entrenamiento y llevárselo a tu entrenador con números, marcas de tiempo y una pregunta", standard: "con el enfoque acordado con tu entrenador y un plan para volver a grabar y etiquetar más adelante" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Conseguir buen video",
      lessons: [
        {
          objectives: ["O1"],
          title: "Grabar video que de verdad puedas usar",
          minutes: 5,
          goal: "Preparar un teléfono para grabar video útil de partidos o entrenamientos.",
          text: [
            "Un buen video empieza con un buen lugar para la cámara. Graba desde arriba si puedes, como desde lo alto de las gradas, para ver toda la jugada y el espacio entre los jugadores. Pon el teléfono de lado (horizontal) y mantenlo firme con un trípode o apoyándolo.",
            "Sigue la pelota, pero deja a la vista suficiente cancha o campo para ver lo que hacen los jugadores sin la pelota. No acerques demasiado el zoom.",
            "Pide permiso. Tu equipo, tu escuela o tu liga pueden tener reglas sobre grabar, y en el video de deporte juvenil aparecen hijos de otras personas. Pregúntale a tu entrenador antes de grabar y antes de compartir cualquier cosa."
          ],
          steps: ["Pídele permiso a tu entrenador para grabar.", "Busca un lugar alto y central.", "Pon el teléfono de lado y mantenlo firme.", "Mantén una vista amplia; sigue la pelota.", "Revisa la batería y el espacio antes del partido."],
          words: [["Horizontal", "sostener el teléfono de lado, para que el video salga ancho."], ["Trípode", "un soporte de tres patas que mantiene firme una cámara."]],
          slides: [
            { title: "Lugar para la cámara", bullets: ["Alto y central si puedes", "Ver toda la jugada y los espacios"] },
            { title: "Preparar la cámara", bullets: ["Teléfono de lado", "Firme: trípode o apoyado", "Vista amplia; sigue la pelota"] },
            { title: "Antes de grabar", bullets: ["Pregúntale a tu entrenador", "Revisa la batería y el espacio", "Pide permiso antes de compartir"] }
          ],
          tryIt: "En tu próximo entrenamiento, con el visto bueno de tu entrenador, graba cinco minutos desde el lugar más alto que encuentres. Míralo: ¿puedes ver a todos los que participan en cada jugada?",
          youCanNow: "preparar un teléfono para grabar video útil de partidos o entrenamientos, con permiso.",
          quickCheck: [
            { objective: "O1", q: "¿Por qué conviene una vista amplia en lugar de acercar la imagen?", options: ["El video amplio ocupa menos espacio", "Los primeros planos van contra las reglas", "Para ver qué hacen los jugadores que no tienen el balón", "El zoom gasta la batería"], answer: 2, why: "Una vista amplia muestra los espacios y a los jugadores lejos del balón." },
            { objective: "O1", q: "Quieres grabar el partido juvenil de tu hermanita y publicarlo. ¿Qué haces primero?", options: ["Publicarlo y quitarlo si alguien se queja", "Preguntarle al entrenador por las reglas antes de grabar y compartir", "Grabar solo al otro equipo", "Difuminar tu propia cara"], answer: 1, why: "Los equipos y las ligas pueden tener reglas de grabación, y el video muestra a hijos de otras personas." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ver video con una pregunta",
          minutes: 5,
          goal: "Elegir una pregunta clara antes de ver el video.",
          text: [
            "Si ves el video sin un plan, sobre todo notas las mejores jugadas y tus peores errores. Los entrenadores miran con una pregunta.",
            "Las buenas preguntas son concretas: “¿Dónde pierdo la pelota?” “¿Qué tan rápido vuelvo a defender?” “¿Qué formaciones de recepción del saque pierden puntos?” “¿Qué hace el otro equipo en tercera oportunidad?”",
            "Elige una pregunta por cada vez que lo miras. Míralo una vez a velocidad normal para tener el panorama general, y luego otra vez pausando en cada jugada que responde a tu pregunta."
          ],
          steps: ["Escribe una pregunta concreta.", "Míralo una vez a velocidad normal.", "Míralo otra vez y pausa en cada jugada relacionada con tu pregunta.", "Escribe una nota corta para cada jugada."],
          words: [["Estudio de video", "ver video de partidos o entrenamientos para aprender y mejorar."], ["Inteligencia de juego", "entender por qué pasan las jugadas, no solo lo que pasó."]],
          slides: [
            { title: "Sin plan = solo las mejores jugadas", bullets: ["Ves las grandes jugadas y los grandes errores", "Te pierdes los patrones"] },
            { title: "Preguntas concretas", bullets: ["“¿Dónde pierdo la pelota?”", "“¿Qué tan rápido vuelvo a defender?”", "“¿Qué hacen en tercera oportunidad?”"] },
            { title: "Dos veces", bullets: ["1. Velocidad normal: panorama general", "2. Pausa en las jugadas que responden tu pregunta"] }
          ],
          tryIt: "Escribe tres preguntas posibles para tu deporte y tu posición. Elige una y mira cinco minutos de video con ella, escribiendo una nota cada vez que aparezca.",
          youCanNow: "ver video con una pregunta clara y tomar notas de las jugadas que la responden.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una pregunta concreta para ver un video?", options: ["¿Qué tan rápido vuelvo a defender?", "¿Jugamos bien?", "¿Fue una buena temporada?", "¿Quién es el mejor jugador?"], answer: 0, why: "Las preguntas concretas te llevan a jugadas específicas que puedes pausar y anotar." },
            { objective: "O2", q: "Tienes dos preguntas sobre tu video. ¿Qué haces?", options: ["Responder las dos en una sola vez", "Olvidarte de la segunda pregunta", "Pedirle a la IA que lo vea por ti", "Ver el video con una pregunta a la vez"], answer: 3, why: "Elige una pregunta cada vez que veas el video." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Etiquetar jugadas en una hoja de cálculo",
          minutes: 6,
          goal: "Etiquetar jugadas en Google Sheets para poder contar los patrones.",
          text: [
            "Etiquetar significa escribir las mismas pocas etiquetas para cada jugada. Convierte el video en datos que puedes contar.",
            "Haz columnas: N.º de jugada, Tiempo en el video, Situación (por ejemplo “contraataque” o “segunda y larga”), Qué pasó, Resultado (bueno, neutral o malo) y Nota. Usa siempre las mismas palabras, para que “pérdida” sea siempre “pérdida” y no a veces “pelota perdida”.",
            "Las aplicaciones de video para equipos, como Hudl, etiquetan jugadas para muchas escuelas; si tu equipo usa una, pregúntale a tu entrenador cómo usar sus etiquetas. Una hoja de cálculo sirve para cualquiera, gratis."
          ],
          steps: ["Abre Google Sheets.", "Columnas: N.º de jugada, Tiempo, Situación, Qué pasó, Resultado, Nota.", "Elige una lista corta de palabras para las etiquetas y respétala.", "Pausa y llena una fila por jugada.", "Etiqueta al menos 20 jugadas."],
          words: [["Etiqueta", "un nombre que le das a cada jugada, como “pérdida” o “contraataque”."], ["Marca de tiempo", "el momento del video en que empieza una jugada, como 12:45."]],
          slides: [
            { title: "Etiquetar = convertir video en datos", bullets: ["Las mismas etiquetas para cada jugada", "Ahora puedes contar patrones"] },
            { title: "Tus columnas", bullets: ["N.º de jugada, Tiempo, Situación", "Qué pasó, Resultado, Nota"] },
            { title: "Reglas para etiquetar", bullets: ["Lista corta de palabras", "Siempre la misma palabra", "Al menos 20 jugadas"] }
          ],
          tryIt: "Prepara tu hoja para etiquetar y etiqueta 10 jugadas de tu video usando tu pregunta de la Lección 2.",
          youCanNow: "etiquetar jugadas en una hoja de cálculo con etiquetas y marcas de tiempo constantes.",
          quickCheck: [
            { objective: "O3", q: "¿Qué columna registra si la jugada salió bien?", options: ["N.º de jugada", "Tiempo", "Resultado", "Situación"], answer: 2, why: "Resultado es bueno, neutral o malo." },
            { objective: "O3", q: "Escribiste \"balón perdido\" en algunas jugadas y \"pérdida\" en otras. ¿Qué haces?", options: ["Cambiarlas todas a una sola palabra, como \"pérdida\"", "Dejarlas así; no importa", "Borrar esas jugadas", "Agregar una tercera palabra"], answer: 0, why: "Usar siempre la misma palabra mantiene correctos tus conteos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir buen video",
        questions: [
          { objective: "O1", q: "¿Cuál es el mejor lugar para la cámara al grabar un partido?", options: ["Solo en el suelo detrás del arco", "Dentro de tu bolso", "Alto y central", "Con zoom en la cara de un jugador"], answer: 2, why: "Alto y central muestra toda la jugada y los espacios." },
          { objective: "O1", q: "Antes de grabar un entrenamiento, debes:", options: ["Pedirle permiso a tu entrenador", "Transmitirlo en vivo", "Grabar el vestuario del otro equipo", "Poner el teléfono vertical"], answer: 0, why: "Los equipos y las escuelas suelen tener reglas sobre grabar." },
          { objective: "O2", q: "¿Cuál es una buena pregunta para estudiar video?", options: ["“¿Fue un buen partido?”", "“¿Por qué somos malos?”", "“¿Quién tiene las mejores zapatillas?”", "“¿Dónde pierdo la pelota?”"], answer: 3, why: "Las preguntas concretas te llevan a patrones que puedes corregir." },
          { objective: "O3", q: "¿Qué hace etiquetar?", options: ["Borra las malas jugadas", "Convierte el video en datos que puedes contar", "Agrega música", "Hace el video más corto"], answer: 1, why: "Las etiquetas constantes te permiten contar patrones." },
          { objective: "O3", q: "¿Por qué usar siempre la misma palabra para una etiqueta?", options: ["Para hacerlo más largo", "Para que las cuentas salgan bien", "Se ve más bonito", "Por nada"], answer: 1, why: "Usar palabras distintas para lo mismo arruina tus cuentas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar patrones y usarlos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Contar los patrones de tus etiquetas",
          minutes: 5,
          goal: "Contar tus etiquetas y encontrar los patrones principales.",
          text: [
            "Con 20 o más jugadas etiquetadas, cuenta cuántas veces aparece cada situación y cada resultado. En Google Sheets puedes ordenar por una columna, usar un filtro o usar la fórmula COUNTIF (CONTAR.SI si tu hoja está en español) para contar una etiqueta.",
            "Busca patrones, no jugadas sueltas: “7 de mis 9 pérdidas fueron al driblar hacia la izquierda con presión” es un patrón. Un mal pase no lo es.",
            "Los números pequeños pueden engañarte. Si algo pasó solo dos veces, mira más video antes de decidir que es un patrón real."
          ],
          steps: ["Ordena o filtra por Resultado.", "Cuenta cada Situación de los malos resultados.", "Escribe los dos patrones principales como frases con números.", "Marca como “mirar más” cualquier patrón con pocas jugadas."],
          words: [["Patrón", "algo que pasa una y otra vez en situaciones parecidas."], ["COUNTIF (CONTAR.SI)", "una fórmula de hoja de cálculo que cuenta las celdas que coinciden con una palabra o un número."]],
          slides: [
            { title: "Cuenta tus etiquetas", bullets: ["Ordena o filtra por Resultado", "COUNTIF (CONTAR.SI) cuenta una etiqueta"] },
            { title: "Patrón frente a jugada suelta", bullets: ["Patrón: 7 de 9 pérdidas yendo a la izquierda", "No es un patrón: un mal pase"] },
            { title: "Cuidado con los números pequeños", bullets: ["¿Solo dos veces? Mira más video primero"] }
          ],
          tryIt: "Termina de etiquetar 20 jugadas. Cuenta tus resultados por situación y escribe tus dos patrones principales como frases con números.",
          youCanNow: "contar etiquetas y describir patrones con números.",
          quickCheck: [
            { objective: "O4", q: "¿Cuál de estos es un patrón?", options: ["Un mal pase en el segundo tiempo", "5 de mis 6 tiros fallados fueron después de driblar", "El marcador final", "La mejor jugada del partido"], answer: 1, why: "Un patrón se repite y tiene números; una sola jugada no es un patrón." },
            { objective: "O4", q: "Un posible patrón aparece en solo dos jugadas. ¿Qué haces?", options: ["Armar todo un entrenamiento alrededor de él", "No hacer caso a ninguna de tus etiquetas", "Decirle al equipo que es tu mayor problema", "Marcarlo como \"mirar más\" y grabar más primero"], answer: 3, why: "Los números pequeños pueden engañarte, así que mira más video antes de decidir." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usar la IA para resumir tus notas de video",
          minutes: 5,
          goal: "Pedirle a un asistente de IA que resuma las jugadas etiquetadas y revisar su resumen.",
          text: [
            "Puedes copiar tu tabla de etiquetas (sin nombres de jugadores salvo el tuyo y sin información privada) en un asistente de IA y preguntar: “Estas son mis jugadas etiquetadas. Resume los tres patrones principales con sus cuentas y sugiere una pregunta para hacerle a mi entrenador.”",
            "La IA es buena para encontrar patrones en tablas de texto, pero puede contar mal o inventar cosas. Compara sus cuentas con las tuyas de la lección anterior. Si no coinciden, confía en tu hoja y corrige la instrucción.",
            "Algunas herramientas de IA pueden mirar imágenes o video, pero pueden interpretar mal la acción rápida del deporte. Usa tus propias etiquetas como fuente principal y la IA como ayuda."
          ],
          steps: ["Copia tu tabla de etiquetas, quitando los nombres de otros jugadores y la información privada.", "Pide los tres patrones principales con sus cuentas.", "Compáralos con tus propias cuentas.", "Corrige cualquier error; tu hoja manda."],
          words: [["Resumen", "una versión corta que conserva los puntos principales."]],
          slides: [
            { title: "Pídele a la IA un resumen", bullets: ["Pega tu tabla de etiquetas", "“Los tres patrones principales con cuentas”", "“Una pregunta para mi entrenador”"] },
            { title: "Revísalo", bullets: ["La IA puede contar mal o inventar", "Compáralo con tus cuentas", "Tu hoja manda"] },
            { title: "Privacidad", bullets: ["Sin nombres de otros jugadores", "Sin información privada"] }
          ],
          tryIt: "Pega tus 20 jugadas etiquetadas en un asistente de IA y pide los tres patrones principales con sus cuentas. Revisa cada cuenta con tu hoja.",
          youCanNow: "usar la IA para resumir las etiquetas del video y revisar el resumen con tus propias cuentas.",
          quickCheck: [
            { objective: "O5", q: "¿Qué puede salir mal cuando la IA resume tu tabla de etiquetas?", options: ["Puede contar mal o inventar cosas", "Siempre borra tu hoja", "Comparte el video en público", "No puede salir nada mal"], answer: 0, why: "La IA puede encontrar patrones pero puede contar mal, así que compárala con tus propios conteos." },
            { objective: "O5", q: "Tu tabla de etiquetas tiene los nombres de tus compañeros. ¿Qué haces antes de pegarla en la IA?", options: ["Pegarla tal como está", "Agregar sus números de teléfono", "Quitar los nombres y los datos privados de los otros jugadores", "Pedirles a tus compañeros que la peguen ellos"], answer: 2, why: "No pongas los nombres ni los datos privados de otros jugadores en herramientas de IA." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Convertir el video en un enfoque de entrenamiento",
          minutes: 5,
          goal: "Convertir tu patrón principal en un enfoque de entrenamiento acordado con tu entrenador.",
          text: [
            "El video solo ayuda si cambia el entrenamiento. Toma tu patrón más fuerte y conviértelo en un enfoque: “Proteger la pelota cuando me presionan por la izquierda” o “Volver a defender en menos de tres segundos después de una pérdida.”",
            "Llévale a tu entrenador el patrón, los números y dos o tres marcas de tiempo que lo muestren. Pregunta: “¿Qué ejercicio me ayudaría con esto?” A los entrenadores les encantan los deportistas que llegan con pruebas y una pregunta.",
            "Vuelve a grabar en unas semanas y vuelve a etiquetar con la misma pregunta para ver si el patrón cambió. Eso es inteligencia de juego: aprender, practicar y comprobar."
          ],
          steps: ["Elige tu patrón más fuerte.", "Escribe un enfoque de entrenamiento.", "Elige dos o tres marcas de tiempo que lo muestren.", "Pídele a tu entrenador un ejercicio.", "Vuelve a grabar y a etiquetar en unas semanas."],
          words: [["Enfoque de entrenamiento", "una cosa concreta que trabajas en los entrenamientos."], ["Pruebas", "datos que muestran que algo es cierto, como cuentas y marcas de tiempo del video."]],
          slides: [
            { title: "El video tiene que cambiar el entrenamiento", bullets: ["Patrón más fuerte -> un enfoque"] },
            { title: "Llévale a tu entrenador", bullets: ["El patrón y los números", "Dos o tres marcas de tiempo", "“¿Qué ejercicio me ayudaría?”"] },
            { title: "Cierra el ciclo", bullets: ["Vuelve a grabar en unas semanas", "Vuelve a etiquetar con la misma pregunta", "¿Cambió el patrón?"] }
          ],
          tryIt: "Tarea final: con tus 20 jugadas etiquetadas y el resumen de la IA, escribe un enfoque de entrenamiento y elige dos marcas de tiempo. Compártelo con tu entrenador y pídele un ejercicio.",
          youCanNow: "convertir los patrones del video en un enfoque de entrenamiento y comprobar después si mejoró.",
          quickCheck: [
            { objective: "O6", q: "¿Qué hace que un enfoque de entrenamiento sea bueno?", options: ["\"Jugar mejor\"", "Una lista de todos los errores", "Un cambio concreto a partir de tu patrón más fuerte", "Lo que sugiera la IA"], answer: 2, why: "Un solo enfoque a partir de tu patrón más fuerte cambia el entrenamiento." },
            { objective: "O6", q: "Tu entrenador sugiere un ejercicio para tu enfoque. ¿Cómo compruebas si funcionó?", options: ["Preguntarle a un compañero", "Volver a grabar en unas semanas y etiquetar con la misma pregunta", "Confiar en la sensación", "Preguntarle a la IA si funcionó"], answer: 1, why: "Volver a grabar y etiquetar muestra si el patrón cambió." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar patrones y usarlos",
        questions: [
          { objective: "O4", q: "¿Cuál es un patrón?", options: ["Un mal pase", "Una gran clavada", "El resultado final", "7 de 9 pérdidas fueron driblando a la izquierda con presión"], answer: 3, why: "Un patrón se repite en muchas jugadas parecidas." },
          { objective: "O4", q: "¿Qué hace COUNTIF (CONTAR.SI)?", options: ["Cuenta las celdas que coinciden con una etiqueta", "Reproduce video", "Borra filas", "Agrega colores"], answer: 0, why: "COUNTIF cuenta las celdas que coinciden." },
          { objective: "O5", q: "La cuenta de pérdidas de la IA no coincide con tu hoja. ¿En qué confías?", options: ["En la IA", "En la que sea más alta", "En tu hoja, y luego corriges la instrucción", "En ninguna"], answer: 2, why: "Tus propias etiquetas son la fuente principal; la IA puede contar mal." },
          { objective: "O5", q: "Antes de pegar las etiquetas en la IA, quita:", options: ["Las marcas de tiempo", "Los resultados", "Las situaciones", "Los nombres de otros jugadores y la información privada"], answer: 3, why: "Protege la privacidad de otras personas." },
          { objective: "O6", q: "¿Qué debes llevarle a tu entrenador?", options: ["Solo quejas", "El patrón, los números y las marcas de tiempo, además de una pregunta", "Todo el video sin notas", "Un ensayo de la IA"], answer: 1, why: "Las pruebas y una pregunta hacen que la conversación sea útil." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Análisis de video e inteligencia de juego",
    questions: [
      { objective: "O1", q: "Sostener el teléfono de lado al grabar se llama:", options: ["Vertical", "Selfi", "Horizontal", "Zoom"], answer: 2, why: "El modo horizontal da una vista amplia." },
      { objective: "O1", q: "¿Por qué grabar desde arriba?", options: ["Para ver toda la jugada y los espacios", "Para esconderte", "Para mejor sonido", "Es una regla"], answer: 0, why: "La altura muestra a todos los que participan." },
      { objective: "O1", q: "¿Qué mantiene firme la cámara?", options: ["Un trípode o apoyarla", "Correr con ella", "Acercar el zoom", "Sacudirla"], answer: 0, why: "El video firme es más fácil de estudiar." },
      { objective: "O1", q: "El video de deporte juvenil suele mostrar a otros niños. Por eso debes:", options: ["Publicarlo en cualquier lugar", "No difuminar nada", "Pedir permiso antes de grabar y compartir", "Venderlo"], answer: 2, why: "Los equipos y las familias tienen reglas de privacidad." },
      { objective: "O2", q: "Ver video sin un plan por lo general significa que notas:", options: ["Todos los patrones", "Solo las mejores jugadas y los grandes errores", "Nada", "Las notas del entrenador"], answer: 1, why: "Sin una pregunta te pierdes los patrones." },
      { objective: "O2", q: "¿Cuántas preguntas por cada vez que miras el video?", options: ["Diez", "Ninguna", "Todas las que puedas", "Una"], answer: 3, why: "Una pregunta concreta mantiene la atención." },
      { objective: "O2", q: "La segunda vez que lo miras:", options: ["Adelantas todo", "Le quitas el sonido", "Pausas en las jugadas que responden tu pregunta", "No lo miras"], answer: 2, why: "Pausar te deja anotar los detalles." },
      { objective: "O2", q: "La inteligencia de juego significa entender:", options: ["Solo el marcador", "Solo las estadísticas", "El calendario", "Por qué pasan las jugadas"], answer: 3, why: "Se trata del porqué, no solo del qué." },
      { objective: "O3", q: "Una marca de tiempo es:", options: ["El momento del video en que empieza una jugada", "La fecha del partido", "Un sello en una entrada", "El pitazo final"], answer: 0, why: "Las marcas de tiempo te dejan encontrar una jugada rápido." },
      { objective: "O3", q: "¿Cuál es una columna de etiquetas?", options: ["Canción favorita", "Situación", "El clima de mañana", "Tu contraseña"], answer: 1, why: "La situación es una etiqueta clave." },
      { objective: "O3", q: "¿Cuántas jugadas debes etiquetar como mínimo?", options: ["1", "3", "20", "500"], answer: 2, why: "Veinte alcanzan para ver patrones." },
      { objective: "O3", q: "Si tu equipo usa una aplicación de video como Hudl, debes:", options: ["Preguntarle a tu entrenador cómo usar sus etiquetas", "No hacerle caso", "Borrarla", "Compartir la contraseña en internet"], answer: 0, why: "Usa lo que usa tu equipo, como quiere tu entrenador." },
      { objective: "O4", q: "Algo pasó solo dos veces. Debes:", options: ["Decir que es un gran patrón", "Contárselo a todos", "Cambiar de posición", "Mirar más video primero"], answer: 3, why: "Los números pequeños pueden engañarte." },
      { objective: "O4", q: "Para encontrar tus patrones principales en Sheets, puedes:", options: ["Imprimirlo", "Ordenar, filtrar o usar COUNTIF (CONTAR.SI)", "Cambiar el tipo de letra", "Agregar imágenes"], answer: 1, why: "Esas herramientas cuentan y agrupan las etiquetas." },
      { objective: "O5", q: "¿Qué debes pedirle a la IA que haga con tus etiquetas?", options: ["Elegir tu equipo", "Resumir los patrones principales con sus cuentas", "Publicarlas en internet", "Calificar a tu entrenador"], answer: 1, why: "Resumir es uno de los puntos fuertes de la IA." },
      { objective: "O5", q: "Las herramientas de IA que leen el video directamente pueden:", options: ["No equivocarse nunca", "Reemplazar a los entrenadores", "Ser obligatorias", "Interpretar mal la acción rápida del deporte"], answer: 3, why: "Usa tus propias etiquetas como fuente principal." },
      { objective: "O6", q: "Un buen enfoque de entrenamiento es:", options: ["“Proteger la pelota cuando me presionan por la izquierda”", "“Ser mejor”", "“Ganar”", "“Esforzarme”"], answer: 0, why: "Es concreto y se puede practicar." },
      { objective: "O6", q: "¿Qué pregunta a tu entrenador es la mejor?", options: ["“¿Por qué no juego más?”", "“¿El video es aburrido?”", "“Aquí hay 3 jugadas de este patrón. ¿Qué ejercicio me ayudaría?”", "“¿Puedo faltar al entrenamiento?”"], answer: 2, why: "Las pruebas más una pregunta consiguen una respuesta útil." },
      { objective: "O6", q: "¿Cómo sabes si tu enfoque de entrenamiento funcionó?", options: ["Adivinas", "Le preguntas a un aficionado", "Miras las redes sociales", "Vuelves a grabar y a etiquetar con la misma pregunta más adelante"], answer: 3, why: "Volver a etiquetar muestra si el patrón cambió." },
      { objective: "O6", q: "El video solo ayuda si:", options: ["Tiene muchas vistas", "Cambia lo que practicas", "Es largo", "Tiene música"], answer: 1, why: "El objetivo es entrenar y jugar mejor." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      1,
      3,
      5,
      9,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Video y permiso",
        objective: "O1",
        notYet: "Se grabó sin permiso, o el video se mueve demasiado o está tan cerrado que no se ve la jugada.",
        meets: "Con permiso, video horizontal desde un lugar alto con una vista amplia y estable.",
        exceeds: "Se revisaron la batería y el espacio, y se grabó todo el partido o el entrenamiento sin cortes."
      },
      {
        name: "Hoja de etiquetas",
        objective: "O3",
        notYet: "Hay menos de 20 jugadas, faltan columnas o cambian las palabras de etiqueta.",
        meets: "Al menos 20 jugadas etiquetadas en las seis columnas con las mismas palabras de etiqueta cada vez.",
        exceeds: "Cada fila tiene una marca de tiempo y una nota corta relacionada con la pregunta."
      },
      {
        name: "Patrones y revisión de la IA",
        objective: "O5",
        notYet: "No hay conteos, o se usó el resumen de la IA sin revisarlo.",
        meets: "Los patrones principales escritos con conteos y los conteos de la IA comparados con la hoja, sin nombres.",
        exceeds: "Se encontraron diferencias y se corrigió la instrucción; los patrones con pocos números están marcados como \"mirar más\"."
      },
      {
        name: "Enfoque de entrenamiento",
        objective: "O6",
        notYet: "No hay enfoque, o es vago.",
        meets: "Un enfoque concreto a partir del patrón más fuerte, revisado con el entrenador usando números y marcas de tiempo.",
        exceeds: "Se acordó un ejercicio y se fijó una fecha para volver a grabar y etiquetar con la misma pregunta."
      }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan la tarea final y obtienen Cumple o Supera en cada fila de la rúbrica",
      "Participantes que dicen haber vuelto a grabar y etiquetar con la misma pregunta en un plazo de 30 días (encuesta de seguimiento)",
      "Entrenadores que dicen haber cambiado un ejercicio o un enfoque de entrenamiento gracias a la evidencia en video de un deportista",
      "Participantes que toman otro curso de la categoría Athletes, como IA para deportes de equipo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono con cámara, con batería cargada y espacio libre",
      "Un trípode o una forma de apoyar el teléfono (opcional)",
      "Una cuenta gratuita de Google para usar Google Sheets",
      "Un asistente de IA gratuito (ChatGPT, Microsoft Copilot o Google Gemini)",
      "Unos 60 minutos de lecciones más 60 a 90 minutos para grabar y etiquetar"
    ],
    facilitatorNotes: [
      "Confirma las reglas de grabación del equipo, la escuela y la liga antes de que alguien grabe, sobre todo en partidos juveniles con menores de edad.",
      "Acuerda con los deportistas dónde se guarda el video y que no se publica sin permiso.",
      "En una sesión de equipo, dales a todos la misma lista de palabras de etiqueta para que los conteos se puedan comparar.",
      "Muestra cómo quitar los nombres de otros jugadores antes de pegar en la IA, y pide a los deportistas que comparen los conteos de la IA con su hoja.",
      "Agenda revisiones cortas con el entrenador para que cada deportista presente su patrón, sus marcas de tiempo y su pregunta."
    ]
  }
};

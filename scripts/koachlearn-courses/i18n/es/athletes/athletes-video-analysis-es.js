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
  chapters: [
    {
      name: "Capítulo 1: Conseguir buen video",
      lessons: [
        {
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
          youCanNow: "preparar un teléfono para grabar video útil de partidos o entrenamientos, con permiso."
        },
        {
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
          youCanNow: "ver video con una pregunta clara y tomar notas de las jugadas que la responden."
        },
        {
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
          youCanNow: "etiquetar jugadas en una hoja de cálculo con etiquetas y marcas de tiempo constantes."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conseguir buen video",
        questions: [
          { q: "¿Cuál es el mejor lugar para la cámara al grabar un partido?", options: ["Solo en el suelo detrás del arco", "Dentro de tu bolso", "Alto y central", "Con zoom en la cara de un jugador"], answer: 2, why: "Alto y central muestra toda la jugada y los espacios." },
          { q: "Antes de grabar un entrenamiento, debes:", options: ["Pedirle permiso a tu entrenador", "Transmitirlo en vivo", "Grabar el vestuario del otro equipo", "Poner el teléfono vertical"], answer: 0, why: "Los equipos y las escuelas suelen tener reglas sobre grabar." },
          { q: "¿Cuál es una buena pregunta para estudiar video?", options: ["“¿Fue un buen partido?”", "“¿Por qué somos malos?”", "“¿Quién tiene las mejores zapatillas?”", "“¿Dónde pierdo la pelota?”"], answer: 3, why: "Las preguntas concretas te llevan a patrones que puedes corregir." },
          { q: "¿Qué hace etiquetar?", options: ["Borra las malas jugadas", "Convierte el video en datos que puedes contar", "Agrega música", "Hace el video más corto"], answer: 1, why: "Las etiquetas constantes te permiten contar patrones." },
          { q: "¿Por qué usar siempre la misma palabra para una etiqueta?", options: ["Para hacerlo más largo", "Para que las cuentas salgan bien", "Se ve más bonito", "Por nada"], answer: 1, why: "Usar palabras distintas para lo mismo arruina tus cuentas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Encontrar patrones y usarlos",
      lessons: [
        {
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
          youCanNow: "contar etiquetas y describir patrones con números."
        },
        {
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
          youCanNow: "usar la IA para resumir las etiquetas del video y revisar el resumen con tus propias cuentas."
        },
        {
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
          youCanNow: "convertir los patrones del video en un enfoque de entrenamiento y comprobar después si mejoró."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Encontrar patrones y usarlos",
        questions: [
          { q: "¿Cuál es un patrón?", options: ["Un mal pase", "Una gran clavada", "El resultado final", "7 de 9 pérdidas fueron driblando a la izquierda con presión"], answer: 3, why: "Un patrón se repite en muchas jugadas parecidas." },
          { q: "¿Qué hace COUNTIF (CONTAR.SI)?", options: ["Cuenta las celdas que coinciden con una etiqueta", "Reproduce video", "Borra filas", "Agrega colores"], answer: 0, why: "COUNTIF cuenta las celdas que coinciden." },
          { q: "La cuenta de pérdidas de la IA no coincide con tu hoja. ¿En qué confías?", options: ["En la IA", "En la que sea más alta", "En tu hoja, y luego corriges la instrucción", "En ninguna"], answer: 2, why: "Tus propias etiquetas son la fuente principal; la IA puede contar mal." },
          { q: "Antes de pegar las etiquetas en la IA, quita:", options: ["Las marcas de tiempo", "Los resultados", "Las situaciones", "Los nombres de otros jugadores y la información privada"], answer: 3, why: "Protege la privacidad de otras personas." },
          { q: "¿Qué debes llevarle a tu entrenador?", options: ["Solo quejas", "El patrón, los números y las marcas de tiempo, además de una pregunta", "Todo el video sin notas", "Un ensayo de la IA"], answer: 1, why: "Las pruebas y una pregunta hacen que la conversación sea útil." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Análisis de video e inteligencia de juego",
    questions: [
      { q: "Sostener el teléfono de lado al grabar se llama:", options: ["Vertical", "Selfi", "Horizontal", "Zoom"], answer: 2, why: "El modo horizontal da una vista amplia." },
      { q: "¿Por qué grabar desde arriba?", options: ["Para ver toda la jugada y los espacios", "Para esconderte", "Para mejor sonido", "Es una regla"], answer: 0, why: "La altura muestra a todos los que participan." },
      { q: "¿Qué mantiene firme la cámara?", options: ["Un trípode o apoyarla", "Correr con ella", "Acercar el zoom", "Sacudirla"], answer: 0, why: "El video firme es más fácil de estudiar." },
      { q: "El video de deporte juvenil suele mostrar a otros niños. Por eso debes:", options: ["Publicarlo en cualquier lugar", "No difuminar nada", "Pedir permiso antes de grabar y compartir", "Venderlo"], answer: 2, why: "Los equipos y las familias tienen reglas de privacidad." },
      { q: "Ver video sin un plan por lo general significa que notas:", options: ["Todos los patrones", "Solo las mejores jugadas y los grandes errores", "Nada", "Las notas del entrenador"], answer: 1, why: "Sin una pregunta te pierdes los patrones." },
      { q: "¿Cuántas preguntas por cada vez que miras el video?", options: ["Diez", "Ninguna", "Todas las que puedas", "Una"], answer: 3, why: "Una pregunta concreta mantiene la atención." },
      { q: "La segunda vez que lo miras:", options: ["Adelantas todo", "Le quitas el sonido", "Pausas en las jugadas que responden tu pregunta", "No lo miras"], answer: 2, why: "Pausar te deja anotar los detalles." },
      { q: "La inteligencia de juego significa entender:", options: ["Solo el marcador", "Solo las estadísticas", "El calendario", "Por qué pasan las jugadas"], answer: 3, why: "Se trata del porqué, no solo del qué." },
      { q: "Una marca de tiempo es:", options: ["El momento del video en que empieza una jugada", "La fecha del partido", "Un sello en una entrada", "El pitazo final"], answer: 0, why: "Las marcas de tiempo te dejan encontrar una jugada rápido." },
      { q: "¿Cuál es una columna de etiquetas?", options: ["Canción favorita", "Situación", "El clima de mañana", "Tu contraseña"], answer: 1, why: "La situación es una etiqueta clave." },
      { q: "¿Cuántas jugadas debes etiquetar como mínimo?", options: ["1", "3", "20", "500"], answer: 2, why: "Veinte alcanzan para ver patrones." },
      { q: "Si tu equipo usa una aplicación de video como Hudl, debes:", options: ["Preguntarle a tu entrenador cómo usar sus etiquetas", "No hacerle caso", "Borrarla", "Compartir la contraseña en internet"], answer: 0, why: "Usa lo que usa tu equipo, como quiere tu entrenador." },
      { q: "Algo pasó solo dos veces. Debes:", options: ["Decir que es un gran patrón", "Contárselo a todos", "Cambiar de posición", "Mirar más video primero"], answer: 3, why: "Los números pequeños pueden engañarte." },
      { q: "Para encontrar tus patrones principales en Sheets, puedes:", options: ["Imprimirlo", "Ordenar, filtrar o usar COUNTIF (CONTAR.SI)", "Cambiar el tipo de letra", "Agregar imágenes"], answer: 1, why: "Esas herramientas cuentan y agrupan las etiquetas." },
      { q: "¿Qué debes pedirle a la IA que haga con tus etiquetas?", options: ["Elegir tu equipo", "Resumir los patrones principales con sus cuentas", "Publicarlas en internet", "Calificar a tu entrenador"], answer: 1, why: "Resumir es uno de los puntos fuertes de la IA." },
      { q: "Las herramientas de IA que leen el video directamente pueden:", options: ["No equivocarse nunca", "Reemplazar a los entrenadores", "Ser obligatorias", "Interpretar mal la acción rápida del deporte"], answer: 3, why: "Usa tus propias etiquetas como fuente principal." },
      { q: "Un buen enfoque de entrenamiento es:", options: ["“Proteger la pelota cuando me presionan por la izquierda”", "“Ser mejor”", "“Ganar”", "“Esforzarme”"], answer: 0, why: "Es concreto y se puede practicar." },
      { q: "¿Qué pregunta a tu entrenador es la mejor?", options: ["“¿Por qué no juego más?”", "“¿El video es aburrido?”", "“Aquí hay 3 jugadas de este patrón. ¿Qué ejercicio me ayudaría?”", "“¿Puedo faltar al entrenamiento?”"], answer: 2, why: "Las pruebas más una pregunta consiguen una respuesta útil." },
      { q: "¿Cómo sabes si tu enfoque de entrenamiento funcionó?", options: ["Adivinas", "Le preguntas a un aficionado", "Miras las redes sociales", "Vuelves a grabar y a etiquetar con la misma pregunta más adelante"], answer: 3, why: "Volver a etiquetar muestra si el patrón cambió." },
      { q: "El video solo ayuda si:", options: ["Tiene muchas vistas", "Cambia lo que practicas", "Es largo", "Tiene música"], answer: 1, why: "El objetivo es entrenar y jugar mejor." }
    ]
  }
};

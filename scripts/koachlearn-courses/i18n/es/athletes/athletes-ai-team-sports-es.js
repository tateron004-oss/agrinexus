"use strict";

// Koach Learn course (Spanish translation of athletes-ai-team-sports). Shape and translation rules: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "athletes-ai-team-sports-es",
  lang: "es",
  translationOf: "athletes-ai-team-sports",
  category: "Athletes",
  name: "IA para deportes de equipo",
  skills: "Registrar estadísticas sencillas del equipo, Encontrar patrones de alineaciones y jugadas, Escribir con IA un resumen de observación del rival, Planear la comunicación del equipo, Proteger la privacidad de los jugadores y ser justo",
  outcome: "usar una hoja de cálculo compartida y un asistente de IA para registrar las estadísticas sencillas de un equipo, encontrar un patrón de alineación o de jugada, escribir un resumen de observación del rival de una página y compartirlo con el equipo de una forma que proteja la privacidad de los jugadores.",
  about: [
    "Este curso es para entrenadores, encargados de equipo, capitanes y analistas de cualquier deporte de equipo: baloncesto, fútbol, voleibol, fútbol americano, hockey, béisbol, sóftbol y más.",
    "Los equipos profesionales tienen departamentos de análisis. Tú puedes hacer una versión sencilla con una hoja de cálculo y un asistente de IA gratuito: registrar lo que importa, ver patrones, observar a los rivales y comunicarte con claridad con los jugadores y sus familias.",
    "Cada lección dura unos cinco minutos e incluye una tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Los datos apoyan el criterio del entrenador; nunca lo reemplazan."
  ],
  finalTask: "Para tu equipo, arma una hoja de estadísticas compartida para tres partidos o entrenamientos, encuentra un patrón de alineación o de jugada con ayuda de la IA, escribe un resumen de observación de una página de un rival real usando videos de partidos o resultados públicos, y escribe un mensaje al equipo que comparta el punto clave sin exponer información privada de ningún jugador.",
  chapters: [
    {
      name: "Capítulo 1: Los datos del equipo",
      lessons: [
        {
          title: "Elegir las estadísticas del equipo que importan",
          minutes: 5,
          goal: "Elegir de tres a cinco estadísticas ligadas a cómo quiere jugar tu equipo.",
          text: [
            "El análisis de un equipo empieza con su identidad. A un equipo de baloncesto de contraataque le importan los puntos en transición y las pérdidas de balón. A un equipo de fútbol de posesión le importan los pases completados y los tiros desde el área. A un equipo de voleibol le importan la recepción del saque y el porcentaje de recuperación del saque.",
            "Elige de tres a cinco estadísticas que de verdad puedas recoger en cada partido con la gente que tienes: un encargado, un padre voluntario, un jugador lesionado o el video después.",
            "Escribe una definición clara de cada una para que todos cuenten igual: \"Una pérdida de balón es cualquier posesión perdida sin tirar.\""
          ],
          steps: ["Escribe la identidad de tu equipo en una oración.", "Haz la lista de estadísticas que van con ella.", "Elige de tres a cinco que puedas recoger en cada partido.", "Escribe una definición clara de cada una.", "Decide quién las recoge."],
          words: [["Análisis de equipo", "usar números de un equipo para entender y mejorar cómo juega."], ["Definición", "una regla clara de qué cuenta exactamente."]],
          slides: [
            { title: "Empieza con la identidad", bullets: ["¿Contraataque? ¿Posesión? ¿Defensa primero?", "Estadísticas que van con tu forma de jugar"] },
            { title: "Elige 3-5 estadísticas", bullets: ["Que puedas recoger en cada partido", "Con la gente que tienes"] },
            { title: "Define cada una", bullets: ["Que todos cuenten igual", "Decide quién la recoge"] }
          ],
          tryIt: "Escribe la identidad de tu equipo en una oración. Pide a un asistente de IA que te sugiera estadísticas que vayan con ella, luego elige de tres a cinco y escribe sus definiciones.",
          youCanNow: "elegir y definir las estadísticas del equipo que van con su forma de jugar."
        },
        {
          title: "Una hoja compartida de estadísticas del equipo",
          minutes: 5,
          goal: "Armar una hoja de Google Sheets compartida para las estadísticas del equipo con acceso seguro.",
          text: [
            "Usa una sola hoja de Google Sheets con una pestaña por partido, o una tabla larga con estas columnas: Fecha, Rival, Cuarto o Set, Alineación y tus estadísticas. Una pestaña de resumen puede sumar la temporada.",
            "Compártela solo con el cuerpo técnico y los encargados que necesitan editarla. Usa enlaces de solo lectura para los demás y nunca hagas pública en internet una hoja con información de jugadores.",
            "En esta hoja guarda solo estadísticas de juego. No pongas notas médicas, calificaciones, información familiar ni datos de contacto en una hoja de estadísticas del equipo; eso va en los sistemas oficiales de tu escuela, con la protección de privacidad adecuada."
          ],
          steps: ["Crea una hoja de Google Sheets con columnas claras.", "Agrega una pestaña de resumen para los totales de la temporada.", "Da permiso de edición solo al personal que recoge los datos.", "Solo lectura para los demás; nunca pública.", "Deja fuera la información médica, las calificaciones y los contactos."],
          words: [["Hoja compartida", "una hoja de cálculo que varias personas pueden abrir, con un acceso que tú controlas."], ["Solo lectura", "la gente la puede ver pero no cambiar."]],
          slides: [
            { title: "Diseño de la hoja", bullets: ["Fecha, Rival, Periodo, Alineación", "Tus 3-5 estadísticas", "Pestaña de resumen de la temporada"] },
            { title: "Acceso", bullets: ["Edición: el personal que recoge datos", "Solo lectura para los demás", "Nunca pública"] },
            { title: "Deja fuera", bullets: ["Notas médicas", "Calificaciones e información familiar", "Datos de contacto"] }
          ],
          tryIt: "Crea la hoja de estadísticas de tu equipo, anota un partido pasado de memoria o con una hoja de estadísticas oficial y revisa la configuración para compartir.",
          youCanNow: "armar una hoja compartida de estadísticas del equipo con acceso seguro."
        },
        {
          title: "Encontrar patrones de alineaciones y jugadas",
          minutes: 6,
          goal: "Usar tu hoja y un asistente de IA para ver un patrón de alineación o de jugada.",
          text: [
            "Después de algunos partidos, busca patrones: ¿Qué alineaciones le sacan ventaja al rival? ¿En qué cuarto o set nos cuesta más? ¿Qué tipo de jugada da más puntos?",
            "Usa ordenar, filtros o una tabla dinámica en Google Sheets. O copia la tabla (con iniciales o números de los jugadores en lugar de nombres completos) en un asistente de IA y pregúntale: \"¿Qué alineaciones tienen la mejor diferencia de puntos? ¿Qué periodo es el más débil? Muestra tus cálculos.\" Revisa sus cálculos con la hoja.",
            "Las muestras pequeñas engañan. Una alineación que jugó cuatro minutos no está probada. Toma los patrones como preguntas para el entrenamiento y el video, no como respuestas finales; y decide el entrenador."
          ],
          steps: ["Ordena o filtra por alineación y por periodo.", "Usa con la IA números o iniciales de los jugadores, no nombres completos.", "Pide a la IA que encuentre patrones y muestre sus cálculos.", "Revisa sus cálculos.", "Convierte un patrón en una pregunta para el entrenamiento o el video."],
          words: [["Diferencia de puntos", "los puntos anotados menos los puntos recibidos."], ["Tabla dinámica", "una herramienta de la hoja de cálculo que agrupa y suma datos, como los puntos por alineación."], ["Tamaño de la muestra", "cuántos datos tienes; las muestras pequeñas pueden engañar."]],
          slides: [
            { title: "Preguntas sobre patrones", bullets: ["¿Qué alineaciones le sacan ventaja al rival?", "¿Qué periodo es el más débil?", "¿Qué tipo de jugada anota más?"] },
            { title: "Encuéntralos", bullets: ["Ordenar, filtrar o tabla dinámica", "IA con iniciales, no nombres completos", "\"Muestra tus cálculos\" y revísalos"] },
            { title: "Cuidado", bullets: ["Las muestras pequeñas engañan", "Los patrones son preguntas", "Decide el entrenador"] }
          ],
          tryIt: "Anota al menos dos partidos en tu hoja. Pide a un asistente de IA que encuentre el mejor y el peor periodo o alineación y que muestre sus cálculos. Revísalos y escribe una pregunta para el entrenamiento.",
          youCanNow: "encontrar patrones de alineaciones y jugadas y tomarlos como preguntas para el entrenador."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Los datos del equipo",
        questions: [
          { q: "¿Dónde debe empezar el análisis de un equipo?", options: ["En lo que registran los profesionales", "En todas las estadísticas posibles", "En la identidad del equipo y cómo quiere jugar", "En los números de redes sociales"], answer: 2, why: "Las estadísticas deben ir con tu estilo de juego." },
          { q: "¿Por qué escribir una definición para cada estadística?", options: ["Para que todos cuenten igual", "Para hacerla más larga", "Para confundir a los rivales", "No hace falta"], answer: 0, why: "Contar siempre igual hace que los datos sean confiables." },
          { q: "¿Quién debe tener permiso de edición en la hoja de estadísticas del equipo?", options: ["Cualquier persona en internet", "Los entrenadores rivales", "Los fans", "El personal que recoge las estadísticas"], answer: 3, why: "Limita la edición a quienes la necesitan." },
          { q: "¿Qué NO debe ir en una hoja de estadísticas del equipo?", options: ["Puntos por cuarto", "Las notas médicas de un jugador", "Pérdidas de balón", "Alineaciones"], answer: 1, why: "La información médica va en sistemas oficiales protegidos." },
          { q: "Una alineación jugó cuatro minutos y quedó +6. Debes:", options: ["Ponerla de titular en cada partido", "Tomarlo como una pregunta para revisar más", "Ignorar todos los datos", "Publicarlo en internet"], answer: 1, why: "Las muestras pequeñas pueden engañar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Observación del rival y comunicación",
      lessons: [
        {
          title: "Observar a un rival con IA",
          minutes: 6,
          goal: "Escribir un resumen de observación del rival de una página con información pública.",
          text: [
            "Observar a un rival (scouting) significa conocer cómo juega antes de enfrentarlo. Usa fuentes públicas: resultados pasados, hojas de estadísticas publicadas, páginas de estadísticas de la liga y videos de partidos que tenga tu equipo o que estén publicados. Sigue las reglas de tu liga sobre el intercambio de videos y la observación de rivales.",
            "Mira con tres preguntas: ¿Qué hacen más en ataque? ¿Qué hacen más en defensa? ¿Quiénes son sus jugadores clave y qué les gusta hacer?",
            "Pega tus notas en un asistente de IA y pídele: \"Convierte estas notas de observación en un resumen de una página: su ataque, su defensa, sus jugadores clave y tres claves para ganarles. Puntos cortos.\" Revisa que cada punto salga de tus notas y no de suposiciones de la IA."
          ],
          steps: ["Reúne resultados, estadísticas públicas y videos permitidos.", "Mira con tres preguntas.", "Escribe notas con el minuto de cada jugada.", "Pide a la IA un resumen de una página solo con tus notas.", "Revisa cada punto con tus notas."],
          words: [["Informe de observación", "un resumen de cómo juega un rival y cómo ganarle."], ["Tendencia", "algo que un equipo o un jugador hace seguido en cierta situación."]],
          slides: [
            { title: "Fuentes públicas", bullets: ["Resultados y hojas de estadísticas", "Páginas de estadísticas de la liga", "Videos de partidos permitidos"] },
            { title: "Tres preguntas", bullets: ["Su ataque", "Su defensa", "Jugadores clave y lo que les gusta hacer"] },
            { title: "Resumen con IA", bullets: ["Solo con tus notas", "Tres claves para ganarles", "Revisa cada punto"] }
          ],
          tryIt: "Elige a un rival real con el que juegues pronto. Reúne información pública, escribe notas con las tres preguntas y usa la IA para hacer un resumen de una página. Revisa cada punto.",
          youCanNow: "escribir con ayuda de la IA un resumen de observación del rival de una página a partir de fuentes públicas."
        },
        {
          title: "Comunicación clara con el equipo",
          minutes: 5,
          goal: "Convertir los datos y la observación en mensajes cortos y claros para el equipo.",
          text: [
            "Los jugadores no necesitan todos los números. Necesitan de uno a tres puntos claros: \"Presionan después de cada canasta. Saquen hacia el centro.\" Los mensajes cortos se quedan grabados.",
            "Usa la IA para convertir tu resumen en distintas versiones: una charla de 30 segundos para el vestuario, una imagen de una sola diapositiva para la sesión de video y un mensaje corto para la app de comunicación oficial del equipo. Sigue las reglas de tu escuela sobre cómo los entrenadores contactan a los jugadores, sobre todo si son menores de edad.",
            "Elogia en público, corrige en privado. Los mensajes al equipo hablan del equipo, no de los errores de un jugador."
          ],
          steps: ["Elige de uno a tres puntos clave.", "Pide a la IA una charla de 30 segundos, una diapositiva y un mensaje corto.", "Envíalo por el canal oficial de tu equipo.", "Mantén en privado los comentarios individuales."],
          words: [["Punto clave", "lo único que los jugadores deben recordar."], ["Canal oficial", "el medio de comunicación que tu escuela o club aprueba para los mensajes del equipo."]],
          slides: [
            { title: "Menos es más", bullets: ["De uno a tres puntos", "Los mensajes cortos se quedan grabados"] },
            { title: "Tres versiones con IA", bullets: ["Charla de 30 segundos en el vestuario", "Imagen de una diapositiva", "Mensaje corto al equipo"] },
            { title: "Respeto", bullets: ["Usa los canales oficiales", "Elogia en público, corrige en privado"] }
          ],
          tryIt: "Toma tu resumen de observación y usa la IA para hacer una charla de 30 segundos y un mensaje al equipo de tres oraciones con no más de tres puntos clave.",
          youCanNow: "convertir datos en mensajes al equipo cortos, claros y respetuosos."
        },
        {
          title: "Privacidad y justicia en los datos del equipo",
          minutes: 5,
          goal: "Poner reglas para los datos del equipo que protejan a los jugadores y mantengan justas las decisiones.",
          text: [
            "Los datos de los jugadores son personales. Las estadísticas, los videos y sobre todo la información de salud, de dispositivos que se llevan puestos y académica necesitan cuidado. Recoge solo lo que necesitas, guárdalo en lugares aprobados y borra lo que ya no necesites según las reglas de tu escuela.",
            "No pegues nombres completos, información de salud ni datos privados en herramientas de IA. Usa números o iniciales. Muchas escuelas y ligas tienen reglas sobre los datos de los estudiantes y las apps aprobadas; pregunta a tu director atlético.",
            "Justicia: los números pueden pasar por alto cosas como el esfuerzo, el liderazgo o la defensa que no aparece en una hoja de estadísticas, y las muestras pequeñas pueden ser injustas con los suplentes. Usa los datos para hacer mejores preguntas y explica las decisiones a los jugadores como personas."
          ],
          steps: ["Recoge solo lo que necesitas.", "Guárdalo en lugares aprobados.", "Usa números o iniciales con la IA.", "Pregunta a tu director atlético por las reglas de datos y de apps.", "Explica las decisiones a los jugadores como personas."],
          words: [["Datos de estudiantes", "información sobre los estudiantes, que las escuelas deben proteger."], ["Sesgo", "una injusticia que puede venir de datos incompletos o de suposiciones."]],
          slides: [
            { title: "Los datos de los jugadores son personales", bullets: ["Recoge solo lo que necesitas", "Solo en lugares aprobados", "Borra lo que ya no necesitas"] },
            { title: "Con la IA", bullets: ["Números o iniciales", "Nada de información de salud o privada", "Revisa las reglas de apps de la escuela"] },
            { title: "Justicia", bullets: ["Los números no ven el esfuerzo ni el liderazgo", "Las muestras pequeñas pueden ser injustas", "Explica las decisiones a los jugadores"] }
          ],
          tryIt: "Tarea final: escribe cinco reglas para los datos del equipo; luego termina tu hoja de estadísticas, un patrón, tu resumen de observación de una página y un mensaje al equipo que proteja la privacidad de los jugadores.",
          youCanNow: "usar los datos del equipo de una forma que proteja a los jugadores y mantenga justas las decisiones."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Observación del rival y comunicación",
        questions: [
          { q: "¿Cuál es una fuente justa para observar a un rival?", options: ["Grabar a escondidas su entrenamiento cerrado", "Hackear su app", "Pedir contraseñas a sus jugadores", "Hojas de estadísticas públicas y videos de partidos permitidos"], answer: 3, why: "Usa fuentes públicas y permitidas, siguiendo las reglas de la liga." },
          { q: "La IA agrega un punto clave que no está en tus notas. Tú:", options: ["Lo quitas o lo revisas tú mismo", "Lo dejas", "Lo pones en negritas", "Le dices al equipo que es cierto"], answer: 0, why: "Usa solo lo que respaldan tus notas." },
          { q: "¿Cuántos puntos clave debe tener un mensaje al equipo?", options: ["Veinte", "Ninguno", "De uno a tres", "Todas las estadísticas"], answer: 2, why: "Los mensajes cortos se quedan grabados." },
          { q: "¿Dónde deben hacerse las correcciones individuales?", options: ["En el chat de grupo del equipo", "En redes sociales", "Frente a los fans", "En privado"], answer: 3, why: "Elogia en público, corrige en privado." },
          { q: "¿Qué debes pegar en la IA en lugar de los nombres de los jugadores?", options: ["Nombres completos y fechas de nacimiento", "Números o iniciales", "Notas médicas", "Direcciones de casa"], answer: 1, why: "Así proteges la privacidad de los jugadores." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para deportes de equipo",
    questions: [
      { q: "El análisis de equipo significa:", options: ["Contar solo a los fans", "Reemplazar al entrenador", "Usar números para entender y mejorar cómo juega un equipo", "Vender boletos"], answer: 2, why: "Apoya mejores decisiones de equipo." },
      { q: "Un equipo de contraataque debe registrar:", options: ["Puntos en transición y pérdidas de balón", "Colores de las camisetas", "Horarios del autobús", "Tamaño del público"], answer: 0, why: "Esas van con un estilo de contraataque." },
      { q: "¿Con cuántas estadísticas del equipo debes empezar?", options: ["De tres a cinco", "Cincuenta", "Ninguna", "Cien"], answer: 0, why: "Pocas estadísticas que puedas recoger en cada partido." },
      { q: "¿Quién puede ayudar a recoger estadísticas?", options: ["El árbitro", "El rival", "Un encargado, un voluntario o un jugador lesionado", "Nadie"], answer: 2, why: "Usa a la gente que tienes." },
      { q: "Una hoja de estadísticas del equipo debe estar:", options: ["Pública en internet", "Compartida solo con quienes la necesitan", "Enviada por correo a los rivales", "Impresa para los fans"], answer: 1, why: "Limita el acceso para proteger a los jugadores." },
      { q: "Solo lectura significa que la gente:", options: ["Puede borrarla", "Puede editar todo", "No puede abrirla", "Puede verla pero no cambiarla"], answer: 3, why: "Protege tus datos." },
      { q: "La diferencia de puntos es:", options: ["El total de puntos", "Solo los tiros libres", "Los puntos anotados menos los recibidos", "Tu número de seguidores"], answer: 2, why: "Muestra cómo le va a una alineación." },
      { q: "Una tabla dinámica:", options: ["Es un tipo de ejercicio", "Es un movimiento de baloncesto", "Borra filas", "Agrupa y suma datos"], answer: 3, why: "Resume los datos rápido." },
      { q: "Cuando le preguntes a la IA sobre alineaciones, pídele también que:", options: ["Muestre sus cálculos", "Elija a los titulares", "Publique los resultados", "Adivine"], answer: 0, why: "Necesitas revisar su trabajo." },
      { q: "Los patrones de los datos es mejor tomarlos como:", options: ["Respuestas finales", "Preguntas para el entrenamiento y el video", "Secretos", "Publicaciones en redes"], answer: 1, why: "Los datos apoyan el criterio del entrenador." },
      { q: "Un informe de observación resume:", options: ["Solo tus propias estadísticas", "Los refrigerios del equipo", "Cómo juega un rival y cómo ganarle", "Los nombres de los árbitros"], answer: 2, why: "Prepara a tu equipo." },
      { q: "Una tendencia es:", options: ["Algo que un equipo hace seguido en una situación", "Una jugada que pasó una vez", "Una regla", "Un marcador"], answer: 0, why: "Las tendencias ayudan a prever lo que harán." },
      { q: "La observación de rivales debe seguir:", options: ["Ninguna regla", "Lo que quiera el rival", "Las modas de las redes", "Las reglas de tu liga sobre videos y observación"], answer: 3, why: "Las ligas ponen reglas justas para observar rivales." },
      { q: "Los resúmenes de observación con IA deben salir de:", options: ["Suposiciones de la IA", "Solo tus propias notas", "Rumores", "Comentarios de fans"], answer: 1, why: "Las notas son tu evidencia." },
      { q: "Una charla de 30 segundos en el vestuario debe tener:", options: ["Todas las estadísticas", "De uno a tres puntos clave", "Ningún punto", "Diez diapositivas"], answer: 1, why: "Los jugadores recuerdan pocos puntos claros." },
      { q: "Los entrenadores deben contactar a los jugadores por:", options: ["Cualquier app", "Cuentas secretas", "Comentarios públicos", "El canal aprobado por la escuela o el club"], answer: 3, why: "Las reglas protegen a los menores y a los entrenadores." },
      { q: "¿Qué datos necesitan más cuidado?", options: ["La información de salud y académica", "Los marcadores finales", "Las fechas de los partidos", "Los colores del equipo"], answer: 0, why: "Es privada y está protegida." },
      { q: "¿Quién te puede decir qué apps permite tu escuela para los datos de estudiantes?", options: ["Un fan", "Una IA", "El director atlético", "Un rival"], answer: 2, why: "Las escuelas ponen las reglas de datos." },
      { q: "Las hojas de estadísticas pueden pasar por alto:", options: ["Los puntos", "Los rebotes", "Los marcadores finales", "El esfuerzo, el liderazgo y la defensa sin balón"], answer: 3, why: "No todo se ve en los números." },
      { q: "Cuando una decisión usa datos, los entrenadores deben:", options: ["Ocultarla", "Explicarla a los jugadores como personas", "Culpar a la hoja de cálculo", "Publicarla"], answer: 1, why: "Los jugadores merecen respeto y claridad." }
    ]
  }
};

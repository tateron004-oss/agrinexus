"use strict";

// Koach Learn course (Spanish translation of shared/typing-keyboarding.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "typing-keyboarding-es",
  lang: "es",
  translationOf: "typing-keyboarding",
  category: "Workforce Development",
  name: "Mecanografía y uso del teclado",
  skills: "Postura segura para escribir, Escribir sin mirar desde la fila guía, Números y el teclado numérico, Medir velocidad y precisión, Atajos de teclado, Planear la práctica diaria",
  outcome: "preparar un lugar seguro para escribir, escribir sin mirar las teclas desde la fila guía, escribir números y símbolos, medir tu propia velocidad y precisión, usar los atajos de edición principales y seguir un plan de práctica de cuatro semanas para prepararte para una prueba de mecanografía de un empleo.",
  about: [
    "Muchos empleos piden escribir en la computadora: trabajo de oficina y recepción, chat de atención al cliente, captura de datos, expedientes médicos, tareas escolares y solicitudes de empleo en internet. Algunos empleadores hacen una prueba corta de mecanografía antes de contratar. Este curso es para jóvenes que buscan su primer empleo, adultos que cambian de carrera, personas mayores que quieren escribir con menos esfuerzo y cualquiera que escribe con dos dedos y quiere mejorar.",
    "Vas a acomodar tu silla y tu teclado para que escribir no te lastime, aprender dónde va cada dedo, practicar números y símbolos, medir tu tiempo y calcular tus palabras por minuto y tu precisión, y aprender los atajos que ahorran tiempo en el trabajo. Al final escribes tu propio plan de práctica de cuatro semanas con una puntuación inicial y una meta.",
    "Solo necesitas un teclado de computadora y cualquier programa donde puedas escribir, como el Bloc de notas, TextEdit, Google Docs o Microsoft Word. Un sitio gratis de práctica ayuda, pero no es necesario: cada ejercicio también funciona con un editor de texto, papel y el temporizador del teléfono.",
    "Cada lección dura unos cinco minutos, seguida de un ejercicio de \"Pruébalo ahora\" y una comprobación rápida de dos preguntas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Escribir mejora con la práctica diaria, así que el curso te da un plan, no un atajo."
  ],
  finalTask: "Haz tu plan de práctica de mecanografía de cuatro semanas. Haz una prueba cronometrada de un minuto y anota tus palabras por minuto y tu precisión iniciales, ponte una meta para las dos y escribe un plan diario con fechas: de 10 a 15 minutos al día con un calentamiento, un ejercicio para tus teclas más débiles, un ejercicio de números o de atajos y una prueba cronometrada por semana. Agrega una tabla de registro para llenar cada semana y una nota sobre cómo vas a presentar una prueba de mecanografía de un empleo.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas que buscan empleo de todas las edades: jóvenes que buscan su primer trabajo, adultos que cambian de carrera o vuelven a trabajar, personas mayores, personas que regresan de prisión y personas que hablan otro idioma. Muchas usan el teléfono todos los días, pero en la computadora escriben con dos dedos mirando las teclas.",
    startingPoint: "Pueden encender una computadora, abrir un programa y escribir una oración mirando las teclas (como se enseña en \"Habilidades básicas de computación\"). La mayoría nunca aprendió la fila guía, no conoce su velocidad y usa el ratón para cada copiar, pegar y deshacer.",
    gap: "Los empleos de oficina, atención al cliente, captura de datos y salud esperan que escribas de forma constante y precisa, y algunos empleadores miden la velocidad de escritura antes de contratar. Escribir buscando cada tecla es lento, cansado y lleno de errores. Los participantes necesitan buenos hábitos con los dedos, una forma de medir su avance, una postura segura y un plan diario que puedan seguir por su cuenta.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º grado)",
      "Dispositivos: el teclado de una computadora de escritorio o portátil; el teclado en pantalla de un teléfono o tableta no sirve para los ejercicios de mecanografía",
      "Algunos participantes solo tienen una computadora de la biblioteca o del programa por ratos cortos",
      "Tiempo: lecciones de 4 a 6 minutos más 10 a 15 minutos de práctica diaria",
      "Comodidad y salud: si escribir causa dolor o adormecimiento, deja de escribir y habla con un profesional de la salud"
    ],
    prerequisites: "Saber encender una computadora y abrir un programa para escribir. Quien nunca haya usado una computadora toma primero \"Habilidades básicas de computación\"."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una silla, un escritorio y una computadora", action: "acomodar la silla, el teclado y la pantalla y sentarte en una postura segura para escribir", standard: "cumpliendo al menos 5 de los 6 puntos de la lista de acomodo" },
    { id: "O2", condition: "Usando un teclado de computadora", action: "poner los dedos en la fila guía y presionar cada letra con el dedo correcto", standard: "escribiendo una línea completa de ejercicio sin mirar las teclas" },
    { id: "O3", condition: "Con una prueba de mecanografía cronometrada de un minuto o más", action: "calcular tus palabras por minuto y tu precisión", standard: "con los dos números calculados correctamente" },
    { id: "O4", condition: "Con una lista de números de teléfono, precios, fechas y mayúsculas", action: "escribir números, símbolos y mayúsculas con la fila de números, las teclas Shift y el teclado numérico", standard: "con no más de 2 errores en 10 líneas" },
    { id: "O5", condition: "Mientras escribes y corriges un documento corto", action: "usar atajos de teclado para seleccionar, copiar, pegar, deshacer y guardar", standard: "haciendo los cinco sin el ratón" },
    { id: "O6", condition: "Usando tu propia puntuación inicial", action: "escribir un plan de práctica de cuatro semanas con una meta, ejercicios diarios, fechas y un registro", standard: "que cumpla cada fila de la rúbrica del curso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Prepara tus manos",
      lessons: [
        {
          title: "Acomodarte para escribir de forma segura",
          objectives: ["O1"],
          minutes: 5,
          goal: "Acomodar tu silla, tu teclado y tu pantalla y sentarte en una postura que no fuerce tu cuerpo.",
          text: [
            "Escribir por horas en una mala posición puede causar dolor en el cuello, la espalda, las muñecas y las manos. Acomodarte bien no cuesta nada y te ayuda a escribir más rápido, porque las manos relajadas se mueven con más facilidad.",
            "OSHA, la agencia de seguridad en el trabajo de Estados Unidos, describe una postura neutral para trabajar en la computadora: la cabeza y el cuello equilibrados en línea con el cuerpo, los hombros relajados, los codos cerca del cuerpo, las muñecas y las manos rectas en línea con los antebrazos, la parte baja de la espalda apoyada y los pies planos en el piso. La parte de arriba de la pantalla debe quedar a la altura de los ojos o un poco más abajo. No hay una posición perfecta para todos, así que ajusta hasta que te sientas cómodo.",
            "Mantén el teclado cerca, para no estirarte. Deja que los dedos floten sobre las teclas y tócalas con suavidad; no apoyes las muñecas con fuerza en el borde del escritorio mientras escribes. Toma descansos cortos para pararte, estirarte y dejar de mirar la pantalla. Si escribir te causa dolor, hormigueo o adormecimiento que no se quita, deja de escribir y habla con un médico o una enfermera."
          ],
          steps: ["Siéntate al fondo de la silla para que la parte baja de la espalda quede apoyada. Usa una toalla enrollada o un cojín si hace falta.", "Pon los pies planos en el piso o sobre una caja o un reposapiés.", "Acerca el teclado para que los codos queden junto a tu cuerpo.", "Mantén las muñecas rectas, en línea con los antebrazos, y los hombros relajados.", "Mueve la pantalla para que la parte de arriba quede a la altura de los ojos o un poco más abajo.", "Planea un descanso corto para pararte y estirarte más o menos cada 30 a 60 minutos."],
          words: [["Postura", "la forma en que sostienes tu cuerpo cuando estás sentado o de pie."], ["Postura neutral", "una posición relajada y equilibrada en la que las articulaciones no están dobladas ni torcidas."], ["Ergonomía", "acomodar el trabajo y las herramientas para que se ajusten a tu cuerpo y no lo lastimen."], ["OSHA", "la Administración de Seguridad y Salud Ocupacional, la agencia de Estados Unidos para la seguridad en el trabajo."]],
          slides: [
            { title: "Por qué importa cómo te acomodas", bullets: ["Una mala postura puede lastimar el cuello, la espalda y las muñecas", "Las manos relajadas escriben más rápido", "Acomodarte bien es gratis"] },
            { title: "La postura neutral", bullets: ["Cabeza en línea con el cuerpo, hombros relajados", "Codos cerca, muñecas rectas", "Espalda baja apoyada, pies planos"] },
            { title: "Teclado y pantalla", bullets: ["Teclado cerca para no estirarte", "Parte de arriba de la pantalla a la altura de los ojos o un poco más abajo", "Toca las teclas con suavidad; deja que los dedos floten"] },
            { title: "Cuida tu cuerpo", bullets: ["Toma descansos cortos para pararte y estirarte", "Dolor, hormigueo o adormecimiento: deja de escribir y ve a un médico o una enfermera"] }
          ],
          sources: [{ name: "OSHA: herramienta en línea sobre estaciones de trabajo con computadora (en inglés)", url: "https://www.osha.gov/etools/computer-workstations" }],
          tryIt: "Copia en papel esta lista de seis puntos: espalda apoyada, pies planos, codos cerca, muñecas rectas, hombros relajados, parte de arriba de la pantalla a la altura de los ojos o más abajo. Siéntate en la computadora donde vas a practicar, marca cada punto que cumples y corrige los que no.",
          youCanNow: "acomodar una silla, un teclado y una pantalla para escribir de forma segura y revisar tu postura con una lista de seis puntos.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde debe quedar la parte de arriba de la pantalla de tu computadora?", options: ["Muy por encima de tu cabeza", "A la altura de los ojos o un poco más abajo", "Acostada sobre el escritorio", "Junto a tus rodillas"], answer: 1, why: "La guía de OSHA pone la parte de arriba del monitor a la altura de los ojos o un poco más abajo para que el cuello se mantenga equilibrado." },
            { objective: "O1", q: "Tus muñecas se doblan mucho hacia arriba cuando escribes. ¿Qué cambias?", options: ["Escribir más rápido para terminar antes", "Alejar más el teclado", "Subir los hombros", "Ajustar la silla o el teclado para que las muñecas queden rectas"], answer: 3, why: "Las muñecas deben estar rectas, en línea con los antebrazos; las muñecas dobladas causan más tensión." }
          ]
        },
        {
          title: "La fila guía y el mapa de los dedos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Poner los dedos en la fila guía y presionar cada letra con el dedo correcto sin mirar.",
          text: [
            "Escribir al tacto (mecanografía) significa escribir sin mirar las teclas. Cada dedo tiene sus propias teclas, así que tus manos aprenden dónde están las letras. Al principio parece más lento, pero después de unas semanas de práctica se vuelve más rápido y más preciso que mirar.",
            "Los dedos empiezan en la fila guía y vuelven a ella. Mano izquierda: meñique en la A, anular en la S, dedo medio en la D, índice en la F. Mano derecha: índice en la J, medio en la K, anular en la L, meñique en el punto y coma (;). En un teclado en español, en ese lugar está la Ñ. Los pulgares descansan en la barra espaciadora. La mayoría de los teclados tiene una pequeña marca en relieve en la F y en la J para que encuentres la fila guía sin mirar.",
            "Cada dedo sube y baja desde su tecla guía. Meñique izquierdo: Q, A, Z. Anular izquierdo: W, S, X. Medio izquierdo: E, D, C. Índice izquierdo: R, F, V y también T, G, B. Índice derecho: Y, H, N y también U, J, M. Medio derecho: I, K y la coma. Anular derecho: O, L y el punto. Meñique derecho: P, el punto y coma, la barra diagonal y la tecla Enter. Después de cada movimiento, el dedo vuelve a su lugar."
          ],
          steps: ["Encuentra las marcas en relieve de la F y la J con los dedos índices.", "Apoya los otros dedos en A S D y K L ;, y los pulgares en la barra espaciadora.", "Mira la pantalla, no tus manos. Si sigues mirando, cubre tus manos con un trapo.", "Escribe despacio: estira el dedo correcto y luego regrésalo a su lugar.", "Al principio, di cada letra en voz baja mientras la escribes y mantén un ritmo parejo."],
          words: [["Escribir al tacto", "escribir sin mirar las teclas, usando siempre el mismo dedo para cada tecla."], ["Fila guía", "la fila de letras del medio donde descansan los dedos: A S D F y J K L ;."], ["Escribir buscando teclas", "buscar cada tecla con la vista y presionarla con uno o dos dedos."], ["Movimiento", "mover un dedo desde su tecla guía hasta otra tecla y regresarlo."]],
          slides: [
            { title: "Escribir al tacto", bullets: ["Escribe sin mirar las teclas", "Cada dedo tiene sus propias teclas", "Más lento al principio, más rápido con la práctica"] },
            { title: "La fila guía", bullets: ["Izquierda: A S D F", "Derecha: J K L ; (la Ñ en un teclado en español)", "Pulgares en la barra espaciadora; marcas en la F y la J"] },
            { title: "Movimientos", bullets: ["Cada dedo sube o baja desde su tecla guía", "Los índices también cubren T G B y Y H N", "Regresa a tu lugar después de cada movimiento"] },
            { title: "Hábitos que funcionan", bullets: ["Los ojos en la pantalla", "Ritmo lento y parejo", "Primero la precisión; la velocidad llega después"] }
          ],
          tryIt: "Abre el Bloc de notas, TextEdit, Google Docs o Word. Sin mirar tus manos, escribe cada línea tres veces: asdf jkl; luego fdsa ;lkj luego sal las falda salsa luego la sala da la falda. Después escribe: el veloz murcielago hindu comia feliz cardillo y kiwi. Cuenta cuántas veces miraste hacia abajo.",
          youCanNow: "encontrar la fila guía con el tacto, usar el dedo correcto para cada letra y practicar una línea sin mirar las teclas.",
          quickCheck: [
            { objective: "O2", q: "¿Qué teclas tienen pequeñas marcas en relieve para ayudarte a encontrar la fila guía?", options: ["La F y la J", "La A y el ;", "La Q y la P", "La Z y la M"], answer: 0, why: "Las marcas de la F y la J permiten que los dedos índices encuentren su lugar sin mirar." },
            { objective: "O2", q: "¿Qué dedo escribe la letra E?", options: ["El índice derecho", "El meñique izquierdo", "El dedo medio izquierdo", "El pulgar derecho"], answer: 2, why: "La E está justo arriba de la D, que le toca al dedo medio izquierdo." }
          ]
        },
        {
          title: "Mayúsculas, números, símbolos y el teclado numérico",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escribir mayúsculas, números y símbolos comunes, y escribir números en el teclado numérico.",
          text: [
            "Para una mayúscula, mantén presionada la tecla Shift (Mayús) con el meñique de la OTRA mano, presiona la letra y luego suelta. Para una A mayúscula (mano izquierda), usa el Shift derecho. Para una J mayúscula (mano derecha), usa el Shift izquierdo. Bloq Mayús (Caps Lock) sirve para escribir una palabra completa en mayúsculas; apágalo después.",
            "La fila de números está arriba de las letras. Cada dedo sube desde su tecla guía: el meñique izquierdo escribe el 1, el anular izquierdo el 2, el medio izquierdo el 3, el índice izquierdo el 4 y el 5, el índice derecho el 6 y el 7, el medio derecho el 8, el anular derecho el 9 y el meñique derecho el 0. Los símbolos de esas mismas teclas, como $ % @ # y !, necesitan Shift.",
            "Muchos teclados de escritorio tienen un teclado numérico a la derecha, ordenado como una calculadora. Los trabajos de captura de datos, facturación, bancos e inventario lo usan mucho. Activa Bloq Num (Num Lock). Apoya el índice derecho en el 4, el dedo medio en el 5 (tiene una marca en relieve) y el anular en el 6. El pulgar presiona el 0 y el meñique presiona Enter. Muchas computadoras portátiles no tienen teclado numérico; en ese caso, usa la fila de números."
          ],
          steps: ["Mayúsculas: mantén presionado Shift con el meñique de la otra mano, presiona la letra y suelta.", "Fila de números: sube desde tu lugar con el mismo dedo y luego regresa.", "Símbolos: mantén presionado Shift y presiona la tecla de número que muestra el símbolo.", "Teclado numérico: activa Bloq Num y apoya los dedos en 4 5 6, usando la marca del 5.", "Revisa los números dos veces; un dígito equivocado en un precio o un teléfono es un error real."],
          words: [["Tecla Shift (Mayús)", "la tecla que mantienes presionada para escribir una mayúscula o el símbolo de arriba de una tecla."], ["Bloq Mayús (Caps Lock)", "una tecla que pone todas las letras en mayúscula hasta que la vuelves a presionar."], ["Teclado numérico", "el bloque de teclas de números a la derecha de muchos teclados, también llamado teclado de 10 teclas."], ["Bloq Num (Num Lock)", "la tecla que activa los números del teclado numérico."], ["Captura de datos", "escribir información como nombres, números y códigos en un sistema de computadora."]],
          slides: [
            { title: "Letras mayúsculas", bullets: ["Mantén Shift presionado con la otra mano", "A mayúscula: Shift derecho; J mayúscula: Shift izquierdo", "Bloq Mayús solo para palabras completas"] },
            { title: "Fila de números y símbolos", bullets: ["Sube desde tu lugar con el mismo dedo", "Símbolos como $ % @ necesitan Shift", "Regresa a tu lugar después de cada movimiento"] },
            { title: "El teclado numérico (10 teclas)", bullets: ["Activa Bloq Num", "Apoya los dedos en 4 5 6; la marca está en el 5", "Pulgar en el 0, meñique en Enter"] },
            { title: "Los números deben ser exactos", bullets: ["Un dígito equivocado es un error real", "Revisa dos veces precios, fechas y números de teléfono"] }
          ],
          tryIt: "Escribe estas diez líneas y luego revisa cada una contra la página: (555) 014-2290 | $12.75 | 03/15/2026 | Pedido #4471 | 40% de descuento | María López | Dra. Kim, consultorio 210 | 7:30 a.m. | ID 88-31-05 | Total: $1,049.60. Usa el teclado numérico si tienes uno. Cuenta tus errores y practica las líneas en las que fallaste.",
          youCanNow: "escribir mayúsculas con la tecla Shift de la otra mano, escribir números y símbolos desde la fila de números y usar el teclado numérico desde 4 5 6.",
          quickCheck: [
            { objective: "O4", q: "Quieres una P mayúscula (una tecla de la mano derecha). ¿Qué Shift mantienes presionado?", options: ["El Shift derecho", "Bloq Mayús", "Cualquier Shift con la misma mano", "El Shift izquierdo"], answer: 3, why: "Usa el Shift de la otra mano, para que la mano derecha quede libre para presionar la P." },
            { objective: "O4", q: "En el teclado numérico, ¿dónde se apoya tu dedo medio?", options: ["En el 0", "En el 5, la tecla con la marca en relieve", "En Enter", "En el 9"], answer: 1, why: "Las teclas guía del teclado numérico son 4 5 6, y el 5 tiene la marca para tu dedo medio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Prepara tus manos",
        questions: [
          { objective: "O1", q: "¿Qué es parte de una postura segura para escribir?", options: ["Pies planos en el piso y la parte baja de la espalda apoyada", "Hombros subidos hacia las orejas", "Muñecas dobladas muy hacia arriba", "El teclado a la distancia del brazo estirado"], answer: 0, why: "Los pies planos, la espalda apoyada y los hombros relajados son parte de la postura neutral que describe OSHA." },
          { objective: "O1", q: "Después de una hora escribiendo, te hormiguea la mano y no se te quita. ¿Qué haces?", options: ["Escribir con más fuerza para calentarla", "No hacer caso y seguir", "Dejar de escribir y hablar con un médico o una enfermera", "Cambiar a escribir con un solo dedo"], answer: 2, why: "El dolor, el hormigueo o el adormecimiento que no se quitan son una señal para parar y que un profesional de la salud te revise." },
          { objective: "O2", q: "¿Dónde se apoya tu dedo índice derecho?", options: ["En la F", "En la H", "En el ;", "En la J"], answer: 3, why: "El índice derecho se apoya en la J, la tecla con la marca en relieve." },
          { objective: "O2", q: "Sigues mirando tus manos. ¿Qué ayuda más?", options: ["Mirar las teclas con más cuidado", "Cubrir tus manos con un trapo y escribir despacio", "Escribir con dos dedos", "Apagar la pantalla"], answer: 1, why: "Cubrir tus manos te obliga a confiar en la memoria de los dedos, y así se aprende a escribir al tacto." },
          { objective: "O4", q: "Un formulario de empleo pide un precio: $49.99. ¿Cómo escribes el signo $?", options: ["Mantener presionado Shift y presionar la tecla 4", "Presionar Bloq Mayús y luego el 4", "Presionar la tecla 4 dos veces", "Mantener presionado Shift y presionar la tecla S"], answer: 0, why: "El $ es el símbolo con Shift de la tecla 4 en la fila de números de un teclado de Estados Unidos." }
        ]
      }
    },
    {
      name: "Capítulo 2: Velocidad, precisión y un plan",
      lessons: [
        {
          title: "Medir tu velocidad y tu precisión",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular tus palabras por minuto y tu precisión a partir de una prueba de mecanografía cronometrada.",
          text: [
            "La velocidad de escritura se cuenta en palabras por minuto (PPM; en inglés, WPM). Como las palabras tienen distinto largo, las pruebas de mecanografía cuentan cada 5 caracteres (letras, espacios y signos de puntuación) como una palabra. Entonces, si escribes 200 caracteres en un minuto, son 200 entre 5 = 40 PPM. En una prueba más larga, divide también entre los minutos: 450 caracteres en 3 minutos son 90 palabras entre 3 = 30 PPM.",
            "La precisión te dice cuántas de tus palabras estaban bien. Precisión = palabras correctas entre todas las palabras escritas, por 100. Si escribiste 50 palabras y 4 tenían errores, la precisión es 46 entre 50 = 92%. Algunas pruebas también dan las PPM netas, que descuentan los errores: los errores entre los minutos, restados de tu velocidad.",
            "La precisión importa más que la velocidad. Alguien que escribe rápido pero comete muchos errores es lento en el trabajo, porque cada error hay que encontrarlo y corregirlo. Primero construye la precisión y después la velocidad. Puedes medir tu tiempo con el temporizador del teléfono y un editor de texto (muchos programas muestran el número de caracteres), o usar un sitio gratis de práctica como typing.com, que te muestra la velocidad y la precisión."
          ],
          steps: ["Elige un párrafo que no hayas practicado, de un libro, una noticia o un anuncio de empleo.", "Pon un temporizador de 1 minuto (o de 3 minutos para un resultado más estable).", "Escribe a tu ritmo normal sin detenerte a corregir errores.", "Cuenta los caracteres, incluyendo los espacios, o usa el conteo de caracteres del programa.", "Velocidad: caracteres entre 5, y luego entre los minutos.", "Precisión: palabras correctas entre palabras escritas, por 100. Anota las dos con la fecha."],
          words: [["PPM", "palabras por minuto (en inglés, WPM): cuántas palabras escribes en un minuto."], ["Palabra estándar", "5 caracteres, incluyendo espacios y signos de puntuación, que cuentan como una palabra en las pruebas de mecanografía."], ["Precisión", "el porcentaje de lo que escribiste que está correcto."], ["PPM netas", "tu velocidad después de descontar los errores."], ["Carácter", "cualquier letra, número, espacio o símbolo que escribes."]],
          slides: [
            { title: "Palabras por minuto", bullets: ["Cada 5 caracteres cuentan como 1 palabra", "200 caracteres en 1 minuto = 40 PPM", "450 caracteres en 3 minutos = 30 PPM"] },
            { title: "Precisión", bullets: ["Palabras correctas entre palabras escritas, por 100", "46 bien de 50 = 92%", "Las PPM netas descuentan los errores"] },
            { title: "Primero la precisión", bullets: ["Cada error cuesta tiempo corregirlo", "Construye la precisión y después la velocidad"] },
            { title: "Cómo hacerte una prueba", bullets: ["Un párrafo nuevo y el temporizador del teléfono", "O un sitio gratis como typing.com", "Anota el resultado y la fecha"] }
          ],
          sources: [{ name: "Typing.com (lecciones y pruebas de mecanografía gratis)", url: "https://www.typing.com/" }],
          tryIt: "Haz una prueba de un minuto: pon un temporizador, escribe un párrafo nuevo de un anuncio de empleo o de una noticia y para cuando suene. Cuenta los caracteres (o usa el conteo de caracteres), calcula tus PPM, marca tus errores y calcula tu precisión. Escribe los dos números y la fecha de hoy arriba de una hoja. Esta es tu puntuación inicial.",
          youCanNow: "medir tu tiempo, calcular tus palabras por minuto y tu precisión, y anotar una puntuación inicial.",
          quickCheck: [
            { objective: "O3", q: "Escribiste 250 caracteres en un minuto. ¿Cuál es tu velocidad?", options: ["25 PPM", "250 PPM", "100 PPM", "50 PPM"], answer: 3, why: "250 caracteres entre 5 son 50 palabras, en un minuto: 50 PPM." },
            { objective: "O3", q: "Escribiste 40 palabras y 2 tenían errores. ¿Cuál es tu precisión?", options: ["80%", "98%", "95%", "38%"], answer: 2, why: "38 correctas entre 40 escritas es 0.95, que es 95%." }
          ]
        },
        {
          title: "Atajos y teclas de edición que ahorran tiempo",
          objectives: ["O5"],
          minutes: 5,
          goal: "Usar atajos de teclado para seleccionar, copiar, pegar, deshacer y guardar sin el ratón.",
          text: [
            "Cada vez que buscas el ratón, tus manos dejan la fila guía. Los atajos de teclado te permiten editar sin detenerte. En Windows usan la tecla Ctrl; en una Mac, la mayoría usa la tecla Command en su lugar.",
            "Los cinco principales: Ctrl+A selecciona todo, Ctrl+C copia, Ctrl+V pega, Ctrl+Z deshace tu último cambio y Ctrl+S guarda. Ctrl+X corta (quita y copia). Para usar un atajo, mantén presionado Ctrl, toca la letra y luego suelta las dos. Ojo: en algunos programas en español, como Word, se usa Ctrl+E para seleccionar todo y Ctrl+G para guardar.",
            "Las teclas de edición también ayudan. Retroceso (Backspace) borra a la izquierda del cursor; Supr (Delete) borra a la derecha. Las flechas mueven el cursor. Inicio (Home) y Fin (End) saltan al principio o al final de una línea. Mantén presionado Shift con una flecha para seleccionar texto letra por letra. En muchos programas, Ctrl con la flecha izquierda o derecha salta una palabra completa. Corrige un error cuando lo veas, pero no dejes de escribir para revisar cada letra."
          ],
          steps: ["Mantén presionado Ctrl (Command en una Mac) con el meñique izquierdo.", "Toca la letra: A seleccionar todo, C copiar, X cortar, V pegar, Z deshacer, S guardar.", "Suelta las dos teclas.", "Usa Shift con las flechas para seleccionar parte de una línea.", "Practica cada atajo cinco veces para que se vuelva un hábito."],
          words: [["Atajo", "una combinación de teclas que hace una tarea sin el ratón."], ["Ctrl", "la tecla Control de un teclado de Windows, que se usa para la mayoría de los atajos."], ["Tecla Command", "la tecla con el símbolo ⌘ en los teclados de Mac, que hace lo mismo que Ctrl en Windows."], ["Cursor", "la línea que parpadea y muestra dónde va a aparecer lo que escribes."], ["Deshacer", "quitar el último cambio que hiciste."]],
          slides: [
            { title: "Por qué usar atajos", bullets: ["Las manos se quedan en el teclado", "Menos viajes al ratón", "Windows: Ctrl; Mac: normalmente Command"] },
            { title: "Los cinco principales", bullets: ["Ctrl+A seleccionar todo, Ctrl+C copiar, Ctrl+V pegar", "Ctrl+Z deshacer", "Ctrl+S guardar; Ctrl+X cortar"] },
            { title: "Teclas de edición", bullets: ["Retroceso borra a la izquierda; Supr borra a la derecha", "Inicio y Fin saltan al principio o al final de la línea", "Shift + flecha selecciona texto"] }
          ],
          tryIt: "Escribe tres líneas cortas sobre un empleo que quieres. Luego, sin tocar el ratón: selecciona todo (Ctrl+A), copia (Ctrl+C), ve al final con la tecla Fin y las flechas, pega (Ctrl+V), deshaz lo pegado (Ctrl+Z) y guarda el archivo (Ctrl+S). En una Mac, usa Command en lugar de Ctrl. Hazlo dos veces.",
          youCanNow: "seleccionar, copiar, cortar, pegar, deshacer y guardar con el teclado y moverte por una línea con las teclas de edición.",
          quickCheck: [
            { objective: "O5", q: "Acabas de borrar un párrafo sin querer. ¿Qué atajo lo regresa en Windows?", options: ["Ctrl+Z", "Ctrl+S", "Ctrl+A", "Ctrl+P"], answer: 0, why: "Ctrl+Z deshace el último cambio." },
            { objective: "O5", q: "En una Mac, ¿qué tecla usan la mayoría de los atajos en lugar de Ctrl?", options: ["Shift", "Command", "Bloq Mayús", "Tab"], answer: 1, why: "La mayoría de los atajos de Mac usan la tecla Command donde Windows usa Ctrl." }
          ]
        },
        {
          title: "Tu plan de práctica y la prueba de mecanografía del empleo",
          objectives: ["O6", "O3"],
          minutes: 6,
          goal: "Escribir un plan de práctica de cuatro semanas con tu puntuación inicial, una meta, ejercicios diarios y un registro.",
          text: [
            "La mecanografía mejora con práctica corta y diaria, no con sesiones largas el fin de semana. De 10 a 15 minutos al día, casi todos los días, funciona mejor que una hora una vez por semana, porque los dedos forman hábitos con la repetición. Mantén los ojos en la pantalla y la postura neutral cada vez.",
            "Una buena sesión diaria tiene cuatro partes: un calentamiento de 2 minutos en la fila guía, un ejercicio con tus teclas más débiles (las que más fallaste en tu prueba), un ejercicio corto de números o de atajos y texto real, como un anuncio de empleo o una noticia. Una vez por semana, haz una prueba cronometrada y anota el resultado en tu registro. Ponte primero una meta de precisión y luego de velocidad, y compara cada semana con tu puntuación inicial.",
            "Algunos empleadores hacen una prueba de mecanografía antes de contratar. El anuncio de empleo o la oficina de contratación normalmente dice qué se evalúa y qué velocidad quieren; si no lo dice, pregunta. Antes de la prueba: siéntate en una buena posición, calienta dos minutos, lee las instrucciones y escribe a un ritmo parejo sin apurarte. Nunca le pagues a un sitio web que promete un certificado de mecanografía como condición para conseguir un empleo; el empleador hace su propia prueba."
          ],
          steps: ["Escribe tus PPM, tu precisión y la fecha iniciales de la Lección 4.", "Ponte una meta para la semana 4: primero precisión, luego velocidad.", "Haz una lista de tus teclas más débiles según tu prueba.", "Planea cada día: calentamiento, ejercicio de teclas débiles, ejercicio de números o atajos, texto real.", "Elige un día por semana para una prueba cronometrada y haz una tabla de registro: fecha, PPM, precisión, nota.", "Agrega un plan para el día de la prueba: postura, calentamiento, leer las instrucciones, ritmo parejo."],
          words: [["Plan de práctica", "un horario escrito de qué vas a practicar, cuándo y cómo vas a medir tu avance."], ["Registro", "una tabla donde anotas tus resultados cada semana."], ["Teclas débiles", "las teclas que más fallas o en las que más te tardas."], ["Prueba previa al empleo", "una prueba que hace un empleador para revisar una habilidad antes de contratar."]],
          slides: [
            { title: "Poco y seguido", bullets: ["De 10 a 15 minutos al día, casi todos los días", "Mejor que una sesión larga a la semana", "Ojos en la pantalla y buena postura cada vez"] },
            { title: "Una sesión diaria", bullets: ["Calentamiento en la fila guía", "Ejercicio con tus teclas más débiles", "Números o atajos, y luego texto real"] },
            { title: "Mide tu avance", bullets: ["Una prueba cronometrada una vez por semana", "Registro: fecha, PPM, precisión, nota", "Primero la meta de precisión, luego la de velocidad"] },
            { title: "La prueba de mecanografía del empleo", bullets: ["El anuncio o el empleador dice qué se evalúa", "Calienta, lee las instrucciones, ritmo parejo", "Nunca pagues a un sitio por un certificado para que te contraten"] }
          ],
          sources: [{ name: "Typing.com (lecciones y pruebas de mecanografía gratis)", url: "https://www.typing.com/" }],
          tryIt: "Tarea final: escribe tu plan de práctica de cuatro semanas. Pon arriba tus PPM y tu precisión iniciales de la Lección 4, ponte una meta para cada una, haz una lista de tus teclas más débiles y escribe la sesión de 10 a 15 minutos de cada día con fechas. Agrega una tabla de registro con cuatro filas de pruebas semanales y un plan corto para el día de la prueba.",
          youCanNow: "escribir y seguir un plan de mecanografía de cuatro semanas con una puntuación inicial, metas, ejercicios diarios y un registro semanal, y prepararte para una prueba de mecanografía de un empleo.",
          quickCheck: [
            { objective: "O6", q: "¿Qué horario de práctica suele desarrollar mejor la mecanografía?", options: ["Una sesión de tres horas al mes", "Practicar solo la noche antes de una prueba", "De 10 a 15 minutos casi todos los días", "Practicar solo cuando tengas ganas"], answer: 2, why: "La práctica corta y constante forma hábitos en los dedos con la repetición." },
            { objective: "O6", q: "¿Qué va arriba de tu plan de práctica?", options: ["Tu número de Seguro Social", "Una lista de sitios de mecanografía", "Tu canción favorita", "Tus PPM, tu precisión y la fecha iniciales"], answer: 3, why: "Una puntuación inicial te permite ponerte una meta y ver tu avance cada semana." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Velocidad, precisión y un plan",
        questions: [
          { objective: "O3", q: "En una prueba de mecanografía, ¿cuántos caracteres cuentan como una palabra?", options: ["1", "10", "5", "3"], answer: 2, why: "Las pruebas de mecanografía cuentan cada 5 caracteres, incluyendo espacios, como una palabra estándar." },
          { objective: "O3", q: "Escribiste 600 caracteres en 3 minutos. ¿Cuál es tu velocidad?", options: ["40 PPM", "120 PPM", "200 PPM", "60 PPM"], answer: 0, why: "600 entre 5 son 120 palabras; 120 entre 3 minutos son 40 PPM." },
          { objective: "O5", q: "¿Qué atajo copia el texto seleccionado en Windows?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+S", "Ctrl+Z"], answer: 1, why: "Ctrl+C copia; Ctrl+V pega." },
          { objective: "O5", q: "Quieres seleccionar todo un documento para cambiar la letra. ¿Qué presionas?", options: ["Ctrl+X", "Inicio", "Retroceso", "Ctrl+A"], answer: 3, why: "Ctrl+A selecciona todo el texto." },
          { objective: "O6", q: "Tu prueba muestra que fallas más la P, la Q y la Z. ¿Qué agregas a tu plan?", options: ["Un ejercicio diario con la P, la Q y la Z", "Nada; evitar esas letras", "Escribir más rápido para esconder los errores", "Practicar solo la fila guía"], answer: 0, why: "Practicar tus teclas más débiles es la forma en que un plan corrige los errores que encontró tu prueba." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Mecanografía y uso del teclado",
    questions: [
      { objective: "O1", q: "En una postura neutral para escribir, tus muñecas están:", options: ["Dobladas muy hacia arriba", "Rectas, en línea con los antebrazos", "Apoyadas con fuerza en el borde del escritorio", "Torcidas hacia un lado"], answer: 1, why: "Las muñecas rectas, en línea con los antebrazos, reducen la tensión." },
      { objective: "O1", q: "Tus pies no llegan al piso en la silla de la oficina. ¿Qué puedes hacer?", options: ["Dejarlos colgando", "Sentarte en la orilla de la silla", "Cruzar las piernas con fuerza", "Usar una caja o un reposapiés para que queden planos"], answer: 3, why: "Los pies deben estar planos y apoyados; un reposapiés o una caja lo logra." },
      { objective: "O1", q: "¿Por qué mantener el teclado cerca de ti?", options: ["Para que los codos queden cerca del cuerpo y no te estires", "Para ver mejor las teclas", "Para que la pantalla se vea más grande", "Para escribir con una mano"], answer: 0, why: "Un teclado cerca mantiene los codos cerca y los hombros relajados." },
      { objective: "O2", q: "¿Qué es escribir al tacto?", options: ["Escribir en una pantalla táctil", "Escribir con un dedo", "Escribir sin mirar las teclas, con un dedo fijo para cada tecla", "Escribir solo en mayúsculas"], answer: 2, why: "Escribir al tacto usa el mismo dedo para cada tecla, así no necesitas mirar." },
      { objective: "O2", q: "¿Qué teclas forman la fila guía de la mano izquierda?", options: ["A S D F", "Q W E R", "Z X C V", "J K L ;"], answer: 0, why: "Los dedos izquierdos se apoyan en A S D F; los derechos, en J K L ;." },
      { objective: "O2", q: "Tu índice izquierdo se estira para presionar la T. ¿Qué hace después?", options: ["Se queda en la T", "Regresa a la F, su tecla guía", "Se mueve a la barra espaciadora", "Se mueve a la J"], answer: 1, why: "Después de cada movimiento, el dedo regresa a su tecla guía." },
      { objective: "O2", q: "¿Qué dedo presiona la barra espaciadora?", options: ["El meñique izquierdo", "El anular derecho", "El índice izquierdo", "Un pulgar"], answer: 3, why: "Los pulgares descansan en la barra espaciadora y la presionan." },
      { objective: "O4", q: "Para escribir una S mayúscula (una tecla de la mano izquierda), mantienes presionado:", options: ["El Shift izquierdo", "Bloq Mayús para toda la oración", "El Shift derecho", "La tecla Ctrl"], answer: 2, why: "Usa la tecla Shift de la mano contraria a la de la letra." },
      { objective: "O4", q: "El teclado numérico escribe flechas en lugar de números. ¿Qué revisas?", options: ["Que Bloq Num esté activado", "Que Bloq Mayús esté activado", "Que la pantalla tenga brillo", "Que Ctrl esté presionado"], answer: 0, why: "Bloq Num activa los números del teclado numérico." },
      { objective: "O4", q: "Estás escribiendo el número de teléfono de un cliente. ¿Por qué revisarlo dos veces?", options: ["Para escribir más rápido", "Un dígito equivocado hace que todo el número esté mal", "Los números no cuentan como errores", "Para que la pantalla lo guarde"], answer: 1, why: "En los números, un dígito equivocado es un error real que puede llegar a la persona equivocada." },
      { objective: "O3", q: "¿Qué significa PPM?", options: ["Práctica de palabras mecanografiadas", "Pago por mes", "Páginas impresas por minuto", "Palabras por minuto"], answer: 3, why: "PPM significa palabras por minuto (en inglés, WPM), la medida común de la velocidad de escritura." },
      { objective: "O3", q: "Escribiste 300 caracteres en 2 minutos. ¿Cuál es tu velocidad?", options: ["60 PPM", "150 PPM", "30 PPM", "15 PPM"], answer: 2, why: "300 entre 5 son 60 palabras; 60 entre 2 minutos son 30 PPM." },
      { objective: "O3", q: "Escribiste 60 palabras y 6 tenían errores. Tu precisión es:", options: ["90%", "94%", "54%", "10%"], answer: 0, why: "54 correctas entre 60 escritas es 0.90, que es 90%." },
      { objective: "O3", q: "¿Qué debes construir primero?", options: ["La velocidad, aunque tengas muchos errores", "La precisión, y luego la velocidad", "Ninguna; solo importa la postura", "La velocidad solo en el teclado numérico"], answer: 1, why: "Cada error toma tiempo corregirlo, así que empezar por la precisión te hace más rápido en el trabajo real." },
      { objective: "O5", q: "¿Qué atajo guarda tu archivo en Windows?", options: ["Ctrl+A", "Ctrl+V", "Ctrl+X", "Ctrl+S"], answer: 3, why: "Ctrl+S guarda (en algunos programas en español, Ctrl+G)." },
      { objective: "O5", q: "¿Por qué usar atajos de teclado mientras escribes?", options: ["Hacen el texto más grande", "Activan Bloq Num", "Tus manos se quedan en el teclado, así trabajas más rápido", "Revisan tu ortografía"], answer: 2, why: "Los atajos evitan viajes al ratón y mantienen tus manos cerca de la fila guía." },
      { objective: "O5", q: "¿Qué tecla salta al final de la línea?", options: ["Fin", "Tab", "Bloq Mayús", "Shift"], answer: 0, why: "Fin salta al final de la línea; Inicio salta al principio." },
      { objective: "O6", q: "¿Cada cuánto debes hacer una prueba cronometrada en tu plan de cuatro semanas?", options: ["Cada pocos minutos", "Una vez por semana, anotada en tu registro", "Nunca; las pruebas te hacen más lento", "Solo una vez, al final"], answer: 1, why: "Una prueba semanal en un registro muestra tu avance sin quitarle tiempo a la práctica." },
      { objective: "O6", q: "Un sitio web dice que debes pagar por su certificado de mecanografía para que te contraten. ¿Qué haces?", options: ["Pagar de inmediato", "Darle tus datos bancarios para apartar un lugar", "Mandar el enlace a tus amigos para que paguen", "No pagar; los empleadores hacen su propia prueba"], answer: 3, why: "Los empleadores evalúan la mecanografía ellos mismos; pagarle a un sitio para que te contraten es una señal de alerta." },
      { objective: "O6", q: "¿Qué sesión diaria encaja en un buen plan de práctica?", options: ["Una hora solo de la fila guía", "Escribir cualquier cosa sin mirar la pantalla", "Calentamiento, ejercicio de teclas débiles, ejercicio de números o atajos y luego texto real", "Solo pruebas cronometradas todos los días"], answer: 2, why: "Una sesión corta que calienta, corrige las teclas débiles y usa texto real desarrolla la habilidad de forma constante." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 7, 10, 12, 14, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Puntuación inicial", objective: "O3", notYet: "No hay puntuación inicial, o las PPM y la precisión están mal calculadas.", meets: "PPM y precisión iniciales de una prueba cronometrada, bien calculadas, con la fecha.", exceeds: "También muestra las cuentas (caracteres, minutos, errores) para que otra persona pueda revisarlas." },
      { name: "Metas y fechas", objective: "O6", notYet: "No hay meta, o no hay fechas para las cuatro semanas.", meets: "Una meta de precisión y otra de velocidad, con fechas para cada día o semana.", exceeds: "La meta es realista para 10 a 15 minutos al día y tiene un punto de revisión en la semana 2." },
      { name: "Ejercicios diarios", objective: "O2", notYet: "La práctica es solo \"escribir más\".", meets: "Cada sesión tiene un calentamiento en la fila guía, un ejercicio con teclas débiles nombradas y texto real.", exceeds: "Las teclas débiles cambian cada semana según el registro." },
      { name: "Números y atajos", objective: "O4", notYet: "El plan no tiene práctica de números, símbolos ni atajos.", meets: "El plan incluye líneas de números o del teclado numérico y los atajos principales.", exceeds: "La práctica de números se ajusta a un empleo meta, como precios para ventas o números de identificación para captura de datos." },
      { name: "Uso de atajos", objective: "O5", notYet: "Usa el ratón para cada copiar, pegar, deshacer y guardar.", meets: "Puede mostrar seleccionar todo, copiar, pegar, deshacer y guardar con el teclado.", exceeds: "También usa Inicio, Fin y Shift con las flechas para editar." },
      { name: "Acomodo seguro y día de la prueba", objective: "O1", notYet: "No hay revisión de postura ni plan para el día de la prueba.", meets: "El plan empieza cada sesión con la revisión de acomodo de seis puntos y tiene un plan para el día de la prueba.", exceeds: "Incluye descansos planeados y qué hacer si escribir causa dolor." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Cambio en PPM y precisión desde la puntuación inicial hasta la prueba de la semana 4",
      "Participantes que dicen haber aprobado una prueba de mecanografía o de captura de datos de un empleador en 30 días (encuesta de seguimiento)",
      "Participantes que solicitan o empiezan un empleo de oficina, atención al cliente o captura de datos en 90 días"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora de escritorio o portátil con teclado físico (un teclado numérico ayuda, pero no es necesario)",
      "Cualquier programa para escribir: Bloc de notas, TextEdit, Google Docs o Microsoft Word",
      "Un temporizador de teléfono o de cocina, papel y pluma para el registro",
      "Opcional: un sitio gratis de práctica como typing.com",
      "Unos 45 minutos para las lecciones y las comprobaciones, más 10 a 15 minutos de práctica casi todos los días durante cuatro semanas"
    ],
    facilitatorNotes: [
      "Empiecen con la revisión de acomodo de seis puntos en cada lugar; ajusten sillas y pantallas antes de que alguien escriba.",
      "Den la prueba inicial y una prueba cronometrada de un minuto el primer día para que cada participante tenga una puntuación inicial.",
      "Esperen que la velocidad baje una o dos semanas cuando los participantes dejan de escribir buscando teclas; díganles que es normal.",
      "Permitan que quienes siguen mirando hacia abajo cubran sus manos con un trapo o un papel.",
      "Hagan una prueba cronometrada en grupo una vez por semana y pidan a los participantes que actualicen su propio registro; feliciten los avances en precisión, no solo en velocidad.",
      "En computadoras compartidas o de la biblioteca, recuerden a los participantes que no guarden contraseñas y que cierren sesión al terminar."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-osha-safety.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "workforce-osha-safety-es",
  lang: "es",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Seguridad básica en el trabajo (OSHA)",
  skills: "Detectar peligros, Elegir y usar el EPP, Prevenir resbalones, tropiezos y caídas, Levantar cargas de forma segura, Leer una hoja de datos de seguridad, Reportar lesiones y usar tus derechos de seguridad",
  outcome: "recorrer un lugar de trabajo y detectar peligros, elegir el EPP correcto, levantar y mover cargas de forma segura, encontrar lo que necesitas en una hoja de datos de seguridad, reportar una lesión o un peligro de la forma correcta, y explicar tu derecho a un trabajo seguro y qué son OSHA 10 y OSHA 30.",
  about: [
    "Este curso es para cualquier persona que empieza o ya trabaja en almacenes, construcción, cocinas, limpieza, tiendas, fábricas, servicios de salud o cualquier trabajo donde la gente se puede lastimar. Enseña lo básico de seguridad que los empleadores esperan desde el primer día.",
    "Vas a practicar un recorrido de peligros, aprender a usar el equipo de protección, prevenir las lesiones más comunes (resbalones, tropiezos, caídas y torceduras al levantar cosas), leer la hoja de datos de seguridad de un producto químico y saber cómo reportar una lesión o un peligro. También vas a conocer tus derechos ante la Administración de Seguridad y Salud Ocupacional (OSHA), la agencia federal de Estados Unidos para la seguridad en el trabajo, y qué son las tarjetas OSHA de 10 y de 30 horas.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Este curso es educación general de seguridad. Sigue siempre la capacitación y las reglas de tu empleador para tu trabajo específico, y revisa las reglas actuales en osha.gov."
  ],
  finalTask: "Haz un recorrido de peligros de 10 minutos en un lugar real (tu trabajo, una bodega, un garaje o tu casa). Escribe un reporte de peligros con al menos cinco peligros, el tipo de cada uno (resbalón/tropiezo/caída, levantar cargas, químico, máquina, eléctrico, otro), el EPP o el arreglo que hace falta y a quién reportarías cada uno. Agrega las secciones de la hoja de datos de seguridad que leerías para un producto químico que encontraste, y escribe los pasos que seguirías si alguien se lastimara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Personas que buscan trabajo y trabajadores nuevos o actuales en almacenes, construcción, cocinas, limpieza, tiendas, fábricas y servicios de salud, incluidos jóvenes, personas que cambian de carrera y personas que vuelven a trabajar.",
    startingPoint: "Tienen algo de experiencia en el trabajo o en casa y notan los peligros evidentes, pero nadie les ha enseñado a hacer un recorrido de peligros, leer una hoja de datos de seguridad, reportar una lesión ni conocer sus derechos ante OSHA.",
    gap: "Los empleadores esperan hábitos básicos de seguridad desde el primer día. Quien no sabe detectar peligros, elegir el EPP, levantar cargas de forma segura o reportar bien una lesión tiene más riesgo de lastimarse y puede perder sus derechos de compensación para trabajadores. Saber lo básico también ayuda a conseguir trabajo y a hablar con seguridad.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: un teléfono o una computadora compartida; la práctica usa un cuarto de la casa o del trabajo",
      "Tiempo: lecciones de unos cinco minutos que caben entre turnos de trabajo",
      "Solo es educación general de seguridad: cada persona sigue la capacitación de su empleador y revisa las reglas actuales en osha.gov",
      "La práctica debe ser segura: nada de subir escaleras, levantar cargas pesadas a solas ni mezclar químicos"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Durante un recorrido por un lugar de trabajo, una bodega o tu casa", action: "identificar peligros, nombrar el tipo de cada uno y decidir si arreglarlo o reportarlo", standard: "anotando al menos cinco peligros con el tipo correcto" },
    { id: "O2", condition: "Con una tarea de trabajo y sus peligros", action: "elegir y revisar el EPP correcto para cada peligro", standard: "haciendo que el equipo corresponda a cada peligro y detectando el equipo dañado" },
    { id: "O3", condition: "Al trabajar en pisos, en escaleras o con cargas", action: "demostrar los pasos que previenen resbalones, tropiezos y caídas, y cómo levantar una carga de forma segura", standard: "siguiendo cada paso sin torcer la espalda" },
    { id: "O4", condition: "Con un producto químico", action: "encontrar los peligros, el EPP y los primeros auxilios en su etiqueta y su hoja de datos de seguridad", standard: "nombrando las secciones correctas de la hoja (2, 4 y 8)" },
    { id: "O5", condition: "Cuando alguien se lastima o encuentras un peligro", action: "enumerar los pasos para responder y escribir un reporte corto de la lesión o del peligro", standard: "incluyendo qué pasó, cuándo, dónde y quién lo vio, y reportándolo de inmediato" },
    { id: "O6", condition: "Ante un problema de seguridad que no se arregla o un trabajo que quieres", action: "explicar tus derechos de seguridad, cómo presentar una queja ante OSHA y si te conviene OSHA 10 u OSHA 30", standard: "nombrando los pasos y el curso correctos sin ayuda" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Detectar y prevenir peligros",
      lessons: [
        {
          objectives: ["O1"],
          title: "Detectar peligros con un recorrido",
          minutes: 5,
          goal: "Recorrer un área y hacer una lista de los peligros que ves, por tipo.",
          text: [
            "Un peligro es cualquier cosa en el trabajo que podría lastimar a alguien: un piso mojado, un cable atravesado en un pasillo, una caja pesada en un estante alto, una máquina sin su protección, un químico que gotea, mucho ruido o una salida bloqueada.",
            "Un recorrido de peligros es una revisión lenta y planeada de un área. Mira hacia abajo (pisos, cables, derrames), mira hacia arriba (estantes altos, cargas en lo alto, escaleras), mira alrededor (máquinas, vehículos, químicos, salidas, extintores) y escucha (mucho ruido, alarmas, sonidos raros de los equipos).",
            "Agrupa lo que encuentres: resbalones, tropiezos y caídas; levantar cargas y torceduras; químicos; máquinas y piezas en movimiento; electricidad; vehículos como los montacargas; calor, frío y ruido; e incendios y salidas.",
            "Cuando encuentres un peligro, arréglalo de inmediato si es pequeño y es seguro hacerlo (limpiar un derrame, quitar una caja de un pasillo), y luego avísale a tu supervisor. Si no es seguro o no te capacitaron, mantén a la gente alejada y repórtalo."
          ],
          steps: ["Elige un área y camina despacio.", "Mira hacia abajo: pisos, cables, derrames.", "Mira hacia arriba: estantes, cargas en lo alto, escaleras.", "Mira alrededor: máquinas, vehículos, químicos, salidas.", "Anota cada peligro y su tipo.", "Arregla los pequeños si es seguro, y reporta todo a tu supervisor."],
          words: [["Peligro", "algo en el trabajo que podría causar una lesión o una enfermedad."], ["Recorrido de peligros", "una caminata lenta y planeada por un área para buscar peligros."], ["Protección", "una cubierta o barrera en una máquina que mantiene las manos y el cuerpo lejos de las piezas en movimiento."]],
          slides: [
            { title: "Qué es un peligro", bullets: ["Cualquier cosa que podría lastimar a alguien", "Pisos mojados, cables sueltos, máquinas sin protección", "Químicos, ruido, salidas bloqueadas"] },
            { title: "Mira abajo, arriba y alrededor", bullets: ["Abajo: pisos, cables, derrames", "Arriba: estantes altos, cargas en lo alto", "Alrededor: máquinas, vehículos, salidas"] },
            { title: "Tipos de peligro", bullets: ["Resbalones, tropiezos y caídas; levantar cargas", "Químicos; máquinas; electricidad", "Vehículos; calor, frío, ruido; incendios"] },
            { title: "Qué hacer", bullets: ["Arregla los peligros pequeños si es seguro", "Mantén a la gente lejos de los grandes", "Avísale siempre a tu supervisor"] }
          ],
          tryIt: "Haz un recorrido de peligros de cinco minutos en un cuarto de tu casa, una bodega o tu trabajo. Anota al menos cinco peligros y el tipo de cada uno.",
          youCanNow: "recorrer un área, detectar peligros por tipo y decidir si arreglar o reportar cada uno.",
          quickCheck: [
            { objective: "O1", q: "En un recorrido de peligros, ¿qué significa \"mirar hacia abajo\"?", options: ["Revisar los pisos, los cables y los derrames", "Revisar los estantes altos y las escaleras", "Revisar las máquinas y los vehículos", "Revisar las alarmas y los ruidos extraños"], answer: 0, why: "Mirar hacia abajo es revisar el piso en busca de cables, derrames y cosas con las que te puedes tropezar." },
            { objective: "O1", q: "Encuentras que a una máquina le falta la protección y no te capacitaron para arreglarla. ¿Qué haces?", options: ["La arreglas tú mismo rápido", "Mantienes a la gente alejada y lo reportas", "Lo ignoras hasta el descanso", "Sigues usando la máquina con cuidado"], answer: 1, why: "Si no es seguro que tú arregles un peligro, mantén a la gente alejada y repórtalo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usar el EPP de la forma correcta",
          minutes: 5,
          goal: "Elegir, revisar y usar el equipo de protección correcto para una tarea.",
          text: [
            "El equipo de protección personal (EPP; en inglés, PPE) es el equipo que te pones para proteger tu cuerpo: lentes o gafas de seguridad, caretas, cascos, guantes, botas de seguridad, protección para los oídos (tapones u orejeras), chalecos de alta visibilidad, respiradores y arneses contra caídas.",
            "Elige el equipo según el peligro: lentes para astillas que saltan o salpicaduras; los guantes correctos para el trabajo (resistentes a cortes para cuchillas, guantes para químicos para los químicos, como diga la hoja de datos de seguridad); protección para los oídos con herramientas ruidosas; casco donde pueden caer cosas; chaleco de alta visibilidad cerca de vehículos.",
            "Revísalo antes de cada uso: sin grietas, agujeros ni correas gastadas. Debe quedarte bien. Un respirador necesita una prueba de ajuste y debes recibir capacitación antes de usarlo.",
            "El EPP es la última línea de defensa. Es mejor quitar primero el peligro, por ejemplo poniéndole una protección a una máquina o guardando abajo las cosas pesadas. Según las reglas de OSHA, los empleadores en general deben dar el EPP requerido y capacitarte para usarlo."
          ],
          steps: ["Mira la tarea y sus peligros.", "Elige el EPP que corresponde a cada peligro.", "Revisa que no esté dañado.", "Póntelo y revisa que te quede bien.", "Límpialo y guárdalo después de usarlo; reporta el equipo dañado."],
          words: [["EPP", "equipo de protección personal: el equipo que te pones para protegerte de los peligros."], ["Respirador", "una mascarilla que protege tus pulmones del polvo, los humos o los gases; necesita una prueba de ajuste y capacitación."], ["Prueba de ajuste", "una revisión de que el respirador sella bien en tu cara."]],
          slides: [
            { title: "EPP común", bullets: ["Ojos y cara: lentes, gafas, caretas", "Cabeza, manos, pies: cascos, guantes, botas", "Oídos, pulmones, visibilidad: tapones, respiradores, chalecos"] },
            { title: "El equipo según el peligro", bullets: ["Astillas que saltan: lentes de seguridad", "Químicos: los guantes que indica la hoja de datos de seguridad", "Herramientas ruidosas: protección para los oídos"] },
            { title: "Revísalo antes de cada uso", bullets: ["Sin grietas, agujeros ni correas gastadas", "Debe quedarte bien", "Los respiradores necesitan prueba de ajuste y capacitación"] },
            { title: "La última línea de defensa", bullets: ["Si puedes, primero quita el peligro", "Los empleadores en general deben dar el EPP requerido"] }
          ],
          sources: [
            { name: "OSHA: Equipo de protección personal (en inglés)", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Elige tres tareas: cortar cajas con un cúter, trapear con un químico de limpieza y usar una sopladora de hojas. Para cada una, escribe el EPP que usarías y por qué.",
          youCanNow: "elegir, revisar y usar el EPP correcto para una tarea, y saber que es la última línea de defensa.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la razón principal para revisar el EPP antes de cada uso?", options: ["Ver si es el modelo más nuevo", "Asegurarte de que el color combine", "Encontrar grietas, agujeros o correas gastadas", "Contar cuántos tienes"], answer: 2, why: "El equipo dañado puede no protegerte, por eso lo revisas antes de cada uso." },
            { objective: "O2", q: "Vas a cortar cajas con un cúter todo el día. ¿Qué guantes eliges?", options: ["Guantes para químicos", "Guantes delgados de tela", "Ningún guante", "Guantes resistentes a cortes"], answer: 3, why: "Los guantes resistentes a cortes corresponden al peligro de una cuchilla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Resbalones, tropiezos, caídas y cómo levantar cargas",
          minutes: 5,
          goal: "Prevenir resbalones, tropiezos y caídas y levantar una carga de forma segura.",
          text: [
            "Los resbalones, los tropiezos y las caídas están entre las lesiones de trabajo más comunes. Prevénlos: limpia los derrames de inmediato y pon un letrero de piso mojado; mantén los pasillos libres de cables, cajas y mangueras; usa los pasamanos; usa zapatos que no resbalen; y mantén bien iluminadas las áreas de trabajo.",
            "Trabajar en alturas: usa la escalera correcta, ponla sobre suelo firme y parejo, mantén tres puntos de apoyo (dos manos y un pie, o dos pies y una mano) y nunca te pares en el último escalón. La protección contra caídas, como barandales o un arnés, es obligatoria a ciertas alturas; la regla general de OSHA es 4 pies (unos 1.2 metros) en la industria general y 6 pies (unos 1.8 metros) en la construcción. Sigue la capacitación de tu lugar de trabajo.",
            "Levantar cargas: planea cómo levantarla y revisa cuánto pesa. Pide ayuda o usa un carrito, una carretilla o un montacargas para cargas pesadas o difíciles de agarrar. Párate cerca con los pies separados, dobla las rodillas, mantén la espalda recta, sostén la carga cerca del cuerpo, levanta con las piernas y gira con los pies en lugar de torcer la espalda.",
            "Reporta el dolor desde el principio. Las torceduras pequeñas empeoran si sigues trabajando como si nada."
          ],
          steps: ["Limpia los derrames y marca los pisos mojados.", "Mantén los pasillos libres.", "En una escalera: suelo firme, tres puntos de apoyo, nunca el último escalón.", "Antes de levantar: revisa el peso y pide ayuda o un carrito si hace falta.", "Levanta: rodillas dobladas, espalda recta, carga cerca, levanta con las piernas, gira con los pies."],
          words: [["Tres puntos de apoyo", "tener siempre dos manos y un pie, o dos pies y una mano, en la escalera."], ["Protección contra caídas", "barandales, redes de seguridad o arneses que detienen o evitan las caídas desde una altura."]],
          slides: [
            { title: "Evita resbalones y tropiezos", bullets: ["Limpia derrames; usa letreros de piso mojado", "Quita cables y cajas de los pasillos", "Buenos zapatos y buena iluminación"] },
            { title: "Escaleras y alturas", bullets: ["Suelo firme y parejo", "Tres puntos de apoyo; nunca el último escalón", "Protección contra caídas: 4 pies (1.2 m) industria, 6 pies (1.8 m) construcción"] },
            { title: "Levantar cargas de forma segura", bullets: ["Revisa el peso; pide ayuda o un carrito", "Rodillas dobladas, espalda recta, carga cerca", "Levanta con las piernas; gira con los pies"] },
            { title: "Reporta el dolor pronto", bullets: ["Las torceduras pequeñas empeoran si las ignoras"] }
          ],
          sources: [
            { name: "OSHA: Protección contra caídas (en inglés)", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Superficies para caminar y trabajar (en inglés)", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Practica levantar de forma segura una caja de libros o de compras: revisa el peso, párate cerca, dobla las rodillas, mantén la espalda recta, levanta con las piernas y gira con los pies. Luego escribe tres cosas que arreglarías para evitar resbalones y tropiezos donde trabajas o vives.",
          youCanNow: "prevenir resbalones, tropiezos y caídas, usar una escalera de forma segura y levantar una carga de la forma correcta.",
          quickCheck: [
            { objective: "O3", q: "¿Dónde nunca debes pararte cuando usas una escalera?", options: ["En el escalón de arriba", "En el escalón de abajo", "En un escalón del medio", "En suelo firme y parejo"], answer: 0, why: "Pararte en el escalón de arriba hace fácil perder el equilibrio y caerte." },
            { objective: "O3", q: "Necesitas girar mientras cargas una caja. ¿Cómo lo haces?", options: ["Tuerces la cintura", "Giras con los pies", "Sostienes la caja lejos del cuerpo", "Bloqueas las rodillas y das la vuelta"], answer: 1, why: "Girar con los pies mantiene la espalda recta y evita torceduras." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Detectar y prevenir peligros",
        questions: [
          { objective: "O1", q: "Ves un cable eléctrico atravesado en un pasillo. ¿Qué tipo de peligro es?", options: ["Químico", "Ruido", "Resbalón, tropiezo o caída", "Calor"], answer: 2, why: "Los cables atravesados en los pasillos hacen que la gente se tropiece." },
          { objective: "O1", q: "¿Qué debes hacer con un derrame pequeño que puedes limpiar de forma segura?", options: ["Rodearlo", "Limpiarlo, marcar el piso si está mojado y avisarle a tu supervisor", "Taparlo con una caja", "Esperar al siguiente turno"], answer: 1, why: "Arreglar de inmediato los peligros pequeños y reportarlos evita lesiones." },
          { objective: "O2", q: "¿Qué EPP corresponde a un trabajo con una sopladora de hojas ruidosa?", options: ["Protección para los oídos", "Solo un casco", "Un arnés contra caídas", "Nada"], answer: 0, why: "La protección para los oídos protege contra el ruido fuerte." },
          { objective: "O2", q: "¿Por qué se dice que el EPP es la última línea de defensa?", options: ["Es lo más caro", "Es opcional", "Siempre detiene todas las lesiones", "Es mejor quitar primero el peligro"], answer: 3, why: "Quitar o proteger un peligro protege a todos; el EPP solo protege a quien lo lleva." },
          { objective: "O3", q: "¿Cuál es un hábito seguro para levantar cargas?", options: ["Torcer la espalda para girar", "Sostener la carga lejos del cuerpo", "Doblar las rodillas, mantener la carga cerca y girar con los pies", "Levantar solo cargas pesadas para ahorrar tiempo"], answer: 2, why: "Así el esfuerzo lo hacen tus piernas, no tu espalda." }
        ]
      }
    },
    {
      name: "Capítulo 2: Químicos, lesiones y tus derechos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Los químicos y las hojas de datos de seguridad",
          minutes: 5,
          goal: "Encontrar los peligros, el EPP y los primeros auxilios de un químico en su hoja de datos de seguridad.",
          text: [
            "Muchos lugares de trabajo usan químicos peligrosos: limpiadores, cloro, desengrasantes, pintura, combustible, pesticidas. La Norma de Comunicación de Peligros de OSHA dice que los trabajadores tienen derecho a saber sobre los químicos con los que trabajan.",
            "Los envases deben tener etiquetas con el nombre del producto, pictogramas (símbolos con borde rojo), una palabra de advertencia (\"Peligro\" para los peligros más graves, \"Atención\" para los menos graves; en inglés, \"Danger\" y \"Warning\") y frases de peligro y de precaución.",
            "Todo químico peligroso tiene una hoja de datos de seguridad (en inglés, safety data sheet o SDS) con 16 secciones, siempre en el mismo orden. Las más útiles: Sección 2, peligros; Sección 4, primeros auxilios; Sección 7, manejo y almacenamiento seguros; Sección 8, controles de exposición y EPP. Tu empleador debe tener las hojas de datos de seguridad de los químicos que usas y capacitarte sobre ellas. Pregunta dónde están.",
            "Hábitos seguros: nunca mezcles químicos (el cloro y el amoníaco forman un gas tóxico), guarda los químicos en envases con etiqueta, usa el EPP de la Sección 8 y trabaja con buena ventilación."
          ],
          steps: ["Lee la etiqueta del envase: nombre, pictogramas, palabra de advertencia.", "Busca la hoja de datos de seguridad del producto.", "Sección 2: ¿cuáles son los peligros?", "Sección 8: ¿qué EPP necesito?", "Sección 4: ¿cuáles son los primeros auxilios?", "Nunca mezcles químicos y mantenlos etiquetados."],
          words: [["Hoja de datos de seguridad (SDS)", "un documento de 16 secciones sobre un químico: sus peligros, su manejo seguro, el EPP y los primeros auxilios."], ["Pictograma", "un símbolo dentro de un rombo rojo en la etiqueta de un químico que muestra el tipo de peligro."], ["Palabra de advertencia", "\"Peligro\" (más grave) o \"Atención\" (menos grave) en la etiqueta de un químico."]],
          slides: [
            { title: "Tu derecho a saber", bullets: ["Etiquetas en cada envase", "Una hoja de datos de seguridad para cada químico peligroso", "Capacitación sobre los químicos que usas"] },
            { title: "Lee la etiqueta", bullets: ["Nombre del producto", "Pictogramas en rombos rojos", "Palabra de advertencia: Peligro o Atención"] },
            { title: "Secciones de la hoja que debes conocer", bullets: ["2: peligros", "4: primeros auxilios", "7: manejo y almacenamiento", "8: controles de exposición y EPP"] },
            { title: "Hábitos seguros", bullets: ["Nunca mezcles químicos", "Mantén todo etiquetado", "Usa el EPP de la Sección 8"] }
          ],
          sources: [
            { name: "OSHA: Comunicación de peligros (en inglés)", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Busca un producto de limpieza en tu casa o tu trabajo. Lee su etiqueta (pictogramas y palabra de advertencia). Luego busca el nombre del producto más \"safety data sheet\" u \"hoja de datos de seguridad\" en el sitio web del fabricante, y anota lo que dicen las Secciones 2, 4 y 8.",
          youCanNow: "leer la etiqueta de un químico y encontrar los peligros, el EPP y los primeros auxilios en su hoja de datos de seguridad.",
          quickCheck: [
            { objective: "O4", q: "¿Qué es un pictograma en la etiqueta de un químico?", options: ["El precio del producto", "El teléfono del fabricante", "Un símbolo con borde rojo que muestra un peligro", "La fecha en que se fabricó"], answer: 2, why: "Los pictogramas son símbolos con borde rojo que muestran el tipo de peligro." },
            { objective: "O4", q: "Un producto le salpica en el ojo a un compañero. ¿Qué sección de la hoja de datos de seguridad miras?", options: ["Sección 2", "Sección 7", "Sección 8", "Sección 4"], answer: 3, why: "La Sección 4 de la hoja de datos de seguridad da los pasos de primeros auxilios." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reportar lesiones y peligros",
          minutes: 5,
          goal: "Seguir los pasos correctos cuando alguien se lastima y reportarlo bien.",
          text: [
            "Si alguien está gravemente herido, primero llama al 911 (el número de emergencias en Estados Unidos) o al número de emergencias de tu lugar de trabajo. No lo muevas a menos que esté en peligro. Busca a la persona capacitada en primeros auxilios si tu lugar de trabajo tiene una.",
            "Reporta a tu supervisor de inmediato toda lesión o enfermedad del trabajo, incluso las pequeñas como un corte o una torcedura. Reportar pronto te da atención médica, protege tu derecho a la compensación para trabajadores de tu estado y ayuda a arreglar el peligro para que no lastime a otra persona. Anota qué pasó, cuándo, dónde y quién lo vio.",
            "Los empleadores también tienen obligaciones. Deben reportar a OSHA dentro de 8 horas si un trabajador muere por un incidente de trabajo, y dentro de 24 horas si un trabajador queda internado en un hospital, sufre una amputación o pierde un ojo. Muchos empleadores también deben llevar registros de lesiones, y los trabajadores tienen derecho a verlos.",
            "Reporta los peligros de la misma forma: avísale a tu supervisor, anótalo y mantén a la gente alejada hasta que se arregle. Las reglas de OSHA prohíben que un empleador te castigue por reportar una lesión o un peligro."
          ],
          steps: ["Lesión grave: primero llama al 911 o al número de emergencias del lugar.", "Busca primeros auxilios de una persona capacitada.", "Avísale a tu supervisor de inmediato, incluso por lesiones pequeñas.", "Anota qué pasó, cuándo, dónde y quién lo vio.", "Pregunta por la compensación para trabajadores y da seguimiento al arreglo."],
          words: [["Compensación para trabajadores", "un seguro estatal que paga los gastos médicos y parte del sueldo perdido por lesiones de trabajo (en inglés, workers' compensation)."], ["Registro de lesiones", "el registro del empleador de las lesiones y enfermedades de trabajo; los trabajadores tienen derecho a verlo."]],
          slides: [
            { title: "Lesión grave", bullets: ["Llama al 911 o al número de emergencias del lugar", "No muevas a la persona a menos que esté en peligro", "Busca a la persona capacitada en primeros auxilios"] },
            { title: "Reporta toda lesión", bullets: ["Avísale a tu supervisor de inmediato", "Anota qué, cuándo, dónde, quién lo vio", "Protege tu reclamo de compensación para trabajadores"] },
            { title: "Obligaciones del empleador", bullets: ["Muerte: reportar a OSHA dentro de 8 horas", "Internación, amputación, pérdida de un ojo: 24 horas", "Llevar registros de lesiones que los trabajadores puedan ver"] },
            { title: "Reportar está protegido", bullets: ["Castigarte por reportar es ilegal"] }
          ],
          sources: [
            { name: "OSHA: Reportar una muerte o una lesión grave (en inglés)", url: "https://www.osha.gov/report" },
            { name: "OSHA: Regla de reporte 29 CFR 1904.39 (en inglés)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Escribe los pasos que seguirías si un compañero se cortara gravemente la mano con un cúter. Luego escribe un reporte corto de la lesión: qué pasó, cuándo, dónde, quién lo vio y qué debería cambiar.",
          youCanNow: "responder ante una lesión, reportarla bien y a tiempo, y saber lo que tu empleador debe reportar.",
          quickCheck: [
            { objective: "O5", q: "¿Qué datos van en un reporte de lesión?", options: ["Qué pasó, cuándo, dónde y quién lo vio", "Solo el nombre del trabajador lastimado", "Quién crees que tiene la culpa", "Tu opinión sobre el supervisor"], answer: 0, why: "Un reporte claro dice qué pasó, cuándo, dónde y quién lo vio." },
            { objective: "O5", q: "Te lastimas un poco la espalda al levantar algo, pero solo duele un poco. ¿Qué haces?", options: ["Sigues trabajando y no dices nada", "Le avisas de inmediato a tu supervisor", "Esperas un mes para ver si empeora", "Solo le cuentas a un compañero"], answer: 1, why: "Reportar pronto te da atención y protege tus derechos de compensación para trabajadores." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tus derechos de seguridad, OSHA 10 y OSHA 30",
          minutes: 5,
          goal: "Explicar tu derecho a un trabajo seguro, cómo presentar una queja ante OSHA y qué son OSHA 10 y OSHA 30.",
          text: [
            "Según la Ley de Seguridad y Salud Ocupacional, tu empleador debe darte un lugar de trabajo libre de peligros graves conocidos. Tienes derecho a recibir capacitación en un idioma que entiendas, a recibir el equipo de seguridad requerido, a ver los registros de lesiones y los resultados de pruebas sobre peligros, a reportar peligros y a pedirle a OSHA que inspeccione tu lugar de trabajo.",
            "Si un peligro no se arregla, puedes presentar una queja ante OSHA en línea, por teléfono al 1-800-321-OSHA (6742), por correo postal o en una oficina de OSHA, y pedir que no le den tu nombre a tu empleador. Si tu empleador te castiga por hablar de un problema de seguridad, presenta lo antes posible una queja de denunciante ante OSHA; según la ley federal el plazo es de 30 días.",
            "OSHA 10 y OSHA 30 son cursos del Programa de Capacitación de Alcance de OSHA (Outreach Training Program), que es voluntario. OSHA 10 es un curso de 10 horas para trabajadores de nivel inicial sobre cómo reconocer peligros y sobre los derechos de los trabajadores. OSHA 30 es un curso de 30 horas para supervisores y trabajadores con responsabilidades de seguridad. Hay versiones para construcción y para industria general. Recibes una tarjeta al terminar el curso.",
            "Las tarjetas no son una licencia ni una certificación, pero muchos empleadores, sindicatos y algunos estados las piden. Solo los capacitadores autorizados por OSHA pueden dar tarjetas reales, así que toma el curso con un capacitador o proveedor autorizado y desconfía de las ofertas que parecen demasiado baratas o demasiado rápidas. Hay cursos autorizados en español."
          ],
          steps: ["Primero reporta el peligro a tu supervisor, si es seguro.", "Si no se arregla, presenta una queja ante OSHA en línea o al 1-800-321-6742.", "Si quieres, pide que tu nombre se mantenga en privado.", "Si te castigan por reportar, presenta una queja de denunciante dentro de 30 días.", "Elige OSHA 10 (nivel inicial) u OSHA 30 (supervisor), de construcción o de industria general, con un capacitador autorizado."],
          words: [["OSHA", "la Administración de Seguridad y Salud Ocupacional, la agencia federal de Estados Unidos para la seguridad en el trabajo."], ["Programa de Capacitación de Alcance", "el programa voluntario de OSHA de cursos de seguridad de 10 y de 30 horas que dan capacitadores autorizados (en inglés, Outreach Training Program)."], ["Denunciante", "un trabajador que reporta un problema; la ley lo protege para que no lo castiguen por eso (en inglés, whistleblower)."]],
          slides: [
            { title: "Tu derecho a un trabajo seguro", bullets: ["Un lugar libre de peligros graves conocidos", "Capacitación en un idioma que entiendas", "Ver los registros de lesiones; pedir una inspección"] },
            { title: "Presentar una queja", bullets: ["osha.gov o 1-800-321-6742", "Puedes pedir que tu nombre se mantenga en privado", "¿Te castigaron? Queja de denunciante dentro de 30 días"] },
            { title: "OSHA 10 y OSHA 30", bullets: ["10 horas: trabajadores de nivel inicial", "30 horas: supervisores y puestos de seguridad", "Versiones de construcción o de industria general"] },
            { title: "Sobre las tarjetas", bullets: ["Voluntarias; no son licencia ni certificación", "Muchos empleadores y sindicatos las piden", "Solo los capacitadores autorizados dan tarjetas reales"] }
          ],
          sources: [
            { name: "OSHA: Derechos de los trabajadores (en inglés)", url: "https://www.osha.gov/workers" },
            { name: "OSHA: Presentar una queja de seguridad y salud (en inglés)", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Programa de Capacitación de Alcance (en inglés)", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: Lo que debes saber para obtener una tarjeta de OSHA (en inglés)", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Tarea final: haz un recorrido de peligros de 10 minutos y escribe tu reporte de peligros: cinco peligros, su tipo, el EPP o el arreglo, a quién reportarías cada uno, las secciones de la hoja de datos de seguridad de un químico y tus pasos ante una lesión. Al final, escribe si OSHA 10 u OSHA 30 va con tu trabajo y por qué.",
          youCanNow: "explicar tu derecho a un trabajo seguro, presentar una queja ante OSHA y elegir entre OSHA 10 y OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una tarjeta OSHA 10 u OSHA 30?", options: ["Una licencia estatal para trabajar", "Una certificación profesional", "Una tarjeta que muestra que terminaste un curso con un capacitador autorizado", "Una tarjeta que reemplaza la capacitación del empleador"], answer: 2, why: "Las tarjetas muestran que terminaste un curso voluntario; no son una licencia." },
            { objective: "O6", q: "Le avisaste a tu supervisor de una salida de emergencia bloqueada y nada cambió. ¿Qué puedes hacer ahora?", options: ["Nada; solo los gerentes pueden actuar", "Renunciar de inmediato", "Publicarlo primero en internet", "Presentar una queja ante OSHA y pedir que no compartan tu nombre"], answer: 3, why: "Si un peligro no se arregla, puedes presentar una queja ante OSHA y pedir que no compartan tu nombre." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Químicos, lesiones y tus derechos",
        questions: [
          { objective: "O4", q: "¿Qué sección de una hoja de datos de seguridad te dice qué EPP usar?", options: ["Sección 1", "Sección 4", "Sección 16", "Sección 8"], answer: 3, why: "La Sección 8 trata de los controles de exposición y la protección personal." },
          { objective: "O4", q: "En la etiqueta de un químico, ¿qué palabra de advertencia indica el peligro más grave?", options: ["Peligro (Danger)", "Atención (Warning)", "Precaución (Caution)", "Aviso (Notice)"], answer: 0, why: "\"Peligro\" se usa para los peligros más graves; \"Atención\" para los menos graves." },
          { objective: "O5", q: "Te haces un corte pequeño en el trabajo. ¿Qué debes hacer?", options: ["Esconderlo", "Esperar a que empeore", "Avisarle de inmediato a tu supervisor y anotar lo que pasó", "Renunciar"], answer: 2, why: "Reporta pronto toda lesión, incluso las pequeñas." },
          { objective: "O5", q: "¿En cuánto tiempo debe un empleador reportar a OSHA una muerte relacionada con el trabajo?", options: ["30 días", "8 horas", "Una semana", "No tiene que reportarla"], answer: 1, why: "La regla de OSHA es de 8 horas para una muerte." },
          { objective: "O6", q: "¿Qué es OSHA 10?", options: ["Una licencia obligatoria de electricista", "Una multa", "Un curso voluntario de seguridad de 10 horas para trabajadores de nivel inicial", "Una etiqueta de químicos"], answer: 2, why: "Es un curso de capacitación de alcance con una tarjeta al terminar, no una licencia." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Seguridad básica en el trabajo (OSHA)",
    questions: [
      { objective: "O1", q: "¿Qué es un peligro?", options: ["Cualquier cosa en el trabajo que podría causar una lesión o una enfermedad", "Un cartel de seguridad", "Un tipo de EPP", "Una sala de descanso"], answer: 0, why: "Un peligro es una fuente de posible daño." },
      { objective: "O1", q: "Durante un recorrido de peligros, \"mirar hacia arriba\" significa revisar:", options: ["El piso por si hay derrames", "Tu teléfono", "Los estantes altos, las cargas en lo alto y las escaleras", "La hora"], answer: 2, why: "Las cosas en lo alto pueden caer o causar caídas." },
      { objective: "O1", q: "A una máquina le quitaron la protección. Debes:", options: ["Usarla con cuidado", "No usarla, mantener a la gente alejada y reportarlo", "Meter la mano para revisarla", "Ignorarlo"], answer: 1, why: "Las máquinas sin protección causan lesiones graves; repórtalo y mantente lejos." },
      { objective: "O2", q: "¿Qué guantes debes usar con un químico de limpieza?", options: ["Cualquier guante", "Ningún guante", "Guantes resistentes a cortes", "El tipo que indica la hoja de datos de seguridad"], answer: 3, why: "La hoja de datos de seguridad dice cuál es la protección correcta para ese químico." },
      { objective: "O2", q: "Antes de usar un respirador necesitas:", options: ["Nada", "Una prueba de ajuste y capacitación", "Solo echarle un vistazo", "La mascarilla de un compañero"], answer: 1, why: "Un respirador debe sellar bien y usarse correctamente." },
      { objective: "O2", q: "¿Quién debe, en general, dar el EPP requerido?", options: ["El empleador", "El trabajador", "Un compañero", "Nadie"], answer: 0, why: "Según las reglas de OSHA, los empleadores en general deben dar el EPP requerido." },
      { objective: "O3", q: "¿Cuál es una buena forma de prevenir resbalones?", options: ["Dejar los derrames para después", "Usar zapatos de suela lisa", "Apagar las luces", "Limpiar los derrames de inmediato y usar un letrero de piso mojado"], answer: 3, why: "Limpiar rápido y avisar evita caídas." },
      { objective: "O3", q: "En una escalera, \"tres puntos de apoyo\" significa:", options: ["Tres personas sostienen la escalera", "Tres escaleras juntas", "Dos manos y un pie, o dos pies y una mano, en la escalera", "Pararse en los tres últimos escalones"], answer: 2, why: "Te mantiene estable mientras subes." },
      { objective: "O3", q: "En la construcción, la altura general de OSHA para la protección contra caídas es:", options: ["6 pies (unos 1.8 m)", "1 pie (unos 30 cm)", "20 pies (unos 6 m)", "No hay regla"], answer: 0, why: "En construcción la regla general es 6 pies; en la industria general es 4 pies." },
      { objective: "O3", q: "Una caja es pesada y difícil de agarrar. ¿Qué haces?", options: ["La levantas rápido", "Giras mientras la levantas", "Pides ayuda o usas un carrito o una carretilla", "La cargas lejos del cuerpo"], answer: 2, why: "La ayuda o el equipo evitan lesiones de espalda." },
      { objective: "O4", q: "¿Qué significa SDS?", options: ["Standard delivery slip (comprobante de entrega)", "Staff duty schedule (horario del personal)", "Shift duty sign (letrero de turno)", "Safety data sheet (hoja de datos de seguridad)"], answer: 3, why: "Una hoja de datos de seguridad describe los peligros de un químico y su uso seguro." },
      { objective: "O4", q: "¿Qué sección de la hoja de datos de seguridad da los primeros auxilios?", options: ["Sección 2", "Sección 4", "Sección 16", "Sección 8"], answer: 1, why: "La Sección 4 indica las medidas de primeros auxilios." },
      { objective: "O4", q: "¿Por qué nunca debes mezclar cloro y amoníaco?", options: ["Cuestan más", "Pierden el olor", "Manchan el piso", "Forman un gas tóxico"], answer: 3, why: "Al mezclarlos se libera un gas peligroso." },
      { objective: "O5", q: "Un compañero está gravemente herido. ¿Cuál es el primer paso?", options: ["Llamar al 911 o al número de emergencias del lugar", "Terminar tu tarea", "Publicar una foto", "Moverlo de inmediato"], answer: 0, why: "Primero la ayuda de emergencia; no lo muevas a menos que esté en peligro." },
      { objective: "O5", q: "¿Por qué reportar incluso una lesión pequeña?", options: ["Para tener un día libre", "No hace falta", "Para recibir atención, proteger tus derechos de compensación para trabajadores y arreglar el peligro", "Para culpar a alguien"], answer: 2, why: "Reportar pronto te protege a ti y a los demás." },
      { objective: "O5", q: "Un trabajador pierde un ojo en un accidente de trabajo. El empleador debe reportarlo a OSHA dentro de:", options: ["8 horas", "24 horas", "Un año", "30 días"], answer: 1, why: "La internación en un hospital, la amputación y la pérdida de un ojo se deben reportar dentro de 24 horas." },
      { objective: "O6", q: "¿Qué número de teléfono es de OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) es el número de OSHA; 1-800-669-4000 es el de la EEOC." },
      { objective: "O6", q: "Te quitaron del horario por reportar un peligro. Según la ley federal, presenta una queja de denunciante dentro de:", options: ["Un año", "No hay plazo", "Cinco años", "30 días"], answer: 3, why: "El plazo federal para las quejas por represalias de seguridad es de 30 días." },
      { objective: "O6", q: "¿Para quién es principalmente OSHA 30?", options: ["Solo para choferes de camión", "Para supervisores y trabajadores con responsabilidades de seguridad", "Para niños", "Para quienes quieren una licencia de electricista"], answer: 1, why: "OSHA 30 da una capacitación más profunda para supervisores y puestos de seguridad." },
      { objective: "O6", q: "¿Qué es cierto sobre las tarjetas OSHA 10 y 30?", options: ["Son una licencia", "Cualquiera puede imprimir una", "Son tarjetas de capacitación voluntaria que solo pueden dar los capacitadores autorizados", "Nunca vencen en ningún lugar"], answer: 2, why: "No son certificaciones, y solo los capacitadores autorizados dan tarjetas reales." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      3,
      7,
      9,
      11,
      13,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Peligros encontrados",
        objective: "O1",
        notYet: "Menos de cinco peligros, o faltan los tipos o están mal.",
        meets: "Al menos cinco peligros, cada uno con el tipo correcto.",
        exceeds: "También dice qué peligros arreglar ya y cuáles reportar."
      },
      {
        name: "EPP y arreglos",
        objective: "O2",
        notYet: "No hay EPP ni arreglo, o el equipo no corresponde al peligro.",
        meets: "Cada peligro tiene un EPP o un arreglo que le corresponde.",
        exceeds: "Nombra una forma de quitar el peligro antes de depender del EPP."
      },
      {
        name: "Hoja de datos de seguridad",
        objective: "O4",
        notYet: "No hay químico, o las secciones de la hoja están mal.",
        meets: "Nombra las Secciones 2, 4 y 8 de un químico y lo que cubre cada una.",
        exceeds: "También anota la palabra de advertencia y los pictogramas de la etiqueta."
      },
      {
        name: "Reportes",
        objective: "O5",
        notYet: "No nombra a quién reportar, o faltan los pasos ante una lesión.",
        meets: "Nombra a quién reportar cada peligro y enumera en orden los pasos ante una lesión.",
        exceeds: "Los pasos ante una lesión incluyen anotar qué pasó, cuándo, dónde y quién lo vio."
      },
      {
        name: "Derechos y capacitación",
        objective: "O6",
        notYet: "No dice si le conviene OSHA 10 u OSHA 30.",
        meets: "Elige OSHA 10 u OSHA 30 y da una razón que va con su trabajo.",
        exceeds: "También explica cómo presentar una queja ante OSHA si un peligro no se arregla."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que se inscriben en un curso OSHA 10 u OSHA 30 con un capacitador autorizado dentro de 90 días",
      "Personas que consiguen o mantienen un trabajo práctico dentro de 90 días (encuesta de seguimiento)",
      "Los socios de empleo reportan menos lesiones o más peligros reportados entre los participantes del programa"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para leer las lecciones",
      "Un cuarto para hacer el recorrido de peligros: la casa, una bodega o un lugar de trabajo (con permiso)",
      "Un producto de limpieza de la casa con etiqueta, e internet para buscar su hoja de datos de seguridad",
      "Papel y lápiz para el reporte de peligros",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan primero un recorrido de peligros en grupo por el salón de capacitación, y luego deja que cada persona haga el suyo.",
      "Practiquen levantar cargas solo con una caja liviana; nadie sube escaleras ni levanta cargas pesadas durante la capacitación.",
      "Nunca dejes que abran ni mezclen químicos durante la práctica; solo leen la etiqueta y la hoja de datos de seguridad.",
      "Recuerda a los participantes que este curso no reemplaza una tarjeta OSHA 10 u OSHA 30 ni la capacitación de su empleador.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

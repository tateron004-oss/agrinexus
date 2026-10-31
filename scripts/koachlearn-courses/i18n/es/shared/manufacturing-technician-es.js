"use strict";

// Koach Learn course (Spanish translation of shared/manufacturing-technician.js). See scripts/koachlearn-courses/README.md, "Translations".

const MSSC_CPT = { name: "MSSC: Técnico de Producción Certificado (CPT 4.0)", url: "https://www.msscusa.org/certification/production-certification-cpt/" };
const MSSC_COURSES = { name: "MSSC: módulos y cursos del CPT 4.0", url: "https://www.msscusa.org/certified-production-technician-cpt-courses/" };
const OSHA_LOTO = { name: "OSHA: control de energía peligrosa (bloqueo y etiquetado)", url: "https://www.osha.gov/control-hazardous-energy" };
const OSHA_147 = { name: "OSHA 29 CFR 1910.147: control de energía peligrosa (bloqueo y etiquetado)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" };
const OSHA_GUARD = { name: "OSHA: protección de máquinas", url: "https://www.osha.gov/machine-guarding" };
const OSHA_212 = { name: "OSHA 29 CFR 1910.212: requisitos generales para todas las máquinas (guardas)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.212" };
const DOL_YOUTH = { name: "Departamento de Trabajo de EE. UU.: trabajos prohibidos para menores de 18 años", url: "https://www.dol.gov/agencies/whd/child-labor/what-jobs-are-off-limits" };
const APPRENTICE = { name: "Apprenticeship.gov: buscador de aprendizajes (Departamento de Trabajo de EE. UU.)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" };

module.exports = {
  id: "manufacturing-technician-es",
  lang: "es",
  translationOf: "manufacturing-technician",
  category: "Workforce Development",
  name: "Fundamentos del técnico de manufactura",
  skills: "Detectar los peligros de una máquina y usar el bloqueo y etiquetado, Medir piezas y compararlas con una tolerancia, Hacer controles de calidad y encontrar causas raíz, Usar 5S, manufactura esbelta y el cuidado diario de las máquinas, Planear la preparación para el MSSC CPT 4.0",
  outcome: "detectar los peligros de una máquina y elegir la protección correcta, medir una pieza y decidir si está dentro de la tolerancia, registrar defectos y encontrar una causa raíz, aplicar 5S y revisiones diarias de máquina en un área de trabajo, y hacer un plan con fechas para prepararte para las evaluaciones del MSSC Certified Production Technician (CPT 4.0) y un primer trabajo de producción.",
  about: [
    "Las fábricas hacen autos, alimentos, medicinas, muebles, piezas de metal y aparatos electrónicos, y contratan trabajadores de producción, operadores de máquina y técnicos. Este curso es para personas que buscan trabajo, jóvenes adultos, veteranos, personas que regresan a casa después de estar en prisión y cualquiera que quiera empezar una carrera en la planta de una fábrica.",
    "Vas a aprender las cuatro áreas en las que se basan el trabajo de manufactura de nivel inicial y el Certified Production Technician (CPT 4.0, técnico de producción certificado) del Manufacturing Skill Standards Council (MSSC, el consejo de normas de habilidades de manufactura de EE. UU.): seguridad, calidad y medición, producción y conocimiento del mantenimiento. Vas a practicar en papel y con una regla en casa.",
    "Importante: este curso te prepara; no te da el CPT 4.0 ni ningún otro certificado. El MSSC aplica las evaluaciones y entrega las credenciales. Manejar máquinas, hacer bloqueo y etiquetado y usar herramientas de precisión se aprende en persona con un instructor calificado o un capacitador de la empresa, con el equipo de protección correcto. No practiques solo en máquinas reales.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\". Hay una pregunta rápida después de cada lección, una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz un paquete de preparación de técnico de manufactura: una lista de peligros y protecciones para una máquina, un registro de mediciones con la decisión dentro o fuera de tolerancia para cinco piezas de práctica, unos 5 porqués para un defecto de práctica, un plan de 5S y de revisión diaria para un área de trabajo, y un plan con fechas para prepararte para las cuatro evaluaciones del CPT 4.0 con una línea honesta para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan trabajos de producción, operador de máquina, ensamblador o técnico: personas que buscan empleo, veteranos, personas que regresan a casa después de estar en prisión, inmigrantes y jóvenes que terminan la escuela. Algunos han trabajado en almacenes o en líneas de ensamble; la mayoría no ha estudiado manufactura.",
    startingPoint: "Pueden seguir pasos escritos y hacer cuentas básicas con números enteros. La mayoría no ha usado un calibrador, no ha leído una tolerancia, no ha usado el bloqueo y etiquetado ni ha oído hablar de 5S, de manufactura esbelta o del análisis de causa raíz. Muchos no saben que existe una credencial de la industria para el trabajo de producción de nivel inicial.",
    gap: "Los empleadores quieren nuevos trabajadores que trabajen con seguridad cerca de las máquinas, midan con exactitud, detecten piezas malas y mantengan su área en orden. Las lesiones con máquinas pueden ser graves, como amputaciones, por eso los hábitos de seguridad van primero. Los participantes necesitan ese conocimiento, y un camino claro hacia una credencial reconocida como el MSSC CPT 4.0, para competir por trabajos de producción y aprendizajes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; el MSSC recomienda más o menos un nivel de matemáticas de 9.º grado y de lectura de 10.º grado para el CPT 4.0, así que las cuentas se muestran paso a paso",
      "Sin manejo de máquinas en este curso: la práctica real solo se hace con un instructor calificado o un capacitador de la empresa",
      "Las leyes federales sobre trabajo infantil prohíben a los menores de 18 años usar muchas máquinas de fábrica",
      "Dispositivos: un teléfono o una computadora de la biblioteca para las páginas oficiales; una regla o cinta métrica y papel en casa",
      "Los requisitos, las tarifas y las fechas de examen del CPT 4.0 cambian: los participantes revisan msscusa.org o un centro de examen"
    ],
    prerequisites: "Cuentas básicas con números enteros. \"Matemáticas diarias\" y \"Fundamentos de seguridad en el trabajo (OSHA)\" son cursos complementarios útiles."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con la descripción o la imagen de una máquina y una tarea", action: "identificar los peligros y elegir la protección correcta, incluido el bloqueo y etiquetado", standard: "nombrando al menos 3 peligros y la protección correcta para cada uno" },
    { id: "O2", condition: "Con una lectura de regla o calibrador y la tolerancia de una pieza", action: "medir una pieza y decidir si está dentro de la tolerancia", standard: "acertando al menos 4 de 5 decisiones de práctica" },
    { id: "O3", condition: "Con un problema de calidad en una línea de producción", action: "registrar los defectos y encontrar una causa raíz probable con los 5 porqués", standard: "separando las piezas malas y llegando a una causa que se pueda corregir" },
    { id: "O4", condition: "Con un área de trabajo y una máquina", action: "aplicar 5S y una revisión diaria del operador al área", standard: "con una acción para cada una de las 5 S y al menos 5 puntos de revisión diaria" },
    { id: "O5", condition: "Usando la página del MSSC CPT 4.0 y las opciones de formación locales", action: "escribir un plan con fechas para prepararte para el CPT 4.0 y un primer trabajo de producción", standard: "que nombre los cuatro módulos obligatorios, una fecha de examen por confirmar y una línea honesta para el currículum" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, la seguridad y la medición",
      lessons: [
        {
          title: "El trabajo del técnico de manufactura y el CPT 4.0",
          objectives: ["O5"],
          minutes: 5,
          goal: "Explicar qué hace un técnico de producción y qué credencial muestra a los empleadores que estás listo.",
          text: [
            "Un técnico de producción ayuda a fabricar productos de forma segura y correcta. En un turno normal puedes preparar o manejar una máquina, ensamblar piezas, revisar piezas con herramientas de medición, anotar números en una hoja o una pantalla, mantener limpia tu área e informar de problemas con las máquinas o las piezas.",
            "Muchos empleadores buscan el Certified Production Technician (CPT 4.0) del Manufacturing Skill Standards Council (MSSC). Tiene cinco evaluaciones: Seguridad; Prácticas de calidad y medición; Procesos de manufactura y producción; Conocimiento del mantenimiento; y Producción verde. Recibes un certificado por cada una que apruebas. Las cuatro primeras juntas te dan el CPT 4.0 completo. Producción verde es opcional.",
            "El MSSC dice que los exámenes son de opción múltiple y se pueden hacer en línea o en papel. La formación se ofrece en colegios comunitarios, programas de empleo y algunas preparatorias. El MSSC también tiene una opción práctica llamada CPT+ con Skill Boss. Revisa msscusa.org para conocer las tarifas, los centros de examen y los requisitos actuales; este curso no otorga la credencial.",
            "Otros caminos para entrar en este trabajo: los aprendizajes registrados, donde ganas dinero mientras aprendes (búscalos en apprenticeship.gov), y los trabajos donde la empresa te capacita. Los veteranos que hicieron trabajo de mantenimiento o de suministros en el ejército suelen tener habilidades que les sirven."
          ],
          words: [["Técnico de producción", "un trabajador que maneja, prepara, revisa y cuida los equipos que fabrican productos."], ["MSSC", "el Manufacturing Skill Standards Council, el grupo que aplica las evaluaciones del CPT y entrega las credenciales."], ["Evaluación", "un examen que muestra si sabes el material."], ["Módulo", "un área temática del CPT, con su propia evaluación y su propio certificado."], ["Aprendizaje registrado", "un trabajo pagado con formación y un mentor, reconocido por el Departamento de Trabajo de EE. UU. o por un estado."]],
          slides: [
            { title: "Cómo es el trabajo", bullets: ["Preparar o manejar máquinas, ensamblar piezas", "Medir y revisar piezas, anotar números", "Mantener limpia el área, informar de problemas"] },
            { title: "MSSC CPT 4.0", bullets: ["Seguridad", "Prácticas de calidad y medición", "Procesos de manufactura y producción", "Conocimiento del mantenimiento"] },
            { title: "Cómo funciona", bullets: ["Un certificado por cada módulo que apruebas", "Los cuatro primeros módulos = CPT 4.0 completo", "Producción verde es opcional"] },
            { title: "Otras formas de entrar", bullets: ["Aprendizajes registrados: apprenticeship.gov", "Empresas que capacitan a sus nuevos trabajadores", "Este curso te prepara; el MSSC certifica"] }
          ],
          sources: [MSSC_CPT, MSSC_COURSES, APPRENTICE],
          tryIt: "En papel, escribe los cuatro módulos del CPT 4.0 que necesitas para la certificación completa. Junto a cada uno, escribe algo que ya sabes sobre él y una pregunta que tienes. Luego abre msscusa.org y escribe dónde buscarías un centro de examen.",
          youCanNow: "explicar qué hace un técnico de producción y nombrar los cuatro módulos del CPT 4.0 que necesitas para la credencial completa.",
          quickCheck: [
            { objective: "O5", q: "¿Cuántos módulos del CPT 4.0 debes aprobar para la certificación completa?", options: ["Dos", "Los cinco, incluido Producción verde", "Los cuatro primeros", "Solo Seguridad"], answer: 2, why: "El MSSC dice que hay que obtener los cuatro primeros certificados para el CPT 4.0 completo; Producción verde es opcional." },
            { objective: "O5", q: "¿Quién entrega la credencial CPT 4.0?", options: ["El Manufacturing Skill Standards Council (MSSC)", "Este curso en línea", "OSHA", "Tu biblioteca local"], answer: 0, why: "El MSSC aplica las evaluaciones y entrega las credenciales; este curso solo te prepara." }
          ]
        },
        {
          title: "Seguridad con máquinas: guardas, EPP y bloqueo y etiquetado",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar los peligros de una máquina y elegir la protección correcta.",
          text: [
            "OSHA (la agencia federal de seguridad y salud en el trabajo de EE. UU.) dice que toda parte, función o proceso de una máquina que pueda causar una lesión debe estar protegido. Su norma sobre máquinas nombra peligros como el punto de operación (donde la máquina corta, prensa o da forma), los puntos de atrapamiento de entrada (donde dos partes giran juntas y pueden jalarte), las partes que giran y las virutas y chispas que salen volando. Las lesiones pueden incluir aplastamiento, amputación, quemaduras y ceguera.",
            "Tu protección, de la más fuerte a la más débil: las guardas que mantienen tu cuerpo fuera de la zona de peligro (nunca quites ni anules una), los procedimientos seguros y el equipo de protección personal (EPP), como lentes de seguridad, protección auditiva, guantes donde se permitan y zapatos con punta de acero. Mantén la ropa suelta, el pelo largo y las joyas lejos de las partes en movimiento; los guantes pueden quedar atrapados en partes que giran, así que sigue la regla de cada máquina.",
            "El bloqueo y etiquetado (LOTO, por sus siglas en inglés) es la norma 29 CFR 1910.147 de OSHA. Cuando se da servicio a una máquina o se despeja un atasco, su energía (eléctrica, mecánica, hidráulica, neumática, química o térmica) debe apagarse y bloquearse para que no pueda arrancar. Solo los empleados capacitados y autorizados ponen candados. A todos los demás se les dice que nunca quiten un candado ni vuelvan a arrancar un equipo bloqueado.",
            "Las leyes federales sobre trabajo infantil prohíben a los menores de 18 años usar muchas máquinas eléctricas, como las de formado, punzonado y corte de metal, las sierras eléctricas y los montacargas. Revisa la página del Departamento de Trabajo si tienes menos de 18 años."
          ],
          steps: ["Prepárate: conoce todas las fuentes de energía de la máquina.", "Avisa a los trabajadores afectados que se va a apagar la máquina.", "Apaga la máquina de la forma normal.", "Aísla la energía: apaga el interruptor, cierra las válvulas, desconecta.", "Pon tu propio candado y tu etiqueta.", "Libera o bloquea la energía almacenada (resortes, aire, presión, calor).", "Verifica: intenta arrancarla y luego regresa los controles a apagado."],
          words: [["Punto de operación", "el lugar donde la máquina corta, dobla, prensa o da forma al material."], ["Punto de atrapamiento", "donde dos partes en movimiento se juntan y pueden jalar los dedos, el pelo o la ropa."], ["Guarda", "una barrera que mantiene tu cuerpo lejos de las partes en movimiento."], ["EPP", "equipo de protección personal, como lentes de seguridad, tapones para los oídos y zapatos de seguridad."], ["Bloqueo y etiquetado (LOTO)", "apagar la energía de una máquina y ponerle un candado y una etiqueta para que no arranque mientras alguien trabaja en ella."], ["Energía almacenada", "la energía que queda en una máquina después de apagarla, como un resorte, la presión de aire o el calor."]],
          slides: [
            { title: "Dónde lastiman las máquinas", bullets: ["Punto de operación", "Puntos de atrapamiento y partes que giran", "Virutas y chispas que salen volando"] },
            { title: "Tu protección", bullets: ["Guardas: nunca las quites ni las anules", "Procedimientos seguros", "EPP: lentes, protección auditiva, zapatos"] },
            { title: "Bloqueo y etiquetado", bullets: ["Para dar servicio y despejar atascos", "Apagar, aislar, bloquear, etiquetar", "Liberar la energía almacenada y luego verificar"] },
            { title: "Conoce los límites", bullets: ["Solo las personas autorizadas ponen candados", "Nunca quites el candado de otra persona", "Menores de 18: muchas máquinas están prohibidas"] }
          ],
          sources: [OSHA_GUARD, OSHA_212, OSHA_LOTO, OSHA_147, DOL_YOUTH],
          tryIt: "Elige una máquina que conozcas o que puedas ver en un video: un taladro de columna, una trituradora de papel o una banda transportadora. Escribe al menos tres peligros (punto de operación, puntos de atrapamiento, partes que giran, virutas que vuelan) y la protección para cada uno. Luego lee este caso de práctica: una pieza está atascada en una prensa. Escribe lo que debe pasar antes de que alguien meta la mano.",
          youCanNow: "identificar los peligros de una máquina y elegir guardas, EPP o bloqueo y etiquetado para protegerte a ti y a los demás.",
          quickCheck: [
            { objective: "O1", q: "Una guarda te hace ir más lento y un compañero te dice que la quites. ¿Qué haces?", options: ["La quito cuando el supervisor no está", "La doblo para que no estorbe", "La quito solo por un turno", "La dejo puesta e informo del problema al supervisor"], answer: 3, why: "Las guardas mantienen tu cuerpo fuera de la zona de peligro y nunca se deben quitar ni anular." },
            { objective: "O1", q: "Hay que dar servicio a una máquina. ¿Qué paso viene justo después de poner tu candado y tu etiqueta?", options: ["Arrancar la máquina", "Liberar o bloquear la energía almacenada y luego verificar que no arranque", "Quitar la guarda y empezar", "Quitar el candado para probarlo"], answer: 1, why: "Después de bloquear, liberas la energía almacenada y verificas que la máquina no pueda arrancar." }
          ]
        },
        {
          title: "Medir piezas y leer una tolerancia",
          objectives: ["O2"],
          minutes: 6,
          goal: "Medir una pieza y decidir si está dentro de la tolerancia.",
          text: [
            "Cada pieza tiene en su plano un tamaño objetivo, llamado medida nominal, y una tolerancia: cuánto puede alejarse del objetivo y seguir siendo buena. Por ejemplo, 1.250 ± 0.005 pulgadas quiere decir que cualquier medida de 1.245 a 1.255 pulgadas es buena. Todo lo que sea más chico o más grande está fuera de tolerancia.",
            "Herramientas comunes: una cinta métrica o una regla de acero para medidas aproximadas; un calibrador (vernier o pie de rey) para medidas exteriores, interiores y de profundidad, muchas veces hasta una milésima de pulgada (0.001) o una centésima de milímetro (0.01); y un micrómetro para medidas exteriores todavía más finas. Muchos talleres usan calibradores digitales.",
            "Buenos hábitos: limpia la pieza y la herramienta, pon el calibrador en cero con las mordazas cerradas, sostén las mordazas en escuadra con la pieza sin apretar, lee el número de frente y anótalo enseguida. Mide más de una vez si tienes dudas. Aprende a usar las herramientas de precisión con un instructor, que también te enseñará a leer las escalas de carátula y de vernier."
          ],
          steps: ["Lee el plano: medida nominal y tolerancia.", "Calcula los límites: la medida nominal menos y más la tolerancia.", "Limpia la pieza y la herramienta; pon el calibrador en cero.", "Mide en escuadra, sin apretar; lee el número.", "Anótalo. Dentro de los límites = buena; fuera = fuera de tolerancia."],
          words: [["Medida nominal", "el tamaño objetivo que aparece en el plano."], ["Tolerancia", "cuánto puede variar una medida respecto del objetivo y seguir siendo buena."], ["Calibrador", "una herramienta con mordazas deslizantes que mide medidas exteriores, interiores y de profundidad."], ["Micrómetro", "una herramienta de tornillo que mide medidas exteriores con mucha precisión."], ["Poner en cero", "ajustar la herramienta para que marque 0 con las mordazas cerradas, así las lecturas empiezan desde el punto correcto."]],
          slides: [
            { title: "Objetivo y tolerancia", bullets: ["Nominal: el tamaño objetivo", "Tolerancia: cuánto puede variar", "1.250 ± 0.005 = de 1.245 a 1.255"] },
            { title: "Las herramientas", bullets: ["Cinta o regla de acero: medidas aproximadas", "Calibrador: exterior, interior, profundidad", "Micrómetro: medidas exteriores muy finas"] },
            { title: "Mide como un profesional", bullets: ["Pieza y herramienta limpias; primero en cero", "Mordazas en escuadra, sin apretar", "Lee de frente; anótalo"] },
            { title: "Decide", bullets: ["Dentro de los límites: pieza buena", "Fuera: fuera de tolerancia, infórmalo"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Solo práctica, con números inventados. Una pieza mide 2.000 ± 0.010 pulgadas. Calcula los límites y luego decide si es buena o está fuera de tolerancia para: 1.995, 2.012, 1.989, 2.010, 2.004. Después, mide tres cosas en casa con una regla (un libro, un teléfono, una cuchara) dos veces cada una y anota las dos lecturas.",
          youCanNow: "calcular los límites de una tolerancia, medir una pieza con cuidado y decidir si es buena o está fuera de tolerancia.",
          quickCheck: [
            { objective: "O2", q: "Una pieza mide 0.500 ± 0.002 pulgadas. ¿Qué rango es bueno?", options: ["De 0.400 a 0.600", "De 0.498 a 0.502", "Solo de 0.500 a 0.502", "De 0.490 a 0.510"], answer: 1, why: "Resta y suma 0.002 a 0.500: el rango bueno es de 0.498 a 0.502." },
            { objective: "O2", q: "¿Qué haces con un calibrador digital antes de medir?", options: ["Aprieto fuerte las mordazas", "Mido la pieza aunque esté sucia", "Cierro las mordazas y lo pongo en cero", "Lo leo de lado"], answer: 2, why: "Poner en cero con las mordazas cerradas hace que cada lectura empiece desde el punto correcto." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, la seguridad y la medición",
        questions: [
          { objective: "O5", q: "¿Qué módulo es opcional para el CPT 4.0 completo?", options: ["Seguridad", "Producción verde", "Conocimiento del mantenimiento", "Prácticas de calidad y medición"], answer: 1, why: "El MSSC dice que Producción verde no forma parte de la certificación CPT 4.0 completa." },
          { objective: "O1", q: "El lugar donde dos rodillos giran uno hacia el otro y pueden jalar tu manga se llama:", options: ["La placa de datos", "La tolerancia", "El contrapeso", "Un punto de atrapamiento de entrada"], answer: 3, why: "Un punto de atrapamiento de entrada es donde dos partes en movimiento se juntan y pueden jalarte." },
          { objective: "O1", q: "Una pieza está atascada en una máquina. ¿Qué debe pasar antes de que alguien meta la mano?", options: ["Bloqueo y etiquetado hecho por una persona autorizada", "Poner la máquina en velocidad lenta", "Ponerse guantes y meter la mano rápido", "Pedirle a un compañero que vigile el interruptor"], answer: 0, why: "Despejar un atasco es trabajo de servicio, así que primero se debe bloquear la energía de la máquina." },
          { objective: "O2", q: "Una pieza mide 25.00 ± 0.10 mm. Tú mides 25.14 mm. ¿Qué es cierto?", options: ["Es buena", "Es buena si se ve bien", "Está fuera de tolerancia", "La tolerancia no se aplica a piezas en milímetros"], answer: 2, why: "El límite superior es 25.10 mm, y 25.14 mm está por encima." },
          { objective: "O2", q: "¿Qué herramienta es la mejor para medir el ancho interior de una ranura?", options: ["Un martillo", "Un nivel", "Una brocha", "Un calibrador"], answer: 3, why: "Un calibrador tiene mordazas interiores hechas para medir medidas interiores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Calidad, producción y cómo conseguir trabajo",
      lessons: [
        {
          title: "Controles de calidad y cómo encontrar la causa raíz",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registrar defectos y encontrar una causa raíz probable con los 5 porqués.",
          text: [
            "Calidad quiere decir que cada pieza cumple su especificación, los requisitos escritos de tamaño, aspecto y función. Una pieza que no la cumple es un defecto, o pieza no conforme. Tu trabajo es detectar los defectos a tiempo, mantenerlos lejos de las piezas buenas e informar de ellos.",
            "Usa una hoja de verificación: una tabla sencilla donde haces una marca cada vez que ves un tipo de defecto, como un rayón, una medida equivocada o un agujero que falta. Al final del turno, las marcas muestran qué problema pasa más. Pon las piezas malas en un contenedor de rechazo marcado o ponles una etiqueta para que nadie las envíe por error.",
            "Para resolver un problema para siempre, encuentra su causa raíz, no solo el síntoma. Los 5 porqués son sencillos: di cuál es el problema, pregunta \"¿Por qué?\", luego pregunta \"¿Por qué?\" sobre esa respuesta, unas cinco veces, hasta llegar a una causa que puedas corregir. Muchas plantas luego usan Planear-Hacer-Verificar-Actuar: planear una solución, probarla, verificar los resultados y hacerla el estándar si funciona."
          ],
          steps: ["Revisa las piezas contra la especificación.", "Marca cada tipo de defecto en una hoja de verificación.", "Etiqueta las piezas malas o ponlas en el contenedor de rechazo; informa de ellas.", "Pregunta \"¿Por qué?\" unas cinco veces para llegar a una causa raíz.", "Sugiere una solución; verifica que los defectos bajen."],
          words: [["Especificación", "los requisitos escritos que una pieza debe cumplir."], ["Defecto", "una pieza o producto que no cumple la especificación; también se dice no conforme."], ["Hoja de verificación", "una tabla para contar cuántas veces pasa cada tipo de defecto."], ["Causa raíz", "la razón real por la que pasa un problema; corregirla evita que el problema regrese."], ["5 porqués", "preguntar \"¿Por qué?\" una y otra vez para pasar de un síntoma a su causa raíz."], ["Planear-Hacer-Verificar-Actuar", "un ciclo de cuatro pasos para probar una solución y hacerla el estándar."]],
          slides: [
            { title: "Calidad en la línea", bullets: ["Cada pieza cumple la especificación", "Detecta los defectos a tiempo", "Mantén las piezas malas lejos de las buenas"] },
            { title: "Hojas de verificación", bullets: ["Marca cada tipo de defecto", "Mira qué problema pasa más", "Etiqueta o separa los rechazos; informa de ellos"] },
            { title: "Los 5 porqués", bullets: ["Di cuál es el problema", "Pregunta \"¿Por qué?\" unas cinco veces", "Detente en una causa que puedas corregir"] },
            { title: "Planear-Hacer-Verificar-Actuar", bullets: ["Planea una solución y pruébala", "Verifica los resultados", "Hazla el estándar si funciona"] }
          ],
          sources: [MSSC_COURSES],
          tryIt: "Caso de práctica: los agujeros taladrados en unos soportes quedan en el lugar equivocado en más o menos una pieza de cada diez. Haz una hoja de verificación con tres tipos de defecto y llénala con marcas inventadas. Luego escribe una cadena de 5 porqués (por ejemplo: el dispositivo de sujeción se mueve, porque una abrazadera está floja, porque ...) y termina con una solución que podrías sugerirle a tu supervisor.",
          youCanNow: "registrar defectos en una hoja de verificación, separar las piezas malas y usar los 5 porqués para encontrar una causa raíz.",
          quickCheck: [
            { objective: "O3", q: "Encuentras cinco piezas rayadas en un contenedor de piezas buenas. ¿Qué haces primero?", options: ["Las separo y las etiqueto, y luego informo", "Las envío; los rayones son pequeños", "Las tiro y no digo nada", "Las pulo yo mismo"], answer: 0, why: "Las piezas malas se mantienen lejos de las buenas y se informa de ellas para encontrar la causa." },
            { objective: "O3", q: "¿Cuál es el objetivo de los 5 porqués?", options: ["Culpar a un compañero", "Contar las piezas", "Hacer más lenta la línea", "Encontrar una causa raíz que puedas corregir"], answer: 3, why: "Los 5 porqués pasan de un síntoma a la causa raíz, para que la solución dure." }
          ]
        },
        {
          title: "Manufactura esbelta, 5S y el cuidado diario de las máquinas",
          objectives: ["O4"],
          minutes: 6,
          goal: "Aplicar 5S y una revisión diaria del operador a un área de trabajo.",
          text: [
            "La manufactura esbelta (lean) quiere decir hacer lo que el cliente necesita con menos desperdicio. El desperdicio incluye esperar, producir de más, moverse de más, manipular de más, tener demasiado inventario, los defectos y los pasos que no agregan valor. Detectar el desperdicio y sugerir pequeñas mejoras es parte del trabajo de un técnico.",
            "Las 5S mantienen un área de trabajo segura y eficiente. Clasificar: quita lo que no necesitas. Ordenar: un lugar marcado para cada herramienta. Limpiar: limpia el área y la máquina, lo que también deja ver fugas y daños. Estandarizar: escribe cómo debe verse el área. Mantener: hazlo en cada turno.",
            "El conocimiento del mantenimiento empieza con el cuidado diario del operador. Antes y durante tu turno, busca fugas, tornillos flojos, bandas gastadas, poco aceite o refrigerante, ruidos raros, calor, vibración y guardas o cables dañados. Sigue la lista de revisión de la máquina. Informa de lo que encuentres; solo las personas capacitadas y autorizadas reparan las máquinas, y las reparaciones necesitan bloqueo y etiquetado.",
            "El mantenimiento preventivo es un cuidado planeado, como aceitar y cambiar filtros según un calendario, para que las máquinas se descompongan menos. Tus notas en la lista de revisión ayudan al equipo de mantenimiento a detectar los problemas a tiempo."
          ],
          steps: ["Clasificar: quita lo que no necesitas.", "Ordenar: un lugar marcado para cada herramienta.", "Limpiar: limpia y busca fugas y daños mientras limpias.", "Estandarizar: escribe o publica cómo debe verse el área.", "Mantener: hazlo en cada turno.", "Revisión diaria: fugas, ruido, calor, vibración, bandas, líquidos, guardas; informa de los problemas."],
          words: [["Manufactura esbelta (lean)", "una forma de trabajar que elimina el desperdicio para que el valor llegue al cliente."], ["Desperdicio", "todo lo que agrega tiempo o costo pero no valor, como esperar o moverse de más."], ["5S", "Clasificar, Ordenar, Limpiar, Estandarizar, Mantener: un método para tener un área de trabajo ordenada."], ["Mantenimiento preventivo", "cuidado planeado según un calendario para que las máquinas se descompongan menos."], ["Vibración", "un temblor que puede ser señal de una parte floja o gastada."]],
          slides: [
            { title: "Esbelta: elimina el desperdicio", bullets: ["Esperar, moverse de más, manipular de más", "Producir de más, demasiado inventario", "Defectos y pasos sin valor"] },
            { title: "5S", bullets: ["Clasificar y Ordenar", "Limpiar: limpia e inspecciona", "Estandarizar y Mantener"] },
            { title: "Revisión diaria de la máquina", bullets: ["Fugas, tornillos flojos, bandas gastadas", "Ruido, calor, vibración", "Líquidos, guardas y cables"] },
            { title: "Informa, no repares", bullets: ["Anótalo en la lista de revisión", "Solo las personas autorizadas reparan", "Las reparaciones necesitan bloqueo y etiquetado"] }
          ],
          sources: [MSSC_COURSES, OSHA_147],
          tryIt: "Elige un área de trabajo que puedas ver ahora: una barra de cocina, un estante del garaje o un escritorio. Escribe una acción para cada una de las 5S. Luego escribe una lista de revisión diaria de al menos cinco puntos para una máquina que conozcas (un auto, una bicicleta, una podadora o una lavadora) y lo que informarías.",
          youCanNow: "detectar el desperdicio, aplicar 5S en un área de trabajo y hacer una revisión diaria del operador, informando de los problemas en lugar de repararlos tú.",
          quickCheck: [
            { objective: "O4", q: "¿Qué paso de las 5S significa \"un lugar marcado para cada herramienta\"?", options: ["Clasificar", "Limpiar", "Ordenar", "Mantener"], answer: 2, why: "Ordenar le da a cada herramienta un lugar marcado para que sea fácil encontrarla y regresarla." },
            { objective: "O4", q: "Durante tu revisión diaria oyes un ruido de rozamiento nuevo. ¿Qué haces?", options: ["Le subo a la música", "Lo anoto en la lista de revisión e informo", "Desarmo la máquina", "Lo ignoro hasta que se descomponga"], answer: 1, why: "Los operadores informan de los ruidos raros; las personas capacitadas y autorizadas los reparan." }
          ]
        },
        {
          title: "Tu plan: preparación para el CPT 4.0 y tu primer trabajo de producción",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escribir un plan con fechas para prepararte para el CPT 4.0 y solicitar trabajos de producción.",
          text: [
            "Empieza por la página oficial. En msscusa.org, revisa los módulos actuales, cómo se hacen los exámenes, las tarifas y dónde presentarlos. Muchos colegios comunitarios y centros de empleo (a menudo llamados American Job Centers) dan formación para el CPT y pueden ayudar a pagarla. Pregunta si el programa incluye práctica real con herramientas y máquinas.",
            "Planea un módulo a la vez. Seguridad es un buen primer módulo. Para cada uno, fija semanas de estudio, una forma de practicar (notas, tarjetas de estudio, la práctica de este curso) y una fecha de examen objetivo que confirmes con el centro de examen.",
            "Solicita trabajo mientras estudias. Busca puestos de asociado de producción, operador de máquina, ensamblador y técnico de manufactura, y busca aprendizajes registrados en apprenticeship.gov. Algunas empresas contratan a personas con antecedentes; los programas de empleo y de reinserción pueden orientarte hacia ellas.",
            "En tu currículum, sé honesto. Escribe \"Completé Fundamentos del técnico de manufactura (Koach Learn), 2026\" y menciona los módulos del CPT solo después de aprobarlos. En las entrevistas, habla primero de la seguridad, de medir con cuidado, de detectar piezas malas y de mantener tu área en orden."
          ],
          steps: ["Lee la página del CPT 4.0 en msscusa.org; anota los cuatro módulos obligatorios.", "Encuentra un programa de formación o un centro de examen cerca de ti y lo que ofrece.", "Fija semanas de estudio y una fecha objetivo para cada módulo; confirma las fechas con el centro.", "Haz una lista de tres puestos y tres empresas o aprendizajes a los que vas a aplicar.", "Escribe una línea honesta para tu currículum y una respuesta de 30 segundos: \"¿Por qué la manufactura?\""],
          words: [["American Job Center", "una oficina pública de empleo que ayuda a las personas a encontrar trabajo y formación."], ["Asociado de producción", "un nombre común para un puesto de nivel inicial en la planta de una fábrica."], ["Centro de examen", "una escuela o un centro aprobado para aplicar la evaluación."]],
          slides: [
            { title: "Empieza con el MSSC", bullets: ["Revisa módulos, exámenes y tarifas en msscusa.org", "Encuentra un programa o centro de examen local", "Pregunta por la práctica real"] },
            { title: "Un módulo a la vez", bullets: ["Seguridad es un buen primer módulo", "Semanas de estudio y forma de practicar", "Una fecha objetivo que confirmes"] },
            { title: "Solicita trabajo mientras estudias", bullets: ["Asociado de producción, operador, ensamblador", "Aprendizajes registrados", "Programas de empleo y de reinserción"] },
            { title: "Sé honesto", bullets: ["Menciona el curso que terminaste", "Menciona los módulos del CPT solo después de aprobarlos", "Habla primero de seguridad y calidad"] }
          ],
          sources: [MSSC_CPT, APPRENTICE],
          tryIt: "Escribe tu plan en una página: los cuatro módulos con una semana de inicio de estudio y una fecha de examen objetivo para cada uno, un programa o centro de examen al que vas a contactar, tres trabajos o aprendizajes a los que vas a aplicar y tu línea honesta para el currículum. Lee en voz alta tu respuesta de 30 segundos a \"¿Por qué la manufactura?\".",
          youCanNow: "escribir un plan con fechas para prepararte para el CPT 4.0 y un primer trabajo de producción, y describir tu formación con honestidad.",
          quickCheck: [
            { objective: "O5", q: "Aprobaste solo el módulo de Seguridad. ¿Qué línea del currículum es honesta?", options: ["\"Certificación CPT 4.0 completa\"", "\"Técnico maestro\"", "\"Maquinista certificado por OSHA\"", "\"Certificado de Seguridad del MSSC (módulo del CPT 4.0), 2026\""], answer: 3, why: "Nombra exactamente lo que obtuviste y no dice que tienes el CPT 4.0 completo." },
            { objective: "O5", q: "¿Dónde confirmas las tarifas y los centros de examen actuales del CPT?", options: ["En el sitio oficial del MSSC o en un centro de examen aprobado", "En un anuncio de redes sociales", "En lo que adivina un amigo", "En cualquier bolsa de trabajo"], answer: 0, why: "Las tarifas y los exámenes cambian, así que revisa directamente con el MSSC o el centro de examen." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Calidad, producción y cómo conseguir trabajo",
        questions: [
          { objective: "O3", q: "¿Qué te muestra una hoja de verificación al final de un turno?", options: ["Qué tipo de defecto pasa más", "El precio de la máquina", "El clima", "Quién llegó tarde"], answer: 0, why: "Las marcas en una hoja de verificación muestran cuántas veces pasa cada tipo de defecto." },
          { objective: "O3", q: "Las piezas salen demasiado largas. ¿Por qué? El tope se movió. ¿Por qué? Su tornillo está flojo. ¿Por qué? Nadie lo revisa. ¿Cuál es una buena solución?", options: ["Hacer las piezas más rápido", "Culpar al turno anterior", "Agregar el tornillo del tope a la revisión diaria", "Tirar todas las piezas"], answer: 2, why: "La solución ataca la causa raíz a la que llegaron los 5 porqués: nadie revisa el tornillo." },
          { objective: "O4", q: "Los trabajadores esperan 20 minutos en cada turno a que lleguen las piezas. En términos de manufactura esbelta, esto es:", options: ["Valor", "Desperdicio", "5S", "Tolerancia"], answer: 1, why: "Esperar agrega tiempo pero no valor, así que es uno de los desperdicios de la manufactura esbelta." },
          { objective: "O4", q: "¿Qué paso de las 5S también te ayuda a ver fugas y daños?", options: ["Clasificar", "Mantener", "Estandarizar", "Limpiar"], answer: 3, why: "Limpiar la máquina durante el paso Limpiar deja ver fugas, grietas y desgaste." },
          { objective: "O5", q: "¿Cuál es un buen primer paso para un plan del CPT 4.0?", options: ["Leer la página del CPT 4.0 en msscusa.org y encontrar un centro de examen", "Comprar un certificado en línea", "Presentar los cinco exámenes el mismo día sin estudiar", "Esperar a que alguien te diga"], answer: 0, why: "Empezar por la página oficial te da los módulos, los exámenes y los centros actuales." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos del técnico de manufactura",
    questions: [
      { objective: "O5", q: "¿Qué grupo otorga el Certified Production Technician (CPT 4.0)?", options: ["OSHA", "Solo tu empleador", "El Manufacturing Skill Standards Council (MSSC)", "Este curso"], answer: 2, why: "El MSSC aplica las evaluaciones del CPT y entrega las credenciales." },
      { objective: "O5", q: "¿Qué módulos forman el CPT 4.0 completo?", options: ["Seguridad; Prácticas de calidad y medición; Procesos de manufactura y producción; Conocimiento del mantenimiento", "Soldadura, plomería, manejo y cocina", "Solo Producción verde", "Montacargas, grúa, escalera y techo"], answer: 0, why: "El MSSC dice que los cuatro primeros módulos dan el CPT 4.0 completo." },
      { objective: "O1", q: "¿Cuál es un peligro que nombra la norma de OSHA sobre máquinas?", options: ["Un piso limpio", "Un cartel de 5S", "Un lápiz con punta", "Las partes que giran"], answer: 3, why: "La norma general de OSHA sobre máquinas menciona las partes que giran junto con el punto de operación, los puntos de atrapamiento y las virutas que vuelan." },
      { objective: "O1", q: "¿Cuál es la protección más fuerte contra las partes en movimiento de una máquina?", options: ["Trabajar más rápido", "Una guarda que mantiene tu cuerpo fuera de la zona de peligro", "Guantes flojos", "Un grito de aviso"], answer: 1, why: "Las guardas te mantienen lejos del peligro y nunca se deben quitar ni anular." },
      { objective: "O1", q: "Ves el candado de otro trabajador en una máquina que necesitas. ¿Qué haces?", options: ["Corto el candado", "Le pregunto a mi supervisor; nunca quito el candado de otra persona", "Arranco la máquina de todos modos", "Quito solo la etiqueta"], answer: 1, why: "Solo el trabajador que puso un candado lo quita, siguiendo el procedimiento." },
      { objective: "O1", q: "Tienes 17 años. ¿Qué trabajo está prohibido por las leyes federales sobre trabajo infantil?", options: ["Barrer el comedor", "Archivar papeles", "Acomodar cajas ligeras a mano", "Manejar una punzonadora de metal"], answer: 3, why: "Los menores de 18 años no pueden manejar máquinas eléctricas de formado, punzonado o corte de metal." },
      { objective: "O2", q: "Una pieza mide 3.000 ± 0.005 pulgadas. Tú mides 2.996. ¿Es buena?", options: ["Sí, está entre 2.995 y 3.005", "No, debe medir exactamente 3.000", "No, es demasiado grande", "Solo si se ve brillante"], answer: 0, why: "2.996 está dentro de los límites de 2.995 a 3.005." },
      { objective: "O2", q: "¿Qué es la tolerancia?", options: ["El peso de una pieza", "La velocidad de la máquina", "Cuánto puede variar una medida respecto del objetivo y seguir siendo buena", "El precio de una pieza"], answer: 2, why: "La tolerancia fija el rango permitido alrededor de la medida nominal." },
      { objective: "O2", q: "¿Qué hábito da una lectura correcta del calibrador?", options: ["Apretar las mordazas lo más fuerte posible", "Limpiar la pieza, poner la herramienta en cero y sostener las mordazas en escuadra", "Medir a través de un guante", "Adivinar el último dígito"], answer: 1, why: "Superficies limpias, una herramienta en cero y mordazas en escuadra dan lecturas exactas." },
      { objective: "O2", q: "Una pieza mide 10.00 ± 0.05 mm. ¿Qué lectura está fuera de tolerancia?", options: ["9.97 mm", "10.04 mm", "10.00 mm", "10.08 mm"], answer: 3, why: "El límite superior es 10.05 mm, así que 10.08 mm es demasiado grande." },
      { objective: "O3", q: "Una pieza que no cumple su especificación se llama:", options: ["No conforme (un defecto)", "Nominal", "Esbelta", "En cero"], answer: 0, why: "Una pieza que no cumple la especificación es un defecto, o pieza no conforme." },
      { objective: "O3", q: "¿Por qué etiquetas o separas las piezas malas enseguida?", options: ["Para que el contenedor pese más", "Para que se puedan pintar", "Para que nadie las mezcle con las buenas ni las envíe", "Para esconderlas del supervisor"], answer: 2, why: "Separar los rechazos evita que las piezas malas lleguen al cliente." },
      { objective: "O3", q: "En Planear-Hacer-Verificar-Actuar, ¿qué pasa en \"Verificar\"?", options: ["Planeas la solución", "Detienes la línea para siempre", "Pides máquinas nuevas", "Ves si la solución funcionó"], answer: 3, why: "Verificar quiere decir mirar los resultados para ver si la solución funcionó." },
      { objective: "O4", q: "¿Cuál es un desperdicio de la manufactura esbelta?", options: ["Mover piezas de un lado a otro sin necesidad", "Una pieza buena enviada al cliente", "Un área de trabajo limpia", "Una revisión de seguridad terminada"], answer: 0, why: "Moverse y manipular de más agrega tiempo y costo pero no valor." },
      { objective: "O4", q: "¿Qué significa \"Mantener\" en las 5S?", options: ["Tirar lo que no se usa", "Seguir haciendo las 5S en cada turno", "Pintar el piso", "Comprar herramientas nuevas"], answer: 1, why: "Mantener quiere decir hacer de las 5S un hábito para que el área siga en orden." },
      { objective: "O4", q: "Durante una revisión diaria encuentras una fuga de aceite debajo de una máquina. ¿Qué es lo correcto?", options: ["Limpiarla y no decir nada", "Arreglar la manguera tú mismo con la máquina funcionando", "Informar y seguir la lista de revisión; dejar que las personas autorizadas reparen", "Poner una caja encima"], answer: 2, why: "Los operadores informan de los problemas; las personas autorizadas los reparan con bloqueo y etiquetado." },
      { objective: "O4", q: "¿Qué es el mantenimiento preventivo?", options: ["Reparar una máquina solo cuando se descompone", "Cuidado planeado según un calendario para que las máquinas se descompongan menos", "Limpiar el comedor", "Comprar uniformes de repuesto"], answer: 1, why: "El mantenimiento preventivo es un cuidado programado que evita las averías." },
      { objective: "O5", q: "Quieres un trabajo pagado que incluya formación y un mentor. ¿Dónde puedes buscar?", options: ["En un sitio de lotería", "En una aplicación de cupones", "En el buscador de aprendizajes de Apprenticeship.gov", "En un foro de videojuegos"], answer: 2, why: "El buscador de aprendizajes del Departamento de Trabajo muestra vacantes de aprendizajes registrados." },
      { objective: "O1", q: "En el bloqueo y etiquetado, ¿por qué intentas arrancar la máquina después de bloquearla?", options: ["Para calentarla", "Para probar el color del candado", "Para terminar el trabajo más rápido", "Para verificar que la energía de verdad está apagada antes de trabajar"], answer: 3, why: "Verificar muestra que la energía está aislada; luego regresas los controles a apagado." },
      { objective: "O3", q: "La pintura se está despegando en muchas piezas. ¿Por qué? La superficie tiene aceite. ¿Por qué? Se saltó el paso de lavado. ¿Qué respuesta está más cerca de una causa raíz?", options: ["Las piezas son malas", "Se saltó el paso de lavado", "La pintura se está despegando", "El cliente es exigente"], answer: 1, why: "El paso de lavado que se saltó es una causa que puedes corregir; la pintura que se despega es solo el síntoma." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 4, 6, 7, 10, 12, 13, 15] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte y vuelve a revisar.",
    criteria: [
      { name: "Lista de peligros y protecciones", objective: "O1", notYet: "Menos de tres peligros, o un peligro sin protección o con la protección equivocada.", meets: "Al menos tres peligros en una máquina, cada uno con la guarda, el EPP o el procedimiento correcto, y cuándo se necesita bloqueo y etiquetado.", exceeds: "Escribe los pasos del bloqueo y etiquetado en orden y nombra las fuentes de energía de la máquina." },
      { name: "Registro de mediciones", objective: "O2", notYet: "Límites mal calculados, o dos o más decisiones equivocadas.", meets: "Los límites son correctos y al menos 4 de 5 piezas de práctica se juzgan bien.", exceeds: "Las 5 están bien, con los hábitos de medición usados escritos junto al registro." },
      { name: "Registro de defectos y 5 porqués", objective: "O3", notYet: "No se separan las piezas malas, o la cadena se detiene en el síntoma.", meets: "Una hoja de verificación, un paso para etiquetar las piezas malas y unos 5 porqués que terminan en una causa que se puede corregir.", exceeds: "Agrega una nota de Planear-Hacer-Verificar-Actuar sobre cómo comprobar que la solución funcionó." },
      { name: "Plan de 5S y de revisión diaria", objective: "O4", notYet: "Falta una de las 5S, o hay menos de cinco puntos de revisión.", meets: "Una acción para cada S y al menos cinco puntos de revisión diaria con lo que hay que informar.", exceeds: "Nombra al menos dos desperdicios de manufactura esbelta en el área y una pequeña mejora para cada uno." },
      { name: "Plan para el CPT 4.0 y el trabajo", objective: "O5", notYet: "Módulos equivocados, sin fechas, o una línea de currículum que dice tener una credencial que no se obtuvo.", meets: "Nombra los cuatro módulos obligatorios con fechas objetivo por confirmar, un programa o centro de examen, tres opciones de trabajo y una línea honesta para el currículum.", exceeds: "Incluye una respuesta de 30 segundos ya practicada y un camino de respaldo, como un aprendizaje." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y un paquete de preparación que cumple la rúbrica",
      "Participantes que se inscriben en una formación para el CPT 4.0 o presentan un primer módulo del CPT en 90 días (encuesta de seguimiento)",
      "Participantes que aprueban uno o más módulos del CPT 4.0 (lo informan ellos mismos con la credencial del MSSC)",
      "Participantes contratados en trabajos de producción o aprendizajes registrados (informes de socios y de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para msscusa.org, osha.gov y apprenticeship.gov",
      "Una regla o cinta métrica, papel y pluma",
      "Opcional: un calibrador digital y algunas piezas pequeñas (tornillos, rondanas) para medir con un instructor",
      "Unos 60 minutos en total"
    ],
    facilitatorNotes: [
      "Dígalo desde el inicio y muchas veces: este curso prepara a los participantes; el MSSC entrega las credenciales del CPT y las habilidades con máquinas se enseñan en persona.",
      "No haga que los participantes manejen máquinas ni practiquen el bloqueo y etiquetado en equipos con energía como parte de este curso. Use imágenes, videos y piezas de demostración desconectadas.",
      "Revise antes de la sesión las tarifas actuales del MSSC, las opciones de examen y los centros de examen locales, y comparta cualquier apoyo económico que ofrezca su programa de empleo.",
      "Explique despacio en el pizarrón las cuentas de tolerancia; muchos participantes necesitan dos o tres ejemplos resueltos.",
      "Esté atento a los participantes menores de 18 años: pueden tomar el curso, pero en el trabajo muchas máquinas de fábrica les están prohibidas.",
      "Califique el paquete de preparación con la rúbrica y revise una fila de Todavía no a la vez."
    ]
  }
};

"use strict";

// Koach Learn course (Spanish translation of shared/welding-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "welding-basics-es",
  lang: "es",
  translationOf: "welding-basics",
  category: "Workforce Development",
  name: "Fundamentos de soldadura",
  skills: "Asignar a cada trabajo el proceso de soldadura correcto, Leer uniones, posiciones y símbolos de soldadura, Detectar defectos comunes de soldadura, Planear la seguridad y la prevención de incendios al soldar, Planear tu camino hacia la certificación de soldador",
  outcome: "asignar a un trabajo el proceso de soldadura correcto, leer los tipos de unión, las posiciones y un símbolo de soldadura básico, detectar defectos comunes de soldadura, planear el equipo de protección y las precauciones contra incendios de una tarea de soldadura, y seguir un plan con fechas para capacitarte y presentar un examen de certificación de soldador.",
  about: [
    "Los soldadores unen metal para edificios, puentes, barcos, tuberías, camiones, maquinaria agrícola y fábricas. Muchos empiezan en una escuela técnica, un community college (colegio comunitario de carreras cortas), un programa de aprendiz, el ejército o capacitándose en el trabajo. Este curso es para quien esté pensando en ese camino: personas que buscan trabajo, jóvenes adultos, personas que regresan de prisión, veteranos, inmigrantes y adultos que vuelven a estudiar.",
    "Vas a aprender los principales procesos de soldadura y de corte, las uniones y posiciones que usan los soldadores, cómo leer un símbolo de soldadura básico en un plano y cómo distinguir una soldadura buena de una mala. Después vas a aprender cómo los soldadores protegen sus ojos, su piel, sus pulmones y sus oídos, cómo previenen incendios y cómo funciona la certificación de soldador.",
    "Este curso te prepara. No te da un certificado ni una licencia. En este curso no vas a soldar ni a cortar: a soldar solo se aprende en un taller supervisado, con el equipo de protección adecuado. Una certificación de soldador, como la de Certified Welder de la American Welding Society (AWS, la Sociedad Americana de Soldadura), se obtiene al aprobar un examen práctico en un centro de examen aprobado.",
    "Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio plan para empezar en la soldadura, con fechas reales."
  ],
  finalTask: "Haz tu plan para empezar en la soldadura: (1) una tabla de procesos que asigne a cuatro procesos de soldadura o de corte un trabajo real cada uno; (2) una hoja de lectura con los cinco tipos de unión dibujados, las cuatro posiciones anotadas y cinco defectos de soldadura con una causa probable de cada uno; (3) una lista de seguridad antes de soldar para una tarea con electrodo revestido o MIG que cubra ojos, piel, pulmones, oídos, incendio y descarga eléctrica; y (4) un plan con fechas que nombre dos programas de capacitación cerca de ti, el proceso y la posición en los que buscarás certificarte, dónde puedes presentar el examen (un AWS Accredited Test Facility, centro de examen acreditado por la AWS), qué exige tu estado o ciudad (según la página oficial) y una fecha para cada paso.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan un oficio práctico: personas que buscan trabajo, personas que regresan de prisión, jóvenes adultos, veteranos, inmigrantes y adultos que vuelven a estudiar. Algunos han hecho trabajo de taller, de campo, de mecánica de autos o en el ejército; la mayoría nunca ha soldado.",
    startingPoint: "Pueden leer instrucciones cortas y hacer cálculos con números enteros. La mayoría sabe que al soldar se usa calor y una luz muy fuerte para unir metal, pero no puede nombrar los procesos, leer un símbolo de soldadura, juzgar una soldadura ni enumerar los pasos de seguridad.",
    gap: "Las escuelas de soldadura, los programas de aprendiz y los empleadores buscan personas que conozcan las palabras básicas, tomen en serio la seguridad y sepan qué pide un examen de certificación. Los participantes necesitan esa base y un plan claro con fechas, para elegir una buena capacitación, no malgastar dinero y llegar al taller listos para aprender.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); se explica cada palabra del oficio",
      "En este curso no se suelda, no se corta ni se esmerila: el trabajo práctico exige un taller supervisado y el equipo de protección adecuado",
      "Dispositivos: un teléfono o una computadora de la biblioteca para páginas oficiales y fotos de soldaduras; papel y lápiz para dibujos y planes",
      "Tiempo: lecciones de 5 a 6 minutos que quepan entre el trabajo y las citas",
      "Las reglas cambian según el estado y la ciudad: cada participante revisa las licencias en la página oficial del lugar donde vive"
    ],
    prerequisites: "Ninguno. \"Empezar una carrera en los oficios calificados\" ayuda a elegir un oficio; este curso profundiza en la soldadura."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con la descripción de un trabajo de soldadura o de corte", action: "asignar al trabajo un proceso común: electrodo revestido, MIG, alambre tubular, TIG, oxicorte o plasma", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con un plano, una foto o un símbolo de soldadura", action: "nombrar el tipo de unión, la posición de soldadura y las partes básicas de un símbolo de soldadura", standard: "acertando al menos 4 de 5" },
    { id: "O3", condition: "Con fotos o descripciones de soldaduras terminadas", action: "identificar defectos comunes de soldadura y nombrar una causa probable de cada uno", standard: "acertando al menos 4 de 5" },
    { id: "O4", condition: "Con una tarea de soldadura", action: "enumerar el equipo de protección, la ventilación y las precauciones contra incendios que necesita la tarea", standard: "cubriendo ojos, piel, pulmones, oídos, descarga eléctrica y al menos tres precauciones contra incendios" },
    { id: "O5", condition: "Usando los sitios web oficiales de tu zona", action: "escribir un plan con fechas para capacitarte y presentar un examen de certificación de soldador", standard: "con dos programas reales, un lugar de examen y una fecha para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona la soldadura",
      lessons: [
        {
          title: "Qué hacen los soldadores y los procesos principales",
          objectives: ["O1"],
          minutes: 6,
          goal: "Asignar a un trabajo de soldadura o de corte el proceso común correcto.",
          text: [
            "Soldar es unir piezas de metal derritiéndolas para que se mezclen y se endurezcan como una sola pieza. La mayoría de las soldaduras usan un arco eléctrico, una chispa muy caliente entre un electrodo y el metal. Muchas veces se agrega un metal de aporte, y algo debe proteger el metal caliente del aire para que la soldadura quede fuerte.",
            "La soldadura con electrodo revestido (SMAW, en inglés \"stick\") usa una varilla recubierta. Es sencilla y funciona al aire libre y con viento, por eso es común en construcción, tuberías y reparaciones. La soldadura MIG (GMAW) alimenta un alambre por una pistola con gas de protección; es rápida y común en fábricas y talleres de autos. La soldadura con alambre tubular (FCAW) alimenta un alambre con fundente por dentro; se usa en acero más grueso y en algunos trabajos al aire libre. La soldadura TIG (GTAW) usa un electrodo de tungsteno y una varilla de aporte aparte; es lenta, pero muy limpia y precisa, y se usa en metal delgado, acero inoxidable y aluminio.",
            "Los soldadores también cortan metal. El oxicorte usa una llama de gas combustible y oxígeno, sobre todo en acero. El corte por plasma usa un arco eléctrico y un chorro rápido de gas, y puede cortar muchos metales.",
            "Los empleadores suelen examinarte en un proceso y una posición específicos, así que conocer estos nombres te ayuda a leer anuncios de empleo y a elegir tu capacitación."
          ],
          words: [
            ["Arco", "una chispa eléctrica muy caliente entre el electrodo y el metal, que derrite el metal."],
            ["Electrodo", "la varilla o el alambre que lleva la corriente para formar el arco; en algunos procesos también se vuelve metal de aporte."],
            ["Metal de aporte", "metal extra que se agrega para llenar la unión."],
            ["Protección", "gas o fundente que mantiene el aire lejos de la soldadura caliente para que quede fuerte."],
            ["Electrodo revestido (SMAW)", "soldadura por arco con electrodo revestido, con una varilla recubierta de fundente; en inglés se dice \"stick\"."],
            ["MIG (GMAW)", "soldadura por arco con gas y alambre: un alambre que sale por una pistola con gas de protección."],
            ["Alambre tubular (FCAW)", "soldadura por arco con alambre tubular: un alambre alimentado con fundente por dentro."],
            ["TIG (GTAW)", "soldadura por arco con electrodo de tungsteno y gas: un electrodo de tungsteno y una varilla de aporte aparte; lenta y precisa."]
          ],
          slides: [
            { title: "Qué es soldar", bullets: ["Derretir metal para que se una en una sola pieza", "La mayoría usa un arco eléctrico", "La protección mantiene el aire lejos de la soldadura"] },
            { title: "Cuatro procesos comunes", bullets: ["Electrodo revestido (SMAW): sencillo, funciona al aire libre", "MIG (GMAW): rápido, fábricas y talleres de autos", "Alambre tubular (FCAW): acero más grueso, algo al aire libre", "TIG (GTAW): lento, limpio, metal delgado y aluminio"] },
            { title: "Corte", bullets: ["Oxicorte: llama, sobre todo acero", "Plasma: arco y gas rápido, muchos metales"] },
            { title: "Por qué importan los nombres", bullets: ["Los anuncios de empleo nombran el proceso", "Los exámenes son en un proceso y una posición"] }
          ],
          tryIt: "Busca \"soldador\" en un sitio de empleos cerca de ti y lee tres anuncios. En cada uno, anota qué proceso pide (electrodo revestido, MIG, alambre tubular o TIG), qué fabrica o repara y qué certificación nombra. Luego haz una tabla pequeña: los cuatro procesos en una columna y un trabajo real al lado de cada uno. Guárdala: es la parte 1 de tu tarea final.",
          youCanNow: "nombrar los principales procesos de soldadura y de corte y asignar a cada uno el tipo de trabajo que le corresponde.",
          quickCheck: [
            { objective: "O1", q: "Un equipo debe reparar una cerca de acero al aire libre en un día de viento, con equipo sencillo. ¿Qué proceso conviene más?", options: ["TIG", "Electrodo revestido (SMAW)", "Corte por plasma", "MIG con gas de protección"], answer: 1, why: "La soldadura con electrodo revestido usa una varilla recubierta y funciona al aire libre y con viento, donde el viento se llevaría el gas de protección." },
            { objective: "O1", q: "Un taller necesita soldaduras muy limpias y precisas en aluminio delgado. ¿Qué proceso conviene más?", options: ["Oxicorte", "Alambre tubular", "Electrodo revestido", "TIG (GTAW)"], answer: 3, why: "TIG es lento, pero muy limpio y preciso, y se usa en metal delgado y aluminio." }
          ]
        },
        {
          title: "Uniones, posiciones y símbolos de soldadura",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nombrar el tipo de unión y la posición de soldadura en un plano y leer las partes básicas de un símbolo de soldadura.",
          text: [
            "Hay cinco uniones básicas. Unión a tope: dos piezas borde con borde, en línea. Unión en T: una pieza parada sobre otra, como una T. Unión traslapada: dos piezas una encima de la otra. Unión de esquina: dos piezas que se juntan en una esquina, como una L. Unión de borde: dos piezas lado a lado, soldadas por sus bordes.",
            "Hay cuatro posiciones de soldadura. Plana: sueldas desde arriba; es la más fácil. Horizontal: la soldadura corre de lado sobre una superficie como una pared. Vertical: la soldadura sube o baja. Sobre cabeza: sueldas desde abajo; es la más difícil. En los exámenes se numeran del 1 al 4, con G para una soldadura de ranura y F para una soldadura de filete; por ejemplo, 3G es una soldadura de ranura vertical y 2F es una soldadura de filete horizontal.",
            "Una soldadura de ranura llena un espacio o una ranura preparada, muchas veces en una unión a tope. Una soldadura de filete llena la esquina de una unión en T, traslapada o de esquina, y de lado se ve como un triángulo.",
            "Los planos usan símbolos de soldadura. La flecha apunta a la unión. El símbolo de soldadura va sobre una línea plana de referencia. Si el símbolo está debajo de la línea, la soldadura va del lado de la flecha; si está arriba de la línea, va del otro lado. Un triángulo pequeño significa soldadura de filete, y el número a su lado suele ser el tamaño de la soldadura. Una cola al final puede llevar notas extra, como el proceso."
          ],
          steps: [
            "Busca la flecha: apunta a la unión.",
            "Mira la línea de referencia: símbolo abajo = lado de la flecha, arriba = otro lado.",
            "Lee el símbolo: un triángulo significa filete.",
            "Lee el número a su lado (tamaño) y cualquier nota en la cola."
          ],
          words: [
            ["Unión", "el lugar donde se juntan dos piezas de metal para soldarlas."],
            ["A tope, en T, traslapada, de esquina, de borde", "los cinco tipos básicos de unión."],
            ["Soldadura de ranura", "una soldadura que llena un espacio o una ranura preparada entre piezas."],
            ["Soldadura de filete", "una soldadura en una esquina; de lado tiene forma de triángulo."],
            ["Posición", "la dirección en que sueldas: plana, horizontal, vertical o sobre cabeza (1 a 4)."],
            ["Símbolo de soldadura", "un código de los planos con una flecha, una línea de referencia y símbolos que le dicen al soldador qué soldadura hacer."],
            ["Línea de referencia", "la línea plana de un símbolo de soldadura; debajo significa lado de la flecha, arriba significa otro lado."]
          ],
          slides: [
            { title: "Cinco uniones básicas", bullets: ["A tope: borde con borde", "En T: como una T; Traslapada: una encima de otra", "De esquina: como una L; De borde: lado a lado"] },
            { title: "Cuatro posiciones", bullets: ["1 Plana, 2 Horizontal", "3 Vertical, 4 Sobre cabeza", "G = ranura, F = filete (3G, 2F)"] },
            { title: "Ranura o filete", bullets: ["Ranura: llena un espacio, muchas veces en uniones a tope", "Filete: llena una esquina, forma de triángulo"] },
            { title: "Cómo leer un símbolo de soldadura", bullets: ["La flecha apunta a la unión", "Debajo de la línea = lado de la flecha; arriba = otro lado", "Triángulo = filete; número = tamaño; cola = notas"] }
          ],
          tryIt: "Usa tiras de papel o dos pedazos de cartón para formar cada una de las cinco uniones, y dibuja cada una con su nombre. Al lado de los dibujos, anota las cuatro posiciones con sus números. Luego busca una imagen de un \"símbolo de soldadura de filete\" y anota de qué lado va la soldadura y qué significa el número. Guarda los dibujos: son la parte 2 de tu tarea final.",
          youCanNow: "nombrar las cinco uniones y las cuatro posiciones y leer las partes básicas de un símbolo de soldadura.",
          quickCheck: [
            { objective: "O2", q: "Una placa está parada en el medio de otra placa plana, como la letra T. ¿Qué unión es?", options: ["Unión en T", "Unión a tope", "Unión traslapada", "Unión de borde"], answer: 0, why: "Una unión en T tiene una pieza parada sobre otra, como una T." },
            { objective: "O2", q: "En un símbolo de soldadura, el triángulo está debajo de la línea de referencia. ¿Dónde va la soldadura?", options: ["Del otro lado", "De los dos lados", "Del lado de la flecha", "En ningún lado; es una nota"], answer: 2, why: "Un símbolo debajo de la línea de referencia significa que la soldadura va del lado de la flecha." }
          ]
        },
        {
          title: "Cómo distinguir una soldadura buena de una mala",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identificar defectos comunes de soldadura en fotos o descripciones y nombrar una causa probable de cada uno.",
          text: [
            "Los soldadores y los inspectores revisan las soldaduras primero mirándolas. Una buena soldadura tiene forma y ancho parejos, se funde suavemente con las dos piezas y no tiene agujeros ni grietas. En algunos trabajos también se prueban las soldaduras doblándolas o con equipo especial, y los inspectores de soldadura están capacitados y certificados para eso.",
            "Defectos comunes: la porosidad son pequeños agujeros o burbujas, muchas veces por metal sucio o mal gas de protección. El socavado es una ranura derretida en el metal a lo largo del borde de la soldadura, muchas veces por exceso de calor o un ángulo incorrecto. La fusión incompleta significa que la soldadura no se fundió con el metal, muchas veces por poco calor o por avanzar muy rápido. Las grietas son líneas en la soldadura o junto a ella; son graves. Demasiadas salpicaduras (bolitas de metal alrededor de la soldadura) suelen venir de una mala configuración del equipo. El traslape es metal de soldadura que se monta sobre la superficie sin fundirse.",
            "En el taller, tu instructor te enseñará a corregir cada causa, por ejemplo limpiando primero el metal, cambiando la configuración, el ángulo o la velocidad de avance, o revisando el gas. En este curso practicas mirar y nombrar."
          ],
          steps: [
            "Mira la forma: ¿es pareja de ancho y de alto?",
            "Mira los bordes: ¿se funde con el metal, o hay una ranura (socavado) o un montón (traslape)?",
            "Mira la superficie: ¿hay agujeros (porosidad) o grietas?",
            "Mira alrededor: ¿hay muchas salpicaduras?",
            "Escribe el defecto y una causa probable."
          ],
          words: [
            ["Defecto", "una falla que puede debilitar una soldadura o hacer que no pase la inspección."],
            ["Porosidad", "pequeños agujeros o burbujas en una soldadura, muchas veces por suciedad o mala protección."],
            ["Socavado", "una ranura derretida en el metal a lo largo del borde de la soldadura."],
            ["Fusión incompleta", "la soldadura no se fundió con el metal base."],
            ["Salpicaduras", "bolitas de metal que salen disparadas alrededor de la soldadura."],
            ["Inspección visual", "revisar una soldadura mirándola con cuidado; es la primera prueba de toda soldadura."]
          ],
          slides: [
            { title: "Una buena soldadura", bullets: ["Forma y ancho parejos", "Se funde suavemente con las dos piezas", "Sin agujeros, sin grietas"] },
            { title: "Defectos comunes", bullets: ["Porosidad: agujeros o burbujas", "Socavado: ranura en el borde", "Fusión incompleta; grietas; salpicaduras; traslape"] },
            { title: "Causas probables", bullets: ["Metal sucio o mal gas: porosidad", "Exceso de calor o ángulo incorrecto: socavado", "Poco calor o muy rápido: sin fusión"] },
            { title: "Revisa cada soldadura", bullets: ["Forma, bordes, superficie, alrededor", "Nombra el defecto y una causa", "Corregirlo se enseña en el taller"] }
          ],
          tryIt: "Busca fotos de \"porosidad en soldadura\", \"socavado en soldadura\" y \"buena soldadura MIG\" de una escuela de soldadura o de un proveedor. Para cada foto, escribe lo que ves y nombra el defecto (o di que se ve bien). Luego haz una lista de cinco defectos con una causa probable de cada uno. Guarda la lista: va en la parte 2 de tu tarea final.",
          youCanNow: "detectar defectos comunes de soldadura y nombrar una causa probable de cada uno.",
          quickCheck: [
            { objective: "O3", q: "Una soldadura tiene muchos agujeros pequeños en la superficie. ¿Qué defecto es?", options: ["Socavado", "Traslape", "Porosidad", "Salpicaduras"], answer: 2, why: "Los agujeros o burbujas pequeños en una soldadura son porosidad." },
            { objective: "O3", q: "Hay una ranura derretida en el metal a lo largo del borde de la soldadura. ¿Cuál es una causa probable?", options: ["Exceso de calor o un ángulo incorrecto", "El metal estaba demasiado limpio", "La careta era demasiado oscura", "La soldadura estaba demasiado fría para tocarla"], answer: 0, why: "El socavado muchas veces viene de exceso de calor o de un mal ángulo." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona la soldadura",
        questions: [
          { objective: "O1", q: "¿Qué proceso alimenta un alambre por una pistola con gas de protección?", options: ["Electrodo revestido (SMAW)", "MIG (GMAW)", "Oxicorte", "TIG (GTAW)"], answer: 1, why: "MIG (soldadura por arco con gas y alambre) usa un alambre alimentado y gas de protección." },
          { objective: "O1", q: "¿Cuál es un proceso de corte que usa un arco eléctrico y un chorro rápido de gas?", options: ["Corte por plasma", "Soldadura con electrodo revestido", "Soldadura TIG", "Soldadura fuerte"], answer: 0, why: "El corte por plasma usa un arco y un chorro rápido de gas para cortar muchos metales." },
          { objective: "O2", q: "Dos placas están una encima de la otra y se sueldan. ¿Qué unión es?", options: ["Unión a tope", "Unión de esquina", "Unión en T", "Unión traslapada"], answer: 3, why: "Una unión traslapada se forma con dos piezas una encima de la otra." },
          { objective: "O2", q: "En un examen de soldadura, ¿qué significa 3G?", options: ["Una soldadura de filete plana", "Una soldadura de filete sobre cabeza", "Una soldadura de ranura vertical", "Una soldadura de ranura horizontal"], answer: 2, why: "La posición 3 es vertical, y G significa soldadura de ranura." },
          { objective: "O3", q: "Una soldadura no se fundió con el metal base. ¿Cómo se llama este defecto?", options: ["Fusión incompleta", "Porosidad", "Salpicaduras", "Socavado"], answer: 0, why: "Fusión incompleta significa que la soldadura no se unió con el metal base." }
        ]
      }
    },
    {
      name: "Capítulo 2: La seguridad y tu camino",
      lessons: [
        {
          title: "Cómo proteger tus ojos, tu piel, tus pulmones y tus oídos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Enumerar el equipo de protección y la ventilación que necesita una tarea de soldadura.",
          text: [
            "Los peligros de la soldadura incluyen una luz muy fuerte, metal y chispas muy calientes, humos y gases, ruido y descargas eléctricas. El Bureau of Labor Statistics (BLS, la Oficina de Estadísticas Laborales de EE. UU.) menciona caretas de soldar, protección auditiva, guantes resistentes al calor y ropa de protección como el equipo que usan los soldadores. Solo vas a aprender a soldar en un taller supervisado, con este equipo.",
            "Ojos y cara: el arco despide luz, incluidos rayos ultravioleta, que pueden quemar tus ojos y tu piel aunque solo lo mires un instante. La regla de soldadura de OSHA (la agencia federal de EE. UU. para la seguridad en el trabajo) exige una careta o una pantalla de mano para soldar con arco, con un lente filtro lo bastante oscuro para el proceso; su tabla da el tono según el proceso y el tamaño (por ejemplo, tono 12 para algunos tamaños comunes de electrodo revestido). Usa lentes de seguridad debajo de la careta y protege a las personas cercanas con mamparas.",
            "Piel: usa ropa resistente a las llamas que cubra brazos y piernas (nada de tela sintética, que se puede derretir), guantes de soldar de cuero y botas de cuero. Pulmones: los humos y gases de la soldadura pueden dañar tu salud. Mantén la cabeza fuera de la columna de humo, usa la ventilación o la extracción de humos, y usa un respirador cuando el programa de tu empleador lo exija. Los recubrimientos como la pintura y el zinc del acero galvanizado producen humos aún más dañinos. Oídos: el esmerilado y algunos procesos hacen mucho ruido, así que usa protección auditiva.",
            "La regla de soldadura de OSHA también dice que nunca se debe usar oxígeno para ventilar, porque hace que el fuego arda mucho más rápido."
          ],
          steps: [
            "Ojos: careta con el tono correcto, lentes de seguridad debajo, mamparas para los demás.",
            "Piel: ropa resistente a las llamas, guantes y botas de cuero, nada sintético.",
            "Pulmones: ventilación o extracción de humos, cabeza fuera de la columna, respirador si se exige.",
            "Oídos: protección auditiva al esmerilar y en trabajos ruidosos."
          ],
          words: [
            ["EPP", "equipo de protección personal: careta, lentes, guantes, ropa, botas, protección auditiva, respirador."],
            ["Tono del filtro", "qué tan oscuro es un lente de soldar; los números más altos son más oscuros."],
            ["Rayos ultravioleta (UV)", "luz invisible del arco que quema los ojos y la piel."],
            ["Humos", "partículas diminutas de metal y gases de la soldadura que pueden dañar tus pulmones y tu salud."],
            ["Columna de humo", "la nube de humo que sube de la soldadura."],
            ["Acero galvanizado", "acero recubierto de zinc; al soldarlo se producen humos dañinos."],
            ["Resistente a las llamas (FR)", "tela hecha para resistir que se prenda fuego."]
          ],
          slides: [
            { title: "Peligros de la soldadura", bullets: ["Luz fuerte y rayos UV", "Metal caliente y chispas", "Humos y gases; ruido; descargas"] },
            { title: "Ojos y cara", bullets: ["Careta con el tono de filtro correcto (tabla de OSHA)", "Lentes de seguridad debajo de la careta", "Las mamparas protegen a las personas cercanas"] },
            { title: "Piel y pulmones", bullets: ["Ropa resistente a las llamas, guantes de cuero, botas", "Cabeza fuera de la columna; ventilación encendida", "Respirador cuando se exige; cuidado con los recubrimientos"] },
            { title: "Oídos y aire", bullets: ["Protección auditiva al esmerilar", "Nunca uses oxígeno para ventilar"] }
          ],
          sources: [
            { name: "OSHA: Soldadura, corte y soldadura fuerte, requisitos generales, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA: Normas de soldadura, corte y soldadura fuerte", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Soldadores, cortadores y soldadores de estaño y fuerte", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Empieza tu lista de seguridad antes de soldar para este trabajo: \"Soldar con MIG soportes de acero en un taller.\" Escribe cuatro títulos: Ojos, Piel, Pulmones, Oídos. Debajo de cada uno, anota el equipo o el paso de la lección. Luego agrega una línea sobre qué revisar si el acero está pintado o galvanizado. Guárdala: se convierte en la parte 3 de tu tarea final.",
          youCanNow: "enumerar el equipo y la ventilación que protegen los ojos, la piel, los pulmones y los oídos de un soldador.",
          quickCheck: [
            { objective: "O4", q: "¿Qué ropa es la opción segura para soldar?", options: ["Un pants deportivo de poliéster", "Shorts y una camiseta", "Una chaqueta de nailon", "Ropa resistente a las llamas que cubra brazos y piernas"], answer: 3, why: "Las telas sintéticas se pueden derretir sobre la piel; la ropa resistente a las llamas que te cubre protege de las chispas y los rayos UV." },
            { objective: "O4", q: "Ves humo que sube de la soldadura. ¿Qué haces con la cabeza?", options: ["Te acercas para ver mejor", "La mantienes fuera de la columna de humo y usas la ventilación", "Aguantas la respiración", "Te quitas la careta"], answer: 1, why: "Mantenerte fuera de la columna y usar la ventilación reduce los humos que respiras." }
          ]
        },
        {
          title: "Incendios, descargas eléctricas y trabajo en caliente",
          objectives: ["O4"],
          minutes: 6,
          goal: "Enumerar las precauciones contra incendios y descargas que hay que tomar antes, durante y después de soldar.",
          text: [
            "Las chispas y la escoria caliente pueden volar lejos y empezar incendios en lugares que no ves. La regla de soldadura de OSHA (29 CFR 1910.252) dice que, cuando sea posible, las cosas que pueden arder deben moverse al menos a 35 pies del trabajo, o cubrirse o protegerse si no se pueden mover. Solo se suelda en áreas que son seguras contra incendios, o que se han hecho seguras, después de que la persona responsable revise el área; lo mejor es dar esa aprobación con un permiso escrito, que muchas veces se llama permiso de trabajo en caliente.",
            "Cuando podría empezar un incendio, por ejemplo si hay cosas que arden a menos de 35 pies, se exige un vigilante de incendios: una persona que vigila que no haya fuego, con un extintor listo. OSHA dice que el vigilante debe quedarse al menos media hora después de terminar de soldar o de cortar, porque las cosas pueden quedar ardiendo sin llama y prenderse después.",
            "Descarga eléctrica: el arco usa corriente eléctrica. Mantén secos los guantes y la ropa, no te pares en agua ni en suelo mojado, revisa que los cables no estén dañados antes de usarlos y nunca toques el electrodo y el metal al mismo tiempo. Según el BLS, los soldadores deben recibir capacitación de OSHA en seguridad eléctrica.",
            "Los cilindros de gas para MIG, TIG y corte se deben manejar como te enseñe tu capacitación: de pie y sujetos para que no se puedan caer. Los espacios confinados, como los tanques, exigen capacitación especial, permisos y ventilación; nunca entres a uno sin ellos."
          ],
          steps: [
            "Antes: consigue el permiso, aleja a 35 pies lo que pueda arder o cúbrelo, ten un extintor listo.",
            "Pon un vigilante de incendios cuando podría empezar un incendio.",
            "Durante: mantente seco, revisa los cables, mantén el área despejada.",
            "Después: el vigilante de incendios se queda al menos 30 minutos."
          ],
          words: [
            ["Trabajo en caliente", "soldar, cortar, esmerilar y otros trabajos que producen chispas o llama."],
            ["Permiso de trabajo en caliente", "una aprobación escrita de que el área se revisó y se hizo segura contra incendios antes del trabajo en caliente."],
            ["Vigilante de incendios", "una persona capacitada que vigila que no haya fuego durante el trabajo en caliente y después, con un extintor listo."],
            ["Escoria", "la costra dura que queda en algunas soldaduras; está muy caliente cuando se desprende."],
            ["Espacio confinado", "un espacio como un tanque o un pozo, difícil para entrar y salir; exige capacitación especial y permisos."]
          ],
          slides: [
            { title: "Antes de soldar", bullets: ["Permiso de trabajo en caliente: área revisada y segura", "Aleja a 35 pies lo que pueda arder, o cúbrelo", "Extintor listo"] },
            { title: "Vigilante de incendios", bullets: ["Se exige cuando podría empezar un incendio", "Se queda al menos 30 minutos después del trabajo"] },
            { title: "Descarga eléctrica", bullets: ["Guantes y ropa secos", "Nunca te pares en agua", "Revisa los cables antes de usarlos"] },
            { title: "Cilindros y espacios confinados", bullets: ["Cilindros de pie y sujetos", "Espacios confinados: primero capacitación y permisos"] }
          ],
          sources: [
            { name: "OSHA: Soldadura, corte y soldadura fuerte, requisitos generales (prevención de incendios), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Soldadores, cómo llegar a serlo", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Termina tu lista de seguridad antes de soldar. Agrega tres títulos nuevos a la lista de la Lección 4: Incendio antes, Incendio después y Descarga. Debajo escribe: el permiso, la regla de los 35 pies, el extintor, el vigilante de incendios y cuánto tiempo se queda, y tres pasos contra descargas. Lee toda la lista en voz alta como si le explicaras el trabajo a un ayudante nuevo. Es la parte 3 de tu tarea final.",
          youCanNow: "enumerar las precauciones contra incendios y descargas que hay que tomar antes, durante y después de soldar.",
          quickCheck: [
            { objective: "O4", q: "Según OSHA, ¿cuánto tiempo debe quedarse el vigilante de incendios después de terminar de soldar?", options: ["5 minutos", "Nada; se puede ir", "Al menos media hora", "Hasta la hora del almuerzo"], answer: 2, why: "OSHA exige el vigilante de incendios al menos media hora después del trabajo, porque los incendios pueden empezar más tarde." },
            { objective: "O4", q: "Hay cajas de cartón a 15 pies de donde vas a soldar. ¿Qué haces?", options: ["Moverlas al menos a 35 pies, o cubrirlas o protegerlas", "Soldar más rápido", "Rociarlas con oxígeno", "Nada; 15 pies es suficiente"], answer: 0, why: "OSHA dice que, cuando sea posible, las cosas que pueden arder deben moverse al menos a 35 pies, o cubrirse o protegerse." }
          ]
        },
        {
          title: "Capacitación, certificación y tu plan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir un plan con fechas para capacitarte y presentar un examen de certificación de soldador.",
          text: [
            "El Bureau of Labor Statistics dice que los empleadores suelen pedir un diploma de secundaria o su equivalente, más capacitación técnica y en el trabajo. La capacitación se ofrece en clases técnicas de la secundaria, escuelas vocacionales, community colleges, escuelas privadas de soldadura y el ejército. Algunos empleadores tienen programas de aprendiz, y hasta los soldadores ya capacitados suelen recibir varios meses de capacitación en el trabajo. Ayuda saber leer planos, matemáticas de taller y electricidad básica.",
            "Muchos empleadores quieren soldadores certificados. Según la American Welding Society (AWS), su certificación Certified Welder es el punto de entrada más común. Es un examen práctico: sueldas en un proceso, una posición y un material específicos, y tu soldadura se inspecciona según una norma. Lo presentas en un AWS Accredited Test Facility (ATF, centro de examen acreditado por la AWS), y la AWS dice que no se puede obtener una certificación de soldadura totalmente en línea. Algunas certificaciones se deben mantener o volver a presentar, así que revisa las reglas de la tuya en el sitio de la AWS. Algunos empleadores pagan la capacitación y el examen.",
            "Algunos estados y ciudades dan licencias a los soldadores, y las reglas cambian, así que revisa la página oficial del lugar donde trabajas. Antes de pagarle a una escuela, pregunta: ¿te prepara para un examen de la AWS, y puedes presentarlo ahí? ¿Cuántos egresados consiguen trabajo en soldadura? Los veteranos pueden preguntarle al VA (Departamento de Asuntos de Veteranos) por el GI Bill (beneficio de educación para veteranos). Si tienes antecedentes penales, muchos empleadores de soldadura contratan a personas con antecedentes; pregúntale al programa por sus contactos de empleo."
          ],
          steps: [
            "Escribe tu meta, por ejemplo \"trabajo de soldador MIG en un taller de fabricación para el verano\".",
            "Elige el proceso y la posición en los que buscarás certificarte primero, según los anuncios de empleo cerca de ti.",
            "Busca dos programas de capacitación (community college, escuela de soldadura o programa de aprendiz) y sus fechas de inicio.",
            "Busca un AWS Accredited Test Facility cerca de ti en el sitio de la AWS.",
            "Revisa las reglas de tu estado o ciudad, y agrega una fecha para cada paso."
          ],
          words: [
            ["AWS", "la American Welding Society (Sociedad Americana de Soldadura), que maneja el programa Certified Welder y otras certificaciones de soldadura."],
            ["Certified Welder", "una certificación de la AWS que se obtiene al aprobar un examen práctico de soldadura en un proceso, una posición y un material fijos."],
            ["Accredited Test Facility (ATF)", "un lugar aprobado por la AWS para dar exámenes de certificación de soldador."],
            ["Examen práctico", "un examen en el que haces la tarea; aquí, soldar una pieza de prueba que luego se inspecciona."],
            ["Taller de fabricación", "un taller que corta, da forma y suelda metal para hacer piezas y estructuras."]
          ],
          slides: [
            { title: "Formas de capacitarte", bullets: ["Community college o escuela de soldadura", "Clases técnicas de secundaria; el ejército", "Programa de aprendiz y capacitación en el trabajo"] },
            { title: "AWS Certified Welder", bullets: ["Examen práctico: proceso, posición, material", "En un AWS Accredited Test Facility", "No se puede obtener totalmente en línea"] },
            { title: "Antes de pagar", bullets: ["¿Te prepara para un examen de la AWS?", "¿Cuántos egresados consiguen trabajo en soldadura?", "Revisa las reglas de tu estado o ciudad"] },
            { title: "Tu plan", bullets: ["Meta, proceso y posición", "Dos programas y un centro de examen", "Una fecha para cada paso"] }
          ],
          sources: [
            { name: "American Welding Society: Certificación", url: "https://www.aws.org/certification/" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Soldadores, cómo llegar a serlo", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov: Buscador de programas de aprendiz", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Buscador de licencias", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tarea final: haz tu plan para empezar en la soldadura. Junta tu tabla de procesos (Lección 1), tu hoja de lectura con uniones, posiciones y defectos (Lecciones 2 y 3) y tu lista de seguridad (Lecciones 4 y 5). Luego escribe tu plan con fechas: tu meta, el proceso y la posición en los que buscarás certificarte, dos programas de capacitación cerca de ti con sus fechas de inicio, un AWS Accredited Test Facility, qué exige tu estado o ciudad (con la dirección web) y una fecha para cada paso.",
          youCanNow: "seguir tu propio plan con fechas para capacitarte y presentar un examen de certificación de soldador.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde se presenta el examen AWS Certified Welder?", options: ["Totalmente en línea desde casa", "En cualquier ferretería", "En un AWS Accredited Test Facility", "En este curso"], answer: 2, why: "La AWS dice que la certificación se obtiene presentando el examen en un Accredited Test Facility, no totalmente en línea." },
            { objective: "O5", q: "¿Qué tipo de examen es el AWS Certified Welder?", options: ["Un examen de mecanografía", "Un examen práctico en el que sueldas una pieza que luego se inspecciona", "Un ensayo", "Solo una entrevista"], answer: 1, why: "Es un examen práctico en un proceso, una posición y un material específicos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La seguridad y tu camino",
        questions: [
          { objective: "O4", q: "¿Por qué nunca debes mirar un arco ni un instante sin protección para los ojos?", options: ["Es de mala educación", "Su luz, incluidos los rayos UV, puede quemarte los ojos", "Debilita la soldadura", "Gasta más gas"], answer: 1, why: "La luz del arco puede quemarte los ojos aunque solo lo mires un instante." },
          { objective: "O4", q: "El acero que vas a soldar es galvanizado (recubierto de zinc). ¿Por qué importa?", options: ["Produce humos aún más dañinos, así que la ventilación y la protección correcta importan más", "No se puede soldar para nada", "Hace la soldadura más fuerte", "No importa"], answer: 0, why: "Los recubrimientos como el zinc producen humos dañinos al calentarse." },
          { objective: "O4", q: "¿Cuál es una forma segura de evitar una descarga eléctrica al soldar?", options: ["Soldar parado en un charco", "Usar guantes mojados para estar fresco", "Usar un cable con el aislante agrietado", "Mantener secos los guantes y la ropa y revisar primero los cables"], answer: 3, why: "El equipo seco y los cables sin daños evitan que la corriente pase por tu cuerpo." },
          { objective: "O5", q: "¿Qué pregunta te ayuda más antes de pagarle a una escuela de soldadura?", options: ["¿De qué color es el logotipo?", "¿El estacionamiento es gratis?", "¿Te prepara para un examen de la AWS, y cuántos egresados consiguen trabajo en soldadura?", "¿Qué tan grande es la recepción?"], answer: 2, why: "Saber si un programa lleva a la certificación y al empleo te dice si vale lo que cuesta." },
          { objective: "O5", q: "¿Qué paso del plan está completo?", options: ["\"Aprender a soldar\"", "\"Certificarme algún día\"", "\"Ver escuelas\"", "\"Presentar el examen AWS Certified Welder en MIG, posición plana, en el ATF del college antes del 20 de mayo\""], answer: 3, why: "Nombra el examen, el proceso y la posición, el lugar y una fecha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos de soldadura",
    questions: [
      { objective: "O1", q: "¿Qué hace la soldadura?", options: ["Pega metal con cinta", "Derrite metal para que las piezas se unan en una sola", "Pinta metal", "Dobla metal en frío"], answer: 1, why: "La soldadura derrite el metal para que las piezas se mezclen y se endurezcan como una sola." },
      { objective: "O1", q: "¿Qué proceso usa una varilla recubierta de fundente y funciona bien al aire libre?", options: ["Electrodo revestido (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Corte por plasma"], answer: 0, why: "La soldadura con electrodo revestido usa una varilla recubierta y no necesita gas de protección que el viento se pueda llevar." },
      { objective: "O1", q: "¿Qué proceso usa un electrodo de tungsteno y una varilla de aporte aparte?", options: ["Alambre tubular", "Electrodo revestido", "Oxicorte", "TIG (GTAW)"], answer: 3, why: "TIG usa un electrodo de tungsteno, y el soldador agrega el metal de aporte a mano." },
      { objective: "O1", q: "¿Por qué una soldadura necesita protección?", options: ["Para que brille", "Para que se enfríe más rápido", "Para mantener el aire lejos y que la soldadura quede fuerte", "Para que haga más ruido"], answer: 2, why: "El gas o el fundente mantiene el aire lejos del metal caliente." },
      { objective: "O2", q: "Dos piezas están borde con borde en línea recta. ¿Qué unión es?", options: ["Unión traslapada", "Unión a tope", "Unión de esquina", "Unión en T"], answer: 1, why: "Una unión a tope son dos piezas que se juntan borde con borde." },
      { objective: "O2", q: "¿Qué posición de soldadura suele ser la más difícil?", options: ["Plana", "Horizontal", "Sobre cabeza", "No hay una más difícil"], answer: 2, why: "Al soldar sobre cabeza se trabaja desde abajo, contra la gravedad." },
      { objective: "O2", q: "En un símbolo de soldadura, ¿qué significa un triángulo pequeño?", options: ["Una soldadura de filete", "Una soldadura de ranura", "Detener el trabajo", "La cola"], answer: 0, why: "El triángulo es el símbolo de la soldadura de filete." },
      { objective: "O2", q: "El símbolo de soldadura está arriba de la línea de referencia. ¿Dónde va la soldadura?", options: ["Del lado de la flecha", "De los dos lados", "En ningún lado", "Del otro lado"], answer: 3, why: "Arriba de la línea significa el otro lado; abajo significa el lado de la flecha." },
      { objective: "O3", q: "¿Qué describe una buena soldadura?", options: ["Muchos agujeros en la superficie", "Una ranura en los bordes", "Ancho y forma parejos, fundida con las dos piezas", "Muchas salpicaduras alrededor"], answer: 2, why: "Una buena soldadura es pareja, se funde con las piezas y no tiene agujeros ni grietas." },
      { objective: "O3", q: "¿Cuál es una causa probable de porosidad?", options: ["Metal sucio o mal gas de protección", "Una careta oscura", "Metal limpio y seco", "Usar guantes de cuero"], answer: 0, why: "La suciedad y la mala protección dejan gas atrapado en forma de agujeros." },
      { objective: "O3", q: "¿Qué defecto es una línea a través de la soldadura o junto a ella y es muy grave?", options: ["Salpicaduras", "Una grieta", "Traslape", "Porosidad"], answer: 1, why: "Las grietas pueden hacer que una soldadura falle y son defectos graves." },
      { objective: "O3", q: "Una soldadura no se fundió con el metal base. ¿Cuál es una causa probable?", options: ["Exceso de calor", "Usar careta", "Limpiar el metal", "Poco calor o avanzar muy rápido"], answer: 3, why: "La fusión incompleta muchas veces viene de poco calor o de una velocidad de avance muy rápida." },
      { objective: "O4", q: "¿Qué exige OSHA para proteger los ojos al soldar con arco?", options: ["Lentes de sol", "Una careta o pantalla de mano con el lente filtro correcto", "Nada si es rápido", "Un cubrebocas para el polvo"], answer: 1, why: "OSHA exige una careta o una pantalla de mano con lente filtro para soldar con arco." },
      { objective: "O4", q: "¿Qué nunca se debe usar para ventilar un área de soldadura?", options: ["Un ventilador", "Extracción de humos", "Oxígeno", "Puertas abiertas"], answer: 2, why: "El oxígeno hace que el fuego arda mucho más rápido; OSHA dice que nunca se use para ventilar." },
      { objective: "O4", q: "Según OSHA, ¿a qué distancia de la soldadura deben moverse las cosas que pueden arder, cuando sea posible?", options: ["Al menos a 35 pies", "A 5 pies", "A 10 pies", "No hace falta moverlas"], answer: 0, why: "La regla de OSHA dice al menos 35 pies, o cubrirlas o protegerlas." },
      { objective: "O4", q: "¿Qué es un vigilante de incendios?", options: ["Un reloj en el taller", "Una alarma de humo", "Un tipo de careta", "Una persona que vigila que no haya fuego durante y después del trabajo en caliente, con un extintor"], answer: 3, why: "El vigilante de incendios vigila que no haya fuego y se queda al menos media hora después del trabajo." },
      { objective: "O5", q: "Este curso:", options: ["Te da una certificación de la AWS", "Te da una licencia de soldador", "Te prepara para la capacitación y el examen; no te certifica", "Te permite soldar en casa"], answer: 2, why: "La certificación se obtiene con un examen práctico en un Accredited Test Facility." },
      { objective: "O5", q: "¿Se puede obtener una certificación de soldadura de la AWS totalmente en línea?", options: ["No; el examen se presenta en persona en un Accredited Test Facility", "Sí, con un video", "Sí, leyendo un libro", "Sí, haciendo este examen"], answer: 0, why: "La AWS dice que la certificación de soldadura no se puede obtener totalmente en línea." },
      { objective: "O5", q: "¿Quién dice qué licencia necesita un soldador, si necesita alguna, donde trabajas?", options: ["Un video de soldadura", "El estado o la ciudad, en su página oficial", "Un anuncio de empleo", "Tus amigos"], answer: 1, why: "Algunos estados y ciudades dan licencias a los soldadores; la página oficial tiene las reglas." },
      { objective: "O5", q: "¿Qué te ayuda a elegir en qué proceso certificarte primero?", options: ["Tu color favorito", "La careta más barata", "Adivinar", "Los procesos que piden los anuncios de empleo cerca de ti"], answer: 3, why: "Los anuncios de empleo muestran qué procesos buscan los empleadores de tu zona." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Tabla de procesos", objective: "O1", notYet: "Menos de cuatro procesos, o los trabajos no corresponden al proceso.", meets: "Cuatro procesos, cada uno con un trabajo real que le corresponde.", exceeds: "Además dice por qué conviene cada proceso, con palabras como al aire libre, metal delgado o rapidez." },
      { name: "Uniones, posiciones y símbolos", objective: "O2", notYet: "Faltan uniones o posiciones, o tienen el nombre equivocado.", meets: "Las cinco uniones dibujadas y nombradas, y las cuatro posiciones anotadas con sus números.", exceeds: "Además lee bien un símbolo de soldadura: lado, tipo y tamaño." },
      { name: "Lista de defectos", objective: "O3", notYet: "Menos de cinco defectos, o las causas están mal.", meets: "Cinco defectos, cada uno con una causa probable.", exceeds: "Además dice cómo revisaría el taller cada defecto." },
      { name: "Lista de seguridad", objective: "O4", notYet: "Faltan ojos, piel, pulmones, oídos, incendio o descarga.", meets: "Cubre ojos, piel, pulmones, oídos, descarga y al menos tres precauciones contra incendios, entre ellas la regla de los 35 pies y el vigilante de incendios.", exceeds: "Además cubre metal recubierto, cilindros y el permiso de trabajo en caliente, y es tan clara que sirve para explicarle el trabajo a un ayudante nuevo." },
      { name: "Plan con fechas de fuentes oficiales", objective: "O5", notYet: "Los pasos no tienen fechas, o las reglas salen de anuncios o publicaciones.", meets: "Dos programas reales, un AWS Accredited Test Facility, las reglas del estado o la ciudad con la dirección web oficial y una fecha para cada paso.", exceeds: "Además anota las preguntas hechas a cada programa y un plan B, como un trabajo de ayudante mientras se capacita." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de soldadura o de aprendiz en un plazo de 90 días",
      "Participantes que aprueban un examen de certificación de soldador en un plazo de 12 meses (según ellos mismos en el seguimiento)",
      "Participantes contratados como soldadores o ayudantes de soldador en un plazo de 6 meses",
      "Los programas aliados informan que los nuevos estudiantes llegan sabiendo las palabras básicas y los pasos de seguridad"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas de la AWS, OSHA, el BLS y el estado, y para fotos de soldaduras",
      "Papel, lápiz, tijeras y tiras de papel o cartón para los modelos de uniones",
      "Opcional: muestras de soldaduras (buenas y malas) de una escuela o un taller local para mirarlas, nunca para hacerlas",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En este curso no se suelda, no se corta ni se esmerila. El trabajo práctico se hace en un taller supervisado, con todo el EPP.",
      "Si puedes, lleva muestras de soldaduras o una careta y guantes usados para que los participantes los miren y los toquen (solo piezas frías y limpias).",
      "Invita a un instructor de soldadura, a un AWS Accredited Test Facility o a un taller de fabricación local para que hablen de lo que buscan.",
      "Ayuda a cada participante a revisar las reglas de su propio estado o ciudad; no des una sola respuesta para todo el grupo.",
      "A los participantes con antecedentes o a los veteranos, conéctalos con servicios de reinserción o para veteranos; no prometas ningún resultado.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila Todavía no a la vez."
    ]
  }
};

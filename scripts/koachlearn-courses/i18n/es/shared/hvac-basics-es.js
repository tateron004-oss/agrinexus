"use strict";

// Koach Learn course (Spanish translation of shared/hvac-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "hvac-basics-es",
  lang: "es",
  translationOf: "hvac-basics",
  category: "Workforce Development",
  name: "Fundamentos para técnicos de HVAC",
  skills: "Nombrar las partes de un sistema de calefacción y aire acondicionado, Seguir el ciclo de refrigeración, Leer placas de datos y hacer cálculos de HVAC, Reconocer los peligros del trabajo en HVAC, Elegir la certificación EPA Section 608 correcta, Planear tu camino hacia el HVAC",
  outcome: "explicar cómo funciona el sistema de calefacción y aire acondicionado de una casa, leer sus números, nombrar los peligros del trabajo y cómo protegerte, elegir la certificación EPA Section 608 que necesitas y seguir un plan con fechas para capacitarte, certificarte y conseguir trabajo como ayudante o aprendiz de HVAC.",
  about: [
    "Los técnicos de HVAC (calefacción, ventilación y aire acondicionado) mantienen calientes en invierno y frescos en verano las casas, escuelas, tiendas y hospitales. Es un trabajo práctico, hace falta en todos los pueblos y ciudades, y mucha gente empieza como ayudante o aprendiz y aprende trabajando. Este curso es para quien esté pensando en ese camino: personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan de prisión, inmigrantes y adultos que vuelven a estudiar.",
    "Vas a aprender las partes principales de un sistema y cómo un aire acondicionado mueve el calor, leer los números de los filtros y de las etiquetas de los equipos, y hacer los cálculos sencillos que los técnicos usan todos los días. Después vas a aprender los peligros del trabajo, la certificación federal EPA Section 608 (de la Agencia de Protección Ambiental de EE. UU.) que deben tener los técnicos que manejan refrigerante, y las formas de entrar al oficio.",
    "Este curso te prepara. No te da una licencia ni un certificado. La certificación EPA Section 608 solo se obtiene al aprobar un examen con una organización certificadora aprobada por la EPA, y algunos estados y ciudades también exigen licencia para trabajar en HVAC. El trabajo práctico con refrigerante y electricidad solo se aprende en un programa de capacitación supervisado, con el equipo de protección adecuado.",
    "Cada lección dura unos cinco minutos, con una tarea corta de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio plan para empezar en HVAC, con fechas reales."
  ],
  finalTask: "Haz tu plan para empezar en HVAC: (1) un dibujo a mano del ciclo de refrigeración con las cuatro partes principales marcadas en orden y una oración sobre lo que hace cada una; (2) una lista de peligros de un trabajo de HVAC con la protección para cada peligro; y (3) un plan con fechas que diga qué tipo de certificación EPA Section 608 vas a tomar, una organización certificadora aprobada por la EPA, dos programas de capacitación o aprendizajes cerca de ti, qué exige tu estado o ciudad para una licencia de HVAC (según la página oficial) y una fecha para cada paso.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan un trabajo calificado que no exige un título universitario de cuatro años: personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan de prisión, inmigrantes y adultos que vuelven a estudiar. Algunas han hecho trabajo práctico (mantenimiento, el ejército, construcción, mecánica de autos); muchas nunca han trabajado con equipos de calefacción o de aire acondicionado.",
    startingPoint: "Pueden leer instrucciones cortas y hacer cálculos con números enteros. La mayoría sabe que un termostato controla la calefacción y el aire acondicionado, pero no puede nombrar las partes de un sistema, explicar cómo enfría ni decir qué certificación exige el trabajo en HVAC.",
    gap: "Los empleadores que contratan ayudantes y aprendices de HVAC buscan personas que conozcan las partes y palabras básicas, que tomen en serio la seguridad y que vayan en camino a la certificación EPA Section 608. Los participantes necesitan esa base, más un plan claro y honesto con fechas, para presentarse con confianza y no pagar una capacitación que no lleva a un trabajo.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); se explica cada palabra del oficio",
      "En este curso no hay trabajo práctico con refrigerante, electricidad ni soldadura fuerte: eso exige capacitación supervisada y el equipo de protección adecuado",
      "Dispositivos: un teléfono o una computadora de la biblioteca para leer páginas oficiales; papel y lápiz para dibujos y planes",
      "Tiempo: lecciones de 5 a 6 minutos que quepan entre el trabajo y las citas",
      "Las reglas cambian según el estado y la ciudad: cada participante revisa las licencias en la página oficial del lugar donde vive"
    ],
    prerequisites: "Ninguno. \"Empezar una carrera en los oficios calificados\" es un buen primer paso para elegir un oficio; este curso profundiza en el HVAC."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un dibujo o una foto de un sistema dividido de una casa", action: "nombrar las partes principales de un sistema de calefacción y aire acondicionado y seguir el ciclo de refrigeración en orden", standard: "con las cuatro partes principales del ciclo en el orden correcto y lo que hace cada una" },
    { id: "O2", condition: "Con la descripción de un trabajo de HVAC", action: "enumerar los peligros del trabajo y la protección para cada uno", standard: "nombrando al menos cinco peligros, cada uno con un paso seguro o un equipo de protección" },
    { id: "O3", condition: "Con un filtro, una placa de datos de un equipo o dos lecturas de temperatura", action: "leer los tamaños y las especificaciones y hacer cálculos sencillos de HVAC", standard: "acertando al menos 4 de 5 ejercicios de práctica" },
    { id: "O4", condition: "Con una lista de equipos y situaciones con refrigerante", action: "asignar a cada uno el tipo correcto de certificación EPA Section 608 y la regla de refrigerante que aplica", standard: "acertando al menos 4 de 5" },
    { id: "O5", condition: "Usando los sitios web oficiales de tu estado", action: "escribir un plan con fechas para capacitarte, presentar el examen EPA Section 608 y solicitar un trabajo de ayudante o aprendiz de HVAC", standard: "con al menos cinco pasos con fecha y una fuente oficial para cada requisito" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los sistemas de calefacción y aire acondicionado",
      lessons: [
        {
          title: "Qué hace un técnico de HVAC y las partes principales",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes principales del sistema de calefacción y aire acondicionado de una casa y decir qué hace cada una.",
          text: [
            "HVAC son las siglas en inglés de calefacción, ventilación y aire acondicionado. También verás HVACR, que agrega la refrigeración (cuartos fríos, máquinas de hielo). Los técnicos de HVAC instalan sistemas nuevos, hacen mantenimiento regular, averiguan por qué un sistema dejó de funcionar y lo reparan.",
            "Muchas casas tienen un sistema dividido (split): una parte está afuera y otra adentro. La unidad exterior tiene el compresor y el serpentín exterior (el condensador). La parte interior es un calentador (furnace) o una manejadora de aire con un ventilador soplador y un serpentín interior (el evaporador). Unos tubos llamados línea de refrigerante llevan el refrigerante entre las dos.",
            "El termostato en la pared es el control: le dice al sistema cuándo calentar o enfriar. El soplador empuja el aire por los ductos. Las rejillas de suministro mandan aire a los cuartos y las rejillas de retorno jalan el aire del cuarto de regreso. El filtro de aire limpia ese aire antes de que llegue al equipo.",
            "Una bomba de calor se parece a un aire acondicionado, pero también puede funcionar al revés para calentar la casa. Un calentador produce calor quemando gas o aceite, o con piezas eléctricas de calefacción."
          ],
          words: [
            ["HVAC", "calefacción, ventilación y aire acondicionado (siglas en inglés). HVACR agrega la refrigeración."],
            ["Sistema dividido", "un sistema con una unidad afuera y otra adentro, unidas por tubos de refrigerante."],
            ["Termostato", "el control en la pared que le dice al sistema cuándo calentar o enfriar."],
            ["Ductos", "los tubos de metal o flexibles que llevan el aire hacia los cuartos y de regreso."],
            ["Bomba de calor", "un sistema que enfría en verano y puede funcionar al revés para calentar en invierno."],
            ["Línea de refrigerante", "el par de tubos de cobre que llevan el refrigerante entre la unidad exterior y la interior."]
          ],
          slides: [
            { title: "Qué hacen los técnicos de HVAC", bullets: ["Instalan sistemas nuevos", "Hacen mantenimiento regular", "Encuentran el problema y lo reparan"] },
            { title: "Afuera: la unidad exterior", bullets: ["Compresor", "Serpentín exterior (condensador) y ventilador"] },
            { title: "Adentro: calentador o manejadora de aire", bullets: ["El soplador mueve el aire", "Serpentín interior (evaporador)", "El filtro de aire limpia el aire primero"] },
            { title: "Control y caminos del aire", bullets: ["Termostato: le dice cuándo funcionar", "Rejillas de suministro mandan aire; las de retorno lo jalan de regreso", "Los ductos llevan el aire"] }
          ],
          tryIt: "Observa la calefacción y el aire acondicionado de tu casa, escuela o una tienda (solo por fuera; nunca abras un panel). O busca una foto de un \"aire acondicionado de sistema dividido\". En papel, anota cada parte que veas: termostato, rejillas, filtro, unidad exterior, tubos. Al lado de cada una, escribe una línea sobre lo que hace.",
          youCanNow: "nombrar las partes principales del sistema de calefacción y aire acondicionado de una casa y decir qué hace cada parte.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte le dice al sistema cuándo calentar o enfriar?", options: ["Los ductos", "El filtro de aire", "El termostato", "El serpentín exterior"], answer: 2, why: "El termostato es el control; le indica al sistema cuándo arrancar y cuándo parar." },
            { objective: "O1", q: "En un sistema dividido de una casa, ¿dónde suele estar el compresor?", options: ["En la unidad exterior", "Dentro del termostato", "Detrás del filtro de aire", "En una rejilla de retorno"], answer: 0, why: "En un sistema dividido, el compresor está en la unidad exterior junto con el serpentín exterior." }
          ]
        },
        {
          title: "Cómo un aire acondicionado mueve el calor",
          objectives: ["O1"],
          minutes: 6,
          goal: "Seguir el ciclo de refrigeración por sus cuatro partes principales, en orden.",
          text: [
            "Un aire acondicionado no fabrica frío. Mueve el calor de adentro de la casa hacia afuera. Un fluido especial llamado refrigerante lleva ese calor por un circuito cerrado de tubos. Ese circuito se llama ciclo de refrigeración.",
            "1. El compresor aprieta el vapor de refrigerante, y este se vuelve caliente y de alta presión. 2. En el condensador (el serpentín exterior) un ventilador sopla aire de afuera sobre el serpentín caliente; el refrigerante suelta su calor y se vuelve líquido. 3. El dispositivo de medición (muchas veces una válvula de expansión) deja pasar el líquido por una abertura pequeña, así que su presión baja y se pone muy frío. 4. En el evaporador (el serpentín interior) el aire tibio del cuarto pasa sobre el serpentín frío; el refrigerante absorbe el calor y hierve hasta volverse vapor otra vez. Luego regresa al compresor y el ciclo empieza de nuevo.",
            "Una bomba de calor usa las mismas cuatro partes. En invierno, una válvula de inversión manda el refrigerante en sentido contrario, así que el calor se toma afuera y se suelta adentro.",
            "Conocer el ciclo es la forma en que los técnicos encuentran problemas. Por ejemplo, si el serpentín exterior está tapado de suciedad, el calor no puede salir y el sistema enfría mal."
          ],
          steps: [
            "Compresor: aprieta el vapor para que quede caliente y de alta presión.",
            "Condensador (serpentín exterior): suelta el calor afuera; el refrigerante se vuelve líquido.",
            "Dispositivo de medición: baja la presión, así que el líquido se pone muy frío.",
            "Evaporador (serpentín interior): absorbe el calor del aire del cuarto; el refrigerante se vuelve vapor y regresa al compresor."
          ],
          words: [
            ["Refrigerante", "el fluido dentro del sistema que lleva el calor de un lugar a otro."],
            ["Ciclo de refrigeración", "el recorrido del refrigerante: compresor, condensador, dispositivo de medición, evaporador."],
            ["Compresor", "la bomba que aprieta el vapor de refrigerante para que se ponga caliente y de alta presión."],
            ["Condensador", "el serpentín donde el refrigerante suelta calor y se vuelve líquido; está afuera en un aire acondicionado de casa."],
            ["Dispositivo de medición", "la parte (muchas veces una válvula de expansión) que baja la presión del refrigerante para que se enfríe."],
            ["Evaporador", "el serpentín donde el refrigerante absorbe calor y se vuelve vapor; está adentro en un aire acondicionado de casa."],
            ["Válvula de inversión", "la parte de una bomba de calor que cambia el sentido del refrigerante para calentar."]
          ],
          slides: [
            { title: "El aire acondicionado mueve calor; no fabrica frío", bullets: ["El refrigerante lleva el calor en un circuito cerrado", "El calor va de adentro hacia afuera"] },
            { title: "El ciclo, en orden", bullets: ["1. Compresor: vapor caliente y de alta presión", "2. Condensador: suelta calor, se vuelve líquido", "3. Dispositivo de medición: baja la presión, se enfría", "4. Evaporador: absorbe el calor del cuarto, se vuelve vapor"] },
            { title: "Bombas de calor", bullets: ["Las mismas cuatro partes", "La válvula de inversión lo hace funcionar al revés para calentar"] },
            { title: "Por qué los técnicos aprenden esto", bullets: ["El ciclo explica la mayoría de los problemas", "Ejemplo: serpentín exterior sucio = el calor no puede salir"] }
          ],
          tryIt: "Sin mirar, dibuja un círculo en papel y escribe alrededor las cuatro partes del ciclo en orden: compresor, condensador, dispositivo de medición, evaporador. Dibuja flechas. Marca qué partes están afuera y cuáles adentro, y escribe \"caliente\" o \"frío\" junto a cada una. Luego compara tu dibujo con la lección. Guárdalo: es la parte 1 de tu tarea final.",
          youCanNow: "seguir el ciclo de refrigeración en orden y decir qué hace cada una de las cuatro partes principales.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte suelta el calor afuera de la casa?", options: ["El evaporador", "El termostato", "El filtro de aire", "El condensador"], answer: 3, why: "El condensador es el serpentín exterior, donde el refrigerante suelta su calor y se vuelve líquido." },
            { objective: "O1", q: "En el ciclo, ¿qué viene justo después del dispositivo de medición?", options: ["El compresor", "El evaporador", "El condensador", "El termostato"], answer: 1, why: "El líquido frío que sale del dispositivo de medición entra al evaporador para absorber el calor del aire del cuarto." }
          ]
        },
        {
          title: "Leer los números: filtros, placas de datos y temperaturas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Leer el tamaño de un filtro y la placa de datos de un equipo, y hacer cálculos sencillos de HVAC.",
          text: [
            "Los filtros traen su tamaño impreso en el borde, por ejemplo 16 x 25 x 1. Eso quiere decir 16 pulgadas por 25 pulgadas, y 1 pulgada de grosor. Una flecha indica hacia dónde va el aire: apunta hacia el soplador, lejos de la rejilla de retorno. Un filtro puesto al revés o del tamaño equivocado deja pasar suciedad al equipo.",
            "Cada unidad tiene una placa de datos (una etiqueta de metal o adhesiva) con los números de modelo y de serie, los voltios con los que funciona, las especificaciones eléctricas en amperios, y el tipo y la cantidad de refrigerante. Los técnicos leen la placa antes de pedir piezas o de revisar la alimentación eléctrica. La capacidad de enfriamiento muchas veces se da en BTU por hora o en toneladas. Una tonelada de enfriamiento es 12,000 BTU por hora, así que una unidad de 36,000 BTU es de 3 toneladas.",
            "La diferencia de temperatura es una revisión sencilla: mide el aire que entra por el retorno y el aire que sale por una rejilla de suministro, y luego resta. Si el aire de retorno está a 75°F y el aire de suministro a 57°F, la diferencia es de 18°F. El rango normal depende del sistema y de las condiciones; tu instructor y los documentos del fabricante te dicen qué esperar. Por ahora solo practicas la lectura y el cálculo.",
            "Solo práctica: todos los números de esta lección son inventados para aprender. No abras ningún panel de un equipo para buscar una placa de datos; lee una que se vea desde afuera o mira una foto."
          ],
          steps: [
            "Filtro: lee los tres números (ancho x alto x grosor) y encuentra la flecha del flujo de aire.",
            "Placa de datos: encuentra los números de modelo y de serie, los voltios, los amperios y el tipo de refrigerante.",
            "Capacidad: divide los BTU por hora entre 12,000 para obtener las toneladas.",
            "Diferencia de temperatura: temperatura del aire de retorno menos temperatura del aire de suministro."
          ],
          words: [
            ["Placa de datos", "la etiqueta de una unidad con su modelo, número de serie, especificaciones eléctricas y tipo de refrigerante."],
            ["BTU", "unidad térmica británica: una medida de calor. La capacidad de enfriamiento y de calefacción se da en BTU por hora."],
            ["Tonelada (de enfriamiento)", "12,000 BTU por hora de enfriamiento. Una unidad de 2 toneladas es de 24,000 BTU por hora."],
            ["Voltios y amperios", "los voltios son el empuje eléctrico; los amperios son la cantidad de corriente eléctrica que pasa."],
            ["Aire de retorno y aire de suministro", "el aire de retorno se jala de regreso desde los cuartos; el aire de suministro se manda a los cuartos."],
            ["Diferencia de temperatura", "la diferencia entre la temperatura del aire de retorno y la del aire de suministro."]
          ],
          slides: [
            { title: "Tamaños de filtro", bullets: ["16 x 25 x 1 = 16 por 25 pulgadas, 1 pulgada de grosor", "La flecha apunta hacia el soplador", "Del tamaño equivocado o al revés deja pasar suciedad"] },
            { title: "La placa de datos", bullets: ["Números de modelo y de serie", "Voltios y amperios", "Tipo y cantidad de refrigerante"] },
            { title: "Toneladas y BTU", bullets: ["1 tonelada = 12,000 BTU por hora", "36,000 BTU = 3 toneladas", "Divide los BTU entre 12,000"] },
            { title: "Diferencia de temperatura", bullets: ["Aire de retorno menos aire de suministro", "75°F - 57°F = 18°F", "Rango normal: según tu instructor y el fabricante"] }
          ],
          tryIt: "Solo práctica. Resuelve y escribe tu procedimiento: (1) Un filtro dice 20 x 20 x 1. ¿Qué grosor tiene? (2) Una unidad es de 24,000 BTU por hora. ¿Cuántas toneladas? (3) Una unidad es de 60,000 BTU por hora. ¿Cuántas toneladas? (4) Aire de retorno 78°F, aire de suministro 60°F. ¿Cuál es la diferencia? (5) Busca un filtro en tu casa o una foto en internet y anota su tamaño y hacia dónde apunta la flecha. Respuestas: 1 pulgada; 2 toneladas; 5 toneladas; 18°F.",
          youCanNow: "leer el tamaño de un filtro y una placa de datos, pasar BTU a toneladas y calcular una diferencia de temperatura.",
          quickCheck: [
            { objective: "O3", q: "Una unidad es de 48,000 BTU por hora. ¿De cuántas toneladas es?", options: ["3 toneladas", "6 toneladas", "5 toneladas", "4 toneladas"], answer: 3, why: "48,000 entre 12,000 es 4, así que es una unidad de 4 toneladas." },
            { objective: "O3", q: "El aire de retorno está a 76°F y el de suministro a 58°F. ¿Cuál es la diferencia de temperatura?", options: ["16°F", "18°F", "134°F", "20°F"], answer: 1, why: "Resta: 76 menos 58 es 18°F." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los sistemas de calefacción y aire acondicionado",
        questions: [
          { objective: "O1", q: "¿Qué significa HVAC?", options: ["Calor, rejillas y serpentines", "Control de aire de alto voltaje", "Calefacción, ventilación y aire acondicionado", "Ventilación y enfriamiento de la casa"], answer: 2, why: "HVAC es calefacción, ventilación y aire acondicionado; HVACR agrega la refrigeración." },
          { objective: "O1", q: "¿Cómo enfría una casa un aire acondicionado?", options: ["Mueve el calor de adentro hacia afuera", "Fabrica aire frío de la nada", "Agrega refrigerante nuevo todos los días", "Mete aire frío de afuera"], answer: 0, why: "El refrigerante toma el calor adentro y lo suelta afuera." },
          { objective: "O1", q: "¿Qué parte aprieta el vapor de refrigerante para que se vuelva caliente y de alta presión?", options: ["El evaporador", "El filtro de aire", "El dispositivo de medición", "El compresor"], answer: 3, why: "El compresor es la bomba que aprieta el vapor al comienzo del ciclo." },
          { objective: "O3", q: "Un filtro está marcado 20 x 25 x 4. ¿Qué te dice el 4?", options: ["Que dura 4 meses", "Que tiene 4 pulgadas de grosor", "Que hay 4 en la caja", "Que es de grado 4"], answer: 1, why: "El tercer número es el grosor en pulgadas." },
          { objective: "O3", q: "¿Dónde encuentras el tipo de refrigerante y las especificaciones eléctricas de una unidad?", options: ["En la pantalla del termostato", "En el filtro de aire", "En la rejilla de suministro", "En la placa de datos de la unidad"], answer: 3, why: "La placa de datos muestra el modelo, el número de serie, los voltios, los amperios y el refrigerante." }
        ]
      }
    },
    {
      name: "Capítulo 2: Seguridad, certificación y tu camino",
      lessons: [
        {
          title: "Cómo mantenerte seguro en un trabajo de HVAC",
          objectives: ["O2"],
          minutes: 6,
          goal: "Enumerar los peligros principales de un trabajo de HVAC y la protección para cada uno.",
          text: [
            "Los técnicos de HVAC tienen una de las tasas de lesiones más altas de todos los trabajos, según la Oficina de Estadísticas Laborales de EE. UU. (BLS). La seguridad va primero en cada servicio. El trabajo práctico en este oficio solo se aprende en una capacitación supervisada, con el equipo de protección adecuado.",
            "Electricidad: las unidades funcionan con el voltaje de la casa o con uno más alto, y algunas piezas (como los capacitores) pueden guardar carga después de apagar la corriente. En el trabajo, los técnicos capacitados apagan la corriente, la bloquean y la etiquetan para que nadie pueda volver a encenderla, y comprueban que de verdad está apagada antes de tocar nada. La regla de bloqueo y etiquetado de OSHA (la agencia federal de seguridad laboral), 29 CFR 1910.147, establece estos pasos.",
            "Refrigerante: está bajo presión y puede causar congelación en la piel y lesiones en los ojos; en un espacio pequeño y cerrado puede desplazar el oxígeno que necesitas para respirar. Los técnicos usan lentes o gafas de seguridad y guantes, y solo lo manejan personas certificadas y capacitadas.",
            "Otros peligros: áticos calientes y espacios estrechos bajo la casa (enfermedades por calor), escaleras y techos (caídas), equipos pesados (lesiones de espalda), bordes filosos de lámina de metal (cortes) y el trabajo con soplete llamado soldadura fuerte (quemaduras e incendio). La protección: agua y descansos, uso seguro de la escalera, levantar con las piernas o con ayuda, guantes resistentes a cortes y un extintor cerca."
          ],
          steps: [
            "Lee la orden de trabajo y pregunta de qué se trata el trabajo.",
            "Busca peligros: corriente, refrigerante, calor, alturas, bordes filosos, fuego.",
            "Ponte la protección que el trabajo necesita: lentes de seguridad, guantes, botas.",
            "Solo técnicos capacitados: apagar la corriente, bloquear y etiquetar, y luego comprobar antes de tocar.",
            "Si algo no está claro, detente y pregunta a tu técnico líder."
          ],
          words: [
            ["Peligro", "cualquier cosa que podría lastimarte a ti o a otra persona."],
            ["EPP", "equipo de protección personal: lentes de seguridad, guantes, botas, protección auditiva y equipo parecido."],
            ["Bloqueo y etiquetado", "apagar la corriente y poner un candado y una etiqueta en el interruptor para que nadie la encienda durante el trabajo."],
            ["Capacitor", "una pieza eléctrica que guarda carga y puede darte una descarga aun después de apagar la corriente."],
            ["Soldadura fuerte", "unir tubos de cobre con un soplete y metal de aporte; implica mucho calor y riesgo de incendio."],
            ["Enfermedad por calor", "malestar por trabajar con mucho calor, como el agotamiento por calor o el golpe de calor."]
          ],
          slides: [
            { title: "La seguridad primero, en cada servicio", bullets: ["Una de las tasas de lesiones más altas de todos los trabajos (BLS)", "Trabajo práctico: solo en capacitación supervisada"] },
            { title: "Electricidad", bullets: ["Apagar, bloquear y etiquetar", "Comprobar antes de tocar", "Los capacitores pueden guardar carga"] },
            { title: "Refrigerante", bullets: ["Bajo presión: congelación y lesiones en los ojos", "Puede desplazar el oxígeno en espacios cerrados", "Gafas, guantes, solo técnicos certificados"] },
            { title: "Calor, alturas, metal, fuego", bullets: ["Áticos calientes: agua y descansos", "Escaleras y techos: subir con seguridad", "Lámina de metal: guantes resistentes a cortes", "Soldadura fuerte: extintor cerca"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Mecánicos e instaladores de calefacción, aire acondicionado y refrigeración", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm" },
            { name: "OSHA: Control de energía peligrosa (bloqueo y etiquetado), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Lee este trabajo: \"El aire acondicionado de un cliente dejó de funcionar en un día de 95°F. La unidad exterior está en el patio de un lado. La manejadora de aire está en un ático caliente al que se sube por una escalera plegable.\" En papel, haz dos columnas: Peligro y Protección. Anota al menos cinco peligros y el paso seguro o el equipo para cada uno. Guárdalo: es la parte 2 de tu tarea final.",
          youCanNow: "enumerar los peligros principales de un trabajo de HVAC y relacionar cada uno con la protección correcta.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué los técnicos capacitados bloquean y etiquetan la corriente antes de trabajar dentro de una unidad?", options: ["Para que nadie pueda volver a encender la corriente durante el trabajo", "Para ahorrarle dinero al cliente", "Para que la unidad enfríe más rápido después", "Porque hay que reiniciar el termostato"], answer: 0, why: "El bloqueo y etiquetado mantiene la corriente apagada hasta que la persona que puso el candado lo quita." },
            { objective: "O2", q: "El refrigerante le salpica la mano a un trabajador. ¿Qué lesión puede causar?", options: ["Una quemadura de sol", "Una astilla", "Congelación", "Ninguna; es inofensivo"], answer: 2, why: "El refrigerante que sale de la presión se pone muy frío y puede congelar la piel." }
          ]
        },
        {
          title: "La certificación EPA Section 608 y las reglas del refrigerante",
          objectives: ["O4"],
          minutes: 6,
          goal: "Relacionar cada equipo con el tipo correcto de certificación EPA Section 608 y decir las reglas principales del refrigerante.",
          text: [
            "Según la Sección 608 de la ley federal de Aire Limpio (Clean Air Act), los técnicos que mantienen, dan servicio, reparan o desechan equipos que podrían soltar refrigerante al aire deben estar certificados por el programa de la Agencia de Protección Ambiental de EE. UU. (EPA). Hay cuatro tipos. Type I: aparatos pequeños (como un aire acondicionado de ventana o un refrigerador de casa). Type II: equipos de alta presión y de muy alta presión (como la mayoría de los aires acondicionados centrales y bombas de calor de las casas). Type III: equipos de baja presión (como algunos enfriadores grandes, llamados chillers, de edificios grandes). Universal: todos estos.",
            "Cada examen tiene una sección Core (básica) sobre reglas y seguridad, más la sección del tipo. Los exámenes los dan organizaciones certificadoras aprobadas por la EPA; la EPA no da el examen ni entrega la tarjeta. Según la EPA, la certificación Section 608 no vence. Para obtener la certificación Universal, la sección Core se debe presentar como examen supervisado (con alguien vigilando).",
            "Dos reglas que debes saber desde ya: es ilegal soltar (ventear) refrigerante al aire a propósito mientras das servicio a un equipo o lo desechas, y el refrigerante para estos equipos, por lo general, solo se puede vender a técnicos certificados y a sus empleadores. El aire acondicionado de los autos lo cubre otra certificación, la Section 609.",
            "Este curso te prepara para las ideas del examen. No te certifica. Revisa las páginas de la EPA sobre la Section 608 para ver las reglas actuales y la lista de organizaciones certificadoras aprobadas, y pregunta a tu programa de capacitación qué examen ofrece."
          ],
          words: [
            ["EPA", "la Agencia de Protección Ambiental de EE. UU., la agencia federal que hace las reglas del refrigerante."],
            ["Section 608", "la parte de la ley de Aire Limpio (Clean Air Act) que cubre el refrigerante en equipos fijos, como los sistemas de casas y edificios."],
            ["Organización certificadora", "un grupo aprobado por la EPA para dar el examen Section 608 y entregar la tarjeta."],
            ["Core", "la parte de todo examen Section 608 que cubre las reglas, la seguridad y lo básico del refrigerante."],
            ["Venteo", "dejar escapar refrigerante al aire. Hacerlo a propósito durante un servicio es ilegal."],
            ["Supervisado", "presentado mientras un vigilante observa, en persona o en línea."],
            ["Section 609", "una certificación aparte para trabajar en el aire acondicionado de autos y camiones."]
          ],
          slides: [
            { title: "Quién la necesita", bullets: ["Técnicos que dan servicio o desechan equipos con refrigerante", "Regla federal: Clean Air Act, Section 608"] },
            { title: "Los cuatro tipos", bullets: ["Type I: aparatos pequeños", "Type II: alta presión (la mayoría del aire central de casas)", "Type III: baja presión (algunos enfriadores grandes)", "Universal: todos los tipos"] },
            { title: "Cómo se obtiene", bullets: ["Aprobar el examen de una organización aprobada por la EPA", "Sección Core más tu tipo", "La EPA dice que no vence"] },
            { title: "Reglas que debes saber ya", bullets: ["Nunca soltar refrigerante a propósito", "Venta limitada a técnicos certificados y empleadores", "El aire de autos es Section 609, otro examen"] }
          ],
          sources: [
            { name: "EPA: Certificación de técnicos Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "EPA: Requisitos de la certificación de técnicos Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-requirements" },
            { name: "EPA: Prohibición de ventear refrigerantes", url: "https://www.epa.gov/section608/stationary-refrigeration-prohibition-venting-refrigerants" },
            { name: "EPA: Restricción de venta de refrigerantes", url: "https://www.epa.gov/section608/refrigerant-sales-restriction" }
          ],
          tryIt: "Relaciona cada trabajo con un tipo de certificación y escríbelo: (1) arreglar un aire acondicionado de ventana; (2) dar servicio a un aire acondicionado central de una casa; (3) dar servicio a un enfriador grande de baja presión en un hospital; (4) recuperar el refrigerante de un refrigerador viejo de casa; (5) un técnico que quiere trabajar en todos estos. Respuestas: Type I, Type II, Type III, Type I, Universal. Luego abre las páginas de la EPA sobre la Section 608 y anota el nombre de una organización certificadora aprobada.",
          youCanNow: "relacionar cada equipo con el tipo correcto de Section 608 y decir las reglas de venteo y de venta.",
          quickCheck: [
            { objective: "O4", q: "Un técnico dará servicio a aires acondicionados centrales de casas que usan refrigerante de alta presión. ¿Qué tipo de certificación corresponde?", options: ["Type I", "Type III", "Type II", "Section 609"], answer: 2, why: "Type II cubre equipos de alta presión y de muy alta presión, lo que incluye la mayoría del aire central de las casas." },
            { objective: "O4", q: "¿Quién te da la certificación EPA Section 608?", options: ["Este curso, cuando lo termines", "El dueño de la casa donde trabajas", "Cualquier ferretería", "Una organización certificadora aprobada por la EPA, después de que apruebes su examen"], answer: 3, why: "Solo una organización certificadora aprobada por la EPA da el examen y la certificación." }
          ]
        },
        {
          title: "Tu camino hacia el HVAC, con fechas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir un plan con fechas para capacitarte, certificarte y conseguir trabajo como ayudante o aprendiz de HVAC.",
          text: [
            "Hay tres formas comunes de entrar. Muchos técnicos terminan un programa en una escuela técnica o en un colegio comunitario (community college), que según la Oficina de Estadísticas Laborales suele durar de 6 meses a 2 años y muchas veces incluye el examen de la EPA. Otros entran a un aprendizaje: un trabajo pagado con un mentor más clases, que suele durar varios años. Algunos empleadores contratan ayudantes con diploma de preparatoria o GED (el examen de equivalencia de la preparatoria) y los capacitan en el trabajo.",
            "Algunos estados y ciudades exigen una licencia de HVAC, y las reglas cambian. Busca la junta de licencias de tu estado o ciudad, o usa el buscador de licencias de CareerOneStop, y anota exactamente lo que pide. Muchos empleadores también piden licencia de conducir, y algunos prefieren que más adelante tengas certificaciones opcionales de la industria o de fabricantes.",
            "Antes de pagar cualquier programa, pregunta: ¿Incluye el examen EPA Section 608? ¿Cuántos egresados consiguen trabajo en HVAC? ¿Ayuda a conseguir empleo? Los veteranos pueden preguntar al VA (Departamento de Asuntos de Veteranos) sobre usar los beneficios del GI Bill para capacitación o aprendizajes. Si tienes antecedentes, pregunta a la junta de licencias cómo los revisa y busca empleadores que dan segundas oportunidades.",
            "Un plan con fechas convierte una meta en pasos. Escribe cada paso, dónde lo revisaste y la fecha en que lo vas a hacer."
          ],
          steps: [
            "Escribe tu meta, por ejemplo \"Trabajo de ayudante de HVAC para junio\".",
            "Elige tu tipo de EPA Section 608 (muchos principiantes apuntan a Type II o Universal) y una organización certificadora aprobada.",
            "Busca dos programas de capacitación o aprendizajes cerca de ti en apprenticeship.gov o en el sitio de un colegio comunitario; anota las fechas de solicitud.",
            "Revisa las reglas de licencia de tu estado o ciudad en la página oficial y escribe lo que exigen.",
            "Agrega fechas para estudiar, el examen, las solicitudes y la actualización de tu currículum."
          ],
          words: [
            ["Aprendizaje", "un trabajo pagado en el que aprendes el oficio con trabajadores con experiencia, más clases."],
            ["Ayudante o aprendiz", "un trabajador de HVAC de nivel inicial que ayuda a un técnico mientras aprende."],
            ["Junta de licencias", "la oficina del estado o de la ciudad que decide quién puede hacer cierto trabajo de oficio y entrega licencias."],
            ["CareerOneStop", "un sitio web gratis del Departamento de Trabajo de EE. UU. con información sobre empleos, capacitación y licencias."]
          ],
          slides: [
            { title: "Tres formas de entrar", bullets: ["Escuela técnica o colegio comunitario", "Aprendizaje: trabajo pagado más clases", "Trabajo de ayudante con capacitación en el trabajo"] },
            { title: "Las licencias cambian según el lugar", bullets: ["Algunos estados y ciudades exigen licencia", "Revisa la junta de licencias oficial", "Anota exactamente lo que pide"] },
            { title: "Antes de pagar", bullets: ["¿Incluye el examen de la EPA?", "¿Cuántos egresados consiguen trabajo en HVAC?", "Veteranos: pregunten al VA por el GI Bill"] },
            { title: "Tu plan", bullets: ["Meta, tipo de EPA, organización certificadora", "Dos programas con fechas de solicitud", "Reglas de licencia de la página oficial", "Una fecha para cada paso"] }
          ],
          sources: [
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Mecánicos e instaladores de HVAC, cómo llegar a serlo", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/heating-air-conditioning-and-refrigeration-mechanics-and-installers.htm#tab-4" },
            { name: "Apprenticeship.gov: Buscador de aprendizajes (Apprenticeship Job Finder)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Buscador de licencias", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" },
            { name: "EPA: Certificación de técnicos Section 608", url: "https://www.epa.gov/section608/section-608-technician-certification-0" }
          ],
          tryIt: "Tarea final: haz tu plan para empezar en HVAC. Junta tu dibujo del ciclo de refrigeración (Lección 2) y tu lista de peligros (Lección 4). Luego escribe tu plan con fechas: tu meta, el tipo de Section 608 que vas a presentar y una organización certificadora aprobada, dos programas de capacitación o aprendizajes cerca de ti con fechas de solicitud, qué exige tu estado o ciudad para una licencia de HVAC (con la dirección web que revisaste) y una fecha para cada paso.",
          youCanNow: "seguir tu propio plan con fechas para capacitarte, presentar el examen EPA Section 608 y solicitar trabajo en HVAC.",
          quickCheck: [
            { objective: "O5", q: "¿Dónde debes revisar si tu estado exige una licencia de HVAC?", options: ["En una publicación de redes sociales", "En la página oficial de la junta de licencias de tu estado o ciudad", "En un anuncio de una escuela de capacitación", "Con un amigo que una vez trabajó en HVAC"], answer: 1, why: "Las reglas de licencia cambian según el lugar y con el tiempo, así que la junta oficial es donde hay que revisar." },
            { objective: "O5", q: "¿Qué paso del plan está escrito de la forma más útil?", options: ["\"Certificarme algún día\"", "\"Averiguar sobre HVAC\"", "\"Estudiar mucho\"", "\"Presentar el examen EPA Type II con una organización aprobada antes del 15 de marzo\""], answer: 3, why: "Un paso útil dice la acción exacta, con quién es y una fecha." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Seguridad, certificación y tu camino",
        questions: [
          { objective: "O2", q: "Antes de que un técnico capacitado toque el cableado dentro de una unidad, ¿cuál es la última revisión?", options: ["Preguntarle al cliente si está apagada", "Comprobar que la corriente de verdad está apagada", "Bajar el termostato", "Esperar cinco segundos"], answer: 1, why: "Después de bloquear y etiquetar, los técnicos comprueban antes de tocar, porque un interruptor equivocado o una carga guardada todavía puede dar una descarga." },
          { objective: "O2", q: "Te mandan a un ático caliente en verano. ¿Qué protección importa más contra el calor?", options: ["Agua y descansos regulares", "Protección auditiva", "Una careta de soldar", "Solo botas con punta de acero"], answer: 0, why: "El agua, los descansos y estar atento a las señales de enfermedad por calor te protegen en espacios calientes." },
          { objective: "O4", q: "Un refrigerador de casa es un aparato pequeño. ¿Qué tipo de Section 608 lo cubre?", options: ["Type II", "Type III", "Type I", "Section 609"], answer: 2, why: "Type I cubre aparatos pequeños, como refrigeradores de casa y unidades de ventana." },
          { objective: "O4", q: "¿Qué dice la EPA sobre soltar refrigerante al aire a propósito durante un servicio?", options: ["Está bien al aire libre", "Está bien si es poca cantidad", "Está bien con permiso del dueño", "Es ilegal"], answer: 3, why: "Las reglas de la EPA prohíben ventear refrigerante a propósito durante el servicio, la reparación o el desecho." },
          { objective: "O5", q: "Una escuela ofrece un curso rápido de HVAC. ¿Qué pregunta te ayuda más antes de pagar?", options: ["¿Incluye el examen EPA Section 608 y cuántos egresados consiguen trabajo en HVAC?", "¿De qué color son los uniformes?", "¿El edificio es nuevo?", "¿Puedo empezar un lunes?"], answer: 0, why: "Saber si el programa lleva a la certificación y a un empleo te dice si vale lo que cuesta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos para técnicos de HVAC",
    questions: [
      { objective: "O1", q: "En HVAC, ¿qué significa la \"V\"?", options: ["Voltaje", "Ventilación", "Válvula", "Vapor"], answer: 1, why: "HVAC es calefacción, ventilación y aire acondicionado." },
      { objective: "O1", q: "¿Qué hace el ventilador soplador?", options: ["Mueve el aire por los ductos", "Aprieta el refrigerante", "Controla la temperatura elegida", "Limpia el serpentín exterior"], answer: 0, why: "El soplador empuja el aire a través del serpentín y por los ductos hacia los cuartos." },
      { objective: "O1", q: "¿Qué parte suelta el calor afuera?", options: ["El evaporador", "La rejilla de retorno", "El condensador", "El termostato"], answer: 2, why: "El condensador es el serpentín exterior donde el calor sale del refrigerante." },
      { objective: "O1", q: "¿Cuál es el orden correcto del ciclo de refrigeración?", options: ["Evaporador, compresor, dispositivo de medición, condensador", "Compresor, dispositivo de medición, condensador, evaporador", "Condensador, compresor, evaporador, dispositivo de medición", "Compresor, condensador, dispositivo de medición, evaporador"], answer: 3, why: "El refrigerante va del compresor al condensador, pasa por el dispositivo de medición, entra al evaporador y regresa." },
      { objective: "O1", q: "¿Qué le permite a una bomba de calor calentar una casa en invierno?", options: ["Un filtro de aire más grande", "Una válvula de inversión que hace funcionar el ciclo al revés", "Un segundo termostato", "Agregar agua al refrigerante"], answer: 1, why: "La válvula de inversión manda el refrigerante en sentido contrario, así que el calor se toma afuera y se suelta adentro." },
      { objective: "O3", q: "Una unidad es de 36,000 BTU por hora. ¿Cuántas toneladas son?", options: ["2 toneladas", "4 toneladas", "3 toneladas", "36 toneladas"], answer: 2, why: "36,000 entre 12,000 es 3." },
      { objective: "O3", q: "El aire de retorno está a 80°F y el de suministro a 62°F. ¿Cuál es la diferencia de temperatura?", options: ["22°F", "142°F", "16°F", "18°F"], answer: 3, why: "80 menos 62 es 18°F." },
      { objective: "O3", q: "¿Hacia dónde apunta la flecha de un filtro de aire?", options: ["Hacia el soplador, en el sentido en que va el aire", "Hacia la rejilla de retorno", "Siempre hacia arriba", "No importa"], answer: 0, why: "La flecha indica el flujo de aire, hacia el soplador y el equipo." },
      { objective: "O2", q: "¿Qué peligro puede dar una descarga a un trabajador aun después de apagar la corriente?", options: ["Un filtro de aire limpio", "Un capacitor cargado", "Una tapa de rejilla de plástico", "La pila de un termostato"], answer: 1, why: "Los capacitores guardan carga; por eso los técnicos capacitados comprueban antes de tocar." },
      { objective: "O2", q: "¿Para qué sirve el bloqueo y etiquetado?", options: ["Para cerrar con llave la puerta del cliente", "Para marcar qué filtro comprar", "Para mantener la corriente apagada y que nadie la encienda durante el trabajo", "Para que la reparación sea más rápida"], answer: 2, why: "Un candado y una etiqueta en el interruptor mantienen el equipo apagado hasta que el trabajador que los puso los quita." },
      { objective: "O2", q: "¿Por qué es peligroso el refrigerante en un espacio pequeño y cerrado?", options: ["Huele mal", "Hace que el cuarto brille demasiado", "Es pegajoso", "Puede desplazar el oxígeno que necesitas para respirar"], answer: 3, why: "Una fuga grande en un espacio cerrado puede desplazar el oxígeno." },
      { objective: "O2", q: "Tienes que cortar y ajustar un ducto de lámina de metal. ¿Qué protección corresponde a este peligro?", options: ["Guantes resistentes a cortes y lentes de seguridad", "Solo lentes de sol", "Nada; es rápido", "Solo tapones para los oídos"], answer: 0, why: "Los bordes de la lámina son filosos y pueden saltar pedacitos, así que se necesitan guantes y protección para los ojos." },
      { objective: "O4", q: "¿Qué ley exige que los técnicos que manejan refrigerante en sistemas de casas y edificios estén certificados?", options: ["La ley de Normas Justas de Trabajo (Fair Labor Standards Act)", "La Section 608 de la ley de Aire Limpio (Clean Air Act)", "La ley de Seguridad Vial (Highway Safety Act)", "La ley de Agua Limpia (Clean Water Act)"], answer: 1, why: "El programa Section 608 de la EPA viene de la ley de Aire Limpio (Clean Air Act)." },
      { objective: "O4", q: "¿Qué tipo de Section 608 te permite trabajar en toda clase de equipos fijos?", options: ["Type I", "Type II", "Type III", "Universal"], answer: 3, why: "Universal cubre los tipos I, II y III." },
      { objective: "O4", q: "Un enfriador grande de baja presión en un hospital necesita servicio. ¿Qué tipo lo cubre?", options: ["Type III", "Type I", "Type II", "Section 609"], answer: 0, why: "Type III cubre equipos de baja presión, como algunos enfriadores grandes." },
      { objective: "O4", q: "¿Qué dice la EPA sobre cuánto dura la certificación Section 608?", options: ["Un año", "Cinco años", "No vence", "Hasta que cambies de trabajo"], answer: 2, why: "La EPA dice que la certificación de técnicos Section 608 no vence." },
      { objective: "O5", q: "Este curso:", options: ["Te da una licencia de HVAC", "Te prepara para capacitarte y presentar el examen; no te certifica ni te da licencia", "Cuenta como tu examen de la EPA", "Reemplaza un aprendizaje"], answer: 1, why: "La certificación viene del examen de una organización aprobada por la EPA, y las licencias vienen de tu estado o ciudad." },
      { objective: "O5", q: "¿Cuál es una forma pagada de aprender HVAC con un mentor más clases?", options: ["Un video gratis en internet", "La garantía de un producto", "Una inspección de una casa", "Un aprendizaje registrado"], answer: 3, why: "Un aprendizaje combina capacitación pagada en el trabajo con clases." },
      { objective: "O5", q: "¿Qué sitio gratis te puede ayudar a encontrar aprendizajes cerca de ti?", options: ["apprenticeship.gov", "Un foro de empleo cualquiera", "Un anuncio emergente", "La sección de comentarios de un video"], answer: 0, why: "Apprenticeship.gov es el sitio del Departamento de Trabajo de EE. UU. con un buscador de aprendizajes." },
      { objective: "O5", q: "¿Qué paso del plan está completo?", options: ["\"Aprender HVAC\"", "\"Solicitar en algún lado pronto\"", "\"Solicitar al programa de HVAC del colegio comunitario antes del 1 de abril, después de revisar su examen de la EPA y su ayuda para conseguir empleo\"", "\"Pensar en una licencia\""], answer: 2, why: "Dice la acción, el lugar, lo que se revisó y una fecha." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, presentadas antes de la Lección 1, para que el examen muestre cuánto avanzó cada participante
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 5, 6, 9, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Dibujo del ciclo de refrigeración", objective: "O1", notYet: "Faltan partes o están en el orden equivocado.", meets: "Las cuatro partes están en el orden correcto, con una oración correcta sobre lo que hace cada una.", exceeds: "También marca adentro y afuera, caliente y frío, y explica cómo una bomba de calor invierte el ciclo." },
      { name: "Lista de peligros", objective: "O2", notYet: "Menos de cinco peligros, o la protección no corresponde al peligro.", meets: "Al menos cinco peligros, cada uno con un paso seguro o el equipo correcto.", exceeds: "Además pone los pasos en el orden en que los haría un equipo de trabajo, incluidos el bloqueo y etiquetado y comprobar antes de tocar." },
      { name: "Números de HVAC", objective: "O3", notYet: "Las respuestas de práctica tienen errores en toneladas o en la diferencia de temperatura.", meets: "Al menos 4 de 5 ejercicios de práctica correctos, con el procedimiento escrito.", exceeds: "Todos correctos, y la persona puede explicar la flecha del filtro y leer la foto de una placa de datos real." },
      { name: "Certificación correcta", objective: "O4", notYet: "El plan nombra un tipo de Section 608 equivocado para el trabajo, o ninguna organización certificadora.", meets: "Nombra el tipo correcto para los trabajos que quiere y una organización certificadora aprobada por la EPA.", exceeds: "Además explica con sus propias palabras la regla de venteo y la restricción de venta." },
      { name: "Plan con fechas de fuentes oficiales", objective: "O5", notYet: "Los pasos no tienen fechas, o las reglas de licencia vienen de anuncios o publicaciones.", meets: "Al menos cinco pasos con fecha, dos programas reales y las reglas de licencia de la página oficial con su dirección web.", exceeds: "Además incluye las preguntas hechas a cada programa y un plan de respaldo, como un trabajo de ayudante mientras se capacita." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que aprueban un examen EPA Section 608 en 6 meses (según lo que informan en el seguimiento)",
      "Participantes que se inscriben en un programa de capacitación o aprendizaje de HVAC en 90 días",
      "Participantes contratados como ayudantes, aprendices o trainees de HVAC en 6 meses",
      "Los programas aliados informan que los solicitantes llegan conociendo las partes, palabras y pasos de seguridad básicos"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para leer las páginas de la EPA, la BLS, apprenticeship.gov y las de licencias del estado",
      "Papel, lápiz y una calculadora (la del teléfono sirve)",
      "Opcional: un filtro de aire usado o fotos de un filtro y de la placa de datos de un equipo",
      "Unos 60 a 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Toda la práctica debe ser sin tocar equipos: no abrir paneles, nada de refrigerante, nada de trabajo eléctrico y nada de soldadura fuerte. Esas habilidades corresponden a un programa de capacitación supervisado con EPP.",
      "Si puedes, lleva una unidad en corte o fotos y pide a los participantes que señalen cada parte del ciclo.",
      "Invita a un contratista local de HVAC, a un sindicato o a un instructor de un colegio comunitario a hablar sobre los trabajos de ayudante y lo que buscan.",
      "Ayuda a cada participante a encontrar la página de licencias de su propio estado o ciudad; las reglas cambian, así que no des una sola respuesta para todo el grupo.",
      "A los participantes con antecedentes o veteranos, conéctalos con servicios de reinserción o para veteranos; no prometas ningún resultado de una junta de licencias.",
      "Califica la tarea final con la rúbrica y da retroalimentación sobre una fila de Todavía no a la vez."
    ]
  }
};

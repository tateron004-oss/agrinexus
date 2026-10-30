"use strict";

// Koach Learn course (Spanish translation of shared/solar-installer-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "solar-installer-basics-es",
  lang: "es",
  translationOf: "solar-installer-basics",
  category: "Workforce Development",
  name: "Fundamentos para instaladores de paneles solares",
  skills: "Nombrar las partes de un sistema solar, Reconocer los peligros en una obra solar, Hacer cálculos solares básicos, Seguir los pasos de una instalación, Planear tu camino hacia una credencial solar",
  outcome: "explicar cómo funciona un sistema solar en una casa, reconocer los principales peligros en un trabajo solar, hacer cálculos solares sencillos de práctica, ordenar los pasos de una instalación en un techo y escribir tu propio plan con fechas para conseguir trabajo solar de nivel inicial y la credencial NABCEP PV Associate.",
  about: [
    "Los instaladores solares colocan paneles solares en techos y en el suelo, y ayudan a conectarlos. Mucha gente empieza como ayudante en una cuadrilla de instalación y aprende trabajando. Este curso es para personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan de prisión y cualquiera que quiera trabajar al aire libre con sus manos.",
    "Vas a aprender las partes de un sistema solar, las reglas de seguridad que mantienen con vida a los instaladores, los cálculos básicos que usan las cuadrillas, los pasos de una instalación en un techo y las credenciales reales que buscan los empleadores, como la NABCEP PV Associate. Este curso te prepara; no te da una licencia ni una credencial. Esas las otorgan NABCEP (la junta norteamericana que certifica a profesionales de la energía), tu estado y los programas de capacitación aprobados.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" con papel y lápiz o con la calculadora gratuita de tu teléfono. Después de cada lección y de cada capítulo hay una comprobación corta, y un examen de 20 preguntas cierra el curso. En la última lección armas tu propio Plan para empezar en energía solar."
  ],
  finalTask: "Haz tu Plan para empezar en energía solar, de una página: (1) explica en 3 a 4 oraciones cómo funciona un sistema solar residencial conectado a la red, nombrando sus partes principales; (2) llena una lista de seguridad para un trabajo de práctica en un techo; (3) resuelve dos problemas de práctica de dimensionamiento y muestra tu procedimiento; (4) ordena los pasos de una instalación en un techo; (5) escribe tu camino hacia la credencial con fechas reales (programa de capacitación, fecha meta para el examen NABCEP PV Associate y cualquier requisito del estado o del empleador que revisaste en la página oficial); y (6) escribe una sección de \"Habilidades solares\" de 3 viñetas para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan un trabajo práctico en energía limpia: personas que buscan trabajo, veteranos, jóvenes adultos, personas que regresan de prisión, inmigrantes y adultos que vuelven a estudiar. La mayoría no tiene experiencia en energía solar; algunas han trabajado en construcción, techado o como ayudantes de electricista.",
    startingPoint: "Pueden hacer cálculos básicos con calculadora y leer instrucciones cortas. La mayoría nunca ha estado en una obra solar y no conoce las partes de un sistema solar, las reglas de seguridad ni las credenciales que piden los empleadores.",
    gap: "Las cuadrillas solares contratan ayudantes que ya conocen las palabras básicas, respetan las reglas de seguridad y muestran un plan de capacitación. Los participantes necesitan saber lo suficiente para hablar con confianza en una entrevista, mantenerse seguros en sus primeras semanas en una cuadrilla y elegir los pasos correctos de capacitación y credenciales sin desperdiciar dinero.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado)",
      "En este curso no hay trabajo práctico en techos ni con electricidad: las instalaciones reales se aprenden en una cuadrilla supervisada o en un programa de capacitación aprobado",
      "Solo herramientas gratuitas: papel, lápiz, la calculadora del teléfono y sitios web oficiales",
      "Los requisitos de licencias, cuotas y credenciales cambian y son distintos en cada estado: cada participante los revisa en las páginas oficiales",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo y las citas"
    ],
    prerequisites: "Ninguno. \"Empezar una carrera en los oficios calificados\" y \"Fundamentos de seguridad en el trabajo (OSHA)\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con un dibujo o una lista de las partes de un sistema solar residencial conectado a la red", action: "nombrar cada parte principal y decir qué hace", standard: "acertando al menos 5 de 6 partes" },
    { id: "O2", condition: "Con una situación de práctica de un trabajo solar", action: "enumerar los peligros y el paso de seguridad para cada uno", standard: "nombrando caídas, descarga eléctrica, calor y levantamiento de cargas, con un paso de seguridad correcto para cada uno" },
    { id: "O3", condition: "Con números de práctica de paneles, voltios y amperios", action: "calcular vatios, tamaño del sistema y voltaje de una cadena", standard: "sin errores de cálculo y mostrando tu procedimiento" },
    { id: "O4", condition: "Con los pasos de una instalación solar en un techo en desorden", action: "ordenar los pasos y decir quién hace cada uno", standard: "con no más de un paso fuera de lugar" },
    { id: "O5", condition: "Usando los sitios web oficiales de NABCEP y de tu estado", action: "enumerar las credenciales y licencias para el trabajo solar de nivel inicial donde vives", standard: "nombrando la página fuente de cada una" },
    { id: "O6", condition: "Usando tus notas de este curso", action: "escribir un Plan para empezar en energía solar con fechas y una sección de habilidades para el currículum", standard: "cumpliendo cada fila de la rúbrica" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funciona la energía solar y cómo trabajar seguro",
      lessons: [
        {
          title: "Las partes de un sistema solar residencial",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes principales de un sistema solar conectado a la red y decir qué hace cada una.",
          text: [
            "Los paneles solares, también llamados módulos, convierten la luz del sol en electricidad. La electricidad que producen es corriente continua (DC, por sus siglas en inglés). Las casas usan corriente alterna (AC), así que un inversor convierte la DC en AC.",
            "Los paneles van sobre una estructura de montaje (racking), un marco de metal atornillado al techo o colocado en el suelo. Los cables van de los paneles al inversor y luego al tablero eléctrico principal de la casa. Los interruptores de desconexión permiten a los trabajadores apagar partes del sistema. Un medidor cuenta la electricidad que la casa usa y la que envía a la red.",
            "La mayoría de los sistemas residenciales están conectados a la red: siguen unidos a las líneas de la compañía de electricidad, llamadas la red. La energía que sobra puede ir a la red, y de noche la casa usa energía de la red. Algunas casas también agregan una batería para guardar energía para después o para los apagones."
          ],
          words: [["Panel solar (módulo)", "un panel plano que convierte la luz del sol en electricidad."], ["PV (fotovoltaico)", "la tecnología que produce electricidad a partir de la luz; los paneles solares son paneles fotovoltaicos (PV)."], ["DC (corriente continua)", "electricidad que fluye en un solo sentido, como la de una batería o un panel solar."], ["AC (corriente alterna)", "electricidad que cambia de sentido muchas veces por segundo; las casas usan AC."], ["Inversor", "la caja que convierte la DC de los paneles en AC para la casa."], ["Estructura de montaje (racking)", "el marco de metal que sostiene los paneles."], ["Conectado a la red", "unido a las líneas de la compañía de electricidad."], ["Desconexión", "un interruptor que corta la energía de una parte del sistema."]],
          slides: [
            { title: "Los paneles producen energía DC", bullets: ["Los paneles solares (módulos) convierten la luz del sol en electricidad DC", "PV significa fotovoltaico: energía a partir de la luz"] },
            { title: "Del techo a la casa", bullets: ["La estructura de montaje sostiene los paneles", "Los cables van al inversor", "El inversor convierte la DC en AC para la casa"] },
            { title: "Interruptores de seguridad y el medidor", bullets: ["Las desconexiones apagan partes del sistema", "El medidor cuenta la energía usada y la enviada a la red"] },
            { title: "Sistemas conectados a la red", bullets: ["Siguen unidos a las líneas de la compañía de electricidad", "La energía que sobra puede ir a la red", "La batería es opcional, para después o para apagones"] }
          ],
          sources: [{ name: "Departamento de Energía de EE. UU.: Guía para propietarios que quieren pasarse a la energía solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" }],
          tryIt: "En papel, dibuja una casa sencilla con paneles en el techo. Dibuja y marca seis cajas en orden: paneles, estructura de montaje, inversor, desconexión, tablero eléctrico principal, medidor. Junto a cada una, escribe una línea corta sobre lo que hace. Luego tapa tus etiquetas y di cada parte en voz alta.",
          youCanNow: "nombrar las partes principales de un sistema solar conectado a la red y decir qué hace cada una.",
          quickCheck: [
            { objective: "O1", q: "¿Qué parte convierte la DC de los paneles en AC para la casa?", options: ["La estructura de montaje", "El medidor", "El inversor", "La desconexión"], answer: 2, why: "El inversor convierte la DC de los paneles en la AC que usan las casas." },
            { objective: "O1", q: "¿Qué significa \"conectado a la red\"?", options: ["El sistema está unido a las líneas de la compañía de electricidad", "Los paneles están amarrados con cuerda", "La casa no tiene medidor", "El sistema solo funciona de noche"], answer: 0, why: "Un sistema conectado a la red sigue unido a la red de la compañía, así que la energía que sobra puede salir y la energía de la red puede entrar." }
          ]
        },
        {
          title: "Trabajar seguro en una obra solar",
          objectives: ["O2"],
          minutes: 6,
          goal: "Enumerar los principales peligros en un trabajo solar y el paso de seguridad para cada uno.",
          text: [
            "Las caídas son el mayor peligro en el trabajo solar. En la construcción, OSHA (la Administración de Seguridad y Salud Ocupacional de EE. UU.) exige protección contra caídas cuando trabajas a 6 pies o más por encima de un nivel inferior. En un techo, eso suele significar un sistema personal de detención de caídas: un arnés de cuerpo completo, una cuerda de seguridad (eslinga) y un anclaje en el techo, instalados por una persona capacitada. Revisa tu arnés antes de cada uso.",
            "La descarga eléctrica es el segundo gran peligro. Los paneles solares producen electricidad siempre que les llega luz, y no puedes apagar el sol. Los cables de los paneles pueden tener corriente de día aunque un interruptor esté apagado. Como ayudante nuevo, no conectas ni tocas cables: solo trabajadores calificados y capacitados hacen el trabajo eléctrico, siguiendo los pasos de bloqueo y etiquetado.",
            "Escaleras: colócalas en suelo firme y nivelado, haz que los rieles laterales sobresalgan al menos 3 pies por encima del borde del techo y mantén tres puntos de contacto. Calor: toma agua seguido, descansa a la sombra y avisa a tu jefe de cuadrilla si te sientes mareado o mal. Levantar cargas: los paneles son grandes y el viento los empuja, así que cárgalos entre dos personas y levanta con las piernas.",
            "Usa tu equipo de protección personal (EPP): casco, lentes de seguridad, guantes de trabajo y botas que no resbalen. Detén el trabajo y avisa a tu jefe de cuadrilla cada vez que algo no parezca seguro."
          ],
          steps: ["Antes de subir: revisa la escalera, el clima y tu arnés.", "En el techo: mantente amarrado a un anclaje siempre que estés a 6 pies o más de altura.", "Trata cada panel y cada cable como si tuviera corriente; no toques las conexiones si no estás calificado.", "Toma agua, descansa a la sombra y levanta los paneles con un compañero.", "Detente y avisa a tu jefe de cuadrilla de cualquier peligro."],
          words: [["OSHA", "la Administración de Seguridad y Salud Ocupacional de EE. UU., la agencia federal de seguridad en el trabajo."], ["Protección contra caídas", "equipos y montajes que evitan que te caigas o detienen una caída de forma segura."], ["Sistema personal de detención de caídas", "un arnés de cuerpo completo, una cuerda de seguridad y un anclaje que te sostienen si te caes."], ["EPP", "equipo de protección personal: el equipo de seguridad que llevas puesto, como el casco y los guantes."], ["Bloqueo y etiquetado", "pasos que apagan y bloquean la energía para que nadie pueda volver a encenderla mientras se trabaja."], ["Con corriente", "que lleva electricidad."]],
          slides: [
            { title: "Caídas: el mayor peligro", bullets: ["OSHA: protección contra caídas a 6 pies o más en construcción", "Arnés, cuerda de seguridad y anclaje en el techo", "Revisa tu arnés antes de cada uso"] },
            { title: "Descarga eléctrica", bullets: ["Los paneles producen energía siempre que les llega luz", "Los cables pueden tener corriente aunque el interruptor esté apagado", "Solo trabajadores calificados hacen el trabajo eléctrico"] },
            { title: "Escaleras, calor y cargas", bullets: ["Rieles 3 pies por encima del borde del techo; suelo firme y nivelado", "Agua, sombra y descansos", "Carga los paneles entre dos personas"] },
            { title: "Protégete y habla", bullets: ["Casco, lentes de seguridad, guantes, botas que no resbalen", "Detén el trabajo y avisa a tu jefe si algo no es seguro"] }
          ],
          sources: [
            { name: "OSHA: Protección contra caídas", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: 29 CFR 1926.501, obligación de tener protección contra caídas (construcción)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.501" },
            { name: "OSHA: 29 CFR 1926.1053, escaleras", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1053" },
            { name: "OSHA: Calor", url: "https://www.osha.gov/heat-exposure" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Instaladores de sistemas solares fotovoltaicos", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" }
          ],
          tryIt: "Situación de práctica: es una mañana calurosa de julio. Tu cuadrilla está poniendo 18 paneles en el techo de una casa de dos pisos. La escalera está sobre pasto blando, un compañero no tiene arnés y los cables de un panel cuelgan sueltos. En papel, haz una lista de dos columnas: Peligro y Paso de seguridad. Escribe al menos cuatro filas (caídas, descarga, calor, levantamiento de cargas y la escalera).",
          youCanNow: "reconocer los principales peligros en un trabajo solar y nombrar el paso de seguridad para cada uno.",
          quickCheck: [
            { objective: "O2", q: "En la construcción, ¿a qué altura exige OSHA protección contra caídas?", options: ["10 pies", "20 pies", "Solo en la parte más alta del techo", "6 pies"], answer: 3, why: "La regla de OSHA para la construcción pide protección contra caídas a 6 pies o más por encima de un nivel inferior." },
            { objective: "O2", q: "Hace sol y el interruptor de desconexión está apagado. ¿Puedes tocar los cables del panel sin peligro?", options: ["Sí, el interruptor hace que todo sea seguro", "No, los paneles producen energía siempre que les llega luz, así que trata los cables como si tuvieran corriente", "Sí, si usas guantes de trabajo", "Solo si el inversor no hace ruido"], answer: 1, why: "Los paneles siguen produciendo electricidad con la luz, así que sus cables todavía pueden tener corriente." }
          ]
        },
        {
          title: "Cálculos solares básicos (solo práctica)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular vatios, tamaño del sistema y voltaje de una cadena con números de práctica.",
          text: [
            "Las cuadrillas usan unas pocas fórmulas sencillas todos los días. Todos los números de esta lección son inventados, solo para practicar. Los diseños reales usan la etiqueta del panel, la hoja de datos del fabricante y el código eléctrico, y los revisa un diseñador calificado.",
            "Potencia: vatios = voltios x amperios. Un panel de práctica que da 40 voltios a 10 amperios produce 40 x 10 = 400 vatios. 1,000 vatios son 1 kilovatio (kW).",
            "Tamaño del sistema: número de paneles x vatios por panel. 20 paneles de práctica de 400 vatios cada uno = 8,000 vatios, es decir, 8 kW.",
            "Cadenas: los paneles conectados en serie forman una cadena (string). En serie, los voltajes se suman y los amperios quedan iguales. Tres paneles de práctica de 40 voltios cada uno en serie = 120 voltios. En paralelo, los amperios se suman y el voltaje queda igual."
          ],
          steps: ["Escribe primero la fórmula.", "Pon los números con sus unidades (V, A, W).", "Haz la cuenta en una calculadora.", "Pasa de vatios a kilovatios dividiendo entre 1,000.", "Revisa: ¿tiene sentido la respuesta?"],
          words: [["Voltio (V)", "una medida del empuje o la presión eléctrica."], ["Amperio (A)", "una medida de cuánta electricidad está fluyendo."], ["Vatio (W)", "una medida de potencia: voltios por amperios."], ["Kilovatio (kW)", "1,000 vatios."], ["Serie", "conectados uno tras otro en una sola línea; los voltajes se suman."], ["Paralelo", "conectados lado a lado; los amperios se suman."], ["Cadena (string)", "un grupo de paneles conectados en serie."]],
          slides: [
            { title: "Solo práctica", bullets: ["Números inventados para aprender el método", "Los diseños reales usan la hoja de datos, el código y un diseñador calificado"] },
            { title: "Vatios = voltios x amperios", bullets: ["40 V x 10 A = 400 W", "1,000 W = 1 kW"] },
            { title: "Tamaño del sistema", bullets: ["Paneles x vatios por panel", "20 x 400 W = 8,000 W = 8 kW"] },
            { title: "Serie y paralelo", bullets: ["Serie: los voltios se suman, los amperios quedan iguales", "3 x 40 V en serie = 120 V", "Paralelo: los amperios se suman, los voltios quedan iguales"] }
          ],
          tryIt: "Solo práctica. Resuelve en papel y muestra tu procedimiento: (a) Un panel da 36 voltios a 11 amperios. ¿Cuántos vatios? (b) Una casa tiene 24 paneles de 350 vatios. ¿Cuál es el tamaño del sistema en kW? (c) Cinco paneles de 40 voltios cada uno están conectados en serie. ¿Cuál es el voltaje de la cadena? Respuestas para revisarte: (a) 396 W, (b) 8,400 W = 8.4 kW, (c) 200 V.",
          youCanNow: "calcular vatios, tamaño del sistema y voltaje de una cadena con números de práctica y mostrar tu procedimiento.",
          quickCheck: [
            { objective: "O3", q: "Solo práctica: 15 paneles de 400 vatios cada uno. ¿Cuál es el tamaño del sistema?", options: ["4 kW", "6 kW", "15 kW", "400 kW"], answer: 1, why: "15 x 400 W = 6,000 W, y 6,000 / 1,000 = 6 kW." },
            { objective: "O3", q: "Solo práctica: cuatro paneles de 40 voltios cada uno están conectados en serie. ¿Cuál es el voltaje de la cadena?", options: ["40 V", "80 V", "10 V", "160 V"], answer: 3, why: "En serie los voltajes se suman: 4 x 40 V = 160 V." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funciona la energía solar y cómo trabajar seguro",
        questions: [
          { objective: "O1", q: "¿Qué tipo de electricidad producen los paneles solares?", options: ["AC", "DC", "Energía de gas", "Energía solo de batería"], answer: 1, why: "Los paneles producen corriente continua (DC); el inversor la convierte en AC." },
          { objective: "O1", q: "¿Para qué sirve la estructura de montaje?", options: ["Sostiene los paneles en el techo o en el suelo", "Cuenta la energía enviada a la red", "Convierte la DC en AC", "Guarda energía para la noche"], answer: 0, why: "La estructura de montaje es el marco de metal que sostiene los paneles." },
          { objective: "O2", q: "Estás en un techo a 12 pies de altura. ¿Qué debes usar?", options: ["Nada, si tienes cuidado", "Solo un casco", "Protección contra caídas, como un arnés amarrado a un anclaje", "Una escalera más alta"], answer: 2, why: "A 6 pies o más en la construcción necesitas protección contra caídas." },
          { objective: "O2", q: "Eres un ayudante nuevo y un compañero te pide que conectes dos cables de un panel. ¿Qué haces?", options: ["Los conectas rápido con guantes puestos", "Esperas a que pase una nube", "Le pides ayuda al cliente", "Dices que no y avisas a tu jefe de cuadrilla, porque solo trabajadores calificados hacen el trabajo eléctrico"], answer: 3, why: "Las conexiones eléctricas son para trabajadores calificados y capacitados; los ayudantes nuevos no tocan los cables." },
          { objective: "O3", q: "Solo práctica: un panel da 50 voltios a 8 amperios. ¿Cuántos vatios son?", options: ["58 W", "400 W", "42 W", "800 W"], answer: 1, why: "Vatios = voltios x amperios, así que 50 x 8 = 400 W." }
        ]
      }
    },
    {
      name: "Capítulo 2: Del techo a tu primer trabajo",
      lessons: [
        {
          title: "Los pasos de una instalación en un techo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Ordenar los pasos de una instalación solar en un techo y decir quién hace cada uno.",
          text: [
            "Toda instalación sigue un camino. Primero, una evaluación del sitio: alguien revisa la edad y el estado del techo, hacia dónde mira, la sombra de los árboles y el tablero eléctrico de la casa. Luego un diseñador planea dónde van los paneles y el cableado.",
            "Después viene el permiso. El departamento de construcción de la ciudad o del condado revisa los planos antes de empezar el trabajo. El día de la instalación, la cuadrilla prepara el equipo de seguridad, marca el techo y fija los anclajes de montaje en las vigas del techo. Cada anclaje lleva tapajuntas (flashing) y se sella para que el techo no tenga goteras. Después, la cuadrilla atornilla la estructura de montaje y monta los paneles.",
            "Un electricista calificado o un trabajador con licencia hace las conexiones eléctricas, siguiendo el Código Eléctrico Nacional (NEC) y las reglas locales. Luego el inspector de construcción local inspecciona el sistema. Por último, la compañía de electricidad aprueba la conexión del sistema a la red, lo que a menudo se llama permiso para operar. Solo entonces se enciende el sistema.",
            "Los ayudantes sobre todo cargan y preparan los materiales, ayudan a poner la estructura de montaje y los paneles, mantienen limpio el sitio y siguen las instrucciones del jefe de cuadrilla."
          ],
          steps: ["Evaluación del sitio: techo, orientación, sombra, tablero eléctrico.", "Diseño: ubicación de los paneles y plan de cableado.", "Permiso de la ciudad o del condado.", "Preparación de seguridad, luego anclajes en el techo, con tapajuntas y sellados.", "Estructura de montaje, luego paneles montados.", "Conexiones eléctricas hechas por trabajadores calificados.", "Inspección por el inspector local.", "Aprobación de la compañía de electricidad (permiso para operar), luego encendido."],
          words: [["Evaluación del sitio", "una visita para ver si un techo o un patio sirve para energía solar."], ["Permiso", "la autorización oficial de la ciudad o del condado para hacer el trabajo."], ["Tapajuntas (flashing)", "metal u otro material que impide que entre agua donde algo atraviesa el techo."], ["Viga del techo", "una de las vigas de madera que sostienen un techo."], ["NEC", "el Código Eléctrico Nacional de EE. UU. (NFPA 70), las reglas para un trabajo eléctrico seguro que adoptan los estados y las ciudades."], ["Inspección", "una revisión oficial de que el trabajo cumple el código."], ["Permiso para operar", "el visto bueno de la compañía de electricidad para encender un sistema conectado a la red."]],
          slides: [
            { title: "Antes de que llegue la cuadrilla", bullets: ["Evaluación del sitio: techo, orientación, sombra, tablero", "Diseño: ubicación y cableado", "Permiso de la ciudad o del condado"] },
            { title: "El día de la instalación", bullets: ["Primero la preparación de seguridad", "Anclajes en las vigas, con tapajuntas y sellados", "Estructura de montaje, luego paneles"] },
            { title: "Para terminar", bullets: ["Trabajo eléctrico hecho por trabajadores calificados, según el NEC", "Inspección local", "Aprobación de la compañía de electricidad, luego encendido"] },
            { title: "Lo que hacen los ayudantes", bullets: ["Cargar y preparar materiales", "Ayudar a poner la estructura de montaje y los paneles", "Mantener limpio el sitio; seguir al jefe de cuadrilla"] }
          ],
          sources: [
            { name: "Departamento de Energía de EE. UU.: Guía para propietarios que quieren pasarse a la energía solar", url: "https://www.energy.gov/eere/solar/homeowners-guide-going-solar" },
            { name: "NFPA 70: Código Eléctrico Nacional (revisa qué edición usa tu estado)", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" }
          ],
          tryIt: "Escribe cada uno de los 8 pasos de la instalación en un papelito distinto. Revuélvelos y luego ponlos otra vez en orden sin mirar la lección. Junto a cada uno, escribe quién lo hace: el diseñador, la ciudad o el condado, la cuadrilla, el electricista calificado, el inspector o la compañía de electricidad. Compara tu orden con la lección.",
          youCanNow: "ordenar los pasos de una instalación solar en un techo y decir quién hace cada uno.",
          quickCheck: [
            { objective: "O4", q: "¿Qué suele venir justo antes del día de la instalación?", options: ["Obtener el permiso", "La inspección final", "El permiso para operar de la compañía de electricidad", "Encender el sistema"], answer: 0, why: "El permiso de la ciudad o del condado llega antes de empezar el trabajo en el techo." },
            { objective: "O4", q: "¿Por qué los anclajes del techo llevan tapajuntas y se sellan?", options: ["Para que los paneles brillen", "Para que el techo no tenga goteras", "Para acelerar la inspección", "Para que los paneles produzcan más energía"], answer: 1, why: "El tapajuntas y el sellado impiden que entre agua donde los tornillos atraviesan el techo." }
          ]
        },
        {
          title: "Credenciales, licencias y capacitación",
          objectives: ["O5"],
          minutes: 5,
          goal: "Enumerar las credenciales y licencias para el trabajo solar de nivel inicial donde vives, con la fuente oficial de cada una.",
          text: [
            "Muchos instaladores empiezan como ayudantes y aprenden trabajando, a menudo durante un mes a un año. Algunos primero toman un curso corto en un colegio comunitario, una escuela técnica o un programa de aprendizaje. Los electricistas, techadores y trabajadores de la construcción muchas veces pueden pasar más rápido a la energía solar.",
            "NABCEP (la Junta Norteamericana de Profesionales Certificados en Energía) ofrece credenciales solares muy conocidas. La de nivel inicial es la NABCEP PV Associate. Puedes calificar si terminas un curso con un proveedor de capacitación registrado para el programa Associate de NABCEP (NABCEP Associate Registered Training Provider), o si demuestras al menos seis meses de trabajo solar de tiempo completo, y luego apruebas el examen. Más adelante, los instaladores con experiencia pueden aspirar a la certificación de la junta de NABCEP (Board Certification), como PV Installation Professional.",
            "Las licencias las fijan los estados, y algunas ciudades. Algunos estados exigen una licencia solar o eléctrica para ciertos trabajos; otros no. Las cuotas, las reglas del examen y los requisitos cambian, así que revisa tú mismo la página oficial de NABCEP y la junta de licencias de tu estado antes de pagar cualquier cosa.",
            "Este curso te prepara para empezar. No te da una credencial ni una licencia."
          ],
          steps: ["Lee la página del programa Associate de NABCEP.", "Busca un proveedor de capacitación registrado o cuenta tus meses de trabajo solar.", "Busca en la junta de licencias de contratistas o de electricistas de tu estado las reglas para la energía solar.", "Anota cada requisito y la página donde lo encontraste.", "Pregunta a los empleadores solares de tu zona qué credenciales quieren."],
          words: [["NABCEP", "la Junta Norteamericana de Profesionales Certificados en Energía, que ofrece credenciales solares."], ["Credencial", "una prueba de que aprobaste un examen o cumpliste un estándar."], ["Licencia", "el permiso de un estado o una ciudad para hacer cierto trabajo."], ["Aprendizaje", "un trabajo pagado con capacitación, donde aprendes de trabajadores con experiencia."], ["Proveedor de capacitación registrado", "una escuela que NABCEP tiene en su lista como aprobada para prepararte para su examen Associate."]],
          slides: [
            { title: "Formas de entrar", bullets: ["Empezar como ayudante y aprender trabajando", "Cursos cortos, colegios comunitarios, aprendizajes", "Ayuda haber trabajado en electricidad, techos o construcción"] },
            { title: "NABCEP PV Associate", bullets: ["Credencial solar de nivel inicial", "Calificas con un curso registrado o 6 meses de trabajo solar", "Luego apruebas el examen"] },
            { title: "Las licencias son locales", bullets: ["Las fija tu estado y a veces tu ciudad", "Algunos estados exigen una licencia solar o eléctrica"] },
            { title: "Revisa antes de pagar", bullets: ["Página oficial de NABCEP y junta de licencias de tu estado", "Anota cada requisito y su fuente", "Este curso te prepara; no te da una licencia"] }
          ],
          sources: [
            { name: "NABCEP: Programa Associate (PV Associate)", url: "https://www.nabcep.org/certification/associate-program/" },
            { name: "NABCEP: Certificaciones", url: "https://www.nabcep.org/certifications/" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Cómo llegar a ser instalador de sistemas solares fotovoltaicos", url: "https://www.bls.gov/ooh/construction-and-extraction/solar-photovoltaic-installers.htm" },
            { name: "CareerOneStop: Buscador de licencias", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Abre la página del programa Associate de NABCEP y anota las formas de calificar para la PV Associate. Luego busca el nombre de tu estado más \"solar contractor license\" y encuentra la página oficial de la junta de licencias de tu estado (muchas veces termina en .gov). Escribe una línea sobre lo que dice, y la dirección web.",
          youCanNow: "nombrar la credencial NABCEP de nivel inicial, decir cómo calificar para ella y encontrar las reglas de licencias de tu estado en la página oficial.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es la credencial solar fotovoltaica de nivel inicial de NABCEP?", options: ["EPA Section 608", "CDL Clase A", "NABCEP PV Associate", "CompTIA A+"], answer: 2, why: "La NABCEP PV Associate es la credencial solar fotovoltaica de nivel inicial." },
            { objective: "O5", q: "¿Dónde revisas si tu estado exige una licencia para el trabajo solar?", options: ["En una publicación de redes sociales", "En un anuncio de un curso rápido en línea", "Con un amigo de otro estado", "En la página oficial de la junta de licencias de tu estado"], answer: 3, why: "Cada estado fija sus licencias, así que la página oficial de la junta del estado es la fuente confiable." }
          ]
        },
        {
          title: "Tu Plan para empezar en energía solar",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un Plan para empezar en energía solar con fechas y una sección de habilidades para el currículum.",
          text: [
            "Ahora junta todo en una página que puedas llevar a un programa de capacitación o a una entrevista. Un plan con fechas reales le muestra a un empleador que vas en serio.",
            "Tu plan tiene seis partes: cómo funciona la energía solar en tus propias palabras; una lista de seguridad; dos problemas de práctica con tu procedimiento; los pasos de la instalación en orden; tu camino hacia la credencial con fechas y fuentes; y una sección de \"Habilidades solares\" para tu currículum.",
            "Para la sección del currículum, escribe cosas verdaderas que ya puedes hacer, en viñetas cortas que empiecen con un verbo de acción. Por ejemplo: \"Conozco las partes de un sistema fotovoltaico conectado a la red y cómo la DC se convierte en AC.\" \"Capacitado en los peligros de una obra solar: protección contra caídas, descarga eléctrica, calor y levantamiento seguro de cargas.\" \"Puedo calcular el tamaño de un sistema y el voltaje de una cadena.\" Agrega trabajos anteriores que ayuden: construcción, techos, el ejército, almacén o cualquier trabajo con herramientas, alturas o trabajo en equipo.",
            "Veteranos y personas con antecedentes: muchos empleadores solares contratan a personas de estos grupos. Sé honesto en las solicitudes y pregunta en un centro de empleo local o en un programa de reinserción por ayuda para capacitarte."
          ],
          steps: ["Escribe tu explicación de 3 a 4 oraciones de un sistema conectado a la red.", "Copia tu lista de seguridad de la Lección 2 y termínala.", "Agrega dos problemas de práctica con tu procedimiento.", "Escribe en orden los 8 pasos de la instalación.", "Escribe tu camino hacia la credencial con fechas meta y páginas fuente.", "Escribe 3 viñetas para el currículum que empiecen con un verbo de acción."],
          words: [["Currículum", "un documento corto que muestra tus habilidades, trabajos y capacitación a los empleadores."], ["Fecha meta", "el día en que piensas terminar un paso."], ["Centro de empleo", "una oficina pública gratuita que ayuda a la gente a encontrar trabajo y capacitación; muchos se llaman American Job Centers."]],
          slides: [
            { title: "Una página, seis partes", bullets: ["Cómo funciona la energía solar; lista de seguridad", "Cálculos de práctica; pasos de la instalación", "Camino a la credencial con fechas; sección del currículum"] },
            { title: "Fechas reales", bullets: ["Cuándo vas a empezar la capacitación", "Cuándo piensas presentar el examen NABCEP PV Associate", "Cuándo vas a solicitar trabajos de ayudante"] },
            { title: "Currículum: Habilidades solares", bullets: ["Viñetas cortas que empiezan con un verbo de acción", "Solo cosas verdaderas que puedes hacer", "Agrega trabajos anteriores con herramientas, alturas o trabajo en equipo"] },
            { title: "Busca ayuda", bullets: ["American Job Centers y programas de reinserción", "Pregunta por ayuda para capacitarte y por empleadores locales"] }
          ],
          sources: [{ name: "CareerOneStop: Encuentra un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarea final: haz tu Plan para empezar en energía solar, de una página, con las seis partes. Pon una fecha real junto a cada paso de credencial y de trabajo, y la dirección web de cada requisito que revisaste. Lee en voz alta tus viñetas del currículum como si estuvieras en una entrevista.",
          youCanNow: "mostrar a un empleador o a un programa de capacitación un plan escrito para empezar en el trabajo solar, con fechas, fuentes y una sección de habilidades para el currículum.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es la mejor viñeta de currículum para un trabajo de ayudante solar?", options: ["\"Muy trabajador.\"", "\"Capacitado en los peligros de una obra solar: protección contra caídas, descarga eléctrica, calor y levantamiento seguro de cargas.\"", "\"Electricista solar con licencia.\" (cuando no lo eres)", "\"Me gusta el sol.\""], answer: 1, why: "Es verdadera, concreta y empieza con una palabra de acción; nunca digas que tienes una licencia que no tienes." },
            { objective: "O6", q: "¿Qué hace más fuerte un Plan para empezar en energía solar?", options: ["Fechas meta reales y la página fuente de cada requisito", "Nada de fechas, para ser flexible", "Copiar el plan de un amigo", "Dejar fuera la parte de seguridad"], answer: 0, why: "Las fechas y las fuentes oficiales convierten un deseo en un plan en el que un empleador puede confiar." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Del techo a tu primer trabajo",
        questions: [
          { objective: "O4", q: "¿Quién da la aprobación final para conectar a la red un sistema conectado a la red?", options: ["El ayudante", "El fabricante del panel", "El vecino del cliente", "La compañía de electricidad"], answer: 3, why: "La compañía de electricidad da el permiso para operar antes de que se encienda el sistema." },
          { objective: "O4", q: "¿Qué paso va primero?", options: ["Montar los paneles", "La inspección", "La evaluación del sitio", "Encender el sistema"], answer: 2, why: "La evaluación del sitio revisa el techo, la orientación, la sombra y el tablero eléctrico antes que todo lo demás." },
          { objective: "O5", q: "¿Cuál es una forma de calificar para el examen NABCEP PV Associate?", options: ["Terminar un curso con un proveedor de capacitación registrado para el programa Associate de NABCEP", "Comprar un panel solar", "Ver un video en internet", "Trabajar un día en un techo"], answer: 0, why: "La vía de estudios es un curso con un proveedor de capacitación registrado; otra es tener al menos seis meses de trabajo solar." },
          { objective: "O5", q: "¿Este curso te da una licencia solar?", options: ["Sí, después del examen", "No; te prepara, y las licencias las da tu estado o tu ciudad", "Sí, si lo terminas en un día", "Solo en los estados donde hace mucho sol"], answer: 1, why: "El curso te prepara; las credenciales las da NABCEP y las licencias, el estado o la ciudad." },
          { objective: "O6", q: "Tu plan dice \"Presentar el examen PV Associate.\" ¿Qué deberías agregar?", options: ["Nada", "El nombre de un amigo", "Una fecha meta y la página oficial que revisaste", "Una foto de un panel"], answer: 2, why: "Una fecha y una fuente hacen que el paso sea real y se pueda comprobar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos para instaladores de paneles solares",
    questions: [
      { objective: "O1", q: "¿En qué convierten los paneles solares la luz del sol?", options: ["Solo en calor", "En electricidad DC", "En gas natural", "En electricidad AC sin inversor"], answer: 1, why: "Los paneles solares fotovoltaicos producen electricidad de corriente continua (DC)." },
      { objective: "O1", q: "¿Qué parte cuenta la electricidad que una casa usa y la que envía a la red?", options: ["El medidor", "La estructura de montaje", "El tapajuntas", "El arnés"], answer: 0, why: "El medidor mide la energía que entra y la que sale." },
      { objective: "O1", q: "Un sistema residencial que sigue unido a las líneas de la compañía de electricidad se llama:", options: ["Todoterreno", "Independiente", "Solo de batería", "Conectado a la red"], answer: 3, why: "Los sistemas conectados a la red están unidos a la red de la compañía de electricidad." },
      { objective: "O1", q: "¿Para qué se usa una batería en algunas casas con energía solar?", options: ["Para sostener los paneles en el techo", "Para convertir AC en DC para el medidor", "Para guardar energía para después o para los apagones", "Para reemplazar el inversor"], answer: 2, why: "Una batería guarda energía para usarla después, por ejemplo de noche o durante un apagón." },
      { objective: "O2", q: "¿Cuál es el mayor peligro en el trabajo de instalación solar?", options: ["Cortarse con papel", "Caerse de techos y escaleras", "La música fuerte", "La lluvia sobre el camión"], answer: 1, why: "Las caídas son el mayor peligro para los instaladores solares." },
      { objective: "O2", q: "¿Qué equipo forma parte de un sistema personal de detención de caídas?", options: ["Lentes de seguridad", "Botas de trabajo", "Un arnés de cuerpo completo, una cuerda de seguridad y un anclaje", "Un cinturón de herramientas"], answer: 2, why: "El arnés, la cuerda de seguridad y el anclaje juntos detienen una caída." },
      { objective: "O2", q: "Hace mucho calor y un compañero se siente mareado. ¿Qué haces?", options: ["Avisas al jefe de cuadrilla, lo llevas a la sombra y le das agua", "Le dices que siga trabajando", "Lo mandas a subir la escalera", "No le haces caso hasta la hora de comer"], answer: 0, why: "El mareo puede ser una enfermedad por calor: primero sombra, agua, descanso y avisar al jefe de cuadrilla." },
      { objective: "O2", q: "¿Cómo debes cargar un panel solar grande?", options: ["Solo, sobre la cabeza", "Por el borde del techo con viento", "Por los cables", "Con un compañero, levantando con las piernas"], answer: 3, why: "Los paneles son grandes y el viento los empuja, así que los cargan dos personas usando las piernas." },
      { objective: "O3", q: "Solo práctica: 30 voltios x 9 amperios = ?", options: ["39 W", "270 W", "21 W", "2,700 W"], answer: 1, why: "Vatios = voltios x amperios: 30 x 9 = 270 W." },
      { objective: "O3", q: "Solo práctica: 25 paneles de 400 vatios. ¿Cuál es el tamaño del sistema?", options: ["10 kW", "4 kW", "25 kW", "1 kW"], answer: 0, why: "25 x 400 W = 10,000 W = 10 kW." },
      { objective: "O3", q: "En una cadena en serie, ¿qué pasa con el voltaje?", options: ["Queda igual", "Baja a cero", "Los voltajes se suman", "Se reduce a la mitad"], answer: 2, why: "En serie, el voltaje de cada panel se suma al voltaje de la cadena." },
      { objective: "O3", q: "¿Cuántos vatios hay en 1 kilovatio?", options: ["10", "100", "10,000", "1,000"], answer: 3, why: "Kilo significa 1,000, así que 1 kW = 1,000 W." },
      { objective: "O4", q: "¿Qué pasa antes de empezar el trabajo en el techo?", options: ["El permiso de la ciudad o del condado", "La inspección final", "El permiso para operar", "Encender el sistema"], answer: 0, why: "El permiso se aprueba antes de que empiece la instalación." },
      { objective: "O4", q: "¿Quién hace las conexiones eléctricas en una instalación solar?", options: ["Cualquier ayudante nuevo", "El cliente", "Un electricista calificado o un trabajador con licencia", "La persona que lee el medidor de la compañía de electricidad"], answer: 2, why: "El trabajo eléctrico lo hacen trabajadores calificados que siguen el NEC y las reglas locales." },
      { objective: "O4", q: "¿Cuál es el último paso antes de encender el sistema?", options: ["La evaluación del sitio", "El diseño", "Montar la estructura de montaje", "El permiso para operar de la compañía de electricidad"], answer: 3, why: "La aprobación de la compañía de electricidad llega después de la inspección y antes del encendido." },
      { objective: "O5", q: "¿Qué ofrece NABCEP?", options: ["Licencias de conducir", "Credenciales solares como la PV Associate", "Permisos de construcción", "Facturas de luz"], answer: 1, why: "NABCEP ofrece credenciales solares y certificaciones de la junta." },
      { objective: "O5", q: "¿Quién fija las reglas de licencias para el trabajo solar y eléctrico?", options: ["Cada estado, y a veces la ciudad", "El fabricante de los paneles", "NABCEP para todos los estados", "El cliente"], answer: 0, why: "Las licencias las fijan los estados y a veces los gobiernos locales." },
      { objective: "O5", q: "Un anuncio en internet dice que serás \"instalador solar con licencia en 2 días\". ¿Qué haces?", options: ["Pagas de inmediato", "Lo compartes con tus amigos", "Les das tu número de Seguro Social", "Revisas lo que dice en las páginas de NABCEP y de la junta de licencias de tu estado"], answer: 3, why: "Las páginas oficiales te dicen los requisitos reales antes de que pagues." },
      { objective: "O6", q: "¿Qué va en tu Plan para empezar en energía solar?", options: ["La contraseña de tu banco", "Fechas meta para la capacitación y el examen PV Associate", "Una lista de tus canciones favoritas", "Una licencia que no tienes"], answer: 1, why: "Las fechas para cada paso hacen real el plan." },
      { objective: "O6", q: "Una buena viñeta de currículum debe ser:", options: ["Larga y vaga", "Copiada de un desconocido", "Verdadera, concreta y empezar con un verbo de acción", "Sobre una habilidad que piensas aprender algún día"], answer: 2, why: "Los empleadores confían en viñetas cortas, verdaderas y concretas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya sobre la energía solar?", from: [0, 2, 4, 6, 8, 10, 13, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      { name: "Cómo funciona la energía solar", objective: "O1", notYet: "A la explicación le falta el inversor o confunde AC y DC.", meets: "Nombra los paneles, la estructura de montaje, el inversor, la desconexión, el medidor y la red, y dice qué hace cada uno.", exceeds: "Además explica, con sus propias palabras, por qué la desconexión es importante para la seguridad durante el mantenimiento y por qué los paneles tienen corriente siempre que hay luz del día." },
      { name: "Lista de seguridad", objective: "O2", notYet: "Le faltan las caídas o la descarga eléctrica, o no da ningún paso de seguridad.", meets: "Enumera caídas, descarga, calor y levantamiento de cargas, cada uno con un paso de seguridad correcto (incluida la protección contra caídas a 6 pies).", exceeds: "Agrega cómo colocar la escalera y una regla para detener el trabajo, y dice a quién avisar." },
      { name: "Cálculos de práctica", objective: "O3", notYet: "Un error de cálculo, o no muestra el procedimiento.", meets: "Los dos problemas están bien, con la fórmula y las unidades.", exceeds: "Además revisa que cada respuesta tenga sentido y pasa bien de vatios a kW." },
      { name: "Pasos de la instalación", objective: "O4", notYet: "Dos o más pasos fuera de orden, o falta el permiso o la inspección.", meets: "Los 8 pasos en orden, con un paso fuera de lugar como máximo, y quién hace cada uno.", exceeds: "Explica por qué importan el tapajuntas y la aprobación de la compañía de electricidad." },
      { name: "Camino a la credencial", objective: "O5", notYet: "Sin fechas, o requisitos sin fuente.", meets: "Nombra la NABCEP PV Associate y una forma de calificar, más la revisión de licencias del estado, cada una con una fecha meta y una dirección web.", exceeds: "Nombra un proveedor de capacitación registrado o un empleador local específico, y un plan de respaldo." },
      { name: "Sección del currículum", objective: "O6", notYet: "Las viñetas son vagas o dicen tener una licencia o credencial que el participante no tiene.", meets: "Tres viñetas verdaderas que empiezan con un verbo de acción y corresponden al trabajo solar.", exceeds: "Relaciona trabajos anteriores (construcción, el ejército, almacén) con tareas solares." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de capacitación solar o de aprendizaje en un plazo de 90 días",
      "Participantes que aprueban el examen NABCEP PV Associate en un plazo de 12 meses (según lo que informan)",
      "Participantes contratados como ayudantes o instaladores solares en un plazo de 6 meses (encuesta de seguimiento o informe de un socio)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con internet para leer las lecciones y revisar las páginas oficiales",
      "Papel, lápiz y una calculadora (sirve la del teléfono)",
      "Opcional: una imagen impresa de un sistema solar residencial para marcar sus partes",
      "Entre 60 y 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En este curso nadie sube a un techo ni toca partes eléctricas. Si muestras equipo real, mantenlo desconectado, sin luz y en el suelo.",
      "Hagan juntos la prueba inicial; después, trabajen un capítulo por sesión y resuelvan los cálculos de práctica en un pizarrón.",
      "Pide a los participantes que busquen en vivo la página de licencias de su propio estado; los requisitos cambian de un estado a otro.",
      "Invita a un instalador solar local, a un centro de capacitación sindical o a un proveedor de capacitación registrado de NABCEP a hablar sobre la contratación.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez.",
      "Para participantes con antecedentes o en libertad supervisada: indícales programas de reinserción y de empleo, y recuérdales que sean honestos en las solicitudes."
    ]
  }
};

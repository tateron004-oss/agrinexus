"use strict";

// Koach Learn course (Spanish translation of shared/ev-technician-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "ev-technician-basics-es",
  lang: "es",
  translationOf: "ev-technician-basics",
  category: "Workforce Development",
  name: "Introducción a técnico de vehículos eléctricos (EV)",
  skills: "Nombrar las partes de un EV, Seguir las reglas de seguridad de alto voltaje, Hacer cálculos de carga, Planear el servicio de bajo voltaje de un EV, Planear un camino de certificación ASE",
  outcome: "explicar cómo funciona un vehículo eléctrico, seguir las reglas de seguridad de alto voltaje que debe cumplir un trabajador nuevo del taller, calcular tiempos de carga de práctica, planear el servicio de rutina que necesita un EV y escribir tu propio plan con fechas hacia la certificación ASE y el trabajo como técnico de EV.",
  about: [
    "Cada año hay más vehículos eléctricos e híbridos en las calles, y los talleres necesitan técnicos que los entiendan. Este curso es para personas que buscan trabajo, veteranos, jóvenes adultos, personas que ya reparan autos y cualquiera que tenga curiosidad por el trabajo con vehículos eléctricos (EV, por sus siglas en inglés).",
    "Vas a aprender las partes principales de un EV, los peligros del alto voltaje y las reglas que te protegen, cómo funciona la carga, qué servicios todavía necesitan los EV y el camino real de certificación: las pruebas A6 y A8 de ASE (la organización de EE. UU. que certifica a técnicos automotrices) y después la prueba L3 de vehículos híbridos y eléctricos. Este curso te prepara. No te certifica, y nunca te pide tocar partes de alto voltaje. Ese trabajo solo se aprende en una capacitación supervisada y aprobada, con el equipo de protección correcto.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\" con papel, lápiz y la calculadora del teléfono. Hay una comprobación corta después de cada lección y de cada capítulo, y un examen de 20 preguntas al final del curso. La última lección arma tu propio Plan de Inicio como Técnico de EV."
  ],
  finalTask: "Haz tu Plan de Inicio como Técnico de EV en una página: (1) explica en 3 o 4 oraciones cómo funciona un EV, nombrando sus partes principales; (2) escribe las reglas de seguridad de alto voltaje que vas a seguir como trabajador nuevo del taller; (3) resuelve dos problemas de práctica de tiempo de carga y muestra tu trabajo; (4) escribe una lista de servicio de bajo voltaje para un EV; (5) escribe tu camino de certificación con fechas reales (programa de capacitación, ASE A6 y A8, después L3, y cualquier capacitación del empleador o del fabricante), con la página oficial de cada paso; y (6) escribe una sección de 3 viñetas de \"Habilidades con EV\" para tu currículum.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que buscan un trabajo calificado en el servicio automotriz: personas que buscan empleo, veteranos (muchos con experiencia en vehículos o electricidad), jóvenes adultos, inmigrantes y técnicos actuales de cambio de aceite o de llantas que quieren avanzar. Algunos han reparado autos de gasolina; muchos nunca han trabajado en un EV.",
    startingPoint: "Pueden hacer cuentas básicas con una calculadora y leer instrucciones cortas. Algunos conocen los motores de gasolina y el cuidado básico del auto; la mayoría no conoce las partes de un EV, los peligros del alto voltaje ni las certificaciones que piden los talleres.",
    gap: "Los talleres necesitan trabajadores que puedan dar servicio a los EV de forma segura y que sepan cuándo detenerse. Un trabajador nuevo que toca partes naranjas de alto voltaje sin capacitación puede morir. Los participantes necesitan el vocabulario, las reglas de seguridad, los servicios de rutina de un EV y un camino de certificación claro para que los contraten y puedan avanzar.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (de 6.º a 8.º grado, más o menos)",
      "Nada de trabajo práctico de alto voltaje en este curso: nunca toques cables naranjas, el paquete de baterías ni las partes internas de los cargadores",
      "Solo herramientas gratis: papel, lápiz, la calculadora del teléfono y sitios web oficiales",
      "Las reglas y los costos de las certificaciones cambian: los participantes revisan ase.com y otras páginas oficiales",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre el trabajo y las citas"
    ],
    prerequisites: "Ninguno. Los cursos \"Carreras en oficios calificados\" y \"Seguridad básica en el trabajo (OSHA)\" ayudan, pero no son obligatorios."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con una lista o un dibujo de las partes de un EV", action: "nombrar las partes principales de un vehículo eléctrico y decir qué hace cada una", standard: "acertando al menos 5 de 6 partes" },
    { id: "O2", condition: "Ante una situación de taller con un EV", action: "hacer una lista de los peligros del alto voltaje y la regla de seguridad de cada uno", standard: "incluyendo \"no toques cables naranjas ni el paquete de baterías sin capacitación\" y el bloqueo y etiquetado" },
    { id: "O3", condition: "Con números de práctica de una batería y un cargador", action: "calcular la energía necesaria y el tiempo de carga", standard: "sin errores de cálculo y mostrando tu trabajo" },
    { id: "O4", condition: "Ante un EV que llega para un servicio de rutina", action: "escribir una lista de servicio de bajo voltaje que siga la información de servicio del fabricante", standard: "con al menos 6 puntos correctos y ninguna tarea de alto voltaje" },
    { id: "O5", condition: "Usando ase.com y otras páginas oficiales", action: "hacer una lista de los pasos de certificación hacia el trabajo como técnico de EV", standard: "nombrando la página de origen de cada paso" },
    { id: "O6", condition: "Usando tus notas de este curso", action: "escribir un Plan de Inicio como Técnico de EV con fechas y una sección de habilidades para el currículum", standard: "cumpliendo todas las filas de la rúbrica" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cómo funcionan los EV y cómo mantenerte seguro",
      lessons: [
        {
          title: "Las partes de un vehículo eléctrico",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes principales de un EV y decir qué hace cada una.",
          text: [
            "Un vehículo eléctrico (EV) funciona con electricidad guardada en un paquete grande de baterías de alto voltaje, casi siempre debajo del piso. En muchos EV esta batería trabaja a unos 400 a 1000 voltios. Eso es mucho más que un enchufe de casa, y puede matar.",
            "La batería guarda corriente continua (DC). Un inversor la convierte en la corriente alterna (AC) que usa el motor eléctrico. El motor hace girar las ruedas. Cuando el conductor frena, el motor trabaja al revés, como generador, y devuelve algo de energía a la batería. Esto se llama frenado regenerativo.",
            "El cargador a bordo convierte la AC de una estación de carga en DC para llenar la batería. Un convertidor DC-DC baja el alto voltaje para cargar la batería normal de 12 voltios, que todavía hace funcionar las luces, el radio y las computadoras. Los cables de alto voltaje casi siempre son de color naranja brillante.",
            "Un híbrido (HEV) tiene un motor de gasolina y un motor eléctrico con una batería más pequeña. Un híbrido enchufable (PHEV) tiene una batería más grande que puedes cargar desde un enchufe, además de un motor de gasolina."
          ],
          words: [["EV (vehículo eléctrico)", "un vehículo que funciona solo con electricidad de una batería."], ["Híbrido (HEV)", "un vehículo con motor de gasolina y motor eléctrico que no se enchufa."], ["Híbrido enchufable (PHEV)", "un híbrido con una batería más grande que puedes cargar desde un enchufe."], ["Paquete de baterías de alto voltaje", "la batería grande que mueve el motor; puede ser mortal."], ["Inversor", "la parte que convierte la DC de la batería en AC para el motor."], ["Frenado regenerativo", "frenar el auto usando el motor como generador, lo que devuelve energía a la batería."], ["Cargador a bordo", "la parte del auto que convierte la AC de un cargador en DC para la batería."], ["Convertidor DC-DC", "la parte que baja el alto voltaje para cargar la batería de 12 voltios."]],
          slides: [
            { title: "La batería grande", bullets: ["Paquete de alto voltaje, casi siempre debajo del piso", "A menudo de 400 a 1000 voltios: mortal", "Los cables naranjas llevan alto voltaje"] },
            { title: "Cómo se mueve el auto", bullets: ["Inversor: DC de la batería a AC del motor", "El motor hace girar las ruedas", "El frenado regenerativo devuelve energía"] },
            { title: "La carga y la batería de 12 voltios", bullets: ["Cargador a bordo: AC de la estación a DC para el paquete", "El convertidor DC-DC carga la batería de 12 voltios"] },
            { title: "EV, HEV, PHEV", bullets: ["EV: solo batería", "HEV: motor de gasolina más motor eléctrico, sin enchufe", "PHEV: batería más grande que se enchufa, más motor de gasolina"] }
          ],
          sources: [{ name: "Departamento de Energía de EE. UU., Centro de Datos de Combustibles Alternativos (AFDC): Mantenimiento y seguridad de los vehículos eléctricos", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "En papel, dibuja un auto sencillo visto de lado. Dibuja y nombra seis partes: paquete de baterías de alto voltaje, inversor, motor eléctrico, cargador a bordo, convertidor DC-DC y batería de 12 voltios. Dibuja los cables naranjas de otro color. Junto a cada parte, escribe una línea sobre lo que hace.",
          youCanNow: "nombrar las partes principales de un EV y decir qué hace cada una.",
          quickCheck: [
            { objective: "O1", q: "¿De qué color suelen ser los cables de alto voltaje en los EV?", options: ["Negro", "Verde", "Naranja", "Blanco"], answer: 2, why: "Los cables de alto voltaje suelen ser naranja brillante para que los trabajadores vean el peligro." },
            { objective: "O1", q: "¿Qué hace el frenado regenerativo?", options: ["Usa el motor para frenar el auto y devolver energía a la batería", "Agrega líquido de frenos automáticamente", "Carga el auto desde un tanque de gasolina", "Apaga la batería de 12 voltios"], answer: 0, why: "Al frenar, el motor funciona como generador y manda energía de vuelta a la batería." }
          ]
        },
        {
          title: "Seguridad con alto voltaje: sabe cuándo detenerte",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hacer una lista de los peligros del alto voltaje en un taller y la regla de seguridad de cada uno.",
          text: [
            "El sistema de alto voltaje puede causar descargas eléctricas, quemaduras y arcos eléctricos. Puede seguir siendo peligroso después de apagar el auto, y una batería dañada puede incendiarse, incluso horas o días después.",
            "La primera regla para un trabajador nuevo: no toques cables naranjas, el paquete de baterías ni ninguna parte con una etiqueta de advertencia de alto voltaje. Solo técnicos capacitados y autorizados trabajan en el sistema de alto voltaje. Ellos siguen la información de servicio del fabricante para apagar el sistema, esperar el tiempo que indica y comprobar que ya no tiene energía.",
            "Los técnicos capacitados usan guantes aislantes aprobados para ese voltaje, revisados antes de cada uso, y aplican el bloqueo y etiquetado para que nadie pueda volver a encender la energía mientras trabajan. La regla de bloqueo y etiquetado de OSHA (la agencia de seguridad laboral de EE. UU.) es la 29 CFR 1910.147.",
            "Las demás reglas del taller también aplican: levanta el auto solo en los puntos de elevación del fabricante (el paquete de baterías está abajo), mantén el área despejada y avisa a un supervisor de cualquier batería dañada, con fugas, que eche humo o que esté caliente. Aléjate de ella y no intentes arreglarla."
          ],
          steps: ["Busca cables naranjas y etiquetas de advertencia de alto voltaje.", "No los toques si no tienes capacitación y autorización.", "Levanta el auto solo en los puntos de elevación del fabricante.", "Avisa de cualquier batería dañada, caliente, con humo o con fugas, y aléjate.", "Técnicos capacitados: apagar, esperar, comprobar, bloquear y etiquetar, según la información de servicio."],
          words: [["Descarga eléctrica", "lesión cuando la electricidad pasa por tu cuerpo."], ["Arco eléctrico", "una explosión repentina de calor y luz cuando la electricidad salta por el aire."], ["Autorizado", "con permiso de tu empleador porque tienes la capacitación correcta."], ["Guantes aislantes", "guantes especiales de goma aprobados para proteger contra cierto voltaje."], ["Bloqueo y etiquetado", "pasos que cortan y bloquean la energía para que nadie pueda volver a encenderla mientras se trabaja."], ["Información de servicio", "los pasos oficiales de reparación del fabricante para un vehículo."], ["Punto de elevación", "el lugar debajo del auto donde es seguro levantarlo."]],
          slides: [
            { title: "Los peligros", bullets: ["Descargas, quemaduras y arcos eléctricos", "Puede seguir siendo peligroso con el auto apagado", "Las baterías dañadas pueden incendiarse después"] },
            { title: "Regla número uno para los nuevos", bullets: ["No toques cables naranjas ni el paquete de baterías", "No toques partes con etiquetas de alto voltaje", "Solo técnicos capacitados y autorizados hacen ese trabajo"] },
            { title: "Cómo trabajan los técnicos capacitados", bullets: ["Siguen la información de servicio del fabricante", "Apagan, esperan y comprueban que no hay energía", "Guantes aislantes aprobados; bloqueo y etiquetado"] },
            { title: "Reglas diarias del taller", bullets: ["Levanta solo en los puntos del fabricante", "Avisa de baterías dañadas, calientes o con humo", "Aléjate; no intentes arreglarla"] }
          ],
          sources: [
            { name: "OSHA: Control de la energía peligrosa (bloqueo y etiquetado)", url: "https://www.osha.gov/control-hazardous-energy" },
            { name: "Departamento de Energía de EE. UU., AFDC: Seguridad de los EV y respuesta a emergencias", url: "https://afdc.energy.gov/vehicles/electric-maintenance" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Técnicos y mecánicos de servicio automotriz", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Situación de práctica: llega un EV después de un choque leve. Tiene una abolladura debajo, cerca de la batería, y hay un olor fuerte. Un compañero dice: \"Desconecta ese cable naranja para que podamos levantarlo\". En papel, haz una lista de dos columnas: Peligro y Lo que hago. Escribe al menos cuatro filas.",
          youCanNow: "reconocer los peligros del alto voltaje en un taller y decir la regla de seguridad de cada uno, incluido cuándo detenerte y llamar a un técnico capacitado.",
          quickCheck: [
            { objective: "O2", q: "Eres nuevo y ves un cable naranja debajo de un auto en el que trabajas. ¿Qué haces?", options: ["Lo desconecto para estar seguro", "Lo quito del camino", "Lo envuelvo con cinta", "No lo toco; le aviso a un técnico capacitado"], answer: 3, why: "Los cables naranjas llevan alto voltaje; solo técnicos capacitados y autorizados trabajan en ellos." },
            { objective: "O2", q: "¿Para qué sirve el bloqueo y etiquetado?", options: ["Para cerrar el taller de noche", "Para asegurar que nadie pueda volver a encender la energía durante el trabajo", "Para marcar las llantas que se guardan", "Para guardar bajo llave las llaves del cliente"], answer: 1, why: "El bloqueo y etiquetado mantiene la energía apagada mientras alguien trabaja en el sistema." }
          ]
        },
        {
          title: "Lo básico de la carga y cálculos de carga (solo práctica)",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular la energía necesaria y el tiempo de carga con números de práctica.",
          text: [
            "En EE. UU. hay tres niveles de carga comunes. El Nivel 1 usa un enchufe normal de 120 voltios y es lento. El Nivel 2 usa 240 voltios en las casas o 208 voltios en muchos negocios; es el cargador público más común. La carga rápida DC manda DC directamente a la batería y es la más rápida.",
            "Los conectores comunes son J1772 (Nivel 1 y 2), CCS (J1772 más dos clavijas para carga rápida DC) y J3400, también llamado NACS, basado en el diseño de Tesla. Instalar un cargador en una casa o un negocio es trabajo eléctrico para un electricista con licencia.",
            "El tamaño de la batería se mide en kilovatios-hora (kWh). La potencia del cargador se mide en kilovatios (kW). Fórmula de práctica: horas = kWh necesarios / kW del cargador. Todos los números aquí son inventados, solo para practicar. En la vida real la carga se hace más lenta cuando la batería se va llenando, y las pérdidas hacen que tarde más."
          ],
          steps: ["Busca el tamaño de la batería en kWh.", "Calcula cuánto necesitas: kWh de la batería x (porcentaje que vas a agregar / 100).", "Divide los kWh necesarios entre los kW del cargador.", "Escribe la respuesta en horas y di que es un cálculo aproximado."],
          words: [["Nivel 1", "carga lenta desde un enchufe normal de 120 voltios."], ["Nivel 2", "carga más rápida a 240 o 208 voltios."], ["Carga rápida DC", "la carga más rápida, que manda DC directamente a la batería."], ["Kilovatio-hora (kWh)", "una medida de energía; el tamaño de la batería se da en kWh."], ["Kilovatio (kW)", "una medida de potencia; la velocidad del cargador se da en kW."], ["J1772, CCS, J3400 (NACS)", "nombres de conectores de carga comunes para EV en EE. UU."]],
          slides: [
            { title: "Tres niveles de carga", bullets: ["Nivel 1: enchufe de 120 voltios, lento", "Nivel 2: 240 o 208 voltios, la mayoría de cargadores públicos", "Rápida DC: DC directo a la batería"] },
            { title: "Conectores", bullets: ["J1772 para Nivel 1 y 2", "CCS agrega clavijas de carga rápida DC", "J3400 (NACS), basado en el diseño de Tesla"] },
            { title: "Cálculos de carga (solo práctica)", bullets: ["Horas = kWh necesarios / kW del cargador", "Ejemplo: 60 kWh x 50% = 30 kWh; 30 / 7.5 kW = 4 horas"] },
            { title: "En la vida real es más lento", bullets: ["La carga se hace lenta cuando la batería se llena", "Las respuestas son aproximadas", "Instalar cargadores es para electricistas con licencia"] }
          ],
          sources: [
            { name: "Departamento de Energía de EE. UU., AFDC: Carga de vehículos eléctricos", url: "https://afdc.energy.gov/fuels/electricity-stations" },
            { name: "EVITP: Programa de Capacitación en Infraestructura para Vehículos Eléctricos (para electricistas con licencia)", url: "https://evitp.org/" }
          ],
          tryIt: "Solo práctica. Resuelve en papel y muestra tu trabajo: (a) Una batería de 80 kWh pasa del 20% al 80%. ¿Cuántos kWh son? (b) ¿Cuánto tardaría eso en un cargador de Nivel 2 de 9.6 kW? (c) Una batería de 40 kWh necesita 10 kWh en un enchufe de Nivel 1 de 1.25 kW. ¿Cuántas horas? Respuestas para revisarte: (a) 48 kWh, (b) 5 horas, (c) 8 horas.",
          youCanNow: "nombrar los niveles de carga y los conectores, y calcular aproximadamente el tiempo de carga con números de práctica.",
          quickCheck: [
            { objective: "O3", q: "Solo práctica: necesitas 24 kWh y el cargador da 6 kW. ¿Cuánto tarda, más o menos?", options: ["2 horas", "18 horas", "4 horas", "30 horas"], answer: 2, why: "Horas = kWh / kW, así que 24 / 6 = 4 horas." },
            { objective: "O3", q: "¿Qué nivel de carga usa un enchufe normal de casa de 120 voltios?", options: ["Nivel 1", "Nivel 2", "Carga rápida DC", "Solo J3400"], answer: 0, why: "El Nivel 1 usa un enchufe estándar de 120 voltios." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Cómo funcionan los EV y cómo mantenerte seguro",
        questions: [
          { objective: "O1", q: "¿Qué parte convierte la DC de la batería en AC para el motor?", options: ["La batería de 12 voltios", "El inversor", "Las pastillas de freno", "La tapa del puerto de carga"], answer: 1, why: "El inversor convierte la DC de la batería en AC para el motor." },
          { objective: "O1", q: "¿Qué hace el convertidor DC-DC?", options: ["Llena la batería grande desde la pared", "Hace girar las ruedas", "Carga la batería de 12 voltios desde el sistema de alto voltaje", "Enfría la cabina"], answer: 2, why: "Baja el alto voltaje para mantener cargada la batería de 12 voltios." },
          { objective: "O2", q: "El auto está apagado. ¿Es seguro tocar el sistema de alto voltaje?", options: ["Sí, siempre", "Sí, si el radio está apagado", "Sí, después de un minuto", "No necesariamente; solo los técnicos capacitados siguen los pasos de apagado y comprobación"], answer: 3, why: "El alto voltaje puede seguir siendo peligroso con el auto apagado; los técnicos capacitados primero apagan, esperan y comprueban." },
          { objective: "O2", q: "Una batería debajo de un auto está caliente y echa humo. ¿Qué haces?", options: ["Me alejo y aviso a un supervisor de inmediato", "Le echo agua yo mismo", "Levanto el auto para mirar", "Desconecto los cables naranjas"], answer: 0, why: "Una batería dañada puede incendiarse; aléjate y avisa." },
          { objective: "O3", q: "Solo práctica: batería de 60 kWh, agregar 50%. ¿Cuántos kWh son?", options: ["50 kWh", "110 kWh", "30 kWh", "10 kWh"], answer: 2, why: "60 x 50 / 100 = 30 kWh." }
        ]
      }
    },
    {
      name: "Capítulo 2: El trabajo de servicio y tu camino hacia el empleo",
      lessons: [
        {
          title: "Servicios de rutina de un EV",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escribir una lista de servicio de bajo voltaje para un EV que siga la información de servicio del fabricante.",
          text: [
            "Los EV necesitan menos mantenimiento que los autos de gasolina: no hay cambios de aceite, bujías ni escape. Pero todavía necesitan servicio, y gran parte es trabajo de bajo voltaje que un técnico nuevo puede aprender.",
            "Llantas: los EV suelen ser pesados, así que revisa la presión, la banda de rodamiento y el desgaste de las llantas, y rótalas como indica el fabricante. Frenos: con el frenado regenerativo las pastillas se gastan despacio, pero hay que revisar los frenos, y las partes que se usan poco pueden oxidarse o trabarse. Revisa también los limpiaparabrisas, las luces, la suspensión y las partes de la dirección, el filtro de aire de la cabina y la batería de 12 voltios.",
            "Algunos EV usan líquido refrigerante para la batería y la electrónica. Las revisiones y los cambios siguen el calendario y los pasos del fabricante; nunca abras una parte de enfriamiento de alto voltaje si no tienes capacitación.",
            "Usa siempre la información de servicio del fabricante para el auto exacto: el calendario, los puntos de elevación y los pasos. Si una tarea toca algo naranja o con etiqueta de alto voltaje, detente y pásasela a un técnico capacitado."
          ],
          steps: ["Busca la información de servicio de la marca, el modelo y el año exactos.", "Levanta el auto solo en los puntos de elevación indicados.", "Revisa llantas, frenos, limpiaparabrisas, luces, suspensión y dirección.", "Revisa el filtro de aire de la cabina y la batería de 12 voltios.", "Revisa el refrigerante solo como lo indica la información de servicio.", "Detente y pasa a otra persona todo lo que sea naranja o tenga etiqueta de alto voltaje."],
          words: [["Bajo voltaje", "los sistemas normales de 12 voltios, como las luces y el radio, que son más seguros para trabajar."], ["Rotación de llantas", "cambiar las llantas de lugar para que se gasten de forma pareja."], ["Filtro de aire de la cabina", "el filtro que limpia el aire que entra a la cabina del auto."], ["Refrigerante", "el líquido que evita que las partes se calienten demasiado."], ["Calendario de servicio", "la lista del fabricante de qué revisar y cuándo."]],
          slides: [
            { title: "Menos mantenimiento, no cero", bullets: ["Sin cambios de aceite, bujías ni escape", "Igual necesita revisiones regulares"] },
            { title: "Llantas y frenos", bullets: ["Autos pesados: revisa presión, banda y desgaste", "Los frenos se gastan despacio pero pueden oxidarse o trabarse", "Rota las llantas como indica el fabricante"] },
            { title: "Otras revisiones", bullets: ["Limpiaparabrisas, luces, suspensión, dirección", "Filtro de aire de la cabina y batería de 12 voltios", "Refrigerante solo según la información de servicio"] },
            { title: "Conoce tu límite", bullets: ["Usa la información de servicio de ese auto exacto", "Levanta solo en los puntos indicados", "¿Naranja o etiqueta de alto voltaje? Detente y pásalo"] }
          ],
          sources: [{ name: "Departamento de Energía de EE. UU., AFDC: Mantenimiento de los vehículos eléctricos", url: "https://afdc.energy.gov/vehicles/electric-maintenance" }],
          tryIt: "Elige cualquier modelo de EV que hayas visto. En papel, escribe una lista de servicio con al menos 8 puntos para una visita de rutina. Marca cada uno BV (bajo voltaje, lo puedes hacer tú) o ALTO (alto voltaje, se lo pasas a otro). Luego revisa: ¿pusiste algo naranja en la columna BV? Si es así, corrígelo.",
          youCanNow: "escribir una lista de servicio de bajo voltaje para un EV y decir qué trabajos pasarle a un técnico capacitado en alto voltaje.",
          quickCheck: [
            { objective: "O4", q: "¿Qué trabajo NO necesita un EV?", options: ["Rotación de llantas", "Cambios de aceite", "Revisión de frenos", "Revisión del filtro de aire de la cabina"], answer: 1, why: "Un vehículo eléctrico de batería no tiene aceite de motor que cambiar." },
            { objective: "O4", q: "¿Dónde encuentras los puntos de elevación y el calendario de servicio correctos de un EV?", options: ["Adivinando a partir de otro auto", "En un video de redes sociales", "En la memoria del cliente", "En la información de servicio del fabricante para ese auto exacto"], answer: 3, why: "La información de servicio del fabricante tiene los puntos de elevación y el calendario correctos." }
          ]
        },
        {
          title: "Certificaciones y capacitación para trabajar con EV",
          objectives: ["O5"],
          minutes: 5,
          goal: "Hacer una lista de los pasos de certificación hacia el trabajo como técnico de EV, con la fuente oficial de cada uno.",
          text: [
            "La mayoría de los técnicos automotrices empieza con un programa de capacitación en una escuela secundaria, un colegio comunitario o una escuela técnica, o empieza como técnico de cambio de aceite o de llantas y aprende en el trabajo. Los programas de aprendizaje (apprenticeships) y las capacitaciones de los fabricantes son otras formas de entrar.",
            "ASE (el Instituto Nacional para la Excelencia en el Servicio Automotriz de EE. UU.) ofrece las certificaciones de técnico más conocidas. Su prueba L3, Especialista en Vehículos Híbridos/Eléctricos Livianos, cubre el diagnóstico del sistema de batería, el sistema de tracción, la electrónica de potencia y más. Antes de inscribirte en la L3, debes aprobar la A6 (Sistemas Eléctricos/Electrónicos) y la A8 (Rendimiento del Motor). La certificación ASE también exige experiencia práctica de trabajo; revisa las reglas actuales en ase.com.",
            "Muchos fabricantes de autos también capacitan a técnicos en sus propios EV. Los electricistas que instalan cargadores pueden tomar la capacitación EVITP, que es para electricistas con licencia. Los costos, las reglas de las pruebas y los requisitos de experiencia cambian, así que revisa cada página oficial antes de pagar.",
            "Este curso te prepara para empezar. No te certifica."
          ],
          steps: ["Busca programas locales de tecnología automotriz y programas de aprendizaje.", "Lee la página de la prueba L3 de ASE y anota sus requisitos previos (A6 y A8).", "Lee las reglas de experiencia de trabajo de ASE.", "Pregunta en talleres y concesionarios locales qué certificaciones y capacitaciones de fabricantes piden.", "Escribe cada paso, una fecha meta y la página oficial."],
          words: [["ASE", "el Instituto Nacional para la Excelencia en el Servicio Automotriz, que certifica a técnicos automotrices en EE. UU."], ["Certificación", "prueba de que aprobaste un examen y cumpliste las reglas de experiencia."], ["Requisito previo", "algo que debes terminar antes de poder empezar el siguiente paso."], ["Diagnosticar", "descubrir qué está mal y por qué."], ["EVITP", "el Programa de Capacitación en Infraestructura para Vehículos Eléctricos, que capacita a electricistas con licencia para instalar cargadores."]],
          slides: [
            { title: "Formas de entrar", bullets: ["Programas automotrices en escuelas o colegios comunitarios", "Empezar como técnico de aceite o de llantas", "Programas de aprendizaje y capacitación de fabricantes"] },
            { title: "El camino ASE hacia el trabajo con EV", bullets: ["Aprobar A6 Sistemas Eléctricos/Electrónicos", "Aprobar A8 Rendimiento del Motor", "Después L3 Especialista en Vehículos Híbridos/Eléctricos Livianos"] },
            { title: "Más que debes saber", bullets: ["ASE también exige experiencia práctica de trabajo", "Los fabricantes capacitan en sus propios EV", "EVITP es para electricistas con licencia que instalan cargadores"] },
            { title: "Revisa antes de pagar", bullets: ["Las reglas y los costos cambian: usa ase.com", "Escribe cada paso, una fecha y la fuente", "Este curso te prepara; no te certifica"] }
          ],
          sources: [
            { name: "ASE: Prueba L3 Especialista en Vehículos Híbridos/Eléctricos Livianos", url: "https://www.ase.com/tests/l3/" },
            { name: "ASE: Pruebas", url: "https://www.ase.com/tests" },
            { name: "EVITP: Programa de Capacitación en Infraestructura para Vehículos Eléctricos", url: "https://evitp.org/" },
            { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Cómo llegar a ser técnico de servicio automotriz", url: "https://www.bls.gov/ooh/installation-maintenance-and-repair/automotive-service-technicians-and-mechanics.htm" }
          ],
          tryIt: "Abre la página de la prueba L3 de ASE. Anota las dos pruebas que debes aprobar primero y tres temas que cubre la L3. Después busca un programa de tecnología automotriz o de aprendizaje cerca de ti y anota su nombre y su dirección web.",
          youCanNow: "nombrar el camino ASE hacia el trabajo con EV (A6, A8 y después L3), decir qué más se necesita y encontrar capacitación cerca de ti en páginas oficiales.",
          quickCheck: [
            { objective: "O5", q: "¿Cuál es la prueba de ASE de especialista en vehículos híbridos/eléctricos?", options: ["A1", "L3", "A5", "T2"], answer: 1, why: "L3 es la prueba de ASE de Especialista en Vehículos Híbridos/Eléctricos Livianos." },
            { objective: "O5", q: "¿Qué debes aprobar antes de inscribirte en la L3 de ASE?", options: ["A6 y A8", "Un examen de licencia CDL", "El examen de ciencias del GED", "La Sección 608 de la EPA"], answer: 0, why: "ASE exige A6 Sistemas Eléctricos/Electrónicos y A8 Rendimiento del Motor antes de la L3." }
          ]
        },
        {
          title: "Tu Plan de Inicio como Técnico de EV",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un Plan de Inicio como Técnico de EV con fechas y una sección de habilidades para el currículum.",
          text: [
            "Ahora junta todo en una página que puedas llevar a un programa de capacitación, a un taller o a un concesionario. Un plan con fechas reales muestra que vas en serio.",
            "Tu plan tiene seis partes: cómo funciona un EV, con tus propias palabras; tus reglas de seguridad de alto voltaje; dos problemas de práctica de carga con tu trabajo; una lista de servicio de bajo voltaje; tu camino de certificación con fechas y fuentes; y una sección de \"Habilidades con EV\" para el currículum.",
            "Para el currículum, escribe cosas ciertas que ya puedes hacer, en viñetas cortas que empiecen con un verbo de acción. Por ejemplo: \"Conozco las partes principales del sistema de tracción de un EV y de un híbrido\". \"Capacitado en conciencia de seguridad de alto voltaje: identifico cables naranjas y me detengo para llamar a un técnico calificado\". \"Calculo aproximadamente el tiempo de carga según el tamaño de la batería y del cargador\". Agrega trabajos pasados que ayuden: cuidado de autos, trabajo en llantas o cambio de aceite, vehículos militares, ayudante de electricista o equipos de almacén.",
            "Veteranos: muchas habilidades militares con vehículos y electricidad se pueden aprovechar. Pregunta en un centro de empleo local por ayuda para pagar la capacitación."
          ],
          steps: ["Escribe tu explicación de 3 o 4 oraciones de cómo funciona un EV.", "Escribe tus reglas de seguridad de alto voltaje.", "Agrega dos problemas de práctica de carga con tu trabajo.", "Agrega tu lista de servicio de bajo voltaje.", "Escribe tu camino de certificación con fechas meta y páginas de origen.", "Escribe 3 viñetas para el currículum que empiecen con un verbo de acción."],
          words: [["Currículum", "un documento corto que muestra a los empleadores tus habilidades, tu trabajo y tu capacitación."], ["Fecha meta", "el día en que planeas terminar un paso."], ["Centro de empleo", "una oficina pública gratis que ayuda a la gente a encontrar trabajo y capacitación; en EE. UU. muchas se llaman American Job Centers."]],
          slides: [
            { title: "Una página, seis partes", bullets: ["Cómo funciona un EV; reglas de seguridad", "Cálculos de carga; lista de servicio", "Camino de certificación con fechas; sección del currículum"] },
            { title: "Fechas reales", bullets: ["Cuándo empiezas un programa de capacitación", "Cuándo piensas aprobar A6 y A8", "Cuándo apuntas a la L3, después de tener experiencia"] },
            { title: "Currículum: habilidades con EV", bullets: ["Viñetas cortas que empiezan con un verbo de acción", "Solo cosas ciertas que sabes hacer", "Agrega trabajo pasado con autos, herramientas o electricidad"] },
            { title: "Busca ayuda", bullets: ["American Job Centers y servicios para veteranos", "Pregunta en talleres y concesionarios qué buscan"] }
          ],
          sources: [{ name: "CareerOneStop: Encuentra un American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }],
          tryIt: "Tarea final: haz tu Plan de Inicio como Técnico de EV en una página, con las seis partes. Pon una fecha real junto a cada paso de capacitación y certificación, y la dirección web de cada requisito que revisaste. Lee en voz alta tus viñetas del currículum como si estuvieras en una entrevista.",
          youCanNow: "mostrar a un taller o a un programa de capacitación un plan escrito para empezar a trabajar con EV, con fechas, fuentes y una sección de habilidades para el currículum.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es la mejor viñeta de currículum para un trabajo de nivel inicial en un taller de EV?", options: ["\"Certificado ASE L3\" (cuando no lo estás)", "\"Me gustan los autos\".", "\"Calculo aproximadamente el tiempo de carga según el tamaño de la batería y del cargador\".", "\"Me encantan los Tesla\"."], answer: 2, why: "Es cierta y concreta; nunca digas que tienes una certificación que no tienes." },
            { objective: "O6", q: "Tu plan dice \"Certificarme con ASE\". ¿Qué lo hace más fuerte?", options: ["Borrarlo", "Escribirlo en mayúsculas", "Agregar el nombre de un amigo", "Nombrar A6, A8 y L3 con fechas meta y la página de ase.com"], answer: 3, why: "Las pruebas con nombre, las fechas y la fuente oficial convierten un deseo en un plan." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: El trabajo de servicio y tu camino hacia el empleo",
        questions: [
          { objective: "O4", q: "¿Por qué hay que revisar los frenos de un EV aunque se gasten despacio?", options: ["Las partes que se usan poco pueden oxidarse o trabarse", "Los EV no tienen frenos", "Los frenos cargan la batería por completo", "Nunca hay que revisarlos"], answer: 0, why: "Con el frenado regenerativo se usan menos, así que las partes del freno pueden oxidarse o trabarse." },
          { objective: "O4", q: "En tu lista de servicio, una tarea tiene que ver con un cable naranja. ¿Cómo la marcas?", options: ["BV, la puedo hacer yo", "La salto y no le digo a nadie", "ALTO: se la paso a un técnico capacitado en alto voltaje", "La hago rápido"], answer: 2, why: "Todo lo naranja o con etiqueta de alto voltaje va para un técnico capacitado y autorizado." },
          { objective: "O5", q: "¿Qué necesita la certificación ASE además de aprobar una prueba?", options: ["Un título universitario", "Experiencia práctica de trabajo", "Una licencia CDL", "Tener un EV"], answer: 1, why: "La certificación ASE pide experiencia de trabajo además de aprobar la prueba." },
          { objective: "O5", q: "¿Para quién es la capacitación EVITP de instalación de cargadores?", options: ["Para cualquiera con un teléfono", "Para vendedores de autos", "Para clientes", "Para electricistas con licencia"], answer: 3, why: "EVITP capacita a electricistas con licencia que instalan cargadores de EV." },
          { objective: "O6", q: "¿Qué debe tener cada paso de tu Plan de Inicio como Técnico de EV?", options: ["Una fecha meta y la página oficial que revisaste", "Un precio que adivinaste", "La firma de un amigo", "Nada más"], answer: 0, why: "Las fechas y las fuentes hacen que cada paso sea real y se pueda comprobar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a técnico de vehículos eléctricos (EV)",
    questions: [
      { objective: "O1", q: "¿Dónde suele estar el paquete de baterías de alto voltaje en un EV?", options: ["En la tapa del maletero", "Debajo del piso", "Detrás del radio", "En el volante"], answer: 1, why: "La mayoría de los paquetes de baterías de los EV van debajo del piso." },
      { objective: "O1", q: "¿Qué hace funcionar las luces y el radio en un EV?", options: ["La batería de 12 voltios", "Las llantas", "El cable de carga", "El tanque de gasolina"], answer: 0, why: "Una batería normal de 12 voltios todavía hace funcionar los sistemas de bajo voltaje." },
      { objective: "O1", q: "¿Qué es un híbrido enchufable (PHEV)?", options: ["Un auto sin batería", "Un auto de gasolina con cargador de teléfono", "Un EV sin motor", "Un híbrido con una batería más grande que puedes cargar desde un enchufe"], answer: 3, why: "Un PHEV tiene motor de gasolina y una batería más grande que se enchufa." },
      { objective: "O1", q: "¿Qué parte convierte la AC de una estación de carga en DC para la batería?", options: ["El motor", "Las pastillas de freno", "El cargador a bordo", "El filtro de aire de la cabina"], answer: 2, why: "El cargador a bordo convierte la AC de la estación en DC para el paquete." },
      { objective: "O2", q: "Como trabajador nuevo, ¿qué parte NUNCA debes tocar sin capacitación?", options: ["Las plumillas del limpiaparabrisas", "Los cables naranjas de alto voltaje", "Los tapones de las válvulas de las llantas", "El filtro de aire de la cabina"], answer: 1, why: "Los cables naranjas llevan alto voltaje mortal." },
      { objective: "O2", q: "¿Qué es un arco eléctrico?", options: ["Una explosión repentina de calor y luz cuando la electricidad salta por el aire", "Un ajuste de los faros", "Un tipo de llanta", "Un conector de carga"], answer: 0, why: "El arco eléctrico es una explosión eléctrica que puede quemar y herir." },
      { objective: "O2", q: "Antes de trabajar con alto voltaje, ¿qué hace un técnico capacitado?", options: ["Sube el volumen del radio", "Solo abre el cofre", "Se pone guantes de algodón", "Apaga, espera, comprueba que no hay energía y bloquea según la información de servicio"], answer: 3, why: "Apagar, esperar, comprobar y bloquear y etiquetar siguen los pasos del fabricante." },
      { objective: "O2", q: "¿Dónde levantas un EV en un elevador de taller?", options: ["Debajo del paquete de baterías", "En cualquier parte plana", "Solo en los puntos de elevación del fabricante", "Por los parachoques"], answer: 2, why: "La batería está abajo; los puntos indicados la protegen a ella y a ti." },
      { objective: "O3", q: "Solo práctica: se necesitan 36 kWh en un cargador de 9 kW. ¿Cuánto tarda?", options: ["4 horas", "45 horas", "27 horas", "3 horas"], answer: 0, why: "36 / 9 = 4 horas." },
      { objective: "O3", q: "El tamaño de la batería se mide en:", options: ["Millas por galón", "Kilovatios-hora (kWh)", "Libras por pulgada cuadrada", "Galones"], answer: 1, why: "La energía de la batería se mide en kilovatios-hora." },
      { objective: "O3", q: "¿Cuál suele ser la forma más rápida de cargar?", options: ["Nivel 1", "Nivel 2", "Un cable de arranque de 12 voltios", "Carga rápida DC"], answer: 3, why: "La carga rápida DC manda DC directamente a la batería con alta potencia." },
      { objective: "O3", q: "¿Por qué el tiempo de carga calculado es solo aproximado?", options: ["Los cargadores nunca funcionan", "Las baterías no tienen tamaño", "La carga se hace lenta cuando la batería se llena, y hay pérdidas", "kWh y kW significan lo mismo"], answer: 2, why: "La carga real se hace lenta cerca del 100% y pierde algo de energía." },
      { objective: "O4", q: "¿Cuál es un buen punto para la lista de servicio de un EV?", options: ["Revisar la presión y la banda de las llantas", "Cambiar el aceite del motor", "Cambiar las bujías", "Arreglar el tubo de escape"], answer: 0, why: "Los EV necesitan revisión de llantas; no tienen aceite de motor, bujías ni escape." },
      { objective: "O4", q: "¿Por qué hay que vigilar de cerca el desgaste de las llantas en los EV?", options: ["Los EV no tienen llantas", "Los EV suelen ser pesados", "Las llantas cargan la batería", "Las llantas de los EV nunca se gastan"], answer: 1, why: "Los vehículos pesados pueden gastar las llantas más rápido, así que revísalas seguido." },
      { objective: "O4", q: "¿Dónde encuentras los pasos correctos para el refrigerante de un EV?", options: ["En el manual de cualquier auto de gasolina", "Adivinando", "En la memoria de un compañero", "En la información de servicio del fabricante"], answer: 3, why: "Las revisiones de refrigerante de cada EV siguen la información de servicio de su fabricante." },
      { objective: "O5", q: "¿Qué significa ASE?", options: ["Expertos en Venta de Autos", "Asociación de Electricistas Seguros", "Instituto Nacional para la Excelencia en el Servicio Automotriz", "Energía Solar Americana"], answer: 2, why: "ASE es el Instituto Nacional para la Excelencia en el Servicio Automotriz." },
      { objective: "O5", q: "¿Dónde revisas las reglas y los costos actuales de las pruebas ASE?", options: ["ase.com", "Una publicación en redes sociales", "Un anuncio de ventas", "Las notas viejas de un amigo"], answer: 0, why: "El sitio oficial de ASE tiene las reglas actuales." },
      { objective: "O5", q: "¿Este curso te certifica como técnico de EV?", options: ["Sí, después del examen", "No; te prepara, y la certificación viene de ASE y de otros programas", "Sí, si lo terminas en un día", "Solo para híbridos"], answer: 1, why: "El curso te prepara; las certificaciones vienen de ASE, de los fabricantes y de programas aprobados." },
      { objective: "O6", q: "¿Qué va en tu Plan de Inicio como Técnico de EV?", options: ["La contraseña de tu banco", "Una certificación que no tienes", "Tus colores de auto favoritos", "Fechas meta para A6, A8 y L3"], answer: 3, why: "Las fechas de cada paso hacen que el plan sea real." },
      { objective: "O6", q: "Una buena viñeta de currículum debe ser:", options: ["Larga y vaga", "Sobre una habilidad que esperas aprender", "Cierta, concreta y empezar con un verbo de acción", "Copiada de un desconocido"], answer: 2, why: "Los empleadores confían en viñetas cortas, ciertas y concretas." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya sobre los EV?", from: [0, 3, 4, 7, 8, 10, 12, 15, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Cómo funciona un EV", objective: "O1", notYet: "Le falta el paquete de baterías o el inversor, o confunde lo que hacen.", meets: "Nombra el paquete de baterías, el inversor, el motor, el cargador a bordo, el convertidor DC-DC y la batería de 12 voltios, y dice qué hace cada uno.", exceeds: "También explica el frenado regenerativo y la diferencia entre un EV, un HEV y un PHEV." },
      { name: "Reglas de seguridad de alto voltaje", objective: "O2", notYet: "No dice que hay que alejarse de los cables naranjas y del paquete de baterías.", meets: "Dice que no se tocan partes naranjas o con etiqueta de alto voltaje sin capacitación, que se usan los puntos de elevación del fabricante y que se avisa de las baterías dañadas.", exceeds: "También explica apagar, esperar, comprobar y el bloqueo y etiquetado, y quién tiene permiso para hacerlo." },
      { name: "Cálculos de carga", objective: "O3", notYet: "Un error de cálculo, o no muestra el trabajo.", meets: "Los dos problemas están bien, con la fórmula y las unidades a la vista.", exceeds: "También dice por qué el tiempo real será más largo." },
      { name: "Lista de servicio", objective: "O4", notYet: "Incluye cambios de aceite o una tarea de alto voltaje marcada como permitida.", meets: "Al menos 6 puntos correctos de bajo voltaje, con las tareas de alto voltaje marcadas ALTO.", exceeds: "Indica que cada punto sigue la información de servicio del fabricante para el auto exacto." },
      { name: "Camino de certificación", objective: "O5", notYet: "Sin fechas, o con pasos sin fuente.", meets: "Nombra una ruta de capacitación y ASE A6, A8 y L3, cada una con fecha meta y dirección web.", exceeds: "Agrega un programa de capacitación de un fabricante o un empleador local, y un plan B." },
      { name: "Sección del currículum", objective: "O6", notYet: "Las viñetas son vagas o dicen que tiene una certificación que no tiene.", meets: "Tres viñetas ciertas que empiezan con un verbo de acción y encajan con el trabajo en un taller de EV.", exceeds: "Relaciona trabajos pasados (cuidado de autos, vehículos militares, electricidad) con tareas de EV." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de tecnología automotriz, un programa de aprendizaje o una capacitación de fabricante en 90 días",
      "Participantes que aprueban ASE A6 o A8 en 12 meses (según lo que informan)",
      "Participantes contratados en un taller automotriz o en el área de servicio de un concesionario en 6 meses (encuesta de seguimiento o informe de un socio)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con internet para leer las lecciones y revisar las páginas oficiales",
      "Papel, lápiz, plumas de colores y una calculadora (la del teléfono sirve)",
      "Opcional: un dibujo impreso de las partes de un EV para nombrarlas",
      "Unos 60 a 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En este curso nadie toca el sistema de alto voltaje de un vehículo. Si visitan un taller o muestran un vehículo, un técnico capacitado y autorizado dirige y los participantes solo miran.",
      "Hagan juntos la prueba inicial; luego hagan un capítulo por sesión y resuelvan los cálculos de carga en una pizarra.",
      "Pida a los participantes que abran en vivo la página de la L3 de ASE y encuentren ellos mismos los requisitos previos.",
      "Invite a un gerente de servicio de un concesionario local, a un instructor automotriz de un colegio comunitario o a un técnico de EV con certificación ASE para que hable sobre la contratación.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila Todavía no a la vez.",
      "Dirija a los veteranos y a las personas que vuelven a trabajar a los American Job Centers para recibir ayuda con la capacitación."
    ]
  }
};

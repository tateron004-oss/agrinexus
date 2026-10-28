"use strict";

// Koach Learn course (Spanish translation of veterans-ai-cybersecurity-careers). Shape and translation rules: scripts/koachlearn-courses/README.md.
// US agency and program names (CISA, NICCS, VA, VETS, VET TEC, CompTIA Security+) stay in English with a short Spanish explanation.

module.exports = {
  id: "veterans-ai-cybersecurity-careers-es",
  lang: "es",
  translationOf: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "La IA y las carreras en ciberseguridad",
  skills: "Nombrar empleos de nivel inicial en ciberseguridad, Traducir tu experiencia militar en seguridad, Encontrar formación oficial en ciberseguridad, Estudiar seguridad con IA, Analizar un correo sospechoso",
  outcome: "elegir un empleo de nivel inicial en ciberseguridad que encaje con tu experiencia militar, usar un asistente de IA de forma segura para estudiar y para revisar un correo sospechoso, y escribir una nota de incidente corta y líneas de currículum que lo demuestren.",
  about: [
    "Muchos veteranos ya piensan como profesionales de la seguridad: protegiste información, seguiste reglas de acceso, hiciste guardias y reportaste cualquier cosa extraña. Los empleadores de ciberseguridad necesitan justo esa forma de pensar.",
    "En este curso vas a aprender los principales empleos de nivel inicial en ciberseguridad, cómo los está cambiando la IA, cómo traducir tu servicio a palabras de ciberseguridad, dónde encontrar formación oficial y cómo usar la IA como compañera de estudio. Terminarás revisando un correo sospechoso como lo haría un analista principiante.",
    "Cada lección toma unos cinco minutos. Lee, mira las diapositivas y luego haz la tarea \"Pruébalo ahora\". Una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. No se hace hacking: solo practicas con ejemplos seguros e inventados."
  ],
  finalTask: "Toma un correo sospechoso (uno real de tu carpeta de spam sin datos personales, o un ejemplo inventado), usa un asistente de IA para ayudarte a hacer una lista de sus señales de alerta sin hacer clic en nada y escribe una nota de incidente de cinco líneas: qué llegó, las señales de alerta, el riesgo, qué hiciste y qué recomiendas. Luego escribe dos líneas de currículum que relacionen tu experiencia militar con un empleo de ciberseguridad.",
  chapters: [
    {
      name: "Capítulo 1: Tu camino hacia la ciberseguridad",
      lessons: [
        {
          title: "Los empleos de ciberseguridad y cómo los está cambiando la IA",
          minutes: 5,
          goal: "Nombrar tres empleos de nivel inicial en ciberseguridad y decir qué hace cada uno día a día.",
          text: [
            "Ciberseguridad significa proteger computadoras, redes e información de personas que quieren robarlas, cambiarlas o dañarlas.",
            "Los empleos comunes para empezar incluyen: analista del centro de operaciones de seguridad (SOC), que vigila las alertas y revisa si son ataques reales; soporte de TI con funciones de seguridad, que crea cuentas y arregla problemas de acceso; y analista de gobernanza, riesgo y cumplimiento (GRC), que revisa que una organización siga sus reglas de seguridad.",
            "La IA ya ayuda a ordenar alertas, resumir registros y detectar actividad inusual. Los atacantes también usan IA, por ejemplo para escribir correos de estafa convincentes. Por eso los empleadores buscan personas que sepan usar herramientas de IA y que sigan juzgando qué es real."
          ],
          words: [["SOC", "centro de operaciones de seguridad: el equipo que vigila los ataques y responde a ellos."], ["Alerta", "un aviso que lanza una herramienta de seguridad cuando ve algo inusual."], ["GRC", "gobernanza, riesgo y cumplimiento: asegurarse de que una organización siga sus reglas de seguridad y las leyes."]],
          slides: [
            { title: "Qué es la ciberseguridad", bullets: ["Proteger computadoras, redes e información", "De quienes las roban, cambian o dañan"] },
            { title: "Tres empleos para empezar", bullets: ["Analista SOC: revisa alertas", "Soporte de TI con seguridad: cuentas y accesos", "Analista GRC: revisa que se sigan las reglas"] },
            { title: "La IA en los dos lados", bullets: ["Defensores: ordenan alertas, resumen registros", "Atacantes: escriben correos de estafa convincentes", "Los empleadores necesitan gente que use la IA y la juzgue"] }
          ],
          tryIt: "Busca en un sitio de empleo \"analista SOC\", \"soporte de TI\" y \"analista GRC\" en tu zona. Para cada uno, escribe una oración sobre lo que hace el empleo, usando las ofertas.",
          youCanNow: "nombrar tres empleos de nivel inicial en ciberseguridad y explicar qué hace cada uno."
        },
        {
          title: "Traducir tu servicio a habilidades de ciberseguridad",
          minutes: 5,
          goal: "Escribir con palabras civiles tres habilidades de ciberseguridad que ya tienes por tu servicio militar.",
          text: [
            "Quizás no trabajaste en ciberseguridad, pero probablemente practicaste lo básico. La OPSEC (seguridad de las operaciones) es proteger información del enemigo. Hacer guardia es vigilar. Reportar un incidente de seguridad por la cadena de mando es responder a incidentes. Controlar quién entra a un edificio es control de acceso.",
            "Si tuviste una autorización de seguridad, dilo en tu currículum como lo permita tu oficina de seguridad (normalmente el nivel y si está activa). Muchos empleadores de ciberseguridad la valoran.",
            "El sitio web NICCS de la Cybersecurity and Infrastructure Security Agency (CISA, la Agencia de Ciberseguridad y Seguridad de Infraestructura) tiene una sección para veteranos y una Cyber Career Pathways Tool (herramienta de rutas profesionales en ciberseguridad) que muestra los roles y las habilidades que necesita cada uno. Úsala junto con My Next Move for Veterans para relacionar tu código de puesto."
          ],
          steps: ["Haz una lista de tres hábitos de seguridad de tu servicio (OPSEC, guardia, control de acceso, reportes).", "Pregúntale a un asistente de IA: \"Traduce estas funciones de seguridad militar a habilidades de ciberseguridad que usan los empleadores.\"", "Compara con los roles de la Cyber Career Pathways Tool de NICCS.", "Quédate con las tres habilidades que sean ciertas y fáciles de explicar."],
          words: [["OPSEC", "seguridad de las operaciones: mantener la información útil lejos de un adversario."], ["Control de acceso", "decidir quién puede entrar a un lugar, un sistema o un archivo."], ["Respuesta a incidentes", "lo que hace un equipo cuando pasa algo malo o sospechoso."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, el sitio web de carreras y formación en ciberseguridad de CISA."]],
          slides: [
            { title: "Ya practicaste lo básico", bullets: ["OPSEC = proteger información", "Hacer guardia = vigilar", "Reportar por la cadena de mando = responder a incidentes"] },
            { title: "Autorización de seguridad", bullets: ["Muchos empleadores de ciberseguridad la valoran", "Ponla como lo permita tu oficina de seguridad"] },
            { title: "Ayuda oficial: NICCS (CISA)", bullets: ["Una sección para veteranos", "Cyber Career Pathways Tool", "Úsala con My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (Departamento de Trabajo de EE. UU.)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Escribe tres funciones de seguridad de tu propio servicio. Pídele a un asistente de IA que las ponga en palabras de ciberseguridad y luego revísalas contra un rol de la Cyber Career Pathways Tool de NICCS.",
          youCanNow: "describir tu experiencia militar en seguridad como habilidades de ciberseguridad que un empleador reconoce."
        },
        {
          title: "Encontrar formación oficial y ayuda para pagarla",
          minutes: 5,
          goal: "Encontrar una ruta de formación y revisar en páginas oficiales lo que puede pagar el VA.",
          text: [
            "NICCS tiene un Education and Training Catalog (catálogo de educación y formación) donde puedes buscar cursos de ciberseguridad. Las ofertas de empleo te dirán qué certificación inicial quieren los empleadores; CompTIA Security+ es una que aparece seguido en las ofertas de nivel inicial, pero lee las ofertas de tu propia zona.",
            "El VA (el Departamento de Asuntos de Veteranos) te puede devolver los costos de exámenes de licencia y certificación si tienes un beneficio del GI Bill que califique. Cuando revisamos va.gov en octubre de 2026, el límite era de no más de $2,000 por examen, y usa parte de tu derecho. El programa VET TEC 2.0 del VA financia formación en alta tecnología sin título universitario, como programación, software y ciencias de la información, con un número limitado de lugares cada año. La página de VET TEC no mencionaba la ciberseguridad por nombre, así que revisa si un programa califica.",
            "El Veterans' Employment and Training Service (VETS, el servicio de empleo y formación para veteranos) del Departamento de Trabajo maneja el Transition Assistance Program y orienta a los veteranos hacia ayuda para el empleo y aprendizajes."
          ],
          steps: ["Busca un curso inicial en el Education and Training Catalog de NICCS.", "Revisa cinco ofertas de empleo para ver la certificación más pedida.", "Lee la página de costos de exámenes de va.gov y la página de VET TEC 2.0.", "Revisa dol.gov/agencies/vets para ayuda con el empleo y aprendizajes."],
          words: [["Nivel inicial", "un empleo para personas que empiezan en un campo."], ["Aprendizaje (apprenticeship)", "un empleo pagado donde aprendes en el trabajo mientras trabajas."]],
          slides: [
            { title: "Encuentra formación", bullets: ["Education and Training Catalog de NICCS", "Las ofertas de empleo muestran qué certificación quieren"] },
            { title: "Ayuda para pagar (revisa va.gov)", bullets: ["Costos de examen: hasta $2,000 por examen (oct. 2026)", "VET TEC 2.0: alta tecnología, lugares limitados", "Revisa que el programa califique antes de empezar"] },
            { title: "Ayuda para el empleo", bullets: ["VETS del Departamento de Trabajo", "Transition Assistance Program", "Aprendizajes"] }
          ],
          sources: [
            { name: "VA: costos de exámenes de licencia y certificación", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "Departamento de Trabajo de EE. UU.: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Encuentra un curso inicial de ciberseguridad en el catálogo de NICCS y la certificación más pedida en las ofertas de empleo de tu zona. Luego abre la página de costos de exámenes de va.gov y anota si tu beneficio califica.",
          youCanNow: "encontrar una ruta oficial de formación en ciberseguridad y revisar qué te puede ayudar a pagar el VA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tu camino hacia la ciberseguridad",
        questions: [
          { q: "¿Qué hace principalmente un analista SOC?", options: ["Vende computadoras", "Escribe leyes", "Revisa las alertas de seguridad para ver si son ataques reales", "Solo arregla impresoras"], answer: 2, why: "El SOC vigila los ataques y responde a ellos." },
          { q: "¿Cómo usan la IA los atacantes?", options: ["Para escribir correos de estafa convincentes", "No la usan", "Solo para jugar", "Para arreglar tu red gratis"], answer: 0, why: "La IA ayuda a los atacantes a escribir estafas creíbles." },
          { q: "¿A qué habilidad de ciberseguridad se parece más la OPSEC militar?", options: ["Pintar", "Cocinar", "Manejar", "Proteger información"], answer: 3, why: "La OPSEC es mantener la información lejos de los adversarios." },
          { q: "¿Qué sitio oficial tiene una Cyber Career Pathways Tool?", options: ["Un foro de videojuegos", "NICCS, de CISA", "Un sitio de compras", "Una app de música"], answer: 1, why: "NICCS es el sitio de carreras y formación en ciberseguridad de CISA." },
          { q: "La página de VET TEC 2.0 no mencionaba la ciberseguridad por nombre. ¿Qué deberías hacer?", options: ["Suponer que está cubierta", "Revisar si el programa califica antes de empezar", "Olvidarte de la ciberseguridad", "Preguntarle a un desconocido en internet"], answer: 1, why: "Confirma siempre en la página oficial que un programa califica." }
        ]
      }
    },
    {
      name: "Capítulo 2: Practicar como analista",
      lessons: [
        {
          title: "Usar la IA como compañera para estudiar seguridad",
          minutes: 5,
          goal: "Usar un asistente de IA para aprender una idea de seguridad y explicarla de vuelta con tus propias palabras.",
          text: [
            "Una idea clave en seguridad es la tríada CIA (por sus siglas en inglés): confidencialidad (solo las personas correctas ven la información), integridad (la información no se cambia sin permiso) y disponibilidad (los sistemas funcionan cuando la gente los necesita).",
            "Pídele a un asistente de IA que te explique una idea con un ejemplo militar, luego explícala de vuelta con tus propias palabras y pídele a la IA que te revise. Esta \"explicación de vuelta\" es cómo sabes que de verdad lo entiendes.",
            "Nunca pegues contraseñas, registros reales de una empresa, datos de clientes ni nada de un sistema del trabajo en una herramienta de IA pública. Usa ejemplos inventados o limpios. Muchos empleadores tienen reglas sobre qué herramientas de IA están permitidas."
          ],
          steps: ["Elige una idea, como la tríada CIA.", "Pide: \"Explica esto con palabras sencillas y un ejemplo militar.\"", "Explícala de vuelta con tus propias palabras.", "Pregúntale a la IA: \"¿Está bien mi explicación? ¿Qué me faltó?\"", "Usa solo ejemplos inventados, nunca datos reales."],
          words: [["Tríada CIA", "confidencialidad, integridad y disponibilidad: las tres metas de la seguridad."], ["Explicación de vuelta", "explicar algo con tus propias palabras para probar que lo entiendes."], ["Registro", "lo que anota una computadora sobre qué pasó y cuándo."]],
          slides: [
            { title: "La tríada CIA", bullets: ["Confidencialidad: solo las personas correctas lo ven", "Integridad: no se cambia sin permiso", "Disponibilidad: funciona cuando se necesita"] },
            { title: "Explicación de vuelta", bullets: ["La IA explica con un ejemplo militar", "Tú lo explicas de vuelta", "La IA revisa lo que te faltó"] },
            { title: "Deja fuera los datos reales", bullets: ["Nada de contraseñas, registros reales ni datos de clientes", "Usa ejemplos inventados", "Sigue las reglas de IA de tu empleador"] }
          ],
          tryIt: "Pídele a un asistente de IA que te explique la tríada CIA con un ejemplo militar. Luego escribe tu propia explicación de dos oraciones y pídele que te revise.",
          youCanNow: "usar la IA para aprender una idea de seguridad y probar que la entiendes con una explicación de vuelta."
        },
        {
          title: "Revisar un correo sospechoso",
          minutes: 6,
          goal: "Hacer una lista de las señales de alerta de un correo sospechoso y decidir qué hacer, sin hacer clic en nada.",
          text: [
            "El phishing es un mensaje falso que intenta que hagas clic en un enlace, abras un archivo o entregues una contraseña o dinero. Revisar los correos reportados es una tarea común para los analistas principiantes.",
            "Señales de alerta: la dirección del remitente no coincide con la empresa, el mensaje te apura o te amenaza, pide una contraseña, un código, un pago o tarjetas de regalo, el texto del enlace y la dirección real son distintos, o hay un archivo adjunto inesperado.",
            "Para usar la IA de forma segura, copia solo el texto del mensaje y cambia los nombres, las direcciones de correo y los números de cuenta por marcadores como [nombre]. Pídele a la IA una lista de las señales de alerta. No hagas clic en los enlaces ni abras los archivos adjuntos. Pasa el cursor sobre un enlace (en una computadora) para ver su dirección real."
          ],
          steps: ["No hagas clic en los enlaces ni abras los archivos adjuntos.", "Mira la dirección real del remitente y las direcciones de los enlaces.", "Copia solo el texto del mensaje y cambia los datos privados por marcadores.", "Pregúntale a un asistente de IA: \"Haz una lista de las señales de alerta de phishing en este correo.\"", "Decide: reportarlo, borrarlo o confirmarlo con la empresa usando un número que sabes que es real."],
          words: [["Phishing", "un mensaje falso que intenta engañarte para que hagas clic, compartas una contraseña o envíes dinero."], ["Archivo adjunto", "un archivo que se envía con un correo."], ["Marcador", "un sustituto como [nombre] que se usa en vez de los datos privados reales."]],
          slides: [
            { title: "Phishing", bullets: ["Un mensaje falso que te engaña", "Quiere un clic, una contraseña o dinero"] },
            { title: "Señales de alerta", bullets: ["La dirección del remitente no coincide", "Te apura o te amenaza", "Pide una contraseña, un código o un pago", "Enlace raro o archivo adjunto inesperado"] },
            { title: "Revisa de forma segura con IA", bullets: ["Nunca hagas clic en enlaces ni abras archivos", "Pega solo el texto, con marcadores", "Pídele a la IA una lista de las señales de alerta"] }
          ],
          tryIt: "Encuentra un correo sospechoso en tu carpeta de spam (o pídele a una IA que invente uno). Sin hacer clic en nada, haz tú la lista de sus señales de alerta, luego pregúntale a la IA y compara las listas.",
          youCanNow: "detectar las señales de alerta de un correo de phishing y revisarlo de forma segura con ayuda de la IA."
        },
        {
          title: "Escribir una nota de incidente y contar tu historia",
          minutes: 5,
          goal: "Escribir una nota de incidente de cinco líneas y dos líneas de currículum que relacionen tu servicio con el trabajo en ciberseguridad.",
          text: [
            "Los analistas escriben notas cortas para que otros puedan actuar. Una nota de incidente sencilla de cinco líneas cubre: qué llegó, las señales de alerta, el riesgo, qué hiciste y qué recomiendas. Es como un reporte SALUTE o un reporte de situación: claro, corto y basado en hechos.",
            "Tu currículum debe relacionar tu servicio con el trabajo en ciberseguridad con acciones y resultados, por ejemplo: \"Hice cumplir la OPSEC y el control de acceso en una unidad de 120 personas; completé [curso] de seguridad de redes, 2026.\"",
            "Usa la IA para pulir tus palabras, pero cada línea debe ser cierta. En las entrevistas, cuenta una historia corta de una vez en que notaste algo mal y lo reportaste."
          ],
          steps: ["Escribe las cinco líneas: qué llegó, señales de alerta, riesgo, acción, recomendación.", "Que cada línea sea corta y basada en hechos.", "Escribe dos líneas de currículum que relacionen tu servicio con habilidades de ciberseguridad.", "Pídele a un asistente de IA que las haga más claras y luego revisa que cada palabra sea cierta."],
          words: [["Nota de incidente", "un informe escrito corto de un evento de seguridad y de lo que se hizo."], ["Recomendación", "lo que sugieres que pase después."]],
          slides: [
            { title: "Nota de incidente de cinco líneas", bullets: ["Qué llegó", "Señales de alerta y riesgo", "Qué hiciste", "Qué recomiendas"] },
            { title: "Como un reporte de situación", bullets: ["Claro, corto, basado en hechos", "Otros pueden actuar con él"] },
            { title: "La historia de tu currículum", bullets: ["Acción en el servicio + habilidad de ciberseguridad + resultado", "La IA lo puede pulir; cada palabra debe ser cierta"] }
          ],
          tryIt: "Tarea final: escribe la nota de incidente de cinco líneas del correo que revisaste en la lección 5 y luego escribe dos líneas de currículum que relacionen tu experiencia militar con un empleo de ciberseguridad.",
          youCanNow: "revisar un correo sospechoso como un analista principiante, reportarlo con claridad y presentar tu servicio como experiencia en ciberseguridad."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Practicar como analista",
        questions: [
          { q: "En la tríada CIA, \"integridad\" significa:", options: ["Los datos son gratis", "Los sistemas siempre son rápidos", "Solo los gerentes pueden iniciar sesión", "La información no se cambia sin permiso"], answer: 3, why: "La integridad trata de que la información siga correcta y sin cambios." },
          { q: "¿Qué NUNCA debes pegar en una herramienta de IA pública?", options: ["Un registro real de una empresa o una contraseña", "Un ejemplo inventado", "Una pregunta general", "Las palabras \"tríada CIA\""], answer: 0, why: "Los datos reales y las contraseñas deben quedarse privados." },
          { q: "Un correo te apura y te pide un código que te llegó al teléfono. Esto es:", options: ["Normal", "Una oferta de empleo", "Una señal de alerta de phishing", "Una actualización del sistema"], answer: 2, why: "Apurarte y pedir códigos son señales clásicas de phishing." },
          { q: "¿Cuál es el primer paso seguro con un enlace sospechoso?", options: ["Hacer clic para ver", "Responder y preguntar", "Reenviarlo a todos", "No hacer clic; revisar la dirección real"], answer: 3, why: "Hacer clic puede infectar el aparato o robar datos." },
          { q: "Una buena nota de incidente es:", options: ["Larga y emotiva", "Solo una suposición", "Corta, clara y basada en hechos", "Enviada al atacante"], answer: 2, why: "Los demás necesitan hechos claros para actuar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: La IA y las carreras en ciberseguridad",
    questions: [
      { q: "La ciberseguridad trata de:", options: ["Crear videojuegos", "Proteger computadoras, redes e información", "Vender teléfonos", "Diseñar logotipos"], answer: 1, why: "Protege los sistemas y la información de los atacantes." },
      { q: "Un analista GRC principalmente:", options: ["Revisa que una organización siga sus reglas de seguridad", "Repara autos", "Escribe música", "Entrega paquetes"], answer: 0, why: "Gobernanza, riesgo y cumplimiento trata de que se sigan las reglas." },
      { q: "¿Cómo usan la IA los defensores?", options: ["Para reemplazar a todas las personas", "Para enviar correos de estafa", "Para ordenar alertas y resumir registros", "Nunca la usan"], answer: 2, why: "La IA ayuda a los defensores a manejar grandes cantidades de datos." },
      { q: "¿Por qué los empleadores buscan personas que puedan juzgar lo que da la IA?", options: ["La IA puede equivocarse y los atacantes también la usan", "La IA nunca se equivoca", "Es la ley", "La IA no sabe leer"], answer: 0, why: "El criterio humano detecta los errores de la IA y las estafas hechas con IA." },
      { q: "¿A qué tarea de ciberseguridad se parece más hacer guardia en el servicio militar?", options: ["Programar juegos", "Vender", "Pintar", "Vigilar"], answer: 3, why: "Estar atento a cualquier cosa inusual es vigilar." },
      { q: "Reportar un problema por la cadena de mando es como:", options: ["Mercadotecnia", "Responder a incidentes", "Hacer envíos", "Contratar"], answer: 1, why: "La respuesta a incidentes empieza con reportar lo que pasó." },
      { q: "¿Cómo debes poner una autorización de seguridad en tu currículum?", options: ["Publicar todos los detalles en internet", "Como lo permita tu oficina de seguridad, normalmente el nivel y el estado", "Nunca mencionarla", "Inventar una"], answer: 1, why: "Sigue las indicaciones de tu oficina de seguridad." },
      { q: "NICCS lo maneja:", options: ["Una compañía de teléfonos", "Una empresa de videojuegos", "Un banco", "CISA, la Cybersecurity and Infrastructure Security Agency"], answer: 3, why: "NICCS es el sitio de carreras y formación en ciberseguridad de CISA." },
      { q: "¿Dónde encuentras qué certificación inicial quieren más los empleadores?", options: ["En ofertas de empleo reales de tu zona", "En un anuncio cualquiera", "Tirando una moneda", "En un libro de texto viejo"], answer: 0, why: "Las ofertas de empleo dicen lo que piden los empleadores." },
      { q: "Según va.gov en octubre de 2026, el reembolso del VA por costos de examen es de hasta:", options: ["Ilimitado", "$50 por examen", "$2,000 por examen", "$10,000 por examen"], answer: 2, why: "La página decía no más de $2,000 por examen." },
      { q: "¿Qué agencia del Departamento de Trabajo ayuda a los veteranos con el empleo?", options: ["La Oficina del Censo", "El Servicio Postal", "La NASA", "VETS, el Veterans' Employment and Training Service"], answer: 3, why: "VETS maneja los programas de empleo para veteranos, incluido TAP." },
      { q: "En la tríada CIA, \"disponibilidad\" significa:", options: ["Los datos se cambian seguido", "Los datos son secretos", "Los sistemas funcionan cuando la gente los necesita", "Cualquiera puede iniciar sesión"], answer: 2, why: "La disponibilidad trata de que los sistemas funcionen cuando se necesitan." },
      { q: "¿Qué es una explicación de vuelta?", options: ["Copiar una respuesta", "Explicar una idea con tus propias palabras para probar que la entiendes", "Pedirle a otro que estudie", "Saltarte una lección"], answer: 1, why: "Explicarla de vuelta muestra que de verdad la entiendes." },
      { q: "¿Qué es seguro usar al practicar con IA?", options: ["Un ejemplo inventado", "Los registros reales de tu empleador", "Expedientes de clientes", "Tu contraseña"], answer: 0, why: "Los ejemplos inventados protegen los datos reales." },
      { q: "El phishing es:", options: ["Un tipo de cortafuegos", "Una herramienta de seguridad", "Un mensaje falso que te engaña para que hagas clic o compartas datos", "Un puesto de trabajo"], answer: 2, why: "El phishing engaña a las personas para que den acceso o dinero." },
      { q: "¿Cuál es una señal de alerta de phishing?", options: ["La dirección del remitente no coincide con la empresa", "Un mensaje de un compañero conocido sobre el almuerzo", "Un boletín al que te suscribiste", "Un recordatorio de calendario que pusiste"], answer: 0, why: "Una dirección de remitente que no coincide es una señal común." },
      { q: "Antes de pegar un correo en la IA, deberías:", options: ["Abrir el archivo adjunto", "Agregar tu contraseña", "Hacer clic en todos los enlaces", "Cambiar nombres, correos y números por marcadores"], answer: 3, why: "Los marcadores dejan los datos privados fuera de la IA." },
      { q: "¿Cómo ves a dónde lleva de verdad un enlace en una computadora?", options: ["Haciendo clic", "Pasando el cursor encima sin hacer clic", "Respondiéndole al remitente", "Imprimiendo el correo"], answer: 1, why: "Pasar el cursor muestra la dirección real de forma segura." },
      { q: "Una nota de incidente de cinco líneas termina con:", options: ["Un chiste", "Lo que recomiendas", "Tu contraseña", "Un enlace para hacer clic"], answer: 1, why: "La recomendación les dice a los demás qué hacer después." },
      { q: "¿Qué línea de currículum es más fuerte?", options: ["\"Muy trabajador.\"", "\"Bueno con las computadoras.\"", "\"Me gusta la ciberseguridad.\"", "\"Hice cumplir la OPSEC y el control de acceso en una unidad de 120 personas; completé un curso de seguridad de redes, 2026.\""], answer: 3, why: "Muestra acción, tamaño y formación." }
    ]
  }
};

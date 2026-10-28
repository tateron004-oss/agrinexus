"use strict";

// Koach Learn course (Spanish translation of entrepreneurs-ai-ethics-legal). Shape and translation rules: scripts/koachlearn-courses/README.md.
// Legal points checked on official pages 27 October 2026 (see the English course). Not legal advice; every lesson tells students to talk to a lawyer about their situation.

module.exports = {
  id: "entrepreneurs-ai-ethics-legal-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-ethics-legal",
  category: "Entrepreneurs",
  name: "Ética, riesgos y aspectos legales de la IA",
  skills: "Detectar los riesgos de la IA en un negocio, Revisar lo que hace la IA en exactitud y sesgo, Proteger los datos de los clientes, Hacer afirmaciones honestas sobre la IA, Entender los derechos de autor del trabajo hecho con IA, Escribir una política de uso de IA",
  outcome: "detectar los principales riesgos de usar IA en tu negocio, poner revisiones de exactitud, sesgo y privacidad, hacer solo afirmaciones honestas sobre la IA, entender lo básico de los derechos de autor del trabajo hecho con IA y escribir una política de uso de IA de una página para tu negocio.",
  about: [
    "La IA le puede ahorrar mucho tiempo a un pequeño negocio, pero trae riesgos reales: respuestas equivocadas, resultados injustos, datos de clientes filtrados, publicidad engañosa y sorpresas con los derechos de autor. Este curso es para dueños que quieren usar la IA de forma responsable y no meterse en problemas.",
    "En el Capítulo 1 vas a aprender los principales riesgos, cómo revisar el trabajo de la IA en exactitud y sesgo, y cómo proteger los datos de los clientes. En el Capítulo 2 vas a aprender lo que dicen las agencias de EE. UU. sobre las afirmaciones de marketing con IA, las recomendaciones y las reseñas, y sobre el trabajo generado con IA y los derechos de autor. Terminas escribiendo una política de uso de IA para tu negocio.",
    "Cada lección dura unos cinco minutos e incluye una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los temas legales se revisaron en páginas oficiales del gobierno de EE. UU. (ftc.gov y copyright.gov) y aparecen en cada lección. Este curso es educación, no asesoría legal: las leyes cambian y son distintas según el estado y el país, así que habla con un abogado sobre tu propia situación."
  ],
  finalTask: "Escribe una política de uso de IA de una página para tu negocio que cubra: qué herramientas de IA están aprobadas, qué información nunca debe entrar en ellas, qué resultados necesitan una revisión humana (datos, dinero, temas legales, salud, todo lo que ven los clientes), cómo haces afirmaciones honestas sobre la IA y avisas de las recomendaciones pagadas, cómo manejas los derechos de autor del contenido hecho con IA, a quién preguntar cuando tengas dudas (incluido un abogado) y cuándo vas a revisar la política.",
  chapters: [
    {
      name: "Capítulo 1: Conocer los riesgos y revisar el trabajo",
      lessons: [
        {
          title: "Los principales riesgos de la IA en un negocio",
          minutes: 5,
          goal: "Nombrar los principales riesgos de la IA y encontrar dónde aparecen en tu negocio.",
          text: [
            "Hay cinco riesgos que aparecen una y otra vez. Exactitud: la IA puede inventar datos, precios o reglas. Justicia: la IA puede tratar de forma injusta a grupos de personas por patrones de lo que aprendió. Privacidad: los datos de clientes que escribes pueden quedar guardados o usarse. Honestidad: las afirmaciones de marketing sobre la IA, o las reseñas hechas con IA, pueden engañar. Propiedad: quién es dueño del trabajo hecho con IA y si copia el de otra persona.",
            "Ser ético con la IA significa ser honesto, justo y cuidadoso con la información de la gente, y que una persona siga siendo responsable. Normalmente, hacer lo ético también te mantiene dentro de la ley.",
            "Haz una lista de riesgos de tu negocio: dónde usas la IA, qué podría salir mal, qué tan grave sería y qué revisión vas a agregar."
          ],
          steps: ["Haz la lista de cada lugar donde usas o piensas usar la IA.", "Para cada uno, pregúntate cuáles de los cinco riesgos aplican.", "Califica qué tan grave sería un error: bajo, medio o alto.", "Escribe una revisión para cada riesgo medio o alto."],
          words: [["Ética", "ideas sobre lo que es correcto y justo."], ["Riesgo", "algo que podría salir mal, y cuánto daño causaría."], ["Sesgo", "resultados que son injustos con algunos grupos de personas."]],
          slides: [
            { title: "Cinco riesgos de la IA", bullets: ["Exactitud: datos inventados", "Justicia: resultados injustos", "Privacidad: datos de clientes", "Honestidad y propiedad"] },
            { title: "Uso ético de la IA", bullets: ["Honesto, justo, cuidadoso con los datos", "Una persona sigue siendo responsable", "Lo ético normalmente también te mantiene en la ley"] },
            { title: "Tu lista de riesgos", bullets: ["Dónde usas la IA", "Qué podría salir mal, qué tan grave", "Una revisión para cada riesgo serio"] }
          ],
          tryIt: "Haz una lista de riesgos con al menos tres formas en que tu negocio usa la IA. Marca cuáles de los cinco riesgos aplican, califica cada uno y escribe una revisión para los serios.",
          youCanNow: "nombrar los principales riesgos de la IA y ubicarlos en tu propio negocio."
        },
        {
          title: "Revisar el trabajo de la IA en exactitud y justicia",
          minutes: 5,
          goal: "Poner un paso de revisión humana que detecte datos equivocados y resultados injustos.",
          text: [
            "Todo lo que haga la IA y que vaya a ver un cliente, o que afecte el dinero, temas legales, la salud o la seguridad, necesita una revisión humana. Compara los datos con tus propios registros o con fuentes oficiales, vuelve a hacer las cuentas y quita cualquier afirmación que no puedas demostrar.",
            "Revisa también que sea justo. Si usas la IA para filtrar solicitantes de empleo, poner precios, aprobar clientes o escribir anuncios de trabajo, fíjate si trata distinto a las personas por su raza, sexo, edad, discapacidad, religión, origen nacional o rasgos parecidos. Las leyes contra la discriminación siguen aplicando cuando una computadora ayuda a tomar la decisión.",
            "En las decisiones importantes, como contratar, despedir, prestar dinero, vivienda o cualquier tema de salud, no dejes que decida la IA. Úsala para organizar la información, deja la decisión en manos de una persona y habla con un abogado sobre las reglas que se te aplican."
          ],
          steps: ["Marca qué resultados de la IA ven los clientes o afectan el dinero, temas legales, la salud o la seguridad.", "En esos, revisa siempre los datos, las cuentas y las afirmaciones.", "Fíjate si las decisiones con ayuda de la IA dan diferencias injustas entre grupos.", "Deja las decisiones importantes en manos de una persona.", "Pregunta a un abogado por las reglas para decisiones de contratación, préstamos o vivienda."],
          words: [["Revisión humana", "una persona revisa el trabajo de la IA antes de que se use."], ["Decisión importante", "una decisión que afecta seriamente el trabajo, el dinero, la vivienda o la salud de alguien."], ["Discriminación", "tratar a las personas de forma injusta por quiénes son."]],
          slides: [
            { title: "Lo que necesita revisión humana", bullets: ["Todo lo que ven los clientes", "Todo lo de dinero, temas legales, salud o seguridad"] },
            { title: "Revisa que sea justo", bullets: ["Contratación, precios, aprobaciones, anuncios de trabajo", "¿Resultados distintos para distintos grupos?", "Las leyes contra la discriminación siguen aplicando"] },
            { title: "Decisión importante = decide una persona", bullets: ["Contratar, despedir, préstamos, vivienda, salud", "La IA organiza; una persona decide", "Pregunta a un abogado por las reglas"] }
          ],
          tryIt: "Elige un resultado de la IA que vean tus clientes. Revisa los datos, las cuentas, las afirmaciones que no se pueden demostrar y las palabras injustas. Escribe el paso de revisión que vas a usar siempre.",
          youCanNow: "revisar el trabajo de la IA en exactitud y justicia antes de que afecte a clientes o decisiones."
        },
        {
          title: "Proteger los datos de los clientes",
          minutes: 5,
          goal: "Decidir qué datos pueden y no pueden entrar en las herramientas de IA, usando los cinco principios de la FTC.",
          text: [
            "La guía de la FTC (la Comisión Federal de Comercio de EE. UU.) para que las empresas protejan la información personal tiene cinco principios: haz un inventario (conoce qué información personal tienes), reduce (guarda solo lo que necesitas), protege (cuida lo que guardas), desecha (elimina lo que ya no necesitas) y planea con anticipación (ten un plan para un problema de seguridad).",
            "Aplícalos a la IA. No pongas en herramientas de chat de IA números de Seguro Social, números de tarjeta o de banco, contraseñas, datos de salud ni listas completas de contactos de clientes. Usa marcadores o resúmenes. Revisa la configuración de privacidad y las condiciones de cada herramienta, y si tienes que usar información de clientes, prefiere planes para empresas que prometen no entrenar con tus datos.",
            "Sé honesto en tu propio aviso de privacidad: si usas herramientas de IA que procesan información de clientes, dilo. Las leyes de privacidad son distintas según el estado y el país; pregunta a un abogado cuáles se te aplican."
          ],
          steps: ["Haz un inventario: anota la información de clientes que tienes.", "Reduce: deja de recoger lo que no necesitas.", "Escribe una lista de lo que nunca entra en la IA: números de identificación, de tarjeta y de banco, contraseñas, datos de salud.", "Revisa la configuración de privacidad y las condiciones de cada herramienta de IA.", "Haz un plan corto de lo que harás si se filtran datos."],
          words: [["Información personal", "datos que identifican a una persona, como el nombre con la dirección, números de identificación o números de tarjeta."], ["Aviso de privacidad", "un texto que les dice a los clientes qué datos recoges y cómo los usas."], ["Incidente de seguridad", "cuando se pierden o roban datos, o los ve alguien que no debería."]],
          slides: [
            { title: "Los cinco principios de la FTC", bullets: ["Haz un inventario, reduce", "Protege, desecha", "Planea con anticipación"] },
            { title: "Nunca en herramientas de chat de IA", bullets: ["Números de identificación, tarjeta o banco", "Contraseñas y datos de salud", "Listas completas de contactos de clientes"] },
            { title: "Un uso más seguro", bullets: ["Marcadores y resúmenes", "Revisa la configuración de privacidad y las condiciones", "Planes para empresas que no entrenan con tus datos"] },
            { title: "Sé honesto", bullets: ["Di en tu aviso de privacidad si la IA procesa datos", "Las leyes cambian; pregunta a un abogado"] }
          ],
          sources: [{ name: "FTC: Proteger la información personal, guía para empresas (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Haz el inventario de la información de clientes que tienes, escribe tu lista de lo que nunca entra en la IA y revisa la configuración de privacidad de la herramienta de IA que más usas.",
          youCanNow: "decidir qué datos de clientes pueden entrar en las herramientas de IA y proteger el resto."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Conocer los riesgos y revisar el trabajo",
        questions: [
          { q: "¿Cuál es un riesgo de exactitud?", options: ["La IA usa tus colores de marca", "La IA inventa un precio que nunca pusiste", "La IA escribe un correo corto", "La IA hace una lista"], answer: 1, why: "Los datos inventados son el riesgo de exactitud." },
          { q: "Usas la IA para ordenar solicitudes de empleo. ¿Qué más debes revisar?", options: ["El clima", "Solo el tipo de letra", "Nada, la IA es neutral", "Si trata de forma injusta a grupos de personas"], answer: 3, why: "Las leyes contra la discriminación siguen aplicando cuando la IA ayuda a decidir." },
          { q: "¿Quién debe tomar una decisión de contratación?", options: ["Una persona, con la IA solo organizando la información", "La IA sola", "Una herramienta cualquiera", "El solicitante"], answer: 0, why: "Las decisiones importantes se quedan con una persona." },
          { q: "¿Cuál es uno de los cinco principios de datos de la FTC?", options: ["Compartir los datos con todas las herramientas", "Recoger todo para siempre", "Reducir: guardar solo lo que necesitas", "Nunca planear con anticipación"], answer: 2, why: "Reducir es uno de los cinco." },
          { q: "¿Qué nunca debe entrar en una herramienta de chat de IA?", options: ["Un resumen sin nombres", "Tu horario", "El número de tarjeta de un cliente", "Tu lista de servicios"], answer: 2, why: "Los números de tarjeta son información personal delicada." }
        ]
      }
    },
    {
      name: "Capítulo 2: Afirmaciones honestas, propiedad y tu política",
      lessons: [
        {
          title: "Afirmaciones honestas sobre la IA, recomendaciones y reseñas",
          minutes: 5,
          goal: "Revisar tu marketing en busca de afirmaciones engañosas sobre la IA, recomendaciones sin aviso y reseñas falsas.",
          text: [
            "La FTC dice que la publicidad debe ser veraz, no engañosa y estar respaldada por pruebas, y eso aplica a lo que se dice de la IA. No digas que tu producto \"usa IA\" si no la usa, y no exageres lo que hace la IA ni qué tan exacta es. En 2026 la FTC dictó órdenes finales contra empresas que decían que su servicio de marketing con IA escuchaba las conversaciones de la gente a través de dispositivos inteligentes, cuando no era así.",
            "Si le pagas o le das productos gratis a alguien para que te promocione, esa relación se debe avisar claramente, por ejemplo con \"#publicidad\" al principio de una publicación o dentro del mismo video. Tú eres responsable de lo que dicen quienes te promocionan.",
            "La regla de la FTC sobre reseñas falsas prohíbe las reseñas y los testimonios falsos, incluidas las reseñas generadas con IA de personas que no existen, y prohíbe dar recompensas solo por las reseñas positivas. Habla con un abogado si no estás seguro de si una afirmación o una campaña está permitida."
          ],
          steps: ["Haz la lista de cada afirmación de tu marketing sobre la IA o sobre resultados.", "Quédate solo con las que son ciertas y puedes demostrar.", "Revisa que cada promoción pagada o con regalos tenga un aviso claro.", "Asegúrate de que cada reseña sea real y no se haya pagado con una recompensa por una buena calificación.", "Pregunta a un abogado si tienes dudas."],
          words: [["Respaldar", "apoyar una afirmación con pruebas."], ["Relación importante", "un vínculo, como un pago o productos gratis, entre un negocio y alguien que lo promociona."]],
          slides: [
            { title: "Afirmaciones honestas sobre la IA", bullets: ["Veraces, no engañosas, con pruebas", "Nada de \"usa IA\" si no la usa", "No exageres la exactitud"] },
            { title: "Ejemplo de la FTC", bullets: ["Órdenes de 2026 por afirmaciones falsas sobre un servicio de anuncios con IA", "Decía que usaba datos de voz; no era así"] },
            { title: "Recomendaciones y reseñas", bullets: ["Avisa claramente de las promociones pagadas o con regalos", "Las reseñas falsas y hechas con IA están prohibidas", "Nada de recompensas solo por reseñas positivas"] }
          ],
          sources: [{ name: "FTC: Lo básico de la publicidad y el marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: órdenes contra Cox Media Group y otras dos empresas por afirmaciones de marketing con IA (2026, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about" }, { name: "FTC: Guías sobre recomendaciones, preguntas frecuentes (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }, { name: "FTC: regla final que prohíbe las reseñas y testimonios falsos (comunicado, en inglés)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Revisa tu sitio web o tus publicaciones. Haz la lista de cada afirmación sobre la IA o sobre resultados y márcala como mantener (cierta y demostrable), corregir o quitar. Revisa que cualquier publicación pagada tenga un aviso claro.",
          youCanNow: "revisar tu marketing para tener afirmaciones honestas sobre la IA, avisos correctos y reseñas reales."
        },
        {
          title: "Derechos de autor y trabajo hecho con IA",
          minutes: 5,
          goal: "Explicar quién puede ser dueño del trabajo hecho con ayuda de la IA y cómo bajar el riesgo de copiar.",
          text: [
            "El informe de la Oficina de Derechos de Autor de EE. UU. sobre qué se puede proteger (enero de 2025) dice que los derechos de autor protegen la autoría humana. El material hecho solo con IA no está protegido, y escribir una instrucción no te convierte en el autor del resultado. Pero usar la IA como herramienta no impide la protección: tu propia organización creativa, tus ediciones o el trabajo hecho por una persona que se ve en el resultado sí pueden estar protegidos.",
            "Lo que esto significa para un negocio: si necesitas ser dueño de algo, como tu logo, el diseño de tus productos o un libro, ponle creatividad humana real y guarda registros de lo que hiciste. Al registrar una obra que incluye material generado con IA, la Oficina tiene una guía sobre cómo declararlo.",
            "El otro riesgo es copiar. Lo que hace la IA a veces se puede parecer al trabajo o a la marca de otra persona. No le pidas a la IA que copie a un artista vivo, el logo de una marca o un personaje famoso, y revisa los resultados importantes. Las leyes de derechos de autor sobre la IA siguen cambiando y hay casos en los tribunales; habla con un abogado antes de depender de un trabajo hecho con IA para algo importante."
          ],
          steps: ["Marca qué bienes de tu negocio necesitas tener como propios (logo, diseños, libros, cursos).", "En esos, agrega trabajo creativo humano real y guarda notas o borradores.", "No le pidas a la IA que copie a un artista, una marca o un personaje en particular.", "Revisa si los resultados importantes se parecen al trabajo de otros.", "Habla con un abogado antes de registrar o depender de un trabajo hecho con ayuda de la IA."],
          words: [["Derechos de autor", "el derecho legal de controlar las copias de una obra creativa original."], ["Autoría humana", "las decisiones creativas que toma una persona, y que los derechos de autor protegen."], ["Registrar", "presentar una obra ante la Oficina de Derechos de Autor para dejar constancia de tu derecho."]],
          slides: [
            { title: "Lo que dice la Oficina de Derechos de Autor", bullets: ["Los derechos de autor protegen la autoría humana", "El material hecho solo con IA no está protegido", "Una instrucción sola no te hace el autor"] },
            { title: "Usar la IA como herramienta está bien", bullets: ["Tus ediciones y tu organización creativa pueden estar protegidas", "Tus partes hechas a mano que se ven en el resultado"] },
            { title: "Ser dueño de lo que importa", bullets: ["Agrega creatividad humana real", "Guarda borradores y notas", "Sigue la guía de la Oficina para declarar la IA"] },
            { title: "Evita copiar", bullets: ["Nada de copiar artistas, logos o personajes", "La ley sigue cambiando: pregunta a un abogado"] }
          ],
          sources: [{ name: "Oficina de Derechos de Autor de EE. UU.: Derechos de autor e inteligencia artificial (en inglés)", url: "https://www.copyright.gov/ai/" }, { name: "Oficina de Derechos de Autor de EE. UU.: anuncio del informe Parte 2 sobre protección (enero de 2025, en inglés)", url: "https://www.copyright.gov/newsnet/2025/1060.html" }],
          tryIt: "Haz la lista de tres bienes del negocio que hiciste o piensas hacer con IA. Para cada uno, escribe si necesitas ser dueño y qué trabajo creativo humano le vas a agregar, y anota los que necesitan el consejo de un abogado.",
          youCanNow: "explicar lo básico de los derechos de autor del trabajo hecho con IA y bajar tu riesgo de copiar."
        },
        {
          title: "Escribir tu política de uso de IA",
          minutes: 6,
          goal: "Escribir una política de uso de IA de una página para tu negocio.",
          text: [
            "Una política de uso de IA es un grupo corto de reglas sobre cómo tú y cualquier persona que trabaje contigo usan la IA. Convierte todo lo de este curso en hábitos. Ayuda a los nuevos ayudantes, da tranquilidad a los clientes y muestra que fuiste cuidadoso si algo sale mal.",
            "Una política sencilla tiene siete partes: herramientas aprobadas; información que nunca entra en la IA; resultados que siempre necesitan una revisión humana; afirmaciones honestas y avisos; derechos de autor y propiedad; a quién preguntar cuando hay dudas (incluido un abogado); y una fecha de revisión.",
            "La IA puede hacer el borrador: dale tu lista de riesgos y las reglas de este curso y pídele una política de una página con palabras sencillas. Luego corrígela para que cada regla sea algo que de verdad vas a hacer, compártela con quien te ayude y revísala cada seis meses."
          ],
          steps: ["Reúne tu lista de riesgos, tu lista de lo que nunca entra en la IA y tu revisión de afirmaciones de las lecciones anteriores.", "Pide a la IA una política de una página con las siete partes, con palabras sencillas.", "Corrige cada regla para que sea cierta en tu negocio.", "Compártela con quien te ayude.", "Pon una fecha de revisión dentro de seis meses."],
          words: [["Política de uso de IA", "un grupo corto de reglas sobre cómo un negocio usa la IA."], ["Fecha de revisión", "el día en que vas a revisar y actualizar la política."]],
          slides: [
            { title: "Por qué una política", bullets: ["Convierte las buenas reglas en hábitos", "Guía a los ayudantes, da tranquilidad a los clientes"] },
            { title: "Siete partes", bullets: ["Herramientas aprobadas; lo que nunca entra en la IA", "Revisiones humanas; afirmaciones honestas y avisos", "Derechos de autor; a quién preguntar; fecha de revisión"] },
            { title: "Hazla real", bullets: ["Deja que la IA haga el borrador con tus notas", "Corrige cada regla para que vaya contigo", "Compártela, revísala cada seis meses"] }
          ],
          tryIt: "Tarea final: escribe tu política de uso de IA de una página con las siete partes, ajústala a tu negocio y pon una fecha de revisión.",
          youCanNow: "manejar el uso de la IA en tu negocio con una política escrita, clara y honesta, y saber cuándo llamar a un abogado."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Afirmaciones honestas, propiedad y tu política",
        questions: [
          { q: "Tu app no usa IA. ¿Puedes anunciarla como \"con IA\"?", options: ["No, es una afirmación falsa", "Sí, todos lo hacen", "Solo en letra pequeña", "Solo en internet"], answer: 0, why: "Las afirmaciones publicitarias, incluidas las de IA, deben ser veraces." },
          { q: "¿Qué práctica con reseñas prohíbe la regla de la FTC?", options: ["Mostrar reseñas reales con permiso", "Pedir a los clientes reseñas honestas", "Responder a las reseñas", "Publicar reseñas generadas con IA de personas que no existen"], answer: 3, why: "La regla prohíbe las reseñas falsas, incluidas las generadas con IA." },
          { q: "Según la Oficina de Derechos de Autor de EE. UU., ¿escribir una instrucción te hace autor del resultado de la IA?", options: ["Sí, siempre", "No, una instrucción sola no basta", "Solo si es larga", "Solo con imágenes"], answer: 1, why: "La Oficina dice que las instrucciones solas no convierten a alguien en autor." },
          { q: "¿Cómo puedes hacer más probable que un trabajo hecho con ayuda de la IA esté protegido?", options: ["Agregándole trabajo creativo humano real y guardando registros", "Usando más instrucciones", "Agregando la palabra \"derechos reservados\"", "Usando una herramienta de IA de pago"], answer: 0, why: "Los aportes creativos humanos pueden estar protegidos." },
          { q: "¿Cada cuánto debes revisar tu política de uso de IA?", options: ["Solo después de una demanda", "Nunca", "En una fecha fija, por ejemplo cada seis meses", "Todos los días"], answer: 2, why: "Las herramientas y las leyes cambian, así que revisarla con regularidad la mantiene al día." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Ética, riesgos y aspectos legales de la IA",
    questions: [
      { q: "¿Cuál NO es uno de los cinco riesgos de la IA de este curso?", options: ["Exactitud", "Duración de la batería", "Privacidad", "Justicia"], answer: 1, why: "Los cinco son exactitud, justicia, privacidad, honestidad y propiedad." },
      { q: "Ser ético con la IA incluye:", options: ["Recoger todos los datos que puedas", "Dejar que la IA decida todo", "Esconder de todos el uso de la IA", "Que una persona siga siendo responsable"], answer: 3, why: "Una persona sigue siendo responsable del uso de la IA." },
      { q: "Una lista de riesgos anota:", options: ["Tus seguidores en redes", "Las contraseñas de tus competidores", "Solo los precios de tus herramientas", "Dónde usas la IA, qué podría salir mal, qué tan grave y una revisión"], answer: 3, why: "Así los riesgos se pueden manejar." },
      { q: "¿Qué resultado de la IA necesita revisión humana cada vez?", options: ["Una lluvia de ideas privada que vas a tirar", "Una lista de precios que verán los clientes", "Una lista de ideas para la comida", "Un chiste para ti"], answer: 1, why: "La información de dinero que ven los clientes se debe revisar." },
      { q: "El sesgo en la IA significa:", options: ["Un error de ortografía", "Una respuesta lenta", "Resultados injustos con algunos grupos", "Un tipo de herramienta"], answer: 2, why: "Esa es la definición." },
      { q: "¿Las leyes contra la discriminación aplican cuando la IA ayuda a tomar una decisión de contratación?", options: ["Sí", "No, las computadoras están exentas", "Solo para empresas grandes en el extranjero", "Solo en solicitudes en papel"], answer: 0, why: "La ley aplica a la decisión, sin importar cómo se tome." },
      { q: "En decisiones de préstamos o vivienda, la IA debe:", options: ["Esconderse del cliente", "Decidir sola", "Organizar la información mientras decide una persona", "Reemplazar a tu abogado"], answer: 2, why: "Las decisiones importantes se quedan con una persona." },
      { q: "\"Haz un inventario\" en la guía de la FTC significa:", options: ["Conocer qué información personal tienes", "Comprar acciones", "Contar solo tu mercancía", "Borrar todo"], answer: 0, why: "Es el primero de los cinco principios." },
      { q: "\"Desecha\" en la guía de la FTC significa:", options: ["Hacer una propuesta de venta", "Eliminar de forma correcta la información que ya no necesitas", "Lanzar una pelota", "Publicarla en internet"], answer: 1, why: "Los datos viejos que no necesitas son un riesgo." },
      { q: "Si tienes que usar información de clientes con una herramienta de IA, prefiere:", options: ["Enviártela por correo", "Cualquier herramienta gratuita sin leer las condiciones", "Publicarla", "Un plan cuyas condiciones digan que no entrenará con tus datos"], answer: 3, why: "Las condiciones para empresas pueden proteger mejor los datos." },
      { q: "Si las herramientas de IA procesan datos de clientes, tu aviso de privacidad debe:", options: ["Decirlo con honestidad", "Esconderlo", "Decir que nunca usas computadoras", "Quitarse"], answer: 0, why: "Ser honesto con los clientes es obligatorio y ético." },
      { q: "Las reglas de publicidad de la FTC dicen que las afirmaciones deben ser:", options: ["Aprobadas por una herramienta de IA", "Graciosas", "Cortas", "Veraces, no engañosas y respaldadas por pruebas"], answer: 3, why: "Esa es la norma de la publicidad veraz." },
      { q: "Las órdenes de la FTC de 2026 que vimos en este curso eran sobre:", options: ["Horarios de tiendas", "Declaraciones de impuestos tardías", "Afirmaciones falsas sobre lo que hacía un servicio de marketing con IA", "Retrasos en los envíos"], answer: 2, why: "Las empresas decían que usaban datos de voz cuando no era así." },
      { q: "Un influencer al que le pagaste publica sobre ti. Debe:", options: ["Esconderlo en los comentarios", "Avisarlo claramente, como \"#publicidad\" al principio", "No decir nada", "Mencionarlo una vez al año"], answer: 1, why: "Las relaciones importantes se deben avisar claramente." },
      { q: "¿Quién es responsable de lo que dicen de ti quienes te promocionan a cambio de pago?", options: ["Nadie", "Solo quien promociona", "La plataforma", "Tú, el negocio"], answer: 3, why: "La FTC dice que los negocios son responsables de lo que afirman quienes los promocionan." },
      { q: "Ofrecer un descuento solo a los clientes que dejen reseñas de 5 estrellas es:", options: ["Obligatorio", "Una gran idea", "Prohibido por la regla de la FTC sobre reseñas falsas", "Válido si se avisa en letra diminuta"], answer: 2, why: "Están prohibidas las recompensas que dependen de reseñas positivas." },
      { q: "Según la Oficina de Derechos de Autor, el material hecho solo con IA:", options: ["No está protegido por derechos de autor", "Es tuyo automáticamente", "Es de la IA", "Está protegido por 100 años"], answer: 0, why: "Los derechos de autor exigen autoría humana." },
      { q: "Usar la IA como herramienta en tu trabajo creativo:", options: ["Siempre cancela los derechos de autor", "No impide por sí solo los derechos de autor sobre tus aportes humanos", "Hace todo de dominio público", "Es ilegal"], answer: 1, why: "La Oficina dice que las obras hechas con ayuda de la IA pueden estar protegidas donde se ve la creatividad humana." },
      { q: "¿Qué pedido aumenta el riesgo de copiar?", options: ["\"Dame ideas para el logo de una panadería\"", "\"Haz un logo exactamente igual al de [marca famosa]\"", "\"Sugiere colores para un negocio de limpieza\"", "\"Escribe un lema sobre el pan fresco\""], answer: 1, why: "Copiar el logo de una marca puede violar marcas registradas o derechos de autor." },
      { q: "Cuando tienes dudas sobre un tema legal de tu negocio, debes:", options: ["Hablar con un abogado sobre tu situación", "Creer lo que diga una IA", "Ignorarlo", "Copiar lo que hace un competidor"], answer: 0, why: "Las leyes cambian y son distintas según el lugar; un abogado te puede aconsejar." }
    ]
  }
};

"use strict";

// Koach Learn course (shared, bonus), Spanish translation of "AI for Community Advocacy". Rules: ../../../README.md (Translations).
// Nonpartisan, issue-based advocacy. 501(c)(3) lobbying and campaign limits are from irs.gov; the course points to legal help for specifics.

module.exports = {
  id: "ai-community-advocacy-es",
  lang: "es",
  translationOf: "ai-community-advocacy",
  category: "Non Profits",
  name: "IA para la defensa de causas comunitarias",
  skills: "Definir un problema y un pedido claro, Investigar datos y revisar las fuentes, Encontrar a quien decide, Escribir una carta o un comentario público con IA, Hacer una hoja informativa de una página, Dar un testimonio público de dos minutos",
  outcome: "planificar con ayuda de la IA una pequeña campaña de defensa sobre un problema local: definir un pedido claro, respaldarlo con datos comprobados e historias reales, llegar a quien decide con una carta o un comentario público y una hoja informativa de una página, y hablar en un testimonio público de dos minutos, siguiendo las reglas para las organizaciones sin fines de lucro.",
  about: [
    "Defender una causa significa alzar la voz para cambiar algo: un cruce peligroso, una ruta de autobús que se eliminó, un parque que necesita luces, una regla que impide a la gente conseguir empleo o vivienda. Las comunidades que hablan con claridad y con datos son escuchadas más a menudo.",
    "Este curso es para personal y voluntarios de organizaciones sin fines de lucro, grupos religiosos y de vecinos, y miembros de la comunidad que quieren lograr cambios. Los asistentes de IA como ChatGPT, Microsoft Copilot y Google Gemini pueden ayudar a investigar, escribir cartas, hacer hojas informativas y practicar discursos, mientras la voz de tu comunidad y sus historias reales siguen en el centro.",
    "Cada lección dura unos cinco minutos y tiene una tarea “Pruébalo ahora”. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas. Aquí la defensa trata de causas, no de candidatos; las organizaciones sin fines de lucro tienen reglas especiales, que se ven en la lección 6."
  ],
  finalTask: "Arma un kit de defensa para un problema local real: un problema de una oración y un pedido concreto, tres datos con fuentes oficiales, dos historias cortas de la comunidad compartidas con permiso, el nombre de quien decide y cómo contactarlo, una carta o un comentario público de menos de 300 palabras, una hoja informativa de una página y un testimonio de dos minutos que hayas practicado en voz alta.",
  chapters: [
    {
      name: "Capítulo 1: Armar tu caso",
      lessons: [
        {
          title: "Definir el problema y tu pedido",
          minutes: 5,
          goal: "Convertir una preocupación de la comunidad en un problema claro y un pedido concreto.",
          text: [
            "Las preocupaciones grandes como “nuestro barrio no es seguro” son difíciles de atender para las autoridades. Redúcela a un problema concreto: “Los niños cruzan seis carriles de la calle Main en la Quinta Avenida para llegar a la escuela, y no hay semáforo peatonal”.",
            "Luego haz un pedido concreto: qué quieres exactamente, de quién y para cuándo. “Pedimos al Departamento de Transporte de la Ciudad que instale un semáforo peatonal en Main y la Quinta antes del próximo año escolar”. Un pedido claro les da a quienes deciden algo a lo que decir que sí.",
            "Pide a la IA que lo afine: “Ayúdame a convertir esta preocupación en un problema de una oración y un pedido concreto y realista: [tu preocupación]”. Luego revísalo con las personas más afectadas. La defensa funciona mejor cuando la comunidad da forma al pedido."
          ],
          steps: ["Escribe la preocupación con tus propias palabras.", "Redúcela a un problema, un lugar y un grupo afectado concretos.", "Escribe un pedido: qué, quién decide, para cuándo.", "Pide a la IA que afine la redacción.", "Revísalo con las personas más afectadas."],
          words: [["Defensa de causas", "alzar la voz para cambiar una política, una práctica o una decisión."], ["Pedido", "la acción concreta que quieres que haga quien decide."], ["Planteamiento del problema", "una o dos oraciones que describen el problema con claridad."]],
          slides: [
            { title: "De la preocupación al problema", bullets: ["“No es seguro” es demasiado amplio", "Nombra el lugar, las personas, el problema"] },
            { title: "Un pedido concreto", bullets: ["Qué exactamente", "De quién", "Para cuándo"] },
            { title: "La comunidad primero", bullets: ["La IA afina la redacción", "Las personas afectadas dan forma al pedido"] }
          ],
          tryIt: "Elige una preocupación local real. Escribe un problema de una oración y un pedido concreto, usa la IA para afinarlos y compártelos con dos personas afectadas.",
          youCanNow: "convertir una preocupación en un planteamiento claro del problema y un pedido concreto."
        },
        {
          title: "Investigar datos y revisar las fuentes",
          minutes: 6,
          goal: "Encontrar datos que apoyen tu caso y comprobar cada uno con una fuente oficial o de confianza.",
          text: [
            "Los datos hacen que las autoridades escuchen. Fuentes útiles: los sitios web de la ciudad y del condado, las actas y los presupuestos de las reuniones, las agencias estatales, la Oficina del Censo de EE. UU. (data.census.gov) para datos de población e ingresos, datos de la policía o de transporte, las noticias locales y estudios de universidades u organizaciones sin fines de lucro.",
            "La IA puede sugerir dónde buscar y qué buscar: “¿Qué tipo de datos públicos mostrarían problemas de seguridad para los peatones en un cruce de una ciudad de EE. UU., y dónde los encontraría?”. Pero la IA puede inventar estadísticas y estudios. Nunca uses un número de la IA a menos que lo encuentres tú mismo en la fuente original.",
            "Junta tres datos fuertes, cada uno con el nombre de la fuente, el enlace y la fecha. Agrega historias reales: un padre, un estudiante, un guardia de cruce escolar. Pide siempre permiso para compartir la historia de alguien, y deja fuera los datos privados que no quiera hacer públicos."
          ],
          steps: ["Pregunta a la IA dónde encontrar datos sobre tu problema.", "Ve tú mismo a esas fuentes.", "Anota tres datos con fuente, enlace y fecha.", "Nunca uses un número que no encuentres en la fuente original.", "Junta dos historias con permiso."],
          words: [["Fuente", "de dónde viene un dato."], ["Fuente primaria", "el lugar original donde se publicaron los datos o la información."], ["Acta de la reunión", "el registro oficial por escrito de una reunión pública."]],
          slides: [
            { title: "Dónde están los datos", bullets: ["Sitios web de la ciudad, el condado y el estado", "Datos del censo e informes de agencias", "Noticias locales y estudios"] },
            { title: "La IA señala, tú compruebas", bullets: ["La IA puede inventar estadísticas", "Encuentra cada número en la fuente original", "Anota fuente, enlace y fecha"] },
            { title: "Datos más historias", bullets: ["Experiencias de personas reales", "Pide siempre permiso", "Deja fuera los datos privados"] }
          ],
          sources: [{ name: "Oficina del Censo de EE. UU.: data.census.gov", url: "https://data.census.gov/" }],
          tryIt: "Encuentra tres datos sobre tu problema en fuentes oficiales o de confianza, con enlace y fecha de cada uno. Pregunta a dos personas si puedes compartir su historia.",
          youCanNow: "investigar datos comprobados y juntar historias de la comunidad con permiso."
        },
        {
          title: "Encontrar a quien decide y el momento correcto",
          minutes: 5,
          goal: "Identificar quién puede decir que sí a tu pedido y cuándo lo va a decidir.",
          text: [
            "La defensa fracasa cuando va a la persona equivocada. Averigua quién tiene el poder de decir que sí: un concejal de la ciudad, una junta del condado, una junta escolar, un legislador estatal, el jefe de un departamento o el gerente de una empresa.",
            "Pregunta a la IA: “En una ciudad típica de EE. UU., ¿quién decide si se instala un semáforo peatonal nuevo y cuál es el proceso?”. Luego confírmalo en el sitio web de tu ciudad o llama a la oficina. Aprende el calendario: cuándo se fijan los presupuestos, cuándo se reúne el concejo o la junta, y cuándo se abre el periodo de comentarios públicos.",
            "Haz un mapa de tus aliados (vecinos, escuelas, iglesias, negocios, otras organizaciones sin fines de lucro) y de quienes probablemente se opongan, y por qué. Los aliados te hacen más fuerte; entender a la oposición te ayuda a responder sus preocupaciones."
          ],
          steps: ["Pregunta a la IA quién suele decidir sobre tu problema.", "Confírmalo en el sitio web de tu gobierno local o por teléfono.", "Busca las fechas de las reuniones, los tiempos del presupuesto y los periodos de comentarios públicos.", "Haz la lista de aliados y de la posible oposición.", "Elige tu momento para actuar."],
          words: [["Quien decide", "la persona o el grupo con el poder de decir que sí a tu pedido."], ["Comentario público", "una oportunidad para que el público hable o escriba a las autoridades antes de una decisión."], ["Aliado", "una persona o un grupo que apoya tu causa."]],
          slides: [
            { title: "¿Quién puede decir que sí?", bullets: ["Concejo, junta, legislador, jefe de departamento", "Confírmalo en los sitios web oficiales"] },
            { title: "Conoce el calendario", bullets: ["Fechas de las reuniones", "Tiempos del presupuesto", "Periodos de comentarios públicos"] },
            { title: "Haz el mapa del terreno", bullets: ["Aliados: vecinos, escuelas, iglesias, negocios", "La oposición y sus razones"] }
          ],
          tryIt: "Encuentra en un sitio web oficial a quien decide sobre tu problema y su próxima reunión o fecha límite para comentarios. Haz una lista de tres aliados y una posible preocupación de los opositores.",
          youCanNow: "encontrar a quien decide, el momento y los aliados correctos para un pedido de defensa."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Armar tu caso",
        questions: [
          { q: "¿Cuál es el pedido de defensa más claro?", options: ["“Que las cosas mejoren”", "“Arreglen la seguridad”", "“Pedimos al Departamento de Transporte que instale un semáforo peatonal en Main y la Quinta antes del próximo año escolar”", "“Hagan algo ya”"], answer: 2, why: "Dice qué, quién y para cuándo." },
          { q: "La IA da una estadística sobre choques en tu cruce. ¿Qué haces?", options: ["Encontrarla en la fuente original antes de usarla", "Usarla de inmediato", "Redondearla hacia arriba", "Ponerla en negritas"], answer: 0, why: "La IA puede inventar estadísticas." },
          { q: "Antes de compartir la historia de un vecino en tu campaña, debes:", options: ["Publicar su dirección", "Cambiarla para que suene peor", "Nada", "Pedirle permiso"], answer: 3, why: "Las historias son de las personas que las vivieron." },
          { q: "¿Por qué encontrar a quien decide?", options: ["Para publicar su dirección", "La defensa fracasa cuando va a la persona equivocada", "No importa", "Para evitarlo"], answer: 1, why: "Solo la persona correcta puede decir que sí." },
          { q: "¿Qué es un periodo de comentarios públicos?", options: ["Un programa de televisión", "Una oportunidad para que el público hable o escriba antes de una decisión", "Una fecha límite de impuestos", "Una reunión privada"], answer: 1, why: "Es un momento formal para que el público opine." }
        ]
      }
    },
    {
      name: "Capítulo 2: Alzar la voz con eficacia",
      lessons: [
        {
          title: "Escribir una carta o un comentario público con IA",
          minutes: 5,
          goal: "Escribir una carta o un comentario público corto y respetuoso que haga tu pedido.",
          text: [
            "Una carta o un comentario fuerte es corto (menos de 300 palabras) y tiene cuatro partes: quién eres y tu relación con el problema, el problema con uno o dos datos, una historia real corta, y tu pedido concreto con un agradecimiento.",
            "Pide a la IA: “Escribe un comentario público respetuoso de menos de 300 palabras para el Concejo de la Ciudad. Soy madre de un alumno de la Escuela Primaria Lincoln. Problema: [problema]. Datos: [tus datos comprobados]. Historia: [compartida con permiso]. Pedido: [tu pedido]”. Luego edítalo para que suene como tú.",
            "Las cartas personales valen más que las cartas modelo: las autoridades notan cuando llegan cientos de mensajes idénticos hechos con IA. Anima a quienes te apoyan a agregar una oración propia. Sé respetuoso aunque estés enojado; los insultos se ignoran."
          ],
          steps: ["Quién eres y tu relación con el problema.", "El problema con uno o dos datos comprobados.", "Una historia real corta, compartida con permiso.", "Tu pedido concreto y un agradecimiento.", "Edítalo para que suene como tú; menos de 300 palabras."],
          words: [["Carta modelo", "la misma carta enviada por muchas personas con pocos cambios o ninguno."], ["Elector", "una persona que vive en el distrito de una autoridad y a quien esa autoridad representa."]],
          slides: [
            { title: "Cuatro partes", bullets: ["Quién eres", "El problema y los datos", "Una historia real", "Tu pedido y un agradecimiento"] },
            { title: "La IA redacta, tú personalizas", bullets: ["Dale solo datos comprobados", "Menos de 300 palabras", "Que suene como tú"] },
            { title: "Que te escuchen", bullets: ["Lo personal vale más que las cartas idénticas", "Quienes te apoyan agregan su propia oración", "Sé respetuoso"] }
          ],
          tryIt: "Escribe con ayuda de la IA una carta o un comentario público de menos de 300 palabras sobre tu problema, con tus datos comprobados y una historia compartida con permiso. Léelo en voz alta y edítalo.",
          youCanNow: "escribir una carta o un comentario público corto y respetuoso que haga un pedido claro."
        },
        {
          title: "Hacer una hoja informativa de una página",
          minutes: 5,
          goal: "Crear una hoja informativa de una página que las autoridades ocupadas y los vecinos puedan leer en un minuto.",
          text: [
            "Una hoja informativa es un volante de una página que dejas a las autoridades, compartes en internet y das a quienes te apoyan. La gente ocupada lee la parte de arriba y mira por encima el resto.",
            "Estructura: un titular en negritas con el problema, tres datos clave con sus fuentes, una cita o historia corta, el pedido en un recuadro, y quién eres con tus datos de contacto. Usa lenguaje sencillo, letra grande y una gráfica o foto sencilla si ayuda.",
            "Pide a la IA que redacte el texto a partir de tus datos y luego diséñalo en Canva o Google Docs. Revisa otra vez cada número y cada fuente. Tradúcela si en tu comunidad se hablan otros idiomas; la IA puede hacer un borrador de la traducción, pero pide a alguien que hable bien ese idioma que lo revise."
          ],
          steps: ["Escribe un titular que nombre el problema.", "Agrega tres datos con sus fuentes.", "Agrega una cita o historia corta.", "Pon el pedido en un recuadro.", "Diséñala en una página; revisa los números; que hablantes nativos revisen las traducciones."],
          words: [["Hoja informativa", "un volante de una página que resume un problema, los datos y un pedido."], ["Lenguaje sencillo", "escritura clara y simple que la mayoría de la gente entiende."]],
          slides: [
            { title: "Una página, un minuto", bullets: ["La gente ocupada lee la parte de arriba", "Luego mira por encima"] },
            { title: "Estructura", bullets: ["Titular con el problema", "Tres datos con fuentes", "Una cita, el pedido en un recuadro, contacto"] },
            { title: "Púlela", bullets: ["Canva o Google Docs", "Vuelve a revisar cada número", "Traducciones revisadas por hablantes nativos"] }
          ],
          tryIt: "Haz una hoja informativa de una página para tu problema con la IA redactando el texto y Canva o Google Docs para el diseño. Pide a alguien que la lea en un minuto y te diga cuál es el pedido.",
          youCanNow: "crear una hoja informativa clara de una página para una causa."
        },
        {
          title: "Testimonio público, quienes te apoyan y las reglas",
          minutes: 6,
          goal: "Dar un testimonio de dos minutos, movilizar a quienes te apoyan y seguir las reglas de defensa para organizaciones sin fines de lucro.",
          text: [
            "Muchos concejos y juntas dan a cada persona dos o tres minutos para hablar. Prepara una versión de dos minutos de tu carta: unas 250 palabras habladas. Pide a la IA que la recorte y luego practica en voz alta con un cronómetro. Empieza con tu nombre y tu relación con el tema, termina con tu pedido y lleva copias de tu hoja informativa.",
            "Lleva a quienes te apoyan. Una sala llena de vecinos vestidos del mismo color manda un mensaje. Usa la IA para redactar un mensaje corto de inscripción y recordatorios, y ayuda a quienes te apoyan a escribir sus propios comentarios.",
            "Conoce las reglas para las organizaciones sin fines de lucro. El IRS (la agencia de impuestos de EE. UU.) dice que una organización 501(c)(3) puede hacer algo de cabildeo, pero no como una parte sustancial de sus actividades, y que educar al público sobre políticas no es cabildeo. Tiene absolutamente prohibido apoyar u oponerse a candidatos a cargos públicos, aunque se permiten la educación y el registro de votantes no partidistas. Consulta los detalles con un abogado de organizaciones sin fines de lucro o con la asociación de organizaciones sin fines de lucro de tu estado."
          ],
          steps: ["Recorta tu carta a unas 250 palabras habladas.", "Practica en voz alta con un cronómetro de dos minutos.", "Lleva copias de la hoja informativa y a quienes te apoyan.", "Usa la IA para redactar mensajes de inscripción y recordatorios.", "Revisa las reglas para organizaciones sin fines de lucro sobre cabildeo y candidatos."],
          words: [["Testimonio", "hablar ante las autoridades en una reunión pública sobre un problema."], ["Cabildeo", "intentar influir en las leyes, por ejemplo contactando a legisladores sobre un proyecto de ley."], ["No partidista", "que no apoya a ningún partido político ni candidato."]],
          slides: [
            { title: "Testimonio de dos minutos", bullets: ["Unas 250 palabras habladas", "Primero tu nombre y tu relación, al final el pedido", "Practica con un cronómetro"] },
            { title: "Lleva a quienes te apoyan", bullets: ["Lleguen juntos", "La IA redacta inscripciones y recordatorios", "Cada persona agrega sus propias palabras"] },
            { title: "Reglas para 501(c)(3) (IRS)", bullets: ["Se permite algo de cabildeo, no como parte sustancial", "No apoyar ni oponerse a candidatos", "Se permite la educación de votantes no partidista"] }
          ],
          sources: [{ name: "IRS: Cabildeo", url: "https://www.irs.gov/charities-non-profits/lobbying" }, { name: "IRS: Prohibición de intervenir en campañas políticas para organizaciones 501(c)(3)", url: "https://www.irs.gov/charities-non-profits/charitable-organizations/the-restriction-of-political-campaign-intervention-by-section-501c3-tax-exempt-organizations" }],
          tryIt: "Tarea final: recorta tu carta a un testimonio de dos minutos y practícalo en voz alta con un cronómetro. Júntalo con tu problema y tu pedido, tus datos, tus historias, quien decide, tu carta y tu hoja informativa para completar tu kit de defensa.",
          youCanNow: "planificar y llevar a cabo con ayuda de la IA una pequeña campaña de defensa basada en datos, dentro de las reglas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Alzar la voz con eficacia",
        questions: [
          { q: "¿Por qué las cartas personales son mejores que cientos de cartas idénticas?", options: ["Las cartas idénticas son ilegales", "Las cartas personales son más largas", "No son mejores", "Las autoridades notan y valoran las voces individuales"], answer: 3, why: "Las historias y palabras personales pesan más." },
          { q: "Una hoja informativa debe ser:", options: ["Una página que se pueda leer en más o menos un minuto", "De veinte páginas", "Solo fotos", "Escrita con términos técnicos"], answer: 0, why: "Los lectores ocupados necesitan algo corto y claro." },
          { q: "La IA traduce tu hoja informativa al inglés. ¿Qué debes hacer después?", options: ["Imprimirla sin revisar", "Borrar la versión en español", "Pedir a alguien que hable bien el idioma que la revise", "No traducirla"], answer: 2, why: "Las traducciones de la IA pueden tener errores." },
          { q: "¿Cuántas palabras habladas caben más o menos en dos minutos?", options: ["Unas 2,500", "Unas 20", "Unas 1,000", "Unas 250"], answer: 3, why: "La mayoría de la gente habla entre 120 y 130 palabras por minuto." },
          { q: "Según el IRS, ¿puede una organización 501(c)(3) apoyar en público a un candidato a un cargo?", options: ["Sí, en cualquier momento", "Solo en redes sociales", "No, está absolutamente prohibido", "Solo con donaciones pequeñas"], answer: 2, why: "El IRS dice que intervenir en campañas está absolutamente prohibido." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para la defensa de causas comunitarias",
    questions: [
      { q: "Defender una causa significa:", options: ["Solo votar", "Alzar la voz para cambiar una política, una práctica o una decisión", "Postularse a un cargo", "Demandar a alguien"], answer: 1, why: "La defensa busca el cambio alzando la voz." },
      { q: "¿Por qué reducir una preocupación grande a un problema concreto?", options: ["Las autoridades pueden atender problemas concretos", "Suena más pequeño", "La IA lo exige", "Para evitar actuar"], answer: 0, why: "Los problemas concretos llevan a soluciones concretas." },
      { q: "Un pedido fuerte incluye:", options: ["Solo sentimientos", "Una amenaza", "Qué, de quién y para cuándo", "Ningún detalle"], answer: 2, why: "Es más fácil decir que sí a los pedidos claros." },
      { q: "¿Quién debe dar forma al pedido?", options: ["Las personas más afectadas", "Solo la IA", "Solo gente de fuera", "Nadie"], answer: 0, why: "La defensa dirigida por la comunidad es más fuerte." },
      { q: "¿Dónde puedes encontrar datos de población e ingresos de EE. UU.?", options: ["En un meme cualquiera", "En lo que adivine la IA", "En un comentario de redes sociales", "En data.census.gov"], answer: 3, why: "La Oficina del Censo publica datos oficiales." },
      { q: "Una fuente primaria es:", options: ["Cualquier blog", "El lugar original donde se publicó la información", "Un resumen de la IA", "Un rumor"], answer: 1, why: "Las fuentes primarias son las más confiables." },
      { q: "Para cada dato que juntes, anota:", options: ["Solo el número", "La fuente, el enlace y la fecha", "Nada", "Lo que adivinas"], answer: 1, why: "Las fuentes dejan que otros comprueben tus datos." },
      { q: "Las actas de una reunión son:", options: ["Cuánto duró una reunión", "Un tipo de reloj", "Un diario privado", "El registro oficial por escrito de una reunión pública"], answer: 3, why: "Las actas registran lo que se decidió." },
      { q: "La IA dice que la junta escolar decide sobre los cruces peatonales. Debes:", options: ["Confirmarlo en el sitio web de tu ciudad o llamando", "Creerle", "Escribir a todas las oficinas a la vez sin revisar", "Rendirte"], answer: 0, why: "Los procesos locales cambian; confírmalo oficialmente." },
      { q: "¿Por qué aprender el calendario del presupuesto?", options: ["Los presupuestos son secretos", "No sirve", "Muchas decisiones se toman cuando se fijan los presupuestos", "Para faltar a las reuniones"], answer: 2, why: "Importa hacer tu pedido en el momento de las decisiones del presupuesto." },
      { q: "Un aliado es:", options: ["Un opositor", "Solo quien decide", "Un sitio web", "Una persona o un grupo que apoya tu causa"], answer: 3, why: "Los aliados suman fuerza y voces." },
      { q: "¿Por qué entender a la posible oposición?", options: ["Para insultarla", "Para ignorarla", "Para poder responder sus preocupaciones", "Para copiarla"], answer: 2, why: "Atender las preocupaciones suma apoyo." },
      { q: "Un elector es:", options: ["Un tipo de ley", "Una persona que vive en el distrito de una autoridad", "Un abogado", "Un edificio de la ciudad"], answer: 1, why: "Las autoridades prestan atención a sus electores." },
      { q: "Un comentario público fuerte es:", options: ["De menos de 300 palabras, con quién eres, datos, una historia y un pedido", "Lo más largo posible", "Enojado e insultante", "Solo estadísticas"], answer: 0, why: "Lo corto, personal y concreto funciona mejor." },
      { q: "Estás enojado con las autoridades. En tu carta debes:", options: ["Usar insultos", "Hacer amenazas", "Ser respetuoso", "Escribir todo en mayúsculas"], answer: 2, why: "Los mensajes respetuosos se leen y se toman en cuenta." },
      { q: "¿Dónde debe aparecer el pedido en una hoja informativa?", options: ["En un recuadro claro", "Escondido abajo en letra pequeña", "En ningún lado", "Solo en el reverso"], answer: 0, why: "El pedido debe destacar." },
      { q: "En un testimonio público, debes empezar con:", options: ["Una historia larga", "Solo tu pedido", "Un chiste", "Tu nombre y tu relación con el problema"], answer: 3, why: "Les dice a las autoridades por qué te importa el problema." },
      { q: "Según el IRS, educar al público sobre políticas:", options: ["Siempre es ilegal", "No se considera cabildeo", "Cuenta como hacer campaña", "Está prohibido para las organizaciones sin fines de lucro"], answer: 1, why: "El IRS dice que las actividades educativas no son cabildeo." },
      { q: "Una organización 501(c)(3) puede hacer algo de cabildeo, pero:", options: ["En cantidades ilimitadas", "No como una parte sustancial de sus actividades", "Solo a favor de candidatos", "Nunca"], answer: 1, why: "Demasiado cabildeo pone en riesgo su exención de impuestos." },
      { q: "Según el IRS, las campañas no partidistas de registro de votantes de una organización 501(c)(3) están:", options: ["Siempre prohibidas", "Permitidas solo para un partido", "Obligatorias", "En general permitidas si de verdad son no partidistas"], answer: 3, why: "El registro de votantes no partidista no está prohibido." }
    ]
  }
};

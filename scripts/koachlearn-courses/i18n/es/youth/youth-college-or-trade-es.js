"use strict";

// Koach Learn course (Spanish translation of youth/youth-college-or-trade.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "youth-college-or-trade-es",
  lang: "es",
  translationOf: "youth-college-or-trade",
  category: "Youth",
  name: "Elegir entre la universidad, un oficio o trabajar después de la escuela",
  skills: "Conocer tus intereses y necesidades, Comparar caminos universitarios, Comparar oficios, programas de aprendiz, el ejército y el trabajo, Solicitar ayuda financiera, Evitar trampas de deuda y estafas, Hacer un plan de dos años",
  outcome: "comparar lado a lado la universidad, un oficio, el ejército y el trabajo, averiguar cómo pagar lo que elijas sin caer en trampas de deuda ni estafas, y escribir un plan de dos años con un plan de respaldo.",
  about: [
    "Después de la preparatoria no hay un solo camino correcto. Algunas personas van a una universidad de cuatro años, otras empiezan en un colegio comunitario, otras aprenden un oficio en un programa de aprendiz, otras entran al ejército y otras se ponen a trabajar enseguida y siguen aprendiendo en el trabajo. Mucha gente combina estos caminos con el tiempo.",
    "En este curso vas a mirar lo que te gusta y lo que necesitas, comparar los caminos principales con las mismas preguntas, aprender cómo funcionan la FAFSA y otras ayudas financieras, reconocer trampas de deuda y estafas, y escribir tu propio plan de dos años con un plan de respaldo.",
    "Las reglas de dinero, las fechas y los programas cambian cada año. Cada lección te muestra dónde revisar los datos actuales, y conviene que hables de tu plan con un consejero escolar, tu mamá o tu papá u otro adulto de confianza.",
    "Cada lección dura unos cinco minutos y termina con una tarea que haces enseguida. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Escribe un plan de dos años de una página: tu camino principal y uno de respaldo, una comparación de por lo menos dos caminos con las mismas cinco preguntas (costo, tiempo, si te pagan mientras aprendes, trabajos probables y qué necesitas para entrar), cómo lo vas a pagar, qué vas a hacer cada seis meses y las personas que te van a ayudar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Estudiantes de preparatoria y recién graduados en Estados Unidos que están decidiendo qué hacer después de la escuela, y las madres, padres, consejeros y mentores que los ayudan.",
    startingPoint: "Conocen algunos de sus intereses y han oído hablar de la universidad, los oficios o el ejército por amigos y familiares. Pocos han comparado caminos con las mismas preguntas, revisado el precio neto, llenado la FAFSA o aprendido a reconocer estafas de ayuda financiera.",
    gap: "Escoger un camino por lo que dicen otros puede llevar a endeudarse por un programa que no va contigo, perder fechas límite de ayuda o perder dinero en estafas. Comparar opciones con las mismas preguntas, entender la ayuda financiera y escribir un plan de dos años con uno de respaldo ayuda a los jóvenes a empezar un camino que les queda bien y que pueden pagar.",
    constraints: [
      "Las reglas de dinero, las fechas de la ayuda y los programas cambian cada año; se revisan en studentaid.gov, apprenticeship.gov y los sitios oficiales de las escuelas",
      "Sin asesoría financiera: cada persona habla sus planes con un consejero, su madre o padre o un adulto de confianza",
      "Privacidad y estafas: nunca compartir el FSA ID ni números de cuenta bancaria o de tarjeta, y nunca pagar por llenar la FAFSA",
      "Dispositivos: un teléfono o una computadora de la escuela o de la biblioteca con internet",
      "Lecciones cortas y palabras sencillas; muchas personas serán las primeras de su familia en tomar estas decisiones"
    ],
    prerequisites: "Ninguno. \"La IA y la exploración de carreras\" es un buen primer curso."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Antes de comparar escuelas o empleos", action: "hacer una lista de tus intereses, tus fortalezas, tu forma de aprender y tus necesidades de dinero, y escoger los caminos que mejor te quedan hasta ahora", standard: "encerrando dos o tres de los cinco caminos principales" },
    { id: "O2", condition: "Usando los sitios web de las escuelas y las calculadoras de precio neto", action: "comparar un colegio comunitario y una universidad de cuatro años con las mismas cinco preguntas", standard: "con cada pregunta respondida o marcada para preguntar" },
    { id: "O3", condition: "Usando apprenticeship.gov y fuentes oficiales", action: "comparar un programa de aprendiz, el ejército o un trabajo con capacitación usando las mismas cinco preguntas", standard: "preguntando por las tasas de terminación, la colocación en empleos y la acreditación antes de firmar nada" },
    { id: "O4", condition: "Usando studentaid.gov", action: "explicar los cuatro tipos de ayuda financiera y planear cuándo y con quién vas a llenar la FAFSA", standard: "con la fecha de apertura y las fechas límite de este año anotadas y sin pagar ninguna tarifa" },
    { id: "O5", condition: "Con ofertas de ayuda y ofertas de becas", action: "clasificar cada oferta en dinero gratis, dinero que se gana trabajando y préstamos, calcular lo que queda por pagar y reconocer las señales de alerta de estafa", standard: "con las cantidades correctas y nombrando dónde denunciar una estafa" },
    { id: "O6", condition: "Usando tus comparaciones y tu plan de ayuda", action: "escribir un plan de dos años con un camino principal, uno de respaldo, metas intermedias cada seis meses, cómo vas a pagar y quién te va a ayudar", standard: "con todas las partes y una fecha para revisarlo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Comparar tus caminos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Conócete antes de elegir",
          minutes: 5,
          goal: "Escribir tus intereses, tus fortalezas, tu forma de aprender y tus necesidades de dinero para poder evaluar cada camino.",
          text: [
            "Antes de comparar escuelas o trabajos, mírate a ti. El mejor camino va con lo que disfrutas, con lo que se te da bien, con cómo te gusta aprender y con lo que necesitas ahora mismo.",
            "Pregúntate: ¿Con qué materias o actividades se me pasa el tiempo volando? ¿Aprendo mejor leyendo y escribiendo, o haciendo cosas con las manos? ¿Necesito ganar dinero pronto, para ayudar a mi familia o pagar mis propios gastos? ¿Quiero quedarme cerca de casa o mudarme?",
            "Hay cinco caminos principales: una universidad de cuatro años, un colegio comunitario, una escuela de oficios o un programa de aprendiz, el ejército y ponerte a trabajar. Ninguno es mejor para todos. Un camino que es genial para un amigo puede no ir contigo.",
            "Un asistente de IA puede ayudarte a buscar ideas de carreras que vayan con tus respuestas. Toma sus ideas como una lista para empezar y luego revisa los datos reales con un consejero y en sitios web oficiales."
          ],
          steps: ["Escribe tres cosas que disfrutas y tres que se te dan bien.", "Escribe cómo aprendes mejor: leyendo, escuchando o haciendo.", "Escribe tus necesidades de dinero: ¿necesitas ganar pronto?", "Escribe dónde quieres vivir los próximos dos años.", "Haz una lista de los cinco caminos y encierra en un círculo los dos o tres que mejor van contigo por ahora."],
          words: [["Interés", "algo que disfrutas hacer o aprender."], ["Fortaleza", "algo que haces bien."], ["Camino", "la ruta que tomas después de la escuela hacia una carrera."]],
          slides: [
            { title: "Empieza por ti", bullets: ["Lo que disfrutas", "Lo que se te da bien", "Cómo aprendes y lo que necesitas"] },
            { title: "Preguntas para hacerte", bullets: ["¿Con qué se me pasa el tiempo volando?", "¿Con las manos, o leyendo y escribiendo?", "¿Necesito ganar dinero pronto?"] },
            { title: "Cinco caminos principales", bullets: ["Universidad de cuatro años o colegio comunitario", "Escuela de oficios o programa de aprendiz", "El ejército o ponerte a trabajar"] },
            { title: "Usar la IA para buscar ideas", bullets: ["Pide carreras que vayan con tus respuestas", "Tómalo como una lista para empezar", "Revisa los datos con un consejero"] }
          ],
          tryIt: "Responde en papel las cuatro preguntas de esta lección. Luego pregúntale a un asistente de IA: Estos son mis intereses y mis fortalezas. Sugiéreme cinco carreras y la preparación que necesita cada una. Encierra en un círculo los dos o tres caminos que mejor van contigo.",
          youCanNow: "describir tus intereses, tus fortalezas, tu forma de aprender y tus necesidades de dinero, y elegir los caminos que vale la pena comparar.",
          quickCheck: [
            { objective: "O1", q: "¿Cuáles son los cinco caminos principales después de la preparatoria en este curso?", options: ["Solo la universidad y el trabajo", "Universidad, año sabático, viajes, deportes y música", "Solo cursos en línea", "Universidad de cuatro años, colegio comunitario, escuela de oficios o programa de aprendiz, el ejército y el trabajo"], answer: 3, why: "El curso compara estos cinco caminos, y mucha gente los combina con el tiempo." },
            { objective: "O1", q: "Necesitas ganar dinero pronto para ayudar a tu familia. ¿Cómo afecta eso tu decisión?", options: ["No importa", "Te fijas bien en los caminos donde puedes ganar dinero mientras aprendes, como un programa de aprendiz o un trabajo con capacitación", "Solo es posible una universidad de cuatro años", "Esperas unos años antes de decidir"], answer: 1, why: "Tus necesidades de dinero son parte de lo que hace que un camino te quede bien." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Colegio comunitario y universidad de cuatro años",
          minutes: 5,
          goal: "Comparar un colegio comunitario y una universidad de cuatro años con las mismas cinco preguntas.",
          text: [
            "Un colegio comunitario (community college) es una institución pública de dos años cerca de casa. Ofrece certificados (muchas veces de un año o menos), títulos de asociado (de unos dos años) y clases que puedes transferir a una universidad de cuatro años. Normalmente cuesta mucho menos y te permite vivir en casa.",
            "Una universidad de cuatro años ofrece títulos de licenciatura (bachelor's degree). Algunas carreras, como maestro, enfermería con licenciatura, ingeniería y contabilidad, normalmente necesitan uno. Los costos cambian mucho entre escuelas públicas y privadas, y entre vivir en casa o en una residencia estudiantil.",
            "Usa las mismas cinco preguntas para cada opción: ¿Cuánto va a costar en total, después de la ayuda? ¿Cuánto tiempo va a tomar? ¿Puedo ganar dinero mientras aprendo? ¿Qué trabajos consiguen los graduados y cuánto ganan? ¿Qué necesito para entrar?",
            "Una ruta inteligente para muchos estudiantes es empezar en un colegio comunitario y luego transferirse. Antes de inscribirte en clases, pregúntale al colegio comunitario qué universidades de cuatro años aceptan sus créditos."
          ],
          steps: ["Elige un colegio comunitario y una universidad de cuatro años para comparar.", "Busca el costo total por año de cada escuela y su calculadora de precio neto.", "Escribe el tiempo para terminar, los trabajos que consiguen los graduados y lo que necesitas para entrar.", "Pregúntale a un consejero por los acuerdos de transferencia.", "Pon las respuestas lado a lado en una tabla."],
          words: [["Certificado", "un programa corto que te prepara para un trabajo específico."], ["Título de asociado", "un título que normalmente toma unos dos años. En inglés se dice associate degree."], ["Licenciatura", "un título que normalmente toma unos cuatro años. En inglés se dice bachelor's degree."], ["Transferencia", "pasar tus créditos universitarios a otra escuela."], ["Precio neto", "lo que cuesta la universidad después de restar las becas y subvenciones. En inglés se dice net price."]],
          slides: [
            { title: "Colegio comunitario", bullets: ["Cerca de casa, cuesta menos", "Certificados y títulos de asociado", "Créditos que puedes transferir"] },
            { title: "Universidad de cuatro años", bullets: ["Títulos de licenciatura", "Necesaria para algunas carreras", "El costo cambia mucho según la escuela"] },
            { title: "Cinco preguntas para cada opción", bullets: ["¿Costo total después de la ayuda? ¿Cuánto tiempo?", "¿Ganas dinero mientras aprendes?", "¿Trabajos y sueldo después? ¿Qué necesitas para entrar?"] },
            { title: "Empieza cerca y luego transfiérete", bullets: ["Ahorra dinero a muchos estudiantes", "Primero revisa qué escuelas aceptan los créditos"] }
          ],
          tryIt: "Haz una tabla con las cinco preguntas en un lado y dos escuelas arriba: un colegio comunitario y una universidad de cuatro años. Llena lo que encuentres en sus sitios web y marca lo que todavía tienes que preguntar.",
          youCanNow: "comparar un colegio comunitario y una universidad de cuatro años con las mismas cinco preguntas y reconocer la ruta de empezar y transferirte.",
          quickCheck: [
            { objective: "O2", q: "¿Qué muestra una calculadora de precio neto?", options: ["Un cálculo aproximado de lo que cuesta una escuela después de las subvenciones y las becas", "El marcador del equipo de fútbol americano de la escuela", "Tus puntajes de exámenes", "Cuántos estudiantes viven en residencias"], answer: 0, why: "El precio neto es lo que cuesta la universidad después de las subvenciones y las becas." },
            { objective: "O2", q: "Comparas dos universidades pero solo miras el precio de lista. ¿Qué te falta?", options: ["Nada; el precio es lo único que importa", "Los colores de la escuela", "Las otras preguntas: el tiempo, ganar dinero mientras aprendes, los empleos y el sueldo, y lo que necesitas para entrar", "El número de edificios"], answer: 2, why: "Usa las mismas cinco preguntas para cada opción." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Oficios, programas de aprendiz, el ejército y el trabajo",
          minutes: 6,
          goal: "Comparar un programa de aprendiz, el ejército y un trabajo con capacitación usando las mismas cinco preguntas.",
          text: [
            "Un Registered Apprenticeship (programa de aprendiz registrado) es un trabajo donde te pagan mientras aprendes un oficio o una ocupación calificada con trabajadores con experiencia, con clases aparte. Los oficios incluyen electricista, plomero, carpintero y soldador, y hay programas de aprendiz en salud, informática y más. Busca en el Apprenticeship Job Finder (buscador de programas de aprendiz) de apprenticeship.gov.",
            "Las escuelas de oficios enseñan una habilidad en meses en vez de años, pero normalmente pagas. Antes de firmar, pregunta cuántos estudiantes terminan, cuántos consiguen trabajo en ese campo y si la escuela está acreditada. Ten cuidado con las ventas bajo presión.",
            "El ejército ofrece capacitación laboral, sueldo y beneficios para estudiar, a cambio de un compromiso de servicio de varios años. Presentas un examen llamado ASVAB, que ayuda a decidir para qué trabajos calificas. Habla con reclutadores de más de una rama, lee todo antes de firmar y revisa el sitio web oficial de la rama.",
            "Ponerte a trabajar enseguida también es un camino real. Busca empleadores que te capaciten, que asciendan a su propia gente o que ayuden a pagar clases más adelante. Usa las mismas cinco preguntas para comparar estos caminos con la universidad."
          ],
          steps: ["Busca programas cerca de ti en el Apprenticeship Job Finder de apprenticeship.gov.", "En cualquier escuela de oficios, pregunta por cuántos terminan, cuántos consiguen trabajo y si está acreditada.", "Si estás pensando en el ejército, habla con más de una rama y lee antes de firmar.", "En los trabajos, busca capacitación, ascensos y ayuda para pagar estudios.", "Responde las cinco preguntas para cada opción."],
          words: [["Registered Apprenticeship", "un trabajo pagado con capacitación organizada que lleva a una credencial reconocida."], ["Oficio", "un trabajo calificado que aprendes con capacitación, como electricista o soldador."], ["Acreditada", "revisada y aprobada por un grupo oficial que evalúa escuelas."], ["ASVAB", "el examen que se usa para ver para qué trabajos del ejército calificas."]],
          slides: [
            { title: "Programas de aprendiz", bullets: ["Trabajo pagado mientras aprendes un oficio", "Electricista, plomero, salud, informática y más", "Busca en apprenticeship.gov"] },
            { title: "Escuelas de oficios", bullets: ["Meses, no años, pero normalmente pagas", "Pregunta: cuántos terminan, trabajo, acreditación", "Vete si te presionan para comprar"] },
            { title: "El ejército", bullets: ["Capacitación, sueldo y beneficios para estudiar", "Varios años de servicio; examen ASVAB", "Habla con más de una rama; lee antes de firmar"] },
            { title: "Ponerte a trabajar", bullets: ["Busca capacitación y ascensos", "Algunos empleadores ayudan a pagar clases después"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (buscador de programas de aprendiz)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Encuentra en apprenticeship.gov un programa de aprendiz cerca de ti y un trabajo que ofrezca capacitación. Agrégalos a tu tabla de la lección anterior y responde las cinco preguntas para cada uno.",
          youCanNow: "comparar programas de aprendiz, escuelas de oficios, el ejército y el trabajo con las mismas cinco preguntas que usaste para la universidad.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace diferente a un programa de aprendiz registrado de una escuela de oficios?", options: ["Te pagan mientras aprendes en el trabajo", "No tiene clases", "Siempre cuesta más", "Solo enseña computación"], answer: 0, why: "En un programa de aprendiz ganas un sueldo mientras aprendes de trabajadores con experiencia." },
            { objective: "O3", q: "Un reclutador militar quiere que firmes hoy. ¿Qué haces?", options: ["Firmas para no perder el lugar", "Le pides a un amigo que firme por ti", "No lees el contrato", "Hablas con más de una rama, revisas el sitio web oficial y lees antes de firmar"], answer: 3, why: "Lee todo y compara las ramas antes de comprometerte a varios años de servicio." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Comparar tus caminos",
        questions: [
          { objective: "O1", q: "¿Qué debes mirar primero antes de comparar escuelas o trabajos?", options: ["Lo que están haciendo tus amigos", "Tus intereses, tus fortalezas, tu forma de aprender y tus necesidades", "Qué escuela tiene el mejor equipo deportivo", "Solo la opción más barata"], answer: 1, why: "El mejor camino va contigo, así que empieza por conocerte." },
          { objective: "O2", q: "¿Qué suele ser cierto sobre el colegio comunitario?", options: ["Cuesta mucho más que una universidad privada", "Solo ofrece títulos de cuatro años", "Nunca te puedes transferir", "Está cerca de casa y normalmente cuesta menos"], answer: 3, why: "Los colegios comunitarios son locales y normalmente mucho más baratos." },
          { objective: "O2", q: "Quieres empezar en un colegio comunitario y transferirte después. ¿Qué debes revisar primero?", options: ["Qué universidades de cuatro años aceptan sus créditos", "El menú de la cafetería", "El tamaño del estacionamiento", "Nada; todos los créditos siempre se transfieren"], answer: 0, why: "Revisar primero los acuerdos de transferencia evita que pierdas tus créditos." },
          { objective: "O3", q: "¿Qué es un Registered Apprenticeship?", options: ["Una práctica sin paga", "Un trabajo pagado donde aprendes un oficio calificado con capacitación", "Un videojuego", "Un título de cuatro años"], answer: 1, why: "A los aprendices les pagan mientras aprenden con trabajadores con experiencia." },
          { objective: "O3", q: "Un vendedor de una escuela de oficios dice que tienes que firmar hoy. ¿Qué haces?", options: ["Firmar enseguida", "Darle tu tarjeta del banco", "Preguntar cuántos terminan, cuántos consiguen trabajo y si está acreditada, y tomarte tiempo para decidir", "Pedir prestado todo lo posible"], answer: 2, why: "La presión para firmar hoy es una señal de alerta; las buenas escuelas te dan datos y tiempo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Cómo pagarlo y hacer tu plan",
      lessons: [
        {
          objectives: ["O4"],
          title: "La FAFSA y la ayuda financiera",
          minutes: 6,
          goal: "Explicar los tipos de ayuda financiera y prepararte para llenar gratis la FAFSA en studentaid.gov.",
          text: [
            "La ayuda financiera es dinero para ayudarte a pagar la universidad, el colegio comunitario y muchas escuelas de oficios. Hay cuatro tipos: subvenciones y becas (no las devuelves), estudio y trabajo o work-study (un trabajo de medio tiempo) y préstamos (los devuelves con intereses).",
            "La FAFSA (Free Application for Federal Student Aid, la solicitud gratuita de ayuda federal para estudiantes) es el formulario que abre la puerta a la ayuda federal, y muchos estados y universidades también la usan para su propia ayuda. Es gratis y la llenas en studentaid.gov. Vas a necesitar una cuenta de StudentAid.gov, y tal vez también tu mamá o tu papá u otra persona que aporte información en el formulario.",
            "Cada año se abre una FAFSA nueva para el siguiente año escolar. Revisa en studentaid.gov la fecha en que se abre y revisa las fechas límite de tu estado y de las universidades; algunas ayudas se acaban pronto, así que preséntala lo antes que puedas.",
            "Nunca le pagues a nadie para llenar la FAFSA, y nunca compartas tu usuario y contraseña de StudentAid.gov (tu FSA ID) con nadie, ni siquiera con un asesor. Tu consejero escolar o la oficina de ayuda financiera de una universidad te pueden ayudar gratis."
          ],
          steps: ["Entra a studentaid.gov (revisa bien la dirección).", "Crea tu cuenta de StudentAid.gov; puede que tu mamá, tu papá u otra persona que aporte información también necesite una.", "Reúne lo que pide el formulario, como la información de impuestos.", "Busca la fecha en que se abre la FAFSA este año y las fechas límite de tu estado y de las universidades.", "Llénala pronto, o con la ayuda gratis de un consejero; nunca le pagues a una empresa para hacerlo."],
          words: [["FAFSA", "la Free Application for Federal Student Aid, la solicitud gratuita de ayuda federal para estudiantes."], ["Subvención", "dinero para estudiar que no devuelves. En inglés se dice grant."], ["Work-study", "un trabajo de medio tiempo que ayuda a pagar los estudios."], ["Préstamo", "dinero prestado que tienes que devolver, normalmente con intereses."], ["FSA ID", "tu usuario y contraseña de StudentAid.gov; nunca lo compartas."]],
          slides: [
            { title: "Cuatro tipos de ayuda", bullets: ["Subvenciones y becas: no se devuelven", "Work-study: un trabajo de medio tiempo", "Préstamos: los devuelves con intereses"] },
            { title: "La FAFSA", bullets: ["Gratis, en studentaid.gov", "Abre la puerta a ayuda federal, estatal y universitaria", "Tu mamá, tu papá u otra persona también puede necesitar cuenta"] },
            { title: "Las fechas", bullets: ["Cada año se abre una FAFSA nueva", "Revisa las fechas en studentaid.gov", "Preséntala pronto: algunas ayudas se acaban"] },
            { title: "Protégete", bullets: ["Nunca le pagues a nadie para llenarla", "Nunca compartas tu FSA ID", "Los consejeros ayudan gratis"] }
          ],
          sources: [
            { name: "Federal Student Aid: Solicita ayuda con la FAFSA", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC: Cómo evitar estafas de becas y ayuda financiera", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Entra a studentaid.gov y busca la fecha en que se abre la FAFSA este año. Luego busca la fecha límite de ayuda financiera de una escuela y de tu estado. Anota las dos fechas y escribe quién te va a ayudar a llenar el formulario.",
          youCanNow: "explicar las subvenciones, las becas, el work-study y los préstamos, y prepararte para presentar la FAFSA gratis, de forma segura y a tiempo.",
          quickCheck: [
            { objective: "O4", q: "¿Qué tipos de ayuda no tienes que devolver?", options: ["Los préstamos", "Las subvenciones y las becas", "Las tarjetas de crédito", "Los préstamos privados"], answer: 1, why: "Las subvenciones y las becas son dinero gratis; los préstamos se devuelven con intereses." },
            { objective: "O4", q: "Un sitio web que termina en .com te ofrece llenar tu FAFSA a cambio de un pago. ¿Qué haces?", options: ["Pagas; te ahorra tiempo", "Le das tu FSA ID", "La llenas gratis en studentaid.gov o con la ayuda de un consejero", "No llenas la FAFSA"], answer: 2, why: "La FAFSA es gratis en studentaid.gov; nunca pagues por llenarla ni compartas tu FSA ID." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Evitar trampas de deuda y estafas",
          minutes: 5,
          goal: "Comparar ofertas de ayuda y reconocer las señales de alerta de trampas de deuda y estafas.",
          text: [
            "Las deudas no siempre son malas, pero demasiadas te pueden seguir por años. Pide prestado solo lo que necesitas después de las subvenciones y las becas. La Consumer Financial Protection Bureau (oficina federal de protección financiera del consumidor) dice que uses préstamos federales para estudiantes antes que los privados, porque los federales normalmente tienen más protecciones.",
            "Cuando recibas ofertas de ayuda, revisa cada línea: ¿es una subvención, una beca, work-study o un préstamo? Algunas ofertas lo mezclan todo para que los préstamos parezcan dinero gratis. Compara lo que te queda por pagar en cada escuela, no solo el tamaño de la oferta.",
            "Señales de estafa, según la Federal Trade Commission (FTC, la comisión federal que protege a los consumidores): una beca garantizada; un cobro para solicitar o para reservar una beca; que te pidan el número de tu cuenta de banco o de tu tarjeta; que te digan que ganaste un concurso en el que nunca participaste, y que te presionen para pagar ya. Las becas de verdad no te cobran por solicitarlas.",
            "Ten cuidado con las escuelas que te presionan para inscribirte y pedir préstamos rápido, que prometen trabajos que no pueden demostrar o que no te dicen sus cifras de graduación y empleo. Si te estafan, denúncialo en ReportFraud.ftc.gov."
          ],
          steps: ["Separa cada oferta de ayuda en subvenciones, becas, work-study y préstamos.", "Calcula lo que te queda por pagar en cada escuela.", "Usa préstamos federales antes que privados, y pide prestado solo lo que necesitas.", "Revisa cada oferta de beca contra las señales de estafa.", "Denuncia las estafas en ReportFraud.ftc.gov."],
          words: [["Intereses", "el dinero extra que pagas por pedir prestado."], ["Préstamo federal para estudiantes", "un préstamo del gobierno de Estados Unidos con protecciones fijas."], ["Préstamo privado", "un préstamo de un banco o una empresa, muchas veces con menos protecciones."], ["Trampa de deuda", "una deuda que crece más rápido de lo que puedes pagarla."]],
          slides: [
            { title: "Pide prestado con cuidado", bullets: ["Solo lo que necesitas después del dinero gratis", "Préstamos federales antes que privados"] },
            { title: "Lee cada oferta de ayuda", bullets: ["¿Subvención, beca, work-study o préstamo?", "Los préstamos pueden parecer dinero gratis", "Compara lo que te queda por pagar"] },
            { title: "Señales de estafa", bullets: ["Beca garantizada o cobro por solicitar", "Te piden el número de tu banco o tarjeta", "Ganaste un concurso en el que no participaste; paga ya"] },
            { title: "Escuelas que presionan", bullets: ["Firma y pide prestado rápido", "Promesas de trabajo que no pueden demostrar", "Denuncia estafas en ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau: Préstamos para estudiantes", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC: Cómo evitar estafas de becas y ayuda financiera", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Mira esta oferta de ejemplo: subvención de $3,000, beca de $2,000, work-study de $2,500 y préstamo de $5,500, para una escuela que cuesta $14,000 al año. Escribe cuánto es dinero gratis, cuánto tienes que ganar trabajando o devolver, y cuánto te queda por pagar. (Gratis: $5,000. Ganado trabajando: $2,500. Préstamo: $5,500. Queda por pagar: $1,000.)",
          youCanNow: "leer una oferta de ayuda línea por línea, pedir prestado con cuidado y reconocer estafas de ayuda financiera y escuelas que presionan.",
          quickCheck: [
            { objective: "O5", q: "¿Por qué leer cada línea de una oferta de ayuda?", options: ["Algunas ofertas mezclan préstamos para que parezcan dinero gratis", "Las ofertas de ayuda siempre son solo subvenciones", "Para encontrar la mascota de la escuela", "Las líneas no importan"], answer: 0, why: "Separar subvenciones, becas, work-study y préstamos muestra lo que de verdad vas a pagar." },
            { objective: "O5", q: "Un correo dice que ganaste una beca que nunca solicitaste y te pide tu número de cuenta bancaria. ¿Qué es?", options: ["Un premio real", "Una señal de alerta de estafa; no des tu número de cuenta", "Un formulario normal del banco", "Un paso de la FAFSA"], answer: 1, why: "Los concursos en los que nunca participaste y los pedidos de números de cuenta bancaria son señales de estafa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Hacer tu plan de dos años",
          minutes: 6,
          goal: "Escribir un plan de dos años con un camino principal, uno de respaldo, el dinero y metas intermedias.",
          text: [
            "Un plan convierte tu decisión en pasos. Dos años es suficiente tiempo para avanzar de verdad y lo bastante corto para verlo con claridad.",
            "Elige un camino principal y uno de respaldo. Por ejemplo: camino principal, un programa de aprendiz de electricista; respaldo, un certificado de un año en un colegio comunitario mientras trabajas. El respaldo te mantiene avanzando si el camino principal se retrasa.",
            "Divide los dos años en pasos de seis meses, con una o dos metas intermedias cada uno: presentar una solicitud, hacer un examen, terminar una clase, ahorrar cierta cantidad, conseguir tu primer trabajo en ese campo. Escribe cómo vas a pagar cada paso y quién te va a ayudar, como un consejero, tu mamá o tu papá, un entrenador, un mentor o un jefe.",
            "Mira tu plan cada pocos meses. Los planes cambian, y eso está bien. Actualizarlo es parte de la habilidad."
          ],
          steps: ["Escribe tu camino principal y uno de respaldo.", "Copia tu comparación de cinco preguntas para los dos.", "Divide dos años en cuatro pasos de seis meses, cada uno con una o dos metas intermedias.", "Escribe cómo vas a pagar cada paso.", "Haz una lista de las personas que te van a ayudar.", "Pon una fecha para revisar el plan cada pocos meses."],
          words: [["Meta intermedia", "un paso claro que muestra avance, como terminar una clase."], ["Plan de respaldo", "un segundo camino que puedes usar si el primero se retrasa."]],
          slides: [
            { title: "Por qué dos años", bullets: ["Suficiente tiempo para avanzar de verdad", "Lo bastante corto para verlo con claridad"] },
            { title: "Camino principal y respaldo", bullets: ["Principal: el camino que más quieres", "Respaldo: te mantiene avanzando si hay retrasos"] },
            { title: "Pasos de seis meses", bullets: ["Una o dos metas intermedias cada uno", "Cómo lo vas a pagar", "Quién te va a ayudar"] },
            { title: "Mantenlo vivo", bullets: ["Revísalo cada pocos meses", "Cámbialo cuando cambie tu vida"] }
          ],
          tryIt: "Tarea final: escribe tu plan de dos años de una página con un camino principal y uno de respaldo, tu comparación de cinco preguntas de por lo menos dos caminos, cómo lo vas a pagar, tus metas intermedias de cada seis meses y las personas que te van a ayudar. Muéstraselo a un consejero o a un adulto de confianza.",
          youCanNow: "escribir un plan de dos años con un camino principal, uno de respaldo, metas intermedias, una forma de pagar y personas que te ayuden, y actualizarlo cuando cambie tu vida.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una meta intermedia en un plan de dos años?", options: ["Un deseo cualquiera", "Tu camino de respaldo", "Una lista de personas", "Un paso claro con una fecha, como terminar una clase para junio"], answer: 3, why: "Las metas intermedias dividen el plan en pasos de seis meses que puedes revisar." },
            { objective: "O6", q: "Tu camino principal se retrasa seis meses. ¿Qué te ayuda a hacer un buen plan?", options: ["Rendirte", "Esperar sin hacer nada", "Pasar a tu camino de respaldo y seguir avanzando", "Empezar de nuevo sin plan"], answer: 2, why: "Un camino de respaldo te mantiene avanzando si el principal se retrasa." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Cómo pagarlo y hacer tu plan",
        questions: [
          { objective: "O4", q: "¿Qué tipo de ayuda tienes que devolver?", options: ["Una subvención", "Una beca", "El sueldo de work-study", "Un préstamo"], answer: 3, why: "Los préstamos se devuelven con intereses; las subvenciones y las becas no." },
          { objective: "O4", q: "¿Cuánto cuesta presentar la FAFSA en studentaid.gov?", options: ["Nada; es gratis", "$25", "$100", "Depende de tu escuela"], answer: 0, why: "La FAFSA es gratis; nunca le pagues a nadie para presentarla." },
          { objective: "O4", q: "Una empresa te ofrece llenar tu FAFSA si le das tu FSA ID. ¿Qué haces?", options: ["Se lo das", "Dices que no y le pides ayuda gratis a un consejero escolar", "Se lo mandas por mensaje", "Lo publicas en internet"], answer: 1, why: "Nunca compartas tu FSA ID; los consejeros ayudan gratis." },
          { objective: "O5", q: "¿Cuál es una señal de estafa de becas?", options: ["Una solicitud gratis", "Una pregunta de ensayo", "Un premio garantizado si pagas un cobro", "Una fecha límite"], answer: 2, why: "Las becas de verdad no cobran ni garantizan premios." },
          { objective: "O6", q: "¿Por qué un plan de dos años necesita un respaldo?", options: ["Para mantenerte avanzando si el camino principal se retrasa", "Porque lo exige la ley", "Para impresionar a tus amigos", "No lo necesita"], answer: 0, why: "Un respaldo te mantiene avanzando cuando los planes cambian." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Elegir entre la universidad, un oficio o trabajar después de la escuela",
    questions: [
      { objective: "O1", q: "¿Cuál es el camino correcto para todos después de la preparatoria?", options: ["Una universidad de cuatro años", "No hay un solo camino correcto; depende de ti", "El ejército", "Ponerte a trabajar enseguida"], answer: 1, why: "El mejor camino va con tus intereses, tus fortalezas y tus necesidades." },
      { objective: "O1", q: "Aprendes mejor haciendo cosas con las manos. ¿Qué camino podría irte bien?", options: ["Solo clases en línea", "Nada te va", "Un programa de aprendiz en un oficio", "Leer libros de texto todo el día"], answer: 2, why: "Los programas de aprendiz enseñan habilidades con trabajo práctico." },
      { objective: "O1", q: "¿Cómo debes usar un asistente de IA al elegir un camino?", options: ["Dejar que decida por ti", "Creer cada número que te da", "No usarlo nunca", "Usarlo para buscar ideas y luego revisar los datos con un consejero y en sitios oficiales"], answer: 3, why: "La IA puede sugerir ideas, pero los datos hay que revisarlos." },
      { objective: "O2", q: "Un título de asociado normalmente toma unos:", options: ["Dos años", "Seis meses", "Ocho años", "Una semana"], answer: 0, why: "Los títulos de asociado normalmente toman unos dos años." },
      { objective: "O2", q: "¿Qué es el precio neto?", options: ["El costo de una computadora portátil", "Lo que cuesta la universidad después de las subvenciones y becas", "El costo de una clase", "Un impuesto"], answer: 1, why: "El precio neto es el costo después de restar la ayuda gratis." },
      { objective: "O2", q: "¿Qué carreras normalmente necesitan una licenciatura?", options: ["Ninguna", "Solo los deportes", "Maestro e ingeniería", "Solo las ventas en tiendas"], answer: 2, why: "Para ser maestro o ingeniero normalmente necesitas una licenciatura." },
      { objective: "O2", q: "¿Cuál es una de las cinco preguntas para hacer sobre cada camino?", options: ["¿Mis amigos van ahí?", "¿El logo es bonito?", "¿Sale en la tele?", "¿Cuánto tiempo va a tomar?"], answer: 3, why: "El tiempo para terminar es una de las cinco preguntas para comparar." },
      { objective: "O3", q: "¿Dónde puedes buscar programas de aprendiz?", options: ["En el Apprenticeship Job Finder de apprenticeship.gov", "En una publicación cualquiera de redes sociales", "En un mensaje de un desconocido", "En ningún lado"], answer: 0, why: "Apprenticeship.gov tiene un buscador oficial." },
      { objective: "O3", q: "Antes de firmar con una escuela de oficios, pregunta:", options: ["De qué color es el edificio", "Cuántos estudiantes terminan y consiguen trabajo en ese campo", "Si tienen alberca", "Nada"], answer: 1, why: "Las cifras de quiénes terminan y consiguen trabajo muestran si la escuela cumple." },
      { objective: "O3", q: "El ASVAB es:", options: ["Un préstamo universitario", "Una escuela de oficios", "Un examen que ayuda a decidir para qué trabajos del ejército calificas", "Un formulario de impuestos"], answer: 2, why: "El ejército usa el ASVAB para emparejar a las personas con trabajos." },
      { objective: "O3", q: "Un paso inteligente si estás pensando en el ejército es:", options: ["Firmar el primer papel que veas", "No leer el contrato", "Hablar solo con un amigo", "Hablar con reclutadores de más de una rama y leer antes de firmar"], answer: 3, why: "Comparar ramas y leer con cuidado te protege." },
      { objective: "O3", q: "Ponerte a trabajar enseguida puede ser un buen camino cuando el empleador:", options: ["Ofrece capacitación y ayuda a pagar clases", "Nunca capacita a nadie", "Paga con tarjetas de regalo", "No tiene puestos para el futuro"], answer: 0, why: "La capacitación, los ascensos y la ayuda para estudiar convierten un trabajo en un camino real." },
      { objective: "O4", q: "¿Qué ayuda es un trabajo de medio tiempo que ayuda a pagar los estudios?", options: ["Subvención", "Work-study", "Préstamo", "Beca"], answer: 1, why: "El work-study te paga por un trabajo de medio tiempo." },
      { objective: "O4", q: "¿Dónde llenas la FAFSA?", options: ["fafsa-help.win", "Un sitio web de pago", "studentaid.gov", "La aplicación de tu banco"], answer: 2, why: "La FAFSA oficial y gratis está en studentaid.gov." },
      { objective: "O4", q: "¿Por qué presentar la FAFSA lo antes que puedas?", options: ["Los formularios tardíos reciben más dinero", "Solo está abierta un día", "No hay ninguna razón", "Algunas ayudas se acaban, y los estados y las universidades tienen fechas límite"], answer: 3, why: "Presentarla pronto te ayuda a recibir ayuda antes de que se acabe." },
      { objective: "O5", q: "¿Qué préstamos debes usar primero, normalmente?", options: ["Préstamos federales para estudiantes", "Préstamos privados", "Tarjetas de crédito", "Préstamos de día de pago"], answer: 0, why: "Los préstamos federales normalmente tienen más protecciones que los privados." },
      { objective: "O5", q: "Una oferta de ayuda muestra un préstamo de $5,500 junto con subvenciones. El préstamo es:", options: ["Dinero gratis", "Dinero que tienes que devolver", "Una beca", "Un regalo"], answer: 1, why: "Los préstamos se tienen que devolver aunque aparezcan junto a las subvenciones." },
      { objective: "O5", q: "¿Dónde denuncias una estafa de ayuda financiera?", options: ["En la cafetería de la escuela", "En un comentario de redes sociales", "En ReportFraud.ftc.gov", "En ningún lado"], answer: 2, why: "La FTC recibe las denuncias de estafas en ReportFraud.ftc.gov." },
      { objective: "O6", q: "¿Cuál es una buena meta intermedia en un plan de dos años?", options: ["Ser famoso", "Sentirme mejor algún día", "Hacerme rico", "Terminar la primera clase del certificado para junio"], answer: 3, why: "Una meta intermedia es un paso claro que se puede comprobar." },
      { objective: "O6", q: "¿Cada cuánto debes mirar tu plan?", options: ["Cada pocos meses", "Nunca", "Solo una vez", "Solo si fracasas"], answer: 0, why: "Revisarlo con regularidad te deja actualizar el plan cuando cambia tu vida." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      1,
      4,
      6,
      7,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      {
        name: "Camino principal y de respaldo",
        objective: "O1",
        notYet: "Solo hay un camino, o el camino no tiene relación con los intereses y necesidades de la persona.",
        meets: "Un camino principal y uno de respaldo que van con los intereses, las fortalezas y las necesidades de dinero de la persona.",
        exceeds: "Explica por qué el camino de respaldo igual la acerca a su meta."
      },
      {
        name: "Comparación con cinco preguntas",
        objective: "O2",
        notYet: "Se comparan menos de dos caminos, o se saltaron preguntas.",
        meets: "Al menos dos caminos comparados según el costo, el tiempo, ganar dinero mientras aprende, los empleos probables y lo que se necesita para entrar.",
        exceeds: "Usa el precio neto o el sueldo del programa de aprendiz de fuentes oficiales y anota de dónde salió cada respuesta."
      },
      {
        name: "Cómo pagar",
        objective: "O4",
        notYet: "No hay plan de dinero, o depende de préstamos desconocidos.",
        meets: "Dice cómo se pagará cada paso, incluidas la fecha y las fechas límite de la FAFSA si necesita ayuda.",
        exceeds: "Muestra primero las subvenciones y las becas, al final los préstamos, y la cantidad que queda por pagar."
      },
      {
        name: "A salvo de estafas",
        objective: "O5",
        notYet: "Planea pagar por ayuda con la FAFSA o por una beca garantizada.",
        meets: "Nada de ayuda pagada con la FAFSA, nada de FSA ID compartido y ninguna oferta con señales de estafa.",
        exceeds: "Nombra dónde denunciar una estafa y a quién pedir ayuda gratis."
      },
      {
        name: "Metas intermedias y quién ayuda",
        objective: "O6",
        notYet: "No hay pasos de seis meses o no se nombra a quién ayuda.",
        meets: "Cuatro pasos de seis meses con metas intermedias, las personas que van a ayudar y una fecha de revisión.",
        exceeds: "Se le mostró a un consejero o a un adulto de confianza, y se anotaron sus comentarios."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que llenan la FAFSA a tiempo o solicitan un programa de aprendiz u otro programa durante el año escolar",
      "Personas inscritas en la universidad, un programa de oficios, un programa de aprendiz, el ejército o un trabajo con capacitación seis meses después del curso",
      "Personas que dicen en la encuesta de seguimiento haber evitado una estafa de becas o de ayuda financiera"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora de la escuela o de la biblioteca con internet",
      "Sitios oficiales: studentaid.gov, apprenticeship.gov y las calculadoras de precio neto de las escuelas",
      "Papel o un documento para la tabla de comparación y el plan de dos años",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Trabaja junto con el consejero escolar e invítalo a revisar los planes.",
      "Pide que busquen en clase la fecha de apertura y las fechas límite de la FAFSA de este año, porque cambian cada año.",
      "Nunca pidas que compartan en grupo los ingresos de su familia, su FSA ID ni datos bancarios; practiquen con la oferta de ayuda de ejemplo del curso.",
      "Invita a personas de un colegio comunitario, un programa de aprendiz y un empleador local para que todos los caminos se presenten de forma justa.",
      "Califica el plan de dos años con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez."
    ]
  }
};

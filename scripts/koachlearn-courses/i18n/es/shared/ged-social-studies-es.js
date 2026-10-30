"use strict";

// Koach Learn course (Spanish translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations".

const GED_SUBJECTS = { name: "GED Testing Service: materias del examen (tiempo, tipos de preguntas, calculadora)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: examen de Estudios Sociales", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: puntajes", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: exámenes de muestra gratis (en inglés y en español)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, el examen oficial de práctica", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, otro examen de equivalencia de la escuela secundaria (sitio oficial)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Los poderes del gobierno de EE. UU.", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: La Constitución de los Estados Unidos (texto en inglés)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: La Carta de Derechos (texto en inglés)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-es",
  lang: "es",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Preparación para el examen GED: Estudios Sociales",
  skills: "Leer fuentes primarias y secundarias, Distinguir hechos de opiniones, Explicar cómo funciona el gobierno de EE. UU., Encontrar causas y efectos, Leer mapas, tablas y gráficas, Hacer un plan de estudio",
  outcome: "leer un texto de estudios sociales, un documento histórico, un mapa o una gráfica y responder preguntas como las del GED sobre ellos: la idea principal, el punto de vista, hecho u opinión, causa y efecto, cómo funciona el gobierno de EE. UU. y lo que muestran los datos.",
  about: [
    "Este curso es para personas adultas que se preparan para el examen de Estudios Sociales del GED: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, veteranos, jóvenes adultos, inmigrantes y cualquier persona que vuelve a estudiar. Ged.com dice que no es un examen de memoria. Mide cómo lees, razonas y usas gráficas sobre gobierno, historia y dinero.",
    "El curso te prepara para el examen. No te da la credencial del GED. El GED Testing Service (la organización que hace el examen GED) administra el examen, y tu estado pone las reglas para tomarlo. Algunos estados usan otro examen llamado HiSET. Revisa ged.com y la oficina de educación para adultos de tu estado para conocer las reglas, los costos y las fechas de examen actuales.",
    "Cada lección enseña una habilidad con ejemplos resueltos, una práctica de \"Pruébalo ahora\" con las respuestas explicadas y una comprobación rápida de dos preguntas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final.",
    "La tarea final es una hoja de análisis de fuentes que completas sobre un documento fundacional real de los National Archives (los Archivos Nacionales de EE. UU.), más tu propio plan de estudio del GED con fechas."
  ],
  finalTask: "Completa una hoja de análisis de fuentes de una página sobre el Preámbulo de la Constitución de EE. UU. (u otro documento fundacional de archives.gov): quién lo escribió y cuándo, si es fuente primaria o secundaria, la idea principal en una oración, el punto de vista, un hecho y una opinión o meta, una causa y un efecto relacionados con él, y con qué poder del gobierno se relaciona y por qué. Agrega tu plan de estudio del GED con fechas al final de la hoja.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que se preparan para el examen de Estudios Sociales del GED: quienes buscan trabajo, quienes regresan a casa después de estar en prisión, veteranos, jóvenes adultos que dejaron la escuela, inmigrantes (algunos también se preparan para la ciudadanía) y adultos que vuelven a estudiar después de muchos años.",
    startingPoint: "Pueden leer textos de todos los días y tablas sencillas. Muchos recuerdan poco de la historia o la educación cívica de EE. UU. que vieron en la escuela y creen que el examen consiste en memorizar fechas. Algunos todavía están aprendiendo inglés.",
    gap: "El examen pide leer fuentes, reconocer el punto de vista y la evidencia, explicar cómo funciona el gobierno y leer gráficas y mapas. Estas habilidades también ayudan a seguir las noticias, votar quien tenga derecho, entender sus derechos y tomar decisiones de dinero.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; los documentos antiguos se explican línea por línea",
      "Dispositivos: un teléfono, una computadora de la biblioteca, o papel y lápiz",
      "Tiempo: lecciones de 4 a 6 minutos que quepan entre el trabajo, las citas y la familia",
      "Los temas políticos se enseñan de forma neutral: cómo funcionan las cosas y cómo juzgar la evidencia, no qué lado tomar",
      "Las reglas del examen, los costos y qué examen usa cada estado (GED o HiSET) cambian; cada participante revisa ged.com y su estado"
    ],
    prerequisites: "Ninguno. El curso del GED de lenguaje y lectura ayuda a leer para encontrar la idea principal y a juzgar la evidencia."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando el sitio web oficial del GED", action: "nombrar las partes, los tipos de preguntas, el tiempo y las herramientas del examen de Estudios Sociales del GED y escribir un plan de estudio con fechas", standard: "con las tres áreas de habilidades nombradas y al menos una fecha de estudio cada semana hasta el examen" },
    { id: "O2", condition: "Con una fuente primaria o secundaria", action: "identificar la idea principal, el punto de vista del autor y qué afirmaciones son hechos y cuáles son opiniones", standard: "señalando las palabras que muestran cada respuesta" },
    { id: "O3", condition: "Con una situación corta de educación cívica", action: "explicar qué poder del gobierno actúa y cómo se aplican los controles y contrapesos o un derecho constitucional", standard: "acertando al menos 4 de 5" },
    { id: "O4", condition: "Con un hecho histórico o un argumento", action: "identificar una causa, un efecto y la evidencia que respalda una inferencia", standard: "nombrando la evidencia tomada de la fuente" },
    { id: "O5", condition: "Con un mapa, una tabla o una gráfica sobre historia, economía o geografía", action: "leer valores, describir una tendencia y elegir la conclusión que respaldan los datos", standard: "sin agregar datos que no se muestran" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Leer fuentes y cómo funciona el gobierno",
      lessons: [
        {
          title: "Cómo funciona el examen de Estudios Sociales del GED",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las partes y las herramientas del examen de Estudios Sociales del GED y escribir un plan de estudio con fechas.",
          text: [
            "El GED tiene cuatro exámenes: Matemáticas, Razonamiento a través de las Artes del Lenguaje, Ciencias y Estudios Sociales. Puedes tomarlos uno a la vez. El GED Testing Service hace el examen. Algunos estados usan otro examen de equivalencia de la escuela secundaria, el HiSET, así que revisa qué examen usa tu estado.",
            "En ged.com, el examen de Estudios Sociales aparece con 70 minutos y sin descanso. Cubre tres áreas de habilidades: leer para entender en estudios sociales, analizar hechos históricos y argumentos, y usar números y gráficas en estudios sociales. Las preguntas son de opción múltiple, completar el espacio en blanco, arrastrar y soltar, seleccionar un área y menú desplegable.",
            "Tienes una calculadora en pantalla y una hoja de referencia de la calculadora, y ged.com dice que puedes llevar tu propia calculadora TI-30XS a un centro de examen. Ged.com dice que no es un examen de memoria: usas la información que te dan para sacar conclusiones.",
            "Ged.com indica un puntaje para aprobar de 145 en cada materia. Los tiempos y las reglas pueden cambiar, así que revisa ged.com antes de reservar. Ged.com tiene exámenes de muestra gratis y un examen oficial de práctica, GED Ready."
          ],
          steps: ["Entra a ged.com y lee la página del examen de Estudios Sociales.", "Anota el tiempo, las tres áreas de habilidades y las herramientas que te dan.", "Toma el examen de muestra gratis de Estudios Sociales para ver cómo estás.", "Elige una semana objetivo para el examen.", "Escribe al menos una fecha de estudio cada semana, con la habilidad que vas a practicar."],
          words: [["GED", "un examen de equivalencia de la escuela secundaria; aprobar las cuatro materias da una credencial que muchos empleadores y universidades aceptan como un diploma."], ["HiSET", "otro examen de equivalencia de la escuela secundaria que usan algunos estados."], ["Educación cívica", "el estudio del gobierno y de los derechos y deberes de los ciudadanos."], ["Economía", "el estudio de cómo la gente produce, compra, vende y usa bienes y dinero."]],
          slides: [
            { title: "El examen de Estudios Sociales (revisa ged.com)", bullets: ["70 minutos, sin descanso", "Opción múltiple y otros tipos de preguntas", "Puntaje para aprobar indicado: 145"] },
            { title: "Tres áreas de habilidades", bullets: ["Leer para entender en estudios sociales", "Analizar hechos históricos y argumentos", "Usar números y gráficas"] },
            { title: "No es un examen de memoria", bullets: ["Usa la información que te dan", "Saca conclusiones a partir de ella", "Calculadora en pantalla y hoja de referencia"] },
            { title: "Haz un plan", bullets: ["Toma primero el examen de muestra gratis", "Elige una semana objetivo para el examen", "Estudia un poco, casi todos los días de la semana"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Abre ged.com y toma el examen de muestra gratis de Estudios Sociales (o lee la página de Estudios Sociales si no puedes tomarlo ahora). Escribe tu plan de estudio: tu semana objetivo para el examen y una fecha cada semana con la habilidad que vas a practicar: leer fuentes, gobierno, historia o gráficas. Guárdalo para la tarea final.",
          youCanNow: "nombrar las partes y las herramientas del examen de Estudios Sociales del GED y seguir un plan de estudio con fechas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué dice ged.com sobre el examen de Estudios Sociales?", options: ["Que es sobre todo memorizar fechas", "Que no es un examen de memoria", "Que no tiene gráficas", "Que es solo sobre otros países"], answer: 1, why: "Ged.com dice que no es un examen de memoria; razonas con la información que te dan." },
            { objective: "O1", q: "¿Cuál es una de las tres áreas de habilidades del examen?", options: ["Deletrear las capitales de los estados", "Dibujar banderas", "Usar números y gráficas en estudios sociales", "Velocidad al escribir en el teclado"], answer: 2, why: "Ged.com indica leer para entender, hechos históricos y argumentos, y números y gráficas." }
          ]
        },
        {
          title: "Fuentes, punto de vista, hecho y opinión",
          objectives: ["O2"],
          minutes: 6,
          goal: "Identificar la idea principal, el punto de vista, los hechos y las opiniones en una fuente.",
          text: [
            "Una fuente primaria la hizo alguien que estuvo ahí en ese momento: una carta, un discurso, una ley, una foto, un diario. Una fuente secundaria la hizo después alguien que estudia el hecho, como un libro de texto o un análisis de noticias. Las dos son útiles; las fuentes primarias muestran cómo veía las cosas la gente en ese momento.",
            "El punto de vista es cómo ve el autor el tema, según quién es y lo que quiere. Pregunta: ¿quién escribió esto, cuándo y por qué? El dueño de una fábrica y un obrero de esa fábrica en 1900 podrían describir la misma huelga de formas muy diferentes.",
            "Un hecho se puede comprobar como verdadero o falso: \"La Enmienda 19 se ratificó en 1920\". Una opinión es una creencia o un sentimiento: \"Fue el cambio más importante de nuestra historia\". Palabras como mejor, peor, debería, importante y yo creo suelen indicar una opinión.",
            "Ejemplo resuelto. Un anuncio de periódico de 1910: \"Nuestras máquinas nuevas hacen 500 camisas al día. ¡Toda familia moderna debería comprar nuestras camisas!\". Hecho: 500 camisas al día (se puede comprobar). Opinión: toda familia debería comprarlas. Punto de vista: un negocio que vende su producto."
          ],
          steps: ["Pregunta quién hizo la fuente, cuándo y por qué.", "Decide: primaria (hecha en ese momento) o secundaria (hecha después).", "Di la idea principal en una oración.", "Marca cada afirmación como hecho (se puede comprobar) u opinión (creencia o juicio).", "Describe el punto de vista del autor y qué quiere que el lector haga o piense."],
          words: [["Fuente primaria", "algo hecho en el momento de un suceso por alguien que estuvo ahí."], ["Fuente secundaria", "algo hecho después por alguien que estudia el suceso."], ["Punto de vista", "cómo ve un autor un tema, según quién es y lo que quiere."], ["Hecho", "una afirmación que se puede comprobar y demostrar."], ["Opinión", "una creencia, un sentimiento o un juicio."]],
          slides: [
            { title: "¿Primaria o secundaria?", bullets: ["Primaria: hecha en ese momento, por alguien que estuvo ahí", "Secundaria: hecha después, por alguien que la estudia"] },
            { title: "Punto de vista", bullets: ["¿Quién lo escribió?", "¿Cuándo?", "¿Por qué, y qué quiere?"] },
            { title: "¿Hecho u opinión?", bullets: ["Hecho: se puede comprobar", "Opinión: una creencia o un juicio", "Palabras señal: mejor, peor, debería, yo creo"] }
          ],
          tryIt: "Práctica: una carta de 1935 de un agricultor: \"Las tormentas de polvo enterraron nuestros campos tres veces esta primavera. El gobierno debería ayudar a agricultores como nosotros antes de que sea demasiado tarde\". 1) ¿Primaria o secundaria? 2) Un hecho. 3) Una opinión. 4) ¿Punto de vista? Respuestas: 1) Primaria: la escribió en ese momento alguien que estuvo ahí. 2) Las tormentas de polvo enterraron los campos tres veces esa primavera. 3) El gobierno debería ayudar a los agricultores. 4) Un agricultor en apuros que pide ayuda.",
          youCanNow: "distinguir fuentes primarias de secundarias, describir el punto de vista y separar hechos de opiniones.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es una fuente primaria sobre la Segunda Guerra Mundial?", options: ["Un capítulo de un libro de texto de 2020", "Un resumen en un sitio web escrito el año pasado", "Una película hecha en 2015", "Una carta que un soldado escribió a su casa en 1944"], answer: 3, why: "La hizo en ese momento alguien que estuvo ahí." },
            { objective: "O2", q: "¿Qué afirmación es una opinión?", options: ["El Congreso aprobó la ley en 1964.", "La ciudad tiene 40,000 habitantes.", "Fue la mejor ley que el Congreso ha aprobado.", "El puente se abrió en 1937."], answer: 2, why: "\"La mejor\" es un juicio que no se puede demostrar." }
          ]
        },
        {
          title: "Cómo funciona el gobierno de EE. UU.",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar qué poder del gobierno actúa en una situación y cómo se aplican los controles y contrapesos.",
          text: [
            "La Constitución de EE. UU. divide el gobierno federal en tres poderes para que ninguna persona ni grupo tenga demasiado poder. El poder legislativo es el Congreso (el Senado y la Cámara de Representantes); hace las leyes. El poder ejecutivo es el presidente, el vicepresidente y el gabinete; aplica las leyes. El poder judicial es la Corte Suprema y otros tribunales federales; interpretan las leyes y deciden si van en contra de la Constitución.",
            "Los controles y contrapesos permiten que cada poder limite a los otros. El presidente puede vetar un proyecto de ley aprobado por el Congreso. El Senado confirma o rechaza a las personas que nombra el presidente, como los jueces federales. La Corte Suprema puede anular una ley que considera inconstitucional. El Congreso puede, en casos extremos, destituir a un presidente.",
            "La Carta de Derechos (Bill of Rights) son las primeras diez enmiendas a la Constitución. Protege derechos como la libertad de expresión, de religión, de prensa y de reunión (Primera Enmienda), y derechos de las personas acusadas de delitos, como un juicio justo y rápido. El poder también se reparte entre el gobierno federal y los estados; esto se llama federalismo.",
            "Ejemplo resuelto. \"El Congreso aprueba un proyecto de ley. El presidente lo veta\". ¿Qué control es este? El poder ejecutivo controla al poder legislativo."
          ],
          steps: ["Busca quién actúa: el Congreso, el presidente o un tribunal.", "Nombra el poder: legislativo, ejecutivo o judicial.", "Pregunta qué facultad se usa: hacer, aplicar o interpretar las leyes.", "Si un poder limita a otro, nombra el control.", "Si están en juego los derechos de una persona, busca el derecho en la Carta de Derechos."],
          words: [["Constitución", "la ley más alta de los Estados Unidos; organiza el gobierno."], ["Poder legislativo", "el Congreso; hace las leyes."], ["Poder ejecutivo", "el presidente, el vicepresidente y el gabinete; aplica las leyes."], ["Poder judicial", "los tribunales; interpretan las leyes."], ["Veto", "cuando el presidente rechaza un proyecto de ley aprobado por el Congreso."], ["Enmienda", "un cambio o una adición a la Constitución."]],
          slides: [
            { title: "Tres poderes", bullets: ["Legislativo (Congreso): hace las leyes", "Ejecutivo (presidente): aplica las leyes", "Judicial (tribunales): interpreta las leyes"] },
            { title: "Controles y contrapesos", bullets: ["El presidente puede vetar proyectos de ley", "El Senado confirma o rechaza a los nombrados", "La Corte Suprema puede anular leyes inconstitucionales"] },
            { title: "La Carta de Derechos", bullets: ["Las primeras diez enmiendas", "Expresión, religión, prensa, reunión", "Derechos de las personas acusadas de delitos"] },
            { title: "Federalismo", bullets: ["El poder se reparte entre la nación y los estados"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Práctica: nombra el poder o el derecho. 1) El Senado vota sobre la persona que eligió el presidente para juez federal. 2) La Corte Suprema decide que una ley viola la Constitución. 3) Un periódico publica una nota que critica al alcalde. 4) El presidente firma un proyecto de ley y se vuelve ley. Respuestas: 1) El legislativo controla al ejecutivo. 2) El judicial controla al legislativo. 3) Libertad de prensa, Primera Enmienda. 4) Ejecutivo (cumple su papel en la creación de una ley).",
          youCanNow: "nombrar los tres poderes, explicar los controles y contrapesos en una situación y relacionar una situación con la Carta de Derechos.",
          quickCheck: [
            { objective: "O3", q: "¿Qué poder hace las leyes federales?", options: ["El poder legislativo (el Congreso)", "El poder judicial", "El poder ejecutivo", "Solo los estados"], answer: 0, why: "El Congreso, el poder legislativo, hace las leyes." },
            { objective: "O3", q: "La Corte Suprema declara inconstitucional una ley. ¿De qué es ejemplo esto?", options: ["Del federalismo", "De un veto", "De un control del poder judicial sobre el poder legislativo", "De una enmienda"], answer: 2, why: "Los tribunales pueden anular las leyes que van en contra de la Constitución." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Leer fuentes y cómo funciona el gobierno",
        questions: [
          { objective: "O1", q: "¿Dónde debes revisar los tiempos, los costos y las reglas actuales del examen GED?", options: ["En una publicación de redes sociales", "En ged.com y en la oficina de educación para adultos de tu estado", "En un libro de texto viejo", "En lo que recuerda un amigo"], answer: 1, why: "Las reglas y los costos cambian; las fuentes oficiales tienen la información actual." },
          { objective: "O2", q: "¿Cuál es una fuente secundaria?", options: ["Un discurso dado en 1963", "Una foto tomada durante una tormenta de polvo de los años 30", "Una carta de 1776", "Un libro de texto de historia escrito en 2015"], answer: 3, why: "Un libro de texto lo hacen después personas que estudian los hechos." },
          { objective: "O2", q: "Un anuncio de 1912 de una compañía dice que sus trenes son \"los mejores del país\". ¿Qué es esto?", options: ["Una opinión desde el punto de vista de un negocio", "Un hecho", "Una ley", "Una fuente secundaria"], answer: 0, why: "\"Los mejores\" es un juicio, y la compañía quiere vender boletos." },
          { objective: "O3", q: "El presidente veta un proyecto de ley. ¿Qué poder está siendo controlado?", options: ["El poder judicial", "El poder ejecutivo", "El poder legislativo", "Los estados"], answer: 2, why: "Con el veto, el ejecutivo controla al Congreso, el poder legislativo." },
          { objective: "O3", q: "¿Qué es la Carta de Derechos?", options: ["El presupuesto del presidente", "Las primeras diez enmiendas a la Constitución", "Una lista de leyes estatales", "Una decisión de la Corte Suprema"], answer: 1, why: "La Carta de Derechos son las primeras diez enmiendas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Historia, economía y gráficas",
      lessons: [
        {
          title: "Causa, efecto y evidencia en la historia",
          objectives: ["O4"],
          minutes: 5,
          goal: "Identificar una causa y un efecto en un hecho histórico y la evidencia que respalda una inferencia.",
          text: [
            "Las preguntas de historia muchas veces preguntan por qué pasó algo (la causa) y qué pasó debido a eso (el efecto). Palabras señal: porque, así que, como resultado, llevó a, por lo tanto, debido a.",
            "Ejemplo resuelto. \"A finales del siglo XIX, las fábricas de las ciudades ofrecían muchos empleos nuevos. Como resultado, millones de personas se mudaron del campo a las ciudades. La población de las ciudades creció rápido, y la vivienda abarrotada se volvió un problema\". Causa: empleos en las fábricas de las ciudades. Efecto: la gente se mudó a las ciudades. Un efecto posterior: vivienda abarrotada. Una causa puede llevar a una cadena de efectos.",
            "Una inferencia es una conclusión que la evidencia respalda. Las preguntas del GED pueden pedir qué afirmación de una fuente respalda una inferencia. Elige la afirmación que da una prueba, no solo una que trata del mismo tema.",
            "Cuidado: que dos cosas pasen al mismo tiempo no siempre significa que una causó la otra. Busca que la fuente diga o muestre la relación."
          ],
          steps: ["Busca el hecho sobre el que pregunta la pregunta.", "Busca palabras señal: porque, así que, como resultado, llevó a.", "Nombra la causa (por qué) y el efecto (qué pasó después).", "Para una inferencia, elige la afirmación que da una prueba de ella.", "Revisa que la fuente de verdad relacione las dos cosas; no lo supongas."],
          words: [["Causa", "por qué pasó algo."], ["Efecto", "lo que pasó debido a la causa."], ["Inferencia", "una conclusión respaldada por evidencia."], ["Industrialización", "el crecimiento de las fábricas y de las máquinas que producen bienes."]],
          slides: [
            { title: "Causa y efecto", bullets: ["Causa: por qué pasó", "Efecto: qué pasó después", "Palabras señal: porque, como resultado, llevó a"] },
            { title: "Una cadena de efectos", bullets: ["Empleos en las fábricas de las ciudades", "La gente se mudó del campo a las ciudades", "Vivienda abarrotada en las ciudades"] },
            { title: "Evidencia para una inferencia", bullets: ["Elige la afirmación que lo demuestra", "Mismo tema no es lo mismo que prueba", "Al mismo tiempo no significa que lo causó"] }
          ],
          tryIt: "Práctica: \"El Dust Bowl (las grandes tormentas de polvo) de los años 30 destruyó las cosechas en las Grandes Llanuras. Muchas familias de agricultores perdieron su tierra y se mudaron al oeste a buscar trabajo\". 1) ¿Causa? 2) ¿Efecto? 3) ¿Qué afirmación respalda mejor la inferencia \"el Dust Bowl cambió el lugar donde vivía la gente\": (a) \"El Dust Bowl destruyó las cosechas\" o (b) \"Muchas familias de agricultores se mudaron al oeste\"? Respuestas: 1) Las tormentas de polvo destruyeron las cosechas. 2) Las familias perdieron su tierra y se mudaron al oeste. 3) (b): muestra que la gente se mudó.",
          youCanNow: "encontrar causas y efectos en la historia y elegir la evidencia que respalda una inferencia.",
          quickCheck: [
            { objective: "O4", q: "\"El precio de la gasolina subió mucho, así que más gente tomó el autobús\". ¿Cuál es el efecto?", options: ["El precio de la gasolina subió", "Más gente tomó el autobús", "Los autobuses se abarataron", "Los carros se hicieron más grandes"], answer: 1, why: "Tomar el autobús es lo que pasó porque subió el precio de la gasolina." },
            { objective: "O4", q: "¿Qué afirmación respalda mejor la inferencia de que una carretera nueva ayudó a los negocios de un pueblo?", options: ["\"La carretera tiene cuatro carriles\".", "\"La carretera se abrió en 1960\".", "\"Las carreteras se hacen de concreto\".", "\"Las ventas de las tiendas del pueblo se duplicaron en los cinco años después de que se abrió la carretera\"."], answer: 3, why: "Da evidencia de un crecimiento de los negocios relacionado con la carretera." }
          ]
        },
        {
          title: "Economía y gráficas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Leer una tabla o un mapa, describir la tendencia y elegir la conclusión que respaldan los datos.",
          text: [
            "La oferta es cuánto hay de algo a la venta. La demanda es cuánto quiere comprar la gente. Cuando la demanda sube y la oferta sigue igual, los precios suelen subir. Cuando la oferta sube y la demanda sigue igual, los precios suelen bajar. Ejemplo: después de que una helada arruina las cosechas de naranjas, la oferta de naranjas baja y los precios suben.",
            "Gráficas: lee primero el título, las etiquetas y las unidades. Tabla de práctica (inventada): la tasa de desempleo de una ciudad fue 8% en 2020, 6% en 2021, 5% en 2022 y 4% en 2023. Tendencia: baja cada año. Conclusión respaldada: en 2023, una parte menor de las personas que buscaban trabajo no tenía empleo que en 2020. No respaldada: por qué bajó, porque la tabla no lo dice.",
            "Mapas: lee el título, la leyenda (clave) y la rosa de los vientos. La leyenda te dice qué significan los colores o los símbolos. Un mapa de lluvias podría usar colores más oscuros para más lluvia. Usa la escala para calcular distancias.",
            "El cambio en porcentaje es común: de 8% a 4% es una baja de 4 puntos porcentuales. Puedes usar la calculadora en pantalla para las cuentas."
          ],
          steps: ["Lee el título, las etiquetas, las unidades o la leyenda del mapa.", "Busca el valor sobre el que pregunta la pregunta.", "Describe la tendencia: sube, baja o no hay un patrón claro.", "Elige la conclusión que se queda dentro de los datos.", "Para los precios, pregunta: ¿cambió la oferta o la demanda?"],
          words: [["Oferta", "cuánto hay de un bien o un servicio a la venta."], ["Demanda", "cuánto de eso quiere comprar la gente."], ["Tasa de desempleo", "la parte de las personas que buscan trabajo y no tienen empleo."], ["Leyenda", "la clave de un mapa o una tabla que dice qué significan los colores o los símbolos."], ["Punto porcentual", "la diferencia simple entre dos porcentajes; por ejemplo, de 8% a 4% son 4 puntos."]],
          slides: [
            { title: "Oferta y demanda", bullets: ["Demanda sube, oferta igual: los precios suelen subir", "Oferta sube, demanda igual: los precios suelen bajar"] },
            { title: "Leer una gráfica", bullets: ["Primero título, etiquetas y unidades", "Busca el valor", "Describe la tendencia"] },
            { title: "Leer un mapa", bullets: ["Título y leyenda (clave)", "Rosa de los vientos para la dirección", "Escala para la distancia"] },
            { title: "Quédate dentro de los datos", bullets: ["Una tabla muestra qué, no siempre por qué", "Nada de conclusiones sobre lo que no se muestra"] }
          ],
          tryIt: "Práctica (datos inventados): una gráfica de barras muestra la renta mensual promedio en una ciudad: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) ¿Renta en 2021? 2) ¿Tendencia? 3) ¿Cuánto subió la renta de 2019 a 2023? 4) ¿Qué conclusión está respaldada: (a) la renta subió en este tiempo, o (b) la renta subió por los empleos nuevos? Respuestas: 1) $1,150. 2) Sube. 3) $400. 4) (a); la gráfica no muestra por qué.",
          youCanNow: "usar la oferta y la demanda para explicar cambios de precios, y leer tablas y mapas para elegir una conclusión respaldada.",
          quickCheck: [
            { objective: "O5", q: "Una tormenta destruye muchos aserraderos, así que hay menos madera a la venta mientras los constructores la siguen queriendo. ¿Qué suele pasar con el precio de la madera?", options: ["Sube", "Baja", "Se queda igual", "La madera se vuelve gratis"], answer: 0, why: "La oferta bajó mientras la demanda siguió igual, así que los precios suelen subir." },
            { objective: "O5", q: "En un mapa, ¿qué te dice lo que significa cada color?", options: ["La rosa de los vientos", "El título", "La leyenda (clave)", "La escala"], answer: 2, why: "La leyenda explica los colores y los símbolos." }
          ]
        },
        {
          title: "Todo junto: analizar un documento fundacional",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Completar una hoja de análisis de fuentes sobre un documento fundacional.",
          text: [
            "Las preguntas del GED muchas veces te dan un fragmento corto de un documento antiguo y preguntan por su idea principal, su propósito o cómo se relaciona con el gobierno de hoy. El Preámbulo, la oración inicial de la Constitución, es bueno para practicar. Léelo en el sitio web de los National Archives.",
            "El Preámbulo empieza con \"We the People of the United States\" (\"Nosotros, el Pueblo de los Estados Unidos\") y enumera metas: formar una unión más perfecta, establecer la justicia, asegurar la tranquilidad interior (la paz en casa), proveer para la defensa común, promover el bienestar general (el bienestar de todos) y asegurar los beneficios de la libertad.",
            "Análisis resuelto. Quién y cuándo: los delegados a la Convención Constitucional, 1787. Tipo: fuente primaria. Idea principal: el pueblo establece un gobierno para cumplir metas compartidas. Punto de vista: líderes que querían un gobierno nacional más fuerte que el que tenían antes. Causa y efecto: el gobierno anterior, bajo los Artículos de la Confederación, era débil, y eso llevó a escribir una nueva Constitución. Poderes: el Preámbulo presenta toda la Constitución, que organiza los tres poderes.",
            "Tu hoja no necesita respuestas perfectas. Necesita respuestas que puedas respaldar señalando las palabras del documento."
          ],
          steps: ["Abre el texto de la Constitución en archives.gov y lee el Preámbulo.", "Escribe quién lo escribió, cuándo, y si es fuente primaria o secundaria.", "Escribe la idea principal en una oración y el punto de vista.", "Escribe un hecho sobre él y una meta u opinión que aparece en él.", "Escribe una causa y un efecto, y el poder o el derecho con el que se relaciona.", "Agrega tu plan de estudio con fechas al final de la hoja."],
          words: [["Preámbulo", "la oración inicial de la Constitución que dice su propósito."], ["Artículos de la Confederación", "el primer plan de gobierno de EE. UU., usado antes de la Constitución."], ["Tranquilidad interior", "la paz en casa."], ["Bienestar general", "el bienestar de todo el pueblo."]],
          slides: [
            { title: "El Preámbulo", bullets: ["Oración inicial de la Constitución", "Empieza con \"We the People\" (Nosotros, el Pueblo)", "Enumera las metas del nuevo gobierno"] },
            { title: "Tu hoja de análisis", bullets: ["Quién, cuándo, primaria o secundaria", "Idea principal y punto de vista", "Un hecho y una meta u opinión"] },
            { title: "Relaciónalo", bullets: ["Una causa y un efecto", "El poder o el derecho con el que se relaciona", "Señala las palabras que lo demuestran"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Tarea final: completa tu hoja de análisis de fuentes de una página sobre el Preámbulo (o la Carta de Derechos) de archives.gov, siguiendo los pasos de arriba. Agrega tu plan de estudio del GED con fechas al final y luego califica tu trabajo con la rúbrica del curso.",
          youCanNow: "analizar un documento fundacional: su tipo de fuente, su idea principal, su punto de vista, sus causas y efectos, y su relación con cómo funciona el gobierno.",
          quickCheck: [
            { objective: "O2", q: "El Preámbulo lo escribieron en 1787 los delegados a la Convención Constitucional. ¿Qué tipo de fuente es?", options: ["Secundaria", "Una encuesta de opinión", "Un mapa", "Primaria"], answer: 3, why: "Lo hicieron en ese momento las personas que escribieron la Constitución." },
            { objective: "O4", q: "Los Artículos de la Confederación crearon un gobierno nacional débil. ¿Cuál fue un efecto?", options: ["Los líderes escribieron una nueva Constitución", "Se eliminó la Carta de Derechos", "El Congreso se cerró para siempre", "Los estados dejaron de existir"], answer: 0, why: "La debilidad de los Artículos llevó a la Constitución de 1787." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Historia, economía y gráficas",
        questions: [
          { objective: "O4", q: "\"Como la fábrica cerró, muchos trabajadores se fueron\". ¿Cuál es la causa?", options: ["Los trabajadores se fueron", "El pueblo creció", "La fábrica cerró", "Abrieron tiendas nuevas"], answer: 2, why: "El cierre de la fábrica es la razón por la que se fueron los trabajadores." },
          { objective: "O4", q: "Dos cosas pasaron el mismo año. ¿Qué puedes decir con seguridad?", options: ["Una causó la otra", "Pasaron al mismo tiempo; revisa la fuente para ver si hay una relación", "Las dos son opiniones", "Ninguna pasó"], answer: 1, why: "Pasar al mismo tiempo no demuestra que una causó la otra." },
          { objective: "O5", q: "La demanda de bicicletas sube y la oferta sigue igual. ¿Qué suele pasar con el precio de las bicicletas?", options: ["Baja", "Se queda igual", "Las bicicletas se vuelven gratis", "Sube"], answer: 3, why: "Más compradores para la misma oferta suelen hacer subir los precios." },
          { objective: "O5", q: "Una tabla muestra la población de un pueblo: 2000: 10,000; 2010: 12,000; 2020: 15,000. ¿Qué conclusión está respaldada?", options: ["La población creció en estos años", "El pueblo tendrá 50,000 habitantes en 2030", "La gente llegó por las buenas escuelas", "El pueblo perdió habitantes"], answer: 0, why: "Los números suben cada década; la tabla no muestra el futuro ni las razones." },
          { objective: "O3", q: "El Senado rechaza a una persona que el presidente eligió para ser juez federal. ¿Qué control es este?", options: ["El poder judicial controla al ejecutivo", "El poder legislativo controla al ejecutivo", "El federalismo", "Un veto"], answer: 1, why: "El Senado, que es parte del Congreso, confirma o rechaza a las personas que nombra el presidente." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para el examen GED: Estudios Sociales",
    questions: [
      { objective: "O1", q: "¿Qué hace este curso por ti?", options: ["Te da una credencial del GED", "Te hace ciudadano de EE. UU.", "Te prepara para el examen de Estudios Sociales del GED", "Reemplaza el examen GED"], answer: 2, why: "Te prepara; el GED Testing Service administra el examen y tu estado otorga la credencial." },
      { objective: "O1", q: "¿Cuál es otro examen de equivalencia de la escuela secundaria que usan algunos estados?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "El HiSET es otro examen de equivalencia de la escuela secundaria." },
      { objective: "O1", q: "Según ged.com, el examen de Estudios Sociales:", options: ["Es solo memorizar fechas", "Es solo de ensayo", "No es un examen de memoria", "Es una entrevista oral"], answer: 2, why: "Ged.com dice que no es un examen de memoria." },
      { objective: "O2", q: "¿Qué es una fuente primaria?", options: ["Un libro de texto escrito el año pasado", "Algo hecho en ese momento por alguien que estuvo ahí", "Un resumen en un sitio web", "Los apuntes de un maestro"], answer: 1, why: "Las fuentes primarias vienen de personas que vivieron el momento del suceso." },
      { objective: "O2", q: "¿Cuál es un hecho?", options: ["La Ley de Derechos Civiles se firmó en 1964.", "Fue la mejor ley jamás escrita.", "Todo el mundo debería quererla.", "Fue el día más emocionante de la historia."], answer: 0, why: "Una fecha de firma se puede comprobar; las otras son juicios." },
      { objective: "O2", q: "Para encontrar el punto de vista de un autor, pregunta:", options: ["Qué tan larga es la fuente", "De qué color es el papel", "Cuántas páginas tiene", "Quién la escribió, cuándo y por qué"], answer: 3, why: "Quién, cuándo y por qué determinan cómo ve un autor un tema." },
      { objective: "O2", q: "¿Qué palabra suele indicar una opinión?", options: ["Ratificó", "Debería", "1920", "Congreso"], answer: 1, why: "\"Debería\" dice lo que alguien cree que tendría que pasar." },
      { objective: "O3", q: "¿Qué poder aplica las leyes?", options: ["El legislativo", "El judicial", "El ejecutivo", "Ninguno"], answer: 2, why: "El presidente y el poder ejecutivo aplican las leyes." },
      { objective: "O3", q: "El Congreso está formado por:", options: ["El Senado y la Cámara de Representantes", "El presidente y el gabinete", "La Corte Suprema", "Los gobernadores"], answer: 0, why: "El Congreso tiene dos partes: el Senado y la Cámara." },
      { objective: "O3", q: "Un grupo hace una protesta pacífica en un parque. ¿Qué derecho la protege?", options: ["El derecho a un juicio rápido", "El derecho a votar a los 18 años", "El veto del presidente", "La libertad de reunión (Primera Enmienda)"], answer: 3, why: "La Primera Enmienda protege la reunión pacífica." },
      { objective: "O3", q: "El poder repartido entre el gobierno nacional y los estados se llama:", options: ["Veto", "Federalismo", "Preámbulo", "Opinión"], answer: 1, why: "El federalismo divide el poder entre la nación y los estados." },
      { objective: "O4", q: "¿Qué palabra señal muestra causa y efecto?", options: ["Como resultado", "También", "Por ejemplo", "Además"], answer: 0, why: "\"Como resultado\" introduce un efecto." },
      { objective: "O4", q: "\"Los empleos en las fábricas crecieron en las ciudades, así que la gente se fue del campo\". ¿Cuál es la causa?", options: ["La gente se fue del campo", "Las granjas crecieron", "Los empleos en las fábricas crecieron en las ciudades", "Las ciudades se hicieron más pequeñas"], answer: 2, why: "Los empleos en las fábricas son la razón por la que la gente se mudó." },
      { objective: "O4", q: "¿Qué afirmación respalda mejor la inferencia de que una ley nueva redujo los accidentes de trabajo?", options: ["\"La ley tenía 20 páginas\".", "\"Los reportes de lesiones bajaron una tercera parte en los tres años después de que empezó la ley\".", "\"Mucha gente habló de la ley\".", "\"La ley tenía un nombre largo\"."], answer: 1, why: "Da evidencia de menos lesiones después de la ley." },
      { objective: "O5", q: "Una helada arruina gran parte de la cosecha de naranjas. ¿Qué suele pasar con el precio de las naranjas?", options: ["Baja", "Se queda igual", "Las naranjas se vuelven gratis", "Sube"], answer: 3, why: "Menos oferta con la misma demanda suele hacer subir los precios." },
      { objective: "O5", q: "¿Qué debes leer primero en una tabla o gráfica?", options: ["El título, las etiquetas y las unidades", "Solo las opciones de respuesta", "El número más pequeño", "Solo los colores"], answer: 0, why: "Te dicen qué significan los números." },
      { objective: "O5", q: "El desempleo fue 8% en 2020 y 4% en 2023. ¿Cuánto bajó?", options: ["2 puntos porcentuales", "12 puntos porcentuales", "4 puntos porcentuales", "8 puntos porcentuales"], answer: 2, why: "8% - 4% = 4 puntos porcentuales." },
      { objective: "O5", q: "Una gráfica muestra que la renta sube cada año. ¿Qué conclusión va más allá de los datos?", options: ["La renta subió en estos años", "La renta se duplicará el próximo año", "La renta era más alta al final que al principio", "La gráfica muestra varios años"], answer: 1, why: "La gráfica no muestra el próximo año." },
      { objective: "O2", q: "El Preámbulo empieza con \"We the People\" (Nosotros, el Pueblo). ¿Qué muestra esto sobre el punto de vista del gobierno?", options: ["El poder viene del pueblo", "El poder viene de un rey", "Solo los estados tienen poder", "Lo escribieron los tribunales"], answer: 0, why: "\"Nosotros, el Pueblo\" muestra que el gobierno lo establece el pueblo y es para el pueblo." },
      { objective: "O4", q: "¿Por qué los líderes escribieron la Constitución en 1787?", options: ["El país no tenía estados", "El rey se lo pidió", "La Carta de Derechos había fracasado", "El gobierno bajo los Artículos de la Confederación era demasiado débil"], answer: 3, why: "Los débiles Artículos de la Confederación llevaron a un nuevo plan de gobierno." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, vuelve a leer esa parte del documento y corrige tu respuesta.",
    criteria: [
      { name: "Fuente y punto de vista", objective: "O2", notYet: "El tipo de fuente o el autor está mal o falta.", meets: "Autor, fecha y tipo de fuente correctos, y un punto de vista que corresponde a quién lo escribió y por qué.", exceeds: "También explica cómo el punto de vista influye en lo que dice el documento." },
      { name: "Idea principal, hecho y opinión", objective: "O2", notYet: "La idea principal está mal, o se confunden el hecho y la opinión.", meets: "Una idea principal correcta en una oración, un hecho y una meta u opinión, cada uno relacionado con las palabras.", exceeds: "Cita las palabras exactas que muestran cada respuesta." },
      { name: "Causa y efecto", objective: "O4", notYet: "No hay causa ni efecto, o están al revés.", meets: "Una causa correcta y un efecto correcto relacionados con el documento.", exceeds: "Muestra una cadena: una causa, un efecto y un efecto posterior." },
      { name: "Relación con el gobierno", objective: "O3", notYet: "No se nombra ningún poder ni derecho, o se nombra el equivocado.", meets: "Nombra el poder o el derecho con el que se relaciona y explica por qué en una oración.", exceeds: "También da un ejemplo de controles y contrapesos o de un derecho que se usa hoy." },
      { name: "Lectura de datos", objective: "O5", notYet: "No completó la práctica de gráficas de la Lección 5.", meets: "Completó la práctica de gráficas de la Lección 5 con una conclusión que se queda dentro de los datos.", exceeds: "También explica un cambio de precio con la oferta y la demanda." },
      { name: "Plan de estudio", objective: "O1", notYet: "No hay plan de estudio, o no tiene fechas.", meets: "Un plan de estudio con al menos una fecha cada semana hasta la semana objetivo del examen.", exceeds: "También incluye una fecha para el GED Ready o una fecha de examen reservada." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y sacan Cumple o más en todas las filas de la rúbrica",
      "Participantes que toman el GED Ready o un examen de muestra gratis de ged.com en un plazo de 30 días",
      "Participantes que reservan o aprueban el examen de Estudios Sociales del GED en un plazo de 90 días (según lo que ellos informan)",
      "Los programas aliados informan que más participantes terminan las cuatro materias del GED y pasan a una capacitación laboral o a la universidad"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono, una tableta o una computadora con internet, o las lecciones impresas",
      "Papel y lápiz para las respuestas de práctica y la hoja de análisis de fuentes",
      "Una copia impresa o en pantalla del Preámbulo y de la Carta de Derechos de archives.gov",
      "Exámenes de muestra gratis de ged.com; el GED Ready si el participante decide comprarlo",
      "Unos 90 minutos para las lecciones y las comprobaciones, más unos 45 minutos para la tarea final"
    ],
    facilitatorNotes: [
      "Empiecen con la prueba inicial y el examen de muestra gratis de Estudios Sociales de ged.com para ver qué área de habilidades necesita más cada participante.",
      "Lean el Preámbulo en voz alta juntos y pongan cada meta en palabras de todos los días antes de que los participantes escriban sus hojas.",
      "Mantengan neutrales los temas políticos: enseñen cómo funciona el gobierno y cómo juzgar la evidencia, no qué lado tomar.",
      "Usen tablas reales y locales (por ejemplo, datos de empleo o de renta del condado) para practicar más con gráficas, y revisen los números en la fuente oficial.",
      "Revisen qué examen usa su estado (GED o HiSET) y compartan los centros de examen locales y cualquier ayuda con los costos."
    ]
  }
};

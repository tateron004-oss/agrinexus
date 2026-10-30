"use strict";

// Koach Learn course (Spanish translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// CDL class and endorsement letters, 49 CFR rule numbers and FMCSA names are kept as written.

const CFR_CLASSES = { name: "49 CFR 383.91: Grupos de vehículos motorizados comerciales (copia de la regla federal en Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Códigos de endosos en la CDL y el CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Permiso de aprendiz comercial (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Quién debe completar la capacitación para conductores principiantes", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "Training Provider Registry de la FMCSA (registro de proveedores de ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (las páginas federales oficiales sobre la CDL)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Requisitos del conductor (edad, inglés, examen médico)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: Cuándo deben hacerse el examen médico los conductores", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: Qué cubre el examen de habilidades de la CDL", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Inspección del conductor antes de manejar", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Reglas de horas de servicio", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Exención del examen de habilidades para conductores militares", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "Oficina de Estadísticas Laborales de EE. UU. (BLS): Conductores de camiones pesados y de tractocamiones", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-es",
  lang: "es",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Preparación para la licencia de conducir comercial (CDL)",
  skills: "Elegir la clase de CDL y los endosos correctos, Planear los pasos del permiso a la licencia, Estudiar el manual estatal de la CDL, Hacer una inspección previa al viaje, Tomar decisiones seguras al manejar",
  outcome: "elegir la clase de CDL y los endosos que pide el trabajo que quieres, enumerar cada paso desde el permiso de aprendiz hasta la licencia, estudiar para los exámenes de conocimientos del estado con el manual oficial, explicar en voz alta una inspección previa al viaje y convertir todo en un plan de estudio y de exámenes de la CDL con fechas.",
  about: [
    "Este curso es para cualquier persona que quiera un trabajo manejando un camión o un autobús: quienes buscan empleo, veteranos, jóvenes adultos, personas que regresan a casa después de estar en prisión y adultos que cambian de carrera. No necesitas más experiencia que una licencia de conducir normal.",
    "Vas a aprender qué licencia de conducir comercial (CDL) necesitas, los pasos para obtenerla, cómo estudiar para los exámenes escritos, cómo hacer la inspección previa al viaje con la que empieza el examen de manejo y los hábitos de manejo seguro que buscan los examinadores.",
    "Este curso te prepara. No te da una licencia ni un permiso. Las reglas federales vienen de la FMCSA (Federal Motor Carrier Safety Administration, la agencia federal de seguridad de autotransportes de EE. UU.), los exámenes los da la oficina de licencias de conducir de tu estado, y la mayoría de los conductores nuevos también deben terminar una capacitación para conductores principiantes con un proveedor registrado. Cada lección te dice dónde revisar las reglas oficiales.",
    "Cada lección dura unos cinco minutos e incluye una tarea de \"Pruébalo ahora\". Una comprobación de conocimientos corta cierra cada capítulo, y un examen de 20 preguntas cierra el curso. Al final haces tu propio plan de estudio y de exámenes de la CDL con fechas reales."
  ],
  finalTask: "Haz tu propio plan de estudio y de exámenes de la CDL en una página: el trabajo que quieres, la clase de CDL y los endosos que necesita, los pasos desde el examen médico hasta el examen de habilidades en orden con una fecha meta para cada uno, tres proveedores de capacitación registrados que encontraste en el Training Provider Registry, las secciones del manual estatal que estudiarás cada semana y una lista escrita de inspección previa al viaje para el tipo de vehículo con el que harás el examen.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan su primer trabajo manejando un camión o un autobús: quienes buscan empleo, veteranos y militares que dejan el servicio, jóvenes adultos, personas que regresan a casa después de estar en prisión y quienes cambian de carrera. Muchas tienen una licencia de conducir normal pero ninguna experiencia en manejo comercial.",
    startingPoint: "Pueden manejar un carro y leer un manual básico. La mayoría no conoce las clases de CDL, los pasos del permiso, la regla de capacitación ni qué es la inspección previa al viaje. A algunas les han dado datos equivocados amigos o anuncios.",
    gap: "Los trabajos de manejo pagan salarios estables y tienen muchas vacantes, pero la gente pierde tiempo y dinero cuando elige la clase equivocada, se inscribe en una escuela que no está registrada o llega a los exámenes sin preparación. Las personas necesitan una idea correcta del camino y un plan que puedan seguir, antes de pagar una capacitación.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; cada término técnico se explica",
      "Dispositivos: un teléfono o una computadora de la biblioteca para leer el manual estatal de la CDL y el registro oficial",
      "Las reglas cambian según el estado: el curso remite al manual y a la oficina del estado para cuotas, formularios y citas de examen",
      "En este curso no se maneja de verdad; las habilidades al volante vienen de un proveedor de capacitación registrado",
      "Algunas personas tienen antecedentes o problemas de salud: revisan si califican con el estado y con un examinador médico, no con este curso"
    ],
    prerequisites: "Una licencia de conducir normal vigente, o un plan para obtenerla primero. Lectura básica en inglés, porque las reglas federales exigen que los conductores lean y hablen inglés lo suficiente para el trabajo."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Con la descripción de un trabajo de manejo", action: "identificar la clase de CDL (A, B o C) y los endosos que necesita el trabajo", standard: "acertando al menos 4 de 5 descripciones de trabajo" },
    { id: "O2", condition: "Usando las fuentes oficiales de la FMCSA y del estado", action: "enumerar en el orden correcto los pasos desde el examen médico hasta el examen de habilidades de la CDL", standard: "sin que falte ningún paso e incluyendo el tiempo de espera y la regla de capacitación" },
    { id: "O3", condition: "Usando el manual gratuito de la CDL de tu estado", action: "armar una rutina de estudio para los exámenes de conocimientos que necesitas y calificar una serie de práctica", standard: "llegando al menos a 8 de 10 en preguntas de práctica antes de reservar el examen" },
    { id: "O4", condition: "Frente a un camión o con una imagen de uno", action: "nombrar cada parte que revisas en una inspección previa al viaje y decir qué revisas en ella", standard: "cubriendo todas las áreas principales en orden sin saltarte ninguna" },
    { id: "O5", condition: "Con una situación de manejo", action: "elegir la acción segura en cuanto a espacio, velocidad, marcha atrás y aptitud para manejar", standard: "acertando al menos 4 de 5 situaciones" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El camino a la CDL",
      lessons: [
        {
          title: "Clases y endosos de la CDL: ¿cuál necesitas?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Relacionar un trabajo de manejo con la clase de CDL y los endosos que necesita.",
          text: [
            "Una licencia de conducir comercial (CDL) te permite manejar vehículos grandes o especiales para trabajar. Hay tres clases, según el vehículo.",
            "La Clase A es para vehículos combinados, como un tractor que jala un remolque, cuando la combinación tiene un peso nominal de 26,001 libras o más y el remolque tiene un peso nominal de más de 10,000 libras. La Clase B es para un solo vehículo grande de 26,001 libras o más, como un camión de volteo, un camión de caja o un autobús urbano; puede jalar un remolque pequeño de 10,000 libras o menos. La Clase C es para vehículos más pequeños que llevan 16 personas o más (contando al conductor) o que llevan materiales peligrosos que requieren letreros de advertencia.",
            "Los endosos son letras extra en tu licencia para trabajos especiales. T: remolques dobles o triples. P: pasajeros. N: vehículos cisterna. H: materiales peligrosos. X: cisterna más materiales peligrosos. S: autobús escolar. Cada uno necesita su propio examen, y el endoso H también necesita una revisión de antecedentes de seguridad.",
            "Empieza por el trabajo que quieres. Lee anuncios de trabajo reales cerca de ti y busca la clase y los endosos que piden."
          ],
          steps: ["Elige un trabajo que quieras, como larga distancia, reparto local, autobús o camión de volteo.", "Pregúntate: ¿jala un remolque grande? Eso suele ser Clase A.", "¿Es un solo camión o autobús grande? Eso suele ser Clase B.", "¿Lleva pasajeros, líquidos en una cisterna, remolques dobles o materiales peligrosos? Agrega el endoso."],
          words: [["CDL", "licencia de conducir comercial: la licencia que se necesita para manejar vehículos grandes o especiales para trabajar."], ["Vehículo combinado", "un camión que jala un remolque, como un tractocamión."], ["Peso nominal", "lo máximo que un vehículo está hecho para pesar con carga completa, fijado por el fabricante (a menudo llamado GVWR)."], ["Endoso", "un permiso extra en tu CDL para trabajos especiales, como llevar pasajeros o cisternas."], ["Materiales peligrosos (hazmat)", "cargas que pueden dañar a personas o propiedades, como combustible o químicos, y que necesitan letreros de advertencia llamados placas."]],
          slides: [
            { title: "Tres clases de CDL", bullets: ["Clase A: camión que jala un remolque pesado (tractocamión)", "Clase B: un solo camión o autobús pesado (volteo, autobús urbano)", "Clase C: vehículo más pequeño con 16+ personas o hazmat con placas"] },
            { title: "Endosos: letras extra", bullets: ["T dobles/triples, P pasajeros, N cisterna", "H hazmat, X cisterna más hazmat, S autobús escolar", "Cada uno necesita su propio examen"] },
            { title: "Empieza por el trabajo", bullets: ["Lee tres anuncios de trabajo reales cerca de ti", "Anota la clase y los endosos que piden", "Esa es tu licencia meta"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Busca tres anuncios reales de trabajos de manejo cerca de ti (en un sitio de empleos o en el sitio propio de una empresa). Para cada uno, escribe el trabajo, la clase de CDL que pide y los endosos. Encierra en un círculo el trabajo que más quieres.",
          youCanNow: "relacionar un trabajo de manejo con la Clase A, B o C y nombrar los endosos que necesita.",
          quickCheck: [
            { objective: "O1", q: "Un trabajo consiste en manejar un tractor que jala un remolque de 53 pies. ¿Qué clase suele ser?", options: ["Clase C", "Clase B", "Clase A", "No se necesita CDL"], answer: 2, why: "Un tractor que jala un remolque pesado es un vehículo combinado, y eso es Clase A." },
            { objective: "O1", q: "¿Qué endoso agregas para manejar un autobús escolar?", options: ["S", "T", "N", "X"], answer: 0, why: "S es el endoso de autobús escolar; para los autobuses también se necesita el endoso P de pasajeros." }
          ]
        },
        {
          title: "Los pasos del permiso a la licencia",
          objectives: ["O2"],
          minutes: 6,
          goal: "Enumerar en orden los pasos para obtener la CDL y quién se encarga de cada uno.",
          text: [
            "La mayoría de los conductores nuevos siguen los mismos pasos. Las reglas federales vienen de la FMCSA; la oficina de licencias de conducir de tu estado hace los exámenes y fija las cuotas y los formularios.",
            "Primero, un examen médico (a menudo llamado examen físico del DOT) con un examinador médico certificado. La mayoría de los conductores deben aprobarlo de nuevo al menos cada 24 meses. Segundo, aprobar los exámenes escritos de conocimientos del estado para obtener un permiso de aprendiz comercial (CLP). Las reglas federales dicen que quien tiene un CLP debe tener al menos 18 años y esperar al menos 14 días antes del examen de habilidades. Mientras practicas en vías públicas, una persona con CDL de la clase correcta debe ir sentada a tu lado.",
            "Desde el 7 de febrero de 2022, la mayoría de las personas que sacan su primera CDL Clase A o B, o su primer endoso P, S o H, deben terminar la capacitación para conductores principiantes (ELDT) con un proveedor que aparezca en el Training Provider Registry de la FMCSA antes del examen. Luego haces el examen de habilidades del estado: inspección previa al viaje, control básico del vehículo y manejo en carretera.",
            "Edad: para manejar entre estados debes tener al menos 21 años. Algunos estados permiten que conductores de 18 a 20 años manejen solo dentro del estado. Revisa las reglas de tu estado."
          ],
          steps: ["Examen médico con un examinador médico certificado.", "Estudia el manual estatal de la CDL y aprueba los exámenes de conocimientos.", "Obtén tu permiso de aprendiz comercial (CLP).", "Termina la capacitación para conductores principiantes con un proveedor registrado, si te aplica.", "Practica con una persona calificada con CDL a tu lado; espera al menos 14 días.", "Haz el examen de habilidades: inspección previa al viaje, control básico, manejo en carretera."],
          words: [["FMCSA", "la Federal Motor Carrier Safety Administration, la agencia de EE. UU. que fija las reglas para camiones y autobuses."], ["CLP", "permiso de aprendiz comercial: te permite practicar manejando un vehículo comercial con una persona calificada con CDL a tu lado."], ["ELDT", "capacitación para conductores principiantes: la capacitación federal que la mayoría de los conductores nuevos de CDL deben terminar antes de hacer el examen."], ["Training Provider Registry", "la lista oficial de la FMCSA de escuelas y empleadores autorizados para dar la ELDT."], ["Examinador médico", "un profesional de la salud certificado para hacer el examen físico del DOT a conductores comerciales."]],
          slides: [
            { title: "Quién hace qué", bullets: ["FMCSA: las reglas federales", "Tu estado: los exámenes, cuotas y formularios", "Proveedor registrado: la capacitación obligatoria"] },
            { title: "Los pasos en orden", bullets: ["Examen médico, luego exámenes de conocimientos, luego el CLP", "Capacitación para principiantes si te aplica", "Espera al menos 14 días y luego el examen de habilidades"] },
            { title: "Las reglas que debes recordar", bullets: ["CLP: al menos 18 años, persona con CDL a tu lado", "Entre estados: al menos 21 años", "El proveedor debe estar en el registro de la FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Busca la página de la CDL de tu estado (escribe el nombre de tu estado más \"CDL\" y abre el sitio .gov). Escribe los seis pasos en orden y, junto a cada uno, lo que dice tu estado: los formularios, a dónde ir y las cuotas que indica.",
          youCanNow: "enumerar en orden los pasos desde el examen médico hasta el examen de habilidades y decir quién se encarga de cada uno.",
          quickCheck: [
            { objective: "O2", q: "Acabas de obtener tu CLP. ¿Cuándo puedes hacer el examen de habilidades según las reglas federales?", options: ["El mismo día", "Al día siguiente", "Después de 6 meses", "Después de al menos 14 días"], answer: 3, why: "Las reglas federales dicen que quien tiene un CLP debe esperar al menos 14 días antes de hacer el examen de habilidades." },
            { objective: "O2", q: "¿Dónde encuentras una escuela que pueda dar la capacitación obligatoria para conductores principiantes?", options: ["En cualquier anuncio de redes sociales", "En el Training Provider Registry de la FMCSA", "Con un amigo que maneja camiones", "En la agencia de carros"], answer: 1, why: "Solo los proveedores del Training Provider Registry de la FMCSA pueden dar la capacitación obligatoria." }
          ]
        },
        {
          title: "Estudiar para los exámenes de conocimientos",
          objectives: ["O3"],
          minutes: 5,
          goal: "Armar una rutina de estudio con el manual de la CDL de tu estado y calificar una serie de práctica.",
          text: [
            "Cada estado tiene un manual de la CDL gratuito en su sitio web de licencias de conducir. Los exámenes escritos salen de ahí, así que es el mejor libro de estudio que puedes tener.",
            "La mayoría de los conductores nuevos hacen el examen de Conocimientos Generales. Muchos también hacen Frenos de Aire (la mayoría de los camiones grandes usan frenos de aire) y Vehículos Combinados (para la Clase A). Cada endoso tiene su propio examen. Tu manual estatal indica qué secciones van con cada examen.",
            "Estudia una sección a la vez. Léela, cierra el manual y escribe tres cosas que aprendiste. Luego usa las preguntas de práctica del manual o del sitio de tu estado. Busca acertar al menos 8 de 10 antes de reservar el examen real.",
            "Ten cuidado con las aplicaciones y sitios de pago que prometen las \"preguntas reales del examen\". La práctica gratuita de tu estado es suficiente para la mayoría de las personas."
          ],
          steps: ["Descarga el manual de la CDL de tu estado desde el sitio oficial .gov.", "Marca las secciones que necesitas: Conocimientos Generales más las de tu clase y tus endosos.", "Planea una sección por sesión de estudio, de 20 a 30 minutos.", "Después de cada sección, escribe tres cosas que aprendiste sin mirar.", "Haz preguntas de práctica hasta acertar al menos 8 de 10."],
          words: [["Examen de conocimientos", "el examen escrito (a menudo en computadora) que apruebas para obtener tu CLP."], ["Frenos de aire", "frenos que funcionan con aire comprimido, usados en la mayoría de los camiones y autobuses pesados."], ["Manual de la CDL", "el libro de estudio oficial de tu estado para los exámenes de la CDL."]],
          slides: [
            { title: "Tu libro de estudio es gratis", bullets: ["Cada estado tiene un manual de la CDL en su sitio .gov", "Los exámenes escritos salen de ahí"] },
            { title: "¿Qué exámenes?", bullets: ["Conocimientos Generales para todos", "Frenos de Aire y Vehículos Combinados para la mayoría de la Clase A", "Un examen por cada endoso"] },
            { title: "Cómo estudiar", bullets: ["Una sección por sesión", "Cierra el libro y escribe tres cosas que aprendiste", "Practica hasta sacar 8 de 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Descarga el manual de la CDL de tu estado. Lee la primera parte de la sección de Conocimientos Generales sobre la inspección del vehículo. Ciérralo y escribe tres cosas que recuerdes. Luego escribe cinco preguntas de práctica propias con sus respuestas, e intercámbialas con un compañero de estudio o revísalas con el manual.",
          youCanNow: "encontrar el manual de la CDL de tu estado, elegir las secciones que necesitas y estudiarlas en sesiones cortas hasta sacar 8 de 10.",
          quickCheck: [
            { objective: "O3", q: "¿Cuál es el mejor libro de estudio gratuito para tus exámenes de conocimientos de la CDL?", options: ["Una aplicación de pago con \"respuestas reales del examen\"", "Un video de un desconocido en internet", "El manual oficial de la CDL de tu estado", "Un manual para conductores de carros"], answer: 2, why: "Los exámenes escritos salen del manual oficial de la CDL de tu estado." },
            { objective: "O3", q: "Quieres una Clase A para tractocamiones con frenos de aire. ¿Qué exámenes necesitas normalmente?", options: ["Solo Autobús Escolar", "Solo Pasajeros", "Solo Materiales Peligrosos", "Conocimientos Generales, Frenos de Aire y Vehículos Combinados"], answer: 3, why: "La mayoría de los conductores de tractocamiones Clase A hacen Conocimientos Generales, Frenos de Aire y Vehículos Combinados." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El camino a la CDL",
        questions: [
          { objective: "O1", q: "Un trabajo consiste en manejar un solo camión de volteo de 33,000 libras. ¿Qué clase suele ser?", options: ["Clase B", "Clase A", "Clase C", "Una licencia normal de carro"], answer: 0, why: "Un solo vehículo pesado de 26,001 libras o más es Clase B." },
          { objective: "O1", q: "¿Qué endoso te permite jalar remolques dobles o triples?", options: ["P", "S", "T", "N"], answer: 2, why: "T es el endoso de remolques dobles y triples." },
          { objective: "O2", q: "¿Qué paso suele ir primero en el camino a la CDL?", options: ["El examen de manejo en carretera", "El examen médico y los exámenes de conocimientos para el CLP", "Comprar un camión", "Obtener el endoso H"], answer: 1, why: "Apruebas un examen médico y los exámenes de conocimientos para obtener un CLP antes de capacitarte y hacer el examen en carretera." },
          { objective: "O2", q: "Mientras practicas con un CLP en vías públicas, ¿quién debe ir contigo?", options: ["Nadie", "Cualquier amigo con licencia de carro", "Un familiar", "Una persona con CDL de la clase correcta, a tu lado"], answer: 3, why: "Una persona calificada con CDL para ese vehículo debe ir sentada a tu lado y supervisarte." },
          { objective: "O3", q: "Sacas 5 de 10 en las preguntas de práctica de Frenos de Aire. ¿Qué debes hacer?", options: ["Reservar el examen real hoy", "Saltarte Frenos de Aire", "Pagar una aplicación con las respuestas del examen", "Estudiar esa sección otra vez y practicar hasta llegar a 8 de 10"], answer: 3, why: "Practica hasta que saques buenos resultados antes de reservar el examen real." }
        ]
      }
    },
    {
      name: "Capítulo 2: Las habilidades y tu plan",
      lessons: [
        {
          title: "La inspección previa al viaje",
          objectives: ["O4"],
          minutes: 6,
          goal: "Nombrar cada área de una inspección previa al viaje y lo que revisas en ella.",
          text: [
            "El examen de habilidades empieza con una inspección previa al viaje. Caminas alrededor del vehículo, señalas cada parte y dices en voz alta qué estás revisando. Las reglas federales también dicen que todo conductor debe asegurarse de que el vehículo está en buen estado antes de manejarlo, así que es un hábito para toda tu carrera.",
            "Sigue el mismo orden cada vez, para no saltarte ninguna parte. Un orden común es: compartimento del motor, cabina y arranque del motor, dirección, suspensión, frenos, ruedas y llantas, los lados y la parte trasera con las luces, y el área de enganche en un vehículo combinado. En los vehículos con frenos de aire también revisas los indicadores y las alarmas de los frenos de aire.",
            "Para cada parte, di qué la hace segura: \"Bien sujeta, sin grietas ni dobleces, sin fugas.\" Tu manual estatal tiene la lista completa para tu tipo de vehículo. Tu proveedor de capacitación te lo mostrará en un camión real.",
            "Si encuentras un defecto, el camión no se mueve hasta que se repare. Repórtalo y anótalo."
          ],
          steps: ["Usa la lista de revisión de tu manual estatal para tu tipo de vehículo.", "Empieza por el compartimento del motor, luego la cabina, y después camina alrededor del camión en el mismo orden cada vez.", "Señala cada parte y di qué revisas: bien sujeta, sin daños, sin fugas.", "Revisa luces, reflectores y llantas en cada lado.", "Anota y reporta cualquier defecto; no manejes hasta que esté reparado."],
          words: [["Inspección previa al viaje", "la revisión de seguridad que hace un conductor a un vehículo antes de manejarlo."], ["Defecto", "una parte rota, gastada o que falta y que hace que un vehículo no sea seguro."], ["Enganche", "las partes que unen un tractor con un remolque, como la quinta rueda y el perno rey."], ["Quinta rueda", "la placa plana y redonda del tractor donde se engancha el remolque."]],
          slides: [
            { title: "Por qué importa la inspección previa", bullets: ["El examen de habilidades empieza con ella", "La ley dice: revisa antes de manejar", "Si hay un defecto, no manejas"] },
            { title: "Siempre el mismo orden", bullets: ["Compartimento del motor, luego cabina y arranque", "Dirección, suspensión, frenos, ruedas", "Lados, parte trasera, luces, enganche"] },
            { title: "Di qué revisas", bullets: ["Bien sujeto", "Sin grietas, dobleces ni desgaste", "Sin fugas"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Con la sección de inspección del manual de la CDL de tu estado, escribe una lista de inspección previa al viaje para el vehículo con el que piensas hacer el examen. Luego practica diciéndola en voz alta frente a un carro, una imagen de un camión o un camión de juguete: señala cada área y di qué revisas.",
          youCanNow: "hacer en orden una inspección previa al viaje y decir qué revisas en cada parte.",
          quickCheck: [
            { objective: "O4", q: "¿Por qué haces la inspección en el mismo orden cada vez?", options: ["Para no saltarte nunca una parte", "Porque es más rápido saltarse partes", "Porque el examinador elige el orden", "No importa"], answer: 0, why: "Un orden fijo hace que no se te pase ningún área." },
            { objective: "O4", q: "Durante tu inspección previa encuentras una manguera de freno agrietada. ¿Qué haces?", options: ["Manejar despacio hasta la siguiente parada", "Ponerle cinta y seguir", "Reportarla, anotarla y no manejar hasta que esté reparada", "Ignorarla si los frenos todavía funcionan"], answer: 2, why: "Un defecto de seguridad significa que el vehículo no se mueve hasta que se repare." }
          ]
        },
        {
          title: "Control básico y hábitos de manejo seguro",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir la acción segura en situaciones comunes de manejo de camiones.",
          text: [
            "Después de la inspección previa, el examen de habilidades revisa el control básico del vehículo (avanzar y retroceder, retroceder en línea recta y en curva, y dar vuelta) y el manejo en carretera.",
            "Los examinadores buscan hábitos seguros. Deja un gran espacio de seguridad: los camiones necesitan mucho más espacio que los carros para detenerse. Baja la velocidad con lluvia, nieve, curvas, zonas de obras y tráfico pesado, aunque vayas por debajo del límite. Mira lejos hacia adelante y revisa tus espejos con frecuencia. Haz las vueltas a la derecha abiertas y con cuidado para que el remolque no golpee la banqueta ni un carro.",
            "Retrocede lo menos posible. Si no estás seguro de lo que hay detrás, bájate y mira. Muchos conductores recuerdan G.O.A.L. (Get Out And Look, en inglés): bájate y mira.",
            "También debes estar en condiciones de manejar. Las reglas federales de horas de servicio limitan cuánto tiempo puedes manejar y trabajar antes de descansar, y a los conductores se les hacen pruebas de drogas y alcohol. Nunca manejes cansado, enfermo o bajo los efectos de alguna sustancia."
          ],
          steps: ["Deja un espacio grande adelante; deja más con mal tiempo.", "Ajusta tu velocidad al camino, al clima y a la carga, no solo al letrero.", "Revisa tus espejos cada pocos segundos y antes de cada cambio de carril.", "Antes de retroceder: bájate y mira (G.O.A.L.), luego retrocede despacio.", "Detente y descansa cuando estés cansado; sigue las reglas de horas de servicio."],
          words: [["Espacio de seguridad", "el espacio libre que dejas alrededor de tu vehículo para tener lugar para frenar o maniobrar."], ["Desvío de trayectoria (off-tracking)", "cuando, en una vuelta, las ruedas traseras de un vehículo largo siguen un camino más corto que las delanteras."], ["Horas de servicio", "reglas de la FMCSA sobre cuánto tiempo puede manejar y trabajar un conductor antes de descansar."]],
          slides: [
            { title: "Qué revisa el examen de habilidades", bullets: ["Inspección previa al viaje", "Control básico: retroceder, dar vuelta, detenerse", "Manejo en carretera"] },
            { title: "Espacio y velocidad", bullets: ["Los camiones necesitan mucho más espacio para frenar", "Baja la velocidad con mal clima, curvas y zonas de obras", "Mira lejos hacia adelante; revisa los espejos seguido"] },
            { title: "Retroceder: G.O.A.L.", bullets: ["Get Out And Look: bájate y mira", "Retrocede despacio y lo menos posible"] },
            { title: "Estar en condiciones de manejar", bullets: ["Sigue las reglas de horas de servicio", "Nunca manejes cansado, enfermo o bajo efectos de sustancias"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Anota cinco situaciones de la sección de manejo seguro de tu manual estatal (por ejemplo lluvia de noche, una zona de obras, retroceder hacia un andén de carga). Para cada una, escribe la acción segura en una oración. Pide a un compañero de estudio que te pregunte sobre ellas.",
          youCanNow: "elegir la acción segura en cuanto a espacio, velocidad, marcha atrás y aptitud para manejar.",
          quickCheck: [
            { objective: "O5", q: "Estás retrocediendo hacia un andén de carga y no ves una esquina. ¿Qué haces?", options: ["Retroceder más rápido para terminar pronto", "Bajarte y mirar antes de seguir retrocediendo", "Tocar el claxon y seguir", "Usar solo el radio"], answer: 1, why: "G.O.A.L.: bájate y mira cuando no estés seguro de lo que hay detrás." },
            { objective: "O5", q: "Empieza a llover fuerte en la autopista. ¿Cuál es la decisión segura?", options: ["Mantener la misma velocidad y distancia", "Seguir más de cerca al carro de adelante para ver sus luces", "Acelerar para salir de la lluvia", "Bajar la velocidad y aumentar la distancia de seguimiento"], answer: 3, why: "En pavimento mojado se necesita más distancia para frenar, así que baja la velocidad y deja más espacio." }
          ]
        },
        {
          title: "Elegir la capacitación y hacer tu plan de la CDL",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Escribir un plan de la CDL con fechas y con proveedores de capacitación registrados a los que puedas contactar.",
          text: [
            "Antes de pagar o inscribirte en cualquier capacitación, revisa que la escuela o el empleador aparezca en el Training Provider Registry de la FMCSA. Puedes buscar en el registro por ubicación.",
            "Algunas empresas de transporte pagan la capacitación si aceptas manejar para ellas durante un tiempo fijo. Lee el contrato con cuidado: ¿qué pasa si te vas antes? ¿Tendrás que devolver el costo de la capacitación? Pregunta antes de firmar.",
            "Veteranos: si manejaste vehículos militares pesados, pregunta a tu estado por la exención militar del examen de habilidades; la FMCSA permite que los estados la ofrezcan a militares y veteranos recientes que califiquen. Si tienes antecedentes, llama a la oficina de licencias del estado y pregunta pronto a los empleadores por sus reglas de contratación; el endoso de materiales peligrosos también necesita una revisión de seguridad.",
            "Ahora conviértelo en un plan. Un plan con fechas tiene muchas más probabilidades de cumplirse que un deseo."
          ],
          steps: ["Escribe el trabajo que quieres y la clase y los endosos que necesita.", "Busca en el Training Provider Registry y anota tres proveedores cerca de ti.", "Llama o visita; pregunta por el horario, el costo total, el contrato y la colocación en un empleo.", "Pon una fecha meta junto a cada paso, desde el examen médico hasta el examen de habilidades.", "Planea qué secciones del manual estudiarás cada semana."],
          words: [["Contrato de capacitación", "un acuerdo en el que una empresa paga tu capacitación si trabajas para ella durante un tiempo fijo."], ["Exención del examen de habilidades", "una opción que algunos estados ofrecen para no hacer el examen de habilidades de la CDL a conductores militares que califiquen."]],
          slides: [
            { title: "Revisa antes de pagar", bullets: ["¿El proveedor está en el Training Provider Registry de la FMCSA?", "Busca en el registro por ubicación"] },
            { title: "Capacitación pagada por la empresa", bullets: ["Lee el contrato", "¿Y si te vas antes? ¿Tienes que devolver el costo?"] },
            { title: "Pregunta pronto", bullets: ["Veteranos: pregunten por la exención militar del examen de habilidades", "Con antecedentes: pregunta pronto al estado y a los empleadores"] },
            { title: "Un plan con fechas", bullets: ["Cada paso tiene una fecha meta", "Secciones de estudio cada semana", "Tres proveedores a quienes llamar"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Busca en el Training Provider Registry tres proveedores cerca de ti. Escribe sus nombres, cómo contactarlos y tres preguntas que le harás a cada uno. Luego pon una fecha meta junto a cada paso de tu camino a la CDL.",
          youCanNow: "comprobar que un proveedor de capacitación está registrado y escribir un plan de la CDL con una fecha para cada paso.",
          quickCheck: [
            { objective: "O2", q: "Una escuela dice que da capacitación para la CDL, pero no está en el Training Provider Registry. ¿Qué debes hacer?", options: ["Inscribirte rápido antes de que suba el precio", "Pagar en efectivo para que salga más barato", "Elegir un proveedor que esté en el registro", "Pedirle a un amigo que lo revise después"], answer: 2, why: "La capacitación que cuenta para la mayoría de los conductores nuevos debe venir de un proveedor del registro de la FMCSA." },
            { objective: "O3", q: "¿Qué plan tiene más probabilidades de funcionar?", options: ["\"Algún día sacaré mi CDL.\"", "\"Examen médico antes del 3 de mayo, exámenes de conocimientos antes del 24 de mayo, estudiar una sección del manual cada semana.\"", "\"Estudiaré cuando tenga tiempo.\"", "\"Haré el examen y veré qué pasa.\""], answer: 1, why: "Un plan con fechas y pasos de estudio semanales convierte una meta en acciones." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Las habilidades y tu plan",
        questions: [
          { objective: "O4", q: "¿Con qué empieza el examen de habilidades de la CDL?", options: ["La inspección previa al viaje", "El manejo en carretera", "Retroceder en curva", "Un ensayo escrito"], answer: 0, why: "El examen de habilidades empieza con la inspección previa al viaje." },
          { objective: "O4", q: "Durante una inspección previa, ¿qué dices de cada parte?", options: ["Solo su nombre", "Su precio", "Lo que revisas: bien sujeta, sin daños, sin fugas", "Nada; solo miras"], answer: 2, why: "Señalas cada parte y dices qué la hace segura." },
          { objective: "O5", q: "¿Por qué los camiones dejan más distancia que los carros?", options: ["Solo para ahorrar combustible", "Necesitan mucho más espacio para detenerse", "Es solo una costumbre", "Para que otros conductores puedan rebasar"], answer: 1, why: "Los vehículos pesados tardan mucho más en detenerse, así que necesitan un espacio de seguridad más grande." },
          { objective: "O5", q: "Sientes mucho sueño a las dos horas de manejar. ¿Cuál es la acción segura?", options: ["Abrir la ventana y seguir", "Tomar más café y acelerar", "Subirle al radio", "Detenerte en un lugar seguro y descansar"], answer: 3, why: "Nunca manejes cansado; detente en un lugar seguro, descansa y sigue las reglas de horas de servicio." },
          { objective: "O2", q: "Una empresa ofrece capacitación gratuita para la CDL si manejas para ella un año. ¿Qué haces primero?", options: ["Leer el contrato y preguntar qué pasa si te vas antes", "Firmar de inmediato", "Decirles que decidirás después de la capacitación", "Ignorar el contrato"], answer: 0, why: "La capacitación pagada por la empresa a menudo tiene una regla de devolución, así que lee y pregunta antes de firmar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para la licencia de conducir comercial (CDL)",
    questions: [
      { objective: "O1", q: "Un trabajo manejando un autobús urbano que lleva 40 pasajeros. ¿Qué clase y qué endoso son los más probables?", options: ["Clase C con T", "Clase A con H", "Clase B con P", "No se necesita CDL"], answer: 2, why: "Un solo autobús pesado suele ser Clase B, y llevar pasajeros necesita el endoso P." },
      { objective: "O1", q: "¿Qué permite el endoso H?", options: ["Transportar materiales peligrosos", "Manejar un autobús escolar", "Jalar remolques dobles", "Manejar solo un vehículo cisterna"], answer: 0, why: "H es el endoso de materiales peligrosos; también necesita una revisión de antecedentes de seguridad." },
      { objective: "O1", q: "¿Qué vehículo suele ser Clase A?", options: ["Una camioneta de 15 pasajeros", "Un solo camión de caja de 30,000 libras", "Una camioneta pickup", "Un tractor que jala un remolque de más de 10,000 libras"], answer: 3, why: "Una combinación de 26,001 libras o más, con un remolque de más de 10,000 libras, es Clase A." },
      { objective: "O1", q: "Quieres transportar combustible en una cisterna que lleva materiales peligrosos con placas. ¿Qué endoso cubre las dos cosas?", options: ["S", "X", "P", "T"], answer: 1, why: "X combina los endosos de vehículo cisterna y de materiales peligrosos." },
      { objective: "O2", q: "¿Quién hace las reglas federales para los conductores comerciales?", options: ["La FMCSA", "El IRS", "La OSHA", "Tu escuela de capacitación"], answer: 0, why: "La FMCSA, la Federal Motor Carrier Safety Administration, fija las reglas federales." },
      { objective: "O2", q: "¿Quién aplica los exámenes de conocimientos y de habilidades de la CDL?", options: ["La FMCSA en Washington, D.C.", "Cualquier empresa de transporte", "El tribunal federal", "La oficina de licencias de conducir de tu estado o sus examinadores aprobados"], answer: 3, why: "El estado hace los exámenes y fija las cuotas y los formularios." },
      { objective: "O2", q: "Según las reglas federales, ¿cuál es la edad mínima para manejar un vehículo comercial entre estados?", options: ["16", "18", "21", "25"], answer: 2, why: "Los conductores deben tener al menos 21 años para manejar vehículos comerciales entre estados." },
      { objective: "O2", q: "¿Qué orden es el correcto?", options: ["Examen de habilidades, luego CLP, luego examen médico", "Examen médico y exámenes de conocimientos, CLP, capacitación y luego examen de habilidades", "Capacitación, examen de habilidades y luego exámenes de conocimientos", "CLP, examen de habilidades el mismo día y luego capacitación"], answer: 1, why: "El examen médico y los exámenes de conocimientos llevan al CLP; la capacitación y la espera de 14 días van antes del examen de habilidades." },
      { objective: "O2", q: "¿Cada cuánto deben aprobar de nuevo el examen médico del DOT la mayoría de los conductores?", options: ["Al menos cada 24 meses", "Solo una vez en la vida", "Cada 10 años", "Nunca después de los 30 años"], answer: 0, why: "La mayoría de los conductores deben volver a examinarse y certificarse al menos cada 24 meses; algunos necesitan hacerlo más seguido." },
      { objective: "O3", q: "¿De dónde salen las preguntas del examen escrito de la CDL?", options: ["De artículos de noticias", "Del manual de la CDL de tu estado", "De las redes sociales", "Del radio del camión"], answer: 1, why: "Los exámenes de conocimientos se basan en el manual oficial de la CDL del estado." },
      { objective: "O3", q: "¿Cuál es una buena rutina de estudio para los exámenes de conocimientos?", options: ["Leer todo el manual la noche anterior", "Solo ver videos", "Memorizar respuestas de una aplicación de pago", "Una sección del manual por sesión, luego escribir tres cosas que aprendiste y hacer preguntas de práctica"], answer: 3, why: "Las sesiones cortas, recordar por escrito y las preguntas de práctica te ayudan a recordar." },
      { objective: "O3", q: "¿Cuándo estás listo para reservar un examen de conocimientos?", options: ["Cuando ya leíste la portada", "Cuando aciertas al menos 8 de 10 preguntas de práctica", "Cuando un amigo dice que lo estás", "En cuanto tienes el manual"], answer: 1, why: "Sacar buenos resultados en las preguntas de práctica es una buena señal de que estás listo." },
      { objective: "O4", q: "¿Qué es una inspección previa al viaje?", options: ["Una revisión de seguridad del vehículo antes de manejarlo", "Un examen de la vista", "Una mirada al clima", "Una revisión de tu cheque de pago"], answer: 0, why: "Es la revisión que hace un conductor para asegurarse de que el vehículo es seguro antes de manejarlo." },
      { objective: "O4", q: "¿Cuál es una buena forma de explicar una parte en tu inspección previa?", options: ["\"Eso es una llanta.\"", "\"Se ve bien, creo.\"", "\"Bien sujeta, sin grietas ni dobleces, sin fugas.\"", "\"La reviso después.\""], answer: 2, why: "Nombras la parte y dices exactamente qué la hace segura." },
      { objective: "O4", q: "En un tractocamión, ¿qué área une el tractor con el remolque?", options: ["Los espejos", "El área de enganche, como la quinta rueda", "El tanque de combustible", "El radio"], answer: 1, why: "El área de enganche, que incluye la quinta rueda y el perno rey, sujeta el remolque al tractor." },
      { objective: "O5", q: "¿Qué significa G.O.A.L. al retroceder?", options: ["Go On And Leave (sigue y vete)", "Get Over All Lanes (cruza todos los carriles)", "Gas Off At Lights (suelta el acelerador en los semáforos)", "Get Out And Look (bájate y mira)"], answer: 3, why: "Get Out And Look: bájate y revisa lo que hay detrás antes de retroceder." },
      { objective: "O5", q: "Vas pasando por una zona de obras. ¿Qué haces?", options: ["Bajar la velocidad y dejar más espacio", "Mantener la velocidad de autopista", "Cambiar de carril seguido", "Seguir de cerca al carro de adelante"], answer: 0, why: "En las zonas de obras hay trabajadores, carriles angostos y frenadas repentinas, así que baja la velocidad y deja espacio." },
      { objective: "O5", q: "¿Para qué sirven las reglas de horas de servicio?", options: ["Fijan tu sueldo", "Limitan cuánto tiempo manejas y trabajas antes de descansar", "Te dicen qué caminos usar", "Deciden la fecha de tu examen"], answer: 1, why: "Las reglas de horas de servicio limitan el tiempo de manejo y de trabajo para que los conductores no estén demasiado cansados." },
      { objective: "O5", q: "Vas a dar una vuelta a la derecha en un camión largo. ¿Cuál es el riesgo?", options: ["El remolque puede cortar la esquina y golpear la banqueta o un carro", "El motor se va a apagar", "Los espejos se van a doblar", "No hay ningún riesgo"], answer: 0, why: "Por el desvío de trayectoria, las ruedas traseras siguen un camino más corto, así que el remolque puede golpear lo que está en el interior de la vuelta." },
      { objective: "O4", q: "En tu inspección previa encuentras una luz que no funciona. ¿Qué haces?", options: ["Manejar de noche de todos modos", "Ignorarla si es de día", "Reportarla y repararla antes de manejar", "Taparla con cinta"], answer: 2, why: "Un defecto se reporta y se repara antes de que el vehículo se mueva." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte y revisa tu plan otra vez.",
    criteria: [
      { name: "La licencia correcta", objective: "O1", notYet: "La clase o los endosos no coinciden con el trabajo, o faltan.", meets: "La clase y cada endoso coinciden con el trabajo meta y con un anuncio de trabajo real.", exceeds: "También anota otro trabajo que abriría la misma licencia, o un endoso para agregar más adelante." },
      { name: "Pasos en orden", objective: "O2", notYet: "Faltan pasos o están fuera de orden, o se omite la regla de capacitación o la espera de 14 días.", meets: "Todos los pasos están en orden con una fecha meta cada uno, incluidos el examen médico, el CLP, la capacitación y la espera de 14 días.", exceeds: "Cada paso también nombra la oficina o el sitio web que se encarga de él." },
      { name: "Capacitación registrada", objective: "O2", notYet: "No hay proveedores, o los proveedores no se revisaron en el registro.", meets: "Tres proveedores del Training Provider Registry con sus datos de contacto.", exceeds: "Incluye las respuestas a las preguntas hechas: costo, horario, condiciones del contrato." },
      { name: "Plan de estudio", objective: "O3", notYet: "No hay plan de estudio, o no usa el manual estatal.", meets: "Secciones semanales del manual estatal para cada examen necesario, con una meta de puntaje de práctica.", exceeds: "Incluye los puntajes de práctica ya alcanzados." },
      { name: "Lista de inspección previa", objective: "O4", notYet: "La lista se salta áreas principales o no sigue un orden fijo.", meets: "Cubre cada área principal en un orden fijo, con lo que se revisa en cada parte.", exceeds: "La persona puede decirla en voz alta, señalando las partes, sin leer." }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y un plan de la CDL que cumple con la rúbrica",
      "Personas que aprueban los exámenes de conocimientos del estado y obtienen un CLP en 90 días (encuesta de seguimiento)",
      "Personas que se inscriben con un proveedor del Training Provider Registry",
      "Personas que obtienen una CDL y empiezan un trabajo de manejo (informes de socios y de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para abrir el manual estatal de la CDL y el Training Provider Registry de la FMCSA",
      "El manual de la CDL de tu estado (gratis en el sitio .gov del estado)",
      "Papel, pluma y un calendario para el plan",
      "Opcional: una imagen o un modelo de camión, o un carro, para practicar la explicación de la inspección previa",
      "De 60 a 75 minutos en total, más tiempo de estudio semanal"
    ],
    facilitatorNotes: [
      "En grupo, imprima la lista de inspección del estado y pida a los participantes que practiquen la explicación en parejas.",
      "No recomiende una escuela o empresa en particular; enseñe a los participantes a revisar el Training Provider Registry y a comparar.",
      "Recuerde a los participantes que las reglas, cuotas y formularios cambian según el estado; siempre hay que revisar el sitio .gov del estado.",
      "Para veteranos, indique la página del estado sobre la exención militar del examen de habilidades; a quienes tienen antecedentes, póngalos en contacto con un consejero de reinserción o de desarrollo laboral.",
      "Califique el plan final con la rúbrica y ayude a cada participante a corregir una fila de Todavía no a la vez."
    ]
  }
};

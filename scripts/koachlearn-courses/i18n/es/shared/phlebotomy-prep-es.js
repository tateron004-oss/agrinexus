"use strict";

// Koach Learn course (Spanish translation of shared/phlebotomy-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// Teaches the knowledge behind blood collection and exam preparation. It does NOT teach anyone to draw blood. No clinical advice.

module.exports = {
  id: "phlebotomy-prep-es",
  lang: "es",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Preparación para técnico en flebotomía",
  skills: "Elegir un programa de formación y una certificación, Identificar al paciente y revisar la orden, Orden de extracción, Los pasos de una extracción de sangre de rutina, Control de infecciones y seguridad con objetos punzantes, Etiquetar y manejar las muestras",
  outcome: "hacer tu propia lista de bolsillo para una extracción de sangre de rutina, desde identificar al paciente hasta etiquetar los tubos y limpiar, con el orden de extracción de tu laboratorio y los pasos de seguridad, además de un plan para tu programa de formación y tu examen de certificación.",
  about: [
    "Los técnicos en flebotomía toman muestras de sangre en hospitales, laboratorios, clínicas, centros de donación de sangre y en las casas de los pacientes. Es una forma rápida de entrar al sector de la salud y puede llevar a otros trabajos de laboratorio y de atención al paciente.",
    "Este curso enseña los conocimientos detrás del trabajo: las certificaciones y las reglas estatales, cómo identificar al paciente y revisar la orden, el orden de extracción de los tubos, los pasos de una extracción de sangre de rutina, el control de infecciones y la seguridad con objetos punzantes, y cómo etiquetar y manejar las muestras para que el laboratorio pueda usarlas. También trata la privacidad del paciente según HIPAA, la ley de privacidad de la salud de Estados Unidos.",
    "Importante: este curso no te enseña a sacar sangre, y no debes practicar con nadie. Las extracciones se aprenden solo en un programa de formación aprobado, con un instructor mirando, después de practicar con brazos de entrenamiento. Los exámenes de certificación también piden pruebas de extracciones supervisadas en personas reales. Este curso te prepara para ese programa y para el examen; no te da un certificado ni una licencia.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel. Después de cada lección hay una comprobación corta, cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Haz tu propia lista de bolsillo para una extracción de sangre de rutina: identificar al paciente y revisar la orden, prepararte y protegerte, el orden de extracción de tus tubos (según la tabla de tu programa o laboratorio), los pasos de la extracción, etiquetar frente al paciente, desechar los objetos punzantes y limpiar. Agrega un plan de una página: el programa de formación al que vas a postular, el examen de certificación que quieres presentar, lo que pide tu estado y fechas meta.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos que buscan una forma rápida y estable de entrar al sector de la salud: personas que buscan empleo, jóvenes adultos, inmigrantes, veteranos (algunos con experiencia médica militar) y adultos que vuelven a estudiar.",
    startingPoint: "Pueden leer textos sencillos y usar un teléfono o una computadora de la biblioteca. La mayoría nunca ha trabajado en una clínica o un laboratorio, no conoce las palabras médicas y a algunos les ponen nerviosos las agujas o la sangre.",
    gap: "Los programas de flebotomía y los exámenes de certificación esperan que el estudiante conozca la identificación del paciente, el orden de extracción, los pasos de la venopunción, el control de infecciones, el manejo de muestras y la privacidad, y que haya hecho extracciones supervisadas. Los estudiantes necesitan estos conocimientos, un plan claro de formación y de examen, y una idea honesta del trabajo antes de inscribirse.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra médica",
      "Seguridad: nada de extracciones ni práctica con agujas en casa; eso se hace solo en un programa supervisado",
      "Dispositivos: un teléfono o una computadora de la biblioteca; el papel basta para todas las tareas",
      "Las reglas cambian según el estado (por ejemplo, California emite sus propios certificados de flebotomía); cada estudiante revisa su estado",
      "Los colores de los tubos y el orden de extracción siguen la tabla de cada laboratorio; los estudiantes usan la tabla de su programa",
      "Privacidad: ninguna tarea usa información de pacientes reales"
    ],
    prerequisites: "Ninguno. \"Alfabetización en salud\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando la página oficial de NHA y la página del departamento de salud de tu estado", action: "escribir un plan con un programa de formación en flebotomía, las extracciones supervisadas que se piden y una fecha para el examen de certificación", standard: "con cada requisito revisado en una página oficial" },
    { id: "O2", condition: "Con un paciente de práctica y una orden de laboratorio", action: "confirmar al paciente con dos identificadores y comparar la orden antes de cualquier extracción", standard: "deteniéndote cada vez que algo no coincida" },
    { id: "O3", condition: "Con un grupo de colores de tubos y la tabla de tu programa", action: "poner los tubos en el orden de extracción", standard: "sin ningún tubo fuera de orden" },
    { id: "O4", condition: "Con los pasos de una venopunción de rutina desordenados", action: "ordenar los pasos y decir cuándo detener la extracción", standard: "sin que falte ningún paso" },
    { id: "O5", condition: "Con situaciones de seguridad de práctica", action: "elegir el paso correcto de control de infecciones y de seguridad con objetos punzantes", standard: "acertando en todas las situaciones" },
    { id: "O6", condition: "Con muestras de práctica", action: "decidir si cada muestra está bien etiquetada y manejada para que el laboratorio la acepte", standard: "encontrando todos los motivos de rechazo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, el paciente y los tubos",
      lessons: [
        {
          title: "El trabajo, la formación y la certificación",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escribir un plan con un programa de formación, extracciones supervisadas y un examen de certificación.",
          text: [
            "Un técnico en flebotomía saca sangre a los pacientes para análisis de laboratorio y para donación. El trabajo pide pasos cuidadosos, una actitud tranquila con los pacientes nerviosos y una seguridad estricta.",
            "La mayoría de las personas empieza con un programa de formación en flebotomía en un colegio comunitario, una escuela para adultos o una escuela técnica. Primero aprendes con brazos de entrenamiento y luego haces extracciones en personas reales con un instructor mirando. Esta parte práctica no se puede aprender en línea.",
            "Certificación: una opción común es el Certified Phlebotomy Technician (CPT) de NHA, la National Healthcareer Association (una organización de certificación en salud). NHA pide un diploma de secundaria o GED (o uno que vas a obtener pronto), un programa de formación o experiencia laboral supervisada, y prueba de al menos 30 venopunciones y 10 punciones capilares (en el dedo o el talón) en personas vivas. Otros grupos, como ASCP, también certifican flebotomistas; revisa sus páginas oficiales.",
            "Algunos estados tienen sus propias reglas. California, por ejemplo, emite certificados estatales de flebotomía a través del Departamento de Salud Pública de California (CDPH) y además pide un examen nacional de un grupo aprobado. Revisa el departamento de salud de tu estado antes de elegir un programa. Las reglas y los costos cambian, así que lee las páginas oficiales."
          ],
          steps: ["Busca dos programas de formación en flebotomía cerca de ti.", "Pregunta en cada uno: ¿cuántas extracciones supervisadas hacen los estudiantes y para qué certificación preparan?", "Lee la página oficial de la certificación para ver sus requisitos actuales.", "Revisa las reglas del departamento de salud de tu estado.", "Escribe fechas meta: inicio de la formación, fin de la formación, examen."],
          words: [["Flebotomía", "sacar sangre a una persona para análisis o para donación."], ["Venopunción", "meter una aguja en una vena para sacar sangre."], ["Punción capilar", "un pinchazo pequeño en el dedo o el talón para sacar unas gotas de sangre."], ["Brazo de entrenamiento", "un modelo de brazo para practicar las extracciones de forma segura."]],
          slides: [
            { title: "El trabajo", bullets: ["Sacar sangre para análisis y donación", "Pasos cuidadosos, actitud tranquila, seguridad estricta"] },
            { title: "Primero la formación", bullets: ["Programa aprobado: colegio, escuela para adultos o técnica", "Brazos de entrenamiento, luego extracciones reales supervisadas", "La parte práctica no se aprende en línea"] },
            { title: "Certificación", bullets: ["CPT de NHA: formación o experiencia laboral", "Prueba de 30 venopunciones y 10 punciones capilares", "Otros grupos, como ASCP: revisa sus páginas"] },
            { title: "Revisa tu estado", bullets: ["Algunos estados emiten sus propios certificados", "California: CDPH más un examen nacional", "Reglas y costos cambian: lee las páginas oficiales"] }
          ],
          sources: [
            { name: "NHA: Certified Phlebotomy Technician (CPT)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "Departamento de Salud Pública de California: certificado de flebotomía", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Escribe un plan de una página: dos programas de formación cerca de ti (nombre, duración, extracciones supervisadas, para qué certificación preparan), la certificación que quieres y sus requisitos según la página oficial, las reglas de tu estado y tres fechas meta.",
          youCanNow: "decir qué hace un técnico en flebotomía, cómo funciona la formación, qué pide el CPT de NHA y dónde revisar las reglas de tu estado.",
          quickCheck: [
            { objective: "O1", q: "¿Dónde aprendes a sacar sangre de verdad?", options: ["Con videos en casa", "Con un amigo, con cuidado", "En un programa de formación aprobado, con un instructor mirando", "En ti mismo"], answer: 2, why: "Las extracciones se aprenden solo en un programa supervisado, primero con brazos de entrenamiento." },
            { objective: "O1", q: "¿Qué pide el CPT de NHA, además de formación o experiencia laboral?", options: ["Prueba de venopunciones y punciones capilares supervisadas en personas vivas", "Un título de enfermería", "Una licencia de conducir", "Nada más"], answer: 0, why: "NHA pide prueba de al menos 30 venopunciones y 10 punciones capilares." }
          ]
        },
        {
          title: "El paciente correcto y la orden correcta",
          objectives: ["O2"],
          minutes: 5,
          goal: "Confirmar al paciente con dos identificadores y comparar la orden de laboratorio antes de cualquier extracción.",
          text: [
            "El paso más importante pasa antes de la aguja: asegurarte de que tienes al paciente correcto. Una muestra de la persona equivocada puede llevar a un tratamiento equivocado.",
            "Usa al menos dos identificadores, por lo general el nombre completo y la fecha de nacimiento. Pide al paciente que los diga (\"Por favor, dígame su nombre completo y su fecha de nacimiento\"), en lugar de preguntar \"¿Usted es Juan Pérez?\", porque una persona nerviosa o confundida puede decir que sí sin más. En un hospital, también compara la pulsera de identificación con la orden.",
            "Luego lee la orden de laboratorio (requisición): qué análisis, si hay instrucciones especiales como ayuno o una hora fija, y qué tubos se necesitan. Si el nombre, la fecha de nacimiento o cualquier otro dato no coincide, detente y pregunta a tu supervisor. Nunca adivines.",
            "Privacidad (HIPAA): la orden muestra información privada de salud. Mantenla fuera de la vista, habla en voz baja y habla de los análisis solo con el paciente y con el personal que necesita saberlo."
          ],
          steps: ["Preséntate y explica lo que vas a hacer.", "Pide al paciente que diga su nombre completo y su fecha de nacimiento.", "Compáralos con la orden (y con la pulsera de identificación en un hospital).", "Revisa los análisis, los tubos y cualquier instrucción especial, como el ayuno.", "Si algo no coincide, detente y pregunta a tu supervisor."],
          words: [["Identificadores del paciente", "datos como el nombre completo y la fecha de nacimiento que se usan para asegurarse de que es la persona correcta."], ["Requisición", "la orden de laboratorio que indica el paciente y los análisis que hay que tomar."], ["Ayuno", "no comer (y a veces no beber nada más que agua) durante un tiempo fijo antes de un análisis."], ["HIPAA", "la ley federal de Estados Unidos que protege la privacidad de la información de salud."]],
          slides: [
            { title: "Antes de la aguja", bullets: ["Lo más importante es el paciente correcto", "Paciente equivocado = resultados y atención equivocados"] },
            { title: "Dos identificadores", bullets: ["Nombre completo y fecha de nacimiento", "Pide al paciente que los DIGA", "Hospital: revisa también la pulsera"] },
            { title: "Lee la orden", bullets: ["Qué análisis y qué tubos", "Instrucciones de ayuno o de hora fija", "¿Algo no cuadra? Detente y pregunta"] },
            { title: "Privacidad", bullets: ["Mantén la orden fuera de la vista", "Habla en voz baja", "Comparte solo con quien lo necesita"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profesionales (Regla de Privacidad)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Haz un juego de roles con un amigo, sin agujas. Tu amigo hace de paciente con un nombre y un cumpleaños inventados; tú tienes una orden de laboratorio inventada con un dato diferente. Preséntate, pídele que diga su nombre y su fecha de nacimiento, compáralos con la orden y di en voz alta lo que haces cuando no coinciden.",
          youCanNow: "identificar a un paciente con dos identificadores, revisar la orden de laboratorio, detenerte cuando algo no coincide y mantener la información en privado.",
          quickCheck: [
            { objective: "O2", q: "¿Cuál es la mejor forma de confirmar quién es el paciente?", options: ["Preguntar \"¿Usted es María López?\"", "Mirarle la cara", "Preguntar a la persona en la sala de espera", "Pedirle que diga su nombre completo y su fecha de nacimiento"], answer: 3, why: "Si el paciente dice dos identificadores, se evita un \"sí\" nervioso a un nombre equivocado." },
            { objective: "O2", q: "La fecha de nacimiento de la orden no coincide con la que dice el paciente. ¿Qué haces?", options: ["Sacas la sangre igual; el nombre coincide", "Te detienes y preguntas a tu supervisor", "Cambias la fecha en la orden", "Usas la orden de otro paciente"], answer: 1, why: "Cualquier diferencia detiene la extracción hasta que se aclare." }
          ]
        },
        {
          title: "Los tubos y el orden de extracción",
          objectives: ["O3"],
          minutes: 6,
          goal: "Poner un grupo de tubos en el orden de extracción usando la tabla de tu programa.",
          text: [
            "Los tubos tienen tapas de colores que indican lo que llevan dentro. Algunos tienen aditivos que evitan que la sangre se coagule; otros la ayudan a coagular. Si el aditivo de un tubo pasa al siguiente, puede cambiar los resultados del análisis.",
            "Por eso los laboratorios siguen un orden de extracción, basado en una norma de laboratorio de CLSI. Un orden común es: 1) frascos de hemocultivo, 2) celeste (citrato de sodio), 3) rojo o dorado (tubos de suero, con o sin gel), 4) verde (heparina), 5) lavanda o morado (EDTA), 6) gris (fluoruro de sodio y oxalato de potasio).",
            "Los colores de las tapas pueden variar según el fabricante, y los laboratorios pueden tener tubos adicionales, así que usa siempre la tabla de tu programa o de tu laboratorio. Muchos estudiantes aprenden una frase para recordar el orden y la practican hasta que les sale sola.",
            "Los tubos con aditivo se voltean suavemente boca abajo y de vuelta (se invierten) varias veces justo después de llenarlos, como indica el fabricante. Nunca los agites."
          ],
          words: [["Aditivo", "una sustancia química dentro de un tubo que evita la coagulación o ayuda a que la sangre coagule."], ["Orden de extracción", "el orden fijo para llenar los tubos, para que los aditivos no pasen al siguiente tubo."], ["Suero", "la parte líquida de la sangre después de que coagula."], ["Invertir", "voltear un tubo suavemente boca abajo y de vuelta."], ["CLSI", "el Clinical and Laboratory Standards Institute, un grupo que escribe normas de laboratorio."]],
          slides: [
            { title: "Por qué importa el orden", bullets: ["La tapa indica lo que hay dentro", "Aditivo que pasa al siguiente tubo cambia los resultados"] },
            { title: "Un orden de extracción común", bullets: ["1. Hemocultivos  2. Celeste", "3. Rojo o dorado  4. Verde", "5. Lavanda  6. Gris"] },
            { title: "Usa la tabla de tu laboratorio", bullets: ["Los colores pueden variar según el fabricante", "Los laboratorios pueden agregar tubos", "Apréndelo hasta que te salga solo"] },
            { title: "Después de llenar", bullets: ["Invierte con suavidad, como dice el fabricante", "Nunca agites"] }
          ],
          tryIt: "Corta seis papelitos y coloréalos o escríbeles: gris, rojo, hemocultivo, lavanda, celeste, verde. Mézclalos y ponlos en el orden de extracción. Hazlo cinco veces, cada vez más rápido. Revisa tu respuesta con el orden de esta lección y, más adelante, con la tabla de tu programa.",
          youCanNow: "poner los tubos comunes en el orden de extracción, decir por qué importa el orden e invertir los tubos con suavidad después de llenarlos.",
          quickCheck: [
            { objective: "O3", q: "En el orden de extracción común, ¿qué va primero?", options: ["Lavanda", "Gris", "Frascos de hemocultivo", "Verde"], answer: 2, why: "Los hemocultivos se toman primero para que sigan estériles." },
            { objective: "O3", q: "¿Por qué existe un orden de extracción?", options: ["Para que los aditivos de un tubo no pasen al siguiente", "Para que el paciente vea colores bonitos", "Para usar menos tubos", "Para que la extracción sea más rápida"], answer: 0, why: "El aditivo que pasa al siguiente tubo puede cambiar los resultados del análisis." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, el paciente y los tubos",
        questions: [
          { objective: "O1", q: "¿Quién otorga la credencial Certified Phlebotomy Technician (CPT) que se describe en este curso?", options: ["El DMV (la oficina de licencias de conducir)", "Cualquier hospital", "NHA, la National Healthcareer Association", "El médico del paciente"], answer: 2, why: "NHA otorga la credencial CPT." },
          { objective: "O1", q: "Vives en California. ¿Qué más debes revisar?", options: ["Las reglas de flebotomía del Departamento de Salud Pública de California", "Nada; las reglas nacionales bastan", "Una entrada de blog", "Tu compañía de teléfono"], answer: 0, why: "California emite sus propios certificados de flebotomía a través del CDPH." },
          { objective: "O2", q: "¿Cuántos identificadores del paciente debes usar como mínimo?", options: ["Ninguno", "Uno", "Cinco", "Dos"], answer: 3, why: "Al menos dos, por lo general el nombre completo y la fecha de nacimiento." },
          { objective: "O2", q: "La orden dice que el análisis requiere ayuno. ¿Qué haces?", options: ["Lo ignoras", "Revisas si el paciente está en ayunas y sigues la regla de tu laboratorio", "Le dices al paciente que coma primero", "Sacas un tubo de más"], answer: 1, why: "Las instrucciones especiales de la orden se revisan antes de la extracción." },
          { objective: "O3", q: "En el orden de extracción común, ¿qué tubo va justo antes del verde?", options: ["Lavanda", "Gris", "Rojo o dorado", "Hemocultivo"], answer: 2, why: "El orden es hemocultivo, celeste, rojo o dorado, verde, lavanda, gris." }
        ]
      }
    },
    {
      name: "Capítulo 2: La extracción, la seguridad y las muestras",
      lessons: [
        {
          title: "Los pasos de una extracción de sangre de rutina",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ordenar los pasos de una venopunción de rutina y decir cuándo detenerse.",
          text: [
            "Esta lección enseña los pasos para que los conozcas antes de tu programa de formación. Los harás solo con un instructor mirando. Nunca practiques con una persona fuera de un programa supervisado.",
            "Los pasos principales: identificar al paciente y revisar la orden; lavarte las manos y ponerte guantes; acomodar el brazo del paciente; colocar el torniquete y elegir una vena (la vena mediana cubital, en el pliegue del codo, suele ser la primera opción); limpiar el sitio y dejar que se seque al aire; meter la aguja con un ángulo bajo; llenar los tubos en el orden de extracción; soltar el torniquete; sacar la aguja y activar el dispositivo de seguridad; hacer presión con una gasa; etiquetar los tubos frente al paciente; limpiar y ver cómo está el paciente.",
            "Muchos programas enseñan a no dejar el torniquete puesto más de un minuto aproximadamente, porque puede cambiar los resultados del análisis. Sigue las reglas de tu programa.",
            "Sabe cuándo detenerte: el paciente se siente mareado o se desmaya, se forma rápido una hinchazón (hematoma), el paciente siente un dolor agudo, punzante o como una descarga eléctrica, o el paciente te pide que pares. Quita el torniquete y la aguja, haz presión, mantén al paciente seguro y pide ayuda."
          ],
          steps: ["Identifica al paciente y revisa la orden.", "Lávate las manos y ponte guantes.", "Acomoda el brazo y coloca el torniquete.", "Elige la vena, luego limpia el sitio y deja que se seque.", "Mete la aguja y llena los tubos en el orden de extracción.", "Suelta el torniquete, saca la aguja y activa el dispositivo de seguridad.", "Haz presión con una gasa.", "Etiqueta los tubos frente al paciente, limpia y ve cómo está el paciente."],
          words: [["Torniquete", "una banda que se ata alrededor del brazo para que las venas se encuentren más fácil."], ["Vena mediana cubital", "una vena en el pliegue del codo que suele ser la primera opción para una extracción."], ["Hematoma", "una hinchazón de sangre debajo de la piel."], ["Síncope", "desmayo: una pérdida corta del conocimiento."]],
          slides: [
            { title: "Aprende los pasos, practica con supervisión", bullets: ["Conoce los pasos antes de la formación", "Extracciones reales solo con un instructor mirando"] },
            { title: "Antes de la aguja", bullets: ["Identifica al paciente, revisa la orden", "Lávate las manos, ponte guantes", "Torniquete, elige la vena, limpia y deja secar"] },
            { title: "La extracción y después", bullets: ["Llena los tubos en el orden de extracción", "Suelta el torniquete, saca la aguja, activa la seguridad", "Presión, etiqueta frente al paciente"] },
            { title: "Cuándo detenerte", bullets: ["Desmayo o sensación de desmayo", "Hinchazón rápida (hematoma)", "Dolor agudo, punzante o como descarga eléctrica", "El paciente te pide que pares"] }
          ],
          tryIt: "Sin agujas. Escribe los ocho pasos de una extracción de rutina en ocho tarjetas, mézclalas y ponlas en orden. Luego, al reverso de la última tarjeta, escribe las cuatro señales que indican que hay que detener la extracción y lo que haces después.",
          youCanNow: "enumerar en orden los pasos de una venopunción de rutina y decir cuándo detener una extracción y qué hacer.",
          quickCheck: [
            { objective: "O4", q: "¿Qué paso va justo antes de limpiar el sitio?", options: ["Etiquetar los tubos", "Sacar la aguja", "Hacer presión", "Colocar el torniquete y elegir la vena"], answer: 3, why: "Primero encuentras la vena; luego limpias el sitio y dejas que se seque." },
            { objective: "O4", q: "Durante una extracción, el paciente dice que se siente mareado. ¿Qué haces?", options: ["Terminas rápido", "Detienes la extracción, mantienes al paciente seguro y pides ayuda", "Le pides que se ponga de pie", "No le haces caso"], answer: 1, why: "Sentirse mareado es una señal para parar: fuera el torniquete y la aguja, presión, mantener al paciente seguro y pedir ayuda." }
          ]
        },
        {
          title: "Control de infecciones y seguridad con objetos punzantes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Elegir el paso correcto de control de infecciones y de seguridad con objetos punzantes en situaciones de práctica.",
          text: [
            "La sangre puede llevar microbios como la hepatitis B, la hepatitis C y el VIH, llamados patógenos de transmisión sanguínea. La norma de patógenos de transmisión sanguínea de OSHA obliga a los empleadores a tener un plan de control de exposición, ofrecer la vacuna contra la hepatitis B, capacitar a los trabajadores, dar equipo de protección y usar agujas con dispositivos más seguros.",
            "Tus hábitos: límpiate las manos antes y después de cada paciente y cuando te quitas los guantes; usa guantes nuevos con cada paciente; usa agujas con dispositivo de seguridad y actívalo enseguida; pon las agujas usadas directo en el contenedor de objetos punzantes, nunca les pongas la tapa con la mano y nunca dejes que el contenedor se llene de más.",
            "Si te pinchas con una aguja o te cae sangre en la piel o en los ojos: lava la zona con agua y jabón (enjuaga los ojos con agua) y avisa a tu supervisor enseguida para que te revisen. No esperes."
          ],
          steps: ["Límpiate las manos antes y después de cada paciente.", "Guantes nuevos con cada paciente.", "Activa el dispositivo de seguridad justo cuando sale la aguja.", "Tira la aguja directo al contenedor de objetos punzantes; nunca le pongas la tapa con la mano.", "Exposición: lava o enjuaga y avisa enseguida."],
          words: [["Patógenos de transmisión sanguínea", "microbios en la sangre que pueden causar enfermedades, como la hepatitis B, la hepatitis C y el VIH."], ["OSHA", "la Occupational Safety and Health Administration, la agencia federal de Estados Unidos para la seguridad en el trabajo."], ["Contenedor de objetos punzantes", "una caja dura y rotulada para agujas usadas y otros objetos filosos."], ["EPP", "equipo de protección personal, como los guantes."]],
          slides: [
            { title: "Por qué importa", bullets: ["La sangre puede llevar hepatitis B, hepatitis C, VIH", "La norma de patógenos de OSHA protege a los trabajadores"] },
            { title: "El empleador debe", bullets: ["Plan de control de exposición y capacitación", "Ofrecer la vacuna contra la hepatitis B", "Dar EPP y agujas con dispositivos más seguros"] },
            { title: "Tus hábitos", bullets: ["Manos limpias; guantes nuevos con cada paciente", "Dispositivo de seguridad activado enseguida", "Directo al contenedor; nunca tapar con la mano"] },
            { title: "Si te expones", bullets: ["Lava con agua y jabón; enjuaga los ojos", "Avisa a tu supervisor enseguida"] }
          ],
          sources: [
            { name: "OSHA: patógenos de transmisión sanguínea y prevención de pinchazos", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Solo práctica. Para cada situación, escribe el paso correcto: (1) terminas con un paciente y se sienta el siguiente, (2) la aguja ya salió de la vena, (3) el contenedor de objetos punzantes está lleno hasta la línea, (4) sientes un pinchazo a través del guante con una aguja usada. Respuestas: manos limpias y guantes nuevos; activar el dispositivo de seguridad y ponerla en el contenedor; cerrarlo y pedir uno nuevo; lavar la zona y avisar enseguida.",
          youCanNow: "elegir el paso correcto de control de infecciones y de seguridad con objetos punzantes, y decir qué hacer después de una exposición.",
          quickCheck: [
            { objective: "O5", q: "¿Qué haces con una aguja usada?", options: ["Activas el dispositivo de seguridad y la pones directo en el contenedor de objetos punzantes", "Le pones la tapa con la mano", "La tiras a la basura normal", "La dejas en la bandeja para después"], answer: 0, why: "Activar el dispositivo y tirarla directo al contenedor evita pinchazos." },
            { objective: "O5", q: "Te pinchas con una aguja usada. ¿Qué haces primero?", options: ["Terminas tu turno y luego decides", "Lo escondes para que no te culpen", "Lavas la zona con agua y jabón y avisas enseguida", "Te pones una curita y lo olvidas"], answer: 2, why: "Lava y avisa enseguida para que te revisen pronto." }
          ]
        },
        {
          title: "Etiquetar y manejar las muestras, y tu lista",
          objectives: ["O6"],
          minutes: 5,
          goal: "Decidir si una muestra está bien etiquetada y manejada para que el laboratorio la acepte.",
          text: [
            "Una extracción perfecta no sirve si el laboratorio no puede usar la muestra. Los laboratorios rechazan muestras sin etiqueta o mal etiquetadas, en el tubo equivocado, sin llenar lo suficiente, coaguladas cuando no deberían estarlo, hemolizadas (con los glóbulos rojos rotos, muchas veces por una extracción muy brusca o por agitar los tubos), o que no se mantuvieron a la temperatura correcta o dentro del tiempo indicado.",
            "Etiqueta cada tubo frente al paciente, justo después de la extracción, nunca antes. Sigue las reglas de tu laboratorio sobre lo que va en la etiqueta: por lo general el nombre completo del paciente, la fecha de nacimiento o el número de identificación, la fecha y la hora, y tus iniciales. Luego compara la etiqueta con la orden una vez más.",
            "Envía las muestras como dice tu laboratorio: algunas van en hielo, otras se protegen de la luz y otras deben llegar al laboratorio en un tiempo fijo. Mantén privada la información del paciente durante el camino.",
            "Ahora haz tu tarea final: tu propia lista de bolsillo, más tu plan de formación y de examen."
          ],
          steps: ["Etiqueta cada tubo frente al paciente, justo después de la extracción.", "Incluye lo que pide tu laboratorio: nombre, fecha de nacimiento o identificación, fecha, hora, tus iniciales.", "Compara las etiquetas con la orden.", "Maneja y envía los tubos como dice el laboratorio (hielo, luz, tiempo).", "Avisa de cualquier problema en lugar de enviar una muestra mala."],
          words: [["Muestra", "algo que se toma para analizar, como un tubo de sangre, y se envía al laboratorio."], ["Hemólisis", "cuando los glóbulos rojos se rompen, lo que puede arruinar algunos resultados."], ["Muestra rechazada", "una muestra que el laboratorio no analiza, así que hay que volver a sacar sangre al paciente."]],
          slides: [
            { title: "Por qué se rechazan muestras", bullets: ["Sin etiqueta o mal etiquetadas", "Tubo equivocado o sin llenar lo suficiente", "Coaguladas, hemolizadas, mala temperatura o tarde"] },
            { title: "Etiqueta bien", bullets: ["Frente al paciente, justo después de la extracción", "Lo que pide tu laboratorio: nombre, fecha o ID, fecha, hora, iniciales", "Compara con la orden"] },
            { title: "Maneja bien", bullets: ["Reglas de hielo, luz o tiempo", "Mantén privada la información", "Avisa de problemas; nunca envíes una muestra mala"] },
            { title: "Tarea final", bullets: ["Tu lista de bolsillo, de principio a fin", "El orden de extracción de tu laboratorio", "Tu plan de formación y examen con fechas"] }
          ],
          tryIt: "Tarea final. Haz una lista de bolsillo para una extracción de rutina: identificación del paciente y revisión de la orden, higiene de manos y guantes, orden de extracción, los pasos de la extracción, cuándo detenerse, desecho de objetos punzantes, etiquetado frente al paciente, manejo y limpieza. Al reverso, escribe tu plan: programa de formación, examen de certificación, reglas de tu estado y fechas meta. No uses información de pacientes reales.",
          youCanNow: "etiquetar y manejar las muestras para que el laboratorio pueda usarlas, encontrar motivos de rechazo y usar tu propia lista y tu plan.",
          quickCheck: [
            { objective: "O6", q: "¿Cuándo etiquetas los tubos?", options: ["Antes de ver al paciente", "Al final de tu turno", "Frente al paciente, justo después de la extracción", "Cuando llama el laboratorio"], answer: 2, why: "Etiquetar frente al paciente justo después de la extracción evita confusiones." },
            { objective: "O6", q: "Un tubo llega al laboratorio sin etiqueta. ¿Qué pasa?", options: ["El laboratorio adivina de quién es", "El laboratorio lo rechaza y hay que volver a sacar sangre al paciente", "El laboratorio lo analiza igual", "El laboratorio lo etiqueta de memoria"], answer: 1, why: "Las muestras sin etiqueta se rechazan porque nadie puede estar seguro de quién es la sangre." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: La extracción, la seguridad y las muestras",
        questions: [
          { objective: "O4", q: "¿Qué vena suele ser la primera opción para una extracción de rutina?", options: ["Una vena del pie", "Una vena del cuello", "Solo una vena del dorso de la mano", "La vena mediana cubital, en el pliegue del codo"], answer: 3, why: "La vena mediana cubital suele ser la primera opción porque normalmente es fácil de alcanzar." },
          { objective: "O4", q: "¿Cuál es una señal para detener la extracción?", options: ["El paciente siente un dolor agudo, punzante o como una descarga eléctrica", "El tubo se está llenando", "El paciente está callado", "El torniquete está puesto"], answer: 0, why: "Un dolor punzante o como una descarga puede indicar que hay un nervio afectado; detente enseguida." },
          { objective: "O5", q: "¿Cuál es una práctica segura con objetos punzantes?", options: ["Ponerles la tapa a las agujas con la mano", "Llenar de más el contenedor de objetos punzantes", "Poner las agujas directo en el contenedor de objetos punzantes", "Dejar las agujas en la bandeja"], answer: 2, why: "Las agujas van directo al contenedor de objetos punzantes, nunca se tapan con la mano." },
          { objective: "O5", q: "Según la norma de patógenos de transmisión sanguínea de OSHA, ¿qué vacuna deben ofrecer los empleadores?", options: ["Gripe", "Hepatitis B", "Sarampión", "Tétanos"], answer: 1, why: "Los empleadores deben ofrecer la vacuna contra la hepatitis B a los trabajadores expuestos." },
          { objective: "O6", q: "¿Qué es la hemólisis?", options: ["Glóbulos rojos que se rompen", "Un tipo de tubo", "Un tipo de sangre", "Una extracción limpia"], answer: 0, why: "La hemólisis es la ruptura de los glóbulos rojos, que puede arruinar algunos resultados." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para técnico en flebotomía",
    questions: [
      { objective: "O1", q: "¿Qué es la flebotomía?", options: ["Tomar radiografías", "Poner inyecciones", "Sacar sangre para análisis o donación", "Despachar recetas"], answer: 2, why: "Flebotomía significa sacar sangre." },
      { objective: "O1", q: "¿Este curso en línea basta por sí solo para que puedas sacar sangre?", options: ["Sí, después del examen", "No; necesitas un programa de formación supervisado y extracciones supervisadas", "Sí, si ves videos", "Sí, en cualquier estado"], answer: 1, why: "Las extracciones reales se aprenden y se demuestran solo en un programa supervisado." },
      { objective: "O1", q: "¿Dónde revisas los requisitos actuales de una certificación?", options: ["En la página oficial del grupo que certifica", "En una publicación de redes sociales", "Con un amigo", "En un libro de texto viejo"], answer: 0, why: "Los requisitos y los costos cambian; la página oficial está al día." },
      { objective: "O2", q: "¿Cuáles son los dos identificadores más comunes?", options: ["Número de cuarto y color de la cama", "Estatura y peso", "Nombre del médico y nombre del análisis", "Nombre completo y fecha de nacimiento"], answer: 3, why: "El nombre completo y la fecha de nacimiento son los dos identificadores habituales." },
      { objective: "O2", q: "¿Qué es una requisición?", options: ["Un tubo de sangre", "La orden de laboratorio que indica el paciente y los análisis", "Una venda", "Una factura"], answer: 1, why: "La requisición es la orden de laboratorio." },
      { objective: "O2", q: "¿Por qué pedir al paciente que diga su nombre en lugar de preguntar \"¿Usted es...?\"", options: ["Es más rápido", "Es más amable", "Un paciente nervioso puede decir que sí a un nombre equivocado", "Lo dice la ley"], answer: 2, why: "Si el paciente lo dice, se detectan las confusiones." },
      { objective: "O3", q: "En el orden de extracción común, ¿qué tubo va al final?", options: ["Celeste", "Rojo", "Verde", "Gris"], answer: 3, why: "El gris (fluoruro de sodio y oxalato de potasio) va al final en el orden común." },
      { objective: "O3", q: "¿Qué va justo después de los hemocultivos?", options: ["Celeste (citrato de sodio)", "Lavanda", "Gris", "Verde"], answer: 0, why: "El celeste va después de los hemocultivos en el orden común." },
      { objective: "O3", q: "En tu nuevo laboratorio, los colores de las tapas son diferentes. ¿Qué sigues?", options: ["La diapositiva del curso", "Lo que recuerdas de un trabajo anterior", "La tabla de tu propio laboratorio", "Lo que sea más rápido"], answer: 2, why: "La tabla de cada laboratorio es la regla, porque los fabricantes y los laboratorios varían." },
      { objective: "O3", q: "¿Cómo mezclas un tubo con aditivo?", options: ["Lo agitas fuerte", "Lo inviertes con suavidad, como dice el fabricante", "Lo dejas quieto", "Lo calientas"], answer: 1, why: "Invertirlo con suavidad mezcla el aditivo sin romper las células." },
      { objective: "O4", q: "¿Qué paso va primero?", options: ["Identificar al paciente y revisar la orden", "Colocar el torniquete", "Meter la aguja", "Etiquetar los tubos"], answer: 0, why: "Toda extracción empieza con el paciente correcto y la orden correcta." },
      { objective: "O4", q: "¿Qué es un hematoma?", options: ["Un color de tubo", "Un tipo de aguja", "Un sitio limpio", "Una hinchazón de sangre debajo de la piel"], answer: 3, why: "Un hematoma es sangre que se acumula debajo de la piel." },
      { objective: "O4", q: "¿Cuándo sueltas el torniquete?", options: ["Antes de limpiar el sitio", "Después de etiquetar", "Antes de sacar la aguja", "Nunca"], answer: 2, why: "El torniquete se quita antes de sacar la aguja." },
      { objective: "O5", q: "¿Qué son los patógenos de transmisión sanguínea?", options: ["Microbios en la sangre que pueden causar enfermedades", "Máquinas de laboratorio", "Aditivos de los tubos", "Tipos de vendas"], answer: 0, why: "La hepatitis B, la hepatitis C y el VIH son ejemplos." },
      { objective: "O5", q: "¿La norma de qué agencia federal protege a los trabajadores de los patógenos de transmisión sanguínea?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "La norma de patógenos de transmisión sanguínea de OSHA cubre esto." },
      { objective: "O5", q: "Te salpica sangre en un ojo. ¿Qué haces?", options: ["Sigues trabajando", "Te frotas el ojo", "Esperas hasta mañana", "Lo enjuagas con agua y avisas enseguida"], answer: 3, why: "Enjuaga enseguida y avisa para que te revisen." },
      { objective: "O5", q: "¿Cuándo te cambias los guantes?", options: ["Una vez al día", "Con cada paciente", "Solo cuando se rompen", "Nunca"], answer: 1, why: "Usar guantes nuevos con cada paciente evita que se pasen los microbios." },
      { objective: "O6", q: "¿Cuál es un motivo por el que un laboratorio rechaza una muestra?", options: ["Se etiquetó frente al paciente", "Se envió a tiempo", "Está hemolizada", "Está en el tubo correcto"], answer: 2, why: "La hemólisis puede arruinar los resultados, así que el laboratorio puede rechazarla." },
      { objective: "O6", q: "¿Qué va en la etiqueta del tubo?", options: ["Lo que pide tu laboratorio, por lo general nombre, fecha de nacimiento o identificación, fecha, hora y tus iniciales", "Solo el color del tubo", "El número de teléfono del paciente", "Nada"], answer: 0, why: "Cada laboratorio fija las reglas de la etiqueta; estos son los datos habituales." },
      { objective: "O6", q: "Notas que un tubo no está lleno lo suficiente. ¿Qué haces?", options: ["Lo envías igual", "Le agregas agua", "Lo mezclas con otro tubo", "Avisas y sigues la regla de tu laboratorio; nunca envías una muestra mala"], answer: 3, why: "Un tubo sin llenar lo suficiente puede dar resultados equivocados; sigue la regla del laboratorio." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Plan de formación y examen", objective: "O1", notYet: "No nombra ningún programa ni examen, o adivina los requisitos.", meets: "Nombra un programa de formación, un examen de certificación y sus requisitos según la página oficial, las reglas del estado y fechas meta.", exceeds: "Compara dos programas, incluido cuántas extracciones supervisadas ofrece cada uno." },
      { name: "Identificación del paciente y orden", objective: "O2", notYet: "La lista se salta la identificación del paciente o la revisión de la orden.", meets: "Empieza con dos identificadores dichos por el paciente y una revisión de la orden, con \"detenerse si no coincide\".", exceeds: "También incluye la pulsera de identificación en un hospital y las instrucciones especiales, como el ayuno." },
      { name: "Orden de extracción", objective: "O3", notYet: "Faltan tubos o están fuera de orden.", meets: "Todos los tubos en el orden correcto según la tabla del programa o del laboratorio.", exceeds: "Agrega por qué importa el orden y que los tubos se invierten con suavidad." },
      { name: "Pasos y señales para detenerse", objective: "O4", notYet: "Faltan pasos o están fuera de orden, o no hay señales para detenerse.", meets: "Todos los pasos en orden, con las señales que indican detener la extracción.", exceeds: "Agrega qué hacer si el paciente se desmaya." },
      { name: "Seguridad", objective: "O5", notYet: "No hay paso de higiene de manos, guantes ni objetos punzantes.", meets: "Higiene de manos, guantes nuevos, dispositivo de seguridad, contenedor de objetos punzantes y qué hacer después de una exposición.", exceeds: "Anota que nunca se tapan las agujas con la mano y que no se llena de más el contenedor." },
      { name: "Etiquetado y manejo", objective: "O6", notYet: "Etiqueta antes de la extracción o lejos del paciente.", meets: "Etiqueta frente al paciente después de la extracción, compara con la orden y sigue las reglas de manejo.", exceeds: "Enumera tres motivos por los que el laboratorio rechaza muestras y cómo evitar cada uno." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Estudiantes que se inscriben en un programa de formación en flebotomía aprobado en un plazo de 90 días",
      "Estudiantes que aprueban un examen de certificación en flebotomía como el CPT de NHA (según lo que informan ellos mismos)",
      "Estudiantes contratados como técnicos en flebotomía o asistentes de laboratorio en un plazo de 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas de NHA y del departamento de salud del estado",
      "Papel, bolígrafos de colores o papelitos para practicar el orden de extracción, y tarjetas para la lista",
      "La tabla de orden de extracción de tu programa de formación, si tienes una",
      "Unos 70 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "En este curso no hay agujas, tubos ni sangre; no deje que los estudiantes practiquen extracciones entre ellos. La práctica real pertenece a un programa aprobado y supervisado.",
      "Estudiantes que se marean con la sangre: déjelos saltarse las imágenes y converse con ellos sobre si el trabajo es para ellos.",
      "Lleve la tabla de orden de extracción de un programa de formación o un laboratorio local, porque los colores pueden variar.",
      "Haga el juego de roles de identificación del paciente en parejas, con una diferencia puesta a propósito.",
      "Recuerde a los estudiantes que revisen las reglas de su estado; algunos estados, como California, emiten sus propios certificados.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

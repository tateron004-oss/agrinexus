"use strict";

// Koach Learn course (Spanish translation of shared/early-childhood-cda-prep.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "early-childhood-cda-prep-es",
  lang: "es",
  translationOf: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Educación de la primera infancia y preparación para la credencial CDA",
  skills: "Conocer los requisitos de la CDA, Mantener a los niños seguros y sanos, Reportar sospechas de abuso, Escribir notas de observación, Planear una actividad de aprendizaje, Hacer un plan para la CDA con fechas",
  outcome: "empezar tu camino hacia la credencial Child Development Associate (CDA): anotar lo que pide el Council para tu entorno, mantener seguros a los niños, escribir notas de observación justas, planear una actividad de aprendizaje y convertirlo todo en un plan con fechas para la formación, la experiencia, el portafolio, el examen y la visita.",
  about: [
    "Los centros de cuidado infantil, los programas Head Start (programa federal de educación temprana de EE. UU.), los preescolares y los hogares de cuidado infantil necesitan adultos atentos y bien formados. La credencial Child Development Associate (CDA, Asociado en Desarrollo Infantil), que otorga el Council for Professional Recognition (Consejo para el Reconocimiento Profesional), es la primera credencial más conocida en educación de la primera infancia.",
    "Este curso es para quienes buscan trabajo, madres y padres, jóvenes adultos, personas que regresan a casa después de estar en prisión y cualquiera que quiera trabajar con niños pequeños. Te prepara para el camino de la CDA. No otorga la credencial y no cuenta como horas de formación oficial, a menos que un programa te diga que sí.",
    "Vas a aprender los pasos de la CDA, lo básico de la seguridad infantil y del reporte obligatorio, cómo observar a un niño y escribir lo que hace, y cómo planear una actividad sencilla. Al final tendrás tu propio plan para la CDA con fechas reales.",
    "Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\" y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Haz tu propio plan de preparación para la CDA en papel o en un documento gratis: tu entorno, dónde harás las 120 horas de formación (con 10 o más en cada una de las ocho áreas temáticas), cómo vas a registrar tus horas de trabajo, una fecha para empezar tu portafolio, fechas meta para el examen y la Verification Visit (visita de verificación), y un plan de actividad escrito para un niño de preescolar que podría ir en tu portafolio.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas y adolescentes mayores que quieren trabajar en cuidado infantil, preescolar, Head Start o cuidado infantil en el hogar en EE. UU.: madres y padres, personas que buscan trabajo o cambian de carrera, inmigrantes, cónyuges de veteranos y personas que regresan a casa después de estar en prisión. Muchas ya cuidan niños en casa, pero no tienen formación oficial.",
    startingPoint: "Pueden cuidar niños en el día a día y leer instrucciones sencillas. La mayoría no ha oído hablar de las áreas temáticas de la CDA, del portafolio ni de la visita de verificación, y nunca ha escrito notas de observación ni planes de clase.",
    gap: "Muchos trabajos de cuidado infantil y las reglas estatales de licencia piden formación o una credencial como la CDA. Los participantes necesitan conocer los pasos exactos, mantener seguros a los niños desde el primer día y practicar la escritura que piden el portafolio y el examen. Sin un plan, la gente toma la formación equivocada, pierde la cuenta de sus horas o deja pasar el plazo de 3 años para la experiencia y el de 6 meses para el portafolio.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (de 6.º a 8.º grado, más o menos)",
      "Dispositivos: un teléfono o una computadora de la biblioteca; cada tarea también se puede hacer en papel",
      "Tiempo: lecciones de 4 a 6 minutos que caben entre el trabajo y la familia",
      "Las reglas cambian: los requisitos y las tarifas de la CDA se revisan en cdacouncil.org; las reglas de licencia y de reporte obligatorio son distintas en cada estado",
      "Privacidad de los niños: las notas de práctica usan nombres inventados o solo la inicial del nombre, nunca fotos ni datos reales de un niño",
      "La revisión de antecedentes es parte del trabajo en cuidado infantil; quienes tienen antecedentes penales revisan las reglas de su estado"
    ],
    prerequisites: "Ninguno. Se necesita un diploma de preparatoria (high school) o el GED (examen de equivalencia de la preparatoria en EE. UU.) antes de solicitar la CDA (o estar inscrito en el penúltimo o último año de un programa técnico de educación infantil en la preparatoria)."
  },
  // ---- ADDIE: Diseño ----
  objectives: [
    { id: "O1", condition: "Usando la página del Council for Professional Recognition para tu entorno", action: "enumerar los pasos de formación, experiencia, portafolio, examen y visita de verificación de la CDA", standard: "con las horas y los plazos correctos" },
    { id: "O2", condition: "Dado un salón de cuidado infantil o la descripción de uno", action: "revisar el salón en busca de problemas de supervisión, lavado de manos, sueño seguro y peligros", standard: "encontrando al menos 4 de 5 problemas preparados" },
    { id: "O3", condition: "Dada una historia en la que un niño podría estar sufriendo daño", action: "describir los pasos para reportar una sospecha de abuso o negligencia", standard: "llamando primero al 911 si un niño está en peligro y siguiendo la ley estatal y la política del programa" },
    { id: "O4", condition: "Después de observar a un niño jugar durante cinco minutos", action: "escribir una nota de observación que registre solo lo que viste y oíste", standard: "sin etiquetas ni suposiciones, e incluyendo la fecha, la hora y el lugar" },
    { id: "O5", condition: "Dados la edad y un interés de un niño", action: "escribir un plan de actividad corto con un objetivo, materiales, pasos y una nota de seguridad", standard: "que sea adecuado para la edad y nombre un área temática de la CDA" },
    { id: "O6", condition: "Usando tu propio calendario", action: "hacer un plan de preparación para la CDA con fechas, desde la formación hasta la visita de verificación", standard: "que mantenga la experiencia dentro de los 3 años y el portafolio dentro de los 6 meses antes de la solicitud" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El camino a la CDA y la seguridad de los niños",
      lessons: [
        {
          title: "Qué es la CDA y los pasos para obtenerla",
          objectives: ["O1"],
          minutes: 6,
          goal: "Enumerar los pasos para obtener la CDA en tu entorno.",
          text: [
            "La credencial Child Development Associate (CDA) la otorga el Council for Professional Recognition. Demuestra que sabes poner en práctica los CDA Competency Standards (estándares de competencia de la CDA) con niños pequeños. Hay caminos para cuatro entornos: Preschool (preescolar), Infant-Toddler (bebés y niños de 1 a 3 años), Family Child Care (cuidado infantil en el hogar) y Home Visitor (visitas a domicilio). Cada uno tiene su propia página de requisitos.",
            "Para el entorno Preschool (niños de 3 a 5 años en un centro), la página del Council indica: un diploma de preparatoria o el GED (o estar inscrito en el penúltimo o último año de un programa de educación infantil en la preparatoria); 120 horas de formación oficial en educación de la primera infancia, con al menos 10 horas en cada una de las ocho áreas temáticas de la CDA; y 480 horas de trabajo con niños de 3 a 5 años dentro de los 3 años antes de la solicitud.",
            "También armas un portafolio profesional dentro de los 6 meses antes de la solicitud y eliges a un CDA Professional Development (PD) Specialist (especialista en desarrollo profesional). Cuando aprueban tu solicitud, presentas el examen de la CDA: unas 65 preguntas en computadora, en un centro de exámenes de Pearson VUE (empresa que aplica exámenes). Luego un PD Specialist hace la Verification Visit (visita de verificación): revisa tu portafolio, te observa trabajando con niños y conversa contigo sobre tus fortalezas y lo que puedes mejorar. Con algunos resultados del examen, el Council también ofrece una decisión más rápida sin visita; revisa su página de cambios en el proceso.",
            "Las tarifas, las becas y las reglas cambian. Revisa las cantidades actuales en cdacouncil.org y pregunta a tu empleador o a tu estado por becas antes de pagar. La credencial dura 3 años y luego se renueva."
          ],
          steps: ["Elige tu entorno: Preschool, Infant-Toddler, Family Child Care o Home Visitor.", "Abre la página de ese entorno en cdacouncil.org y anota sus requisitos.", "Busca una formación que cubra las ocho áreas temáticas.", "Empieza a registrar tus horas de trabajo con niños.", "Arma tu portafolio, envía la solicitud, presenta el examen y luego recibe la visita de verificación."],
          words: [["CDA", "Child Development Associate: una credencial nacional para personas que trabajan con niños pequeños."], ["Council for Professional Recognition", "la organización que otorga la CDA."], ["Portafolio", "una colección de tus propios escritos y recursos que muestra tu trabajo con niños y familias."], ["Visita de verificación", "una visita en la que un PD Specialist te observa trabajar, revisa tu portafolio y conversa contigo."], ["PD Specialist", "un especialista en desarrollo profesional aprobado por el Council para hacer tu visita."]],
          slides: [
            { title: "La CDA en una línea", bullets: ["La otorga el Council for Professional Recognition", "Entornos: Preschool, Infant-Toddler, Family Child Care, Home Visitor"] },
            { title: "Preschool: antes de la solicitud", bullets: ["Diploma o GED (o programa infantil en la preparatoria)", "120 horas de formación, 10+ en cada una de las 8 áreas", "480 horas de trabajo con niños de 3-5 años dentro de 3 años"] },
            { title: "Después", bullets: ["Portafolio listo dentro de 6 meses antes de la solicitud", "Examen de la CDA en un centro Pearson VUE", "Visita de verificación con un PD Specialist"] },
            { title: "Revisa antes de pagar", bullets: ["Las tarifas y reglas cambian: cdacouncil.org", "Pregunta por becas", "Renueva cada 3 años"] }
          ],
          sources: [
            { name: "CDA Council: camino Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: información sobre la CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council: cambios en el proceso", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council: buscar becas para la CDA", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council: renovar la CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Abre la página del CDA Council para el entorno que quieres (o usa los números de esta lección para Preschool). En papel, escribe los cinco pasos en orden y, junto a cada uno, las horas o el plazo.",
          youCanNow: "enumerar los pasos hacia la CDA para tu entorno, con las horas de formación, las horas de trabajo y los plazos.",
          quickCheck: [
            { objective: "O1", q: "Para la CDA de Preschool, ¿cómo se reparten las 120 horas de formación?", options: ["Las 120 horas en un solo tema que te guste", "Al menos 10 horas en cada una de las ocho áreas temáticas", "Solo horas de trabajo con niños", "Cualquier 120 horas de videos en internet"], answer: 1, why: "El Council pide 120 horas de formación, con no menos de 10 en cada una de las ocho áreas temáticas." },
            { objective: "O1", q: "¿Quién otorga la credencial CDA?", options: ["La oficina de vehículos de tu estado", "La escuela de tu hijo", "Cualquier centro de cuidado infantil", "El Council for Professional Recognition"], answer: 3, why: "El Council for Professional Recognition otorga la CDA; un curso o un empleador solo te ayuda a prepararte." }
          ]
        },
        {
          title: "Un salón seguro y sano: licencia, supervisión, lavado de manos, sueño seguro",
          objectives: ["O2"],
          minutes: 6,
          goal: "Revisar un salón de cuidado infantil en busca de problemas comunes de seguridad y salud.",
          text: [
            "Cada estado o territorio da la licencia al cuidado infantil. La licencia fija las reglas mínimas de salud y seguridad que un programa debe cumplir, como la revisión de antecedentes del personal, la formación en salud y seguridad, la preparación del personal y las inspecciones. Las proporciones de niños por adulto y las reglas de formación cambian según el estado, así que busca las tuyas en childcare.gov.",
            "La supervisión va primero: puedes ver y oír a todos los niños, los cuentas seguido (sobre todo al cambiar de salón o al salir) y nunca dejas a los niños solos.",
            "Lavarse las manos detiene los gérmenes: lava con agua y jabón, frotando al menos 20 segundos, después de ir al baño o cambiar pañales, antes de comer o tocar comida y después de jugar afuera. Ayuda también a los niños a lavarse.",
            "Sueño seguro para bebés: acuesta al bebé boca arriba en cada siesta y en la noche, sobre una superficie firme, plana y nivelada, solo con una sábana ajustable. No pongas almohadas, cobijas, protectores ni peluches en la cuna. Busca también peligros: enchufes, cables, objetos pequeños con los que un niño se puede ahogar, productos de limpieza a su alcance y salidas bloqueadas."
          ],
          steps: ["Cuenta a los niños y comprueba que puedes ver y oír a todos.", "Busca peligros: cables, enchufes, objetos pequeños, químicos, salidas bloqueadas.", "Revisa que el lavamanos tenga jabón y toallas y que los adultos lo usen.", "En salones de bebés: boca arriba para dormir, superficie firme y plana, nada en la cuna salvo una sábana ajustable.", "Arregla lo que puedas ahora e informa a tu supervisor del resto."],
          words: [["Licencia", "las reglas mínimas de salud y seguridad del estado que un programa debe cumplir para funcionar legalmente."], ["Proporción", "cuántos niños puede cuidar un adulto; la fija el estado y cambia según la edad."], ["Supervisión", "poder ver y oír siempre a los niños que cuidas."], ["Peligro de asfixia", "un objeto pequeño que un niño pequeño puede meterse en la boca y con el que se puede ahogar."]],
          slides: [
            { title: "La licencia depende del estado", bullets: ["Reglas mínimas de salud y seguridad", "Revisión de antecedentes, formación, inspecciones", "Busca tu estado en childcare.gov"] },
            { title: "Supervisa y cuenta", bullets: ["Ve y oye a cada niño", "Cuenta en cada cambio de lugar", "Nunca dejes a los niños solos"] },
            { title: "Lavado de manos", bullets: ["Agua y jabón, frota 20 segundos", "Después del baño o del pañal, antes de comer, después de jugar afuera"] },
            { title: "Sueño seguro para bebés", bullets: ["Boca arriba, cada vez que duerme", "Superficie firme, plana y nivelada, solo sábana ajustable", "Sin almohadas, cobijas, protectores ni juguetes"] }
          ],
          sources: [
            { name: "Childcare.gov: ¿cómo se regula el cuidado infantil?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov: recursos de estados y territorios", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH): entorno de sueño seguro", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Recorre un cuarto de tu casa (o imagina un salón de clases). Anota cinco cosas que revisarías para la seguridad y la salud, y escribe una solución para cada una. Luego busca la página de cuidado infantil de tu estado en childcare.gov y anota quién da la licencia al cuidado infantil allí.",
          youCanNow: "revisar un salón en busca de problemas de supervisión, lavado de manos, sueño seguro y peligros, y decir quién da la licencia al cuidado infantil en tu estado.",
          quickCheck: [
            { objective: "O2", q: "Un bebé se duerme en una cuna. ¿Cuál de estas formas es segura?", options: ["Boca abajo con una cobija suave", "De lado con una almohada para sostenerlo", "Boca arriba, colchón firme, solo sábana ajustable", "Boca arriba con peluches para que esté cómodo"], answer: 2, why: "Safe to Sleep (campaña de los Institutos Nacionales de Salud de EE. UU.) indica dormir boca arriba sobre una superficie firme y plana, solo con una sábana ajustable." },
            { objective: "O2", q: "Tu grupo entra del patio de juegos. ¿Qué haces primero?", options: ["Contar a los niños", "Empezar de inmediato la siguiente actividad", "Revisar tu teléfono", "Dejar que vayan solos al baño"], answer: 0, why: "Contar en cada cambio de lugar asegura que ningún niño se quedó atrás." }
          ]
        },
        {
          title: "Proteger a los niños: el reporte obligatorio",
          objectives: ["O3"],
          minutes: 5,
          goal: "Describir los pasos para reportar una sospecha de abuso o negligencia infantil.",
          text: [
            "En la mayoría de los estados, quienes trabajan en cuidado infantil son reportantes obligatorios. Eso significa que la ley te exige reportar cuando tienes motivos para sospechar que un niño sufre abuso o negligencia. No necesitas pruebas. La ley de cada estado dice quién debe reportar y cómo, y tu programa tendrá una política por escrito. Conoce las dos antes de tu primer día.",
            "Si un niño está en peligro inmediato, llama primero al 911. Si no, sigue el proceso de tu estado (muchas veces una línea estatal contra el abuso infantil) y la política de tu programa. Si no sabes a dónde llamar, la Childhelp National Child Abuse Hotline (línea nacional de ayuda contra el abuso infantil, 1-800-422-4453) te puede ayudar.",
            "Tu trabajo es reportar, no investigar. No le hagas al niño las mismas preguntas una y otra vez ni enfrentes a la familia. Si un niño te cuenta algo, mantén la calma, escucha, no prometas guardar el secreto y anota sus palabras exactas, la fecha y la hora. Mantenlo en privado: compártelo solo con las personas que indican la ley y tu política."
          ],
          steps: ["Si un niño está en peligro ahora mismo, llama al 911.", "Escucha con calma; no prometas guardar el secreto.", "Anota lo que viste u oíste, palabra por palabra, con fecha y hora.", "Reporta como lo piden la ley de tu estado y la política del programa.", "Mantenlo en privado y no investigues por tu cuenta."],
          words: [["Reportante obligatorio", "una persona a quien la ley le exige reportar sospechas de abuso o negligencia infantil."], ["Negligencia", "no darle a un niño el cuidado básico que necesita, como comida, seguridad, supervisión o atención médica."], ["Sospechar", "tener un motivo para pensar que algo puede estar pasando, sin pruebas."]],
          slides: [
            { title: "Puedes ser reportante obligatorio", bullets: ["La mayoría de los estados incluye al personal de cuidado infantil", "Reportas un motivo de sospecha, no pruebas", "Conoce la ley de tu estado y la política del programa"] },
            { title: "¿Peligro ahora? Llama al 911", bullets: ["Luego sigue el proceso de reporte de tu estado", "¿No sabes? Childhelp: 1-800-422-4453"] },
            { title: "Reporta, no investigues", bullets: ["Escucha con calma; no prometas secretos", "Anota palabras exactas, fecha y hora", "Comparte solo como lo indican la ley y la política"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: cómo reportar el abuso y la negligencia infantil", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov: reportar una preocupación sobre el cuidado infantil", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Busca cómo reportar una sospecha de abuso infantil en tu estado (busca el nombre de tu estado más \"report child abuse\" y usa la página .gov). Escribe el número o la página web en una tarjeta y, al reverso, los cinco pasos de esta lección.",
          youCanNow: "describir los pasos para reportar una sospecha de abuso o negligencia y encontrar dónde reportar en tu estado.",
          quickCheck: [
            { objective: "O3", q: "Un niño te cuenta un secreto: lo lastiman en casa, y te pide que no le digas a nadie. ¿Qué le dices?", options: ["\"Te prometo que no le diré a nadie.\"", "\"¿Estás seguro? Cuéntamelo otra vez.\"", "\"Seguro te lo estás inventando.\"", "\"Gracias por contármelo. Tengo que decírselo a personas que pueden ayudar a cuidarte.\""], answer: 3, why: "Mantienes la calma y nunca prometes guardar el secreto, porque tienes que reportar." },
            { objective: "O3", q: "Ves marcas que te preocupan, pero no tienes pruebas. ¿Qué hace un reportante obligatorio?", options: ["Esperar a tener pruebas", "Reportar como lo piden la ley estatal y la política del programa", "Llamar al padre o a la madre para preguntar qué pasó", "Tomar fotos y publicarlas para avisar a otros"], answer: 1, why: "La ley te pide reportar un motivo de sospecha; investigar es trabajo de la agencia." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El camino a la CDA y la seguridad de los niños",
        questions: [
          { objective: "O1", q: "Para la CDA de Preschool, ¿cuántas horas de trabajo con niños de 3 a 5 años necesitas y en qué plazo?", options: ["480 horas dentro de los 3 años antes de la solicitud", "120 horas en 1 año", "1,000 horas en cualquier momento", "No se necesitan horas de trabajo"], answer: 0, why: "La página Preschool del Council indica 480 horas dentro de los 3 años antes de enviar tu solicitud." },
          { objective: "O1", q: "¿En qué orden ocurren el examen y la visita de verificación?", options: ["La visita siempre es antes de la solicitud", "Las dos ocurren el mismo día", "Primero el examen, luego la visita", "Ninguna es parte de la CDA"], answer: 2, why: "Después de la aprobación programas el examen; la visita se programa después del examen." },
          { objective: "O2", q: "¿Quién fija las reglas de licencia del cuidado infantil, como las proporciones y la formación?", options: ["Los padres de cada niño", "Cada estado o territorio", "El CDA Council", "Cada maestro"], answer: 1, why: "La licencia la dan los estados y territorios, así que las reglas cambian de un lugar a otro." },
          { objective: "O2", q: "¿Cuál es un peligro que debes arreglar en un salón de niños pequeños?", options: ["Monedas y cuentas en un estante bajo", "Jabón en el lavamanos", "Una sábana ajustable en el colchón de la cuna", "Una lista de números de emergencia junto a la puerta"], answer: 0, why: "Los objetos pequeños son un peligro de asfixia para los niños pequeños." },
          { objective: "O3", q: "Un niño llega con una lesión grave y está en peligro ahora mismo. ¿Qué haces primero?", options: ["Anotarlo en tus notas para la próxima semana", "Preguntar a sus amigos qué pasó", "Esperar a que tu supervisor regrese de comer", "Llamar al 911"], answer: 3, why: "Peligro inmediato significa llamar primero al 911 y después seguir el proceso de reporte." }
        ]
      }
    },
    {
      name: "Capítulo 2: Enseñar, observar y tu plan para la CDA",
      lessons: [
        {
          title: "Observar y escribir: las notas de observación",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escribir una nota de observación que registre solo lo que viste y oíste.",
          text: [
            "Observar y registrar el comportamiento de los niños es una de las ocho áreas temáticas de la CDA. Los maestros observan a los niños para saber qué puede hacer cada uno, qué le gusta y qué necesita después. Las buenas notas también ayudan cuando hablas con las familias.",
            "Una buena nota es objetiva: dice lo que viste y oíste, no lo que crees que significa. Escribe \"M. apiló seis bloques, luego los tiró y se rio\" en lugar de \"M. es un niño feliz e inteligente\". Etiquetas como flojo, malo, tímido o travieso no van en las notas.",
            "Incluye la fecha, la hora, el lugar y la inicial del nombre del niño. Cita las palabras exactas del niño. Mantén las notas en privado: son sobre un niño real y le pertenecen al programa."
          ],
          steps: ["Escribe la fecha, la hora, el lugar y la inicial del nombre del niño.", "Observa durante unos minutos.", "Escribe solo acciones y palabras exactas.", "Tacha cualquier etiqueta o suposición.", "Agrega una pregunta o un siguiente paso para el niño, marcado como idea tuya."],
          words: [["Observación", "mirar con atención a un niño para saber lo que puede hacer."], ["Objetivo", "solo hechos que puedes ver u oír, sin opiniones."], ["Registro anecdótico", "una nota corta por escrito sobre algo que un niño hizo o dijo."]],
          slides: [
            { title: "Por qué observamos", bullets: ["Saber lo que puede hacer cada niño", "Planear lo que sigue", "Compartir hechos con las familias"] },
            { title: "Hechos, no etiquetas", bullets: ["Sí: \"apiló 6 bloques, se rio\"", "No: \"inteligente\", \"tímido\", \"malo\"", "Cita las palabras exactas del niño"] },
            { title: "Toda nota lleva", bullets: ["Fecha, hora, lugar", "Solo la inicial del nombre", "Se guarda en privado"] }
          ],
          tryIt: "Observa durante cinco minutos a un niño que conozcas (con permiso de su madre o padre) o un video de niños. Escribe una nota de observación con la fecha, la hora y el lugar. Luego encierra en un círculo cualquier palabra que sea una etiqueta o una suposición y vuelve a escribirla como un hecho.",
          youCanNow: "escribir una nota de observación justa y objetiva, sin etiquetas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué oración va en una nota de observación?", options: ["\"J. es un niño problemático.\"", "\"J. parece triste hoy.\"", "\"J. es más inteligente que los demás.\"", "\"J. dijo 'me toca' y le quitó el camión rojo a T.\""], answer: 3, why: "Registra solo lo que se vio y se oyó, con las palabras exactas del niño." },
            { objective: "O4", q: "¿Qué debe incluir toda nota de observación?", options: ["Fecha, hora, lugar y la inicial del nombre del niño", "El nombre completo y la dirección del niño", "Tu opinión sobre los padres", "Una foto del niño publicada en internet"], answer: 0, why: "La fecha, la hora, el lugar y una inicial dan contexto y protegen la privacidad del niño." }
          ]
        },
        {
          title: "Planear una actividad de aprendizaje",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escribir un plan de actividad corto adecuado para la edad del niño.",
          text: [
            "Los niños pequeños aprenden jugando. Una buena actividad parte de lo que a los niños les gusta y casi pueden hacer, así que es un pequeño reto divertido. Impulsar el desarrollo físico e intelectual de los niños es una de las ocho áreas temáticas de la CDA, y también lo son el desarrollo social y emocional y las relaciones con las familias.",
            "Un plan de actividad corto tiene seis partes: el grupo de edad, un objetivo (lo que harán los niños), los materiales, los pasos, una nota de seguridad y cómo sabrás que funcionó. Ejemplo para niños de 3 y 4 años: Objetivo: ordenar hojas por tamaño. Materiales: hojas recogidas afuera, tres canastas. Pasos: muestra una hoja grande, una mediana y una pequeña; los niños las ordenan; pregunta \"¿Cuál es la más grande?\" Seguridad: lavarse las manos al final, revisar que no haya palitos con punta. Cómo sabes que funcionó: los niños ponen la mayoría de las hojas en la canasta correcta y usan las palabras grande y pequeña.",
            "Planea para todos los niños: ofrece una forma más fácil y una más difícil de hacerlo, usa palabras y dibujos, e invita a las familias a mandar ideas desde casa. Usa materiales lo bastante grandes para que no sean un peligro de asfixia para la edad."
          ],
          steps: ["Elige el grupo de edad y algo que les guste a los niños.", "Escribe un objetivo que harán los niños.", "Anota materiales seguros, gratis o baratos.", "Escribe de 3 a 5 pasos.", "Agrega una nota de seguridad y cómo sabrás que funcionó.", "Nombra el área temática de la CDA que apoya."],
          words: [["Adecuado para el desarrollo", "va con lo que los niños de esa edad suelen poder hacer, con un pequeño reto."], ["Motricidad fina", "movimientos pequeños de las manos y los dedos, como agarrar algo o recortar."], ["Motricidad gruesa", "movimientos grandes del cuerpo, como correr, saltar o trepar."]],
          slides: [
            { title: "Los niños aprenden jugando", bullets: ["Parte de lo que les gusta", "Un pequeño reto divertido"] },
            { title: "Seis partes de un plan", bullets: ["Edad, objetivo, materiales", "Pasos, nota de seguridad", "Cómo sabrás que funcionó"] },
            { title: "Planea para todos los niños", bullets: ["Una forma más fácil y una más difícil", "Palabras y dibujos", "Ideas de las familias"] }
          ],
          tryIt: "Escribe un plan de actividad de una página para niños de 3 a 5 años con cosas que tengas en casa (vasos, calcetines, papel, hojas). Incluye las seis partes y nombra el área temática de la CDA que apoya.",
          youCanNow: "escribir un plan de actividad corto y seguro, adecuado para la edad de los niños, que nombre un área temática de la CDA.",
          quickCheck: [
            { objective: "O5", q: "¿Qué objetivo es mejor para niños de 3 y 4 años?", options: ["Escribir un párrafo completo sobre las hojas", "Ordenar hojas en grandes y pequeñas", "Hacer divisiones largas con hojas", "Leer solos un libro de ciencias"], answer: 1, why: "Ordenar por tamaño es un reto pequeño y divertido para niños de preescolar." },
            { objective: "O5", q: "Tu plan para niños de 3 años usa cuentas pequeñas. ¿Qué le falta al plan?", options: ["Una lista de pasos más larga", "Un objetivo más difícil", "Una nota de seguridad: las cuentas son un peligro de asfixia, así que usa objetos más grandes", "Más cuentas"], answer: 2, why: "Todo plan necesita una nota de seguridad, y los objetos pequeños son un riesgo de asfixia para los niños pequeños." }
          ]
        },
        {
          title: "Tu portafolio, el examen, la visita y tu plan",
          objectives: ["O6"],
          minutes: 6,
          goal: "Hacer un plan de preparación para la CDA con fechas, desde la formación hasta la visita de verificación.",
          text: [
            "El portafolio reúne tus propios escritos y recursos sobre tu trabajo con niños y familias. El libro de Competency Standards del Council para tu entorno (para Preschool, la edición verde) explica exactamente qué va en él. Consigue el libro pronto y llena el portafolio poco a poco; debe estar terminado dentro de los 6 meses antes de la solicitud.",
            "Planea hacia atrás desde las fechas importantes. Las horas de trabajo solo cuentan si están dentro de los 3 años antes de tu solicitud, así que empieza ya un registro sencillo: fecha, lugar, edades y horas, firmado por un supervisor si tu programa lo permite. Elige una formación que cubra las ocho áreas temáticas y guarda cada certificado.",
            "Prepárate para el examen repasando las ocho áreas temáticas, practicando preguntas de situaciones como las de este curso y reservando un centro de exámenes Pearson VUE cuando recibas tu aviso Ready to Schedule (listo para programar). Antes de la visita de verificación, practica cómo hablar de tus fortalezas y de un área en la que estás creciendo. Revisa cada tarifa y cada paso en cdacouncil.org y pregunta por becas."
          ],
          steps: ["Escribe la fecha de hoy y tu entorno.", "Elige un programa de formación y una fecha meta para terminar las 120 horas.", "Empieza un registro de horas de trabajo y fija una fecha para llegar a las horas que pide tu entorno.", "Fija una fecha para empezar el portafolio y una fecha de solicitud dentro de los 6 meses siguientes.", "Agrega los meses meta para el examen y la visita de verificación.", "Pon las fechas en el calendario de tu teléfono o en un calendario de papel."],
          words: [["Libro de Competency Standards", "el libro del Council para tu entorno que explica el portafolio y los estándares."], ["Aviso Ready to Schedule", "el mensaje del Council que dice que ya puedes reservar tu examen o tu visita."], ["Registro de horas de trabajo", "un registro de las fechas y horas que trabajaste con niños."]],
          slides: [
            { title: "Tu portafolio", bullets: ["Consigue el libro de Competency Standards de tu entorno", "Llénalo poco a poco", "Termínalo dentro de 6 meses antes de la solicitud"] },
            { title: "Planea hacia atrás", bullets: ["Horas de trabajo: dentro de 3 años antes de la solicitud", "Formación: las 8 áreas, guarda los certificados", "Registra las horas desde el primer día"] },
            { title: "Examen y visita", bullets: ["Repasa las 8 áreas temáticas", "Reserva Pearson VUE después del aviso Ready to Schedule", "Practica cómo hablar de tus fortalezas"] }
          ],
          sources: [
            { name: "CDA Council: camino Preschool", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: caminos para educadores (todos los entornos)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE: examen de la CDA", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Tarea final: haz tu plan de preparación para la CDA con fechas reales para la formación, las horas de trabajo, el portafolio, la solicitud, el examen y la visita de verificación. Adjunta tu plan de actividad de la lección 5 como tu primera pieza para el portafolio.",
          youCanNow: "convertir los pasos de la CDA en tu propio plan con fechas, listo para empezar.",
          quickCheck: [
            { objective: "O6", q: "Trabajaste en un preescolar hace cuatro años y quieres enviar la solicitud el próximo mes. ¿Qué debes revisar?", options: ["Nada; todas las horas pasadas cuentan para siempre", "Si todavía necesitas un diploma", "Si el examen es opcional", "Si tus horas están dentro de los 3 años antes de tu solicitud"], answer: 3, why: "Las horas de experiencia deben estar dentro de los 3 años antes de enviar tu solicitud." },
            { objective: "O6", q: "¿Cuándo debes empezar tu registro de horas de trabajo?", options: ["Ahora, desde tu primer día con niños", "Después de aprobar el examen", "Solo después de la visita de verificación", "Nunca; el Council las cuenta por ti"], answer: 0, why: "Un registro desde el primer día mantiene claras tus horas y fechas cuando envías la solicitud." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Enseñar, observar y tu plan para la CDA",
        questions: [
          { objective: "O4", q: "¿Cuál es una observación objetiva?", options: ["\"A. es flojo a la hora de recoger.\"", "\"A. se sentó en la alfombra y miró mientras los demás guardaban los bloques.\"", "\"A. nunca ayuda.\"", "\"A. es el que peor escucha.\""], answer: 1, why: "Describe solo lo que se vio, sin etiquetas." },
          { objective: "O4", q: "¿Cómo debes proteger la privacidad de un niño en tus notas?", options: ["Publicar las notas en un chat de grupo de padres", "Usar el nombre completo y la dirección del niño", "Usar la inicial del nombre y guardar las notas en el programa", "Compartirlas con cualquiera que las pida"], answer: 2, why: "Las iniciales y guardar las notas en el programa protegen al niño." },
          { objective: "O5", q: "¿Qué parte te dice si una actividad funcionó?", options: ["Cómo sabrás que funcionó", "La lista de materiales", "El grupo de edad", "El título"], answer: 0, why: "Decir cómo sabrás que funcionó te permite comprobar el objetivo." },
          { objective: "O5", q: "¿Cómo planeas para niños con distintas habilidades en una misma actividad?", options: ["Dar a todos la versión más difícil", "Dejar fuera a los niños a quienes les cuesta", "Hacer la actividad solo una vez al año", "Ofrecer una forma más fácil y una más difícil de hacerla"], answer: 3, why: "Las versiones más fácil y más difícil permiten que todos participen y den un pequeño paso más." },
          { objective: "O6", q: "¿En qué plazo antes de la solicitud debe prepararse el portafolio de la CDA de Preschool?", options: ["3 años", "6 meses", "1 semana", "10 años"], answer: 1, why: "La página del Council dice que el portafolio se prepara dentro de los 6 meses antes de enviar tu solicitud." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Educación de la primera infancia y preparación para la credencial CDA",
    questions: [
      { objective: "O1", q: "¿Qué hace este curso por tu CDA?", options: ["Otorga la CDA", "Reemplaza el examen", "Te prepara; el Council otorga la credencial", "Cuenta como tu visita de verificación"], answer: 2, why: "El Council for Professional Recognition otorga la CDA; este curso te prepara." },
      { objective: "O1", q: "¿Cuántas áreas temáticas de la CDA deben cubrir tus 120 horas de formación?", options: ["Ocho, con al menos 10 horas cada una", "Dos", "Solo una que tú elijas", "Doce, con 5 horas cada una"], answer: 0, why: "El Council pide al menos 10 horas en cada una de las ocho áreas temáticas." },
      { objective: "O1", q: "¿Dónde se presenta el examen de la CDA?", options: ["En tu centro de cuidado infantil", "En un centro de exámenes Pearson VUE", "En la oficina de licencias de manejo", "Por teléfono"], answer: 1, why: "El examen de la CDA es en computadora, en un centro de exámenes Pearson VUE." },
      { objective: "O1", q: "¿Qué pasa durante la visita de verificación?", options: ["Pagas tu tarifa en efectivo", "Presentas el examen escrito", "Un padre califica tu forma de enseñar", "Un PD Specialist revisa tu portafolio, te observa trabajar y conversa contigo"], answer: 3, why: "El PD Specialist revisa el portafolio, te observa con los niños y tiene una conversación de reflexión contigo." },
      { objective: "O2", q: "¿Dónde encuentras los contactos de licencia de cuidado infantil de tu estado?", options: ["En un grupo de redes sociales", "En los recursos estatales de childcare.gov", "En un blog cualquiera", "En el examen de la CDA"], answer: 1, why: "Childcare.gov tiene enlaces a los recursos de cada estado y territorio." },
      { objective: "O2", q: "¿Cuánto tiempo debes frotarte las manos con jabón?", options: ["Al menos 20 segundos", "2 segundos", "Solo si se ven sucias", "Solo enjuagarlas con agua"], answer: 0, why: "Frotar con jabón al menos 20 segundos quita los gérmenes." },
      { objective: "O2", q: "¿Qué va en la cuna de un bebé para dormir?", options: ["Una almohada y una cobija", "Peluches", "Protectores de cuna", "Solo una sábana ajustable sobre un colchón firme y plano"], answer: 3, why: "Safe to Sleep dice que no haya nada en la cuna salvo una sábana ajustable sobre una superficie firme, plana y nivelada." },
      { objective: "O2", q: "Las proporciones (cuántos niños por adulto) son:", options: ["Iguales en todas partes", "Elegidas por cada maestro", "Fijadas por las reglas de licencia de cada estado", "Fijadas por los padres"], answer: 2, why: "Los estados fijan las proporciones, y cambian según el estado y la edad." },
      { objective: "O3", q: "Un reportante obligatorio debe reportar cuando:", options: ["Tiene pruebas", "Tiene un motivo para sospechar abuso o negligencia", "Recibe permiso de la familia", "Termina una investigación"], answer: 1, why: "La ley pide un reporte ante una sospecha razonable; no necesitas pruebas." },
      { objective: "O3", q: "¿Qué es parte de TU trabajo después de que un niño te cuenta que lo lastiman?", options: ["Anotar sus palabras exactas, la fecha y la hora", "Hacerle preguntas al niño muchas veces", "Enfrentar al padre o a la madre", "Prometer guardar el secreto"], answer: 0, why: "Tú anotas los hechos y reportas; la agencia investiga." },
      { objective: "O3", q: "No sabes dónde reportar en tu estado. ¿Quién te puede ayudar?", options: ["Un vecino", "Los compañeros de clase del niño", "La Childhelp National Child Abuse Hotline", "Nadie, así que esperas"], answer: 2, why: "Childhelp (1-800-422-4453) te ayuda a llegar al lugar correcto; llama al 911 si un niño está en peligro." },
      { objective: "O4", q: "¿Qué palabra NO va en una nota de observación?", options: ["\"caminó\"", "\"dijo\"", "\"apiló\"", "\"travieso\""], answer: 3, why: "\"Travieso\" es una etiqueta; las notas registran acciones y palabras." },
      { objective: "O4", q: "¿Por qué los maestros escriben notas de observación?", options: ["Para castigar a los niños", "Para saber lo que puede hacer cada niño y planear los siguientes pasos", "Para publicarlas en internet", "Para comparar a las familias de los niños"], answer: 1, why: "Las notas te ayudan a planear y a compartir hechos con las familias." },
      { objective: "O4", q: "Un niño dice: \"¡Hice un cohete!\" ¿Cómo lo registras?", options: ["Escribes las palabras exactas entre comillas", "Escribes \"el niño es creativo\"", "No lo anotas", "Escribes lo que crees que quiso decir"], answer: 0, why: "Citar las palabras exactas mantiene la nota objetiva." },
      { objective: "O5", q: "Los niños pequeños aprenden mejor con:", options: ["Clases largas", "Hojas de ejercicios todo el día", "Juego con un pequeño reto divertido", "Quedarse quietos y esperar"], answer: 2, why: "El juego que los reta un poco es la forma en que aprenden los niños pequeños." },
      { objective: "O5", q: "¿Cuál es un plan de actividad completo?", options: ["\"Hacer arte.\"", "\"Hojas.\"", "\"Divertirse.\"", "Edad, objetivo, materiales, pasos, nota de seguridad y cómo sabrás que funcionó"], answer: 3, why: "Las seis partes forman un plan que otra persona podría usar." },
      { objective: "O5", q: "Correr, saltar y trepar son:", options: ["Habilidades de motricidad gruesa", "Habilidades de motricidad fina", "Habilidades de lectura", "Habilidades de matemáticas"], answer: 0, why: "La motricidad gruesa usa los músculos grandes del cuerpo." },
      { objective: "O6", q: "Tus horas de experiencia solo cuentan si están dentro de:", options: ["Los 10 años antes de la solicitud", "Los 3 años antes de la solicitud", "El mes antes de la solicitud", "Cualquier momento de tu vida"], answer: 1, why: "La página del Council dice dentro de los 3 años antes de enviar tu solicitud." },
      { objective: "O6", q: "¿Qué libro explica lo que va en tu portafolio?", options: ["Cualquier revista para padres", "El manual de manejo de tu estado", "El libro de Competency Standards del Council para tu entorno", "Un libro de cocina"], answer: 2, why: "El libro de Competency Standards de tu entorno tiene las instrucciones del portafolio." },
      { objective: "O6", q: "¿Cuál es el mejor primer paso para tu plan de la CDA?", options: ["Reservar hoy la visita de verificación", "Pagar todas las tarifas antes de revisar", "Esperar a tener 480 horas y luego pensarlo", "Elegir tu entorno y escribir fechas para la formación, las horas, el portafolio, el examen y la visita"], answer: 3, why: "Un plan con fechas que empieza por tu entorno te mantiene dentro de los plazos." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿qué sabes ya?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte y vuelve a revisarla.",
    criteria: [
      { name: "Requisitos correctos", objective: "O1", notYet: "Faltan pasos o las horas y los plazos están mal.", meets: "Anota bien el entorno, las 120 horas de formación en las ocho áreas temáticas, las horas de trabajo, el portafolio, el examen y la visita.", exceeds: "También anota la tarifa actual, una beca que solicitar y la fecha de renovación, todo revisado en cdacouncil.org." },
      { name: "Plan con fechas", objective: "O6", notYet: "No tiene fechas, o las fechas no respetan los plazos de 3 años o de 6 meses.", meets: "Fechas meta reales para cada paso que mantienen la experiencia dentro de los 3 años y el portafolio dentro de los 6 meses antes de la solicitud.", exceeds: "Incluye un registro de horas de trabajo empezado hoy y recordatorios en el calendario." },
      { name: "Plan de actividad", objective: "O5", notYet: "Falta un objetivo, una nota de seguridad o una forma de comprobar que funcionó.", meets: "Edad, objetivo, materiales, pasos, nota de seguridad, cómo sabrás que funcionó y un área temática de la CDA.", exceeds: "Agrega una versión más fácil y una más difícil, y una forma de incluir a las familias." },
      { name: "Pensar en la seguridad", objective: "O2", notYet: "La actividad o el plan no toma en cuenta la supervisión, el lavado de manos o los peligros de asfixia.", meets: "La nota de seguridad cubre la supervisión y cualquier peligro de los materiales.", exceeds: "Nombra quién da la licencia al cuidado infantil en su estado y una formación que exige." },
      { name: "Listo para observar y reportar", objective: "O4", notYet: "La nota de ejemplo usa etiquetas, o no hay un contacto estatal para reportar por escrito.", meets: "Incluye una nota de observación objetiva y la tarjeta con el contacto de reporte del estado.", exceeds: "La nota lleva a un siguiente paso claro para el niño, marcado como idea del participante." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en una formación para la CDA que cubre las ocho áreas temáticas en un plazo de 60 días",
      "Participantes que solicitan la CDA, y quienes la obtienen, en un plazo de 12 a 18 meses (encuesta de seguimiento)",
      "Participantes contratados o ascendidos en un trabajo de cuidado infantil, Head Start o preescolar en un plazo de 6 meses",
      "Los programas aliados informan que el personal nuevo conoce el sueño seguro, la supervisión y el reporte obligatorio desde el primer día"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para abrir cdacouncil.org y childcare.gov, o copias impresas de esas páginas",
      "Papel, pluma y un calendario de papel o del teléfono",
      "Objetos de la casa para el plan de actividad (vasos, calcetines, papel, hojas)",
      "Opcional: el libro de Competency Standards del Council para el entorno del participante",
      "Unos 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Este curso prepara a los participantes; no cuenta como horas de formación para la CDA, a menos que tu programa esté organizado para otorgarlas. Indica a los participantes una formación aprobada para las 120 horas.",
      "Antes de enseñar, revisa los requisitos, las tarifas y las becas actuales de la CDA en cdacouncil.org, y las reglas de licencia y de reporte obligatorio de tu estado; cambian.",
      "Práctica de observación: usa videos de niños o el propio hijo de un participante, con permiso de su madre o padre. Nunca reúnas fotos ni nombres reales de los hijos de otras personas.",
      "El reporte obligatorio puede despertar recuerdos difíciles. Da un aviso de contenido antes de la lección 3, permite pausas y comparte recursos de apoyo locales.",
      "Participantes con antecedentes penales: la revisión de antecedentes es parte del trabajo en cuidado infantil. Ayúdales a buscar las reglas de su estado y ponlos en contacto con asistencia legal en lugar de adivinar.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

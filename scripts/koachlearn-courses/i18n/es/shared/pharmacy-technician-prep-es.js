"use strict";

// Koach Learn course (Spanish translation of shared/pharmacy-technician-prep.js). See scripts/koachlearn-courses/README.md, "Translations".
// Safety: no real doses or dosing advice. All prescriptions and math problems use made-up drugs ("Drug X") and are marked practice only.

module.exports = {
  id: "pharmacy-technician-prep-es",
  lang: "es",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Preparación para técnico de farmacia",
  skills: "Elegir una certificación y revisar las reglas de tu estado, Leer una receta, Matemáticas de farmacia de práctica, Controles de seguridad de medicamentos, Saber qué le toca al farmacéutico, Proteger la privacidad del paciente (HIPAA)",
  outcome: "armar tu propio plan de estudio y de examen para técnico de farmacia, y mostrar las habilidades básicas que evalúa: leer una receta de práctica, resolver problemas de matemáticas de farmacia de práctica, hacer los controles de seguridad que hace un técnico, pasar las preguntas clínicas al farmacéutico y mantener privada la información de los pacientes.",
  about: [
    "Los técnicos de farmacia ayudan a los farmacéuticos en farmacias de tiendas, hospitales, farmacias por correo y clínicas. Reciben recetas, las ingresan en la computadora, cuentan y etiquetan medicamentos, manejan el inventario y atienden a los clientes. En Estados Unidos, muchos estados exigen que los técnicos se registren ante la junta de farmacia del estado (state board of pharmacy), y muchos empleadores piden una certificación nacional.",
    "Este curso te prepara para ese camino. Vas a comparar las dos certificaciones nacionales (el CPhT de PTCB, que se obtiene al aprobar el examen PTCE, y el CPhT de NHA, que se obtiene al aprobar el examen ExCPT), revisar las reglas de tu estado, leer recetas de práctica, hacer matemáticas de farmacia de práctica, aprender los controles de seguridad y las reglas federales que sigue un técnico, y proteger la privacidad de los pacientes según HIPAA.",
    "Este curso no te certifica ni te registra, y nunca da consejos médicos. Todas las recetas y todos los problemas de matemáticas son inventados y están marcados como solo práctica. Las preguntas de los pacientes sobre medicamentos siempre van al farmacéutico.",
    "Cada lección dura unos cinco minutos y termina con una tarea de \"Pruébalo ahora\" en papel. Después de cada lección hay una comprobación corta, una comprobación de conocimientos cierra cada capítulo y un examen de 20 preguntas cierra el curso. Tu tarea final es tu propio plan de estudio y de examen con un cuaderno de práctica."
  ],
  finalTask: "Arma tu propio plan de estudio y de examen para técnico de farmacia: escribe el examen que vas a tomar (PTCE o ExCPT), lo que exige la junta de farmacia de tu estado y fechas de estudio semanales hasta una fecha meta de examen. Agrega un cuaderno de práctica: 5 recetas inventadas que leíste y revisaste, 10 problemas de matemáticas de práctica con el procedimiento escrito y una lista de 5 preguntas de clientes que pasarías al farmacéutico.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Personas adultas que buscan un trabajo estable en el área de la salud sin una carrera larga: personas que buscan empleo, jóvenes adultos, inmigrantes, veteranos y adultos que vuelven a estudiar. Algunas ya trabajan en comercio. Muchas nunca han trabajado en una farmacia.",
    startingPoint: "Pueden leer inglés cotidiano, hacer cuentas básicas con calculadora y usar un teléfono o una computadora de la biblioteca. La mayoría no conoce nombres de medicamentos, abreviaturas de recetas, matemáticas de farmacia ni leyes de farmacia.",
    gap: "Los trabajos y los exámenes de técnico de farmacia exigen leer recetas con exactitud, hacer cuentas con cuidado, hacer controles de seguridad, conocer las reglas federales y estatales y cuidar mucho la privacidad. Los errores pueden dañar a los pacientes. Los participantes necesitan conocer el camino hacia la credencial y las reglas de su estado, y practicar estas habilidades de forma segura antes de la capacitación o del examen.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas; se explica cada palabra de farmacia",
      "Dispositivos: un teléfono o una computadora de la biblioteca; basta con papel y una calculadora básica",
      "Seguridad: ninguna dosis real ni consejo de dosis; todos los medicamentos y números son inventados y están marcados como solo práctica",
      "Las reglas cambian según el estado: cada participante revisa la junta de farmacia de su estado",
      "La certificación y el registro estatal pueden preguntar por antecedentes penales; cada participante revisa las reglas oficiales",
      "Privacidad: ninguna información real de pacientes en ninguna tarea"
    ],
    prerequisites: "Aritmética básica: fracciones, decimales y multiplicación. \"Alfabetización en salud\" ayuda, pero no es obligatorio."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Usando las páginas oficiales de PTCB, NHA y la junta de farmacia del estado", action: "comparar los dos exámenes nacionales de técnico y escribir un plan de estudio y de examen que cumpla las reglas de tu estado", standard: "con cada requisito revisado en una página oficial" },
    { id: "O2", condition: "Con una receta inventada", action: "nombrar sus partes y reescribir las indicaciones con palabras sencillas", standard: "acertando por completo al menos 4 de 5 recetas de práctica" },
    { id: "O3", condition: "Con problemas de solo práctica con números inventados y una calculadora básica", action: "resolver problemas de matemáticas de farmacia de conversión de unidades, cantidad y días de suministro", standard: "acertando al menos 8 de 10 con el procedimiento escrito" },
    { id: "O4", condition: "Con un pedido de práctica ya preparado y su frasco de inventario", action: "comparar el paciente, el medicamento, la concentración y el NDC con la receta y señalar cualquier diferencia", standard: "encontrando todas las diferencias puestas a propósito" },
    { id: "O5", condition: "Con situaciones de farmacia de práctica", action: "clasificar cada tarea como trabajo del técnico o del farmacéutico y seguir las reglas adicionales para sustancias controladas", standard: "pasando cada pregunta clínica al farmacéutico" },
    { id: "O6", condition: "En el mostrador de la farmacia o por teléfono", action: "compartir la información de los pacientes solo con quien la necesita, y solo lo mínimo que necesita", standard: "en cada situación de práctica, cumpliendo HIPAA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: El trabajo, las recetas y las matemáticas",
      lessons: [
        {
          title: "El trabajo, las certificaciones y las reglas de tu estado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar los exámenes PTCE y ExCPT y encontrar las reglas para técnicos de tu estado.",
          text: [
            "Los técnicos de farmacia reciben recetas, las ingresan en la computadora, cuentan y etiquetan medicamentos, manejan el inventario, cobran en la caja y atienden a los clientes. Un farmacéutico revisa el trabajo y responde todas las preguntas sobre medicamentos.",
            "Hay dos certificaciones nacionales, y las dos dan el título Certified Pharmacy Technician (CPhT, técnico de farmacia certificado). PTCB, la Pharmacy Technician Certification Board (junta de certificación de técnicos de farmacia), se lo da a quienes aprueban el examen PTCE. Para poder presentarlo se pide, entre otras cosas, un programa de capacitación reconocido por PTCB o suficiente experiencia de trabajo. NHA, la National Healthcareer Association (asociación nacional de carreras de salud), se lo da a quienes aprueban el examen ExCPT, con un programa de capacitación o experiencia de trabajo supervisada.",
            "La junta de farmacia de tu estado decide qué pueden hacer los técnicos y si debes registrarte o tener licencia antes de trabajar. Las reglas cambian mucho de un estado a otro. La National Association of Boards of Pharmacy (NABP, asociación nacional de juntas de farmacia) tiene la lista de todas las juntas estatales.",
            "Los costos, los requisitos y las reglas de los exámenes cambian, y las dos certificaciones te piden informar antecedentes penales o acciones de una junta. Lee las páginas oficiales antes de pagar. Este curso te prepara; no te certifica ni te registra."
          ],
          steps: ["Abre la página del CPhT de PTCB y la página de técnico de farmacia de NHA.", "Anota para cada una: el nombre del examen, cómo calificas y cada cuánto se renueva.", "Busca la junta de farmacia de tu estado en la lista de NABP.", "Escribe lo que exige tu estado antes de que puedas trabajar como técnico.", "Elige tu examen y un mes meta."],
          words: [["Técnico de farmacia", "trabajador capacitado que ayuda al farmacéutico a preparar y entregar medicamentos."], ["Farmacéutico", "el profesional con licencia que revisa las recetas y aconseja a los pacientes sobre sus medicamentos."], ["CPhT", "Certified Pharmacy Technician (técnico de farmacia certificado), el título que dan PTCB o NHA después de sus exámenes."], ["Junta de farmacia del estado", "la agencia del estado que da licencia a los farmacéuticos y pone las reglas para los técnicos."]],
          slides: [
            { title: "Lo que hacen los técnicos", bullets: ["Reciben e ingresan recetas", "Cuentan, etiquetan y acomodan medicamentos", "Atienden a clientes; el farmacéutico revisa y aconseja"] },
            { title: "Dos exámenes nacionales", bullets: ["PTCB: el examen PTCE", "NHA: el examen ExCPT", "Los dos dan el título CPhT"] },
            { title: "Tu estado decide", bullets: ["Registro o licencia antes de trabajar", "Qué pueden hacer los técnicos", "Busca tu junta en la lista de NABP"] },
            { title: "Revisa antes de pagar", bullets: ["Los costos y las reglas cambian", "Los dos preguntan por antecedentes penales o acciones de una junta", "Este curso te prepara; no te certifica"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: juntas de farmacia de los estados", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Haz una tabla de dos columnas: PTCE y ExCPT. Llena quién lo da, cómo calificas y cada cuánto se renueva, con datos de las páginas oficiales. Debajo, escribe lo que exige la junta de farmacia de tu estado antes de que puedas trabajar como técnico, y la dirección web donde lo encontraste.",
          youCanNow: "decir lo que hacen los técnicos, nombrar los dos exámenes nacionales y quién los da, y encontrar las reglas para técnicos de tu estado.",
          quickCheck: [
            { objective: "O1", q: "¿Quién da el examen PTCE?", options: ["La oficina de vehículos de tu estado", "Cualquier farmacia", "PTCB, la Pharmacy Technician Certification Board", "La FDA"], answer: 2, why: "PTCB da el PTCE; quien lo aprueba obtiene el CPhT de PTCB." },
            { objective: "O1", q: "¿Quién decide si debes registrarte antes de trabajar como técnico?", options: ["La junta de farmacia de tu estado", "El gerente de la tienda", "El cliente", "Un anuncio de capacitación"], answer: 0, why: "Cada junta de farmacia estatal pone las reglas de registro y de trabajo de los técnicos." }
          ]
        },
        {
          title: "Leer una receta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Nombrar las partes de una receta de práctica y reescribir sus indicaciones con palabras sencillas.",
          text: [
            "Una receta tiene partes fijas: el nombre y la fecha de nacimiento del paciente, el nombre del medicamento, la concentración (por ejemplo 10 mg), la forma farmacéutica (tableta, cápsula, líquido), las indicaciones (llamadas sig), la cantidad, el número de resurtidos, la fecha, y el nombre y la firma de quien receta.",
            "Las indicaciones suelen usar abreviaturas del latín. Las más comunes: po (por la boca), bid (dos veces al día), tid (tres veces al día), qid (cuatro veces al día), prn (según sea necesario), hs (al acostarse). La etiqueta debe estar en palabras sencillas, así que \"1 tab po bid\" se convierte en \"Tome 1 tableta por la boca dos veces al día.\"",
            "Algunas abreviaturas causan errores, por eso los grupos de seguridad dicen que no se usen. Por ejemplo, \"QD\" (diario) se ha confundido con \"QID\" (cuatro veces al día), y la \"U\" de unidades se ha leído como un cero. Cuidado también con los decimales: escribe 0.5 mg (con un cero adelante), nunca .5 mg, y nunca 5.0 mg (un cero al final se puede leer como 50).",
            "Si algo no está claro, falta o parece mal, no adivines. Señálalo al farmacéutico."
          ],
          steps: ["Revisa el nombre y la fecha de nacimiento del paciente.", "Encuentra el nombre del medicamento, la concentración y la forma farmacéutica.", "Lee el sig y reescríbelo con palabras sencillas.", "Revisa la cantidad, los resurtidos, la fecha y quién receta.", "Señala al farmacéutico todo lo que no esté claro o falte."],
          words: [["Sig", "las indicaciones de una receta que le dicen al paciente cómo tomar el medicamento."], ["Concentración", "cuánto medicamento hay en cada unidad, por ejemplo 10 mg en una tableta."], ["Forma farmacéutica", "el tipo de medicamento: tableta, cápsula, líquido, crema, etc."], ["Resurtido", "una repetición permitida de la misma receta."], ["Quien receta", "la persona con licencia que escribió la receta, como un médico o una enfermera practicante."]],
          slides: [
            { title: "Partes de una receta", bullets: ["Nombre y fecha de nacimiento del paciente", "Medicamento, concentración y forma farmacéutica", "Sig, cantidad, resurtidos, fecha, quien receta"] },
            { title: "Abreviaturas comunes", bullets: ["po = por la boca  •  prn = según sea necesario", "bid = dos veces al día  •  tid = tres veces", "qid = cuatro veces  •  hs = al acostarse"] },
            { title: "Escritura que causa errores", bullets: ["QD se puede leer como QID: escribe \"diario\"", "U puede parecer 0: escribe \"unidades\"", "Escribe 0.5 (cero adelante), nunca 5.0 (cero al final)"] },
            { title: "Si tienes dudas", bullets: ["No adivines", "Señálalo al farmacéutico"] }
          ],
          tryIt: "Solo práctica, medicamentos inventados. Reescribe cada sig con palabras sencillas: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Respuestas: (1) Tome 1 tableta por la boca dos veces al día. (2) Tome 2 cápsulas por la boca al acostarse. (3) Tome 1 tableta por la boca cada 6 horas según sea necesario. Luego haz la lista de las partes que le faltan a esta nota: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "nombrar las partes de una receta, leer las abreviaturas comunes del sig, notar la escritura que causa errores y señalar las órdenes que no están claras.",
          quickCheck: [
            { objective: "O2", q: "En práctica, ¿qué significa \"1 tab po tid\"?", options: ["Tomar 1 tableta al acostarse", "Tomar 1 tableta por la boca tres veces al día", "Tomar 1 tableta un día sí y otro no", "Tomar 3 tabletas una sola vez"], answer: 1, why: "po significa por la boca y tid significa tres veces al día." },
            { objective: "O2", q: "Una receta de práctica no tiene indicaciones (sig). ¿Qué haces?", options: ["Escribes tú las indicaciones de siempre", "Dejas la etiqueta en blanco", "Le preguntas al cliente cómo lo toma", "Lo señalas al farmacéutico"], answer: 3, why: "Una parte que falta o no está clara nunca se adivina; el farmacéutico lo resuelve con quien recetó." }
          ]
        },
        {
          title: "Matemáticas de farmacia de práctica",
          objectives: ["O3"],
          minutes: 6,
          goal: "Resolver problemas de solo práctica de conversiones, cantidad y días de suministro.",
          text: [
            "Solo práctica: son números inventados para practicar para el examen, nunca indicaciones para un paciente real. En el trabajo real, el farmacéutico revisa cada cálculo.",
            "Conversiones que debes saber: 1 gramo (g) = 1,000 miligramos (mg). 1 litro (L) = 1,000 mililitros (mL). 1 kilogramo (kg) es más o menos 2.2 libras (lb). 1 cucharadita (tsp) = 5 mL y 1 cucharada (tbsp) = 15 mL. 1 onza líquida es más o menos 30 mL.",
            "Los días de suministro dicen cuánto va a durar el medicamento: días de suministro = cantidad ÷ cantidad que se usa por día. Práctica: Drug X, 1 tableta dos veces al día, 60 tabletas. Se usan 2 por día. 60 ÷ 2 = 30 días. La cantidad funciona al revés: cantidad = cantidad por día × días. Práctica: Drug Y, 1 cápsula tres veces al día durante 10 días = 3 × 10 = 30 cápsulas.",
            "Escribe siempre las unidades, plantea el problema antes de usar la calculadora y revisa si la respuesta tiene sentido. Un suministro de 30 días de 6,000 tabletas no lo tiene."
          ],
          steps: ["Escribe lo que sabes, con unidades.", "Escribe lo que necesitas encontrar.", "Convierte a las mismas unidades si hace falta.", "Plantea el problema y luego calcula.", "Pregúntate: ¿tiene sentido la respuesta?"],
          words: [["mg", "miligramo: la milésima parte de un gramo."], ["mL", "mililitro: la milésima parte de un litro."], ["Días de suministro", "cuántos días dura una receta si se toma como se indica."], ["Conversión", "cambiar un número de una unidad a otra, como de gramos a miligramos."]],
          slides: [
            { title: "Solo práctica", bullets: ["Números inventados para practicar para el examen", "El farmacéutico revisa cada cálculo real"] },
            { title: "Conversiones que debes saber", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Días de suministro y cantidad", bullets: ["Días = cantidad ÷ cantidad por día", "60 tabletas ÷ 2 al día = 30 días", "Cantidad = por día × días: 3 × 10 = 30"] },
            { title: "Trabaja como profesional", bullets: ["Escribe las unidades siempre", "Plantea antes de calcular", "Revisa si la respuesta tiene sentido"] }
          ],
          tryIt: "Solo práctica, números inventados. Resuelve y muestra tu procedimiento: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, 1 tableta 3 veces al día, 90 tabletas: ¿días de suministro? (5) Drug Y, 2 cápsulas dos veces al día durante 14 días: ¿cantidad? Respuestas: 2,500 mg; 15 mL; 60 kg; 30 días; 56 cápsulas.",
          youCanNow: "convertir unidades comunes y calcular días de suministro y cantidad en problemas de práctica, mostrando tu procedimiento.",
          quickCheck: [
            { objective: "O3", q: "Solo práctica: ¿cuántos miligramos hay en 0.5 gramos?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, así que 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Solo práctica: Drug X, 1 tableta dos veces al día, 28 tabletas. ¿Cuántos días de suministro son?", options: ["14 días", "28 días", "56 días", "7 días"], answer: 0, why: "Días de suministro = 28 tabletas ÷ 2 por día = 14 días." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: El trabajo, las recetas y las matemáticas",
        questions: [
          { objective: "O1", q: "¿Qué examen da NHA para técnicos de farmacia?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "El examen de técnico de farmacia de NHA es el ExCPT." },
          { objective: "O1", q: "¿Dónde encuentras la junta de farmacia de tu estado?", options: ["En la lista de juntas de farmacia de NABP", "En un anuncio de una farmacéutica", "En un sitio web de cupones", "En la parte de atrás de un frasco de pastillas"], answer: 0, why: "NABP tiene la lista de todas las juntas de farmacia estatales con su sitio web." },
          { objective: "O2", q: "¿Qué significa \"prn\" en una receta de práctica?", options: ["Por la boca", "Al acostarse", "Dos veces al día", "Según sea necesario"], answer: 3, why: "prn significa según sea necesario." },
          { objective: "O2", q: "¿Qué forma de escribir una concentración es segura?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Usa un cero adelante y ningún cero al final, para que 0.5 mg no se lea mal." },
          { objective: "O3", q: "Solo práctica: ¿a cuántos mililitros equivalen 2 cucharadas?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, así que 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Capítulo 2: Seguridad, reglas y privacidad",
      lessons: [
        {
          title: "Controles de seguridad: el medicamento correcto para el paciente correcto",
          objectives: ["O4"],
          minutes: 5,
          goal: "Comparar un pedido de práctica con la receta y señalar cualquier diferencia.",
          text: [
            "La mayoría de los errores vienen de descuidos pequeños: el paciente equivocado, un medicamento con un nombre parecido, la concentración equivocada o el frasco equivocado del estante. Los técnicos ayudan a detectarlos antes de la revisión final del farmacéutico.",
            "Usa dos identificadores del paciente, como el nombre completo y la fecha de nacimiento, cada vez que recibes o entregas una receta. Dos personas pueden tener el mismo nombre.",
            "Cada empaque de medicamento tiene un National Drug Code (NDC, código nacional de medicamentos), el número de tres partes de la FDA (la agencia de alimentos y medicamentos de EE. UU.) que identifica al fabricante, el producto y el empaque. Comparar el NDC del frasco de inventario con el de la computadora (muchas veces escaneando el código de barras) confirma que tomaste el medicamento, la concentración y el empaque correctos. La FDA planea cambiar los NDC a un solo formato de 12 dígitos en el futuro, así que aprende la idea, no una sola longitud.",
            "Cuidado con los medicamentos de nombre parecido al leerlo o al oírlo. Lee en el frasco el nombre completo, la concentración y la forma, no solo las primeras letras. Si algo no coincide, detente y avísale al farmacéutico."
          ],
          steps: ["Confirma dos identificadores del paciente: nombre y fecha de nacimiento.", "Compara letra por letra el nombre del medicamento en el frasco con la receta.", "Compara la concentración y la forma farmacéutica.", "Escanea o compara el NDC del frasco de inventario.", "Detente y señala al farmacéutico cualquier diferencia."],
          words: [["NDC", "National Drug Code: el número de tres partes de la FDA para el fabricante, el producto y el empaque de un medicamento."], ["Identificadores del paciente", "datos como el nombre completo y la fecha de nacimiento que se usan para asegurarse de que es la persona correcta."], ["Medicamentos de nombre parecido", "medicamentos cuyos nombres se ven o suenan parecido y se confunden fácilmente."], ["Frasco de inventario", "el envase grande del que la farmacia cuenta el medicamento."]],
          slides: [
            { title: "Descuidos pequeños, daños grandes", bullets: ["Paciente equivocado o concentración equivocada", "Nombres de medicamentos parecidos", "Frasco equivocado del estante"] },
            { title: "Dos identificadores del paciente", bullets: ["Nombre completo y fecha de nacimiento", "Al recibir y al entregar"] },
            { title: "Compara el NDC", bullets: ["Número de tres partes de la FDA: fabricante, producto, empaque", "Escanéalo o compáralo con la computadora", "Confirma medicamento, concentración y empaque"] },
            { title: "Lee toda la etiqueta", bullets: ["Nombre completo, concentración y forma", "No solo las primeras letras", "¿No coincide? Detente y avísale al farmacéutico"] }
          ],
          sources: [
            { name: "FDA: directorio del National Drug Code", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Solo práctica. Escribe en papel tres pedidos de práctica inventados, cada uno con nombre del paciente, fecha de nacimiento, medicamento, concentración y NDC. Pide a un amigo que los copie como \"etiquetas de frasco de inventario\" y que cambie en secreto un dato en dos de ellas. Compara cada par como aprendiste y encierra en un círculo cada diferencia.",
          youCanNow: "comparar un pedido de práctica con la receta usando dos identificadores del paciente y el NDC, y señalar cada diferencia.",
          quickCheck: [
            { objective: "O4", q: "¿Qué par son dos identificadores del paciente?", options: ["Nombre completo y fecha de nacimiento", "Nombre y color favorito", "Nombre del medicamento y concentración", "Modelo de teléfono y correo electrónico"], answer: 0, why: "El nombre completo y la fecha de nacimiento se usan juntos con frecuencia para confirmar que es el paciente correcto." },
            { objective: "O4", q: "El NDC del frasco de inventario no coincide con la computadora. ¿Qué haces?", options: ["Lo preparas igual; el nombre se parece", "Cambias la computadora para que coincida", "Te detienes y le avisas al farmacéutico", "Le das un descuento al cliente"], answer: 2, why: "Un NDC que no coincide puede significar el medicamento, la concentración o el empaque equivocados, así que te detienes y lo señalas." }
          ]
        },
        {
          title: "Tu papel, el papel del farmacéutico y las sustancias controladas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Clasificar tareas de práctica como trabajo del técnico o trabajo del farmacéutico.",
          text: [
            "Los técnicos hacen el trabajo técnico: reciben e ingresan recetas, cuentan, etiquetan, manejan el inventario, tramitan el seguro y atienden la caja. Los farmacéuticos hacen el trabajo clínico: la revisión final, la orientación sobre cómo tomar un medicamento, los efectos secundarios, las interacciones entre medicamentos y cualquier pregunta como \"¿Esto es seguro para mí?\". Tu estado marca el límite exacto, así que aprende las reglas de tu estado.",
            "Una regla sencilla: si un cliente pregunta por su salud o por su medicamento, la respuesta es \"Permítame llamar al farmacéutico.\" Nunca des tu propio consejo, aunque creas que sabes.",
            "Las sustancias controladas son medicamentos que la Drug Enforcement Administration (DEA, la agencia federal antidrogas) coloca en las Listas I a V, según su uso médico aceptado y su riesgo de mal uso y dependencia. Los medicamentos de la Lista I no tienen uso médico aceptado en EE. UU.; los de la Lista II tienen un riesgo alto de mal uso; el riesgo baja hacia la Lista V. Tienen reglas adicionales de almacenamiento, conteo, registros y resurtidos, y los estados pueden agregar más.",
            "Para los exámenes, conoce las cinco listas, que la farmacia lleva registros cuidadosos de cada medicamento controlado y que cualquier faltante en el conteo se informa al farmacéutico de inmediato."
          ],
          steps: ["Pregúntate: ¿es una tarea técnica o una pregunta de salud?", "Técnica: hazla con cuidado, siguiendo las políticas de la tienda y las reglas del estado.", "Pregunta de salud o de medicamento: llama al farmacéutico.", "Sustancia controlada: sigue las reglas adicionales de conteo, registros y almacenamiento.", "Algo falta o es raro: avísale al farmacéutico de inmediato."],
          words: [["Orientación al paciente", "cuando el farmacéutico le explica a un paciente cómo tomar un medicamento y a qué debe estar atento."], ["Sustancia controlada", "un medicamento que la ley controla más de cerca porque se puede usar mal o causar dependencia."], ["DEA", "la Drug Enforcement Administration, la agencia federal que hace cumplir las leyes de sustancias controladas."], ["Lista", "uno de los cinco grupos (I a V) en los que se colocan las sustancias controladas."]],
          slides: [
            { title: "Trabajo del técnico", bullets: ["Ingresar, contar, etiquetar, acomodar", "Seguro y caja", "Hecho con cuidado, según las reglas del estado"] },
            { title: "Trabajo del farmacéutico", bullets: ["Revisión final y orientación al paciente", "Efectos secundarios e interacciones", "Cualquier pregunta como \"¿Esto es seguro para mí?\""] },
            { title: "Sustancias controladas", bullets: ["Listas I a V de la DEA", "I: sin uso médico aceptado; II: alto riesgo de mal uso", "Reglas adicionales de almacenamiento, conteos, registros, resurtidos"] },
            { title: "Dilo siempre", bullets: ["\"Permítame llamar al farmacéutico.\"", "Nunca des tu propio consejo médico"] }
          ],
          sources: [
            { name: "DEA: clasificación de medicamentos en listas", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: juntas de farmacia de los estados (reglas para técnicos)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Solo práctica. Clasifica como Técnico o Farmacéutico: (1) contar tabletas para un pedido, (2) una clienta pregunta si puede tomar su medicamento nuevo con sus pastillas para la alergia, (3) acomodar un envío, (4) un cliente pregunta qué efectos secundarios puede esperar, (5) ingresar una receta nueva. Respuestas: 1, 3 y 5 Técnico; 2 y 4 Farmacéutico. Luego escribe las palabras exactas que dirás para pasar una pregunta al farmacéutico.",
          youCanNow: "distinguir el trabajo del técnico del trabajo del farmacéutico, pasar cada pregunta de salud al farmacéutico y nombrar las cinco listas de sustancias controladas.",
          quickCheck: [
            { objective: "O5", q: "Un cliente pregunta si su medicamento nuevo es seguro con alcohol. ¿Qué le dices?", options: ["\"No debería haber problema.\"", "\"Búsquelo en internet.\"", "\"No vuelva a tomar nunca.\"", "\"Permítame llamar al farmacéutico.\""], answer: 3, why: "Las preguntas sobre seguridad e interacciones son clínicas; solo el farmacéutico las responde." },
            { objective: "O5", q: "¿Qué agencia federal coloca los medicamentos en las Listas I a V?", options: ["La DEA", "El correo postal", "El IRS", "La oficina de vehículos del estado"], answer: 0, why: "La DEA hace cumplir las listas de sustancias controladas." }
          ]
        },
        {
          title: "La privacidad en el mostrador, y tu plan de estudio",
          objectives: ["O6"],
          minutes: 5,
          goal: "Compartir la información de los pacientes solo con quien la necesita, y solo lo que necesita.",
          text: [
            "Una farmacia guarda información privada de salud: nombres, fechas de nacimiento, medicamentos, seguros. HIPAA, la ley federal de privacidad de la salud, la protege. Su idea de \"lo mínimo necesario\" significa que usas y compartes solo lo que hace falta para la tarea.",
            "En el mostrador: habla en voz baja, no leas en voz alta los nombres de los medicamentos para que los oiga la fila y confirma dos identificadores antes de entregar una bolsa. Por teléfono: confirma quién llama antes de compartir algo y sigue la política de la tienda sobre quién puede recoger por otra persona.",
            "Nunca publiques nada sobre los clientes, nunca busques el expediente de un vecino o de una persona famosa por curiosidad y mantén las pantallas y los papeles fuera de la vista. Informa de inmediato los errores de privacidad al farmacéutico o al encargado de privacidad.",
            "Ahora arma tu tarea final: tu plan de estudio y de examen y tu cuaderno de práctica."
          ],
          steps: ["Pregúntate: ¿esta persona necesita esta información para su trabajo o su atención?", "Comparte solo lo mínimo que necesita.", "Confirma dos identificadores antes de entregar el medicamento.", "Habla en voz baja y mantén ocultas las pantallas y los papeles.", "Informa de inmediato los errores de privacidad."],
          words: [["HIPAA", "la ley federal que protege la privacidad y la seguridad de la información de salud."], ["PHI", "protected health information (información de salud protegida): información de salud que puede identificar a una persona."], ["Lo mínimo necesario", "usar o compartir solo la información que hace falta para la tarea."]],
          slides: [
            { title: "HIPAA en la farmacia", bullets: ["Nombres, fechas de nacimiento, medicamentos, seguros", "Comparte solo lo mínimo necesario"] },
            { title: "En el mostrador", bullets: ["Habla en voz baja", "No leas en voz alta los nombres de los medicamentos", "Dos identificadores antes de entregar una bolsa"] },
            { title: "Nunca", bullets: ["Publiques sobre los clientes", "Busques expedientes por curiosidad", "Dejes pantallas o papeles a la vista"] },
            { title: "Tarea final", bullets: ["Tu examen y las reglas de tu estado", "Fechas de estudio semanales hasta el examen", "Cuaderno de práctica incluido"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profesionales (Regla de Privacidad)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Tarea final. Escribe tu plan de estudio y de examen: el examen (PTCE o ExCPT), lo que exige la junta de tu estado y fechas de estudio semanales hasta una fecha meta de examen. Agrega tu cuaderno de práctica: 5 recetas inventadas que leíste y revisaste, 10 problemas de matemáticas de práctica con el procedimiento escrito y 5 preguntas de clientes que pasarías al farmacéutico. No uses información real de pacientes.",
          youCanNow: "proteger la privacidad de los pacientes en el mostrador y por teléfono, y seguir tu propio plan escrito hacia un examen de técnico de farmacia.",
          quickCheck: [
            { objective: "O6", q: "Alguien llama, dice que es vecino de una clienta y pregunta qué medicamento recogió. ¿Qué haces?", options: ["Le dices; solo está siendo amable", "Le lees la lista de ella", "No compartes nada y sigues la política de la tienda", "Le dices solo el primer medicamento"], answer: 2, why: "HIPAA protege la información de ella; un vecino no tiene derecho a conocerla." },
            { objective: "O6", q: "¿Qué ayuda a proteger la privacidad en el mostrador?", options: ["Leer en voz alta los nombres de los medicamentos", "Hablar en voz baja y confirmar dos identificadores", "Dejar bolsas abiertas en el mostrador", "Mostrarle la pantalla a la fila"], answer: 1, why: "Hablar en voz baja y confirmar la identidad mantienen privada la información de salud." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Seguridad, reglas y privacidad",
        questions: [
          { objective: "O4", q: "¿Qué identifica el NDC?", options: ["El seguro del paciente", "La licencia del farmacéutico", "La dirección de la tienda", "El fabricante, el producto y el empaque del medicamento"], answer: 3, why: "El NDC es el número de tres partes de la FDA para fabricante, producto y empaque." },
          { objective: "O4", q: "Dos clientes tienen el mismo nombre. ¿Cómo te aseguras de entregar la bolsa a la persona correcta?", options: ["Pides también la fecha de nacimiento", "Se la das a quien llegó primero", "Preguntas para qué es el medicamento", "Revisas sus zapatos"], answer: 0, why: "Un segundo identificador, como la fecha de nacimiento, distingue a personas con el mismo nombre." },
          { objective: "O5", q: "¿Qué tarea es trabajo del farmacéutico?", options: ["Acomodar los estantes", "Orientar a un paciente sobre los efectos secundarios", "Atender la caja", "Contar tabletas"], answer: 1, why: "Orientar sobre efectos secundarios es trabajo clínico del farmacéutico." },
          { objective: "O5", q: "Falta cantidad en el conteo de una sustancia controlada. ¿Qué haces?", options: ["Corriges el número en el registro", "Lo ignoras hasta el mes que viene", "Le avisas al farmacéutico de inmediato", "Pides más sin decir nada"], answer: 2, why: "Las sustancias controladas tienen registros estrictos; cualquier faltante en el conteo se informa de inmediato." },
          { objective: "O6", q: "¿Qué significa \"lo mínimo necesario\" en la farmacia?", options: ["Usar las bolsas más pequeñas", "Preparar la menor cantidad de pedidos", "Cobrar el precio más bajo", "Compartir solo la información que hace falta para la tarea"], answer: 3, why: "Según HIPAA, usas y compartes solo lo que hace falta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Preparación para técnico de farmacia",
    questions: [
      { objective: "O1", q: "¿Qué título se obtiene al aprobar el PTCE?", options: ["Certified Pharmacy Technician (CPhT) de PTCB", "Farmacéutico registrado", "Codificador profesional certificado", "Enfermero práctico con licencia"], answer: 0, why: "PTCB da el CPhT a quienes aprueban el PTCE." },
      { objective: "O1", q: "Las reglas para técnicos son distintas en cada estado. ¿Dónde revisas las tuyas?", options: ["En un anuncio de medicamentos", "En la junta de farmacia de tu estado", "Con un amigo de otro estado", "En la página de empleos de la DEA"], answer: 1, why: "Cada junta de farmacia estatal pone las reglas para los técnicos." },
      { objective: "O1", q: "¿Qué hace este curso por ti?", options: ["Te registra en tu estado", "Te da el CPhT", "Te prepara para un examen de técnico", "Te permite orientar a pacientes"], answer: 2, why: "El curso te prepara; el examen y el estado dan las credenciales." },
      { objective: "O2", q: "¿Cuál NO es una de las partes habituales de una receta?", options: ["Nombre del paciente", "Concentración del medicamento", "Indicaciones (sig)", "La tienda favorita del paciente"], answer: 3, why: "Una receta tiene paciente, medicamento, concentración, forma, sig, cantidad, resurtidos, fecha y quien receta." },
      { objective: "O2", q: "En práctica, \"hs\" en una receta significa:", options: ["Al acostarse", "Por la boca", "Según sea necesario", "Cuatro veces al día"], answer: 0, why: "hs significa al acostarse." },
      { objective: "O2", q: "¿Por qué \"QD\" está en las listas de lo que no se debe usar?", options: ["Es demasiado largo", "Se puede leer como QID (cuatro veces al día)", "Significa por la boca", "Es el nombre de un medicamento"], answer: 1, why: "QD se ha confundido con QID; escribir \"diario\" evita el error." },
      { objective: "O2", q: "Solo práctica: \"Drug X 2 tabs po bid\" con palabras sencillas es:", options: ["Tome 2 tabletas al acostarse", "Tome 1 tableta dos veces al día", "Tome 2 tabletas por la boca dos veces al día", "Tome 2 tabletas cada 2 horas"], answer: 2, why: "po significa por la boca y bid significa dos veces al día." },
      { objective: "O3", q: "Solo práctica: ¿a cuántos mililitros equivale 1 cucharadita?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Solo práctica: Drug X, 1 cápsula 4 veces al día, 120 cápsulas. ¿Días de suministro?", options: ["30 días", "40 días", "120 días", "4 días"], answer: 0, why: "120 ÷ 4 por día = 30 días." },
      { objective: "O3", q: "Solo práctica: ¿a cuántos miligramos equivalen 3 gramos?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, así que 3 g = 3,000 mg." },
      { objective: "O3", q: "Solo práctica: 176 lb son más o menos ¿cuántos kilogramos?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "¿Por qué se compara el NDC del frasco de inventario?", options: ["Para saber el precio", "Para confirmar el medicamento, la concentración y el empaque correctos", "Para saber la dirección del paciente", "No hace falta"], answer: 1, why: "El NDC identifica el producto y el empaque exactos." },
      { objective: "O4", q: "Dos medicamentos tienen nombres que empiezan igual. ¿Qué protege al paciente?", options: ["Leer solo las primeras letras", "Tomar el frasco más cercano", "Pedirle al cliente que elija", "Leer el nombre completo, la concentración y la forma"], answer: 3, why: "Los nombres parecidos se detectan leyendo toda la etiqueta." },
      { objective: "O4", q: "Ves una diferencia entre el pedido y el frasco. ¿Qué haces?", options: ["Te detienes y lo señalas al farmacéutico", "Terminas rápido y esperas que esté bien", "Corriges tú mismo la receta", "Tiras el frasco"], answer: 0, why: "Cualquier diferencia detiene el trabajo hasta que el farmacéutico lo revise." },
      { objective: "O5", q: "Una clienta pregunta si dos de sus medicamentos son seguros juntos. ¿Quién responde?", options: ["El técnico", "Otro cliente", "El farmacéutico", "El cajero"], answer: 2, why: "Las preguntas sobre interacciones son clínicas y van al farmacéutico." },
      { objective: "O5", q: "Las sustancias controladas de la Lista I son:", options: ["Medicamentos con el riesgo de mal uso más bajo", "Medicamentos sin uso médico aceptado en EE. UU.", "Vitaminas", "Todos los medicamentos con receta"], answer: 1, why: "Los medicamentos de la Lista I no tienen uso médico aceptado en EE. UU. y tienen un riesgo alto de mal uso." },
      { objective: "O5", q: "¿Cuál es trabajo del técnico?", options: ["Orientar sobre efectos secundarios", "Hacer la revisión final", "Aconsejar sobre interacciones", "Ingresar una receta nueva en la computadora"], answer: 3, why: "Ingresar recetas es trabajo técnico; el farmacéutico revisa y orienta." },
      { objective: "O6", q: "¿Qué ley protege la información de salud de los pacientes?", options: ["HIPAA", "OSHA", "La Ley de Aire Limpio", "El código de impuestos"], answer: 0, why: "HIPAA protege la privacidad de la información de salud." },
      { objective: "O6", q: "Una persona famosa surte una receta en tu tienda. ¿Qué haces?", options: ["Buscas su expediente para ver qué toma", "Publicas que estuvo ahí", "La atiendes como a cualquier cliente y no compartes nada", "Se lo cuentas a tus amigos"], answer: 2, why: "Ver o compartir un expediente sin un motivo de trabajo va contra las reglas de HIPAA." },
      { objective: "O6", q: "Notas que un compañero dejó los papeles de un cliente en el mostrador. ¿Qué haces?", options: ["Los dejas ahí", "Los lees", "Se los das al siguiente cliente", "Los guardas fuera de la vista y le avisas al farmacéutico"], answer: 3, why: "Protege la información e informa el descuido de privacidad." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila dice Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Plan de estudio y de examen", objective: "O1", notYet: "No nombra un examen, o faltan las reglas del estado o son adivinadas.", meets: "Nombra el examen y quién lo da, el requisito de la junta del estado con su dirección web y fechas semanales hasta una fecha de examen.", exceeds: "También nombra un programa de capacitación y cómo el participante cumplirá los requisitos para presentar el examen." },
      { name: "Recetas leídas", objective: "O2", notYet: "Menos de 4 de 5 recetas leídas correctamente, o no se señaló una parte que faltaba.", meets: "Al menos 4 de 5 recetas de práctica tienen todas las partes nombradas y las indicaciones con palabras sencillas.", exceeds: "Las 5 están bien y se detecta cada abreviatura que causa errores." },
      { name: "Matemáticas de práctica", objective: "O3", notYet: "Menos de 8 de 10 correctos, o sin procedimiento escrito.", meets: "Al menos 8 de 10 problemas de práctica correctos, con unidades y procedimiento escrito.", exceeds: "10 de 10 correctos, con una revisión de sentido escrita para cada respuesta." },
      { name: "Controles de seguridad", objective: "O4", notYet: "No encontró una diferencia puesta a propósito.", meets: "Encerró en un círculo cada diferencia puesta a propósito en nombre, concentración o NDC.", exceeds: "Explica cómo cada diferencia podría haber dañado a un paciente." },
      { name: "Preguntas para el farmacéutico", objective: "O5", notYet: "Da su propio consejo ante una pregunta de salud.", meets: "Hace una lista de 5 preguntas de clientes que van al farmacéutico y de las palabras para pasarlas.", exceeds: "También explica las reglas adicionales para sustancias controladas." },
      { name: "Privacidad", objective: "O6", notYet: "Usa información real de pacientes en alguna parte del cuaderno.", meets: "Usa solo información inventada.", exceeds: "Hace una lista de tres hábitos en el mostrador o por teléfono que protegen la privacidad." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que se inscriben en un programa de capacitación de técnico de farmacia o se registran ante la junta de su estado en un plazo de 90 días",
      "Participantes que aprueban el PTCE o el ExCPT (según lo que ellos informan)",
      "Participantes contratados como técnicos de farmacia o técnicos en formación en un plazo de 6 meses"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora con internet para las páginas de PTCB, NHA, NABP y la junta del estado",
      "Papel, lápiz o bolígrafo y una calculadora básica",
      "Recetas y etiquetas de inventario inventadas e impresas para la práctica de controles de seguridad",
      "Unos 75 minutos en total, en sesiones cortas"
    ],
    facilitatorNotes: [
      "Mantén inventados todos los medicamentos y números; no respondas preguntas de los participantes sobre sus propios medicamentos. Envíalos con su farmacéutico.",
      "Imprime la página para técnicos de la junta de farmacia de tu estado para que el grupo vea sus reglas reales.",
      "Pon diferencias a propósito (nombre, concentración, NDC) en las etiquetas de práctica y deja que las parejas las encuentren.",
      "Pide a los participantes que digan en voz alta \"Permítame llamar al farmacéutico\" en los juegos de roles.",
      "Participantes con antecedentes: diles que lean las reglas de PTCB, de NHA y de la junta de su estado sobre la declaración de antecedentes antes de pagar una capacitación.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila de Todavía no a la vez."
    ]
  }
};

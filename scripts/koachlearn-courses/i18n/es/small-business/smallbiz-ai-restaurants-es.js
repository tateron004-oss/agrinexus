"use strict";

// Koach Learn course (Spanish translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations".

const FDA_ALLERGENS = { name: "FDA: alergias alimentarias (los nueve alérgenos alimentarios principales)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Código de Alimentos (Food Code)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Regla sobre reseñas y testimonios de consumidores, preguntas y respuestas", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-es",
  lang: "es",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "IA para restaurantes",
  skills: "Escribir descripciones del menú, Hacer una tabla de alérgenos con tus recetas, Hacer listas de preparación y de pedidos, Preparar horarios del personal, Responder reseñas, Planear platillos especiales",
  outcome: "usar la IA para manejar la parte administrativa de un restaurante pequeño o un food truck: escribir descripciones del menú, hacer una tabla de alérgenos con tus propias recetas y revisarla, hacer listas de preparación y de pedidos con tus ventas, preparar un horario justo para el personal y responder reseñas con honestidad.",
  about: [
    "Este curso es para dueños, gerentes y cocineros de restaurantes pequeños, cafeterías, food trucks (camiones de comida), servicios de banquetes y cocinas de comida casera. Muchos de nuestros estudiantes manejan restaurantes familiares y de dueños de minorías donde el dueño también cocina, hace los pedidos y contesta el teléfono.",
    "Vas a usar un asistente de IA gratis y una hoja de cálculo para ahorrar tiempo al escribir, planear y hacer papeleo. Las reglas de seguridad alimentaria y de alérgenos vienen de fuentes oficiales y de tu departamento de salud local, no de la IA; este curso te muestra dónde buscar.",
    "Cada lección dura unos cinco minutos y tiene una tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final."
  ],
  finalTask: "Arma un kit para tu restaurante: descripciones del menú para cinco platillos, una tabla de alérgenos para esos cinco platillos hecha con tus recetas reales y las etiquetas de los ingredientes (revisada por ti con los nueve alérgenos principales de la FDA), una lista de preparación y una lista de pedidos para una semana según tus ventas, un borrador del horario del personal, y respuestas a una reseña buena y a una mala.",
  chapters: [
    {
      name: "Capítulo 1: Menú, alérgenos y listas de cocina",
      lessons: [
        {
          title: "Escribir descripciones del menú",
          minutes: 5,
          goal: "Escribir descripciones del menú cortas, apetitosas y correctas con ayuda de la IA.",
          text: [
            "Una buena descripción del menú dice qué lleva el platillo, cómo se cocina y por qué es especial, en 10 a 25 palabras. \"Arroz jollof cocido a fuego lento en salsa de tomate y pimiento, servido con plátano frito y muslo de pollo a la parrilla.\"",
            "Dale a la IA los ingredientes y el método reales: \"Escribe una descripción de menú de 20 palabras para: curry de chivo, con hueso, cocido a fuego lento 4 horas con chile scotch bonnet, tomillo y papas, servido con arroz blanco. Palabras cálidas y sencillas.\" Pide tres versiones y escoge una.",
            "Revísala. La IA puede agregar ingredientes que no usas (\"con nueces de la India\") o palabras como \"orgánico\" o \"hecho en casa\" que no son ciertas. Un ingrediente equivocado en el menú puede hacerle daño a alguien con alergia."
          ],
          steps: ["Escribe los ingredientes y el método de cocción reales.", "Pide a la IA tres descripciones cortas.", "Escoge una y revisa cada palabra de ingredientes.", "Quita todo lo que no sea cierto, como \"orgánico\"."],
          words: [["Descripción del menú", "el texto corto debajo del nombre de un platillo que dice a los clientes qué es."]],
          slides: [
            { title: "Una buena descripción", bullets: ["Qué lleva", "Cómo se cocina", "Por qué es especial, en 10 a 25 palabras"] },
            { title: "Dale a la IA la receta real", bullets: ["Ingredientes y método", "Pide tres versiones"] },
            { title: "Revisa cada palabra", bullets: ["Ningún ingrediente que no uses", "Nada de \"orgánico\" o \"hecho en casa\" si no es cierto", "Los ingredientes equivocados pueden dañar a clientes con alergias"] }
          ],
          tryIt: "Escribe descripciones del menú para cinco de tus platillos con ayuda de la IA. Compara cada palabra de ingredientes con tu receta.",
          youCanNow: "escribir descripciones del menú correctas y atractivas con ayuda de la IA."
        },
        {
          title: "Hacer una tabla de alérgenos, con seguridad",
          minutes: 6,
          goal: "Hacer una tabla de alérgenos con tus propias recetas y etiquetas, revisada por ti.",
          text: [
            "La FDA (la agencia de EE. UU. que regula los alimentos y medicamentos) nombra nueve alérgenos alimentarios principales: leche, huevos, pescado, mariscos crustáceos, nueces de árbol, cacahuates (maní), trigo, soya y ajonjolí (sésamo). Los clientes con alergias confían en que sabes qué lleva cada platillo.",
            "Haz una tabla: los platillos hacia abajo y los nueve alérgenos en la parte de arriba. Llénala con tus recetas reales Y con las etiquetas de todos los ingredientes que compras, porque las salsas, las mezclas de especias y los panes suelen esconder alérgenos. La IA puede ayudarte a armar la tabla y recordarte qué ingredientes suelen contener un alérgeno, pero no conoce los productos de tus proveedores. Tú y tus etiquetas sí.",
            "Actualiza la tabla cada vez que cambie una receta o un proveedor. Enseña al personal a decir \"Déjeme revisar\" y preguntar en la cocina, nunca adivinar. Tu departamento de salud local y el Food Code (Código de Alimentos) de la FDA tienen reglas sobre seguridad alimentaria y alérgenos; revisa cuáles se aplican donde estás."
          ],
          steps: ["Haz una lista de tus platillos y de todos los ingredientes de cada uno.", "Lee la etiqueta de cada ingrediente que compras.", "Marca cada uno de los nueve alérgenos por platillo.", "Pide a una segunda persona que revise la tabla.", "Actualízala cuando cambien las recetas o los proveedores."],
          words: [["Alérgeno", "un alimento que puede causar una reacción alérgica grave en algunas personas."], ["Contacto cruzado", "cuando un alérgeno pasa a otro alimento por superficies, aceite o utensilios compartidos."], ["Food Code (Código de Alimentos)", "las reglas modelo de seguridad alimentaria de la FDA que adoptan muchos estados y condados."]],
          slides: [
            { title: "Los nueve alérgenos principales de la FDA", bullets: ["Leche, huevos, pescado, mariscos crustáceos", "Nueces de árbol, cacahuates (maní), trigo", "Soya, ajonjolí (sésamo)"] },
            { title: "Haz la tabla con datos reales", bullets: ["Platillos hacia abajo, alérgenos hacia el lado", "Tus recetas Y cada etiqueta de ingredientes", "La IA arma la tabla; no conoce a tus proveedores"] },
            { title: "Mantenla correcta", bullets: ["Una segunda persona la revisa", "Actualízala cuando cambien recetas o proveedores", "El personal nunca adivina: \"Déjeme revisar\""] },
            { title: "Las reglas donde estás", bullets: ["Tu departamento de salud local", "El Food Code de la FDA"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Pide a la IA que arme una tabla de alérgenos vacía para cinco platillos con los nueve alérgenos como columnas. Llénala tú con tus recetas y las etiquetas de los ingredientes, y luego pide a alguien que la revise.",
          youCanNow: "hacer y mantener una tabla de alérgenos con tus propias recetas y etiquetas."
        },
        {
          title: "Listas de preparación y de pedidos a partir de tus ventas",
          minutes: 5,
          goal: "Hacer una lista de preparación y una lista de pedidos semanales con tus números de ventas.",
          text: [
            "Preparar de más desperdicia comida; preparar de menos significa \"lo siento, se nos acabó\". Empieza por cuántos de cada platillo vendes por día. Tu POS (sistema de punto de venta) muchas veces lo muestra; si no, lleva un conteo sencillo.",
            "En una hoja de cálculo: Platillo, Promedio vendido por día, Porciones por tanda, Tandas necesarias. Luego anota los ingredientes por porción para ver qué pedir. Pide ayuda a la IA con las fórmulas: \"Escribe una fórmula de Google Sheets que redondee hacia arriba las tandas necesarias: promedio vendido dividido entre porciones por tanda.\" (=ROUNDUP(B2/C2,0) es una forma; en una hoja en español puede llamarse REDONDEAR.MAS.)",
            "Ajusta según lo que sabes: fines de semana, eventos, clima, días festivos. La IA puede sugerir el formato de una lista de preparación y una lista de control, pero tus números y tu experiencia fijan las cantidades."
          ],
          steps: ["Consigue el promedio vendido por día de cada platillo.", "Agrega las porciones por tanda y calcula las tandas con ROUNDUP.", "Anota los ingredientes por porción y suma el pedido.", "Ajusta para fines de semana, eventos y clima."],
          words: [["Lista de preparación", "una lista de lo que la cocina debe preparar antes del servicio."], ["Nivel par", "la cantidad de un artículo que quieres tener al empezar el servicio."], ["Tanda", "una vez que cocinas una receta y salen cierto número de porciones."]],
          slides: [
            { title: "Desperdicio o quedarse sin comida", bullets: ["Preparar de más desperdicia comida", "Preparar de menos decepciona a los clientes", "Empieza por las ventas de cada platillo"] },
            { title: "Una hoja de preparación sencilla", bullets: ["Platillo, vendidos por día, porciones por tanda", "Tandas = ROUNDUP(vendidos / porciones, 0)", "Ingredientes por porción -> lista de pedidos"] },
            { title: "Usa lo que sabes", bullets: ["Fines de semana, eventos, clima", "La IA ayuda con el formato; tú fijas las cantidades"] }
          ],
          tryIt: "Haz una hoja de preparación para cinco platillos con vendidos por día, porciones por tanda y una fórmula ROUNDUP para las tandas. Conviértela en una lista de pedidos para una semana.",
          youCanNow: "hacer listas de preparación y de pedidos con tus propios números de ventas."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Menú, alérgenos y listas de cocina",
        questions: [
          { q: "La descripción de la IA agrega \"con nueces de la India\", pero tu platillo no las lleva. ¿Qué haces?", options: ["La dejas; suena bonito", "Lo quitas", "Le agregas nueces de la India", "No le haces caso"], answer: 1, why: "Los ingredientes equivocados pueden dañar a clientes con alergias y engañan a todos." },
          { q: "¿Cuántos alérgenos alimentarios principales nombra la FDA?", options: ["Veinte", "Tres", "Catorce", "Nueve"], answer: 3, why: "La FDA nombra nueve, incluido el ajonjolí." },
          { q: "¿De dónde viene la información de alérgenos de tu tabla?", options: ["De tus recetas y de las etiquetas de lo que compras", "De lo que adivine la IA", "Del menú de un competidor", "De los clientes"], answer: 0, why: "Solo tus recetas y etiquetas muestran lo que de verdad lleva tu comida." },
          { q: "Un cliente pregunta si un platillo lleva ajonjolí y no estás seguro. Tú:", options: ["Le preguntas a la IA", "Adivinas que no", "Dices \"Déjeme revisar\" y preguntas en la cocina y en la tabla", "Dices que no hay problema"], answer: 2, why: "Nunca adivines sobre alérgenos." },
          { q: "Vendes 22 al día y una tanda da 8. Con ROUNDUP, ¿cuántas tandas?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, redondeado hacia arriba es 3." }
        ]
      }
    },
    {
      name: "Capítulo 2: Personal, clientes y crecimiento",
      lessons: [
        {
          title: "Preparar el horario del personal",
          minutes: 5,
          goal: "Preparar un horario semanal con ayuda de la IA y luego revisarlo con tus reglas.",
          text: [
            "Dale a la IA los datos: tu horario, cuántas personas necesitas en cada turno, la disponibilidad y el puesto de cada trabajador, y tus reglas. \"Prepara un horario semanal para mi taquería, abierta de 11 a 9 de martes a domingo. Necesito 2 cocineros y 2 personas en el salón en la comida y en la cena. Esta es la disponibilidad: [solo nombres de pila].\"",
            "Revisa el borrador tú mismo. Asegúrate de que sea justo, cubra las horas de más trabajo y cumpla las leyes laborales sobre descansos, horas extra y menores de edad. Esas reglas dependen de tu estado y tu ciudad; consulta el departamento de trabajo de tu estado o a un profesional. La IA no las conoce de forma confiable.",
            "No pongas números de Seguro Social, sueldos junto con nombres ni notas privadas sobre los trabajadores en herramientas de IA. Con los nombres de pila y la disponibilidad basta."
          ],
          steps: ["Haz una lista de los turnos y de las personas que necesitas.", "Anota a los trabajadores por nombre de pila con su disponibilidad y puesto.", "Pide un borrador a la IA.", "Revisa que sea justo, que haya cobertura y que cumpla las reglas laborales de tu estado.", "Publica el horario final."],
          words: [["Disponibilidad", "los días y horas en que un trabajador puede trabajar."], ["Horas extra", "horas adicionales que la ley laboral puede exigir pagar a una tarifa más alta."], ["Cobertura", "tener suficiente personal en cada turno."]],
          slides: [
            { title: "Dale a la IA los datos", bullets: ["Horario y personal necesario por turno", "Nombres de pila, disponibilidad y puestos"] },
            { title: "Tú revisas el borrador", bullets: ["Justo y cubre las horas de más trabajo", "Descansos, horas extra y menores: revisa las reglas de tu estado"] },
            { title: "Protege los datos de los trabajadores", bullets: ["Nada de números de Seguro Social ni sueldos con nombres", "Con nombres de pila y disponibilidad basta"] }
          ],
          tryIt: "Prepara con la IA el horario de la próxima semana usando nombres de pila y disponibilidad. Revisa la cobertura y que sea justo, y escribe dónde vas a consultar las reglas de descansos y horas extra de tu estado.",
          youCanNow: "preparar un horario del personal con la IA y revisarlo según tus necesidades y las reglas laborales."
        },
        {
          title: "Responder reseñas y mensajes de clientes",
          minutes: 5,
          goal: "Responder reseñas y preguntas comunes de los clientes de forma rápida y honesta.",
          text: [
            "Los clientes preguntan lo mismo: horario, estacionamiento, reservaciones, banquetes, opciones veganas, alergias. Usa la IA para convertir tus respuestas reales en respuestas cortas que puedas pegar. Para preguntas sobre alergias, remite siempre a tu tabla de alérgenos revisada y al personal.",
            "Para las reseñas: agradece brevemente las buenas y menciona el platillo. Con las malas, mantén la calma, pide disculpas por la experiencia, di qué vas a corregir e invita a la persona a contactarte. No discutas en público. Si estás molesto, deja que la IA escriba una versión tranquila y luego revisa que cada frase sea cierta.",
            "Nunca escribas reseñas falsas ni pagues solo por reseñas positivas. La regla de la FTC (la Comisión Federal de Comercio de EE. UU.) sobre reseñas de consumidores lo prohíbe, incluidas las reseñas falsas escritas con IA."
          ],
          steps: ["Escribe respuestas reales a las preguntas más comunes de tus clientes.", "Pide a la IA que las convierta en respuestas cortas listas para pegar.", "Prepara con calma las respuestas a reseñas con la IA y luego revísalas.", "Nunca inventes ni compres reseñas."],
          words: [["Reseña", "la calificación y el comentario público de un cliente."], ["Banquetes (catering)", "dar comida para un evento fuera del servicio normal en el restaurante."]],
          slides: [
            { title: "Respuestas listas para pegar", bullets: ["Horario, estacionamiento, reservaciones, banquetes", "Preguntas de alergias: usa tu tabla revisada"] },
            { title: "Respuestas a reseñas", bullets: ["Buena: agradece y menciona el platillo", "Mala: calma, disculpa, corrige, invita a contactar", "Revisa que cada frase sea cierta"] },
            { title: "Nada de reseñas falsas", bullets: ["La regla de la FTC prohíbe las reseñas falsas", "Incluidas las escritas con IA"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Pide a la IA borradores de respuesta para una reseña buena y una mala (reales o de ejemplo, como comida fría un viernes lleno). Haz que cada frase sea cierta y suene a ti.",
          youCanNow: "responder preguntas y reseñas de clientes de forma rápida, tranquila y honesta."
        },
        {
          title: "Planear especiales con lo que tienes",
          minutes: 5,
          goal: "Planear un especial de la semana que reduzca el desperdicio y deje ganancia.",
          text: [
            "Los especiales pueden vender inventario extra antes de que se eche a perder, probar platillos nuevos y hacer que vuelvan los clientes de siempre. Mira lo que pediste de más o lo que está de temporada.",
            "Pregunta a la IA: \"Esta semana me sobran plátanos, frijoles negros y muslos de pollo. Sugiere tres especiales que vayan con mi menú caribeño y usen sobre todo esto.\" Escoge uno, calcula su costo (ingredientes por plato) y fija un precio que deje ganancia.",
            "Escribe la descripción del especial, revisa sus alérgenos con el método de tu tabla, agrégalo a tu lista de preparación y publícalo con una foto del platillo real."
          ],
          steps: ["Haz una lista de ingredientes que sobran o de temporada.", "Pide a la IA ideas de especiales que vayan con tu menú.", "Calcula el costo del plato y fija un precio con ganancia.", "Revisa los alérgenos y agrégalo a la lista de preparación.", "Publícalo con una foto real."],
          words: [["Costo del plato", "el costo de los ingredientes de una porción."], ["Porcentaje de costo de alimentos", "el costo del plato dividido entre el precio del menú, por 100."]],
          slides: [
            { title: "Por qué hacer especiales", bullets: ["Usa el inventario extra antes de que se eche a perder", "Prueba platillos nuevos", "Haz que vuelvan los clientes de siempre"] },
            { title: "La IA para ideas", bullets: ["Anota lo que te sobra", "Pide especiales que vayan con tu menú"] },
            { title: "Antes de publicar", bullets: ["Calcula el costo del plato y fija un precio", "Revisa alérgenos; agrégalo a la lista de preparación", "Usa una foto real"] }
          ],
          tryIt: "Tarea final: arma tu kit del restaurante: cinco descripciones del menú, una tabla de alérgenos hecha con tus recetas y etiquetas, las listas de preparación y de pedidos de una semana, un borrador de horario, dos respuestas a reseñas y un especial con su costo del plato.",
          youCanNow: "usar la IA de forma segura en la planeación, el papeleo y la comunicación con los clientes de tu restaurante."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Personal, clientes y crecimiento",
        questions: [
          { q: "¿Dónde revisas las reglas de descansos y horas extra?", options: ["En el departamento de trabajo de tu estado o con un profesional", "En el borrador de la IA", "Con un cliente", "En una publicación de redes sociales"], answer: 0, why: "Las reglas laborales dependen de tu estado y tu ciudad." },
          { q: "¿Qué información de los trabajadores debe ir en la instrucción a la IA para el horario?", options: ["Direcciones de su casa", "Números de Seguro Social", "Sueldos con nombres", "Nombres de pila y disponibilidad"], answer: 3, why: "Solo lo necesario, nada privado." },
          { q: "Un cliente escribe para preguntar si un platillo no tiene cacahuate. Tu respuesta debe basarse en:", options: ["Lo que adivine la IA", "Tu tabla de alérgenos revisada y el personal", "La foto del menú", "Solo tu memoria"], answer: 1, why: "Las respuestas sobre alérgenos salen de tu tabla revisada." },
          { q: "Según la regla de la FTC, ¿qué está prohibido?", options: ["Escribir reseñas falsas con IA", "Agradecer a quien deja una reseña", "Responder a una reseña mala", "Pedir a los clientes reseñas honestas"], answer: 0, why: "Las reseñas falsas, incluidas las escritas con IA, están prohibidas." },
          { q: "Un especial usa $3.50 en ingredientes y se vende a $14. ¿Cuál es el porcentaje de costo de alimentos?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, o sea 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: IA para restaurantes",
    questions: [
      { q: "Una buena descripción del menú tiene unas:", options: ["200 palabras", "10 a 25 palabras", "Una letra", "Una página completa"], answer: 1, why: "Las descripciones cortas se leen rápido." },
      { q: "¿Qué le das a la IA para que escriba una descripción del menú?", options: ["Nada", "Tus datos bancarios", "Los nombres de los clientes", "Los ingredientes y el método reales"], answer: 3, why: "Los datos reales dan descripciones correctas." },
      { q: "¿Por qué revisar cada palabra de ingredientes que escribe la IA?", options: ["No hace falta", "Para que sea más larga", "Solo por la ortografía", "Un ingrediente equivocado puede dañar a un cliente con alergia"], answer: 3, why: "La exactitud es un tema de seguridad." },
      { q: "¿Cuál es uno de los nueve alérgenos principales de la FDA?", options: ["El arroz", "El ajonjolí (sésamo)", "El maíz", "El pollo"], answer: 1, why: "El ajonjolí se agregó como el noveno." },
      { q: "¿Por qué leer la etiqueta de cada ingrediente que compras?", options: ["Por diversión", "Para ver el precio", "Las salsas y mezclas pueden esconder alérgenos", "No hace falta"], answer: 2, why: "Los alérgenos escondidos son comunes en ingredientes preparados." },
      { q: "¿Cuándo debes actualizar tu tabla de alérgenos?", options: ["Cuando cambia una receta o un proveedor", "Una vez cada diez años", "Nunca", "Solo después de una queja"], answer: 0, why: "Los cambios pueden agregar alérgenos." },
      { q: "¿Qué es el contacto cruzado?", options: ["Una llamada telefónica", "Dos empleados hablando", "Un alérgeno que pasa a otro alimento por utensilios o aceite compartidos", "Un cambio en el menú"], answer: 2, why: "Las superficies compartidas pueden pasar alérgenos." },
      { q: "¿Quién fija las reglas de seguridad alimentaria de tu restaurante?", options: ["Tu departamento de salud local, muchas veces basado en el Food Code de la FDA", "La IA", "Tus clientes", "Un sitio de reseñas"], answer: 0, why: "Las agencias oficiales fijan las reglas." },
      { q: "Una lista de preparación es:", options: ["Un horario del personal", "Lo que la cocina debe preparar antes del servicio", "Una reseña", "Un formulario de impuestos"], answer: 1, why: "Guía la preparación en la cocina." },
      { q: "=ROUNDUP(B2/C2,0) da:", options: ["Alérgenos", "Ganancia", "Horas del personal", "Las tandas completas necesarias, redondeadas hacia arriba"], answer: 3, why: "Redondea hacia arriba el número de tandas." },
      { q: "¿Quién fija las cantidades finales de preparación?", options: ["Tú, con tus números y tu experiencia", "La IA sola", "Un proveedor", "Los clientes"], answer: 0, why: "La IA ayuda con el formato; tú decides las cantidades." },
      { q: "¿Cuál es una buena razón para ajustar la preparación?", options: ["Ninguna", "Un tipo de letra nuevo", "Que la IA lo diga", "Un evento local este fin de semana"], answer: 3, why: "Los eventos cambian la demanda." },
      { q: "El borrador de horario de la IA le da 7 turnos a un trabajador. Tú:", options: ["No le haces caso", "Lo publicas", "Revisas que sea justo y las reglas laborales, y lo corriges", "Le pides al trabajador que renuncie"], answer: 2, why: "Tú revisas cada borrador." },
      { q: "¿Es la IA una fuente confiable sobre la ley de horas extra de tu estado?", options: ["Sí, siempre", "No, consulta el departamento de trabajo del estado", "Solo los fines de semana", "Solo para menores de edad"], answer: 1, why: "La ley laboral necesita una fuente oficial." },
      { q: "Una reseña mala se queja de comida fría. Una buena respuesta:", options: ["Ofrece dinero a cambio de una reseña mejor", "Discute en público", "Comparte los datos del cliente", "Pide disculpas, dice qué vas a corregir e invita a contactar"], answer: 3, why: "Las respuestas tranquilas y honestas generan confianza." },
      { q: "Pagarles a los clientes solo si dejan 5 estrellas es:", options: ["Obligatorio", "Buen marketing", "Prohibido por la regla de reseñas de la FTC", "Está bien"], answer: 2, why: "Las recompensas que dependen de una opinión positiva están prohibidas." },
      { q: "Un buen uso de un especial es:", options: ["Usar el inventario extra antes de que se eche a perder", "Esconder comida vieja", "Subir todos los precios", "Saltarse la revisión de alérgenos"], answer: 0, why: "Los especiales reducen el desperdicio." },
      { q: "¿Qué es el costo del plato?", options: ["El precio de los platos", "El costo de los ingredientes de una porción", "La renta", "Una propina"], answer: 1, why: "Es el costo de los ingredientes por plato." },
      { q: "Antes de publicar un especial debes:", options: ["Saltarte el precio", "Revisar los alérgenos y agregarlo a la lista de preparación", "Usar una foto de archivo de otro platillo", "Prometer que es orgánico"], answer: 1, why: "La seguridad y la planeación van primero." },
      { q: "El porcentaje de costo de alimentos es:", options: ["El costo del plato dividido entre el precio del menú, por 100", "La renta dividida entre las ventas", "Las propinas por el personal", "El precio más impuestos"], answer: 0, why: "Muestra qué parte del precio son ingredientes." }
    ]
  }
};

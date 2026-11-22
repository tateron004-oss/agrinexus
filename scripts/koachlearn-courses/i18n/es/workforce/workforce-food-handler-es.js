"use strict";

// Koach Learn course (Spanish translation of workforce/workforce-food-handler.js). See scripts/koachlearn-courses/README.md, "Translations".
// Every °F figure is kept exactly as in the English; °C is added in brackets, rounded to the nearest degree.

module.exports = {
  id: "workforce-food-handler-es",
  lang: "es",
  translationOf: "workforce-food-handler",
  category: "Workforce Development",
  name: "Manipulador de alimentos y preparación para el examen ServSafe",
  skills: "Lavarte las manos de la forma correcta, Prevenir la contaminación cruzada, Mantener los alimentos fuera de la zona de temperatura peligrosa, Cocinar a temperaturas seguras, Manejar los alérgenos, Limpiar y desinfectar",
  outcome: "manejar alimentos de forma segura en un turno de restaurante o de servicio de comida: lavarte bien las manos, prevenir la contaminación cruzada, mantener los alimentos fuera de la zona de temperatura peligrosa, cocinar y mantener la comida a temperaturas seguras, proteger a los clientes con alergias, limpiar y desinfectar una superficie de trabajo, y estar listo para presentar un examen de manipulador de alimentos.",
  about: [
    "Este curso es para cualquier persona que trabaja con alimentos o quiere hacerlo: equipos de restaurantes y de comida rápida, personal de comedores y cocinas escolares, servicios de banquetes, trabajadores de camiones de comida, personal de panaderías y salchichonerías, y personas que se preparan para sacar una tarjeta de manipulador de alimentos o para un examen ServSafe (un programa de capacitación en inocuidad alimentaria muy usado en Estados Unidos).",
    "Vas a aprender las habilidades básicas de inocuidad alimentaria que cubre todo examen de manipulador de alimentos: lavado de manos e higiene personal, contaminación cruzada, control de tiempo y temperatura, temperaturas de cocción, alérgenos, y la diferencia entre limpiar y desinfectar. Las preguntas de práctica son nuestras, escritas para ayudarte a pensar como en el examen; no están copiadas de ningún examen real.",
    "Cada lección dura unos cinco minutos. Lee la lección, mira las diapositivas y luego haz la tarea de \"Pruébalo ahora\". Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Las reglas de la tarjeta de manipulador de alimentos las ponen los estados y los condados, y los códigos de alimentos se actualizan con el tiempo, así que revisa con tu departamento de salud local las reglas del lugar donde trabajas. Las temperaturas se dan en grados Fahrenheit (°F), que es lo que se usa en Estados Unidos y en el examen, con los grados Celsius (°C) entre paréntesis."
  ],
  finalTask: "Escribe una \"Lista para un turno seguro\" de una página para una cocina real o de práctica: cuándo y cómo lavarte las manos, cómo guardar los alimentos crudos y los listos para comer para prevenir la contaminación cruzada, las temperaturas de mantenimiento en frío, de mantenimiento en caliente y de cocción que vas a revisar con un termómetro, los pasos para enfriar, qué harás cuando un cliente diga que tiene una alergia, los pasos para limpiar y desinfectar una mesa de preparación y los síntomas de enfermedad que debes reportar. Luego averigua la regla de la tarjeta de manipulador de alimentos de tu estado o condado y escríbela arriba.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Trabajadores de alimentos nuevos y actuales y personas que buscan trabajo: equipos de restaurantes y comida rápida, personal de cafeterías y cocinas escolares, servicios de banquetes, trabajadores de camiones de comida, panaderías y salchichonerías, y personas que se preparan para una tarjeta de manipulador de alimentos o un examen ServSafe.",
    startingPoint: "Saben cocinar o preparar comida en casa y quizás han trabajado un turno en una cocina, pero no han aprendido las reglas del servicio de comida sobre el lavado de manos, el orden para guardar, las temperaturas para mantener y cocinar, los alérgenos y la desinfección.",
    gap: "Muchos empleadores y departamentos de salud piden una tarjeta de manipulador de alimentos poco después de contratarte, y un solo error con las temperaturas, la contaminación cruzada o una alergia puede enfermar a los clientes. Necesitan estos hábitos y números para conseguir trabajo, pasar el examen y cuidar a los clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de sexto grado)",
      "Dispositivos: un teléfono o una computadora compartida; un termómetro de alimentos ayuda, pero no es obligatorio",
      "Tiempo: lecciones de unos cinco minutos que caben entre turnos",
      "Las reglas cambian según el estado y el condado, y los números del servicio de comida no son iguales a los consejos para cocinar en casa; cada persona revisa con su departamento de salud local",
      "Solo es educación general: no reemplaza un curso acreditado de manipulador de alimentos ni la certificación de gerente"
    ],
    prerequisites: "Ninguno."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Durante un turno en la cocina", action: "lavarte las manos de la forma correcta en los momentos correctos y no tocar con las manos descubiertas los alimentos listos para comer", standard: "tallándote al menos 20 segundos y nombrando al menos seis momentos para lavarte" },
    { id: "O2", condition: "Con alimentos crudos y listos para comer que hay que guardar o preparar", action: "guardarlos y prepararlos para que los gérmenes no se pasen", standard: "poniendo cada alimento en el estante correcto del refrigerador y usando utensilios separados o desinfectados" },
    { id: "O3", condition: "Cuando un cliente tiene una alergia alimentaria o hay que limpiar una superficie", action: "seguir los pasos para una alergia y limpiar y desinfectar una superficie en el orden correcto", standard: "con cada paso en orden y sin adivinar los ingredientes" },
    { id: "O4", condition: "Con alimentos TCS fríos y calientes y un termómetro", action: "revisar las temperaturas para mantener la comida y descongelar de forma segura", standard: "con la comida fría a 41°F (5°C) o menos y la caliente a 135°F (57°C) o más, siempre" },
    { id: "O5", condition: "Al cocinar, recalentar o enfriar alimentos", action: "elegir la temperatura y el tiempo seguros para cada alimento y planear un enfriamiento rápido", standard: "usando los números del Food Code de la FDA que enseña el curso" },
    { id: "O6", condition: "Antes y durante un trabajo en el servicio de comida", action: "identificar los síntomas de enfermedad que debes reportar y encontrar la regla de la tarjeta de manipulador de alimentos donde trabajas", standard: "nombrando los síntomas, y el plazo, la duración de la tarjeta y los cursos aceptados según tu departamento de salud" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Manos limpias y alimentos limpios",
      lessons: [
        {
          objectives: ["O1","O6"],
          title: "Lavado de manos e higiene personal",
          minutes: 5,
          goal: "Lavarte las manos de la forma correcta y en los momentos correctos, y seguir las reglas básicas de higiene.",
          text: [
            "Las manos transmiten más enfermedades por alimentos que casi cualquier otra cosa. Lávalas en un lavamanos (nunca en un fregadero de preparación de alimentos ni de lavar platos) con agua tibia corriendo y jabón. Talla las manos, entre los dedos, debajo de las uñas y hasta las muñecas durante al menos 20 segundos, enjuaga y sécate con una toalla de papel desechable o con un secador de manos. Usa la toalla para cerrar la llave si el lavamanos tiene manijas.",
            "Lávate al empezar a trabajar, después de ir al baño, después de tocar carne, aves o mariscos crudos, después de tocarte la cara, el pelo, el teléfono o la basura, después de comer, beber, fumar o toser, después de limpiar y antes de ponerte guantes. Los guantes no reemplazan el lavado de manos, y debes cambiarlos cuando se rompen, cuando cambias de tarea y después de tocar alimentos crudos.",
            "No toques con las manos descubiertas los alimentos listos para comer (los que no se van a cocinar otra vez, como la ensalada, el pan o una hamburguesa ya cocida). Usa guantes, pinzas, papel encerado o utensilios.",
            "Higiene personal: usa ropa limpia y algo que te sujete el pelo, mantén las uñas cortas y limpias, y cubre las cortadas con una venda y un guante. Avísale a tu gerente si tienes vómito, diarrea, piel u ojos amarillos (ictericia) o dolor de garganta con fiebre, o si te diagnostican ciertas enfermedades como norovirus, hepatitis A o salmonela. Puede que tengas que quedarte en casa o lejos de los alimentos."
          ],
          steps: ["Usa solo el lavamanos.", "Mójate las manos con agua tibia corriendo y ponte jabón.", "Talla manos, dedos, uñas y muñecas durante al menos 20 segundos.", "Enjuaga y sécate con una toalla de papel o un secador de manos.", "Cierra la llave con la toalla.", "Ponte guantes nuevos si vas a tocar alimentos listos para comer."],
          words: [["Enfermedad transmitida por alimentos", "una enfermedad causada por comer alimentos que tienen gérmenes o toxinas."], ["Alimento listo para comer", "un alimento que se come sin cocinarlo más, como la ensalada, el pan o una hamburguesa ya cocida."], ["Ictericia", "color amarillo en la piel o en los ojos, una señal de enfermedades como la hepatitis A."]],
          slides: [
            { title: "Lávate de la forma correcta", bullets: ["Solo en el lavamanos", "Agua tibia y jabón", "Talla al menos 20 segundos; sécate con toalla de papel"] },
            { title: "Cuándo lavarte", bullets: ["Al empezar el turno y después de ir al baño", "Después de carne cruda, basura, tu cara o tu teléfono", "Antes de ponerte guantes"] },
            { title: "Sin manos descubiertas en alimentos listos para comer", bullets: ["Usa guantes, pinzas, papel encerado o utensilios", "Cambia los guantes si se rompen o si cambias de tarea"] },
            { title: "Higiene y enfermedad", bullets: ["Ropa limpia, pelo sujeto, uñas cortas", "Cubre las cortadas con una venda y un guante", "Reporta vómito, diarrea, ictericia, dolor de garganta con fiebre"] }
          ],
          sources: [
            { name: "FDA: Manejo seguro de los alimentos (lavado de manos de al menos 20 segundos, en inglés)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" },
            { name: "FDA: Food Code 2022 (Código de Alimentos, en inglés)", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Lávate las manos de la forma completa y mide el tiempo: al menos 20 segundos tallando. Luego anota seis momentos de un turno en la cocina en los que debes lavarte las manos.",
          youCanNow: "lavarte bien las manos, saber cuándo lavarlas, evitar tocar con las manos descubiertas los alimentos listos para comer y saber qué síntomas reportar.",
          quickCheck: [
            { objective: "O1", q: "¿Qué es un alimento listo para comer?", options: ["Un alimento que no se va a cocinar otra vez, como una ensalada o el pan", "Pollo crudo que espera para cocinarse", "Comida congelada en el congelador", "Cualquier alimento en un paquete cerrado"], answer: 0, why: "Un alimento listo para comer no se va a cocinar otra vez, así que no debe tocarlo una mano descubierta." },
            { objective: "O1", q: "Acabas de sacar la basura y ahora tienes que hacer un sándwich. ¿Qué haces primero?", options: ["Te pones guantes de inmediato", "Te lavas las manos y luego te pones guantes nuevos", "Te limpias las manos en el delantal", "Usas solo gel antibacterial"], answer: 1, why: "Los guantes no reemplazan el lavado de manos; te lavas después de tocar la basura y antes de ponerte guantes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Prevenir la contaminación cruzada",
          minutes: 5,
          goal: "Guardar y preparar los alimentos para que los gérmenes y los alérgenos no pasen de un alimento o una superficie a otra.",
          text: [
            "La contaminación cruzada es cuando los gérmenes pasan de una cosa a otra: del pollo crudo a una ensalada, de una tabla de cortar sucia al pan, o de tus manos a un sándwich.",
            "Mantén separados los alimentos crudos y los listos para comer. Usa tablas de cortar, cuchillos y utensilios distintos para la carne cruda y para las verduras o la comida cocida; muchas cocinas usan tablas de colores. Si tienes que usar la misma superficie, límpiala y desinféctala entre una tarea y otra.",
            "Guarda bien los alimentos en el refrigerador. Pon los alimentos listos para comer en los estantes de arriba. Guarda debajo los alimentos crudos de origen animal, en el orden de su temperatura de cocción: los cortes enteros y el pescado arriba de la carne molida, y las aves hasta abajo, para que los jugos no goteen sobre alimentos que necesitan menos cocción. Tapa y etiqueta la comida con el nombre y la fecha.",
            "Otros hábitos: nunca pongas comida cocida en un plato o una charola que tuvo carne cruda; mantén los químicos lejos de los alimentos y debajo de ellos; y usa una pala limpia para el hielo, no un vaso ni tu mano."
          ],
          steps: ["Usa tablas y cuchillos distintos para la carne cruda y los alimentos listos para comer.", "Limpia y desinfecta las superficies entre tareas.", "Guarda los alimentos listos para comer arriba en el refrigerador.", "Guarda la carne cruda abajo: cortes enteros y pescado, luego carne molida y las aves hasta abajo.", "Tapa y etiqueta la comida guardada con el nombre y la fecha.", "Mantén los químicos lejos de los alimentos y debajo de ellos."],
          words: [["Contaminación cruzada", "cuando los gérmenes o los alérgenos pasan de un alimento, una superficie o una mano a otro alimento."], ["Tablas de colores", "tablas de cortar de distintos colores para distintos alimentos, para mantenerlos separados."]],
          slides: [
            { title: "Qué es la contaminación cruzada", bullets: ["Los gérmenes pasan de una cosa a otra", "Pollo crudo a la ensalada; tabla sucia al pan"] },
            { title: "Separa lo crudo de lo listo para comer", bullets: ["Tablas, cuchillos y utensilios distintos", "Limpia y desinfecta entre tareas"] },
            { title: "El refrigerador, de arriba hacia abajo", bullets: ["Alimentos listos para comer arriba", "Cortes enteros y pescado, luego carne molida", "Las aves en el estante de abajo"] },
            { title: "Otros hábitos", bullets: ["Nunca uses para comida cocida un plato que tuvo carne cruda", "Químicos lejos de los alimentos y debajo de ellos", "Usa una pala para el hielo"] }
          ],
          sources: [
            { name: "FDA: Manejo seguro de los alimentos (separar los crudos de los listos para comer, en inglés)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling" }
          ],
          tryIt: "Dibuja un refrigerador con cuatro estantes. Pon estos productos en los estantes correctos: una charola de muslos de pollo crudos, un recipiente de lechuga picada, carne de res molida cruda y filetes de salmón crudos. Escribe una oración que diga por qué importa el orden.",
          youCanNow: "guardar y preparar los alimentos para que los gérmenes no pasen entre los productos crudos y los listos para comer.",
          quickCheck: [
            { objective: "O2", q: "¿Qué es la contaminación cruzada?", options: ["Cocinar la comida demasiado tiempo", "Guardar la comida en un congelador", "Que los gérmenes pasen de un alimento o una superficie a otra", "Mezclar dos salsas"], answer: 2, why: "La contaminación cruzada es cuando los gérmenes pasan de una cosa, como el pollo crudo, a otra." },
            { objective: "O2", q: "Necesitas hielo para las bebidas. ¿Con qué lo sacas?", options: ["Con un vaso de vidrio", "Con tu mano limpia", "Con una taza del escurridor de platos", "Con una pala para hielo limpia"], answer: 3, why: "Una pala limpia evita que las manos y los vidrios rotos lleguen al hielo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Alérgenos, y limpiar frente a desinfectar",
          minutes: 5,
          goal: "Atender de forma segura a un cliente con una alergia alimentaria y limpiar y desinfectar bien una superficie.",
          text: [
            "Una alergia alimentaria puede matar. La FDA (la agencia de alimentos y medicamentos de Estados Unidos) nombra nueve alérgenos alimentarios principales: leche, huevo, pescado, mariscos crustáceos (como el camarón y el cangrejo), nueces de árbol, cacahuates (maní), trigo, soya y ajonjolí (sésamo). El ajonjolí se agregó el 1 de enero de 2023.",
            "Cuando un cliente diga que tiene una alergia, tómalo en serio. Avísale al gerente o al chef. Revisa la receta y las etiquetas de cada ingrediente. Lávate las manos, cámbiate los guantes y usa equipo y superficies limpios y desinfectados para preparar la comida. Mantenla separada de otros alimentos y llévala por separado. Si no estás seguro de que el platillo sea seguro, dilo; nunca adivines. Si un cliente muestra señales de una reacción, como dificultad para respirar o hinchazón, llama al 911 (el número de emergencias en Estados Unidos).",
            "Limpiar y desinfectar son cosas distintas. Limpiar quita la comida, la suciedad y la grasa que puedes ver. Desinfectar reduce los gérmenes a niveles seguros. Primero hay que limpiar; el desinfectante no funciona bien en una superficie sucia.",
            "Para limpiar y desinfectar una mesa de preparación: raspa los restos de comida, lava con agua y jabón, enjuaga, aplica el desinfectante a la concentración correcta (revísala con las tiras de prueba que usa tu cocina y las instrucciones de la etiqueta), déjalo actuar el tiempo de contacto que dice la etiqueta y deja que se seque al aire. No la seques con un trapo. Los platos en un fregadero de tres compartimentos siguen el mismo orden: lavar, enjuagar, desinfectar, secar al aire."
          ],
          steps: ["Alergia: avísale al gerente o al chef y revisa cada ingrediente.", "Lávate las manos, cámbiate los guantes y usa utensilios limpios y desinfectados.", "Mantén separado el pedido con alergia y llévalo por separado.", "Superficie: raspa, lava, enjuaga.", "Desinfecta a la concentración correcta (tiras de prueba) durante el tiempo de contacto de la etiqueta.", "Deja secar al aire; no la seques con un trapo."],
          words: [["Alérgeno", "un alimento que puede causar una reacción peligrosa del sistema inmunitario en algunas personas."], ["Desinfectar", "reducir a niveles seguros los gérmenes de una superficie limpia, con calor o con un químico."], ["Tiempo de contacto", "cuánto tiempo debe quedarse húmedo un desinfectante sobre una superficie para que funcione."], ["Tiras de prueba", "tiras de papel que muestran si una solución desinfectante tiene la concentración correcta."]],
          slides: [
            { title: "Los nueve alérgenos principales (FDA)", bullets: ["Leche, huevo, pescado, mariscos crustáceos", "Nueces de árbol, cacahuates (maní), trigo, soya", "Ajonjolí o sésamo (agregado el 1 de enero de 2023)"] },
            { title: "Un cliente tiene una alergia", bullets: ["Avísale al gerente o al chef; revisa cada etiqueta", "Manos limpias, guantes nuevos, utensilios desinfectados", "Nunca adivines; llama al 911 si hay una reacción"] },
            { title: "Limpiar frente a desinfectar", bullets: ["Limpiar quita la suciedad que puedes ver", "Desinfectar reduce los gérmenes a niveles seguros", "Siempre limpia primero"] },
            { title: "Limpia y desinfecta una mesa", bullets: ["Raspa, lava, enjuaga", "Desinfecta a la concentración correcta durante el tiempo de contacto", "Seca al aire; sin trapo"] }
          ],
          sources: [
            { name: "FDA: Alergias alimentarias (los nueve alérgenos alimentarios principales, en inglés)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" }
          ],
          tryIt: "Elige un platillo que conozcas, como una hamburguesa con queso o un salteado. Haz una lista de los nueve alérgenos principales que podría tener. Luego escribe los seis pasos que seguirías para limpiar y desinfectar la mesa de preparación después de hacerlo.",
          youCanNow: "manejar de forma segura un pedido con alergia y limpiar y desinfectar una superficie en el orden correcto.",
          quickCheck: [
            { objective: "O3", q: "¿Por qué debes limpiar una superficie antes de desinfectarla?", options: ["El desinfectante no funciona bien en una superficie sucia", "Limpiar hace que el desinfectante huela mejor", "Desinfectar quita la grasa por sí solo", "Solo hay que limpiar una vez a la semana"], answer: 0, why: "El desinfectante necesita una superficie limpia para bajar los gérmenes a niveles seguros." },
            { objective: "O3", q: "Un cliente pregunta si un platillo tiene ajonjolí y no estás seguro. ¿Qué le dices?", options: ["\"Debería estar bien.\"", "\"No estoy seguro; déjeme revisar con el chef y las etiquetas.\"", "\"Solo quítele el ajonjolí.\"", "\"Nadie es alérgico al ajonjolí.\""], answer: 1, why: "Nunca adivines sobre los alérgenos; revisa la receta y las etiquetas con el chef o el gerente." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Manos limpias y alimentos limpios",
        questions: [
          { objective: "O1", q: "¿Cuánto tiempo debes tallarte las manos al lavarlas?", options: ["3 segundos", "Al menos 20 segundos", "Solo hasta que se vean limpias", "2 minutos en el fregadero de platos"], answer: 1, why: "Tallar al menos 20 segundos quita los gérmenes; usa el lavamanos." },
          { objective: "O1", q: "Un cocinero de línea tiene que poner lechuga en una hamburguesa ya cocida. ¿Qué debe usar?", options: ["Las manos descubiertas, lavadas antes", "Los mismos guantes que usó para las carnes crudas", "Guantes limpios, pinzas o un utensilio", "Su delantal"], answer: 2, why: "Los alimentos listos para comer no se deben tocar con las manos descubiertas." },
          { objective: "O2", q: "¿Cuál es el estante correcto para el pollo crudo en el refrigerador?", options: ["El estante de abajo", "El estante de arriba", "Arriba de la ensalada", "Junto al pan"], answer: 0, why: "Las aves necesitan la temperatura de cocción más alta, así que van abajo, donde sus jugos no pueden gotear sobre otros alimentos." },
          { objective: "O3", q: "Un cliente dice que es alérgico al ajonjolí. ¿Qué haces primero?", options: ["Decirle que el ajonjolí no es un alérgeno", "Quitarle las semillas de ajonjolí al pan", "Suponer que el platillo está bien", "Avisarle al gerente o al chef y revisar cada ingrediente"], answer: 3, why: "Las alergias se toman en serio y se revisan; nunca se adivina." },
          { objective: "O3", q: "¿Cuál es el orden correcto para tratar una mesa de preparación?", options: ["Desinfectar y luego lavar", "Raspar, lavar, enjuagar, desinfectar, secar al aire", "Solo pasarle un trapo seco", "Enjuagar y luego secar con un trapo"], answer: 1, why: "El desinfectante solo funciona en una superficie que primero se limpió y se enjuagó." }
        ]
      }
    },
    {
      name: "Capítulo 2: Tiempo y temperatura",
      lessons: [
        {
          objectives: ["O4"],
          title: "La zona de temperatura peligrosa",
          minutes: 5,
          goal: "Mantener fría la comida fría y caliente la comida caliente, y revisar las temperaturas con un termómetro.",
          text: [
            "Los gérmenes crecen más rápido entre 41°F (5°C) y 135°F (57°C). Este rango se llama la zona de temperatura peligrosa. En el servicio de comida, el Food Code (Código de Alimentos) de la FDA dice que se mantenga la comida fría a 41°F (5°C) o menos y la comida caliente a 135°F (57°C) o más. (Los consejos para cocinar en casa de la FDA y del USDA, el Departamento de Agricultura, usan 40°F (4°C) y 140°F (60°C); en el trabajo, sigue el código que usa tu departamento de salud.)",
            "Los alimentos que necesitan este control se llaman alimentos TCS (siglas en inglés de control de tiempo y temperatura para la seguridad): carne, aves, pescado, huevos, lácteos, arroz, frijoles y papas cocidos, melones cortados, jitomates o tomates cortados, verduras de hoja cortadas, tofu y germinados, entre otros.",
            "Usa un termómetro para alimentos limpio y desinfectado. Mete la punta en la parte más gruesa del alimento, sin tocar el hueso ni la olla. Revisa las temperaturas de mantenimiento según un horario, por ejemplo cada 2 horas, y anótalas en el registro. Calibra el termómetro como te enseñen en tu cocina.",
            "Descongela los alimentos de forma segura: en el refrigerador, bajo agua fría corriendo, en el microondas si se van a cocinar de inmediato, o como parte de la cocción. Nunca descongeles comida sobre la barra."
          ],
          steps: ["Limpia y desinfecta el termómetro.", "Mete la punta en la parte más gruesa del alimento.", "Comida fría: 41°F (5°C) o menos. Comida caliente: 135°F (57°C) o más.", "Anota la lectura y la hora en el registro.", "Si la comida está en la zona peligrosa, avísale a tu gerente."],
          words: [["Zona de temperatura peligrosa", "de 41°F a 135°F (de 5°C a 57°C) en el servicio de comida: el rango donde los gérmenes crecen más rápido."], ["Alimento TCS", "un alimento que necesita control de tiempo y temperatura para seguir siendo seguro, como la carne, los lácteos, el arroz cocido y el melón cortado."], ["Calibrar", "revisar y ajustar un termómetro para que mida bien."]],
          slides: [
            { title: "La zona peligrosa", bullets: ["De 41°F a 135°F, de 5°C a 57°C (Food Code de la FDA)", "Comida fría: 41°F (5°C) o menos", "Comida caliente: 135°F (57°C) o más"] },
            { title: "Alimentos TCS", bullets: ["Carne, aves, pescado, huevos, lácteos", "Arroz, frijoles y papas cocidos", "Melones, tomates y verduras de hoja cortados"] },
            { title: "Usa un termómetro", bullets: ["Limpio y desinfectado", "En la parte más gruesa, sin tocar hueso ni olla", "Revisa y anota según un horario"] },
            { title: "Descongela de forma segura", bullets: ["En el refrigerador o bajo agua fría corriendo", "En el microondas si se cocina de inmediato", "Nunca sobre la barra"] }
          ],
          sources: [
            { name: "FDA: Temperaturas clave para la seguridad del huevo en el servicio de comida (41°F en frío, 135°F en caliente; en inglés)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" },
            { name: "FDA: Food Code 2022 (Código de Alimentos, en inglés)", url: "https://www.fda.gov/food/fda-food-code/food-code-2022" }
          ],
          tryIt: "Usa un termómetro para alimentos en tu casa o en el trabajo para medir la temperatura dentro de tu refrigerador (mételo en un vaso de agua dentro del refrigerador unos minutos) y la de una comida caliente. Anota si cada una es segura para el mantenimiento en el servicio de comida.",
          youCanNow: "nombrar la zona de temperatura peligrosa, mantener fuera de ella los alimentos TCS y revisar bien las temperaturas.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa alimento TCS?", options: ["Un alimento que siempre se sirve frío", "Un alimento que viene enlatado", "Un alimento que necesita control de tiempo y temperatura para ser seguro", "Un alimento que solo se vende en tiendas"], answer: 2, why: "Los alimentos TCS necesitan control de tiempo y temperatura porque en ellos pueden crecer gérmenes." },
            { objective: "O4", q: "Una bandeja de frijoles que se mantiene caliente marca 120°F en la revisión de las 2 horas. ¿Qué haces?", options: ["Lo anotas y sigues sirviendo", "Pones más frijoles encima", "Apagas el calentador", "Le avisas a tu gerente, porque está en la zona de temperatura peligrosa"], answer: 3, why: "La comida caliente debe estar a 135°F (57°C) o más, así que 120°F está en la zona de temperatura peligrosa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Temperaturas de cocción, recalentamiento y enfriamiento",
          minutes: 6,
          goal: "Cocinar, recalentar y enfriar los alimentos a las temperaturas seguras del Food Code de la FDA.",
          text: [
            "Cocinar a la temperatura interna correcta mata los gérmenes. Las principales temperaturas de cocción del Food Code de la FDA para el servicio de comida son: aves (pollo, pavo) y alimentos rellenos: 165°F (74°C) por menos de 1 segundo (instantáneo). Carne molida como la de hamburguesa, y huevos que se van a mantener para después: 155°F (68°C) durante 17 segundos. Cortes enteros de res y de cerdo, pescado y huevos que se sirven de inmediato: 145°F (63°C) durante 15 segundos.",
            "Recalentar: la comida cocida que enfriaste y que vas a mantener caliente se debe recalentar a 165°F (74°C) durante 15 segundos en un máximo de 2 horas. La comida cocinada en el microondas debe llegar a 165°F (74°C), revolverse, taparse y reposar 2 minutos.",
            "Enfriar: la comida cocida debe enfriarse de 135°F (57°C) a 70°F (21°C) en 2 horas, y de 135°F (57°C) a 41°F (5°C) en 6 horas en total. Enfría más rápido dividiendo la comida en recipientes poco profundos, usando un baño de hielo o una paleta enfriadora y revolviendo. Nunca dejes enfriar una olla grande sobre la barra.",
            "Tu departamento de salud local puede usar una versión más nueva o más vieja del Food Code, y los consejos para cocinar en casa son distintos (por ejemplo, 160°F (71°C) para la carne de res molida en casa). Para un examen o un trabajo, apréndete los números que usan tu curso y tu departamento de salud."
          ],
          steps: ["Revisa la parte más gruesa con un termómetro.", "Aves y alimentos rellenos: 165°F (74°C).", "Carne molida y huevos que se mantienen para después: 155°F (68°C) durante 17 segundos.", "Cortes enteros, pescado, huevos que se sirven de inmediato: 145°F (63°C) durante 15 segundos.", "Recalentar para mantener caliente: 165°F (74°C) durante 15 segundos en un máximo de 2 horas.", "Enfriar: de 135°F (57°C) a 70°F (21°C) en 2 horas, y a 41°F (5°C) en 6 horas en total."],
          words: [["Temperatura interna", "la temperatura en la parte más gruesa del alimento, medida con un termómetro."], ["Paleta enfriadora", "una paleta de plástico sellada, llena de hielo o de agua y congelada, que se usa para revolver y enfriar la comida rápido (en inglés, ice wand)."], ["Enfriamiento en dos etapas", "enfriar la comida cocida a 70°F (21°C) en 2 horas, y luego a 41°F (5°C) en 6 horas en total."]],
          slides: [
            { title: "Temperaturas de cocción (Food Code)", bullets: ["Aves y alimentos rellenos: 165°F (74°C), instantáneo", "Carne molida: 155°F (68°C) durante 17 segundos", "Cortes enteros, pescado: 145°F (63°C) durante 15 segundos"] },
            { title: "Recalentar para mantener caliente", bullets: ["165°F (74°C) durante 15 segundos", "En un máximo de 2 horas"] },
            { title: "Enfriamiento en dos etapas", bullets: ["De 135°F (57°C) a 70°F (21°C) en 2 horas", "Hasta 41°F (5°C) en 6 horas en total", "Recipientes bajos, baño de hielo, paleta enfriadora, revolver"] },
            { title: "Conoce tus números", bullets: ["Los departamentos de salud pueden usar otra versión del Food Code", "En casa es distinto: 160°F (71°C) para la carne de res molida", "Apréndete lo que usan tu curso y tu condado"] }
          ],
          sources: [
            { name: "FDA: Procedimientos de estandarización de inspectores de inocuidad alimentaria (temperaturas de cocción, recalentamiento y enfriamiento del Food Code; en inglés)", url: "https://www.fda.gov/media/155354/download" },
            { name: "FDA: Temperaturas clave para la seguridad del huevo en el servicio de comida (en inglés)", url: "https://www.fda.gov/food/retail-food-industryregulatory-assistance-training/key-temperatures-egg-safety-food-service-operations-and-retail-food-stores" }
          ],
          tryIt: "Haz una tarjeta de bolsillo con las temperaturas de cocción, recalentamiento, mantenimiento y enfriamiento de esta lección. Luego planea, paso a paso, cómo enfriarías rápido una olla llena de chili con carne.",
          youCanNow: "cocinar, recalentar, mantener y enfriar la comida a las temperaturas seguras del Food Code y revisarlas con un termómetro.",
          quickCheck: [
            { objective: "O5", q: "En el servicio de comida, ¿a qué temperatura se cocina un corte entero de res o de cerdo?", options: ["145°F (63°C) durante 15 segundos", "120°F durante 1 minuto", "155°F (68°C) durante 17 segundos", "165°F (74°C) durante 15 segundos"], answer: 0, why: "Según el Food Code de la FDA, los cortes enteros de res y de cerdo llegan a 145°F (63°C) durante 15 segundos." },
            { objective: "O5", q: "Hay que enfriar una olla grande llena de arroz. ¿Cuál es el mejor primer paso?", options: ["Dejar la olla en la mesa toda la noche", "Meter la olla caliente con tapa directo al refrigerador", "Repartir el arroz en bandejas poco profundas", "Taparla con una toalla"], answer: 2, why: "Las bandejas poco profundas dejan que la comida pase por la zona de temperatura peligrosa lo bastante rápido." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Sacar tu tarjeta de manipulador de alimentos y pasar el examen",
          minutes: 5,
          goal: "Encontrar la regla local de la tarjeta de manipulador de alimentos y prepararte para el examen.",
          text: [
            "Las reglas de la tarjeta de manipulador de alimentos cambian según el estado y el condado. Algunos estados exigen una tarjeta a la mayoría de los trabajadores de alimentos; otros lo dejan en manos de los condados o las ciudades; otros no tienen una regla general. Tu departamento de salud local o tu oficina de salud ambiental te dirá qué se aplica donde trabajas.",
            "Ejemplo: California. Según la sección 113948 del Código de Salud y Seguridad de California, los manipuladores de alimentos deben sacar una tarjeta de manipulador de alimentos de California dentro de los 30 días después de que los contrate un establecimiento de alimentos. La tarjeta vale por tres años, y el curso debe ser de un proveedor de capacitación acreditado por el Instituto Nacional Estadounidense de Estándares (ANSI). Algunos lugares están exentos, como ciertas tiendas de abarrotes y comedores escolares, así que revisa con tu condado.",
            "Una tarjeta de manipulador de alimentos es distinta de una certificación de gerente de alimentos (como el examen ServSafe Manager). Los cursos de manipulador de alimentos son cortos y cubren lo básico de este curso. La certificación de gerente es más larga, más profunda y normalmente se exige a la persona a cargo.",
            "Para prepararte: toma un curso acreditado, repasa cada tema de este curso, usa la tarjeta de bolsillo que hiciste y practica con preguntas que escribas tú o que vengan con tu curso. Lee cada pregunta con cuidado: palabras como \"primero\", \"mejor\" y \"nunca\" importan. Muchos cursos acreditados y exámenes se ofrecen en español."
          ],
          steps: ["Busca el nombre de tu estado o condado más \"food handler card\" y encuentra la página del departamento de salud (muchas veces termina en .gov).", "Anota el plazo después de la contratación, cuánto dura la tarjeta y qué cursos se aceptan.", "Elige un curso acreditado de la lista que indica tu departamento de salud.", "Repasa el lavado de manos, la contaminación cruzada, las temperaturas, los alérgenos y la limpieza.", "Toma el curso y el examen, y guarda una copia de tu tarjeta."],
          words: [["Tarjeta de manipulador de alimentos", "prueba de que terminaste un curso básico de inocuidad alimentaria; se exige a los trabajadores de alimentos en algunos estados y condados (en inglés, food handler card)."], ["ANSI", "el Instituto Nacional Estadounidense de Estándares, que acredita a los proveedores de capacitación en inocuidad alimentaria."], ["Certificación de gerente de alimentos", "una credencial de inocuidad alimentaria más avanzada, normalmente para la persona a cargo de una cocina."]],
          slides: [
            { title: "Las reglas cambian según el lugar", bullets: ["Algunos estados exigen tarjeta; otros lo dejan a los condados", "Tu departamento de salud local lo sabe"] },
            { title: "Ejemplo: California", bullets: ["Tarjeta dentro de los 30 días después de la contratación", "Vale por tres años", "Curso de un proveedor acreditado por ANSI"] },
            { title: "Tarjeta de manipulador frente a certificación de gerente", bullets: ["Manipulador: corto, lo básico", "Gerente: más largo, para la persona a cargo"] },
            { title: "Prepárate para el examen", bullets: ["Toma un curso acreditado", "Usa tu tarjeta de bolsillo de temperaturas", "Fíjate en palabras como primero, mejor, nunca"] }
          ],
          sources: [
            { name: "Condado de Sonoma, California: Tarjeta de manipulador de alimentos (30 días, tres años, ANSI; en inglés)", url: "https://sonomacounty.gov/Health/Environmental-Health/Food-Program/Food-Handler-Card/" },
            { name: "Departamento de Salud Pública de California: Capacitación en inocuidad alimentaria para comercios (HSC 113948; en inglés)", url: "https://www.cdph.ca.gov/Programs/CEH/DFDCS/CDPH%20Document%20Library/FDB/FoodSafetyProgram/RetailFood/RetailFoodSafetyTraining.pdf" }
          ],
          tryIt: "Tarea final: escribe tu Lista para un turno seguro (lavado de manos, almacenamiento, temperaturas, enfriamiento, pasos ante una alergia, pasos para limpiar y desinfectar, síntomas de enfermedad que hay que reportar). Luego busca la regla de la tarjeta de manipulador de alimentos de tu estado o condado y escribe arriba el plazo, cuánto dura la tarjeta y qué cursos cuentan.",
          youCanNow: "encontrar la regla de la tarjeta de manipulador de alimentos donde trabajas, elegir un curso aceptado y prepararte para el examen.",
          quickCheck: [
            { objective: "O6", q: "¿Cuál es la diferencia entre una tarjeta de manipulador de alimentos y una certificación de gerente de alimentos?", options: ["Son lo mismo", "La tarjeta cubre lo básico; la certificación de gerente es más profunda y es para la persona a cargo", "La tarjeta es solo para gerentes", "La certificación de gerente es más corta"], answer: 1, why: "Los cursos de manipulador de alimentos cubren lo básico; la certificación de gerente es más larga y casi siempre la necesita la persona a cargo." },
            { objective: "O6", q: "La próxima semana empiezas un trabajo nuevo en una cocina. ¿Cómo encuentras la regla de tu tarjeta de manipulador de alimentos?", options: ["Le preguntas a un amigo de otro estado", "Supones que no hay ninguna regla", "Compras el primer curso que ves en internet", "Revisas la página del departamento de salud de tu estado o condado"], answer: 3, why: "Las reglas cambian según el estado y el condado, así que la fuente es el departamento de salud local." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Tiempo y temperatura",
        questions: [
          { objective: "O4", q: "En el servicio de comida, ¿cuál es la zona de temperatura peligrosa según el Food Code de la FDA?", options: ["De 0°F a 32°F (de -18°C a 0°C)", "De 41°F a 135°F (de 5°C a 57°C)", "De 165°F a 212°F (de 74°C a 100°C)", "Solo de 70°F a 80°F (de 21°C a 27°C)"], answer: 1, why: "Los gérmenes crecen más rápido entre 41°F (5°C) y 135°F (57°C)." },
          { objective: "O5", q: "¿Cuál es la temperatura mínima de cocción del pollo en el servicio de comida?", options: ["145°F (63°C)", "135°F (57°C)", "155°F (68°C)", "165°F (74°C)"], answer: 3, why: "Las aves deben llegar a 165°F (74°C)." },
          { objective: "O5", q: "Hay que enfriar una olla grande de sopa. ¿Cuál es el método más seguro?", options: ["Dividirla en recipientes poco profundos y usar un baño de hielo", "Dejarla sobre la barra toda la noche", "Meter la olla caliente entera al fondo del refrigerador, tapada", "Agregarle agua caliente"], answer: 0, why: "Los recipientes poco profundos y el hielo enfrían la comida rápido a través de la zona peligrosa." },
          { objective: "O5", q: "La comida cocida debe enfriarse de 135°F (57°C) a 70°F (21°C) en:", options: ["6 horas", "12 horas", "2 horas", "24 horas"], answer: 2, why: "La primera etapa del enfriamiento es de 135°F (57°C) a 70°F (21°C) en 2 horas." },
          { objective: "O6", q: "En California, un nuevo manipulador de alimentos debe sacar su tarjeta dentro de:", options: ["30 días después de la contratación", "Un año", "Antes de cumplir 21 años", "Nunca se exige"], answer: 0, why: "La regla de California es de 30 días después de la contratación; la tarjeta dura tres años." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Manipulador de alimentos y preparación para el examen ServSafe",
    questions: [
      { objective: "O1", q: "¿Dónde deben lavarse las manos los manipuladores de alimentos?", options: ["En el fregadero de preparación", "En el fregadero de platos", "En el lavamanos", "En cualquier fregadero que esté vacío"], answer: 2, why: "Usa solo el lavamanos, para no contaminar los alimentos ni los platos." },
      { objective: "O1", q: "¿Cuándo debes lavarte las manos antes de ponerte guantes?", options: ["Nunca; los guantes bastan", "Siempre", "Solo una vez al día", "Solo después del almuerzo"], answer: 1, why: "Los guantes no reemplazan el lavado de manos." },
      { objective: "O6", q: "Un cocinero tiene diarrea y vomitó esta mañana. ¿Qué debe hacer?", options: ["Avisarle al gerente antes de trabajar con alimentos", "Trabajar pero con dos pares de guantes", "Tomar agua y seguir cocinando", "No decir nada"], answer: 0, why: "Estos síntomas se deben reportar; puede que el trabajador tenga que alejarse de los alimentos." },
      { objective: "O2", q: "¿Cuál es un alimento listo para comer?", options: ["Carne de res molida cruda", "Pollo crudo", "Camarón crudo", "Un tomate rebanado para un sándwich"], answer: 3, why: "Se come sin cocinarlo más, así que no se toca con las manos descubiertas." },
      { objective: "O1", q: "Tienes una cortada pequeña en un dedo. Debes:", options: ["Ignorarla", "Cubrirla con una venda y ponerte un guante", "Ponerte solo una venda", "Irte a casa una semana"], answer: 1, why: "La venda más el guante mantienen la herida lejos de la comida." },
      { objective: "O2", q: "¿Cuál es contaminación cruzada?", options: ["Cocinar el pollo a 165°F (74°C)", "Lavarte las manos durante 20 segundos", "Cortar pollo crudo y luego ensalada en la misma tabla sin desinfectar", "Etiquetar la comida con la fecha"], answer: 2, why: "Los gérmenes pasan del pollo crudo a la ensalada." },
      { objective: "O2", q: "En el refrigerador, ¿qué va en el estante de ARRIBA?", options: ["Los alimentos listos para comer, como la fruta picada", "Las aves crudas", "La carne de res molida cruda", "Los químicos"], answer: 0, why: "Los alimentos listos para comer van arriba de los crudos para que nada gotee sobre ellos." },
      { objective: "O2", q: "¿Dónde se deben guardar los químicos de limpieza?", options: ["En el estante arriba de la comida", "Junto a la barra de ensaladas", "En recipientes vacíos de comida", "Lejos de los alimentos y debajo de ellos"], answer: 3, why: "Guardar los químicos lejos y abajo evita que goteen o se derramen sobre la comida." },
      { objective: "O3", q: "¿Cuántos alérgenos alimentarios principales nombra la FDA?", options: ["Cinco", "Nueve", "Doce", "Tres"], answer: 1, why: "Leche, huevo, pescado, mariscos crustáceos, nueces de árbol, cacahuates, trigo, soya y ajonjolí." },
      { objective: "O3", q: "Un cliente con alergia al cacahuate pide un platillo. ¿Qué paso está MAL?", options: ["Avisarle al chef", "Revisar la etiqueta de cada ingrediente", "Usar utensilios limpios y desinfectados", "Quitarle los cacahuates a un platillo ya hecho y servirlo"], answer: 3, why: "Quitar el alérgeno no hace seguro el platillo; prepara uno nuevo con utensilios limpios." },
      { objective: "O3", q: "¿Cuál es la diferencia entre limpiar y desinfectar?", options: ["Limpiar quita la suciedad; desinfectar reduce los gérmenes a niveles seguros", "Son lo mismo", "Desinfectar quita la suciedad; limpiar mata los gérmenes", "Limpiar es solo para los pisos"], answer: 0, why: "Primero se limpia y luego se desinfecta." },
      { objective: "O3", q: "Después de desinfectar una tabla de cortar, debes:", options: ["Secarla con un trapo", "Enjuagarle el desinfectante de inmediato", "Dejar que se seque al aire", "Ponerla directo debajo de la carne cruda"], answer: 2, why: "Secar al aire deja que el desinfectante actúe su tiempo de contacto sin agregar gérmenes de un trapo." },
      { objective: "O3", q: "¿Cómo sabes si una solución desinfectante tiene la concentración correcta?", options: ["Por el olor", "La revisas con las tiras de prueba que usa tu cocina", "Por el color", "Le pones de más por si acaso"], answer: 1, why: "Las tiras de prueba muestran la concentración; si es muy débil no funciona y si es muy fuerte puede ser peligrosa." },
      { objective: "O4", q: "¿A qué temperatura o menos se deben mantener los alimentos TCS fríos en el servicio de comida?", options: ["50°F (10°C)", "60°F (16°C)", "45°F (7°C)", "41°F (5°C)"], answer: 3, why: "El Food Code dice que el mantenimiento en frío es a 41°F (5°C) o menos." },
      { objective: "O4", q: "Los alimentos TCS calientes en un bufé se deben mantener a:", options: ["135°F (57°C) o más", "100°F (38°C) o más", "120°F (49°C) o más", "Temperatura ambiente"], answer: 0, why: "Según el Food Code, el mantenimiento en caliente es a 135°F (57°C) o más." },
      { objective: "O4", q: "¿Cuál es una forma segura de descongelar pollo congelado?", options: ["Sobre la barra toda la noche", "En el refrigerador", "En agua tibia sobre la barra", "Al sol"], answer: 1, why: "Descongelar en el refrigerador lo mantiene fuera de la zona peligrosa." },
      { objective: "O5", q: "Las carnes de hamburguesa de res molida en un restaurante deben llegar a:", options: ["135°F (57°C)", "145°F (63°C) durante 15 segundos", "155°F (68°C) durante 17 segundos", "100°F (38°C)"], answer: 2, why: "El Food Code fija 155°F (68°C) durante 17 segundos para la carne molida." },
      { objective: "O5", q: "Una chuleta de cerdo o un filete de salmón deben llegar a:", options: ["165°F (74°C) durante 15 segundos", "120°F (49°C)", "100°F (38°C)", "145°F (63°C) durante 15 segundos"], answer: 3, why: "Los cortes enteros y el pescado van a 145°F (63°C) durante 15 segundos." },
      { objective: "O5", q: "El chili que sobró y se enfrió ayer va a ir a la bandeja de mantenimiento caliente. Recaliéntalo a:", options: ["165°F (74°C) durante 15 segundos en un máximo de 2 horas", "135°F (57°C) durante 6 horas", "100°F (38°C)", "Solo hasta que esté tibio"], answer: 0, why: "La comida cocinada y enfriada en el lugar se recalienta a 165°F (74°C) durante 15 segundos en un máximo de 2 horas para mantenerla caliente." },
      { objective: "O6", q: "¿Dónde encuentras la regla de la tarjeta de manipulador de alimentos de tu zona?", options: ["En una publicación de redes sociales", "En lo que crea un compañero", "En el departamento de salud de tu estado o condado", "En cualquier sitio web de exámenes"], answer: 2, why: "Las reglas cambian según el estado y el condado, así que el departamento de salud local es la fuente oficial." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      2,
      5,
      8,
      10,
      13,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Lavado de manos",
        objective: "O1",
        notYet: "Faltan los pasos o los momentos del lavado de manos, o están mal.",
        meets: "Enumera todos los pasos del lavado de manos y al menos seis momentos para lavarse.",
        exceeds: "También dice cuándo cambiarse los guantes y cómo manejar los alimentos listos para comer."
      },
      {
        name: "Almacenamiento y contaminación cruzada",
        objective: "O2",
        notYet: "Los alimentos crudos están arriba de los listos para comer, o no hay utensilios separados.",
        meets: "Muestra el orden correcto de los estantes y tablas y cuchillos separados o desinfectados.",
        exceeds: "También cubre las etiquetas con nombre y fecha y guardar los químicos debajo de la comida."
      },
      {
        name: "Pasos para alergias y desinfección",
        objective: "O3",
        notYet: "Faltan los pasos para una alergia o el orden para limpiar y desinfectar.",
        meets: "Enumera los pasos para una alergia y el orden: raspar, lavar, enjuagar, desinfectar, secar al aire.",
        exceeds: "Menciona las tiras de prueba y el tiempo de contacto del desinfectante que dice la etiqueta."
      },
      {
        name: "Temperaturas para mantener",
        objective: "O4",
        notYet: "Faltan las temperaturas para mantener la comida, o están mal.",
        meets: "Fría a 41°F (5°C) o menos y caliente a 135°F (57°C) o más, revisadas con un termómetro.",
        exceeds: "Agrega un horario de revisiones y un registro."
      },
      {
        name: "Cocción y enfriamiento",
        objective: "O5",
        notYet: "Faltan los números de cocción o de enfriamiento, o están mal.",
        meets: "Da las temperaturas de cocción correctas y los dos límites de tiempo para enfriar.",
        exceeds: "Agrega la regla para recalentar y cómo enfriar la comida rápido."
      },
      {
        name: "Enfermedad y regla local de la tarjeta",
        objective: "O6",
        notYet: "No enumera síntomas de enfermedad, o no hay regla de la tarjeta al principio.",
        meets: "Enumera los síntomas que hay que reportar y el plazo, la duración y los cursos aceptados de la tarjeta local.",
        exceeds: "Nombra la página del departamento de salud donde encontró la regla."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que sacan una tarjeta de manipulador de alimentos con un curso acreditado dentro de 60 días",
      "Personas que consiguen o mantienen un trabajo en el servicio de comida dentro de 90 días (encuesta de seguimiento)",
      "Los empleadores socios reportan menos errores de inocuidad alimentaria en las inspecciones de salud o en las revisiones de turno"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Un teléfono o una computadora para leer las lecciones",
      "Un lavabo con jabón para practicar el lavado de manos",
      "Un termómetro de alimentos (no es obligatorio, pero ayuda)",
      "Papel y lápiz para la tarjeta de bolsillo y la Lista para un turno seguro",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Haz una demostración en vivo del lavado de manos y cuenten juntos los 20 segundos.",
      "Usa fotos o recipientes vacíos para el ejercicio de los estantes del refrigerador; no hace falta comida cruda.",
      "Recuerda a los participantes que los números para cocinar en casa no son iguales a los del servicio de comida, y que el código que cuenta es el de su departamento de salud.",
      "Ayuda a cada persona a buscar la regla de la tarjeta de su propio estado o condado; cambia de un lugar a otro.",
      "Califica la tarea final con la rúbrica y da comentarios sobre una fila en Todavía no a la vez."
    ]
  }
};

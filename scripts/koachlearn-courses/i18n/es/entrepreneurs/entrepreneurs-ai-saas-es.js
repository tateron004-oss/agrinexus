"use strict";

// Koach Learn course (Spanish translation of entrepreneurs/entrepreneurs-ai-saas.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "entrepreneurs-ai-saas-es",
  lang: "es",
  translationOf: "entrepreneurs-ai-saas",
  category: "Entrepreneurs",
  name: "Cómo crear productos SaaS con IA",
  skills: "Elegir un nicho SaaS específico, Definir un producto mínimo viable, Entender las API de IA y sus costos de uso, Hacer prototipos sin mucho código, Poner precio a una suscripción, Lanzar con confianza y seguridad",
  outcome: "convertir un problema de negocio específico en un plan de una página para un pequeño producto de software como servicio con IA, construir un prototipo clicable o funcional de su función principal, calcular un precio de suscripción que cubra los costos de uso de la IA y preparar una lista de lanzamiento honesta y segura.",
  about: [
    "SaaS (software como servicio, por sus siglas en inglés) es el software que la gente usa en línea y paga por suscripción, por ejemplo con un plan mensual. Muchos productos SaaS nuevos ponen un modelo de IA detrás de una pantalla sencilla que hace muy bien un solo trabajo: escribir anuncios para administradores de propiedades, resumir llamadas para talleres de reparación, traducir menús.",
    "Este curso es para emprendedores que quieren crear un pequeño producto SaaS con IA, incluidas personas que todavía no programan. Vas a elegir un nicho específico, definir un producto mínimo viable, aprender cómo funcionan las API de IA y sus costos de uso, construir un prototipo, ponerle precio y preparar un lanzamiento honesto sobre lo que hace la IA y cuidadoso con los datos de los usuarios.",
    "Cada lección dura unos cinco minutos más una tarea práctica. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Los precios de los modelos de IA y los planes de las herramientas cambian seguido: revisa siempre la página de precios del propio proveedor."
  ],
  finalTask: "Prepara un paquete inicial de SaaS con IA: un plan de producto de una página (nicho, usuario, problema, la función principal), un prototipo de la función principal (una maqueta clicable, una aplicación sin código o un notebook corto que funcione), una hoja de precios que muestre el costo de uso de IA por usuario al mes y tu precio, y una lista de lanzamiento que cubra afirmaciones honestas, privacidad, términos, revisión humana y cómo pueden contactarte los usuarios.",
  chapters: [
    {
      name: "Capítulo 1: Define el producto",
      lessons: [
        {
          title: "Elegir un nicho específico",
          minutes: 5,
          goal: "Elegir un usuario específico y un trabajo repetido específico para tu producto SaaS con IA.",
          text: [
            "Ya existen herramientas de IA grandes y generales, y muchas veces son gratis. Los productos SaaS pequeños ganan siendo específicos: un tipo de usuario, un trabajo repetido, hecho mejor que con un asistente de chat general. \"Herramienta de escritura con IA\" es demasiado amplio. \"Convierte las notas de obra de un contratista en una cotización limpia para el cliente en dos minutos\" es específico.",
            "Los buenos nichos tienen usuarios que hacen el mismo trabajo seguido, pierden tiempo o dinero en él y ya pagan por software. Puedes llegar a ellos a través de una asociación del gremio, un foro o una red local.",
            "Pídele a la IA ideas de nichos a partir de tu propia experiencia: \"He trabajado en [campo]. Haz una lista de diez trabajos repetidos de escribir u ordenar que la gente de este campo hace cada semana.\" Luego habla con tres personas del nicho antes de seguir."
          ],
          steps: ["Haz una lista de los campos que conoces bien.", "Pídele a la IA trabajos repetidos en esos campos.", "Elige un usuario y un trabajo.", "Revisa: frecuente, costoso, ya paga por software, fácil de alcanzar.", "Habla con tres personas que hacen ese trabajo."],
          words: [["SaaS", "software como servicio: software en línea que la gente paga por suscripción."], ["Nicho", "un grupo pequeño y específico de usuarios con una necesidad en común."]],
          slides: [
            { title: "Lo específico gana", bullets: ["Un usuario, un trabajo repetido", "Mejor que un asistente de chat general", "\"Notas de obra a cotización en dos minutos\""] },
            { title: "Buenos nichos", bullets: ["Hacen el trabajo seguido", "Pierden tiempo o dinero en él", "Ya pagan por software; fáciles de alcanzar"] },
            { title: "Empieza por lo que conoces", bullets: ["Pide a la IA trabajos repetidos de tu campo", "Habla con tres personas antes de construir"] }
          ],
          tryIt: "Usa la IA para hacer una lista de diez trabajos repetidos en un campo que conoces, elige un usuario y un trabajo y escribe tu idea de producto en una oración. Pregúntale al menos a una persona de ese nicho si le ayudaría.",
          youCanNow: "elegir un nicho específico y alcanzable para un producto SaaS con IA."
        },
        {
          title: "Definir un producto mínimo viable",
          minutes: 5,
          goal: "Definir la única función principal que tu primera versión debe hacer bien.",
          text: [
            "Un producto mínimo viable (MVP, por sus siglas en inglés) es la versión más pequeña que resuelve el problema principal lo bastante bien como para que alguien pague. En un SaaS con IA suele ser una sola pantalla: el usuario pone algo, la IA hace el trabajo, el usuario revisa y copia el resultado.",
            "Escribe tu flujo principal en una línea: \"El contratista pega sus notas de obra, elige una plantilla, recibe un borrador de cotización, lo edita y lo descarga.\" Todo lo demás (cuentas, equipos, integraciones, paneles) espera hasta que haya gente pagando.",
            "Decide también lo que la IA nunca debe hacer, como inventar precios, dar consejos legales o enviar algo sin el clic del usuario. Estas reglas dan forma tanto a tus instrucciones para la IA como a tu pantalla."
          ],
          steps: ["Escribe el flujo principal en una línea: entrada, trabajo de la IA, revisión del usuario, resultado.", "Haz una lista de las funciones que TODAVÍA NO vas a construir.", "Escribe tres cosas que la IA nunca debe hacer.", "Dibuja la pantalla en papel."],
          words: [["MVP", "producto mínimo viable: la versión más pequeña que resuelve el problema principal lo bastante bien como para venderse."], ["Flujo principal", "el camino principal que sigue un usuario para hacer el trabajo."]],
          slides: [
            { title: "La versión útil más pequeña", bullets: ["Una sola pantalla", "Entrada, trabajo de la IA, revisión del usuario, resultado"] },
            { title: "Todavía no", bullets: ["Equipos y paneles", "Integraciones", "Todo lo que no esté en el flujo principal"] },
            { title: "La IA nunca debe", bullets: ["Inventar precios o datos", "Dar consejos legales o médicos", "Actuar sin el clic del usuario"] }
          ],
          tryIt: "Escribe tu flujo principal en una línea, tu lista de \"todavía no\" y tres reglas de \"nunca\", y dibuja la pantalla única.",
          youCanNow: "definir un MVP de SaaS con IA alrededor de una función principal con límites claros."
        },
        {
          title: "Cómo funcionan las API de IA y cuánto cuestan",
          minutes: 6,
          goal: "Explicar cómo una aplicación usa un modelo de IA a través de una API y calcular el costo por usuario.",
          text: [
            "Una API (interfaz de programación de aplicaciones) permite que tu aplicación envíe una solicitud a un modelo de IA y reciba la respuesta. Tu aplicación envía tus instrucciones más lo que escribió el usuario; el modelo devuelve texto (o una imagen, o datos ordenados); tu aplicación lo muestra.",
            "La mayoría de los proveedores de modelos de IA cobran por uso, muchas veces contado en tokens (pedacitos de texto, más o menos partes de palabras), con precios distintos para la entrada y la salida y para cada modelo. Los precios cambian seguido, así que búscalos en la página de precios del proveedor el día que hagas tu plan.",
            "Calcula el costo por usuario: más o menos cuántas solicitudes hace un usuario al mes, por el tamaño promedio de cada solicitud y respuesta, por el precio. Pídele a la IA que te ayude a armar la hoja de cálculo y revisa los cálculos. Mantén en secreto tu clave de API: nunca la pegues en un chat, una página web o un archivo público."
          ],
          steps: ["Escribe lo que envía tu aplicación: instrucciones + entrada del usuario.", "Calcula las solicitudes por usuario al mes.", "Calcula el tamaño de cada solicitud y respuesta.", "Busca los precios actuales en la página de precios del proveedor.", "Calcula el costo por usuario al mes y mantén en secreto tu clave de API."],
          words: [["API", "una forma en que un programa envía solicitudes a otro y recibe respuestas."], ["Token", "un pedacito de texto que los proveedores de IA cuentan para medir el uso y cobrar."], ["Clave de API", "un código secreto que permite a tu aplicación usar la API de un proveedor y que se te cobra a ti."]],
          slides: [
            { title: "Cómo funciona", bullets: ["Tu aplicación envía instrucciones + entrada del usuario", "El modelo devuelve una respuesta", "Tu aplicación se la muestra al usuario"] },
            { title: "Precio por uso", bullets: ["Muchas veces se cuenta en tokens", "Entrada y salida tienen precios distintos", "Revisa la página de precios del proveedor"] },
            { title: "Costo por usuario", bullets: ["Solicitudes al mes", "x tamaño de cada solicitud y respuesta", "x precio actual"] },
            { title: "Mantén en secreto la clave de API", bullets: ["Nunca en un chat, página web o archivo público", "Quien la tenga puede gastar tu dinero"] }
          ],
          tryIt: "Arma una hoja de cálculo pequeña que estime tu costo de IA por usuario al mes: solicitudes, tamaño y el precio actual según la página de precios del proveedor que elegiste. Revisa cada fórmula.",
          youCanNow: "explicar cómo una aplicación SaaS con IA usa una API y calcular su costo de uso por usuario."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Define el producto",
        questions: [
          { q: "¿Cuál es el mejor nicho para un pequeño producto SaaS con IA?", options: ["Una herramienta de IA para todo el mundo", "Convertir las notas de obra de contratistas en cotizaciones para clientes", "Un asistente de chat general", "Todos los negocios"], answer: 1, why: "Un usuario específico más un trabajo repetido le gana a las herramientas generales." },
          { q: "¿Qué es un MVP?", options: ["Un producto terminado con todas las funciones", "La versión más cara", "Un premio deportivo", "La versión más pequeña que resuelve el problema principal lo bastante bien como para venderse"], answer: 3, why: "MVP = producto mínimo viable." },
          { q: "¿Qué función debería esperar hasta que haya gente pagando?", options: ["Paneles para equipos", "El flujo principal de entrada a resultado", "El paso de revisión del usuario", "El trabajo de la IA en sí"], answer: 0, why: "Solo el flujo principal va en el MVP." },
          { q: "Los proveedores de IA muchas veces miden el uso en:", options: ["Minutos de luz del día", "Páginas", "Tokens", "Clientes"], answer: 2, why: "Los tokens son pedacitos de texto que se usan para cobrar." },
          { q: "¿Dónde NUNCA debe ir tu clave de API?", options: ["En un administrador de contraseñas", "En una zona segura de configuración de tu aplicación", "En un chat, una página web o un archivo público", "En tu cuenta del proveedor"], answer: 2, why: "Quien tenga la clave puede usarla y gastar tu dinero." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construye, ponle precio y lanza",
      lessons: [
        {
          title: "Hacer un prototipo de la función principal",
          minutes: 6,
          goal: "Construir un prototipo de tu función principal y probarlo con entradas reales.",
          text: [
            "Empieza probando el trabajo de la IA en sí, antes de cualquier aplicación: pon tus instrucciones y diez entradas reales (sin datos personales) en un asistente de chat y revisa los resultados. Si la IA no puede hacer bien el trabajo en un chat, una aplicación no lo va a arreglar. Ajusta las instrucciones hasta que 8 o 9 de cada 10 resultados sean buenos.",
            "Luego haz el prototipo al nivel que puedas: una maqueta clicable de la pantalla (en una herramienta de diseño como Canva o en unas diapositivas), un creador de aplicaciones sin código que pueda llamar a un modelo de IA, o un notebook corto de Python en Google Colab que llame a una API manteniendo en secreto tu clave.",
            "Muéstrale el prototipo a tres personas de tu nicho y obsérvalas mientras lo usan. Anota dónde se traban y dónde hubo que corregir el resultado de la IA."
          ],
          steps: ["Junta diez entradas reales y quita los datos privados.", "Prueba tus instrucciones en un asistente de chat.", "Mejora las instrucciones hasta que la mayoría de los resultados sean buenos.", "Construye un prototipo: maqueta, aplicación sin código o notebook.", "Observa a tres usuarios del nicho probarlo y anota los problemas."],
          words: [["Prototipo", "una versión temprana y sencilla que se usa para probar una idea."], ["Maqueta", "una imagen o modelo clicable de una pantalla que muestra cómo se verá la aplicación."], ["Google Colab", "un notebook en línea gratuito donde puedes ejecutar código de Python en el navegador."]],
          slides: [
            { title: "Primero prueba el trabajo de la IA", bullets: ["Instrucciones + diez entradas reales", "En un asistente de chat", "Busca 8 o 9 buenos resultados de 10"] },
            { title: "Elige el nivel de tu prototipo", bullets: ["Maqueta clicable", "Creador de aplicaciones sin código", "Notebook de Python en Google Colab"] },
            { title: "Observa a usuarios reales", bullets: ["Tres personas de tu nicho", "¿Dónde se traban?", "¿Dónde hubo que corregir a la IA?"] }
          ],
          tryIt: "Prueba tus instrucciones con diez entradas sin datos personales y califica los resultados. Luego construye el prototipo más simple que puedas y muéstraselo al menos a una persona de tu nicho.",
          youCanNow: "comprobar que una función de IA funciona y construir un prototipo que la gente pueda probar."
        },
        {
          title: "Poner precio a una suscripción",
          minutes: 5,
          goal: "Fijar un precio mensual que cubra el uso de IA y otros costos y deje margen de ganancia.",
          text: [
            "Empieza por el valor: ¿cuánto tiempo o dinero le ahorra tu producto a un usuario cada mes? Si le ahorra tres horas a un contratista, es fácil justificar un precio muy por debajo del valor de esas horas.",
            "Luego revisa los costos: uso de IA por usuario (de la Lección 3), alojamiento y herramientas, comisiones por procesar pagos, tiempo de soporte y tu propio tiempo. Los usuarios que usan mucho pueden costar bastante más que el promedio, así que considera límites de uso por plan.",
            "Muchos productos SaaS ofrecen dos o tres planes con límites claros y una prueba gratis. Pídele a la IA que sugiera estructuras de planes, pero fija tú los números finales y revísalos en una hoja de cálculo. Para el impuesto sobre las ventas y los impuestos del negocio sobre software, consulta la agencia de impuestos de tu estado e irs.gov (el sitio del IRS, la agencia de impuestos de Estados Unidos), o pregúntale a un contador, porque las reglas cambian según el lugar."
          ],
          steps: ["Calcula el valor para el usuario cada mes.", "Suma los costos por usuario: uso de IA, alojamiento, pagos, soporte.", "Planea para los usuarios que usan mucho con límites.", "Diseña dos o tres planes y una prueba gratis.", "Revisa los cálculos y pregúntale a un contador sobre impuestos."],
          words: [["Suscripción", "pagar una cantidad regular, por ejemplo cada mes, para seguir usando un producto."], ["Límite de uso", "un tope de cuánto puede usar un plan, como 100 cotizaciones al mes."], ["Prueba gratis", "un periodo corto en que la gente puede usar el producto sin pagar."]],
          slides: [
            { title: "Empieza por el valor", bullets: ["Tiempo o dinero ahorrado cada mes", "Un precio muy por debajo de ese valor"] },
            { title: "Cubre tus costos", bullets: ["Uso de IA por usuario", "Alojamiento, pagos, soporte", "Usuarios intensivos: pon límites"] },
            { title: "Planes", bullets: ["Dos o tres planes con límites claros", "Una prueba gratis", "Las reglas de impuestos varían: pregunta a un contador"] }
          ],
          sources: [{ name: "IRS: Centro de impuestos para trabajadores por cuenta propia (en inglés)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Haz una hoja de precios: valor por usuario, costo por usuario (incluido el uso de IA), dos planes con límites y la ganancia por usuario en cada plan. Revisa cada fórmula.",
          youCanNow: "ponerle precio a una suscripción con IA que cubra los costos de uso y corresponda al valor para los usuarios."
        },
        {
          title: "Lanzar con confianza y seguridad",
          minutes: 6,
          goal: "Preparar una lista de lanzamiento que mantenga honestas las afirmaciones y seguros los datos de los usuarios.",
          text: [
            "La confianza es tu mayor activo como SaaS nuevo. Sé honesto sobre lo que hace la IA y sus límites: di que los resultados los genera la IA y que hay que revisarlos. La FTC (la Comisión Federal de Comercio de Estados Unidos) dice que la publicidad debe ser verdadera, no engañosa y respaldada por evidencia, y ha actuado contra empresas por afirmaciones falsas sobre IA.",
            "Protege los datos de los usuarios. Sigue los principios de seguridad de datos de la FTC: haz un inventario de lo que recopilas, reduce a lo que necesitas, protégelo bajo llave, elimina lo que ya no necesitas y planea con anticipación para los problemas. Revisa qué hace tu proveedor de IA con los datos enviados por su API, y dilo en una política de privacidad.",
            "Ten una política de privacidad y términos de servicio antes de cobrar; existen plantillas, pero pide a un abogado que las revise para tu caso. Da a los usuarios una forma fácil de hablar con una persona y lanza en pequeño: primero unos pocos usuarios de tu nicho, luego crece."
          ],
          steps: ["Escribe un marketing honesto: qué hace, sus límites, \"revisa los resultados de la IA\".", "Haz una lista de los datos de usuarios que recopilas y quita lo que no necesitas.", "Revisa los términos de datos de tu proveedor de IA.", "Prepara una política de privacidad y términos, revisados por un abogado.", "Agrega una forma de hablar con una persona y lanza primero con un grupo pequeño."],
          words: [["Política de privacidad", "una declaración pública de qué datos recopilas y cómo los usas."], ["Términos de servicio", "las reglas que los usuarios aceptan al usar tu producto."], ["Lanzamiento", "poner tu producto a disposición de los usuarios."]],
          slides: [
            { title: "Honesto sobre la IA", bullets: ["Di qué hace y cuáles son sus límites", "\"Generado por IA: revísalo\"", "FTC: las afirmaciones necesitan evidencia"] },
            { title: "Protege los datos de los usuarios", bullets: ["Inventario, reduce, protégelo", "Elimina lo que no necesitas; planea con anticipación", "Revisa los términos de datos de tu proveedor de IA"] },
            { title: "Antes de cobrar", bullets: ["Política de privacidad y términos", "Revisados por un abogado", "Una forma fácil de hablar con una persona"] },
            { title: "Lanza en pequeño", bullets: ["Primero unos pocos usuarios del nicho", "Corrige y luego crece"] }
          ],
          sources: [{ name: "FTC: Conceptos básicos de publicidad y marketing (en inglés)", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }, { name: "FTC: Cómo proteger la información personal, guía para negocios (en inglés)", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Tarea final: escribe tu lista de lanzamiento (afirmaciones honestas, lista de datos, términos del proveedor, política de privacidad y términos para que los revise un abogado, forma de contacto, primer lanzamiento pequeño) y arma tu paquete inicial de SaaS con IA con tu plan, tu prototipo y tu hoja de precios.",
          youCanNow: "planear, hacer un prototipo, ponerle precio y preparar un lanzamiento honesto y seguro de un pequeño producto SaaS con IA."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Construye, ponle precio y lanza",
        questions: [
          { q: "¿Qué deberías probar antes de construir cualquier aplicación?", options: ["Si la IA puede hacer bien el trabajo con tus instrucciones en un chat", "El logotipo", "La página de precios", "El nombre de dominio"], answer: 0, why: "Si la IA no puede hacer el trabajo, una aplicación no lo va a arreglar." },
          { q: "¿Cuál es un nivel rápido de prototipo para alguien que no programa?", options: ["Nada hasta el lanzamiento", "Un centro de datos propio completo", "Contratar a 20 ingenieros", "Una maqueta clicable de la pantalla"], answer: 3, why: "Las maquetas permiten que los usuarios opinen sin código." },
          { q: "¿Por qué poner límites de uso en los planes?", options: ["Para molestar a los usuarios", "Los usuarios intensivos pueden costar mucho más en uso de IA", "Porque lo exige la ley", "Para esconder los precios"], answer: 1, why: "Los límites hacen predecibles los costos de IA." },
          { q: "¿Qué debería decir tu marketing sobre los resultados de la IA?", options: ["Que los genera la IA y hay que revisarlos", "Que son 100% exactos", "Que reemplazan a los profesionales", "Nada"], answer: 0, why: "Ser honesto sobre los límites genera confianza y evita afirmaciones engañosas." },
          { q: "Antes de cobrar, deberías tener:", options: ["El respaldo de una celebridad", "Mil funciones", "Una política de privacidad y términos de servicio revisados por un abogado", "Ningún dato de contacto"], answer: 2, why: "Fijan reglas claras y te protegen a ti y a los usuarios." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Cómo crear productos SaaS con IA",
    questions: [
      { q: "SaaS significa:", options: ["Ventas y una tienda", "Software como servicio", "IA sencilla y búsqueda", "Servicio de aplicación con acceso seguro"], answer: 1, why: "Es software en línea que se paga por suscripción." },
      { q: "Los pequeños productos SaaS con IA suelen ganar:", options: ["Copiando a un gran asistente de chat", "Haciendo todo para todos", "Siendo los más caros", "Haciendo muy bien un trabajo para un tipo de usuario"], answer: 3, why: "El enfoque específico le gana a las herramientas generales." },
      { q: "Un buen nicho tiene usuarios que:", options: ["No tienen presupuesto", "Nunca hacen el trabajo", "Son imposibles de alcanzar", "Hacen el trabajo seguido y ya pagan por software"], answer: 3, why: "Es probable que esos usuarios compren." },
      { q: "Antes de construir, deberías hablar con:", options: ["Nadie", "Tres personas del nicho", "Solo inversionistas", "Solo la IA"], answer: 1, why: "Los usuarios reales confirman el problema." },
      { q: "Un MVP de SaaS con IA suele ser:", options: ["Una empresa completa", "Diez aplicaciones", "Una pantalla: entrada, trabajo de la IA, revisión del usuario, resultado", "Un logotipo"], answer: 2, why: "Es la versión útil más pequeña." },
      { q: "Escribir lo que la IA nunca debe hacer ayuda a:", options: ["Dar forma a tus instrucciones y a tu pantalla", "Hacer más lenta la aplicación", "Subir el precio", "Nada"], answer: 0, why: "Los límites claros reducen los errores dañinos." },
      { q: "Una API permite que tu aplicación:", options: ["Pague impuestos", "Imprima documentos", "Envíe solicitudes a un modelo de IA y reciba respuestas", "Contrate personal"], answer: 2, why: "Eso es lo que hace una API." },
      { q: "¿Dónde deberías revisar los precios actuales de los modelos de IA?", options: ["En la página de precios del proveedor", "En una entrada vieja de un blog", "Adivinando", "En la aplicación de un competidor"], answer: 0, why: "Los precios cambian seguido." },
      { q: "El costo por usuario se calcula con:", options: ["El número de logotipos", "Solicitudes al mes x tamaño x precio", "Solo tu renta", "La edad del usuario"], answer: 1, why: "El uso es lo que determina el costo de la IA." },
      { q: "Si alguien consigue tu clave de API, puede:", options: ["Arreglar tus errores", "Nada", "Solo leer tu correo", "Usar la API y gastar tu dinero"], answer: 3, why: "Las claves se te cobran a ti." },
      { q: "Pruebas tus instrucciones con diez entradas y 4 salen bien. ¿Qué sigue?", options: ["Mejorar las instrucciones antes de construir la aplicación", "Construir la aplicación de todos modos", "Lanzar mañana", "Subir los precios"], answer: 0, why: "Primero busca que la mayoría de los resultados sean buenos." },
      { q: "Google Colab es:", options: ["Solo una hoja de cálculo", "Una aplicación de pagos", "Una red social", "Un notebook en línea gratuito para ejecutar Python en el navegador"], answer: 3, why: "Te deja probar código sin instalar nada." },
      { q: "Al observar a los usuarios probar tu prototipo, anota:", options: ["Su dirección", "Sus contraseñas", "Dónde se traban y dónde hubo que corregir el resultado de la IA", "Nada"], answer: 2, why: "Esto muestra qué arreglar." },
      { q: "El precio debería empezar por:", options: ["Un número al azar", "El valor que el producto le da al usuario", "El logotipo de tu competidor", "El color de tu sitio"], answer: 1, why: "El valor define lo que los usuarios van a pagar." },
      { q: "¿Cuál es un costo por usuario de un SaaS?", options: ["Un trofeo", "El almuerzo del usuario", "Tus vacaciones", "El uso de IA"], answer: 3, why: "El uso de IA crece con cada usuario." },
      { q: "Sobre el impuesto sobre las ventas del software, deberías:", options: ["Preguntarle a los usuarios", "Suponer que nunca aplica", "Consultar la agencia de impuestos de tu estado o preguntarle a un contador", "Ignorarlo"], answer: 2, why: "Las reglas cambian según el estado." },
      { q: "El principio de datos de la FTC \"reducir\" significa:", options: ["Recopilar y guardar solo lo que necesitas", "Hacer más pequeño tu logotipo", "Bajar tu precio", "Contratar a menos personas"], answer: 0, why: "Menos datos significa menos riesgo." },
      { q: "¿Por qué revisar los términos de datos de tu proveedor de IA?", options: ["Para cambiar el tipo de letra", "Para saber qué pasa con los datos de usuarios enviados por la API", "Para conseguir créditos gratis", "No hace falta"], answer: 1, why: "Debes decirles a los usuarios cómo se manejan sus datos." },
      { q: "¿Quién debería revisar tu política de privacidad y tus términos?", options: ["Solo un chat de IA", "Un abogado", "Tu primer usuario", "Nadie"], answer: 1, why: "Los documentos legales necesitan revisión profesional." },
      { q: "Una forma segura de lanzar es:", options: ["Primero con un grupo pequeño de usuarios del nicho", "Con todo el mundo a la vez y sin soporte", "Sin forma de contacto", "Sin probar"], answer: 0, why: "Un lanzamiento pequeño te permite corregir problemas pronto." }
    ]
  }
};

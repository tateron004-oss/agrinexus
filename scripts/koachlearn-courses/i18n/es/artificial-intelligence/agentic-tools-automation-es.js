"use strict";

// Koach Learn course (Artificial Intelligence), Spanish translation of artificial-intelligence/agentic-tools-automation.js. See scripts/koachlearn-courses/README.md, "Translations".
// Python code, tool names, file names and folder names stay in English; prompts and messages shown to people are translated.

module.exports = {
  id: "agentic-tools-automation-es",
  lang: "es",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Uso de herramientas y automatización con agentes de IA",
  skills: "Describir herramientas con un esquema, Validar los argumentos de las herramientas, Poner las herramientas de escritura detrás de una aprobación, Simulacros y reejecuciones seguras, Conectar herramientas con MCP, Ejecutar un agente según un calendario",
  outcome: "darle a un agente herramientas reales con seguridad: describir cada herramienta con un esquema, revisar cada argumento, dejar las acciones de escritura detrás de un simulacro y un sí de una persona, y ejecutar el agente como una automatización repetible que lee un archivo y escribe un informe.",
  about: [
    "Este es el curso 4 de Diseñar, crear y desplegar agentes de IA autónomos. Tu agente del curso 3 tenía dos herramientas seguras. Los agentes reales leen archivos, llaman a servicios web y escriben resultados, y ahí es donde ocurren la mayoría de los accidentes con agentes. Este curso te enseña a añadir herramientas reales sin perder el control.",
    "El Capítulo 1 trata de las herramientas: describirlas con un esquema que el modelo entienda, revisar cada argumento que recibe tu código y poner cualquier acción que cambie algo detrás de un simulacro y una aprobación humana. El Capítulo 2 trata de la automatización: disparadores y calendarios, reejecuciones seguras, el Model Context Protocol (MCP) para conectar herramientas, y convertir tu agente en un trabajo que corre solo.",
    "Vas a trabajar en Python en Google Colab o en tu propia computadora. El código aparece como líneas cortas en las lecciones. Cada capítulo cierra con una comprobación de conocimientos y el curso cierra con un examen de 20 preguntas."
  ],
  finalTask: "Crea un agente de \"informe semanal\". Lee con una herramienta de lectura un archivo CSV de ventas o gastos inventados, usa una herramienta de calculadora para sacar los totales y redacta un resumen corto. Su única herramienta de escritura, save_report(filename, text), debe revisar sus argumentos (solo archivos .txt o .md, solo en una carpeta reports), funcionar en modo de simulacro por defecto y preguntar \"¿Guardar el informe? sí/no\" antes de escribir. Ejecutarlo dos veces para la misma semana no debe crear informes duplicados. Muestra el registro de una ejecución completa.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos del programa Diseñar, crear y desplegar agentes de IA autónomos que terminaron los cursos 1 a 3: dueños de pequeños negocios, personas que cambian de carrera, estudiantes y personal que quieren agentes que hagan trabajo real con un horario.",
    startingPoint: "Han creado en Python un ciclo de agente con dos herramientas, un límite de pasos, manejo de errores y un registro de ejecución. No le han dado a un agente herramientas que lean archivos o cambien algo, y no han ejecutado uno como automatización.",
    gap: "La mayoría de los accidentes con agentes ocurren cuando reciben herramientas reales que leen y escriben. Necesitan describir las herramientas con claridad, revisar cada argumento, poner las acciones de escritura detrás de un simulacro y un sí de una persona, y hacer que las automatizaciones se puedan volver a ejecutar sin peligro, para que sus agentes ayuden sin causar daños.",
    constraints: [
      "Nivel de lectura: palabras sencillas; el código aparece en líneas cortas para copiar",
      "Dispositivos: una computadora con navegador web; Colab sirve para construir, no para ejecutar horarios",
      "La práctica usa solo datos CSV inventados, nunca registros reales de clientes ni financieros",
      "Las acciones de escritura se quedan en modo de simulacro hasta que una persona las aprueba",
      "Solo servidores MCP de confianza, con el acceso mínimo necesario"
    ],
    prerequisites: "El curso 3 de Diseñar, crear y desplegar agentes de IA autónomos (\"Crear agentes de IA\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Para cada herramienta que usa tu agente", action: "escribir un esquema de herramienta con un nombre claro, un propósito y entradas con tipo", standard: "para que un modelo pueda elegir la herramienta y los argumentos correctos" },
    { id: "O2", condition: "Con los argumentos que envía el modelo", action: "revisar cada argumento con una lista de permitidos antes de que la herramienta lo use", standard: "rechazando tipos de archivo malos, trucos con rutas y tipos equivocados con un error claro" },
    { id: "O3", condition: "Para cualquier herramienta que cambie algo", action: "poner la acción detrás de un simulacro y una aprobación de sí o no que muestre los detalles exactos", standard: "para que nada se escriba hasta que una persona diga que sí" },
    { id: "O4", condition: "Con una tarea que se ejecuta con regularidad", action: "elegir un disparador y hacer que la automatización se pueda volver a ejecutar sin peligro", standard: "para que una segunda ejecución del mismo periodo no cree ningún duplicado" },
    { id: "O5", condition: "Con una herramienta que quieres compartir con aplicaciones de IA", action: "explicar qué hace un servidor MCP y decidir cuándo usar uno", standard: "nombrando las reglas de aprobación y de revisión que mantendrías" },
    { id: "O6", condition: "Con herramientas para leer, calcular y guardar", action: "crear y probar de principio a fin la automatización del informe semanal", standard: "con un registro de ejecución completo y los datos malos informados, no ignorados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Darle herramientas reales a un agente",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describir una herramienta con un esquema",
          minutes: 5,
          goal: "Escribir la descripción de una herramienta con un nombre, un propósito y entradas con tipo.",
          text: [
            "Un modelo elige las herramientas a partir de sus descripciones. El esquema de una herramienta es una descripción precisa: un nombre, una o dos frases sobre lo que hace y cuándo usarla, y cada entrada con su tipo y su significado. La mayoría de los proveedores escriben las entradas en JSON Schema, una forma estándar de describir datos.",
            "Ejemplo: nombre read_csv; descripción \"Lee un archivo CSV de la carpeta data y devuelve sus primeras 50 filas como texto. Úsala cuando necesites los números de un archivo.\"; entradas: filename (texto, obligatoria, el nombre de un archivo de la carpeta data, como sales-week-42.csv).",
            "Los buenos esquemas son pequeños y específicos. Una herramienta, un trabajo. Di qué devuelve la herramienta y cuándo no usarla. Usa nombres que suenen a acciones: read_csv, save_report, no tool1."
          ],
          steps: ["Nombra la herramienta con un verbo de acción.", "Describe qué hace, cuándo usarla y qué devuelve.", "Enumera cada entrada con su tipo y si es obligatoria.", "Que tenga un solo trabajo.", "Prueba: dale al modelo un objetivo y fíjate si elige bien la herramienta."],
          words: [["Esquema de herramienta", "una descripción precisa de una herramienta: su nombre, su propósito y sus entradas."], ["JSON Schema", "una forma estándar de describir la forma de los datos, como qué campos son texto o números."], ["Argumento", "un valor que se le pasa a una herramienta o función."]],
          slides: [
            { title: "Los modelos eligen por las descripciones", bullets: ["Nombre, propósito, entradas", "Las entradas suelen ir en JSON Schema"] },
            { title: "Ejemplo: read_csv", bullets: ["Lee un CSV de la carpeta data", "Devuelve las primeras 50 filas como texto", "Entrada: filename (texto, obligatoria)"] },
            { title: "Buenos esquemas", bullets: ["Una herramienta, un trabajo", "Nombres de acción: read_csv, save_report", "Di qué devuelve y cuándo no usarla"] }
          ],
          tryIt: "Escribe los esquemas de tres herramientas: read_csv, calculator y save_report. Dale a un chatbot gratuito los tres esquemas y el objetivo \"Suma las ventas de la semana pasada y guarda un informe\", y pregúntale qué herramienta llamaría primero y con qué argumentos.",
          youCanNow: "describir una herramienta para que un modelo pueda elegirla y llenar bien sus entradas.",
          quickCheck: [
            { objective: "O1", q: "¿Qué le dicen al modelo las entradas con tipo de un esquema de herramienta?", options: ["Qué tan rápido funciona la herramienta", "Quién escribió la herramienta", "Qué clase de valor debe ser cada entrada, como texto o un número", "Qué modelo usar"], answer: 2, why: "Los tipos describen la forma de cada entrada para que el modelo envíe los argumentos correctos." },
            { objective: "O1", q: "Quieres una sola herramienta que lea archivos, envíe correos y borre informes viejos. ¿Qué harías en su lugar?", options: ["Dividirla en herramientas separadas que hagan cada una un trabajo claro", "Dejarla así, porque una sola herramienta es más simple", "Darle una descripción más larga", "Esconder del esquema la parte de borrar"], answer: 0, why: "Una buena herramienta hace un trabajo claro, y así es más fácil describirla, revisarla y aprobarla." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nunca confíes en los argumentos: validar la entrada de las herramientas",
          minutes: 6,
          goal: "Revisar cada argumento que envía el modelo antes de que una herramienta lo use.",
          text: [
            "El modelo escribe los argumentos de tu herramienta, y el modelo puede equivocarse o ser engañado con una inyección de prompt. Por eso es la herramienta, no el modelo, la que debe hacer cumplir las reglas. Trata los argumentos como si vinieran de un desconocido en internet.",
            "Revisa el tipo y la forma: ¿filename es texto? Revisa los valores permitidos: solo nombres que terminen en .csv, solo dentro de la carpeta data. Bloquea los trucos de rutas: un nombre como ../../secrets.txt intenta salirse de la carpeta. En Python: from pathlib import Path, luego p = (DATA_DIR / filename).resolve() y rechaza si DATA_DIR.resolve() no está en p.parents.",
            "Cuando una revisión falla, devuelve un mensaje claro, no un error que tumbe el programa: \"error de read_csv: solo se permiten archivos .csv de la carpeta data\". Nunca ejecutes como código ni como comando de la terminal un texto escrito por el modelo; así es como un error pequeño se vuelve grande."
          ],
          steps: ["Revisa el tipo de cada argumento.", "Revisa los valores permitidos: tipos de archivo, carpetas, rangos de números.", "Resuelve las rutas de archivo y rechaza lo que quede fuera de la carpeta permitida.", "Devuelve un mensaje de error claro si falla.", "Nunca ejecutes como código o comando de la terminal un texto escrito por el modelo."],
          words: [["Validación", "revisar que una entrada sea del tipo correcto y esté dentro de los valores permitidos antes de usarla."], ["Recorrido de rutas", "un truco que usa ../ en el nombre de un archivo para llegar a archivos fuera de la carpeta permitida."], ["Lista de permitidos", "una lista con los únicos valores que se aceptan."]],
          slides: [
            { title: "La herramienta hace cumplir las reglas", bullets: ["El modelo puede equivocarse o ser engañado", "Trata los argumentos como entrada de un desconocido"] },
            { title: "Revisa cada argumento", bullets: ["Tipo: ¿es texto o número?", "Valores permitidos: solo .csv, solo la carpeta data", "Bloquea los trucos de rutas con ../"] },
            { title: "Si falla", bullets: ["Devuelve un mensaje de error claro", "Nunca te caigas, nunca adivines", "Nunca ejecutes texto del modelo como código o comando"] }
          ],
          tryIt: "Escribe read_csv con validación. Pruébala tú mismo con: 'sales.csv', 'notes.exe', '../secret.txt' y 42. Solo la primera debe leer un archivo; las demás deben devolver errores claros.",
          youCanNow: "escribir herramientas que revisan cada argumento antes de actuar.",
          quickCheck: [
            { objective: "O2", q: "¿Por qué el propio código de la herramienta debe revisar sus argumentos?", options: ["El esquema ya bloquea todos los valores malos", "El modelo puede enviar algo inseguro o equivocado", "Hace más inteligente al modelo", "Solo hace falta en las herramientas de escritura"], answer: 1, why: "Solo el código de la herramienta puede hacer cumplir sus reglas; el modelo puede equivocarse o ser engañado." },
            { objective: "O2", q: "read_csv recibe el número 42 como nombre de archivo. ¿Qué debe pasar?", options: ["Leer un archivo llamado 42.csv", "Convertirlo en texto y seguir", "Pedirle al modelo que adivine el archivo correcto", "Devolver un error claro de que el nombre del archivo debe ser texto que termine en .csv"], answer: 3, why: "Un tipo equivocado se rechaza con un error claro con el que el modelo puede actuar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Herramientas de escritura: simulacros y aprobación humana",
          minutes: 6,
          goal: "Poner una acción de escritura detrás de un simulacro y una aprobación de sí o no.",
          text: [
            "Una herramienta de escritura cambia algo: guarda un archivo, envía un mensaje, actualiza una hoja, gasta dinero. Ponles dos candados a las herramientas de escritura. Primero, un simulacro: la herramienta dice exactamente lo que haría, pero no lo hace. Haz que el simulacro sea lo normal, con DRY_RUN = True al inicio de tu código.",
            "Segundo, la aprobación humana: antes de la escritura real, muéstrale a la persona lo que va a pasar y pregúntale. En un cuaderno, answer = input('¿Guardar el informe en reports/week-42.md? sí/no ') y solo continúa si answer == 'sí'. En una app real, esto es un botón de Aprobar.",
            "Muestra en la aprobación los detalles reales, no un resumen escrito por el modelo: el nombre del archivo, el destinatario, el monto. Registra cada aprobación y cada rechazo. Si el modelo pide la misma escritura otra vez después de un no, es una señal para detener la ejecución."
          ],
          steps: ["Marca cada herramienta como LECTURA o ESCRITURA.", "Dale a cada herramienta de escritura un modo de simulacro, activado por defecto.", "Antes de una escritura real, muestra los detalles exactos y pregunta sí o no.", "Escribe solo con un sí, y registra la respuesta.", "Detén la ejecución si el modelo vuelve a intentar una escritura rechazada."],
          words: [["Simulacro (dry run)", "una ejecución de práctica que muestra lo que pasaría sin hacerlo."], ["Puerta de aprobación", "un punto en el que una persona debe decir que sí antes de que ocurra una acción."]],
          slides: [
            { title: "Las herramientas de escritura cambian cosas", bullets: ["Guardar, enviar, actualizar, gastar", "Necesitan dos candados"] },
            { title: "Candado 1: simulacro por defecto", bullets: ["DRY_RUN = True", "Muestra exactamente lo que pasaría", "No lo hace"] },
            { title: "Candado 2: aprobación humana", bullets: ["Muestra los detalles reales: archivo, destinatario, monto", "Pregunta sí o no", "Escribe solo con un sí; registra la respuesta"] }
          ],
          tryIt: "Escribe save_report(filename, text) con validación (solo .md o .txt, solo en una carpeta reports), simulacro por defecto y una aprobación de sí o no. Pruébala con DRY_RUN activado y luego desactivado, respondiendo una vez no y una vez sí.",
          youCanNow: "añadir herramientas de escritura que solo actúan después de un simulacro y un sí de una persona.",
          quickCheck: [
            { objective: "O3", q: "¿Qué hace un simulacro?", options: ["Muestra lo que pasaría sin hacerlo", "Ejecuta la acción dos veces para estar seguro", "Borra primero el archivo viejo", "Guarda una copia de respaldo del modelo"], answer: 0, why: "Un simulacro permite que una persona vea el resultado antes de que algo cambie." },
            { objective: "O3", q: "El aviso de aprobación solo dice \"¿Continuar? sí/no\". ¿Qué cambiarías?", options: ["Nada, es corto y claro", "Hacer que el agente responda sí por su cuenta", "Mostrar el nombre exacto del archivo y el texto que se va a guardar", "Quitar la aprobación para ahorrar tiempo"], answer: 2, why: "Una persona solo puede aprobar bien cuando ve los detalles exactos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Darle herramientas reales a un agente",
        questions: [
          { objective: "O1", q: "¿Qué le da al modelo el esquema de una herramienta?", options: ["Tu clave de API", "El código fuente de la herramienta", "El nombre, el propósito y las entradas de la herramienta", "Permiso para ejecutar cualquier cosa"], answer: 2, why: "El modelo elige y llena las herramientas a partir de sus esquemas." },
          { objective: "O1", q: "¿Qué nombre de herramienta es mejor?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Los nombres de acción le dicen al modelo qué hace la herramienta." },
          { objective: "O2", q: "El modelo le envía a read_csv el nombre de archivo '../../passwords.txt'. La herramienta debe:", options: ["Leerlo, el modelo lo pidió", "Pedirle al modelo que prometa que es seguro", "Leer la mitad", "Rechazarlo con un error claro"], answer: 3, why: "La herramienta debe bloquear los trucos de rutas que salen de la carpeta permitida." },
          { objective: "O3", q: "¿Por qué DRY_RUN debe estar activado por defecto?", options: ["Es más rápido", "Nada cambia hasta que alguien lo desactive a propósito", "Los modelos lo prefieren", "Ahorra tokens"], answer: 1, why: "Un valor por defecto seguro evita escrituras accidentales." },
          { objective: "O3", q: "¿Qué debe mostrar una solicitud de aprobación?", options: ["Un resumen escrito por el modelo", "Nada, solo \"¿OK?\"", "El nombre del modelo", "Los detalles exactos: nombre del archivo, destinatario o monto"], answer: 3, why: "Las personas deben aprobar lo que de verdad va a pasar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Del agente a la automatización",
      lessons: [
        {
          objectives: ["O4"],
          title: "Disparadores, calendarios y reejecuciones seguras",
          minutes: 5,
          goal: "Elegir un disparador para un agente y hacer seguras las reejecuciones.",
          text: [
            "Una automatización es un agente que arranca solo. Un disparador lo pone en marcha: un calendario (cada lunes a las 8 am), un evento (un archivo nuevo en una carpeta, una respuesta nueva a un formulario) o un botón que alguien presiona.",
            "Las automatizaciones se vuelven a ejecutar: un calendario se dispara dos veces, una ejecución falla a la mitad y la vuelves a iniciar. Diséñala para eso. Idempotente significa que ejecutarla dos veces da el mismo resultado que una. Nombra las salidas por su periodo (reports/week-42.md) y revisa antes de escribir: si el informe ya existe, detente o pregunta, en lugar de hacer una copia.",
            "Formas de programarla: en tu propia computadora, el Programador de tareas de Windows o cron en Mac y Linux pueden ejecutar un script de Python; herramientas sin código como Zapier, Make y n8n ejecutan flujos de trabajo con disparadores; los servicios en la nube también tienen programadores. Colab sirve para construir y probar, no para correr según un calendario. Revisa los límites gratuitos actuales de cada herramienta en su propio sitio."
          ],
          steps: ["Elige el disparador: calendario, evento o botón.", "Nombra cada salida por su periodo, como week-42.", "Antes de escribir, revisa si la salida ya existe.", "Si existe, detente o pregunta; nunca dupliques.", "Elige dónde va a correr y revisa los límites de esa herramienta."],
          words: [["Disparador", "el hecho que pone en marcha una automatización."], ["Idempotente", "que se puede ejecutar más de una vez con seguridad: la segunda ejecución no cambia nada de más."], ["Cron", "un programador de Mac y Linux que ejecuta comandos a horas fijas."]],
          slides: [
            { title: "Tres tipos de disparador", bullets: ["Calendario: cada lunes a las 8 am", "Evento: archivo nuevo o respuesta a un formulario", "Botón: una persona lo inicia"] },
            { title: "Diseña para las reejecuciones", bullets: ["Idempotente: dos veces = una vez", "Nombra las salidas por periodo: week-42", "Revisa antes de escribir; nunca dupliques"] },
            { title: "Dónde puede correr", bullets: ["Programador de tareas o cron en tu computadora", "Sin código: Zapier, Make, n8n", "Colab es para construir, no para programar"] }
          ],
          tryIt: "Cambia save_report para que el nombre del archivo incluya el número de semana y para que una segunda ejecución de la misma semana se detenga con \"El informe de la semana 42 ya existe\". Ejecútalo dos veces para comprobarlo.",
          youCanNow: "elegir un disparador y hacer que una automatización se pueda ejecutar más de una vez con seguridad.",
          quickCheck: [
            { objective: "O4", q: "¿Qué significa que una automatización sea idempotente?", options: ["Se ejecuta solo una vez al año", "Ejecutarla dos veces da el mismo resultado que ejecutarla una vez", "Nunca necesita un disparador", "Siempre pide aprobación"], answer: 1, why: "Los trabajos idempotentes se pueden volver a ejecutar sin peligro y sin crear duplicados." },
            { objective: "O4", q: "Tu trabajo semanal se ejecutó dos veces por error y creó dos informes. ¿Qué cambiarías?", options: ["Ejecutarlo con menos frecuencia", "Borrar informes a mano cada semana", "Apagar el registro", "Nombrar el informe por semana y detenerse si el informe de esa semana ya existe"], answer: 3, why: "Un nombre basado en la semana más una revisión de si ya existe hace seguras las reejecuciones." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Conectar herramientas con MCP",
          minutes: 5,
          goal: "Explicar qué es MCP y decidir cuándo usar un servidor MCP.",
          text: [
            "El Model Context Protocol (MCP) es un estándar de código abierto para conectar aplicaciones de IA con sistemas externos: archivos, bases de datos, calendarios, herramientas de búsqueda. Su propio sitio lo compara con un puerto USB-C para la IA: construyes una conexión una vez y muchas apps de IA pueden usarla.",
            "En MCP, un servidor ofrece herramientas y datos; un cliente (dentro de una app de IA como Claude, ChatGPT o un editor de código como VS Code) se conecta a él y deja que el modelo los use. Puedes usar servidores ya hechos o escribir tu propio servidor pequeño en Python que envuelva herramientas como tu read_csv.",
            "MCP no hace segura una herramienta por sí solo. Todas las reglas del Capítulo 1 siguen aplicando: revisar los argumentos, mínimo privilegio, aprobación para las escrituras. Instala servidores solo de fuentes en las que confíes, porque un servidor corre con todo el acceso que le des. Lee la página de buenas prácticas de seguridad de MCP antes de conectar algo privado."
          ],
          words: [["MCP", "Model Context Protocol: un estándar abierto para conectar apps de IA con herramientas y datos."], ["Servidor MCP", "un programa que ofrece herramientas o datos a las apps de IA mediante MCP."], ["Cliente MCP", "la parte de una app de IA que se conecta a los servidores MCP."]],
          slides: [
            { title: "Qué es MCP", bullets: ["Estándar abierto para conectar apps de IA con herramientas y datos", "Como un puerto USB-C para la IA", "Se construye una vez, se usa en muchas apps"] },
            { title: "Servidores y clientes", bullets: ["Servidor: ofrece herramientas y datos", "Cliente: dentro de la app de IA, se conecta a servidores", "Puedes escribir un servidor pequeño en Python"] },
            { title: "Sigue siendo tu trabajo", bullets: ["Revisar argumentos, mínimo privilegio", "Aprobación para las escrituras", "Instala servidores solo de fuentes confiables"] }
          ],
          sources: [{ name: "Model Context Protocol: ¿Qué es MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Lee la página de introducción de MCP. Luego escribe tres frases: cuál de tus herramientas ofrecerías por medio de un servidor MCP, qué app de IA la usaría y qué regla de aprobación mantendrías.",
          youCanNow: "explicar los servidores y clientes MCP y decidir cuándo tiene sentido conectar una herramienta por medio de MCP.",
          quickCheck: [
            { objective: "O5", q: "¿Qué es un servidor MCP?", options: ["Un programa que ofrece herramientas y datos a aplicaciones de IA de forma estándar", "Un modelo que escribe código", "Una carpeta en la nube para informes", "Un tipo de clave de API"], answer: 0, why: "MCP, el Model Context Protocol, es una forma estándar de conectar herramientas y datos con aplicaciones de IA." },
            { objective: "O5", q: "Ofreces save_report por medio de un servidor MCP. ¿Qué pasa con su revisión de argumentos y su aprobación?", options: ["Se pueden quitar, porque MCP se encarga de la seguridad", "Pasan a la aplicación de IA", "Las mantienes en la herramienta", "Solo se queda la aprobación"], answer: 2, why: "MCP conecta herramientas; no reemplaza las revisiones y aprobaciones de tu propio código." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Crear la automatización del informe semanal",
          minutes: 6,
          goal: "Juntar las herramientas, el ciclo y las reglas de seguridad en una sola automatización.",
          text: [
            "Ahora junta todo. Herramientas: read_csv (lectura, validada), calculator (lectura, validada), save_report (escritura: validada, simulacro, aprobación, sin duplicados). El ciclo del curso 3 con un límite de pasos y un registro. Un prompt del sistema del curso 2 con el objetivo: resumir la semana y guardar un informe.",
            "Haz un archivo pequeño inventado para probar, como data/sales-week-42.csv con las columnas day, item, amount. Nunca hagas pruebas con datos reales de clientes ni datos personales.",
            "Ejecútalo de principio a fin. Lee el registro: ¿leyó antes de calcular? ¿Preguntó antes de guardar? Ejecútalo una segunda vez para la misma semana: no debe hacer un duplicado. Luego prueba un archivo con una fila mala (una palabra donde debería ir un número) y revisa que informe el problema en lugar de adivinar."
          ],
          steps: ["Crea un CSV inventado en una carpeta data.", "Registra las tres herramientas con sus esquemas.", "Ejecuta el ciclo con un límite de pasos y un registro.", "Aprueba el guardado una vez; ejecútalo otra vez para probar que no hay duplicados.", "Prueba un archivo con una fila mala."],
          words: [["Datos de prueba", "datos inventados que se usan para revisar un programa sin arriesgar información real."], ["Prueba de principio a fin", "ejecutar toda la automatización de principio a fin."]],
          slides: [
            { title: "Júntalo todo", bullets: ["read_csv, calculator, save_report", "Ciclo con límite de pasos y registro", "Prompt con el objetivo semanal"] },
            { title: "Prueba con datos inventados", bullets: ["data/sales-week-42.csv", "Nunca datos reales de clientes ni personales"] },
            { title: "Revisa la ejecución", bullets: ["¿Leyó antes de calcular?", "¿Preguntó antes de guardar?", "Segunda ejecución: sin duplicado", "Fila mala: informada, no adivinada"] }
          ],
          tryIt: "Tarea final: crea el agente de informe semanal con read_csv, calculator y save_report (validada, simulacro por defecto, aprobación de sí o no, sin duplicados). Ejecútalo con un CSV inventado, ejecútalo otra vez para la misma semana y guarda el registro de la ejecución completa.",
          youCanNow: "convertir un agente en una automatización segura y repetible con herramientas reales.",
          quickCheck: [
            { objective: "O6", q: "¿Qué es una prueba de principio a fin de tu automatización?", options: ["Probar solo la calculadora", "Ejecutar toda la automatización desde el inicio hasta el final", "Leer el código en voz alta", "Probar el modelo en un chatbot"], answer: 1, why: "De principio a fin significa que todas las partes funcionan juntas, como lo harán de verdad." },
            { objective: "O6", q: "Tu CSV tiene la palabra \"none\" donde debería ir un número de ventas. ¿Qué debe hacer el agente?", options: ["Informar el problema en su resumen", "Contarlo como cero sin decir nada", "Saltarse todo el archivo", "Adivinar un número"], answer: 0, why: "Un buen agente informa los datos malos en lugar de esconderlos." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Del agente a la automatización",
        questions: [
          { objective: "O4", q: "¿Cuál es un disparador por evento?", options: ["Una persona lee el registro", "Cada lunes a las 8 am", "Llega un archivo nuevo a una carpeta", "El límite de pasos"], answer: 2, why: "Un evento, como un archivo nuevo, inicia la ejecución." },
          { objective: "O4", q: "Una automatización es idempotente cuando:", options: ["Ejecutarla dos veces da el mismo resultado que una", "Corre muy rápido", "Nunca falla", "No usa herramientas"], answer: 0, why: "Las reejecuciones seguras no duplican el trabajo." },
          { objective: "O5", q: "¿Qué hace un servidor MCP?", options: ["Entrena el modelo", "Ofrece herramientas y datos a las apps de IA", "Guarda tu contraseña", "Reemplaza la revisión de argumentos"], answer: 1, why: "Los servidores ofrecen herramientas y datos; los clientes en las apps de IA se conectan a ellos." },
          { objective: "O5", q: "Encontraste en un sitio web desconocido un servidor MCP que quiere acceso a tus archivos. ¿Qué es lo mejor?", options: ["Usar solo servidores de fuentes confiables, con el mínimo acceso necesario", "Darle acceso a todo", "Instalarlo de inmediato", "Desactivar las aprobaciones"], answer: 0, why: "Un servidor corre con todo el acceso que le des." },
          { objective: "O6", q: "¿Con qué datos debes probar tu automatización?", options: ["Registros reales de clientes", "Tu estado de cuenta bancario", "Los correos de tu amigo", "Datos de prueba inventados"], answer: 3, why: "Los datos de prueba evitan arriesgar información real." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Uso de herramientas y automatización con agentes de IA",
    questions: [
      { objective: "O1", q: "El esquema de una herramienta incluye:", options: ["Los datos de entrenamiento del modelo", "Un nombre, un propósito y entradas", "Una contraseña", "Una lista de precios"], answer: 1, why: "Eso es lo que lee el modelo para elegir y usar la herramienta." },
      { objective: "O1", q: "JSON Schema se usa para:", options: ["Guardar claves de API", "Hacer imágenes", "Describir la forma de las entradas de una herramienta", "Entrenar modelos"], answer: 2, why: "Describe los tipos y los campos obligatorios." },
      { objective: "O1", q: "Una buena herramienta hace:", options: ["Lo que diga el modelo", "Todos los trabajos a la vez", "Un trabajo claro", "Nada"], answer: 2, why: "Las herramientas pequeñas y específicas son más fáciles de elegir y más seguras." },
      { objective: "O2", q: "¿Quién debe hacer cumplir las reglas de una herramienta?", options: ["El propio código de la herramienta", "El modelo", "El navegador del usuario", "Nadie"], answer: 0, why: "El modelo puede equivocarse o ser engañado." },
      { objective: "O2", q: "El nombre de archivo '../secret.txt' es un ejemplo de:", options: ["Un archivo normal", "Un disparador", "Un esquema", "Recorrido de rutas"], answer: 3, why: "../ intenta salir de la carpeta permitida." },
      { objective: "O2", q: "Una lista de permitidos es:", options: ["Una lista de usuarios bloqueados", "Una lista con los únicos valores aceptados", "Una lista de pendientes", "Un ajuste del modelo"], answer: 1, why: "Solo se aceptan los valores de la lista." },
      { objective: "O2", q: "¿Debe un agente ejecutar como comando de la terminal un texto escrito por el modelo?", options: ["Sí, siempre", "Solo los fines de semana", "Solo si es corto", "No, nunca"], answer: 3, why: "Eso convierte un error del modelo en un problema del sistema." },
      { objective: "O3", q: "Un simulacro:", options: ["Borra los archivos de prueba", "Corre sin modelo", "Muestra lo que pasaría sin hacerlo", "Corre dos veces"], answer: 2, why: "Muestra una vista previa de la acción con seguridad." },
      { objective: "O3", q: "¿Cuál es una herramienta de escritura?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Guardar cambia algo." },
      { objective: "O3", q: "Antes de una escritura real, la persona debe ver:", options: ["Solo un pulgar arriba", "El archivo, destinatario o monto exactos", "La clave de API", "Nada"], answer: 1, why: "La aprobación debe ser sobre los detalles reales." },
      { objective: "O3", q: "El modelo pide guardar otra vez justo después de que dijiste que no. Debes:", options: ["Detener la ejecución y leer el registro", "Decir que sí para que pare", "Desactivar la aprobación", "Darle más herramientas"], answer: 0, why: "Reintentar una escritura rechazada es una señal de alerta." },
      { objective: "O4", q: "¿Cuál es un disparador por calendario?", options: ["Una fila mala", "Una respuesta nueva a un formulario", "Presionar un botón", "Cada lunes a las 8 am"], answer: 3, why: "Los calendarios inician las ejecuciones a horas fijas." },
      { objective: "O4", q: "Nombrar los informes por semana (week-42) ayuda a:", options: ["Que el modelo sea más listo", "Evitar informes duplicados en las reejecuciones", "Esconder el informe", "Ahorrar tokens"], answer: 1, why: "El agente puede revisar si ya existe el informe de esa semana." },
      { objective: "O4", q: "¿Google Colab es el lugar correcto para correr un calendario semanal?", options: ["Sí, corre para siempre", "Sí, tiene un calendario incluido", "No, es para construir y probar", "Solo para usuarios de pago"], answer: 2, why: "Usa un programador o un servicio de automatización para las ejecuciones programadas." },
      { objective: "O4", q: "Cron y el Programador de tareas de Windows sirven para:", options: ["Revisar JSON", "Escribir prompts", "Ejecutar programas a horas fijas", "Entrenar modelos"], answer: 2, why: "Son programadores de tareas." },
      { objective: "O5", q: "MCP significa:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Es un estándar abierto para conectar apps de IA con herramientas." },
      { objective: "O5", q: "En su propio sitio, MCP se compara con:", options: ["Un cable de cargador solo para Apple", "Un gestor de contraseñas", "Una hoja de cálculo", "Un puerto USB-C para las aplicaciones de IA"], answer: 3, why: "Una sola conexión estándar que muchas apps pueden usar." },
      { objective: "O5", q: "Usar MCP significa que tus revisiones de argumentos:", options: ["Ya no hacen falta", "Siguen haciendo falta", "Las hace el sitio web del servidor", "Las hace el modelo"], answer: 1, why: "MCP conecta herramientas; no las vuelve seguras." },
      { objective: "O6", q: "Una fila del CSV tiene una palabra donde debería ir un número. Un buen agente:", options: ["Adivina un número", "Se salta todo el informe sin decir nada", "Borra el archivo", "Informa el problema"], answer: 3, why: "Informa los problemas en los datos; nunca adivines." },
      { objective: "O6", q: "Una prueba de principio a fin significa:", options: ["Probar una función", "Leer el esquema", "Ejecutar toda la automatización de principio a fin", "Revisar solo la respuesta final"], answer: 2, why: "Revisa que todas las partes funcionen juntas." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Prueba inicial: ¿qué sabes ya?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila está en Todavía no, corrige esa parte e inténtalo de nuevo.",
    criteria: [
      {
        name: "Herramientas descritas",
        objective: "O1",
        notYet: "Una herramienta no tiene esquema, o su nombre o propósito es vago.",
        meets: "read_csv, calculator y save_report tienen cada una un nombre, un propósito y entradas con tipo.",
        exceeds: "Las descripciones son tan claras que el modelo elige la herramienta correcta a la primera."
      },
      {
        name: "Argumentos revisados",
        objective: "O2",
        notYet: "save_report acepta cualquier nombre de archivo o carpeta.",
        meets: "Solo archivos .txt o .md, solo en la carpeta reports; una entrada mala recibe un error claro.",
        exceeds: "read_csv se revisa de la misma forma y los errores están probados."
      },
      {
        name: "Simulacro y aprobación",
        objective: "O3",
        notYet: "El informe se escribe sin simulacro o sin un sí.",
        meets: "El simulacro está activado por defecto y se pregunta \"¿Guardar el informe? sí/no\" antes de escribir.",
        exceeds: "La aprobación muestra el nombre exacto del archivo y una vista previa del texto."
      },
      {
        name: "Reejecución segura",
        objective: "O4",
        notYet: "Una segunda ejecución de la misma semana crea un informe duplicado.",
        meets: "Una segunda ejecución de la misma semana se detiene sin duplicado.",
        exceeds: "Dice con claridad de qué semana es el informe que ya existe."
      },
      {
        name: "Ejecución completa registrada",
        objective: "O6",
        notYet: "No hay registro, o la ejecución no terminó.",
        meets: "El registro muestra una ejecución completa, desde leer el CSV hasta la aprobación.",
        exceeds: "El resumen informa cualquier fila mala en los datos."
      }
    ]
  },
  evaluation: {
    results: [
      "Personas que terminan el curso y aprueban la tarea final (rúbrica)",
      "Personas que pasan al curso 5 del programa de agentes en un plazo de 30 días",
      "Personas que dicen haber ejecutado una automatización programada con aprobación en las acciones de escritura en un plazo de 30 días (encuesta de seguimiento)",
      "Personas que dicen no haber tenido escrituras no deseadas ni duplicados en sus automatizaciones (encuesta de seguimiento)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Una computadora con navegador web e internet; Colab o Python en tu propia computadora",
      "Una clave de API de un modelo del curso 2 o un modelo local gratuito",
      "Un archivo CSV inventado de ventas o gastos",
      "Tu ciclo de agente del curso 3",
      "Unos 60 minutos en total: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego construyan en vivo cada capa de seguridad: esquema, revisiones, simulacro y aprobación.",
      "Da a todos el mismo CSV inventado para poder comparar resultados; nunca uses registros reales de clientes ni de dinero.",
      "Pide al grupo que pruebe en voz alta los nombres de archivo malos de la Lección 2 para ver cada error.",
      "Insiste en que solo se usen servidores MCP de confianza, con el acceso mínimo necesario.",
      "Califica la tarea final con la rúbrica y pide a cada persona que muestre cómo su segunda ejecución se detiene sin duplicado."
    ]
  }
};

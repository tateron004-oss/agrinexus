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
  chapters: [
    {
      name: "Capítulo 1: Darle herramientas reales a un agente",
      lessons: [
        {
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
          youCanNow: "describir una herramienta para que un modelo pueda elegirla y llenar bien sus entradas."
        },
        {
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
          youCanNow: "escribir herramientas que revisan cada argumento antes de actuar."
        },
        {
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
          youCanNow: "añadir herramientas de escritura que solo actúan después de un simulacro y un sí de una persona."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Darle herramientas reales a un agente",
        questions: [
          { q: "¿Qué le da al modelo el esquema de una herramienta?", options: ["Tu clave de API", "El código fuente de la herramienta", "El nombre, el propósito y las entradas de la herramienta", "Permiso para ejecutar cualquier cosa"], answer: 2, why: "El modelo elige y llena las herramientas a partir de sus esquemas." },
          { q: "¿Qué nombre de herramienta es mejor?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Los nombres de acción le dicen al modelo qué hace la herramienta." },
          { q: "El modelo le envía a read_csv el nombre de archivo '../../passwords.txt'. La herramienta debe:", options: ["Leerlo, el modelo lo pidió", "Pedirle al modelo que prometa que es seguro", "Leer la mitad", "Rechazarlo con un error claro"], answer: 3, why: "La herramienta debe bloquear los trucos de rutas que salen de la carpeta permitida." },
          { q: "¿Por qué DRY_RUN debe estar activado por defecto?", options: ["Es más rápido", "Nada cambia hasta que alguien lo desactive a propósito", "Los modelos lo prefieren", "Ahorra tokens"], answer: 1, why: "Un valor por defecto seguro evita escrituras accidentales." },
          { q: "¿Qué debe mostrar una solicitud de aprobación?", options: ["Un resumen escrito por el modelo", "Nada, solo \"¿OK?\"", "El nombre del modelo", "Los detalles exactos: nombre del archivo, destinatario o monto"], answer: 3, why: "Las personas deben aprobar lo que de verdad va a pasar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Del agente a la automatización",
      lessons: [
        {
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
          youCanNow: "elegir un disparador y hacer que una automatización se pueda ejecutar más de una vez con seguridad."
        },
        {
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
          youCanNow: "explicar los servidores y clientes MCP y decidir cuándo tiene sentido conectar una herramienta por medio de MCP."
        },
        {
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
          youCanNow: "convertir un agente en una automatización segura y repetible con herramientas reales."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Del agente a la automatización",
        questions: [
          { q: "¿Cuál es un disparador por evento?", options: ["Una persona lee el registro", "Cada lunes a las 8 am", "Llega un archivo nuevo a una carpeta", "El límite de pasos"], answer: 2, why: "Un evento, como un archivo nuevo, inicia la ejecución." },
          { q: "Una automatización es idempotente cuando:", options: ["Ejecutarla dos veces da el mismo resultado que una", "Corre muy rápido", "Nunca falla", "No usa herramientas"], answer: 0, why: "Las reejecuciones seguras no duplican el trabajo." },
          { q: "¿Qué hace un servidor MCP?", options: ["Entrena el modelo", "Ofrece herramientas y datos a las apps de IA", "Guarda tu contraseña", "Reemplaza la revisión de argumentos"], answer: 1, why: "Los servidores ofrecen herramientas y datos; los clientes en las apps de IA se conectan a ellos." },
          { q: "Encontraste en un sitio web desconocido un servidor MCP que quiere acceso a tus archivos. ¿Qué es lo mejor?", options: ["Usar solo servidores de fuentes confiables, con el mínimo acceso necesario", "Darle acceso a todo", "Instalarlo de inmediato", "Desactivar las aprobaciones"], answer: 0, why: "Un servidor corre con todo el acceso que le des." },
          { q: "¿Con qué datos debes probar tu automatización?", options: ["Registros reales de clientes", "Tu estado de cuenta bancario", "Los correos de tu amigo", "Datos de prueba inventados"], answer: 3, why: "Los datos de prueba evitan arriesgar información real." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Uso de herramientas y automatización con agentes de IA",
    questions: [
      { q: "El esquema de una herramienta incluye:", options: ["Los datos de entrenamiento del modelo", "Un nombre, un propósito y entradas", "Una contraseña", "Una lista de precios"], answer: 1, why: "Eso es lo que lee el modelo para elegir y usar la herramienta." },
      { q: "JSON Schema se usa para:", options: ["Guardar claves de API", "Hacer imágenes", "Describir la forma de las entradas de una herramienta", "Entrenar modelos"], answer: 2, why: "Describe los tipos y los campos obligatorios." },
      { q: "Una buena herramienta hace:", options: ["Lo que diga el modelo", "Todos los trabajos a la vez", "Un trabajo claro", "Nada"], answer: 2, why: "Las herramientas pequeñas y específicas son más fáciles de elegir y más seguras." },
      { q: "¿Quién debe hacer cumplir las reglas de una herramienta?", options: ["El propio código de la herramienta", "El modelo", "El navegador del usuario", "Nadie"], answer: 0, why: "El modelo puede equivocarse o ser engañado." },
      { q: "El nombre de archivo '../secret.txt' es un ejemplo de:", options: ["Un archivo normal", "Un disparador", "Un esquema", "Recorrido de rutas"], answer: 3, why: "../ intenta salir de la carpeta permitida." },
      { q: "Una lista de permitidos es:", options: ["Una lista de usuarios bloqueados", "Una lista con los únicos valores aceptados", "Una lista de pendientes", "Un ajuste del modelo"], answer: 1, why: "Solo se aceptan los valores de la lista." },
      { q: "¿Debe un agente ejecutar como comando de la terminal un texto escrito por el modelo?", options: ["Sí, siempre", "Solo los fines de semana", "Solo si es corto", "No, nunca"], answer: 3, why: "Eso convierte un error del modelo en un problema del sistema." },
      { q: "Un simulacro:", options: ["Borra los archivos de prueba", "Corre sin modelo", "Muestra lo que pasaría sin hacerlo", "Corre dos veces"], answer: 2, why: "Muestra una vista previa de la acción con seguridad." },
      { q: "¿Cuál es una herramienta de escritura?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Guardar cambia algo." },
      { q: "Antes de una escritura real, la persona debe ver:", options: ["Solo un pulgar arriba", "El archivo, destinatario o monto exactos", "La clave de API", "Nada"], answer: 1, why: "La aprobación debe ser sobre los detalles reales." },
      { q: "El modelo pide guardar otra vez justo después de que dijiste que no. Debes:", options: ["Detener la ejecución y leer el registro", "Decir que sí para que pare", "Desactivar la aprobación", "Darle más herramientas"], answer: 0, why: "Reintentar una escritura rechazada es una señal de alerta." },
      { q: "¿Cuál es un disparador por calendario?", options: ["Una fila mala", "Una respuesta nueva a un formulario", "Presionar un botón", "Cada lunes a las 8 am"], answer: 3, why: "Los calendarios inician las ejecuciones a horas fijas." },
      { q: "Nombrar los informes por semana (week-42) ayuda a:", options: ["Que el modelo sea más listo", "Evitar informes duplicados en las reejecuciones", "Esconder el informe", "Ahorrar tokens"], answer: 1, why: "El agente puede revisar si ya existe el informe de esa semana." },
      { q: "¿Google Colab es el lugar correcto para correr un calendario semanal?", options: ["Sí, corre para siempre", "Sí, tiene un calendario incluido", "No, es para construir y probar", "Solo para usuarios de pago"], answer: 2, why: "Usa un programador o un servicio de automatización para las ejecuciones programadas." },
      { q: "Cron y el Programador de tareas de Windows sirven para:", options: ["Revisar JSON", "Escribir prompts", "Ejecutar programas a horas fijas", "Entrenar modelos"], answer: 2, why: "Son programadores de tareas." },
      { q: "MCP significa:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Es un estándar abierto para conectar apps de IA con herramientas." },
      { q: "En su propio sitio, MCP se compara con:", options: ["Un cable de cargador solo para Apple", "Un gestor de contraseñas", "Una hoja de cálculo", "Un puerto USB-C para las aplicaciones de IA"], answer: 3, why: "Una sola conexión estándar que muchas apps pueden usar." },
      { q: "Usar MCP significa que tus revisiones de argumentos:", options: ["Ya no hacen falta", "Siguen haciendo falta", "Las hace el sitio web del servidor", "Las hace el modelo"], answer: 1, why: "MCP conecta herramientas; no las vuelve seguras." },
      { q: "Una fila del CSV tiene una palabra donde debería ir un número. Un buen agente:", options: ["Adivina un número", "Se salta todo el informe sin decir nada", "Borra el archivo", "Informa el problema"], answer: 3, why: "Informa los problemas en los datos; nunca adivines." },
      { q: "Una prueba de principio a fin significa:", options: ["Probar una función", "Leer el esquema", "Ejecutar toda la automatización de principio a fin", "Revisar solo la respuesta final"], answer: 2, why: "Revisa que todas las partes funcionen juntas." }
    ]
  }
};

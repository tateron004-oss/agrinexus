"use strict";

// Koach Learn course (shared), Spanish translation of shared/python-basics.js. See scripts/koachlearn-courses/README.md, "Translations".
// Python keywords and functions stay in English (they are code); the text inside quotes in examples is translated.

const COLAB = { name: "Google Colab: Preguntas frecuentes", url: "https://research.google.com/colaboratory/faq.html" };

module.exports = {
  id: "python-basics-es",
  lang: "es",
  translationOf: "python-basics",
  category: "Youth",
  name: "Introducción a la programación con Python",
  skills: "Ejecutar Python en Google Colab, Usar variables y entrada de datos, Tomar decisiones con if, Trabajar con listas y bucles, Escribir una función",
  outcome: "escribir y ejecutar un programa corto en Python en Google Colab que pida información al usuario, la guarde, tome una decisión con ella, repita pasos con un bucle e imprima un resultado claro.",
  about: [
    "Este curso es para cualquiera que nunca haya escrito código: estudiantes, veteranos que empiezan una nueva carrera y adultos que buscan un empleo en tecnología. Solo necesitas una cuenta gratuita de Google y un navegador web.",
    "Vas a escribir Python de verdad en Google Colab, un sitio web gratuito que ejecuta el código por ti, así que no hay nada que instalar. Cada lección agrega una herramienta nueva: imprimir, variables, decisiones, listas, bucles y funciones.",
    "Cada lección dura unos cinco minutos. Léela, mira las diapositivas y luego escribe tú mismo el código en \"Pruébalo ahora\". Al final vas a construir desde cero un pequeño revisor de presupuesto de compras. Cada capítulo termina con una comprobación de conocimientos y el curso termina con un examen de 20 preguntas."
  ],
  finalTask: "En Google Colab, escribe un revisor de presupuesto de compras: una función que reciba una lista de precios y un presupuesto, sume los precios con un bucle e imprima el total y \"Dentro del presupuesto\" o \"Fuera del presupuesto\" con la diferencia. Pide el presupuesto al usuario con input(), llama a tu función y pruébala con dos presupuestos distintos.",
  chapters: [
    {
      name: "Capítulo 1: Tus primeros programas",
      lessons: [
        {
          title: "Abrir Google Colab y ejecutar tu primera línea",
          minutes: 5,
          goal: "Abrir un cuaderno de Colab, escribir una línea de Python y ejecutarla.",
          text: [
            "Un programa es una lista de instrucciones que una computadora sigue en orden. Python es un lenguaje de programación: una forma de escribir esas instrucciones que las personas pueden leer. Se usa para sitios web, datos, juegos, robots e IA.",
            "Google Colab es un sitio web gratuito que ejecuta Python en tu navegador. No instalas nada. Tu trabajo se guarda como un cuaderno (\"notebook\") en tu Google Drive. Un cuaderno está hecho de celdas: casillas donde escribes código y lo ejecutas.",
            "Tu primera instrucción es print. print(\"¡Hola, mundo!\") muestra las palabras que están entre comillas. Las comillas le dicen a Python que es texto, no una orden. Si te equivocas al escribir, Python muestra un mensaje de error. Lee su última línea: te dice qué salió mal."
          ],
          steps: ["Ve a colab.research.google.com e inicia sesión con una cuenta de Google.", "Elige crear un cuaderno nuevo.", "Haz clic dentro de la primera celda de código y escribe: print(\"¡Hola, mundo!\")", "Presiona el botón de reproducir junto a la celda, o Shift + Enter, para ejecutarla.", "Lee el resultado debajo de la celda."],
          words: [["Programa", "una lista de instrucciones que una computadora sigue en orden."], ["Python", "un lenguaje de programación popular y fácil de leer."], ["Cuaderno (notebook)", "un archivo de Colab hecho de celdas donde escribes y ejecutas código."], ["Celda", "una casilla del cuaderno que contiene código que puedes ejecutar."], ["Mensaje de error", "el aviso de Python de que algo en tu código está mal; la última línea dice qué."]],
          slides: [
            { title: "Qué es Python", bullets: ["Un lenguaje para escribir instrucciones a una computadora", "Se usa para sitios web, datos, juegos e IA", "Fácil de leer comparado con muchos lenguajes"] },
            { title: "Google Colab", bullets: ["Sitio web gratuito que ejecuta Python en tu navegador", "Nada que instalar", "Los cuadernos se guardan en tu Google Drive"] },
            { title: "Tu primera línea", bullets: ["Escribe: print(\"¡Hola, mundo!\")", "Ejecútala con el botón de reproducir o Shift + Enter", "Las palabras aparecen debajo de la celda"] },
            { title: "Los errores son normales", bullets: ["Lee la última línea del error", "Revisa la ortografía, las comillas y los paréntesis", "Corrígelo y vuelve a ejecutar"] }
          ],
          sources: [COLAB],
          tryIt: "Abre un cuaderno nuevo de Colab. En una celda, imprime tu nombre. En una segunda celda, imprime una oración sobre tu comida favorita. Luego quita una comilla a propósito, ejecútala y lee el error. Vuelve a poner la comilla y ejecútala otra vez.",
          youCanNow: "abrir Google Colab, escribir una línea con print, ejecutarla y leer un mensaje de error."
        },
        {
          title: "Variables: ponerles nombre a los datos",
          minutes: 5,
          goal: "Guardar información en variables y pedir datos al usuario.",
          text: [
            "Una variable es un nombre que guarda un valor, como una caja con etiqueta. nombre = \"Maya\" pone el texto Maya en una caja llamada nombre. horas = 20 pone el número 20 en una caja llamada horas. El signo = significa \"guarda esto\", no \"es igual a\".",
            "Los valores tienen tipos. El texto entre comillas es una cadena (str). Los números enteros son enteros (int). Los números con punto decimal son flotantes (float). El tipo importa: \"5\" + \"5\" da \"55\", pero 5 + 5 da 10.",
            "input() le pide a la persona que ejecuta el programa que escriba algo. Siempre devuelve una cadena, así que para hacer cuentas la conviertes en número: horas = float(input(\"Horas trabajadas: \")). En Python el decimal siempre se escribe con punto: 7.5.",
            "Una cadena f mezcla texto y variables: print(f\"Hola {nombre}, trabajaste {horas} horas.\") La f antes de las comillas y las llaves { } hacen el trabajo."
          ],
          steps: ["Elige un nombre de variable corto y claro, sin espacios ni acentos (usa_guiones_bajos).", "Guarda un valor con =.", "Para pedir datos al usuario, usa input(\"pregunta: \").", "Envuélvelo en int() o float() si necesitas un número.", "Imprime el resultado con una cadena f."],
          words: [["Variable", "un nombre que guarda un valor."], ["Cadena (str)", "texto, escrito entre comillas."], ["Entero (int)", "un número entero, como 7."], ["Flotante (float)", "un número con punto decimal, como 7.5."], ["input()", "pide al usuario que escriba algo y lo devuelve como cadena."], ["Cadena f (f-string)", "texto que empieza con f y puede mostrar variables dentro de { }."]],
          slides: [
            { title: "Una variable es una caja con etiqueta", bullets: ["nombre = \"Maya\"", "horas = 20", "= significa guardar, no igual"] },
            { title: "Tres tipos comunes", bullets: ["str: texto entre comillas", "int: números enteros", "float: números con decimal"] },
            { title: "Pedirle datos al usuario", bullets: ["input() siempre devuelve texto", "horas = float(input(\"Horas trabajadas: \"))", "Convierte el texto en número antes de hacer cuentas"] },
            { title: "Imprimir con cadenas f", bullets: ["print(f\"¡Hola {nombre}!\")", "Pon las variables entre llaves"] }
          ],
          tryIt: "Escribe un programa que pida el nombre del usuario, su pago por hora y las horas que trabajó esta semana. Guarda cada dato en una variable, multiplica el pago por las horas e imprime: Hola <nombre>, ganaste <cantidad> esta semana.",
          youCanNow: "guardar valores en variables, pedir datos al usuario, convertir texto en números e imprimir un resultado claro."
        },
        {
          title: "Tomar decisiones con if, elif y else",
          minutes: 6,
          goal: "Escribir código que haga cosas distintas según una condición.",
          text: [
            "Los programas toman decisiones con if (\"si\"). Una condición es una pregunta que es True (verdadero) o False (falso), como horas > 40. Si es True, se ejecutan las líneas con sangría que están debajo.",
            "Signos de comparación: == igual a (dos signos igual), != distinto de, > mayor que, < menor que, >= por lo menos, <= como máximo. Puedes unir condiciones con and (y) y or (o).",
            "elif significa \"si no, si\": una segunda revisión cuando la primera es False. else (\"si no\") se ejecuta cuando ninguna revisión fue True. La sangría (cuatro espacios) es la forma en que Python sabe qué líneas pertenecen al if. Colab la agrega por ti después de los dos puntos.",
            "Ejemplo: if nota >= 90: print(\"A\") elif nota >= 80: print(\"B\") else: print(\"Sigue practicando\"). Cada parte va en su propia línea, con el print con sangría."
          ],
          steps: ["Escribe if, luego una condición y luego dos puntos.", "Pon sangría a las líneas que deben ejecutarse cuando es True.", "Agrega elif para otra revisión si hace falta.", "Agrega else para todo lo demás.", "Prueba con valores que pasen por cada rama."],
          words: [["Condición", "una pregunta cuya respuesta es True o False."], ["Booleano", "el tipo True o False en Python."], ["Sangría", "espacios al comienzo de una línea que muestran a qué bloque pertenece."], ["Rama", "uno de los caminos que puede tomar una instrucción if."]],
          slides: [
            { title: "if ejecuta código solo cuando es True", bullets: ["if horas > 40:", "    print(\"¡Horas extra!\")", "No olvides los dos puntos y la sangría"] },
            { title: "Signos de comparación", bullets: ["== igual, != distinto", "> mayor, < menor", ">= por lo menos, <= como máximo"] },
            { title: "elif y else", bullets: ["elif: revisa otra condición", "else: se ejecuta cuando nada más coincidió", "Python revisa de arriba hacia abajo"] },
            { title: "Prueba cada rama", bullets: ["Prueba un valor para cada camino", "Prueba el borde, como exactamente 40"] }
          ],
          tryIt: "Escribe un programa que pida una temperatura en grados Celsius. Si es 30 o más, imprime \"Calor: toma agua.\" Si es 10 o más, imprime \"Buen día.\" Si no, imprime \"Lleva una chaqueta.\" Ejecútalo tres veces con 32, 10 y 0.",
          youCanNow: "escribir bloques if, elif y else y probar cada rama."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Tus primeros programas",
        questions: [
          { q: "¿Qué hace print(\"Hola\")?", options: ["Guarda un archivo llamado Hola", "Envía Hola a una impresora", "Muestra la palabra Hola debajo de la celda", "Borra la celda"], answer: 2, why: "print muestra texto como resultado." },
          { q: "Tu código muestra un error. ¿Dónde miras primero?", options: ["La última línea del mensaje de error", "La primera palabra del cuaderno", "Tu Google Drive", "El historial del navegador"], answer: 0, why: "La última línea de un error de Python dice qué salió mal." },
          { q: "Ejecutas edad = input(\"Edad: \") y escribes 16. ¿De qué tipo es edad?", options: ["int", "float", "Booleano", "str (texto)"], answer: 3, why: "input() siempre devuelve una cadena; usa int() para convertirla en número." },
          { q: "¿Qué línea revisa bien si horas es mayor que 40?", options: ["if horas = 40", "if horas > 40:", "if horas mayor 40", "horas > 40 if:"], answer: 1, why: "if, la condición y luego dos puntos." },
          { q: "¿Cuándo se ejecuta la parte else?", options: ["Siempre, primero", "Solo cuando ninguna condición if o elif fue True", "Solo cuando el if fue True", "Nunca"], answer: 1, why: "else atrapa todos los casos que no cubrieron las revisiones anteriores." }
        ]
      }
    },
    {
      name: "Capítulo 2: Programas que repiten y recuerdan",
      lessons: [
        {
          title: "Listas: guardar muchos valores juntos",
          minutes: 5,
          goal: "Crear una lista, agregarle cosas y leer sus elementos.",
          text: [
            "Una lista guarda muchos valores en orden, entre corchetes: precios = [3.50, 12.00, 6.25]. Una lista también puede guardar texto: tareas = [\"platos\", \"ropa\"].",
            "Cada elemento tiene un número de posición llamado índice. Python cuenta desde 0, así que precios[0] es el primer elemento (3.50) y precios[-1] es el último.",
            "Herramientas útiles de las listas: precios.append(4.99) agrega un elemento al final. len(precios) te dice cuántos elementos hay. sum(precios) suma una lista de números. \"platos\" in tareas es True si el elemento está en la lista."
          ],
          steps: ["Haz una lista con corchetes y comas.", "Lee un elemento con nombre_lista[índice], empezando en 0.", "Agrega con .append(valor).", "Cuenta los elementos con len().", "Suma números con sum()."],
          words: [["Lista", "un grupo ordenado de valores entre corchetes."], ["Índice", "la posición de un elemento en una lista, empezando desde 0."], ["append", "agrega un elemento al final de una lista."], ["len()", "da la cantidad de elementos."]],
          slides: [
            { title: "Una lista guarda muchos valores", bullets: ["precios = [3.50, 12.00, 6.25]", "tareas = [\"platos\", \"ropa\"]"] },
            { title: "Se cuenta desde 0", bullets: ["precios[0] es el primer elemento", "precios[-1] es el último elemento"] },
            { title: "Herramientas de las listas", bullets: ["append() agrega al final", "len() cuenta los elementos", "sum() suma los números", "in revisa si un elemento está"] }
          ],
          tryIt: "Haz una lista de tres cosas que necesitas comprar, con sus precios en una segunda lista. Agrega una cosa y un precio más. Imprime cuántos elementos hay, el primer elemento y el total de los precios con sum().",
          youCanNow: "crear una lista, leer elementos por su índice, agregar elementos y contarlos o sumarlos."
        },
        {
          title: "Bucles: repetir pasos sin volver a escribirlos",
          minutes: 6,
          goal: "Usar un bucle for para recorrer una lista y un bucle while para repetir hasta terminar.",
          text: [
            "Un bucle repite código. Un bucle for se ejecuta una vez por cada elemento de una lista: for precio in precios: print(precio). En cada vuelta, la variable precio guarda el siguiente elemento.",
            "range() crea una serie de números para contar: for i in range(5) se ejecuta cinco veces con i = 0, 1, 2, 3, 4.",
            "Un total acumulado es un patrón común: empieza con total = 0 antes del bucle, y dentro suma total = total + precio (o total += precio). Después del bucle, total tiene la suma.",
            "Un bucle while se repite mientras una condición sea True, por ejemplo while respuesta != \"listo\". Asegúrate de que algo dentro del bucle cambie la condición, o se ejecutará para siempre. En Colab, presiona el botón de detener para terminar un bucle que no para."
          ],
          steps: ["Decide qué se repite.", "Para cada elemento de una lista, usa: for elemento in mi_lista:", "Pon sangría al código que se repite.", "Para un total, pon total = 0 antes del bucle y suma dentro.", "En un bucle while, asegúrate de que la condición pueda volverse False."],
          words: [["Bucle", "código que se repite."], ["Bucle for", "se repite una vez por cada elemento de una lista o rango."], ["Bucle while", "se repite mientras una condición sea True."], ["range()", "crea una serie de números, que empieza en 0 si no dices otra cosa."], ["Total acumulado", "una variable a la que vas sumando dentro de un bucle."]],
          slides: [
            { title: "for: una vez por elemento", bullets: ["for precio in precios:", "    print(precio)", "precio guarda el siguiente elemento cada vez"] },
            { title: "Contar con range", bullets: ["for i in range(5): se ejecuta 5 veces", "i va 0, 1, 2, 3, 4"] },
            { title: "El patrón del total acumulado", bullets: ["total = 0 antes del bucle", "total += precio dentro del bucle", "Imprime total después del bucle"] },
            { title: "while: hasta que cambie una condición", bullets: ["Se repite mientras la condición sea True", "Cambia algo dentro, o nunca termina", "El botón de detener termina un bucle trabado"] }
          ],
          tryIt: "Escribe un bucle while que siga preguntando \"Agrega un precio (o escribe listo): \". Agrega cada número a una lista. Cuando el usuario escriba listo, usa un bucle for y un total acumulado para sumar los precios e imprimir el total.",
          youCanNow: "repetir código con bucles for y while y llevar un total acumulado."
        },
        {
          title: "Funciones: empaquetar código que puedes reutilizar",
          minutes: 6,
          goal: "Escribir una función con entradas y un valor de retorno, y usarla en un programa completo.",
          text: [
            "Una función es un bloque de código con nombre que puedes ejecutar cuando lo necesites. Ya usaste algunas que vienen con Python: print(), len(), sum(). Ahora vas a escribir las tuyas con def.",
            "def revisar_presupuesto(precios, presupuesto): empieza una función con dos parámetros, las entradas que necesita. Dentro, haces el trabajo. return devuelve un resultado a quien la llamó.",
            "Llamar a la función la ejecuta: resultado = revisar_presupuesto([3.5, 12, 6.25], 25). Una buena función hace un solo trabajo y tiene un nombre que dice cuál es ese trabajo.",
            "Juntándolo todo: la tarea final usa todo lo de este curso. Planéala primero con palabras sencillas (pedir el presupuesto, sumar los precios, comparar, imprimir), luego convierte cada línea en código y pruébala con dos presupuestos."
          ],
          steps: ["Escribe el plan con palabras sencillas como comentarios que empiezan con #.", "Empieza la función con def nombre(parámetros):", "Pon sangría al cuerpo; usa un bucle y un if dentro.", "Usa return para devolver un resultado, o imprime dentro.", "Llama a la función y pruébala con entradas distintas."],
          words: [["Función", "un bloque de código con nombre que puedes ejecutar una y otra vez."], ["def", "la palabra que empieza una función nueva."], ["Parámetro", "una entrada que necesita una función, nombrada entre sus paréntesis."], ["return", "devuelve un valor desde una función."], ["Comentario", "una nota en el código que empieza con #; Python la ignora."]],
          slides: [
            { title: "Por qué usar funciones", bullets: ["Escribes el código una vez y lo usas muchas veces", "Un trabajo por función", "Un nombre claro dice lo que hace"] },
            { title: "Escribir una", bullets: ["def revisar_presupuesto(precios, presupuesto):", "Pon sangría al cuerpo", "return devuelve un resultado"] },
            { title: "Llamar a una", bullets: ["revisar_presupuesto([3.5, 12, 6.25], 25)", "Prueba con entradas distintas"] },
            { title: "Plan de la tarea final", bullets: ["Pide el presupuesto con input()", "Suma los precios con un bucle", "Compara con if e imprime el resultado"] }
          ],
          tryIt: "Tarea final: escribe revisar_presupuesto(precios, presupuesto). Dentro, usa un bucle para sumar los precios y luego imprime el total y \"Dentro del presupuesto por X\" o \"Fuera del presupuesto por X\". Pide el presupuesto al usuario con float(input()), llama a la función con tu lista de compras y pruébala con un presupuesto alto y uno bajo.",
          youCanNow: "escribir y llamar a tu propia función y combinar variables, entrada de datos, if, listas y bucles en un programa que funciona."
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Programas que repiten y recuerdan",
        questions: [
          { q: "colores = [\"rojo\", \"azul\", \"verde\"]. ¿Qué es colores[0]?", options: ["\"azul\"", "\"verde\"", "Un error", "\"rojo\""], answer: 3, why: "Python cuenta las posiciones de una lista desde 0, así que el índice 0 es el primer elemento." },
          { q: "¿Qué línea agrega 4.99 al final de la lista precios?", options: ["precios.append(4.99)", "precios + 4.99", "append.precios(4.99)", "precios[4.99]"], answer: 0, why: "append agrega un elemento al final de una lista." },
          { q: "¿Cuántas veces se ejecuta for i in range(3):?", options: ["2", "4", "3", "Para siempre"], answer: 2, why: "range(3) da 0, 1 y 2: tres veces." },
          { q: "Tu bucle while nunca se detiene. ¿Cuál es la causa más probable?", options: ["Usaste una lista", "Colab no tiene conexión", "Usaste print", "Nada dentro del bucle hace que la condición sea False"], answer: 3, why: "Un bucle while solo termina cuando su condición se vuelve False." },
          { q: "¿Qué hace return dentro de una función?", options: ["Borra la función", "Reinicia Colab", "Devuelve un valor al lugar donde se llamó a la función", "Imprime un error"], answer: 2, why: "return le entrega el resultado a quien la llamó." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Introducción a la programación con Python",
    questions: [
      { q: "¿Qué es un programa?", options: ["Un tipo de pantalla de computadora", "Una lista de instrucciones que una computadora sigue en orden", "Una dirección de sitio web", "Una cuenta de Google"], answer: 1, why: "Un programa es un conjunto de instrucciones que se ejecutan en orden." },
      { q: "¿Por qué Google Colab es práctico para principiantes?", options: ["Ejecuta Python en el navegador sin instalar nada", "Solo funciona sin conexión", "Escribe todo el código por ti", "Necesita una licencia pagada"], answer: 0, why: "Colab es un cuaderno gratuito en línea; no instalas nada." },
      { q: "¿Cómo ejecutas una celda de código en Colab?", options: ["Cerrando la pestaña", "Escribiendo run arriba de la página", "Presionando el botón de reproducir o Shift + Enter", "Enviándotela por correo"], answer: 2, why: "El botón de reproducir o Shift + Enter ejecuta la celda." },
      { q: "¿Qué línea imprime el texto Buen trabajo?", options: ["print(\"Buen trabajo\")", "print(Buen trabajo)", "print \"Buen trabajo\"", "say(\"Buen trabajo\")"], answer: 0, why: "El texto va entre comillas dentro de los paréntesis de print." },
      { q: "En Python, ¿qué hace = en pago = 15?", options: ["Revisa si pago es igual a 15", "Imprime 15", "Borra pago", "Guarda 15 en la variable pago"], answer: 3, why: "Un solo = guarda un valor; == compara." },
      { q: "¿Qué da \"5\" + \"5\"?", options: ["10", "\"55\"", "Un error siempre", "5"], answer: 1, why: "Dos cadenas unidas dan \"55\"." },
      { q: "Necesitas hacer cuentas con lo que escribe el usuario. ¿Qué línea es correcta?", options: ["horas = input(\"Horas: \") * 2", "horas = float(input(\"Horas: \"))", "horas = print(\"Horas\")", "horas = text(input())"], answer: 1, why: "input da texto; float() lo convierte en número." },
      { q: "nombre = \"Ana\". ¿Qué imprime Hola Ana?", options: ["print(\"Hola {nombre}\")", "print(Hola nombre)", "print(f(Hola nombre))", "print(f\"Hola {nombre}\")"], answer: 3, why: "La f antes de las comillas hace que {nombre} muestre la variable." },
      { q: "¿Qué signo significa \"es igual a\" en una condición?", options: ["==", "=", "=>", "!="], answer: 0, why: "== compara; = guarda." },
      { q: "¿Qué debe ir al final de una línea if?", options: ["Un punto y coma", "Un punto", "Dos puntos", "Nada"], answer: 2, why: "Las líneas if, elif, else, for, while y def terminan con dos puntos." },
      { q: "nota = 85. ¿Qué rama se ejecuta? if nota >= 90 / elif nota >= 80 / else", options: ["El if", "El else", "Ninguna", "El elif"], answer: 3, why: "85 no es 90 o más, pero sí es 80 o más, así que se ejecuta el elif." },
      { q: "¿Cómo sabe Python qué líneas pertenecen a un if?", options: ["Por el color del texto", "Por las mayúsculas", "Por la sangría", "Por los números de línea"], answer: 2, why: "Las líneas con sangría debajo del if son su bloque." },
      { q: "nums = [4, 8, 2]. ¿Qué da len(nums)?", options: ["2", "3", "8", "14"], answer: 1, why: "len cuenta los elementos; hay tres." },
      { q: "nums = [4, 8, 2]. ¿Qué da sum(nums)?", options: ["3", "8", "14", "482"], answer: 2, why: "sum suma los números: 4 + 8 + 2 = 14." },
      { q: "¿Qué es precios[-1]?", options: ["El primer elemento", "Un error", "El último elemento", "Menos el primer precio"], answer: 2, why: "El índice -1 significa el último elemento." },
      { q: "Quieres sumar una lista en un bucle. ¿Qué va antes del bucle?", options: ["total = 0", "return total", "print(total)", "def total"], answer: 0, why: "Un total acumulado empieza en 0 antes del bucle." },
      { q: "¿Qué hace for tarea in tareas:?", options: ["Borra la lista", "Se ejecuta solo una vez", "Ordena la lista", "Se ejecuta una vez por cada elemento de tareas"], answer: 3, why: "Un bucle for recorre cada elemento en orden." },
      { q: "¿Qué palabra empieza una función nueva?", options: ["func", "def", "new", "make"], answer: 1, why: "def define una función." },
      { q: "En def revisar_presupuesto(precios, presupuesto):, ¿qué son precios y presupuesto?", options: ["Errores", "Parámetros: las entradas que necesita la función", "Listas de funciones", "Comentarios"], answer: 1, why: "Los nombres entre paréntesis son los parámetros." },
      { q: "Escribiste un revisor de presupuesto. ¿Cuál es la mejor forma de probarlo?", options: ["Ejecutarlo una vez y esperar que funcione", "Borrar los comentarios", "Compartirlo antes de ejecutarlo", "Ejecutarlo con un presupuesto alto y uno bajo y revisar los dos resultados"], answer: 3, why: "Probar con entradas distintas revisa que funcione cada rama." }
    ]
  }
};

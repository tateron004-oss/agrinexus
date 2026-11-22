"use strict";

// Koach Learn course (Spanish translation of shared/cnc-machining-basics.js). See scripts/koachlearn-courses/README.md, "Translations".

module.exports = {
  id: "cnc-machining-basics-es",
  lang: "es",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Fundamentos del mecanizado CNC",
  skills: "Nombrar las máquinas CNC y sus ejes, Leer medidas y tolerancias en un plano, Leer códigos G y M básicos, Ordenar los pasos de una preparación segura y una primera pieza, Reconocer los peligros del taller y sus controles, Planear tu camino hacia la formación y las credenciales de mecanizado",
  outcome: "nombrar las principales máquinas CNC y sus ejes, leer las medidas y tolerancias de un plano sencillo, leer un programa corto de código G y dibujar su trayectoria en papel cuadriculado, ordenar los pasos de una preparación segura y una primera pieza, nombrar los controles para los peligros comunes del taller y seguir un plan con fechas para formarte y obtener una credencial de mecanizado.",
  about: [
    "Los maquinistas y operadores CNC fabrican las piezas de metal y de plástico que van dentro de los autos, los aviones, la maquinaria agrícola, los dispositivos médicos y las máquinas de todas las fábricas. Muchos empiezan como operadores de máquina y luego pasan a preparación, programación e inspección. Este curso es para cualquiera que esté pensando en ese camino: personas que buscan trabajo, jóvenes, veteranos, personas que regresan a casa después de estar en prisión, inmigrantes y adultos que vuelven a estudiar.",
    "Vas a aprender qué hacen las máquinas CNC y cómo se mueven sus ejes, cómo leer las medidas y tolerancias en el plano de una pieza, cómo leer un programa CNC corto línea por línea y el orden de una preparación segura y una primera pieza. Después vas a aprender los peligros del taller, cómo los controlan los maquinistas y cómo funcionan la formación y las credenciales.",
    "Este curso te prepara. No te da un certificado ni una licencia, y en él no vas a operar ninguna máquina. Manejar una fresadora o un torno solo se aprende en un taller supervisado, con un instructor calificado. Las credenciales de mecanizado, como las del National Institute for Metalworking Skills (NIMS, el instituto nacional de habilidades del trabajo con metales en EE. UU.), suelen pedir un examen escrito y una prueba práctica.",
    "Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\" en papel o en computadora y dos preguntas rápidas. Hay una comprobación de conocimientos después de cada capítulo y un examen de 20 preguntas al final. Tu producto final es tu propio plan de inicio en CNC con fechas reales."
  ],
  finalTask: "Haz tu plan de inicio en CNC: (1) un dibujo de una página de una fresadora y un torno con los ejes X, Y y Z marcados; (2) una hoja de lectura de planos para una pieza de práctica, con los límites calculados para tres medidas con tolerancia; (3) un programa corto de práctica (de 8 a 12 líneas) que corte un cuadrado o una ranura sencilla, con cada línea explicada con tus propias palabras y la trayectoria dibujada en papel cuadriculado; (4) una lista de preparación y seguridad para una primera pieza que cubra guardas, protección de ojos, ropa, virutas, refrigerante, sujeción de la pieza, compensaciones, una prueba en vacío y la inspección de primera pieza; y (5) un plan con fechas que nombre dos programas de formación o aprendizajes cerca de ti, la credencial NIMS a la que vas a apuntar (tomada del sitio oficial) y una fecha para cada paso.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Jóvenes y adultos que buscan un trabajo práctico en la manufactura: personas que buscan empleo, estudiantes y egresados de preparatoria, veteranos, personas que regresan a casa después de estar en prisión, inmigrantes y adultos que vuelven a estudiar. Algunos han tomado taller en la escuela o han hecho trabajos de mantenimiento de autos, granja o en el ejército; la mayoría nunca ha manejado una máquina CNC.",
    startingPoint: "Pueden leer instrucciones cortas, leer una cinta métrica y hacer cuentas con números enteros y decimales. La mayoría sabe que las fábricas usan máquinas controladas por computadora, pero no puede nombrar las máquinas ni los ejes, leer una tolerancia, leer una línea de código G ni enumerar los pasos de una preparación segura.",
    gap: "Los empleadores, los patrocinadores de aprendizajes y los programas de mecanizado buscan personas que conozcan las palabras básicas, puedan leer un plano y un programa sencillo y se tomen en serio la seguridad. Los participantes necesitan esa base y un plan con fechas, para elegir una buena formación, no malgastar dinero y llegar listos para aprender en la máquina.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (más o menos de 6.º a 8.º grado); se explica cada palabra del taller",
      "Sin trabajo en máquinas en este curso: manejar una fresadora o un torno requiere un taller supervisado y un instructor calificado",
      "Dispositivos: un teléfono o una computadora de la biblioteca para las páginas oficiales; papel cuadriculado, un lápiz y una regla para los dibujos y las trayectorias",
      "Matemáticas: decimales hasta tres cifras (milésimas de pulgada) y milímetros sencillos; se dan ejemplos resueltos",
      "Tiempo: lecciones de 5 a 6 minutos que quepan entre la escuela, el trabajo y las citas",
      "El código G cambia según el control de la máquina: cada participante sigue el manual de la máquina en la que se forma"
    ],
    prerequisites: "Ninguno. \"Matemáticas diarias para el trabajo y la vida\" ayuda con los decimales; \"Empezar una carrera en los oficios calificados\" ayuda a elegir un oficio, y este curso profundiza en el mecanizado."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Con imágenes o descripciones de máquinas y piezas del taller", action: "nombrar la máquina CNC que fabrica cada pieza y señalar sus ejes X, Y y Z", standard: "acertando al menos 4 de 5" },
    { id: "O2", condition: "Con el plano sencillo de una pieza con medidas con tolerancia", action: "escribir la medida mínima y máxima permitida para cada medida y decidir si una pieza medida pasa", standard: "sin errores de cálculo en 3 medidas" },
    { id: "O3", condition: "Con un programa CNC corto de 8 a 12 líneas", action: "explicar qué hace cada línea de código G y de código M y dibujar la trayectoria en papel cuadriculado", standard: "con los movimientos y los puntos de inicio y final correctos" },
    { id: "O4", condition: "Con los pasos de una preparación y una primera pieza en desorden", action: "poner en el orden correcto los pasos de una preparación segura y una primera pieza", standard: "con la prueba en vacío y la inspección de primera pieza antes de la producción" },
    { id: "O5", condition: "Con cinco peligros comunes de un taller de máquinas", action: "nombrar un control para cada peligro: guarda, equipo de protección, hábito seguro o bloqueo", standard: "nombrando un control correcto para los cinco" },
    { id: "O6", condition: "Usando páginas oficiales de formación, de aprendizajes y de NIMS", action: "escribir un plan con fechas para formarte y obtener una credencial de mecanizado", standard: "con dos programas, una credencial y una fecha para cada paso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Máquinas, planos y programas",
      lessons: [
        {
          title: "Qué hacen las máquinas CNC y cómo se mueven",
          objectives: ["O1"],
          minutes: 5,
          goal: "Nombrar las principales máquinas CNC y señalar sus ejes X, Y y Z.",
          text: [
            "CNC significa control numérico por computadora (en inglés, computer numerical control). Una máquina CNC sigue un programa para mover una herramienta de corte o una pieza por trayectorias exactas. Mecanizar es quitar material, en virutas, hasta que la pieza tiene la forma y el tamaño correctos.",
            "Una fresadora CNC (o centro de mecanizado) sujeta la pieza quieta sobre una mesa mientras una herramienta que gira la corta. Hace caras planas, cavidades, ranuras y agujeros, como en un soporte o una placa de motor. Un torno CNC (o centro de torneado) hace girar la pieza mientras una herramienta quieta la corta. Hace piezas redondas, como ejes, pasadores y bujes. Los talleres también usan routers CNC para madera y plástico, y cortadoras CNC de plasma y láser para lámina de metal.",
            "Cada dirección en la que una máquina puede moverse es un eje. En una fresadora vertical típica, X se mueve a la izquierda y a la derecha, Y se acerca y se aleja de ti, y Z sube y baja con el husillo. En un torno, Z va a lo largo de la pieza que gira y X va de lado a lado, lo que fija el diámetro. Las máquinas más grandes agregan ejes de giro, así que una máquina de \"5 ejes\" también puede inclinar y girar la pieza."
          ],
          words: [["CNC", "control numérico por computadora: una máquina que sigue un programa de números y códigos."], ["Fresadora", "una máquina en la que una herramienta que gira corta una pieza sujeta sobre una mesa."], ["Torno", "una máquina en la que la pieza gira y una herramienta quieta la corta; hace piezas redondas."], ["Husillo", "la parte de la máquina que hace girar la herramienta (fresadora) o la pieza (torno)."], ["Eje", "una dirección en la que una máquina puede moverse, como X, Y o Z."]],
          slides: [
            { title: "CNC = control numérico por computadora", bullets: ["Un programa mueve la herramienta o la pieza por trayectorias exactas", "Mecanizar es quitar material en virutas"] },
            { title: "Fresadora o torno", bullets: ["Fresadora: pieza quieta, herramienta que gira: caras, cavidades, ranuras, agujeros", "Torno: la pieza gira, herramienta quieta: ejes, pasadores, bujes"] },
            { title: "Ejes en una fresadora vertical", bullets: ["X: izquierda y derecha", "Y: hacia ti y lejos de ti", "Z: arriba y abajo con el husillo"] },
            { title: "Ejes en un torno", bullets: ["Z: a lo largo de la pieza", "X: de lado a lado de la pieza; fija el diámetro", "Las máquinas de 5 ejes agregan inclinación y giro"] }
          ],
          tryIt: "Busca en casa tres piezas de metal o de plástico (un tornillo, una bisagra de puerta, una tapa de pluma, una pieza de bicicleta). Para cada una, escribe \"fresadora\" o \"torno\" y por qué. Después dibuja una fresadora vertical como una caja con un husillo arriba y marca X, Y y Z con flechas.",
          youCanNow: "decir qué hace una fresadora CNC y qué hace un torno CNC, y señalar los ejes X, Y y Z en cada uno.",
          quickCheck: [
            { objective: "O1", q: "Un taller necesita 500 pasadores redondos de acero. ¿Qué máquina es la más adecuada?", options: ["Una cortadora CNC de plasma", "Un torno CNC", "Un router CNC para madera", "Una dobladora de lámina"], answer: 1, why: "Un torno hace girar la pieza, así que hace piezas redondas como pasadores y ejes." },
            { objective: "O1", q: "En una fresadora vertical típica, ¿qué eje sube y baja el husillo?", options: ["X", "Y", "A", "Z"], answer: 3, why: "En una fresadora vertical, Z es el eje de subida y bajada del husillo." }
          ]
        },
        {
          title: "Leer un plano: medidas y tolerancias",
          objectives: ["O2"],
          minutes: 6,
          goal: "Escribir la medida mínima y máxima permitida para una medida con tolerancia y decidir si una pieza pasa.",
          text: [
            "Un plano (también llamado dibujo técnico) muestra la pieza desde distintos lados y da todas las medidas que necesitas. Cada medida es una dimensión. Los talleres de EE. UU. suelen usar pulgadas escritas con tres o cuatro decimales; muchos talleres usan milímetros. El cuadro de rotulación, en una esquina del plano, muestra el nombre de la pieza, el material, las unidades y la tolerancia general.",
            "Ninguna pieza se puede hacer perfecta, así que el plano dice cuánto puede variar una medida. Ese margen es la tolerancia. \"1.000 ±0.005\" quiere decir que la medida puede ir de 0.995 a 1.005 pulgadas. Esos dos números son los límites. Si una medida no tiene una tolerancia escrita al lado, se aplica la tolerancia general del cuadro de rotulación.",
            "Los maquinistas revisan las medidas con instrumentos de medición. El calibrador (o vernier) mide rápido medidas exteriores, interiores y de profundidad. El micrómetro mide con más precisión en un rango pequeño. Los instrumentos se mantienen limpios y se comprueban con un patrón conocido, porque un instrumento sucio o que se cayó puede dar una lectura equivocada."
          ],
          steps: ["Busca la medida y sus unidades (pulgadas o mm) en el plano.", "Busca su tolerancia al lado, o la tolerancia general en el cuadro de rotulación.", "Resta la tolerancia para la medida mínima; súmala para la medida máxima.", "Compara la medida tomada: si está entre los límites, la medida pasa."],
          words: [["Plano", "un dibujo de una pieza con todas sus medidas; también se llama dibujo técnico."], ["Dimensión", "una medida que aparece en el plano, como un largo, un ancho o el diámetro de un agujero."], ["Tolerancia", "cuánto puede variar una medida y seguir siendo buena, como ±0.005."], ["Límites", "la medida mínima y la máxima permitidas."], ["Cuadro de rotulación", "el recuadro del plano con el nombre de la pieza, el material, las unidades y la tolerancia general."], ["Calibrador / micrómetro", "instrumentos de medición; el micrómetro es más preciso en un rango pequeño."]],
          slides: [
            { title: "Un plano da todas las medidas", bullets: ["Cada medida es una dimensión", "Pulgadas (a menudo con 3 o 4 decimales) o milímetros", "Cuadro de rotulación: pieza, material, unidades, tolerancia general"] },
            { title: "Tolerancia = error permitido", bullets: ["1.000 ±0.005 quiere decir de 0.995 a 1.005", "¿No hay tolerancia escrita? Usa la del cuadro de rotulación"] },
            { title: "Calcula los límites", bullets: ["Mínimo = medida menos tolerancia", "Máximo = medida más tolerancia", "Entre los límites = pasa"] },
            { title: "Instrumentos de medición", bullets: ["Calibrador: medidas rápidas exteriores, interiores y de profundidad", "Micrómetro: más preciso en un rango pequeño", "Mantén los instrumentos limpios y comprobados"] }
          ],
          tryIt: "Solo para practicar. Calcula los límites de: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Después decide: si una pieza mide 0.753 en (b), ¿pasa? (Respuestas: a de 2.490 a 2.510; b de 0.748 a 0.752; c de 24.9 a 25.1 mm; 0.753 es demasiado grande, así que no pasa.)",
          youCanNow: "encontrar una medida y su tolerancia en un plano, calcular sus límites y decidir si una pieza medida pasa.",
          quickCheck: [
            { objective: "O2", q: "Un plano dice 1.250 ±0.003. ¿Cuáles son los límites?", options: ["De 1.247 a 1.253", "De 1.250 a 1.253", "De 1.220 a 1.280", "De 1.247 a 1.250"], answer: 0, why: "Resta 0.003 para la medida mínima y suma 0.003 para la máxima." },
            { objective: "O2", q: "Una medida no tiene tolerancia escrita al lado. ¿Dónde buscas?", options: ["Le preguntas a la máquina", "Supones ±0.1", "En la tolerancia general del cuadro de rotulación", "Cualquier tolerancia sirve"], answer: 2, why: "El cuadro de rotulación da la tolerancia general para las medidas que no tienen la suya." }
          ]
        },
        {
          title: "Leer un programa CNC corto",
          objectives: ["O3"],
          minutes: 6,
          goal: "Explicar qué hace cada línea de un programa corto de código G y dibujar su trayectoria.",
          text: [
            "La mayoría de las máquinas CNC leen un programa escrito en código G. Cada línea, llamada bloque, da una o unas pocas instrucciones. Los códigos G casi siempre le dicen a la máquina cómo moverse. Los códigos M encienden y apagan funciones de la máquina. Las letras con números dan los detalles: X, Y y Z son posiciones, F es el avance (qué tan rápido se mueve la herramienta mientras corta), S es la velocidad del husillo y T elige una herramienta.",
            "Códigos comunes en muchas máquinas: G00 es un movimiento rápido (veloz, sin cortar). G01 es un movimiento de corte en línea recta al avance indicado. G02 y G03 cortan arcos, en el sentido de las agujas del reloj y en sentido contrario. G20 fija pulgadas y G21 fija milímetros. G90 quiere decir que las posiciones se miden desde el punto cero de la pieza (absoluto). M03 enciende el husillo en el sentido de las agujas del reloj, M05 lo detiene, M08 enciende el refrigerante, M09 lo apaga y M30 termina el programa.",
            "Los códigos pueden cambiar de un control de máquina a otro, así que un maquinista siempre revisa el manual de la máquina que tiene enfrente. Muchos talleres escriben los programas con software CAM, pero los maquinistas igual leen el código para detectar errores antes de que la herramienta se mueva. Un visor gratis de código G en el navegador puede dibujar la trayectoria de un programa, pero para practicar el papel cuadriculado funciona igual de bien."
          ],
          steps: ["Lee las primeras líneas: unidades (G20 o G21) y modo absoluto (G90).", "Busca la herramienta (T), la velocidad del husillo (S) y el arranque del husillo (M03).", "Para cada movimiento, anota el código (G00 o G01) y la posición X, Y y Z.", "Marca cada punto X y Y en papel cuadriculado y únelos en orden: línea punteada para rápido, línea continua para corte.", "Busca el final: husillo detenido (M05), refrigerante apagado (M09) y fin del programa (M30)."],
          words: [["Código G", "los códigos, casi siempre de movimiento, que lee una máquina CNC."], ["Código M", "códigos que encienden o apagan funciones de la máquina, como el husillo o el refrigerante."], ["Bloque", "una línea de un programa CNC."], ["Avance (F)", "qué tan rápido se mueve la herramienta mientras corta."], ["Velocidad del husillo (S)", "qué tan rápido gira el husillo, en revoluciones por minuto."], ["Trayectoria", "el camino que sigue la herramienta."], ["CAM", "software que convierte un modelo 3D en un programa CNC."]],
          slides: [
            { title: "Un programa es una lista de bloques", bullets: ["Códigos G: casi siempre movimientos", "Códigos M: encender y apagar funciones de la máquina", "Posiciones X, Y, Z; F avance; S velocidad; T herramienta"] },
            { title: "Códigos G comunes", bullets: ["G00 movimiento rápido, sin cortar", "G01 movimiento de corte en línea recta", "G02 / G03 arcos, en sentido horario / antihorario", "G20 pulgadas, G21 mm, G90 absoluto"] },
            { title: "Códigos M comunes", bullets: ["M03 husillo encendido en sentido horario, M05 husillo detenido", "M08 refrigerante encendido, M09 refrigerante apagado", "M30 fin del programa"] },
            { title: "Léelo y luego dibújalo", bullets: ["Marca cada punto X y Y en papel cuadriculado", "Línea punteada = rápido, línea continua = corte", "Los códigos cambian según el control: revisa el manual de la máquina"] }
          ],
          tryIt: "Solo para practicar, en papel cuadriculado (1 cuadro = 0.1 pulgada). Explica cada línea y luego dibújala: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Debes obtener un cuadrado de 1 pulgada cortado a 0.05 pulgadas de profundidad.",
          youCanNow: "leer un programa CNC corto línea por línea y dibujar el camino que seguirá la herramienta.",
          quickCheck: [
            { objective: "O3", q: "¿Qué le dice a la máquina G01 X2.0 F10.0?", options: ["Moverse rápido a X2.0 sin cortar", "Detener el husillo", "Encender el refrigerante", "Cortar en línea recta hasta X2.0 con un avance de 10"], answer: 3, why: "G01 es un movimiento de corte en línea recta, y F fija el avance." },
            { objective: "O3", q: "¿Qué código suele encender el husillo en el sentido de las agujas del reloj?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 enciende el husillo en sentido horario en la mayoría de los controles; M30 termina el programa y M09 apaga el refrigerante." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Máquinas, planos y programas",
        questions: [
          { objective: "O1", q: "Una pieza es una placa plana de aluminio con una cavidad y cuatro agujeros. ¿Qué máquina es la más adecuada?", options: ["Un torno CNC", "Una fresadora CNC", "Una cinta métrica", "Solo un taladro de banco"], answer: 1, why: "Una fresadora hace caras planas, cavidades y agujeros en una pieza sujeta quieta sobre la mesa." },
          { objective: "O1", q: "En un torno, ¿qué eje va a lo largo de la pieza que gira?", options: ["Z", "X", "Y", "B"], answer: 0, why: "En un torno, Z va a lo largo de la pieza y X va de lado a lado, lo que fija el diámetro." },
          { objective: "O2", q: "Un eje debe medir 0.500 ±0.001. Mide 0.4995. ¿Pasa?", options: ["No, es demasiado pequeño", "No, cualquier medida menor que 0.500 no pasa", "Sí, está entre 0.499 y 0.501", "No se puede saber"], answer: 2, why: "Los límites son de 0.499 a 0.501, y 0.4995 está entre ellos." },
          { objective: "O3", q: "Una línea del programa dice G00 Z1.0. ¿Qué pasa?", options: ["La herramienta corta 1 pulgada hacia abajo", "Se enciende el refrigerante", "Termina el programa", "La herramienta se mueve rápido, sin cortar, hasta Z1.0"], answer: 3, why: "G00 es un movimiento rápido; aquí levanta la herramienta hasta Z1.0, lejos de la pieza." },
          { objective: "O3", q: "Tu máquina de práctica usa un código que no has visto. ¿Qué haces?", options: ["Adivinar a partir de otra máquina", "Revisar el manual del control de esa máquina", "Borrar la línea", "Correrlo y mirar"], answer: 1, why: "Los códigos cambian según el control, así que la fuente es el manual de la propia máquina." }
        ]
      }
    },
    {
      name: "Capítulo 2: Preparación, seguridad y tu camino",
      lessons: [
        {
          title: "Preparar la máquina y hacer una primera pieza",
          objectives: ["O4"],
          minutes: 6,
          goal: "Poner en el orden correcto los pasos de una preparación segura y una primera pieza.",
          text: [
            "Antes de que un taller haga muchas piezas, alguien prepara la máquina y prueba el programa. Los operadores nuevos suelen empezar cargando piezas y revisando medidas, y luego aprenden a preparar la máquina con un maquinista líder.",
            "Preparar quiere decir: leer el plano y la hoja de preparación, limpiar la mesa o el chuck, sujetar la pieza con firmeza (la sujeción, como una prensa o un chuck), cargar las herramientas correctas y fijar las compensaciones. La compensación de trabajo le dice a la máquina dónde está el punto cero de la pieza. La compensación de herramienta le dice cuánto mide cada herramienta, para que la punta llegue al lugar correcto.",
            "Después el programa se prueba despacio. En una prueba en vacío la máquina se mueve con la herramienta a una altura segura sobre la pieza. El modo bloque a bloque corre una línea a la vez. La perilla de ajuste del avance hace más lentos los movimientos, y el operador mantiene una mano cerca del botón de pausa del avance o del paro de emergencia. Cuando se corta la primera pieza, se mide contra cada medida del plano. Esta es la inspección de primera pieza. Solo cuando pasa empiezan las piezas de producción."
          ],
          steps: ["Lee el plano, la hoja de preparación y el programa.", "Limpia la mesa, la prensa o el chuck y sujeta la pieza con firmeza.", "Carga las herramientas de la hoja de preparación.", "Fija la compensación de trabajo y las compensaciones de herramienta.", "Haz una prueba en vacío sobre la pieza y luego corre bloque a bloque con el ajuste del avance bajo.", "Mide la primera pieza contra cada medida (inspección de primera pieza).", "Empieza la producción solo cuando la primera pieza pase; sigue revisando piezas mientras avanzas."],
          words: [["Hoja de preparación", "el papel que indica las herramientas, la sujeción y las compensaciones de un trabajo."], ["Sujeción", "lo que mantiene quieta la pieza, como una prensa, unas abrazaderas o un chuck."], ["Compensación de trabajo", "el ajuste que le dice a la máquina dónde está el punto cero de la pieza."], ["Compensación de herramienta", "el ajuste del largo (y del tamaño) de cada herramienta, para que la punta llegue al lugar correcto."], ["Prueba en vacío", "correr el programa con la herramienta lejos de la pieza, sin peligro."], ["Inspección de primera pieza", "medir la primera pieza contra todo el plano antes de hacer más."]],
          slides: [
            { title: "Prepárate", bullets: ["Lee el plano, la hoja de preparación y el programa", "Limpia y sujeta la pieza con firmeza", "Carga las herramientas correctas"] },
            { title: "Fija las compensaciones", bullets: ["Compensación de trabajo: dónde está el cero de la pieza", "Compensaciones de herramienta: cuánto mide cada herramienta"] },
            { title: "Pruébalo despacio", bullets: ["Prueba en vacío con la herramienta lejos de la pieza", "Bloque a bloque, con el ajuste del avance bajo", "Mano cerca de la pausa del avance o del paro de emergencia"] },
            { title: "Primero, la primera pieza", bullets: ["Mide cada medida del plano", "La producción empieza solo cuando pasa", "Sigue revisando piezas durante el trabajo"] }
          ],
          tryIt: "Escribe cada uno de estos pasos en un papelito, revuélvelos y luego ponlos en orden: fijar las compensaciones de herramienta; inspección de primera pieza; limpiar y sujetar la pieza; prueba en vacío; leer el plano y la hoja de preparación; correr bloque a bloque; fijar la compensación de trabajo; cargar las herramientas; empezar la producción. Compara tu orden con los pasos de esta lección.",
          youCanNow: "poner en orden los pasos de una preparación y una primera pieza, y decir por qué la prueba en vacío y la inspección de primera pieza van antes de la producción.",
          quickCheck: [
            { objective: "O4", q: "¿Qué ajuste le dice a la máquina dónde está el punto cero de la pieza?", options: ["El avance", "La compensación de herramienta", "La compensación de trabajo", "La velocidad del husillo"], answer: 2, why: "La compensación de trabajo ubica el cero de la pieza; las compensaciones de herramienta fijan el largo de cada herramienta." },
            { objective: "O4", q: "Ya se cortó la primera pieza. ¿Qué va antes de correr el resto del trabajo?", options: ["Medirla contra cada medida del plano", "Subir el ajuste del avance al máximo", "Quitar las guardas para ver mejor", "Borrar el programa"], answer: 0, why: "La inspección de primera pieza comprueba la preparación y el programa antes de la producción." }
          ]
        },
        {
          title: "Mantenerte seguro en el taller de máquinas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Nombrar un control para cada peligro común del taller de máquinas.",
          text: [
            "Las máquinas pueden causar dedos o manos aplastados, amputaciones, quemaduras y ceguera. Los principales peligros son el husillo, el chuck y la herramienta que giran, las virutas que salen volando, las virutas y los bordes filosos y calientes, el refrigerante en la piel, las piezas pesadas y el ruido. Las reglas de protección de máquinas de OSHA (la agencia de seguridad y salud en el trabajo de EE. UU.), 29 CFR 1910.212, exigen guardas que protejan a los trabajadores de estos peligros.",
            "Hábitos del taller: usa lentes de seguridad con protección lateral todo el tiempo, y protección para los oídos donde haya mucho ruido. Mantén cerradas las puertas y las guardas de la máquina mientras funciona, y nunca metas la mano hasta que el husillo se haya detenido por completo. La mayoría de los talleres no permiten guantes, mangas sueltas, joyas ni cabello largo suelto cerca de un husillo que gira, porque pueden quedar atrapados y jalarte. Quita las virutas con un gancho para virutas o una brocha, nunca con las manos, y nunca soples virutas hacia ti ni hacia otras personas. Lávate el refrigerante de la piel y lee la hoja de datos de seguridad (SDS).",
            "Cuando una máquina se limpia, se repara o recibe mantenimiento, se apaga y se bloquea su energía para que nadie la pueda encender. Esto es el bloqueo y etiquetado, que cubre la regla de OSHA sobre energía peligrosa (29 CFR 1910.147), y solo lo hacen trabajadores capacitados y autorizados. La seguridad práctica la enseña en el taller un instructor calificado; sigue siempre las reglas de tu taller."
          ],
          steps: ["Ponte lentes de seguridad con protección lateral, y protección para los oídos donde haga falta.", "Quítate los guantes, las joyas y las mangas sueltas; amárrate el cabello largo.", "Revisa que las guardas y las puertas estén en su lugar y cerradas.", "Espera a que el husillo se detenga por completo antes de abrir la puerta o meter la mano.", "Quita las virutas con un gancho o una brocha, no con las manos.", "Para limpiar o reparar, sigue los pasos de bloqueo y etiquetado del taller."],
          words: [["Guarda", "una cubierta o puerta que mantiene las manos y las virutas lejos de las partes en movimiento."], ["Virutas", "los rizos y pedacitos de metal o plástico que corta la herramienta; a menudo filosos y calientes."], ["Refrigerante", "el líquido que enfría la herramienta y la pieza y se lleva las virutas."], ["SDS", "hoja de datos de seguridad: el papel que indica los peligros de un producto y cómo protegerse."], ["Bloqueo y etiquetado", "apagar y bloquear la energía de una máquina para que nadie la encienda durante el mantenimiento."]],
          slides: [
            { title: "Peligros de las máquinas", bullets: ["Husillo, chuck y herramienta que giran", "Virutas que vuelan, filosas y calientes", "Refrigerante en la piel, piezas pesadas, ruido"] },
            { title: "Protégete", bullets: ["Lentes de seguridad con protección lateral, siempre", "Protección para los oídos donde hay mucho ruido", "Nada de guantes, joyas ni mangas sueltas cerca de un husillo que gira; amárrate el cabello"] },
            { title: "Hábitos seguros", bullets: ["Guardas y puertas cerradas mientras funciona", "Espera a que se detenga por completo antes de meter la mano", "Gancho o brocha, nunca las manos"] },
            { title: "Mantenimiento = bloqueo y etiquetado", bullets: ["Energía apagada y bloqueada antes de limpiar o reparar", "OSHA 29 CFR 1910.147; solo trabajadores capacitados", "Sigue siempre las reglas de tu taller"] }
          ],
          sources: [
            { name: "OSHA: normas de protección de máquinas", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: control de energía peligrosa (bloqueo y etiquetado)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Haz en papel una tabla de dos columnas: Peligro y Control. Llena cinco filas: husillo que gira, virutas que vuelan, virutas filosas y calientes, refrigerante en la piel, máquina en reparación. Escribe un control para cada una y luego compáralos con esta lección.",
          youCanNow: "nombrar los principales peligros del taller de máquinas y un control para cada uno.",
          quickCheck: [
            { objective: "O5", q: "Se está juntando un montón de virutas calientes cerca de la prensa. ¿Cómo las quitas?", options: ["Las quitas con la mano", "Las soplas con aire hacia un compañero", "Metes la mano mientras gira el husillo", "Esperas a que se detenga por completo y usas un gancho o una brocha"], answer: 3, why: "Las virutas son filosas y calientes; un gancho o una brocha protege tus manos." },
            { objective: "O5", q: "Una máquina necesita una reparación por dentro. ¿Qué tiene que pasar primero?", options: ["Bajar el ajuste del avance", "Un trabajador autorizado apaga y bloquea su energía", "Abrir la puerta mientras funciona", "Ponerse guantes"], answer: 1, why: "El bloqueo y etiquetado evita que alguien encienda la máquina durante el mantenimiento." }
          ]
        },
        {
          title: "Formación, credenciales y tu plan CNC",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escribir un plan con fechas para formarte y obtener una credencial de mecanizado.",
          text: [
            "La mayoría de los maquinistas aprenden en el trabajo, muchas veces empezando como operadores de máquina. Los colegios comunitarios y las escuelas técnicas ofrecen certificados y títulos de dos años que cubren la lectura de planos y la programación y operación CNC. Los aprendizajes registrados combinan trabajo pagado con clases y suelen durar varios años. Busca uno con el Apprenticeship Job Finder (el buscador de aprendizajes) en apprenticeship.gov. Los veteranos pueden preguntar cómo usar sus beneficios educativos, y los jóvenes pueden preguntar por programas en su escuela o en su centro de empleo.",
            "Las credenciales le muestran a un empleador lo que sabes hacer. El National Institute for Metalworking Skills (NIMS) fija normas y credenciales para los puestos de mecanizado. La mayoría de las credenciales NIMS tienen dos partes: un examen sobre los conocimientos del puesto y una prueba práctica, como mecanizar una pieza según el plano. Revisa los nombres y requisitos actuales de las credenciales en nims-skills.org. Algunos empleadores también valoran certificados de CNC o de CAD/CAM de una escuela o de un fabricante de máquinas.",
            "Este curso te prepara; no te certifica. Ten cuidado con cualquier programa que prometa un trabajo o una credencial rápido a cambio de mucho dinero. Pregúntale a la escuela cuánto tiempo de taller hay en máquinas reales, para qué credenciales te prepara y cuántos egresados consiguen trabajo."
          ],
          steps: ["Elige una primera meta: trabajo de operador, programa escolar o aprendizaje.", "Busca dos programas cerca de ti: un colegio comunitario o escuela técnica, y un aprendizaje en apprenticeship.gov.", "Busca en nims-skills.org la credencial NIMS del puesto que quieres.", "Pregunta en cada programa por el tiempo en máquinas, las credenciales, el costo y la colocación en empleos.", "Escribe una fecha para cada paso: solicitar, empezar, practicar, presentar el examen."],
          words: [["Aprendizaje", "un trabajo pagado con capacitación en el trabajo y clases, a menudo durante varios años."], ["Credencial", "una prueba, como un certificado, de que pasaste un examen de tus habilidades."], ["NIMS", "el National Institute for Metalworking Skills, que fija normas y credenciales de mecanizado."], ["Prueba práctica", "un examen en el que haces la tarea, como mecanizar una pieza según el plano."]],
          slides: [
            { title: "Formas de entrar", bullets: ["Empezar como operador de máquina y aprender en el trabajo", "Certificado de un colegio comunitario o escuela técnica", "Aprendizaje registrado: trabajo pagado más clases"] },
            { title: "Credenciales", bullets: ["NIMS: normas y credenciales de mecanizado", "Por lo general, un examen más una prueba práctica", "Revisa los nombres y pasos actuales en nims-skills.org"] },
            { title: "Elige bien un programa", bullets: ["Pregunta por el tiempo en máquinas reales", "Pregunta para qué credenciales te prepara", "Cuidado con las promesas rápidas y caras"] },
            { title: "Tu plan con fechas", bullets: ["Dos programas, una credencial", "Una fecha para solicitar, empezar, practicar y presentar el examen"] }
          ],
          tryIt: "Tarea final: haz tu plan de inicio en CNC. Dibuja una fresadora y un torno con sus ejes, calcula los límites de tres medidas con tolerancia, escribe y explica un programa corto para un cuadrado o una ranura y dibújalo, escribe tu lista de preparación y seguridad, y escribe un plan con fechas con dos programas cerca de ti y una credencial NIMS tomada del sitio oficial.",
          youCanNow: "encontrar formación en mecanizado cerca de ti, nombrar la credencial a la que vas a apuntar y seguir un plan con fechas para lograrlo.",
          quickCheck: [
            { objective: "O6", q: "¿Dónde puedes buscar aprendizajes registrados en EE. UU.?", options: ["En un anuncio de trabajo que cobra por postularse", "En una publicación de redes sociales", "En el Apprenticeship Job Finder de apprenticeship.gov", "En un mensaje de texto de un desconocido"], answer: 2, why: "Apprenticeship.gov es el sitio oficial del Departamento de Trabajo de EE. UU. y tiene un buscador de aprendizajes." },
            { objective: "O6", q: "¿Qué incluyen la mayoría de las credenciales NIMS?", options: ["Un examen y una prueba práctica", "Solo un video en línea", "Solo un pago", "Una nota de un amigo"], answer: 0, why: "NIMS describe un examen sobre los conocimientos del puesto más una evaluación práctica." }
          ],
          sources: [
            { name: "NIMS: credenciales", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (Departamento de Trabajo de EE. UU.)", url: "https://www.apprenticeship.gov/" },
            { name: "Manual de perspectivas ocupacionales de la BLS: maquinistas y fabricantes de herramientas y matrices", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Preparación, seguridad y tu camino",
        questions: [
          { objective: "O4", q: "¿Por qué se hace una prueba en vacío antes de cortar la primera pieza?", options: ["Para encontrar errores del programa con la herramienta lejos de la pieza, sin peligro", "Para que la máquina vaya más rápido", "Para saltarse la inspección de primera pieza", "Para calentar el refrigerante"], answer: 0, why: "Una prueba en vacío muestra los movimientos sin cortar, así los errores se detectan sin peligro." },
          { objective: "O4", q: "¿Qué paso va justo después de sujetar la pieza y cargar las herramientas?", options: ["Empezar la producción", "La inspección de primera pieza", "Fijar la compensación de trabajo y las compensaciones de herramienta", "Enviar las piezas"], answer: 2, why: "Las compensaciones se deben fijar antes de probar el programa y cortar la primera pieza." },
          { objective: "O5", q: "¿Por qué la mayoría de los talleres prohíben los guantes cerca de un husillo que gira?", options: ["Te enfrían las manos", "Pueden quedar atrapados y jalar tu mano", "Cuestan demasiado", "Tapan tus tatuajes"], answer: 1, why: "Un husillo o una herramienta que gira puede agarrar un guante y jalar la mano." },
          { objective: "O5", q: "¿Qué protección usas todo el tiempo en un taller de máquinas?", options: ["Solo un casco", "Guantes", "Sandalias", "Lentes de seguridad con protección lateral"], answer: 3, why: "Las virutas que vuelan pueden dejarte ciego, así que la protección de ojos se usa todo el tiempo." },
          { objective: "O6", q: "Una escuela promete un trabajo de CNC en una semana a cambio de mucho dinero. ¿Qué haces?", options: ["Preguntar por el tiempo en máquinas, las credenciales y la contratación, y comparar otros programas", "Pagar de inmediato", "Darles los datos de acceso de tu banco", "Firmar sin leer"], answer: 0, why: "Revisar lo que un programa ofrece de verdad protege tu tiempo y tu dinero." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Fundamentos del mecanizado CNC",
    questions: [
      { objective: "O1", q: "¿Qué significa CNC?", options: ["Corte numérico central", "Control numérico por computadora", "Corta nada más con cuidado", "Cubierta de níquel en frío"], answer: 1, why: "CNC significa control numérico por computadora." },
      { objective: "O1", q: "¿Qué pieza es más probable que se haga en un torno CNC?", options: ["Un soporte plano con ranuras", "Una caja de lámina de metal", "Un eje redondo", "Un letrero de madera"], answer: 2, why: "Un torno hace girar la pieza, así que hace piezas redondas como ejes." },
      { objective: "O1", q: "En una fresadora vertical, ¿qué eje se acerca y se aleja de ti?", options: ["Y", "Z", "X", "C"], answer: 0, why: "En una fresadora vertical, Y se acerca y se aleja del operador." },
      { objective: "O2", q: "¿Qué es una tolerancia?", options: ["El material de la pieza", "La velocidad de la máquina", "Cuánto puede variar una medida y seguir siendo buena", "El nombre de la pieza"], answer: 2, why: "Una tolerancia es el error permitido en una medida." },
      { objective: "O2", q: "Un plano dice 3.000 ±0.005. ¿Qué medida tomada no pasa?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Los límites son de 2.995 a 3.005, así que 3.006 es demasiado grande." },
      { objective: "O2", q: "¿Dónde encuentras las unidades y la tolerancia general en un plano?", options: ["En el programa", "En el cuadro de rotulación", "En la puerta de la máquina", "Solo en la hoja de preparación"], answer: 1, why: "El cuadro de rotulación indica la pieza, el material, las unidades y la tolerancia general." },
      { objective: "O2", q: "¿Qué instrumento mide con más precisión en un rango pequeño?", options: ["Un micrómetro", "Una cinta métrica", "Una regla", "Un gancho para virutas"], answer: 0, why: "Un micrómetro es más preciso que un calibrador o una regla dentro de su rango pequeño." },
      { objective: "O3", q: "¿Qué código suele ser un movimiento rápido, sin cortar?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 es un movimiento rápido de posicionamiento." },
      { objective: "O3", q: "En un programa CNC, ¿qué fija la palabra F?", options: ["El número de la herramienta", "El avance mientras corta", "La velocidad del husillo", "El nombre del archivo"], answer: 1, why: "F es el avance; S es la velocidad del husillo y T es la herramienta." },
      { objective: "O3", q: "Un programa empieza con G21. ¿Qué fija eso?", options: ["Pulgadas", "Refrigerante encendido", "Milímetros", "Fin del programa"], answer: 2, why: "G21 fija milímetros; G20 fija pulgadas." },
      { objective: "O3", q: "¿Qué código suele terminar el programa?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 termina el programa en la mayoría de los controles." },
      { objective: "O4", q: "¿Qué le dice a la máquina la compensación de herramienta?", options: ["Dónde está el punto cero de la pieza", "Qué tan rápido cortar", "Qué refrigerante usar", "Cuánto mide cada herramienta, para que la punta llegue al lugar correcto"], answer: 3, why: "Las compensaciones de herramienta fijan el largo de cada herramienta; la compensación de trabajo fija el cero de la pieza." },
      { objective: "O4", q: "Al probar un programa nuevo, ¿cuál es una forma segura de correrlo?", options: ["A toda velocidad con la puerta abierta", "Bloque a bloque con el ajuste del avance bajo", "Saltarse la prueba en vacío", "Dejar la máquina sola mientras funciona"], answer: 1, why: "El modo bloque a bloque y un avance bajo te permiten detenerte antes de un error." },
      { objective: "O4", q: "¿Qué es la inspección de primera pieza?", options: ["Leer la primera página del manual", "Limpiar la primera viruta", "Medir la primera pieza contra cada medida del plano", "Cargar la primera herramienta"], answer: 2, why: "La primera pieza se mide por completo antes de que empiece la producción." },
      { objective: "O5", q: "El husillo va más lento pero no se ha detenido. ¿Qué haces?", options: ["Esperar a que se detenga por completo antes de abrir la puerta", "Meter la mano para agarrar la pieza", "Detenerlo con la mano", "Abrir la puerta para ver de cerca"], answer: 0, why: "Nunca metas la mano hasta que el husillo se haya detenido por completo." },
      { objective: "O5", q: "¿Qué regla de OSHA cubre el bloqueo y etiquetado de la energía peligrosa?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 es la regla de OSHA de control de energía peligrosa (bloqueo y etiquetado)." },
      { objective: "O5", q: "Te cayó refrigerante en los brazos. ¿Qué haces?", options: ["No hacerle caso", "Lavarlo y revisar en la SDS cómo protegerte", "Limpiarlo en tu camisa", "Echar más refrigerante"], answer: 1, why: "El refrigerante puede irritar la piel; lávalo y sigue la SDS." },
      { objective: "O6", q: "¿Qué te da este curso?", options: ["Una credencial NIMS", "Una licencia estatal", "Preparación para la formación y para un examen de credencial", "Un trabajo garantizado"], answer: 2, why: "El curso te prepara; las credenciales se obtienen al pasar pruebas como los exámenes y las pruebas prácticas de NIMS." },
      { objective: "O6", q: "¿Dónde revisas los nombres y requisitos actuales de las credenciales NIMS?", options: ["En una publicación de redes sociales", "En nims-skills.org", "En un comentario de un video", "En cualquier anuncio de trabajo"], answer: 1, why: "El sitio oficial de NIMS tiene las credenciales y los requisitos actuales." },
      { objective: "O6", q: "¿Qué debe tener un buen plan de inicio en CNC?", options: ["Dos programas, una credencial y una fecha para cada paso", "Solo el deseo de trabajar en una fábrica", "Un pago a un desconocido", "Ninguna fecha, para que sea flexible"], answer: 0, why: "Un plan con programas concretos, una credencial y fechas convierte la meta en pasos." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  pretest: { title: "Prueba inicial: ¿Qué sabes ya?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en todas las filas. Si una fila dice Todavía no, arregla esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Máquinas y ejes", objective: "O1", notYet: "El dibujo confunde la fresadora y el torno, o los ejes faltan o están mal.", meets: "La fresadora y el torno están dibujados con X, Y y Z bien marcados.", exceeds: "Además nombra una pieza que hace cada máquina y dónde agrega movimiento una máquina de 5 ejes." },
      { name: "Lectura de planos", objective: "O2", notYet: "Uno o más límites están mal, o la decisión de pasa o no pasa está mal.", meets: "Las tres medidas tienen los límites correctos y una decisión correcta de pasa o no pasa.", exceeds: "Además muestra un ejemplo en milímetros y dice con qué instrumento mediría cada medida." },
      { name: "Programa y trayectoria", objective: "O3", notYet: "Las líneas no están explicadas, o la trayectoria dibujada no coincide con el código.", meets: "Cada línea está explicada y la trayectoria dibujada coincide con el código, con los rápidos y los cortes marcados.", exceeds: "Además encuentra y corrige un error que un compañero o el instructor puso a propósito en el programa." },
      { name: "Lista de preparación y seguridad", objective: "O5", notYet: "A la lista le faltan las guardas, la protección de ojos, la ropa o las virutas.", meets: "Cubre guardas, protección de ojos y oídos, ropa, virutas, refrigerante y bloqueo para el mantenimiento.", exceeds: "Además explica en una línea corta por qué importa cada punto." },
      { name: "Orden de la preparación", objective: "O4", notYet: "La producción empieza antes de la prueba en vacío o de la inspección de primera pieza.", meets: "Los pasos están en orden, con las compensaciones, una prueba en vacío y la inspección de primera pieza antes de la producción.", exceeds: "Además agrega revisiones durante el proceso." },
      { name: "Plan con fechas", objective: "O6", notYet: "No hay programas reales, ni credencial, ni fechas.", meets: "Dos programas reales cerca del participante, una credencial NIMS tomada del sitio oficial y una fecha para cada paso.", exceeds: "Además anota las preguntas que hizo a cada programa y las respuestas." }
    ]
  },
  evaluation: {
    results: [
      "Participantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Participantes que solicitan entrar a un programa de mecanizado, un aprendizaje o un trabajo de operador en un plazo de 90 días",
      "Participantes que obtienen una credencial NIMS u otra credencial de mecanizado en un plazo de un año",
      "Participantes contratados como operadores de máquina, operadores CNC o aprendices, y lo que dicen los empleadores aliados sobre qué tan preparados llegan los nuevos empleados"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Un teléfono o una computadora de la biblioteca para las páginas oficiales (nims-skills.org, apprenticeship.gov)",
      "Papel cuadriculado, un lápiz, una regla y una calculadora",
      "Opcional: un visor gratis de código G en el navegador para revisar las trayectorias dibujadas",
      "Opcional, con un instructor: un calibrador y un micrómetro para practicar la lectura con piezas de muestra",
      "Unos 75 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "Hagan juntos la prueba inicial y luego un capítulo por sesión, con las tareas de \"Pruébalo ahora\" en vivo.",
      "Sin trabajo en máquinas en este curso. Si lo dan en un taller, los participantes solo miran y no tocan las máquinas, a menos que un instructor calificado esté supervisando con todas las guardas y el equipo de seguridad en su lugar.",
      "Recuerde a los participantes que el código G cambia según el control; si su programa usa una máquina en particular, entregue su lista de códigos.",
      "Para la tarea de la trayectoria, ponga a propósito un error en un programa corto (un M05 que falta o un valor de X equivocado) y pida a las parejas que lo encuentren.",
      "Califique la tarea final con la rúbrica y dé comentarios sobre una fila de Todavía no a la vez.",
      "Invite a un maquinista local, a un patrocinador de aprendizajes o a un instructor de un colegio comunitario a hablar sobre trabajos y formación reales en su zona."
    ]
  }
};

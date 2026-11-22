"use strict";

// Koach Learn course (Spanish translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations".

const CERTIPORT = { name: "Certiport (Pearson VUE): certificaciones de Intuit, incluidas QuickBooks Certified User e Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (sitio de capacitación y certificación de Intuit)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Ayuda de Intuit QuickBooks: prueba de demostración (test drive) y práctica con QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "Capacitación y certificación QuickBooks ProAdvisor (para contadores)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-es",
  lang: "es",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Teneduría de libros con QuickBooks",
  skills: "Armar un plan de cuentas, Registrar facturas y pagos, Registrar facturas de proveedores y gastos, Conciliar una cuenta bancaria, Leer los informes principales, Planear una credencial de QuickBooks",
  outcome: "llevar los libros de un pequeño negocio en QuickBooks Online durante un mes: clasificar el dinero en las cuentas correctas, registrar ventas, pagos, facturas de proveedores y gastos, cotejar y conciliar el banco, sacar los informes principales y seguir un plan hacia una credencial de QuickBooks.",
  about: [
    "Casi todos los pequeños negocios, iglesias y organizaciones sin fines de lucro necesitan a alguien que les lleve los libros, y muchos usan QuickBooks. La teneduría de libros puede ser un trabajo de tiempo completo, un trabajo de medio tiempo desde casa o un negocio propio con varios clientes. Este curso es para personas que buscan empleo, oficinistas que quieren un mejor puesto, dueños de pequeños negocios y voluntarios de organizaciones sin fines de lucro.",
    "Vas a practicar el trabajo real: el plan de cuentas, las facturas y los pagos de clientes, las facturas de proveedores y los gastos, el feed bancario, una conciliación bancaria, el estado de resultados y el balance general, y una lista de cierre de mes. Practicas en la prueba de demostración (test drive) de QuickBooks Online de Intuit, una empresa de ejemplo que abres en un navegador web y donde nada de lo que haces se guarda, o en papel si no tienes computadora.",
    "El curso te prepara para trabajar en teneduría de libros y para credenciales de Intuit como QuickBooks Certified User e Intuit Certified Bookkeeping Professional, cuyos exámenes los administra Certiport. El curso no otorga ninguna credencial; la obtienes al aprobar el examen oficial. Revisa las páginas oficiales para ver los detalles y costos actuales.",
    "Si ya tomaste \"Contabilidad básica para tu negocio\", este es el siguiente paso. Cada lección dura unos cinco minutos, con una tarea de \"Pruébalo ahora\" y una comprobación rápida de dos preguntas. Hay una comprobación de conocimientos después de cada capítulo, un examen de 20 preguntas al final y una tarea final que puedes mostrar a un empleador o a un cliente."
  ],
  finalTask: "Prepara tu paquete de cierre de mes en QuickBooks para un negocio de ejemplo (una empresa de limpieza, un food truck o una pequeña organización sin fines de lucro): (1) un plan de cuentas con al menos 12 cuentas, cada una marcada como ingreso, gasto, activo, pasivo o patrimonio; (2) un registro de al menos 10 transacciones que ingresaste en la prueba de demostración de QuickBooks Online o en papel (al menos 3 facturas, 2 pagos de clientes y 4 facturas de proveedores o gastos), cada una con su fecha, cliente o proveedor, cuenta y monto; (3) una conciliación bancaria del mes que termine con una diferencia de cero, o una nota escrita de lo que todavía no cuadra y por qué; (4) un resumen de un párrafo del estado de resultados del mes; y (5) un plan de credencial de 60 días con fechas: qué credencial de Intuit vas a preparar, cuándo vas a revisar su página oficial y cuándo vas a hacer exámenes de práctica.",
  // ---- ADDIE: Análisis ----
  analysis: {
    learners: "Adultos y jóvenes adultos que quieren trabajo de oficina o de teneduría de libros: personas que buscan empleo, trabajadores de oficina y de tiendas que quieren avanzar, personas que salen de prisión, inmigrantes con experiencia en negocios, dueños de pequeños negocios que llevan sus propios libros y voluntarios de organizaciones sin fines de lucro que manejan dinero.",
    startingPoint: "Saben usar un navegador web y hacer cuentas cotidianas con calculadora. Algunos han llevado un registro de dinero en papel o en una hoja de cálculo. La mayoría nunca ha usado QuickBooks ni ha oído hablar de un plan de cuentas, una conciliación o un balance general.",
    gap: "Los empleadores y los clientes buscan tenedores de libros que ya sepan cómo QuickBooks registra las ventas, las facturas de proveedores y los movimientos del banco, y que puedan hacer que los libros cuadren con el banco cada mes. Sin eso, los pequeños errores se acumulan y terminan en impuestos mal calculados, facturas sin pagar y cobros pendientes. Aprender los pasos y los informes, y tener un plan hacia una credencial de Intuit, hace que sea más fácil contratar a la persona y le permite atender a sus propios clientes.",
    constraints: [
      "Nivel de lectura: palabras sencillas y oraciones cortas (de 7.º a 8.º grado, más o menos); se explica cada término contable",
      "Dispositivos: una computadora o tableta con navegador web para la prueba de demostración; cada práctica también se puede hacer en papel",
      "Costo: la prueba de demostración se abre en un navegador sin comprar QuickBooks; no guarda los cambios, así que los estudiantes toman notas",
      "QuickBooks cambia sus pantallas a menudo, así que el curso enseña acciones y nombres de informes, no rutas exactas de menú",
      "Privacidad: la práctica usa la empresa de ejemplo o números inventados, nunca accesos bancarios ni números de cuenta reales",
      "Las reglas de impuestos cambian y varían según el lugar: las lecciones remiten a irs.gov o a un profesional de impuestos y no dan asesoría fiscal"
    ],
    prerequisites: "Ninguno, pero \"Contabilidad básica para tu negocio\" o \"Excel y hojas de cálculo para el trabajo\" ayuda a quienes nunca han llevado la cuenta del dinero que entra y sale."
  },
  // ---- ADDIE: Diseño (objetivos: condición, acción observable, criterio) ----
  objectives: [
    { id: "O1", condition: "Dada una oferta de empleo de teneduría de libros o la solicitud de un cliente", action: "enumerar las tareas principales de un tenedor de libros de QuickBooks y nombrar una credencial de Intuit adecuada para el puesto", standard: "nombrando al menos cuatro tareas y la página oficial donde se consulta la credencial" },
    { id: "O2", condition: "Dada una lista de los movimientos de dinero de un pequeño negocio", action: "clasificar cada movimiento en el tipo de cuenta correcto de un plan de cuentas", standard: "colocando al menos 9 de 10 movimientos en el tipo de cuenta correcto" },
    { id: "O3", condition: "Dados una venta, un cliente y un pago", action: "registrar en QuickBooks la factura o el recibo de venta y el pago del cliente", standard: "con el cliente, la fecha, el monto y la cuenta de ingresos correctos, y sin dejar ninguna factura abierta después de pagada" },
    { id: "O4", condition: "Dados una factura de proveedor, un recibo y un proveedor", action: "registrar en QuickBooks la factura del proveedor, el gasto y el pago de la factura", standard: "con el proveedor, la fecha, el monto y la cuenta de gastos correctos, y con el recibo adjunto o anotado" },
    { id: "O5", condition: "Dados un mes de movimientos bancarios y un estado de cuenta del banco", action: "cotejar el feed bancario y conciliar la cuenta bancaria", standard: "terminando con una diferencia de cero, o con una nota escrita de lo que todavía no cuadra" },
    { id: "O6", condition: "Al final de un mes", action: "sacar y explicar el estado de resultados, el balance general y el informe de facturas abiertas", standard: "indicando la ganancia o pérdida del mes y quién todavía debe dinero" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Configurar y registrar ventas",
      lessons: [
        {
          title: "El trabajo de tenedor de libros con QuickBooks y cómo llegar a él",
          objectives: ["O1"],
          minutes: 5,
          goal: "Enumerar las tareas principales de un tenedor de libros de QuickBooks y nombrar una credencial que te ayude a conseguir empleo.",
          text: [
            "Un tenedor de libros registra el dinero de un negocio para que el dueño siempre sepa cómo está. En QuickBooks eso significa: enviar facturas y registrar los pagos de los clientes, registrar facturas de proveedores y gastos, revisar el feed bancario, conciliar el banco cada mes, sacar informes y guardar los recibos. Los tenedores de libros trabajan para una empresa, para un despacho contable o para varios clientes pequeños con su propio negocio. Las iglesias y las organizaciones sin fines de lucro también los necesitan.",
            "QuickBooks Online es la versión web de Intuit, que se usa en un navegador. QuickBooks Desktop se instala en una computadora. La mayoría de los pequeños negocios que empiezan hoy usan QuickBooks Online, así que este curso lo usa, pero las ideas son las mismas en los dos.",
            "Dos credenciales de Intuit van con este curso. QuickBooks Certified User demuestra que sabes usar QuickBooks. Intuit Certified Bookkeeping Professional demuestra que conoces las bases de la teneduría de libros. Los dos exámenes los administra Certiport, una empresa de Pearson VUE, e Intuit Academy ofrece capacitación. Los contadores también pueden obtener la certificación QuickBooks ProAdvisor. Este curso te prepara; no otorga ninguna credencial. Los costos, los requisitos y los detalles del examen cambian, así que revisa las páginas oficiales.",
            "Un tenedor de libros no es un preparador de impuestos ni un contador público certificado (CPA, por sus siglas en inglés). Tú mantienes los registros en orden; las preguntas de impuestos van a un profesional de impuestos o a irs.gov, el sitio del IRS (la agencia de impuestos de EE. UU.)."
          ],
          words: [["Tenedor de libros", "persona que registra el dinero que entra y sale de un negocio y mantiene los registros exactos."], ["QuickBooks Online", "el programa de contabilidad de Intuit que funciona en un navegador web."], ["Credencial", "certificado que demuestra que aprobaste un examen oficial."], ["Certiport", "empresa de Pearson VUE que administra los exámenes de certificación de Intuit."], ["CPA", "contador público certificado: contador con licencia que puede hacer trabajos que un tenedor de libros no puede, como auditorías."]],
          slides: [
            { title: "Qué hace un tenedor de libros con QuickBooks", bullets: ["Facturas y pagos de clientes", "Facturas de proveedores y gastos", "Feed bancario y conciliación mensual", "Informes y recibos"] },
            { title: "Dónde trabajan los tenedores de libros", bullets: ["En una empresa o en un despacho contable", "Con varios clientes pequeños, como negocio propio", "En iglesias y organizaciones sin fines de lucro"] },
            { title: "Credenciales que pueden ayudar", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Exámenes administrados por Certiport; revisa la página oficial"] },
            { title: "Conoce tu papel", bullets: ["Tú mantienes los registros en orden", "Las preguntas de impuestos van a un profesional o a irs.gov", "Este curso te prepara; el examen otorga la credencial"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Busca en internet una oferta de empleo de teneduría de libros (busca \"bookkeeper QuickBooks\" o \"tenedor de libros QuickBooks\" en un sitio de empleos). Anota cuatro tareas que menciona y si pide una credencial de QuickBooks. Luego abre la página de Certiport en las fuentes y escribe los nombres de las dos credenciales de Intuit que van con este trabajo.",
          youCanNow: "enumerar lo que hace un tenedor de libros de QuickBooks y nombrar una credencial adecuada para el puesto.",
          quickCheck: [
            { objective: "O1", q: "¿Qué tarea forma parte del trabajo mensual de un tenedor de libros?", options: ["Firmar la declaración de impuestos de la empresa como CPA", "Conciliar la cuenta bancaria", "Auditar a otra empresa", "Dar asesoría de inversiones"], answer: 1, why: "Conciliar el banco cada mes es parte central de la teneduría de libros." },
            { objective: "O1", q: "¿Quién administra el examen QuickBooks Certified User?", options: ["El IRS", "La oficina de trabajo de tu estado", "Cualquier usuario de QuickBooks", "Certiport, para Intuit"], answer: 3, why: "Certiport, una empresa de Pearson VUE, administra los exámenes de certificación de Intuit." }
          ]
        },
        {
          title: "El plan de cuentas y los asientos de dos lados",
          objectives: ["O2"],
          minutes: 6,
          goal: "Clasificar los movimientos de dinero de un negocio en los cinco tipos de cuentas.",
          text: [
            "El plan de cuentas es la lista de todos los lugares donde se puede clasificar el dinero en QuickBooks. Cada cuenta pertenece a uno de cinco tipos. Ingresos: dinero ganado, como ventas o donaciones. Gastos: costos de operar el negocio, como materiales, renta y combustible. Activos: lo que el negocio tiene o lo que le deben, como la cuenta bancaria, el equipo y el dinero que los clientes todavía deben. Pasivos: dinero que el negocio debe, como un préstamo, una tarjeta de crédito o facturas aún sin pagar. Patrimonio: la parte del dueño, incluido el dinero que el dueño puso o sacó.",
            "Cada asiento afecta por lo menos dos cuentas. Eso se llama contabilidad por partida doble. Cuando envías una factura de $200, suben los ingresos y sube el dinero que los clientes te deben (cuentas por cobrar). Cuando el cliente paga, bajan las cuentas por cobrar y sube el banco. QuickBooks hace el segundo lado por ti cuando usas el formulario correcto; por eso importa elegir el formulario y la cuenta correctos.",
            "QuickBooks le da a cada empresa nueva un plan de cuentas inicial según el tipo de negocio. Un tenedor de libros lo pone en orden: agrega las cuentas que el negocio realmente usa, cambia los nombres poco claros y mantiene los mismos nombres cada mes. Una organización sin fines de lucro podría agregar cuentas como Donaciones, Subvenciones y Materiales del programa.",
            "En la prueba de demostración, busca \"chart of accounts\" (plan de cuentas) para abrir la lista y ver el tipo de cada cuenta."
          ],
          steps: ["Abre el plan de cuentas (búscalo si no lo encuentras).", "Lee el tipo de cada cuenta: ingreso, gasto, activo, pasivo o patrimonio.", "Agrega las cuentas que el negocio realmente usa.", "Cambia el nombre de las cuentas poco claras para que cualquiera las entienda.", "Usa siempre la misma cuenta para el mismo tipo de dinero."],
          words: [["Plan de cuentas", "la lista de todas las cuentas en las que se puede clasificar el dinero."], ["Activo", "algo que el negocio tiene o que le deben, como el dinero en el banco o el equipo."], ["Pasivo", "dinero que el negocio debe, como un préstamo o una factura sin pagar."], ["Patrimonio", "la parte del negocio que le corresponde al dueño."], ["Cuentas por cobrar (A/R)", "dinero que los clientes le deben al negocio."], ["Cuentas por pagar (A/P)", "dinero que el negocio les debe a los proveedores por facturas aún sin pagar."], ["Partida doble", "cada asiento cambia por lo menos dos cuentas para que los libros estén en equilibrio."]],
          slides: [
            { title: "Cinco tipos de cuentas", bullets: ["Ingresos y gastos", "Activos y pasivos", "Patrimonio: la parte del dueño"] },
            { title: "Cada asiento tiene dos lados", bullets: ["Factura: suben los ingresos y las cuentas por cobrar", "Pago: bajan las cuentas por cobrar y sube el banco", "Con el formulario correcto, QuickBooks hace los dos lados"] },
            { title: "Pon en orden la lista", bullets: ["Agrega las cuentas que usa el negocio", "Cambia los nombres poco claros", "La misma cuenta para el mismo tipo de dinero"] },
            { title: "Ejemplo de una organización sin fines de lucro", bullets: ["Ingresos: Donaciones, Subvenciones", "Gastos: Materiales del programa, Renta"] }
          ],
          tryIt: "En papel, haz dos columnas: Movimiento y Tipo de cuenta. Clasifica estos diez movimientos: materiales de limpieza, el dinero en la cuenta de cheques del negocio, un cliente que debe $150, un préstamo para una camioneta, las ventas de servicios de limpieza, los $500 que puso el dueño para empezar, la renta, el saldo de una tarjeta de crédito, una subvención recibida (para una organización sin fines de lucro) y una aspiradora nueva. Luego abre el plan de cuentas en la prueba de demostración y compara cómo la empresa de ejemplo clasifica cosas parecidas.",
          youCanNow: "clasificar los movimientos de dinero en cuentas de ingresos, gastos, activos, pasivos y patrimonio.",
          quickCheck: [
            { objective: "O2", q: "Un negocio debe $3,000 de un préstamo para una camioneta. ¿Qué tipo de cuenta es el préstamo?", options: ["Pasivo", "Ingreso", "Gasto", "Patrimonio"], answer: 0, why: "El dinero que el negocio debe es un pasivo." },
            { objective: "O2", q: "El dinero que los clientes todavía le deben al negocio se lleva en:", options: ["Cuentas por pagar", "Gasto de renta", "Cuentas por cobrar", "Patrimonio del dueño"], answer: 2, why: "Las cuentas por cobrar (A/R) son el dinero que deben los clientes." }
          ]
        },
        {
          title: "Facturas, recibos de venta y pagos de clientes",
          objectives: ["O3"],
          minutes: 6,
          goal: "Registrar una factura, un recibo de venta y el pago de un cliente en QuickBooks.",
          text: [
            "Usa una factura cuando el cliente va a pagar después. La factura indica el cliente, la fecha, los productos o servicios, el monto y la fecha de vencimiento. Usa un recibo de venta cuando el cliente paga en el momento de la venta, como en un food truck. Los dos registran ingresos; solo la factura crea dinero por cobrar (cuentas por cobrar).",
            "Cuando te pagan una factura, registra el pago contra esa factura. No crees una venta nueva, o el ingreso se contará dos veces. Así QuickBooks marca la factura como pagada. Si el cliente pagó en efectivo o con cheque, QuickBooks puede guardar el pago hasta que registres el depósito bancario, para que el depósito coincida con lo que muestra el banco.",
            "Da de alta a cada cliente una sola vez con su nombre y sus datos de contacto, y da de alta cada producto o servicio una sola vez con su precio y su cuenta de ingresos. Así cada factura usa las mismas cuentas.",
            "En QuickBooks Online, los formularios nuevos, como facturas, recibos de venta y pagos, se crean con el botón New (+) (Nuevo). En la prueba de demostración no se guarda nada, así que anota lo que ingresaste."
          ],
          steps: ["Elige el formulario: factura (paga después) o recibo de venta (ya pagó).", "Elige al cliente o agrega uno nuevo.", "Ingresa la fecha, el producto o servicio, el monto y la fecha de vencimiento.", "Guarda el formulario.", "Cuando el cliente pague una factura, registra el pago contra esa factura.", "Registra el depósito bancario si QuickBooks guarda el pago para depositarlo después.", "Revisa que la factura ahora aparezca como pagada."],
          words: [["Factura", "documento de cobro que envías a un cliente que va a pagar después."], ["Recibo de venta", "registro de una venta pagada en el momento de la venta."], ["Pago del cliente", "el registro de que un cliente pagó una factura."], ["Depósito", "dinero que entra al banco y que debe coincidir con el estado de cuenta."]],
          slides: [
            { title: "¿Factura o recibo de venta?", bullets: ["Factura: el cliente paga después", "Recibo de venta: se paga en el momento de la venta", "Solo la factura crea cuentas por cobrar"] },
            { title: "Registra el pago contra la factura", bullets: ["Nunca hagas una segunda venta por ese pago", "Si no, el ingreso se cuenta dos veces", "Así la factura aparece como pagada"] },
            { title: "Configura una vez, úsalo siempre", bullets: ["Clientes con sus datos de contacto", "Productos y servicios con precio y cuenta de ingresos"] },
            { title: "Los depósitos coinciden con el banco", bullets: ["El efectivo y los cheques pueden esperar a depositarse", "Registra el depósito para que coincida con el estado de cuenta"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Abre la prueba de demostración de QuickBooks Online (enlace en las fuentes; ábrela en una ventana privada del navegador). Crea una factura de $250 por servicios de jardinería a un cliente de ejemplo, con vencimiento a 30 días. Luego recibe un pago para esa factura y revisa que la factura aparezca como pagada. Anota en papel el cliente, la fecha, el monto y la cuenta de ingresos, porque la prueba de demostración no guarda. ¿No tienes computadora? Dibuja la factura y el pago en papel.",
          youCanNow: "registrar una factura, un recibo de venta y el pago de un cliente para que el ingreso se cuente una sola vez.",
          quickCheck: [
            { objective: "O3", q: "Un cliente de un food truck paga en la ventanilla. ¿Qué formulario usas?", options: ["Factura", "Factura de proveedor", "Orden de compra", "Recibo de venta"], answer: 3, why: "Un recibo de venta registra una venta pagada en el momento de la venta." },
            { objective: "O3", q: "Un cliente paga una factura de $250. ¿Qué registras?", options: ["Un recibo de venta nuevo por $250", "Un pago contra esa factura", "Una factura de proveedor por $250", "Nada; QuickBooks ya lo sabe"], answer: 1, why: "Registrar el pago contra la factura la cierra sin contar el ingreso dos veces." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 1: Configurar y registrar ventas",
        questions: [
          { objective: "O1", q: "¿Qué afirmación sobre este curso es verdadera?", options: ["Te prepara; el examen oficial otorga la credencial", "Otorga la credencial QuickBooks Certified User", "Te convierte en CPA", "Reemplaza a un preparador de impuestos"], answer: 0, why: "El curso te prepara; Certiport administra el examen que otorga la credencial." },
          { objective: "O2", q: "La renta que se paga por el local es ¿qué tipo de cuenta?", options: ["Activo", "Pasivo", "Gasto", "Ingreso"], answer: 2, why: "La renta es un costo de operar el negocio, así que es un gasto." },
          { objective: "O2", q: "El dueño pone $500 de su propio dinero en el negocio. Eso va a:", options: ["Ingresos por ventas", "Patrimonio", "Cuentas por pagar", "Gasto de materiales"], answer: 1, why: "El dinero que pone el dueño es parte de su patrimonio, no un ingreso." },
          { objective: "O3", q: "Un cliente de limpieza va a pagar en 30 días. ¿Qué formulario creas?", options: ["Un recibo de venta", "Una factura de proveedor", "Un depósito", "Una factura"], answer: 3, why: "Una factura es para un cliente que paga después." },
          { objective: "O3", q: "Un tenedor de libros hizo una venta nueva por el pago de un cliente en vez de registrar el pago contra la factura. ¿Qué sale mal?", options: ["El ingreso se cuenta dos veces y la factura queda abierta", "No sale nada mal", "Baja el saldo del banco", "Se le cobra un cargo al cliente"], answer: 0, why: "La factura y la venta nueva cuentan como ingreso, y la factura sigue apareciendo sin pagar." }
        ]
      }
    },
    {
      name: "Capítulo 2: Facturas de proveedores, el banco y el cierre de mes",
      lessons: [
        {
          title: "Facturas de proveedores, gastos y proveedores",
          objectives: ["O4"],
          minutes: 6,
          goal: "Registrar una factura de proveedor, un gasto y el pago de una factura con el proveedor y la cuenta correctos.",
          text: [
            "Un proveedor es cualquiera a quien el negocio le compra: la tienda de materiales, el dueño del local, la compañía de teléfono. Da de alta a cada proveedor una sola vez.",
            "Usa una factura de proveedor (bill) cuando el negocio va a pagar después, como una factura de un proveedor con vencimiento a 30 días. La factura de proveedor va a cuentas por pagar. Cuando la pagues, registra un pago de factura contra esa factura para que no se cuente dos veces. Usa un gasto (expense) cuando el negocio paga de inmediato, como una compra con tarjeta en la ferretería.",
            "Elige la cuenta de gastos que corresponde a lo que se compró: Materiales, Combustible, Renta, Teléfono. Adjunta en QuickBooks una foto del recibo, o escribe el número del recibo en la nota (memo). Los recibos respaldan cada gasto si alguien pregunta después.",
            "Si el negocio les paga a contratistas, pídele a cada uno el Formulario W-9 (un formulario del IRS) antes de pagarle y márcalos como contratistas, porque algunos negocios tienen que presentar declaraciones informativas sobre ellos. Las reglas y los montos cambian, así que revisa irs.gov o consulta a un profesional de impuestos."
          ],
          steps: ["Elige al proveedor o agrega uno nuevo.", "Elige factura de proveedor (paga después) o gasto (ya pagó).", "Ingresa la fecha, el monto y la cuenta de gastos que corresponde.", "Adjunta el recibo o anota su número.", "Cuando pagues una factura de proveedor, registra un pago de factura contra esa factura.", "Revisa que la factura ahora aparezca como pagada."],
          words: [["Proveedor", "persona o empresa a la que el negocio le compra."], ["Factura de proveedor", "registro de algo que el negocio va a pagar después."], ["Gasto", "registro de algo que el negocio pagó de inmediato."], ["Pago de factura", "el registro de que se pagó una factura de proveedor."], ["Formulario W-9", "formulario del IRS que llena un contratista con su nombre y su número de identificación fiscal para los registros del negocio."]],
          slides: [
            { title: "¿Factura de proveedor o gasto?", bullets: ["Factura de proveedor: se paga después, va a cuentas por pagar", "Gasto: se paga de inmediato", "Paga una factura con un pago de factura, no con un gasto nuevo"] },
            { title: "Elige la cuenta correcta", bullets: ["Materiales, Combustible, Renta, Teléfono", "Siempre la misma cuenta"] },
            { title: "Comprobante de cada gasto", bullets: ["Adjunta una foto del recibo", "O escribe el número del recibo en la nota"] },
            { title: "Pagos a contratistas", bullets: ["Pide el Formulario W-9 antes de pagar", "Márcalos como contratistas", "Revisa en irs.gov las reglas actuales de declaración"] }
          ],
          sources: [{ name: "IRS: Acerca del Formulario W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "En la prueba de demostración o en papel, registra tres movimientos: una factura de materiales de $120 con vencimiento a 30 días, una compra de combustible de $45 pagada hoy con tarjeta y el pago de la factura de $120 dos semanas después. Para cada uno, anota el proveedor, el formulario que usaste, la cuenta y el monto. Luego explica en una oración por qué el pago de la factura no es un gasto nuevo.",
          youCanNow: "registrar facturas de proveedores, gastos y pagos de facturas con el proveedor, la cuenta y el recibo correctos.",
          quickCheck: [
            { objective: "O4", q: "Un proveedor envía una factura con vencimiento a 30 días. ¿Qué registras hoy?", options: ["Un gasto", "Una factura de proveedor", "Una factura de venta", "Un recibo de venta"], answer: 1, why: "Una factura de proveedor registra algo que el negocio va a pagar después." },
            { objective: "O4", q: "Pagas esa factura dos semanas después. ¿Qué registras?", options: ["Un gasto nuevo por el mismo monto", "Un depósito", "Un pago de factura contra esa factura", "Nada"], answer: 2, why: "Un pago de factura cierra la factura sin contar el costo dos veces." }
          ]
        },
        {
          title: "El feed bancario y la conciliación bancaria",
          objectives: ["O5"],
          minutes: 6,
          goal: "Cotejar las líneas del feed bancario con los asientos y conciliar la cuenta bancaria hasta una diferencia de cero.",
          text: [
            "QuickBooks se puede conectar al banco del negocio y descargar sus movimientos. Eso es el feed bancario. Cada línea descargada espera a que la revises. Si ya la registraste, cotéjala con ese asiento. Si no, agrégala con el beneficiario y la cuenta correctos. Nunca agregues una línea que ya está registrada, o se contará dos veces. El dueño del negocio conecta el banco; un tenedor de libros nunca le pide al dueño su contraseña del banco.",
            "Una conciliación bancaria demuestra que QuickBooks coincide con el estado de cuenta del banco. Una vez al mes, toma el estado de cuenta, ingresa su saldo final y su fecha, y marca en QuickBooks cada depósito y cada pago que aparece en el estado de cuenta. Cuando la diferencia sea cero, termina la conciliación.",
            "Si la diferencia no es cero, busca las causas comunes: una comisión bancaria o intereses sin registrar, un asiento con el monto equivocado, un duplicado o un asiento en el mes equivocado. Los cheques que todavía no se han cobrado se quedan sin marcar; se cobrarán el mes siguiente.",
            "Nunca fuerces una conciliación a cero inventando un asiento. Si no encuentras el problema, escribe una nota y pregúntale al dueño o a un contador."
          ],
          steps: ["Revisa cada línea nueva del feed bancario.", "Cotéjala con un asiento existente, o agrégala con el beneficiario y la cuenta correctos.", "Consigue el estado de cuenta del mes.", "Empieza una conciliación e ingresa la fecha y el saldo final del estado de cuenta.", "Marca cada asiento que aparece en el estado de cuenta.", "Encuentra y corrige lo que impide que la diferencia sea cero.", "Termina cuando la diferencia sea cero, o escribe una nota y pide ayuda."],
          words: [["Feed bancario", "movimientos del banco que QuickBooks descarga para que los revises."], ["Cotejar", "vincular una línea bancaria descargada con un asiento que ya está en QuickBooks."], ["Conciliar", "revisar, línea por línea, que tus registros coincidan con el estado de cuenta del banco."], ["Diferencia", "la brecha entre QuickBooks y el estado de cuenta durante una conciliación; debe ser cero."], ["Cheque sin cobrar", "un cheque que emitiste y que el banco todavía no ha pagado."]],
          slides: [
            { title: "Revisa el feed bancario", bullets: ["¿Ya está registrada? Cotéjala", "¿No está registrada? Agrégala con la cuenta correcta", "Nunca agregues una línea dos veces"] },
            { title: "Concilia una vez al mes", bullets: ["Ingresa la fecha y el saldo final del estado de cuenta", "Marca cada línea del estado de cuenta", "Termina con una diferencia de cero"] },
            { title: "Cuando no cuadra", bullets: ["Falta una comisión o intereses", "Monto equivocado, duplicado o mes equivocado", "Los cheques sin cobrar esperan al mes siguiente"] },
            { title: "Sé honesto y cuida la seguridad", bullets: ["Nunca la fuerces con un asiento inventado", "Escribe una nota y pide ayuda", "Nunca pidas la contraseña del banco del dueño"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Haz en papel un estado de cuenta de práctica: saldo inicial $1,000; depósitos de $250 y $400; pagos de $120, $45 y $60; una comisión bancaria de $5; saldo final $1,420. Tu registro en los libros tiene todas las líneas menos la comisión bancaria, y además un cheque de $75 que no se ha cobrado. Marca las líneas que coinciden, encuentra lo que impide que la diferencia sea cero y escribe lo que registrarías. En la prueba de demostración, abre la página de banca y mira cómo las líneas descargadas esperan a ser cotejadas o agregadas.",
          youCanNow: "cotejar el feed bancario y conciliar una cuenta bancaria hasta una diferencia de cero, o anotar lo que todavía no cuadra.",
          quickCheck: [
            { objective: "O5", q: "Una línea del feed bancario es un pago que ya registraste como pago de factura. ¿Qué haces?", options: ["Cotejarla con ese pago de factura", "Agregarla como un gasto nuevo", "Borrar la factura", "Ignorarla para siempre"], answer: 0, why: "Cotejar vincula la línea del banco con tu asiento sin contarla dos veces." },
            { objective: "O5", q: "Tu conciliación tiene una diferencia de $5, y el estado de cuenta muestra una comisión bancaria de $5. ¿Cuál es el mejor paso?", options: ["Inventar un asiento por cualquier monto", "Saltarte la conciliación este mes", "Cambiar el saldo del estado de cuenta", "Registrar la comisión bancaria de $5 como gasto"], answer: 3, why: "Una comisión bancaria sin registrar es una causa común; registrarla corrige la diferencia de forma honesta." }
          ]
        },
        {
          title: "Los informes y el cierre de mes",
          objectives: ["O6"],
          minutes: 6,
          goal: "Sacar y explicar el estado de resultados, el balance general y el informe de facturas abiertas.",
          text: [
            "El estado de resultados (P&L, por sus siglas en inglés) muestra los ingresos menos los gastos de un periodo, como un mes. Si los ingresos son mayores, el negocio tuvo ganancia; si los gastos son mayores, tuvo pérdida. El balance general muestra, en una fecha, lo que el negocio tiene (activos), lo que debe (pasivos) y la parte del dueño (patrimonio).",
            "El informe de antigüedad de cuentas por cobrar muestra qué clientes todavía deben dinero y cuánto atraso tienen. El informe de antigüedad de cuentas por pagar muestra qué facturas de proveedores todavía debe el negocio. Estos dos informes le dicen al dueño a quién llamar y qué pagar después.",
            "El cierre de mes es la lista de pasos que un tenedor de libros sigue cada mes: todas las ventas, los pagos, las facturas de proveedores y los gastos registrados; el feed bancario revisado; cada cuenta bancaria y de tarjeta de crédito conciliada; los recibos adjuntos; los informes sacados y enviados al dueño con una nota corta. Las organizaciones sin fines de lucro también pueden sacar informes por programa o por subvención.",
            "Saca los informes desde el área de Reports (Informes); busca el informe por su nombre. Un informe solo es tan bueno como los asientos que tiene detrás, así que concilia primero."
          ],
          steps: ["Termina de registrar las ventas, los pagos, las facturas de proveedores y los gastos del mes.", "Revisa el feed bancario y concilia cada cuenta bancaria y de tarjeta.", "Saca el estado de resultados del mes.", "Saca el balance general al último día del mes.", "Saca el informe de antigüedad de cuentas por cobrar.", "Escríbele al dueño una nota corta: ganancia o pérdida, quién debe dinero y qué facturas vencen pronto."],
          words: [["Estado de resultados (P&L)", "informe de los ingresos menos los gastos de un periodo; también se llama estado de pérdidas y ganancias."], ["Balance general", "informe de los activos, los pasivos y el patrimonio en una fecha."], ["Informe de antigüedad", "informe del dinero adeudado, ordenado por cuántos días de atraso tiene."], ["Cierre de mes", "la lista de pasos que termina los libros de un mes."]],
          slides: [
            { title: "Estado de resultados", bullets: ["Ingresos menos gastos de un periodo", "Ganancia o pérdida del mes"] },
            { title: "Balance general", bullets: ["En una fecha", "Activos, pasivos y patrimonio"] },
            { title: "Quién debe qué", bullets: ["Antigüedad de cuentas por cobrar: clientes que le deben al negocio", "Antigüedad de cuentas por pagar: facturas que debe el negocio"] },
            { title: "Lista de cierre de mes", bullets: ["Todo registrado, feed bancario revisado", "Cada cuenta bancaria y de tarjeta conciliada", "Informes sacados, nota corta al dueño"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "En la prueba de demostración, saca el estado de resultados del mes pasado y el informe de antigüedad de cuentas por cobrar. Escribe tres oraciones para el dueño: el total de ingresos y el total de gastos del mes, si hubo ganancia o pérdida, y qué cliente debe más. ¿No tienes computadora? Usa tu trabajo de las lecciones anteriores y escribe la misma nota en papel.",
          youCanNow: "sacar los informes principales, explicárselos a un dueño y cerrar un mes.",
          quickCheck: [
            { objective: "O6", q: "¿Qué informe muestra si el negocio ganó dinero el mes pasado?", options: ["El balance general", "El estado de resultados", "La lista de proveedores", "El plan de cuentas"], answer: 1, why: "El estado de resultados muestra los ingresos menos los gastos de un periodo." },
            { objective: "O6", q: "El dueño pregunta qué clientes están atrasados en sus pagos. ¿Qué informe sacas?", options: ["Antigüedad de cuentas por pagar", "Estado de resultados", "Antigüedad de cuentas por cobrar", "Balance general"], answer: 2, why: "El informe de antigüedad de cuentas por cobrar enumera a los clientes que deben dinero y cuánto atraso tienen." }
          ]
        }
      ],
      check: {
        title: "Comprobación de conocimientos 2: Facturas de proveedores, el banco y el cierre de mes",
        questions: [
          { objective: "O4", q: "Hoy pagaste $45 de combustible con la tarjeta del negocio. ¿Qué formulario corresponde?", options: ["Una factura de proveedor", "Una factura de venta", "Un gasto", "Un recibo de venta"], answer: 2, why: "Un gasto registra algo que se pagó de inmediato." },
          { objective: "O4", q: "Antes de pagarle a un contratista nuevo, un tenedor de libros cuidadoso:", options: ["Pide el Formulario W-9 y revisa en irs.gov las reglas de declaración", "Le paga en efectivo sin dejar registro", "Registra el pago como ingreso", "Le pide al contratista su contraseña del banco"], answer: 0, why: "El W-9 le da al negocio los datos del contratista para sus registros y declaraciones." },
          { objective: "O5", q: "Una conciliación no llega a cero y no encuentras por qué. ¿Qué haces?", options: ["Agregar un asiento inventado para forzarla", "Borrar asientos viejos", "Cambiar el saldo del estado de cuenta", "Escribir una nota y preguntarle al dueño o a un contador"], answer: 3, why: "Forzarla esconde el problema real; una nota y una pregunta mantienen honestos los libros." },
          { objective: "O5", q: "Un cheque de $75 que emitiste no aparece en el estado de cuenta de este mes. En la conciliación:", options: ["Borras el cheque", "Lo dejas sin marcar; debería cobrarse más adelante", "Lo registras otra vez", "Lo marcas como ingreso"], answer: 1, why: "Un cheque sin cobrar se queda sin marcar hasta que aparezca en un estado de cuenta." },
          { objective: "O6", q: "El balance general muestra:", options: ["Los activos, los pasivos y el patrimonio en una fecha", "Solo las ventas del mes pasado", "El teléfono de cada cliente", "Las líneas del feed bancario"], answer: 0, why: "El balance general es una foto de los activos, los pasivos y el patrimonio en una fecha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Examen final: Teneduría de libros con QuickBooks",
    questions: [
      { objective: "O1", q: "¿Cuál es una tarea principal de un tenedor de libros de QuickBooks?", options: ["Dar asesoría legal", "Registrar facturas de venta, facturas de proveedores y movimientos del banco", "Firmar auditorías como CPA", "Elegir inversiones para el dueño"], answer: 1, why: "Registrar con exactitud las ventas, las facturas de proveedores y los movimientos del banco es el centro del trabajo." },
      { objective: "O1", q: "¿Dónde debes revisar los detalles y costos actuales del examen QuickBooks Certified User?", options: ["En una publicación de redes sociales", "En las notas viejas de un amigo", "En cualquier foro en internet", "En la página oficial de Certiport para las certificaciones de Intuit"], answer: 3, why: "Los costos y los detalles del examen cambian, así que la página oficial es donde hay que revisar." },
      { objective: "O1", q: "Un cliente te pregunta cómo pagar menos impuestos. Como tenedor de libros, tú:", options: ["Lo envías a un profesional de impuestos o a irs.gov", "Adivinas una respuesta", "Cambias sus números", "Le dices que los impuestos son opcionales"], answer: 0, why: "Un tenedor de libros lleva los registros; la asesoría fiscal viene de un profesional de impuestos o del IRS." },
      { objective: "O2", q: "Una aspiradora nueva que es propiedad del negocio de limpieza es ¿qué tipo de cuenta?", options: ["Ingreso", "Gasto", "Activo", "Pasivo"], answer: 2, why: "El equipo que tiene el negocio es un activo." },
      { objective: "O2", q: "El saldo de la tarjeta de crédito del negocio es:", options: ["Un pasivo", "Un activo", "Un ingreso", "Patrimonio"], answer: 0, why: "El dinero que el negocio debe en una tarjeta es un pasivo." },
      { objective: "O2", q: "¿Qué significa contabilidad por partida doble?", options: ["Escribes cada asiento dos veces", "Dos personas deben aprobar cada asiento", "Solo se registran los ingresos", "Cada asiento cambia por lo menos dos cuentas"], answer: 3, why: "Cada asiento tiene dos lados, y eso mantiene los libros en equilibrio." },
      { objective: "O3", q: "¿Cuándo usa una factura un tenedor de libros?", options: ["Cuando el cliente pagó en el momento de la venta", "Cuando el cliente va a pagar después", "Cuando el negocio compra materiales", "Cuando el banco cobra una comisión"], answer: 1, why: "Una factura es para un cliente que paga después." },
      { objective: "O3", q: "Enviar una factura de $200 sube los ingresos y:", options: ["Las cuentas por pagar", "El saldo del banco", "Las cuentas por cobrar", "El gasto de renta"], answer: 2, why: "Una factura crea dinero que el cliente debe: cuentas por cobrar." },
      { objective: "O3", q: "Un cliente paga con cheque una factura abierta. ¿Qué registras?", options: ["Un pago contra esa factura y luego el depósito bancario", "Un recibo de venta nuevo", "Una factura de proveedor", "Una factura nueva"], answer: 0, why: "Registrar el pago contra la factura la cierra, y el depósito coincide con el banco." },
      { objective: "O4", q: "¿Quién es un proveedor?", options: ["Un cliente que debe dinero", "El dueño del negocio", "Una línea del feed bancario", "Una empresa a la que le compras, como una tienda de materiales"], answer: 3, why: "Un proveedor es cualquiera a quien el negocio le compra." },
      { objective: "O4", q: "La factura de un proveedor vence en 30 días. Cuando se registra, va a:", options: ["Cuentas por cobrar", "Cuentas por pagar", "Ingresos por ventas", "Patrimonio del dueño"], answer: 1, why: "Las facturas sin pagar son dinero que el negocio debe: cuentas por pagar." },
      { objective: "O4", q: "¿Qué respalda cada gasto si alguien pregunta después?", options: ["Un cálculo aproximado del monto", "El teléfono del proveedor", "Un recibo adjunto o su número anotado", "La memoria del dueño"], answer: 2, why: "Los recibos son la prueba que respalda cada gasto." },
      { objective: "O5", q: "¿Qué es el feed bancario?", options: ["Movimientos del banco que QuickBooks descarga para que los revises", "Una comisión que cobra el banco", "Una lista de clientes", "La contraseña del banco del dueño"], answer: 0, why: "El feed bancario trae las líneas del banco para cotejarlas o agregarlas." },
      { objective: "O5", q: "Una conciliación está terminada cuando:", options: ["Marcaste la mitad de las líneas", "El dueño está contento", "Se acabó el mes", "La diferencia es cero"], answer: 3, why: "Una diferencia de cero demuestra que QuickBooks coincide con el estado de cuenta." },
      { objective: "O5", q: "Una línea bancaria descargada ya está registrada en QuickBooks. Agregarla otra vez:", options: ["Arreglaría la conciliación", "La contaría dos veces", "Cerraría el mes", "Le pagaría al proveedor"], answer: 1, why: "Agregar otra vez una línea ya registrada crea un duplicado; mejor cotéjala." },
      { objective: "O6", q: "Los ingresos fueron $4,000 y los gastos $3,100 en el mes. El estado de resultados muestra:", options: ["Una pérdida de $900", "Una ganancia de $7,100", "Una ganancia de $900", "Ningún cambio"], answer: 2, why: "Ingresos menos gastos: $4,000 menos $3,100 es una ganancia de $900." },
      { objective: "O6", q: "Antes de sacar los informes de cierre de mes, un tenedor de libros debe primero:", options: ["Conciliar cada cuenta bancaria y de tarjeta", "Borrar facturas viejas", "Enviar los informes sin revisarlos", "Cambiar el plan de cuentas"], answer: 0, why: "Los informes solo son tan buenos como los asientos que tienen detrás, así que primero se concilia." },
      { objective: "O6", q: "¿Qué informe muestra qué facturas de proveedores todavía debe el negocio?", options: ["Estado de resultados", "Antigüedad de cuentas por cobrar", "Plan de cuentas", "Antigüedad de cuentas por pagar"], answer: 3, why: "El informe de antigüedad de cuentas por pagar enumera las facturas sin pagar y cuánto tiempo llevan abiertas." },
      { objective: "O2", q: "¿Por qué un tenedor de libros debe usar siempre la misma cuenta para el mismo tipo de costo?", options: ["QuickBooks cobra por cuentas nuevas", "Para que los informes se puedan comparar bien de un mes a otro", "Porque las cuentas no se pueden renombrar", "Para que se detenga el feed bancario"], answer: 1, why: "Usar las cuentas de forma constante hace que los informes sean exactos y comparables." },
      { objective: "O5", q: "Un cliente te ofrece su contraseña de banca en línea para que conectes el feed bancario. ¿Qué haces?", options: ["La aceptas y la guardas en una nota", "Te la envías por mensaje de texto", "Te niegas; el dueño conecta el banco o te da tu propio acceso de usuario", "La publicas en la carpeta compartida"], answer: 2, why: "Un tenedor de libros nunca acepta la contraseña del banco del dueño; el dueño conecta el banco o te agrega como usuario." }
    ]
  },
  // ---- ADDIE: Evaluación ----
  // prueba inicial: estas preguntas del examen, hechas antes de la Lección 1, para que el examen muestre cuánto avanzó cada estudiante
  pretest: { title: "Prueba inicial: ¿qué sabes ya?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Cumple o Supera en cada fila. Si una fila está en Todavía no, corrige esa parte y vuelve a intentarlo.",
    criteria: [
      { name: "Plan de cuentas", objective: "O2", notYet: "Menos de 12 cuentas, o varias están marcadas con el tipo equivocado.", meets: "Al menos 12 cuentas, cada una con el tipo correcto y con nombres claros.", exceeds: "Además explica por qué este negocio necesita cada cuenta, incluidas las cuentas propias de una organización sin fines de lucro o del sector." },
      { name: "Ventas y pagos", objective: "O3", notYet: "Un pago se registró como una venta nueva, o a una factura le falta el cliente, la fecha o el monto.", meets: "Al menos 3 facturas y 2 pagos, cada uno con cliente, fecha, monto y cuenta de ingresos; las facturas pagadas aparecen como pagadas.", exceeds: "Además registra el depósito bancario de cada pago y anota qué facturas siguen abiertas." },
      { name: "Facturas de proveedores y gastos", objective: "O4", notYet: "Una factura de proveedor se pagó con un gasto nuevo, o hay asientos sin cuenta o sin recibo.", meets: "Al menos 4 facturas de proveedores o gastos con proveedor, fecha, monto, cuenta y recibo anotado.", exceeds: "Además muestra un pago de factura y un contratista dado de alta con una nota del W-9." },
      { name: "Conciliación bancaria", objective: "O5", notYet: "No hay conciliación, o se forzó a cero con un asiento inventado.", meets: "La conciliación termina con una diferencia de cero, o tiene una nota honesta de lo que todavía no cuadra.", exceeds: "Además enumera la causa de cada diferencia (comisión, error de escritura, duplicado, cheque sin cobrar) y cómo se corrigió." },
      { name: "Resumen de informes", objective: "O6", notYet: "Al resumen le falta la ganancia o pérdida, o los números no coinciden con los asientos.", meets: "Indica el total de ingresos, el total de gastos y la ganancia o pérdida, y quién todavía debe dinero.", exceeds: "Además nombra las facturas que vencen pronto y una acción concreta que el dueño podría tomar." },
      { name: "Plan de credencial", objective: "O1", notYet: "No nombra ninguna credencial, o no tiene fechas.", meets: "Nombra una credencial de Intuit, la página oficial que hay que revisar y fechas para revisarla y para los exámenes de práctica.", exceeds: "Además enumera tres empleadores o clientes a quienes contactar y una fecha para contactar a cada uno." }
    ]
  },
  evaluation: {
    results: [
      "Estudiantes que terminan el curso y aprueban la tarea final (rúbrica)",
      "Estudiantes que presentan un examen de certificación de Intuit en QuickBooks o en teneduría de libros en un plazo de 90 días (encuesta de seguimiento)",
      "Estudiantes que consiguen un trabajo de teneduría de libros, un puesto de oficina que usa QuickBooks o un cliente de teneduría de libros que les paga en un plazo de 6 meses",
      "Dueños de pequeños negocios y organizaciones sin fines de lucro del curso que concilian sus propios libros cada mes (seguimiento a los 30 días)"
    ]
  },
  // ---- ADDIE: Implementación ----
  implementation: {
    materials: [
      "Una computadora o tableta con navegador web para la prueba de demostración gratuita de QuickBooks Online (abierta en una ventana privada); la pantalla de un teléfono es demasiado pequeña para la mayoría de las prácticas",
      "Papel, pluma y calculadora para las notas de \"Pruébalo ahora\", porque la prueba de demostración no guarda",
      "Copias impresas del estado de cuenta de práctica y de la lista de transacciones para los grupos sin computadoras",
      "Unos 75 a 90 minutos en total, en sesiones cortas: lecciones, práctica, comprobaciones y la tarea final"
    ],
    facilitatorNotes: [
      "En un laboratorio o una clase: hagan juntos la prueba inicial y luego un capítulo por sesión, con la prueba de demostración abierta en cada pantalla.",
      "La prueba de demostración se reinicia y no guarda; recuérdales a los estudiantes que anoten cada asiento para la tarea final.",
      "Las pantallas y los nombres de los menús cambian; si un estudiante no encuentra algo, muéstrale el cuadro de búsqueda en vez de una ruta de menú fija.",
      "Nunca dejes que los estudiantes escriban accesos bancarios, números de cuenta ni datos de clientes reales en la práctica; usen la empresa de ejemplo o números inventados.",
      "Califica la tarea final con la rúbrica y da retroalimentación sobre una fila en Todavía no a la vez.",
      "Antes de que los estudiantes planeen una credencial, pídeles que abran ellos mismos las páginas oficiales de Certiport e Intuit Academy para revisar los costos y requisitos actuales."
    ]
  }
};

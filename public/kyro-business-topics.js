// Which questions are about starting or running a small business in the United States (minority-owned, startups, loans, grants, certification, taxes ...). The same words decide in two places:
//   * the server's checked guide (nexus/knowledge/us-small-business.js) picks the topic and gives the answer with its official sources;
//   * the page (public/app.js) uses it to answer a SPOKEN question of this kind through that guide, because the voice model sometimes answered such a question from memory, with no source (found by the live voice test).
// topic(text) -> a topic id or null (only a QUESTION or request for help; a record, reminder or draft is not taken).  isUsContext({ timeZone, text }) -> a US time zone, or the words name a US programme.
// isBusinessQuestion(text) -> the words are about a business at all, so a plain "how do I grow a garden" or "a permit for fishing" is left to the voice model.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroBusinessTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

// A question, or a request for help: "how do I", "what is", "where can I", "I need a loan", "tell me about", "help me get certified"
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|look up|search (?:the web |the internet |online )?for|find out|research|look into|google|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;
  
  const STRUCTURE_TERMS = [/\bllc\b/i, /\bs[- ]?corp/i, /\bc[- ]?corp/i, /\bnon-?profit/i, /\bfor[- ]profit/i, /\bsole proprietor/i, /\bpartnership/i];
  
  // first match wins, most specific first
  const MATCHERS = [
    // "Where is the nearest SBDC", "find a SCORE mentor near 30303", "business counselling in my area": the official finders, by ZIP code (this assistant cannot look up addresses)
    ["local-help", /(?=.*\b(?:near me|nearby|nearest|closest|near (?:us|my)|in my (?:area|city|town|county)|zip(?: code)?|\d{5}(?:-\d{4})?)\b)(?=.*\b(?:sbdc|small business development center|score (?:mentor|mentors|chapter)|women'?s business center|veterans? business outreach|business (?:counsel(?:ing|ling|or|ors)|help|center|mentor|mentors|advisor|advisors)|chamber of commerce|cdfi|community lender)\b)/i],
    ["mbda", /\b(mbda|minority business development agency)\b/i],
    ["8a", /\b8\s?\(\s?a\s?\)|\b8a\b/i],
    ["nmsdc", /\b(nmsdc|supplier diversity|minority supplier|minority business enterprise|\bmbe\b)\b/i],
    ["certification", /\b(certif(?:y|ied|ication|ications)|wosb|edwosb|hubzone|sdvosb|vosb|women[- ]owned small business|veteran[- ]owned small business|\bdbe\b)\b/i],
    // (before "contracting": "how do I get a DUNS number" is about the identifier, not about selling to the government)
    // (the Unique Entity ID, or a DUNS number asked about for the government; a plain "what is a DUNS number" stays with business credit below, which is what the SBA says a DUNS number is for)
    ["duns-uei", /\b(?:unique entity (?:id|identifier)|uei)\b|\bd-?u-?n-?s\b.{0,60}\b(?:sam|government|federal|contracts?|contracting|grants?|awards?)\b|\b(?:sam|government|federal|contracts?|contracting|grants?|awards?)\b.{0,60}\bd-?u-?n-?s\b/i],
    ["contracting", /\b(sam\.gov|sam registration|register(?:ing)? in sam|government contract(?:s|ing)?|federal contract(?:s|ing)?|sell(?:ing)? to the government|bid(?:ding)? on (?:government |federal )?contracts?)\b/i],
    // investors, crowdfunding and "how do I fund a startup" come before the plain loan answer; "an SBA loan" and "a business loan" still go to loans
    ["startup-funding", /\b(investors?|venture capital|vc funding|angel investors?|crowd-?funding|equity (?:funding|financing|investment)|raise (?:money|capital|funds)|raising (?:money|capital|funds)|funding options|ways to (?:fund|finance)|(?:fund|finance) (?:my|a|our) (?:start-?up|new business)|seed (?:funding|round|money)|(?:start-?up|early[- ]stage) (?:funding|capital|financing|investment)|looking for (?:funding|investment|investors|capital)|investment capital|sell(?:ing)? (?:shares|stock|equity))\b/i],
    ["loans", /\b(sba loans?|7\s?\(a\)|7a loans?|504 loans?|micro-?loans?|small business loans?|business loans?|loan for my business|lender match|cdfi|community development financial|line of credit|start-?up (?:loan|funding|capital)|(?:get|find|apply for|need|want)(?: me)? (?:a )?(?:loan|funding|financing|capital))\b/i],
    ["grants", /\bgrants?\b/i],
    ["estimated-tax", /\b(estimated tax(?:es)?|quarterly tax(?:es)?|1040-?es|self[- ]employment tax|pay (?:my )?taxes (?:on|for) my (?:business|income)|schedule c)\b/i],
    ["1099", /\b1099\b/i],
    ["licenses", /\b(business licen[cs]es?|permits?|licen[cs]e (?:to|for) (?:sell|operate|open|run)|do i need a licen[cs]e)\b/i],
    // the startup library. "What type of business should I have: LLC, S corp, C corp, for-profit, nonprofit?" gets the overview; one named structure gets its own answer. Specific questions about taxes, 1099s and licences above still win.
    ["business-structure", /\b(?:what|which) (?:type|kind|form|structure)s? of (?:business|company|entity)\b|\b(?:type|kind|form|structure) of (?:business|company|entity) (?:should|to|do|is)\b|\bbusiness (?:structures?|entit(?:y|ies))\b/i],
    // two structures compared: "LLC or S corp", "LLC vs corporation", "difference between an S corp and a C corp"
    ["llc-vs-corp", /\bllc\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b|\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\bllc\b|\bdifference between\b.{0,60}\b(?:llc|corporation|c[- ]?corp|s[- ]?corp)\b/i],
    ["s-corp", /\b(s[- ]?corp(?:oration)?s?|subchapter s|form 2553|2553)\b/i],
    ["for-profit-nonprofit", /\b(non-?profits?|501\s?\(?c\)?\s?\(?3\)?|for[- ]profit|tax[- ]exempt|benefit corporation|b[- ]corp)\b/i],
    ["llc-vs-corp", /\b(llc|limited liability compan(?:y|ies)|c[- ]?corp(?:oration)?s?|corporations?|incorporat(?:e|ing|ion)|articles of (?:organization|incorporation)|operating agreement)\b/i],
    ["business-structure", /\b(sole proprietor(?:ship)?|partnerships?|business structure)\b/i],
    ["business-plan", /\b(business plans?|lean (?:start-?up )?plan|executive summary|financial projections?)\b/i],
    ["name-trademark", /\b(business name|company name|trade ?marks?|dba|doing business as|assumed name|trade name|domain name|brand name|name (?:my|a|the|our) (?:business|company))\b/i],
    ["ein-registration", /\b(ein|employer identification number|register(?:ing)? (?:my|a|the|our) (?:business|company|llc|corporation)|registered agent|tax id(?: number)?s?|secretary of state)\b/i],
    // the rest of the SBA's startup steps. These come before "startup-steps" so that "how much does it cost to start a business" is about costs and "franchise" is not "growth".
    ["startup-costs", /\b(start-?up costs?|how much (?:does|will|do|would) it cost to (?:start|open|launch)|cost(?:s)? (?:of|to) (?:start|starting|open|opening|launch|launching)|break-?even|how much money (?:do i|will i) need to (?:start|open|launch))\b/i],
    ["business-credit", /\b(business credit|build(?:ing)? credit for my (?:business|company)|d-?u-?n-?s|dun (?:&|and) bradstreet|credit (?:score|report) for my (?:business|company))\b/i],
    ["buy-business-franchise", /\b(franchis(?:e|es|ing|or)|buy(?:ing)? (?:an? )?(?:existing )?(?:business|company)|purchas(?:e|ing) (?:an? )?(?:existing )?(?:business|company))\b/i],
    ["business-insurance", /\b(business insurance|insurance for my (?:business|company|shop|store|restaurant)|what insurance (?:does|do|should) (?:my|a|an) (?:small |new )?(?:business|company|shop|store|restaurant|startup|llc)|(?:general |product |professional )?liability insurance|workers'? comp\w*|business owner'?s policy|commercial (?:property )?insurance)\b/i],
    ["business-location", /\b(zoning|business location|location for my (?:business|company|shop|store)|where (?:should|do) i (?:open|locate|set up|put) (?:my|a) (?:business|shop|store)|pick(?:ing)? (?:a )?(?:business )?location|home-?based business|run(?:ning)? (?:a )?business (?:from|out of) (?:my )?home)\b/i],
    ["business-bank-account", /\b(business bank account|business checking|(?:open|opening) (?:a )?(?:business )?bank account|merchant services?|payment processors?|separate (?:my )?(?:business|personal) (?:and|from) (?:my )?(?:personal|business)|accept (?:credit |debit )?cards?)\b/i],
    ["hiring-employees", /\b(hir(?:e|ing) (?:my |our |a |an |the )?(?:first |new )?(?:employees?|workers?|staff)|first employee|payroll|w-?4|i-?9|independent contractors?|employee or (?:an )?(?:independent )?contractor|contractor or (?:an )?employee|become an employer|new hires?)\b/i],
    ["bookkeeping-accounting", /\b(bookkeep\w*|accountants?|accounting (?:software|method|system)|cash (?:vs\.?|versus|or) accrual|accrual|balance sheet|cpa|keep(?:ing)? (?:track of )?(?:my )?(?:books|records)|track(?:ing)? (?:my )?(?:income|expenses|revenue))\b/i],
    ["business-taxes", /\b(business taxes|taxes (?:for|on|does|do|should) (?:my|a|an) (?:small |new )?(?:business|llc|company)|what taxes|sales tax|tax year|fiscal year|state (?:income |employment )?taxes|pay(?:ing)? (?:my )?business taxes)\b/i],
    ["startup-steps", /\b((?:start|starting|launch|launching|open|opening) (?:a |my |our )?(?:new |own )?(?:small )?(?:business|company|start-?up)|steps to (?:start|launch)|start-?up checklist|i(?:'m| am) (?:starting )?(?:a )?start-?up|i(?:'m| am) a (?:new|first[- ]time) (?:business )?owner|first steps (?:for|in|of) (?:my|a) business)\b/i],
    ["growth-scaling", /\b(grow(?:ing|th)? (?:my|our|the|a) (?:small )?(?:business|company|revenue|sales)|growth (?:strategy|plan)|scal(?:e|ing|ability)|expand(?:ing)? (?:my|our|the) (?:business|company)|expansion|new (?:locations?|markets?)|exporting|franchis(?:e|ing)|roadmap|merg(?:e|ing)|acqui(?:re|ring|sition))\b/i],
    ["marketing-visibility", /\b(market(?:ing)? (?:my|our|the|a) (?:small |new )?(?:business|company|plan|strategy)|marketing (?:plan|strategy)|get (?:more )?customers|find (?:more |new )?customers|visibility|more visible|get noticed|be seen|stand out|branding)\b/i],
    ["free-help", /\b(free (?:business )?(?:help|counsel(?:ing|ling|or|ors)|mentor(?:ing|s)?|advice|training)|sbdc|small business development center|score (?:mentor|mentors|chapter|business mentoring)|score\.org|women'?s business center|veterans? business outreach|business mentor|business mentoring|where can i get help (?:with|for) (?:my |a )?business|help (?:with|for) my (?:small )?business)\b/i]
  ];
  
  // (walk: the words ask to be walked through a process, "walk me through the 8(a) program": that is a request too, though it opens with no question word)
  function topicEnglish(text, { walk = false } = {}) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !(walk || ASKS.test(value))) return null;
    // three or more kinds of business named at once ("LLC, S corp or C corp? for-profit or nonprofit?") is the question "what type of business should I be": the overview answers it
    if (STRUCTURE_TERMS.filter(pattern => pattern.test(value)).length >= 3) return "business-structure";
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }
  
  // ---- Spanish ----
  // A question asked in Spanish reaches the same topics. Matching is done on text with the accents taken off and in lower case ("préstamo" and "prestamo" are the same word to it), so a spoken question that the
  // speech-to-text wrote without accents works too. The order is the English order: most specific first.
  const fold = value => String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[¿¡]/g, " ").toLowerCase();
  // Markers of Spanish: a question mark or exclamation mark in Spanish form, an ñ or accent in a word, or at least two everyday Spanish words that English does not use.
  const SPANISH_WORDS = new Set(["como", "que", "cual", "cuales", "donde", "cuanto", "cuanta", "cuando", "quiero", "necesito", "puedo", "podria", "debo", "los", "las", "del", "para", "una", "un", "mi", "mis", "con", "por", "es", "en", "el", "la", "de", "y", "negocio", "empresa", "ayuda", "hola", "gracias"]);
  const STRONG_SPANISH = new Set(["como", "que", "cual", "cuales", "donde", "cuanto", "cuanta", "cuando", "quiero", "necesito", "puedo", "podria", "debo", "hola", "gracias"]);
  function language(text) {
    const raw = String(text || "");
    if (/[¿¡ñÑáéíóúÁÉÍÓÚ]/.test(raw)) return "es";
    const words = fold(raw).match(/[a-z]+/g) || [];
    const found = new Set(words.filter(word => SPANISH_WORDS.has(word)));
    // (one Spanish word is enough when it is a question word or a verb only Spanish uses, and the whole sentence is a question about a business that only the Spanish matchers understand, e.g. a speech-to-text line with
    // no accents. "los", "la", "en" alone are not: "Do I need an LLC in Los Angeles?" is English.)
    const strong = [...found].some(word => STRONG_SPANISH.has(word));
    return found.size >= 2 || (strong && topicSpanish(raw) !== null) ? "es" : "en";
  }
  const ASKS_ES = /(?:\?|^(?:por favor\s+|kyro,?\s+)?(?:como|que|cual|cuales|cuando|donde|adonde|por que|quien|quienes|cuanto|cuanta|cuantos|puedo|podria|podemos|debo|deberia|necesito|quiero|quisiera|me gustaria|hay|existe|existen|tengo que|se puede|me puedes|puedes|puede|ayudame|ayuda|dime|dame|explicame|cuentame|busco|buscar|encuentra|encuentrame|muestrame|informacion|es|son)\b)/;
  const RECORD_OR_DRAFT_ES = /^(?:por favor\s+)?(?:registra|anota|agrega|anade|guarda|recuerdame|crea|redacta|escribe|haz|borra|elimina|olvida|llama|envia|manda|reproduce|abre|empieza|traduce|exporta|convierte|vendi|compre)\b/;
  const MATCHERS_ES = [
    ["local-help", /(?=.*\b(?:cerca de mi|cercano|mas cercano|cerca|en mi (?:area|zona|ciudad|condado)|codigo postal|\d{5}(?:-\d{4})?)\b)(?=.*\b(?:sbdc|centro de desarrollo de (?:pequenas )?empresas|mentor(?:es)? de score|score|centro de negocios para mujeres|centro de apoyo empresarial para veteranos|asesor(?:es|ia)? (?:de )?negocios|camara de comercio|cdfi|prestamista comunitario)\b)/],
    ["mbda", /\b(mbda|agencia de desarrollo de (?:negocios|empresas) (?:de )?minorias)\b/],
    ["8a", /\b8\s?\(\s?a\s?\)|\b8a\b/],
    ["nmsdc", /\b(nmsdc|diversidad de proveedores|proveedores? minoritarios?|mbe)\b/],
    ["certification", /\b(certific\w+|wosb|edwosb|hubzone|sdvosb|vosb|dbe|pequena empresa de propiedad de mujeres|empresa de propiedad de (?:mujeres|veteranos)|negocio de propiedad de (?:mujeres|veteranos))\b/],
    ["duns-uei", /\b(?:identificador unico de entidad|uei)\b|\bd-?u-?n-?s\b.{0,60}\b(?:sam|gobierno|federal\w*|contratos?|subvenciones?|adjudicaci\w+)\b|\b(?:sam|gobierno|federal\w*|contratos?|subvenciones?|adjudicaci\w+)\b.{0,60}\bd-?u-?n-?s\b/],
    ["contracting", /\b(sam\.gov|registro en sam|contratos? (?:con )?(?:el )?gobierno|contratos? federales?|vender (?:al|le al) gobierno|venderle al gobierno|(?:le )?vendo al gobierno|licitar|licitacion(?:es)?)\b/],
    ["startup-funding", /\b(inversionistas?|inversores?|capital de riesgo|crowdfunding|financiamiento colectivo|financiacion colectiva|reunir (?:dinero|capital|fondos)|conseguir inversion|levantar capital|opciones de financiamiento|formas de financiar|(?:financiar|fondear) (?:mi|un|una|nuestro|nuestra) (?:negocio|empresa|startup|emprendimiento)|ronda de inversion|capital semilla|vender acciones|buscando financiamiento)\b/],
    ["loans", /\b(prestamos? (?:de la )?sba|prestamos? 7\s?\(a\)|prestamos? 504|microprestamos?|microcreditos?|prestamos? (?:para|de) (?:pequenos? )?(?:negocios?|empresas?)|prestamos? comerciales?|prestamo para mi (?:negocio|empresa)|linea de credito|(?:obtener|conseguir|solicitar|pedir|necesito|quiero)(?: un)? (?:prestamo|credito|financiamiento))\b/],
    ["grants", /\b(subvenci(?:on|ones)|grants?|fondos? (?:federales )?no reembolsables|becas? para (?:negocios|empresas))\b/],
    ["estimated-tax", /\b(impuestos? estimados?|impuestos? trimestrales|pagos? estimados?|1040-?es|impuesto (?:de )?trabajo (?:por cuenta propia|independiente)|autoempleo|schedule c|pagar (?:mis )?impuestos (?:de|por|sobre) (?:mi|mis) (?:negocio|ingresos?))\b/],
    ["1099", /\b1099\b/],
    ["licenses", /\b(licencias? (?:de )?(?:comerciales?|negocios?)|licencias? comerciales?|permisos? (?:de )?(?:comerciales?|negocios?)|permisos?|necesito (?:una )?licencia|licencia para (?:vender|operar|abrir))\b/],
    ["business-structure", /\b(?:que|cual) (?:tipo|clase|forma|estructura)s? de (?:negocio|empresa|entidad)\b|\b(?:tipo|clase|forma|estructura) de (?:negocio|empresa|entidad) (?:debo|deberia|elegir|escoger)\b|\bestructuras? (?:de )?(?:negocio|empresa)|\bentidades? comerciales?\b/],
    ["llc-vs-corp", /\bllc\b.{0,40}\b(?:o|vs\.?|versus|y|contra)\b.{0,40}\b(?:corporacion(?:es)?|s[- ]?corp\w*|c[- ]?corp\w*)\b|\b(?:corporacion(?:es)?|s[- ]?corp\w*|c[- ]?corp\w*)\b.{0,40}\b(?:o|vs\.?|versus|y|contra)\b.{0,40}\bllc\b|\bdiferencias? entre\b.{0,60}\b(?:llc|corporacion|c[- ]?corp|s[- ]?corp)\b/],
    ["s-corp", /\b(corporacion(?:es)? s|s[- ]?corp\w*|subchapter s|formulario 2553|2553)\b/],
    ["for-profit-nonprofit", /\b(sin fines de lucro|con fines de lucro|501\s?\(?c\)?\s?\(?3\)?|exenta? de impuestos|corporacion de beneficio|b[- ]corp)\b/],
    ["llc-vs-corp", /\b(llc|compania de responsabilidad limitada|corporacion(?:es)?|incorporar|constituir (?:mi|una|un) (?:empresa|negocio|llc|sociedad)|articulos de (?:organizacion|incorporacion)|acuerdo operativo)\b/],
    ["business-structure", /\b(propietario unico|empresa unipersonal|sociedad(?:es)?|estructura de negocio)\b/],
    ["business-plan", /\b(plan(?:es)? de negocios?|plan de empresa|plan lean|resumen ejecutivo|proyecciones financieras)\b/],
    ["name-trademark", /\b(nombre (?:de|del|para) (?:mi |el |un )?(?:negocio|empresa)|nombre comercial|marcas? registradas?|registrar (?:una )?marca|dba|haciendo negocios como|nombre de dominio|ponerle nombre a (?:mi|un) negocio|como (?:llamar|nombrar) (?:mi|un) negocio)\b/],
    ["ein-registration", /\b(ein|numero de identificacion (?:del )?empleador|(?:registrar|registro) (?:mi|un|una|el) (?:negocio|empresa|llc|corporacion)|registro (?:de )?(?:mi |un )?(?:negocio|empresa)|agente registrado|identificacion fiscal|numero de identificacion fiscal|secretari[oa] de estado)\b/],
    ["startup-costs", /\b(costos? de (?:arranque|inicio|puesta en marcha|apertura)|cuanto (?:cuesta|cuestan|me costaria|dinero necesito) (?:para )?(?:iniciar|empezar|abrir|montar|comenzar|lanzar)|punto de equilibrio|cuanto dinero (?:necesito|se necesita) para (?:iniciar|empezar|abrir))\b/],
    ["business-credit", /\b(credito comercial|credito (?:de|para) (?:mi )?(?:negocio|empresa)|construir credito (?:para|de) (?:mi )?(?:negocio|empresa)|d-?u-?n-?s|dun (?:&|y) bradstreet|puntaje de credito (?:de|para) (?:mi )?(?:negocio|empresa))\b/],
    ["buy-business-franchise", /\b(franquicias?|comprar (?:un )?(?:negocio|empresa)(?: existente)?|adquirir (?:un )?(?:negocio|empresa))\b/],
    ["business-insurance", /\b(seguro (?:comercial|de negocios?|para (?:mi )?(?:negocio|empresa|tienda|restaurante))|que seguro (?:necesita|necesito|debe tener|debo tener) (?:mi |un |una )?(?:pequeno )?(?:negocio|empresa)|seguro de responsabilidad|compensacion (?:para|de) trabajadores|poliza para duenos de negocios)\b/],
    ["business-location", /\b(zonificacion|ubicacion (?:de|para) (?:mi )?(?:negocio|empresa|tienda|local)|donde (?:debo|puedo|deberia) (?:abrir|poner|ubicar|instalar) (?:mi|un|una) (?:negocio|tienda|local|empresa)|elegir (?:una )?ubicacion|negocio (?:en|desde) (?:mi )?casa|negocio casero|local para (?:mi )?negocio)\b/],
    ["business-bank-account", /\b(cuenta bancaria (?:comercial|de negocios?|para (?:mi )?(?:negocio|empresa))|cuenta corriente comercial|abrir (?:una )?cuenta bancaria|servicios? para comercios?|procesadores? de pagos?|separar (?:mis )?(?:finanzas|gastos) (?:personales|del negocio)|aceptar (?:pagos con )?tarjetas?)\b/],
    ["hiring-employees", /\b(contratar (?:a )?(?:mi |un |una |el |al )?(?:primer |nuevo )?(?:empleados?|trabajadores?|personal)|primer empleado|nomina|w-?4|i-?9|contratistas? independientes?|empleado o (?:un )?contratista|convertirme en empleador|nuevos? empleados?)\b/],
    ["bookkeeping-accounting", /\b(contabilidad|teneduria de libros|tenedor(?:a)? de libros|contadores?|libros contables|programa de contabilidad|balance general|cpa|llevar (?:mis )?(?:libros|cuentas|registros)|registrar (?:mis )?(?:ingresos|gastos))\b/],
    ["business-taxes", /\b(impuestos? (?:de|para|del|sobre) (?:mi |un |una )?(?:pequeno )?(?:negocio|empresa|llc)|que impuestos|impuesto (?:sobre|a) las ventas|ano fiscal|impuestos estatales|pagar impuestos (?:de|del) (?:mi )?negocio)\b/],
    ["startup-steps", /\b((?:iniciar|inicio|empezar|empiezo|comenzar|comienzo|abrir|abro|lanzar|lanzo|montar|monto|crear) (?:un |mi |una |nuestro )?(?:nuevo |propio )?(?:pequeno )?(?:negocio|empresa|emprendimiento|startup)|pasos para (?:iniciar|empezar|abrir|lanzar)|soy (?:un )?(?:nuevo )?(?:dueno|emprendedor)|primeros pasos (?:para|de|en) (?:mi|un) negocio)\b/],
    ["growth-scaling", /\b(hacer crecer (?:mi |el |un )?(?:pequeno )?(?:negocio|empresa)|crecer (?:mi |el )?(?:negocio|empresa)|escalar|expandir(?:me)? (?:mi |el )?(?:negocio|empresa)|expansion|nuevas? (?:ubicaciones?|mercados?)|exportar|exportacion|fusion(?:ar)?|adquisicion)\b/],
    ["marketing-visibility", /\b(mercadeo|marketing|(?:conseguir|consigo|encontrar|encuentro|atraer|atraigo|busco) (?:mas |nuevos )?clientes|visibilidad|darme a conocer|dar a conocer (?:mi )?(?:negocio|empresa)|promocionar (?:mi )?(?:negocio|empresa)|publicidad)\b/],
    ["free-help", /\b(ayuda gratis|ayuda gratuita|asesoria gratuita|asesoria gratis|mentor(?:es|ia)? gratuit\w+|sbdc|centro de desarrollo de (?:pequenas )?empresas|score|centro de negocios para mujeres|centro de apoyo empresarial para veteranos|mentoria|donde (?:puedo )?(?:conseguir|encontrar|obtener) ayuda (?:con|para) (?:mi )?(?:negocio|empresa)|ayuda (?:con|para) mi (?:pequeno )?(?:negocio|empresa))\b/]
  ];
  function topicSpanish(text) {
    const value = fold(String(text || "").replace(/\s+/g, " ").trim());
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT_ES.test(value) || !(ASKS_ES.test(value) || /\?/.test(String(text || "")))) return null;
    for (const [topic, pattern] of MATCHERS_ES) if (pattern.test(value)) return topic;
    return null;
  }
  // A topic id for a question in English or in Spanish.
  function usSmallBusinessTopic(text) { return topicEnglish(text) || (language(text) === "es" ? topicSpanish(text) : null); }

  const BUSINESS_WORDS_ES = /\b(?:negocios?|empresas?|emprend\w*|startup|llc|sba|prestamos?|subvenci\w+|licencias?|permisos?|impuestos?|contad\w+|contabilidad|nomina|empleados?|inversionistas?|franquicias?|certific\w+|minorias|veteranos?|clientes?|vender|tienda|restaurante|gobierno|credito|seguro|marcas?|mentor\w*|asesor\w*|sociedad\w*|corporacion\w*|mercadeo|marketing|exportar|zonificacion|bancari\w*|comercial\w*|banco)\b/;

  // When is this United States guide the right one? A person's time zone is the best signal the page and the phone line give; the words of the question can also say so ("SBA", "IRS", "8(a)", "NMSDC", "SBDC",
  // "SAM.gov", "United States"). Without either, the question is left to the general guardrail, which names no country-specific agency.
  const US_TIME_ZONES = /^(?:America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|North_Dakota\/.+|Indiana\/.+|Kentucky\/.+)|Pacific\/Honolulu|US\/.+)$/;
  const US_WORDS = /\b(?:sba|irs|ftc|nist|cisa|mbda|nmsdc|sbdc|8a|hubzone|wosb|sdvosb|sam\.gov|cdfi|grants\.gov|1099|1040|schedule c|united states|usa|llc|s[- ]?corp|c[- ]?corp|ein|uspto|secretary of state|form 2553)\b|\b8\s?\(\s?a\s?\)|\b501\s?\(\s?c\s?\)|\bu\.s\./i;
  function isUsContext({ timeZone = "", text = "" } = {}) {
    return US_TIME_ZONES.test(String(timeZone || "")) || US_WORDS.test(String(text || ""));
  }

  const BUSINESS_WORDS = /\b8\s?\(\s?a\s?\)|\b(?:duns|uei|unique entity|bookkeep\w*|accountants?|accounting|business(?:es)?|compan(?:y|ies)|start-?ups?|llc|s[- ]?corp|c[- ]?corp|non-?profits?|self[- ]employed|entrepreneur\w*|sba|sbdc|score|mbda|nmsdc|8a|mbe|wosb|edwosb|hubzone|sdvosb|vosb|sam\.gov|ein|1099|investors?|franchis\w*|payroll|employees?|customers|contractors?|catering|restaurant|shop|store|sell(?:ing)?|cdfi|grants?|loans?)\b/i;
  function isBusinessQuestion(text) { return BUSINESS_WORDS.test(String(text || "")) || BUSINESS_WORDS_ES.test(fold(text)); }

  // ---- California (public/kyro-business-topics.js is shared with the page; the answers are in nexus/knowledge/california-business.js) ----
  // A question that names California, a California office (Cal eProcure, CDTFA, CalOSBA, Caltrans, CUCP) or the 2028 Games: first match wins, most specific first. Beyond the formation of an entity (state-entities.js answers that).
  const CA_CUE = /\b(?:california|calif\.?|cal ?eprocure|caleprocure|cdtfa|calosba|caltrans|cucp|la ?28|2028 (?:olympic|paralympic|games)|olympics?|ramp ?la|rampla)\b/i;
  const CA_MATCHERS = [
    ["ca-la28", /\b(?:la ?28|2028 (?:olympic|paralympic|games)|olympics?|ramp ?la|rampla)\b/i],
    ["ca-seller-permit", /\b(?:seller'?s? permit|resale (?:permit|certificate)|sales tax permit|cdtfa)\b/i],
    ["ca-dbe", /\b(?:dbe|disadvantaged business enterprise|cucp|caltrans)\b/i],
    ["ca-nonprofit-state", /(?=.*\b(?:non-?profit|charit\w*|501\s?\(?c\)?\s?\(?3\)?)\b)(?=.*\b(?:attorney general|registry|tax[- ]exempt|exemption|exempt status|ftb|franchise tax|3500a?|ct-?1|solicit\w*|fundrais\w*|suspended)\b)/i],
    ["ca-state-vendor", /\bcal ?eprocure\b|\bcaleprocure\b|(?=.*\b(?:vendor|supplier|contract\w*|bid\w*|sell(?:ing)?)\b)(?=.*\b(?:state of california|california state|state agenc\w*|state government|california government|state contracts?)\b)/i],
    // forming a business in California: asked only as a walkthrough (a plain "how do I register an LLC in California" is answered by the state formation guide, state-entities.js, with the state's fees)
    ["ca-nonprofit-form", /(?=.*\b(?:non-?profit|charit\w*|501\s?\(?c\)?\s?\(?3\)?)\b)(?=.*\b(?:form\w*|start\w*|incorporat\w*|set(?:ting)? up|creat\w*|register\w*|establish\w*|open\w*|launch\w*)\b)/i],
    ["ca-llc", /^(?=.*\b(?:llc|limited liability compan\w+)\b)(?!.*\bcertif)/i],
    ["ca-certification", /\b(?:certif\w+|micro-?business|dgs|osds)\b/i],
    ["ca-grants", /\b(?:grants?|micro-?grants?|dream fund|funding)\b/i],
    ["ca-free-help", /(?=.*\b(?:free|no[- ]cost|low[- ]cost)\b)(?=.*\b(?:help|advice|counsel\w*|consult\w*|mentor\w*|training|assistance|support|classes|workshops?)\b)|\b(?:calosba|technical assistance centers?|sbdc|small business development centers?)\b/i]
  ];
  // The same California topics asked in Spanish (accents taken off before matching, as the Spanish matchers above do).
  const CA_CUE_ES = /\b(?:california|calif|cal ?eprocure|caleprocure|cdtfa|calosba|caltrans|cucp|la ?28|juegos olimpicos|olimpiadas?|ramp ?la|rampla)\b/;
  const CA_MATCHERS_ES = [
    ["ca-la28", /\b(?:la ?28|juegos olimpicos|olimpiadas?|ramp ?la|rampla)\b/],
    ["ca-seller-permit", /\b(?:permiso de (?:vendedor|ventas|reventa)|seller'?s? permit|cdtfa)\b/],
    ["ca-dbe", /\b(?:dbe|empresa en desventaja|cucp|caltrans)\b/],
    ["ca-nonprofit-state", /(?=.*\b(?:sin fines de lucro|organizacion(?:es)? benefica|caridad|501\s?\(?c\)?\s?\(?3\)?)\b)(?=.*\b(?:procurador|procuraduria|attorney general|registro|exencion|exenta|exento|ftb|junta de impuestos|3500a?|ct-?1|recaudar|suspendid\w+)\b)/],
    ["ca-state-vendor", /\bcal ?eprocure\b|\bcaleprocure\b|(?=.*\b(?:proveedor\w*|vender\w*|contratos?|licitar|licitacion\w*)\b)(?=.*\b(?:estado de california|gobierno de california|agencias? estatales?|gobierno estatal|contratos? estatales?)\b)/],
    ["ca-certification", /\b(?:certific\w+|microempresa|micro negocio|dgs|osds)\b/],
    ["ca-grants", /\b(?:subvenci\w+|becas?|microsubvenci\w+|dream fund|fondos|financiamiento)\b/],
    ["ca-free-help", /(?=.*\b(?:gratis|gratuit\w+|sin costo|bajo costo)\b)(?=.*\b(?:ayuda|asesoria|consultoria|mentoria|capacitacion|asistencia|apoyo|clases|talleres)\b)|\b(?:calosba|centros? de asistencia tecnica|sbdc)\b/]
  ];
  function californiaTopicSpanish(text) {
    const value = fold(String(text || "").replace(/\s+/g, " ").trim());
    if (!value || value.length > 300 || !CA_CUE_ES.test(value)) return null;
    if (RECORD_OR_DRAFT_ES.test(value) || !(ASKS_ES.test(value) || /\?/.test(String(text || "")))) return null;
    const aboutBusiness = /\b(?:negocios?|empresas?|emprend\w+|sin fines de lucro|proveedor\w*|duen[oa]s?|autonom\w+)\b/.test(value);
    for (const [topic, pattern] of CA_MATCHERS_ES) {
      if (pattern.test(value) && (aboutBusiness || ["ca-la28", "ca-seller-permit", "ca-dbe", "ca-state-vendor", "ca-nonprofit-state"].includes(topic))) return topic;
    }
    return null;
  }
  // "Walk me through getting certified in California", "step by step, how do I get a seller's permit", "what are the steps to ...", "help me register ...": asking to be guided through a process, one step at a time
  const WALK = /^(?:please\s+)?(?:(?:kyro,?\s+)?(?:walk|guide|talk|take|lead) (?:me|us) through|help (?:me|us) (?:get|apply|register|certify|become|start|do|file|set up|sign up|join)|(?:show|tell) (?:me|us) the steps|what (?:are|is) the steps?|step[- ]by[- ]step)\b|\bstep[- ]by[- ]step\b/i;
  function walkthroughAsk(text) { return WALK.test(String(text || "").trim()); }
  const CA_WALK_ONLY = ["ca-nonprofit-form", "ca-llc"];
  // the United States guide's topics that have a walkthrough (nexus/knowledge/us-walkthroughs.js)
  const US_WALK_TOPICS = ["8a", "nmsdc", "certification", "grants"];
  function californiaTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (value && language(value) === "es") return californiaTopicSpanish(value);
    if (!value || value.length > 300 || !CA_CUE.test(value)) return null;
    if (RECORD_OR_DRAFT.test(value) || !(ASKS.test(value) || /\?/.test(value) || WALK.test(value))) return null;
    const aboutBusiness = /\b(?:business(?:es)?|start-?ups?|non-?profits?|entrepreneurs?|owners?|compan(?:y|ies)|self[- ]employed|vendors?|suppliers?|llcs?)\b/i.test(value);
    for (const [topic, pattern] of CA_MATCHERS) {
      if (CA_WALK_ONLY.includes(topic) && !WALK.test(value)) continue;
      // (a grant or free help "in California" is for a business only when the words are about one: "college grants in California" is not)
      if (pattern.test(value) && (aboutBusiness || ["ca-la28", "ca-seller-permit", "ca-dbe", "ca-state-vendor", "ca-nonprofit-state", ...CA_WALK_ONLY].includes(topic))) return topic;
    }
    return null;
  }
  // "Walk me through the SBA 8(a) program", "step by step, how do I apply for a federal grant on Grants.gov": the United States guide's topic for a walkthrough request (nexus/knowledge/us-walkthroughs.js has the ones that exist), or null
  function walkTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || !WALK.test(value) || language(value) === "es") return null;
    const id = topicEnglish(value, { walk: true });
    return US_WALK_TOPICS.includes(id) ? id : null;
  }

  // "Show me your sources for small business", "where does your information come from", "the source page": a request for the page that gathers the official pages the guides are built from (nexus/knowledge/sources-page.js
  // answers it). The words are here so the page can take such a request itself, as it does a business question: left to the voice model it improvised ("I don't have any sources to show") before the page answered.
  // Not "sources of funding" or "sources for my report".
  const SOURCE_PAGE_WORDS = "small business(?:es)?|minority|start-?ups?|nonprofits?|non-profits?|business(?:es)?|entrepreneurs?|owners?|veterans?|older adults?|seniors?|community";
  const ASKS_SOURCES = new RegExp(`\\b(?:your|the)\\s+(?:(?:business|small[- ]business|minority[- ]owned|start-?up|nonprofit|non-profit|checked|official)\\s+)*(?:sources?|references)\\b(?!\\s+of\\b)(?!\\s+for\\s+(?!(?:${SOURCE_PAGE_WORDS})\\b))|\\bsources? page\\b|\\bsources?\\s+for\\s+(?:small[- ]business(?:es)?|minority[- ]owned (?:business(?:es)?)|non-?profits?|start-?ups?)$`, "i");
  const ASKS_WHERE_FROM = /\bwhere (?:does|do|did) (?:your|the|this) (?:(?:business|small business|nonprofit|non-profit|start-?up|minority(?:-owned)?)\s+)*(?:information|info|answers?|guidance|advice|guides?) (?:come|came) from\b/i;
  function sourcesRequest(text) {
    const said = String(text || "").trim().replace(/[.?!]+$/, "");
    if (!said || said.length > 110) return false;
    return ASKS_SOURCES.test(said) || ASKS_WHERE_FROM.test(said);
  }

  return Object.freeze({ topic: usSmallBusinessTopic, californiaTopic, walkthroughAsk, walkTopic, sourcesRequest, isUsContext, isBusinessQuestion, language });
});

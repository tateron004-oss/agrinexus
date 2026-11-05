"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-irrigation-water.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_WATERNEEDS = { name: "FAO Irrigation Water Management Training Manual No. 3: mmiri ihe ọkụkụ chọrọ (Irrigation Water Needs)", url: "https://www.fao.org/4/s2022e/s2022e00.htm" };
const FAO_HARVEST = { name: "FAO: Water Harvesting, akwụkwọ nkuzi maka ichekwa mmiri ozuzo maka ihe ọkụkụ", url: "https://www.fao.org/4/u3160e/u3160e00.htm" };
const FAO_DRIP = { name: "FAO: akwụkwọ nkuzi maka ịgba mmiri n'ike (gụnyere drip ezinụlọ dị ọnụ ala)", url: "https://www.fao.org/4/a1336e/a1336e.pdf" };
const FAO_SOLAR = { name: "FAO: olileanya ọma maka igwe na-agba mmiri site n'ike anyanwụ (solar)", url: "https://www.fao.org/newsroom/detail/Positive-prospects-for-solar-powered-irrigation-systems/en" };
const FAO_SALINITY = { name: "FAO: ịdị mma mmiri maka ọrụ ugbo (nnu, ịsacha nnu na ụzọ mmiri si apụ)", url: "https://www.fao.org/4/t0234e/t0234e03.htm" };
const WRA = { name: "Water Resources Authority, Kenya (ikike iji mmiri)", url: "https://wra.go.ke" };

module.exports = {
  id: "agri-irrigation-water-ig",
  lang: "ig",
  translationOf: "agri-irrigation-water",
  category: "Agriculture (Africa)",
  name: "Ịgba Mmiri n'Ubi na Ijikwa Mmiri",
  skills: "Ịmata mgbe ihe ọkụkụ chọrọ mmiri, Ichekwa mmiri ozuzo, Idebe mmiri n'enweghị nsogbu, Ịkwado drip dị ọnụ ala, Ịhazi oge ịgba mmiri n'enweghị mmiri ijuju ala ma ọ bụ nnu, Ịhọrọ pump gụnyere nke anyanwụ",
  outcome: "ịhazi ịgba mmiri maka obere ubi: ịmata mgbe ihe ọkụkụ gị kacha chọọ mmiri, ịnakọta na idebe mmiri ozuzo, ịkwado na iji drip dị ọnụ ala n'oge a hazịrị, igbochi mmiri ijuju ala na nnu ịba ụba, na ịhọrọ pump kwesịrị ekwesị.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị na-eto eto n'ọrụ ugbo, ndị ọrụ n'ubi na ndị ntorobịa na-akọ ugbo na Kenya, Nigeria, Ghana na n'Afrịka niile, ndị chọrọ ịkọ ihe n'oge ọkọchị, ịkọ ihe nke abụọ n'oge ọkọchị, ma ọ bụ iji mmiri ha nwere nke ọma. Ọ na-elekwasị anya n'ụzọ dị ọnụ ala ị nwere ike ịmalite n'obere ubi, dị ka ubi akwụkwọ nri nke tomato na kale ma ọ bụ ebe a na-azụ mkpụrụ kọfị.",
    "Isi 1 na-akọwa ebe mmiri si: mmiri ole ihe ọkụkụ chọrọ na mgbe ọ chọrọ ya, ịnakọta mmiri ozuzo site n'elu ụlọ na n'ubi, na idebe ya n'enweghị nsogbu. Isi 2 na-akọwa itinye ya n'ihe ọkụkụ: drip dị ọnụ ala, ịhazi oge n'enweghị mmiri ijuju ala ma ọ bụ nnu, na ịhọrọ pump, gụnyere pump anyanwụ.",
    "Iwu na ikike mmiri dị iche iche n'obodo ọ bụla, ya mere jụọ ọfịs na-ahụ maka mmiri na onye ndụmọdụ ọrụ ugbo (extension officer) tupu ị gwuo olulu mmiri (borehole), gbapụta mmiri n'osimiri ma ọ bụ wuo nnukwu ọdọ mmiri. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-agwụ n'ọrụ n'ugbo gị. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ ịgba mmiri peeji otu maka obere ubi (nke gị, ma ọ bụ ọmụmaatụ dị ka square metres 200 nke tomato dị nso Nakuru, ma ọ bụ square metres 500 nke yabasị na ose dị nso Kano): ihe ọkụkụ ahụ na oge uto ya kacha chọọ mmiri, ebe mmiri ga-esi na mmiri ole ị nwere ike idebe, drip ma ọ bụ usoro ọzọ ị ga-eji, oge ịgba mmiri kwa izu na otu ị ga-esi lelee ala, otu ị ga-esi gbochie mmiri ijuju ala na nnu ịba ụba, na pump ị ga-ahọrọ na ihe mere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị na-eto eto n'ọrụ ugbo, ndị ọrụ n'ubi na ndị ntorobịa na-akọ ugbo na Kenya, Nigeria, Ghana na n'Afrịka niile, ndị chọrọ ịkọ ihe n'oge ọkọchị, ịkọ ihe n'oge ọkọchị, ma ọ bụ iji mmiri ha nke ọma n'obere ubi akwụkwọ nri, ọka ma ọ bụ mkpụrụ a na-azụ.",
    startingPoint: "Ọtụtụ na-adabere na mmiri ozuzo ma na-eji aka gbaa mmiri site na kom ma ọ bụ bọket mgbe ha nwere ike. Ole na ole na-elele mmiri dị n'ala n'ebe mgbọrọgwụ dị, mara oge ihe ọkụkụ ha kacha chọọ mmiri, na-anakọta mmiri si n'elu ụlọ ma ọ bụ n'ubi, na-eji drip, ma ọ bụ mara otu esi ahọrọ nha pump.",
    gap: "Ọkọchị n'oge ịmị ifuru na ịmị mkpụrụ na-ebelata owuwe ihe ubi kacha. Mmiri e mefuru, mmiri ruru unyi ma ọ bụ mmiri a na-ejighị nke ọma na-ebute ọrịa, mmiri ijuju ala na ala nnu. Ịhazi mmiri maka obere ubi na-enyere ndị ọrụ ugbo aka iwete ihe ubi karịa, ịkọ ihe n'oge ọkọchị, na imefu obere ego na mmiri na mmanụ ụgbọala.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla gbasara mmiri",
      "Ngwaọrụ: ekwentị nkịtị na akwụkwọ ndetu; obere ubi a ga-eji mee omume",
      "Ego: ụzọ dị ọnụ ala na mbụ; ndị na-amụ ihe na-atụnyere ọnụ ahịa ndị na-ere ere n'onwe ha",
      "Iwu na ikike mmiri dị iche iche n'obodo ọ bụla: jụọ ọfịs na-ahụ maka mmiri tupu ị gwuo olulu, mechie mmiri ma ọ bụ gbapụta mmiri",
      "Nchekwa: a na-ekpuchi ọdọ mmiri na tankị ma gbaa ha ogige; mmiri ọṅụṅụ chọrọ ndụmọdụ nhicha site n'ọfịs ahụike"
    ],
    prerequisites: "Ọ dịghị. \"Ahụike Ala na Ọmụmụ Ya\" na-enyere aka maka mkpuchi ala (mulch) na ụzọ mmiri si apụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka isi ihe ọkụkụ gị", action: "ịkpọ aha oge uto ya kacha chọọ mmiri ma jiri aka lelee mmiri dị n'ala n'ebe mgbọrọgwụ dị", standard: "na-ekpebi nke ọma ma ị ga-agba mmiri ma ọ bụ chere" },
    { id: "O2", condition: "Maka elu ụlọ gị na ala gị", action: "ịkọ mmiri ozuzo ole elu ụlọ nwere ike ịnakọta ma họrọ ụzọ n'ubi iji debe mmiri ozuzo n'ala gị", standard: "na-eji ihe dị ka lita 1 kwa square metre maka milimita ọ bụla nke mmiri ozuzo, na-atụkwa anya obere karịa" },
    { id: "O3", condition: "Maka mmiri a nakọtara", action: "ịhọrọ ebe a ga-edebe mmiri ma debe ya ọcha, kpuchie ya ma soro iwu", standard: "ebe nchekwa ahụ kpuchiri ma ọ bụ nwee ogige, e lelekwara ikike ọ bụla" },
    { id: "O4", condition: "Maka ubi dị ihe dị ka square metres 100 ruo 500", action: "ịkwado ma lekọta drip na-arụ ọrụ site n'ike ịdị elu (gravity)", standard: "drọm ahụ dị opekata mpe mita 1 n'elu, ihe nzacha (filter) dị ọcha, ọ dịghịkwa oghere ntụpọ (emitter) mechiri emechi" },
    { id: "O5", condition: "N'oge ọkụkọ niile", action: "ịhazi oge ịgba mmiri kwa izu ma hụ mmiri ijuju ala na nnu ịba ụba n'oge", standard: "na-elele ala tupu ịgba mmiri ọ bụla" },
    { id: "O6", condition: "Mgbe a ga-ebuli ma ọ bụ bugharịa mmiri", action: "ịtụnyere pump a na-eji ụkwụ azọ, pump mmanụ na pump anyanwụ ma depụta ihe a ga-ajụ onye na-ere ya", standard: "na-enye mmiri a chọrọ kwa ụbọchị, ịdị elu na ebe dị anya, na-agbapụtakwa naanị ihe ihe ọkụkụ chọrọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchọta na idebe mmiri",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mmiri ole ka ihe ọkụkụ gị chọrọ, oleekwa mgbe?",
          minutes: 5,
          goal: "Kpọọ aha oge uto ihe ọkụkụ gị kacha chọọ mmiri ma jiri aka lelee mmiri dị n'ala.",
          text: [
            "Akwụkwọ nkuzi FAO (Food and Agriculture Organization, ụlọ ọrụ UN na-ahụ maka nri na ọrụ ugbo) gbasara mmiri ihe ọkụkụ chọrọ na-akọwa na mmiri ihe ọkụkụ chọrọ dabere n'ihe atọ: ihu igwe, ụdị ihe ọkụkụ, na oge uto ya. Ụbọchị na-ekpo ọkụ, nwere anwụ, kpọrọ nkụ ma nwee ifufe na-eme ka ihe ọkụkụ jiri mmiri karịa; ụbọchị jụrụ oyi, nwere igwe ojii ma dị jụụ na-eme ka ọ jiri obere. Ihe ọkụkụ toro ogologo ma nwee ọtụtụ akwụkwọ na-eji mmiri karịa ndị pere mpe.",
            "Oge uto kacha mkpa maka atụmatụ. Ihe ọkụkụ chọrọ obere mmiri mgbe ọ ka dị obere, nke kachasị mgbe ọ na-amị ifuru na mgbe mkpụrụ ma ọ bụ ọka na-etolite, ma chọọ obere mgbe ọ na-acha. Ọkọchị na-emebi ọka kacha mgbe ọ na-apụta okpu (tasselling) na ntutu (silking); tomato mgbe ọ na-amị ifuru na mgbe mkpụrụ na-amalite; agwa mgbe ọ na-amị ifuru na mgbe mkpụrụ na-ejupụta n'ime pọd. Ọkọchị n'oge ndị a na-ebelata owuwe ihe ubi kacha.",
            "Lelee ala, ọ bụghị naanị n'elu. Tinye mkpịsị aka ma ọ bụ obere osisi n'ala dị nso mgbọrọgwụ, ihe dị ka cm 10 ruo 15 n'ime, ma ọ bụ gwuo obere olulu ma pịa ala n'aka. Ọ bụrụ na ọ jidere onwe ya ọnụ ma dị mmiri mmiri, chere. Ọ bụrụ na ọ na-agbasa ma kpọọ nkụ n'ebe mgbọrọgwụ dị, oge eruola ịgba mmiri. Akụkụ nke mmiri ozuzo na-esi n'elu ala gbapụ ma ọ bụ banye n'ime ala karịa; akụkụ ihe ọkụkụ nwere ike iji ka a na-akpọ mmiri ozuzo bara uru (effective rainfall)."
          ],
          steps: ["Dee ihe ọkụkụ gị na ụbọchị ole site n'ịkụ ya ruo owuwe ihe ubi.", "Kaa oge ya kacha chọọ mmiri (dịka ọmụmaatụ ọka: okpu na ntutu).", "Kwa izu, jiri mkpịsị aka, osisi ma ọ bụ olulu lelee ala n'ebe mgbọrọgwụ dị.", "Dee ihu igwe: ụbọchị na-ekpo ọkụ, nwere ifufe ma kpọrọ nkụ pụtara iji mmiri karịa.", "Gbaa mmiri tupu ala n'ebe mgbọrọgwụ dị akpọọ nkụ, karịsịa n'oge ọ chọrọ mmiri."],
          words: [["Mmiri ihe ọkụkụ chọrọ", "mmiri ole ihe ọkụkụ na-eji iji too nke ọma."], ["Oge uto", "oge n'ndụ ihe ọkụkụ, dị ka mgbe ọ ka pụta, mgbe ọ na-amị ifuru ma ọ bụ mgbe ọ na-acha."], ["Mmiri ozuzo bara uru (effective rainfall)", "akụkụ mmiri ozuzo na-anọ n'ebe mgbọrọgwụ dị, nke ihe ọkụkụ nwere ike iji."], ["Ebe mgbọrọgwụ dị (root zone)", "akụkụ ala ebe ọtụtụ mgbọrọgwụ ihe ọkụkụ dị."]],
          slides: [
            { title: "Ihe atọ na-ekpebi mmiri a chọrọ (FAO)", bullets: ["Ihu igwe: ọkụ, anwụ, nkụ, ifufe = mmiri karịa", "Ụdị ihe ọkụkụ: ogologo ma nwee akwụkwọ = mmiri karịa", "Oge uto: kacha n'oge ifuru na mgbe mkpụrụ ma ọ bụ ọka na-ejupụta"] },
            { title: "Oge kacha chọọ mmiri", bullets: ["Ọka: okpu (tasselling) na ntutu (silking)", "Tomato: ịmị ifuru na mmalite mkpụrụ", "Agwa: ịmị ifuru na mgbe mkpụrụ na-ejupụta n'ime pọd"] },
            { title: "Lelee ala, ọ bụghị n'elu ya", bullets: ["Mkpịsị aka ma ọ bụ osisi cm 10 ruo 15 n'ime, nso mgbọrọgwụ", "Ọ jidere ọnụ ma dị mmiri mmiri: chere", "Ọ na-agbasa ma kpọọ nkụ: oge ịgba mmiri"] }
          ],
          sources: [FAO_WATERNEEDS],
          tryIt: "Maka otu ihe ọkụkụ ị na-akọ, dee izu ole mgbe ịkụ ya ka ọ na-eru oge ya kacha chọọ mmiri. Wee lelee ala gị n'ebe mgbọrọgwụ dị taa site na mkpịsị aka, osisi ma ọ bụ obere olulu, ma dee: mmiri mmiri ma ọ bụ nkụ.",
          youCanNow: "ikwu mgbe ihe ọkụkụ gị kacha chọọ mmiri ma lelee mmiri dị n'ala n'ebe mgbọrọgwụ dị.",
          quickCheck: [
            { objective: "O1", q: "Olee mgbe agwa kacha chọọ mmiri?", options: ["Ozugbo e wechara ya", "Mgbe ọ na-amị ifuru na mgbe mkpụrụ na-ejupụta n'ime pọd", "Naanị mgbe ọ ka bụ mkpụrụ", "Mgbe pọd ya kpọrọ nkụ"], answer: 1, why: "Ọkọchị na-emebi agwa kacha mgbe ọ na-amị ifuru na mgbe mkpụrụ na-ejupụta n'ime pọd." },
            { objective: "O1", q: "Ị gwuru obere olulu nso mgbọrọgwụ. Ala ahụ na-agbasa ma kpọọ nkụ n'ebe ahụ. Gịnị ka ị ga-eme?", options: ["Chere izu ọzọ", "Gbaa naanị akwụkwọ mmiri", "Tinye fatịlaịza kama", "Gbaa ihe ọkụkụ ahụ mmiri ugbu a"], answer: 3, why: "Ọ bụrụ na ala na-agbasa ma kpọọ nkụ n'ebe mgbọrọgwụ dị, oge eruola ịgba mmiri." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịnakọta mmiri ozuzo site n'elu ụlọ na n'ubi",
          minutes: 5,
          goal: "Gbakọọ mmiri ozuzo ole elu ụlọ gị nwere ike ịnakọta ma họrọ ụzọ n'ubi iji debe mmiri ozuzo n'ala gị.",
          text: [
            "Ịnakọta mmiri (water harvesting) pụtara ijide mmiri ozuzo ebe ọ dara ma ọ bụ ebe ọ na-asọ, ma debe ya maka ihe ọkụkụ, anụmanụ ma ọ bụ ụlọ. Akwụkwọ nkuzi FAO gbasara ịnakọta mmiri na-akọwa ọtụtụ ụzọ n'ubi e ji eme ihe n'ebe kpọrọ nkụ: olulu ịkụ ihe (dị ka olulu zai), obere mgbidi ala dị ka ọkara gburugburu, mgbidi ala na-eso usoro ugwu (contour ridges), obere ebe dị ka diamọnd gburugburu osisi (negarim) na mgbidi nkume.",
            "Ịnakọta site n'elu ụlọ bụ mmalite kacha mfe. Milimita 1 ọ bụla nke mmiri ozuzo n'elu square metre 1 nke elu ụlọ na-enye ihe dị ka lita 1 nke mmiri. Elu ụlọ nke square metres 50 n'ebe mmiri ozuzo dị mm 600 kwa afọ nwere ike inye ruo lita 30,000 kwa afọ, mana ụfọdụ na-efu mgbe niile, ya mere tụọ anya obere karịa. Tinye gọta (gutter), paịpụ first-flush na-atụfu mmiri mbụ ruru unyi, na tankị kpuchiri ekpuchi.",
            "Mmiri na-asọ site n'okporo ụzọ, ụzọ ụkwụ na ugwu nwere ike ịbanye n'olulu mmiri e tinyere ihe mkpuchi (water pan) ma ọ bụ ọdọ mmiri ugbo. Olulu ịkụ ihe e jupụtara na kompost ma ọ bụ nsị anụmanụ na-ejide mmiri ozuzo n'ebe mgbọrọgwụ ọka, sorghum ma ọ bụ osisi mkpụrụ na-eto eto dị. Malite n'obere ma lee ebe mmiri na-asọ n'ala gị n'oké mmiri ozuzo na-abịa."
          ],
          steps: ["Tụọ elu ụlọ gị: ogologo mụbaa obosara n'ime mita.", "Chọta mmiri ozuzo kwa afọ site n'ọfịs ihu igwe ma ọ bụ onye ndụmọdụ ọrụ ugbo.", "Mụbaa nha elu ụlọ na mmiri ozuzo na mm iji nweta lita, wee tụọ anya obere karịa maka ihe na-efu.", "Tinye gọta, paịpụ first-flush na tankị kpuchiri ekpuchi.", "Họrọ otu ụzọ n'ubi (olulu, mgbidi ala ma ọ bụ contour ridges) maka otu ubi."],
          words: [["Ịnakọta mmiri (water harvesting)", "ijide na idebe mmiri ozuzo ma ọ bụ mmiri na-asọ maka iji mee ihe ma emechaa."], ["Ịnakọta site n'elu ụlọ", "ịnakọta mmiri ozuzo site n'elu ụlọ site na gọta banye n'ime tankị."], ["First flush", "paịpụ na-atụfu mmiri ozuzo mbụ kacha ruo unyi site n'elu ụlọ."], ["Olulu zai", "obere olulu ịkụ ihe e jupụtara na nsị anụmanụ, nke na-ejide mmiri ozuzo n'ebe mgbọrọgwụ dị."]],
          slides: [
            { title: "Jide mmiri ozuzo ebe ọ dara", bullets: ["Olulu ịkụ ihe (zai), mgbidi ala ọkara gburugburu", "Contour ridges, mgbidi nkume", "Negarim gburugburu osisi (FAO)"] },
            { title: "Mgbakọ elu ụlọ", bullets: ["mm 1 nke mmiri ozuzo n'elu square metre 1 = ihe dị ka lita 1", "Elu ụlọ m2 50 x mm 600 = ruo lita 30,000 kwa afọ", "Tụọ anya obere karịa: ụfọdụ na-efu mgbe niile"] },
            { title: "Kwado ya", bullets: ["Gọta na paịpụ first-flush", "Tankị kpuchiri ekpuchi", "Duru mmiri si n'okporo ụzọ banye n'olulu mmiri nwere mkpuchi"] }
          ],
          sources: [FAO_HARVEST],
          tryIt: "Tụọ elu ụlọ gị ma ọ bụ nke ụlọ nkwakọba ihe gị ma chọta mmiri ozuzo kwa afọ. Gbakọọ lita ole ọ nwere ike ịnakọta n'otu afọ. Jiri ihe mgbakọ dị n'ekwentị gị, ma ọ bụ rịọ ngwa enyemaka AI dị n'ekwentị ka o lelee mgbakọ gị.",
          youCanNow: "ịkọ mmiri ozuzo ole ị nwere ike ịnakọta ma họrọ ụzọ n'ubi iji debe mmiri ozuzo n'ala gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụzọ n'ubi na-edebe mmiri ozuzo n'ala gị?", options: ["Olulu ịkụ ihe ma ọ bụ contour ridges", "Ịkpọ ahịhịa ọkụ", "Ịkọ ala site n'elu ugwu ruo n'ala ya", "Ịhapụ ala n'efu n'enweghị ihe mkpuchi"], answer: 0, why: "Olulu ịkụ ihe, mgbidi ala na contour ridges na-ejide mmiri ozuzo ebe ọ dara." },
            { objective: "O2", q: "N'oké mmiri ozuzo na-abịa, mmiri na-asọ ike n'okporo ụzọ ugbo gị. Gịnị ka ị nwere ike iji ya mee?", options: ["Hapụ ya ka ọ sọba n'osimiri", "Mechie okporo ụzọ ahụ", "Duru ya banye n'olulu mmiri nwere mkpuchi ma ọ bụ ọdọ mmiri ugbo", "Gwuo olulu n'etiti okporo ụzọ"], answer: 2, why: "Mmiri si n'okporo ụzọ na ụzọ ụkwụ nwere ike ịbanye n'olulu mmiri nwere mkpuchi ma ọ bụ ọdọ maka iji ya mee ihe ma emechaa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Idebe mmiri n'enweghị nsogbu",
          minutes: 4,
          goal: "Họrọ ebe a ga-edebe mmiri ma debe ya ọcha, kpuchie ya ma soro iwu.",
          text: [
            "Ebe a na-edebekarị mmiri bụ tankị plastik ma ọ bụ ferro-cement (siment na waya), tankị dị n'okpuru ala, na olulu mmiri ma ọ bụ ọdọ mmiri ugbo. Ọdọ mmiri na-atụfu ọtụtụ mmiri n'ime ala ma ọ bụrụ na e tinyeghị ihe mkpuchi n'ime ya (dịka ọmụmaatụ dam liner), na ọtụtụ nye anwụ ma ọ bụrụ na e kpuchighị ya ma ọ bụ nye ya ndò.",
            "Debe mmiri e chekwara ọcha na n'enweghị nsogbu. Kpuchie tankị na ọdọ mmiri ka unyi, anụmanụ na ụmụaka ghara ịbanye, na igbochi anwụ nta (mosquito) ịmụ nwa. Gbaa ọdọ mmiri ogige. Hichaa gọta na tankị tupu udu mmiri. Mmiri ọṅụṅụ chọrọ nlekọta karịa mmiri maka ihe ọkụkụ; jụọ ọfịs ahụike otu esi ehicha ya.",
            "Iji mmiri buru ibu nwere ike ịchọ ikike. Na Kenya, Water Resources Authority (WRA) na-achịkwa iji mmiri ma na-enye ikike, dịka ọmụmaatụ maka olulu mmiri (borehole) na ịgbapụta mmiri n'osimiri. Obodo ndị ọzọ nwere ọfịs mmiri nke ha. Jụọ tupu ị gwuo olulu, mechie mmiri ma ọ bụ gbapụta mmiri."
          ],
          steps: ["Kpebie ihe mmiri ahụ bụ maka: ihe ọkụkụ, anụmanụ ma ọ bụ ụlọ.", "Họrọ ebe nchekwa: tankị, tankị n'okpuru ala, ma ọ bụ ọdọ nwere ihe mkpuchi n'ime.", "Kpuchie ya ma gbaa ọdọ mmiri ogige.", "Hichaa gọta na tankị tupu udu mmiri ọ bụla.", "Tupu ị gwuo olulu ma ọ bụ gbapụta mmiri n'osimiri, jụọ ọfịs na-ahụ maka mmiri."],
          words: [["Olulu mmiri (water pan)", "ọdọ e gwuru egwu nke na-anakọta mmiri na-asọ."], ["Dam liner", "akwa plastik siri ike na-egbochi mmiri ọdọ ịbanye n'ime ala."], ["Ikike (permit)", "nkwenye gọọmentị iji ma ọ bụ were mmiri."]],
          slides: [
            { title: "Ebe nchekwa", bullets: ["Tankị plastik ma ọ bụ ferro-cement", "Tankị n'okpuru ala", "Olulu mmiri na ọdọ mmiri ugbo nwere ihe mkpuchi n'ime"] },
            { title: "Debe ya n'enweghị nsogbu", bullets: ["Kpuchie ya: unyi, anụmanụ, anwụ nta", "Gbaa ọdọ mmiri ogige; ụmụaka na-emikpu n'ọdọ mmiri", "Hichaa gọta na tankị tupu udu mmiri"] },
            { title: "Lelee iwu", bullets: ["Kenya: Water Resources Authority (WRA)", "Obodo ndị ọzọ: ọfịs mmiri nke obodo gị", "Jụọ tupu ị gwuo olulu, mechie mmiri ma ọ bụ gbapụta mmiri"] }
          ],
          sources: [WRA],
          tryIt: "Dee ebe nchekwa dabara ugbo gị na ego gị, otu ị ga-esi kpuchie ya ma gbaa ya ogige, na aha ọfịs dị n'obodo gị ị ga-ajụ tupu ị gwuo olulu ma ọ bụ gbapụta mmiri.",
          youCanNow: "ịhọrọ ebe a ga-edebe mmiri, debe ya n'enweghị nsogbu, ma mara mgbe ị chọrọ ikike.",
          quickCheck: [
            { objective: "O3", q: "Kedu ebe nchekwa na-atụfu mmiri kacha ma ọ bụrụ na e tinyeghị ihe mkpuchi n'ime ya ma kpuchie ya?", options: ["Tankị plastik kpuchiri ekpuchi", "Tankị ferro-cement", "Tankị n'okpuru ala", "Ọdọ mmiri ugbo ghere oghe, nke enweghị ihe mkpuchi n'ime"], answer: 3, why: "Ọdọ mmiri na-atụfu mmiri n'ime ala ma ọ bụrụ na enweghị ihe mkpuchi n'ime, na nye anwụ ma ọ bụrụ na e nyeghị ya ndò ma ọ bụ kpuchie ya." },
            { objective: "O3", q: "Ị chọrọ iji ụfọdụ mmiri ozuzo e chekwara mee mmiri ọṅụṅụ. Gịnị ka ị ga-eme?", options: ["Ṅụọ ya ozugbo site n'ọdọ", "Jụọ ọfịs ahụike otu esi ehicha ya", "Tinye fatịlaịza iji hichaa ya", "Jiri mmiri first-flush"], answer: 1, why: "Mmiri ọṅụṅụ chọrọ nlekọta karịa mmiri maka ihe ọkụkụ; jụọ ọfịs ahụike otu esi ehicha ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchọta na idebe mmiri",
        questions: [
          { objective: "O1", q: "Olee mgbe ọkọchị kacha emebi ọka?", options: ["Mgbe ọ na-apụta okpu (tasselling) na ntutu (silking)", "Ozugbo e wechara ya", "Tupu a kụọ ya", "Mgbe ọka ya kpọrọ nkụ"], answer: 0, why: "Oge ịmị ifuru bụ oge kacha emetụ ya n'ahụ; ọkọchị n'oge ahụ na-ebelata owuwe ihe ubi kacha." },
          { objective: "O1", q: "Otu ị ga-esi mara ma ihe ọkụkụ chọrọ mmiri?", options: ["Lee naanị elu ala", "Chere ruo mgbe akwụkwọ ya nwụrụ", "Lelee mmiri dị n'ala n'ebe mgbọrọgwụ dị site na mkpịsị aka, osisi ma ọ bụ obere olulu", "Gbaa mmiri kwa awa"], answer: 2, why: "Mgbọrọgwụ na-enweta ala dị n'okpuru elu ya, ya mere lelee ebe ahụ." },
          { objective: "O2", q: "Elu ụlọ dị square metres 40 ma na-enweta mm 500 nke mmiri ozuzo kwa afọ. Ihe dị ka mmiri ole ka ọ nwere ike ịnakọta ka ọ kachasị?", options: ["Lita 200", "Lita 2,000", "Lita 540", "Lita 20,000"], answer: 3, why: "40 x 500 = lita 20,000; ihe a ga-anakọta n'ezie ga-erughị ya ntakịrị." },
          { objective: "O2", q: "Gịnị ka paịpụ first-flush na-eme?", options: ["Ọ na-agbago mmiri n'ugwu", "Ọ na-atụfu mmiri ozuzo mbụ kacha ruo unyi site n'elu ụlọ", "Ọ na-ekpo mmiri ọkụ", "Ọ na-atụ mmiri ozuzo"], answer: 1, why: "Ọ na-egbochi ájá na nsị nnụnụ ịbanye n'ime tankị." },
          { objective: "O3", q: "Gịnị mere a ga-eji kpuchie tankị mmiri ma ọ bụ ọdọ mmiri?", options: ["Iji gbochie unyi na anụmanụ ma kwụsị anwụ nta ịmụ nwa", "Iji mee ka mmiri kpoo ọkụ", "Iji mee ka ọ dị arọ", "Mkpuchi abaghị uru"], answer: 0, why: "Ikpuchi ya na-edebe mmiri ọcha na n'enweghị nsogbu." }
        ]
      }
    },
    {
      name: "Isi 2: Itinye mmiri n'ihe ọkụkụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Drip dị ọnụ ala",
          minutes: 6,
          goal: "Kwado ma lekọta drip bọket ma ọ bụ drọm maka obere ubi.",
          text: [
            "Drip (drip irrigation) na-etinye mmiri nwayọọ n'ụkwụ osisi ọ bụla site na paịpụ dị gịrịgịrị nwere obere oghere (emitter). Obere mmiri na-efu nye anwụ na ifufe, akwụkwọ na-anọ nkụ ya mere ọrịa na-ebelata, ahịhịa dị n'etiti ahịrị na-enwetakwa obere mmiri.",
            "Akwụkwọ nkuzi FAO gbasara ịgba mmiri n'ike na-akọwa drip ezinụlọ dị ọnụ ala maka ubi dị ihe dị ka square metres 100 ruo 500: bọket ma ọ bụ drọm e buliri opekata mpe mita 1 n'elu akwa ubi na-enye ihe nzacha (filter), isi paịpụ na paịpụ drip n'akụkụ ahịrị ọ bụla. Ịdị elu (gravity) na-enye ike mmiri, ya mere ọ dịghị pump a chọrọ iji mee ka ọ rụọ ọrụ. Ndị na-ere ihe ọrụ ugbo (agro-dealers) na ndị na-ere ihe ịgba mmiri na-ere kit ndị a; tụnyere ọnụ ahịa ma jụọ maka akụkụ nnọchi.",
            "Mmechi oghere bụ isi nsogbu. Jiri mmiri dị ọcha, debe ihe nzacha n'ọnọdụ ya ma na-ehicha ya mgbe mgbe, ma na-asacha njedebe paịpụ drip mgbe niile. Kpuchie ala n'elu paịpụ drip site na mkpuchi ala (mulch) iji belata mmiri na-ekpo ọkụ apụ. Lelee na emitter ọ bụla na-atụ mmiri; osisi kpọrọ nkụ na-apụtakarị oghere mechiri emechi."
          ],
          steps: ["Mee ka akwa ubi dị larịị ma tọgbọ paịpụ drip n'akụkụ ahịrị osisi ọ bụla.", "Bulie bọket ma ọ bụ drọm n'elu ihe nkwado opekata mpe mita 1 n'elu akwa ubi.", "Jikọọ drọm, tap, ihe nzacha, isi paịpụ na paịpụ drip; mechie njedebe paịpụ.", "Jupụta ya na mmiri dị ọcha, meghee tap ma lelee na emitter ọ bụla na-atụ mmiri.", "Tinye mkpuchi ala n'elu paịpụ.", "Hichaa ihe nzacha ma sachaa njedebe paịpụ kwa izu ma ọ bụ izu abụọ."],
          words: [["Drip (drip irrigation)", "ịgba osisi mmiri ntụpọ ntụpọ n'ebe mgbọrọgwụ dị site na paịpụ dị gịrịgịrị."], ["Emitter", "obere oghere ma ọ bụ ihe na-atụ mmiri nso osisi ọ bụla."], ["Ihe nzacha (filter)", "ihe na-egbochi unyi imechi emitter."], ["Gravity-fed", "mmiri na-asọ n'ihi ịdị elu tankị, ọ bụghị site na pump."]],
          slides: [
            { title: "Gịnị mere drip", bullets: ["Mmiri na-aga n'ebe mgbọrọgwụ dị", "Obere na-efu nye anwụ na ifufe", "Akwụkwọ nkụ, obere ọrịa na obere ahịhịa"] },
            { title: "Drip ezinụlọ (FAO)", bullets: ["Maka ubi dị ihe dị ka square metres 100 ruo 500", "Bọket ma ọ bụ drọm opekata mpe m 1 n'elu akwa ubi", "Ihe nzacha, isi paịpụ, paịpụ drip n'akụkụ ahịrị"] },
            { title: "Mee ka ọ na-arụ ọrụ", bullets: ["Mmiri dị ọcha na ihe nzacha dị ọcha", "Sachaa njedebe paịpụ mgbe niile", "Lelee emitter ọ bụla; tinye mkpuchi ala n'elu paịpụ"] }
          ],
          sources: [FAO_DRIP],
          tryIt: "See ihe osise drip maka obere ubi: ebe drọm ga-eguzo (opekata mpe m 1 n'elu), ihe nzacha, isi paịpụ na paịpụ drip ọ bụla. Wee jụọ ndị na-ere ihe ọrụ ugbo abụọ ọnụ ahịa kit maka nha ahụ ma dee ha abụọ.",
          youCanNow: "ịkwado, iji na ilekọta drip dị ọnụ ala na-arụ ọrụ site n'ike ịdị elu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ emitter na paịpụ drip?", options: ["Tankị mmiri", "Pump", "Obere oghere ma ọ bụ ihe na-atụ mmiri nso osisi ọ bụla", "Ihe nzacha"], answer: 2, why: "Emitter bụ obere oghere na-atụ mmiri n'ụkwụ osisi ọ bụla." },
            { objective: "O4", q: "Mmiri gị si n'ọdọ nwere apịtị. Otu ị ga-esi chebe drip gị?", options: ["Debe ihe nzacha n'ọnọdụ ya, na-ehicha ya mgbe mgbe ma na-asacha njedebe paịpụ", "Wepụ ihe nzacha ka mmiri sọọ ngwa ngwa", "Elelela emitter mgbe ọ bụla", "Jiri kit ahụ naanị n'ehihie"], answer: 0, why: "Mmiri dị ọcha, ihe nzacha dị ọcha na ịsacha mgbe niile na-egbochi mmechi oghere, isi nsogbu drip." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi oge: n'enweghị mmiri ijuju ala ma ọ bụ nnu",
          minutes: 5,
          goal: "Hazie oge ịgba mmiri kwa izu ma hụ mmiri ijuju ala na nnu ịba ụba n'oge.",
          text: [
            "Usoro oge na-aza ajụjụ abụọ: mgbe a ga-agba mmiri na mmiri ole. Gbaa mmiri n'isi ụtụtụ ma ọ bụ n'ehihie mgbede, mgbe obere na-efu nye anwụ. Gbaa mmiri ugboro ugboro n'oge okpomọkụ nwere ifufe na n'oge ihe ọkụkụ chọrọ mmiri, ma hapụ ịgba mmiri mgbe mmiri ozuzo zoro nke ọma. Na-elele ala n'ebe mgbọrọgwụ dị; usoro oge bụ ihe nduzi, ala nwere okwu ikpeazụ.",
            "Mmiri karịrị akarị na-emerụ ahụ dị ka mmiri pere mpe. Ala mmiri jujuru (waterlogging) enweghị ikuku maka mgbọrọgwụ: osisi na-acha odo odo ma na-akpọnwụ ọ bụ ezie na ala dị mmiri, mgbọrọgwụ na-erekwa ure. Ihe ịrịba ama bụ mmiri guzoro ọtọ, isi ụtọ ọjọọ (dị ka ihe gbara ụka) na ịcha odo odo. Gbaa obere mmiri, meghee ụzọ mmiri si apụ, ma jiri akwa ubi e buliri elu ma ọ bụ ebe a kpọkọbara ala (ridges) n'ala ụrọ dị arọ.",
            "FAO na-akọwa na nnu na-aba ụba mgbe mmiri a na-agba na-ebubata nnu karịa ihe na-apụ, nakwa na ịgba mmiri karịa akarị na ụzọ mmiri na-adịghị mma bụ ihe na-ebutekarị ya. Lezie anya maka ihe ọcha kpọkọrọ n'elu ala, ọnụ akwụkwọ na-ere ọkụ, na uto na-adịghị mma. Ụzọ mmiri ọma, mkpuchi ala na mmiri zuru ezu (ọ bụghị karịa akarị) na-enyere aka. Ọ bụrụ na ị hụ ihe ịrịba ama ndị a, ma ọ bụ na-eji mmiri borehole n'ebe kpọrọ nkụ, rịọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ ụlọ nyocha ala ka ha nwalee mmiri na ala ahụ."
          ],
          steps: ["Dee atụmatụ kwa izu: ụbọchị ndị ole, ụtụtụ ma ọ bụ mgbede, ogologo oge ole.", "Gbaa mmiri karịa n'oge ihe ọkụkụ chọrọ mmiri na n'izu na-ekpo ọkụ nwere ifufe.", "Hapụ ịgba mmiri mgbe mmiri ozuzo zoro nke ọma.", "Lelee ala n'ebe mgbọrọgwụ dị tupu ịgba mmiri ọ bụla.", "Lezie anya maka mmiri guzoro ọtọ, isi ọjọọ na ịcha odo odo (mmiri ijuju ala).", "Lezie anya maka ihe ọcha n'elu ala na ọnụ akwụkwọ na-ere ọkụ (nnu); rịọ ka a nwalee mmiri na ala."],
          words: [["Usoro oge ịgba mmiri", "atụmatụ maka mgbe na mmiri ole a ga-agba."], ["Mmiri ijuju ala (waterlogging)", "ala jupụtara na mmiri nke na mgbọrọgwụ enweghị ikuku."], ["Nnu n'ala (salinity)", "nnu karịrị akarị n'ala ma ọ bụ na mmiri, nke na-emerụ ihe ọkụkụ."], ["Ụzọ mmiri si apụ (drainage)", "otu mmiri karịrị akarị si apụ n'ala."]],
          slides: [
            { title: "Mgbe na mmiri ole", bullets: ["Gbaa mmiri n'isi ụtụtụ ma ọ bụ n'ehihie mgbede", "Karịa n'oge ọ chọrọ mmiri na n'izu na-ekpo ọkụ nwere ifufe", "Hapụ ya mgbe mmiri ozuzo zoro nke ọma; ala na-ekpebi"] },
            { title: "Mmiri ijuju ala", bullets: ["Mmiri guzoro ọtọ, isi ọjọọ, osisi na-acha odo odo ma na-akpọnwụ", "Gbaa obere mmiri ma meghee ụzọ mmiri si apụ", "Akwa ubi e buliri elu ma ọ bụ ridges n'ala ụrọ dị arọ"] },
            { title: "Nnu na-aba ụba (FAO)", bullets: ["Ịgba mmiri karịa akarị na ụzọ mmiri na-adịghị mma na-ebute ya", "Ihe ọcha n'elu ala, ọnụ akwụkwọ na-ere ọkụ, uto na-adịghị mma", "Mee ka mmiri na-apụ nke ọma, tinye mkpuchi ala, nwalee mmiri na ala"] }
          ],
          sources: [FAO_WATERNEEDS, FAO_SALINITY],
          tryIt: "Dee usoro oge ịgba mmiri otu izu maka otu ihe ọkụkụ: ụbọchị, oge n'ụbọchị na ogologo oge. N'akụkụ ya, dee ihe ịrịba ama abụọ nke mmiri ijuju ala na abụọ nke nnu ịba ụba ị ga-elezi anya maka ha oge ọ bụla ị na-agba mmiri.",
          youCanNow: "ịhazi oge ịgba mmiri ma hụ mmiri ijuju ala na nnu ịba ụba tupu ha emebie ihe ọkụkụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka usoro oge ịgba mmiri na-ekpebi?", options: ["Mkpụrụ a ga-azụ", "Mgbe a ga-agba mmiri na mmiri ole", "Ebe a ga-ere ihe", "Pump a ga-azụ"], answer: 1, why: "Usoro oge na-aza mgbe a ga-agba mmiri na mmiri ole, ilele ala nwekwara okwu ikpeazụ." },
            { objective: "O5", q: "Ị na-eji mmiri borehole gbaa mmiri n'ebe kpọrọ nkụ, uto na-akawanye njọ n'oge ọkụkọ ọ bụla. Gịnị ka ị ga-eme?", options: ["Gbaa mmiri okpukpu abụọ", "Kwụsị ịgba mmiri niile", "Tinyekwuo fatịlaịza", "Rịọ onye ndụmọdụ ọrụ ugbo gị ma ọ bụ ụlọ nyocha ala ka ha nwalee mmiri na ala"], answer: 3, why: "Mmiri borehole n'ebe kpọrọ nkụ nwere ike ibute nnu; nnwale mmiri na ala na-egosi ihe dị njọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhọrọ pump, gụnyere pump anyanwụ",
          minutes: 5,
          goal: "Tụnyere pump a na-eji ụkwụ azọ, pump mmanụ na pump anyanwụ ma depụta ihe a ga-ajụ onye na-ere ya.",
          text: [
            "Ọ bụrụ na mmiri dị n'okpuru ma ọ bụ dị anya site n'ubi gị, ị chọrọ pump. Pump a na-eji ụkwụ azọ (treadle) na pump aka dị ọnụ ala ma na-eji ike gị, dị mma maka obere ubi dị nso mmiri na-adịghị omimi. Pump petrol na diesel dị ọnụ ala ịzụta ma dị mfe ibugharị, mana mmanụ na ndozi na-efu ego kwa izu. Pump anyanwụ (solar) dị oke ọnụ ịzụta mana ọ na-eji ìhè anyanwụ n'efu, ya mere ego iji ya arụ ọrụ dị ntakịrị nke ukwuu.",
            "Iji họrọ, mara ihe atọ: mmiri ole ị chọrọ kwa ụbọchị, ogo ole a ga-ebuli mmiri (site n'ọkwa mmiri ruo tankị ma ọ bụ ubi), na ebe dị anya ole ọ ga-aga. Onye na-ere ya chọrọ ihe ndị a iji họrọ nha pump. Pump dị obere nke ukwuu agaghị enye mmiri zuru ezu; nke buru ibu nke ukwuu na-emefu ego.",
            "FAO na-egosi ihe egwu dị na pump anyanwụ: n'ihi na awa ọ bụla ọzọ nke ịgbapụta mmiri bụ n'efu, ndị ọrụ ugbo nwere ike ịgbapụta karịa ihe osimiri ma ọ bụ mmiri dị n'okpuru ala nwere ike inye. Gbapụta naanị ihe ihe ọkụkụ gị chọrọ, kesaa mmiri n'ụzọ ziri ezi na ndị agbata obi, ma soro iwu ọfịs mmiri gị. Debe paneelu ọcha ma chekwaa ha, ma rịọ ka e dee nkwa (warranty), akụkụ nnọchi na ọrụ mgbe ịzụchara n'akwụkwọ. Ụfọdụ ndị na-ere ere na-enye atụmatụ pay-as-you-go (ịkwụ ụgwọ nke nta nke nta); bu ụzọ gụọ ọnụ ahịa niile na ọnọdụ ya."
          ],
          steps: ["Gbakọọ mmiri a chọrọ kwa ụbọchị maka ubi gị.", "Tụọ ịdị elu: site n'ọkwa mmiri ruo tankị ma ọ bụ ubi.", "Tụọ ebe dị anya site n'ebe mmiri si ruo n'ubi.", "Tụnyere treadle, mmanụ na anyanwụ n'ọnụ ahịa ịzụta, ego iji ya arụ ọrụ na ọrụ ọ chọrọ.", "Rịọ onye na-ere ya ka o dee nha, nkwa, akụkụ nnọchi na ọrụ n'akwụkwọ.", "Lelee ikike mmiri tupu ị gbapụta mmiri n'osimiri ma ọ bụ borehole."],
          words: [["Treadle pump", "pump a na-eji ụkwụ azọ iji buli mmiri site n'ebe mmiri na-adịghị omimi."], ["Pump anyanwụ (solar pump)", "pump na-arụ ọrụ site n'ike paneelu anyanwụ."], ["Ịdị elu (lift ma ọ bụ head)", "ogo ole pump ga-ebuli mmiri."], ["Iwepụ mmiri karịa akarị (over-abstraction)", "iwere mmiri site n'osimiri ma ọ bụ n'okpuru ala karịa ihe okike na-eweghachi."]],
          slides: [
            { title: "Ụdị pump", bullets: ["Treadle ma ọ bụ aka: ọnụ ala, ike gị", "Petrol ma ọ bụ diesel: ọnụ ala ịzụta, ọnụ dị oke iji ya", "Anyanwụ: ọnụ dị oke ịzụta, ego dị ntakịrị iji ya"] },
            { title: "Họrọ nha kwesịrị ekwesị", bullets: ["Mmiri a chọrọ kwa ụbọchị", "Ịdị elu: ogo ole", "Ebe dị anya: ole"] },
            { title: "Anyanwụ: jiri ya nke ọma (FAO)", bullets: ["Ịgbapụta n'efu nwere ike ibute ịgbapụta karịa akarị", "Gbapụta naanị ihe ihe ọkụkụ chọrọ", "Soro iwu ọfịs mmiri gị"] },
            { title: "Jụọ onye na-ere ya", bullets: ["Nha maka ịdị elu na ebe dị anya gị", "Nkwa, akụkụ nnọchi na ọrụ n'akwụkwọ", "Ọnụ ahịa niile na ọnọdụ atụmatụ pay-as-you-go ọ bụla"] }
          ],
          sources: [FAO_SOLAR, WRA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ịgba mmiri gị peeji otu. Tinye oge ihe ọkụkụ gị chọrọ mmiri, ebe mmiri gị si na nchekwa ya, drip gị ma ọ bụ usoro ọzọ, usoro oge kwa izu, otu ị ga-esi gbochie mmiri ijuju ala na nnu, na pump ị ga-ahọrọ ya na ịdị elu, ebe dị anya na mmiri a chọrọ kwa ụbọchị.",
          youCanNow: "ịhọrọ ụdị pump kwesịrị ekwesị ma dee atụmatụ ịgba mmiri zuru ezu maka obere ubi.",
          quickCheck: [
            { objective: "O6", q: "Kedu pump na-eji ike gị ma dabara obere ubi dị nso mmiri na-adịghị omimi?", options: ["Pump treadle ma ọ bụ pump aka", "Nnukwu pump diesel", "Nnukwu usoro anyanwụ", "Ọ dịghị pump ọ bụla"], answer: 0, why: "Pump treadle na pump aka dị ọnụ ala ma dabara obere ubi dị nso mmiri na-adịghị omimi." },
            { objective: "O6", q: "Pump anyanwụ ọhụrụ gị nwere ike ịrụ ọrụ ụbọchị niile n'efu, mana osimiri na-ata ata. Gịnị ka ị ga-eme?", options: ["Gbapụta ụbọchị niile n'ihi na ọ bụ n'efu", "Ree mmiri fọdụrụ", "Gbapụta naanị ihe ihe ọkụkụ chọrọ ma kesaa mmiri n'ụzọ ziri ezi na ndị agbata obi", "Bugharịa pump ahụ gaa n'elu osimiri"], answer: 2, why: "Ịgbapụta n'efu nwere ike iwere mmiri karịa akarị; gbapụta naanị ihe ihe ọkụkụ chọrọ ma soro iwu ọfịs mmiri." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Itinye mmiri n'ihe ọkụkụ",
        questions: [
          { objective: "O4", q: "Gịnị bụ isi nsogbu a ga-egbochi na drip?", options: ["Ike mmiri karịrị akarị", "Emitter mechiri emechi", "Osisi karịrị akarị", "Akwụkwọ mmiri mmiri"], answer: 1, why: "Unyi na-emechi emitter; ihe nzacha dị ọcha na ịsacha na-egbochi ya." },
          { objective: "O4", q: "Ogo ole ka a ga-ebuli drọm nke drip na-arụ ọrụ site n'ike ịdị elu?", options: ["N'ala", "E liri ya n'okpuru akwa ubi", "Opekata mpe mita 1 n'elu akwa ubi", "Ọ dịghị mkpa"], answer: 2, why: "FAO kwuru na a ga-ebuli drọm opekata mpe mita 1 iji nye ike mmiri zuru ezu." },
          { objective: "O5", q: "Osisi na-acha odo odo ma na-akpọnwụ, ala nwere isi ọjọọ, mmiri guzokwa ọtọ. Gịnị dị njọ?", options: ["Mmiri pere mpe", "Anwụ karịrị akarị", "Nnu n'ikuku", "Mmiri ijuju ala"], answer: 3, why: "Mmiri guzoro ọtọ na isi ọjọọ pụtara na mgbọrọgwụ enweghị ikuku." },
          { objective: "O5", q: "Ị hụrụ ihe ọcha n'elu ala na ọnụ akwụkwọ na-ere ọkụ. Gịnị ka ị kwesịrị ime?", options: ["Rịọ ka a nwalee mmiri na ala ma mee ka mmiri na-apụ nke ọma", "Gbaa mmiri karịa nke ukwuu kwa ụbọchị", "Tinyekwuo nnu", "Leghara ya anya"], answer: 0, why: "Ndị a bụ ihe ịrịba ama nke nnu ịba ụba; FAO jikọrọ ya na ịgba mmiri karịa akarị na ụzọ mmiri na-adịghị mma." },
          { objective: "O6", q: "Gịnị mere FAO ji adọ aka na ntị gbasara pump anyanwụ?", options: ["Ha anaghị arụ ọrụ mgbe ọ bụla", "Ha na-eme mkpọtụ nke ukwuu", "Ịgbapụta n'efu nwere ike ime ka e were mmiri karịa akarị", "Ha chọrọ petrol"], answer: 2, why: "Ebe ọ fọrọ nke nta ka ọ ghara inwe ego iji ya arụ ọrụ, ndị ọrụ ugbo nwere ike ịgbapụta mmiri osimiri na nke okpuru ala karịa akarị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịgba Mmiri n'Ubi na Ijikwa Mmiri",
    questions: [
      { objective: "O1", q: "Dị ka FAO si kwuo, mmiri ihe ọkụkụ chọrọ dabere na:", options: ["Naanị ọnụ ahịa mmiri", "Ihu igwe, ụdị ihe ọkụkụ na oge uto", "Agba ihe ọkụkụ ahụ", "Ụbọchị nke izu"], answer: 1, why: "FAO depụtara ihu igwe, ụdị ihe ọkụkụ na oge uto." },
      { objective: "O1", q: "Kedu ihu igwe na-eme ka ihe ọkụkụ jiri mmiri kacha?", options: ["Oyi na igwe ojii", "Jụụ na alụlụ", "Ọkụ, anwụ, nkụ na ifufe", "Oyi na mmiri mmiri"], answer: 2, why: "Okpomọkụ, anwụ, ikuku kpọrọ nkụ na ifufe na-eme ka e jiri mmiri karịa." },
      { objective: "O1", q: "Ụkọ mmiri kacha emetụ tomato n'ahụ mgbe:", options: ["Ọ na-amị ifuru na mgbe mkpụrụ na-amalite", "A na-azụ mkpụrụ", "E wechara ihe ubi ikpeazụ", "Ubi dị n'efu"], answer: 0, why: "Ịmị ifuru na mmalite mkpụrụ bụ oge ọ kacha chọọ mmiri." },
      { objective: "O1", q: "Mmiri ozuzo bara uru (effective rainfall) bụ:", options: ["Mmiri ozuzo niile dara", "Mmiri ozuzo na-ezo n'abalị", "Mmiri ozuzo redio tụrụ", "Akụkụ mmiri ozuzo ihe ọkụkụ nwere ike iji n'ezie"], answer: 3, why: "Ụfọdụ mmiri ozuzo na-asọpụ ma ọ bụ banye n'ime ala karịa; nke fọdụrụ bụ nke bara uru." },
      { objective: "O2", q: "Ihe dị ka mmiri ole ka mm 1 nke mmiri ozuzo na-enye n'elu square metre 1 nke elu ụlọ?", options: ["Lita 1", "Lita 10", "Lita 100", "Lita 1,000"], answer: 0, why: "mm 1 n'elu square metre 1 bụ ihe dị ka lita 1." },
      { objective: "O2", q: "Olulu zai bụ:", options: ["Olulu mmiri (borehole)", "Obere olulu ịkụ ihe nwere nsị anụmanụ, nke na-ejide mmiri ozuzo n'ebe mgbọrọgwụ dị", "Ụdị pump", "Tankị mmiri"], answer: 1, why: "Olulu zai na-achịkọta mmiri ozuzo na nri ala n'ebe osisi dị." },
      { objective: "O3", q: "Gịnị mere a ga-eji tinye ihe mkpuchi n'ime ọdọ mmiri ugbo?", options: ["Iji mee ka mmiri nwee nnu", "Iji dọta anụmanụ", "Iji gbochie mmiri ịbanye n'ime ala", "A naghị achọ ihe mkpuchi mgbe ọ bụla"], answer: 2, why: "Ọdọ na-enweghị ihe mkpuchi n'ime na-atụfu ọtụtụ mmiri n'ime ala." },
      { objective: "O3", q: "Gịnị mere a ga-eji gbaa ọdọ mmiri ugbo ogige?", options: ["Iji chebe ụmụaka na anụmanụ", "Iji mee ka ha dị omimi karịa", "Iji gbochie mmiri ozuzo", "Iji kpoo mmiri ọkụ"], answer: 0, why: "Ọdọ mmiri ghere oghe nwere ihe egwu imikpu." },
      { objective: "O3", q: "Na Kenya, kedu ụlọ ọrụ na-enye ikike iji mmiri, dịka ọmụmaatụ maka borehole?", options: ["Kenya Bureau of Standards", "Kenya Revenue Authority", "Kenya Power", "Water Resources Authority (WRA)"], answer: 3, why: "WRA na-achịkwa iji mmiri ma na-enye ikike." },
      { objective: "O4", q: "Otu isi uru drip bụ:", options: ["Ọ na-eme ka akwụkwọ dị mmiri", "Mmiri na-aga n'ebe mgbọrọgwụ dị, obere na-efukwa", "Ọ chọghị mmiri", "Ọ na-eme ka ahịhịa too ngwa ngwa"], answer: 1, why: "Drip na-ebuga mmiri n'ebe mgbọrọgwụ dị, obere na-efukwa." },
      { objective: "O4", q: "FAO na-akọwa drip ezinụlọ dị ka nke dabara ubi dị ihe dị ka:", options: ["Square metres 1 ruo 5", "Hectares 100", "Nha ọ bụla nke mpaghara niile", "Square metres 100 ruo 500"], answer: 3, why: "Akwụkwọ nkuzi FAO na-akọwa drip ezinụlọ dị mfe maka ihe dị ka square metres 100 ruo 500." },
      { objective: "O4", q: "Otu osisi n'ahịrị drip gị kpọrọ nkụ. Ihe kacha ebute ya bụ:", options: ["Emitter mechiri emechi", "Anwụ karịrị akarị n'elu drọm", "Osisi ahụ na-acha akwụkwọ ndụ nke ukwuu", "Ihe nzacha dị ọcha nke ukwuu"], answer: 0, why: "Osisi kpọrọ nkụ na-apụtakarị na emitter ya mechiri emechi." },
      { objective: "O4", q: "Gịnị mere a ga-eji tinye mkpuchi ala n'elu paịpụ drip?", options: ["Iji zoo ha naanị n'anwụ", "Iji mee ka mmiri kpoo ọkụ karịa", "Iji mechie emitter", "Iji belata mmiri na-ekpo ọkụ apụ n'ala"], answer: 3, why: "Mkpuchi ala na-egbochi mmiri dị n'ala ikpo ọkụ apụ." },
      { objective: "O5", q: "Oge kacha mma n'ụbọchị iji gbaa mmiri na-abụkarị:", options: ["Etiti ehihie n'anwụ siri ike", "Isi ụtụtụ ma ọ bụ ehihie mgbede", "Naanị n'etiti abalị", "Oge ọ bụla; ọ dịghị ihe dị iche"], answer: 1, why: "Obere mmiri na-efu nye anwụ n'oge ụbọchị jụrụ oyi." },
      { objective: "O5", q: "Mmiri ozuzo zoro nke ọma n'abalị ụnyaahụ. Usoro oge gị na-ekwu gbaa mmiri taa. Gịnị ka ị ga-eme?", options: ["Gbaa mmiri okpukpu abụọ", "Gbaa mmiri dị ka a hazịrị n'agbanyeghị", "Lelee ala; hapụ ya ma ọ bụrụ na ọ dị mmiri mmiri n'ebe mgbọrọgwụ dị", "Wepụ mmiri n'ubi"], answer: 2, why: "Ala nwere okwu ikpeazụ; hapụ ịgba mmiri mgbe mmiri ozuzo zoro nke ọma." },
      { objective: "O5", q: "N'ala ụrọ dị arọ nke mmiri na-ejupụta ngwa ngwa, omume ọma bụ:", options: ["Mee ka mmiri jupụta ubi", "Tinyekwuo mmiri", "Kụọ ihe n'ebe dị ala", "Akwa ubi e buliri elu ma ọ bụ ridges na ụzọ mmiri ghere oghe"], answer: 3, why: "Akwa ubi e buliri elu na ụzọ mmiri na-ekwe ka mmiri karịrị akarị pụọ." },
      { objective: "O5", q: "Dị ka FAO si kwuo, ihe na-ebutekarị nnu ịba ụba n'ala a na-agba mmiri bụ:", options: ["Mkpuchi ala", "Ịkụ ihe ọkụkụ dị ka agwa (legumes)", "Ịgba mmiri karịa akarị na ụzọ mmiri na-adịghị mma", "Iji ihe nzacha"], answer: 2, why: "Nnu na-abata karịa ihe na-apụ mgbe mmiri karịrị akarị ma ụzọ mmiri adịghị mma." },
      { objective: "O6", q: "Iji họrọ nha pump, onye na-ere ya chọrọ ịma:", options: ["Agba kacha amasị gị", "Mmiri a chọrọ kwa ụbọchị, ịdị elu na ebe dị anya", "Naanị ego ị nwere", "PIN ụlọ akụ gị"], answer: 1, why: "Mmiri a chọrọ, ịdị elu na ebe dị anya na-ekpebi pump kwesịrị ekwesị." },
      { objective: "O6", q: "Ma e jiri ya tụnyere pump petrol, pump anyanwụ na-abụkarị:", options: ["Ọnụ dị oke ịzụta mana ego dị ntakịrị iji ya", "Ọnụ ala ịzụta ma ọnụ dị oke iji ya", "Ọ chọrọ diesel", "Ọ na-arụ ọrụ naanị n'abalị"], answer: 0, why: "Pump anyanwụ nwere ọnụ ahịa ịzụta dị elu mana ọ na-eji ìhè anyanwụ n'efu." },
      { objective: "O6", q: "Onye na-ere ere na-enye pump anyanwụ pay-as-you-go. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Bịanye aka ozugbo", "Nye ha PIN gị", "Gụọ ọnụ ahịa niile, ọnọdụ, nkwa na ọrụ n'akwụkwọ", "Zụta abụọ"], answer: 2, why: "Mara ego niile ọ ga-efu na enyemaka ị ga-enweta tupu ị bịanye aka." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      13,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma lelee ya ọzọ.",
    criteria: [
      {
        name: "Ihe ọkụkụ na oge ọ chọrọ mmiri",
        objective: "O1",
        notYet: "Oge ihe ọkụkụ ahụ kacha chọọ mmiri adịghị ma ọ bụ ezighi ezi.",
        meets: "Na-akpọ aha ihe ọkụkụ ahụ na oge uto ya kacha chọọ mmiri, ya na otu a ga-esi lelee ala.",
        exceeds: "Na-edekwa ụbọchị a kụrụ ya ka oge ọ chọrọ mmiri dị na kalenda."
      },
      {
        name: "Ebe mmiri si na nchekwa ya",
        objective: "O2",
        notYet: "Enweghị ebe mmiri si, ma ọ bụ enweghị ịkọ mmiri ole a ga-edebe.",
        meets: "Ebe mmiri si, ịkọ mmiri si n'elu ụlọ ma ọ bụ mmiri na-asọ, na ebe nchekwa kpuchiri ekpuchi, e lelekwara ikike ọ bụla.",
        exceeds: "Na-agụnye ụzọ n'ubi dị ka olulu ịkụ ihe iji debe mmiri ozuzo n'ala."
      },
      {
        name: "Usoro ịgba mmiri",
        objective: "O4",
        notYet: "Enweghị usoro, ma ọ bụ enweghị atụmatụ igbochi mmechi oghere.",
        meets: "Drip ma ọ bụ usoro ọzọ dabara ubi ahụ, ya na ịdị elu drọm, ihe nzacha na ịsacha.",
        exceeds: "Na-agụnye mkpuchi ala n'elu paịpụ na ndepụta akụkụ nnọchi."
      },
      {
        name: "Usoro oge na ilele ala",
        objective: "O5",
        notYet: "Enweghị usoro oge, ma ọ bụ ịgba mmiri n'etiti ehihie n'eleleghị ala.",
        meets: "Usoro oge kwa izu nwere oge n'ụbọchị, mmiri karịa n'oge ọ chọrọ mmiri, na ilele ala tupu ịgba mmiri.",
        exceeds: "Na-ekwu ihe a ga-eme mgbe mmiri ozuzo zoro nke ọma na n'izu na-ekpo ọkụ nwere ifufe."
      },
      {
        name: "Mmiri ijuju ala na nnu",
        objective: "O5",
        notYet: "Enweghị atụmatụ maka mmiri ijuju ala ma ọ bụ nnu.",
        meets: "Ihe ịrịba ama a ga-elezi anya na nzọụkwụ dị ka ụzọ mmiri, akwa ubi e buliri elu na ịghara ịgba mmiri karịa akarị.",
        exceeds: "Na-ahazi nnwale mmiri na ala ma ọ bụrụ na a na-eji mmiri borehole n'ebe kpọrọ nkụ."
      },
      {
        name: "Ịhọrọ pump",
        objective: "O6",
        notYet: "Enweghị pump a họrọ, ma ọ bụ enweghị ihe kpatara ya.",
        meets: "Ụdị pump na ihe kpatara ya, mmiri a chọrọ kwa ụbọchị, ịdị elu na ebe dị anya.",
        exceeds: "Na-edepụta nkwa, akụkụ nnọchi na ọrụ a ga-arịọ n'akwụkwọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ịgba mmiri",
      "Ndị na-amụ ihe kwuru na ha kwadoro nchekwa mmiri ozuzo ma ọ bụ drip n'ime otu oge ọkụkọ (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha kọrọ ihe n'oge ọkọchị ma ọ bụ na ihe ubi ha furu n'oge ọkọchị belatara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọrụ ugbo Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu, mkpịsị ode na ekwentị nkịtị nwere ihe mgbakọ",
      "Obere ubi a ga-eji mee omume ilele mmiri dị n'ala",
      "Drip dị ọnụ ala ma ọ bụ bọket, ọ bụrụ na ọ dị, maka ngosi",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge iji dee atụmatụ ịgba mmiri"
    ],
    facilitatorNotes: [
      "N'otu ndị ọrụ ugbo ma ọ bụ ụlọ akwụkwọ n'ubi (field school): meenụ ule mbido ọnụ, wee lelee mmiri dị n'ala n'ezi ubi.",
      "Gbakọọnụ otu ịkọ mmiri si n'elu ụlọ ọnụ, na-eji ezi elu ụlọ dị n'ebe ahụ.",
      "Kwadoonụ drip bọket ma ọ bụ drọm dị ka otu ma mee omume ihicha ihe nzacha na ịsacha paịpụ.",
      "Chetara ndị na-amụ ihe ka ha lelee ikike mmiri n'ọfịs na-ahụ maka mmiri, ma gbaa ọdọ mmiri na tankị ogige ma kpuchie ha.",
      "Jiri rubric tụọ akara atụmatụ ịgba mmiri ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

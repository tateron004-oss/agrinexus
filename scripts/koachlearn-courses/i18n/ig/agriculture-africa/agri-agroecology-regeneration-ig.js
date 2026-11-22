"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-agroecology-regeneration.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Money figures are made-up examples.

const FAO_AE = { name: "FAO: Agroecology Knowledge Hub (ebe ihe ọmụma gbasara agroecology)", url: "https://www.fao.org/agroecology/en/" };
const FAO_10 = { name: "FAO: Akụkụ 10 nke agroecology (mba ndị otu FAO nabatara n'afọ 2019)", url: "https://www.fao.org/agroecology/overview/the-10-elements-of-agroecology/en" };
const FMNR_STEPS = { name: "Tearfund Footsteps 110: Farmer-managed natural regeneration, nzọụkwụ ruo n'ihe ịga nke ọma (ya na World Vision)", url: "https://learn.tearfund.org/-/media/learn/resources/footsteps/pdfs/footsteps-101-110/2020-tearfund-footsteps-110-farming-for-the-future-en-centre-page-en.pdf" };
const FMNR_ICRAF = { name: "World Agroforestry (ICRAF) Uganda: Akwụkwọ ntụziaka FMNR", url: "https://fmnrhub.com.au/wp-content/uploads/2024/05/FMNR_Uganda-near-final-v3-2018.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestry (ịkọ osisi na ihe ọkụkụ ọnụ)", url: "https://www.fao.org/agroforestry/en/" };
const GLIRICIDIA = { name: "Sileshi na ndị ọzọ: Osisi legume ọ nwere ike ime ka ihe ubi ọka dị n'otu ọkwa na Southern Africa? (nnwale na Malawi na Zambia)", url: "https://repository.up.ac.za/handle/2263/20631" };
const TITHONIA = { name: "Tithonia diversifolia: otu nri dị n'akwụkwọ ya si dị iche, na ihe ọ pụtara maka iburu akwụkwọ ya (ọdịda anyanwụ Kenya)", url: "https://centaur.reading.ac.uk/119281" };
const FAO_SOM = { name: "FAO: Mkpa ihe ndụ rere ure dị n'ala (soil organic matter)", url: "https://www.fao.org/4/a0100e/a0100e.pdf" };
const HANDBOOK_4R = { name: "4R Plant Nutrient Management in African Agriculture: akwụkwọ ntụziaka maka ndị ndụmọdụ ugbo", url: "https://alliancebioversityciat.org/publications-data/4r-plant-nutrient-management-african-agriculture-extension-handbook-fertilizer" };

module.exports = {
  id: "agri-agroecology-regeneration-ig",
  lang: "ig",
  translationOf: "agri-agroecology-regeneration",
  category: "Agriculture (Africa)",
  name: "Agroecology na Iweghachi Ndụ n'Ala",
  skills: "Iji ụkpụrụ agroecology, Iweghachi ala site n'ihe ọkụkụ mkpuchi na green manure, Iweghachi osisi site na FMNR, Ijikọ ihe ọkụkụ na anụ ụlọ, Ibelata ego fatịlaịza, Ịtụ otu ala si aka mma site n'oge ruo n'oge",
  outcome: "ide ma malite atụmatụ oge ubi atọ iji weghachi ndụ n'otu ubi ala ya tụgburu site na agroecology: ihe ọkụkụ mkpuchi ma ọ bụ green manure, osisi, njikọ ihe ọkụkụ na anụ ụlọ, na nri ala si n'ugbo gị, ka i jiri obere ego zụta fatịlaịza, ma were ụzọ dị mfe hụ ka ala gị si aka mma.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo nta na ndị ugbo azụmahịa na-eto eto, ndị ntorobịa na-azụ ahịa ugbo, ndị ọrụ ugbo na ndị ndụmọdụ ugbo (extension) na Kenya, Nigeria, Ghana, Niger, Senegal na n'Africa niile, ndị ala ha ike gwụrụ: ihe ubi na-ebelata, ala na-akpọ nkụ ma ọ bụ mmiri na-asa ya, striga na-agbasa, fatịlaịza na-akakwa ọnụ kwa afọ.",
    "Isi 1 na-akụzi ụkpụrụ agroecology na otu esi eweghachi ala tụgburu: ihe ọkụkụ mkpuchi na green manure, osisi fatịlaịza, na farmer-managed natural regeneration (FMNR), nke nyeere ndị ọrụ ugbo na Niger aka ime ka osisi tolite ọzọ n'ọtụtụ nde hekta. Isi 2 na-ejikọ ihe ọkụkụ na anụ ụlọ, na-eji ụdị ndụ dị iche iche (biodiversity) mee ka ọ baara gị uru, na-ebelata ego fatịlaịza e si mba ọzọ bubata, ma na-egosi gị otu esi atụ mma ala site n'oge ubi ruo n'oge ubi.",
    "Ihe ọmụmụ \"Ahụike Ala na Ọmụmụ Ya\" na-akụzi nnwale ala, compost, ịgbanwe ihe ọkụkụ na mulch; ihe ọmụmụ a na-ewuli elu n'elu ya, ọ naghị ekwughachi ya. Iweghachi ala na-ewe ọtụtụ oge ubi, ya mere malite n'otu ubi ma tụnyere. Nọmba ego niile bụ ọmụmaatụ e mepụtara. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ ị ga-eme n'ala nke gị."
  ],
  finalTask: "Dee atụmatụ iweghachi ala nke oge ubi atọ maka otu ubi ala ya tụgburu n'ugbo gị (ma ọ bụ ọmụmaatụ: 1 acre ala ọka ike gwụrụ na Kakamega, hekta 2 sorghum na ahụekere na Zinder, Niger, ma ọ bụ hekta 1 akpụ na Oyo State): otu ubi ahụ dị ugbu a; ihe ọkụkụ mkpuchi, green manure ma ọ bụ osisi ị ga-eji na mgbe; otu ihe ọkụkụ na anụ ụlọ ga-esi na-azụ ibe ha; akpa fatịlaịza ole ị zụrụ ị na-achọ iji ihe ọzọ dochie na ego ị ga-echekwa; na ihe anọ ma ọ bụ karịa ị ga-atụ ma dee kwa oge ubi, ya na eserese ubi ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo nta na ndị ugbo azụmahịa na-eto eto, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ndụmọdụ ugbo n'Africa niile (Kenya, Nigeria, Ghana na mba ndị na-asụ French n'ọdịda anyanwụ Africa, gụnyere Sahel), na-akọ ọka, akpụ, sorghum, millet, agwa, ahụekere, osikapa, koko na kọfị, ọtụtụ mgbe ha na ewu, ehi, ezi ma ọ bụ ọkụkọ.",
    startingPoint: "Ha maara ihe ndị bụ isi gbasara compost, nsị anụ, ịgbanwe ihe ọkụkụ na mulch, ma hụ na ala ha tụgburu. Mmadụ ole na ole na-eji ihe ọkụkụ mkpuchi, green manure, osisi fatịlaịza ma ọ bụ FMNR n'ebumnuche, na-ejikọ ihe ọkụkụ na anụ ụlọ dị ka otu usoro, ma ọ bụ na-atụ mgbanwe ala n'oge.",
    gap: "Ala tụgburu na ọnụ ahịa fatịlaịza na-arị elu na-ebelata ihe ubi na ego mmadụ na-enweta. Ndị na-amụ ihe chọrọ ụzọ dị mfe, ọnụ ala, iji wuliteghachi ala ma belata ihe ha na-azụta, ya na ụzọ ha ga-esi hụ ma ọ na-arụ ọrụ, ka ha nwee ike ịga n'ihu n'oge ubi mbụ ndị na-aga nwayọọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa na Spanish, French na Arabic",
      "Ala na ọrụ aka: obere ubi, ezinụlọ na-arụ ọrụ, ihe fọdụrụ n'ubi nwere ọrụ ndị ọzọ (nri anụ, nkụ)",
      "Oge: iweghachi ala na-ewe ọtụtụ oge ubi; nkuzi ọ bụla na-ewe nkeji 4 ruo 6",
      "Ego: nọmba niile bụ ọmụmaatụ; e nyeghị ọnụ ahịa ma ọ bụ enyemaka gọọmentị dị ka eziokwu",
      "Ikike ala: iwu gbasara osisi na ịta nri anụ dị iche n'obodo na mba; ndị na-amụ ihe na-elele iwu na by-law nke obodo ha"
    ],
    prerequisites: "A na-atụ aro ka i bu ụzọ were \"Ahụike Ala na Ọmụmụ Ya\" (nnwale ala, compost, ịgbanwe ihe ọkụkụ, mulch)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta omume dị n'ugbo gị", action: "ijikọ omume ọ bụla na ụkpụrụ agroecology o ji, dị ka iweghachi ihe n'ala, ụdị dị iche iche ma ọ bụ inyere ibe aka", standard: "ma jikọọ opekata mpe omume ise nke ọma" },
    { id: "O2", condition: "Maka otu ubi ala ya tụgburu", action: "ịhọrọ ihe ọkụkụ mkpuchi ma ọ bụ green manure ma kpebie mgbe ị ga-akụ ya na mgbe ị ga-egbutu ya", standard: "site n'ụdị dabara mmiri ozuzo gị, ya na ụbọchị ịkụ na ụbọchị igbutu" },
    { id: "O3", condition: "N'ubi nwere ogwe osisi dị ndụ ma ọ bụ ohere maka osisi", action: "ịhazi FMNR ma ọ bụ osisi fatịlaịza, otu nzọụkwụ n'otu oge", standard: "na-ekwu ogwe ma ọ bụ osisi ndị ị ga-ahọrọ, alaka ole, ịkpacha na nchebe pụọ n'anụ ụlọ na ọkụ" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ọkụkụ na anụ ụlọ dị n'ugbo gị", action: "ise otu nri anụ, nsị anụ na ihe fọdụrụ n'ubi si aga n'etiti ihe ọkụkụ na anụ ụlọ gị", standard: "na-egosi opekata mpe njikọ atọ na otu ebe nri ala si apụ n'ugbo" },
    { id: "O5", condition: "Mgbe e nyere gị fatịlaịza i jiri n'oge ubi gara aga", action: "ịkọ akpa fatịlaịza ole nri ala si n'ugbo nwere ike dochie na ego ị ga-echekwa", standard: "n'ego obodo gị, e dee ya dị ka atụmatụ a ga-eleleta ya na ndị ndụmọdụ ugbo" },
    { id: "O6", condition: "N'ubi ị na-eweghachi", action: "idetu ihe dị mfe gbasara ala na ugbo n'otu oge kwa oge ubi", standard: "site n'iji opekata mpe ihe anọ a tụrụ, e dee ha ma tụnyere ha na nke oge ubi gara aga" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụkpụrụ na iweghachi ala",
      lessons: [
        {
          title: "Agroecology: ụkpụrụ ị nwere ike iji n'ugbo gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jikọọ omume dị n'ugbo gị na ụkpụrụ agroecology.",
          text: [
            "Agroecology pụtara ịkọ ugbo n'otu ụzọ okike si arụ ọrụ: iji ihe ọkụkụ, anụ ụlọ, ihe ndụ dị n'ala, osisi na ihe ọmụma ndị mmadụ, ka ugbo na-azụ onwe ya karịa ma na-azụta obere ihe. FAO (Òtù Nri na Ọrụ Ugbo nke Ụwa) kọwara akụkụ 10 nke agroecology, nke mba ndị otu ya nabatara n'afọ 2019.",
            "Ise bụ maka otu ugbo si arụ ọrụ: iweghachi ihe n'ala (nri ala na ihe mkpofu na-alaghachi n'ugbo), ịrụ ọrụ nke ọma (inweta karịa site n'otu mmiri, ala na ihe e tinyere), ụdị dị iche iche (ọtụtụ ihe ọkụkụ, anụ ụlọ na osisi), inyere ibe aka (akụkụ na-enyere ibe ha aka, dị ka legume na-azụ ọka) na ike iguzo (ịnagide nsogbu mberede). Ise bụ maka ndị mmadụ: ịmụ ihe ọnụ (ndị ọrụ ugbo na ndị nchọpụta na-amụta ihe ọnụ), ụkpụrụ mmadụ na obodo, omenala na ọdịnala nri, ọchịchị nwere ọrụ, na akụ na ụba okirikiri na nke ịdị n'otu (ire na ịzụ ihe n'obodo n'ụzọ ziri ezi).",
            "Ọ ga-abụ na ị na-eji ụfọdụ n'ime ha ugbu a. Inye ewu ahịhịa ọka na ịlaghachi nsị ha n'ubi bụ iweghachi ihe n'ala na inyere ibe aka. Ịkọ akpụ na ahụekere ọnụ bụ ụdị dị iche iche. Ụlọ akwụkwọ ndị ọrụ ugbo n'ubi (farmer field school) bụ ịmụ ihe ọnụ. Agroecology na-arịọ gị ka i jiri ha n'ebumnuche, ma tinyekwuo ndị ọzọ, nwayọọ nwayọọ."
          ],
          words: [["Agroecology", "ịkọ ugbo nke na-eji usoro okike na ihe ọmụma obodo ka ugbo chọọ obere ihe a zụrụ azụ ma nagidekwuo nsogbu mberede."], ["Inyere ibe aka (synergy)", "mgbe akụkụ abụọ nke ugbo na-enyere ibe ha aka, nke mere na ha na-enye karịa mgbe ha nọ ọnụ."], ["Iweghachi ihe n'ala (recycling)", "ịlaghachi ihe fọdụrụ n'ubi, nsị anụ na ihe mkpofu n'ala kama ịtụfu ha."]],
          slides: [
            { title: "Agroecology bụ...", bullets: ["Ịkọ ugbo n'usoro okike", "Ugbo na-azụ onwe ya karịa, na-azụta obere", "FAO: akụkụ 10, e nabatara n'afọ 2019"] },
            { title: "Otu ugbo si arụ ọrụ", bullets: ["Iweghachi ihe n'ala na ịrụ ọrụ nke ọma", "Ụdị dị iche iche na inyere ibe aka", "Ike iguzo"] },
            { title: "Ndị mmadụ na ikpe ziri ezi", bullets: ["Ịmụ ihe ọnụ", "Ụkpụrụ obodo, omenala nri", "Ọchịchị dị mma; akụ na ụba okirikiri, ziri ezi"] },
            { title: "Ọ ga-abụ na ị na-eme ya ugbu a", bullets: ["Ahịhịa ọka nye ewu, nsị laghachi n'ubi", "Akpụ + ahụekere n'otu ubi", "Ụlọ akwụkwọ ndị ọrụ ugbo n'ubi"] }
          ],
          sources: [FAO_10, FAO_AE],
          tryIt: "Depụta omume isii dị n'ugbo gị ma ọ bụ n'obodo gị. N'akụkụ nke ọ bụla, dee ụkpụrụ agroecology o ji (iweghachi ihe n'ala, ịrụ ọrụ nke ọma, ụdị dị iche iche, inyere ibe aka, ike iguzo ma ọ bụ otu n'ime akụkụ gbasara ndị mmadụ). Gbaa otu ụkpụrụ ị na-adịghị eji okirikiri.",
          youCanNow: "ijikọ omume ugbo na ụkpụrụ agroecology ma hụ ndị ị nwere ike iji karịa.",
          quickCheck: [
            { objective: "O1", q: "Otu nwanyị ọrụ ugbo na-enye ewu ya ahịhịa agwa ma gbasaa nsị ewu ahụ n'ọka ya. Ụkpụrụ ndị ole ka ọ na-eji?", options: ["Iweghachi ihe n'ala na inyere ibe aka", "Naanị ọchịchị", "Ịrụ ọrụ nke ọma nke tractor", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Ihe fọdụrụ n'ubi na-azụ anụ, nsị na-azụkwa ala: nri ala na-alaghachi, akụkụ na-enyekwa ibe ha aka." },
            { objective: "O1", q: "Kedu nke bụ ọmụmaatụ ụdị dị iche iche n'ugbo?", options: ["Naanị ọka, kwa oge ubi, n'ubi niile", "Ịkpọ ihe fọdụrụ n'ubi niile ọkụ", "Akpụ, ahụekere, osisi na ewu n'otu ugbo", "Ịzụta nri anụ niile n'obodo mepere emepe"], answer: 2, why: "Ọtụtụ ihe ọkụkụ, anụ ụlọ na osisi ọnụ bụ ụdị dị iche iche, otu n'ime akụkụ 10 nke FAO." }
          ]
        },
        {
          title: "Iweghachi ala tụgburu: ihe ọkụkụ mkpuchi na green manure",
          objectives: ["O2"],
          minutes: 6,
          goal: "Họrọ ihe ọkụkụ mkpuchi ma ọ bụ green manure maka ubi ala ya tụgburu ma kpebie mgbe ị ga-akụ ya na mgbe ị ga-egbutu ya.",
          text: [
            "Ala tụgburu atụfuola ihe ndụ rere ure (organic matter) na nhazi ya: mmiri ozuzo na-agbapụ, ihe ọkụkụ anaghị eto nke ọma, ahịhịa dị ka striga na-ejupụta. Mulch na compost na-enyere aka, mana ọ naghị ezu gị. Ihe ọkụkụ mkpuchi na green manure na-eme ka ihe ndụ rere ure too n'ubi ahụ n'onwe ya.",
            "Ihe ọkụkụ mkpuchi (cover crop) bụ nke a na-akọ karịsịa iji kpuchie ma chebe ala, ọtụtụ mgbe n'etiti oge ubi. Green manure bụ ihe ọkụkụ a na-akọ, wee gbutu ya ma hapụ ya n'elu ala ma ọ bụ tinye ya n'ime ala iji zụọ ya. Legume na-eme ha abụọ ma na-agbakwunye nitrogen: lablab, mucuna (velvet bean), canavalia (jack bean), crotalaria, akịdị (cowpea) na fiofio (pigeon pea) ka a na-eji n'akụkụ dị iche iche nke Africa. Ụfọdụ, dị ka lablab na akịdị, na-enyekwa nri ma ọ bụ nri anụ; mkpụrụ mucuna chọrọ nhazi pụrụ iche tupu mmadụ erie ya, ya mere were ya dị ka ihe ọkụkụ maka ala na nri anụ, ma jụọ ndị ndụmọdụ ugbo.",
            "Enwekwara ike iji osisi nta nwere akwụkwọ dị ka green manure akwụkwọ. N'ọdịda anyanwụ Kenya, ndị ọrụ ugbo na-egbutu akwụkwọ tithonia (Mexican sunflower) n'ogige osisi ma gbasaa ya n'ubi; nchọpụta hụrụ na akwụkwọ ya nwere ọtụtụ nri ala, mana igbutu na iburu ya bụ ọrụ siri ike, ya mere ọ kacha baa uru n'akwụkwọ nri na ihe ọkụkụ ndị ọzọ dị oke ọnụ.",
            "Oge dị mkpa. Kụọ ihe ọkụkụ mkpuchi n'oge ga-eme ka o too nke ọma tupu ọkọchị, ma ọ bụ kụọ ya n'ime ihe ọkụkụ bụ isi izu ole na ole mgbe ị kụchara (relay). Gbutu ya tupu ya na ihe ọkụkụ gị na-esote asọ mpi ma ọ bụ tupu ọ mịa mkpụrụ siri ike, ma hapụ ihe i gbutuuru n'elu ala dị ka mulch. Jụọ onye ndụmọdụ ugbo gị ma ọ bụ ụlọ ọrụ nchọpụta ụdị na ụbọchị dabara mmiri ozuzo gị."
          ],
          steps: ["Gagharịa n'ubi ahụ: ebee ka ọ gbara ọtọ, siri ike ma ọ bụ jupụta na striga?", "Họrọ otu ma ọ bụ ụdị abụọ ihe ọkụkụ mkpuchi ma ọ bụ green manure dabara mmiri ozuzo gị.", "Kpebie: kọọ ya n'etiti oge ubi, kụọ ya n'ime ihe ọkụkụ bụ isi (relay), ma ọ bụ dị ka ala ezumike.", "Dee ụbọchị ịkụ na ụbọchị igbutu.", "Gbutu ya tupu ya na ihe ọkụkụ gị asọ mpi; hapụ ya n'elu ala.", "Chụpụ anụ ụlọ ruo mgbe o mechara ọrụ ya, ma ọ bụ hazie otu unu ga-esi kee ya dị ka nri anụ."],
          words: [["Ala tụgburu (degraded land)", "ala atụfuola aja, ihe ndụ rere ure ma ọ bụ ihe ọkụkụ kpuchiri ya, ya mere ọ na-amịpụta obere ihe."], ["Ihe ọkụkụ mkpuchi (cover crop)", "ihe ọkụkụ a na-akọ karịsịa iji kpuchie ma chebe ala."], ["Green manure", "ihe ọkụkụ a na-akọ, wee gbutu ya ma hapụ ya n'elu ala ma ọ bụ n'ime ya iji zụọ ala."], ["Relay cropping", "ịkụ ihe ọkụkụ nke abụọ n'ime ihe ọkụkụ ka dị n'ubi tupu e wee nke mbụ."]],
          slides: [
            { title: "Mee ka ihe ndụ rere ure too n'ubi", bullets: ["Ala tụgburu: mmiri na-agbapụ, ihe anaghị eto, striga", "Mulch ma ọ bụ compost i nwere anaghị ezu", "Ihe ọkụkụ mkpuchi na green manure na-eme ka o too n'ebe ahụ"] },
            { title: "Ụdị legume ị nwere ike ịhọrọ", bullets: ["Lablab, akịdị, fiofio: na-enyekwa nri ma ọ bụ nri anụ", "Mucuna, canavalia, crotalaria: maka ala na nri anụ", "Ha na-esi n'ikuku agbakwunye nitrogen"] },
            { title: "Green manure akwụkwọ", bullets: ["Akwụkwọ tithonia n'ọdịda anyanwụ Kenya", "O nwere ọtụtụ nri ala; igbutu ya bụ ọrụ siri ike", "Ọ kacha mma n'ihe ọkụkụ dị oke ọnụ"] },
            { title: "Mee ya n'oge kwesịrị ekwesị", bullets: ["Kụọ ya n'oge ma ọ bụ kụọ ya n'ime ihe ọkụkụ bụ isi", "Gbutu ya tupu ọ sọọ mpi ma ọ bụ mịa mkpụrụ siri ike", "Jụọ ndị ndụmọdụ ugbo ihe dabara mmiri ozuzo gị"] }
          ],
          sources: [TITHONIA, FAO_SOM],
          tryIt: "Họrọ ubi gị kacha tụgbuo. Họrọ otu ihe ọkụkụ mkpuchi ma ọ bụ green manure maka ya, ma dee: ihe mere i ji họrọ ya, ụbọchị ịkụ, otu ị ga-esi kụọ ya (n'etiti oge ubi, relay ma ọ bụ ala ezumike) na ụbọchị igbutu. Dee otu ajụjụ ị ga-ajụ onye ndụmọdụ ugbo gị.",
          youCanNow: "ịhọrọ ihe ọkụkụ mkpuchi ma ọ bụ green manure maka ubi ala ya tụgburu ma kpebie mgbe ị ga-akụ ya na mgbe ị ga-egbutu ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ isi ihe dị iche n'etiti ihe ọkụkụ mkpuchi na green manure?", options: ["Ihe ọkụkụ mkpuchi na-abụ osisi mgbe niile", "A na-azụta green manure n'akpa", "Ọ dịghị ihe dị iche", "A na-akọ green manure ka e gbutu ya ma hapụ ya ka ọ zụọ ala"], answer: 3, why: "Ihe ọkụkụ mkpuchi na-echebe ala; a na-akọ green manure karịsịa ka e gbutu ya ma o zụọ ala (ọtụtụ ihe ọkụkụ na-eme ha abụọ)." },
            { objective: "O2", q: "Olee mgbe ị ga-egbutu ihe ọkụkụ mkpuchi a kụrụ tupu ọka?", options: ["Tupu ya na ọka asọ mpi ma ọ bụ mịa mkpụrụ siri ike", "Ọ dịghị mgbe", "Mgbe e wechara ọka", "Naanị ma ọ bụrụ na ifuru ya na-acha purple"], answer: 0, why: "Igbutu ya n'oge kwesịrị ekwesị na-akwụsị mpi ma na-ahapụ mulch maka ihe ọkụkụ na-esote." }
          ]
        },
        {
          title: "Osisi na-alọghachi: FMNR na osisi fatịlaịza",
          objectives: ["O3"],
          minutes: 6,
          goal: "Hazie FMNR ma ọ bụ osisi fatịlaịza maka otu ubi.",
          text: [
            "Ọtụtụ ubi yiri ka ha enweghị osisi ka nwere ogwe osisi dị ndụ na mgbọrọgwụ n'okpuru ala. Farmer-managed natural regeneration (FMNR, ndị ọrụ ugbo na-elekọta osisi ka ha tolite ọzọ n'onwe ha) na-ahapụ ha ka ha tolite ọzọ kama igbutu ha kwa oge ubi. Na Niger, FMNR gbasara site n'otu onye ọrụ ugbo gaa n'onye ọzọ, ma weghachiela osisi n'ala ubi karịrị nde hekta ise, na-enye nri anụ, nkụ, ndò na ihe ubi ka mma.",
            "Nzọụkwụ ndị a, site n'akwụkwọ ntụziaka World Vision na ndị ha na ha na-arụ: nyochaa ubi ahụ maka ogwe osisi na-epuli ma họrọ ụdị bara uru; maka ogwe ọ bụla, debe alaka atọ ruo ise kacha too ogologo ma kwụ ọtọ, gbutu ndị ọzọ; kpachaa alaka akụkụ ruo ihe dị ka ọkara elu alaka ọ bụla, jiri ngwa dị nkọ, na-egbu n'elu elu; laghachi kwa ọnwa ole na ole iwepụ ome ọhụrụ; chebe alaka ndị ahụ pụọ n'anụ ụlọ na ọkụ; mgbe i gbutuuru otu alaka, hapụ nke na-eto eto ka ọ nọchie ya. Kaa alaka ndị ị họọrọ akara ma kwekọrịta iwu na ndị agbata obi gị na obodo gị ka anụ ụlọ na ndị na-egbu osisi hapụ ha.",
            "Ebe ọ na-enweghị ogwe osisi, ị nwere ike ịkụ osisi fatịlaịza: osisi legume dị ka gliricidia, faidherbia (nke a na-ahụkarị n'ubi nwere osisi na Sahel, gụnyere mpaghara ahụekere nke Senegal) ma ọ bụ calliandra, nke akwụkwọ ha na-azụ ala ma ọ bụ anụ ụlọ. Nnwale ogologo oge na Malawi na Zambia hụrụ na ọka a kọrọ ya na gliricidia nyere ihe ubi kwụsiri ike karịa n'afọ dị iche iche karịa ọka nwere naanị fatịlaịza, n'agbanyeghị na ịkpacha osisi ndị ahụ ugboro abụọ ma ọ bụ atọ n'afọ bụ ezigbo ọrụ.",
            "Tupu i gbutu ma ọ bụ ree osisi, lelee iwu ọhịa nke mba gị na by-law nke obodo gị."
          ],
          steps: ["Gagharịa n'ubi ahụ ma kaa akara n'ogwe osisi dị ndụ na osisi na-eto eto.", "Họrọ ụdị bara uru: nri anụ, nkụ, mkpụrụ osisi, ala.", "Debe alaka 3 ruo 5 kwụ ọtọ n'ogwe ọ bụla; gbutu ndị ọzọ.", "Kpachaa alaka akụkụ ruo ọkara elu; ngwa dị nkọ, gbuo n'elu elu.", "Chebe ha pụọ n'anụ ụlọ na ọkụ; kwekọrịta iwu na ndị agbata obi.", "Enweghị ogwe osisi? Hazie osisi fatịlaịza site na ndụmọdụ ndị ndụmọdụ ugbo."],
          words: [["FMNR", "farmer-managed natural regeneration: ịhapụ ogwe osisi na mgbọrọgwụ dị n'ala gị ka ha tolite ọzọ, wee họrọ ma kpachaa alaka kacha mma."], ["Osisi fatịlaịza", "osisi, ọtụtụ mgbe legume, nke akwụkwọ ya na-azụ ala."], ["Ubi nwere osisi (parkland)", "ala ugbo nwere osisi gbasasịrị n'ubi niile."], ["By-law", "iwu obodo ma ọ bụ kansụl obodo kwekọrịtara."]],
          slides: [
            { title: "Ọhịa dị n'okpuru ala", bullets: ["Ogwe osisi na mgbọrọgwụ dị ndụ n'ubi gbara ọtọ", "FMNR na-ahapụ ha ka ha tolite ọzọ", "Niger: osisi alọghachila n'ihe karịrị nde hekta 5"] },
            { title: "Nzọụkwụ FMNR", bullets: ["Họrọ ogwe osisi na ụdị bara uru", "Debe alaka 3 ruo 5 kwụ ọtọ", "Kpachaa ruo ọkara elu; ngwa dị nkọ, gbuo n'elu elu"] },
            { title: "Chebe ma lekọta", bullets: ["Wepụ ome ọhụrụ kwa ọnwa ole na ole", "Chụpụ anụ ụlọ na ọkụ", "Kwekọrịta iwu na obodo"] },
            { title: "Enweghị ogwe osisi? Osisi fatịlaịza", bullets: ["Gliricidia, faidherbia, calliandra", "Ọka kwụsiri ike karịa na nnwale Malawi na Zambia", "Ịkpacha bụ ọrụ; lelee iwu ọhịa"] }
          ],
          sources: [FMNR_STEPS, FMNR_ICRAF, GLIRICIDIA, FAO_AGROFOR],
          tryIt: "Gagharịa n'otu ubi ma gụọ ogwe osisi dị ndụ ma ọ bụ osisi na-eto eto. See eserese ngwa ngwa ma kaa akara n'ndị ị ga-edebe. Dee ụdị osisi ha bụ (ma ọ bụ jụọ mmadụ), ihe ị chọrọ n'aka ha, na otu ị ga-esi chebe ha pụọ n'anụ ụlọ na ọkụ.",
          youCanNow: "ịhazi FMNR ma ọ bụ osisi fatịlaịza maka otu ubi, otu nzọụkwụ n'otu oge.",
          quickCheck: [
            { objective: "O3", q: "Na FMNR, gịnị ka ị na-eme ọtụtụ ome dị n'otu ogwe osisi dị ndụ?", options: ["Gbutu ha niile kwa oge ubi", "Kpọọ ogwe ahụ ọkụ", "Debe alaka atọ ruo ise kacha too ogologo ma kwụ ọtọ, gbutu ndị ọzọ", "Hapụ ome ọ bụla ka o too"], answer: 2, why: "Idebe alaka ole na ole dị mma na-eme ka ha too ngwa ngwa ghọọ osisi bara uru." },
            { objective: "O3", q: "Gịnị mere onye ọrụ ugbo ga-eji kwekọrịta iwu FMNR na ndị agbata obi ya?", options: ["Ka anụ ụlọ na ndị na-egbu osisi hapụ alaka ndị a họọrọ", "Iji ree ogwe osisi ndị ahụ", "N'ihi na osisi na-eto ngwa ngwa mgbe nzukọ gasịrị", "Ọ dịghị mkpa mgbe ọ bụla"], answer: 0, why: "Nkwekọrịta obodo na-echebe alaka ndị ahụ pụọ n'anụ na-ata nri na igbutu mgbe ha na-eto." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụkpụrụ na iweghachi ala",
        questions: [
          { objective: "O1", q: "Ụlọ akwụkwọ ndị ọrụ ugbo n'ubi ebe ndị ọrụ ugbo na ndị nchọpụta na-anwale omume ọnụ bụ ọmụmaatụ nke akụkụ agroecology ole?", options: ["Ịmụ ihe ọnụ", "Ịrụ ọrụ nke ọma nke fatịlaịza", "Ịkọ naanị otu ihe ọkụkụ", "Ihe e si mba ọzọ bubata"], answer: 0, why: "Ndị ọrụ ugbo na ndị nchọpụta na-amụta ihe ọnụ bụ ịmụ ihe ọnụ." },
          { objective: "O1", q: "Kedu omume na-egosi inyere ibe aka?", options: ["Ire ihe fọdụrụ n'ubi niile", "Legume na-agbakwunye nitrogen nke ọka na-esote ga-eji", "Ala ezumike gbara ọtọ", "Ịkpọ ahịhịa fọdụrụ n'ubi ọkụ"], answer: 1, why: "Legume na-enyere ọka aka: akụkụ abụọ nke ugbo na-arụkọ ọrụ ọnụ." },
          { objective: "O2", q: "Otu ubi na Ghana gbara ọtọ ma sie ike mgbe e wechara ihe ubi. Gịnị ka ị nwere ike ịkọ iji chebe ma zụọ ya tupu oge ubi na-esote?", options: ["Ọ dịghị ihe; hapụ ya ka ọ gbaa ọtọ", "Otu ihe ọkụkụ ahụ ọzọ na fatịlaịza karịa", "Ihe ọkụkụ mkpuchi legume dị ka akịdị ma ọ bụ lablab", "Naanị ahịhịa"], answer: 2, why: "Ihe ọkụkụ mkpuchi legume na-echebe ala ma na-agbakwunye nitrogen na ihe ndụ rere ure." },
          { objective: "O2", q: "Akwụkwọ tithonia nwere ọtụtụ nri ala mana igbutu na iburu ya chọrọ ọtụtụ ọrụ aka. Ebee ka ọ kacha baa uru?", options: ["Gbasaa ya ntakịrị n'ubi ọka buru ibu", "N'ihe ọkụkụ dị oke ọnụ dị ka akwụkwọ nri", "Kpọọ ya ọkụ maka ntụ", "Nye naanị ezi"], answer: 1, why: "Nchọpụta n'ọdịda anyanwụ Kenya hụrụ na ọrụ ahụ kacha baa uru n'ihe ọkụkụ dị oke ọnụ." },
          { objective: "O3", q: "Ruo ebee ka ị ga-akpacha alaka akụkụ n'alaka FMNR na-eto eto?", options: ["Ọ dịghị ebe ọ bụla", "Gbutu alaka niile n'ala", "Ruo n'elu elu", "Ruo ihe dị ka ọkara elu alaka ahụ"], answer: 3, why: "Ịkpacha ruo n'elu nke ukwuu na-eme ka alaka ghara inwe ike megide ifufe na anụ ụlọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ugbo na-azụ onwe ya",
      lessons: [
        {
          title: "Ihe ọkụkụ, anụ ụlọ na ụdị ndụ dị iche iche na-arụkọ ọrụ",
          objectives: ["O4"],
          minutes: 5,
          goal: "See otu nri anụ, nsị anụ na ihe fọdụrụ n'ubi si aga n'etiti ihe ọkụkụ na anụ ụlọ gị.",
          text: [
            "N'ugbo nwere ihe ọkụkụ na anụ ụlọ, ha nwere ike ịzụ ibe ha. Ihe fọdụrụ n'ubi, ihe ọkụkụ mkpuchi, akwụkwọ osisi na ihe fọdụrụ na mkpụrụ ọka na-azụ anụ ụlọ; anụ ụlọ na-eme ha ka ha ghọọ mmiri ara ehi, anụ, akwa, ike ịdọ ihe na nsị; nsị na mamịrị anụ na-alaghachi ịzụ ala. Mgbe njikọ ndị a siri ike, obere ego na-apụ n'ugbo.",
            "See ya. Tinye ubi gị, anụ ụlọ gị, ụlọ gị na ebe compost ma ọ bụ nsị anụ dị n'akwụkwọ, wee see akụ: ahịhịa ọka gaa n'ewu, nsị gaa n'ubi akwụkwọ nri, nsị ọkụkọ gaa na compost, mmiri ọdọ azụ gaa n'akwụkwọ nri n'ugbo azụ. Wee kaa akara n'ebe ihe na-ehie (leak): ihe fọdụrụ n'ubi a kpọrọ ọkụ, nsị a hapụrụ n'anwụ na mmiri ozuzo, mamịrị furu efu, ihe ubi a rere n'enweghị ihe ọ bụla laghachiri. Ebe ọ bụla ihe na-ehie bụ ebe ị ga-enweta uru.",
            "Ụdị ndụ dị iche iche (biodiversity) bụkwa akụkụ nke usoro ahụ. Osisi, ogige osisi, ahịrị ahịhịa na ihe ọkụkụ na-eme ifuru na-enye ụmụ ahụhụ na nnụnụ na-eri ahụhụ na-emebi ihe ọkụkụ ebe obibi, na-enyekwa aṅụ na-eme ka agwa, tomato na kọfị mịa mkpụrụ ebe obibi. Ihe ọkụkụ na ụdị dị iche iche na-agbasa ihe egwu. Hapụ ụfọdụ akụkụ ka ọ dị n'onwe ya, ezụla ọgwụ mgbe ọ na-adịghị mkpa, ma kọọ ihe karịrị otu ihe ọkụkụ.",
            "Lezie anya na nhazi: anụ ụlọ chọrọ nri n'oge ọkọchị niile, ihe fọdụrụ n'ubi e ji zụọ anụ anọghịkwa n'elu ala dị ka mulch. Kpebie oke ga-aga ebe ọ bụla, ma kọọ nri anụ ọzọ (ahịrị ahịhịa, osisi nri anụ, lablab) ka ị ghara ịhọrọ otu."
          ],
          steps: ["See ubi gị, anụ ụlọ gị, ụlọ gị na ebe nsị anụ dị.", "See akụ maka ihe ọ bụla na-aga: nri anụ, ihe fọdụrụ n'ubi, nsị, mmiri.", "Kaa akara n'ebe ihe na-ehie: ịkpọ ọkụ, nsị na mamịrị furu efu, ihe na-alaghachighị.", "Kaa akara n'ebe maka ụdị ndụ dị iche iche: ogige osisi, osisi, ifuru, akụkụ hapụrụ n'onwe ya.", "Họrọ otu ebe ihe na-ehie ị ga-emechi n'oge ubi a."],
          words: [["Ugbo ihe ọkụkụ na anụ ụlọ (mixed farming)", "ịkọ ihe ọkụkụ na ịzụ anụ ụlọ n'otu ugbo ka ha na-akwado ibe ha."], ["Otu nri ala si aga (nutrient flow)", "otu nri ala si agagharị n'ugbo, dịka ọmụmaatụ site na nri anụ gaa na nsị gaa n'ala."], ["Ụdị ndụ dị iche iche (biodiversity)", "ụdị ihe ọkụkụ, anụmanụ, ụmụ ahụhụ na ihe ndụ dị n'ala dị iche iche n'ugbo na gburugburu ya."], ["Ndị iro okike (natural enemies)", "ụmụ ahụhụ, nnụnụ na anụmanụ ndị ọzọ na-eri ahụhụ na-emebi ihe ọkụkụ."]],
          slides: [
            { title: "Ihe ọkụkụ na-azụ anụ, anụ na-azụ ala", bullets: ["Ihe fọdụrụ n'ubi, nri anụ, akwụkwọ osisi gaa n'anụ ụlọ", "Mmiri ara, anụ, akwa, ike na nsị na-alaghachi", "Njikọ siri ike = obere ego na-apụ"] },
            { title: "See otu ihe si aga n'ugbo gị", bullets: ["Akụ: nri anụ, nsị, ihe fọdụrụ n'ubi, mmiri", "Kaa akara n'ebe ihe na-ehie: ọkụ, nsị furu efu, mamịrị", "Ebe ọ bụla ihe na-ehie bụ uru na-eche gị"] },
            { title: "Ụdị ndụ dị iche iche na-arụrụ gị ọrụ", bullets: ["Ogige osisi na ifuru na-ebi ndị na-eri ahụhụ na aṅụ", "Ọtụtụ ihe ọkụkụ na-agbasa ihe egwu", "Zụọ ọgwụ naanị mgbe ọ dị mkpa"] },
            { title: "Kee nri anụ na mulch nke ọma", bullets: ["Ihe fọdụrụ n'ubi enweghị ike ịbụ nri anụ na mulch n'otu oge", "Kọọ nri anụ ọzọ: ahịrị ahịhịa, lablab, osisi"] }
          ],
          sources: [FAO_10, FAO_AGROFOR],
          tryIt: "See map otu ihe si aga n'ugbo gị, nwere opekata mpe akụ atọ n'etiti ihe ọkụkụ na anụ ụlọ. Kaa akara n'opekata mpe otu ebe ihe na-ehie na otu ebe ị nwere ike ịgbakwunye ụdị ndụ dị iche iche. Dee otu ebe ihe na-ehie ị ga-emechi n'oge ubi a.",
          youCanNow: "ise otu nri anụ, nsị anụ na ihe fọdụrụ n'ubi si aga n'ugbo gị ma chọta ebe ihe na-ehie ị ga-emechi.",
          quickCheck: [
            { objective: "O4", q: "Na map otu ihe si aga, kedu nke n'ime ndị a bụ ebe ihe na-ehie?", options: ["Ahịhịa ọka e nyere ewu", "Nsị a gbasara n'ubi akwụkwọ nri", "Nsị a hapụrụ n'anwụ na mmiri ozuzo ruo mgbe mmiri sachapụrụ ya", "Nsị ọkụkọ a gbakwunyere na compost"], answer: 2, why: "Nsị a hapụrụ n'anwụ na mmiri ozuzo na-atụfu nri ala kwesịrị ịlaghachi n'ala." },
            { objective: "O4", q: "Gịnị mere a ga-eji debe ogige osisi, osisi na ihe ọkụkụ na-eme ifuru gburugburu ubi?", options: ["Ha na-ebi ndị iro okike nke ahụhụ na ndị na-eme ka ihe mịa mkpụrụ", "Ha na-ebelata ihe ubi mgbe niile", "Ha bụ naanị maka ịchọ mma", "Ha na-akwụsị mmiri ozuzo"], answer: 0, why: "Ebe obibi maka ndị na-eri ahụhụ na aṅụ bụ ọrụ efu a na-arụrụ ihe ọkụkụ gị." }
          ]
        },
        {
          title: "Ibelata ego fatịlaịza e si mba ọzọ bubata",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọọ akpa fatịlaịza ole nri ala si n'ugbo nwere ike dochie, na ego ị ga-echekwa.",
          text: [
            "Ọtụtụ fatịlaịza mineral a na-eji n'Africa si mba ọzọ, ya mere ọnụ ahịa ya na-eso ahịa ụwa na ọnụ ego mba ọzọ (exchange rate). Agroecology na-achọ ka ị chọọ obere ya, ọ bụghị mgbe niile ka ị ghara iji ya ma ọlị. Malite n'ihe i jiri n'oge ubi gara aga: akpa ole, ụdị ole, n'ubi ole, na ego ole ha were.",
            "Wee depụta nri ala si n'ugbo ị nwere ike ịgbakwunye: ihe ọkụkụ mkpuchi legume na ihe ọkụkụ a kọrọ ọnụ (nitrogen), osisi fatịlaịza na green manure akwụkwọ, nsị na mamịrị anụ karịa nke e debere nke ọma, bio-slurry ma ọ bụrụ na i nwere biodigester, na ihe fọdụrụ n'ubi a hapụrụ n'ubi. Ijikọ obere fatịlaịza mineral na ndị a na-arụkarị ọrụ karịa iji naanị otu n'ime ha. Na nnwale Malawi, ọka nwere gliricidia gbakwunyere ọkara fatịlaịza a tụrụ aro mere ihe dị ka ọka nwere fatịlaịza zuru ezu.",
            "Kọọ, wee nwalee. Dịka ọmụmaatụ (nọmba e mepụtara): otu nwanyị ọrụ ugbo na Kakamega jiri akpa 4 n'otu acre, KES 3,500 otu akpa. Site n'ịkụ lablab n'ime ọka (relay) na nsị karịa, ọ na-eme atụmatụ ịnwale akpa 2 n'ọkara ubi ahụ na akpa 4 n'ọkara nke ọzọ, ma tụnyere ihe ubi ha. Ọ bụrụ na ihe ubi ha hà, ọ ga-echekwa akpa 2, KES 7,000, n'acre ahụ. Ebelatala fatịlaịza na mberede n'ala gị niile.",
            "Rịọ onye ndụmọdụ ugbo gị ma ọ bụ ụlọ nnwale ala ka ha leleta atụmatụ gị megide nsonaazụ nnwale ala gị, ma zụta fatịlaịza mineral naanị n'aka ndị na-ere ihe ugbo e debanyere aha (registered agro-dealers), n'akpa a kara akara mechie emechi."
          ],
          steps: ["Dee fatịlaịza i jiri n'oge ubi gara aga: akpa, ụdị, ubi, ego.", "Depụta nri ala si n'ugbo ị nwere ike ịgbakwunye.", "Hazie obere fatịlaịza n'otu akụkụ ubi, ya na nri ala si n'ugbo.", "Debe otu ahịrị nwere fatịlaịza zuru ezu iji tụnyere.", "Kọọ akpa na ego ị ga-echekwa ma ọ bụrụ na ihe ubi ahụ adịghị ebelata.", "Leleta atụmatụ ahụ na ndị ndụmọdụ ugbo; mụbaa naanị ihe na-arụ ọrụ."],
          words: [["Fatịlaịza mineral", "fatịlaịza e mepụtara n'ụlọ ọrụ, dị ka urea, DAP ma ọ bụ NPK, nke a na-erekarị n'akpa."], ["Integrated soil fertility management", "ijikọ nri ala sitere n'ihe ndụ (nsị anụ, legume, ihe fọdụrụ n'ubi) na obere fatịlaịza mineral."], ["Ahịrị ntụnyere (comparison strip)", "akụkụ ubi a kọrọ n'ụzọ ochie ka i nwee ike ịtụnyere nsonaazụ n'ụzọ ziri ezi."]],
          slides: [
            { title: "Ihe mere a ga-eji belata fatịlaịza mba ọzọ", bullets: ["Ọnụ ahịa na-eso ahịa ụwa na ọnụ ego mba ọzọ", "Chọọ obere ya, ọ bụghị mgbe niile ka ọ ghara ịdị", "Malite n'akpa na ego oge ubi gara aga"] },
            { title: "Nri ala si n'ugbo", bullets: ["Ihe ọkụkụ mkpuchi legume, ihe a kọrọ ọnụ, osisi fatịlaịza", "Nsị anụ, mamịrị, bio-slurry, ihe fọdụrụ n'ubi", "Jikọọ ha na obere fatịlaịza mineral"] },
            { title: "Nwalee tupu i belata", bullets: ["Ọmụmaatụ: akpa 2 na akpa 4 n'ọkara ubi abụọ", "Otu ihe ubi = akpa 2, KES 7,000 echekwara (e mepụtara)", "Ebelatala ya niile n'otu oge"] },
            { title: "Leleta ma zụta n'enweghị nsogbu", bullets: ["Ndị ndụmọdụ ugbo ma ọ bụ ụlọ nnwale ala na-eleleta atụmatụ gị", "Ndị na-ere ihe ugbo e debanyere aha, akpa mechiri emechi"] }
          ],
          sources: [GLIRICIDIA, HANDBOOK_4R],
          tryIt: "Dee fatịlaịza i jiri n'oge ubi gara aga n'otu ubi. Depụta ebe abụọ nri ala si n'ugbo ị ga-agbakwunye. Hazie nnwale n'ọkara ubi nwere obere fatịlaịza, ma kọọ akpa na ego ị ga-echekwa ma ọ bụrụ na ihe ubi adịghị ebelata, n'ego mba gị.",
          youCanNow: "ịkọ oke fatịlaịza a zụrụ azụ nri ala si n'ugbo nwere ike dochie, ma hazie nnwale ziri ezi tupu i belata.",
          quickCheck: [
            { objective: "O5", q: "Ị chọrọ iji obere fatịlaịza. Gịnị bụ nzọụkwụ mbụ kacha enweghị nsogbu?", options: ["Kwụsị fatịlaịza niile n'ubi niile n'otu oge", "Mee ka fatịlaịza ahụ dị okpukpu abụọ", "Zụta fatịlaịza na-enweghị akara n'ihi na ọ dị ọnụ ala", "Nwalee obere fatịlaịza gbakwunyere nri ala si n'ugbo n'otu akụkụ ubi, n'akụkụ ahịrị nwere fatịlaịza zuru ezu"], answer: 3, why: "Nnwale n'akụkụ n'akụkụ na-egosi ma obere fatịlaịza ahụ ọ na-arụ ọrụ tupu i tinye ihe ubi gị niile n'ihe egwu." },
            { objective: "O5", q: "Otu onye ọrụ ugbo na Nigeria jiri akpa 6, NGN 40,000 otu akpa, wee belata ya ruo 4 ma nweta otu ihe ubi ahụ. Ego ole ka o chekwara?", options: ["NGN 40,000", "NGN 80,000", "NGN 240,000", "Ọ dịghị ihe ọ bụla"], answer: 1, why: "Akpa 2 × NGN 40,000 = NGN 80,000 (nọmba ọmụmaatụ)." }
          ]
        },
        {
          title: "Ịtụ otu ala si aka mma site n'oge ubi ruo n'oge ubi",
          objectives: ["O6", "O2", "O5"],
          minutes: 5,
          goal: "Detuo ihe dị mfe gbasara ala na ugbo n'otu oge kwa oge ubi.",
          text: [
            "Iweghachi ala na-aga nwayọọ. Ihe ubi nwere ike ọ gaghị arị elu na mberede n'oge ubi mbụ, ya mere ị chọrọ ihe ịrịba ama ndị ọzọ iji hụ ma ala ahụ ọ na-alọghachi. Tụọ n'otu ebe ahụ, n'otu ọnwa ahụ, kwa oge ubi, ma dee ya.",
            "Ihe ndị dị mfe ị ga-atụ: ihe kpuchiri ala (oke ala ihe ọkụkụ ma ọ bụ mulch kpuchiri; jiri anya kọọ ya ma ọ bụ gụọ ya n'otu square); ikpuru ala (gwuo ala ruo otu ogwe ọgụ ma gụọ ha); otu mmiri si abanye n'ala (infiltration: tinye tin e gbupụrụ isi abụọ ya n'ala, wụnye mmiri ma gụọ oge ọ ga-ewe ịbanye); isi na mkpụrụ ala (ọ na-agbaji ka obere mkpụrụ ma ọ bụ ka nnukwu mkpọkọ siri ike?); foto ala site n'otu ebe ahụ; ihe ubi si n'otu ubi a kara akara; na akpa fatịlaịza na ego i mefuru.",
            "Kwa afọ ole na ole, nnwale ala n'ụlọ nnwale nwere ike igosi ihe ndụ rere ure na nri ala (lee \"Ahụike Ala na Ọmụmụ Ya\" maka otu esi ewe ala). Tụnyere ubi i weghachiri na ubi a na-agbanweghị ma ọ bụrụ na ị nwere ike.",
            "Ekwentị na-enyere aka: see foto site n'otu ebe ahụ, debe nọmba gị n'ime ngwa ndetu ma ọ bụ spreadsheet, ma rịọ ngwa enyemaka AI ka o mee ha ka ha ghọọ tebụl ma ọ bụ chaatị dị mfe. Nọmba ndị ahụ si n'ubi gị."
          ],
          steps: ["Jiri osisi ma ọ bụ nkume kaa akara n'ebe atọ n'ubi ahụ.", "Họrọ opekata mpe ihe anọ ị ga-atụ: ihe kpuchiri ala, ikpuru, infiltration, mkpụrụ ala, foto, ihe ubi, ego.", "Detuo ha n'otu ọnwa ahụ kwa oge ubi.", "Tụnyere ha na oge ubi gara aga na ubi a na-agbanweghị.", "Leghachi anya n'atụmatụ gị: debe ihe na-arụ ọrụ, gbanwee ihe na-anaghị arụ."],
          words: [["Ihe ịrịba ama (indicator)", "ihe dị mfe ị na-atụ iji hụ ma ihe ọ na-aka mma ma ọ bụ na-aka njọ."], ["Infiltration", "otu mmiri si eme ngwa ngwa abanye n'ala."], ["Ihe kpuchiri ala (ground cover)", "oke elu ala ihe ọkụkụ ma ọ bụ mulch kpuchiri."], ["Baseline", "ihe mbụ i tụrụ, nke a na-eji tụnyere ndị ọzọ na-esote."]],
          slides: [
            { title: "Mgbanwe na-aga nwayọọ chọrọ ịtụ", bullets: ["Ihe ubi nwere ike ọ gaghị arị elu n'oge ubi mbụ", "Otu ebe, otu ọnwa, kwa oge ubi", "Dee ya"] },
            { title: "Ihe dị mfe ị ga-atụ", bullets: ["Ihe kpuchiri ala na ọnụ ọgụgụ ikpuru ala", "Infiltration: gụọ oge mmiri ji abanye", "Mkpụrụ ala, foto, ihe ubi, ego fatịlaịza"] },
            { title: "Tụnyere", bullets: ["Na oge ubi gara aga (baseline gị)", "Na ubi a na-agbanweghị", "Nnwale ụlọ nnwale kwa afọ ole na ole"] },
            { title: "Ekwentị gị na-enyere aka", bullets: ["Foto site n'otu ebe ahụ", "Nọmba n'ime ndetu ma ọ bụ spreadsheet", "AI nwere ike ihazi ha ka ha bụrụ tebụl"] }
          ],
          sources: [FAO_SOM, FAO_AE],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ iweghachi ala nke oge ubi atọ maka otu ubi, ya na eserese. Wee were baseline gị taa: kaa akara n'ebe atọ ma detuo opekata mpe ihe anọ (dịka ọmụmaatụ ihe kpuchiri ala, ọnụ ọgụgụ ikpuru, oge infiltration na foto).",
          youCanNow: "ịtụ ala na ugbo gị site n'ihe ịrịba ama dị mfe kwa oge ubi ma jiri ha kpee ikpe atụmatụ iweghachi ala gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere a ga-eji tụọ n'otu ebe ahụ n'otu ọnwa ahụ kwa oge ubi?", options: ["Ọ na-adị mma ilele anya", "Ka ntụnyere ahụ zie ezi ma gosi ezi mgbanwe", "N'ihi na ikpuru ala na-apụta naanị n'otu ọnwa", "Iji akwụkwọ karịa"], answer: 1, why: "Otu ebe na otu oge na-ewepụ ihe ndị ọzọ kpatara mgbanwe, ya mere mgbanwe na-egosi ala ahụ." },
            { objective: "O6", q: "Mmiri dị na tin infiltration gị na-abanye ngwa ngwa karịa n'afọ gara aga. Gịnị ka nke a na-egosi?", options: ["Ala ahụ na-aka njọ", "Tin ahụ agbajiela", "Ọ dịghị ihe ọ bụla", "Nhazi ala na-aka mma ma na-ejide mmiri ozuzo karịa"], answer: 3, why: "Infiltration ngwa ngwa pụtara na mmiri ozuzo karịa na-abanye n'ala kama ịgbapụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ugbo na-azụ onwe ya",
        questions: [
          { objective: "O4", q: "Kedu akụ kwesịrị ịdị na map otu ihe si aga n'etiti ihe ọkụkụ na anụ ụlọ?", options: ["Ahịhịa ọka gaa n'ewu, nsị ewu gaa n'ubi ọka", "Fatịlaịza site n'obodo mepere emepe gaa n'ụlọ ahịa", "Mmiri ozuzo site na mbara igwe gaa n'osimiri", "Kredit ekwentị gaa n'aka onye ọrụ ugbo"], answer: 0, why: "Nri gaa n'anụ ụlọ na nsị laghachi n'ubi bụ otu nri ala ugbo n'onwe ya si aga." },
          { objective: "O4", q: "A chọrọ ihe fọdụrụ n'ubi dị ka nri anụ n'oge ọkọchị na dị ka mulch. Gịnị kacha enyere aka?", options: ["Kpọọ ọkara ya ọkụ", "Kọọ nri anụ ọzọ dị ka ahịrị ahịhịa, lablab ma ọ bụ osisi nri anụ", "Ree anụ ụlọ ndị ahụ", "Hapụ ubi ahụ ka ọ gbaa ọtọ"], answer: 1, why: "Nri anụ ọzọ na-ebelata mpi dị n'etiti inye anụ nri na ikpuchi ala." },
          { objective: "O5", q: "Gịnị ka nnwale ogologo oge na Malawi hụrụ maka ọka nwere gliricidia gbakwunyere ọkara fatịlaịza?", options: ["Ọ dara mgbe niile", "Ọ chọrọ fatịlaịza okpukpu abụọ", "Ihe ubi ya dị ihe dị ka nke ọka nwere fatịlaịza zuru ezu", "Osisi ahụ gburu ọka"], answer: 2, why: "Gliricidia gbakwunyere ọkara fatịlaịza nyere ihe ubi yiri nke fatịlaịza zuru ezu na Makoka." },
          { objective: "O5", q: "Ebee ka ị ga-azụta fatịlaịza mineral ị ka na-eji?", options: ["N'aka onye ọ bụla na-ere n'akụkụ ụzọ nwere akpa meghere emeghe", "Site na mgbasa ozi n'ịntanetị na-enweghị adreesị", "Site n'akpa fọdụrụ n'aka onye agbata obi", "N'aka onye na-ere ihe ugbo e debanyere aha, n'akpa mechiri emechi"], answer: 3, why: "Ndị na-ere ahịa e debanyere aha na akpa mechiri emechi na-ebelata ihe egwu nke fatịlaịza adịgboroja ma ọ bụ nke a gwakọtara." },
          { objective: "O6", q: "Gịnị bụ baseline?", options: ["Ala nke ubi ahụ", "Otu ụdị fatịlaịza", "Ihe mbụ a tụrụ nke a na-eji tụnyere ndị na-esote", "Ihe ubi ikpeazụ ị ga-ewe"], answer: 2, why: "Na-enweghị baseline, ị gaghị ama ma ihe ọ ka mma." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Agroecology na Iweghachi Ndụ n'Ala",
    questions: [
      { objective: "O1", q: "Otu ole kọwara akụkụ 10 nke agroecology?", options: ["FIFA", "FAO", "Otu ụlọ ọrụ mkpụrụ", "Naanị World Bank"], answer: 1, why: "Mba ndị otu FAO nabatara akụkụ 10 nke agroecology n'afọ 2019." },
      { objective: "O1", q: "Ịlaghachi ihe fọdụrụ n'ubi na nsị anụ n'ala na-eji ụkpụrụ ole?", options: ["Ịkọ naanị otu ihe ọkụkụ", "Ọchịchị", "Ihe e si mba ọzọ bubata", "Iweghachi ihe n'ala"], answer: 3, why: "Ịlaghachi ihe fọdụrụ n'ubi na nsị anụ na-eweghachi nri ala." },
      { objective: "O1", q: "Ire akwụkwọ nri nye ụlọ akwụkwọ obodo na ịzụta mkpụrụ n'aka otu cooperative obodo bụ ọmụmaatụ nke:", options: ["Ịrụ ọrụ nke ọma nke tractor", "Inyere ibe aka nke ahụhụ", "Akụ na ụba okirikiri na nke ịdị n'otu", "Mbuze ala"], answer: 2, why: "Ịzụ na ire ihe n'obodo n'ụzọ ziri ezi bụ akụkụ akụ na ụba okirikiri na nke ịdị n'otu." },
      { objective: "O2", q: "Kedu ihe ọkụkụ bụ legume a na-ejikarị dị ka ihe ọkụkụ mkpuchi ma ọ bụ green manure?", options: ["Ọka", "Sorghum", "Osikapa", "Lablab"], answer: 3, why: "Lablab bụ legume na-ekpuchi ala, na-agbakwunye nitrogen ma na-enye nri anụ." },
      { objective: "O2", q: "Gịnị bụ relay cropping?", options: ["Ịkụ ihe ọkụkụ nke abụọ n'ime ihe ọkụkụ ka dị n'ubi tupu e wee nke mbụ", "Ịkpọ ihe fọdụrụ n'ubi ọkụ n'ahịrị", "Ịkụ naanị otu ugboro n'afọ abụọ ọ bụla", "Iji ụgbọala ebugharị ihe ọkụkụ"], answer: 0, why: "Relay cropping na-ahapụ ihe ọkụkụ mkpuchi ka ọ malite ito tupu e wee ihe ọkụkụ bụ isi." },
      { objective: "O2", q: "Gịnị mere a ga-eji gbutu green manure tupu ọ mịa mkpụrụ siri ike?", options: ["Mkpụrụ ya bụ nsi nye ala", "Ọ na-akwụsị ya ịghọ ahịhịa na ịsọ mpi na ihe ọkụkụ na-esote", "Mkpụrụ siri ike na-eme ka mmiri zoo", "Iwu chọrọ ya"], answer: 1, why: "Igbutu ya n'oge na-egbochi mpi na ome ndị a na-achọghị." },
      { objective: "O2", q: "Gịnị bụ ala tụgburu?", options: ["Ala nwere osisi karịrị akarị", "Ala dị n'okpuru mmiri", "Ala atụfuola aja, ihe ndụ rere ure ma ọ bụ ihe kpuchiri ya, ma na-amịpụta obere ihe", "Ala nwere akwụkwọ ikike"], answer: 2, why: "Ala tụgburu atụfuola ihe ndị na-eme ka ọ mịa mkpụrụ." },
      { objective: "O3", q: "Gịnị ka FMNR na-eji eweghachi osisi?", options: ["Naanị osisi nta a zụrụ azụ", "Ogwe osisi, mgbọrọgwụ na mkpụrụ dị ndụ nọbu n'ala", "Osisi plastik", "Ịgba fatịlaịza n'ọgwụ"], answer: 1, why: "FMNR na-echebe ma na-akpacha ihe na-eto ọzọ site n'ala." },
      { objective: "O3", q: "Ihe dị ka ala ugbo ole na Niger ka osisi alọghachila site na FMNR?", options: ["Ihe dị ka hekta 10", "Ihe dị ka hekta 500", "Ọ dịghị nke ọ bụla", "Ihe karịrị nde hekta ise"], answer: 3, why: "FMNR gbasara site n'otu onye ọrụ ugbo gaa n'onye ọzọ ruo ihe karịrị nde hekta ise na Niger." },
      { objective: "O3", q: "Mgbe ị na-akpacha alaka FMNR, ị kwesịrị:", options: ["Iji ngwa dị nkọ ma gbuo n'elu elu", "Iji ngwa kpọrọ nkụ ma gbuo n'ala ala", "Ịkpụpụ ogbugbo osisi", "Ịkpacha ruo n'elu elu"], answer: 0, why: "Ebe e ji ngwa dị nkọ bipụ n'elu elu na-agwọ ngwa ngwa ma na-emebi obere ihe." },
      { objective: "O3", q: "Kedu osisi fatịlaịza a na-ahụkarị n'ubi nwere osisi na Sahel dị ka mpaghara ahụekere nke Senegal?", options: ["Eucalyptus", "Faidherbia", "Mango", "Pine"], answer: 1, why: "Faidherbia bụ osisi legume a na-edebe n'ọtụtụ ubi nwere osisi na Sahel." },
      { objective: "O4", q: "Kedu nke bụ ebe ihe na-ehie na map otu nri ala si aga n'ugbo?", options: ["Nsị a gbasara n'ubi", "Ihe fọdụrụ n'ubi e nyere ewu", "Ịkpọ ihe fọdụrụ n'ubi ọkụ", "Nsị ọkụkọ dị na compost"], answer: 2, why: "Ịkpọ ọkụ na-eme ka nri ala na ihe ndụ rere ure gbaa n'anwụrụ ọkụ." },
      { objective: "O4", q: "Olee otu ogige osisi na ihe ọkụkụ na-eme ifuru si enyere ihe ọkụkụ aka?", options: ["Ha na-ebi ndị na-eri ahụhụ na ndị na-eme ka ihe mịa mkpụrụ", "Ha na-akpọta ahụhụ karịa mgbe niile", "Ha na-eme ka ala gbaa uka (acid)", "Ha na-egbochi mmiri ozuzo iru ihe ọkụkụ"], answer: 0, why: "Ebe obibi maka ndị iro okike na aṅụ bụ ọrụ efu a na-arụrụ ihe ọkụkụ." },
      { objective: "O4", q: "N'ugbo tilapia na akwụkwọ nri, kedu njikọ bara uru?", options: ["Ịtụba ihe mkpofu azụ n'osimiri", "Iji mmiri ọdọ azụ gbaa akwụkwọ nri mmiri", "Ịgbapụ mmiri ọdọ ahụ n'okporo ụzọ", "Ịkpọ akwụkwọ nri ọkụ"], answer: 1, why: "Mmiri ọdọ nwere nri ala na-azụ akwụkwọ nri: njikọ ihe ọkụkụ na anụ." },
      { objective: "O5", q: "Gịnị mere ọnụ ahịa fatịlaịza mineral ji agbanwe nke ukwuu n'ọtụtụ mba Africa?", options: ["A na-akọ ya n'ugbo", "Ọ dabere na mmiri ozuzo", "Ọ naghị agbanwe agbanwe", "A na-esi mba ọzọ bubata ọtụtụ ya, ya mere ọ na-eso ọnụ ahịa ụwa na ọnụ ego mba ọzọ"], answer: 3, why: "Ihe e si mba ọzọ bubata na-eso ahịa ụwa na mgbanwe ego." },
      { objective: "O5", q: "Otu nwanyị ọrụ ugbo na Ghana jiri akpa 5, GHS 400 otu akpa, wee belata ya ruo 3 ma nweta otu ihe ubi ahụ. Ego ole ka o chekwara?", options: ["GHS 800", "GHS 400", "GHS 2,000", "GHS 1,200"], answer: 0, why: "Akpa 2 × GHS 400 = GHS 800 (nọmba ọmụmaatụ)." },
      { objective: "O5", q: "Gịnị bụ integrated soil fertility management?", options: ["Iji naanị fatịlaịza mineral", "Ịghara iji nri ala ọ bụla", "Ijikọ nri ala sitere n'ihe ndụ na obere fatịlaịza mineral", "Ịnwale ala kwa izu"], answer: 2, why: "Ọ na-agwakọta ihe ndụ na mineral ka nke ọ bụla rụkwuo ọrụ nke ọma." },
      { objective: "O6", q: "Kedu nke bụ ihe dị mfe a na-atụ iji hụ na ala na-aka mma?", options: ["Agba ekwentị gị", "Otu mmiri si eme ngwa ngwa abanye n'ala", "Ọnụ ahịa ọka n'obodo mepere emepe", "Ọnụ ọgụgụ ndị ọbịa"], answer: 1, why: "Infiltration ngwa ngwa na-egosi nhazi ala ka mma." },
      { objective: "O6", q: "Gịnị mere a ga-eji tụnyere ubi i weghachiri na ubi a na-agbanweghị?", options: ["Iji hụ ma mgbanwe ahụ si n'omume gị ọ bụghị naanị ihu igwe", "Iji mkpụrụ karịa", "N'ihi na ndị agbata obi na-ajụ", "Ọ dịghị ihe ọ na-agbanwe"], answer: 0, why: "Ubi ntụnyere na-egosi ihe gaara eme n'agbanyeghị." },
      { objective: "O6", q: "Ihe ole ka ị ga-atụ ma detuo kwa oge ubi n'ubi ị na-eweghachi?", options: ["Ọ dịghị nke ọ bụla", "Otu, naanị ihe ubi", "Naanị mmiri ozuzo", "Opekata mpe anọ, dị ka ihe kpuchiri ala, ikpuru, infiltration na ihe ubi"], answer: 3, why: "Ọtụtụ ihe a tụrụ na-egosi mgbanwe ọbụlagodi tupu ihe ubi arị elu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 6, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma nwaa ọzọ.",
    criteria: [
      { name: "Akpọrọ ụkpụrụ aha", objective: "O1", notYet: "Atụmatụ ahụ ekwughị ụkpụrụ agroecology ndị o ji.", meets: "E jikọrọ omume ọ bụla dị n'atụmatụ ahụ na ụkpụrụ agroecology.", exceeds: "O ji opekata mpe ụkpụrụ anọ dị iche iche, gụnyere otu n'ime akụkụ gbasara ndị mmadụ." },
      { name: "Ihe ọkụkụ mkpuchi ma ọ bụ green manure", objective: "O2", notYet: "Ọ dịghị ihe ọkụkụ mkpuchi ma ọ bụ green manure, ma ọ bụ enweghị ụbọchị.", meets: "Ụdị dabara mmiri ozuzo, ya na ụbọchị ịkụ na ụbọchị igbutu.", exceeds: "Ọ na-akọwakwa otu o si dabara na nri anụ na ihe ọkụkụ bụ isi, e lelekwara ya na ndị ndụmọdụ ugbo." },
      { name: "Osisi", objective: "O3", notYet: "Ọ dịghị atụmatụ osisi, ma ọ bụ osisi na-enweghị nchebe.", meets: "FMNR ma ọ bụ osisi fatịlaịza nwere alaka ma ọ bụ ụdị, ịkpacha na nchebe pụọ n'anụ ụlọ na ọkụ.", exceeds: "O nwere nkwekọrịta obodo ma ọ bụ by-law, na otu a ga-esi gbutu alaka ma nọchie ha." },
      { name: "Njikọ ihe ọkụkụ na anụ ụlọ", objective: "O4", notYet: "Ọ dịghị map otu ihe si aga, ma ọ bụ naanị otu njikọ.", meets: "Map otu ihe si aga nwere opekata mpe njikọ atọ na otu ebe ihe na-ehie a ga-emechi.", exceeds: "Ọ na-egosi otu e si kee ihe fọdụrụ n'ubi n'etiti nri anụ na mulch na ebe a gbakwunyere ụdị ndụ dị iche iche." },
      { name: "Ego fatịlaịza echekwara", objective: "O5", notYet: "Enweghị atụmatụ ọnụ ọgụgụ, ma ọ bụ na-eme atụmatụ ịkwụsị fatịlaịza n'ala niile n'otu oge.", meets: "Ọ na-akọ akpa na ego a ga-echekwa n'ego obodo, ya na nnwale ziri ezi megide ahịrị nwere fatịlaịza zuru ezu.", exceeds: "E lelere atụmatụ ahụ na ndị ndụmọdụ ugbo ma ọ bụ nsonaazụ nnwale ala, ya na iwu maka mgbe a ga-amụba ya." },
      { name: "Ihe a tụrụ site n'oge ubi ruo n'oge ubi", objective: "O6", notYet: "Ọ dịghị ihe a tụrụ ma ọ bụ baseline.", meets: "Opekata mpe ihe anọ a tụrụ, e werela baseline, ya na ụbọchị maka oge ubi ọ bụla.", exceeds: "O nwere ubi ntụnyere a na-agbanweghị na foto site n'ebe a kapụtara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kụrụ ihe ọkụkụ mkpuchi ma ọ bụ green manure, ma ọ bụ malite FMNR, n'ime oge ubi na-esote (nnyocha nsochi)",
      "Mgbanwe na fatịlaịza a zụrụ azụ n'acre ọ bụla n'ubi e weghachiri n'ime oge ubi abụọ (ndekọ ndị na-amụ ihe)",
      "Mgbanwe n'ihe a tụrụ gbasara ala (ihe kpuchiri ala, infiltration, ọnụ ọgụgụ ikpuru) na ihe ubi n'ubi e weghachiri n'ime oge ubi atọ",
      "Ọnụ ọgụgụ ndị agbata obi ma ọ bụ ndị otu na-eṅomi otu omume (akụkọ ndị ndụmọdụ ugbo)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na mkpịsị ode nwere agba maka map otu ihe si aga n'ugbo na eserese ubi",
      "Ọgụ ma ọ bụ shovel, tin efu e gbupụrụ isi abụọ ya, mmiri na elekere maka ihe a na-atụ n'ala",
      "Osisi ma ọ bụ nkume iji kaa akara n'ebe a na-atụ",
      "Ndekọ fatịlaịza na ọnụ ahịa oge ubi gara aga (ma ọ bụ nọmba ọmụmaatụ)",
      "Ekwentị maka foto na ndetu (ọ bụghị iwu)",
      "Ihe dị ka nkeji 90 n'ozuzu, gbakwunyere oge n'ubi maka ihe a na-atụ"
    ],
    facilitatorNotes: [
      "Mee Nkuzi 3 na 6 n'ubi: chọtanụ ogwe osisi ọnụ maka FMNR ma mee nnwale infiltration na ọnụ ọgụgụ ikpuru dị ka otu.",
      "Kpọọ onye ndụmọdụ ugbo ma ọ bụ ụlọ ọrụ nchọpụta (dịka ọmụmaatụ KALRO, IITA, CSIR ma ọ bụ ISRA) ka ha kwado ihe ọkụkụ mkpuchi na osisi fatịlaịza dabara mmiri ozuzo obodo.",
      "Kparịta iwu obodo gbasara ịta nri anụ na igbutu osisi n'ihu ọha; FMNR na-achọkarị nkwekọrịta obodo.",
      "Egosila ọnụ ahịa ọmụmaatụ dị ka eziokwu mgbe ọ bụla; chịkọta ọnụ ahịa fatịlaịza obodo tupu nnọkọ ahụ.",
      "Gbaa ume ka a na-eji ahịrị nnwale n'akụkụ n'akụkụ kama ibelata fatịlaịza na mberede n'ala niile.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ ma soro ha mgbe oge ubi otu na abụọ gasịrị iji tụnyere ihe a tụrụ."
    ]
  }
};

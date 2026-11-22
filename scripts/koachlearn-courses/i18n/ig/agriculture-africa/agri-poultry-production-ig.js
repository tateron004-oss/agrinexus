"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-poultry-production.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept: no vaccine or drug doses, no withdrawal periods as numbers; follow the vet and the label; avian influenza is notifiable. All prices are made-up examples.

const KENBRO = { name: "Kenchic: Kenbro (ọkụkọ obodo e mere ka ọ ka mma, maka anụ na akwa)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma na ndị ọzọ 2015, Livestock Research for Rural Development: Kuroiler na ọkụkọ obodo na Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Ilekọta na ịzụ ụmụ ọkụkọ (okpomọkụ kwa izu, omume ụmụ ọkụkọ)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Ezi usoro nchekwa ọrịa (biosecurity) n'obere ugbo ọkụkọ azụmahịa na nke na-akpa nri n'onwe ha na Kenya", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "World Organisation for Animal Health (WOAH): Ọrịa Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "World Organisation for Animal Health (WOAH): Avian influenza (ọrịa flu nnụnụ)", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (ihe ịrịba ama na nnụnụ)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (ndepụta aha ndị dọkịta anụmanụ na ndị inyeaka ha)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (ndepụta aha ndị dọkịta anụmanụ)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Iji ọgwụ antibiotic n'ụzọ amamihe na ezi na ọkụkọ (ndị dọkịta anụmanụ, atụmatụ ahụike, oge nchere)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-ig",
  lang: "ig",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Ịzụ Ọkụkọ maka Azụmahịa",
  skills: "Ịhọrọ ọkụkọ anụ (broiler), ọkụkọ akwa (layer) ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma, Ịkwado ụlọ ọkụkọ na ilekọta ụmụ ọkụkọ n'okpomọkụ, Inye nri na mmiri dịka ọkwa ha si dị, Iso dọkịta anụmanụ mee usoro ọgwụ mgbochi na nchekwa ọrịa, Ijikwa akwa na idebe ndekọ ọkụkọ, Ịgbakọ ego otu ìgwè na-efu na ịchọta ọnụ ahịa nlọghachi ego",
  outcome: "ime atụmatụ ma rụọ otu ìgwè ọkụkọ na-ewete uru: ịhọrọ ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma maka ahịa gị, ịkwado ụlọ ma lekọta ụmụ ọkụkọ n'okpomọkụ, inye ha nri na mmiri dịka ọkwa ha si dị, iso usoro ọgwụ mgbochi dọkịta anụmanụ gị hiwere na nchekwa ọrịa siri ike, ijikwa akwa ma debe ndekọ, na ịgbakọ ego ìgwè ahụ na-efu ka ị mara ọnụ ahịa nlọghachi ego gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, ndị na-arụ ọrụ n'ugbo na ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ) na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na n'Africa niile, ndị chọrọ ịmalite ma ọ bụ ịgbasa azụmahịa ọkụkọ site n'ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma.",
    "Isi 1 na-ahazi ìgwè ọkụkọ: ịhọrọ ụdị ọkụkọ, ụlọ, ohere na ilekọta ụmụ ọkụkọ n'okpomọkụ, na nri na mmiri. Isi 2 na-arụ ya ka o wete uru: usoro ọgwụ mgbochi gị na dọkịta anụmanụ na nchekwa ọrịa nke ìgwè, ijikwa akwa na ndekọ, na ego ìgwè na-efu: ego otu ọkụkọ ma ọ bụ otu tree akwa na-efu, ọnwụ ọkụkọ na ọnụ ahịa nlọghachi ego.",
    "Ihe ọmụmụ a na-aga n'ihu site n'ihe ọmụmụ \"Ahụike na Nlekọta Anụ Ụlọ\", nke na-akụzi nlele ahụike kwa ụbọchị na ihe ndị bụ isi gbasara ọrịa Newcastle. Ọ naghị enye ọnụọgụ ọgwụ mgbochi ma ọ bụ ọgwụ: mgbe niile, soro ihe dọkịta anụmanụ gị na akwụkwọ dị n'ahụ ọgwụ (label) kwuru. Ọnụ ego niile e dere bụ naanị ọmụmaatụ; jiri nke gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ nwere ego maka otu ìgwè n'ugbo gị (ma ọ bụ ọmụmaatụ dị ka ọkụkọ anụ 500 nso Thika, ọkụkọ akwa 300 nso Ibadan, Kenbro ma ọ bụ Kuroiler 200 nso Tamale, ma ọ bụ ọkụkọ anụ 1,000 nso Thies): ụdị ọkụkọ na ihe mere i ji họrọ ya; nha ụlọ na ọkụkọ ole ọ na-ebu; otu ị ga-esi lekọta ụmụ ọkụkọ n'okpomọkụ; nri n'ọkwa ọ bụla na ole ị tụrụ anya ịzụ; usoro ọgwụ mgbochi gị na dọkịta anụmanụ kwekọrịtara na iwu nchekwa ọrịa gị; ndekọ ị ga-edebe; na mpempe akwụkwọ ego nwere ego ọ bụla ị ga-emefu, ọnwụ ị tụrụ anya ya, ego otu ọkụkọ i rere ma ọ bụ otu tree akwa na-efu, na ọnụ ahịa nlọghachi ego gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, ndị na-arụ ọrụ n'ugbo na ndị ọrụ extension n'Ọwụwa Anyanwụ, Ọdịda Anyanwụ na Etiti Africa (gụnyere mba ndị na-asụ French), ndị na-amalite ma ọ bụ na-agbasa azụmahịa ọkụkọ nwere ọkụkọ narị ole na ole ruo puku ole na ole.",
    startingPoint: "Ọtụtụ na-azụ ọkụkọ obodo ole na ole ma ọ bụ zụọla otu ìgwè. Ọtụtụ na-azụ ụmụ ọkụkọ na nri n'enweghị atụmatụ e dere ede, na-elekọta ụmụ ọkụkọ site n'ịkọ nkọ, na-adabere n'ụlọ ahịa agrovet maka ọgwụ mgbochi, na-edebe ndekọ ole na ole, amaghịkwa ego otu ọkụkọ ma ọ bụ otu tree akwa na-efu ha, ya mere ha enweghị ike ịmata ma ìgwè ahụ wetara uru.",
    gap: "Ọkụkọ nwere ike iwete ego ngwa ngwa, mana ọnwụ ụmụ ọkụkọ dị ukwuu n'oge ilekọta ha, ọrịa na-agbasa, nri e mefuru na ire n'okpuru ego e mefuru na-ebibi uru. Ndị ọrụ ugbo na-eme atụmatụ ìgwè, na-elekọta ụmụ ọkụkọ nke ọma, na-agba ọgwụ mgbochi dịka usoro dọkịta anụmanụ si dị, na-edebe ndekọ ma mara ọnụ ahịa nlọghachi ego ha na-atụfu ọkụkọ ole na ole, nwee ike ịkpọ ọnụ ahịa ma ree n'obi ike.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; naanị mgbakọ dị mfe; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: akwụkwọ na mkpịsị ode ma ọ bụ igwe mgbakọ dị n'ekwentị; spreadsheet n'ekwentị bụ nhọrọ",
      "Ego: ọnụ ahịa na KES, NGN, GHS na XOF bụ naanị ọmụmaatụ; ndị na-amụ ihe na-eji ọnụ ahịa obodo ha",
      "Iwu ahụike anụmanụ: ọ dịghị ọnụọgụ ọgwụ mgbochi ma ọ bụ ọgwụ, ọ dịghịkwa oge nchere e dere dị ka nọmba; soro dọkịta anụmanụ na label",
      "Avian influenza bụ ọrịa a ga-akọrịrị: a na-akọrọ dọkịta anụmanụ ma ọ bụ ụlọ ọrụ anụmanụ gọọmentị ozugbo e chere na ọ dị"
    ],
    prerequisites: "Nlekọta anụmanụ ndị bụ isi na mgbakọ dị mfe. A na-atụ aro ka i bu ụzọ were \"Ahụike na Nlekọta Anụ Ụlọ\"; \"Livestock Nutrition and Feed Formulation\" (Nri Anụ Ụlọ na Ịgwakọta Nri) na-enyere aka n'ego nri."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'ahịa gị, ego gị na oge gị", action: "ịhọrọ ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma ma kwuo ihe mere", standard: "na-akpọ opekata mpe ihe atọ mere o ji dabara ugbo gị na ndị na-azụ gị" },
    { id: "O2", condition: "Tupu ụmụ ọkụkọ abịa na n'oge ilekọta ha n'okpomọkụ", action: "ịkwado ụlọ, ịtọ ọnụọgụ ọkụkọ dabara ohere ahụ, na ịgbanwe okpomọkụ site n'ile ụmụ ọkụkọ anya", standard: "ụlọ ahụ adịlarị njikere otu ụbọchị tupu ha abịa, ụmụ ọkụkọ agbasakwa nke ọma n'okpuru okpomọkụ" },
    { id: "O3", condition: "Maka ọkwa ọ bụla nke ìgwè gị", action: "ime atụmatụ ụdị nri, ụbọchị ịgbanwe ya na otu mmiri ga-esi dị", standard: "mmiri dị ọcha dị mgbe niile, ọkwa ọ bụla nwekwara atụmatụ" },
    { id: "O4", condition: "Gị na dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ", action: "ide usoro ọgwụ mgbochi na iwu nchekwa ọrịa nke ìgwè, ma dekọ ọgwụ mgbochi ọ bụla", standard: "dọkịta anụmanụ hiwere ụbọchị ọgwụ mgbochi ọ bụla, e nyeghịkwa ọgwụ mgbochi ọ bụla na-adịghị n'usoro ahụ" },
    { id: "O5", condition: "Ụbọchị ọ bụla nke ìgwè ahụ", action: "ịchịkọta ma chekwaa akwa nke ọma ma dekọ ọkụkọ, ọnwụ, nri, akwa na ọgwụgwọ", standard: "n'enweghị ụbọchị ọ bụla a na-edekọghị" },
    { id: "O6", condition: "Site n'iji ọnụ ahịa obodo gị na ọnwụ ị tụrụ anya ya", action: "ịgbakọ ego otu ọkụkọ i rere ma ọ bụ otu tree akwa na-efu na ọnụ ahịa nlọghachi ego nke otu ìgwè", standard: "na-agụnye ego ọ bụla e mefuru, mgbakọ ahụ ezikwa ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi ìgwè ọkụkọ",
      lessons: [
        {
          title: "Ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ ụdị ọkụkọ dabara ahịa gị, ego gị na oge gị.",
          text: [
            "A na-azụ ọkụkọ anụ (broiler) maka anụ. Ha na-eto ngwa ngwa, a na-erekarị ha n'ime ihe dị ka izu 5 ruo 7, dabere n'ụdị ha na ịdị arọ ndị na-azụ chọrọ. Ego na-alọta ngwa ngwa, mana ha chọrọ nri dị mma, nlekọta nke ọma na onye na-azụ dị njikere n'ụbọchị ha ruru: ụbọchị ọ bụla gafere na-eri nri na uru.",
            "A na-azụ ọkụkọ akwa (layer) maka akwa. Ha na-amalite iyi akwa mgbe ha dị ihe dị ka ọnwa 4 ruo 5 ma na-eyi ihe karịrị otu afọ, ya mere ị na-enye ha nri ọtụtụ ọnwa tupu ego ọ bụla abata, ị chọkwara ahịa akwa na-adịgide adịgide. Ọkụkọ obodo e mere ka ọ ka mma ma ọ bụ nke anụ na akwa nọ n'etiti: ha siri ike karịa ọkụkọ anụ na ọkụkọ akwa, ha nwere ike ịkpa nri n'onwe ha ma e nye ha nri mgbakwunye, a na-ere ha maka anụ na akwa, mgbe ụfọdụ n'ọnụ ahịa ka mma kwa ọkụkọ, mana ha anaghị eto ma ọ bụ yie akwa dị ka ọkụkọ azụmahịa ndị a gwakọtara agwakọta.",
            "Ọmụmaatụ: Kenbro, nke Kenchic na-ere na Kenya, bụ ọkụkọ maka anụ na akwa; Kenchic kwuru na ọ na-adị njikere maka anụ mgbe ihe dị ka izu 10 ruo 14 ma ọ bụ na-amalite iyi akwa site n'ihe dị ka izu 25, mana ọ gaghị eru mmepụta ọkụkọ anụ ma ọ bụ ọkụkọ akwa pụrụ iche. Kuroiler, nke e mepụtara n'India, bụ ọkụkọ anụ na akwa na-akpa nri n'onwe ya; nnyocha e mere na Uganda chọpụtara na Kuroiler toro arọ karịa ọkụkọ obodo n'ọnọdụ ime obodo. Zụta ụdị ọ bụla naanị n'ebe a na-akụpụta ụmụ ọkụkọ (hatchery) nke ọfịs anụ ụlọ gị ma ọ bụ dọkịta anụmanụ tụkwasịrị obi, ma jụọ ndị ọrụ ugbo ndị ọzọ otu o si mee nke ọma n'ugbo ha."
          ],
          steps: ["Dee ndị ga-azụ: ọkụkọ dị ndụ, anụ, akwa, họtel, ahịa.", "Dee ego ole ị nwere ike imefu tupu ego amalite ịbata.", "Dee oge ole ị nwere ike inye kwa ụbọchị.", "Tụnyere ọkụkọ anụ, ọkụkọ akwa na ọkụkọ obodo e mere ka ọ ka mma na ndepụta gị.", "Họrọ otu, nwee ihe atọ mere i ji họrọ ya, na hatchery a tụkwasịrị obi."],
          words: [["Ọkụkọ anụ (broiler)", "ọkụkọ a na-azụ ka o too ngwa ngwa maka anụ."], ["Ọkụkọ akwa (layer)", "ọkụkọ a na-azụ ka o yie ọtụtụ akwa."], ["Ọkụkọ obodo e mere ka ọ ka mma", "ọkụkọ siri ike maka anụ na akwa, e mepụtara site n'ọkụkọ obodo ma ọ bụ maka ọnọdụ obodo."], ["Hatchery", "azụmahịa na-akụpụta ma na-ere ụmụ ọkụkọ dị otu ụbọchị."]],
          slides: [
            { title: "Ọkụkọ anụ (broiler)", bullets: ["Anụ; a na-erekarị ha n'ihe dị ka izu 5 ruo 7", "Ego ngwa ngwa; ha chọrọ nri dị mma na nlekọta nke ọma", "Ha chọrọ onye na-azụ dị njikere n'ụbọchị ahụ"] },
            { title: "Ọkụkọ akwa (layer)", bullets: ["Akwa; ha na-amalite n'ihe dị ka ọnwa 4 ruo 5", "Ọtụtụ ọnwa nri tupu ego abata", "Ha chọrọ ahịa akwa na-adịgide adịgide"] },
            { title: "Ọkụkọ obodo e mere ka ọ ka mma", bullets: ["Ha siri ike; ha na-akpa nri ma e nye ha nri mgbakwunye", "Anụ na akwa, mgbe ụfọdụ ọnụ ahịa ka mma kwa ọkụkọ", "Ọmụmaatụ: Kenbro (Kenchic), Kuroiler (si India)"] },
            { title: "Họrọ ma zụta nke ọma", bullets: ["Dabara ahịa, ego na oge", "Naanị hatchery a tụkwasịrị obi", "Jụọ ndị ọrụ ugbo zụrụ ụdị ahụ"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Dee ndepụta gị atọ: ndị na-azụ, ego dị tupu ego abata, na oge kwa ụbọchị. Họrọ ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma ma dee ihe atọ mere, tinyere aha hatchery nke ọfịs anụ ụlọ gị ma ọ bụ dọkịta anụmanụ tụkwasịrị obi.",
          youCanNow: "ịhọrọ ọkụkọ anụ, ọkụkọ akwa ma ọ bụ ọkụkọ obodo e mere ka ọ ka mma nke dabara ahịa gị, ego gị na oge gị.",
          quickCheck: [
            { objective: "O1", q: "Onye ọrụ ugbo enweghị ego buru ibu iji chere, o nwekwara họtel na-azụ ọkụkọ anụ kwa izu isii. Kedu ụdị kacha dabara?", options: ["Ọkụkọ akwa", "Ọkụkọ anụ (broiler)", "Ọbọgwụ", "Ọkụkọ obodo a hapụrụ ka ha kpaa nri"], answer: 1, why: "A na-ere ọkụkọ anụ n'ime izu ole na ole, nke dabara onye na-azụ anụ mgbe niile na obere oge nchere ego." },
            { objective: "O1", q: "Gịnị ka Kenchic kwuru gbasara Kenbro ma e tụnyere ya na ọkụkọ anụ na ọkụkọ akwa pụrụ iche?", options: ["Ọ na-eto ngwa ngwa karịa ọkụkọ anụ", "Ọ na-eyi akwa karịa ọkụkọ akwa", "Ọ gaghị eru ọkwa mmepụta ha", "Ọ chọghị nri ọ bụla"], answer: 2, why: "Kenbro siri ike ma bụrụ maka anụ na akwa, mana ọ naghị eru mmepụta ọkụkọ ndị a gwakọtara pụrụ iche." }
          ]
        },
        {
          title: "Ụlọ, ohere na ilekọta ụmụ ọkụkọ n'okpomọkụ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kwado ụlọ, tọọ ọnụọgụ ọkụkọ dabara ohere ahụ, ma lekọta ụmụ ọkụkọ n'okpomọkụ kwesịrị ekwesị.",
          text: [
            "Ezi ụlọ ọkụkọ kpọrọ nkụ, nwee ikuku ma dị nchebe. N'ebe okpomọkụ dị, akụkụ ndị meghere emeghe nwere waya siri ike na-ahapụ ikuku ka ọ gafee; a na-etokarị ụlọ ogologo n'ọwụwa anyanwụ ruo ọdịda anyanwụ ka anwụ ghara ịbanye nke ukwuu, nwee elu ụlọ gafere mgbidi iji gbochie mmiri ozuzo. Jiri litter dị omimi ma kpọọ nkụ, dị ka ntụ osisi a wapụtara ma ọ bụ akpụkpọ osikapa. Gbochie oke, agwọ, nnụnụ ọhịa na ndị ohi. Tupu ụmụ ọkụkọ abịa, sachaa ma gbaa ọgwụ nje n'ụlọ tọgbọrọ chakoo na ngwa ọrụ ya, ma hapụ ya ka ọ tọgbọrọ n'efu ruo oge izu ike dọkịta anụmanụ gị dụrụ ọdụ.",
            "Ohere: ịkpakọ ọkụkọ ọnụ na-akpata nsogbu okpomọkụ, litter mmiri mmiri, ịkpọ ibe ha ọnụ na ọrịa. Hatchery gị, akwụkwọ nduzi ụdị ọkụkọ ahụ ma ọ bụ onye ọrụ extension gị na-enye ọnụọgụ ọkụkọ kwa square metre maka ụdị ọkụkọ gị, afọ ha na ụlọ gị. Mụbaa nha ala ahụ site na nọmba ahụ. Naanị ọmụmaatụ: ụlọ 5 m na 8 m bụ square metre 40; ọ bụrụ na akwụkwọ nduzi gị kwuru ọkụkọ anụ 10 kwa square metre mgbe ha ruru ire, ọ na-ebu ọkụkọ anụ 400, ọ bụghị 500.",
            "Ilekọta ụmụ ọkụkọ n'okpomọkụ (brooding): ụmụ ọkụkọ dị otu ụbọchị enweghị ike ime ka ahụ ha kpoo ọkụ n'onwe ha. Hazie brooder ring (okirikiri kaadboodu ma ọ bụ mpempe igwe) nwere litter, ihe na-enye okpomọkụ (brooder gas ma ọ bụ ọkụ eletrik, bọlbụ, ma ọ bụ stovu unyi nwere ezigbo ikuku, n'ihi na anwụrụ unyi nwere ike igbu), ihe nri na ihe mmiri, ma mee ka ọ kpoo ọkụ tupu ụmụ ọkụkọ abịa. University of Missouri Extension kwuru ihe dị ka 32 ruo 35 °C n'okpuru ihe okpomọkụ n'izu mbụ, wee belata ihe dị ka 3 °C kwa izu. Lee ụmụ ọkụkọ anya: ọ bụrụ na ha gbakọrọ ọnụ n'okpuru okpomọkụ, oyi na-atụ ha; ọ bụrụ na ha nọ n'ebe dị anya ma na-eku ume ike, okpomọkụ karịrị; ọ bụrụ na ha gbakọrọ n'otu akụkụ, ikuku na-abata; ọ bụrụ na ha gbasara nke ọma, ọ dị mma."
          ],
          steps: ["Sachaa ma gbaa ọgwụ nje n'ụlọ tọgbọrọ chakoo na ngwa ọrụ; hapụ ya ka o zuo ike dịka dọkịta anụmanụ dụrụ ọdụ.", "Gbasaa litter dị omimi ma kpọọ nkụ.", "Gbakọọ ọkụkọ ole ala ahụ na-ebu site n'akwụkwọ nduzi ụdị ọkụkọ gị.", "Hazie brooder ring, ihe okpomọkụ, ihe nri na ihe mmiri.", "Mee ka ọ kpoo ọkụ tupu ụmụ ọkụkọ abịa.", "Lee ụmụ ọkụkọ anya ọtụtụ ugboro n'ụbọchị ma gbanwee okpomọkụ."],
          words: [["Brooding", "idebe ụmụ ọkụkọ ọhụrụ n'okpomọkụ ma nye ha nri n'izu ole na ole mbụ ha."], ["Brooder ring", "okirikiri kaadboodu ma ọ bụ mpempe igwe na-edebe ụmụ ọkụkọ nso okpomọkụ, nri na mmiri."], ["Litter", "ihe nkụ a na-agbasa n'ala, dị ka ntụ osisi a wapụtara ma ọ bụ akpụkpọ osikapa."], ["Stocking density", "ọnụọgụ ọkụkọ a na-edebe kwa square metre nke ala."]],
          slides: [
            { title: "Ezi ụlọ", bullets: ["Kpọrọ nkụ, nwee ikuku, akụkụ meghere emeghe nwere waya n'okpomọkụ", "Elu ụlọ gafere mgbidi; a na-etokarị ya n'ọwụwa ruo ọdịda anyanwụ", "Litter dị omimi ma kpọọ nkụ; gbochie oke na nnụnụ ọhịa"] },
            { title: "Ohere", bullets: ["Ịkpakọ ọnụ = nsogbu okpomọkụ, litter mmiri mmiri, ọrịa", "Ọkụkọ kwa square metre site n'akwụkwọ nduzi ụdị gị", "Ọmụmaatụ: square metre 40 x 10 = ọkụkọ anụ 400"] },
            { title: "Ihazi brooding", bullets: ["Brooder ring, okpomọkụ, ihe nri na ihe mmiri", "Mee ka ọ kpoo ọkụ tupu ụmụ ọkụkọ abịa", "Unyi: ezigbo ikuku, anwụrụ ya nwere ike igbu"] },
            { title: "Gụọ ụmụ ọkụkọ", bullets: ["Ihe dị ka 32 ruo 35 °C na mbụ, belata ihe dị ka 3 °C kwa izu", "Gbakọrọ ọnụ = oyi; nọ n'ebe dị anya = okpomọkụ", "Gbakọrọ n'otu akụkụ = ikuku na-abata; gbasara = ọ dị mma"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Tụọ nha ụlọ ọkụkọ gị (ma ọ bụ nke ị na-eme atụmatụ) ma gbakọọ nha ala ya. Jụọ hatchery gị ma ọ bụ onye ọrụ extension ọkụkọ ole kwa square metre maka ụdị ọkụkọ gị, ma dee ọkụkọ ole ọ na-ebu. See ihe osise otu i si hazie brooding gị.",
          youCanNow: "ịkwado ụlọ, ịtọ ọnụọgụ ọkụkọ dabara ohere ya, na ilekọta ụmụ ọkụkọ n'okpomọkụ site n'ile otu ha si akpa àgwà.",
          quickCheck: [
            { objective: "O2", q: "Ụmụ ọkụkọ gị niile gbakọrọ ọnụ n'okpuru ihe okpomọkụ. Gịnị ka ọ pụtara?", options: ["Okpomọkụ karịrị ha", "Agụụ na-agụ ha", "Ha adịla njikere ịpụ na brooder", "Oyi na-atụ ha; tinye okpomọkụ ma ọ bụ gbochie ikuku"], answer: 3, why: "Ịgbakọ ọnụ n'okpuru okpomọkụ pụtara na oyi na-atụ ụmụ ọkụkọ." },
            { objective: "O2", q: "Ụlọ gị dị 6 m na 5 m. Akwụkwọ nduzi kwuru ọkụkọ 10 kwa square metre. Ọkụkọ ole?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = square metre 30, x 10 = ọkụkọ 300." }
          ]
        },
        {
          title: "Nri na mmiri dịka ọkwa ha si dị",
          objectives: ["O3"],
          minutes: 5,
          goal: "Mee atụmatụ nri maka ọkwa ọ bụla, mgbe a ga-agbanwe ya, na mmiri dị ọcha na-adị mgbe niile.",
          text: [
            "Nri bụ ego kacha ukwuu otu ìgwè na-efu, ya mere nye nri kwesịrị ekwesị n'ọkwa kwesịrị ekwesị. Ọkụkọ anụ: broiler starter, wee broiler finisher (ụfọdụ usoro na-agbakwunye grower). Ọkụkọ akwa: chick mash, wee growers mash, wee layers mash site n'oge ha na-achọ ịmalite iyi akwa, nke nwere calcium mgbakwunye ọkụkọ nne chọrọ maka akpụkpọ akwa siri ike. Ọkụkọ obodo e mere ka ọ ka mma: soro akwụkwọ nduzi hatchery; ọbụlagodi mgbe ha na-akpa nri ọkara n'onwe ha, ha ka chọrọ nri zuru oke n'elu ihe ha na-akpa iji too ma yie akwa nke ọma. Gbanwee nri n'ime ụbọchị ole na ole site n'ịgwakọta nri ochie na nke ọhụrụ.",
            "Zụta nri n'aka onye na-egwe nri a tụkwasịrị obi, lelee na akpa ahụ nwere label, kpọrọ nkụ ma ka nọ n'ime ụbọchị ya, ma chekwaa ya n'elu pallet n'ebe kpọrọ nkụ. Jiri ihe nri zuru ezu ka ọkụkọ niile nwee ike iri nri otu oge, bulie ha ruo n'ogo azụ ọkụkọ ka ha na-eto, ejukwala ha ruo n'ọnụ, n'ihi na ọkụkọ na-akpụfụ nri ma mefuo ya.",
            "Mmiri dị mkpa karịa nri: ọkụkọ na-aṅụ mmiri karịa nri ha na-eri, ha na-akwụsịkwa iri nri na iyi akwa mgbe mmiri gwụrụ ma ọ bụ kpoo ọkụ. Nye mmiri dị ọcha ma dị jụụ mgbe niile, nwee ihe mmiri zuru ezu, a na-asacha kwa ụbọchị. Mbelata mberede na mmiri ha na-aṅụ na-abụkarị ihe ịrịba ama mbụ nke ọrịa. Ọ bụrụ na ị na-enye ọgwụ mgbochi ma ọ bụ ọgwụ na mmiri, soro dọkịta anụmanụ na label kpọmkwem; ụfọdụ chọrọ mmiri na-enweghị chlorine ma ọ bụ ọgwụ nje."
          ],
          steps: ["Dee ọkwa niile maka ụdị ọkụkọ gị.", "Dee nri maka ọkwa ọ bụla na afọ a ga-agbanwe ya.", "Mee atụmatụ ihe nri na ihe mmiri zuru ezu maka ọkụkọ niile otu oge.", "Bulie ihe nri na ihe mmiri ka ọkụkọ na-eto; ejula ha ruo n'ọnụ.", "Sachaa ihe mmiri kwa ụbọchị; ekwela ka mmiri gwụ mgbe ọ bụla.", "Dee mmiri a ṅụrụ kwa ụbọchị; mbelata mberede pụtara kpọọ dọkịta anụmanụ."],
          words: [["Starter", "nri mbụ nwere protein dị ukwuu maka ụmụ ọkụkọ."], ["Finisher", "nri ikpeazụ maka ọkụkọ anụ tupu e ree ha."], ["Layers mash", "nri maka ọkụkọ na-eyi akwa nwere calcium mgbakwunye maka akpụkpọ akwa."], ["Oge ịmalite iyi akwa (point of lay)", "afọ ọkụkọ nne na-eto eto na-achọ ịmalite iyi akwa."]],
          slides: [
            { title: "Nri dịka ọkwa si dị", bullets: ["Ọkụkọ anụ: starter, wee finisher", "Ọkụkọ akwa: chick mash, growers mash, wee layers mash", "Gbanwee ya n'ime ụbọchị ole na ole"] },
            { title: "Zụta ma jiri nri nke ọma", bullets: ["Onye na-egwe nri a tụkwasịrị obi; nwere label, kpọrọ nkụ, nọ n'ụbọchị ya", "Ihe nri zuru ezu; bulie ha ka ọkụkọ na-eto", "Ejula ha ruo n'ọnụ: ịkpụfụ nri na-emefu ya"] },
            { title: "Mmiri na-ebu ụzọ", bullets: ["Ọkụkọ na-aṅụ mmiri karịa nri ha na-eri", "Mmiri dị ọcha ma dị jụụ mgbe niile", "Mbelata mberede na mmiri a ṅụrụ = ihe ịdọ aka na ntị"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Mee tebụl nri maka ìgwè gị: ọkwa, afọ, ụdị nri, na ihe dị ka akpa ole ị tụrụ anya ịzụ (jụọ onye na-ere gị nri ma ọ bụ hatchery). Tinye ihe nri na ihe mmiri ole ị chọrọ na onye na-asacha ihe mmiri kwa ụbọchị.",
          youCanNow: "ime atụmatụ nri kwesịrị ekwesị maka ọkwa ọ bụla, mgbe a ga-agbanwe ya, na mmiri dị ọcha na-adị mgbe niile.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ọkụkọ na-eyi akwa ji chọọ layers mash kama growers mash?", options: ["Ọ dị ọnụ ala", "Ọ na-eme ka ha too ogologo", "O nwere calcium mgbakwunye a chọrọ maka akpụkpọ akwa siri ike", "Ọ na-anọchi mmiri"], answer: 2, why: "Ọkụkọ na-eyi akwa chọrọ calcium mgbakwunye maka akpụkpọ akwa, nke layers mash na-enye." },
            { objective: "O3", q: "Ọkụkọ anụ gị na-aṅụ mmiri pere mpe karịa ụnyaahụ na mberede. Gịnị ka nke a na-egosi?", options: ["O nwere ike ịbụ na ha na-arịa ọrịa; lelee ha ma kpọọ dọkịta anụmanụ", "Ha dị mma ma rijuo afọ", "Nri ahụ dị mma karịa", "Oge eruola ire ha"], answer: 0, why: "Mbelata mberede na mmiri a ṅụrụ na-abụkarị ihe ịrịba ama mbụ nke ọrịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi ìgwè ọkụkọ",
        questions: [
          { objective: "O1", q: "Kedu ihe egwu bụ isi n'ọkụkọ anụ?", options: ["Ha na-ewe afọ abụọ tupu e ree ha", "Ha na-eyi akwa karịrị akarị", "A pụghị iri ha", "Ụbọchị ọ bụla gafere tupu ire na-eri nri na uru, ya mere ị chọrọ onye na-azụ dị njikere"], answer: 3, why: "Ọkụkọ anụ na-aga n'ihu na-eri nri; igbu oge n'ire na-ebelata uru ngwa ngwa." },
          { objective: "O1", q: "Kedu nke bụ eziokwu gbasara ọkụkọ obodo e mere ka ọ ka mma dị ka Kuroiler?", options: ["Ha siri ike ma bụrụ maka anụ na akwa, mana ha na-emepụta obere karịa ọkụkọ a gwakọtara pụrụ iche", "Ha achọghị mmiri", "Ha bụ naanị maka akwa", "Ha bụ ọkụkọ anụ kacha eto ngwa ngwa"], answer: 0, why: "Ọkụkọ anụ na akwa na-ahapụ ụfọdụ mmepụta maka ike na iji ha maka anụ na akwa." },
          { objective: "O2", q: "Ụmụ ọkụkọ nọ n'ebe dị anya site n'ihe okpomọkụ ma na-eku ume ike. Gịnị ka ị ga-eme?", options: ["Tinye okpomọkụ ọzọ", "Gbochie ikuku niile", "Belata okpomọkụ ma ọ bụ bulie ihe okpomọkụ elu", "Tinye ụmụ ọkụkọ ọzọ"], answer: 2, why: "Ịnọ n'ebe dị anya na iku ume ike pụtara na okpomọkụ karịrị ụmụ ọkụkọ." },
          { objective: "O2", q: "Olee mgbe ị ga-eme ka brooder kpoo ọkụ?", options: ["Mgbe ụmụ ọkụkọ bịachara", "Tupu ụmụ ọkụkọ abịa", "Naanị n'abalị n'izu 3", "Ọ dịghị mgbe; ụmụ ọkụkọ na-ekpo onwe ha ọkụ"], answer: 1, why: "Ụmụ ọkụkọ dị otu ụbọchị chọrọ okpomọkụ site n'oge ha bịarutere." },
          { objective: "O3", q: "Kedu otu ị ga-esi gbanwee site n'otu nri gaa n'ọzọ?", options: ["N'otu abalị", "Bu ụzọ kwụsị inye nri otu ụbọchị", "Naanị mgbe ọkụkọ dị ka ha gbara ahụ", "N'ime ụbọchị ole na ole, na-agwakọta nri ochie na nke ọhụrụ"], answer: 3, why: "Mgbanwe nwayọọ nwayọọ na-egbochi ịkpaghasị iri nri na mgbari nri ọkụkọ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ìgwè na-ewete uru",
      lessons: [
        {
          title: "Usoro ọgwụ mgbochi na nchekwa ọrịa nke ìgwè",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gị na dọkịta anụmanụ gị dee usoro ọgwụ mgbochi ma hiwe iwu nchekwa ọrịa maka ìgwè ahụ.",
          text: [
            "Ọgwụ mgbochi (vaccine) na-echebe ìgwè ahụ pụọ n'ọrịa ndị a na-ahụkarị n'obodo gị. Ọgwụ mgbochi ndị a ga-enye, n'afọ ole, na otu a ga-esi nye ha (na mmiri ọṅụṅụ, ntapụ n'anya, ịgba ọgwụ ma ọ bụ ịdụ na nku) ga-abụrịrị dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ na-ahazi ya, n'ihi na ọrịa dị iche iche dabere n'obodo na oge. Ọmụmaatụ a na-ahụkarị n'Africa gụnyere ọrịa Newcastle na Gumboro, tinyere ọrịa Marek (a na-enyekarị ya na hatchery) na fowl pox; dọkịta anụmanụ gị nwere ike ịgbakwunye ndị ọzọ. Jụọ hatchery ka o nye gị ndekọ ihe ụmụ ọkụkọ ahụ natalarị.",
            "Mee ka ọgwụ mgbochi rụọ ọrụ: zụta ya n'agrovet nwere ikike, lelee ụbọchị ọ ga-agwụ, debe ya ka ọ dị jụụ site n'ụlọ ahịa ruo n'ọkụkọ, nye ya kpọmkwem dịka label na dọkịta anụmanụ kwuru, gbaa ìgwè ahụ niile ọgwụ mgbochi, ma dee ụbọchị, ọgwụ mgbochi, nọmba batch ya na otu e si nye ya na ndekọ gị. Ejila aka gị gwọọ ọkụkọ na-arịa ọrịa site n'antibiotic: dọkịta anụmanụ na-ekpebi, ị na-edekọkwa oge nchere (withdrawal period) site na label ka e ghara ire akwa ma ọ bụ anụ tupu ọ gwụ.",
            "Nchekwa ọrịa nke ìgwè: zụta ụmụ ọkụkọ n'otu hatchery a tụkwasịrị obi ma rụọ ụlọ ahụ n'usoro all-in, all-out (ọkụkọ niile dị otu afọ, ha na-abata ọnụ ma na-apụ ọnụ). N'etiti ìgwè abụọ, wepụ litter niile, saa ma gbaa ọgwụ nje n'ụlọ na ngwa ọrụ, ma hapụ ya ka ọ tọgbọrọ n'efu ruo oge izu ike dọkịta anụmanụ gị dụrụ ọdụ. Gbochie ndị ọbịa, jiri ebe a na-asa ụkwụ (footbath) na akpụkpọ ụkwụ ugbo, gbochie nnụnụ ọhịa na oke, ewetakwala ọkụkọ si n'ahịa n'ụlọ mgbe ọ bụla. Avian influenza bụ ọrịa a ga-akọrịrị: ọnwụ mberede, ntụtụ isi zara aza ma gbaa odo odo, iku ume ike ma ọ bụ mbelata akwa ngwa ngwa pụtara debe ọkụkọ n'ime ụlọ, kwụsị ire na mbugharị niile, ma kpọọ dọkịta anụmanụ ozugbo."
          ],
          steps: ["Jụọ hatchery ọgwụ mgbochi ụmụ ọkụkọ ahụ natalarị.", "Gị na dọkịta anụmanụ gị nọdụ dee usoro ahụ: ọrịa, afọ, otu e si enye ya.", "Zụta ọgwụ mgbochi n'agrovet nwere ikike; lelee ụbọchị ọ ga-agwụ; debe ya ka ọ dị jụụ.", "Gbaa ìgwè niile ọgwụ mgbochi kpọmkwem dịka label na dọkịta anụmanụ kwuru; dekọọ ya.", "Rụọ all-in, all-out; sachaa, gbaa ọgwụ nje ma hapụ ụlọ ka o zuo ike n'etiti ìgwè.", "Ọ bụrụ na i chere na ọ bụ avian influenza ma ọ bụ ọrịa Newcastle: debe ọkụkọ n'ime ụlọ, kwụsị ire, kpọọ dọkịta anụmanụ."],
          words: [["Usoro ọgwụ mgbochi", "atụmatụ e dere ede nke ọgwụ mgbochi ìgwè ahụ ga-anata, n'afọ ole na otu, nke dọkịta anụmanụ hiwere."], ["All-in, all-out", "ọkụkọ niile nọ n'otu ụlọ dị otu afọ, a na-etinye ha ọnụ ma wepụ ha ọnụ."], ["Oge nchere (withdrawal period)", "oge mgbe e nyechara ọgwụ tupu e nwee ike ire akwa ma ọ bụ anụ; ọ dị na label."], ["Agrovet nwere ikike", "ụlọ ahịa iwu kwere ka ọ na-ere ọgwụ anụmanụ na ọgwụ mgbochi."]],
          slides: [
            { title: "Dọkịta anụmanụ na-ahazi usoro ahụ", bullets: ["Ọgwụ mgbochi ndị ọ bụ, n'afọ ole, n'ụzọ dị aṅaa", "A na-ahụkarị: Newcastle, Gumboro, Marek, fowl pox", "Jụọ hatchery ihe ụmụ ọkụkọ natalarị"] },
            { title: "Mee ka ọgwụ mgbochi rụọ ọrụ", bullets: ["Agrovet nwere ikike; lelee ụbọchị ọ ga-agwụ; debe ya ka ọ dị jụụ", "Kpọmkwem dịka label na dọkịta anụmanụ kwuru; ìgwè niile", "Dekọọ ụbọchị, ọgwụ mgbochi, nọmba batch, otu e si nye ya"] },
            { title: "Nchekwa ọrịa nke ìgwè", bullets: ["Otu hatchery; all-in, all-out", "Sachaa, gbaa ọgwụ nje ma hapụ ka o zuo ike n'etiti ìgwè", "Footbath, akpụkpọ ụkwụ ugbo, enweghị ndị ọbịa, enweghị ọkụkọ ahịa"] },
            { title: "Avian influenza: kọọ ya ozugbo", bullets: ["Ọnwụ mberede, ntụtụ isi gbara odo odo, iku ume ike, mbelata akwa", "Debe ọkụkọ n'ime ụlọ; kwụsị ire na mbugharị", "Kpọọ dọkịta anụmanụ ma ọ bụ ọfịs anụmanụ ugbu a"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Kpaa oge gị na dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ ga-ekwurịta. Weta tebụl nwere kọlụm: ọrịa, afọ, otu e si enye ya, ụbọchị e nyere ya, nọmba batch. Dejupụta usoro dọkịta anụmanụ hiwere. N'okpuru ya, dee iwu nchekwa ọrịa ise maka ìgwè gị.",
          youCanNow: "iso dọkịta anụmanụ gị dee usoro ọgwụ mgbochi, idekọ ọgwụ mgbochi ọ bụla, na ịrụ nchekwa ọrịa siri ike nke ìgwè.",
          quickCheck: [
            { objective: "O4", q: "Onye kwesịrị ikpebi ọgwụ mgbochi ìgwè gị ga-anata na mgbe?", options: ["Onye na-ere nri", "Dọkịta anụmanụ e debanyere aha ma ọ bụ onye ọrụ ahụike anụmanụ", "Onye agbata obi nwere ọkụkọ", "Otu na soshal midia"], answer: 1, why: "Ọrịa dị iche iche dabere n'obodo, ya mere dọkịta anụmanụ e debanyere aha na-ahazi usoro ahụ." },
            { objective: "O4", q: "Gịnị ka all-in, all-out pụtara?", options: ["Ọkụkọ na-apụ ịkpa nri kwa ụbọchị", "Ndị ọbịa nwere ike ịbata ma pụọ otu ha chọrọ", "A na-agbakwunye ọkụkọ ọhụrụ kwa izu", "A na-etinye ma wepụ ọkụkọ niile nọ n'otu ụlọ ọnụ"], answer: 3, why: "Otu ìgwè afọ n'otu ụlọ na-eme ka ị nwee ike isacha ya ma hapụ ya ka o zuo ike nke ọma n'etiti ìgwè, nke na-egbochi ọrịa ịga n'ihu." }
          ]
        },
        {
          title: "Ijikwa akwa na ndekọ ọkụkọ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Chịkọta ma chekwaa akwa nke ọma ma debe ndekọ ọkụkọ kwa ụbọchị.",
          text: [
            "Akwa na-atụfu ịdị mma ya ma na-enweta nje ma ọ nọọ n'akwụ. Chịkọta ya opekata mpe ugboro abụọ n'ụbọchị, karịa n'oge okpomọkụ. Debe akwụ ka ọ dị ọcha site na litter ọhụrụ ka akwa pụta dị ọcha. Kewapụ akwa gbawara agbawa, nke ruru unyi na nke dị obere nke ukwuu. Jiri akwa nhicha kpọrọ nkụ hichaa akwa ruru ntakịrị unyi; etinyela ha na mmiri, n'ihi na nke a nwere ike idọbanye nje n'akpụkpọ akwa. Chekwaa akwa na tree, isi ya dị nkọ chee ala, n'ebe dị jụụ, nwee ndò ma nwee ikuku, tere aka n'isi dị ike, ma bu ụzọ ree nke kacha ochie.",
            "Ndekọ na-agwa gị ihe na-eme tupu oge agafee. Kwa ụbọchị, dee: ọnụọgụ ọkụkọ, ọnwụ na ihe nwere ike ịkpata ya, nri e ji, mmiri e ji, na akwa a chịkọtara (site na tree na ọkwa). Dekọọkwa ọgwụ mgbochi na ọgwụgwọ ọ bụla, ụbọchị oge nchere ga-agwụ site na label, ihe ọ bụla a zụrụ na ihe ọ bụla e rere. Akwụkwọ ndekọ dị mma; spreadsheet n'ekwentị na-agbakọ ngụkọta maka gị.",
            "Jiri ndekọ ahụ. Ọnụọgụ ọnwụ = ọkụkọ nwụrụ / ọkụkọ e ji malite x 100. Ọnụọgụ iyi akwa = akwa a chịkọtara n'otu ụbọchị / ọkụkọ nne x 100. Ọ bụrụ na ọnwụ na-arị elu, mmiri a ṅụrụ na-ebelata ma ọ bụ ọnụọgụ iyi akwa adaa na mberede, lelee ìgwè ahụ ma kpọọ dọkịta anụmanụ. Na njedebe ìgwè ahụ, ndekọ ahụ na-enye gị nọmba maka mpempe akwụkwọ ego gị."
          ],
          steps: ["Chịkọta akwa opekata mpe ugboro abụọ n'ụbọchị.", "Kewapụ akwa gbawara agbawa, nke ruru unyi na nke dị obere; hichaa nke ruru ntakịrị unyi n'akwa kpọrọ nkụ.", "Chekwaa na tree, isi dị nkọ chee ala, n'ebe dị jụụ ma nwee ndò; bu ụzọ ree nke kacha ochie.", "Kwa ụbọchị dekọọ ọkụkọ, ọnwụ, nri, mmiri na akwa.", "Dekọọ ọgwụ mgbochi, ọgwụgwọ, ụbọchị oge nchere ga-agwụ, ihe a zụrụ na ihe e rere.", "Gbakọọ ọnụọgụ ọnwụ na ọnụọgụ iyi akwa kwa izu ma chọọ mgbanwe mberede."],
          words: [["Ọnụọgụ ọnwụ (mortality rate)", "akụkụ ọkụkọ nwụrụ, dị ka pasentị nke ọkụkọ i ji malite."], ["Ọnụọgụ iyi akwa (laying rate)", "akwa a chịkọtara n'otu ụbọchị dị ka pasentị nke ọnụọgụ ọkụkọ nne."], ["Ọkwa (grade)", "ịhazi akwa site na nha ha na ịdị mma ha."]],
          slides: [
            { title: "Ijikwa akwa", bullets: ["Chịkọta opekata mpe ugboro abụọ n'ụbọchị", "Akwụ dị ọcha; kewapụ akwa gbawara agbawa na nke ruru unyi", "Hichaa n'akwa kpọrọ nkụ; etinyela ha na mmiri"] },
            { title: "Ichekwa akwa", bullets: ["Tree, isi dị nkọ chee ala", "Ebe dị jụụ, nwee ndò, nwee ikuku, enweghị isi dị ike", "Bu ụzọ ree nke kacha ochie"] },
            { title: "Ndekọ kwa ụbọchị", bullets: ["Ọkụkọ, ọnwụ na ihe kpatara ya, nri, mmiri, akwa", "Ọgwụ mgbochi, ọgwụgwọ, ụbọchị oge nchere ga-agwụ", "Ihe ọ bụla a zụrụ na ihe ọ bụla e rere"] },
            { title: "Jiri nọmba ndị ahụ", bullets: ["Ọnwụ = ndị nwụrụ / ndị e ji malite x 100", "Iyi akwa = akwa n'ụbọchị / ọkụkọ nne x 100", "Mgbanwe mberede: lelee ìgwè, kpọọ dọkịta anụmanụ"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Mee peeji ndekọ kwa ụbọchị nwere kọlụm: ụbọchị, ọkụkọ, ọnwụ na ihe kpatara ya, nri e ji, mmiri e ji, akwa a chịkọtara, ndetu. Dejupụta izu ọmụmaatụ. Wee gbakọọ ọnụọgụ ọnwụ na, maka ọkụkọ akwa, ọnụọgụ iyi akwa maka otu ụbọchị.",
          youCanNow: "ịchịkọta ma chekwaa akwa nke ọma, na idebe ndekọ kwa ụbọchị na-egosi ọnụọgụ ọnwụ na ọnụọgụ iyi akwa.",
          quickCheck: [
            { objective: "O5", q: "Kedu otu e kwesịrị isi chekwaa akwa na tree?", options: ["Isi dị nkọ chee elu, n'anwụ", "Isi dị nkọ chee ala, n'ebe dị jụụ ma nwee ndò", "Bu ụzọ saa ma tinye ha na mmiri", "N'akụkụ mmanụ ọkụ (paraffin) na yabasị"], answer: 1, why: "Isi dị nkọ chee ala, n'ebe dị jụụ ma nwee ndò na-eme ka akwa nọrọ ọhụrụ ogologo oge." },
            { objective: "O5", q: "I ji ọkụkọ anụ 500 malite, 25 nwụrụ. Gịnị bụ ọnụọgụ ọnwụ?", options: ["pasentị 25", "pasentị 2.5", "pasentị 50", "pasentị 5"], answer: 3, why: "25 / 500 x 100 = pasentị 5." }
          ]
        },
        {
          title: "Ego otu ìgwè: ego otu ọkụkọ na-efu na nlọghachi ego",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gbakọọ ego otu ọkụkọ ma ọ bụ otu tree na-efu na ọnụ ahịa nlọghachi ego nke otu ìgwè.",
          text: [
            "Depụta ego ọ bụla ìgwè ahụ na-efu: ụmụ ọkụkọ, nri, ọgwụ mgbochi na dọkịta anụmanụ, litter, mmanụ ọkụ ma ọ bụ ọkụ eletrik maka brooding, ọgwụ nje, ụgwọ ọrụ, ụgwọ ụgbọ na ngwugwu. Ọmụmaatụ nwere ọnụ ahịa shilling Kenya e chepụtara, ọkụkọ anụ 500: ụmụ ọkụkọ 50,000; nri 122,500; ọgwụ mgbochi na dọkịta anụmanụ 5,000; litter, brooding na ọkụ 8,000; ụgbọ na ihe ndị ọzọ 6,500. Ngụkọta KES 192,000. Jiri ọnụ ahịa nke gị: ọnụ ahịa dị iche dabere n'ebe na oge, na NGN, GHS ma ọ bụ XOF usoro ahụ bụ otu.",
            "Ọnwụ na-agbanwe ihe niile, n'ihi na ọkụkọ nwụrụ anwụ ka riri nri. Ọ bụrụ na pasentị 5 anwụọ, ị na-ere ọkụkọ 475. Ego otu ọkụkọ e rere na-efu = 192,000 / 475 = KES 404. Nke ahụ bụ ọnụ ahịa nlọghachi ego gị: ree n'okpuru ya, ị tụfuo ego. Ọ bụrụ na pasentị 15 anwụọ, ị na-ere naanị 425, ọnụ ahịa nlọghachi ego na-arị elu ruo ihe dị ka KES 452. N'ọnụ ahịa ire KES 550, ọkụkọ 475 na-ewete 261,250, uru 69,250. Iji chọta ọkụkọ ole ị ga-ere iji kpuchie ego e mefuru: 192,000 / 550 = 349.1, ya bụ ọkụkọ 350.",
            "Ọkụkọ akwa: gbakọọ kwa izu. Ọmụmaatụ: ọkụkọ nne 300 n'ọnụọgụ iyi akwa pasentị 80 na-enye 300 x 0.8 x 7 = akwa 1,680, ma ọ bụ tree 56 nke akwa 30. Ọ bụrụ na nri na ego ndị ọzọ bụ KES 15,000 kwa izu, ego otu tree na-efu bụ 15,000 / 56 = ihe dị ka KES 268. Tụnyere ya na ọnụ ahịa ndị na-azụ na-akwụ. Tupu ị malite, gụchaakwa mgbazinye ego ọ bụla ma ọ bụ nkwekọrịta gị na onye na-azụ ma ọ bụ onye na-ere ihe, ma jụọ onye ndụmọdụ i tụkwasịrị obi."
          ],
          steps: ["Depụta ego ọ bụla ìgwè ahụ na-efu site n'ọnụ ahịa obodo gị.", "Gbakọọ ha ọnụ maka ngụkọta ego.", "Tụọ ọnwụ ị tụrụ anya ya ma gbakọọ ọkụkọ ole ị ga-ere.", "Ego otu ọkụkọ = ngụkọta ego / ọkụkọ e rere: ọnụ ahịa nlọghachi ego gị.", "Ọkụkọ akwa: ego otu tree = ego kwa izu / tree a chịkọtara.", "Tụnyere ya na ọnụ ahịa ire; gbakọọ uru ma ọ bụ mfu."],
          words: [["Ọnụ ahịa nlọghachi ego (break-even price)", "ọnụ ahịa kwa ọkụkọ ma ọ bụ kwa tree nke ego na-abata na-akpuchi naanị ego niile e mefuru."], ["Uru", "ego batara wepụ ego niile e mefuru."], ["Mpempe akwụkwọ ego (cost sheet)", "ndepụta ego ọ bụla ìgwè ahụ na-efu, nwee ngụkọta."]],
          slides: [
            { title: "Depụta ego ọ bụla", bullets: ["Ụmụ ọkụkọ, nri, ọgwụ mgbochi na dọkịta anụmanụ, litter, mmanụ ọkụ", "Ụgwọ ọrụ, ụgbọ, ngwugwu", "Ọmụmaatụ ngụkọta: KES 192,000 maka ọkụkọ anụ 500"] },
            { title: "Ọnwụ na-eme ka otu ọkụkọ dị oke ọnụ", bullets: ["Pasentị 5 nwụrụ: e rere 475, KES 404 nke ọ bụla", "Pasentị 15 nwụrụ: e rere 425, ihe dị ka KES 452 nke ọ bụla", "Ọkụkọ nwụrụ anwụ ka riri nri"] },
            { title: "Nlọghachi ego na uru", bullets: ["Nlọghachi ego = ngụkọta ego / ọkụkọ e rere", "Na KES 550: 475 x 550 - 192,000 = KES 69,250", "Ọkụkọ a chọrọ iji kpuchie ego: 192,000 / 550 = 350"] },
            { title: "Ọkụkọ akwa: ego otu tree", bullets: ["Ọkụkọ nne 300 x 0.8 x 7 = akwa 1,680 = tree 56", "KES 15,000 / 56 = ihe dị ka KES 268 otu tree", "Ọnụ ahịa bụ ọmụmaatụ; jiri nke gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nwere ego maka otu ìgwè: ụdị ọkụkọ, nha ụlọ na ọnụọgụ ọkụkọ, otu ị ga-esi lekọta ụmụ ọkụkọ n'okpomọkụ, nri n'ọkwa ọ bụla, usoro ọgwụ mgbochi na iwu nchekwa ọrịa, ndekọ, na mpempe akwụkwọ ego nwere ego ọ bụla, ọnwụ ị tụrụ anya ya, ego otu ọkụkọ e rere ma ọ bụ otu tree na-efu, na ọnụ ahịa nlọghachi ego gị.",
          youCanNow: "ịgbakọ ego otu ìgwè na-efu, ịgụnye ọnwụ, na ịchọta ego otu ọkụkọ ma ọ bụ otu tree na-efu na ọnụ ahịa nlọghachi ego gị.",
          quickCheck: [
            { objective: "O6", q: "Otu ìgwè na-efu NGN 900,000, ị tụrụ anya ire ọkụkọ 450. Gịnị bụ ọnụ ahịa nlọghachi ego kwa ọkụkọ?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 kwa ọkụkọ." },
            { objective: "O6", q: "Gịnị mere ọnwụ ka ukwuu ji eme ka ego otu ọkụkọ na-efu rịa elu?", options: ["Ọkụkọ nwụrụ anwụ riri nri ma ego mefuru ha, mana e reghị ha", "A na-ere ọkụkọ nwụrụ anwụ n'ọnụ ahịa ka elu", "Nri na-adị ọnụ ala", "Ọgwụ mgbochi na-adị ọnụ ala"], answer: 0, why: "Otu ngụkọta ego ahụ ka a na-ekesa n'etiti ọkụkọ ole na ole e rere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ìgwè na-ewete uru",
        questions: [
          { objective: "O4", q: "Tupu ị zụta ọgwụ mgbochi, gịnị ka i kwesịrị ilele?", options: ["Na ọ bụ nke kacha ọnụ ala", "Na o si n'agrovet nwere ikike, ka nọ n'ụbọchị ya, e debekwara ya ka ọ dị jụụ", "Na o nweghị label", "Na onye agbata obi nwere nke fọdụrụ"], answer: 1, why: "Ọgwụ mgbochi gafere ụbọchị ya ma ọ bụ nke kpoo ọkụ nwere ike ọ gaghị echebe ìgwè ahụ." },
          { objective: "O4", q: "Ọkụkọ akwa gị na-anwụ n'ọtụtụ na mberede, ntụtụ isi ha gbara odo odo. Gịnị ka ị ga-eme?", options: ["Ree akwa ngwa ngwa", "Nye antibiotic si n'ụlọ ahịa", "Weta ọkụkọ ọhụrụ", "Debe ọkụkọ n'ime ụlọ, kwụsị ire na mbugharị niile, ma kpọọ dọkịta anụmanụ ozugbo"], answer: 3, why: "Ihe ịrịba ama ndị a na-egosi avian influenza, nke a ga-akọrịrị ozugbo." },
          { objective: "O5", q: "Gịnị mere a ga-eji chịkọta akwa opekata mpe ugboro abụọ n'ụbọchị?", options: ["Akwa a hapụrụ n'akwụ na-atụfu ịdị mma ma na-enweta nje", "Ọkụkọ nne na-eyi naanị n'abalị", "Ọ na-eme ka ọkụkọ nne yie okpukpu abụọ", "Ndị na-azụ na-ahọrọ akwa dị ọkụ"], answer: 0, why: "Ịchịkọta ya ọtụtụ ugboro na-eme ka akwa dị ọcha ma dị ọhụrụ." },
          { objective: "O5", q: "Ọkụkọ nne 250 yiri akwa 200 taa. Gịnị bụ ọnụọgụ iyi akwa?", options: ["pasentị 50", "pasentị 125", "pasentị 80", "pasentị 20"], answer: 2, why: "200 / 250 x 100 = pasentị 80." },
          { objective: "O6", q: "Ego ọkụkọ akwa kwa izu bụ GHS 2,400, ị chịkọtara tree 60. Gịnị bụ ego otu tree na-efu?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 kwa tree." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịzụ Ọkụkọ maka Azụmahịa",
    questions: [
      { objective: "O1", q: "Kedu ụdị ọkụkọ na-ewete ego ngwa ngwa karịa?", options: ["Ọkụkọ akwa", "Ọkụkọ anụ (broiler)", "Oke ọkụkọ maka ịmụ nwa", "Ọkụkọ obodo e mere ka ọ ka mma e debere maka akwa"], answer: 1, why: "A na-erekarị ọkụkọ anụ n'ime ihe dị ka izu 5 ruo 7." },
      { objective: "O1", q: "Gịnị ka ọkụkọ akwa chọrọ nke ọkụkọ anụ achọghị?", options: ["Onye na-azụ n'otu ụbọchị a kara aka", "Enweghị nri ọtụtụ ọnwa", "Ọtụtụ ọnwa nri tupu ego abata na ahịa akwa na-adịgide adịgide", "Ire n'ime izu isii"], answer: 2, why: "Ọkụkọ akwa na-amalite iyi akwa naanị n'ihe dị ka ọnwa 4 ruo 5, wee chọọ ndị na-azụ akwa mgbe niile." },
      { objective: "O1", q: "Ebee ka i kwesịrị ịzụ ụmụ ọkụkọ dị otu ụbọchị?", options: ["Na hatchery nke ọfịs anụ ụlọ gị ma ọ bụ dọkịta anụmanụ tụkwasịrị obi", "N'aka onye ọ bụla na-ere n'akụkụ ụzọ", "Site na mgbasa ozi kacha ọnụ ala n'ịntanetị", "N'ugbo nwere ọkụkọ na-arịa ọrịa"], answer: 0, why: "Hatchery a tụkwasịrị obi na-enye ụmụ ọkụkọ nwere ahụike nke ụdị kwesịrị ekwesị, nwee ndekọ ọgwụ mgbochi." },
      { objective: "O2", q: "Ụmụ ọkụkọ gbakọrọ n'otu akụkụ brooder, tere aka n'ihe okpomọkụ. Gịnị nwere ike ịkpata ya?", options: ["Okpomọkụ karịrị", "Nri karịrị akarị", "Ụra na-atụ ha", "Ikuku na-abata"], answer: 3, why: "Ịgbakọ n'otu akụkụ tere aka n'okpomọkụ na-egosi na ikuku na-abata." },
      { objective: "O2", q: "Gịnị na-eme ma ị kpakọ ọkụkọ karịrị akarị n'otu ụlọ?", options: ["Ha na-eto ngwa ngwa", "Nsogbu okpomọkụ, litter mmiri mmiri, ịkpọ ibe ha ọnụ na ọrịa", "Ha na-achọ obere mmiri", "Akwa na-ebu ibu"], answer: 1, why: "Ịkpakọ ọnụ na-emebi ahụike na uto." },
      { objective: "O2", q: "Gịnị mere brooder unyi ga-eji nwee ezigbo ikuku?", options: ["Anwụrụ unyi nwere ike igbu ụmụ ọkụkọ na ndị mmadụ", "Iji mee ka ụmụ ọkụkọ jụọ oyi", "Iji hapụ nnụnụ ọhịa ka ha bata", "Iji chekwaa unyi"], answer: 0, why: "Unyi na-ere ọkụ na-ewepụta anwụrụ na-egbu egbu n'ebe mechiri emechi." },
      { objective: "O2", q: "Gịnị ka i kwesịrị ime ụlọ ahụ tupu ìgwè ọhụrụ abịa?", options: ["Tinye ọkụkọ ọhụrụ n'etiti ndị ochie", "Hapụ litter ochie maka okpomọkụ", "Sachaa ya, gbaa ọgwụ nje ma hapụ ya ka o zuo ike dịka dọkịta anụmanụ dụrụ ọdụ", "Ọ dịghị ihe ọ bụla"], answer: 2, why: "Isacha, ịgba ọgwụ nje na ịhapụ ka o zuo ike na-egbochi ọrịa ịga n'ihu n'etiti ìgwè." },
      { objective: "O3", q: "Kedu usoro nri a na-agbasokarị maka ọkụkọ anụ?", options: ["Layers mash, wee starter", "Naanị growers mash", "Chick mash, wee layers mash", "Starter, wee finisher"], answer: 3, why: "Ọkụkọ anụ na-amalite na starter nwere protein dị ukwuu ma jiri finisher mechie." },
      { objective: "O3", q: "Gịnị mere a na-agaghị eji jupụta ihe nri ruo n'ọnụ?", options: ["Ọkụkọ na-akpụfụ nri ma mefuo ya", "Nri na-ajụ oyi", "Ọ na-eme ka ọkụkọ yie obere akwa", "Ọ na-adọta ndị dọkịta anụmanụ"], answer: 0, why: "Ihe nri juru oke na-emefu nri, nke bụ ego kacha ukwuu ìgwè ahụ na-efu." },
      { objective: "O3", q: "Gịnị na-abụkarị ihe ịrịba ama mbụ na ọkụkọ na-arịa ọrịa?", options: ["Ha na-eyi akwa buru ibu", "Abụba ha na-acha ọcha", "Mbelata mberede na mmiri ha na-aṅụ", "Ha na-eto ngwa ngwa"], answer: 2, why: "Ọkụkọ na-arịa ọrịa na-aṅụ obere mmiri, mgbe ụfọdụ tupu ihe ịrịba ama ndị ọzọ apụta." },
      { objective: "O4", q: "Kedu ọgwụ mgbochi ọkụkọ a na-ahụkarị n'Africa nke dọkịta anụmanụ na-ahazi?", options: ["Ọrịa Newcastle", "Rabies", "Foot-and-mouth", "East Coast fever"], answer: 0, why: "Ọrịa Newcastle bụ otu n'ime ọgwụ mgbochi ọkụkọ a na-ahụkarị; dọkịta anụmanụ na-ahazi usoro ahụ." },
      { objective: "O4", q: "Gịnị ka i kwesịrị idekọ oge ọ bụla ị gbara ọgwụ mgbochi?", options: ["Naanị ihu igwe", "Ọ dịghị ihe; agrovet na-edebe ndekọ", "Ọnụ ahịa akwa", "Ụbọchị, ọgwụ mgbochi, nọmba batch na otu e si nye ya"], answer: 3, why: "Ndekọ zuru ezu na-egosi ihe ìgwè ahụ natara ma na-enyere dọkịta anụmanụ aka." },
      { objective: "O4", q: "Onye na-ekpebi ma a ga-enye ọkụkọ na-arịa ọrịa antibiotic?", options: ["Onye ọrụ ugbo", "Dọkịta anụmanụ", "Onye na-azụ akwa", "Onye na-ere nri"], answer: 1, why: "Dọkịta anụmanụ na-ekpebi, ị na-edekọkwa ụbọchị oge nchere ga-agwụ site na label." },
      { objective: "O5", q: "Kedu otu i kwesịrị isi sachaa akwa ruru ntakịrị unyi?", options: ["Tinye ya na mmiri", "Jiri ncha kpọọ ya", "Jiri akwa nhicha kpọrọ nkụ hichaa ya", "Hapụ ya n'akwụ"], answer: 2, why: "Ihicha ya n'ihe kpọrọ nkụ na-egbochi idọbanye nje n'akpụkpọ akwa." },
      { objective: "O5", q: "Kedu nke kwesịrị ịdị na ndekọ ọkụkọ kwa ụbọchị?", options: ["Ọkụkọ, ọnwụ, nri, mmiri na akwa", "Naanị akwa e rere", "Ihe onye agbata obi rere", "Ọ dịghị ihe ma ọ bụrụ na ihe niile dị mma"], answer: 0, why: "Nọmba kwa ụbọchị na-egosi nsogbu n'oge ma na-enye nọmba maka mpempe akwụkwọ ego." },
      { objective: "O5", q: "I ji ọkụkọ anụ 1,000 malite, 80 nwụrụ. Gịnị bụ ọnụọgụ ọnwụ?", options: ["pasentị 80", "pasentị 0.8", "pasentị 12.5", "pasentị 8"], answer: 3, why: "80 / 1,000 x 100 = pasentị 8." },
      { objective: "O6", q: "Gịnị bụ ọnụ ahịa nlọghachi ego kwa ọkụkọ?", options: ["Ọnụ ahịa kacha elu n'ahịa", "Ngụkọta ego e kewara site n'ọkụkọ e rere", "Ọnụ ahịa otu nwa ọkụkọ", "Naanị ego nri"], answer: 1, why: "N'ọnụ ahịa a, ego na-abata na-akpuchi naanị ego niile e mefuru." },
      { objective: "O6", q: "Otu ìgwè na-efu XOF 1,500,000, ị rere ọkụkọ 500 na XOF 4,000. Gịnị bụ uru?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = ego batara 2,000,000; wepụ ego e mefuru 1,500,000 = uru XOF 500,000." },
      { objective: "O6", q: "Ọkụkọ nne 300 na-eyi akwa na pasentị 80 otu izu. Ihe dị ka tree ole nke akwa 30?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = akwa 1,680; 1,680 / 30 = tree 56." },
      { objective: "O6", q: "Ego otu ọkụkọ e rere na-efu gị bụ KES 404, ndị na-azụ na-akwụ KES 380. Gịnị na-eme?", options: ["Ị na-enweta uru KES 24 kwa ọkụkọ", "Ego gị na-alọghachi kpọmkwem", "Ọ dịghị ihe; ọnụ ahịa adịghị mkpa", "Ị na-atụfu ihe dị ka KES 24 kwa ọkụkọ"], answer: 3, why: "Ire n'okpuru ọnụ ahịa nlọghachi ego na-atụfu ego n'ọkụkọ ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ụdị ọkụkọ na ahịa", objective: "O1", notYet: "Enweghị ihe mere e ji họrọ ya, ma ọ bụ a kpọghị aha onye na-azụ.", meets: "Na-akpọ ụdị ọkụkọ, hatchery a tụkwasịrị obi na opekata mpe ihe atọ mere o ji dabara ahịa, ego na oge.", exceeds: "Na-akpọ aha otu onye na-azụ na mgbe ọ na-azụ, ma hazie ìgwè ahụ ka o kwekọọ." },
      { name: "Ụlọ, ohere na brooding", objective: "O2", notYet: "Agbakọghị ọnụọgụ ọkụkọ site na nha ala, ma ọ bụ enweghị atụmatụ brooding.", meets: "Nha ala x ọkụkọ kwa square metre site n'akwụkwọ nduzi; ihazi brooding nke e ji omume ụmụ ọkụkọ lelee okpomọkụ ya.", exceeds: "Na-ekwukwa maka isacha, ịgba ọgwụ nje na ịhapụ ụlọ ka o zuo ike, na ezigbo ikuku maka ihe okpomọkụ." },
      { name: "Atụmatụ nri na mmiri", objective: "O3", notYet: "Ọkwa ma ọ bụ ụdị nri adịghị, ma ọ bụ enweghị atụmatụ mmiri.", meets: "Ụdị nri maka ọkwa ọ bụla, ụbọchị ịgbanwe ya, ihe nri na ihe mmiri zuru ezu, na mmiri dị ọcha mgbe niile.", exceeds: "Na-atụ akpa nri ole kwa ọkwa na onye na-elele mmiri kwa ụbọchị." },
      { name: "Ọgwụ mgbochi na nchekwa ọrịa", objective: "O4", notYet: "Dọkịta anụmanụ esonyeghị, ma ọ bụ e chepụtara ọnụọgụ ọgwụ, ma ọ bụ enweghị iwu nchekwa ọrịa.", meets: "Usoro dọkịta anụmanụ e debanyere aha hiwere, e dekọrọ ya; all-in, all-out na opekata mpe iwu nchekwa ọrịa anọ; ịkọ avian influenza.", exceeds: "Gụnyere aha na nọmba ekwentị dọkịta anụmanụ na ndekọ ọgwụ mgbochi nke hatchery." },
      { name: "Ndekọ", objective: "O5", notYet: "Enweghị atụmatụ ndekọ kwa ụbọchị.", meets: "Ndekọ kwa ụbọchị nke ọkụkọ, ọnwụ, nri, mmiri na akwa, tinyere ọgwụ mgbochi, ọgwụgwọ na ihe e rere.", exceeds: "Na-egosi otu a ga-esi lelee ọnụọgụ ọnwụ na ọnụọgụ iyi akwa kwa izu." },
      { name: "Mpempe akwụkwọ ego na nlọghachi ego", objective: "O6", notYet: "Ụfọdụ ego adịghị, e leghị ọnwụ anya, ma ọ bụ mgbakọ ezighi ezi.", meets: "E depụtara ego ọ bụla, e tinyere ọnwụ n'uche, ego otu ọkụkọ ma ọ bụ otu tree na ọnụ ahịa nlọghachi ego ziri ezi.", exceeds: "Na-atụnyere nlọghachi ego na ezi ọnụ ahịa ndị na-azụ ma gosi uru n'ọkwa ọnwụ abụọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rụrụ ìgwè ha na-esote site n'atụmatụ e dere ede na ndekọ kwa ụbọchị (nnyocha nsochi ụbọchị 30)",
      "Ọnwụ kwa ìgwè nke ndị na-amụ ihe kọrọ tupu na mgbe ihe ọmụmụ a gachara",
      "Ndị na-amụ ihe maara ma nwee ike ikwu ego otu ọkụkọ ma ọ bụ otu tree na-efu ha mgbe ha na-ere",
      "Avian influenza ma ọ bụ ọrịa Newcastle a na-enyo enyo nke ndị na-amụ ihe kọọrọ dọkịta anụmanụ n'ime otu ụbọchị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị n'ekwentị; spreadsheet n'ekwentị bụ nhọrọ",
      "Teepu nha maka ụlọ ọkụkọ",
      "Ọnụ ahịa obodo maka ụmụ ọkụkọ, nri, ọgwụ mgbochi na ego ndị ọzọ, na aha na nọmba ekwentị dọkịta anụmanụ na hatchery a tụkwasịrị obi",
      "Ihe dị ka nkeji 70 ruo 80 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ahụ, chịkọta ọnụ ahịa obodo maka ụmụ ọkụkọ, nri na ọgwụ mgbochi ka ndị na-amụ ihe gbakọọ ego otu ìgwè site n'ezi nọmba.",
      "Kpọọ dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ nọ n'obodo ka ọ bịa nnọkọ Isi 2 kọwaa usoro ọgwụ mgbochi maka obodo gị; ejila mgbe ọ bụla nye ọnụọgụ ọgwụ mgbochi ma ọ bụ ọgwụ n'onwe gị.",
      "Ọ bụrụ na ị gaa leta ugbo ọkụkọ, soro iwu nchekwa ọrịa ya, agakwala ugbo ọkụkọ ọzọ n'otu ụbọchị ahụ.",
      "Gbakọọ ọmụmaatụ nlọghachi ego n'ihe ode ihe (board), wee mee ka ndị na-amụ ihe n'abụọ n'abụọ gbakọọ ego ìgwè nke ha.",
      "Jiri rubric tụọ akara atụmatụ ìgwè nwere ego ọ bụla, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

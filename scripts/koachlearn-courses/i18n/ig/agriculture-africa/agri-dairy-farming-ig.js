"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety rule kept: the course never gives drug, vaccine or hormone doses or withdrawal periods as numbers; it tells students to follow the vet and the label.

const ILRI_MANUAL = { name: "ILRI: Akwụkwọ nkuzi maka obere ndị na-azụ ehi mmiri ara (Goopy na Gakige, ILRI Manual 24, mbipụta nke 2, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, mmepụta mmiri ara na ngwaahịa ya: ichekwa mmiri ara (mee ka ọ jụọ oyi ruo 4 °C n'ime awa 3 ruo 4 mgbe a mịchara ya)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, mmepụta mmiri ara na ngwaahịa ya: ịdị mma mmiri ara na nnwale ya", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, mmepụta mmiri ara na ngwaahịa ya: ahụike anụmanụ (ọrịa ara na-ebelata mmiri ara na ịdị mma ya)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Iji California Mastitis Test (usoro na otu esi agụ nsonaazụ ya)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (ụlọ ọrụ na-achịkwa ahịa mmiri ara na Kenya; ọ na-enye ndị na-azụ ma na-ere mmiri ara ikike)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: ihe a chọrọ iji nweta ikike (licence)", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-ig",
  lang: "ig",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Ịzụ Anụ Mmiri Ara: Mmepụta Mmiri Ara na Ịdị Ọcha",
  skills: "Ịhọrọ ehi na ewu mmiri ara, Ịhazi ụlọ zero-grazing, Ịmị mmiri ara n'ụzọ dị ọcha, Ịhụ na ịnwale ọrịa ara (mastitis), Ime ka mmiri ara jụọ oyi na ire mmiri ara dị mma, Ịzụ ụmụ ehi na ịgbakọ ego ọ na-efu kwa lita",
  outcome: "ịrụ obere ugbo mmiri ara na-emepụta mmiri ara dị ọcha nke onye na-azụ ga-anabata: ịhọrọ ehi ma ọ bụ ewu gị ma nye ha ezigbo ụlọ, ịmị mmiri ara ha n'usoro dị ọcha, ịchọpụta ọrịa ara n'oge site na California Mastitis Test, ime ka mmiri ara jụọ oyi ma ree nke gafere nnwale ịdị mma, ịzụ ụmụ ehi nwere ahụike, na ịgbakọ ego lita ọ bụla na-efu gị.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị na-azụ anụ mmiri ara na ndị na-eto eto n'ọrụ a, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, na ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ) na Kenya, Nigeria, Ghana, Burkina Faso na n'Africa niile, ndị na-azụ ma ọ bụ na-eme atụmatụ ịzụ ehi mmiri ara ma ọ bụ ewu mmiri ara. A na-ere mmiri ara dị ọcha ọnụ karịa, a naghị ajụkarị ya, ọ na-echebekwa ezinụlọ; mmiri ara ruru unyi na ọrịa ara zoro ezo na-eri uru gị nwayọọ nwayọọ.",
    "Isi 1 na-ahazi ugbo mmiri ara: ịhọrọ anụ, ụlọ zero-grazing na inye nri maka mmiri ara, na usoro ịmị mmiri ara dị ọcha. Isi 2 na-echebe mmiri ara ma na-ere ya: ọrịa ara na California Mastitis Test, ime ka mmiri ara jụọ oyi na ire ya nye cooperative (otu ndị ọrụ ugbo) ma ọ bụ ụlọ ọrụ na-edozi mmiri ara, na ịzụ ụmụ ehi, ndekọ na ego ọ na-efu kwa lita. A na-akụzi banyere nri n'ụzọ zuru ezu n'ihe ọmụmụ \"Livestock Nutrition and Feed Formulation with Local Ingredients\" (Nri Anụ Ụlọ na Ịgwakọta Nri site n'Ihe Dị n'Obodo); ebe a, ị ga-amụta otu nri si metụta mmiri ara na ego.",
    "Ihe ọmụmụ a anaghị enye ọnụọgụ ọgwụ, ọgwụ mgbochi (vaccine) ma ọ bụ hormone, ma ọ bụ oge nchere (withdrawal period). Mgbe niile, soro ihe dọkịta anụmanụ gị ma ọ bụ onye ọrụ ahụike anụmanụ na akwụkwọ dị n'ahụ ọgwụ ahụ (label) kwuru. Ọnụ ego e dere bụ naanị ọmụmaatụ; jiri ọnụ ahịa nke gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme n'ugbo gị. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Mee peeji abụọ maka ugbo mmiri ara gị (ma ọ bụ ọmụmaatụ dị ka ehi 3 na Kiambu ma ọ bụ ewu mmiri ara 10 nso Kumasi). Peeji 1, usoro ịdị ọcha n'ịmị mmiri ara ị ga-akwanye n'ebe ị na-amị mmiri ara: nzọụkwụ niile site n'ịkwado onye na-amị mmiri ara na ngwa ọrụ ruo n'ime ka mmiri ara jụọ oyi, ihe ịrịba ama ọrịa ara ị ga-ele anya, mgbe ị na-eme CMT, na ihe a na-eme mmiri ara anụ na-arịa ọrịa ma ọ bụ nke a gwọrọ ọgwụ. Peeji 2, mpempe akwụkwọ ego ọ na-efu kwa lita maka otu ọnwa: ego ọ bụla i mefuru (nri na ahịhịa nri, ụgwọ ọrụ, dọkịta anụmanụ na ịmụ nwa, ndị ọzọ), lita i mepụtara, ego ọ na-efu kwa lita, ọnụ ahịa onye na-azụ gị na-akwụ, na otu mgbanwe ị ga-eme iji belata ego ọ na-efu kwa lita.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị na-azụ anụ mmiri ara na ndị na-eto eto n'ọrụ a, ndị ọrụ ugbo, ndị ntorobịa na-azụ ahịa ugbo, na ndị ọrụ extension na Kenya, Nigeria, Ghana, West Africa na-asụ French na n'ebe ndị ọzọ n'Africa, ndị na-azụ ehi 1 ruo 20 ma ọ bụ obere ìgwè ewu mmiri ara, nke ka ukwuu n'usoro zero-grazing ma ọ bụ ọkara zero-grazing.",
    startingPoint: "Ha nwere ike inye anụ nri na mmiri, mịa mmiri ara ha n'aka, ma ree mmiri ara n'obodo. Ọtụtụ na-amị mmiri ara n'enweghị usoro ịdị ọcha a kara aka, na-eji akpa plastik, na-ahụ ọrịa ara naanị mgbe mmiri ara mebiri emebi, ma amaghị ego otu lita na-efu ha imepụta.",
    gap: "Ndị na-azụ na cooperative na-anwale mmiri ara ma na-ajụ ma ọ bụ na-akwụ obere ego maka mmiri ara gbara ụka, nke a gbanyere mmiri, ma ọ bụ nke nwere ihe fọdụrụ n'ọgwụ (drug residues). Ọrịa ara zoro ezo (subclinical) na-ebelata mmiri ara n'enweghị ihe ịrịba ama a na-ahụ anya. Ndị ọrụ ugbo chọrọ usoro na-emepụta mmiri ara dị ọcha ma jụrụ oyi, ụzọ ịchọpụta ọrịa ara n'oge, na ndekọ na-egosi ma lita ọ bụla na-ewetara uru.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone; igwe mgbakọ; ndekọ n'akwụkwọ dịkwa mma",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti oge ịmị mmiri ara",
      "Ọtụtụ ugbo enweghị ọkụ eletrik ma ọ bụ igwe na-eme ka mmiri ara jụọ oyi",
      "Ahụike anụmanụ: enweghị ọnụọgụ ọgwụ, ọgwụ mgbochi ma ọ bụ hormone, ma ọ bụ ọnụọgụ oge nchere; soro dọkịta anụmanụ na label",
      "Ọnụ ego bụ ọmụmaatụ; ọnụ ahịa, ikike na iwu ndị na-azụ dị iche iche site na mba ruo mba na site n'onye na-azụ ruo onye ọzọ"
    ],
    prerequisites: "Ọ dịghị. \"Ahụike na Nlekọta Anụ Ụlọ\" (ilele ahụike anụ kwa ụbọchị) na \"Livestock Nutrition and Feed Formulation with Local Ingredients\" (nhazi nri) bụ ihe ọmụmụ ndị bara uru iso ya."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ala gị, ego gị, ahịhịa nri gị na ahịa gị", action: "ịhọrọ ehi ma ọ bụ ewu mmiri ara ma hazie ụlọ zero-grazing nwere ọnụ ụlọ anụ, ebe nri, mmiri na ebe mmiri na-agbapụ", standard: "ma kpọọ aha opekata mpe ihe anọ i lelere tupu ị zụta" },
    { id: "O2", condition: "Mgbe ọ bụla ị na-amị mmiri ara", action: "ime usoro ịmị mmiri ara dị ọcha site n'ịkwado onye na-amị ya na ngwa ọrụ ruo n'ịchacha mmiri ara na ikpuchi ya", standard: "ma mee nzọụkwụ ọ bụla n'usoro ya n'agafeghị nke ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ehi ma ọ bụ ewu na-enye mmiri ara", action: "ilele ihe ịrịba ama ọrịa ara ma mee California Mastitis Test n'ọnụ ara ọ bụla", standard: "ma dekọọ nsonaazụ maka akụkụ ara ọ bụla ma kpọọ dọkịta anụmanụ maka anụ ọ bụla nsonaazụ ya gosiri ọrịa ma ọ bụ na-arịa ọrịa" },
    { id: "O4", condition: "Mgbe i mịchara mmiri ara, ma i nwere igwe na-eme ka ọ jụọ oyi ma ọ bụ na i nweghị", action: "ime ka mmiri ara jụọ oyi, chekwaa ya ma bufee ya ka o wee gafee nnwale ịdị mma nke onye na-azụ", standard: "ma ruo n'igwe ahụ ma ọ bụ n'aka onye na-azụ n'oge o kwuru, n'agbakwunyeghị ihe ọ bụla na mmiri ara ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị ndekọ ugbo otu ọnwa", action: "ịgbakọ ego otu lita mmiri ara na-efu ma tụnyere ya na ọnụ ahịa onye na-azụ gị na-akwụ", standard: "ma tinye ego niile i mefuru ma gbakọọ ya nke ọma" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi ugbo mmiri ara dị ọcha",
      lessons: [
        {
          title: "Ịhọrọ ehi na ewu mmiri ara",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ anụ mmiri ara dabara nri gị, ego gị na ahịa gị.",
          text: [
            "Anụ mmiri ara na-adị mma naanị dị ka nri na nlekọta ị nwere ike inye ya. Ehi Friesian (Holstein) na-enye ọtụtụ mmiri ara chọrọ nri dị mma na mmiri buru ibu kwa ụbọchị; ọ bụrụ na ị nweghị ike inye ya nke ahụ, ehi a gwakọtara ya na ụdị ehi obodo, ma ọ bụ ụdị ehi pere mpe dị ka Jersey ma ọ bụ Ayrshire, nwere ike iwetara gị uru karịa. N'ebe ọkọchị na-adị ike, ụdị ehi obodo siri ike na ndị a gwakọtara, dị ka zebu a gwakọtara n'ugwu Nigeria ma ọ bụ zebu Azawak na Niger na Burkina Faso, na-anagide okpomọkụ na ahịhịa nri na-adịghị mma karịa.",
            "Ewu mmiri ara dabara obere ala na obere ego. Ha na-eri obere nri, ha anaghị efu ego dị ukwuu, mmiri ara ewu nwekwara ndị na-azụ ya. Na Kenya, a na-azụ ewu Saanen, Toggenburg na Alpine na ndị a gwakọtara ha na ewu obodo maka mmiri ara.",
            "Tupu ị zụta, jụọ onwe gị: Ị nwere ahịhịa nri na mmiri n'afọ niile, gụnyere n'oge ọkọchị? Onye ga-azụ mmiri ara gị, n'ọnụ ahịa ole? Ị nwere ike ịchọta dọkịta anụmanụ na ọrụ artificial insemination (AI)? Wee lelee anụ ahụ: zụta n'aka onye ọrụ ugbo a ma ama nwere ndekọ, chọọ anụ nwere ahụike ma na-eche nche, nwere ara mara mma na ọnụ ara anọ (ehi) ma ọ bụ abụọ (ewu) na-arụ ọrụ, jụọ maka mmiri ara o nyerela, ịmụ nwa ya na ọrịa o nwere na mbụ, ma rịọ dọkịta anụmanụ ma ọ bụ onye ọrụ ahụike anụmanụ ka o lelee ya tupu ị kwụọ ụgwọ."
          ],
          steps: ["Depụta ahịhịa nri na mmiri i nwere n'oge udu mmiri na n'oge ọkọchị.", "Chọta onye ga-azụ mmiri ara gị na ọnụ ahịa ya kwa lita.", "Chọta dọkịta anụmanụ na ọrụ AI kacha nso gị.", "Họrọ ụdị ehi ma ọ bụ nke a gwakọtara nri gị nwere ike ịzụ.", "Zụta n'aka onye a ma ama nwere ndekọ; lelee ara, ọnụ ara na ahụike.", "Rịọ dọkịta anụmanụ ka o lelee anụ ahụ tupu ị kwụọ ụgwọ."],
          words: [["Ụdị anụ mmiri ara", "ụdị anụ a na-azụ maka mmiri ara, dị ka ehi Friesian, Jersey ma ọ bụ Ayrshire, ma ọ bụ ewu Saanen na Toggenburg."], ["Anụ a gwakọtara (cross)", "anụ nne na nna ya bụ ụdị abụọ dị iche, nke ka ukwuu ụdị mmiri ara si mba ọzọ na ụdị obodo."], ["Artificial insemination (AI)", "itinye mkpụrụ nwoke nke oke ehi ma ọ bụ oke ewu a họọrọ n'ime nne anụ, nke onye ọkachamara a zụrụ azụ na-eme."]],
          slides: [
            { title: "Nri na-ekpebi ụdị anụ", bullets: ["Ndị na-enye ọtụtụ mmiri ara chọrọ ọtụtụ nri dị mma na mmiri", "Ndị a gwakọtara na ụdị pere mpe dabara obere nri", "Ụdị obodo siri ike na-anagide okpomọkụ na ọkọchị"] },
            { title: "Ewu mmiri ara", bullets: ["Obere nri, obere ego, obere ala", "Saanen, Toggenburg, Alpine na ndị a gwakọtara", "Buru ụzọ chọta ndị na-azụ mmiri ara ewu"] },
            { title: "Tupu ị zụta", bullets: ["Ahịhịa nri na mmiri n'afọ niile?", "Onye na-azụ na ọnụ ahịa kwa lita?", "Dọkịta anụmanụ na ọrụ AI ị nwere ike ịchọta?"] },
            { title: "Lelee anụ ahụ", bullets: ["Onye na-ere a ma ama nwere ndekọ", "Ahụike, na-eche nche; ara mara mma; ọnụ ara niile na-arụ ọrụ", "Dọkịta anụmanụ lelee ya tupu ị kwụọ ụgwọ"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Dee ndepụta nke gị maka ịzụ anụ: ahịhịa nri na mmiri i nwere maka oge ọkọchị, onye na-azụ gị na ọnụ ahịa ya, dọkịta anụmanụ na ọrụ AI kacha nso gị, ụdị ehi ma ọ bụ nke a gwakọtara ị nwere ike inye nri, na ihe ise ị ga-elele n'ahụ anụ ahụ tupu ị kwụọ ụgwọ.",
          youCanNow: "ịhọrọ ụdị anụ mmiri ara dabara nri gị na ahịa gị, na ilele anụ nke ọma tupu ị zụta ya.",
          quickCheck: [
            { objective: "O1", q: "I nwere obere ahịhịa nri n'oge ọkọchị. Kedu nhọrọ kacha amamihe?", options: ["Zụta ehi Friesian kacha enye mmiri ara ị hụrụ", "Zụta ehi a gwakọtara ma ọ bụ ụdị pere mpe nri gị nwere ike ịzụ", "Zụta ọtụtụ ehi ka ụfọdụ wee dị ndụ", "Zụta ugbu a, chee maka ahịhịa nri emesịa"], answer: 1, why: "Ehi na-enye naanị ihe nri ya kwere; ehi a gwakọtara ma ọ bụ ụdị pere mpe dabara obere ahịhịa nri." },
            { objective: "O1", q: "Kedu ihe ị ga-elele tupu ị kwụọ ụgwọ maka ehi?", options: ["Rịọ dọkịta anụmanụ ka o lelee ya ma lee ndekọ ya", "Gụọ ntụpọ dị n'ahụ ya", "Lelee naanị agba ya", "Jụọ onye na-ere ma ọ dị mma"], answer: 0, why: "Nlele dọkịta anụmanụ na ndekọ na-egosi ahụike ya, mmiri ara o nyerela na ịmụ nwa ya." }
          ]
        },
        {
          title: "Ụlọ zero-grazing na inye nri maka mmiri ara",
          objectives: ["O1"],
          minutes: 6,
          goal: "Hazie ụlọ zero-grazing ma mee atụmatụ nri na mmiri maka mmiri ara.",
          text: [
            "N'usoro zero-grazing, anụ ndị ahụ na-anọ n'ụlọ ha, ị na-ebutere ha nri, dị ka ahịhịa Napier a wara awa, ahịhịa nri ndị ọzọ na ihe fọdụrụ n'ubi. Ọ na-echekwa ala ma na-eme ka ị chịkwaa nri ha, mana ọ chọrọ ọrụ kwa ụbọchị na ịdị ọcha.",
            "Ezigbo ụlọ nwere: elu ụlọ maka ndò na mmiri ozuzo; ọnụ ụlọ maka ehi ọ bụla nwere ihe ndina kpọrọ nkụ ma dị nro ka o wee dinara ala; ala dị ndịda ka mmamịrị na mmiri gbapụ; ebe nri na ebe mmiri dị mfe ihicha; ebe dị ọcha, dị iche, maka ịmị mmiri ara; ọnụ ụlọ ụmụ ehi; olulu nsị dị anya site n'ebe a na-amị mmiri ara; na ebe a na-echekwa nri. Maka ewu, ala e weliri elu nwere oghere na-eme ka ha kpọọ nkụ. Kpochapụ nsị kwa ụbọchị, n'ihi na ihe ndina ruru unyi bụ isi ihe na-akpata ọrịa ara.",
            "A na-esi na nri na mmiri emepụta mmiri ara. Ehi na-enye mmiri ara chọrọ ọtụtụ mmiri dị ọcha ụbọchị niile, ezigbo nri ahịhịa (roughage), na ike, protein na mineral ndị ọzọ n'ọnụ ọgụgụ kwesịrị ekwesị; mmiri ara na-ada ngwa ngwa mgbe mmiri ma ọ bụ nri adịghị ezu. A na-akụzi otu esi ahazi nri site n'ihe dị n'obodo n'ihe ọmụmụ \"Livestock Nutrition and Feed Formulation with Local Ingredients\". Ebe a, cheta ihe abụọ: dekọọ ego nri ọ bụla na-efu, n'ihi na nri na-abụkarị ihe kacha efu gị ego, ma gbanwee nri nwayọọ nwayọọ."
          ],
          steps: ["Kaa akara ụlọ nwere elu n'ala mmiri na-agbapụ nke ọma.", "Nye anụ ọ bụla ọnụ ụlọ nwere ihe ndina kpọrọ nkụ na ala dị ndịda.", "Tinye ebe nri na ebe mmiri n'ebe dị mfe ijupụta na ihicha.", "Tinye ebe dị ọcha maka ịmị mmiri ara, ọnụ ụlọ ụmụ ehi na ebe nchekwa nri.", "Tinye olulu nsị n'ebe dị anya site n'ebe a na-amị mmiri ara na mmiri.", "Kpochapụ nsị kwa ụbọchị; dekọọ nri i zụtara na ego ya."],
          words: [["Zero-grazing", "idebe anụ n'ụlọ ha na ibutere ha nri niile kama ịhapụ ha ka ha gaa ita ahịhịa."], ["Ihe ndina (bedding)", "ihe kpọrọ nkụ ma dị nro a na-agbasa n'ala ebe anụ na-edina, dị ka ntụ osisi a kpụrụ akpụ, ahịhịa kpọrọ nkụ ma ọ bụ ájá."], ["Nri ahịhịa (roughage)", "nri buru ibu dị ka ahịhịa, ahịhịa nri, ahịhịa a mịrị amị (hay) na ihe fọdụrụ n'ubi."]],
          slides: [
            { title: "Zero-grazing", bullets: ["Anụ na-anọ n'ụlọ; ị na-ebutere ha nri", "Ọ na-echekwa ala; ị na-achịkwa nri", "Ọ chọrọ ọrụ kwa ụbọchị na ịdị ọcha"] },
            { title: "Ezigbo ụlọ", bullets: ["Elu ụlọ; otu ọnụ ụlọ maka ehi ọ bụla; ihe ndina kpọrọ nkụ", "Ala dị ndịda nke mmiri na-agbapụ", "Ebe nri na ebe mmiri dị mfe ihicha"] },
            { title: "Debe ya ọcha", bullets: ["Ebe dị ọcha, dị iche, maka ịmị mmiri ara", "Ọnụ ụlọ ụmụ ehi; ebe nchekwa nri", "Olulu nsị dị anya site n'ebe ịmị mmiri ara; kpochaa kwa ụbọchị"] },
            { title: "Nri na-emepụta mmiri ara", bullets: ["Ọtụtụ mmiri dị ọcha ụbọchị niile", "Nri ahịhịa na ike, protein, mineral kwesịrị ekwesị", "Dekọọ ego nri; gbanwee nri nwayọọ nwayọọ"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "See obere eserese ụlọ zero-grazing gị (ma ọ bụ nke ị ga-ewu): ọnụ ụlọ anụ, ihe ndina, ndịda ala, ebe nri, ebe mmiri, ebe ịmị mmiri ara, ọnụ ụlọ ụmụ ehi, ebe nchekwa nri na olulu nsị. Kaa akara otu ihe ị ga-ebu ụzọ dozie.",
          youCanNow: "ịhazi ụlọ zero-grazing na-eme ka anụ kpọọ nkụ ma dị ọcha, na ịkọwa otu nri na mmiri si aghọ mmiri ara.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ala ọnụ ụlọ zero-grazing ji kwesị ịdị ndịda?", options: ["Ka ehi nwee ike ịmịpụ apụ", "Ka mmamịrị na mmiri gbapụ ma ihe ndina kpọọ nkụ", "Iji chekwaa simenti", "Ka nri tụgharịa ruo n'ehi"], answer: 1, why: "Ala na ihe ndina kpọrọ nkụ na-eme ka ara dị ọcha ma belata ọrịa ara." },
            { objective: "O1", q: "Ebee ka olulu nsị kwesịrị ịdị?", options: ["N'akụkụ ebe mmiri", "N'ime ebe a na-amị mmiri ara", "N'ebe dị anya site n'ebe ịmị mmiri ara na mmiri", "N'okpuru ebe nchekwa nri"], answer: 2, why: "Nsị dị nso n'ebe ịmị mmiri ara ma ọ bụ mmiri na-agbasa unyi na nje n'ime mmiri ara." }
          ]
        },
        {
          title: "Usoro ịmị mmiri ara dị ọcha",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mịa mmiri ara ehi ma ọ bụ ewu n'usoro dị ọcha, nzọụkwụ n'otu n'otu.",
          text: [
            "Nje na-abanye n'ime mmiri ara site n'aka ruru unyi, ara ruru unyi, akpa ruru unyi na ikuku nke ụlọ anụ ruru unyi. Usoro a kara aka, nke a na-eme otu ụzọ ahụ mgbe ọ bụla a na-amị mmiri ara, na-egbochi ha. Mịa mmiri ara n'otu oge ahụ kwa ụbọchị, n'ebe dị ọcha, n'udo: anụ ụjọ jidere na-enye obere mmiri ara.",
            "Jiri akpa igwe dị ire (aluminium ma ọ bụ stainless steel) dị mfe ihicha. Jerrican plastik na-akpụ akara ma na-ejide unyi, ọtụtụ ndị na-azụkwa na-ajụ mmiri ara e ji ha bute. Saa akpa ndị ahụ mgbe ọ bụla i jiri ha, jiri mmiri dị ọcha na ncha, kwọọ ha, ma kpọọ ha nkụ n'anwụ, ọnụ ha chere ala, n'elu ihe nkwado.",
            "Buru ụzọ mịa mmiri ara anụ nwere ahụike, mee anụ na-arịa ọrịa ma ọ bụ nke a gwọrọ ọgwụ n'ikpeazụ. Debe mmiri ara anụ e nyere ọgwụ iche, erekwala ya ruo mgbe oge nchere (withdrawal period) e dere na label ọgwụ ahụ, ma ọ bụ nke dọkịta anụmanụ gị kwuru, gafere."
          ],
          steps: ["Yiri uwe dị ọcha; debe mbọ aka mkpụmkpụ; jiri ncha saa aka gị.", "Bute akpa igwe dị ọcha ma kpọọ nkụ, strip cup, na ihe nchacha ma ọ bụ nzacha dị ọcha.", "Kee ma ọ bụ mee ka anụ ahụ dajụọ n'udo n'ebe ịmị mmiri ara dị ọcha.", "Saa ọnụ ara (na ara naanị ma ọ bụrụ na o ruru unyi) na mmiri dị ọcha na-ekpo ọkụ ntakịrị, ma kpọọ ha nkụ na akwa ma ọ bụ akwụkwọ dị ọcha dị iche maka anụ ọ bụla.", "Mịpụta mmiri ara mbụ site n'ọnụ ara ọ bụla n'ime strip cup ma lee ma o nwere mkpụkọ, ihe dị ka akpụkpọ ma ọ bụ mmiri ara dị ka mmiri.", "Mịa mmiri ara ngwa ngwa ma mịchapụ ya niile, jiri aka gị niile, ọ bụghị ịdọkpụ ya na mkpịsị aka.", "Tinye ọnụ ara n'ime teat dip ma ọ bụ fesa ya mgbe i mịchara ma ọ bụrụ na dọkịta anụmanụ gị kwuru ya, ma nye anụ ahụ nri ka o guzoro ọtụtụ nkeji.", "Chachaa mmiri ara ahụ, kpuchie ya, ma malite ime ka ọ jụọ oyi ozugbo."],
          words: [["Strip cup", "iko nwere efere ojii ma ọ bụ akwa ojii n'elu ya; mmiri ara mbụ a mịpụtara na-egosi mkpụkọ ma ọ bụ ihe dị ka akpụkpọ na ya."], ["Teat dip", "mmiri ọgwụ na-egbu nje a na-etinye ọnụ ara na ya mgbe a mịchara mmiri ara; jiri nke dọkịta anụmanụ gị kwadoro, dị ka label kwuru."], ["Oge nchere (withdrawal period)", "oge mgbe e nyere anụ ọgwụ nke a na-ekwesịghị ire ma ọ bụ iri mmiri ara ma ọ bụ anụ ya; e dere ya na label ma ọ bụ dọkịta anụmanụ na-ekwu ya."]],
          slides: [
            { title: "Ebe nje si abịa", bullets: ["Aka na ara ruru unyi", "Akpa ruru unyi", "Ụlọ anụ ruru unyi, nwere uzuzu"] },
            { title: "Tupu ịmị mmiri ara", bullets: ["Uwe dị ọcha, mbọ aka mkpụmkpụ, saa aka", "Akpa igwe dị ọcha ma kpọọ nkụ", "Saa ma kpọọ ọnụ ara nkụ: otu akwa maka anụ ọ bụla"] },
            { title: "Mgbe ị na-amị mmiri ara", bullets: ["Strip cup: lelee mmiri ara mbụ", "Mịa ngwa ngwa ma mịchapụ ya niile, jiri aka niile", "Anụ nwere ahụike mbụ, ndị na-arịa ọrịa ma ọ bụ a gwọrọ n'ikpeazụ"] },
            { title: "Mgbe i mịchara", bullets: ["Teat dip ma ọ bụrụ na dọkịta anụmanụ kwuru", "Chachaa, kpuchie ma mee ka mmiri ara jụọ oyi ozugbo", "Anụ a gwọrọ: erela ruo mgbe label kwere"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Lee ma ọ bụ mee otu oge ịmị mmiri ara n'ugbo gị ma kaa akara nzọụkwụ ọ bụla dị na nkuzi a. Dee nzọụkwụ ọ bụla a hapụrụ na otu mgbanwe ị ga-eme echi, dị ka otu akwa nhicha maka anụ ọ bụla ma ọ bụ akpa igwe kama jerrican.",
          youCanNow: "ịmị mmiri ara ehi ma ọ bụ ewu n'usoro dị ọcha na-egbochi nje ịbanye n'ime mmiri ara.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji mịpụta mmiri ara mbụ n'ime strip cup?", options: ["Iji nye nwamba nri", "Ọ bụ mmiri ara kacha baa ụba", "Iji hụ mkpụkọ ma ọ bụ ihe dị ka akpụkpọ na-egosi ọrịa ara", "Iji mee ka ehi dajụọ"], answer: 2, why: "Strip cup na-egosi mmiri ara na-adịghị mma n'oge, tupu ya na mmiri ara dị mma agwakọta." },
            { objective: "O2", q: "Dọkịta anụmanụ gwọrọ otu ehi ụbọchị abụọ gara aga. Gịnị ka ị ga-eme mmiri ara ya?", options: ["Gwakọta ya na nke ọzọ; ntakịrị adịghị njọ", "Ree ya nye onye ọzọ na-azụ", "Nye nwa ya ya n'ajụghị ajụjụ", "Debe ya iche, erekwala ya ruo mgbe oge nchere dị na label ma ọ bụ nke dọkịta anụmanụ kwuru gafere"], answer: 3, why: "Ihe fọdụrụ n'ọgwụ na-eme ka mmiri ara ghara ịdị mma, ndị na-azụkwa na-anwale ya; label ma ọ bụ dọkịta anụmanụ na-enye oge nchere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi ugbo mmiri ara dị ọcha",
        questions: [
          { objective: "O1", q: "Gịnị kwesịrị ikpebi ụdị anụ mmiri ara ị ga-azụta?", options: ["Nri, mmiri na nlekọta ị nwere ike inye ya n'afọ niile", "Agba kacha amasị gị", "Ihe onye agbata obi gị zụtara", "Anụ kacha dị ọnụ ala n'ahịa"], answer: 0, why: "Anụ mmiri ara na-emepụta naanị ihe nri na nlekọta ya kwere." },
          { objective: "O1", q: "Kedu nke na-ABỤGHỊ akụkụ ezigbo ụlọ zero-grazing?", options: ["Ihe ndina kpọrọ nkụ n'ọnụ ụlọ ọ bụla", "Ala mmiri na-agbapụ", "Olulu nsị dị n'akụkụ ebe ịmị mmiri ara", "Ebe nri na ebe mmiri dị mfe ihicha"], answer: 2, why: "A ghaghị idebe nsị n'ebe dị anya site n'ebe ịmị mmiri ara ka nje ghara ịbanye na mmiri ara." },
          { objective: "O2", q: "Kedu akpa kacha mma maka mmiri ara?", options: ["Jerrican plastik", "Akpa aluminium ma ọ bụ stainless steel dị ọcha ma dị ire", "Bọket agba ochie", "Akpa ọ bụla nwere mkpuchi"], answer: 1, why: "Igwe dị ire dị mfe ihicha; plastik na-akpụ akara ma na-ejide unyi." },
          { objective: "O2", q: "Kedu otu ị ga-esi kpọọ ọnụ ara nkụ tupu ịmị mmiri ara?", options: ["Jiri otu akwa nhicha maka anụ niile", "Hapụ ha ka ha dị mmiri", "Jiri uwe gị", "Jiri akwa ma ọ bụ akwụkwọ dị ọcha dị iche maka anụ ọ bụla"], answer: 3, why: "Akwa nhicha a na-ekekọrịta na-ebuga nje ọrịa ara site n'otu anụ gaa na nke ọzọ." },
          { objective: "O2", q: "N'usoro dị aṅaa ka ị ga-eji mịa mmiri ara anụ gị?", options: ["Anụ nwere ahụike mbụ, ndị na-arịa ọrịa ma ọ bụ a gwọrọ n'ikpeazụ", "Ndị na-arịa ọrịa mbụ", "Usoro ọ bụla", "Nke kacha nta mbụ"], answer: 0, why: "Ịmị mmiri ara anụ na-arịa ọrịa n'ikpeazụ na-egbochi nje ịgbasa n'ara anụ nwere ahụike." }
        ]
      }
    },
    {
      name: "Isi 2: Ara nwere ahụike, mmiri ara dị mma na uru",
      lessons: [
        {
          title: "Ọrịa ara (mastitis): ihe ịrịba ama, mgbochi na CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lelee anụ maka ọrịa ara ma mee California Mastitis Test.",
          text: [
            "Ọrịa ara (mastitis) bụ nje na ọzịza n'ime ara anụ. Ọ na-ebelata mmiri ara na ịdị mma ya, ọ bụkwa otu n'ime ọrịa kacha efu ego n'ugbo mmiri ara. Ọrịa ara a na-ahụ anya (clinical) na-egosi: akụkụ ara na-ekpo ọkụ, zara aza ma ọ bụ na-egbu mgbu; mmiri ara nwere mkpụkọ, ihe dị ka akpụkpọ, dị ka mmiri ma ọ bụ nwere ọbara; mgbe ụfọdụ ahụ ọkụ na ịjụ nri. Ọrịa ara zoro ezo (subclinical) anaghị egosi ihe ọ bụla ị na-ahụ anya, mana anụ ahụ na-enye obere mmiri ara. Ọ bụ ya mere ị ga-eji nwalee.",
            "California Mastitis Test (CMT) na-achọpụta ọrịa ara zoro ezo n'ugbo. Ị chọrọ efere (paddle) nwere iko anọ na mmiri CMT (reagent). Mịpụta ntakịrị mmiri ara site n'ọnụ ara ọ bụla n'ime iko nke ya, tinye otu ọnụọgụ reagent ahụ, tụgharịa ya, ma gụọ ya n'ime sekọnd ole na ole. Mmiri ara nọgidere dị ka mmiri dị mma. Ọ bụrụ na ọ ghọọ ihe dị ka jelii, ihe na-ama amị ma ọ bụ mkpụkọ, ọ pụtara na mkpụrụ ndụ (cells) dị elu, nke na-egosi ọrịa ara n'akụkụ ara ahụ. Ka jelii ahụ siri ike, ka mmeghachi omume ahụ siri ike. Emela nnwale a n'ụbọchị mbụ mgbe anụ mụsịrị nwa, mgbe nsonaazụ na-adị elu n'onwe ya. Mmiri ara ewu nwere ike igosi mmeghachi omume siri ike karịa ọbụlagodi mgbe ewu ahụ nwere ahụike, ya mere jụọ dọkịta anụmanụ gị otu esi agụ nsonaazụ maka ewu.",
            "Gbochie ọrịa ara site n'ihe ndina dị ọcha ma kpọọ nkụ, usoro ịmị mmiri ara dị ọcha, teat dip ma ọ bụrụ na dọkịta anụmanụ gị kwuru ya, ịmị mmiri ara anụ butere ọrịa n'ikpeazụ, na ịgwọ naanị site na ndụmọdụ dọkịta anụmanụ gị. Enyela antibiotic n'onwe gị: soro dọkịta anụmanụ na label. Dekọọ ọrịa ọ bụla na ọgwụgwọ ọ bụla."
          ],
          steps: ["Lee anya ma metụ aka: akụkụ ara ọ bụla maka okpomọkụ, ọzịza ma ọ bụ mgbu.", "Lelee mmiri ara mbụ na strip cup maka mkpụkọ, ihe dị ka akpụkpọ ma ọ bụ ọbara.", "Maka CMT: tụfuo mmiri ara mbụ a mịpụtara, wee mịpụta ntakịrị site n'ọnụ ara ọ bụla n'ime iko nke ya.", "Kpọọ efere ahụ n'akụkụ ka ọnụọgụ kwesịrị ekwesị fọdụ; tinye otu ọnụọgụ reagent ahụ.", "Tụgharịa ya nwayọọ ma gụọ ya n'ime sekọnd ole na ole: ọ bụrụ na ọ dị ka mmiri, ọ dị mma; jelii pụtara mmeghachi omume.", "Dekọọ nsonaazụ maka akụkụ ara ọ bụla.", "Kpọọ dọkịta anụmanụ gị maka ọrịa ọ bụla a na-ahụ anya ma ọ bụ nsonaazụ gosiri ọrịa; soro dọkịta anụmanụ na label."],
          words: [["Ọrịa ara (mastitis)", "nje na ọzịza n'ime ara anụ nke na-ebelata mmiri ara na ịdị mma ya."], ["Ọrịa ara zoro ezo (subclinical mastitis)", "ọrịa ara na-enweghị ihe ịrịba ama a na-ahụ anya; naanị nnwale dị ka CMT na-egosi ya."], ["Akụkụ ara (quarter)", "otu n'ime akụkụ anọ nke ara ehi, nke ọ bụla nwere ọnụ ara nke ya."], ["Reagent", "mmiri a na-eji eme nnwale nke na-emeghachi omume na mmiri ara."]],
          slides: [
            { title: "Ọrịa ara na-efu ego", bullets: ["Nje na ọzịza n'ara", "Obere mmiri ara, ịdị mma na-ada", "Clinical: ị na-ahụ ya. Subclinical: ị naghị ahụ ya"] },
            { title: "Ihe ịrịba ama a na-ahụ anya", bullets: ["Akụkụ ara na-ekpo ọkụ, zara aza ma ọ bụ na-egbu mgbu", "Mkpụkọ, ihe dị ka akpụkpọ, mmiri ara dị ka mmiri ma ọ bụ nwere ọbara", "Mgbe ụfọdụ ahụ ọkụ na ịjụ nri"] },
            { title: "CMT", bullets: ["Otu iko maka ọnụ ara ọ bụla; otu ọnụọgụ reagent", "Tụgharịa ma gụọ ya n'ime sekọnd ole na ole", "Dị ka mmiri = ọ dị mma; jelii ma ọ bụ ihe na-ama amị = mmeghachi omume"] },
            { title: "Gbochie ma mee ihe", bullets: ["Ihe ndina kpọrọ nkụ, usoro dị ọcha, teat dip ma ọ bụrụ na a gwara gị", "Mịa anụ butere ọrịa n'ikpeazụ", "Dọkịta anụmanụ na-ekpebi ọgwụgwọ; soro label"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Mee CMT n'otu ehi ma ọ bụ ewu (gbazite efere na reagent n'aka cooperative gị, dọkịta anụmanụ ma ọ bụ onye ọrụ extension ma ọ bụrụ na i nweghị). Dekọọ nsonaazụ maka akụkụ ara ọ bụla n'akwụkwọ ndetu gị, ma dee ihe ị ga-eme maka mmeghachi omume ọ bụla.",
          youCanNow: "ịhụ ihe ịrịba ama ọrịa ara, ime CMT n'ọnụ ara ọ bụla, ide nsonaazụ ya na ịmata mgbe ị ga-akpọ dọkịta anụmanụ.",
          quickCheck: [
            { objective: "O3", q: "Mmiri ara ehi gị dị ka nke nkịtị, mana mmiri ara ọ na-enye ebelatala. Gịnị nwere ike ịchọpụta ọrịa ara zoro ezo?", options: ["Ichere ruo mgbe mmiri ara gosiri mkpụkọ", "California Mastitis Test", "Inye ya nnu karịa", "Isi mmiri ara ahụ ísì"], answer: 1, why: "Ọrịa ara zoro ezo enweghị ihe ịrịba ama a na-ahụ anya; CMT na-egosi ya." },
            { objective: "O3", q: "Na CMT, otu iko ghọrọ jelii siri ike. Gịnị ka nke a pụtara?", options: ["E mere nnwale ahụ nke ọma, akụkụ ara ahụ nwekwara ahụike", "I tinyeghị mmiri ara zuru ezu", "Mmiri ara ahụ bara ụba nke ukwuu", "Mmeghachi omume siri ike n'akụkụ ara ahụ; dekọọ ya ma kpọọ dọkịta anụmanụ"], answer: 3, why: "Jelii pụtara na mkpụrụ ndụ dị elu, nke bụ ihe ịrịba ama ọrịa ara n'akụkụ ara ahụ." }
          ]
        },
        {
          title: "Ime ka mmiri ara jụọ oyi, ijikwa ya na ire ya",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mee ka mmiri ara jụọ oyi ma bufee nke ga-agafe nnwale ịdị mma nke onye na-azụ.",
          text: [
            "Mmiri ara ọhụrụ nwere nchebe nke ya na-egbochi nje naanị ihe dị ka awa atọ ruo anọ mgbe a mịchara ya. FAO na-adụ ọdụ ka e mee ka ọ jụọ oyi ruo 4 °C n'ime oge ahụ ka ịdị mma ya ghara ịla n'iyi. Ọ bụrụ na i nweghị igwe na-eme ka ọ jụọ oyi, guzobe akpa igwe ahụ e kpuchiri ekpuchi n'ime mmiri dị oyi, dị ọcha, nke na-asọ asọ ma ọ bụ nke e chekwara echekwa, n'ebe ndò, ma buga mmiri ara ahụ n'igwe nke ebe nnakọta ngwa ngwa. Ahapụla mmiri ara n'anwụ mgbe ọ bụla.",
            "Ọtụtụ obere ndị ọrụ ugbo na-ere nye cooperative mmiri ara, ebe nnakọta, ụlọ ọrụ na-edozi mmiri ara, ma ọ bụ obere ụlọ ọrụ mmiri ara (dịka ọmụmaatụ, obere ụlọ ọrụ mmiri ara na Burkina Faso na-azụ mmiri ara n'aka ndị na-azụ anụ na ndị ọrụ ugbo). Mgbe i bugara ya, onye na-azụ na-anwale mmiri ara gị. Nnwale a na-ahụkarị bụ: ile anya na isi ísì; alcohol test na clot-on-boiling test, ndị na-egosi mmiri ara na-amalite igba ụka; lactometer, nke na-egosi mmiri ara a gbanyere mmiri; na, n'ụfọdụ ụlọ ọrụ, nnwale maka ihe fọdụrụ n'ọgwụ. A na-ajụ mmiri ara dara nnwale ma ọ bụ kwụọ obere ego maka ya.",
            "Agbakwunyela mmiri, ntụ ọka, ihe nchekwa (preservatives) ma ọ bụ ihe ọ bụla ọzọ na mmiri ara: ọ bụ aghụghọ, ọ na-abụkarị megide iwu, nnwale ndị ahụ na-ejidekwa ya. Jụọ onye na-azụ gị otu o si akwụ ụgwọ (kwa lita, mgbe ụfọdụ ya na ego mgbakwunye maka ịdị mma ma ọ bụ abụba), mgbe ọ na-akwụ (ọtụtụ mgbe kwa ọnwa site n'ụlọ akụ ma ọ bụ mobile money), na ego ọ na-ewepụ. Gụchaa nkwekọrịta ọ bụla tupu ị bịanye aka. Ire mmiri ara a na-esighị esi nye ọha nwere ike ịchọ ikike: na Kenya, Kenya Dairy Board na-enye ndị na-azụ ma na-ere mmiri ara ikike, ya mere lelee iwu ya ma ọ bụ nke ụlọ ọrụ na-achịkwa mmiri ara na mba gị."
          ],
          steps: ["Chachaa ma kpuchie mmiri ara ozugbo i mịchara ya.", "Mee ka ọ jụọ oyi ozugbo: igwe, ma ọ bụ akpa ahụ guzoro n'ime mmiri dị oyi n'ebe ndò.", "Buga ya n'ebe nnakọta ma ọ bụ n'aka onye na-azụ n'oge ha kwuru.", "Lee nnwale ndị ahụ ma jụọ maka nsonaazụ ha.", "Dekọọ lita i bugara, ọ bụrụ na a jụrụ ya, na ihe kpatara ya.", "Lelee ụgwọ ọ bụla a kwụrụ gị na ndekọ ihe i bugara."],
          words: [["Lactometer", "ngwa na-ese n'elu mmiri ara nke na-atụ ịdị arọ (density) mmiri ara; mmiri a gbakwunyere na-eme ka mmiri ara dị mfe."], ["Alcohol test", "ịgwakọta mmiri ara na alcohol; mmiri ara na-amalite igba ụka na-akpụkọ."], ["Ebe nnakọta (collection centre)", "ebe ndị ọrụ ugbo na-ebuga mmiri ara ka a nwalee ya, mee ka ọ jụọ oyi, ma ziga ya n'ụlọ ọrụ na-edozi ya."]],
          slides: [
            { title: "Mee ka ọ jụọ oyi ngwa ngwa", bullets: ["Nchebe nke ya na-adịru ihe dị ka awa 3 ruo 4", "FAO: mee ka ọ jụọ oyi ruo 4 °C n'ime oge ahụ", "Enweghị igwe: akpa n'ime mmiri dị oyi, n'ebe ndò"] },
            { title: "Nnwale onye na-azụ", bullets: ["Ile anya na isi ísì", "Alcohol na clot-on-boiling: igba ụka", "Lactometer: mmiri a gbakwunyere; ụfọdụ na-anwale ọgwụ"] },
            { title: "Agbakwunyela ihe ọ bụla", bullets: ["Enweghị mmiri, ntụ ọka ma ọ bụ preservatives", "Aghụghọ, ọ na-abụkarị megide iwu, nnwale na-ejidekwa ya"] },
            { title: "Ịnata ụgwọ", bullets: ["Kwa lita; jụọ maka ego mgbakwunye maka ịdị mma", "Mgbe na otu ha si akwụ; ego ha na-ewepụ", "Gụọ nkwekọrịta; lelee ikike (Kenya: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Gaa ma ọ bụ kpọọ ebe nnakọta, cooperative ma ọ bụ onye na-azụ kacha nso gị. Jụọ: nnwale ndị ha na-eme, oge ikpeazụ ha na-anabata mmiri ara, otu na mgbe ha na-akwụ ụgwọ, na ego ha na-ewepụ. Dee azịza ndị ahụ ma tụnyere ha na otu i si ejikwa mmiri ara ugbu a.",
          youCanNow: "ime ka mmiri ara jụọ oyi ma jikwaa ya ka ịdị mma ya ghara ịla n'iyi, ịkọwa nnwale onye na-azụ, na ilele otu a na-akwụ gị ụgwọ.",
          quickCheck: [
            { objective: "O4", q: "I nweghị igwe na-eme ka mmiri ara jụọ oyi. Gịnị bụ ihe kacha mma ime mgbe i mịchara mmiri ara?", options: ["Guzobe akpa igwe e kpuchiri ekpuchi n'ime mmiri dị oyi n'ebe ndò ma buga ya ngwa ngwa", "Hapụ mmiri ara n'anwụ ka ọ nọgide na-ekpo ọkụ", "Gbakwunye ntakịrị mmiri ka ọ dị ọhụrụ", "Debe ya ruo echi ma buga ịmị mmiri ara abụọ ọnụ"], answer: 0, why: "Ime ka ọ jụọ oyi ngwa ngwa na ibuga ya ọsọ ọsọ na-egbochi nje ịba ụba." },
            { objective: "O4", q: "Gịnị ka nnwale lactometer n'ebe nnakọta na-ejide?", options: ["Ọrịa ara n'otu akụkụ ara", "Mmiri ara a gbakwunyere mmiri", "Ụdị ehi ahụ", "Mmiri ara dị oyi nke ukwuu"], answer: 1, why: "Mmiri a gbakwunyere na-eme ka mmiri ara ghara ịdị arọ, nke lactometer na-egosi." }
          ]
        },
        {
          title: "Ịzụ ụmụ ehi, ndekọ na ego ọ na-efu kwa lita",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ ego ọ na-efu gị kwa lita ma debe ndekọ ndị na-enye ya.",
          text: [
            "Ụmụ ehi na ụmụ ewu gị bụ ìgwè anụ gị n'ọdịnihu. Hụ na nwa a mụrụ ọhụrụ ṅụrụ colostrum, mmiri ara mbụ siri ike, ozugbo o kwere omume mgbe a mụsịrị ya, ka mma n'ime awa ole na ole mbụ, n'ihi na ọ na-ebu nchebe nne ya megide ọrịa. Debe ụmụ ehi n'ọnụ ụlọ dị ọcha, kpọrọ nkụ, dị iche, nye ha mmiri dị ọcha, nye ha ezigbo hay ma ọ bụ ahịhịa nri dị nro na nri ụmụ ehi n'oge ka afọ ha too, ma kwụsị inye ha mmiri ara (weaning) mgbe onye ọrụ extension gị ma ọ bụ dọkịta anụmanụ kwuru na nwa ehi ahụ na-eri nri siri ike zuru ezu. Soro atụmatụ dọkịta anụmanụ gị maka nlekọta otubo, ọgwụ ikpuru na ọgwụ mgbochi.",
            "Debe ndekọ dị mfe kwa ụbọchị: lita anụ ọ bụla nyere n'oge ịmị mmiri ara ọ bụla, nri i zụtara na ego ya, ihe ịrịba ama anụ chọrọ oke na ụbọchị AI ma ọ bụ ụbọchị e jikọrọ ya na oke, ụbọchị ịmụ nwa, ọgwụgwọ na ụbọchị a ga-enwe ike ire mmiri ara ọzọ, mmiri ara i bugara, ndị a jụrụ na ụgwọ a kwụrụ. Akwụkwọ ndetu na-arụ ọrụ; spreadsheet n'ekwentị na-eme ka mgbakọ dị mfe.",
            "Ego ọ na-efu kwa lita = ego niile i mefuru n'ọnwa ahụ kewaa site na lita i mepụtara. Ọmụmaatụ (ọnụọgụ ndị a bụ naanị ọmụmaatụ): ehi 3 na Kenya mepụtara lita 1,050 n'otu ọnwa. Ego e mefuru: nri na ahịhịa nri KES 27,000, ụgwọ ọrụ KES 9,000, dọkịta anụmanụ na AI KES 3,000, ndị ọzọ KES 3,000; ngụkọta KES 42,000. Ego ọ na-efu kwa lita = 42,000 / 1,050 = KES 40. Ọ bụrụ na onye na-azụ gị na-akwụ ihe na-erughị ego ọ na-efu gị kwa lita, ị na-atụfu ego na lita ọ bụla; buru ụzọ lee nri a na-atụfu, ihe ọrịa ara na-eme ka ị tụfuo, na mmiri ara a jụrụ."
          ],
          steps: ["Nye colostrum ozugbo o kwere omume mgbe a mụsịrị nwa.", "Debe nwa ehi n'ọnụ ụlọ dị ọcha, kpọrọ nkụ, nwere mmiri, hay na nri ụmụ ehi.", "Dekọọ lita, nri, ịmụ nwa, ụbọchị ịmụ nwa, ọgwụgwọ, ihe i bugara na ụgwọ a kwụrụ.", "Na njedebe ọnwa, gbakọọ ego niile i mefuru.", "Kewaa ngụkọta ego i mefuru site na lita i mepụtara: nke a bụ ego ọ na-efu gị kwa lita.", "Tụnyere ya na ọnụ ahịa a kwụrụ ma họrọ otu mgbanwe iji belata ego ahụ."],
          words: [["Colostrum", "mmiri ara mbụ siri ike, na-acha odo odo, mgbe a mụsịrị nwa; ọ na-echebe nwa ọhụrụ megide ọrịa."], ["Weaning", "isi na mmiri ara gbanwee nwa anụ gaa na nri siri ike."], ["Ego ọ na-efu kwa lita", "ego niile i mefuru n'ugbo mmiri ara n'otu oge kewaa site na lita i mepụtara."]],
          slides: [
            { title: "Ụmụ ehi bụ ìgwè anụ gị n'ọdịnihu", bullets: ["Colostrum ozugbo o kwere omume mgbe a mụrụ ya", "Ọnụ ụlọ dị ọcha, kpọrọ nkụ; mmiri, hay, nri ụmụ ehi n'oge", "Atụmatụ dọkịta anụmanụ maka otubo, ikpuru, ọgwụ mgbochi"] },
            { title: "Ndekọ kwa ụbọchị", bullets: ["Lita anụ ọ bụla; nri na ego ya", "Ọchịchọ oke, AI, ịmụ nwa, ọgwụgwọ", "Ihe i bugara, ndị a jụrụ, ụgwọ a kwụrụ"] },
            { title: "Ego ọ na-efu kwa lita", bullets: ["Ego niile n'ọnwa ahụ / lita i mepụtara", "Ọmụmaatụ: KES 42,000 / 1,050 L = KES 40 kwa lita", "Ọnụọgụ ndị a bụ ọmụmaatụ: jiri nke gị"] },
            { title: "Ọ bụrụ na ọ naghị ewete uru", bullets: ["Ọnụ ahịa erughị ego ọ na-efu: ị na-atụfu ego na lita ọ bụla", "Lelee nri a na-atụfu, ọrịa ara, mmiri ara a jụrụ", "Họrọ otu mgbanwe ma soro ya"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Ọrụ ikpeazụ: dee usoro ịdị ọcha n'ịmị mmiri ara gị ị ga-akwanye n'ebe ị na-amị mmiri ara, wee dejupụta mpempe akwụkwọ ego ọ na-efu kwa lita maka ọnwa gara aga (ma ọ bụ ọnwa ọmụmaatụ): ego ọ bụla i mefuru, lita i mepụtara, ego ọ na-efu kwa lita, ọnụ ahịa onye na-azụ gị, na otu mgbanwe ị ga-eme.",
          youCanNow: "ịzụ ụmụ ehi nwere ahụike, idebe ndekọ ugbo mmiri ara na ịgbakọ ego lita mmiri ara ọ bụla na-efu.",
          quickCheck: [
            { objective: "O5", q: "Olee mgbe nwa ehi a mụrụ ọhụrụ kwesịrị ịṅụ colostrum?", options: ["Mgbe otu izu gachara", "Naanị ma ọ bụrụ na ọ dị ka ike gwụrụ ya", "Ozugbo o kwere omume mgbe a mụsịrị ya, ka mma n'ime awa ole na ole mbụ", "Mgbe ọ bụla; nye naanị mmiri"], answer: 2, why: "Colostrum na-ebu nchebe nne ya, nwa ehi na-anarakwa ya nke ọma n'awa mbụ." },
            { objective: "O5", q: "Ego e mefuru n'ọnwa ahụ bụ KES 36,000, ehi ndị ahụ mepụtakwara lita 900. Ego ole ka ọ na-efu kwa lita?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 kewaa site na 900 bụ 40." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ara nwere ahụike, mmiri ara dị mma na uru",
        questions: [
          { objective: "O3", q: "Kedu nke bụ ihe ịrịba ama ọrịa ara a na-ahụ anya?", options: ["Akụkụ ara na-ekpo ọkụ, zara aza na mkpụkọ n'ime mmiri ara", "Ahụ na-egbuke egbuke", "Ịta nri ọzọ (cud)", "Agụụ nri dị mma"], answer: 0, why: "Okpomọkụ, ọzịza, mgbu na mmiri ara na-adịghị mma bụ ihe ịrịba ama ọrịa ara a na-ahụ anya." },
          { objective: "O3", q: "CMT gosiri mmeghachi omume n'otu akụkụ ara. Gịnị ka ị ga-eme?", options: ["Nye antibiotic i nwere n'ụlọ", "Dekọọ ya ma kpọọ dọkịta anụmanụ gị; soro ndụmọdụ ya na label", "Leghara ya anya; mmiri ara ahụ dị ka nke dị mma", "Ree ehi ahụ taa"], answer: 1, why: "Dọkịta anụmanụ na-ekpebi ọgwụgwọ; ịgwọ n'ụlọ n'enweghị ndụmọdụ nwere ike ịhapụ ihe fọdụrụ n'ọgwụ ma mee ka nje ghara ịnụ ọgwụ." },
          { objective: "O4", q: "Dịka FAO si kwuo, n'ime oge ole ka a ga-eme ka mmiri ara jụọ oyi ruo ihe dị ka 4 °C?", options: ["N'ime otu izu", "Tupu echi", "N'ime ihe dị ka awa atọ ruo anọ mgbe a mịchara ya", "Naanị n'oge okpomọkụ"], answer: 2, why: "Nchebe mmiri ara nwere n'onwe ya na-egbochi nje naanị ihe dị ka awa atọ ruo anọ." },
          { objective: "O4", q: "Ebe nnakọta na-eme alcohol test. Gịnị ka ọ na-egosi?", options: ["Mmiri a gbakwunyere", "Abụba dị na ya", "Ụdị ehi ahụ", "Mmiri ara na-amalite igba ụka"], answer: 3, why: "Mmiri ara na-amalite igba ụka na-akpụkọ mgbe a gwakọtara ya na alcohol." },
          { objective: "O5", q: "Ego ọ na-efu gị kwa lita bụ KES 45, onye na-azụ na-akwụkwa KES 40. Gịnị ka nke a pụtara?", options: ["Ị na-atụfu ihe dị ka KES 5 na lita ọ bụla", "Ị na-enweta KES 5 kwa lita", "Ị naghị enweta uru, ị naghịkwa atụfu", "Ọ dịghị ihe; ọnụ ahịa adịghị mkpa"], answer: 0, why: "Mgbe ego ọ na-efu kwa lita karịrị ọnụ ahịa, lita ọ bụla na-atụfu ego." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịzụ Anụ Mmiri Ara: Mmepụta Mmiri Ara na Ịdị Ọcha",
    questions: [
      { objective: "O1", q: "Tupu ị zụta ehi mmiri ara, ihe mbụ ị ga-elele bụ:", options: ["Agba ehi ndị ahụ", "Ma i nwere ahịhịa nri na mmiri n'afọ niile, gụnyere n'oge ọkọchị", "Ụdị ehi kacha ama ama", "Ọnụ ọgụgụ ehi onye agbata obi gị nwere"], answer: 1, why: "Nri na mmiri na-ekpebi ole mmiri ara ehi ọ bụla nwere ike inye." },
      { objective: "O1", q: "Gịnị mere onye ọrụ ugbo nwere ike iji họrọ ewu mmiri ara kama ehi?", options: ["Ewu achọghị mmiri", "Ewu anaghị arịa ọrịa mgbe ọ bụla", "Ewu na-eri obere nri ma dabara obere ala na obere ego", "Mmiri ara ewu achọghị ịdị ọcha"], answer: 2, why: "Ewu chọrọ obere nri, obere ala na obere ego, nke dabara ọtụtụ obere ndị ọrụ ugbo." },
      { objective: "O1", q: "N'usoro zero-grazing, gịnị mere a ga-eji kpochapụ nsị kwa ụbọchị?", options: ["Ihe ndina ruru unyi bụ isi ihe na-akpata ọrịa ara", "Iji ree ya kwa ụbọchị", "Ehi anaghị amasị ísì ya", "Ọ dịghị mkpa"], answer: 0, why: "Ara na-edina n'elu ihe ndina; unyi dị ebe ahụ na-agbasa nje ọrịa ara." },
      { objective: "O1", q: "Kedu ihe na-enyere aka idebe ọnụ ụlọ zero-grazing ka ọ kpọọ nkụ?", options: ["Ala dị larịị na-enweghị ebe mmiri na-agbapụ", "Enweghị elu ụlọ", "Ahịhịa dị mmiri", "Ala dị ndịda ruo n'ebe mmiri na-agbapụ"], answer: 3, why: "Ala dị ndịda na-eme ka mmamịrị na mmiri gbapụ." },
      { objective: "O2", q: "Gịnị bụ nzọụkwụ mbụ n'usoro ịmị mmiri ara dị ọcha?", options: ["Malite ịmị mmiri ara ozugbo", "Onye na-amị mmiri ara yiri uwe dị ọcha, debe mbọ aka mkpụmkpụ, jiri ncha saa aka", "Wụnye mmiri ara n'ime jerrican", "Nye nwa ehi nri"], answer: 1, why: "Aka na uwe dị ọcha na-egbochi nje ịbanye n'ime mmiri ara site na mbido." },
      { objective: "O2", q: "Gịnị mere ị ga-eji jiri aka gị niile mịa mmiri ara kama ịdọkpụ ya na mkpịsị aka?", options: ["Ọ dị ngwa ịmụta", "Ọ na-eji obere mmiri ara", "Ọ dị nro n'ọnụ ara ma na-enyere aka ịmịchapụ mmiri ara niile", "Mkpịsị aka ruru unyi karịa"], answer: 2, why: "Iji aka niile na-egbochi ọnụ ara imerụ ahụ ma na-eme ka ara tọgbọ chakoo." },
      { objective: "O2", q: "Mgbe i mịchara mmiri ara, gịnị ka ị ga-ebu ụzọ mee mmiri ara ahụ?", options: ["Chachaa ya, kpuchie ya ma malite ime ka ọ jụọ oyi ozugbo", "Hapụ ya ka o ghere oghe ka ọ jụọ oyi n'ụlọ anụ", "Gbakwunye mmiri ka o buo ibu", "Gwakọta ya na mmiri ara ụnyaahụ"], answer: 0, why: "Ịchacha, ikpuchi na ime ka ọ jụọ oyi ngwa ngwa na-egbochi unyi na nje." },
      { objective: "O2", q: "Gịnị mere ị ga-eji nye ehi nri ozugbo i mịchara mmiri ara?", options: ["Ka o wee rahụ ụra", "Iji mee ka abụba ya bawanye", "Ka o guzoro ka ọnụ ara na-emechi", "O nweghị uru ọ bara"], answer: 2, why: "Iguzo mgbe oghere ọnụ ara na-emechi na-egbochi unyi si n'ihe ndina ịbanye na ya." },
      { objective: "O3", q: "Ọrịa ara zoro ezo (subclinical mastitis) bụ:", options: ["Ọrịa ara nwere akụkụ ara zara aza ma na-ekpo ọkụ", "Ọrịa na-arịa naanị ewu", "Nsogbu nri", "Ọrịa ara na-enweghị ihe ịrịba ama a na-ahụ anya, nke nnwale na-achọpụta"], answer: 3, why: "Naanị nnwale dị ka CMT na-egosi ọrịa ara zoro ezo." },
      { objective: "O3", q: "Na CMT, kedu otu ị na-esi agụ nsonaazụ ya?", options: ["Chere otu awa, wee sie ya ísì", "Tụgharịa ya ma gụọ ya n'ime sekọnd ole na ole: ọ bụrụ na ọ dị ka mmiri, ọ dị mma; jelii bụ mmeghachi omume", "Detụ ya ire", "Buru ụzọ sie ya"], answer: 1, why: "A na-agụ mmeghachi omume ahụ n'ime sekọnd ole na ole; jelii pụtara na mkpụrụ ndụ dị elu." },
      { objective: "O3", q: "Olee mgbe ị na-ekwesịghị ịdabere na CMT maka ehi?", options: ["N'ụbọchị mbụ mgbe ọ mụsịrị nwa", "N'ụtụtụ", "Mgbe o dajụrụ", "Mgbe o risịrị nri"], answer: 0, why: "Mkpụrụ ndụ na-adị elu n'onwe ha ozugbo ehi mụsịrị nwa, ya mere nsonaazụ na-eduhie." },
      { objective: "O3", q: "Onye na-ekpebi otu a ga-esi gwọọ ọrịa ara?", options: ["Onye agbata obi", "Onye na-azụ mmiri ara", "Dọkịta anụmanụ gị, na-agbaso label ọgwụ ahụ", "Vidiyo n'ịntanetị"], answer: 2, why: "Ọgwụgwọ na oge nchere tupu ire mmiri ara na-esi n'aka dọkịta anụmanụ na label." },
      { objective: "O4", q: "Kedu akpa na-eme ka a kacha jụ mmiri ara?", options: ["Akpa aluminium dị ọcha", "Akpa stainless steel", "Ite igwe dị ọcha (churn)", "Jerrican plastik nwere akara akpụrụ akpụ"], answer: 3, why: "Akara dị na plastik na-ejide unyi na nje, ọtụtụ ndị na-azụkwa na-ajụ mmiri ara dị na ha." },
      { objective: "O4", q: "Onye ahịa na-atụ aro ka ị gbakwunye ntakịrị mmiri n'akpa ọ bụla. Ị ga:", options: ["Jụ: ọ bụ aghụghọ, ọ na-abụkarị megide iwu, lactometer na-ejidekwa ya", "Kwere ma ọ bụrụ na ọnụ ahịa dị ala", "Gbakwunye ntụ ọka kama", "Gbakwunye mmiri naanị n'oge ọkọchị"], answer: 0, why: "Ịgbakwunye ihe ọ bụla na mmiri ara bụ aghụghọ, nnwale onye na-azụ na-ejidekwa ya." },
      { objective: "O4", q: "Clot-on-boiling test na-elele:", options: ["Mmiri a gbakwunyere", "Mmiri ara gbara ụka ma ọ bụ na-adịghị mma", "Afọ anụ ahụ", "Abụba dị na ya"], answer: 1, why: "Mmiri ara gbara ụka ma ọ bụ na-adịghị mma na-akpụkọ mgbe a sụrụ ya." },
      { objective: "O4", q: "Na Kenya, kedu ụlọ ọrụ na-enye ndị na-azụ ma na-ere mmiri ara ikike?", options: ["Kenya Wildlife Service", "Ọfịs mmiri nke county", "Kenya Dairy Board", "Pest Control Products Board"], answer: 2, why: "Kenya Dairy Board na-achịkwa ahịa mmiri ara ma na-enye ndị na-azụ ma na-ere mmiri ara ikike." },
      { objective: "O5", q: "Ego ọ na-efu kwa lita bụ:", options: ["Ọnụ ahịa onye na-azụ na-akwụ", "Naanị ego nri", "Lita kewaa site n'ọnụ ọgụgụ ehi", "Ego niile i mefuru n'oge ahụ kewaa site na lita i mepụtara"], answer: 3, why: "Ọ gụnyere ego niile i mefuru, ọ bụghị naanị nri." },
      { objective: "O5", q: "Ego i mefuru kwa ọnwa bụ KES 50,000, i mepụtakwara lita 1,250. Ego ole ka ọ na-efu kwa lita?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 kewaa site na 1,250 bụ 40." },
      { objective: "O5", q: "Kedu ndekọ ị chọrọ iji mara mgbe a ga-enwe ike ire mmiri ara ehi a gwọrọ ọzọ?", options: ["Ụbọchị ọgwụgwọ na oge nchere site na label ma ọ bụ dọkịta anụmanụ", "Agba ya", "Ihu igwe", "Ọnụ ahịa nri"], answer: 0, why: "Ide ụbọchị ọgwụgwọ na oge nchere ya na-egbochi ihe fọdụrụ n'ọgwụ iru ndị na-azụ." },
      { objective: "O5", q: "Ego ọ na-efu gị kwa lita karịrị ọnụ ahịa. Ezigbo ebe mbụ ị ga-ele anya bụ:", options: ["Ịzụta ọtụtụ ehi ọnụ", "Ire mmiri ara n'anwaleghị ya", "Nri a na-atụfu, ihe ọrịa ara na-eme ka ị tụfuo, na mmiri ara a jụrụ", "Ịkwụsị ndekọ niile"], answer: 2, why: "Nri na-abụkarị ihe kacha efu ego, ọrịa ara na mmiri ara a jụrụ na-atụfukwa mmiri ara i kwụrụ ụgwọ imepụta." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Anụ na ụlọ ha", objective: "O1", notYet: "Enweghị njikọ n'etiti anụ, ụlọ ha na nri ugbo ahụ nwere.", meets: "Usoro ahụ dabara anụ na ụlọ ugbo ahụ: ebe ịmị mmiri ara dị ọcha, ihe ndina kpọrọ nkụ, na nsị e debere n'ebe dị anya.", exceeds: "O dere otu ihe a ga-edozi n'ụlọ ahụ na ụbọchị ya, dị ka ebe mmiri na-agbapụ ka mma ma ọ bụ ebe ịmị mmiri ara dị iche." },
      { name: "Usoro ịmị mmiri ara", objective: "O2", notYet: "Nzọụkwụ ụfọdụ adịghị ma ọ bụ ha esoghị usoro, dịka ọmụmaatụ enweghị ịsa aka ma ọ bụ ịkpọ ọnụ ara nkụ.", meets: "Nzọụkwụ niile site n'onye na-amị mmiri ara na ngwa ọrụ ruo n'ịchacha, ikpuchi na ime ka ọ jụọ oyi, n'usoro ya.", exceeds: "O kwuru onye na-eme nzọụkwụ ọ bụla na otu a na-esi elele usoro ahụ kwa izu." },
      { name: "Ilele ọrịa ara", objective: "O3", notYet: "Enweghị ihe ịrịba ama ọrịa ara ma ọ bụ CMT n'usoro ahụ, ma ọ bụ ọgwụgwọ n'ụlọ n'enweghị dọkịta anụmanụ.", meets: "O depụtara ihe ịrịba ama, mgbe a na-eme CMT, otu esi edekọ nsonaazụ, na ịkpọ dọkịta anụmanụ maka nsonaazụ gosiri ọrịa; a na-ewepụ mmiri ara anụ a gwọrọ ruo mgbe label ma ọ bụ dọkịta anụmanụ kwere.", exceeds: "O tinyere obere tebụl ndekọ CMT maka anụ ọ bụla na akụkụ ara ọ bụla." },
      { name: "Ime ka ọ jụọ oyi na ibuga ya", objective: "O4", notYet: "A hapụrụ mmiri ara ka ọ na-ekpo ọkụ ma ọ bụ buga ya n'oge gafere; e ji akpa plastik.", meets: "A na-eme ka mmiri ara jụọ oyi ozugbo ma buga ya n'oge onye na-azụ kwuru, n'akpa igwe, n'agbakwunyeghị ihe ọ bụla.", exceeds: "O dekọrọ oge e bugara ya, nsonaazụ nnwale, na mgbe ọ bụla a jụrụ ya na ihe kpatara ya." },
      { name: "Ego ọ na-efu kwa lita", objective: "O5", notYet: "Ụfọdụ ego e mefuru adịghị ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "E depụtara ego niile e mefuru, ego ọ na-efu kwa lita ziri ezi, e tụnyekwara ya na ọnụ ahịa onye na-azụ.", exceeds: "O kwuru otu mgbanwe iji belata ego ọ na-efu kwa lita na otu a ga-esi tụọ ihe ọ rụpụtara n'ọnwa na-abịa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Mbelata n'ọnụ ọgụgụ mmiri ara a jụrụ n'ebe nnakọta ma ọ bụ n'aka onye na-azụ n'ime ọnwa 3 (ndekọ ihe e bugara)",
      "Ndị na-amụ ihe na-eme CMT n'anụ ha opekata mpe otu ugboro n'ọnwa (nnyocha nsochi)",
      "Ndị na-amụ ihe maara ma na-eso ego ọ na-efu ha kwa lita mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Mgbanwe na nkezi mmiri ara anụ ọ bụla na-enye n'ime ọnwa 3, ebe ndekọ kwere"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ ekwentị nwere spreadsheet ma ọ bụ app ndetu",
      "Igwe mgbakọ (igwe mgbakọ dị n'ekwentị dị mma)",
      "Anụ na-enye mmiri ara maka ọrụ omume, ma ọ bụ ugbo ngosi",
      "Efere CMT na reagent, nke a gbaziri n'aka cooperative, dọkịta anụmanụ ma ọ bụ ọfịs extension ma ọ bụrụ na ọ dị mkpa",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke, na omume n'oge ịmị mmiri ara"
    ],
    facilitatorNotes: [
      "Gosi usoro ịmị mmiri ara na CMT n'ihu ndị mmadụ n'ugbo otu onye so n'otu ma ọ bụ na cooperative; hapụ onye ọ bụla na-amụ ihe ka o mee CMT n'onwe ya.",
      "Kpọọ ebe nnakọta ma ọ bụ cooperative dị n'obodo ka ha gosi nnwale mmiri ara ha (alcohol, clot-on-boiling, lactometer).",
      "Enyela ọnụọgụ ọgwụ, ọgwụ mgbochi ma ọ bụ hormone, ma ọ bụ oge nchere mgbe ọ bụla; ziga ndị na-amụ ihe n'aka dọkịta anụmanụ ha na label ọgwụ ahụ.",
      "Rịọ ndị na-amụ ihe ka ha bute akwụkwọ nnata ego nri na akwụkwọ mmiri ara e bugara n'ọnwa gara aga maka ọrụ ego ọ na-efu kwa lita; jiri ọnụọgụ ọmụmaatụ maka ndị na-enweghị ndekọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Jikọta ihe ọmụmụ a na \"Livestock Nutrition and Feed Formulation with Local Ingredients\" maka ndị na-amụ ihe ego ọ na-efu ha kwa lita dị elu n'ihi nri."
    ]
  }
};

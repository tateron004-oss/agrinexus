"use strict";

// Koach Learn course (Igbo translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CFR_CLASSES = { name: "49 CFR 383.91: Otu ụgbọ ala azụmahịa (mbipụta Cornell LII nke iwu gọọmentị etiti)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Koodu endorsement na CDL na CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Akwụkwọ ikike mmụta azụmahịa (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Ndị ga-emecha ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ (ELDT)", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (ndepụta ndị na-enye ọzụzụ ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (ibe CDL gọọmentị etiti)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Ihe a chọrọ n'aka onye ọkwọ ụgbọ ala (afọ, Bekee, ahụike)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: Mgbe a ga-enyocha ahụike ndị ọkwọ ụgbọ ala", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: Ihe ule nka CDL na-elele", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Nlele onye ọkwọ ụgbọ ala tupu ọ kwọọ", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Iwu awa ọrụ (hours of service)", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Nhapụ ule nka maka ndị ọkwọ ụgbọ ala agha", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics: Ndị ọkwọ ụgbọ ala ibu dị arọ na tractor-trailer", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-ig",
  lang: "ig",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Nkwadebe maka Akwụkwọ Ikike Ọkwọ Ụgbọ Ala Azụmahịa (CDL)",
  skills: "Ịhọrọ klas CDL na endorsement kwesịrị ekwesị, Ịhazi nzọụkwụ site na permit ruo akwụkwọ ikike, Ịmụ akwụkwọ ntuziaka CDL nke steeti, Ime nlele tupu njem, Ime nhọrọ ịkwọ ụgbọ ala n'enweghị nsogbu",
  outcome: "ịhọrọ klas CDL na endorsement ọrụ ị chọrọ chọrọ, ịkpọ aha nzọụkwụ ọ bụla site na akwụkwọ ikike mmụta ruo akwụkwọ ikike, ịmụ maka ule ihe ọmụma steeti site n'akwụkwọ ntuziaka gọọmentị, ịkọwa nlele tupu njem n'olu, ma mee ha niile ka ọ bụrụ atụmatụ ọmụmụ na ule CDL nwere ụbọchị.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla chọrọ ọrụ ịkwọ ụgbọ ala ibu (truck) ma ọ bụ bọs: ndị na-achọ ọrụ, ndị agha mbụ (veterans), ndị ntorobịa, ndị na-alọta ụlọ site n'ụlọ mkpọrọ na ndị okenye na-agbanwe ọrụ. Ị chọghị ahụmahụ ịkwọ ụgbọ ala karịa akwụkwọ ikike nkịtị.",
    "Ị ga-amụta CDL (akwụkwọ ikike ọkwọ ụgbọ ala azụmahịa) ị chọrọ, nzọụkwụ iji nweta ya, otu esi amụ maka ule ederede, otu esi eme nlele tupu njem nke na-amalite ule ịkwọ ụgbọ ala, na omume ịkwọ ụgbọ ala n'enweghị nsogbu ndị na-enyocha ule na-achọ ịhụ.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị akwụkwọ ikike ma ọ bụ permit. Iwu gọọmentị etiti si n'aka FMCSA (Federal Motor Carrier Safety Administration, ụlọ ọrụ gọọmentị US na-ahụ maka ụgbọ ala ibu na bọs), ọfịs akwụkwọ ikike ịkwọ ụgbọ ala nke steeti gị na-enye ule ndị ahụ, ọtụtụ ndị ọkwọ ụgbọ ala ọhụrụ ga-emechakwa ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ n'aka onye na-enye ọzụzụ e debanyere aha. Nkuzi ọ bụla na-agwa gị ebe ị ga-elele iwu gọọmentị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Na njedebe, ị ga-eme atụmatụ ọmụmụ na ule CDL nke gị nwere ezi ụbọchị."
  ],
  finalTask: "Mee atụmatụ ọmụmụ na ule CDL nke gị n'otu ibe akwụkwọ: ọrụ ị chọrọ, klas CDL na endorsement ọ bụla ọ chọrọ, nzọụkwụ site na nyocha ahụike ruo ule nka n'usoro ya, ya na ụbọchị ebumnuche maka nke ọ bụla, ndị atọ na-enye ọzụzụ e debanyere aha ị chọtara na Training Provider Registry, akụkụ akwụkwọ ntuziaka steeti ị ga-amụ kwa izu, na ndepụta nlele tupu njem e dere ede maka ụdị ụgbọ ala ị ga-eji mee ule.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ọrụ mbụ ịkwọ ụgbọ ala ibu ma ọ bụ bọs: ndị na-achọ ọrụ, ndị agha mbụ na ndị agha na-ahapụ ọrụ agha, ndị ntorobịa, ndị na-alọta ụlọ site n'ụlọ mkpọrọ na ndị na-agbanwe ọrụ. Ọtụtụ nwere akwụkwọ ikike ịkwọ ụgbọ ala nkịtị ma enweghị ahụmahụ ịkwọ ụgbọ ala azụmahịa.",
    startingPoint: "Ha nwere ike ịkwọ ụgbọ ala nkịtị ma gụọ akwụkwọ ntuziaka dị mfe. Ọtụtụ amaghị klas CDL, nzọụkwụ permit, iwu ọzụzụ ma ọ bụ ihe nlele tupu njem bụ. Ndị enyi ma ọ bụ mgbasa ọkwa agwala ụfọdụ n'ime ha ihe na-ezighi ezi.",
    gap: "Ọrụ ịkwọ ụgbọ ala na-akwụ ụgwọ kwụsiri ike ma nwee ọtụtụ ohere, mana ndị mmadụ na-atụfu oge na ego mgbe ha họrọ klas na-ezighi ezi, debanye aha n'ụlọ akwụkwọ ọzụzụ a na-edebanyeghị aha, ma ọ bụ bịa ule n'ejikereghị. Ndị na-amụ ihe chọrọ ezi foto nke ụzọ ahụ na atụmatụ ha nwere ike ịgbaso, tupu ha akwụọ ụgwọ ọzụzụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ iji gụọ akwụkwọ ntuziaka CDL steeti na ndepụta gọọmentị",
      "Iwu dị iche n'steeti n'steeti: ihe ọmụmụ a na-eduga gị n'akwụkwọ ntuziaka na ọfịs steeti maka ụgwọ, fọm na ịdebe oge ule",
      "Ọ dịghị ezi ịkwọ ụgbọ ala n'ihe ọmụmụ a; nka ịkwọ ụgbọ ala na-esi n'aka onye na-enye ọzụzụ e debanyere aha",
      "Ụfọdụ ndị na-amụ ihe nwere akụkọ mpụ ma ọ bụ ọrịa: ha na-elele ma ha ruru eru n'aka steeti na onye nyocha ahụike, ọ bụghị n'ihe ọmụmụ a"
    ],
    prerequisites: "Akwụkwọ ikike ịkwọ ụgbọ ala nkịtị dị ndụ, ma ọ bụ atụmatụ ibu ụzọ nweta ya. Ịgụ Bekee dị mfe, n'ihi na iwu gọọmentị etiti chọrọ ka ndị ọkwọ ụgbọ ala gụọ ma kwuo Bekee nke ọma maka ọrụ ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa otu ọrụ ịkwọ ụgbọ ala", action: "ịmata klas CDL (A, B ma ọ bụ C) na endorsement ọ bụla ọrụ ahụ chọrọ", standard: "ma nweta opekata mpe 4 n'ime nkọwa ọrụ 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji isi iyi FMCSA na steeti gọọmentị", action: "ịkpọ aha nzọụkwụ site na nyocha ahụike ruo ule nka CDL n'usoro ziri ezi", standard: "n'atụfughị nzọụkwụ ọ bụla, ya na oge nchere na iwu ọzụzụ n'ime ya" },
    { id: "O3", condition: "Site n'iji akwụkwọ ntuziaka CDL n'efu nke steeti gị", action: "ịhazi usoro ọmụmụ maka ule ihe ọmụma ị chọrọ ma tụọ akara n'otu nnwale omume", standard: "ma ruo opekata mpe 8 n'ime 10 n'ajụjụ omume tupu i debe oge ule" },
    { id: "O4", condition: "Mgbe ị guzo n'akụkụ ụgbọ ala ibu ma ọ bụ na-eji foto ya", action: "ịkpọ aha akụkụ ọ bụla ị na-elele na nlele tupu njem ma kwuo ihe ị na-elele na ya", standard: "na-ekpuchi akụkụ ndị bụ isi niile n'usoro, n'atụfughị nke ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ọnọdụ ịkwọ ụgbọ ala", action: "ịhọrọ omume dị mma maka ohere, ọsọ, ịkwọ azụ na ịdị njikere ịkwọ ụgbọ ala", standard: "ma nweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụzọ CDL",
      lessons: [
        {
          title: "Klas CDL na endorsement: kedu nke ị chọrọ?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jikọta otu ọrụ ịkwọ ụgbọ ala na klas CDL na endorsement ọ chọrọ.",
          text: [
            "Akwụkwọ ikike ọkwọ ụgbọ ala azụmahịa (CDL) na-ekwe ka ị kwọọ ụgbọ ala buru ibu ma ọ bụ pụrụ iche maka ọrụ. E nwere klas atọ, dabere n'ụgbọ ala ahụ.",
            "Class A bụ maka ụgbọ ala jikọrọ ọnụ (combination), dị ka traktọ na-adọkpụ trela, mgbe arọ e kenyere ha abụọ ọnụ ruru 26,001 paụnd ma ọ bụ karịa, ma arọ e kenyere trela a na-adọkpụ karịrị 10,000 paụnd. Class B bụ maka otu nnukwu ụgbọ ala e kenyere 26,001 paụnd ma ọ bụ karịa, dị ka ụgbọ ala ibu aja (dump truck), ụgbọ ala igbe (box truck) ma ọ bụ bọs obodo; ọ nwere ike ịdọkpụ obere trela e kenyere 10,000 paụnd ma ọ bụ obere. Class C bụ maka ụgbọ ala ndị dị obere na-ebu mmadụ 16 ma ọ bụ karịa (gụnyere onye ọkwọ ya) ma ọ bụ na-ebu ihe ndị dị egwu chọrọ placard.",
            "Endorsement bụ mkpụrụ akwụkwọ ndị ọzọ na akwụkwọ ikike gị maka ọrụ pụrụ iche. T: trela abụọ ma ọ bụ atọ. P: ndị njem. N: ụgbọ ala tankị. H: ihe ndị dị egwu. X: tankị gbakwunyere ihe ndị dị egwu. S: bọs ụlọ akwụkwọ. Nke ọ bụla chọrọ ule nke ya, endorsement H chọkwara nlele nchekwa banyere akụkọ ndụ gị.",
            "Bido n'ọrụ ị chọrọ. Gụọ ezi mgbasa ọkwa ọrụ dị nso gị ma chọọ klas na endorsement ha na-arịọ."
          ],
          steps: ["Họrọ ọrụ ị chọrọ, dị ka njem dị anya, ibuga ngwongwo n'ime obodo, bọs ma ọ bụ ụgbọ ala ibu aja.", "Jụọ: ọ na-adọkpụ nnukwu trela? Nke ahụ na-abụkarị Class A.", "Ọ bụ otu nnukwu ụgbọ ala ibu ma ọ bụ bọs? Nke ahụ na-abụkarị Class B.", "Ọ na-ebu ndị njem, mmiri n'ime tankị, trela abụọ ma ọ bụ ihe ndị dị egwu? Tinye endorsement ahụ."],
          words: [["CDL", "commercial driver's license: akwụkwọ ikike a chọrọ iji kwọọ ụgbọ ala buru ibu ma ọ bụ pụrụ iche maka ọrụ."], ["Ụgbọ ala jikọrọ ọnụ (combination vehicle)", "ụgbọ ala ibu na-adọkpụ trela, dị ka tractor-trailer."], ["Arọ e kenyere (weight rating)", "arọ kachasị ụgbọ ala e wuru ka o nwee mgbe o juru eju, nke onye mepụtara ya kpebiri (a na-akpọkarị ya GVWR)."], ["Endorsement", "ikike ọzọ na CDL gị maka ọrụ pụrụ iche, dị ka ibu ndị njem ma ọ bụ tankị."], ["Ihe ndị dị egwu (hazmat)", "ngwongwo nwere ike imerụ mmadụ ma ọ bụ ihe onwunwe ahụ, dị ka mmanụ ụgbọ ala ma ọ bụ kemịkalụ, nke chọrọ akara ịdọ aka na ntị a na-akpọ placard."]],
          slides: [
            { title: "Klas CDL atọ", bullets: ["Class A: ụgbọ ala ibu na-adọkpụ trela dị arọ (tractor-trailer)", "Class B: otu ụgbọ ala ibu ma ọ bụ bọs dị arọ (dump truck, bọs obodo)", "Class C: obere ụgbọ ala nwere mmadụ 16+ ma ọ bụ hazmat nwere placard"] },
            { title: "Endorsement: mkpụrụ akwụkwọ ndị ọzọ", bullets: ["T trela abụọ/atọ, P ndị njem, N tankị", "H hazmat, X tankị na hazmat, S bọs ụlọ akwụkwọ", "Nke ọ bụla chọrọ ule nke ya"] },
            { title: "Bido n'ọrụ ahụ", bullets: ["Gụọ ezi mgbasa ọkwa ọrụ atọ dị nso gị", "Dee klas na endorsement ha na-arịọ", "Nke ahụ bụ akwụkwọ ikike ị na-achọ"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Chọta ezi mgbasa ọkwa ọrụ ịkwọ ụgbọ ala atọ dị nso gị (na saịtị ọrụ ma ọ bụ na saịtị ụlọ ọrụ n'onwe ya). Maka nke ọ bụla, dee ọrụ ahụ, klas CDL ọ na-arịọ na endorsement ọ bụla. Gbaa ọrụ ị kacha chọọ okirikiri.",
          youCanNow: "ijikọ ọrụ ịkwọ ụgbọ ala na Class A, B ma ọ bụ C ma kpọọ aha endorsement ọ chọrọ.",
          quickCheck: [
            { objective: "O1", q: "Otu ọrụ bụ ịkwọ traktọ na-adọkpụ trela dị ụkwụ 53. Kedu klas ọ na-abụkarị?", options: ["Class C", "Class B", "Class A", "A chọghị CDL"], answer: 2, why: "Traktọ na-adọkpụ trela dị arọ bụ ụgbọ ala jikọrọ ọnụ, nke bụ Class A." },
            { objective: "O1", q: "Kedu endorsement ị ga-agbakwunye iji kwọọ bọs ụlọ akwụkwọ?", options: ["S", "T", "N", "X"], answer: 0, why: "S bụ endorsement bọs ụlọ akwụkwọ; a chọkwara endorsement P (ndị njem) maka bọs." }
          ]
        },
        {
          title: "Nzọụkwụ site na permit ruo akwụkwọ ikike",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kpọọ aha nzọụkwụ iji nweta CDL n'usoro na onye na-ahụ maka nke ọ bụla.",
          text: [
            "Ọtụtụ ndị ọkwọ ụgbọ ala ọhụrụ na-agbaso otu nzọụkwụ ahụ. Iwu gọọmentị etiti si n'aka FMCSA; ọfịs akwụkwọ ikike ịkwọ ụgbọ ala nke steeti gị na-eme ule ndị ahụ ma kpebie ụgwọ na fọm.",
            "Nke mbụ, nyocha ahụike (a na-akpọkarị ya DOT physical) n'aka onye nyocha ahụike e nyere asambodo. Ọtụtụ ndị ọkwọ ụgbọ ala ga-agafe ya ọzọ opekata mpe kwa ọnwa 24. Nke abụọ, gafee ule ihe ọmụma ederede nke steeti iji nweta akwụkwọ ikike mmụta azụmahịa (CLP). Iwu gọọmentị etiti kwuru na onye nwere CLP ga-adị opekata mpe afọ 18 ma chere opekata mpe ụbọchị 14 tupu ule nka. Mgbe ị na-eme omume n'okporo ụzọ ọha, onye nwere CDL nke klas kwesịrị ekwesị ga-anọdụ n'akụkụ gị.",
            "Kemgbe February 7, 2022, ọtụtụ ndị na-enweta Class A ma ọ bụ B CDL nke mbụ, ma ọ bụ endorsement P, S ma ọ bụ H nke mbụ, ga-emecha ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ (ELDT) n'aka onye na-enye ọzụzụ dị na Training Provider Registry nke FMCSA tupu ule ahụ. Mgbe ahụ, ị ga-eme ule nka nke steeti: nlele tupu njem, njikwa ụgbọ ala bụ isi na ịkwọ ụgbọ ala n'okporo ụzọ.",
            "Afọ: iji kwọọ ụgbọ ala gafee oke steeti, ị ga-adị opekata mpe afọ 21. Ụfọdụ steeti na-ekwe ka ndị dị afọ 18 ruo 20 kwọọ naanị n'ime steeti ahụ. Lelee iwu steeti gị."
          ],
          steps: ["Nyocha ahụike n'aka onye nyocha ahụike e nyere asambodo.", "Mụọ akwụkwọ ntuziaka CDL steeti ma gafee ule ihe ọmụma.", "Nweta akwụkwọ ikike mmụta azụmahịa (CLP) gị.", "Mechaa ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ n'aka onye e debanyere aha, ma ọ bụrụ na ọ metụtara gị.", "Mee omume ya na onye nwere CDL ruru eru n'akụkụ gị; chere opekata mpe ụbọchị 14.", "Mee ule nka: nlele tupu njem, njikwa bụ isi, ịkwọ ụgbọ ala n'okporo ụzọ."],
          words: [["FMCSA", "Federal Motor Carrier Safety Administration, ụlọ ọrụ gọọmentị U.S. na-ede iwu maka ụgbọ ala ibu na bọs."], ["CLP", "commercial learner's permit: na-ekwe ka i mee omume ịkwọ ụgbọ ala azụmahịa ya na onye nwere CDL ruru eru n'akụkụ gị."], ["ELDT", "entry-level driver training: ọzụzụ gọọmentị etiti ọtụtụ ndị ọkwọ ụgbọ ala CDL ọhụrụ ga-emecha tupu ule."], ["Training Provider Registry", "ndepụta gọọmentị nke FMCSA nke ụlọ akwụkwọ na ndị were mmadụ n'ọrụ e kwere ka ha nye ELDT."], ["Onye nyocha ahụike (medical examiner)", "ọkachamara ahụike e nyere asambodo ime DOT physical maka ndị ọkwọ ụgbọ ala azụmahịa."]],
          slides: [
            { title: "Onye na-eme gịnị", bullets: ["FMCSA: iwu gọọmentị etiti", "Steeti gị: ule, ụgwọ na fọm", "Onye na-enye ọzụzụ e debanyere aha: ọzụzụ a chọrọ"] },
            { title: "Nzọụkwụ n'usoro", bullets: ["Nyocha ahụike, wee ule ihe ọmụma, wee CLP", "Ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ ma ọ bụrụ na ọ metụtara gị", "Chere opekata mpe ụbọchị 14, wee ule nka"] },
            { title: "Iwu ị ga-echeta", bullets: ["CLP: opekata mpe afọ 18, onye nwere CDL n'akụkụ gị", "Ịgafe oke steeti: opekata mpe afọ 21", "Onye na-enye ọzụzụ ga-adị na ndepụta FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Chọọ ibe CDL nke steeti gị (chọọ aha steeti gị gbakwunyere \"CDL\" ma meghee saịtị .gov). Dee nzọụkwụ isii ahụ n'usoro, ma n'akụkụ nke ọ bụla, dee ihe steeti gị kwuru banyere ya: fọm, ebe ị ga-aga na ụgwọ o dere.",
          youCanNow: "ịkpọ aha nzọụkwụ site na nyocha ahụike ruo ule nka n'usoro ma kwuo onye na-ahụ maka nke ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "I nwetara CLP gị ugbu a. Mgbe ole ka ị nwere ike ime ule nka dị ka iwu gọọmentị etiti si kwuo?", options: ["N'otu ụbọchị ahụ", "N'echi ya", "Mgbe ọnwa 6 gachara", "Mgbe opekata mpe ụbọchị 14 gachara"], answer: 3, why: "Iwu gọọmentị etiti kwuru na onye nwere CLP ga-echere opekata mpe ụbọchị 14 tupu o mee ule nka." },
            { objective: "O2", q: "Ebee ka ị ga-achọta ụlọ akwụkwọ nwere ike inye ọzụzụ ndị ọkwọ ụgbọ ala ọhụrụ a chọrọ?", options: ["Mgbasa ọkwa ọ bụla na soshal midia", "Training Provider Registry nke FMCSA", "Enyi na-akwọ ụgbọ ala ibu", "Ụlọ ahịa ụgbọ ala"], answer: 1, why: "Naanị ndị na-enye ọzụzụ dị na Training Provider Registry nke FMCSA nwere ike inye ọzụzụ a chọrọ." }
          ]
        },
        {
          title: "Ịmụ maka ule ihe ọmụma",
          objectives: ["O3"],
          minutes: 5,
          goal: "Hazie usoro ọmụmụ site n'akwụkwọ ntuziaka CDL steeti gị ma tụọ akara n'otu nnwale omume.",
          text: [
            "Steeti ọ bụla nwere akwụkwọ ntuziaka CDL n'efu na weebụsaịtị akwụkwọ ikike ịkwọ ụgbọ ala ya. Ule ederede na-esi na ya, ya mere ọ bụ akwụkwọ ọmụmụ kacha mma ị nwere ike inwe.",
            "Ọtụtụ ndị ọkwọ ụgbọ ala ọhụrụ na-eme General Knowledge (ihe ọmụma n'ozuzu). Ọtụtụ na-emekwa Air Brakes (breki ikuku; ọtụtụ nnukwu ụgbọ ala ibu na-eji breki ikuku) na Combination Vehicles (maka Class A). Endorsement ọ bụla nwere ule nke ya. Akwụkwọ ntuziaka steeti gị na-egosi akụkụ dabara n'ule ọ bụla.",
            "Mụọ otu akụkụ n'otu oge. Gụọ ya, mechie akwụkwọ ahụ, ma dee ihe atọ i mụtara. Mgbe ahụ, jiri ajụjụ omume dị n'akwụkwọ ntuziaka ma ọ bụ na saịtị steeti gị. Gbalịa nweta opekata mpe 8 n'ime 10 ziri ezi tupu i debe oge ezi ule ahụ.",
            "Kpachara anya maka app na weebụsaịtị a na-akwụ ụgwọ na-ekwe nkwa \"ezi ajụjụ ule\". Omume n'efu site n'aka steeti gị ezuola ọtụtụ ndị mmadụ."
          ],
          steps: ["Budata akwụkwọ ntuziaka CDL steeti gị site na saịtị .gov gọọmentị.", "Kaa akara akụkụ ị chọrọ: General Knowledge gbakwunyere ndị maka klas na endorsement gị.", "Hazie otu akụkụ n'otu nnọkọ ọmụmụ, nkeji 20 ruo 30.", "Mgbe akụkụ ọ bụla gwụrụ, dee ihe atọ i mụtara n'elegharịghị anya n'akwụkwọ.", "Mee ajụjụ omume ruo mgbe ị nwetara opekata mpe 8 n'ime 10 ziri ezi."],
          words: [["Ule ihe ọmụma (knowledge test)", "ule ederede (nke a na-emekarị na kọmputa) ị na-agafe iji nweta CLP gị."], ["Breki ikuku (air brakes)", "breki na-arụ ọrụ site n'ikuku a pịkọtara ọnụ, nke a na-eji n'ọtụtụ ụgbọ ala ibu na bọs dị arọ."], ["Akwụkwọ ntuziaka CDL (CDL manual)", "akwụkwọ ọmụmụ gọọmentị nke steeti gị maka ule CDL."]],
          slides: [
            { title: "Akwụkwọ ọmụmụ gị bụ n'efu", bullets: ["Steeti ọ bụla nwere akwụkwọ ntuziaka CDL na saịtị .gov ya", "Ule ederede na-esi na ya"] },
            { title: "Kedu ule?", bullets: ["General Knowledge maka onye ọ bụla", "Air Brakes na Combination Vehicles maka ọtụtụ Class A", "Otu ule maka endorsement ọ bụla"] },
            { title: "Otu esi amụ ihe", bullets: ["Otu akụkụ n'otu nnọkọ", "Mechie akwụkwọ ma dee ihe atọ i mụtara", "Mee omume ruo mgbe ị nwetara 8 n'ime 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Budata akwụkwọ ntuziaka CDL steeti gị. Gụọ mmalite akụkụ General Knowledge banyere nlele ụgbọ ala. Mechie ya ma dee ihe atọ i chetara. Mgbe ahụ, dee ajụjụ omume ise nke gị ya na azịza ha, ma gbanwere ha na onye gị na ya na-amụ ihe ma ọ bụ lelee ha n'akwụkwọ ntuziaka.",
          youCanNow: "ịchọta akwụkwọ ntuziaka CDL steeti gị, ịhọrọ akụkụ ị chọrọ, ma mụọ ha n'oge nkenke ruo mgbe ị nwetara 8 n'ime 10.",
          quickCheck: [
            { objective: "O3", q: "Kedu akwụkwọ ọmụmụ n'efu kacha mma maka ule ihe ọmụma CDL gị?", options: ["App a na-akwụ ụgwọ nwere \"ezi azịza ule\"", "Vidiyo onye ị na-amaghị n'ịntanetị", "Akwụkwọ ntuziaka CDL gọọmentị nke steeti gị", "Akwụkwọ ntuziaka onye ọkwọ ụgbọ ala nkịtị"], answer: 2, why: "Ule ederede na-esi n'akwụkwọ ntuziaka CDL gọọmentị nke steeti gị." },
            { objective: "O3", q: "Ị chọrọ Class A maka tractor-trailer nwere breki ikuku. Kedu ule ị na-achọkarị?", options: ["Naanị School Bus", "Naanị Passenger", "Naanị Hazardous Materials", "General Knowledge, Air Brakes na Combination Vehicles"], answer: 3, why: "Ọtụtụ ndị ọkwọ tractor-trailer Class A na-eme General Knowledge, Air Brakes na Combination Vehicles." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụzọ CDL",
        questions: [
          { objective: "O1", q: "Otu ọrụ bụ ịkwọ otu ụgbọ ala ibu aja e kenyere 33,000 paụnd. Kedu klas ọ na-abụkarị?", options: ["Class B", "Class A", "Class C", "Akwụkwọ ikike ụgbọ ala nkịtị"], answer: 0, why: "Otu ụgbọ ala dị arọ e kenyere 26,001 paụnd ma ọ bụ karịa bụ Class B." },
          { objective: "O1", q: "Kedu endorsement na-ekwe ka ị dọkpụ trela abụọ ma ọ bụ atọ?", options: ["P", "S", "T", "N"], answer: 2, why: "T bụ endorsement trela abụọ na atọ." },
          { objective: "O2", q: "Kedu nzọụkwụ na-abụkarị nke mbụ n'ụzọ CDL?", options: ["Ule nka n'okporo ụzọ", "Nyocha ahụike na ule ihe ọmụma maka CLP", "Ịzụta ụgbọ ala ibu", "Inweta endorsement H"], answer: 1, why: "Ị na-agafe nyocha ahụike na ule ihe ọmụma iji nweta CLP tupu i nweta ọzụzụ ma mee ule n'okporo ụzọ." },
          { objective: "O2", q: "Mgbe ị na-eme omume na CLP n'okporo ụzọ ọha, onye ga-anọnyere gị?", options: ["Ọ dịghị onye", "Enyi ọ bụla nwere akwụkwọ ikike ụgbọ ala nkịtị", "Onye ezinụlọ", "Onye nwere CDL nke klas kwesịrị ekwesị, n'akụkụ gị"], answer: 3, why: "Onye nwere CDL ruru eru maka ụgbọ ala ahụ ga-anọdụ n'akụkụ gị ma lekọta gị." },
          { objective: "O3", q: "I nwetara 5 n'ime 10 n'ajụjụ omume maka Air Brakes. Gịnị ka ị ga-eme?", options: ["Debe oge ezi ule taa", "Hapụ Air Brakes", "Kwụọ ụgwọ app nwere azịza ule", "Mụọ akụkụ ahụ ọzọ ma mee omume ruo mgbe ị ruru 8 n'ime 10"], answer: 3, why: "Mee omume ruo mgbe ị na-enweta akara dị mma tupu i debe oge ezi ule ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Nka na atụmatụ gị",
      lessons: [
        {
          title: "Nlele tupu njem (pre-trip inspection)",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kpọọ aha akụkụ ọ bụla nke nlele tupu njem na ihe ị na-elele n'ebe ahụ.",
          text: [
            "Ule nka na-amalite site na nlele tupu njem. Ị na-agagharị gburugburu ụgbọ ala ahụ, na-atụ aka n'akụkụ ọ bụla, na-ekwu n'olu dị elu ihe ị na-elele. Iwu gọọmentị etiti kwukwara na onye ọkwọ ụgbọ ala ọ bụla ga-ahụ na ụgbọ ala ahụ adịghị ize ndụ tupu ọ kwọọ ya, ya mere nke a bụ omume maka ọrụ gị niile.",
            "Na-eso otu usoro ahụ oge niile, ka ị ghara ịhapụ akụkụ ọ bụla. Otu usoro a na-ejikarị bụ: ebe injin dị, ime ụgbọ (cab) na ịmalite injin, steering, suspension, breki, wiil na taya, akụkụ abụọ na azụ ya na ọkụ, na ebe njikọ (coupling) n'ụgbọ ala jikọrọ ọnụ. N'ụgbọ ala nwere breki ikuku, ị na-elelekwa ihe ntụle breki ikuku na ihe ịdọ aka na ntị ya.",
            "Maka akụkụ ọ bụla, kwuo ihe na-eme ka ọ dị mma: \"E kegidere ya nke ọma, ọ gbawaghị, ọ gbagọghị, ọ dịghị ihe na-ehepụta.\" Akwụkwọ ntuziaka steeti gị nwere ndepụta zuru ezu maka ụdị ụgbọ ala gị. Onye na-enye gị ọzụzụ ga-egosi gị n'ezi ụgbọ ala ibu.",
            "Ọ bụrụ na ị chọta mmebi (defect), ụgbọ ala ahụ agaghị aga ruo mgbe a rụziri ya. Kọọ ya ma dee ya."
          ],
          steps: ["Jiri ndepụta dị n'akwụkwọ ntuziaka steeti gị maka ụdị ụgbọ ala gị.", "Bido n'ebe injin dị, wee ime ụgbọ, wee gagharịa gburugburu ụgbọ ala ahụ n'otu usoro ahụ oge niile.", "Tụọ aka n'akụkụ ọ bụla ma kwuo ihe ị na-elele: e kegidere ya, o mebighị, ọ dịghị ihe na-ehepụta.", "Lelee ọkụ, ihe na-enwu enwu (reflector) na taya n'akụkụ ọ bụla.", "Dee ma kọọ mmebi ọ bụla; akwọla ụgbọ ala ruo mgbe a rụziri ya."],
          words: [["Nlele tupu njem (pre-trip inspection)", "nlele nchekwa onye ọkwọ ụgbọ ala na-eme n'ụgbọ ala tupu ọ kwọọ ya."], ["Mmebi (defect)", "akụkụ mebiri emebi, gwụrụ agwụ ma ọ bụ na-adịghị ya nke na-eme ka ụgbọ ala dị ize ndụ."], ["Njikọ (coupling)", "akụkụ ndị na-ejikọ traktọ na trela, dị ka fifth wheel na kingpin."], ["Fifth wheel", "efere gbara okirikiri dị larịị n'elu traktọ nke trela na-akpọchi na ya."]],
          slides: [
            { title: "Ihe mere nlele tupu njem ji dị mkpa", bullets: ["Ule nka na-amalite na ya", "Iwu kwuru: lelee tupu i kwọọ", "Mmebi pụtara na ị gaghị akwọ"] },
            { title: "Otu usoro ahụ oge niile", bullets: ["Ebe injin dị, wee ime ụgbọ na ịmalite injin", "Steering, suspension, breki, wiil", "Akụkụ abụọ, azụ, ọkụ, njikọ"] },
            { title: "Kwuo ihe ị na-elele", bullets: ["E kegidere ya nke ọma", "Ọ gbawaghị, ọ gbagọghị, ọ gwụghị", "Ọ dịghị ihe na-ehepụta"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Site n'akụkụ nlele dị n'akwụkwọ ntuziaka CDL steeti gị, dee ndepụta nlele tupu njem maka ụgbọ ala ị chọrọ iji mee ule. Mgbe ahụ, mee omume ikwu ya n'olu dị elu n'ụgbọ ala nkịtị, na foto ụgbọ ala ibu, ma ọ bụ n'ụgbọ ala egwuregwu: tụọ aka n'akụkụ ọ bụla ma kwuo ihe ị na-elele.",
          youCanNow: "ịkọwa nlele tupu njem n'usoro ma kwuo ihe ị na-elele n'akụkụ ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Gịnị mere ị na-eji eso otu usoro ahụ oge niile mgbe ị na-elele?", options: ["Ka ị ghara ịhapụ akụkụ ọ bụla", "N'ihi na ịhapụ akụkụ na-eme ka ọ dị ngwa", "N'ihi na onye nyocha ule na-ahọrọ usoro ahụ", "O nweghị ihe ọ pụtara"], answer: 0, why: "Usoro a kwụ ọtọ pụtara na ọ dịghị akụkụ a ga-atụfu." },
            { objective: "O4", q: "N'oge nlele tupu njem gị, ị hụrụ ọkpọkọ breki gbawara agbawa. Gịnị ka ị ga-eme?", options: ["Kwọọ nwayọọ ruo ebe nkwụsị ọzọ", "Kechie ya na teepu ma gaa", "Kọọ ya, dee ya ma akwọla ruo mgbe a rụziri ya", "Leghara ya anya ma ọ bụrụ na breki ka na-arụ ọrụ"], answer: 2, why: "Mmebi metụtara nchekwa pụtara na ụgbọ ala ahụ agaghị aga ruo mgbe a rụziri ya." }
          ]
        },
        {
          title: "Njikwa bụ isi na omume ịkwọ ụgbọ ala n'enweghị nsogbu",
          objectives: ["O5"],
          minutes: 5,
          goal: "Họrọ omume dị mma n'ọnọdụ ịkwọ ụgbọ ala ibu ndị a na-ahụkarị.",
          text: [
            "Mgbe nlele tupu njem gachara, ule nka na-elele njikwa ụgbọ ala bụ isi (ịga n'ihu na azụ, ịkwọ azụ n'ahịrị kwụ ọtọ na gburugburu ọkọnọ, na ịtụgharị) na ịkwọ ụgbọ ala n'okporo ụzọ.",
            "Ndị na-enyocha ule na-achọ omume dị mma. Hapụ nnukwu ohere gburugburu gị: ụgbọ ala ibu chọrọ ohere karịrị nke ukwuu iji kwụsị karịa ụgbọ ala nkịtị. Belata ọsọ maka mmiri ozuzo, snoo, ọkọnọ, ebe a na-arụ ọrụ n'okporo ụzọ na ọtụtụ ụgbọ ala, ọbụlagodi n'okpuru oke ọsọ e kwere. Lee anya n'ihu nke ọma ma na-elekarị enyo gị. Tụgharịa n'aka nri n'ụzọ sara mbara nke ọma ka trela ghara ịkụ ọnụ ụzọ (curb) ma ọ bụ ụgbọ ala ọzọ.",
            "Kwọọ azụ naanị mgbe ọ dị mkpa. Ọ bụrụ na ị maghị ihe dị n'azụ gị, pụta lee anya. Ọtụtụ ndị ọkwọ ụgbọ ala na-echeta G.O.A.L.: Get Out And Look (pụta lee anya).",
            "Ị ga-adịkwa njikere ịkwọ ụgbọ ala. Iwu gọọmentị etiti nke awa ọrụ (hours of service) na-ekpebi ogologo oge ị nwere ike ịkwọ ma rụọ ọrụ tupu i zuo ike, a na-enyochakwa ndị ọkwọ ụgbọ ala maka ọgwụ ọjọọ na mmanya. Akwọla mgbe ike gwụrụ gị, mgbe ị na-arịa ọrịa ma ọ bụ mgbe ihe na-egbochi uche gị."
          ],
          steps: ["Hapụ nnukwu ohere n'ihu gị; tinyekwuo ya n'oge ihu igwe ọjọọ.", "Họrọ ọsọ gị dabere n'ụzọ, ihu igwe na ibu, ọ bụghị naanị akara okporo ụzọ.", "Lee enyo gị ka sekọnd ole na ole gachara na tupu ị gbanwee ahịrị ọ bụla.", "Tupu ị kwọọ azụ: Get Out And Look (pụta lee anya), wee kwọọ azụ nwayọọ.", "Kwụsị ma zuo ike mgbe ike gwụrụ gị; gbasoo iwu awa ọrụ."],
          words: [["Ohere gburugburu (space cushion)", "ohere efu ị na-ahapụ gburugburu ụgbọ ala gị ka i nwee ebe ị ga-akwụsị ma ọ bụ tụgharịa."], ["Off-tracking", "mgbe wiil azụ nke ụgbọ ala dị ogologo na-eso ụzọ dị mkpụmkpụ karịa wiil ihu n'oge ọ na-atụgharị."], ["Awa ọrụ (hours of service)", "iwu FMCSA banyere ogologo oge onye ọkwọ ụgbọ ala nwere ike ịkwọ ma rụọ ọrụ tupu o zuo ike."]],
          slides: [
            { title: "Ihe ule nka na-elele", bullets: ["Nlele tupu njem", "Njikwa bụ isi: ịkwọ azụ, ịtụgharị, ịkwụsị", "Ịkwọ ụgbọ ala n'okporo ụzọ"] },
            { title: "Ohere na ọsọ", bullets: ["Ụgbọ ala ibu chọrọ ohere karịrị nke ukwuu iji kwụsị", "Belata ọsọ maka ihu igwe, ọkọnọ na ebe a na-arụ ọrụ", "Lee anya n'ihu nke ọma; na-elekarị enyo"] },
            { title: "Ịkwọ azụ: G.O.A.L.", bullets: ["Get Out And Look (pụta lee anya)", "Kwọọ azụ nwayọọ, naanị mgbe ọ dị mkpa"] },
            { title: "Dị njikere ịkwọ ụgbọ ala", bullets: ["Gbasoo iwu awa ọrụ", "Akwọla mgbe ike gwụrụ gị, ị na-arịa ọrịa ma ọ bụ uche gị adịghị mma"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Dee ọnọdụ ise site n'akụkụ ịkwọ ụgbọ ala n'enweghị nsogbu dị n'akwụkwọ ntuziaka steeti gị (dịka ọmụmaatụ mmiri ozuzo n'abalị, ebe a na-arụ ọrụ n'okporo ụzọ, ịkwọ azụ banye n'ebe ibudata ibu). Maka nke ọ bụla, dee omume dị mma n'otu ahịrịokwu. Rịọ onye gị na ya na-amụ ihe ka ọ jụọ gị ajụjụ banyere ha.",
          youCanNow: "ịhọrọ omume dị mma maka ohere, ọsọ, ịkwọ azụ na ịdị njikere ịkwọ ụgbọ ala.",
          quickCheck: [
            { objective: "O5", q: "Ị na-akwọ azụ ịbanye n'ebe ibudata ibu ma ị hụghị otu nkuku. Gịnị ka ị ga-eme?", options: ["Kwọọ azụ ọsọ ọsọ ka i mechaa ngwa ngwa", "Pụta lee anya tupu ị gaa n'ihu ịkwọ azụ", "Kpọọ opi ma gaa n'ihu", "Jiri naanị redio"], answer: 1, why: "G.O.A.L.: Get Out And Look (pụta lee anya) mgbe ị maghị ihe dị n'azụ gị." },
            { objective: "O5", q: "Mmiri ozuzo malitere izo nke ukwuu n'okporo ụzọ awara awara. Kedu nhọrọ dị mma?", options: ["Debe otu ọsọ na ohere ahụ", "Soro ụgbọ ala dị n'ihu nso nso ka ị hụ ọkụ ya", "Mee ọsọ ka ị pụọ na mmiri ozuzo", "Belata ọsọ ma mee ka ohere dị n'etiti gị na onye dị n'ihu buo ibu"], answer: 3, why: "Okporo ụzọ mmiri pụtara na ọ ga-ewe ogologo ohere ịkwụsị, ya mere belata ọsọ ma hapụkwuo ohere." }
          ]
        },
        {
          title: "Ịhọrọ ọzụzụ na ime atụmatụ CDL gị",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Dee atụmatụ CDL nwere ụbọchị, ya na ndị na-enye ọzụzụ e debanyere aha ị nwere ike ịkpọtụrụ.",
          text: [
            "Tupu ị kwụọ ụgwọ ma ọ bụ debanye aha maka ọzụzụ ọ bụla, lelee na ụlọ akwụkwọ ma ọ bụ onye were mmadụ n'ọrụ ahụ dị na Training Provider Registry nke FMCSA. Ị nwere ike ịchọ n'ime ndepụta ahụ site n'ebe ọ dị.",
            "Ụfọdụ ụlọ ọrụ ụgbọ ala ibu na-akwụ ụgwọ ọzụzụ ma ọ bụrụ na i kwenye ịkwọrọ ha ụgbọ ala ruo oge a kara aka. Gụọ nkwekọrịta ahụ nke ọma: gịnị na-eme ma ọ bụrụ na ị hapụ n'oge? Ị ga-akwụghachi ụgwọ ọzụzụ ahụ? Jụọ tupu ị bịanye aka.",
            "Ndị agha mbụ: ọ bụrụ na ị kwọọla ụgbọ ala agha dị arọ, jụọ steeti gị banyere nhapụ ule nka maka ndị agha (military skills test waiver); FMCSA na-ekwe ka steeti nye ya ndị agha ruru eru na ndị agha mbụ nso nso a. Ọ bụrụ na i nwere akụkọ mpụ, kpọọ ọfịs akwụkwọ ikike steeti ma jụọ ndị were mmadụ n'ọrụ banyere iwu ha maka iwe mmadụ n'ọrụ n'oge; endorsement hazmat chọkwara nlele nchekwa.",
            "Ugbu a, mee ya ka ọ bụrụ atụmatụ. Atụmatụ nwere ụbọchị nwere ohere karịrị nke ukwuu ime karịa ọchịchọ."
          ],
          steps: ["Dee ọrụ ị chọrọ na klas na endorsement ọ chọrọ.", "Chọọ na Training Provider Registry ma depụta ndị atọ na-enye ọzụzụ dị nso gị.", "Kpọọ ma ọ bụ gaa leta ha; jụọ banyere usoro oge, ụgwọ niile, nkwekọrịta na inweta ọrụ mgbe e mechara.", "Tinye ụbọchị ebumnuche n'akụkụ nzọụkwụ ọ bụla, site na nyocha ahụike ruo ule nka.", "Hazie akụkụ akwụkwọ ntuziaka ị ga-amụ kwa izu."],
          words: [["Nkwekọrịta ọzụzụ (training contract)", "nkwekọrịta na ụlọ ọrụ ga-akwụ ụgwọ ọzụzụ gị ma ọ bụrụ na ị rụọrọ ya ọrụ ruo oge a kara aka."], ["Nhapụ ule nka (skills test waiver)", "nhọrọ ụfọdụ steeti na-enye iji hapụ ule nka CDL maka ndị ọkwọ ụgbọ ala agha ruru eru."]],
          slides: [
            { title: "Lelee tupu ị kwụọ ụgwọ", bullets: ["Onye na-enye ọzụzụ ahụ ọ dị na Training Provider Registry nke FMCSA?", "Chọọ n'ime ndepụta ahụ site n'ebe ọ dị"] },
            { title: "Ọzụzụ ụlọ ọrụ kwụrụ ụgwọ ya", bullets: ["Gụọ nkwekọrịta ahụ", "Ọ bụrụ na ị hapụ n'oge? Ị ga-akwụghachi ya?"] },
            { title: "Jụọ n'oge", bullets: ["Ndị agha mbụ: jụọ banyere nhapụ ule nka maka ndị agha", "Ndị nwere akụkọ mpụ: jụọ steeti na ndị were mmadụ n'ọrụ n'oge"] },
            { title: "Hazie ya na ụbọchị", bullets: ["Nzọụkwụ ọ bụla na-enweta ụbọchị ebumnuche", "Akụkụ ọmụmụ kwa izu", "Ndị atọ na-enye ọzụzụ ị ga-akpọ"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Chọọ ndị atọ na-enye ọzụzụ dị nso gị na Training Provider Registry. Dee aha ha, otu esi akpọtụrụ ha, na ajụjụ atọ ị ga-ajụ onye ọ bụla. Mgbe ahụ, tinye ụbọchị ebumnuche n'akụkụ nzọụkwụ ọ bụla n'ụzọ CDL gị.",
          youCanNow: "ịlele na e debanyere aha onye na-enye ọzụzụ ma dee atụmatụ CDL nwere ụbọchị maka nzọụkwụ ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Otu ụlọ akwụkwọ kwuru na ọ na-enye ọzụzụ CDL mana ọ dịghị na Training Provider Registry. Gịnị ka ị ga-eme?", options: ["Debanye aha ngwa ngwa tupu ọnụ ahịa arịgo", "Kwụọ ego aka ka ọ dị ọnụ ala", "Họrọ onye na-enye ọzụzụ dị na ndepụta ahụ", "Rịọ enyi ka o lelee ya maka gị ma emechaa"], answer: 2, why: "Ọzụzụ na-agụ maka ọtụtụ ndị ọkwọ ụgbọ ala ọhụrụ ga-esi n'aka onye na-enye ọzụzụ dị na ndepụta FMCSA." },
            { objective: "O3", q: "Kedu atụmatụ nwere ohere kacha ịga nke ọma?", options: ["\"Aga m enweta CDL m otu ụbọchị.\"", "\"Nyocha ahụike tupu May 3, ule ihe ọmụma tupu May 24, mụọ otu akụkụ akwụkwọ ntuziaka kwa izu.\"", "\"Aga m amụ ihe mgbe m nwere oge.\"", "\"Aga m eme ule ahụ ma hụ ihe ga-eme.\""], answer: 1, why: "Atụmatụ nwere ụbọchị na nzọụkwụ ọmụmụ kwa izu na-eme ka ebumnuche ghọọ omume." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nka na atụmatụ gị",
        questions: [
          { objective: "O4", q: "Gịnị ka ule nka CDL na-amalite na ya?", options: ["Nlele tupu njem", "Ịkwọ ụgbọ ala n'okporo ụzọ", "Ịkwọ azụ gburugburu ọkọnọ", "Edemede ederede"], answer: 0, why: "Ule nka na-amalite site na nlele tupu njem." },
          { objective: "O4", q: "N'oge nlele tupu njem, gịnị ka ị na-ekwu banyere akụkụ ọ bụla?", options: ["Naanị aha ya", "Ọnụ ahịa ya", "Ihe ị na-elele: e kegidere ya nke ọma, o mebighị, ọ dịghị ihe na-ehepụta", "Ọ dịghị ihe; naanị ị na-ele anya"], answer: 2, why: "Ị na-atụ aka n'akụkụ ọ bụla ma kwuo ihe na-eme ka ọ dị mma." },
          { objective: "O5", q: "Gịnị mere ụgbọ ala ibu ji ahapụ ohere karịrị nke ụgbọ ala nkịtị?", options: ["Naanị iji chekwaa mmanụ ụgbọ ala", "Ha chọrọ ohere karịrị nke ukwuu iji kwụsị", "Ọ bụ naanị omume", "Ka ndị ọkwọ ụgbọ ala ndị ọzọ gafee"], answer: 1, why: "Ụgbọ ala dị arọ na-ewe ogologo oge ịkwụsị, ya mere ha chọrọ ohere gburugburu ka ukwuu." },
          { objective: "O5", q: "Ụra na-atụ gị nke ukwuu mgbe ị kwọrọ awa abụọ. Kedu omume dị mma?", options: ["Meghee windo ma gaa n'ihu", "Ṅụkwuo kọfị ma mee ọsọ", "Mee ka redio da ụda", "Kwụsị n'ebe dị mma ma zuo ike"], answer: 3, why: "Akwọla mgbe ike gwụrụ gị; kwụsị n'enweghị nsogbu ma zuo ike, ma gbasoo iwu awa ọrụ." },
          { objective: "O2", q: "Otu ụlọ ọrụ na-enye ọzụzụ CDL n'efu ma ọ bụrụ na ị kwọọrọ ya ụgbọ ala otu afọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gụọ nkwekọrịta ahụ ma jụọ ihe na-eme ma ọ bụrụ na ị hapụ n'oge", "Bịanye aka ozugbo", "Gwa ha na ị ga-ekpebi mgbe ọzụzụ gachara", "Leghara nkwekọrịta ahụ anya"], answer: 0, why: "Ọzụzụ ụlọ ọrụ kwụrụ ụgwọ ya na-enwekarị iwu ịkwụghachi, ya mere gụọ ma jụọ tupu ị bịanye aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Akwụkwọ Ikike Ọkwọ Ụgbọ Ala Azụmahịa (CDL)",
    questions: [
      { objective: "O1", q: "Ọrụ ịkwọ bọs obodo na-ebu ndị njem 40. Kedu klas na endorsement ọ ga-abụ?", options: ["Class C na T", "Class A na H", "Class B na P", "A chọghị CDL"], answer: 2, why: "Otu bọs dị arọ na-abụkarị Class B, ibu ndị njem chọkwara endorsement P." },
      { objective: "O1", q: "Gịnị ka endorsement H na-ekwe ka i mee?", options: ["Ibu ihe ndị dị egwu", "Ịkwọ bọs ụlọ akwụkwọ", "Ịdọkpụ trela abụọ", "Ịkwọ naanị ụgbọ ala tankị"], answer: 0, why: "H bụ endorsement ihe ndị dị egwu; ọ chọkwara nlele nchekwa banyere akụkọ ndụ gị." },
      { objective: "O1", q: "Kedu ụgbọ ala na-abụkarị Class A?", options: ["Vaan na-ebu ndị njem 15", "Otu ụgbọ ala igbe e kenyere 30,000 paụnd", "Ụgbọ ala pickup", "Traktọ na-adọkpụ trela e kenyere karịa 10,000 paụnd"], answer: 3, why: "Ụgbọ ala jikọrọ ọnụ e kenyere 26,001 paụnd ma ọ bụ karịa, nwere trela e kenyere karịa 10,000 paụnd, bụ Class A." },
      { objective: "O1", q: "Ị chọrọ ibu mmanụ ụgbọ ala n'ụgbọ ala tankị na-ebu ihe ndị dị egwu nwere placard. Kedu endorsement kpuchiri ha abụọ?", options: ["S", "X", "P", "T"], answer: 1, why: "X na-ejikọ endorsement ụgbọ ala tankị na nke ihe ndị dị egwu." },
      { objective: "O2", q: "Onye na-ede iwu gọọmentị etiti maka ndị ọkwọ ụgbọ ala azụmahịa?", options: ["FMCSA", "IRS", "OSHA", "Ụlọ akwụkwọ ọzụzụ gị"], answer: 0, why: "FMCSA, Federal Motor Carrier Safety Administration, na-ede iwu gọọmentị etiti." },
      { objective: "O2", q: "Onye na-eme ule ihe ọmụma na ule nka CDL?", options: ["FMCSA na Washington, D.C.", "Ụlọ ọrụ ụgbọ ala ibu ọ bụla", "Ụlọikpe gọọmentị etiti", "Ọfịs akwụkwọ ikike ịkwọ ụgbọ ala nke steeti gị ma ọ bụ ndị nyocha ule ọ kwadoro"], answer: 3, why: "Steeti na-eme ule ndị ahụ ma kpebie ụgwọ na fọm." },
      { objective: "O2", q: "Dị ka iwu gọọmentị etiti si kwuo, kedu afọ kacha nta iji kwọọ ụgbọ ala azụmahịa gafee oke steeti?", options: ["16", "18", "21", "25"], answer: 2, why: "Ndị ọkwọ ụgbọ ala ga-adị opekata mpe afọ 21 iji kwọọ ụgbọ ala azụmahịa gafee oke steeti." },
      { objective: "O2", q: "Kedu usoro ziri ezi?", options: ["Ule nka, wee CLP, wee nyocha ahụike", "Nyocha ahụike na ule ihe ọmụma, CLP, ọzụzụ, wee ule nka", "Ọzụzụ, ule nka, wee ule ihe ọmụma", "CLP, ule nka n'otu ụbọchị ahụ, wee ọzụzụ"], answer: 1, why: "Nyocha ahụike na ule ihe ọmụma na-eduga na CLP; ọzụzụ na nchere ụbọchị 14 na-abịa tupu ule nka." },
      { objective: "O2", q: "Ugboro ole ka ọtụtụ ndị ọkwọ ụgbọ ala ga-agafe nyocha ahụike DOT ọzọ?", options: ["Opekata mpe kwa ọnwa 24", "Naanị otu ugboro na ndụ ha", "Kwa afọ 10", "Ọ dịghị mgbe ọzọ mgbe afọ 30 gachara"], answer: 0, why: "A ga-enyocha ma nye ọtụtụ ndị ọkwọ ụgbọ ala asambodo ọzọ opekata mpe kwa ọnwa 24; ụfọdụ chọrọ ya ugboro ugboro karịa." },
      { objective: "O3", q: "Ebee ka ajụjụ ule ederede CDL na-esi?", options: ["Akụkọ ozi", "Akwụkwọ ntuziaka CDL steeti gị", "Soshal midia", "Redio ụgbọ ala ibu"], answer: 1, why: "Ule ihe ọmụma dabere n'akwụkwọ ntuziaka CDL gọọmentị nke steeti." },
      { objective: "O3", q: "Kedu ezigbo usoro ọmụmụ maka ule ihe ọmụma?", options: ["Gụọ akwụkwọ ntuziaka niile n'abalị tupu ule", "Naanị lee vidiyo", "Buru n'isi azịza site n'app a na-akwụ ụgwọ", "Otu akụkụ akwụkwọ ntuziaka n'otu nnọkọ, wee dee ihe atọ i mụtara ma mee ajụjụ omume"], answer: 3, why: "Nnọkọ dị mkpụmkpụ, ide ihe i chetara na ajụjụ omume na-enyere gị aka icheta." },
      { objective: "O3", q: "Olee mgbe ị dị njikere idebe oge ule ihe ọmụma?", options: ["Mgbe ị gụchara ibe aha akwụkwọ", "Mgbe ị na-enweta opekata mpe 8 n'ime 10 n'ajụjụ omume", "Mgbe enyi gị kwuru na ị dị njikere", "Ozugbo i nwetara akwụkwọ ntuziaka"], answer: 1, why: "Inweta akara dị mma n'ajụjụ omume bụ ezigbo ihe ngosi na ị dị njikere." },
      { objective: "O4", q: "Gịnị bụ nlele tupu njem?", options: ["Nlele nchekwa nke ụgbọ ala tupu i kwọọ ya", "Ule anya gị", "Ilele ihu igwe", "Ilele ụgwọ ọnwa gị"], answer: 0, why: "Ọ bụ nlele onye ọkwọ ụgbọ ala na-eme iji hụ na ụgbọ ala ahụ adịghị ize ndụ tupu ọ kwọọ ya." },
      { objective: "O4", q: "Kedu ezigbo ụzọ isi kọwaa otu akụkụ n'oge nlele tupu njem gị?", options: ["\"Nke ahụ bụ taya.\"", "\"Ọ dị ka ọ dị mma, eche m.\"", "\"E kegidere ya nke ọma, ọ gbawaghị, ọ gbagọghị, ọ dịghị ihe na-ehepụta.\"", "\"Aga m elele ya ma emechaa.\""], answer: 2, why: "Ị na-akpọ aha akụkụ ahụ ma kwuo kpọmkwem ihe na-eme ka ọ dị mma." },
      { objective: "O4", q: "N'ụgbọ ala tractor-trailer, kedu akụkụ na-ejikọ traktọ na trela?", options: ["Enyo", "Ebe njikọ (coupling), dị ka fifth wheel", "Tankị mmanụ ụgbọ ala", "Redio"], answer: 1, why: "Ebe njikọ, gụnyere fifth wheel na kingpin, na-ejide trela na traktọ." },
      { objective: "O5", q: "Gịnị ka G.O.A.L. pụtara mgbe ị na-akwọ azụ?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look"], answer: 3, why: "Get Out And Look (pụta lee anya): lelee ihe dị n'azụ gị tupu ị kwọọ azụ." },
      { objective: "O5", q: "Ị na-akwọ gafee ebe a na-arụ ọrụ n'okporo ụzọ. Gịnị ka ị ga-eme?", options: ["Belata ọsọ ma hapụkwuo ohere", "Debe ọsọ okporo ụzọ awara awara", "Na-agbanwe ahịrị ugboro ugboro", "Soro ụgbọ ala dị n'ihu nso nso"], answer: 0, why: "Ebe a na-arụ ọrụ n'okporo ụzọ nwere ndị ọrụ, ahịrị dị warara na nkwụsị na mberede, ya mere belata ọsọ ma hapụ ohere." },
      { objective: "O5", q: "Gịnị ka iwu awa ọrụ (hours of service) na-eme?", options: ["Ọ na-ekpebi ụgwọ ọrụ gị", "Ọ na-ekpebi ogologo oge ị nwere ike ịkwọ ma rụọ ọrụ tupu i zuo ike", "Ọ na-agwa gị ụzọ ị ga-eji", "Ọ na-ekpebi ụbọchị ule gị"], answer: 1, why: "Iwu awa ọrụ na-egbochi oge ịkwọ na ọrụ ka ike ghara ịgwụ ndị ọkwọ ụgbọ ala nke ukwuu." },
      { objective: "O5", q: "Ị na-atụgharị n'aka nri n'ụgbọ ala ibu dị ogologo. Gịnị bụ ihe egwu?", options: ["Trela nwere ike ịgafe nkuku ma kụọ ọnụ ụzọ ma ọ bụ ụgbọ ala", "Injin ga-akwụsị", "Enyo ga-apịaji", "Ọ dịghị ihe egwu"], answer: 0, why: "Off-tracking pụtara na wiil azụ na-eso ụzọ dị mkpụmkpụ, ya mere trela nwere ike ịkụ ihe dị n'ime ntụgharị ahụ." },
      { objective: "O4", q: "Ị hụrụ na otu ọkụ anaghị arụ ọrụ n'oge nlele tupu njem gị. Gịnị ka ị ga-eme?", options: ["Kwọọ n'abalị n'agbanyeghị", "Leghara ya anya ma ọ bụrụ na ọ bụ ehihie", "Kọọ ya ma mee ka a rụzie ya tupu i kwọọ", "Kpuchie ya na teepu"], answer: 2, why: "A na-akọ mmebi ma rụzie ya tupu ụgbọ ala ahụ aga." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee atụmatụ gị ọzọ.",
    criteria: [
      { name: "Akwụkwọ ikike kwesịrị ekwesị", objective: "O1", notYet: "Klas ma ọ bụ endorsement adabaghị n'ọrụ ahụ, ma ọ bụ ha adịghị.", meets: "Klas na endorsement ọ bụla dabara n'ọrụ a na-achọ na n'ezi mgbasa ọkwa ọrụ.", exceeds: "Ọ na-akọkwa ọrụ nke abụọ otu akwụkwọ ikike ahụ ga-emeghe, ma ọ bụ endorsement a ga-agbakwunye ma emechaa." },
      { name: "Nzọụkwụ n'usoro", objective: "O2", notYet: "Nzọụkwụ ụfọdụ adịghị ma ọ bụ adịghị n'usoro, ma ọ bụ a hapụrụ iwu ọzụzụ ma ọ bụ nchere ụbọchị 14.", meets: "Nzọụkwụ niile dị n'usoro, nke ọ bụla nwere ụbọchị ebumnuche, gụnyere nyocha ahụike, CLP, ọzụzụ na nchere ụbọchị 14.", exceeds: "Nzọụkwụ ọ bụla na-akpọkwa aha ọfịs ma ọ bụ weebụsaịtị na-ahụ maka ya." },
      { name: "Ọzụzụ e debanyere aha", objective: "O2", notYet: "Ọ dịghị onye na-enye ọzụzụ, ma ọ bụ a leleghị ndị na-enye ọzụzụ na ndepụta ahụ.", meets: "Ndị atọ na-enye ọzụzụ site na Training Provider Registry, ya na otu esi akpọtụrụ ha.", exceeds: "Ọ gụnyere azịza ajụjụ a jụrụ: ụgwọ, usoro oge, ihe nkwekọrịta kwuru." },
      { name: "Atụmatụ ọmụmụ", objective: "O3", notYet: "Ọ dịghị atụmatụ ọmụmụ, ma ọ bụ o jighị akwụkwọ ntuziaka steeti.", meets: "Akụkụ akwụkwọ ntuziaka steeti kwa izu maka ule ọ bụla a chọrọ, ya na akara omume a na-achọ.", exceeds: "Ọ gụnyere akara omume e nwetalarị." },
      { name: "Ndepụta nlele tupu njem", objective: "O4", notYet: "Ndepụta ahụ na-ahapụ akụkụ ndị bụ isi ma ọ bụ ọ dịghị n'usoro a kwụ ọtọ.", meets: "Ọ na-ekpuchi akụkụ ọ bụla bụ isi n'usoro a kwụ ọtọ, ya na ihe a ga-elele n'akụkụ ọ bụla.", exceeds: "Onye na-amụ ihe nwere ike ikwu ya n'olu dị elu, na-atụ aka n'akụkụ ndị ahụ, n'agụghị ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a na atụmatụ CDL ruru eru dị ka rubric si kwuo",
      "Ndị na-amụ ihe gafere ule ihe ọmụma steeti ma nweta CLP n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe debanyere aha n'aka onye na-enye ọzụzụ dị na Training Provider Registry",
      "Ndị na-amụ ihe nwetara CDL ma malite ọrụ ịkwọ ụgbọ ala (akụkọ ndị mmekọ na nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji meghee akwụkwọ ntuziaka CDL steeti na Training Provider Registry nke FMCSA",
      "Akwụkwọ ntuziaka CDL steeti gị (n'efu na saịtị .gov nke steeti)",
      "Akwụkwọ, mkpịsị ode na kalenda maka atụmatụ ahụ",
      "Nhọrọ: foto ma ọ bụ ihe atụ nke ụgbọ ala ibu, ma ọ bụ ụgbọ ala nkịtị, iji mee omume ikwu nlele tupu njem n'olu",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, gbakwunyere oge ọmụmụ kwa izu"
    ],
    facilitatorNotes: [
      "N'otu, bipụta ndepụta nlele nke steeti ma mee ka ndị na-amụ ihe mee omume ikwu ya n'olu, abụọ abụọ.",
      "Atụla aro ụlọ akwụkwọ ma ọ bụ ụlọ ọrụ ọ bụla; gosi ndị na-amụ ihe otu esi elele Training Provider Registry ma tụnyere ha.",
      "Chetara ndị na-amụ ihe na iwu, ụgwọ na fọm dị iche n'steeti n'steeti; na-elele saịtị .gov nke steeti mgbe niile.",
      "Maka ndị agha mbụ, gosi ha ibe nhapụ ule nka maka ndị agha nke steeti; maka ndị na-amụ ihe nwere akụkọ mpụ, jikọọ ha na onye ndụmọdụ re-entry ma ọ bụ onye ndụmọdụ ọrụ.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ ma nyere onye na-amụ ihe aka idozi otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-climate-resilient-agribusiness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Figures in KES, NGN, GHS and XOF are made-up examples. No investment advice.

const FAO_CSA = { name: "FAO: Climate-Smart Agriculture Sourcebook (akwụkwọ ntụaka maka ọrụ ugbo kwekọrọ na mgbanwe ihu igwe)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };
const CGIAR_MAIZE = { name: "CGIAR: Ọka kwekọrọ na mgbanwe ihu igwe (nke na-anagide ụkọ mmiri)", url: "https://www.cgiar.org/innovations/climate-smart-maize/" };
const CBK = { name: "Central Bank of Kenya (ndepụta ụlọ akụ na ụlọ akụ microfinance nwere ikike)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria (ụlọ ọrụ nwere ikike na nchebe ndị ahịa)", url: "https://www.cbn.gov.ng" };
const BOA = { name: "Bank of Agriculture, Nigeria (ụlọ akụ ọrụ ugbo)", url: "https://www.boanig.com" };
const ADB_GH = { name: "Agricultural Development Bank, Ghana (ụlọ akụ mmepe ọrụ ugbo)", url: "https://agricbank.com" };
const GCF = { name: "Green Climate Fund (na-arụ ọrụ site na gọọmentị, ụlọ akụ na ụlọ ọrụ a kwadoro, ọ bụghị ozugbo na ndị ọrụ ugbo)", url: "https://www.greenclimate.fund" };
const IRA = { name: "Insurance Regulatory Authority, Kenya (lelee na ụlọ ọrụ inshọransị nwere ikike)", url: "https://www.ira.go.ke" };
const ABPP = { name: "SNV/Hivos: Akwụkwọ ozi Africa Biogas Partnership Programme (biodigester n'ụlọ na bio-slurry)", url: "https://snv.org/assets/explore/download/20200526_-_abpp-4bf_factsheet.pdf" };
const FAO_AGROFOR = { name: "FAO: Agroforestry (ịkụ osisi na ihe ọkụkụ ọnụ)", url: "https://www.fao.org/agroforestry/en/" };
const KE_CARBON = { name: "Kenya: The Climate Change (Carbon Markets) Regulations, 2024 (nchịkọta na ederede zuru ezu)", url: "https://climate-laws.org/document/the-climate-change-carbon-markets-regulations-2024_e0fd" };
const VERRA = { name: "Ndekọ Verra (chọọ ọrụ carbon site n'aha ma ọ bụ ID ya)", url: "https://registry.verra.org" };
const GOLD = { name: "Ndekọ Gold Standard (chọọ ọrụ carbon site n'aha ma ọ bụ ID ya)", url: "https://registry.goldstandard.org" };

module.exports = {
  id: "agri-climate-resilient-agribusiness-ig",
  lang: "ig",
  translationOf: "agri-climate-resilient-agribusiness",
  category: "Agriculture (Africa)",
  name: "Azụmahịa Ugbo Na-anagide Mgbanwe Ihu Igwe",
  skills: "Ịtụ ihe egwu ihu igwe n'ego, Ịgụta ego ntinye ego mmegharị, Ịchọta na ịlele ego ihu igwe, Ibelata mmefu na anwụrụ ọkụ ọnụ, Ịhụ aghụghọ carbon credit, Ide atụmatụ ịnagide ihu igwe",
  outcome: "ide atụmatụ ịnagide ihu igwe nke ruru otu peeji maka azụmahịa ugbo gị: ihe egwu ihu igwe na-efu gị ego kacha, ntinye ego mmegharị ị ga-eme na ego ha ga-efu, otu ị ga-esi kwụọ ụgwọ ha, omume na-echekwa ego ị ga-agbakwunye, na otu ị ga-esi kpee ikpe n'onyinye carbon credit ọ bụla.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị ntorobịa na-azụ ahịa ugbo, ndị isi otu ndị ọrụ ugbo na ndị ọrụ extension (ndị na-akụziri ndị ọrụ ugbo) na Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire na n'Africa niile, ndị na-ahụlarị mgbanwe ihu igwe n'ugbo ha ma chọọ ịhụ ya dị ka nsogbu azụmahịa nwere atụmatụ azụmahịa.",
    "Isi 1 na-etinye ihe egwu ihu igwe n'ego: ị ga-atụ ihe egwu dị n'azụmahịa ugbo gị, họrọ ma gụta ego ntinye ego mmegharị dị ka mkpụrụ na-anagide ụkọ mmiri, nchekwa mmiri, ndò na azụmahịa ọhụrụ, ma mụta ụdị ego ihu igwe na ego mbinye \"green\" na otu esi alele ha. Isi 2 bụ maka omume na-ebelata anwụrụ ọkụ na mmefu n'otu oge, atụmatụ carbon credit na otu esi ezere aghụghọ na nkwekọrịta na-adịghị mma, na itinye ihe ndị a niile n'atụmatụ azụmahịa gị.",
    "Ihe ọmụmụ \"Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe\" na-akụzi amụma oge na kalenda ihe egwu ihu igwe; were ya mbụ ma ọ bụrụ na ị nwere ike. Nọmba ego niile ebe a bụ ọmụmaatụ: jiri ọnụ ahịa nke obodo gị. Ihe ọmụmụ a na-akọwa otu ego na nkwekọrịta si arụ ọrụ; ọ naghị agwa gị ihe ị ga-etinye ego na ya. Gụchaa nkwekọrịta ọ bụla ma gwa onye ndụmọdụ ị tụkwasịrị obi okwu tupu ị bịanye aka. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ maka ugbo gị."
  ],
  finalTask: "Dee atụmatụ ịnagide ihu igwe nke ruru otu peeji maka azụmahịa ugbo gị (ma ọ bụ ugbo ọmụmaatụ dị ka acre 3 nke ọka na agwa nwere ewu mmiri ara 6 na Makueni, hectare 4 nke koko na Western Region nke Ghana, ma ọ bụ hectare 2 nke osikapa na ahụekere nso Kaolack, Senegal): ihe egwu ihu igwe atọ kacha gị na ego ị chere na nke ọ bụla ga-efu; ntinye ego mmegharị abụọ ma ọ bụ atọ na ego ha ga-efu, uru ha kwa afọ na oge ha ga-akwụghachi; otu ị ga-esi kwụọ ụgwọ (nchekwa ego, otu, mbinye ego, onyinye) na ajụjụ ị ga-ajụ onye na-agbazinye ego; opekata mpe omume abụọ na-ebelata mmefu na anwụrụ ọkụ; iwu gị maka ikpe ikpe n'onyinye carbon credit ọ bụla; na ụbọchị ị ga-eleghachi atụmatụ ahụ anya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị ọrụ ugbo azụmahịa na-eto eto, ndị ọrụ n'ugbo, ndị ntorobịa na-azụ ahịa ugbo na ndị ọrụ extension n'Africa niile (Kenya, Nigeria, Ghana na West Africa na-asụ French). Ọtụtụ na-elekọta ugbo nwere ihe ọkụkụ na anụ ụlọ, na-erekwa akụkụ ihe ha kụrụ. Ụfọdụ na-edekọ ihe dị mfe; ọtụtụ anaghị edekọ.",
    startingPoint: "Ha nwere ike ịkpọ aha mgbanwe ihu igwe ha na-ahụ (mmiri ozuzo na-abịa oge, oge ọkọchị n'etiti udu mmiri, okpomọkụ, iju mmiri), ọtụtụ makwaara ụfọdụ omume ọrụ ugbo kwekọrọ na ihu igwe. Mmadụ ole na ole na-etinye ego n'ihe egwu ihu igwe, na-atụnyere ntinye ego mmegharị site n'oge ha ga-akwụghachi, ma ọ bụ mara otu esi alele ego mbinye green ma ọ bụ nkwekọrịta carbon credit.",
    gap: "Nsogbu ihu igwe na-emebi ego a na-enweta na ịkwụghachi ego mbinye, mana ọtụtụ ndị ọrụ ugbo na-emefu ego na mmegharị n'agụtaghị ya, na-agbazite ego n'atụnyereghị ego niile ọ ga-efu, ma ọ bụ na-abịanye aka na nkwekọrịta carbon ha aghọtaghị. Ndị na-amụ ihe kwesịrị ime atụmatụ ịnagide ihu igwe dị ka mkpebi azụmahịa, chebe onwe ha pụọ n'aghụghọ, ma gosi ndị na-agbazinye ego, ndị na-azụ ahịa na mmemme atụmatụ a pụrụ ịtụkwasị obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ na-eji Bekee dị ka asụsụ nke abụọ, ihe ọmụmụ a dịkwa n'asụsụ Spanish, French na Arabic",
      "Ngwaọrụ: ekwentị nkịtị ma ọ bụ smartphone, akwụkwọ na igwe mgbakọ; ịntanetị nwere ike ịdị nwayọọ ma ọ bụ dị oke ọnụ",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ ugbo",
      "Ego: nọmba niile bụ ọmụmaatụ; a naghị enye ọnụ ahịa, ọmụrụ nwa ego ma ọ bụ enyemaka gọọmentị dị ka eziokwu",
      "Nchebe ego: enweghị ndụmọdụ itinye ego; ndị na-amụ ihe anaghị ekesa PIN, ID ma ọ bụ nọmba akaụntụ n'ọrụ omume ọ bụla"
    ],
    prerequisites: "Ndekọ ugbo dị mfe na uru n'ozuzu (gross margin) na-enyere aka (\"Azụmahịa Ugbo na Nlekọta Ugbo\"). A na-atụ aro ka e bu ụzọ were \"Ọrụ Ugbo Nke Kwadoro Maka Mgbanwe Ihu Igwe\" (amụma na kalenda ihe egwu ihu igwe)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị azụmahịa dị n'ugbo gị na ihe mere n'oge ise gara aga", action: "ịtụ ihe egwu ihu igwe kacha dị n'azụmahịa ugbo gị site n'otú o nwere ike isi mee na ego ole ọ nwere ike ime ka i tufuo", standard: "na-edepụta opekata mpe ihe egwu atọ, nke ọ bụla nwere ego a tụrụ atụ n'ego obodo gị" },
    { id: "O2", condition: "Mgbe e nyere gị ntinye ego mmegharị abụọ ma ọ bụ atọ i nwere ike ime", action: "ịgụta ego ntinye ego ọ bụla ga-efu ma tụnyere uru ya kwa afọ na ego ọ ga-efu", standard: "na-eji ọnụ ahịa obodo gị ma na-egosi oge ọ ga-akwụghachi n'oge ọrụ ugbo ma ọ bụ n'afọ" },
    { id: "O3", condition: "Tupu ị rịọ ego mbinye ihu igwe ma ọ bụ green, onyinye ma ọ bụ mmemme", action: "idepụta ajụjụ ị ga-ajụ onye na-agbazinye ego ma lelee na o nwere ikike", standard: "na-ekpuchi ego niile ọ ga-efu, ụbọchị ịkwụghachi, ọnọdụ ya na onye na-achịkwa ya" },
    { id: "O4", condition: "Mgbe e nyere gị omume ị na-eme ugbu a", action: "ịmata omume abụọ na-ebelata anwụrụ gas na-ekpo ụwa ọkụ ma na-ebelatakwa mmefu gị", standard: "na-akpọ aha ihe ntinye ma ọ bụ ego nke ọ bụla na-echekwa" },
    { id: "O5", condition: "Mgbe e nyere gị onyinye ma ọ bụ nkwekọrịta carbon credit", action: "ịlele onyinye ahụ maka ihe ịdọ aka na ntị nke aghụghọ ma ọ bụ nkwekọrịta na-adịghị mma", standard: "na-aza opekata mpe nlele anọ tupu ị bịanye aka ma ọ bụ kwụọ ego ọ bụla" },
    { id: "O6", condition: "Site n'iji ọrụ i mere n'ihe ọmụmụ a", action: "ide atụmatụ ịnagide ihu igwe nke ruru otu peeji maka azụmahịa ugbo gị", standard: "nwere ihe egwu, ntinye ego, mmefu, ego, omume na-echekwa ego na ụbọchị nleghachi anya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe egwu ihu igwe bụ ihe egwu azụmahịa",
      lessons: [
        {
          title: "Ntụle ihe egwu ihu igwe maka azụmahịa ugbo gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tụọ ihe egwu ihu igwe dị n'azụmahịa ugbo gị site n'otú o nwere ike isi mee na ego ọ ga-eme ka i tufuo.",
          text: [
            "Kalenda ihe egwu ihu igwe na-egosi mgbe ihu igwe na-emerụ ugbo gị. Ntụle ihe egwu ihu igwe na-aga otu nzọụkwụ karịa: ọ na-ajụ ego ole ihe egwu ọ bụla nwere ike ime ka azụmahịa gị tufuo, ka ị mara nke ị ga-ebu ụzọ mefuo ego na ya.",
            "Maka azụmahịa ọ bụla (ọka, tomato, ewu, koko, azụ tilapia), depụta ihe egwu ihu igwe: mmiri ozuzo na-amalite oge, ọkọchị mgbe ihe ọkụkụ na-eme ifuru, okpomọkụ na-emerụ anụ ụlọ, iju mmiri, ikuku siri ike, ụmụ ahụhụ ọhụrụ. Jụọ ajụjụ abụọ banyere nke ọ bụla: Olee otú o nwere ike isi mee n'oge ise na-abịa (ntakịrị, n'etiti ma ọ bụ nke ukwuu)? Ma ọ bụrụ na ọ mee, ego ole ka ị ga-atụfu? Jiri ndekọ gị ma jụọ ndị ọrụ ugbo toro eto ihe mere n'afọ ọjọọ gara aga.",
            "Wee chee banyere azụmahịa ahụ niile, ọ bụghị naanị ubi: Ị ka ga-enwe ike ịkwụghachi ego mbinye n'afọ ọjọọ? Ndị na-azụ ahịa ka ga-anabata ihe ị kụrụ ma ọ bụrụ na ịdị mma ya agbadaa? Ndị ọrụ ga-enwe ike iru ugbo mgbe mmiri juru? Ọkọchị nke na-ebelata akpa ọka 40 ka ọ bụrụ 25 abụghị naanị nsogbu owuwe ihe ubi; ọ bụ nsogbu ego na-abata na ego na-apụ (cash flow).",
            "Tinye ihe egwu ndị ahụ na tebụl dị mfe ma hazie ha n'usoro. Ihe egwu nwere ike ime ma dịkwa oke ọnụ na-aga n'elu atụmatụ gị."
          ],
          steps: ["Depụta azụmahịa gị niile.", "N'okpuru nke ọ bụla, depụta ihe egwu ihu igwe site n'ahụmịhe gị na kalenda ihe egwu gị.", "Dee otú ihe egwu ọ bụla nwere ike isi mee: ntakịrị, n'etiti ma ọ bụ nke ukwuu.", "Tụọ ego ị ga-atụfu ma ọ mee, n'ego obodo gị.", "Hazie: ihe egwu nwere ike ime ma dị oke ọnụ na-ebu ụzọ.", "Gbakwunye mmetụta azụmahịa: ịkwụghachi ego mbinye, nkwekọrịta ndị na-azụ ahịa, ndị ọrụ, njem."],
          words: [["Ntụle ihe egwu ihu igwe", "ndepụta ihe egwu ihu igwe azụmahịa gị na-eche ihu, otú nke ọ bụla nwere ike isi mee na ego ole ọ nwere ike ifu."], ["Ihe egwu (hazard)", "ihe nwere ike ime mmerụ, dị ka ụkọ mmiri, iju mmiri ma ọ bụ okpomọkụ."], ["Ohere ime (likelihood)", "otú o nwere ike isi bụrụ na ihe ga-eme."], ["Mmetụta (impact)", "mmebi ma ọ bụ ego ole ihe mere na-eme ka i tufuo."]],
          slides: [
            { title: "Site na kalenda gaa n'ego", bullets: ["Kalenda: mgbe ihu igwe na-emerụ", "Ntụle: ego ole ọ na-efu azụmahịa gị", "Bụrụ ụzọ mefuo ego na ihe egwu kacha ukwuu"] },
            { title: "Ajụjụ abụọ maka ihe egwu ọ bụla", bullets: ["Olee otú o nwere ike isi mee n'oge ise na-abịa?", "Ego ole ka ị ga-atụfu ma ọ mee?", "Jiri ndekọ na ncheta ndị ọrụ ugbo toro eto"] },
            { title: "Chee karịa ubi", bullets: ["Ịkwụghachi ego mbinye n'afọ ọjọọ", "Nkwekọrịta ndị na-azụ ahịa na ịdị mma", "Ndị ọrụ, njem, nchekwa"] },
            { title: "Hazie ihe egwu n'usoro", bullets: ["Nwere ike ime + dị oke ọnụ = n'elu atụmatụ", "Ọmụmaatụ: ọkọchị na-ebelata akpa 40 ka ọ bụrụ 25", "Nke ahụ bụkwa nsogbu cash flow"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Mee tebụl nwere kọlụm anọ: ihe egwu, otú o nwere ike isi mee (ntakịrị, n'etiti, nke ukwuu), ego a tụrụ atụ ị ga-atụfu, na mmetụta azụmahịa. Dejupụta opekata mpe ihe egwu atọ maka ugbo gị ma gbaa nke kacha elu gburugburu.",
          youCanNow: "ịtụ ihe egwu ihu igwe dị n'azụmahịa ugbo gị site n'otú ha nwere ike isi mee na ego ole ha nwere ike ifu.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe egwu kwesịrị ịnọ n'elu atụmatụ ihe egwu ihu igwe nke ugbo?", options: ["Nke na-agaghị eme ma dịkwa ọnụ ala", "Nke nwere ike ime ma ga-efu ọtụtụ ego", "Nke na-emetụta naanị onye agbata obi", "Nke mere otu ugboro afọ 40 gara aga"], answer: 1, why: "Ihe egwu nwere ike ime ma dịkwa oke ọnụ na-emebi azụmahịa kacha, ya mere ha na-ebu ụzọ." },
            { objective: "O1", q: "Ọkọchị belatara ọka nwaanyị ọrụ ugbo wetara, o nweghịkwa ike ịkwụghachi ego mbinye ya n'oge. Gịnị ka nke a na-egosi?", options: ["Ihe egwu ihu igwe na-emetụta naanị owuwe ihe ubi", "Ihu igwe anaghị emetụta ego mbinye mgbe ọ bụla", "Ihe egwu ihu igwe na-emetụtakwa cash flow na ịkwụghachi ego", "Onye ọrụ ugbo ahụ kwesịrị ịkwụsị idekọ ihe"], answer: 2, why: "Ntụle ihe egwu ihu igwe na-ele azụmahịa ahụ niile anya, gụnyere cash flow na ụgwọ." }
          ]
        },
        {
          title: "Ịhọrọ na ịgụta ego ntinye ego mmegharị",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gụta ego ntinye ego mmegharị abụọ ma tụnyere oge ha ga-akwụghachi.",
          text: [
            "Ntinye ego mmegharị bụ ego ma ọ bụ ọrụ ị na-emefu ugbu a ka ị tụfuo obere n'afọ ọjọọ. Ndị a na-ahụkarị n'Africa bụ mkpụrụ na-anagide ụkọ mmiri ma ọ bụ nke na-eto ngwa ngwa (ebe CGIAR dị ka CIMMYT emeela ọka na-anagide ụkọ mmiri), nchekwa mmiri (tank, ọdọ mmiri e kpuchiri ala ya), osisi ndò maka koko, kọfị ma ọ bụ anụ ụlọ, ụlọ anụ ka mma, na ịgbasa azụmahịa: ịgbakwunye ihe ọkụkụ nke abụọ, ewu, ọkụkọ ma ọ bụ azụ ka otu oge ọjọọ ghara imebi gị.",
            "Maka nhọrọ ọ bụla, dee ego ọ ga-efu (ịzụta, iwu, ndị ọrụ, nlekọta) na uru ya kwa afọ (owuwe ihe ubi ọzọ n'afọ ọjọọ, nri anụ ole na-erughị ị zụtara, ego ọhụrụ). Wee gụta oge ọ ga-akwụghachi (payback): kee ego ọ ga-efu site n'uru ya kwa afọ, ọ ga-enye gị ihe dị ka afọ ole tupu ọ kwụghachi onwe ya. Cheta na ụfọdụ uru na-abịa naanị n'afọ ọjọọ, ya mere kesaa ha n'etiti ọtụtụ oge.",
            "Ọmụmaatụ nwere nọmba e chepụtara echepụta: onye ọrụ ugbo na Machakos na-atụnyere tank mmiri nke KES 60,000 na-echekwa ihe dị ka KES 20,000 kwa afọ na mmiri ọ na-azụta na akwụkwọ nri na-ala n'iyi (ọ ga-akwụghachi n'ihe dị ka afọ 3), na mkpụrụ na-anagide ụkọ mmiri nke na-efu KES 2,000 karịa kwa acre ma na-echekwa ihe dị ka KES 8,000 n'afọ ọkọchị na-abịa otu afọ n'ime afọ abụọ (n'ozuzu KES 4,000 kwa afọ, ọ ga-akwụghachi n'oge mbụ). Ha abụọ nwere ike ịba uru; mkpụrụ ahụ dị ọnụ ala ịmalite.",
            "Lelekwa: Ị nwere ike ilekọta ya? Ọ dabara n'ọrụ aka na ala gị? Ọ na-arụkwa ọrụ n'afọ ọma? Jụọ onye ọrụ extension gị ụdị mkpụrụ na nhazi dabara n'ebe gị."
          ],
          steps: ["Họrọ ihe egwu kacha gị site na Nkuzi 1.", "Depụta ntinye ego abụọ ma ọ bụ atọ na-ebelata ya.", "Dee ego niile nke ọ bụla ga-efu: ịzụta, iwu, ndị ọrụ, nlekọta.", "Tụọ uru ya kwa afọ, kesaa ya n'etiti afọ ọma na afọ ọjọọ.", "Oge ịkwụghachi = ego ọ ga-efu ÷ uru kwa afọ.", "Lelee ndị ọrụ, nlekọta na ma ọ dabara na ndụmọdụ extension."],
          words: [["Ntinye ego mmegharị", "ego ma ọ bụ ọrụ e mefuru ugbu a ka ị tụfuo obere mgbe ihu igwe metụtara gị."], ["Oge ịkwụghachi (payback)", "oge ọ na-ewe tupu ego ntinye ego na-echekwa ma ọ bụ na-ewebata ekpuchie ego ọ fụrụ."], ["Ịgbasa azụmahịa (diversification)", "inwe ihe karịrị otu ebe ego si abata ka otu ọdịda ghara imebi azụmahịa."]],
          slides: [
            { title: "Ntinye ego mmegharị a na-ahụkarị", bullets: ["Mkpụrụ na-anagide ụkọ mmiri ma ọ bụ na-eto ngwa ngwa", "Nchekwa mmiri: tank, ọdọ mmiri e kpuchiri ala", "Osisi ndò, ụlọ anụ ka mma", "Azụmahịa ọhụrụ: ewu, ọkụkọ, azụ"] },
            { title: "Ego ọ ga-efu na uru ya", bullets: ["Ego: ịzụta, iwu, ndị ọrụ, nlekọta", "Uru: mfu e zeere, ego ọhụrụ", "Kesaa uru afọ ọjọọ n'etiti ọtụtụ oge"] },
            { title: "Oge ịkwụghachi (ọmụmaatụ KES)", bullets: ["Tank 60,000 ÷ 20,000 kwa afọ = ihe dị ka afọ 3", "Mkpụrụ +2,000 kwa acre ÷ 4,000 kwa afọ = oge mbụ", "Jiri ọnụ ahịa obodo gị"] },
            { title: "Tupu ị họrọ", bullets: ["Ị nwere ike ilekọta ya?", "Ọ dabara n'ala na ọrụ aka gị?", "Jụọ extension ihe dabara n'ebe gị"] }
          ],
          sources: [CGIAR_MAIZE, FAO_CSA],
          tryIt: "Maka ihe egwu kacha gị, gụta ego ntinye ego mmegharị abụọ site n'ọnụ ahịa obodo gị. Dee ego ọ ga-efu, uru ya n'ozuzu kwa afọ na oge ọ ga-akwụghachi maka nke ọ bụla, wee gbaa nke ị ga-ebu ụzọ malite gburugburu ma kwuo ihe kpatara ya.",
          youCanNow: "ịgụta ego ntinye ego mmegharị ma tụnyere ha site n'oge ha ga-akwụghachi.",
          quickCheck: [
            { objective: "O2", q: "Ụgbụ ndò na-efu GHS 3,000 ma na-echekwa ihe dị ka GHS 1,000 kwa afọ na tomato na-ala n'iyi. Ihe dị ka oge ole ka ọ ga-akwụghachi?", options: ["Ọnwa 3", "Afọ 1", "Afọ 10", "Ihe dị ka afọ 3"], answer: 3, why: "Oge ịkwụghachi bụ ego ọ ga-efu kee site n'uru kwa afọ: 3,000 ÷ 1,000 = ihe dị ka afọ 3 (nọmba ọmụmaatụ)." },
            { objective: "O2", q: "Mkpụrụ na-anagide ụkọ mmiri na-enyere aka naanị n'afọ ọkọchị, nke na-abịa ihe dị ka otu afọ n'ime afọ atọ. Kedu otu ị ga-esi gụta uru ya?", options: ["Kesaa ego e chekwara n'afọ ọkọchị n'etiti afọ niile", "Gụta ego e chekwara n'afọ ọkọchị kwa afọ", "Agụtala uru ọ bụla", "Gụta ya naanị n'afọ mmiri ozuzo"], answer: 0, why: "Uru na-abịa naanị n'afọ ọjọọ kwesịrị ka e kesaa ya n'etiti afọ ọma na afọ ọjọọ." }
          ]
        },
        {
          title: "Ego ihu igwe na ego mbinye green",
          objectives: ["O3"],
          minutes: 5,
          goal: "Depụta ajụjụ ị ga-ajụ tupu ị were ego mbinye ihu igwe ma ọ bụ green ma lelee na onye na-agbazinye ego nwere ikike.",
          text: [
            "Ego ihu igwe (climate finance) bụ ego e mere maka imegharị onwe gị na mgbanwe ihu igwe ma ọ bụ ibelata anwụrụ gas. Nnukwu ego dị ka Green Climate Fund anaghị agbazinye ndị ọrụ ugbo ego ozugbo; ha na-arụ ọrụ site na gọọmentị, ụlọ akụ na ụlọ ọrụ ndị ọzọ. Ihe na-eru ndị ọrụ ugbo aka na-abịakarị dị ka: ego mbinye green ma ọ bụ ihu igwe site n'ụlọ akụ, ụlọ akụ microfinance na SACCO (maka tank, pọmpụ anyanwụ, ngwa drip, biogas); atụmatụ pay-as-you-go site n'aka ndị na-ere ngwaọrụ; mmemme gọọmentị ma ọ bụ NGO na-ekere òkè n'ego mkpụrụ, tank ma ọ bụ osisi; na onyinye ma ọ bụ ego ndakọrịta maka otu na cooperative.",
            "Ebe ị ga-ajụ: ụlọ akụ gị ma ọ bụ SACCO gị, cooperative gị, ọfịs ọrụ ugbo nke county ma ọ bụ steeti gị na onye ọrụ extension, na ụlọ akụ ọrụ ugbo dị ka Bank of Agriculture na Nigeria ma ọ bụ Agricultural Development Bank na Ghana. Mmemme na-agbanwe ọtụtụ mgbe, ya mere jụọ nke mepere emepe ugbu a ma nweta nkọwa ya n'ederede.",
            "Akara \"green\" anaghị eme ka ego mbinye dị ọnụ ala ma ọ bụ dị nchebe. Tụnyere ego niile ọ ga-efu (ọmụrụ nwa, ụgwọ ọrụ, inshọransị), mgbe a ga-akwụghachi ya (ọ dabara n'oge owuwe ihe ubi gị?), ihe ga-eme ma ọ bụrụ na ihe ubi adaa, na ọnọdụ ọ bụla (ndị na-ere ahịa a kwadoro, ọzụzụ, inshọransị). Lelee na onye na-agbazinye ego nwere ikike: na Kenya na ndepụta Central Bank of Kenya, na Nigeria na Central Bank of Nigeria, n'ebe ndị ọzọ na central bank gị ma ọ bụ onye na-achịkwa cooperative.",
            "Akwụla onye nnọchi anya (agent) \"ego nhazi\" (processing fee) ka i nweta onyinye ma ọ bụ ego mbinye, ekesala PIN gị ma ọ bụ koodu mobile money gị mgbe ọ bụla."
          ],
          steps: ["Kpebie ihe ego ahụ ga-azụta na oge ọ ga-akwụghachi (Nkuzi 2).", "Jụọ ụlọ akụ gị, SACCO, cooperative na ọfịs ọrụ ugbo ihe mepere emepe ugbu a.", "Nweta ego niile ọ ga-efu, ụbọchị ịkwụghachi na ọnọdụ ya n'ederede.", "Lelee onye na-agbazinye ego na ndepụta central bank ma ọ bụ onye na-achịkwa ya.", "Jụọ: gịnị ga-eme ma ọ bụrụ na ihe ubi m adaa?", "Gwa onye ndụmọdụ ị tụkwasịrị obi okwu tupu ị bịanye aka."],
          words: [["Ego ihu igwe (climate finance)", "ego maka imegharị onwe gị na mgbanwe ihu igwe ma ọ bụ ibelata anwụrụ gas."], ["Ego mbinye green (green loan)", "ego mbinye maka ihe na-enyere gburugburu ebe obibi aka, dị ka pọmpụ anyanwụ ma ọ bụ ngwa biogas."], ["SACCO", "cooperative nchekwa ego na mbinye ego nke ndị otu ya nwe."], ["Pay-as-you-go", "ịkwụ ụgwọ ngwaọrụ n'obere ego mgbe niile, ọtụtụ mgbe site na mobile money."]],
          slides: [
            { title: "Otu ego ihu igwe si eru ndị ọrụ ugbo", bullets: ["Ego mbinye green: ụlọ akụ, microfinance, SACCO", "Atụmatụ ngwaọrụ pay-as-you-go", "Mmemme ikere òkè n'ego na onyinye otu"] },
            { title: "Ebe ị ga-ajụ", bullets: ["Ụlọ akụ gị, SACCO ma ọ bụ cooperative", "Ọfịs ọrụ ugbo na onye ọrụ extension", "Ụlọ akụ ọrụ ugbo, dịka Bank of Agriculture (NG), ADB (GH)"] },
            { title: "Green apụtaghị ọnụ ala", bullets: ["Ego niile: ọmụrụ nwa + ụgwọ ọrụ + inshọransị", "Ịkwụghachi dabara n'owuwe ihe ubi gị?", "Ọ bụrụ na ihe ubi adaa, gịnị ga-eme?"] },
            { title: "Nọrọ na nchebe", bullets: ["Onye na-agbazinye ego nwere ikike? Lelee ndepụta central bank", "Akwụla agent \"ego nhazi\" mgbe ọ bụla", "Ekesala PIN ma ọ bụ koodu gị"] }
          ],
          sources: [GCF, CBK, CBN, BOA, ADB_GH],
          tryIt: "Dee ajụjụ ise ị ga-ajụ onye na-agbazinye ego ma ọ bụ mmemme banyere ntinye ego i họọrọ na Nkuzi 2. Tinye ego niile ọ ga-efu, ụbọchị ịkwụghachi, ọnọdụ, ihe ga-eme ma ihe ubi daa, na otu ị ga-esi lelee na ha nwere ikike.",
          youCanNow: "idepụta ajụjụ ị ga-ajụ banyere ego mbinye ihu igwe ma ọ bụ green ma lelee na onye na-agbazinye ego nwere ikike.",
          quickCheck: [
            { objective: "O3", q: "Agent kwuru na ị ga-enweta onyinye ihu igwe ma ọ bụrụ na i bu ụzọ zipu KES 3,000 dị ka ego nhazi. Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa tupu onyinye ahụ emechie", "Zipu ọkara ugbu a na ọkara ma emechaa", "Jụ; ezi mmemme anaghị arịọ agent ka ha nakọta ego otu a", "Nye agent ahụ PIN mobile money gị kama"], answer: 2, why: "\"Ego nhazi\" a na-akwụ agent tupu oge bụ aghụghọ a na-ahụkarị; lelee mmemme ahụ n'ọfịs gọọmentị." },
            { objective: "O3", q: "Kedu ajụjụ kacha mkpa mgbe ị na-atụnyere ego mbinye green abụọ maka pọmpụ anyanwụ?", options: ["Kedu nke nwere akara (logo) kacha mma", "Ego niile ọ ga-efu na ma ịkwụghachi dabara n'owuwe ihe ubi gị", "Kedu agent kacha nwee obi ọma", "Kedu nke a na-akpọ green"], answer: 1, why: "Ego niile ọ ga-efu na oge ịkwụghachi na-ekpebi ma ị ga-enwe ike ịkwụ ya, n'agbanyeghị akara ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe egwu ihu igwe bụ ihe egwu azụmahịa",
        questions: [
          { objective: "O1", q: "Gịnị ka ntụle ihe egwu ihu igwe na-agbakwunye na kalenda ihe egwu ihu igwe?", options: ["Aha ọnwa niile", "Amụma mmiri ozuzo", "Otú ihe egwu ọ bụla nwere ike isi mee na ego ole ọ nwere ike ime ka azụmahịa tufuo", "Ndepụta ihe ọkụkụ ị ga-akwụsị ịkụ"], answer: 2, why: "Ntụle ahụ na-etinye ohere ime na mmetụta ego n'ihe egwu ọ bụla ka i nwee ike ịhazi ha n'usoro." },
          { objective: "O1", q: "Iju mmiri na-ebipụ ụzọ gaa n'aka onye na-azụ ihe gị izu abụọ kwa afọ. Ebee ka nke a ga-aga?", options: ["Ọ dịghị ebe; ọ bụghị maka owuwe ihe ubi", "Na mmetụta azụmahịa nke ntụle ihe egwu ihu igwe gị", "Naanị n'akwụkwọ ndetu gị", "N'atụmatụ onye na-azụ ahịa, ọ bụghị nke gị"], answer: 1, why: "Ihe egwu ihu igwe na njem, ndị na-azụ ahịa na ndị ọrụ bụ ihe egwu azụmahịa, ha kwesịrị ịnọ na ntụle ahụ." },
          { objective: "O2", q: "Onye na-azụ tilapia na Nigeria na-atụnyere akwa ọdọ mmiri (pond liner) nke NGN 400,000 na-echekwa NGN 200,000 kwa afọ. Oge ole ka ọ ga-akwụghachi?", options: ["Ihe dị ka afọ 2", "Ihe dị ka afọ 20", "Ihe dị ka ọnwa 2", "Ọ gaghị akwụghachi mgbe ọ bụla"], answer: 0, why: "400,000 ÷ 200,000 = ihe dị ka afọ 2 (nọmba ọmụmaatụ)." },
          { objective: "O2", q: "Kedu nke bụ ọmụmaatụ ịgbasa azụmahịa dị ka ntinye ego mmegharị?", options: ["Ịkụ otu ụdị ọka ahụ n'ala ka ukwuu", "Ire ewu gị niile", "Ịgbazite ego ọzọ maka otu ihe ọkụkụ ahụ", "Ịgbakwunye ọkụkọ n'ugbo ọka ka otu oge ọjọọ ghara imebi gị"], answer: 3, why: "Ebe nke abụọ ego si abata na-agbasa ihe egwu ihu igwe n'azụmahịa niile." },
          { objective: "O3", q: "Kedu otu onye ọrụ ugbo na Kenya ga-esi lelee na onye na-enye ego mbinye green nwere ikike?", options: ["Jụọ agent nke onye na-agbazinye ego ahụ", "Lelee ndepụta ụlọ ọrụ nwere ikike nke Central Bank of Kenya", "Lee ọnụ ọgụgụ like ya na soshal midia", "Tụkwasị ya obi ma ọ bụrụ na ọ sị \"green\""], answer: 1, why: "Central bank na-ebipụta ndepụta ụlọ akụ na ụlọ akụ microfinance nwere ikike." }
        ]
      }
    },
    {
      name: "Isi 2: Ibelata mmefu, carbon na atụmatụ",
      lessons: [
        {
          title: "Mbelata anwụrụ gas nke na-echekwakwa ego",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mata omume abụọ n'ugbo gị na-ebelata anwụrụ gas na mmefu n'otu oge.",
          text: [
            "Mbelata (mitigation) pụtara ibelata gas na-ekpo ụwa ọkụ (greenhouse gas) nke ugbo na-ahapụ, ma ọ bụ ichekwa carbon ka ukwuu n'ala na n'osisi. Maka onye ọrụ ugbo, mbelata kacha mma bụ nke na-echekwakwa ego, n'ihi na ị na-enweta uru ọbụlagodi ma ọ bụrụ na ọ dịghị onye kwụrụ gị ụgwọ maka carbon ahụ.",
            "Obere fatịlaịza na-ala n'iyi: fatịlaịza mmiri ozuzo, ikuku ma ọ bụ oge na-ezighi ezi bụ ego tufuru, ọ na-ahapụkwa gas. Itinye ya nso mgbọrọgwụ n'oge kwesịrị ekwesị, na ịgbakwunye nsị anụ na compost, na-enye owuwe ihe ubi ka ukwuu site n'akpa ọ bụla. Biogas: biodigester n'ụlọ na-agbanwe nsị ehi ma ọ bụ ezi ka ọ bụrụ gas isi nri, na-ebelata ego ị na-emefu na nkụ ma ọ bụ unyi, bio-slurry fọdụrụ bụkwa fatịlaịza. Africa Biogas Partnership Programme enyerela aka wụnye biodigester n'ụlọ na Kenya, Burkina Faso na mba ndị ọzọ.",
            "Agroforestry: osisi n'ugbo na-echekwa carbon ma nwee ike inye mkpụrụ osisi, nri anụ, nkụ, osisi ụlọ na ndò (dịka ọmụmaatụ osisi ndò n'ugbo koko na Côte d'Ivoire na Ghana), na-ebelata ihe ị na-azụta. Ihe ndị ọzọ na-echekwa ego: ịghara ịgba ihe fọdụrụ n'ubi ọkụ (na-edobe nri ala ma na-echekwa fatịlaịza), nri ka mma maka anụ ụlọ (mmiri ara ka ukwuu site n'anụ ọ bụla), na pọmpụ anyanwụ kama diesel (obere ego ịrụ ya).",
            "Dee ego ọ na-echekwa. Ọ bụrụ na biodigester na-efu XOF 500,000 ma na-echekwa XOF 120,000 kwa afọ na unyi na fatịlaịza (nọmba e chepụtara echepụta), ị nwere ike ịgụta oge ọ ga-akwụghachi dị ka ntinye ego ọ bụla ọzọ."
          ],
          steps: ["Depụta ihe ntinye ị na-azụta kacha: fatịlaịza, mmanụ ọkụ, nri anụ, nkụ.", "Maka nke ọ bụla, chọta omume na-eji ya obere ma ọ bụ dochie ya.", "Tụọ ego ọ ga-echekwa kwa afọ.", "Lelee ego ọ ga-efu na oge ọ ga-akwụghachi.", "Họrọ abụọ ị ga-amalite."],
          words: [["Mbelata (mitigation)", "ibelata anwụrụ gas na-ekpo ụwa ọkụ, ma ọ bụ ichekwa carbon ka ukwuu n'ala na n'osisi."], ["Biodigester", "tank e mechiri emechi ebe nsị anụ na-ere ma na-emepụta biogas maka isi nri ma ọ bụ ọkụ."], ["Bio-slurry", "mmiri fọdụrụ mgbe e mepụtachara biogas; e nwere ike iji ya dị ka fatịlaịza."], ["Agroforestry", "ịkụ osisi na ihe ọkụkụ ma ọ bụ anụ ụlọ n'otu ala."]],
          slides: [
            { title: "Mbelata nke na-akwụ ụgwọ", bullets: ["Na-ebelata anwụrụ gas ma ọ bụ na-echekwa carbon", "Na-ebelatakwa mmefu gị", "Ị na-enweta uru ọbụlagodi n'enweghị ụgwọ carbon"] },
            { title: "Ihe atọ na-echekwa ego", bullets: ["Obere fatịlaịza na-ala n'iyi: ebe kwesịrị, oge kwesịrị", "Biogas: gas isi nri + fatịlaịza bio-slurry", "Agroforestry: mkpụrụ osisi, nri anụ, nkụ, ndò"] },
            { title: "Ihe ndị ọzọ na-echekwa ego", bullets: ["Agbala ihe fọdụrụ n'ubi ọkụ", "Nri ka mma: mmiri ara ka ukwuu site n'anụ ọ bụla", "Anyanwụ kama diesel maka ịgba mmiri"] },
            { title: "Tinye ya n'ego", bullets: ["Ọmụmaatụ: biodigester XOF 500,000", "Na-echekwa XOF 120,000 kwa afọ (e chepụtara)", "Ọ ga-akwụghachi n'ihe dị ka afọ 4"] }
          ],
          sources: [ABPP, FAO_AGROFOR, FAO_CSA],
          tryIt: "Depụta ihe ntinye atọ ị na-emefu ego kacha na ha. Maka nke ọ bụla, dee otu omume ga-eme ka i jiri ya obere, ma tụọ ego ọ ga-echekwa kwa afọ. Họrọ abụọ ị ga-etinye n'atụmatụ gị.",
          youCanNow: "ịmata omume na-ebelata ma anwụrụ gas ma mmefu, ma tinye ego ọ na-echekwa n'ego.",
          quickCheck: [
            { objective: "O4", q: "Kedu omume na-ebelata anwụrụ gas ma na-echekwakwa ego onye na-azụ ezi?", options: ["Ịgba nsị ọkụ n'ebe ghere oghe", "Ịzụta unyi ka ukwuu", "Ịhapụ nsị n'otu ebe n'akụkụ osimiri", "Biodigester na-emepụta gas isi nri na fatịlaịza bio-slurry"], answer: 3, why: "Biogas na-anọchi mmanụ ọkụ a zụtara, bio-slurry na-anọchikwa ụfọdụ fatịlaịza." },
            { objective: "O4", q: "Gịnị mere ibelata fatịlaịza na-ala n'iyi ji bụrụ ezigbo nhọrọ mbelata maka onye ọrụ ugbo?", options: ["Ọ na-echekwa ego ma na-ebelatakwa anwụrụ gas", "Ọ na-eme ka ala sie ike", "Ọ pụtara na ị gaghị etinye fatịlaịza ọzọ", "Onye ọ bụla na-azụ ahịa chọrọ ya"], answer: 0, why: "Obere ihe na-ala n'iyi pụtara owuwe ihe ubi ka ukwuu site n'akpa ọ bụla, ya mere onye ọrụ ugbo na-echekwa ego ma na-ahapụ obere gas." }
          ]
        },
        {
          title: "Carbon credit: ohere, aghụghọ na nkwekọrịta na-adịghị mma",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee onyinye carbon credit maka ihe ịdọ aka na ntị tupu ị bịanye aka ma ọ bụ kwụọ ego ọ bụla.",
          text: [
            "Carbon credit bụ asambodo na-ekwu na e gbochiri otu tọn carbon dioxide ịbanye n'ikuku ma ọ bụ e chekwara ya, dịka ọmụmaatụ site n'ịkụ osisi, imezi ala ma ọ bụ iji stov dị ọcha. Ụlọ ọrụ na-azụta credit. Ụfọdụ ọrụ (project) na-akwụ ndị ọrụ ugbo ma ọ bụ obodo ụgwọ maka omume na-echekwa carbon. A na-edebanye ezi ọrụ aha n'ọkọlọtọ dị ka Verra ma ọ bụ Gold Standard, e nwekwara ike ịchọ ha n'ndekọ (registry) ha site n'aha ọrụ ahụ.",
            "Kpachara anya nke ukwuu. Ụgwọ carbon na-adịkarị ntakịrị, na-abịa nwayọọ (mgbe ụfọdụ ọtụtụ afọ mgbe ị malitere) ma ọ dịghị n'aka, a na-ebukwa ụzọ wepụ ego ịtụ na ilele ya. Aghụghọ na nkwekọrịta na-adịghị mma na-adịkarị: ndị na-arịọ ndị ọrụ ugbo ego ka ha \"banye\", na-ekwe nkwa nnukwu ego ngwa ngwa, ma ọ bụ na-arịọ gị ka ị bịanye aka na nkwekọrịta ogologo na-enyefe ikike ala gị, osisi gị ma ọ bụ carbon gị afọ 20 ma ọ bụ karịa.",
            "Ihe ịdọ aka na ntị: ị ga-akwụ ego ka ị banye; a na-ekwe nkwa nnukwu ego ngwa ngwa; ị nweghị ike iburu nkwekọrịta ahụ gaa gụọ ya; ọ bụghị n'asụsụ ị ghọtara; ọ na-enye mmadụ ikike n'ala ma ọ bụ osisi gị, ma ọ bụ na-egbochi gị igbutu ma ọ bụ ire ha; o kwughị ego ole ị ga-enweta, mgbe, na òkè onye mmepe (developer) na-ewere; ọrụ ahụ adịghị n'ndekọ ọ bụla.",
            "Ụfọdụ mba nwere iwu ugbu a. Kenya's Climate Change (Carbon Markets) Regulations, 2024 chọrọ ka a kwado ọrụ carbon, ma maka ọrụ dị n'ala obodo, nkwekọrịta mmepe obodo (community development agreement) banyere otu a ga-esi kesaa uru. Lelee iwu mba gị na ministri gburugburu ebe obibi. Abịanyela aka n'ụbọchị ahụ; gụchaa ya, jụọ cooperative gị, ọka iwu ma ọ bụ onye ndụmọdụ ị tụkwasịrị obi, ma debe otu mbipụta."
          ],
          steps: ["Jụọ: gịnị bụ aha ọrụ ahụ na ID ndekọ ya?", "Chọọ ya n'ndekọ (Verra, Gold Standard ma ọ bụ ndị ọzọ).", "Jụọ ego ole a ga-akwụ gị, mgbe, na òkè onye mmepe na-ewere.", "Gụọ ikike n'ala, osisi ma ọ bụ carbon ị na-enye, na ruo ogologo oge ole.", "Jụ ego ọ bụla maka ịbanye.", "Buru nkwekọrịta ahụ gaa; nweta ndụmọdụ tupu ị bịanye aka; debe otu mbipụta."],
          words: [["Carbon credit", "asambodo maka otu tọn carbon dioxide e gbochiri ịbanye n'ikuku ma ọ bụ e chekwara."], ["Onye mmepe ọrụ carbon (developer)", "ụlọ ọrụ na-elekọta ọrụ carbon ma na-ere credit ndị ahụ."], ["Ndekọ (registry)", "ndepụta ọha nke ọrụ carbon na credit ha."], ["Nkesa uru (benefit sharing)", "otu e si ekesa ego credit n'etiti onye mmepe, ndị ọrụ ugbo na obodo."]],
          slides: [
            { title: "Ihe carbon credit bụ", bullets: ["Otu tọn CO2 e gbochiri ịbanye n'ikuku ma ọ bụ e chekwara", "Ụlọ ọrụ na-azụta ha", "Ezi ọrụ dị n'ndekọ (Verra, Gold Standard)"] },
            { title: "Eziokwu ya", bullets: ["Ụgwọ na-adịkarị ntakịrị, nwayọọ, ọ dịghịkwa n'aka", "A na-ebu ụzọ wepụ ego ịtụ ya", "Ụfọdụ onyinye bụ aghụghọ"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ego ịbanye; nkwa nnukwu ego ngwa ngwa", "Ị nweghị ike iburu nkwekọrịta gaa gụọ ya", "Ikike n'ala ma ọ bụ osisi gị ruo ọtụtụ iri afọ", "Enweghị ID ndekọ; enweghị òkè ụgwọ doro anya"] },
            { title: "Chebe onwe gị", bullets: ["Kenya: Carbon Markets Regulations 2024", "Lelee ministri gburugburu ebe obibi mba gị", "Abịanyela aka n'ụbọchị ahụ; nweta ndụmọdụ; debe mbipụta"] }
          ],
          sources: [VERRA, GOLD, KE_CARBON],
          tryIt: "Dee ndepụta nlele nwere opekata mpe ajụjụ ise ị ga-ajụ tupu ị banye n'atụmatụ carbon credit ọ bụla. Wee were ya na agent na-enye otu gị XOF 50,000 kwa onye ọrụ ugbo ma ọ bụrụ na unu bịanyere aka taa ma kwụọ XOF 5,000 iji debanye aha: dee ihe ịdọ aka na ntị onyinye a na-egosi.",
          youCanNow: "ịlele onyinye carbon credit maka ihe ịdọ aka na ntị nke aghụghọ ma ọ bụ nkwekọrịta na-adịghị mma.",
          quickCheck: [
            { objective: "O5", q: "Agent carbon na-arịọ onye ọrụ ugbo ọ bụla ka ọ kwụọ NGN 10,000 iji banye ma na-ekwe nkwa ụgwọ n'ọnwa na-abịa. Gịnị ka nke a nwere ike ịbụ?", options: ["Ọrụ nkịtị e debanyere aha", "Enyemaka gọọmentị", "Aghụghọ ma ọ bụ onyinye na-adịghị mma nke ukwuu", "Ọzụzụ n'efu"], answer: 2, why: "Ego ịbanye na nkwa nnukwu ego ngwa ngwa bụ ihe ịdọ aka na ntị a ma ama nke aghụghọ carbon." },
            { objective: "O5", q: "Gịnị ka ị ga-achọ na nkwekọrịta carbon tupu ị bịanye aka?", options: ["Ego ole ị ga-enweta, mgbe, na ikike n'ala ma ọ bụ osisi ị na-enye na ruo oge ole", "Naanị agba akara (logo) ya", "Ma agent ahụ nwere obi ọma", "Ọ dịghị ihe, ma ọ bụrụ na ọrụ ahụ gbasara osisi"], answer: 0, why: "Ụgwọ, oge na ikike n'ala ma ọ bụ osisi gị na-ekpebi ma nkwekọrịta ahụ ziri ezi." }
          ]
        },
        {
          title: "Itinye ihe egwu ihu igwe n'atụmatụ azụmahịa gị",
          objectives: ["O6", "O1", "O2"],
          minutes: 5,
          goal: "Dee atụmatụ ịnagide ihu igwe nke ruru otu peeji maka azụmahịa ugbo gị.",
          text: [
            "Ndị na-agbazinye ego, ndị na-azụ ahịa na mmemme na-ajụkwu otu ugbo ga-esi nagide nsogbu ihu igwe. Obere akụkụ ihu igwe n'atụmatụ azụmahịa gị na-egosi na i chewo banyere ya, ọ na-enyekwa gị aka ikpebi ebe ego gị ga-ebu ụzọ gaa.",
            "Atụmatụ otu peeji gị nwere akụkụ isii: 1. ihe egwu ihu igwe atọ kacha gị na ohere ime na ego ha ga-efu (Nkuzi 1); 2. ntinye ego mmegharị abụọ ma ọ bụ atọ na ego ha ga-efu, uru na oge ịkwụghachi (Nkuzi 2); 3. otu ị ga-esi kwụọ ụgwọ: nchekwa ego, otu, ego mbinye ma ọ bụ mmemme, na ajụjụ gị maka onye na-agbazinye ego (Nkuzi 3); 4. omume abụọ na-ebelata mmefu na anwụrụ gas (Nkuzi 4); 5. iwu gị maka onyinye carbon ọ bụla (Nkuzi 5); 6. ụbọchị nleghachi anya mgbe oge ọrụ ugbo ọ bụla gasịrị.",
            "Gbakwunye ahịrị \"afọ ọjọọ\" na cash flow gị: ego ị na-atụ anya ma ọ bụrụ na ihe egwu kacha ukwuu emee, na otu ị ka ga-esi kwụọ ego mbinye, ụgwọ akwụkwọ ụmụaka na ihe ntinye, dịka ọmụmaatụ site na nchekwa ego, azụmahịa nke abụọ ma ọ bụ inshọransị. Ọ bụrụ na ị na-eji inshọransị ihe ọkụkụ ma ọ bụ anụ ụlọ, lelee na ụlọ ọrụ inshọransị ahụ nwere ikike (na Kenya na Insurance Regulatory Authority) ma gụọ ihe na-eme ka ọ kwụọ ụgwọ (payout trigger).",
            "Ị nwere ike ịrịọ ngwa enyemaka AI dị n'ekwentị ka ọ gbanwee ndetu gị ka ọ bụrụ tebụl mara mma ma ọ bụ ka ọ jụọ gị ajụjụ banyere ihe fọdụrụ n'atụmatụ gị, mana nọmba ndị ahụ ga-esi na ndekọ gị na ọnụ ahịa obodo gị. Edela nọmba ID, nọmba akaụntụ ma ọ bụ PIN n'ime ya."
          ],
          steps: ["Detuo tebụl ihe egwu gị site na Nkuzi 1: ihe egwu atọ kacha elu.", "Gbakwunye ntinye ego abụọ ma ọ bụ atọ i gụtara ego ha.", "Dee otu ị ga-esi kwụọ ụgwọ na ajụjụ gị maka onye na-agbazinye ego.", "Gbakwunye omume mbelata abụọ na-echekwa ego.", "Dee iwu gị maka onyinye carbon.", "Gbakwunye ahịrị cash flow afọ ọjọọ na ụbọchị nleghachi anya."],
          words: [["Atụmatụ azụmahịa (business plan)", "obere atụmatụ e dere ede nke ihe ugbo gị na-eme, ego ọ na-emefu, ego ọ na-enweta na ebumnuche ya."], ["Ọnọdụ afọ ọjọọ (bad-year scenario)", "atụmatụ maka ihe na-eme ego a na-enweta na ịkwụ ụgwọ ma ọ bụrụ na ihe egwu kacha ukwuu emee."], ["Ihe na-eme ka inshọransị kwụọ (payout trigger)", "ihe mere, dị ka obere mmiri ozuzo a tụrụ n'otu ebe nlele, nke na-eme ka inshọransị kwụọ ụgwọ."]],
          slides: [
            { title: "Ihe mere ị ga-eji tinye ihu igwe n'atụmatụ", bullets: ["Ndị na-agbazinye ego na ndị na-azụ ahịa na-ajụ otu ị ga-esi nagide", "Ọ na-egosi ebe ego gị ga-ebu ụzọ gaa"] },
            { title: "Akụkụ isii, otu peeji", bullets: ["Ihe egwu, ntinye ego na oge ịkwụghachi", "Otu ị ga-esi kwụọ ụgwọ", "Omume na-echekwa ego, iwu carbon", "Ụbọchị nleghachi anya"] },
            { title: "Mee atụmatụ maka afọ ọjọọ", bullets: ["Ego ị ga-enweta ma ihe egwu kacha ukwuu mee", "Otu a ka ga-esi kwụọ ego mbinye na ụgwọ", "Inshọransị: ụlọ ọrụ nwere ikike, trigger doro anya"] },
            { title: "AI nwere ike ịhazi, ọ gaghị ekpebi", bullets: ["Rịọ ya ka o mee tebụl ma ọ bụ chọpụta ihe fọdụrụ", "Nọmba na-esi na ndekọ gị", "Enweghị ID, nọmba akaụntụ ma ọ bụ PIN"] }
          ],
          sources: [IRA, FAO_CSA],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ịnagide ihu igwe otu peeji gị nwere akụkụ isii niile na ahịrị cash flow afọ ọjọọ. Gụọrọ onye ezinụlọ, onye otu gị ma ọ bụ onye ọrụ extension ya ma rịọ ha otu ajụjụ i zabeghị.",
          youCanNow: "ide atụmatụ ịnagide ihu igwe otu peeji maka azụmahịa ugbo gị nke onye na-agbazinye ego, onye na-azụ ahịa ma ọ bụ mmemme nwere ike ịgụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu akụkụ FỌDỤRỤ n'atụmatụ a: ihe egwu, ntinye ego e gụtara ego ha, otu a ga-esi kwụọ ụgwọ, omume mbelata, iwu carbon?", options: ["Ihe ọkụkụ onye ọrụ ugbo kacha hụ n'anya", "Ndepụta ndị agbata obi", "Ihu igwe echi", "Ụbọchị nleghachi anya"], answer: 3, why: "Atụmatụ chọrọ ụbọchị nleghachi anya ka e melite ya mgbe oge ọrụ ugbo ọ bụla gasịrị." },
            { objective: "O6", q: "Gịnị ka ahịrị afọ ọjọọ na cash flow gị na-egosi?", options: ["Ego ole ị ga-enweta n'afọ kacha mma", "Otu ị ka ga-esi kwụọ ego mbinye na mmefu ma ihe egwu kacha ukwuu mee", "Ọnụ ahịa fatịlaịza n'afọ gara aga", "Ọnụ ọgụgụ ndị ọrụ ị maara"], answer: 1, why: "Ọ na-anwale ma azụmahịa ahụ ga-alanarị nsogbu i kwuru na o nwere ike ime ma dịkwa oke ọnụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ibelata mmefu, carbon na atụmatụ",
        questions: [
          { objective: "O4", q: "Onye ọrụ ugbo kọfị kụrụ osisi ndò na-enyekwa mkpụrụ osisi na nkụ. Gịnị bụ nke a?", options: ["Agroforestry na-echekwa ego ma na-echekwa carbon", "Ịgba ihe fọdụrụ n'ubi ọkụ", "Aghụghọ carbon", "Itinye fatịlaịza karịa"], answer: 0, why: "Osisi na ihe ọkụkụ ọnụ na-echekwa carbon ma na-enye ihe onye ọrụ ugbo gaara azụta." },
          { objective: "O4", q: "Kedu nke ABỤGHỊ omume mbelata na-echekwa ego?", options: ["Itinye fatịlaịza nso mgbọrọgwụ n'oge kwesịrị ekwesị", "Ịgba ihe fọdụrụ n'ubi ọkụ mgbe owuwe ihe ubi gasịrị", "Iji biodigester maka gas isi nri", "Nri ka mma maka mmiri ara ka ukwuu site n'ehi ọ bụla"], answer: 1, why: "Ịgba ihe fọdụrụ ọkụ na-emefu nri ala ma na-ahapụ gas; ndị ọzọ na-ebelata mmefu na anwụrụ gas." },
          { objective: "O5", q: "Kedu otu ị ga-esi lelee na ọrụ carbon bụ eziokwu?", options: ["Jụọ agent ma ọ bụ eziokwu", "Gụọ ọnụ ọgụgụ ndị nọ na nzukọ", "Chọọ ya site n'aha ma ọ bụ ID n'ndekọ dị ka Verra ma ọ bụ Gold Standard", "Lelee ụgbọala agent ahụ"], answer: 2, why: "Ezi ọrụ dị n'ndekọ ọha nke ọkọlọtọ carbon na-edebe." },
          { objective: "O5", q: "Nkwekọrịta carbon na-egbochi gị igbutu ma ọ bụ ire osisi nke gị afọ 30. Gịnị ka ị ga-eme?", options: ["Bịanye aka; osisi bụ ego n'efu", "Bịanye aka ugbu a ma gụọ ya ma emechaa", "Rịọ agent ka ọ gụọ naanị akụkụ ndị dị mma", "Buru ya gaa, nweta ndụmọdụ ma bịanye aka naanị ma ọ bụrụ na ị ghọtara ma nabata ọnọdụ ndị ahụ"], answer: 3, why: "Mgbochi ogologo oge n'ala na osisi gị dị oke mkpa; gụchaa ya ma bụrụ ụzọ nweta ndụmọdụ a pụrụ ịtụkwasị obi." },
          { objective: "O6", q: "Gịnị mere atụmatụ ịnagide ihu igwe ji kwesịrị inwe ụbọchị nleghachi anya?", options: ["Ndị na-agbazinye ego na-amasị ụbọchị", "Ihe egwu, ọnụ ahịa na nsonaazụ na-agbanwe, ya mere a na-emelite atụmatụ ahụ kwa oge ọrụ ugbo", "Ọ na-eme ka peeji ahụ dị ogologo", "Iwu chọrọ nleghachi anya"], answer: 1, why: "Ileghachi anya mgbe oge ọrụ ugbo ọ bụla gasịrị na-eme ka atụmatụ ahụ dabara n'ihe mere n'ezie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Azụmahịa Ugbo Na-anagide Mgbanwe Ihu Igwe",
    questions: [
      { objective: "O1", q: "Ntụle ihe egwu ihu igwe na-ajụ ajụjụ abụọ banyere ihe egwu ọ bụla. Kedu abụọ?", options: ["Olee otú o nwere ike isi mee, na ego ole ọ ga-efu?", "Onye kpatara ya, na mgbe ọ malitere?", "Kedu redio kọrọ ya, na n'oge ole?", "Ọ bụ ozi ọma, ọ ziri ezi?"], answer: 0, why: "Ohere ime na mmetụta ego na-ekwe ka ị hazie ihe egwu n'usoro." },
      { objective: "O1", q: "Ebee ka ị ga-ahụ mfu gara aga iji tụọ ego ihe egwu ga-efu?", options: ["Naanị n'aka agent carbon", "Site na nsonaazụ lọtrị", "Site na ndekọ ugbo gị na ncheta ndị ọrụ ugbo toro eto banyere afọ ọjọọ", "Site n'ọnụ ahịa ekwentị"], answer: 2, why: "Ndekọ na ncheta obodo na-egosi ihe afọ ọjọọ fụrụ n'ezie." },
      { objective: "O1", q: "Okpomọkụ na-ebelata akwa ọkụkọ n'ụlọ ọkụkọ gị ọtụtụ afọ. Kedu otu ị ga-esi tụọ ya?", options: ["Ohere ime dị ntakịrị, enweghị mfu ego", "Ọ bụghị ihe egwu ihu igwe", "Naanị nsogbu nri anụ", "Ohere ime dị elu nwere mfu ego site n'akwa tufuru"], answer: 3, why: "Ọ na-eme ọtụtụ afọ ma na-efu akwa, ya mere o nwere ike ime ma dịkwa oke ọnụ." },
      { objective: "O2", q: "Gịnị bụ oge ịkwụghachi (payback)?", options: ["Ọmụrụ nwa n'ego mbinye", "Oge ọ na-ewe tupu ego ntinye ego na-echekwa ma ọ bụ na-ewebata ekpuchie ego ọ fụrụ", "Ọnụ ahịa mkpụrụ", "Ego ụlọ ahịa na-akwụghachi gị"], answer: 1, why: "Oge ịkwụghachi = ego ọ ga-efu ÷ uru kwa afọ." },
      { objective: "O2", q: "Kedu nke so n'ego tank mmiri ga-efu?", options: ["Ịzụta, iwu, ndị ọrụ na nlekọta", "Naanị ọnụ ahịa ya n'ụlọ ahịa", "Naanị ego njem", "Ọ dịghị ihe, ma ọ bụrụ na ọ bụ onyinye"], answer: 0, why: "Ego niile gụnyere ihe niile achọrọ iwu ya ma mee ka ọ na-arụ ọrụ." },
      { objective: "O2", q: "Kedu nke bụ ntinye ego mmegharị megide ọkọchị?", options: ["Ire pọmpụ mmiri", "Ịkụ ihe n'oge kwa afọ n'enweghị ihe kpatara ya", "Mkpụrụ na-anagide ụkọ mmiri ma ọ bụ na-eto ngwa ngwa", "Ịgba ihe fọdụrụ n'ubi ọkụ"], answer: 2, why: "Ụdị mkpụrụ na-anagide ụkọ mmiri na ndị na-eto ngwa ngwa na-ebelata mfu n'oge ọkọchị." },
      { objective: "O2", q: "Ntinye ego abụọ nwere otu uru ahụ. Otu dị ọnụ ala ma dị mfe ilekọta. Kedu nke ị na-ebukarị ụzọ malite?", options: ["Nke dị oke ọnụ", "Ọ dịghị nke ọ bụla", "Ha abụọ n'otu oge site n'ego mbinye", "Nke dị ọnụ ala nke ị nwere ike ilekọta"], answer: 3, why: "Obere ego na nlekọta dị mfe na-enye oge ịkwụghachi dị ngwa ma dị nchebe." },
      { objective: "O3", q: "Kedu otu nnukwu ego ihu igwe si erukarị ndị ọrụ ugbo aka?", options: ["Site n'ụlọ akụ, gọọmentị na ụlọ ọrụ, dị ka ego mbinye na mmemme", "Site n'iziga ego n'ekwentị onye ọrụ ugbo ọ bụla", "Site n'aka agent carbon na-ana ego", "Ha anaghị eru ndị ọrụ ugbo aka mgbe ọ bụla"], answer: 0, why: "Ego dị ka Green Climate Fund na-arụ ọrụ site na gọọmentị, ụlọ akụ na ụlọ ọrụ a kwadoro." },
      { objective: "O3", q: "Tupu i were ego mbinye green, kedu ajụjụ kacha mkpa?", options: ["Onye ọrụ ego mbinye ahụ nwere obi ọma?", "Ego niile ole ka ọ ga-efu, ịkwụghachi ọ dabara n'owuwe ihe ubi m?", "O nwere \"green\" n'aha ya?", "Ọfịs ahụ ọ dị nso ahịa?"], answer: 1, why: "Ego niile ọ ga-efu na oge ịkwụghachi na-ekpebi ma ị ga-enwe ike ịkwụ ya." },
      { objective: "O3", q: "Na Nigeria, ebee ka ị ga-elele na onye na-agbazinye ego nwere ikike?", options: ["N'otu WhatsApp", "N'aka agent nke onye na-agbazinye ego ahụ", "Na Central Bank of Nigeria", "Na mpempe akwụkwọ mgbasa ozi n'ahịa"], answer: 2, why: "Central Bank of Nigeria na-achịkwa ma na-edepụta ụlọ ọrụ nwere ikike." },
      { objective: "O3", q: "Mmadụ na-ekwe ime ka onyinye ihu igwe gị bịa ngwa ngwa (fast-track) maka ego a ga-akwụ na nọmba mobile money ya. Gịnị bụ nke a?", options: ["Ihe ịdọ aka na ntị nke aghụghọ", "Nzọụkwụ nkịtị", "Iwu gọọmentị", "Ego cooperative"], answer: 0, why: "Ezi mmemme anaghị arịọ gị ka ị kwụọ agent ego ka onyinye bịa ngwa ngwa." },
      { objective: "O4", q: "Gịnị bụ mbelata (mitigation)?", options: ["Ịkwaga n'ugbo ọhụrụ", "Inshọransị megide ụkọ mmiri", "Ire ihe ọkụkụ n'oge", "Ibelata anwụrụ gas na-ekpo ụwa ọkụ ma ọ bụ ichekwa carbon ka ukwuu"], answer: 3, why: "Mbelata na-ebelata anwụrụ gas ma ọ bụ na-echekwa carbon n'ala na n'osisi." },
      { objective: "O4", q: "Gịnị bụ bio-slurry?", options: ["Ọgwụ ụmụ ahụhụ", "Mmiri fọdụrụ mgbe e mepụtachara biogas, nke a na-eji dị ka fatịlaịza", "Ụdị mmanụ ọkụ a na-ere n'ụlọ ahịa", "Ọrịa ehi"], answer: 1, why: "Bio-slurry site na biodigester nwere ike inye ala nri." },
      { objective: "O4", q: "Kedu omume na-echekwa ego MA na-ebelata anwụrụ gas n'ugbo mmiri ara ehi?", options: ["Nri ka mma ka ehi ọ bụla nye mmiri ara ka ukwuu", "Ịgba nsị ọkụ", "Ịzụta ehi karịa ka nri dị", "Ịhapụ ala ahịhịa n'enweghị ihe ọ bụla"], answer: 0, why: "Mmiri ara ka ukwuu site n'anụ ọ bụla n'ihi nri ka mma pụtara obere mmefu na anwụrụ gas kwa lita." },
      { objective: "O5", q: "Gịnị bụ carbon credit?", options: ["Ego mbinye maka mkpụrụ", "Mbelata ọnụ ahịa fatịlaịza", "Asambodo maka otu tọn CO2 e gbochiri ịbanye n'ikuku ma ọ bụ e chekwara", "Ego mgbakwunye mobile money"], answer: 2, why: "Credit ọ bụla na-anọchi anya otu tọn carbon dioxide e zeere ma ọ bụ e chekwara." },
      { objective: "O5", q: "Kedu nke bụ ihe ịdọ aka na ntị n'onyinye carbon?", options: ["Ọrụ ahụ nwere ID ndekọ ị nwere ike ịchọ", "Ị nwere ike iburu nkwekọrịta ahụ gaa ụlọ gụọ ya", "E dere ụgwọ na òkè doro anya", "Ị ga-akwụ ego ka ị banye"], answer: 3, why: "Ego ịbanye bụ ihe ịrịba ama a ma ama nke aghụghọ." },
      { objective: "O5", q: "Na Kenya, gịnị ka ọrụ carbon dị n'ala obodo chọrọ?", options: ["Ọ dịghị ihe ọ bụla", "Nkwekọrịta mmepe obodo banyere otu a ga-esi kesaa uru", "Naanị nkwa ọnụ", "Ego mbinye site n'aka agent"], answer: 1, why: "Kenya's Carbon Markets Regulations, 2024 chọrọ nkwekọrịta mmepe obodo maka ọrụ ndị dị otu a." },
      { objective: "O6", q: "Kedu nke kwesịrị ịnọ n'atụmatụ ịnagide ihu igwe otu peeji?", options: ["Ihe egwu kacha elu, ntinye ego e gụtara ego ha, otu a ga-esi kwụọ ụgwọ, omume na-echekwa ego, iwu carbon na ụbọchị nleghachi anya", "Naanị aha ugbo ahụ", "PIN mobile money gị", "Ndepụta ụbọchị mmiri ozuzo niile n'afọ gara aga"], answer: 0, why: "Akụkụ isii ndị ahụ na-eme atụmatụ zuru ezu, nke bara uru." },
      { objective: "O6", q: "Kedu otu ngwa enyemaka AI dị n'ekwentị nwere ike isi nyere aka n'atụmatụ gị?", options: ["O nwere ike ịchepụta ọnụ ahịa gị", "O kwesịrị idebe PIN ụlọ akụ gị", "O nwere ike ịhazi ndetu gị ka ọ bụrụ tebụl ma gosi ihe fọdụrụ", "Ọ na-abịanye aka n'akwụkwọ ego mbinye maka gị"], answer: 2, why: "AI nwere ike ịhazi ihe ma jụọ ajụjụ, mana nọmba ndị ahụ na-esi na ndekọ gị." },
      { objective: "O6", q: "Atụmatụ gị na-egosi na ị gaghị enwe ike ịkwụghachi ego mbinye ma ọkọchị bịa. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Zoo ya onye na-agbazinye ego", "Gbazite ego ọzọ", "Gbanwee atụmatụ ahụ: obere ego mbinye, nchekwa ego, azụmahịa nke abụọ ma ọ bụ inshọransị"], answer: 3, why: "Ahịrị afọ ọjọọ dị ebe ahụ ka ị gbanwee atụmatụ tupu nsogbu abịa, ọ bụghị mgbe o mechara." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ihe egwu ihu igwe n'ego", objective: "O1", notYet: "E depụtara ihe egwu n'enweghị ohere ime ma ọ bụ ego ha ga-efu, ma ọ bụ ha erughị atọ.", meets: "Ihe egwu atọ, nke ọ bụla nwere ohere ime na ego a tụrụ atụ n'ego obodo.", exceeds: "Na-egosikwa mmetụta azụmahịa (ego mbinye, ndị na-azụ ahịa, ndị ọrụ) na ebe ntụle ndị ahụ si." },
      { name: "Ntinye ego e gụtara ego ha", objective: "O2", notYet: "A kpọrọ aha ntinye ego mana a gụtaghị ego ha.", meets: "Ntinye ego abụọ ma ọ bụ atọ nwere ego niile ha ga-efu, uru n'ozuzu kwa afọ na oge ịkwụghachi.", exceeds: "Na-eji ezi ọnụ ahịa obodo ma na-akọwa ihe mere e ji họrọ nke a ga-ebu ụzọ malite." },
      { name: "Ego na nlele onye na-agbazinye ego", objective: "O3", notYet: "Enweghị atụmatụ ịkwụ ụgwọ, ma ọ bụ onye na-agbazinye ego a na-eleleghị.", meets: "Na-ekwu otu a ga-esi kwụọ ụgwọ ma na-edepụta ajụjụ banyere ego niile ọ ga-efu, ụbọchị ịkwụghachi, ọnọdụ na ikike.", exceeds: "Atụnyerela nhọrọ ego abụọ ma lelee onye na-agbazinye ego na ndepụta onye na-achịkwa ya." },
      { name: "Omume na-echekwa ego", objective: "O4", notYet: "Enweghị omume mbelata, ma ọ bụ otu na-egosighị ego ọ na-echekwa.", meets: "Omume abụọ na-ebelata anwụrụ gas, nke ọ bụla nwere ihe ntinye ma ọ bụ ego ọ na-echekwa.", exceeds: "Na-agụnye oge ịkwụghachi maka omume ọ bụla chọrọ mmefu, dị ka biodigester." },
      { name: "Iwu onyinye carbon", objective: "O5", notYet: "Enweghị iwu, ma ọ bụ ga-abịanye aka ma ọ bụ kwụọ ego n'ụbọchị ahụ.", meets: "Opekata mpe nlele anọ: ndekọ, ụgwọ na òkè, ikike n'ala na osisi, enweghị ego ịbanye, ndụmọdụ tupu ịbịanye aka.", exceeds: "Na-akpọ aha iwu mba ma ọ bụ ọfịs a ga-elele, dị ka Kenya's Carbon Markets Regulations." },
      { name: "Atụmatụ otu peeji zuru ezu", objective: "O6", notYet: "Akụkụ ụfọdụ adịghị ma ọ bụ enweghị ụbọchị nleghachi anya.", meets: "Akụkụ isii niile, ahịrị cash flow afọ ọjọọ na ụbọchị nleghachi anya n'otu peeji.", exceeds: "Onye otu, onye ọrụ extension ma ọ bụ onye ndụmọdụ agụọla ya, e melitekwara ya site n'ajụjụ ha." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere opekata mpe otu ntinye ego mmegharị e gụtara ego ya n'ime oge ọrụ ugbo na-abịa (nnyocha nsochi)",
      "Ndị na-amụ ihe ma ọ bụ otu ndị rịọrọ ego site n'atụmatụ e dere ede na ajụjụ maka onye na-agbazinye ego",
      "Aghụghọ carbon ma ọ bụ ego a kọrọ na e zeere, na obere nkwekọrịta a bịanyere aka n'enweghị ndụmọdụ (akụkọ extension ma ọ bụ cooperative)",
      "Mfu ego n'oge ọjọọ na-abịa e tụnyere ya na oge ọjọọ gara aga (ndị na-amụ ihe kọrọ ya n'onwe ha, site n'azụmahịa)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị mfe (ma ọ bụ igwe mgbakọ ekwentị)",
      "Ndekọ ugbo gị, ma ọ bụ ugbo ọmụmaatụ site n'ọrụ ikpeazụ",
      "Ọnụ ahịa obodo maka mkpụrụ, tank, ihe ntinye na mmanụ ọkụ (site n'aka ndị na-ere ngwa ugbo ma ọ bụ cooperative)",
      "Ekwentị maka ịchọ ndị na-agbazinye ego na ndekọ (ọ bụghị iwu)",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Ọ kacha mma iji otu ndị ọrụ ugbo, cooperative ma ọ bụ Farmer Business School mee ya: mee Nkuzi 1 na 2 site n'ezi ndekọ nke ndị otu abụọ ma ọ bụ atọ.",
      "Nakọta ezi ọnụ ahịa obodo tupu nnọkọ; egosila ọnụ ahịa ọmụmaatụ dị ka eziokwu mgbe ọ bụla.",
      "Kpọọ onye ọrụ ego mbinye site n'ụlọ akụ, ụlọ akụ microfinance ma ọ bụ SACCO nwere ikike ka ọ zaa ajụjụ Nkuzi 3, ma lelee ikike ya n'ihu otu ahụ.",
      "Maka Nkuzi 5, bute ọmụmaatụ nkwekọrịta ma ọ bụ onyinye carbon (e wepụrụ aha) ma dee ihe ịdọ aka na ntị ọnụ. Akwadola ọrụ carbon ọ bụla.",
      "Enyela ndụmọdụ itinye ego; chetara ndị na-amụ ihe ka ha gụchaa nkwekọrịta ma gwa onye ndụmọdụ ha tụkwasịrị obi okwu.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

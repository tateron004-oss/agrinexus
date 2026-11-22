"use strict";

// Koach Learn course (Igbo translation of shared/forklift-operator.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ a na-akwado onye na-amụ ihe maka ọzụzụ onye were ya n'ọrụ; ọ naghị enye asambodo (OSHA 29 CFR 1910.178(l)).

const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (the federal forklift rule)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const OSHA_ETOOL = { name: "OSHA eTool: Powered Industrial Trucks (Forklift)", url: "https://www.osha.gov/etools/powered-industrial-trucks" };
const OSHA_TYPES = { name: "OSHA eTool: Forklift types (Classes I to VII)", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/types" };
const OSHA_PARTS = { name: "OSHA eTool: Forklift parts", url: "https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts" };
const OSHA_PREOP = { name: "OSHA eTool: Pre-operation inspection", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/pre-operation" };
const OSHA_LOAD = { name: "OSHA eTool: Load handling", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/load-handling" };
const OSHA_TRAVEL = { name: "OSHA eTool: Traveling and maneuvering", url: "https://www.osha.gov/etools/powered-industrial-trucks/operating-forklift/traveling-maneuvering" };
const OSHA_DOCKS = { name: "OSHA eTool: Loading docks", url: "https://www.osha.gov/etools/powered-industrial-trucks/workplace/loading-docks" };
const OSHA_TRAINING = { name: "OSHA eTool: Operator training", url: "https://www.osha.gov/etools/powered-industrial-trucks/training" };
const AGE_RULE = { name: "29 CFR 570.58: No forklift operation by workers under 18 (U.S. Department of Labor rule, Cornell LII copy)", url: "https://www.law.cornell.edu/cfr/text/29/570.58" };

module.exports = {
  id: "forklift-operator-ig",
  lang: "ig",
  translationOf: "forklift-operator",
  category: "Workforce Development",
  name: "Mmalite Ọrụ Onye Na-anya Forklift",
  skills: "Ịmata ụdị forklift na akụkụ ya, Ime nlele tupu ọrụ amalite, Ịgụ data plate, Iji ibu n'enweghị nsogbu, Ịnya ụgbọ n'enweghị nsogbu n'akụkụ ndị mmadụ na dock",
  outcome: "ịkpọ aha ụdị forklift na akụkụ ya ndị bụ isi, ime nlele zuru oke tupu ọrụ amalite ma wepụ ụgbọ na-adịghị mma n'ọrụ, iji data plate kpebie ma ibu dị mma iweli, ịhọrọ ihe kacha enweghị nsogbu mgbe ị na-anya ụgbọ, na-atụkọ ibu, na dock na mgbe ị na-adọba ya, na ime atụmatụ ka onye were gị n'ọrụ zụọ gị ma nyochaa gị.",
  about: [
    "Ndị na-anya forklift na-ebugharị ngwaahịa n'ụlọ nkwakọba ngwaahịa (warehouse), ụlọ ahịa, ụlọ ọrụ mmepụta, ugbo na ebe a na-ewu ụlọ. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha lara ezumike na onye ọ bụla chọrọ ịmalite ọrụ a.",
    "Ị ga-amụta ụdị forklift na akụkụ ya, nlele a na-eme kwa ụbọchị, otu esi agụ data plate ma tụọ ibu, iwu maka ịnya ụgbọ n'akụkụ ndị mmadụ, n'ebe dị nrịgo (ramp) na n'ebe a na-ebunye ibu (loading dock), na otu esi adọba ya n'enweghị nsogbu.",
    "Ihe dị mkpa: ihe ọmụmụ a na-akwado gị, ma ọ naghị enye gị asambodo. N'iwu forklift nke OSHA (29 CFR 1910.178), onye were gị n'ọrụ ga-azụ gị, lee ka ị na-anya ụgbọ ha n'ebe ọrụ ha, ma nyochaa gị tupu ị nyawa naanị gị. Ihe ọmụmụ n'ịntanetị ma ọ bụ kaadị naanị ezughị. Ị ga-erurịrị afọ 18. Anyala forklift iji mụọ ya ruo mgbe ị nọ n'ọzụzụ nwere onye nkuzi na-elekọta gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu njikere forklift: ndepụta nlele tupu ọrụ amalite maka otu ụdị forklift, mkpebi atọ gbasara ibu site na data plate omume, ya na ihe kpatara nke ọ bụla, kaadị akpa nwere usoro ịdọba ụgbọ na nke dock, na atụmatụ ka onye were gị n'ọrụ zụọ gị ma nyochaa gị, ya na otu ahịrị eziokwu maka résumé gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-achọ ọrụ n'ụlọ nkwakọba ngwaahịa, ebe nkesa ngwaahịa, ụlọ nchekwa ngwaahịa ụlọ ahịa ma ọ bụ ụlọ ọrụ mmepụta: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha lara ezumike na ndị ntorobịa dị afọ 18 na karịa. Ụfọdụ anyalarị forklift n'enweghị ọzụzụ ọ bụla; ọtụtụ anyabeghị ya.",
    startingPoint: "Ha nwere ike ịnya ụgbọ ala ma ọ bụ ịgba ịnyịnya ígwè ma gbasoo ndepụta. Ha amachaghị akụkụ forklift, otu o si eguzosi ike, ibu ọ nwere ike iweli ma ọ bụ iwu OSHA. Ụfọdụ kwenyere na kaadị n'ịntanetị naanị na-eme ka e nye ha asambodo.",
    gap: "Forklift na-akpata ọtụtụ mmerụ ahụ siri ike n'ụlọ nkwakọba ngwaahịa, dị ka ụgbọ ịda, ịkụ mmadụ na ịda site na dock. Ndị were mmadụ n'ọrụ ga-azụ ma nyochaa onye ọ bụla na-anya ya, ha na-ewekwa ndị maraworị nlele, iwu ibu na omume nchekwa. Ndị na-amụ ihe chọrọ ihe ọmụma ahụ, na eziokwu banyere otu asambodo si arụ ọrụ, ka ha dị njikere maka ọzụzụ onye were ha n'ọrụ ma ghara ịkwụ ụgwọ maka \"asambodo ozugbo\" na-aghọ aghụghọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Ọ dịghị ịnya forklift n'ihe ọmụmụ a: omume aka na-eme naanị n'ọzụzụ onye were gị n'ọrụ, nwere onye na-elekọta",
      "Ndị na-amụ ihe ga-erurịrị afọ 18 iji nya forklift n'ọrụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ maka peeji OSHA; akwụkwọ maka ndepụta",
      "Iwu ndị a bụ nke OSHA gọọmentị etiti; ụfọdụ steeti nwere atụmatụ OSHA nke ha, nke iwu ya siri ike otu ahụ ma ọ bụ karịa"
    ],
    prerequisites: "Ọ dịghị. \"Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)\" bụ ihe ọmụmụ ọzọ nwere ike inyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị foto ma ọ bụ nkọwa forklift", action: "ịmata ụdị forklift ahụ ma gosi akụkụ ya ndị bụ isi", standard: "na-akpọ aha opekata mpe akụkụ 6 na ọrụ nke ọ bụla" },
    { id: "O2", condition: "Site n'iji ndepụta nlele", action: "ime nlele tupu ọrụ amalite ma kpebie ma e nwere ike iji ụgbọ ahụ", standard: "na-elele ihe ọ bụla dị na ndepụta ma na-ewepụ ụgbọ ọ bụla na-adịghị mma n'ọrụ" },
    { id: "O3", condition: "Mgbe e nyere gị data plate na nkọwa ibu", action: "ikpebi ma ibu ahụ dị mma iweli ma kọwaa ihe kpatara ya", standard: "na-enweta opekata mpe mkpebi ibu 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ọnọdụ ịnya ụgbọ, ịtụkọ ibu, dock ma ọ bụ ịdọba ụgbọ", action: "ịhọrọ ihe kacha enweghị nsogbu dị ka iwu OSHA si kwuo", standard: "na-enweta opekata mpe ọnọdụ 4 n'ime 5 ziri ezi" },
    { id: "O5", condition: "Site n'iji ihe OSHA chọrọ n'aka ndị were mmadụ n'ọrụ", action: "ide atụmatụ ka a zụọ gị ma nyochaa gị, na otu ahịrị eziokwu maka résumé", standard: "nke na-akpọ aha ọrụ onye were gị n'ọrụ ma na-adịghị ekwu na i nwere asambodo i nweghị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, ụgbọ ahụ na nlele kwa ụbọchị",
      lessons: [
        {
          title: "Ọrụ forklift na iwu ọzụzụ OSHA",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọwaa onye na-azụ ma na-enye onye na-anya forklift asambodo, na mgbe ọ ga-amụgharị ihe.",
          text: [
            "OSHA na-akpọ forklift \"powered industrial trucks\". Iwu ya, 29 CFR 1910.178, kwuru na onye were mmadụ n'ọrụ ga-ahụ na onye ọ bụla na-anya ya maara ọrụ ahụ nke ọma. Nke a pụtara ọzụzụ (klaasị na omume aka n'okpuru onye nkuzi tozuru etozu) na nyocha gị mgbe ị na-anya ụgbọ n'ezi ebe ọrụ ahụ.",
            "Mgbe ahụ, onye were gị n'ọrụ na-ekwenye na a zụrụ gị ma nyochaa gị. Ndekọ ahụ na-egosi aha gị, ụbọchị ọzụzụ na nyocha, na ndị mere ha. A ga-emegharị nyocha gị opekata mpe otu ugboro n'afọ atọ ọ bụla.",
            "Ị ga-enwetakwa ọzụzụ ọzọ (refresher) ma ọ bụrụ na a hụ gị ka ị na-anya ụgbọ n'ụzọ dị ize ndụ, i nwee ihe mberede ma ọ bụ ihe fọrọ nke nta (near miss), nyocha gị adịghị mma, e bufee gị n'ụdị ụgbọ ọzọ, ma ọ bụ ebe ọrụ ahụ gbanwee n'ụzọ metụtara nchekwa.",
            "Iwu ọrụ gọọmentị etiti anaghị ekwe ka onye ọ bụla dị n'okpuru afọ 18 nya forklift n'ọrụ. Ihe ọmụmụ n'ịntanetị ma ọ bụ kaadị akpa naanị anaghị eme ka i nwee asambodo: naanị ọzụzụ na nyocha onye were gị n'ọrụ na-eme ya."
          ],
          words: [["OSHA", "Occupational Safety and Health Administration, ụlọ ọrụ gọọmentị US na-ahụ maka nchekwa n'ebe ọrụ."], ["Powered industrial truck", "aha OSHA na-akpọ forklift na igwe ndị yiri ya na-ebuli ma na-ebugharị ibu."], ["Nyocha (evaluation)", "onye tozuru etozu na-ele gị anya ka ị na-anya ụgbọ n'ebe ọrụ iji mata ma ị na-anya ya n'enweghị nsogbu."], ["Ọzụzụ ọzọ (refresher training)", "ọzụzụ ọzọ iji dozie nsogbu ma ọ bụ kwadoo gị maka ụgbọ ọhụrụ ma ọ bụ ebe ọrụ ọhụrụ."], ["Near miss", "ihe mere nke na-emerụghị onye ọ bụla ahụ, mana o nwere ike imerụ mmadụ."]],
          slides: [
            { title: "Onye na-enye gị asambodo?", bullets: ["Onye were gị n'ọrụ, ọ bụghị weebụsaịtị", "Ọzụzụ: klaasị na omume aka n'okpuru onye nkuzi", "Nyocha: ị na-anya ụgbọ n'ezi ebe ọrụ"] },
            { title: "Ndekọ ahụ", bullets: ["Aha gị", "Ụbọchị ọzụzụ na nyocha", "Onye zụrụ gị ma nyochaa gị"] },
            { title: "Mgbe ị ga-amụgharị ihe", bullets: ["Opekata mpe n'afọ atọ ọ bụla: nyocha ọhụrụ", "Mgbe ihe mberede, near miss ma ọ bụ ịnya ụgbọ n'ụzọ dị ize ndụ", "Ụdị ụgbọ ọhụrụ ma ọ bụ ebe ọrụ gbanwere"] },
            { title: "Tupu ị malite", bullets: ["Ị ga-erurịrị afọ 18", "Ọ dịghị omume ịnya ụgbọ n'enweghị onye nkuzi"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING, AGE_RULE],
          tryIt: "N'akwụkwọ, dee ahịrịokwu atọ n'okwu nke gị: onye na-azụ ma na-enyocha onye na-anya forklift, ugboro ole a na-emegharị nyocha ahụ, na ihe abụọ mere nke pụtara na ị chọrọ ọzụzụ ọzọ.",
          youCanNow: "ịkọwa onye na-azụ ma na-enye onye na-anya forklift asambodo, ugboro ole a na-enyocha gị, na mgbe ị chọrọ ọzụzụ ọzọ.",
          quickCheck: [
            { objective: "O5", q: "Onye ga-azụ ma nyochaa gị tupu ị nya forklift n'ọrụ?", options: ["Weebụsaịtị ọ bụla na-ere kaadị", "Onye were gị n'ọrụ, n'ebe ọrụ gị", "Enyi na-anya forklift", "Ọ dịghị onye"], answer: 1, why: "Iwu OSHA tinyere ọzụzụ na nyocha n'aka onye were gị n'ọrụ, n'ezi ebe ọrụ ahụ." },
            { objective: "O5", q: "Forklift gị kụrụ shelf (rack). Ọ dịghị onye merụrụ ahụ. Gịnị bụ eziokwu?", options: ["Ọ dịghị ihe ga-eme", "Ị tụfuru ọrụ gị ozugbo", "Ị ga-azụ kaadị ọhụrụ n'ịntanetị", "Ọ bụ ihe kpatara ọzụzụ ọzọ"], answer: 3, why: "Ihe mberede ma ọ bụ near miss bụ otu n'ime ihe OSHA kwuru na-akpata ọzụzụ ọzọ." }
          ]
        },
        {
          title: "Ụdị forklift na akụkụ ya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mata ụdị forklift ahụ ma kpọọ aha akụkụ ya ndị bụ isi.",
          text: [
            "OSHA kewara forklift n'otu (class) asaa. Class I: ụgbọ eletrik a na-anọdụ ala anya. Class II: ụgbọ eletrik maka ụzọ dị warara. Class III: ụgbọ eletrik a na-eji aka eduzi, gụnyere pallet jack a na-eje ije n'azụ ya. Class IV na V: ụgbọ nwere injin, nwere taya siri ike maka ala dị ezigbo larịị n'ime ụlọ (IV) ma ọ bụ taya ikuku maka n'èzí (V). Class VI: tractor na-adọkpụ ihe. Class VII: forklift maka ala ọjọọ, n'ebe a na-ewu ụlọ na n'ugbo.",
            "Ọtụtụ forklift counterbalance nwere otu akụkụ ndị bụ isi. Forks na-ebuli ibu. Forks kwụ n'elu carriage, nke na-arịgo ma na-arịda na mast. Load backrest na-egbochi ibu ịdaghachi n'azụ n'ebe ị nọ. Overhead guard na-echebe gị pụọ n'ihe na-ada site n'elu. Counterweight dị n'azụ na-eme ka ibu ahụ ha nhata.",
            "N'oche, i nwere steering, ihe nchịkwa ụzọ (n'ihu na n'azụ), lever iweli na ịtụgharị (tilt), horn, breki na seatbelt. Data plate (a na-akpọkwa ya capacity plate ma ọ bụ nameplate) na-agwa gị ibu ole ụgbọ ahụ nwere ike iweli."
          ],
          words: [["Mast", "osisi ígwè kwụ ọtọ forks na-arịgo ma na-arịda na ya."], ["Carriage", "efere dị na mast na-ejide forks."], ["Load backrest", "ígwè dị n'elu forks na-egbochi ibu ịdaghachi n'ebe onye na-anya ya nọ."], ["Overhead guard", "ígwè dị ka ụlọ n'elu isi na-echebe onye na-anya ya pụọ n'ihe na-ada."], ["Counterweight", "ihe dị arọ nke ukwuu n'azụ ụgbọ ahụ na-eme ka ibu ahụ ha nhata."], ["Data plate", "efere dị n'ụgbọ ahụ na-egosi ụdị ya na ibu ole ọ nwere ike iweli."]],
          slides: [
            { title: "Otu asaa", bullets: ["I, II, III: eletrik (a na-anọdụ, ụzọ warara, nke aka)", "IV, V: ụgbọ injin maka n'ime ụlọ ma ọ bụ n'èzí", "VI: tractor na-adọkpụ ihe; VII: ala ọjọọ"] },
            { title: "Akụkụ na-ebuli ibu", bullets: ["Forks dị na carriage", "Carriage na-agagharị na mast", "Load backrest na-eme ka ibu ghara ịda n'ahụ gị"] },
            { title: "Akụkụ na-echebe gị", bullets: ["Overhead guard n'elu isi gị", "Counterweight n'azụ", "Seatbelt, horn na ọkụ"] },
            { title: "Data plate", bullets: ["Na-egosi ụdị ụgbọ ahụ", "Na-egosi ibu ole ọ nwere ike iweli", "Ọ ga-adịrịrị n'ọnọdụ ya ma a gụọ ya nke ọma"] }
          ],
          sources: [OSHA_TYPES, OSHA_PARTS],
          tryIt: "See foto dị mfe nke forklift a na-anọdụ ala anya, si n'akụkụ (igbe na ahịrị dị mma). Dee aha opekata mpe akụkụ isii: forks, carriage, mast, load backrest, overhead guard, counterweight. N'akụkụ nke ọ bụla, dee otu ahịrị gbasara ọrụ ya.",
          youCanNow: "ikwu otu (class) forklift dị na ya ma kpọọ aha akụkụ ya ndị bụ isi na ọrụ ha.",
          quickCheck: [
            { objective: "O1", q: "Kedu akụkụ na-egbochi ibu ịdaghachi n'ebe onye na-anya ya nọ?", options: ["Load backrest", "Counterweight", "Taya", "Horn"], answer: 0, why: "Load backrest dị n'elu forks ma na-egbochi ibu ịda n'ebe ị nọ." },
            { objective: "O1", q: "Forklift e mere maka ala na-adịghị larịị n'ebe a na-ewu ụlọ dị na otu (class) ole?", options: ["Class I", "Class III", "Class VII", "Class IV"], answer: 2, why: "Class VII bụ forklift maka ala ọjọọ na-adịghị larịị n'èzí." }
          ]
        },
        {
          title: "Nlele tupu ọrụ amalite",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mezue ndepụta nlele tupu ọrụ amalite ma kpebie ma ụgbọ ahụ dị mma iji.",
          text: [
            "OSHA chọrọ ka a lelee forklift ọ bụla tupu e jiri ya, opekata mpe otu ugboro kwa ụbọchị; ọ bụrụ na ụgbọ na-arụ ọrụ ehihie na abalị, mgbe shift ọ bụla gwụrụ. Ọ bụrụ na ihe ọ bụla na-eme ka ụgbọ ahụ dị ize ndụ, a na-ewepụ ya n'ọrụ ruo mgbe a rụziri ya.",
            "Malite mgbe igodo gbanyụrụ. Lelee mmiri ọkụ na mmanụ niile, ma lee ma e nwere ihe na-asọpụta, mgbawa, ma ọ bụ hose na mast chains mebiri emebi (etinyela aka gị n'ime mast mgbe ọ bụla). Lelee taya, forks, load backrest, overhead guard, ma hụ na data plate na akara ịdọ aka na ntị dị n'ọnọdụ ha ma a na-agụ ha nke ọma. Lelee seatbelt.",
            "Ụgbọ eletrik: lelee waya, ihe njikọ na ihe na-ejide batrị. Ụgbọ propane: lelee na e kwụnyere tank nke ọma, na relief valve chere ihu n'elu, na gas anaghị asọpụta.",
            "Mgbe ahụ, mgbe ụgbọ na-agba, nwalee breki, steering, n'ihu na n'azụ, iweli, iwedata, ịtụgharị (tilt), horn, ọkụ na mkpu na-ada mgbe ị na-agba azụ. Ọ bụrụ na ihe adịghị mma: ejila ụgbọ ahụ, kee ya akara (tag) ma ọ bụ kọọ ya, dee ya na ndepụta ma gwa onye isi gị. Naanị ndị a zụrụ azụ ma nye ikike na-arụzi ya."
          ],
          steps: ["Igodo gbanyụrụ: mmanụ, ihe na-asọpụta, hose na chains (lee anya, etinyela aka).", "Taya, forks, load backrest, overhead guard.", "Data plate na akara ịdọ aka na ntị dị ma a na-agụ ha; seatbelt na-arụ ọrụ.", "Igodo gbanyere: breki, steering, n'ihu na n'azụ.", "Iweli, iwedata, tilt, horn, ọkụ, mkpu ịgba azụ.", "Bịanye aka na ndepụta; kọọ ma kee akara (tag) mmebi ọ bụla, ejikwala ụgbọ ahụ."],
          words: [["Nlele tupu ọrụ amalite (pre-shift inspection)", "nlele forklift tupu e jiri ya maka shift ahụ."], ["N'ọrụ adịghị (out of service)", "a gaghị eji ya ruo mgbe a rụziri ya; a na-akakarị ya akara (tag)."], ["Mast chains", "chain ndị na-ebuli carriage na forks n'elu mast."]],
          slides: [
            { title: "Mgbe a ga-elele", bullets: ["Tupu e jiri ya, opekata mpe kwa ụbọchị", "Mgbe shift ọ bụla gwụrụ ma ụgbọ na-arụ ehihie na abalị"] },
            { title: "Igodo gbanyụrụ", bullets: ["Mmanụ, ihe na-asọpụta, hose, chains: lee anya, etinyela aka", "Taya, forks, backrest, overhead guard", "Data plate, akara ịdọ aka na ntị, seatbelt"] },
            { title: "Igodo gbanyere", bullets: ["Breki, steering, n'ihu na n'azụ", "Iweli, iwedata, tilt", "Horn, ọkụ, mkpu ịgba azụ"] },
            { title: "Ịhụla nsogbu?", bullets: ["Ejila ụgbọ ahụ", "Kee ya akara, dee ya, gwa onye isi gị", "Naanị ndị nwere ikike na-arụzi ya"] }
          ],
          sources: [OSHA_PREOP, OSHA_178],
          tryIt: "Dee ndepụta nlele nke gị nwere kọlụm abụọ, \"Igodo gbanyụrụ\" na \"Igodo gbanyere\", site n'iji peeji OSHA gbasara nlele tupu ọrụ. Wee gụọ okwu omume a: horn anaghị arụ ọrụ, otu fork nwekwara mgbawa. Dee ihe ị ga-eme, nzọụkwụ n'otu n'otu.",
          youCanNow: "imezue ndepụta nlele tupu ọrụ amalite ma wepụ ụgbọ na-adịghị mma n'ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Ugboro ole ka a ga-elele forklift tupu e jiri ya?", options: ["Otu ugboro n'ọnwa", "Otu ugboro n'afọ", "Naanị mgbe ọ mebiri", "Opekata mpe kwa ụbọchị, tupu e jiri ya"], answer: 3, why: "OSHA chọrọ nlele tupu e jiri ya, opekata mpe kwa ụbọchị, na mgbe shift ọ bụla gwụrụ ma ọ na-arụ ehihie na abalị." },
            { objective: "O2", q: "Mgbe ị na-elele, breki adịghị ike. Gịnị ka ị ga-eme?", options: ["Jiri ya nwayọọ taa", "Kọọ ya, kee ya akara n'ọrụ adịghị, ejikwala ya", "Rụzie breki ahụ n'onwe gị", "Gwa onye ọrụ ibe gị ka o jiri ya"], answer: 1, why: "A na-ewepụ ụgbọ na-adịghị mma n'ọrụ ma kọọ ya; naanị ndị nwere ikike na-arụzi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, ụgbọ ahụ na nlele kwa ụbọchị",
        questions: [
          { objective: "O5", q: "I mere ihe ọmụmụ forklift n'ịntanetị ma nweta kaadị. Ị nwere ike ịnya forklift ọ bụla ugbu a n'ọrụ ọhụrụ?", options: ["Mba; onye were gị n'ọrụ ga-azụ ma nyochaa gị n'ụgbọ ya na n'ebe ọrụ ya", "Ee, kaadị ahụ bụ naanị ihe ị chọrọ", "Ee, ma ọ bụrụ na e kpuchiri kaadị ahụ na laminate", "Naanị na ngwụcha izu"], answer: 0, why: "OSHA chọrọ ka onye were mmadụ n'ọrụ zụọ ma nyochaa onye ọ bụla na-anya ya n'ebe ọrụ." },
          { objective: "O5", q: "Opekata mpe, ugboro ole ka a ga-emegharị nyocha onye na-anya forklift?", options: ["Kwa ọnwa", "N'afọ iri ọ bụla", "Otu ugboro n'afọ atọ ọ bụla", "Ọ dịghị mgbe"], answer: 2, why: "OSHA kwuru na a na-enyocha onye ọ bụla na-anya ya opekata mpe otu ugboro n'afọ atọ ọ bụla." },
          { objective: "O1", q: "Gịnị ka counterweight na-eme?", options: ["Ọ na-ebuli forks", "Ọ na-ejide horn", "Ọ na-echebe isi gị", "Ọ na-eme ka ibu dị n'ihu ha nhata"], answer: 3, why: "Counterweight dị arọ n'azụ na-eme ka ibu dị na forks ha nhata." },
          { objective: "O1", q: "Ebee ka ị ga-ahụ ibu ole forklift nwere ike iweli?", options: ["Na taya", "Na data plate", "Na horn", "N'oche"], answer: 1, why: "Data plate na-egosi ibu ole ụgbọ ahụ nwere ike iweli." },
          { objective: "O2", q: "Kedu nlele a na-eme mgbe ụgbọ na-agba?", options: ["Ịnwale breki, steering, iweli na tilt", "Ilele taya", "Ịgụ akara ịdọ aka na ntị", "Ilele mmanụ"], answer: 0, why: "Breki, steering, iweli na tilt bụ nlele ọrụ a na-eme mgbe ụgbọ na-agba." }
        ]
      }
    },
    {
      name: "Isi 2: Ibu, ịnya ụgbọ na inweta ọrụ",
      lessons: [
        {
          title: "Ịgụ data plate na ịtụ ibu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Jiri data plate na load center kpebie ma ibu dị mma iweli.",
          text: [
            "Data plate na-egosi ibu kacha ụgbọ ahụ nwere ike iweli na otu load center. Load center bụ ogologo site n'ihu forks ruo n'etiti (center of gravity) ibu ahụ. A na-ahazi ọtụtụ forklift maka load center nke inch 24. Ọ bụrụ na etiti ibu ahụ dị anya karịa nke ahụ, ma ọ bụ na e tinyere ihe mgbakwunye (attachment) n'ụgbọ ahụ, ibu ọ nwere ike iweli n'enweghị nsogbu na-ebelata: lelee plate ahụ ma jụọ onye isi gị.",
            "Forklift na-eguzo dị ka seesaw n'elu taya ihu ya. Ibu dị na forks nọ n'otu akụkụ; ụgbọ na counterweight nọ n'akụkụ nke ọzọ. Ibu dị arọ karịa, ibu dị anya n'ihu, ma ọ bụ ibu e buliri elu ma tụgharịa n'ihu nwere ike ime ka ụgbọ ahụ daa n'ihu. Ịtụgharị ngwa ngwa nwere ike ime ka ọ daa n'akụkụ.",
            "Buli naanị ibu kwụsiri ike nke dị n'ime ike ụgbọ ahụ. Tinye ibu ahụ n'etiti forks, ma tinye forks n'okpuru ya opekata mpe ụzọ abụọ n'ime ụzọ atọ nke ogologo ibu ahụ. Buli ya ntakịrị, tụgharịa mast azụ ntakịrị ka ibu ahụ dabere na backrest, ma debe ya n'ala."
          ],
          steps: ["Chọpụta ịdị arọ ibu ahụ (akara, akwụkwọ ma ọ bụ jụọ).", "Gụọ data plate: ike iweli (capacity) na load center.", "Etiti ibu ahụ ọ dị n'ime load center? Ịdị arọ ya ọ dị n'okpuru capacity?", "Ibu ahụ ọ kwụsiri ike, e kechiri ya, o mebighị?", "Ọ bụrụ ee: tinye ya n'etiti, forks opekata mpe ụzọ abụọ n'ime atọ n'okpuru, buli ntakịrị, tụgharịa azụ. Ọ bụrụ mba ma ọ bụ obi abụọ: kwụsị ma jụọ."],
          words: [["Capacity", "ibu kacha forklift nwere ike iweli n'enweghị nsogbu, nke e gosiri na data plate."], ["Load center", "ogologo site n'ihu forks ruo n'etiti ibu ahụ."], ["Center of gravity", "ebe ịdị arọ ihe na-aha nhata."], ["Tipover", "mgbe forklift dara n'ihu ma ọ bụ n'akụkụ ya."]],
          slides: [
            { title: "Data plate na-agwa gị", bullets: ["Capacity: ibu kacha ụgbọ ahụ nwere ike iweli", "Na load center, ọtụtụ mgbe inch 24", "Ibu dị anya karịa = ọ na-eweli ntakịrị"] },
            { title: "Dị ka seesaw", bullets: ["Taya ihu bụ ebe ọ na-atụgharị", "Ibu n'otu akụkụ, counterweight n'akụkụ nke ọzọ", "Ọ dị arọ karịa ma ọ bụ dị anya karịa: ọ na-ada"] },
            { title: "Buli ya nke ọma", bullets: ["Ibu kwụsiri ike, n'ime capacity", "N'etiti, forks ụzọ abụọ n'ime atọ n'okpuru", "Buli ntakịrị, tụgharịa azụ, debe ya n'ala"] },
            { title: "Obi abụọ? Kwụsị ma jụọ", bullets: ["Ịdị arọ amaghị", "Ibu mebiri emebi ma ọ bụ na-adabe n'otu akụkụ", "Attachment na-agbanwe capacity"] }
          ],
          sources: [OSHA_LOAD, OSHA_178],
          tryIt: "Naanị omume, ọnụọgụ e chepụtara. Plate otu ụgbọ kwuru 4,000 lb na load center nke inch 24. Kpebie ee ma ọ bụ mba, ya na ihe kpatara ya: (1) pallet 3,200 lb, n'etiti ma e kechiri ya; (2) igbe 4,600 lb; (3) ibu 2,500 lb na-adabe n'otu akụkụ ma dọwaa; (4) ibu 3,000 lb nke etiti ya dị anya karịa inch 24. Dee ihe ị ga-eme maka nke ọ bụla.",
          youCanNow: "ịgụ data plate ma kpebie ma ibu dị mma iweli, ma kwuo ihe kpatara ya.",
          quickCheck: [
            { objective: "O3", q: "Plate kwuru 5,000 lb na inch 24. Ibu ahụ dị 5,800 lb. Gịnị ka ị ga-eme?", options: ["Buli ya nwayọọ", "Tinye mmadụ n'azụ dị ka ịdị arọ mgbakwunye", "Ebulila ya; gwa onye isi gị", "Buli ya elu ka ọ ha nhata"], answer: 2, why: "Ebulila ihe karịrị capacity e dere ede; a dịghị ekwe ka mmadụ nọkwasị n'ụgbọ mgbe ọ bụla." },
            { objective: "O3", q: "Forks kwesịrị ịbanye n'okpuru ibu ruo ole?", options: ["Naanị ọnụ ha", "Opekata mpe ụzọ abụọ n'ime ụzọ atọ nke ogologo ibu ahụ", "Gafee ruo na pallet ọzọ dị n'azụ ya", "Ọ dịghị mkpa"], answer: 1, why: "Ndụmọdụ OSHA bụ opekata mpe ụzọ abụọ n'ime atọ nke ogologo ibu ahụ, n'akụghị ibu ndị dị n'azụ ya." }
          ]
        },
        {
          title: "Ịnya ụgbọ, dock na ịdọba ụgbọ n'enweghị nsogbu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Họrọ ihe kacha enweghị nsogbu mgbe ị na-anya ụgbọ, na dock na mgbe ị na-adọba ya.",
          text: [
            "Jiri ibu dị n'ala ma tụgharịa azụ gaa ije, ọ bụghị mgbe e buliri ya elu ma ọ bụ tụgharịa ya n'ihu. Nya ụgbọ n'ọsọ ga-ekwe ka ị kwụsị n'enweghị nsogbu, ma belata ọsọ n'ala mmiri, n'ebe ị na-atụgharị na n'ebe ụzọ abụọ zutere (cross aisle). Kụọ horn n'ebe ụzọ zutere na n'akụkụ ebe ị na-ahụghị ihe. Lee ebe ị na-aga. Ọ bụrụ na ibu ahụ egbochie anya gị, nya ụgbọ azụ. Nọrọ ihe dị ka ogologo ụgbọ atọ n'azụ ụgbọ ọzọ.",
            "Ndị mmadụ: ọ dịghị onye na-eguzo ma ọ bụ na-agafe n'okpuru forks e buliri elu, ma ibu dị na ya ma ọ bụ na ọ dịghị. Ọ dịghị onye na-anọkwasị n'ụgbọ ma ọ bụrụ na ụgbọ ahụ enweghị ebe dị mma maka ha ma a nyeghị ha ikike. Anyala ụgbọ gakwuru onye guzo n'ihu mgbidi ma ọ bụ shelf.",
            "Ramp: jee nwayọọ. Mgbe ibu dị, debe ibu ahụ n'akụkụ elu: nya n'ihu mgbe ị na-arịgo, nya azụ mgbe ị na-arịda. Atụgharịla mgbe ọ bụla n'elu ramp. Dock: tupu ị banye n'ime trailer, a ga-adọrịrị breki trailer ahụ ma tinye wheel chock n'azụ taya ya; lelee ala trailer ahụ ma ọ nwere ebe gbajiri agbaji ma ọ bụ ebe na-adịghị ike; nọrọ anya n'ọnụ dock.",
            "Ịdọba ụgbọ: ọ bụrụ na ị hapụ ụgbọ ahụ (ma ọ bụ ị nọ ụkwụ 25 ma ọ bụ karịa n'ebe ọ nọ, ma ọ bụ na ị naghị ahụ ya), wedata forks ruo n'ala, tinye ihe nchịkwa na neutral, gbanyụọ ya ma dọọ breki; gbochie taya ya n'ebe dị nrịgo. Ọ bụrụ na ụgbọ a na-anọdụ ala anya amalite ịda: awụpụla. Nọrọ n'oche ya na seatbelt gị, jide steering ike, kwụsie ụkwụ gị ike ma dabere n'akụkụ na-abụghị ebe ọ na-ada."
          ],
          steps: ["Ibu n'ala, tụgharịa azụ; horn n'ebe ụzọ zutere; lee ebe ị na-aga.", "Ibu egbochie anya gị: nya ụgbọ azụ.", "Ramp: ibu n'akụkụ elu, atụgharịla n'elu ramp.", "Dock: breki trailer adọrọ, wheel chock, ala e lelere.", "Ịdọba: forks n'ala, neutral, gbanyụọ, dọọ breki.", "Ọ na-ada: nọrọ n'ime, seatbelt, jide ike, dabere n'akụkụ ọzọ."],
          words: [["Cross aisle", "ebe ụzọ abụọ zutere, dị ka ebe ụzọ ụgbọ ala zutere."], ["Wheel chock", "ihe dị ka nkpọchi a na-etinye n'akụkụ taya ka trailer ghara ịgagharị."], ["Ọnụ dock (dock edge)", "ọnụ loading dock ebe ala na-akwụsị ma dawa."], ["Hapụrụ naanị ya (unattended)", "ị nọ ụkwụ 25 ma ọ bụ karịa n'ebe ụgbọ ahụ nọ, ma ọ bụ na ị naghị ahụ ya."]],
          slides: [
            { title: "Ịnya ụgbọ", bullets: ["Ibu n'ala ma tụgharịa azụ", "Horn n'ebe ụzọ zutere na ebe ị na-ahụghị ihe", "Ị naghị ahụ ihe n'ihi ibu? Nya ụgbọ azụ"] },
            { title: "Ndị mmadụ", bullets: ["Ọ dịghị onye n'okpuru forks e buliri elu", "Ọ dịghị onye na-anọkwasị n'ụgbọ", "Akpachila mmadụ na mgbidi ma ọ bụ shelf"] },
            { title: "Ramp na dock", bullets: ["Ibu n'akụkụ elu; atụgharịla n'elu ramp", "Breki trailer adọrọ, wheel chock dị", "Lelee ala trailer; nọrọ anya n'ọnụ dock"] },
            { title: "Ịdọba na ịda", bullets: ["Forks n'ala, neutral, gbanyụọ, dọọ breki", "Ọ na-ada: nọrọ n'ime, seatbelt, dabere n'akụkụ ọzọ"] }
          ],
          sources: [OSHA_TRAVEL, OSHA_DOCKS, OSHA_178],
          tryIt: "Mee kaadị akpa nwere ndepụta abụọ: \"Tupu m banye n'ime trailer\" na \"Mgbe m na-adọba ụgbọ\". Wee zaa okwu omume a n'ide ihe: ị na-ebu ibu dị ogologo nke na-egbochi anya gị, ị ga-arịdakwa ramp. Gịnị ka ị ga-eme?",
          youCanNow: "ịhọrọ ihe kacha enweghị nsogbu mgbe ị na-anya ụgbọ, na dock, n'elu ramp, mgbe ị na-adọba ya na ma ụgbọ amalite ịda.",
          quickCheck: [
            { objective: "O4", q: "Onye ọrụ ibe gị chọrọ iguzo n'okpuru forks gị e buliri elu iji dozie akara. Gịnị ka ị ga-ekwu?", options: ["\"Mee ya, mee ngwa ngwa.\"", "\"Naanị ma ọ bụrụ na ọ dịghị ihe dị na forks.\"", "\"Naanị ma ọ bụrụ na i yi okpu ígwè.\"", "\"Mba. Ọ dịghị onye na-aga n'okpuru forks e buliri elu. Aga m ebu ụzọ wedata ha.\""], answer: 3, why: "OSHA amachibidoro onye ọ bụla iguzo ma ọ bụ ịgafe n'okpuru forks e buliri elu, ma ibu dị ma ọ bụ na ọ dịghị." },
            { objective: "O4", q: "Forklift gị a na-anọdụ ala anya amalite ịda. Gịnị ka ị ga-eme?", options: ["Nọrọ n'oche, seatbelt gị, jide steering ma dabere n'akụkụ ọzọ", "Wụpụ ngwa ngwa", "Jide mast", "Buli forks"], answer: 0, why: "N'ụgbọ a na-anọdụ ala anya, ịnọ n'ime ya na seatbelt bụ otu ị ga-esi zere ka ọ ghara ịpịa gị." }
          ]
        },
        {
          title: "Inweta ọzụzụ na ọrụ dị ka onye na-anya forklift",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee atụmatụ ka a zụọ gị ma nyochaa gị, na otu ahịrị eziokwu maka résumé.",
          text: [
            "Ọtụtụ ndị nwe ụlọ nkwakọba ngwaahịa, ebe nkesa ngwaahịa na ụlọ ahịa na-ewe mmadụ maka ọrụ warehouse nkịtị, wee zụọ ha n'ịnya forklift. Ụfọdụ ụlọ ọrụ na-enye ọrụ (staffing agency), workforce center na community college na-emekwa ọzụzụ forklift nwere omume aka. Jụọ ma ọ gụnyere ịnya ụgbọ n'okpuru onye nkuzi na nyocha omume.",
            "Cheta: ebe ọ bụla a zụrụ gị, onye ọ bụla ọhụrụ were gị n'ọrụ ga-ahụ na a zụrụ gị ma nyochaa gị maka ụgbọ ya na ebe ọrụ ya tupu ị nya naanị gị. Ọzụzụ ị nwetaburu na-enyere aka, onye were gị n'ọrụ nwekwara ike ghara imegharị isiokwu ndị ị mụtaworo ma e nyochaworo gị na ha.",
            "Na résumé gị, kwuo eziokwu. Ọ bụrụ na i mechara ihe ọmụmụ a, dee na i mechara ọzụzụ ihe ọmụma nchekwa forklift. Ọ bụrụ na onye were gị n'ọrụ zụrụ gị ma nyochaa gị, dee ụdị ụgbọ na afọ ahụ. Edela \"certified\" mgbe ọ bụla ma ọ bụrụ na i nwetaghị asambodo.",
            "N'ajụjụ ọnụ ọrụ (interview), kwuo maka nlele tupu ọrụ amalite, data plate na nchekwa ndị na-eje ije. Ndị were mmadụ n'ọrụ chọrọ ndị na-anya ya na-akpachara anya mbụ, ma na-eme ngwa ngwa nke abụọ."
          ],
          steps: ["Depụta ndị were mmadụ n'ọrụ ma ọ bụ mmemme atọ dị gị nso na-azụ ndị na-anya forklift (ebe ọrụ, workforce center, community college).", "Jụọ nke ọ bụla: ọ gụnyere ịnya ụgbọ n'okpuru onye nkuzi na nyocha?", "Dee otu ahịrị eziokwu maka résumé gbasara ihe i meworo ruo ugbu a.", "Mụọ azịza sekọnd 30: \"Kedu otu ị na-esi echebe onwe gị na forklift?\""],
          words: [["Staffing agency", "ụlọ ọrụ na-etinye ndị ọrụ n'ọrụ n'azụmahịa ndị ọzọ."], ["Workforce center", "ọfịs ọha (a na-akpọkarị ya American Job Center) na-enyere ndị mmadụ aka ịchọta ọrụ na ọzụzụ."]],
          slides: [
            { title: "Ebe ọzụzụ na-adị", bullets: ["Ndị na-ewe mmadụ n'ọrụ wee zụọ ya", "Workforce center na community college", "Jụọ: ịnya ụgbọ n'okpuru onye nkuzi na nyocha?"] },
            { title: "Onye ọ bụla were gị n'ọrụ na-enyocha gị", bullets: ["Maka ụgbọ ya na ebe ọrụ ya", "Tupu ị nya naanị gị"] },
            { title: "Kwuo eziokwu na résumé gị", bullets: ["Ihe ọmụmụ: ọzụzụ ihe ọmụma nchekwa forklift", "Onye were gị n'ọrụ zụrụ gị: ụdị ụgbọ na afọ", "Ekwula na i nwere \"certified\" ma ọ bụrụ na i nweghị"] }
          ],
          sources: [OSHA_178, OSHA_TRAINING],
          tryIt: "Dee atụmatụ gị: ebe atọ nwere ike ịzụ gị, ajụjụ ị ga-ajụ nke ọ bụla, otu ahịrị eziokwu maka résumé, na azịza sekọnd 30 gị maka \"Kedu otu ị na-esi echebe onwe gị na forklift?\" Gụpụta azịza ahụ n'olu dị elu.",
          youCanNow: "ide atụmatụ iji nweta ọzụzụ na nyocha forklift ma kọwaa ọzụzụ gị n'eziokwu na résumé.",
          quickCheck: [
            { objective: "O5", q: "I mechara ihe ọmụmụ a, mana ọ dịbeghị onye were gị n'ọrụ nyochara gị. Kedu ahịrị résumé bụ eziokwu?", options: ["\"Certified forklift operator, all classes\"", "\"Completed forklift safety knowledge training (Koach Learn), 2026\"", "\"OSHA licensed forklift driver\"", "\"Forklift expert, 10 years\""], answer: 1, why: "Ọ na-ekwu kpọmkwem ihe i mere, n'ekwughị na i nwere asambodo i nweghị." },
            { objective: "O5", q: "Gịnị ka ị kwesịrị ịjụ mmemme ọzụzụ forklift?", options: ["Ma ọ gụnyere ịnya ụgbọ n'okpuru onye nkuzi na nyocha omume", "Ma ọ na-enye kaadị mara mma", "Ma ị nwere ike ịwụfe akụkụ omume aka", "Ma ọ bụ nke kacha dị ọnụ ala n'ịntanetị"], answer: 0, why: "Ọzụzụ OSHA gụnyere omume aka na nyocha, ya mere lelee na mmemme ahụ nwere ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ibu, ịnya ụgbọ na inweta ọrụ",
        questions: [
          { objective: "O3", q: "Gịnị bụ load center?", options: ["Etiti ụlọ nkwakọba ngwaahịa", "Etiti steering", "Ogologo site n'ihu fork ruo n'etiti ibu ahụ", "Ogo mast"], answer: 2, why: "A na-atụ load center site n'ihu forks ruo na center of gravity ibu ahụ." },
          { objective: "O3", q: "Ibu na-adabe n'otu akụkụ, ihe e ji kechie ya adọwakwala. Gịnị ka ị ga-eme?", options: ["Buli ya ngwa ngwa", "Buli ya elu ka ị hụ ụzọ", "Jiri forks kwapụ ya", "Ebulila ya; kọọ ya ka a dozie ya ma ọ bụ tụkọọ ya ọzọ"], answer: 3, why: "Naanị ibu kwụsiri ike, nke a hazịrị nke ọma, ka a ga-ebuli." },
          { objective: "O4", q: "Ibu gị na-egbochi anya gị n'ihu. Kedu otu ị ga-esi aga?", options: ["Azụ, na-ele ebe ị na-aga", "N'ihu, ibu e buliri elu", "N'ihu, ọsọ karịa", "Onye ọrụ ibe gị nọkwasịrị na forks"], answer: 0, why: "Ọ bụrụ na ibu ahụ egbochie anya gị, jee ije ka ibu ahụ na-eso n'azụ (nya azụ)." },
          { objective: "O4", q: "Tupu ị banye n'ime trailer ụgbọ ibu na dock, gịnị ka a ga-emerịrị?", options: ["Ọ dịghị ihe", "Meghee windo azụ trailer ahụ", "Dọọ breki trailer ahụ, tinye wheel chock na taya ya ma lelee ala ya", "Kụọ horn ugboro atọ"], answer: 2, why: "OSHA chọrọ ka a dọọ breki, tinye wheel chock, ma lelee ala trailer tupu ị banye na ya." },
          { objective: "O5", q: "Ị gara ọrụ na-eji ụdị forklift dị iche. Gịnị bụ eziokwu?", options: ["Ị chọrọ ọzụzụ na nyocha maka ụdị ọhụrụ ahụ", "Kaadị ochie gị kpuchiri ihe niile", "Ị nwere ike ịmụta ya naanị gị mgbe ọrụ gwụrụ", "Ọ dịghị ihe gbanwere"], answer: 0, why: "Ụdị ụgbọ dị iche bụ ihe kpatara ọzụzụ na nyocha n'ụgbọ ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ọrụ Onye Na-anya Forklift",
    questions: [
      { objective: "O5", q: "N'iwu OSHA, onye na-ekwenye na a zụrụ ma nyochaa onye na-anya forklift?", options: ["Onye na-anya ya", "Weebụsaịtị", "Onye were ya n'ọrụ", "Ụlọ ọrụ mere forklift"], answer: 2, why: "Onye were mmadụ n'ọrụ na-ekwenye ọzụzụ na nyocha onye na-anya ya." },
      { objective: "O5", q: "Kedu afọ kacha nta mmadụ ga-adị iji nya forklift n'ọrụ?", options: ["16", "18", "14", "21"], answer: 1, why: "Iwu ọrụ gọọmentị etiti amachibidoro ndị ọrụ dị n'okpuru afọ 18 ịnya forklift." },
      { objective: "O5", q: "Kedu nke bụ ihe kpatara ọzụzụ ọzọ?", options: ["Near miss gị na onye na-eje ije", "Uwe ọrụ ọhụrụ", "Mmụba ụgwọ ọnwa", "Ụbọchị ezumike"], answer: 0, why: "Ihe mberede ma ọ bụ near miss bụ otu n'ime ihe OSHA kwuru na-akpata ọzụzụ ọzọ." },
      { objective: "O1", q: "Gịnị ka overhead guard na-eme?", options: ["Ọ na-ejide ibu", "Ọ na-eme ka ụgbọ ha nhata", "Ọ na-anya ụgbọ", "Ọ na-echebe onye na-anya ya pụọ n'ihe na-ada"], answer: 3, why: "Overhead guard na-echebe onye na-anya ya pụọ n'ihe na-ada site n'elu." },
      { objective: "O1", q: "Forks kwụ n'elu akụkụ ole?", options: ["Counterweight", "Carriage", "Taya", "Oche"], answer: 1, why: "Forks kwụ na carriage, nke na-arịgo ma na-arịda na mast." },
      { objective: "O1", q: "Pallet jack eletrik a na-eje ije n'azụ ya dị na otu (class) ole?", options: ["Class VII", "Class V", "Class III", "Class VI"], answer: 2, why: "Class III gụnyere ụgbọ eletrik a na-eji aka eduzi, gụnyere ndị a na-eje ije n'azụ ha." },
      { objective: "O2", q: "Olee mgbe a ga-elerịrị forklift?", options: ["Tupu e jiri ya, opekata mpe kwa ụbọchị", "Otu ugboro n'afọ", "Naanị mgbe ihe mberede mesịrị", "Naanị mgbe ọ dị ọhụrụ"], answer: 0, why: "OSHA chọrọ nlele tupu e jiri ya, opekata mpe kwa ụbọchị." },
      { objective: "O2", q: "Gịnị mere na ị naghị etinye aka gị n'ime mast iji lelee chains?", options: ["Ọ dị unyi", "Ọ bụghị akụkụ nlele ahụ", "Onye isi na-eme ya", "Mast nwere ike ịgagharị ma pịa aka gị"], answer: 3, why: "Akụkụ mast na-agagharị nwere ike ịpịa aka; ndụmọdụ OSHA bụ ka ị lee anya, ma ọ bụ jiri osisi lelee ka chain si sie ike." },
      { objective: "O2", q: "Data plate adịghị na forklift. Gịnị ka ị ga-eme?", options: ["Chee echiche banyere capacity ya", "Kọọ ya; plate ahụ ga-adịrịrị n'ọnọdụ ya ma a na-agụ ya nke ọma", "Jiri foto ekwentị nke plate ụgbọ ọzọ", "Leghara ya anya"], answer: 1, why: "Nameplate na akara ga-anọgide n'ọnọdụ ha ma a na-agụ ha nke ọma; kọọ ya tupu e jiri ya." },
      { objective: "O2", q: "Onye nwere ike ịrụzi forklift?", options: ["Naanị ndị a zụrụ azụ ma nye ikike", "Onye ọ bụla na-anya ya", "Onye ọ bụla nwere ngwaọrụ", "Onye ọrụ kacha ọhụrụ"], answer: 0, why: "Naanị ndị nwere ikike, ndị a zụrụ azụ, kwesịrị ịrụzi ya." },
      { objective: "O3", q: "Plate kwuru 3,000 lb na inch 24. Kedu ibu ị nwere ike iweli (naanị omume)?", options: ["Igbe 3,500 lb", "Ibu 3,000 lb nke etiti ya dị inch 40 n'ihu", "Ibu 1,000 lb dọwara adọwa ma na-adabe n'otu akụkụ", "Pallet 2,400 lb e kechiri, nọ n'etiti"], answer: 3, why: "Ọ dị n'okpuru capacity, kwụsiri ike ma nọ n'etiti n'ime load center e dere ede." },
      { objective: "O3", q: "Gịnị na-eme mgbe etiti ibu ahụ dị anya karịa load center e dere ede?", options: ["Ụgbọ ahụ nwere ike iweli karịa", "Capacity ọ nwere ike iweli n'enweghị nsogbu na-ebelata", "Ọ dịghị ihe na-agbanwe", "Ụgbọ ahụ na-agba ọsọ karịa"], answer: 1, why: "Load center dị ogologo karịa na-eme ka ụgbọ ahụ ghara iguzosi ike, ya mere ọ na-eweli ntakịrị." },
      { objective: "O3", q: "Mgbe i buliri ibu ntakịrị, gịnị ka ị ga-eme tupu ị gaa ije?", options: ["Tụgharịa mast azụ ntakịrị ka ibu ahụ dabere na backrest", "Tụgharịa ya n'ihu", "Buli ya elu ruo ebe ị nwere ike", "Hapụ ka mmadụ jide ya"], answer: 0, why: "Ịtụgharị azụ ntakịrị na-eme ka ibu ahụ kwụsie ike na backrest." },
      { objective: "O4", q: "Kedu otu ị kwesịrị isi ebu ibu mgbe ị na-anya ụgbọ?", options: ["Elu, ka ị hụ ụzọ", "Tụgharịrị n'ihu", "N'ala ma tụgharịa azụ", "Mmadụ na-ejide ya"], answer: 2, why: "Ibu dị n'ala ma tụgharịa azụ na-eme ka ụgbọ kwụsie ike; ejila ibu e buliri elu ma ọ bụ tụgharịa n'ihu gaa ije." },
      { objective: "O4", q: "Ị bịarutere ebe ụzọ abụọ zutere, ebe ị na-ahụghị ihe dị n'akụkụ nkuku. Gịnị ka ị ga-eme?", options: ["Gbaa ọsọ ka ị gafee ngwa ngwa", "Belata ọsọ ma kụọ horn", "Buli forks", "Mechie anya gị ma gaa"], answer: 1, why: "OSHA kwuru ka ị belata ọsọ ma kụọ horn ebe ihe na-egbochi anya gị." },
      { objective: "O4", q: "Ị na-anya forklift bu ibu arịda ramp. N'ụzọ ole?", options: ["N'ihu, ibu na-ebu ụzọ", "N'akụkụ", "Tụgharịa n'etiti ramp", "Azụ, ka ibu ahụ nọrọ n'akụkụ elu"], answer: 3, why: "Debe ibu n'akụkụ elu: n'ihu mgbe ị na-arịgo, azụ mgbe ị na-arịda, atụgharịkwala n'elu ramp." },
      { objective: "O4", q: "Ị hapụrụ forklift gị gaa izu ike. Gịnị ka ị ga-emerịrị?", options: ["Wedata forks, tinye ya na neutral, gbanyụọ ya ma dọọ breki", "Hapụ ka ọ na-agba ka ọ dị njikere", "Hapụ forks n'elu", "Gwa onye ọrụ ibe gị ka o lekọta ya"], answer: 0, why: "Ụgbọ a hapụrụ naanị ya kwesịrị inwe forks n'ala, ihe nchịkwa na neutral, ike gbanyụrụ ma breki adọrọ." },
      { objective: "O4", q: "Ole ka ị ga-anọ n'azụ forklift ọzọ?", options: ["Otu ụkwụ (foot)", "Nso dị ka o kwere omume", "Ihe dị ka ogologo ụgbọ atọ", "Ọ dịghị mkpa"], answer: 2, why: "OSHA chọrọ ihe dị ka ogologo ụgbọ atọ n'etiti ụgbọ." },
      { objective: "O5", q: "Weebụsaịtị kwuru na vidiyo ya n'ịntanetị ga-eme ka i nwee asambodo \"OSHA certified\" n'ime nkeji 20. Gịnị bụ eziokwu?", options: ["Ọ na-anọchi ọzụzụ onye were gị n'ọrụ", "OSHA na-ere kaadị ahụ", "O zuru maka ọrụ ọ bụla", "A ka chọrọ ọzụzụ omume aka na nyocha onye were gị n'ọrụ"], answer: 3, why: "Naanị ọzụzụ na nyocha onye were gị n'ọrụ n'ebe ọrụ na-emezu iwu OSHA." },
      { objective: "O1", q: "Gịnị ka data plate na-egosi?", options: ["Ụdị ụgbọ ahụ na ibu ole ọ nwere ike iweli", "Aha onye na-anya ya", "Adreesị ụlọ nkwakọba ngwaahịa", "Ọnụ ahịa mmanụ"], answer: 0, why: "Data plate na-egosi ụdị ụgbọ na ozi gbasara capacity ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 10, 11, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndepụta nlele", objective: "O2", notYet: "Nlele igodo gbanyụrụ ma ọ bụ igodo gbanyere adịghị, ma ọ bụ enweghị nzọụkwụ maka ụgbọ na-adịghị mma.", meets: "Ọ kpuchiri ihe niile mgbe igodo gbanyụrụ na mgbe ọ gbanyere maka ụdị ụgbọ a họọrọ, ma kwuo ihe a ga-eme maka mmebi.", exceeds: "Ọ gbakwunyere nlele ndị ọzọ maka ụgbọ eletrik ma ọ bụ propane." },
      { name: "Aha akụkụ", objective: "O1", notYet: "Akụkụ a kpọrọ aha erughị isii, ma ọ bụ ọrụ ha ezighi ezi.", meets: "Opekata mpe akụkụ isii a kpọrọ aha ya na ọrụ nke ọ bụla, na otu (class) ụgbọ ahụ.", exceeds: "Ọ kọwara otu counterweight na load backrest si echebe onye na-anya ya." },
      { name: "Mkpebi ibu", objective: "O3", notYet: "A kpọrọ ibu karịrị capacity ma ọ bụ nke na-akwụsighị ike ihe dị mma.", meets: "Mkpebi ibu atọ niile ziri ezi, ya na ihe kpatara ha site na data plate.", exceeds: "Ọ kwuru mgbe a ga-ajụ onye isi, dị ka mgbe a maghị ịdị arọ ma ọ bụ mgbe e nwere attachment." },
      { name: "Kaadị ịnya ụgbọ, dock na ịdọba", objective: "O4", notYet: "Nlele dock ma ọ bụ otu nzọụkwụ ịdọba adịghị.", meets: "Ọ depụtara nzọụkwụ dock (breki, wheel chock, ala) na nzọụkwụ anọ niile nke ịdọba.", exceeds: "Ọ gbakwunyere iwu ramp, ndị na-eje ije na ịda ụgbọ." },
      { name: "Atụmatụ ọzụzụ na ahịrị résumé", objective: "O5", notYet: "Ọ na-ekwu na o nwere asambodo, ma ọ bụ na ọ dịghị mkpa ọzụzụ onye were ya n'ọrụ.", meets: "Ọ kpọrọ aha ebe atọ a ga-azụ ya, kwuo na onye were ya n'ọrụ ga-enyocha ya, ma nye otu ahịrị eziokwu maka résumé.", exceeds: "Ọ gụnyere azịza nchekwa sekọnd 30 a mụrụ maka ajụjụ ọnụ ọrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a na ngwugwu njikere nke ruru rubric",
      "Ndị na-amụ ihe malitere ọzụzụ forklift nke onye were ha n'ọrụ ma ọ bụ mmemme n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe e were n'ọrụ warehouse ma ọ bụ forklift (akụkọ ndị mmekọ na nnyocha nsochi)",
      "Ndị were mmadụ n'ọrụ bụ ndị mmekọ na-akọ na ndị ọrụ ọhụrụ gafere nyocha omume ha na nke mbụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji OSHA eTool",
      "Akwụkwọ na mkpịsị ode maka foto, ndepụta na kaadị akpa",
      "Ọ bụrụ na ọ dị: foto forklift e biri ebi na data plate omume",
      "Ihe dị ka nkeji 60 n'ozuzu"
    ],
    facilitatorNotes: [
      "Mee ka o doo anya site na mbido: ihe ọmụmụ a anaghị enye onye ọ bụla asambodo; onye were mmadụ n'ọrụ na-azụ ma na-enyocha.",
      "Ekwela ka ndị na-amụ ihe jiri ezi forklift mee omume dị ka akụkụ ihe ọmụmụ a. Ọ bụrụ na mmemme gị nwere ụgbọ ọzụzụ, omume aka na-eme naanị n'aka onye nkuzi tozuru etozu.",
      "Jiri data plate e biri ebi nwere ọnụọgụ e chepụtara maka omume ibu.",
      "Lezie anya maka ndị na-amụ ihe dị n'okpuru afọ 18; ha nwere ike ime ihe ọmụmụ a mana ha enweghị ike ịnya forklift n'ọrụ.",
      "Jiri rubric tụọ akara ngwugwu njikere ahụ, ma lebanye anya n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

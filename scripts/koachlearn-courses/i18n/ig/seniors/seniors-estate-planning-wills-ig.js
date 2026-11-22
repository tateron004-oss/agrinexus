"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-estate-planning-wills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-estate-planning-wills-ig",
  lang: "ig",
  translationOf: "seniors-estate-planning-wills",
  category: "Seniors and Technology",
  name: "Ịhazi Ihe Nketa na Akwụkwọ Ọchịchọ (Will)",
  skills: "Ịmara ihe akwụkwọ ọchịchọ (will) na-eme, Ịlele ndị ritere uru (beneficiary) gị, Ịghọta power of attorney na akwụkwọ ntụziaka ahụike, Idepụta ihe ị nwere na ụgwọ ị ji, Ịkwado maka ọka iwu ma ọ bụ enyemaka iwu n'efu, Ịhazi na ichekwa akwụkwọ gị",
  outcome: "ịkwado ma hazie atụmatụ ihe nketa gị: ndepụta ihe ị nwere na ụgwọ ị ji, nlele ndị ritere uru gị, ndị ị chọrọ ịhọpụta, ajụjụ gị maka ọka iwu ma ọ bụ enyemaka iwu, na ndetu doro anya na-agwa ezinụlọ gị ebe akwụkwọ ndị dị mkpa dị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ime ka ihe dịrị ezinụlọ ha mfe, na maka ụmụ na ụmụ ụmụ toro eto na-enyere ha aka. Ọ dịghị mkpa ka ị bụrụ ọgaranya: onye ọ bụla nwere akaụntụ ụlọ akụ, ụlọ, ụgbọala, ego ezumike nka (pension), anụ ụlọ ma ọ bụ ụmụ ụmụ nta ọ na-elekọta nwere ike irite uru n'atụmatụ.",
    "Ị ga-amụta ihe akwụkwọ ọchịchọ (will), ndị ritere uru, power of attorney na akwụkwọ ntụziaka ahụike na-eme, wee mee ndepụta na nhọrọ ndị ọka iwu ga-arịọ gị, ma hazie ihe niile ka ndị kwesịrị ekwesị wee chọta ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Iwu gbasara will na akwụkwọ ndị a dị iche na steeti ọ bụla nke US na mba ọ bụla. Ihe ọmụmụ a na-enyere gị aka ịkwado; ka akwụkwọ ndị ahụ bụrụ nke iwu kwadoro, gaa hụ ọka iwu ma ọ bụ enyemaka iwu n'efu (legal aid) ebe ị bi."
  ],
  finalTask: "Wuo faịlụ atụmatụ ihe nketa gị: (1) ndepụta ihe ị nwere na ụgwọ ị ji; (2) nlele onye ritere uru maka akaụntụ ma ọ bụ iwu inshọransị ọ bụla nwere ya; (3) ndị ị ga-ahọpụta dị ka executor, onye nnọchite anya ego na onye nnọchite anya ahụike, ya na onye nkwado maka onye ọ bụla; (4) opekata mpe ajụjụ ise maka ọka iwu ma ọ bụ enyemaka iwu; (5) ndetu otu peeji \"ebe akwụkwọ m dị\" maka ezinụlọ gị. Wee chọta otu ebe dị nso gị na-enye enyemaka iwu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye, na ndị ezinụlọ na-enyere ha aka, ndị na-emebeghị atụmatụ ihe nketa ma ọ bụ ndị nke ha agaala ochie. Ụfọdụ na-azụ ụmụ ụmụ ha; ọtụtụ nwere inshọransị ndụ, akaụntụ ezumike nka ma ọ bụ ụlọ.",
    startingPoint: "Ha maara na will dị, mana ọtụtụ enweghị will, ha elebeghị fọm ndị ritere uru ha anya mgbe ọ bụla, ha amaghịkwa ihe power of attorney ma ọ bụ akwụkwọ ntụziaka ahụike na-eme. Akwụkwọ ha na-agbasakarị n'ime ụlọ.",
    gap: "Na-enweghị atụmatụ, iwu na-ekpebi onye ga-eketa, fọm ndị ritere uru ochie nwere ike iziga ego n'aka onye na-ekwesịghị, ezinụlọ nwekwara ike ịga ụlọikpe ma ọ bụrụ na mmadụ enweghị ike ikpebiri onwe ya. Ịkwado ndepụta, ndị a ga-ahọpụta na ajụjụ, na ịhazi akwụkwọ, na-azọpụta ezinụlọ site na nsogbu na mmefu ego, ma na-eme ka ileta ọka iwu dị ngwa ma dị ọnụ ala.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: akwụkwọ na faịlụ ezuola; ekwentị ma ọ bụ kọmputa na-enyere aka ịchọta enyemaka iwu",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla n'ọsọ nwayọọ, gbakwunyere oge ịchịkọta akwụkwọ",
      "Iwu dị iche site na steeti na mba; ihe ọmụmụ a na-akwado, ọka iwu ma ọ bụ enyemaka iwu na-eme ka akwụkwọ bụrụ nke iwu kwadoro",
      "Nzuzo: naanị mkpụrụ ọnụọgụ anọ ikpeazụ nke nọmba akaụntụ, enweghị okwuntughe, na enweghị ozi nzuzo n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị okwu ndị bụ isi gbasara ihe nketa", action: "ịkọwa ihe will na-eme, ihe executor na-eme na ihe nwere ike ime ma ọ bụrụ na enweghị will", standard: "n'okwu nke gị, na-enweta opekata mpe 4 n'ime ajụjụ 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị inshọransị ndụ gị, akaụntụ ezumike nka na akaụntụ ụlọ akụ gị", action: "ịlele onye a kpọrọ aha dị ka onye ritere uru na onye nkwado n'otu n'otu", standard: "na-akara fọm ọ bụla agaala ochie" },
    { id: "O3", condition: "Mgbe e nyere gị ndị nọ na ndụ gị", action: "ịhọpụta executor, onye nnọchite anya ego na onye nnọchite anya ahụike, ya na onye nkwado maka onye ọ bụla", standard: "na-ahọrọ ndị a pụrụ ịtụkwasị obi, ndị a na-enweta, ndị ga-agbaso ọchịchọ gị" },
    { id: "O4", condition: "Site n'iji akwụkwọ ma ọ bụ faịlụ nzuzo", action: "idepụta ihe ị nwere na ụgwọ ị ji", standard: "na-egosi naanị mkpụrụ ọnụọgụ anọ ikpeazụ nke nọmba ọ bụla, na enweghị okwuntughe" },
    { id: "O5", condition: "Tupu gị ezute ọka iwu ma ọ bụ enyemaka iwu", action: "ịchọta ebe enyemaka iwu dị nso gị ma dee opekata mpe ajụjụ ise doro anya", standard: "gụnyere ego ọ ga-efu na ihe ọ gụnyere" },
    { id: "O6", condition: "Mgbe e nyere gị akwụkwọ gị ndị dị mkpa", action: "ịhazi ha n'otu faịlụ ma dee ndetu \"ebe akwụkwọ m dị\" maka ezinụlọ gị", standard: "e kesara ndị ị họpụtara ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Mara akwụkwọ ndị ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ịhazi ihe nketa bụ, na ihe will na-eme",
          minutes: 5,
          goal: "Kọwaa ihe will na-eme na ihe nwere ike ime ma ọ bụrụ na enweghị ya.",
          text: [
            "Ịhazi ihe nketa (estate planning) pụtara ikpebi tupu oge eruo ihe ga-eme ego gị na ngwongwo gị mgbe ị nwụrụ, na onye ga-ekpebiri gị ihe ma ọ bụrụ na ọrịa emee ka ị ghara inwe ike ikpebi. Ihe nketa gị (estate) bụ ihe niile ị nwere, wepụ ụgwọ ị ji.",
            "Will (akwụkwọ ọchịchọ) bụ akwụkwọ iwu na-ekwu onye ga-enweta ngwongwo gị, ma na-ahọpụta executor: onye ga-emezu ọchịchọ gị, kwụọ ụgwọ ikpeazụ, ma kesaa ihe fọdụrụ. N'ọtụtụ ebe, will nwekwara ike ịhọpụta onye nlekọta (guardian) maka ụmụaka na-erubeghị afọ 18 ị na-elekọta, dị ka ụmụ ụmụ ị na-azụ.",
            "Ọ bụrụ na ị nwụọ n'enweghị will, iwu ebe ị bi ga-ekpebi onye ga-eketa, ụlọikpe ga-ahọpụtakwa onye ga-elekọta ihe nketa gị. Ihe ga-esi na ya pụta nwere ike ọ gaghị abụ ihe ị chọrọ.",
            "Steeti ọ bụla na mba ọ bụla nwere iwu nke ya maka ka will dị irè, dị ka otu e si abịanye aka na ya na ndị akaebe. Will na-agbasoghị iwu ndị ahụ nwere ike ọ gaghị agụ. Ọ bụ ya mere ihe ọmụmụ a ji enyere gị aka ịkwado, ọka iwu ma ọ bụ enyemaka iwu na-enyekwa gị aka ime ka ọ bụrụ nke iwu kwadoro."
          ],
          words: [["Ihe nketa (estate)", "ihe niile ị nwere, dị ka ego, ụlọ, ụgbọala na ngwongwo, wepụ ụgwọ ị ji."], ["Will (akwụkwọ ọchịchọ)", "akwụkwọ iwu na-ekwu onye ga-enweta ngwongwo gị mgbe ị nwụrụ na onye ga-emezu ọchịchọ gị."], ["Executor", "onye a kpọrọ aha na will ka o mezuo ọchịchọ gị ma dozie ihe nketa gị."], ["Onye nlekọta (guardian)", "onye a họpụtara ilekọta nwata na-erubeghị afọ 18."]],
          slides: [
            { title: "Ịhazi ihe nketa bụ ikpebi tupu oge eruo", bullets: ["Ihe ga-eme ihe gị mgbe ị nwụrụ", "Onye ga-ekpebiri gị ma ọ bụrụ na ọrịa ejide gị"] },
            { title: "Will", bullets: ["Na-ekwu onye ga-enweta ngwongwo gị", "Na-ahọpụta executor", "Nwere ike ịhọpụta onye nlekọta maka ụmụaka ị na-elekọta"] },
            { title: "Na-enweghị will", bullets: ["Iwu ebe ị bi na-ekpebi", "Ụlọikpe na-ahọpụta onye ga-elekọta ya", "O nwere ike ọ gaghị abụ ihe ị chọrọ"] },
            { title: "Iwu dị iche site n'ebe ruo n'ebe", bullets: ["Steeti na mba ọ bụla nwere iwu nke ya", "Kwado ebe a; ọka iwu ma ọ bụ enyemaka iwu na-eme ka ọ bụrụ nke iwu"] }
          ],
          sources: [{ name: "LawHelp.org: find free legal help and information in your state", url: "https://www.lawhelp.org/" }],
          tryIt: "Dee ihe atọ kacha dị gị mkpa ịhapụrụ ndị ọzọ, dị ka ụlọ, ego e chekwara, Baịbụl ezinụlọ, ụgbọala ma ọ bụ nlekọta anụ ụlọ, na onye ị ga-achọ ka o nweta nke ọ bụla. Nke a bụ ndepụta nzuzo maka gị, ọ bụghị akwụkwọ iwu.",
          youCanNow: "ịkọwa ihe will na executor bụ, na ihe mere will ga-eji gbasoo iwu ebe ị bi.",
          quickCheck: [
            { objective: "O1", q: "Onye bụ executor?", options: ["Onye na-emezu ọchịchọ dị na will gị", "Onye ọka ikpe", "Akaụntụ ụlọ akụ", "Dọkịta gị"], answer: 0, why: "Executor na-emezu ọchịchọ gị, na-akwụ ụgwọ ikpeazụ ma na-ekesa ihe fọdụrụ." },
            { objective: "O1", q: "Enyi gị kwuru, \"Achọghị m will; ezinụlọ m ga-edozi ya.\" Gịnị nwere ike ime ma ọ bụrụ na enweghị will?", options: ["Ọ dịghị ihe na-agbanwe", "Ezinụlọ ga-atụ vootu", "Iwu ebe ọ bi ga-ekpebi onye ga-eketa, nke nwere ike ọ gaghị adaba n'ọchịchọ ya", "Ụlọ akụ ga-ewere ihe niile"], answer: 2, why: "Na-enweghị will, iwu na-ekpebi onye ga-eketa, ụlọikpe na-ahọpụtakwa onye ga-elekọta ihe nketa ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịlele ndị ritere uru (beneficiary) gị",
          minutes: 5,
          goal: "Chọta akaụntụ ma ọ bụ inshọransị ọ bụla nwere onye ritere uru ma lelee onye a kpọrọ aha.",
          text: [
            "Ụfọdụ ego anaghị esi na will gị agafe ma ọlị. Inshọransị ndụ, ọtụtụ akaụntụ ezumike nka na pension, na ụfọdụ akaụntụ ụlọ akụ na-ekwe ka ị họpụta onye ritere uru (beneficiary): onye ga-enweta ego ahụ mgbe ị nwụrụ. Fọm ndị a na-ekpebikarị onye ga-enweta ego ahụ, ọbụlagodi ma ọ bụrụ na will gị kwuru ihe dị iche.",
            "Ọ bụ ya mere fọm ochie ji akpata nsogbu. Inshọransị ndụ nwere ike ka na-akpọ aha di ma ọ bụ nwunye mbụ, ma ọ bụ nne ma ọ bụ nna nwụrụ anwụ, ma ọ bụ otu nwa tupu a mụọ ụmụ ụmụ.",
            "Dee ndepụta akaụntụ na inshọransị niile ị nwere. Maka nke ọ bụla, jụọ ụlọ ọrụ ahụ ma ọ bụ lelee akaụntụ gị n'ịntanetị ka ị hụ onye a kpọrọ aha dị ka onye ritere uru na onye nkwado (a na-akpọkarị contingent beneficiary). Dozie nke ọ bụla ezighi ezi site n'iji fọm nke ụlọ ọrụ ahụ n'onwe ya.",
            "Lelee ndị ritere uru gị ọzọ mgbe ihe ukwu mere na ndụ: alụmdi na nwunye, ịgba alụkwaghịm, ọnwụ, ọmụmụ nwa ma ọ bụ nwa nwa ọhụrụ. Jụọ ọka iwu tupu ịhọpụta nwata ma ọ bụ onye na-enweta enyemaka nkwarụ (disability benefits), n'ihi na iwu pụrụ iche nwere ike ịdị."
          ],
          steps: ["Depụta inshọransị ndụ, akaụntụ ezumike nka, pension na akaụntụ ụlọ akụ ọ bụla.", "Maka nke ọ bụla, chọpụta onye a kpọrọ aha dị ka onye ritere uru na dị ka onye nkwado.", "Kaa nke ọ bụla agaala ochie akara.", "Dozie ha site n'iji fọm nke ụlọ ọrụ ahụ n'onwe ya.", "Lelee ọzọ mgbe alụmdi na nwunye, alụkwaghịm, ọnwụ ma ọ bụ ọmụmụ mere."],
          words: [["Onye ritere uru (beneficiary)", "onye ị họpụtara inweta ego site n'akaụntụ ma ọ bụ inshọransị mgbe ị nwụrụ."], ["Contingent beneficiary", "onye nkwado ga-enweta ego ahụ ma ọ bụrụ na onye ritere uru mbụ anwụọla."], ["Ihe ukwu mere na ndụ", "mgbanwe buru ibu dị ka alụmdi na nwunye, alụkwaghịm, ọnwụ ma ọ bụ ọmụmụ."]],
          slides: [
            { title: "Ụfọdụ ego anaghị agafe will", bullets: ["Inshọransị ndụ, ọtụtụ akaụntụ ezumike nka", "Ụfọdụ akaụntụ ụlọ akụ", "Fọm onye ritere uru na-ekpebikarị"] },
            { title: "Fọm ochie na-akpata nsogbu", bullets: ["Di ma ọ bụ nwunye mbụ ka dị n'ime ya", "Onye nwụrụ anwụ", "Ụmụ ụmụ ọhụrụ a hapụrụ"] },
            { title: "Lelee nke ọ bụla", bullets: ["Depụta akaụntụ na inshọransị gị", "Chọta onye ritere uru na onye nkwado", "Dozie ya site na fọm nke ụlọ ọrụ ahụ"] },
            { title: "Lelee ọzọ mgbe ihe ukwu mere", bullets: ["Alụmdi na nwunye, alụkwaghịm, ọnwụ, ọmụmụ", "Jụọ ọka iwu maka nwata ma ọ bụ enyemaka nkwarụ"] }
          ],
          sources: [{ name: "CFPB: Managing someone else's money (guides for families)", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }],
          tryIt: "Depụta akaụntụ ma ọ bụ inshọransị ọ bụla ị nwere nke nwere ike inwe onye ritere uru. Họrọ otu, lelee onye a kpọrọ aha (n'ịntanetị, n'akwụkwọ gị ma ọ bụ site n'ịkpọ ụlọ ọrụ ahụ), ma dee ma ọ ka ziri ezi.",
          youCanNow: "ịchọta akaụntụ gị nwere ndị ritere uru, ịlele onye a kpọrọ aha, na ịmara mgbe ị ga-edozi ha.",
          quickCheck: [
            { objective: "O2", q: "Onye bụ onye ritere uru (beneficiary)?", options: ["Onye na-ede will gị", "Onye a kpọrọ aha ka o nweta ego site n'akaụntụ ma ọ bụ inshọransị mgbe ị nwụrụ", "Ọka iwu gị", "Onye njikwa ụlọ akụ gị"], answer: 1, why: "Onye ritere uru bụ onye a kpọrọ aha n'akaụntụ ma ọ bụ inshọransị ka o nweta ego ahụ." },
            { objective: "O2", q: "Fọm pension gị ka na-akpọ aha di gị nwụrụ anwụ dị ka onye ritere uru. Gịnị ka ị ga-eme?", options: ["Hapụ ya; will na-ekpuchi ya", "Kpịchapụ aha ya na nke gị", "Gwa enyi gị", "Dozie ya site n'iji fọm nke ụlọ ọrụ ahụ n'onwe ya"], answer: 3, why: "Fọm onye ritere uru na-ekpebikarị onye ga-enweta ego ahụ, ya mere dozie ha site na fọm nke ụlọ ọrụ ahụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Power of attorney na akwụkwọ ntụziaka ahụike",
          minutes: 6,
          goal: "Kọwaa onye ga-ekpebiri gị maka ego na maka ahụike ma ọ bụrụ na ị nweghị ike.",
          text: [
            "Will na-arụ ọrụ naanị mgbe ị nwụrụ. Akwụkwọ ndị ọzọ na-echebe gị mgbe ị dị ndụ, ma ọ bụrụ na ọrịa ma ọ bụ ihe mberede emee ka ị ghara inwe ike ikpebiri onwe gị.",
            "Financial power of attorney na-ahọpụta onye nnọchite anya (agent): onye ị tụkwasịrị obi ilekọta ego na ihe onwunwe gị, dị ka ịkwụ ụgwọ ma ọ bụ ịgwa ụlọ akụ okwu. Consumer Financial Protection Bureau (CFPB, ụlọ ọrụ gọọmentị US na-echebe ndị ahịa) nwere ntụziaka n'efu maka ndị a họpụtara dị ka onye nnọchite anya. Ọ bụrụ na enweghị ya, ezinụlọ gị nwere ike ịga ụlọikpe ka a họpụta guardian ma ọ bụ conservator, nke na-ewe oge na ego.",
            "Akwụkwọ ntụziaka ahụike, nke a na-akpọkwa advance directive, gbasara mkpebi ahụike. Health care power of attorney (ma ọ bụ health care proxy) na-ahọpụta onye ị tụkwasịrị obi ime mkpebi ahụike ma ọ bụrụ na ị nweghị ike. Living will na-ede ọgwụgwọ ị ga-achọ ma ọ bụ ị gaghị achọ ma ọ bụrụ na ị na-anwụ ma ọ bụ na ị maghị onwe gị ruo mgbe ebighị ebi, dị ka igwe na-enye ume ma ọ bụ inye nri site na tube.",
            "Họrọ ndị a pụrụ ịtụkwasị obi, ndị bi nso ma ọ bụ ndị a na-enweta, ndị ga-agbaso ọchịchọ gị, ọ bụghị nke ha. Họpụta onye nkwado maka onye ọ bụla. Wee gwa ha okwu, gwakwa dọkịta gị, banyere ihe ị chọrọ. Fọm na iwu dị iche site na steeti na mba, ya mere nweta ha n'aka ọka iwu, enyemaka iwu, ọfịs dọkịta gị ma ọ bụ ụlọ ọgwụ, ma jụọ otu e si abịanye aka na ha nke ọma."
          ],
          words: [["Power of attorney", "akwụkwọ iwu na-ekwe ka onye ị họọrọ mee ihe n'aha gị."], ["Onye nnọchite anya (agent)", "onye ị họpụtara na power of attorney."], ["Advance directive", "akwụkwọ na-agwa ndị dọkịta na ezinụlọ ọchịchọ ahụike gị na onye ga-ekpebiri gị."], ["Living will", "akwụkwọ na-ekwu ọgwụgwọ ị chọrọ ma ọ bụ ị achọghị mgbe ndụ na-abịa n'ọgwụgwụ."], ["Health care proxy", "onye ị họpụtara ime mkpebi ahụike ma ọ bụrụ na ị nweghị ike."]],
          slides: [
            { title: "Atụmatụ maka mgbe ị dị ndụ", bullets: ["Will na-arụ ọrụ naanị mgbe ọnwụ", "Ndị a na-ekpuchi ọrịa ma ọ bụ ihe mberede"] },
            { title: "Financial power of attorney", bullets: ["Na-ahọpụta onye nnọchite anya maka ego na ihe onwunwe", "Na-akwụ ụgwọ, na-agwa ụlọ akụ okwu", "Na-enweghị ya, ezinụlọ nwere ike ịga ụlọikpe"] },
            { title: "Akwụkwọ ntụziaka ahụike", bullets: ["Health care proxy: onye na-ekpebi", "Living will: ọgwụgwọ ị chọrọ", "Gwa dọkịta gị okwu banyere ha"] },
            { title: "Họrọ nke ọma", bullets: ["Onye a pụrụ ịtụkwasị obi, a na-enweta", "Ga-agbaso ọchịchọ gị", "Họpụta onye nkwado; fọm dị iche site na steeti"] }
          ],
          sources: [
            { name: "MedlinePlus: Advance directives", url: "https://medlineplus.gov/advancedirectives.html" },
            { name: "CFPB: Managing someone else's money", url: "https://www.consumerfinance.gov/consumer-tools/managing-someone-elses-money/" }
          ],
          tryIt: "Dee aha onye ị ga-ahọrọ dị ka onye nnọchite anya ego gị na dị ka health care proxy gị, na onye nkwado maka nke ọ bụla. N'akụkụ aha ọ bụla, dee otu ihe mere i ji tụkwasị ya obi.",
          youCanNow: "ịkọwa financial power of attorney, health care proxy na living will, na ịhọrọ onye ị tụkwasịrị obi maka nke ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka financial power of attorney na-eme?", options: ["Ọ na-ahọpụta onye ga-elekọta ego na ihe onwunwe gị ma ọ bụrụ na ị nweghị ike", "Ọ na-ekwu onye ga-enweta ụlọ gị mgbe ị nwụrụ", "Ọ na-edepụta ọgwụ gị", "Ọ na-emechi akaụntụ ụlọ akụ gị"], answer: 0, why: "Financial power of attorney na-ahọpụta onye nnọchite anya ga-elekọta ego n'aha gị mgbe ị dị ndụ." },
            { objective: "O3", q: "Ị na-ahọrọ onye nnọchite anya ahụike. Onye kacha mma?", options: ["Onye ikwu na-arụ ụka karịa", "Onye ị hụbeghị ọtụtụ afọ", "Onye ị tụkwasịrị obi, onye ị na-enweta, ga-agbaso ọchịchọ gị, ya na onye nkwado", "Onye ọ bụla buru ụzọ jụọ"], answer: 2, why: "Họrọ onye a pụrụ ịtụkwasị obi, a na-enweta, dịkwa njikere ịgbaso ọchịchọ gị, ma họpụta onye nkwado." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mara akwụkwọ ndị ahụ",
        questions: [
          { objective: "O1", q: "Gịnị ka executor na-eme?", options: ["Ọ na-emezu ọchịchọ dị na will gị ma dozie ihe nketa gị", "Ọ na-ede akụkọ ahụike gị", "Ọ na-ere gị inshọransị", "Ọ na-ekpebi atụmatụ Medicare gị"], answer: 0, why: "A na-akpọ executor aha na will ka o mezuo ọchịchọ gị." },
          { objective: "O1", q: "Gịnị nwere ike ime ma ọ bụrụ na ị nwụọ n'enweghị will?", options: ["Ọ dịghị ihe na-eme ngwongwo gị", "Ụlọ akụ gị na-ewere ihe niile", "Iwu ebe ị bi na-ekpebi onye ga-eketa", "Onye agbata obi gị na-ahọrọ"], answer: 2, why: "Na-enweghị will, iwu steeti ma ọ bụ mba na ụlọikpe na-ekpebi." },
          { objective: "O2", q: "Will gị hapụrụ ihe niile nye nwa gị nwanyị, mana fọm inshọransị ndụ gị ka na-akpọ aha di gị mbụ. Onye na-enwetakarị ego inshọransị ahụ?", options: ["Nwa gị nwanyị", "Ụlọikpe", "Onye na-ere inshọransị", "Onye a kpọrọ aha na fọm onye ritere uru"], answer: 3, why: "Fọm onye ritere uru na-ekpebikarị ego ahụ, ọbụlagodi ma ọ bụrụ na will kwuru ihe dị iche." },
          { objective: "O3", q: "Kedu akwụkwọ na-ahọpụta onye ga-eme mkpebi ahụike ma ọ bụrụ na ị nweghị ike?", options: ["Akwụkwọ akụkọ ụlọ akụ", "Health care proxy ma ọ bụ health care power of attorney", "Fọm onye ritere uru", "Ndepụta ihe a ga-azụ n'ahịa"], answer: 1, why: "Health care proxy bụ onye ị họpụtara maka mkpebi ahụike." },
          { objective: "O1", q: "Gịnị mere ị ji chọọ ọka iwu ma ọ bụ enyemaka iwu iji mechaa akwụkwọ ndị a?", options: ["N'ihi na a naghị ekwe ka ngwa AI gụọ ha", "N'ihi na a ga-ede ha na kọmputa", "N'ihi na iwu maka ime ka ha bụrụ nke iwu kwadoro dị iche site na steeti na mba", "N'ihi na ọ bụ naanị ndị ọka iwu nwere ike inwe ụlọ"], answer: 2, why: "Akwụkwọ na-agbasoghị iwu ebe ahụ nwere ike ọ gaghị agụ." }
        ]
      }
    },
    {
      name: "Isi 2: Kwado ma hazie",
      lessons: [
        {
          objectives: ["O4"],
          title: "Idepụta ihe ị nwere na ụgwọ ị ji",
          minutes: 5,
          goal: "Mee ndepụta dị mfe nke ihe onwunwe na ụgwọ gị nke ọka iwu na ezinụlọ gị ga-eji.",
          text: [
            "Tupu gị ezute ọka iwu, dee ndepụta ihe ị nwere na ụgwọ ị ji. Ndepụta a na-enyere ọka iwu aka inye ezi ndụmọdụ, ma emesịa na-enyere executor gị aka ịchọta ihe niile.",
            "Ihe ị nwere (ihe onwunwe): akaụntụ ụlọ akụ na credit union, akaụntụ ezumike nka na pension, inshọransị ndụ, ụlọ gị ma ọ bụ ala gị, ụgbọala, ngwongwo dị oke ọnụ, na ihe dị ezinụlọ mkpa dị ka ọla ma ọ bụ foto. Depụtakwa akaụntụ ịntanetị dị ka email na ebe nchekwa foto, na anụ ụlọ ọ bụla chọrọ ụlọ ọhụrụ.",
            "Ihe ị ji (ụgwọ): ụgwọ ụlọ (mortgage), ụgwọ ụgbọala, kaadị kredit, ụgwọ ụlọ ọgwụ na ego ọ bụla i biri n'aka mmadụ.",
            "Maka ihe ọ bụla, dee aha ụlọ ọrụ ahụ na ụdị akaụntụ ahụ, mana edela nọmba akaụntụ zuru ezu ma ọ bụ okwuntughe. Dee \"na-ejedebe na 1234\" kama. Chekwaa ndepụta a n'ebe nchekwa. Edela ya n'ime ngwa enyemaka AI ma ọ bụ zigara ya onye ọ bụla na email ma ọ bụrụ na a họpụtaghị ya inyere gị aka."
          ],
          steps: ["Dee isiokwu: Ihe m nwere. Depụta akaụntụ, inshọransị, ala na ụlọ, ụgbọala na ngwongwo dị oke ọnụ.", "Tinye akaụntụ ịntanetị na anụ ụlọ.", "Dee isiokwu: Ihe m ji. Depụta ụgwọ ọ bụla na onye ị ji ya.", "Jiri naanị mkpụrụ ọnụọgụ anọ ikpeazụ nke nọmba ọ bụla, edekwala okwuntughe na ndepụta a mgbe ọ bụla.", "Chekwaa ya n'ebe nchekwa."],
          words: [["Ihe onwunwe (asset)", "ihe ị nwere bara uru, dị ka ego, ụlọ ma ọ bụ ụgbọala."], ["Ụgwọ (debt)", "ego ị ji, dị ka ụgwọ ụlọ ma ọ bụ kaadị kredit."], ["Ndepụta zuru ezu (inventory)", "ndepụta niile nke ihe ị nwere."]],
          slides: [
            { title: "Ihe mere a ga-eji mee ndepụta", bullets: ["Ọ na-enyere ọka iwu gị aka inye ndụmọdụ", "Ọ na-enyere executor gị aka ịchọta ihe niile"] },
            { title: "Ihe ị nwere", bullets: ["Akaụntụ, pension, inshọransị ndụ", "Ụlọ, ala, ụgbọala, ngwongwo dị oke ọnụ", "Akaụntụ ịntanetị na anụ ụlọ"] },
            { title: "Ihe ị ji", bullets: ["Ụgwọ ụlọ, ụgwọ ụgbọala, kaadị kredit", "Ụgwọ ụlọ ọgwụ, ego i biri n'aka mmadụ"] },
            { title: "Debe ya na nzuzo", bullets: ["Naanị mkpụrụ ọnụọgụ anọ ikpeazụ", "Okwuntughe adịghị na ndepụta ahụ", "Etinyela ya n'ime ngwa AI mgbe ọ bụla"] }
          ],
          tryIt: "Malite ndepụta gị ugbu a n'akwụkwọ: dee opekata mpe ihe ise ị nwere na ụgwọ ọ bụla ị ji, ya na aha ụlọ ọrụ ahụ na naanị mkpụrụ ọnụọgụ anọ ikpeazụ nke nọmba ọ bụla.",
          youCanNow: "ime ndepụta nzuzo, hazie ahazi, nke ihe ị nwere na ụgwọ ị ji maka ọka iwu na ezinụlọ gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ihe onwunwe gị (assets)?", options: ["Ụgwọ gị", "Ndị dọkịta gị", "Ajụjụ gị maka ọka iwu", "Ihe ị nwere, dị ka akaụntụ, ala na ụlọ, na ngwongwo dị oke ọnụ"], answer: 3, why: "Ihe onwunwe bụ ihe ị nwere; ụgwọ bụ ihe ị ji." },
            { objective: "O4", q: "Ị na-ede akaụntụ nchekwa ego gị na ndepụta gị. Kedu otu ị ga-esi dee nọmba ya?", options: ["Nọmba zuru ezu na okwuntughe", "\"Na-ejedebe na 1234\"", "Naanị nọmba zuru ezu", "Hapụ akaụntụ ahụ"], answer: 1, why: "Dee naanị mkpụrụ ọnụọgụ anọ ikpeazụ, edekwala okwuntughe na ndepụta ahụ mgbe ọ bụla." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Ịkwado maka ọka iwu ma ọ bụ enyemaka iwu",
          minutes: 5,
          goal: "Chọta enyemaka iwu dị nso gị ma kwado nhọrọ na ajụjụ ị ga-ebute.",
          text: [
            "Enyemaka maka ịhazi ihe nketa anaghị adị oke ọnụ mgbe niile. Enyemaka n'efu ma ọ bụ nke dị ọnụ ala nwere ike isi n'otu enyemaka iwu (legal aid), ọrụ iwu maka ndị okenye, ụlọ ọgwụ iwu nke ụlọ akwụkwọ iwu, na mmemme ndị ọka iwu na-enye aka n'efu. LawHelp.org na-ekwe ka ị họrọ steeti gị ka ị chọta enyemaka iwu n'efu site n'otu ndị anaghị achọ uru. Eldercare Locator (1-800-677-1116) na-ejikọ ndị okenye na ezinụlọ ha na ọrụ ndị dị nso; jụọ ha maka enyemaka iwu maka ndị okenye dị nso gị. Otu ndị ọka iwu (bar association) nke steeti gị ma ọ bụ obodo gị nwekwara ike inwe ọrụ na-ezigara gị ọka iwu (lawyer referral service).",
            "Fọm na ngwa ide will dị n'ịntanetị, mana fọm na-adabaghị n'iwu steeti gị, ma ọ bụ n'ọnọdụ ezinụlọ gị, nwere ike ọ gaghị arụ ọrụ. Ọka iwu ma ọ bụ enyemaka iwu nwere ike ịgwa gị ma fọm dị mfe ezuola gị ma ọ bụ na o zughị.",
            "Bute ihe ị kwadoro: ndepụta ihe ị nwere na ụgwọ ị ji, nlele ndị ritere uru gị, na ndị ị họọrọ maka executor, onye nlekọta (guardian), onye nnọchite anya ego na health care proxy, ya na ndị nkwado. Butekwa ajụjụ.",
            "Ezi ajụjụ: Ọ dị m mkpa will, trust, ma ọ bụ ha abụọ? Kedu otu a ga-esi bịanye aka na will m ma nwee ndị akaebe ebe a? Gịnị ga-eme ụlọ m? Gịnị ka m ga-eme maka nwa nwa m na-elekọta? Ego ole ka nke a ga-efu, gịnịkwa ka ọ gụnyere? Ngwa enyemaka AI nwere ike inyere gị aka ide ajụjụ gị n'okwu doro anya, mana hapụ aha na nọmba, ma kwe ka ọka iwu nye azịza iwu."
          ],
          steps: ["Gaa na LawHelp.org ma họrọ steeti gị, ma ọ bụ kpọọ Eldercare Locator.", "Jụọ maka enyemaka ịhazi ihe nketa n'efu ma ọ bụ nke dị ọnụ ala maka ndị okenye.", "Chịkọta ndepụta gị na ndị ị họọrọ.", "Dee opekata mpe ajụjụ ise.", "Jụọ ego ọ ga-efu na ihe ọ gụnyere tupu ịmalite."],
          words: [["Enyemaka iwu (legal aid)", "enyemaka iwu n'efu site n'otu ndị anaghị achọ uru maka ndị ruru eru."], ["Lawyer referral service", "ọrụ, nke otu ndị ọka iwu na-enyekarị, na-ejikọ gị na ọka iwu."], ["Trust", "ndokwa iwu ebe mmadụ na-elekọta ihe onwunwe maka ndị ọzọ; ọka iwu nwere ike ikwu ma ọ dị gị mkpa."]],
          slides: [
            { title: "Ebe ị ga-achọta enyemaka", bullets: ["LawHelp.org: họrọ steeti gị", "Eldercare Locator: 1-800-677-1116", "Bar association na-ezigara gị ọka iwu"] },
            { title: "Kpachara anya na fọm ịntanetị", bullets: ["Fọm ga-adaba n'iwu steeti gị", "Jụọ ọka iwu ma fọm dị mfe ezuola"] },
            { title: "Bute ihe ị kwadoro", bullets: ["Ihe ị nwere na ụgwọ ị ji", "Nlele ndị ritere uru", "Ndị ị họọrọ, ya na ndị nkwado"] },
            { title: "Bute ajụjụ", bullets: ["Will, trust ma ọ bụ ha abụọ?", "Kedu otu e si abịanye aka ma nwee ndị akaebe ebe a?", "Ego ole ka ọ ga-efu?"] }
          ],
          sources: [
            { name: "LawHelp.org: Find free legal help", url: "https://www.lawhelp.org/" },
            { name: "Eldercare Locator (Administration for Community Living)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Gaa na LawHelp.org, họrọ steeti gị ma chọta otu otu enyemaka iwu ma ọ bụ ọrụ iwu maka ndị okenye dị nso gị. Dee aha ya na nọmba ekwentị ya, ma dee ajụjụ ise ị ga-ajụ ha.",
          youCanNow: "ịchọta enyemaka iwu n'efu ma ọ bụ nke dị ọnụ ala dị nso gị ma bịa nzukọ ahụ n'ọnọdụ njikere.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ LawHelp.org?", options: ["Saịtị iji chọta enyemaka iwu n'efu site n'otu enyemaka iwu na-anaghị achọ uru na steeti gị", "Ngwa ide will n'ịntanetị", "Ụlọ akụ", "Ọfịs enyemaka gọọmentị"], answer: 0, why: "LawHelp.org na-ekwe ka ị họrọ steeti gị ka ị chọta enyemaka iwu n'efu." },
            { objective: "O5", q: "Ị chọrọ ka AI nyere gị aka ide ajụjụ gị maka ọka iwu. Gịnị ka ị ga-ahapụ?", options: ["Okwu \"will\"", "Ajụjụ gị", "Aha na nọmba akaụntụ", "Okwu \"ego ọ ga-efu\""], answer: 2, why: "AI nwere ike inye aka n'okwu doro anya, mana hapụ aha na nọmba ma kwe ka ọka iwu zaa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhazi na ichekwa akwụkwọ gị ndị dị mkpa",
          minutes: 5,
          goal: "Tinye akwụkwọ gị n'otu ebe nchekwa ma gwa ndị kwesịrị ekwesị ebe ha dị.",
          text: [
            "Atụmatụ na-enyere aka naanị ma ọ bụrụ na ndị mmadụ nwere ike ịchọta ya. Ọtụtụ ezinụlọ na-achọ will, inshọransị ma ọ bụ akwụkwọ ala ụlọ ruo ọtụtụ ụbọchị. Ị nwere ike ịzọpụta ha na nke ahụ.",
            "Mee otu faịlụ ma ọ bụ binder. Tinye n'ime ya, ma ọ bụ dee ebe a ga-achọta: will gị na akwụkwọ iwu ndị ọzọ, power of attorney gị na akwụkwọ ntụziaka ahụike gị, ndepụta ihe ị nwere na ụgwọ ị ji, inshọransị, akwụkwọ ala (deed) na akwụkwọ nwe ụgbọala (title), kaadị Medicare gị ma ọ bụ kaadị ahụike ndị ọzọ (mbipụta), na ndepụta ndị a ga-akpọ: ọka iwu gị, dọkịta gị, ụlọ akụ gị na ndị ị họpụtara.",
            "Jụọ ọka iwu gị ebe a ga-echekwa will mbụ e bịanyere aka na ya, n'ihi na iwu na nhọrọ dị iche. Nye health care proxy gị na dọkịta gị mbipụta akwụkwọ ntụziaka ahụike gị, ka ọ dịrị n'oge ihe mberede. Debe binder ahụ n'ebe nchekwa n'ụlọ nke executor gị maara.",
            "Dee ndetu otu peeji \"ebe akwụkwọ m dị\" ma nye ya ndị ị họpụtara. Lelee ihe niile ọzọ mgbe afọ ole na ole gachara na mgbe ihe ukwu mere na ndụ. Mgbe ị gbanwere ihe, gwa ezinụlọ gị, ma wepụ ụdị ochie ka onye ọ bụla ghara iji nke na-ezighi ezi."
          ],
          steps: ["Mee otu binder ma ọ bụ faịlụ maka akwụkwọ ndị dị mkpa.", "Tinye akwụkwọ ọ bụla, ma ọ bụ ndetu na-ekwu ebe ọ dị.", "Jụọ ọka iwu gị ebe a ga-edebe will mbụ.", "Nye proxy gị na dọkịta gị akwụkwọ ntụziaka ahụike gị.", "Dee ndetu \"ebe akwụkwọ m dị\" ma kesaa ya ndị ị họpụtara.", "Lelee ọzọ mgbe ihe ukwu mere na ndụ ma wepụ ụdị ochie."],
          words: [["Nke mbụ (original)", "akwụkwọ ahụ e bịanyere aka na ya n'onwe ya, ọ bụghị mbipụta."], ["Deed", "akwụkwọ iwu na-egosi onye nwe ụlọ ma ọ bụ ala."], ["Title", "akwụkwọ na-egosi onye nwe ụgbọala."]],
          slides: [
            { title: "Ndị mmadụ ga-enwe ike ịchọta ya", bullets: ["Ezinụlọ nwere ike ịchọ ruo ọtụtụ ụbọchị", "Otu binder na-azọpụta ha"] },
            { title: "Ihe na-aba na binder", bullets: ["Will, power of attorney, akwụkwọ ntụziaka ahụike", "Ndepụta ihe ị nwere na ụgwọ ị ji", "Inshọransị, deed, title, ndị a ga-akpọ"] },
            { title: "Ebe a ga-edebe ihe", bullets: ["Jụọ ọka iwu gị maka will mbụ", "Akwụkwọ ntụziaka ahụike: nye proxy na dọkịta", "Binder: ebe nchekwa executor gị maara"] },
            { title: "Gwa ha ma lelee ọzọ", bullets: ["Kesaa ndetu \"ebe akwụkwọ m dị\"", "Lelee ọzọ mgbe ihe ukwu mere", "Wepụ ụdị ochie"] }
          ],
          sources: [{ name: "MedlinePlus: Advance directives", url: "https://medlineplus.gov/advancedirectives.html" }],
          tryIt: "Ọrụ ikpeazụ: wuo faịlụ atụmatụ ihe nketa gị nwere ndepụta ihe ị nwere na ụgwọ ị ji, nlele ndị ritere uru gị, ndị ị ga-ahọpụta ya na ndị nkwado, opekata mpe ajụjụ ise maka ọka iwu ma ọ bụ enyemaka iwu, na ndetu otu peeji \"ebe akwụkwọ m dị\". Wee chọta otu ọfịs enyemaka iwu dị nso gị ma dee otu ị ga-esi kpọtụrụ ya.",
          youCanNow: "ịhazi akwụkwọ gị ndị dị mkpa, ichekwa ha nke ọma, na ịgwa ndị kwesịrị ekwesị ebe ha dị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji nye dọkịta gị mbipụta akwụkwọ ntụziaka ahụike gị?", options: ["Ka ọ dịrị n'oge ihe mberede", "Ka dọkịta wee gbanwee ya", "Iji kwụọ obere ego maka nlekọta", "Ọ dịghị mkpa"], answer: 0, why: "Proxy gị na dọkịta gị chọrọ mbipụta ka ọ dịrị mgbe ọ dị mkpa." },
            { objective: "O6", q: "Ị gbanwere will gị. Gịnị ka ị ga-eme ụdị ochie ya?", options: ["Debe ha abụọ na binder", "Zigara onye ikwu nke ochie", "Zoo nke ọhụrụ", "Soro ndụmọdụ ọka iwu gị ma hụ na onye ọ bụla anaghị eji nke ochie"], answer: 3, why: "Wepụ ụdị ochie ka onye ọ bụla ghara iji nke na-ezighi ezi, ma gwa ezinụlọ gị maka mgbanwe ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Kwado ma hazie",
        questions: [
          { objective: "O4", q: "Kedu otu nọmba akaụntụ ga-esi pụta na ndepụta ihe ị nwere?", options: ["Nọmba zuru ezu na okwuntughe", "Naanị mkpụrụ ọnụọgụ anọ ikpeazụ, enweghị okwuntughe", "E dere ya n'azụ faịlụ ahụ", "E tinyere ya n'ịntanetị maka ezinụlọ gị"], answer: 1, why: "Mkpụrụ ọnụọgụ anọ ikpeazụ na-egosi akaụntụ ahụ n'ekpughereghị ya." },
          { objective: "O4", q: "Kedu nke bụ ụgwọ?", options: ["Akaụntụ nchekwa ego gị", "Ụgbọala gị", "Inshọransị ndụ", "Ego fọdụrụ na kaadị kredit"], answer: 3, why: "Ụgwọ bụ ego ị ji." },
          { objective: "O5", q: "Ebee ka ị nwere ike ịchọ enyemaka iwu n'efu na steeti gị?", options: ["LawHelp.org", "Mgbasa ozi ọ bụla n'ịntanetị", "Njikọ n'ozi ederede", "Okwu mmadụ dere na soshal midia"], answer: 0, why: "LawHelp.org na-edepụta otu enyemaka iwu na-anaghị achọ uru site na steeti." },
          { objective: "O6", q: "Onye kwesịrị inweta mbipụta akwụkwọ ntụziaka ahụike gị?", options: ["Ọ dịghị onye", "Onye ọrụ ụlọ akụ gị", "Health care proxy gị na dọkịta gị", "Onye ọbịa n'ịntanetị"], answer: 2, why: "Ha chọrọ ya iji gbaso ọchịchọ gị n'oge ihe mberede." },
          { objective: "O6", q: "Ị gbanwere will gị. Gịnị ka ị kwesịrị ime ụdị ochie ya?", options: ["Debe ha abụọ na binder n'enweghị ndetu", "Nye onye agbata obi", "Zoo ya n'ime ụlọ ọzọ", "Soro ndụmọdụ ọka iwu gị ma hụ na onye ọ bụla anaghị eji nke ochie"], answer: 3, why: "Ụdị ochie nwere ike ime ka mgbagwoju anya dị n'ezinụlọ gị; ọka iwu gị nwere ike ikwu otu a ga-esi mee ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịhazi Ihe Nketa na Akwụkwọ Ọchịchọ (Will)",
    questions: [
      { objective: "O1", q: "Ihe nketa gị (estate) bụ:", options: ["Naanị ụlọ gị", "Naanị akaụntụ ụlọ akụ gị", "Ubi gị", "Ihe niile ị nwere, wepụ ụgwọ ị ji"], answer: 3, why: "Ihe nketa gụnyere ihe onwunwe gị niile, wepụ ụgwọ." },
      { objective: "O1", q: "Will na-ekwukarị:", options: ["Dọkịta ị na-ahụ", "Onye ga-enweta ngwongwo gị na onye ga-emezu ọchịchọ gị", "Mmefu ego gị kwa ọnwa", "Atụmatụ Medicare gị"], answer: 1, why: "Will na-akpọ aha ndị ga-eketa na executor." },
      { objective: "O1", q: "Nne ochie na-azụ ụmụ ụmụ ya abụọ. Gịnị ka will na-ejikarị eme maka ha?", options: ["Ọ dịghị ihe", "Ịkwụ ụgwọ akwụkwọ ha n'onwe ya", "Ịhọpụta onye nlekọta (guardian) maka ha", "Ịgbanwe akwụkwọ ọmụmụ ha"], answer: 2, why: "N'ọtụtụ ebe, will nwere ike ịhọpụta onye nlekọta maka ụmụaka na-erubeghị afọ 18." },
      { objective: "O1", q: "Gịnị mere will e dere na fọm n'efu nwere ike ọ gaghị arụ ọrụ?", options: ["O nwere ike ọ gaghị agbaso iwu ịbịanye aka na ndị akaebe ebe ị bi", "Fọm n'efu bụ ihe megidere iwu mgbe niile", "A ga-ede will n'agba agba", "Ọ dị mkpụmkpụ nke ukwuu"], answer: 0, why: "Steeti na mba ọ bụla nwere iwu nke ya maka will dị irè." },
      { objective: "O2", q: "Ego inshọransị ndụ na-agakarị n'aka:", options: ["Onye ọ bụla will kpọrọ aha", "Executor", "Onye a kpọrọ aha na fọm onye ritere uru", "Gọọmentị"], answer: 2, why: "Fọm onye ritere uru na-ekpebikarị ego ahụ." },
      { objective: "O2", q: "Olee mgbe ị kwesịrị ilele ndị ritere uru gị ọzọ?", options: ["Mgbe ọ bụla", "Naanị otu ugboro mgbe ị meghere akaụntụ ahụ", "Naanị mgbe ụlọ ọrụ ahụ kpọrọ", "Mgbe alụmdi na nwunye, alụkwaghịm, ọnwụ ma ọ bụ ọmụmụ mere"], answer: 3, why: "Mgbe ihe ukwu mere na ndụ ka fọm na-aga ochie." },
      { objective: "O2", q: "Contingent beneficiary bụ:", options: ["Onye nkwado ma ọ bụrụ na onye ritere uru mbụ anwụọla", "Ọka iwu gị", "Dọkịta gị", "Onye njikwa ụlọ akụ"], answer: 0, why: "Contingent beneficiary bụ onye nkwado." },
      { objective: "O3", q: "Financial power of attorney na-ahọpụta onye ga-:", options: ["Eme mkpebi ahụike", "Elekọta ego na ihe onwunwe gị ma ọ bụrụ na ị nweghị ike", "Agụpụta will gị n'olu dị elu", "Ahọrọ ụka gị"], answer: 1, why: "Onye nnọchite anya na-eme ihe n'aha gị n'okwu ego." },
      { objective: "O3", q: "Ọ bụrụ na enweghị financial power of attorney, ma ị nweghị ike ilekọta ego, ezinụlọ gị nwere ike:", options: ["Ghara ime ihe ọ bụla", "Ịga ụlọikpe ka a họpụta guardian ma ọ bụ conservator", "Ịkpọ ụlọ ọrụ redio", "Imechi akaụntụ gị niile"], answer: 1, why: "Ụlọikpe nwere ike iwe oge ma dị oke ọnụ; power of attorney na-egbochi ya." },
      { objective: "O3", q: "Living will na-ekwu:", options: ["Onye ga-enweta ụlọ gị", "Ego dị n'akaụntụ gị", "Ọgwụgwọ ị chọrọ ma ọ bụ ị achọghị mgbe ndụ na-abịa n'ọgwụgwụ", "Ndepụta ihe ị ga-azụ n'ahịa"], answer: 2, why: "Living will na-edekọ ọchịchọ ọgwụgwọ gị." },
      { objective: "O3", q: "Onye bụ ezigbo nhọrọ maka health care proxy?", options: ["Onye ga-agbaso ọchịchọ nke ya", "Onye ọbịa kpọrọ gị n'ekwentị", "Onye ọ bụla jụrụ", "Onye a pụrụ ịtụkwasị obi, a na-enweta, ga-agbaso ọchịchọ gị"], answer: 3, why: "Proxy gị ga-ekwuchitere gị, ọ bụghị onwe ya." },
      { objective: "O3", q: "E wezụga ọka iwu gị, onye ọzọ ka ị kwesịrị ịgwa okwu banyere ọchịchọ ahụike gị?", options: ["Dọkịta gị na health care proxy gị", "Onye na-akpọ oku ire ahịa", "Ọ dịghị onye", "Otu ndị soshal midia"], answer: 0, why: "Ha bụ ndị ga-eme ihe dị ka ọchịchọ gị si dị." },
      { objective: "O4", q: "Kedu nke kwesịrị ịbanye na ndepụta ihe ị nwere?", options: ["Okwuntughe gị zuru ezu", "Ụgbọala onye agbata obi gị", "PIN gị", "Ụlọ gị, akaụntụ, ụgbọala na ngwongwo dị oke ọnụ"], answer: 3, why: "Depụta ihe onwunwe ya na aha ụlọ ọrụ na mkpụrụ ọnụọgụ anọ ikpeazụ, ọ bụghị okwuntughe." },
      { objective: "O4", q: "Ị kwesịrị itinye ndepụta akaụntụ gị niile n'ime ngwa enyemaka AI?", options: ["Ee, iji chekwaa oge", "Mba; hapụ ozi nzuzo n'ime ngwa AI", "Ee, ma ọ bụrụ na AI rịọrọ", "Naanị na kọmputa ọba akwụkwọ"], answer: 1, why: "Edela nọmba nzuzo ma ọ bụ ozi akaụntụ n'ime ngwa AI mgbe ọ bụla." },
      { objective: "O5", q: "Kedu nọmba ekwentị na-eru Eldercare Locator?", options: ["1-800-677-1116", "911", "1-800-MEDICARE", "411"], answer: 0, why: "Eldercare Locator na-ejikọ ndị okenye na ọrụ ndị dị nso." },
      { objective: "O5", q: "Tupu i were ọka iwu, ajụjụ ezi uche bụ:", options: ["Kedu agba kacha amasị gị?", "Ị nwere ike ịkọ ọchịchọ m?", "Ego ole ka nke a ga-efu, gịnịkwa ka ọ gụnyere?", "Enwere m ike ịhapụ ịbịanye aka?"], answer: 2, why: "Ịmara ego ọ ga-efu tupu oge eruo na-egbochi ihe ijuanya." },
      { objective: "O5", q: "Kedu ezi ụzọ isi jiri ngwa enyemaka AI n'ịhazi ihe nketa?", options: ["Ide will iwu gị naanị ya", "Inyere gị aka ide ajụjụ gị n'okwu doro anya, n'enweghị aha ma ọ bụ nọmba", "Ichekwa okwuntughe gị", "Ikpebi onye ga-eketa"], answer: 1, why: "AI nwere ike inye aka n'okwu, mana azịza iwu na-esi n'aka ọka iwu." },
      { objective: "O6", q: "Ebee ka a ga-edebe will mbụ e bịanyere aka na ya?", options: ["Ebe ọ bụla, ọ dịghị mkpa", "N'ime ụgbọala", "Tụfuo ya mgbe e mere mbipụta", "Ebe ọka iwu gị kwuru, executor gị kwesịkwara ịmara ya"], answer: 3, why: "Iwu na nhọrọ dị iche; jụọ ọka iwu gị." },
      { objective: "O6", q: "Ndetu \"ebe akwụkwọ m dị\" kwesịrị ịga n'aka:", options: ["Onye ọ bụla n'ịntanetị", "Ọ dịghị onye", "Ndị ị họpụtara n'atụmatụ gị", "Onye na-akpọ oku ire ahịa"], answer: 2, why: "Ndị ga-eme ihe n'aha gị kwesịrị ịchọta akwụkwọ gị." },
      { objective: "O1", q: "Iwu gbasara ịhazi ihe nketa:", options: ["Dị iche na steeti ọ bụla na mba ọ bụla", "Bụ otu ihe n'ebe niile n'ụwa", "Anaghị agbanwe mgbe ọ bụla", "Na-emetụta naanị ndị ọgaranya"], answer: 0, why: "Iwu dị iche site n'ebe ruo n'ebe, ya mere gaa hụ ọka iwu ma ọ bụ enyemaka iwu ebe ị bi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      4,
      7,
      9,
      12,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ihe m nwere na ihe m ji",
        objective: "O4",
        notYet: "Ihe ndị bụ isi adịghị na ndepụta ahụ, ma ọ bụ ọ na-egosi nọmba akaụntụ zuru ezu ma ọ bụ okwuntughe.",
        meets: "Ndepụta ihe onwunwe na ụgwọ ya na aha ụlọ ọrụ na ụdị akaụntụ, na-eji naanị mkpụrụ ọnụọgụ anọ ikpeazụ.",
        exceeds: "Ọ na-edepụtakwa akaụntụ ịntanetị na anụ ụlọ, e chekwakwara ya n'ebe nchekwa."
      },
      {
        name: "Nlele ndị ritere uru",
        objective: "O2",
        notYet: "E leleghị ụfọdụ akaụntụ ma ọ bụ inshọransị.",
        meets: "E depụtara akaụntụ ma ọ bụ inshọransị ọ bụla nwere onye ritere uru, ya na onye a kpọrọ aha na onye nkwado.",
        exceeds: "E kara fọm ndị gaala ochie akara, a rịọkwala fọm ndozi."
      },
      {
        name: "Ndị a họpụtara",
        objective: "O3",
        notYet: "Otu ọrụ ma ọ bụ karịa adịghị, ma ọ bụ enweghị ndị nkwado.",
        meets: "Executor, onye nnọchite anya ego na onye nnọchite anya ahụike, onye ọ bụla nwere onye nkwado.",
        exceeds: "Agwala ndị a họọrọ okwu banyere ọrụ ha na ọchịchọ gị."
      },
      {
        name: "Ajụjụ maka ọka iwu",
        objective: "O5",
        notYet: "Ajụjụ erughị ise, ma ọ bụ enweghị ebe enyemaka iwu.",
        meets: "Opekata mpe ajụjụ ise doro anya, gụnyere ego ọ ga-efu, na otu ebe dị nso gị na-enye enyemaka iwu.",
        exceeds: "Akpọtụrụla ebe enyemaka iwu ahụ ma ọ bụ debe oge nzukọ."
      },
      {
        name: "Ebe akwụkwọ m dị",
        objective: "O6",
        notYet: "Enweghị ndetu, ma ọ bụ ọ hapụrụ ebe akwụkwọ ndị bụ isi dị.",
        meets: "Ndetu otu peeji na-ekwu ebe akwụkwọ ọ bụla dị mkpa dị.",
        exceeds: "E nyela ndị a họpụtara n'atụmatụ ahụ ndetu ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe dozigharịrị opekata mpe otu fọm onye ritere uru n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe zutere ọka iwu ma ọ bụ enyemaka iwu ma bịanye aka na will, power of attorney ma ọ bụ akwụkwọ ntụziaka ahụike",
      "Ndị na-amụ ihe kesara ezinụlọ ha ndetu \"ebe akwụkwọ m dị\""
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Faịlụ ma ọ bụ binder, akwụkwọ na mkpịsị ode",
      "Inshọransị, akwụkwọ akụkọ akaụntụ na will ma ọ bụ akwụkwọ ntụziaka ọ bụla dị adị nke onye na-amụ ihe (e debere na nzuzo)",
      "Ekwentị ma ọ bụ kọmputa iji chọta enyemaka iwu na LawHelp.org ma ọ bụ kpọọ Eldercare Locator",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, n'ọsọ nwayọọ, gbakwunyere oge n'ụlọ ịchịkọta akwụkwọ"
    ],
    facilitatorNotes: [
      "Enyela ndụmọdụ iwu ma ọ bụ nyere aka ide will; ihe ọmụmụ a na-akwado ndị na-amụ ihe maka ọka iwu ma ọ bụ enyemaka iwu.",
      "Ndị na-amụ ihe na-edebe akwụkwọ ha na nzuzo; anakọtala nọmba akaụntụ ma ọ bụ akwụkwọ mgbe ọ bụla.",
      "Ụfọdụ ndị na-amụ ihe nwere ike na-eru újú ma ọ bụ na-enwe nsogbu ikwu okwu banyere ọnwụ; mee ka olu gị dị nro ma bara uru.",
      "Chọta enyemaka iwu ma ọ bụ ọrụ iwu maka ndị okenye dị nso tupu nnọkọ ahụ ka ndị na-amụ ihe were ezi onye ha ga-akpọtụrụ pụọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-afcfta-cross-border-trade.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const AFCFTA = { name: "Odeakwụkwọ AfCFTA (Secretariat): Banyere AfCFTA (mba 55 nke AU, azụmahịa malitere 1 January 2021, Secretariat dị na Accra)", url: "https://au-afcfta.org/about/" };
const GTI = { name: "Odeakwụkwọ AfCFTA: Guided Trade Initiative (Mmemme Azụmahịa Eduzi, malitere 7 October 2022)", url: "https://au-afcfta.org/operational-instruments/guided-trade-initiative/" };
const ROO = { name: "Odeakwụkwọ AfCFTA: Iwu Mmalite Ngwaahịa (Rules of Origin: Annex 2 na Akwụkwọ Ntụzi Rules of Origin)", url: "https://au-afcfta.org/operational-instruments/rules-of-origin/" };
const NTB = { name: "Usoro AfCFTA maka ịkọ, nlekọta na iwepụ ihe mgbochi azụmahịa na-abụghị ụtụ (non-tariff barriers)", url: "https://www.tradebarriers.africa/" };
const PAPSS = { name: "Usoro Ịkwụ Ụgwọ na Mmezi Ego nke Africa niile (PAPSS)", url: "https://papss.com/" };
const ETLS = { name: "Usoro Ime ka Azụmahịa Dị Mfe nke ECOWAS (ETLS), ECOWAS Commission", url: "https://etls.ecowas.int/" };
const COMESA = { name: "COMESA: Azụmahịa na Kọstọm (gụnyere Simplified Trade Regime maka obere ndị ahịa)", url: "https://www.comesa.int/trade-customs-division-2/" };

module.exports = {
  id: "afr-afcfta-cross-border-trade-ig",
  lang: "ig",
  translationOf: "afr-afcfta-cross-border-trade",
  category: "Africa: Life and Work",
  name: "Ire Ahịa Gafere Ókè Mba: Obere Ndị Ahịa na AfCFTA",
  skills: "Ịkọwa AfCFTA na usoro azụmahịa mpaghara, Ịkwadebe akwụkwọ maka ọnụ ụzọ ókè mba gọọmentị, Ịgbakọ ọnụ ahịa ngwaahịa n'ego mba abụọ, Ịnata ụgwọ n'enweghị nsogbu gafee ókè mba, Ịkọ ụgwọ na-abụghị nke iwu na ihe mgbochi azụmahịa",
  outcome: "ịhazi ire ahịa gafere ókè mba nke kwekọrọ n'iwu, nke na-enweghị nsogbu ma na-eweta uru: ịlele iwu metụtara ngwaahịa gị, ịkwadebe akwụkwọ kwesịrị ekwesị, ịgbakọ ọnụ ahịa zuru ezu na ọnụ ahịa ire n'ego mba abụọ ahụ, ịhọrọ ụzọ dị mma isi nata ụgwọ, na ịmara ihe ị ga-eme ma ọ bụrụ na mmadụ arịọ gị ego na-abụghị nke iwu.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ahịa, ụmụ nwaanyị na-ere ahịa n'ahịa, ndị ọrụ aka na obere ndị na-emepụta ihe n'Africa niile ndị na-ere, ma ọ bụ chọrọ ire, n'obodo mba agbata obi: shea butter si Tamale gaa Ouagadougou, akwa si Lagos gaa Cotonou, akpụkpọ ụkwụ si Nairobi gaa Kampala, ma ọ bụ ihe nchọ mma si Dakar gaa Bamako.",
    "Isi 1 na-akọwa African Continental Free Trade Area (AfCFTA) na usoro mpaghara ndị na-enyeworị obere ndị ahịa aka, na akwụkwọ ị chọrọ n'ọnụ ụzọ ókè mba gọọmentị. Isi 2 bụ maka ego: ọnụ ahịa zuru ezu nke otu ngwaahịa, ịnata ụgwọ n'enweghị nsogbu, na ihe ị ga-eme maka ụgwọ na-abụghị nke iwu na igbu oge.",
    "Ụtụ, ụgwọ, fọm na oke dị iche site n'otu mba gaa na nke ọzọ, ma na-agbanwe. Ihe ọmụmụ a anaghị enye ọnụ ọgụgụ ụtụ ma ọ bụ ụgwọ ọ bụla. Ọ na-agwa gị ọfịs ị ga-ajụ, i lelee tupu i jee njem. Ọnụ ọgụgụ ego niile bụ naanị ọmụmaatụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma jiri ọrụ mechie. Obere nnwale na-esote nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Dee atụmatụ azụmahịa gafere ókè mba otu peeji maka otu ngwaahịa na otu ụzọ (nke gị, ma ọ bụ ọmụmaatụ dị ka shea butter si Tamale, Ghana, gaa Ouagadougou, Burkina Faso): ngwaahịa ahụ na ọnụ ụzọ ókè mba gọọmentị, iwu i lelere na ebe i lelere ha, ndepụta akwụkwọ ị ga-ebu, ọnụ ahịa zuru ezu na ọnụ ahịa ire gị n'ego mba abụọ ahụ, otu a ga-esi kwụọ gị ụgwọ na otu ị ga-esi zere aghụghọ, na ihe ị ga-eme na onye ị ga-akọrọ ma ọ bụrụ na mmadụ arịọ gị ego na-abụghị nke iwu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ahịa, ụmụ nwaanyị na-ere ahịa n'ahịa, ndị ọrụ aka na obere ndị na-emepụta ihe n'obodo na n'ebe dị nso n'ókè mba n'Africa niile (Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Burkina Faso, Cameroon na ndị ọzọ) ndị na-ere ma ọ bụ chọrọ ire n'obodo mba agbata obi.",
    startingPoint: "Ọtụtụ na-azụ ahịa gafere ókè mba ugbu a, ọtụtụ mgbe n'usoro na-abụghị nke gọọmentị, na-ebu ngwaahịa gafere ọnụ ụzọ ma ọ bụ na-eji ndị na-ebu ibu. Ọ bụ mmadụ ole na ole maara AfCFTA ma ọ bụ usoro mpaghara ha, akwụkwọ ndị na-eme ka ụtụ dị ala, otu esi agbakọ ọnụ ahịa ngwaahịa n'ego abụọ, ma ọ bụ ebe a na-akọ ụgwọ na-abụghị nke iwu.",
    gap: "Ndị ahịa na-anọghị n'usoro gọọmentị na-akwụkarị ụgwọ na-abụghị nke iwu, na-atụfu ngwaahịa n'ókè mba, na-ere n'ọnwụ mgbe ego mgbanwe na ụgwọ njem gachara, ma na-adaba n'aghụghọ ịkwụ ụgwọ. Ịmara iwu, ibu akwụkwọ kwesịrị ekwesị, ịgbakọ ọnụ ahịa nke ọma na ịkọ ihe mgbochi na-eme ka ha zụọ ahịa n'iwu, nweta uru karịa ma too.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu azụmahịa ọ bụla",
      "Ngwaọrụ: ekwentị Android nkịtị nwere data dị oke ọnụ; igwe mgbakọ na akwụkwọ ndetu",
      "Iwu, ụtụ, ụgwọ na oke dị iche n'otu mba na nke ọzọ ma na-agbanwe: ndị na-amụ ihe na-elele na kọstọm na ọfịs azụmahịa; ihe ọmụmụ a anaghị enye ọnụ ọgụgụ ụtụ ma ọ bụ ụgwọ",
      "Nchekwa ego: e kesaghị PIN ma ọ bụ okwuntughe; enweghị ndụmọdụ itinye ego (investment)",
      "A sụgharịkwara ihe ọmụmụ a n'asụsụ French na Arabic, ya mere ọmụmaatụ gụnyere ndị ahịa na-asụ French na ndị North Africa"
    ],
    prerequisites: "Ịgụ akwụkwọ nkịtị na iji ekwentị. \"Iji Mobile Money n'Enweghị Nsogbu\" na \"Idebanye Aha na Ịgba Obere Azụmahịa n'Afrịka\" na-enye aka mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ngwaahịa gị na mba ị chọrọ ire na ya", action: "ịkọwa ihe AfCFTA na usoro azụmahịa mpaghara gị nwere ike imere obere onye ahịa, ma kpọọ aha ọfịs ndị ị ga-eso lelee iwu dị ugbu a", standard: "na-akpọ aha opekata mpe ọfịs abụọ ma ọ bụ weebụsaịtị gọọmentị abụọ" },
    { id: "O2", condition: "Tupu i bufee ngwaahịa gafere ọnụ ụzọ ókè mba gọọmentị", action: "idepụta akwụkwọ na nzọụkwụ ị chọrọ maka ngwaahịa gị, dị ka rịsịtị, invoice, nkwupụta kọstọm na asambodo mmalite ngwaahịa", standard: "na a lelere akwụkwọ ọ bụla dị na ndepụta ahụ na kọstọm ma ọ bụ na tebụl ozi azụmahịa" },
    { id: "O3", condition: "Mgbe e nyere gị ụgwọ niile nke otu ngwaahịa na ọnụ mgbanwe ego", action: "ịgbakọ ọnụ ahịa zuru ezu nke otu ihe na ọnụ ahịa ire n'ego mba abụọ ahụ", standard: "gụnyere ụgwọ ọ bụla na uru, na mgbakọ ziri ezi" },
    { id: "O4", condition: "Mgbe onye na-azụ ahịa na mba ọzọ na-akwụ gị ụgwọ", action: "ịhọrọ ụzọ dị mma isi nata ego ahụ ma hụ ihe ịdọ aka na ntị nke aghụghọ ịkwụ ụgwọ", standard: "n'ekesaghị PIN mgbe ọ bụla, n'ezipụghịkwa ngwaahịa tupu e kwado na ego abatala" },
    { id: "O5", condition: "Mgbe mmadụ n'ókè mba ma ọ bụ nso ya rịọrọ ego na-abụghị nke iwu ma ọ bụ jidere ngwaahịa gị", action: "ịkọwa nzọụkwụ dị mma ị ga-eme ma kọọ nsogbu ahụ dị ka ihe mgbochi azụmahịa na-abụghị ụtụ (NTB)", standard: "na-akpọ aha ụzọ gọọmentị a na-esi akọ ya na eziokwu ndị ị ga-ede" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu na akwụkwọ",
      lessons: [
        {
          title: "Ihe AfCFTA pụtara nye obere onye ahịa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa n'okwu nke gị ihe AfCFTA bụ na otu o nwere ike isi nyere azụmahịa gị aka.",
          text: [
            "African Continental Free Trade Area (AfCFTA) bụ nkwekọrịta n'etiti mba 55 nke African Union (AU) iji mee otu nnukwu ahịa nwere ihe dị ka mmadụ ijeri 1.3. Azụmahịa n'okpuru ya malitere na 1 January 2021. Odeakwụkwọ ya (Secretariat) dị na Accra, Ghana.",
            "Isi echiche: ka oge na-aga, mba ndị sonyere na-ebelata ma ọ bụ na-ewepụ ụtụ mbubata na ngwaahịa e mere na mba ndị ọzọ so na ya, ma na-arụ ọrụ iwepụ ihe mgbochi ndị ọzọ, dị ka igbu oge ogologo na akwụkwọ agbakwunyere. Iji nweta ụtụ dị ala, ngwaahịa gị ga-\"esi\" na mba so na ya dịka iwu mmalite ngwaahịa (rules of origin) si kwuo. Ngwaahịa e zụtara naanị site na mpụga Africa ma ree ọzọ adabaghị.",
            "Ọ bụghị mba niile na-eme ya otu ụzọ ma ọ bụ n'otu ọsọ, a gụnyebeghịkwa ngwaahịa niile. Guided Trade Initiative, nke malitere na 7 October 2022, malitere ezi azụmahịa n'okpuru iwu AfCFTA n'otu ìgwè mba. Ya mere, tupu ị tụkwasị obi n'ụtụ dị ala, jụọ ụlọ ọrụ kọstọm gị, ministrị azụmahịa gị ma ọ bụ chamber of commerce (otu ndị azụmahịa), na weebụsaịtị AfCFTA.",
            "Ọbụlagodi ebe AfCFTA na-arụbeghị ọrụ maka ngwaahịa gị, usoro mpaghara nwere ike inyeworị gị aka. Nke ahụ bụ nkuzi na-esote."
          ],
          words: [["AfCFTA", "African Continental Free Trade Area: nkwekọrịta iji mee Africa otu nnukwu ahịa nwere ụtụ dị ala na ihe mgbochi ole na ole."], ["Ụtụ mbubata (tariff)", "ụtụ isi mba na-ana na ngwaahịa si mba ọzọ abata."], ["Iwu mmalite ngwaahịa (rules of origin)", "iwu na-ekpebi mba ngwaahịa \"si\", ka o wee nweta ụtụ dị ala."]],
          slides: [
            { title: "Ihe AfCFTA bụ", bullets: ["Mba 55 nke African Union, otu nnukwu ahịa", "Ihe dị ka mmadụ ijeri 1.3", "Azụmahịa malitere 1 January 2021; Secretariat dị na Accra"] },
            { title: "Ihe ọ ga-emere gị", bullets: ["Ụtụ mbubata dị ala ma ọ bụ enweghị ya na ngwaahịa e mere na mba so na ya", "Igbu oge na akwụkwọ agbakwunyere ga-ebelata ka oge na-aga", "Ahịa buru ibu n'agbata obi"] },
            { title: "Ihe ị ga-amata", bullets: ["Ngwaahịa ga-agbaso iwu mmalite ngwaahịa", "Mba dị iche iche na-eme ya n'ọsọ dị iche", "A gụnyebeghị ngwaahịa niile"] },
            { title: "Lelee tupu ị tụkwasị obi na ya", bullets: ["Ụlọ ọrụ kọstọm gị", "Ministrị azụmahịa ma ọ bụ chamber of commerce", "au-afcfta.org"] }
          ],
          sources: [AFCFTA, GTI, ROO],
          tryIt: "Dee otu ngwaahịa ị na-ere ma ọ bụ nwere ike ire, na otu mba agbata obi ị nwere ike ire ya. Wee dee ebe abụọ ị ga-elele ma AfCFTA ọ na-ebelata ụtụ na ngwaahịa ahụ.",
          youCanNow: "ikwu ihe AfCFTA bụ, otu o nwere ike isi nyere obere onye ahịa aka, na ebe ị ga-elele ma ọ metụtara ngwaahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ isi ihe AfCFTA chọrọ imere ndị ahịa?", options: ["Ịkara ọnụ ahịa ngwaahịa niile n'Africa", "Ibelata ụtụ na ihe mgbochi na ngwaahịa e mere na mba so na ya", "Ime otu ego maka Africa niile", "Ịkwụsị nlele niile n'ókè mba"], answer: 1, why: "AfCFTA chọrọ ibelata ụtụ na ihe mgbochi na ngwaahịa si na mba so na ya; ọ naghị akara ọnụ ahịa, emeghị otu ego, ọ naghịkwa akwụsị nlele." },
            { objective: "O1", q: "Onye ahịa zụtara ihe mkpuchi ekwentị e mere na mpụga Africa, chọọ ire ha n'agbata obi n'okpuru AfCFTA. Gịnị bụ eziokwu?", options: ["Ha ga-enweta enweghị ụtụ mgbe niile", "AfCFTA gụnyere naanị nri", "O yikarịrị ka ha agaghị adaba, n'ihi na e meghị ngwaahịa ahụ na mba so na ya", "Ha achọghị akwụkwọ ọ bụla"], answer: 2, why: "Dịka iwu mmalite ngwaahịa si kwuo, ngwaahịa e zụtara naanị na mpụga Africa ma ree ọzọ esighị na mba so na ya." }
          ]
        },
        {
          title: "Usoro mpaghara na-enyeworị obere ndị ahịa aka",
          objectives: ["O1"],
          minutes: 5,
          goal: "Chọta usoro azụmahịa mpaghara maka ụzọ gị na tebụl ma ọ bụ ọfịs na-akọwa ya.",
          text: [
            "Tupu AfCFTA, otu mpaghara akụ na ụba (regional economic communities) nke Africa emeworị ka azụmahịa dị mfe. Na West Africa, ECOWAS Trade Liberalisation Scheme (ETLS) na-ekwe ka ngwaahịa a kwadoro si mba ECOWAS gafee n'etiti mba so na ya n'ụtụ dị ala ma ọ bụ n'enweghị ụtụ. Senegal, Mali, Côte d'Ivoire, Ghana na Nigeria niile so na ECOWAS.",
            "Na East na Southern Africa, East African Community (EAC) na COMESA nwere Simplified Trade Regime (usoro azụmahịa dị mfe) maka obere ndị ahịa. Ha na-ekwe ka obere ibu nke ngwaahịa ndị e depụtara gafee n'akwụkwọ dị mfe, dị ka asambodo mmalite ngwaahịa dị mfe. Ụfọdụ ọnụ ụzọ ókè mba nwere tebụl ozi azụmahịa ebe ndị ọrụ na-akọwara obere ndị ahịa iwu n'efu.",
            "Oke ego, ndepụta ngwaahịa na fọm bụ usoro ọ bụla na-edozi ha, ha nwekwara ike ịgbanwe. Jụọ ọfịs kọstọm dị n'ọnụ ụzọ gị, tebụl ozi azụmahịa, ma ọ bụ otu ndị ahịa na-azụ gafere ókè mba (traders' association). Dee ihe ha gwara gị, ya na ụbọchị na aha onye ọrụ ahụ.",
            "Central Africa (dịka ọmụmaatụ Cameroon) na North Africa (dịka ọmụmaatụ Morocco, Egypt na Tunisia) nwekwara nkwekọrịta mpaghara nke ha. Jụọ ụlọ ọrụ kọstọm gị ndị metụtara ụzọ gị."
          ],
          steps: ["Dee ụzọ gị: site na mba olee, gafee n'ọnụ ụzọ olee, gaa na mba olee.", "Chọta otu mpaghara mba abụọ ahụ so na ya (dịka ọmụmaatụ ECOWAS, EAC ma ọ bụ COMESA).", "Jụọ ọfịs kọstọm, tebụl azụmahịa ma ọ bụ otu ndị ahịa usoro ngwaahịa gị nwere ike iji.", "Jụọ: ngwaahịa ndị olee dabara, oke ego olee metụtara ya, na fọm ma ọ bụ asambodo olee ị chọrọ.", "Dee azịza ndị ahụ ya na ụbọchị na aha onye ọrụ ahụ."],
          words: [["Otu mpaghara akụ na ụba", "ìgwè mba agbata obi na-arụkọ ọrụ ọnụ n'azụmahịa, dịka ọmụmaatụ ECOWAS, EAC ma ọ bụ COMESA."], ["Simplified Trade Regime", "ndokwa EAC ma ọ bụ COMESA na-ekwe ka obere ndị ahịa bufee obere ibu nke ngwaahịa e depụtara n'akwụkwọ dị mfe."], ["Ibu (consignment)", "otu ibu ma ọ bụ otu ngwaahịa ị na-ezipụ ma ọ bụ na-ebu."]],
          slides: [
            { title: "Usoro mpaghara na-enye aka ugbu a", bullets: ["West Africa: ECOWAS Trade Liberalisation Scheme (ETLS)", "East na Southern Africa: Simplified Trade Regime nke EAC na COMESA", "Central na North Africa: nkwekọrịta nke ha"] },
            { title: "Iwu dị mfe maka obere ndị ahịa", bullets: ["Obere ibu nke ngwaahịa e depụtara", "Akwụkwọ dị mfe, dị ka asambodo mmalite ngwaahịa dị mfe", "Tebụl ozi azụmahịa n'ụfọdụ ọnụ ụzọ ókè mba"] },
            { title: "Jụọ, ma dee ya", bullets: ["Ngwaahịa ndị olee dabara? Oke ego olee?", "Fọm ma ọ bụ asambodo olee?", "Dee ụbọchị na aha onye ọrụ ahụ"] }
          ],
          sources: [ETLS, COMESA],
          tryIt: "Maka ụzọ gị site na Nkuzi 1, dee otu mpaghara mba abụọ ahụ so na ya, na ajụjụ atọ ị ga-ajụ n'ọfịs kọstọm ma ọ bụ na tebụl azụmahịa.",
          youCanNow: "ịchọta usoro mpaghara maka ụzọ gị ma jụọ ọfịs kwesịrị ekwesị ajụjụ kwesịrị ekwesị banyere ya.",
          quickCheck: [
            { objective: "O1", q: "Usoro olee kacha metụta onye ahịa na-ebu shea butter si Ghana gaa Burkina Faso?", options: ["Simplified Trade Regime nke COMESA", "EAC Customs Union", "Ọ dịghị usoro ọ bụla", "ECOWAS Trade Liberalisation Scheme"], answer: 3, why: "Ghana na Burkina Faso abụọ so na mpaghara ECOWAS nke West Africa, ya mere ETLS bụ usoro ị ga-ajụ maka ya." },
            { objective: "O1", q: "Ị chọrọ ịmara oke ego maka asambodo dị mfe n'ụzọ gị. Gịnị ka ị ga-eme?", options: ["Jụọ ọfịs kọstọm ma ọ bụ tebụl azụmahịa dị n'ọnụ ụzọ ahụ ma dee azịza ya", "Chee echiche, n'ihi na ọ bụ otu ebe niile", "Jụọ onye na-anya bọs", "Jiri ọnụ ọgụgụ si n'ọnụ ụzọ enyi gị n'afọ gara aga"], answer: 0, why: "Oke dị iche n'usoro ọ bụla ma na-agbanwe, ya mere ọfịs kọstọm ma ọ bụ tebụl azụmahịa bụ ebe a ga-ajụ." }
          ]
        },
        {
          title: "Akwụkwọ ị na-ebu n'ọnụ ụzọ ókè mba gọọmentị",
          objectives: ["O2"],
          minutes: 5,
          goal: "Depụta akwụkwọ na nzọụkwụ maka ibufe ngwaahịa gị n'ọnụ ụzọ ókè mba gọọmentị.",
          text: [
            "Iji ọnụ ụzọ gọọmentị na-echebe gị. A na-edebanye ngwaahịa gị, ị nwere ike ịrịọ ụtụ dị ala n'okpuru usoro ndị ahụ, ị nwekwara ihe akaebe ma ọ bụrụ na ihe emehie. Ngwaahịa e zoro ezo gafee n'ụzọ na-abụghị nke gọọmentị nwere ike ịbụ nke a ga-anapụ, ọ dịghịkwa nchekwa ọ bụla ị ga-enwe.",
            "Akwụkwọ a na-ebukarị gụnyere: ID gị ma ọ bụ paspọọtụ; rịsịtị ma ọ bụ invoice na-egosi ihe i zụtara ma ọ bụ mere na ọnụ ya; ndepụta ngwaahịa gị (packing list); nkwupụta kọstọm (customs declaration), nke onye ọrụ ma ọ bụ onye clearing agent na-enyere gị aka idejupụta; na asambodo mmalite ngwaahịa mgbe ị chọrọ ụtụ dị ala. Nri, osisi, anụmanụ, ọgwụ na ihe nchọ mma nwekwara ike ịchọ asambodo ahụike, asambodo ahụike osisi (phytosanitary) ma ọ bụ asambodo nkwado ngwaahịa.",
            "A machibidoro ụfọdụ ngwaahịa ma ọ bụ gbochie ha kpamkpam. Jụọ tupu ị zụta ngwaahịa. Onye clearing agent nwere ike inye aka n'ibu ibu buru ibu, mana nweta rịsịtị mgbe niile maka ụgwọ gọọmentị ọ bụla, ma debe mbipụta akwụkwọ niile n'ekwentị gị na n'akwụkwọ.",
            "Ọmụmaatụ: Awa na-ere ncha e ji aka mee site na Dakar gaa Bamako. Ọ jụrụ ọfịs kọstọm akwụkwọ ọ chọrọ, nweta invoice ya na asambodo mmalite ngwaahịa, ma see foto akwụkwọ ọ bụla. N'ókè mba, ọ na-akwụ naanị ihe dị na rịsịtị gọọmentị."
          ],
          steps: ["Jụọ kọstọm akwụkwọ ngwaahịa gị chọrọ, na ma a machibidoro nke ọ bụla.", "Nweta rịsịtị ma ọ bụ invoice maka ngwaahịa gị, ma mee ndepụta ngwaahịa (packing list).", "Nweta asambodo mmalite ngwaahịa ma ọ bụrụ na ị chọrọ ụtụ dị ala n'okpuru otu usoro.", "Jụọ maka asambodo ahụike, osisi ma ọ bụ ngwaahịa maka nri, osisi, anụmanụ na ihe nchọ mma.", "Jiri ọnụ ụzọ gọọmentị, dejupụta nkwupụta kọstọm, ma debe rịsịtị maka ụgwọ ọ bụla.", "Debe mbipụta akwụkwọ ọ bụla n'akwụkwọ na dị ka foto n'ekwentị gị."],
          words: [["Nkwupụta kọstọm (customs declaration)", "fọm na-agwa kọstọm ngwaahịa ị na-ebu na ọnụ ha."], ["Asambodo mmalite ngwaahịa (certificate of origin)", "akwụkwọ na-egosi mba ngwaahịa gị si, ka i wee nweta ụtụ dị ala."], ["Clearing agent", "onye ma ọ bụ ụlọ ọrụ nwere ikike na-enyere ndị ahịa aka mezue akwụkwọ kọstọm, maka ụgwọ."], ["Asambodo phytosanitary", "asambodo ahụike osisi maka osisi, mkpụrụ, ọka, mkpụrụ osisi na akwụkwọ nri."]],
          slides: [
            { title: "Ihe mere ị ga-eji ọnụ ụzọ gọọmentị", bullets: ["A na-edebanye ngwaahịa; ị nwere ike ịrịọ ụtụ dị ala", "Ihe akaebe ma ọ bụrụ na ihe emehie", "Enwere ike ịnapụ ngwaahịa e zoro ezo bufee"] },
            { title: "Akwụkwọ a na-ebukarị", bullets: ["ID ma ọ bụ paspọọtụ; rịsịtị ma ọ bụ invoice", "Ndepụta ngwaahịa; nkwupụta kọstọm", "Asambodo mmalite ngwaahịa maka ụtụ dị ala"] },
            { title: "Akwụkwọ agbakwunyere maka ụfọdụ ngwaahịa", bullets: ["Nri, osisi, anụmanụ: asambodo ahụike ma ọ bụ nke osisi", "Ihe nchọ mma na ọgwụ: nkwado ngwaahịa", "A machibidoro ụfọdụ ngwaahịa: jụọ tupu ị zụta ngwaahịa"] },
            { title: "Chebe onwe gị", bullets: ["Rịsịtị maka ụgwọ gọọmentị ọ bụla", "Mbipụta n'akwụkwọ na foto n'ekwentị gị", "Clearing agent maka ibu buru ibu"] }
          ],
          sources: [ROO, ETLS],
          tryIt: "Mee ndepụta nlele akwụkwọ maka ngwaahịa gị na ụzọ gị: akwụkwọ ọ bụla i chere na ị chọrọ, ya na igbe ị ga-akara mgbe kọstọm ma ọ bụ tebụl azụmahịa kwadoro ya.",
          youCanNow: "idepụta akwụkwọ na nzọụkwụ ị chọrọ iji bufee ngwaahịa gị n'ọnụ ụzọ gọọmentị, ma debe ihe akaebe nke ụgwọ ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Akwụkwọ olee na-enyere gị aka ịrịọ ụtụ dị ala n'okpuru usoro azụmahịa?", options: ["Tiketị bọs", "Asambodo mmalite ngwaahịa", "Rịsịtị ekwentị", "Asambodo ụlọ akwụkwọ"], answer: 1, why: "Asambodo mmalite ngwaahịa na-egosi na ngwaahịa ahụ si na mba so na ya, nke bụ ihe ụtụ dị ala dabere na ya." },
            { objective: "O2", q: "I kwụrụ ụgwọ na kọstọm. Gịnị ka ị ga-enweta?", options: ["Ọ dịghị ihe; ụgwọ niile bụ nke na-abụghị iwu", "Ịkụ aka", "Rịsịtị gọọmentị, nke ị ga-edebe", "Nkwa na ha ga-ahụ gị oge ọzọ"], answer: 2, why: "Rịsịtị gọọmentị bụ ihe akaebe nke ezi ụgwọ ma na-echebe gị ma ọ bụrụ na ihe emehie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu na akwụkwọ",
        questions: [
          { objective: "O1", q: "Ebee ka ị ga-elele ma AfCFTA ọ na-ebelata ụtụ na ngwaahịa gị?", options: ["Ihe e dere na soshal midia", "Nwanne nne onye na-azụ ahịa", "Ụlọ ọrụ kọstọm gị na weebụsaịtị AfCFTA", "Onye ahịa ọ bụla n'ahịa"], answer: 2, why: "Kọstọm na Secretariat AfCFTA na-enye azịza gọọmentị dị ugbu a." },
          { objective: "O1", q: "Onye ahịa na-ebu akpụkpọ ụkwụ si Nairobi gaa Kampala. Usoro dị mfe olee ka ọ ga-ajụ maka ya?", options: ["ECOWAS Trade Liberalisation Scheme", "Ọ dịghị nke dị na East Africa", "Usoro Europe", "Simplified Trade Regime nke EAC ma ọ bụ COMESA"], answer: 3, why: "Kenya na Uganda dị na East Africa, ebe EAC na COMESA nwere usoro dị mfe maka obere ndị ahịa." },
          { objective: "O2", q: "Gịnị mere ọnụ ụzọ gọọmentị ji ka ụzọ ọhịa mma?", options: ["A na-edebanye ngwaahịa gị, ị nwekwara ike ịrịọ ụtụ dị ala na nchekwa", "Ọ na-adị ọsọ mgbe niile", "Ọ dịghị onye na-elele ihe ọ bụla", "Ọ bụ n'efu mgbe niile"], answer: 0, why: "Ọnụ ụzọ gọọmentị na-edebanye ngwaahịa, na-ekwe ka i jiri usoro azụmahịa, ma na-enye gị ihe akaebe na nchekwa." },
          { objective: "O2", q: "Kofi ga-ebu azụ a mịrị amị gaa Togo. Akwụkwọ agbakwunyere olee ka o nwere ike ịchọ?", options: ["Akwụkwọ ikike ịnya ụgbọ ala maka ụgbọ ibu ọ naghị anya", "Asambodo ahụike maka nri", "Akwụkwọ akaebe ụlọ akwụkwọ", "Ọ dịghị ihe agbakwunyere maka nri"], answer: 1, why: "Nri, ngwaahịa anụmanụ na nke osisi na-achọkarị asambodo ahụike ma ọ bụ nke osisi; ọ ga-ajụ kọstọm." },
          { objective: "O2", q: "Kedu ụzọ kacha mma isi debe akwụkwọ gị?", options: ["Naanị n'isi gị", "Nye ha onye na-ebu ibu", "Tụfuo ha mgbe i gafere ókè mba", "N'akwụkwọ na dị ka foto n'ekwentị gị"], answer: 3, why: "Idebe ụdị abụọ ahụ pụtara na ị ka nwere ihe akaebe ma ọ bụrụ na otu efuo." }
        ]
      }
    },
    {
      name: "Isi 2: Ego, ịkwụ ụgwọ na nsogbu n'ókè mba",
      lessons: [
        {
          title: "Ịgbakọ ọnụ ahịa ngwaahịa gafere ókè mba n'ego abụọ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Gbakọọ ọnụ ahịa zuru ezu nke otu ihe na ọnụ ahịa ire n'ego mba abụọ ahụ.",
          text: [
            "Ọtụtụ ndị ahịa na-atụfu ego gafere ókè mba n'ihi na ha na-agụ naanị ọnụ ngwaahịa. Gụọ ihe niile: ngwaahịa, ngwugwu, njem ruo n'ókè mba na gafee ya, ibunye ibu, ụtụ na ụgwọ gọọmentị (nke i lelere na kọstọm), clearing agent, nchekwa ngwaahịa, ekwentị na data gị, nri na ebe obibi gị n'oge njem, na obere ego agbakwunyere maka ihe ga-efu.",
            "Gbakọta ụgwọ niile ma kee ya na ọnụ ọgụgụ ihe ị ga-enwe ike ire n'ezie. Nke ahụ bụ ọnụ ahịa otu ihe. Gbakwunye uru gị iji nweta ọnụ ahịa ire. Wee gbanwee ya n'ego onye na-azụ ahịa site n'iji ọnụ mgbanwe ego nke taa, ma lelee ọnụ ahịa ngwaahịa yiri ya n'ahịa ahụ.",
            "Ọmụmaatụ (ọnụ ọgụgụ bụ naanị ọmụmaatụ): Ama zụtara ma kwakọọ ite shea butter 100 na Tamale maka GHS 2,000 n'ozuzu. Njem, ibunye ibu na ebe obibi bụ GHS 600. Ụgwọ gọọmentị o lelere na kọstọm: GHS 200. Ngụkọta GHS 2,800, ya bụ GHS 28 maka otu ite. Ọ gbakwunyere GHS 7 uru: GHS 35. Ọ bụrụ na ọnụ mgbanwe ego nke ụbọchị ahụ bụ 1 GHS = 40 XOF, nke ahụ bụ 1,400 XOF maka otu ite. Ọ na-elele na ụlọ ahịa na Ouagadougou na-ere ite yiri ya ihe dị ka ọnụ ahụ.",
            "Ọnụ mgbanwe ego na-agbanwe kwa ụbọchị. Lelee ọnụ ahụ n'ụbọchị ị na-ere na n'ụbọchị ị na-agbanwe ego, ma kwekọrịta na onye na-azụ ahịa n'ego olee ka ọnụ ahịa ahụ dị."
          ],
          steps: ["Depụta ụgwọ ọ bụla nke ngwaahịa ahụ, site n'ịzụta ruo n'ire.", "Gbakọta ha iji nweta ngụkọta ụgwọ.", "Kee ya na ọnụ ọgụgụ ihe ị ga-enwe ike ire n'ezie: ọnụ ahịa otu ihe.", "Gbakwunye uru gị: ọnụ ahịa ire n'ego gị.", "Gbanwee ya n'ego onye na-azụ ahịa n'ọnụ mgbanwe nke taa, ma tụnyere ya na ọnụ ahịa dị n'ahịa ahụ."],
          words: [["Ọnụ mgbanwe ego (exchange rate)", "ego ole nke otu ụdị ego ị na-enweta maka otu nke ụdị ọzọ, dịka ọmụmaatụ XOF ole maka 1 GHS."], ["Ọnụ ahịa otu ihe", "ngụkọta ụgwọ nke otu ngwaahịa e kere na ọnụ ọgụgụ ihe ị ga-ere."], ["Landed cost", "ọnụ ahịa zuru ezu nke ngwaahịa mgbe ọ rutere n'ahịa onye na-azụ ya, gụnyere njem na ụtụ."]],
          slides: [
            { title: "Gụọ ụgwọ ọ bụla", bullets: ["Ngwaahịa, ngwugwu, njem, ibunye ibu", "Ụtụ na ụgwọ gọọmentị, agent, nchekwa ngwaahịa", "Ekwentị, nri, ebe obibi, na obere ego maka ihe ga-efu"] },
            { title: "Site n'ụgwọ ruo n'ọnụ ahịa", bullets: ["Ngụkọta ụgwọ / ihe ị ga-ere = ọnụ ahịa otu ihe", "Ọnụ ahịa otu ihe + uru = ọnụ ahịa ire", "Wee gbanwee ya n'ego onye na-azụ ahịa"] },
            { title: "Ọmụmaatụ (ọnụ ọgụgụ bụ naanị ọmụmaatụ)", bullets: ["Ite 100: GHS 2,800 n'ozuzu = GHS 28 otu", "Gbakwunye GHS 7 uru = GHS 35", "Na 1 GHS = 40 XOF: 1,400 XOF maka otu ite"] },
            { title: "Leba anya n'ọnụ mgbanwe ego", bullets: ["Ọnụ mgbanwe na-agbanwe kwa ụbọchị", "Lelee n'ụbọchị ị na-ere na n'ụbọchị ị na-agbanwe ego", "Kwekọrịta na onye na-azụ ahịa n'ego olee"] }
          ],
          tryIt: "Gbakọọ ọnụ ahịa otu ngwaahịa gị maka ụzọ gị: depụta ụgwọ ọ bụla, chọta ọnụ ahịa otu ihe, gbakwunye uru gị, ma dee ọnụ ahịa ahụ n'ego abụọ ahụ site n'iji ọnụ mgbanwe nke taa.",
          youCanNow: "ịgbakọ ọnụ ahịa zuru ezu nke otu ihe na ngwaahịa gafere ókè mba na ọnụ ahịa ire n'ego mba abụọ ahụ.",
          quickCheck: [
            { objective: "O3", q: "Akpa 50 na-efu NGN 250,000 n'ozuzu, gụnyere njem na ụgwọ. Gịnị bụ ọnụ ahịa otu akpa?", options: ["NGN 500", "NGN 50,000", "NGN 2,500", "NGN 5,000"], answer: 3, why: "250,000 e kere na akpa 50 bụ 5,000 maka otu akpa." },
            { objective: "O3", q: "Kedu ụgwọ ndị ahịa na-echefukarị?", options: ["Ebe obibi, nri na ihe furu efu n'oge njem", "Ọnụ ngwaahịa", "Ọnụ ahịa ire", "Ọnụ ọgụgụ ihe"], answer: 0, why: "Ụgwọ njem dị ka ebe obibi, nri na ihe furu efu dị mfe ichefu, ha na-erikwa uru." }
          ]
        },
        {
          title: "Ịnata ụgwọ n'enweghị nsogbu gafee ókè mba",
          objectives: ["O4"],
          minutes: 5,
          goal: "Họrọ ụzọ dị mma isi nata ụgwọ site n'aka onye na-azụ ahịa na mba ọzọ ma hụ aghụghọ ịkwụ ụgwọ.",
          text: [
            "Ego ọcha (cash) n'ókè mba nwere ihe egwu: a nwere ike ịpụnara gị ya, ịgbanwe ego n'okporo ụzọ nwekwara ike inye gị ọnụ ọjọọ ma ọ bụ ego adịgboroja. Ụzọ ndị ka mma gụnyere ịnyefe ego site n'ụlọ akụ (bank transfer), ọrụ mobile money na-ezipụ ego gafee ókè mba n'ụzọ gị, na usoro ịkwụ ụgwọ dị ka PAPSS (Pan-African Payment and Settlement System), nke na-ekwe ka onye na-akwụ ụgwọ n'otu mba Africa kwụọ n'ego obodo ya, onye na-anata ya enwetakwa ego obodo ya, site n'ụlọ akụ na ndị na-enye ọrụ ịkwụ ụgwọ sonyere na ya. Jụọ ụlọ akụ gị ma ọ bụ onye na-enye gị mobile money ihe na-arụ ọrụ n'ụzọ gị na ọnụ ya.",
            "Maka onye ọhụrụ na-azụ ahịa, rịọ ego mbụ (deposit) tupu i zipụ, ma ọ bụ ụgwọ zuru ezu tupu i nyefee ngwaahịa ahụ. Lelee na ego ahụ abatala n'ezie n'akaụntụ gị, site n'ilele ego dị n'akaụntụ gị n'onwe gị, ọ bụghị site n'ịtụkwasị obi n'ozi onye na-azụ ahịa zitere gị.",
            "Ihe ịdọ aka na ntị nke aghụghọ: onye na-azụ ahịa na-ezitere gị ozi adịgboroja \"a natala ụgwọ\" ma ọ bụ screenshot; onye na-ekwu na o zitere ego karịrị akarị na mberede ma rịọ gị ka i zighachi ihe fọrọ; onye ọ bụla na-arịọ PIN gị, okwuntughe ma ọ bụ koodu e zitere n'ekwentị gị; na onye na-azụ ahịa na-eme ka ị ngwa ngwa nyefee ngwaahịa tupu i lelee. Ezi ụlọ akụ ma ọ bụ onye na-enye mobile money anaghị arịọ PIN gị mgbe ọ bụla."
          ],
          steps: ["Kwekọrịta n'ọnụ ahịa, ego olee na ụzọ ịkwụ ụgwọ n'ederede.", "Rịọ onye ọhụrụ na-azụ ahịa ego mbụ ma ọ bụ ụgwọ zuru ezu tupu ihe ọ bụla.", "Lelee ego dị n'akaụntụ gị n'onwe gị iji kwado na ego ahụ abatala.", "Naanị mgbe ahụ ka ị ga-enyefe ngwaahịa ahụ, ma nye rịsịtị.", "Ekesala PIN gị, okwuntughe ma ọ bụ koodu e zitere n'ekwentị gị mgbe ọ bụla."],
          words: [["PAPSS", "Pan-African Payment and Settlement System: na-ekwe ka a kwụọ ụgwọ n'etiti mba Africa n'ego obodo, site n'ụlọ akụ na ndị na-enye ọrụ ịkwụ ụgwọ sonyere na ya."], ["Ego mbụ (deposit)", "akụkụ ọnụ ahịa a kwụrụ tupu i zipụ ngwaahịa."], ["PIN", "nọmba nzuzo maka kaadị ụlọ akụ gị ma ọ bụ akaụntụ mobile money gị. Ekesala ya mgbe ọ bụla."]],
          slides: [
            { title: "Ka mma karịa ego ọcha n'ókè mba", bullets: ["Ịnyefe ego site n'ụlọ akụ", "Mobile money gafere ókè mba n'ụzọ gị", "PAPSS: kwụọ ma nata n'ego obodo site n'ụlọ akụ"] },
            { title: "Nata ụgwọ tupu i nyefee", bullets: ["Onye ọhụrụ na-azụ ahịa: ego mbụ ma ọ bụ ụgwọ zuru ezu tupu", "Lelee ego dị n'akaụntụ gị n'onwe gị", "Wee nyefee ngwaahịa ma nye rịsịtị"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ", bullets: ["Ozi adịgboroja \"a natala ụgwọ\" ma ọ bụ screenshot", "\"Ezitere m karịa, zighachi ya\"", "Na-arịọ PIN ma ọ bụ koodu gị; na-eme ka ị ngwa ngwa"] },
            { title: "Cheta", bullets: ["Ezi onye na-enye ọrụ anaghị arịọ PIN gị", "Ekesala koodu e zitere n'ekwentị gị mgbe ọ bụla"] }
          ],
          sources: [PAPSS],
          tryIt: "Dee iwu ịkwụ ụgwọ maka azụmahịa gị n'ahịrị atọ: ụzọ ị na-anabata, mgbe ị na-enyefe ngwaahịa, na otu ị na-esi elele na ego abatala. Jụọ ụlọ akụ gị ma ọ bụ onye na-enye gị mobile money ọrụ gafere ókè mba na-arụ ọrụ n'ụzọ gị.",
          youCanNow: "ịhọrọ ụzọ dị mma isi nata ụgwọ site n'aka onye na-azụ ahịa na mba ọzọ ma hụ ihe ịrịba ama nke aghụghọ ịkwụ ụgwọ.",
          quickCheck: [
            { objective: "O4", q: "Onye ọhụrụ na-azụ ahịa na Abidjan zitere screenshot na-ekwu na ọ kwụọla. Gịnị ka ị ga-eme tupu i zipụ ngwaahịa?", options: ["Zipụ ngwaahịa ozugbo", "Lelee ego dị n'akaụntụ gị n'onwe gị iji kwado na ego abatala", "Rịọ ya screenshot ọzọ", "Zitere ya PIN gị ka o lelee"], answer: 1, why: "Screenshot nwere ike ịbụ adịgboroja; naanị ego dị n'akaụntụ gị n'onwe gị na-egosi na ego abatala." },
            { objective: "O4", q: "Onye na-azụ ahịa kwuru na o zitere karịa ma rịọ gị ka i zighachi ihe fọrọ. Gịnị ka nke a yikarịrị?", options: ["Nkwụghachi ego nkịtị", "Mperi ụlọ akụ ị ga-edozi ngwa ngwa", "Aghụghọ a na-ahụkarị: lelee ego dị n'akaụntụ gị ma gwa onye na-enye gị ọrụ", "Ụtụ isi"], answer: 2, why: "\"Ezitere m karịa, zighachi ya\" bụ aghụghọ a ma ama; lelee ego dị n'akaụntụ gị ma kpọọ nọmba gọọmentị nke onye na-enye gị ọrụ." }
          ]
        },
        {
          title: "Ụgwọ na-abụghị nke iwu, igbu oge na atụmatụ azụmahịa gị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kọwaa nzọụkwụ dị mma ị ga-eme mgbe a rịọrọ gị ego na-abụghị nke iwu, ma kọọ ya dị ka ihe mgbochi azụmahịa na-abụghị ụtụ.",
          text: [
            "Ihe mgbochi azụmahịa na-abụghị ụtụ (non-tariff barrier, NTB) bụ ihe ọ bụla na-abụghị ụtụ nke na-eme ka azụmahịa sie ike: ụgwọ na-abụghị nke iwu n'ebe nchekwa okporo ụzọ (roadblock), igbu oge ogologo, akwụkwọ na-adịghị n'iwu, ma ọ bụ ngwaahịa e jidere n'enweghị ihe kpatara ya. AfCFTA nwere usoro n'ịntanetị, tradebarriers.africa, ebe onye ahịa ọ bụla, gụnyere ndị ahịa na-anọghị n'usoro gọọmentị, ụmụ nwaanyị na ndị ntorobịa, nwere ike ịkọ NTB. Akụkọ ndị ahụ na-aga n'aka ndị focal point nke mba na Secretariat AfCFTA ka e soro ha.",
            "Ọ bụrụ na mmadụ arịọ ego n'enweghị rịsịtị: nọrọ jụụ ma nwee nkwanye ugwu, ma buru nchekwa gị ụzọ. Jụọ ụgwọ gọọmentị na rịsịtị. Rịọ ka gị na onye isi ndị ọrụ ahụ kwurịta okwu, ma ọ bụ na tebụl ozi azụmahịa. Esela okwu n'ụzọ ga-etinye gị n'ihe egwu.",
            "Mgbe e mechara, dee eziokwu ndị ahụ: ụbọchị, oge, ebe, ihe a rịọrọ, ego ole, na aha ma ọ bụ nọmba baajị ọ bụla i hụrụ. Kọọ ya na tradebarriers.africa (n'ịntanetị ma ọ bụ site n'ụzọ ekwentị ya), n'ahịrị mkpesa nke ụlọ ọrụ kọstọm gị, ma ọ bụ site n'otu ndị ahịa gị. Ụmụ nwaanyị na-azụ ahịa ndị a na-akpagbu nwekwara ike ịrịọ otu ha ma ọ bụ otu ụmụ nwaanyị na-azụ ahịa maka enyemaka.",
            "Ugbu a, tinye ha niile ọnụ. Atụmatụ azụmahịa gafere ókè mba gị nwere: ngwaahịa na ọnụ ụzọ ókè mba, iwu i lelere, akwụkwọ gị, ọnụ ahịa zuru ezu na ọnụ ahịa ire n'ego abụọ, otu a ga-esi kwụọ gị ụgwọ, na ihe ị ga-eme maka ụgwọ na-abụghị nke iwu."
          ],
          steps: ["Nọrọ jụụ ma nwee nkwanye ugwu; nchekwa gị bụ ihe mbụ.", "Jụọ ụgwọ gọọmentị na rịsịtị, ma ọ bụ onye isi ndị ọrụ ma ọ bụ tebụl azụmahịa.", "Dee eziokwu ndị ahụ: ụbọchị, oge, ebe, ego ole, aha ma ọ bụ nọmba baajị.", "Kọọ ya na tradebarriers.africa, na kọstọm, ma ọ bụ site n'otu ndị ahịa gị.", "Tinye nzọụkwụ ndị a n'atụmatụ azụmahịa gafere ókè mba gị."],
          words: [["Ihe mgbochi azụmahịa na-abụghị ụtụ (NTB)", "ihe ọ bụla na-abụghị ụtụ nke na-eme ka azụmahịa sie ike, dị ka ụgwọ na-abụghị nke iwu, igbu oge ogologo ma ọ bụ akwụkwọ agbakwunyere."], ["Focal point", "onye ma ọ bụ ọfịs dị na mba ọ bụla na-eso akụkọ NTB."]],
          slides: [
            { title: "Gịnị bụ ihe mgbochi na-abụghị ụtụ?", bullets: ["Ụgwọ na-abụghị nke iwu n'ebe nchekwa okporo ụzọ ma ọ bụ n'ókè mba", "Igbu oge ogologo; akwụkwọ na-adịghị n'iwu", "Ngwaahịa e jidere n'enweghị ihe kpatara ya"] },
            { title: "Ọ bụrụ na a rịọ gị ego n'enweghị rịsịtị", bullets: ["Nọrọ jụụ ma nwee nkwanye ugwu: nchekwa bụ ihe mbụ", "Jụọ ụgwọ gọọmentị na rịsịtị", "Rịọ onye isi ndị ọrụ ma ọ bụ tebụl azụmahịa"] },
            { title: "Dee ya, wee kọọ ya", bullets: ["Ụbọchị, oge, ebe, ego ole, aha ma ọ bụ baajị", "tradebarriers.africa: n'ịntanetị ma ọ bụ site n'ekwentị", "Ahịrị mkpesa kọstọm ma ọ bụ otu ndị ahịa"] },
            { title: "Atụmatụ azụmahịa gafere ókè mba gị", bullets: ["Ngwaahịa, ụzọ, iwu i lelere; akwụkwọ", "Ọnụ ahịa zuru ezu na ọnụ ahịa ire n'ego abụọ", "Ụzọ ịkwụ ụgwọ; ihe ị ga-eme maka ụgwọ na-abụghị nke iwu"] }
          ],
          sources: [NTB, AFCFTA],
          tryIt: "Dee atụmatụ azụmahịa gafere ókè mba gị otu peeji, dịka a kọwara n'ọrụ ikpeazụ. Gbakwunye eziokwu ị ga-ede na ebe ị ga-akọ ụgwọ na-abụghị nke iwu.",
          youCanNow: "imeso ụgwọ na-abụghị nke iwu n'enweghị nsogbu, kọọ ya dị ka ihe mgbochi azụmahịa na-abụghị ụtụ, ma dee atụmatụ azụmahịa gafere ókè mba zuru ezu.",
          quickCheck: [
            { objective: "O5", q: "Ebee ka obere onye ahịa nwere ike ịkọ ụgwọ na-abụghị nke iwu n'ókè mba Africa?", options: ["tradebarriers.africa, kọstọm ma ọ bụ otu ndị ahịa", "Naanị na soshal midia", "Ọ dịghị ebe; a pụghị ịkọ ya", "Nye onye rịọrọ ego ahụ"], answer: 0, why: "Usoro NTB nke AfCFTA, ahịrị mkpesa kọstọm na otu ndị ahịa bụ ụzọ gọọmentị." },
            { objective: "O5", q: "Gịnị ka ị ga-ede mgbe a rịọrọ gị ụgwọ na-abụghị nke iwu?", options: ["Naanị otu ọ dị gị n'obi", "Ụbọchị, oge, ebe, ego ole na aha ma ọ bụ nọmba baajị ọ bụla", "Ọ dịghị ihe; chefuo ya", "Naanị ọnụ ngwaahịa gị"], answer: 1, why: "Eziokwu doro anya na-eme akụkọ a ga-enwe ike iso." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ego, ịkwụ ụgwọ na nsogbu",
        questions: [
          { objective: "O3", q: "Ngụkọta ụgwọ ngwaahịa bụ XAF 300,000 maka ihe 60. Ị gbakwunyere XAF 1,000 uru n'otu ihe. Gịnị bụ ọnụ ahịa ire?", options: ["XAF 6,000", "XAF 5,000", "XAF 1,000", "XAF 7,000"], answer: 0, why: "300,000 / 60 = 5,000 ọnụ ahịa otu ihe; gbakwunye 1,000 uru = 6,000." },
          { objective: "O3", q: "Gịnị mere ị ga-eji lelee ọnụ mgbanwe ego n'ụbọchị ị na-ere?", options: ["Ọnụ mgbanwe anaghị agbanwe agbanwe", "Onye na-azụ ahịa na-akara ya", "Ọnụ mgbanwe na-agbanwe kwa ụbọchị ma nwee ike iripịa uru gị", "Ọ bụ naanị maka ụlọ akụ"], answer: 2, why: "Ọnụ mgbanwe ego na-agbanwe kwa ụbọchị, ya mere ọnụ ochie nwere ike ime ka uru ghọọ ọnwụ." },
          { objective: "O4", q: "Arịrịọ olee kwesịrị ime ka ị kwụsị ozugbo?", options: ["\"Enwere m ike ịkwụ site n'ụlọ akụ?\"", "\"Zitere m rịsịtị.\"", "\"Gịnị bụ ọnụ ahịa gị na XOF?\"", "\"Gwa m koodu anyị zitere n'ekwentị gị ugbu a.\""], answer: 3, why: "Ọ dịghị ezi onye na-azụ ahịa ma ọ bụ onye na-enye ọrụ chọrọ koodu ma ọ bụ PIN gị; ịrịọ ya bụ ihe ịrịba ama nke aghụghọ." },
          { objective: "O4", q: "Gịnị bụ PAPSS?", options: ["Fọm kọstọm", "Usoro ịkwụ ụgwọ n'etiti mba Africa n'ego obodo site n'ụlọ akụ na ndị na-enye ọrụ", "Ụdị ekwentị", "Ọnụ ụzọ ókè mba"], answer: 1, why: "PAPSS na-ekwe ka onye na-akwụ ụgwọ kwụọ n'ego obodo ya, onye na-anata enweta ego obodo ya, gafee ókè mba Africa." },
          { objective: "O5", q: "Onye ọrụ rịọrọ ego n'enweghị rịsịtị. Gịnị bụ nzọụkwụ mbụ kacha enweghị nsogbu?", options: ["Nọrọ jụụ, jụọ ụgwọ gọọmentị na rịsịtị ma ọ bụ onye isi ndị ọrụ", "Tie mkpu ma jụ ịpụ", "Gbafee ókè mba", "Kwụọ okpukpu abụọ ka ọ dị ọsọ"], answer: 0, why: "Ịnọ jụụ na-echebe gị, ịjụ rịsịtị ma ọ bụ onye isi ndị ọrụ na-agbasokwa ụzọ gọọmentị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ire Ahịa Gafere Ókè Mba: Obere Ndị Ahịa na AfCFTA",
    questions: [
      { objective: "O1", q: "Mba African Union ole so na AfCFTA?", options: ["15", "55", "8", "100"], answer: 1, why: "AfCFTA na-akpọkọta mba 55 nke African Union." },
      { objective: "O1", q: "Olee mgbe azụmahịa n'okpuru AfCFTA malitere?", options: ["1 January 2021", "1 January 2000", "Ọ malitebeghị", "1 January 2030"], answer: 0, why: "Azụmahịa n'okpuru AfCFTA malitere na 1 January 2021." },
      { objective: "O1", q: "Gịnị na-ekpebi ma ngwaahịa gị ọ ga-enweta ụtụ dị ala nke AfCFTA?", options: ["Agba ngwugwu ya", "Otu i si aga njem", "Iwu mmalite ngwaahịa (rules of origin)", "Ụbọchị nke izu"], answer: 2, why: "Ngwaahịa ga-agbaso iwu mmalite ngwaahịa, na-egosi na ha si na mba so na ya." },
      { objective: "O1", q: "Moussa na-ere ihe nchọ mma site na Dakar gaa Bamako. Usoro olee ka ọ ga-ebu ụzọ jụọ maka ya?", options: ["Simplified Trade Regime nke EAC", "Simplified Trade Regime nke COMESA", "Usoro dị n'Asia", "ECOWAS Trade Liberalisation Scheme"], answer: 3, why: "Senegal na Mali so na ECOWAS, ya mere ETLS bụ usoro ị ga-ajụ maka ya." },
      { objective: "O1", q: "Onye nwere ike ịkọwara obere ndị ahịa iwu dị mfe n'ụfọdụ ọnụ ụzọ ókè mba?", options: ["Onye ọrụ tebụl ozi azụmahịa", "Onye ọ bụla na-agbanwe ego", "Onye na-anakọta ego n'ụgbọ ala", "Onye ọbịa na ekwentị"], answer: 0, why: "Tebụl ozi azụmahịa n'ụfọdụ ọnụ ụzọ ókè mba na-akọwara obere ndị ahịa iwu." },
      { objective: "O2", q: "Ndepụta olee na-egosi akwụkwọ a na-ebukarị n'ọnụ ụzọ gọọmentị?", options: ["Foto agbamakwụkwọ na akwụkwọ ndetu ụbọchị", "Naanị nọmba ekwentị", "ID, invoice ma ọ bụ rịsịtị, ndepụta ngwaahịa, nkwupụta kọstọm", "Akwụkwọ ozi si n'aka enyi"], answer: 2, why: "ID, invoice ma ọ bụ rịsịtị, ndepụta ngwaahịa na nkwupụta kọstọm bụ akwụkwọ a na-ebukarị." },
      { objective: "O2", q: "Tupu ị zụta ngwaahịa ị ga-ebufe, gịnị ka ị ga-ajụ kọstọm?", options: ["Agba ngwaahịa ahụ kwesịrị ịdị", "Ma a machibidoro ngwaahịa gị na akwụkwọ ha chọrọ", "Ma ha chọrọ ịzụta ụfọdụ", "Ọ dịghị ihe"], answer: 1, why: "A machibidoro ụfọdụ ngwaahịa, akwụkwọ dịkwa iche na ngwaahịa ọ bụla, ya mere jụọ tupu." },
      { objective: "O2", q: "Grace na-ebu tomato ọhụrụ site na Kenya gaa Tanzania. Asambodo olee ka o nwere ike ịchọ?", options: ["Asambodo mahadum", "Asambodo alụmdi na nwunye", "Akwụkwọ ikike ịnya ụgbọ ala", "Asambodo ahụike osisi (phytosanitary)"], answer: 3, why: "Ngwaahịa osisi ọhụrụ na-achọkarị asambodo phytosanitary; ọ ga-ajụ kọstọm." },
      { objective: "O2", q: "Gịnị ka clearing agent na-eme?", options: ["Na-enyere gị aka mezue akwụkwọ kọstọm, maka ụgwọ", "Na-erere gị ngwaahịa gị", "Na-agbanwe ego n'okporo ụzọ", "Na-akara ọnụ ụtụ"], answer: 0, why: "Clearing agent nwere ikike inye aka n'akwụkwọ kọstọm maka ụgwọ." },
      { objective: "O3", q: "Gịnị bụ nzọụkwụ mbụ n'ịgbakọ ọnụ ahịa ngwaahịa?", options: ["Họrọ ọnụ ahịa masịrị gị", "Depụta ụgwọ ọ bụla site n'ịzụta ruo n'ire", "Detuo ọnụ ahịa onye agbata obi", "Gbanwee ego"], answer: 1, why: "Ị pụghị ịkara ọnụ ahịa ziri ezi ruo mgbe ị maara ụgwọ ọ bụla." },
      { objective: "O3", q: "Ngụkọta ụgwọ bụ KES 36,000 maka akpụkpọ ụkwụ sandal 120 ụzọ. Gịnị bụ ọnụ ahịa otu ụzọ?", options: ["KES 30", "KES 3,000", "KES 300", "KES 120"], answer: 2, why: "36,000 e kere na 120 bụ 300." },
      { objective: "O3", q: "Ọnụ ahịa otu ihe bụ GHS 20, uru bụ GHS 5. N'ọnụ mgbanwe ọmụmaatụ 1 GHS = 40 XOF, gịnị bụ ọnụ ahịa na XOF?", options: ["800 XOF", "200 XOF", "1,000 XOF", "25 XOF"], answer: 2, why: "GHS 20 + GHS 5 = GHS 25; 25 x 40 = 1,000 XOF." },
      { objective: "O3", q: "Mgbe i gbakọchara ọnụ ahịa gị, gịnị ọzọ ka ị ga-elele?", options: ["Ihu igwe", "Ọnụ ahịa ngwaahịa yiri ya n'ahịa onye na-azụ ahịa", "Ọ dịghị ihe", "Ekwentị onye agbata obi gị"], answer: 1, why: "Ịtụnyere ya na ahịa na-egosi ma ndị na-azụ ahịa ga-akwụ ọnụ ahịa gị." },
      { objective: "O4", q: "Onye ọhụrụ na-azụ ahịa chọrọ ngwaahịa ugbu a, kwe nkwa ịkwụ izu na-abịa. Gịnị kacha enweghị nsogbu?", options: ["Rịọ ego mbụ ma ọ bụ ụgwọ zuru ezu tupu", "Zipụ ihe niile ugbu a", "Nye PIN gị dị ka ntụkwasị obi", "Zipụ okpukpu abụọ"], answer: 0, why: "N'ebe onye ọhụrụ na-azụ ahịa nọ, ego mbụ ma ọ bụ ụgwọ zuru ezu tupu ihe ọ bụla na-echebe ngwaahịa gị." },
      { objective: "O4", q: "Kedu otu ị ga-esi mara na ụgwọ abatala n'ezie?", options: ["Onye na-azụ ahịa kwuru ya", "Screenshot", "Ozi ederede si na nọmba ị na-amaghị", "Ị lelee ego dị n'akaụntụ gị n'onwe gị"], answer: 3, why: "Naanị ego dị n'akaụntụ gị n'onwe gị na-akwado na ego ahụ dị n'ezie." },
      { objective: "O4", q: "Onye ga-arịọ gị PIN mobile money gị?", options: ["Onye na-enye gị mobile money", "Ụlọ akụ gị", "Ọ dịghị ezi onye na-enye ọrụ: naanị ndị aghụghọ", "Kọstọm"], answer: 2, why: "Ezi onye na-enye ọrụ anaghị arịọ PIN gị; onye ọ bụla na-arịọ ya bụ onye aghụghọ." },
      { objective: "O4", q: "Gịnị mere ibu ọtụtụ ego ọcha gafee ókè mba ji nwee ihe egwu?", options: ["Ego ọcha megidere iwu mgbe niile", "Ịpụnara mmadụ ihe, ọnụ ọjọọ n'okporo ụzọ na ego adịgboroja", "A pụghị ịgụ ego ọcha", "Ụlọ akụ machibidoro ya"], answer: 1, why: "A nwere ike izuru ego ọcha, ndị na-agbanwe ego n'okporo ụzọ nwekwara ike inye ọnụ ọjọọ ma ọ bụ ego adịgboroja." },
      { objective: "O5", q: "Kedu nke bụ ihe mgbochi azụmahịa na-abụghị ụtụ?", options: ["Ụtụ mbubata gọọmentị", "Ụgwọ na-abụghị nke iwu n'ebe nchekwa okporo ụzọ", "Ọnụ ngwaahịa gị", "Uru gị"], answer: 1, why: "NTB bụ ihe ọ bụla na-abụghị ụtụ nke na-eme ka azụmahịa sie ike, dị ka ụgwọ na-abụghị nke iwu." },
      { objective: "O5", q: "Onye nwere ike ịkọ na tradebarriers.africa?", options: ["Naanị nnukwu ụlọ ọrụ", "Naanị gọọmentị", "Naanị ụmụ nwoke", "Onye ahịa ọ bụla, gụnyere ndị na-anọghị n'usoro gọọmentị, ụmụ nwaanyị na ndị ntorobịa"], answer: 3, why: "Usoro ahụ ghere oghe nye azụmahịa nke ọ bụla, ndị ahịa na-anọghị n'usoro gọọmentị, ụmụ nwaanyị na ndị ntorobịa." },
      { objective: "O5", q: "Onye ọrụ jidere ngwaahịa gị ma rịọ ego ọcha n'enweghị rịsịtị. Gịnị bụ atụmatụ kacha mma?", options: ["Nọrọ jụụ, jụọ rịsịtị ma ọ bụ onye isi ndị ọrụ, dee eziokwu, ma kọọ ya", "Hapụ ngwaahịa gị laa ụlọ", "Sesie okwu ike ruo mgbe ọ kwụsịrị", "Kwụọ ma ghara ikwu ihe ọ bụla mgbe ọ bụla"], answer: 0, why: "Ịnọ ná nchekwa, ịjụ ụzọ gọọmentị, ide eziokwu na ịkọ ya bụ atụmatụ ziri ezi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ gị ma nwaa ọzọ.",
    criteria: [
      { name: "E lelere iwu", objective: "O1", notYet: "Atụmatụ ahụ ekwughị ihe ọ bụla banyere iwu metụtara ya, ma ọ bụ dabere n'asịrị.", meets: "Atụmatụ ahụ na-akpọ aha usoro mpaghara ma ọ bụ iwu AfCFTA maka ụzọ ahụ na opekata mpe ọfịs ma ọ bụ weebụsaịtị abụọ a ga-eso lelee.", exceeds: "Ọ na-edekwa ihe otu ọfịs kwuru, ya na ụbọchị na aha onye ọrụ ahụ." },
      { name: "E depụtara akwụkwọ", objective: "O2", notYet: "Enweghị ndepụta akwụkwọ, ma ọ bụ naanị ID.", meets: "Ndepụta akwụkwọ maka ngwaahịa na ụzọ a, gụnyere invoice na nkwupụta kọstọm, na asambodo mmalite ngwaahịa ebe a chọrọ ụtụ dị ala.", exceeds: "Ọ na-akọkwa asambodo ahụike, osisi ma ọ bụ ngwaahịa ọ bụla na otu e si edebe mbipụta." },
      { name: "Ọnụ ahịa zuru ezu na ọnụ ahịa ire", objective: "O3", notYet: "A gụrụ naanị ọnụ ngwaahịa, ma ọ bụ mgbakọ ezighi ezi.", meets: "E depụtara ụgwọ ọ bụla, ọnụ ahịa otu ihe na ọnụ ahịa ire ziri ezi, e gosikwara ọnụ ahịa ahụ n'ego abụọ ahụ.", exceeds: "Ọ na-atụnyekwa ọnụ ahịa ahụ na ahịa onye na-azụ ahịa ma kwadebe maka mgbanwe n'ọnụ mgbanwe ego." },
      { name: "Ịkwụ ụgwọ n'enweghị nsogbu", objective: "O4", notYet: "A na-enyefe ngwaahịa tupu e lelee ụgwọ, ma ọ bụ atụmatụ ahụ na-ekesa PIN.", meets: "A kpọrọ aha ụzọ dị mma, a na-enyefe ngwaahịa naanị mgbe e lelechara ego dị n'akaụntụ, ọ dịghịkwa mgbe a na-ekesa PIN.", exceeds: "Ọ na-edepụtakwa ihe ịdọ aka na ntị nke aghụghọ onye ahịa ahụ ga-eleba anya na ha." },
      { name: "Ụgwọ na-abụghị nke iwu", objective: "O5", notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ ahụ bụ ịkwụ ma ghara ikwu ihe ọ bụla.", meets: "A kpọrọ aha nzọụkwụ dị mma, eziokwu a ga-ede na otu ụzọ gọọmentị a ga-esi kọọ ya.", exceeds: "Ọ na-akpọ aha ụzọ abụọ a ga-esi kọọ ya na otu ndị ahịa maka enyemaka." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri ọnụ ụzọ gọọmentị na akwụkwọ kwesịrị ekwesị n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha kwụrụ ụgwọ na-abụghị nke iwu obere karịa, ma ọ bụ kọọ NTB, n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha rere ahịa gafere ókè mba n'uru ha hazịrị n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị nwere igwe mgbakọ; ịntanetị maka au-afcfta.org na tradebarriers.africa ma ọ bụrụ na ọ ga-ekwe omume",
      "Akwụkwọ na mkpịsị ode maka ndepụta nlele akwụkwọ, mgbakọ ọnụ ahịa na atụmatụ azụmahịa",
      "Ọnụ mgbanwe ego nke taa maka ụzọ onye na-amụ ihe (site n'ụlọ akụ ma ọ bụ central bank)",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Tupu nzukọ ahụ, jụọ ọfịs kọstọm ma ọ bụ tebụl azụmahịa dị nso usoro na akwụkwọ metụtara ụzọ ndị na-amụ ihe gị na-eji, ka i wee nwee ike ịza ajụjụ; ekwula ọnụ ọgụgụ ụtụ site na ncheta mgbe ọ bụla.",
      "N'otu ndị ahịa ma ọ bụ otu ahịa: meenụ ule mbido ọnụ, wee mee otu isi n'otu nzukọ, ka ndị na-amụ ihe na-agbakọ ọnụ ahịa nke ezi ngwaahịa ha.",
      "Jiri nkwanye ugwu meso ndị ahịa na-anọghị n'usoro gọọmentị: ebumnuche bụ azụmahịa ka enweghị nsogbu, kwekọrọ n'iwu ma na-ewete uru karịa, ọ bụghị ịta ụta.",
      "Arịọla ndị na-amụ ihe mgbe ọ bụla ka ha kesaa PIN, okwuntughe ma ọ bụ nọmba akaụntụ na klas.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

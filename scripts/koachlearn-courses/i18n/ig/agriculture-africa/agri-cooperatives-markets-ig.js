"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-cooperatives-markets.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const ICA = { name: "International Cooperative Alliance (Njikọ Mba Ụwa nke Otu Mmekọ): njirimara, ụkpụrụ na iwu ndị bụ isi nke otu mmekọ", url: "https://ica.coop/en/cooperatives/cooperative-identity" };
const KE_ACT = { name: "Kenya Law: Co-operative Societies Act (iwu otu mmekọ; ndebanye aha site n'aka Commissioner for Co-operative Development)", url: "https://new.kenyalaw.org/akn/ke/act/1997/12" };
const NG_ACT = { name: "Co-operative Societies Act nke Naịjirịa (Directors of Co-operatives nke Gọọmentị Etiti na nke Steeti; iwu otu; nyocha akaụntụ kwa afọ)", url: "https://placng.org/lawsofnigeria/print.php?sn=356" };
const GH_COOP = { name: "Ghana Information Services Department: Gọọmentị amalitela ndozi ngalaba otu mmekọ (Department of Co-operatives)", url: "https://www.isd.gov.gh/government-begins-reform-of-cooperative-sector-with-new-policy-and-legal-framework/" };
const KAMIS = { name: "Kenya Agricultural Market Information System (KAMIS): usoro ozi ọnụahịa ahịa ihe ubi, Ministry of Agriculture nke Kenya", url: "https://kamis.kilimo.go.ke" };

module.exports = {
  id: "agri-cooperatives-markets-ig",
  lang: "ig",
  translationOf: "agri-cooperatives-markets",
  category: "Agriculture (Africa)",
  name: "Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa",
  skills: "Ịkọwa ihe mere ndị ọrụ ugbo ji ejikọ aka, Ide iwu otu na idebanye otu aha, Iduzi nzukọ na idebe ndekọ otu, Ịchịkọta ihe ubi na ire ya ọnụ, Ịlele ọnụahịa ahịa site n'ekwentị, Ịgụ nkwekọrịta onye na-azụ",
  outcome: "inye aka ịmalite ma ọ bụ ime ka otu ndị ọrụ ugbo sie ike: ikwekọ n'iwu otu ahụ, ịmata ebe a ga-edebanye ya aha, iduzi nzukọ ma debe ndekọ doro anya, ịchịkọta ihe ubi ndị otu ma ree ya ọnụ n'ọnụahịa e lelere, na ịgụ nkwekọrịta onye na-azụ tupu onye ọ bụla abịanye aka.",
  about: [
    "Ihe ọmụmụ a bụ maka obere ndị ọrụ ugbo na ndị na-eto eto, ndị isi otu ndị ọrụ ugbo na otu mmekọ (cooperative), na ndị ntorobịa na-arụ ọrụ azụmahịa ugbo na Kenya, Naịjirịa, Ghana na n'Afrịka niile. Onye ọrụ ugbo nọ naanị ya nwere akpa ọka ise ma ọ bụ igbe tomato ole na ole na-anabata ọnụahịa ọ bụla onye ahịa nyere. Ọ bụrụ na ha jikọọ aka, otu nwere ike ịzụ ihe ọrụ ugbo n'ọnụ ala, mejupụta ihe onye na-azụ buru ibu chọrọ, ma kwagide maka ọnụahịa ka mma.",
    "Isi 1 na-ekwu maka iwulite otu: ihe mere ndị ọrụ ugbo ji ejikọ aka, ịmalite otu ndị na-akọ ihe ma ọ bụ otu mmekọ (iwu otu na ndebanye aha), na iduzi ya nke ọma site na nzukọ na ndekọ. Isi 2 na-ekwu maka iru ahịa: ịchịkọta na ire ọnụ, ịlele ọnụahịa site n'ekwentị, na nkwekọrịta ya na ndị na-azụ.",
    "Iwu otu mmekọ, ọfịs ndebanye aha na ụgwọ dị iche iche site na mba ruo mba, ha na-agbanwekwa ka oge na-aga. Ihe ọmụmụ a na-akpọ aha ọfịs ndị ị ga-akpọtụrụ; lelee iwu nke ugbu a na ha mgbe niile tupu i debanye aha. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị nwere ike iso otu gị mee. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ ire ahịa otu nke peeji otu maka otu ihe ọkụkụ (nke otu gị, ma ọ bụ ọmụmaatụ dị ka ndị ọrụ ugbo ọka 25 na Bungoma, otu ụmụ nwanyị na-akọ tomato na Kaduna, ma ọ bụ otu koko ma ọ bụ agwa dị nso na Tamale): aha otu ahụ na ebumnuche ya, iwu otu ise dị mkpa, ebe ị ga-edebanye aha na ihe ị ga-elele, ndekọ ị ga-edebe, otu ndị otu ga-esi wete ihe ubi, otu a ga-esi hazie ya n'ọkwa na otu a ga-esi kwụọ ha ụgwọ, ọnụahịa ị chọtara site n'opekata mpe ebe atọ, na okwu nkwekọrịta isii ị ga-elele tupu i bịanye aka ya na onye na-azụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Obere ndị ọrụ ugbo na ndị na-eto eto, ndị isi otu ndị ọrụ ugbo na otu mmekọ, na ndị ntorobịa na-arụ ọrụ azụmahịa ugbo na Kenya, Naịjirịa, Ghana na n'Afrịka niile, ndị chọrọ ịzụ na ire ọnụ.",
    startingPoint: "Ọtụtụ na-ere obere ihe naanị ha n'ọnụ ugbo, na-anabata ọnụahịa onye ahịa. Ụfọdụ nọ n'otu na-enweghị ndebanye aha ma ọ bụ chama (otu nchekwa ego). Ọ bụ mmadụ ole na ole dere iwu otu, debe ndekọ otu, duzie ụbọchị nchịkọta, lelee ọnụahịa site n'ọtụtụ ebe, ma ọ bụ gụọ nkwekọrịta onye na-azụ tupu ha abịanye aka.",
    gap: "Mgbe ndị ọrụ ugbo nọ naanị ha, ike ha nwere ịkwagide ọnụahịa dị ntakịrị, ọtụtụ otu na-adakwa n'ihi enweghị ntụkwasị obi, ndekọ na-adịghị mma, ire n'azụ (side-selling) na ịkwụ ụgwọ n'oge ya gafere. Otu e duziri nke ọma, nwere iwu doro anya, ndekọ, ọnụahịa e lelere na nkwekọrịta ederede, nwere ike imejupụta ihe ndị na-azụ buru ibu chọrọ, zụta ihe ọrụ ugbo n'ọnụ ala, ma mee ka ndị otu nweta ego karịa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla gbasara otu na ahịa",
      "Ngwaọrụ: ekwentị nkịtị maka SMS, WhatsApp, ịlele ọnụahịa na ngwa ịgụ ọnụ (calculator); akwụkwọ ndekọ e ji aka ede",
      "Iwu otu mmekọ, ọfịs na ụgwọ dị iche iche site na mba ruo mba ma na-agbanwe: ndị na-amụ ihe na-elele ya n'ọfịs otu mmekọ",
      "Ego na nzuzo: mmadụ abụọ na-akwado ịkwụ ụgwọ; ekesala PIN ma ọ bụ ozi akaụntụ ụlọ akụ na ngwa AI ma ọ bụ na ndị na-akpọ oku",
      "Ọ bụghị ndụmọdụ iwu: ọfịs otu mmekọ, onye ndụmọdụ ọrụ ugbo (extension) ma ọ bụ ọka iwu na-elele nnukwu nkwekọrịta"
    ],
    prerequisites: "Ọ dịghị. \"Ilekọta na Ichekwa Ihe Ubi Mgbe Owuwe Gasịrị\" na-enye aka n'ịhazi n'ọkwa na ịdị mma."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka ugbo gị na ndị agbata obi gị", action: "idepụta ihe otu nwere ike ime nke otu onye ọrụ ugbo enweghị ike ime, na ihe egwu a ga-elekọta", standard: "na-akpọ aha opekata mpe uru atọ na ihe atọ na-emekarị ka otu daa" },
    { id: "O2", condition: "Maka otu ndị ọrụ ugbo ọhụrụ ma ọ bụ nke dị adị", action: "ide isi iwu otu ahụ na ịkpọ aha ọfịs ebe otu ahụ ga-edebanye aha", standard: "nwere opekata mpe iwu ise dị mkpa, ya na nzọụkwụ nke ugbu a e lelere n'ọfịs ahụ" },
    { id: "O3", condition: "Maka nzukọ otu na ego ya", action: "iduzi nzukọ nwere usoro nzukọ (agenda) na ndekọ nzukọ, na ịhazi ndekọ ndị bụ isi nke otu", standard: "nwere ndepụta ndị otu, akwụkwọ ego, akwụkwọ nnyefe na ndekọ ịkwụ ụgwọ, ya na mmadụ abụọ na-akwado ịkwụ ụgwọ ọ bụla" },
    { id: "O4", condition: "N'ụbọchị nchịkọta", action: "ilele, ịhazi n'ọkwa, ịtụ ibu, idekọ na ịkwụ ụgwọ maka ihe ubi onye otu ọ bụla wetara", standard: "na-atụ ibu n'ihu onye otu ahụ, na-enye akwụkwọ nnata ma na-akwụ ụgwọ dịka ndekọ si dị" },
    { id: "O5", condition: "Tupu ire ahịa", action: "iji ọnụahịa site n'opekata mpe ebe atọ tụnyere, na ịgbakọ ọnụahịa onyinye ahụ n'ugbo gị", standard: "na-ewepụ ụgwọ njem, ụgwọ ndị ọzọ na ihe furu efu, ma na-amata onyinye aghụghọ" },
    { id: "O6", condition: "Mgbe e nyere gị nkwekọrịta onye na-azụ", action: "ilele isi okwu ndị dị na ya tupu otu ahụ abịanye aka", standard: "na-ekpuchi ihe a na-ere, ọkwa, ọnụọgụ, ọnụahịa, nnyefe, nlele ịdị mma, ịkwụ ụgwọ, ihe ga-eme ma ihe adaa, na esemokwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwulite otu ndị ọrụ ugbo siri ike",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mere ndị ọrụ ugbo ji ejikọ aka",
          minutes: 4,
          goal: "Depụta ihe otu nwere ike imere ugbo gị nke ị na-enweghị ike ime naanị gị, na ihe egwu a ga-elekọta.",
          text: [
            "International Cooperative Alliance (ICA) na-akọwa otu mmekọ (cooperative) dị ka njikọ ndị mmadụ jikọrọ aka n'ọchịchọ nke ha iji gboo mkpa akụ na ụba, mkpa obodo na mkpa omenala ha site n'azụmahịa ha nwe ọnụ ma na-achị n'usoro onye kwuo uche ya. Ndị otu bụ ndị nwe ya, ha bụkwa ndị na-eji ya.",
            "Otu na-enyere ndị ọrụ ugbo aka: ịzụ mkpụrụ, fatịlaịza na nri anụ n'ọtụtụ n'ọnụ ala; ịchịkọta ihe ubi ka ọ jupụta ụgbọ ala ibu (lorry) ndị na-azụ buru ibu chọrọ; ịkwagide maka ọnụahịa ka mma; ịkekọrịta ụlọ nchekwa, ihe ọkpọnwụ, njem na ngwaọrụ; inweta ọzụzụ, asambodo na mbinye ego nke ndị na-agbazinye ego na-enyekarị otu nwere ndekọ ngwa ngwa; na ikwu otu okwu nye gọọmentị na ndị na-azụ.",
            "Otu na-adakwa. Ihe ndị na-emekarị ya bụ enweghị ntụkwasị obi, ndị isi na-aka ike, ndekọ na-adịghị mma, ndị otu na-ere ndị ọzọ na-azụ mgbe otu ahụ kwekọrịrị n'ahịa, na ịkwụ ụgwọ n'oge ya gafere. Ihe ọmụmụ a fọdụrụ bụ maka izere ihe ndị a. Otu dị iche iche: site n'otu enyemaka onwe ma ọ bụ otu ndị na-akọ ihe na-enweghị ndebanye aha ruo n'otu mmekọ e debanyere aha; otu nwere ike ịmalite n'enweghị ndebanye aha ma debanye aha ma emechaa."
          ],
          words: [["Otu mmekọ (cooperative)", "azụmahịa ndị otu ya nwe ma na-achị, ndị na-ejikwa ọrụ ya."], ["Otu ndị na-akọ ihe (producer group)", "ndị ọrụ ugbo na-akọ otu ihe ọkụkụ ahụ ndị na-arụkọ ọrụ ọnụ, e debanyere ha aha ma ọ bụ na e debanyeghị."], ["Ịzụ n'ọtụtụ (bulk buying)", "ịzụkọ ọtụtụ ihe ọnụ maka ọnụahịa dị ala."], ["Ire n'azụ (side-selling)", "onye otu na-ere onye ọzọ na-azụ mgbe otu ahụ kwekọrịrị ire ọnụ."]],
          slides: [
            { title: "Ihe otu mmekọ bụ (ICA)", bullets: ["Ndị mmadụ jikọrọ aka n'ọchịchọ nke ha", "Azụmahịa ha nwe ọnụ", "Ha na-achị ya n'usoro onye kwuo uche ya: ndị otu nwe ya ma na-eji ya"] },
            { title: "Ihe otu nwere ike ime", bullets: ["Ịzụ ihe ọrụ ugbo n'ọtụtụ, n'ọnụ ala", "Ijupụta lorry maka ndị na-azụ buru ibu; ịkwagide ọnụahịa", "Ịkekọrịta ụlọ nchekwa na njem; inweta ọzụzụ na mbinye ego"] },
            { title: "Ihe mere otu ji ada", bullets: ["Enweghị ntụkwasị obi; ndị isi na-aka ike", "Ndekọ na-adịghị mma; ịkwụ ụgwọ n'oge gafere", "Ire n'azụ mgbe otu kwekọrịrị n'ahịa"] }
          ],
          sources: [ICA],
          tryIt: "Dee ihe atọ otu nwere ike imere ugbo gị nke ị na-enweghị ike ime naanị gị, na otu ihe egwu na-echegbu gị karịa. Jụọ ndị agbata obi gị abụọ ihe ha ga-achọ n'aka otu, ma dee azịza ha.",
          youCanNow: "ịkọwa ihe otu mmekọ bụ, ihe otu nwere ike imere ndị ọrụ ugbo, na isi ihe ndị na-eme ka otu daa.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụdị otu ndị ọrụ ugbo dị?", options: ["Site n'otu enyemaka onwe ma ọ bụ otu ndị na-akọ ihe na-enweghị ndebanye aha ruo n'otu mmekọ e debanyere aha", "Naanị ụlọ ọrụ e debanyere aha", "Naanị ọfịs gọọmentị", "Naanị otu nwere ihe karịrị ndị ọrụ ugbo 1,000"], answer: 0, why: "Otu dị iche iche: site n'otu enyemaka onwe ma ọ bụ otu ndị na-akọ ihe na-enweghị ndebanye aha ruo n'otu mmekọ e debanyere aha." },
            { objective: "O1", q: "Ndị agbata obi gị chọrọ ire ọka ọnụ mana ha adịbeghị njikere idebanye aha. Gịnị ka ha nwere ike ime?", options: ["Chere ruo mgbe ha nwere ike idebanye aha tupu ha emee ihe ọ bụla", "Onye ọ bụla ree naanị ya ruo mgbe ebighị ebi", "Rịọ onye ahịa ka ọ bụrụ onye isi ha", "Malite dị ka otu na-enweghị ndebanye aha ma debanye aha ma emechaa"], answer: 3, why: "Otu nwere ike ịmalite n'enweghị ndebanye aha ma debanye aha ma emechaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịmalite otu: iwu otu na ndebanye aha",
          minutes: 6,
          goal: "Dee isi iwu otu ma chọpụta ebe a ga-edebanye ya aha.",
          text: [
            "Malite na ndị na-akọ otu ihe ọkụkụ ahụ ma ọ bụ chọrọ otu ọrụ ahụ, ndị bi nso nke ga-enwe ike ịzụkọ, ndị na-atụkwasịkwa ibe ha obi. Kwekọọ n'ebumnuche doro anya, dị ka \"ire ọka anyị ọnụ na ịzụ ihe ọrụ ugbo n'ọtụtụ\". Mee nzukọ mbụ, dee ndekọ nzukọ, ma họpụta kọmitii nwa oge.",
            "Iwu otu (by-laws) bụ iwu e dere ede nke otu ahụ. Ọ na-ekpuchikarị: aha, adreesị na ebumnuche; onye nwere ike ịbanye na otu esi abanye; ụgwọ mbata na òkè (shares); nzukọ, quorum na ntuli aka (otu mmekọ na-eji otu onye otu, otu votu); kọmitii, ikike ya na oge ọrụ ya; otu e si edebe ego na otu e si elele ya; otu a ga-esi kee uru ọ bụla fọdụrụ; na otu a ga-esi taa ndị otu mebiri iwu ahụhụ. Ọfịs otu mmekọ gị na-enwekarị iwu otu nlereanya ị nwere ike ịgbanwe ka o dabara gị.",
            "Ndebanye aha na-enye otu ikike n'iwu inwe ihe onwunwe, imeghe akaụntụ ụlọ akụ n'aha ya, ịbịanye aka na nkwekọrịta, na ịgbazite ego. Iwu dị iche iche site na mba ruo mba. Na Kenya, otu na-edebanye aha n'okpuru Co-operative Societies Act site n'aka Commissioner for Co-operative Development, na-amalite n'ọfịs otu mmekọ nke county. Na Naịjirịa, Co-operative Societies Act na-ekwu na otu mbụ (primary society) chọrọ opekata mpe ndị otu iri ruru eru, ma na-etinye akwụkwọ arịrịọ ya, ya na iwu otu ya, nye State Director of Co-operatives. Na Ghana, otu na-edebanye aha na Department of Co-operatives site n'ọfịs ya nke district. Ụgwọ, fọm na nzọụkwụ na-agbanwe, ya mere gaa ma ọ bụ kpọọ ọfịs ahụ oku tupu i tinye akwụkwọ arịrịọ."
          ],
          steps: ["Kwekọọ n'ebumnuche otu ahụ n'otu ahịrịokwu.", "Mee nzukọ mbụ; dee ndekọ nzukọ na aha ndị otu.", "Họpụta kọmitii nwa oge: onye isi oche, odeakwụkwọ, onye na-edebe ego.", "Nweta iwu otu nlereanya n'ọfịs otu mmekọ gị ma gbanwee ya ka o dabara.", "Kwekọọ n'isi iwu ndị ahụ na nzukọ ndị otu ma dekọọ ntuli aka ahụ.", "Gaa n'ọfịs otu mmekọ: jụọ maka fọm, ụgwọ na nzọụkwụ nke ugbu a."],
          words: [["Iwu otu (by-laws)", "iwu e dere ede nke otu kwekọrịrị ịgbaso."], ["Quorum", "ọnụọgụ ndị otu kacha nta ga-anọ ka mkpebi nzukọ dị irè."], ["Otu onye otu, otu votu", "onye otu ọ bụla nwere otu votu, n'agbanyeghị òkè ole o nwere."], ["Ndebanye aha", "nnabata gọọmentị na-enye otu ahụ ikike n'iwu."]],
          slides: [
            { title: "Malite nke ọma", bullets: ["Otu ihe ọkụkụ ma ọ bụ otu mkpa; bi nso; ntụkwasị obi", "Ebumnuche n'otu ahịrịokwu", "Nzukọ mbụ, ndekọ nzukọ, kọmitii nwa oge"] },
            { title: "Iwu otu na-ekpuchi", bullets: ["Ebumnuche, ndị otu, ụgwọ na òkè", "Nzukọ, quorum, otu onye otu otu votu", "Kọmitii, ego, uru fọdụrụ, ntaramahụhụ"] },
            { title: "Ebe a ga-edebanye aha", bullets: ["Kenya: ọfịs otu mmekọ nke county / Commissioner for Co-operative Development", "Naịjirịa: State Director of Co-operatives", "Ghana: ọfịs Department of Co-operatives nke district"] },
            { title: "Tupu i tinye akwụkwọ arịrịọ", bullets: ["Iwu, fọm na ụgwọ na-agbanwe", "Buru ụzọ gaa ma ọ bụ kpọọ ọfịs ahụ oku", "Jụọ maka iwu otu nlereanya"] }
          ],
          sources: [KE_ACT, NG_ACT, GH_COOP],
          tryIt: "Dee iwu otu ise maka otu gị: onye nwere ike ịbanye, ụgwọ mbata ma ọ bụ òkè, ugboro ole unu na-ezukọ na quorum, otu ntuli aka si arụ ọrụ, na ihe ga-eme ma onye otu ree n'azụ. Mgbe ahụ chọta adreesị ma ọ bụ nọmba ekwentị nke ọfịs otu mmekọ kacha nso.",
          youCanNow: "ide isi iwu otu ndị ọrụ ugbo na ịmata ebe a ga-edebanye ya aha na mba gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ndebanye aha na-enye otu ndị ọrụ ugbo?", options: ["Ọnụahịa a kwadoro", "Ihe ọrụ ugbo n'efu", "Ikike n'iwu inwe ihe onwunwe, imeghe akaụntụ ụlọ akụ, ịbịanye aka na nkwekọrịta na ịgbazite ego", "Ụgwọ ọnwa gọọmentị"], answer: 2, why: "Ndebanye aha na-enye otu ikike n'iwu inwe ihe onwunwe, iji ụlọ akụ, ịbịanye aka na nkwekọrịta na ịgbazite ego." },
            { objective: "O2", q: "Otu gị na-ede iwu otu ma amaghị ebe ha ga-amalite. Gịnị ka ị ga-eme?", options: ["Detuo iwu otu ụlọ ọrụ site n'ịntanetị", "Rịọ ọfịs otu mmekọ maka iwu otu nlereanya unu ga-agbanwe", "Hapụ onye isi oche ka o dee ha naanị ya", "Hapụ iwu otu"], answer: 1, why: "Ọfịs otu mmekọ na-enwekarị iwu otu nlereanya otu nwere ike ịgbanwe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iduzi otu: nzukọ na ndekọ",
          minutes: 5,
          goal: "Duzie obere nzukọ nwere usoro nzukọ na ndekọ nzukọ, ma hazie ndekọ ndị bụ isi nke otu.",
          text: [
            "Ezigbo nzukọ na-ewulite ntụkwasị obi. Zipu ụbọchị na usoro nzukọ (agenda) tupu oge eruo (ozi SMS ma ọ bụ WhatsApp na-arụ ọrụ), malite n'oge, lelee quorum, gbasoo usoro nzukọ, hapụ onye otu ọ bụla ka o kwuo okwu, tuo votu na mkpebi, ma dee ndekọ nzukọ: ndị bịara, ihe e kpebiri, na onye ga-eme gịnị ka ọ na-erule oge ole. Gụọ ndekọ nzukọ gara aga na mmalite nzukọ ọ bụla. Mee nzukọ afọ niile (AGM) ebe ndị otu na-anụ akaụntụ ma na-ahọpụta kọmitii.",
            "Ndekọ bụ ncheta otu ahụ, ha bụkwa ihe akaebe ya nye ndị na-azụ, ụlọ akụ na ọfịs otu mmekọ. Debe opekata mpe: ndepụta ndị otu (aha, otu e si akpọtụrụ ha, òkè ha kwụrụ), akwụkwọ ego nke ego niile batara na nke pụrụ ya na akwụkwọ nnata (receipt), akwụkwọ nnyefe na-egosi ihe onye otu ọ bụla wetara, ọkwa ya na ibu ya, na ndekọ ịkwụ ụgwọ na-egosi ego a kwụrụ onye otu ọ bụla. Dịka ọmụmaatụ, Co-operative Societies Act nke Naịjirịa chọrọ ka e nyochaa akaụntụ otu e debanyere aha kwa afọ.",
            "Chebe ego ahụ: jiri akaụntụ ụlọ akụ ma ọ bụ mobile money nke otu, mee ka mmadụ abụọ bịanye aka ma ọ bụ kwado ịkwụ ụgwọ ọ bụla, nye akwụkwọ nnata maka shilling, naira ma ọ bụ cedi ọ bụla, ma gụpụta akaụntụ n'olu dị elu na nzukọ. Spreadsheet n'ekwentị ma ọ bụ app n'efu nwere ike idebe ndekọ, mana debekwa ya n'akwụkwọ, ekesakwala PIN ma ọ bụ okwuntughe."
          ],
          steps: ["Zipu ụbọchị na usoro nzukọ tupu oge eruo.", "Lelee quorum; gbasoo usoro nzukọ; tuo votu na mkpebi.", "Dee ndekọ nzukọ: ndị bịara, ihe e kpebiri, onye ga-eme gịnị ka ọ na-erule oge ole.", "Hazie ndekọ anọ: ndị otu, akwụkwọ ego, nnyefe, ịkwụ ụgwọ.", "Jiri akaụntụ otu nwere ndị abụọ na-abịanye aka; nye akwụkwọ nnata.", "Gụpụta akaụntụ n'olu dị elu na nzukọ ọ bụla; nyochaa ya otu ugboro n'afọ."],
          words: [["Usoro nzukọ (agenda)", "ndepụta ihe a ga-ekwu maka ya na nzukọ."], ["Ndekọ nzukọ (minutes)", "ihe e dere ede banyere ihe nzukọ kpebiri."], ["Nzukọ afọ niile (AGM)", "nzukọ ndị otu niile kwa afọ iji nụ akaụntụ ma họpụta ndị isi."], ["Nyocha akaụntụ (audit)", "nlele akaụntụ otu ahụ nke onye na-adabereghị n'otu ahụ na-eme."], ["Onye na-abịanye aka (signatory)", "onye e nyere ikike ịkwado ịkwụ ụgwọ site n'akaụntụ."]],
          slides: [
            { title: "Ezigbo nzukọ", bullets: ["Zipu usoro nzukọ tupu oge eruo; malite n'oge", "Lelee quorum; onye ọ bụla na-ekwu okwu; tuo votu", "Ndekọ nzukọ: mkpebi, onye ga-eme gịnị ka ọ na-erule oge ole"] },
            { title: "Ndekọ anọ bụ isi", bullets: ["Ndepụta ndị otu", "Akwụkwọ ego na akwụkwọ nnata", "Akwụkwọ nnyefe na ndekọ ịkwụ ụgwọ"] },
            { title: "Chebe ego ahụ", bullets: ["Akaụntụ otu; ndị abụọ na-abịanye aka", "Akwụkwọ nnata maka ịkwụ ụgwọ ọ bụla", "Gụpụta akaụntụ n'olu dị elu; nyochaa ya kwa afọ"] }
          ],
          sources: [NG_ACT],
          tryIt: "Dee usoro nzukọ maka nzukọ otu gị na-esote, nwere ihe anọ. Mgbe ahụ see kọlụm akwụkwọ nnyefe: ụbọchị, aha onye otu, ihe ọkụkụ, ọkwa, ibu, onye natara ya.",
          youCanNow: "iduzi nzukọ otu nwere usoro nzukọ na ndekọ nzukọ, na idebe ndekọ ndị na-ewulite ntụkwasị obi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme na nzukọ afọ niile (AGM)?", options: ["Onye na-azụ na-ekpebi ọnụahịa", "Ndị otu na-anụ akaụntụ ma na-ahọpụta kọmitii", "Otu ahụ na-ere ụlọ nchekwa ya", "Naanị onye isi oche na-ekwu okwu"], answer: 1, why: "Na AGM, ndị otu na-anụ akaụntụ ma na-ahọpụta kọmitii." },
            { objective: "O3", q: "Ị bụ onye isi oche nzukọ taa, quorum zukwara. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gụọ ndekọ nzukọ gara aga", "Rịọ maka ego", "Hapụ usoro nzukọ", "Kwụsị nzukọ ahụ n'oge"], answer: 0, why: "Ịgụ ndekọ nzukọ gara aga na mmalite na-eme ka onye ọ bụla soro ma na-ewulite ntụkwasị obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwulite otu ndị ọrụ ugbo siri ike",
        questions: [
          { objective: "O1", q: "N'otu mmekọ, onye nwe azụmahịa ahụ ma na-achị ya?", options: ["Onye na-azụ", "Gọọmentị", "Ndị otu", "Naanị onye isi oche"], answer: 2, why: "Ndị otu nwe otu mmekọ, na-achị ya ma na-eji ya." },
          { objective: "O1", q: "Onye otu na-ere onye ahịa ọzọ mgbe otu kwekọrịrị n'ahịa. A na-akpọ nke a:", options: ["Ịzụ n'ọtụtụ", "Ire n'azụ (side-selling)", "Nchịkọta", "Nyocha akaụntụ"], answer: 1, why: "Ire n'azụ na-emebi nkwekọrịta otu, ọ bụkwa ihe na-emekarị ka otu daa." },
          { objective: "O2", q: "Na Naịjirịa, ebee ka otu mmekọ mbụ (primary society) na-etinye akwụkwọ arịrịọ idebanye aha?", options: ["State Director of Co-operatives", "Ndị uwe ojii", "Otu egwuregwu bọọlụ", "Ụlọ akụ ọ bụla"], answer: 0, why: "Co-operative Societies Act na-eziga akwụkwọ arịrịọ, ya na iwu otu, nye Director of Co-operatives." },
          { objective: "O3", q: "Gịnị bụ quorum?", options: ["Akaụntụ ụlọ akụ otu ahụ", "Ụdị ihe ọkụkụ", "Oge ezumike tii na nzukọ", "Ọnụọgụ ndị otu kacha nta a chọrọ ka mkpebi dị irè"], answer: 3, why: "Ọ bụrụ na quorum ezughị, mkpebi nzukọ adịghị irè." },
          { objective: "O3", q: "Kedu omume kacha echebe ego otu ahụ?", options: ["Otu onye na-edebe ego niile n'ụlọ ya", "Enweghị akwụkwọ nnata, iji chekwaa akwụkwọ", "Ndị abụọ na-abịanye aka, akwụkwọ nnata, na ịgụpụta akaụntụ n'olu dị elu", "Kesaa PIN ahụ na ndị otu niile"], answer: 2, why: "Ndị abụọ na-akwado, akwụkwọ nnata na akaụntụ ghere oghe na-eme ka izu ohi na mperi sie ike." }
        ]
      }
    },
    {
      name: "Isi 2: Iru ahịa ọnụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nchịkọta na ire ọnụ",
          minutes: 5,
          goal: "Hazie ụbọchị nchịkọta ebe a na-elele ihe ubi ndị otu, tụọ ya ibu, dekọọ ya ma kwụọ ụgwọ n'ụzọ ziri ezi.",
          text: [
            "Nchịkọta (aggregation) pụtara ịchịkọta obere ihe ubi ọtụtụ ndị otu ka ọ bụrụ otu nnukwu ibu nke dị otu. Ndị na-azụ buru ibu dị ka ndị na-emezi ihe ubi (processors), ndị na-egwe ọka, ụlọ akwụkwọ, nnukwu ụlọ ahịa (supermarket) na ndị na-ebupụ ihe na mba ọzọ chọrọ ọtụtụ ihe nke otu ịdị mma n'oge niile, e wetara n'oge. Otu nwere ike ijupụta lorry n'ihe ubi dị ọcha, kpọrọ nkụ ma hazie n'ọkwa nwere ike ire ha ma nweta ego karịa n'ọnụ ugbo.",
            "Duzie ebe nchịkọta ma ọ bụ ụbọchị nchịkọta nwere iwu doro anya: ịdị mma onye na-azụ chọrọ (dịka ọmụmaatụ ọka kpọrọ nkụ, dị ọcha, e hazirila, nke mmiri dị na ya erughị ókè onye na-azụ kwuru), ihe ọtụtụ ibu (scale) a tụkwasịrị obi, na ndekọ maka nnyefe ọ bụla. Lelee ma hazie ihe ubi onye otu ọ bụla n'ọkwa, tụọ ya ibu n'ihu ya, dee ya n'akwụkwọ nnyefe ma nye akwụkwọ nnata. Chekwaa ibu ahụ nke ọma ruo mgbe onye na-azụ bịara were ya.",
            "Kwụọ ndị otu ụgwọ dịka ndekọ si dị: ibu mụbara n'ọnụahịa a kwekọrịtara maka ọkwa ha, wepụ ụgwọ otu ọ bụla a kwekọrịtara maka njem, nchekwa ma ọ bụ akpa, nke e kpebiri tupu oge eruo ma dee ya n'iwu otu ma ọ bụ ndekọ nzukọ. Kwụọ ụgwọ n'oge, site na mobile money ma ọ bụ ụlọ akụ ebe ọ dị. Ịkwụ ụgwọ ngwa ngwa, n'ụzọ ziri ezi ma ghere oghe bụ ihe kacha egbochi ire n'azụ."
          ],
          steps: ["Kwekọọ n'iwu ịdị mma onye na-azụ ma gwa ndị otu niile tupu oge eruo.", "Kpebie ụbọchị nchịkọta, ebe ya na ihe ọtụtụ ibu a tụkwasịrị obi.", "Lelee, hazie n'ọkwa ma tụọ ibu nnyefe ọ bụla n'ihu onye otu ahụ.", "Dee ya n'akwụkwọ nnyefe; nye akwụkwọ nnata.", "Chekwaa ibu ahụ nke ọma; weere ya nye onye na-azụ ọnụ.", "Kwụọ onye otu ọ bụla ụgwọ dịka ndekọ si dị, wepụ ụgwọ a kwekọrịtara, n'oge."],
          words: [["Nchịkọta (aggregation)", "ịchịkọta ọtụtụ obere ihe ka ọ bụrụ otu nnukwu ibu."], ["Ebe nchịkọta (collection point)", "ebe ndị otu na-ewebata ihe ubi ka e lelee ya ma dekọọ ya."], ["Ibu (lot)", "otu ìgwè ihe ubi nke otu ụdị na otu ọkwa."]],
          slides: [
            { title: "Ihe mere a ga-eji chịkọta", bullets: ["Ndị na-azụ buru ibu chọrọ ọtụtụ, ịdị mma, oge", "Jupụta lorry n'otu ọkwa", "Ọnụahịa ka mma karịa n'ọnụ ugbo"] },
            { title: "Ụbọchị nchịkọta", bullets: ["A maara iwu ịdị mma onye na-azụ tupu oge eruo", "Hazie n'ọkwa ma tụọ ibu n'ihu onye otu", "Dekọọ ya ma nye akwụkwọ nnata"] },
            { title: "Kwụọ ụgwọ n'ụzọ ziri ezi na ngwa ngwa", bullets: ["Ibu x ọnụahịa maka ọkwa", "Wepụ ụgwọ a kwekọrịtara tupu oge eruo", "N'oge, site na mobile money ma ọ bụ ụlọ akụ"] }
          ],
          tryIt: "Hazie otu ụbọchị nchịkọta maka otu gị: ụbọchị, ebe, ihe ọtụtụ ibu, iwu ịdị mma onye na-azụ, onye na-edekọ, na ụgwọ otu maka akpa ọ bụla ma ọ bụ kilo ọ bụla a kwekọrịtara tupu oge eruo. Dee otu na mgbe a ga-akwụ ndị otu ụgwọ.",
          youCanNow: "iduzi ụbọchị nchịkọta ziri ezi na ịkwụ ndị otu ụgwọ dịka ndekọ doro anya si dị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ebe nchịkọta ma ọ bụ ụbọchị nchịkọta?", options: ["Oriri maka ndị otu", "Alaka ụlọ akụ", "Ọfịs onye na-azụ", "Ebe na ụbọchị ndị otu na-ewebata ihe ubi ka e lelee ya, tụọ ya ibu ma dekọọ ya"], answer: 3, why: "N'ebe nchịkọta, a na-elele ihe ubi, hazie ya n'ọkwa, tụọ ya ibu, dekọọ ya ma chekwaa ya ruo mgbe onye na-azụ bịara were ya." },
            { objective: "O4", q: "Ọka otu onye otu nwere mmiri karịa ka onye na-azụ kwere. Gịnị ka ị ga-eme n'ebe nchịkọta?", options: ["Gwakọta ya na ọka kpọrọ nkụ ka onye ọ bụla ghara ịmata", "Kwụọ onye otu ahụ ụgwọ okpukpu abụọ", "Etinyela ya n'ibu ahụ ruo mgbe ọ kpọrọ nkụ ruo ọkwa onye na-azụ chọrọ", "Zoo ya n'ala lorry"], answer: 2, why: "Ibu ahụ ga-eru ịdị mma onye na-azụ chọrọ, ya mere a na-elele ihe ubi ma hazie ya n'ọkwa tupu a nabata ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele ọnụahịa ahịa site n'ekwentị",
          minutes: 5,
          goal: "Chọta ọnụahịa site n'opekata mpe ebe atọ ma gbakọọ ihe onyinye bara n'ezie n'ugbo gị.",
          text: [
            "Erela ihe n'amaghị ọnụahịa. Jụọ opekata mpe ndị na-azụ atọ, gee ntị n'akụkọ ahịa na redio, ma lelee ọrụ ozi ahịa gọọmentị. Na Kenya, usoro KAMIS nke Ministry of Agriculture na-ebipụta ọnụahịa n'ọtụtụ (wholesale), ọnụahịa n'otu n'otu (retail) na ọnụahịa n'ọnụ ugbo maka ọtụtụ ihe ọkụkụ na anụ ụlọ site n'ahịa dị na counties niile. Na Naịjirịa na Ghana, jụọ ọfịs extension gị, otu ndị na-ere ihe ọkụkụ gị (commodity association) ma ọ bụ njikọ otu mmekọ (cooperative union) ọrụ ọnụahịa na-ekpuchi ihe ọkụkụ gị.",
            "Tụnyere ihe yiri ibe ya: ọnụahịa kilo ma ọ bụ akpa nke otu ọkwa ahụ, n'otu ebe ahụ. Ọnụahịa dị elu n'ahịa dị anya nwere ike ịdị ala mgbe i wepụrụ ụgwọ njem, ibunye ibu, ụgwọ ahịa na ihe furu efu. Gbakọọ ọnụahịa n'ugbo gị: ọnụahịa ahịa wepụ ụgwọ niile e ji ebuga ya ebe ahụ.",
            "Ekwentị na-enyere aka. Debe obere ndekọ ọnụahịa kwa izu, kesaa ya na WhatsApp otu ahụ, ma jiri ngwa ịgụ ọnụ (calculator) ma ọ bụ ngwa enyemaka AI tụnyere onyinye dị iche iche. Kpachara anya maka aghụghọ: onye ọ bụla na-arịọ gị ka ị kwụọ ụgwọ iji nweta ọnụahịa dị elu \"a kwadoro\", ma ọ bụ na-arịọ PIN mobile money gị, abụghị ezi onye na-azụ."
          ],
          steps: ["Nweta ọnụahịa site n'opekata mpe ebe atọ: ndị na-azụ, redio, ọrụ gọọmentị.", "Lelee na nke ọ bụla bụ maka otu ihe ọkụkụ, otu ọkwa na otu ụdị ọtụtụ.", "Wepụ ụgwọ njem, ibunye ibu, ụgwọ ndị ọzọ na ihe furu efu iji nweta ọnụahịa n'ugbo.", "Dekọọ ọnụahịa kwa izu ma kesaa ya na otu ahụ.", "Leghara onye ọ bụla na-arịọ ụgwọ ma ọ bụ PIN iji nyere gị ọnụahịa anya."],
          words: [["Ọnụahịa n'ọnụ ugbo (farm-gate price)", "ọnụahịa onye na-azụ na-akwụ gị n'ugbo gị."], ["Ọnụahịa n'ọtụtụ (wholesale price)", "ọnụahịa maka ọtụtụ ihe a na-ere ndị ahịa ma ọ bụ ụlọ ahịa."], ["Ọrụ ozi ahịa", "ọrụ na-ebipụta ọnụahịa ahịa nke ugbu a."]],
          slides: [
            { title: "Opekata mpe ebe atọ", bullets: ["Ọtụtụ ndị na-azụ", "Akụkọ ahịa na redio", "Ọrụ gọọmentị (Kenya: KAMIS)"] },
            { title: "Tụnyere ihe yiri ibe ya", bullets: ["Otu ihe ọkụkụ, otu ọkwa na otu ụdị ọtụtụ", "Ọnụahịa ahịa wepụ ụgwọ njem na ụgwọ ndị ọzọ", "= ihe ọ bara n'ugbo gị"] },
            { title: "Jiri ekwentị nke ọma", bullets: ["Ndekọ ọnụahịa kwa izu; kesaa ya na otu", "Calculator ma ọ bụ AI iji tụnyere onyinye", "Ezi ndị na-azụ anaghị arịọ ụgwọ ma ọ bụ PIN"] }
          ],
          sources: [KAMIS],
          tryIt: "N'izu a, nweta ọnụahịa otu ihe ọkụkụ site n'ebe atọ ma dee ha na tebụl: ebe, ọnụahịa, ọkwa, ụdị ọtụtụ, ebe ahịa. Gbakọọ ọnụahịa n'ugbo gị maka abụọ kacha mma mgbe i wepụrụ ụgwọ njem. Kedu onyinye na-akwụ ụgwọ karịa n'ezie?",
          youCanNow: "ịlele ọnụahịa site n'ọtụtụ ebe na ịgbakọ onyinye na-akwụ ụgwọ karịa n'ezie.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka \"tụnyere ihe yiri ibe ya\" pụtara maka ọnụahịa?", options: ["Tụnyere ọnụahịa kilo ma ọ bụ akpa nke otu ọkwa ahụ n'otu ebe ahụ", "Tụnyere naanị ọnụahịa kacha elu", "Tụnyere afọ a na afọ iri gara aga", "Tụnyere ọka na tomato"], answer: 0, why: "Ọnụahịa na-atụnyere n'ụzọ ziri ezi naanị maka otu ọkwa, otu ụdị ọtụtụ na otu ebe." },
            { objective: "O5", q: "Otu gị chọrọ iso ọnụahịa kwa izu. Gịnị ka ị ga-eme?", options: ["Jụọ otu onye ahịa otu ugboro n'oge ọ bụla", "Debe obere ndekọ ọnụahịa kwa izu ma kesaa ya na WhatsApp otu ahụ", "Chepụta ya site n'afọ gara aga", "Chere ka onye na-azụ gwa gị"], answer: 1, why: "Ndekọ ọnụahịa kwa izu e kesara n'otu na-enyere ndị otu aka ịmata ọnụahịa tupu ha ere." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nkwekọrịta ya na ndị na-azụ",
          minutes: 6,
          goal: "Gụọ nkwekọrịta onye na-azụ ma lelee isi okwu ya tupu otu ahụ abịanye aka.",
          text: [
            "Nkwekọrịta (contract) bụ nkwekọ e dere ede n'etiti otu ahụ na onye na-azụ. Ezigbo nkwekọrịta na-enye ahịa doro anya na ọnụahịa a maara; nke ọjọọ nwere ike ịhapụ otu ahụ n'ihe ubi onye ọ bụla na-abịaghị were, ma ọ bụ ego na-anaghị abịa. Mee ka e dee ahịa ọ bụla ede, ọbụlagodi ya na onye na-azụ ị maara.",
            "Lelee okwu ndị a: ihe a na-ere na ọkwa ya; ole na mgbe ole; ọnụahịa, ma ọ bụ kpọmkwem otu a ga-esi kpebie ya (dịka ọmụmaatụ ọnụahịa ahịa n'ụbọchị nnyefe gbakwunye ma ọ bụ wepụ otu ego); ebe nnyefe na-eme na onye na-akwụ ụgwọ njem; otu a ga-esi lelee ịdị mma na ihe ga-eme ihe ubi a jụrụ; mgbe na otu a ga-esi kwụọ ụgwọ; ihe ga-eme ma owuwe ihe ubi daa ma ọ bụ onye na-azụ abịaghị were ya; na otu a ga-esi dozie esemokwu.",
            "Ọ bụrụ na akụkụ ọ bụla edoghị anya, rịọ onye na-azụ ka o dee nkọwa ya. Gụpụta ya n'olu dị elu na nzukọ ndị otu ka onye ọ bụla ghọta ọrụ ya, gụnyere na a gaghị ere n'azụ. Rịọ ọfịs otu mmekọ gị, onye ndụmọdụ ọrụ ugbo (extension) ma ọ bụ ọka iwu ka ha lelee nnukwu nkwekọrịta. Ngwa enyemaka AI nwere ike ịkọwa okwu siri ike n'asụsụ dị mfe, mana etinyela ozi akaụntụ ụlọ akụ otu ahụ ma ọ bụ PIN na ya, ọ dịghịkwa anọchi ndụmọdụ iwu."
          ],
          steps: ["Nweta onyinye ahụ n'ederede.", "Lelee ihe a na-ere, ọkwa, ọnụọgụ na ụbọchị.", "Lelee ọnụahịa ma ọ bụ otu a ga-esi kpebie ya, ebe nnyefe na onye na-akwụ ụgwọ njem.", "Lelee nlele ịdị mma, iwu maka ihe a jụrụ, ụbọchị ịkwụ ụgwọ na ụzọ a ga-esi kwụọ ya.", "Lelee ihe ga-eme ma owuwe ihe ubi daa ma ọ bụ onye na-azụ abịaghị were ya, na otu a ga-esi dozie esemokwu.", "Gụọrọ ndị otu ya; mee ka e lelee nnukwu nkwekọrịta tupu a bịanye aka."],
          words: [["Nkwekọrịta (contract)", "nkwekọ e dere ede nke akụkụ abụọ ahụ ga-edebe."], ["Ịjụ ihe ubi (rejection)", "mgbe onye na-azụ jụrụ ihe ubi na-erughị ịdị mma a kwekọrịtara."], ["Esemokwu (dispute)", "nghọtahie n'etiti otu ahụ na onye na-azụ."]],
          slides: [
            { title: "Mgbe niile n'ederede", bullets: ["Ọbụlagodi ya na onye na-azụ ị maara", "Ahịa doro anya na ọnụahịa a maara", "Okwu ọjọọ nwere ike imefu otu ahụ niile ego"] },
            { title: "Lelee okwu ndị ahụ", bullets: ["Ihe a na-ere, ọkwa, ọnụọgụ, ụbọchị", "Ọnụahịa ma ọ bụ otu a ga-esi kpebie ya; nnyefe na njem", "Nlele ịdị mma, ịjụ ihe ubi, ụbọchị na ụzọ ịkwụ ụgwọ"] },
            { title: "Mgbe ihe na-agaghị nke ọma", bullets: ["Owuwe ihe ubi daa ma ọ bụ onye na-azụ abịaghị were ya", "Otu a ga-esi dozie esemokwu", "Rịọ onye na-azụ ka o dee nkọwa ya"] },
            { title: "Tupu ịbịanye aka", bullets: ["Gụpụta ya n'olu dị elu nye ndị otu", "Nnukwu nkwekọrịta: ọfịs otu mmekọ, extension ma ọ bụ ọka iwu", "AI nwere ike ịkọwa okwu; enweghị ozi akaụntụ ụlọ akụ ma ọ bụ PIN"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ire ahịa otu gị nke peeji otu maka otu ihe ọkụkụ. Tinye ebumnuche otu ahụ, iwu otu ise, ebe ị ga-edebanye aha, ndekọ gị, otu ndị otu si ewete ihe ubi na otu a si akwụ ha ụgwọ, ọnụahịa site n'ebe atọ, na okwu nkwekọrịta ị ga-elele tupu i bịanye aka.",
          youCanNow: "ịgụ nkwekọrịta onye na-azụ, ilele isi okwu ya, na ịhazi otu otu gị ga-esi ere ọnụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ nkwekọrịta onye na-azụ?", options: ["Akwụkwọ nnata maka otu akpa", "Ozi WhatsApp na-ekele gị", "Nkwekọ e dere ede n'etiti otu ahụ na onye na-azụ", "Ego e binyere site n'ụlọ akụ"], answer: 2, why: "Nkwekọrịta bụ nkwekọ e dere ede na-akọwa ihe akụkụ abụọ ahụ ga-eme." },
            { objective: "O6", q: "Ndị otu aghọtaghị okwu ịdị mma dị na nkwekọrịta ahụ. Gịnị ka ị ga-eme tupu a bịanye aka?", options: ["Bịanye aka ngwa ngwa tupu onye na-azụ apụọ", "Hapụ onye isi oche ka ọ bịanye aka naanị ya", "Leghara okwu ịdị mma anya", "Rịọ onye na-azụ ka o dee nkọwa ya ma gụpụta ya n'olu dị elu na nzukọ ndị otu"], answer: 3, why: "A na-ede nkọwa akụkụ ndị edoghị anya ma gụpụta ha n'olu dị elu ka onye otu ọ bụla ghọta ọrụ ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iru ahịa ọnụ",
        questions: [
          { objective: "O4", q: "Gịnị mere ndị na-azụ buru ibu ji achọ ịzụ n'aka otu?", options: ["Otu na-ere ihe n'ọnụ ala mgbe niile", "Otu nwere ike iwete nnukwu ibu dị otu n'oge", "Otu achọghị ịdị mma", "Iwu manyere ndị na-azụ"], answer: 1, why: "Nchịkọta na-enye ọtụtụ ihe na ịdị mma na-adịgide adịgide nke ndị na-azụ buru ibu chọrọ." },
          { objective: "O4", q: "N'ebe nchịkọta, olee mgbe a ga-atụ ibu ihe ubi onye otu?", options: ["N'ihu onye otu ahụ, wee dekọọ ya ma nye akwụkwọ nnata", "Na nzuzo n'abalị", "Naanị mgbe onye na-azụ kwụrụ ụgwọ", "Ọ dịghị mgbe; chepụta ya"], answer: 0, why: "Ịtụ ibu n'ihu mmadụ na akwụkwọ nnata na-ewulite ntụkwasị obi ma na-egosi òkè onye otu ọ bụla." },
          { objective: "O5", q: "Ahịa dị anya na-akwụ pasent 10 karịa, mana ụgwọ njem na ụgwọ ndị ọzọ bụ pasent 15. Gịnị bụ eziokwu?", options: ["Ahịa dị anya na-akwụ karịa", "Ha abụọ na-akwụ otu ego", "Ụgwọ njem adịghị mkpa", "Ahịa dị anya na-akwụ obere n'ugbo gị"], answer: 3, why: "Mgbe e wepụrụ ụgwọ, ọnụahịa n'ugbo site n'ahịa dị anya dị ala." },
          { objective: "O5", q: "Na Kenya, kedu ọrụ gọọmentị na-ebipụta ọnụahịa ahịa ihe ọkụkụ na anụ ụlọ?", options: ["KAMIS", "KEBS", "KRA", "KMD"], answer: 0, why: "KAMIS, nke Ministry of Agriculture na-elekọta, na-ebipụta ọnụahịa ahịa." },
          { objective: "O6", q: "Kedu okwu nkwekọrịta na-agwa gị ihe ga-eme ma onye na-azụ abịaghị were ya?", options: ["Aha otu ahụ", "Ụbọchị nzukọ", "Okwu maka ọdịda ịbịa were ma ọ bụ iwete", "Agba akpa ndị ahụ"], answer: 2, why: "Nkwekọrịta kwesịrị ikwu ihe ga-eme ma akụkụ ọ bụla enweghị ike idebe nkwekọ ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Otu Mmekọ Ndị Ọrụ Ugbo na Iru Ahịa",
    questions: [
      { objective: "O1", q: "Kedu uru otu ndị ọrụ ugbo nwere?", options: ["Ịkwụ ụgwọ karịa maka ihe ọrụ ugbo", "Ịzụ ihe ọrụ ugbo n'ọtụtụ n'ọnụ ala", "Ire naanị gị n'ọnụ ugbo", "Enweghị ndekọ ọ bụla"], answer: 1, why: "Ịzụ n'ọtụtụ na-ebelata ọnụ ihe ọrụ ugbo." },
      { objective: "O1", q: "Dịka International Cooperative Alliance si kwuo, ndị otu mmekọ:", options: ["Nwe ya ma na-achị ya n'usoro onye kwuo uche ya", "Na-arụrụ onye nwe ya nke onwe ya ọrụ", "Enweghị votu", "Ga-abụ ndị ọrụ gọọmentị niile"], answer: 0, why: "Ndị otu nwe otu mmekọ ọnụ ma na-achị ya n'usoro onye kwuo uche ya." },
      { objective: "O1", q: "Kedu ihe na-emekarị ka otu ndị ọrụ ugbo daa?", options: ["Ndekọ doro anya", "Ịkwụ ụgwọ n'oge", "Enweghị ntụkwasị obi na ndekọ na-adịghị mma", "Nzukọ ghere oghe"], answer: 2, why: "Ntụkwasị obi dị ala na ndekọ na-adịghị mma na-agbasa otu." },
      { objective: "O2", q: "Gịnị bụ iwu otu (by-laws)?", options: ["Ego e binyere n'ụlọ akụ", "Ọnụahịa ahịa", "Nkwekọrịta ndị na-azụ", "Iwu e dere ede nke otu ahụ"], answer: 3, why: "Iwu otu na-akọwa otu otu ahụ si arụ ọrụ." },
      { objective: "O2", q: "\"Otu onye otu, otu votu\" pụtara:", options: ["Ndị otu nwere òkè karịa na-enweta votu karịa", "Naanị ndị isi na-atụ votu", "Onye otu ọ bụla nwere otu votu", "A na-azụ votu"], answer: 2, why: "Otu mmekọ na-enye onye otu ọ bụla otu votu." },
      { objective: "O2", q: "Na Kenya, a na-edebanye otu mmekọ aha n'okpuru Co-operative Societies Act site n'aka:", options: ["Commissioner for Co-operative Development", "Kenya Wildlife Service", "Onye na-azụ nke onwe ya", "Ngalaba ihu igwe"], answer: 0, why: "Commissioner na-edebanye otu aha, na-amalite n'ọfịs otu mmekọ nke county." },
      { objective: "O2", q: "Na Ghana, ebee ka otu mmekọ na-edebanye aha?", options: ["Ụlọ ọrụ ihu igwe", "Ọdụ redio", "Ụlọ ahịa ọ bụla", "Department of Co-operatives (ọfịs district)"], answer: 3, why: "Department of Co-operatives nke Ghana na-edebanye otu aha ma na-elekọta ha." },
      { objective: "O2", q: "Tupu i tinye akwụkwọ arịrịọ idebanye aha, i kwesịrị:", options: ["Chepụta ụgwọ ahụ", "Lelee fọm, ụgwọ na nzọụkwụ nke ugbu a n'ọfịs otu mmekọ", "Detuo iwu mba ọzọ", "Hapụ iwu otu"], answer: 1, why: "Iwu na ụgwọ na-agbanwe, ya mere lelee ya n'ọfịs ahụ." },
      { objective: "O3", q: "Ndekọ nzukọ (minutes) na-edekọ:", options: ["Naanị oge onye ọ bụla bịara", "Ọnụahịa ahịa", "PIN ndị otu", "Ndị bịara, ihe e kpebiri na onye ga-eme gịnị ka ọ na-erule oge ole"], answer: 3, why: "Ndekọ nzukọ bụ ndekọ mkpebi na ihe a ga-eme." },
      { objective: "O3", q: "Kedu nke bụ otu n'ime ndekọ anọ bụ isi nke otu?", options: ["Akwụkwọ nnyefe", "Akwụkwọ ihu igwe", "Ndepụta PIN ekwentị ndị na-azụ", "Akwụkwọ foto"], answer: 0, why: "Akwụkwọ nnyefe na-egosi ihe onye otu ọ bụla wetara." },
      { objective: "O3", q: "Gịnị mere akaụntụ otu ji kwesị inwe ndị abụọ na-abịanye aka?", options: ["Iji mee ka ịkwụ ụgwọ niile dị nwayọọ", "Ka otu onye ghara inwe ike iwepụ ego naanị ya", "N'ihi na ụlọ akụ na-ana obere ụgwọ", "Ka ndị otu ghara ịhụ akaụntụ"], answer: 1, why: "Ndị abụọ na-akwado na-echebe ego otu." },
      { objective: "O3", q: "Co-operative Societies Act nke Naịjirịa chọrọ ka akaụntụ otu e debanyere aha:", options: ["Bụrụ ihe nzuzo", "A na-akpọ ya ọkụ kwa afọ", "A na-enyocha ya kwa afọ", "Dịrị naanị na ncheta"], answer: 2, why: "Iwu ahụ chọrọ nyocha akaụntụ na njedebe afọ ego ọ bụla." },
      { objective: "O4", q: "Nchịkọta (aggregation) pụtara:", options: ["Ire otu akpa n'otu oge", "Ikewa otu ahụ", "Ịbụli ọnụahịa naanị gị", "Ịchịkọta ihe ubi ọtụtụ ndị otu ka ọ bụrụ otu nnukwu ibu"], answer: 3, why: "Nchịkọta na-agbakọta obere ihe maka ndị na-azụ buru ibu." },
      { objective: "O4", q: "Kedu otu a ga-esi kwụọ ndị otu ụgwọ mgbe otu rere ahịa?", options: ["Dịka ndekọ si dị: ibu x ọnụahịa maka ọkwa, wepụ ụgwọ a kwekọrịtara", "Nha nhata, n'agbanyeghị ihe ha wetara", "Naanị a na-akwụ ndị isi", "Mgbe ọ bụla onye na-edebe ego chọrọ"], answer: 0, why: "Ịkwụ ụgwọ ziri ezi e dekọrọ ede na-edebe ntụkwasị obi ma na-ebelata ire n'azụ." },
      { objective: "O4", q: "Ihe kacha egbochi ire n'azụ bụ:", options: ["Ọnụahịa nzuzo", "Ịkwụ ụgwọ n'oge gafere", "Ịkwụ ụgwọ ngwa ngwa, n'ụzọ ziri ezi ma ghere oghe", "Enweghị nkwekọrịta"], answer: 2, why: "Ndị otu na-anọgide n'otu mgbe otu ahụ na-akwụ ụgwọ nke ọma na n'oge." },
      { objective: "O5", q: "Ebe ọnụahịa ole ka i kwesịrị ilele tupu ire ahịa?", options: ["Ọ dịghị", "Naanị otu onye na-azụ", "Naanị redio", "Opekata mpe atọ"], answer: 3, why: "Ọtụtụ ebe na-egosi ezi ọnụahịa ahịa." },
      { objective: "O5", q: "Mmadụ kwere gị nkwa ọnụahịa dị elu a kwadoro ma ọ bụrụ na i buru ụzọ kwụọ ụgwọ ma kesaa PIN mobile money gị. Nke a bụ:", options: ["Onye na-azụ nkịtị", "O yikarịrị ka ọ bụ aghụghọ", "Iwu otu mmekọ", "Ọrụ gọọmentị"], answer: 1, why: "Ezi ndị na-azụ anaghị arịọ ụgwọ ma ọ bụ PIN." },
      { objective: "O5", q: "Ọnụahịa onyinye n'ugbo bụ:", options: ["Ọnụahịa ahịa wepụ ụgwọ njem, ụgwọ ndị ọzọ na ihe furu efu", "Ọnụahịa kacha elu ị nụrụ", "Ọnụahịa n'isi obodo mba", "Ọnụahịa n'otu n'otu (retail)"], answer: 0, why: "Ihe ị na-enweta n'ezie n'ugbo bụ ihe dị mkpa." },
      { objective: "O6", q: "Kedu ihe e kwesịrị ide na nkwekọrịta onye na-azụ?", options: ["Naanị aha onye na-azụ", "Ọnụahịa ma ọ bụ otu a ga-esi kpebie ya, ọnụọgụ, ịdị mma, nnyefe na okwu ịkwụ ụgwọ", "PIN ụlọ akụ ndị otu", "Ọ dịghị ihe; ịkwe aka zuru ezu"], answer: 1, why: "Okwu ndị a na-echebe otu ahụ ma ọ bụrụ na ihe ọ bụla agaghị nke ọma." },
      { objective: "O6", q: "Ị na-eji ngwa enyemaka AI aghọta nkwekọrịta. Kedu nke dị mma?", options: ["Tinye ozi akaụntụ ụlọ akụ otu ahụ na PIN", "Bịanye aka n'ihe ọ bụla ọ sị dị mma", "Rịọ ya ka ọ kọwaa okwu siri ike, wee mee ka onye ndụmọdụ lelee nnukwu nkwekọrịta", "Hapụ ya ka ọ bịanye aka n'ọnọdụ gị"], answer: 2, why: "AI nwere ike ịkọwa okwu mana ọ dịghị anọchi ndụmọdụ iwu, ozi nzuzo na-anọgidekwa na nzuzo." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 3, 7, 8, 10, 12, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ebumnuche na iwu otu", objective: "O2", notYet: "Ebumnuche edoghị anya, ma ọ bụ iwu erughị ise.", meets: "Aha otu ahụ, ebumnuche ya na iwu otu ise dị mkpa, dị ka ndị otu, ntuli aka, ego na ntaramahụhụ.", exceeds: "Iwu ndị ahụ na-ekpuchikwa ire n'azụ na otu a ga-esi kee uru ọ bụla fọdụrụ." },
      { name: "Ndebanye aha", objective: "O2", notYet: "Akpọghị aha ọfịs ndebanye aha ọ bụla.", meets: "Na-akpọ aha ọfịs ebe otu ahụ ga-edebanye aha na ihe a ga-elele n'ebe ahụ.", exceeds: "Akpọọla ọfịs ahụ oku ma ọ bụ gaa ya, ma dee nzọụkwụ nke ugbu a na ụbọchị ya." },
      { name: "Ndekọ na ego", objective: "O3", notYet: "Ndekọ adịghị, ma ọ bụ otu onye na-achị ego ahụ.", meets: "Ndepụta ndị otu, akwụkwọ ego, akwụkwọ nnyefe na ndekọ ịkwụ ụgwọ, ya na mmadụ abụọ na-akwado ịkwụ ụgwọ.", exceeds: "Na-ekwu otu a ga-esi gụọrọ ndị otu akaụntụ na otu a ga-esi nyochaa ya kwa afọ." },
      { name: "Nnyefe, ọkwa na ịkwụ ụgwọ", objective: "O4", notYet: "Enweghị iwu nchịkọta ma ọ bụ ịkwụ ụgwọ.", meets: "Otu ndị otu si ewete ihe ubi, otu a si ahazi ya n'ọkwa ma tụọ ya ibu n'ihu ha, na otu na mgbe a ga-akwụ ha ụgwọ.", exceeds: "E dere ụgwọ otu a kwekọrịtara na ụbọchị ịkwụ ụgwọ tupu oge eruo." },
      { name: "Ọnụahịa", objective: "O5", notYet: "Ebe ọnụahịa erughị atọ, ma ọ bụ enweghị ngụkọ ọnụahịa n'ugbo.", meets: "Ọnụahịa site n'opekata mpe ebe atọ, e tụnyere ihe yiri ibe ya, ya na ọnụahịa n'ugbo e gbakọrọ.", exceeds: "Gụnyere ndekọ ọnụahịa kwa izu ruo ọtụtụ izu." },
      { name: "Okwu nkwekọrịta", objective: "O6", notYet: "Okwu erughị isii, ma ọ bụ isi okwu dị ka ịkwụ ụgwọ adịghị.", meets: "Okwu nkwekọrịta isii a ga-elele, gụnyere ọnụahịa, ịdị mma, nnyefe, ịkwụ ụgwọ na ọdịda ịbịa were.", exceeds: "Na-akpọ aha onye ga-elele nnukwu nkwekọrịta, dị ka ọfịs otu mmekọ ma ọ bụ ọka iwu." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ire ahịa otu",
      "Otu na-akọ na ha dere iwu otu, debe ndekọ ma ọ bụ debanye aha n'ime ụbọchị 90 (nnyocha nsochi)",
      "Otu na-akọ na ha rere ahịa ọnụ nwere nkwekọrịta ederede, na ọnụahịa ahụ ma e jiri ya tụnyere ire naanị",
      "Ndị na-amụ ihe na-akọ na ha zere aghụghọ ụgwọ-maka-ọnụahịa ma ọ bụ aghụghọ PIN"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ ndetu na mkpịsị ode, ma ọ bụ akwụkwọ ndekọ maka otu ahụ",
      "Ekwentị nkịtị maka ọnụahịa, SMS ma ọ bụ WhatsApp, na calculator",
      "Iwu otu nlereanya site n'ọfịs otu mmekọ na ọmụmaatụ nkwekọrịta onye na-azụ, ọ bụrụ na ọ dị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunye oge iso otu ahụ dee atụmatụ ire ahịa"
    ],
    facilitatorNotes: [
      "Mee ihe ọmụmụ a ya na otu dị adị ma ọ bụ nke a na-amalite: meenụ ule mbido ọnụ, wee mee obere nzukọ omume nwere usoro nzukọ na ndekọ nzukọ.",
      "Kpọọ onye ọrụ otu mmekọ ka ọ kọwaa ndebanye aha; lelee ụgwọ na nzọụkwụ nke ugbu a tupu nnọkọ ahụ.",
      "Mee omume ụbọchị nchịkọta nwere ihe ọtụtụ ibu, ịhazi n'ọkwa na akwụkwọ nnyefe.",
      "Ejila mgbe ọ bụla rịọ ndị otu ka ha kesaa PIN ma ọ bụ ozi akaụntụ ụlọ akụ; jiri ihe nnọchi n'ọmụmaatụ ndekọ.",
      "Jiri rubric tụọ akara atụmatụ ire ahịa ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

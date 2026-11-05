"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-regulations.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const KCAA_FEES = { name: "KCAA: Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020 (L.N. 4 of 2021)", url: "https://www.kcaa.or.ke/sites/default/files/docs/uas/UASCharges.pdf" };
const KCAA_ROC = { name: "KCAA: Remote Air Operator Certificate (ROC)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/roc" };
const KCAA_UTO = { name: "KCAA: Unmanned Aircraft Systems Training Organizations (UTO)", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems/uto" };
const KCAA_REGS_2026 = { name: "KCAA: Kenya Civil Aviation Regulations 2026 (published regulations)", url: "https://www.kcaa.or.ke/published-regs-2026" };
const KENYA_LAW_UAS = { name: "Kenya Law: The Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 (L.N. 42 of 2020)", url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/42" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nigeria)", url: "https://www.nafdac.gov.ng" };
const ODPC = { name: "Office of the Data Protection Commissioner (Kenya)", url: "https://www.odpc.go.ke" };
const NDPC = { name: "Nigeria Data Protection Commission (NDPC)", url: "https://ndpc.gov.ng" };

module.exports = {
  id: "agri-drones-regulations-ig",
  lang: "ig",
  translationOf: "agri-drones-regulations",
  category: "Agriculture (Africa)",
  name: "Drone Ugbo n'Afrịka: Iwu Ụgbọelu na Ikike (Licence)",
  skills: "Ịchọta na ịgụ iwu drone nke mba gị, Ịkewa drone na ọrụ site n'ihe egwu ya, Ịdepụta ikike na asambodo ọrụ chọrọ, Ijikwa ọrụ pụrụ iche (ịgba ọgwụ, BVLOS, nso ọdụ ụgbọelu), Iwulite faịlụ nrubeisi iwu, Ịnọgide na-ama mgbanwe iwu",
  outcome: "ịgụ iwu drone nke mba gị, ịchọpụta ndebanye aha, ikike, asambodo na nnabata ọrụ drone ugbo chọrọ, na iwulite faịlụ nrubeisi iwu zuru ezu maka azụmahịa ọrụ drone.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị chọrọ ịfe drone dị ka ọrụ n'ugbo n'Afrịka: ndị na-azụ ahịa ọrụ drone, ndị njikwa azụmahịa ugbo na estate, ndị isi otu ndị ọrụ ugbo (cooperative) na extension, na ndị ntorobịa na-amụ ọrụ onye ọkwọ drone (remote pilot). Ọ na-aga n'ime karịa nkọwa mbụ dị n'usoro nlekọta.",
    "Isi 1 na-akọwa otu e si wuo iwu drone, wee gosi iwu Kenya na Nigeria: Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020 nke Kenya Civil Aviation Authority (KCAA) na-elekọta, na Part 21 nke Nigeria Civil Aviation Regulations 2023 nke Nigeria Civil Aviation Authority (NCAA) na-elekọta. Isi 2 na-akụzi ikike na asambodo onye ọrụ (operator), ọrụ pụrụ iche dị ka ịgba ọgwụ na ịfe nso ọdụ ụgbọelu, na iwulite na idebe faịlụ nrubeisi iwu.",
    "Nke a bụ agụmakwụkwọ, ọ bụghị ndụmọdụ iwu. Iwu drone bụ iwu, ọ na-agbanwe, mba Afrịka ndị ọzọ nwekwara ụlọ ọrụ na iwu nke ha. Nkuzi ọ bụla na-egosi isi iyi gọọmentị; kwenye ihe niile n'ebe ahụ, ma ọ bụ n'ụlọ ọrụ ahụ ma ọ bụ n'aka ọka iwu, tupu i mee ihe. Efela drone mgbe ọ bụla n'enweghị ndebanye aha, ikike na nnabata mba gị chọrọ."
  ],
  finalTask: "Wuo faịlụ nrubeisi iwu maka azụmahịa ọrụ drone na mba gị nke ga-ese maapụ ihe ọkụkụ maka ndị ọrụ ugbo na estate (na, ọ bụrụ na ị na-eme atụmatụ ya, ịgba ọgwụ): ụlọ ọrụ na iwu metụtara ya, ya na njikọ na ụbọchị i lere ya; ọkwa drone gị na ụdị ihe egwu ọrụ ahụ; ndebanye aha, ikike, licence, asambodo na nnabata niile achọrọ, onye na-enye ya na ọnọdụ ya; akwụkwọ achọrọ (akwụkwọ ntuziaka ọrụ, inshọransị, ndekọ nlekọta na ndekọ ụgbọ efe); nnabata ndị ọzọ maka ịgba ọgwụ ọ bụla; nzọụkwụ nchekwa data; na usoro oge maka ilele mgbanwe iwu na mmeghari ikike.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị chọrọ ịfe drone dị ka ọrụ n'ugbo n'Afrịka: ndị na-azụ ahịa ọrụ drone, ndị njikwa azụmahịa ugbo na estate, ndị isi cooperative na extension, na ndị ntorobịa na-amụ ọrụ remote pilot, karịsịa na Kenya na Nigeria.",
    startingPoint: "Ọtụtụ maara ihe drone ugbo na-eme, ụfọdụ efela obere drone. Ole na ole gụrụ iwu drone nke mba ha, mara ikike na asambodo ọrụ a na-akwụ ụgwọ chọrọ, ma ọ bụ debe akwụkwọ onye nyocha, onye ahịa ma ọ bụ ụlọ ọrụ inshọransị ga-arịọ.",
    gap: "Ịfe drone maka ego n'enweghị ezi ndebanye aha, licence, asambodo onye ọrụ ma ọ bụ nnabata nwere ike iweta ntaramahụhụ ego, iwepụ drone n'aka gị na ịtụfu ndị ahịa; ịgba ọgwụ n'enweghị nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ na-etinye ndị mmadụ na ihe ọkụkụ n'ihe egwu. Ịmara ịgụ iwu na iwulite faịlụ nrubeisi iwu na-enyere azụmahịa drone aka ịrụ ọrụ n'ụzọ iwu kwadoro, nweta nkwekọrịta ọrụ ma nweta inshọransị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu iwu na okwu ụgbọelu ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ịntanetị iji meghee weebụsaịtị ụlọ ọrụ ahụ ma budata iwu",
      "Iwu, ụgwọ na fọm na-agbanwe: ndị na-amụ ihe na-ekwenye ihe niile na saịtị gọọmentị, n'ụlọ ọrụ ahụ ma ọ bụ n'aka ọka iwu",
      "Nke a bụ agụmakwụkwọ, ọ bụghị ndụmọdụ iwu; ọ dịghị ịfe drone ma ọ bụ ịgba ọgwụ n'ime ihe ọmụmụ a",
      "Mba Afrịka ndị ọzọ nwere ụlọ ọrụ na iwu nke ha, ya mere ndị na-amụ ihe na-eji usoro a na mba nke ha"
    ],
    prerequisites: "A na-atụ aro ka ị buru ụzọ were \"Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka mba gị", action: "ịchọta iwu drone, ụkpụrụ na ndepụta ụgwọ nke ụlọ ọrụ ụgbọelu obodo ma kpọọ aha akụkụ ọ bụla nke iwu drone", standard: "ya na njikọ na ụbọchị i lere ya" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ drone ugbo a na-akwụ ụgwọ na Kenya", action: "ịdepụta ndebanye aha, licence, asambodo na nnabata KCAA ọ ga-achọ", standard: "na-akpọ aha iwu ha si na ya pụta ma na-ekwu na a ga-elele ụgwọ ugbu a na iwu ọhụrụ" },
    { id: "O3", condition: "Mgbe e nyere gị ibu drone na ọrụ a na-eme atụmatụ na Nigeria", action: "ịkewa drone ahụ na ụdị ihe egwu ọrụ ahụ n'okpuru Part 21 ma depụta oke ọrụ metụtara ya", standard: "ya na ezi ọkwa ibu na ezi ụdị ihe egwu" },
    { id: "O4", condition: "Maka azụmahịa ọrụ drone", action: "ime atụmatụ licence ndị ọkwọ drone na asambodo onye ọrụ ọ chọrọ, na akwụkwọ asambodo ahụ na-arịọ", standard: "na-ekewa nnabata maka onye na-efe ya na nnabata maka azụmahịa ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ gụnyere ịgba ọgwụ, BVLOS, ịfe n'abalị ma ọ bụ ọdụ ụgbọelu", action: "ịmata nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ ọzọ ọ chọrọ na onye na-enye ha", standard: "tupu ị nye ọrụ ahụ ma ọ bụ mee atụmatụ ya" },
    { id: "O6", condition: "Maka azụmahịa drone gị", action: "iwulite faịlụ nrubeisi iwu na usoro oge maka mmeghari ikike na ilele iwu", standard: "ya na akwụkwọ ọ bụla achọrọ e depụtara na ọnọdụ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu drone n'Afrịka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Otu e si wuo iwu drone",
          minutes: 5,
          goal: "Chọta ma kpọọ aha akụkụ iwu drone metụtara mba gị.",
          text: [
            "Mba dị iche iche na-ewu iwu ụgbọelu ha n'ụkpụrụ mba ụwa nke ICAO, International Civil Aviation Organization nke UN, mana mba ọ bụla na-ede ma na-akwado iwu drone nke ya. Ọ na-adịkarị: iwu ụgbọelu (act) nke ụlọ omebe iwu (parliament) mere; iwu drone (regulations) e mere n'okpuru iwu ahụ; ụkpụrụ mmejuputa (implementing standards) ma ọ bụ akwụkwọ ntuziaka nwere nkọwa teknụzụ; ndepụta ụgwọ; na ọkwa ma ọ bụ akwụkwọ ozi (circulars) maka okwu pụrụ iche.",
            "Ọtụtụ iwu drone ọhụrụ na-ekewa ọrụ site n'ihe egwu ha. Ịfe nwere obere ihe egwu (obere drone, n'ihu anya, n'ala ala, n'ebe dị anya site na ndị mmadụ na ọdụ ụgbọelu) nwere ihe achọrọ kacha dị mfe. Ịfe nwere ihe egwu dị elu (drone dị arọ, gafere ebe anya ruru, n'elu ndị mmadụ, nso ọdụ ụgbọelu, ịgba ọgwụ ma ọ bụ ịtụda ihe) chọrọ karịa: nnabata, ndị ọrụ nwere asambodo, ndị ọkwọ nwere licence, na mgbe ụfọdụ ụgbọelu nwere asambodo.",
            "Iji chọta iwu mba gị, gaa na weebụsaịtị ụlọ ọrụ ụgbọelu obodo (civil aviation authority) ma chọọ akụkụ a kpọrọ drones, UAS, RPAS ma ọ bụ unmanned aircraft. Budata iwu, ụkpụrụ na ndepụta ụgwọ, ma dee ụbọchị. Ọmụmaatụ ụlọ ọrụ: KCAA (Kenya), NCAA (Nigeria), na ụlọ ọrụ ụgbọelu obodo nke Ghana, Rwanda, Uganda, Tanzania na South Africa."
          ],
          steps: ["Meghee weebụsaịtị ụlọ ọrụ ụgbọelu obodo gị.", "Chọta akụkụ drones / UAS / RPAS.", "Budata iwu, ụkpụrụ mmejuputa na ndepụta ụgwọ.", "Dee ụbọchị na ụdị (version) nke ọ bụla.", "Depụta otu iwu ahụ si ekewa ọrụ site n'ihe egwu."],
          words: [["ICAO", "International Civil Aviation Organization, otu ụlọ ọrụ UN na-ehiwe ụkpụrụ ụgbọelu mba ụwa."], ["Iwu (regulations)", "iwu e kwesịrị irube isi na ya, e mere n'okpuru iwu ụlọ omebe iwu."], ["Ụkpụrụ mmejuputa (implementing standards)", "iwu teknụzụ zuru ezu na-akọwa otu e si erube isi n'iwu ahụ."], ["Ụdị ihe egwu (risk category)", "otu ọrụ ndị nwere ihe egwu yiri ibe ya na ihe achọrọ yiri ibe ya."]],
          slides: [
            { title: "Akụkụ iwu drone", bullets: ["Iwu ụgbọelu (act)", "Iwu drone n'okpuru iwu ahụ", "Ụkpụrụ mmejuputa na ndepụta ụgwọ", "Ọkwa na akwụkwọ ozi (circulars)"] },
            { title: "Iwu na-eso ihe egwu", bullets: ["Obere ihe egwu: obere, n'ihu anya, n'ala ala, n'ebe ndị mmadụ na-anọghị", "Ihe egwu dị elu: dị arọ, gafere ebe anya ruru, n'elu ndị mmadụ", "Ịgba ọgwụ ma ọ bụ ịtụda ihe: nnabata ndị ọzọ"] },
            { title: "Chọta iwu gị", bullets: ["Weebụsaịtị ụlọ ọrụ: drones, UAS ma ọ bụ RPAS", "Budata iwu, ụkpụrụ, ụgwọ", "Dee ụbọchị na ụdị (version)"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Maka mba gị, depụta ụlọ ọrụ ụgbọelu, aha na afọ iwu drone, ma e nwere ụkpụrụ mmejuputa na ndepụta ụgwọ, na ụbọchị i lere ya. Chekwaa akwụkwọ ndị ahụ n'otu folda.",
          youCanNow: "ịchọta akụkụ iwu drone dị na mba gị ma hụ otu ha si ekewa ọrụ site n'ihe egwu.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ndepụta ụgwọ (fee schedule) n'iwu drone?", options: ["Atụmatụ ụgbọ efe", "Ndepụta ndị ọkwọ drone", "Ndepụta nnabata dị adị na ego ọ bụla na-efu", "Amụma ihu igwe"], answer: 2, why: "Ndepụta ụgwọ na-egosi nnabata na ụgwọ ha, ya mere ọ na-egosi ihe dị adị." },
            { objective: "O1", q: "Ị chọrọ iwu drone nke mba gị. Ebee ka ị ga-ebu ụzọ lee?", options: ["Weebụsaịtị ụlọ ọrụ ụgbọelu obodo, n'akụkụ drones, UAS ma ọ bụ RPAS ya", "Mgbasa ozi onye na-ere drone", "Otu na soshal midia", "Vidiyo si mba ọzọ"], answer: 0, why: "Ụlọ ọrụ ụgbọelu obodo nke mba ọ bụla na-ebipụta iwu drone, ụkpụrụ na ụgwọ nke ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kenya: KCAA na UAS Regulations 2020",
          minutes: 6,
          goal: "Depụta nnabata Kenya onye na-arụ ọrụ drone ugbo maka ego ga-achọ.",
          text: [
            "Na Kenya, iwu na-achị drone bụ Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020, e mere n'okpuru Civil Aviation Act, 2013, KCAA na-elekọtakwa ya. Peeji drone KCAA na-ebipụtakwa Manual of Implementing Standards (akwụkwọ ụkpụrụ mmejuputa) na ndepụta ụgwọ, Civil Aviation (Regulatory Fees and Charges for Unmanned Aircraft Systems) Regulations, 2020.",
            "Ndepụta ụgwọ ahụ na-egosi isi nnabata ndị dị adị: ikike ibubata (import permit) na ndebanye aha drone; asambodo airworthiness (na drone dị mma ịfe); Remote Air Operator Certificate (ROC) maka ndị ọrụ; nnabata ọrụ maka Category A na maka Categories B na C; licence maka ndị mmadụ, gụnyere student remote pilot licence, remote pilot licence (RPL), na ratings dị ka ịfe gafere ebe anya ruru (BVLOS); na nnabata maka ụlọ ọzụzụ na ndị na-ere drone. KCAA na-edepụta ndị nwere ROC na ụlọ ọzụzụ a nabatara na saịtị ya, a na-etinyekwa arịrịọ site na sistemụ drone ya n'ịntanetị.",
            "Saịtị KCAA na-edepụtakwa Kenya Civil Aviation Regulations ọhụrụ e bipụtara maka 2026. Lelee ma ọ bụrụ na nke ọ bụla n'ime ha na-agbanwe iwu drone tupu ị dabere n'ụdị 2020, ma lelee ụgwọ ugbu a n'ụbọchị ị na-etinye arịrịọ."
          ],
          words: [["KCAA", "Kenya Civil Aviation Authority, ụlọ ọrụ na-achịkwa drone na Kenya."], ["ROC", "Remote Air Operator Certificate: nnabata KCAA na-enye otu ụlọ ọrụ ka ọ rụọ ọrụ drone."], ["SRPL / RPL", "student remote pilot licence (licence nwa akwụkwọ) / remote pilot licence (licence onye ọkwọ drone)."], ["Asambodo airworthiness", "nkwenye gọọmentị na ụgbọelu dị mma ma dị nchebe ịfe."]],
          slides: [
            { title: "Iwu drone Kenya", bullets: ["Civil Aviation (UAS) Regulations, 2020", "E mere ya n'okpuru Civil Aviation Act, 2013", "KCAA na-elekọta ya"] },
            { title: "Nnabata dị na ndepụta ụgwọ", bullets: ["Ikike ibubata na ndebanye aha", "ROC maka ndị ọrụ", "Nnabata ọrụ: Category A; B na C", "SRPL, RPL, BVLOS na ratings ndị ọzọ"] },
            { title: "Ebe a na-etinye arịrịọ na ilele", bullets: ["Sistemụ drone KCAA n'ịntanetị", "Ndepụta ndị nwere ROC na ụlọ ọzụzụ", "Lelee iwu 2026 na ụgwọ ugbu a"] }
          ],
          sources: [KCAA_UAS, KENYA_LAW_UAS, KCAA_FEES, KCAA_ROC, KCAA_UTO, KCAA_PORTAL, KCAA_REGS_2026],
          tryIt: "Meghee peeji drone KCAA na ndepụta ụgwọ ya. Mee tebụl nke nnabata ọ bụla azụmahịa na-ese maapụ estate tii maka ego ga-achọ (drone, ndị mmadụ, ụlọ ọrụ, ọrụ), ya na kọlụm maka ebe a ga-etinye arịrịọ. Hapụ ụgwọ dị ka \"lelee n'ụbọchị ahụ\".",
          youCanNow: "ịdepụta ndebanye aha, licence, asambodo na nnabata Kenya onye na-arụ ọrụ drone ugbo maka ego ga-achọ, na ebe a ga-etinye arịrịọ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ RPL na Kenya?", options: ["Nọmba ndebanye aha drone", "Akwụkwọ nnata ụgwọ", "Ụlọ ọzụzụ", "Licence onye ọkwọ drone maka onye na-efe ya"], answer: 3, why: "Remote pilot licence (RPL) bụ licence maka onye na-efe drone." },
            { objective: "O2", q: "Ị na-eme atụmatụ itinye arịrịọ na KCAA n'ọnwa na-abịa site n'iwu 2020. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ọ dịghị ihe; iwu 2020 anaghị agbanwe mgbe ọ bụla", "Ma iwu ọhụrụ KCAA bipụtara na-agbanwe iwu drone, na ụgwọ ugbu a", "Naanị agba drone ahụ", "Licence ochie onye agbata obi"], answer: 1, why: "KCAA na-edepụta iwu ọhụrụ e bipụtara, a ga-elelekwa ụgwọ n'ụbọchị ị na-etinye arịrịọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nigeria: NCAA na Nig.CARs Part 21",
          minutes: 6,
          goal: "Kewaa drone na ọrụ n'okpuru Part 21 nke Nigeria ma depụta ihe ọ chọrọ.",
          text: [
            "Na Nigeria, iwu na-achị drone bụ Part 21 (Remotely Piloted Aircraft Systems) nke Nigeria Civil Aviation Regulations 2023, akwụkwọ Nig.CARs/2023/021, malitere ọrụ na 17 May 2023, NCAA na-elekọtakwa ya. Ọ na-ekpuchi asambodo, ndebanye aha, ọrụ na nlekọta RPAS.",
            "Part 21 na-ekewa ụgbọelu site n'ibu ha: Nano (erughị 250 g), Micro (250 g ruo n'erughị 2 kg), Small (2 kg ruo n'erughị 25 kg), Medium (25 kg ruo 150 kg) na Large (karịrị 150 kg), nke ọ bụla nwere ọnọdụ ya na nnabata mbụ site n'aka Authority. Ọ na-ejikwa ụdị ihe egwu ọrụ atọ: Open (ihe egwu kacha nta, a ga-edebanye aha ya), Specific (ihe egwu dị elu karịa, chọrọ nnabata) na Certified (ụgbọelu, onye ọrụ na onye ọkwọ nwere asambodo, a na-emeso ya ka ụgbọelu nwere onye ọkwọ n'ime ya). Ọ na-enye ohere maka remote pilot licence na RPAS operator certificate.",
            "Part 21 na-esetịkwa oke ọrụ, dịka ọmụmaatụ ịfe na 120 m (400 ft) ma ọ bụ n'okpuru ya n'elu ala n'ọtụtụ ọnọdụ, idebe 30 m n'akụkụ site na ndị na-esoghị n'ọrụ ahụ, ghara ịfe n'elu ebe ndị mmadụ bi n'ọtụtụ, na ịnọ anya site na ọdụ ụgbọelu (dị ka n'ime 4 km nke movement area ọdụ ụgbọelu a na-achịkwa, ma ọ bụ 10 km maka ịfe onwe onye na egwuregwu) ma ọ bụrụ na e nyeghị nnabata. Gụọ ederede zuru ezu maka ọnọdụ metụtara ọrụ gị."
          ],
          words: [["NCAA", "Nigeria Civil Aviation Authority, ụlọ ọrụ na-achịkwa drone na Nigeria."], ["Nig.CARs", "Nigeria Civil Aviation Regulations (iwu ụgbọelu obodo Nigeria)."], ["Open / Specific / Certified", "ụdị ihe egwu ọrụ atọ nke Part 21, site na nke kacha nta ruo na nke kacha elu."], ["Movement area", "akụkụ ọdụ ụgbọelu ebe ụgbọelu na-efepụ, na-ada ma na-agagharị n'ala."]],
          slides: [
            { title: "Iwu drone Nigeria", bullets: ["Nig.CARs 2023 Part 21: RPAS", "Malitere ọrụ na 17 May 2023", "NCAA na-elekọta ya"] },
            { title: "Ọkwa site n'ibu", bullets: ["Nano < 250 g; Micro 250 g ruo < 2 kg", "Small 2 ruo < 25 kg; Medium 25-150 kg", "Large > 150 kg"] },
            { title: "Ụdị ihe egwu", bullets: ["Open: ihe egwu kacha nta, a debanyere aha", "Specific: chọrọ nnabata", "Certified: ụgbọelu, onye ọrụ, onye ọkwọ nwere asambodo"] },
            { title: "Ọmụmaatụ oke", bullets: ["120 m (400 ft) AGL n'ọtụtụ ọnọdụ", "30 m site na ndị na-esoghị n'ọrụ", "Anya site na ọdụ ụgbọelu ma ọ bụrụ na e nyeghị nnabata"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Otu azụmahịa ugbo na Nigeria chọrọ ise maapụ ugbo akpụ na Ogun State site na multirotor dị 1.2 kg na multirotor dị 15 kg maka ịgba ọgwụ. Site na Part 21, dee ọkwa ibu drone ọ bụla, ụdị ihe egwu ọrụ ọ bụla nwere ike ịbụ, na ajụjụ atọ ị ga-ajụ NCAA.",
          youCanNow: "ịkewa drone na ọrụ n'okpuru Part 21 nke Nigeria ma depụta ihe ọ chọrọ.",
          quickCheck: [
            { objective: "O3", q: "N'okpuru Part 21, kedu ụdị chọrọ ka ụgbọelu, onye ọrụ na onye ọkwọ nwee asambodo?", options: ["Certified", "Open", "Nano", "Micro"], answer: 0, why: "A na-emeso ụdị Certified ka ụgbọelu nwere onye ọkwọ n'ime ya, ya na ụgbọelu, onye ọrụ na onye ọkwọ nwere asambodo." },
            { objective: "O3", q: "Onye ọrụ ugbo na Nigeria rịọrọ gị ka ị fee 10 m site na ndị nọ n'ahịa obodo na-esoghị n'ọrụ ahụ. Gịnị ka ị ga-eme?", options: ["Fee n'ala ala ka i nwee nchekwa", "Fee ngwa ngwa ma pụọ", "Nọrọ opekata mpe 30 m site na ndị na-esoghị n'ọrụ ma zere ebe ndị mmadụ bi n'ọtụtụ ma ọ bụrụ na e nyeghị nnabata", "Gwa ndị mmadụ ka ha lee anya n'ebe ọzọ"], answer: 2, why: "Part 21 na-edebe ọtụtụ ọrụ 30 m site na ndị na-esoghị n'ọrụ na n'ebe dị anya site na ebe ndị mmadụ bi n'ọtụtụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu drone n'Afrịka",
        questions: [
          { objective: "O1", q: "Ebee ka iwu drone mba si enweta ike iwu ya?", options: ["Site n'akwụkwọ ntuziaka onye mere drone", "Site n'iwu ụlọ omebe iwu, dị ka iwu ụgbọelu obodo (civil aviation act)", "Site na soshal midia", "Site n'aka onye ọrụ ugbo"], answer: 1, why: "A na-eme iwu drone n'okpuru iwu ụlọ omebe iwu mere." },
          { objective: "O1", q: "Kedu ọrụ na-enwekarị ihe egwu kacha elu?", options: ["Obere drone n'ihu anya n'elu ubi tọgbọrọ chakoo", "Ịkwụ n'ikuku na mita 5", "Drone dị arọ na-agba ọgwụ gafere ebe anya ruru", "Ịfe na simulator"], answer: 2, why: "Ibu, BVLOS na ịgba ọgwụ niile na-eme ka ihe egwu na ihe achọrọ rịa elu." },
          { objective: "O2", q: "Na Kenya, ụlọ ọrụ na-ese maapụ estate maka ego chọrọ kedu nnabata onye ọrụ?", options: ["Remote Air Operator Certificate (ROC) site na KCAA", "Kaadị azụmahịa", "Naanị ikike county", "Ọ dịghị ihe"], answer: 0, why: "KCAA na-enye ndị ọrụ drone ROC." },
          { objective: "O3", q: "N'okpuru Part 21 nke Nigeria, drone dị 1.2 kg nọ n'ọkwa ibu ole?", options: ["Nano", "Small", "Large", "Micro"], answer: 3, why: "Micro bụ 250 g ruo n'erughị 2 kg." },
          { objective: "O3", q: "Na Part 21, ụdị Specific pụtara:", options: ["Ọ dịghị iwu metụtara ya", "Ihe egwu dị elu karịa; a chọrọ nnabata iji rụọ ọrụ", "Naanị maka ihe egwuregwu ụmụaka", "Naanị maka ụgbọelu nwere onye ọkwọ n'ime ya"], answer: 1, why: "Ọrụ Specific nwere ihe egwu karịa ma chọọ nnabata." }
        ]
      }
    },
    {
      name: "Isi 2: Ikike, asambodo na nrubeisi iwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Licence ndị ọkwọ drone na asambodo onye ọrụ",
          minutes: 5,
          goal: "Mee atụmatụ nnabata ndị mmadụ na nke ụlọ ọrụ maka azụmahịa ọrụ drone.",
          text: [
            "Ụdị nnabata abụọ dị mkpa maka azụmahịa. Onye na-efe drone chọrọ licence onye ọkwọ na ratings ọ bụla iwu chọrọ; na Kenya, remote pilot licence (RPL), nke a zụrụ n'ụlọ ọzụzụ KCAA nabatara; na Nigeria, remote pilot licence n'okpuru Part 21. Ụlọ ọrụ na-ere ọrụ drone na-achọkarị asambodo onye ọrụ (operator certificate): Remote Air Operator Certificate nke KCAA ma ọ bụ RPAS Operator Certificate nke NCAA.",
            "Asambodo onye ọrụ na-arịọkarị ihe akaebe na azụmahịa ahụ nwere ike ịrụ ọrụ n'enweghị nsogbu: akwụkwọ ntuziaka ọrụ (operations manual: otu i si eme atụmatụ, efe, edozi ma akọ akụkọ), ndị a kpọrọ aha dị ka ndị ọrụ ahụ dịịrị, ndị ọkwọ a zụrụ azụ nwere licence, drone a debanyere aha, usoro nlekọta, ndekọ, na inshọransị. Part 21, dịka ọmụmaatụ, depụtara asambodo third-party liability insurance n'ime akwụkwọ ọrụ ga-ebu.",
            "Mee atụmatụ oge na ego maka nke a. Jụọ ụlọ ọrụ ahụ maka ndepụta ihe achọrọ na ụgwọ ugbu a, ma jụọ ụlọ ọzụzụ a nabatara ma ha na-enyere aka n'ide akwụkwọ ntuziaka ọrụ."
          ],
          steps: ["Depụta onye ọkwọ ọ bụla na licence na ratings ọ chọrọ.", "Lelee asambodo onye ọrụ azụmahịa gị chọrọ.", "Nweta ndepụta ihe arịrịọ chọrọ ugbu a site n'ụlọ ọrụ ahụ.", "Dee akwụkwọ ntuziaka ọrụ: atụmatụ, ịfe, nlekọta, ihe mberede, ịkọ akụkọ.", "Hazie inshọransị na usoro ndekọ."],
          words: [["Akwụkwọ ntuziaka ọrụ (operations manual)", "iwu e dere ede nke azụmahịa maka otu o si eme atụmatụ, efe, edozi drone ma jikwaa ihe mberede."], ["Third-party liability insurance", "inshọransị na-akwụ ụgwọ ma ọ bụrụ na ọrụ gị emerụ ndị ọzọ ma ọ bụ ihe onwunwe ha."]],
          slides: [
            { title: "Ụdị nnabata abụọ", bullets: ["Onye ahụ: remote pilot licence na ratings", "Azụmahịa ahụ: asambodo onye ọrụ"] },
            { title: "Asambodo onye ọrụ na-arịọ", bullets: ["Akwụkwọ ntuziaka ọrụ", "Ndị ọrụ dịịrị, ndị ọkwọ nwere licence", "Drone a debanyere aha, nlekọta, ndekọ", "Inshọransị"] },
            { title: "Mee atụmatụ ya", bullets: ["Nweta ndepụta ihe achọrọ na ụgwọ ugbu a", "Jụọ ụlọ ọzụzụ a nabatara maka akwụkwọ ntuziaka", "Nye oge tupu ị were ọrụ a na-akwụ ụgwọ"] }
          ],
          sources: [KCAA_ROC, KCAA_UTO, NCAA_P21],
          tryIt: "Dee ndepụta isiokwu (table of contents) nke akwụkwọ ntuziaka ọrụ maka obere azụmahịa na-ese maapụ ihe ọkụkụ, nwere opekata mpe akụkụ asatọ (dịka ọmụmaatụ: nhazi ụlọ ọrụ, ọrụ dịịrị onye ọ bụla, atụmatụ ụgbọ efe, nlele tupu efe, ihe mberede, nlekọta, ndekọ, ịkọ akụkọ ihe mberede).",
          youCanNow: "ime atụmatụ licence ndị ọkwọ na asambodo onye ọrụ azụmahịa ọrụ drone chọrọ, na ihe akwụkwọ ntuziaka ọrụ na-ekpuchi.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ asambodo onye ọrụ (operator certificate)?", options: ["Licence maka onye na-efe drone", "Nnabata maka ụlọ ọrụ na-ere ọrụ drone", "Nọmba serial drone", "Nkwekọrịta onye ahịa"], answer: 1, why: "Asambodo onye ọrụ, dị ka ROC nke KCAA ma ọ bụ RPAS Operator Certificate nke NCAA, bụ maka azụmahịa ahụ." },
            { objective: "O4", q: "Ị na-akwado itinye arịrịọ maka asambodo onye ọrụ. Kedu akwụkwọ ị ga-ebu ụzọ dee?", options: ["Ozi na soshal midia", "Ndepụta ọnụahịa maka ndị ahịa", "Akara (logo) drone", "Akwụkwọ ntuziaka ọrụ maka atụmatụ, ịfe, nlekọta na ịkọ akụkọ"], answer: 3, why: "Asambodo onye ọrụ na-arịọkarị akwụkwọ ntuziaka ọrụ na-egosi otu azụmahịa ahụ si arụ ọrụ n'enweghị nsogbu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ọrụ pụrụ iche: ịgba ọgwụ, BVLOS na ọdụ ụgbọelu",
          minutes: 6,
          goal: "Mata ọrụ ndị chọrọ nnabata ndị ọzọ na onye na-enye ha.",
          text: [
            "Ịgba ọgwụ ụmụ ahụhụ ma ọ bụ ịtụda ihe ọ bụla site na drone bụ ọrụ pụrụ iche. Part 21, dịka ọmụmaatụ, machiri ịtụda ma ọ bụ ịwụpụ ihe n'ụzọ na-akpata ihe egwu, nweekwa iwu dị iche maka dangerous goods (ihe ndị dị ize ndụ), ndepụta ụgwọ Kenya na-edepụtakwa nnabata dị iche maka ụdị ihe egwu dị elu. A na-agụ ọtụtụ ọgwụ ụmụ ahụhụ dị ka dangerous goods. Tụọ anya na ị ga-achọ nnabata ụgbọelu pụrụ iche, ụgbọelu dị arọ nwere asambodo, na ndị ọrụ a zụrụ azụ.",
            "Ịgba ọgwụ na-adakwa n'okpuru iwu ọgwụ ụmụ ahụhụ. Na Kenya, Pest Control Products Board (PCPB) na-achịkwa ọgwụ ụmụ ahụhụ; na Nigeria, NAFDAC na-achịkwa kemịkal ugbo. Jụọ ha ma e nwere ike ịgba ọgwụ ahụ site n'ikuku na ọzụzụ na uwe nchekwa ndị na-agba ya chọrọ. FAO na WHO ebipụtala ntuziaka maka ịgba ọgwụ ụmụ ahụhụ site n'ikuku. Agbala ọgwụ mgbe ọ bụla, ma ọ bụ nye ọrụ ịgba ọgwụ, n'enweghị nnabata ụgbọelu na nnabata ọgwụ ụmụ ahụhụ abụọ.",
            "Ọrụ pụrụ iche ndị ọzọ gụnyere ịfe gafere ebe anya ruru (BVLOS), n'abalị, nso ma ọ bụ n'ọdụ ụgbọelu, n'elu ndị mmadụ ma ọ bụ okporo ụzọ, na n'ebe a machiri ma ọ bụ ebe e chebere dị ka ogige anụ ọhịa obodo (national parks). Nke ọ bụla chọrọ nnabata pụrụ iche. Nnukwu ugbo nso ebe ụgbọelu na-ada (airstrip) dị ọtụtụ n'Afrịka: lelee anya ole ma jụọ tupu i mee atụmatụ."
          ],
          words: [["Dangerous goods", "ihe ndị nwere ike imerụ ahụike, nchekwa ma ọ bụ ihe onwunwe mgbe a na-ebu ha, dị ka ọtụtụ ọgwụ ụmụ ahụhụ."], ["Onye na-achịkwa ọgwụ ụmụ ahụhụ", "ụlọ ọrụ gọọmentị na-edebanye aha ọgwụ ụmụ ahụhụ ma na-achịkwa otu e si eji ha."], ["BVLOS", "beyond visual line of sight: ịfe gafere ebe anya ruru."]],
          slides: [
            { title: "Ịgba ọgwụ na ịtụda ihe", bullets: ["Ọrụ pụrụ iche nwere ihe egwu dị elu", "Nnabata ụgbọelu, ụgbọelu nwere asambodo, ndị ọrụ a zụrụ azụ", "A na-agụ ọtụtụ ọgwụ ụmụ ahụhụ dị ka dangerous goods"] },
            { title: "Iwu ọgwụ ụmụ ahụhụ kwa", bullets: ["Kenya: Pest Control Products Board (PCPB)", "Nigeria: NAFDAC", "Ntuziaka FAO/WHO maka ịgba ọgwụ site n'ikuku"] },
            { title: "Ọrụ pụrụ iche ndị ọzọ", bullets: ["Gafere ebe anya ruru, n'abalị", "Nso ọdụ ụgbọelu, n'elu ndị mmadụ ma ọ bụ okporo ụzọ", "Ogige anụ ọhịa na ebe a machiri"] },
            { title: "Iwu ahụ", bullets: ["Ọ dịghị ịgba ọgwụ n'enweghị nnabata ụgbọelu NA nke ọgwụ ụmụ ahụhụ", "Jụọ tupu i mee atụmatụ nso airstrip"] }
          ],
          sources: [NCAA_P21, KCAA_FEES, PCPB, NAFDAC, FAO_WHO_AERIAL],
          tryIt: "Otu estate okpete dị 3 km site na airstrip rịọrọ gị ka i jiri drone gbaa ọgwụ fungicide (ọgwụ ero). Depụta nnabata na nlele ọ bụla ị ga-achọ (ụgbọelu, ọgwụ ụmụ ahụhụ, onye nwe ala, ọdụ ụgbọelu) na onye ị ga-akpọtụrụ maka nke ọ bụla.",
          youCanNow: "ịhụ ọrụ pụrụ iche ma depụta nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ ha chọrọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu ụlọ ọrụ na-achịkwa kemịkal ugbo na Nigeria?", options: ["NCAA", "ODPC", "KCAA", "NAFDAC"], answer: 3, why: "Na Nigeria, NAFDAC na-achịkwa kemịkal ugbo; nnabata ụgbọelu na-esi n'aka NCAA." },
            { objective: "O5", q: "Otu estate rịọrọ gị ka i jiri drone gbaa fungicide n'izu na-abịa. Naanị licence onye ọkwọ ka i nwere. Gịnị ka ị ga-eme?", options: ["Enyela ọrụ ịgba ọgwụ ruo mgbe i nwere nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ abụọ", "Gbaa ya n'isi ụtụtụ mgbe onye ọ bụla na-anọghị", "Gbaa naanị ọkara estate ahụ", "Jiri drone dị mfe karịa gbaa ya ka o sila dị"], answer: 0, why: "Ịgba ọgwụ chọrọ nnabata ụgbọelu pụrụ iche na nnabata ọgwụ ụmụ ahụhụ; agbala ọgwụ mgbe ọ bụla n'enweghị ha abụọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwulite na idebe faịlụ nrubeisi iwu",
          minutes: 5,
          goal: "Wuo faịlụ nrubeisi iwu na usoro oge iji mee ka ọ dịrị ọhụrụ.",
          text: [
            "Faịlụ nrubeisi iwu (compliance file) na-ejide ihe niile na-egosi na ọrụ gị kwadoro iwu ma dị nchebe, n'otu ebe ị nwere ike igosi onye nyocha, onye ahịa ma ọ bụ ụlọ ọrụ inshọransị. Debe otu n'akwụkwọ na otu n'ụdị dijitalụ nwere nchekwa ọzọ (backup).",
            "Tinye: iwu na ụkpụrụ ị na-agbaso (ya na ụbọchị i lere ha); asambodo ndebanye aha maka drone ọ bụla; ikike ibubata; licence ndị ọkwọ na ratings; asambodo onye ọrụ; nnabata ọrụ; akwụkwọ ntuziaka ọrụ; asambodo inshọransị; ndekọ nlekọta; ndekọ ụgbọ efe (flight logs); akụkọ ihe mberede; nkwekọrịta ndị ahịa na ikike ndị nwe ala; na nzọụkwụ nchekwa data gị (Kenya: ODPC; Nigeria: NDPC) ma ọ bụrụ na i jidere ozi nzuzo ndị ọrụ ugbo.",
            "Iwu, ụgwọ na fọm na-agbanwe. Debe kalenda mmeghari maka licence na asambodo ọ bụla, ma lelee weebụsaịtị ụlọ ọrụ ahụ n'usoro oge a kara aka, dịka ọmụmaatụ kwa ọnwa, na tupu ụdị ọrụ ọhụrụ ọ bụla. Dee ihe i lere na mgbe i lere ya."
          ],
          steps: ["Mepụta faịlụ ahụ: akwụkwọ na dijitalụ nwere backup.", "Tinye iwu, asambodo, licence, nnabata, akwụkwọ ntuziaka, inshọransị.", "Tinye ndekọ nlekọta, ndekọ ụgbọ efe, akụkọ ihe mberede, nkwekọrịta.", "Tinye ndebanye aha ma ọ bụ nzọụkwụ nchekwa data ma ọ bụrụ na i jidere ozi nzuzo.", "Hazie kalenda mmeghari na nlele iwu kwa ọnwa."],
          words: [["Nrubeisi iwu (compliance)", "ịgbaso iwu na usoro metụtara gị."], ["Mmeghari (renewal)", "itinye arịrịọ ọzọ tupu licence ma ọ bụ asambodo agwụ."]],
          slides: [
            { title: "Otu ebe maka ihe akaebe", bullets: ["Maka ndị nyocha, ndị ahịa na ụlọ ọrụ inshọransị", "Otu n'akwụkwọ na otu dijitalụ nwere backup"] },
            { title: "Ihe na-aba n'ime ya", bullets: ["Iwu, ndebanye aha, ikike", "Licence, asambodo onye ọrụ, nnabata", "Akwụkwọ ntuziaka, inshọransị, nlekọta, ndekọ, ihe mberede"] },
            { title: "Tinyekwa", bullets: ["Nkwekọrịta ndị ahịa na ndị nwe ala", "Nzọụkwụ nchekwa data (ODPC, NDPC)"] },
            { title: "Mee ka ọ dịrị ọhụrụ", bullets: ["Kalenda mmeghari", "Lelee iwu kwa ọnwa na tupu ụdị ọrụ ọhụrụ", "Dee ihe i lere na mgbe i lere ya"] }
          ],
          sources: [KCAA_UAS, KCAA_REGS_2026, NCAA_P21, ODPC, NDPC],
          tryIt: "Ọrụ ikpeazụ: wuo faịlụ nrubeisi iwu maka azụmahịa ọrụ drone na mba gị: ụlọ ọrụ na iwu ya na ụbọchị, ọkwa drone na ụdị ihe egwu, nnabata ọ bụla na ọnọdụ ya, akwụkwọ achọrọ, nnabata ịgba ọgwụ ọzọ ma ọ bụrụ na i mere atụmatụ ya, nzọụkwụ nchekwa data, na kalenda mmeghari na nlele iwu.",
          youCanNow: "iwulite na idebe faịlụ nrubeisi iwu na-egosi na ọrụ drone gị kwadoro iwu ma dị nchebe.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-aba na faịlụ nrubeisi iwu?", options: ["Naanị akwụkwọ nnata ego drone", "Naanị foto ụgbọ efe gara aga", "Licence, asambodo, nnabata, akwụkwọ ntuziaka ọrụ, inshọransị na ndekọ", "Naanị ego ndị ahịa kwụrụ"], answer: 2, why: "Faịlụ nrubeisi iwu na-ejide ihe niile na-egosi na ọrụ gị kwadoro iwu ma dị nchebe." },
            { objective: "O6", q: "Remote pilot licence gị ga-agwụ n'ime ọnwa atọ. Gịnị ga-egbochi gị ichefu ya?", options: ["Ichere ka KCAA kpọọ gị", "Kalenda mmeghari nwere ụbọchị licence na asambodo ọ bụla", "Ilele naanị mgbe onye ahịa jụrụ", "Idebe licence ahụ n'ime akpa drone"], answer: 1, why: "Kalenda mmeghari na nlele a kara aka na-eme ka licence na asambodo ọ bụla dịrị ndụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ikike, asambodo na nrubeisi iwu",
        questions: [
          { objective: "O4", q: "Onye na-achọkarị asambodo onye ọrụ?", options: ["Ụlọ ọrụ na-ere ọrụ drone", "Onye ọrụ ugbo ọ bụla e sere maapụ ubi ya", "Ụlọ ahịa drone", "Ọ dịghị onye"], answer: 0, why: "Asambodo onye ọrụ na-anabata azụmahịa na-arụ ọrụ ahụ." },
          { objective: "O4", q: "Gịnị bụ akwụkwọ ntuziaka ọrụ (operations manual)?", options: ["Akwụkwọ ntuziaka ojiji drone", "Iwu e dere ede nke azụmahịa maka atụmatụ, ịfe, nlekọta na ihe mberede", "Akwụkwọ mgbasa ozi ahịa", "Akwụkwọ nnata ụgwọ"], answer: 1, why: "Ụlọ ọrụ gọọmentị na-arịọ ndị ọrụ ka ha gosi otu ha si arụ ọrụ n'enweghị nsogbu." },
          { objective: "O5", q: "Na Kenya, kedu ụlọ ọrụ na-achịkwa ọgwụ ụmụ ahụhụ?", options: ["KCAA", "ODPC", "Pest Control Products Board (PCPB)", "NDPC"], answer: 2, why: "PCPB na-achịkwa ọgwụ ụmụ ahụhụ; ịgba ọgwụ chọkwara nnabata ụgbọelu." },
          { objective: "O5", q: "Onye ahịa chọrọ ka drone gbaa ọgwụ nso airstrip. Nzọụkwụ mbụ gị bụ:", options: ["Gbaa ya n'isi ụtụtụ", "Gbaa naanị ọkara ubi ahụ", "Leghara airstrip ahụ anya", "Lelee nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ na iwu anya site na ọdụ ụgbọelu"], answer: 3, why: "Ịgba ọgwụ na ịnọ nso ọdụ ụgbọelu chọrọ nnabata pụrụ iche abụọ." },
          { objective: "O6", q: "Ugboro ole ka ị ga-elele mgbanwe iwu?", options: ["N'usoro oge a kara aka, dị ka kwa ọnwa, na tupu ụdị ọrụ ọhụrụ", "Mgbe ọ bụla", "Naanị mgbe a tara gị ntaramahụhụ", "Kwa afọ iri"], answer: 0, why: "Iwu na ụgwọ na-agbanwe; usoro oge na-eme ka ị maara ihe ọhụrụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone Ugbo n'Afrịka: Iwu Ụgbọelu na Ikike (Licence)",
    questions: [
      { objective: "O1", q: "ICAO bụ:", options: ["Onye na-achịkwa drone na Kenya", "International Civil Aviation Organization nke UN", "Aha ụdị drone", "Ọgwụ ụmụ ahụhụ"], answer: 1, why: "ICAO na-ehiwe ụkpụrụ mba ụwa nke mba dị iche iche na-ewu na ya." },
      { objective: "O1", q: "Onye na-ede ma na-akwado iwu drone na mba Afrịka ọ bụla?", options: ["ICAO n'onwe ya", "Ndị na-emepụta drone", "Ụlọ ọrụ ụgbọelu obodo nke mba ọ bụla", "Naanị African Union"], answer: 2, why: "Mba ọ bụla na-achịkwa ikuku ya na iwu drone ya." },
      { objective: "O1", q: "Ụkpụrụ mmejuputa (implementing standards) bụ:", options: ["Iwu teknụzụ zuru ezu na-akọwa otu e si erube isi n'iwu", "Ụkpụrụ mgbasa ozi", "Ụdị mkpụrụ ihe ọkụkụ", "Iwu inshọransị"], answer: 0, why: "Ha na-ejide nkọwa teknụzụ dị n'azụ iwu ahụ." },
      { objective: "O2", q: "Isi iwu drone Kenya bụ:", options: ["Nig.CARs Part 21", "Data Protection Act 2019", "Pest Control Products Act", "Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020"], answer: 3, why: "KCAA na-elekọta UAS Regulations, 2020." },
      { objective: "O2", q: "Ndepụta ụgwọ KCAA na-edepụta nnabata ọrụ maka:", options: ["Category A, na Categories B na C", "Naanị ihe egwuregwu ụmụaka", "Naanị ụgbọelu nwere onye ọkwọ n'ime ya", "Naanị ihe a na-ebubata"], answer: 0, why: "Kenya na-anabata ọrụ site n'ụdị ihe egwu." },
      { objective: "O2", q: "Na Kenya, arịrịọ maka nnabata drone na-aga site na:", options: ["Ọfịs county", "Sistemụ drone KCAA n'ịntanetị", "Ụlọ ahịa drone", "Soshal midia"], answer: 1, why: "KCAA na-arụ sistemụ RPAS n'ịntanetị." },
      { objective: "O2", q: "Tupu ị dabere n'iwu drone Kenya nke 2020, ị kwesịrị ilelekwa:", options: ["Akụkọ akwụkwọ akụkọ ochie", "Echiche enyi gị", "Iwu ọhụrụ KCAA bipụtara na ụgwọ ugbu a", "Ọ dịghị ihe"], answer: 2, why: "Iwu na ụgwọ nwere ike ịgbanwe; KCAA na-edepụta iwu ọhụrụ." },
      { objective: "O3", q: "Iwu drone Nigeria dị na:", options: ["UAS Regulations nke Kenya", "Ntuziaka FAO", "Data Protection Act", "Nig.CARs 2023 Part 21"], answer: 3, why: "Part 21 na-ekpuchi RPAS na Nigeria." },
      { objective: "O3", q: "N'okpuru Part 21, drone dị 15 kg nọ n'ọkwa ole?", options: ["Small", "Nano", "Micro", "Large"], answer: 0, why: "Small bụ 2 kg ruo n'erughị 25 kg." },
      { objective: "O3", q: "Ụdị Open nke Part 21:", options: ["Achọghị ndebanye aha", "Nwere ihe egwu kacha nta mana a ga-edebanye aha drone ahụ", "Bụ maka drone ịgba ọgwụ dị arọ", "Pụtara ịfe ebe ọ bụla"], answer: 1, why: "Ọrụ Open nwere obere ihe egwu mana a ka na-edebanye aha ha." },
      { objective: "O3", q: "Part 21 na-ejedebe ọtụtụ ọrụ na:", options: ["1,000 m n'elu ala", "Enweghị oke", "120 m (400 ft) n'elu ala", "10 m n'elu ala"], answer: 2, why: "120 m (400 ft) AGL bụ oke a na-ahụkarị na Part 21." },
      { objective: "O3", q: "Part 21 na-edebe ọtụtụ ọrụ drone opekata mpe anya ole n'akụkụ site na ndị na-esoghị n'ọrụ?", options: ["1 m", "3 m", "30 m", "300 km"], answer: 2, why: "Part 21 na-eji 30 m site na ndị na-esoghị n'ọrụ ahụ." },
      { objective: "O4", q: "Remote pilot licence bụ maka:", options: ["Onye na-efe drone", "Drone ahụ", "Ugbo ahụ", "Azụmahịa ahụ"], answer: 0, why: "Licence bụ maka ndị mmadụ; asambodo bụ maka ụlọ ọrụ na ụgbọelu." },
      { objective: "O4", q: "Third-party liability insurance na-akwụ ụgwọ mgbe:", options: ["E zuru drone gị n'aka gị", "Ọrụ gị merụrụ ndị ọzọ ma ọ bụ ihe onwunwe ha", "Ọnụahịa ihe ọkụkụ dara", "I gafere ule"], answer: 1, why: "Ọ na-ekpuchi mmerụ e mere ndị ọzọ." },
      { objective: "O5", q: "Na Nigeria, onye na-achịkwa kemịkal ugbo bụ:", options: ["NCAA", "NDPC", "NAFDAC", "KCAA"], answer: 2, why: "NAFDAC na-achịkwa kemịkal gụnyere kemịkal ugbo." },
      { objective: "O5", q: "A na-agụ ọtụtụ ọgwụ ụmụ ahụhụ dị ka:", options: ["Nri", "Ihe egwuregwu ụmụaka", "Akụrụngwa ndozi", "Dangerous goods"], answer: 3, why: "Iwu dangerous goods na-emetụta ibu ha site n'ikuku." },
      { objective: "O5", q: "Kedu nke bụ ọrụ pụrụ iche chọrọ nnabata pụrụ iche?", options: ["Ịfe gafere ebe anya ruru (BVLOS)", "Ịfe na simulator", "Ịgụ iwu", "Ịchaji batrị"], answer: 0, why: "BVLOS nwere ihe egwu dị elu ma chọọ nnabata." },
      { objective: "O6", q: "Faịlụ nrubeisi iwu bụ:", options: ["Naanị ndepụta ndị ahịa", "Otu ebe na-ejide ihe akaebe niile na ọrụ gị kwadoro iwu ma dị nchebe", "Akụkụ drone", "Akara ọgwụ ụmụ ahụhụ"], answer: 1, why: "Ọ na-ejide asambodo, licence, akwụkwọ ntuziaka, ndekọ na ihe ndị ọzọ." },
      { objective: "O6", q: "Ọ bụrụ na azụmahịa gị na Kenya jidere nọmba ekwentị ndị ọrụ ugbo, kedu iwu ọzọ metụtara ya?", options: ["Ọ dịghị", "Nig.CARs Part 21", "Data Protection Act 2019, nke ODPC na-elekọta", "Naanị akwụkwọ ntuziaka drone"], answer: 2, why: "Iwu nchekwa data Kenya na-ekpuchi ozi nzuzo." },
      { objective: "O1", q: "Ihe ọmụmụ a bụ:", options: ["Ndụmọdụ iwu maka okwu gị", "Remote pilot licence", "Ikike ịfe", "Agụmakwụkwọ; kwenye ihe niile n'aka ụlọ ọrụ gọọmentị"], answer: 3, why: "Iwu na-agbanwe; isi iyi gọọmentị na ndị ọkachamara na-ekpebi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 7, 8, 12, 14, 16, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke faịlụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ụlọ ọrụ na iwu", objective: "O1", notYet: "Ụlọ ọrụ ma ọ bụ iwu adịghị, ma ọ bụ enweghị njikọ ma ọ bụ ụbọchị.", meets: "E depụtara ụlọ ọrụ, iwu, ụkpụrụ na ndepụta ụgwọ ya na njikọ na ụbọchị e lere ha.", exceeds: "Ọ na-ekwukwa iwu ọhụrụ ọ bụla e bipụtara na otu ha si agbanwe ọrụ ahụ." },
      { name: "Ọkwa na ihe egwu", objective: "O3", notYet: "Ọkwa drone ma ọ bụ ụdị ihe egwu ọrụ ahụ adịghị ma ọ bụ ezighi ezi.", meets: "Ọkwa drone na ụdị ihe egwu ọrụ ahụ ziri ezi dịka iwu mba ahụ si dị.", exceeds: "Ọ na-edepụta oke ọrụ metụtara ya, dị ka ịdị elu na anya site na ndị mmadụ." },
      { name: "Nnabata achọrọ", objective: "O2", notYet: "Nnabata adịghị, ma ọ bụ a kpọghị aha onye na-enye ha.", meets: "E depụtara ndebanye aha, ikike, licence, asambodo na nnabata ọ bụla ya na onye na-enye ya na ọnọdụ ya.", exceeds: "Ọ gụnyere ụgwọ ugbu a na usoro oge maka inweta nke ọ bụla." },
      { name: "Akwụkwọ ndị mmadụ na azụmahịa", objective: "O4", notYet: "Akwụkwọ ntuziaka ọrụ, inshọransị ma ọ bụ ndekọ adịghị.", meets: "E depụtara licence ndị ọkwọ, asambodo onye ọrụ, akwụkwọ ntuziaka ọrụ, inshọransị, ndekọ nlekọta na ndekọ ụgbọ efe.", exceeds: "Ọ na-akpọ aha ndị ọrụ dịịrị na ebe e debere akwụkwọ ọ bụla." },
      { name: "Ịgba ọgwụ na ọrụ pụrụ iche", objective: "O5", notYet: "A na-eme atụmatụ ịgba ọgwụ ma ọ bụ ọrụ pụrụ iche ndị ọzọ n'enweghị nnabata ndị ọzọ.", meets: "E depụtara nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ ọzọ maka ọrụ pụrụ iche ọ bụla ya na onye na-enye ha.", exceeds: "Ọ na-akọwa otu anya site na ọdụ ụgbọelu na iwu dangerous goods si emetụta ọrụ ahụ." },
      { name: "Idebe ya ọhụrụ", objective: "O6", notYet: "Enweghị ụbọchị mmeghari ma ọ bụ usoro nlele iwu; enweghị nzọụkwụ nchekwa data.", meets: "Kalenda mmeghari, usoro oge a kara aka maka nlele iwu, na nzọụkwụ nchekwa data maka ozi ndị ọrụ ugbo.", exceeds: "O nwere ndekọ na-egosi nlele gara aga na ihe gbanwere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke faịlụ nrubeisi iwu",
      "Ndị na-amụ ihe tinyere arịrịọ maka ndebanye aha drone, licence onye ọkwọ ma ọ bụ asambodo onye ọrụ n'ime ụbọchị 90 (nnyocha nsochi)",
      "Azụmahịa drone ndị gụsịrị akwụkwọ na-elekọta nwere nnabata maka ụdị ọrụ ọ bụla ha na-enye",
      "Ndị na-amụ ihe were ihe ọmụmụ drone ọzọ ma ọ bụ malite ọzụzụ remote pilot a nabatara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji meghee weebụsaịtị ụlọ ọrụ ụgbọelu obodo",
      "Mbipụta e budatara nke iwu drone, ụkpụrụ na ndepụta ụgwọ mba ahụ",
      "Akwụkwọ ndetu ma ọ bụ folda maka faịlụ nrubeisi iwu, ya na mbipụta dijitalụ nwere backup",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge iwulite faịlụ nrubeisi iwu"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee meghee peeji drone ụlọ ọrụ ahụ n'ihu ha ka ndị na-amụ ihe hụ ebe e debere iwu.",
      "Lelee saịtị gọọmentị maka mgbanwe iwu na ụgwọ tupu oge ọ bụla a na-akụzi ihe ọmụmụ a; akụzila site na ndetu ochie.",
      "Kwuo nke ọma na nke a bụ agụmakwụkwọ, ọ bụghị ndụmọdụ iwu, ma zipu ajụjụ pụrụ iche n'ụlọ ọrụ ahụ ma ọ bụ n'aka ọka iwu.",
      "Efela drone ma ọ bụ gbaa ọgwụ n'ime ihe ọmụmụ a; agbala ume mgbe ọ bụla ka a gbaa ọgwụ n'enweghị nnabata ụgbọelu na nke ọgwụ ụmụ ahụhụ abụọ.",
      "Jiri rubric tụọ akara faịlụ nrubeisi iwu, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

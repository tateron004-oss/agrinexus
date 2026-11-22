"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-healthcare-practices.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ a abụghị ndụmọdụ iwu ma ọ bụ ndụmọdụ compliance.

const HHS_CLOUD = { name: "HHS: Ntuziaka gbasara HIPAA na Cloud Computing", url: "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html" };
const HHS_BA = { name: "HHS: Business Associates (ntuziaka HIPAA)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html" };
const HHS_HIPAA = { name: "HHS: HIPAA maka ndị ọkachamara", url: "https://www.hhs.gov/hipaa/for-professionals/index.html" };

module.exports = {
  id: "smallbiz-ai-healthcare-practices-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-healthcare-practices",
  category: "Small Business",
  name: "AI maka Obere Ụlọ Ọrụ Ahụike",
  skills: "Ịmara mgbe ozi onye ọrịa nwere ike ịbanye na AI na mgbe ọ na-agaghị, Ide ihe ndị nnabata ga-ekwu na fon, Ide akwụkwọ nkuzi maka ndị ọrịa ka dọkịta lelee ya, Ime ụdị ozi nhazi oge na ncheta, Ide iwu ọfịs, Ịtọ iwu AI maka ndị ọrụ",
  outcome: "iji AI n'enweghị nsogbu maka ọrụ ọfịs nke obere ụlọ ọrụ ahụike: ịkpebi ọrụ ndị nwere ike iji ngwa AI nkịtị na ndị chọrọ ngwa a kwadoro nwere nkwekọrịta BAA, na ime ihe ndị nnabata ga-ekwu, ụdị ozi ncheta, akwụkwọ nkuzi n'okwu dị mfe ka dọkịta lelee ya, na iwu AI maka ndị ọrụ, n'etinyeghị ozi onye ọrịa ọ bụla na ngwa AI nkịtị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe, ndị na-elekọta ọfịs na ndị nnabata nke obere ụlọ ọrụ ahụike: ụlọ ọgwụ ezinụlọ, ụlọ ọgwụ eze, ebe ndụmọdụ na ọgwụgwọ uche, ndị chiropractor, ọgwụgwọ ahụ (physical therapy), ọgwụgwọ anya na ụlọ ọrụ na-elekọta ndị ọrịa n'ụlọ ha, gụnyere ọtụtụ ndị pere mpe (minority) nwe nke na-enyere obodo ha aka.",
    "Ị ga-amụta otu iwu kacha mkpa: ozi ahụike echekwara (PHI) anaghị abanye na ngwa AI ma ọ bụrụ na ụlọ ọrụ gị akwadoghị ya, ma o nweghị nkwekọrịta HIPAA business associate agreement (BAA) na ụlọ ọrụ nwe ngwa ahụ. Mgbe ahụ, ị ga-eji AI maka ọtụtụ ọrụ ọfịs ndị na-achọghị ozi onye ọrịa ọ bụla.",
    "N'ihe ọmụmụ a, AI anaghị achọpụta ọrịa, anaghị agwọ ọrịa, anaghịkwa enye ndụmọdụ ahụike. Dọkịta ma ọ bụ onye ọrụ ahụike nwere ikike na-elele ihe ahụike ọ bụla e dere maka ndị ọrịa. Ihe ọmụmụ a abụghị ndụmọdụ iwu ma ọ bụ compliance; lelee ntuziaka HHS na onye ndụmọdụ compliance gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwa AI nke ụlọ ọrụ gị: ndepụta ọrụ e kewara ụzọ abụọ, \"enweghị PHI, AI nkịtị dị mma\" na \"PHI, naanị ngwa a kwadoro nwere BAA ma ọ bụ enweghị AI\"; ihe atọ ndị nnabata ga-ekwu na fon; ụdị ozi nkwenye na ncheta oge nwere ihe nnọchi; otu akwụkwọ nkuzi n'okwu dị mfe maka ndị ọrịa n'isiokwu nkịtị, e dere \"ka dọkịta lelee ya\" n'elu ya; na iwu AI otu peeji maka ndị ọrụ. Ọ dịghị nke ọ bụla n'ime ha nwere ezi ozi onye ọrịa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe, ndị na-elekọta ọfịs na ndị nnabata nke obere ụlọ ọrụ ahụike: ụlọ ọgwụ ezinụlọ, ụlọ ọgwụ eze, ebe ndụmọdụ na ọgwụgwọ uche, ndị chiropractor, ọgwụgwọ ahụ (physical therapy), ọgwụgwọ anya na ụlọ ọrụ na-elekọta ndị ọrịa n'ụlọ ha, gụnyere ọtụtụ ndị pere mpe (minority) nwe nke na-enyere obodo ha aka.",
    startingPoint: "Ha na-elekọta tebụl nnabata, nhazi oge na akwụkwọ ọfịs kwa ụbọchị, makwa isi ihe gbasara nzuzo ndị ọrịa. Ọtụtụ anụla maka ngwa AI ma ọ bụ nwaala otu, mana ha amaghị nke ọma ihe HIPAA kwere.",
    gap: "Ide ihe n'ọfịs na-ewe oge obere ụlọ ọrụ enweghị, mana itinye ozi onye ọrịa na ngwa AI na-ezighi ezi nwere ike imebi iwu HIPAA ma mebie ndị ọrịa. Ndị na-amụ ihe chọrọ iwu doro anya maka ọrụ ndị nwere ike iji AI, na ihe a ga-ekwu, ụdị ozi, akwụkwọ nkuzi na iwu ndị ọrụ ndị a kwadebere nke na-ezere ozi onye ọrịa.",
    constraints: [
      "Ọ dịghị PHI na ngwa AI nkịtị ọ bụla; naanị ngwa ụlọ ọrụ kwadoro nwere nkwekọrịta BAA",
      "AI anaghị achọpụta ọrịa, agwọ ọrịa ma ọ bụ enye ndụmọdụ ahụike; dọkịta nwere ikike na-elele ihe ahụike niile maka ndị ọrịa",
      "Ọ bụghị ndụmọdụ iwu ma ọ bụ compliance: lelee ntuziaka HHS na onye ndụmọdụ compliance nke ụlọ ọrụ ahụ",
      "Oge: tebụl nnabata na-arụsi ọrụ ike, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Okwu dị mfe maka ndị ọrụ na maka akwụkwọ ndị ọrịa (ihe dị ka ọkwa klas 6)"
    ],
    prerequisites: "Ọ dịghị. Ndị na-amabeghị ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ọrụ ọfịs", action: "ikewa ọrụ ọ bụla n'ime \"enweghị PHI, AI nkịtị dị mma\" ma ọ bụ \"PHI, naanị ngwa a kwadoro nwere BAA ma ọ bụ enweghị AI\"", standard: "ma tinye ọrụ ọ bụla nwere PHI n'ogidi nke abụọ" },
    { id: "O2", condition: "Mgbe e nyere gị oku ndị a na-enwetakarị na tebụl nnabata", action: "ide ihe a ga-ekwu na fon nke na-eziga oku gbasara ọgwụ ọzọ (refill), ihe mgbaàmà na ihe mberede n'ebe kwesịrị ekwesị", standard: "ebe ihe ọ bụla maka ihe mberede na-agwa onye kpọrọ ka ọ kpọọ 911, onye isi ọrụ ahụike kwadokwara ya" },
    { id: "O3", condition: "Site n'iji ihe nnọchi kama ozi onye ọrịa", action: "ime ụdị ozi nkwenye na ncheta oge na-ekwughị ihe mere onye ọrịa ji abịa", standard: "n'enweghị ezi ozi onye ọrịa ọ bụla na ngwa AI ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị isiokwu nkịtị maka ndị ọrịa", action: "ide akwụkwọ nkuzi n'okwu dị mfe ma dee na ya ka dọkịta lelee ya", standard: "n'ihe dị ka ọkwa klas 6, nwere ahịrị kọntaktị gị na ndetu 911" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ ide ihe n'ọfịs dị ka iwu, email ma ọ bụ mgbasa ozi ọrụ", action: "iji ngwa AI nkịtị dee ya ma depụta akụkụ ọ bụla chọrọ nlele compliance ma ọ bụ HR", standard: "n'ejighị ozi onye ọrịa ọ bụla" },
    { id: "O6", condition: "Maka ụlọ ọrụ nke gị", action: "ide iwu AI otu peeji maka ndị ọrụ nwere iwu ise ruo asaa", standard: "gụnyere enweghị PHI na-enweghị BAA, aha ngwa a kwadoro, ịkọ mperi na nlele kwa afọ" }
  ],
  chapters: [
    {
      name: "Isi 1: HIPAA na mbụ, wee tebụl nnabata",
      lessons: [
        {
          objectives: ["O1"],
          title: "PHI, HIPAA na AI: iwu na-ebu ụzọ",
          minutes: 6,
          goal: "Kpebie ma ọrụ nwere ike iji ngwa AI nkịtị ma ọ bụ chọrọ ngwa a kwadoro nwere BAA.",
          text: [
            "Ozi ahụike echekwara (PHI) bụ ozi ahụike nwere ike igosi onye ọrịa ahụ bụ: aha ya na ọrịa ya, ụbọchị ọmụmụ, ndetu faịlụ ọgwụ (chart), nọmba ID inshọransị, ozi gbasara oge ọ ga-abịa, foto na ndị ọzọ. HIPAA na-etọ iwu maka otu ụlọ ọrụ ahụike si echebe ya.",
            "Ntuziaka HHS (ụlọ ọrụ gọọmentị US na-ahụ maka ahụike) na-ekwu na mgbe ụlọ ọrụ HIPAA na-achị (covered entity) jiri ọrụ si n'èzí, dị ka ọrụ cloud, mepụta, nata, chekwaa ma ọ bụ zipu PHI, ọrụ ahụ bụ business associate, ụlọ ọrụ ahụ chọkwara nkwekọrịta business associate agreement (BAA) na ya. Iji ọrụ dị otu a maka PHI na-enweghị BAA na-emebi iwu HIPAA. Ọtụtụ ngwa nkata AI n'efu nkịtị anaghị abịanye aka na BAA na onye ọ bụla.",
            "Ya mere kewaa ọrụ ọ bụla: ọ bụrụ na ọ chọrọ PHI, jiri naanị ngwa ụlọ ọrụ gị kwadoro ma nwee BAA na ya, ma ọ bụ ejila AI. Ọ bụrụ na ọ chọghị PHI, dị ka akwụkwọ nkuzi nkịtị, ihe a ga-ekwu na fon ma ọ bụ iwu ọfịs, ngwa AI nkịtị nwere ike inye aka. Mgbe obi abụọ dị, jụọ onye na-ahụ maka compliance ma ọ bụ nzuzo gị."
          ],
          steps: ["Depụta ọrụ ọfịs ndị ị chọrọ enyemaka na ha.", "Jụọ: ọrụ a ọ chọrọ ozi onye ọrịa ọ bụla?", "Enweghị PHI: ngwa AI nkịtị nwere ike inye aka.", "PHI: naanị ngwa a kwadoro nwere BAA, ma ọ bụ enweghị AI.", "Obi abụọ: jụọ onye na-ahụ maka nzuzo ma ọ bụ compliance."],
          words: [["PHI", "protected health information (ozi ahụike echekwara): ozi ahụike nwere ike igosi onye ọrịa ahụ bụ."], ["HIPAA", "iwu gọọmentị etiti US nwere iwu maka ichebe ozi ahụike."], ["Business associate agreement (BAA)", "nkwekọrịta ebe ụlọ ọrụ na-ere ngwa ma ọ bụ ọrụ kwetara ichebe PHI dịka HIPAA si kwuo."], ["Covered entity", "atụmatụ inshọransị ahụike, clearinghouse ma ọ bụ onye na-enye ọgwụgwọ ga-agbaso HIPAA."]],
          slides: [
            { title: "Ihe bụ PHI", bullets: ["Aha na ọrịa, ụbọchị ọmụmụ", "Ndetu faịlụ ọgwụ, ID inshọransị, oge ọbịbịa", "Foto na ozi ndị ọzọ na-egosi onye ọ bụ"] },
            { title: "HHS banyere ọrụ si n'èzí", bullets: ["Ọrụ na-ejikwa PHI bụ business associate", "Ụlọ ọrụ ahụ chọrọ BAA na ya", "PHI na-enweghị BAA na-emebi iwu HIPAA"] },
            { title: "Kewaa ọrụ ọ bụla", bullets: ["Enweghị PHI: AI nkịtị nwere ike inye aka", "PHI: naanị ngwa BAA a kwadoro, ma ọ bụ enweghị AI", "Obi abụọ: jụọ onye na-ahụ maka compliance"] }
          ],
          sources: [HHS_CLOUD, HHS_BA, HHS_HIPAA],
          tryIt: "Depụta ọrụ iri n'ọfịs gị. Kewaa ha n'ogidi abụọ: \"Enweghị PHI: AI nkịtị dị mma\" na \"PHI: naanị ngwa BAA a kwadoro ma ọ bụ enweghị AI\".",
          youCanNow: "ịkpebi ma ọrụ ọfịs nwere ike iji ngwa AI nkịtị ma ọ bụ chọrọ ngwa a kwadoro nwere BAA.",
          quickCheck: [
            { objective: "O1", q: "Kedu n'ime ndị a bụ PHI?", options: ["Nọmba ID inshọransị nke onye ọrịa", "Oge ọfịs gị na-emeghe", "Mgbasa ozi ọrụ maka onye nnabata", "Akwụkwọ nkuzi nkịtị banyere ịsa aka"], answer: 0, why: "ID inshọransị bụ ozi ahụike nwere ike igosi onye ọrịa ahụ bụ." },
            { objective: "O1", q: "Ị chọrọ ka AI nyere aka dee ihe a ga-ekwu na fon banyere ebe a na-adọba ụgbọala. Kedu ngwa ị nwere ike iji?", options: ["Naanị ngwa nwere BAA", "Ngwa AI nkịtị, n'ihi na ọ chọghị PHI", "Ọ dịghị ngwa AI ọ bụla", "Naanị fon onye ọrịa n'onwe ya"], answer: 1, why: "Ọrụ ndị na-achọghị ozi onye ọrịa nwere ike iji ngwa AI nkịtị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ihe ndị nnabata ga-ekwu na fon na n'ozi",
          minutes: 5,
          goal: "Dee ihe doro anya, nwere obiọma, ndị nnabata ga-ekwu maka oku ndị a na-enwetakarị.",
          text: [
            "Ndị nnabata na-anata otu oku ahụ kwa ụbọchị: ajụjụ ndị ọrịa ọhụrụ, inshọransị a na-anabata, ụzọ na ebe a na-adọba ụgbọala, ịgbanwe oge, arịrịọ ọgwụ ọzọ (refill), arịrịọ akwụkwọ ahụike, na onye na-ada ka ọ nọ n'ihe mberede.",
            "Ihe ndị a a ga-ekwu achọghị ozi onye ọrịa, ya mere ngwa AI nkịtị nwere ike inye aka: \"Write a short, warm phone script for a family dental office for a new patient asking if we take their insurance. Our policy: [your policy]. Keep it under 80 words.\" (Dee ihe dị mkpụmkpụ, nwere obiọma, a ga-ekwu na fon maka ụlọ ọgwụ eze ezinụlọ, maka onye ọrịa ọhụrụ na-ajụ ma anyị na-anabata inshọransị ya. Iwu anyị: [iwu gị]. Mee ka ọ ghara ịgafe okwu 80.)",
            "Ihe ọ bụla a ga-ekwu gbasara ọgwụgwọ ga-eziga onye ahụ n'ebe kwesịrị ekwesị: ajụjụ ọgwụ ọzọ na ihe mgbaàmà na-aga n'aka ndị ọrụ ahụike, ihe ọ bụla maka ihe mberede na-agwa onye kpọrọ ka o kwụsị oku ahụ ma kpọọ 911 ma ọ bụ gaa ụlọ ọgwụ mberede (emergency room) kacha nso. Mee ka onye isi ọrụ ahụike gị kwado ihe ndị a."
          ],
          steps: ["Depụta oku iri ị na-enwetakarị.", "Rịọ AI ka o dee ihe dị mkpụmkpụ maka nke ọ bụla, ya na ezi iwu gị.", "Hụ na ajụjụ ahụike na-aga n'aka ndị ọrụ ahụike.", "Tinye ahịrị maka ihe mberede: kpọọ 911.", "Mee ka onye isi ọrụ ahụike gị kwado ha."],
          words: [["Script", "obere ntuziaka gbasara ihe a ga-ekwu n'oku a na-enwetakarị."], ["Triage", "ịkpebi otu nsogbu ahụike si dị ngwa; ndị ọrụ ahụike na-eme ya, ọ bụghị tebụl nnabata ma ọ bụ AI."]],
          slides: [
            { title: "Oku a na-enwetakarị", bullets: ["Ndị ọrịa ọhụrụ na inshọransị", "Ụzọ, ịgbanwe oge, akwụkwọ ahụike", "Ọgwụ ọzọ (refill) na ihe nwere ike ịbụ mberede"] },
            { title: "Ọ chọghị PHI", bullets: ["AI nkịtị nwere ike ide ndị a", "Nye ya ezi iwu gị", "Mee ka nke ọ bụla ghara ịgafe ihe dị ka okwu 80"] },
            { title: "Ziga ajụjụ ọgwụgwọ n'ebe kwesịrị", bullets: ["Ọgwụ ọzọ na ihe mgbaàmà -> ndị ọrụ ahụike", "Ihe mberede -> kpọọ 911 ma ọ bụ gaa ER", "Onye isi ọrụ ahụike na-akwado ha"] }
          ],
          tryIt: "Rịọ AI ka o dee ihe atọ ndị nnabata ga-ekwu: ajụjụ inshọransị, ịgbanwe oge, na onye kpọrọ na-akọ mgbu n'obi (nke ga-agwa ya ka ọ kpọọ 911). Dee n'elu ha ka onye isi ọrụ ahụike gị kwado ha.",
          youCanNow: "ide ihe ndị nnabata ga-ekwu nwere obiọma, doro anya ma na-eziga ajụjụ ọgwụgwọ n'ebe kwesịrị n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ihe ndị nnabata na-ekwu kwesịrị iziga arịrịọ ọgwụ ọzọ (refill)?", options: ["Na ngwa AI ahụ", "N'ọfịs ịkwụ ụgwọ", "N'aka ndị ọrụ ahụike", "Naanị n'ụlọ ahịa ọgwụ onye kpọrọ"], answer: 2, why: "Ajụjụ ọgwụ ọzọ na ihe mgbaàmà na-aga n'aka ndị ọrụ ahụike." },
            { objective: "O2", q: "AI dere ihe maka onye kpọrọ na-enwe nsogbu iku ume nke na-ekwu \"Anyị ga-akpọghachi gị echi.\" Gịnị ka ị ga-eme?", options: ["Jiri ya; o nwere nkwanye ugwu", "Mee ka ọ dị mkpụmkpụ", "Sụgharịa ya", "Gbanwee ya ka ọ gwa onye kpọrọ ka o kwụsị oku ma kpọọ 911 ma ọ bụ gaa ụlọ ọgwụ mberede kacha nso"], answer: 3, why: "Ihe ọ bụla maka ihe mberede na-agwa onye kpọrọ ka ọ kpọọ 911 ma ọ bụ gaa ụlọ ọgwụ mberede kacha nso." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ụdị ozi maka nhazi oge na ncheta",
          minutes: 5,
          goal: "Mee ụdị ozi nkwenye na ncheta oge na-echebe nzuzo.",
          text: [
            "Ụdị ozi a kwadebere (templates) na-azọpụta oge ma na-ebelata ndị na-anaghị abịa. Dee ha site n'iji ihe nnọchi: \"Ndewo [aha mbụ], nke a bụ [aha ụlọ ọrụ] na-akwado oge ọbịbịa gị na [ụbọchị] n'elekere [oge]. Zaa C iji kwado ma ọ bụ kpọọ [nọmba fon] iji gbanwee oge.\"",
            "Mee ka ozi ncheta dị nta. Ekwula ihe mere onye ahụ ji abịa na ụdị onye ọrụ ahụike ọ ga-ahụ mgbe nke ahụ ga-egosi ozi nzuzo, dị ka ọbịbịa ọgwụgwọ uche (therapy) ma ọ bụ nke ọkachamara. Usoro njikwa ụlọ ọrụ gị ma ọ bụ usoro ozi ndị ọrịa na-etinye ezi ozi ahụ, ọ bụghị ngwa AI.",
            "Rịọ AI ka o dee ha n'asụsụ ndị ọzọ ndị ọrịa gị na-asụ, wee mee ka onye ọrụ maara asụsụ ahụ nke ọma ma ọ bụ onye ntụgharị asụsụ ruru eru lelee ha."
          ],
          steps: ["Rịọ AI maka ụdị ozi nkwenye, ncheta na ịgbanwe oge nwere ihe nnọchi.", "Wepụ ihe ọ bụla na-egosi ihe mere onye ahụ ji abịa.", "Tinye ha n'usoro nhazi oge gị, nke na-etinye ezi ozi.", "Mee ka onye maara asụsụ ahụ ma ọ bụ onye ruru eru lelee ntụgharị ndị ahụ."],
          words: [["Practice management system", "sọftụwia ụlọ ọrụ ahụike na-eji maka nhazi oge na ịkwụ ụgwọ."], ["Minimum necessary", "echiche HIPAA nke iji ma ọ bụ ikesa naanị ozi dị mkpa maka ihe a chọrọ ya."]],
          slides: [
            { title: "Ụdị ozi nwere ihe nnọchi", bullets: ["[aha mbụ], [ụbọchị], [oge], [nọmba fon]", "Ngwa AI anaghị ahụ ezi ozi ọ bụla"] },
            { title: "Mee ka ozi ncheta dị nta", bullets: ["Ekwula ihe mere onye ahụ ji abịa", "Kpachara anya maka ọkachamara nwere nzuzo", "Usoro nhazi oge gị na-etinye ezi ozi"] },
            { title: "Asụsụ ndị ọzọ", bullets: ["AI na-ede ntụgharị mbụ", "Onye maara asụsụ ahụ ma ọ bụ onye ruru eru na-elele ha"] }
          ],
          tryIt: "Rịọ AI maka ụdị ozi nkwenye, ozi ncheta ụbọchị tupu oge ahụ, na ozi ịgbanwe oge, nwere ihe nnọchi. Wepụ ihe ọ bụla na-egosi ihe mere onye ọrịa ji abịa.",
          youCanNow: "iji enyemaka AI mee ụdị ozi oge ọbịbịa na-echebe nzuzo.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-etinye ezi ozi onye ọrịa n'ozi ncheta?", options: ["Usoro njikwa ụlọ ọrụ gị ma ọ bụ usoro ozi gị", "Ngwa AI nkịtị", "Ụlọ ọrụ inshọransị onye ọrịa", "Kalenda e bipụtara n'akwụkwọ"], answer: 0, why: "Usoro nhazi oge ma ọ bụ ozi gị na-etinye ezi ozi, ọ bụghị ngwa AI." },
            { objective: "O3", q: "Ụdị ozi ncheta na-ekwu \"oge ọgwụgwọ uche (therapy) gị.\" Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe", "Wepụ okwu \"therapy\" ka ọ ghara igosi ozi nzuzo", "Tinye aha ọrịa ahụ", "Tinye nọmba fon ụlọ onye na-agwọ ya"], answer: 1, why: "Ekwula ihe mere onye ahụ ji abịa ma ọ bụ ụdị onye ọrụ ahụike mgbe ọ ga-egosi ozi nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: HIPAA na mbụ, wee tebụl nnabata",
        questions: [
          { objective: "O1", q: "Kedu nke bụ ozi ahụike echekwara (PHI)?", options: ["Ntuziaka ebe a na-adọba ụgbọala n'ọfịs gị", "Aha onye ọrịa ya na ọrịa ya", "Akwụkwọ nkuzi nkịtị banyere ịsa aka", "Oge ọfịs gị na-emeghe"], answer: 1, why: "Ozi ahụike na-egosi onye ọrịa ahụ bụ, bụ PHI." },
          { objective: "O1", q: "Dịka HHS si kwuo, ọrụ na-echekwa PHI maka ụlọ ọrụ gị chọrọ:", options: ["Okwuntughe onye ọrịa", "Ọ dịghị ihe", "Akaụntụ soshal midia", "Nkwekọrịta business associate agreement (BAA)"], answer: 3, why: "Ọrụ ndị na-ejikwa PHI bụ business associates, ha chọkwara BAA." },
          { objective: "O1", q: "Ị chọrọ ka AI chịkọta ndetu faịlụ ọgwụ onye ọrịa. Ụlọ ọrụ gị enweghị BAA na ngwa ahụ. Gịnị ka ị ga-eme?", options: ["Ejila ngwa ahụ maka ya", "Tinye ndetu ahụ n'ime ya", "Wepụ naanị aha nna wee tinye ya", "Jụọ enyi gị"], answer: 0, why: "PHI na-abanye naanị na ngwa a kwadoro nwere BAA." },
          { objective: "O2", q: "Onye kpọrọ na-akọ mgbu n'obi. Ihe a ga-ekwu kwesịrị:", options: ["Ịrịọ AI ka ọ chọpụta ọrịa ya", "Ịhazi oge ya n'izu na-abịa", "Ịgwa ya ka ọ kpọọ 911 ma ọ bụ gaa ER kacha nso", "Ime ka o chere na fon"], answer: 2, why: "Ihe mberede na-aga na 911." },
          { objective: "O3", q: "Gịnị ka ozi ncheta e zipụrụ na fon kwesịrị ịhapụ?", options: ["Oge", "Ụbọchị", "Ihe mere onye ahụ ji abịa", "Nọmba fon ụlọ ọrụ ahụ"], answer: 2, why: "Ozi ncheta dị nta na-echebe nzuzo." }
        ]
      }
    },
    {
      name: "Isi 2: Akwụkwọ ndị ọrịa, ọrụ ọfịs na iwu ndị ọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Akwụkwọ nkuzi n'okwu dị mfe maka ndị ọrịa, dọkịta lelere",
          minutes: 5,
          goal: "Dee akwụkwọ nkuzi nkịtị maka ndị ọrịa n'okwu dị mfe ma ziga ya ka dọkịta lelee ya.",
          text: [
            "Ọtụtụ ndị ọrịa anaghị aghọta okwu ahụike nke ọma. AI maara ide ozi nkịtị ọzọ n'okwu dị mfe: otu esi akwado maka ịsachapụ eze, ihe a ga-ebute n'ọbịbịa mbụ, ndụmọdụ nkịtị maka ime egwuregwu ahụ.",
            "Jiri naanị isiokwu nkịtị, ọ bụghị ozi onye ọrịa ọ bụla. Jụọ: \"Write a one-page handout at about a 6th-grade reading level on how to prepare for a first physical therapy visit. Short sentences, headings, no medical advice beyond general preparation.\" (Dee akwụkwọ nkuzi otu peeji n'ihe dị ka ọkwa klas 6 banyere otu esi akwado maka ọbịbịa mbụ maka ọgwụgwọ ahụ. Ahịrịokwu dị mkpụmkpụ, isiokwu, enweghị ndụmọdụ ahụike karịa nkwadebe nkịtị.)",
            "AI nwere ike ime mperi n'eziokwu ahụike. Dee \"Ka dọkịta lelee ya\" n'elu ihe ọ bụla o dere, ma mee ka dọkịta ma ọ bụ onye ọrụ ahụike nwere ikike lelee ma kwado ya tupu onye ọrịa ọ bụla ahụ ya. Tinye ahịrị kọntaktị ụlọ ọrụ gị na ndetu ka a kpọọ 911 n'ihe mberede."
          ],
          steps: ["Họrọ isiokwu nkịtị ndị ọrịa na-ajụ maka ya.", "Rịọ AI ka o dee ya n'okwu dị mfe, nwere isiokwu.", "Dee \"Ka dọkịta lelee ya\" n'elu ya.", "Dọkịta nwere ikike na-edozi ma kwado ya.", "Tinye ahịrị kọntaktị gị na ndetu 911."],
          words: [["Okwu dị mfe (plain language)", "ide ihe ọtụtụ mmadụ na-aghọta na nke mbụ ha gụrụ ya."], ["Ọkwa ịgụ akwụkwọ (reading level)", "otu ihe e dere si sie ike ịgụ, a na-egosikarị ya dị ka klas n'ụlọ akwụkwọ."]],
          slides: [
            { title: "Okwu dị mfe na-enyere ndị ọrịa aka", bullets: ["Ịkwado maka ọbịbịa", "Ihe a ga-ebute", "Omume ahụike nkịtị"] },
            { title: "Naanị isiokwu nkịtị", bullets: ["Ọ bụghị ozi onye ọrịa ọ bụla", "Rịọ maka ihe dị ka ọkwa klas 6"] },
            { title: "Dọkịta na-elele ya", bullets: ["Dee \"Ka dọkịta lelee ya\" n'elu ihe e dere", "Dọkịta nwere ikike na-akwado ya", "Tinye ahịrị kọntaktị na ndetu 911"] }
          ],
          tryIt: "Rịọ AI maka akwụkwọ nkuzi otu peeji n'isiokwu nkịtị maka ụlọ ọrụ gị. Dee \"Ka dọkịta lelee ya\" n'elu ya ma depụta eziokwu abụọ dọkịta kwesịrị ilele.",
          youCanNow: "iji AI dee akwụkwọ nkuzi n'okwu dị mfe maka ndị ọrịa ma ziga ha ka dọkịta kwado ha.",
          quickCheck: [
            { objective: "O4", q: "Kedu isiokwu dabara maka akwụkwọ nkuzi AI nkịtị?", options: ["Nsonaazụ ule Mr. Lee", "Mgbanwe ọgwụ onye ọrịa", "Ihe a ga-ebute n'ọbịbịa mbụ", "Ịchọpụta ọrịa onye kpọrọ"], answer: 2, why: "Jiri naanị isiokwu nkịtị, ọ bụghị ozi onye ọrịa ọ bụla." },
            { objective: "O4", q: "Akwụkwọ nkuzi AI dere dị mma. Gịnị ka ị ga-eme tupu onye ọrịa ahụ ya?", options: ["Bipụta ya ozugbo", "Tinye ya na weebụsaịtị", "Jụọ AI ma ọ ziri ezi", "Dee \"Ka dọkịta lelee ya\" n'elu ya ma mee ka dọkịta nwere ikike kwado ya"], answer: 3, why: "AI nwere ike ime mperi n'eziokwu ahụike, ya mere dọkịta nwere ikike na-elele ihe ọ bụla o dere." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iwu ọfịs, email na mgbasa ozi ọrụ",
          minutes: 4,
          goal: "Jiri AI maka akwụkwọ ọfịs na-achọghị ozi onye ọrịa.",
          text: [
            "Ọtụtụ ọrụ n'ilekọta ụlọ ọrụ ahụike bụ ide ihe azụmahịa nkịtị: iwu gbasara ịkagbu oge na ndị na-anaghị abịa (no-show), email nye ndị ọrụ banyere usoro fon ọhụrụ, mgbasa ozi ọrụ maka onye inyeaka ahụike (medical assistant), akwụkwọ mkpesa nye onye na-ere ngwa, ndepụta maka onye ọrụ ọhụrụ.",
            "Ndị a achọghị PHI, ya mere ngwa AI nkịtị nwere ike ide ha. Nye ezi iwu na ozi gị: \"Draft a friendly no-show policy for a counseling practice: 24-hour notice, $50 fee after the second no-show. Plain words.\" (Dee iwu no-show nwere obiọma maka ebe ndụmọdụ: ọkwa awa 24, ụgwọ $50 mgbe onye ahụ na-abịaghị nke ugboro abụọ. Okwu dị mfe.)",
            "Lelee iwu ọ bụla metụtara iwu obodo: ụgwọ, ọrụ, ịkwụ ụgwọ na ikike ndị ọrịa nwere ike inwe iwu na-achị ha. Mee ka onye ndụmọdụ compliance gị, onye ndụmọdụ HR ma ọ bụ ọka iwu lelee ya tupu i bipụta ya."
          ],
          steps: ["Họrọ akwụkwọ ọfịs na-enweghị ozi onye ọrịa.", "Nye AI ezi ozi iwu gị.", "Dozie ya ka ọ dị ka olu gị.", "Mee ka onye ndụmọdụ compliance, HR ma ọ bụ iwu lelee ihe ọ bụla iwu na-achị."],
          words: [["Iwu no-show", "iwu ụlọ ọrụ ahụ maka oge ọbịbịa ndị a hapụrụ."], ["Onye ndụmọdụ compliance", "onye na-enyere ụlọ ọrụ aka ịgbaso iwu na usoro ahụike."]],
          slides: [
            { title: "Ide ihe azụmahịa nkịtị", bullets: ["Iwu ịkagbu oge na no-show", "Email nye ndị ọrụ na mgbasa ozi ọrụ", "Akwụkwọ nye ndị na-ere ngwa na ndepụta"] },
            { title: "Enweghị PHI: AI nkịtị nwere ike inye aka", bullets: ["Nye ezi ozi gị", "Dozie ya ka ọ dị ka olu gị"] },
            { title: "Lelee isiokwu iwu na-achị", bullets: ["Ụgwọ, ọrụ, ịkwụ ụgwọ, ikike ndị ọrịa", "Nlele compliance, HR ma ọ bụ iwu"] }
          ],
          tryIt: "Rịọ AI ka o dee iwu no-show nke ụlọ ọrụ gị ma ọ bụ mgbasa ozi ọrụ maka onye nnabata. Detuo ihe ọ bụla chọrọ nlele compliance ma ọ bụ HR.",
          youCanNow: "iji AI maka akwụkwọ ọfịs na-enweghị ozi onye ọrịa, ya na nlele ndị kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ide ihe azụmahịa nkịtị na-achọghị PHI?", options: ["Ndepụta maka onye ọrụ ọhụrụ", "Ndetu faịlụ ọgwụ onye ọrịa", "Akwụkwọ nsonaazụ ule nye otu onye ọrịa", "Akwụkwọ nzigaga (referral) nwere aha ọrịa"], answer: 0, why: "Iwu, email, mgbasa ozi ọrụ na ndepụta achọghị ozi onye ọrịa." },
            { objective: "O5", q: "AI dere iwu no-show nwere ụgwọ. Gịnị ka ị ga-eme tupu i bipụta ya?", options: ["Bipụta ya ozugbo", "Mee ka onye ndụmọdụ compliance, onye ndụmọdụ HR ma ọ bụ ọka iwu lelee ya", "Mee ka ụgwọ ahụ okpukpu abụọ", "Wepụ ụbọchị ahụ"], answer: 1, why: "Iwu nwere ike ịchị ụgwọ na ikike ndị ọrịa, ya mere onye ndụmọdụ na-ebu ụzọ lelee ha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide iwu AI nke ụlọ ọrụ gị",
          minutes: 5,
          goal: "Dee iwu AI otu peeji maka ndị ọrụ ma mechaa ngwa AI nke ụlọ ọrụ gị.",
          text: [
            "Ndị ọrụ nwere ike ịbụ na ha na-eji AI na fon ha ugbu a. Obere iwu e dere ede na-echebe ndị ọrịa na ụlọ ọrụ ahụ. Iwu ise ruo asaa zuru iji malite.",
            "Ọmụmaatụ iwu: (1) Ọ dịghị PHI na ngwa AI ọ bụla ma ọ bụrụ na ụlọ ọrụ ahụ akwadoghị ya ma nwee BAA. (2) A na-akpọ ngwa a kwadoro aha ha. (3) AI anaghị enye ndị ọrịa nchọpụta ọrịa ma ọ bụ ndụmọdụ ọgwụgwọ. (4) Dọkịta nwere ikike na-akwado ihe ahụike ọ bụla maka ndị ọrịa. (5) Ndị ọrụ na-elele eziokwu n'ihe AI dere. (6) Kọọ PHI ọ bụla e tinyere na mberede nye onye na-ahụ maka nzuzo ozugbo. (7) A na-elele iwu ahụ kwa afọ.",
            "Jiri AI mee ka okwu ya doo anya karị, wee mee ka onye na-ahụ maka nzuzo ma ọ bụ compliance kwado ya, kụziere ndị ọrụ ya, ma debe otu e bịanyere aka na ya."
          ],
          steps: ["Dee iwu ise ruo asaa.", "Kpọọ ngwa a kwadoro aha ha.", "Tinye otu e si akọ mperi.", "Rịọ AI ka o mee ka okwu ya doo anya karị.", "Nweta nkwado compliance, kụziere ndị ọrụ ma debe ndị e bịanyere aka na ha."],
          words: [["Onye na-ahụ maka nzuzo (privacy officer)", "onye n'ụlọ ọrụ ahụ na-ahụ maka nzuzo HIPAA."], ["Ngwa a kwadoro", "ngwa ụlọ ọrụ ahụ nyochara ma kwe ka e jiri ya, nwee BAA ma ọ bụrụ na ọ na-ejikwa PHI."]],
          slides: [
            { title: "Ihe mere iwu ji dị mkpa", bullets: ["Ndị ọrụ nwere ike na-eji AI ugbu a", "Ọ na-echebe ndị ọrịa na ụlọ ọrụ ahụ"] },
            { title: "Iwu ndị bụ isi", bullets: ["Ọ dịghị PHI na-enweghị ngwa BAA a kwadoro", "AI anaghị enye nchọpụta ọrịa ma ọ bụ ndụmọdụ ọgwụgwọ", "Dọkịta na-akwado ihe ahụike maka ndị ọrịa"] },
            { title: "Mee ka ọ rụọ ọrụ", bullets: ["Kọọ PHI e tinyere na mberede ozugbo", "Compliance na-akwado; kụziere ndị ọrụ", "Lelee ya kwa afọ"] }
          ],
          sources: [HHS_BA],
          tryIt: "Ọrụ ikpeazụ: dee iwu AI otu peeji maka ndị ọrụ ma chịkọta ngwa AI nke ụlọ ọrụ gị: ndepụta ọrụ e kewara, ihe atọ a ga-ekwu na fon, ụdị ozi ncheta, akwụkwọ nkuzi e dere \"ka dọkịta lelee ya\" n'elu ya, na iwu ahụ. Lelee na ezi ozi onye ọrịa adịghị ebe ọ bụla.",
          youCanNow: "iduzi iji AI n'enweghị nsogbu n'ụlọ ọrụ ahụike site n'iwu doro anya na ngwa bara uru na-enweghị PHI.",
          quickCheck: [
            { objective: "O6", q: "Iwu ole ka nkuzi a na-atụ aro maka iwu AI mbụ?", options: ["Otu", "Iri ise", "Ise ruo asaa", "Ọ dịghị; naanị gwa ndị ọrụ n'ọnụ"], answer: 2, why: "Iwu ise ruo asaa zuru iji malite." },
            { objective: "O6", q: "Iwu AI i dere adịla njikere. Gịnị bụ nzọụkwụ ndị ọzọ?", options: ["Debe ya n'ime drọ", "Tinye ya n'ịntanetị maka ndị ọrịa", "Hapụ onye ọrụ ọ bụla ka ọ gbanwee ya", "Mee ka onye na-ahụ maka nzuzo ma ọ bụ compliance kwado ya, kụziere ndị ọrụ ma debe otu e bịanyere aka na ya"], answer: 3, why: "Onye ahụ na-akwado ya, a na-akụziri ndị ọrụ, ị na-edebekwa otu e bịanyere aka na ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Akwụkwọ ndị ọrịa, ọrụ ọfịs na iwu ndị ọrụ",
        questions: [
          { objective: "O4", q: "Onye na-akwado akwụkwọ nkuzi AI dere maka ndị ọrịa?", options: ["Dọkịta ma ọ bụ onye ọrụ ahụike nwere ikike", "AI ahụ", "Naanị tebụl nnabata", "Onye ọrịa"], answer: 0, why: "Ndị dọkịta na-elele eziokwu ahụike." },
          { objective: "O4", q: "Kedu isiokwu dị mma maka akwụkwọ nkuzi AI nkịtị?", options: ["Ndetu faịlụ ọgwụ", "Nsonaazụ ule Mr. Lee", "Ndepụta ọgwụ onye ọrịa", "Otu esi akwado maka ọbịbịa mbụ"], answer: 3, why: "Isiokwu nkịtị enweghị PHI." },
          { objective: "O5", q: "Kedu ọrụ ọfịs nwere ike iji ngwa AI nkịtị?", options: ["Ịchịkọta ndetu ọbịbịa onye ọrịa", "Mgbasa ozi ọrụ maka onye inyeaka ahụike", "Ide akwụkwọ ozi nwere aha ọrịa onye ọrịa", "Itinye koodu n'arịrịọ inshọransị (claim) nke otu onye ọrịa"], answer: 1, why: "O nweghị ozi onye ọrịa ọ bụla." },
          { objective: "O6", q: "Onye ọrụ tinyere aha onye ọrịa na ọrịa ya na ngwa AI n'efu na mberede. Gịnị ka iwu kwesịrị ikwu ka e mee?", options: ["Kọọ ya nye onye na-ahụ maka nzuzo ozugbo", "Zoo ya", "Hichapụ kọmputa ahụ", "Emela ihe ọ bụla"], answer: 0, why: "Ịkọ ya ngwa ngwa na-enyere ụlọ ọrụ ahụ aka ime ihe ziri ezi." },
          { objective: "O6", q: "Kedu nke bụ ezigbo iwu AI?", options: ["PHI nwere ike ịga ebe ọ bụla", "Ngwa ọ bụla dị mma", "AI anaghị enye ndị ọrịa nchọpụta ọrịa ma ọ bụ ndụmọdụ ọgwụgwọ", "Ọ dịghị onye na-elele ihe AI dere"], answer: 2, why: "Mkpebi ọgwụgwọ na-anọgide n'aka ndị dọkịta nwere ikike." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Obere Ụlọ Ọrụ Ahụike",
    questions: [
      { objective: "O1", q: "PHI pụtara:", options: ["Inshọransị ahụike ọha", "Ozi ahụike echekwara (protected health information)", "Nlele ụlọ nzuzo", "Ndepụta ahụike bụ isi"], answer: 1, why: "Ọ bụ ozi ahụike na-egosi onye ọrịa ahụ bụ." },
      { objective: "O1", q: "Kedu nke bụ PHI?", options: ["Akwụkwọ mgbasa ozi nkịtị maka oge flu", "Oge ọfịs na-emeghe", "Ntuziaka ebe a na-adọba ụgbọala", "Ụbọchị ọmụmụ ya na ụdị ọbịbịa"], answer: 3, why: "Ozi na-egosi onye ọ bụ ya na ozi ahụike bụ PHI." },
      { objective: "O1", q: "BAA bụ:", options: ["Fọm onye ọrịa", "Koodu ịkwụ ụgwọ", "Kaadị inshọransị", "Nkwekọrịta ebe onye na-ere ngwa kwetara ichebe PHI"], answer: 3, why: "Nkwekọrịta business associate na-ekpuchi otu e si ejikwa PHI." },
      { objective: "O1", q: "Ọtụtụ ngwa nkata AI n'efu nkịtị:", options: ["Bụ ndị HIPAA kwadoro mgbe niile", "Anaghị abịanye aka na BAA na onye ọ bụla", "Bụ HHS na-elekọta ha", "Na-ehichapụ ihe niile ozugbo"], answer: 1, why: "Echela na ngwa nkịtị ka a kwadoro maka PHI." },
      { objective: "O1", q: "Mgbe obi abụọ dị ma ọrụ nwere ike iji AI, jụọ:", options: ["Onye ọrịa", "Ngwa AI ahụ", "Onye na-ahụ maka nzuzo ma ọ bụ compliance gị", "Otu soshal midia"], answer: 2, why: "Ha na-ekpebi ihe a kwadoro." },
      { objective: "O1", q: "Ebee ka ndị ọrụ ga-ahụ ntuziaka HIPAA gọọmentị?", options: ["hhs.gov", "Blọọgụ ọ bụla", "Ngwa nkata", "Okwu mmadụ dere n'akụkọ"], answer: 0, why: "HHS na-ebipụta ntuziaka HIPAA." },
      { objective: "O2", q: "Ajụjụ ọgwụ ọzọ (refill) na ihe mgbaàmà na fon na-aga:", options: ["Na voicemail ruo mgbe ebighị ebi", "Na AI", "N'aka ndị ọrụ ahụike", "N'ọfịs ịkwụ ụgwọ"], answer: 2, why: "Ajụjụ ahụike chọrọ ndị ọrụ ahụike." },
      { objective: "O2", q: "Onye na-akwado ihe ndị nnabata ga-ekwu gbasara ọgwụgwọ?", options: ["Onye isi ọrụ ahụike", "Onye ọrụ kacha ọhụrụ", "AI", "Onye na-ere ngwa"], answer: 0, why: "Nkwado ọrụ ahụike na-eme ka ha dị mma." },
      { objective: "O2", q: "Onye na-eme triage?", options: ["AI", "Ndị ọrụ ahụike", "Naanị tebụl nnabata", "Ndị enyi ndị ọrịa"], answer: 1, why: "Ịkpebi otu ihe si dị ngwa bụ ọrụ ahụike." },
      { objective: "O3", q: "Kedu nke bụ ezigbo ụdị ozi ncheta?", options: ["ID inshọransị onye ọrịa", "\"Ndewo Jane, anyị na-akwado ọbịbịa nsochi HIV gị\"", "Ndetu faịlụ ọgwụ", "\"Ndewo [aha mbụ], anyị na-akwado oge ọbịbịa gị na [ụbọchị] n'elekere [oge].\""], answer: 3, why: "Ihe nnọchi, na-ekwughị ihe mere onye ahụ ji abịa." },
      { objective: "O3", q: "Gịnị na-etinye ezi ozi onye ọrịa n'ozi ncheta?", options: ["Usoro nhazi oge ma ọ bụ usoro ozi gị", "Ngwa AI nkịtị", "Fon onye ọrụ afọ ofufo", "Soshal midia"], answer: 0, why: "Ezi ozi na-anọ n'usoro a kwadoro." },
      { objective: "O3", q: "Onye kwesịrị ilele ozi ncheta AI sụgharịrị?", options: ["Onye ọrịa", "Ọ dịghị onye", "AI ọzọ", "Onye ọrụ maara asụsụ ahụ nke ọma ma ọ bụ onye ntụgharị asụsụ ruru eru"], answer: 3, why: "Ntụgharị asụsụ nwere ike inwe mperi." },
      { objective: "O4", q: "Ezigbo ọkwa ịgụ akwụkwọ maka akwụkwọ nkuzi nkịtị ndị ọrịa dị ihe dị ka:", options: ["Ụlọ akwụkwọ dọkịta", "Onye gụchara mahadum", "Klas 6", "Enweghị okwu ọ bụla"], answer: 2, why: "Okwu dị mfe na-enyere ọtụtụ ndị ọrịa aka ịghọta." },
      { objective: "O4", q: "A na-ede n'elu akwụkwọ nkuzi ọ bụla AI dere:", options: ["\"Nke ikpeazụ\"", "\"Ka dọkịta lelee ya\"", "\"Nzuzo\"", "\"AI kwadoro ya\""], answer: 1, why: "Ndị dọkịta ga-akwado ihe ahụike." },
      { objective: "O4", q: "Akwụkwọ nkuzi ndị ọrịa kwesịrị inwe:", options: ["Ọ dịghị ihe ọzọ", "Akụkọ ndị ọrịa ndị ọzọ nwere aha ha", "Nchọpụta ọrịa maka onye ọ bụla na-agụ ya", "Ahịrị kọntaktị gị na ndetu 911 maka ihe mberede"], answer: 3, why: "Ndị ọrịa kwesịrị ịma otu ha ga-esi nweta enyemaka." },
      { objective: "O5", q: "Kedu akwụkwọ chọrọ nlele compliance ma ọ bụ HR?", options: ["Akara oge ezumike", "Akwụkwọ ekele nye ndị ọrụ maka oriri", "Iwu ụgwọ no-show", "Maapụ ebe a na-adọba ụgbọala"], answer: 2, why: "Iwu nwere ike ịchị ụgwọ na ikike ndị ọrịa." },
      { objective: "O5", q: "Email nye ndị ọrụ banyere usoro fon ọhụrụ:", options: ["Achọghị PHI, ya mere AI nkịtị nwere ike inye aka", "Ga-enwe aha ndị ọrịa", "Chọrọ BAA", "Enweghị ike ide ya"], answer: 0, why: "Ozi onye ọrịa ọ bụla adịghị n'ime ya." },
      { objective: "O6", q: "Iwu AI kwesịrị idepụta:", options: ["Aha ndị ọrịa", "Aha ngwa a kwadoro", "Okwuntughe ndị ọrụ", "Ọ dịghị ihe a kapịrị ọnụ"], answer: 1, why: "Ndị ọrụ kwesịrị ịma ngwa a kwere ka ha jiri." },
      { objective: "O6", q: "Ugboro ole ka a ga-elele iwu AI?", options: ["Ọ dịghị mgbe", "Opekata mpe kwa afọ", "Kwa afọ iri", "Naanị mgbe a kwụrụ ụgwọ ntaramahụhụ"], answer: 1, why: "Ngwa na iwu na-agbanwe." },
      { objective: "O6", q: "N'ihe ọmụmụ a, a na-eji AI maka:", options: ["Ọrụ ọfịs na ide ihe mbụ, ọ bụghị ịchọpụta ọrịa", "Ịchọpụta ọrịa ndị ọrịa", "Inye iwu ọgwụ", "Ịnọchi ndị dọkịta"], answer: 0, why: "Mkpebi ọgwụgwọ na-anọgide n'aka ndị dọkịta nwere ikike." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      3,
      7,
      9,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ndepụta ọrụ e kewara",
        objective: "O1",
        notYet: "Ọrụ chọrọ PHI nọ n'ogidi \"AI nkịtị dị mma\".",
        meets: "E kewara ọrụ iri n'ụzọ ziri ezi n'ogidi abụọ ahụ.",
        exceeds: "Na-ekwu ngwa BAA a kwadoro, ọ bụrụ na e nwere, ụlọ ọrụ ahụ na-eji maka ọrụ PHI."
      },
      {
        name: "Ihe nnabata ga-ekwu n'enweghị nsogbu",
        objective: "O2",
        notYet: "Ihe a ga-ekwu na-enye ndụmọdụ ahụike ma ọ bụ anaghị eziga ihe mberede na 911.",
        meets: "Ihe atọ a ga-ekwu na-eziga ajụjụ ọgwụgwọ n'aka ndị ọrụ ahụike na ihe mberede na 911.",
        exceeds: "E dere n'elu ha ka onye isi ọrụ ahụike kwado ha, ya na ndetu onye kwadoro ha."
      },
      {
        name: "Ụdị ozi ncheta na-echebe nzuzo",
        objective: "O3",
        notYet: "Ụdị ozi nwere ezi ozi onye ọrịa ma ọ bụ na-egosi ihe mere onye ahụ ji abịa.",
        meets: "Ụdị ozi nkwenye na ncheta nwere ihe nnọchi, na-ekwughị ihe mere onye ahụ ji abịa.",
        exceeds: "Nwekwara ụdị ozi ịgbanwe oge na ntụgharị asụsụ onye maara asụsụ ahụ lelere."
      },
      {
        name: "Akwụkwọ nkuzi maka nlele",
        objective: "O4",
        notYet: "Akwụkwọ nkuzi ahụ gbasara otu onye ọrịa ma ọ bụ e deghị n'elu ya ka e lelee ya.",
        meets: "Isiokwu nkịtị, okwu dị mfe, e dere \"Ka dọkịta lelee ya\" n'elu ya, nwere ahịrị kọntaktị na ndetu 911.",
        exceeds: "Na-edepụta eziokwu ndị dọkịta kwesịrị ilele."
      },
      {
        name: "Iwu AI ndị ọrụ",
        objective: "O6",
        notYet: "Iwu ahụ enweghị iwu enweghị PHI ma ọ bụ otu e si akọ mperi.",
        meets: "Iwu ise ruo asaa gụnyere enweghị PHI na-enweghị BAA, ngwa a kwadoro, ịkọ mperi na nlele kwa afọ.",
        exceeds: "Onye na-ahụ maka nzuzo ma ọ bụ compliance kwadoro ya, nwekwara atụmatụ ọzụzụ ndị ọrụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ụlọ ọrụ ndị nabatara iwu AI e dere ede maka ndị ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ụlọ ọrụ ndị kọrọ na e tinyeghị PHI ọ bụla na ngwa AI nkịtị mgbe ọzụzụ ahụ gasịrị",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka obere azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ fon nwere ịntanetị",
      "Ngwa enyemaka AI nkịtị n'efu, e ji naanị maka ọrụ na-enweghị PHI",
      "Iwu ụlọ ọrụ gị ugbu a na ụdị oku a na-enwetakarị, ma ọ bụ ọmụmaatụ ha",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Jiri naanị ozi e chepụtara echepụta ma ọ bụ ọmụmaatụ na klaasị; edela ezi ozi onye ọrịa n'ime ngwa AI mgbe ọ bụla.",
      "Kpọọ onye na-ahụ maka nzuzo ma ọ bụ compliance nke ụlọ ọrụ ahụ ka ọ bịa nnọkọ gbasara iwu AI ndị ọrụ.",
      "Mee ka dọkịta ma ọ bụ onye ọrụ ahụike nwere ikike lelee akwụkwọ nkuzi na ihe a ga-ekwu gbasara ọgwụgwọ tupu e jiri ha.",
      "Chetara ndị na-amụ ihe na ihe ọmụmụ a abụghị ndụmọdụ iwu ma ọ bụ compliance, ọ na-ezigakwa ha na ntuziaka HHS na onye ndụmọdụ ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of leadership/lead-agentic-transformation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-transformation-ig",
  lang: "ig",
  translationOf: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Ndu n'Oge AI Agent 3: AI Agent, Ime Ka Ọrụ Na-arụ Onwe Ya, na Iduzi Mgbanwe",
  skills: "Ịhọrọ usoro ọrụ a ga-enye agent, Ịtọ ókè ihe agent nwere ike ime n'onwe ya, Ịtụ ọnọdụ mbido na uru, Idebe ndepụta ihe egwu, Iduzi ndị mmadụ n'oge mgbanwe, Ide atụmatụ nnwale ụbọchị 90",
  outcome: "ịhọrọ otu usoro ọrụ AI agent nwere ike ime ka ọ ka mma ma dee atụmatụ nnwale ụbọchị 90 maka ya, nwere eserese usoro ọrụ ahụ, ókè ihe agent ahụ nwere ike ime n'onwe ya na nnabata ndị mmadụ, ọnọdụ mbido na ihe ịtụ ihe ịga nke ọma, ndepụta ihe egwu, atụmatụ ndị mmadụ na ọzụzụ, na iwu ịga n'ihu ma ọ bụ ịkwụsị tupu a gbasaa ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị isi ga-ekpebi ma AI agent ga-abata n'ụlọ ọrụ ha na otu ọ ga-esi abata: ndị njikwa, ndị nduzi, ndị nwe azụmahịa, na ndị isi ụlọ ọrụ na-anaghị achọ uru (nonprofit) na nke gọọmentị. Ọ na-emechi usoro ihe ọmụmụ Ndu n'Oge AI Agent. (AI agent bụ mmemme AI nwere ike ime ọtụtụ nzọụkwụ nke ọrụ, ọ bụghị naanị ịza ajụjụ.)",
    "Isi 1 gbasara ọrụ ahụ: ịchọta usoro ọrụ kwesịrị ka e mee ka ọ na-arụ onwe ya, ikpebi ókè ihe agent nwere ike ime n'onwe ya, na ịtụ uru na ihe egwu n'eziokwu. Isi 2 gbasara ndị mmadụ: iduzi mgbanwe, ịtọ usoro nchịkwa dị mfe, na ide atụmatụ nnwale ụbọchị 90 ị nwere ike igosi ndị bọọdụ gị, onye nwe ụlọ ọrụ ma ọ bụ ndị isi ibe gị.",
    "Ọ dịghị mkpa ide koodu. Ị ga-eji ngwa enyemaka AI n'efu nyere gị aka ide ihe mbụ, jiri uche gị kpebie. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ nnwale ụbọchị 90, peeji abụọ, maka otu AI agent n'ụlọ ọrụ gị. Tinye: eserese usoro ọrụ (nzọụkwụ dị ugbu a na oge ha na-ewe), ọrụ agent ahụ na ókè ihe ọ nwere ike ime n'onwe ya, ebe ọ bụla mmadụ ga-anabata ihe na onye ga-aza ajụjụ maka ya, ọnọdụ mbido na ihe ịtụ ihe ịga nke ọma, ndepụta ihe egwu nwere opekata mpe ihe egwu ise, atụmatụ ndị mmadụ (onye ọ ga-emetụta, otu ị ga-esi gwa ha na otu ị ga-esi zụọ ha), na iwu ịga n'ihu ma ọ bụ ịkwụsị maka ụbọchị 90. Gosi onye ọrụ ibe gị ya n'ime nkeji ise ma dee ajụjụ abụọ kacha sie ike ọ jụrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi ga-ekpebi ma AI agent ga-abata n'ụlọ ọrụ ha na otu ọ ga-esi abata: ndị njikwa, ndị nduzi, ndị nwe azụmahịa, na ndị isi ụlọ ọrụ nonprofit na nke gọọmentị na-emechi usoro ihe ọmụmụ Ndu n'Oge AI Agent.",
    startingPoint: "Ha nwere ike ịkọwa generative AI na agentic AI, ha na-eji AI n'ọrụ ndu nke ha, ha nwekwara ntuziaka iji AI maka ndị otu ha. Ha ahazibeghị ma ọ bụ duzie nnwale AI agent ọ bụla.",
    gap: "Ọrụ AI agent na-adakarị n'ihi na ndị isi na-enye agent usoro ọrụ na-ekwesịghị, na-enye agent ike karịrị akarị, na-amaghị ọnọdụ mbido, ma ọ bụ na-echefu ndị ọ na-emetụta. Ndị isi chọrọ atụmatụ nnwale doro anya nke eziokwu, nwere nnabata, ihe ịtụ ihe, ihe egwu, atụmatụ ndị mmadụ na iwu ịkwụsị, tupu ihe ọ bụla amalite n'ezie.",
    constraints: [
      "Ọ dịghị mkpa ide koodu; okwu dị mfe maka ndị isi na-abụghị ndị ọkachamara teknụzụ",
      "Ngwaọrụ: kọmputa nwere ngwa enyemaka AI n'efu maka ide ihe mbụ",
      "Iwu dị iche iche dabere n'ụdị ọrụ na ebe ọ dị, ya mere ndị na-amụ ihe na-ajụ onye ndụmọdụ ruru eru",
      "Etinyela ozi nzuzo ma ọ bụ ozi ụlọ ọrụ ezoro ezo na ngwa AI mgbe ị na-ede atụmatụ ahụ",
      "Oge: nkuzi dị mkpụmkpụ, ma atụmatụ ikpeazụ ga-ewe oge karịa"
    ],
    prerequisites: "Ihe ọmụmụ 1 na 2 nke Ndu n'Oge AI Agent."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị usoro ọrụ ise n'ngalaba gị", action: "ise eserese otu usoro ọrụ ma tụọ akara ya dị ka nhọrọ mbụ maka AI agent", standard: "site n'iji ihe ise ahụ: ọnụọgụ ọrụ, nzọụkwụ doro anya, ozi dị na dijitalụ, nsogbu ọ na-enye, na obere mmerụ" },
    { id: "O2", condition: "Maka usoro ọrụ nnwale gị", action: "ịhọrọ ókè mbido nke ihe agent ahụ nwere ike ime n'onwe ya, depụta ebe ọ bụla mmadụ ga-anabata ihe, ma kpọọ aha onye nwe agent ahụ", standard: "na mmadụ ga-anabata tupu agent ahụ emefuo ego ma ọ bụ gwa ndị ahịa okwu" },
    { id: "O3", condition: "Tupu nnwale ahụ amalite", action: "ịtọ ọnọdụ mbido, ihe ịtụ ihe ịga nke ọma atọ ruo ise, na ndepụta ihe egwu", standard: "nwere ihe ịtụ ịdị mma na opekata mpe ihe egwu ise, nke ọ bụla nwere ihe nchekwa na onye nwe ya" },
    { id: "O4", condition: "Mgbe e nyere gị ndị nnwale gị ga-emetụta", action: "ịhazi otu ị ga-esi gwa ha okwu, tinye ha aka n'ọrụ ahụ ma zụọ ha", standard: "na-ekwu n'eziokwu ihe ga-agbanwe na ihe na-agaghị agbanwe, na otu ha ga-esi kwuo nchegbu ha" },
    { id: "O5", condition: "Maka ndị otu gị ma ọ bụ ụlọ ọrụ gị", action: "ịtọ usoro nchịkwa AI dị mfe nwere ndepụta ngwa, onye nwe agent ọ bụla na otu nyocha", standard: "nwere opekata mpe ahịrị atọ na ndepụta ahụ na onye nwere ike ịkwụsịtụ agent ọ bụla" },
    { id: "O6", condition: "Site n'iji akụkụ ndị dị n'elu", action: "ide na igosi atụmatụ nnwale ụbọchị 90, peeji abụọ, nwere iwu ịga n'ihu ma ọ bụ ịkwụsị", standard: "ebe e dere iwu ahụ tupu nnwale ahụ amalite, ma dekọọ ajụjụ abụọ siri ike" }
  ],
  chapters: [
    {
      name: "Isi 1: AI agent n'ime ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta usoro ọrụ kwesịrị ka e nye agent",
          minutes: 6,
          goal: "See eserese usoro ọrụ ma tụọ akara ma ọ bụ ezigbo nhọrọ mbụ maka agent.",
          text: [
            "Ebidola na teknụzụ; bido n'ọrụ ahụ. Ezigbo usoro ọrụ mbụ na-eme ọtụtụ mgbe, nwere nzọụkwụ doro anya, na-eji ozi dịlarị na dijitalụ, na-agwụ ndị mmadụ ike ma ọ bụ na-ewe oge, ma nwee mperi ị nwere ike ịhụ tupu ha emerụ mmadụ. Ọmụmaatụ: ịhazi arịrịọ na-abata, ịkwado akụkọ kwa izu, ịhazi oge nzukọ, na ide ihe mbụ nke azịza a na-ezikarị.",
            "See eserese ya tupu i nye ya agent. Dee nzọụkwụ ọ bụla, onye na-eme ya, ngwa e ji eme ya na oge ọ na-ewe. Ise eserese na-egosikarị ihe efu ị nwere ike iwepụ n'ejighị AI ọ bụla. Inye agent usoro ọrụ mebiri emebi na-eme ka ọ na-emebi ngwa ngwa.",
            "Tụọ akara nhọrọ ọ bụla site na 1 ruo 5 n'ihe ndị a: ọnụọgụ ọrụ, nzọụkwụ doro anya, ozi dị na dijitalụ, nsogbu ọ na-enye ndị ọrụ, na obere mmerụ ma ọ bụrụ na ọ mehie. Họrọ nke nwere akara kacha elu maka nnwale mbụ gị, ọ bụghị echiche kacha atọ ụtọ. Ezere nnwale mbụ na-eme mkpebi gbasara ndị mmadụ, ego ma ọ bụ nchekwa."
          ],
          steps: ["Depụta usoro ọrụ ise ị nwere ike ịhọrọ.", "See eserese abụọ kacha mma: nzọụkwụ, onye, ngwa, oge.", "Buru ụzọ wepụ ihe efu doro anya.", "Tụọ akara nke ọ bụla site na 1 ruo 5 n'ọnụọgụ ọrụ, nzọụkwụ doro anya, ozi dijitalụ, nsogbu, obere mmerụ.", "Họrọ akara kacha elu nke na-ezere mkpebi gbasara ndị mmadụ, ego ma ọ bụ nchekwa."],
          words: [["Eserese usoro ọrụ (process map)", "foto nzọụkwụ n'otu n'otu nke otu esi arụ otu ọrụ taa."], ["Nnwale (pilot)", "obere nnwale nwere oge a kara aka tupu e jiri ya n'ebe niile."]],
          slides: [
            { title: "Bido n'ọrụ ahụ", bullets: ["Ọ na-eme ọtụtụ mgbe, nzọụkwụ doro anya, ozi dijitalụ", "Ọ na-ewe oge ma ọ bụ na-agwụ ndị mmadụ ike", "Ị nwere ike ịhụ mperi tupu ọ merụọ mmadụ"] },
            { title: "See eserese tupu i nye agent", bullets: ["Nzọụkwụ, onye, ngwa, oge", "Buru ụzọ wepụ ihe efu", "Usoro mebiri emebi + AI = ọ na-emebi ngwa ngwa"] },
            { title: "Tụọ akara nhọrọ ndị ahụ", bullets: ["Ọnụọgụ, nzọụkwụ doro anya, ozi dijitalụ, nsogbu, obere mmerụ", "Họrọ akara kacha mma, ọ bụghị nke kacha atọ ụtọ", "Na mbụ, ezere mkpebi gbasara ndị mmadụ, ego, nchekwa"] }
          ],
          tryIt: "Depụta usoro ọrụ ise n'ngalaba gị. See eserese abụọ kacha elu, tụọ akara ha n'ihe ise ahụ, ma họrọ usoro ọrụ nnwale gị.",
          youCanNow: "ise eserese usoro ọrụ ma họrọ nhọrọ mbụ kwesịrị ekwesị maka AI agent.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka eserese usoro ọrụ na-egosi?", options: ["Nzọụkwụ ọ bụla, onye na-eme ya, ngwa e ji eme ya na oge ọ na-ewe", "Eserese ime ụlọ ọfịs", "Naanị ihe e nwetara n'ikpeazụ", "Ndị ọrụ a ga-eji agent dochie"], answer: 0, why: "Eserese na-egosi otu ọrụ si aga n'ezie, nke na-egosi ebe agent nwere ike inyere aka." },
            { objective: "O1", q: "Otu usoro ọrụ anaghị eme ọtụtụ mgbe, edoghị anya, ma na-emerụ ihe ma ọ mehie. Kedu akara ị ga-enye ya dị ka nnwale mbụ?", options: ["Ezigbo nnwale mbụ, n'ihi na o siri ike", "Nhọrọ mbụ na-adịghị mma; họrọ usoro na-eme ọtụtụ mgbe, doro anya, nwee obere mmerụ", "Nye agent ya kpamkpam ozugbo", "Tụọ akara ya emesịa, mgbe e wuchara agent ahụ"], answer: 1, why: "Nnwale mbụ kwesịrị ịbụ ọrụ na-eme ọtụtụ mgbe, doro anya, nwee obere mmerụ ma ọ mehie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kedu ihe agent nwere ike ime? Ókè ike na nnabata",
          minutes: 5,
          goal: "Tọọ ókè ihe agent nwere ike ime n'onwe ya ma kpọọ aha nnabata mmadụ.",
          text: [
            "Chee echiche banyere ike agent n'ọkwa. Ọkwa 1, ịtụ aro: agent na-ede ihe mbụ, mmadụ na-eme ihe niile. Ọkwa 2, ịkwado: agent na-akwado ihe a ga-eme (fọm e dejupụtara, email dị njikere) mmadụ wee nabata nke ọ bụla. Ọkwa 3, ime ihe na nlele: agent na-eme ihe n'okwu ndị nkịtị ma zigara mmadụ okwu ndị pụrụ iche; mmadụ ahụ na-elelekwa ụfọdụ n'ime ihe o mere. Ọkwa 4, ime ihe n'onwe ya: ọ dị ụkọ, naanị maka ọrụ nwere obere mmerụ ma a pụrụ ịlaghachi azụ.",
            "Bido nnwale n'ọkwa 1 ma ọ bụ 2. Rigoo elu naanị mgbe ihe ịtụ ihe gị gosiri na a pụrụ ịtụkwasị agent ahụ obi, ma naanị maka okwu ndị o gosiri nke ahụ. Debe nnabata mmadụ tupu ihe ọ bụla na-emefu ego, na-agwa ndị ahịa ma ọ bụ ọha okwu, na-agbanwe ndekọ, ma ọ bụ na-emetụta ikike mmadụ.",
            "Kpọọ aha onye ga-aza ajụjụ maka agent ahụ: onye nwe ihe ọ na-arụpụta, na-elele ndekọ ọrụ ya (log), ma nwee ike ịgbanyụ ya. Agent na-enweghị onye nwe ya bụ ụzọ a na-ahụkarị nke ọrụ akpaaka (automation) si emebi."
          ],
          words: [["Ọkwa ike (autonomy level)", "ókè ihe AI agent nwere ike ime n'enweghị mmadụ nabatara ya."], ["Okwu pụrụ iche (exception)", "okwu na-adabaghị n'usoro nkịtị ma chọọ mmadụ."], ["Onye nwe agent", "onye ga-aza ajụjụ, nwe ihe agent na-arụpụta, ma nwee ike ịgbanyụ ya."]],
          slides: [
            { title: "Ọkwa anọ nke ike agent", bullets: ["1 Ịtụ aro: agent na-ede ihe mbụ, ndị mmadụ na-eme ihe", "2 Ịkwado: ndị mmadụ na-anabata ihe ọ bụla", "3 Ime ihe na nlele: okwu pụrụ iche na-aga n'aka mmadụ", "4 Ime ihe n'onwe ya: ụkọ, obere mmerụ, a pụrụ ịlaghachi"] },
            { title: "Bido n'ala, nweta ntụkwasị obi", bullets: ["Nnwale n'ọkwa 1 ma ọ bụ 2", "Rigoo elu naanị mgbe ihe akaebe dị"] },
            { title: "Mmadụ na-anabata mgbe niile tupu", bullets: ["Imefu ego", "Ịgwa ndị ahịa ma ọ bụ ọha okwu", "Ịgbanwe ndekọ ma ọ bụ imetụta ikike mmadụ"] },
            { title: "Agent ọ bụla nwere onye nwe ya", bullets: ["Ọ nwe ihe ọ na-arụpụta, na-elele log ya", "Ọ nwere ike ịgbanyụ ya"] }
          ],
          tryIt: "Maka usoro ọrụ nnwale gị, họrọ ọkwa ike mbido, depụta nzọụkwụ ọ bụla ebe mmadụ ga-anabata ihe, ma kpọọ aha onye nwe agent ahụ.",
          youCanNow: "ịtọ ọkwa ike agent, ebe mmadụ ga-anabata ihe, na onye nwe ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka onye nwe agent na-eme?", options: ["Ọ na-ede koodu agent ahụ", "Ọ na-azụta mmemme ahụ", "Ọ nwe ihe agent na-arụpụta, na-elele log ya ma nwee ike ịgbanyụ ya", "Ọ bụ ya kacha eji agent ahụ"], answer: 2, why: "Agent ọ bụla chọrọ onye a kpọrọ aha ga-aza ajụjụ maka ya." },
            { objective: "O2", q: "Agent nnwale gị ga-ede ihe mbụ nke azịza nye ndị ahịa. Kedu ọkwa ike ị ga-ebido na ya?", options: ["Ike zuru ezu, iji chekwaa oge kacha ukwuu", "Ime ihe na nlele, na-ezipu naanị okwu pụrụ iche", "Ọ dịghị ọkwa; hapụ mkpebi ahụ", "Ọkwa 1 ma ọ bụ 2, ka mmadụ nabata tupu ihe ọ bụla eruo onye ahịa"], answer: 3, why: "Nnwale na-ebidokarị n'ala, mmadụ na-anabatakwa tupu agent agwa ndị ahịa okwu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịtụ uru na ihe egwu n'eziokwu",
          minutes: 6,
          goal: "Tọọ ọnọdụ mbido, ihe ịtụ ihe ịga nke ọma na ndepụta ihe egwu maka nnwale.",
          text: [
            "Ị pụghị igosi na ihe ka mma ma ọ bụrụ na ị nweghị ọnọdụ mbido (baseline): otu usoro ọrụ ahụ si aga taa. Tụọ oge ọrụ ọ bụla na-ewe, ọnụọgụ ọrụ, ọnụọgụ mperi, oge ichere, na obi ụtọ ndị ọrụ ma ọ bụ ndị ahịa, ruo izu ole na ole tupu nnwale ahụ.",
            "Họrọ ihe ịtụ ihe ịga nke ọma atọ ruo ise, tinyekwa ịdị mma, ọ bụghị naanị ọsọ: \"oge arịrịọ ọ bụla belatara pasent 30 n'enweghị mperi ọzọ\". Gụọ ụgwọ ndị zoro ezo: oge nlele, ụgwọ ngwa, ọzụzụ na oge e ji edozi mperi agent.",
            "Debe ndepụta ihe egwu (risk register): tebụl dị mfe nke ihe egwu ọ bụla, otu o si nwee ike ime, otu ọ ga-esi njọ, ihe nchekwa ya, na onye nwe ya. Ihe egwu agent a na-ahụkarị: ihe ọ rụpụtara ezighi ezi, ozi nzuzo ịpụta, prompt injection (ntụziaka ọjọọ e zoro n'ime ozi), ike karịrị akarị, ihe na-adịghị mma nye ụfọdụ ndị, ndị ọrụ ịtụkwasị agent obi karịrị akarị, na vendor lock-in. NIST AI Risk Management Framework, nke n'efu, nke e hazịrị dị ka Govern, Map, Measure na Manage, bụ ezigbo ntuziaka."
          ],
          steps: ["Tụọ ọnọdụ mbido ruo izu ole na ole.", "Họrọ ihe ịtụ ihe atọ ruo ise, tinyekwa ịdị mma.", "Gụọ ụgwọ ndị zoro ezo: nlele, ngwa, ọzụzụ, ndozi.", "Depụta opekata mpe ihe egwu ise na ndepụta ihe egwu.", "Nye ihe egwu ọ bụla ihe nchekwa na onye nwe ya."],
          words: [["Ọnọdụ mbido (baseline)", "otu usoro ọrụ si aga tupu ị gbanwee ya."], ["Ndepụta ihe egwu (risk register)", "tebụl ihe egwu nwere otu o si nwee ike ime, otu ọ ga-esi njọ, ihe nchekwa na onye nwe ya."], ["Vendor lock-in", "ịrapara n'otu onye na-ere ngwa n'ihi na ịgbanwe siri ike."]],
          slides: [
            { title: "Ọnọdụ mbido na mbụ", bullets: ["Oge ọrụ ọ bụla, ọnụọgụ ọrụ, mperi", "Oge ichere, obi ụtọ", "Tụọ ya ruo izu ole na ole"] },
            { title: "Tụọ ịdị mma, ọ bụghị naanị ọsọ", bullets: ["\"Ọ dị ngwa 30%, mperi abawanyeghị\"", "Gụọ oge nlele, ngwa, ọzụzụ na ndozi"] },
            { title: "Ndepụta ihe egwu", bullets: ["Ihe egwu, ohere ọ ga-eme, njọ ya, ihe nchekwa, onye nwe ya", "Ihe ezighi ezi, ozi nzuzo, injection, ike karịrị akarị", "Enweghị ikpe ziri ezi, ntụkwasị obi karịrị akarị, lock-in"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Dee ihe ịtụ ọnọdụ mbido maka usoro ọrụ nnwale gị, ihe ịtụ ihe ịga nke ọma atọ ruo ise, na ndepụta ihe egwu nwere opekata mpe ihe egwu ise, nke ọ bụla nwere ihe nchekwa na onye nwe ya.",
          youCanNow: "ịtọ ọnọdụ mbido, ihe ịtụ ihe ịga nke ọma n'eziokwu na ndepụta ihe egwu maka nnwale AI.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ndepụta ihe egwu?", options: ["Ndepụta ihe egwu, nke ọ bụla nwere ohere ọ ga-eme, njọ ya, ihe nchekwa na onye nwe ya", "Ndepụta ndị ọrụ na-eji AI", "Akwụkwọ inshọransị", "Log ọrụ agent ahụ"], answer: 0, why: "Ndepụta ihe egwu na-eme ka a hụ ihe egwu ọ bụla ma nye ya ihe nchekwa na onye nwe ya." },
            { objective: "O3", q: "Naanị ihe ịtụ ihe ịga nke ọma gị bụ \"ọ dị ngwa karịa\". Gịnị ka ị ga-agbakwunye?", options: ["Ọ dịghị ihe; ọsọ bụ ihe dị mkpa", "Ihe ịtụ ịdị mma, dị ka mperi abawanyeghị", "Ihe ịtụ otu ndị ọrụ si hụ onye na-ere ngwa n'anya", "Akara agent ahụ nyere onwe ya"], answer: 1, why: "Ọsọ n'enweghị ịdị mma nwere ike izo mperi na ọrụ a ga-emeghachi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI agent n'ime ọrụ",
        questions: [
          { objective: "O1", q: "Kedu usoro ọrụ mbụ kacha mma maka nnwale AI agent?", options: ["Ikpebi onye a ga-ebuli n'ọkwa", "Ịnabata ịkwụ nnukwu ego", "Ịhazi arịrịọ nkịtị na-abata", "Ilekọta ihe mberede gbasara nchekwa"], answer: 2, why: "Ọrụ na-eme ọtụtụ mgbe, doro anya, nwee obere mmerụ na-eme ka nnwale mbụ dị mma." },
          { objective: "O1", q: "Gịnị mere ị ga-eji see eserese usoro ọrụ tupu i nye ya agent?", options: ["Ise eserese na-egosikarị ihe efu, inye agent usoro mebiri emebi na-emekwa ka ọ na-emebi ngwa ngwa", "Iwu chọrọ ya", "Agent enweghị ike ịrụ ọrụ n'enweghị eserese", "Ọ na-eme ka nnwale ahụ dị ogologo"], answer: 0, why: "Buru ụzọ dozie usoro ọrụ ahụ, wee nye ya agent." },
          { objective: "O2", q: "N'ọkwa ike 2 (ịkwado), onye na-anabata ihe ọ bụla?", options: ["Ọ dịghị onye", "Agent ahụ", "Onye na-ere ngwa ahụ", "Mmadụ"], answer: 3, why: "Ọkwa 2 na-akwado ihe maka mmadụ ka ọ nabata." },
          { objective: "O3", q: "Gịnị bụ ọnọdụ mbido (baseline)?", options: ["Atụmatụ kacha dị ọnụ ala", "Otu usoro ọrụ si aga tupu mgbanwe", "Aha agent ahụ", "Akụkọ ikpeazụ"], answer: 1, why: "N'enweghị ọnọdụ mbido, ị pụghị igosi na ihe ka mma." },
          { objective: "O3", q: "Kedu ihe ịtụ ihe ịga nke ọma kacha mma?", options: ["\"Ọ dị ka ọ dị ngwa karịa\"", "\"Ndị ọrụ hụrụ akara ngosi (logo) n'anya\"", "\"Agent ahụ na-arụsi ọrụ ike\"", "\"Oge arịrịọ ọ bụla belatara 30% n'enweghị mperi ọzọ\""], answer: 3, why: "Ọ na-atụ ọsọ na ịdị mma ma tụnyere ya na ọnọdụ mbido." }
        ]
      }
    },
    {
      name: "Isi 2: Iduzi ndị mmadụ na atụmatụ ahụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iduzi ndị mmadụ n'oge mgbanwe",
          minutes: 5,
          goal: "Hazie otu ị ga-esi gwa ndị ọ ga-emetụta okwu, tinye ha aka ma zụọ ha.",
          text: [
            "Ọrụ akpaaka na-agbanwe ọrụ ndị mmadụ, ndị mmadụ na-ahụkwa ya tupu i kwupụta ihe ọ bụla. Tinye ndị na-arụ ọrụ ahụ taa aka site na mbido: ha maara okwu pụrụ iche, ụzọ ha si agbata nsogbu, na ezi ihe egwu. Ha kwesịrị inye aka ise eserese usoro ọrụ ahụ na ịnwale agent ahụ.",
            "Gwa ha okwu n'oge na n'eziokwu: ihe mere ị na-eme nnwale, ihe ga-agbanwe na ihe na-agaghị agbanwe, ihe ga-eme oge a chekwara, na otu ha ga-esi kwuo nchegbu ha. Ọ bụrụ na ị maghị ya, kwuo nke ahụ ma kwuo mgbe ị ga-ama. Ịgbachi nkịtị na-ejupụta n'asịrị.",
            "Hazie nka ọhụrụ: ilele ọrụ agent, ilekọta okwu pụrụ iche, ịhụ mperi AI na ide ezigbo ntụziaka. Debe oge maka ọzụzụ, ma too ndị hụrụ nsogbu; ịhụ mperi agent bụ onyinye, ọ bụghị enweghị nkwụsi ike."
          ],
          steps: ["Depụta ndị ọ ga-emetụta na otu ọ ga-esi emetụta ha.", "Kpọọ ndị na-arụ ọrụ ahụ ka ha nyere aka see eserese ma nwalee.", "Gwa ha ihe mere, ihe ga-agbanwe, ihe na-agaghị agbanwe, na otu ha ga-esi kwuo nchegbu.", "Hazie nka ọhụrụ na oge ọzụzụ.", "Too ndị hụrụ nsogbu."],
          words: [["Njikwa mgbanwe (change management)", "ịhazi otu ndị mmadụ ga-esi si n'ụzọ ochie nke ọrụ gaa n'ụzọ ọhụrụ."], ["Onye metụtara (stakeholder)", "onye ọ bụla mgbanwe na-emetụta ma ọ bụ onye nwere ike imetụta mgbanwe."]],
          slides: [
            { title: "Tinye ndị na-arụ ọrụ ahụ aka", bullets: ["Ha maara okwu pụrụ iche na ihe egwu", "Ha na-enyere aka ise eserese na ịnwale"] },
            { title: "Gwa ha okwu n'oge na n'eziokwu", bullets: ["Ihe mere, ihe ga-agbanwe, ihe na-agaghị agbanwe", "Ihe ga-eme oge a chekwara", "Kwuo mgbe ị maghị ya ugbu a"] },
            { title: "Wuo nka ọhụrụ", bullets: ["Ilele ọrụ agent na okwu pụrụ iche", "Ịhụ mperi AI", "Too ndị hụrụ nsogbu"] }
          ],
          tryIt: "Depụta ndị nnwale gị ga-emetụta. Dee ozi mbụ dị mkpụmkpụ nye ha nke na-akọwa ihe mere, ihe ga-agbanwe na ihe na-agaghị agbanwe, na otu ha ga-esi kwuo nchegbu. Hazie otu nnọkọ ọzụzụ.",
          youCanNow: "ịhazi akụkụ ndị mmadụ nke mgbanwe AI: ntinye aka, okwu eziokwu na ọzụzụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka njikwa mgbanwe gbasara?", options: ["Ịgbanwe ụdị mmemme kọmputa", "Ịgbanwe atụmatụ ego", "Ịkpọpụ ndị mmadụ n'ụzọ ochie nke ọrụ gaa n'ụzọ ọhụrụ", "Ịgbanwe ndị njikwa"], answer: 2, why: "Njikwa mgbanwe gbasara ndị mmadụ, ọ bụghị naanị ngwa." },
            { objective: "O4", q: "Ndị ọrụ na-ajụ ma nnwale ahụ ga-emetụta ọrụ ha, ị makwaghị ya ugbu a. Gịnị ka ị ga-ekwu?", options: ["Kwe nkwa na ọ dịghị ihe ga-agbanwe", "Ekwula ihe ọ bụla ruo ụbọchị 90", "Gwa ha na ọ bụ ihe nzuzo", "Kwuo na ị maghị ya ugbu a na mgbe ị ga-ama"], answer: 3, why: "Azịza eziokwu, ọbụlagodi \"ọ bụghị ugbu a\", na-ewu ntụkwasị obi n'oge mgbanwe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nchịkwa AI dị mfe nke na-arụ ọrụ",
          minutes: 5,
          goal: "Tọọ nchịkwa dị mfe: ndepụta ngwa, onye nwe agent ọ bụla na oge nyocha.",
          text: [
            "Nchịkwa (governance) pụtara ikpebi onye nwere ike ime gịnị na AI, na ilele ma ọ na-arụ ọrụ. Ọ dịghị mkpa ka ọ dị arọ. Bido n'ihe atọ.",
            "Ndepụta ngwa (inventory): ndepụta ngwa AI na agent ọ bụla a na-eji, ihe ọ na-eme, ozi ọ na-emetụ, ọkwa ike ya na onye nwe ya. Ị pụghị ịchịkwa ihe ị maghị na ọ dị, ndị ọrụ na-amalitekarị iji ngwa n'onwe ha.",
            "Obere otu nyocha (maka obere ụlọ ọrụ, mmadụ abụọ ma ọ bụ atọ) na-anabata agent ọhụrụ, na-enyocha ndepụta ihe egwu na akụkọ ihe mberede kwa ọnwa, ma nwee ike ịkwụsịtụ agent ọ bụla. Dee otu mmadụ ga-esi kọọ nsogbu AI na otu ị ga-esi zaa ngwa ngwa. Jụọ onye ndụmọdụ ruru eru maka iwu ọ bụla metụtara ụdị ọrụ gị na ebe ị nọ."
          ],
          steps: ["Mee ndepụta ngwa AI na agent.", "Dee ebumnuche, ozi, ọkwa ike na onye nwe nke ọ bụla.", "Hazie obere otu nyocha.", "Nyochaa ihe egwu na ihe mberede kwa ọnwa; kwe ka a kwụsịtụ agent ọ bụla.", "Kwupụta otu esi akọ nsogbu AI."],
          words: [["Nchịkwa (governance)", "iwu na ọrụ ndị maka ikpebi na ilele otu e si eji ihe."], ["Ndepụta ngwa (inventory)", "ndepụta zuru ezu nke ngwa AI na agent a na-eji."], ["Ihe mberede (incident)", "ihe mere ebe ihe mebiri ma ọ bụ fọrọ nke nta ka ọ mebie."]],
          slides: [
            { title: "Nchịkwa nwere ike ịdị mfe", bullets: ["Onye nwere ike ime gịnị na AI", "Na ilele ma ọ na-arụ ọrụ"] },
            { title: "Bido na ndepụta ngwa", bullets: ["Ngwa AI na agent ọ bụla", "Ebumnuche, ozi, ọkwa ike, onye nwe ya"] },
            { title: "Obere otu nyocha", bullets: ["Ọ na-anabata agent ọhụrụ", "Nyocha ihe egwu na ihe mberede kwa ọnwa", "Ọ nwere ike ịkwụsịtụ agent ọ bụla"] },
            { title: "Mee ka ịkọ nsogbu dị mfe", bullets: ["Otu esi akọ nsogbu AI", "Otu ị ga-esi zaa ngwa ngwa", "Jụọ onye ndụmọdụ maka iwu ụdị ọrụ gị"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Govern function)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Bido ndepụta ngwa AI maka ndị otu gị nwere opekata mpe ahịrị atọ (ngwa, ebumnuche, ozi, ọkwa ike, onye nwe ya). Kpọọ aha ndị ga-anọ n'otu nyocha gị.",
          youCanNow: "ịtọ nchịkwa AI dị mfe nwere ndepụta ngwa, ndị nwe agent na oge nyocha.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ ndepụta ngwa AI?", options: ["Ndepụta ngwa AI na agent ọ bụla a na-eji, ya na ndị nwe ha", "Ụlọ ahịa na-ere AI", "Ọnụọgụ kọmputa", "Ndepụta ndị ọrụ a zụrụ na AI"], answer: 0, why: "Ị pụghị ịchịkwa ihe ị depụtabeghị." },
            { objective: "O5", q: "Ị maghị iwu ndị metụtara agent gị n'ụdị ọrụ gị. Gịnị ka ị ga-eme?", options: ["Jụọ ngwa enyemaka AI ma soro ihe o kwuru", "Jụọ onye ndụmọdụ ruru eru", "Chee na iwu ọ bụla emetụtaghị nnwale", "Detuo atụmatụ ụlọ ọrụ ọzọ"], answer: 1, why: "Iwu dị iche iche dabere n'ụdị ọrụ na ebe, ya mere onye ndụmọdụ ruru eru kwesịrị ikwenye ha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide atụmatụ nnwale ụbọchị 90",
          minutes: 6,
          goal: "Chịkọta atụmatụ nnwale ụbọchị 90 nwere iwu ịga n'ihu ma ọ bụ ịkwụsị.",
          text: [
            "Chịkọta ọrụ gị n'ime atụmatụ peeji abụọ. Ụbọchị 1 ruo 30: ọnọdụ mbido, nhazi, ọzụzụ, agent n'ọkwa 1 ma ọ bụ 2 n'obere akụkụ nke ọrụ ahụ. Ụbọchị 31 ruo 60: rụọ ọrụ, lelee log kwa izu, dozie nsogbu, soro ihe ịtụ ihe. Ụbọchị 61 ruo 90: tụnyere ya na ọnọdụ mbido, gbaa ndị ọrụ ajụjụ ọnụ, wee kpebie.",
            "Dee iwu ịga n'ihu ma ọ bụ ịkwụsị tupu i bido, ka ihe e nwetara kpebie, ọ bụghị ọṅụ: \"Gbasaa ya n'ndị otu niile ma ọ bụrụ na oge arịrịọ ọ bụla belatara opekata mpe pasent 25, mperi abawanyeghị, ọ dịghịkwa nnukwu ihe mberede mere. Ma ọ bụghị ya, kwụsị ma ọ bụ hazigharịa ya.\" Tinye iwu ịkwụsị maka nnukwu ihe mberede n'oge ọ bụla.",
            "Jiri ngwa enyemaka AI mee ka ndetu gị bụrụ ihe mbụ dị ọcha, wee dezie ya n'onwe gị. Gosi ya n'ime nkeji ise: nsogbu ahụ, usoro ọrụ ahụ, agent ahụ na ókè ya, ihe ịtụ ihe, ihe egwu, atụmatụ ndị mmadụ, na iwu mkpebi ahụ."
          ],
          steps: ["Ụbọchị 1-30: ọnọdụ mbido, nhazi, ọzụzụ, obere mbido.", "Ụbọchị 31-60: rụọ ọrụ, lelee log kwa izu, dozie, tụọ ihe.", "Ụbọchị 61-90: tụnyere, gbaa ndị ọrụ ajụjụ ọnụ, kpebie.", "Buru ụzọ dee iwu ịga n'ihu ma ọ bụ ịkwụsị na iwu ịkwụsị.", "Jiri AI dee ihe mbụ, dezie ya n'onwe gị, gosi ya n'ime nkeji ise."],
          words: [["Iwu ịga n'ihu ma ọ bụ ịkwụsị (go or no-go rule)", "iwu mkpebi, e dere tupu oge eruo, maka ma a ga-aga n'ihu."], ["Iwu ịkwụsị (stop rule)", "ọnọdụ na-akwụsịtụ nnwale ahụ ozugbo, dị ka nnukwu ihe mberede."]],
          slides: [
            { title: "Akụkụ atọ", bullets: ["Ụbọchị 1-30: ọnọdụ mbido, nhazi, obere mbido", "Ụbọchị 31-60: rụọ ọrụ, lelee, dozie", "Ụbọchị 61-90: tụnyere, gbaa ajụjụ ọnụ, kpebie"] },
            { title: "Buru ụzọ kpebie iwu ahụ", bullets: ["Gaa n'ihu ma ihe ịtụ ihe ruru, ọ dịghịkwa nnukwu ihe mberede", "Ma ọ bụghị ya, kwụsị ma ọ bụ hazigharịa", "Iwu ịkwụsị maka nnukwu ihe mberede"] },
            { title: "Gosi ya n'ime nkeji ise", bullets: ["Nsogbu, usoro ọrụ, agent na ókè ya", "Ihe ịtụ ihe, ihe egwu, atụmatụ ndị mmadụ", "Iwu mkpebi ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nnwale ụbọchị 90 gị, peeji abụọ, nwere eserese usoro ọrụ, ọkwa ike na nnabata, onye nwe ya, ọnọdụ mbido na ihe ịtụ ihe, ndepụta ihe egwu, atụmatụ ndị mmadụ, na iwu ịga n'ihu ma ọ bụ ịkwụsị. Gosi onye ọrụ ibe gị ya n'ime nkeji ise ma dee ajụjụ abụọ kacha sie ike ọ jụrụ.",
          youCanNow: "iduzi nnwale AI agent site n'echiche ruo n'atụmatụ nwere ihe ịtụ ihe doro anya, ihe nchekwa na iwu mkpebi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ iwu ịga n'ihu ma ọ bụ ịkwụsị?", options: ["Iwu maka mgbe ndị ọrụ nwere ike iji AI", "Oge agent ahụ na-amalite kwa ụbọchị", "Iwu e dere tupu oge eruo nke na-ekpebi ma a ga-agbasa, gbanwee ma ọ bụ kwụsị n'ụbọchị 90", "Ndepụta ngwa a machibidoro"], answer: 2, why: "Ibu ụzọ dee iwu ahụ na-eme ka mkpebi ụbọchị 90 bụrụ eziokwu." },
            { objective: "O6", q: "Onye ọrụ ibe gị jụrụ ajụjụ siri ike gbasara atụmatụ gị nke ị na-enweghị ike ịza. Gịnị ka ị ga-eme?", options: ["Dee ya ma tinye azịza ya ma ọ bụ nzọụkwụ ọzọ n'atụmatụ ahụ", "Gbanwee isiokwu", "Wepụ akụkụ ahụ n'atụmatụ", "Kwuo na AI ga-elekọta ya"], answer: 0, why: "Ajụjụ siri ike na-egosi ebe atụmatụ ahụ chọrọ ọrụ tupu nnwale amalite." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iduzi ndị mmadụ na atụmatụ ahụ",
        questions: [
          { objective: "O4", q: "Onye kwesịrị inye aka ise eserese usoro ọrụ na ịnwale agent ahụ?", options: ["Naanị onye na-ere ngwa", "Naanị ndị isi kachasị elu", "Ndị na-arụ ọrụ ahụ taa", "Ọ dịghị onye"], answer: 2, why: "Ha maara okwu pụrụ iche na ezi ihe egwu." },
          { objective: "O4", q: "Ị maghị ugbu a otu nnwale ahụ ga-esi metụta ọrụ ndị mmadụ. Gịnị ka ị kwesịrị ikwu?", options: ["Na ị maghị ya ugbu a na mgbe ị ga-ama", "Na ọ dịghị ihe ga-agbanwe mgbe ọ bụla", "Ọ dịghị ihe ruo mgbe ọ gwụrụ", "Na onye ọ bụla ga-atụfu ọrụ ya"], answer: 0, why: "Eziokwu gbasara ihe a maghị na-egbochi asịrị." },
          { objective: "O5", q: "Gịnị bụ ndepụta ngwa AI?", options: ["Ndepụta ihe a ga-azụ n'ahịa", "Ndepụta ngwa AI na agent ọ bụla a na-eji, ya na ndị nwe ha", "Ndepụta ndị ọrụ", "Atụmatụ ego"], answer: 1, why: "Ị pụghị ịchịkwa ihe ị maghị na ọ dị." },
          { objective: "O6", q: "Olee mgbe a ga-ede iwu ịga n'ihu ma ọ bụ ịkwụsị?", options: ["Tupu nnwale ahụ amalite", "Mgbe ihe e nwetara bịarutere", "Ọ dịghị mgbe", "Naanị ma nnwale ahụ dara"], answer: 0, why: "Ibu ụzọ dee ya na-eme ka ihe e nwetara, ọ bụghị ọṅụ, kpebie." },
          { objective: "O6", q: "Nnukwu ihe mberede gbasara ozi nzuzo mere n'ụbọchị 40. Gịnị ka atụmatụ ahụ kwesịrị ikwu?", options: ["Gaa n'ihu ruo ụbọchị 90", "Bulie ọkwa ike agent ahụ", "Zoo ya", "Kwụsịtụ ozugbo n'okpuru iwu ịkwụsị"], answer: 3, why: "Iwu ịkwụsị na-arụ ọrụ n'oge ọ bụla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ndu n'Oge AI Agent 3: AI Agent, Ime Ka Ọrụ Na-arụ Onwe Ya, na Iduzi Mgbanwe",
    questions: [
      { objective: "O1", q: "Ezigbo nhọrọ mbụ maka ọrụ akpaaka bụ:", options: ["Nke anaghị eme ọtụtụ mgbe ma siri ike", "Nke na-eme ọtụtụ mgbe, nwere nzọụkwụ doro anya, nwee obere mmerụ ma ọ mehie", "Nke gbasara ịchụ ndị mmadụ n'ọrụ", "Nke gbasara ịkwụ nnukwu ego"], answer: 1, why: "Ọrụ dị mfe, na-eme ọtụtụ mgbe, nwee obere mmerụ bụ mbido enweghị nsogbu." },
      { objective: "O1", q: "Eserese usoro ọrụ na-egosi:", options: ["Naanị usoro ọkwa ndị ọrụ", "Eserese ime ụlọ ọfịs", "Nzọụkwụ ọ bụla, onye na-eme ya, ngwa na oge", "Ụgwọ ọnwa"], answer: 2, why: "Eserese na-egosi otu esi arụ ọrụ taa." },
      { objective: "O1", q: "Inye agent usoro ọrụ mebiri emebi:", options: ["Na-eme ka ọ bụrụ n'efu", "Na-edozi ya n'onwe ya", "Na-eme ka ọ na-emebi ngwa ngwa", "Na-ewepụ ihe egwu niile"], answer: 2, why: "Buru ụzọ dozie usoro ọrụ ahụ." },
      { objective: "O1", q: "Ihe ise e ji atụ akara gụnyere:", options: ["Ọnụọgụ ọrụ, nzọụkwụ doro anya, ozi dijitalụ, nsogbu, obere mmerụ", "Agba, nha, aha ngwaahịa", "Naanị ego", "Ọ bụrụ na ndị mmadụ hụrụ ya n'anya"], answer: 0, why: "Ha na-egosi ezigbo nnwale mbụ." },
      { objective: "O2", q: "Ọkwa ike 1 (ịtụ aro) pụtara:", options: ["E jighị AI ọ bụla", "Agent na-eme ihe n'onwe ya", "Agent na-anabata ndị mmadụ", "Agent na-ede ihe mbụ; ndị mmadụ na-eme ihe niile"], answer: 3, why: "Ọ na-atụ naanị aro." },
      { objective: "O2", q: "Ọkwa 3 (ime ihe na nlele) na-ezigara ndị mmadụ gịnị?", options: ["Ọ dịghị ihe", "Okwu pụrụ iche, tinyere ụfọdụ ihe maka nlele", "Naanị akwụkwọ ụgwọ", "Naanị otuto"], answer: 1, why: "Okwu nkịtị na-aga n'ihu; okwu pụrụ iche na-aga n'aka ndị mmadụ." },
      { objective: "O2", q: "Nnwale kwesịrị ibidokarị na:", options: ["Ọkwa kacha elu dị", "Ọkwa 4", "Ọ dịghị ọkwa", "Ọkwa 1 ma ọ bụ 2"], answer: 3, why: "Bido n'ala ma nweta ntụkwasị obi." },
      { objective: "O2", q: "Mmadụ kwesịrị ịnabata mgbe niile tupu agent:", options: ["Agụọ okwu", "Agụọ peeji ọha", "Emefuo ego ma ọ bụ gwa ndị ahịa okwu", "Hazie tebụl"], answer: 2, why: "Ihe ndị a nwere ezi nsonaazụ." },
      { objective: "O2", q: "Onye nwe agent:", options: ["Nwe ihe ọ na-arụpụta, na-elele log ya ma nwee ike ịgbanyụ ya", "Bụ onye na-ere ngwa AI ahụ", "Ọ dịghị mkpa", "Bụ agent ahụ n'onwe ya"], answer: 0, why: "Agent ọ bụla chọrọ onye ga-aza ajụjụ maka ya." },
      { objective: "O3", q: "Ihe ịtụ ihe ịga nke ọma kwesịrị ịgụnye:", options: ["Naanị ọsọ", "Ịdị mma, ọ bụghị naanị ọsọ", "Naanị ego", "Naanị echiche ndị ọrụ"], answer: 1, why: "Ọsọ karịa ma njọ karịa abụghị ihe ịga nke ọma." },
      { objective: "O3", q: "Kedu nke bụ ụgwọ zoro ezo nke agent?", options: ["Oge e ji elele ma dozie ọrụ ya", "Ụgwọ ụlọ ọfịs", "Kọfị", "Ebe a na-adọba ụgbọala"], answer: 0, why: "Oge nlele na ndozi na-ebelata ihe a chekwara." },
      { objective: "O3", q: "Ndepụta ihe egwu na-edepụta ihe egwu ọ bụla ya na:", options: ["Ọ dịghị ihe ọzọ", "Njakịrị", "Naanị ego ọ ga-efu", "Ohere ọ ga-eme, njọ ya, ihe nchekwa na onye nwe ya"], answer: 3, why: "Nke ahụ na-eme ka e nwee ike ijikwa ihe egwu." },
      { objective: "O3", q: "Vendor lock-in pụtara:", options: ["Ọfịs a kpọchiri akpọchi", "Ịrapara n'otu onye na-ere ngwa n'ihi na ịgbanwe siri ike", "Okwuntughe", "Mbelata ọnụahịa"], answer: 1, why: "Ọ bụ ihe egwu dị mkpa a ga-edepụta." },
      { objective: "O5", q: "Ọrụ anọ nke NIST AI RMF bụ:", options: ["Buy, Build, Run, Sell", "Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Hire, Train, Promote, Retire"], answer: 2, why: "NIST na-akpọ aha anọ ndị ahụ." },
      { objective: "O4", q: "Njikwa mgbanwe gbasara:", options: ["Ịgbanwe okwuntughe", "Ịgụ mkpụrụ ego", "Ịkpọpụ ndị mmadụ n'ụzọ ochie nke ọrụ gaa n'ụzọ ọhụrụ", "Ịzụta mmemme kọmputa"], answer: 2, why: "Ọ bụ akụkụ ndị mmadụ nke mgbanwe." },
      { objective: "O4", q: "Onye ọrụ hụrụ mperi agent. Ndị isi kwesịrị:", options: ["Ịmata ya dị ka onyinye", "Ịhụ ya dị ka enweghị nkwụsi ike", "Ileghara ya anya", "Izo ya"], answer: 0, why: "Ịhụ nsogbu na-eme ka nnwale ahụ nọrọ n'udo." },
      { objective: "O5", q: "Nchịkwa AI nwere ike ibido na:", options: ["Ọ dịghị ihe", "Akwụkwọ ntuziaka peeji 200", "Imachibido ngwa niile", "Ndepụta ngwa, ndị nwe agent na obere otu nyocha"], answer: 3, why: "Nchịkwa dị mfe zuru ezu maka mbido." },
      { objective: "O5", q: "Onye nwere ike ịkwụsịtụ agent n'okpuru ezigbo nchịkwa?", options: ["Ọ dịghị onye", "Otu nyocha ma ọ bụ onye nwe ya", "Naanị onye na-ere ngwa", "Naanị agent ahụ"], answer: 1, why: "Mmadụ ga-enwerịrị ike ịkwụsị ya mgbe niile." },
      { objective: "O5", q: "Maka iwu metụtara ụdị ọrụ gị na ebe ị nọ, ị kwesịrị:", options: ["Idetuo iwu mba ọzọ", "Ịrịọ AI ka o kpebie", "Iche na ọ dịghị nke metụtara gị", "Ịjụ onye ndụmọdụ ruru eru"], answer: 3, why: "Ajụjụ gbasara iwu chọrọ ndụmọdụ onye ruru eru." },
      { objective: "O6", q: "Ụbọchị 61 ruo 90 nke nnwale ahụ bụ maka:", options: ["Ịzụtakwu ngwa", "Ịmalite nhazi", "Ịtụnyere ya na ọnọdụ mbido, ịgba ndị ọrụ ajụjụ ọnụ na ikpebi", "Ịhapụ nyocha"], answer: 2, why: "Akụkụ ikpeazụ na-ewepụta mkpebi ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 2, 4, 7, 9, 11, 14, 16, 17, 19]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Eserese usoro ọrụ", objective: "O1", notYet: "Nzọụkwụ dị ugbu a ma ọ bụ oge ha adịghị n'ime ya.", meets: "Ọ na-egosi nzọụkwụ dị ugbu a, onye na-eme ha na oge ha na-ewe.", exceeds: "Ọ na-edekọ ihe efu a hụrụ mgbe a na-ese eserese na ihe mere usoro ọrụ a ji nweta akara dị mma." },
      { name: "Ókè ike na nnabata", objective: "O2", notYet: "Ọ dịghị ọkwa ike, ebe nnabata ma ọ bụ onye ga-aza ajụjụ.", meets: "Ọ na-ekwu ọrụ agent ahụ, ọkwa ike ya, ebe ọ bụla mmadụ ga-anabata ihe na onye ga-aza ajụjụ.", exceeds: "Ọ na-akọwa ihe mere ọkwa ahụ ji dabara nnwale mbụ." },
      { name: "Ihe ịtụ ihe na ihe egwu", objective: "O3", notYet: "Ọ dịghị ọnọdụ mbido, ma ọ bụ ihe egwu erughị ise.", meets: "Ọnọdụ mbido na ihe ịtụ ihe ịga nke ọma, na ndepụta ihe egwu nwere opekata mpe ihe egwu ise.", exceeds: "Ihe egwu ọ bụla nwere ihe nchekwa na onye nwe ya, ihe ịtụ ihe gụnyekwara ịdị mma." },
      { name: "Atụmatụ ndị mmadụ", objective: "O4", notYet: "Ọ naghị ekwu onye ọ ga-emetụta ma ọ bụ otu a ga-esi gwa ha ma zụọ ha.", meets: "Ọ na-akpọ aha ndị ọ ga-emetụta na otu ị ga-esi gwa ha okwu ma zụọ ha.", exceeds: "Ọ na-etinye ndị ọrụ aka n'ise eserese na ịnwale, ma na-ekwu otu ha ga-esi kwuo nchegbu." },
      { name: "Iwu ịga n'ihu ma ọ bụ ịkwụsị", objective: "O6", notYet: "Ọ dịghị iwu, ma ọ bụ iwu a na-enweghị ike ịtụ.", meets: "Iwu ịga n'ihu ma ọ bụ ịkwụsị doro anya maka ụbọchị 90, e dere tupu mbido.", exceeds: "Ọ gụnyere iwu ịkwụsị maka nnukwu ihe mberede n'oge nnwale ahụ." },
      { name: "E gosiri ya ma nwalee ya", objective: "O6", notYet: "E gosighị ya, ma ọ bụ e dekọghị ajụjụ.", meets: "E gosiri ya n'ime nkeji ise, e dekọkwara ajụjụ abụọ kacha sie ike onye ọrụ ibe ahụ jụrụ.", exceeds: "E melitere atụmatụ ahụ iji zaa ajụjụ ndị ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị isi mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Atụmatụ nnwale e gosiri ndị bọọdụ, onye nwe ụlọ ọrụ ma ọ bụ ndị isi n'ime ụbọchị 60 (nnyocha nsochi)",
      "Nnwale ndị malitere nwere iwu ịga n'ihu ma ọ bụ ịkwụsị e dere ede na onye nwe agent a kpọrọ aha (nnyocha nsochi)",
      "Ụlọ ọrụ nwere ndepụta ngwa AI na otu nyocha n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ngwa enyemaka AI n'efu maka ide ihe mbụ",
      "Ndepụta usoro ọrụ n'ngalaba gị na ohere ịhụ ndị na-arụ ha",
      "Ụdị atụmatụ peeji abụọ ma ọ bụ akwụkwọ efu",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, tinyere oge ide na igosi atụmatụ ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee ka ndị isi tụọ akara usoro ọrụ ndị ha nwere ike ịhọrọ n'obere otu.",
      "Gbaa ndị isi ume ka ha kpọọ ndị ọrụ na-arụ ọrụ ahụ ka ha nyere aka see eserese usoro ọrụ ahụ.",
      "Chetara ndị isi ka ha ghara itinye ozi nzuzo ma ọ bụ ozi ụlọ ọrụ ezoro ezo na ngwa AI mgbe ha na-ede, na ka ha jụọ onye ndụmọdụ ruru eru maka iwu.",
      "Mee nnọkọ ngosi ebe ndị ibe na-ajụ ajụjụ abụọ kacha sie ike.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma lelee na e dere iwu ịga n'ihu ma ọ bụ ịkwụsị tupu ụbọchị mbido."
    ]
  }
};

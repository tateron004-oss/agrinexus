"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-intro-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-intro-ai-ig",
  lang: "ig",
  translationOf: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Mmalite AI maka Ndị Na-azụ Ahịa",
  skills: "Ịhụ ọrụ azụmahịa AI nwere ike inyere aka, Ide prompt azụmahịa, Ime ka ihe mbụ ka mma, Ịlele eziokwu na nọmba, Ichebe ozi azụmahịa na nke ndị ahịa",
  outcome: "ịhọrọ otu ezi ọrụ n'azụmahịa gị, iji ngwa enyemaka AI n'efu dee ihe mbụ (draft) ya, ime ka ihe ọ dere ka mma ma lelee ya, na idebe ozi ndị ahịa na ozi ego n'èzí mkparịta ụka ahụ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-amalite ma ọ bụ na-eto obere azụmahịa: ụgbọala na-ere nri, ọrụ nhicha, ụlọ isi (salon), ụlọ ahịa n'ịntanetị, ọrụ ndụmọdụ ma ọ bụ obere ọrụ n'akụkụ (side hustle) ị chọrọ ka o too.",
    "Ị ga-amụta ihe ngwa enyemaka AI nwere ike imere onye nwe azụmahịa, otu esi achọta ọrụ n'izu gị AI nwere ike ime ka ọ dị ngwa, otu esi ede prompt azụmahịa doro anya, otu esi eme ka ihe AI nyere gị ka mma ma lelee ya, na otu esi echebe ozi ndị ahịa gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" site n'iji azụmahịa nke gị. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ezi ọrụ site n'azụmahịa gị (dịka ọmụmaatụ ndepụta ọnụahịa, ozi email nnabata maka ndị ahịa ọhụrụ, ma ọ bụ ozi soshal midia kwa izu). Jiri ngwa enyemaka AI n'efu dee ihe mbụ ya site na prompt azụmahịa nwere akụkụ atọ, rịọ maka mgbanwe abụọ, lelee eziokwu na nọmba ọ bụla n'onwe gị, wepụ ozi nzuzo ndị ahịa ma ọ bụ ozi ego ọ bụla, ma chekwaa nke ikpeazụ ka ọ dị njikere iji.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-amalite ma ọ bụ na-eto obere azụmahịa, dị ka ụgbọala na-ere nri, ọrụ nhicha, ụlọ isi, ụlọ ahịa n'ịntanetị, ọrụ ndụmọdụ ma ọ bụ obere ọrụ n'akụkụ. Ọtụtụ n'ime ha na-arụ ọrụ niile dị n'azụmahịa ahụ n'onwe ha.",
    startingPoint: "Ha na-eji aka ha arụ ọrụ azụmahịa ha, ma na-eji ekwentị ma ọ bụ kọmputa kwa ụbọchị. Ọtụtụ anụla maka ngwa enyemaka AI mana ha ejibeghị otu maka ọrụ azụmahịa, ma ọ bụ nwaa otu n'enweghị usoro doro anya.",
    gap: "Ndị nwe azụmahịa na-atụfu ọtụtụ awa kwa izu n'ide ihe na ime atụmatụ nke ngwa enyemaka AI nwere ike ide ihe mbụ ya n'ime nkeji ole na ole. Ọ bụrụ na e jiri AI n'akpachaghị anya, ọ nwere ike itinye ọnụahịa ezighi ezi, okwu ụgha ma ọ bụ ozi nzuzo ndị ahịa n'aha azụmahịa ahụ. Ndị nwe azụmahịa chọrọ ụzọ dị nchebe ha nwere ike ịmeghachi iji AI dee ihe azụmahịa, mee ka ọ ka mma ma lelee ya.",
    constraints: [
      "Okwu dị mfe; ọ dịghị mkpa ka ị mara ihe gbasara teknụzụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, nke dabara n'oge ị na-arụ azụmahịa gị",
      "Okwu mgbasa ozi ga-abụrịrị eziokwu, nwee ihe akaebe; ajụjụ gbasara ụtụ isi na ikike azụmahịa (license) na-aga n'isi iyi gọọmentị ma ọ bụ n'aka onye ọkachamara",
      "Enweghị nọmba kaadị ndị ahịa, ozi ụlọ akụ ma ọ bụ ozi nzuzo ọzọ n'ime prompt ọ bụla"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'okwu nke gị", action: "ịkọwa ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike ime maka azụmahịa", standard: "gụnyere ihe mere onye nwe azụmahịa ji elele ihe niile tupu ọ pụọ" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta ọrụ iri site n'izu gị", action: "ikewa ọrụ azụmahịa gị kwa izu n'ọrụ AI nwere ike ide ihe mbụ ya, ọrụ AI na-enyere gị aka iche echiche, na ọrụ ị ga-edebere onwe gị", standard: "ma họrọ otu ọrụ mbụ dị nchebe ma baa uru maka AI" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ ị họrọrọ", action: "ide prompt azụmahịa nwere ọrụ, ọnọdụ (context) na ụdị azịza (format)", standard: "nke mere na ihe mbụ ọ dere ga-adị nso ịdị njikere iji" },
    { id: "O4", condition: "Mgbe e nyere gị ihe mbụ AI dere", action: "ịjụ ajụjụ nsochi, otu n'otu oge, ma tinye ezi ozi nke gị", standard: "ruo mgbe ọ dị ka azụmahịa gị, n'ime ajụjụ nsochi atọ ma ọ bụ ole na-erughị ya" },
    { id: "O5", condition: "Mgbe e nyere gị ihe e mere ka ọ ka mma", action: "ịlele eziokwu, nọmba na okwu nkwupụta ọ bụla n'ihe ndekọ gị ma ọ bụ n'isi iyi gọọmentị", standard: "ma wepụ okwu nkwupụta ọ bụla ị na-enweghị ike igosi na ọ bụ eziokwu" },
    { id: "O6", condition: "Mgbe ọ bụla ị na-eji AI maka azụmahịa", action: "idebe ozi nzuzo ndị ahịa na ozi ego n'èzí prompt ma hụ aghụghọ gbasara ịkwụ ụgwọ", standard: "site n'iji ihe nnọchi na ikesaghị nọmba kaadị, ụlọ akụ ma ọ bụ akaụntụ ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe AI nwere ike imere azụmahịa gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe AI bụ, n'okwu azụmahịa",
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị ihe ngwa enyemaka AI nwere ike ime na ihe ọ na-enweghị ike ime maka azụmahịa.",
          text: [
            "Ngwa enyemaka AI bụ mmemme kọmputa ị nwere ike ide ihe na ya ma ọ bụ gwa ya okwu n'asụsụ nkịtị. Ndị a ma ama na-akwụghị ụgwọ gụnyere ChatGPT, Microsoft Copilot na Google Gemini. Ị rịọ ihe, ọ dee ihe mbụ (draft) n'ime sekọnd ole na ole.",
            "Maka onye nwe azụmahịa, were ya dị ka onye enyemaka na-ede ihe mbụ ngwa ngwa. Ọ maara ide email, ozi soshal midia na nkọwa ngwaahịa, ime ka ndetu ghọọ atụmatụ, ịchịkọta akwụkwọ ogologo, ịtụpụta aha na echiche, na ịkọwa okwu azụmahịa ị na-amaghị.",
            "Ọ bụghị onye na-edekọ ego gị (accountant), ọkàiwu gị ma ọ bụ onye ahịa gị. Ọ maghị ọnụahịa gị, ndị ahịa gị ma ọ bụ iwu obodo gị ma ọ bụrụ na ị gwaghị ya, ọ nwekwara ike ime mperi ma dị ka o ji n'aka. Gị bụ onye nwe ya: gị na-ekpebi ihe na-apụ n'aha azụmahịa gị."
          ],
          words: [["Ngwa enyemaka AI", "mmemme kọmputa ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu, nke na-ede azịza na ihe mbụ."], ["Ihe mbụ (first draft)", "ụdị mbụ nke ihe ị ga-elele ma mee ka ọ ka mma tupu i jiri ya."]],
          slides: [
            { title: "AI maka azụmahịa = onye enyemaka ihe mbụ ngwa ngwa", bullets: ["Ị na-arịọ n'okwu nkịtị", "Ọ na-ede ihe mbụ n'ime sekọnd ole na ole", "Ndị n'efu: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Ihe ọ maara ime nke ọma", bullets: ["Email, ozi soshal midia, nkọwa ngwaahịa", "Ime ka ndetu ghọọ atụmatụ", "Nchịkọta na ịtụpụta echiche"] },
            { title: "Ọ BỤGHỊ", bullets: ["Onye na-edekọ ego gị ma ọ bụ ọkàiwu gị", "Onye maara ọnụahịa gị ma ọ bụ ndị ahịa gị ma ọ bụrụ na ị gwaghị ya", "Onye na-eziri ezi mgbe niile, ọbụlagodi mgbe o ji n'aka"] }
          ],
          tryIt: "Dee ihe atọ i mere maka azụmahịa gị n'izu gara aga nke gụnyere ide ihe, ime atụmatụ ma ọ bụ ịkọwa ihe. Gbaa gburugburu nke weere gị oge kacha ogologo.",
          youCanNow: "ikwu ihe ngwa enyemaka AI nwere ike imere azụmahịa, na ihe mere i ji ka na-elele ihe niile tupu ọ pụọ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ngwa enyemaka AI chọrọ n'aka gị iji dee ihe gbasara azụmahịa gị?", options: ["Ezi ọnụahịa gị, oge ị na-emeghe na ozi ndị ọzọ", "Ọ dịghị ihe; ọ maraworị azụmahịa gị", "Okwuntughe ụlọ akụ gị", "Atụmatụ ị na-akwụ ụgwọ"], answer: 0, why: "AI amaghị azụmahịa gị ma ọ bụrụ na ị gwaghị ya." },
            { objective: "O1", q: "AI dere akwụkwọ mgbasa ozi (flyer) maka ụlọ isi gị. Gịnị ka ị ga-eme tupu i bipụta ya?", options: ["Bipụta ya ozugbo", "Gụọ ya ma lelee ya, n'ihi na ọ na-apụ n'aha gị", "Hapụ AI ka o bipụta ya", "Buru ụzọ zigara ndị ahịa ya"], answer: 1, why: "Onye nwe azụmahịa na-aza maka ihe ọ bụla nwere aha azụmahịa ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta ọrụ AI nwere ike ime ka ọ dị ngwa",
          minutes: 5,
          goal: "Depụta ọrụ n'izu gị dabara maka AI, na ndị na-adabaghị.",
          text: [
            "Ọrụ mbụ kacha mma maka AI bụ ndị ị na-emeghachi, ndị gbasara okwu, na ndị mperi dị mfe ịhụ tupu onye ọ bụla ahụ ya. Ọmụmaatụ: ịza ajụjụ ndị ahịa na-ajụkarị, ide ozi kwa izu, ide akwụkwọ mgbasa ozi, ime ndepụta nlele maka onye enyemaka ọhụrụ, ma ọ bụ ịchịkọta email ogologo onye na-ebubata gị ngwaahịa (supplier).",
            "Ọrụ ndị NA-ADABAGHỊ inye naanị AI: ihe ọ bụla na-eziga ego, na-abịanye aka na nkwekọrịta, na-ekpebi ihe gbasara iwu ma ọ bụ ụtụ isi, ma ọ bụ na-ekwe onye ahịa nkwa n'agụbeghị ya. AI nwere ike inyere gị aka ịkwado, mana gị na-eme mkpebi ikpeazụ.",
            "Ụzọ dị mfe isi kewaa ha: dee ọrụ ọ bụla n'ahịrị, wee kaa ya akara \"AI na-ede ihe mbụ, m na-elele\", \"AI na-enyere m aka iche echiche\" ma ọ bụ \"M na-eme ya n'onwe m\"."
          ],
          steps: ["Depụta ọrụ iri i mere n'izu abụọ gara aga.", "Kaa nke ọ bụla akara: AI na-ede ihe mbụ / AI na-enyere m aka iche echiche / M na-eme ya n'onwe m.", "Họrọ ọrụ \"AI na-ede ihe mbụ\" nke na-ewe gị oge kacha ukwuu.", "Nke ahụ bụ ọrụ AI mbụ gị."],
          words: [["Ọrụ a na-emeghachi", "ọrụ ị na-eme ugboro ugboro, dị ka ịza otu ajụjụ onye ahịa ahụ."]],
          slides: [
            { title: "Ọrụ mbụ dabara maka AI", bullets: ["Ị na-emeghachi ha", "Ha bụ kachasị okwu", "Mperi dị mfe ịhụ tupu onye ọ bụla ahụ ya"] },
            { title: "Ọmụmaatụ", bullets: ["Azịza ajụjụ ndị ahịa na-ajụkarị", "Ozi soshal midia kwa izu ma ọ bụ akwụkwọ mgbasa ozi", "Ndepụta nlele maka onye enyemaka ọhụrụ"] },
            { title: "Debere onwe gị ndị a", bullets: ["Iziga ego", "Ịbịanye aka na nkwekọrịta, mkpebi ụtụ isi na iwu", "Nkwa ndị ahịa ị gụbeghị"] },
            { title: "Kewaa ọrụ gị", bullets: ["AI na-ede ihe mbụ, m na-elele", "AI na-enyere m aka iche echiche", "M na-eme ya n'onwe m"] }
          ],
          tryIt: "Mee ndepụta ọrụ iri gị ma kewaa ha n'otu atọ ahụ. Họrọ otu ọrụ \"AI na-ede ihe mbụ, m na-elele\" ị ga-eji maka ihe ọmụmụ a niile fọdụrụ.",
          youCanNow: "ikewa ọrụ azụmahịa gị ma họrọ otu ọrụ mbụ dị nchebe ma baa uru maka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-eme ka ọrụ bụrụ ọrụ mbụ dabara maka AI?", options: ["Ọ na-eziga ego", "Ọ chọrọ mbịanye aka", "Ị na-emeghachi ya, ọ bụ kachasị okwu, ọ dịkwa mfe ilele", "O nwere ozi nzuzo ndị ahịa"], answer: 2, why: "Ọrụ ide ihe a na-emeghachi nke ị nwere ike ilele n'ụzọ dị mfe bụ mmeri dị nchebe." },
            { objective: "O2", q: "Otu ọrụ na ndepụta gị bụ ikwado ịkwụ onye na-ebubata gị ngwaahịa ụgwọ. Olee otu ị ga-esi kewaa ya?", options: ["AI na-ede ihe mbụ, m na-elele", "AI na-eme ya naanị ya", "AI na-enyere m aka iche echiche", "M na-edebere onwe m ya"], answer: 3, why: "Mkpebi gbasara ego na-anọ n'aka onye nwe azụmahịa." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide prompt azụmahịa doro anya",
          minutes: 5,
          goal: "Dee prompt azụmahịa nwere akụkụ atọ nke ga-enweta ihe mbụ bara uru na nke mbụ.",
          text: [
            "Ihe ị na-ede nye ngwa enyemaka AI ka a na-akpọ prompt. Prompt azụmahịa na-arụ ọrụ nke ọma ma o nwee akụkụ atọ: ọrụ ahụ, ọnọdụ azụmahịa gị (context), na ụdị azịza ị chọrọ (format).",
            "Ọmụmaatụ: \"Dee obere email nnabata maka ndị ahịa ọhụrụ nke ọrụ nhicha ụlọ m na Atlanta. Anyị na-asa ụlọ kwa izu abụọ, ndị ahịa nwere ike izigara anyị ozi ederede iji gbanwee ụbọchị. Mee ka ọ dị mma n'obi, na-erughị okwu 120, nwee isiokwu doro anya.\"",
            "Prompt na-adịghị ike dị ka \"dee email\" na-eme ka ngwa enyemaka ahụ chepụta ihe. Ọ maghị azụmahịa gị, onye ahịa gị ma ọ bụ ụda okwu gị, ya mere ihe mbụ ya ga-adị n'ozuzu. Etinyela aha ndị ahịa, nọmba ekwentị, nọmba kaadị ma ọ bụ okwuntughe n'ime prompt; ị nwere ike itinye ha n'onwe gị mgbe e mesịrị."
          ],
          steps: ["Ọrụ: kwuo kpọmkwem ihe ị chọrọ ka e dee ma ọ bụ hazie.", "Ọnọdụ: ihe ị na-ere, onye bụ onye ahịa gị, ebe ị nọ, ụda okwu gị.", "Ụdị azịza: ogologo ya, ndepụta ma ọ bụ paragraf, isiokwu, ọkwa ịgụ akwụkwọ.", "Gụọ prompt ahụ maka ozi nzuzo ma wepụ ha tupu i zipu ya."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Ọnọdụ (context)", "eziokwu ndabere AI chọrọ, dị ka ihe ị na-ere na ndị ị na-ere ya."]],
          slides: [
            { title: "Akụkụ atọ nke prompt azụmahịa", bullets: ["1. Ọrụ: ihe ị chọrọ", "2. Ọnọdụ: azụmahịa gị na onye ahịa gị", "3. Ụdị azịza: ogologo, ụdị, nhazi"] },
            { title: "Nke na-adịghị ike na nke doro anya", bullets: ["Nke na-adịghị ike: \"dee email\"", "Nke doro anya: email nnabata, ọrụ nhicha, Atlanta,", "dị mma n'obi, na-erughị okwu 120, nwee isiokwu"] },
            { title: "Etinyela ndị a na prompt", bullets: ["Aha ndị ahịa na nọmba ekwentị ha", "Nọmba kaadị na nke ụlọ akụ", "Okwuntughe"] }
          ],
          tryIt: "Dee prompt nwere akụkụ atọ maka ọrụ ị họrọrọ na Nkuzi 2. Zipu ya na ngwa enyemaka AI n'efu ma chekwaa ihe mbụ ọ dere.",
          youCanNow: "ide prompt azụmahịa nwere ọrụ, ọnọdụ na ụdị azịza, na-etinyeghị ozi nzuzo.",
          quickCheck: [
            { objective: "O3", q: "Kedu akụkụ prompt azụmahịa bụ ụdị azịza (format)?", options: ["\"Na-erughị okwu 100, nwee isiokwu\"", "\"Dee email nnabata\"", "\"Anyị bụ ụlọ ahịa na-edozi anụ ụlọ na Phoenix\"", "\"Daalụ maka enyemaka gị\""], answer: 0, why: "Ụdị azịza na-ekwu otu ị chọrọ ka azịza dị: ogologo, nhazi ma ọ bụ ụdị." },
            { objective: "O3", q: "Prompt gị na-ekwu naanị \"dee ozi\". Gịnị ka ị ga-agbakwunye?", options: ["Ọ dịghị ihe ọzọ", "Azụmahịa gị, ndị ahịa gị, na ogologo na ụdị ị chọrọ", "Ndepụta ndị ahịa gị", "Ego dị n'akaụntụ ụlọ akụ gị"], answer: 1, why: "Ọnọdụ na ụdị azịza na-eme ka arịrịọ na-edoghị anya ghọọ ihe mbụ bara uru." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe AI nwere ike imere azụmahịa gị",
        questions: [
          { objective: "O1", q: "Kedu ụzọ kacha mma isi were ngwa enyemaka AI n'azụmahịa gị?", options: ["Onye na-edekọ ego gị", "Ihe nnọchi maka uche gị", "Onye enyemaka na-ede ihe mbụ ngwa ngwa nke ị na-elele", "Onye ahịa"], answer: 2, why: "AI na-ede ihe mbụ ngwa ngwa, mana gị na-elele ma kpebie ihe na-apụ." },
          { objective: "O2", q: "Kedu ọrụ bụ ọrụ mbụ dabara inye ngwa enyemaka AI?", options: ["Ide ozi soshal midia kwa izu nke ị ga-ebu ụzọ gụọ", "Ịkwụ onye na-ebubata ngwaahịa ụgwọ", "Ịbịanye aka na nkwekọrịta mgbazinye ụlọ", "Ịhọrọ ọnọdụ ụtụ isi gị"], answer: 0, why: "Ị na-emeghachi ya, ọ bụ kachasị okwu, mperi dịkwa mfe ịhụ tupu onye ọ bụla ahụ ya." },
          { objective: "O3", q: "Kedu nke bụ prompt azụmahịa nwere akụkụ atọ?", options: ["\"dee email\"", "\"nyere m aka\"", "\"ihe azụmahịa\"", "\"Email nnabata maka ndị ahịa nhicha ọhụrụ na Atlanta; anyị na-asa kwa izu abụọ; dị mma n'obi, na-erughị okwu 120, nwee isiokwu.\""], answer: 3, why: "O nyere ọrụ ahụ, ọnọdụ azụmahịa na ụdị azịza." },
          { objective: "O6", q: "Gịnị ka ị kwesịrị ịhapụ n'èzí prompt?", options: ["Ụdị azụmahịa gị", "Nọmba kaadị onye ahịa", "Ụda okwu ị chọrọ", "Ogologo ị chọrọ"], answer: 1, why: "Nọmba kaadị na ozi nzuzo ndị ọzọ agaghị abanye na mkparịta ụka AI mgbe ọ bụla." },
          { objective: "O1", q: "Ihe mbụ AI dere nwere aha azụmahịa gị. Onye na-aza maka ya?", options: ["Ụlọ ọrụ AI ahụ", "Gị, onye nwe azụmahịa", "Ọ dịghị onye", "Onye ahịa"], answer: 1, why: "Gị na-ekpebi ihe na-apụ n'aha azụmahịa gị." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI n'ụzọ dị nchebe ma dị mma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka ihe mbụ ka mma site n'ajụjụ nsochi",
          minutes: 4,
          goal: "Mee ka ihe mbụ ghọọ nke ị ga-eji n'ezie, site n'ajụjụ nsochi.",
          text: [
            "Azịza mbụ bụ ihe mbụ (draft). Ngwa enyemaka ahụ na-echeta ozi gara aga n'otu mkparịta ụka ahụ, ya mere ị nwere ike ịrịọ ya ka ọ gbanwee otu ihe n'otu oge.",
            "Ajụjụ nsochi bara uru maka ihe azụmahịa: \"Mee ka ọ dị ka obere azụmahịa obodo.\" \"Belata ya ka ọ bụrụ okwu 80.\" \"Tinye nzọụkwụ ọzọ doro anya maka onye ahịa.\" \"Nye m isiokwu atọ m ga-ahọrọ.\" \"Dee ya n'ọkwa ịgụ dị mfe.\"",
            "Tinye eziokwu ndị naanị gị maara: ezi oge ị na-emeghe, ezi ọnụahịa na ezi iwu azụmahịa gị. Wee gụpụta ya n'olu dị elu. Ọ bụrụ na ọ dịghị ka okwu gị, rịọ maka mgbanwe ma ọ bụ dozie ya n'onwe gị."
          ],
          steps: ["Gụọ ihe mbụ ahụ.", "Họrọ otu ihe ị kacha chọọ ka a gbanwee.", "Rịọ maka mgbanwe ahụ.", "Tinye ezi eziokwu gị.", "Gụpụta ya n'olu dị elu ma meghachi ma ọ dị mkpa."],
          words: [["Ajụjụ nsochi (follow-up)", "arịrịọ nke abụọ n'otu mkparịta ụka ahụ nke na-agbanwe ma ọ bụ na-ewuli elu n'azịza ahụ."], ["Oku ime ihe (call to action)", "nzọụkwụ ọzọ doro anya ị chọrọ ka onye ahịa mee, dị ka \"Zigara anyị ozi ka i debe oge\"."]],
          slides: [
            { title: "Azịza mbụ bụ ihe mbụ (draft)", bullets: ["Rịọ maka otu mgbanwe n'otu oge", "Mkparịta ụka ahụ na-echeta ihe i kwuru"] },
            { title: "Ajụjụ nsochi maka azụmahịa", bullets: ["\"Mee ka ọ dị ka obere azụmahịa obodo.\"", "\"Belata ya ka ọ bụrụ okwu 80.\"", "\"Tinye nzọụkwụ ọzọ doro anya maka onye ahịa.\""] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Tinye ezi oge mmeghe, ọnụahịa na iwu gị", "Gụpụta ya n'olu dị elu", "Dozie ya ruo mgbe ọ dị ka okwu gị"] }
          ],
          tryIt: "Were ihe mbụ i nwetara na Nkuzi 3. Rịọ maka mgbanwe abụọ, otu n'otu oge, wee tinye ezi ozi nke gị. Tụnyere nke mbụ na nke ikpeazụ.",
          youCanNow: "ime ka ihe mbụ AI dere ka mma site n'ajụjụ nsochi ma mee ka ọ dị ka azụmahịa gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ajụjụ nsochi?", options: ["Mkparịta ụka ọhụrụ gbasara ihe ọzọ", "Ncheta ịkwụ ụgwọ", "Arịrịọ nke abụọ n'otu mkparịta ụka ahụ nke na-agbanwe azịza ahụ", "Nlebanya onye ahịa"], answer: 2, why: "Ajụjụ nsochi na-eme ka ihe mbụ i nweburu ka mma." },
            { objective: "O4", q: "Ihe mbụ ahụ dị mma mana ọ dị ogologo nke ukwuu. Gịnị ka ị ga-arịọ ọzọ?", options: ["Malite ọzọ na mkparịta ụka ọhụrụ", "Rịọ maka ụdị ise ọzọ n'otu oge", "Nabata ya otu o si dị", "\"Mee ka ọ dị mkpụmkpụ, na-erughị okwu 80\""], answer: 3, why: "Otu mgbanwe doro anya n'otu oge na-eme ka ihe mbụ ka mma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele eziokwu, nọmba na okwu nkwupụta",
          minutes: 5,
          goal: "Lelee ihe mbụ AI dere maka eziokwu ezighi ezi, nọmba ezighi ezi na nkwa ị na-enweghị ike imezu.",
          text: [
            "AI nwere ike ichepụta ihe: ọnụahịa ị na-esetụbeghị, iwu na-adịghị adị, ngụkọ ezighi ezi, ma ọ bụ okwu dị ka \"nke kacha mma n'obodo\" ị na-enweghị ike igosi. Ichepụta ihe otu a ka a na-akpọ mgbe ụfọdụ hallucination.",
            "Tupu ihe ọ bụla eruo onye ahịa, lelee ihe atọ. Eziokwu: oge mmeghe, ọnụahịa, adreesị, iwu azụmahịa. Nọmba: ngụkọ na pasentị ọ̀ dabara? Gụkọọ ya n'onwe gị ma ọ bụ na spreadsheet. Okwu nkwupụta: ị nwere ike igosi ya? Na United States, FTC kwuru na mgbasa ozi ga-abụrịrị eziokwu, ghara iduhie mmadụ, ma nwee ihe akaebe.",
            "Maka ajụjụ gbasara ụtụ isi, iwu, ikike azụmahịa (license) ma ọ bụ ego, jiri AI naanị ghọta okwu ndị ahụ, wee kwado ya n'isi iyi gọọmentị (nke na-abụkarị saịtị .gov) ma ọ bụ n'aka onye ọkachamara dị ka onye na-edekọ ego ma ọ bụ ọkàiwu."
          ],
          steps: ["Mee ka eziokwu, nọmba na okwu nkwupụta ọ bụla dị n'ihe mbụ ahụ pụta ìhè.", "Lelee eziokwu n'ihe ndekọ gị.", "Gụkọọ ngụkọ ọ bụla ọzọ n'onwe gị.", "Wepụ ma ọ bụ mee ka okwu nkwupụta ọ bụla ị na-enweghị ike igosi dị nro.", "Kwado ihe gbasara ụtụ isi, iwu ma ọ bụ license n'isi iyi gọọmentị ma ọ bụ n'aka onye ọkachamara."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Okwu nkwupụta (claim)", "ihe azụmahịa gị kwuru na ọ bụ eziokwu, dị ka \"ọrụ n'otu ụbọchị ahụ\"."], ["FTC", "Federal Trade Commission, ụlọ ọrụ gọọmentị US na-amanye iwu eziokwu na mgbasa ozi."]],
          slides: [
            { title: "AI nwere ike ichepụta ihe", bullets: ["Ọnụahịa ị na-esetụbeghị", "Iwu na-adịghị adị", "Ngụkọ ezighi ezi"] },
            { title: "Lelee ihe atọ", bullets: ["Eziokwu: oge mmeghe, ọnụahịa, iwu azụmahịa", "Nọmba: gụkọọ ya ọzọ", "Okwu nkwupụta: ị nwere ike igosi ya?"] },
            { title: "Eziokwu na mgbasa ozi", bullets: ["FTC: mgbasa ozi ga-abụ eziokwu, ghara iduhie mmadụ", "Okwu nkwupụta chọrọ ihe akaebe"] },
            { title: "Ụtụ isi, iwu, license", bullets: ["Jiri AI ghọta okwu ndị ahụ", "Kwado ya na saịtị gọọmentị .gov", "Ma ọ bụ jụọ onye na-edekọ ego ma ọ bụ ọkàiwu"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Mee ka eziokwu, nọmba na okwu nkwupụta ọ bụla dị n'ihe i mere ka ọ ka mma pụta ìhè. Lelee nke ọ bụla, dozie ihe ezighi ezi, ma wepụ okwu nkwupụta ọ bụla ị na-enweghị ike igosi.",
          youCanNow: "ịlele ihe mbụ AI dere maka eziokwu ezighi ezi, nọmba ezighi ezi na okwu nkwupụta ị na-enweghị ihe akaebe maka ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination nke AI?", options: ["Ihe dị ka eziokwu mana e chepụtara ya", "Ụdị mgbasa ozi", "Ịntanetị na-aga nwayọọ", "Mkpesa onye ahịa"], answer: 0, why: "AI nwere ike ide eziokwu e chepụtara echepụta nke dị ka o ji n'aka." },
            { objective: "O5", q: "Ihe mbụ ahụ kwuru \"nke mbụ n'obodo\". Ị nweghị ihe akaebe. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dị mma ịnụ", "Wepụ ya ma ọ bụ gbanwee ya ka ọ bụrụ ihe bụ eziokwu", "Tinye \"ikekwe\"", "Jụọ AI ma ọ bụ eziokwu"], answer: 1, why: "Okwu nkwupụta mgbasa ozi ga-abụrịrị eziokwu ma nwee ihe akaebe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi ndị ahịa na ozi azụmahịa",
          minutes: 5,
          goal: "Jiri AI maka ọrụ azụmahịa n'ekesaghị ozi nzuzo ndị ahịa ma ọ bụ ozi ego.",
          text: [
            "Ihe ị na-ede na mkparịta ụka AI nwere ike ịbụ nke ụlọ ọrụ nwe ya na-echekwa, na n'ụfọdụ atụmatụ n'efu, ha nwere ike iji ya mee ka AI ha ka mma. Gụọ ntọala nzuzo (privacy settings) nke ngwa ahụ, ma were ya na onye ọzọ nwere ike ịhụ ihe ọ bụla ị dere.",
            "Edela ihe ndị a na mkparịta ụka AI mgbe ọ bụla: aha ndị ahịa na nọmba ekwentị ma ọ bụ adreesị ha, nọmba kaadị ma ọ bụ ụlọ akụ, okwuntughe, nọmba Social Security ma ọ bụ nọmba ụtụ isi (tax ID), ma ọ bụ ozi nzuzo gbasara ahụike. Jiri ihe nnọchi dị ka \"[aha onye ahịa]\" ma dejupụta ha n'onwe gị mgbe e mesịrị.",
            "Kpachakwara anya maka aghụghọ na-eji AI lekwasị azụmahịa anya: akwụkwọ ụgwọ (invoice) adịgboroja, email na-eṅomi ụdị ide nke onye na-ebubata gị ngwaahịa, na oku n'olu dị ka nke onye ị maara na-arịọ ịkwụ ụgwọ ngwa ngwa. Tupu ị kwụọ ụgwọ, kpọghachi na nọmba ị maralarị na ọ bụ ezi nọmba."
          ],
          steps: ["Tupu i zipu prompt, gụọ ya maka ozi nzuzo.", "Jiri ihe nnọchi dị ka \"[aha onye ahịa]\" dochie ha.", "Lelee ntọala nzuzo ma ọ bụ ntọala data nke ngwa ahụ.", "Kwado arịrịọ ịkwụ ụgwọ ngwa ngwa ọ bụla site n'ịkpọ nọmba ị maralarị."],
          words: [["Ihe nnọchi (placeholder)", "ihe na-anọchi anya dị ka \"[aha onye ahịa]\" nke ị ga-eji ezi ozi dochie mgbe e mesịrị, n'èzí mkparịta ụka AI."], ["Aghụghọ akwụkwọ ụgwọ (invoice scam)", "akwụkwọ ụgwọ adịgboroja e mere ka ọ dị ka nke si n'aka ezi onye na-ebubata ngwaahịa."]],
          slides: [
            { title: "Were ya na onye ọzọ nwere ike ịhụ ya", bullets: ["Enwere ike ichekwa mkparịta ụka", "Atụmatụ n'efu nwere ike iji mkparịta ụka mee ka AI ka mma", "Lelee ntọala nzuzo"] },
            { title: "Edela ihe ndị a na AI mgbe ọ bụla", bullets: ["Nọmba ekwentị na adreesị ndị ahịa", "Nọmba kaadị, ụlọ akụ na tax ID", "Okwuntughe na ozi ahụike"] },
            { title: "Jiri ihe nnọchi", bullets: ["\"[aha onye ahịa]\", \"[ngụkọ ego order]\"", "Dejupụta ezi ozi n'onwe gị mgbe e mesịrị"] },
            { title: "Aghụghọ azụmahịa", bullets: ["Akwụkwọ ụgwọ adịgboroja dị ka ezi ya", "Oku ịkwụ ụgwọ ngwa ngwa n'olu ị maara", "Kpọghachi na nọmba ị maara"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa ọrụ azụmahịa ị họrọrọ. Hụ na prompt na nke ikpeazụ enweghị ozi nzuzo ndị ahịa ma ọ bụ ozi ego, lelee eziokwu, nọmba na okwu nkwupụta ọ bụla, ma chekwaa ya ka ọ dị njikere iji.",
          youCanNow: "iji AI maka ezi ọrụ azụmahịa ma na-echebe ndị ahịa gị, ego gị na aha gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ihe nnọchi (placeholder) na prompt?", options: ["Ezi nọmba ekwentị onye ahịa", "Okwuntughe", "Akara dị ka [aha onye ahịa] kama ezi ozi", "Peeji efu"], answer: 2, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
            { objective: "O6", q: "Ozi si n'aka \"ụlọ akụ\" gị na-arịọ ka ị kwado nọmba akaụntụ gị site n'ịza ya. Gịnị ka ị ga-eme?", options: ["Zaa ya na nọmba ahụ", "Rịọ AI ka ọ zaara gị", "Zigara ndị ahịa ya", "Kpọtụrụ ụlọ akụ ahụ site na nọmba ị maralarị"], answer: 3, why: "Jiri ụzọ ịkpọtụrụ ị tụkwasịrị obi, ọ bụghị nke dị n'ozi na-eme ngwa ngwa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI n'ụzọ dị nchebe ma dị mma",
        questions: [
          { objective: "O4", q: "Ihe mbụ AI dere na-ada ka nke ukwuu (formal) maka obere ụlọ ahịa gị. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o sila dị", "Hichapụ app AI ahụ", "Zigara ọkàiwu ya", "Jụọ: \"Mee ka ọ dị ka obere azụmahịa obodo.\""], answer: 3, why: "Ajụjụ nsochi na-arịọ ngwa enyemaka ahụ ka ọ gbanwee ụda okwu." },
          { objective: "O5", q: "Ihe mbụ AI dere kwuru \"anyị na-emeghe ruo elekere 9 nke abalị\" mana ị na-emechi n'elekere 7. Gịnị ka nke a na-egosi?", options: ["AI nwere ike ichepụta eziokwu, ya mere ị na-elele ha", "AI na-eziri ezi mgbe niile", "Oge mmeghe gị ezighi ezi", "Onye ahịa agaghị ahụ ya"], answer: 0, why: "AI nwere ike ichepụta eziokwu; ị na-elele ha n'ihe ndekọ gị." },
          { objective: "O5", q: "Ihe mbụ ahụ kwuru \"nke kacha ọnụ ala na steeti\". Ị tụnyerebeghị ọnụahịa. Gịnị ka ị kwesịrị ime?", options: ["Hapụ ya, ọ dị mma ịnụ", "Mee ka ọ buo ibu", "Wepụ ya ma ọ bụ gbanwee ya ka ọ bụrụ ihe ị nwere ike igosi", "Tinye \"e kwere nkwa\""], answer: 2, why: "Mgbasa ozi ga-abụrịrị eziokwu ma nwee ihe akaebe." },
          { objective: "O6", q: "Olee otu ị kwesịrị isi tinye aha onye ahịa na prompt AI?", options: ["Dee aha ya zuru ezu na nọmba ekwentị ya", "Dekwa nọmba kaadị ya", "Jụọ onye ahịa okwuntughe ya", "Jiri ihe nnọchi dị ka \"[aha onye ahịa]\""], answer: 3, why: "Ihe nnọchi na-edebe ozi nzuzo n'èzí mkparịta ụka ahụ." },
          { objective: "O6", q: "Oku na-eme ngwa ngwa bịara n'olu onye na-ebubata gị ngwaahịa, na-arịọ ka ị kwụọ ụgwọ n'akaụntụ ọhụrụ taa. Gịnị ka ị ga-eme?", options: ["Kwụọ ụgwọ ozugbo", "Zipu ozi mbanye ụlọ akụ gị", "Kpọghachi onye na-ebubata ngwaahịa ahụ na nọmba ị maralarị", "Zaa ya na koodu dị n'ekwentị gị"], answer: 2, why: "AI nwere ike iṅomi olu; kwado ya na nọmba ị maara tupu ị kwụọ ụgwọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI maka Ndị Na-azụ Ahịa",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma iji ngwa enyemaka AI n'azụmahịa gị bụ dị ka:", options: ["Ọkàiwu gị", "Onye enyemaka na-ede ihe mbụ ngwa ngwa", "Ụlọ akụ gị", "Onye na-eme mkpebi ikpeazụ"], answer: 1, why: "Ọ na-ede ihe mbụ; gị na-elele ma kpebie." },
      { objective: "O1", q: "Kedu nke bụ ngwa enyemaka AI a ma ama n'efu?", options: ["Google Gemini", "Igbe ego (cash register)", "Igwe mbipụta", "Igbe otu n'ime spreadsheet"], answer: 0, why: "Gemini, ChatGPT na Copilot bụ ngwa enyemaka AI a ma ama." },
      { objective: "O1", q: "Kedu n'ime ndị a ka ngwa enyemaka AI AMAGHỊ ma ọ bụrụ na ị gwaghị ya?", options: ["Ihe atụmatụ azụmahịa bụ", "Otu esi ede ndepụta", "Ezi ọnụahịa gị", "Okwu azụmahịa a na-ahụkarị"], answer: 2, why: "Ọ maghị ọnụahịa gị, ndị ahịa gị ma ọ bụ iwu azụmahịa gị ma ọ bụrụ na ị nyeghị ya ha." },
      { objective: "O2", q: "Ọrụ mbụ dabara maka AI bụ ndị:", options: ["A na-emeghachi, bụ kachasị okwu, dịkwa mfe ilele", "Na-eziga ego", "Na-abịanye aka na nkwekọrịta", "Na-ekpebi ọnọdụ ụtụ isi gị"], answer: 0, why: "Ndị a enweghị nnukwu ihe egwu ma na-echekwa oge." },
      { objective: "O2", q: "Kedu ọrụ ị kwesịrị idebere onwe gị?", options: ["Ịtụpụta aha ụlọ ahịa", "Ide akwụkwọ mgbasa ozi", "Ime ndepụta nlele", "Ikwado ịkwụ onye na-ebubata ngwaahịa ụgwọ"], answer: 3, why: "Mkpebi gbasara ego na-anọ n'aka gị." },
      { objective: "O2", q: "Mgbe ị na-ekewa ọrụ, \"AI na-enyere m aka iche echiche\" pụtara:", options: ["AI na-eme mkpebi", "Ị na-eji AI tụpụta echiche ma ọ bụ kọwaa ihe, wee kpebie n'onwe gị", "Ị naghị eji AI mgbe ọ bụla", "AI na-ezipu ya maka gị"], answer: 1, why: "AI na-akwado echiche gị; gị na-ekpebi." },
      { objective: "O3", q: "Akụkụ atọ nke prompt azụmahịa bụ:", options: ["Aha, okwuntughe, adreesị", "Ọrụ, ọnọdụ, ụdị azịza", "Ndewo, biko, daalụ", "Ọnụahịa, ụtụ isi, ngụkọ"], answer: 1, why: "Ọrụ, ọnọdụ na ụdị azịza na-enye AI ihe ọ chọrọ." },
      { objective: "O3", q: "Kedu nke bụ ọnọdụ azụmahịa (context)?", options: ["\"Na-erughị okwu 100\"", "\"Dee email\"", "\"Daalụ\"", "\"Anyị bụ ọrụ nsa ụgbọala na-agagharị na Dallas, na-ejere ndị nne na nna nwere ọrụ buru ibu ozi\""], answer: 3, why: "Ọnọdụ na-akọwa azụmahịa gị na onye ahịa gị." },
      { objective: "O3", q: "Kedu nke bụ ntụziaka ụdị azịza (format)?", options: ["\"Nye m ndepụta isi okwu 5 dị mkpụmkpụ\"", "\"Anyị na-ere achịcha (cake)\"", "\"Ndị ahịa anyị bụ ụmụ akwụkwọ\"", "\"Anyị nọ na Lagos\""], answer: 0, why: "Ụdị azịza na-ekwu otu azịza kwesịrị isi dị." },
      { objective: "O4", q: "Ajụjụ nsochi bụ:", options: ["App ọhụrụ", "Nlebanya onye ahịa", "Arịrịọ nke abụọ n'otu mkparịta ụka ahụ nke na-agbanwe azịza ahụ", "Ụdị akwụkwọ ụgwọ"], answer: 2, why: "Ajụjụ nsochi na-eme ka ihe mbụ ka mma nzọụkwụ n'otu n'otu." },
      { objective: "O4", q: "Kedu ajụjụ nsochi na-agbakwunye oku ime ihe (call to action)?", options: ["\"Mee ka ọ dị ogologo n'enweghị ihe kpatara ya.\"", "\"Wepụ ozi niile.\"", "\"Tinye okwuntughe m.\"", "\"Tinye nzọụkwụ ọzọ doro anya, dị ka Zigara anyị ozi ka i debe oge.\""], answer: 3, why: "Oku ime ihe na-agwa onye ahịa ihe ọ ga-eme ọzọ." },
      { objective: "O4", q: "Gịnị mere ị ga-eji gụpụta ihe mbụ n'olu dị elu?", options: ["Iji mee ka AI dị ngwa", "Iji chekwaa batrị", "Ịlele na ọ dị ka okwu gị", "Iwu chọrọ ya"], answer: 2, why: "Ịnụ ya na-enyere gị aka ịhụ ụda okwu na mperi." },
      { objective: "O5", q: "\"Hallucination\" nke AI bụ:", options: ["Azịza na-abịa nwayọọ", "Ihe dị ka eziokwu mana e chepụtara ya", "Ụdị akara azụmahịa (logo)", "Mkpesa onye ahịa"], answer: 1, why: "AI nwere ike ichepụta eziokwu dị ka ezi ihe." },
      { objective: "O5", q: "AI gbakọrọ ngụkọ ndepụta ọnụahịa gị n'ụzọ ezighi ezi. Gịnị bụ ihe mmụta ya?", options: ["Gụkọọ ya ọzọ n'onwe gị ma ọ bụ na spreadsheet", "Tụkwasị obi na ngụkọ AI", "Bulie ọnụahịa gị", "Kwụsị ire ahịa"], answer: 0, why: "Lelee nọmba mgbe niile tupu i jiri ha." },
      { objective: "O5", q: "Dị ka FTC si kwuo, okwu nkwupụta mgbasa ozi ga-abụrịrị:", options: ["Ihe ọchị", "Nke AI dere", "Eziokwu, nke na-adịghị eduhie mmadụ, nwekwa ihe akaebe", "Mkpụmkpụ"], answer: 2, why: "Iwu eziokwu na mgbasa ozi nke FTC chọrọ nke a." },
      { objective: "O5", q: "Maka ajụjụ gbasara ụtụ isi ma ọ bụ license, ụzọ kacha mma iji AI bụ:", options: ["Ịghọta okwu ndị ahụ tupu ị lelee isi iyi gọọmentị ma ọ bụ onye ọkachamara", "Ime mkpebi ikpeazụ", "Idebanye ya maka gị", "Ịnọchi onye na-edekọ ego gị"], answer: 0, why: "Kwado ihe gbasara ụtụ isi na iwu n'isi iyi gọọmentị ma ọ bụ n'aka ndị ọkachamara." },
      { objective: "O6", q: "Kedu nke AGAGHỊ abanye na mkparịta ụka AI MGBE Ọ BỤLA?", options: ["\"Mee ka ọ dị mma n'obi karịa\"", "Ụdị azụmahịa gị", "Ụda okwu ị chọrọ", "Nọmba kaadị onye ahịa"], answer: 3, why: "Nọmba kaadị bụ ozi ego nzuzo." },
      { objective: "O6", q: "Ihe nnọchi dị ka \"[aha onye ahịa]\" na-ekwe ka ị:", options: ["Zoo ọnụahịa n'anya ndị ahịa", "Nweta enyemaka n'ekesaghị ozi nzuzo", "Ghara ilele ihe", "Kwụọ ụgwọ ngwa ngwa"], answer: 1, why: "Ị na-adejupụta ezi ozi ahụ n'onwe gị mgbe e mesịrị." },
      { objective: "O6", q: "N'ụfọdụ atụmatụ AI n'efu, mkparịta ụka gị nwere ike:", options: ["Ịla n'iyi tupu ị gụọ ha", "Bụrụ nke a na-echekwa ma jiri mee ka AI ka mma", "Bụrụ nke e zigara ndị ahịa gị", "Bụrụ nke e bipụtara"], answer: 1, why: "Ọ bụ ya mere i ji elele ntọala nzuzo ma debe ozi nzuzo n'èzí." },
      { objective: "O6", q: "Email dị ka nke onye na-ebubata gị ngwaahịa na-arịọ ka ị kwụọ ụgwọ n'akaụntụ ụlọ akụ ọhụrụ ngwa ngwa. Nzọụkwụ kacha mma?", options: ["Kwụọ ugbu a", "Zaa ya na ozi mbanye ụlọ akụ gị", "Zigara ndị ahịa gị niile ya", "Kpọọ onye na-ebubata ngwaahịa ahụ na nọmba ị maralarị"], answer: 3, why: "Akwụkwọ ụgwọ adịgboroja juru ebe niile; kwado ya na nọmba ị maara." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 8, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Prompt azụmahịa", objective: "O3", notYet: "Prompt ahụ edoghị anya, dịka ọmụmaatụ \"dee email\".", meets: "Prompt ahụ nwere ọrụ, ọnọdụ azụmahịa na ụdị azịza.", exceeds: "Ọ na-akpọkwa onye ahịa na ebumnuche aha, ihe mbụ ahụ fọrọ nke nta ka ọ dị njikere." },
      { name: "Ihe mbụ e mere ka ọ ka mma", objective: "O4", notYet: "E jiri ihe mbụ otu o si dị.", meets: "E mere mgbanwe abụọ site n'ajụjụ nsochi, otu n'otu oge, gbakwunyere ozi nke onye nwe azụmahịa.", exceeds: "Nwere ike ikwu ihe mgbanwe ọ bụla dozie, nke ikpeazụ dịkwa ka azụmahịa ahụ." },
      { name: "E lelere eziokwu na okwu nkwupụta", objective: "O5", notYet: "E detuuru ọnụahịa, oge, ngụkọ ma ọ bụ okwu nkwupụta n'eleleghị ya.", meets: "E lelere eziokwu na nọmba ọ bụla; okwu nkwupụta ọ bụla bụ eziokwu, enwere ike igosi ya.", exceeds: "Dere ebe e lelere eziokwu ọ bụla, ma gụkọọ ngụkọ ọzọ na spreadsheet." },
      { name: "Ozi nzuzo adịghị n'ime ya", objective: "O6", notYet: "Prompt ma ọ bụ nke ikpeazụ nwere ozi kaadị, ụlọ akụ ma ọ bụ ozi nzuzo ndị ahịa.", meets: "Ọ dịghị ozi nzuzo ndị ahịa ma ọ bụ ozi ego; e jiri ihe nnọchi ebe ọ dị mkpa.", exceeds: "Lelekwara ntọala nzuzo nke ngwa AI ahụ maka ichekwa mkparịta ụka." },
      { name: "Ọ dị njikere iji", objective: "O1", notYet: "Nke ikpeazụ emechabeghị ma ọ bụ a chekwabeghị ya.", meets: "E chekwara ya, lelee ya, ọ dịkwa njikere iji maka ọrụ a họrọrọ.", exceeds: "E chekwara ya dị ka ụkpụrụ (template) onye nwe azụmahịa nwere ike iji ọzọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa jiri ihe mbụ AI dere maka ezi ọrụ azụmahịa n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nwe azụmahịa kwuru awa ha chekwara kwa izu n'ide ihe na ime atụmatụ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị na-azụ ahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini",
      "Ezi ọnụahịa gị, oge mmeghe gị na ozi azụmahịa gị maka ilele",
      "Ihe dị ka nkeji 60 n'ozuzu maka nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'ọmụmụ ihe (workshop), mee ka onye nwe azụmahịa ọ bụla bute otu ezi ọrụ ma rụọ ya n'ime nkuzi isii niile.",
      "Chetara ndị nwe azụmahịa ka ha ghara itinye nọmba kaadị, ozi ụlọ akụ ma ọ bụ ndepụta ndị ahịa na mkparịta ụka AI mgbe ọ bụla.",
      "Kpọkọta ndị nwe azụmahịa abụọ abụọ ka ha gụpụtara ibe ha ihe mbụ ha n'olu dị elu ma hụ okwu nkwupụta chọrọ ihe akaebe.",
      "Zipu ajụjụ gbasara ụtụ isi na license n'isi iyi gọọmentị ma ọ bụ n'aka onye ọkachamara, ọ bụghị AI.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

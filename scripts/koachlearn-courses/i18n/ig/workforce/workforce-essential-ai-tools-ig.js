"use strict";

// Koach Learn course (Igbo translation of workforce/workforce-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "workforce-essential-ai-tools-ig",
  lang: "ig",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Ngwa AI Dị Mkpa n'Ebe Ọrụ",
  skills: "Ịgbaso iwu AI nke onye were gị n'ọrụ, Iji ngwa enyemaka AI ede ihe ọrụ, Iji AI dị n'ime Microsoft 365 ma ọ bụ Google Workspace, Ịchịkọta akwụkwọ na nzukọ, Inweta enyemaka na spreadsheet, Ịlele ọrụ AI tupu i kesaa ya",
  outcome: "iji ngwa AI ebe ọrụ gị kwere ka ị mee ọrụ ụbọchị niile ngwa ngwa: ide na imezi ozi ọrụ, ịchịkọta ogologo akwụkwọ ma ọ bụ ndetu nzukọ, inweta enyemaka na spreadsheet, na ịlele azịza ọ bụla tupu i kesaa ya, n'etinyeghị ozi nzuzo n'ebe ọ na-ekwesịghị ịdị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-arụ ọrụ na ndị na-achọ ọrụ chọrọ nka AI bara uru n'ọrụ: ndị ọrụ ọfịs na nchịkwa, ndị isi n'ụlọ ahịa na n'ụlọ nkwakọba ngwaahịa, ndị na-enyere aka n'ahụike, ndị na-elekọta ndị ahịa, na onye ọ bụla na-ede email, na-agụ iwu ụlọ ọrụ ma ọ bụ na-eji spreadsheet n'ọrụ.",
    "Ị ga-amalite site n'iwu kacha mkpa, iwu AI nke onye were gị n'ọrụ, wee mee omume na ngwa enyemaka AI (ChatGPT, Microsoft Copilot, Google Gemini) na enyemaka AI dị n'ime Microsoft 365 na Google Workspace n'ụfọdụ atụmatụ (plan). Ị ga-achịkọta, dee ihe mbụ, nyochaa ihe, ma, mgbe niile, lelee.",
    "Ihe ndị ị na-ahụ dabere na ikike (license) na ntọala onye were gị n'ọrụ, ya mere anyị na-akọwa ihe ị ga-eme kama aha bọtịnụ kpọmkwem. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee otu ọrụ AI n'ebe ọrụ site n'iji naanị ngwa ebe ọrụ gị kwere (ma ọ bụ ngwa n'efu nwere ozi e chepụtara echepụta ma ọ bụrụ na ị na-achọ ọrụ): (1) dee iwu atọ kacha mkpa n'iwu AI ebe ọrụ gị, ma ọ bụ iwu atọ ị ga-agbaso; (2) gbanwee ndetu ọsọ ọsọ ka ọ bụrụ email ọrụ doro anya; (3) chịkọta ogologo akwụkwọ ka ọ bụrụ isi okwu ise na ihe atọ a ga-eme; (4) nweta enyemaka AI itinye formula na spreadsheet; na (5) dee ihe i lelere n'ime nke ọ bụla tupu i kesaa ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-arụ ọrụ na ndị na-achọ ọrụ chọrọ nka AI bara uru n'ọrụ: ndị ọrụ ọfịs na nchịkwa, ndị isi n'ụlọ ahịa na n'ụlọ nkwakọba ngwaahịa, ndị na-enyere aka n'ahụike, ndị na-elekọta ndị ahịa, na onye ọ bụla na-ede email, na-agụ iwu ụlọ ọrụ ma ọ bụ na-eji spreadsheet n'ọrụ.",
    startingPoint: "Ha na-eji email, akwụkwọ na mgbe ụfọdụ spreadsheet n'ọrụ, na kọmputa ma ọ bụ ekwentị. Ọtụtụ ahụla ngwa AI mana ha ejibeghị ha rụọ ọrụ, ha nwekwara ike ọ gaghị ama iwu AI nke onye were ha n'ọrụ.",
    gap: "Ndị were mmadụ n'ọrụ na-atụkwu anya ka ndị ọrụ jiri ngwa AI a kwadoro chekwaa oge, mperi ma ọ bụ ozi nzuzo gbapụrụ agbapụ nwekwara ike ime ka mmadụ tufuo ọrụ ya. Ndị na-amụ ihe kwesịrị iji ngwa ebe ọrụ ha kwere maka ide ihe, ịchịkọta na spreadsheet, ma lelee azịza ọ bụla tupu ha kesaa ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa kacha mma maka akwụkwọ na spreadsheet; ngwa dabere n'ihe onye were gị n'ọrụ kwere",
      "Iwu na nzuzo: iwu AI nke onye were gị n'ọrụ na-ebu ụzọ; enweghị ozi nzuzo nke ndị ahịa ma ọ bụ ndị ọrụ n'ime ngwa AI; ndị na-achọ ọrụ na-eji ngwa n'efu nwere ozi e chepụtara echepụta",
      "Ihe AI dị n'ime Microsoft 365 na Google Workspace dabere n'atụmatụ na ntọala onye were gị n'ọrụ",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'ụbọchị ọrụ"
    ],
    prerequisites: "Ọ dịghị. \"AI and the New Workforce\" bụ ihe ọmụmụ ọzọ na-enyere aka n'akụkụ nke a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu i jiri AI n'ọrụ", action: "ịchọta iwu AI ebe ọrụ gị ma dee iwu atọ kacha mkpa n'ime ya, ma ọ bụ iwu atọ n'enweghị nsogbu ma ọ bụrụ na o nweghị iwu", standard: "n'etinyeghị ozi nzuzo nke ndị ahịa ma ọ bụ ndị ọrụ n'ime ngwa AI" },
    { id: "O2", condition: "Mgbe e nyere gị ndetu ọsọ ọsọ maka ozi ọrụ", action: "ide email ọrụ doro anya site n'iji ngwa enyemaka AI na prompt nwere ebumnuche, onye ga-agụ ya, isi okwu na ụdị olu", standard: "ebe e lelere eziokwu ọ bụla, email ahụ dịkwa ka okwu gị" },
    { id: "O3", condition: "N'ime ngwa ọfịs ị na-eji", action: "ịchọta ma jiri onye enyemaka AI dị n'ime ya, ma ọ bụ ngwa enyemaka AI a kwadoro ma ọ bụrụ na akaụntụ gị enweghị ya", standard: "site n'iji naanị ederede na-abụghị nzuzo n'ime ngwa ọ bụla ebe ọrụ gị na-akwadobeghị" },
    { id: "O4", condition: "Mgbe e nyere gị ogologo akwụkwọ ma ọ bụ ndetu nzukọ", action: "ịchịkọta ya ka ọ bụrụ isi okwu ise na ihe atọ a ga-eme nwere ndị ga-eme ha", standard: "nke e lelere megide akwụkwọ mbụ ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị obere spreadsheet", action: "iji AI dee ma kọwaa formula, wee nwalee ya", standard: "megide azịza i ji aka gị gụpụta" },
    { id: "O6", condition: "Tupu i kesaa ihe ọ bụla AI mepụtara", action: "ịlele ya maka eziokwu, ndabara, nchekwa na isi iyi", standard: "ma were ọrụ maka nke ikpeazụ ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Iwu na ngwa ndị bụ isi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iwu AI nke onye were gị n'ọrụ na-ebu ụzọ",
          minutes: 5,
          goal: "Chọta ma gbasoo iwu ebe ọrụ gị maka ngwa AI.",
          text: [
            "Ọtụtụ ndị were mmadụ n'ọrụ nwere iwu gbasara ngwa AI: ngwa ndị a kwadoro, ozi ndị nwere ike ịbanye n'ime ha, na mgbe ị ga-ekwu na i jiri AI. Imebi iwu ndị a nwere ike ịkpata gị nsogbu, ọbụlagodi ma ọ bụrụ na obi gị dị mma.",
            "Lee n'akwụkwọ ntuziaka ndị ọrụ (handbook), intranet ma ọ bụ peeji IT, ma ọ bụ jụọ onye isi gị ma ọ bụ IT: \"Kedu ngwa AI a kwere ka anyị jiri, kedu ozi m nwere ike itinye n'ime ha?\" Ụfọdụ ndị were mmadụ n'ọrụ na-enye ụdị ngwa maka azụmahịa, dị ka Microsoft Copilot nwere akaụntụ ọrụ, nke na-echebe ozi karịa akaụntụ onwe gị n'efu.",
            "Ọ bụrụ na o nweghị iwu, gbasoo iwu n'enweghị nsogbu: enweghị ozi ndị ahịa ma ọ bụ ndị ọrịa, enweghị ozi onwe ndị ọrụ, enweghị okwuntughe, enweghị atụmatụ nzuzo ma ọ bụ nọmba ego n'akaụntụ AI onwe gị. Lelee eziokwu ọ bụla tupu i kesaa ya."
          ],
          steps: ["Chọọ \"AI\" n'akwụkwọ ntuziaka ma ọ bụ intranet gị.", "Jụọ onye isi gị ma ọ bụ IT ngwa ndị a kwadoro.", "Jụọ ozi ndị a kwere.", "Ọ bụrụ na o nweghị iwu, jiri iwu n'enweghị nsogbu."],
          words: [["Iwu AI (AI policy)", "iwu onye were mmadụ n'ọrụ maka iji ngwa AI n'ọrụ."], ["Ngwa a kwadoro", "ngwa onye were gị n'ọrụ kwere ka i jiri rụọ ọrụ."], ["Nzuzo (confidential)", "ozi e mere naanị maka ndị nọ n'ime ụlọ ọrụ ahụ."]],
          slides: [
            { title: "Iwu na-ebu ụzọ", bullets: ["Ngwa ndị a kwadoro", "Ozi ndị nwere ike ịbanye", "Mgbe ị ga-ekwu na i jiri AI"] },
            { title: "Ebe ị ga-achọta ha", bullets: ["Akwụkwọ ntuziaka ndị ọrụ ma ọ bụ intranet", "Jụọ onye isi gị ma ọ bụ IT", "Akaụntụ ọrụ nwere ike inwe nchekwa karịa"] },
            { title: "Iwu n'enweghị nsogbu", bullets: ["Enweghị ozi ndị ahịa, ndị ọrịa ma ọ bụ ndị ọrụ", "Enweghị okwuntughe ma ọ bụ atụmatụ nzuzo", "Lelee eziokwu ọ bụla tupu i kesaa"] }
          ],
          tryIt: "Chọta iwu AI ebe ọrụ gị, ma ọ bụ jụọ maka ya. Dee iwu atọ kacha mkpa. Ọ bụrụ na ị na-achọ ọrụ, dee iwu atọ n'enweghị nsogbu ị ga-agbaso.",
          youCanNow: "ịchọta ma gbasoo iwu maka ngwa AI n'ebe ọrụ gị.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ị na-ahụkarị iwu AI ebe ọrụ gị?", options: ["Na peeji soshal midia", "N'akwụkwọ ntuziaka ma ọ bụ intranet, ma ọ bụ site n'ịjụ onye isi gị ma ọ bụ IT", "Na mgbasa ozi ngwa AI ahụ", "Ọ dịghị ebe; iwu adịghị"], answer: 1, why: "Iwu na-adịkarị n'akwụkwọ ntuziaka ma ọ bụ intranet, onye isi gị ma ọ bụ IT nwekwara ike ịgwa gị." },
            { objective: "O1", q: "Ebe ọrụ gị enweghị iwu AI, ị chọkwara enyemaka iji zaa mkpesa onye ahịa. Gịnị ka ị ga-eme?", options: ["Tinye aha onye ahịa, adreesị ya na akụkọ ihe ọ zụrụ", "Jiri AI na ozi ọ bụla masịrị gị", "Edekwala azịza ọzọ mgbe ọ bụla", "Wepụ ozi onwe onye ahịa ma jiri iwu n'enweghị nsogbu"], answer: 3, why: "Mgbe o nweghị iwu, iwu n'enweghị nsogbu bụ idebe ozi onwe ndị ahịa na ndị ọrụ n'ebe ọ na-adịghị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ngwa enyemaka AI maka ide ihe ọrụ kwa ụbọchị",
          minutes: 5,
          goal: "Gbanwee ndetu ọsọ ọsọ ka ọ bụrụ ozi ọrụ doro anya site n'iji ngwa enyemaka AI.",
          text: [
            "Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini na-agbanwe ndetu ọsọ ọsọ ka ọ bụrụ ederede doro anya. Jiri nke ebe ọrụ gị kwere.",
            "Ezigbo prompt ọrụ na-ekwu ebumnuche, onye ga-agụ ya, isi okwu na ụdị olu: \"Dee obere email nye ndị otu m. Ebumnuche: ebe a na-ebutu ngwaahịa (loading dock) ga-emechi na Tọzdee maka nrụzi. Jiri dock B kama. Ngwaahịa ga-abịa n'etiti elekere 7-11 nke ụtụtụ. Ụdị olu: doro anya ma nwee obi ọma. Erughị okwu 100.\"",
            "Wee rịọ maka mgbanwe (\"mee ka ọ dị mkpụmkpụ\", \"mee ka o nwekwuo nkwanye ugwu\", \"tinye ndepụta\"), lelee eziokwu ọ bụla, ma mee ka ọ dị ka okwu gị tupu i zipu ya."
          ],
          steps: ["Dee ndetu ọsọ ọsọ gị.", "Dee prompt nwere ebumnuche, onye ga-agụ ya, isi okwu na ụdị olu.", "Rịọ maka otu mgbanwe n'otu oge.", "Lelee aha, ụbọchị, oge na nọmba.", "Mezie ya ka ọ dị ka okwu gị, wee zipu ya."],
          words: [["Prompt", "ihe ị na-ede iji rịọ ngwa AI ihe."], ["Ụdị olu (tone)", "otu ederede si ada: nke obi ọma, nke nkwanye ugwu, nke siri ike."]],
          slides: [
            { title: "Ndetu na-abanye, ozi doro anya na-apụta", bullets: ["ChatGPT, Copilot ma ọ bụ Gemini", "Jiri ngwa ebe ọrụ gị kwere"] },
            { title: "Ezigbo prompt ọrụ", bullets: ["Ebumnuche na onye ga-agụ ya", "Isi okwu", "Ụdị olu na ogologo"] },
            { title: "Tupu i zipu", bullets: ["Rịọ maka mgbanwe otu n'otu oge", "Lelee aha, ụbọchị, oge, nọmba", "Mee ka ọ dị ka okwu gị"] }
          ],
          tryIt: "Dee ndetu ọsọ ọsọ maka ezi ozi ọrụ ma ọ bụ nke ọmụmaatụ. Jiri ngwa enyemaka AI gbanwee ha ka ọ bụrụ email doro anya, rịọ maka otu mgbanwe, ma lelee eziokwu ọ bụla.",
          youCanNow: "ịgbanwe ndetu ọsọ ọsọ ka ọ bụrụ ozi ọrụ doro anya site n'iji ngwa enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka \"maka onye isi m, ụdị olu nwere obi ọma\" na-akọwa na prompt?", options: ["Onye ga-agụ ya na ụdị olu", "Ogologo ya", "Ụbọchị njedebe", "Ụdị faịlụ"], answer: 0, why: "Ịkpọ aha onye ga-agụ ya na ụdị olu na-enyere AI aka ide ụdị ozi kwesịrị ekwesị." },
            { objective: "O2", q: "Email AI dere na-ekwu na nzukọ ahụ bụ Tọzdee, mana ndetu gị na-ekwu Wenezdee. Gịnị ka ị ga-eme?", options: ["Zipu ya; AI nwere ike ịbụ eziokwu", "Hichapụ ndetu gị", "Dozie ụbọchị ahụ tupu i zipu ya", "Tinye ụbọchị abụọ ahụ"], answer: 2, why: "Ị na-elele eziokwu ọ bụla megide ndetu gị tupu i zipu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "AI n'ime Microsoft 365 na Google Workspace",
          minutes: 5,
          goal: "Chọta ma jiri onye enyemaka AI dị n'ime ngwa ọfịs ị na-eji, ma ọ bụrụ na akaụntụ gị nwere ya.",
          text: [
            "Microsoft na-etinye Copilot n'ime ngwa dị ka Word, Outlook, Excel, PowerPoint na Teams, Google na-etinyekwa Gemini n'ime Gmail, Docs, Sheets na Meet. Ma ị nwere ha dabere n'atụmatụ na ntọala onye were gị n'ọrụ.",
            "Ebe ị nwere ha, AI nwere ike ịrụ ọrụ n'ihe ghere oghe ugbu a: \"Chịkọta akwụkwọ a\", \"Dee azịza nye email a\", \"Tụọ aro formula maka kọlụm a\". Chọọ akara (icon) ma ọ bụ igbe AI n'ime ngwa ahụ, ma ọ bụ jụọ IT otu esi agbanye ya.",
            "Ọ bụrụ na i nweghị ya, ị ka nwere ike idetuo ederede na-abụghị nzuzo n'ime ngwa enyemaka AI a kwadoro ma tinyeghachi azịza ya. N'ụzọ ọ bụla, ị nwe nke ikpeazụ ahụ, ị na-elelekwa ya."
          ],
          steps: ["Meghee Word, Outlook, Docs ma ọ bụ Gmail na akaụntụ ọrụ gị.", "Chọọ akara ma ọ bụ igbe AI, ma ọ bụ jụọ IT.", "Rịọ ya ka ọ chịkọta ma ọ bụ dee ihe mbụ site na faịlụ ghere oghe.", "Ọ bụrụ na ọ dịghị, jiri ngwa enyemaka AI a kwadoro na ederede na-abụghị nzuzo.", "Lelee ma mezie azịza ya."],
          words: [["Microsoft 365", "otu ngwa ọrụ Microsoft: Word, Excel, Outlook, Teams na ndị ọzọ."], ["Google Workspace", "otu ngwa ọrụ Google: Gmail, Docs, Sheets, Meet na ndị ọzọ."]],
          slides: [
            { title: "AI dị n'ime ngwa ọfịs", bullets: ["Microsoft: Copilot n'ime Word, Outlook, Excel, Teams", "Google: Gemini n'ime Gmail, Docs, Sheets, Meet", "Ọ dabere n'atụmatụ onye were gị n'ọrụ"] },
            { title: "Ọ na-arụ ọrụ n'ihe ghere oghe", bullets: ["\"Chịkọta akwụkwọ a\"", "\"Dee azịza nye email a\"", "Chọọ akara AI ma ọ bụ jụọ IT"] },
            { title: "I nweghị AI dị n'ime ya?", bullets: ["Jiri ngwa enyemaka AI a kwadoro", "Naanị ederede na-abụghị nzuzo", "Ị na-elele nke ikpeazụ"] }
          ],
          tryIt: "Meghee akwụkwọ ma ọ bụ email ọrụ (ma ọ bụ nke ọmụmaatụ). Jiri onye enyemaka AI dị n'ime ya ma ọ bụrụ na ị nwere ya, ma ọ bụ ngwa enyemaka AI a kwadoro ma ọ bụrụ na i nweghị, dee azịza ma ọ bụ nchịkọta. Lelee ya.",
          youCanNow: "iji onye enyemaka AI dị n'ime ngwa ọfịs gị, ma ọ bụ ụzọ ọzọ n'enweghị nsogbu, dee ihe mbụ ma chịkọta ihe.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ Copilot n'ime Word ma ọ bụ Outlook?", options: ["Ihe mgbakwunye n'efu onye ọ bụla nwere", "Formula spreadsheet", "Nje kọmputa (virus)", "Onye enyemaka AI dị n'ime Microsoft 365, n'ụfọdụ atụmatụ"], answer: 3, why: "Copilot dị n'ime ngwa Microsoft 365, dabere n'atụmatụ na ntọala onye were gị n'ọrụ." },
            { objective: "O3", q: "Ị hụghị akara AI n'ime ngwa ọfịs gị. Gịnị ka ị ga-eme?", options: ["Wụnye ihe mgbakwunye AI ọ bụla ị hụrụ", "Jụọ IT, ma ọ bụ jiri ngwa enyemaka AI a kwadoro na ederede na-abụghị nzuzo", "Tinye faịlụ nzuzo n'akaụntụ AI onwe gị", "Hapụ AI kpamkpam"], answer: 1, why: "IT nwere ike ịgwa gị ihe dị, ngwa enyemaka a kwadoro na-arụkwa ọrụ na ederede na-abụghị nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Iwu na ngwa ndị bụ isi",
        questions: [
          { objective: "O1", q: "Tupu i jiri AI n'ọrụ, ihe mbụ ị ga-eme bụ:", options: ["Itinye ozi ndị ahịa", "Ịmara iwu AI nke onye were gị n'ọrụ", "Ikesa okwuntughe gị", "Iji app ọ bụla ị hụrụ"], answer: 1, why: "Iwu na-ekwu ihe a kwere." },
          { objective: "O1", q: "O nweghị iwu. Kedu iwu n'enweghị nsogbu ị ga-agbaso?", options: ["Elele eziokwu", "Tinye ihe ọ bụla", "Kesaa okwuntughe", "Enweghị ozi onwe ndị ahịa ma ọ bụ ndị ọrụ n'ime ngwa AI"], answer: 3, why: "Ozi onwe na-anọ n'ebe ọ na-adịghị." },
          { objective: "O2", q: "Ezigbo prompt ọrụ nwere:", options: ["Ebumnuche, onye ga-agụ ya, isi okwu na ụdị olu", "Naanị otu okwu", "Okwuntughe gị", "Adreesị onye ahịa"], answer: 0, why: "Akụkụ ndị ahụ na-enye ihe mbụ bara uru." },
          { objective: "O3", q: "Copilot n'ime Word ma ọ bụ Outlook na-adị:", options: ["Mgbe ọ bụla adịghị", "Nye onye ọ bụla n'onwe ya", "Dabere n'atụmatụ na ntọala onye were gị n'ọrụ", "Naanị na ekwentị"], answer: 2, why: "Inweta ya dabere n'ikike na ntọala." },
          { objective: "O6", q: "Onye nwe nke ikpeazụ nke ọrụ AI dere?", options: ["IT", "AI", "Gị", "Ọ dịghị onye"], answer: 2, why: "Ị na-aza maka ihe ị na-ezipu." }
        ]
      }
    },
    {
      name: "Isi 2: Nchịkọta, spreadsheet na ilele",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchịkọta akwụkwọ na nzukọ",
          minutes: 5,
          goal: "Gbanwee ogologo akwụkwọ ma ọ bụ ndetu nzukọ ka ọ bụrụ isi okwu na ihe a ga-eme.",
          text: [
            "Nchịkọta na-echekwara onye ọ bụla oge. Rịọ maka ụdị doro anya: \"Chịkọta iwu a n'isi okwu ise maka onye ọhụrụ e were n'ọrụ, wee depụta ihe atọ a ga-eme.\" Ma ọ bụ maka ndetu nzukọ: \"Depụta mkpebi, ihe a ga-eme nwere ndị ga-eme ha na ụbọchị njedebe, na ajụjụ a zaghị.\"",
            "Ụfọdụ ngwa nzukọ nwere ike ide okwu e kwuru (transcribe) ma chịkọta nzukọ mgbe onye were gị n'ọrụ gbanyere ya. Onye ọ bụla nọ na nzukọ ahụ kwesịrị ịma na a na-edekọ ya ma ọ bụ na-ede ya; gbasoo iwu ebe ọrụ gị.",
            "Nchịkọta nwere ike ịhapụ ihe dị mkpa ma ọ bụ mehie otu ihe. Lelee isi eziokwu megide akwụkwọ mbụ ahụ, karịsịa nọmba, ụbọchị, aha na onye kwetara ime gịnị."
          ],
          steps: ["Tinye ma ọ bụ meghee akwụkwọ ahụ (ma ọ bụrụ na a kwere).", "Rịọ maka isi okwu, mkpebi na ihe a ga-eme nwere ndị ga-eme ha na ụbọchị.", "Tụnyere isi eziokwu na akwụkwọ mbụ ahụ.", "Dozie ihe ọ bụla fọdụrụ ma ọ bụ nke ezighi ezi tupu i kesaa ya."],
          words: [["Nchịkọta (summary)", "obere ụdị nke na-edebe isi ihe."], ["Ihe a ga-eme (action item)", "ọrụ mmadụ kwetara ime, nke ka mma ma o nwee onye ga-eme ya na ụbọchị njedebe."], ["Transcribe", "ịgbanwe okwu e kwuru ka ọ bụrụ ederede."]],
          slides: [
            { title: "Rịọ maka ụdị doro anya", bullets: ["Isi okwu ise maka onye ọhụrụ e were n'ọrụ", "Mkpebi, ihe a ga-eme, ajụjụ a zaghị", "Ndị ga-eme ha na ụbọchị njedebe"] },
            { title: "Ngwa nzukọ", bullets: ["Ụfọdụ na-ede okwu ma chịkọta nzukọ", "Onye ọ bụla kwesịrị ịma na a na-edekọ ya", "Gbasoo iwu ebe ọrụ gị"] },
            { title: "Lelee megide akwụkwọ mbụ", bullets: ["Nọmba, ụbọchị na aha", "Onye kwetara ime gịnị", "Ihe dị mkpa a hapụrụ"] }
          ],
          tryIt: "Were ogologo akwụkwọ ọrụ ma ọ bụ ndetu nzukọ (ma ọ bụ iwu ọha ma ọ bụrụ na ị na-achọ ọrụ). Rịọ AI maka isi okwu ise na ihe atọ a ga-eme nwere ndị ga-eme ha, wee lelee ha megide akwụkwọ mbụ ahụ.",
          youCanNow: "ịchịkọta akwụkwọ na nzukọ ka ọ bụrụ isi okwu doro anya na ihe a ga-eme, ma lelee ha.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ \"ihe a ga-eme\" (action item)?", options: ["Nchịkọta nzukọ niile", "Ajụjụ onye ọ bụla azaghị", "Ọrụ nwere onye ga-eme ya na ụbọchị njedebe", "Oge nzukọ ahụ malitere"], answer: 2, why: "Ihe a ga-eme na-ekwu onye ga-eme gịnị na mgbe." },
            { objective: "O4", q: "Nchịkọta AI hapụrụ ụbọchị njedebe dị n'akwụkwọ mbụ ahụ. Gịnị ka ị ga-eme?", options: ["Tinye ụbọchị njedebe ahụ mgbe i tụnyerechara ya na akwụkwọ mbụ", "Kesaa nchịkọta ahụ otu o si dị", "Hichapụ akwụkwọ mbụ ahụ", "Rịọ maka nchịkọta ka ogologo ma elela ya"], answer: 0, why: "Nchịkọta nwere ike ịhapụ ihe, ya mere ị na-atụnyere ya na akwụkwọ mbụ ma dozie ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Inweta enyemaka spreadsheet site n'AI",
          minutes: 5,
          goal: "Jiri AI dee ma kọwaa formula spreadsheet, wee nwalee ya.",
          text: [
            "Ọtụtụ ndị ọrụ na-atụfu oge na spreadsheet. AI bụ ezigbo onye nkuzi: \"N'ime Excel, olee otu m ga-esi gụọ ahịrị ole dị na kọlụm B na-ekwu 'Late' (oge agafeela)?\" O nwere ike ịza =COUNTIF(B:B,\"Late\") ma kọwaa akụkụ ọ bụla.",
            "Kọwaa kọlụm gị kama itinye ozi nzuzo: \"Kọlụm A bụ ụbọchị, B bụ ọnọdụ (status), C bụ awa.\" Ọ bụrụ na onye were gị n'ọrụ kwere AI dị n'ime Excel ma ọ bụ Sheets, ị nwere ike ịjụ ya maka faịlụ ghere oghe.",
            "Nwalee formula mgbe niile n'ahịrị ole na ole ebe ị maara azịza ya. Formula AI nwere ike ịdị nso mana ezighi ezi, dịka ọmụmaatụ ịgụ ahịrị isi (header) ma ọ bụ iji range ezighi ezi."
          ],
          steps: ["Kọwaa kọlụm gị na ihe ị chọrọ ịmata.", "Rịọ AI maka formula na nkọwa ya.", "Tinye formula ahụ na shiit gị.", "Nwalee ya n'ahịrị ebe ị maara azịza ya.", "Rịọ AI ka o dozie ya ma ọ bụrụ na ọ dịghị mma."],
          words: [["Formula", "ntụziaka dị n'ime cell spreadsheet nke na-agụpụta ihe."], ["COUNTIF", "formula na-agụ cell ndị dabara n'otu ọnọdụ."], ["Range", "otu ìgwè cell, dị ka B2:B50."]],
          slides: [
            { title: "AI dị ka onye nkuzi spreadsheet", bullets: ["\"Olee otu m ga-esi gụọ ahịrị na-ekwu Late?\"", "=COUNTIF(B:B,\"Late\")", "Rịọ ya ka ọ kọwaa akụkụ ọ bụla"] },
            { title: "Kọwaa, etinyela", bullets: ["\"Kọlụm A bụ ụbọchị, B bụ ọnọdụ\"", "AI dị n'ime ya naanị ma ọ bụrụ na a kwere"] },
            { title: "Nwalee ya", bullets: ["Lelee ahịrị ebe ị maara azịza ya", "Kpachara anya maka ahịrị isi na range ezighi ezi"] }
          ],
          tryIt: "Mee obere shiit nwere ahịrị 10 nke ozi ọmụmaatụ. Rịọ AI maka otu formula (ịgụ, ịgbakọ ma ọ bụ nkezi), tinye ya ma nwalee ya megide azịza i ji aka gị gụpụta.",
          youCanNow: "inweta, ịghọta ma nwalee formula spreadsheet site n'enyemaka AI.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ range na spreadsheet?", options: ["Chaatị", "Otu ìgwè cell, dị ka B2:B50", "Aha faịlụ", "Mperi formula"], answer: 1, why: "Range bụ otu ìgwè cell formula na-arụ ọrụ na ha." },
            { objective: "O5", q: "Formula COUNTIF AI nyere na-enye 11, mana i ji aka gụọ ahịrị \"Late\" 10. Gịnị ka ị ga-eme?", options: ["Jiri 11 n'agbanyeghị", "Hichapụ ozi ahụ", "Rịọ maka AI ọzọ", "Lelee range ahụ, dịka ọmụmaatụ ma ọ gụnyere ahịrị isi, ma dozie ya"], answer: 3, why: "Mperi a na-ahụkarị bụ range ezighi ezi ma ọ bụ ịgụ ahịrị isi, ya mere ị na-anwale ma dozie ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịlele ọrụ AI tupu i kesaa ya",
          minutes: 5,
          goal: "Jiri obere ndepụta ilele nyochaa ihe ọ bụla AI mepụtara tupu ọ ruo ndị ọzọ.",
          text: [
            "N'ọrụ, aha gị dị n'ihe ị na-ekesa. Jiri nlele akụkụ anọ mgbe niile: Eziokwu (Facts: nọmba, aha, ụbọchị, iwu dabara n'isi iyi ya), Ndabara (Fit: ụdị olu na ogologo kwesịrị onye ga-agụ ya), Nchekwa (Safety: enweghị ozi nzuzo ma ọ bụ ozi onwe na-ekwesịghị ịdị ya), na Isi iyi (Source: ọ bụrụ na o kwuru iwu ma ọ bụ ọnụọgụ, ị maara ebe o si).",
            "AI nwere ike ịchepụta ihe dị ka eziokwu, a na-akpọ ha hallucination. O nwekwara ike idetuo ajọ mmasị (bias), dịka ọmụmaatụ n'akwụkwọ na-akọwa ọrụ. Gụọ ya dị ka a ga-asị na ọ bụ gị ga-anata ya.",
            "Ọ bụrụ na ebe ọrụ gị chọrọ ka i kwuo mgbe i jiri AI, mee ya. Ịdị n'ihu ọha banyere otu ị si arụ ọrụ na-ewulite ntụkwasị obi."
          ],
          steps: ["Eziokwu: lelee megide isi iyi ya.", "Ndabara: ụdị olu na ogologo kwesịrị onye ga-agụ ya.", "Nchekwa: enweghị ozi na-ekwesịghị ịdị ya.", "Isi iyi: mara ebe iwu ma ọ bụ nọmba ọ bụla si.", "Kwuo na i jiri AI ma ọ bụrụ na ebe ọrụ gị chọrọ ya."],
          words: [["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."], ["Ajọ mmasị (bias)", "ịkwado ma ọ bụ imegide otu ìgwè mmadụ n'ụzọ na-ezighi ezi."]],
          slides: [
            { title: "Aha gị dị na ya", bullets: ["Lelee ihe ọ bụla AI mepụtara tupu i kesaa ya"] },
            { title: "Nlele akụkụ anọ", bullets: ["Eziokwu (Facts)", "Ndabara (Fit)", "Nchekwa (Safety)", "Isi iyi (Source)"] },
            { title: "Kpachara anya maka", bullets: ["Ihe e chepụtara echepụta (hallucination)", "Ajọ mmasị, dị ka n'akwụkwọ na-akọwa ọrụ", "Kwuo na i jiri AI ma ọ bụrụ na a chọrọ ya"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa ọrụ AI gị n'ebe ọrụ: iwu atọ, email doro anya site na ndetu, nchịkọta nwere isi okwu ise na ihe a ga-eme, formula spreadsheet e nwalere, na ndetu ihe i lelere n'ime nke ọ bụla site n'iji Eziokwu, Ndabara, Nchekwa na Isi iyi.",
          youCanNow: "iji ngwa AI n'ebe ọrụ mee ọrụ ngwa ngwa, n'enweghị nsogbu, ma jiri nlele gị nke ọma.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka nlele Nchekwa (Safety) na-ajụ tupu i kesaa ọrụ AI?", options: ["Ma o nwere ozi nzuzo ma ọ bụ ozi onwe na-ekwesịghị ka e kesaa", "Ma ọ dị ogologo nke ọma", "Ma o ji okwu ukwu", "Ma ọ masịrị AI"], answer: 0, why: "Nlele Nchekwa na-ahụ na ozi nzuzo ma ọ bụ ozi onwe agaghị ebe ọ na-ekwesịghị ịga." },
            { objective: "O6", q: "AI dere nchịkọta iwu ụlọ ọrụ nke na-ekwu otu iwu. Gịnị ka ị ga-eme tupu i kesaa ya?", options: ["Kesaa ya ngwa ngwa", "Wepụ aha gị na ya", "Lelee ebe iwu ahụ si (Isi iyi) na na ọ bụ eziokwu", "Tinyekwuo iwu ndị ọzọ"], answer: 2, why: "Nlele Isi iyi na-akwado ebe iwu ma ọ bụ nọmba ọ bụla si." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nchịkọta, spreadsheet na ilele",
        questions: [
          { objective: "O4", q: "Ezigbo nchịkọta nzukọ na-edepụta:", options: ["Mkpebi, ihe a ga-eme nwere ndị ga-eme ha na ụbọchị, na ajụjụ a zaghị", "Naanị aha nzukọ ahụ", "Okwuntughe onye ọ bụla", "Ọ dịghị ihe"], answer: 0, why: "Ụdị ahụ na-eme ka ịgbaso ya dị mfe." },
          { objective: "O4", q: "Tupu e dee okwu nzukọ (transcribe), ndị mmadụ kwesịrị:", options: ["Igbanyụ igwefoto ha", "Ọ dịghị mkpa ịgwa ha", "Ịpụ", "Ịmara na a na-edekọ ya ma ọ bụ na-ede ya"], answer: 3, why: "Gbasoo iwu ebe ọrụ ma dị n'ihu ọha." },
          { objective: "O5", q: "Gịnị ka =COUNTIF(B:B,\"Late\") na-eme?", options: ["Ọ na-agbakọ kọlụm B", "Ọ na-agụ cell dị na kọlụm B na-ekwu Late", "Ọ na-ehichapụ ahịrị Late", "Ọ na-ahazi shiit ahụ"], answer: 1, why: "COUNTIF na-agụ cell ndị dabara." },
          { objective: "O5", q: "Olee otu ị ga-esi mara na formula AI na-arụ ọrụ?", options: ["Nwalee ya n'ahịrị ebe ị maara azịza ya", "Ọ dị ka ọ dị mma", "AI kwuru otu a", "Ọ dịghị onye mere mkpesa"], answer: 0, why: "Ịnwale ya na-egosi ya." },
          { objective: "O6", q: "Kedu nke ỌBỤGHỊ otu n'ime nlele anọ ahụ?", options: ["Ndabara (Fit)", "Eziokwu (Facts)", "Ama ama (Fame)", "Nchekwa (Safety)"], answer: 2, why: "Nlele ndị ahụ bụ Eziokwu, Ndabara, Nchekwa na Isi iyi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Dị Mkpa n'Ebe Ọrụ",
    questions: [
      { objective: "O1", q: "Ebee ka ị na-ahụkarị iwu AI ebe ọrụ gị?", options: ["Ozi e dere na soshal midia", "Akwụkwọ ntuziaka, intranet, ma ọ bụ site n'ịjụ onye isi gị ma ọ bụ IT", "Mkparịta ụka AI", "Ọ dịghị ebe"], answer: 1, why: "Iwu na-adị n'ebe ụlọ ọrụ ahụ kwadoro." },
      { objective: "O1", q: "Ụdị akaụntụ ọrụ nke ngwa AI nwere ike:", options: ["Ọ dịghị adị", "Ọ na-adịkarịghị nchekwa mgbe niile", "Ọ na-ekesa ozi gị n'ihu ọha", "Inwe nchekwa ozi karịa akaụntụ onwe gị n'efu"], answer: 3, why: "Ụdị maka azụmahịa nwere ike inye nchekwa karịa; lelee ntuziaka onye were gị n'ọrụ." },
      { objective: "O1", q: "Kedu nke na-ekwesịghị ịbanye n'akaụntụ AI onwe gị mgbe ọ bụla?", options: ["Ajụjụ nkịtị", "\"Mee ka ọ dị mkpụmkpụ\"", "Akụkọ ozi ọha", "Ozi onwe ndị ahịa"], answer: 3, why: "Ozi ndị ahịa bụ nzuzo." },
      { objective: "O2", q: "ChatGPT, Copilot na Gemini bụ:", options: ["Spreadsheet", "Ngwa enyemaka AI", "Igwe mbipụta", "Ekwentị"], answer: 1, why: "Ha bụ ngwa enyemaka AI ị na-akparịta ụka na ha." },
      { objective: "O2", q: "\"Erughị okwu 100\" na prompt na-akọwa:", options: ["Ebumnuche", "Onye ga-agụ ya", "Ogologo", "Okwuntughe"], answer: 2, why: "Ọ na-achịkwa ogologo." },
      { objective: "O2", q: "Mgbe AI dechara email mbụ, ị na-:", options: ["Elele eziokwu ma mee ka ọ dị ka okwu gị", "Ezipu ya n'agụghị ya", "Etinyekwu eziokwu ọ chepụtara", "Ehichapụ ya"], answer: 0, why: "Ị nwe nke ikpeazụ ahụ." },
      { objective: "O3", q: "Copilot na-apụta n'ime:", options: ["Akwụkwọ ndetu e ji aka ede", "Naanị Gmail", "Ngwa Microsoft 365, n'ụfọdụ atụmatụ", "Ọ dịghị ihe"], answer: 2, why: "Microsoft na-etinye Copilot n'ime ngwa ya n'ụfọdụ atụmatụ." },
      { objective: "O3", q: "Gemini na-apụta n'ime:", options: ["Ngwa Google Workspace, n'ụfọdụ atụmatụ", "Naanị Excel", "Igwe fax", "Ọ dịghị ihe"], answer: 0, why: "Google na-etinye Gemini n'ime ngwa ya n'ụfọdụ atụmatụ." },
      { objective: "O3", q: "Ị hụghị akara AI n'ime ngwa ọfịs gị. Ị nwere ike:", options: ["Ịwụnye ihe mgbakwunye ọ bụla", "Ịjụ IT, ma ọ bụ iji ngwa enyemaka AI a kwadoro na ederede na-abụghị nzuzo", "Ịhapụ ya", "Iji akaụntụ onye ọrụ ibe gị banye"], answer: 1, why: "Nọgide n'ime ngwa a kwadoro." },
      { objective: "O4", q: "Ihe a ga-eme kwesịrị inwe:", options: ["Ọ dịghị ihe", "Ihe nzuzo", "Okwuntughe", "Onye ga-eme ya na ụbọchị njedebe"], answer: 3, why: "Onye ga-eme ya na ụbọchị na-eme ka o mee." },
      { objective: "O4", q: "Gịnị mere ị ga-eji tụnyere nchịkọta na akwụkwọ mbụ?", options: ["Nchịkọta nwere ike ịhapụ ma ọ bụ gbanwee ihe", "Iji tufuo oge", "Ọ dịghị mkpa", "Maka egwuregwu"], answer: 0, why: "Ilele na-ejide mperi." },
      { objective: "O4", q: "Transcribe pụtara:", options: ["Iziga email", "Ihichapụ faịlụ", "Ịsụgharị asụsụ", "Ịgbanwe okwu e kwuru ka ọ bụrụ ederede"], answer: 3, why: "Transcription na-ede okwu e kwuru." },
      { objective: "O5", q: "Kama itinye ozi spreadsheet nzuzo n'AI, ị nwere ike:", options: ["Iziga ya ndị enyi gị n'email", "Itinye ya n'agbanyeghị", "Ịkọwa kọlụm ndị ahụ", "Itinye ya n'ịntanetị"], answer: 2, why: "Nkọwa na-echebe ozi." },
      { objective: "O5", q: "Range na spreadsheet bụ:", options: ["Stovu", "Otu ìgwè cell, dị ka B2:B50", "Okwuntughe", "Chaatị"], answer: 1, why: "Range bụ ìgwè cell." },
      { objective: "O5", q: "Mperi formula AI a na-ahụkarị bụ:", options: ["Ọ dịghị ihe", "Ịdị mkpụmkpụ nke ukwuu", "Iji agba", "Ịgụ ahịrị isi ma ọ bụ iji range ezighi ezi"], answer: 3, why: "Nwalee ya iji jide ndị a." },
      { objective: "O6", q: "Hallucination AI bụ:", options: ["Nzukọ", "Nsogbu ihuenyo", "Ihe e chepụtara echepụta dị ka eziokwu", "Nje kọmputa (virus)"], answer: 2, why: "AI nwere ike ịchepụta eziokwu." },
      { objective: "O6", q: "Nlele \"Ndabara\" (Fit) na-ajụ ma:", options: ["Ụdị olu na ogologo kwesịrị onye ga-agụ ya", "Faịlụ ahụ ga-abanye na USB", "Oche ahụ dabara", "Ọ ga-abanye n'otu tweet"], answer: 0, why: "Ndabara gbasara onye ga-agụ ya." },
      { objective: "O6", q: "Nlele \"Isi iyi\" (Source) na-ajụ:", options: ["Kiibọọdụ i jiri", "Ebe iwu ma ọ bụ nọmba ọ bụla si", "Onye kacha pịa ngwa ngwa", "Ọ dịghị ihe"], answer: 1, why: "Iwu na nọmba chọrọ isi iyi." },
      { objective: "O6", q: "Ọ bụrụ na ebe ọrụ gị chọrọ ka i kwuo na i jiri AI, ị kwesịrị:", options: ["Izo ya", "Ikwu ya", "Ịta onye ọrụ ibe gị ụta", "Ileghara iwu ahụ anya"], answer: 1, why: "Ịdị n'ihu ọha na-ewulite ntụkwasị obi ma na-agbaso iwu." },
      { objective: "O6", q: "Aha onye dị n'ọrụ AI nyere aka mee nke ị na-ekesa?", options: ["Aha gị", "Aha AI", "Aha IT", "Ọ dịghị onye"], answer: 0, why: "Ị na-aza maka ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 8, 9, 10, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Iwu ụlọ ọrụ", objective: "O1", notYet: "E deghị iwu ọ bụla, ma ọ bụ iwu na-ekwe ka ozi onwe banye n'ime ngwa AI.", meets: "Iwu atọ kacha mkpa site n'iwu AI ebe ọrụ, ma ọ bụ iwu atọ n'enweghị nsogbu.", exceeds: "Na-ekwu ebe iwu ahụ dị na onye a ga-ajụ maka ya." },
      { name: "Email doro anya", objective: "O2", notYet: "Email ahụ edoghị anya, ma ọ bụ otu eziokwu ezighi ezi.", meets: "Email doro anya site na ndetu ọsọ ọsọ, ebe e lelere eziokwu megide ndetu ahụ.", exceeds: "Onye na-amụ ihe rịọrọ maka otu mgbanwe ma mee ka ọ dị ka okwu ya." },
      { name: "Nchịkọta na ihe a ga-eme", objective: "O4", notYet: "Isi okwu erughị ise, ma ọ bụ ihe a ga-eme enweghị ndị ga-eme ha.", meets: "Isi okwu ise na ihe atọ a ga-eme nwere ndị ga-eme ha, e lelere megide akwụkwọ mbụ.", exceeds: "Ihe a ga-eme nwekwara ụbọchị njedebe, a chọtakwara ma tinye ihe a hapụrụ." },
      { name: "Formula e nwalere", objective: "O5", notYet: "E nwaleghị formula ahụ ma ọ bụ ọ na-enye azịza ezighi ezi.", meets: "Formula na-arụ ọrụ e nwalere megide azịza e ji aka gụpụta.", exceeds: "Onye na-amụ ihe nwere ike ịkọwa ihe akụkụ ọ bụla nke formula ahụ na-eme." },
      { name: "Nlele tupu ikesa", objective: "O6", notYet: "Enweghị ndetu nke ihe e lelere.", meets: "Ihe ọ bụla nwere ndetu nke nlele Eziokwu, Ndabara, Nchekwa na Isi iyi.", exceeds: "Ndetu ahụ na-akpọ aha otu mgbanwe kpọmkwem e mere mgbe nlele gasịrị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha na-eji ngwa AI a kwadoro maka ọrụ kwa izu, ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe ma ọ bụ ndị isi kwuru na ha chekwara oge n'email, nchịkọta ma ọ bụ spreadsheet",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọrụ Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Ngwa AI ebe ọrụ kwere, ma ọ bụ ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) nwere ozi e chepụtara echepụta maka ndị na-achọ ọrụ",
      "Spreadsheet n'efu: Google Sheets ma ọ bụ Microsoft Excel n'ịntanetị",
      "Ogologo akwụkwọ ọmụmaatụ ma ọ bụ ndetu nzukọ na-enweghị ozi nzuzo",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'otu ìgwè n'ebe ọrụ, bute iwu AI nke onye were ha n'ọrụ na nnọkọ mbụ ma gụkọọ ya ọnụ.",
      "Nye ndetu, akwụkwọ na ozi spreadsheet ọmụmaatụ ka onye ọ bụla ghara iji ozi nzuzo.",
      "Ngwa dị n'ime ya dị iche dabere n'atụmatụ; jikere ngwa enyemaka AI n'efu maka ndị akaụntụ ha enweghị ya.",
      "Mee ka ndị na-amụ ihe gbanwerịta ihe ha mere ma mee nlele Eziokwu, Ndabara, Nchekwa na Isi iyi n'ọrụ ibe ha.",
      "Jiri rubric tụọ akara ọrụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

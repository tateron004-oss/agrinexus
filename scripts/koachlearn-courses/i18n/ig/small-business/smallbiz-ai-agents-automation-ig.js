"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-agents-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-ai-agents-automation-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "Ndị Ọrụ AI (AI Agents) maka Ime ka Ọrụ Azụmahịa Na-eme Onwe Ya",
  skills: "Ịmata ọdịiche dị n'etiti automation na AI agent, Ide nzọụkwụ ọ bụla nke ọrụ a na-emegharị, Ịhazi workflow nwere trigger na action, Itinye nkwado mmadụ, Ịnwale ya site na data nnwale, Idebe ndekọ na ilekọta ya",
  outcome: "ịhazi, iwu ma nwalee n'enweghị nsogbu otu automation dị mfe maka azụmahịa gị, dị ka ime ka ajụjụ ọhụrụ si na fọm weebụsaịtị ghọọ ahịrị na spreadsheet, azịza e debere maka gị na ncheta, na nzọụkwụ ebe mmadụ na-akwado tupu e zipu ihe ọ bụla, nnwale site na data nnwale, na ndekọ ị na-elele kwa izu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na-eme otu ọrụ kọmputa ahụ kwa ụbọchị: idetuo azịza fọm na sheet, iziga otu ozi email nsochi ahụ, ime akwụkwọ ụgwọ (invoice), na ịhazi ajụjụ ndị ahịa. Ọmụmaatụ sitere n'ụlọ ahịa, ụlọ nri, ụlọ isi ntutu, ọrụ nhicha na ndozi, na obere ọfịs.",
    "Ị ga-amụta ọdịiche dị n'etiti automation dị mfe na AI agent, ide nzọụkwụ nke ọrụ, ịhazi workflow nwere trigger na action, ma wuo otu site na ngwa no-code dị ka Zapier, Make ma ọ bụ Microsoft Power Automate, ma ọ bụ site n'ihe automation dị na ngwa ị na-ejibu. Nke kacha mkpa, ị ga-ahụ na mmadụ ka na-achị ya.",
    "Ngwa ndị a na-agbanwe ihuenyo na ọnụ ahịa ha mgbe niile, ya mere anyị na-akọwa ihe ị ga-eme kama aha menu kpọmkwem; lelee weebụsaịtị ngwa ọ bụla maka atụmatụ n'efu ọ nwere ugbu a. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo otu automation na-arụ ọrụ maka ezi ọrụ ị na-emegharị: dee ndepụta nzọụkwụ, họrọ trigger na action, tinye nzọụkwụ nkwado mmadụ tupu e zipu ma ọ bụ kwụọ ihe ọ bụla, nwalee ya site na ihe nnwale atọ (enweghị ezi data onye ahịa), dozie ihe mebiri emebi, ma hazie ndekọ dị mfe na nlele kwa izu. Dee nkọwa otu peeji banyere ya ka onye ọzọ nwee ike ịghọta ya ma ọ bụ gbanyụọ ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na-eme otu ọrụ kọmputa ahụ kwa ụbọchị, dị ka idetuo azịza fọm na sheet, iziga otu email nsochi ahụ, ime invoice na ịhazi ajụjụ ndị ahịa, n'ụlọ ahịa, ụlọ nri, ụlọ isi ntutu, ọrụ nhicha na ndozi, na obere ọfịs.",
    startingPoint: "Ha na-eji email, fọm weebụ ma ọ bụ ngwa ndokwa oge (booking), na spreadsheet, ụfọdụ anwalekwala ngwa enyemaka AI. Ọtụtụ n'ime ha ewubeghị automation ma ọ bụ jiri ngwa automation no-code mgbe ọ bụla.",
    gap: "Ọrụ a na-emegharị na-ewe ọtụtụ awa kwa izu, mperi na-abatakwa mgbe ike gwụrụ ndị mmadụ. Ndị na-amụ ihe kwesịrị ime ka nzọụkwụ nkịtị na-eme onwe ha n'enweghị nsogbu, ebe mmadụ na-akwado ihe ọ bụla a na-eziga ma ọ bụ na-akwụ ụgwọ ya, ka ha chekwaa oge n'atụfughị ike ha n'ebe ndị ahịa, ego ma ọ bụ ndekọ dị.",
    constraints: [
      "Ngwa no-code n'efu ma ọ bụ dị ọnụ ala; atụmatụ n'efu nwere oke na-agbanwe, ya mere ndị na-amụ ihe na-elele weebụsaịtị ngwa ọ bụla",
      "Enweghị ezi data onye ahịa na nnwale; naanị ihe nnwale",
      "Mmadụ na-akwado ihe ọ bụla na-emefu ego, na-eziga ozi nye ndị ahịa ma ọ bụ na-agbanwe ndekọ",
      "Nchekwa: ịbanye nzọụkwụ abụọ, ohere dị ntakịrị, enweghị nọmba kaadị ma ọ bụ okwuntughe na nzọụkwụ AI",
      "Oge: ihe dị ka nkeji 60 n'ozuzu, na nkuzi nkeji 5"
    ],
    prerequisites: "Inwe obi ike n'iji email na spreadsheet. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu ọrụ azụmahịa", action: "ịkọwa ma automation a kapụrụ akapụ ma ọ bụ nzọụkwụ AI dabara ya, na akụkụ ndị ga-anọgide n'aka mmadụ", standard: "ebe ego, ozi nye ndị ahịa na mgbanwe ndekọ na-anọgide n'aka mmadụ" },
    { id: "O2", condition: "Mgbe e nyere gị otu ọrụ ị na-emegharị ugboro ugboro", action: "ide ndepụta nzọụkwụ ma kaa nzọụkwụ ọ bụla akara Iwu, Okwu, Mkpebi ma ọ bụ Ego ma ọ bụ iziga", standard: "ebe nzọụkwụ ọ bụla ị na-eme taa dị n'ime ya" },
    { id: "O3", condition: "Site n'iji ndepụta nzọụkwụ gị", action: "ịhazi workflow nwere trigger, action na nzọụkwụ nkwado mmadụ, e sere n'akwụkwọ", standard: "ebe nkwado dị tupu ihe ọ bụla apụọ n'azụmahịa ahụ" },
    { id: "O4", condition: "Site n'iji ngwa automation no-code", action: "iwu workflow ahụ, jikọọ akaụntụ gị ma hazie field ndị ahụ", standard: "ebe nzọụkwụ AI na-enweta naanị field ndị ọ chọrọ ma na-ezigara gị ihe o dere" },
    { id: "O5", condition: "Mgbe e nyere gị ihe nnwale atọ e chepụtara echepụta", action: "ịnwale automation ahụ ma dozie ihe mebiri emebi, otu mgbanwe n'otu oge", standard: "ruo mgbe ihe nkịtị, ihe nwere field na-efu efu na ihe nwere ederede dị iche gafere" },
    { id: "O6", condition: "Ozugbo automation ahụ malitere ịrụ ọrụ", action: "ịhazi ndekọ, nlele kwa izu na nkọwa otu peeji na-ekwu otu esi agbanyụ ya", standard: "ka onye ọzọ nwee ike ịghọta ya ma ọ bụ kwụsị ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịghọta na ịhazi automation",
      lessons: [
        {
          objectives: ["O1"],
          title: "Automation na AI agent: gịnị bụ ọdịiche?",
          minutes: 5,
          goal: "Kọwaa ọdịiche dị n'etiti automation a kapụrụ akapụ na AI agent, na mgbe nke ọ bụla dabara.",
          text: [
            "Automation na-agbaso iwu a kapụrụ akapụ nke ị tọrọ: \"Mgbe e zipuru fọm ọhụrụ, tinye ahịrị na sheet m ma zitere m email.\" Ọ na-eme otu ihe ahụ oge niile. A na-ama ihe ọ ga-eme, ọ dịkwa mfe ilele.",
            "AI agent bụ usoro AI nwere ike ikpebi ụfọdụ nzọụkwụ nke ya iji ruo otu ebumnuche, dị ka ịgụ ajụjụ, ikpebi ụdị ajụjụ ọ bụ, ide azịza na ịhọrọ ngwa ọ ga-eji ọzọ. Agent na-agbanwe agbanwe karị mana a naghị ama ihe ọ ga-eme nke ọma, ọ nwekwara ike ime mperi ma dị ka o ji n'aka.",
            "Maka obere azụmahịa, malite n'automation a kapụrụ akapụ, wee tinye AI n'otu nzọụkwụ ebe ịtụ uche n'okwu na-enyere aka, dị ka ide azịza ma ọ bụ ịhazi ozi. Hapụ ndị mmadụ ka ha chịa ihe ọ bụla na-emefu ego, na-eziga ozi nye ndị ahịa ma ọ bụ na-agbanwe ndekọ."
          ],
          words: [["Automation", "usoro nzọụkwụ a kapụrụ akapụ nke kọmputa na-eme n'onwe ya mgbe ihe mere."], ["AI agent", "usoro AI nwere ike ịhọrọ ụfọdụ nzọụkwụ nke ya iji ruo otu ebumnuche."], ["Workflow", "usoro nzọụkwụ na-emecha otu ọrụ."]],
          slides: [
            { title: "Automation", bullets: ["Iwu a kapụrụ akapụ nke ị tọrọ", "Otu nsonaazụ ahụ oge niile", "A na-ama ihe ọ ga-eme, ọ dịkwa mfe ilele"] },
            { title: "AI agent", bullets: ["Ọ na-ahọrọ ụfọdụ nzọụkwụ nke ya", "Ọ na-agbanwe agbanwe, mana a naghị ama ihe ọ ga-eme nke ọma", "O nwere ike ihie ụzọ ma dị ka o ji n'aka"] },
            { title: "Malite n'ihe dị mfe", bullets: ["Buru ụzọ were automation a kapụrụ akapụ", "Tinye AI n'otu nzọụkwụ ide okwu", "Ndị mmadụ na-akwado ego, ozi na ndekọ"] }
          ],
          tryIt: "Dee ọrụ abụọ ị na-emegharị n'azụmahịa gị. Maka nke ọ bụla, dee ma automation a kapụrụ akapụ nwere ike ime ya, ma ọ bụ ma ọ chọrọ ịtụ uche (nzọụkwụ AI nwere ike ịba uru).",
          youCanNow: "ịkọwa ọdịiche dị n'etiti automation na AI agent ma họrọ nke kacha enweghị nsogbu.",
          quickCheck: [
            { objective: "O1", q: "Kedu adịghị ike AI agent nwere ma e jiri ya tụnyere automation a kapụrụ akapụ?", options: ["A naghị ama ihe ọ ga-eme nke ọma, ọ nwekwara ike ime mperi ma dị ka o ji n'aka", "Ọ pụghị iji okwu mgbe ọ bụla", "Ọ na-arụ ọrụ naanị n'abalị", "Ọ dịghị ihe ọ na-efu"], answer: 0, why: "Agent na-agbanwe agbanwe karị mana a naghị ama ihe ọ ga-eme nke ọma, o nwekwara ike ihie ụzọ ma dị ka o ji n'aka." },
            { objective: "O1", q: "Ị chọrọ ka AI zaa ajụjụ ndị ahịa ma kwụọ ụgwọ invoice ndị na-ere gị ngwa n'onwe ya. Gịnị ka ị ga-eme?", options: ["Hapụ AI agent ka o mee ha abụọ", "Hapụ AI ka o dee azịza, ma hapụ ịkwụ ụgwọ na iziga n'aka mmadụ", "Gbanyụọ automation niile", "Hapụ AI ka ọ kwụọ ụgwọ mana ọ gaghị aza ajụjụ"], answer: 1, why: "Hapụ ndị mmadụ ka ha chịa imefu ego na iziga ozi nye ndị ahịa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide nzọụkwụ ọ bụla nke ọrụ a na-emegharị",
          minutes: 5,
          goal: "Kewaa otu ọrụ a na-emegharị ka ọ bụrụ ndepụta nzọụkwụ doro anya.",
          text: [
            "Ị pụghị ime ka ihe ị na-edeghị ede na-eme onwe ya. Họrọ otu ọrụ ị na-emekarị ma dee nzọụkwụ ọ bụla otu ị na-eme ya taa. Ọmụmaatụ maka ọrụ nhicha: (1) ajụjụ si na fọm weebụ bịa, (2) m detuo aha, adreesị na ụdị ọrụ na sheet m, (3) m dee azịza nwere ọnụ ahịa m, (4) m tinye ncheta ịkpọghachi, (5) m ziga ọnụ ahịa (quote) ahụ.",
            "Kaa nzọụkwụ ọ bụla akara: Iwu (otu ihe ahụ oge niile), Okwu (chọrọ ide ihe ma ọ bụ ịtụ uche), Mkpebi (chọrọ onye nwe azụmahịa), Ego ma ọ bụ iziga (chọrọ nkwado).",
            "Nzọụkwụ e kara akara Iwu nwere ike ime onwe ha. Nzọụkwụ Okwu nwere ike inweta ihe AI dere. Nzọụkwụ Mkpebi na Ego ma ọ bụ iziga na-anọgide n'aka mmadụ."
          ],
          steps: ["Họrọ ọrụ ị na-eme opekata mpe otu ugboro n'izu.", "Dee nzọụkwụ ọ bụla otu ị na-eme ya ugbu a.", "Kaa nke ọ bụla akara: Iwu, Okwu, Mkpebi, Ego ma ọ bụ iziga.", "Gbaa nzọụkwụ Iwu gburugburu ka ị buru ụzọ mee ka ha na-eme onwe ha."],
          words: [["Ndepụta nzọụkwụ (step map)", "ndepụta nwere nọmba nke nzọụkwụ ọ bụla dị n'otu ọrụ."], ["Aka (manual)", "ihe mmadụ ji aka ya na-eme."]],
          slides: [
            { title: "Dee ya tupu i mee ka ọ na-eme onwe ya", bullets: ["Họrọ otu ọrụ ị na-emekarị", "Depụta nzọụkwụ ọ bụla otu ị na-eme ya taa"] },
            { title: "Kaa nzọụkwụ ọ bụla akara", bullets: ["Iwu: otu ihe ahụ oge niile", "Okwu: ide ihe ma ọ bụ ịtụ uche", "Mkpebi / Ego ma ọ bụ iziga: mmadụ"] },
            { title: "Ihe na-eme onwe ya", bullets: ["Nzọụkwụ Iwu: automation", "Nzọụkwụ Okwu: ihe AI dere", "Nzọụkwụ mkpebi na ego: ndị mmadụ"] }
          ],
          tryIt: "Dee ndepụta nzọụkwụ maka otu ọrụ ị na-emegharị n'azụmahịa gị ma kaa nzọụkwụ ọ bụla akara Iwu, Okwu, Mkpebi ma ọ bụ Ego/iziga.",
          youCanNow: "ikewa ọrụ a na-emegharị ka ọ bụrụ ndepụta nzọụkwụ na-egosi ihe nwere ike ime onwe ya.",
          quickCheck: [
            { objective: "O2", q: "Kedu nzọụkwụ na-anọgide n'aka mmadụ?", options: ["Nzọụkwụ Iwu", "Nzọụkwụ Okwu", "Nzọụkwụ Mkpebi na Ego ma ọ bụ iziga", "Nzọụkwụ niile"], answer: 2, why: "Nzọụkwụ Mkpebi na Ego ma ọ bụ iziga na-anọgide n'aka mmadụ; nzọụkwụ Iwu nwere ike ime onwe ha." },
            { objective: "O2", q: "Ị chọrọ ime ka otu i si elekọta ajụjụ ọhụrụ na-eme onwe ya. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zụta ngwa kacha dị oke ọnụ", "Rịọ AI ka o chee otu i si arụ ọrụ", "Malite iwu ya ozugbo", "Dee nzọụkwụ ọ bụla otu ị na-eme ya taa"], answer: 3, why: "Ị pụghị ime ka ihe ị na-edeghị ede na-eme onwe ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi workflow: trigger, action, nkwado",
          minutes: 5,
          goal: "Hazie workflow nwere trigger, action na nzọụkwụ nkwado mmadụ.",
          text: [
            "Automation ọ bụla nwere trigger (ihe na-amalite ya) na action (ihe na-esote). Trigger: \"e zipuru fọm ọhụrụ\". Action: \"tinye ahịrị na sheet\", \"jiri AI dee azịza\", \"zitere m ihe e dere ka m kwado ya\", \"mepụta ncheta na kalenda\".",
            "Tinye nkwado mmadụ tupu ihe ọ bụla apụọ n'azụmahịa: ozi nye ndị ahịa, ịkwụ ụgwọ, mgbanwe ọnụ ahịa, ihichapụ ndekọ. Automation ahụ nwere ike ịkwado ihe niile; gị na-apị \"send\".",
            "Buru ụzọ see ya dị ka igbe na akụ n'akwụkwọ. Kpọọ aha ngwa maka igbe ọ bụla: ngwa fọm gị, Google Sheets ma ọ bụ Excel, nzọụkwụ AI, email gị, kalenda gị. Lelee na ngwa ọ bụla na-ejikọ na ọrụ njikọ (connector) ị chọrọ iji."
          ],
          steps: ["Dee trigger ahụ.", "Depụta action ndị ahụ n'usoro.", "Tinye nzọụkwụ nkwado tupu e zipu ma ọ bụ kwụọ ihe ọ bụla.", "See ya dị ka igbe na akụ.", "Kpọọ aha ngwa maka igbe ọ bụla ma lelee na ọ na-ejikọ."],
          words: [["Trigger", "ihe mere nke na-amalite automation."], ["Action", "nzọụkwụ automation na-eme mgbe trigger mechara."], ["Nzọụkwụ nkwado (approval step)", "ebe mmadụ ga-ekwerịrị tupu workflow ahụ aga n'ihu."]],
          slides: [
            { title: "Trigger na action", bullets: ["Trigger: e zipuru fọm ọhụrụ", "Action: tinye ahịrị, AI dee azịza, chetara m"] },
            { title: "Nkwado mmadụ", bullets: ["Tupu ozi apụọ n'azụmahịa", "Tupu ịkwụ ụgwọ, mgbanwe ọnụ ahịa ma ọ bụ ihichapụ ihe", "Automation na-akwado ya; gị na-apị send"] },
            { title: "Buru ụzọ see ya", bullets: ["Igbe na akụ n'akwụkwọ", "Kpọọ aha ngwa maka igbe ọ bụla", "Lelee na ngwa ọ bụla na-ejikọ"] }
          ],
          tryIt: "See workflow maka ọrụ gị si na Nkuzi 2: trigger, action, na nzọụkwụ nkwado. Dee aha ngwa n'ime igbe ọ bụla.",
          youCanNow: "ịhazi workflow nwere trigger, action na nzọụkwụ nkwado mmadụ.",
          quickCheck: [
            { objective: "O3", q: "N'ime workflow, gịnị bụ \"action\"?", options: ["Ihe na-eme mgbe trigger mechara", "Ihe na-amalite ya", "Okwuntughe gị", "Ọnụ ahịa ngwa ahụ"], answer: 0, why: "Trigger na-amalite automation; action bụ ihe na-esote." },
            { objective: "O3", q: "N'atụmatụ gị, nzọụkwụ AI na-ezigara ndị ahịa email ozugbo. Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe; ọ na-echekwa oge", "Zitere gị ihe e dere ka i kwado ya tupu ọ ruo onye ahịa", "Wepụ trigger ahụ", "Tinye nzọụkwụ AI nke abụọ ka o lelee nke mbụ"], answer: 1, why: "Nkwado mmadụ na-abịa tupu ihe ọ bụla apụọ n'azụmahịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịghọta na ịhazi automation",
        questions: [
          { objective: "O1", q: "Kedu nke kacha kọwaa automation a kapụrụ akapụ?", options: ["Ọ na-ahọrọ ebumnuche nke ya", "Ọ na-agbaso iwu ị tọrọ ma na-eme otu ihe ahụ oge niile", "Ọ bụ mmadụ", "Ọ naghị arụ ọrụ mgbe ọ bụla"], answer: 1, why: "Automation na-agbaso iwu a kapụrụ akapụ." },
          { objective: "O1", q: "Kedu nke a na-ama ihe ọ ga-eme karị?", options: ["Ọ dịghị nke ọ bụla na-arụ ọrụ", "AI agent", "Ha na-adị otu oge niile", "Automation a kapụrụ akapụ"], answer: 3, why: "Agent na-ahọrọ nzọụkwụ, a naghịkwa ama ihe ọ ga-eme nke ọma." },
          { objective: "O2", q: "Na ndepụta nzọụkwụ, a na-akara \"ziga ọnụ ahịa (quote)\":", options: ["Ego ma ọ bụ iziga: chọrọ nkwado", "Iwu: mee ka ọ na-eme onwe ya kpamkpam", "Leghara ya anya", "Hichapụ ya"], answer: 0, why: "Ihe ọ bụla e ziga nye onye ahịa chọrọ nkwado mmadụ." },
          { objective: "O3", q: "Gịnị bụ trigger?", options: ["Okwuntughe", "Nzọụkwụ ikpeazụ", "Ihe mere nke na-amalite automation", "Ọnụ ahịa"], answer: 2, why: "Trigger na-amalite workflow." },
          { objective: "O3", q: "Ebee ka nzọụkwụ nkwado na-aga?", options: ["Ọ dịghị ebe", "Mgbe onye ahịa natachara ya", "Tupu ihe ọ bụla apụọ n'azụmahịa", "Naanị na njedebe afọ"], answer: 2, why: "Kwado tupu iziga, ịkwụ ụgwọ ma ọ bụ ihichapụ ihe." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu, ịnwale na iji ya n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iwu ya site na ngwa no-code",
          minutes: 6,
          goal: "Wuo workflow gị na ngwa automation no-code.",
          text: [
            "Ngwa no-code na-ekwe ka ị wuo automation site n'ịhọrọ ihe na menu kama ide koodu. Ndị a na-ahụkarị bụ Zapier, Make na Microsoft Power Automate. Ụfọdụ ngwa ị na-ejibu, dị ka ngwa fọm, booking ma ọ bụ email gị, nwere automation dị mfe n'ime ha. Lelee weebụsaịtị ngwa ọ bụla maka atụmatụ n'efu ya na oke ya.",
            "Usoro ahụ bụ otu ebe niile: mepụta automation ọhụrụ, họrọ app na ihe mere maka trigger, banye (sign in) ka i jikọọ akaụntụ gị, wee tinye action ọ bụla ma hazie field ndị ahụ (dịka ọmụmaatụ, \"Name\" nke fọm na-aga na kọlụm \"Name\" nke sheet).",
            "Maka nzọụkwụ AI, ọtụtụ ngwa nwere action na-eziga ederede nye AI model ma weghachite ihe o dere. Gwa ya kpọmkwem ihe ọ ga-ede ma nye ya naanị field ndị ọ chọrọ. Zitere onwe gị ihe o dere, ọ bụghị ozugbo nye onye ahịa."
          ],
          steps: ["Mepụta automation ọhụrụ na ngwa ị họrọ.", "Họrọ app na ihe mere maka trigger; jikọọ akaụntụ gị.", "Tinye action ọ bụla ma hazie field ndị ahụ.", "Tinye nzọụkwụ AI ide ihe, nwere ntụziaka doro anya na naanị field ndị ọ chọrọ.", "Zitere onwe gị ihe e dere ka i kwado ya."],
          words: [["No-code", "iwu sọftụwia site n'ịhọrọ ihe kama ide koodu."], ["Ịhazi field (field mapping)", "ịgwa ngwa ahụ ebe ozi ọ bụla ga-aga."], ["Ijikọ akaụntụ", "ikwe ka ngwa automation jiri otu n'ime app gị, mgbe i banyechara."]],
          slides: [
            { title: "Ngwa no-code", bullets: ["Zapier, Make, Microsoft Power Automate", "Automation dị n'ime app ị na-eji", "Lelee weebụsaịtị ọ bụla maka oke atụmatụ n'efu"] },
            { title: "Otu usoro ahụ", bullets: ["Họrọ app na ihe mere maka trigger", "Jikọọ akaụntụ gị", "Tinye action ma hazie field ndị ahụ"] },
            { title: "Nzọụkwụ AI", bullets: ["Ntụziaka doro anya", "Naanị field ndị ọ chọrọ", "Ihe o dere na-abịakwute gị, ọ bụghị onye ahịa"] }
          ],
          tryIt: "Wuo workflow gị n'atụmatụ n'efu nke ngwa no-code (ma ọ bụ n'akwụkwọ ma ọ bụrụ na ị pụghị ịdebanye aha ugbu a): trigger, ịhazi field maka action ọ bụla, na ihe AI dere e zitere gị.",
          youCanNow: "iwu workflow nwere trigger na action na ngwa automation no-code.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ngwa no-code na-ekwe ka i mee?", options: ["Ide koodu ngwa ngwa", "Inweta ndepụta ndị ahịa n'efu", "Iwu automation site n'ịhọrọ ihe na menu", "Ịghara ịbanye n'app gị"], answer: 2, why: "Ngwa no-code na-ekwe ka ị wuo automation site na menu kama ide koodu." },
            { objective: "O4", q: "Fọm ahụ nwere field 12 mana AI chọrọ naanị aha na ụdị ọrụ iji dee azịza. Gịnị ka ị ga-ezigara ya?", options: ["Field 12 niile ka o doo anya", "Nọmba kaadị onye ahịa kwa", "Ọ dịghị ihe", "Naanị aha na ụdị ọrụ"], answer: 3, why: "Nye nzọụkwụ AI naanị field ndị ọ chọrọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnwale site na data nnwale na idozi ihe mebiri emebi",
          minutes: 5,
          goal: "Nwalee automation ahụ site n'ihe nnwale ma dozie mperi tupu ọ malite ịrụ ọrụ n'ezie.",
          text: [
            "Enwala ya na ezi ndị ahịa mgbe ọ bụla. Mee ihe nnwale atọ nwere aha e chepụtara echepụta dị ka \"Test Customer\" na email nnwale nke gị. Tinye otu ihe nkịtị, otu nwere field na-efu efu, na otu nwere ederede dị iche (dị ogologo nke ukwuu, n'asụsụ ọzọ, emoji).",
            "Mee nke ọ bụla ma lelee nzọụkwụ ọ bụla: ahịrị ahụ ọ banyere na kọlụm ziri ezi? Ihe AI dere ọ nwere isi ma nọrọ n'isiokwu? Nkwado ahụ ọ ruru gị? Ihe ọ bụla e zipuru nke na-ekwesịghị?",
            "Dozie otu ihe n'otu oge ma nwalee ọzọ. Nsogbu a na-ahụkarị: ịhazi field ezighi ezi, nzọụkwụ na-ada mgbe field tọgbọrọ chakoo, ihe AI dere na-echepụta ọnụ ahịa. Dozie ntụziaka ahụ (\"Jiri naanị ọnụ ahịa dị na field; echepụtala ọnụ ahịa\") ma nwalee ọzọ."
          ],
          steps: ["Mee ihe nnwale atọ: nkịtị, field na-efu efu, ederede dị iche.", "Mee ka nke ọ bụla gafee n'automation ahụ.", "Lelee nsonaazụ nzọụkwụ ọ bụla.", "Dozie otu nsogbu n'otu oge ma nwalee ọzọ.", "Malite ịrụ ọrụ n'ezie naanị mgbe atọ niile gafere."],
          words: [["Data nnwale (sample data)", "ozi e chepụtara echepụta e ji anwale ihe."], ["Edge case", "ihe dị iche nke nwere ike imebi usoro, dị ka field tọgbọrọ chakoo."], ["Go live", "ịgbanye automation ahụ maka ezi ọrụ."]],
          slides: [
            { title: "Nwalee site na data e chepụtara echepụta", bullets: ["\"Test Customer\" na email nnwale nke gị", "Nkịtị, field na-efu efu, ederede dị iche"] },
            { title: "Lelee nzọụkwụ ọ bụla", bullets: ["Kọlụm ziri ezi?", "Ihe AI dere nwere isi ma nọrọ n'isiokwu?", "Nkwado ruru gị? Ọ dịghị ihe e zipuru na mperi?"] },
            { title: "Dozie ma nwalee ọzọ", bullets: ["Otu ndozi n'otu oge", "Gwa nzọụkwụ AI ka ọ ghara ịchepụta ọnụ ahịa", "Malite ịrụ ọrụ mgbe atọ niile gafere"] }
          ],
          tryIt: "Mee ka ihe nnwale atọ gafee n'automation gị (ma ọ bụ gaa na ha n'atụmatụ akwụkwọ gị). Dee ihe mere na nzọụkwụ ọ bụla na otu ndozi.",
          youCanNow: "ịnwale automation n'enweghị nsogbu ma dozie nsogbu tupu ọ metụ ezi ndị ahịa.",
          quickCheck: [
            { objective: "O5", q: "Kedu ọmụmaatụ ihe nnwale nwere ederede dị iche?", options: ["Ozi dị ogologo nke ukwuu nwere emoji", "Ajụjụ nkịtị", "Fọm tọgbọrọ chakoo", "Arịrịọ ezi onye ahịa"], answer: 0, why: "Ihe nnwale nwere ederede dị iche nwere ederede dị ogologo nke ukwuu, asụsụ ọzọ ma ọ bụ emoji." },
            { objective: "O5", q: "Nnwale na-ada mgbe field nọmba ekwentị tọgbọrọ chakoo. Gịnị ka ị ga-eme?", options: ["Malite ịrụ ọrụ n'ezie n'agbanyeghị", "Dozie otu nzọụkwụ ahụ ma nwalee ọzọ", "Gbanwee ihe ise n'otu oge", "Nwalee naanị na ezi ndị ahịa"], answer: 1, why: "Dozie otu ihe n'otu oge ma nwalee ọzọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji ya n'enweghị nsogbu: ndekọ, nlekọta na ụzọ isi gbanyụọ ya",
          minutes: 5,
          goal: "Hazie ndekọ, nlele kwa izu na ụzọ isi gbanyụọ automation ahụ.",
          text: [
            "Ozugbo ọ malitere ịrụ ọrụ, nọgide na-ele ya anya. Ọtụtụ ngwa na-egosi akụkọ (history) nke oge ọ bụla ọ rụrụ ọrụ; lelee ya kwa izu maka mperi. Ị nwekwara ike itinye ahịrị ndekọ na sheet: ụbọchị, ihe malitere ya, ihe o mere, onye kwadoro ya.",
            "Dee nkọwa otu peeji: ihe automation ahụ na-eme, trigger na action ya, akaụntụ ndị ọ na-eji, onye na-akwado, na otu esi agbanyụ ya. Debe ya ebe onye ezinụlọ ma ọ bụ onye ọrụ nwere ike ịchọta ya.",
            "Chebe ohere: jiri ịbanye nzọụkwụ abụọ na ngwa automation na akaụntụ ndị e jikọrọ, nye ya ohere naanị n'ihe ọ chọrọ, wepụ nọmba kaadị na okwuntughe ndị ahịa na nzọụkwụ AI, ma wepụ ohere mgbe onye ọrụ hapụrụ."
          ],
          steps: ["Lelee akụkọ ọrụ (run history) kwa izu.", "Tinye ahịrị ndekọ maka oge ọ bụla ọ rụrụ ọrụ.", "Dee nkọwa otu peeji nwere ụzọ isi gbanyụọ ya.", "Gbanye ịbanye nzọụkwụ abụọ ma belata ohere.", "Kwa ọnwa, lelee ma ọ ka na-echekwa oge."],
          words: [["Akụkọ ọrụ (run history)", "ndepụta ngwa ahụ na-edebe nke oge ọ bụla automation rụrụ ọrụ."], ["Ndekọ (log)", "ihe e dere banyere ihe mere na mgbe o mere."], ["Ụzọ isi gbanyụọ ya (off switch)", "otu esi agbanyụ automation ngwa ngwa."]],
          slides: [
            { title: "Nọgide na-ele ya anya", bullets: ["Lelee run history kwa izu", "Ndekọ: ụbọchị, trigger, action, onye kwadoro"] },
            { title: "Nkọwa otu peeji", bullets: ["Ihe ọ na-eme na akaụntụ ndị ọ na-eji", "Onye na-akwado", "Otu esi agbanyụ ya"] },
            { title: "Chebe ohere", bullets: ["Ịbanye nzọụkwụ abụọ", "Naanị ohere dị mkpa", "Enweghị nọmba kaadị ma ọ bụ okwuntughe na nzọụkwụ AI"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa automation gị: ndepụta nzọụkwụ, workflow nwere nkwado, nnwale atọ gafere, ndekọ na nlele kwa izu, na nkọwa otu peeji nwere ụzọ isi gbanyụọ ya.",
          youCanNow: "iji automation azụmahịa n'enweghị nsogbu, na nkwado, nnwale, ndekọ na ụzọ isi gbanyụọ ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-aba n'ahịrị ndekọ na nkuzi a?", options: ["Nọmba kaadị ndị ahịa", "Okwuntughe gị", "Ụbọchị, trigger, ihe o mere na onye kwadoro", "Naanị okwu \"done\""], answer: 2, why: "Ahịrị ndekọ na-edekọ ụbọchị, trigger, ihe o mere na onye kwadoro ya." },
            { objective: "O6", q: "Onye ọrụ nyere aka ịkwado ihe e dere hapụrụ azụmahịa ahụ. Gịnị ka ị ga-eme?", options: ["Ọ dịghị ihe", "Kesaa okwuntughe gị na onye ọhụrụ", "Gbanyụọ ịbanye nzọụkwụ abụọ", "Wepụ ohere ya n'automation na akaụntụ ndị e jikọrọ"], answer: 3, why: "Wepụ ohere mgbe onye ọrụ hapụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu, ịnwale na iji ya n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Kedu nke bụ ngwa automation no-code?", options: ["Zapier", "Ngwa ntụtụ akwụkwọ (stapler)", "Igbe ego", "Igwe fax"], answer: 0, why: "Zapier na-ewu automation n'enweghị koodu." },
          { objective: "O4", q: "Gịnị bụ ịhazi field (field mapping)?", options: ["Ibipụta maapụ", "Ise ugbo", "Ịhọrọ okwuntughe", "Ịgwa ngwa ahụ ebe ozi ọ bụla ga-aga"], answer: 3, why: "Ọ na-ejikọ field fọm na kọlụm sheet." },
          { objective: "O5", q: "Kedu data ị ga-eji nwalee?", options: ["Ozi ezi ndị ahịa", "Ihe nnwale e chepụtara echepụta", "Nọmba kaadị", "Ịbanye n'ụlọ akụ gị"], answer: 1, why: "Enwala ya na ezi ndị ahịa mgbe ọ bụla." },
          { objective: "O5", q: "Ihe AI dere chepụtara ọnụ ahịa. Gịnị ka ị ga-edozi?", options: ["Ntụziaka nzọụkwụ AI, wee nwalee ọzọ", "Ọ dịghị ihe", "Ziga ya n'agbanyeghị", "Hichapụ azụmahịa ahụ"], answer: 0, why: "Ntụziaka doro anya na-ebelata eziokwu e chepụtara echepụta." },
          { objective: "O6", q: "Gịnị mere ị ga-eji dee nkọwa otu peeji nwere ụzọ isi gbanyụọ ya?", options: ["Maka ịchọ mma", "Ime ka ọ dị ogologo", "Ka onye ọzọ nwee ike ịghọta ya ma ọ bụ kwụsị ya", "Ọ baghị uru"], answer: 2, why: "Onye ọ bụla kwesịrị inwe ike ịgbanyụ ya ngwa ngwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ndị Ọrụ AI (AI Agents) maka Ime ka Ọrụ Azụmahịa Na-eme Onwe Ya",
    questions: [
      { objective: "O1", q: "AI agent bụ:", options: ["Mmadụ", "Usoro AI nwere ike ịhọrọ ụfọdụ nzọụkwụ nke ya", "Iwu a kapụrụ akapụ", "Igwe mbipụta"], answer: 1, why: "Agent na-ahọrọ nzọụkwụ iji ruo ebumnuche." },
      { objective: "O1", q: "Ebee ka obere azụmahịa kwesịrị ịmalite?", options: ["Mee ka ihe niile na-eme onwe ya n'otu oge", "Agent na-arụ ọrụ n'onwe ya kpamkpam nwere ohere n'ụlọ akụ", "Ọ dịghị ebe", "Automation a kapụrụ akapụ, wee otu nzọụkwụ AI"], answer: 3, why: "Buru ụzọ were ihe dị mfe nke a na-ama ihe ọ ga-eme." },
      { objective: "O1", q: "Kedu nke kwesịrị ịnọgide n'aka mmadụ mgbe niile?", options: ["Ịhazi ahịrị", "Idetuo fọm na sheet", "Itinye ncheta na kalenda", "Imefu ego"], answer: 3, why: "Mkpebi gbasara ego chọrọ mmadụ." },
      { objective: "O2", q: "Nzọụkwụ mbụ tupu i mee ka ihe na-eme onwe ya bụ:", options: ["Ịzụta ngwa", "Ide ndepụta nzọụkwụ nke ọrụ ahụ", "Ịgbanye ya", "Iwe mmadụ n'ọrụ"], answer: 1, why: "Ị pụghị ime ka ihe ị na-edeghị ede na-eme onwe ya." },
      { objective: "O2", q: "Nzọụkwụ \"Iwu\" bụ nke:", options: ["Gbasara ego", "Bụ nnukwu mkpebi", "Na-adị otu oge niile", "Edoghị anya"], answer: 2, why: "Nzọụkwụ Iwu nwere ike ime onwe ha." },
      { objective: "O2", q: "Nzọụkwụ \"Okwu\" nwere ike inweta:", options: ["Ihe AI dere", "Ịkwụ ụgwọ", "Ihichapụ ihe", "Ọ dịghị ihe"], answer: 0, why: "AI na-enyere aka n'ide ihe." },
      { objective: "O3", q: "\"E zipuru fọm ọhụrụ\" bụ ọmụmaatụ:", options: ["Ndekọ", "Action", "Trigger", "Okwuntughe"], answer: 2, why: "Ọ na-amalite workflow." },
      { objective: "O3", q: "\"Tinye ahịrị na sheet\" bụ ọmụmaatụ:", options: ["Action", "Trigger", "Nkwado", "Ụzọ isi gbanyụọ ya"], answer: 0, why: "Action na-esote trigger." },
      { objective: "O3", q: "N'ime workflow na-enweghị nsogbu, AI na-ede azịza nye ndị ahịa wee:", options: ["Ziga ha ozugbo nye ndị ahịa", "Zitere gị ha ka i kwado ha", "Hichapụ ha", "Tinye ha n'ihu ọha"], answer: 1, why: "Gị na-apị send." },
      { objective: "O3", q: "Gịnị mere ị ga-eji buru ụzọ see workflow n'akwụkwọ?", options: ["Ọ baghị uru", "Iwu chọrọ ya", "Naanị maka egwuregwu", "Ịhụ nzọụkwụ na ngwa ọ bụla tupu iwu ya"], answer: 3, why: "Ịhazi atụmatụ na-egbochi mperi." },
      { objective: "O4", q: "Mgbe i jikọrọ akaụntụ na ngwa automation, ị na-:", options: ["Ekwe ka ngwa ahụ jiri app ahụ mgbe i banyechara", "Ehichapụ app ahụ", "Ekesa ya n'ihu ọha", "Akwụ ụgwọ ntaramahụhụ"], answer: 0, why: "Njikọ na-enye ngwa ahụ ohere." },
      { objective: "O4", q: "Gịnị ka nzọụkwụ AI kwesịrị inweta?", options: ["Okwuntughe", "Data ndị ahịa niile", "Nọmba kaadị", "Naanị field ndị ọ chọrọ"], answer: 3, why: "Naanị data dị mkpa." },
      { objective: "O4", q: "Ebee ka ị na-elele oke atụmatụ n'efu nke ngwa?", options: ["Vidiyo ochie", "Ịkọ nkọ", "Ezi weebụsaịtị ngwa ahụ", "Onye asọmpi"], answer: 2, why: "Atụmatụ na-agbanwe." },
      { objective: "O5", q: "Edge case bụ:", options: ["Nkuku tebụl", "Ihe dị iche nke nwere ike imebi usoro ahụ", "Ihe nkịtị", "Okwuntughe"], answer: 1, why: "Nwalekwa ihe dị iche." },
      { objective: "O5", q: "Ihe nnwale ole kwesịrị ịgafe tupu ị malite ịrụ ọrụ n'ezie n'ihe ọmụmụ a?", options: ["Otu puku", "Efu", "Otu ezi onye ahịa", "Atọ: nkịtị, field na-efu efu, ederede dị iche"], answer: 3, why: "Ha na-ekpuchi nsogbu a na-ahụkarị." },
      { objective: "O5", q: "Dozie nsogbu site na:", options: ["Ileghara ha anya", "Ịgbanwe ihe niile n'otu oge", "Ịgbanwe otu ihe n'otu oge ma nwalee ọzọ", "Ịmalite ịrụ ọrụ n'ezie n'agbanyeghị"], answer: 2, why: "Otu ndozi n'otu oge na-egosi ihe rụrụ ọrụ." },
      { objective: "O6", q: "Run history na-egosi:", options: ["Oge ọ bụla automation rụrụ ọrụ", "Akụkọ browser gị", "Okwuntughe ndị ahịa", "Akwụkwọ ụtụ isi"], answer: 0, why: "Ọ na-enyere gị aka ịhụ mperi." },
      { objective: "O6", q: "Ugboro ole ka ị kwesịrị ilele automation na-arụ ọrụ?", options: ["Ọ dịghị mgbe", "Opekata mpe kwa izu", "Otu ugboro n'afọ ole na ole", "Naanị mgbe ndị ahịa mere mkpesa"], answer: 1, why: "Nlele mgbe niile na-ahụ nsogbu n'oge." },
      { objective: "O6", q: "Ịbanye nzọụkwụ abụọ n'akaụntụ automation:", options: ["Ọ dịghị ihe bara uru ọ na-eme ka ọ dị nwayọọ", "Na-eme ka ọ sie ike ịbanye na ha n'ike", "Anaghị ekwe ya", "Na-ekesa okwuntughe gị"], answer: 1, why: "Ọ na-agbakwunye nlele nke abụọ." },
      { objective: "O6", q: "Kwa ọnwa, ị kwesịrị ịjụ ma automation ahụ:", options: ["Ka na-echekwa oge", "Nwere aha mara mma", "Na-eji app ndị ọzọ", "Ewu ewu"], answer: 0, why: "Ọ bụrụ na ọ naghị enyere aka ọzọ, gbanwee ya ma ọ bụ kwụsị ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      6,
      8,
      11,
      14,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ndepụta nzọụkwụ",
        objective: "O2",
        notYet: "Nzọụkwụ ụfọdụ adịghị ma ọ bụ e kaghị ha akara.",
        meets: "E depụtara nzọụkwụ ọ bụla nke ọrụ ahụ ma kaa ya akara Iwu, Okwu, Mkpebi ma ọ bụ Ego ma ọ bụ iziga.",
        exceeds: "Ọ na-edekwa oge nzọụkwụ ọ bụla na-ewe taa."
      },
      {
        name: "Nhazi workflow",
        objective: "O3",
        notYet: "Enweghị nzọụkwụ nkwado, ma ọ bụ e zipuru ma ọ bụ kwụọ ihe n'enweghị mmadụ.",
        meets: "Trigger, action na nkwado mmadụ tupu ihe ọ bụla apụọ n'azụmahịa.",
        exceeds: "Igbe ọ bụla na-akpọ aha ngwa ya, e lelekwara njikọ ndị ahụ."
      },
      {
        name: "Ihe e wuru na-arụ ọrụ",
        objective: "O4",
        notYet: "Automation ahụ anaghị arụ ọrụ ma ọ bụ field na-aga n'ebe ezighi ezi.",
        meets: "Ọ na-amalite site na trigger, na-ahazi field nke ọma, ma na-ezigara gị ihe AI dere.",
        exceeds: "Nzọụkwụ AI na-enweta naanị field ndị ọ chọrọ ma nwee ntụziaka doro anya."
      },
      {
        name: "E nwalere ma dozie ya",
        objective: "O5",
        notYet: "E nwalere ya na ezi data onye ahịa ma ọ bụ site n'ihe na-erughị atọ.",
        meets: "Ihe nnwale nkịtị, nke nwere field na-efu efu na nke nwere ederede dị iche niile gafere mgbe e dozichara.",
        exceeds: "Ọ na-edepụta nsogbu ọ bụla a hụrụ na otu mgbanwe dozire ya."
      },
      {
        name: "Iji ya n'enweghị nsogbu",
        objective: "O6",
        notYet: "Enweghị ndekọ, nlele kwa izu ma ọ bụ ụzọ isi gbanyụọ ya.",
        meets: "Ndekọ, nlele kwa izu na nkọwa otu peeji nwere ụzọ isi gbanyụọ ya.",
        exceeds: "Ịbanye nzọụkwụ abụọ gbanyere, ohere ejedebekwara n'ihe ọ chọrọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa nwere automation ka na-arụ ọrụ n'enweghị nsogbu ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Awa kwa izu ndị nwe azụmahịa kwuru na ha chekwara n'ọrụ e mere ka ọ na-eme onwe ya",
      "Ndị na-amụ ihe malitere ihe ọmụmụ obere azụmahịa Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Akaụntụ n'efu na ngwa automation no-code, ngwa fọm na spreadsheet dị ka Google Sheets ma ọ bụ Excel",
      "Akwụkwọ na mkpịsị ode maka ndepụta nzọụkwụ na ihe osise workflow",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunye oge iwu na ịnwale"
    ],
    facilitatorNotes: [
      "Mee ka onye ọ bụla na-amụ ihe họrọ otu obere ezi ọrụ ọ na-emegharị tupu nnọkọ ahụ; nke dị obere ka mma maka automation mbụ.",
      "Jiri naanị ihe nnwale e chepụtara echepụta na email nnwale nke onye na-amụ ihe nwere; ejila ezi data onye ahịa mgbe ọ bụla.",
      "Tupu ndị na-amụ ihe amalite iwu, lelee na atụmatụ ọ bụla nwere nkwado mmadụ tupu e zipu ma ọ bụ kwụọ ihe ọ bụla.",
      "Nyere ndị na-amụ ihe aka ịgbanye ịbanye nzọụkwụ abụọ na ngwa automation na akaụntụ ndị e jikọrọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

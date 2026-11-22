"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-scaling-ai-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-scaling-ai-business-ig",
  lang: "ig",
  translationOf: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Ime ka Azụmahịa Na-eji AI Too",
  skills: "Ịmara nọmba ndị kacha mkpa, Ịchọta ebe ọrụ na-akwụsị (bottleneck), Ime ka ọrụ ghọọ usoro, Iwebata enyemaka, Ime ka ndị ahịa baa ụba nwayọọ nwayọọ, Idebe ịdị mma mgbe ị na-eto",
  outcome: "iji AI gụọ nọmba ndị kacha mkpa n'azụmahịa gị, chọta ihe na-egbochi uto, mee ka ọrụ gị ghọọ usoro ndị ọzọ nwere ike ịgbaso, ma dee atụmatụ uto ụbọchị 90 nwere ezi uche na nlele ịdị mma.",
  about: [
    "Ime ka azụmahịa too (scaling) pụtara ime ka ahịa gị baa ụba n'enweghị ụgwọ, awa ọrụ na mperi gị ịba ụba otu ahụ. Ihe ọmụmụ a bụ maka ndị nwe azụmahịa na-arụworị ọrụ nke ọma, ndị dị njikere ime ka ọ too, ebe AI na-arụ ọtụtụ ọrụ nkịtị.",
    "N'Isi 1, ị ga-eji AI ghọta nọmba gị, chọta otu ebe na-ebelata ọsọ ọrụ gị, ma dee ọrụ gị ka ọ bụrụ usoro e dere ede. N'Isi 2, ị ga-eme atụmatụ maka enyemaka (ndị ọrụ nkwekọrịta, ndị ọrụ na ngwa AI), họrọ ụzọ uto, ma debe nlele ịdị mma na ihe egwu ka uto ghara imebi ihe ndị ahịa hụrụ n'anya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ n'azụmahịa nke gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe gbasara ụtụ isi, iwe mmadụ n'ọrụ na iwu nwere njikọ gaa n'isi iyi gọọmentị; jụọ onye na-ahụ maka ego (accountant) ma ọ bụ ọka iwu maka ọnọdụ gị."
  ],
  finalTask: "Dee atụmatụ uto ụbọchị 90 nke otu peeji: nọmba ise kacha mkpa gị taa na ebumnuche ha, ebe ọrụ kacha akwụsị na otu ị ga-esi wepụ ya, usoro abụọ ị ga-ede, enyemaka ị ga-agbakwunye (mmadụ ma ọ bụ ngwa AI) na ego ọ ga-efu, otu ụzọ uto ị ga-anwale, na nlele ịdị mma atọ ị ga-ele kwa izu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na US, ndị azụmahịa ha na-arụworị ọrụ ma nwee ndị ahịa na-abịa mgbe niile, ndị dị njikere ito ma chọọ ka AI rụọ ọtụtụ ọrụ nkịtị.",
    startingPoint: "Ha na-ere ahịa, na-elekọta ndị ahịa ma na-arụ ọtụtụ ọrụ ndị kacha mkpa n'onwe ha. Ọtụtụ anaghị edekọ nọmba ndị kacha mkpa kwa ọnwa, ha nwere usoro ole na ole e dere ede, ha emebeghịkwa atụmatụ iwe mmadụ n'ọrụ ma ọ bụ nnwale uto.",
    gap: "Ime ka azụmahịa na-efu ego n'ahịa ọ bụla too, ma ọ bụ nke na-adabere n'oge onye nwe ya maka ọrụ ọ bụla, na-eme ka nsogbu buo ibu, ọ bụghị ka ọ dị nta. Ndị nwe azụmahịa kwesịrị ịgụ nọmba ha, dozie ebe ọrụ kacha akwụsị, dee usoro, gbakwunye ezi enyemaka ma nwalee uto ya na nlele ịdị mma, ka azụmahịa too n'emebighị.",
    constraints: [
      "Okwu dị mfe na mgbakọ spreadsheet nkịtị",
      "Ngwaọrụ: kọmputa nwere spreadsheet na ngwa enyemaka AI n'efu",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunyere ọrụ na nọmba na usoro nke onye nwe azụmahịa",
      "Ihe gbasara ụtụ isi na iwe mmadụ n'ọrụ (dị ka ụdị onye ọrụ) nwere njikọ gaa n'isi iyi gọọmentị; ndị nwe azụmahịa na-ajụ accountant ma ọ bụ ọka iwu",
      "A na-ewepụ aha ndị ahịa tupu e tinye ozi azụmahịa ọ bụla n'AI"
    ],
    prerequisites: "A na-atụ aro \"AI Maka Ịrụ Ọrụ Azụmahịa Ngwa Ngwa\" (\"AI for Business Productivity\"), na azụmahịa nwere opekata mpe ọnwa isii nke ahịa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nọmba azụmahịa ọnwa isii e wepụrụ aha ndị ahịa", action: "idekọ nọmba ise kacha mkpa na spreadsheet ma jiri AI kọwaa otu ha si agbanwe", standard: "na-elele mgbakọ AI ma na-ekwu ma ahịa ọ bụla ọ na-eweta uru" },
    { id: "O2", condition: "Mgbe e nyere gị nzọụkwụ nke usoro ọrụ gị kacha mkpa na oge ha", action: "ịchọta ebe ọrụ kacha akwụsị ma họrọ otu ndozi: wepụ ya, mee ka igwe rụọ ya, ma ọ bụ nyefee ya", standard: "ya na ndozi ahụ dị njikere ịnwale n'ọnwa a" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ abụọ kacha mkpa ị na-arụ n'onwe gị", action: "ide nke ọ bụla ka ọ bụrụ usoro nwere nzọụkwụ, ndepụta nlele na ọkwa ịdị mma", standard: "nke mere na onye ọzọ ga-agbaso ya n'ajụghị ajụjụ" },
    { id: "O4", condition: "Mgbe e nyere gị enyemaka azụmahịa gị kacha chọọ", action: "ịhọrọ n'etiti ngwa AI na mmadụ ma kwadebe nkọwa ọrụ ziri ezi", standard: "nwere okwu gbasara ọrụ ahụ na ndetu banyere ụdị onye ọrụ site n'ụdị atọ nke IRS" },
    { id: "O5", condition: "Mgbe e nyere gị ụzọ uto ndị nwere ike ịrụ ọrụ", action: "ime atụmatụ nnwale ụbọchị 30 nke otu ụzọ nwere ebumnuche, ihe ntụle na oke ego", standard: "na-atụnyere ego otu onye ahịa ọhụrụ na-efu na nọmba gị kacha mkpa" },
    { id: "O6", condition: "Maka atụmatụ uto ụbọchị 90 gị", action: "idebe nlele ịdị mma atọ kwa izu na nlele ngwa AI na ozi ndị ahịa", standard: "na-enyocha atụmatụ ahụ kwa izu abụọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Dị njikere ito",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịmara nọmba gị kacha mkpa",
          minutes: 5,
          goal: "Dekọọ nọmba ise kacha mkpa ma jiri AI kọwaa ihe ha pụtara.",
          text: [
            "Ị pụghị ime ka ihe ị naghị atụ too. Nọmba ise dị mkpa maka ọtụtụ obere azụmahịa: ego na-abata kwa ọnwa (revenue), ụgwọ (costs), uru (ihe fọdụrụ), ọnụ ọgụgụ ndị ahịa, na ego onye ahịa ọ bụla bara n'oge niile ma e tụnyere ya na ego ọ na-efu inweta ya.",
            "Tinye ọnwa isii gara aga na spreadsheet. Wee rịọ AI ka o nyere gị aka ịgụ ya: \"Lee ego na-abata m, ụgwọ m na ọnụ ọgụgụ ndị ahịa m kwa ọnwa (enweghị aha). Gịnị ka ị na-ahụ ka ha si agbanwe? Kedu nọmba m kwesịrị ichegbu onwe m maka ya?\" Lelee mgbakọ ya n'onwe gị.",
            "Azụmahịa dị njikere ito mgbe ahịa ọ bụla na-eweta uru, ndị ahịa na-alọghachikwa ma ọ bụ na-akọrọ ndị ọzọ maka gị. Ọ bụrụ na ahịa ọ bụla na-efu ego, uto na-eme ka mfu ahụ buo ibu."
          ],
          steps: ["Mee spreadsheet nwere ọnwa isii nke ego na-abata, ụgwọ, uru na ọnụ ọgụgụ ndị ahịa.", "Gbakọọ ego ahịa n'ozuzu na ego ọ na-efu inweta otu onye ahịa.", "Rịọ AI ka ọ kọwaa otu ihe si agbanwe na ihe egwu (enweghị aha ndị ahịa).", "Megharịa mgbakọ ọ bụla n'onwe gị.", "Dee otu ahịrịokwu: ahịa ọ bụla ọ na-eweta uru?"],
          words: [["Revenue (ego na-abata)", "ego niile na-abata site n'ahịa."], ["Uru (profit)", "ego na-abata wepụ ụgwọ."], ["Customer acquisition cost", "ego ị na-emefu n'ozuzu iji nweta otu onye ahịa ọhụrụ."], ["Scale (ito)", "ime ka ahịa baa ụba ọsọ karịa ụgwọ na mgbalị."]],
          slides: [
            { title: "Nọmba ise kacha mkpa", bullets: ["Ego na-abata na ụgwọ", "Uru", "Ọnụ ọgụgụ ndị ahịa", "Ego onye ahịa bara ma e tụnyere ya na ego inweta ya"] },
            { title: "AI na-agụ otu ihe si agbanwe", bullets: ["Ọnwa isii na spreadsheet", "Rịọ AI ka ọ kọwaa mgbanwe na ihe egwu", "Lelee mgbakọ ahụ n'onwe gị"] },
            { title: "Ị dị njikere ito?", bullets: ["Ahịa ọ bụla na-eweta uru", "Ndị ahịa na-alọghachi ma ọ bụ na-akọrọ ndị ọzọ", "Ọ bụrụ na ahịa na-efu ego, uto na-eme ka mfu buo ibu"] }
          ],
          tryIt: "Mee spreadsheet nọmba ọnwa isii gị, rịọ AI ka o gosi otu ihe si agbanwe na otu ihe egwu, lelee mgbakọ ya, ma dee ma ahịa ọ bụla ọ na-eweta uru.",
          youCanNow: "idekọ nọmba gị kacha mkpa na ịmata ma azụmahịa gị ọ dị njikere ito.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ customer acquisition cost?", options: ["Ego ị na-emefu n'ozuzu iji nweta otu onye ahịa ọhụrụ", "Ọnụ ahịa onye ahịa na-akwụ", "Ụgwọ ụlọ gị", "Ọnụ ọgụgụ ndị ahịa i nwere"], answer: 0, why: "Ọ na-egosi ego onye ahịa ọhụrụ ọ bụla na-efu gị inweta." },
            { objective: "O1", q: "AI kwuru na uru gị mụbara okpukpu abụọ n'ọnwa gara aga, mana ọ dị gị ka ọ bụghị eziokwu. Gịnị ka ị ga-eme?", options: ["Mee mmemme ma were mmadụ n'ọrụ ozugbo", "Lelee mgbakọ ahụ n'onwe gị na spreadsheet", "Rịọ AI ka o kwughachi ya", "Leghara nọmba gị anya"], answer: 1, why: "Lelee mgbakọ AI mgbe niile tupu i mee ihe site na ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta ebe ọrụ na-akwụsị (bottleneck)",
          minutes: 5,
          goal: "Chọta otu nzọụkwụ kacha egbochi ọrụ azụmahịa gị nwere ike ịrụ.",
          text: [
            "Bottleneck bụ ebe kacha dị warara nke na-egbochi ihe ndị ọzọ niile. N'azụmahịa achịcha (cake), ọ nwere ike ịbụ ohere dị n'oven; n'azụmahịa ọrụ (service), ọ na-abụkarị oge onye nwe ya maka ide ọnụ ahịa (quote), nsochi ma ọ bụ nlele ịdị mma.",
            "Depụta nzọụkwụ niile site na mgbe onye ahịa buru ụzọ kpọtụrụ gị ruo mgbe obi tọrọ ya ụtọ, na oge nke ọ bụla na-ewe maka otu onye ahịa. Jụọ AI: \"Lee nzọụkwụ m na oge ha. Ebee ka bottleneck dị, gịnịkwa bụ ụzọ atọ isi dozie ya: wepụ nzọụkwụ ahụ, mee ka igwe rụọ ya, ma ọ bụ nyefee ya onye ọzọ?\"",
            "Buru ụzọ dozie bottleneck. Ime ka nzọụkwụ ọzọ ọ bụla gaa ọsọ anaghị enyere aka, n'ihi na ọrụ ka na-akpakọba n'ebe ahụ dị warara."
          ],
          steps: ["Depụta nzọụkwụ ọ bụla site na mkpọtụrụ mbụ ruo ọrụ gwụrụ.", "Dee oge nzọụkwụ ọ bụla na-ewe maka otu onye ahịa na onye na-arụ ya.", "Rịọ AI ka ọ chọta bottleneck ma tụọ aro ndozi.", "Họrọ: wepụ, mee ka igwe rụọ ya, ma ọ bụ nyefee ya.", "Mee atụmatụ otu ndozi ị ga-anwale n'ọnwa na-abịa."],
          words: [["Bottleneck", "nzọụkwụ kacha nwayọọ, nke na-egbochi ihe azụmahịa niile nwere ike ime."], ["Nyefee (hand off)", "inye onye ọzọ ọrụ ka ọ rụọ."]],
          slides: [
            { title: "Ebe kacha dị warara", bullets: ["Ọ na-egbochi ihe ndị ọzọ niile", "Ọ na-abụkarị oge onye nwe azụmahịa"] },
            { title: "Chọta ya", bullets: ["Depụta nzọụkwụ na oge maka otu onye ahịa", "Jụọ AI ebe ọrụ na-akpakọba"] },
            { title: "Buru ụzọ dozie ya", bullets: ["Wepụ ya, mee ka igwe rụọ ya, ma ọ bụ nyefee ya", "Ime ka nzọụkwụ ndị ọzọ gaa ọsọ anaghị enyere aka"] }
          ],
          tryIt: "Dee nzọụkwụ gị na oge ha, rịọ AI ka ọ chọta bottleneck, ma họrọ otu ndozi (wepụ, mee ka igwe rụọ ya, ma ọ bụ nyefee ya) ị ga-anwale n'ọnwa a.",
          youCanNow: "ịchọta nzọụkwụ na-egbochi uto gị na ịhọrọ ndozi.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ bottleneck?", options: ["Nzọụkwụ gị kacha ọsọ", "Ụdị karama", "Nzọụkwụ kacha nwayọọ nke na-egbochi ihe ndị ọzọ niile", "Onye ahịa ọhụrụ"], answer: 2, why: "Ọrụ na-akpakọba na bottleneck, ya mere ọ na-egbochi uto." },
            { objective: "O2", q: "Ọnụ ahịa (quote) ọ bụla na-echere gị ide ya, ọda ahịa (orders) na-akpakọbakwa. Kedu ndozi ị nwere ike ịhọrọ?", options: ["Mee ka nnyefe gaa ọsọ kama", "Nara ọda ahịa ndị ọzọ", "Kwụsị izipu quote", "Jiri ụdị quote a kwadebere (template) ma ọ bụ nyefee ide quote onye enyemaka a zụrụ azụ"], answer: 3, why: "Ime ka igwe rụọ ma ọ bụ inyefe nzọụkwụ bottleneck na-eme ka ọrụ gaa nke ọma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime ka ọrụ gị ghọọ usoro",
          minutes: 5,
          goal: "Dee ọrụ abụọ kacha mkpa ka ha bụrụ usoro onye ọzọ (ma ọ bụ ngwa AI) nwere ike ịgbaso.",
          text: [
            "Ọ bụrụ na ihe niile dị naanị n'isi gị, azụmahịa agaghị etokarị gị. Usoro (system) bụ ụzọ e dere ede isi rụọ ọrụ: nzọụkwụ, ngwa, ndepụta nlele (checklist) na otu \"ọrụ e mere nke ọma\" si adị.",
            "Debanye onwe gị (vidiyo ma ọ bụ olu) ka ị na-arụ ọrụ, ma ọ bụ dee ndetu nkịtị, ma rịọ AI ka o mee ya ka ọ bụrụ usoro ọrụ nkịtị (SOP) nwere checklist na ọkwa ịdị mma. Kara akara nzọụkwụ ndị ngwa AI nwere ike ịrụ na ebe mmadụ ga-elele.",
            "Nwalee usoro ọ bụla site n'ime ka onye ọzọ gbasoo ya ka ị na-ele ya anya n'ekwughị okwu. Ajụjụ ọ bụla ha jụrụ na-egosi nzọụkwụ fọdụrụ. Debe usoro niile n'otu ebe a na-ekerịta."
          ],
          steps: ["Họrọ ọrụ abụọ kacha ewe oge gị.", "Debanye ma ọ bụ dee ndetu ka ị na-arụ nke ọ bụla.", "Rịọ AI ka o mee ndetu ahụ ka ọ bụrụ SOP nwere checklist na ọkwa ịdị mma.", "Kara akara nzọụkwụ AI na nlele mmadụ.", "Nwalee ya n'aka onye ọzọ ma mejupụta ebe fọdụrụ."],
          words: [["Usoro (system)", "ụzọ e dere ede, a na-emegharị emegharị, isi rụọ ọrụ."], ["SOP", "standard operating procedure (usoro ọrụ nkịtị): nzọụkwụ e dere ede maka ọrụ."], ["Ọkwa ịdị mma (quality standard)", "nkọwa doro anya nke otu ezi ọrụ si adị."]],
          slides: [
            { title: "Wepụta ya n'isi gị", bullets: ["Usoro = nzọụkwụ, ngwa, checklist, ọkwa", "Azụmahịa nwere ike itokarị gị"] },
            { title: "Jiri AI wuo ya", bullets: ["Debanye ma ọ bụ dee ndetu nkịtị", "AI na-eme ha ka ha bụrụ SOP", "Kara akara nzọụkwụ AI na nlele mmadụ"] },
            { title: "Nwalee ya", bullets: ["Onye ọzọ na-agbaso ya", "Ajụjụ ọ bụla = nzọụkwụ fọdụrụ", "Debe usoro niile n'otu ebe"] }
          ],
          tryIt: "Jiri enyemaka AI mee otu n'ime ọrụ abụọ gị kacha ibu ka ọ bụrụ SOP, gụnyere checklist na ọkwa ịdị mma. Ọ bụrụ na ị nwere ike, mee ka onye ọzọ nwalee ya.",
          youCanNow: "ime ka ihe ị maara ghọọ usoro ndị ọzọ ma ọ bụ ngwa AI nwere ike ịgbaso.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ọkwa ịdị mma n'ime SOP?", options: ["Nkọwa doro anya nke otu ezi nsonaazụ si adị", "Ọnụ ahịa ngwa ahụ", "Mbinye aka onye nwe azụmahịa", "Ndepụta ndị ahịa"], answer: 0, why: "Ọkwa ịdị mma na-agwa onye ahụ ihe ọrụ e mere nke ọma pụtara." },
            { objective: "O3", q: "Onye enyemaka na-akpọ gị oge niile n'ajụjụ ka ọ na-agbaso SOP gị. Gịnị ka ị ga-eme?", options: ["Rụọ ọrụ ahụ n'onwe gị ọzọ", "Tinye nkọwa fọdụrụ na SOP ma nwalee ya ọzọ", "Chụọ onye enyemaka ahụ n'ọrụ", "Tụfuo SOP ahụ"], answer: 1, why: "Ajụjụ na-egosi ebe SOP ahụ ezubeghị ezu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Dị njikere ito",
        questions: [
          { objective: "O1", q: "Ahịa ọ bụla na-efu ntakịrị ego. Gịnị ga-eme ma ọ bụrụ na ị too?", options: ["Uru ga-apụta n'onwe ya", "Mfu ahụ ga-ebu ibu", "Ọ dịghị ihe ga-agbanwe", "Ụgwọ ga-apụ n'anya"], answer: 1, why: "Uto na-amụba ihe ọ bụla ahịa ọ bụla na-eme." },
          { objective: "O1", q: "Gịnị bụ uru?", options: ["Ọnụ ọgụgụ ndị ahịa", "Ego niile na-abata", "Ọnụ ahịa gị", "Ego na-abata wepụ ụgwọ"], answer: 3, why: "Uru bụ ihe fọdụrụ mgbe e wepụrụ ụgwọ." },
          { objective: "O1", q: "AI kwuru na ụgwọ gị rịgoro 40%. Gịnị ka ị kwesịrị ime?", options: ["Lelee mgbakọ ahụ n'onwe gị na spreadsheet", "Kwere ya ma tụọ ụjọ", "Hichapụ spreadsheet ahụ", "Leghara ya anya"], answer: 0, why: "Mgbakọ AI nwere ike ịbụ ihe ezighi ezi; lelee ya." },
          { objective: "O2", q: "Gịnị bụ bottleneck?", options: ["Onye ahịa gị kacha mma", "Ụdị karama", "Nzọụkwụ kacha nwayọọ nke na-egbochi ihe ndị ọzọ niile", "Ụzọ mgbasa ozi"], answer: 2, why: "Ọ bụ ebe kacha dị warara n'usoro ọrụ gị." },
          { objective: "O3", q: "Olee otu ị ga-esi mara na SOP zuru ezu?", options: ["AI dere ya", "Ọ dị ogologo nke ukwuu", "Onye ọzọ nwere ike ịgbaso ya n'ajụghị ajụjụ", "O nwere aha mara mma"], answer: 2, why: "Ajụjụ a jụrụ n'oge nnwale na-egosi nzọụkwụ fọdụrụ." }
        ]
      }
    },
    {
      name: "Isi 2: Too n'emebighị ihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iwebata enyemaka: ndị mmadụ na ngwa AI",
          minutes: 6,
          goal: "Kpebie enyemaka ị ga-agbakwunye ma kwadebe nkọwa ọrụ.",
          text: [
            "Ụfọdụ ọrụ kacha mma inyefe ngwa AI ma ọ bụ igwe na-arụ onwe ya (automation): ịhazi ihe, ide ihe mbụ, ịhazi oge. Ụfọdụ chọrọ mmadụ: ikpe ezi ikpe, ọrụ aka, mmekọrịta ya na ndị ahịa. Jiri bottleneck gị na usoro gị kpebie nke ọ bụ.",
            "Ọ bụrụ na i were mmadụ n'ọrụ, AI nwere ike ide nkọwa ọrụ doro anya site na SOP gị: ọrụ, nka, awa na oke ụgwọ ọnwa. Lelee ya maka okwu ziri ezi nke na-anabata onye ọ bụla, ma wepụ ihe ọ bụla na-agbasaghị ọrụ ahụ.",
            "Onye ọrụ nkwekọrịta (contractor) ka ọ bụ onye ọrụ (employee)? IRS (ụlọ ọrụ ụtụ isi US) na-ele ụdị ihe akaebe atọ: njikwa omume (ị na-achịkwa otu e si arụ ọrụ ahụ?), njikwa ego (onye na-achịkwa ụgwọ, mmefu na ngwa?) na ụdị mmekọrịta (nkwekọrịta, uru ọrụ, ọrụ na-aga n'ihu nke dị mkpa n'azụmahịa). Ime mperi n'ebe a nwere ike ime ka ị kwụọ ụtụ isi na ntaramahụhụ; gụọ peeji IRS, ma jụọ accountant ma ọ bụ ọka iwu. Iwu steeti nwere ike ịka sie ike."
          ],
          steps: ["Depụta ọrụ ị chọrọ ka a napụ gị.", "Kara akara nke ọ bụla: ngwa AI, contractor ma ọ bụ employee.", "Mee ka AI dee nkọwa ọrụ site na SOP gị.", "Lelee okwu ya ka ọ dị mma, ma wepụ ihe ndị a chọrọ na-agbasaghị ọrụ ahụ.", "Gụọ peeji IRS gbasara ụdị onye ọrụ ma jụọ accountant tupu i were mmadụ."],
          words: [["Contractor (onye ọrụ nkwekọrịta)", "onye na-azụ ahịa nke ya nke na-arụrụ gị ọrụ, ọ na-achịkwakarị otu o si arụ ya."], ["Employee (onye ọrụ)", "onye ị na-achịkwa ọrụ ya; ị na-ewepụ ma kwụọ ụtụ isi ọrụ."], ["Nkọwa ọrụ (role description)", "nchịkọta e dere ede nke ọrụ, nka, awa na ụgwọ nke otu ọrụ."]],
          slides: [
            { title: "Mmadụ ka ngwa AI?", bullets: ["AI: ịhazi ihe, ide ihe mbụ, ịhazi oge", "Ndị mmadụ: ikpe ezi ikpe, ọrụ aka, mmekọrịta"] },
            { title: "Nkọwa ọrụ site n'AI", bullets: ["Dee ya site na SOP gị", "Ọrụ, nka, awa, oke ụgwọ", "Lelee na okwu ya ziri ezi ma gbasaa ọrụ ahụ"] },
            { title: "Contractor ka employee? (IRS)", bullets: ["Njikwa omume", "Njikwa ego", "Ụdị mmekọrịta", "Jụọ accountant; iwu steeti nwere ike ịka sie ike"] }
          ],
          sources: [{ name: "IRS: Independent Contractor (Self-Employed) or Employee?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Họrọ enyemaka ị kacha chọọ. Ọ bụrụ mmadụ, mee ka AI dee nkọwa ọrụ site na SOP gị ma lelee ya ka ọ dị mma; dee ma ị chere na ọ bụ ọrụ contractor ka employee na ihe kpatara ya, site n'iji ụdị atọ nke IRS.",
          youCanNow: "ikpebi n'etiti ngwa AI na ndị mmadụ maka uto, na ịkwadebe nkọwa ọrụ ziri ezi.",
          quickCheck: [
            { objective: "O4", q: "Kedu ọrụ na-achọkarị mmadụ karịa AI?", options: ["Ịhazi email", "Ide template", "Iwulite mmekọrịta ya na ndị ahịa kacha mkpa", "Ịchịkọta ndetu"], answer: 2, why: "Mmekọrịta chọrọ ikpe mmadụ na ntụkwasị obi." },
            { objective: "O4", q: "Nkọwa ọrụ AI dere kwuru \"onye otu dị obere n'afọ, nwee ume\". Gịnị ka ị ga-eme?", options: ["Hapụ ya otu ahụ", "Tinye okwu nkọwa ndị ọzọ", "Bipụta ya otu o si dị", "Gbanwee ya ka ọ bụrụ okwu ziri ezi gbasara ọrụ ahụ"], answer: 3, why: "Nkọwa ọrụ kwesịrị ịdị mma ma gbasaa ọrụ ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka ndị ahịa baa ụba nwayọọ nwayọọ",
          minutes: 5,
          goal: "Họrọ otu ụzọ uto ma hazie obere nnwale a ga-atụ atụ.",
          text: [
            "Ụzọ uto (growth channels) bụ ụzọ ndị ahịa ọhụrụ si achọta gị: ndị ahịa na-akọrọ ndị ọzọ (referrals), mmekọ, ọchụchọ mpaghara na ndepụta na maapụ, mgbasa ozi ọha (social media), email, mgbasa ozi a kwụrụ ụgwọ, na ahịa ịntanetị (marketplaces). Ọtụtụ obere azụmahịa na-eto nke ọma site n'otu ụzọ ma ọ bụ abụọ e mere nke ọma.",
            "Jụọ AI: \"Azụmahịa m bụ [ụdị] na-ejere [onye ahịa] ozi. Tụọ aro ụzọ uto ise, otu nke ọ bụla ga-esi arụ ọrụ maka m, ego ọ ga-efu, na otu m ga-esi tụọ ya.\" Họrọ nke dabara onye ahịa gị na ego i nwere.",
            "Mee obere nnwale ụbọchị 30 nwere ebumnuche doro anya: \"Rịọ ndị ahịa 20 gara aga ka ha kọọrọ ndị ọzọ; ebumnuche: ndị nwere mmasị ọhụrụ 5.\" Tụọ nsonaazụ ya, tụnyere ego otu onye ahịa ọhụrụ na-efu na nọmba gị site na Nkuzi 1, wee mefuo ego ọzọ naanị mgbe ahụ."
          ],
          steps: ["Rịọ AI maka ụzọ uto ise nwere ike ịrụ ọrụ, ya na ego ha na otu e si atụ ha.", "Họrọ otu dabara onye ahịa gị na ego i nwere.", "Debe nnwale ụbọchị 30 nwere ebumnuche doro anya.", "Dekọọ nsonaazụ na ego otu onye ahịa ọhụrụ na-efu.", "Kpebie: mee ka ọ too, gbanwee ya, ma ọ bụ kwụsị ya."],
          words: [["Ụzọ uto (growth channel)", "ụzọ ndị ahịa ọhụrụ si achọta gị ma zụta n'aka gị."], ["Referral", "onye ahịa na-akọrọ onye ọzọ maka gị."], ["Nnwale (test)", "obere mbọ nwere oke oge na ebumnuche doro anya."]],
          slides: [
            { title: "Ụzọ ndị ahịa si achọta gị", bullets: ["Referrals na mmekọ", "Ọchụchọ mpaghara, social media, email", "Mgbasa ozi a kwụrụ ụgwọ na marketplaces"] },
            { title: "Họrọ otu ma ọ bụ abụọ", bullets: ["Rịọ AI maka nhọrọ, ego na otu e si atụ ha", "Họrọ nke dabara onye ahịa gị na ego i nwere"] },
            { title: "Buru ụzọ nwalee n'obere", bullets: ["Ụbọchị 30, ebumnuche doro anya", "Dekọọ ego otu onye ahịa ọhụrụ na-efu", "Mee ka ọ too, gbanwee ya, ma ọ bụ kwụsị ya"] }
          ],
          tryIt: "Jiri enyemaka AI họrọ otu ụzọ uto ma dee nnwale ụbọchị 30: ihe ị ga-eme, ebumnuche, otu ị ga-esi tụọ ya, na ego kacha ị ga-emefu.",
          youCanNow: "ịhọrọ ụzọ uto na ịnwale ya tupu i mefuo ego ọzọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ezigbo nnwale uto ụbọchị 30 gụnyere?", options: ["Ebumnuche doro anya na oke ego", "Imefu ego dị ka o kwere mee", "Enweghị ụzọ isi tụọ ya", "Ụzọ niile n'otu oge"], answer: 0, why: "Ebumnuche na oke na-agwa gị ma ụzọ ahụ ọ na-arụ ọrụ n'enweghị nnukwu ihe egwu." },
            { objective: "O5", q: "Nnwale gị na-eweta ndị ahịa, mana nke ọ bụla na-efu karịa ihe ọ bara gị. Gịnị ka ị ga-eme?", options: ["Mefukwuo ego na ya", "Kwụsị ma ọ bụ gbanwee ụzọ ahụ tupu i mefukwuo ego", "Leghara nọmba ahụ anya", "Belata ọnụ ahịa gị"], answer: 1, why: "Tụnyere ego otu onye ahịa ọhụrụ na-efu na ihe onye ahịa bara tupu i mee ka ụzọ ahụ too." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idebe ịdị mma mgbe ị na-eto",
          minutes: 5,
          goal: "Debe nlele ịdị mma kwa izu na atụmatụ maka ihe egwu AI na ozi ka ị na-eto.",
          text: [
            "Uto na-emebikarị ịdị mma: ọrụ e mere ngwa ngwa, nzaghachi na-adịghị ọsọ, ihe mbụ AI dere nke onye ọ bụla na-adịghị elele. Họrọ nọmba ịdị mma atọ ị ga-ele kwa izu, dị ka akara nyocha ndị ahịa n'ozuzu, oge nzaghachi, na ọnụ ọgụgụ ọrụ e meghachiri ma ọ bụ ego e nyeghachiri.",
            "Ka ọrụ ndị ọzọ na-agafe na ngwa AI, ihe egwu na-ebukwa ibu: ozi ndị ahịa ka ukwuu n'ọtụtụ ngwa, ihe AI dere ka ukwuu na-apụ. Lelee ngwa ndị nwere ozi ndị ahịa, ndị nwere ike ịbanye na ha, na na mmadụ ka na-elele ihe ọ bụla ndị ahịa ga-ahụ.",
            "Chịkọta ya niile n'atụmatụ ụbọchị 90. Rịọ AI ka o nyere gị aka hazie ya, mana nọmba na ụbọchị ọ bụla kwesịrị ịbụ nke i kwere na ya. Nyochaa ya kwa izu abụọ ma gbanwee ihe."
          ],
          steps: ["Họrọ nọmba ịdị mma atọ ị ga-edekọ kwa izu.", "Depụta ngwa ndị nwere ozi ndị ahịa na ndị nwere ike ịbanye na ha.", "Hụ na mmadụ na-elele ihe niile ndị ahịa na-ahụ.", "Rịọ AI ka ọ hazie atụmatụ ụbọchị 90 gị site na ndetu gị.", "Debe nyocha kwa izu abụọ."],
          words: [["Nlele ịdị mma (quality check)", "ile nọmba ma ọ bụ ụfọdụ ọrụ anya oge niile iji hụ na ọkwa ahụ ka dị."], ["Refund rate", "akụkụ nke ahịa ndị ị ga-enyeghachi ego."]],
          slides: [
            { title: "Uto nwere ike imebi ịdị mma", bullets: ["Ọrụ e mere ngwa ngwa, nzaghachi na-adịghị ọsọ", "Ihe AI dere nke onye ọ bụla na-adịghị elele"] },
            { title: "Lee nọmba atọ kwa izu", bullets: ["Akara nyocha ndị ahịa", "Oge nzaghachi", "Ọrụ e meghachiri ma ọ bụ ego e nyeghachiri"] },
            { title: "Ihe egwu AI na ozi na-ebukwa ibu", bullets: ["Kedu ngwa nwere ozi ndị ahịa?", "Onye nwere ike ịbanye?", "Mmadụ na-elele ihe ndị ahịa na-ahụ"] },
            { title: "Atụmatụ ụbọchị 90 gị", bullets: ["AI na-ahazi ya; gị na-etinye ezi nọmba", "Nyochaa ya kwa izu abụọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ uto ụbọchị 90 gị nke otu peeji: nọmba kacha mkpa na ebumnuche, ndozi bottleneck, usoro abụọ, enyemaka ị ga-agbakwunye, otu nnwale uto, na nlele ịdị mma atọ kwa izu.",
          youCanNow: "ime atụmatụ na ịchịkwa uto site n'AI ma na-echebe ịdị mma na ozi ndị ahịa.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ nọmba ịdị mma kwa izu?", options: ["Agba ị kacha hụ n'anya", "Ọnụ ọgụgụ ndị na-eso gị na social media", "Ọnụ ọgụgụ ọrụ e meghachiri ma ọ bụ ego e nyeghachiri", "Ịdị ukwuu nke ọfịs"], answer: 2, why: "Ọrụ e meghachiri na ego e nyeghachiri na-egosi ma ịdị mma ọ na-ada." },
            { objective: "O6", q: "Ahịa na-eto, mana mkpesa mụbara okpukpu abụọ n'ọnwa a. Gịnị ka atụmatụ gị gwara gị ime?", options: ["Nọgide na-eto ọsọ karịa", "Leghara ya anya ruo ọkara afọ ọzọ", "Wepụ nlele ịdị mma", "Chọta ihe kpatara ya ma dozie ya tupu i gbakwunye ndị ahịa ọzọ"], answer: 3, why: "Nlele ịdị mma dị ka uto ghara imebi ihe ndị ahịa hụrụ n'anya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Too n'emebighị ihe",
        questions: [
          { objective: "O4", q: "Kedu ọrụ kacha mma inyefe ngwa AI?", options: ["Ịhazi arịrịọ na-abata", "Iwulite ntụkwasị obi ya na onye ahịa gị kacha ibu", "Ọrụ aka nke ndozi", "Ikpebi onye a ga-ewe n'ọrụ"], answer: 0, why: "Ịhazi ihe nkịtị dabara AI; ikpe na mmekọrịta chọrọ ndị mmadụ." },
          { objective: "O4", q: "Kedu nke bụ otu n'ime ụdị atọ nke IRS maka ụdị onye ọrụ?", options: ["Ụdị ekwentị", "Agba ị kacha hụ n'anya", "Afọ ole ị gụrụ akwụkwọ", "Njikwa omume"], answer: 3, why: "Njikwa omume, njikwa ego na ụdị mmekọrịta bụ ụdị atọ ahụ." },
          { objective: "O5", q: "Tupu i mefukwuo ego n'ụzọ uto, ị kwesịrị:", options: ["Imefu ego niile i nwere", "Ime obere nnwale a tụrụ atụ", "Iṅomi onye na-asọ mpi", "Ịghara ịtụ ya"], answer: 1, why: "Nnwale na-egosi ma ọ na-arụ ọrụ tupu i tinye ego." },
          { objective: "O6", q: "Kedu nke bụ ezigbo nọmba ịdị mma kwa izu?", options: ["Oge nzaghachi n'ozuzu nye ndị ahịa", "Ọnụ ọgụgụ app ị na-eji", "Ịdị ukwuu nke logo gị", "Ogologo nkọwa onwe gị na social media"], answer: 0, why: "Oge nzaghachi na-egosi ma ọrụ ndị ahịa ọ na-ada." },
          { objective: "O6", q: "Ka ọrụ ndị ọzọ na-agafe na ngwa AI, ị kwesịrị:", options: ["Inye ngwa ọ bụla ozi gị niile", "Ịkwụsị ilele ọrụ AI", "Ilele ngwa ndị nwere ozi ndị ahịa na ndị nwere ike ịbanye na ha", "Iwepụ nlele mmadụ"], answer: 2, why: "Ihe egwu ozi na ịdị mma na-ebu ibu ka azụmahịa na-eto." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ime ka Azụmahịa Na-eji AI Too",
    questions: [
      { objective: "O1", q: "Ime ka azụmahịa too pụtara:", options: ["Naanị ịbawanye ọnụ ahịa", "Ime ka ahịa baa ụba ọsọ karịa ụgwọ na mgbalị", "Ịrụ ọrụ awa ndị ọzọ", "Ịzụta ngwa ndị ọzọ"], answer: 1, why: "Nke ahụ bụ nkọwa ihe ọmụmụ a ji." },
      { objective: "O1", q: "Revenue (ego na-abata) bụ:", options: ["Ọnụ ọgụgụ ndị ahịa gị", "Ihe fọdụrụ mgbe e wepụrụ ụgwọ", "Ụgwọ ngwa gị", "Ego niile na-abata site n'ahịa"], answer: 3, why: "Revenue bụ ego na-abata." },
      { objective: "O1", q: "Customer acquisition cost bụ:", options: ["Ụtụ isi", "Ọnụ ahịa gị", "Ụgwọ ụlọ gị", "Ego ị na-emefu n'ozuzu iji nweta otu onye ahịa ọhụrụ"], answer: 3, why: "Nke ahụ bụ nkọwa ya." },
      { objective: "O1", q: "Tupu ị rịọ AI ka ọ nyochaa nọmba gị, ị kwesịrị:", options: ["Itinye nọmba kaadị", "Iwepụ aha ndị ahịa", "Itinye okwuntughe", "Itinye ha n'ịntanetị"], answer: 1, why: "Debe ozi nzuzo n'ebe ngwa AI na-adịghị." },
      { objective: "O1", q: "Azụmahịa dị njikere ito mgbe:", options: ["O nwere ọtụtụ app", "O nwere logo ọhụrụ", "Ahịa ọ bụla na-eweta uru, ndị ahịa na-alọghachi ma ọ bụ na-akọrọ ndị ọzọ", "Onye nwe ya na-arụ ọrụ awa 80"], answer: 2, why: "Ahịa na-eweta uru, nke a na-emeghachi emeghachi, nwere ike ito." },
      { objective: "O2", q: "N'azụmahịa ọrụ (service), bottleneck na-abụkarị:", options: ["Oge onye nwe ya", "Agba ụgbọala (van)", "Ụdị mkpụrụ akwụkwọ weebụsaịtị", "Ọnụ ọgụgụ ndị na-eso gị"], answer: 0, why: "Ndị nwe azụmahịa na-ede quote, na-esochi ma na-elele ihe n'onwe ha." },
      { objective: "O2", q: "Ụzọ atọ isi dozie bottleneck bụ:", options: ["Ịbawanye, ibelata ma ọ bụ ikpochi ọnụ ahịa", "Ileghara anya, izobe ma ọ bụ igbu oge", "Iwepụ ya, ime ka igwe rụọ ya, ma ọ bụ inyefe ya", "Ịzụta, ire ma ọ bụ ịgbazite"], answer: 2, why: "Ndị a na-ewepụ ihe na-egbochi ọrụ." },
      { objective: "O2", q: "Gịnị mere a ga-eji buru ụzọ dozie bottleneck?", options: ["Ime ka nzọụkwụ ndị ọzọ gaa ọsọ anaghị enyere aka mgbe ọrụ na-akpakọba n'ebe ahụ", "Ọ bụ nzọụkwụ kacha dị ọnụ ala", "Ọ kacha atọ ụtọ", "AI kwuru ya"], answer: 0, why: "Ebe kacha dị warara na-egbochi usoro ọrụ niile." },
      { objective: "O3", q: "Usoro (system) bụ:", options: ["Aha ụdị kọmputa", "Ụzọ e dere ede, a na-emegharị emegharị, isi rụọ ọrụ", "Ụzọ ahịa", "Fọm ụtụ isi"], answer: 1, why: "Nke ahụ bụ nkọwa ya." },
      { objective: "O3", q: "SOP kwesịrị inwe:", options: ["Nọmba kaadị ndị ahịa", "Naanị aha", "Okwuntughe gị", "Nzọụkwụ, checklist na ọkwa ịdị mma"], answer: 3, why: "Ndị a na-eme ka ọrụ ahụ bụrụ nke a na-emeghachi ma na-elele." },
      { objective: "O3", q: "N'ime SOP, ị na-akara akara nzọụkwụ AI na:", options: ["Ebe mmadụ ga-elele", "Abụ ị kacha hụ n'anya", "Ọnụ ahịa ndị na-asọ mpi", "Ọ dịghị ihe ọzọ"], answer: 0, why: "Nlele mmadụ na-edebe ịdị mma." },
      { objective: "O4", q: "Kedu ọrụ chọrọ mmadụ karịa AI?", options: ["Ịchịkọta ndetu", "Ịhazi email", "Ide usoro oge", "Iwulite mmekọrịta ya na ndị ahịa"], answer: 3, why: "Mmekọrịta na ikpe chọrọ ndị mmadụ." },
      { objective: "O4", q: "Mgbe AI dere nkọwa ọrụ, ị kwesịrị:", options: ["Itinye oke afọ ndụ", "Ibipụta ya n'agbanweghị ya", "Ilele ya maka okwu ziri ezi gbasara ọrụ ahụ", "Iwepụ oke ụgwọ"], answer: 2, why: "Okwu ziri ezi na-egbochi nsogbu ịkpa ókè." },
      { objective: "O4", q: "Iji rịọ IRS ka o kpebie ụdị onye ọrụ, onye ọ bụla n'ime ha nwere ike itinye:", options: ["Form 1040-ES", "Form SS-8", "W-2", "Atụmatụ azụmahịa"], answer: 1, why: "Peeji IRS kpọrọ Form SS-8 aha." },
      { objective: "O4", q: "Ime mperi n'ụdị onye ọrụ nwere ike iweta:", options: ["Ọ dịghị ihe", "Mgbasa ozi n'efu", "Ụgwọ dị ala ruo mgbe ebighi ebi", "Ụtụ isi na ntaramahụhụ"], answer: 3, why: "Ịkọ onye ọrụ n'ụdị ezighi ezi nwere nsonaazụ ụtụ isi." },
      { objective: "O5", q: "Kedu nke bụ ụzọ uto?", options: ["SOP gị", "Spreadsheet gị", "Ndị ahịa na-akọrọ ndị ọzọ maka gị (referrals)", "Bottleneck gị"], answer: 2, why: "Referrals na-eweta ndị ahịa ọhụrụ." },
      { objective: "O5", q: "Ezigbo nnwale ụbọchị 30 nwere:", options: ["Ebumnuche doro anya na oke ego", "Enweghị ihe ntụle", "Ego na-enweghị oke", "Enweghị ụbọchị njedebe"], answer: 0, why: "Ebumnuche na oke na-eme ka nnwale baa uru." },
      { objective: "O5", q: "Mgbe nnwale uto gwụrụ, ị na-atụnyere ego otu onye ahịa ọhụrụ na-efu na:", options: ["Logo onye na-asọ mpi", "Nọmba gị kacha mkpa, dị ka ihe onye ahịa bara", "Ihu igwe", "Ụgwọ ekwentị gị"], answer: 1, why: "Ụzọ bara uru ma ọ bụrụ na ndị ahịa bara karịa ego ha na-efu." },
      { objective: "O6", q: "Kedu nọmba ịdị mma ị ga-ele ka ị na-eto?", options: ["Ọnụ ọgụgụ ụdị mkpụrụ akwụkwọ", "Ọnụ ọgụgụ ọrụ e meghachiri ma ọ bụ ego e nyeghachiri", "Ọnụ ọgụgụ osisi dị n'ọfịs", "Ogologo mbinye aka email"], answer: 1, why: "Ọrụ e meghachiri na ego e nyeghachiri na-egosi ịdị mma na-ada." },
      { objective: "O6", q: "Ugboro ole ka ị kwesịrị inyocha atụmatụ ụbọchị 90 gị?", options: ["Kwa izu abụọ", "Ọ dịghị mgbe ọ bụla", "Naanị otu ugboro na njedebe", "Kwa elekere"], answer: 0, why: "Nyocha mgbe niile na-ekwe ka ị gbanwee ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 5, 8, 9, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nọmba kacha mkpa", objective: "O1", notYet: "Nọmba erughị ise, enweghị ebumnuche, ma ọ bụ e leleghị mgbakọ AI.", meets: "Nọmba ise kacha mkpa taa ya na ebumnuche ụbọchị 90, e lelere mgbakọ.", exceeds: "Na-ekwu nke ọma ma ahịa ọ bụla ọ na-eweta uru na ihe kpatara ya." },
      { name: "Ndozi bottleneck", objective: "O2", notYet: "Akpọghị bottleneck aha, ma ọ bụ ndozi ahụ edoghị anya.", meets: "Bottleneck kacha mkpa na otu ndozi: wepụ ya, mee ka igwe rụọ ya, ma ọ bụ nyefee ya.", exceeds: "Na-egosi oge nzọụkwụ ndị na-egosi na ọ bụ ya bụ bottleneck." },
      { name: "Usoro", objective: "O3", notYet: "Usoro erughị abụọ, ma ọ bụ nzọụkwụ ma ọ bụ ọkwa ịdị mma fọdụrụ.", meets: "Usoro abụọ a kpọrọ aha, nke ọ bụla nwere nzọụkwụ, checklist na ọkwa ịdị mma.", exceeds: "Onye ọzọ nwalere opekata mpe otu n'ime ha." },
      { name: "Enyemaka na nnwale uto", objective: "O5", notYet: "Enweghị ego enyemaka ahụ ga-efu, ma ọ bụ nnwale uto enweghị ebumnuche ma ọ bụ oke.", meets: "Enyemaka a ga-agbakwunye na ego ya, na otu nnwale uto nwere ebumnuche, ihe ntụle na oke.", exceeds: "E dere ụdị onye ọrụ site n'ụdị IRS, na atụmatụ ịtụnyere ego otu onye ahịa ọhụrụ na-efu." },
      { name: "Nlele ịdị mma", objective: "O6", notYet: "Nlele erughị atọ, ma ọ bụ enweghị ụbọchị nyocha.", meets: "Nlele ịdị mma atọ kwa izu na nyocha kwa izu abụọ.", exceeds: "Gụnyekwara nlele ngwa AI ndị nwere ozi ndị ahịa." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa mezuru ndozi bottleneck ha na otu nnwale uto n'ime ụbọchị 90 (nnyocha nsochi)",
      "Mgbanwe n'ego na-abata na uru n'ahịa ọ bụla ndị nwe azụmahịa kọrọ mgbe ụbọchị 90 gachara",
      "Ndị nwe azụmahịa gbakwunyere enyemaka (mmadụ ma ọ bụ ngwa AI) nwere usoro e dere ede ọ ga-agbaso"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere spreadsheet na ngwa enyemaka AI n'efu",
      "Ọnụ ọgụgụ ahịa na ụgwọ ọnwa isii e wepụrụ aha ndị ahịa",
      "Template atụmatụ ụbọchị 90 nke otu peeji",
      "Ihe dị ka nkeji 75 maka nkuzi na nnwale, gbakwunyere oge ya na nọmba nke onye nwe azụmahịa"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe azụmahịa ka ha weta nọmba ọnwa isii tupu nnọkọ mbụ.",
      "Lelee na e wepụrụ aha ndị ahịa tupu e tinye ozi ọ bụla n'AI.",
      "Duga ajụjụ gbasara ụdị onye ọrụ, ụtụ isi na iwe mmadụ n'ọrụ na peeji IRS na accountant ma ọ bụ ọka iwu.",
      "Mee ka ndị nwe azụmahịa gosi atụmatụ ụbọchị 90 ha n'obere otu maka ndụmọdụ.",
      "Jiri rubric tụọ akara atụmatụ ahụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

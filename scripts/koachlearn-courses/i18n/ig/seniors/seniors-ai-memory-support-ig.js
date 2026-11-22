"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-memory-support.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Voice commands stay in English inside quotes: phone voice assistants (Siri, Google Assistant, Gemini) do not take Igbo commands.

module.exports = {
  id: "seniors-ai-memory-support-ig",
  lang: "ig",
  translationOf: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "AI Maka Inyere Ncheta Aka",
  skills: "Idebe ncheta na ndetu site n'olu, Iji foto chetara ihe, Iji AI mee ndepụta nlele, Ichikọta ihe e kwuru n'oge nleta na oku, Ịhazi usoro ncheta kwa ụbọchị",
  outcome: "ịhazi obere ngwa ncheta dị mfe n'ekwentị gị: ncheta olu, ndepụta ndetu, foto na-enyere ncheta aka na ndepụta nlele AI mere, ma jiri ha n'usoro gị kwa ụbọchị.",
  about: [
    "Onye ọ bụla na-echefu ihe: ebe ụgbọala dị, ma ọkụ stovu anyụọla, ihe dọkịta kwuru. Ihe ọmụmụ a bụ maka ndị okenye, na ndị ezinụlọ na-enyere ha aka, ndị chọrọ ngwa dị mfe iji cheta ihe kwa ụbọchị nke ọma.",
    "Ị ga-eji onye enyemaka olu dị n'ekwentị gị, ndetu, igwefoto na ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini idebe ncheta, idebe ndepụta, ime ndepụta nlele, na ichikọta ihe e kwuru n'oge nleta.",
    "Ngwa ndị a na-enyere ncheta aka; ha anaghị achọpụta ma ọ bụ agwọ ọrịa ọ bụla. Ọ bụrụ na gị ma ọ bụ ezinụlọ gị na-echegbu onwe unu maka mgbanwe na ncheta, gwa dọkịta gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Hazie ngwa ncheta gị: setịpụ ncheta olu abụọ na-alọghachi, malite ndetu \"Ihe m ga-echeta\", see otu foto na-enyere ncheta aka (dị ka ebe i dobere ụgbọala ma ọ bụ akara ihe ị chọrọ), rịọ AI ka o mee ndepụta nlele \"tupu m apụọ n'ụlọ\", ma jiri ha niile otu ụbọchị zuru ezu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-ahụ na ha na-echefu ihe kwa ụbọchị, dị ka oge nleta, aha mmadụ, ebe ha dobere ụgbọala ma ọ bụ ihe dọkịta kwuru, ma chọọ ngwa dị mfe iji hazie ndụ ha ma kwụrụ n'onwe ha. Ndị ezinụlọ na-elekọta ụfọdụ n'ime ha.",
    startingPoint: "Ha nwere smartphone ma na-akpọ oku ma zipu ozi ederede. Ọtụtụ na-adabere n'akwụkwọ ndetu ma ọ bụ naanị ncheta ha, ma ha ejibeghị ncheta olu, ndetu a pịnụrụ n'elu, albọm foto ma ọ bụ ndepụta nlele AI.",
    gap: "Ichefu oge nleta, ọgwụ ma ọ bụ ihe e kwuru n'oge nleta na-akpata nchegbu ma nwee ike imetụta ahụike na nchekwa. Ngwa ekwentị dị mfe e ji kwa ụbọchị na-enyere ndị okenye aka icheta ihe karịa ma kwụrụ n'onwe ha, ebe nọmba nzuzo anọghị na ndetu na foto, a na-agwakwa dọkịta maka mgbanwe ncheta na-echegbu mmadụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: smartphone nwere onye enyemaka olu, Notes ma ọ bụ Google Keep, na igwefoto",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi n'ijeụkwụ dị nwayọọ, wee otu ụbọchị zuru ezu nke omume",
      "Ahụike: ihe ọmụmụ a na-enyere ncheta kwa ụbọchị aka; mgbanwe na-echegbu mmadụ na-aga n'aka dọkịta",
      "Nzuzo: enweghị okwuntughe, nọmba ụlọ akụ ma ọ bụ nọmba Social Security na ndetu, foto ma ọ bụ prompt AI"
    ],
    prerequisites: "Ọ dịghị. \"AI maka Ndụ Kwa Ụbọchị\" bụ ihe ọmụmụ ọzọ ga-enye aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'oge ahụ i chetara ihe ị ga-eme", action: "idebe ncheta olu nke na-ekwu ihe na mgbe, na-eji \"every\" maka ndị na-alọghachi", standard: "ma kaa ya akara na emechara mgbe i mechara ya" },
    { id: "O2", condition: "Site n'iji Notes ma ọ bụ Google Keep", action: "idebe ndetu \"Ihe m ga-echeta\" a pịnụrụ n'elu ma tinye ihe na ya site n'ide ma ọ bụ n'olu", standard: "na-enweghị okwuntughe ma ọ bụ nọmba nzuzo n'ime ya" },
    { id: "O3", condition: "Mgbe e nyere gị ihe ị ga-echeta, dị ka ebe i dobere ụgbọala", action: "ise foto na-enyere ncheta aka ma chọtakwa ya na foto ndị ọhụrụ gị ma ọ bụ n'albọm", standard: "n'esereghị kaadị ma ọ bụ akwụkwọ nzuzo foto" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ ị na-emekarị", action: "ịrịọ AI maka ndepụta nlele dị mkpụmkpụ, dozie ya ka o dabara ndụ gị ma tinye ya ebe ị ga-ahụ ya", standard: "nke nwere ihe dị mfe na-erughị ihe dị ka asatọ" },
    { id: "O5", condition: "Mgbe nleta ma ọ bụ oku dị mkpa gasịrị", action: "ime ka ndetu gị bụrụ nchịkọta dị mkpụmkpụ na ndepụta ihe ị ga-eme site n'enyemaka AI", standard: "ewepụrụ ozi nzuzo, ma jụọ ọfịs ahụ maka ihe ọ bụla edoghị anya" },
    { id: "O6", condition: "Kwa ụbọchị", action: "ịgbaso usoro ncheta dị mfe nke nlele ụtụtụ na nke mgbede", standard: "ma gwa dọkịta gị maka mgbanwe ncheta na-echegbu gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Idebe ihe ị ga-echeta",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ncheta olu n'oge ahụ i chetara ya",
          minutes: 5,
          goal: "Debe ncheta site n'olu tupu i chefuo ya.",
          text: [
            "Oge kacha mma idebe ncheta bụ oge ahụ i chetara ya. Onye enyemaka olu dị n'ekwentị gị (Siri na iPhone, Google Assistant ma ọ bụ Gemini na Android) na-eme ka nke a dị ngwa: ọ dịghị ide ihe, ọ dịghị ịchọ mkpịsị ode.",
            "Onye enyemaka olu na-aghọta asụsụ bekee. Kwuo: \"Remind me to call the pharmacy tomorrow at 10 am.\" (Chetara m ịkpọ ụlọ ahịa ọgwụ echi n'elekere 10 nke ụtụtụ.) \"Remind me to water the plants every Monday.\" (Chetara m ịgba osisi mmiri Mọnde ọ bụla.) Na ụfọdụ ekwentị, \"Remind me to take my umbrella when I leave home\" na-arụ ọrụ, n'ihi na ha nwere ike ichetara gị dabere n'ebe ị nọ.",
            "Mgbe ncheta ahụ pụtara, mee ihe ahụ ma ọ bụ pịa ka ọ laghachi obere oge (snooze). Kaa ya akara na emechara mgbe i mechara, ka ndepụta gị dị ọcha."
          ],
          steps: ["Kpọte onye enyemaka olu gị.", "Kwuo \"Remind me to...\" ya na ihe na mgbe.", "Jiri \"every\" maka ncheta na-alọghachi.", "Mgbe ọ pụtara, mee ya ma ọ bụ snooze ya.", "Kaa ya akara na emechara."],
          words: [["Snooze", "igbu oge ncheta ka ọ laghachi obere oge ka e mesịa."], ["Ncheta na-alọghachi", "ncheta na-alọghachi n'oge a kara aka, dị ka Mọnde ọ bụla."]],
          slides: [
            { title: "Debe ya ozugbo", bullets: ["Oge ahụ i chetara ya", "Ọ dịghị ide ihe, ọ dịghị mkpịsị ode"] },
            { title: "Kwuo ya", bullets: ["\"Remind me to call the pharmacy at 10 am.\"", "\"Remind me to water plants every Monday.\""] },
            { title: "Mgbe ọ pụtara", bullets: ["Mee ya, ma ọ bụ snooze ya", "Kaa ya akara na emechara"] }
          ],
          tryIt: "Setịpụ ncheta abụọ site n'olu: otu maka echi na otu na-alọghachi kwa izu.",
          youCanNow: "idebe ncheta otu oge na ncheta na-alọghachi site n'olu.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka snooze na-eme ncheta?", options: ["Ọ na-ehichapụ ya", "Ọ na-egbu oge ya ntakịrị ka ọ laghachi", "Ọ na-aka ya akara na emechara", "Ọ na-ezigara ya ezinụlọ"], answer: 1, why: "Snooze na-egbu oge ncheta ntakịrị; kaa ya akara na emechara mgbe i mechara." },
            { objective: "O1", q: "Mgbe ị na-esi nri, i chetara na ị ga-akpọ ụlọ akụ echi. Gịnị ka ị ga-eme?", options: ["Tụọ anya na ị ga-echeta", "Dee ya na akwụkwọ nhicha aka ma e mesịa", "Gwa ekwentị gị: \"Remind me to call the bank tomorrow at 10 am.\"", "Kpọọ ụlọ akụ ugbu a n'abalị"], answer: 2, why: "Debe ncheta oge ahụ i chetara ya, site n'olu, ya na ihe na mgbe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ndepụta ndetu maka ihe ị ga-echeta",
          minutes: 5,
          goal: "Debe ndetu \"Ihe m ga-echeta\" n'ekwentị gị ma tinye ihe na ya site n'olu.",
          text: [
            "Ụfọdụ ihe enweghị oge a kara aka: aha onye agbata obi ọhụrụ, akwụkwọ enyi gị kwuru ka ị gụọ, ebe i dobere igodo nke abụọ. Ihe ndị a kwesịrị ịnọ na ndetu.",
            "Meghee app Notes (ma ọ bụ Google Keep n'ọtụtụ ekwentị Android) ma mepụta ndetu aha ya bụ \"Ihe m ga-echeta\". Pịnụ ya n'elu ma ọ bụrụ na app gị kwere. Ị nwere ike itinye ihe na ya site n'ide ma ọ bụ site n'ịpị igwe okwu (microphone) dị na kiiboodu ma kwuo okwu.",
            "Mee ka ndetu ahụ dị mfe: otu ahịrị maka ihe ọ bụla, nke ọhụrụ n'elu. Echekwala okwuntughe, nọmba ụlọ akụ ma ọ bụ nọmba Social Security (nọmba njirimara gọọmentị US) na ndetu nkịtị mgbe ọ bụla."
          ],
          steps: ["Meghee Notes ma ọ bụ Google Keep.", "Mepụta ndetu aha ya bụ \"Ihe m ga-echeta\".", "Pịnụ ya n'elu ma ọ bụrụ na ị nwere ike.", "Tinye ihe site n'ide ma ọ bụ site n'igwe okwu kiiboodu.", "Ewepụla nọmba nzuzo n'ime ya."],
          words: [["App Notes", "app maka ide na ichekwa ndetu n'ekwentị gị."], ["Pịnụ (pin)", "idebe ihe n'elu ndepụta ka ọ dị mfe ịchọta."]],
          slides: [
            { title: "Enweghị oge a kara aka?", bullets: ["Aha onye agbata obi", "Akwụkwọ ị ga-agụ", "Ebe igodo nke abụọ dị"] },
            { title: "Mee ndetu gị", bullets: ["Notes ma ọ bụ Google Keep", "Kpọọ ya \"Ihe m ga-echeta\"", "Pịnụ ya n'elu"] },
            { title: "Mee ka ọ dị mfe ma dị nchebe", bullets: ["Otu ahịrị maka ihe ọ bụla", "Jiri igwe okwu kiiboodu", "Enweghị okwuntughe ma ọ bụ nọmba ụlọ akụ"] }
          ],
          tryIt: "Mepụta ndetu \"Ihe m ga-echeta\" ma tinye ihe atọ, opekata mpe otu site n'ikwu okwu n'igwe okwu kiiboodu.",
          youCanNow: "idebe ndepụta ndetu maka ihe ị chọrọ icheta ma tinye ihe na ya site n'olu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ịpịnụ ndetu na-eme?", options: ["Ọ na-edebe ya n'elu ndetu gị", "Ọ na-eji okwuntughe kpọchie ya", "Ọ na-ehichapụ ya mgbe otu ụbọchị gasịrị", "Ọ na-ekesara ya ezinụlọ"], answer: 0, why: "Ịpịnụ na-edebe ndetu \"Ihe m ga-echeta\" gị n'elu ebe ị ga-achọta ya." },
            { objective: "O2", q: "Enyi gị kwuru otu akwụkwọ mgbe ị nọ n'èzí. Ebee ka ọ ga-aga?", options: ["Na ncheta nwere oge", "N'app ụlọ akụ gị", "Ebe ọ bụla; ị ga-echeta", "Na ndetu \"Ihe m ga-echeta\" gị"], answer: 3, why: "Ihe na-enweghị oge a kara aka, dị ka aha akwụkwọ, kwesịrị ịnọ na ndetu gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Foto dị ka ihe na-enyere ncheta aka",
          minutes: 4,
          goal: "Jiri igwefoto gị cheta ebe ihe dị na ihe ha na-ekwu.",
          text: [
            "Foto e sere ngwa ngwa nwere ike icheta ihe maka gị. See foto akara ebe i dobere ụgbọala ma ọ bụ nọmba ọkwa ya, ime friji tupu ị gaa ahịa, akara bọlbụ ọkụ ị ga-agbanwe, ma ọ bụ bọtịnụ stovu e mechiri tupu ị pụọ.",
            "Iji chọta ha ma e mesịa, mepụta albọm aha ya bụ \"Ihe na-enyere ncheta aka\" n'app foto gị, ma ọ bụ lee naanị foto ndị ọhụrụ gị. Hichapụ ha mgbe ị chọkwaghị ha.",
            "Esela foto akwụkwọ nzuzo dị ka kaadị ụlọ akụ ma ọ bụ kaadị Social Security gị maka nke a; ọ bụrụ na ekwentị gị efuo, a pụrụ iji foto ndị ahụ mee ihe ọjọọ."
          ],
          steps: ["See foto ngwa ngwa nke ihe ị ga-echeta.", "Lee foto ndị ọhụrụ, ma ọ bụ debe albọm \"Ihe na-enyere ncheta aka\".", "Hichapụ foto ncheta mgbe i mechara.", "Esela kaadị ma ọ bụ akwụkwọ nzuzo foto."],
          words: [["Ihe na-enyere ncheta aka", "ihe ọ bụla na-enyere gị aka icheta, dị ka ndetu, mkpu ma ọ bụ foto."]],
          slides: [
            { title: "Ka igwefoto cheta", bullets: ["Ebe i dobere ụgbọala", "Ime friji", "Akara ihe ị chọrọ", "Bọtịnụ stovu e mechiri"] },
            { title: "Chọta ha ma e mesịa", bullets: ["Lee foto ndị ọhụrụ", "Ma ọ bụ albọm \"Ihe na-enyere ncheta aka\"", "Hichapụ ha mgbe i mechara"] },
            { title: "Mee ka ọ dị nchebe", bullets: ["Esela kaadị ụlọ akụ ma ọ bụ kaadị ID foto"] }
          ],
          tryIt: "See otu foto na-enyere ncheta aka taa, dị ka ime friji gị ma ọ bụ ebe i dobere ụgbọala. Chọtakwa ya na foto gị mgbe otu awa gasịrị.",
          youCanNow: "iji foto cheta ebe ihe dị na ihe ha na-ekwu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị na-agaghị edebe foto kaadị ụlọ akụ gị dị ka ihe na-enyere ncheta aka?", options: ["Foto kaadị anaghị edo anya", "Ọ bụrụ na ekwentị gị efuo, a pụrụ iji foto ahụ mee ihe ọjọọ", "Ọ na-ewe ọtụtụ ebe", "Ụlọ akụ anaghị ekwe ka e see foto"], answer: 1, why: "A pụrụ iji foto kaadị nzuzo mee ihe ọjọọ ma ọ bụrụ na ekwentị efuo." },
            { objective: "O3", q: "I dobere ụgbọala n'ọkwa 3 nke nnukwu ebe ndọba ụgbọala. Kedu ụzọ dị ngwa isi cheta ya?", options: ["See foto akara ọkwa ahụ", "Dee ya n'ozi ederede i zitere onye ị na-amaghị", "Gụọ ọnụ ụgbọala ndị ahụ", "Hapụ ụgbọala ahụ n'emeghe"], answer: 0, why: "Foto e sere ngwa ngwa nke akara ebe ndọba ụgbọala na-echeta ya maka gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Idebe ihe ị ga-echeta",
        questions: [
          { objective: "O1", q: "Kedu oge kacha mma idebe ncheta?", options: ["Naanị na Sọnde", "Izu na-abịa", "Oge ahụ i chetara ya", "Ọ dịghị mgbe"], answer: 2, why: "Idebe ya ozugbo na-egbochi ichefu ya." },
          { objective: "O1", q: "Kedu arịrịọ olu na-eme ncheta kwa izu?", options: ["\"Remind me to water the plants every Monday.\"", "\"Plants.\"", "\"Monday.\"", "\"Water.\""], answer: 0, why: "\"Every\" (ọ bụla) na-eme ka ọ lọghachi." },
          { objective: "O2", q: "Ebee ka aha onye agbata obi ọhụrụ kwesịrị ịga?", options: ["N'ozi ederede e zigara ndị ị na-amaghị", "N'igbe okwuntughe", "Ebe ọ bụla", "Na ndetu \"Ihe m ga-echeta\" gị"], answer: 3, why: "Ndetu na-ejide ihe na-enweghị oge a kara aka." },
          { objective: "O2", q: "Gịnị ka ọ na-ekwesịghị ịnọ MGBE Ọ BỤLA na ndetu nkịtị?", options: ["Aha akwụkwọ", "Okwuntughe na nọmba ụlọ akụ", "Aha onye agbata obi", "Usoro isi nri"], answer: 1, why: "Ndetu nkịtị adịghị nchebe maka nọmba nzuzo." },
          { objective: "O3", q: "Kedu nke bụ ezigbo foto na-enyere ncheta aka?", options: ["Kaadị ụlọ akụ gị", "Akara ọkwa ebe ndọba ụgbọala", "Kaadị Social Security gị", "Okwuntughe gị"], answer: 1, why: "E kwesịghị ise kaadị nzuzo foto maka ncheta." }
        ]
      }
    },
    {
      name: "Isi 2: Usoro na ndị enyemaka AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ndepụta nlele AI mere",
          minutes: 5,
          goal: "Rịọ AI maka ndepụta nlele dị mkpụmkpụ maka ọrụ ị na-emekarị.",
          text: [
            "Ndepụta nlele (checklist) na-enyere onye ọ bụla aka, site n'ndị na-anya ụgbọelu ruo ndị dọkịta. Ngwa enyemaka AI nwere ike ime otu maka ọrụ ọ bụla ị na-emekarị: ịpụ n'ụlọ, ịkwado maka njem, ma ọ bụ abalị tupu nleta.",
            "Rịọ: \"Meere m ndepụta nlele dị mkpụmkpụ maka ịpụ n'ụlọ: ihe na-erughị asatọ, n'okwu dị mfe.\" Wee dozie ya ka o dabara ụlọ gị: \"Tinye: lelee ọnụ ụzọ azụ. Wepụ: nye nwamba nri.\"",
            "Bipụta ya ma maa ya n'akụkụ ọnụ ụzọ, ma ọ bụ chekwaa ya na Notes gị. Ndepụta nlele na-enye aka naanị ma ọ bụrụ na ọ nọ ebe ị ga-ahụ ya n'oge kwesịrị ekwesị."
          ],
          steps: ["Họrọ ọrụ ị na-emekarị.", "Rịọ AI maka ndepụta nlele dị mkpụmkpụ n'okwu dị mfe.", "Tinye ma ọ bụ wepụ ihe ka o dabara ndụ gị.", "Tinye ya ebe ị ga-ahụ ya n'oge kwesịrị ekwesị."],
          words: [["Ndepụta nlele (checklist)", "ndepụta nzọụkwụ ị na-aka akara otu n'otu."]],
          slides: [
            { title: "Ndepụta nlele na-enyere onye ọ bụla aka", bullets: ["Ịpụ n'ụlọ", "Ịkwado maka njem", "Abalị tupu nleta"] },
            { title: "Rịọ AI", bullets: ["\"Ndepụta nlele dị mkpụmkpụ, ihe na-erughị asatọ\"", "Wee tinye ma ọ bụ wepụ ihe"] },
            { title: "Tinye ya ebe kwesịrị ekwesị", bullets: ["Maa ya n'akụkụ ọnụ ụzọ", "Ma ọ bụ chekwaa ya na Notes"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka ndepụta nlele \"tupu m apụọ n'ụlọ\" nke nwere ihe na-erughị asatọ. Gbanwee ya ka o dabara ụlọ gị, ma bipụta ya ma ọ bụ chekwaa ya.",
          youCanNow: "iji AI mee ndepụta nlele nke gị ma tinye ya ebe ọ na-enye aka.",
          quickCheck: [
            { objective: "O4", q: "Mgbe ole ka ndepụta nlele na-enye aka karịa?", options: ["Mgbe e chekwara ya ebe ị na-anaghị ele", "Mgbe ọ dị ogologo nke ukwuu", "Mgbe ọ nọ ebe ị ga-ahụ ya n'oge kwesịrị ekwesị", "Mgbe ọ bụ naanị AI nwere ike ịgụ ya"], answer: 2, why: "Ndepụta nlele na-enye aka naanị ma ọ bụrụ na ị hụrụ ya n'oge kwesịrị ekwesị, dị ka n'akụkụ ọnụ ụzọ." },
            { objective: "O4", q: "Ndepụta nlele AI kwuru \"nye nwamba nri\" mana ị nweghị nwamba. Gịnị ka ị ga-eme?", options: ["Zụta nwamba", "Rịọ maka ndepụta ọhụrụ kwa ụbọchị", "Leghara ndepụta ahụ niile anya", "Wepụ ihe ahụ ma tinye ihe ọ bụla ị chọrọ"], answer: 3, why: "Dozie ndepụta nlele ahụ ka o dabara ụlọ gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Icheta ihe e kwuru n'oge nleta",
          minutes: 5,
          goal: "Debe isi ihe e kwuru n'oge nleta ma ọ bụ oku, ma mee ka ha bụrụ nchịkọta doro anya.",
          text: [
            "Ọ dị mfe ichefu ihe dọkịta, ọka iwu ma ọ bụ onye na-arụzi ihe kwuru. Were ndepụta ajụjụ e dere ede, ma dee azịza ha, ma ọ bụ rịọ onye ezinụlọ ka o soro gị bịa dee ndetu.",
            "Mgbe e mesịrị, dee ndetu gị n'ime ngwa enyemaka AI, na-enweghị aha, ụbọchị ọmụmụ ma ọ bụ nọmba akaụntụ, ma jụọ: \"Mee ka ndetu ndị a bụrụ nchịkọta dị mkpụmkpụ ya na ndepụta ihe m ga-eme.\" Chekwaa nchịkọta ahụ na Notes.",
            "Ọ bụrụ na ihe edoghị anya, kpọọ ọfịs ahụ ka ị jụọ. Ọtụtụ ọfịs dọkịta na-etinyekwa nchịkọta nleta na patient portal ha. Ụfọdụ ndị na-ajụ ma ha nwere ike ịdekọ nleta n'ekwentị ha; jụọ ikike mgbe niile tupu i dekọọ."
          ],
          steps: ["Were ndepụta ajụjụ ma dee azịza ha.", "Were onye ezinụlọ ma ọ bụrụ na ị nwere ike.", "Dee ndetu n'ime AI na-enweghị ozi nzuzo.", "Rịọ maka nchịkọta na ndepụta ihe ị ga-eme.", "Jụọ ọfịs ahụ maka ihe ọ bụla edoghị anya."],
          words: [["Nchịkọta", "obere ụdị nke isi ihe ndị ahụ."], ["Patient portal", "weebụsaịtị ma ọ bụ app ebe ọfịs dọkịta gị na-ekesa ndetu nleta na nsonaazụ ule."]],
          slides: [
            { title: "Debe ya n'oge ahụ", bullets: ["Were ajụjụ, dee azịza", "Were onye ezinụlọ"] },
            { title: "Ka AI hazie ya", bullets: ["Dee ndetu na-enweghị ozi nzuzo", "Rịọ maka nchịkọta na ndepụta ihe ị ga-eme", "Chekwaa ya na Notes"] },
            { title: "Jụọ ka ị jide n'aka", bullets: ["Kpọọ ọfịs ahụ ma ọ bụrụ na o doghị anya", "Lelee patient portal", "Jụọ tupu i dekọọ onye ọ bụla"] }
          ],
          tryIt: "Dee ndetu atọ site n'oku ma ọ bụ nleta i nwere n'oge na-adịbeghị anya (hapụ aha na nọmba). Rịọ ngwa enyemaka AI ka o mee ha nchịkọta dị mkpụmkpụ ya na ndepụta ihe ị ga-eme, ma chekwaa ya.",
          youCanNow: "idebe na ichikọta ihe e kwuru n'oge nleta ma ọ bụ oku.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ patient portal?", options: ["Ọnụ ụzọ ụlọ ọgwụ", "Weebụsaịtị ma ọ bụ app ebe ọfịs dọkịta gị nwere ike ikesa ndetu nleta", "Ụlọ ahịa ọgwụ", "Ngwa enyemaka AI"], answer: 1, why: "Ọtụtụ ọfịs dọkịta na-etinye nchịkọta nleta na patient portal ha." },
            { objective: "O5", q: "Ị chọrọ ịdekọ ihe dọkịta na-ekwu n'ekwentị gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Jụọ ikike", "Zoo ekwentị ahụ", "Dekọọ n'ekwughị ihe ọ bụla", "Tinye ihe e dekọrọ n'ịntanetị"], answer: 0, why: "Jụọ ikike mgbe niile tupu i dekọọ nleta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usoro ncheta kwa ụbọchị",
          minutes: 5,
          goal: "Chịkọta ngwa ncheta gị ka ha bụrụ usoro dị mfe kwa ụbọchị.",
          text: [
            "Ngwa na-arụ ọrụ nke ọma mgbe ha ghọrọ omume. Usoro dị mfe kwa ụbọchị: n'ụtụtụ, lee ncheta na kalenda nke taa. N'ehihie, debe ncheta na ndetu oge ahụ i chetara ha. Tupu ị lakpuo ụra, lelee ncheta nke echi na ndetu \"Ihe m ga-echeta\" gị.",
            "Debe ihe n'otu ebe ahụ kwa ụbọchị: igodo, enyo anya na ekwentị n'otu efere n'akụkụ ọnụ ụzọ. Obere ngwa nchọta (tracking tag) n'igodo gị (dị ka Apple AirTag ma ọ bụ Tile) nwere ike inyere gị aka ịchọta ha site n'ekwentị gị.",
            "Mee onwe gị ebere. Ichefu ụfọdụ ihe bụ ihe nkịtị. Ọ bụrụ na gị ma ọ bụ ezinụlọ gị hụrụ mgbanwe ncheta na-echegbu unu, dị ka ịfụ ụzọ n'ebe ị maara nke ọma ma ọ bụ nsogbu n'ọrụ kwa ụbọchị, gwa dọkịta gị. MedlinePlus (medlineplus.gov) nwere ozi a pụrụ ịtụkwasị obi gbasara ncheta."
          ],
          steps: ["Ụtụtụ: lelee ncheta na kalenda.", "Ehihie: debe ncheta na ndetu ozugbo.", "Mgbede: lelee echi na ndetu gị.", "Debe igodo, enyo anya na ekwentị n'otu ebe.", "Gwa dọkịta gị maka mgbanwe na-echegbu gị."],
          words: [["Ngwa nchọta (tracking tag)", "obere ngwaọrụ dị n'igodo ma ọ bụ akpa nke ekwentị gị nwere ike ịchọta."]],
          slides: [
            { title: "Usoro dị mfe kwa ụbọchị", bullets: ["Ụtụtụ: lelee ncheta na kalenda", "Ehihie: debe ihe ozugbo", "Mgbede: lelee echi"] },
            { title: "Otu ebe ahụ kwa ụbọchị", bullets: ["Igodo, enyo anya, ekwentị n'otu efere", "Ngwa nchọta nwere ike inye aka ịchọta igodo"] },
            { title: "Mee onwe gị ebere", bullets: ["Ichefu ụfọdụ ihe bụ ihe nkịtị", "Ị na-echegbu onwe gị? Gwa dọkịta gị", "MedlinePlus nwere ozi a pụrụ ịtụkwasị obi"] }
          ],
          sources: [{ name: "MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/" }],
          tryIt: "Ọrụ ikpeazụ: hazie ngwa ncheta gị (ncheta olu abụọ na-alọghachi, ndetu \"Ihe m ga-echeta\", otu foto na-enyere ncheta aka, na ndepụta nlele \"tupu m apụọ n'ụlọ\" AI mere) ma jiri ha niile otu ụbọchị zuru ezu ya na nlele ụtụtụ na mgbede.",
          youCanNow: "iji ncheta, ndetu, foto, ndepụta nlele na nchịkọta AI n'usoro kwa ụbọchị na-enyere ncheta gị aka.",
          quickCheck: [
            { objective: "O6", q: "Kedu ezigbo omume ncheta mgbede?", options: ["Hichapụ ncheta niile", "Gbanyụọ ekwentị gị otu izu", "Lelee ncheta nke echi na ndetu \"Ihe m ga-echeta\" gị", "Dee ndepụta nlele ọhụrụ kwa abalị"], answer: 2, why: "Tupu ị lakpuo ụra, lelee ncheta nke echi na ndetu gị." },
            { objective: "O6", q: "Ị na-atụfu enyo anya gị n'ụlọ mgbe niile. Kedu omume dị mfe ga-enye aka?", options: ["Zụta enyo anya ọhụrụ kwa izu", "Debe igodo, enyo anya na ekwentị n'otu efere n'akụkụ ọnụ ụzọ", "Kwụsị iyi enyo anya", "Jụọ AI ebe ha dị"], answer: 1, why: "Idebe ihe n'otu ebe ahụ kwa ụbọchị pụtara na ị maara ebe ha dị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Usoro na ndị enyemaka AI",
        questions: [
          { objective: "O4", q: "Ebee ka ndepụta nlele \"ịpụ n'ụlọ\" kwesịrị ịnọ?", options: ["Ebe ọ bụla", "N'ime drọwa", "N'azụ ụgbọala", "N'akụkụ ọnụ ụzọ ebe ị ga-ahụ ya"], answer: 3, why: "Ndepụta nlele na-enye aka mgbe a hụrụ ya n'oge kwesịrị ekwesị." },
          { objective: "O5", q: "Tupu i dee ndetu nleta n'ime AI, wepụ:", options: ["Aha, ụbọchị ọmụmụ na nọmba akaụntụ", "Ihe ndị ị ga-eme", "Okwu \"dọkịta\"", "Ọ dịghị ihe"], answer: 0, why: "Ozi nzuzo anaghị abanye n'AI." },
          { objective: "O5", q: "Tupu i dekọọ mkparịta ụka n'oge nleta, ị kwesịrị:", options: ["Ịdekọ ya na nzuzo", "Izo ekwentị ahụ", "Ịjụ ikike", "Itinye ya n'ịntanetị"], answer: 2, why: "Jụọ mgbe niile tupu i dekọọ mmadụ." },
          { objective: "O6", q: "Ezigbo omume mgbede bụ:", options: ["Ikesa okwuntughe gị", "Ihichapụ ncheta niile", "Ịgbanyụ ekwentị otu izu", "Ilele ncheta nke echi na ndetu gị"], answer: 3, why: "Ọ na-akwado gị maka ụbọchị na-esote." },
          { objective: "O6", q: "Ị hụrụ na ụzọ fụrụ gị n'ebe ị maara nke ọma. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Rịọ AI ka ọ chọpụta ọrịa", "Gwa dọkịta gị", "Zụta ọgwụ mgbakwunye n'ịntanetị"], answer: 2, why: "Dọkịta kwesịrị ilele mgbanwe ncheta na-echegbu mmadụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI Maka Inyere Ncheta Aka",
    questions: [
      { objective: "O1", q: "Gịnị mere ị ga-eji debe ncheta ozugbo?", options: ["Ọ na-echekwa batrị", "Ka ị ghara ichefu ya", "Ọ bụ iwu", "Ọ na-efu obere ego"], answer: 1, why: "Oge ahụ na-agafe ngwa ngwa." },
      { objective: "O1", q: "\"Snooze\" pụtara:", options: ["Igbu oge ncheta ntakịrị", "Ihichapụ ya", "Ikesa ya", "Ibipụta ya"], answer: 0, why: "Snooze na-eme ka ọ laghachi ma e mesịa." },
      { objective: "O1", q: "Kedu okwu na-eme ka ncheta lọghachi?", options: ["\"every\"", "\"maybe\"", "\"once\"", "\"never\""], answer: 0, why: "\"Every Monday\" (Mọnde ọ bụla) na-alọghachi kwa izu." },
      { objective: "O1", q: "Mgbe i mechara ihe ncheta kwuru, ị kwesịrị:", options: ["Ịhapụ ya ruo mgbe ebighị ebi", "Ịka ya akara na emechara", "Ịsetịpụ ya ọzọ", "Ihichapụ app ahụ"], answer: 1, why: "Ịka akara na emechara na-eme ka ndepụta gị dị ọcha." },
      { objective: "O2", q: "Ndepụta ndetu kacha mma maka:", options: ["Nọmba ụlọ akụ", "Okwuntughe", "Ihe na-enweghị oge a kara aka", "Nọmba Social Security"], answer: 2, why: "Ndetu na-ejide aha, echiche na ebe ihe dị." },
      { objective: "O2", q: "Ịpịnụ ndetu:", options: ["Na-akpọchi ekwentị gị", "Na-ehichapụ ya", "Na-ekesa ya n'ihu ọha", "Na-edebe ya n'elu"], answer: 3, why: "Ndetu a pịnụrụ dị mfe ịchọta." },
      { objective: "O2", q: "Iji tinye ihe na ndetu n'edeghị ihe, jiri:", options: ["Bọtịnụ olu ekwentị", "Igwefoto", "Igwe okwu kiiboodu", "Ọkụ ekwentị"], answer: 2, why: "Igwe okwu na-ede ihe ị kwuru." },
      { objective: "O3", q: "Ezigbo foto na-enyere ncheta aka bụ:", options: ["Ime friji gị tupu ị gaa ahịa", "Kaadị ụlọ akụ gị", "Peeji paspọtụ gị", "PIN gị"], answer: 0, why: "E kwesịghị ise akwụkwọ nzuzo foto maka ncheta." },
      { objective: "O3", q: "Mgbe ị chọkwaghị foto ncheta:", options: ["Zigara ndị ị na-amaghị ha", "Tinye ha n'ịntanetị", "Bipụta ha niile", "Hichapụ ha"], answer: 3, why: "Ihichapụ ha na-eme ka foto dị ọcha ma bụrụ nzuzo." },
      { objective: "O4", q: "Ndepụta nlele bụ:", options: ["Akwụkwọ akaụntụ ụlọ akụ", "Ndepụta nzọụkwụ ị na-aka akara", "Okwuntughe", "Ekwentị"], answer: 1, why: "Ndepụta nlele na-eduzi usoro ọrụ." },
      { objective: "O4", q: "Ezigbo arịrịọ ndepụta nlele nye AI bụ:", options: ["\"ndepụta\"", "\"Ndepụta nlele dị mkpụmkpụ maka ịpụ n'ụlọ, ihe na-erughị asatọ, okwu dị mfe.\"", "\"ihe\"", "\"enyemaka\""], answer: 1, why: "Ọ na-ekwu ọrụ ahụ, ogologo ya na ụdị ya." },
      { objective: "O4", q: "Mgbe AI mechara ndepụta nlele, ị kwesịrị:", options: ["Ikesa okwuntughe gị", "Iji ya otu o si dị n'agbanyeghị ihe ọ bụla", "Ihichapụ ya", "Idozi ya ka o dabara ụlọ gị"], answer: 3, why: "Ụlọ gị dị iche." },
      { objective: "O5", q: "N'oge nleta dọkịta, onye ezinụlọ nwere ike inye aka site na:", options: ["Ide ndetu", "Ịza ajụjụ n'ọnọdụ gị n'ajụghị gị", "Ikesa okwuntughe gị", "Ịdekọ ihe na nzuzo"], answer: 0, why: "Onye nke abụọ na-ege ntị na-anụ ihe karịa." },
      { objective: "O5", q: "AI nwere ike ime ka ndetu gị bụrụ:", options: ["Akwụkwọ ọgwụ dọkịta", "Nchọpụta ọrịa", "Nchịkọta dị mkpụmkpụ ya na ndepụta ihe ị ga-eme", "Mkpebi ụlọikpe"], answer: 2, why: "Ichikọta ihe bụ ike ya; ịchọpụta ọrịa abụghị." },
      { objective: "O5", q: "Patient portal bụ:", options: ["Ụlọ akụ", "Ọnụ ụzọ ụlọ ọgwụ", "Ebe nkwụsị ụgbọ ala", "Weebụsaịtị ma ọ bụ app ebe dọkịta gị na-ekesa ndetu nleta"], answer: 3, why: "Portal na-ekesa nchịkọta nleta na nsonaazụ ule." },
      { objective: "O5", q: "Ọ bụrụ na nchịkọta edoghị anya, ị kwesịrị:", options: ["Ileghara ya anya", "Ịkọ nkọ", "Ịkpọ ọfịs ahụ ka ị jụọ", "Ịjụ onye ị na-amaghị n'ịntanetị"], answer: 2, why: "Ọfịs ahụ bụ isi iyi a pụrụ ịtụkwasị obi." },
      { objective: "O6", q: "Nlele usoro ụtụtụ gụnyere:", options: ["Ịgbanwe okwuntughe", "Ncheta na kalenda nke taa", "Ihichapụ ndetu", "Ịzụta ekwentị ọhụrụ"], answer: 1, why: "Ọ na-ahazi ụbọchị gị." },
      { objective: "O6", q: "Idebe igodo, enyo anya na ekwentị n'otu efere na-enye aka n'ihi na:", options: ["Ị na-ama ebe ha dị mgbe niile", "Ọ mara mma", "Ọ na-achaji ha", "Ọ bụ iwu"], answer: 0, why: "Otu ebe ahụ, ọchụchọ na-ebelata." },
      { objective: "O6", q: "Ngwa nchọta n'igodo na-enye gị ike:", options: ["Ịchọta ha site n'ekwentị gị", "Imeghe ọnụ ụzọ ọ bụla", "Ịmalite ụgbọala site n'ebe dị anya", "Ịkwụ ụgwọ"], answer: 0, why: "Ekwentị gị nwere ike ịchọta ngwa ahụ." },
      { objective: "O6", q: "Ebee ka ị nwere ike ịchọta ozi a pụrụ ịtụkwasị obi gbasara ncheta?", options: ["Mgbasa ozi na-apụta na mberede", "MedlinePlus (medlineplus.gov) na dọkịta gị", "Onye na-ere ọgwụ mgbakwunye", "Asịrị na soshal midia"], answer: 1, why: "MedlinePlus bụ weebụsaịtị ahụike gọọmentị n'efu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 10, 13, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ncheta olu", objective: "O1", notYet: "Ncheta na-erughị abụọ, ma ọ bụ ha anaghị alọghachi.", meets: "Ncheta abụọ na-alọghachi e setịpụrụ site n'olu, nke ọ bụla nwere ihe na mgbe.", exceeds: "Kaara ha akara na emechara ma ọ bụ snooze ha ka ha na-apụta n'ụbọchị ahụ." },
      { name: "Ndetu ihe m ga-echeta", objective: "O2", notYet: "Enweghị ndetu, ma ọ bụ o nwere okwuntughe ma ọ bụ nọmba nzuzo.", meets: "Ndetu \"Ihe m ga-echeta\" nwere opekata mpe otu ihe na-enweghị nọmba nzuzo.", exceeds: "A pịnụrụ ndetu ahụ n'elu ma tinye otu ihe site n'olu." },
      { name: "Foto na-enyere ncheta aka", objective: "O3", notYet: "Enweghị foto, ma ọ bụ foto kaadị ma ọ bụ akwụkwọ nzuzo.", meets: "Otu foto bara uru na-enyere ncheta aka, dị ka ebe i dobere ụgbọala ma ọ bụ akara ihe.", exceeds: "E chekwara ya n'albọm \"Ihe na-enyere ncheta aka\" ma hichapụ ya mgbe a chọkwaghị ya." },
      { name: "Ndepụta nlele ịpụ n'ụlọ", objective: "O4", notYet: "Enweghị ndepụta nlele, ma ọ bụ o dabaghị ụlọ gị.", meets: "Ndepụta nlele AI dị mkpụmkpụ e dozichara ka o dabara ụlọ gị ma tinye ya ebe ị ga-ahụ ya.", exceeds: "Jiri ndepụta nlele ahụ oge ọ bụla i si n'ụlọ pụọ n'ụbọchị ahụ." },
      { name: "Ejiri ya otu ụbọchị zuru ezu", objective: "O6", notYet: "A haziri ngwa ndị ahụ mana ejighị ha.", meets: "Jiri ngwa ncheta ahụ otu ụbọchị zuru ezu, ya na nlele ụtụtụ na mgbede.", exceeds: "Nwere ike ikwu ngwa nyere aka karịa na ihe ọ ga-agbanwe." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-eji usoro ncheta na ncheta ha mgbe ụbọchị 30 gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha na-atụfu obere nleta ma ọ bụ na-echegbu onwe ha obere maka ichefu ihe",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọzọ nke Seniors and Technology n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere onye enyemaka olu, Notes ma ọ bụ Google Keep, na igwefoto",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini)",
      "Igwe mbipụta ma ọ bụ akwụkwọ na teepu maka ndepụta nlele (ọ bụghị iwu)",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke dị nwayọọ, gbakwunyere otu ụbọchị zuru ezu nke omume"
    ],
    facilitatorNotes: [
      "Kwuo okwu n'ụzọ dị nwayọọ na nke bara uru; ichefu ụfọdụ ihe bụ ihe nkịtị, ọ bụghịkwa ihe ihere.",
      "Nyere ndị na-amụ ihe aka gbanye onye enyemaka olu ha ma chọta igwe okwu kiiboodu tupu Nkuzi 1.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye okwuntughe ma ọ bụ nọmba nzuzo na ndetu, foto ma ọ bụ prompt AI.",
      "Atụla ahụike ncheta; gbaa ndị na-amụ ihe ma ọ bụ ezinụlọ nwere nchegbu ume ka ha gwa dọkịta.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

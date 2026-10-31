"use strict";

// Koach Learn course (Igbo translation of shared/intro-to-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "intro-to-ai-ig",
  lang: "ig",
  translationOf: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Mmalite Ọgụgụ Isi Arụrụ Arụ (AI)",
  skills: "Ịkọwa ihe AI bụ, Ịhụ AI na ndụ kwa ụbọchị, Ide prompt doro anya, Ime ka azịza ka mma na ịlele ya, Iji AI n'eziokwu na n'enweghị nsogbu",
  outcome: "ịkọwa n'okwu dị mfe ihe ọgụgụ isi arụrụ arụ (AI) bụ na otu o si amụta ihe, ịhụ ya na ngwa ndị ị na-eji ugbu a, na iji ngwa enyemaka AI n'efu mechaa ezi ọrụ kwa ụbọchị: ịjụ ajụjụ doro anya, ime ka azịza ka mma, ịlele ya, na idebe ozi nzuzo n'ebe ọ na-adịghị.",
  about: [
    "Ọgụgụ isi arụrụ arụ, ma ọ bụ AI, dị n'ekwentị, maapụ, email, weebụsaịtị ahịa na weebụsaịtị ọrụ. Ihe ọmụmụ a na-akọwa ihe ọ bụ n'okwu dị mfe, wee gosi gị otu esi eji ya nke ọma. Ọ bụ maka onye ọ bụla: nne na nna ochie, ụmụ akwụkwọ, ndị na-achọ ọrụ, ndị ọrụ afọ ofufo na obere otu.",
    "N'Isi 1, ị ga-amụta ihe AI bụ, otu o si amụta ihe site n'ọmụmaatụ, na ebe ị na-ahụ ya ugbu a. N'Isi 2, ị ga-eji ngwa enyemaka AI n'efu rụọ ezi ọrụ, lelee ihe ọ kwuru, ma jiri ya n'eziokwu na n'enweghị nsogbu.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise: gụọ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". Obere nnwale ihe ọmụma na-akwụsị isi ọ bụla, ule nwere ajụjụ 20 na-akwụsịkwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Họrọ otu ezi ọrụ, dị ka ịhazi nri abalị ezinụlọ, ozi na-akpọ ndị ọrụ afọ ofufo, ma ọ bụ atụmatụ ọmụmụ ihe kwa izu. Jiri ngwa enyemaka AI n'efu mee ya: dee prompt doro anya, rịọ maka mgbanwe abụọ ga-eme ka ọ ka mma, lelee otu eziokwu dị n'azịza ahụ na weebụsaịtị gọọmentị ma ọ bụ nke a pụrụ ịtụkwasị obi, ma hụ na prompt ahụ enweghị ozi nzuzo. Wee kọwara enyi gị n'ahịrịokwu atọ ihe AI bụ na ihe mere i ji lelee azịza ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bụ ndị ọhụrụ n'AI: ndị agadi, ụmụ akwụkwọ, ndị na-achọ ọrụ, ndị ọrụ afọ ofufo, ndị si n'ụlọ mkpọrọ lọta, na ndị ọrụ nọ n'otu enyemaka (nonprofit) na obere otu. Ọtụtụ anụla maka AI n'akụkọ mana ha ejibeghị ngwa enyemaka AI n'ụma.",
    startingPoint: "Ha nwere ike iji ekwentị ma ọ bụ kọmputa mepee web browser, dee obere ozi ma jiri ngwa a na-ahụkarị dị ka maapụ, email na vidiyo. Ole na ole nwere ike ikwu ihe AI bụ, ebe ọ dị n'ngwa ha, ma ọ bụ otu esi arịọ ngwa enyemaka AI enyemaka ma lelee ihe ọ kwuru.",
    gap: "Ugbu a AI dị n'ekwentị, maapụ, email, ahịa, ụlọ akụ na weebụsaịtị ọrụ, ngwa enyemaka AI n'efu nwekwara ike ichekwa ezi oge. Ndị na-aghọtaghị ya na-ezere ngwa bara uru, ma ọ bụ tụkwasị ya obi karịa, kesaa ozi nzuzo, ma ọ bụ daba n'aghụghọ ndị na-eji AI.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọhụrụ ọ bụla, dị ka prompt, data na bias",
      "Ngwaọrụ: ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị na web browser",
      "Oge: nkuzi nkeji 4 ruo 6, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: naanị ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini); ọ dịghị mkpa ịkwụ ụgwọ",
      "Nzuzo: ndị na-amụ ihe anaghị ede nọmba ID, okwuntughe, ozi ụlọ akụ, nọmba ahụike ma ọ bụ adreesị zuru ezu n'ime ngwa enyemaka AI"
    ],
    prerequisites: "Ọ dịghị. Ndị na-amụ ihe kwesịrị inwe ike imeghe web browser ma dee obere ozi."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'eleghị ndetu anya", action: "ịkọwa n'okwu dị mfe ihe ọgụgụ isi arụrụ arụ na generative AI bụ, na ihe mere AI ji nwee ike ịdị ka o ji n'aka ma ka mehie", standard: "n'ahịrịokwu abụọ ma ọ bụ atọ na-eji echiche nke usoro (patterns) na nchepụta (guesses)" },
    { id: "O2", condition: "Mgbe e nyere gị ọmụmaatụ dị mfe dị ka ihe nzacha spam", action: "ịkọwa otu AI si amụta ihe site na data, na otu data na-adịghị mma ma ọ bụ nke dabere n'otu akụkụ si eweta azịza nwere bias", standard: "na-akpọ aha ọmụmaatụ ndị ahụ, usoro ndị ahụ, na otu ụzọ nchepụta ndị ahụ nwere ike isi bụrụ ihe na-ezighi ezi" },
    { id: "O3", condition: "Site n'iji ekwentị ma ọ bụ kọmputa gị", action: "ịchọta opekata mpe ebe ise ị na-eji AI ugbu a, na ịchọta otu ntọala (setting) na-achịkwa ya", standard: "nwere ọmụmaatụ ise ziri ezi na otu ntọala e mepere" },
    { id: "O4", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ide prompt doro anya nke na-ekwu ihe ị chọrọ, ọnọdụ ahụ na otu ị chọrọ ka azịza dị", standard: "nwere akụkụ atọ ahụ niile na-enweghị ozi nzuzo" },
    { id: "O5", condition: "Mgbe e nyere gị azịza mbụ site na ngwa enyemaka AI", action: "ime ka azịza ahụ ka mma site n'arịrịọ nsochi ma lelee eziokwu ya n'isi iyi gọọmentị ma ọ bụ nke a pụrụ ịtụkwasị obi", standard: "nwere opekata mpe arịrịọ nsochi abụọ na opekata mpe otu eziokwu e lelere" },
    { id: "O6", condition: "Tupu i zipu prompt ma ọ bụ jiri okwu AI dere", action: "ịlele prompt ahụ maka ozi nzuzo, ịgbaso iwu gbasara enyemaka AI, na ịzaghachi n'enweghị nsogbu n'aghụghọ ndị na-eji AI", standard: "ebe e jiri ihe nnọchi dochie ozi nzuzo ọ bụla, ma họrọ ezi omume n'enweghị nsogbu mgbe niile" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe AI bụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI n'okwu dị mfe",
          minutes: 4,
          goal: "Kọwaa n'ahịrịokwu abụọ ihe ọgụgụ isi arụrụ arụ bụ.",
          text: [
            "Ọgụgụ isi arụrụ arụ (AI) pụtara mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ: ịghọta okwu, ịmata ihu mmadụ na foto, ịtụ aro abụ, ịsụgharị ahịrịokwu, ma ọ bụ ide azịza nye ajụjụ.",
            "AI anaghị eche echiche ma ọ bụ nwee mmetụta dị ka mmadụ. Ọ maara nke ọma ịchọta usoro (patterns) n'ọtụtụ ọmụmaatụ, ma jiri usoro ndị ahụ chepụta azịza. Ezigbo nchepụta nwere ike ịdị ka amamihe; nchepụta ọjọọ nwekwara ike ịdị ka o ji n'aka otu ahụ.",
            "E nwere ọtụtụ ụdị AI. Ụdị ndị mmadụ na-ekwukarị maka ya taa bụ generative AI: ngwa dị ka ChatGPT, Microsoft Copilot na Google Gemini na-emepụta (na-eme) ederede, foto ma ọ bụ ụda ọhụrụ mgbe ị rịọrọ."
          ],
          words: [["Ọgụgụ isi arụrụ arụ (AI)", "mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ, dị ka ịghọta okwu ma ọ bụ ịza ajụjụ."], ["Usoro (pattern)", "ihe na-emeghachi n'ụzọ ị nwere ike ịkọ tupu ọ mee."], ["Generative AI", "AI na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ mgbe ị rịọrọ ya."]],
          slides: [
            { title: "AI bụ...", bullets: ["Mmemme kọmputa na-arụ ọrụ ndị na-achọkarị mmadụ", "Okwu, foto, aro, nsụgharị, ide ihe"] },
            { title: "Otu o si arụ ọrụ, n'otu ahịrị", bullets: ["Ọ na-achọta usoro n'ọtụtụ ọmụmaatụ", "Wee chepụta azịza kacha mma ọ nwere ike"] },
            { title: "Ọ bụghị mmadụ", bullets: ["Ọ naghị eche echiche ma ọ bụ nwee mmetụta", "Nchepụta na-ezighi ezi nwere ike ịdị ka o ji n'aka dị ka nke ziri ezi"] },
            { title: "Generative AI", bullets: ["Na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ", "Ọmụmaatụ: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "N'eleghachighị anya, kwuo ma ọ bụ dee ahịrịokwu abụọ na-akọwara onye na-anụbeghị maka ya ihe AI bụ. Jiri okwu \"usoro\" na \"nchepụta\".",
          youCanNow: "ịkọwa n'okwu dị mfe ihe AI bụ na ihe mere o nwere ike iji mehie.",
          quickCheck: [
            { objective: "O1", q: "N'ihe ọmụmụ a, gịnị ka generative AI na-eme?", options: ["Ọ na-ahazi naanị email n'ime folda", "Ọ na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ mgbe ị rịọrọ", "Ọ na-eche echiche ma nwee mmetụta dị ka mmadụ", "Ọ na-ama ezi azịza mgbe niile"], answer: 1, why: "Ngwa generative AI dị ka ChatGPT, Copilot na Gemini na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ." },
            { objective: "O1", q: "Enyi gị kwuru, \"AI ahụ dị ka o ji n'aka nke ukwuu, ya mere ọ ga-abụrịrị eziokwu.\" Gịnị ka ị ga-agwa ya?", options: ["Nke ahụ bụ eziokwu; AI anaghị emehie mgbe o ji n'aka", "Naanị ngwa AI a na-akwụ ụgwọ nwere ike imehie", "AI na-esite n'usoro chepụta azịza, ya mere nchepụta na-ezighi ezi nwere ike ịdị ka o ji n'aka", "AI na-emehie naanị mgbe ịntanetị na-aga nwayọọ"], answer: 2, why: "AI na-eji usoro chepụta azịza, nchepụta ọjọọ nwekwara ike ịdị ka o ji n'aka dị ka ezigbo nchepụta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Otu AI si amụta ihe site n'ọmụmaatụ",
          minutes: 5,
          goal: "Kọwaa otu AI si amụta ihe, site n'iji ọmụmaatụ dị mfe.",
          text: [
            "Ọtụtụ AI taa na-amụta ihe site n'ọmụmaatụ kama site n'iwu mmadụ dere. Iji kụziere mmemme ka ọ mata email spam, ndị mmadụ na-egosi ya ọtụtụ email e dere \"spam\" ma ọ bụ \"ọ bụghị spam\" n'elu ha. Mmemme ahụ na-achọta usoro, dị ka ụfọdụ okwu ma ọ bụ njikọ (link) dị iche, wee jiri ha n'email ọhụrụ.",
            "Ọmụmaatụ ndị ọ na-amụta ihe na ha ka a na-akpọ data. Data dị mma ma dị iche iche na-eme ka AI ka mma. Ọ bụrụ na data ahụ dị ochie, dabere n'otu akụkụ, ma ọ bụ na ụfọdụ otu mmadụ adịghị n'ime ya, nchepụta AI ahụ ga-adịkwa ochie, dabere n'otu akụkụ, ma ọ bụ ghara ịbụ ihe ziri ezi. A na-akpọ nke a bias.",
            "Ngwa ide ihe dị ka ChatGPT mụtara ihe site n'ọtụtụ ederede, ya mere ha maara nke ọma ịkọ okwu ga-abịa ọzọ. Nke ahụ mere ha ji ede ihe nke ọma, ọ bụkwa ya mere ha ji nwee ike ide ihe dị ka eziokwu mana ọ bụghị eziokwu."
          ],
          steps: ["Ndị mmadụ na-anakọta ọtụtụ ọmụmaatụ (data).", "Mmemme ahụ na-achọ usoro n'ọmụmaatụ ndị ahụ.", "Ọ na-eji usoro ndị ahụ chepụta ihe gbasara ihe ọhụrụ.", "Ndị mmadụ na-elele nchepụta ndị ahụ ma nye ya ọmụmaatụ ka mma mgbe o mehiere."],
          words: [["Data", "ọmụmaatụ, nọmba, okwu ma ọ bụ foto AI na-amụta ihe na ha."], ["Bias", "mgbe data dabere n'otu akụkụ, nke mere na nchepụta AI adịghị mma nye ụfọdụ ndị mmadụ."], ["Training (ọzụzụ)", "nzọụkwụ ebe AI na-amụta usoro site na data."]],
          slides: [
            { title: "Ịmụta ihe site n'ọmụmaatụ", bullets: ["Gosi ya ọtụtụ email e dere spam ma ọ bụ ọ bụghị spam", "Ọ na-achọta usoro", "Ọ na-ahazi email ọhụrụ site n'usoro ndị ahụ"] },
            { title: "Data dị mkpa", bullets: ["Data dị mma ma dị iche iche = nchepụta ka mma", "Data ochie ma ọ bụ nke otu akụkụ = nchepụta ochie ma ọ bụ nke na-ezighi ezi"] },
            { title: "Ihe mere AI ide ihe ji emehie", bullets: ["Ọ na-esite n'usoro akọ okwu ndị ga-abịa ọzọ", "O nwere ike ịdị ka eziokwu ma ka bụrụ ụgha"] }
          ],
          tryIt: "Chee maka ihe ị mụtara site n'ọmụmaatụ, dị ka ịmata mkpụrụ osisi chara acha na nke na-achaghị. Dee otu ị ga-esi kụziere kọmputa otu ihe ahụ: kedu ọmụmaatụ ị ga-egosi ya, gịnịkwa ka o nwere ike imehie?",
          youCanNow: "ịkọwa otu AI si amụta ihe site na data na ihe mere data na-adịghị mma ji eweta azịza na-adịghị mma ma ọ bụ na-ezighi ezi.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ bias n'AI?", options: ["Nchepụta dabere n'otu akụkụ n'ihi na data dị ochie, dabere n'otu akụkụ ma ọ bụ na ụfọdụ otu adịghị n'ime ya", "Ntọala na-eme ka AI gaa ọsọ ọsọ", "Ụdị nje kọmputa", "Ụzọ isi mee ka ihuenyo nwuo karịa"], answer: 0, why: "Mgbe ọmụmaatụ ndị ahụ dabere n'otu akụkụ ma ọ bụ na ụfọdụ otu mmadụ adịghị n'ime ha, nchepụta AI na-abụkwa ihe na-ezighi ezi." },
            { objective: "O2", q: "Ị chọrọ ịkụziri mmemme ka ọ mata mkpụrụ osisi chara acha na nke na-achaghị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Dee otu iwu ma tụọ anya na ọ ga-arụ ọrụ", "Gosi ya naanị otu foto unere", "Gwa ya ka o chepụta n'enweghị ọmụmaatụ", "Gosi ya ọtụtụ foto mkpụrụ osisi, nke ọ bụla e dere ma ọ chara acha ma ọ bụ na ọ chaghị"], answer: 3, why: "AI na-amụta ihe site n'ịchọta usoro n'ọtụtụ ọmụmaatụ e dere aha, nke a na-akpọ data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhụ AI n'ụbọchị gị",
          minutes: 4,
          goal: "Chọta opekata mpe ebe ise ị na-eji AI ugbu a.",
          text: [
            "Ọ ga-abụ na ị na-eji AI kwa ụbọchị n'akpọghị ya aha ahụ. Maapụ ekwentị gị na-ahọrọ ụzọ ọsọ ọsọ gburugburu okporo ụzọ jupụtara. Email gị na-ebuga ozi efu n'ime folda spam. Ngwa vidiyo na egwu na-atụ aro ihe ị ga-ele ọzọ. Ekwentị gị na-emeghe site n'ihu gị. Keyboard gị na-atụ aro okwu na-esote.",
            "Ngwa enyemaka olu dị ka Siri, Google Assistant na Alexa na-eji AI aghọta ihe ị na-ekwu. Ụlọ akụ na-eji AI achọpụta ịkwụ ụgwọ kaadị dị ka ihe na-adịghị nkịtị. Weebụsaịtị ọrụ na-eji ya ejikọta résumé gị na ọrụ ndị dị.",
            "Ịmara ebe AI dị na-enyere gị aka ịjụ ezigbo ajụjụ: gịnị mere ngwa a ji tụọ aro nke a? Enwere m ike ịgbanyụ ya? Gịnị ka ọ maara banyere m? Ọtụtụ ngwa nwere ntọala (settings) ebe ị nwere ike ịhụ ma ọ bụ gbanwee nke a."
          ],
          words: [["Ngwa enyemaka olu (voice assistant)", "AI ị na-agwa okwu n'olu dị elu, dị ka Siri, Google Assistant ma ọ bụ Alexa."], ["Aro (recommendation)", "ihe ngwa na-atụ aro dabere n'ihe gị ma ọ bụ ndị yiri gị họrọrọ na mbụ."]],
          slides: [
            { title: "AI ị na-eji ugbu a", bullets: ["Maapụ na-ezere okporo ụzọ jupụtara", "Ihe nzacha spam n'email", "Vidiyo, egwu na ngwaahịa a tụrụ aro"] },
            { title: "AI ọzọ kwa ụbọchị", bullets: ["Imeghe ekwentị site n'ihu gị", "Ngwa enyemaka olu: Siri, Google Assistant, Alexa", "Ozi ịdọ aka na ntị ụlọ akụ maka iji kaadị n'ụzọ na-adịghị nkịtị"] },
            { title: "Ezigbo ajụjụ ị ga-ajụ", bullets: ["Gịnị mere o ji tụọ aro nke a?", "Enwere m ike ịgbanyụ ya?", "Gịnị ka ọ maara banyere m? Lelee ntọala"] }
          ],
          tryIt: "Lelee ekwentị ma ọ bụ kọmputa gị ma depụta ebe ise na-eji AI. Maka otu n'ime ha, mepee ntọala ya ma chọta otu nhọrọ ị nwere ike ịgbanwe.",
          youCanNow: "ịhụ AI na ngwa ị na-eji kwa ụbọchị na ịchọta ntọala na-achịkwa ya.",
          quickCheck: [
            { objective: "O3", q: "Kedu n'ime ndị a na-eji AI aghọta ihe ị na-ekwu?", options: ["Kalịnda akwụkwọ", "Oriọna tebụl", "Ngwa enyemaka olu dị ka Siri ma ọ bụ Alexa", "Usoro oge ụgbọ ala e biri ebi"], answer: 2, why: "Ngwa enyemaka olu na-eji AI aghọta okwu." },
            { objective: "O3", q: "Ngwa egwu na-atụ aro egwu ndị ị na-adịghị amasị, ị na-ajụkwa onwe gị ihe ọ maara banyere gị. Gịnị ka ị ga-eme?", options: ["Hichapụ ekwentị gị", "Mepee ntọala ngwa ahụ ka ịhụ ma ọ bụ gbanwee ihe ọ na-eji", "Kwụsị ige egwu", "Dee okwuntughe gị n'igbe ọchụchọ"], answer: 1, why: "Ọtụtụ ngwa nwere ntọala ebe ị nwere ike ịhụ ma ọ bụ gbanwee otu aro si arụ ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe AI bụ",
        questions: [
          { objective: "O1", q: "Kedu nkọwa kacha mma n'okwu dị mfe nke AI?", options: ["Robot na-eche echiche ma nwee mmetụta", "Weebụsaịtị na-eziri ezi mgbe niile", "Ụdị waya ịntanetị", "Mmemme kọmputa na-achọta usoro ma chepụta azịza iji rụọ ọrụ ndị mmadụ na-arụkarị"], answer: 3, why: "AI na-achọta usoro n'ọmụmaatụ ma jiri ha chepụta azịza." },
          { objective: "O1", q: "Gịnị ka generative AI na-eme?", options: ["Na-edozi ekwentị mebiri emebi", "Na-achaji batrị gị", "Na-echekwa naanị faịlụ", "Na-emepụta ederede, foto ma ọ bụ ụda ọhụrụ mgbe ị rịọrọ"], answer: 3, why: "Generative pụtara na ọ na-emepụta ihe ọhụrụ." },
          { objective: "O2", q: "E ji naanị foto otu otu mmadụ zụọ AI. Gịnị bụ nsogbu nwere ike ịdị?", options: ["Ọ ga-arụ ọrụ otu ahụ nye onye ọ bụla", "Ọ ga-aga ọsọ ọsọ karịa", "Nchepụta ya nwere ike ịbụ ihe na-ezighi ezi ma ọ bụ mperi nye otu ndị ọzọ", "Ọ ga-akwụsị ịrụ ọrụ"], answer: 2, why: "Data dabere n'otu akụkụ na-eweta bias." },
          { objective: "O2", q: "Gịnị bụ \"data\" n'AI?", options: ["Ọmụmaatụ ndị AI na-amụta ihe na ha", "Ihuenyo ekwentị", "Ụdị okwuntughe", "Ọnụ ahịa ngwa ahụ"], answer: 0, why: "Data bụ ọmụmaatụ, okwu, nọmba ma ọ bụ foto AI na-amụta ihe na ha." },
          { objective: "O3", q: "Kedu n'ime ndị a bụ iji AI kwa ụbọchị?", options: ["Mgba ọkụ", "Kalịnda akwụkwọ", "Ngwa maapụ na-ahọrọ ụzọ gburugburu okporo ụzọ jupụtara", "Elekere a na-akpọ akpọ"], answer: 2, why: "Ngwa maapụ na-eji AI akọ otu okporo ụzọ ga-adị ma họrọ ụzọ." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI nke ọma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịrịọ ngwa enyemaka AI enyemaka",
          minutes: 5,
          goal: "Mepee ngwa enyemaka AI n'efu ma dee prompt doro anya nwere akụkụ atọ.",
          text: [
            "Ngwa enyemaka AI n'efu gụnyere ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) na Google Gemini (gemini.google.com). Ha na-arụ ọrụ na web browser ma ọ bụ dị ka app site n'ezi ụlọ ahịa app.",
            "Ihe ị na-ede ka a na-akpọ prompt. Prompt doro anya nwere akụkụ atọ: ihe ị chọrọ, ntakịrị banyere ọnọdụ ahụ, na otu ị chọrọ ka azịza dị. Dịka ọmụmaatụ: \"Ana m elekọta obere ebe nri chọọchị na-enye ndị mmadụ. Dee ozi nwere ahịrị 4, nwere obi ọma, na-arịọ ndị ọrụ afọ ofufo maka Satọdee. Jiri okwu dị mfe.\"",
            "Prompt nwere naanị otu okwu dị ka \"ndị ọrụ afọ ofufo\" na-eme ka AI chepụta ihe ị pụtara, ya mere azịza ya na-adị n'ozuzu ma baa obere uru."
          ],
          steps: ["Mepee ngwa enyemaka AI na browser ma ọ bụ ezi app.", "Kwuo ihe ị chọrọ.", "Tinye ọnọdụ ahụ, na-enweghị ozi nzuzo.", "Kwuo otu ị chọrọ ka azịza dị: ogologo, ndepụta, nzọụkwụ, okwu dị mfe.", "Zipu ya ma gụọ azịza ya."],
          words: [["Prompt", "ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI iji rịọ ya ihe."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu, dị ka ChatGPT, Copilot ma ọ bụ Gemini."]],
          slides: [
            { title: "Ngwa enyemaka AI n'efu", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Akụkụ atọ nke prompt doro anya", bullets: ["1. Ihe ị chọrọ", "2. Ọnọdụ ahụ (na-enweghị ozi nzuzo)", "3. Otu ị chọrọ ka azịza dị"] },
            { title: "Ọmụmaatụ", bullets: ["\"Ana m elekọta obere ebe nri. Dee ozi nwere ahịrị 4, nwere obi ọma,", "na-arịọ ndị ọrụ afọ ofufo maka Satọdee. Jiri okwu dị mfe.\""] }
          ],
          tryIt: "Mepee otu ngwa enyemaka AI n'efu. Dee prompt nwere akụkụ atọ maka ezi ọrụ n'izu a, dị ka ozi ụbọchị ọmụmụ, atụmatụ ọmụmụ ihe ma ọ bụ ndepụta ihe ị ga-azụ n'ahịa, ma zipu ya.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu na ide prompt doro anya nke na-enweta azịza mbụ bara uru.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ prompt?", options: ["Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI", "Ịdọ aka na ntị site n'ekwentị gị", "Azịza AI", "Ụdị okwuntughe"], answer: 0, why: "Prompt bụ ihe ị na-enye ngwa enyemaka AI iji gwa ya ihe ị chọrọ." },
            { objective: "O4", q: "Ị chọrọ obere ozi ụbọchị ọmụmụ maka nwanne nne gị nwanyị. Kedu prompt ị ga-ezipu?", options: ["\"Ụbọchị ọmụmụ\"", "\"Dee ihe\"", "\"Ozi\"", "\"Dee ozi ụbọchị ọmụmụ nwere ahịrị 3, nwere ịhụnanya, maka nwanne nne m nwanyị, onye hụrụ ịkọ ubi n'anya. Jiri okwu dị mfe.\""], answer: 3, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ ahụ na otu ị chọrọ ka azịza dị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka azịza ka mma na ịlele ya",
          minutes: 5,
          goal: "Mee ka azịza ka mma site n'arịrịọ nsochi ma lelee eziokwu ya.",
          text: [
            "Were azịza mbụ dị ka ihe mbụ (draft). N'otu mkparịta ụka ahụ, ị nwere ike ịsị: \"Mee ka ọ dị mkpụmkpụ.\" \"Jiri okwu dị mfe karị.\" \"Nye m nhọrọ atọ.\" \"Tinye ya na tebụl.\" Ngwa enyemaka ahụ na-echeta ozi ndị gara aga n'otu mkparịta ụka ahụ.",
            "AI nwere ike ịchepụta ihe: ụbọchị na-ezighi ezi, nọmba ekwentị na-adịghị adị, iwu ochie. A na-akpọ nke a hallucination. Lelee eziokwu ọ bụla gbasara ego, ahụike, iwu, enyemaka gọọmentị, ụbọchị, adreesị ma ọ bụ nọmba ekwentị na weebụsaịtị gọọmentị (saịtị gọọmentị US na-ejedebe na .gov) ma ọ bụ n'aka onye maara ya, dị ka dọkịta, onye na-elekọta ọba akwụkwọ ma ọ bụ onye na-elekọta okwu gị (case manager).",
            "Jụọ ngwa enyemaka ahụ \"Ebee ka m nwere ike ịlele nke a?\" wee gaa na saịtị ahụ n'onwe gị."
          ],
          steps: ["Gụọ azịza mbụ.", "Rịọ maka otu mgbanwe n'otu oge.", "Kpaa eziokwu ndị ahụ akara: nọmba, ụbọchị, aha, iwu.", "Lelee eziokwu ọ bụla n'isi iyi gọọmentị ma ọ bụ nke a pụrụ ịtụkwasị obi.", "Ọ bụrụ na ha adabaghị, kwere isi iyi gọọmentị."],
          words: [["Arịrịọ nsochi (follow-up)", "ozi nke abụọ na-arịọ AI ka ọ gbanwee ma ọ bụ kọwaa azịza ya."], ["Hallucination", "mgbe AI dere ihe dị ka eziokwu mana ọ bụ ihe e chepụtara echepụta."]],
          slides: [
            { title: "Azịza mbụ bụ ihe mbụ (draft)", bullets: ["\"Mee ka ọ dị mkpụmkpụ.\"", "\"Jiri okwu dị mfe karị.\"", "\"Nye m nhọrọ atọ.\""] },
            { title: "AI nwere ike ịchepụta ihe", bullets: ["Ụbọchị, nọmba ma ọ bụ iwu na-ezighi ezi", "Ọfịs ma ọ bụ akwụkwọ na-adịghị adị"] },
            { title: "Lelee tupu i kwere", bullets: ["Ego, ahụike, iwu, enyemaka gọọmentị, ụbọchị, nọmba ekwentị", "Saịtị gọọmentị (.gov) ma ọ bụ onye maara ya"] }
          ],
          tryIt: "Were azịza i nwetara na nkuzi gara aga. Rịọ maka mgbanwe abụọ, otu n'otu oge. Wee họrọ otu eziokwu dị n'ime ya ma lelee ya na weebụsaịtị gọọmentị ma ọ bụ nke a pụrụ ịtụkwasị obi.",
          youCanNow: "ime ka azịza AI ka mma site n'arịrịọ nsochi na ịlele eziokwu ya tupu i jiri ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ hallucination n'AI?", options: ["Mgbe batrị AI gwụrụ", "Mgbe AI jụrụ ịza ajụjụ", "Mgbe AI chepụtara ihe dị ka eziokwu", "Mgbe AI zara n'asụsụ ọzọ"], answer: 2, why: "AI nwere ike ịchepụta ụbọchị, nọmba ma ọ bụ iwu na-ezighi ezi nke dị ka eziokwu; nke ahụ bụ hallucination." },
            { objective: "O5", q: "Azịza AI kwuru ụbọchị a ga-enyeghachi fọm enyemaka gọọmentị. Gịnị ka ị ga-eme tupu ị dabere na ya?", options: ["Lelee ụbọchị ahụ na weebụsaịtị gọọmentị ma ọ bụ n'aka onye maara ya", "Kwere ya n'ihi na o si n'AI", "Jụọ AI otu ajụjụ ahụ ọzọ ma jiri nke ahụ", "Buru ụzọ kesaara ndị enyi gị ya"], answer: 0, why: "Eziokwu gbasara ụbọchị, ego, enyemaka gọọmentị na iwu kwesịrị ka e lelee ha n'isi iyi gọọmentị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji AI n'eziokwu na n'enweghị nsogbu",
          minutes: 5,
          goal: "Jiri AI n'ekesaghị ozi nzuzo, n'ụzọ ziri ezi na n'eziokwu.",
          text: [
            "Edela ozi nzuzo n'ime ngwa enyemaka AI: nọmba Social Security (nọmba njirimara gọọmentị US) ma ọ bụ nọmba ID, okwuntughe, nọmba ụlọ akụ ma ọ bụ kaadị, nọmba akwụkwọ ahụike ma ọ bụ adreesị ụlọ gị zuru ezu. Dee \"[nọmba m]\" n'ọnọdụ ya. Ụlọ ọrụ ahụ nwere ike ichekwa mkparịta ụka gị.",
            "Kwuo eziokwu banyere enyemaka AI. Ọtụtụ ụlọ akwụkwọ na ebe ọrụ nwere iwu gbasara ya, ya mere jụọ tupu i nyefee ọrụ AI dere. Gụọ ma gbanwee ihe o dere ka ọ dị ka okwu gị ma kwuo ihe ị pụtara.",
            "Cheta bias: ọ bụrụ na azịza adịghị ka ihe ziri ezi nye otu ndị mmadụ, jụọ ajụjụ banyere ya. Kpachakwara anya maka aghụghọ ndị na-eji AI, dị ka olu adịgboroja nke ndị ezinụlọ na-arịọ ego. Kwụsị, kwụsị oku ahụ, ma kpọghachi na nọmba ị maara."
          ],
          steps: ["Gụọ prompt gị maka ozi nzuzo tupu i zipu ya.", "Jiri ihe nnọchi dochie ozi nzuzo.", "Lelee iwu ụlọ akwụkwọ gị ma ọ bụ ebe ọrụ gị gbasara enyemaka AI.", "Mee ka okwu ikpeazụ bụrụ nke gị.", "Were arịrịọ ego na-eme ngwa ngwa dị ka ihe ịdọ aka na ntị."],
          words: [["Ozi nzuzo", "ihe gbasara gị nke nwere ike ime ka mmadụ mee ka ọ bụ gị ma ọ bụ were ego gị."], ["Ihe nnọchi (placeholder)", "ihe dị ka \"[nọmba m]\" ị na-ede n'ọnọdụ ezi ozi ahụ."]],
          slides: [
            { title: "Edela ihe ndị a n'AI", bullets: ["Nọmba ID na nọmba Social Security", "Okwuntughe, nọmba ụlọ akụ na kaadị", "Nọmba akwụkwọ ahụike, adreesị ụlọ zuru ezu"] },
            { title: "Kwuo eziokwu", bullets: ["Gbasoo iwu AI nke ụlọ akwụkwọ gị ma ọ bụ ebe ọrụ gị", "Gbanwee okwu ndị ahụ ka ha bụrụ nke gị"] },
            { title: "Kpachara anya", bullets: ["Jụọ ajụjụ banyere azịza ndị yiri ihe na-ezighi ezi", "Olu adịgboroja nwere ike ịrịọ ego: kwụsị oku ahụ ma kpọghachi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: họrọ ezi ọrụ, dee prompt doro anya na-enweghị ozi nzuzo, rịọ maka mgbanwe abụọ, lelee otu eziokwu na weebụsaịtị a pụrụ ịtụkwasị obi, wee kọwara enyi gị AI n'ahịrịokwu atọ.",
          youCanNow: "iji AI mechaa ezi ọrụ ma na-echebe ozi nzuzo ma na-eji ya n'eziokwu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji debe ozi nzuzo n'ebe ọ na-adịghị na mkparịta ụka AI?", options: ["Ọ na-eme ka azịza dị ogologo", "Ngwa enyemaka AI enweghị ike ịgụ nọmba", "Ọ megidere iwu ụlọ akwụkwọ ọ bụla", "Ụlọ ọrụ ahụ nwere ike ichekwa mkparịta ụka gị"], answer: 3, why: "Ụlọ ọrụ ahụ nwere ike idebe mkparịta ụka gị, ya mere nọmba ID, ụlọ akụ na ahụike agaghị abanye ya mgbe ọ bụla." },
            { objective: "O6", q: "Oku bịara n'olu nwa nwa gị nwoke na-arịọ ka i zipu ego ugbu a. Gịnị ka ị ga-eme?", options: ["Zipu ego ahụ ngwa ngwa", "Kwụsị oku ahụ ma kpọghachi ya na nọmba ị maara", "Nye nọmba kaadị ụlọ akụ gị iji hụ na ọ bụ ya", "Gwa onye na-akpọ oku ka o zipu ozi ederede kama"], answer: 1, why: "AI nwere ike ịṅomi olu, ya mere kwụsị ma kpọghachi na nọmba ị maralarị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI nke ọma",
        questions: [
          { objective: "O4", q: "Kedu prompt kacha doo anya?", options: ["\"ndị ọrụ afọ ofufo\"", "\"enyemaka\"", "\"ihe maka Satọdee\"", "\"Ana m elekọta ebe nri. Dee ozi nwere ahịrị 4, nwere obi ọma, na-arịọ ndị ọrụ afọ ofufo maka Satọdee. Jiri okwu dị mfe.\""], answer: 3, why: "Ọ na-enye mkpa ahụ, ọnọdụ ahụ na ụdị azịza." },
          { objective: "O5", q: "Azịza ahụ na-eji okwu siri ike. Gịnị ka ị ga-ede ọzọ?", options: ["\"Jiri okwu dị mfe karị.\"", "Okwuntughe gị", "Ọ dịghị ihe; mechie app ahụ", "\"Malitegharịa ruo mgbe ebighị ebi.\""], answer: 0, why: "Arịrịọ nsochi na-arịọ AI ka ọ gbanwee azịza ya." },
          { objective: "O5", q: "AI nyere nọmba ekwentị ọfịs enyemaka gọọmentị. Gịnị ka ị kwesịrị ime?", options: ["Kpọọ ya ozugbo", "Kesaa ya na soshal midia", "Lelee ya na weebụsaịtị gọọmentị ọfịs ahụ", "Jụọ AI ma o ji n'aka ma kwere ya"], answer: 2, why: "AI nwere ike ịchepụta nọmba; saịtị gọọmentị bụ isi iyi a pụrụ ịtụkwasị obi." },
          { objective: "O6", q: "Gịnị ka ị ga-ede n'ọnọdụ nọmba kaadị ụlọ akụ gị na prompt?", options: ["Ezi nọmba ahụ", "PIN gị", "Mkpụrụ ọnụọgụ 12 ikpeazụ", "Ihe nnọchi dị ka \"[kaadị m]\""], answer: 3, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O6", q: "Ị chọrọ inyefe ọrụ ụlọ akwụkwọ AI nyere aka dee. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Lelee iwu ụlọ akwụkwọ gị gbasara enyemaka AI", "Nyefee ya n'agụghị ya", "Detuo nke enyi gị", "Hichapụ ya"], answer: 0, why: "Ụlọ akwụkwọ na ebe ọrụ nwere iwu gbasara enyemaka AI; eziokwu na-ebu ụzọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ọgụgụ Isi Arụrụ Arụ (AI)",
    questions: [
      { objective: "O1", q: "Ụzọ kacha mma isi kọwaa AI bụ:", options: ["Mmadụ nọ n'ime kọmputa", "Ụdị ekwentị", "Mmemme na-eji usoro arụ ọrụ ndị mmadụ na-arụkarị", "Ụdị adreesị email"], answer: 2, why: "AI na-achọta usoro ma chepụta azịza iji rụọ ọrụ." },
      { objective: "O1", q: "Gịnị mere AI ji nwee ike ịdị ka o ji n'aka ma ka mehie?", options: ["Ọ na-egwu egwuregwu", "Ọ naghị emehie mgbe ọ bụla", "Batrị ya adịghị ike", "Ọ na-esite n'usoro chepụta azịza kacha mma, ọ bụghị site n'ịmara eziokwu"], answer: 3, why: "AI na-esite n'usoro chepụta azịza, nchepụta na-ezighi ezi nwekwara ike ịdị ka o ji n'aka." },
      { objective: "O1", q: "Kedu ngwa bụ generative AI?", options: ["Igwe mgbakọ", "Maapụ akwụkwọ", "Google Gemini", "Mgba ọkụ"], answer: 2, why: "Gemini na-emepụta ederede ọhụrụ mgbe ị rịọrọ, ya mere ọ bụ generative AI." },
      { objective: "O2", q: "Kedu otu ọtụtụ mmemme AI si amụta ihe taa?", options: ["Site n'ọtụtụ ọmụmaatụ (data)", "Site n'ịgụ uche gị", "Site n'ịchepụta ihe n'enweghị ọmụmaatụ", "Site na batrị ekwentị"], answer: 0, why: "Ha na-amụta usoro site na data." },
      { objective: "O2", q: "E ji ọtụtụ puku email e dere spam ma ọ bụ ọ bụghị spam zụọ ihe nzacha spam. Nke a bụ ọmụmaatụ nke:", options: ["Ọzụzụ site na data", "Ịchaji ekwentị", "Iziga ozi ederede", "Okwuntughe"], answer: 0, why: "Ịmụta ihe site n'ọmụmaatụ e dere aha bụ ọzụzụ (training)." },
      { objective: "O2", q: "Gịnị bụ bias n'AI?", options: ["Kọmputa na-aga ọsọ ọsọ", "Data dabere n'otu akụkụ, nke na-eme ka nchepụta ghara ịdị mma nye ụfọdụ ndị mmadụ", "Ụdị prompt", "Ntọala ekwentị maka ịnwụ ọkụ ihuenyo"], answer: 1, why: "Data dabere n'otu akụkụ na-eweta nchepụta na-ezighi ezi." },
      { objective: "O3", q: "Kedu nke bụ ọmụmaatụ AI kwa ụbọchị?", options: ["Ihe ntụtụ akwụkwọ (stapler)", "Ngwa vidiyo na-atụ aro ihe ị ga-ele ọzọ", "Envelopu akwụkwọ", "Igodo ụzọ"], answer: 1, why: "Aro ndị ahụ na-esi n'AI." },
      { objective: "O3", q: "Siri, Google Assistant na Alexa bụ:", options: ["Ụlọ akụ", "Ngwa enyemaka olu na-eji AI", "Adreesị email", "Igwe mbipụta"], answer: 1, why: "Ha na-eji AI aghọta okwu." },
      { objective: "O3", q: "Ngwa na-atụ aro ihe ndị ị na-achọghị. Ezigbo nzọụkwụ mbụ bụ:", options: ["Ịtụfu ekwentị ahụ", "Ịlele ntọala ngwa ahụ maka ihe ị nwere ike ịgbanwe", "Inye ya okwuntughe gị", "Ịhapụ ngwa niile ruo mgbe ebighị ebi"], answer: 1, why: "Ọtụtụ ngwa nwere ntọala na-achịkwa aro." },
      { objective: "O4", q: "Gịnị bụ prompt?", options: ["Chaja ekwentị", "Ihe ị na-ede ma ọ bụ na-ekwu nye ngwa enyemaka AI", "Ọgwụgwụ weebụsaịtị", "Ụdị nje kọmputa"], answer: 1, why: "Prompt bụ arịrịọ gị nye AI." },
      { objective: "O4", q: "Kedu adreesị na-emeghe ngwa enyemaka AI nke Microsoft?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com bụ ezi adreesị Microsoft." },
      { objective: "O4", q: "Prompt doro anya nwere akụkụ atọ ndị a:", options: ["Aha, okwuntughe, adreesị", "Ihe ị chọrọ, ọnọdụ ahụ, otu ị chọrọ ka azịza dị", "Agba, nha, ọnụ ahịa", "Ndewo, daalụ, ka ọ dị"], answer: 1, why: "Akụkụ atọ ndị ahụ na-enweta azịza bara uru." },
      { objective: "O5", q: "Azịza mbụ dị ogologo nke ukwuu. Ị kwesịrị:", options: ["Ịnabata ya otu o sila dị", "Ịkwụ ụgwọ maka app ọhụrụ", "Ịsị \"Mee ka ọ dị mkpụmkpụ.\"", "Ịmalite ide ozi nzuzo"], answer: 2, why: "Arịrịọ nsochi na-agbanwe azịza ahụ." },
      { objective: "O5", q: "\"Hallucination\" n'AI pụtara:", options: ["AI chepụtara ihe dị ka eziokwu", "Ihuenyo adịghị edo anya", "Ngwa ahụ bụ n'efu", "E gbanyụrụ AI"], answer: 0, why: "AI nwere ike ịchepụta eziokwu ndị dị ka ezi ihe." },
      { objective: "O5", q: "Kedu nke ị kwesịrị ịlele mgbe niile n'isi iyi gọọmentị?", options: ["Abụ uri ụbọchị ọmụmụ", "Njakịrị", "Ndepụta agba maka oriri", "Ụbọchị ikpeazụ maka ụtụ isi"], answer: 3, why: "Ụbọchị, ego na iwu nwere ike ịbụ ihe na-ezighi ezi, a ga-elelerịrị ha." },
      { objective: "O5", q: "Weebụsaịtị gọọmentị US na-ejedebekarị na:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: "Saịtị gọọmentị US na-eji .gov." },
      { objective: "O6", q: "Kedu nke dị mma ide n'ime ngwa enyemaka AI?", options: ["Nọmba Social Security gị", "\"[nọmba m]\" dị ka ihe nnọchi", "Okwuntughe ụlọ akụ gị", "Koodu nchekwa kaadị gị"], answer: 1, why: "Ihe nnọchi na-edebe ozi nzuzo n'ebe ọ na-adịghị." },
      { objective: "O6", q: "Tupu i jiri okwu AI dere maka ụlọ akwụkwọ ma ọ bụ ọrụ, ị kwesịrị:", options: ["Ịlele iwu ma mee ka okwu ndị ahụ bụrụ nke gị", "Inyefe ha n'agụghị ha", "Iwepụ aha gị", "Ibu ụzọ tinye ha n'ịntanetị"], answer: 0, why: "Iji ya n'eziokwu pụtara ịgbaso iwu na ịgbanwe ọrụ ahụ." },
      { objective: "O6", q: "Azịza AI yiri ihe na-ezighi ezi nye otu ndị mmadụ. Gịnị ka ị ga-eme?", options: ["Kesaa ya ebe niile", "Jụọ ajụjụ banyere ya ma lelee isi iyi ndị ọzọ", "Were ya na ọ bụ eziokwu", "Gbanwee okwuntughe gị"], answer: 1, why: "Bias nwere ike ịpụta n'azịza; jụọ ajụjụ banyere ya." },
      { objective: "O6", q: "Oku bịara n'olu onye ikwu gị na-arịọ ka i zipu ego ugbu a. Ị kwesịrị:", options: ["Iziga ya ngwa ngwa", "Ịgụrụ ha nọmba kaadị gị", "Inye ha koodu dị n'ekwentị gị", "Ịkwụsị oku ahụ ma kpọghachi onye ikwu gị na nọmba ị maara"], answer: 3, why: "AI nwere ike ịṅomi olu; ịkpọghachi na nọmba ị maara na-akwụsị aghụghọ ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ịkọwa AI",
        objective: "O1",
        notYet: "Nkọwa ahụ adịghị, ezighi ezi, ma ọ bụ ọ naghị ekwu ihe mere e ji lelee azịza ahụ.",
        meets: "Ahịrịokwu atọ dị mfe na-ekwu ihe AI bụ, na ọ na-esite n'usoro chepụta azịza, na ihe mere e ji lelee azịza ahụ.",
        exceeds: "Na-enyekwa ọmụmaatụ kwa ụbọchị ma kwuo na data na-adịghị mma nwere ike ime ka azịza ghara ịbụ ihe ziri ezi."
      },
      {
        name: "Prompt doro anya",
        objective: "O4",
        notYet: "Prompt ahụ bụ otu okwu ma ọ bụ abụọ, ma ọ bụ na ọ naghị ekwu ihe a chọrọ.",
        meets: "Prompt ahụ na-ekwu ihe ị chọrọ, ọnọdụ ahụ na otu ị chọrọ ka azịza dị.",
        exceeds: "Prompt ahụ na-ekwukwa ogologo ma ọ bụ ụdị ma nweta azịza mbụ bara uru."
      },
      {
        name: "Ime ka azịza ka mma",
        objective: "O5",
        notYet: "Ọ dịghị arịrịọ nsochi a jụrụ, ma ọ bụ e jiri azịza mbụ otu o si dị.",
        meets: "A jụrụ arịrịọ nsochi abụọ, otu n'otu oge, azịza ahụ wee ka mma.",
        exceeds: "A gbanwekwara okwu ikpeazụ ka ha dị ka okwu gị."
      },
      {
        name: "Ịlele eziokwu",
        objective: "O5",
        notYet: "Ọ dịghị eziokwu e lelere, ma ọ bụ e lelere ya naanị site n'ịjụ AI ọzọ.",
        meets: "E lelere otu eziokwu na weebụsaịtị gọọmentị ma ọ bụ nke a pụrụ ịtụkwasị obi.",
        exceeds: "E lelere eziokwu ọ bụla gbasara ụbọchị, ego, iwu ma ọ bụ nọmba ekwentị, e dozikwara ihe ọ bụla dị iche."
      },
      {
        name: "Nzuzo na eziokwu",
        objective: "O6",
        notYet: "Prompt ahụ nwere ozi nzuzo dị ka nọmba ID, okwuntughe ma ọ bụ adreesị zuru ezu.",
        meets: "Prompt ahụ enweghị ozi nzuzo; ozi onwe ọ bụla bụ ihe nnọchi.",
        exceeds: "E lelekwara iwu ụlọ akwụkwọ ma ọ bụ ebe ọrụ gbasara enyemaka AI ebe ha metụtara."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha jiri ngwa enyemaka AI n'efu rụọ ezi ọrụ n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha lelere azịza AI n'isi iyi gọọmentị, ma ọ bụ hụ ma zere oku ma ọ bụ ozi aghụghọ",
      "Ndị na-amụ ihe gara n'ihu were ihe ọmụmụ ọzọ, dị ka Digital Literacy Basics ma ọ bụ Intro to Cybersecurity"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị na web browser",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini (ọ dịghị mkpa ịkwụ ụgwọ)",
      "Akwụkwọ na mkpịsị ode iji dee prompt, arịrịọ nsochi na eziokwu e lelere",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee kụzie otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" abụọ abụọ; jikọta ndị ọhụrụ na ngwaọrụ na onye nwere obi ike karị.",
      "Ụfọdụ ngwa enyemaka n'efu na-arịọ ndị na-amụ ihe ka ha banye (sign in); hapụ onye ọ bụla ka o kpebie ma ọ ga-emepe akaụntụ, ma gosi ndị na-arụ ọrụ n'abanyeghị ebe ha dị.",
      "Tupu onye ọ bụla ezipu prompt, gwa ha ka ha gụpụta ya n'olu dị elu ma jiri ihe nnọchi dị ka \"[nọmba m]\" dochie ozi nzuzo ọ bụla.",
      "Nwee otu weebụsaịtị gọọmentị dị njikere maka ọrụ ilele ihe nke otu ọ bụla (dịka ọmụmaatụ peeji .gov ma ọ bụ saịtị ọba akwụkwọ obodo) ka ndị na-amụ ihe mee omume ilele ezi eziokwu.",
      "Kwurịta okwu banyere aghụghọ ịṅomi olu n'ihu ọha; gwa ndị na-amụ ihe ka ha kwụsị oku ma kpọghachi ezinụlọ ha na nọmba ha maara, ma nye nọmba ebe a na-akọ aghụghọ n'obodo ma ọ bụrụ na mmemme gị nwere ya."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-tools-ig",
  lang: "ig",
  translationOf: "entrepreneurs-ai-tools",
  category: "Entrepreneurs",
  name: "Ngwa AI Onye Ọchụnta Ego Ọ Bụla Kwesịrị Ịmara",
  skills: "Ịhọrọ ụdị ngwa AI kwesịrị ekwesị, Iji ngwa enyemaka mkparịta ụka ede ihe, Iji Canva eme eserese, Iji AI n'akwụkwọ na spreadsheet, Ịhazi obere ngwa AI nke gị",
  outcome: "ịhọrọ na iji ngwa AI n'efu maka ọrụ ndị bụ isi n'azụmahịa gị (ide ihe, ihe osise, akwụkwọ na spreadsheet, na nzukọ), ma hazie peeji otu nke na-ekwu ngwa ị na-eji maka ọrụ ọ bụla.",
  about: [
    "E nwere ọtụtụ puku ngwa AI, ndị ọhụrụ na-apụtakwa kwa izu. Ihe ọmụmụ a bụ maka ndị nwe azụmahịa chọrọ obere ngwa ole na ole bara uru, kama ịchụ app ọhụrụ ọ bụla.",
    "Ị ga-amụta ụdị ngwa AI ndị bụ isi, wee jiri ezi ngwa n'efu ndị mmadụ na-ejikarị mee omume: ngwa enyemaka mkparịta ụka (ChatGPT, Microsoft Copilot, Google Gemini), ihe osise (Canva), akwụkwọ na spreadsheet (Google Docs na Sheets, Microsoft 365), na enyemaka maka ndetu na nzukọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme n'azụmahịa nke gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Aha ngwa, ihe ha na-eme na ọnụ ahịa ha na-agbanwekarị, ya mere ihe ọmụmụ a na-agwa gị otu esi elele ihe dị ugbu a."
  ],
  finalTask: "Mee peeji otu akpọrọ \"Ngwa AI M\" maka azụmahịa gị: depụta ọrụ anọ (ide ihe, ihe osise, akwụkwọ ma ọ bụ ọnụọgụgụ, na nzukọ ma ọ bụ ndetu), ngwa n'efu ị ga-eji maka nke ọ bụla, otu ihe i ji ya mee n'oge ihe ọmụmụ a, na otu iwu maka ichebe ozi ndị ahịa gị n'ime ngwa ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na ndị na-arụ ọrụ n'akụkụ (side hustle) chọrọ obere ngwa AI ole na ole bara uru kama ịchụ app ọhụrụ ọ bụla.",
    startingPoint: "Ha na-eji email, ekwentị, ma eleghị anya ngwa ọfịs Google ma ọ bụ Microsoft. Ụfọdụ anwalela ngwa enyemaka mkparịta ụka. Ọtụtụ enweghị atụmatụ maka ngwa na-arụ ọrụ ọ bụla, ma ọ bụ iwu maka ozi ndị ahịa n'ime ngwa ndị ahụ.",
    gap: "Ngwa AI ọhụrụ na-apụta kwa izu, ndị nwe azụmahịa na-atụfukwa oge na ego n'ịnwale ọtụtụ ngwa ma ọ bụ ịkwụ ụgwọ ugboro abụọ maka otu ọrụ. Ndị ọzọ na-etinye ozi ndị ahịa n'ime ngwa n'eleleghị ntọala ha. Ndị nwe azụmahịa chọrọ otu ngwa n'efu a nwalere maka ọrụ ọ bụla dị mkpa, na otu iwu nchekwa maka nke ọ bụla.",
    constraints: [
      "Okwu dị mfe; ọ dịghị mkpa ka ị mara teknụzụ nke ukwuu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; naanị atụmatụ n'efu (free plan)",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunyere obere ọrụ n'azụmahịa onye ahụ n'onwe ya",
      "Aha ngwa, ihe ha na-eme na ọnụ ahịa ha na-agbanwekarị; lelee peeji ọnụ ahịa ngwa ọ bụla n'onwe ya",
      "Rịọ ikike tupu i dekọọ onye ọ bụla, ma etinyela ozi ndị ahịa na mkparịta ụka AI"
    ],
    prerequisites: "\"Mmalite AI maka Ndị Na-azụ Ahịa\", ma ọ bụ ahụmahụ n'ịrịọ ngwa enyemaka AI enyemaka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ngwa AI ọ bụla", action: "ịmata nke n'ime ọrụ azụmahịa anọ ọ na-arụ: ide ihe, ihe osise, akwụkwọ na ọnụọgụgụ, ma ọ bụ nzukọ na ndetu", standard: "ma lelee ọrụ ya, ọnụ ahịa ya na otu o si dabara tupu i tinye ya" },
    { id: "O2", condition: "Site n'iji akaụntụ azụmahịa gị nwere ugbu a", action: "ịhọrọ ngwa enyemaka mkparịta ụka n'efu ma jiri ya mee ezi ọrụ ide ihe nke azụmahịa", standard: "mgbe i jiri otu prompt ahụ tụnyere ngwa enyemaka abụọ" },
    { id: "O3", condition: "Site n'iji template Canva", action: "ime eserese nwere akara azụmahịa gị, nke nwere otu ozi, otu foto na otu oku ime ihe (call to action)", standard: "ma lelee foto AI ọ bụla maka mperi na logo e detuuru tupu i jiri ya" },
    { id: "O4", condition: "Mgbe e nyere gị obere spreadsheet ire ere ma ọ bụ akwụkwọ", action: "iji AI dee formula spreadsheet na ide akwụkwọ mbụ (draft)", standard: "na-anwale formula ahụ n'ahịrị ndị i lelere n'aka, ma na-ezigara akwụkwọ iwu ka e nyochaa ha" },
    { id: "O5", condition: "Mgbe e nyere gị nzukọ ma ọ bụ ozi olu e dekọrọ (voice memo)", action: "iji AI gbanwee ya ka ọ bụrụ ndetu e dere ede na ndepụta ihe a ga-eme", standard: "na onye, gịnị na mgbe a ga-eme ya maka ihe ọ bụla, na ikike tupu i dekọọ ndị ọzọ" },
    { id: "O6", condition: "Na njedebe ihe ọmụmụ a", action: "ime peeji otu nke ngwa AI gị, nwere otu ngwa maka ọrụ ọ bụla na otu iwu nchekwa maka nke ọ bụla", standard: "na-ede otu ihe i ji ngwa ọ bụla mee" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụdị ngwa AI ndị bụ isi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Maapụ ngwa AI: ọrụ anọ, ọ bụghị narị app anọ",
          minutes: 4,
          goal: "Kewaa ngwa AI site n'ọrụ ha na-arụrụ azụmahịa gị.",
          text: [
            "Ọtụtụ ngwa AI obere azụmahịa chọrọ na-adaba n'ọrụ anọ. Ide ihe na iche echiche: ngwa enyemaka mkparịta ụka dị ka ChatGPT, Microsoft Copilot na Google Gemini. Ihe osise: ngwa dị ka Canva na-eme eserese, akwụkwọ mgbasa ozi (flyer) na foto maka soshal midia. Akwụkwọ na ọnụọgụgụ: AI dị n'ime Google Docs na Sheets ma ọ bụ Microsoft Word na Excel. Nzukọ na ndetu: ngwa na-edekọ olu, na-ede ihe e kwuru (transcribe), ma na-achịkọta ya.",
            "Ọtụtụ ngwa ugbu a na-arụ ihe karịrị otu ọrụ. Ngwa enyemaka mkparịta ụka nwekwara ike ime foto ma ọ bụ gụọ spreadsheet i bulitere. Nke ahụ dị mma, mana ịmalite na otu ngwa maka ọrụ ọ bụla na-eme ka ihe dị mfe.",
            "Tupu i tinye ngwa ọhụrụ ọ bụla, jụọ: Kedu ọrụ ọ na-arụ? Enweelarị m ngwa maka ọrụ ahụ? Ọ nwere atụmatụ n'efu? Gịnị na-eme ozi m tinyere n'ime ya?"
          ],
          words: [["Ngwa enyemaka mkparịta ụka (chat assistant)", "ngwa AI ị na-agwa okwu na windo mkparịta ụka, dị ka ChatGPT, Copilot ma ọ bụ Gemini."], ["Transcribe", "ịgbanwe okwu e kwuru n'ọnụ ka ọ bụrụ ihe e dere ede."]],
          slides: [
            { title: "Ọrụ anọ", bullets: ["Ide ihe na iche echiche: ngwa enyemaka mkparịta ụka", "Ihe osise: Canva na ndị yiri ya", "Akwụkwọ na ọnụọgụgụ: Docs, Sheets, Word, Excel", "Nzukọ na ndetu: transcribe na ịchịkọta"] },
            { title: "Malite n'ụzọ dị mfe", bullets: ["Otu ngwa maka ọrụ ọ bụla na mbido", "Ọtụtụ ngwa na-arụ ọrụ yiri ibe ha, nke ahụ dị mma"] },
            { title: "Tupu i tinye ngwa, jụọ", bullets: ["Kedu ọrụ ọ na-arụ?", "Enweelarị m otu?", "Ọ nwere atụmatụ n'efu? Ebee ka ozi m na-aga?"] }
          ],
          tryIt: "Dee ọrụ anọ ahụ n'akwụkwọ. N'akụkụ nke ọ bụla, dee ngwa ọ bụla ị na-eji maka ya ugbu a (ọbụlagodi nke na-abụghị AI). Hapụ ohere ebe ị na-enweghị nke ọ bụla.",
          youCanNow: "ikewa ngwa AI n'ọrụ azụmahịa anọ ma jụọ ajụjụ anọ tupu i tinye nke ọhụrụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ ngwa transcription na-arụ?", options: ["Nzukọ na ndetu", "Ihe osise", "Ide mgbasa ozi", "Ịkwụ ụgwọ"], answer: 0, why: "Transcription na-agbanwe okwu ka ọ bụrụ ndetu, nke bụ ọrụ nzukọ na ndetu." },
            { objective: "O1", q: "App AI ọhụrụ kwere nkwa ide ozi soshal midia, mana i nweelarị ngwa enyemaka mkparịta ụka na-eme ya. Gịnị ka ị ga-eme?", options: ["Debanye aha ozugbo", "Hapụ ya ma ọ bụrụ na ọ naghị arụ ọrụ ahụ nke ọma karịa", "Kwụọ ụgwọ maka ha abụọ", "Hichapụ ngwa enyemaka mkparịta ụka gị"], answer: 1, why: "Otu ngwa maka ọrụ ọ bụla na-eme ka ihe dị mfe ma gbochie ịkwụ ụgwọ ugboro abụọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ngwa enyemaka mkparịta ụka: ịhọrọ otu na iji ya nke ọma",
          minutes: 5,
          goal: "Meghee ngwa enyemaka mkparịta ụka n'efu ma jiri ya mee ezi ọrụ ide ihe nke azụmahịa.",
          text: [
            "ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) na Google Gemini (gemini.google.com) niile nwere ụdị n'efu. Ha niile na-ede ihe, na-achịkọta ihe, na-enye echiche ọhụrụ, ma na-akọwa ihe. Họrọ nke dabara akaụntụ ị na-eji ugbu a: Copilot ma ọ bụrụ na azụmahịa gị na-eji Microsoft, Gemini ma ọ bụrụ na ọ na-eji Google, ma ọ bụ nke ọ bụla n'ime ha ma ọ bụrụ na o doghị gị anya.",
            "Jiri otu prompt nwere akụkụ atọ maka nke ọ bụla: ọrụ ahụ, ọnọdụ azụmahịa gị, na ụdị azịza. Wee mee ka ọ ka mma site n'ajụjụ nsochi dị ka \"mee ka ọ dị mkpụmkpụ\", \"mee ka ọ dị nwayọọ karị\" ma ọ bụ \"nye m nhọrọ atọ\".",
            "Nwalee otu prompt ahụ n'ime ngwa enyemaka abụọ ma tụnyere ha. Ị ga-ahụ ngwa ngwa nke dabara ụdị gị. Atụmatụ n'efu nwere oke na-agbanwe; lelee peeji ọnụ ahịa ngwa ahụ n'onwe ya ka ịmara ihe dị n'ime ya taa."
          ],
          steps: ["Meghee otu ngwa enyemaka na web browser ma ọ bụ n'ezi app ya.", "Dee prompt nwere akụkụ atọ maka ezi ọrụ azụmahịa.", "Rịọ maka otu mgbanwe ga-eme ka ọ ka mma.", "Tinye otu prompt ahụ n'ime ngwa enyemaka nke abụọ ma tụnyere ha."],
          words: [["Atụmatụ n'efu (free plan)", "ụdị ngwa ị nwere ike iji n'akwụghị ụgwọ, nke na-enwekarị oke."]],
          slides: [
            { title: "Ngwa enyemaka mkparịta ụka atọ n'efu", bullets: ["ChatGPT: chatgpt.com", "Microsoft Copilot: copilot.microsoft.com", "Google Gemini: gemini.google.com"] },
            { title: "Kedu nke?", bullets: ["Akaụntụ Microsoft: nwalee Copilot", "Akaụntụ Google: nwalee Gemini", "O doghị gị anya: nwalee abụọ ma tụnyere ha"] },
            { title: "Jiri ya nke ọma", bullets: ["Ọrụ + ọnọdụ + ụdị azịza", "Rịọ otu mgbanwe n'otu oge", "Lelee oke ya na peeji ọnụ ahịa ngwa ahụ n'onwe ya"] }
          ],
          tryIt: "Dee prompt na-arịọ nkọwa azụmahịa gị nwere okwu 50 maka profaịlụ soshal midia. Mee ya n'ime ngwa enyemaka mkparịta ụka abụọ. Debe nke ka mma ma dee ngwa ị họrọ.",
          youCanNow: "ịhọrọ ngwa enyemaka mkparịta ụka dabara akaụntụ gị ma jiri ya dee ezi ihe azụmahịa.",
          quickCheck: [
            { objective: "O2", q: "Kedu ezi ụzọ isi tụnyere ngwa enyemaka mkparịta ụka abụọ?", options: ["Họrọ nke nwere logo kacha mma", "Jụọ ajụjụ dị iche n'ime nke ọ bụla", "Mee otu prompt ahụ n'ime ha abụọ", "Jiri nke ọ bụla buru ụzọ meghee"], answer: 2, why: "Otu prompt ahụ na-egosi ngwa na-aza mkpa gị nke ọma karịa." },
            { objective: "O2", q: "Ụlọ ahịa gị na-eji Outlook na Word kwa ụbọchị. Kedu ngwa enyemaka mkparịta ụka ị ga-ebu ụzọ nwalee?", options: ["Nke chọrọ akaụntụ ọhụrụ", "Ngwa a na-akwụ ụgwọ ị na-anụtụbeghị aha ya", "Ọ dịghị nke ọ bụla", "Microsoft Copilot"], answer: 3, why: "Ngwa dabara akaụntụ ị na-eji ugbu a bụ nhọrọ mbụ kwesịrị ekwesị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji AI emepụta ihe osise na Canva",
          minutes: 5,
          goal: "Mee eserese dị mfe nwere akara azụmahịa gị site na Canva.",
          text: [
            "Canva (canva.com) bụ ngwa ihe osise nwere atụmatụ n'efu, ọtụtụ puku template, na akụkụ AI nwere ike ịtụ aro okwu, mepụta foto ma gbanwee nha ihe osise. Ọ dịghị mkpa ka ị mụọ ihe osise iji mee flyer ma ọ bụ ozi soshal midia mara mma.",
            "Malite na template, ọ bụghị peeji efu. Chọọ ihe ị chọrọ, dị ka \"Instagram post bakery\" ma ọ bụ \"flyer cleaning service\". Gbanwee okwu ndị ahụ, tinye agba gị na logo gị, ma mee ka ọ dị mfe: otu ozi, otu foto, otu oku ime ihe.",
            "Ọ bụrụ na i jiri foto AI mepụtara, lee ya anya nke ọma maka mperi dị ka aka dị iche iche ma ọ bụ okwu e dehiere ede, ma emela foto na-edetu logo, akara azụmahịa nke onye ọzọ ma ọ bụ ezi mmadụ n'enweghị ikike."
          ],
          steps: ["Meghee canva.com ma banye ma ọ bụ mepụta akaụntụ n'efu.", "Chọọ template maka ihe osise ị chọrọ.", "Gbanwee okwu ahụ ka ọ bụrụ ozi gị na oku ime ihe gị.", "Tinye agba gị na logo gị.", "Lelee mkpụrụ okwu na foto, wee budata ya."],
          words: [["Template", "ihe osise a kwadebere akwadebe nke ị na-agbanwe ka ọ dabara azụmahịa gị."], ["Agba azụmahịa (brand colors)", "agba abụọ ma ọ bụ atọ ị na-eji mgbe niile ka ndị ahịa wee mata gị."]],
          slides: [
            { title: "Canva maka azụmahịa", bullets: ["Atụmatụ n'efu nwere template", "AI na-atụ aro okwu ma na-eme foto", "Ọ dịghị mkpa ka ị mụọ ihe osise"] },
            { title: "Malite na template", bullets: ["Chọọ \"flyer cleaning service\" ma ọ bụ ihe yiri ya", "Gbanwee okwu ndị ahụ", "Tinye agba gị na logo gị"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Otu ozi", "Otu foto", "Otu oku ime ihe"] },
            { title: "Lelee foto AI", bullets: ["Lee anya maka aka dị iche iche ma ọ bụ okwu e dehiere ede", "Edetula akara azụmahịa ndị ọzọ ma ọ bụ ezi mmadụ"] }
          ],
          tryIt: "Mee otu ozi soshal midia ma ọ bụ flyer maka azụmahịa gị na Canva site na template. Jiri nkọwa azụmahịa gị site na nkuzi gara aga na otu oku ime ihe. Budata ya.",
          youCanNow: "ime eserese mara mma nwere akara azụmahịa gị na Canva ma lelee foto AI tupu i jiri ha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ oku ime ihe (call to action) na flyer?", options: ["Nzọụkwụ ọzọ doro anya, dị ka \"Zitere anyị ozi ka ị debe oge\"", "Foto ahụ", "Nha mkpụrụ okwu", "Logo gị"], answer: 0, why: "Oku ime ihe na-agwa ndị mmadụ ihe ha ga-eme ọzọ." },
            { objective: "O3", q: "AI mere gị foto yiri logo nke akara azụmahịa a ma ama. Gịnị ka ị ga-eme?", options: ["Jiri ya; AI mere ya", "Ejila ya, mee foto ọzọ dị iche", "Mee ka ọ dị obere ka onye ọ bụla ghara ịhụ ya", "Tinye aha gị n'elu ya"], answer: 1, why: "Ekwesịghị iji foto na-edetu logo ụlọ ọrụ ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụdị ngwa AI ndị bụ isi",
        questions: [
          { objective: "O1", q: "Kedu ngwa dabara ọrụ \"ihe osise\"?", options: ["Igwe mgbakọ", "Canva", "Igbe email", "App ụlọ akụ"], answer: 1, why: "Canva na-eme flyer, foto soshal midia na eserese ndị ọzọ." },
          { objective: "O2", q: "Azụmahịa gị na-eji Microsoft Outlook na Word. Kedu ngwa enyemaka mkparịta ụka bụ nhọrọ mbụ kwesịrị ekwesị?", options: ["App maapụ", "App ise ihe", "App egwu", "Microsoft Copilot"], answer: 3, why: "Copilot dabara azụmahịa ndị na-eji akaụntụ Microsoft." },
          { objective: "O1", q: "Tupu i tinye ngwa AI ọhụrụ, kedu ajụjụ kacha mkpa?", options: ["Kedu ọrụ ọ na-arụ, enweelarị m ngwa maka ya?", "Logo ya ọ mara mma?", "Ọ ma ama na TikTok?", "Ọ nwere ọnọdụ ọchịchịrị (dark mode)?"], answer: 0, why: "Malite n'ọrụ ahụ; zere ịkwụ ụgwọ maka ngwa na-eme ihe i nweelarị." },
          { objective: "O3", q: "Kedu ụzọ kacha mma isi malite ihe osise na Canva?", options: ["Peeji efu", "Ịdetu flyer onye asọmpi gị", "Template ị na-agbanwe", "Ide ozi ụlọ akụ gị"], answer: 2, why: "Template na-enye gị nhazi mara mma ị nwere ike ịgbanwe." },
          { objective: "O3", q: "Foto AI maka flyer gị nwere okwu e dehiere ede n'akara dị na ya. Gịnị ka ị ga-eme?", options: ["Jiri ya otú ọ dị", "Bipụta ya ugboro abụọ", "Dozie ya ma ọ bụ mee foto ọhụrụ tupu i jiri ya", "Tụọ onye ahịa ụta"], answer: 2, why: "Lelee foto AI maka mperi tupu ha apụta." }
        ]
      }
    },
    {
      name: "Isi 2: AI n'ime ngwa azụmahịa gị kwa ụbọchị",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI n'akwụkwọ na spreadsheet",
          minutes: 5,
          goal: "Jiri AI dee akwụkwọ mbụ ma ghọta spreadsheet.",
          text: [
            "Google Docs na Sheets na Microsoft Word na Excel nwere ugbu a ndị enyemaka AI n'ọtụtụ atụmatụ (Gemini na Google Workspace, Copilot na Microsoft 365). Ihe ị na-enweta dabere n'atụmatụ gị, nke ahụ na-agbanwekwa, ya mere lelee peeji enyemaka (help) maka akaụntụ gị.",
            "Ọ bụrụ na atụmatụ gị enweghị onye enyemaka dị n'ime ya, ị ka nwere ike iji ngwa enyemaka mkparịta ụka n'efu: tinye ihe e dere ede na-enweghị ozi nzuzo, ma ọ bụ kọwaa kọlụm gị, ma rịọ maka draft, formula ma ọ bụ nkọwa.",
            "Arịrịọ bara uru: \"Gbanwee ndetu ndị a ka ha bụrụ draft nkwekọrịta ọrụ nwere peeji otu nke ọka iwu m ga-enyocha.\" \"Dee formula spreadsheet na-agbakọta kọlụm C mgbe kọlụm B kwuru Paid.\" \"Kọwaa ihe formula a na-eme.\" Nwalee formula ọ bụla mgbe niile n'ahịrị ole na ole ị nwere ike ilele n'aka."
          ],
          steps: ["Meghee akwụkwọ ma ọ bụ spreadsheet ị na-eji ugbu a.", "Chọọ onye enyemaka AI dị n'ime ya; ọ bụrụ na ọ dịghị, meghee ngwa enyemaka mkparịta ụka.", "Rịọ maka draft ma ọ bụ formula, na-akọwa kọlụm gị n'enweghị ozi nzuzo.", "Nwalee formula ọ bụla n'ahịrị ole na ole ị nwere ike ilele n'onwe gị."],
          words: [["Formula", "ntụziaka n'ime igbe (cell) spreadsheet nke na-agbakọ ihe, dị ka mkpokọta."], ["Google Workspace / Microsoft 365", "ụdị azụmahịa a na-akwụ ụgwọ nke ngwa ọfịs Google na Microsoft."]],
          slides: [
            { title: "Ndị enyemaka AI dị n'ime ya", bullets: ["Gemini na Google Workspace", "Copilot na Microsoft 365", "Ihe ị na-enweta dabere n'atụmatụ gị; lelee peeji enyemaka"] },
            { title: "Enweghị onye enyemaka n'ime ya?", bullets: ["Jiri ngwa enyemaka mkparịta ụka n'efu", "Kọwaa kọlụm gị, n'enweghị ozi nzuzo", "Rịọ maka draft, formula ma ọ bụ nkọwa"] },
            { title: "Nwalee tupu i kwere", bullets: ["Nwalee formula ahụ n'ahịrị ole na ole", "Lelee azịza ahụ n'aka", "Ka ọka iwu nyochaa draft iwu"] }
          ],
          sources: [{ name: "Google Workspace: Gemini features", url: "https://workspace.google.com/solutions/ai/" }, { name: "Microsoft Support: Copilot", url: "https://support.microsoft.com/en-us/copilot" }],
          tryIt: "Kọwaara ngwa enyemaka AI obere spreadsheet ire ere (ụbọchị, ihe e rere, ego, a kwụrụ ụgwọ ma ọ bụ a kwụghị) ma rịọ maka formula na-agbakọta naanị ire ere a kwụrụ ụgwọ ya. Mee spreadsheet nnwale nwere ahịrị ise ma lelee formula ahụ n'aka.",
          youCanNow: "iji AI dee akwụkwọ mbụ, ma dee ma nwalee formula spreadsheet.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ formula spreadsheet?", options: ["Chaatị", "Ụdị mkpụrụ okwu (font)", "Ntụziaka n'ime igbe na-agbakọ ihe", "Aha faịlụ"], answer: 2, why: "Formula na-agbakọ azịza site n'ozi dị na spreadsheet gị." },
            { objective: "O4", q: "Ị chọrọ ka AI dee formula maka spreadsheet ire ere ndị ahịa gị. Gịnị ka ị ga-ekesa?", options: ["Spreadsheet zuru ezu nwere aha ndị ahịa", "Nọmba ekwentị ndị ahịa", "Ozi ịbanye ụlọ akụ gị", "Nkọwa kọlụm ndị ahụ n'enweghị ozi nzuzo"], answer: 3, why: "Ịkọwa kọlụm ndị ahụ na-enye gị formula n'ekesaghị ozi nzuzo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ndetu nzukọ na transcription",
          minutes: 4,
          goal: "Jiri AI gbanwee nzukọ ma ọ bụ ozi olu ka ọ bụrụ ndetu doro anya na ihe a ga-eme.",
          text: [
            "Ọtụtụ ngwa nwere ike ịgbanwe okwu ka ọ bụrụ ihe e dere ede ugbu a: ihe ndekọ olu dị n'ọtụtụ ekwentị, akụkụ transcription na Microsoft Teams, Google Meet na Zoom n'ụfọdụ atụmatụ, na voice typing na Google Docs (Tools, wee Voice typing) ma ọ bụ dictation na Word.",
            "Ozugbo i nwetara ihe e dere ede, ngwa enyemaka mkparịta ụka nwere ike ịgbanwe ya ka ọ bụrụ nchịkọta nwere mkpebi na ihe a ga-eme (action items): onye ga-eme gịnị, mgbe ole. Wepụ ozi nzuzo ndị ahịa tupu i tinye ya.",
            "Gwa ndị mmadụ mgbe niile tupu i dekọọ ma ọ bụ transcribe oku. Iwu gbasara idekọ oku dị iche site na steeti na mba, ụfọdụ chọkwara nkwenye onye ọ bụla, ya mere ibu ụzọ jụọ bụ omume nchekwa."
          ],
          steps: ["Gwa onye ọ bụla na ị chọrọ idekọ ma ọ bụ transcribe, ma nweta \"ee\".", "Dekọọ ma ọ bụ transcribe nzukọ ahụ ma ọ bụ ozi olu.", "Wepụ ozi nzuzo n'ime ihe e dere ede.", "Jụọ AI: \"Chịkọta nke a ka ọ bụrụ mkpebi na ihe a ga-eme: onye, gịnị, mgbe ole.\"", "Lelee nchịkọta ahụ megide ihe ị na-echeta."],
          words: [["Ihe a ga-eme (action item)", "ọrụ si na nzukọ nwere onye ga-eme ya na ụbọchị a ga-emecha ya."], ["Nkwenye (consent)", "ikike mmadụ na-enye tupu e mee ihe."]],
          slides: [
            { title: "Okwu gaa n'ihe e dere ede", bullets: ["Ihe ndekọ olu dị n'ekwentị", "Teams, Meet na Zoom n'ụfọdụ atụmatụ", "Voice typing na Docs, dictation na Word"] },
            { title: "Ihe e dere ede gaa n'ihe a ga-eme", bullets: ["Tinye ihe e dere ede, n'enweghị ozi nzuzo", "Rịọ maka mkpebi na ihe a ga-eme", "Onye, gịnị, mgbe ole"] },
            { title: "Buru ụzọ jụọ mgbe niile", bullets: ["Gwa ndị mmadụ tupu i dekọọ", "Iwu idekọ dị iche site n'ebe ruo n'ebe", "Ebe ụfọdụ chọrọ nkwenye onye ọ bụla"] }
          ],
          tryIt: "Dekọọ ozi olu nke nkeji abụọ gbasara ihe azụmahịa gị ga-eme n'izu a. Transcribe ya site na voice typing ma ọ bụ ekwentị gị, wee rịọ ngwa enyemaka AI ka ọ gbanwee ya ka ọ bụrụ ndepụta ihe a ga-eme nwere ụbọchị.",
          youCanNow: "ịgbanwe ndetu e kwuru n'ọnụ ka ọ bụrụ ndepụta ihe a ga-eme e dere ede, ma rịọ ikike tupu i dekọọ ndị ọzọ.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe atọ ihe a ga-eme ọ bụla kwesịrị ikwu?", options: ["Onye, gịnị na mgbe ole", "Ebee, gịnị kpatara na ego ole", "Ụbọchị, ihu igwe na isiokwu", "Naanị isiokwu"], answer: 0, why: "Onye ga-eme gịnị, mgbe ole na-eme ka ihe a ga-eme doo anya." },
            { objective: "O5", q: "Ị chọrọ idekọ oku gị na onye na-ebubata ngwaahịa nye gị iji dee ndetu. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Dekọọ ya na nzuzo", "Gwa ha ma rịọ ikike ha", "Dekọọ naanị ọkara oku ahụ", "Jụọ AI ma ọ bụrụ na e kwere ya"], answer: 1, why: "Gwa ndị mmadụ ma nweta ikike tupu i dekọọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhazi ngwa gị na idebe ha n'enweghị nsogbu",
          minutes: 5,
          goal: "Họrọ otu ngwa maka ọrụ ọ bụla ma debe otu iwu nchekwa maka nke ọ bụla.",
          text: [
            "Obere ngwa ole na ole ị na-eji n'ezie ka mma karịa ogologo ndepụta app i nwalere otu ugboro. Maka ọrụ anọ ahụ, họrọ otu ngwa maka nke ọ bụla, dee ma ị nọ n'atụmatụ n'efu ma ọ bụ nke a na-akwụ ụgwọ, ma dee otu ihe i ji ya mee.",
            "Lelee ntọala ozi (data settings) nke ngwa ọ bụla. Ọtụtụ na-ekwe ka ị gbanyụọ akụkọ mkparịta ụka (chat history) ma ọ bụ gbochie ka e jiri ihe gị zụọ AI ahụ. Atụmatụ azụmahịa na-enwekarị usoro nzuzo siri ike karịa; gụọ peeji nzuzo (privacy) nke ngwa ahụ tupu i tinye akwụkwọ azụmahịa n'ime ya.",
            "Debe otu iwu dị mfe maka ngwa ọ bụla, dị ka \"Enweghị nọmba ekwentị ndị ahịa na ChatGPT\" ma ọ bụ \"Budata naanị foto Canva m lelere\". Nyochaa ngwa gị ọnwa ole na ole ọ bụla, n'ihi na ngwa, ihe ha na-eme na ọnụ ahịa ha na-agbanwe."
          ],
          steps: ["Depụta ọrụ anọ ahụ.", "Họrọ otu ngwa maka nke ọ bụla ma dee ma ọ bụ n'efu ma ọ bụ a na-akwụ ụgwọ.", "Meghee ntọala ngwa ọ bụla ma chọta nhọrọ ozi ma ọ bụ nzuzo ya.", "Dee otu iwu nchekwa maka ngwa ọ bụla.", "Debe ncheta inyocha ngwa gị n'ime ọnwa atọ."],
          words: [["Ngwa gị (toolkit)", "obere ndepụta ngwa ị na-adabere na ya, na ihe nke ọ bụla bụ maka ya."], ["Ntọala nzuzo (privacy settings)", "nhọrọ na-achịkwa ihe ngwa na-edebe na otu o si eji ozi gị."]],
          slides: [
            { title: "Otu ngwa maka ọrụ ọ bụla", bullets: ["Ide ihe, ihe osise, akwụkwọ, nzukọ", "N'efu ka ọ bụ a na-akwụ ụgwọ?", "Otu ihe i ji ya mee"] },
            { title: "Lelee ntọala ozi", bullets: ["Gbanyụọ akụkọ mkparịta ụka ma ọ bụ ọzụzụ AI ma ọ bụrụ na e nwere ya", "Atụmatụ azụmahịa nwere ike ichebe ozi nke ọma karịa", "Buru ụzọ gụọ peeji nzuzo"] },
            { title: "Otu iwu nchekwa maka ngwa ọ bụla", bullets: ["\"Enweghị nọmba ekwentị ndị ahịa na mkparịta ụka\"", "\"Jiri naanị foto m lelere\""] },
            { title: "Nyochaa ọnwa ole na ole ọ bụla", bullets: ["Ngwa, ihe ha na-eme na ọnụ ahịa ha na-agbanwe"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee peeji otu gị akpọrọ \"Ngwa AI M\": ọrụ anọ, otu ngwa maka nke ọ bụla, otu ihe i ji ya mee n'ihe ọmụmụ a, na otu iwu nchekwa maka ngwa ọ bụla.",
          youCanNow: "iji obere ngwa AI dị nchebe rụọ azụmahịa gị, nke ị na-enyocha ka oge na-aga.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ iwu nchekwa ngwa?", options: ["Ndepụta ọnụ ahịa", "Peeji ịbanye nke ngwa", "Iwu dị ka \"enweghị nọmba ekwentị ndị ahịa na mkparịta ụka AI\"", "Nkwado (backup) faịlụ gị"], answer: 2, why: "Iwu nchekwa na-ekwu otu ị na-esi echebe ozi n'ime ngwa ọ bụla." },
            { objective: "O6", q: "Ọnwa isii mgbe i mere ndepụta ngwa gị, otu ngwa gbanwere atụmatụ n'efu ya. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Hichapụ ndepụta ngwa gị", "Nọgide na-akwụ ụgwọ n'eleghị anya", "Lelee peeji ọnụ ahịa ngwa ahụ n'onwe ya ma melite ndepụta ngwa gị"], answer: 3, why: "Ngwa na ọnụ ahịa na-agbanwe, ya mere ị na-enyocha ngwa gị ka oge na-aga." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: AI n'ime ngwa azụmahịa gị kwa ụbọchị",
        questions: [
          { objective: "O4", q: "Atụmatụ spreadsheet gị enweghị onye enyemaka AI dị n'ime ya. Gịnị ka ị nwere ike ime?", options: ["Kọwaara ngwa enyemaka mkparịta ụka n'efu kọlụm gị ma rịọ maka formula", "Kwụsị", "Tinye nọmba kaadị ndị ahịa gị n'ime AI", "Zụta app AI ọ bụla"], answer: 0, why: "Ngwa enyemaka mkparịta ụka nwere ike ide formula site na nkọwa n'enweghị ozi nzuzo." },
          { objective: "O4", q: "AI deere gị formula spreadsheet. Gịnị ka ị ga-eme tupu i kwere ya?", options: ["Hichapụ spreadsheet ahụ", "Jiri ya maka afọ niile otu mgbe", "Zigara ndị ahịa ya", "Nwalee ya n'ahịrị ole na ole ị nwere ike ilele n'aka"], answer: 3, why: "Ịnwale n'ahịrị ole na ole na-ejide mperi." },
          { objective: "O5", q: "Gịnị ka ị ga-eme tupu i dekọọ oku gị na onye ahịa?", options: ["Dekọọ ya na nzuzo", "Gwa ha ma nweta ikike ha", "Dekọọ naanị nkeji mbụ", "Tinye ya n'ịntanetị"], answer: 1, why: "Iwu idekọ dị iche, ụfọdụ chọkwara nkwenye onye ọ bụla." },
          { objective: "O5", q: "Ihe a ga-eme kwesịrị ikwu:", options: ["Onye ga-eme gịnị, mgbe ole", "Naanị ụbọchị nzukọ", "Otu nzukọ ahụ si dị ogologo", "Onye bịara n'azụ oge"], answer: 0, why: "Ihe a ga-eme na-akpọ aha onye, ọrụ na ụbọchị a ga-emecha ya." },
          { objective: "O6", q: "Gịnị mere ị ga-eji nyochaa ngwa AI gị ọnwa ole na ole ọ bụla?", options: ["Iji hichapụ azụmahịa gị", "Iwu chọrọ ya", "Ngwa, ihe ha na-eme na ọnụ ahịa ha na-agbanwe", "N'ihi na AI na-echefu ihe"], answer: 2, why: "Nyocha mgbe ụfọdụ na-eme ka ngwa gị dị ọhụrụ ma ghara ịdị oke ọnụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Onye Ọchụnta Ego Ọ Bụla Kwesịrị Ịmara",
    questions: [
      { objective: "O1", q: "Ọrụ anọ ngwa AI n'ihe ọmụmụ a bụ:", options: ["Ụlọ akụ, mbupu ngwaahịa, iwe ndị ọrụ, ụtụ isi", "Ide ihe, ihe osise, akwụkwọ na ọnụọgụgụ, nzukọ na ndetu", "Egwu, egwuregwu, ihe nkiri, egwuregwu bọọlụ", "Ekwentị, laptọọpụ, tablet, elekere"], answer: 1, why: "Ọrụ anọ ndị ahụ na-ekpuchi ọtụtụ mkpa obere azụmahịa." },
      { objective: "O2", q: "Kedu nke bụ ngwa enyemaka mkparịta ụka?", options: ["Ụgbọala na-ebuga ngwaahịa", "Igwe na-agụ barcode", "Igbe ego", "Google Gemini"], answer: 3, why: "Gemini, ChatGPT na Copilot bụ ngwa enyemaka mkparịta ụka." },
      { objective: "O1", q: "Gịnị mere ị ga-eji malite na otu ngwa maka ọrụ ọ bụla?", options: ["Ka ndị ahịa wee hụ app gị", "Ọ bụ iwu", "Ngwa AI enweghị ike ịrụ otu ọrụ", "Ọ na-eme ka ihe dị mfe ma gbochie ịkwụ ụgwọ ugboro abụọ"], answer: 3, why: "Obere ngwa ole na ole dị mfe ịmụta ma dị ọnụ ala." },
      { objective: "O1", q: "Ebee ka ị ga-elele ihe atụmatụ n'efu nke ngwa nwere taa?", options: ["Nkọwa a na-amaghị onye dere n'okpuru vidiyo", "Peeji ọnụ ahịa ngwa ahụ n'onwe ya", "Onye ahịa gị", "Flyer ochie"], answer: 1, why: "Atụmatụ na-agbanwe; peeji gọọmentị ngwa ahụ nwere ihe dị ugbu a." },
      { objective: "O2", q: "Azụmahịa gị na-eji Gmail na Google Drive. Ngwa enyemaka mkparịta ụka kwesịrị ekwesị ị ga-ebu ụzọ nwalee bụ:", options: ["Igwe fax", "Ihe nzacha foto", "Google Gemini", "Ihe na-agụ mkpụrụ okwu"], answer: 2, why: "Gemini dabara azụmahịa ndị na-eji akaụntụ Google." },
      { objective: "O2", q: "Ezi ụzọ isi tụnyere ngwa enyemaka mkparịta ụka abụọ bụ:", options: ["Ime otu prompt ahụ n'ime ha abụọ", "Ịgụ naanị mgbasa ozi ha", "Ịjụ onye ị na-amaghị", "Ịhọrọ nke kacha ọhụrụ"], answer: 0, why: "Otu prompt, ngwa abụọ na-egosi nke dabara ụdị gị." },
      { objective: "O3", q: "Na Canva, ụzọ kacha ọsọ isi nweta ihe osise mara mma bụ:", options: ["Ịdetu logo akara azụmahịa ọzọ", "Ịmalite na peeji efu", "Ịmalite na template", "Iji ụdị mkpụrụ okwu iri"], answer: 2, why: "Template na-enye gị nhazi a kwadebere akwadebe." },
      { objective: "O3", q: "Flyer dị mfe kwesịrị inwe:", options: ["Otu ozi, otu foto, otu oku ime ihe", "Ngwaahịa ọ bụla ị na-ere", "Naanị obere mkpụrụ okwu", "Enweghị aha azụmahịa"], answer: 0, why: "Ihe osise dị mfe na-adị mfe ịgụ." },
      { objective: "O3", q: "Ekwesịghị iji AI mee foto nke:", options: ["Na-egosi ngwaahịa nke gị", "Na-edetu logo ụlọ ọrụ ọzọ", "Na-eji agba azụmahịa gị", "Nwere aha ụlọ ahịa gị e dere nke ọma"], answer: 1, why: "Ịdetu akara azụmahịa ọzọ nwere ike imebi iwu trademark ma ọ bụ copyright." },
      { objective: "O4", q: "Gemini na Google Workspace na Copilot na Microsoft 365 bụ:", options: ["Ọrụ mbuga ngwaahịa", "Igwe mbipụta", "App ịkwụ ụgwọ", "Ndị enyemaka AI dị n'ime ngwa ọfịs n'ọtụtụ atụmatụ"], answer: 3, why: "Ha na-etinye AI n'akwụkwọ, email na spreadsheet." },
      { objective: "O4", q: "Mgbe ị na-arịọ AI maka formula spreadsheet, ị kwesịrị ikesa:", options: ["Nkọwa kọlụm ndị ahụ, n'enweghị ozi nzuzo", "Nọmba kaadị ndị ahịa", "Okwuntughe ụlọ akụ gị", "Nọmba ụtụ isi gị"], answer: 0, why: "Ịkọwa kọlụm ndị ahụ ezuola iji nweta formula." },
      { objective: "O4", q: "Formula spreadsheet bụ:", options: ["Adreesị email", "Ụdị chaatị", "Ụdị mkpụrụ okwu (font)", "Ntụziaka n'ime igbe na-agbakọ ihe"], answer: 3, why: "Formula na-agbakọ ihe dị ka mkpokọta." },
      { objective: "O4", q: "AI deere gị draft nkwekọrịta ọrụ. Gịnị ka ị ga-eme ọzọ?", options: ["Tinye ya n'ịntanetị", "Bịanye aka na ya na ndị ahịa ozugbo", "Ka ọka iwu nyochaa ya tupu i jiri ya", "Hichapụ nke ochie gị n'agụghị ya"], answer: 2, why: "Ọkachamara kwesịrị inyocha akwụkwọ iwu." },
      { objective: "O5", q: "Voice typing na Google Docs na-ekwe ka ị:", options: ["Kwụọ ụgwọ", "Kwuo okwu ka e dee okwu gị", "Mee logo", "Zipu ngwaahịa"], answer: 1, why: "Ọ na-agbanwe okwu e kwuru n'ọnụ ka ọ bụrụ ihe e dere ede." },
      { objective: "O5", q: "Mgbe i transcribere nzukọ, arịrịọ AI bara uru bụ:", options: ["\"Gbanwee ya ka ọ bụrụ koodu.\"", "\"Mee ka ọ dị ogologo.\"", "\"Tinye eziokwu na-enweghị isi.\"", "\"Chịkọta nke a ka ọ bụrụ mkpebi na ihe a ga-eme: onye, gịnị, mgbe ole.\""], answer: 3, why: "Nke a na-agbanwe ogologo transcript ka ọ bụrụ nzọụkwụ ọzọ doro anya." },
      { objective: "O5", q: "Tupu i dekọọ oku, ị kwesịrị:", options: ["Idekọ naanị onye nke ọzọ", "Izo ihe ndekọ ahụ", "Ịgwa ndị mmadụ ma nweta ikike ha", "Ịjụ AI ma ọ bụrụ na ọ dị n'iwu ma ghara ịjụ ha"], answer: 2, why: "Iwu nkwenye dị iche site n'ebe ruo n'ebe; ibu ụzọ jụọ dị nchebe." },
      { objective: "O6", q: "Ọtụtụ ngwa AI na-ekwe ka ị gbanwee ntọala ozi ka:", options: ["E ghara idebe mkparịta ụka gị ma ọ bụ jiri ha zụọ AI", "Ọnụ ahịa gị rịgoro", "Ndị ahịa gị nweta email", "Logo gị gbanwee"], answer: 0, why: "Ntọala nzuzo na-achịkwa ihe ngwa ahụ na-edebe." },
      { objective: "O6", q: "Kedu nke bụ ezigbo iwu nchekwa ngwa?", options: ["\"Kesaara AI okwuntughe\"", "\"Enweghị nọmba ekwentị ndị ahịa na mkparịta ụka AI\"", "\"Elela foto AI mgbe ọ bụla\"", "\"Jiri app ọhụrụ ọ bụla\""], answer: 1, why: "Iwu dị mfe na-echebe ndị ahịa gị." },
      { objective: "O6", q: "Peeji otu ngwa gị na-edepụta maka ọrụ ọ bụla:", options: ["Ego dị n'akaụntụ ụlọ akụ gị", "Ngwa ahụ, n'efu ma ọ bụ a na-akwụ ụgwọ, ihe i ji ya mee, iwu nchekwa", "Okwuntughe ndị asọmpi gị", "App ọ bụla i nwalere"], answer: 1, why: "Nke ahụ na-eme ka ndepụta ngwa gị baa uru ma dị nchebe." },
      { objective: "O6", q: "Gịnị mere i nwere ike ịhọrọ atụmatụ azụmahịa nke ngwa AI?", options: ["O nwere ike inye usoro nzuzo siri ike karịa maka akwụkwọ azụmahịa", "Ọ bụ n'efu mgbe niile", "Ọ na-ewepụ mkpa ilele ọrụ", "Ọ na-edere gị ụtụ isi gị"], answer: 0, why: "Atụmatụ azụmahịa na-echebekarị ozi nke ọma karịa; gụọ peeji nzuzo." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 8, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ọrụ anọ niile dị", objective: "O1", notYet: "Otu ọrụ adịghị ma ọ bụ ngwa abụọ na-arụ otu ọrụ.", meets: "Ide ihe, ihe osise, akwụkwọ ma ọ bụ ọnụọgụgụ, na nzukọ ma ọ bụ ndetu, nwere otu ngwa nke ọ bụla.", exceeds: "Na-ekwu ihe mere e ji họrọ ngwa ọ bụla karịa nke ọzọ." },
      { name: "E ji ngwa ọ bụla mee ihe", objective: "O3", notYet: "E nweghị ihe e ji otu ngwa ma ọ bụ karịa mee.", meets: "Na-edepụta otu ezi ihe e ji ngwa ọ bụla mee, dị ka nkọwa profaịlụ, flyer, formula na ndepụta ihe a ga-eme.", exceeds: "A na-eji ihe ndị e mere n'azụmahịa ahụ ugbu a." },
      { name: "E lelere azịza", objective: "O4", notYet: "E jiri formula, foto ma ọ bụ akwụkwọ n'eleleghị ya.", meets: "E nwalere formula n'ahịrị e lelere n'aka; e lelere foto na akwụkwọ tupu e jiri ha.", exceeds: "Na-ede akwụkwọ ndị chọrọ ka ọka iwu ma ọ bụ ọkachamara nyochaa ha." },
      { name: "Iwu nchekwa", objective: "O6", notYet: "Otu ngwa enweghị iwu nchekwa, ma ọ bụ iwu edoghị anya.", meets: "Ngwa ọ bụla nwere otu iwu doro anya maka ozi ndị ahịa.", exceeds: "Na-edekwa ntọala ozi a gbanwere na ngwa ọ bụla na mgbe a ga-enyocha ndepụta ngwa ahụ." },
      { name: "Atụmatụ n'efu na otu o si dabara", objective: "O2", notYet: "E kwughị ma ọ bụ n'efu ma ọ bụ a na-akwụ ụgwọ, ma ọ bụ ngwa ahụ adabaghị akaụntụ azụmahịa ahụ.", meets: "E dere n'efu ma ọ bụ a na-akwụ ụgwọ maka ngwa ọ bụla, e lelere ya na peeji ọnụ ahịa ya.", exceeds: "Na-ede ihe atụmatụ a na-akwụ ụgwọ ga-agbakwunye na ma ọ bara uru." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa ka na-eji ngwa anọ dị na ndepụta ha mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị nwe azụmahịa kwuru na ha kagburu ngwa a na-akwụ ụgwọ nke na-arụ otu ọrụ ma ọ bụ nke a naghị eji",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị ọchụnta ego n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Akaụntụ n'efu: ngwa enyemaka mkparịta ụka, Canva, na Google Docs na Sheets ma ọ bụ Microsoft 365",
      "Ekwentị maka obere ozi olu",
      "Ihe dị ka nkeji 60 n'ozuzu maka nkuzi, ọrụ, nnwale na peeji ngwa ahụ"
    ],
    facilitatorNotes: [
      "Ka ndị nwe azụmahịa bịa na ezi nkọwa azụmahịa ha; a ga-eji ya ọzọ na Nkuzi 2 na 3.",
      "Lelee atụmatụ n'efu dị ugbu a na peeji ọnụ ahịa ngwa ọ bụla tupu nnọkọ ahụ, n'ihi na ha na-agbanwekarị.",
      "Chetara ndị na-amụ ihe ka ha rịọ ikike tupu ha dekọọ onye ọ bụla, ma ghara itinye ozi ndị ahịa na mkparịta ụka AI.",
      "Jiri spreadsheet nnwale nwere ahịrị ise na ozi e chepụtara echepụta maka omume formula.",
      "Jiri rubric tụọ akara peeji ngwa ahụ, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

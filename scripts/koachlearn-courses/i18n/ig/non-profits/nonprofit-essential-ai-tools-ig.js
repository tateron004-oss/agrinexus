"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-essential-ai-tools-ig",
  lang: "ig",
  translationOf: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Ngwa AI Dị Mkpa Maka Ndị Otu Na-adịghị Achọ Uru na Otu E Si Eji Ha",
  skills: "Ịhọrọ ngwa AI kwesịrị ekwesị maka ọrụ, Ịchọta mmemme teknụzụ maka ndị otu na-adịghị achọ uru, Ichikọta nzukọ na akwụkwọ, Ime mpempe akwụkwọ mgbasa ozi na foto site na AI, Iwulite obere ngwa ọrụ maka otu gị",
  outcome: "ịhọrọ ngwa AI kwesịrị ekwesị nke dị n'efu ma ọ bụ nke e belatara ọnụ ahịa ya maka ndị otu na-adịghị achọ uru, iji ngwa enyemaka AI gbanwee ndetu nzukọ ka ọ bụrụ nchịkọta doro anya nwere ọrụ a ga-arụ, iji ngwa nhazi mee mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo, na ide kaadị ngwa ọrụ otu peeji nke otu gị ga-agbaso.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ na ndị ọrụ afọ ofufo n'otu na-adịghị achọ uru (nonprofit) na n'otu okpukpe, ndị chọrọ obere ndepụta ngwa AI bara uru na otu e si eji nke ọ bụla.",
    "Ị ga-amụta ụdị ngwa AI anọ ọtụtụ ndị otu na-adịghị achọ uru chọrọ, ebe ị ga-achọta mmemme Google na Microsoft maka ndị otu na-adịghị achọ uru, na otu e si eji AI arụ ezi ọrụ abụọ: nchịkọta nzukọ na mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ ị ga-eji aka gị rụọ. Ọnụ ahịa na mmemme na-agbanwe, ya mere ihe ọmụmụ a na-egosi gị peeji gọọmentị ndị ahụ ka i lelee tupu i debanye aha. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee \"kaadị ngwa ọrụ AI\" otu peeji maka otu gị nke na-akpọ aha otu ngwa enyemaka AI, otu office suite na otu ngwa nhazi, na-ekwu ihe nke ọ bụla bụ maka ya na ihe a na-agaghị etinye n'ime ya mgbe ọ bụla, ma tinyekwa ihe abụọ i ji ha mee: nchịkọta nzukọ nwere ọrụ a ga-arụ (site na ndetu na-enweghị ozi nzuzo) na mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ na ndị ọrụ afọ ofufo n'otu na-adịghị achọ uru na n'otu okpukpe, ndị chọrọ obere ndepụta ngwa AI bara uru na otu e si eji nke ọ bụla. Ọtụtụ n'ime ha nọ n'obere otu na-enweghị ndị ọrụ IT.",
    startingPoint: "Ha na-eji email, akwụkwọ na ekwentị kwa ụbọchị, ụfọdụ anwalekwala ngwa enyemaka AI. Ọtụtụ amaghị mmemme teknụzụ maka ndị otu na-adịghị achọ uru ha ruru eru isonye na ya, ma ọ bụ otu e si edozi ngwa n'enweghị nsogbu maka otu.",
    gap: "Obere otu na-akwụkarị ụgwọ maka ngwa ha gaara enweta n'efu ma ọ bụ n'ọnụ ala, na-eji akaụntụ onwe ha nke na-eso ndị ọrụ afọ ofufo apụ, ma na-etinye ọtụtụ awa na ndetu nzukọ na mpempe akwụkwọ mgbasa ozi. Ndị na-amụ ihe chọrọ obere ngwa ole na ole n'enweghị nsogbu na kaadị otu na-egosi onye ọ bụla otu e si eji ha.",
    constraints: [
      "Ego: naanị ngwa n'efu ma ọ bụ ndị e belatara ọnụ ahịa ha maka ndị otu na-adịghị achọ uru",
      "Ọnụ ahịa na iwu mmemme na-agbanwe; ndị na-amụ ihe na-elele peeji gọọmentị tupu ha etinye akwụkwọ",
      "Nzuzo: ozi nzuzo ndị na-enye onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-enyere aka adịghị abanye n'ngwa ọ bụla ma ọ bụrụ na ndị isi akwadoghị ya",
      "Ịdekọ nzukọ chọrọ nkwado onye ọ bụla; foto ụmụaka chọrọ ikike e dere ede site n'aka nne na nna ma ọ bụ onye nlekọta",
      "Oge: ihe dị ka nkeji 60 n'ozuzu, na nkuzi nkeji 5"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ahụmahụ n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ otu na-adịghị achọ uru", action: "ịhọrọ ụdị ngwa AI kwesịrị ekwesị maka ya: ngwa enyemaka AI, office suite, ngwa nhazi ma ọ bụ ngwa nzukọ na ndetu", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Site n'iji peeji gọọmentị nke mmemme ndị ahụ", action: "ịmata mmemme teknụzụ maka ndị otu na-adịghị achọ uru otu gị nwere ike iru eru isonye na ihe ị chọrọ iji tinye akwụkwọ", standard: "ma lelee iwu ugbu a na peeji gọọmentị ahụ" },
    { id: "O3", condition: "Mgbe otu gị malitere iji ngwa", action: "idozi ya site n'akaụntụ otu, ịbanye nzọụkwụ abụọ na ịlele njikwa nzuzo ya", standard: "n'enweghị ozi nzuzo na-abanye ma ọ bụrụ na ndị isi akwadoghị ya" },
    { id: "O4", condition: "Mgbe e nyere gị ndetu nzukọ na-ahaziteghị ahazi", action: "iwepụ ozi nzuzo ma jiri ngwa enyemaka AI dee nchịkọta nwere tebụl ọrụ a ga-arụ", standard: "ma lelee mkpebi na ụbọchị ọ bụla na ndetu gị" },
    { id: "O5", condition: "Mgbe e nyere gị mmemme ndị ọrụ afọ ofufo", action: "ime mpempe akwụkwọ ịkpọ ndị mmadụ site n'okwu AI dere na template ngwa nhazi", standard: "ma lelee ụbọchị, oge, ebe na onye a ga-akpọtụrụ, ma jiri naanị foto e nyere ikike" },
    { id: "O6", condition: "Maka otu gị", action: "ide kaadị ngwa ọrụ otu peeji nke na-akpọ aha ngwa ọ bụla a kwadoro, ihe ọ bụ maka ya na ihe a na-agaghị etinye n'ime ya mgbe ọ bụla", standard: "ma tinye prompt gị kacha mma ma debe ụbọchị a ga-enyocha ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmata ngwa gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ụdị ngwa AI anọ otu na-adịghị achọ uru na-eji",
          minutes: 4,
          goal: "Jikọta ọrụ otu na-adịghị achọ uru na ụdị ngwa AI kwesịrị ekwesị.",
          text: [
            "Ọtụtụ ọrụ AI n'otu na-adịghị achọ uru dabara n'ụdị ngwa anọ. Ngwa enyemaka AI (ChatGPT, Microsoft Copilot, Google Gemini) na-ede ihe, na-akọwa ihe ma na-achịkọta ihe. Office suite (Microsoft 365, Google Workspace) nwere AI n'ime email, akwụkwọ na spreadsheet.",
            "Ngwa nhazi (dị ka Canva ma ọ bụ Adobe Express) na-enyere aka ime mpempe akwụkwọ mgbasa ozi, ihe a na-etinye na soshal midia na slaịdị, ọtụtụ mgbe site n'iji AI. Ngwa nzukọ na ndetu nwere ike ịdekọ ma ọ bụ dee ihe e kwuru na nzukọ ma dee nchịkọta mbụ, mana jiri ha naanị mgbe onye ọ bụla nọ na nzukọ ahụ kwenyere.",
            "Malite site n'otu ngwa n'ụdị ọ bụla nke otu gị nweelarị. Ngwa ole na ole e ji nke ọma ka ọtụtụ ngwa e ji naanị otu ugboro mma."
          ],
          words: [["Ngwa enyemaka AI", "AI ị na-ede ihe na ya ma ọ bụ gwa okwu nke na-ede azịza."], ["Office suite", "otu mmemme ọrụ: email, akwụkwọ, spreadsheet, slaịdị."], ["Ide ihe e kwuru (transcribe)", "ịgbanwe okwu e kwuru n'ọnụ ka ọ bụrụ ihe e dere ede."]],
          slides: [
            { title: "Ụdị ngwa AI anọ", bullets: ["Ngwa enyemaka AI: na-ede, na-akọwa, na-achịkọta", "Office suite: AI n'ime email na akwụkwọ", "Ngwa nhazi: mpempe akwụkwọ, ihe soshal midia, slaịdị", "Ngwa nzukọ: ihe e dere site n'okwu na nchịkọta"] },
            { title: "Ọmụmaatụ", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Malite site n'ihe i nweelarị", "Otu ngwa n'ụdị ọ bụla", "Dekọọ nzukọ naanị mgbe onye ọ bụla kwenyere"] }
          ],
          tryIt: "Dee ngwa otu gị na-eji ugbu a (email, akwụkwọ, nhazi). Maka nke ọ bụla, dee nke ọ bụ n'ime ụdị anọ ahụ.",
          youCanNow: "ịkpọ aha ụdị ngwa AI anọ ma jikọta ọrụ na nke kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụdị ngwa nwere AI n'ime email, akwụkwọ na spreadsheet?", options: ["Office suite", "Ngwa nhazi", "Igwe na-edekọ nzukọ", "Mgbasa ozi nchọta"], answer: 0, why: "Office suite dị ka Microsoft 365 na Google Workspace nwere AI n'ime mmemme ọrụ kwa ụbọchị." },
            { objective: "O1", q: "Otu gị anwalela ngwa AI asatọ, otu ugboro nke ọ bụla. Gịnị ka nkuzi a na-atụ aro?", options: ["Nwalee asatọ ọzọ", "Họrọ otu ngwa n'ụdị ọ bụla i nweelarị ma jiri ya nke ọma", "Kwụsị iji AI", "Jiri naanị ngwa nhazi"], answer: 1, why: "Ngwa ole na ole e ji nke ọma ka ọtụtụ ngwa e ji naanị otu ugboro mma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta mmemme n'efu na nke ọnụ ala maka ndị otu na-adịghị achọ uru",
          minutes: 5,
          goal: "Chọpụta mmemme teknụzụ otu gị nwere ike iru eru isonye na ebe ị ga-etinye akwụkwọ.",
          text: [
            "Nnukwu ụlọ ọrụ teknụzụ nwere mmemme maka ndị otu na-adịghị achọ uru. Google for Nonprofits na-enye ndị otu enyemaka (charity) e debanyere aha ndị ruru eru ngwaahịa Google n'efu ma ọ bụ n'ọnụ ala, gụnyere mbelata ọnụ ahịa Google Workspace na Google Ad Grants, nke na-enye ndị ruru eru ihe ruru $10,000 kwa ọnwa n'mgbasa ozi nchọta Google. Google na-eji onye mmekọ a na-akpọ Goodstack lelee na ị bụ otu na-adịghị achọ uru.",
            "Ihe Microsoft na-enye ndị otu na-adịghị achọ uru gụnyere Microsoft 365 Business Basic n'efu maka ihe ruru ndị ọrụ 300, atụmatụ akwụ ụgwọ e belatara ọnụ ahịa ha, na Copilot Chat nke so n'ime ndenye Microsoft 365. Ị na-edebanye aha, Microsoft na-akwadokwa na i ruru eru.",
            "Ọ bụghị otu ọ bụla ruru eru. Dịka ọmụmaatụ, mmemme Google anaghị anabata ụlọ ọrụ gọọmentị, ụlọ ọgwụ na ụlọ akwụkwọ. Ngwa nhazi dị ka Canva nwekwara mmemme maka ndị otu na-adịghị achọ uru; lelee peeji gọọmentị ha maka iwu ugbu a. Ọnụ ahịa na iwu na-agbanwe, ya mere lelee peeji gọọmentị mgbe niile tupu i tinye akwụkwọ."
          ],
          steps: ["Kwadebe aha iwu otu gị, adreesị ya na akwụkwọ na-egosi na a naghị ụtụ isi (tax-exempt).", "Meghee peeji gọọmentị Google for Nonprofits na nke Microsoft maka ndị otu na-adịghị achọ uru.", "Gụọ iwu banyere ndị ruru eru.", "Tinye akwụkwọ site n'email otu, ọ bụghị nke onwe gị.", "Mee ka ngwaahịa ọ bụla rụọ ọrụ iche iche mgbe a nabatara gị."],
          words: [["Ịru eru (eligible)", "ịbụ onye a na-ekwe ka ọ sonye n'ihi na o mezuru iwu."], ["Tax-exempt", "gọọmentị kwadoro na otu ahụ anaghị atụ ụfọdụ ụtụ isi, dị ka 501(c)(3) na United States."], ["Ad Grants", "mmemme Google na-enye ndị otu na-adịghị achọ uru ruru eru mgbasa ozi nchọta n'efu."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["Ngwaahịa Google n'efu ma ọ bụ n'ọnụ ala", "Mbelata Workspace na Ad Grants", "Ad Grants: ihe ruru $10,000 kwa ọnwa n'mgbasa ozi nchọta", "A na-elele site na Goodstack"] },
            { title: "Ihe Microsoft na-enye", bullets: ["Microsoft 365 Business Basic n'efu ruo ndị ọrụ 300", "Atụmatụ akwụ ụgwọ e belatara ọnụ ahịa ha", "Copilot Chat so na Microsoft 365"] },
            { title: "Tupu i tinye akwụkwọ", bullets: ["Lelee ma i ruru eru na peeji gọọmentị", "Kwadebe akwụkwọ tax-exempt gị", "Ọnụ ahịa na iwu na-agbanwe: buru ụzọ lelee"] }
          ],
          sources: [
            { name: "Google for Nonprofits", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Microsoft offers for nonprofits", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Meghee peeji Google for Nonprofits na nke ihe Microsoft na-enye ndị otu na-adịghị achọ uru. Dee ma otu gị yiri ka o ruru eru maka nke ọ bụla na akwụkwọ ị ga-achọ.",
          youCanNow: "ịchọta mmemme teknụzụ maka ndị otu na-adịghị achọ uru, ilele ma i ruru eru, na ịmata ihe ị ga-akwadebe iji tinye akwụkwọ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka Microsoft na-eme mgbe i debanyere aha maka ihe ọ na-enye ndị otu na-adịghị achọ uru?", options: ["Ọ na-ezitere gị ụgwọ", "Ọ na-arịọ ndepụta ndị na-enye onyinye", "Ọ na-akwado na i ruru eru", "Ọ na-enye gị onyinye ego"], answer: 2, why: "Ị na-edebanye aha, Microsoft na-akwadokwa na i ruru eru." },
            { objective: "O2", q: "Ụlọ akwụkwọ ọha jụrụ gị ma ọ nwere ike isonye na Google for Nonprofits. Gịnị ka ị ga-agwa ha?", options: ["Ee, otu ọ bụla ruru eru", "Ee, ma ọ bụrụ na ha akwụọ ụgwọ", "Naanị na ngwụsị izu", "Peeji Google kwuru na ụlọ akwụkwọ anaghị eru eru, ya mere lelee peeji gọọmentị ahụ"], answer: 3, why: "Mmemme Google anaghị anabata ụlọ ọrụ gọọmentị, ụlọ ọgwụ na ụlọ akwụkwọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịtọ omume n'enweghị nsogbu maka ngwa ọ bụla",
          minutes: 4,
          goal: "Dozie ngwa AI n'enweghị nsogbu ka otu gị jiri ya.",
          text: [
            "Jiri akaụntụ otu, ọ bụghị akaụntụ onwe gị, ka ọrụ wee nọgide n'aka otu mgbe onye ọrụ afọ ofufo pụrụ. Gbanye ịbanye nzọụkwụ abụọ maka akaụntụ ọ bụla.",
            "Mụta ebe ngwa ọ bụla na-edebe akụkọ mkparịta ụka gị na ma ị nwere ike ịgbanyụ ya ma ọ bụ hichapụ ya. Lee na settings ngwa ahụ maka njikwa nzuzo ma ọ bụ njikwa data.",
            "Iwu ọla edo bụ otu n'ngwa ọ bụla: ozi nzuzo ndị na-enye onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-enyere aka adịghị abanye ma ọ bụrụ na ndị isi gị akwadoghị ngwa ahụ maka ya. Jiri ihe nnọchi dị ka [aha] kama."
          ],
          steps: ["Banye site n'akaụntụ otu.", "Gbanye ịbanye nzọụkwụ abụọ.", "Meghee settings ma chọta njikwa nzuzo ma ọ bụ data.", "Kwekọrịta dị ka otu: enweghị ozi nzuzo, jiri ihe nnọchi."],
          words: [["Ịbanye nzọụkwụ abụọ (two-step sign-in)", "nlele nke abụọ, dị ka koodu e zitere n'ekwentị gị, mgbe ị na-abanye."], ["Akụkọ mkparịta ụka (chat history)", "ihe ngwa na-edebe banyere mkparịta ụka gị gara aga."]],
          slides: [
            { title: "Akaụntụ", bullets: ["Akaụntụ otu, ọ bụghị nke onwe gị", "Ọrụ na-anọgide mgbe ndị ọrụ afọ ofufo pụrụ"] },
            { title: "Nchekwa", bullets: ["Gbanye ịbanye nzọụkwụ abụọ", "Chọta njikwa nzuzo ma ọ bụ data na settings"] },
            { title: "Iwu ọla edo", bullets: ["Enweghị ozi nzuzo onye na-enye onyinye, onye ọrụ afọ ofufo ma ọ bụ onye a na-enyere aka", "Jiri ihe nnọchi dị ka [aha]"] }
          ],
          tryIt: "Meghee settings ngwa AI ị na-ejikarị. Chọta ebe ọ na-edebe akụkọ mkparịta ụka gị na njikwa nzuzo ọ bụla. Dee otu ahịrịokwu banyere ihe ị chọtara.",
          youCanNow: "idozi ngwa AI nwere omume n'enweghị nsogbu maka otu gị.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka ị ga-ahụ akụkọ mkparịta ụka na njikwa data nke ngwa?", options: ["Na settings ngwa ahụ", "N'igbe email gị", "Na peeji soshal midia", "Ọ dịghị ebe; a pụghị ịgbanwe ha"], answer: 0, why: "Lee na settings ngwa ahụ maka njikwa nzuzo ma ọ bụ data." },
            { objective: "O3", q: "Onye ọrụ afọ ofufo dozie ngwa nhazi otu ahụ n'akaụntụ onwe ya, ọ na-akwagakwa ebe ọzọ. Gịnị ka i kwesịrị ịme?", options: ["Ọ dịghị ihe; akaụntụ onwe kacha mma", "Iji akaụntụ otu ka ọrụ wee nọgide n'aka otu", "Ikesara onye ọ bụla okwuntughe ya", "Ịgbanyụ ịbanye nzọụkwụ abụọ"], answer: 1, why: "Akaụntụ otu na-edebe ọrụ n'aka otu mgbe onye ọrụ afọ ofufo pụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmata ngwa gị",
        questions: [
          { objective: "O1", q: "Ị chọrọ mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo. Kedu ụdị ngwa kacha dabara?", options: ["Ngwa nhazi", "Spreadsheet", "Igwe na-edekọ nzukọ", "Igwe mgbakọ"], answer: 0, why: "Ngwa nhazi na-eme mpempe akwụkwọ mgbasa ozi na foto." },
          { objective: "O2", q: "Gịnị ka Google Ad Grants na-enye ndị otu na-adịghị achọ uru ruru eru?", options: ["Laptọp n'efu", "Ihe ruru $10,000 kwa ọnwa n'mgbasa ozi nchọta Google", "Onyinye ego", "Ndị ọrụ n'efu"], answer: 1, why: "Peeji gọọmentị Google kwuru ihe ruru $10,000 kwa ọnwa n'mgbasa ozi nchọta." },
          { objective: "O3", q: "Tupu i jiri ngwa ndetu AI dekọọ nzukọ, ị ga-:", options: ["Zoo igwe ndekọ ahụ", "Jụọ naanị onye isi oche", "Nweta nkwado onye ọ bụla", "Ọ dịghị ihe"], answer: 2, why: "Ndị mmadụ kwesịrị ikwenye tupu e dekọọ ha." },
          { objective: "O3", q: "Gịnị mere ị ga-eji jiri akaụntụ otu kama akaụntụ onwe gị?", options: ["Ọ dị ngwa ide", "Akaụntụ onwe megidere iwu", "Ọ dịghị ihe kpatara ya", "Ọrụ na-anọgide n'aka otu"], answer: 3, why: "Ọrụ anaghị efu mgbe onye ọrụ afọ ofufo pụrụ." },
          { objective: "O2", q: "Ọnụ ahịa na iwu mmemme na-agbanwe. Gịnị ka ị ga-eme?", options: ["Lelee peeji gọọmentị tupu i tinye akwụkwọ", "Tụkwasị obi n'ihe ochie e dere na blọọgụ", "Jụọ AI ma nabata ihe ọ kwuru", "Chee echiche"], answer: 0, why: "Peeji gọọmentị nwere iwu ugbu a." }
        ]
      }
    },
    {
      name: "Isi 2: Iji ngwa AI arụ ezi ọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịgbanwe ndetu nzukọ ka ọ bụrụ nchịkọta doro anya",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI gbanwee ndetu nzukọ na-ahaziteghị ahazi ka ọ bụrụ nchịkọta nwere ọrụ a ga-arụ.",
          text: [
            "Nzukọ ndị isi otu, otu ozi ọma na ndị ọrụ afọ ofufo na-ewepụta ndetu na-ahaziteghị ahazi. Ngwa enyemaka AI nwere ike ịgbanwe ha ka ha bụrụ nchịkọta dị ọcha n'ime sekọnd ole na ole.",
            "Buru ụzọ wepụ ozi nzuzo: enweghị aha ndị a na-enyere aka, nsogbu ahụike ma ọ bụ ego ndị na-enye onyinye nyere. Jiri ọrụ mmadụ kama: \"onye na-edebe ego\", \"onye isi ndị ntorobịa\". Wee tinye ndetu ahụ na prompt a: \"Chịkọta ndetu nzukọ ndị a n'isi okwu 5. Wee depụta ọrụ a ga-arụ na tebụl nwere: ọrụ, onye (site n'ọrụ ya) na ụbọchị a ga-emecha ya.\"",
            "Lelee nchịkọta ahụ na ndetu gị. AI nwere ike ịhapụ mkpebi ma ọ bụ chepụta ụbọchị. Dozie ya, wee tinye ezi aha n'onwe gị tupu i kesaa ya."
          ],
          steps: ["Wepụ ozi nzuzo; jiri ọrụ mmadụ kama aha.", "Tinye ndetu ahụ n'ime ngwa enyemaka AI.", "Rịọ maka nchịkọta isi okwu 5 na tebụl ọrụ a ga-arụ.", "Lelee mkpebi na ụbọchị ọ bụla na ndetu gị.", "Tinye ezi aha n'onwe gị, wee kesaa ya."],
          words: [["Ọrụ a ga-arụ (action item)", "ọrụ mmadụ kwetara ime mgbe nzukọ gasịrị."], ["Nchịkọta", "ụdị mkpụmkpụ nke na-edebe isi ihe ndị ahụ."]],
          slides: [
            { title: "Kwadebe ndetu ahụ", bullets: ["Wepụ ozi ndị a na-enyere aka, ahụike na ndị na-enye onyinye", "Jiri ọrụ mmadụ: onye na-edebe ego, onye isi ndị ntorobịa"] },
            { title: "Prompt ahụ", bullets: ["Chịkọta n'isi okwu 5", "Tebụl ọrụ a ga-arụ: ọrụ, onye, ụbọchị"] },
            { title: "Lelee ma mechaa", bullets: ["Tụnyere ya na ndetu gị", "Dozie mkpebi efuru na ụbọchị e chepụtara", "Tinye ezi aha n'onwe gị"] }
          ],
          tryIt: "Were ndetu site na nzukọ na-adịbeghị anya (ma ọ bụ dee ahịrị ise nke ndetu omume). Wepụ ozi nzuzo, rịọ maka nchịkọta na tebụl ọrụ a ga-arụ, ma lelee ya na ndetu ahụ.",
          youCanNow: "iji AI gbanwee ndetu nzukọ ka ọ bụrụ nchịkọta e lelere nwere ọrụ a ga-arụ.",
          quickCheck: [
            { objective: "O4", q: "Na prompt nchịkọta ahụ, kedu otu e si edepụta \"onye\" na tebụl ọrụ a ga-arụ?", options: ["Site n'aha zuru ezu na nọmba ekwentị", "Site n'adreesị ụlọ", "Site n'ọrụ ya", "Site n'ego onye na-enye onyinye nyere"], answer: 2, why: "Prompt ahụ na-arịọ ọrụ, onye (site n'ọrụ ya) na ụbọchị; ị na-etinye aha ma emechaa." },
            { objective: "O4", q: "Nchịkọta AI hapụrụ otu mkpebi ndị isi otu mere. Gịnị ka ị ga-eme?", options: ["Kesaa ya otu o si dị", "Hichapụ ndetu ahụ", "Rịọ AI ka ọ chee ihe e kpebiri", "Tinye mkpebi ahụ site na ndetu gị tupu i kesaa ya"], answer: 3, why: "Lelee nchịkọta ahụ na ndetu gị ma dozie ihe ọ bụla efuru." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji AI mee mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Jiri AI dee okwu mpempe akwụkwọ ahụ, jirikwa ngwa nhazi hazie ya.",
          text: [
            "Malite site n'okwu. Jụọ ngwa enyemaka AI: \"Dee okwu mpempe akwụkwọ iji kpọọ ndị ọrụ afọ ofufo maka mmemme nkuzi anyị na Satọdee maka ụmụ akwụkwọ middle school. Tinye isiokwu mkpụmkpụ, ihe atọ mere ha ga-eji sonye, oge ọ ga-ewe, na otu e si edebanye aha. Ọ ga-erughị okwu 60.\"",
            "Wee meghee ngwa nhazi, chọọ n'ime template ya \"volunteer\" ma ọ bụ \"flyer\", ma tinye okwu gị. Ọtụtụ ngwa nhazi nwere AI na-atụ aro nhazi ma ọ bụ foto; kọwaa ihe ị chọrọ ma họrọ otu.",
            "Lelee ihe ndị ahụ n'onwe gị: ụbọchị, oge, ebe, onye a ga-akpọtụrụ na njikọ ndebanye aha. Jiri foto e nyere gị ikike iji, egosikwala ihu ụmụaka mgbe ọ bụla n'enweghị ikike e dere ede site n'aka nne na nna ma ọ bụ onye nlekọta."
          ],
          steps: ["Rịọ ngwa enyemaka AI maka okwu mkpụmkpụ maka mpempe akwụkwọ ahụ.", "Meghee ngwa nhazi ma chọọ template mpempe akwụkwọ.", "Tinye okwu gị ma hazie ya.", "Lelee ụbọchị, oge, ebe na onye a ga-akpọtụrụ.", "Jiri naanị foto e nyere gị ikike iji."],
          words: [["Template", "nhazi a kwadebelarị nke ị na-ejupụta n'okwu nke gị."], ["Ikike", "nkwado, ọtụtụ mgbe e dere ede, iji foto ma ọ bụ ọrụ mmadụ."]],
          slides: [
            { title: "Buru ụzọ dee okwu", bullets: ["Isiokwu, ihe atọ mere ha ga-eji sonye, oge ọ ga-ewe", "Otu e si edebanye aha", "Ọ ga-erughị okwu 60"] },
            { title: "Wee hazie ya", bullets: ["Meghee ngwa nhazi", "Chọọ template \"volunteer flyer\"", "Tinye okwu ma hazie ya"] },
            { title: "Lelee tupu i bipụta ya", bullets: ["Ụbọchị, oge, ebe, onye a ga-akpọtụrụ", "Naanị foto e nyere ikike", "Enweghị ihu ụmụaka n'enweghị ikike nne na nna"] }
          ],
          tryIt: "Mee mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo maka ezi mmemme ma ọ bụ nke omume: okwu AI dere nke erughị okwu 60, e hazikwara na template ngwa nhazi. Lelee ihe ọ bụla dị na ya.",
          youCanNow: "ime mpempe akwụkwọ ịkpọ ndị ọrụ afọ ofufo site n'iji AI dee okwu na ngwa nhazi hazie ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị ga-achọ n'ime template ngwa nhazi?", options: ["Okwu dị ka \"volunteer\" ma ọ bụ \"flyer\"", "Aha ndị na-enye gị onyinye", "Okwuntughe gị", "Adreesị onye a na-enyere aka"], answer: 0, why: "Chọọ n'ime template ahụ \"volunteer\" ma ọ bụ \"flyer\" ma tinye okwu gị." },
            { objective: "O5", q: "Okwu AI dere maka mpempe akwụkwọ ahụ nwere njikọ ndebanye aha ezighi ezi. Gịnị ka ị ga-eme?", options: ["Bipụta ya otú ahụ", "Dozie njikọ ahụ n'onwe gị tupu i bipụta ya", "Wepụ akụkụ ndebanye aha", "Rịọ ngwa nhazi ka ọ chee njikọ ahụ"], answer: 1, why: "Lelee ụbọchị, oge, ebe, onye a ga-akpọtụrụ na njikọ ndebanye aha n'onwe gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwulite kaadị ngwa ọrụ AI nke otu gị",
          minutes: 5,
          goal: "Dee kaadị ngwa ọrụ otu peeji nke na-agwa otu gị ngwa ha ga-eji na otu e si eji ha.",
          text: [
            "Kaadị ngwa ọrụ bụ otu peeji otu gị nwere ike idebe n'akụkụ kọmputa. Ọ na-akpọ aha ngwa ọ bụla a kwadoro, ihe ọ bụ maka ya, otu e si abanye na ya, na ihe a na-agaghị etinye n'ime ya mgbe ọ bụla.",
            "Mee ka ọ dị mkpụmkpụ: otu ahịrị maka ngwa ọ bụla. Tinye prompt abụọ ma ọ bụ atọ rụrụ ọrụ kacha mma maka otu gị, dị ka prompt nchịkọta nzukọ, ka ndị ọrụ afọ ofufo ọhụrụ wee nwee ike idetuo ha.",
            "Nyochaa kaadị ahụ kwa ọnwa isii. Ngwa, ọnụ ahịa na mmemme maka ndị otu na-adịghị achọ uru na-agbanwe, otu gị ga-achọtakwa prompt ka mma."
          ],
          steps: ["Depụta otu ngwa enyemaka AI, otu office suite na otu ngwa nhazi.", "Maka nke ọ bụla: ihe ọ bụ maka ya na otu e si abanye.", "Tinye iwu nzuzo maka nke ọ bụla.", "Tinye prompt gị abụọ ma ọ bụ atọ kacha mma.", "Debe ụbọchị ị ga-enyocha ya n'ime ọnwa isii."],
          words: [["Kaadị ngwa ọrụ (toolkit card)", "ntuziaka otu peeji banyere ngwa otu gị na-eji na otu e si eji ha n'enweghị nsogbu."]],
          slides: [
            { title: "Otu ahịrị maka ngwa ọ bụla", bullets: ["Aha ya na ihe ọ bụ maka ya", "Otu e si abanye", "Ihe a na-agaghị etinye mgbe ọ bụla"] },
            { title: "Tinye prompt gị kacha mma", bullets: ["Prompt nchịkọta nzukọ", "Prompt okwu mpempe akwụkwọ", "Ndị ọrụ afọ ofufo ọhụrụ nwere ike idetuo ha"] },
            { title: "Mee ka ọ dị ọhụrụ", bullets: ["Nyochaa ya kwa ọnwa isii", "Ngwa na mmemme na-agbanwe"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee kaadị ngwa ọrụ AI otu peeji maka otu gị nwere ngwa atọ, ihe ha bụ maka ha na iwu nzuzo ha, ma tinye nchịkọta nzukọ na mpempe akwụkwọ i mere.",
          youCanNow: "ịhọrọ, iji ma dee obere ngwa AI ole na ole maka otu gị na-adịghị achọ uru.",
          quickCheck: [
            { objective: "O6", q: "Kedu otu e si ahazi kaadị ngwa ọrụ?", options: ["Akwụkwọ ntuziaka ogologo", "Vidiyo", "Otu ahịrị maka ngwa ọ bụla n'otu peeji", "Ndepụta okwuntughe"], answer: 2, why: "Mee ka ọ dị mkpụmkpụ: otu peeji, otu ahịrị maka ngwa ọ bụla." },
            { objective: "O6", q: "Otu gị chọtara prompt nzukọ na-arụ ọrụ nke ọma. Gịnị ka ị ga-eme ya?", options: ["Debe ya naanị maka onwe gị", "Hichapụ ya mgbe i jiri ya", "Zigara ya ndị na-enye onyinye", "Tinye ya na kaadị ngwa ọrụ ka ndị ọrụ afọ ofufo ọhụrụ wee detuo ya"], answer: 3, why: "Tinye prompt kacha mma ka ndị ọrụ afọ ofufo ọhụrụ wee detuo ihe na-arụ ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji ngwa AI arụ ezi ọrụ",
        questions: [
          { objective: "O4", q: "Tupu i tinye ndetu nzukọ n'ime AI, i kwesịrị:", options: ["Itinye ozi akaụntụ ụlọ akụ ndị na-enye onyinye", "Iwepụ ozi nzuzo ma jiri ọrụ mmadụ kama aha", "Itinye ha otu e si dee ha", "Ibu ụzọ zigara ha onye ọ bụla n'email"], answer: 1, why: "Iji ọrụ mmadụ na-egbochi ozi nzuzo ịbanye n'ngwa AI." },
          { objective: "O4", q: "Nchịkọta AI depụtara ụbọchị ọ dịghị onye kwetara. Gịnị ka ị ga-eme?", options: ["Hapụ ya", "Rịọ AI ka ọ hapụ ya", "Dozie ya site na ndetu gị", "Kesaa ya otú ahụ"], answer: 2, why: "AI nwere ike ịchepụta ihe; ndetu gị bụ ihe ndekọ." },
          { objective: "O5", q: "Kedu nke bụ ezigbo iji template ngwa nhazi?", options: ["Idebe ndepụta ndị na-enye onyinye", "Ide atụmatụ ego", "Ịdekọ nzukọ", "Itinye okwu mpempe akwụkwọ gị na nhazi a kwadebelarị"], answer: 3, why: "Template na-enye gị nhazi dị njikere." },
          { objective: "O5", q: "Ị chọrọ itinye foto ụmụaka nọ na mmemme gị na mpempe akwụkwọ ahụ. Gịnị ka ị chọrọ?", options: ["Ikike e dere ede site n'aka nne na nna ma ọ bụ onye nlekọta", "Ọ dịghị ihe", "Foto buru ibu karị", "AI ga-eme ka ọ ghara ịdị nkọ"], answer: 0, why: "Foto ụmụaka chọrọ ikike site n'aka nne na nna ma ọ bụ onye nlekọta." },
          { objective: "O6", q: "Ugboro ole ka i kwesịrị inyocha kaadị ngwa ọrụ gị?", options: ["Ọ dịghị mgbe", "Ihe dị ka kwa ọnwa isii", "Kwa ụbọchị", "Naanị mgbe onye na-enye onyinye jụrụ"], answer: 1, why: "Ngwa na mmemme na-agbanwe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Dị Mkpa Maka Ndị Otu Na-adịghị Achọ Uru na Otu E Si Eji Ha",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ngwa enyemaka AI?", options: ["Igwe mbipụta", "Igbe spreadsheet", "Microsoft Copilot", "Igwe ntụtụ akwụkwọ"], answer: 2, why: "Copilot, ChatGPT na Gemini bụ ngwa enyemaka AI." },
      { objective: "O1", q: "Office suite bụ:", options: ["Ụlọ nzukọ", "Naanị ebe nchekwa ozi ndị na-enye onyinye", "Ekwentị", "Otu mmemme ọrụ dị ka email, akwụkwọ na spreadsheet"], answer: 3, why: "Microsoft 365 na Google Workspace bụ office suite." },
      { objective: "O1", q: "Kedu ụdị ngwa na-eme foto maka soshal midia?", options: ["Ngwa nhazi", "Igwe mgbakọ", "App ụlọ akụ", "Igwe na-achịkwa okpomọkụ"], answer: 0, why: "Ngwa nhazi na-eme foto na mpempe akwụkwọ mgbasa ozi." },
      { objective: "O1", q: "Gịnị ka \"transcribe\" pụtara?", options: ["Ịtụgharị gaa n'asụsụ Spanish", "Ịgbanwe okwu e kwuru n'ọnụ ka ọ bụrụ ihe e dere ede", "Ihichapụ faịlụ", "Iziga onyinye"], answer: 1, why: "Ngwa nzukọ nwere ike ide ihe ndị mmadụ kwuru." },
      { objective: "O1", q: "Ụzọ kacha mma isi malite ịhọrọ ngwa bụ:", options: ["Ịzụta ngwa ọhụrụ ọ bụla", "Ịghara iji nke ọ bụla", "Iji ihe i nweelarị, otu n'ụdị ọ bụla", "Ịjụ onye ị na-amaghị"], answer: 2, why: "Ngwa ole na ole, e ji nke ọma." },
      { objective: "O2", q: "Google for Nonprofits na-elele ndị otu site na:", options: ["Ụlọ ọrụ nzipu ozi", "Ụlọ akụ gị", "Onye na-enye onyinye", "Goodstack"], answer: 3, why: "Google kpọrọ Goodstack aha dị ka onye mmekọ ya na-elele ndị otu." },
      { objective: "O2", q: "Kedu otu NA-ERUGHỊ eru maka Google for Nonprofits, dị ka peeji ya si kwuo?", options: ["Ụlọ ọrụ gọọmentị", "Otu enyemaka e debanyere aha", "Otu enyemaka na-ekesa nri", "Otu obodo na-adịghị achọ uru"], answer: 0, why: "Anaghị anabata ụlọ ọrụ gọọmentị, ụlọ ọgwụ na ụlọ akwụkwọ." },
      { objective: "O2", q: "Ihe Microsoft na-enye ndị otu na-adịghị achọ uru gụnyere:", options: ["Ụgbọala n'efu", "Microsoft 365 Business Basic n'efu ruo ndị ọrụ 300", "Onyinye ego maka ụgwọ ụlọ", "Ụlọ ọfịs n'efu"], answer: 1, why: "Peeji Microsoft depụtara Business Basic n'efu ruo ndị ọrụ 300." },
      { objective: "O2", q: "Gịnị ka i kwesịrị ịkwadebe tupu i tinye akwụkwọ na mmemme teknụzụ maka ndị otu na-adịghị achọ uru?", options: ["Nọmba kaadị ndị na-enye onyinye", "Faịlụ ndị a na-enyere aka", "Aha iwu otu gị, adreesị na akwụkwọ tax-exempt", "Ọ dịghị ihe"], answer: 2, why: "Mmemme ndị a na-elele na ị bụ ezi otu na-adịghị achọ uru." },
      { objective: "O3", q: "Ịbanye nzọụkwụ abụọ pụtara:", options: ["Ịbanye ugboro abụọ n'ụbọchị", "Ikesa okwuntughe gị", "Mmadụ abụọ na-eji otu akaụntụ", "Nlele nke abụọ dị ka koodu ekwentị mgbe ị na-abanye"], answer: 3, why: "Ọ na-echebe akaụntụ ma ọ bụrụ na okwuntughe apụta." },
      { objective: "O3", q: "Ebee ka ị ga-achọ njikwa nzuzo ngwa?", options: ["Na settings ya", "N'ime igbe ihe mkpofu", "N'email onye na-enye onyinye", "Na igwe mbipụta"], answer: 0, why: "Settings na-enwekarị njikwa data na nzuzo." },
      { objective: "O3", q: "Iwu ọla edo n'ngwa AI ọ bụla bụ:", options: ["Tinye ihe niile ka i nweta azịza kacha mma", "Enweghị ozi nzuzo ndị na-enye onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-enyere aka ma ọ bụrụ na a kwadoghị ya", "Jiri naanị akaụntụ onwe gị", "Elela azịza mgbe ọ bụla"], answer: 1, why: "Ichebe ozi nzuzo na-edobe ntụkwasị obi." },
      { objective: "O4", q: "Na prompt nchịkọta nzukọ, i kwesịrị ịrịọ maka:", options: ["Abụ uri", "Ozi akaụntụ ụlọ akụ ndị na-enye onyinye", "Isi okwu na tebụl ọrụ a ga-arụ", "Akụkọ ọ bụla"], answer: 2, why: "Nke a na-enye nchịkọta doro anya bara uru." },
      { objective: "O4", q: "Gịnị mere ị ga-eji jiri ọrụ mmadụ dị ka \"onye na-edebe ego\" na ndetu ị na-etinye?", options: ["Ọ dị mkpụmkpụ", "AI apụghị ịgụ aha", "Ndị na-edebe ego na-ahọrọ ya", "Iji gbochie aha na ozi nzuzo ịbanye"], answer: 3, why: "Ọrụ mmadụ na-echebe nzuzo." },
      { objective: "O4", q: "Gịnị ka ị ga-elele na nchịkọta nzukọ AI dere?", options: ["Mkpebi na ụbọchị ọ bụla na ndetu gị", "Naanị ụdị mkpụrụ akwụkwọ", "Ọ dịghị ihe", "Naanị ogologo ya"], answer: 0, why: "AI nwere ike ịhapụ ma ọ bụ chepụta ihe." },
      { objective: "O5", q: "Ezigbo okwu mpempe akwụkwọ maka ndị ọrụ afọ ofufo gụnyere:", options: ["Naanị akara otu (logo)", "Isiokwu, ihe mere ha ga-eji sonye, oge ọ ga-ewe na otu e si edebanye aha", "Aha ndị na-enye onyinye", "Akụkọ ogologo banyere otu ahụ"], answer: 1, why: "Ọ na-agwa ndị na-agụ ya ihe mere ha ga-eji sonye na otu ha ga-esi sonye." },
      { objective: "O5", q: "Tupu i bipụta mpempe akwụkwọ, lelee:", options: ["Naanị agba ya", "Ihu igwe", "Ụbọchị, oge, ebe na onye a ga-akpọtụrụ", "Ọ dịghị ihe"], answer: 2, why: "Ihe ezighi ezi na-egbochi ndị mmadụ ịbịa." },
      { objective: "O6", q: "Kaadị ngwa ọrụ bụ:", options: ["Kaadị onyinye (gift card)", "Baajị onye ọrụ afọ ofufo", "Akwụkwọ nnata onyinye", "Ntuziaka otu peeji banyere ngwa otu gị kwadoro"], answer: 3, why: "Ọ na-egosi ngwa a ga-eji na otu e si eji ha." },
      { objective: "O6", q: "Gịnị mere ị ga-eji tinye prompt gị kacha mma na kaadị ngwa ọrụ?", options: ["Ndị ọrụ afọ ofufo ọhụrụ nwere ike idetuo ihe na-arụ ọrụ", "Iji jupụta ohere", "Prompt bụ ihe nzuzo", "Ndị na-enye onyinye chọrọ ha"], answer: 0, why: "Prompt e kesara na-echekwa oge ma na-edobe ọrụ dị mma." },
      { objective: "O2", q: "Iwu Canva maka ndị otu na-adịghị achọ uru nwere ike ịgbanwela. I kwesịrị:", options: ["Iche na ọ ga-adị n'efu ruo mgbe ebighị ebi", "Ilele peeji gọọmentị Canva maka ndị otu na-adịghị achọ uru", "Ịjụ ngwa enyemaka AI ma tụkwasị ya obi", "Ịhapụ ngwa nhazi"], answer: 1, why: "Peeji gọọmentị nwere iwu ugbu a." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      5,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ngwa kwesịrị ekwesị a kpọrọ aha",
        objective: "O1",
        notYet: "Otu n'ime ụdị ngwa atọ ahụ efuola, ma ọ bụ e ji ngwa rụọ ọrụ na-adabaghị ya.",
        meets: "Na-akpọ aha otu ngwa enyemaka AI, otu office suite na otu ngwa nhazi, na ihe nke ọ bụla bụ maka ya.",
        exceeds: "Na-egosi ngwa ndị a na-enweta n'efu ma ọ bụ n'ọnụ ala site na mmemme maka ndị otu na-adịghị achọ uru."
      },
      {
        name: "Iwu nchekwa na kaadị ahụ",
        objective: "O3",
        notYet: "Kaadị ahụ ekwughị ihe a na-agaghị etinye n'ime ngwa ọ bụla mgbe ọ bụla.",
        meets: "Ngwa ọ bụla na-ekwu ihe a na-agaghị etinye n'ime ya mgbe ọ bụla, ya na akaụntụ otu na ịbanye nzọụkwụ abụọ.",
        exceeds: "Na-ekwukwa ebe a ga-ahụ njikwa nzuzo ngwa ọ bụla."
      },
      {
        name: "Nchịkọta nzukọ",
        objective: "O4",
        notYet: "Nchịkọta ahụ nwere aha ma ọ bụ ozi nzuzo, ma ọ bụ mkpebi ma ọ bụ ụbọchị ezighi ezi.",
        meets: "Nchịkọta na tebụl ọrụ a ga-arụ site n'ọrụ mmadụ, e lelere ya na ndetu ahụ.",
        exceeds: "E tinyere ezi aha naanị mgbe e detupụtara ya site n'ngwa AI."
      },
      {
        name: "Mpempe akwụkwọ ndị ọrụ afọ ofufo",
        objective: "O5",
        notYet: "Ụbọchị, oge, ebe ma ọ bụ onye a ga-akpọtụrụ ezighi ezi ma ọ bụ efuola, ma ọ bụ foto e nyeghị ikike.",
        meets: "Isiokwu, ihe mere ha ga-eji sonye, oge ọ ga-ewe na ndebanye aha, e lelere ihe niile.",
        exceeds: "Na-eji naanị foto e nyere ikike, ọ dịkwa mfe ịgụ n'otu ilenye anya."
      },
      {
        name: "Kaadị ngwa ọrụ bara uru",
        objective: "O6",
        notYet: "Ọ karịrị otu peeji, ma ọ bụ ọ dịghị otu e si abanye.",
        meets: "Otu peeji, otu ahịrị maka ngwa ọ bụla, nwere prompt kacha mma.",
        exceeds: "O nwere ụbọchị nyocha dị ihe dị ka ọnwa isii n'ihu na onye na-ahụ maka ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị otu tinyere akwụkwọ n'opekata mpe otu mmemme teknụzụ maka ndị otu na-adịghị achọ uru n'ime ụbọchị 60 (nnyocha nsochi)",
      "Otu na-eji kaadị ngwa ọrụ ha maka nchịkọta nzukọ ma ọ bụ mpempe akwụkwọ n'ime ụbọchị 30",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị otu na-adịghị achọ uru n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu, office suite gị na akaụntụ ngwa nhazi n'efu",
      "Ndetu nzukọ omume na-enweghị ozi nzuzo",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ahụ, lelee office suite na ngwa nhazi otu ahụ nweelarị.",
      "Kwadebe aha iwu otu ahụ, adreesị ya na akwụkwọ tax-exempt ma ọ bụrụ na ndị na-amụ ihe ga-etinye akwụkwọ na mmemme n'oge nnọkọ ahụ.",
      "Nye ndetu nzukọ omume nwere ọrụ mmadụ kama aha ka a ghara itinye ezi ozi nzuzo.",
      "Chetara ndị na-amụ ihe na foto ụmụaka chọrọ ikike e dere ede site n'aka nne na nna ma ọ bụ onye nlekọta.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

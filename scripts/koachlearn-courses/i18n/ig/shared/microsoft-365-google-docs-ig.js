"use strict";

// Koach Learn course (Igbo translation of shared/microsoft-365-google-docs.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "microsoft-365-google-docs-ig",
  lang: "ig",
  translationOf: "microsoft-365-google-docs",
  category: "Seniors and Technology",
  name: "Mmalite Microsoft 365 na Google Docs",
  skills: "Ime na ichekwa akwụkwọ, Ịhazi ederede, Ikesa na ide nkọwa (comment), Ime spreadsheet dị mfe, Ịgbakọ site na formula, Ibudata dị ka PDF",
  outcome: "ime akwụkwọ dị ọcha nwere otu peeji na spreadsheet dị mfe nwere ngụkọ (total) na Google Docs na Sheets ma ọ bụ na Microsoft Word na Excel na weebụ, wee kesaa ha n'enweghị nsogbu ma chekwaa otu mbipụta dị ka PDF.",
  about: [
    "Ugbu a, ọtụtụ ebe ọrụ, ụlọ akwụkwọ, ụka, otu na ezinụlọ na-ede ma na-ekesa akwụkwọ n'ịntanetị. Nhọrọ abụọ n'efu a na-ejikarị bụ Google Docs na Sheets (site n'akaụntụ Google) na Microsoft Word na Excel na weebụ (site n'akaụntụ Microsoft). Aha bọtịnụ ha dị iche ntakịrị, mana nka ndị ahụ bụ otu.",
    "N'Isi 1, ị ga-eme akwụkwọ, hazie ya ma kesaa ya. N'Isi 2, ị ga-eme obere spreadsheet, gbakọọ kọlụm site na formula, ma chekwaa ọrụ gị dị ka PDF iji ziga ya ma ọ bụ bipụta ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Mepee app ahụ mgbe ị na-agụ ka i wee mee ọrụ \"Nwalee ya ugbu a\" ozugbo. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee akwụkwọ mgbasa ozi (flyer) ma ọ bụ akwụkwọ ozi nwere otu peeji (dịka ọmụmaatụ ire ihe n'ezí ụlọ, ụbọchị ọrụ afọ ofufo, ma ọ bụ ozi nye onye nwe ụlọ) nwere aha isi gbara ọchịchịrị (bold), ndepụta nwere bullet na ahịrị ozi nkwukọrịta gị, na obere spreadsheet nwere opekata mpe ụgwọ ise nke e jiri formula SUM gbakọọ. Kesaa akwụkwọ ahụ na otu onye dị ka \"view only\" (ịgụ naanị), ma budata faịlụ abụọ ahụ dị ka PDF.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ akwụkwọ ọfịs kwa ụbọchị: ndị agadi, ndị na-achọ ọrụ, ndị ọrụ afọ ofufo, ndị na-alaghachi n'ọrụ, ndị otu obere nzukọ enyemaka (nonprofit) na otu obodo, na ụmụaka na-amalite ụlọ akwụkwọ ma ọ bụ ọrụ.",
    startingPoint: "Ha nwere ike iji ụzarị (mouse) ma ọ bụ ihuenyo mmetụ, meghee web browser ma dee ihe. Ọtụtụ nwere akaụntụ email mana ha emebeghị akwụkwọ ma ọ bụ spreadsheet n'ịntanetị, kesaa faịlụ, ma ọ bụ chekwaa PDF.",
    gap: "Ugbu a, a na-eme akwụkwọ ozi, akwụkwọ mgbasa ozi, mmefu ego (budget), ndepụta aha na fọm ọrụ dị ka faịlụ n'ịntanetị ma zipu ha, ọfịs na-arịọkwa PDF. N'enweghị nka ndị a, ndị mmadụ na-adabere n'ebe ndị ọzọ nọ, na-akwụ ụgwọ maka enyemaka mbipụta, ma ọ bụ na-ekesa faịlụ nwere ozi nzuzo karịa ka o kwesịrị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka cell, formula na PDF",
      "Ngwaọrụ: kọmputa ma ọ bụ tablet nwere web browser kacha mma; ekwentị nwere ike ịrụ ọrụ mana ọ na-esi ike karị",
      "Akaụntụ: a chọrọ akaụntụ Google ma ọ bụ Microsoft n'efu; ọ dịghị ụgwọ a ga-akwụ",
      "Oge: nkuzi nkeji 4 ruo 6, ihe dị ka nkeji 60 n'ozuzu",
      "Nzuzo: a naghị ekesa faịlụ nwere adreesị, nọmba ID ma ọ bụ ozi ahụike site na \"Anyone with the link\" mgbe ọ bụla"
    ],
    prerequisites: "Ọ dịghị, mana Nka Kọmputa Mbụ ma ọ bụ Mmalite Ịntanetị na-enyere ndị ka ji ụzarị na browser eme ihe ọhụrụ aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji Google Docs ma ọ bụ Word na weebụ", action: "imeghe akwụkwọ ọhụrụ efu, nye ya aha doro anya ma kwuo ebe e chekwara ya", standard: "nwere aha na-ekwu ihe faịlụ ahụ bụ, na aha ezi ebe nchekwa n'ịntanetị (Google Drive ma ọ bụ OneDrive)" },
    { id: "O2", condition: "Mgbe e nyere gị peeji ederede nkịtị", action: "ịhazi aha isi, ndepụta nwere bullet na ederede ahụ ka peeji ahụ dị mfe ịgụ", standard: "nwere aha isi na Heading 1, ndepụta nwere bullet na otu okwu gbara ọchịchịrị (bold)" },
    { id: "O3", condition: "Mgbe e nyere gị akwụkwọ na onye chọrọ ịhụ ya", action: "ikesa akwụkwọ ahụ n'ọkwa ikike kacha ala onye ahụ chọrọ ma dee nkọwa (comment)", standard: "na-ahọrọ ọkwa ziri ezi mgbe niile ma ghara iji \"Anyone with the link\" maka ozi nzuzo mgbe ọ bụla" },
    { id: "O4", condition: "Site n'iji Google Sheets ma ọ bụ Excel na weebụ", action: "ime spreadsheet nwere aha isi n'ahịrị 1 na ahịrị ozi ise", standard: "nwere otu ihe n'ahịrị ọ bụla, na nọmba e dere n'enweghị okwu" },
    { id: "O5", condition: "Mgbe e nyere gị kọlụm nọmba na spreadsheet", action: "ide formula SUM nke na-agbakọ kọlụm ahụ ma na-emelite onwe ya", standard: "nwere ngụkọ ziri ezi nke na-agbanwe mgbe a gbanwere otu nọmba" },
    { id: "O6", condition: "Mgbe e nyere gị akwụkwọ ma ọ bụ spreadsheet emechara emecha", action: "ibudata ya dị ka PDF ma bipụta ya mgbe i lechara nlele mbụ (preview)", standard: "a hụrụ PDF ahụ na folda Downloads, ọ dịghịkwa ihe na-apụ n'akụkụ peeji na nlele mbụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ide na ikesa akwụkwọ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Imeghe Google Docs ma ọ bụ Word na weebụ",
          minutes: 5,
          goal: "Mepee akwụkwọ ọhụrụ efu, nye ya aha ma mara ebe e chekwara ya.",
          text: [
            "Google Docs bụ n'efu site n'akaụntụ Google (otu akaụntụ ahụ dị ka Gmail). Gaa na docs.google.com ma họrọ Blank document. Microsoft Word na weebụ bụ n'efu site n'akaụntụ Microsoft (otu akaụntụ ahụ dị ka Outlook.com). Gaa na microsoft365.com, họrọ Word, wee Blank document.",
            "Ha abụọ na-echekwa ọrụ gị n'onwe ha mgbe ị na-ede. Google na-edebe ya na Google Drive; Microsoft na-edebe ya na OneDrive. Ha abụọ bụ ebe nchekwa n'ịntanetị, a na-akpọkwa ya cloud, ya mere ị nwere ike imeghe faịlụ ahụ ọzọ site na kọmputa ma ọ bụ ekwentị ọ bụla mgbe ị banyere (sign in).",
            "Nye faịlụ ọ bụla aha doro anya n'elu n'aka ekpe, dị ka \"Volunteer Day Flyer - May\". Aha doro anya na-eme ka ọ dị mfe ịchọta faịlụ ma emechaa."
          ],
          steps: ["Gaa na docs.google.com (Google) ma ọ bụ microsoft365.com (Microsoft) ma banye (sign in).", "Họrọ akwụkwọ efu (blank document).", "Pịa aha dị n'elu n'aka ekpe ma dee aha faịlụ doro anya.", "Dee otu ahịrịokwu ma lee ozi na-egosi na e chekwara ya n'akụkụ elu."],
          words: [["Cloud", "ebe nchekwa n'ịntanetị, ka ị nwee ike iru faịlụ gị site na ngwaọrụ ọ bụla mgbe ị banyere."], ["Google Drive / OneDrive", "ebe nchekwa n'ịntanetị nke Google na nke Microsoft, ebe a na-edebe faịlụ gị."], ["Akaụntụ", "aha ịbanye gị na okwuntughe gị maka otu ọrụ."]],
          sources: [{ name: "Microsoft: free Word, Excel and PowerPoint for the web", url: "https://www.microsoft.com/en-us/microsoft-365/free-office-online-for-the-web" }, { name: "Google Docs", url: "https://docs.google.com" }],
          slides: [
            { title: "Nhọrọ abụọ n'efu", bullets: ["Google Docs: docs.google.com site n'akaụntụ Google", "Word na weebụ: microsoft365.com site n'akaụntụ Microsoft"] },
            { title: "Ọ na-echekwa onwe ya", bullets: ["Google na-echekwa na Google Drive", "Microsoft na-echekwa na OneDrive", "Mepee ya ọzọ site na ngwaọrụ ọ bụla mgbe ị banyere"] },
            { title: "Nye faịlụ ọ bụla aha", bullets: ["Pịa aha dị n'elu n'aka ekpe", "Jiri aha doro anya: \"Volunteer Day Flyer - May\""] }
          ],
          tryIt: "Mepee akwụkwọ efu na Google Docs ma ọ bụ Word na weebụ. Kpọọ ya \"Akwụkwọ Omume M\" ma dee otu ahịrịokwu banyere izu gị.",
          youCanNow: "imeghe akwụkwọ ọhụrụ, nye ya aha ma mara na ọ na-echekwa onwe ya na cloud.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ cloud?", options: ["Ebe nchekwa n'ịntanetị ị nwere ike iru site na ngwaọrụ ọ bụla mgbe ị banyere", "Folda dị naanị n'otu kọmputa", "Ụdị igwe mbipụta", "App a na-akwụ ụgwọ ị ga-azụrịrị"], answer: 0, why: "Google Drive na OneDrive bụ ebe nchekwa n'ịntanetị, a na-akpọkwa ha cloud." },
            { objective: "O1", q: "I dere akwụkwọ ozi na Google Docs ma chọọ ịchọta ya ọzọ izu na-abịa. Gịnị ka ị ga-eme ugbu a?", options: ["Hapụ aha ya ka ọ bụrụ \"Untitled document\"", "Bipụta ya ka ọ ghara ifu", "Pịa aha dị n'elu n'aka ekpe ma dee aha doro anya dị ka \"Akwụkwọ ozi nye onye nwe ụlọ - June\"", "Detuo ya n'email i zitere onwe gị"], answer: 2, why: "Aha faịlụ doro anya na-eme ka ọ dị mfe ịchọta akwụkwọ ahụ ma emechaa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime ka akwụkwọ dị ọcha",
          minutes: 5,
          goal: "Hazie aha isi, ndepụta na ederede ka peeji dị mfe ịgụ.",
          text: [
            "Ịhazi (formatting) pụtara ịgbanwe otu ederede si dị. Buru ụzọ họrọ (select) ederede ahụ: jide bọtịnụ ụzarị ma dọkpụrụ ya n'elu ya, ma ọ bụ pịa otu okwu ugboro abụọ. Wee jiri toolbar dị n'elu: B maka gbara ọchịchịrị (bold), I maka italic, igbe nha iji mee ka ederede buo ibu, na bọtịnụ ndepụta maka bullet ma ọ bụ nọmba.",
            "Jiri ụdị Heading maka aha isi. Na toolbar, chọta igbe na-ekwu \"Normal text\" (Google) ma ọ bụ \"Normal\" (Word) ma họrọ Heading 1. Heading na-eme ka peeji dị ọcha ma na-enyere ngwa na-agụpụta ihuenyo (screen reader) aka.",
            "Mee ka ọ dị mfe: otu font dị mfe ịgụ, nha 11 ruo 14 maka ederede ahụ, aha isi gbara ọchịchịrị, paragraf dị mkpụmkpụ na ndepụta nwere bullet. Ọ bụrụ na i mehiere, pịa Ctrl+Z (Command+Z na Mac) iji wepụ ya (undo)."
          ],
          steps: ["Họrọ ederede ị chọrọ ịgbanwe.", "Họrọ Heading 1 maka aha isi.", "Họrọ ahịrị ole na ole ma pịa bọtịnụ ndepụta bullet.", "Jiri B mee ka otu okwu dị mkpa gbaa ọchịchịrị.", "Pịa Ctrl+Z (Command+Z na Mac) iji wepụ mperi."],
          words: [["Ịhazi (formatting)", "ịgbanwe otu ederede si dị: nha, bold, ndepụta, heading."], ["Họrọ (select)", "ịka ederede akara site n'ịdọkpụrụ ụzarị n'elu ya ka i wee gbanwee ya."], ["Toolbar", "ahịrị bọtịnụ dị n'elu app ahụ."]],
          slides: [
            { title: "Họrọ, wee gbanwee", bullets: ["Dọkpụrụ n'elu ederede ma ọ bụ pịa okwu ugboro abụọ", "Wee jiri toolbar"] },
            { title: "Ihe mbụ gbasara toolbar", bullets: ["B = bold, I = italic", "Igbe nha na-eme ka ederede buo ibu ma ọ bụ dị obere", "Bọtịnụ ndepụta na-eme bullet ma ọ bụ nọmba"] },
            { title: "Jiri heading maka aha isi", bullets: ["Gbanwee \"Normal text\" ka ọ bụrụ Heading 1", "Ọ dị ọcha, ma na-enyere screen reader aka"] },
            { title: "Mee ka ọ dị mfe", bullets: ["Otu font, nha 11 ruo 14", "Paragraf dị mkpụmkpụ na bullet", "Ctrl+Z (Command+Z na Mac) na-ewepụ mperi"] }
          ],
          tryIt: "N'akwụkwọ omume gị, dee aha isi na ihe atọ, dị ka ihe atọ ị ga-eweta na nri ezinụlọ n'ezí (picnic). Mee aha isi ka ọ bụrụ Heading 1, mee ihe ndị ahụ ka ha bụrụ ndepụta bullet, ma mee ka otu okwu gbaa ọchịchịrị.",
          youCanNow: "ịhazi peeji nwere heading, ndepụta bullet na ederede gbara ọchịchịrị.",
          quickCheck: [
            { objective: "O2", q: "Kedu nha ederede nkuzi a tụrụ aro maka ederede ahụ?", options: ["6 ruo 8", "20 ruo 24", "30 ma ọ bụ karịa", "11 ruo 14"], answer: 3, why: "Nha 11 ruo 14 dị mfe ịgụ maka ederede ahụ." },
            { objective: "O2", q: "Ị chọrọ ka ahịrị atọ ghọọ ndepụta bullet. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Pịa Ctrl+Z", "Họrọ ahịrị atọ ahụ", "Gbanwee font nke peeji niile", "Pịa Share"], answer: 1, why: "Ị na-ebu ụzọ họrọ ederede, wee họrọ bọtịnụ ndepụta bullet." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ikesa n'enweghị nsogbu na iji nkọwa (comment)",
          minutes: 5,
          goal: "Kesaa akwụkwọ na otu onye n'ọkwa ikike ziri ezi ma dee nkọwa.",
          text: [
            "App abụọ ahụ nwere bọtịnụ Share n'elu n'aka nri. Dee adreesị email onye ahụ ma họrọ ihe ọ nwere ike ime: view only (ịgụ naanị), comment (ịtụ aro) ma ọ bụ edit (ịgbanwe faịlụ ahụ). Nye ọkwa kacha ala onye ahụ chọrọ.",
            "Kpachara anya na \"Anyone with the link\". Onye ọ bụla nwetara njikọ (link) ahụ, ọbụlagodi site n'izigharị ya, nwere ike imeghe faịlụ ahụ. Ejila ya maka faịlụ nwere ozi nzuzo dị ka adreesị, nọmba ID ma ọ bụ ozi ahụike.",
            "Nkọwa (comment) na-ekwe ka ndị mmadụ nye echiche ha n'agbanweghị okwu gị. Họrọ ederede ụfọdụ, wee họrọ bọtịnụ comment (akara igbe okwu) ma ọ bụ pịa n'aka nri ma họrọ Comment. Mgbe e doziri nsogbu ahụ, họrọ Resolve."
          ],
          steps: ["Pịa Share n'elu n'aka nri.", "Dee adreesị email onye ahụ.", "Họrọ View, Comment ma ọ bụ Edit; họrọ ọkwa kacha ala ọ chọrọ.", "Zipu.", "Iji dee nkọwa: họrọ ederede, họrọ Comment, dee ihe, wee zipu ya (post)."],
          words: [["Ikesa (share)", "ikwe ka onye ọzọ meghee faịlụ gị."], ["Ọkwa ikike (access level)", "ihe onye nwere ike ime na faịlụ gị: view, comment ma ọ bụ edit."], ["Nkọwa (comment)", "ndetu n'akụkụ faịlụ nke na-adịghị agbanwe ederede ahụ."]],
          slides: [
            { title: "Bọtịnụ Share, n'elu n'aka nri", bullets: ["Dee email ha", "Họrọ View, Comment ma ọ bụ Edit", "Nye ọkwa kacha ala ha chọrọ"] },
            { title: "Kpachara anya na \"Anyone with the link\"", bullets: ["Onye ọ bụla nwetara njikọ ahụ nwere ike imeghe ya", "Ejila ya maka ozi nzuzo mgbe ọ bụla"] },
            { title: "Nkọwa (comment)", bullets: ["Echiche n'agbanweghị okwu gị", "Họrọ ederede, họrọ Comment", "Họrọ Resolve mgbe e doziri ya"] }
          ],
          tryIt: "Kesaa akwụkwọ omume gị na enyi gị ma ọ bụ onye ezinụlọ dị ka view only. Wee tinye nkọwa n'aha isi gị nke na-ekwu \"Aha isi a ọ doro anya?\"",
          youCanNow: "ikesa akwụkwọ n'ọkwa ikike ziri ezi ma jiri nkọwa nweta echiche ndị ọzọ.",
          quickCheck: [
            { objective: "O3", q: "Kedu ọkwa ikike na-ekwe ka mmadụ gbanwee okwu dị na faịlụ gị?", options: ["View only", "Comment", "Edit", "Download"], answer: 2, why: "Edit na-ekwe ka onye ahụ gbanwee faịlụ ahụ; view na comment anaghị eme ya." },
            { objective: "O3", q: "Enyi gị doziri nsogbu i kwuru na nkọwa. Gịnị ka ị ga-eme na nkọwa ahụ?", options: ["Họrọ Resolve", "Hichapụ akwụkwọ ahụ niile", "Kesaa faịlụ ahụ site na Anyone with the link", "Dee nkọwa ọhụrụ n'ahịrị ọ bụla"], answer: 0, why: "Resolve na-emechi nkọwa ozugbo e doziri nsogbu ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ide na ikesa akwụkwọ",
        questions: [
          { objective: "O1", q: "Ebee ka Google Docs na-echekwa ọrụ gị?", options: ["Naanị na USB stick", "Ọ naghị echekwa", "Na Google Drive, n'ịntanetị", "N'igwe mbipụta"], answer: 2, why: "Google Docs na-echekwa na Google Drive n'onwe ya." },
          { objective: "O1", q: "Kedu aha faịlụ kacha mma?", options: ["\"Untitled document\"", "\"asdf\"", "\"doc1\"", "\"Volunteer Day Flyer - May\""], answer: 3, why: "Aha doro anya na-eme ka ọ dị mfe ịchọta faịlụ ahụ ma emechaa." },
          { objective: "O2", q: "Tupu i mee ka ederede gbaa ọchịchịrị (bold), ị ga-ebu ụzọ:", options: ["Mechie app ahụ", "Bipụta peeji ahụ", "Họrọ ederede ahụ", "Kesaa faịlụ ahụ"], answer: 2, why: "Ị na-ahọrọ ederede, wee gbanwee ya site na toolbar." },
          { objective: "O3", q: "Onye agbata obi gị chọrọ naanị ịgụ akwụkwọ mgbasa ozi gị. Kedu ọkwa ikike ị ga-enye?", options: ["Edit", "Owner", "View only", "Anyone with the link"], answer: 2, why: "Nye ọkwa kacha ala onye ahụ chọrọ." },
          { objective: "O3", q: "Akwụkwọ nwere adreesị ụlọ gị na nọmba ekwentị gị. Kedu nhọrọ ikesa ị ga-ezere?", options: ["Ikesa na otu onye site n'email", "View only", "Comment only", "Anyone with the link"], answer: 3, why: "Onye ọ bụla nwetara njikọ ahụ nwere ike imeghe faịlụ nwere ozi nzuzo." }
        ]
      }
    },
    {
      name: "Isi 2: Spreadsheet na imecha ọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Spreadsheet mbụ gị",
          minutes: 5,
          goal: "Mee spreadsheet nwere aha isi na ahịrị ozi ise.",
          text: [
            "Spreadsheet bụ igbe dị n'ahịrị n'ahịrị maka ndepụta na nọmba. Nke Google bụ Sheets (sheets.google.com); nke Microsoft bụ Excel (họrọ Excel na microsoft365.com). Ọ dị mma maka mmefu ego (budget), ndepụta aha, usoro oge na ndepụta ngwaahịa.",
            "Kọlụm na-aga elu na ala, ha nwekwara mkpụrụ akwụkwọ (A, B, C). Ahịrị (row) na-aga n'ofe, ha nwekwara nọmba (1, 2, 3). Igbe ọ bụla bụ cell, a na-akpọ ya site na kọlụm na ahịrị ya, ya mere B2 bụ kọlụm B, ahịrị 2.",
            "Tinye aha isi n'ahịrị 1, dị ka \"Item\" na A1 na \"Cost\" na B1. Wee dee otu ihe n'ahịrị ọ bụla n'okpuru ya. Dee nọmba n'enweghị okwu (12.50, ọ bụghị \"12.50 dollars\") ka spreadsheet ahụ nwee ike iji ha gbakọọ ihe."
          ],
          steps: ["Mepee Google Sheets ma ọ bụ Excel na weebụ ma họrọ spreadsheet efu.", "Nye faịlụ ahụ aha.", "Dee aha isi n'ahịrị 1 (A1: Item, B1: Cost).", "Dee ihe ise na kọlụm A na ụgwọ ha na kọlụm B.", "Mee ka ahịrị 1 gbaa ọchịchịrị (bold)."],
          words: [["Spreadsheet", "igbe cell dị n'ahịrị n'ahịrị maka ndepụta na nọmba, dị ka Google Sheets ma ọ bụ Excel."], ["Cell", "otu igbe na spreadsheet, a na-akpọ ya site na mkpụrụ akwụkwọ kọlụm na nọmba ahịrị, dị ka B2."], ["Kọlụm / ahịrị (column / row)", "kọlụm na-aga elu na ala (mkpụrụ akwụkwọ); ahịrị na-aga n'ofe (nọmba)."]],
          slides: [
            { title: "Ihe spreadsheet na-arụ", bullets: ["Mmefu ego na ụgwọ", "Ndepụta aha na usoro oge", "Ndepụta ngwaahịa"] },
            { title: "Kọlụm, ahịrị, cell", bullets: ["Kọlụm: mkpụrụ akwụkwọ A, B, C", "Ahịrị: nọmba 1, 2, 3", "Cell B2 = kọlụm B, ahịrị 2"] },
            { title: "Hazie ya", bullets: ["Aha isi n'ahịrị 1", "Otu ihe n'ahịrị ọ bụla", "Nọmba n'enweghị okwu: 12.50"] }
          ],
          tryIt: "Mee spreadsheet aha ya bụ \"Practice Budget\". Tinye Item na Cost n'ahịrị 1, wee dee ezi ụgwọ ise maka otu izu ma ọ bụ otu mmemme, dị ka nri, ụgwọ ụgbọ ala ma ọ bụ ihe ịchọ mma.",
          youCanNow: "ịhazi spreadsheet nwere aha isi na ahịrị ozi.",
          quickCheck: [
            { objective: "O4", q: "Na spreadsheet, gịnị bụ cell?", options: ["Peeji ozi niile", "Otu igbe, a na-akpọ ya site na kọlụm na ahịrị ya", "Formula na-agbakọ nọmba", "Aha faịlụ dị n'elu"], answer: 1, why: "Igbe ọ bụla bụ cell, dị ka B2 maka kọlụm B, ahịrị 2." },
            { objective: "O4", q: "Ị na-eme ndepụta aha. Ebee ka ị ga-ede aha isi \"Name\" na \"Phone\"?", options: ["N'ala spreadsheet ahụ", "N'aha faịlụ", "Ha niile n'otu cell", "N'ahịrị 1, otu aha isi na kọlụm ọ bụla"], answer: 3, why: "Aha isi na-aga n'ahịrị 1, na otu ihe n'ahịrị ọ bụla n'okpuru ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgbakọ ya site na formula",
          minutes: 5,
          goal: "Jiri SUM gbakọọ kọlụm ka ọ na-emelite onwe ya.",
          text: [
            "Formula na-agwa spreadsheet ka ọ gbakọọ ihe. Formula ọ bụla na-amalite site n'akara nha (=). Iji gbakọọ cell B2 ruo B6, pịa cell efu dị n'okpuru ha ma dee =SUM(B2:B6), wee pịa Enter.",
            "Akara colon (:) pụtara \"ruo\", ya mere B2:B6 bụ B2, B3, B4, B5 na B6. Ọ bụrụ na i gbanwee otu nọmba, ngụkọ ahụ na-agbanwe n'onwe ya. Nke ahụ bụ uru dị ukwuu karịa igwe mgbakọ (calculator).",
            "Formula ndị ọzọ dị mfe: =AVERAGE(B2:B6) na-enye nkezi (average), =B2*2 na-eme ka otu cell okpukpu abụọ. Ọ bụrụ na ị hụ njehie dị ka #NAME?, lelee nsụpe ya na akara nha ahụ."
          ],
          steps: ["Pịa cell efu dị n'okpuru nọmba gị.", "Dee =SUM(B2:B6) site n'iji cell nke gị.", "Pịa Enter.", "Gbanwee otu nọmba ma lee ka ngụkọ ahụ si emelite.", "Dee okwu Total na cell dị n'aka ekpe ya."],
          words: [["Formula", "ntụziaka na-amalite site na = ma na-agwa spreadsheet ka ọ gbakọọ ihe."], ["SUM", "formula na-agbakọ otu ìgwè cell."], ["Range", "otu ìgwè cell, e dere dị ka B2:B6 (B2 ruo B6)."]],
          slides: [
            { title: "Formula na-amalite site na =", bullets: ["=SUM(B2:B6) na-agbakọ B2 ruo B6", "Pịa Enter ka ị hụ azịza ya"] },
            { title: "Ọ na-emelite onwe ya", bullets: ["Gbanwee otu nọmba", "Ngụkọ ahụ na-agbanwekwa"] },
            { title: "Formula ndị ọzọ dị mfe", bullets: ["=AVERAGE(B2:B6) na-enye nkezi", "=B2*2 na-eme ka otu cell okpukpu abụọ", "#NAME? pụtara lelee nsụpe ya"] }
          ],
          tryIt: "Na Practice Budget gị, dee Total na A7 na =SUM(B2:B6) na B7. Wee gbanwee otu ụgwọ ma lelee na ngụkọ ahụ gbanwere.",
          youCanNow: "ịgbakọ kọlụm site na SUM ma mara na ngụkọ ahụ na-emelite mgbe nọmba gbanwere.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ uru dị ukwuu nke formula SUM karịa ịgbakọ na igwe mgbakọ?", options: ["Ngụkọ ahụ na-emelite onwe ya mgbe otu nọmba gbanwere", "Ọ na-eme ka nọmba gbaa ọchịchịrị", "Ọ na-eme spreadsheet ahụ PDF", "Ọ na-ekesa faịlụ ahụ na ndị ọzọ"], answer: 0, why: "Formula na-agbakọgharị mgbe ọ bụla nọmba dị na range ya gbanwere." },
            { objective: "O5", q: "Ụgwọ gị dị na B2 ruo B8. Gịnị ka ị ga-ede na B9 iji gbakọọ ha?", options: ["SUM B2 B8", "=B2+B8", "=SUM(B2:B8)", "=AVERAGE(B2:B8)"], answer: 2, why: "=SUM(B2:B8) na-agbakọ B2 ruo B8; =B2+B8 na-agbakọ naanị cell abụọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichekwa dị ka PDF na ibipụta",
          minutes: 4,
          goal: "Budata akwụkwọ ma ọ bụ spreadsheet dị ka PDF ma bipụta ya.",
          text: [
            "PDF bụ faịlụ na-adị otu ụdị na ekwentị na kọmputa ọ bụla, ndị mmadụ enweghịkwa ike ịgbanwe ya ngwa ngwa. Ọtụtụ arịrịọ ọrụ, ọfịs na ụlọ akwụkwọ na-arịọ PDF.",
            "Na Google Docs ma ọ bụ Sheets: mepee menu File, họrọ Download, wee PDF. Na Word ma ọ bụ Excel na weebụ: mepee menu File ma chọọ Save as ma ọ bụ Download, wee họrọ PDF. Faịlụ ahụ na-aga na folda Downloads gị.",
            "Iji bipụta, mepee menu File ma họrọ Print, ma ọ bụ pịa Ctrl+P (Command+P na Mac). Buru ụzọ lee nlele mbụ (preview) ka ọ ghara inwe ihe na-apụ n'akụkụ peeji. N'ọba akwụkwọ, jụọ ndị ọrụ otu e si akwụ ụgwọ mbipụta."
          ],
          steps: ["Mepee menu File.", "Họrọ Download (Google) ma ọ bụ Save as / Download (Microsoft).", "Họrọ PDF.", "Chọta faịlụ ahụ na folda Downloads gị.", "Iji bipụta: Ctrl+P (Command+P na Mac), lee nlele mbụ, wee bipụta."],
          words: [["PDF", "ụdị faịlụ na-adị otu ụdị ebe niile ma siri ike ịgbanwe."], ["Folda Downloads", "ebe na kọmputa ebe faịlụ ndị e budatara na-aga."]],
          slides: [
            { title: "Gịnị mere PDF?", bullets: ["Ọ na-adị otu ụdị ebe niile", "O siri ike ịgbanwe ya na mberede", "Ebe ọrụ na ọfịs na-arịọkarị ya"] },
            { title: "Mee PDF", bullets: ["Menu File, wee Download (Google)", "Menu File, wee Save as ma ọ bụ Download (Microsoft)", "Họrọ PDF; lee na Downloads"] },
            { title: "Bipụta ya", bullets: ["Ctrl+P (Command+P na Mac)", "Buru ụzọ lee nlele mbụ (preview)"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee akwụkwọ mgbasa ozi ma ọ bụ akwụkwọ ozi nwere otu peeji, nwere heading, ndepụta bullet na ahịrị ozi nkwukọrịta, tinyekwa spreadsheet nwere ụgwọ ise na ngụkọ SUM. Kesaa akwụkwọ ahụ dị ka view only, wee budata ha abụọ dị ka PDF.",
          youCanNow: "imecha akwụkwọ na spreadsheet, kesaa ha n'enweghị nsogbu ma chekwaa ha dị ka PDF.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka PDF e budatara na-agakarị?", options: ["N'igbe email gị", "N'ime ebe mkpofu (recycle bin)", "Naanị na cloud", "Na folda Downloads gị"], answer: 3, why: "Faịlụ e budatara na-aga na folda Downloads dị na ngwaọrụ gị." },
            { objective: "O6", q: "Ị na-achọ ibipụta akwụkwọ mgbasa ozi n'ọba akwụkwọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Bipụta mbipụta iri ozugbo", "Lee nlele mbụ (print preview) ka ọ ghara inwe ihe na-apụ n'akụkụ peeji", "Hichapụ faịlụ ahụ", "Gbanwee faịlụ ahụ ka ọ bụrụ spreadsheet"], answer: 1, why: "Nlele mbụ na-egosi ma e nwere ihe na-apụ n'akụkụ peeji tupu i kwụọ ụgwọ mbipụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Spreadsheet na imecha ọrụ",
        questions: [
          { objective: "O4", q: "Gịnị bụ cell C4?", options: ["Ahịrị C, kọlụm 4", "Formula", "Faịlụ nke anọ", "Kọlụm C, ahịrị 4"], answer: 3, why: "A na-akpọ cell site na mkpụrụ akwụkwọ kọlụm, wee nọmba ahịrị." },
          { objective: "O4", q: "Kedu otu ị ga-esi dee ụgwọ dollar iri na abụọ na cent iri ise?", options: ["\"twelve fifty\"", "\"12.50 dollars\"", "12.50", "\"about 12\""], answer: 2, why: "Nọmba n'enweghị okwu na-ekwe ka spreadsheet gbakọọ ihe." },
          { objective: "O5", q: "Kedu formula na-agbakọ cell B2 ruo B6?", options: ["add(B2-B6)", "SUM B2 B6", "=SUM(B2:B6)", "B2+B6"], answer: 2, why: "Formula na-amalite site na =, B2:B6 pụtakwara B2 ruo B6." },
          { objective: "O5", q: "I gbanwere otu ụgwọ na mmefu ego gị. Gịnị na-eme ngụkọ SUM ahụ?", options: ["Ọ dịghị ihe", "Ọ na-aghọ njehie", "Ị ga-edegharị ya", "Ọ na-emelite onwe ya"], answer: 3, why: "Formula na-agbakọgharị mgbe nọmba gbanwere." },
          { objective: "O6", q: "Ọfịs rịọrọ akwụkwọ ozi gị dị ka faịlụ na-adị otu ụdị ebe niile. Ị na-ezipu:", options: ["Foto ihuenyo ekwentị gị (screenshot)", "Foto ihuenyo", "Njikọ nye onye ọ bụla", "PDF"], answer: 3, why: "PDF na-adị otu ụdị na ngwaọrụ ọ bụla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Microsoft 365 na Google Docs",
    questions: [
      { objective: "O1", q: "Gịnị ka ị chọrọ iji Google Docs n'efu?", options: ["Akaụntụ Google", "Ikike a na-akwụ ụgwọ (license)", "Igwe mbipụta", "Akaụntụ Microsoft"], answer: 0, why: "Google Docs bụ n'efu site n'akaụntụ Google." },
      { objective: "O1", q: "Ebee ka Word na weebụ na-echekwa faịlụ gị?", options: ["Google Drive", "Floppy disk", "OneDrive", "Ọ dịghị ebe"], answer: 2, why: "Microsoft na-echekwa na OneDrive." },
      { objective: "O1", q: "Cloud pụtara:", options: ["Ihu igwe", "Nje kọmputa (virus)", "Ụdị igwe mbipụta", "Ebe nchekwa n'ịntanetị ị nwere ike iru site na ngwaọrụ ọ bụla"], answer: 3, why: "Ebe nchekwa cloud na-ekwe ka ị meghee faịlụ ebe ọ bụla mgbe ị banyere." },
      { objective: "O1", q: "Ebee ka ị na-agbanwe aha Google Doc?", options: ["Pịa aha dị n'elu n'aka ekpe", "Malitegharịa kọmputa", "Buru ụzọ bipụta ya", "Zitere onwe gị ya n'email"], answer: 0, why: "Aha faịlụ dị n'elu n'aka ekpe." },
      { objective: "O2", q: "Iji gbanwee otu okwu si dị, ị ga-ebu ụzọ:", options: ["Kesaa faịlụ ahụ", "Budata PDF", "Họrọ okwu ahụ", "Mechie taabụ ahụ"], answer: 2, why: "Buru ụzọ họrọ, wee hazie." },
      { objective: "O2", q: "Kedu ụzọ kacha mma isi mee aha isi?", options: ["Dee ya na mkpụrụ akwụkwọ ukwu niile na oghere", "Tinye ya n'ala", "Mee ya ka ọ dị obere nke ukwuu", "Họrọ ụdị Heading 1"], answer: 3, why: "Ụdị Heading na-adị ọcha ma na-enyere screen reader aka." },
      { objective: "O2", q: "I mere mperi n'ịhazi ederede. Gịnị na-ewepụ ya?", options: ["Ctrl+P", "Ctrl+Z (Command+Z na Mac)", "Imechi browser", "Bọtịnụ Share"], answer: 1, why: "Ctrl+Z ma ọ bụ Command+Z na-ewepụ mgbanwe ikpeazụ." },
      { objective: "O3", q: "Ebee ka bọtịnụ Share dị n'app abụọ ahụ?", options: ["N'elu n'aka nri", "N'ala peeji", "Na nlele mbụ mbipụta", "N'ime cell spreadsheet"], answer: 0, why: "App abụọ ahụ na-etinye Share n'elu n'aka nri." },
      { objective: "O3", q: "Onye ọrụ ibe gị kwesịrị ịtụ aro mgbanwe mana ọ gaghị agbanwe okwu gị. Nye ya:", options: ["Edit", "Comment", "Owner", "Enweghị ikike"], answer: 1, why: "Ikike Comment na-ekwe ka ọ tụọ aro n'agbanweghị ihe." },
      { objective: "O3", q: "Gịnị mere ị ga-eji kpachara anya na \"Anyone with the link\"?", options: ["Ọ na-ehichapụ faịlụ ahụ", "Onye ọ bụla nwetara njikọ ahụ nwere ike imeghe ya", "Ọ na-efu ego", "Ọ na-eme faịlụ ahụ PDF"], answer: 1, why: "Njikọ e zigharịrị nwere ike iru ndị ọbịa." },
      { objective: "O3", q: "Nkọwa (comment) bụ:", options: ["Mgbanwe n'ederede gị", "Ndetu n'akụkụ nke na-adịghị agbanwe ederede ahụ", "PDF", "Formula"], answer: 1, why: "Nkọwa na-enye echiche n'agbanweghị ihe." },
      { objective: "O4", q: "Kedu ezigbo ihe e ji spreadsheet eme?", options: ["Mmefu ego ezinụlọ", "Akwụkwọ ozi ịhụnanya", "Akwụkwọ foto", "Oku ekwentị"], answer: 0, why: "Spreadsheet bụ maka ndepụta na nọmba." },
      { objective: "O4", q: "A na-akpọ kọlụm dị na spreadsheet site na:", options: ["Nọmba", "Mkpụrụ akwụkwọ", "Agba", "Emoji"], answer: 1, why: "Kọlụm na-eji mkpụrụ akwụkwọ; ahịrị na-eji nọmba." },
      { objective: "O4", q: "Ebee ka aha isi dị ka \"Item\" na \"Cost\" na-agakarị?", options: ["Ahịrị 1", "Ahịrị ikpeazụ", "N'ime nkọwa", "N'aha faịlụ"], answer: 0, why: "Aha isi na-aga n'ahịrị kacha n'elu." },
      { objective: "O5", q: "Formula ọ bụla na-amalite site na:", options: ["Akara dollar", "Akara nha (=)", "Okwu Total", "Oghere"], answer: 1, why: "Akara = na-agwa spreadsheet na ọ bụ formula." },
      { objective: "O5", q: "Na =SUM(B2:B6), colon pụtara:", options: ["Kee", "Ruo", "Wepụ", "Kwụsị"], answer: 1, why: "B2:B6 pụtara B2 ruo B6." },
      { objective: "O5", q: "Ị hụrụ #NAME? n'otu cell. Gịnị ka ị ga-elele?", options: ["Igwe mbipụta", "Nsụpe formula ahụ", "Okwuntughe gị", "Agba faịlụ ahụ"], answer: 1, why: "#NAME? na-apụtakarị na e sụpere formula ahụ ezighi ezi." },
      { objective: "O5", q: "Kedu formula na-enye nkezi nke B2 ruo B6?", options: ["=AVERAGE(B2:B6)", "=SUM(B2)", "AVG B2-B6", "=B2"], answer: 0, why: "AVERAGE na-agbakọ nkezi nke range." },
      { objective: "O6", q: "Na Google Docs, kedu otu ị na-esi eme PDF?", options: ["Menu File, Download, PDF", "Share, Anyone with the link", "Pịa Ctrl+Z", "Pịa n'aka nri ma họrọ Comment"], answer: 0, why: "File, Download, PDF na-echekwa PDF." },
      { objective: "O6", q: "Tupu ibipụta, ị kwesịrị:", options: ["Ilele nlele mbụ mbipụta (print preview)", "Ihichapụ faịlụ ahụ", "Ikesa ya na onye ọ bụla", "Ịgbanwe font niile"], answer: 0, why: "Nlele mbụ na-egosi ma e nwere ihe na-apụ n'akụkụ peeji." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 5, 9, 13, 14, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Akwụkwọ dị ọcha nwere otu peeji", objective: "O2", notYet: "Aha isi, ndepụta bullet ma ọ bụ ahịrị ozi nkwukọrịta adịghị.", meets: "Aha isi Heading 1 gbara ọchịchịrị, ndepụta bullet na ahịrị ozi nkwukọrịta, ha niile n'otu peeji.", exceeds: "Ọ na-ejikwa otu font dị mfe, paragraf dị mkpụmkpụ na aha faịlụ doro anya." },
      { name: "Ikesa n'enweghị nsogbu", objective: "O3", notYet: "E kesaghị akwụkwọ ahụ, ma ọ bụ e kesara ya site n'ikike edit ma ọ bụ \"Anyone with the link\".", meets: "E kesara ya na otu onye dị ka view only.", exceeds: "Ọ na-edekwa nkọwa na-arịọ echiche ma were Resolve mechie ya mgbe a zara ya." },
      { name: "Spreadsheet", objective: "O4", notYet: "Aha isi adịghị ma ọ bụ ụgwọ e depụtara erughị ise.", meets: "Aha isi Item na Cost n'ahịrị 1 na opekata mpe ụgwọ ise, otu n'ahịrị ọ bụla, e dere dị ka nọmba.", exceeds: "Ahịrị 1 gbara ọchịchịrị, faịlụ ahụ nwekwara aha doro anya." },
      { name: "Ngụkọ SUM", objective: "O5", notYet: "E jiri aka dee ngụkọ ahụ ma ọ bụ formula ahụ na-enye njehie.", meets: "Formula SUM na-enye ngụkọ ziri ezi ma na-emelite mgbe ụgwọ gbanwere.", exceeds: "Ọ na-edekwa aha n'akụkụ ngụkọ ahụ ma tinye formula AVERAGE." },
      { name: "PDF", objective: "O6", notYet: "E chekwaghị otu ma ọ bụ faịlụ abụọ ahụ dị ka PDF.", meets: "E budatara ma akwụkwọ ahụ ma spreadsheet ahụ dị ka PDF, a pụkwara ịchọta ha na Downloads.", exceeds: "Ọ na-elelekwa nlele mbụ mbipụta ka ọ ghara inwe ihe na-apụ n'akụkụ peeji." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha mere ezi akwụkwọ, mmefu ego ma ọ bụ ndepụta aha n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe zipuru PDF maka arịrịọ ọrụ, ụlọ akwụkwọ ma ọ bụ fọm ọfịs n'enweghị enyemaka",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka Email na Nkwukọrịta n'Ịntanetị ma ọ bụ ihe ọmụmụ gbasara ịchọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ tablet nwere ịntanetị na web browser (ekwentị na-arụ ọrụ mana ọ na-esi ike karị)",
      "Akaụntụ Google ma ọ bụ akaụntụ Microsoft n'efu",
      "Ezi ọrụ a ga-eji mee omume, dị ka akwụkwọ mgbasa ozi, akwụkwọ ozi ma ọ bụ mmefu ego izu",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ahụ, lelee na onye ọ bụla na-amụ ihe nwere ike ịbanye n'akaụntụ Google ma ọ bụ Microsoft; nyere ha aka imepe akaụntụ tupu oge ka e were oge klaasị rụọ ọrụ n'akwụkwọ.",
      "Hapụ onye ọ bụla na-amụ ihe ka ọ họrọ Google ma ọ bụ Microsoft ma nọgide na ya n'ihe ọmụmụ ahụ niile; kekọta ndị na-eji otu nhọrọ ahụ abụọ abụọ.",
      "Maka omume ikesa, mee ka ndị na-amụ ihe kesaa na onye ibe ha nọ n'ime ụlọ ahụ dị ka view only, ọ bụghị mgbe ọ bụla site na \"Anyone with the link\", ma ghara iji ezi adreesị ma ọ bụ nọmba ID.",
      "N'ụlọ kọmputa, chetara ndị na-amụ ihe ka ha pụọ (sign out) na njedebe ka onye ọzọ ghara imeghe faịlụ ha.",
      "Ọ bụrụ na mbipụta na-efu ego n'ebe unu na-ezukọ, gosi nlele mbụ mbipụta na ibudata PDF, ma bipụta naanị mgbe ọ dị mkpa."
    ]
  }
};

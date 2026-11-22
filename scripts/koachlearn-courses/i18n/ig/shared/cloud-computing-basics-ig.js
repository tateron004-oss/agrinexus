"use strict";

// Koach Learn course (Igbo translation of shared/cloud-computing-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "cloud-computing-basics-ig",
  lang: "ig",
  translationOf: "cloud-computing-basics",
  category: "Youth",
  name: "Mmalite Cloud Computing",
  skills: "Ịkọwa ihe cloud bụ, Ịmata ọdịiche dị n'etiti SaaS, PaaS na IaaS, Ichekwa na ịhazi faịlụ na cloud, Ikesa faịlụ n'enweghị nsogbu, Ichebe akaụntụ cloud",
  outcome: "ịkọwa ihe cloud computing bụ na ụdị ọrụ ya atọ bụ isi, wee jiri ọrụ nchekwa cloud n'efu chekwaa, hazie ma kesaa faịlụ n'enweghị nsogbu, ebe two-step verification na-echebe akaụntụ gị.",
  about: [
    "Oge ọ bụla ị na-ekiri vidiyo n'ịntanetị, chekwaa foto na Google Photos ma ọ bụ iCloud, ma ọ bụ soro onye klas gị rụọ ọrụ na Google Doc, ị na-eji cloud computing. Azụmahịa na-eji ya arụ weebụsaịtị, app na AI, a na-achọkwa nka cloud n'ọtụtụ ọrụ.",
    "Ihe ọmụmụ a na-akọwa ihe cloud bụ n'okwu dị mfe, ụdị ọrụ cloud bụ isi na ụlọ ọrụ ndị kachasị ibu na-enye ya. Mgbe ahụ, ị ga-eji ọrụ nchekwa cloud n'efu chekwaa, hazie ma kesaa faịlụ n'enweghị nsogbu, otu ndị otu n'ụlọ akwụkwọ na n'ọrụ si eme ya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọ bụrụ na ị chọrọ ịga n'ihu, ihe ọmụmụ \"Ntọala Microsoft Azure\" na-ewuli elu n'ihe ọmụmụ a."
  ],
  finalTask: "Na Google Drive ma ọ bụ Microsoft OneDrive: mepụta folda a na-akpọ \"Career Documents\", tinye ma ọ bụ mepụta faịlụ abụọ n'ime ya (dịka ọmụmaatụ résumé na ndepụta ndị ga-agba akaebe maka gị), kesaa otu faịlụ na enyi ma ọ bụ onye ezinụlọ ka ọ naanị lee ya (view-only), lelee ndị nwere ike imeghe ya, wee wepụ ikike ha. Hụ na two-step verification gbanyere na akaụntụ ahụ. N'ikpeazụ, dee ahịrịokwu atọ na-akọwa cloud, ma kpọọ aha otu ọmụmaatụ SaaS, otu PaaS na otu IaaS.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa (ụmụaka nọ n'afọ iri na ụma na ndị okenye na-eto eto) nọ n'ụlọ akwụkwọ, na mmemme ọzụzụ ma ọ bụ n'ọrụ mbụ ha. Ha na-eji app cloud kwa ụbọchị mana ha echebaghị echiche ọtụtụ banyere otu cloud si arụ ọrụ ma ọ bụ otu esi ahazi faịlụ na ikesa ha n'ụzọ e chere echiche.",
    startingPoint: "Ha nwere ike iji smartphone, kiri vidiyo n'ịntanetị, jiri email na app mgbasa ozi, ụfọdụ nwekwara akaụntụ Google ma ọ bụ Microsoft. Ole na ole ahazila folda, tọọ ikike ikesa ma ọ bụ gbanye two-step verification.",
    gap: "Ụlọ akwụkwọ, internship na ọrụ na-atụ anya ka ndị mmadụ chekwaa, hazie ma kesaa faịlụ na cloud ma mara okwu cloud ndị bụ isi a na-eji n'ọrụ teknụzụ. Na-enweghị nka ndị a, ndị na-amụ ihe na-atụfu ọrụ ha, na-ekesa faịlụ nzuzo karịa ka o kwesịrị, ma na-ahapụ akaụntụ ha ghere oghe maka phishing na izu okwuntughe.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 7 ruo 8)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ a na-ekerịta; ngwaọrụ nke abụọ abụghị iwu",
      "Oge: nkuzi nkeji 5 nke dabara n'etiti ụlọ akwụkwọ ma ọ bụ ọrụ",
      "Nzuzo: enweghị ezi nọmba Social Security, ozi ụlọ akụ ma ọ bụ okwuntughe na faịlụ omume",
      "Ụfọdụ ndị na-amụ ihe na-erubeghị afọ 18 nwere ike ịchọ akaụntụ nne na nna ma ọ bụ nke ụlọ akwụkwọ iji jiri ọrụ Google ma ọ bụ Microsoft"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'akaụntụ email nwere ike ibu ụzọ soro okenye ma ọ bụ onye enyemaka mmemme mepụta akaụntụ Google ma ọ bụ Microsoft n'efu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta app kwa ụbọchị na ọmụmaatụ obere azụmahịa", action: "ịkọwa ihe cloud computing bụ ma kpọọ aha uru ya na ihe egwu ya bụ isi", standard: "n'okwu nke gị, nwere opekata mpe uru abụọ na otu ihe egwu" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ cloud isii", action: "ikewa nke ọ bụla n'ime SaaS, PaaS ma ọ bụ IaaS ma kwuo ọrụ gị n'ime nke ọ bụla", standard: "na-enweta opekata mpe 5 n'ime 6 ziri ezi" },
    { id: "O3", condition: "Site n'iji Google Drive ma ọ bụ OneDrive", action: "imepụta folda, tinye faịlụ abụọ ma nye ha aha doro anya", standard: "n'enweghị onye nyere gị aka, nke mere na onye ọzọ ga-achọta faịlụ ọ bụla site n'aha ya" },
    { id: "O4", condition: "Mgbe e nyere gị faịlụ na onye ị ga-ekesa ya", action: "ikesa faịlụ ahụ n'ikike kacha nta dị mkpa, lelee ndị nwere ike imeghe ya ma wepụ ikike ahụ", standard: "n'ahapụghị faịlụ ọ bụla ghere oghe nye ndị na-achọghị ya" },
    { id: "O5", condition: "N'akaụntụ Google ma ọ bụ Microsoft nke gị", action: "ịgbanye two-step verification, lelee ngwaọrụ ndị banyere ma hụ ozi phishing", standard: "tupu ọrụ ikpeazụ agwụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ihe cloud bụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cloud n'okwu dị mfe",
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị ihe cloud computing bụ.",
          text: [
            "\"Cloud\" pụtara kọmputa dị n'ụlọ buru ibu a na-akpọ data center, nke ị na-eji site n'ịntanetị. Kama idebe ihe niile n'ekwentị ma ọ bụ laptọọpụ gị, faịlụ gị, app gị na ike kọmputa na-adị na kọmputa ndị ahụ, ị na-esikwa na ngwaọrụ ọ bụla eru ha.",
            "Chee banyere ọkụ eletrik. Ị naghị ewu ụlọ ọrụ na-emepụta ọkụ n'ụlọ gị; ị na-etinye plọg ma kwụọ ụgwọ maka ihe i ji. Cloud computing na-arụ ọrụ otu ahụ: ụlọ ọrụ nwe kọmputa ndị ahụ, ndị mmadụ na azụmahịa na-ejikwa ihe ha chọrọ, mgbe ha chọrọ ya.",
            "Ọmụmaatụ kwa ụbọchị: email Gmail na Outlook; Google Drive, OneDrive, iCloud na Dropbox maka faịlụ; Netflix na Spotify maka ikiri na ige egwu n'ịntanetị; na ngwa enyemaka AI dị ka ChatGPT ma ọ bụ Copilot, ndị na-arụ ọrụ na kọmputa cloud."
          ],
          words: [["Cloud computing", "iji kọmputa, nchekwa na sọftụwia site n'ịntanetị kama na ngwaọrụ nke gị."], ["Data center", "ụlọ buru ibu jupụtara na kọmputa na-arụ ọrụ cloud."], ["Server", "kọmputa nwere ike nke ukwuu na-enye kọmputa ndị ọzọ ọrụ site na netwọk."]],
          slides: [
            { title: "Ihe cloud bụ", bullets: ["Kọmputa dị na data center", "Ị na-eji ha site n'ịntanetị", "Site na ngwaọrụ ọ bụla"] },
            { title: "Dị ka ọkụ eletrik", bullets: ["Ị naghị ewu ụlọ ọrụ ọkụ", "Ị na-etinye plọg ma kwụọ ụgwọ maka ihe i ji"] },
            { title: "Ị na-eji ya ugbu a", bullets: ["Gmail, Outlook", "Google Drive, OneDrive, iCloud, Dropbox", "Netflix, Spotify, ngwa enyemaka AI"] }
          ],
          tryIt: "Dee app ma ọ bụ weebụsaịtị ise i jiri n'izu a. N'akụkụ nke ọ bụla, dee \"cloud\" ma ọ bụrụ na ihe gị dị ma ọ bụ na-arụ ọrụ na kọmputa ụlọ ọrụ ahụ, ọ bụghị naanị na ngwaọrụ gị.",
          youCanNow: "ịkọwa cloud computing n'okwu nke gị ma gosi ọrụ cloud ị na-eji ugbu a.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka faịlụ gị na-adị mgbe ị chekwara ha na cloud?", options: ["Na kọmputa dị na data center nke ị na-eru site n'ịntanetị", "Naanị n'ime kaadị ebe nchekwa ekwentị gị", "Na diski ị na-ezigara ụlọ ọrụ ahụ n'ozi", "N'ozi ederede dị n'ekwentị gị"], answer: 0, why: "Cloud bụ kọmputa dị na data center nke ị na-eji site n'ịntanetị na ngwaọrụ ọ bụla." },
            { objective: "O1", q: "Enyi gị jụrụ ihe mere cloud ji dị ka ọkụ eletrik. Gịnị ka ị ga-ekwu?", options: ["Ha abụọ na-akwụsị ịrụ ọrụ n'abalị", "Ha abụọ chọrọ waya ruo n'ụlọ gị", "Ị na-eji ihe ị chọrọ n'enweghị kọmputa ndị ahụ, dị ka ọkụ n'enweghị ụlọ ọrụ ọkụ", "Ha abụọ bụ n'efu maka onye ọ bụla"], answer: 2, why: "Nkuzi ahụ tụnyere cloud na itinye plọg na ịkwụ ụgwọ ọkụ n'ewughị ụlọ ọrụ ọkụ." }
          ]
        },
        {
          objectives: ["O1"],
          title: "Ihe mere ndị mmadụ na azụmahịa ji eji cloud",
          minutes: 5,
          goal: "Kpọọ aha uru na ihe egwu cloud bụ isi.",
          text: [
            "Uru: ị nwere ike iru faịlụ gị site na ngwaọrụ ọ bụla; ekwentị furu efu apụtaghị na foto furu efu; ndị otu nwere ike ịrụ ọrụ n'otu akwụkwọ n'otu oge; azụmahịa nwere ike ịmalite obere wee too, na-akwụ ụgwọ maka kọmputa ọzọ naanị mgbe ha chọrọ ya, kama ịzụta server dị oke ọnụ.",
            "Ihe egwu: ị chọrọ njikọ ịntanetị; ọ bụrụ na mmadụ zuru okwuntughe gị, ọ nwere ike iru faịlụ gị site n'ebe ọ bụla; atụmatụ n'efu nwere oke nchekwa; ụlọ ọrụ na-ejide data gị, ya mere ị kwesịrị ịmara ntọala nzuzo ya.",
            "Ụlọ ọrụ cloud buru ibu maka azụmahịa gụnyere Amazon Web Services (AWS), Microsoft Azure na Google Cloud. Maka ndị mmadụ kwa ụbọchị, Google, Microsoft, Apple na Dropbox na-enye nchekwa cloud n'efu, na nke ka ukwuu ị ga-akwụ ụgwọ. Lelee peeji ụlọ ọrụ ọ bụla n'onwe ya maka oke nchekwa n'efu nke ugbu a."
          ],
          words: [["Scalability", "ike ime ka ike kọmputa too ma ọ bụ belata dị ka mkpa si dị."], ["Provider", "ụlọ ọrụ na-arụ ọrụ cloud ahụ."], ["Oke nchekwa (storage limit)", "ọnụ ọgụgụ data kacha ukwuu atụmatụ gị na-ekwe ka i debe."]],
          slides: [
            { title: "Uru", bullets: ["Faịlụ gị na ngwaọrụ ọ bụla", "Ekwentị furu efu apụtaghị foto furu efu", "Ndị otu na-arụ ọrụ n'otu faịlụ", "Azụmahịa na-eto n'azụtaghị server"] },
            { title: "Ihe egwu", bullets: ["Ọ chọrọ ịntanetị", "Okwuntughe e zuru ezu na-emeghe ihe niile", "Atụmatụ n'efu nwere oke"] },
            { title: "Ụlọ ọrụ ndị kachasị ibu", bullets: ["Azụmahịa: AWS, Microsoft Azure, Google Cloud", "Kwa ụbọchị: Google, Microsoft, Apple, Dropbox"] }
          ],
          tryIt: "Chee banyere obere azụmahịa ị maara, dị ka ụlọ ịkpụ isi, ụgbọala na-ere nri ma ọ bụ ọfịs ụka. Dee ụzọ abụọ cloud nwere ike isi nyere ya aka na otu ihe egwu o kwesịrị ịkwadebe maka ya.",
          youCanNow: "ịkpọ aha uru na ihe egwu cloud bụ isi na ụlọ ọrụ cloud ndị kachasị ibu.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ uru idebe foto gị na cloud?", options: ["Ị dịghị mkpa ịntanetị mgbe ọ bụla", "Ekwentị furu efu apụtaghị foto furu efu", "Atụmatụ n'efu enweghị oke nchekwa", "Ọ dịghị ụlọ ọrụ na-ejide data gị"], answer: 1, why: "Ihe e debere na cloud na-anọ n'enweghị nsogbu na kọmputa ụlọ ọrụ ahụ ọbụlagodi mgbe ekwentị furu efu." },
            { objective: "O1", q: "Onye nwe ụgbọala na-ere nri chọrọ ibuga ndekọ ya na cloud. Kedu ihe egwu o kwesịrị ibu ụzọ kwadebe maka ya?", options: ["Cloud na-eme ka faịlụ buo ibu", "Cloud na-arụ ọrụ naanị n'otu ngwaọrụ", "A pụghị ikesa faịlụ cloud na ndị ọrụ", "Onye nwere okwuntughe e zuru ezu nwere ike iru faịlụ ahụ site n'ebe ọ bụla"], answer: 3, why: "Okwuntughe e zuru ezu na-emeghe faịlụ cloud site n'ebe ọ bụla, ya mere nchekwa akaụntụ siri ike dị mkpa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "SaaS, PaaS na IaaS: ụdị ọrụ atọ ahụ",
          minutes: 5,
          goal: "Kewaa ọrụ cloud n'ime SaaS, PaaS na IaaS.",
          text: [
            "Ọrụ cloud nwere ụdị atọ bụ isi, dabere n'otu ihe ole ụlọ ọrụ ahụ na-emere gị. Jiri ọmụmaatụ pizza: ị nwere ike ịzụta pizza siri esi, gbazite kichin nwere ihe e ji esi nri, ma ọ bụ gbazite naanị oven.",
            "SaaS (Software as a Service): sọftụwia emechara emecha nke ị na-eji na browser ma ọ bụ app, dị ka Gmail, Google Docs, Microsoft 365 ma ọ bụ Zoom. Ụlọ ọrụ ahụ na-arụ ihe niile. PaaS (Platform as a Service): ikpo okwu dị njikere ebe ndị mmepụta sọftụwia (developers) na-ewu ma na-arụ app nke ha n'elekọtaghị server, dị ka Google App Engine ma ọ bụ Azure App Service. IaaS (Infrastructure as a Service): kọmputa mebere (virtual), nchekwa na netwọk ị na-ahazi n'onwe gị, dị ka Amazon EC2 ma ọ bụ Azure Virtual Machines.",
            "N'ụdị ọ bụla, nchekwa bụ ọrụ e kerịtara. Ụlọ ọrụ ahụ na-echebe data center ya; gị na-ahụ maka okwuntughe gị mgbe niile, onye ị na-ekesa ihe na ya, na ihe ị na-etinye."
          ],
          steps: ["Jụọ: ọ̀ bụ naanị sọftụwia emechara emecha ka m na-eji? Nke ahụ bụ SaaS.", "Ọ̀ bụ app nke m ka m na-ewu n'ikpo okwu dị njikere? Nke ahụ bụ PaaS.", "Ọ̀ bụ m na-ahazi kọmputa mebere nke m? Nke ahụ bụ IaaS.", "N'ime ha atọ, chebe akaụntụ na data nke gị."],
          words: [["SaaS", "Software as a Service: sọftụwia emechara emecha nke ị na-eji site n'ịntanetị."], ["PaaS", "Platform as a Service: ikpo okwu dị njikere maka iwu na ịrụ app nke gị."], ["IaaS", "Infrastructure as a Service: kọmputa mebere, nchekwa na netwọk ị na-agbazite ma na-elekọta."], ["Ọrụ e kerịtara (shared responsibility)", "ụlọ ọrụ ahụ na-echebe cloud; gị na-echebe akaụntụ na data gị n'ime ya."]],
          slides: [
            { title: "Ụdị ọrụ atọ", bullets: ["SaaS: pizza siri esi", "PaaS: kichin a gbaziri agbazi nwere ihe e ji esi nri", "IaaS: naanị oven"] },
            { title: "Ọmụmaatụ", bullets: ["SaaS: Gmail, Google Docs, Microsoft 365, Zoom", "PaaS: Google App Engine, Azure App Service", "IaaS: Amazon EC2, Azure Virtual Machines"] },
            { title: "Ọrụ e kerịtara", bullets: ["Ụlọ ọrụ: na-echebe data center", "Gị: okwuntughe gị, ikesa na ihe ị na-etinye"] }
          ],
          tryIt: "Kewaa ndị a n'ime SaaS, PaaS ma ọ bụ IaaS: Gmail, Azure Virtual Machines, Google App Engine, Zoom, Amazon EC2, Microsoft 365. Tụnyere azịza gị na ọmụmaatụ dị na nkuzi a.",
          youCanNow: "ikewa ọrụ cloud n'ime SaaS, PaaS na IaaS ma kọwaa ọrụ e kerịtara.",
          quickCheck: [
            { objective: "O2", q: "Google App Engine na-ekwe ka ndị mmepụta sọftụwia rụọ app nke ha n'elekọtaghị server. Kedu ụdị ọ bụ?", options: ["SaaS", "IaaS", "PaaS", "Ọ bụghị nke ọ bụla n'ime ụdị atọ ahụ"], answer: 2, why: "Ikpo okwu dị njikere ebe ndị mmepụta sọftụwia na-ewu ma na-arụ app bụ Platform as a Service." },
            { objective: "O2", q: "Ụlọ akwụkwọ gị na-eji Microsoft 365, nke bụ SaaS. Gịnị ka bụ ọrụ gị?", options: ["Ichebe okwuntughe gị na ịhọrọ onye ị ga-ekesa ihe na ya", "Ichekwa ụlọ data center", "Ịrụzi server ụlọ ọrụ ahụ", "Ọ dịghị ihe; SaaS pụtara na ụlọ ọrụ ahụ na-eme ihe niile"], answer: 0, why: "Nchekwa bụ ọrụ e kerịtara: ụlọ ọrụ ahụ na-arụ ọrụ ahụ, mana okwuntughe gị na ikesa gị bụ nke gị mgbe niile." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ihe cloud bụ",
        questions: [
          { objective: "O1", q: "Gịnị ka \"cloud\" pụtara?", options: ["Ihu igwe", "Kọmputa dị na data center nke ị na-eji site n'ịntanetị", "Ụdị ihe mkpuchi ekwentị", "Naanị hard drive laptọọpụ gị"], answer: 1, why: "Ọrụ cloud na-arụ ọrụ na kọmputa dị anya nke a na-eru site n'ịntanetị." },
          { objective: "O1", q: "Kedu nke bụ ihe egwu cloud?", options: ["Ị nwere ike iru faịlụ site na ngwaọrụ ọ bụla", "Ndị otu nwere ike ikesa akwụkwọ", "Okwuntughe e zuru ezu nwere ike imeghe faịlụ gị site n'ebe ọ bụla", "Ekwentị furu efu apụtaghị foto furu efu"], answer: 2, why: "Nchekwa akaụntụ dị mkpa n'ihi na a pụrụ iru cloud site n'ebe ọ bụla." },
          { objective: "O2", q: "Gmail na Zoom bụ ọmụmaatụ nke:", options: ["IaaS", "PaaS", "Data center", "SaaS"], answer: 3, why: "Ha bụ sọftụwia emechara emecha a na-eji site n'ịntanetị." },
          { objective: "O2", q: "Otu ụlọ ọrụ gbaziri kọmputa mebere ma hazie ha n'onwe ya. Nke a bụ:", options: ["IaaS", "SaaS", "Browser", "Okwuntughe"], answer: 0, why: "Ịgbazite kọmputa mebere ị na-elekọta bụ Infrastructure as a Service." },
          { objective: "O2", q: "N'okpuru ọrụ e kerịtara, onye na-echebe okwuntughe gị?", options: ["Onye nche data center", "Gị", "Ịntanetị", "Ọ dịghị onye"], answer: 1, why: "Akaụntụ gị na ihe ị na-ekesa bụ ọrụ gị mgbe niile." }
        ]
      }
    },
    {
      name: "Isi 2: Iji cloud n'onwe gị",
      lessons: [
        {
          objectives: ["O3"],
          title: "Ichekwa na ịhazi faịlụ na nchekwa cloud",
          minutes: 5,
          goal: "Tinye, mepụta ma hazie faịlụ na Google Drive ma ọ bụ OneDrive.",
          text: [
            "Google Drive na-abịa na akaụntụ Google n'efu, OneDrive na-abịakwa na akaụntụ Microsoft n'efu. Ha abụọ na-arụ ọrụ na web browser (drive.google.com ma ọ bụ onedrive.com) na dị ka app ekwentị site n'ezi ụlọ ahịa app.",
            "Jiri bọtịnụ New mepụta folda ma ọ bụ akwụkwọ, ma ọ bụ Upload tinye faịlụ site na ngwaọrụ gị. Nye faịlụ aha doro anya, dị ka \"Resume - Jordan Lee - 2026\", ka ị chọta ha ma emechaa. Tinye faịlụ ndị yitere onwe ha n'ime folda.",
            "Sync na-eme ka faịlụ dị otu n'ngwaọrụ ọ bụla: gbanwee ya na laptọọpụ gị, ụdị ọhụrụ ahụ ga-apụta n'ekwentị gị. Ọtụtụ ọrụ cloud na-edebekwa ụdị ochie, ka ị laghachi azụ ma ọ bụrụ na i mehiere."
          ],
          steps: ["Banye na drive.google.com ma ọ bụ onedrive.com (ma ọ bụ meghee app ahụ).", "Pịa New ma họrọ Folder; nye ya aha doro anya.", "Meghee folda ahụ; pịa New iji mepụta akwụkwọ, ma ọ bụ Upload iji tinye faịlụ.", "Gbanwee aha faịlụ ka ha nwee aha doro anya.", "Meghee otu faịlụ ahụ na ngwaọrụ ọzọ ka ị hụ ka ọ na-async."],
          words: [["Upload", "idetuo faịlụ site na ngwaọrụ gị gaa na cloud."], ["Sync", "ime ka faịlụ dị otu na ngwaọrụ gị niile n'onwe ya."], ["Version history", "ụdị faịlụ ochie e chekwara nke ị nwere ike ịlaghachi na ya."]],
          slides: [
            { title: "Nchekwa cloud n'efu", bullets: ["Google Drive na akaụntụ Google", "OneDrive na akaụntụ Microsoft", "Browser ma ọ bụ ezi app"] },
            { title: "Hazie", bullets: ["New: folda ma ọ bụ akwụkwọ", "Upload: tinye faịlụ", "Aha doro anya na folda"] },
            { title: "Sync na ụdị ochie", bullets: ["Otu faịlụ ahụ n'ngwaọrụ ọ bụla", "Laghachi n'ụdị ochie ma ọ dị mkpa"] }
          ],
          tryIt: "Na Google Drive ma ọ bụ OneDrive, mepụta folda a na-akpọ \"Career Documents\". Mepụta ma ọ bụ tinye faịlụ abụọ n'ime ya ma nye ha aha doro anya. Wee meghee folda ahụ na ngwaọrụ nke abụọ ma ọ bụrụ na i nwere otu.",
          youCanNow: "itinye, imepụta, ịkpọ aha na ịhazi faịlụ na nchekwa cloud ma mara na ha na-async n'ngwaọrụ niile.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka \"sync\" na-emere faịlụ dị na OneDrive?", options: ["Ọ na-ehichapụ nke ochie kwa abalị", "Ọ na-edebe otu ụdị faịlụ ahụ na ngwaọrụ gị niile", "Ọ na-ezigara onye ọ bụla dị na kọntaktị gị faịlụ ahụ", "Ọ na-eme ka faịlụ ahụ bụrụ PDF"], answer: 1, why: "Sync na-eme ka faịlụ dị otu n'ngwaọrụ ọ bụla ị na-eji." },
            { objective: "O3", q: "I chekwara akwụkwọ ozi itinye akwụkwọ ọrụ (cover letter) dị ka \"doc1\". Gịnị ka ị ga-eme ka ị chọta ya ma emechaa?", options: ["Hapụ ya; nchọta ga-echepụta ya", "Mepụta folda ọhụrụ maka faịlụ ọ bụla", "Tinyeghachi ya n'otu aha ahụ", "Gbanwee aha ya ka o doo anya, dị ka \"Cover Letter - Jordan Lee - 2026\""], answer: 3, why: "Aha doro anya na-eme ka ọ dị mfe ịchọta faịlụ ma emechaa." }
          ]
        },
        {
          objectives: ["O4"],
          title: "Ikesa faịlụ n'enweghị nsogbu",
          minutes: 5,
          goal: "Kesaa faịlụ na onye kwesịrị ekwesị n'ikike kwesịrị ekwesị, ma wepụ ikike ahụ.",
          text: [
            "Ọ dị mfe ikesa faịlụ cloud, nke bara uru ma nwekwa ihe egwu. Pịa Share na faịlụ ma tinye adreesị email onye ahụ, ma ọ bụ detuo njikọ (link). Họrọ ihe ha nwere ike ime: ilele (view), ikwu okwu n'ime ya (comment) ma ọ bụ idezi ya (edit).",
            "Nye ikike kacha nta dị mkpa. Résumé maka onye were mmadụ n'ọrụ: naanị ilele. Ọrụ otu: idezi maka ndị otu gị. Kpachara anya maka njikọ e tọrọ ka \"anyone with the link\" (onye ọ bụla nwere njikọ ahụ) meghee faịlụ ahụ; onye ọ bụla nwetara njikọ ahụ nwere ike ịhụ ya, ọbụlagodi ma e zigara ya onye ọzọ.",
            "Lelee ndị nwere ike imeghe ya na ihuenyo Share ma ọ bụ Manage access, ma wepụ ndị mmadụ mgbe ọrụ gwụrụ. Etinyela faịlụ nwere nọmba Social Security, ozi ụlọ akụ ma ọ bụ okwuntughe na folda a na-ekesa."
          ],
          steps: ["Họrọ faịlụ ahụ ma pịa Share.", "Tinye email onye ahụ, ma ọ bụ detuo njikọ.", "Họrọ View, Comment ma ọ bụ Edit; họrọ nke kacha nta ha chọrọ.", "Ejila \"anyone with the link\" maka faịlụ nzuzo.", "Ma emechaa, meghee Share ma ọ bụ Manage access ma wepụ ndị na-achọkwaghị ya."],
          words: [["Ọkwa ikike (permission level)", "ihe mmadụ nwere ike iji faịlụ gị mee: ilele, ikwu okwu n'ime ya ma ọ bụ idezi ya."], ["Ikike kacha nta (least access)", "inye ndị mmadụ naanị ikike ha chọrọ n'ezie."]],
          slides: [
            { title: "Otu esi ekesa", bullets: ["Pịa Share", "Tinye email ma ọ bụ detuo njikọ", "Họrọ View, Comment ma ọ bụ Edit"] },
            { title: "Ikike kacha nta", bullets: ["Résumé maka onye were mmadụ n'ọrụ: naanị ilele", "Ọrụ otu: idezi maka ndị otu", "Kpachara anya maka \"anyone with the link\""] },
            { title: "Hichaa", bullets: ["Lelee Manage access", "Wepụ ndị mmadụ mgbe ọrụ gwụrụ", "Enweghị nọmba nzuzo na folda a na-ekesa"] }
          ],
          tryIt: "Kesaa otu faịlụ site na folda \"Career Documents\" gị na enyi ma ọ bụ onye ezinụlọ ka ọ naanị lee ya (view-only). Gwa ha ka ha meghee ya. Wee meghee Manage access ma wepụ ha.",
          youCanNow: "ikesa faịlụ cloud n'ọkwa ikike kwesịrị ekwesị ma wepụ ikike ahụ mgbe a na-achọkwaghị ya.",
          quickCheck: [
            { objective: "O4", q: "Kedu ntọala ikesa na-enye ikike kacha nta?", options: ["Edit", "Comment", "View", "Owner"], answer: 2, why: "View na-ekwe ka ndị mmadụ meghee faịlụ ahụ mana ha agaghị agbanwe ya, nke bụ ikike kacha nta." },
            { objective: "O4", q: "Ọrụ otu gị agwụla, ụmụ klas gị anọ ka nwere ikike idezi ya. Gịnị ka ị ga-eme?", options: ["Meghee Manage access ma wepụ ndị na-achọkwaghị ya", "Gbanwee njikọ ahụ ka ọ bụrụ \"anyone with the link\"", "Hichapụ akaụntụ gị niile", "Hapụ ya ma eleghị anya ha ga-achọ ya otu ụbọchị"], answer: 0, why: "Wepụ ikike mgbe ọrụ gwụrụ ka ọ bụ naanị ndị chọrọ faịlụ ahụ nwere ike iru ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ichebe akaụntụ cloud gị",
          minutes: 5,
          goal: "Gbanye two-step verification ma lelee nchekwa akaụntụ gị.",
          text: [
            "Akaụntụ cloud gị na-ejide faịlụ gị, email gị na foto gị, ya mere ndị ohi na-achọ ya. Nzọụkwụ kacha mkpa bụ two-step verification (a na-akpọkwa ya two-factor ma ọ bụ multi-factor authentication): mgbe i tinyechara okwuntughe gị, ị na-ejikwa ekwentị gị kwado na ọ bụ gị. Onye ohi nwere naanị okwuntughe gị agaghị enwe ike ịbanye.",
            "Jiri okwuntughe dị ogologo nke ị na-ejighị ebe ọzọ, nke ka mma ka e debe ya na password manager. Google na Microsoft nwere peeji nlele nchekwa (security check-up) na ntọala akaụntụ gị nke na-egosi ngwaọrụ ndị banyere, ihe e mere n'oge na-adịbeghị anya na ụzọ e si eweghachi akaụntụ.",
            "Kpachara anya maka phishing: email adịgboroja na-ekwu \"your storage is full\" (ebe nchekwa gị ejupụtala) ma ọ bụ \"someone shared a file with you\" (mmadụ kesara gị faịlụ) nke na-eduga na peeji ịbanye adịgboroja. Gaa na drive.google.com ma ọ bụ onedrive.com n'onwe gị kama ịpị njikọ ahụ. Cheta ọrụ e kerịtara: ụlọ ọrụ ahụ na-echebe data center ya; gị na-echebe akaụntụ gị."
          ],
          steps: ["Meghee ntọala nchekwa akaụntụ Google ma ọ bụ Microsoft gị.", "Gbanye two-step verification.", "Lelee na ekwentị na email e ji eweghachi akaụntụ ziri ezi.", "Lelee ngwaọrụ ndị banyere ma wepụ nke ọ bụla ị na-amaghị.", "Gaa na saịtị cloud n'onwe gị kama ịpị njikọ dị n'email."],
          words: [["Two-step verification", "nlele nke abụọ, dị ka koodu ma ọ bụ ịpị n'ekwentị gị, mgbe okwuntughe gị gasịrị."], ["Password manager", "app na-emepụta ma na-edebe okwuntughe siri ike maka gị."], ["Phishing", "ozi adịgboroja na-anwa ịghọ gị aghụghọ ka i nye okwuntughe gị."]],
          slides: [
            { title: "Ndị ohi na-achọ akaụntụ gị", bullets: ["O nwere faịlụ, email na foto", "Gbanye two-step verification"] },
            { title: "Nlele nchekwa", bullets: ["Okwuntughe dị ogologo nke ị na-ejighị ebe ọzọ", "Ekwentị na email nweghachi ziri ezi", "Wepụ ngwaọrụ ị na-amaghị"] },
            { title: "Kpachara anya maka phishing", bullets: ["\"Your storage is full\" (ebe nchekwa gị ejupụtala)", "\"Someone shared a file with you\" (mmadụ kesara gị faịlụ)", "Gaa na saịtị ahụ n'onwe gị"] }
          ],
          tryIt: "Omume ọrụ ikpeazụ: meghee ntọala nchekwa akaụntụ Google ma ọ bụ Microsoft gị, gbanye two-step verification, ma lelee ngwaọrụ ndị banyere. Wee jiri folda \"Career Documents\" gị mechaa ọrụ ikpeazụ.",
          youCanNow: "ichebe akaụntụ cloud gị site na two-step verification, nlele nchekwa na ịmata phishing.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ two-step verification?", options: ["Ide okwuntughe gị ugboro abụọ", "Inwe akaụntụ email abụọ dị iche iche", "Ichekwa okwuntughe gị n'ebe abụọ", "Nlele nke abụọ, nke na-adịkarị n'ekwentị gị, mgbe okwuntughe gị gasịrị"], answer: 3, why: "Mgbe okwuntughe gasịrị, ị na-ejikwa ekwentị gị kwado, ya mere onye ohi nwere naanị okwuntughe agaghị abanye." },
            { objective: "O5", q: "Ị hụrụ ekwentị ị na-amaghị n'ime ngwaọrụ ndị banyere n'akaụntụ gị. Gịnị ka ị ga-eme?", options: ["Leghara ya anya; ọ nwere ike ịdị mma", "Wepụ ya ma gbanwee okwuntughe gị", "Kesaa okwuntughe gị na ya", "Gbanyụọ two-step verification"], answer: 1, why: "Iwepụ ngwaọrụ ị na-amaghị n'oge nlele nchekwa na-egbochi ndị ọbịa ịbanye n'akaụntụ gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji cloud n'onwe gị",
        questions: [
          { objective: "O3", q: "Gịnị ka \"sync\" pụtara?", options: ["Ihichapụ faịlụ", "Ime ka faịlụ dị otu na ngwaọrụ gị niile", "Ibipụta faịlụ", "Ikesa faịlụ na ndị ị na-amaghị"], answer: 1, why: "Sync na-emelite faịlụ n'ebe ọ bụla ị banyere." },
          { objective: "O4", q: "Ị na-ekesa résumé gị na onye were mmadụ n'ọrụ. Kedu ikike kacha mma?", options: ["Edit", "Owner", "Naanị View", "Onye ọ bụla nwere njikọ nwere ike idezi ya"], answer: 2, why: "Nye ikike kacha nta dị mkpa; ha chọrọ naanị ịgụ ya." },
          { objective: "O4", q: "Ọrụ otu gwụrụ n'ọnwa gara aga. Gịnị ka ị ga-eme folda a na-ekesa?", options: ["Wepụ ndị na-achọkwaghị ikike", "Mee ka ọ bụrụ nke ọha", "Tinyekwuo ndị mmadụ", "Kesaa njikọ ahụ na mgbasa ozi ọha (social media)"], answer: 0, why: "Iwepụ ikike ochie na-eme ka faịlụ gị bụrụ nzuzo." },
          { objective: "O5", q: "Email kwuru \"Your storage is full, sign in here.\" (Ebe nchekwa gị ejupụtala, banye ebe a.) Gịnị ka ị ga-eme?", options: ["Pịa ya ma banye", "Zaghachi ya na okwuntughe gị", "Zigara ndị enyi gị ya", "Gaa na drive.google.com ma ọ bụ onedrive.com n'onwe gị"], answer: 3, why: "Nke a nwere ike ịbụ phishing; gaa na ezi saịtị ahụ n'onwe gị." },
          { objective: "O5", q: "Kedu nzọụkwụ kacha mkpa iji chebe akaụntụ cloud?", options: ["Okwuntughe dị mkpụmkpụ", "Two-step verification", "Ikesa okwuntughe gị na enyi", "Ịgbanyụ sync"], answer: 1, why: "Onye ohi nwere naanị okwuntughe gị ka agaghị enwe ike ịbanye." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Cloud Computing",
    questions: [
      { objective: "O1", q: "Data center bụ:", options: ["Ụlọ jupụtara na kọmputa na-arụ ọrụ cloud", "Ụlọ ahịa ekwentị", "Ụlọ kọmputa ụlọ akwụkwọ", "Ụdị app"], answer: 0, why: "Ọrụ cloud na-arụ ọrụ na data center." },
      { objective: "O1", q: "Cloud computing dị ka ọkụ eletrik n'ihi na:", options: ["Ọ bụ n'efu mgbe niile", "Ị na-eji ihe ị chọrọ n'enweghị ụlọ ọrụ ọkụ", "Ọ na-arụ ọrụ naanị n'abalị", "Ọ chọghị ịntanetị"], answer: 1, why: "Ị na-eji ma na-akwụ ụgwọ maka ihe ị chọrọ, dị ka ọrụ ọha (utility)." },
      { objective: "O1", q: "Kedu nke bụ ọrụ cloud ị nwere ike iji kwa ụbọchị?", options: ["Akwụkwọ ndetu e ji akwụkwọ mee", "Igwe mgbakọ na-enweghị ịntanetị", "Google Drive", "Oriọna tebụl"], answer: 2, why: "Google Drive na-echekwa faịlụ na kọmputa cloud." },
      { objective: "O1", q: "Otu uru cloud nwere maka azụmahịa bụ:", options: ["Ị ga-ebu ụzọ zụta server dị oke ọnụ", "Ọ chọghị ịntanetị mgbe ọ bụla", "Okwuntughe adịghị mkpa", "Ị nwere ike ito ma kwụọ ụgwọ maka kọmputa ọzọ naanị mgbe ọ dị mkpa"], answer: 3, why: "A na-akpọ nke a scalability." },
      { objective: "O1", q: "Kedu nke bụ ụlọ ọrụ cloud buru ibu maka azụmahịa?", options: ["Microsoft Azure", "Ebe obibi achịcha dị nso", "Ụdị igwe mbipụta", "Web browser"], answer: 0, why: "AWS, Azure na Google Cloud bụ ndị kachasị ibu." },
      { objective: "O1", q: "Kedu nke bụ ezi ihe egwu n'iji cloud?", options: ["Faịlụ na ngwaọrụ ọ bụla", "Ndị otu na-ekesa akwụkwọ", "Ịchọ njikọ ịntanetị", "Nchekwa (backup) na-eme onwe ya"], answer: 2, why: "Na-enweghị ịntanetị, ị nwere ike ọ gaghị eru faịlụ gị." },
      { objective: "O2", q: "SaaS pụtara:", options: ["Storage as a Server", "Software as a Service", "Security and a System", "Sync and a Screen"], answer: 1, why: "SaaS bụ sọftụwia emechara emecha a na-eji site n'ịntanetị." },
      { objective: "O2", q: "Microsoft 365 bụ ọmụmaatụ nke:", options: ["IaaS", "PaaS", "SaaS", "Data center"], answer: 2, why: "Ọ bụ sọftụwia emechara emecha ị na-eji n'ịntanetị." },
      { objective: "O2", q: "Onye mmepụta sọftụwia na-arụ app ya na Azure App Service n'elekọtaghị server. Nke a bụ:", options: ["SaaS", "PaaS", "IaaS", "Password manager"], answer: 1, why: "Ikpo okwu dị njikere maka app nke gị bụ PaaS." },
      { objective: "O2", q: "Kọmputa mebere Amazon EC2 bụ ọmụmaatụ nke:", options: ["SaaS", "PaaS", "Browser", "IaaS"], answer: 3, why: "Ịgbazite kọmputa mebere ị na-elekọta bụ IaaS." },
      { objective: "O2", q: "N'okpuru ọrụ e kerịtara, ụlọ ọrụ ahụ na-echebe:", options: ["Data center ya", "Okwuntughe gị", "Ndị ị na-ekesa faịlụ na ha", "Ihe ị họọrọ itinye"], answer: 0, why: "Gị ka na-echebe akaụntụ na data nke gị." },
      { objective: "O3", q: "Kedu aha faịlụ kacha doo anya?", options: ["\"doc1\"", "\"stuff\"", "\"Resume - Jordan Lee - 2026\"", "\"new new final\""], answer: 2, why: "Aha doro anya na-eme ka ọ dị mfe ịchọta faịlụ." },
      { objective: "O3", q: "Iji tinye faịlụ site na ngwaọrụ gị na cloud, ị na-:", options: ["Ehichapụ ya", "Upload ya", "Ebipụta ya", "Ezigara onye ị na-amaghị ya n'email"], answer: 1, why: "Upload na-edetuo ya na nchekwa cloud." },
      { objective: "O3", q: "Version history na-ekwe ka ị:", options: ["Laghachi n'ụdị ochie nke faịlụ", "Hụ faịlụ ndị ọzọ", "Nweta nchekwa n'efu karịa", "Gbanwee okwuntughe gị"], answer: 0, why: "Ọ na-edebe ụdị ochie e chekwara." },
      { objective: "O4", q: "Ikesa \"anyone with the link\" pụtara:", options: ["Naanị gị nwere ike imeghe ya", "Naanị ndị dị na kọntaktị gị nwere ike imeghe ya", "Ọ dịghị onye nwere ike imeghe ya", "Onye ọ bụla nwetara njikọ ahụ nwere ike imeghe ya, ọbụlagodi ma e zigara ya onye ọzọ"], answer: 3, why: "Njikọ nwere ike ịga karịa ebe i bu n'obi." },
      { objective: "O4", q: "Echiche ikike kacha nta pụtara:", options: ["Nye onye ọ bụla ikike idezi", "Nye ndị mmadụ naanị ikike ha chọrọ", "Ekesala ihe ọ bụla mgbe ọ bụla", "Kesaa ihe niile n'ihu ọha"], answer: 1, why: "Ikike pere mpe pụtara ihe egwu pere mpe." },
      { objective: "O4", q: "Kedu nke a na-ekwesịghị itinye MGBE Ọ BỤLA na folda cloud a na-ekesa?", options: ["Atụmatụ ọrụ otu", "Usoro oge klas", "Faịlụ nwere nọmba Social Security gị", "Foto ndị otu"], answer: 2, why: "Nọmba nzuzo ekwesịghị ịdị na folda a na-ekesa." },
      { objective: "O5", q: "Two-step verification pụtara:", options: ["Ide okwuntughe gị ugboro abụọ", "Nlele nke abụọ n'ekwentị gị mgbe okwuntughe gị gasịrị", "Akaụntụ abụọ", "Folda abụọ"], answer: 1, why: "Ọ na-egbochi ndị ohi nwere naanị okwuntughe gị." },
      { objective: "O5", q: "N'oge nlele nchekwa, ị kwesịrị:", options: ["Iwepụ ngwaọrụ ndị banyere nke ị na-amaghị", "Ịgbanyụ ekwentị nweghachi gị", "Ikesa okwuntughe gị", "Ihichapụ faịlụ gị niile"], answer: 0, why: "Ngwaọrụ ị na-amaghị nwere ike ịpụta na onye ọzọ banyere." },
      { objective: "O5", q: "Email si n'aka onye ị na-amaghị kwuru \"Someone shared a file with you\" (mmadụ kesara gị faịlụ). Nzọụkwụ kacha enweghị nsogbu bụ:", options: ["Pịa ya ma banye na peeji ọ meghere", "Zaghachi ya na okwuntughe gị", "Zigara onye ọ bụla ya", "Gaa na saịtị nchekwa cloud gị n'onwe gị lelee"], answer: 3, why: "Email ikesa adịgboroja na-eduga na peeji ịbanye adịgboroja." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 6, 9, 11, 13, 14, 16, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Folda na faịlụ", objective: "O3", notYet: "Enweghị folda \"Career Documents\", ma ọ bụ faịlụ ndị ahụ nwere aha na-edoghị anya dị ka \"doc1\".", meets: "Folda ahụ nwere faịlụ abụọ nwere aha doro anya.", exceeds: "E mepekwara faịlụ ndị ahụ na ngwaọrụ nke abụọ iji gosi na ha na-async." },
      { name: "Ikesa n'enweghị nsogbu", objective: "O4", notYet: "E kesara faịlụ ahụ n'ikike idezi ma ọ bụ dị ka \"anyone with the link\", ma ọ bụ e wepụghị ikike ahụ mgbe ọ bụla.", meets: "E kesara otu faịlụ ka a naanị lee ya (view-only), e lelere ndị nwere ikike, wee wepụ ya.", exceeds: "Nwere ike ịkọwa ihe mere view-only ji bụrụ ikike kacha nta dị mkpa." },
      { name: "Akaụntụ echebere", objective: "O5", notYet: "Two-step verification agbanyụrụ.", meets: "Two-step verification gbanyere, e lelekwara ngwaọrụ ndị banyere.", exceeds: "E lelekwara ekwentị na email nweghachi, onye na-amụ ihe nwekwara ike ịkpọ aha otu ihe ịdọ aka na ntị nke phishing." },
      { name: "Akọwara cloud", objective: "O1", notYet: "Ahịrịokwu atọ ahụ adịghị ma ọ bụ ha ekwughị ihe cloud bụ.", meets: "Ahịrịokwu atọ doro anya na-ekwu ihe cloud bụ ma nye otu uru na otu ihe egwu.", exceeds: "Ahịrịokwu ndị ahụ na-ejikwa ntụnyere kwa ụbọchị, dị ka ọkụ eletrik." },
      { name: "Ụdị ọrụ", objective: "O2", notYet: "Otu ma ọ bụ karịa n'ime ọmụmaatụ SaaS, PaaS na IaaS ezighi ezi ma ọ bụ adịghị.", meets: "Otu ọmụmaatụ ziri ezi nke ọ bụla n'ime SaaS, PaaS na IaaS.", exceeds: "Na-ekwukwa ihe onye ọrụ ka na-ahụ maka ya n'okpuru ọrụ e kerịtara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na two-step verification gbanyere n'akaụntụ ha bụ isi ụbọchị 30 ka e mesịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe jiri nchekwa cloud maka akwụkwọ ụlọ akwụkwọ, ọrụ ma ọ bụ mmemme n'ime ụbọchị 30",
      "Ndị na-amụ ihe malitere ihe ọmụmụ \"Ntọala Microsoft Azure\" ma ọ bụ ihe ọmụmụ teknụzụ ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị; ngwaọrụ nke abụọ na-enyere aka mana ọ bụghị iwu",
      "Akaụntụ Google n'efu (Google Drive) ma ọ bụ akaụntụ Microsoft (OneDrive)",
      "Ekwentị nwere ike ịnata koodu ma ọ bụ arịrịọ maka two-step verification",
      "Akwụkwọ na mkpịsị ode maka ndetu \"Nwalee ya ugbu a\"",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, na-eme ọrụ \"Nwalee ya ugbu a\" n'otu oge ahụ.",
      "Jiri naanị faịlụ omume (résumé ọmụmaatụ ma ọ bụ ndepụta ndị akaebe nwere aha e chepụtara echepụta); ejila ezi nọmba ID, ozi ụlọ akụ ma ọ bụ okwuntughe mgbe ọ bụla.",
      "Kpokọta ndị na-amụ ihe abụọ abụọ ka ha kesaa faịlụ n'etiti onwe ha ka a naanị lee ya, wee wepụ ikike ahụ n'oge nkuzi.",
      "Na kọmputa a na-ekerịta, hụ na ndị na-amụ ihe pụrụ (sign out) ma mechie browser tupu ha apụọ.",
      "Maka ndị na-amụ ihe na-erubeghị afọ 18, gbasoo iwu ụlọ akwụkwọ ma ọ bụ mmemme ahụ gbasara akaụntụ nkeonwe; a pụrụ iji akaụntụ ụlọ akwụkwọ ma ọ bụrụ na ọ na-ekwe ikesa."
    ]
  }
};

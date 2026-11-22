"use strict";

// Koach Learn course (Igbo translation of shared/ai-digital-marketing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-digital-marketing-ig",
  lang: "ig",
  translationOf: "ai-digital-marketing",
  category: "Veterans (military)",
  name: "Ahịa Dijitalụ site n'Enyemaka AI",
  skills: "Ịkọwa onye ahịa ị na-achọ, Iji AI ede ozi mgbasa ozi, Ime foto mgbasa ozi na Canva, Ide email ahịa na-agbaso iwu, Ikwu eziokwu banyere mgbasa ozi a kwụrụ ụgwọ, Ịgụ nsonaazụ",
  outcome: "ịhazi ma mepụta otu izu nke ahịa dijitalụ maka obere azụmahịa site n'enyemaka AI: nkọwa onye ahịa ị na-achọ, ozi ise na soshal midia nwere foto, otu email ahịa na-agbaso iwu CAN-SPAM, na ụzọ dị mfe isi tụọ ihe rụrụ ọrụ.",
  about: [
    "Ahịa dijitalụ pụtara iru ndị ahịa n'ịntanetị: soshal midia, email, weebụsaịtị na nchọta (search). Ngwa AI nwere ike ide ozi mbụ, tụọ aro echiche ma nyere aka mee foto n'ime nkeji ole na ole, ka azụmahịa otu onye nwee ike ime ahịa dị ka nnukwu azụmahịa.",
    "Ihe ọmụmụ a bụ maka ndị agha mbụ (veterans) na-amalite azụmahịa ma ọ bụ na-achọ ọrụ ahịa, ndị na-achọ ọrụ na-amụ nka a na-achọ n'ahịa, na ndị obodo na-akpọsa ụlọ ahịa, ebe ire nri, ụka ma ọ bụ ọrụ dị n'obodo ha. Ị chọrọ ekwentị ma ọ bụ kọmputa, na ngwa n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, na Canva.",
    "Ị ga-arụ ezi atụmatụ ahịa nke otu izu maka azụmahịa ị họọrọ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Maka ezi obere azụmahịa ma ọ bụ nke omume, chịkọta ngwa ahịa nke otu izu: nkọwa onye ahịa ị na-achọ n'otu paragraf, ozi ise na soshal midia nwere okwu nkọwa (caption) na foto Canva e lelere na ha ziri ezi, otu email ahịa nwere isiokwu doro anya, adreesị ebe obibi na ụzọ isi kwụsị ịnata ya, na mpempe nsochi na-egosi nọmba ị ga-ele maka ozi ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha mbụ (veterans) na ndị di ma ọ bụ nwunye ndị agha nwere ma ọ bụ na-amalite obere azụmahịa, dị ka ọrụ ndị ọzọ, nka aka, nri ma ọ bụ ụlọ ahịa n'ịntanetị, ma chọọ ndị ahịa ọzọ n'ewetaghị ụlọ ọrụ mgbasa ozi.",
    startingPoint: "Ha na-eji soshal midia na email maka onwe ha, ụfọdụ nwekwara peeji azụmahịa. Ọtụtụ na-ebipụta ozi n'enweghị atụmatụ, ejibeghị AI ma ọ bụ Canva maka ahịa, ha amaghịkwa iwu email na mgbasa ozi.",
    gap: "Obere azụmahịa na-adị ndụ ma ọ bụ na-anwụ site na ndị ahịa na-abịa mgbe niile, ahịa n'ịntanetị na-ewekwa oge ndị nwe azụmahịa na-enweghị. Ndị na-amụ ihe kwesịrị ịhazi ma mepụta otu izu nke ahịa nwere eziokwu ma ru onye ahịa kwesịrị ekwesị site n'enyemaka AI, gbasoo iwu CAN-SPAM na FTC, ma tụọ nsonaazụ ka mgbalị ha ghọọ ndokwa (booking) na ire ahịa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu ahịa na nke mbụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; kọmputa na-eme ka Canva na mpempe nsochi dị mfe",
      "Ego: naanị ngwa n'efu (ngwa enyemaka AI, atụmatụ n'efu nke Canva, Google Sheets ma ọ bụ Excel)",
      "Iwu: ntụziaka CAN-SPAM na FTC nke U.S. na-arụ ọrụ; ndị na-amụ ihe nọ na mba ọzọ na-elele iwu mba ha",
      "Nzuzo: etinyela aha ndị ahịa ma ọ bụ ozi ịkpọtụrụ ha n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị. Ndị ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka ezi obere azụmahịa ma ọ bụ nke omume", action: "ide nkọwa onye ahịa ị na-achọ na ozi ahịa nwere otu ahịrịokwu", standard: "na-ekwu onye ahịa ahụ bụ, ihe ọ chọrọ, na ihe ị na-enye, maka onye na ihe mere ha ga-eji họrọ gị" },
    { id: "O2", condition: "Site n'iji ngwa enyemaka AI na nkọwa onye ahịa gị", action: "ide ozi ise na soshal midia dị iche iche, nke ọ bụla nwere oku ime ihe (call to action)", standard: "ebe e lelere eziokwu, ọnụahịa na ụbọchị ọ bụla, ma ọ dịghị okwu ị na-apụghị igosi na ọ bụ eziokwu" },
    { id: "O3", condition: "Site n'iji atụmatụ n'efu nke Canva", action: "ime foto dabara n'ụdị azụmahịa gị (brand) maka ozi ọ bụla", standard: "na-eji otu agba na mkpụrụ akwụkwọ, okwu ole na ole, na naanị foto i nwere ikike iji" },
    { id: "O4", condition: "Mgbe e nyere gị onyinye maka ndị ahịa gara aga", action: "ide email ahịa na-agbaso isi iwu CAN-SPAM", standard: "nwere isiokwu nwere eziokwu, adreesị ebe obibi na ụzọ doro anya isi kwụsị ịnata ya" },
    { id: "O5", condition: "Mgbe e nyere gị mgbasa ozi, nyocha (review) ma ọ bụ ihe AI mere", action: "ịmata mgbe a ga-ekwupụta njikọ na idebe nyocha na akaebe ndị ahịa n'eziokwu", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O6", condition: "Mgbe otu izu nke ozi gasịrị", action: "ịhọrọ otu nọmba a ga-esochi maka ozi ọ bụla ma jiri nsonaazụ hazie izu na-abịa", standard: "nwere mpempe nsochi nwere nọmba ebumnuche na nsonaazụ maka ozi ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi na imepụta ihe mgbasa ozi",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịmara onye ahịa gị na ozi gị",
          minutes: 5,
          goal: "Dee nkọwa onye ahịa ị na-achọ na otu ozi doro anya maka azụmahịa.",
          text: [
            "Ahịa na-arụ ọrụ mgbe ọ na-agwa otu ụdị mmadụ okwu. Nkọwa onye ahịa ị na-achọ na-akọwa onye ahịa gị kacha mma: onye ọ bụ, ihe ọ chọrọ, ihe na-echegbu ya na ebe ọ na-anọ n'ịntanetị.",
            "Mgbe ahụ dee otu ozi doro anya: ihe ị na-enye, onye ọ bụ maka ya, na ihe mere ha ga-eji họrọ gị. Ọmụmaatụ: \"Ọrụ ịsa ụgbọ ala nke onye agha mbụ nwe, na-abịa n'ezi ụlọ gị na Fayetteville. Debe oge n'ime nkeji abụọ.\"",
            "AI nwere ike inyere gị aka ịchọ echiche. Jụọ: \"Ana m arụ ọrụ ịsa ụgbọ ala na-aga ebe ndị ahịa nọ. Kọwaa ụdị ndị ahịa atọ nwere ike ịbịa na ihe onye ọ bụla na-eche banyere ya.\" Họrọ nke dabara ndị ahịa i nwere ma ọ bụ ndị ị chọrọ, ma jiri ihe ị maara meziwanye ya."
          ],
          steps: ["Kpọọ aha azụmahịa ahụ na ihe ọ na-ere.", "Rịọ ngwa enyemaka AI ka ọ tụọ aro ụdị ndị ahịa atọ.", "Họrọ otu ma dee nkọwa mkpụmkpụ: onye, mkpa, nchegbu, ebe n'ịntanetị.", "Dee ozi nwere otu ahịrịokwu: gịnị, maka onye, ihe mere gị."],
          words: [["Onye ahịa ị na-achọ", "otu ụdị mmadụ ahịa gị na-elekwasị anya (target customer)."], ["Nkọwa", "obere nkọwa banyere otu mmadụ ma ọ bụ otu (profile)."], ["Ozi", "isi ihe ị chọrọ ka ndị ahịa mara ma cheta (message)."]],
          slides: [
            { title: "Gwa otu onye okwu", bullets: ["Onye ọ bụ na ihe ọ chọrọ", "Ihe na-echegbu ya", "Ebe ọ na-anọ n'ịntanetị"] },
            { title: "Otu ozi doro anya", bullets: ["Ihe ị na-enye", "Onye ọ bụ maka ya", "Ihe mere ha ga-eji họrọ gị"] },
            { title: "Jiri AI chọọ echiche", bullets: ["Rịọ maka ụdị ndị ahịa atọ", "Họrọ otu, wee jiri ihe ị maara meziwanye ya"] }
          ],
          tryIt: "Họrọ ezi azụmahịa ma ọ bụ nke omume. Jiri ngwa enyemaka AI chọọ ụdị ndị ahịa, wee dee nkọwa onye ahịa ị na-achọ n'otu paragraf na ozi nwere otu ahịrịokwu.",
          youCanNow: "ide nkọwa onye ahịa ị na-achọ na ozi ahịa doro anya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka nkọwa onye ahịa ị na-achọ na-akọwa?", options: ["Onye ọ bụla na-eji ịntanetị", "Onye ahịa gị kacha mma: onye ọ bụ, ihe ọ chọrọ, ihe na-echegbu ya na ebe ọ nọ n'ịntanetị", "Ọnụahịa gị maka afọ ahụ", "Akara (logo) ndị na-asọ mpi na gị"], answer: 1, why: "Nkọwa na-akọwa otu ụdị onye ahịa ka ahịa gị gwa ya okwu." },
            { objective: "O1", q: "AI tụrụ aro ụdị ndị ahịa atọ maka azụmahịa ịkwa ahịhịa na mbara gị. Naanị otu dabara ndị na-akpọ gị n'ezie. Gịnị ka ị ga-eme?", options: ["Jiri ha atọ n'ozi ọ bụla", "Họrọ nke kacha atọ ụtọ", "Leghara AI anya ma ebipụtala ihe ọ bụla", "Họrọ nke dabara ezi ndị ahịa ma jiri ihe ị maara meziwanye ya"], answer: 3, why: "Họrọ ụdị dabara ezi ndị ahịa gị ma ọ bụ ndị ị chọrọ, ma tinye ihe ị maara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI ede ozi soshal midia",
          minutes: 5,
          goal: "Jiri AI dee ozi ise mbụ, wee meziwanye ha ka ha zie ezi ma dị ka okwu gị.",
          text: [
            "Ozi dị mma na-akụzi ihe, na-egosi ihe ma ọ bụ na-akpọ òkù. Gwakọta ha: ndụmọdụ (\"Ụzọ 3 isi debe ime ụgbọ ala gị ọcha\"), foto na-egosi otu ọrụ si aga n'azụ, akụkọ onye ahịa (site n'ikike ya), onyinye, na ajụjụ na-akpọ ndị mmadụ ka ha kwuo uche ha.",
            "Nye AI nkọwa onye ahịa gị na ozi gị, wee jụọ: \"Dee ozi ise mkpụmkpụ maka Instagram na Facebook maka onye ahịa a. Otu ndụmọdụ, otu nke na-egosi ọrụ n'azụ, otu akụkọ onye ahịa, otu onyinye, otu ajụjụ. Olu enyi, n'okpuru okwu 60 nke ọ bụla, nwere oku ime ihe.\"",
            "Na-emezi mgbe niile. Lelee eziokwu, ọnụahịa na ụbọchị ọ bụla. Wepụ okwu ị na-apụghị igosi, dị ka \"kacha mma na steeti\". Mee ka ọ dị ka okwu gị, ma ebipụtala nyocha ma ọ bụ nsonaazụ na-emeghị eme."
          ],
          steps: ["Tinye nkọwa onye ahịa gị na ozi gị n'ime ngwa enyemaka AI.", "Rịọ maka ozi ise dị iche iche nwere oku ime ihe.", "Lelee eziokwu, ọnụahịa na ụbọchị ọ bụla.", "Wepụ okwu ị na-apụghị igosi.", "Degharịa ya n'olu nke gị."],
          words: [["Oku ime ihe", "nzọụkwụ ị chọrọ ka onye na-agụ ya mee, dị ka \"Debe oge ugbu a\" ma ọ bụ \"Kpọọ taa\" (call to action)."], ["Caption", "okwu na-eso foto ma ọ bụ vidiyo na soshal midia."]],
          slides: [
            { title: "Gwakọta ozi gị", bullets: ["Ndụmọdụ na ihe na-egosi ọrụ n'azụ", "Akụkọ onye ahịa (site n'ikike ya)", "Onyinye na ajụjụ"] },
            { title: "Arịrịọ AI siri ike", bullets: ["Tinye nkọwa onye ahịa na ozi gị", "Rịọ maka ụdị ise, n'okpuru okwu 60", "Rịọ maka oku ime ihe"] },
            { title: "Na-emezi mgbe niile", bullets: ["Lelee eziokwu, ọnụahịa na ụbọchị", "Wepụ okwu ị na-apụghị igosi", "Mee ka ọ dị ka okwu gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o dee ozi ise mbụ maka azụmahịa gị site n'iji ụdị prompt dị n'elu. Meziwanye nke ọ bụla maka eziokwu na olu, ma tinye akara n'ihe ị gbanwere.",
          youCanNow: "iji AI dee ozi soshal midia mbụ ma meziwanye ha ka ha zie ezi, nwee eziokwu ma dị n'olu gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu ozi bụ ozi \"na-egosi ọrụ n'azụ\"?", options: ["Foto ndị otu gị na-akwado maka ọrụ", "Kupọn mbelata 20%", "Ajụjụ na-ajụ ndị na-eso gị agba ha kacha hụ n'anya", "Nyocha onye ahịa"], answer: 0, why: "Ozi na-egosi ọrụ n'azụ na-egosi otu ọrụ gị si aga." },
            { objective: "O2", q: "Ozi AI dere nwere ọnụahịa ị gbanwere n'ọnwa gara aga. Gịnị ka ị ga-eme?", options: ["Bipụta ya; ndị ahịa ga-ajụ", "Hichapụ ozi ahụ niile", "Dozie ọnụahịa ahụ tupu i bipụta ya", "Tinye \"ọnụahịa nwere ike ịgbanwe\" ma bipụta ya"], answer: 2, why: "Lelee ma dozie eziokwu, ọnụahịa na ụbọchị ọ bụla mgbe niile tupu i bipụta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime foto mgbasa ozi site na Canva na AI",
          minutes: 5,
          goal: "Mee foto dị ọcha, dabara n'ụdị azụmahịa gị, maka ozi ọ bụla site na ngwa nhazi n'efu.",
          text: [
            "Canva nwere atụmatụ n'efu nwere template ndị e mere n'ogo saịtị soshal ọ bụla. Chọọ ụdị ozi ị chọrọ, dị ka \"Instagram post\", họrọ template ma gbanwee okwu na foto ya.",
            "Debe ụdị azụmahịa (brand) dị mfe: otu agba abụọ ma ọ bụ atọ ahụ, otu ụdị mkpụrụ akwụkwọ ma ọ bụ abụọ, na logo ma ọ bụ aha azụmahịa gị na foto ọ bụla. Jiri okwu ole na ole na foto; caption na-ebu nkọwa.",
            "Jiri foto nke gị mgbe ị nwere ike; ezi foto nke ọrụ gị na-ewulite ntụkwasị obi. Ọ bụrụ na i jiri foto AI mepụtara, emela ka ha yie ezi ndị ahịa ma ọ bụ nsonaazụ ị na-ewetaghị, ma jiri naanị foto i nwere ikike iji."
          ],
          steps: ["Mepee Canva ma chọọ ogo template ị chọrọ.", "Họrọ template ma gbanwee agba ya ka ọ bụrụ agba azụmahịa gị.", "Dochie okwu ahụ na isiokwu mkpụmkpụ.", "Tinye foto nke gị ma ọ bụ foto e nwere ikike iji.", "Budata ya ma chekwaa ya n'aha ozi ahụ."],
          words: [["Template", "nhazi e meworo emecha nke ị na-agbanwe ka ọ dabara mkpa gị."], ["Brand", "ọdịdị na mmetụta na-eme ka a mata azụmahịa gị."], ["Ikike (license)", "nnabata iji foto ma ọ bụ ọrụ ọzọ."]],
          slides: [
            { title: "Ihe ndabere Canva", bullets: ["Atụmatụ n'efu nwere template n'ogo soshal midia", "Họrọ template, gbanwee okwu na foto"] },
            { title: "Brand dị mfe", bullets: ["Otu agba abụọ ma ọ bụ atọ ahụ", "Otu ụdị mkpụrụ akwụkwọ ma ọ bụ abụọ", "Aha ma ọ bụ logo gị na foto ọ bụla"] },
            { title: "Foto nwere eziokwu", bullets: ["Foto nke gị na-ewulite ntụkwasị obi", "Enweghị ndị ahịa ma ọ bụ nsonaazụ adịgboroja", "Naanị foto i nwere ikike iji"] }
          ],
          sources: [{ name: "Canva", url: "https://www.canva.com/" }],
          tryIt: "Mee foto Canva maka ozi ise gị niile site n'iji otu agba na mkpụrụ akwụkwọ ahụ. Jiri opekata mpe otu ezi foto nke ọrụ gị ma ọ bụ ngwaahịa gị.",
          youCanNow: "ime foto ozi soshal midia nwere eziokwu, na-adakọ ọnụ, site na ngwa nhazi n'efu.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka ọtụtụ nkọwa ozi kwesịrị ịnọ?", options: ["Juputara na foto ahụ", "N'obere mkpụrụ akwụkwọ n'okpuru foto ahụ", "Na foto nke abụọ", "Na caption, ma okwu ole na ole nọrọ na foto"], answer: 3, why: "Debe okwu ole na ole na foto; caption na-ebu nkọwa." },
            { objective: "O3", q: "Ị chọrọ foto onye ahịa nwere obi ụtọ, mana i nweghị nke ọ bụla. Kedu nhọrọ nwere eziokwu?", options: ["Jiri foto AI e mere ka ọ yie ezi onye ahịa", "Jiri foto nke ọrụ gị ma ọ bụ foto e nwere ikike iji", "Detuo foto site na saịtị ụlọ ọrụ ọzọ", "Jiri foto onye ọbịa site na soshal midia"], answer: 1, why: "Jiri foto nke gị ma ọ bụ foto i nwere ikike iji, ma emela ndị ahịa adịgboroja." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi na imepụta ihe mgbasa ozi",
        questions: [
          { objective: "O1", q: "Gịnị bụ nkọwa onye ahịa ị na-achọ?", options: ["Akwụkwọ akaụntụ ụlọ akụ gị", "Ndepụta ndị na-asọ mpi na gị", "Nkọwa otu ụdị mmadụ ahịa gị na-elekwasị anya", "Okwuntughe soshal midia"], answer: 2, why: "Ahịa na-arụ ọrụ nke ọma mgbe ọ na-agwa otu ụdị mmadụ okwu." },
          { objective: "O1", q: "Kedu ozi ahịa kacha doo anya?", options: ["\"Ọrụ ịsa ụgbọ ala nke onye agha mbụ nwe, na-abịa n'ezi ụlọ gị na Fayetteville. Debe oge n'ime nkeji abụọ.\"", "\"Anyị na-eme ihe.\"", "\"Kacha mma mgbe niile!!!\"", "\"Ma eleghị anya kpọọ anyị.\""], answer: 0, why: "Ọ na-ekwu gịnị, maka onye na ihe mere, ya na nzọụkwụ na-esote." },
          { objective: "O2", q: "AI dere \"A họpụtara anyị dị ka ndị kacha asa ụgbọ ala na steeti\" mana nke a emeghị mgbe ọ bụla. Gịnị ka ị ga-eme?", options: ["Bipụta ya n'agbanyeghị", "Mee ka ọ buo ibu", "Tinye foto onyinye nturu ugo adịgboroja", "Wepụ okwu ahụ"], answer: 3, why: "Ebipụtala okwu ị na-apụghị igosi na ọ bụ eziokwu." },
          { objective: "O2", q: "Gịnị bụ oku ime ihe (call to action)?", options: ["Ụda ekwentị", "Nzọụkwụ ị chọrọ ka onye na-agụ ya mee, dị ka \"Debe oge ugbu a\"", "Ọkwa iwu", "Ụdị mkpụrụ akwụkwọ"], answer: 1, why: "Ọ na-agwa onye na-agụ ya ihe ọ ga-eme ọzọ." },
          { objective: "O3", q: "Gịnị na-ewulite ntụkwasị obi kacha na foto mgbasa ozi?", options: ["Foto AI nke ndị ahịa adịgboroja nwere obi ụtọ", "Ezi foto nke ọrụ gị", "Foto e detuoro site n'aka onye na-asọ mpi na gị", "Enweghị foto ọ bụla"], answer: 1, why: "Ezi foto nke ezi ọrụ nwere eziokwu ma na-eme ka mmadụ kwere." }
        ]
      }
    },
    {
      name: "Isi 2: Email, iwu eziokwu na nsonaazụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide email ahịa na-agbaso iwu",
          minutes: 6,
          goal: "Jiri AI dee email ahịa na-agbaso isi iwu CAN-SPAM nke U.S.",
          text: [
            "Email na-eru ndị họọrịrị ịnụ site n'aka gị, ya mere ọ na-erekarị ahịa karịa soshal midia. Zigara naanị ndị nyere gị adreesị ha ma kwenye ịnụ site n'aka gị.",
            "Na United States, iwu CAN-SPAM Act na-edobe iwu maka email azụmahịa. Dị ka Federal Trade Commission (FTC) si kwuo, ị gaghị eji ozi onye zitere ma ọ bụ isiokwu na-adịghị eziokwu ma ọ bụ na-eduhie eduhie, ị ga-ekwupụta na ozi ahụ bụ mgbasa ozi, tinye ezi adreesị nzi ozi ebe obibi gị, nye ụzọ doro anya isi kwụsị ịnata ya, ma kwanyere arịrịọ ịkwụsị ugwu n'ime ụbọchị ọrụ 10. Ọ ka bụ ọrụ gị ọbụlagodi ma ọ bụrụ na onye ọzọ ezipụrụ ya maka gị.",
            "Rịọ AI ka o dee ya: \"Dee email ahịa mkpụmkpụ maka [azụmahịa] na-enye [onyinye] ndị ahịa gara aga. Isiokwu nwere eziokwu, olu enyi, otu oku ime ihe.\" Mgbe ahụ tinye adreesị gị na njikọ unsubscribe, ma lelee eziokwu. Ọ bụrụ na ị nọghị na U.S., lelee iwu email na nzuzo nke mba gị."
          ],
          steps: ["Rịọ AI maka email mkpụmkpụ nwere isiokwu nwere eziokwu na otu oku ime ihe.", "Lelee eziokwu, ọnụahịa na ụbọchị ọ bụla.", "Mee ka o doo anya na nke a bụ mgbasa ozi ma ọ bụ onyinye.", "Tinye ezi adreesị nzi ozi ebe obibi gị.", "Tinye ụzọ doro anya isi kwụsị ịnata ya ma mezuo arịrịọ n'ime ụbọchị ọrụ 10."],
          words: [["CAN-SPAM Act", "iwu U.S. na-edobe iwu maka email azụmahịa."], ["Opt out / unsubscribe", "ụzọ ndị mmadụ ga-esi kwụsị ịnata email gị."], ["Isiokwu (subject line)", "obere aha ndị mmadụ na-ahụ tupu ha emeghe email."]],
          slides: [
            { title: "Zigara ndị kwesịrị ekwesị", bullets: ["Naanị ndị kwenyere ịnụ site n'aka gị"] },
            { title: "Ihe ndabere CAN-SPAM (FTC)", bullets: ["Ozi onye zitere na isiokwu nwere eziokwu", "Kwupụta na ọ bụ mgbasa ozi", "Tinye adreesị nzi ozi ebe obibi gị"] },
            { title: "Iwu unsubscribe", bullets: ["Ụzọ doro anya isi kwụsị", "Mezuo ya n'ime ụbọchị ọrụ 10", "Ọ bụ ọrụ gị ọbụlagodi ma onye ọrụ ọzọ zipụrụ ya"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "Jiri AI dee email ahịa maka azụmahịa gị. Meziwanye ya, wee lelee ya na ndepụta CAN-SPAM: isiokwu nwere eziokwu, ekwupụtara na ọ bụ mgbasa ozi, adreesị ebe obibi, ụzọ isi kwụsị ịnata ya.",
          youCanNow: "ide email ahịa site n'enyemaka AI nke na-agbaso isi iwu CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Ndị ole kwesịrị ịnọ na ndepụta email ahịa gị?", options: ["Onye ọ bụla ị nwere ike ịchọta email ya", "Adreesị email ị zụtara n'ịntanetị", "Ndị nyere gị adreesị ha ma kwenye ịnụ site n'aka gị", "Azụmahịa ọ bụla dị n'obodo gị"], answer: 2, why: "Zigara naanị ndị nyere gị adreesị ha ma kwenye ịnụ site n'aka gị." },
            { objective: "O4", q: "Email AI dere nwere onyinye dị mma mana o nweghị adreesị ma ọ bụ njikọ unsubscribe. Gịnị ka ị ga-eme tupu i zipu ya?", options: ["Tinye ezi adreesị nzi ozi ebe obibi gị na ụzọ doro anya isi kwụsị ịnata ya", "Zipu ya; ha abụghị ihe dị mkpa", "Tinye naanị nọmba ekwentị gị", "Zipu ya site n'akaụntụ enyi gị"], answer: 0, why: "CAN-SPAM chọrọ ezi adreesị nzi ozi ebe obibi na ụzọ doro anya isi kwụsị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ahịa nwere eziokwu: ikwupụta, nyocha na AI",
          minutes: 5,
          goal: "Mata mgbe mgbasa ozi chọrọ ikwupụta njikọ, ma debe nyocha na ihe AI mere n'eziokwu.",
          text: [
            "Endorsement Guides nke FTC na-ekwu na ọ bụrụ na onye na-akpọsa ngwaahịa nwere njikọ na azụmahịa ahụ, dị ka ịkwụ ya ụgwọ ma ọ bụ inye ya ngwaahịa n'efu, a ga-ekwupụta ya nke ọma. FTC na-atụ aro okwu dị mfe dị ka \"Ad:\" ma ọ bụ \"#ad\" na mmalite, ma ọ bụ \"Paid post by [brand]\".",
            "Nyocha adịgboroja bụ aghụghọ. Edela nyocha maka azụmahịa nke gị, akwụla ụgwọ maka nke adịgboroja ma ọ bụ mee ka AI mepụta ha. Kama, rịọ ezi ndị ahịa ka ha dee nyocha nwere eziokwu.",
            "Kpachara anya na ihe AI mere: ejila AI ṅomie ezi mmadụ, ekepụtala akaebe ndị ahịa ma ọ bụ kwuo banyere nsonaazụ ị na-apụghị igosi. Iwu na-agbanwe, ya mere lelee peeji ntụziaka azụmahịa nke FTC maka nkọwa ugbu a."
          ],
          words: [["Endorsement", "ozi ebe mmadụ na-ekwu na ọ masịrị ya ma ọ bụ na ọ na-eji ngwaahịa."], ["Ikwupụta (disclosure)", "okwu doro anya na-egosi njikọ, dị ka \"#ad\" ma ọ bụ \"Paid post\"."], ["Akaebe (testimonial)", "okwu onye ahịa banyere ihe ọ hụrụ."]],
          slides: [
            { title: "Kwupụta njikọ", bullets: ["Akwụrụ gị ụgwọ ma ọ bụ nye gị ngwaahịa n'efu? Kwuo ya", "\"Ad:\" ma ọ bụ \"#ad\" na mmalite", "\"Paid post by [brand]\""] },
            { title: "Nyocha ga-abụrịrị eziokwu", bullets: ["Enweghị nyocha adịgboroja ma ọ bụ nke AI dere", "Rịọ ezi ndị ahịa ka ha dee nyocha n'eziokwu"] },
            { title: "Iwu nkịtị maka ihe AI mere", bullets: ["Ejila ya ṅomie ezi mmadụ", "Enweghị akaebe ma ọ bụ nsonaazụ e kepụtara", "Lelee ntụziaka FTC maka mgbanwe"] }
          ],
          sources: [{ name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" }],
          tryIt: "Lelee ozi ise gị na email gị. Tinye akara n'ihe ọ bụla ga-achọ ikwupụta (dịka ọmụmaatụ, onye mmekọ kwụrụ gị ụgwọ ma ọ bụ enyi na-akpọsa ya maka ngwaahịa n'efu), ma wepụ okwu ma ọ bụ nyocha ọ bụla na-abụghị eziokwu.",
          youCanNow: "ịmata mgbe ahịa chọrọ ikwupụta njikọ ma debe nyocha na ihe AI mere n'eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Olee mgbe onye na-akpọsa ngwaahịa gị ga-ekwupụta ya?", options: ["Naanị ma ọ bụrụ na o nwere ihe karịrị ndị na-eso ya 10,000", "Mgbe o nwere njikọ na azụmahịa gị, dị ka ịkwụ ya ụgwọ ma ọ bụ inweta ya n'efu", "Ọ dịghị mgbe ọ bụla, ma ọ bụrụ na nyocha ahụ dị mma", "Naanị na email"], answer: 1, why: "FTC na-ekwu na a ga-ekwupụta njikọ dị ka ụgwọ ma ọ bụ ngwaahịa n'efu nke ọma." },
            { objective: "O5", q: "Ụlọ ahịa gị nwere nyocha ole na ole. Enyi gị kwuru na ya ga-eme ka AI dee nyocha kpakpando ise iri abụọ. Gịnị ka ị ga-eme?", options: ["Nabata ya, ebe ọ bụ AI dere ha, ọ bụghị gị", "Bipụta naanị iri n'ime ha", "Kwụọ ụlọ ọrụ ụgwọ ka ọ bipụta ha kama", "Jụ ya ma rịọ ezi ndị ahịa ka ha dee nyocha n'eziokwu"], answer: 3, why: "Nyocha adịgboroja bụ aghụghọ; rịọ ezi ndị ahịa kama." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ ihe na-arụ ọrụ na ime ka ọ ka mma",
          minutes: 5,
          goal: "Họrọ nọmba a ga-esochi maka ozi ọ bụla ma jiri nsonaazụ hazie izu na-abịa.",
          text: [
            "Ikpo okwu soshal midia ọ bụla na ngwa email na-egosi nọmba ndị bụ isi. Reach bụ ọnụọgụ ndị hụrụ ya. Engagement bụ like, kọmenti, nkesa (share) na nchekwa (save). Klik na-egosi ndị gara na njikọ gị. Conversion bụ ezi ebumnuche: ndokwa, oku, ire ahịa ma ọ bụ ndebanye aha.",
            "Họrọ otu isi nọmba maka ozi ọ bụla dabere n'ọrụ ya: ozi ndụmọdụ na-achọ nchekwa na nkesa, ozi onyinye na-achọ klik na ndokwa. Dee ha na mpempe nsochi dị mfe na Google Sheets ma ọ bụ Excel.",
            "Mgbe otu izu gasịrị, lee ihe kacha rụọ ọrụ ma mee ọzọ n'ime ya. Ị nwere ike itinye nọmba gị (n'enweghị aha ndị ahịa) n'ime ngwa enyemaka AI ma jụọ: \"Kedu ozi kacha rụọ ọrụ, gịnị ka m ga-anwale n'izu na-abịa?\" Gị na-eme mkpebi ikpeazụ."
          ],
          steps: ["Mee mpempe nwere kọlụm: ụbọchị, ozi, ụdị, nọmba ebumnuche, nsonaazụ.", "Họrọ otu nọmba ebumnuche maka ozi ọ bụla.", "Mgbe otu izu gasịrị, dejupụta nsonaazụ site na insights nke ikpo okwu ahụ.", "Rịọ AI ka ọ hụ usoro, site n'iji naanị nọmba.", "Hazie izu na-abịa: mee ọzọ n'ime ihe rụrụ ọrụ."],
          words: [["Reach", "ọnụọgụ ndị hụrụ ozi gị."], ["Engagement", "like, kọmenti, nkesa na nchekwa."], ["Conversion", "mgbe mmadụ mere ihe ị chọrọ, dị ka idebe oge ma ọ bụ ịzụ ihe."]],
          slides: [
            { title: "Nọmba ị ga-ama", bullets: ["Reach: ọnụọgụ ndị hụrụ ya", "Engagement: like, kọmenti, nkesa", "Klik na conversion"] },
            { title: "Otu ebumnuche n'ozi ọ bụla", bullets: ["Ozi ndụmọdụ: nchekwa na nkesa", "Ozi onyinye: klik na ndokwa"] },
            { title: "Mụta ma gbanwee", bullets: ["Sochie ya na mpempe dị mfe", "Rịọ AI ka ọ hụ usoro, naanị nọmba", "Mee ọzọ n'ime ihe rụrụ ọrụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee mpempe nsochi maka ozi ise gị na email gị, nke ọ bụla nwere otu nọmba ebumnuche. Ya na nkọwa onye ahịa gị, ozi gị, foto gị na email gị, nke a na-emezu ngwa ahịa gị nke otu izu.",
          youCanNow: "ịhazi, imepụta, ịlele na ịtụ otu izu nke ahịa dijitalụ e mere site n'enyemaka AI.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ engagement?", options: ["Like, kọmenti, nkesa na nchekwa", "Ọnụọgụ ndị hụrụ ozi ahụ", "Ego ozi ahụ ọnụ", "Ọnụọgụ ndị na-eso gị i nwere na mbido"], answer: 0, why: "Engagement na-agụ otu ndị mmadụ si emekọ ihe na ozi; reach bụ ọnụọgụ ndị hụrụ ya." },
            { objective: "O6", q: "Ozi ndụmọdụ gị nwetara nchekwa kacha n'izu a, mana ozi onyinye nwetara klik ole na ole. Kedu nzọụkwụ ọzọ nwere uche?", options: ["Kwụsị ibipụta ozi otu ọnwa", "Hichapụ ozi ndụmọdụ ahụ", "Hazie ozi ndụmọdụ ọzọ ma nwalee onyinye ọhụrụ n'izu na-abịa", "Bipụta otu onyinye ahụ ugboro ise"], answer: 2, why: "Mee ọzọ n'ime ihe rụrụ ọrụ ma gbanwee ihe na-arụghị ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Email, iwu eziokwu na nsonaazụ",
        questions: [
          { objective: "O4", q: "N'okpuru CAN-SPAM, gịnị ka email ahịa U.S. ga-enwerịrị?", options: ["Nọmba Social Security onye ahịa", "Isiokwu adịgboroja na-eme ngwa ngwa", "Enweghị aha onye zitere", "Ezi adreesị nzi ozi ebe obibi na ụzọ isi kwụsị ịnata ya"], answer: 3, why: "FTC depụtara adreesị ebe obibi na ụzọ isi kwụsị n'ime ihe a chọrọ." },
          { objective: "O4", q: "Dị ka FTC si kwuo, n'oge ole ka ị ga-emezu arịrịọ unsubscribe n'okpuru CAN-SPAM?", options: ["N'ime ụbọchị ọrụ 10", "N'ime otu afọ", "Ọ dịghị mgbe ọ bụla", "Naanị ma ọ bụrụ na ha kpọọ gị"], answer: 0, why: "Ntụziaka FTC na-ekwu na a ga-emezu arịrịọ ịkwụsị n'ime ụbọchị ọrụ 10." },
          { objective: "O5", q: "Enyi gị nwetara ngwaahịa n'efu site n'aka gị ma kwuo banyere ya n'ịntanetị. Gịnị ka ozi ya kwesịrị inwe?", options: ["Ọ dịghị ihe ọ bụla", "Nyocha kpakpando ise adịgboroja", "Ikwupụta doro anya dị ka \"#ad\" ma ọ bụ \"Gifted\"", "Nkọwa akaụntụ ụlọ akụ gị"], answer: 2, why: "A ga-ekwupụta njikọ dị ka ngwaahịa n'efu." },
          { objective: "O5", q: "Kedu nke bụ ahịa nwere eziokwu?", options: ["Ime ka AI dee nyocha", "Ịkwụ ụgwọ maka nyocha adịgboroja", "Ide nyocha maka azụmahịa nke gị n'aha adịgboroja", "Ịrịọ ezi ndị ahịa ka ha dee nyocha n'eziokwu"], answer: 3, why: "Naanị ezi nyocha site n'aka ezi ndị ahịa nwere eziokwu." },
          { objective: "O6", q: "Gịnị bụ conversion?", options: ["Ịgbanwe ogo foto", "Ụdị mkpụrụ akwụkwọ", "Mgbe mmadụ mere ihe ị chọrọ, dị ka idebe oge", "Ịgbanyụ kọmenti"], answer: 2, why: "Conversion bụ ezi ebumnuche azụmahịa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ahịa Dijitalụ site n'Enyemaka AI",
    questions: [
      { objective: "O1", q: "Ahịa dijitalụ pụtara:", options: ["Naanị ibipụta akwụkwọ mgbasa ozi", "Iru ndị ahịa n'ịntanetị", "Ire ahịa site n'ụlọ ruo n'ụlọ", "Ịrụ ọrụ na igbe ego"], answer: 1, why: "Ọ na-eji soshal midia, email, weebụsaịtị na nchọta." },
      { objective: "O1", q: "Gịnị mere i ji ede nkọwa onye ahịa ị na-achọ?", options: ["Ka ahịa gị gwa otu ụdị mmadụ okwu", "Iji mejupụta oge", "N'ihi na AI chọrọ ya", "Ịkesa ozi nzuzo"], answer: 0, why: "Ahịa e lekwasịrị anya na-arụ ọrụ karịa ahịa nkịtị." },
      { objective: "O1", q: "Ozi doro anya na-ekwu:", options: ["Naanị nọmba ekwentị gị", "Akụkọ ndụ gị", "Ihe ị na-enye, onye ọ bụ maka ya na ihe mere ha ga-eji họrọ gị", "Ọ dịghị ihe a kapịrị ọnụ"], answer: 2, why: "Akụkụ atọ ndị a na-eme ka ozi doo anya." },
      { objective: "O1", q: "AI tụrụ aro ụdị ndị ahịa atọ. Ị kwesịrị:", options: ["Ịhọrọ nke dabara ezi ndị ahịa ma meziwanye ya", "Iji ha atọ n'agụghị ha", "Ileghara ihe ị maara anya", "Ibipụta ha dị ka mgbasa ozi"], answer: 0, why: "AI na-atụ aro echiche; gị na-ekpebi site n'ihe ị maara." },
      { objective: "O2", q: "Kedu ngwakọta dị mma maka otu izu nke ozi?", options: ["Otu onyinye ahụ ugboro ise", "Naanị meme", "Naanị logo gị", "Ndụmọdụ, ihe na-egosi ọrụ n'azụ, akụkọ onye ahịa, onyinye na ajụjụ"], answer: 3, why: "Ụdị dị iche iche na-eme ka ndị mmadụ nwee mmasị." },
      { objective: "O2", q: "\"Debe oge ugbu a\" na njedebe ozi bụ:", options: ["Ikwupụta", "Oku ime ihe", "Template", "Conversion"], answer: 1, why: "Ọ na-agwa onye na-agụ ya nzọụkwụ na-esote." },
      { objective: "O2", q: "Tupu i bipụta ozi AI dere, lelee:", options: ["Naanị emoji", "Eziokwu, ọnụahịa, ụbọchị na okwu e kwuru", "Ọ dịghị ihe ọ bụla", "Okwuntughe gị"], answer: 1, why: "AI nwere ike ime mperi n'eziokwu ma ọ bụ kwubiga okwu ókè." },
      { objective: "O3", q: "Na Canva, template bụ:", options: ["Akwụkwọ iwu", "Mgbasa ozi a kwụrụ ụgwọ", "Ndepụta ndị ahịa", "Nhazi e meworo emecha nke ị na-agbanwe"], answer: 3, why: "Template na-echekwa oge ma e mere ha n'ogo saịtị ọ bụla." },
      { objective: "O3", q: "Brand dị mfe na-eji:", options: ["Otu agba ole na ole, mkpụrụ akwụkwọ na aha gị na foto ọ bụla", "Agba ọhụrụ kwa ụbọchị", "Enweghị aha ọ bụla", "Logo e detuoro"], answer: 0, why: "Ịdakọ ọnụ na-eme ka a mata gị." },
      { objective: "O3", q: "Kedu foto ị na-ekwesịghị iji?", options: ["Foto nke gị nke ọrụ gị", "Foto e nwere ikike iji", "Foto i detuoro site na saịtị ụlọ ọrụ ọzọ", "Ihe template Canva e kwere gị iji"], answer: 2, why: "Jiri naanị foto i nwere ikike iji." },
      { objective: "O4", q: "Ndị ole kwesịrị ịnata email ahịa gị?", options: ["Adreesị ọ bụla ị nwere ike ịchọta", "Ndepụta email e zụtara", "Ndị ọbịa ọ bụla", "Ndị kwenyere ịnụ site n'aka gị"], answer: 3, why: "Zigara ndị họọrọ ịnụ site n'aka gị." },
      { objective: "O4", q: "Ntụziaka ụlọ ọrụ U.S. kedu na-akọwa CAN-SPAM maka azụmahịa?", options: ["Department of Transportation", "NASA", "Federal Trade Commission (FTC)", "Naanị Postal Service"], answer: 2, why: "FTC na-ebipụta ntụziaka ịgbaso CAN-SPAM." },
      { objective: "O4", q: "Isiokwu email na-ekwu \"Akaụntụ gị kwụsịrị\" maka email ire ahịa. Nke a bụ:", options: ["Ahịa dị mma", "Okwu na-eduhie eduhie, megidekwa CAN-SPAM", "Ihe a chọrọ", "Ikwupụta"], answer: 1, why: "Isiokwu ga-egosi ihe ozi ahụ bụ n'ezie." },
      { objective: "O4", q: "Ọ bụrụ na onye ọrụ ọzọ na-ezipụ email ahịa gị, onye ka ọ dịịrị ịgbaso CAN-SPAM?", options: ["Ọ ka dịịrị gị", "Naanị onye ọrụ ahụ", "Ọ dịghị onye ọ bụla", "Onye ahịa"], answer: 0, why: "FTC na-ekwu na ọ ka bụ ọrụ gị." },
      { objective: "O5", q: "\"#ad\" na mmalite ozi bụ ọmụmaatụ nke:", options: ["Oku ime ihe", "Template", "Ikwupụta", "Reach"], answer: 2, why: "Ọ na-agwa ndị na-agụ ya na e nwere njikọ a kwụrụ ụgwọ." },
      { objective: "O5", q: "Iji AI dee nyocha kpakpando ise maka ụlọ ahịa gị bụ:", options: ["Aghụghọ, a nabataghịkwa ya", "Ahịa amamihe", "Ihe a chọrọ", "Ọ dị mma ma ọ bụrụ na ha dị ka ezi ihe"], answer: 0, why: "Nyocha adịgboroja na-aghọgbu ndị ahịa." },
      { objective: "O5", q: "Ebee ka ị ga-elele iwu mgbasa ozi U.S. nke ugbu a?", options: ["Kọmenti ọ bụla dị n'ịntanetị", "Naanị mkparịta ụka AI", "Onye na-asọ mpi na gị", "Peeji ntụziaka azụmahịa nke FTC"], answer: 3, why: "Iwu na-agbanwe; FTC bụ ebe ọchịchị kwadoro." },
      { objective: "O6", q: "Reach na-atụ:", options: ["Ọnụọgụ ndị zụtara", "Ọnụọgụ ndị hụrụ ozi gị", "Uru gị", "Afọ ndụ onye na-eso gị"], answer: 1, why: "Reach bụ ọnụọgụ ndị hụrụ ya." },
      { objective: "O6", q: "Isi nọmba ebumnuche ozi onyinye na-abụkarị:", options: ["Naanị nchekwa", "Klik ma ọ bụ ndokwa", "Ogo mkpụrụ akwụkwọ", "Ọnụọgụ hashtag"], answer: 1, why: "Onyinye na-achọ ime ka ndị mmadụ mee ihe." },
      { objective: "O6", q: "Mgbe ị na-arịọ AI ka ọ nyochaa nsonaazụ gị, ị kwesịrị ịkesa:", options: ["Aha ndị ahịa na nọmba ekwentị ha", "Okwuntughe gị", "Nọmba kaadị", "Naanị nọmba, n'enweghị aha ndị ahịa"], answer: 3, why: "Debe ozi nzuzo n'ebe ngwa AI na-adịghị." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      2,
      5,
      6,
      8,
      10,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nkọwa onye ahịa",
        objective: "O1",
        notYet: "Nkọwa ahụ adịghị ma ọ bụ na-akọwa \"onye ọ bụla\".",
        meets: "Otu paragraf banyere onye onye ahịa ahụ bụ, mkpa ya, nchegbu ya na ebe ọ nọ n'ịntanetị.",
        exceeds: "Ozi ọ bụla na email ahụ na-agwa otu onye ahịa a okwu nke ọma."
      },
      {
        name: "Ozi ise",
        objective: "O2",
        notYet: "Ozi na-erughị ise, ma ọ bụ ozi nwere eziokwu e leleghị ma ọ bụ okwu ị na-apụghị igosi.",
        meets: "Ozi ise dị iche iche, nke ọ bụla nwere oku ime ihe, e lelere eziokwu ha.",
        exceeds: "Ozi ndị ahụ dị ka okwu onye nwe azụmahịa, ọ bụghị ka ihe nkịtị AI dere."
      },
      {
        name: "Foto mgbasa ozi",
        objective: "O3",
        notYet: "Foto adịghị, okwu juputara na ha, ma ọ bụ ha na-eji foto i nweghị ikike iji.",
        meets: "Foto dị ọcha maka ozi ọ bụla nwere otu agba na mkpụrụ akwụkwọ brand ahụ.",
        exceeds: "Na-eji ezi foto nke ọrụ azụmahịa ahụ n'onwe ya."
      },
      {
        name: "Email ahịa",
        objective: "O4",
        notYet: "Isiokwu na-eduhie eduhie, ma ọ bụ adreesị ma ọ bụ ụzọ isi kwụsị ịnata ya adịghị.",
        meets: "Isiokwu nwere eziokwu, o doro anya na ọ bụ onyinye, adreesị ebe obibi na ụzọ isi kwụsị ịnata ya.",
        exceeds: "Na-ekwukwa otu a ga-esi mezuo arịrịọ ịkwụsị n'ime ụbọchị ọrụ 10."
      },
      {
        name: "Mpempe nsochi",
        objective: "O6",
        notYet: "Enweghị mpempe nsochi, ma ọ bụ enweghị nọmba ebumnuche maka ozi ọ bụla.",
        meets: "Mpempe na-edepụta otu nọmba ebumnuche maka ozi ọ bụla na ebe a ga-ahụ nsonaazụ ya.",
        exceeds: "E dejupụtara nsonaazụ, ma atụmatụ izu na-abịa dabere na ha."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Azụmahịa ndị na-aga n'ihu ibipụta ozi kwa izu opekata mpe izu anọ mgbe ihe ọmụmụ a gwụrụ (nnyocha nsochi)",
      "Ndị nwe azụmahịa kwuru na ha nwetara ndokwa, oku ma ọ bụ ire ahịa karịa site n'ahịa n'ịntanetị n'ime ụbọchị 60",
      "Azụmahịa ndị na-etinye ngwụcha (footer) na-agbaso CAN-SPAM n'email ahịa ọ bụla"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) na atụmatụ n'efu nke Canva",
      "Google Sheets ma ọ bụ Excel maka mpempe nsochi",
      "Ezi foto ole na ole nke ọrụ azụmahịa ahụ, ma ọ bụrụ na ha dị",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunye otu izu iji bipụta ma sochie"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; gosi otu prompt na otu template Canva na ihuenyo ọha.",
      "Mee ka ndị na-amụ ihe jiri azụmahịa nke ha, ma ọ bụ azụmahịa omume, ka ngwa ahịa ahụ dị njikere iji.",
      "Lelee email ọ bụla maka isiokwu nwere eziokwu, adreesị na ụzọ isi kwụsị ịnata ya tupu onye ọ bụla ezipụ ya.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye aha ndị ahịa ma ọ bụ ozi ịkpọtụrụ ha n'ime ngwa AI mgbe ọ bụla.",
      "Jiri rubric tụọ akara ngwa ahịa ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

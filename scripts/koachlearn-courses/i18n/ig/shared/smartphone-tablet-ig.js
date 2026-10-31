"use strict";

// Koach Learn course (Igbo translation of shared/smartphone-tablet.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smartphone-tablet-ig",
  lang: "ig",
  translationOf: "smartphone-tablet",
  category: "Seniors and Technology",
  name: "Iji Smartphone na Tablet",
  skills: "Iji ihuenyo mmetụ, Oku na ozi ederede, Ise foto na iziga ya, Iwụnye app n'enweghị nsogbu, Ikpọchi na imelite ngwaọrụ gị",
  outcome: "iji smartphone ma ọ bụ tablet n'onwe gị: imeghe ya, ịkpọ oku, iziga ozi ederede na foto, iwụnye app site n'ezi ụlọ ahịa app, na idebe ngwaọrụ ahụ ka ọ kpọchiri ma dịrị ọhụrụ.",
  about: [
    "Smartphone ma ọ bụ tablet na-enye gị ohere ịkpọ ezinụlọ gị oku ma zigara ha ozi, ịhụ foto ụmụ ụmụ gị, ịlele ihu igwe, ịchọta ụgbọ ala, na ịgwa dọkịta gị okwu. Ihe ọmụmụ a bụ maka onye ọ bụla ngwaọrụ ndị a dị ọhụrụ n'anya ya ma ọ bụ onye chọrọ inwekwu obi ike.",
    "Ị ga-amụta ihuenyo mmetụ, oku na ozi ederede, igwefoto, otu esi wụnye app n'enweghị nsogbu, na otu esi edebe ngwaọrụ gị ka ọ kpọchiri ma dịrị ọhụrụ. Nzọụkwụ ndị a na-arụ ọrụ na ekwentị Android na iPhone na iPad; ebe ha dị iche, anyị ga-agwa gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" ka ngwaọrụ gị dị n'aka gị. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Site n'iji ekwentị ma ọ bụ tablet nke gị: meghee ya, kpọọ onye ị maara oku ma ọ bụ oku vidiyo, zigara ya ozi ederede nwere foto i sere ugbu a, wụnye otu app n'efu bara uru site n'ezi ụlọ ahịa app, ma lelee na mkpọchi ihuenyo gị dị ndụ, na ngwanrọ gị dị ọhụrụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nwere smartphone ma ọ bụ tablet ọhụrụ ma ọ bụ nke ha anaghị eji nke ukwuu: ndị agadi, ndị ezinụlọ ma ọ bụ mmemme nyere ekwentị, ndị na-alọta n'obodo, ndị bịara ọhụrụ na ndị na-elekọta ndị ọzọ.",
    startingPoint: "Ha nwere ike ịgbanye ngwaọrụ ahụ ma nwee ike ịza oku. Ọtụtụ amaghị nke ọma otu esi agagharị n'ihuenyo mmetụ, ịgbanwe nha mkpụrụ akwụkwọ, ichekwa kọntaktị, iziga foto, iwụnye app n'enweghị nsogbu ma ọ bụ idebe ngwaọrụ ahụ ka ọ kpọchiri ma dịrị ọhụrụ.",
    gap: "Ugbu a, ekwentị na tablet bụ ụzọ ndị mmadụ si eru ezinụlọ, dọkịta, ụlọ ọgwụ, ụlọ akụ na ọrụ ndị ọzọ. Ndị na-enweghị ike iji ha n'onwe ha na-atụfu oku na ozi, na-esiri ha ike ịgụ ihuenyo, na-awụnye app adịgboroja, ma ọ bụ na-atụfu ozi nzuzo mgbe ekwentị furu efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa mmegharị mkpịsị aka na okwu dị ka icon na ikike (permission)",
      "Ngwaọrụ: ekwentị Android, iPhone ma ọ bụ tablet nke onye na-amụ ihe n'onwe ya; e nyere nzọụkwụ maka ha abụọ",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: naanị app n'efu, site n'ezi ụlọ ahịa app",
      "Nzuzo: ndị na-amụ ihe anaghị ekesa koodu ozi ederede mgbe ọ bụla n'aka onye kpọrọ oku, ha anaghịkwa ezigara ndị ha na-amaghị foto ID ma ọ bụ kaadị ụlọ akụ"
    ],
    prerequisites: "Ọ dịghị. Achọrọ ekwentị ma ọ bụ tablet nwere chaja."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ekwentị ma ọ bụ tablet nke gị", action: "imeghe ya, iji pịa (tap), swaịpụ (swipe), pịa ma jide, na pinch, imeghe app ma laghachi n'ihuenyo mbụ (home screen)", standard: "n'enweghị onye nyere gị aka" },
    { id: "O2", condition: "N'ime app Settings", action: "ịgbanwe nha mkpụrụ akwụkwọ, ìhè ihuenyo na olu ka ọ dị mfe ịhụ na ịnụ", standard: "ka nke ọ bụla dị n'ọkwa dabara gị" },
    { id: "O3", condition: "Mgbe e nyere gị onye ị chọrọ ịkpọtụrụ", action: "ichekwa ya dị ka kọntaktị, ịkpọ ya oku ma zigara ya ozi ederede, na ịza ndị na-akpọ oku ị na-amaghị n'enweghị nsogbu", standard: "ka e mee oku ahụ ma ziga ozi ahụ, n'enyeghị onye kpọrọ oku koodu ọ bụla mgbe ọ bụla" },
    { id: "O4", condition: "Site n'iji app Camera na Photos ma ọ bụ Gallery", action: "ise foto doro anya ma zigara onye ị maara ya n'ozi ederede", standard: "ka foto ahụ doo anya, na-enweghị ihe nzuzo ọ bụla n'ime ya" },
    { id: "O5", condition: "N'ezi ụlọ ahịa app", action: "ịchọta na iwụnye app n'efu mgbe i lelechara onye mere ya (developer), akara ọkwa (rating) na nyocha (reviews), ma họrọ ikike ị ga-ekwe", standard: "na-ekwe naanị ikike app ahụ chọrọ n'ezie" },
    { id: "O6", condition: "Na ngwaọrụ nke gị", action: "ịgbanye mkpọchi ihuenyo siri ike, ịlele mmelite ngwanrọ (software update) ma gbanye Find My Device ma ọ bụ Find My", standard: "na mkpọchi na-adịghị mfe ịkọ, na ngwaọrụ ahụ dị ọhụrụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmata ngwaọrụ gị nke ọma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ndabere ihuenyo mmetụ: pịa, swaịpụ na ihuenyo mbụ",
          minutes: 5,
          goal: "Meghee ngwaọrụ gị, meghee app ma laghachi n'ihuenyo mbụ.",
          text: [
            "Smartphone bụ ekwentị nke bụkwa obere kọmputa. Tablet bụ otu ihe ahụ nwere ihuenyo buru ibu. Ọtụtụ n'ime ha na-eji Android (Google mere ya, Samsung, Motorola na ndị ọzọ na-eji ya) ma ọ bụ iOS na iPadOS (Apple mere ha maka iPhone na iPad).",
            "Ị na-eji mkpịsị aka gị achịkwa ya. Pịa (tap): metụ ma hapụ, iji meghee ihe. Swaịpụ (swipe): fee mkpịsị aka gị n'ihuenyo, iji gaa n'ibe ọzọ ma ọ bụ rịgoo ma rịdata. Pịa ma jide: debe mkpịsị aka gị n'ala, iji hụ nhọrọ ndị ọzọ. Pinch: gbasaa mkpịsị aka abụọ iji mee ka ihe buo ibu, chịkọta ha iji mee ka ihe dị obere.",
            "Ihuenyo mbụ (home screen) na-egosi app gị dị ka obere foto a na-akpọ icon. Iji laghachi n'ihuenyo mbụ, swaịpụ elu site n'ọnụ ala ihuenyo, ma ọ bụ pịa bọtịnụ home ma ọ bụrụ na ngwaọrụ gị nwere ya."
          ],
          steps: ["Pịa bọtịnụ dị n'akụkụ ma ọ bụ n'elu iji kpọte ihuenyo.", "Swaịpụ elu ma tinye koodu gị, ma ọ bụ jiri akara mkpịsị aka ma ọ bụ ihu gị.", "Pịa icon app iji meghee ya.", "Swaịpụ elu site n'ala (ma ọ bụ pịa bọtịnụ home) iji laghachi n'ihuenyo mbụ.", "Gbasaa mkpịsị aka abụọ na foto iji mee ka ọ buo ibu."],
          words: [["Smartphone", "ekwentị nke bụkwa obere kọmputa nwere ihuenyo mmetụ."], ["Icon", "obere foto ị na-apị iji meghee app."], ["Ihuenyo mbụ (home screen)", "ihuenyo isi na-egosi app gị."], ["Swaịpụ (swipe)", "ife mkpịsị aka gị n'ihuenyo."]],
          slides: [
            { title: "Ụdị abụọ bụ isi", bullets: ["Android: Samsung, Motorola, Google Pixel na ndị ọzọ", "iPhone na iPad nke Apple"] },
            { title: "Mmegharị mkpịsị aka", bullets: ["Pịa: meghee ihe", "Swaịpụ: rịgoo, rịdata ma ọ bụ gbanwee ibe", "Pịa ma jide: nhọrọ ndị ọzọ", "Pinch: mee ka ihe buo ibu ma ọ bụ dị obere"] },
            { title: "Ilaghachi n'ihuenyo mbụ", bullets: ["Swaịpụ elu site n'ọnụ ala ihuenyo", "Ma ọ bụ pịa bọtịnụ home ma ọ bụrụ na i nwere ya"] }
          ],
          tryIt: "Kpọte ngwaọrụ gị ma meghee ya. Meghee app Camera ma ọ bụ Weather, swaịpụ gburugburu, wee laghachi n'ihuenyo mbụ. Mee ya ugboro atọ ruo mgbe ọ dị gị mfe.",
          youCanNow: "imeghe ngwaọrụ gị, iji ịpị meghee app, iji swaịpụ rịgoo ma rịdata, na ilaghachi n'ihuenyo mbụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ịpị ma jide na-eme?", options: ["Ọ na-agbanyụ ekwentị", "Ọ na-egosi nhọrọ ndị ọzọ", "Ọ na-ese foto", "Ọ na-akpọ oku"], answer: 1, why: "Idebe mkpịsị aka gị n'ala na-egosi nhọrọ ndị ọzọ." },
            { objective: "O1", q: "Ị nọ n'ime app, ị chọkwara ilaghachi n'ihuenyo mbụ. Gịnị ka ị ga-eme?", options: ["Gbanyụọ ekwentị ma gbanye ya ọzọ", "Chịkọta mkpịsị aka abụọ", "Wepụ batrị", "Swaịpụ elu site n'ọnụ ala, ma ọ bụ pịa bọtịnụ home"], answer: 3, why: "Iswaịpụ elu site n'ala, ma ọ bụ bọtịnụ home, na-akpọghachi gị n'ihuenyo mbụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime ka ọ dị mfe ịhụ na ịnụ",
          minutes: 4,
          goal: "Mee ka mkpụrụ akwụkwọ buo ibu, ma mee ka olu na ìhè ihuenyo dabara gị.",
          text: [
            "Ị nwere ike ịgbanwe ngwaọrụ gị ka ọ dị mfe iji. Ihe ndị a niile dị n'ime app Settings, nke na-enwekarị icon gia (gear).",
            "Mkpụrụ akwụkwọ buru ibu: meghee Settings, chọọ Display ma ọ bụ Accessibility, ma chọta text size ma ọ bụ font size. Ìhè ihuenyo (brightness): chọta ya na Display, ma ọ bụ swaịpụ ala site n'elu ihuenyo maka njikwa ngwa ngwa. Olu (volume): jiri bọtịnụ ndị dị n'akụkụ.",
            "Ọ bụrụ na ị chọtaghị ihe, jiri igbe ọchụchọ dị n'elu Settings ma dee okwu dị ka \"text size\". Ngwaọrụ Android na Apple nwekwara ihe enyemaka (accessibility) dị ka iko mbuli (magnifier) na ịgụpụta ihe dị n'ihuenyo n'olu dị elu."
          ],
          steps: ["Meghee app Settings (icon gia).", "Pịa igbe ọchụchọ dị n'elu ma dee \"text size\".", "Megharịa slider ahụ ruo mgbe mkpụrụ akwụkwọ dị mfe ịgụ.", "Swaịpụ ala site n'elu iji gbanwee ìhè ihuenyo.", "Jiri bọtịnụ ndị dị n'akụkụ maka olu."],
          words: [["Settings", "app ebe ị na-agbanwe otu ngwaọrụ gị si arụ ọrụ."], ["Accessibility", "ihe enyemaka na-eme ka ọ dị mfe ịhụ, ịnụ ma ọ bụ imetụ ngwaọrụ."]],
          slides: [
            { title: "App Settings", bullets: ["Na-enwekarị icon gia", "Ebe ị na-agbanwe otu ngwaọrụ gị si arụ ọrụ"] },
            { title: "Dị mfe ịhụ na ịnụ", bullets: ["Nha mkpụrụ akwụkwọ na Display ma ọ bụ Accessibility", "Ìhè ihuenyo na Display ma ọ bụ njikwa ngwa ngwa", "Olu: bọtịnụ ndị dị n'akụkụ"] },
            { title: "Ị chọtaghị ya?", bullets: ["Jiri igbe ọchụchọ dị n'elu Settings", "Dee okwu dị ka \"text size\""] }
          ],
          tryIt: "Meghee Settings, chọọ \"text size\" ma mee ka mkpụrụ akwụkwọ buo ibu otu nzọụkwụ. Wee swaịpụ ala site n'elu ma gbanwee ìhè ihuenyo.",
          youCanNow: "ime ka mkpụrụ akwụkwọ buo ibu, na idozi ìhè ihuenyo na olu ka ngwaọrụ gị dị mfe iji.",
          quickCheck: [
            { objective: "O2", q: "Kedu icon app Settings na-enwekarị?", options: ["Igwefoto", "Afụ okwu", "Gia", "Ntụtụ akwụkwọ"], answer: 2, why: "Settings na-enwekarị icon gia." },
            { objective: "O2", q: "Ihuenyo gbara ọchịchịrị nke ukwuu ịgụ n'èzí. Gịnị ka ị ga-eme?", options: ["Swaịpụ ala site n'elu ma mee ka ìhè ihuenyo dị elu", "Zụta ekwentị ọhụrụ", "Pịa bọtịnụ olu", "Hichapụ otu app"], answer: 0, why: "A na-ahụ njikwa ngwa ngwa maka ìhè ihuenyo site n'iswaịpụ ala site n'elu ihuenyo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Oku, kọntaktị na ozi ederede",
          minutes: 5,
          goal: "Chekwaa kọntaktị, kpọọ oku ma ziga ozi ederede.",
          text: [
            "App Phone na-akpọ oku. App Contacts (n'ekwentị ụfọdụ ọ bụ akụkụ nke app Phone) na-echekwa aha na nọmba, ka i nwee ike ịkpọ oku site n'ịpị aha kama ide nọmba.",
            "App Messages na-eziga ozi ederede. Pịa bọtịnụ ozi ọhụrụ, họrọ kọntaktị, dee n'igbe dị n'ala, ma pịa akụ iziga (send).",
            "Ọ bụrụ na nọmba ị na-amaghị akpọọ gị, ị nwere ike ikwe ka ọ gaa na voicemail. Ezi onye kpọrọ oku ga-ahapụ ozi. Enyela onye kpọrọ gị oku koodu sitere n'ozi ederede mgbe ọ bụla."
          ],
          steps: ["Meghee Contacts (ma ọ bụ Phone, wee Contacts).", "Pịa bọtịnụ + iji tinye mmadụ: aha na nọmba. Chekwaa (Save).", "Pịa aha ahụ, wee pịa icon ekwentị iji kpọọ oku.", "Meghee Messages ma pịa bọtịnụ ozi ọhụrụ.", "Họrọ kọntaktị ahụ, dee ozi gị ma pịa send."],
          words: [["Kọntaktị (contact)", "aha na nọmba ekwentị echekwara."], ["Ozi ederede (text message)", "obere ozi e dere ede, e zitere site n'otu ekwentị gaa n'ọzọ."], ["Voicemail", "ozi olu e dekọrọ mgbe ị zaghị oku."]],
          slides: [
            { title: "App atọ", bullets: ["Phone: kpọọ oku", "Contacts: chekwaa aha na nọmba", "Messages: ziga ozi ederede"] },
            { title: "Tinye kọntaktị", bullets: ["Pịa +", "Tinye aha na nọmba", "Pịa Save"] },
            { title: "Ziga ozi ederede", bullets: ["Bọtịnụ ozi ọhụrụ", "Họrọ kọntaktị ahụ", "Dee ma pịa akụ send"] },
            { title: "Ndị na-akpọ oku ị na-amaghị", bullets: ["Kwe ka ha gaa na voicemail", "Enyela onye kpọrọ oku koodu sitere n'ozi ederede"] }
          ],
          tryIt: "Chekwaa otu onye ezinụlọ gị ma ọ bụ enyi gị dị ka kọntaktị. Kpọọ ya oku site n'ịpị aha ya, wee zigara ya obere ozi ederede: \"Ana m eji ekwentị m amụ ihe!\"",
          youCanNow: "ichekwa kọntaktị, ịkpọ mmadụ oku site n'aha ya na iziga ozi ederede.",
          quickCheck: [
            { objective: "O3", q: "Kedu app na-eziga ozi ederede?", options: ["Messages", "Camera", "Settings", "Photos"], answer: 0, why: "App Messages na-eziga ozi ederede." },
            { objective: "O3", q: "Nọmba ị na-amaghị kpọrọ gị oku. Gịnị ka ị ga-eme?", options: ["Zaa ya ma nye ozi ụlọ akụ gị", "Kpọghachi ozugbo ma gụpụta koodu ọ bụla", "Kwe ka ọ gaa na voicemail; ezi onye kpọrọ oku ga-ahapụ ozi", "Gbanyụọ ekwentị gị otu izu"], answer: 2, why: "Ikwe ka oku ị na-amaghị gaa na voicemail enweghị nsogbu; ezi ndị na-akpọ oku na-ahapụ ozi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmata ngwaọrụ gị nke ọma",
        questions: [
          { objective: "O1", q: "Kedu mmegharị mkpịsị aka na-eme ka foto buo ibu?", options: ["Pịa otu ugboro", "Gbasaa mkpịsị aka abụọ", "Pịa bọtịnụ olu", "Swaịpụ ala"], answer: 1, why: "Ịgbasa mkpịsị aka abụọ na-eme ka ihe buo ibu." },
          { objective: "O1", q: "Kedu otu i si alaghachikarị n'ihuenyo mbụ?", options: ["Gbanyụọ ekwentị", "Maa ekwentị jijiji", "Swaịpụ elu site n'ala ma ọ bụ pịa bọtịnụ home", "Meghee igwefoto"], answer: 2, why: "Iswaịpụ elu site n'ala ma ọ bụ ịpị home na-akpọghachi gị n'ihuenyo mbụ." },
          { objective: "O2", q: "Mkpụrụ akwụkwọ dị n'ekwentị gị dị obere nke ukwuu. Ebee ka ị ga-edozi ya?", options: ["Settings, n'okpuru Display ma ọ bụ Accessibility", "App Camera", "App Phone", "Ozi ederede"], answer: 0, why: "Nha mkpụrụ akwụkwọ dị na Settings n'okpuru Display ma ọ bụ Accessibility." },
          { objective: "O3", q: "Gịnị mere i ji echekwa mmadụ dị ka kọntaktị?", options: ["Ọ na-eme ka ekwentị dị ngwa", "Ọ na-achaji batrị", "Ọ na-ezo nọmba ya", "Ka i nwee ike ịkpọ ya oku ma ọ bụ zigara ya ozi site n'ịpị aha ya"], answer: 3, why: "Kọntaktị na-enye gị ohere iru mmadụ site n'aha ya." },
          { objective: "O3", q: "Mmadụ kpọrọ oku ma rịọ ka ị gụọrọ ya koodu e zitere gị ugbu a n'ozi ederede. Gịnị ka ị ga-eme?", options: ["Gụọrọ ya ya", "Zigara ya ya n'ozi ederede", "Ekesala ya ma kwụsị oku ahụ", "Tinye ya n'ịntanetị"], answer: 2, why: "Koodu ahụ na-echebe akaụntụ gị; ezi ụlọ ọrụ anaghị arịọ ya." }
        ]
      }
    },
    {
      name: "Isi 2: Foto, app na ichebe ngwaọrụ gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ise foto na iziga ya",
          minutes: 5,
          goal: "See foto ma zigara mmadụ ya n'ozi ederede.",
          text: [
            "Meghee app Camera, chee ya ihu n'ihe ị chọrọ ise, ma pịa bọtịnụ gburugburu buru ibu. Jide ngwaọrụ ahụ ka ọ ghara imegharị. Pịa ihuenyo n'ebe ihe ị na-ese dị iji mee ka ọ doo anya.",
            "A na-echekwa foto gị n'ime app Photos ma ọ bụ Gallery. Iji ziga otu, meghee ya, pịa bọtịnụ Share (ọ na-abụkarị igbe nwere akụ ma ọ bụ ntụpọ atọ e jikọrọ ọnụ n'ahịrị), ma họrọ Messages ma ọ bụ email, wee họrọ onye ahụ.",
            "Chee echiche tupu i kesaa. Ezigala foto ID gị, kaadị ụlọ akụ, tiketi nwere barcode, ma ọ bụ ihe ọ bụla nzuzo nye ndị ị na-amaghị."
          ],
          steps: ["Meghee app Camera.", "Chee ya ihu, jide ya ka ọ ghara imegharị, ma pịa ihe ị na-ese iji mee ka ọ doo anya.", "Pịa bọtịnụ gburugburu buru ibu.", "Meghee Photos ma ọ bụ Gallery ma pịa foto ahụ.", "Pịa Share, họrọ Messages, họrọ onye ahụ ma ziga."],
          words: [["Gallery ma ọ bụ Photos", "app ebe e chekwara foto gị."], ["Bọtịnụ Share", "bọtịnụ na-eziga foto ma ọ bụ faịlụ nye mmadụ ma ọ bụ app ọzọ."]],
          slides: [
            { title: "See foto", bullets: ["Meghee app Camera", "Pịa ihe ị na-ese ka ọ doo anya", "Pịa bọtịnụ gburugburu buru ibu"] },
            { title: "Ziga foto", bullets: ["Meghee Photos ma ọ bụ Gallery", "Pịa Share", "Họrọ Messages na onye ahụ"] },
            { title: "Chee echiche tupu i kesaa", bullets: ["Ọ dịghị foto ID ma ọ bụ kaadị ụlọ akụ", "Ọ dịghị akwụkwọ nzuzo nye ndị ị na-amaghị"] }
          ],
          tryIt: "See foto nke ihe mara mma dị nso gị: osisi, nri ma ọ bụ ebe ọma. Zigara ya kọntaktị i chekwara na Nkuzi 3 n'ozi ederede.",
          youCanNow: "ise foto doro anya ma kesaa ya mmadụ n'ozi ederede.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka bọtịnụ Share na-enye gị ohere ime na foto?", options: ["Hichapụ ya", "Mee ka ọ buo ibu", "See ya ọzọ", "Ziga ya n'ozi ederede ma ọ bụ email"], answer: 3, why: "Share na-enye gị ohere ịhọrọ Messages ma ọ bụ email na onye ị ga-ezigara foto ahụ." },
            { objective: "O4", q: "Foto gị na-apụta n'enweghị nchapụta (blurry). Gịnị ka ị ga-eme?", options: ["Maa ekwentị jijiji mgbe ị na-ese", "Jide ya ka ọ ghara imegharị ma pịa ihe ị na-ese n'ihuenyo tupu i see", "Mee ka ìhè ihuenyo dị ala", "See ya site n'ebe dị anya nke ukwuu"], answer: 1, why: "Ijide ya ka ọ ghara imegharị na ịpị ihe ị na-ese na-eme ka foto ahụ doo anya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iwụnye app n'enweghị nsogbu",
          minutes: 5,
          goal: "Chọta ma wụnye app n'efu site n'ezi ụlọ ahịa app.",
          text: [
            "App na-agbakwunye ihe ọhụrụ ngwaọrụ gị nwere ike ime: maapụ, ihu igwe, oku vidiyo, ụlọ akụ gị, ụlọ ọgwụ gị. Nweta ha naanị site n'ezi ụlọ ahịa: Google Play Store na Android, ma ọ bụ App Store na iPhone na iPad.",
            "Chọọ app ahụ site n'aha ya. Tupu i wụnye, lelee aha ụlọ ọrụ mere ya (developer), ọnụ ọgụgụ nyocha (reviews), na akara ọkwa (rating). App adịgboroja na-eṅomi aha ezi app, ya mere hụ na o si n'ezi ụlọ ọrụ ahụ.",
            "Mgbe app rịọrọ ikike (permission) iji ebe ị nọ, igwefoto, kọntaktị ma ọ bụ igwe okwu (microphone) gị, jụọ onwe gị ma ọ chọrọ ya n'ezie. App ọkụ (flashlight) achọghị kọntaktị gị. Ị nwere ike ịsị mba, ma gbanwee ya emesịa na Settings."
          ],
          steps: ["Meghee Play Store (Android) ma ọ bụ App Store (Apple).", "Pịa Search ma dee aha app ahụ.", "Lelee aha developer, akara ọkwa na ọnụ ọgụgụ nyocha.", "Pịa Install ma ọ bụ Get.", "Mgbe a rịọrọ ikike, kwe naanị ihe kwesịrị ekwesị."],
          words: [["App", "mmemme dị n'ekwentị ma ọ bụ tablet gị nke na-arụ otu ụdị ọrụ."], ["Developer", "ụlọ ọrụ ma ọ bụ onye mere app ahụ."], ["Ikike (permission)", "nkwenye gị ka app jiri ihe dị ka igwefoto gị ma ọ bụ ebe ị nọ."]],
          slides: [
            { title: "Naanị ezi ụlọ ahịa app", bullets: ["Android: Google Play Store", "iPhone na iPad: App Store"] },
            { title: "Tupu i wụnye", bullets: ["Lelee na developer bụ ezi ụlọ ọrụ ahụ", "Lee akara ọkwa na ọnụ ọgụgụ nyocha", "App adịgboroja na-eṅomi aha ezi app"] },
            { title: "Ikike (permissions)", bullets: ["App ahụ ọ chọrọ ya n'ezie?", "App ọkụ (flashlight) achọghị kọntaktị gị", "Ị nwere ike ịgbanwe ya emesịa na Settings"] }
          ],
          tryIt: "Meghee ezi ụlọ ahịa app gị ma wụnye otu app n'efu bara gị uru, dị ka app ihu igwe, app ụlọ ọgwụ gị ma ọ bụ app ụgbọ ala. Buru ụzọ lelee aha developer.",
          youCanNow: "ịchọta, ịlele na iwụnye app site n'ezi ụlọ ahịa, ma kpebie ikike ị ga-ekwe.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere i ji elele aha developer tupu i wụnye app?", options: ["Ịchọta ọnụ ahịa app n'ụlọ ahịa", "Ịgbanwe nha mkpụrụ akwụkwọ ekwentị", "App adịgboroja na-eṅomi aha ezi app, ya mere hụ na o si n'ezi ụlọ ọrụ ahụ", "Ịhụ onye kpọrọ gị oku"], answer: 2, why: "App adịgboroja na-eṅomi aha ezi app, ya mere aha developer na-egosi ma ọ bụ ezi app." },
            { objective: "O5", q: "App egwuregwu rịọrọ ikike iji igwe okwu (microphone) na kọntaktị gị. Gịnị ka ị ga-eme?", options: ["Sị mba ma ọ bụrụ na ọ chọghị ha n'ezie; ị nwere ike ịgbanwe ya emesịa na Settings", "Kwe ihe niile mgbe niile", "Hichapụ kọntaktị gị", "Nye ya okwuntughe gị"], answer: 0, why: "Kwe naanị ikike app chọrọ n'ezie; ị nwere ike ịgbanwe ha emesịa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idebe ngwaọrụ gị ka ọ kpọchiri, dị ọhụrụ ma nwee chaja",
          minutes: 5,
          goal: "Gbanye mkpọchi ihuenyo ma lelee mmelite ngwanrọ.",
          text: [
            "Mkpọchi ihuenyo na-egbochi ndị ọzọ iji ekwentị gị ma ọ bụrụ na ọ furu efu ma ọ bụ e zuru ya. Jiri koodu PIN nwere opekata mpe nọmba isii, ma ọ bụ akara mkpịsị aka ma ọ bụ ihu gị. Ejila 123456 ma ọ bụ ụbọchị ọmụmụ gị.",
            "Mmelite (updates) na-edozi nsogbu nchekwa. Chọta ha na Settings: na Android chọọ Software update ma ọ bụ System update; na iPhone na iPad gaa na General, wee Software Update. Tinye ya na chaja ma jiri Wi-Fi mgbe ị na-emelite.",
            "Ọ bụrụ na ekwentị gị efuo, Find My Device nke Android na Find My nke Apple nwere ike igosi ya na maapụ ma ọ bụ kpọchie ya. Gbanye ha ugbu a, mgbe ọ ka dị n'aka gị."
          ],
          steps: ["Meghee Settings ma chọọ \"screen lock\" ma ọ bụ \"passcode\".", "Tọọ PIN nwere opekata mpe nọmba isii, ma ọ bụ akara mkpịsị aka ma ọ bụ ihu.", "Chọọ \"software update\" na Settings ma wụnye mmelite ọ bụla.", "Chọọ \"Find My\" na Settings ma hụ na agbanyere ya.", "Chajie ngwaọrụ gị abalị ọ bụla."],
          words: [["PIN", "koodu nọmba na-emeghe ngwaọrụ gị."], ["Mmelite ngwanrọ (software update)", "ndozi na nkwalite n'efu sitere n'aka ụlọ ọrụ mere ngwaọrụ ahụ."], ["Find My Device / Find My", "ngwa Android na Apple na-enyere gị aka ịchọta ngwaọrụ furu efu."]],
          slides: [
            { title: "Kpọchie ihuenyo gị", bullets: ["PIN nwere nọmba isii ma ọ bụ karịa", "Ma ọ bụ akara mkpịsị aka ma ọ bụ ihu", "Ọ bụghị 123456 ma ọ bụ ụbọchị ọmụmụ gị"] },
            { title: "Melite ngwaọrụ gị", bullets: ["Mmelite na-edozi nsogbu nchekwa", "Settings, wee Software update", "Tinye na chaja ma jiri Wi-Fi"] },
            { title: "Ọ bụrụ na ọ furu efu", bullets: ["Android: Find My Device", "Apple: Find My", "Gbanye ya ugbu a"] }
          ],
          tryIt: "Omume maka ọrụ ikpeazụ: lelee na mkpọchi ihuenyo gị dị ndụ, chọọ \"software update\" na Settings ka ị hụ ma mmelite na-eche, ma gbanye Find My Device ma ọ bụ Find My. Wee mee ọrụ ikpeazụ: kpọọ oku, ziga foto ọhụrụ n'ozi ederede, ma wụnye otu app bara uru.",
          youCanNow: "idebe ngwaọrụ gị ka ọ kpọchiri, dị ọhụrụ, ma bụrụ nke a ga-achọta ma ọ bụrụ na ọ furu efu.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke n'ime ndị a bụ mkpọchi ihuenyo na-adịghị ike?", options: ["Akara mkpịsị aka gị", "Ihu gị", "PIN nọmba isii siri ike ịkọ", "123456"], answer: 3, why: "123456 ma ọ bụ ụbọchị ọmụmụ gị dị mfe ịkọ." },
            { objective: "O6", q: "Ị chọrọ inwe ike ịchọta ekwentị gị ma ọ bụrụ na ọ furu efu. Gịnị ka ị ga-eme ugbu a?", options: ["Chere ruo mgbe ọ furu efu, wee chọọ ntọala", "Gbanye Find My Device (Android) ma ọ bụ Find My (Apple)", "Dee PIN gị n'azụ ekwentị", "Gbanyụọ mkpọchi ihuenyo"], answer: 1, why: "A ga-agbanye ngwa ndị a mgbe ekwentị ka dị n'aka gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Foto, app na ichebe ngwaọrụ gị",
        questions: [
          { objective: "O4", q: "Ebee ka e chekwara foto ndị i sere?", options: ["N'ime app Phone", "N'ime Photos ma ọ bụ Gallery", "N'ime Settings", "N'ime ụlọ ahịa app"], answer: 1, why: "App Photos ma ọ bụ Gallery na-ejide foto gị." },
          { objective: "O5", q: "Ebee bụ ebe n'enweghị nsogbu iji nweta app na iPhone?", options: ["Njikọ (link) n'ozi ederede onye ị na-amaghị", "Weebụsaịtị ọ bụla", "Mgbasa ozi na-apụta na mberede", "App Store"], answer: 3, why: "Wụnye app naanị site n'ezi ụlọ ahịa." },
          { objective: "O5", q: "App ọkụ (flashlight) rịọrọ ịhụ kọntaktị gị. Kedu nhọrọ kacha mma?", options: ["Sị mba; ọ chọghị ha", "Kwe ihe niile", "Nye ya okwuntughe gị", "Hichapụ kọntaktị gị"], answer: 0, why: "Kwe naanị ikike app chọrọ n'ezie." },
          { objective: "O6", q: "Kedu mkpọchi ihuenyo kacha sie ike?", options: ["Enweghị mkpọchi", "123456", "Ụbọchị ọmụmụ gị", "PIN nọmba isii na-adịghị mfe ịkọ"], answer: 3, why: "PIN na-adịghị pụta ìhè siri ike ịkọ." },
          { objective: "O6", q: "Gịnị mere i ji awụnye mmelite ngwanrọ?", options: ["Ha na-ehichapụ foto gị", "Ha na-edozi nsogbu nchekwa", "Ha na-efu ego", "Ha na-agbanyụ ekwentị ruo mgbe ebighị ebi"], answer: 1, why: "Mmelite na-edozi nsogbu ndị omekome nwere ike iji." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji Smartphone na Tablet",
    questions: [
      { objective: "O1", q: "Kedu ụlọ ọrụ na-emepụta iPhone?", options: ["Samsung", "Google", "Apple", "Motorola"], answer: 2, why: "Apple na-emepụta iPhone na iPad." },
      { objective: "O1", q: "Gịnị ka ịpị (tap) na-eme?", options: ["Ọ na-emeghe ihe", "Ọ na-agbanyụ ekwentị", "Ọ na-ehichapụ app", "Ọ na-akpọ oku n'onwe ya"], answer: 0, why: "Ịpị ngwa ngwa na-emeghe app ma ọ bụ họrọ ihe." },
      { objective: "O1", q: "Iji rịdata n'ibe, ị na-:", options: ["Pinch", "Pịa bọtịnụ ike (power)", "Swaịpụ elu ma ọ bụ ala", "Maa ngwaọrụ jijiji"], answer: 2, why: "Iswaịpụ na-ebugharị ibe ahụ." },
      { objective: "O1", q: "A na-akpọ obere foto ndị dị n'ihuenyo mbụ:", options: ["Kọntaktị", "Icon", "Ozi ederede", "Mmelite"], answer: 1, why: "Icon bụ foto ị na-apị iji meghee app." },
      { objective: "O2", q: "Kedu app nwere icon gia ma na-enye gị ohere ịgbanwe nha mkpụrụ akwụkwọ?", options: ["Camera", "Messages", "Settings", "Photos"], answer: 2, why: "Settings bụ ebe ị na-agbanwe otu ngwaọrụ si arụ ọrụ." },
      { objective: "O2", q: "Ị chọtaghị otu ntọala. Kedu ihe kacha ngwa?", options: ["Zụta ekwentị ọhụrụ", "Jiri igbe ọchụchọ dị n'elu Settings", "Gbanyụọ ya ma gbanye ya ọzọ", "Meghee igwefoto"], answer: 1, why: "Ọchụchọ Settings na-achọta ihe site n'aha ya." },
      { objective: "O2", q: "Ebee ka ị nwere ike ịgbanwe ìhè ihuenyo ngwa ngwa n'ọtụtụ ngwaọrụ?", options: ["Swaịpụ ala site n'elu ihuenyo", "App Phone", "Ụlọ ahịa app", "Kọntaktị gị"], answer: 0, why: "Njikwa ngwa ngwa dị n'elu gụnyere ìhè ihuenyo." },
      { objective: "O3", q: "Iji kpọọ mmadụ oku site n'ịpị aha ya, buru ụzọ:", options: ["Wụnye app ọhụrụ", "Chekwaa ya dị ka kọntaktị", "See foto ya", "Melite ekwentị"], answer: 1, why: "Kọntaktị echekwara na-ejikọ aha na nọmba." },
      { objective: "O3", q: "Kedu app na-eziga ozi ederede?", options: ["Camera", "Settings", "Weather", "Messages"], answer: 3, why: "Messages na-eziga ma na-anata ozi ederede." },
      { objective: "O3", q: "Nọmba ị na-amaghị kpọrọ oku. Nhọrọ n'enweghị nsogbu bụ:", options: ["Kwe ka ọ gaa na voicemail", "Nye ha koodu sitere n'ozi ederede gị", "Gwa ha PIN gị", "Zigara ha foto kaadị ụlọ akụ gị"], answer: 0, why: "Ezi onye kpọrọ oku ga-ahapụ ozi na voicemail." },
      { objective: "O4", q: "Iji mee ka foto doo anya, ị na-:", options: ["Maa ekwentị jijiji", "Pịa ihe ị na-ese n'ihuenyo tupu i see", "Gbanyụọ ihuenyo", "Chịkọta mkpịsị aka"], answer: 1, why: "Ịpị ihe ị na-ese na-agwa igwefoto ebe ọ ga-elekwasị anya." },
      { objective: "O4", q: "Iji ziga foto, meghee ya ma pịa:", options: ["Delete", "Olu", "Settings", "Share"], answer: 3, why: "Share na-eziga foto ahụ nye mmadụ ma ọ bụ app." },
      { objective: "O4", q: "Kedu foto ị na-ekwesịghị iziga onye ị na-amaghị mgbe ọ bụla?", options: ["Ọdịda anyanwụ", "Okooko osisi", "ID gị ma ọ bụ kaadị ụlọ akụ gị", "Nri ehihie gị"], answer: 2, why: "A pụrụ iji ID na kaadị zuo gị ihe." },
      { objective: "O5", q: "Ezi ụlọ ahịa app na Android bụ:", options: ["Njikọ n'ozi ederede", "Mgbasa ozi na-apụta na mberede", "Weebụsaịtị ọ bụla", "Google Play Store"], answer: 3, why: "Google Play bụ ezi ụlọ ahịa Android." },
      { objective: "O5", q: "Tupu i wụnye app, lelee:", options: ["Ọ dịghị ihe", "Naanị agba icon ahụ", "Developer, akara ọkwa na nyocha", "Ego dị n'akaụntụ ụlọ akụ gị"], answer: 2, why: "App adịgboroja na-eṅomi aha, ya mere lelee onye mere ya." },
      { objective: "O5", q: "Ikike (permission) bụ:", options: ["Otu ụdị foto", "Nkwenye gị ka app jiri ihe dị ka igwefoto ma ọ bụ ebe ị nọ", "Ụgwọ ekwentị", "Otu ụdị ozi ederede"], answer: 1, why: "App na-arịọ ikike iji akụkụ nke ngwaọrụ gị." },
      { objective: "O6", q: "Mkpọchi ihuenyo na-enyere aka n'ihi na:", options: ["Ọ na-eme ka oku dị ọnụ ala", "Ọ na-ese foto", "Ọ na-eme ka mkpụrụ akwụkwọ buo ibu", "Ọ na-egbochi ndị ọzọ iji ekwentị gị ma ọ bụrụ na ọ furu efu"], answer: 3, why: "Mkpọchi na-edebe ozi gị na nzuzo." },
      { objective: "O6", q: "Na iPhone, Software Update dị n'okpuru:", options: ["Camera", "Photos", "Messages", "Settings, wee General"], answer: 3, why: "Mmelite iPhone dị na Settings, General, Software Update." },
      { objective: "O6", q: "Mgbe ị na-awụnye mmelite buru ibu, ọ kacha mma:", options: ["Ịgbanyụ Wi-Fi", "Inwe batrị dị ala", "Iji Wi-Fi ma tinye ya na chaja", "Ime ya mgbe ị nọ n'oku"], answer: 2, why: "Wi-Fi na ọkụ eletrik na-egbochi mmelite ahụ ịkwụsị n'etiti." },
      { objective: "O6", q: "Find My Device (Android) na Find My (Apple) na-enyere gị aka:", options: ["Ịchọta atụmatụ ekwentị dị ọnụ ala", "Ịchọta ndị enyi ọhụrụ", "Ịchọta app n'efu", "Ịchọta ngwaọrụ furu efu na maapụ"], answer: 3, why: "Ha na-egosi, kpọchie ma ọ bụ kpọọ ngwaọrụ furu efu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 4, 6, 7, 9, 11, 12, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Oku", objective: "O3", notYet: "A kpọghị oku ma ọ bụ oku vidiyo, ma ọ bụ onye na-amụ ihe chọrọ enyemaka ịchọta onye ahụ.", meets: "Na-akpọ kọntaktị echekwara oku ma ọ bụ oku vidiyo n'enweghị enyemaka.", exceeds: "Na-ebukwa ụzọ chekwaa kọntaktị ọhụrụ nwere aha na nọmba." },
      { name: "Ozi ederede nwere foto", objective: "O4", notYet: "E zighị ozi ederede ma ọ bụ foto ahụ, ma ọ bụ foto ahụ na-egosi ozi nzuzo.", meets: "Na-ese foto doro anya ma zigara onye ọ maara ya n'ozi ederede.", exceeds: "Na-eji bọtịnụ Share site na Photos ma ọ bụ Gallery ma tinye obere ozi." },
      { name: "Iwụnye app", objective: "O5", notYet: "Ọ wụnyeghị app ọ bụla, ma ọ bụ o si n'èzí ezi ụlọ ahịa app.", meets: "Otu app n'efu wụnyere site n'ezi ụlọ ahịa mgbe o lelechara developer na nyocha.", exceeds: "Na-asịkwa mba n'ikike app ahụ na-achọghị." },
      { name: "Mkpọchi na mmelite", objective: "O6", notYet: "Enweghị mkpọchi ihuenyo, ma ọ bụ mkpọchi dị mfe dị ka 123456.", meets: "Mkpọchi ihuenyo siri ike dị ndụ, ngwanrọ dịkwa ọhụrụ.", exceeds: "Agbanyekwara Find My Device ma ọ bụ Find My." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla nke rubric ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha na-eji ekwentị ma ọ bụ tablet ha n'onwe ha maka oku, ozi ederede na foto mgbe ụbọchị 30 gachara (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha wụnyere app bara uru, dị ka app ụlọ ọgwụ, ụlọ akụ ma ọ bụ oku vidiyo, n'enweghị nsogbu site n'ezi ụlọ ahịa",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka Ihe ndabere ịntanetị ma ọ bụ Email na nkwurịta okwu n'ịntanetị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ tablet nke onye na-amụ ihe n'onwe ya, nwere chaja (Android, iPhone ma ọ bụ iPad)",
      "Wi-Fi maka iwụnye app na mmelite",
      "Nọmba enyi ma ọ bụ onye ezinụlọ, ma ọ bụ nke onye ibe na klas, maka ịkpọ oku na iziga ozi ederede",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Kewaa ndị na-amụ ihe n'otu site n'ụdị ngwaọrụ (Android ma ọ bụ Apple) ka nzọụkwụ dị n'ihuenyo dabara ihe ha na-ahụ.",
      "Kwe ka ndị na-amụ ihe pịa ihe niile n'onwe ha; ọ bụrụ na ị ga-egosi ihe, jiri ngwaọrụ nke gị.",
      "Iwụnye app ụfọdụ na-arịọ okwuntughe akaụntụ; kwe ka onye na-amụ ihe dee ya na nzuzo, ma ajụla ma ọ bụ dee PIN ma ọ bụ okwuntughe ha mgbe ọ bụla.",
      "Mee ka ndị na-amụ ihe kpọọ ibe ha oku ma zigara ibe ha ozi ederede na klas, ka onye ọ bụla ghara ikesa nọmba nkeonwe ọ na-achọghị ikesa.",
      "Bute chaja ma hazie mmelite maka njedebe nke oge nkuzi, n'ihi na ha nwere ike iwe ogologo oge."
    ]
  }
};

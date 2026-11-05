"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-family-connection.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-family-connection-ig",
  lang: "ig",
  translationOf: "seniors-ai-family-connection",
  category: "Seniors and Technology",
  name: "AI maka Mkparịta Ụka na Njikọ Ezinụlọ",
  skills: "Iji AI dee ozi dị ọkụ n'obi, Iziga ozi ederede ma ọ bụ email, Ịbanye n'oku vidiyo, Ikesa foto, Ichebe onwe gị n'ozi ezinụlọ",
  outcome: "iji ngwa enyemaka AI dee ozi dị ọkụ n'obi nye onye ezinụlọ gị, iziga ya site n'ozi ederede ma ọ bụ email, na ịhazi ma banye n'oku vidiyo gị na ha.",
  about: [
    "Ihe ọmụmụ a bụ maka nne nne na nna nna, ndị nne na nna, nwanne nne ma ọ bụ nwanne nna, na ndị enyi chọrọ ịnọ nso ndị ha hụrụ n'anya, ọbụlagodi mgbe ha bi n'ebe dị anya.",
    "Ị ga-eji ngwa enyemaka AI chọta okwu kwesịrị ekwesị maka ụbọchị ọmụmụ, ozi ka onye ọrịa gbakee, ma ọ bụ naanị ekele. Mgbe ahụ ị ga-eziga ozi gị, kesaa foto, ma banye n'oku vidiyo ka ị hụ ihu ndị ezinụlọ gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-agakwa otu nzọụkwụ n'otu oge. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". Ọ ga-aka mma ka gị na onye ezinụlọ gị na-eji ngwa ndị a mụọ ya. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI dee obere ozi dị ọkụ n'obi na-akpọ onye ezinụlọ gị ka unu kparịta ụka n'oku vidiyo. Gbanwee otu ihe ka o yie okwu gị, ziga ya site n'ozi ederede ma ọ bụ email, wee banye n'oku ahụ n'oge unu kwekọrịtara ma kelee ha.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ịnọ nso ụmụ ha, ụmụ ụmụ ha na ndị ikwu ha ndị ọzọ bi n'ebe dị anya ma ọ bụ na-arụsi ọrụ ike. Ọtụtụ na-eche na a hapụrụ ha mgbe ezinụlọ na-akparịta ụka site n'ozi ederede, vidiyo na foto.",
    startingPoint: "Ha nwere ike ịkpọ oku ma nwee ike iziga obere ozi ederede. Ụfọdụ nwere smartphone ma ọ bụ tablet mana ha ejibeghị ngwa enyemaka AI, detuo ma tinye ihe (copy na paste), banye n'oku vidiyo ma ọ bụ kesaa foto.",
    gap: "Ugbu a, ndụ ezinụlọ na-aga site n'ozi ederede, oku vidiyo na ikesa foto. Ndị okenye nwere ike iji enyemaka AI dee ozi dị ọkụ n'obi, ziga ya, banye n'oku vidiyo ma kesaa foto na-anọgide na njikọ, owu na-amakwa ha obere. Ndị nwere ike ịmata ihe mberede ezinụlọ adịgboroja na-echebe ego ha chekwara.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu dị mfe",
      "Ngwaọrụ: smartphone, tablet ma ọ bụ kọmputa nwere igwefoto; ọ nwere ike isi ike ịpị obere bọtịnụ",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, nwayọọ nwayọọ, gbakwunyere oku omume gị na ezinụlọ gị",
      "Ndị ezinụlọ na-eji app dị iche iche; ndị na-amụ ihe na-eji nke ezinụlọ ha na-ejiworị",
      "Ihe egwu aghụghọ dị elu: eziganla ego ma ọ bụ koodu tupu i jiri nọmba ị maara kpọọ ezinụlọ gị"
    ],
    prerequisites: "Ọ ga-aba uru ibu ụzọ were \"AI maka Ndị Okenye: Iji Ngwa Enyemaka AI\", mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịrịọ maka ozi mbụ (draft) nye onye ezinụlọ nke na-ekwu onye ọ bụ maka ya, ihe ọ gbasara, otu o kwesịrị ịdị na ogologo ya", standard: "nke mere na ozi mbụ ahụ ga-adaba onye ahụ" },
    { id: "O2", condition: "Mgbe e nyere gị ozi mbụ AI dere", action: "ịgbanwe ozi ahụ ka o yie okwu gị ma tinye otu ihe pụrụ iche gbasara gị", standard: "nke mere na ọ ga-adị ka okwu nkịtị mgbe ị gụpụtara ya n'olu dị elu" },
    { id: "O3", condition: "Mgbe e nyere gị ozi emechara n'ime app AI", action: "idetuo ya ma tinye ya n'ozi ederede ma ọ bụ email, wee ziga ya", standard: "nye ezi onye ahụ, lelee ya tupu ị pịa Send" },
    { id: "O4", condition: "Mgbe onye ezinụlọ gị kpọrọ gị oku vidiyo ma ọ bụ zitere gị njikọ (link)", action: "ịbanye n'oku ahụ ma gbanwuo maikrofọn na igwefoto", standard: "ka ha hụ ihu gị nke ọma ma nụ olu gị" },
    { id: "O5", condition: "Site n'iji igwefoto ekwentị ma ọ bụ tablet gị", action: "ise foto ma kesaa ya na onye ezinụlọ gị ya na obere okwu n'okpuru ya", standard: "n'enweghị onye nyere gị aka" },
    { id: "O6", condition: "Mgbe ozi ma ọ bụ oku kwuru na onye ezinụlọ gị nọ na nsogbu ma chọọ ego", action: "ịmata ihe ịdọ aka na ntị nke aghụghọ ihe mberede ezinụlọ ma lelee ya site n'ịkpọ nọmba ị nwereworị", standard: "n'ezigaghị ego ma ọ bụ koodu ọ bụla tupu i lelee" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchọta okwu kwesịrị ekwesị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI nyere aka dee ozi nye ezinụlọ",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka o dee obere ozi mbụ nye onye ezinụlọ gị.",
          text: [
            "Mgbe ụfọdụ, ihe kacha sie ike n'ịnọgide na-akpọtụrụ ndị mmadụ bụ ịmara ihe ị ga-ekwu. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini nwere ike idere gị ozi mbụ (draft) n'ime sekọnd ole na ole.",
            "Gwa ya onye ozi ahụ bụ maka ya, ihe ọ gbasara, na otu ị chọrọ ka o si daa. Dịka ọmụmaatụ: \"Dee obere ozi ederede nwere ọṅụ nye nwa nwa m nwoke Leo, onye mechara izu mbụ ya na mahadum. Obi dị m ụtọ maka ya. Ka ọ ghara ịgafe okwu 40.\"",
            "Ozi mbụ ahụ bụ mmalite, ọ bụghị okwu ikpeazụ. Ị maara ezinụlọ gị; ngwa enyemaka ahụ amaghị ha."
          ],
          steps: ["Meghee ngwa enyemaka AI gị.", "Kwuo onye ozi ahụ bụ maka ya na ihe ọ gbasara.", "Kwuo otu o kwesịrị isi daa: ọṅụ, nwayọọ, ọchị ma ọ bụ dị mfe.", "Kwuo otu ogologo o kwesịrị ịdị."],
          words: [["Ozi mbụ (draft)", "ụdị mbụ nke ozi ị nwere ike ịgbanwe tupu i ziga ya."], ["Ụda ozi (tone)", "otu ozi si daa, dị ka ọkụ n'obi, ọchị ma ọ bụ nke dị mkpa."]],
          slides: [
            { title: "Okwu na-agwụ gị?", bullets: ["Ngwa enyemaka AI nwere ike ide ozi mbụ", "Ọ na-ewe naanị sekọnd ole na ole"] },
            { title: "Gwa ya ihe anọ", bullets: ["Onye ọ bụ maka ya", "Ihe ọ gbasara", "Otu o kwesịrị isi daa", "Otu ogologo o kwesịrị ịdị"] },
            { title: "Cheta", bullets: ["Ozi mbụ bụ mmalite", "Ị maara ezinụlọ gị karịa"] }
          ],
          tryIt: "Chee echiche otu onye ezinụlọ ị ga-achọ ịnụ olu ya. Rịọ ngwa enyemaka ka o dee obere ozi dị ọkụ n'obi nye ya maka ihe dị adị, dị ka ụbọchị ọmụmụ, ọrụ ọhụrụ ma ọ bụ naanị ekele.",
          youCanNow: "ịrịọ ngwa enyemaka AI ka o dee obere ozi mbụ nye onye ị hụrụ n'anya.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ozi mbụ (draft) AI dere?", options: ["Ozi ikpeazụ AI na-eziga n'ọnọdụ gị", "Ozi si n'aka ezinụlọ gị", "Mmalite ị nwere ike ịgbanwe", "Koodu nzuzo"], answer: 2, why: "Ozi mbụ bụ mmalite; ị maara ezinụlọ gị, ngwa enyemaka ahụ amaghị ha." },
            { objective: "O1", q: "Ị chọrọ ozi maka ụbọchị ọmụmụ nwa nwa gị nwanyị. Gịnị ka ị ga-agwa ngwa enyemaka ahụ?", options: ["Onye ọ bụ maka ya, ihe ọ gbasara, otu o kwesịrị isi daa na otu ogologo o kwesịrị ịdị", "Naanị okwu \"ụbọchị ọmụmụ\"", "Adreesị ụlọ ya na nọmba ekwentị ya", "Ọ dịghị ihe; ọ ga-echepụta ya"], answer: 0, why: "Ikwu onye, ihe, ụda na ogologo na-enweta ozi mbụ dabara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime ka ozi ahụ yie okwu gị",
          minutes: 4,
          goal: "Gbanwee ozi mbụ AI dere ka o yie olu nke gị.",
          text: [
            "Ozi mbụ AI na-ede nwere ike isi ike ntakịrị ma ọ bụ jiri okwu dị oke elu. Ezinụlọ gị ga-ama ma ọ bụrụ na o yighị okwu gị, ya mere mee ka ọ bụrụ nke gị.",
            "Ị nwere ike ịgwa ngwa enyemaka ahụ: \"Mee ka ọ dị nkịtị karị.\" \"Jiri okwu dị mkpụmkpụ.\" \"Tinye na m na-esi achịcha apụl ọ hụrụ n'anya mgbe ọ bịara.\" Ma ọ bụ gị onwe gị gbanwee okwu ndị ahụ.",
            "Tinye otu ihe naanị gị ga-ama: aha otutu, ihe unu na-echeta, ma ọ bụ njakịrị naanị unu ghọtara. Nke ahụ na-eme ka ozi bụrụ nke gị n'ezie."
          ],
          steps: ["Gụpụta ozi mbụ ahụ n'olu dị elu.", "Gosi okwu ọ bụla ị na-agaghị ekwu mgbe ọ bụla.", "Rịọ maka mgbanwe, ma ọ bụ gị onwe gị gbanwee okwu ndị ahụ.", "Tinye otu ihe naanị gị maara."],
          words: [["Ihe pụrụ iche gbasara gị", "ihe gbasara gị na onye ahụ, dị ka ihe unu na-echeta ma ọ bụ aha otutu."]],
          slides: [
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Gụpụta ozi mbụ n'olu dị elu", "Gbanwee okwu ị na-agaghị ekwu mgbe ọ bụla"] },
            { title: "Rịọ maka mgbanwe", bullets: ["\"Mee ka ọ dị nkịtị karị.\"", "\"Jiri okwu dị mkpụmkpụ.\"", "\"Tinye na m na-esi achịcha ọ hụrụ n'anya.\""] },
            { title: "Tinye ihe nke gị", bullets: ["Aha otutu", "Ihe unu na-echeta ọnụ", "Njakịrị naanị unu ghọtara"] }
          ],
          tryIt: "Were ozi mbụ gị site na Nkuzi 1. Gụpụta ya n'olu dị elu, gbanwee otu ihe ka o yie okwu gị, ma tinye otu ihe pụrụ iche gbasara gị.",
          youCanNow: "ịgbanwe ozi mbụ AI dere ka ọ bụrụ ozi yiri okwu gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji gbanwee ozi mbụ AI dere tupu i ziga ya?", options: ["AI na-eme ozi niile ka ha dị mkpụmkpụ nke ukwuu", "Ka o yie okwu gị, n'ihi na ezinụlọ gị ga-ama ma o yighị", "N'ihi na ozi AI na-enwe mkparị mgbe niile", "N'ihi na ozi ederede ga-adị ogologo"], answer: 1, why: "Ozi mbụ AI nwere ike isi ike; ime ka ọ bụrụ nke gị na-eme ka ọ dị nso." },
            { objective: "O2", q: "Ozi mbụ gị dị mma mana o nweghị ụtọ. Gịnị ka ị ga-agbakwunye?", options: ["Uri dị ogologo", "Ozi ụlọ akụ gị", "Ihe naanị gị ga-ama, dị ka aha otutu ma ọ bụ ihe unu na-echeta", "Ọtụtụ okwu dị oke elu"], answer: 2, why: "Aha otutu, ihe unu na-echeta ma ọ bụ njakịrị unu na-eme ka ozi bụrụ nke gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iziga ozi gị site n'ozi ederede ma ọ bụ email",
          minutes: 6,
          goal: "Detuo ozi gị ma ziga ya site n'ozi ederede ma ọ bụ email.",
          text: [
            "Mgbe ozi gị dị njikere, ị ga-ebupụ ya site na ngwa enyemaka AI gaa n'app ozi ederede ma ọ bụ email gị. Ị na-eme nke a site n'idetuo na itinye (copy na paste).",
            "Iji detuo na ekwentị ma ọ bụ tablet: jiri mkpịsị aka gị pịa ederede ahụ ma jide ya ruo mgbe menu pụtara, wee pịa Copy. Ọtụtụ app AI na-egosikwa obere bọtịnụ copy n'okpuru azịza ahụ. Na kọmputa, jiri mouse họrọ ederede ahụ, wee pịa n'aka nri (right-click) ma họrọ Copy.",
            "Wee meghee app Messages ma ọ bụ email gị, malite ozi ọhụrụ nye onye ezinụlọ gị, pịa ma jide n'igbe ozi ahụ ma pịa Paste (na kọmputa, pịa n'aka nri ma họrọ Paste). Gụọ ya otu oge ikpeazụ wee ziga ya."
          ],
          steps: ["Detuo ozi ahụ: pịa ma jide, wee pịa Copy, ma ọ bụ jiri bọtịnụ copy.", "Meghee app Messages ma ọ bụ email gị.", "Malite ozi ọhụrụ nye onye ezinụlọ gị.", "Pịa ma jide n'igbe ozi ahụ ma pịa Paste.", "Gụọ ya ọzọ, wee pịa Send."],
          words: [["Copy na paste", "iwere ederede n'otu ebe tinye ya n'ebe ọzọ, n'ederughị ya ọzọ."], ["Ozi ederede (text message)", "obere ozi e dere ede nke a na-ezi site n'otu ekwentị gaa n'ekwentị ọzọ."]],
          slides: [
            { title: "Detuo ozi ahụ", bullets: ["Pịa ma jide ederede ahụ, wee pịa Copy", "Ma ọ bụ pịa bọtịnụ copy n'okpuru azịza ahụ", "Kọmputa: pịa n'aka nri, wee pịa Copy"] },
            { title: "Tinye ya (Paste)", bullets: ["Meghee Messages ma ọ bụ email", "Malite ozi ọhụrụ", "Pịa ma jide, wee pịa Paste"] },
            { title: "Tupu i ziga", bullets: ["Lelee aha onye ahụ", "Gụọ ya ọzọ", "Pịa Send"] }
          ],
          tryIt: "Detuo ozi gị emechara site na Nkuzi 2 ma ziga ya nye onye ezinụlọ gị site n'ozi ederede ma ọ bụ email.",
          youCanNow: "idetuo ozi site na ngwa enyemaka AI ma ziga ya site n'ozi ederede ma ọ bụ email.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Paste na-eme?", options: ["Ọ na-etinye ederede i detuuru n'ebe ọhụrụ", "Ọ na-ehichapụ ozi gị", "Ọ na-eziga ozi ahụ ozugbo", "Ọ na-ese foto"], answer: 0, why: "Ị na-edetuo ederede n'otu app ma tinye ya n'igbe ozi nke app ọzọ." },
            { objective: "O3", q: "I detuola ozi gị site n'app AI. Gịnị ka ị ga-eme ọzọ?", options: ["Mechie ekwentị gị", "Detuo ya ọzọ", "Kpọọ onye ezinụlọ ahụ oku", "Meghee Messages ma ọ bụ email, malite ozi nye ha ma tinye ya"], answer: 3, why: "Meghee app Messages ma ọ bụ email, malite ozi ọhụrụ ma tinye ederede ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchọta okwu kwesịrị ekwesị",
        questions: [
          { objective: "O1", q: "Gịnị ka ị ga-agwa ngwa enyemaka AI mgbe ị na-arịọ ozi maka ezinụlọ?", options: ["Nọmba ụlọ akụ gị", "Naanị otu okwu", "Onye ọ bụ maka ya, ihe ọ gbasara, ụda ya na ogologo ya", "Okwuntughe gị"], answer: 2, why: "Ihe anọ ndị ahụ na-enyere ngwa enyemaka aka ide ozi mbụ bara uru." },
          { objective: "O2", q: "Ozi mbụ ahụ na-eji okwu dị oke elu. Gịnị ka ị ga-eme?", options: ["Rịọ ya ka ọ dị nkịtị karị ma ọ bụ gị onwe gị gbanwee okwu ndị ahụ", "Hichapụ app ahụ", "Ziga ya otu o si dị", "Kwụsị"], answer: 0, why: "Ị nwere ike ịrịọ maka mgbanwe ma ọ bụ dezie ya ka o yie okwu gị." },
          { objective: "O2", q: "Gịnị na-eme ka ozi bụrụ nke gị n'ezie?", options: ["Idetuo kaadị site n'ụlọ ahịa", "Okwu dị ogologo nke ukwuu", "Ọtụtụ akara mkpu (!)", "Ihe naanị gị ga-ama, dị ka ihe unu na-echeta"], answer: 3, why: "Ihe unu na-echeta ọnụ ma ọ bụ aha otutu na-eme ka ọ bụrụ nke gị." },
          { objective: "O3", q: "Na ekwentị, kedu otu ị na-esikarị detuo ederede?", options: ["Mee ka ekwentị maa jijiji", "Pịa ma jide ederede ahụ, wee pịa Copy", "Gbanyụọ ekwentị", "See foto ya"], answer: 1, why: "Ịpị ma jide na-emeghe menu nwere Copy." },
          { objective: "O3", q: "Gịnị ka ị ga-elele tupu ị pịa Send?", options: ["Naanị ike batrị", "Na ọ na-aga n'ebe ezi onye ahụ", "Ọ dịghị ihe", "Ihu igwe"], answer: 1, why: "Ilele aha ahụ na-egbochi iziga ozi gị nye onye na-abụghị ya." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhụ ezinụlọ na ikesa ihe na ha",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịbanye n'oku vidiyo",
          minutes: 6,
          goal: "Banye n'oku vidiyo gị na onye ezinụlọ gị ma jiri igwefoto na maikrofọn.",
          text: [
            "Oku vidiyo na-eme ka ị hụ ma nụ olu mmadụ n'otu oge, site n'ebe ọ bụla. App ndị a ma ama na-akwụghị ụgwọ gụnyere FaceTime (na iPhone na iPad), WhatsApp, Google Meet na Zoom. Ezinụlọ na-ahọrọkarị nke ọtụtụ n'ime ha na-ejiworị.",
            "Ụzọ kacha mfe isi malite bụ ikwe ka onye ezinụlọ gị kpọọ gị. Mgbe oku ahụ bịara, pịa bọtịnụ akwụkwọ ndụ ma ọ bụ Accept. Ọ bụrụ na ha ezitere gị njikọ (link), pịa njikọ ahụ n'oge unu kwekọrịtara wee pịa Join.",
            "Mgbe ị banyere n'oku ahụ, chọta bọtịnụ maikrofọn na igwefoto. Ọ bụrụ na bọtịnụ nwere ahịrị gafere ya, ọ gbanyụrụ; pịa ya ka ọ gbanwuo. Jide ngwaọrụ ahụ n'ogo anya gị, ka ìhè dị n'ihu gị, ọ bụghị n'azụ gị, ka ha hụ ihu gị."
          ],
          steps: ["Gị na onye ezinụlọ gị kwekọrịta oge na app.", "Mgbe oku ahụ bịara, pịa Accept, ma ọ bụ pịa njikọ ha zitere wee pịa Join.", "Lelee na maikrofọn na igwefoto gbanwụrụ.", "Jide ngwaọrụ ahụ n'ogo anya gị ka ìhè dị n'ihu gị.", "Pịa bọtịnụ uhie iji kwụsị oku ahụ."],
          words: [["Oku vidiyo", "oku ebe unu na-ahụ ma na-anụ onwe unu n'ihuenyo."], ["Njikọ (link)", "ederede na-acha anụnụ anụnụ ma ọ bụ nwere ahịrị n'okpuru ị na-apị iji gaa ebe, dị ka oku."], ["Mute", "igbanyụ maikrofọn gị ka ndị ọzọ ghara ịnụ olu gị."]],
          slides: [
            { title: "App oku vidiyo n'efu", bullets: ["FaceTime na iPhone na iPad", "WhatsApp, Google Meet, Zoom", "Jiri nke ezinụlọ gị na-eji"] },
            { title: "Ịbanye", bullets: ["Pịa Accept mgbe ha kpọrọ", "Ma ọ bụ pịa njikọ ha, wee pịa Join", "Banye n'oge unu kwekọrịtara"] },
            { title: "N'ime oku ahụ", bullets: ["Ahịrị gafere bọtịnụ pụtara na ọ gbanyụrụ", "Gbanwuo maikrofọn na igwefoto", "Bọtịnụ uhie na-akwụsị oku ahụ"] },
            { title: "Ka ha hụ gị nke ọma", bullets: ["Ngwaọrụ n'ogo anya gị", "Ìhè n'ihu gị, ọ bụghị n'azụ gị"] }
          ],
          tryIt: "Rịọ onye ezinụlọ gị ka ọ kpọọ gị n'app ọ na-eji. Zaa ya, lelee na igwefoto na maikrofọn gị gbanwụrụ, kelee ya, wee jiri bọtịnụ uhie kwụsị oku ahụ.",
          youCanNow: "ịbanye n'oku vidiyo, ịgbanwu na igbanyụ igwefoto na maikrofọn gị, na ịkwụsị oku ahụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ oku vidiyo?", options: ["Ihe nkiri e dekọrọ adekọ", "Oku ebe unu na-ahụ ma na-anụ onwe unu n'otu oge", "Ozi olu", "Akwụkwọ foto"], answer: 1, why: "Oku vidiyo na-eme ka ị hụ ma nụ olu mmadụ n'otu oge, site n'ebe ọ bụla." },
            { objective: "O4", q: "N'oku vidiyo, ezinụlọ gị kwuru na ha anaghị ahụ ihu gị nke ọma. Gịnị ka ị ga-agbanwe?", options: ["Bulie olu ekwentị", "Kwụsị oku ahụ", "Nọdụ ala ka windo na-enwu nke ọma dị n'azụ gị", "Jide ngwaọrụ ahụ n'ogo anya gị ka ìhè dị n'ihu gị"], answer: 3, why: "Ogo anya na ìhè n'ihu gị na-eme ka ha hụ ihu gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ikesa foto na ezinụlọ",
          minutes: 5,
          goal: "See foto ma ziga ya nye onye ezinụlọ gị.",
          text: [
            "Ikesa foto bụ otu n'ime ụzọ kacha mma isi nọrọ nso. Ị nwere ike iziga foto ubi gị, nri i siri, ma ọ bụ otu peeji site n'akwụkwọ foto ochie.",
            "Meghee app Camera, chee ya ihe ị chọrọ, wee pịa bọtịnụ okirikiri buru ibu. Iji ziga ya, meghee app Photos ma ọ bụ Gallery, pịa foto ahụ, wee pịa bọtịnụ Share (ọ na-abụkarị igbe nwere akụ, ma ọ bụ ntụpọ atọ e ji ahịrị jikọta). Họrọ Messages, email ma ọ bụ WhatsApp, wee họrọ onye ezinụlọ gị.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ide obere okwu maka foto (caption), dị ka: \"Dee obere okwu na-atọ ụtọ maka foto tomato mbụ m chara n'oge ọkọchị a.\""
          ],
          steps: ["Meghee app Camera ma pịa bọtịnụ okirikiri.", "Meghee Photos ma ọ bụ Gallery ma pịa foto ahụ.", "Pịa bọtịnụ Share.", "Họrọ Messages, email ma ọ bụ WhatsApp, wee họrọ onye ezinụlọ gị.", "Tinye okwu ole na ole ma ziga ya."],
          words: [["Bọtịnụ Share", "bọtịnụ na-eziga foto ma ọ bụ peeji nye onye ọzọ."], ["Caption", "obere ahịrị okwu na-eso foto."]],
          slides: [
            { title: "See foto ahụ", bullets: ["Meghee app Camera", "Pịa bọtịnụ okirikiri buru ibu"] },
            { title: "Ziga foto ahụ", bullets: ["Meghee Photos ma ọ bụ Gallery", "Pịa foto ahụ, wee pịa bọtịnụ Share", "Họrọ app, wee họrọ onye ezinụlọ gị"] },
            { title: "Tinye caption", bullets: ["Gị onwe gị dee okwu ole na ole", "Ma ọ bụ rịọ AI maka obere caption na-atọ ụtọ"] }
          ],
          tryIt: "See foto nke ihe na-eme gị obi ụtọ. Rịọ ngwa enyemaka AI maka obere caption, wee ziga foto ahụ na caption ya nye onye ezinụlọ gị.",
          youCanNow: "ise foto, itinye caption, na ikesa ya na ezinụlọ gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka bọtịnụ Share na-eme n'app Photos?", options: ["Ọ na-ehichapụ foto ahụ", "Ọ na-eme ka foto ahụ buo ibu", "Ọ na-ekwe ka i ziga foto ahụ site na Messages, email ma ọ bụ WhatsApp", "Ọ na-ese foto ọhụrụ"], answer: 2, why: "Pịa foto ahụ, pịa Share, wee họrọ otu na onye ị ga-eziga ya." },
            { objective: "O5", q: "Ị chọrọ okwu ole na ole na-atọ ụtọ maka foto ubi gị. Gịnị ka ị nwere ike ime?", options: ["Rịọ ngwa enyemaka AI ka o dee obere caption", "Ziga foto ahụ n'enweghị okwu ọ bụla mgbe niile", "Tinye ya nye ndị ị na-amaghị", "See foto iri ọzọ"], answer: 0, why: "Ngwa enyemaka AI nwere ike inyere gị aka ide obere caption maka foto." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe onwe gị n'ozi ezinụlọ",
          minutes: 5,
          goal: "Mata ozi \"ihe mberede ezinụlọ\" adịgboroja ma lelee ya n'enweghị nsogbu.",
          text: [
            "Ndị aghụghọ na-eme mgbe ụfọdụ ka hà bụ nwa nwa gị ma ọ bụ onye ikwu gị nọ na nsogbu. Ha nwere ike iziga ozi site na nọmba ọhụrụ (\"Ndewo Nne nne, ekwentị m furu efu\") ma ọ bụ jiri AI ṅomie olu n'ekwentị. Ha na-arịọkarị ego ngwa ngwa, ọtụtụ mgbe site na gift card (kaadị onyinye), izipu ego (wire transfer) ma ọ bụ app ịkwụ ụgwọ, ma rịọ gị ka i zoo ya.",
            "Ezi ezinụlọ nwere ike ichere nkeji ole na ole ka ị na-elele. Kwụsị oku ahụ ma ọ bụ kwụsị ịza ozi, wee kpọọ onye ezinụlọ gị, ma ọ bụ nne ma ọ bụ nna ya, na nọmba ị chekwara.",
            "Ụfọdụ ezinụlọ na-ekwekọrịta n'otu okwu nzuzo ezinụlọ naanị ha maara, iji ya n'oge ihe mberede. Eziganla ego tupu gị na onye ahụ ekwuo okwu na nọmba ị tụkwasịrị obi. Ị nwere ike ịkọ aghụghọ nye Federal Trade Commission (FTC, ọfịs gọọmentị US na-echebe ndị na-azụ ahịa) na ReportFraud.ftc.gov."
          ],
          steps: ["Mata ihe ịrịba ama: nọmba ọhụrụ, ime ngwa ngwa, ịrịọ ego, izo ya.", "Kwụsị ịza ozi ma ọ bụ kwụsị oku ahụ.", "Kpọọ onye ezinụlọ gị na nọmba ị nwereworị.", "Kwekọrịta n'okwu nzuzo ezinụlọ maka ihe mberede.", "Kọọ aghụghọ na ReportFraud.ftc.gov."],
          words: [["Aghụghọ nne nne na nna nna (grandparent scam)", "wayo ebe mmadụ na-eme ka ọ bụ nwa nwa gị nọ na nsogbu iji nweta ego."], ["Okwu nzuzo (code word)", "okwu nzuzo ezinụlọ gị kwekọrịtara iji gosi onye na-akpọ n'ezie."]],
          slides: [
            { title: "Ihe mberede adịgboroja", bullets: ["\"Ndewo Nne nne, ekwentị m furu efu\"", "Olu e ṅomiri n'ekwentị", "Ha na-arịọ ego ngwa ngwa na na nzuzo"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị ịza ozi ma ọ bụ kwụsị oku ahụ", "Kpọọ ha na nọmba ị nwereworị", "Eziganla ego ruo mgbe o doro gị anya"] },
            { title: "Dị njikere", bullets: ["Kwekọrịta n'okwu nzuzo ezinụlọ", "Kọọ aghụghọ na ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: Otu esi ezere aghụghọ", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Kọọ aghụghọ", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Ọrụ ikpeazụ: rịọ ngwa enyemaka AI ka o nyere gị aka dee obere ozi dị ọkụ n'obi na-akpọ onye ezinụlọ gị n'oku vidiyo. Mee ka o yie okwu gị, ziga ya site n'ozi ederede ma ọ bụ email, ma banye n'oku ahụ n'oge unu kwekọrịtara. Mgbe unu na-akparịta ụka, kwekọrịtanụ n'okwu nzuzo ezinụlọ.",
          youCanNow: "ịnọgide na-akpọtụrụ ezinụlọ gị site n'ozi, foto na oku vidiyo, na ilele ozi \"ezinụlọ\" na-enyo enyo n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ okwu nzuzo ezinụlọ?", options: ["Okwuntughe ekwentị gị", "Okwu naanị ezinụlọ gị maara, iji gosi onye na-akpọ n'oge ihe mberede", "Aha app vidiyo gị", "Okwu ị na-etinye n'ịntanetị"], answer: 1, why: "Ụfọdụ ezinụlọ na-ekwekọrịta n'okwu nzuzo iji lelee onye na-akpọ n'ezie." },
            { objective: "O6", q: "Olu yiri nke nwa nwa gị nwoke na-arịọ gị ka i ziga ego ngwa ngwa ma zoo ya. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Ziga ego ahụ ma jụọ ajụjụ emesịa", "Zoo ya dịka ha rịọrọ", "Kwụsị ma kpọọ nwa nwa gị ma ọ bụ nne ma ọ bụ nna ya na nọmba ị nwereworị", "Nye ha koodu dị n'ekwentị gị"], answer: 2, why: "Ime ngwa ngwa, izo ihe na ịrịọ ego bụ ihe ịrịba ama aghụghọ; kpọghachi na nọmba ị tụkwasịrị obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhụ ezinụlọ na ikesa ihe na ha",
        questions: [
          { objective: "O4", q: "Onye ezinụlọ gị zitere gị njikọ maka oku vidiyo. Gịnị ka ị ga-eme n'oge unu kwekọrịtara?", options: ["Hichapụ ya", "Gbanyụọ ekwentị gị", "Ziga ya nye ndị ị na-amaghị", "Pịa njikọ ahụ, wee pịa Join"], answer: 3, why: "Ịpị njikọ ahụ na Join na-akpọbata gị n'oku ahụ." },
          { objective: "O4", q: "Bọtịnụ maikrofọn nwere ahịrị gafere ya. Gịnị ka nke ahụ pụtara?", options: ["Maikrofọn gị gbanyụrụ", "Oku ahụ agwụla", "Batrị fọdụrụ ntakịrị", "Igwefoto gị mebiri emebi"], answer: 0, why: "Ahịrị gafere bọtịnụ pụtara na ọ gbanyụrụ." },
          { objective: "O4", q: "Ebee ka ìhè kwesịrị ịdị n'oge oku vidiyo?", options: ["N'azụ gị", "Ìhè ekwesịghị ịdị", "N'ihu gị", "N'okpuru tebụl"], answer: 2, why: "Ìhè n'ihu gị na-eme ka ezinụlọ gị hụ ihu gị." },
          { objective: "O5", q: "Kedu otu ị ga-esi ziga foto site n'app Photos gị?", options: ["Tụgharịa ekwentị ahụ elu ala", "See foto batrị", "Hichapụ foto ahụ", "Pịa foto ahụ, wee pịa bọtịnụ Share, wee họrọ onye"], answer: 3, why: "Bọtịnụ Share na-eziga foto ahụ site n'app na nye onye ị họọrọ." },
          { objective: "O6", q: "Ozi si na nọmba ọhụrụ kwuru \"Nna nna, anọ m na nsogbu, zitere m gift card ma agwala Mama.\" Gịnị ka ị ga-eme?", options: ["Zụta gift card ndị ahụ", "Zaa ya na nọmba ụlọ akụ gị", "Kpọọ nwa nwa gị ma ọ bụ nne ma ọ bụ nna ya na nọmba ị nwereworị", "Zoo ya"], answer: 2, why: "Ime ngwa ngwa, izo ihe na gift card bụ ihe ịrịba ama aghụghọ; lelee na nọmba ị tụkwasịrị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Mkparịta Ụka na Njikọ Ezinụlọ",
    questions: [
      { objective: "O1", q: "Kedu otu ngwa enyemaka AI nwere ike isi nyere gị aka ịnọgide na-akpọtụrụ ezinụlọ gị?", options: ["Ọ nwere ike ileta ha n'ọnọdụ gị", "Ọ nwere ike ide ozi mbụ", "Ọ maara nọmba ekwentị ha", "Ọ na-eziga ego n'ọnọdụ gị"], answer: 1, why: "Ide ozi mbụ bụ otu n'ime ihe ngwa enyemaka AI maara nke ọma." },
      { objective: "O1", q: "Kedu prompt ga-enye ozi ezinụlọ kacha mma?", options: ["\"Dee obere ozi ederede nwere ọṅụ nye nwa nwa m nwanyị Ava, onye meriri egwuregwu bọọlụ ya. Ka ọ ghara ịgafe okwu 40.\"", "\"ozi\"", "\"ederede\"", "\"ndewo\""], answer: 0, why: "Ọ na-ekwu onye, ihe, ụda na ogologo." },
      { objective: "O1", q: "Gịnị bụ ozi mbụ (draft)?", options: ["Ụdị mbụ ị nwere ike ịgbanwe", "Ikuku oyi", "Ozi ikpeazụ", "Ụdị app"], answer: 0, why: "Ozi mbụ bụ mmalite ị nwere ike ime ka ọ ka mma." },
      { objective: "O1", q: "Gịnị ka \"ụda\" (tone) pụtara n'ozi?", options: ["Ụda mgbirigba ekwentị", "Otu ozi ahụ si daa, dị ka ọkụ n'obi ma ọ bụ ọchị", "Ịdị ukwuu nke mkpụrụ edemede", "Nọmba ekwentị"], answer: 1, why: "Ụda bụ otu ozi ahụ si emetụta onye na-agụ ya." },
      { objective: "O2", q: "Ezigbo ụzọ isi lelee ma ozi mbụ ọ yiri okwu gị bụ:", options: ["Iziga ya n'agụghị ya", "Ime ka ọ dị ogologo", "Ịgụpụta ya n'olu dị elu", "Itinye okwu dị oke elu"], answer: 2, why: "Ịgụpụta ya n'olu dị elu na-egosi okwu ị na-agaghị ekwu mgbe ọ bụla." },
      { objective: "O2", q: "Gịnị na-eme ka ozi bụrụ nke gị n'ezie?", options: ["Okwu dị oke elu", "Ide ya niile na mkpụrụ edemede ukwu", "Idetuo ya site na kaadị", "Ihe unu na-echeta ọnụ ma ọ bụ aha otutu"], answer: 3, why: "Ihe naanị gị maara na-eme ka ọ bụrụ nke gị." },
      { objective: "O3", q: "Iji detuo ederede na ekwentị, ị na-akarị:", options: ["Ịpị igwefoto", "Ime ka ekwentị maa jijiji", "Ịpị ma jide, wee pịa Copy", "Ibuli olu ekwentị"], answer: 2, why: "Ịpị ma jide na-emeghe menu Copy." },
      { objective: "O3", q: "Mgbe i detuchara, kedu otu ị ga-esi tinye ozi ahụ n'ozi ederede?", options: ["Pịa ma jide n'igbe ozi ahụ ma pịa Paste", "Dee okwu ọ bụla ọzọ", "See foto", "Kpọọ onye ahụ oku"], answer: 0, why: "Paste na-etinye ederede i detuuru n'igbe ozi ahụ." },
      { objective: "O3", q: "Gịnị ka ị ga-elele tupu ị pịa Send?", options: ["Ọ dịghị ihe", "Ihu igwe", "Okwuntughe gị", "Aha onye ahụ"], answer: 3, why: "Ilele aha ahụ na-egbochi iziga ya nye onye na-abụghị ya." },
      { objective: "O4", q: "Kedu n'ime ndị a bụ app oku vidiyo?", options: ["Igwe mgbakọ", "FaceTime", "Elekere", "Ọkụ ekwentị (flashlight)"], answer: 1, why: "FaceTime, WhatsApp, Google Meet na Zoom na-enye oku vidiyo." },
      { objective: "O4", q: "Mgbe onye ezinụlọ gị kpọrọ gị oku vidiyo, ị na-apị:", options: ["Bọtịnụ uhie", "Bọtịnụ akwụkwọ ndụ ma ọ bụ Accept", "Ebe foto dị", "Settings"], answer: 1, why: "Akwụkwọ ndụ ma ọ bụ Accept na-aza oku ahụ; uhie na-akwụsị ya." },
      { objective: "O4", q: "Bọtịnụ nwere ahịrị gafere ya:", options: ["Gbanwụrụ", "Na-edekọ ihe", "Mebiri emebi", "Gbanyụrụ"], answer: 3, why: "Ahịrị gafere ya pụtara na ọ gbanyụrụ." },
      { objective: "O4", q: "Iji kwụsị oku vidiyo, ị na-apịkarị:", options: ["Bọtịnụ uhie", "Bọtịnụ akwụkwọ ndụ", "Bọtịnụ olu", "Maikrofọn"], answer: 0, why: "Bọtịnụ uhie na-akwụsị oku ahụ." },
      { objective: "O4", q: "Ebee ka ị ga-ejide ngwaọrụ ahụ n'oku vidiyo?", options: ["Nso ala", "N'azụ isi gị", "N'ogo anya gị", "N'akpa gị"], answer: 2, why: "Ogo anya na-eme ka ezinụlọ gị hụ ihu gị." },
      { objective: "O5", q: "A na-eji bọtịnụ Share:", options: ["Ihichapụ foto", "Igbanyụ ekwentị", "Ise foto", "Iziga foto nye mmadụ"], answer: 3, why: "Share na-eziga foto ahụ site n'app ị họọrọ." },
      { objective: "O5", q: "Caption bụ:", options: ["Nọmba ekwentị", "Ụdị igwefoto", "Obere ahịrị okwu na-eso foto", "Okwuntughe"], answer: 2, why: "Caption na-akọwa foto ahụ." },
      { objective: "O6", q: "Ozi si na nọmba ọhụrụ kwuru na ọ bụ nwa nwa gị, ọ chọkwara ego ngwa ngwa. Ihe mbụ ị ga-eme bụ:", options: ["Iziga ego", "Ịkwụsị ma kpọọ nwa nwa gị na nọmba ị nwereworị", "Ikesa ozi ụlọ akụ gị", "Izo ya"], answer: 1, why: "Ilele na nọmba ị maara na-akwụsị aghụghọ a." },
      { objective: "O6", q: "Ndị aghụghọ nwere ike iji AI:", options: ["Ṅomie olu onye ezinụlọ gị", "Dozie ekwentị gị", "Zitere gị akwụkwọ ozi site n'ụlọ akụ", "Bịa n'ụlọ gị"], answer: 0, why: "A na-eji AI ṅomie olu n'aghụghọ ihe mberede ezinụlọ." },
      { objective: "O6", q: "Gịnị ka okwu nzuzo ezinụlọ nwere ike inyere aka?", options: ["Igosi onye na-akpọ n'ezie n'oge ihe mberede", "Imeghe ekwentị gị", "Ime ka oku vidiyo doo anya karị", "Ịkwụ ụgwọ"], answer: 0, why: "Naanị ezi ezinụlọ gị maara okwu nzuzo ahụ." },
      { objective: "O6", q: "Ebee ka ị nwere ike ịkọ aghụghọ na United States?", options: ["Mgbasa ozi na-apụta na mberede", "ReportFraud.ftc.gov", "Nọmba onye kpọrọ gị", "Okwu n'ihe ntanetị mmekọrịta (social media)"], answer: 1, why: "Federal Trade Commission na-anabata akụkọ aghụghọ na ReportFraud.ftc.gov." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 9, 11, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Arịrịọ doro anya nye AI", objective: "O1", notYet: "Prompt ahụ na-ekwu naanị \"dee ozi\".", meets: "Prompt ahụ na-ekwu onye ọ bụ maka ya, na ọ bụ ịkpọ oku vidiyo, ụda ya na ogologo ya.", exceeds: "Ozi mbụ ahụ fọrọ nke nta ka ọ ghara ịchọ mgbanwe ọ bụla." },
      { name: "O yiri okwu gị", objective: "O2", notYet: "Zitere ozi mbụ AI dere otu o si dị.", meets: "Mere opekata mpe otu mgbanwe ka o yie okwu gị.", exceeds: "Tinyere ihe naanị gị ga-ama, dị ka aha otutu ma ọ bụ ihe unu na-echeta." },
      { name: "E zigara ya nye ezi onye", objective: "O3", notYet: "E zighị ozi ahụ, ma ọ bụ ọ gara n'ebe onye na-abụghị ya.", meets: "Detuuru, tinye ma ziga ozi ahụ site n'ozi ederede ma ọ bụ email nye ezi onye ahụ.", exceeds: "Lelere aha na okwu ndị ahụ ọzọ tupu iziga ya." },
      { name: "Banyere n'oku ahụ", objective: "O4", notYet: "Enweghị ike ịbanye, ma ọ bụ maikrofọn ma ọ bụ igwefoto nọgidere na-agbanyụ.", meets: "Banyere n'oge a kwekọrịtara ka maikrofọn na igwefoto gbanwụrụ, ma kelee ha.", exceeds: "Jidere ngwaọrụ ahụ n'ogo anya ya na ìhè dị mma ma jiri bọtịnụ uhie kwụsị oku ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha na ezinụlọ ha mere oku vidiyo ma ọ bụ kesaa foto n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe ezinụlọ ha kwekọrịtara n'okwu nzuzo ezinụlọ, na ndị kwuru na ha lelere ozi ezinụlọ na-enyo enyo",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone, tablet ma ọ bụ kọmputa nwere igwefoto na ịntanetị",
      "Ngwa enyemaka AI n'efu (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) na app oku vidiyo ezinụlọ ahụ na-eji",
      "Onye ezinụlọ ma ọ bụ onye enyemaka kwetara isonye n'oku vidiyo omume",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke dị nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu ihe ọmụmụ a amalite, jụọ ndị na-amụ ihe app vidiyo ezinụlọ ha na-ejiworị ma jiri nke ahụ mee omume.",
      "Hazie oku vidiyo omume n'etiti ndị na-amụ ihe nọ n'ime ụlọ ahụ tupu ha akpọọ ezinụlọ ha.",
      "Gosi nzọụkwụ copy na paste na ngwaọrụ nke onye na-amụ ihe ọ bụla; menu na-adị iche n'ekwentị dị iche iche.",
      "Kọwaa aghụghọ ihe mberede ezinụlọ site n'egwuregwu ime ihe (role-play), ma gbaa ndị na-amụ ihe ume ka ha kwekọrịta n'okwu nzuzo ezinụlọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

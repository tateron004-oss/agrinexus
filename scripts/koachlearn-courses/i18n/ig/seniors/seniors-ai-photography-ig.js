"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-photography.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-photography-ig",
  lang: "ig",
  translationOf: "seniors-ai-photography",
  category: "Seniors and Technology",
  name: "AI maka Ise Foto",
  skills: "Ise foto doro anya n'ekwentị, Iji ndozi akpaaka na idezi foto, Iwepụ obere ihe na-adọpụ uche site na ngwa AI, Ịchọta foto site n'ịchọ, Ime alban iji kesaa ezinụlọ",
  outcome: "ise foto doro anya n'ekwentị gị, iji ngwa idezi akpaaka na nke AI mee ka ọ ka mma, ịchọta foto ochie site n'ịchọ, na ikesa obere alban na ezinụlọ gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye hụrụ n'anya ise foto ụmụ ụmụ ha, ubi, anụ ụlọ, njem na nzukọ ezinụlọ, ma chọọ ka foto ndị ahụ maa mma n'amụtaghị igwefoto siri ike.",
    "Igwefoto na app foto dị n'ekwentị gị nwere ihe AI n'ime ha: ndozi akpaaka, ngwa na-ewepụ obere ihe na-adọpụ uche, na nchọta nwere ike ịchọta \"nkịta\" ma ọ bụ \"ụsọ mmiri\" n'etiti ọtụtụ puku foto. Ị ga-amụta iji ha, ma mụtakwa mgbe ị ga-ekwu eziokwu banyere foto e deziri.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Nwee ekwentị ma ọ bụ tablet gị n'akụkụ gị, ma jiri foto nke gị mee omume. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "See foto atọ nke ihe ị hụrụ n'anya (mmadụ mgbe o kwere, anụ ụlọ, osisi ma ọ bụ nri). Mee ka nke kacha mma ka mma site na ndozi akpaaka na otu ndezi ọzọ, chọta foto ochie abụọ site n'ịchọ n'app foto gị, ma kesaa ha atọ n'obere alban ma ọ bụ n'ozi nye otu onye ezinụlọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye hụrụ n'anya ise na ikesa foto ụmụ ụmụ ha, anụ ụlọ, ubi, nri na njem, ndị nwekarịkwa igbe foto ezinụlọ ochie e bipụtara n'akwụkwọ.",
    startingPoint: "Ha nwere ike iji igwefoto ekwentị see foto. Ọtụtụ na-ahụ na foto ha adịghị doro anya ma ọ bụ gbara ọchịchịrị, ha emetụbeghị ihuenyo Edit, ha na-ewe ogologo oge ịchọ foto ochie, ha amaghịkwa nke ọma otu esi ekesa alban.",
    gap: "Foto bụ otu n'ime ụzọ ndị bụ isi ezinụlọ ji anọ nso. Foto doro anya, ndezi AI dị mfe, nchọta ngwa ngwa, alban a na-ekesa na mbipụta dijitalụ nke foto ochie na-enyere ndị okenye aka ikesa ma chekwaa ncheta, ebe ịjụ ajụjụ tupu ikesa na ikwu eziokwu banyere ndezi AI na-echekwa ntụkwasị obi n'ezinụlọ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ buru ibu, dị mfe",
      "Ngwaọrụ: smartphone nwere igwefoto; app foto na ngwa AI dị iche site n'ekwentị gaa n'ekwentị, ụfọdụ ekwentị enweghị ihe nhichapụ AI",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, nwayọọ nwayọọ, ya na omume",
      "Ikike: jụọ ndị mmadụ, na ndị nne na nna ụmụaka, tupu ikesa foto ha",
      "Eziokwu: a na-akara ndezi AI na foto e tinyere agba, a na-echekwakwa foto mbụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji igwefoto ekwentị gị", action: "ise foto doro anya nwere ezigbo ìhè site n'ihicha lens, ijide ekwentị nke ọma, iji ezigbo ìhè na ịpị ihuenyo maka focus", standard: "na-edebe nke kacha mma n'ime foto ole na ole" },
    { id: "O2", condition: "Mgbe e nyere gị foto n'ekwentị gị", action: "ime ka ọ ka mma site na ndozi akpaaka, ịkpụ (crop) na ime ka ọ guzozie", standard: "ma laghachi azụ site na Revert ma ọ bụrụ na ị gbanwee obi" },
    { id: "O3", condition: "Mgbe e nyere gị foto nwere obere ihe na-adọpụ uche", action: "iwepụ ya site na ngwa nhichapụ AI ma kwuo eziokwu banyere otu e si dezie foto ahụ", standard: "n'agbanweghị ihe mere n'ezie n'ụzọ ga-eduhie ndị mmadụ" },
    { id: "O4", condition: "Mgbe e nyere gị ọba foto nwere ọtụtụ foto", action: "ịchọta foto site n'ịchọ ihe, ebe ma ọ bụ ụbọchị, ma kaa ndị ọkacha mmasị", standard: "na-achọta foto ochie abụọ n'enweghị ịkpụgharị ihuenyo" },
    { id: "O5", condition: "Mgbe e nyere gị ọtụtụ foto ị ga-ekesa", action: "ime alban ma ọ bụ ozi ma kesaa ya na otu onye ezinụlọ", standard: "mgbe ị jụrụ ajụjụ tupu ikesa foto ndị ọzọ" },
    { id: "O6", condition: "Mgbe e nyere gị foto ochie e bipụtara n'akwụkwọ", action: "ime mbipụta dijitalụ ya ma mee ka ọ ka mma, na-akara nke ọ bụla AI tinyere agba", standard: "nwere akụkụ kwụ ọtọ, obere glare, ma na-echekwa nke mbụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ise foto na ime ka ha ka mma",
      lessons: [
        {
          objectives: ["O1","O5"],
          title: "Ise foto doro anya n'ekwentị gị",
          minutes: 5,
          goal: "See foto doro anya nwere ezigbo ìhè n'ekwentị gị.",
          text: [
            "Ezigbo foto na-amalite site n'omume ole na ole dị mfe. Jiri akwa dị nro hichaa lens igwefoto nwayọọ; akara mkpịsị aka na-eme ka foto ghara idoro anya. Jiri aka abụọ jide ekwentị ma debe ikpere aka gị n'akụkụ ahụ gị ka foto ghara ịma jijiji.",
            "Ìhè kachasị mkpa. Mee ka onye ma ọ bụ ihe ị na-ese chee ihu na windo ma ọ bụ ìhè ehihie, ìhè dị n'azụ gị, ọ bụghị n'azụ ha. Pịa ihuenyo n'ihu onye ahụ ma ọ bụ na ifuru ị chọrọ ka o doo anya; igwefoto na-eme focus ebe ahụ.",
            "Bịaruo nso, ma mee ka ihe dị mkpa jupụta foto ahụ. See foto ole na ole kama otu; ị nwere ike idebe nke kacha mma ma hichapụ ndị ọzọ. Jụọ ndị mmadụ mgbe niile, karịsịa ndị nne na nna ụmụ ụmụ gị, tupu i kesaa foto ha."
          ],
          steps: ["Jiri akwa dị nro hichaa lens.", "Jiri aka abụọ jide ekwentị.", "Debe ìhè n'azụ gị, ka ọ chee ihe ị na-ese ihu.", "Pịa ihuenyo ebe ị chọrọ ka o doo anya.", "See foto ole na ole ma debe nke kacha mma."],
          words: [["Lens", "obere iko gburugburu dị n'azụ ekwentị nke igwefoto ji ahụ ụzọ."], ["Focus", "ime ka otu akụkụ foto doo anya nke ọma."]],
          slides: [
            { title: "Tupu i see foto", bullets: ["Hichaa lens nwayọọ", "Jiri aka abụọ jide ya, ikpere aka n'akụkụ ahụ"] },
            { title: "Ìhè na focus", bullets: ["Ìhè n'azụ gị, na-enwu n'ihe ị na-ese", "Pịa ihuenyo maka focus"] },
            { title: "Nweta foto kacha mma", bullets: ["Bịaruo nso", "See ole na ole, debe nke kacha mma", "Jụọ tupu i kesaa foto ndị mmadụ"] }
          ],
          tryIt: "Hichaa lens gị, wee see foto atọ nke ifuru, anụ ụlọ ma ọ bụ ihe dị nso windo. Pịa ihuenyo maka focus na nke ọ bụla. Lee ha ma họrọ nke kacha amasị gị.",
          youCanNow: "ise foto doro anya nwere ezigbo ìhè n'ekwentị gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ị ga-eji pịa ihuenyo n'ihu mmadụ tupu i see foto?", options: ["Ọ na-eme ka foto dị obere", "Ọ na-eme ka igwefoto mee focus n'ebe ahụ", "Ọ na-ehichapụ foto ahụ", "Ọ na-agbanye ọkụ flash"], answer: 1, why: "Ịpị ihuenyo na-agwa igwefoto ebe ọ ga-eme focus ka ebe ahụ doo anya." },
            { objective: "O1", q: "Ị na-ese enyi gị foto n'ime ụlọ. Ebee ka ị ga-eguzo?", options: ["Ebe windo dị n'azụ enyi gị", "N'akụkụ ụlọ gbara ọchịchịrị", "Ebe windo dị n'azụ gị, ka ìhè dakwasị enyi gị", "N'ebe dị anya n'ofe ụlọ"], answer: 2, why: "Ìhè kwesịrị ịchee ihe ị na-ese ihu, ìhè dị n'azụ gị, ọ bụghị n'azụ ha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ndozi akpaaka na ndezi dị mfe",
          minutes: 5,
          goal: "Mee ka foto ka mma site na ndozi otu ịpị, ịkpụ (crop) na ime ka ọ guzozie.",
          text: [
            "App foto gị nwere bọtịnụ Edit. Meghee foto ma pịa Edit. Ọtụtụ app nwere bọtịnụ akpaaka otu ịpị, nke na-egosikarị ka mkpanaka anwansi (magic wand), nke na-eji AI dozie ìhè, agba na ọdịiche n'ime otu sekọnd.",
            "Ọzọ, kpụọ (crop) ka i wepụ ebe tọgbọ chakoo, ma mee ka mbara igwe gbagọrọ agbagọ guzozie. Chọọ ngwa crop (na-adịkarị ka akụkụ anọ nwere akụ), dọrọ akụkụ ya n'ime, ma tụgharịa ya ntakịrị ma ọ dị mkpa.",
            "Ndezi anaghị emebi foto mbụ gị. Ọtụtụ app na-ekwe ka ị laghachi azụ site na Revert ma ọ bụ Undo. Pịa Done ma ọ bụ Save mgbe obi dị gị ụtọ."
          ],
          steps: ["Meghee foto ma pịa Edit.", "Pịa bọtịnụ akpaaka ma ọ bụ magic wand.", "Jiri ngwa crop wepụ ebe tọgbọ chakoo.", "Mee ka ọ guzozie ma foto ahụ gbagọrọ.", "Pịa Done ma ọ bụ Save; jiri Revert ma ọ bụrụ na ị gbanwee obi."],
          words: [["Ndozi akpaaka (enhance)", "ime ka ìhè na agba foto ka mma n'onwe ya."], ["Crop", "ịkpụpụ akụkụ nsọtụ foto."]],
          slides: [
            { title: "Otu ịpị ka ọ ka mma", bullets: ["Meghee foto, pịa Edit", "Pịa bọtịnụ akpaaka ma ọ bụ magic wand"] },
            { title: "Kpụọ ma mee ka ọ guzozie", bullets: ["Wepụ ebe tọgbọ chakoo", "Mee ka mbara igwe gbagọrọ agbagọ guzozie"] },
            { title: "Ọ dịghị ihe mebiri", bullets: ["Ọtụtụ app na-echekwa foto mbụ gị", "Jiri Revert ma ọ bụ Undo", "Pịa Done ma ọ bụ Save"] }
          ],
          tryIt: "Meghee foto kacha amasị gị site na Nkuzi 1. Jiri ndozi akpaaka, kpụọ ya ntakịrị, ma chekwaa ya. Wee tụnyere ya na nke mbụ.",
          youCanNow: "ime ka foto ka mma site na ndozi akpaaka, ịkpụ ya na ime ka ọ guzozie.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ịkpụ (crop) foto na-eme?", options: ["Ọ na-ewepụ nsọtụ na ebe tọgbọ chakoo", "Ọ na-eme ka agba nwukwuo", "Ọ na-ekesa foto ahụ", "Ọ na-ehichapụ foto ahụ"], answer: 0, why: "Crop na-ewepụ ebe tọgbọ chakoo ka ihe dị mkpa jupụta foto ahụ." },
            { objective: "O2", q: "I deziri foto ma ugbu a ọ dị njọ karịa. Gịnị ka ị ga-eme?", options: ["Hichapụ foto ahụ", "See screenshot", "Mee ndezi ndị ọzọ", "Pịa Revert ma ọ bụ Undo ka ị laghachi azụ"], answer: 3, why: "Ndezi anaghị emebi foto mbụ; Revert ma ọ bụ Undo na-eweghachi ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ngwa AI na-ewepụ ihe na-adọpụ uche",
          minutes: 5,
          goal: "Wepụ obere ihe na-adọpụ uche na foto site na ngwa nhichapụ AI, ma mara mgbe ị ga-ekwu eziokwu banyere ndezi.",
          text: [
            "Ọtụtụ ekwentị na app foto ọhụrụ nwere ihe nhichapụ AI: ị na-agba gburugburu ma ọ bụ tee aka n'elu obere ihe ị chọghị, dị ka ite unyi, onye ọbịa n'azụ ma ọ bụ waya ọkụ, AI ewee jupụta ebe ahụ.",
            "Chọọ n'ihuenyo Edit ngwa aha ya yiri Magic Eraser, Clean Up ma ọ bụ Object Eraser. Aha dị iche site n'ekwentị gaa n'ekwentị, ụfọdụ ekwentị enweghịkwa ya. Ọ bụrụ na nke gị enweghị ya, jụọ ngwa enyemaka AI: \"Kedu otu m ga-esi wepụ ihe na foto n'ekwentị m?\" ma gwa ya ụdị ekwentị gị.",
            "Obere nhicha dị mma maka foto ezinụlọ. Mana ejila AI gbanwee ihe mere n'ezie na foto n'ụzọ nwere ike iduhie ndị mmadụ, ma kwuo eziokwu ma mmadụ jụọ ma e deziri foto ahụ."
          ],
          steps: ["Meghee foto ma pịa Edit.", "Chọọ ngwa nhichapụ ma ọ bụ nhicha.", "Tee aka ma ọ bụ gbaa gburugburu obere ihe na-adọpụ uche.", "Lee ihe o mere ma chekwaa, ma ọ bụ laghachi azụ.", "Kwuo eziokwu banyere foto e deziri."],
          words: [["Ihe nhichapụ AI (AI eraser)", "ngwa na-ewepụ ihe na foto ma jupụta ebe ahụ."], ["Iduhie", "ime ka mmadụ kwere ihe na-abụghị eziokwu."]],
          slides: [
            { title: "Hichapụ obere ihe na-adọpụ uche", bullets: ["Ite unyi, ndị ọbịa, waya ọkụ", "Tee aka ma ọ bụ gbaa ha gburugburu", "AI na-ejupụta ebe ahụ"] },
            { title: "Chọta ngwa ahụ", bullets: ["Aha dị iche site n'ekwentị gaa n'ekwentị", "Chọọ n'Edit ngwa nhichapụ ma ọ bụ nhicha", "Jụọ AI, gwa ya ụdị ekwentị gị"] },
            { title: "Kwuo eziokwu", bullets: ["Obere nhicha dị mma", "Agbanwela ihe mere n'ezie", "Kwuo ya ma e deziri foto"] }
          ],
          tryIt: "Chọta foto nwere obere ihe na-adọpụ uche. Chọọ n'Edit ngwa nhichapụ ma ọ bụ nhicha ma nwaa iwepụ ya. Ọ bụrụ na ekwentị gị enweghị ya, jụọ ngwa enyemaka AI otu esi eme ya n'ụdị ekwentị gị.",
          youCanNow: "iji ngwa nhichapụ AI hichaa foto, ma jiri ya n'eziokwu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ihe nhichapụ AI na-eme?", options: ["Ọ na-ehichapụ foto ahụ dum", "Ọ na-ewepụ obere ihe i tere aka n'elu ya ma jupụta ebe ahụ", "Ọ na-agbakwunye ndị mmadụ na foto", "Ọ na-eme ka foto bụrụ oji na ọcha"], answer: 1, why: "Ị na-ete aka ma ọ bụ gbaa obere ihe gburugburu, AI ejupụta ebe ahụ." },
            { objective: "O3", q: "Nwa nwa gị nwoke jụrụ ma ị deziri foto ụsọ mmiri ahụ. I wepụrụ ite unyi. Gịnị ka ị ga-ekwu?", options: ["Kwuo mba, e dezibeghị ya", "Gbanwee okwu", "Hichapụ foto ahụ", "Kwuo eziokwu na i wepụrụ ite unyi"], answer: 3, why: "Obere nhicha dị mma, mana kwuo eziokwu ma mmadụ jụọ ma e deziri foto." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ise foto na ime ka ha ka mma",
        questions: [
          { objective: "O1", q: "Foto gị adịghị doro anya. Kedu ihe dị mfe ị ga-ebu ụzọ nwaa?", options: ["Maa ekwentị jijiji", "Zụta ekwentị ọhụrụ", "Jiri akwa dị nro hichaa lens", "Gbanyụọ ihuenyo"], answer: 2, why: "Akara mkpịsị aka na lens na-eme ka foto ghara idoro anya." },
          { objective: "O1", q: "Ebee ka ìhè kwesịrị ịdị maka ezigbo foto mmadụ?", options: ["N'ihe ị na-ese, n'azụ gị", "N'azụ onye ị na-ese", "Ọ dịghị ebe", "N'okpuru tebụl"], answer: 0, why: "Ìhè n'ihu na-eme ka ọ pụta ìhè nke ọma." },
          { objective: "O1", q: "Gịnị ka ịpị ihuenyo tupu i see foto na-eme?", options: ["Ọ na-ezipu foto ahụ", "Ọ na-ehichapụ foto ahụ", "Ọ na-agbanye egwu", "Ọ na-eme focus n'ebe ahụ"], answer: 3, why: "Ịpị na-agwa igwefoto ebe ọ ga-eme focus." },
          { objective: "O2", q: "Gịnị ka bọtịnụ magic wand ma ọ bụ akpaaka na-emekarị?", options: ["Ọ na-ehichapụ foto ahụ", "Ọ na-edozi ìhè na agba n'otu ịpị", "Ọ na-ekesa ya n'ihu ọha", "Ọ na-ebipụta ya"], answer: 1, why: "Ọ bụ ndozi AI otu ịpị." },
          { objective: "O3", q: "Olee mgbe ọ NA-ADỊGHỊ mma iji ihe nhichapụ AI?", options: ["Iwepụ ite unyi", "Ịgbanwe ihe mere n'ezie n'ụzọ ga-eduhie ndị mmadụ", "Iwepụ waya ọkụ", "Ime ka foto ezinụlọ dị ọcha"], answer: 1, why: "Ndezi ekwesịghị iduhie ndị mmadụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchọta, ịhazi na ikesa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta foto site n'ịchọ",
          minutes: 5,
          goal: "Chọta foto ochie site n'ide okwu na nchọta app foto gị.",
          text: [
            "Ọ bụrụ na i nwere ọtụtụ puku foto, ịkpụgharị ihuenyo na-agwụ ike. App foto dị ka Apple Photos na Google Photos na-eji AI amata ihe dị na foto gị, ya mere ị nwere ike ịchọ \"nkịta\", \"ụsọ mmiri\", \"keki ụbọchị ọmụmụ\" ma ọ bụ \"snow\".",
            "Meghee app foto gị, pịa Search (na-adịkarị ka iko na-eme ka ihe buo ibu), ma dee otu okwu. Ị nwekwara ike ịchọ site n'ebe (\"Florida\") ma ọ bụ site n'ọnwa na afọ (\"July 2019\"). Ọtụtụ app nwere ike ịchịkọta foto otu ihu ọnụ ka i nye ndị mmadụ aha; nke a bụ nhọrọ, ị nwekwara ike gbanyụọ ya na settings.",
            "Jiri ọkacha mmasị (favorites) debe foto gị kacha mma ọnụ: pịa obi (heart) dị na foto, wee chọta ọkacha mmasị niile n'otu alban."
          ],
          steps: ["Meghee app foto gị.", "Pịa Search ma ọ bụ iko na-eme ka ihe buo ibu.", "Dee ihe, ebe ma ọ bụ ụbọchị.", "Pịa obi (heart) na foto ị hụrụ n'anya ka ha bụrụ ọkacha mmasị."],
          words: [["Alban (album)", "otu ìgwè foto e debere ọnụ, dị ka peeji n'akwụkwọ foto."], ["Ọkacha mmasị (favorites)", "foto i ji obi (heart) kaa ka i nwee ike ịchọta ha ngwa ngwa."]],
          slides: [
            { title: "Ka AI chọta foto gị", bullets: ["Chọọ \"nkịta\", \"ụsọ mmiri\", \"keki ụbọchị ọmụmụ\"", "Ma ọ bụ ebe, ma ọ bụ ọnwa na afọ"] },
            { title: "Otu esi achọ", bullets: ["Meghee app foto gị", "Pịa iko na-eme ka ihe buo ibu", "Dee otu okwu"] },
            { title: "Debe nke kacha mma", bullets: ["Pịa obi (heart) maka ọkacha mmasị", "Ịchịkọta ihu bụ nhọrọ"] }
          ],
          tryIt: "Chọọ ihe abụọ n'app foto gị, dị ka \"ifuru\" na otu ebe i letara. Kaa otu foto site na nchọta ọ bụla ka ọ bụrụ ọkacha mmasị.",
          youCanNow: "ịchọta foto ochie site n'ịchọ ma debe nke kacha mma ka ọkacha mmasị.",
          quickCheck: [
            { objective: "O4", q: "Kedu otu app foto ga-esi chọta foto snow gị niile?", options: ["AI na-amata ihe dị na foto gị, ya mere ị nwere ike ịchọ \"snow\"", "Ọ na-ajụ ezinụlọ gị", "Ọ na-agụ aha faịlụ i dere", "Ọ pụghị; ị ga-akpụgharị ihuenyo"], answer: 0, why: "App foto na-eji AI amata ihe dị na foto ka i nwee ike ịchọ site n'otu okwu." },
            { objective: "O4", q: "Ị chọrọ ịchọta foto njem gị na July 2019. Gịnị ka ị ga-ede na Search?", options: ["\"Foto\"", "\"July 2019\"", "\"Igwefoto\"", "Ọ dịghị ihe; kpụgharịa ihuenyo kama"], answer: 1, why: "Ị nwere ike ịchọ site n'ọnwa na afọ, site n'ebe ma ọ bụ site n'ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime alban na ikesa ya",
          minutes: 6,
          goal: "Mee alban ma kesaa ya na ezinụlọ.",
          text: [
            "Alban bụ nchịkọta foto gbasara otu isiokwu, dị ka \"Oge okpomọkụ n'ọdọ mmiri\" ma ọ bụ \"Afọ mbụ Emma\". Ime otu bụ ụzọ mara mma isi kesaa ncheta.",
            "N'ọtụtụ app foto: họrọ ọtụtụ foto site n'ịpị Select wee pịa foto nke ọ bụla, pịa bọtịnụ Share ma ọ bụ akara +, ma họrọ itinye ha n'alban ọhụrụ ma ọ bụ alban a na-ekesa (shared album). Nye ya aha. Alban a na-ekesa na-ekwe ka ndị ezinụlọ ị kpọrọ hụ foto ndị ahụ, ọtụtụ mgbe ha na-agbakwunyekwa nke ha.",
            "Ị nwekwara ike iziga foto ole na ole n'ozi ederede ma ọ bụ email. Tupu i kesaa foto ụmụ ụmụ gị, jụọ ndị nne na nna ha ma ọ dị mma na otu ha chọrọ ka i kesaa ya."
          ],
          steps: ["Pịa Select ma họrọ ọtụtụ foto.", "Pịa Share ma ọ bụ akara +.", "Họrọ alban ọhụrụ ma ọ bụ alban a na-ekesa ma nye ya aha.", "Kpọọ ndị ezinụlọ site n'aha, nọmba ekwentị ma ọ bụ email.", "Jụọ ndị nne na nna tupu i kesaa foto ụmụaka."],
          words: [["Alban a na-ekesa (shared album)", "alban ndị ị kpọrọ nwere ike ịhụ, ọtụtụ mgbe ha na-agbakwunyekwa foto na ya."], ["Select", "ịhọrọ ọtụtụ ihe n'otu oge."]],
          slides: [
            { title: "Alban na-akọ akụkọ", bullets: ["\"Oge okpomọkụ n'ọdọ mmiri\"", "\"Afọ mbụ Emma\""] },
            { title: "Mee otu", bullets: ["Pịa Select, họrọ foto", "Pịa Share ma ọ bụ +", "Alban ọhụrụ ma ọ bụ nke a na-ekesa, wee nye ya aha"] },
            { title: "Kesaa n'obi ọma", bullets: ["Kpọọ ndị ezinụlọ", "Ma ọ bụ ziga ole na ole n'ozi ederede ma ọ bụ email", "Jụọ ndị nne na nna tupu i kesaa foto ụmụaka"] }
          ],
          tryIt: "Mee alban nwere foto ise kacha amasị gị, nye ya aha doro anya. Kesaa ya, ma ọ bụ ziga foto abụọ n'ime ya, nye otu onye ezinụlọ.",
          youCanNow: "ime alban foto ma kesaa ya na ezinụlọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ alban a na-ekesa?", options: ["Akwụkwọ foto e ji akwụkwọ mee", "Foto naanị gị nwere ike ịhụ", "Alban ndị ezinụlọ ị kpọrọ nwere ike ịhụ, ọtụtụ mgbe ha na-agbakwunyekwa", "Ndepụta ọkacha mmasị"], answer: 2, why: "Alban a na-ekesa na-ekwe ka ndị ị kpọrọ hụ foto, ọtụtụ mgbe ha na-agbakwunyekwa nke ha." },
            { objective: "O5", q: "Ị chọrọ ikesa foto nwa nwa gị nwanyị n'alban ezinụlọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Jụọ ndị nne na nna ya ma ọ dị mma na otu ha chọrọ ka i kesaa ya", "Tinye ha n'ihu ọha", "Kesaa ha na onye ọ bụla dị na kọntaktị gị", "Wepụ ihu ya na foto"], answer: 0, why: "Jụọ ndị nne na nna tupu i kesaa foto ụmụaka." }
          ]
        },
        {
          objectives: ["O6","O2"],
          title: "Iweta foto ochie n'ime ekwentị gị",
          minutes: 5,
          goal: "Mee foto ochie e bipụtara n'akwụkwọ ka ọ bụrụ mbipụta dijitalụ ma mee ka ọ ka mma.",
          text: [
            "Ọtụtụ ezinụlọ nwere igbe foto ochie e bipụtara n'akwụkwọ. Ị nwere ike ime mbipụta dijitalụ ha iji kesaa ma chekwaa ha, naanị site n'iji ekwentị gị.",
            "Tọgbọọ foto ahụ n'ala nke ọma n'akụkụ windo, ebe anwụ anaghị achakwasị ya ozugbo, ma see ya site n'elu kpọmkwem ka akụkụ ya kwụ ọtọ. App scan n'efu, dị ka PhotoScan nke Google, ka e mere maka nke a, ha na-ebelatakwa glare. Wee jiri ndozi akpaaka na crop, dị ka na Nkuzi 2.",
            "Ụfọdụ app na-eji AI etinye agba ma ọ bụ dozie foto ochie. Ha nwere ike ịtọ ụtọ, mana agba ndị ahụ bụ ihe AI chere, ọ bụghị ihe mere n'ezie. Chekwaa scan mbụ ahụ, ma kaa mbipụta e tinyere agba dị ka nke e tinyere agba mgbe ị na-ekesa ha. Ị nwere ike ịrịọ ngwa enyemaka AI ka o nyere aka dee obere nkọwa (caption) nwere aha na afọ."
          ],
          steps: ["Tọgbọọ foto ahụ n'ala nke ọma n'ìhè ehihie dị nro.", "Jide ekwentị kpọmkwem n'elu ya.", "See foto ahụ, ma ọ bụ jiri app scan belata glare.", "Mee ndozi akpaaka ma kpụọ ya.", "Chekwaa nke mbụ; kaa mbipụta ọ bụla AI tinyere agba."],
          words: [["Scan", "ime mbipụta dijitalụ nke foto ma ọ bụ akwụkwọ e dere n'akwụkwọ."], ["Glare", "ìhè na-egbuke egbuke na foto, site na ìhè na-amapụ n'elu ya."], ["Itinye agba (colorize)", "itinye agba na foto oji na ọcha."]],
          slides: [
            { title: "Chekwaa foto ochie gị", bullets: ["Mee mbipụta dijitalụ iji kesaa ma chekwaa ha"] },
            { title: "Otu esi eme mbipụta", bullets: ["Tọgbọọ ya n'ala, n'ìhè ehihie dị nro", "Ekwentị kpọmkwem n'elu ya", "App scan na-ebelata glare"] },
            { title: "AI na-etinye agba", bullets: ["Agba ahụ bụ ihe AI chere", "Chekwaa scan mbụ ahụ", "Kaa mbipụta e tinyere agba"] }
          ],
          tryIt: "Ọrụ ikpeazụ: see foto ọhụrụ atọ nke ihe ị hụrụ n'anya, mee ka nke kacha mma ka mma site na ndozi akpaaka na otu ndezi ọzọ, chọta foto ochie abụọ site n'ịchọ, ma kesaa ha atọ n'obere alban ma ọ bụ n'ozi nye ezinụlọ. Ọ bụrụ na i nwere foto ochie e bipụtara, tinyekwa scan ya.",
          youCanNow: "ise, imezi, ịchọta, ịhazi na ikesa foto, gụnyere mbipụta foto ezinụlọ ochie.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ glare na foto nke foto e bipụtara?", options: ["Ihu na-adịghị doro anya", "Ìhè na-egbuke egbuke site na ìhè dakwasịrị foto ahụ", "Akara crop", "Akụkụ na-efu efu"], answer: 1, why: "Glare bụ ìhè na-egbuke egbuke; app scan dị ka PhotoScan na-enyere aka belata ya." },
            { objective: "O6", q: "App tinyere agba na foto agbamakwụkwọ ndị mụrụ gị. Kedu otu ị ga-esi kesaa ya?", options: ["Kwuo na ọ nwere agba site na mbụ", "Hichapụ foto oji na ọcha mbụ ahụ", "Kaa ya dị ka nke e tinyere agba ma chekwaa scan mbụ ahụ", "Agwala onye ọ bụla"], answer: 2, why: "Agba AI bụ ihe o chere, ya mere kaa mbipụta e tinyere agba ma chekwaa nke mbụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchọta, ịhazi na ikesa",
        questions: [
          { objective: "O4", q: "Kedu otu ị ga-esi chọta foto ụsọ mmiri gị niile ngwa ngwa?", options: ["Jụọ onye ọbịa", "Kpụgharịa ihuenyo otu awa", "Hichapụ foto ndị ọzọ", "Chọọ \"ụsọ mmiri\" n'app foto gị"], answer: 3, why: "Nchọta AI na-amata ihe dị na foto." },
          { objective: "O4", q: "Gịnị ka ịpị obi (heart) na foto na-eme?", options: ["Ọ na-aka ya ka ọ bụrụ ọkacha mmasị", "Ọ na-ehichapụ ya", "Ọ na-etinye ya n'ihu ọha", "Ọ na-ebipụta ya"], answer: 0, why: "A na-edebe ọkacha mmasị ọnụ ka ọ dị mfe ịchọta ha." },
          { objective: "O5", q: "Gịnị bụ alban a na-ekesa?", options: ["Akwụkwọ e ji akwụkwọ mee", "Alban e hichapụrụ", "Alban ndị ị kpọrọ nwere ike ịhụ", "Ndepụta okwuntughe"], answer: 2, why: "Alban a na-ekesa na-ekwe ka ezinụlọ hụ ma gbakwunye foto." },
          { objective: "O5", q: "Tupu i kesaa foto ụmụ ụmụ gị, ị kwesịrị:", options: ["Ọ dịghị ihe", "Itinye ha ebe niile", "Ibipụtara ndị ọbịa ha", "Ịjụ ndị nne na nna ha"], answer: 3, why: "Ndị nne na nna na-ekpebi otu a ga-esi kesaa foto ụmụ ha." },
          { objective: "O6", q: "App AI tinyere agba na foto ochie oji na ọcha. Agba ndị ahụ bụ:", options: ["Ndị e si na fim mbụ were", "Kpọmkwem ihe mere", "Ihe AI chere", "Ndị ziri ezi mgbe niile"], answer: 2, why: "Itinye agba bụ ịkọ nkọ; chekwaa ma kaa nke mbụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ise Foto",
    questions: [
      { objective: "O1", q: "Lens bụ:", options: ["Ihuenyo", "Obere iko igwefoto ji ahụ ụzọ", "Batrị", "Chaja"], answer: 1, why: "Lens na-anabata foto ahụ." },
      { objective: "O1", q: "Ka foto ghara ịma jijiji, jide ekwentị:", options: ["Jiri aka abụọ, ikpere aka n'akụkụ ahụ", "Jiri otu mkpịsị aka", "N'elu isi gị", "Isi ya n'ala"], answer: 0, why: "Aka abụọ na-eme ka ọ kwụsie ike." },
      { objective: "O1", q: "Maka foto mmadụ, ìhè kwesịrị ịdị:", options: ["N'ihu onye ahụ", "N'azụ onye ahụ", "Gbanyụọ", "N'okpuru onye ahụ"], answer: 0, why: "Ìhè n'ihu na-eme ka ọ pụta ìhè nke ọma." },
      { objective: "O1", q: "Ise ọtụtụ foto na-enyere aka n'ihi na:", options: ["Ekwentị chọrọ omume", "Ị nwere ike idebe nke kacha mma", "Ọ na-echekwa batrị", "Ọ na-ehichapụ foto ochie"], answer: 1, why: "Ọtụtụ foto, ọtụtụ ohere maka nke mara mma." },
      { objective: "O2", q: "Iji malite idezi foto, pịa:", options: ["Share", "Delete", "Edit", "Settings"], answer: 2, why: "Edit na-emeghe ngwa ndezi." },
      { objective: "O2", q: "\"Crop\" pụtara:", options: ["Ihichapụ", "Itinye agba", "Ikesa", "Ịkpụpụ nsọtụ"], answer: 3, why: "Crop na-akpụ foto ahụ." },
      { objective: "O2", q: "Ọ bụrụ na ndezi gị amasịghị gị, ị nwere ike:", options: ["Ịzụta nke mbụ", "Ọ dịghị mgbe ị ga-alaghachi azụ", "Revert ma ọ bụ Undo", "Ịmalitegharị ekwentị"], answer: 2, why: "Ọtụtụ app na-echekwa nke mbụ." },
      { objective: "O3", q: "A na-eji ihe nhichapụ AI:", options: ["Wepụ obere ihe na-adọpụ uche na foto", "Hichapụ ọba foto gị dum", "Bipụta foto", "Kpọọ ezinụlọ oku"], answer: 0, why: "Ọ na-ewepụ ihe ma jupụta ebe ahụ." },
      { objective: "O3", q: "Ọ dị ka ekwentị gị enweghị ihe nhichapụ AI. Ezigbo nzọụkwụ bụ:", options: ["Hichapụ app foto", "Kwụsị ise foto", "Kesaa okwuntughe gị", "Jụọ ngwa enyemaka AI otu esi eme ya n'ụdị ekwentị gị"], answer: 3, why: "Aha ngwa dị iche; AI nwere ike iduzi gị." },
      { objective: "O3", q: "Iji AI gbanwee ihe mere n'ezie na foto iji ghọgbuo ndị mmadụ bụ:", options: ["Ọ dị mma mgbe niile", "Iduhie, a ga-ezere ya", "Ọ dị mkpa", "Ihe nchekwa"], answer: 1, why: "Ndezi ekwesịghị iduhie." },
      { objective: "O4", q: "Nchọta app foto nwere ike ịchọta foto site na:", options: ["Naanị nọmba faịlụ", "Ihe, ebe na ụbọchị", "Naanị agba", "Ọ dịghị ihe"], answer: 1, why: "AI na-amata ihe dị n'ime ya, ebe na ụbọchị." },
      { objective: "O4", q: "Ịchịkọta ihu n'app foto bụ:", options: ["Okwuntughe", "Ihe dị mkpa", "Nje kọmputa (virus)", "Nhọrọ, ị nwekwara ike gbanyụọ ya"], answer: 3, why: "Ị nwere ike ịhọrọ ma ị ga-eji ya." },
      { objective: "O5", q: "Alban bụ:", options: ["Otu ìgwè foto e debere ọnụ", "Otu foto", "Igwefoto", "Filter"], answer: 0, why: "Alban na-achịkọta foto ndị yiri onwe ha." },
      { objective: "O5", q: "Iji họrọ ọtụtụ foto n'otu oge, pịa:", options: ["Camera", "Delete", "Select", "Settings"], answer: 2, why: "Select na-ekwe ka ị họrọ ọtụtụ foto." },
      { objective: "O5", q: "Ụzọ dị mfe isi kesaa foto ole na ole bụ:", options: ["Itinye ha na peeji onye ọbịa", "Iziga ekwentị n'ozi", "Ibipụta ma zipu fax", "Iziga ha n'ozi ederede ma ọ bụ email"], answer: 3, why: "Ozi ederede na email na-ekesa ngwa ngwa." },
      { objective: "O6", q: "Iji mee mbipụta foto ochie, jide ekwentị:", options: ["N'azụ foto ahụ", "N'akụkụ gbagọrọ agbagọ nke ukwuu", "Kpọmkwem n'elu foto ahụ", "N'ebe dị anya n'ofe ụlọ"], answer: 2, why: "Kpọmkwem n'elu na-eme ka akụkụ ya kwụ ọtọ." },
      { objective: "O6", q: "Glare bụ:", options: ["Ụdị alban", "Ìhè na-egbuke egbuke site na ìhè dakwasịrị foto", "Filter", "Okwuntughe"], answer: 1, why: "Glare na-ezo akụkụ foto ahụ." },
      { objective: "O6", q: "App scan dị ka PhotoScan nke Google na-enyere aka site n'ụzọ:", options: ["Ibelata glare", "Itinye okwuntughe", "Ihichapụ foto e bipụtara", "Ịkpọ oku"], answer: 0, why: "E mere ha iji mepụta foto e bipụtara nke ọma." },
      { objective: "O6", q: "Mgbe ị na-ekesa foto AI tinyere agba, ị kwesịrị:", options: ["Ịka ya dị ka nke e tinyere agba ma chekwaa nke mbụ", "Ikwu na ọ bụ nke mbụ", "Ihichapụ nke mbụ", "Izo ya"], answer: 0, why: "Agba bụ ihe AI chere; eziokwu dị mkpa." },
      { objective: "O6", q: "AI nwere ike inyere aka na nkọwa (caption) foto ochie site n'ụzọ:", options: ["Ịmara ndị nọ na ya", "Inyere aka dee ya mgbe i nyere aha na afọ", "Ịchọta adreesị ha", "Ịkọ ụbọchị ọmụmụ ha n'ụzọ ziri ezi"], answer: 1, why: "Gị na-enye eziokwu; AI na-enyere aka n'okwu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      4,
      7,
      9,
      10,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Foto doro anya",
        objective: "O1",
        notYet: "Foto adịghị doro anya ma ọ bụ gbara ọchịchịrị, ma ọ bụ e sere mmadụ foto n'ajụghị ya.",
        meets: "Foto atọ doro anya nwere ezigbo ìhè, nke onye ọ bụla nọ n'ime ha kwere.",
        exceeds: "Ihe e sere jupụtara foto ahụ, a họrọkwa nke kacha mma n'ime ọtụtụ."
      },
      {
        name: "E mere ka foto ka mma",
        objective: "O2",
        notYet: "Enweghị ndezi, ma ọ bụ ndezi mere ka foto ahụ ka njọ.",
        meets: "E mere ka foto kacha mma ka mma site na ndozi akpaaka na otu ndezi ọzọ, dị ka crop.",
        exceeds: "Nwere ike igosi otu esi eme Revert na ndezi ahụ ma kọwaa ihe mere o ji họrọ ya."
      },
      {
        name: "Achọtara foto ochie",
        objective: "O4",
        notYet: "Chọtara foto naanị site n'ịkpụgharị ihuenyo ogologo oge, ma ọ bụ achọtaghị ha ma ọlị.",
        meets: "Chọtara foto ochie abụọ site n'iji Search chọọ ihe, ebe ma ọ bụ ụbọchị.",
        exceeds: "Kaara ọkacha mmasị ka ọ dị mfe ịchọta ha ọzọ."
      },
      {
        name: "Ekesara ya na ezinụlọ",
        objective: "O5",
        notYet: "Ekesaghị foto ahụ, ma ọ bụ e kesara ha n'ajụghị ajụjụ.",
        meets: "E kesara foto atọ ahụ n'obere alban ma ọ bụ n'ozi nye otu onye ezinụlọ.",
        exceeds: "Nyere alban ahụ aha doro anya ma kpọọ ezinụlọ ka ha gbakwunye foto."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kesara alban foto na ezinụlọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe mere mbipụta dijitalụ nke foto ezinụlọ ochie ma kesaa ha",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Seniors and Technology ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere igwefoto na app foto dị ka Apple Photos ma ọ bụ Google Photos",
      "Akwa dị nro maka lens, na otu foto ochie ma ọ bụ abụọ e bipụtara n'akwụkwọ",
      "App scan n'efu dị ka PhotoScan nke Google (nhọrọ)",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, nwayọọ nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kewaa ndị na-amụ ihe site n'ụdị ekwentị ha; ngwa Edit na nhichapụ nwere aha dị iche n'ekwentị dị iche iche.",
      "Rịọ ndị na-amụ ihe ka ha weta foto ochie e bipụtara iji mee omume ime mbipụta dijitalụ.",
      "Gosi ịjụ ajụjụ tupu ise ma ọ bụ ikesa foto ndị ọzọ, karịsịa ụmụaka.",
      "Kparịta ụka banyere ikwu eziokwu na ndezi AI na foto e tinyere agba, na ichekwa foto mbụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

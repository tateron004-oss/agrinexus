"use strict";

// Koach Learn course (Igbo translation of re-entry/reentry-workplace-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-workplace-skills-ig",
  lang: "ig",
  translationOf: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Nka Ebe Ọrụ na Ịrụ Ọrụ Nke Ọma",
  skills: "Email na ozi ederede nwere nkwanye ugwu, Ịgwa onye isi ọrụ okwu, Ịhazi na ịhọrọ ihe mbụ n'ụbọchị ọrụ, Iji akwụkwọ na usoro oge e kesara, Ịnabata ndụmọdụ na idozi nsogbu, Ịgbaso iwu AI n'ebe ọrụ",
  outcome: "ide ozi doro anya, nwere nkwanye ugwu, nye onye isi ọrụ gị site n'enyemaka AI, ịhazi ụbọchị ọrụ gị site na ndepụta ihe ị ga-eme, na ịgbaso iwu ebe ọrụ gị gbasara iji AI na idebe ozi nzuzo.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-alọta ụlọ ndị na-amalite ọrụ, ma ọ bụ na-akwado maka otu. Ugbu a, ebe ọrụ na-eji email, ozi ederede, usoro oge e kesara na akwụkwọ kọmputa, ọtụtụ na-ejikwa AI. Nka ndị a na-enyere gị aka idebe ọrụ ahụ ma too n'ime ya.",
    "Ị ga-eme omume n'ide ozi nwere nkwanye ugwu, ịgwa onye isi ọrụ okwu, ịhazi oge ọrụ gị, iji akwụkwọ na usoro oge e kesara, ịnabata ndụmọdụ, na iji AI n'ebe ọrụ n'ụzọ ziri ezi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Ọmụmaatụ ndị a si n'ezi ọrụ mbido: ụlọ nkwakọba ngwaahịa, kichin, ụlọ ahịa, nhicha, ọrụ owuwu na ọrụ ọfịs. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri ngwa enyemaka AI dee obere email ma ọ bụ ozi ederede nwere nkwanye ugwu nye onye isi ọrụ gị, na-arịọ ịgbanwe otu oge ọrụ (shift), nwere ihe kpatara ya na nkwa inye aka ịchọta onye ga-anọchi gị. Mee ka ọ dị ka okwu gị ma lelee na o nweghị ozi nzuzo. Wee mee ndepụta ihe ị ga-eme, n'usoro mkpa ha, maka ezi ụbọchị ọrụ ma ọ bụ nke omume.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alọta ụlọ site n'ụlọ mkpọrọ (re-entry) ndị na-amalite ọrụ ma ọ bụ na-akwado maka otu, ọtụtụ mgbe n'ọrụ mbido n'ụlọ nkwakọba ngwaahịa, kichin, ụlọ ahịa, nhicha, owuwu ma ọ bụ ọfịs.",
    startingPoint: "Ha nwere ike izipu ozi ederede ma kpọọ oku. Ha amachaghị email ọrụ, usoro oge e kesara, akwụkwọ e kesara ma ọ bụ iji AI n'ebe ọrụ. Ụfọdụ enweghị obi ike ịgwa onye isi ọrụ okwu ma ọ bụ ịnabata ndụmọdụ.",
    gap: "Ugbu a, ebe ọrụ na-eji ozi, usoro oge e kesara na akwụkwọ, ọtụtụ na-ejikwa AI. Ndị na-amụ ihe kwesịrị ikwu okwu n'ụzọ nwere nkwanye ugwu, ịhazi oge ọrụ ha, ịnabata ndụmọdụ ma gbasoo iwu AI na nzuzo ka ha debe ọrụ ahụ ma too n'ime ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone, mgbe ụfọdụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe ọrụ",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'etiti ọrụ na oge ịhụ ndị ọrụ",
      "Iwu ebe ọrụ: onye were mmadụ n'ọrụ ọ bụla na-ewepụta iwu nke ya gbasara AI na nzuzo",
      "Nzuzo: ọ dịghị ozi nzuzo nke ndị ahịa, ụlọ ọrụ ma ọ bụ nke onwe n'ime ngwa AI ọ bụla"
    ],
    prerequisites: "\"Mmalite AI na Obi Ike n'Ihe Dijitalụ\" na-enye aka, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ezi ọnọdụ n'ebe ọrụ", action: "ide obere email ma ọ bụ ozi ederede doro anya, nwere nkwanye ugwu, site n'enyemaka AI", standard: "nke isi okwu ya dị n'ahịrị mbụ, nwere njedebe nwere nkwanye ugwu, ma dị ka okwu gị" },
    { id: "O2", condition: "Mgbe e nyere gị isiokwu ị ga-agwa onye isi ọrụ", action: "ịkwado ma mee omume obere mkparịta ụka nwere nkwanye ugwu", standard: "ebe e dere isi okwu gị n'otu ahịrịokwu ma mee omume ya opekata mpe otu ugboro" },
    { id: "O3", condition: "Mgbe e nyere gị ndụmọdụ ma ọ bụ nsogbu n'ebe ọrụ", action: "ịzaghachi nwayọọ ma kọọrọ onye kwesịrị ekwesị nsogbu ahụ", standard: "gụnyere ihe mere, mgbe ọ mere na ihe i mere" },
    { id: "O4", condition: "Mgbe e nyere gị ndepụta ọrụ maka otu ụbọchị", action: "ime ndepụta ihe ị ga-eme kewara n'ime nke ga-eme, nke kwesịrị ime na nke enwere ike ime", standard: "ebe ọrụ ndị nwere oge njedebe taa dị n'elu" },
    { id: "O5", condition: "Mgbe e nyere gị njikọ (link) nke usoro oge ma ọ bụ akwụkwọ e kesara", action: "imeghe ya, chọta akụkụ nke gị ma tinye ihe na ya", standard: "n'agbanweghị akụkụ ndị na-abụghị nke gị" },
    { id: "O6", condition: "Mgbe e nyere gị iwu AI nke ebe ọrụ gị", action: "ịhọrọ ọrụ ndị ị nwere ike iji AI mee na ozi ị ga-ewepụ", standard: "n'etinyeghị ozi nzuzo nke ndị ahịa ma ọ bụ nke ụlọ ọrụ n'ime ngwa AI mgbe ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ikwu okwu n'ebe ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide ozi nwere nkwanye ugwu",
          minutes: 5,
          goal: "Dee obere email ma ọ bụ ozi ederede doro anya, nwere nkwanye ugwu, nye onye nọ n'ebe ọrụ.",
          text: [
            "N'ebe ọrụ, otu i si ede ihe dị mkpa. Ozi nwere nkwanye ugwu dị mkpụmkpụ, nwee nsọpụrụ ma doo anya: ọ na-ekwu ihe ị chọrọ n'ahịrị mbụ, na-enye ihe kpatara ya ma ọ dị mkpa, ma jiri ekele mechie.",
            "Usoro dị mfe: ekele, isi okwu, otu ihe ma ọ bụ abụọ gbasara ya, ihe ị na-arịọ, ekele na aha gị. Dịka ọmụmaatụ: \"Ndewo Maria, achọrọ m ịgbanwe oge ọrụ m nke Satọde gaa na Sọnde n'izu a n'ihi mmemme ezinụlọ. Enwere m ike inye aka ịchọta onye ga-anọchi m. Daalụ, Andre.\"",
            "Ngwa enyemaka AI nwere ike inye aka: \"Mee ka ozi a m na-ezigara onye isi ọrụ m nwekwuo nkwanye ugwu, ma ka dị enyi.\" Wee gụọ ya, mee ka ọ dị ka okwu gị, ma lelee otu e si dee aha ndị mmadụ. N'ebe ọrụ, ezere okwu ntorobịa nke ozi ederede, mkpụrụ edemede ukwu niile na emoji karịrị akarị."
          ],
          steps: ["Bido site n'ekele na aha onye ahụ.", "Kwuo isi okwu gị n'ahịrị mbụ.", "Tinye otu ihe ma ọ bụ abụọ gbasara ya.", "Kwuo ihe ị na-arịọ.", "Jiri ekele na aha gị mechie."],
          words: [["Nkwanye ugwu n'ọrụ (professional)", "ụzọ doro anya, nwere nsọpụrụ, ndị mmadụ si ekwu okwu n'ebe ọrụ."], ["Onye isi ọrụ (supervisor)", "onye na-eduzi ọrụ gị na usoro oge ọrụ gị."]],
          slides: [
            { title: "Mkpụmkpụ, nkwanye ugwu, doro anya", bullets: ["Isi okwu na mbụ", "Ihe kpatara ya ma ọ dị mkpa", "Jiri ekele mechie"] },
            { title: "Usoro dị mfe", bullets: ["Ekele, isi okwu, ihe gbasara ya", "Ihe ị na-arịọ", "Ekele na aha gị"] },
            { title: "AI nwere ike ime ka ọ ka mma", bullets: ["\"Mee ka nke a nwekwuo nkwanye ugwu ma dị enyi.\"", "Mee ka ọ dị ka okwu gị", "Ọ dịghị okwu ntorobịa, mkpụrụ ukwu niile ma ọ bụ emoji karịrị akarị"] }
          ],
          tryIt: "Dee ozi mbụ nye onye isi ọrụ, na-ajụ ajụjụ gbasara usoro oge ọrụ gị. Rịọ ngwa enyemaka AI ka o mee ka ọ nwekwuo nkwanye ugwu ma dị enyi, wee gbanwee otu ihe ka ọ dị ka okwu gị.",
          youCanNow: "ide obere ozi nwere nkwanye ugwu nye onye nọ n'ebe ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ahịrị mbụ nke ozi ọrụ kwesịrị ime?", options: ["Kwuo isi okwu", "Kọọ akụkọ ogologo", "Rịọ mgbaghara ọtụtụ ugboro", "Depụta ọrụ niile i rụrụ na mbụ"], answer: 0, why: "Itinye isi okwu na mbụ na-eme ka ozi ọrụ dị ngwa ịgụ." },
            { objective: "O1", q: "AI mere ozi gị nye onye isi ọrụ ka ọ dị oke nkwanye ugwu ma dị ogologo. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o si dị", "Rịọ AI ka o mee ka ọ dị ogologo karị", "Mee ka ọ dị mkpụmkpụ ma gbanwee okwu ka ọ dị ka okwu gị", "Zipu ya n'etinyeghị aha gị"], answer: 2, why: "Ezigbo ozi ọrụ dị mkpụmkpụ, nwee nkwanye ugwu ma dị n'olu nke gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgwa onye isi ọrụ gị okwu",
          minutes: 5,
          goal: "Kwadoo ma mee obere mkparịta ụka nwere nkwanye ugwu na onye isi ọrụ.",
          text: [
            "Ụfọdụ ihe ka mma ikwu ihu na ihu: ịrịọ enyemaka, ịkọwa mperi, ma ọ bụ ịjụ maka oge ọrụ ndị ọzọ. Ntakịrị nkwadebe na-eme ka ọ dị mfe.",
            "Tupu i kwuo okwu, dee isi okwu gị n'otu ahịrịokwu na ihe ị na-atụ anya ka ọ mee. Họrọ oge dị jụụ ma jụọ: \"Ị nwere nkeji abụọ?\" Kwuo okwu nke ọma, gee ntị nke ọma, ma kwughachi ihe ị nụrụ: \"Ya bụ, ị chọrọ ka m mechaa ihe e weghachiri tupu m tinyeghachi ngwaahịa n'ebe ha dị. Aghọtara m.\"",
            "Ị nwere ike iji AI mee omume: \"Mee ka à ga-asị na ị bụ onye isi ọrụ m n'ụlọ nkwakọba ngwaahịa. Achọrọ m ịrịọ maka oge ọrụ ndị ọzọ. Jụọ m ajụjụ, wee gwa m otu m si mee.\""
          ],
          steps: ["Dee isi okwu gị n'otu ahịrịokwu.", "Họrọ oge dị jụụ ma jụọ ma ha nwere nkeji ole na ole.", "Kwuo okwu nke ọma ma gee ntị nke ọma.", "Kwughachi ihe ị nụrụ.", "Ọ bụrụ na ị chọrọ, buru ụzọ jiri AI mee omume."],
          words: [["Ikwughachi (repeat back)", "ikwu n'okwu nke gị ihe mmadụ gwara gị, iji hụ na ị ghọtara ya."], ["Igwu egwu ọnọdụ (role-play)", "ime omume mkparịta ụka site n'ime ya dị ka egwuregwu."]],
          slides: [
            { title: "Ụfọdụ ihe ka a na-ekwu ihu na ihu", bullets: ["Ịrịọ enyemaka", "Ịkọwa mperi", "Ịrịọ maka oge ọrụ ndị ọzọ"] },
            { title: "Otu esi eme ya", bullets: ["Isi okwu n'otu ahịrịokwu", "Họrọ oge dị jụụ", "Gee ntị, wee kwughachi"] },
            { title: "Jiri AI mee omume", bullets: ["\"Mee ka à ga-asị na ị bụ onye isi ọrụ m.\"", "Rịọ ka ọ gwa gị otu i si mee"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka o mee ka onye isi ọrụ gị mgbe ị na-arịọ maka oge ọrụ ndị ọzọ. Mee mkparịta ụka ahụ, wee rịọ ya ndụmọdụ abụọ ka i mee nke ọma karị.",
          youCanNow: "ịkwado ma mee mkparịta ụka nwere nkwanye ugwu na onye isi ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji dee isi okwu gị n'otu ahịrịokwu tupu ị gwa onye isi ọrụ okwu?", options: ["Ka ị gụọrọ ha ya okwu n'okwu", "Ka ị mara kpọmkwem ihe ị chọrọ ikwu", "Ka i zipu ya kama ikwu okwu", "Ka ị hapụ mkparịta ụka ahụ"], answer: 1, why: "Otu ahịrịokwu doro anya na-enyere gị aka ịnọgide n'isi okwu n'oge mkparịta ụka." },
            { objective: "O2", q: "Onye isi ọrụ gị dị ka ọ nọ n'ọrụ ma nwee nchekasị. Gịnị ka ị ga-eme?", options: ["Bido ikwu okwu ozugbo", "Zipu ozi iwe", "Rịọ onye ọrụ ibe gị ka ọ kwuoro gị", "Chere oge dị jụụ ma jụọ ma ha nwere nkeji ole na ole"], answer: 3, why: "Oge dị jụụ na ibu ụzọ jụọ na-egosi nkwanye ugwu ma na-enweta ihe ka mma." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịnabata ndụmọdụ na idozi nsogbu",
          minutes: 5,
          goal: "Zaghachi ndụmọdụ nwayọọ ma kọọ nsogbu n'ụzọ ziri ezi.",
          text: [
            "Ndụmọdụ (feedback) bụ ozi gbasara otu ị na-arụ ọrụ. Ọbụlagodi mgbe ọ na-esi ike ịnụ, ọ bụ ya ka ndị mmadụ ji eme nke ọma karị ma a tụkwasị ha obi n'ihe ndị ọzọ. Gee ntị, kelee, jụọ ajụjụ ma ọ bụrụ na ihe edoghị anya, ma gosi na ị na-arụ ọrụ na ya.",
            "Nsogbu na-eme: ị ga-egbu oge ịbịa ọrụ, i mere mperi, igwe mebiri, onye ọrụ ibe gị na-akpata nsogbu. Kọọ ya n'oge, nye onye kwesịrị ekwesị, jiri eziokwu: ihe mere, mgbe ọ mere, na ihe i mere. \"Etufuru m otu igbe ite iko n'okporo 4 n'elekere 2 nke ehihie. Egbochiri m ebe ahụ ma were aziza. Onye ka m ga-agwa maka ndekọ ngwaahịa?\"",
            "Ọ bụrụ na iwe na-ewe gị, kuo ume tupu ị zaa. Ị nwere ike ịsị: \"Ka m chee echiche banyere ya, m ga-agwa gị.\" Jiri AI nyere aka ịhazi azịza dị nwayọọ, ọ bụghị izipu nke e ji iwe dee."
          ],
          steps: ["Gee ntị n'esoghị arụ ụka.", "Kelee ma jụọ ajụjụ ma ọ dị mkpa.", "Kọọ nsogbu n'oge, jiri eziokwu.", "Kuo ume ma iwe na-ewe gị.", "Mee ihe i kwuru na ị ga-eme."],
          words: [["Ndụmọdụ (feedback)", "ozi gbasara otu ị na-arụ ọrụ, iji nyere gị aka ime nke ọma karị."], ["Ịkọ (report)", "ịgwa onye kwesịrị ekwesị ihe mere."]],
          slides: [
            { title: "Ndụmọdụ na-enyere gị aka itolite", bullets: ["Gee ntị, kelee", "Jụọ ajụjụ ma ihe edoghị anya", "Gosi na ị na-arụ ọrụ na ya"] },
            { title: "Kọọ nsogbu n'oge", bullets: ["Nye onye kwesịrị ekwesị", "Ihe mere, mgbe ọ mere, ihe i mere"] },
            { title: "Nọrọ jụụ", bullets: ["Kuo ume", "\"Ka m chee echiche, m ga-agwa gị.\"", "Jiri AI hazie azịza dị nwayọọ"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Onye isi ọrụ m kwuru na m kwesịrị ịrụ ọrụ ngwa ngwa karị n'ahịrị ọrụ. Nyere m aka ịhazi azịza dị nwayọọ, dị mma, na ụzọ abụọ m ga-esi meziwanye.\" Dee azịza ị ga-eji.",
          youCanNow: "ịzaghachi ndụmọdụ nwayọọ ma kọọ nsogbu nke ọma.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ndụmọdụ (feedback) n'ebe ọrụ?", options: ["Ntaramahụhụ", "Ozi gbasara otu ị na-arụ ọrụ", "Mmụba ụgwọ ọnwa", "Naanị mkpesa sitere n'aka onye ahịa"], answer: 1, why: "Ndụmọdụ bụ ozi gbasara otu ị na-arụ ọrụ ka i wee meziwanye." },
            { objective: "O3", q: "Etufuru gị igbe, ihe dị n'ime ya wee gbajie. Gịnị ka ị ga-eme?", options: ["Zoo ya ma tụọ anya na ọ dịghị onye ga-ahụ ya", "Tụọ onye ọrụ ibe gị ụta", "Kọọrọ onye kwesịrị ekwesị n'oge, jiri eziokwu", "Chere ruo ngwụcha izu"], answer: 2, why: "Ịkọ n'oge, jiri eziokwu, na-egosi ezi omume ma na-enyere aka idozi nsogbu ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ikwu okwu n'ebe ọrụ",
        questions: [
          { objective: "O1", q: "Ebee ka isi okwu kwesịrị ịdị n'ozi ọrụ?", options: ["Ọ dịghị ebe", "N'ọgwụgwụ kpọmkwem", "N'ahịrị mbụ", "N'ozi ọzọ dị iche"], answer: 2, why: "Ndị isi ọrụ nwere ọtụtụ ọrụ na-ebu ụzọ gụọ ahịrị mbụ." },
          { objective: "O1", q: "Kedu nke kacha nwee nkwanye ugwu?", options: ["\"Ndewo Maria, enwere m ike ịgbanwe Satọde gaa na Sọnde n'izu a? Enwere m ike inye aka ịchọta onye ga-anọchi m. Daalụ, Andre\"", "\"agaghị m abịa sat\"", "\"AGAGHỊ M ABỊA SATỌDE\"", "\"??\""], answer: 0, why: "O nwere nkwanye ugwu, doo anya ma na-enye aka." },
          { objective: "O2", q: "Gịnị ka \"ikwughachi\" (repeat back) pụtara?", options: ["Ịpụ apụ", "Ikwu ya n'olu dị elu karị", "Ịrụ ụka", "Ikwu n'okwu nke gị ihe ị nụrụ"], answer: 3, why: "Ọ na-egosi na ị ghọtara." },
          { objective: "O3", q: "Onye isi ọrụ gị nyere gị ndụmọdụ siri ike. Ezigbo azịza mbụ bụ:", options: ["Rụọ ụka ozugbo", "Gee ntị ma kelee", "Hapụ ọrụ ahụ", "Leghara ya anya"], answer: 1, why: "Ige ntị na-egosi na ị nwere ike itolite." },
          { objective: "O3", q: "I mebiri ihe n'ebe ọrụ. Gịnị ka ị na-eme?", options: ["Zoo ya", "Kọọrọ onye kwesịrị ekwesị n'oge, jiri eziokwu", "Tụọ onye ọrụ ibe gị ụta", "Chere ruo mgbe mmadụ hụrụ ya"], answer: 1, why: "Ịkọ n'oge na n'eziokwu na-ewulite ntụkwasị obi." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụcha ọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi ụbọchị ọrụ gị na ịhọrọ ihe mbụ",
          minutes: 5,
          goal: "Mee ndepụta ihe ị ga-eme ma tinye ọrụ ndị kacha mkpa na mbụ.",
          text: [
            "Ndepụta ihe ị ga-eme (to-do list) na-eme ka i chefughị ọrụ ma na-enyere gị aka ibu ụzọ mee ndị kacha mkpa. A na-akpọ nke a ịhọrọ ihe mbụ (prioritizing).",
            "Dee ọrụ ọ bụla. Wee kaa nke ọ bụla akara: Ga-eme taa (oge njedebe, nchekwa, ihe onye isi ọrụ gị rịọrọ), Kwesịrị ime, na Enwere ike ime ma oge dị. Bido na ọrụ ndị ga-eme. Ọ bụrụ na ị maghị nke kacha mkpa, jụọ onye isi ọrụ gị; nke ahụ bụ ajụjụ amamihe, ọ bụghị adịghị ike.",
            "AI nwere ike inye aka hazie ndepụta: \"Ndị a bụ ọrụ m maka oge ọrụ m n'ụlọ ahịa nri. Tinye ha n'usoro mkpa ha ma kọwaa ihe kpatara ya.\" Tụnyere usoro ya na ihe onye isi ọrụ gị kwuru."
          ],
          steps: ["Dee ọrụ ọ bụla.", "Kaa nke ọ bụla akara: ga-eme, kwesịrị ime ma ọ bụ enwere ike ime.", "Buru ụzọ mee ọrụ ndị ga-eme.", "Jụọ onye isi ọrụ gị ma ọ bụrụ na ị maghị.", "Kaa ọrụ akara ka ị na-emecha ha."],
          words: [["Ịhọrọ ihe mbụ (prioritize)", "ikpebi ọrụ ndị kacha mkpa ma buru ụzọ mee ha."], ["Oge njedebe (deadline)", "oge a ga-emecharịrị ihe."]],
          slides: [
            { title: "Ndepụta ihe ị ga-eme na-enye aka", bullets: ["Ọ dịghị ihe a ga-echefu", "Ihe ndị dị mkpa na mbụ"] },
            { title: "Ga-eme, kwesịrị ime, enwere ike ime", bullets: ["Ga-eme: oge njedebe, nchekwa, ihe onye isi ọrụ rịọrọ", "Kwesịrị ime: dị mkpa, na-adịghị ngwa ngwa", "Enwere ike ime: ma oge dị"] },
            { title: "AI nwere ike ịhazi ya", bullets: ["\"Tinye ọrụ m n'usoro mkpa ha.\"", "Tụnyere ya na ihe onye isi ọrụ gị kwuru"] }
          ],
          tryIt: "Dee ọrụ isii site n'ezi oge ọrụ ma ọ bụ nke i chepụtara. Kaa nke ọ bụla akara: ga-eme, kwesịrị ime ma ọ bụ enwere ike ime. Rịọ ngwa enyemaka AI ka o tinye ha n'usoro, ma tụnyere ya na usoro nke gị.",
          youCanNow: "ịhazi ụbọchị ọrụ ma buru ụzọ mee ọrụ ndị kacha mkpa.",
          quickCheck: [
            { objective: "O4", q: "N'ime ndepụta ga-eme, kwesịrị ime, enwere ike ime, kedu ọrụ na-aga n'okpuru \"ga-eme\"?", options: ["Ọrụ a ga-emerịrị taa", "Ọrụ ị kacha hụ n'anya", "Ọrụ kacha dị mfe", "Ọrụ maka ọnwa na-abịa"], answer: 0, why: "Ọrụ ndị ga-eme bụ ndị a ga-emerịrị taa, ọtụtụ mgbe nwere oge njedebe." },
            { objective: "O4", q: "Ọrụ abụọ dị ka ha abụọ dị ngwa ngwa, ị maghịkwa nke ga-ebu ụzọ. Gịnị ka ị ga-eme?", options: ["Mee nke dị mfe", "Emela nke ọ bụla", "Mee ha abụọ ọkara ọkara", "Jụọ onye isi ọrụ gị nke kacha mkpa"], answer: 3, why: "Mgbe ị maghị ihe kacha mkpa, jụọ onye isi ọrụ gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Usoro oge na akwụkwọ e kesara",
          minutes: 6,
          goal: "Meghee usoro oge ma ọ bụ akwụkwọ e kesara, chọta akụkụ nke gị, ma tinye ihe na ya.",
          text: [
            "Ọtụtụ ọrụ na-ekesa usoro oge na akwụkwọ n'ịntanetị. Oge ọrụ gị nwere ike ịdị n'app usoro oge nke onye were gị n'ọrụ họọrọ; ndepụta nlele na fọm nwere ike ịdị na Google Docs, Google Sheets, Microsoft Word ma ọ bụ Excel.",
            "Mgbe mmadụ kesara akwụkwọ, ị na-enweta njikọ (link) site na email ma ọ bụ ozi ederede. Pịa ya, banye (sign in) ma a rịọ gị, ma chọta akụkụ nke gị. Ị nwere ike ide ihe n'akwụkwọ ahụ, ndị ọzọ na-ahụkwa mgbanwe ahụ. Nkọwa (comment) na-ekwe ka ị jụọ ajụjụ n'agbanweghị ederede ahụ: họrọ okwu ndị ahụ ma pịa Comment.",
            "Lelee app usoro oge gị kwa ụbọchị, ma ọ bụrụ na oge ọrụ agbanwee, kwado ya na onye isi ọrụ gị. Agbanwela ihe ọ bụla n'akwụkwọ e kesara na-abụghị nke gị ịgbanwe; buru ụzọ jụọ."
          ],
          steps: ["Pịa njikọ e kesara site na email ma ọ bụ ozi ederede.", "Banye (sign in) ma a rịọ gị.", "Chọta akụkụ nke gị n'akwụkwọ ma ọ bụ usoro oge ahụ.", "Dee ihe ọhụrụ gị, ma ọ bụ tinye nkọwa (comment) iji jụọ ajụjụ.", "Lelee usoro oge gị kwa ụbọchị ma kwado mgbanwe."],
          words: [["Akwụkwọ e kesara (shared document)", "faịlụ dị n'ịntanetị nke ọtụtụ mmadụ nwere ike imeghe ma gbanwee."], ["Nkọwa (comment)", "ndetu e tinyere n'akụkụ ederede, e ji ajụ ma ọ bụ aza ajụjụ."]],
          slides: [
            { title: "A na-ekesa ọrụ n'ịntanetị", bullets: ["Usoro oge n'app", "Docs na Sheets, Word na Excel"] },
            { title: "Iji akwụkwọ e kesara", bullets: ["Pịa njikọ, banye", "Chọta akụkụ nke gị", "Dee ihe, ma ọ bụ tinye nkọwa (comment)"] },
            { title: "Ezigbo omume", bullets: ["Lelee usoro oge gị kwa ụbọchị", "Kwado mgbanwe na onye isi ọrụ gị", "Gbanwee naanị ihe bụ nke gị"] }
          ],
          tryIt: "Mepụta Google Doc ma ọ bụ akwụkwọ Word n'efu, kpọọ ya \"Izu ọrụ m\". Dee oge ọrụ gị maka otu izu, tinye otu nkọwa (comment) dị ka ajụjụ, ma mee omume ikesa ya site na njikọ nye onye ezinụlọ gị ma ọ bụ onwe gị.",
          youCanNow: "iji usoro oge na akwụkwọ e kesara ma tinye ihe na ha n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Kedu otu ị na-esikarị abanye n'akwụkwọ e kesara?", options: ["Site n'ịzụta ya", "Site na njikọ e zitere site na email ma ọ bụ ozi ederede", "Site n'ibipụta ya", "Site n'ịkpọ ụlọ ọrụ ahụ oku"], answer: 1, why: "Mgbe e kesara gị akwụkwọ, ị na-enwetakarị njikọ." },
            { objective: "O5", q: "Ị hụrụ mperi n'akụkụ nke onye ọrụ ibe gị n'usoro oge e kesara. Gịnị ka ị ga-eme?", options: ["Gbanwee ya n'onwe gị", "Hichapụ akụkụ nke ya", "Tinye nkọwa (comment) ma ọ bụ jụọ ya banyere ya", "Leghara ya anya ruo mgbe ebighị ebi"], answer: 2, why: "Ị naghị agbanwe akụkụ na-abụghị nke gị; buru ụzọ tinye nkọwa ma ọ bụ jụọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji AI n'ebe ọrụ n'ụzọ ziri ezi",
          minutes: 5,
          goal: "Gbasoo iwu AI nke ebe ọrụ gị ma debe ozi ụlọ ọrụ na nke ndị ahịa na nzuzo.",
          text: [
            "Ọtụtụ ebe ọrụ na-eji AI, ọtụtụ nwekwara iwu gbasara ya. Ụfọdụ na-ekwe ka e jiri ụfọdụ ngwa; ụfọdụ anaghị ekwe AI ma ọlị maka ụfọdụ ọrụ. Mgbe niile, jụọ onye isi ọrụ gị ihe a na-ekwe tupu i jiri AI rụọ ọrụ.",
            "Etinyela ozi nzuzo nke ọrụ n'ime ngwa AI ọha mgbe ọ bụla: aha ndị ahịa, adreesị ha ma ọ bụ ozi ịkwụ ụgwọ ha, ozi gbasara ndị ọrụ ibe gị, ọnụ ahịa ma ọ bụ atụmatụ na-abụghị ọha, ma ọ bụ okwuntughe. Nke ahụ nwere ike imebi iwu ụlọ ọrụ na iwu obodo.",
            "Jiri AI maka ihe dị ka ime ka ihe i dere ka mma, ịkọwa okwu, ma ọ bụ ime omume mkparịta ụka. Lelee ihe ọ kwuru, ma kwuo eziokwu ma ọ bụrụ na i jiri ya mee ihe ị na-enyefe."
          ],
          steps: ["Jụọ onye isi ọrụ gị iji AI a na-ekwe.", "Etinyela ozi nzuzo nke ndị ahịa, ndị ọrụ ibe ma ọ bụ ụlọ ọrụ n'ime AI mgbe ọ bụla.", "Jiri AI maka ihe i dere n'onwe gị na ịmụ ihe.", "Lelee azịza ya.", "Kwuo eziokwu banyere iji ya."],
          words: [["Nzuzo ụlọ ọrụ (confidential)", "ozi nzuzo a na-agaghị ekesa na mpụga ụlọ ọrụ ahụ."], ["Iwu ebe ọrụ (policy)", "iwu e dere ede n'ebe ọrụ."]],
          slides: [
            { title: "Buru ụzọ jụọ", bullets: ["Ebe ọrụ nwere iwu AI", "Jụọ onye isi ọrụ gị ihe a na-ekwe"] },
            { title: "Etinyela ihe ndị a n'ime AI", bullets: ["Aha ndị ahịa ma ọ bụ ozi ịkwụ ụgwọ ha", "Ozi gbasara ndị ọrụ ibe gị", "Atụmatụ ụlọ ọrụ, ọnụ ahịa ma ọ bụ okwuntughe"] },
            { title: "Ezigbo ojiji", bullets: ["Mee ka ihe i dere ka mma", "Kọwaa okwu", "Mee omume mkparịta ụka"] }
          ],
          tryIt: "Ọrụ ikpeazụ: rịọ ngwa enyemaka AI ka o nyere gị aka dee obere ozi nwere nkwanye ugwu nye onye isi ọrụ, na-arịọ ịgbanwe otu oge ọrụ, nwere ihe kpatara ya na nkwa inye aka ịchọta onye ga-anọchi gị. Mee ka ọ dị ka okwu gị ma lelee na o nweghị ozi nzuzo. Wee mee ndepụta ihe ị ga-eme, n'usoro mkpa ha, maka otu ụbọchị ọrụ.",
          youCanNow: "ikwu okwu n'ụzọ nwere nkwanye ugwu, ịhazi ọrụ gị, iji ngwa e kesara, na iji AI n'ebe ọrụ n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ iwu ebe ọrụ (policy)?", options: ["Iwu e dere ede n'ebe ọrụ", "Echiche onye ọrụ ibe", "Nyocha onye ahịa", "Ụdị app usoro oge"], answer: 0, why: "Iwu ebe ọrụ bụ iwu e dere ede nke ebe ọrụ gị na-atụ anya ka i gbasoo." },
            { objective: "O6", q: "Ị chọrọ ka AI nyere gị aka zaa mkpesa onye ahịa nwere nọmba ekwentị ya. Gịnị ka ị ga-eme?", options: ["Tinye ya niile n'ime ngwa AI ọha", "Lelee iwu AI ma wepụ ozi onye ahịa ahụ", "Tinye mkpesa ahụ n'ịntanetị ka ị nweta ndụmọdụ", "Zigara enyi gị nọmba onye ahịa ahụ"], answer: 1, why: "Gbasoo iwu AI nke ebe ọrụ gị ma debe ozi ndị ahịa na nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụcha ọrụ",
        questions: [
          { objective: "O4", q: "Gịnị ka \"ịhọrọ ihe mbụ\" (prioritize) pụtara?", options: ["Ime ọrụ n'usoro ọ bụla", "Ime naanị ọrụ kacha dị mfe", "Ịhapụ ọrụ", "Ibu ụzọ mee ọrụ kacha mkpa"], answer: 3, why: "Ịhọrọ ihe mbụ na-etinye ọrụ ndị dị mkpa na mbụ." },
          { objective: "O4", q: "Kedu ọrụ bụ \"ga-eme taa\"?", options: ["Ihe onye isi ọrụ gị rịọrọ nke oge njedebe ya bụ taa", "Ihe ị nwere ike ime n'ọnwa na-abịa", "Ịhazi igbe ihe gị maka obi ụtọ", "Ọ dịghị ihe"], answer: 0, why: "Oge njedebe na arịrịọ onye isi ọrụ na-ebu ụzọ." },
          { objective: "O5", q: "Ị chọrọ ịjụ ajụjụ gbasara otu ahịrị n'akwụkwọ e kesara. Ị ga:", options: ["Dee ya ọzọ n'ajụghị", "Hichapụ ahịrị ahụ", "Tinye nkọwa (comment)", "Leghara ya anya"], answer: 2, why: "Nkọwa na-ajụ ajụjụ n'agbanweghị ederede ahụ." },
          { objective: "O6", q: "Ị nwere ike itinye aha onye ahịa na nọmba kaadị ya n'ime ngwa AI ọha?", options: ["Naanị ma AI rịọ ya", "Ee, iji chekwaa oge", "Naanị na ngwụcha izu", "Mba, ọ dịghị mgbe"], answer: 3, why: "Ozi ndị ahịa bụ nzuzo ụlọ ọrụ." },
          { objective: "O6", q: "Tupu i jiri AI rụọ ọrụ, ị kwesịrị:", options: ["Izo ya", "Iche na ọ dị mma", "Ịjụ onye isi ọrụ gị ihe a na-ekwe", "Iji ngwa ọ bụla masịrị gị"], answer: 2, why: "Ebe ọrụ nwere iwu AI nke ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nka Ebe Ọrụ na Ịrụ Ọrụ Nke Ọma",
    questions: [
      { objective: "O1", q: "Ozi nwere nkwanye ugwu n'ọrụ bụ:", options: ["Ogologo ma jupụta n'okwu ntorobịa", "Mkpụmkpụ, nwee nsọpụrụ ma doo anya", "Mkpụrụ edemede ukwu niile", "Ọtụtụ emoji"], answer: 1, why: "Ozi doro anya, nwere nsọpụrụ, na-arụ ọrụ kacha mma." },
      { objective: "O1", q: "Ezigbo ozi ọrụ na-ejedebe na:", options: ["Ekele na aha gị", "Ọ dịghị ihe", "Njakịrị", "Nọmba Social Security gị"], answer: 0, why: "Ekele na aha nwere nsọpụrụ ma doo anya." },
      { objective: "O1", q: "AI nwere ike inye aka n'ozi ọrụ site na:", options: ["Ime ka ọ nwekwuo nkwanye ugwu ma ị debe olu nke gị", "Izipu ya n'agụghị gị ya", "Itinye ozi nzuzo", "Ime ka ọ dị ogologo"], answer: 0, why: "AI na-eme ka ọ ka mma; gị na-elele ma mee ka ọ bụrụ nke gị." },
      { objective: "O2", q: "Onye isi ọrụ (supervisor) bụ:", options: ["Onye ọrụ ibe nọ n'ọkwa gị", "Onye na-eduzi ọrụ gị", "Onye ahịa", "Onye na-ebuga ngwaahịa"], answer: 1, why: "Ndị isi ọrụ na-elekọta ọrụ na usoro oge ọrụ." },
      { objective: "O2", q: "Tupu ị gwa onye isi ọrụ okwu, dee:", options: ["Ọ dịghị ihe", "Okwu ogologo", "Isi okwu gị n'otu ahịrịokwu", "Mkpesa gbasara ndị ọrụ ibe"], answer: 2, why: "Otu ahịrịokwu doro anya na-eme ka ị nọgide n'isi okwu." },
      { objective: "O2", q: "Ezigbo oge ịgwa onye isi ọrụ okwu bụ:", options: ["Ọ dịghị mgbe", "N'oge ọgba aghara ọrụ", "Mgbe ha na onye ahịa nọ", "Oge dị jụụ, mgbe ị jụrụ ma ha nwere nkeji ole na ole"], answer: 3, why: "Oge dị jụụ na-enweta ihe ka mma." },
      { objective: "O2", q: "Igwu egwu ọnọdụ (role-play) na AI na-enyere gị aka:", options: ["Inweta mmụba ụgwọ ozugbo", "Izere mkparịta ụka niile", "Ime omume mkparịta ụka tupu ọ mee", "Ịhapụ ọrụ"], answer: 2, why: "Omume na-ewulite obi ike." },
      { objective: "O3", q: "Ndụmọdụ (feedback) bụ:", options: ["Ozi gbasara otu ị na-arụ ọrụ", "Ntaramahụhụ", "Ụgwọ ọnwa", "Usoro oge ọrụ"], answer: 0, why: "Ndụmọdụ na-enyere gị aka imeziwanye." },
      { objective: "O3", q: "Mgbe ị na-akọ nsogbu, tinye:", options: ["Asịrị", "Onye a ga-ata ụta", "Ọ dịghị ihe", "Ihe mere, mgbe ọ mere, na ihe i mere"], answer: 3, why: "Eziokwu na-enyere aka idozi nsogbu ahụ." },
      { objective: "O3", q: "Ọ bụrụ na iwe na-ewe gị n'ebe ọrụ, ezigbo azịza bụ:", options: ["Iti mkpu", "\"Ka m chee echiche banyere ya, m ga-agwa gị.\"", "Ịpụ n'ebe ọrụ", "Izipu ozi iwe"], answer: 1, why: "Iwere oge na-eme ka ihe dị jụụ." },
      { objective: "O4", q: "Oge njedebe (deadline) bụ:", options: ["Ezumike nkenke", "Oge a ga-emecharịrị ihe", "Ụbọchị ezumike", "Ụbọchị a na-akwụ ụgwọ ọnwa"], answer: 1, why: "Oge njedebe na-ekwu mgbe a ga-emecha ọrụ." },
      { objective: "O4", q: "N'ime ga-eme, kwesịrị ime, enwere ike ime, ị na-ebido na:", options: ["Ihe ọ bụla na-atọ ụtọ", "Enwere ike ime", "Kwesịrị ime", "Ga-eme"], answer: 3, why: "Ọrụ ndị ga-eme na-ebu ụzọ." },
      { objective: "O4", q: "Ọ bụrụ na ị maghị ihe kacha mkpa, ị:", options: ["Na-ajụ onye isi ọrụ gị", "Na-eche echiche ma tụọ anya", "Anaghị eme ihe ọ bụla", "Na-ajụ onye ahịa"], answer: 0, why: "Ịjụ ajụjụ bụ amamihe, ọ bụghị adịghị ike." },
      { objective: "O5", q: "Akwụkwọ e kesara bụ:", options: ["Okwuntughe", "Akwụkwọ dị n'igbe ihe gị", "Faịlụ dị n'ịntanetị nke ọtụtụ mmadụ nwere ike ịgbanwe", "Akwụkwọ ndekọ nzuzo"], answer: 2, why: "A na-agbanwe akwụkwọ e kesara ọnụ." },
      { objective: "O5", q: "Mgbe e kesara gị akwụkwọ, ị na-enwetakarị:", options: ["Ọ dịghị ihe", "Akwụkwọ ozi n'ụlọ ozi (post)", "Naanị oku ekwentị", "Njikọ (link) site na email ma ọ bụ ozi ederede"], answer: 3, why: "Njikọ na-emeghe faịlụ e kesara." },
      { objective: "O5", q: "Ị kwesịrị ịgbanwe akụkụ akwụkwọ e kesara na-abụghị nke gị?", options: ["Naanị n'abalị", "Ee, mgbe ọ bụla", "Mba; buru ụzọ jụọ", "Naanị ma ike gwụrụ gị"], answer: 2, why: "Sọpụrụ ọrụ ndị ọzọ." },
      { objective: "O5", q: "Ugboro ole ka ị kwesịrị ilele app usoro oge gị?", options: ["Otu ugboro n'afọ", "Kwa ụbọchị", "Ọ dịghị mgbe", "Naanị mgbe a chụrụ gị n'ọrụ"], answer: 1, why: "Oge ọrụ nwere ike ịgbanwe." },
      { objective: "O6", q: "Ozi \"nzuzo ụlọ ọrụ\" (confidential) bụ:", options: ["Ozi nzuzo a na-agaghị ekesa na mpụga ụlọ ọrụ", "Akụkọ ọha", "Ọnọdụ ihu igwe", "Abụ kacha masị gị"], answer: 0, why: "Ọ na-anọ n'ime ụlọ ọrụ ahụ." },
      { objective: "O6", q: "Ezigbo ojiji AI n'ebe ọrụ, ma ọ bụrụ na e kwere, bụ:", options: ["Ime ka ihe i dere n'onwe gị ka mma", "Itinye ozi ịkwụ ụgwọ ndị ahịa", "Ikesa adreesị ndị ọrụ ibe", "Itinye atụmatụ ụlọ ọrụ n'ịntanetị"], answer: 0, why: "Ihe i dere n'onwe gị enweghị ozi nzuzo." },
      { objective: "O6", q: "\"Iwu ebe ọrụ\" (policy) bụ:", options: ["Naanị ụdị inshọransị", "Iwu e dere ede n'ebe ọrụ", "Onye ọrụ ibe", "Ezumike nri ehihie"], answer: 1, why: "Iwu ebe ọrụ na-ekpebi usoro ebe ọrụ, gụnyere banyere AI." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      7,
      8,
      10,
      11,
      13,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Arịrịọ doro anya",
        objective: "O1",
        notYet: "Ozi ahụ ekwughị oge ọrụ ọ bụ ma ọ bụ ihe kpatara ya, ma ọ bụ na isi okwu ezoro ezo.",
        meets: "Ahịrị mbụ na-arịọ ịgbanwe oge ọrụ a kpọrọ aha, nwere obere ihe kpatara ya.",
        exceeds: "Ọ dị mkpụmkpụ nke na a ga-agụ ya n'ime sekọnd ole na ole, ma jiri ekele na aha gị mechie."
      },
      {
        name: "Nkwa inye aka",
        objective: "O1",
        notYet: "Ọ dịghị nkwa inye aka ịchọta onye ga-anọchi.",
        meets: "Na-ekwe nkwa inye aka ịchọta onye ga-anọchi n'oge ọrụ ahụ.",
        exceeds: "Na-akpọ aha onye ọrụ ibe nwere ike ịnọchi, ma ọ bụ oge a ga-ekwu banyere ya."
      },
      {
        name: "Ọ dị ka okwu gị, ozi nzuzo adịghị n'ime ya",
        objective: "O6",
        notYet: "Na-eji okwu onye na-amụ ihe agaghị ekwu, ma ọ bụ nwee ozi nzuzo.",
        meets: "O nwere nkwanye ugwu, dị n'okwu onye na-amụ ihe n'onwe ya, ma o nweghị ozi nzuzo.",
        exceeds: "Onye na-amụ ihe gbanwere ụfọdụ okwu AI n'onwe ya ma nwee ike ikwu ihe kpatara ya."
      },
      {
        name: "Ndepụta ihe ị ga-eme n'usoro mkpa",
        objective: "O4",
        notYet: "Ọrụ ndị ahụ enweghị usoro, ma ọ bụ na ọrụ nwere oge njedebe anọghị na mbụ.",
        meets: "E kewara ọrụ ndị ahụ n'ime ga-eme, kwesịrị ime na enwere ike ime, ebe oge njedebe taa dị na mbụ.",
        exceeds: "Na-edekwa onye a ga-ajụ ma ọ bụrụ na ihe mbụ edoghị anya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka nọ n'ọrụ ụbọchị 90 mgbe ha malitere ọrụ (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha zipụrụ ozi ọrụ nwere nkwanye ugwu ma ọ bụ jiri usoro oge e kesara n'ime ụbọchị 30",
      "Akụkọ sitere n'aka ndị were mmadụ n'ọrụ ma ọ bụ ndị mmekọ re-entry na ndị gụsịrị mmemme ahụ na-ekwu okwu nke ọma karị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke mmemme ahụ",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Ngwa akwụkwọ ma ọ bụ usoro oge e kesara n'efu maka omume, dị ka Google Docs",
      "Akwụkwọ na mkpịsị ode maka ndepụta ihe ị ga-eme",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mgbe Nkuzi 2 gasịrị, ka ndị na-amụ ihe mee mkparịta ụka onye isi ọrụ n'abụọ n'abụọ; ọ na-ewulite obi ike ngwa ngwa.",
      "Jiri aha omume na oge ọrụ e chepụtara; ejila ezi ozi nzuzo nke ndị ahịa ma ọ bụ ndị ọrụ ibe mgbe ọ bụla.",
      "Chetara ndị na-amụ ihe na onye were mmadụ n'ọrụ ọ bụla nwere iwu AI nke ya, na ha kwesịrị ibu ụzọ jụọ tupu ha ejiri AI n'ebe ọrụ.",
      "Hazie otu akwụkwọ omume e kesara ka ndị na-amụ ihe nwee ike itinye ihe na ya n'agbanweghị akụkụ nke ndị ọzọ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

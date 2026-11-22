"use strict";

// Koach Learn course (Igbo translation of shared/ride-and-food-apps.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ride-and-food-apps-ig",
  lang: "ig",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Ịkpọ Ụgbọala ma ọ bụ Ịzụ Nri site na App (Uber, Lyft, DoorDash)",
  skills: "Ịhazi app ụgbọala ma ọ bụ app nnyefe, Ịrịọ ụgbọala, Ịlele na ọ bụ ezi ụgbọala, Ịzụ nri ma ọ bụ ihe oriri ka e wetara gị, Ịlele ọnụahịa, ego ekele (tip) na akwụkwọ nnata ego",
  outcome: "ịhazi app ụgbọala ma ọ bụ app nnyefe, ịhụ ọnụahịa tupu ị kwado, ịrịọ ụgbọala ma lelee na ọ bụ ezi ụgbọala tupu ị banye, ịzụ nri ma ọ bụ ihe oriri ka e wetara gị n'ọnụ ụzọ, na ịlele akwụkwọ nnata ego (receipt) emesịa.",
  about: [
    "App ụgbọala dị ka Uber na Lyft na-ezite onye ọkwọ ụgbọala ka o bịa buru gị. App nnyefe dị ka DoorDash, Uber Eats na Instacart na-ewetara gị nri ma ọ bụ ihe oriri n'ọnụ ụzọ. Ha na-enyere aka mgbe ị naghị akwọ ụgbọala, ị pụghị ịga ụlọ ahịa, ma ọ bụ ị chọrọ ụgbọala ịga n'ụlọ dọkịta ma ọ bụ n'ajụjụ ọnụ ọrụ.",
    "Ihe ọmụmụ a na-egosi gị otu esi ahazi app ndị a, ịhụ ọnụahịa tupu i kwere, ịbanye n'ezi ụgbọala n'enweghị nsogbu, ịzụ nri, na ịlele ihe i kwụrụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Menu app na-agbanwe mgbe niile, ya mere anyị na-akọwa ihe ị ga-eme kama aha bọtịnụ ọ bụla."
  ],
  finalTask: "N'app ụgbọala, tinye ezi ebe a ga-ebuli gị na ebe ị na-aga (dịka ọmụmaatụ site n'ụlọ gị ruo ụlọ ọgwụ ma ọ bụ ọba akwụkwọ), gụọ ọnụahịa na oge ọ ga-abịa, ma chọta ngwa nchekwa (ịkesa njem gị, bọtịnụ mberede, PIN njem) n'akwadoghị ya ma ọ bụrụ na ị chọghị ụgbọala ahụ. Wee n'app nnyefe, mee obere order, lelee ọnụahịa ihe ndị ahụ, ụgwọ ndị ọzọ, tip na adreesị nnyefe na ihuenyo ịkwụ ụgwọ (checkout), ma kọwaa ihe ahịrị ọ bụla pụtara.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ụgbọala ịga ọkwa (appointment), ọrụ ma ọ bụ ozi, ma ọ bụ chọrọ ka e wetara ha nri na ihe oriri n'ụlọ: ndị agadi na-adịghị akwọ ụgbọala ọzọ, ndị nwere nkwarụ, ndị na-elekọta mmadụ, ndị na-alọta n'obodo na onye ọ bụla dị ọhụrụ n'app ụgbọala na app nnyefe.",
    startingPoint: "Ha nwere ike iji smartphone meghee app ma dee adreesị, ụfọdụ nwekwara kaadị debit ma ọ bụ kaadị kredit. Ọtụtụ n'ime ha akwadobeghị ụgbọala ma ọ bụ nnyefe n'app mgbe ọ bụla, amaghị nke ọma otu ọnụahịa, ụgwọ na tip si arụ ọrụ, ma ọ bụ amaghị ihe nchekwa a na-elele tupu ịbanye n'ụgbọala.",
    gap: "App ụgbọala na app nnyefe nwere ike inyere mmadụ aka iru ụlọ ọgwụ ma ọ bụ ọrụ n'oge ma nweta nri n'agaghị ebe ọ bụla, mana ndị na-amaghị nzọụkwụ ndị ahụ nwere ike ikwu ụgwọ karịrị nke ha tụrụ anya, banye n'ụgbọala na-abụghị nke ha, ma ọ bụ daba n'aghụghọ ndị na-eme ka à ga-asị na ha bụ ndị enyemaka app.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka pin ebe a ga-ebuli gị, ụgwọ ọrụ (service fee) na ihe nnọchi (substitution)",
      "Ngwaọrụ: smartphone nwere ọnọdụ (location) gbanyere na ezi app ahụ",
      "Oge: ihe dị ka nkeji 5 n'otu nkuzi, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: ọ dịghị ụgbọala ma ọ bụ order a ga-akwado maka ihe ọmụmụ a; ọnụahịa na ụgwọ na-agbanwe dabere n'app, oge na obodo",
      "Afọ ndụ na nchekwa: iwu Uber chọrọ ndị okenye ma ọ bụ akaụntụ nwata (teen) nne ma ọ bụ nna hazịrị; ndị na-amụ ihe anaghị ekesa okwuntughe ma ọ bụ koodu na onye ọ bụla kpọrọ ha ma ọ bụ zitere ha ozi"
    ],
    prerequisites: "Iji Smartphone na Tablet, ma ọ bụ ike iwunye app site n'ezi ụlọ ahịa app."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ezi ụlọ ahịa app", action: "iwunye app ụgbọala, mepụta akaụntụ ma tinye ụzọ ịkwụ ụgwọ n'enweghị nsogbu", standard: "mgbe i lelere onye mere app ahụ ma dee ozi kaadị naanị n'ime app ahụ" },
    { id: "O2", condition: "Mgbe e nyere gị ebe a ga-ebuli gị na ebe ị na-aga", action: "itinye ha abụọ n'app ụgbọala ma gụọ ọnụahịa na oge ọ ga-abịa tupu ị kwado", standard: "mgbe i lelere ebe a ga-ebuli gị na map ma gụọ ọnụahịa tupu ịkwado" },
    { id: "O3", condition: "Mgbe ụgbọala i kwadoro bịarutere", action: "ịlele nọmba ụgbọala, ụgbọala ahụ na onye ọkwọ ya megide app ahụ ma chọta ngwa nchekwa", standard: "n'abanyeghị n'ụgbọala na-adabaghị mgbe ọ bụla ma chọta Share My Trip, bọtịnụ mberede na PIN" },
    { id: "O4", condition: "Site n'iji app nnyefe", action: "itinye adreesị nnyefe gị na ndetu ma mee order na cart", standard: "nwere adreesị zuru ezu, ndetu bara uru na nhọrọ maka ihe na-adịghị n'ahịa" },
    { id: "O5", condition: "Mgbe e nyere gị ihuenyo ịkwụ ụgwọ (checkout)", action: "ịkọwa ahịrị ọ bụla, gụnyere ọnụahịa ihe ndị ahụ, ụgwọ ndị ọzọ, tip na ngụkọta, tupu ị kwụọ ụgwọ", standard: "na-akpọ ụgwọ ọ bụla aha n'ụzọ ziri ezi ma lelee ngụkọta megide ego i kenyere" },
    { id: "O6", condition: "Mgbe njem ma ọ bụ nnyefe gasịrị", action: "ịlele akwụkwọ nnata ego, nweta enyemaka maka nsogbu n'ime app ma jụ enyemaka adịgboroja", standard: "na-eji naanị Help dị n'ime app ma ghara inye okwuntughe ma ọ bụ koodu mgbe ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkpọ ụgbọala",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhazi app ụgbọala",
          minutes: 5,
          goal: "Wụnye app ụgbọala, mepụta akaụntụ ma tinye ụzọ ịkwụ ụgwọ n'enweghị nsogbu.",
          text: [
            "Uber na Lyft bụ app ụgbọala a kacha mara amara na United States (America). Onye ọkwọ ụgbọala na-eji ụgbọala nke ya ebuga gị ebe ị chọrọ ịga, ị na-akwụkwa ụgwọ site n'app ahụ.",
            "Wụnye app ahụ naanị site n'ezi ụlọ ahịa app (Google Play ma ọ bụ App Store) ma lelee na onye mere ya bụ Uber ma ọ bụ Lyft. Debanye aha gị site na nọmba ekwentị gị na email. Iwu Uber kwuru na ị ga-abụrịrị onye gbara afọ 18 ma ọ bụ karịa iji nwee akaụntụ nke gị; ụmụaka dị afọ 13 ruo 17 nwere ike ịnya naanị site n'akaụntụ nwata (teen) nne, nna ma ọ bụ onye nlekọta hazịrị. Lelee iwu app ahụ n'onwe ya maka iwu dị ugbu a.",
            "Tinye ụzọ ịkwụ ụgwọ n'ime app ahụ, dị ka kaadị debit ma ọ bụ kaadị kredit. Dee ya naanị n'ime app ahụ, ọ bụghị n'ozi ederede ma ọ bụ email. Tinye ụlọ gị dị ka ebe echekwara (saved place) ka ọ dị ngwa ịhọrọ ya emesịa."
          ],
          steps: ["Meghee ezi ụlọ ahịa app ma chọọ Uber ma ọ bụ Lyft.", "Lelee aha onye mere ya, wee wụnye ya.", "Debanye aha site na nọmba ekwentị gị na email.", "Tinye ụzọ ịkwụ ụgwọ n'akụkụ payment ma ọ bụ wallet nke app ahụ.", "Chekwaa adreesị ụlọ gị dị ka ebe echekwara."],
          words: [["App ụgbọala (ride app)", "app na-ezite onye ọkwọ ụgbọala n'ụgbọala nke ya ka o bịa buru gị."], ["Ụzọ ịkwụ ụgwọ (payment method)", "kaadị ma ọ bụ akaụntụ app ahụ na-ewere ego na ya."], ["Ebe echekwara (saved place)", "adreesị app ahụ na-echeta, dị ka ụlọ gị."]],
          slides: [
            { title: "Ihe app ụgbọala na-eme", bullets: ["Onye ọkwọ ụgbọala na-eji ụgbọala ya abịa buru gị", "Ị na-akwụ ụgwọ site n'app ahụ", "A kacha mara na US: Uber na Lyft"] },
            { title: "Hazie ya n'enweghị nsogbu", bullets: ["Naanị ezi ụlọ ahịa app", "Lelee aha onye mere ya", "Uber: afọ 18+ maka akaụntụ nke gị; akaụntụ nwata afọ 13-17"] },
            { title: "Tinye ụzọ ịkwụ ụgwọ", bullets: ["Naanị n'ime app ahụ", "Ọ bụghị mgbe ọ bụla site n'ozi ederede ma ọ bụ email", "Chekwaa adreesị ụlọ gị"] }
          ],
          sources: [{ name: "Uber: Iwu ojiji nke US (afọ ndụ na akaụntụ nwata)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Wụnye Uber ma ọ bụ Lyft site n'ezi ụlọ ahịa app, mepụta akaụntụ gị, ma chekwaa adreesị ụlọ gị. Ị nwere ike chere tinye kaadị ruo mgbe ị chọrọ ụgbọala.",
          youCanNow: "iwunye app ụgbọala n'enweghị nsogbu, mepụta akaụntụ ma chekwaa adreesị ụlọ gị.",
          quickCheck: [
            { objective: "O1", q: "N'app ụgbọala, onye na-akwọ ụgbọala ahụ?", options: ["Onye na-akwọ ụgbọ ala obodo (bọs)", "Gị onwe gị", "Onye ọkwọ ụgbọala na-eji ụgbọala nke ya", "Naanị ụlọ ọrụ tagzi"], answer: 2, why: "Onye ọkwọ ụgbọala na-eji ụgbọala nke ya ebuga gị, ị na-akwụkwa ụgwọ site n'app ahụ." },
            { objective: "O1", q: "Ozi ederede gwara gị ka i zighachi nọmba kaadị gị iji mechaa ịhazi akaụntụ ụgbọala gị. Gịnị ka ị ga-eme?", options: ["Zighachi nọmba kaadị ahụ", "Leghara ya anya ma tinye kaadị naanị n'ime ezi app ahụ", "Zipu nọmba kaadị ahụ n'email kama", "Kpọọ nọmba dị n'ozi ahụ ma gụpụta ya"], answer: 1, why: "Dee ozi kaadị gị naanị n'ime app ahụ, ọ bụghị mgbe ọ bụla n'ozi ederede ma ọ bụ email." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịrịọ ụgbọala na ịhụ ọnụahịa na mbụ",
          minutes: 5,
          goal: "Tinye ebe a ga-ebuli gị na ebe ị na-aga ma gụọ ọnụahịa tupu ị kwado.",
          text: [
            "Meghee app ahụ ma dee ebe ị chọrọ ịga n'igbe \"Where to?\" (\"Ebee ka ị na-aga?\"). Lelee ebe a ga-ebuli gị (pickup): app ahụ na-eji ọnọdụ gị, mana ị nwere ike ịkwaga pin ahụ ma ọ bụ dee adreesị ka onye ọkwọ ụgbọala chọta gị.",
            "App ahụ na-egosi nhọrọ ụgbọala, site n'ụgbọala a na-ekerịta ma ọ bụ nke nkịtị dị ọnụ ala ruo n'ụgbọala buru ibu ma ọ bụ mara mma karịa, nke ọ bụla nwere ọnụahịa na oge ọ ga-abịa. Ọnụahịa nwere ike ịdị elu karịa n'oge ọtụtụ mmadụ na-achọ ụgbọala, dị ka oge ọgba aghara ụzọ (rush hour) ma ọ bụ mgbe nnukwu mmemme gwụrụ.",
            "Họrọ ụgbọala, lelee ọnụahịa na ụzọ ịkwụ ụgwọ, wee kwado. Mgbe ahụ app ahụ na-egosi aha onye ọkwọ ụgbọala, foto ya, ụgbọala ya na nọmba ụgbọala (license plate), na map na-egosi ụgbọala ahụ ka ọ na-abịakwute gị."
          ],
          steps: ["Dee ebe ị na-aga n'igbe \"Where to?\".", "Lelee ebe a ga-ebuli gị; kwaga pin ahụ ma ọ dị mkpa.", "Tụnyere nhọrọ ụgbọala: ọnụahịa na oge ọ ga-abịa.", "Lelee ụzọ ịkwụ ụgwọ.", "Kwado naanị mgbe ọnụahịa dị gị mma.", "Lee map ahụ ka ịhụ ụgbọala gị."],
          words: [["Ebe a ga-ebuli gị (pickup spot)", "ebe onye ọkwọ ụgbọala ga-ezute gị."], ["Ebe ị na-aga (destination)", "ebe ị chọrọ ịga."], ["Ọnụahịa oge ọtụtụ mmadụ (busy-time pricing)", "ọnụahịa dị elu karịa mgbe ọtụtụ mmadụ na-achọ ụgbọala n'otu oge."]],
          slides: [
            { title: "Ebee ka ị na-aga? (Where to?)", bullets: ["Dee ebe ị na-aga", "Lelee ebe a ga-ebuli gị na map"] },
            { title: "Hụ ọnụahịa na mbụ", bullets: ["Nhọrọ ụgbọala ọ bụla na-egosi ọnụahịa na oge", "Ọnụahịa nwere ike ịrị elu n'oge ọtụtụ mmadụ"] },
            { title: "Kwado", bullets: ["Lelee ọnụahịa na ụzọ ịkwụ ụgwọ", "Wee hụ onye ọkwọ ụgbọala, ụgbọala na nọmba ya"] }
          ],
          tryIt: "Meghee app ụgbọala ma dee ezi ebe ị na-aga, dị ka ụlọ ọgwụ, ọba akwụkwọ ma ọ bụ ebe enyemaka ọrụ. Gụọ nhọrọ ụgbọala abụọ na ọnụahịa ha. Mechie app ahụ n'akwadoghị ma ọ bụrụ na ị chọghị ụgbọala ahụ.",
          youCanNow: "ịrịọ ụgbọala ma gụọ ọnụahịa na oge ọ ga-abịa tupu i kwere.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka app ahụ na-egosi gị mgbe i kwadoro ụgbọala?", options: ["Aha onye ọkwọ ụgbọala, foto ya, ụgbọala ya na nọmba ụgbọala", "Ego dị n'akaụntụ ụlọ akụ gị", "Ndepụta ụlọ nri", "Okwuntughe gị"], answer: 0, why: "Mgbe i kwadoro, app ahụ na-egosi onye ọkwọ ụgbọala, ụgbọala, nọmba ya na map." },
            { objective: "O2", q: "App ahụ tinyere pin ebe a ga-ebuli gị n'ofe okporo ụzọ jupụtara n'ụgbọala site n'ebe ị guzo. Gịnị ka ị ga-eme?", options: ["Kwado ya otú ahụ ma gbafee okporo ụzọ", "Kagbuo akaụntụ gị", "Họrọ ụgbọala kacha dị oke ọnụ", "Kwaga pin ahụ ma ọ bụ dee adreesị ka onye ọkwọ ụgbọala chọta gị"], answer: 3, why: "Ị nwere ike ịkwaga pin ahụ ma ọ bụ dee adreesị ka ebe a ga-ebuli gị zie ezi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịbanye n'ezi ụgbọala n'enweghị nsogbu",
          minutes: 5,
          goal: "Lelee ụgbọala, nọmba ya na onye ọkwọ ya tupu ị banye, ma jiri ngwa nchekwa.",
          text: [
            "Tupu ị banye, lelee ihe atọ megide app ahụ: nọmba ụgbọala (license plate), ụdị na agba ụgbọala ahụ, na aha na foto onye ọkwọ ụgbọala. Jụọ \"Who are you here for?\" (\"Onye ka ị bịara ịkpọ?\") ma hapụ onye ọkwọ ụgbọala ka o kwuo aha gị. Ọ bụrụ na ihe ọ bụla adabaghị, abanyela.",
            "Uber nwere PIN ọnụọgụ anọ ị nwere ike ịhọrọ iji: ị na-agwa onye ọkwọ ụgbọala PIN ahụ, njem ahụ nwere ike ịmalite naanị site n'ezi PIN. Share My Trip nke Uber na-ekwe ka ezinụlọ ma ọ bụ ndị enyi ị tụkwasịrị obi soro njem gị ozugbo ka ọ na-aga, bọtịnụ mberede dị n'ime app ya na-akpọtụrụ 911 (nọmba mberede US) ma gosi ebe ị nọ na ozi ụgbọala ahụ. Lyft nwere ngwa nchekwa nke ya; chọta ha na peeji nchekwa ya ma ọ bụ n'ime app ahụ.",
            "Nọrọ n'ime ụlọ ruo mgbe app ahụ gosiri na ụgbọala ahụ abịarutela, abanyekwala n'ụgbọala nyere gị njem n'akwadoghị ya n'app ahụ."
          ],
          steps: ["Nọrọ n'ime ụlọ ruo mgbe app ahụ kwuru na ụgbọala abịala.", "Lelee nọmba ụgbọala, ụgbọala na foto onye ọkwọ ya.", "Jụọ \"Who are you here for?\"", "Jiri PIN ahụ ma ọ bụrụ na i gbanyere ya.", "Kesaa njem gị na onye ezinụlọ ma ọ bụ enyi.", "Mara ebe bọtịnụ mberede dị."],
          words: [["Nọmba ụgbọala (license plate)", "efere nọmba dị n'ụgbọala; lelee na ọ dabara n'app ahụ."], ["Share My Trip", "ngwa Uber na-ekwe ka ndị ị họọrọ soro njem gị ozugbo."], ["PIN", "obere koodu ọnụọgụ ị na-agwa onye ọkwọ ụgbọala iji malite njem."]],
          slides: [
            { title: "Lelee tupu ị banye", bullets: ["Nọmba ụgbọala", "Ụdị na agba ụgbọala", "Aha na foto onye ọkwọ ụgbọala"] },
            { title: "Jụọ, agwala", bullets: ["\"Who are you here for?\"", "Hapụ onye ọkwọ ụgbọala ka o kwuo aha gị", "Ọ dabaghị? Abanyela"] },
            { title: "Ngwa nchekwa (Uber)", bullets: ["PIN njem ọnụọgụ anọ ị nwere ike ịhọrọ", "Share My Trip na ndị ị tụkwasịrị obi", "Bọtịnụ mberede na-ejikọ gị na 911"] },
            { title: "Lyft na ndị ọzọ", bullets: ["Nwere ngwa nchekwa nke ha", "Chọta ha n'app ma ọ bụ na peeji nchekwa"] }
          ],
          sources: [{ name: "Uber: Nchekwa ndị njem", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Meghee akụkụ nchekwa nke app ụgbọala gị. Chọta otu esi akesa njem na ebe bọtịnụ mberede dị. Ọ bụrụ na app gị nwere PIN njem, gbanye ya.",
          youCanNow: "ịlele na ị nwere ezi ụgbọala na onye ọkwọ ya, ma jiri ngwa nchekwa nke app ahụ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Share My Trip nke Uber na-eme?", options: ["Ọ na-ekere ọnụahịa gị na onye ị na-amaghị", "Ọ na-ekwe ka ezinụlọ ma ọ bụ ndị enyi ị tụkwasịrị obi soro njem gị ozugbo", "Ọ na-etinye njem gị na soshal midia", "Ọ na-enye onye ọkwọ ụgbọala okwuntughe gị"], answer: 1, why: "Share My Trip na-ekwe ka ndị ị tụkwasịrị obi soro njem gị ozugbo." },
            { objective: "O3", q: "Onye ọkwọ ụgbọala jụrụ \"Are you Maria?\" (\"Ị bụ Maria?\"), ma ị bụ Maria. Gịnị ka ị ga-eme kama ịsị ee?", options: ["Banye ozugbo", "Gwa onye ọkwọ ụgbọala PIN gị tupu i lelee ihe ọ bụla", "Jụọ \"Who are you here for?\" ma hapụ onye ọkwọ ụgbọala ka o kwuo aha gị", "Nye onye ọkwọ ụgbọala ekwentị gị"], answer: 2, why: "Ịhapụ onye ọkwọ ụgbọala ka o kwuo aha gị na-egosi na e zitere ya n'ezie maka gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkpọ ụgbọala",
        questions: [
          { objective: "O1", q: "Ebee ka ị kwesịrị inweta app Uber ma ọ bụ Lyft?", options: ["Njikọ (link) n'ozi ederede", "Weebụsaịtị ọ bụla", "Ezi ụlọ ahịa app", "Mgbasa ozi na-apụta na mberede"], answer: 2, why: "Ezi ụlọ ahịa app nwere ezi app ndị ahụ." },
          { objective: "O2", q: "Olee mgbe ị ga-ahụ ọnụahịa njem?", options: ["Tupu ị kwado njem ahụ", "Naanị mgbe njem ahụ gasịrị", "Naanị n'akwụkwọ ụlọ akụ gị", "Ọ dịghị mgbe ọ bụla"], answer: 0, why: "App ahụ na-egosi ọnụahịa nhọrọ ụgbọala ọ bụla tupu i kwere." },
          { objective: "O2", q: "Gịnị mere njem nwere ike ịdị oke ọnụ karịa na mgbede Fraịde?", options: ["App ahụ mebiri emebi", "Ọnụahịa oge ọtụtụ mmadụ mgbe ọtụtụ mmadụ na-achọ ụgbọala", "Ekwentị gị kara nká", "Njem bụ n'efu na Fraịde"], answer: 1, why: "Ọnụahịa nwere ike ịrị elu mgbe ọtụtụ mmadụ na-achọ ya." },
          { objective: "O3", q: "Ụgbọala kwụsịrị mana nọmba ụgbọala ya adabaghị n'app ahụ. Gịnị ka ị ga-eme?", options: ["Banye otú ahụ", "Banye ma jụọ emesịa", "Kwụọ onye ọkwọ ụgbọala ego aka", "Abanyela"], answer: 3, why: "Ọ bụrụ na ọ dabaghị, ọ nwere ike ọ bụghị ụgbọala gị." },
          { objective: "O3", q: "Kedu ụzọ kacha enweghị nsogbu isi lelee onye ọkwọ ụgbọala?", options: ["Ịsị \"Are you here for Maria?\"", "Ịjụ \"Who are you here for?\"", "Igosi ya ID gị", "Ịgwa ya PIN gị na mbụ"], answer: 1, why: "Ịhapụ onye ọkwọ ụgbọala ka o kwuo aha gị na-egosi na ọ bụ onye ọkwọ ụgbọala gị." }
        ]
      }
    },
    {
      name: "Isi 2: Ịzụ nri na ihe oriri",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịzụ nri ma ọ bụ ihe oriri ka e wetara gị",
          minutes: 5,
          goal: "Chọta ụlọ nri ma ọ bụ ụlọ ahịa n'app nnyefe ma mee order.",
          text: [
            "App nnyefe dị ka DoorDash, Uber Eats na Instacart na-ekwe ka ị zụta ihe n'ụlọ nri na ụlọ ahịa dị nso gị. Onye nnyefe, onye a na-akpọ mgbe ụfọdụ Dasher ma ọ bụ shopper, na-eburu order gị ma wetara gị ya.",
            "Wụnye app ahụ site n'ezi ụlọ ahịa app ma dee adreesị nnyefe gị nke ọma, gụnyere nọmba ụlọ (apartment) ma ọ bụ ọnụ ụzọ ama (gate) na ndetu maka onye ọkwọ ụgbọala, dị ka \"ọnụ ụzọ na-acha anụnụ anụnụ, kụọ mgbịrịgba\".",
            "Lelee ma ọ bụ chọọ ụlọ nri ma ọ bụ ụlọ ahịa, pịa ihe ndị ị chọrọ iji tinye ha na cart gị, ma họrọ nhọrọ dị ka nha. Maka ihe oriri, ị nwere ike ịhọrọ ihe shopper ga-eme ma ọ bụrụ na otu ihe adịghị n'ahịa: dochie ya n'ihe yiri ya, ma ọ bụ weghachite gị ego ya."
          ],
          steps: ["Wụnye app nnyefe site n'ezi ụlọ ahịa app.", "Dee adreesị nnyefe gị zuru ezu na ndetu maka onye ọkwọ ụgbọala.", "Chọọ ụlọ nri ma ọ bụ ụlọ ahịa.", "Pịa ihe ndị ahụ iji tinye ha na cart gị.", "Maka ihe oriri, họrọ ihe a ga-eme ma ọ bụrụ na otu ihe adịghị n'ahịa."],
          words: [["App nnyefe (delivery app)", "app na-ewetara gị nri ma ọ bụ ngwaahịa site n'azụmahịa dị nso gị ruo n'ọnụ ụzọ gị."], ["Cart", "ndepụta ihe ndị ị chọrọ ịzụ."], ["Ihe nnọchi (substitution)", "ihe yiri ya shopper na-ahọrọ mgbe nke gị adịghị n'ahịa."]],
          slides: [
            { title: "App nnyefe", bullets: ["DoorDash, Uber Eats, Instacart na ndị ọzọ", "Onye ọkwọ ụgbọala ma ọ bụ shopper na-ewetara gị order gị"] },
            { title: "Adreesị gị", bullets: ["Adreesị zuru ezu nwere nọmba ụlọ ma ọ bụ gate", "Ndetu dị ka \"ọnụ ụzọ na-acha anụnụ anụnụ, kụọ mgbịrịgba\""] },
            { title: "Mee order", bullets: ["Chọọ ụlọ nri ma ọ bụ ụlọ ahịa", "Tinye ihe na cart gị", "Họrọ ihe ga-eme ma ihe adịghị n'ahịa"] }
          ],
          tryIt: "Meghee app nnyefe (wụnye ya site n'ezi ụlọ ahịa app ma ọ dị mkpa). Dee adreesị gị na ndetu maka onye ọkwọ ụgbọala, wee tinye ihe abụọ na cart. Etinyela order ahụ ugbu a.",
          youCanNow: "ịchọta ụlọ nri ma ọ bụ ụlọ ahịa n'app nnyefe ma mee order maka adreesị gị.",
          quickCheck: [
            { objective: "O4", q: "N'app nnyefe, onye na-ewetara gị order gị?", options: ["Naanị onye nwe ụlọ nri ahụ", "Ụlọ ọrụ nzipu ozi (post office)", "Ọ dịghị onye; ị ga-aga were ya", "Onye nnyefe, onye a na-akpọ mgbe ụfọdụ Dasher ma ọ bụ shopper"], answer: 3, why: "Onye nnyefe na-eburu order gị ma wetara gị ya." },
            { objective: "O4", q: "Ị bi n'ụlọ (apartment) 4B dị n'azụ gate. Gịnị ka ị ga-eme mgbe ị na-ede adreesị gị?", options: ["Tinye nọmba ụlọ, ozi gate na ndetu maka onye ọkwọ ụgbọala", "Dee naanị aha okporo ụzọ", "Hapụ adreesị ahụ efu", "Jiri adreesị onye agbata obi gị"], answer: 0, why: "Nọmba ụlọ, ozi gate na ndetu na-enyere onye ọkwọ ụgbọala aka ịchọta gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịghọta ihuenyo ịkwụ ụgwọ: ụgwọ, tip na ngụkọta",
          minutes: 5,
          goal: "Gụọ ihuenyo ịkwụ ụgwọ (checkout) ma mara ihe ụgwọ ọ bụla bụ tupu ị kwụọ.",
          text: [
            "Ọnụahịa dị na menu abụghị ego niile ị ga-akwụ. Ihuenyo ịkwụ ụgwọ (checkout) na-edepụta ọnụahịa ihe ndị ahụ gbakwunyere ụgwọ ndị ọzọ, nke nwere ike ịgụnye ụgwọ nnyefe (delivery fee), ụgwọ ọrụ (service fee), mgbe ụfọdụ ụgwọ obere order, ụtụ isi (taxes), na tip maka onye ọkwọ ụgbọala.",
            "Ụgwọ na-agbanwe dabere n'app, oge, anya ụzọ na obodo, ụfọdụ app na-enyekwa ndị otu (membership) a na-akwụ ụgwọ maka ya nke na-ebelata ụgwọ. Ya mere gụọ ihuenyo ịkwụ ụgwọ mgbe niile ma lee ngụkọta tupu ị pịa Place order.",
            "Tip na-aga n'aka onye ọkwọ ụgbọala ma ọ bụ shopper. Ị na-ahọrọ ego ole, ọtụtụ app na-ekwekwa ka ị gbanwee ya mgbe e wetachara ihe ahụ. Ọ bụrụ na ngụkọta karịrị ihe i chere, wepụ otu ihe ma ọ bụ họrọ ịga were ya (pickup) kama nnyefe ma ọ bụrụ na app ahụ nwere ya."
          ],
          steps: ["Meghee cart gị ma gaa na checkout.", "Gụọ ahịrị ọ bụla: ihe ndị ahụ, ụgwọ nnyefe, ụgwọ ọrụ, ụtụ isi, tip.", "Lelee adreesị nnyefe na ụzọ ịkwụ ụgwọ.", "Lee ngụkọta.", "Gbanwee order ma ọ bụ tip ma ọ dị mkpa, wee pịa Place order."],
          words: [["Ụgwọ nnyefe (delivery fee)", "ego a na-akwụ maka iwetara gị order ahụ."], ["Ụgwọ ọrụ (service fee)", "ego app ahụ na-agbakwunye maka iji ọrụ ya."], ["Tip", "ego ị họọrọ inye onye ọkwọ ụgbọala ma ọ bụ shopper."]],
          slides: [
            { title: "Ọnụahịa menu abụghị ngụkọta", bullets: ["Ọnụahịa ihe ndị ahụ", "Ụgwọ nnyefe na ụgwọ ọrụ", "Ụtụ isi na tip"] },
            { title: "Ụgwọ na-agbanwe", bullets: ["Dabere n'app, oge, anya ụzọ na obodo", "Gụọ ihuenyo ịkwụ ụgwọ mgbe niile"] },
            { title: "Tupu ị pịa Place order", bullets: ["Lelee adreesị na ụzọ ịkwụ ụgwọ", "Lee ngụkọta", "Ọ karịrị? Wepụ otu ihe ma ọ bụ họrọ pickup"] }
          ],
          tryIt: "Were cart nkuzi gara aga gaa na ihuenyo ịkwụ ụgwọ. Dee ọnụahịa ihe ndị ahụ, ụgwọ ọ bụla, tip na ngụkọta ikpeazụ. Wee kpebie ma ị ga-etinye order ahụ ma ọ bụ mechie app ahụ.",
          youCanNow: "ịgụ ihuenyo ịkwụ ụgwọ nke nnyefe ma mara ego niile ị ga-akwụ tupu ị kwụọ.",
          quickCheck: [
            { objective: "O5", q: "Onye na-enweta tip n'order nnyefe?", options: ["Ụlọ ọrụ app ahụ", "Onye ọkwọ ụgbọala ma ọ bụ shopper", "Obodo", "Onye nwe ụlọ ebe ụlọ nri ahụ dị"], answer: 1, why: "Tip na-aga n'aka onye ọkwọ ụgbọala ma ọ bụ shopper." },
            { objective: "O5", q: "Ihe ndị dị na menu gị bụ obere ego, mana ngụkọta dị elu nke ukwuu. Gịnị ka ị ga-eme tupu ị tinye order ahụ?", options: ["Pịa Place order n'eleghị anya", "Tinyekwuo ihe ka ọ baa uru", "Gụọ ahịrị ọ bụla na ihuenyo ịkwụ ụgwọ ka ịhụ ụgwọ, ụtụ isi na tip", "Mechie app ahụ ma kwụọ ụgwọ site na gift card"], answer: 2, why: "Ihuenyo ịkwụ ụgwọ na-edepụta ụgwọ ọ bụla, ụtụ isi na tip ndị mejupụtara ngụkọta." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Akwụkwọ nnata ego, nsogbu na ịnọ na nchekwa",
          minutes: 4,
          goal: "Lelee akwụkwọ nnata ego, nweta enyemaka maka order ezighi ezi ma zere aghụghọ app.",
          text: [
            "Mgbe njem ma ọ bụ nnyefe gasịrị, app ahụ na-ezipu akwụkwọ nnata ego (receipt) n'email gị ma dobe ya n'ime app n'okpuru njem ma ọ bụ order gị. Lelee na ego e wepụrụ dabara n'ihe i kwere.",
            "Ọ bụrụ na ihe ezighi ezi, dị ka ihe na-efu efu, nri jụrụ oyi ma ọ bụ ego e wepụrụ n'ụzọ ezighi ezi, jiri akụkụ Help ma ọ bụ Support dị n'ime app ahụ ma họrọ order ahụ. Kọọ nsogbu ozugbo ha mere.",
            "Ndị aghụghọ na-eme ka à ga-asị na ha bụ ndị enyemaka app. Ezi enyemaka dị n'ime app ahụ. Akpọla nọmba enyemaka site na mgbasa ozi n'ọchụchọ (search ad), ma ghara inye onye ọ bụla kpọrọ gị ma ọ bụ zitere gị ozi okwuntughe gị ma ọ bụ koodu e zitere n'ekwentị gị. Kwụọ ụgwọ naanị n'ime app ahụ, ọ bụghị ego aka ma ọ bụ gift card nye onye rịọrọ."
          ],
          steps: ["Meghee njem ma ọ bụ order gị n'app ahụ.", "Lelee na akwụkwọ nnata ego dabara n'ihe i kwere.", "Maka nsogbu, gaa na Help n'ime app ma họrọ order ahụ.", "Enyela onye kpọrọ gị okwuntughe ma ọ bụ koodu ekwentị mgbe ọ bụla.", "Kwụọ ụgwọ naanị n'ime app ahụ."],
          words: [["Akwụkwọ nnata ego (receipt)", "ndekọ nke ihe i kwụrụ na ihe i kwụrụ ya maka ya."], ["Support", "akụkụ enyemaka nke app maka nsogbu."]],
          slides: [
            { title: "Lelee akwụkwọ nnata ego", bullets: ["N'email gị na n'ime app", "Ọ dabara n'ihe i kwere?"] },
            { title: "Ihe adịghị mma?", bullets: ["Help ma ọ bụ Support n'ime app", "Họrọ order ahụ", "Kọọ ya ozugbo"] },
            { title: "Zere aghụghọ enyemaka", bullets: ["Ezi enyemaka dị n'ime app", "Enyela okwuntughe ma ọ bụ koodu ekwentị mgbe ọ bụla", "Kwụọ ụgwọ naanị n'ime app"] }
          ],
          tryIt: "Omume ọrụ ikpeazụ: meghee akụkụ njem ma ọ bụ order nke app ụgbọala ma ọ bụ app nnyefe gị ma chọta ebe Help dị. Wee mee ọrụ ikpeazụ: lee ọnụahịa njem ma chọta ngwa nchekwa, ma gụọ ihuenyo ịkwụ ụgwọ nnyefe zuru ezu.",
          youCanNow: "ịlele akwụkwọ nnata ego, nweta enyemaka maka nsogbu n'ime app, ma zere aghụghọ enyemaka adịgboroja.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị ga-ahụ akwụkwọ nnata ego maka nnyefe?", options: ["N'email gị na n'ime app n'okpuru order gị", "Naanị n'aka onye ọkwọ ụgbọala", "Na njin ọchụchọ (search engine)", "Ọ dịghị ebe; app anaghị enye akwụkwọ nnata ego"], answer: 0, why: "App ahụ na-ezipu akwụkwọ nnata ego n'email ma dobe ya n'okpuru njem ma ọ bụ order gị." },
            { objective: "O6", q: "Nri gị abịaghị, ị chọọ nọmba enyemaka app ahụ n'ịntanetị. Mgbasa ozi gosiri nọmba ekwentị. Gịnị ka ị ga-eme?", options: ["Kpọọ nọmba dị na mgbasa ozi ahụ", "Nye onye kpọrọ gị okwuntughe gị", "Kwụọ onye ị na-amaghị gift card maka nkwụghachi ego", "Leghara mgbasa ozi ahụ anya ma jiri Help dị n'ime app"], answer: 3, why: "Ezi enyemaka dị n'ime app; nọmba enyemaka dị na mgbasa ozi ọchụchọ nwere ike ịbụ nke ndị aghụghọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịzụ nri na ihe oriri",
        questions: [
          { objective: "O4", q: "Gịnị mere ị ga-eji tinye ndetu dị ka \"ọnụ ụzọ na-acha anụnụ anụnụ, kụọ mgbịrịgba\" n'adreesị gị?", options: ["Ọ na-ebelata ọnụahịa", "Ọ na-enyere onye ọkwọ ụgbọala aka ịchọta gị", "Iwu chọrọ ya", "Ọ na-ezo adreesị gị"], answer: 1, why: "Ndetu doro anya na-enyere onye ọkwọ ụgbọala aka iweta ya n'ezi ọnụ ụzọ." },
          { objective: "O4", q: "Gịnị bụ ihe nnọchi (substitution) n'order ihe oriri?", options: ["Ihe yiri ya mgbe nke gị adịghị n'ahịa", "Kupọn", "Ụgwọ nnyefe", "Tip"], answer: 0, why: "Shopper nwere ike dochie ihe na-adịghị n'ahịa n'ihe yiri ya." },
          { objective: "O5", q: "Kedu ihuenyo na-egosi ego niile order nnyefe ga-efu?", options: ["Menu", "Ihuenyo mbụ (home screen)", "Ihuenyo ịkwụ ụgwọ (checkout)", "Ụlọ ahịa app"], answer: 2, why: "Checkout na-edepụta ihe ndị ahụ, ụgwọ, ụtụ isi, tip na ngụkọta." },
          { objective: "O6", q: "Nri gị bịara mana otu ihe na-efu. Gịnị ka ị ga-eme?", options: ["Kpọọ nọmba site na mgbasa ozi ọchụchọ", "Tinye okwuntughe gị n'ịntanetị", "Leghara ya anya", "Jiri Help n'ime app ma họrọ order ahụ"], answer: 3, why: "Ezi enyemaka dị n'ime app ahụ." },
          { objective: "O6", q: "Mmadụ zitere ozi na-asị na ha bụ ndị enyemaka DoorDash, na ha chọrọ koodu e zitere n'ekwentị gị. Gịnị ka ị ga-eme?", options: ["Ekesala ya; ezi enyemaka dị n'ime app", "Zipu koodu ahụ", "Zipu okwuntughe gị", "Kwụọ ha gift card"], answer: 0, why: "Enyela onye kpọtụrụ gị koodu ekwentị mgbe ọ bụla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkpọ Ụgbọala ma ọ bụ Ịzụ Nri site na App (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "Gịnị ka app ụgbọala dị ka Uber ma ọ bụ Lyft na-eme?", options: ["Ọ na-ezite onye ọkwọ ụgbọala n'ụgbọala nke ya ka o bịa buru gị", "Ọ na-ere ụgbọala", "Ọ na-ebuga akwụkwọ ozi", "Ọ na-agbazinye naanị igwe kwụ otu ebe"], answer: 0, why: "App ụgbọala na-ejikọ gị na onye ọkwọ ụgbọala." },
      { objective: "O1", q: "Mgbe ị na-awụnye app ụgbọala, lelee:", options: ["Agba akara app ahụ", "Na onye mere ya bụ ezi ụlọ ọrụ ahụ", "Ego dị n'ụlọ akụ gị", "Ihu igwe"], answer: 1, why: "App adịgboroja na-eṅomi aha ezi app." },
      { objective: "O1", q: "Dị ka iwu Uber nke US si dị, ụmụaka dị afọ 13 ruo 17 nwere ike ịnya:", options: ["Site n'akaụntụ okenye nke ha", "Ọ dịghị mgbe ọ bụla", "Site n'akaụntụ nwata nne, nna ma ọ bụ onye nlekọta hazịrị", "Naanị n'abalị"], answer: 2, why: "Iwu Uber na-ekwe ka ụmụaka afọ 13-17 nwee akaụntụ nwata site na nne, nna ma ọ bụ onye nlekọta." },
      { objective: "O1", q: "Ebee ka ị ga-ede ozi kaadị gị maka app ụgbọala?", options: ["N'ozi ederede nye onye ọkwọ ụgbọala", "N'email", "Na soshal midia", "Naanị n'ime app ahụ"], answer: 3, why: "A na-ahazi ịkwụ ụgwọ naanị n'ime app ahụ." },
      { objective: "O2", q: "Igbe \"Where to?\" bụ maka:", options: ["Ebe ị na-aga", "Okwuntughe gị", "Tip", "Nọmba ụlọ akụ gị"], answer: 0, why: "Ị na-ede ebe ị chọrọ ịga." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee ebe a ga-ebuli gị na map?", options: ["Iji gbanwee ọnụahịa", "Ọ dịghị mkpa", "Iji họrọ agba ụgbọala", "Ka onye ọkwọ ụgbọala chọta gị"], answer: 3, why: "Ebe a ga-ebuli gị ziri ezi na-egbochi ụgbọala ịhapụ gị." },
      { objective: "O2", q: "Ọnụahịa njem nwere ike ịdị elu karịa:", options: ["Ọ dịghị mgbe ọ bụla", "Naanị n'ụbọchị ọmụmụ gị", "N'oge ọtụtụ mmadụ dị ka rush hour", "Mgbe ị na-eji Wi-Fi"], answer: 2, why: "Mgbe ọtụtụ mmadụ na-achọ ya, ọnụahịa nwere ike ịrị elu." },
      { objective: "O3", q: "Kedu nke ị kwesịrị ilele tupu ị banye n'ụgbọala?", options: ["Ọdụ redio", "Ihu igwe", "Nọmba ụgbọala, ụgbọala na foto onye ọkwọ ya", "Adreesị ụlọ onye ọkwọ ụgbọala"], answer: 2, why: "Ihe ndị a ga-adabarịrị n'app ahụ." },
      { objective: "O3", q: "PIN njem Uber na-arụ ọrụ site na:", options: ["Ịkwụ onye ọkwọ ụgbọala ụgwọ", "Ịkpọ 911", "Imeghe ekwentị gị", "Ịgwa onye ọkwọ ụgbọala koodu ka njem ahụ malite"], answer: 3, why: "Njem ahụ na-amalite naanị site n'ezi PIN." },
      { objective: "O3", q: "Share My Trip na-ekwe ka ị:", options: ["Kekọrịta ụgwọ njem na ndị ị na-amaghị", "Gbanwee onye ọkwọ ụgbọala", "Hapụ ndị ị tụkwasịrị obi ka ha soro njem gị ozugbo", "Nweta nkwụghachi ego"], answer: 2, why: "Ndị ị tụkwasịrị obi nwere ike ịhụ ka njem gị si aga." },
      { objective: "O3", q: "Bọtịnụ mberede dị n'ime app Uber:", options: ["Na-enye onye ọkwọ ụgbọala akara", "Na-akagbu njem n'efu", "Na-akpọ ụlọ akụ gị", "Na-akpọtụrụ 911 ma gosi ebe ị nọ na ozi ụgbọala"], answer: 3, why: "Ọ na-ejikọ gị na 911 na ozi njem gị." },
      { objective: "O3", q: "Ụgbọala i akwadoghị nyere gị njem n'èzí ebe mmemme. Ị kwesịrị:", options: ["Banye; ọ dị ngwa karịa", "Kwụọ ego aka", "Jụ ya; nọdụ naanị n'ụgbọala i kwadoro n'app", "Kesaa PIN gị"], answer: 2, why: "Naanị ụgbọala i kwadoro, nke dabara, na-enweghị nsogbu." },
      { objective: "O4", q: "Kedu app bụ isi maka nnyefe ihe oriri?", options: ["Lyft", "Igwe mgbakọ", "App ihu igwe", "Instacart"], answer: 3, why: "Instacart na-ewetara gị ihe oriri." },
      { objective: "O4", q: "\"Cart\" n'app nnyefe bụ:", options: ["Ụgbọala", "Akwụkwọ nnata ego", "Ndepụta ihe ndị ị chọrọ ịzụ", "Ụgwọ"], answer: 2, why: "Cart gị na-ejide ihe ndị ahụ tupu checkout." },
      { objective: "O5", q: "Kedu nke na-abụkarị ụgwọ ọzọ n'order nnyefe?", options: ["Ụgwọ ọrụ (service fee)", "Onyinye n'efu", "Akara i nyere", "Adreesị gị"], answer: 0, why: "A na-agbakwunye ụgwọ ọrụ na ụgwọ nnyefe na checkout." },
      { objective: "O5", q: "Tip n'order nnyefe na-aga n'aka:", options: ["Ụlọ ahịa app", "Gọọmentị", "Ụlọ akụ", "Onye ọkwọ ụgbọala ma ọ bụ shopper"], answer: 3, why: "Tip bụ maka onye na-ewetara gị ihe ahụ." },
      { objective: "O5", q: "Ngụkọta na checkout karịrị ihe i chere. Ezigbo nzọụkwụ bụ:", options: ["Kwụọ otú ahụ n'agụghị ya", "Nye onye ị na-amaghị kaadị gị", "Wepụ otu ihe ma ọ bụ họrọ pickup ma ọ bụrụ na ọ dị", "Dee adreesị adịgboroja"], answer: 2, why: "Ịgbanwe order na-ebelata ngụkọta." },
      { objective: "O6", q: "Ebee ka ị ga-ahụ akwụkwọ nnata ego mgbe njem gasịrị?", options: ["N'email gị na n'akụkụ njem nke app ahụ", "Naanị n'aka onye ọkwọ ụgbọala", "Ọ dịghị ebe", "N'ụlọ ahịa app"], answer: 0, why: "App na-edobe akwụkwọ nnata ego ma zipu ha n'email." },
      { objective: "O6", q: "Ebee ka ezi enyemaka dị maka order ezighi ezi?", options: ["Nọmba ekwentị site na mgbasa ozi ọchụchọ", "Okwu e dere na soshal midia", "Ozi ederede onye ị na-amaghị", "Help ma ọ bụ Support n'ime app"], answer: 3, why: "Ezi enyemaka dị n'ime app ahụ." },
      { objective: "O6", q: "Mmadụ kwuru na ọ bụ onye enyemaka app ma rịọ okwuntughe gị. Ị ga:", options: ["Nye ya ya", "Nye ya ọkara ya", "Ghara inye ya ya mgbe ọ bụla", "Zipu ya emesịa"], answer: 2, why: "Ezi onye enyemaka anaghị achọ okwuntughe gị mgbe ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 3, 5, 6, 7, 11, 13, 14, 16, 18]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ọnụahịa tupu ịkwado",
        objective: "O2",
        notYet: "Ebe a ga-ebuli gị ma ọ bụ ebe ị na-aga ezighi ezi, ma ọ bụ a gụghị ọnụahịa na oge ọ ga-abịa.",
        meets: "E tinyere ezi ebe a ga-ebuli gị na ebe ị na-aga, a gụọkwa ọnụahịa na oge ọ ga-abịa tupu ịkwado ihe ọ bụla.",
        exceeds: "Ọ na-atụnyekwa nhọrọ ụgbọala abụọ ma kwuo ihe mere ọnụahịa nwere ike ịdị elu n'oge ọtụtụ mmadụ."
      },
      {
        name: "Ngwa nchekwa",
        objective: "O3",
        notYet: "Ọ pụghị ịchọta ngwa nchekwa.",
        meets: "Ọ na-achọta Share My Trip, bọtịnụ mberede na PIN njem (ma ọ bụ ngwa nchekwa nke app ahụ n'onwe ya).",
        exceeds: "Ọ na-akọwakwa ihe atọ a na-elele tupu ịbanye n'ụgbọala."
      },
      {
        name: "Order nnyefe",
        objective: "O4",
        notYet: "Cart ahụ tọgbọrọ chakoo ma ọ bụ adreesị nnyefe ezughị ezu.",
        meets: "Obere order dị na cart nwere adreesị nnyefe zuru ezu.",
        exceeds: "Ọ na-etinye ndetu bara uru maka onye ọkwọ ụgbọala na nhọrọ maka ihe na-adịghị n'ahịa."
      },
      {
        name: "Ịgụ ihuenyo ịkwụ ụgwọ",
        objective: "O5",
        notYet: "Ọ pụghị ikwu ihe ụgwọ ndị ahụ, tip ma ọ bụ ngụkọta bụ.",
        meets: "Ọ na-akọwa ọnụahịa ihe ndị ahụ, ụgwọ ọ bụla, tip, adreesị nnyefe na ngụkọta.",
        exceeds: "Ọ na-akpọkwa otu ụzọ isi belata ngụkọta, dị ka iwepụ otu ihe ma ọ bụ ịhọrọ pickup."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha jiri app ụgbọala n'onwe ha gaa ọkwa, ọrụ ma ọ bụ ozi n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha lelere ọnụahịa na ụgwọ tupu ịkwado ma nọrọ n'ime ego ha kenyere",
      "Ndị na-amụ ihe kwuru na ha jụrụ oku ma ọ bụ ozi enyemaka adịgboroja"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ọnọdụ (location) gbanyere na ịntanetị",
      "App ụgbọala (Uber ma ọ bụ Lyft) na app nnyefe (DoorDash, Uber Eats ma ọ bụ Instacart) site n'ezi ụlọ ahịa app",
      "Ezi ebe a ga-ebuli gị na ebe ị na-aga, dị ka site n'ụlọ ruo ụlọ ọgwụ ma ọ bụ ọba akwụkwọ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke; ọ dịghị mkpa ịkwado ma ọ bụ ịkwụ ụgwọ"
    ],
    facilitatorNotes: [
      "Gwa ndị na-amụ ihe ka ha ghara ịpịa Confirm ma ọ bụ Place order na klas ma ọ bụrụ na ha achọghị ụgbọala ma ọ bụ nri ahụ n'ezie; ọrụ ahụ na-akwụsị tupu ịkwado.",
      "Ndị na-amụ ihe nwere ike ịchọ kaadị iji mechaa ịdebanye aha; hapụ ha ka ha kpebie ma ha ga-etinye ya, ma ghara ịrịọ ịhụ ozi kaadị mgbe ọ bụla.",
      "Mee omume \"Who are you here for?\" dị ka egwuregwu, ebe otu onye na-amụ ihe bụ onye njem, onye ọzọ bụ onye ọkwọ ụgbọala.",
      "Ọnụahịa na ụgwọ na-agbanwe dabere n'obodo na oge n'ụbọchị, ya mere lee ezi ihuenyo ịkwụ ụgwọ kama ikwu ọnụọgụ.",
      "Maka ndị na-amụ ihe na-enweghị ike iji kaadị ma ọ bụ smartphone, kpọọ aha ọrụ ụgbọala maka ndị nwere nkwarụ (paratransit) ma ọ bụ mmemme ụgbọala ndị agadi nzukọ gị maara."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of seniors/seniors-ai-scam-awareness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-scam-awareness-ig",
  lang: "ig",
  translationOf: "seniors-ai-scam-awareness",
  category: "Seniors and Technology",
  name: "Nchekwa AI na Ịmata Aghụghọ maka Ndị Okenye",
  skills: "Ịmata ihe ịrịba ama anọ nke aghụghọ, Ịmata aghụghọ olu na ozi AI, Ịlele ozi n'enweghị nsogbu, Ịjụ ụzọ ịkwụ ụgwọ dị ize ndụ, Ịkọ banyere aghụghọ",
  outcome: "ilele oku, ozi ederede ma ọ bụ email, kpebie ma o nwere ihe ịrịba ama nke aghụghọ, lelee ya n'enweghị nsogbu site na nọmba ị tụkwasịlarị obi, ma mara ebe ị ga-akọ ya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye, na ndị na-elekọta ha, ndị chọrọ ịbụ ndị na-eme ihe tupu ndị aghụghọ. Ndị aghụghọ na-eji AI ugbu a ede ozi ka mma ma ọbụna ṅomie olu mmadụ, ya mere ihe ịrịba ama ochie dị mkpa karịa mgbe ọ bụla.",
    "Ị ga-amụta ihe ịrịba ama anọ nke aghụghọ, otu aghụghọ AI si arụ ọrụ, omume dị mfe nke Kwụsị, Lelee, Kpọọ, na ebe ị ga-akọ aghụghọ na United States (America).",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Mee ọrụ \"Nwalee ya ugbu a\"; ha na-ewu kaadị nchekwa aghụghọ nke gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ịbụ onye e ghọgburu abụghị ihe ịrịba ama nke adịghị ike: ndị omekome a bụ ndị ọkachamara, onye ọ bụla nwekwara ike ịbụ onye ha na-achụ."
  ],
  finalTask: "Mee kaadị nchekwa aghụghọ nke gị: dee nọmba ekwentị atọ ị tụkwasịrị obi (otu onye ezinụlọ, ụlọ akụ gị site n'azụ kaadị gị, na ọfịs dọkịta gị), okwu nzuzo ezinụlọ gị, nzọụkwụ Kwụsị, Lelee, Kpọọ, na ebe ị ga-akọ aghụghọ. Wee jiri ihe ịrịba ama anọ ahụ kpee ikpe ozi atụ abụọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bi na United States ndị na-enweta oku, ozi ederede na email kwa ụbọchị, ụfọdụ n'ime ha bụ aghụghọ. Ọtụtụ na-ebi naanị ha, nwee ego nchekwa ma ọ bụ enyemaka gọọmentị, nwekwa ụmụ ụmụ ndị olu ma ọ bụ foto ha dị n'ịntanetị.",
    startingPoint: "Ha na-eji ekwentị, ọtụtụ mgbe na-ejikwa email. Ọtụtụ maara na aghụghọ dị, mana ha anụbeghị banyere AI na-ṅomi olu, ha nwekwara ike ịtụkwasị obi n'ozi nwere mkpụrụ okwu ziri ezi ma ọ bụ akara ụlọ ọrụ (logo).",
    gap: "AI na-enyere ndị aghụghọ aka ịṅomi olu onye ị hụrụ n'anya ma dee ozi adịgboroja zuru oke, ya mere ihe ịrịba ama ochie dị ka mperi n'ide okwu anaghịzi arụ ọrụ. Ndị okenye kwesịrị ịmata ihe ịrịba ama anọ ahụ, jiri Kwụsị, Lelee, Kpọọ, chebe ego na ozi ha, ma mara ebe ha ga-akọ, ka ha ghara ịtụfu ego nchekwa ha ma ọ bụ nwee ihere ịrịọ enyemaka.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, ahịrịokwu dị mkpụmkpụ na nzọụkwụ dị ukwuu ma dị mfe",
      "Ngwaọrụ: ekwentị ọ bụla; kọmputa ma ọ bụ tablet maka email na pop-up",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, nwayọọ nwayọọ",
      "Ozi gbasara ụlọ ọrụ gọọmentị US na nọmba enyemaka (hotline) nwere ike ịgbanwe; ndị na-amụ ihe na-elele weebụsaịtị gọọmentị",
      "E jighị ezi nọmba nzuzo ọ bụla n'omume; naanị ozi atụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị oku, ozi ederede ma ọ bụ email", action: "ịmata ihe ịrịba ama anọ nke aghụghọ: ime ka ha bụ onye ọzọ, nsogbu ma ọ bụ onyinye, ịkwagide gị, na ụzọ ịkwụ ụgwọ dị iche", standard: "na-akpọ aha ihe ịrịba ama ọ bụla ozi ahụ nwere" },
    { id: "O2", condition: "Mgbe onye na-akpọ oku dị ka onye ị hụrụ n'anya nọ na nsogbu", action: "ịkwụsị oku ahụ ma lelee ya na onye ahụ ị hụrụ n'anya ma ọ bụ nne ma ọ bụ nna ya site na nọmba ị nweburu", standard: "n'ezipughị ego ọ bụla tupu i lelee" },
    { id: "O3", condition: "Mgbe e nyere gị ozi ederede, email, weebụsaịtị ma ọ bụ pop-up ị na-atụghị anya ya", action: "ịkpọtụrụ ụlọ ọrụ ahụ n'onwe gị site n'ide ezi adreesị ya ma ọ bụ ịkpọ nọmba dị na kaadị ma ọ bụ akwụkwọ ụgwọ gị", standard: "na-apịaghị njikọ ahụ ma ọ bụ ịkpọ nọmba dị n'ozi ahụ" },
    { id: "O4", condition: "Oge ọ bụla ozi ma ọ bụ oku na-echegbu gị", action: "iji nzọụkwụ Kwụsị, Lelee, Kpọọ", standard: "na-eji naanị nọmba ị tụkwasịlarị obi" },
    { id: "O5", condition: "Mgbe onye na-akpọ oku ma ọ bụ ozi ị na-atụghị anya ya na-arịọ ozi ma ọ bụ ego", action: "ịjụ inye nọmba nzuzo, okwuntughe, koodu ma ọ bụ ụgwọ dị iche, na ịkpọ ụlọ akụ gị ma ọ bụrụ na i nyelarị", standard: "n'ekesaghị ihe ọ bụla na onye ị na-atụghị anya ya" },
    { id: "O6", condition: "Mgbe aghụghọ ma ọ bụ mgbalị aghụghọ mechara", action: "ịkpọ aha ebe ị ga-akọ ya ma nweta enyemaka na United States", standard: "na-akpọ aha opekata mpe ebe abụọ ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu aghụghọ si arụ ọrụ taa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ịrịba ama anọ nke aghụghọ",
          minutes: 5,
          goal: "Kpọọ aha ihe ịrịba ama anọ na-egosi na oku, ozi ederede ma ọ bụ email nwere ike ịbụ aghụghọ.",
          text: [
            "Federal Trade Commission (FTC), ụlọ ọrụ gọọmentị US na-echebe ndị na-azụ ahịa, na-akọwa ihe ịrịba ama anọ a na-ahụkarị nke aghụghọ. Mụta anọ ndị a, ị ga-ejide ọtụtụ aghụghọ, ma AI dị ma ọ dịghị.",
            "1. Ha na-eme ka ha bụ onye ị tụkwasịrị obi: ọfịs gọọmentị, ụlọ akụ gị, ụlọ ọrụ a ma ama, otu ebere ma ọ bụ onye ezinụlọ. 2. Ha na-ekwu na e nwere nsogbu ma ọ bụ onyinye: i ji ụgwọ, e kpochiri akaụntụ gị, ma ọ bụ i meriri ihe mana ị ga-akwụ ụgwọ. 3. Ha na-akwagide gị ka i mee ihe ugbu a, ha nwekwara ike ịsị gị ka ị ghara ịkwụsị oku ma ọ bụ ka ị ghara ịgwa onye ọ bụla. 4. Ha chọrọ ka ị kwụọ ụgwọ n'ụzọ dị iche: gift card (kaadị onyinye), izipu ego site n'ụlọ akụ (wire transfer), cryptocurrency, app ịkwụ ụgwọ, ma ọ bụ cheque ha chọrọ ka ị gbanwee ma zighachi ha ego.",
            "Ọ bụrụ na ị hụ ọbụna otu n'ime ihe ịrịba ama ndị a, jiri nwayọọ ma lelee tupu i mee ihe ọ bụla."
          ],
          words: [["FTC", "Federal Trade Commission, ụlọ ọrụ gọọmentị US na-echebe ndị mmadụ pụọ n'aka aghụghọ."], ["Ime ka ị bụ onye ọzọ (impersonate)", "ime ka a sị na ị bụ mmadụ ọzọ."]],
          slides: [
            { title: "Ihe ịrịba ama 1: Ha na-eme ka ha bụ onye ọzọ", bullets: ["Gọọmentị, ụlọ akụ, ụlọ ọrụ, otu ebere", "Ọbụna onye ezinụlọ"] },
            { title: "Ihe ịrịba ama 2: Nsogbu ma ọ bụ onyinye", bullets: ["\"I ji ụgwọ\"", "\"E kpochiri akaụntụ gị\"", "\"I meriri, naanị kwụọ obere ụgwọ\""] },
            { title: "Ihe ịrịba ama 3: Ịkwagide", bullets: ["\"Mee ya ugbu a\"", "\"Akwụsịla oku\"", "\"Agwala onye ọ bụla\""] },
            { title: "Ihe ịrịba ama 4: Ụzọ ịkwụ ụgwọ dị iche", bullets: ["Gift card ma ọ bụ wire transfer", "Cryptocurrency ma ọ bụ app ịkwụ ụgwọ", "Gbanwee cheque ma zighachi ego"] }
          ],
          sources: [{ name: "FTC: Otu esi ezere aghụghọ", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Were kaadị ma ọ bụ mpempe akwụkwọ. Dee \"Kaadị nchekwa aghụghọ m\" n'elu ya, wee dee ihe ịrịba ama anọ ahụ n'okwu nke gị.",
          youCanNow: "ịkpọ aha ihe ịrịba ama anọ nke aghụghọ.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke bụ otu n'ime ihe ịrịba ama anọ nke aghụghọ?", options: ["Ozi si na nọmba i chekwara n'onwe gị", "Akwụkwọ ozi ị na-atụ anya ya", "Ha chọrọ ka ị kwụọ ụgwọ site na gift card ma ọ bụ wire transfer", "Enyi na-ajụ otu ị mere"], answer: 2, why: "Ụzọ ịkwụ ụgwọ dị iche, dị ka gift card ma ọ bụ wire transfer, bụ otu n'ime ihe ịrịba ama anọ ahụ." },
            { objective: "O1", q: "Onye kpọrọ oku kwuru na i ji ụgwọ ụtụ isi, na ị ga-akwụ ya taa ma ọ bụ a ga-ejide gị. Ihe ịrịba ama ole ka ị hụrụ, gịnị ka ị ga-eme?", options: ["Ọ dịghị; kwụọ ka i wee nọrọ n'udo", "Ọtụtụ: nsogbu na ịkwagide; jiri nwayọọ ma lelee tupu i mee ihe ọ bụla", "Otu, ya mere ọ ga-abụrịrị eziokwu", "Ọ dịghị, n'ihi na ọ bụ gọọmentị"], answer: 1, why: "Nsogbu na ịkwagide gị ka i mee ihe ugbu a bụ ihe ịrịba ama aghụghọ; ọbụna otu ihe ịrịba ama pụtara na ị ga-eji nwayọọ lelee." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Olu AI ṅomiri na nsogbu ezinụlọ adịgboroja",
          minutes: 5,
          goal: "Mata oku nsogbu adịgboroja nke nwere ike iji olu onye ị hụrụ n'anya AI ṅomiri.",
          text: [
            "Site n'obere ndekọ olu mmadụ, dị ka vidiyo e tinyere n'ịntanetị, ndị aghụghọ nwere ike iji AI ṅomie olu ahụ. Ha wee kpọọ nne nne ma ọ bụ nna nna oku, na-ebe ákwá ma ọ bụ na-atụ ụjọ: \"Nne nne, m nwere ihe mberede, achọrọ m ego maka mgbapụta (bail), biko agwala Mama.\"",
            "Mgbe ụfọdụ, onye nke abụọ na-abata n'oku ahụ, na-eme ka ọ bụ ọka iwu ma ọ bụ onye uwe ojii. Ha na-arịọ ego nkịtị, gift card ma ọ bụ wire transfer, ha nwekwara ike izipu onye ozi (courier) ka ọ bịa were ego n'ọnụ ụzọ gị.",
            "Olu ahụ nwere ike ịdị ka ezi olu, mana ihe ịrịba ama anọ ahụ ka dị: ime ka ha bụ onye ọzọ, nsogbu, ịkwagide na nzuzo, na ụzọ ịkwụ ụgwọ dị iche. Kwụsị oku ahụ ma kpọọ onye ahụ ị hụrụ n'anya, ma ọ bụ nne ma ọ bụ nna ya, na nọmba ị nweburu. Okwu nzuzo ezinụlọ nke naanị ezinụlọ gị maara bụ nlele ọzọ siri ike."
          ],
          steps: ["Hụ ihe ịrịba ama: ụjọ, nzuzo, arịrịọ ego.", "Kwụsị oku ahụ, ọbụna ma olu ahụ dị ka ezi olu.", "Kpọọ onye ahụ ị hụrụ n'anya ma ọ bụ nne ma ọ bụ nna ya na nọmba ị nweburu.", "Jụọ okwu nzuzo ezinụlọ gị ma ọ bụrụ na i nwere ya."],
          words: [["Ịṅomi olu (voice cloning)", "iji AI ṅomie olu mmadụ site n'obere ndekọ."], ["Onye ozi (courier)", "onye e zitere ka ọ bịa were ihe ma ọ bụ bute ihe."]],
          slides: [
            { title: "AI nwere ike ịṅomi olu", bullets: ["Site n'obere vidiyo ma ọ bụ ndekọ", "Ọ nwere ike ịdị ka olu nwa nwa gị"] },
            { title: "Nsogbu adịgboroja", bullets: ["Ihe mberede, njide ma ọ bụ ụlọ ọgwụ", "\"Agwala Mama\"", "Ego, gift card, wire, ma ọ bụ onye ozi n'ọnụ ụzọ gị"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị oku, ọbụna ma ọ dị ka eziokwu", "Kpọọ ha na nọmba i nwere", "Jụọ okwu nzuzo ezinụlọ gị"] }
          ],
          tryIt: "Na kaadị nchekwa gị, dee aha na nọmba ekwentị nke ndị ezinụlọ abụọ ị ga-akpọ iji lelee ihe mberede. Wee kpọọ otu n'ime ha ka unu kwekọrịta n'okwu nzuzo ezinụlọ.",
          youCanNow: "ịmata oku nsogbu ezinụlọ adịgboroja ma lelee ya n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Kedu otu ndị aghụghọ si aṅomi olu onye ị hụrụ n'anya?", options: ["Naanị site n'ịhụ ya anya n'anya", "Ha enweghị ike", "Site n'ịkọ nkọ", "Site n'AI na obere ndekọ, dị ka vidiyo e tinyere n'ịntanetị"], answer: 3, why: "Obere ndekọ zuru ezu ka AI ṅomie olu." },
            { objective: "O2", q: "Olu na-ebe ákwá dị ka nke nwa nwa gị nwanyị kwuru na ọ chọrọ ego mgbapụta ma ka ị ghara ịgwa nne ya. Gịnị ka ị ga-eme?", options: ["Kwụsị oku ma kpọọ ya ma ọ bụ nne ma ọ bụ nna ya na nọmba ị nweburu", "Zipu ego ahụ ngwa ngwa", "Debe ya na nzuzo dị ka o kwuru", "Nye ọka iwu ahụ nọmba ụlọ akụ gị"], answer: 0, why: "Ọbụna ma olu ahụ dị ka eziokwu, kpọghachi na nọmba ị tụkwasịrị obi tupu i mee ihe ọ bụla." }
          ]
        },
        {
          objectives: ["O3","O1"],
          title: "Ozi, weebụsaịtị na pop-up adịgboroja",
          minutes: 5,
          goal: "Mata ozi ederede, email, weebụsaịtị ma ọ bụ ịdọ aka na ntị pop-up adịgboroja.",
          text: [
            "AI na-enyere ndị aghụghọ aka ide ozi ederede na email ndị mkpụrụ okwu ha ziri ezi, ndị yiri ka ha si n'ụlọ akụ gị, ụlọ ọrụ na-ebuga ngwongwo, Medicare ma ọ bụ Amazon. Mkpụrụ okwu ziri ezi anaghịzi egosi na ozi bụ eziokwu.",
            "Aghụghọ a na-ahụkarị: \"E nweghị ike ibuga ngwongwo gị, pịa ebe a.\" \"E nwere ihe dị iche na akaụntụ gị, banye ugbu a.\" Pop-up na kọmputa gị na-ekwu na o nwere nje (virus) na ị ga-akpọ otu nọmba. Njikọ na nọmba ndị a na-eduga gị n'aka onye aghụghọ ahụ.",
            "Apịala njikọ ma ọ bụ kpọọ nọmba dị n'ozi ị na-atụghị anya ya. Mechie ozi ahụ, ma gaa n'ezi weebụsaịtị ụlọ ọrụ ahụ site n'ide adreesị ya n'onwe gị, ma ọ bụ kpọọ nọmba dị n'azụ kaadị gị ma ọ bụ n'akwụkwọ ụgwọ ị tụkwasịrị obi. Medicare (enyemaka ahụike gọọmentị US maka ndị okenye) kwuru na ọ gaghị akpọ gị oku ire gị ihe ọ bụla ma ọ bụ bịa n'ụlọ gị."
          ],
          steps: ["Apịala njikọ ma ọ bụ kpọọ nọmba dị n'ozi ahụ.", "Mechie ozi ahụ ma ọ bụ pop-up ahụ.", "Dee ezi adreesị ụlọ ọrụ ahụ n'onwe gị, ma ọ bụ kpọọ nọmba dị na kaadị ma ọ bụ akwụkwọ ụgwọ gị.", "Ọ bụrụ na pop-up emechighị, gbanyụọ ngwaọrụ ahụ ma jụọ onye ị tụkwasịrị obi."],
          words: [["Njikọ (link)", "ederede ị na-apị nke na-eduga gị na weebụsaịtị."], ["Pop-up", "igbe na-apụta na mberede n'ihuenyo gị."], ["Phishing", "ozi adịgboroja na-anwa ime ka i nye ozi nzuzo gị."]],
          slides: [
            { title: "Mkpụrụ okwu ziri ezi abụghị ihe akaebe", bullets: ["AI na-ede ozi yiri ezi ozi", "Ụlọ akụ, ibuga ngwongwo, Medicare, Amazon"] },
            { title: "Aghụghọ a na-ahụkarị", bullets: ["\"E nweghị ike ibuga ngwongwo gị\"", "\"Banye ugbu a, ihe dị iche mere\"", "\"Nje (virus)! Kpọọ nọmba a\""] },
            { title: "Ihe ị ga-eme", bullets: ["Apịala ma ọ bụ kpọọ site n'ozi ahụ", "Dee ezi adreesị ahụ n'onwe gị", "Kpọọ nọmba dị na kaadị ma ọ bụ akwụkwọ ụgwọ gị"] }
          ],
          sources: [{ name: "Medicare: Ịkọ banyere aghụghọ na mmegbu Medicare", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Na kaadị nchekwa gị, dee nọmba ekwentị ụlọ akụ gị nke i detuuru site n'azụ kaadị ụlọ akụ gị, na nọmba ọfịs dọkịta gị site n'akwụkwọ ụgwọ ma ọ bụ kaadị oge ọhụhụ. Ndị a bụ nọmba ị tụkwasịrị obi.",
          youCanNow: "ịmata ozi na pop-up adịgboroja ma kpọtụrụ ụlọ ọrụ n'enweghị nsogbu site na nọmba ị tụkwasịrị obi.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere mkpụrụ okwu ziri ezi anaghịzi egosi na ozi bụ eziokwu?", options: ["Ụlọ akụ anaghị elele mkpụrụ okwu", "AI na-enyere ndị aghụghọ aka ide ozi nwere mkpụrụ okwu ziri ezi", "Gọọmentị na-elele email niile", "Mkpụrụ okwu adịghị mkpa n'ozi ederede"], answer: 1, why: "AI na-ede ozi dị ọcha yiri ezi ozi, ya mere mkpụrụ okwu ziri ezi egosighị ihe ọ bụla." },
            { objective: "O3", q: "Email kwuru na e nwere ihe dị iche na akaụntụ ụlọ akụ gị, ka ị banye site na njikọ. Gịnị ka ị ga-eme?", options: ["Pịa njikọ ahụ ma banye", "Zaa ya na okwuntughe gị", "Kpọọ nọmba dị na email ahụ", "Mechie ya ma dee ezi adreesị ụlọ akụ gị n'onwe gị, ma ọ bụ kpọọ nọmba dị na kaadị gị"], answer: 3, why: "Njikọ na nọmba dị n'ozi ị na-atụghị anya ya na-eduga n'aka onye aghụghọ; kpọtụrụ ụlọ akụ n'onwe gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu aghụghọ si arụ ọrụ taa",
        questions: [
          { objective: "O1", q: "Kedu nke bụ otu n'ime ihe ịrịba ama anọ nke aghụghọ?", options: ["Ozi ahụ nwere ụbọchị doro anya", "Ị maara onye zitere ya nke ọma ma na-atụ anya ya", "Ha na-akwagide gị ka i mee ihe ugbu a", "O si n'ozi akwụkwọ nkịtị bịa"], answer: 2, why: "Ịkwagide gị ka i mee ihe ugbu a bụ ihe ịrịba ama aghụghọ a ma ama." },
          { objective: "O1", q: "Mmadụ rịọrọ gị ka ị kwụọ \"ụgwọ gọọmentị\" site na gift card. Nke a bụ:", options: ["Ihe ịrịba ama aghụghọ", "Ihe nkịtị", "Iwu ụtụ isi", "Iwu ụlọ akụ"], answer: 0, why: "Ezi ọfịs anaghị anata ụgwọ site na gift card." },
          { objective: "O2", q: "Onye kpọrọ oku dị ka nwa nwa gị nwoke kpọmkwem, na-arịọ ego mgbapụta. Gịnị ka ị ga-eme?", options: ["Zipu ego ahụ ngwa ngwa", "Chere onye ozi ahụ", "Nye ha nọmba kaadị gị", "Kwụsị oku ma kpọọ nwa nwa gị ma ọ bụ nne ma ọ bụ nna ya na nọmba i nwere"], answer: 3, why: "AI nwere ike ịṅomi olu; ịlele site na nọmba ị maara bụ ihe nchekwa." },
          { objective: "O3", q: "Email nwere mkpụrụ okwu ziri ezi na akara (logo) ụlọ akụ gị. Ọ̀ na-egosi na ọ bụ eziokwu?", options: ["Ee, mgbe niile", "Mba, AI na-eme ka ozi adịgboroja yie ezi ozi", "Ee, ma ọ bụrụ na ọ dị ogologo", "Ee, ma ọ bụrụ na o nwere njikọ"], answer: 1, why: "Ọ dị mfe ka ndị aghụghọ ṅomie mkpụrụ okwu ziri ezi na logo." },
          { objective: "O3", q: "Pop-up kwuru na kọmputa gị nwere nje (virus) ka ị kpọọ otu nọmba. Ị kwesịrị:", options: ["Ịkpọ nọmba ahụ", "Ịghara ịkpọ; mechie ya, ma ọ bụ gbanyụọ ngwaọrụ ahụ ma jụọ onye ị tụkwasịrị obi", "Ịkwụ ụgwọ ka e dozie ya", "Inye ha ohere ịbanye na kọmputa gị site n'ebe dị anya"], answer: 1, why: "Ịdọ aka na ntị nje na pop-up nwere nọmba ekwentị bụ aghụghọ a na-ahụkarị." }
        ]
      }
    },
    {
      name: "Isi 2: Ichebe onwe gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Omume Kwụsị, Lelee, Kpọọ",
          minutes: 4,
          goal: "Jiri nzọụkwụ atọ oge ọ bụla ozi ma ọ bụ oku na-echegbu gị.",
          text: [
            "Ndị aghụghọ na-emeri site n'ime ka ị mee ngwa ngwa. Ihe nchekwa gị kacha mma bụ omume ị na-eme oge niile: Kwụsị, Lelee, Kpọọ.",
            "Kwụsị: apịala, akwụla ụgwọ, enyekwala ozi ọ bụla. Ọ dị mma ịkwụsị oku onye ọ bụla, ọbụna ma ha kwuo na ha bụ ndị uwe ojii ma ọ bụ ụlọ akụ. Lelee: chọọ ihe ịrịba ama anọ ahụ. Gwa onye ị tụkwasịrị obi okwu tupu i mee ihe. Kpọọ: kpọtụrụ onye ahụ ma ọ bụ ụlọ ọrụ ahụ n'onwe gị, site na nọmba dị na kaadị nchekwa gị, kaadị ụlọ akụ gị, akwụkwọ ụgwọ ma ọ bụ ezi weebụsaịtị i dere n'onwe gị.",
            "Ị nwekwara ike ịjụ ngwa enyemaka AI maka echiche nke abụọ. Tinye ozi ahụ, mgbe i wepụrụ ozi nzuzo ọ bụla, ma jụọ: \"Ozi a ọ̀ nwere ihe ịrịba ama nke aghụghọ?\" Were azịza ya dị ka onye enyemaka, ọ bụghị okwu ikpeazụ; nzọụkwụ Kwụsị, Lelee, Kpọọ gị ka na-ebu ụzọ."
          ],
          steps: ["Kwụsị: apịala, akwụla ụgwọ, ekesala ihe ọ bụla.", "Lelee: chọọ ihe ịrịba ama anọ ahụ ma gwa onye ị tụkwasịrị obi okwu.", "Kpọọ: jiri nọmba ị tụkwasịlarị obi, ọ bụghị nke dị n'ozi ahụ mgbe ọ bụla."],
          words: [["Echiche nke abụọ (second opinion)", "ịrịọ onye ọzọ ka o lee ihe anya tupu i kpebie."]],
          slides: [
            { title: "Kwụsị", bullets: ["Apịala, akwụla ụgwọ, ekesala ihe", "Ọ dị mma ịkwụsị oku onye ọ bụla"] },
            { title: "Lelee", bullets: ["Chọọ ihe ịrịba ama anọ ahụ", "Gwa onye ị tụkwasịrị obi okwu"] },
            { title: "Kpọọ", bullets: ["Jiri nọmba ị tụkwasịlarị obi", "Ọ bụghị nọmba dị n'ozi ahụ mgbe ọ bụla"] },
            { title: "AI dị ka onye enyemaka", bullets: ["Buru ụzọ wepụ ozi nzuzo", "Jụọ: \"Nke a ọ̀ nwere ihe ịrịba ama nke aghụghọ?\"", "Nzọụkwụ nke gị ka na-ebu ụzọ"] }
          ],
          tryIt: "Dee Kwụsị, Lelee, Kpọọ na kaadị nchekwa gị. Wee jụọ ngwa enyemaka AI: \"Ozi a ọ̀ nwere ihe ịrịba ama nke aghụghọ? E jidere ngwongwo gị. Kwụọ $1.99 site na njikọ a taa ma ọ bụ a ga-eweghachi ya.\" Tụnyere azịza ya na ihe ịrịba ama anọ ahụ.",
          youCanNow: "iji omume Kwụsị, Lelee, Kpọọ ma rịọ AI maka echiche nke abụọ n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O4", q: "Na Kwụsị, Lelee, Kpọọ, gịnị ka Kpọọ pụtara?", options: ["Kpọọ nọmba dị n'ozi ahụ", "Kpọghachi onye kpọrọ gị oku", "Kpọtụrụ onye ahụ ma ọ bụ ụlọ ọrụ ahụ site na nọmba ị tụkwasịlarị obi", "Kpọọ enyi ka ọ kwụọ ụgwọ maka gị"], answer: 2, why: "Kpọọ pụtara iji nọmba dị na kaadị nchekwa gị, kaadị ụlọ akụ, akwụkwọ ụgwọ ma ọ bụ weebụsaịtị i dere n'onwe gị." },
            { objective: "O4", q: "Onye kpọrọ oku kwuru na ọ si n'ụlọ ọrụ ndị uwe ojii, na ị gaghị akwụsị oku. Gịnị ka ị nwere ike ime?", options: ["Kwụsị oku; ọ dị mma ịkwụsị oku onye ọ bụla", "Nọgide n'oku n'agbanyeghị ihe ọ bụla", "Nye ya adreesị gị", "Kwụọ ya ka ọ kwụsị oku ahụ"], answer: 0, why: "Kwụsị pụtara na ị nwere ike ịkwụsị oku onye ọ bụla, ọbụna onye kwuru na ọ bụ onye uwe ojii." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ichebe ego gị na ozi gị",
          minutes: 5,
          goal: "Depụta ozi na ụzọ ịkwụ ụgwọ ị na-agaghị enye onye na-akpọ oku ma ọ bụ ozi ị na-atụghị anya ya mgbe ọ bụla.",
          text: [
            "Enyela onye ọ bụla kpọtụrụ gị na mberede ihe ndị a mgbe ọ bụla: nọmba Social Security ma ọ bụ Medicare gị, nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe, ma ọ bụ koodu e zitere n'ekwentị gị. Ụlọ akụ gị maralarị nọmba akaụntụ gị; ezi ụlọ akụ agaghị arịọ okwuntughe gị ma ọ bụ koodu e zitere gị.",
            "Ejila gift card, wire transfer, cryptocurrency ma ọ bụ app ịkwụ ụgwọ kwụọ onye ị na-amaghị ụgwọ mgbe ọ bụla, etinyekwala cheque n'ụlọ akụ wee zighachi akụkụ ego ahụ. FTC kwuru na ezi ọfịs gọọmentị agaghị agwa gị mgbe ọ bụla ka ị bugharịa ego ka i \"chebe\" ya, wepụta ego nkịtị, ma ọ bụ zụta ọla edo.",
            "Ekwela ka onye na-akpọ oku jikọọ na kọmputa gị ka o \"dozie\" ya mgbe ọ bụla. Ọ bụrụ na i nyelarị ego ma ọ bụ ozi, mee ngwa ngwa: kpọọ ụlọ akụ gị site na nọmba dị na kaadị gị ma gwa ha ihe mere."
          ],
          steps: ["Ekesala nọmba Social Security, Medicare, ụlọ akụ ma ọ bụ kaadị na onye ị na-atụghị anya ya mgbe ọ bụla.", "Ekesala okwuntughe ma ọ bụ koodu e zitere gị mgbe ọ bụla.", "Ejila gift card, wire, crypto ma ọ bụ app ịkwụ ụgwọ kwụọ onye ị na-amaghị mgbe ọ bụla.", "Ọ bụrụ na i kwụlarị ma ọ bụ kesaa, kpọọ ụlọ akụ gị ozugbo site na nọmba dị na kaadị gị."],
          words: [["Koodu e zitere gị (texted code)", "obere nọmba e zitere n'ekwentị gị iji gosi na ọ bụ n'ezie gị na-abanye."], ["Wire transfer", "izipu ego site na kọmputa; ọ na-esi ike nke ukwuu inweta ya azụ."]],
          slides: [
            { title: "Ekesala mgbe ọ bụla", bullets: ["Nọmba Social Security ma ọ bụ Medicare", "Nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe", "Koodu e zitere n'ekwentị gị"] },
            { title: "Ejila ihe ndị a kwụọ onye ị na-amaghị", bullets: ["Gift card ma ọ bụ wire transfer", "Cryptocurrency ma ọ bụ app ịkwụ ụgwọ", "Ego si na cheque ị ka gbanwere"] },
            { title: "Ezi ọfịs anaghị arịọ gị ka ị", bullets: ["Bugharịa ego ka i \"chebe\" ya", "Wepụta ego nkịtị ma ọ bụ zụta ọla edo"] },
            { title: "I kwụlarị?", bullets: ["Kpọọ ụlọ akụ gị ozugbo", "Jiri nọmba dị na kaadị gị"] }
          ],
          sources: [{ name: "FTC: Otu esi ezere aghụghọ", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Na kaadị nchekwa gị, dee: \"Anaghị m ekesa nọmba m, okwuntughe m ma ọ bụ koodu m na onye ọ bụla buru ụzọ kpọtụrụ m. Anaghị m eji gift card, wire ma ọ bụ crypto akwụ onye m na-amaghị ụgwọ.\"",
          youCanNow: "ichebe ozi nzuzo gị ma jụ ụzọ ịkwụ ụgwọ dị ize ndụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ezi ụlọ akụ agaghị arịọ gị mgbe ọ bụla?", options: ["Ka ị bịa n'ụlọ akụ ahụ", "Okwuntughe gị ma ọ bụ koodu e zitere n'ekwentị gị", "Ka ị gụọ akwụkwọ akaụntụ gị", "Ka ị kpọọ nọmba dị na kaadị gị"], answer: 1, why: "Ụlọ akụ gị maralarị akaụntụ gị; ọ gaghị arịọ okwuntughe gị ma ọ bụ koodu e zitere gị." },
            { objective: "O5", q: "Ị chọpụtara na i nyere onye aghụghọ nọmba kaadị gị otu awa gara aga. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Chere ka ị hụ ihe ga-eme", "Kpọghachi onye aghụghọ ahụ", "Tinye ya n'ịntanetị", "Kpọọ ụlọ akụ gị ozugbo site na nọmba dị na kaadị gị"], answer: 3, why: "Ime ngwa ngwa na ụlọ akụ gị bụ nzọụkwụ mbụ ma ọ bụrụ na i kesalarị ego ma ọ bụ ozi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọ banyere aghụghọ na inweta enyemaka",
          minutes: 5,
          goal: "Kpọọ aha ebe ị ga-akọ aghụghọ na ebe ị ga-enweta enyemaka.",
          text: [
            "Ịkọ banyere aghụghọ na-enyere aka ịkwụsị ndị aghụghọ, ọ nwekwara ike inyere gị aka. Na United States, ị nwere ike ịkọ aghụghọ nye Federal Trade Commission na ReportFraud.ftc.gov. Ị nwekwara ike ịkọ mpụ ịntanetị nye Internet Crime Complaint Center nke FBI na ic3.gov.",
            "Ọ bụrụ na ị dị afọ 60 ma ọ bụ karịa, National Elder Fraud Hotline (nọmba enyemaka maka aghụghọ e mere ndị okenye), nke Department of Justice na-elekọta, bụ n'efu: kpọọ 833-FRAUD-11 (833-372-8311). Mgbe anyị lelere, ọ na-emeghe Mọnde ruo Fraịde, site n'elekere 10 nke ụtụtụ ruo elekere 6 nke mgbede n'oge Eastern, na enyemaka n'asụsụ bekee, Spanish na asụsụ ndị ọzọ. Lelee weebụsaịtị hotline ahụ maka oge ọ na-emeghe ugbu a.",
            "Ọ bụrụ na mmadụ ejiri ozi gị, gaa na IdentityTheft.gov maka atụmatụ mgbake n'efu. Ọ bụrụ na aghụghọ Medicare dị n'ime ya, kpọọ 1-800-MEDICARE (1-800-633-4227). Ezi saịtị ịkọ aghụghọ agaghị arịọ gị ka ị kwụọ ụgwọ ka i nweta ego gị azụ; onye ọ bụla na-arịọ nke a bụ aghụghọ ọzọ."
          ],
          steps: ["Buru ụzọ kpọọ ụlọ akụ gị ma ọ bụrụ na e weere ego.", "Kọọ ya na ReportFraud.ftc.gov.", "Afọ 60 ma ọ bụ karịa: kpọọ Elder Fraud Hotline, 833-372-8311.", "Ọ bụrụ na e jiri njirimara gị: gaa na IdentityTheft.gov.", "Kpachara anya maka onye ọ bụla na-arịọ ụgwọ ka o weghachite ego gị."],
          words: [["Ịkọ (report)", "ịgwa ọfịs kwesịrị ekwesị ihe mere ka o mee ihe."], ["Izu njirimara (identity theft)", "mgbe mmadụ jiri ozi gbasara gị mee ka ọ bụ gị."]],
          slides: [
            { title: "Ebe ị ga-akọ ya", bullets: ["ReportFraud.ftc.gov", "ic3.gov nke FBI maka mpụ ịntanetị"] },
            { title: "Afọ 60 ma ọ bụ karịa", bullets: ["National Elder Fraud Hotline", "833-FRAUD-11 (833-372-8311)", "N'efu; lelee saịtị ya maka oge ọ na-emeghe ugbu a"] },
            { title: "Enyemaka ọzọ", bullets: ["IdentityTheft.gov ma ọ bụrụ na e jiri ozi gị", "1-800-MEDICARE maka aghụghọ Medicare", "Akwụla onye ọ bụla ka o \"weghachite\" ego gị"] }
          ],
          sources: [{ name: "FTC: Kọọ aghụghọ", url: "https://reportfraud.ftc.gov/" }, { name: "DOJ Office for Victims of Crime: National Elder Fraud Hotline", url: "https://ovc.ojp.gov/program/stop-elder-fraud/providing-help-restoring-hope" }, { name: "FBI Internet Crime Complaint Center", url: "https://www.ic3.gov/" }, { name: "FTC: Ihe ị ga-ama banyere izu njirimara", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }, { name: "Medicare: Ịkọ banyere aghụghọ na mmegbu", url: "https://www.medicare.gov/basics/reporting-medicare-fraud-and-abuse" }],
          tryIt: "Ọrụ ikpeazụ: mechaa kaadị nchekwa aghụghọ gị. Tinye ebe ị ga-akọ aghụghọ na nọmba Elder Fraud Hotline. Wee jiri ihe ịrịba ama anọ ahụ kpee ikpe ozi abụọ ndị a: (1) \"Ndewo Nna nna, nke a bụ nọmba ọhụrụ m, enwere m nsogbu, zitere m $500 na gift card\"; (2) ncheta site n'ụlọ ahịa ọgwụ gị na ọgwụ gị dị njikere, na-enweghị njikọ na na-enweghị arịrịọ ego.",
          youCanNow: "ịmata aghụghọ, lelee ya n'enweghị nsogbu, chebe ego gị, ma kọọ ya n'ebe kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka IdentityTheft.gov bụ maka ya?", options: ["Atụmatụ mgbake n'efu ma ọ bụrụ na mmadụ ejiri ozi gị", "Ịzụ mkpuchi njirimara (insurance)", "Ịkwụ ụtụ isi gị", "Ịkọ na ekwentị gị furu efu"], answer: 0, why: "IdentityTheft.gov na-enye atụmatụ mgbake n'efu mgbe e jiri ozi gị." },
            { objective: "O6", q: "Ụlọ ọrụ kpọrọ oku na-ekwe nkwa inyere gị aka inweta ego gị furu efu ma ọ bụrụ na ị kwụọ ụgwọ. Gịnị bụ nke a?", options: ["Ọrụ gọọmentị", "Nkwụghachi nkịtị", "O yikarịrị ka ọ bụ aghụghọ ọzọ", "Ụlọ akụ ị nwere ike ịtụkwasị obi"], answer: 2, why: "Ezi saịtị ịkọ aghụghọ anaghị arịọ gị ka ị kwụọ ụgwọ ka i nweta ego gị azụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ichebe onwe gị",
        questions: [
          { objective: "O4", q: "Kedu nzọụkwụ atọ nke omume nchekwa ahụ?", options: ["Pịa, Kwụọ, Chefuo", "Zaa, Kesaa, Zipu", "Chere, Tụọ anya, Kwụọ", "Kwụsị, Lelee, Kpọọ"], answer: 3, why: "Kwụsị, Lelee, Kpọọ na-eme ka onye aghụghọ jiri nwayọọ." },
          { objective: "O4", q: "Mgbe ị na-akpọ iji lelee, kedu nọmba ị ga-eji?", options: ["Nke si na kaadị nchekwa gị, kaadị gị ma ọ bụ akwụkwọ ụgwọ", "Nke dị n'ozi ahụ", "Nke onye kpọrọ oku nyere gị", "Nke si na pop-up"], answer: 0, why: "Naanị nọmba ị tụkwasịlarị obi dị mma." },
          { objective: "O5", q: "Onye kpọrọ oku sịrị gị bugharịa ego nchekwa gị gaa na \"akaụntụ nchekwa\" ka i chebe ya. Nke a bụ:", options: ["Ezigbo ndụmọdụ", "Iwu ụlọ akụ", "Aghụghọ; ezi ọfịs anaghị arịọ nke a mgbe ọ bụla", "Iwu ụtụ isi"], answer: 2, why: "FTC kwuru na ezi ọfịs anaghị agwa gị mgbe ọ bụla ka ị bugharịa ego ka i chebe ya." },
          { objective: "O6", q: "Ebee ka ị nwere ike ịkọ aghụghọ nye FTC?", options: ["Pop-up", "Weebụsaịtị onye aghụghọ ahụ", "Ihe e dere na soshal midia", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov bụ saịtị FTC maka ịkọ aghụghọ." },
          { objective: "O6", q: "Mmadụ na-ekwe nkwa iweghachite ego gị furu efu ma ọ bụrụ na ị kwụọ ụgwọ. Gịnị bụ nke a?", options: ["Mmemme gọọmentị", "Enyemaka nkịtị", "O yikarịrị ka ọ bụ aghụghọ ọzọ", "Ndụmọdụ n'efu"], answer: 2, why: "Ezi saịtị ịkọ aghụghọ anaghị ana ụgwọ iji weghachite ego." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nchekwa AI na Ịmata Aghụghọ maka Ndị Okenye",
    questions: [
      { objective: "O1", q: "Kedu ụlọ ọrụ gọọmentị US na-akọwa ihe ịrịba ama anọ nke aghụghọ?", options: ["Ọfịs na-akọ banyere ihu igwe", "Federal Trade Commission (FTC)", "Ọfịs nzipu akwụkwọ ozi", "Ụlọ ọrụ ekwentị"], answer: 1, why: "FTC na-echebe ndị na-azụ ahịa pụọ n'aka aghụghọ." },
      { objective: "O1", q: "Ozi kwuru na i meriri onyinye mana ị ga-ebu ụzọ kwụọ ụgwọ. Nke a bụ:", options: ["Ihe ịrịba ama aghụghọ", "Onyinye nkịtị", "Iwu ụtụ isi", "Iwu ụlọ akụ"], answer: 0, why: "Onyinye chọrọ ka ị kwụọ ụgwọ bụ aghụghọ a na-ahụkarị." },
      { objective: "O1", q: "\"Akwụsịla oku, agwakwala onye ọ bụla\" bụ ihe ịrịba ama nke:", options: ["Ịkwagide, ihe ịrịba ama aghụghọ", "Ezigbo ọrụ", "Ezi ihe mberede", "Oku dọkịta"], answer: 0, why: "Ịkwagide na nzuzo bụ ihe ịrịba ama aghụghọ." },
      { objective: "O1", q: "Kedu ụzọ ịkwụ ụgwọ bụ ihe ịdọ aka na ntị mgbe onye ị na-amaghị rịọrọ ya?", options: ["Ịkwụ ụgwọ ọkụ ma ọ bụ mmiri gị na saịtị ya", "Gift card", "Ịkwụ ụgwọ n'ụlọ ahịa nri", "Cheque i zigara onye nwe ụlọ gị"], answer: 1, why: "Ndị aghụghọ na-arịọ gift card n'ihi na ọ na-esi ike ịchọpụta ebe ego ahụ gara." },
      { objective: "O2", q: "Gịnị bụ ịṅomi olu (voice cloning)?", options: ["Nkuzi ịgụ egwu", "Ndozi ekwentị", "Iji AI ṅomie olu mmadụ", "Ụdị ngwa enyemaka ịnụ ihe"], answer: 2, why: "AI nwere ike ịṅomi olu site n'obere ndekọ." },
      { objective: "O2", q: "N'oku ihe mberede adịgboroja, onye nke abụọ nwere ike ime ka ọ bụ:", options: ["Onye osi nri", "Nkịta onye agbata obi gị", "Onye na-akọ akụkọ ihu igwe", "Ọka iwu ma ọ bụ onye uwe ojii"], answer: 3, why: "Ndị aghụghọ na-etinye ndị ọchịchị adịgboroja ka ọ dị ka eziokwu." },
      { objective: "O2", q: "Okwu nzuzo ezinụlọ na-enyere gị aka:", options: ["Imeghe ekwentị gị", "Ịkwụ ụgwọ", "Ịlele onye na-akpọ oku n'ezie", "Ịgbanwe okwuntughe gị"], answer: 2, why: "Naanị ezi ezinụlọ gị maara ya." },
      { objective: "O3", q: "Mkpụrụ okwu ziri ezi ọ̀ na-egosi na ozi bụ eziokwu?", options: ["Mba", "Ee", "Naanị na Sọnde", "Naanị site n'ụlọ akụ"], answer: 0, why: "AI na-ede ozi adịgboroja nwere mkpụrụ okwu ziri ezi." },
      { objective: "O3", q: "Ozi ederede kwuru na e jidere ngwongwo gị; kwụọ obere ụgwọ site na njikọ. Ị kwesịrị:", options: ["Ịpị ma kwụọ", "Iziga ya ndị enyi gị", "Ịza ya na nọmba kaadị gị", "Ịghara ịpị; lelee ya n'onwe gị na ụlọ ọrụ na-ebuga ngwongwo"], answer: 3, why: "Njikọ dị n'ozi ị na-atụghị anya ya na-eduga n'aka ndị aghụghọ." },
      { objective: "O3", q: "Pop-up kwuru \"Nje (virus)! Kpọọ nọmba a ugbu a.\" Ị ga-:", options: ["Kpọọ ya", "Ghara ịkpọ; mechie ya ma ọ bụ gbanyụọ ngwaọrụ ahụ", "Kwụọ ụgwọ ndozi", "Kwe ka ha jikọọ na kọmputa gị"], answer: 1, why: "Ịdọ aka na ntị nje na pop-up bụ aghụghọ a na-ahụkarị." },
      { objective: "O3", q: "Dị ka Medicare si kwuo, Medicare agaghị mgbe ọ bụla:", options: ["Ziga gị ozi n'akwụkwọ ozi", "Kpọọ gị oku ire gị ihe ọ bụla ma ọ bụ bịa n'ụlọ gị", "Kwụọ ụgwọ nlekọta", "Nwee weebụsaịtị"], answer: 1, why: "Medicare kwuru na ọ gaghị akpọ oku ire ihe ma ọ bụ bịa n'ụlọ gị." },
      { objective: "O4", q: "Na Kwụsị, Lelee, Kpọọ, \"Kwụsị\" pụtara:", options: ["Kwụsị ịkwụ ụgwọ gị", "Kwụsị iji ekwentị gị ruo mgbe ebighị ebi", "Kwụsị ịgwa ezinụlọ gị okwu", "Apịala, akwụla ụgwọ, ekesala ihe"], answer: 3, why: "Ịkwụsị na-ewepụ ọsọ onye aghụghọ ahụ." },
      { objective: "O4", q: "Tupu i tinye ozi n'ime AI maka echiche nke abụọ, ị kwesịrị:", options: ["Iwepụ ozi nzuzo", "Itinye nọmba ụlọ akụ gị", "Itinye okwuntughe gị", "Itinye adreesị gị"], answer: 0, why: "Ozi nzuzo anaghị abanye n'ime AI mgbe ọ bụla." },
      { objective: "O4", q: "Echiche ngwa enyemaka AI banyere ozi bụ:", options: ["Mkpebi iwu", "Ziri ezi mgbe niile", "Onye enyemaka, ọ bụghị okwu ikpeazụ", "Mkpebi ụlọ akụ"], answer: 2, why: "AI nwere ike ime mperi; nzọụkwụ nke gị na-ebu ụzọ." },
      { objective: "O5", q: "Ezi ụlọ akụ agaghị arịọ gị mgbe ọ bụla:", options: ["Ka ị kpọọ nọmba ya", "Ka ị bịa n'ụlọ akụ ahụ", "Ka ị gụọ akwụkwọ akaụntụ gị", "Okwuntughe gị ma ọ bụ koodu e zitere gị"], answer: 3, why: "Ụlọ akụ anaghị arịọ okwuntughe ma ọ bụ koodu." },
      { objective: "O5", q: "Mmadụ rịọrọ gị ka i tinye cheque ya n'ụlọ akụ gị wee zighachi akụkụ ya. Nke a bụ:", options: ["Iwu ụlọ akụ", "Enyemaka nkịtị", "Aghụghọ cheque adịgboroja", "Nkwụghachi ụtụ isi"], answer: 2, why: "Cheque ahụ ga-ada, ị ga-atụfukwa ego i zipuru." },
      { objective: "O5", q: "Ọ bụrụ na i zigalarị onye aghụghọ ego, oku mbụ bụ nye:", options: ["Onye aghụghọ ahụ", "Ụlọ akụ gị, site na nọmba dị na kaadị gị", "Nọmba pop-up", "Ọ dịghị onye"], answer: 1, why: "Ụlọ akụ gị nwere ike ịkwụsị ma ọ bụ weghachite ego ahụ." },
      { objective: "O6", q: "Nọmba National Elder Fraud Hotline bụ:", options: ["833-372-8311", "911", "411", "Nọmba si n'ozi ederede"], answer: 0, why: "833-FRAUD-11 (833-372-8311) bụ hotline nke DOJ." },
      { objective: "O6", q: "Ọ bụrụ na mmadụ ejiri ozi gbasara gị, atụmatụ mgbake n'efu dị na:", options: ["IdentityTheft.gov", "Mgbasa ozi pop-up", "Saịtị onye aghụghọ ahụ", "Peeji soshal midia"], answer: 0, why: "IdentityTheft.gov bụ saịtị mgbake nke FTC." },
      { objective: "O6", q: "Saịtị FBI maka ịkọ mpụ ịntanetị bụ:", options: ["fbi-refund.win", "ic3.gov", "njikọ n'ozi ederede", "saịtị gift card"], answer: 1, why: "IC3 bụ Internet Crime Complaint Center nke FBI." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 8, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nọmba a tụkwasịrị obi na nzọụkwụ", objective: "O4", notYet: "Nọmba a tụkwasịrị obi erughị atọ, ma ọ bụ nọmba e detuuru site n'ozi.", meets: "Nọmba atọ a tụkwasịrị obi (ezinụlọ, ụlọ akụ site n'azụ kaadị, ọfịs dọkịta) na nzọụkwụ Kwụsị, Lelee, Kpọọ e dere ede.", exceeds: "Nwere ike ịkọwa ebe nọmba ọ bụla si na ihe mere a ga-eji tụkwasị ya obi." },
      { name: "Okwu nzuzo ezinụlọ", objective: "O2", notYet: "Enweghị okwu nzuzo ezinụlọ, ma ọ bụ ọ dị mfe ịkọ ya nkọ ma ọ bụ ọ dị n'ịntanetị.", meets: "E dere okwu nzuzo ezinụlọ na kaadị ahụ ma kesaa ya na ezinụlọ.", exceeds: "Emeela omume ịjụ ya n'oku ihe mberede e mere ka ọ bụ eziokwu." },
      { name: "Ebe a ga-akọ ya", objective: "O6", notYet: "Enweghị ebe a ga-akọ ya, ma ọ bụ ebe ezighi ezi.", meets: "Opekata mpe ebe abụọ ziri ezi, dị ka ReportFraud.ftc.gov na Elder Fraud Hotline.", exceeds: "Depụtakwara IdentityTheft.gov ma kwuo na a ga-ebu ụzọ kpọọ ụlọ akụ ma ọ bụrụ na e weere ego." },
      { name: "E kpere ikpe ozi atụ", objective: "O1", notYet: "Ahụghị na otu ozi atụ bụ aghụghọ.", meets: "Kpere ikpe ozi atụ abụọ ahụ nke ọma ma kpọọ aha ihe ịrịba ama ndị a hụrụ.", exceeds: "Kwuru ihe ọ ga-eme ọzọ, site n'iji Kwụsị, Lelee, Kpọọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-edebe kaadị nchekwa aghụghọ ha n'akụkụ ekwentị mgbe ụbọchị 30 gachara (nsochi)",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma zere oku, ozi ederede ma ọ bụ email aghụghọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ezinụlọ kwekọrịtara n'okwu nzuzo ezinụlọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, na kọmputa ma ọ bụ tablet ma ọ bụrụ na o nwere",
      "Kaadị efu ma ọ bụ akwụkwọ na mkpịsị ode maka kaadị nchekwa aghụghọ",
      "Ozi atụ abụọ e bipụtara (otu aghụghọ, otu eziokwu) maka ọrụ ikpeazụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke na nwayọọ: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Jiri ozi atụ e chepụtara echepụta; arịọla ndị na-amụ ihe mgbe ọ bụla ka ha kesaa ezi nọmba akaụntụ, Medicare ma ọ bụ Social Security.",
      "Mee egwuregwu oku nwa nwa adịgboroja ka ndị na-amụ ihe mee omume ịkwụsị oku na ịkpọghachi.",
      "Gwa ndị na-amụ ihe na onye ọ bụla nwere ike ịbụ onye a ghọgburu; ịbụ onye e ghọgburu abụghị ihe ihere, ịkọ ya na-enyekwa aka.",
      "Oge na nọmba hotline nwere ike ịgbanwe; lelee weebụsaịtị gọọmentị tupu nnọkọ ahụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

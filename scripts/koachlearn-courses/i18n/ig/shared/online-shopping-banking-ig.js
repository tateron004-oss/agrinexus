"use strict";

// Koach Learn course (Igbo translation of shared/online-shopping-banking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "online-shopping-banking-ig",
  lang: "ig",
  translationOf: "online-shopping-banking",
  category: "Seniors and Technology",
  name: "Ịzụ Ahịa na Iji Ụlọ Akụ n'Ịntanetị n'Enweghị Nsogbu",
  skills: "Ịlele na ụlọ ahịa bụ ezigbo, Ịkwụ ụgwọ n'ụzọ ka nchekwa, Ịchọpụta ebe ngwongwo ruru na ịlaghachi ya, Iji app ụlọ akụ n'enweghị nsogbu, Ịmata na ịkọ aghụghọ ego",
  outcome: "ịzụta ihe n'ịntanetị site n'ụlọ ahịa i lelere, ịkwụ ụgwọ n'ụzọ ka nchekwa, idebe ndekọ, na iji app ma ọ bụ weebụsaịtị ụlọ akụ gị n'onwe ya lee ego dị n'akaụntụ gị ma hụ ego e wepụrụ nke ị na-emeghị.",
  about: [
    "Ọtụtụ mmadụ na-azụta nri, ọgwụ na ihe ụlọ n'ịntanetị ugbu a, ma na-akwụ ụgwọ site n'ekwentị ha. Ọ bụrụ na i mee ya nke ọma, ọ na-echekwa njem na oge. Ọ bụrụ na i mee ya n'akpachaghị anya, ọ nwere ike ime ka ego furu gị.",
    "Ihe ọmụmụ a na-egosi gị otu esi elele ụlọ ahịa tupu ịzụta, ịkwụ ụgwọ n'ụzọ na-echebe gị karịa, ịchọpụta ebe ngwongwo ruru na ịlaghachi ya, iji app ma ọ bụ weebụsaịtị ụlọ akụ gị n'enweghị nsogbu, na ịmata aghụghọ ego.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ọmụmụ a na-akụzi omume nchekwa; ọ bụghị ndụmọdụ gbasara ego. Maka ajụjụ gbasara akaụntụ gị, kpọọ nọmba dị n'azụ kaadị ụlọ akụ gị."
  ],
  finalTask: "Họrọ otu ihe ị chọrọ. Lelee ụlọ ahịa ahụ n'ụzọ atọ (ezigbo adreesị weebụsaịtị, nyocha na mkpesa, iwu ịlaghachi ihe), tinye ya n'ụgbọ ahịa (cart), ma kwụsị na peeji ịkwụ ụgwọ, na-ede ụzọ ịkwụ ụgwọ ị ga-eji na ihe mere. Mgbe ahụ, meghee app ma ọ bụ weebụsaịtị ụlọ akụ gị n'onwe ya, lee ego dị n'akaụntụ gị na ego batara ma pụọ n'oge na-adịbeghị anya, ma kọwaa ihe ị ga-eme ma ọ bụrụ na ị hụ ego e wepụrụ nke ị na-emeghị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ịzụ ahịa na iji ụlọ akụ n'ịntanetị n'enweghị nsogbu: ndị agadi, ndị na-elekọta ego onye ezinụlọ, ndị na-alọta n'obodo na-emeghe akaụntụ ọhụrụ, na onye ọ bụla zere ịzụ ahịa ma ọ bụ iji ụlọ akụ n'ịntanetị n'ihi ụjọ aghụghọ.",
    startingPoint: "Ha nwere ike iji ekwentị ma ọ bụ kọmputa meghee weebụsaịtị na app, ụfọdụ nwekwara akaụntụ ụlọ akụ na kaadị debit ma ọ bụ kaadị kredit. Ọtụtụ amachaghị otu esi amata ụlọ ahịa adịgboroja na ezigbo, ụzọ ịkwụ ụgwọ na-echebe ha, otu esi achọpụta ebe ngwongwo ruru ma laghachi ya, ma ọ bụ ihe ha ga-eme maka ego e wepụrụ nke ha na-emeghị.",
    gap: "Ịzụ ahịa, ịkwụ ụgwọ na iji ụlọ akụ abanyela n'ịntanetị, ndị aghụghọ esokwala: ụlọ ahịa adịgboroja, ozi ụgha gbasara iziga ngwongwo, na oku ụgha si n'ụlọ akụ. Ịmara nlele ole na ole na ụzọ ka nchekwa isi kwụọ ụgwọ na-enyere ndị mmadụ aka ichekwa oge na ego ma zere mfu siri ike ma ọ bụ nke a na-apụghị inwetaghachi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka mkpesa ụgwọ (dispute), ego dị n'akaụntụ (balance) na nkwenye nzọụkwụ abụọ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ịntanetị; app ma ọ bụ weebụsaịtị ụlọ akụ n'onwe ya",
      "Oge: ihe dị ka nkeji 5 n'otu nkuzi, ihe dị ka nkeji 60 n'ozuzu",
      "Ọ dịghị mkpa ịzụta ezigbo ihe: ọrụ ikpeazụ na-akwụsị na peeji ịkwụ ụgwọ",
      "Nzuzo: ndị na-amụ ihe anaghị ede nọmba kaadị, okwuntughe ma ọ bụ koodu n'ihu ndị ọzọ, na Wi-Fi ọha n'enweghị data nke ha, ma ọ bụ n'email, ozi ederede ma ọ bụ chat"
    ],
    prerequisites: "Ọ dịghị. \"Ihe Ndabere Ịntanetị\" ma ọ bụ \"Iji Smartphone na Tablet\" na-enyere ndị ọhụrụ na weebụsaịtị na app aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ụlọ ahịa ma ọ bụ ọnụahịa pụrụ iche n'ịntanetị", action: "ilele ụlọ ahịa ahụ n'ụzọ atọ tupu ịzụta: ezigbo adreesị weebụsaịtị, nyocha na mkpesa, na iwu ịlaghachi ihe", standard: "ma mee nlele atọ ahụ niile ma kpebie n'ụzọ doro anya ịzụta ma ọ bụ ịghara ịzụta" },
    { id: "O2", condition: "Na peeji ịkwụ ụgwọ nke ụlọ ahịa", action: "ịhọrọ ụzọ ịkwụ ụgwọ na-echebe gị ma kọwaa ihe mere", standard: "n'ahọrọghị mgbe ọ bụla kaadị onyinye, wire transfer, app ịkwụ ụgwọ ma ọ bụ crypto maka onye na-ere ihe n'ịntanetị" },
    { id: "O3", condition: "Mgbe i nyechara iwu ịzụta ihe", action: "idebe ndekọ ihe ị zụtara, ịchọpụta ebe ngwongwo ruru site na weebụsaịtị ma ọ bụ app ụlọ ahịa ahụ n'onwe ya, ma malite ịlaghachi ya", standard: "ma debe nkwenye ihe ị zụtara, n'esoghị njikọ (link) dị n'ozi ederede na-atụghị anya ịchọpụta ngwongwo" },
    { id: "O4", condition: "Site n'iji app ma ọ bụ weebụsaịtị ụlọ akụ gị n'onwe ya", action: "ịbanye n'enweghị nsogbu ma lee ego dị n'akaụntụ gị na ego batara ma pụọ n'oge na-adịbeghị anya", standard: "ma ruo ụlọ akụ ahụ n'esoghị njikọ si n'email ma ọ bụ ozi ederede, ma pụọ (sign out) na njedebe" },
    { id: "O5", condition: "Mgbe e nyere gị ndepụta ego batara ma pụọ n'akaụntụ gị n'oge na-adịbeghị anya", action: "ịmata ego e wepụrụ nke ị na-emeghị ma kọwaa nzọụkwụ isi kọọ ya ma kpọchie kaadị ahụ", standard: "ma kpọọ nọmba dị na kaadị ma ọ bụ n'app ụlọ akụ n'onwe ya, ma mee ngwa ngwa" },
    { id: "O6", condition: "Mgbe e nyere gị oku, ozi ederede ma ọ bụ email gbasara ego gị", action: "ịmata ihe ịrịba ama nke aghụghọ ego ma kwụsị ya", standard: "n'enyeghị okwuntughe ma ọ bụ koodu mgbe ọ bụla, na-akpọghachi mgbe niile na nọmba dị na kaadị gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịzụ ahịa n'ịntanetị n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịlele na ụlọ ahịa bụ ezigbo",
          minutes: 5,
          goal: "Lelee weebụsaịtị tupu ịzụta ihe na ya.",
          text: [
            "Ụlọ ahịa adịgboroja na-eṅomi ka ezigbo ụlọ ahịa si dị, ma na-egosi ọnụahịa dị ọnụ ala nke ukwuu ka ọ bụrụ eziokwu. Tupu ịzụta, were otu nkeji lelee.",
            "Dee adreesị ụlọ ahịa ahụ n'onwe gị, ma ọ bụ jiri app ya n'onwe ya, kama ịpị mgbasa ozi ma ọ bụ njikọ dị n'ozi ederede. Lee ogwe adreesị: e dere aha ya nke ọma? Chọọ https na akara mkpọchi, ma mara na Federal Trade Commission (FTC, ọfịs gọọmentị US na-echebe ndị na-azụ ahịa) na-adọ aka na ntị na ndị aghụghọ nwekwara ike iji ha.",
            "FTC na-atụ aro ka ị chọọ aha ụlọ ahịa ma ọ bụ ihe ahụ ya na okwu \"complaint\" (mkpesa) ma ọ bụ \"scam\" (aghụghọ) ka ị hụ ihe ndị ọzọ zụtara na-ekwu, gụọ nyocha nke ọma n'ihi na ụfọdụ bụ ụgha, ma lelee iwu ịlaghachi ihe tupu ịzụta: ụbọchị ole ị nwere, na onye ga-akwụ ụgwọ iziga ya azụ."
          ],
          steps: ["Dee adreesị ụlọ ahịa ahụ n'onwe gị ma ọ bụ jiri app ya n'onwe ya.", "Lelee na e dere adreesị weebụsaịtị ahụ nke ọma.", "Chọọ aha ụlọ ahịa ahụ na \"complaint\" ma ọ bụ \"scam\".", "Gụọ ọtụtụ nyocha, ọ bụghị naanị kpakpando.", "Gụọ iwu ịlaghachi ihe: ụbọchị ole, na onye na-akwụ ụgwọ iziga ya azụ."],
          words: [["Adreesị weebụsaịtị", "aha weebụsaịtị, nke a na-egosi n'ogwe dị n'elu browser, dị ka target.com."], ["https", "ihe ịrịba ama na njikọ gị na saịtị ahụ nwere nchekwa; ndị aghụghọ nwekwara ike iji ya."], ["Iwu ịlaghachi ihe", "iwu ụlọ ahịa gbasara iziga ihe azụ."]],
          slides: [
            { title: "Ụlọ ahịa adịgboroja dị ka ezigbo", bullets: ["Ha na-eṅomi akara (logo) ezigbo ụlọ ahịa", "Ọnụahịa dị ọnụ ala nke ukwuu ka ọ bụrụ eziokwu"] },
            { title: "Ruo ebe ahụ n'enweghị nsogbu", bullets: ["Dee adreesị ahụ n'onwe gị ma ọ bụ jiri app ya n'onwe ya", "Lelee mkpụrụ edemede ya", "https na mkpọchi na-enyere aka, ma ndị aghụghọ na-ejikwa ha"] },
            { title: "Nlele atọ tupu ịzụta", bullets: ["Chọọ aha ahụ na \"complaint\" ma ọ bụ \"scam\"", "Gụọ ọtụtụ nyocha, ọ bụghị naanị kpakpando", "Gụọ iwu ịlaghachi ihe"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Họrọ ụlọ ahịa ị nwere ike ịzụta ihe na ya. Mee nlele atọ ahụ: chọọ aha ya na \"complaint\", gụọ nyocha atọ, ma chọpụta ụbọchị ole ị nwere ịlaghachi ihe.",
          youCanNow: "ilele adreesị, aha ọma na iwu ịlaghachi ihe nke ụlọ ahịa tupu ịzụta.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka i kwesịrị ilele n'ogwe adreesị tupu ịzụta?", options: ["Agba peeji ahụ", "Ọnụ ọgụgụ ihe dị n'ụgbọ ahịa", "Oge ụbọchị", "Na e dere aha ụlọ ahịa ahụ nke ọma"], answer: 3, why: "Ụlọ ahịa adịgboroja na-ejikarị aha yiri nke ezigbo, ya mere lelee mkpụrụ edemede ya." },
            { objective: "O1", q: "Ị hụrụ mgbasa ozi na soshal midia maka akpụkpọ ụkwụ dị ọnụ ala nke ukwuu. Gịnị ka ị ga-eme?", options: ["Dee adreesị ụlọ ahịa ahụ n'onwe gị ma chọọ aha ya na \"complaint\" ma ọ bụ \"scam\"", "Pịa mgbasa ozi ahụ ma kwụọ ụgwọ ozugbo", "Zigara onye na-ere ya kaadị onyinye", "Kesaa nọmba kaadị gị n'ozi"], answer: 0, why: "Ịga n'ụlọ ahịa ahụ n'onwe gị na ịchọ mkpesa na-enyere gị aka ịmata ụlọ ahịa adịgboroja." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkwụ ụgwọ n'ụzọ ka nchekwa",
          minutes: 5,
          goal: "Họrọ ụzọ ịkwụ ụgwọ na-echebe gị ma ọ bụrụ na ihe agaghị nke ọma.",
          text: [
            "Ụzọ i si akwụ ụgwọ dị mkpa. FTC na-ekwu na ịkwụ ụgwọ site na kaadị kredit na-enye gị nchekwa siri ike: ị nwere ike ime mkpesa (dispute) maka ego e wepụrụ n'ụzọ na-ezighi ezi, maka ihe na-erughị gị aka ma ọ bụ nke na-adịghị ka e kwuru. Mee ngwa ngwa ma gwa ụlọ ọrụ kaadị gị ozugbo ị hụrụ nsogbu.",
            "FTC na-adọ aka na ntị ka ị ghara ịkwụ onye na-ere ihe n'ịntanetị ụgwọ site na kaadị onyinye (gift card), wire transfer, app ịkwụ ụgwọ ma ọ bụ cryptocurrency. Ọ na-esi ike inwetaghachi ego ndị a, ọ bụ ya mere ndị aghụghọ ji arịọ ha.",
            "Dee ozi kaadị gị naanị na peeji ịkwụ ụgwọ nke ụlọ ahịa i lelere, ọ dịghị mgbe n'email, ozi ederede ma ọ bụ chat. Na kọmputa a na-ekekọrịta ma ọ bụ nke ọba akwụkwọ, ekwela ka browser chekwaa kaadị gị."
          ],
          steps: ["Jiri kaadị kredit mgbe ị nwere ike, ma ọ bụ ụzọ ịkwụ ụgwọ a tụkwasịrị obi nke ụlọ ahịa i lelere.", "Akwụla onye na-ere ihe ụgwọ site na kaadị onyinye, wire transfer, app ịkwụ ụgwọ ma ọ bụ cryptocurrency.", "Dee ozi kaadị naanị na peeji ịkwụ ụgwọ nke ụlọ ahịa i lelere.", "Echekwala kaadị gị na kọmputa a na-ekekọrịta.", "Na-elele akwụkwọ ndekọ ego gị ma kọọ nsogbu ngwa ngwa."],
          words: [["Kaadị kredit", "kaadị na-agbazinye ego ị ga-akwụghachi ma emechaa; o nwere nchekwa siri ike maka mkpesa."], ["Mkpesa ụgwọ (dispute)", "ịgwa ụlọ ọrụ kaadị gị na ego e wepụrụ ezighi ezi ka o nyochaa ya."], ["Wire transfer", "iziga ego ozugbo site n'otu akaụntụ gaa n'akaụntụ ọzọ; ọ na-esi ike nke ukwuu inwetaghachi ya."]],
          slides: [
            { title: "Ụzọ i si akwụ ụgwọ dị mkpa", bullets: ["Kaadị kredit: nchekwa siri ike maka mkpesa", "Gwa ụlọ ọrụ kaadị gị ngwa ngwa"] },
            { title: "Akwụla onye na-ere ihe ụgwọ site na", bullets: ["Kaadị onyinye", "Wire transfer", "App ịkwụ ụgwọ", "Cryptocurrency"] },
            { title: "Ozi kaadị", bullets: ["Naanị na peeji ịkwụ ụgwọ nke ụlọ ahịa i lelere", "Ọ dịghị mgbe n'email, ozi ederede ma ọ bụ chat", "Echekwala ha na kọmputa a na-ekekọrịta"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }],
          tryIt: "Lee kaadị na ụzọ ịkwụ ụgwọ ị nwere. Dee nke ị ga-eji zụta ihe n'ịntanetị na ihe mere, na ụzọ ndị ị ga-ajụ ma ọ bụrụ na onye na-ere ihe arịọ ha.",
          youCanNow: "ịhọrọ ụzọ ịkwụ ụgwọ na-echebe gị ma jụ ndị ndị aghụghọ na-arịọ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ime mkpesa (dispute) maka ego e wepụrụ?", options: ["Ịkwụ ya ugboro abụọ", "Ịrịọ ụlọ ọrụ kaadị gị ka ha dozie ego e wepụrụ n'ụzọ na-ezighi ezi", "Iziga onye na-ere ihe kaadị onyinye", "Ihichapụ akaụntụ gị"], answer: 1, why: "Site na kaadị kredit, ị nwere ike ime mkpesa maka ihe ezighi ezi ma ọ bụ nke na-erughị gị aka." },
            { objective: "O2", q: "Onye na-ere ihe n'ịntanetị kwuru na ọ na-anabata naanị wire transfer. Gịnị ka ị ga-eme?", options: ["Zipu wire transfer ahụ", "Kwụọ ọkara site na wire na ọkara site na kaadị onyinye", "Azụtala; FTC na-adọ aka na ntị ka ị ghara ịkwụ ndị na-ere ihe n'ịntanetị ụgwọ otu a", "Kwụọ site na cryptocurrency kama"], answer: 2, why: "Ọ na-esi ike inwetaghachi wire transfer, ọ bụ ya mere ndị aghụghọ ji arịọ ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịchọpụta ebe ngwongwo ruru, ịnata ya na ịlaghachi ya",
          minutes: 4,
          goal: "Debe ndekọ ihe ị zụtara, chọpụta ebe ngwongwo ruru, ma malite ịlaghachi ya.",
          text: [
            "Mgbe ị zụtachara, ụlọ ahịa ahụ na-ezitere gị nkwenye ihe ị zụtara (order confirmation) site n'email. Debe ya. FTC na-atụ aro ka ị debe ozi ihe ị zụtara, iwu ịlaghachi ihe, nkwa onye na-ere ihe gbasara iziga ya, ozi gị na onye na-ere ihe, na akwụkwọ ndekọ ego gị.",
            "Chọpụta ebe ngwongwo gị ruru site n'akaụntụ gị na weebụsaịtị ma ọ bụ app ụlọ ahịa ahụ, ọ bụghị site na njikọ dị n'ozi ederede na-atụghị anya. Ozi ụgha na-ekwu \"nsogbu n'iziga ngwongwo\" bụ aghụghọ a na-ahụkarị.",
            "Iji laghachi ihe, banye n'akaụntụ gị, chọta ihe ahụ ị zụtara, ma họrọ ịlaghachi (return). Soro nzọụkwụ ndị ahụ, debe akwụkwọ nnata ebe i nyefere ya, ma lezie anya maka ego a ga-akwụghachi gị n'akwụkwọ ndekọ ego gị. Ọ bụrụ na onye na-ere ihe ekweghị idozi nsogbu, ị nwere ike ịkọrọ FTC ya na reportfraud.ftc.gov."
          ],
          steps: ["Chekwaa email nkwenye ihe ị zụtara.", "Chọpụta ebe ngwongwo ruru site n'akaụntụ gị na saịtị ma ọ bụ app ụlọ ahịa ahụ.", "Leghara ozi ederede na-atụghị anya gbasara iziga ngwongwo nwere njikọ anya.", "Iji laghachi ihe: banye, chọta ihe ahụ, họrọ ịlaghachi, soro nzọụkwụ ndị ahụ.", "Debe akwụkwọ nnata ebe i nyefere ya ma lelee ego a kwụghachiri gị."],
          words: [["Nkwenye ihe ị zụtara", "email na-egosi ihe ị zụtara na ego ị kwụrụ."], ["Ịchọpụta ebe ngwongwo ruru (tracking)", "isoro ebe ngwongwo gị dị ka ọ na-abịakwute gị."], ["Ego a kwụghachiri (refund)", "ego e nyeghachiri gị."]],
          slides: [
            { title: "Debe ndekọ", bullets: ["Nkwenye ihe ị zụtara", "Iwu ịlaghachi ihe na nkwa iziga ya", "Ozi gị na akwụkwọ ndekọ ego gị"] },
            { title: "Chọpụta ebe ọ ruru n'enweghị nsogbu", bullets: ["Jiri akaụntụ gị na saịtị ma ọ bụ app ụlọ ahịa ahụ", "Leghara ozi ederede na-atụghị anya gbasara iziga ngwongwo nwere njikọ anya"] },
            { title: "Ịlaghachi ihe", bullets: ["Banye, chọta ihe ahụ, họrọ ịlaghachi", "Debe akwụkwọ nnata ebe i nyefere ya", "Lezie anya maka ego a ga-akwụghachi gị"] }
          ],
          sources: [{ name: "FTC: Online shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Chọta email nkwenye ihe ị zụtara n'igbe ozi gị (ma ọ bụ nke si n'ihe ị zụtara na mbụ) ma mepụta folda email ma ọ bụ label akpọrọ \"Orders\" ka ị debe ya n'ime ya. Ọ bụrụ na i nwere ihe ị zụtara na-abịabeghị, chọpụta ebe ọ ruru site n'app ma ọ bụ saịtị ụlọ ahịa ahụ n'onwe ya.",
          youCanNow: "idebe ndekọ ihe ị zụtara, ịchọpụta ebe ngwongwo ruru n'enweghị nsogbu, ma malite ịlaghachi ihe.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ nkwenye ihe ị zụtara?", options: ["Ozi ederede na-arịọ gị ka ị kwụọ ụgwọ", "Mgbasa ozi maka ihe ọhụrụ", "Email ụlọ ahịa na-ezitere gị mgbe ị zụtachara", "Akwụkwọ ndekọ ego ụlọ akụ"], answer: 2, why: "Ụlọ ahịa na-ezite nkwenye ihe ị zụtara site n'email; debe ya na ndekọ gị." },
            { objective: "O3", q: "I nyefere ihe ị na-alaghachi n'ọfịs nzipu ozi (post office). Gịnị ka ị ga-eme ọzọ?", options: ["Tụfuo akwụkwọ nnata ahụ", "Zụta ihe ahụ ọzọ", "Hichapụ app ụlọ ahịa ahụ", "Debe akwụkwọ nnata ahụ ma lezie anya maka ego a ga-akwụghachi gị n'akwụkwọ ndekọ ego gị"], answer: 3, why: "Akwụkwọ nnata na-egosi na i zighachiri ya, akwụkwọ ndekọ ego na-egosikwa ego a kwụghachiri gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịzụ ahịa n'ịntanetị n'enweghị nsogbu",
        questions: [
          { objective: "O1", q: "Mgbasa ozi na-egosi TV aha ama ama na otu ụzọ n'ụzọ iri nke ọnụahịa ya. Gịnị ka i kwesịrị ibu ụzọ mee?", options: ["Zụta ya tupu ọ gwụ", "Lelee ụlọ ahịa ahụ: chọọ aha ya na \"complaint\" ma ọ bụ \"scam\"", "Kwụọ ụgwọ site na kaadị onyinye", "Zipu nọmba kaadị gị site n'ozi ederede"], answer: 1, why: "Ọnụahịa dị ọnụ ala nke ukwuu ka ọ bụrụ eziokwu bụ ihe ịdọ aka na ntị; buru ụzọ lelee." },
          { objective: "O1", q: "Gịnị ka FTC na-ekwu gbasara https na akara mkpọchi?", options: ["Ha na-egosi na ụlọ ahịa na-eme eziokwu", "Ha dị naanị n'ụlọ ahịa adịgboroja", "Ha pụtara iziga ngwongwo n'efu", "Ha na-enyere aka, ma ndị aghụghọ nwekwara ike iji ha"], answer: 3, why: "Nzuzo njikọ (encryption) na-echebe njikọ ahụ, ọ bụghị eziokwu onye na-ere ihe." },
          { objective: "O2", q: "Kedu ụzọ ịkwụ ụgwọ na-enye gị nchekwa kachasị ike iji mee mkpesa maka ego e wepụrụ n'ụzọ na-ezighi ezi?", options: ["Kaadị kredit", "Kaadị onyinye", "Wire transfer", "Cryptocurrency"], answer: 0, why: "FTC na-ekwu na kaadị kredit na-enye nchekwa kachasị ike maka mkpesa." },
          { objective: "O2", q: "Onye na-ere ihe rịọrọ ka i jiri kaadị onyinye kwụọ ụgwọ. Gịnị ka ị na-eme?", options: ["Zụta kaadị onyinye ahụ", "Kwụọ ọkara site na kaadị onyinye", "Jụ; ọ bụ ihe ịrịba ama nke aghụghọ", "Zipu foto kaadị ndị ahụ"], answer: 2, why: "FTC na-adọ aka na ntị ka ị ghara ịkwụ ndị na-ere ihe n'ịntanetị ụgwọ site na kaadị onyinye." },
          { objective: "O3", q: "I nwetara ozi ederede gbasara \"nsogbu n'iziga ngwongwo\" nwere njikọ. Gịnị bụ nzọụkwụ ka nchekwa?", options: ["Pịa njikọ ahụ", "Zaa ya na adreesị gị", "Lelee ihe ị zụtara n'app ma ọ bụ weebụsaịtị ụlọ ahịa ahụ n'onwe ya", "Kwụọ obere ụgwọ ahụ"], answer: 2, why: "Chọpụta ebe ngwongwo ruru site n'akaụntụ gị, ọ bụghị site na njikọ na-atụghị anya." }
        ]
      }
    },
    {
      name: "Isi 2: Iji ụlọ akụ n'ịntanetị n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji app ma ọ bụ weebụsaịtị ụlọ akụ gị n'enweghị nsogbu",
          minutes: 5,
          goal: "Banye n'app ma ọ bụ weebụsaịtị ụlọ akụ gị n'onwe ya ma lee ego dị n'akaụntụ gị na ego batara ma pụọ.",
          text: [
            "Iji ụlọ akụ n'ịntanetị na-ekwe ka ị hụ ego dị n'akaụntụ gị, lelee ego batara na nke pụrụ, kwụọ ụgwọ, ma bufee ego n'etiti akaụntụ nke gị, site n'ekwentị ma ọ bụ kọmputa gị.",
            "Nweta app ụlọ akụ ahụ naanị site n'ụlọ ahịa app gọọmentị ekwentị ahụ, ma lelee na onye mere ya bụ ezigbo ụlọ akụ gị. Ma ọ bụ dee adreesị weebụsaịtị ụlọ akụ ahụ n'onwe gị; ị ga-ahụ ya na kaadị gị, n'akwụkwọ ndekọ ego gị, ma ọ bụ site n'ịjụ n'alaka ụlọ akụ. Ebanyela site na njikọ dị n'email ma ọ bụ ozi ederede.",
            "Jiri okwuntughe siri ike nke ị na-ejighị n'ebe ọzọ ma gbanye nkwenye nzọụkwụ abụọ. Ejila ụlọ akụ na Wi-Fi ọha n'enweghị data ekwentị gị, ma pụọ (sign out) mgbe niile i mechara, karịsịa na kọmputa a na-ekekọrịta."
          ],
          steps: ["Wụnye app ụlọ akụ n'onwe ya ma ọ bụ dee adreesị ụlọ akụ ahụ n'onwe gị.", "Banye site n'okwuntughe siri ike nke dị iche.", "Gbanye nkwenye nzọụkwụ abụọ na ntọala nchekwa.", "Lee ego dị n'akaụntụ gị na ego batara ma pụọ n'oge na-adịbeghị anya.", "Pụọ (sign out) mgbe i mechara."],
          words: [["Ego dị n'akaụntụ (balance)", "ego ole dị n'akaụntụ gị ugbu a."], ["Azụmahịa ego (transaction)", "otu ego batara ma ọ bụ pụrụ n'akaụntụ gị."], ["Nkwenye nzọụkwụ abụọ", "nlele nke abụọ, nke na-abụkarị koodu e zitere n'ekwentị gị, mgbe ị na-abanye."]],
          slides: [
            { title: "Ihe ụlọ akụ n'ịntanetị na-eme", bullets: ["Hụ ego dị n'akaụntụ gị na ego batara ma pụọ", "Kwụọ ụgwọ", "Bufee ego n'etiti akaụntụ nke gị"] },
            { title: "Ruo ebe ahụ n'enweghị nsogbu", bullets: ["App ụlọ akụ n'onwe ya site n'ụlọ ahịa app", "Ma ọ bụ dee adreesị ụlọ akụ ahụ n'onwe gị", "Ebanyela site na njikọ dị n'email ma ọ bụ ozi ederede"] },
            { title: "Nọrọ na nchekwa", bullets: ["Okwuntughe siri ike nke dị iche", "Gbanye nkwenye nzọụkwụ abụọ", "Pụọ mgbe i mechara"] }
          ],
          tryIt: "Meghee app ma ọ bụ weebụsaịtị ụlọ akụ gị n'onwe ya (dee adreesị ahụ n'onwe gị). Banye, lee ego dị n'akaụntụ gị na azụmahịa ego ise ikpeazụ, wee pụọ.",
          youCanNow: "ịbanye n'ụlọ akụ gị n'enweghị nsogbu ma lee ego dị n'akaụntụ gị na ego batara ma pụọ.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka ị ga-ahụ ezigbo adreesị weebụsaịtị ụlọ akụ gị?", options: ["Na kaadị gị, n'akwụkwọ ndekọ ego gị ma ọ bụ site n'ịjụ n'alaka ụlọ akụ", "N'ozi ederede na-ekwu na akaụntụ gị kpọchiri", "Na mgbasa ozi na soshal midia", "N'email si n'aka onye ị na-amaghị"], answer: 0, why: "Kaadị gị, akwụkwọ ndekọ ego gị na alaka ụlọ akụ na-enye ezigbo adreesị ụlọ akụ ahụ." },
            { objective: "O4", q: "I lere ego dị n'akaụntụ gị na kọmputa ọba akwụkwọ. Gịnị ka ị ga-eme tupu ịpụọ?", options: ["Hapụ peeji ahụ ka ọ meghee", "Pụọ (sign out)", "Chekwaa okwuntughe gị na browser", "Dee okwuntughe gị na mpempe akwụkwọ"], answer: 1, why: "Pụọ mgbe niile i mechara iji ụlọ akụ, karịsịa na kọmputa a na-ekekọrịta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịmata ego e wepụrụ n'ụzọ ezighi ezi na ịmara na ego gị nwere nchekwa",
          minutes: 5,
          goal: "Nyochaa ego batara ma pụọ n'akaụntụ gị ma mara ihe ị ga-eme maka ego e wepụrụ nke ị na-emeghị.",
          text: [
            "Lelee ego batara ma pụọ n'akaụntụ gị opekata mpe otu ugboro n'izu. Chọọ ego e wepụrụ nke ị na-amaghị, ọbụlagodi obere ndị; ndị ohi na-ebu ụzọ nwalee kaadị mgbe ụfọdụ site n'obere ego. Ọtụtụ ụlọ akụ na-ekwe ka ị gbanye ọkwa (alert) na-ezitere gị ozi ederede ma ọ bụ email mgbe ego pụrụ n'akaụntụ gị.",
            "Ọ bụrụ na ị hụ ego e wepụrụ nke ị na-emeghị, kpọọ nọmba dị n'azụ kaadị gị ma ọ bụ n'app ụlọ akụ n'onwe ya, ma mee ngwa ngwa. Ọtụtụ kaadị na app na-ekwe ka ị kpọchie ma ọ bụ kwụsịtụ kaadị ahụ ozugbo.",
            "Ego dị n'ụlọ akụ nke FDIC na-echebe nwere nchekwa ruo $250,000 maka onye ọ bụla debere ego, n'ụlọ akụ ọ bụla, maka ụdị nwe akaụntụ ọ bụla. Credit union ndị NCUA na-echebe nwekwara otu oke nkịtị nke $250,000. FDIC na-ekwu na crypto, stocks, bonds na mutual funds enweghị nchekwa a, ọbụlagodi mgbe ụlọ akụ rere ha."
          ],
          steps: ["Nyochaa ego batara ma pụọ kwa izu.", "Gbanye ọkwa akaụntụ n'app.", "Ọ bụrụ na ego e wepụrụ abụghị nke gị: kpọchie kaadị ahụ n'app ma ọ bụrụ na ị nwere ike.", "Kpọọ nọmba dị n'azụ kaadị gị.", "Lezie anya maka ihe ụlọ akụ ga-eme ọzọ ma lelee akwụkwọ ndekọ ego gị ọzọ."],
          words: [["Ọkwa (alert)", "ozi ederede ma ọ bụ email ụlọ akụ gị na-ezite mgbe ihe mere n'akaụntụ gị."], ["FDIC", "Federal Deposit Insurance Corporation, nke na-echebe ego dị n'ụlọ akụ US."], ["NCUA", "National Credit Union Administration, nke na-echebe ego dị na credit union US."]],
          slides: [
            { title: "Lelee kwa izu", bullets: ["Chọọ ego e wepụrụ nke ị na-amaghị", "Ọbụlagodi obere ndị", "Gbanye ọkwa akaụntụ"] },
            { title: "Ego e wepụrụ abụghị nke gị", bullets: ["Kpọchie kaadị ahụ n'app", "Kpọọ nọmba dị n'azụ kaadị gị", "Mee ngwa ngwa"] },
            { title: "Ego i debere nwere nchekwa", bullets: ["Ụlọ akụ FDIC: $250,000 maka onye debere ego, n'ụlọ akụ ọ bụla, maka ụdị nwe akaụntụ ọ bụla", "Credit union NCUA: oke nkịtị $250,000"] },
            { title: "Enweghị nchekwa", bullets: ["Crypto, stocks, bonds na mutual funds", "Ọbụlagodi mgbe ụlọ akụ na-ere ha"] }
          ],
          sources: [{ name: "FDIC: Understanding deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }, { name: "NCUA: Share insurance coverage", url: "https://ncua.gov/consumers/share-insurance-coverage" }],
          tryIt: "N'app ụlọ akụ gị, chọta ebe a na-edozi ọkwa ma gbanye ọkwa maka ịkwụ ụgwọ. Mgbe ahụ chọta bọtịnụ na-akpọchi ma ọ bụ na-akwụsịtụ kaadị gị (apịla ya ma ọ bụrụ na ị chọghị ya).",
          youCanNow: "ilele ego batara ma pụọ n'akaụntụ gị, ịgbanye ọkwa, na ime ngwa ngwa maka ego e wepụrụ nke ị na-emeghị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere i ji kwesị ilele obere ego e wepụrụ nke ị na-amaghị?", options: ["Obere ego e wepụrụ na-adị mma mgbe niile", "Ụlọ akụ anaghị emehie mgbe ọ bụla", "Obere ego e wepụrụ bụ n'efu", "Ndị ohi na-ebu ụzọ nwalee kaadị mgbe ụfọdụ site n'obere ego"], answer: 3, why: "Obere ego e wepụrụ nke a na-amaghị nwere ike ịbụ nnwale tupu nnukwu ndị abịa." },
            { objective: "O5", q: "Ị chọrọ ịmata ozugbo mgbe ego pụrụ n'akaụntụ gị. Gịnị ka ị ga-eme?", options: ["Lelee otu ugboro n'afọ", "Rịọ onye ọbịa ka o lezie ya anya", "Gbanye ọkwa n'app ụlọ akụ gị ka o zitere gị ozi ederede ma ọ bụ email", "Mechie akaụntụ gị"], answer: 2, why: "Ọtụtụ ụlọ akụ na-enye ọkwa mgbe ego pụrụ n'akaụntụ gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Aghụghọ ego: oku ụlọ akụ ụgha na aghụghọ app ịkwụ ụgwọ",
          minutes: 5,
          goal: "Mata aghụghọ ego ma kwụsị ya.",
          text: [
            "Aghụghọ a na-ahụkarị: mmadụ na-akpọ oku, na-ezite ozi ederede ma ọ bụ email, na-eme ka ọ bụ ndị otu na-alụ ọgụ megide aghụghọ n'ụlọ akụ gị. Ha na-ekwu na akaụntụ gị nọ n'ihe egwu, ma na-arịọ okwuntughe gị, koodu e zitere n'ekwentị gị, ma ọ bụ ka i bufee ego gaa n'\"akaụntụ nchekwa\". Ezigbo ụlọ akụ agaghị arịọ ihe ndị a mgbe ọ bụla.",
            "FTC depụtara ihe ịrịba ama anọ nke aghụghọ: ha na-eme ka ha bụ onye ị tụkwasịrị obi, e nwere nsogbu ma ọ bụ onyinye, ha na-arụgide gị ka i mee ihe ugbu a, ha chọkwara ka i jiri ụzọ a na-ejighị eme ihe kwụọ ụgwọ, dị ka kaadị onyinye, wire transfer, app ịkwụ ụgwọ ma ọ bụ cryptocurrency.",
            "Ọ bụrụ na obi abụọ dị gị, kwụsị oku ahụ. Kpọọ nọmba dị n'azụ kaadị gị. Were ego e zipụrụ site n'app ịkwụ ụgwọ dị ka ego nkịtị (cash): zigara ya naanị ndị ị ma. Na United States, kọọ aghụghọ na reportfraud.ftc.gov."
          ],
          steps: ["Ekesala okwuntughe gị ma ọ bụ koodu e zitere n'ekwentị gị mgbe ọ bụla.", "Ebufela ego gaa n'\"akaụntụ nchekwa\" n'ihi na onye kpọrọ oku kwuru ya.", "Kwụsị oku ahụ ma kpọọ nọmba dị n'azụ kaadị gị.", "Zipu ego app ịkwụ ụgwọ naanị nye ndị ị ma.", "Kọọ aghụghọ na reportfraud.ftc.gov."],
          words: [["Ime onwe onye ọzọ", "ime ka ị bụ onye ọzọ, dị ka ụlọ akụ gị ma ọ bụ ọfịs gọọmentị."], ["App ịkwụ ụgwọ", "app na-eziga ego site n'otu onye gaa n'onye ọzọ, dị ka Venmo, Cash App ma ọ bụ Zelle."]],
          slides: [
            { title: "Oku ụlọ akụ ụgha", bullets: ["\"Akaụntụ gị nọ n'ihe egwu\"", "Ha na-arịọ okwuntughe gị ma ọ bụ koodu", "Ma ọ bụ ka i bufee ego gaa n'\"akaụntụ nchekwa\""] },
            { title: "Ihe ịrịba ama aghụghọ FTC", bullets: ["Na-eme ka ọ bụ onye ị tụkwasịrị obi", "Nsogbu ma ọ bụ onyinye", "Mrụgide ka i mee ihe ugbu a", "Ụzọ ịkwụ ụgwọ a na-ejighị eme ihe: kaadị onyinye, wire, app, crypto"] },
            { title: "Ihe ị ga-eme", bullets: ["Kwụsị oku ahụ", "Kpọọ nọmba dị n'azụ kaadị gị", "App ịkwụ ụgwọ: naanị ndị ị ma"] },
            { title: "Kọọ ya", bullets: ["reportfraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }, { name: "FTC: Report fraud", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Omume maka ọrụ ikpeazụ: dee nọmba ekwentị dị n'azụ kaadị ụlọ akụ gị n'ebe nchekwa n'ụlọ. Mgbe ahụ mee ọrụ ikpeazụ: lelee ụlọ ahịa, họrọ ụzọ ịkwụ ụgwọ gị, ma nyochaa ego batara ma pụọ n'akaụntụ gị.",
          youCanNow: "ịmata oku ụlọ akụ ụgha ma ọ bụ aghụghọ app ịkwụ ụgwọ, kwụsị ya, ma kọọ ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ezigbo ụlọ akụ agaghị arịọ gị mgbe ọ bụla?", options: ["Ka ị bịa n'alaka ụlọ akụ", "Okwuntughe gị ma ọ bụ koodu e zitere n'ekwentị gị", "Ka i lelee akwụkwọ ndekọ ego gị", "Ka ị gbanye nkwenye nzọụkwụ abụọ"], answer: 1, why: "Ezigbo ụlọ akụ agaghị arịọ okwuntughe gị, koodu, ma ọ bụ ka i bufee ego gaa n'\"akaụntụ nchekwa\"." },
            { objective: "O6", q: "Ozi ederede si n'\"ụlọ akụ gị\" kwuru na akaụntụ gị nọ n'ihe egwu, ka ị kpọọ nọmba dị n'ozi ahụ. Gịnị ka ị ga-eme?", options: ["Leghara nọmba dị n'ozi ahụ anya ma kpọọ nọmba dị n'azụ kaadị gị", "Kpọọ nọmba dị n'ozi ahụ", "Zaa ya na okwuntughe gị", "Bufee ego gị gaa n'akaụntụ ha nyere gị"], answer: 0, why: "Ịkpọ nọmba dị na kaadị gị na-eru ezigbo ụlọ akụ gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji ụlọ akụ n'ịntanetị n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Gịnị bụ ụzọ ka nchekwa isi ruo weebụsaịtị ụlọ akụ gị?", options: ["Dee adreesị ahụ n'onwe gị ma ọ bụ jiri app ya n'onwe ya", "Pịa njikọ dị n'ozi ederede", "Chọọ ma pịa mgbasa ozi mbụ", "Jiri njikọ onye kpọrọ oku nyere gị"], answer: 0, why: "Ide adreesị ahụ ma ọ bụ iji app n'onwe ya na-ezere saịtị adịgboroja." },
          { objective: "O5", q: "Ị hụrụ obere ego e wepụrụ nke ị na-amaghị. Gịnị ka ị na-eme?", options: ["Leghara ya anya n'ihi na ọ dị obere", "Dee banyere ya n'ịntanetị", "Chere otu afọ", "Kpọchie kaadị ahụ ma kpọọ nọmba dị n'azụ ya"], answer: 3, why: "Ndị ohi na-ejikarị obere ego anwale kaadị; mee ngwa ngwa." },
          { objective: "O5", q: "Gịnị bụ ego nchekwa FDIC nkịtị?", options: ["$1,000 maka otu onye", "$250,000 maka onye debere ego, n'ụlọ akụ ọ bụla e chebere, maka ụdị nwe akaụntụ ọ bụla", "Enweghị oke", "Ọ dịghị; ụlọ akụ enweghị nchekwa"], answer: 1, why: "FDIC na-echebe ruo $250,000 maka onye debere ego, n'ụlọ akụ ọ bụla, maka ụdị nwe akaụntụ ọ bụla." },
          { objective: "O6", q: "Onye kpọrọ oku si n'\"ụlọ akụ gị\" rịọrọ koodu e zitere n'ekwentị gị ugbu a. Gịnị ka ị na-eme?", options: ["Gụọrọ ha ya", "Kwụsị oku ahụ ma kpọọ nọmba dị na kaadị gị", "Nye ọkara ya", "Zipu ya site n'ozi ederede"], answer: 1, why: "Ezigbo ụlọ akụ anaghị arịọ koodu ahụ mgbe ọ bụla." },
          { objective: "O5", q: "Kedu nke FDIC ANAGHỊ echebe?", options: ["Akaụntụ checking n'ụlọ akụ e chebere", "Akaụntụ nchekwa ego (savings) n'ụlọ akụ e chebere", "Certificate of deposit n'ụlọ akụ e chebere", "Crypto"], answer: 3, why: "FDIC na-ekwu na crypto enweghị nchekwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịzụ Ahịa na Iji Ụlọ Akụ n'Ịntanetị n'Enweghị Nsogbu",
    questions: [
      { objective: "O1", q: "Ụzọ ka nchekwa isi ruo ụlọ ahịa n'ịntanetị bụ:", options: ["Ide adreesị ya n'onwe gị ma ọ bụ iji app ya n'onwe ya", "Ịpị mgbasa ozi na soshal midia", "Iji njikọ si n'ozi ederede onye ọbịa", "Ịgbanye QR code ọ bụla"], answer: 0, why: "Nke a na-ezere saịtị na-eṅomi ndị ọzọ." },
      { objective: "O1", q: "FTC na-atụ aro ka ị chọọ aha ụlọ ahịa ya na:", options: ["\"free\"", "\"coupon\"", "\"complaint\" ma ọ bụ \"scam\"", "\"cheap\""], answer: 2, why: "Ọ na-egosi ihe ọjọọ ndị ọzọ zụtara ihe hụrụ." },
      { objective: "O1", q: "E kwesịrị ịgụ nyocha:", options: ["Naanị kpakpando", "Ọ bụghị ma ọlị", "Nke ọma, n'ihi na ụfọdụ bụ ụgha", "Naanị nke mbụ"], answer: 2, why: "FTC na-adọ aka na ntị na ụfọdụ nyocha bụ ụgha." },
      { objective: "O1", q: "Tupu ịzụta, lelee iwu ịlaghachi ihe maka:", options: ["Ụbọchị ole ị nwere na onye na-akwụ ụgwọ iziga ya azụ", "Aha onye nwe ya", "Akara (logo) ụlọ ahịa ahụ", "Agba weebụsaịtị ahụ"], answer: 0, why: "Iwu ịlaghachi ihe dị iche iche ma dị mkpa ma ọ bụrụ na ihe agaghị nke ọma." },
      { objective: "O1", q: "Ọnụahịa pụrụ iche n'ihe aha ama ama dị oke ọnụ, nke dị ọnụ ala nke ukwuu ka ọ bụrụ eziokwu, nwere ike ịbụ:", options: ["Onyinye ụlọ akụ", "Ezigbo mgbe niile", "Onyinye gọọmentị", "Ihe adịgboroja ma ọ bụ ihe e zuru ezu"], answer: 3, why: "FTC na-adọ aka na ntị na ọnụahịa ndị dị otu a nwere ike ịbụ ihe adịgboroja ma ọ bụ ihe e zuru ezu." },
      { objective: "O2", q: "Kedu ụzọ ịkwụ ụgwọ FTC kwuru na-enye nchekwa kachasị ike maka mkpesa?", options: ["Wire transfer", "Kaadị kredit", "Kaadị onyinye", "Cryptocurrency"], answer: 1, why: "Kaadị kredit na-ekwe ka i mee mkpesa maka ego e wepụrụ n'ụzọ na-ezighi ezi." },
      { objective: "O2", q: "Ebee ka i kwesịrị ide nọmba kaadị gị?", options: ["N'email ị na-aza", "Na peeji ịkwụ ụgwọ nke ụlọ ahịa i lelere", "N'ozi ederede", "Na chat soshal midia"], answer: 1, why: "Naanị na peeji ịkwụ ụgwọ nke ụlọ ahịa i lelere." },
      { objective: "O2", q: "Na kọmputa ọba akwụkwọ, browser na-ajụ ma ọ ga-echekwa kaadị gị. Ị:", options: ["Na-ekwu ee", "Na-echekwa ya ugboro abụọ", "Na-ede ya na mpempe akwụkwọ na-arapara arapara", "Na-ekwu mba"], answer: 3, why: "Echekwala ozi kaadị na kọmputa a na-ekekọrịta mgbe ọ bụla." },
      { objective: "O3", q: "Kedu ndekọ i kwesịrị idebe mgbe ị zụtachara ihe n'ịntanetị?", options: ["Nkwenye ihe ị zụtara", "Ọ dịghị ihe", "Naanị igbe ya", "Mgbasa ozi ị hụrụ"], answer: 0, why: "Ọ na-egosi ihe ị zụtara na ego ị kwụrụ." },
      { objective: "O3", q: "Ozi ederede kwuru na ngwongwo gị kwụsịrị n'ụzọ, ma rịọ ka i jiri njikọ kwụọ obere ụgwọ. I kwesịrị:", options: ["Ịkwụ ụgwọ ahụ", "Ịpị ya ka ị hụ", "Ilele ihe ị zụtara n'app ma ọ bụ saịtị ụlọ ahịa ahụ n'onwe ya", "Ịza ya na nọmba kaadị gị"], answer: 2, why: "Ozi ụgha gbasara iziga ngwongwo bụ aghụghọ a na-ahụkarị." },
      { objective: "O3", q: "Ọ bụrụ na onye na-ere ihe ekweghị idozi nsogbu, na US ị nwere ike ịkọ ya na:", options: ["Otu soshal midia", "Mgbasa ozi onye na-ere ihe", "reportfraud.ftc.gov", "Ọ dịghị onye"], answer: 2, why: "FTC na-anata akụkọ aghụghọ n'ebe ahụ." },
      { objective: "O4", q: "\"Ego dị n'akaụntụ\" (balance) bụ:", options: ["Ego ole dị n'akaụntụ gị ugbu a", "Ịkwụ ụgwọ", "Okwuntughe", "Alaka ụlọ akụ"], answer: 0, why: "Ego dị n'akaụntụ na-egosi ihe ị nwere ugbu a." },
      { objective: "O4", q: "Mgbe i mechara iji ụlọ akụ n'ịntanetị, i kwesịrị:", options: ["Ịhapụ ya ka ọ meghee", "Ichekwa okwuntughe gị na browser na kọmputa a na-ekekọrịta", "Ikesa ihuenyo ahụ", "Ịpụ (sign out)"], answer: 3, why: "Ịpụ na-egbochi onye ọzọ na-esote ịbanye." },
      { objective: "O4", q: "Nkwenye nzọụkwụ abụọ n'akaụntụ ụlọ akụ gị pụtara:", options: ["Okwuntughe abụọ e dere ede", "Nlele nke abụọ, dị ka koodu e zitere n'ekwentị gị", "Kaadị ụlọ akụ abụọ", "App na-aga nwayọọ"], answer: 1, why: "Ọ na-agbakwunye koodu onye ohi na-agaghị enwe." },
      { objective: "O5", q: "Ugboro ole ka ọ bụ amamihe ilele ego batara ma pụọ n'akaụntụ gị?", options: ["Otu ugboro n'afọ", "Opekata mpe otu ugboro n'izu", "Ọ dịghị mgbe", "Naanị mgbe ụlọ akụ kpọrọ oku"], answer: 1, why: "Nlele kwa izu na-ejide nsogbu ngwa ngwa." },
      { objective: "O5", q: "Ego e debere na credit union nwere nchekwa site n'aka:", options: ["FTC", "Ụlọ ahịa app", "Onye were gị n'ọrụ", "NCUA"], answer: 3, why: "NCUA na-echebe credit union gọọmentị etiti (federal) chebere." },
      { objective: "O6", q: "Onye kpọrọ oku kwuru na akaụntụ gị nọ n'ihe egwu, na ị ga-ebufe ego gaa n'\"akaụntụ nchekwa\". Nke a bụ:", options: ["Aghụghọ", "Ego a kwụghachiri", "Iwu ọhụrụ", "Nzọụkwụ ụlọ akụ nkịtị"], answer: 0, why: "Ezigbo ụlọ akụ anaghị arịọ nke a mgbe ọ bụla; ọ bụ aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "E kwesịrị iwere ego e zipụrụ site n'app ịkwụ ụgwọ dị ka:", options: ["Ego mbinye", "Kaadị kredit", "Ego nkịtị (cash): zigara naanị ndị ị ma", "Ego nchekwa nwere nchekwa"], answer: 2, why: "Ọ na-esi ike inwetaghachi ya, dị ka ego nkịtị." },
      { objective: "O6", q: "Kedu nke bụ otu n'ime ihe ịrịba ama aghụghọ anọ nke FTC?", options: ["Ekele nwere nkwanye ugwu", "Akwụkwọ ụgwọ ọkụ ma ọ bụ mmiri e zitere n'akwụkwọ ozi", "Mrụgide ka i mee ihe ugbu a", "Ịkwụ ụgwọ n'ihu ọnụ ụlọ ahịa"], answer: 2, why: "Ndị aghụghọ na-eme ka i mee ngwa ngwa ka ị ghara ịkwụsị lelee." },
      { objective: "O6", q: "Ọ bụrụ na obi abụọ dị gị gbasara oku si n'ụlọ akụ gị, nzọụkwụ kacha mma bụ:", options: ["Kwụsị oku ahụ ma kpọọ nọmba dị n'azụ kaadị gị", "Nye ha okwuntughe gị", "Gaa n'ihu na-ekwu okwu", "Zipu obere ego"], answer: 0, why: "Ịkpọ nọmba ị ma na-eru ezigbo ụlọ akụ." }
    ]
  },
  // ---- ADDIE: Ntụle ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 8, 9, 12, 14, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ilele ụlọ ahịa",
        objective: "O1",
        notYet: "E mere nlele na-erughị atọ, ma ọ bụ e si na mgbasa ozi ma ọ bụ njikọ ozi ederede ruo ụlọ ahịa ahụ.",
        meets: "E mere nlele atọ ahụ niile: ezigbo adreesị weebụsaịtị, nyocha na mkpesa, na iwu ịlaghachi ihe.",
        exceeds: "Na-edekwa ụbọchị ole ị nwere ịlaghachi ihe ahụ na onye na-akwụ ụgwọ iziga ya azụ."
      },
      {
        name: "Nhọrọ ụzọ ịkwụ ụgwọ",
        objective: "O2",
        notYet: "Ahọrọghị ụzọ ịkwụ ụgwọ ọ bụla, ma ọ bụ a họrọ kaadị onyinye, wire, app ịkwụ ụgwọ ma ọ bụ crypto.",
        meets: "Na-ahọrọ ụzọ na-echebe dị ka kaadị kredit ma kwuo ihe mere.",
        exceeds: "Na-ekwukwa na a gaghị echekwa kaadị ahụ na kọmputa a na-ekekọrịta."
      },
      {
        name: "Ilele akaụntụ ụlọ akụ",
        objective: "O4",
        notYet: "Banyere site na njikọ, ma ọ bụ enweghị ike ịchọta ego dị n'akaụntụ ma ọ bụ ego batara ma pụọ.",
        meets: "Na-abanye site n'app n'onwe ya ma ọ bụ adreesị e dere ede, ma chọta ego dị n'akaụntụ na ego batara ma pụọ n'oge na-adịbeghị anya.",
        exceeds: "Na-agbanyekwa nkwenye nzọụkwụ abụọ ma ọ bụ ọkwa, ma pụọ."
      },
      {
        name: "Atụmatụ maka ego e wepụrụ n'ụzọ ezighi ezi",
        objective: "O5",
        notYet: "Enweghị atụmatụ, ma ọ bụ atụmatụ ahụ na-eji nọmba si n'ozi ederede ma ọ bụ email.",
        meets: "Na-ekwu na ha ga-akpọchi kaadị ahụ ma kpọọ nọmba dị na kaadị ma ọ bụ n'app n'onwe ya ngwa ngwa.",
        exceeds: "Na-ekwukwa na ha ga-elele ego batara ma pụọ kwa izu ma debe ndekọ maka mkpesa."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha na-elele ego batara ma pụọ n'akaụntụ ụlọ akụ ha opekata mpe kwa izu mgbe ụbọchị 30 gachara (nyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha zere ụlọ ahịa adịgboroja, ozi ụgha gbasara iziga ngwongwo ma ọ bụ oku onye na-eme ka ọ bụ ụlọ akụ",
      "Ndị na-amụ ihe kwuru na ha hụrụ ma kọọ ego e wepụrụ nke ha na-emeghị"
    ]
  },
  // ---- ADDIE: Mmejuputa ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị, na njikọ nzuzo (Wi-Fi ụlọ ma ọ bụ data ekwentị n'onwe ya)",
      "App ụlọ akụ nke onye na-amụ ihe n'onwe ya ma ọ bụ adreesị weebụsaịtị e dere ede, ma ọ bụrụ na o nwere akaụntụ ụlọ akụ",
      "Ihe atụ a ga-elele, dị ka ihe ha chọrọ n'ọnwa a",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge dị mkpụmkpụ"
    ],
    facilitatorNotes: [
      "Ndị na-amụ ihe anaghị azụta ezigbo ihe na klas; ọrụ ịzụ ahịa na-akwụsị na peeji ịkwụ ụgwọ.",
      "Arịọla ndị na-amụ ihe ka ha gosi ego dị n'akaụntụ ha, nọmba kaadị ma ọ bụ okwuntughe; ka ha mee nzọụkwụ ụlọ akụ na nzuzo na ngwaọrụ nke ha.",
      "Zere iji ụlọ akụ na Wi-Fi ọha nke mmemme ahụ; rịọ ndị na-amụ ihe ka ha jiri data ekwentị nke ha ma ọ bụ mee nzọụkwụ ụlọ akụ n'ụlọ.",
      "Ndị na-amụ ihe na-enweghị akaụntụ ụlọ akụ nwere ike ime nkuzi ụlọ akụ site na ngosi (demo) ọha nke ụlọ akụ ma ọ bụ site n'ịkọwa nzọụkwụ ndị ahụ; duzie ha gaa na mmemme obodo na-enyere aka imeghe akaụntụ nwere nchekwa, dị ọnụ ala, ma ọ bụrụ na mmemme gị nwere otu.",
      "Mee omume oku ụlọ akụ ụgha dị ka egwuregwu (role play) ka ndị na-amụ ihe mụọ ịkwụsị oku ma kpọọ nọmba dị na kaadị ha."
    ]
  }
};

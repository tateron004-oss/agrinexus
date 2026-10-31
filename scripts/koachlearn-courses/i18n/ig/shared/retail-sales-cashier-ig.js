"use strict";

// Koach Learn course (Igbo translation of shared/retail-sales-cashier.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "retail-sales-cashier-ig",
  lang: "ig",
  translationOf: "retail-sales-cashier",
  category: "Workforce Development",
  name: "Nka Ire Ahịa na Ịnata Ego (Cashier) n'Ụlọ Ahịa",
  skills: "Ịgụ ahịa na rejista, Ịgụghachi chenji, Ilele ID na ego buru ibu, Ịkọwa ihe ọzọ n'enweghị mmanye, Ijikwa nlọghachi ngwa ahịa na ndị ahịa iwe were, Ịrụ oge ọrụ (shift)",
  outcome: "ịrụ ọrụ na rejista ụlọ ahịa site na mmeghe ruo na mmechi: ịgụ ahịa, ịgụghachi chenji ziri ezi, ilele ID na ego buru ibu tupu ire ahịa, ịkọwa otu ihe ga-enye aka, ijikwa nlọghachi ngwa ahịa ma ọ bụ onye ahịa iwe were dị ka iwu ụlọ ahịa si dị, na ịgbaso ndepụta ihe ime n'oge ọrụ.",
  about: [
    "Ọrụ cashier (onye na-anata ego) na ire ahịa n'ụlọ ahịa so n'ọrụ mbụ a na-ahụkarị na US, ụlọ ahịa na-ewekwa ndị na-enweghị ahụmahụ. Ọ bụkwa ezigbo nzọụkwụ mbụ maka ndị na-alọghachi n'ọrụ mgbe ha nọrọ ebe ọzọ. Ihe ọmụmụ a na-akwado gị maka ụbọchị mbụ.",
    "Ị ga-eme omume ịgụ ahịa site na ekele ruo na rịsịt, ịgụghachi chenji dị ka cashier a zụrụ azụ si eme, ilele ID maka ngwa ahịa nwere oke afọ, ịmata ego adịgboroja na aghụghọ gift card, ịkọwa ihe n'emeghị mmanye, na ijikwa nlọghachi ngwa ahịa na ndị ahịa iwe were dị ka iwu si dị.",
    "Ụlọ ahịa ọ bụla nwere rejista nke ya na iwu nke ya, ụlọ ahịa ahụ ga-azụkwa gị na ha. Ihe ọmụmụ a na-enye gị nka na-arụ ọrụ n'ụlọ ahịa ọ bụla, ka ị mụta ngwa ngwa ma mehie obere. Ọ na-egosikwa gị ezi asambodo ire ahịa ị nwere ike inweta.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" ị nwere ike ime n'ụlọ site na mkpụrụ ego (coins), ego akwụkwọ egwuregwu, ma ọ bụ mpempe akwụkwọ. E nwere ajụjụ abụọ dị ngwa mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee Kaadị Oge Ọrụ Cashier gị dị otu peeji: (1) nzọụkwụ mmeghe maka drọwa ego gị, (2) okwu ịgụ ahịa gị site na ekele ruo na rịsịt, ya na otu ahịrị ịkọwa ihe ọzọ, (3) ndekọ ahịa omume ise ebe ị gụghachiri chenji ziri ezi, (4) nzọụkwụ gị maka ahịa nwere oke afọ na maka ego buru ibu, (5) oge atọ ị ga-akpọ onye njikwa (manager), (6) nzọụkwụ mmechi, na (7) otu ahịrị na-akpọ aha asambodo ire ahịa ma ọ bụ ọrụ ị ga-achọ na ụbọchị ị ga-amalite.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na-achọ ọrụ mbụ, ndị okenye na-alọta site n'ụlọ mkpọrọ, na ndị okenye na-agbanwe ọrụ ma ọ bụ na-alọghachi n'ọrụ. Ọtụtụ arụbeghị ọrụ na rejista; ụfọdụ ejirila self-checkout zụọ ahịa mana ha eguzobeghị n'azụ tebụl ire ahịa.",
    startingPoint: "Ha nwere ike ịgbakọ na iwepụ ego site n'enyemaka, ma mara mkpụrụ ego na ego akwụkwọ. Ha enweghị ma ọ bụ nwere obere ahụmahụ na rejista POS, drọwa ego, ilele ID, iwu ụlọ ahịa ma ọ bụ ire ahịa.",
    gap: "Ụlọ ahịa na-ewe mmadụ maka àgwà ya ma zụọ ya n'ọrụ, mana cashier ọhụrụ na-adị nwayọ n'ịgụ chenji, na-enweghị obi ike n'ilele ID ma ọ bụ na-atụ egwu ndị ahịa iwe were bụ ndị ego na-efu na drọwa ha ma ọ bụ ndị na-atụfu ọrụ ngwa ngwa. Ndị na-amụ ihe chọrọ omume ndị bụ isi tupu oge ọrụ mbụ ha, ka ha gafee ajụjụ ọnụ ọrụ, gwụchaa ọzụzụ ngwa ngwa ma dowe ọrụ ahụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 7)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; omume na-eji mkpụrụ ego, ego egwuregwu ma ọ bụ mpempe akwụkwọ, achọghị rejista",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Ụlọ ahịa ọ bụla nwere rejista, iwu na usoro nke ya; ndị na-amụ ihe na-agbaso ọzụzụ ụlọ ahịa ha",
      "Iwu ahịa nwere oke afọ dị iche n'otu steeti; n'ụfọdụ steeti, a gaghị ekwe ka ndị ntorobịa ree mmanya ma ọ bụ ụtaba",
      "Nchekwa: agbasoghị onye ohi ụlọ ahịa ọsọ, egbochighị onye ohi; gbasoo iwu ụlọ ahịa ma kpọọ 911"
    ],
    prerequisites: "Ọ dịghị. Ndị na-amụ ihe chọrọ omume ọzọ na pasenti (percent) na ego nwere ike ịgụ \"Everyday Math for Work and Life\"; \"Customer Service Excellence\" na-aga n'ime miri banyere ije ozi ndị ahịa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ahịa omume nwere ọtụtụ ngwa ahịa, kupọn (coupon) na ịkwụ ụgwọ", action: "ịgụ ahịa site na ekele ruo na rịsịt n'usoro ziri ezi", standard: "na-enweta ngụkọta ziri ezi na ịsị daalụ oge niile" },
    { id: "O2", condition: "Mgbe e nyere gị ngụkọta na ego onye ahịa nyere gị", action: "ịgụghachi onye ahịa chenji site n'iji usoro ịgụ elu (count-up)", standard: "na-enye chenji ziri ezi n'ahịa omume 5 n'ime 5" },
    { id: "O3", condition: "Mgbe e nyere gị ngwa ahịa nwere oke afọ, ego buru ibu ma ọ bụ onye ahịa na-azụ ọtụtụ gift card", action: "ilele ID, ego ahụ ma ọ bụ ihe ịdọ aka ná ntị tupu imecha ahịa ahụ", standard: "na-agbaso iwu na iwu ụlọ ahịa, na ịkpọ onye njikwa mgbe ihe adịghị mma" },
    { id: "O4", condition: "Mgbe e nyere gị onye ahịa na-achọ ihe ọ ga-azụ", action: "ịjụ otu ajụjụ mepere emepe ma kọwaa otu ihe yitere ya na uru ya", standard: "n'enweghị mmanye, na ịnabata \"mba\" nwayọ" },
    { id: "O5", condition: "Mgbe e nyere gị nlọghachi ngwa ahịa, nsogbu ọnụahịa ma ọ bụ onye ahịa iwe were", action: "ijikwa nsogbu ahụ dị ka iwu ụlọ ahịa si dị ma kpọọ onye njikwa mgbe ọ karịrị ọrụ gị", standard: "na-anọ nwayọ ma na-echebe onwe gị na ndị ọzọ" },
    { id: "O6", condition: "Site n'iji ihe ị mụtara n'ihe ọmụmụ a", action: "ide ndepụta ihe ime dị otu peeji maka imeghe, ịrụ na imechi rejista", standard: "ebe nzọụkwụ ọ bụla dị n'usoro, nzọụkwụ ọrụ gị ọzọ nwekwara ụbọchị" }
  ],
  chapters: [
    {
      name: "Isi 1: Rejista na ego",
      lessons: [
        {
          title: "Ịgụ ahịa site na ekele ruo na rịsịt",
          objectives: ["O1"],
          minutes: 5,
          goal: "Gụọ ahịa omume n'usoro ziri ezi, site na ekele ruo na rịsịt.",
          text: [
            "Cashier na-askanụ (scan) ngwa ahịa, na-anata ụgwọ, na-enye chenji na rịsịt, na-etinye ngwa ahịa n'akpa, na-ejikwa nlọghachi ngwa ahịa, ma na-aza ajụjụ. Dị ka US Bureau of Labor Statistics si kwuo, a na-azụkarị mmadụ n'ọrụ, ọzụzụ ahụ na-ewekwa ruo izu ole na ole. Achọghị diploma ma ọ bụ akwụkwọ ikike, mana ọtụtụ ụlọ ahịa na-ahọrọ diploma high school ma ọ bụ GED (asambodo dị ka diploma high school).",
            "Rejista ọ bụla dị iche, mana ịgụ ahịa ọ bụla na-eso otu usoro: kelee onye ahịa, askanụ ngwa ahịa ọ bụla ma lee ọnụahịa na skrịn, tinye kupọn ma ọ bụ mbelata ọnụahịa, gwa onye ahịa ngụkọta, nata ụgwọ, nye chenji na rịsịt, ma kelee ya.",
            "Lee skrịn mgbe ị na-askanụ. Ọ bụrụ na otu ngwa ahịa pụtara ugboro abụọ, ma ọ bụ ọnụahịa ya adịghị ka nke dị na tag shelf, kwụsị ma dozie ya tupu ị nata ụgwọ. Onye na-azụ gị ga-egosi gị otu e si ewepụ (void) ngwa ahịa na otu e si arịọ nlele ọnụahịa (price check) na rejista gị.",
            "Ndị ahịa na-akwụ ụgwọ site n'ego nkịtị, kaadị (ịmetụ, ịtinye ma ọ bụ ịswaịpụ), wallet ekwentị, gift card ma ọ bụ kaadị enyemaka gọọmentị. Hapụ onye ahịa ka o jikwaa kaadị ya na PIN ya n'onwe ya. Ajụla ka ọ kpọọ PIN ya n'olu, ejidekwala kaadị onye ahịa."
          ],
          steps: [
            "Kelee onye ahịa ma lee ya anya: \"Ndewo, ị chọtara ihe niile ị chọrọ?\"",
            "Askanụ ngwa ahịa ọ bụla ma lee skrịn maka aha na ọnụahịa ziri ezi.",
            "Jụọ maka kupọn ma ọ bụ nọmba rewards ụlọ ahịa tupu ị gụkọta.",
            "Kpọọ ngụkọta n'olu: \"Ngụkọta gị bụ $23.40.\"",
            "Nata ụgwọ ma gbasoo ihe rejista na-agwa gị.",
            "Nye chenji na rịsịt, ma kelee onye ahịa."
          ],
          words: [
            ["POS (point of sale)", "usoro rejista: skrịn, igwe askanụ, igwe kaadị na drọwa ego."],
            ["Void", "iwepụ ngwa ahịa n'ahịa ahụ tupu a kwụọ ụgwọ."],
            ["Price check (nlele ọnụahịa)", "ịjụ onye ọrụ ibe ma ọ bụ usoro kọmputa ọnụahịa ziri ezi nke ngwa ahịa."],
            ["Rịsịt (receipt)", "ndekọ e biri ebi ma ọ bụ e zigara n'email nke ihe onye ahịa zụrụ na ihe ọ kwụrụ."]
          ],
          slides: [
            { title: "Ihe cashier na-arụ", bullets: ["Iaskanụ ngwa ahịa, ịnata ụgwọ, inye chenji na rịsịt", "Itinye ngwa ahịa n'akpa na ijikwa nlọghachi", "A na-azụ gị n'ọrụ, ọtụtụ mgbe izu ole na ole"] },
            { title: "Otu usoro n'ahịa ọ bụla", bullets: ["Kelee, askanụ, kupọn, ngụkọta", "Ụgwọ, chenji na rịsịt", "Kelee onye ahịa"] },
            { title: "Lee skrịn", bullets: ["Ngwa ahịa pụtara ugboro abụọ? Dozie ya tupu ụgwọ", "Ọnụahịa dị iche na tag shelf? Rịọ price check", "Onye na-azụ gị ga-egosi gị otu e si void ngwa ahịa"] },
            { title: "Ịkwụ ụgwọ site na kaadị", bullets: ["Onye ahịa na-ejikwa kaadị ya na PIN ya n'onwe ya", "Ajụla ka a kpọọ PIN n'olu", "Ejidekwala kaadị onye ahịa"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Cashiers (Occupational Outlook Handbook)", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }],
          tryIt: "Tinye ihe ise dị n'ụlọ n'elu tebụl ma dee ọnụahịa n'mpempe akwụkwọ maka nke ọ bụla. Mee ka cashier: kelee onye ahịa e chepụtara echepụta, \"askanụ\" ihe ọ bụla site n'ịgụ ọnụahịa ya n'olu na ide ya, wepụ $2 site na kupọn, kpọọ ngụkọta, ma kelee onye ahịa. Jiri kalkuleta lelee ngụkọta gị.",
          youCanNow: "ịgụ ahịa n'usoro ziri ezi, ịchọpụta njehie askanụ tupu ụgwọ, na ịnata ụgwọ kaadị n'ụzọ dị mma.",
          quickCheck: [
            { objective: "O1", q: "Gịnị na-abịa ozugbo tupu ị gwa onye ahịa ngụkọta?", options: ["Ịjụ maka kupọn ma ọ bụ nọmba rewards", "Inye rịsịt", "Ịgụghachi chenji", "Ịsị ka ọ dị"], answer: 0, why: "A ga-etinye kupọn na rewards tupu ngụkọta, ma ọ bụghị ya ngụkọta ga-ezighị ezi." },
            { objective: "O1", q: "Otu uwe pụtara ugboro abụọ na skrịn. Gịnị ka ị ga-eme?", options: ["Hapụ onye ahịa ka ọ hụ ya na rịsịt", "Gụọ ya ụgwọ ma dozie ya oge ọzọ", "Kwụsị ma wepụ nke abụọ ahụ tupu ụgwọ", "Wepụ nke abụọ na shelf"], answer: 2, why: "Idozi askanụ ugboro abụọ tupu ụgwọ na-eme ka ngụkọta ziri ezi ma gbochie nlọghachi ma emechaa." }
          ]
        },
        {
          title: "Ịgụghachi chenji na idobe drọwa gị ziri ezi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gụghachi chenji ziri ezi site n'ịgụ elu site na ngụkọta ruo n'ego a kwụrụ.",
          text: [
            "Ọbụlagodi mgbe rejista gosiri chenji, cashier a zụrụ azụ na-agụghachi ya n'olu. Nke a na-achọpụta njehie ma na-egosi onye ahịa na chenji ahụ ziri ezi. A na-akpọ ya usoro ịgụ elu (count-up): malite na ngụkọta ma gụọ elu ruo n'ego onye ahịa nyere gị.",
            "Ọmụmaatụ: ngụkọta bụ $13.47 onye ahịa enye gị $20. Kwuo \"$13.47\", wee nye pennies 3 (\"$13.50\"), quarters 2 (\"$14\"), otu dollar (\"$15\") na ego five (\"na $20\"). Nke ahụ bụ $6.53 chenji.",
            "Debe ego akwụkwọ onye ahịa n'elu drọwa, ọ bụghị n'ime ya, ruo mgbe ị gụchara chenji. Ọ bụrụ na ọ sị \"Enyere m gị fifty\", unu abụọ ga-ahụ na ọ bụ twenty.",
            "Drọwa gị (a na-akpọkwa ya till) na-amalite oge ọrụ ọ bụla n'ego a kapịrị ọnụ nke gị na onye njikwa na-agụ. Na njedebe, a na-agụ ya ọzọ. A na-elele ego karịrị ma ọ bụ dị ala (\"over/short\"), ya mere ekwela ka onye ọzọ jiri drọwa gị, etinyekwala ego nke gị n'ime ya."
          ],
          steps: [
            "Kpọọ ngụkọta n'olu.",
            "Debe ego onye ahịa n'elu drọwa, ọ bụghị n'ime ya.",
            "Gụọ elu site na mkpụrụ ego kacha nta, na-akpọ ego ọhụrụ ọ bụla.",
            "Wee gụọ elu site n'ego akwụkwọ ruo mgbe i ruru ego o nyere gị.",
            "Tinye ego onye ahịa n'ime drọwa ma mechie ya."
          ],
          words: [
            ["Usoro ịgụ elu (count-up method)", "ịgụghachi chenji site n'ịmalite na ngụkọta na ịgbakwunye mkpụrụ ego na ego akwụkwọ ruo mgbe i ruru ego a kwụrụ."],
            ["Drọwa (till)", "akpati ego dị na rejista nke otu cashier na-ahụ maka ya."],
            ["Over/short", "ọdịiche dị n'etiti ego kwesịrị ịdị na drọwa na ego dị n'ime ya n'ezie na njedebe oge ọrụ."]
          ],
          slides: [
            { title: "Gụọ elu, n'olu", bullets: ["Malite na ngụkọta", "Gbakwunye mkpụrụ ego, wee ego akwụkwọ", "Kwụsị n'ego onye ahịa nyere gị"] },
            { title: "Ọmụmaatụ: $13.47 site na $20", bullets: ["Pennies 3: $13.50", "Quarters 2: $14. Otu dollar: $15", "Ego five: $20. Chenji: $6.53"] },
            { title: "Chebe onwe gị", bullets: ["Debe ego ya n'elu drọwa ruo mgbe chenji gwụrụ", "Wee tinye ya n'ime", "Ọ na-edozi ajụjụ \"Enyere m gị fifty\""] },
            { title: "Drọwa gị bụ nke gị", bullets: ["Gị na onye njikwa gụọ ya na mmalite na njedebe", "Onye ọzọ anaghị eji drọwa gị", "Etinyela ego nke gị n'ime ya"] }
          ],
          tryIt: "Jiri ezi mkpụrụ ego ma ọ bụ ego egwuregwu. Mee ahịa atọ ndị a n'olu site n'usoro ịgụ elu: ngụkọta $7.80 a kwụrụ $10; ngụkọta $4.35 a kwụrụ $5; ngụkọta $26.62 a kwụrụ $30. Dee chenji nke ọ bụla, wee lelee: $2.20, $0.65 na $3.38.",
          youCanNow: "ịgụghachi chenji ziri ezi site n'usoro ịgụ elu ma chebe drọwa gị pụọ na njehie.",
          quickCheck: [
            { objective: "O2", q: "Ngụkọta bụ $7.80 onye ahịa akwụ $10. Kedu chenji ị ga-agụghachi?", options: ["$3.20", "$2.20", "$2.80", "$1.20"], answer: 1, why: "Dimes abụọ na-eru $8.00, dollar abụọ na-eru $10.00, ya mere chenji bụ $2.20." },
            { objective: "O2", q: "Ebee ka ego $20 onye ahịa kwesịrị ịdị mgbe ị na-agụ chenji ya?", options: ["N'akpa uwe gị", "N'okpuru drọwa", "N'aka onye ahịa ọzọ", "N'elu drọwa, ebe unu abụọ ga-ahụ ya"], answer: 3, why: "Idobe ya ebe a ga-ahụ ya ruo mgbe chenji gwụrụ na-edozi ajụjụ ọ bụla banyere ego o ji kwụọ." }
          ]
        },
        {
          title: "ID, ego buru ibu na aghụghọ na rejista",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lelee ID, ego buru ibu na ihe ngosi aghụghọ gift card tupu ị mechaa ahịa.",
          text: [
            "Ụfọdụ ngwa ahịa nwere oke afọ. N'iwu gọọmentị etiti (federal), onye ọ bụla na-erubeghị afọ 21 enweghị ike ịzụ ụtaba ma ọ bụ vape, FDA (ụlọ ọrụ gọọmentị US na-ahụ maka nri na ọgwụ) sịkwara ka e lelee ID nwere foto maka onye ọ bụla na-erubeghị afọ 30. A ga-eru afọ 21 iji zụọ mmanya na steeti ọ bụla. Afọ iji REE mmanya ma ọ bụ ụtaba dị ka cashier bụ steeti ọ bụla na-ekpebi ya, ụlọ ahịa na-agbakwunyekarị iwu nke ha. Ụlọ ahịa gị ga-agwa gị.",
            "Iji lelee ID: lee foto na ihu, lelee na oge ya agafeghị, ma gụọ ụbọchị ọmụmụ. Ụzọ dị ngwa: ọ bụrụ na taa bụ 15 March 2027, a ga-amụrịrị onye ahịa na 15 March 2006 ma ọ bụ tupu ya ka ọ ruo afọ 21. Ọ bụrụ na o doghị gị anya, ma ọ bụ ID ahụ dị ka a gbanwere ya, erela ahịa ahụ ma kpọọ onye njikwa. Ire ahịa nye onye na-erubeghị afọ nwere ike iweta ntaramahụhụ ego maka gị na ụlọ ahịa.",
            "Maka ego buru ibu, jiri nlele sitere na uscurrency.gov. Na $100: tụgharịa ya, mgbịrịgba dị na ribbon na-acha anụnụ anụnụ ga-aghọ 100, 100 dị n'akụkụ ga-esi n'agba ọla kọpa gbanwee ka ọ bụrụ akwụkwọ ndụ; jide ya n'ìhè ka ị hụ foto watermark na eriri nchekwa; metụ ya aka ka ị nụ mbipụta dị elu na-adị ọkpụkpụ. Ọ bụrụ na ego adaa nlele, ebokwala onye ahịa ebubo: kpọọ onye njikwa. Ụlọ ahịa na-akọrọ US Secret Service ego a na-enyo enyo na ọ bụ adịgboroja.",
            "Aghụghọ gift card na-eme na rejista. Ndị aghụghọ na-agwa ndị mmadụ ka ha zụọ gift card iji kwụọ \"ụgwọ gọọmentị\" ma ọ bụ nyere \"onye ikwu nọ na nsogbu\" aka. FTC (ụlọ ọrụ gọọmentị US na-echebe ndị na-azụ ahịa) sịrị na ọ dịghị ezi azụmahịa ma ọ bụ ụlọ ọrụ gọọmentị na-arịọ ka a kwụọ ya ụgwọ site na gift card. Ọ bụrụ na onye ahịa na-azụ ọtụtụ kaadị mgbe mmadụ nọ n'ekwentị na-agwa ya ihe ọ ga-eme, gbasoo iwu ụlọ ahịa gị, nke nwere ike ịbụ ịkpọ onye njikwa ma ọ bụ iji obi ọma kọọrọ ya ịdọ aka ná ntị ahụ."
          ],
          steps: [
            "Ngwa ahịa nwere oke afọ: rịọ ID nwere foto ma ọ bụrụ na onye ahịa dị ka onye na-erubeghị afọ 30.",
            "Jikọọ foto na ihu, lelee na oge ya agafeghị, ma gbakọọ afọ site n'ụbọchị ọmụmụ.",
            "Ego buru ibu: tụgharịa ya, jide ya n'ìhè ma metụ ya aka.",
            "Gift card: lezie anya maka ọtụtụ kaadị, ọsọ ọsọ ma ọ bụ onye na-akpọ ekwentị na-enye iwu.",
            "Ihe ọ bụla adịghị mma: emechala ahịa ahụ; kpọọ onye njikwa."
          ],
          words: [
            ["Ngwa ahịa nwere oke afọ (age-restricted)", "ngwa ahịa iwu kwuru na ọ bụ naanị ndị karịrị otu afọ nwere ike ịzụ ya, dị ka ụtaba ma ọ bụ mmanya."],
            ["Adịgboroja (counterfeit)", "ego adịgboroja e mere ka ọ dị ka ezi ego."],
            ["Watermark", "foto na-adịghị ike n'ime akwụkwọ ego nke na-apụta mgbe i jidere ya n'ìhè."],
            ["Aghụghọ gift card", "aghụghọ ebe mmadụ na-amanye onye ọzọ ka o jiri nọmba gift card kwụọ ya ụgwọ."]
          ],
          slides: [
            { title: "Ahịa nwere oke afọ", bullets: ["Ụtaba na vape: afọ 21 iji zụọ (iwu federal)", "FDA: lelee ID nwere foto maka onye ọ bụla na-erubeghị afọ 30", "Mmanya: afọ 21 iji zụọ; steeti gị na-ekpebi afọ iji ree ya"] },
            { title: "Ilele ID", bullets: ["Foto dabara n'ihu", "Oge ya agafeghị", "A mụrụ ya na ụbọchị taa, afọ 21 gara aga, ma ọ bụ tupu ya", "O doghị gị anya? Erela. Kpọọ onye njikwa."] },
            { title: "Ilele ego $100", bullets: ["Tụgharịa: mgbịrịgba ribbon na-aghọ 100; 100 n'akụkụ: kọpa gaa akwụkwọ ndụ", "Ìhè: foto watermark na eriri nchekwa", "Metụ aka: mbipụta dị elu na-adị ọkpụkpụ"] },
            { title: "Ihe ngosi aghụghọ gift card", bullets: ["Ọtụtụ kaadị, ọsọ ọsọ, onye na-akpọ ekwentị na-enye iwu", "Ọ dịghị ezi azụmahịa ma ọ bụ ụlọ ọrụ gọọmentị na-anara gift card dị ka ụgwọ", "Gbasoo iwu ụlọ ahịa; kpọọ onye njikwa"] }
          ],
          sources: [
            { name: "FDA: Tobacco 21", url: "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21" },
            { name: "US Currency Education Program: $100 note security features", url: "https://www.uscurrency.gov/denominations/100" },
            { name: "US Currency Education Program: Report a counterfeit", url: "https://www.uscurrency.gov/report-counterfeit" },
            { name: "FTC: Avoiding and reporting gift card scams", url: "https://consumer.ftc.gov/articles/avoiding-and-reporting-gift-card-scams" }
          ],
          tryIt: "Were ego akwụkwọ ọ bụla i nwere ($1, $5, $10 ma ọ bụ $20). Jide ya n'ìhè, tụgharịa ya ma metụ ya aka, ma dee ihe nchekwa niile ị hụrụ. Wee jiri ụbọchị taa dee ụbọchị ọmụmụ ikpeazụ nke ruru afọ iji zụọ ụtaba.",
          youCanNow: "ilele ID tupu ahịa nwere oke afọ, ilele ego buru ibu, na ịmata ihe ngosi aghụghọ gift card.",
          quickCheck: [
            { objective: "O3", q: "Onye ahịa yiri onye dị ihe dị ka afọ 25 chọrọ ịzụ vape. Gịnị ka ị ga-eme?", options: ["Ree ya n'ihi na ọ dị ka onye karịrị afọ 21", "Jụọ ya afọ ole ọ dị ma kwere okwu ya", "Rịọ ID nwere foto ma lelee ụbọchị ọmụmụ", "Ajụla ire vape nye onye ọ bụla"], answer: 2, why: "FDA sịrị ka e lelee ID nwere foto maka onye ọ bụla na-erubeghị afọ 30 na-azụ ngwa ụtaba." },
            { objective: "O3", q: "Nọmba dị n'akụkụ ego $100 anaghị agbanwe agba mgbe ị tụgharịrị ya. Gịnị ka ị ga-eme?", options: ["Kpọọ onye njikwa n'eboghị onye ahịa ebubo", "Gwa onye ahịa na ọ bụ onye omekome", "Nara ya; o nwere ike ịdị mma", "Dọwaa ya abụọ"], answer: 0, why: "Ego dara nlele na-aga n'aka onye njikwa; ụlọ ahịa na-ejikwa ma na-akọ ego a na-enyo enyo na ọ bụ adịgboroja." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Rejista na ego",
        questions: [
          { objective: "O1", q: "Kedu usoro ziri ezi maka ịgụ ahịa?", options: ["Ụgwọ, askanụ, kelee, rịsịt", "Askanụ, rịsịt, kelee, ụgwọ", "Kelee, askanụ, ngụkọta, ụgwọ, chenji na rịsịt", "Ngụkọta, kelee, askanụ, daalụ"], answer: 2, why: "Ahịa ọ bụla na-eso: kelee, askanụ, kupọn, ngụkọta, ụgwọ, chenji na rịsịt, daalụ." },
          { objective: "O1", q: "Onye ahịa chọrọ iji kaadị kwụọ ụgwọ. Gịnị bụ ọrụ gị?", options: ["Hapụ ya ka o jikwaa kaadị ya na PIN ya, ma gbasoo ihe rejista na-agwa gị", "Jụọ ya ka ọ kpọọ PIN ya ka i dee ya", "Jide kaadị ahụ ruo mgbe ahịa gwụrụ", "Dee nọmba kaadị na rịsịt"], answer: 0, why: "Ndị ahịa na-ejikwa kaadị na PIN ha n'onwe ha; cashier anaghị arịọ ha ma ọ bụ ejide ha." },
          { objective: "O2", q: "Ngụkọta bụ $4.35 onye ahịa akwụ $5. Kedu chenji ziri ezi?", options: ["$1.35", "$0.75", "$0.55", "$0.65"], answer: 3, why: "Nickel na-eru $4.40, dime na-eru $4.50, quarters abụọ na-eru $5.00: ha bụ $0.65." },
          { objective: "O3", q: "Taa bụ 15 March 2027. Iji zụọ mmanya, a ga-amụrịrị onye ahịa na ụbọchị a ma ọ bụ tupu ya:", options: ["15 March 2009", "15 March 2006", "15 March 2007", "1 January 2006"], answer: 1, why: "Afọ 21 tupu 15 March 2027 bụ 15 March 2006." },
          { objective: "O3", q: "Onye ahịa nọ n'ekwentị na-azụ gift card $500 ma sị na onye na-akpọ ya \"si n'aka gọọmentị\". Gịnị ka nke a nwere ike ịbụ?", options: ["Onyinye nkịtị", "Mkpọsa ụlọ ahịa", "Aghụghọ gift card", "Nlọghachi ụtụ isi"], answer: 2, why: "FTC sịrị na ọ dịghị ezi azụmahịa ma ọ bụ ụlọ ọrụ gọọmentị na-arịọ ka a kwụọ ya site na gift card." }
        ]
      }
    },
    {
      name: "Isi 2: Ire ahịa, ije ozi na ịrụ oge ọrụ",
      lessons: [
        {
          title: "Inyere ndị ahịa aka ịhọrọ, n'enweghị mmanye",
          objectives: ["O4"],
          minutes: 5,
          goal: "Jụọ otu ajụjụ mepere emepe ma kọwaa otu ihe yitere ya na uru ya.",
          text: [
            "Ire ahịa n'ụlọ ahịa bụ inyere ndị mmadụ aka ịchọta ihe ha bịara ịzụ na ihe ga-eme ka ọ rụọ ọrụ nke ọma. Malite site n'ajụjụ mepere emepe, nke a na-enweghị ike iji \"ee\" ma ọ bụ \"mba\" zaa: \"Gịnị ka ị ga-eji ya mee?\"",
            "Wee kọwaa uru ya, ọ bụghị naanị ihe ọ nwere. Ihe ọ nwere (feature) bụ ihe dị na ngwa ahịa ahụ (\"kesịn ekwentị a nwere ọnụ dị elu\"); uru (benefit) bụ ihe ọ na-emere onye ahịa (\"ka skrịn gị ghara imebi ma ọ bụrụ na ọ daa ihu ala\").",
            "Ịkọwa ihe ọzọ (ụlọ ahịa na-akpọ ya suggestive selling ma ọ bụ add-on) bụ otu ihe yitere ya: batrị na ihe egwuregwu ụmụaka, kesịn na ekwentị, sọks na akpụkpọ ụkwụ. Kọwaa otu, kwuo ihe mere o ji dị mma, ma ọ bụrụ na ọ sị mba, mụmụọ ọnụ ọchị ma hapụ ya. Ịmanye mmadụ na-eme ka ha pụọ ma ghara ịlọghachi.",
            "Ekepụtala ihe banyere ngwa ahịa. Ọ bụrụ na ị maghị, sị \"Ka m chọpụta\" ma jụọ onye ọrụ ibe ma ọ bụ gụọ label ya."
          ],
          steps: [
            "Kelee ma jụọ otu ajụjụ mepere emepe: \"Gịnị ka ị ga-eji ya mee?\"",
            "Gee azịza ya ntị.",
            "Gosi otu uru dabara n'ihe o kwuru.",
            "Kọwaa otu ihe yitere ya ma kwuo ihe mere.",
            "Nabata \"mba\" nwayọ: \"Ọ dịghị nsogbu!\""
          ],
          words: [
            ["Ajụjụ mepere emepe", "ajụjụ chọrọ azịza karịrị \"ee\" ma ọ bụ \"mba\"."],
            ["Feature (ihe ọ nwere)", "ihe dị na ngwa ahịa."],
            ["Benefit (uru)", "ihe feature ahụ na-emere onye ahịa."],
            ["Suggestive selling (add-on)", "ịkọwara onye ahịa otu ihe yitere ya nke ga-enyere ya aka."]
          ],
          slides: [
            { title: "Malite site n'ajụjụ mepere emepe", bullets: ["\"Gịnị ka ị ga-eji ya mee?\"", "Ọ bụghị \"Enwere m ike inyere gị aka?\" (ọ dị mfe ịsị mba)", "Gee azịza ya ntị"] },
            { title: "Feature na benefit", bullets: ["Feature: ọnụ dị elu na kesịn", "Benefit: skrịn gị anaghị emebi ma ekwentị daa ihu ala", "Ndị ahịa na-azụ uru"] },
            { title: "Otu ihe, n'enweghị mmanye", bullets: ["Batrị na ihe egwuregwu, sọks na akpụkpọ ụkwụ", "Kwuo otu o si enye aka", "Mba dị mma: mụmụọ ọnụ ọchị ma gaa n'ihu"] }
          ],
          tryIt: "Họrọ ihe atọ dị n'ụlọ gị. Maka nke ọ bụla, dee otu ajụjụ mepere emepe ị ga-ajụ onye na-azụ ahịa, otu uru, na otu ihe yitere ya ị nwere ike ịkọwa ya na obere ihe mere. Kpọọ ha n'olu.",
          youCanNow: "ịjụ ajụjụ mepere emepe, ịkọwa uru, na ịkọwa otu ihe n'enweghị mmanye.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ ajụjụ mepere emepe?", options: ["\"Enwere m ike inyere gị aka?\"", "\"Ị chọrọ akpa?\"", "\"Ọ bụ naanị ihe ndị a?\"", "\"Gịnị ka ị ga-eji ya mee?\""], answer: 3, why: "Ọ chọrọ ihe karịrị ee ma ọ bụ mba, ya mere ị ga-amụta ihe onye ahịa chọrọ." },
            { objective: "O4", q: "Ị kọwara kesịn ekwentị onye ahịa asị mba, daalụ. Gịnị ka ị ga-eme?", options: ["Jụọ ya ugboro atọ ọzọ", "Mụmụọ ọnụ ọchị, sị \"Ọ dịghị nsogbu\" ma mechaa ahịa ahụ", "Gwa ya na ọ ga-akwa ụta", "Tinye ya n'akpa n'agbanyeghị"], answer: 1, why: "Otu ịkọwa na-enye aka; ịmanye mgbe ọ sịrị mba na-achụpụ ndị ahịa." }
          ]
        },
        {
          title: "Nlọghachi ngwa ahịa, nsogbu ọnụahịa na ndị ahịa iwe were",
          objectives: ["O5"],
          minutes: 6,
          goal: "Jikwaa nlọghachi ngwa ahịa, nsogbu ọnụahịa ma ọ bụ onye ahịa iwe were dị ka iwu ụlọ ahịa si dị, ma kpọọ onye njikwa mgbe ọ dị mkpa.",
          text: [
            "Ụlọ ahịa ọ bụla nwere iwu nlọghachi (return policy): ụbọchị ole, ma a chọrọ rịsịt, na otu ego si alaghachi (na kaadị, dị ka ego nkịtị ma ọ bụ dị ka store credit). Mụta nke gị n'ọzụzụ. Gbasoo ya otu ụzọ maka onye ọ bụla, ma rịọ onye njikwa mgbe nlọghachi dị n'èzí iwu ahụ.",
            "Nsogbu ọnụahịa na-emekarị: tag shelf sị $4.99, rejista sị $5.49. Nọrọ nwayọ, mee price check, ma gbasoo iwu ụlọ ahịa gị. Arụla ụka, agbanwekwala ọnụahịa n'onwe gị.",
            "Na onye ahịa iwe were, jiri nzọụkwụ anọ: gee ntị n'egbochighị ya okwu, rịọ mgbaghara maka nsogbu ahụ, dozie ihe ị nwere ike idozi ma ọ bụ kpọta onye njikwa, ma kelee ya. Ihe ọmụmụ \"Customer Service Excellence\" na-aga n'ime miri.",
            "Nchekwa gị bụ ihe mbụ. Agbasola ma ọ bụ jide onye ohi ụlọ ahịa; gwa onye njikwa ma ọ bụ ndị nche. Ọ bụrụ na onye ahịa yiri gị egwu, ma ọ bụ n'oge ohi, arụla ụka ma ọ bụ lụọ ọgụ: gbasoo ọzụzụ nchekwa ụlọ ahịa gị, nye ihe a rịọrọ, ma kpọọ 911 mgbe ọ dị mma. OSHA (ụlọ ọrụ gọọmentị US na-ahụ maka nchekwa n'ọrụ) depụtara ijikwa ego n'ihu ọha na ọrụ n'abalị dị ka ihe na-eme ka ime ihe ike n'ọrụ dị njọ karịa."
          ],
          steps: [
            "Nlọghachi: lelee rịsịt, ụbọchị na ngwa ahịa ahụ n'ihu iwu ahụ.",
            "Nsogbu ọnụahịa: mee price check ma gbasoo iwu ụlọ ahịa.",
            "Onye ahịa iwe were: gee ntị, rịọ mgbaghara, dozie ma ọ bụ kpọta onye njikwa, kelee.",
            "Ọ karịrị ọrụ gị ma ọ bụ ọ dịghị mma: kpọọ onye njikwa, ndị nche ma ọ bụ 911."
          ],
          words: [
            ["Iwu nlọghachi (return policy)", "iwu ụlọ ahịa maka ịnara ngwa ahịa azụ na inyeghachi ego."],
            ["Store credit", "ego e nyeghachiri nke a ga-eji naanị n'ụlọ ahịa ahụ."],
            ["Manager override", "onye njikwa na-akwado ihe rejista na-agaghị ekwe ka cashier mee naanị ya."],
            ["Izu ohi n'ụlọ ahịa (shoplifting)", "iwere ngwa ahịa n'ụlọ ahịa n'akwụghị ụgwọ."]
          ],
          slides: [
            { title: "Nlọghachi ngwa ahịa", bullets: ["Mụta ụbọchị, iwu rịsịt na ụdị nlọghachi ego nke ụlọ ahịa gị", "Otu iwu maka onye ọ bụla", "Ọ dị n'èzí iwu? Jụọ onye njikwa"] },
            { title: "Nsogbu ọnụahịa", bullets: ["Nọrọ nwayọ ma mee price check", "Gbasoo iwu ụlọ ahịa", "Agbanwela ọnụahịa n'onwe gị"] },
            { title: "Ndị ahịa iwe were", bullets: ["Gee ntị n'egbochighị ya okwu", "Rịọ mgbaghara maka nsogbu ahụ", "Dozie ya ma ọ bụ kpọta onye njikwa, wee kelee ya"] },
            { title: "Nchekwa bụ ihe mbụ", bullets: ["Agbasola ma ọ bụ jide onye ohi ụlọ ahịa", "N'oge ohi: arụla ụka ma ọ bụ lụọ ọgụ; gbasoo ọzụzụ gị", "Kpọọ 911 mgbe ọ dị mma"] }
          ],
          sources: [{ name: "OSHA: Workplace violence", url: "https://www.osha.gov/workplace-violence" }],
          tryIt: "Gị na enyi, ma ọ bụ naanị gị n'olu, mee egwuregwu a: iwe were onye ahịa n'ihi na tag shelf $4.99 pụtara $5.49 na rejista. Jiri nzọụkwụ anọ ahụ. Wee dee ụdị nlọghachi abụọ ị ga-ezigara onye njikwa.",
          youCanNow: "ijikwa nlọghachi ngwa ahịa, nsogbu ọnụahịa na onye ahịa iwe were nwayọ, na ịmara mgbe ị ga-akpọ onye njikwa ma ọ bụ 911.",
          quickCheck: [
            { objective: "O5", q: "Onye ahịa chọrọ ịlaghachi ngwa ahịa mgbe oge nlọghachi ụlọ ahịa gafere. Gịnị ka ị ga-eme?", options: ["Kpọọ onye njikwa", "Nyeghachi ya ego n'agbanyeghị", "Tie mkpu na oge agafeela", "Zoo ngwa ahịa ahụ"], answer: 0, why: "Ihe ọ bụla dị n'èzí iwu na-aga n'aka onye njikwa, onye nwere ike ikpebi." },
            { objective: "O5", q: "Ị hụrụ ka mmadụ tinye chaja ekwentị n'uwe mwụda ya ma pụọ. Gịnị ka ị ga-eme?", options: ["Gbasoo ya ọsọ ruo ebe a na-adọba ụgbọ ala", "Jide ya aka", "Gwa onye njikwa ma ọ bụ ndị nche ozugbo", "Leghara ya anya ma ghara ikwu ihe ọ bụla"], answer: 2, why: "Nchekwa gị bụ ihe mbụ; ụlọ ahịa na-ejikwa izu ohi site n'aka ndị njikwa na ndị nche." }
          ]
        },
        {
          title: "Kaadị oge ọrụ gị na ụzọ gị gaa n'ọrụ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Dee ndepụta ihe ime n'oge ọrụ dị otu peeji ma kpebie ụbọchị maka nzọụkwụ ọrụ gị ọzọ.",
          text: [
            "Ezigbo oge ọrụ nwere akụkụ atọ. Mmeghe: banye ọrụ (clock in) n'oge, gị na onye njikwa gụọ drọwa gị, lelee akwụkwọ rejista na akpa, ma hichaa ebe gị. Ịrụ: gbasoo usoro ịgụ ahịa, gụghachi chenji, lelee ID, ma mechie drọwa gị n'etiti ahịa. Mmechi: gị na onye njikwa gụọ drọwa gị, kọọ over/short n'eziokwu, hichaa ebe ahụ ma pụọ ọrụ (clock out).",
            "Itinye ya n'otu kaadị na-enyere gị aka ịmụta ngwa ngwa ma na-egosi onye na-ewe mmadụ n'ọrụ na ị dị njikere. Were ya gaa ajụjụ ọnụ ọrụ ma kọwaa ya.",
            "Asambodo nwere ike inyere akwụkwọ arịrịọ gị aka. NRF Foundation (akụkụ nke National Retail Federation, otu ụlọ ahịa US) na-eme RISE Up, mmemme ọzụzụ na asambodo nwere asambodo dị ka Retail Industry Fundamentals, Customer Service and Sales, na Customer Conflict De-escalation. Ihe ọmụmụ a na-AKWADO gị; ọ naghị enye asambodo. Lelee nrffoundation.org maka otu e si edebanye aha na ego ọ na-efu, ma ọ bụ jụọ ụlọ ọrụ ọrụ (job center) ma ọ bụ mmemme dị nso, nke nwere ike inye ya.",
            "Wee tinye akwụkwọ. Ụlọ ahịa na-ewe mmadụ n'afọ niile, ma na-ewe karịa tupu ụbọchị ezumike. Tinye akwụkwọ n'ịntanetị na peeji ọrụ (careers page) nke ụlọ ahịa n'onwe ya ma ọ bụ jiri ụkwụ gị gaa, akwụkwala onye ọ bụla ego iji nweta ọrụ."
          ],
          steps: [
            "Dee nzọụkwụ mmeghe gị.",
            "Dee okwu ịgụ ahịa gị, ya na otu ahịrị ịkọwa ihe ọzọ.",
            "Gbakwunye omume chenji gị, nzọụkwụ ID na ego buru ibu.",
            "Depụta oge atọ ị ga-akpọ onye njikwa.",
            "Dee nzọụkwụ mmechi gị.",
            "Gbakwunye otu nzọụkwụ ọzọ nwere ụbọchị: asambodo ma ọ bụ akwụkwọ arịrịọ ọrụ."
          ],
          words: [
            ["Clock in / clock out", "ide oge ị malitere na oge ị kwụsịrị ọrụ."],
            ["Asambodo (credential)", "akwụkwọ ma ọ bụ baajị na-egosi na i gafere ule nka."],
            ["RISE Up", "mmemme ọzụzụ na asambodo ire ahịa nke NRF Foundation."]
          ],
          slides: [
            { title: "Mmeghe", bullets: ["Clock in n'oge", "Gị na onye njikwa gụọ drọwa gị", "Lelee akwụkwọ, akpa na ebe gị"] },
            { title: "Ịrụ na imechi", bullets: ["Usoro ịgụ ahịa, ịgụghachi chenji, ilele ID", "Mechie drọwa n'etiti ahịa", "Mmechi: gụọ ya na onye njikwa, kọọ over/short n'eziokwu"] },
            { title: "Asambodo ire ahịa", bullets: ["Asambodo NRF Foundation RISE Up", "Retail Industry Fundamentals, Customer Service and Sales", "Ihe ọmụmụ a na-akwado gị; ọ naghị enye asambodo"] },
            { title: "Nzọụkwụ gị ọzọ", bullets: ["Were kaadị oge ọrụ gị gaa ajụjụ ọnụ ọrụ", "Tinye akwụkwọ na peeji ọrụ ụlọ ahịa n'onwe ya", "Akwụla onye ọ bụla ego iji nweta ọrụ"] }
          ],
          sources: [
            { name: "NRF Foundation: RISE Up", url: "https://nrffoundation.org/riseup" },
            { name: "US Bureau of Labor Statistics: Cashiers", url: "https://www.bls.gov/ooh/sales/cashiers.htm" }
          ],
          tryIt: "Mee Kaadị Oge Ọrụ Cashier gị n'otu peeji (akwụkwọ ma ọ bụ ndetu ekwentị) nwere akụkụ asaa niile nke ọrụ ikpeazụ. Jiri ego egwuregwu mee ahịa ise nke ịgụghachi chenji ma dee ha na kaadị ahụ. Mechie site n'otu ahịrị: asambodo ma ọ bụ ụlọ ahịa ị ga-achọ na ụbọchị ị ga-amalite.",
          youCanNow: "imeghe, ịrụ na imechi oge ọrụ na rejista site na ndepụta ihe ime, na ime nzọụkwụ nwere ụbọchị gaa n'ọrụ ire ahịa.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ihe mbụ ị ga-eme na drọwa gị na mmalite oge ọrụ?", options: ["Malite ịgụ ahịa ndị ahịa", "Gbazite drọwa onye ọrụ ibe", "Tinye ego nke gị n'ime ya", "Gị na onye njikwa gụọ ya"], answer: 3, why: "Ịgụ ya na mmalite na-edozi ego ị na-ahụ maka ya." },
            { objective: "O6", q: "Gịnị ka ihe ọmụmụ a na-enye gị maka asambodo RISE Up?", options: ["Asambodo ahụ n'onwe ya", "Nkwado; NRF Foundation na-eme asambodo ahụ", "Akwụkwọ ikike steeti", "Ọ dịghị ihe ọ bụla"], answer: 1, why: "Ihe ọmụmụ a na-akwado gị; asambodo ahụ si na mmemme RISE Up nke NRF Foundation." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ire ahịa, ije ozi na ịrụ oge ọrụ",
        questions: [
          { objective: "O4", q: "Kedu nke bụ uru (benefit), ọ bụghị feature?", options: ["Kesịn ahụ nwere ọnụ dị elu", "Skrịn gị anaghị emebi ma ekwentị daa ihu ala", "Kesịn ahụ na-acha anụnụ anụnụ", "E ji plastik mee kesịn ahụ"], answer: 1, why: "Uru na-ekwu ihe feature ahụ na-emere onye ahịa." },
          { objective: "O4", q: "Onye ahịa zụrụ ụgbọ ala egwuregwu nwere rimọt. Gịnị bụ ezigbo ihe ị ga-akọwa?", options: ["Mọp", "Ụgbọ ala nke abụọ ọ jụghị maka ya", "Ọ dịghị ihe; akọwala ihe ọ bụla", "Batrị ọ chọrọ, ka ọ rụọ ọrụ mgbe ọ ruru ụlọ"], answer: 3, why: "Otu ihe yitere ya na ihe mere ya na-enyere onye ahịa aka." },
          { objective: "O5", q: "Tag shelf sị $4.99 mana rejista sị $5.49. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Nọrọ nwayọ ma mee price check", "Gbanwee ọnụahịa na rejista n'onwe gị", "Gwa onye ahịa na tag ahụ ezighị ezi n'eleghị anya", "Ajụ ire ngwa ahịa ahụ"], answer: 0, why: "Price check na-achọta ọnụahịa ziri ezi; wee gbasoo iwu ụlọ ahịa." },
          { objective: "O5", q: "Mmadụ yiri gị egwu ma rịọ ego dị na drọwa gị. Gịnị ka ị ga-eme?", options: ["Lụọ ọgụ iji chebe ego ahụ", "Gị na ya rụọ ụka", "Gbasoo ọzụzụ nchekwa gị, egbochila ya, ma kpọọ 911 mgbe ọ dị mma", "Chụpụ ya n'ụlọ ahịa"], answer: 2, why: "Nchekwa gị bụ ihe mbụ; a pụrụ inweta ego ọzọ." },
          { objective: "O6", q: "Na mmechi, ego dị na drọwa gị dị ala $3. Gịnị ka ị ga-eme?", options: ["Tinye $3 nke gị", "Kọọ ya n'eziokwu mgbe gị na onye njikwa na-agụ", "Were $3 na drọwa ọzọ", "Pụọ n'agụghị ya"], answer: 1, why: "A na-agụ ma kọọ over/short n'eziokwu; ịgwakọta ego na-ezo njehie ma mebie iwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nka Ire Ahịa na Ịnata Ego (Cashier) n'Ụlọ Ahịa",
    questions: [
      { objective: "O1", q: "Olee mgbe ị ga-ajụ maka kupọn ma ọ bụ nọmba rewards?", options: ["Mgbe rịsịt bisịrị", "Tupu ị gụkọta ahịa ahụ", "Oge ọzọ ọ bịara ịzụ ahịa", "Naanị ma ọ bụrụ na o mere mkpesa"], answer: 1, why: "Kupọn na rewards na-abanye tupu ngụkọta ka ọ ziri ezi." },
      { objective: "O1", q: "Gịnị ka \"void\" pụtara na rejista?", options: ["Inyeghachi ego", "Imeghe drọwa", "Ibipụta rịsịt", "Iwepụ ngwa ahịa n'ahịa ahụ tupu a kwụọ ụgwọ"], answer: 3, why: "Void na-ewepụ ngwa ahịa n'ahịa ahụ tupu ụgwọ." },
      { objective: "O1", q: "Onye ahịa chọrọ iji kaadị ya kwụọ ụgwọ. Kedu nke ziri ezi?", options: ["Ọ na-emetụ ma ọ bụ tinye ya n'onwe ya ma pịa PIN nke ya", "Ị na-ajụ ka ọ kpọọ PIN ya n'olu", "Ị na-ejide kaadị ya n'azụ tebụl", "Ị na-ede nọmba kaadị ahụ"], answer: 0, why: "Onye ahịa na-ejikwa kaadị ya na PIN ya n'onwe ya." },
      { objective: "O2", q: "Ngụkọta bụ $13.47 onye ahịa enye gị $20. Gịnị bụ chenji?", options: ["$7.53", "$6.47", "$6.53", "$7.47"], answer: 2, why: "Pennies 3 ruo $13.50, quarters 2 ruo $14, $1 ruo $15 na $5 ruo $20: $6.53." },
      { objective: "O2", q: "N'usoro ịgụ elu, ị na-amalite na:", options: ["Efu (0)", "Ngụkọta ahịa ahụ", "Ego onye ahịa nyere gị", "Ego dị na drọwa"], answer: 1, why: "Ị na-agụ elu site na ngụkọta ruo n'ego a kwụrụ." },
      { objective: "O2", q: "Gịnị mere ị ga-eji debe ego onye ahịa n'elu drọwa ruo mgbe ị gụchara chenji?", options: ["Ka unu abụọ hụ ego o ji kwụọ ma ọ bụrụ na ajụjụ adị", "Ka mmiri ghara imetụ ya", "Ka onye ahịa na-esote jiri ya", "N'ihi na drọwa ejupụtala"], answer: 0, why: "Ọ na-edozi ajụjụ ọ bụla dị ka \"Enyere m gị fifty\"." },
      { objective: "O3", q: "Gịnị bụ afọ kacha nta n'iwu federal iji zụọ ụtaba ma ọ bụ vape?", options: ["16", "18", "19", "21"], answer: 3, why: "Tobacco 21 buliri afọ federal ruo 21 na December 2019." },
      { objective: "O3", q: "FDA sịrị ka e lelee ID nwere foto maka ndị na-azụ ụtaba yiri ndị na-erubeghị afọ:", options: ["18", "21", "30", "40"], answer: 2, why: "Iwu FDA bụ ilele ID nwere foto maka onye ọ bụla na-erubeghị afọ 30." },
      { objective: "O3", q: "Kedu nlele ị nwere ike ime na ego $100?", options: ["Tụgharịa ya ma lee ka 100 n'akụkụ si n'agba kọpa gbanwee ka ọ bụrụ akwụkwọ ndụ", "Sie ya ísì", "Pịa ya abụọ", "Lelee ụbọchị e biri ya"], answer: 0, why: "Ink na-agbanwe agba so n'ihe nchekwa nke $100." },
      { objective: "O3", q: "Onye na-ekpebi afọ kacha nta iji REE mmanya dị ka cashier?", options: ["Onye ahịa", "Steeti ọ bụla, gbakwunyere iwu ụlọ ahịa gị", "FTC", "Cashier ahụ"], answer: 1, why: "Iwu steeti na-ekpebi afọ iji ree, ụlọ ahịa na-agbakwunyekarị iwu nke ha." },
      { objective: "O4", q: "Kedu ajụjụ ga-agwa gị ihe kacha ukwuu banyere ihe onye ahịa chọrọ?", options: ["\"Enwere m ike inyere gị aka?\"", "\"Ọ bụ naanị ihe ndị a?\"", "\"Gịnị ka ị ga-eji ya mee?\"", "\"Ego nkịtị ka ọ bụ kaadị?\""], answer: 2, why: "Ajụjụ mepere emepe na-enweta ihe karịrị ee ma ọ bụ mba." },
      { objective: "O4", q: "Gịnị bụ suggestive selling?", options: ["Ịgwa ndị ahịa ihe ha ga-azụrịrị", "Ire ngwa ahịa na-adịghị na shelf", "Ibuli ọnụahịa elu", "Ịkọwara onye ahịa otu ihe yitere ya nke ga-enyere ya aka"], answer: 3, why: "Ọ bụ otu add-on na-enye aka, ọ bụghị mmanye." },
      { objective: "O4", q: "Ị maghị ma hita (heater) dị mma iji n'ime ụlọ ịsa ahụ. Gịnị ka ị ga-ekwu?", options: ["\"Ka m chọpụtara gị\"", "\"Ee, ọ dị mma\"", "\"Amaghị m\" wee pụọ", "\"Ọ dịghị onye maara\""], answer: 0, why: "Ekepụtala ihe banyere ngwa ahịa; chọpụta n'aka onye ọrụ ibe ma ọ bụ na label." },
      { objective: "O5", q: "Nlọghachi dị n'èzí iwu ụlọ ahịa. Gịnị ka ị ga-eme?", options: ["Nyeghachi ego n'agbanyeghị", "Kpọọ onye njikwa", "Gwa onye ahịa ka ọ pụọ", "Nye store credit n'onwe gị"], answer: 1, why: "Nlọghachi dị n'èzí iwu na-aga n'aka onye njikwa." },
      { objective: "O5", q: "Gịnị bụ nzọụkwụ anọ maka onye ahịa iwe were?", options: ["Rụọ ụka, kọwaa, jụ, pụọ", "Leghara anya, chere, mụmụọ ọnụ ọchị, mechie", "Gee ntị, rịọ mgbaghara, dozie ma ọ bụ kpọta onye njikwa, kelee", "Kpọọ 911, mechie ụlọ ahịa, chere, meghee ọzọ"], answer: 2, why: "Nzọụkwụ anọ ndị ahụ na-eme ka iwe ọtụtụ ndị ahịa dajụọ." },
      { objective: "O5", q: "Ị hụrụ onye ohi ụlọ ahịa na-apụ. Kedu nhọrọ dị mma?", options: ["Gbasoo ya ọsọ", "Gbochie ọnụ ụzọ", "Jide akpa ya", "Gwa onye njikwa ma ọ bụ ndị nche"], answer: 3, why: "Agbasola ma ọ bụ jide ya; nchekwa bụ ihe mbụ." },
      { objective: "O5", q: "N'oge ohi, gịnị kacha mkpa?", options: ["Nchekwa gị na nchekwa ndị ọzọ", "Idobe ego ahụ", "Ịmata aha onye ohi ahụ", "Imecha ahịa ahụ"], answer: 0, why: "Gbasoo ọzụzụ gị, egbochila ya; a pụrụ inweta ego ọzọ." },
      { objective: "O6", q: "Kedu nke dị na nzọụkwụ mmechi gị?", options: ["Gbazinye onye ọrụ ibe drọwa gị", "Hapụ drọwa ahụ maka ụtụtụ", "Gị na onye njikwa gụọ drọwa gị ma kọọ over/short n'eziokwu", "Were ego fọdụrụ laa ụlọ"], answer: 2, why: "Ịgụ na ịkọ n'eziokwu na-emechi oge ọrụ gị n'ụzọ ziri ezi." },
      { objective: "O6", q: "Kedu nke bụ ezi mmemme asambodo ire ahịa?", options: ["Akwụkwọ ikike ire ahịa FTC", "RISE Up nke NRF Foundation", "Kaadị cashier OSHA", "Baajị ire ahịa Secret Service"], answer: 1, why: "RISE Up bụ mmemme ọzụzụ na asambodo ire ahịa nke NRF Foundation." },
      { objective: "O6", q: "Otu \"recruiter\" sị na ị ga-akwụ $50 iji nweta ọrụ cashier. Gịnị ka ị ga-eme?", options: ["Kwụọ ya ngwa ngwa", "Kwụọ ọkara ugbu a", "Nye ya nkọwa akaụntụ bank gị", "Akwụla; tinye akwụkwọ na peeji ọrụ ụlọ ahịa n'onwe ya"], answer: 3, why: "Ezi ndị were ọrụ anaghị arịọ gị ka ị kwụọ ego iji nweta ọrụ." }
    ]
  },
  // ---- ADDIE: Nyocha (Evaluation) ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 6, 8, 10, 13, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Okwu ịgụ ahịa", objective: "O1", notYet: "Nzọụkwụ na-efu ma ọ bụ ha adịghị n'usoro (dịka ọmụmaatụ, kupọn mgbe ngụkọta gasịrị).", meets: "Kelee, askanụ, kupọn, ngụkọta, ụgwọ, chenji na rịsịt, daalụ, n'usoro.", exceeds: "Ọ na-ekwukwa ihe a ga-eme mgbe ngwa ahịa askanụrụ ugboro abụọ ma ọ bụ ọnụahịa adabaghị." },
      { name: "Chenji ziri ezi", objective: "O2", notYet: "Ahịa omume erughị 5, ma ọ bụ chenji ọ bụla ezighị ezi.", meets: "Ahịa omume 5 n'ime 5 a gụghachiri ziri ezi site n'usoro ịgụ elu.", exceeds: "O nwere opekata mpe otu ahịa nwere mkpụrụ ego na ego akwụkwọ, e dekwara ngụ ahụ e kwuru n'olu." },
      { name: "Nlele ID na ego buru ibu", objective: "O3", notYet: "Enweghị nzọụkwụ ID, ma ọ bụ iwu afọ ezighị ezi.", meets: "Na-elele foto, oge ngwụcha na ụbọchị ọmụmụ, na tụgharịa-ìhè-metụ aka maka ego buru ibu; na-akpọ onye njikwa mgbe o doghị anya.", exceeds: "Ọ na-edepụtakwa ihe ngosi aghụghọ gift card na nzọụkwụ ụlọ ahịa maka ha." },
      { name: "Ịkọwa ihe na-enye aka", objective: "O4", notYet: "Enweghị ịkọwa ihe ọ bụla, ma ọ bụ nke na-amanye mmadụ.", meets: "Otu ahịrị ịkọwa ihe nwere uru na ụzọ nwayọ isi nabata mba.", exceeds: "Ọ na-amalite site n'ajụjụ mepere emepe nke na-eduga n'ịkọwa ihe ahụ." },
      { name: "Mgbe a ga-akpọ onye njikwa", objective: "O5", notYet: "Ọnọdụ erughị atọ, ma ọ bụ ọ sị ka a gbaso onye ohi ụlọ ahịa ọsọ.", meets: "Ọnọdụ atọ doro anya (dịka ọmụmaatụ, nlọghachi dị n'èzí iwu, ego dara nlele, ID o doghị anya) na nchekwa bụ ihe mbụ.", exceeds: "Ọ na-agbakwunye ihe a ga-agwa onye ahịa mgbe a na-eche onye njikwa." },
      { name: "Nzọụkwụ oge ọrụ na nzọụkwụ ọzọ", objective: "O6", notYet: "Nzọụkwụ mmeghe ma ọ bụ mmechi na-efu, ma ọ bụ enweghị nzọụkwụ ọzọ nwere ụbọchị.", meets: "Nzọụkwụ mmeghe, ịrụ na mmechi n'usoro, gbakwunyere nzọụkwụ asambodo ma ọ bụ ọrụ nwere ụbọchị.", exceeds: "Ọ na-akpọ aha otu ụlọ ahịa ma ọ bụ mmemme a kapịrị ọnụ na nzọụkwụ nke abụọ nwere ụbọchị." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere akwụkwọ maka ọrụ ire ahịa ma ọ bụ cashier n'ime ụbọchị 30 (nyocha nleba anya)",
      "Ndị na-amụ ihe e were n'ọrụ ire ahịa ndị ka nọ n'ọrụ mgbe ụbọchị 90 gachara",
      "Ndị na-amụ ihe debanyere aha ma ọ bụ nweta asambodo NRF Foundation RISE Up",
      "Ụlọ ahịa ma ọ bụ mmemme ọrụ ndị mmekọ na-akọ na ego na-efu obere na drọwa na ọzụzụ ngwa ngwa maka ndị ọrụ ọhụrụ si n'ihe ọmụmụ a"
    ]
  },
  // ---- ADDIE: Mmejuputa ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa iji gụọ nkuzi ndị ahụ",
      "Mkpụrụ ego na ego egwuregwu (ma ọ bụ mpempe akwụkwọ e dere ego na ha) maka omume chenji",
      "Ihe ole na ole dị n'ụlọ na tag ọnụahịa akwụkwọ maka ahịa omume",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ ndetu ekwentị, maka Kaadị Oge Ọrụ Cashier",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'obere oge"
    ],
    facilitatorNotes: [
      "N'otu, hazie rejista e chepụtara echepụta n'elu tebụl ma ka ndị mmadụ were oge ha mee cashier, onye ahịa na onye njikwa.",
      "Mee omume chenji ka egwuregwu nwere oge mgbe ndị na-amụ ihe na-eme ya nke ọma; izi ezi bụ ihe mbụ, ọsọ na-esote.",
      "Jiri naanị ego egwuregwu na ID e mepụtara emepụta; ajụla ndị na-amụ ihe ka ha gosi ID ha ma ọ bụ nkọwa kaadị ha.",
      "Lelee afọ steeti gị maka ire mmanya na ụtaba ma gwa ndị ntorobịa na-amụ ihe ihe metụtara ha.",
      "Jiri rubric tụọ Kaadị Oge Ọrụ Cashier ma ka ndị na-amụ ihe were ya gaa ajụjụ ọnụ ọrụ omume.",
      "Mmemme ndị bụ ndị mmekọ ọzụzụ RISE Up nwere ike ijikọ ihe ọmụmụ a na asambodo ahụ; lelee nrffoundation.org."
    ]
  }
};

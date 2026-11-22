"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-supply-chain.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-supply-chain-ig",
  lang: "ig",
  translationOf: "smallbiz-supply-chain",
  category: "Small Business",
  name: "Mmalite Usoro Ọbịbịa Ngwaahịa na Ngwaahịa Dị n'Ụlọ Ahịa",
  skills: "Ise eserese usoro ọbịbịa ngwaahịa gị, Ịchọta na ịtụnyere ndị na-ere gị ngwaahịa, Inye na ịlele ọda, Ịgụ ngwaahịa dị n'aka, Ịtọ oke ịzụtaghachi na ngwaahịa nchekwa, Idebe ndekọ ngwaahịa na spreadsheet site na nke bụ ụzọ abata bụ ụzọ apụ",
  outcome: "ịhọrọ na ịtụnyere ndị na-ere gị ngwaahịa, inye na ịlele ọda, ịgụ ngwaahịa gị, ịmata mgbe ị ga-azụtaghachi na ole ngwaahịa nchekwa ị ga-edebe, na idebe ndekọ ngwaahịa dị mfe na spreadsheet na-eji nke bụ ụzọ abata bụ ụzọ apụ (FIFO).",
  about: [
    "Ọ bụrụ na ngwaahịa i na-erekarị agwụ, ị na-atụfu ahịa na ndị ahịa. Ịzụta ọtụtụ karịa ihe ị chọrọ na-eme ka ego gị kpọnwụọ n'elu shelf, ụfọdụ ngwaahịa na-emebikwa ma ọ bụ pụọ n'ejiji. Ezi omume n'usoro ọbịbịa ngwaahịa na ngwaahịa dị n'aka na-eme ka i nwee ọnụọgụ ziri ezi nke ngwaahịa ziri ezi.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa na ndị ọrụ ha na-azụ ma na-ere ngwaahịa ma ọ bụ na-eji ihe ọrụ: ụlọ ahịa nta, ụgbọala na-ere nri, ụlọ ntutu isi, ebe a na-ere ihe ubi, ụlọ ahịa n'ịntanetị ma ọ bụ ụlọ ọrụ na-ehicha ihe. Ị ga-ese eserese usoro ọbịbịa ngwaahịa gị, chọta ma tụnyere ndị na-ere gị ngwaahịa, nye ma lelee ọda, gụọ ngwaahịa, mata oke ịzụtaghachi na ngwaahịa nchekwa, ma mee spreadsheet dị mfe na-egosi mgbe ị ga-azụtaghachi.",
    "Ihe ị chọrọ bụ naanị akwụkwọ na mkpịsị ode ma ọ bụ spreadsheet n'efu dị ka Google Sheets ma ọ bụ Microsoft Excel na weebụ. Ọmụmaatụ ndị a na-eji nọmba dị mfe, ya mere ị ga-esonye ọbụlagodi ma ọ bụrụ na mgbakọ adịghị gị mma.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ ị ga-eme ozugbo. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee spreadsheet ndekọ ngwaahịa dị mfe maka ihe ise ị na-azụ ma ọ bụ na-ere, nwere kọlụm maka aha ihe, SKU, onye isi na-ere gị, onye nnọchi na-ere gị, ọnụahịa otu, ole dị n'aka, ole a na-eji kwa ụbọchị n'ozuzu, oge ọbịbịa n'ụbọchị, ngwaahịa nchekwa, oke ịzụtaghachi (e ji formula gbakọọ ya) na akara ịzụtaghachi, ma dee otu ị ga-esi debe nke bụ ụzọ abata bụ ụzọ apụ n'elu shelf.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe na ndị na-elekọta obere azụmahịa na-azụ ma na-ere ngwaahịa ma ọ bụ na-eji ihe ọrụ, dị ka ụlọ ahịa, ụlọ ahịa nta, ụlọ nri, ụlọ ntutu isi, ndị na-ere n'ahịa na ndị na-ere n'ịntanetị; ọtụtụ n'ime ha bụ ndị agbụrụ pere mpe nwe ha.",
    startingPoint: "Ha na-azụ ngwaahịa na ihe ọrụ mgbe niile ma mara ihe ha na-erekarị. Ọtụtụ na-enye ọda site n'omume ma ọ bụ n'ncheta, anaghị agụ ngwaahịa n'oge a kara aka, ma ejibeghị oke ịzụtaghachi ma ọ bụ ndekọ ngwaahịa na spreadsheet.",
    gap: "Ọ bụrụ na ihe a na-erekarị agwụ, a na-atụfu ahịa; ịzụta ọtụtụ karịa na-ekpochi ego ma na-eweta ngwaahịa mebiri emebi ma ọ bụ nke a na-erebeghị. Ndị na-amụ ihe chọrọ omume dị mfe na spreadsheet na-agwa ha ihe ha ga-enye ọda, mgbe na ole, ma na-ejide mperi na ihe furu efu.",
    constraints: [
      "Mgbakọ dị mfe: ịmụba na formula spreadsheet dị mfe, e kọwara nzọụkwụ n'otu n'otu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere spreadsheet n'efu dị ka Google Sheets ma ọ bụ Excel na weebụ",
      "Oge: ihe dị ka nkeji 60 n'ozuzu; onye na-amụ ihe na-agụ ngwaahịa n'oge nke ya",
      "Ihe egwu aghụghọ site n'aka ndị ọhụrụ na-ere ngwaahịa na-achọ wire transfer, gift card ma ọ bụ crypto",
      "Nzuzo: ọ dịghị mkpa itinye ọnụahịa ndị na-ere gị ma ọ bụ ozi nzuzo azụmahịa n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ihe ise kacha mkpa n'azụmahịa gị", action: "ise eserese usoro ọbịbịa ngwaahịa gị ma chọpụta ebe ndị na-adịghị ike", standard: "ma kwadebe onye nnọchi na-ere gị ma ọ bụ ngwaahịa ndabere maka ebe ọ bụla na-adịghị ike" },
    { id: "O2", condition: "Mgbe e nyere gị otu ihe ị na-azụ", action: "ịtụnyere ndị atọ na-ere ya n'ọnụahịa ruru gị aka (landed cost), ọda kacha nta, oge ọbịbịa, usoro ịkwụ ụgwọ na ntụkwasị obi", standard: "ma nweta ọnụahịa e dere ede site n'aka onye ọ bụla ma lelee ihe ịdọ aka na ntị" },
    { id: "O3", condition: "Mgbe e nyere gị ọda ị ga-enye", action: "ide akwụkwọ ọda (purchase order) ma lelee ihe e bubatara megide ya", standard: "ma dee nsogbu ọ bụla n'akwụkwọ nnyefe ma kọọ ya n'otu ụbọchị ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị ngwaahịa gị na ndekọ gị", action: "ịgụ ngwaahịa gị ma chọpụta ọdịiche dị n'etiti ya na ndekọ gị", standard: "ma mee ka onye nke abụọ gụghachi ihe ọ bụla na-adabaghị" },
    { id: "O5", condition: "Mgbe e nyere gị ole a na-eji kwa ụbọchị na oge ọbịbịa nke otu ihe", action: "ịgbakọ ngwaahịa nchekwa ya na oke ịzụtaghachi ya", standard: "ma nweta oke ịzụtaghachi ziri ezi site na formula" },
    { id: "O6", condition: "Site n'iji spreadsheet n'efu", action: "ime mpempe ndekọ ngwaahịa na-egosi ihe ị ga-azụtaghachi, ma kwadebe otu ị ga-esi debe nke bụ ụzọ abata bụ ụzọ apụ n'elu shelf", standard: "ma were formula gbakọọ oke ịzụtaghachi na ọnọdụ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ndị na-ere gị ngwaahịa na inye ọda",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ise eserese usoro ọbịbịa ngwaahịa gị",
          minutes: 5,
          goal: "See eserese usoro ọbịbịa ngwaahịa maka ihe gị kacha mkpa ma hụ ebe o nwere ike ịgbaji.",
          text: [
            "Usoro ọbịbịa ngwaahịa (supply chain) bụ nzọụkwụ niile na-ebute ngwaahịa ruo n'aka onye ahịa gị: onye mere ya, onye na-ere n'ọtụtụ (wholesaler) ma ọ bụ onye na-ekesa ya, mbufe, shelf gị ma ọ bụ ụlọ nchekwa gị, na n'ikpeazụ onye ahịa. Ọbụlagodi obere azụmahịa nwere otu.",
            "Malite n'ihe ise gị kacha mkpa: ndị na-ewebata ego kacha ukwuu ma ọ bụ ndị ị na-enweghị ike ịrụ ọrụ n'enweghị ha. Maka nke ọ bụla, dee onye ị na-azụ ya n'aka, otu o si eru gị aka, ogologo oge ọ na-ewe, na ebe ị na-edebe ya.",
            "Wee chọọ ebe ndị na-adịghị ike. Ị na-azụ ihe dị mkpa n'aka naanị otu onye? Ọ na-esi ebe dị anya? Ọ na-emebi ngwa ngwa? Ọ bụ ihe oge ụfọdụ? Ebe na-adịghị ike bụ ebe ị ga-edebe ngwaahịa ndabere ma ọ bụ kwadebe onye nnọchi na-ere gị.",
            "Ngwa enyemaka AI nwere ike inyere gị aka iche ihe nwere ike ịga njọ maka ihe ọ bụla, dị ka onye na-ere gị imechi ụlọ ahịa ya, ọnụahịa ịrị elu na mberede ma ọ bụ mbufe ịbịa n'azụ oge. Gị na-ekpebi ihe egwu ndị bụ eziokwu maka azụmahịa gị."
          ],
          steps: ["Depụta ihe ise gị kacha mkpa.", "Maka nke ọ bụla, dee onye na-ere gị ya, otu e si ebubata ya, ogologo oge ọ na-ewe na ebe ị na-edebe ya.", "See akụ: onye na-ere gị gaa na mbufe, gaa n'aka gị, gaa n'aka onye ahịa.", "Gbaa ebe ndị na-adịghị ike gburugburu: otu onye na-ere gị, ebe dị anya, na-emebi ngwa ngwa, ihe oge ụfọdụ.", "Dee otu ngwọta maka ebe ọ bụla na-adịghị ike."],
          words: [["Usoro ọbịbịa ngwaahịa (supply chain)", "nzọụkwụ niile na-ebute ngwaahịa site n'aka onye mere ya ruo n'aka onye ahịa gị."], ["Onye na-ere gị ngwaahịa (supplier)", "azụmahịa ị na-azụ ngwaahịa ma ọ bụ ihe ọrụ n'aka ya."], ["Wholesaler ma ọ bụ onye na-ekesa (distributor)", "azụmahịa na-azụ n'ọtụtụ n'aka ndị na-emepụta ihe ma na-ere ya azụmahịa ndị ọzọ."], ["Ebe na-adịghị ike", "nzọụkwụ ebe ihe nwere ike ịga njọ n'ụzọ dị mfe."]],
          slides: [
            { title: "Ihe usoro ọbịbịa ngwaahịa bụ", bullets: ["Onye mere ya, wholesaler, mbufe", "Shelf gị ma ọ bụ ụlọ nchekwa gị", "Onye ahịa gị"] },
            { title: "See eserese ihe ise gị kacha mkpa", bullets: ["Onye ị na-azụ n'aka ya", "Otu o si eru gị aka na ogologo oge ọ na-ewe", "Ebe ị na-edebe ya"] },
            { title: "Chọta ebe ndị na-adịghị ike", bullets: ["Naanị otu onye na-ere gị", "Ebe dị anya ma ọ bụ mbufe na-adị nwayọọ", "Na-emebi ngwa ngwa ma ọ bụ ihe oge ụfọdụ"] },
            { title: "Dozie ebe ndị na-adịghị ike", bullets: ["Debe ntakịrị ngwaahịa ndabere", "Kwadebe onye nnọchi na-ere gị"] }
          ],
          tryIt: "See eserese usoro ọbịbịa ngwaahịa maka ihe ise gị kacha mkpa n'otu peeji. Gbaa ebe ọ bụla na-adịghị ike gburugburu ma dee otu ngwọta n'akụkụ nke ọ bụla, dị ka ịchọta onye nnọchi na-ere gị ma ọ bụ idebe ngwaahịa otu izu ọzọ.",
          youCanNow: "ise eserese usoro ọbịbịa ngwaahịa maka ihe gị kacha mkpa ma gosi ebe o nwere ike ịgbaji.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe ị ga-ebu ụzọ see eserese ya?", options: ["Ihe ise gị kacha mkpa na-ewebata ego kacha ukwuu ma ọ bụ ndị ị na-enweghị ike ịrụ ọrụ n'enweghị ha", "Ihe niile i rerela", "Naanị ihe ndị a na-ere na mbelata ọnụahịa", "Ihe ndị asọmpi gị na-ere"], answer: 0, why: "Malite n'ihe ise gị kacha mkpa n'ego ma ọ bụ n'uru." },
            { objective: "O1", q: "Ihe gị kacha mkpa na-esi ebe dị anya, ọ na-emebikwa ngwa ngwa. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Kaa ya akara dị ka ebe na-adịghị ike ma kwadebe onye nnọchi na-ere gị ma ọ bụ ngwaahịa ndabere", "Kwụsị ire ya ozugbo", "Hapụ AI ka o kpebie ihe egwu ndị bụ eziokwu"], answer: 1, why: "Ebe na-adịghị ike bụ ebe ị na-edebe ngwaahịa ndabere ma ọ bụ kwadebe onye nnọchi; gị na-ekpebi ihe egwu ndị bụ eziokwu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta na ịtụnyere ndị na-ere gị ngwaahịa",
          minutes: 6,
          goal: "Chọta ndị atọ nwere ike ire gị otu ihe ma tụnyere ha n'ihe karịrị ọnụahịa.",
          text: [
            "Ebe ị ga-achọta ndị na-ere gị ngwaahịa: ndị na-emepụta ihe na ụdị ngwaahịa (jụọ onye na-ekesa ya n'ebe ị nọ), wholesaler na ndị na-ekesa, ngosi ahịa (trade show), otu ndị nọ n'otu ụdị azụmahịa, ugbo na ndị na-emepụta ihe n'obodo gị, na ndị ọzọ nwe azụmahịa n'ụdị ọrụ gị. Chọọ n'ịntanetị aha ihe ahụ tinyere okwu wholesale ma ọ bụ distributor.",
            "Tụnyere ihe karịrị ọnụahịa. Lee ọnụahịa otu, ọda kacha nta, oge ọbịbịa, ego mbufe, usoro ịkwụ ụgwọ, ịdị mma na otu ha si bụrụ ndị a pụrụ ịtụkwasị obi. Gbakwunye ego mbufe na ụgwọ ndị ọzọ n'ọnụahịa iji nweta ọnụahịa ruru gị aka (landed cost), ezi ọnụahịa otu ihe mgbe ọ ruru gị aka.",
            "Rịọ onye ọ bụla na-ere ngwaahịa ka o nye gị ọnụahịa e dere ede (quote) ma, ọ bụrụ na ị nwere ike, ihe nlele (sample). Jụọ ndị ahịa ha ndị ọzọ ma ọ bụ gụọ ihe ndị mmadụ dere banyere ha. Debe opekata mpe otu onye nnọchi na-ere gị maka ihe ọ bụla dị mkpa.",
            "Kpachara anya maka ndị ọhụrụ na-ere ngwaahịa na-anabata naanị wire transfer, gift card ma ọ bụ crypto, ndị ọnụahịa ha dị ala karịa nke onye ọ bụla ọzọ nke ukwuu, ma ọ bụ ndị na-eme ka ị mee ngwa ngwa. Lelee adreesị na nọmba ekwentị ha, ma bido n'obere ọda."
          ],
          steps: ["Depụta ndị atọ nwere ike ire gị otu ihe.", "Rịọ onye ọ bụla ọnụahịa e dere ede: ọnụahịa otu, ọda kacha nta, oge ọbịbịa, mbufe na usoro ịkwụ ụgwọ.", "Gbakọọ ọnụahịa ruru gị aka maka otu ihe n'aka onye ọ bụla.", "Rịọ ihe nlele ma gụọ ihe ndị mmadụ dere ma ọ bụ jụọ ndị maara ha.", "Họrọ onye isi na-ere gị na onye nnọchi."],
          words: [["Ọda kacha nta (MOQ)", "ọda kacha nta onye na-ere ngwaahịa ga-anabata."], ["Oge ọbịbịa (lead time)", "oge site na mgbe i nyere ọda ruo mgbe ọ ruru gị aka."], ["Ọnụahịa ruru gị aka (landed cost)", "ọnụahịa zuru ezu nke otu ihe mgbe ọ ruru gị aka: ọnụahịa gbakwunyere mbufe na ụgwọ ndị ọzọ."], ["Usoro ịkwụ ụgwọ (payment terms)", "mgbe ị ga-akwụ ụgwọ; dịka ọmụmaatụ, Net 30 pụtara n'ime ụbọchị 30."], ["Ọnụahịa e dere ede (quote)", "ọnụahịa onye na-ere ngwaahịa dere ede nye gị."]],
          slides: [
            { title: "Ebe ị ga-achọta ndị na-ere gị ngwaahịa", bullets: ["Ndị na-emepụta ihe, wholesaler na ndị na-ekesa", "Ngosi ahịa na otu ndị nọ n'otu ụdị azụmahịa", "Ndị na-emepụta ihe n'obodo na ndị ọzọ nwe azụmahịa"] },
            { title: "Tụnyere ihe karịrị ọnụahịa", bullets: ["Ọnụahịa otu na ọda kacha nta", "Oge ọbịbịa na mbufe", "Usoro ịkwụ ụgwọ, ịdị mma, ntụkwasị obi"] },
            { title: "Ọnụahịa ruru gị aka", bullets: ["Ọnụahịa + mbufe + ụgwọ ndị ọzọ", "Kee ya n'ọnụọgụ ihe ndị ahụ", "Ezi ọnụahịa nke otu ihe"] },
            { title: "Nọrọ n'enweghị nsogbu", bullets: ["Nweta ọnụahịa e dere ede na ihe nlele", "Debe onye nnọchi na-ere gị", "Zere ndị na-achọ naanị wire, ọnụahịa dị ala nke ukwuu, ma ọ bụ ngwa ngwa"] }
          ],
          tryIt: "Họrọ otu ihe ị na-azụ. Chọta ndị atọ nwere ike ire gị ya ma dejupụta obere tebụl: ọnụahịa otu, ọda kacha nta, oge ọbịbịa, mbufe, usoro ịkwụ ụgwọ na ọnụahịa ruru gị aka maka otu. Gbaa onye isi ị họọrọ na onye nnọchi gburugburu. Ọmụmaatụ: ihe 100 n'ọnụahịa $2.00 nwere mbufe $30 bụ ọnụahịa ruru gị aka $2.30 maka otu.",
          youCanNow: "ịchọta ndị na-ere gị ngwaahịa, ịtụnyere ha n'ọnụahịa ruru gị aka, oge ọbịbịa, usoro na ntụkwasị obi, na ịhọrọ onye isi na-ere gị na onye nnọchi.",
          quickCheck: [
            { objective: "O2", q: "Kedu ezigbo ebe ịchọta ndị na-ere gị ngwaahịa?", options: ["Mgbasa ozi na social media na-ekwe nkwa ngwaahịa n'efu", "Naanị weebụsaịtị kacha dị ọnụ ala ị hụrụ", "Ngosi ahịa na otu ndị nọ n'otu ụdị azụmahịa", "Ozi email site n'aka ndị ị na-amaghị na-arịọ gift card"], answer: 2, why: "Ngosi ahịa, otu azụmahịa, wholesaler na ndị ọzọ nwe azụmahịa bụ ezi ebe ịchọta ndị na-ere ngwaahịa." },
            { objective: "O2", q: "Onye ọhụrụ na-ere ngwaahịa nwere ọnụahịa dị mma nke ukwuu. Gịnị ka ị ga-eme tupu i nye nnukwu ọda?", options: ["Nye ọda maka otu afọ ka ọnụahịa ahụ ghara ịgbanwe", "Kwụọ ụgwọ site na wire ozugbo", "Hapụ ịrịọ ọnụahịa e dere ede ka i chekwaa oge", "Nweta ọnụahịa e dere ede na ihe nlele, lelee adreesị na ekwentị ha, ma bido n'obere"], answer: 3, why: "Rịọ ọnụahịa e dere ede na ihe nlele, lelee ha, ma bido n'obere ọda." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inye na ịlele ọda",
          minutes: 5,
          goal: "Dee akwụkwọ ọda doro anya ma lelee ihe e bubatara megide ya.",
          text: [
            "Akwụkwọ ọda (purchase order ma ọ bụ PO) bụ ọda gị e dere ede nye onye na-ere gị ngwaahịa. Ọ na-egbochi mgbagwoju anya. O nwere nọmba PO, ụbọchị, onye na-ere gị, ihe ọ bụla na koodu ya, ọnụọgụ, ọnụahịa, ụbọchị na adreesị nnyefe, na usoro ịkwụ ụgwọ.",
            "Mgbe ihe e bubatara ruru, lelee ya tupu ị bịanye aka ma ọ bụ debe ya. Gụọ igbe na ihe ndị ahụ, lelee na ihe na nha ha dabara na PO, chọọ ihe mebiri emebi, ma lelee ụbọchị ọ ga-emebi (expiration date) na nri ma ọ bụ ngwaahịa ndị ọzọ na-emebi emebi.",
            "Dee nsogbu ọ bụla n'akwụkwọ nnyefe (delivery slip) ma gwa onye na-ere gị n'otu ụbọchị ahụ, tinyere foto. Akwụla ụgwọ maka ihe ị na-anataghị.",
            "Debe PO ọ bụla na akwụkwọ nnyefe ya na akwụkwọ ụgwọ ya (invoice) ọnụ. Ịtụnyere atọ ndị a tupu ị kwụọ ụgwọ ka a na-akpọ three-way match (ndabara atọ), ọ na-ejidekwa mperi na ụgwọ karịrị akarị."
          ],
          steps: ["Dee PO nwere nọmba, ụbọchị, onye na-ere gị, ihe ndị ahụ, ọnụọgụ, ọnụahịa, ụbọchị nnyefe na usoro.", "Mgbe ihe e bubatara ruru, gụọ ya ma tụnyere ya na PO.", "Lelee ihe mebiri emebi na ụbọchị ọ ga-emebi.", "Dee nsogbu n'akwụkwọ nnyefe, see foto ma gwa onye na-ere gị n'ụbọchị ahụ.", "Tupu ị kwụọ ụgwọ, tụnyere PO, akwụkwọ nnyefe na akwụkwọ ụgwọ."],
          words: [["Akwụkwọ ọda (PO)", "ọda gị e dere ede nye onye na-ere gị ngwaahịa."], ["Akwụkwọ nnyefe (delivery slip)", "akwụkwọ na-eso ihe e bubatara na-egosi ihe e zitere."], ["Akwụkwọ ụgwọ (invoice)", "ụgwọ onye na-ere gị ngwaahịa na-arịọ."], ["Ndabara atọ (three-way match)", "ịlele na PO, akwụkwọ nnyefe na akwụkwọ ụgwọ dabara tupu ị kwụọ ụgwọ."]],
          slides: [
            { title: "Akwụkwọ ọda doro anya", bullets: ["Nọmba PO, ụbọchị na onye na-ere gị", "Ihe ndị ahụ, koodu, ọnụọgụ na ọnụahịa", "Ụbọchị nnyefe, adreesị na usoro"] },
            { title: "Lelee ihe ọ bụla e bubatara", bullets: ["Gụọ igbe na ihe ndị ahụ", "Hụ na ihe na nha dabara na PO", "Lelee ihe mebiri emebi na ụbọchị ọ ga-emebi"] },
            { title: "Nsogbu?", bullets: ["Dee ya n'akwụkwọ nnyefe", "See foto, ma gwa onye na-ere gị n'otu ụbọchị ahụ", "Akwụla ụgwọ maka ihe ị na-anataghị"] },
            { title: "Ndabara atọ", bullets: ["PO + akwụkwọ nnyefe + akwụkwọ ụgwọ", "Tụnyere ha tupu ị kwụọ ụgwọ"] }
          ],
          tryIt: "Dee akwụkwọ ọda ọmụmaatụ maka otu ihe site na tebụl ndị na-ere gị, nwere akụkụ niile dị na nkuzi a. Wee dee ndepụta nlele nwere ahịrị ise ị ga-eji mgbe ihe e bubatara ruru ọzọ.",
          youCanNow: "ide akwụkwọ ọda doro anya, ịlele ihe e bubatara megide ya, na ịtụnyere akwụkwọ ndị ahụ tupu ị kwụọ ụgwọ.",
          quickCheck: [
            { objective: "O3", q: "Kedu ihe kwesịrị ịdị n'akwụkwọ ọda?", options: ["Ihe ọ bụla na koodu ya, ọnụọgụ ya na ọnụahịa ya", "Aha ndị ahịa gị", "Okwuntughe ụlọ akụ gị", "Ebumnuche ahịa gị"], answer: 0, why: "PO na-egosi nọmba PO, ụbọchị, onye na-ere gị, ihe ndị ahụ na koodu ha, ọnụọgụ, ọnụahịa, nnyefe na usoro." },
            { objective: "O3", q: "Igbe yogurt ruru gị aka, ụbọchị ọ ga-emebi agafeela. Gịnị ka ị ga-eme?", options: ["Tinye ya n'elu shelf ngwa ngwa", "Dee ya n'akwụkwọ nnyefe, see foto, gwa onye na-ere gị n'ụbọchị ahụ ma akwụla ụgwọ ya", "Bịanye aka n'akwụkwọ ahụ ma mee mkpesa n'ọnwa ọzọ", "Tụfuo ya ma ekwula ihe ọ bụla"], answer: 1, why: "Lelee ụbọchị tupu ị bịanye aka, dee nsogbu n'akwụkwọ nnyefe ma akwụla ụgwọ maka ihe ị na-anataghị nke ọma." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ndị na-ere gị ngwaahịa na inye ọda",
        questions: [
          { objective: "O1", q: "Ị na-azụ ihe i na-erekarị n'aka naanị otu onye. Gịnị bụ ihe egwu ya?", options: ["Ọ dịghị ihe egwu ọ bụla", "Ọ bụrụ na onye ahụ nwee nsogbu, ihe ahụ ga-agwụ gị", "Ọnụahịa gị ga na-agbada mgbe niile", "Ndị ahịa ga-azụkwu ihe"], answer: 1, why: "Otu onye na-ere gị bụ ebe na-adịghị ike; onye nnọchi na-echebe gị." },
          { objective: "O2", q: "Gịnị bụ oge ọbịbịa (lead time)?", options: ["Oge site na mgbe i nyere ọda ruo mgbe ngwaahịa ruru gị aka", "Oge onye ahịa na-eche n'ahịrị", "Ogologo oge ngwaahịa na-anọ n'elu shelf", "Oge mmeghe azụmahịa onye na-ere gị"], answer: 0, why: "Oge ọbịbịa bụ ogologo oge ọda na-ewe iru gị aka." },
          { objective: "O2", q: "Onye na-ere A na-ere ihe 100 n'ọnụahịa $200, mbufe bụ $50. Gịnị bụ ọnụahịa ruru gị aka maka otu?", options: ["$2.00", "$2.25", "$0.50", "$2.50"], answer: 3, why: "$200 gbakwunyere $50 bụ $250; kee ya n'ihe 100, ọ bụ $2.50 maka otu." },
          { objective: "O2", q: "Onye ọhụrụ na-ere ngwaahịa nwere ọnụahịa dị ala nke ukwuu, ọ na-anabatakwa naanị gift card. Gịnị ka ị ga-eme?", options: ["Nye nnukwu ọda ozugbo", "Kwụọ ụgwọ site na gift card", "Kpachara anya: lelee ha ma zere ụzọ ịkwụ ụgwọ ahụ", "Zipu ihe ị ji abanye n'ụlọ akụ gị"], answer: 2, why: "Ịnabata naanị gift card na ọnụahịa dị ala nke ukwuu bụ ihe ịdọ aka na ntị nke aghụghọ." },
          { objective: "O3", q: "Igbe abụọ adịghị n'ihe e bubatara. Gịnị ka ị kwesịrị ime?", options: ["Bịanye aka ma ekwula ihe ọ bụla", "Kwụọ ụgwọ maka ihe niile n'agbanyeghị", "Tụfuo akwụkwọ nnyefe", "Dee ya n'akwụkwọ nnyefe, see foto ma gwa onye na-ere gị n'ụbọchị ahụ"], answer: 3, why: "Ide nsogbu ozugbo na-enyere gị aka inweta ihe i kwụrụ ụgwọ ya." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchịkwa ngwaahịa dị n'aka",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịgụ ngwaahịa gị",
          minutes: 5,
          goal: "Gụọ ngwaahịa gị nke ọma ma chọpụta ọdịiche dị n'etiti ya na ndekọ gị.",
          text: [
            "Ngwaahịa dị n'aka (inventory) bụ ngwaahịa na ihe ọrụ ị nwere ugbu a. Ndekọ gị na-ekwu ole i kwesịrị inwe; ịgụ ya na-egosi ole i nwere n'ezie. A na-akpọkarị ọdịiche ahụ shrinkage (ihe furu efu): ihe e zuru, ihe mebiri emebi, ihe rere ure ma ọ bụ mperi.",
            "Ọgụgụ zuru ezu pụtara ịgụ ihe niile, ọtụtụ mgbe otu ugboro ma ọ bụ ugboro abụọ n'afọ, mgbe azụmahịa mechiri emechi. Cycle count (ọgụgụ n'usoro) pụtara ịgụ ihe ole na ole kwa izu, ka e wee gụọ ihe ọ bụla ka oge na-aga. Gụọ ihe gị kacha dị oke ọnụ ma ọ bụ ndị a na-ere ngwa ngwa ugboro ugboro karịa.",
            "Iji gụọ nke ọma: nye ihe ọ bụla SKU (koodu dị mkpụmkpụ), gụọ n'otu nha ahụ ị na-azụ ma na-ere ya, gụọ shelf n'otu n'otu, ma mee ka onye nke abụọ gụghachi ihe ọ bụla na-adabaghị. Dee ọnụọgụ ahụ, ụbọchị na onye gụrụ ya.",
            "Wee tụnyere ọgụgụ gị na ndekọ gị. Chọpụta ihe mere nnukwu ọdịiche ji dị, ma dozie ndekọ gị ka ha dabara n'ezi ọgụgụ ahụ."
          ],
          steps: ["Nye ihe ọ bụla SKU na nha, dị ka otu, igbe ma ọ bụ pound.", "Họrọ ọgụgụ zuru ezu ma ọ bụ cycle count kwa izu.", "Gụọ shelf n'otu n'otu ma dee ọnụọgụ, ụbọchị na onye gụrụ ya.", "Mee ka onye nke abụọ gụghachi ihe ọ bụla na-adabaghị.", "Tụnyere ya na ndekọ gị, chọpụta ihe kpatara nnukwu ọdịiche ma melite ndekọ."],
          words: [["Ngwaahịa dị n'aka (inventory)", "ngwaahịa na ihe ọrụ ị nwere ugbu a."], ["SKU", "stock keeping unit: koodu dị mkpụmkpụ maka ihe ọ bụla ị na-edebe."], ["Cycle count", "ịgụ ihe ole na ole n'otu oge n'usoro a kara aka."], ["Shrinkage", "ngwaahịa furu efu n'ihi izu ohi, imebi, ire ure ma ọ bụ mperi."]],
          slides: [
            { title: "Ndekọ na eziokwu", bullets: ["Ndekọ: ole i kwesịrị inwe", "Ọgụgụ: ole i nwere n'ezie", "Ọdịiche ahụ bụ shrinkage"] },
            { title: "Ụzọ abụọ isi gụọ", bullets: ["Ọgụgụ zuru ezu: ihe niile, otu ugboro ma ọ bụ ugboro abụọ n'afọ", "Cycle count: ihe ole na ole kwa izu", "Gụọ ihe dị oke ọnụ na ndị a na-ere ngwa ngwa ugboro ugboro"] },
            { title: "Gụọ nke ọma", bullets: ["SKU na nha maka ihe ọ bụla", "Shelf n'otu n'otu; dee ụbọchị na onye gụrụ", "Gụghachi ihe ọ bụla na-adabaghị"] },
            { title: "Mgbe ọgụgụ gwụrụ", bullets: ["Tụnyere ya na ndekọ gị", "Chọpụta ihe kpatara nnukwu ọdịiche", "Melite ndekọ"] }
          ],
          tryIt: "Họrọ ihe ise. Nye nke ọ bụla SKU na nha. Gụọ ha ugbu a ma dee ọnụọgụ, ụbọchị na aha gị. Ọ bụrụ na i nwere ndekọ, tụnyere ha ma dee ọdịiche maka nke ọ bụla.",
          youCanNow: "ịgụ ngwaahịa gị nke ọma, ime cycle count, na ịchọta shrinkage site n'ịtụnyere ọgụgụ na ndekọ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ọgụgụ zuru ezu?", options: ["Ịgụ otu shelf", "Ịgụ naanị ihe dị oke ọnụ", "Ịgụ ihe niile, ọtụtụ mgbe otu ugboro ma ọ bụ ugboro abụọ n'afọ", "Ịkọ nkọ site n'ahịa e rere"], answer: 2, why: "Ọgụgụ zuru ezu pụtara ịgụ ihe niile, ọtụtụ mgbe otu ugboro ma ọ bụ ugboro abụọ n'afọ." },
            { objective: "O4", q: "Ị hụrụ nnukwu ọdịiche n'etiti ọgụgụ gị na ndekọ gị. Gịnị ka ị ga-eme mgbe a gụghachiri ya?", options: ["Gbanwee ọgụgụ ahụ ka ọ dabara na ndekọ", "Leghara ya anya", "Hichapụ ihe ahụ", "Chọpụta ihe mere o ji mee ma dozie ndekọ gị ka ọ dabara n'ezi ọgụgụ"], answer: 3, why: "Chọpụta ihe mere nnukwu ọdịiche ji dị ma dozie ndekọ gị ka ọ dabara n'ezi ọgụgụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Oke ịzụtaghachi na ngwaahịa nchekwa",
          minutes: 6,
          goal: "Gbakọọ mgbe ị ga-azụtaghachi otu ihe na ole ngwaahịa ndabere ị ga-edebe.",
          text: [
            "Oke ịzụtaghachi (reorder point) bụ ọnụọgụ ngwaahịa na-agwa gị ka i nye ọda ọzọ. Ọ bụrụ na i nye ọda mgbe i ruru ya, ngwaahịa ọhụrụ kwesịrị iru gị aka tupu nke ị nwere agwụ.",
            "Oke ịzụtaghachi = ole a na-eji kwa ụbọchị n'ozuzu x oge ọbịbịa n'ụbọchị + ngwaahịa nchekwa. Ọmụmaatụ: ị na-ere akpa osikapa 10 kwa ụbọchị, onye na-ere gị na-ewe ụbọchị 4 iji bubata ya. N'enweghị ihe ndabere ọ bụla, ị chọrọ 10 x 4 = akpa 40 ka o ruo mgbe ọda ahụ bịara.",
            "Ngwaahịa nchekwa (safety stock) bụ ngwaahịa ndabere maka ihe mberede: ụbọchị ahịa jupụtara ma ọ bụ ụgbọala bịara n'azụ oge. Ụzọ dị mfe: kpebie ụbọchị ole ọzọ ị ga-ekpuchi ma mụba ya n'ole a na-eji kwa ụbọchị. Ọ bụrụ ụbọchị 2 ọzọ, ngwaahịa nchekwa bụ 10 x 2 = akpa 20. Ya mere, oke ịzụtaghachi bụ 40 + 20 = akpa 60. Mgbe ọ fọdụrụ 60, nye ọda.",
            "Debe ngwaahịa nchekwa karịa maka ihe kacha mkpa, ihe ndị oge ọbịbịa ha dị ogologo ma ọ bụ a pụghị ịtụkwasị ya obi, na ihe ị na-azụ n'aka naanị otu onye. Debe obere maka ihe na-emebi ngwa ngwa ma ọ bụ ndị ọ na-efu ọtụtụ ego idebe. Lelee nọmba ndị a ọnwa ole na ole ọ bụla, n'ihi na ahịa na oge ọbịbịa na-agbanwe."
          ],
          steps: ["Chọta ole a na-eji kwa ụbọchị n'ozuzu: ihe e jiri n'ime ụbọchị 30 kere 30.", "Chọta oge ọbịbịa n'ụbọchị site n'aka onye na-ere gị.", "Họrọ ụbọchị ọzọ ị ga-ekpuchi ma mụba ya n'ole a na-eji kwa ụbọchị: nke ahụ bụ ngwaahịa nchekwa.", "Oke ịzụtaghachi = ole a na-eji kwa ụbọchị x oge ọbịbịa + ngwaahịa nchekwa.", "Lelegharịa nọmba ndị ahụ ọnwa ole na ole ọ bụla."],
          words: [["Oke ịzụtaghachi (reorder point)", "ọnụọgụ ngwaahịa na-agwa gị ka i nye ọda ọzọ."], ["Ngwaahịa nchekwa (safety stock)", "ngwaahịa ndabere e debere maka ihe mberede dị ka ụbọchị ahịa jupụtara ma ọ bụ nnyefe bịara n'azụ oge."], ["Ole a na-eji kwa ụbọchị n'ozuzu", "ọnụọgụ ihe ị na-eji ma ọ bụ na-ere n'ụbọchị nkịtị."]],
          slides: [
            { title: "Oke ịzụtaghachi", bullets: ["Ọnụọgụ na-agwa gị ka i nye ọda", "Ngwaahịa ọhụrụ na-eru tupu nke ị nwere agwụ"] },
            { title: "Formula ahụ", bullets: ["Ole a na-eji kwa ụbọchị x oge ọbịbịa + ngwaahịa nchekwa"] },
            { title: "Ọmụmaatụ a gbakọrọ", bullets: ["Akpa 10 kwa ụbọchị, oge ọbịbịa ụbọchị 4: akpa 40", "Ngwaahịa nchekwa, ụbọchị 2 ọzọ: akpa 20", "Oke ịzụtaghachi: akpa 60"] },
            { title: "Ole ngwaahịa nchekwa", bullets: ["Karịa: ihe dị mkpa, ndị na-ere nwayọọ ma ọ bụ a pụghị ịtụkwasị obi", "Obere: ihe na-emebi ma ọ bụ ndị ọ na-efu ego idebe", "Lelegharịa ya ọnwa ole na ole ọ bụla"] }
          ],
          tryIt: "Maka otu ihe, chọta ole a na-eji kwa ụbọchị n'ozuzu na oge ọbịbịa ya. Họrọ ụbọchị ọzọ ị ga-ekpuchi. Gbakọọ ngwaahịa nchekwa na oke ịzụtaghachi ma dee ha na kaadị ị ga-edebe n'akụkụ ihe ahụ.",
          youCanNow: "ịgbakọ oke ịzụtaghachi na ngwaahịa nchekwa maka otu ihe ma mara mgbe ị ga-edebe karịa ma ọ bụ obere.",
          quickCheck: [
            { objective: "O5", q: "Ị na-eji ihe 6 kwa ụbọchị, ị chọkwara ikpuchi ụbọchị 3 ọzọ. Gịnị bụ ngwaahịa nchekwa?", options: ["18", "9", "3", "63"], answer: 0, why: "Ngwaahịa nchekwa bụ ụbọchị ọzọ mụbara n'ole a na-eji kwa ụbọchị: 3 x 6 = 18." },
            { objective: "O5", q: "Oge ọbịbịa onye na-ere gị si n'ụbọchị 4 rịgoro n'ụbọchị 8. Gịnị ka ị ga-eme?", options: ["Debe otu oke ịzụtaghachi ahụ", "Gbakọghachi oke ịzụtaghachi site n'oge ọbịbịa ọhụrụ", "Kwụsị iji ngwaahịa nchekwa", "Nye ọda naanị mgbe ihe ahụ gwụrụ"], answer: 1, why: "Lelee nọmba ndị ahụ mgbe oge ọbịbịa gbanwere, n'ihi na oke ịzụtaghachi dabere na ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ndekọ ngwaahịa na spreadsheet na FIFO",
          minutes: 6,
          goal: "Mee spreadsheet na-egosi ihe ị ga-azụtaghachi ma mee ka ngwaahịa na-aga n'usoro nke bụ ụzọ abata bụ ụzọ apụ.",
          text: [
            "Spreadsheet n'efu, dị ka Google Sheets ma ọ bụ Microsoft Excel na weebụ, nwere ike ijikwa ngwaahịa obere azụmahịa. Mee otu ahịrị maka ihe ọ bụla, na kọlụm ndị a: Aha ihe, SKU, Onye isi na-ere gị, Onye nnọchi na-ere gị, Ọnụahịa otu, Ole dị n'aka, Ole a na-eji kwa ụbọchị, Oge ọbịbịa (ụbọchị), Ngwaahịa nchekwa, Oke ịzụtaghachi na Ọnọdụ.",
            "Hapụ spreadsheet ka o mee mgbakọ. Ọ bụrụ na Ole a na-eji kwa ụbọchị dị na kọlụm G, Oge ọbịbịa na H, Ngwaahịa nchekwa na I, oke ịzụtaghachi na J2 bụ =G2*H2+I2. Ọnọdụ na K2 nwere ike ịbụ =IF(F2<=J2,\"REORDER\",\"OK\"), nke na-egosi REORDER (zụtaghachi) mgbe ole dị n'aka (kọlụm F) ruru ma ọ bụ dị n'okpuru oke ịzụtaghachi. Detuo formula ndị ahụ gaa n'ala. Melite Ole dị n'aka mgbe ọgụgụ ọ bụla ma ọ bụ nnyefe ọ bụla gwụrụ.",
            "Nke bụ ụzọ abata bụ ụzọ apụ (first-in-first-out ma ọ bụ FIFO) pụtara na ị na-ebu ụzọ ree ma ọ bụ jiri ngwaahịa kacha ochie. Ọ na-egbochi nri na ngwaahịa ndị ọzọ imebi n'azụ shelf. Mgbe ngwaahịa ọhụrụ ruru, tinye ya n'azụ ma ọ bụ n'okpuru nke ochie, ma dee ụbọchị i natara ya n'igbe ọ bụla.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ide ma ọ bụ dozie formula spreadsheet. Kọwaa kọlụm gị n'okwu; ọ dịghị mkpa ka ị kesaa ọnụahịa ndị na-ere gị ma ọ bụ ozi nzuzo azụmahịa ndị ọzọ."
          ],
          steps: ["Meghee spreadsheet n'efu ma tinye isiokwu kọlụm iri na otu ahụ.", "Dejupụta ihe ise.", "Na kọlụm Oke ịzụtaghachi, dee =G2*H2+I2 ma detuo ya gaa n'ala.", "Na kọlụm Ọnọdụ, dee =IF(F2<=J2,\"REORDER\",\"OK\") ma detuo ya gaa n'ala.", "Melite Ole dị n'aka mgbe ọgụgụ ọ bụla ma ọ bụ nnyefe ọ bụla gwụrụ.", "N'elu shelf, tinye ngwaahịa ọhụrụ n'azụ nke ochie ma dee ụbọchị n'igbe ọ bụla."],
          words: [["Spreadsheet", "okporo ahịrị na kọlụm nwere ike ime mgbakọ maka gị."], ["Formula", "ntụziaka dị n'ime cell spreadsheet na-agbakọ ihe, na-amalite na =."], ["Nke bụ ụzọ abata bụ ụzọ apụ (FIFO)", "ibu ụzọ jiri ma ọ bụ ree ngwaahịa kacha ochie."]],
          slides: [
            { title: "Otu ahịrị maka ihe ọ bụla", bullets: ["Aha ihe, SKU, onye isi na onye nnọchi na-ere gị", "Ọnụahịa otu, ole dị n'aka, ole a na-eji kwa ụbọchị, oge ọbịbịa", "Ngwaahịa nchekwa, oke ịzụtaghachi, ọnọdụ"] },
            { title: "Hapụ formula ka ha rụọ ọrụ", bullets: ["Oke ịzụtaghachi: =G2*H2+I2", "Ọnọdụ: =IF(F2<=J2,\"REORDER\",\"OK\")", "Detuo gaa n'ala; melite ole dị n'aka mgbe ọgụgụ gwụrụ"] },
            { title: "Nke bụ ụzọ abata bụ ụzọ apụ", bullets: ["Buru ụzọ ree ma ọ bụ jiri ngwaahịa kacha ochie", "Ngwaahịa ọhụrụ na-aga n'azụ ma ọ bụ n'okpuru nke ochie", "Dee ụbọchị n'igbe ọ bụla"] },
            { title: "AI nwere ike inye aka na formula", bullets: ["Kọwaa kọlụm gị n'okwu", "Ọ dịghị mkpa ikesa ọnụahịa ma ọ bụ ozi nzuzo"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee spreadsheet ndekọ ngwaahịa gị maka ihe ise nwere kọlụm iri na otu niile, formula oke ịzụtaghachi na akara REORDER. Wee dee ahịrịokwu abụọ banyere otu ị ga-esi debe nke bụ ụzọ abata bụ ụzọ apụ n'elu shelf gị.",
          youCanNow: "idebe ndekọ ngwaahịa dị mfe na spreadsheet na-egosi mgbe ị ga-azụtaghachi, na ime ka ngwaahịa na-aga n'usoro nke bụ ụzọ abata bụ ụzọ apụ.",
          quickCheck: [
            { objective: "O6", q: "Na mpempe nkuzi a, gịnị ka =G2*H2+I2 na-agbakọ?", options: ["Ọnụahịa otu", "Ọnọdụ", "Oke ịzụtaghachi", "Ọnụọgụ ndị na-ere gị"], answer: 2, why: "Ole a na-eji kwa ụbọchị mụbara n'oge ọbịbịa gbakwunyere ngwaahịa nchekwa na-enye oke ịzụtaghachi." },
            { objective: "O6", q: "Ị chọrọ ka AI nyere gị aka dozie formula spreadsheet. Gịnị ka ị ga-ekesa?", options: ["Ọnụahịa ndị na-ere gị na ozi ụlọ akụ gị", "Ndepụta ndị ahịa gị niile", "Okwuntughe gị", "Nkọwa kọlụm gị n'okwu"], answer: 3, why: "Kọwaa kọlụm gị; ọ dịghị mkpa ikesa ọnụahịa ma ọ bụ ozi nzuzo azụmahịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchịkwa ngwaahịa dị n'aka",
        questions: [
          { objective: "O4", q: "Ịgụ ihe ole na ole kwa izu ka e wee gụọ ihe ọ bụla ka oge na-aga ka a na-akpọ:", options: ["Ọgụgụ zuru ezu", "Shrinkage", "Cycle count", "Akwụkwọ ọda"], answer: 2, why: "Cycle count na-ekesa ọgụgụ n'ime afọ niile." },
          { objective: "O5", q: "Ị na-eji ihe 5 kwa ụbọchị, oge ọbịbịa bụ ụbọchị 6, ngwaahịa nchekwa bụ 10. Gịnị bụ oke ịzụtaghachi?", options: ["30", "40", "11", "16"], answer: 1, why: "5 x 6 = 30, gbakwunye ngwaahịa nchekwa 10 = 40." },
          { objective: "O5", q: "Kedu ihe kwesịrị inwekarị ngwaahịa nchekwa karịa?", options: ["Ihe dị mkpa site n'aka otu onye na-ere nwayọọ, a pụghị ịtụkwasị obi", "Ihe na-emebi n'otu ụbọchị", "Ihe ị na-adịghị ere ọzọ", "Ihe dị oke ọnụ nke a na-ere otu ugboro n'afọ"], answer: 0, why: "Ihe dị mkpa nwere ọbịbịa nwere ihe egwu chọrọ ndabere karịa." },
          { objective: "O6", q: "Na spreadsheet ahụ, ole dị n'aka bụ 25, oke ịzụtaghachi bụ 30. Gịnị ka ọnọdụ na-egosi?", options: ["OK", "Mperi", "Ọ dịghị ihe", "REORDER"], answer: 3, why: "Ole dị n'aka ruru ma ọ bụ dị n'okpuru oke ịzụtaghachi, ya mere formula na-egosi REORDER." },
          { objective: "O6", q: "Mmiri ara ehi ọhụrụ ruru. Site na FIFO, ebee ka ị ga-etinye ya?", options: ["N'ihu mmiri ara ehi ochie", "N'azụ mmiri ara ehi ochie", "N'ime ebe a na-atụfu ahịhịa", "N'elu nke ochie ka e buru ụzọ ree ya"], answer: 1, why: "FIFO na-etinye ngwaahịa ọhụrụ n'azụ nke ochie ka e buru ụzọ ree nke kacha ochie." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Usoro Ọbịbịa Ngwaahịa na Ngwaahịa Dị n'Ụlọ Ahịa",
    questions: [
      { objective: "O1", q: "Gịnị bụ usoro ọbịbịa ngwaahịa?", options: ["Nzọụkwụ niile na-ebute ngwaahịa site n'aka onye mere ya ruo n'aka onye ahịa gị", "Agbụ na-akpọchi ụlọ nchekwa gị", "Ndepụta ndị ahịa", "Ụdị mbinye ego"], answer: 0, why: "Usoro ọbịbịa ngwaahịa gụnyere nzọụkwụ ọ bụla site n'onye mere ya ruo n'onye ahịa." },
      { objective: "O1", q: "Kedu nke bụ ebe na-adịghị ike n'usoro ọbịbịa ngwaahịa?", options: ["Ndị abụọ a pụrụ ịtụkwasị obi na-ere gị", "Ihe dị mkpa site n'aka naanị otu onye na-ere gị", "Oge ọbịbịa dị mkpụmkpụ", "Ọgụgụ ziri ezi"], answer: 1, why: "Ịdabere n'otu onye na-ere gị nwere ihe egwu." },
      { objective: "O1", q: "Gịnị bụ ezigbo ngwọta maka ebe na-adịghị ike?", options: ["Leghara ya anya", "Bulie ọnụahịa", "Kwadebe onye nnọchi na-ere gị ma ọ bụ debe ngwaahịa ndabere", "Kwụsị ịgụ ngwaahịa"], answer: 2, why: "Onye nnọchi na ngwaahịa ndabere na-echebe gị mgbe ihe gbajiri." },
      { objective: "O2", q: "Ọda kacha nta (MOQ) bụ:", options: ["Ihe kacha ukwuu ị nwere ike ịzụta", "Oge ọda na-ewe", "Adreesị onye na-ere gị", "Ọda kacha nta onye na-ere gị ga-anabata"], answer: 3, why: "MOQ bụ ọda kacha nta onye na-ere ngwaahịa na-anabata." },
      { objective: "O2", q: "Gịnị bụ ọnụahịa ruru gị aka (landed cost)?", options: ["Ọnụahịa gbakwunyere mbufe na ụgwọ ndị ọzọ, maka otu ihe", "Naanị ọnụahịa dị na weebụsaịtị", "Ọnụahịa tiketi ụgbọelu", "Ụgwọ ụlọ gị"], answer: 0, why: "Ọnụahịa ruru gị aka bụ ezi ọnụahịa otu ihe mgbe ọ ruru gị aka." },
      { objective: "O2", q: "Usoro ịkwụ ụgwọ Net 30 pụtara:", options: ["Kwụọ 30% ugbu a", "Kwụọ n'ime ụbọchị 30", "Kwụọ mgbe ọda 30 gasịrị", "Kwụọ $30"], answer: 1, why: "Net 30 pụtara na a ga-akwụ ego niile n'ime ụbọchị 30." },
      { objective: "O2", q: "Tupu ị họrọ onye ọhụrụ na-ere gị ngwaahịa, ọ bụ amamihe:", options: ["Ịkwụ ụgwọ otu afọ niile n'ihu", "Iziga ihe ị ji abanye n'ụlọ akụ gị", "Inweta ọnụahịa e dere ede na ihe nlele, ma bido n'obere", "Ịkwụ ụgwọ site na gift card"], answer: 2, why: "Ọnụahịa e dere ede, ihe nlele na obere ọda mbụ na-ebelata ihe egwu gị." },
      { objective: "O3", q: "Gịnị bụ akwụkwọ ọda (purchase order)?", options: ["Akwụkwọ ụgwọ onye na-ere gị", "Akwụkwọ ndenye ego onye ahịa", "Ụgbọala na-ebubata ngwaahịa", "Ọda gị e dere ede nye onye na-ere gị ngwaahịa"], answer: 3, why: "PO bụ ọda gị e dere ede nke na-egosi ihe ndị ahụ, ọnụọgụ na ọnụahịa." },
      { objective: "O3", q: "Ndabara atọ (three-way match) na-atụnyere:", options: ["PO, akwụkwọ nnyefe na akwụkwọ ụgwọ", "Akara ụlọ ọrụ ndị atọ na-ere gị", "Usoro oge ndị ọrụ atọ", "Akaụntụ ụlọ akụ atọ"], answer: 0, why: "Ịtụnyere atọ ndị a na-ejide mperi tupu ị kwụọ ụgwọ." },
      { objective: "O3", q: "Mgbe ihe e bubatara ruru, ihe mbụ ị kwesịrị ime bụ:", options: ["Ịkwụ akwụkwọ ụgwọ", "Ịgụ ya ma lelee ya megide PO", "Ịtụfu akwụkwọ nnyefe", "Itinye ya ozugbo n'elu shelf n'eleleghị ya"], answer: 1, why: "Ibu ụzọ lelee na-ejide ngwaahịa na-efu efu ma ọ bụ nke mebiri emebi." },
      { objective: "O4", q: "Gịnị bụ shrinkage?", options: ["Ngwugwu dị obere karịa", "Ọnụahịa dị ala karịa", "Ngwaahịa furu efu n'ihi izu ohi, imebi, ire ure ma ọ bụ mperi", "Mbelata ọnụahịa"], answer: 2, why: "Shrinkage bụ ọdịiche dị n'etiti ndekọ na ezi ngwaahịa." },
      { objective: "O4", q: "Gịnị bụ SKU?", options: ["Aha onye na-ere gị", "Ụdị shelf", "Ụlọ ọrụ mbufe", "Koodu dị mkpụmkpụ maka ihe ọ bụla ị na-edebe"], answer: 3, why: "SKU pụtara stock keeping unit." },
      { objective: "O4", q: "Ọgụgụ gị adabaghị na ndekọ gị maka otu ihe. Gịnị ka ị ga-eme?", options: ["Mee ka onye nke abụọ gụghachi ya", "Leghara ya anya", "Gbanwee ndekọ n'eleleghị ya", "Tụfuo ihe ahụ"], answer: 0, why: "Ọgụgụ nke ugboro abụọ na-akwado ezi ọnụọgụ tupu ị melite ndekọ." },
      { objective: "O5", q: "Formula oke ịzụtaghachi bụ:", options: ["Ọnụahịa x ọnụọgụ", "Ole a na-eji kwa ụbọchị x oge ọbịbịa + ngwaahịa nchekwa", "Ole dị n'aka - ahịa e rere", "Ngwaahịa nchekwa x 10"], answer: 1, why: "Ọ na-ekpuchi ihe a na-eji n'oge ọbịbịa gbakwunyere ndabere." },
      { objective: "O5", q: "Ị na-ere ihe 8 kwa ụbọchị, oge ọbịbịa bụ ụbọchị 5, ngwaahịa nchekwa bụ 16. Oke ịzụtaghachi?", options: ["40", "13", "56", "21"], answer: 2, why: "8 x 5 = 40, gbakwunye 16 = 56." },
      { objective: "O5", q: "Ngwaahịa nchekwa bụ:", options: ["Ngwaahịa e kpọchiri n'ime igbe ego", "Ngwaahịa ị na-adịghị ere mgbe ọ bụla", "Ngwaahịa ochie", "Ngwaahịa ndabere e debere maka ihe mberede dị ka nnyefe bịara n'azụ oge"], answer: 3, why: "Ngwaahịa nchekwa na-ekpuchi ụbọchị ahịa jupụtara na igbu oge." },
      { objective: "O5", q: "E jiri ihe 300 n'ime ụbọchị 30 gara aga. Gịnị bụ ole a na-eji kwa ụbọchị n'ozuzu?", options: ["10", "30", "300", "9,000"], answer: 0, why: "300 kere ụbọchị 30 bụ 10 kwa ụbọchị." },
      { objective: "O6", q: "Na spreadsheet, formula na-amalite na:", options: ["#", "=", "@", "$"], answer: 1, why: "Formula spreadsheet na-amalite n'akara nhata (=)." },
      { objective: "O6", q: "Gịnị ka nke bụ ụzọ abata bụ ụzọ apụ (FIFO) pụtara?", options: ["Buru ụzọ ree ngwaahịa kacha ọhụrụ", "Nye ọda n'aka onye mbụ na-ere ngwaahịa ị hụrụ", "Buru ụzọ ree ma ọ bụ jiri ngwaahịa kacha ochie", "Gụọ naanị shelf mbụ"], answer: 2, why: "FIFO na-egbochi ngwaahịa ochie imebi." },
      { objective: "O6", q: "Kedu otu ị ga-esi mee ka FIFO dị mfe n'elu shelf?", options: ["Tinye ngwaahịa ọhụrụ n'ihu", "Gwakọta igbe niile ọnụ", "Wepụ akara ụbọchị", "Dee ụbọchị n'igbe ma tinye ngwaahịa ọhụrụ n'azụ nke ochie"], answer: 3, why: "Akara ụbọchị na ebe e tinyere ha na-eme ka ọ dị mfe ibu ụzọ were nke kacha ochie." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      4,
      7,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ihe ndị ahụ na ndị na-ere gị",
        objective: "O2",
        notYet: "Ụfọdụ ihe enweghị SKU, ọnụahịa otu ma ọ bụ onye isi na-ere gị.",
        meets: "Ihe ise, nke ọ bụla nwere SKU, onye isi na-ere gị, onye nnọchi na-ere gị na ọnụahịa otu.",
        exceeds: "Ọnụahịa otu bụ ọnụahịa ruru gị aka gụnyere mbufe na ụgwọ ndị ọzọ."
      },
      {
        name: "Nọmba ngwaahịa na ihe a na-eji",
        objective: "O4",
        notYet: "E chepụtara ma ọ bụ ahapụrụ ole dị n'aka, ole a na-eji kwa ụbọchị ma ọ bụ oge ọbịbịa.",
        meets: "Ole dị n'aka si n'ezi ọgụgụ, e dejupụtakwara ole a na-eji kwa ụbọchị na oge ọbịbịa.",
        exceeds: "E dere ụbọchị ọgụgụ ahụ na onye gụrụ ya."
      },
      {
        name: "Oke ịzụtaghachi na ngwaahịa nchekwa",
        objective: "O5",
        notYet: "E ji aka dee oke ịzụtaghachi ma ọ bụ gbakọọ ya n'ụzọ ezighi ezi.",
        meets: "E tọrọ ngwaahịa nchekwa, e jikwa formula gbakọọ oke ịzụtaghachi maka ihe ọ bụla.",
        exceeds: "E debere ngwaahịa nchekwa karịa maka ihe dị mkpa ma ọ bụ ndị nwere naanị otu onye na-ere ha, tinyere ihe kpatara ya."
      },
      {
        name: "Akara ịzụtaghachi",
        objective: "O6",
        notYet: "Enweghị kọlụm ọnọdụ, ma ọ bụ ọ naghị agbanwe mgbe ngwaahịa dị ala.",
        meets: "Ọnọdụ na-egosi REORDER mgbe ole dị n'aka ruru ma ọ bụ dị n'okpuru oke ịzụtaghachi.",
        exceeds: "Onye na-amụ ihe na-anwale ya site n'ịgbanwe Ole dị n'aka ma lelee akara ahụ."
      },
      {
        name: "Atụmatụ nke bụ ụzọ abata bụ ụzọ apụ",
        objective: "O6",
        notYet: "Enweghị atụmatụ maka ịtụgharị ngwaahịa.",
        meets: "Atụmatụ e dere ede ide ụbọchị n'igbe na itinye ngwaahịa ọhụrụ n'azụ nke ochie.",
        exceeds: "Na-akpọ aha onye na-eme ya na mgbe, dị ka mgbe nnyefe ọ bụla ruru."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa ka na-eji mpempe ndekọ ngwaahịa ahụ ụbọchị 30 ka e mechara (nnyocha nsochi)",
      "Ndị nwe azụmahịa na-akọ na ngwaahịa na-agwụ ha obere oge ma ọ bụ na ngwaahịa mebiri emebi ma ọ bụ furu efu belatara n'ime ụbọchị 60",
      "Ndị nwe azụmahịa kwadebere onye nnọchi na-ere ha maka opekata mpe otu ihe dị mkpa"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere spreadsheet n'efu dị ka Google Sheets ma ọ bụ Excel na weebụ",
      "Ndepụta ihe ise ị na-azụ ma ọ bụ na-ere, tinyere ọda na akwụkwọ nnyefe nso nso a",
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ maka ịgụ ngwaahịa na omume mgbakọ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Gbakọọnụ ọmụmaatụ oke ịzụtaghachi ọnụ na bọọdụ tupu ndị na-amụ ihe ejiri nọmba nke ha.",
      "Weta spreadsheet ọmụmaatụ nwere formula e debelarị maka ndị na-amụ ihe ọhụrụ na spreadsheet.",
      "Dọọ ndị na-amụ ihe aka na ntị banyere aghụghọ ndị na-ere ngwaahịa na-arịọ wire transfer, gift card ma ọ bụ crypto.",
      "Hapụ ndị na-amụ ihe ka ha jiri ihe ọmụmaatụ ma ọ bụrụ na ha achọghị ikesa ezi ọnụahịa n'klas.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

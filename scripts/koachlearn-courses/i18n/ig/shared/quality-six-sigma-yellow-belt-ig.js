"use strict";

// Koach Learn course (Igbo translation of shared/quality-six-sigma-yellow-belt.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const ASQ = { name: "ASQ: Certified Six Sigma Yellow Belt (ihe a chọrọ, ule na Body of Knowledge)", url: "https://www.asq.org/cert/six-sigma-yellow-belt" };
const IASSC = { name: "IASSC: Certified Lean Six Sigma Yellow Belt (ICYB)", url: "https://www.iassc.org/six-sigma-certification/yellow-belt-certification/" };

module.exports = {
  id: "quality-six-sigma-yellow-belt-ig",
  lang: "ig",
  translationOf: "quality-six-sigma-yellow-belt",
  category: "Workforce Development",
  name: "Ntọala Ịdị Mma Ọrụ (Nkwadebe maka Six Sigma Yellow Belt)",
  skills: "Iji nzọụkwụ DMAIC, Ide nkọwa nsogbu, Ịnakọta data na check sheet, Ịchọta isi nsogbu site na Pareto na 5 Whys, Iwepụ ihe efu na idebe uru ahụ, Ịhazi atụmatụ maka ule Yellow Belt",
  outcome: "ime obere mmezi ịdị mma n'ezi usoro ọrụ site na nzọụkwụ ise nke DMAIC (Define, Measure, Analyze, Improve, Control), gosi ya n'otu peeji, ma soro atụmatụ nwere ụbọchị iji kwadebe maka ule Six Sigma Yellow Belt.",
  about: [
    "Ebe ọrụ ọ bụla nwere usoro na-ezighi ezi: ọda ozi (order) na-egbu oge, akwụkwọ ụgwọ (invoice) ezighi ezi, nchere ogologo, akụkụ ngwaọrụ na-adabaghị. Six Sigma bụ ụzọ isi dozie ha site n'eziokwu kama ịkọ nkọ, Lean bụkwa ụzọ isi wepụ nzọụkwụ na-abaghị uru. Ndị were mmadụ n'ọrụ n'ụlọ nrụpụta ihe, ụlọ nkwakọba ngwaahịa, ahụike, gọọmentị, họtel na ọfịs na-achọ ndị maara ntọala ya.",
    "Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị ọrụ nọ n'ihu chọrọ ịrị elu, ndị agha lara ezumike na-abanye n'ọrụ nhazi ọrụ (operations) nkịtị, na ndị nwe obere azụmahịa. Ị chọghị mgbakọ na mwepụ karịa ịgbakọ, ikewa na pasentị (percent).",
    "Ị ga-ahọrọ otu ezi usoro site n'ọrụ gị, azụmahịa gị ma ọ bụ ụlọ gị, ma mezie ya nzọụkwụ n'otu n'otu, otu nzọụkwụ DMAIC n'otu nkuzi. Ihe ọmụmụ a NA-AKWADO gị maka ule Yellow Belt, dị ka ASQ Certified Six Sigma Yellow Belt ma ọ bụ IASSC Certified Lean Six Sigma Yellow Belt; ọ naghị enye asambodo. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" na obere nnwale nwere ajụjụ abụọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ọrụ mmezi otu peeji maka ezi usoro: nkọwa nsogbu na ebumnuche, eserese usoro dị mfe, check sheet nwere opekata mpe data 20 na ọnụego ntụpọ (defect rate), Pareto chart na 5 Whys maka nsogbu kacha ukwuu, otu obere mmezi i nwalere, na nlele njikwa (control check) iji debe uru ahụ. Tinye atụmatụ ọmụmụ na ule nwere ụbọchị maka ule Yellow Belt ị họọrọ, ya na peeji gọọmentị ebe i lelere iwu ya ugbu a.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-achọ ọrụ ma ọ bụ nkwalite n'ọrụ nhazi, ụlọ nrụpụta ihe, ụlọ nkwakọba ngwaahịa, ọfịs ahụike, họtel na gọọmentị; ndị agha lara ezumike na-abanye n'ọrụ nhazi na ịdị mma nkịtị; ndị nwe obere azụmahịa chọrọ mperi na ihe efu dị ntakịrị.",
    startingPoint: "Ọtụtụ ahụla nsogbu na-emegharị n'ọrụ ma nwee echiche iji dozie ha, mana ha ejibeghị usoro a haziri ahazi, anakọtabeghị data n'ebumnuche, ma ọ bụ jiri okwu ịdị mma dị ka ntụpọ (defect), isi nsogbu (root cause) ma ọ bụ DMAIC. Mgbakọ ha bụ nke kwa ụbọchị: ịgụ ọnụ, ikewa na pasentị.",
    gap: "Nka ịdị mma na mmezi na-aga n'ihu na-apụta n'ọtụtụ mkpọsa ọrụ, Yellow Belt bụkwa asambodo mbụ a na-ahụkarị. Ndị na-amụ ihe kwesịrị ime obere mmezi site n'eziokwu ma gosi ya n'otu peeji, nke ha nwere ike ikwu maka ya n'ajụjụ ọnụ ọrụ, ma mara ezi nzọụkwụ ruo n'ule a ma ama.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ịdị mma ọ bụla na mbụ",
      "Ngwaọrụ: akwụkwọ na mkpịsị ode ezuola; spreadsheet n'efu (Google Sheets ma ọ bụ Excel) na-enyere aka n'eserese chart",
      "Oge: nkuzi nkeji 5, gbakwunyere ihe dị ka otu izu ruo izu abụọ nke ịnakọta data maka ọrụ ikpeazụ",
      "Iwu ule, ụdị ule na ụgwọ na-agbanwe ma dị iche dị ka ụlọ ọrụ na-enye asambodo si dị; ndị na-amụ ihe na-elele peeji gọọmentị ya",
      "Enweghị aha ndị ahịa, ozi ndị ọrịa ma ọ bụ ihe nzuzo ụlọ ọrụ na data omume"
    ],
    prerequisites: "Ọ dịghị. Ndị na-adịghị ahụ pasentị ahụ nwere ike ibu ụzọ were \"Everyday Math\" (mgbakọ kwa ụbọchị), \"Excel and Spreadsheets\" na-enyekwa aka n'eserese chart."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa nke ọrụ mmezi", action: "ịkpọ aha nzọụkwụ ise nke DMAIC n'usoro ma kwuo ihe na-eme na nke ọ bụla", standard: "ma nweta ise niile ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị usoro nwere nsogbu na-emegharị", action: "ide nkọwa nsogbu na ebumnuche a pụrụ ịtụ, ma see eserese usoro dị mfe", standard: "nwere gịnị, ebee, mgbe na otu o si buru ibu, na-enweghị ihe kpatara ya ma ọ bụ ngwọta n'ime nkọwa ahụ" },
    { id: "O3", condition: "Mgbe e nyere gị usoro ị ga-ele anya otu izu ruo izu abụọ", action: "ịnakọta data na check sheet ma gbakọọ ọnụego ntụpọ", standard: "nwere opekata mpe data 20 ma gosi mgbakọ ya" },
    { id: "O4", condition: "Mgbe e nyere gị data check sheet gị", action: "ịchọta nsogbu kacha ukwuu site na Pareto chart ma gwuo ruo isi nsogbu ya site na 5 Whys", standard: "nke mere na ihe kpatara a chọtara bụ nke otu ahụ nwere ike ime ihe banyere ya" },
    { id: "O5", condition: "Mgbe e nyere gị isi nsogbu", action: "ịhọrọ mmezi na-ewepụ ihe efu ma ọ bụ mperi, nwalee ya n'obere ọnọdụ ma hazie nlele njikwa", standard: "nwere data tupu na mgbe mmezi ahụ gasịrị" },
    { id: "O6", condition: "Site n'iji peeji gọọmentị ASQ ma ọ bụ IASSC", action: "ime atụmatụ ọmụmụ na ule nwere ụbọchị maka ule Yellow Belt", standard: "na ụdị ule na iwu ya a lelere na peeji ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Kọwaa ma tụọ nsogbu ahụ",
      lessons: [
        {
          title: "Ịdị mma, Six Sigma na nzọụkwụ ise nke DMAIC",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha nzọụkwụ ise nke DMAIC ma kwuo ihe Yellow Belt na-eme na nke ọ bụla.",
          text: [
            "Ịdị mma pụtara inye onye ahịa ihe ọ chọrọ, n'otu ụzọ ahụ, oge niile. Ntụpọ (defect) bụ ihe ọ bụla onye ahịa agaghị anabata: ọda ezighi ezi, nnyefe na-egbu oge, akụkụ na-efu efu, mperi n'ụgwọ.",
            "Six Sigma bụ usoro iji belata ntụpọ site n'iji data kama ịkọ nkọ. Lean bụ usoro iji belata ihe efu (waste), ya bụ nzọụkwụ na-agbakwunye oge mana ọ dịghị uru. Ọtụtụ ndị were mmadụ n'ọrụ na-akụzi ha ọnụ dị ka Lean Six Sigma.",
            "Ọrụ mmezi na-agbaso nzọụkwụ ise a na-akpọ DMAIC: Define (kọwaa nsogbu), Measure (tụọ otu o si buru ibu), Analyze (nyochaa ka ịchọta isi nsogbu), Improve (mezie site n'ịnwale ngwọta), na Control (jikwaa iji debe uru ahụ). Belt na-egosi ọkwa ọzụzụ: Yellow Belt maara ntọala ma na-enyere aka n'ọrụ, ọtụtụ mgbe site n'ịnakọta data na ise eserese nzọụkwụ; Green Belt na Black Belt na-edu ọrụ ka ukwuu.",
            "Asambodo Yellow Belt abụọ a ma ama bụ ASQ Certified Six Sigma Yellow Belt na IASSC Certified Lean Six Sigma Yellow Belt. Ihe ọmụmụ a na-akwado gị; ọ bụ naanị ụlọ ọrụ na-enye asambodo na-enye ya."
          ],
          steps: ["Define: gịnị bụ nsogbu ahụ na ebumnuche ya?", "Measure: ugboro ole ka ọ na-eme ugbu a?", "Analyze: gịnị bụ isi nsogbu ya?", "Improve: kedu mmezi na-arụ ọrụ mgbe i nwalere ya?", "Control: kedu otu ị ga-esi debe uru ahụ?"],
          words: [["Ntụpọ (defect)", "ihe ọ bụla onye ahịa agaghị anabata, dị ka ihe ezighi ezi, nke gburu oge ma ọ bụ nke mebiri emebi."], ["Six Sigma", "usoro iji belata ntụpọ site n'iji data; ịdị mma dị elu nke ukwuu pụtara ihe dị ka ntụpọ 3.4 n'ime ohere otu nde."], ["Lean", "usoro iji wepụ nzọụkwụ na-emefu oge ma ọ bụ ihe eji arụ ọrụ."], ["DMAIC", "Define, Measure, Analyze, Improve, Control: nzọụkwụ ise nke ọrụ Six Sigma."], ["Yellow Belt", "onye a zụrụ na ntọala, na-enyere aka n'ọrụ mmezi."]],
          slides: [
            { title: "Ịdị mma na ntụpọ", bullets: ["Ịdị mma: ihe onye ahịa chọrọ, n'otu ụzọ ahụ oge niile", "Ntụpọ: ihe ọ bụla onye ahịa agaghị anabata"] },
            { title: "Six Sigma na Lean", bullets: ["Six Sigma: ntụpọ dị ntakịrị, site n'iji data", "Lean: nzọụkwụ efu dị ntakịrị", "Ha abụọ ọnụ: Lean Six Sigma"] },
            { title: "DMAIC n'usoro", bullets: ["Define: kọwaa nsogbu ahụ", "Measure: tụọ otu o si buru ibu", "Analyze: chọta isi nsogbu ya", "Improve: mezie site na mmezi a nwalere, wee Control: debe ya"] },
            { title: "Belt na asambodo", bullets: ["Yellow Belt: maara ntọala, na-enyere aka n'ọrụ", "ASQ na IASSC na-enye ule Yellow Belt", "Ihe ọmụmụ a na-akwado gị; ọ naghị enye gị asambodo"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Họrọ otu usoro ị maara nke na-ezighi ezi ugboro ugboro, n'ọrụ, n'azụmahịa ma ọ bụ n'ụlọ (dịka ọmụmaatụ ọda e zipụrụ n'oge gara aga, ọda nri ehihie ezighi ezi, ma ọ bụ akwụkwọ ụgwọ e zipụrụ na mperi). Dee ya n'elu peeji, wee dee D, M, A, I, C n'akụkụ ya, ya na otu ajụjụ ị ga-ajụ na nzọụkwụ ọ bụla.",
          youCanNow: "ịkpọ aha nzọụkwụ ise nke DMAIC n'usoro, ikwu ihe Yellow Belt na-eme, na ịhọrọ usoro ị ga-emezi.",
          quickCheck: [
            { objective: "O1", q: "Kedu usoro ziri ezi nke nzọụkwụ DMAIC?", options: ["Design, Make, Assess, Inspect, Close", "Measure, Define, Improve, Analyze, Control", "Define, Measure, Analyze, Improve, Control", "Define, Manage, Act, Improve, Check"], answer: 2, why: "DMAIC pụtara Define, Measure, Analyze, Improve, Control, n'usoro ahụ." },
            { objective: "O1", q: "Otu gị na-anwale ụzọ ọhụrụ isi kwakọọ ọda ka ha hụ ma mperi ọ ga-ebelata. Kedu nzọụkwụ nke a bụ?", options: ["Improve", "Define", "Measure", "Control"], answer: 0, why: "Ịnwale mmezi ka ịhụ ma ọ na-arụ ọrụ na-eme na nzọụkwụ Improve." }
          ]
        },
        {
          title: "Define: nkọwa nsogbu na eserese usoro",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dee nkọwa nsogbu na ebumnuche, ma see eserese usoro dị mfe.",
          text: [
            "Ezigbo ọrụ na-amalite site na nkọwa nsogbu doro anya. Ọ na-ekwu ihe na-ezighi ezi, ebee, kemgbe mgbe ole na otu o si buru ibu, na ihe mere o ji dị mkpa. Ọ NAGHỊ akpọ aha ihe kpatara ya ma ọ bụ ngwọta ugbu a, n'ihi na ị chọtabeghị ha. Ọmụmaatụ: \"Kemgbe June, ọda nri ehihie 12 n'ime 100 ọ bụla n'ụlọ nri (cafe) dị n'etiti obodo na-apụ ezighi ezi, na-akpata nkwụghachi ego na mkpesa.\"",
            "Ebumnuche ahụ na-ekwu otu o ga-esi ka mma, na mgbe: \"Belata ọda nri ehihie ezighi ezi ruo 3 n'ime 100 ọ bụla tupu njedebe September.\"",
            "Mgbe ahụ, see eserese usoro ahụ. Dee nzọụkwụ ọ bụla n'igbe site na mmalite ruo njedebe ma jikọọ ha na akụ (arrow). SIPOC bụ tebụl ngwa ngwa nke foto zuru ezu: Suppliers (ndị na-enye ihe), Inputs (ihe a na-etinye), Process (nzọụkwụ usoro), Outputs (ihe na-apụta) na Customers (ndị ahịa). Olu onye ahịa (VOC) bụ ihe ndị ahịa kwuru na ha chọrọ; akụkụ ndị kacha dị ha mkpa ka a na-akpọ critical to quality (CTQ)."
          ],
          steps: ["Dee ihe na-ezighi ezi, ebee, kemgbe mgbe ole na otu o si buru ibu.", "Tinye ihe mere o ji dị mkpa (ego, oge, ndị ahịa, nchekwa).", "Lelee: enweghị ihe kpatara ya na enweghị ngwọta na nkọwa ahụ.", "Dee ebumnuche nwere nọmba na ụbọchị.", "See usoro ahụ n'igbe 5 ruo 8, site na mmalite ruo njedebe."],
          words: [["Nkọwa nsogbu (problem statement)", "nkọwa dị mkpụmkpụ, dabere n'eziokwu, nke ihe na-ezighi ezi, ebee, mgbe na otu o si buru ibu."], ["Eserese usoro (process map)", "eserese nke nzọụkwụ usoro n'usoro, site n'iji igbe na akụ."], ["SIPOC", "tebụl otu peeji nke Suppliers, Inputs, Process, Outputs na Customers."], ["Olu onye ahịa (VOC)", "ihe ndị ahịa kwuru na ha chọrọ ma ọ bụ na-eme mkpesa banyere ya."], ["Critical to quality (CTQ)", "akụkụ kacha dị onye ahịa mkpa, dị ka ịbịa n'oge ma ọ bụ ịdị ezi."]],
          slides: [
            { title: "Ezigbo nkọwa nsogbu", bullets: ["Gịnị, ebee, kemgbe mgbe ole, otu o si buru ibu", "Ihe mere o ji dị mkpa", "Enweghị ihe kpatara ya na enweghị ngwọta ugbu a"] },
            { title: "Ezigbo ebumnuche", bullets: ["Otu o ga-esi ka mma, na mgbe", "Ọmụmaatụ: ọda ezighi ezi site na 12 ruo 3 n'ime 100 tupu njedebe September"] },
            { title: "See eserese usoro ahụ", bullets: ["Igbe 5 ruo 8, site na mmalite ruo njedebe", "Akụ na-egosi usoro ya", "SIPOC: Suppliers, Inputs, Process, Outputs, Customers"] },
            { title: "Gee onye ahịa ntị", bullets: ["Olu onye ahịa: ihe ha chọrọ", "Critical to quality: ihe kacha dị ha mkpa"] }
          ],
          tryIt: "Maka usoro ị họọrọ, dee nkọwa nsogbu nwere gịnị, ebee, kemgbe mgbe ole na otu o si buru ibu (jiri ihe kacha mma ị chere ugbu a), ebumnuche nwere nọmba na ụbọchị, na eserese usoro nwere igbe 5 ruo 8 n'akwụkwọ.",
          youCanNow: "ide nkọwa nsogbu na ebumnuche, ma see eserese usoro dị mfe.",
          quickCheck: [
            { objective: "O2", q: "Kedu nkọwa nsogbu kacha mma?", options: ["\"Onye osi nri ọhụrụ anaghị akpachara anya.\"", "\"Kemgbe March, ngwaahịa 8 n'ime 50 ọ bụla e zipụrụ site n'ụlọ nkwakọba ngwaahịa ọwụwa anyanwụ na-eru n'oge gara aga, na-akpata nkwụghachi ego nye ndị ahịa.\"", "\"Anyị chọrọ sistemụ kọmputa ọhụrụ.\"", "\"Ọzịzị ngwaahịa adịghị mma.\""], answer: 1, why: "Ọ na-enye gịnị, ebee, kemgbe mgbe ole na otu o si buru ibu, ọ naghịkwa ata ihe kpatara ya ụta ma ọ bụ kpọọ aha ngwọta." },
            { objective: "O2", q: "Gịnị ka P dị na SIPOC pụtara?", options: ["Price", "People", "Plan", "Process"], answer: 3, why: "SIPOC bụ Suppliers, Inputs, Process, Outputs na Customers." }
          ]
        },
        {
          title: "Measure: check sheet na ọnụego ntụpọ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nakọta data na check sheet ma gbakọọ ọnụego ntụpọ.",
          text: [
            "Na nzọụkwụ Measure, ị na-achọpụta ugboro ole nsogbu ahụ na-eme n'ezie. Ịkọ nkọ na-ezighi ezi ọtụtụ mgbe, ya mere ị na-agụ ọnụ.",
            "Check sheet bụ fọm dị mfe n'akwụkwọ ma ọ bụ na spreadsheet. N'akụkụ, depụta ụdị ntụpọ dị iche iche (ihe ezighi ezi, ihe na-efu efu, igbu oge). N'elu, depụta ụbọchị. Dee akara (tally) oge ọ bụla otu n'ime ha mere, ma gụkwa ọnụ ihe niile i lelere.",
            "Ọnụego ntụpọ bụ ihe nwere ntụpọ kewara n'ihe niile, mụbaa ya na 100. Ọ bụrụ na ọda 15 n'ime 200 ezighi ezi: 15 / 200 = 0.075, ma ọ bụ 7.5%. Six Sigma na-ejikwa DPMO, ntụpọ n'ime ohere otu nde: ntụpọ kewara n'(ihe x ohere n'otu ihe), mụbaa na 1,000,000. Ọ bụrụ na akwụkwọ ụgwọ 500 nwere ohere 4 nke mperi n'otu n'otu, i wee hụ mperi 10: 10 / (500 x 4) = 0.005, mụbaa na 1,000,000 = 5,000 DPMO.",
            "Tụọ ya n'otu ụzọ ahụ oge niile: otu nkọwa ntụpọ ahụ, otu oge n'ụbọchị, otu onye ma ọ bụ iwu doro anya. Nke a bụ baseline gị, nọmba \"tupu\" ị ga-eji tụnyere ihe ọzọ ma emechaa."
          ],
          steps: ["Dee nkọwa doro anya nke ntụpọ ọ bụla.", "Mee check sheet: ụdị ntụpọ n'akụkụ, ụbọchị n'elu.", "Dee akara maka ntụpọ ọ bụla ma gụọ ọnụ ihe niile i lelere.", "Ọnụego ntụpọ = ihe nwere ntụpọ / ihe niile x 100.", "Dee nke a dị ka baseline gị."],
          words: [["Check sheet", "fọm dị mfe maka ịgụ ọnụ ugboro ole ụdị nsogbu ọ bụla na-eme."], ["Ọnụego ntụpọ (defect rate)", "òkè nke ihe nwere ntụpọ, e gosiri dị ka pasentị."], ["DPMO", "ntụpọ n'ime ohere otu nde: ntụpọ / (ihe x ohere n'otu ihe) x 1,000,000."], ["Baseline", "otu usoro ahụ si arụ ọrụ tupu i gbanwee ya."]],
          slides: [
            { title: "Gụọ ọnụ, akọla nkọ", bullets: ["Tụọ ugboro ole nsogbu ahụ na-eme", "Jiri otu nkọwa ntụpọ doro anya"] },
            { title: "Check sheet", bullets: ["Ụdị ntụpọ n'akụkụ", "Ụbọchị n'elu", "Akara (tally), gbakwunyere ọnụ ihe niile i lelere"] },
            { title: "Mgbakọ ya", bullets: ["Ọnụego ntụpọ = ihe nwere ntụpọ / ihe niile x 100", "15 ezighi ezi n'ime 200 = 7.5%", "DPMO = ntụpọ / (ihe x ohere) x 1,000,000"] },
            { title: "Baseline gị", bullets: ["Nọmba \"tupu\"", "Tụọ ya n'otu ụzọ ahụ oge niile", "Ị ga-atụnyere ya mgbe mmezi gasịrị"] }
          ],
          tryIt: "Mee check sheet maka usoro gị n'akwụkwọ ma ọ bụ na spreadsheet. Nakọta opekata mpe data 20 n'izu na-abịa (malite taa), wee gbakọọ ọnụego ntụpọ gị ma gosi mgbakọ ya. Mee omume ugbu a: nnyefe 9 gburu oge n'ime 150 bụ pasentị ole? (Azịza: 9 / 150 = 0.06 = 6%.)",
          youCanNow: "ịnakọta data na check sheet, ịgbakọ ọnụego ntụpọ, na ịtọ baseline gị.",
          quickCheck: [
            { objective: "O3", q: "I lelere ọda 80, 4 n'ime ha ezighi ezi. Gịnị bụ ọnụego ntụpọ?", options: ["5%", "4%", "20%", "8%"], answer: 0, why: "4 / 80 = 0.05, nke bụ 5%." },
            { objective: "O3", q: "Gịnị mere ị na-ede otu nkọwa doro anya nke ntụpọ ọ bụla tupu ịgụ ọnụ?", options: ["Ka chart ahụ maa mma karị", "Ka onye isi bịanye aka na ya", "Ka onye ọ bụla gụọ ọnụ n'otu ụzọ ma nọmba ndị ahụ bụrụ ndị a pụrụ ịtụkwasị obi", "Ka ị chọọ data ole na ole"], answer: 2, why: "Ọ bụrụ na ndị mmadụ na-agụ ihe dị iche iche, a pụghị ịtụnyere data ahụ ma ọ bụ tụkwasị ya obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Kọwaa ma tụọ nsogbu ahụ",
        questions: [
          { objective: "O1", q: "Na nzọụkwụ DMAIC olee ka ị na-achọ isi nsogbu?", options: ["Define", "Analyze", "Control", "Measure"], answer: 1, why: "Analyze bụ ebe ị na-eji data na ngwa ọrụ achọta isi nsogbu." },
          { objective: "O1", q: "Gịnị ka Yellow Belt na-emekarị n'ọrụ mmezi?", options: ["Ọ nwe ụlọ ọrụ ahụ", "Ọ na-enye asambodo", "Ọ na-akwado mmefu ego naanị ya", "Ọ na-enyere aka n'ọrụ dị ka ịnakọta data na ise eserese nzọụkwụ"], answer: 3, why: "Yellow Belt maara ntọala ma na-akwado ọrụ, ọtụtụ mgbe site n'ịnakọta data na ise eserese usoro." },
          { objective: "O2", q: "Nkọwa nsogbu kwuru, \"Mperi na-eme n'ihi na ndị ọrụ anaghị eche maka ya.\" Gịnị na-ezighi ezi na ya?", options: ["Ọ na-ata ihe kpatara ya ụta tupu a nakọta data ọ bụla", "Ọ dị mkpụmkpụ nke ukwuu ịgụ", "Ọ na-eji nọmba", "Ọ dịghị ihe na-ezighi ezi"], answer: 0, why: "Nkọwa nsogbu na-akọwa nsogbu ahụ site n'eziokwu; a na-achọta ihe kpatara ya ma emechaa, na Analyze." },
          { objective: "O3", q: "I lelere fọm 250 ma hụ 10 nwere mperi. Gịnị bụ ọnụego ntụpọ?", options: ["10%", "2.5%", "4%", "25%"], answer: 2, why: "10 / 250 = 0.04, nke bụ 4%." },
          { objective: "O3", q: "Gịnị bụ baseline?", options: ["Ebumnuche ị chọrọ iru", "Ahịrị dị n'ala chart", "Akụkọ ikpeazụ", "Otu usoro ahụ si arụ ọrụ tupu i gbanwee ya"], answer: 3, why: "Baseline bụ nọmba \"tupu\" ị na-atụnyere mgbe mmezi gasịrị." }
        ]
      }
    },
    {
      name: "Isi 2: Nyochaa, mezie ma jikwaa",
      lessons: [
        {
          title: "Analyze: Pareto chart, fishbone na 5 Whys",
          objectives: ["O4"],
          minutes: 6,
          goal: "Chọta nsogbu kacha ukwuu site na Pareto chart na isi nsogbu ya site na 5 Whys.",
          text: [
            "Pareto chart bụ chart nwere mkpanaka (bar) a haziri site na nke kacha ogologo ruo na nke kacha nta. Ọ na-egosi na ihe ole na ole na-akpatakarị ọtụtụ nsogbu, nke a na-akpọkarị iwu 80/20. Malite na mkpanaka kacha ogologo.",
            "Eserese fishbone (ọkpụkpụ azụ; a na-akpọkwa ya eserese ihe kpatara na ihe si na ya pụta, ma ọ bụ Ishikawa) na-enyere otu aka ịdepụta ihe ndị nwere ike ịkpata nsogbu. Dee nsogbu ahụ n'\"isi\", wee see ọkpụkpụ maka otu ihe kpatara dị iche iche, dị ka Methods (ụzọ), Machines (igwe), Materials (ihe eji arụ ọrụ), People (ndị mmadụ), Measurement (ntụle) na Environment (gburugburu).",
            "Wee jụọ \"Gịnị mere?\" ihe dị ka ugboro ise iji gwuo site n'ihe ịrịba ama ruo n'isi nsogbu ị nwere ike idozi. Ọmụmaatụ: Ọda ezighi ezi. Gịnị mere? Onye osi nri gụhiere tiketi. Gịnị mere? E ji aka dee tiketi ahụ. Gịnị mere? Igwe mbipụta mebiri emebi. Gịnị mere? Ọ dịghị onye e nyere ọrụ idozi ya. Gịnị mere? Enweghị nlele mmezi igwe. Isi nsogbu: enweghị nlele mmezi maka igwe mbipụta ahụ.",
            "Ịta mmadụ ụta abụghị isi nsogbu. Ọ bụrụ na azịza ya bụ \"mmadụ akpachaghị anya\", nọgide na-ajụ ihe mere usoro ahụ ji kwe ka mperi ahụ mee."
          ],
          steps: ["Gbakọọ ụdị ntụpọ ọ bụla site na check sheet gị.", "Hazie ha site na nke kacha ukwuu ruo na nke kacha nta ma see mkpanaka ha.", "Họrọ mkpanaka kacha ogologo.", "Depụta ihe nwere ike ịkpata ya na fishbone.", "Jụọ \"Gịnị mere?\" ihe dị ka ugboro ise ruo mgbe ị ruru ihe kpatara ị nwere ike ime ihe banyere ya."],
          words: [["Pareto chart", "chart mkpanaka a haziri site na nke kacha ukwuu ruo na nke kacha nta, iji gosi nsogbu ole na ole kacha dị mkpa."], ["Iwu 80/20", "ụkpụrụ na-egosi na ihe ole na ole na-akpatakarị ọtụtụ nsogbu."], ["Eserese fishbone", "eserese na-achịkọta ihe nwere ike ịkpata nsogbu; a na-akpọkwa ya eserese Ishikawa."], ["Isi nsogbu (root cause)", "ezi ihe kpatara nsogbu; dozie ya, nsogbu ahụ akwụsị ma ọ bụ belata."], ["5 Whys", "ịjụ \"Gịnị mere?\" ugboro ugboro, ihe dị ka ugboro ise, iji ruo n'isi nsogbu."]],
          slides: [
            { title: "Pareto chart", bullets: ["Mkpanaka a haziri site na nke kacha ukwuu ruo na nke kacha nta", "Ihe ole na ole na-akpata ọtụtụ nsogbu (80/20)", "Malite na mkpanaka kacha ogologo"] },
            { title: "Eserese fishbone", bullets: ["Nsogbu ahụ n'isi", "Ọkpụkpụ: Methods, Machines, Materials, People, Measurement, Environment"] },
            { title: "5 Whys", bullets: ["Jụọ \"Gịnị mere?\" ihe dị ka ugboro ise", "Ọda ezighi ezi, tiketi e ji aka dee, igwe mbipụta mebiri, enweghị nlele"] },
            { title: "Ịta ụta abụghị isi nsogbu", bullets: ["Jụọ ihe mere usoro ahụ ji kwe ka mperi ahụ mee", "Chọta ihe kpatara ị nwere ike ime ihe banyere ya"] }
          ],
          tryIt: "Gbakọọ ụdị ntụpọ ọ bụla site na check sheet gị, hazie ha ma see Pareto chart n'akwụkwọ ma ọ bụ na spreadsheet. Wee dee 5 Whys maka mkpanaka kacha ogologo. Kwụsị mgbe ị ruru ihe kpatara ị nwere ike idozi, nke na-adịghị ata mmadụ ụta.",
          youCanNow: "ise Pareto chart, ịhọrọ nsogbu kacha ukwuu, na igwu ruo n'isi nsogbu ya site na 5 Whys.",
          quickCheck: [
            { objective: "O4", q: "Pareto chart gị na-egosi: nha ezighi ezi 40, ihe na-efu efu 25, igbu oge 10, mmebi 5. Ebee ka ị ga-amalite?", options: ["Mmebi, n'ihi na ọ kacha dị mfe", "Ha anọ n'otu oge", "Igbu oge, n'ihi na ndị ahịa anaghị achọ ichere", "Nha ezighi ezi, mkpanaka kacha ogologo"], answer: 3, why: "Pareto chart na-agwa gị ka ị malite na mkpanaka kacha ogologo, ebe mmezi na-enyere aka karịa." },
            { objective: "O4", q: "5 Whys gị kwụsịrị na \"onye ọrụ ahụ akpachaghị anya\". Gịnị ka ị ga-eme?", options: ["Kwụsị ebe ahụ ma dee akụkọ megide onye ọrụ ahụ", "Nọgide na-ajụ ihe mere usoro ahụ ji kwe ka mperi ahụ mee", "Malite ọrụ ọhụrụ", "Wepụ onye ọrụ ahụ na chart"], answer: 1, why: "Ịta ụta abụghị isi nsogbu; chọọ ihe dị n'usoro ahụ kwere ka mperi ahụ mee." }
          ]
        },
        {
          title: "Improve: wepụ ihe efu ma gbochie mperi n'ọrụ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Họrọ mmezi na-ewepụ ihe efu ma ọ bụ mperi ma nwalee ya n'obere ọnọdụ.",
          text: [
            "Lean na-akpọ aha ụdị ihe efu asatọ. Ụzọ dị mfe isi cheta ha bụ DOWNTIME: Defects (ntụpọ), Overproduction (imepụta karịa), Waiting (nchere), Non-used talent (nka a na-ejighị), Transportation (ibuga ihe), Inventory (ngwaahịa karịrị akarị), Motion (ije ma ọ bụ nseru aka karịrị akarị) na Extra processing (ọrụ karịrị akarị).",
            "Ezigbo mmezi na-emekarị ka ụzọ ziri ezi bụrụ ụzọ dị mfe. 5S na-ahazi ebe ọrụ: Sort (họrọ), Set in order (dozie n'usoro), Shine (hichaa), Standardize (mee ka ọ bụrụ otu ụzọ), Sustain (nọgide na ya). Igbochi mperi (poka-yoke n'asụsụ Japan) na-eme ka mperi sie ike ma ọ bụ ghara ikwe omume, dị ka plọg dabara naanị n'otu ụzọ, fọm na-agaghị ezipu ma igbe dị efu, ma ọ bụ igbe ihe nwere agba dị iche iche.",
            "Buru ụzọ nwalee mmezi ahụ n'obere ọnọdụ: otu oge ọrụ (shift), otu tebụl ma ọ bụ otu izu. Nke a bụ pilot. Tụọ ya n'otu ụzọ ahụ dị ka baseline gị ma tụnyere ha. Ọ bụrụ na nọmba ndị ahụ ka mma, gbasaa ya; ọ bụrụ na ọ bụghị, nwalee echiche nke ọzọ."
          ],
          steps: ["Depụta mmezi ndị na-awakpo isi nsogbu ahụ.", "Họrọ mmezi na-ewepụ ihe efu ma ọ bụ na-eme ka mperi sie ike.", "Mee obere pilot: otu shift, otu tebụl ma ọ bụ otu izu.", "Tụọ ya n'otu ụzọ ahụ dị ka baseline.", "Tụnyere tupu na mgbe e mezichara."],
          words: [["Ihe efu (waste)", "nzọụkwụ ọ bụla na-eji oge ma ọ bụ ihe eji arụ ọrụ mana ọ naghị agbakwunye uru nye onye ahịa."], ["DOWNTIME", "ihe enyemaka ncheta maka ihe efu asatọ: Defects, Overproduction, Waiting, Non-used talent, Transportation, Inventory, Motion, Extra processing."], ["5S", "Sort, Set in order, Shine, Standardize, Sustain: ụzọ isi hazie ebe ọrụ."], ["Igbochi mperi (poka-yoke)", "nhazi na-eme ka mperi sie ike ma ọ bụ ghara ikwe omume."], ["Pilot", "obere nnwale dị mkpụmkpụ nke mmezi tupu e jiri ya ebe niile."]],
          slides: [
            { title: "Ihe efu asatọ: DOWNTIME", bullets: ["Defects, Overproduction, Waiting, Non-used talent", "Transportation, Inventory, Motion, Extra processing"] },
            { title: "5S", bullets: ["Sort, Set in order, Shine", "Standardize, Sustain"] },
            { title: "Igbochi mperi", bullets: ["Mee ka ụzọ ziri ezi bụrụ ụzọ dị mfe", "Plọg dabara naanị n'otu ụzọ; fọm na-egbochi igbe dị efu"] },
            { title: "Buru ụzọ mee pilot", bullets: ["Otu shift, otu tebụl ma ọ bụ otu izu", "Tụọ ya dị ka baseline", "Ọ ka mma? Gbasaa ya. Ọ ka mmaghị? Nwalee echiche nke ọzọ"] }
          ],
          tryIt: "Dee mmezi atọ nwere ike ịrụ ọrụ maka isi nsogbu gị. Dee ihe efu nke ọ bụla na-ewepụ ma ọ bụ otu o si egbochi mperi n'ọrụ. Họrọ otu, hazie obere pilot (ebee, ogologo oge ole, onye), ma malite ịtụ ya n'otu ụzọ ahụ dị ka baseline gị.",
          youCanNow: "ịmata ihe efu asatọ, ịhọrọ mmezi na-ewepụ ihe efu ma ọ bụ mperi, na ịnwale ya site n'obere pilot.",
          quickCheck: [
            { objective: "O5", q: "Ndị ọrụ na-agafe ụlọ nkwakọba ngwaahịa ọtụtụ ugboro kwa ụbọchị iji were teepu. Kedu ihe efu nke a bụ?", options: ["Overproduction", "Defects", "Motion", "Inventory"], answer: 2, why: "Ije na nseru aka karịrị akarị nke ndị mmadụ bụ ihe efu nke motion." },
            { objective: "O5", q: "I nwere mmezi i chere na ọ ga-arụ ọrụ. Gịnị bụ nzọụkwụ kacha mma ọzọ?", options: ["Nwalee ya n'obere ọnọdụ ma tụnyere ya na baseline", "Gbasaa ya n'ebe niile n'otu oge", "Ghara ịtụ ya, ebe ọ bụ na i ji n'aka", "Chere otu afọ ka ị hụ"], answer: 0, why: "Obere pilot a tụrụ dị ka baseline na-egosi ma mmezi ahụ na-arụ ọrụ n'ezie." }
          ]
        },
        {
          title: "Jikwaa uru ahụ, ma hazie ule Yellow Belt gị",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Hazie nlele njikwa maka mmezi ahụ ma mee atụmatụ ọmụmụ na ule nwere ụbọchị.",
          text: [
            "Ọtụtụ mmezi na-ala n'iyi mgbe ndị mmadụ laghachiri n'omume ochie ha. Na nzọụkwụ Control, ị na-edebe uru ahụ: dee ụzọ ọhụrụ ahụ dị ka standard work (obere ndepụta nlele ma ọ bụ foto nke nzọụkwụ ziri ezi), zụọ ndị mmadụ na ya, ma nọgide na-atụ ya. Run chart na-egosi nọmba gị ka oge na-aga, ya na ahịrị etiti; control chart na-agbakwunye oke na-egosi mgbe usoro ahụ gbanwere karịa ka ọ na-adị. Dee control plan dị mfe: ihe ị ga-elele, ugboro ole, onye na-elele, na ihe a ga-eme ma ọ bụrụ na nọmba ahụ ka njọ.",
            "Ugbu a, hazie asambodo gị. ASQ Certified Six Sigma Yellow Belt achọghị ahụmịhe ọrụ ma ọ bụ agụmakwụkwọ ọ bụla, ule ya bụkwa open book (ị nwere ike iji akwụkwọ nrụtụ aka gị e jikọrọ ọnụ), dị ka asq.org si kwuo. IASSC Certified Lean Six Sigma Yellow Belt enweghị ihe a chọrọ tupu, ule ya bụkwa closed book (enweghị akwụkwọ) ma onye nlekọta na-ele ya anya (proctored), dị ka iassc.org si kwuo. Ụdị ule, ụgwọ na iwu na-agbanwe, ya mere gụọ peeji gọọmentị ahụ tupu i debanye aha. Ụfọdụ ndị were mmadụ n'ọrụ na-emekwa ọzụzụ Yellow Belt nke ha n'ime ụlọ ọrụ ha.",
            "Budata Body of Knowledge nke ụlọ ọrụ na-enye asambodo (ndepụta isiokwu ule ahụ nwere ike ịjụ), kaa akara n'isiokwu ọ bụla ị maara, ma hazie oge ọmụmụ maka ndị fọdụrụ. Tinye ezi ụbọchị na kalenda, ma debanye aha maka ule naanị mgbe akara nnwale omume gị kwụsiri ike."
          ],
          steps: ["Dee ụzọ ọhụrụ ahụ dị ka standard work.", "Mee control plan: gịnị, ugboro ole, onye, na ihe a ga-eme ma ọ ka njọ.", "Nọgide na run chart opekata mpe izu ole na ole.", "Họrọ ule ma gụọ peeji gọọmentị ya.", "Jiri Body of Knowledge hazie ụbọchị ọmụmụ na ụbọchị ule ị chọrọ."],
          words: [["Standard work", "ụzọ kacha mma e kwekọrịtara isi rụọ ọrụ, e dere dị ka nzọụkwụ dị mfe ma ọ bụ foto."], ["Run chart", "chart ahịrị nke ntụle ka oge na-aga, iji hụ otu ihe si aga."], ["Control chart", "run chart nwere oke na-egosi mgbe usoro gbanwere karịa ka ọ na-adị."], ["Control plan", "obere atụmatụ na-ekwu ihe a ga-elele, ugboro ole, onye na-elele na ihe a ga-eme ma ọ dalata."], ["Body of Knowledge", "ndepụta gọọmentị nke isiokwu ule nwere ike ịjụ."]],
          slides: [
            { title: "Debe uru ahụ", bullets: ["Dee ụzọ ọhụrụ ahụ dị ka standard work", "Zụọ ndị mmadụ na ya", "Nọgide na-atụ ya"] },
            { title: "Chart na-ele usoro ahụ anya", bullets: ["Run chart: nọmba ka oge na-aga, ya na ahịrị etiti", "Control chart: na-agbakwunye oke maka mgbanwe nkịtị"] },
            { title: "Ule Yellow Belt abụọ", bullets: ["ASQ CSSYB: open book, achọghị ahụmịhe ọrụ", "IASSC ICYB: closed book, proctored, enweghị ihe a chọrọ tupu", "Lelee peeji gọọmentị: iwu na-agbanwe"] },
            { title: "Atụmatụ ọmụmụ na ule gị", bullets: ["Budata Body of Knowledge", "Kaa akara n'ihe ị maara; hazie ndị fọdụrụ", "Ezi ụbọchị; debanye aha mgbe akara omume kwụsiri ike"] }
          ],
          sources: [ASQ, IASSC],
          tryIt: "Ọrụ ikpeazụ: mechaa ọrụ otu peeji gị (nkọwa nsogbu na ebumnuche, eserese usoro, check sheet na ọnụego ntụpọ, Pareto chart na 5 Whys, mmezi i mere pilot ya na nọmba tupu na mgbe e mezichara, na control plan). Wee meghee peeji Yellow Belt nke ASQ ma ọ bụ IASSC, dee ụdị ule ị hụrụ n'ebe ahụ, ma mee atụmatụ ọmụmụ nwere opekata mpe oge ọmụmụ anọ nwere ụbọchị na ụbọchị ule ị chọrọ.",
          youCanNow: "idebe uru site na standard work na control plan, na ịgbaso atụmatụ nwere ụbọchị ruo n'ule Yellow Belt.",
          quickCheck: [
            { objective: "O5", q: "Ọnwa atọ mgbe mmezi gasịrị, mperi na-amalite ịrị elu ọzọ. Kedu nzọụkwụ na-efu efu?", options: ["Define", "Control", "Measure", "Analyze"], answer: 1, why: "Control na-edebe uru ahụ site na standard work, ọzụzụ na nlele na-aga n'ihu." },
            { objective: "O6", q: "Ebee ka ị ga-elele iwu na ụdị ule Yellow Belt ugbu a?", options: ["Ozi n'ịntanetị mgbasa ozi ọha (social media)", "Enyi gafere ya ọtụtụ afọ gara aga", "Mgbasa ozi maka ihe ọmụmụ dị ọnụ ala", "Peeji gọọmentị nke ụlọ ọrụ na-enye asambodo, dị ka asq.org ma ọ bụ iassc.org"], answer: 3, why: "Iwu ule, ụdị ya na ụgwọ na-agbanwe; peeji nke ụlọ ọrụ na-enye asambodo n'onwe ya bụ isi iyi a ga-atụkwasị obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nyochaa, mezie ma jikwaa",
        questions: [
          { objective: "O4", q: "Gịnị ka Pareto chart na-egosi?", options: ["Nsogbu ole na ole na-akpata ọtụtụ nsogbu", "Nzọụkwụ usoro n'usoro", "Mmefu ego ọrụ ahụ", "Onye a ga-ata ụta"], answer: 0, why: "Pareto chart na-ahazi nsogbu site na nke kacha ukwuu ruo na nke kacha nta ka ị hụ ole na ole kacha dị mkpa." },
          { objective: "O4", q: "Kedu ngwa ọrụ na-achịkọta ihe nwere ike ịkpata nsogbu n'ọkpụkpụ dị ka Methods, Machines na Materials?", options: ["Check sheet", "Run chart", "Eserese fishbone", "SIPOC"], answer: 2, why: "Eserese fishbone (Ishikawa) na-achịkọta ihe nwere ike ịkpata otu nsogbu." },
          { objective: "O5", q: "Fọm agaghị ezipu ruo mgbe e dejupụtara igbe ọ bụla a chọrọ. Nke a bụ ọmụmaatụ nke:", options: ["Overproduction", "Igbochi mperi", "Inventory", "Control chart"], answer: 1, why: "Igbochi mperi (poka-yoke) na-eme ka mperi sie ike ma ọ bụ ghara ikwe omume." },
          { objective: "O5", q: "Gịnị bụ nzọụkwụ 5S?", options: ["Sell, Ship, Save, Serve, Smile", "See, Say, Stop, Start, Sign", "Scan, Score, Solve, Sort, Send", "Sort, Set in order, Shine, Standardize, Sustain"], answer: 3, why: "5S bụ Sort, Set in order, Shine, Standardize, Sustain." },
          { objective: "O6", q: "Gịnị bụ Body of Knowledge?", options: ["Ndepụta gọọmentị nke isiokwu ule nwere ike ịjụ", "Akwụkwọ ọgwụ", "Akwụkwọ iwu ụlọ ọrụ", "Ndepụta azịza ule gara aga"], answer: 0, why: "Ụlọ ọrụ na-enye asambodo na-ebipụta Body of Knowledge ka ị mara ihe ị ga-agụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Ịdị Mma Ọrụ (Nkwadebe maka Six Sigma Yellow Belt)",
    questions: [
      { objective: "O1", q: "Gịnị ka DMAIC pụtara?", options: ["Do, Make, Ask, Inspect, Close", "Design, Monitor, Act, Inform, Check", "Define, Measure, Analyze, Improve, Control", "Decide, Measure, Approve, Install, Count"], answer: 2, why: "Nzọụkwụ ise nke ọrụ Six Sigma bụ Define, Measure, Analyze, Improve na Control." },
      { objective: "O1", q: "Ide nkọwa nsogbu na ebumnuche na-eme na nzọụkwụ olee?", options: ["Define", "Improve", "Control", "Analyze"], answer: 0, why: "Define na-akọwa nsogbu ahụ, ebumnuche na usoro ahụ." },
      { objective: "O1", q: "Kedu okwu bụ eziokwu banyere ihe ọmụmụ Yellow Belt dị ka nke a?", options: ["Imecha ya na-enye asambodo ASQ", "Ọ na-anọchi ule ọ bụla", "Ọ bụ naanị Black Belt nwere ike iwere ya", "Ọ na-akwado gị; ụlọ ọrụ na-enye asambodo na-enye ya"], answer: 3, why: "Ihe ọmụmụ na-akwado gị; ọ bụ naanị ụlọ ọrụ na-enye asambodo, dị ka ASQ ma ọ bụ IASSC, na-enye ya." },
      { objective: "O2", q: "Gịnị ka ezigbo nkọwa nsogbu nwere?", options: ["Ngwọta ị kacha masị", "Gịnị, ebee, kemgbe mgbe ole na otu o si buru ibu", "Aha onye ọrụ a ga-ata ụta", "Naanị okwu \"nsogbu\""], answer: 1, why: "Ọ na-enye eziokwu nsogbu ahụ n'akpọghị aha ihe kpatara ya ma ọ bụ ngwọta." },
      { objective: "O2", q: "Kedu nke bụ ebumnuche a pụrụ ịtụ?", options: ["\"Meekwuo nke ọma n'ọda\"", "\"Gbalịsie ike karịa\"", "\"Belata nnyefe na-egbu oge site na 10% ruo 3% tupu December 31\"", "\"Mee ka ndị ahịa nwekwuo obi ụtọ otu ụbọchị\""], answer: 2, why: "O nwere nọmba na ụbọchị, ya mere ị nwere ike ịmata ma i ruru ya." },
      { objective: "O2", q: "Eserese usoro na-egosi:", options: ["Nzọụkwụ usoro n'usoro, ya na igbe na akụ", "Uru ụlọ ọrụ ahụ", "Ebe ọfịs dị na map okporo ụzọ", "Onye ọrụ kacha eme ngwa ngwa"], answer: 0, why: "Eserese usoro na-ese nzọụkwụ ọ bụla site na mmalite ruo njedebe." },
      { objective: "O3", q: "Gịnị ka e ji check sheet eme?", options: ["Ịkwụ ndị ọrụ ụgwọ", "Ịbịanye aka na nkwekọrịta", "Ide ebumnuche", "Ịgụ ọnụ ugboro ole ụdị nsogbu ọ bụla na-eme"], answer: 3, why: "Check sheet bụ fọm dị mfe maka ịgụ ọnụ ntụpọ dị ka ụdị ha si dị." },
      { objective: "O3", q: "I lelere akwụkwọ ụgwọ 400, 12 nwere mperi. Gịnị bụ ọnụego ntụpọ?", options: ["12%", "3%", "4%", "0.3%"], answer: 1, why: "12 / 400 = 0.03, nke bụ 3%." },
      { objective: "O3", q: "Ihe 100, nke ọ bụla nwere ohere 5 nke mperi, nwere mperi 2 n'ozuzu. Gịnị bụ DPMO?", options: ["2,000", "400", "4,000", "20,000"], answer: 2, why: "2 / (100 x 5) = 0.004, na 0.004 x 1,000,000 = 4,000." },
      { objective: "O4", q: "Iwu 80/20 na Pareto chart pụtara:", options: ["Ihe ole na ole na-akpatakarị ọtụtụ nsogbu", "Ndị ọrụ 80 na-eme mperi 20", "Dozie nsogbu 20 kwa ụbọchị", "Ihe kpatara ọ bụla dị mkpa n'otu ụzọ"], answer: 0, why: "Pareto na-egosi ihe ole na ole kacha dị mkpa, ya mere ị na-amalite na mkpanaka kacha ogologo." },
      { objective: "O4", q: "Gịnị mere ị na-ajụ \"Gịnị mere?\" ihe dị ka ugboro ise?", options: ["Iji mee ka nzukọ ahụ gaa nwayọọ", "Iji chọta onye a ga-ata ụta", "N'ihi na ule chọrọ kpọmkwem ise", "Iji gwuo gafee ihe ịrịba ama ruo n'isi nsogbu ị nwere ike idozi"], answer: 3, why: "\"Gịnị mere?\" ọ bụla na-aga otu ọkwa n'ime ruo mgbe ị ruru ihe kpatara ị nwere ike ime ihe banyere ya." },
      { objective: "O4", q: "Kedu azịza bụ isi nsogbu ị nwere ike ime ihe banyere ya?", options: ["\"Ndị mmadụ na-ada umengwụ\"", "\"Enweghị nlele mmezi maka igwe mbipụta tiketi\"", "\"Ọdachi\"", "\"Ndị ahịa siri ike\""], answer: 1, why: "Isi nsogbu bụ oghere n'usoro ị nwere ike idozi, ọ bụghị ịta ụta ma ọ bụ ọdachi." },
      { objective: "O5", q: "Igbe ngwaahịa karịrị akarị jupụtara n'ime ụlọ azụ, ụfọdụ na-emebi. Kedu ihe efu nke a bụ?", options: ["Motion", "Waiting", "Inventory", "Non-used talent"], answer: 2, why: "Inwe ngwaahịa karịrị akarị n'aka bụ ihe efu nke inventory." },
      { objective: "O5", q: "Tupu ị gbasaa mmezi n'ebe niile, ị kwesịrị:", options: ["Ịnwale ya n'obere pilot ma tụnyere ya na baseline", "Ịghara ịtụ ya", "Ịgbanwe ihe ise n'otu oge", "Ịrịọ ndị ahịa ka ha chere"], answer: 0, why: "Pilot na-egosi ma mmezi ahụ na-arụ ọrụ tupu i mefuo oge na ego n'ịgbasa ya." },
      { objective: "O5", q: "Gịnị ka control plan na-ekwu?", options: ["Onye ga-enweta onyinye ego (bonus)", "Naanị ụbọchị mmalite ọrụ ahụ", "Otu esi ede nkọwa nsogbu", "Ihe a ga-elele, ugboro ole, onye na-elele na ihe a ga-eme ma ọ dalata"], answer: 3, why: "Control plan na-edebe uru ahụ site n'ịtọ nlele mgbe niile na nzaghachi." },
      { objective: "O5", q: "Run chart bụ:", options: ["Ndepụta ihe efu asatọ", "Chart ahịrị nke ntụle ka oge na-aga", "Eserese ihe kpatara nsogbu", "Map nke ụlọ"], answer: 1, why: "Run chart na-egosi data ka oge na-aga ka ị hụ ma uru ahụ ka dị." },
      { objective: "O6", q: "Dị ka asq.org si kwuo, ule ASQ Certified Six Sigma Yellow Belt bụ:", options: ["Naanị maka ndị nwere ahụmịhe ọrụ afọ ise", "Naanị n'ime klaasị nke onye were gị n'ọrụ", "Open book, achọghị ahụmịhe ọrụ ma ọ bụ agụmakwụkwọ", "Closed book, enweghị ndetu"], answer: 2, why: "ASQ kwuru na CSSYB achọghị ahụmịhe ọrụ ma ọ bụ agụmakwụkwọ, ule ya bụkwa open book." },
      { objective: "O6", q: "Dị ka iassc.org si kwuo, ule IASSC Yellow Belt bụ:", options: ["Closed book na proctored", "Open book, ndetu ọ bụla kwere", "E na-ewe ya n'enweghị oke oge", "Naanị maka ndị otu ASQ"], answer: 0, why: "IASSC depụtara ule ICYB dị ka closed book na proctored." },
      { objective: "O6", q: "Gịnị bụ nzọụkwụ mbụ kacha mma n'iwu atụmatụ ọmụmụ gị?", options: ["Debanye aha maka ule echi", "Zụta ihe ọmụmụ kacha dị oke ọnụ", "Buru n'isi azịza ule ochie site na weebụsaịtị", "Budata Body of Knowledge ma kaa akara n'isiokwu ị ga-agụ"], answer: 3, why: "Body of Knowledge na-egosi ihe ule ahụ gụnyere, ka ị hazie oge ọmụmụ maka ebe ị ka adịghị ike." },
      { objective: "O6", q: "Olee mgbe ị ga-edebanye aha maka ụbọchị ule gị?", options: ["Tupu ị gụọ ihe ọ bụla", "Mgbe akara nnwale omume gị kwụsiri ike ma i lelere iwu gọọmentị", "Ọ dịghị mgbe; asambodo adịghị mkpa", "Naanị mgbe onye were gị n'ọrụ gwara gị"], answer: 1, why: "Akara omume kwụsiri ike na iwu ọhụrụ pụtara na ị dị njikere iwere ule." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 7, 9, 10, 12, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nsogbu na ebumnuche", objective: "O2", notYet: "Nkọwa ahụ edoghị anya ma ọ bụ na-akpọ aha ihe kpatara ya ma ọ bụ ngwọta; ebumnuche enweghị nọmba ma ọ bụ ụbọchị.", meets: "Nkọwa ahụ na-enye gịnị, ebee, kemgbe mgbe ole na otu o si buru ibu; ebumnuche nwere nọmba na ụbọchị; e tinyere eserese usoro nwere nzọụkwụ 5 ruo 8.", exceeds: "Ọ nwekwara SIPOC ma ọ bụ na-akpọ aha ihe kacha dị onye ahịa mkpa (CTQ)." },
      { name: "Data na ọnụego ntụpọ", objective: "O3", notYet: "Data erughị 20, ma ọ bụ enweghị nkọwa ntụpọ doro anya.", meets: "Check sheet nwere opekata mpe data 20 na ọnụego ntụpọ ya na mgbakọ e gosiri.", exceeds: "Ọ na-enyekwa DPMO, ma ọ bụ na-egosi na e jiri otu iwu ịgụ ọnụ kwa ụbọchị." },
      { name: "Isi nsogbu", objective: "O4", notYet: "Enweghị Pareto chart, ma ọ bụ 5 Whys na-akwụsị n'ịta ụta.", meets: "Pareto chart a haziri site na nke kacha ukwuu ruo na nke kacha nta na 5 Whys na-akwụsị n'ihe kpatara n'usoro nke mmadụ nwere ike ime ihe banyere ya.", exceeds: "Ọ na-ejikwa fishbone gosi ihe ndị ọzọ kpatara nke otu ahụ wepụrụ." },
      { name: "Mmezi na njikwa", objective: "O5", notYet: "E nwaleghị mmezi ahụ, ma ọ bụ enweghị nọmba tupu na mgbe e mezichara.", meets: "Mmezi e mere pilot ya, nwere nọmba tupu na mgbe e mezichara, na control plan (gịnị, ugboro ole, onye, gịnị ma ọ dalata).", exceeds: "Ọ nwekwara standard work ma ọ bụ run chart nke ọtụtụ izu." },
      { name: "Akụkọ DMAIC", objective: "O1", notYet: "Peeji ahụ na-awụgharị, nzọụkwụ na-efu efu ma ọ bụ adịghị n'usoro.", meets: "Peeji ahụ na-agbaso Define, Measure, Analyze, Improve, Control n'usoro.", exceeds: "Onye na-amụ ihe nwere ike ịkọwa ọrụ ahụ n'erughị nkeji abụọ, dị ka n'ajụjụ ọnụ ọrụ." },
      { name: "Atụmatụ ọmụmụ na ule", objective: "O6", notYet: "Enweghị ụbọchị, ma ọ bụ e leleghị peeji gọọmentị ọ bụla.", meets: "Ọ na-akpọ aha ule, ụdị ule a lelere na peeji gọọmentị ya, opekata mpe oge ọmụmụ anọ nwere ụbọchị na ụbọchị ule a chọrọ.", exceeds: "Ọ na-ejikọkwa oge ọmụmụ na isiokwu Body of Knowledge ma tinye ụbọchị nnwale omume." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe were ma gafee ule Yellow Belt n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe jiri ọrụ otu peeji ha n'ajụjụ ọnụ, ma ọ bụ nweta ọrụ, nkwalite ma ọ bụ ọnọdụ n'otu mmezi (nnyocha nsochi)",
      "Ndị na-amụ ihe na ndị nwe obere azụmahịa na-akọ na ọnụego ntụpọ ma ọ bụ ihe efu belatara n'usoro ha họọrọ mgbe ụbọchị 30 gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, mkpịsị ode na rula maka check sheet, chart na eserese usoro",
      "Nhọrọ: spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel) maka Pareto chart na run chart",
      "Ezi usoro ị ga-ele anya otu izu ruo izu abụọ (n'ọrụ, n'azụmahịa, ma ọ bụ n'ụlọ)",
      "Ịntanetị iji gụọ peeji Yellow Belt gọọmentị nke ASQ ma ọ bụ IASSC",
      "Ihe dị ka nkeji 60 nke nkuzi na nnwale, gbakwunyere otu izu ruo izu abụọ nke ịnakọta data maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'otu: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ. Mee ka onye ọ bụla na-amụ ihe họrọ usoro ya na nnọkọ mbụ ka ịnakọta data malite n'oge.",
      "Meenụ omume Pareto chart na 5 Whys dị ka otu n'otu ọmụmaatụ unu niile na-eji (dị ka ọda cafe ezighi ezi) tupu ndị na-amụ ihe emee nke ha.",
      "Kwụsị 5 Whys ọ bụla na-akwụsị n'ịta ụta ma jụọ ihe dị n'usoro ahụ kwere ka mperi ahụ mee.",
      "Chetara ndị na-amụ ihe ka ha ghara ide aha ndị ahịa, ozi ndị ọrịa ma ọ bụ ihe nzuzo ụlọ ọrụ na data ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge; mee ka ndị na-amụ ihe mee omume ịkọwa ọrụ ha dị ka azịza ajụjụ ọnụ ọrụ.",
      "Ekwula ụgwọ ule ma ọ bụ akara ngafe site na ncheta; zipu ndị na-amụ ihe na asq.org ma ọ bụ iassc.org maka iwu ugbu a."
    ]
  }
};

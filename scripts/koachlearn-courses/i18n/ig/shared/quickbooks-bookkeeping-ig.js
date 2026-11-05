"use strict";

// Koach Learn course (Igbo translation of shared/quickbooks-bookkeeping.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CERTIPORT = { name: "Certiport (Pearson VUE): asambodo Intuit, gụnyere QuickBooks Certified User na Intuit Certified Bookkeeping Professional", url: "https://certiport.pearsonvue.com/Certifications/QuickBooks/Certified-User/Overview" };
const ACADEMY = { name: "Intuit Academy (saịtị ọzụzụ na asambodo nke Intuit)", url: "https://academy.intuit.com/" };
const TESTDRIVE = { name: "Enyemaka QuickBooks nke Intuit: Test drive na omume na QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-us/help-article/small-business-processes/test-drive-quickbooks-online/L9C12ODlA_US_en_US" };
const PROADVISOR = { name: "Ọzụzụ na asambodo QuickBooks ProAdvisor (maka ndị accountant)", url: "https://quickbooks.intuit.com/accountants/training-certification/" };

module.exports = {
  id: "quickbooks-bookkeeping-ig",
  lang: "ig",
  translationOf: "quickbooks-bookkeeping",
  category: "Workforce Development",
  name: "Idekọ Akaụntụ na QuickBooks",
  skills: "Ịhazi chart of accounts, Idekọ invoice na ụgwọ ndị ahịa kwụrụ, Itinye bill na mmefu, Ịtụnyere akaụntụ ụlọ akụ (reconcile), Ịgụ akụkọ ndị bụ isi, Ime atụmatụ maka asambodo QuickBooks",
  outcome: "idebe akwụkwọ ego obere azụmahịa na QuickBooks Online otu ọnwa: ịkewa ego n'akaụntụ ziri ezi, idekọ ihe e rere, ụgwọ a kwụrụ, bill na mmefu, ịtụnyere ma reconcile ụlọ akụ, ịgba akụkọ ndị bụ isi, na ịgbaso atụmatụ ruo n'asambodo QuickBooks.",
  about: [
    "Ihe fọrọ nke nta ka ọ bụrụ obere azụmahịa ọ bụla, ụka na nonprofit chọrọ onye ga-edebe akwụkwọ ego ya, ọtụtụ n'ime ha na-ejikwa QuickBooks. Idekọ akaụntụ (bookkeeping) nwere ike ịbụ ọrụ oge niile, ọrụ oge ụfọdụ ị na-arụ n'ụlọ, ma ọ bụ azụmahịa nke gị na-ejere ọtụtụ ndị ahịa ozi. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị ọrụ ọfịs chọrọ ọkwa ka mma, ndị nwe obere azụmahịa na ndị ọrụ afọ ofufo na nonprofit.",
    "Ị ga-eme ezi ọrụ ahụ: chart of accounts, invoice na ụgwọ ndị ahịa kwụrụ, bill na mmefu, bank feed, reconciliation nke ụlọ akụ, profit and loss na balance sheet, na ndepụta njedebe ọnwa. Ị na-eme omume na QuickBooks Online test drive nke Intuit, ụlọ ọrụ ihe atụ ị nwere ike imeghe na web browser ebe ọ dịghị ihe ị mere a na-echekwa, ma ọ bụ n'akwụkwọ ma ọ bụrụ na ị nweghị kọmputa.",
    "Ihe ọmụmụ a na-akwado gị maka ọrụ idekọ akaụntụ na maka asambodo Intuit dị ka QuickBooks Certified User na Intuit Certified Bookkeeping Professional, ndị Certiport na-enye ule ha. Ọ naghị enye asambodo ọ bụla; ị na-enweta ya site n'ịgafe ule gọọmentị ahụ. Lelee ibe weebụ gọọmentị ha maka nkọwa na ụgwọ ugbu a.",
    "Ọ bụrụ na i weela \"Mmalite Idekọ Akaụntụ Azụmahịa\" (Bookkeeping Basics), nke a bụ nzọụkwụ na-esote. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\" na obere nnwale nwere ajụjụ abụọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, ule nwere ajụjụ 20 na njedebe, na ọrụ ikpeazụ ị nwere ike igosi onye were gị n'ọrụ ma ọ bụ onye ahịa."
  ],
  finalTask: "Mee ngwugwu njedebe ọnwa QuickBooks gị maka azụmahịa ihe atụ (azụmahịa ihicha ụlọ, ụgbọala na-ere nri ma ọ bụ obere nonprofit): (1) chart of accounts nwere opekata mpe akaụntụ 12, nke ọ bụla e dere ụdị ya: income, expense, asset, liability ma ọ bụ equity; (2) ndekọ nke opekata mpe ihe omume ego 10 i tinyere na QuickBooks Online test drive ma ọ bụ n'akwụkwọ (opekata mpe invoice 3, ụgwọ ndị ahịa kwụrụ 2, na bill ma ọ bụ mmefu 4), nke ọ bụla nwere ụbọchị, onye ahịa ma ọ bụ vendor, akaụntụ na ego; (3) reconciliation ụlọ akụ nke ọnwa ahụ nke na-ejedebe na difference nke efu, ma ọ bụ ndetu e dere ede nke ihe ka na-adabaghị na ihe kpatara ya; (4) nchịkọta otu paragraf nke profit and loss ọnwa ahụ; na (5) atụmatụ asambodo ụbọchị 60 nwere ụbọchị: asambodo Intuit ị ga-akwado maka ya, mgbe ị ga-elele ibe gọọmentị ya, na mgbe ị ga-eme ule omume.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa chọrọ ọrụ ọfịs ma ọ bụ ọrụ idekọ akaụntụ: ndị na-achọ ọrụ, ndị ọrụ ọfịs na ụlọ ahịa na-achọ ọkwa ka elu, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị kwabatara obodo nwere ahụmịhe azụmahịa, ndị nwe obere azụmahịa na-edebe akwụkwọ nke ha, na ndị ọrụ afọ ofufo na nonprofit na-ahụ maka ego.",
    startingPoint: "Ha nwere ike iji web browser ma mee mgbakọ kwa ụbọchị site na calculator. Ụfọdụ edebewo ndekọ ego n'akwụkwọ ma ọ bụ na spreadsheet. Ọtụtụ ejibeghị QuickBooks ma ọ bụ nụ maka chart of accounts, reconciliation ma ọ bụ balance sheet.",
    gap: "Ndị na-ewe mmadụ n'ọrụ na ndị ahịa chọrọ ndị na-edekọ akaụntụ maraworị otu QuickBooks si edekọ ihe e rere, bill na ihe omume ụlọ akụ, ndị nwekwara ike ime ka akwụkwọ dabara na nke ụlọ akụ kwa ọnwa. Ọ bụrụ na ọ dịghị nke a, obere mperi na-agbakọ ruo ụtụ isi ezighi ezi, bill a kwụghị na invoice a kwụghị ụgwọ ha. Ịmụta nzọụkwụ na akụkọ ndị a, na inwe atụmatụ ruo n'asambodo Intuit, na-eme ka ọ dị mfe iwe onye na-amụ ihe n'ọrụ ma nyere ya aka ijere ndị ahịa nke ya ozi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 7 ruo 8); a na-akọwa okwu akaụntụ ọ bụla",
      "Ngwaọrụ: kọmputa ma ọ bụ tablet nwere web browser maka test drive; omume ọ bụla na-arụkwa n'akwụkwọ",
      "Ụgwọ: test drive na-emeghe na browser n'azụghị QuickBooks; ọ naghị echekwa mgbanwe, ya mere ndị na-amụ ihe na-ede ndetu",
      "QuickBooks na-agbanwe ihuenyo ya mgbe niile, ya mere ihe ọmụmụ a na-akụzi omume na aha akụkọ, ọ bụghị ụzọ menu kpọmkwem",
      "Nzuzo: omume na-eji ụlọ ọrụ ihe atụ ma ọ bụ nọmba e chepụtara, ọ dịghị mgbe ọ na-eji ezi okwuntughe ụlọ akụ ma ọ bụ nọmba akaụntụ",
      "Iwu ụtụ isi na-agbanwe ma dị iche n'ebe dị iche iche: nkuzi na-ezipụ gị na irs.gov ma ọ bụ ọkachamara ụtụ isi, ọ dịghị ndụmọdụ ụtụ isi ọ na-enye"
    ],
    prerequisites: "Ọ dịghị, mana \"Mmalite Idekọ Akaụntụ Azụmahịa\" ma ọ bụ \"Excel na Spreadsheet\" na-enyere ndị na-edekọbeghị ego na-abata na nke na-apụ aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị mkpọsa ọrụ idekọ akaụntụ ma ọ bụ arịrịọ onye ahịa", action: "idepụta ọrụ ndị bụ isi nke onye na-edekọ akaụntụ na QuickBooks ma kpọọ aha asambodo Intuit dabara n'ọrụ ahụ", standard: "na-akpọ opekata mpe ọrụ anọ na ibe weebụ gọọmentị ebe a na-elele asambodo ahụ" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta ihe omume ego obere azụmahịa", action: "ịkewa ihe ọ bụla n'ụdị akaụntụ ziri ezi na chart of accounts", standard: "na-etinye opekata mpe 9 n'ime 10 n'ụdị akaụntụ ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ihe e rere, onye ahịa na ụgwọ a kwụrụ", action: "idekọ invoice ma ọ bụ sales receipt na ụgwọ onye ahịa kwụrụ na QuickBooks", standard: "nwere onye ahịa, ụbọchị, ego na akaụntụ income ziri ezi, ọ dịghịkwa invoice fọdụrụ oghe mgbe a kwụrụ ya ụgwọ" },
    { id: "O4", condition: "Mgbe e nyere gị bill, receipt na vendor", action: "itinye bill ahụ, mmefu ahụ na bill payment na QuickBooks", standard: "nwere vendor, ụbọchị, ego na akaụntụ expense ziri ezi, ya na receipt etinyere ma ọ bụ e dere ya" },
    { id: "O5", condition: "Mgbe e nyere gị ihe omume ụlọ akụ nke otu ọnwa na akwụkwọ ụlọ akụ (bank statement)", action: "ịdakọ bank feed ma reconcile akaụntụ ụlọ akụ", standard: "na-ejedebe na difference nke efu, ma ọ bụ ndetu e dere ede nke ihe ka na-adabaghị" },
    { id: "O6", condition: "Na njedebe otu ọnwa", action: "ịgba ma kọwaa profit and loss, balance sheet na akụkọ invoice ndị ka ghere oghe", standard: "na-ekwu uru ma ọ bụ mfu ọnwa ahụ na ndị ka ji ụgwọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi na idekọ ihe e rere",
      lessons: [
        {
          title: "Ọrụ onye na-edekọ akaụntụ na QuickBooks na ụzọ ruo ya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta ọrụ ndị bụ isi nke onye na-edekọ akaụntụ na QuickBooks ma kpọọ aha asambodo nwere ike inyere gị aka ịnweta ọrụ.",
          text: [
            "Onye na-edekọ akaụntụ (bookkeeper) na-edekọ ego azụmahịa ka onye nwe ya mara mgbe niile ebe ọ guzo. Na QuickBooks, nke ahụ pụtara: iziga invoice na idekọ ụgwọ ndị ahịa kwụrụ, itinye bill na mmefu, ilele bank feed, ime reconciliation ụlọ akụ kwa ọnwa, ịgba akụkọ, na idebe receipt. Ndị na-edekọ akaụntụ na-arụ ọrụ maka otu ụlọ ọrụ, maka ụlọ ọrụ accounting, ma ọ bụ maka ọtụtụ obere ndị ahịa dị ka azụmahịa nke ha. Ụka na nonprofit chọkwara ha.",
            "QuickBooks Online bụ ụdị weebụ nke Intuit, nke a na-eji na browser. QuickBooks Desktop bụ nke a na-awụnye na kọmputa. Ọtụtụ ndị ahịa obere azụmahịa ọhụrụ na-eji QuickBooks Online, ya mere ihe ọmụmụ a na-eji ya, mana echiche ndị ahụ bụ otu n'ime ha abụọ.",
            "Asambodo Intuit abụọ dabara n'ihe ọmụmụ a. QuickBooks Certified User na-egosi na ị maara iji QuickBooks. Intuit Certified Bookkeeping Professional na-egosi na ị maara isi ihe idekọ akaụntụ. Certiport, otu azụmahịa nke Pearson VUE, na-enye ule abụọ ahụ, Intuit Academy na-enyekwa ọzụzụ. Ndị accountant nwekwara ike inweta asambodo QuickBooks ProAdvisor. Ihe ọmụmụ a na-akwado gị; ọ naghị enye asambodo ọ bụla. Ụgwọ, ndị ruru eru na nkọwa ule na-agbanwe, ya mere lelee ibe weebụ gọọmentị ha.",
            "Onye na-edekọ akaụntụ abụghị onye na-akwadebe ụtụ isi ma ọ bụ certified public accountant (CPA). Ị na-edebe ndekọ ka ọ dị ọcha; ajụjụ ụtụ isi na-aga n'aka ọkachamara ụtụ isi ma ọ bụ irs.gov."
          ],
          words: [["Bookkeeper (onye na-edekọ akaụntụ)", "onye na-edekọ ego na-abata na ego na-apụ n'azụmahịa ma na-eme ka ndekọ ahụ zie ezi."], ["QuickBooks Online", "ngwa idekọ akaụntụ nke Intuit na-arụ ọrụ na web browser."], ["Asambodo (credential)", "akwụkwọ na-egosi na i gafere ule gọọmentị."], ["Certiport", "ụlọ ọrụ Pearson VUE na-enye ule asambodo Intuit."], ["CPA", "certified public accountant: accountant nwere ikike nwere ike ịrụ ọrụ onye na-edekọ akaụntụ na-enweghị ike ịrụ, dị ka audit."]],
          slides: [
            { title: "Ihe onye na-edekọ akaụntụ na QuickBooks na-eme", bullets: ["Invoice na ụgwọ ndị ahịa kwụrụ", "Bill na mmefu", "Bank feed na reconciliation kwa ọnwa", "Akụkọ na receipt"] },
            { title: "Ebe ndị na-edekọ akaụntụ na-arụ ọrụ", bullets: ["Otu ụlọ ọrụ ma ọ bụ ụlọ ọrụ accounting", "Ọtụtụ obere ndị ahịa, dị ka azụmahịa nke gị", "Ụka na nonprofit"] },
            { title: "Asambodo nwere ike inyere aka", bullets: ["QuickBooks Certified User", "Intuit Certified Bookkeeping Professional", "Certiport na-enye ule ha; lelee ibe weebụ gọọmentị"] },
            { title: "Mara ọrụ gị", bullets: ["Ị na-edebe ndekọ ka ọ dị ọcha", "Ajụjụ ụtụ isi na-aga n'aka ọkachamara ụtụ isi ma ọ bụ irs.gov", "Ihe ọmụmụ a na-akwado gị; ule ahụ na-enye asambodo"] }
          ],
          sources: [CERTIPORT, ACADEMY, PROADVISOR],
          tryIt: "Chọta otu mkpọsa ọrụ idekọ akaụntụ n'ịntanetị (chọọ \"bookkeeper QuickBooks\" na saịtị ọrụ). Dee ọrụ anọ o depụtara na ma ọ̀ chọrọ asambodo QuickBooks. Wee meghee ibe Certiport dị na sources ma dee aha asambodo Intuit abụọ dabara.",
          youCanNow: "idepụta ihe onye na-edekọ akaụntụ na QuickBooks na-eme ma kpọọ aha asambodo dabara n'ọrụ ahụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ so n'ọrụ onye na-edekọ akaụntụ kwa ọnwa?", options: ["Ịbịanye aka n'akwụkwọ ụtụ isi ụlọ ọrụ dị ka CPA", "Ime reconciliation akaụntụ ụlọ akụ", "Ime audit ụlọ ọrụ ọzọ", "Inye ndụmọdụ itinye ego (investment)"], answer: 1, why: "Ime reconciliation ụlọ akụ kwa ọnwa bụ isi ọrụ idekọ akaụntụ." },
            { objective: "O1", q: "Onye na-enye ule QuickBooks Certified User?", options: ["IRS", "Ọfịs ọrụ steeti gị", "Onye ọ bụla na-eji QuickBooks", "Certiport, maka Intuit"], answer: 3, why: "Certiport, otu azụmahịa nke Pearson VUE, na-enye ule asambodo Intuit." }
          ]
        },
        {
          title: "Chart of accounts na ndekọ nwere akụkụ abụọ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kewaa ihe omume ego azụmahịa n'ụdị akaụntụ ise ahụ.",
          text: [
            "Chart of accounts bụ ndepụta ebe ọ bụla a pụrụ ikewa ego na QuickBooks. Akaụntụ ọ bụla so n'otu n'ime ụdị ise. Income (ego mbata): ego e nwetara, dị ka ihe e rere ma ọ bụ onyinye. Expenses (mmefu): ụgwọ ịrụ azụmahịa, dị ka ngwa ọrụ, ụgwọ ụlọ na mmanụ ụgbọala. Assets (akụ): ihe azụmahịa nwere ma ọ bụ ego a ji ya, dị ka akaụntụ ụlọ akụ, ngwaọrụ na ego ndị ahịa ka ji. Liabilities (ụgwọ e ji): ego azụmahịa ji, dị ka mbinye ego, credit card ma ọ bụ bill a kwụbeghị. Equity (òkè onye nwe): òkè onye nwe ya, gụnyere ego onye nwe ya tinyere ma ọ bụ wepụrụ.",
            "Ndekọ ọ bụla na-emetụ opekata mpe akaụntụ abụọ. A na-akpọ nke ahụ double-entry bookkeeping. Mgbe i zigara invoice $200, income na-arị elu, ego ndị ahịa ji gị (accounts receivable) na-arịkwa elu. Mgbe onye ahịa kwụrụ, accounts receivable na-agbadata, ego n'ụlọ akụ na-arị elu. QuickBooks na-eme akụkụ nke abụọ maka gị mgbe ị jiri fọm ziri ezi, ọ bụ ya mere ịhọrọ fọm na akaụntụ ziri ezi ji dị mkpa.",
            "QuickBooks na-enye ụlọ ọrụ ọhụrụ ọ bụla chart of accounts mbido dabere n'ụdị azụmahịa ya. Onye na-edekọ akaụntụ na-edozi ya: na-agbakwunye akaụntụ azụmahịa ahụ na-eji n'ezie, na-agbanwe aha ndị na-edoghị anya, ma na-edebe otu aha ahụ kwa ọnwa. Nonprofit nwere ike ịgbakwunye akaụntụ dị ka Donations, Grants na Program supplies.",
            "Na test drive, chọọ \"chart of accounts\" iji meghee ndepụta ahụ ma hụ ụdị akaụntụ ọ bụla."
          ],
          steps: ["Meghee chart of accounts (chọọ ya ma ọ bụrụ na ị hụghị ya).", "Gụọ ụdị akaụntụ ọ bụla: income, expense, asset, liability ma ọ bụ equity.", "Gbakwunye akaụntụ azụmahịa ahụ na-eji n'ezie.", "Gbanwee aha akaụntụ ndị na-edoghị anya ka onye ọ bụla ghọta ha.", "Jiri otu akaụntụ ahụ mgbe niile maka otu ụdị ego ahụ."],
          words: [["Chart of accounts", "ndepụta akaụntụ niile a pụrụ ikewa ego n'ime ha."], ["Asset (akụ)", "ihe azụmahịa nwere ma ọ bụ ego a ji ya, dị ka ego n'ụlọ akụ ma ọ bụ ngwaọrụ."], ["Liability (ụgwọ e ji)", "ego azụmahịa ji, dị ka mbinye ego ma ọ bụ bill a kwụbeghị."], ["Equity (òkè onye nwe)", "òkè onye nwe azụmahịa ahụ."], ["Accounts receivable (A/R)", "ego ndị ahịa ji azụmahịa."], ["Accounts payable (A/P)", "ego azụmahịa ji ndị vendor maka bill a kwụbeghị."], ["Double-entry", "ndekọ ọ bụla na-agbanwe opekata mpe akaụntụ abụọ ka akwụkwọ ego nọrọ n'nhata."]],
          slides: [
            { title: "Ụdị akaụntụ ise", bullets: ["Income na expenses", "Assets na liabilities", "Equity: òkè onye nwe"] },
            { title: "Ndekọ ọ bụla nwere akụkụ abụọ", bullets: ["Invoice: income na-arị elu, A/R na-arị elu", "Ụgwọ a kwụrụ: A/R na-agbadata, ụlọ akụ na-arị elu", "Fọm ziri ezi na-eme ka QuickBooks mee ha abụọ"] },
            { title: "Dozie ndepụta ahụ", bullets: ["Gbakwunye akaụntụ azụmahịa ahụ na-eji", "Gbanwee aha akaụntụ na-edoghị anya", "Otu akaụntụ maka otu ụdị ego"] },
            { title: "Ihe atụ nonprofit", bullets: ["Income: Donations, Grants", "Expense: Program supplies, Rent"] }
          ],
          tryIt: "N'akwụkwọ, mee kọlụm abụọ: Ihe na Ụdị akaụntụ. Kewaa ihe iri ndị a: ngwa ihicha ụlọ, ego dị n'akaụntụ checking azụmahịa, onye ahịa ji $150, mbinye ego ụgbọala, ego e nwetara n'ọrụ ihicha ụlọ, onye nwe ya tinyere $500 iji malite, ụgwọ ụlọ, ego e ji na credit card, grant e nyere (maka nonprofit), na vacuum ọhụrụ. Wee meghee chart of accounts na test drive ma tụnyere otu ụlọ ọrụ ihe atụ ahụ si kewaa ihe yiri ha.",
          youCanNow: "ịkewa ihe omume ego n'akaụntụ income, expense, asset, liability na equity.",
          quickCheck: [
            { objective: "O2", q: "Azụmahịa ji $3,000 na mbinye ego ụgbọala. Kedu ụdị akaụntụ mbinye ego ahụ bụ?", options: ["Liability", "Income", "Expense", "Equity"], answer: 0, why: "Ego azụmahịa ji bụ liability." },
            { objective: "O2", q: "Ego ndị ahịa ka ji azụmahịa ka a na-edekọ na:", options: ["Accounts payable", "Mmefu ụgwọ ụlọ (Rent expense)", "Accounts receivable", "Equity onye nwe"], answer: 2, why: "Accounts receivable (A/R) bụ ego ndị ahịa ji." }
          ]
        },
        {
          title: "Invoice, sales receipt na ụgwọ ndị ahịa kwụrụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dekọọ invoice, sales receipt na ụgwọ onye ahịa kwụrụ na QuickBooks.",
          text: [
            "Jiri invoice mgbe onye ahịa ga-akwụ ụgwọ ma emechaa. Invoice na-edepụta onye ahịa, ụbọchị, ngwaahịa ma ọ bụ ọrụ, ego na ụbọchị a ga-akwụ ya. Jiri sales receipt mgbe onye ahịa kwụrụ ụgwọ n'oge ọ zụrụ ihe, dị ka ihe e rere n'ụgbọala na-ere nri. Ha abụọ na-edekọ income; naanị invoice na-eke ego a ji (accounts receivable).",
            "Mgbe a kwụrụ ụgwọ invoice, dekọọ ụgwọ ahụ megide invoice ahụ. Emela ihe e rere ọhụrụ, ma ọ bụghị ya income ga-agụ ugboro abụọ. QuickBooks na-ede na a kwụrụ invoice ahụ. Ọ bụrụ na onye ahịa kwụrụ ego aka ma ọ bụ check, QuickBooks nwere ike ijide ụgwọ ahụ ruo mgbe ị dekọrọ deposit ụlọ akụ, ka deposit ahụ dabara n'ihe ụlọ akụ na-egosi.",
            "Hazie onye ahịa ọ bụla otu ugboro, ya na aha ya na ozi ịkpọtụrụ ya, ma hazie ngwaahịa ma ọ bụ ọrụ ọ bụla otu ugboro, ya na ọnụ ahịa ya na akaụntụ income ya. Mgbe ahụ invoice ọ bụla na-eji otu akaụntụ ndị ahụ.",
            "Na QuickBooks Online, fọm ọhụrụ dị ka invoice, sales receipt na ụgwọ a kwụrụ na-amalite site na bọtịnụ New (+). Na test drive, ọ dịghị ihe a na-echekwa, ya mere dee ihe i tinyere."
          ],
          steps: ["Họrọ fọm: invoice (ịkwụ ma emechaa) ma ọ bụ sales receipt (akwụọla ugbu a).", "Họrọ onye ahịa, ma ọ bụ gbakwunye onye ọhụrụ.", "Tinye ụbọchị, ngwaahịa ma ọ bụ ọrụ, ego na ụbọchị a ga-akwụ ya.", "Chekwaa fọm ahụ.", "Mgbe onye ahịa kwụrụ ụgwọ invoice, dekọọ ụgwọ ahụ megide invoice ahụ.", "Dekọọ deposit ụlọ akụ ma ọ bụrụ na QuickBooks jidere ụgwọ ahụ ka e tinye ya ma emechaa.", "Lelee na invoice ahụ na-egosi ugbu a na a kwụrụ ya."],
          words: [["Invoice", "akwụkwọ ụgwọ ị na-ezigara onye ahịa ga-akwụ ma emechaa."], ["Sales receipt", "ndekọ ihe e rere nke a kwụrụ ụgwọ ya n'oge ahụ."], ["Ụgwọ onye ahịa kwụrụ (customer payment)", "ndekọ na onye ahịa kwụrụ ụgwọ invoice."], ["Deposit", "ego e tinyere n'ụlọ akụ, nke kwesịrị ịdakọ na bank statement."]],
          slides: [
            { title: "Invoice ka ọ bụ sales receipt?", bullets: ["Invoice: onye ahịa ga-akwụ ma emechaa", "Sales receipt: a kwụrụ n'oge a zụrụ ihe", "Naanị invoice na-eke A/R"] },
            { title: "Dekọọ ụgwọ ahụ megide invoice ahụ", bullets: ["Emela ihe e rere nke abụọ maka ya", "Ma ọ bụghị ya income ga-agụ ugboro abụọ", "Invoice ahụ ga-egosi na a kwụrụ ya"] },
            { title: "Hazie otu ugboro, jiri ya mgbe niile", bullets: ["Ndị ahịa ya na ozi ịkpọtụrụ ha", "Ngwaahịa na ọrụ ya na ọnụ ahịa na akaụntụ income"] },
            { title: "Deposit na-adakọ na ụlọ akụ", bullets: ["Ego aka na check nwere ike ichere ka e tinye ha", "Dekọọ deposit ka ọ dakọ na statement"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Meghee QuickBooks Online test drive (njikọ dị na sources; meghee ya na windo browser nzuzo). Mee invoice $250 maka ọrụ ịhazi ubi (landscaping) nye onye ahịa ihe atụ, a ga-akwụ n'ime ụbọchị 30. Wee nata ụgwọ maka invoice ahụ ma lelee na invoice ahụ na-egosi na a kwụrụ ya. Dee onye ahịa, ụbọchị, ego na akaụntụ income n'akwụkwọ, n'ihi na test drive anaghị echekwa. Ị nweghị kọmputa? See invoice na ụgwọ ahụ n'akwụkwọ.",
          youCanNow: "idekọ invoice, sales receipt na ụgwọ onye ahịa kwụrụ ka a gụọ income naanị otu ugboro.",
          quickCheck: [
            { objective: "O3", q: "Onye ahịa ụgbọala na-ere nri kwụrụ ụgwọ na windo. Kedu fọm ị ga-eji?", options: ["Invoice", "Bill", "Purchase order", "Sales receipt"], answer: 3, why: "Sales receipt na-edekọ ihe e rere nke a kwụrụ ụgwọ ya n'oge ahụ." },
            { objective: "O3", q: "Onye ahịa kwụrụ invoice $250. Gịnị ka ị ga-edekọ?", options: ["Sales receipt ọhụrụ maka $250", "Ụgwọ a kwụrụ megide invoice ahụ", "Bill maka $250", "Ọ dịghị ihe; QuickBooks ma"], answer: 1, why: "Idekọ ụgwọ ahụ megide invoice ahụ na-emechi ya n'agụghị income ugboro abụọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi na idekọ ihe e rere",
        questions: [
          { objective: "O1", q: "Kedu okwu bụ eziokwu gbasara ihe ọmụmụ a?", options: ["Ọ na-akwado gị; ule gọọmentị na-enye asambodo", "Ọ na-enye QuickBooks Certified User", "Ọ na-eme gị CPA", "Ọ na-anọchi onye na-akwadebe ụtụ isi"], answer: 0, why: "Ihe ọmụmụ a na-akwado gị; Certiport na-enye ule ahụ na-enye asambodo." },
          { objective: "O2", q: "Ụgwọ ụlọ a kwụrụ maka ụlọ ahịa bụ kedu ụdị akaụntụ?", options: ["Asset", "Liability", "Expense", "Income"], answer: 2, why: "Ụgwọ ụlọ bụ ụgwọ ịrụ azụmahịa, ya mere ọ bụ expense." },
          { objective: "O2", q: "Onye nwe ya tinyere $500 nke ego ya n'azụmahịa. Nke ahụ na-aga na:", options: ["Income ihe e rere", "Equity", "Accounts payable", "Mmefu ngwa ọrụ"], answer: 1, why: "Ego onye nwe ya tinyere so n'equity onye nwe ya, ọ bụghị income." },
          { objective: "O3", q: "Onye ahịa ihicha ụlọ ga-akwụ n'ime ụbọchị 30. Kedu fọm ị ga-eme?", options: ["Sales receipt", "Bill", "Deposit", "Invoice"], answer: 3, why: "Invoice bụ maka onye ahịa na-akwụ ma emechaa." },
          { objective: "O3", q: "Onye na-edekọ akaụntụ mere ihe e rere ọhụrụ maka ụgwọ onye ahịa kwụrụ kama idekọ ya megide invoice. Gịnị na-emehie?", options: ["A na-agụ income ugboro abụọ, invoice ahụ ka na-eghe oghe", "Ọ dịghị ihe na-emehie", "Ego n'ụlọ akụ na-agbadata", "A na-ana onye ahịa ụgwọ ntaramahụhụ"], answer: 0, why: "Invoice na ihe e rere ọhụrụ ahụ abụọ na-agụ dị ka income, invoice ahụ ka dịkwa ka a kwụbeghị ya." }
        ]
      }
    },
    {
      name: "Isi 2: Bill, ụlọ akụ na njedebe ọnwa",
      lessons: [
        {
          title: "Bill, mmefu na ndị vendor",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tinye bill, mmefu na bill payment ya na vendor na akaụntụ ziri ezi.",
          text: [
            "Vendor bụ onye ọ bụla azụmahịa na-azụta ihe n'aka ya: ụlọ ahịa ngwa ọrụ, onye nwe ụlọ, ụlọ ọrụ ekwentị. Hazie vendor ọ bụla otu ugboro.",
            "Jiri bill mgbe azụmahịa ga-akwụ ma emechaa, dị ka invoice onye na-eweta ngwa a ga-akwụ n'ime ụbọchị 30. Bill ahụ na-aba n'accounts payable. Mgbe ị kwụrụ ya, dekọọ bill payment megide bill ahụ ka a ghara ịgụ ya ugboro abụọ. Jiri expense mgbe azụmahịa kwụrụ ozugbo, dị ka ihe a zụrụ na kaadị n'ụlọ ahịa ngwa ọrụ.",
            "Họrọ akaụntụ expense dabara n'ihe a zụrụ: Supplies, Fuel, Rent, Phone. Tinye foto receipt ahụ na QuickBooks, ma ọ bụ dee nọmba receipt ahụ na memo. Receipt na-akwado mmefu ọ bụla ma ọ bụrụ na onye ọ bụla ajụọ ma emechaa.",
            "Ọ bụrụ na azụmahịa na-akwụ ndị contractor ụgwọ, nata Form W-9 n'aka onye ọ bụla tupu ịkwụ ya ma dee ha dị ka contractor, n'ihi na ụfọdụ azụmahịa ga-etinye akwụkwọ ozi (information returns) maka ha. Iwu na ego ndị ahụ na-agbanwe, ya mere lelee irs.gov ma ọ bụ ọkachamara ụtụ isi."
          ],
          steps: ["Họrọ vendor, ma ọ bụ gbakwunye onye ọhụrụ.", "Họrọ bill (ịkwụ ma emechaa) ma ọ bụ expense (akwụọla ugbu a).", "Tinye ụbọchị, ego na akaụntụ expense dabara.", "Tinye receipt ahụ ma ọ bụ dee nọmba ya.", "Mgbe ị kwụrụ bill, dekọọ bill payment megide bill ahụ.", "Lelee na bill ahụ na-egosi ugbu a na a kwụrụ ya."],
          words: [["Vendor", "onye ma ọ bụ azụmahịa azụmahịa ahụ na-azụta ihe n'aka ya."], ["Bill", "ndekọ ihe azụmahịa ga-akwụ ụgwọ ya ma emechaa."], ["Expense (mmefu)", "ndekọ ihe azụmahịa kwụrụ ụgwọ ya ozugbo."], ["Bill payment", "ndekọ na a kwụrụ bill."], ["Form W-9", "fọm IRS contractor na-ejupụta ya na aha ya na nọmba ụtụ isi ya maka ndekọ azụmahịa."]],
          slides: [
            { title: "Bill ka ọ bụ expense?", bullets: ["Bill: ịkwụ ma emechaa, na-aga A/P", "Expense: a kwụrụ ozugbo", "Kwụọ bill site na bill payment, ọ bụghị expense ọhụrụ"] },
            { title: "Họrọ akaụntụ ziri ezi", bullets: ["Supplies, Fuel, Rent, Phone", "Otu akaụntụ ahụ mgbe niile"] },
            { title: "Ihe akaebe maka mmefu ọ bụla", bullets: ["Tinye foto receipt", "Ma ọ bụ dee nọmba receipt na memo"] },
            { title: "Ịkwụ ndị contractor ụgwọ", bullets: ["Nata Form W-9 tupu ị kwụọ", "Dee ha dị ka contractor", "Lelee irs.gov maka iwu ugbu a gbasara ịtinye akwụkwọ"] }
          ],
          sources: [{ name: "IRS: Banyere Form W-9", url: "https://www.irs.gov/forms-pubs/about-form-w-9" }, TESTDRIVE],
          tryIt: "Na test drive ma ọ bụ n'akwụkwọ, tinye ihe atọ: bill ngwa ọrụ $120 a ga-akwụ n'ime ụbọchị 30, mmanụ ụgbọala $45 a kwụrụ na kaadị taa, na ịkwụ bill $120 ahụ izu abụọ ka e mesịrị. Maka nke ọ bụla, dee vendor, fọm i ji, akaụntụ na ego. Wee kọwaa n'otu ahịrịokwu ihe mere bill payment abụghị expense ọhụrụ.",
          youCanNow: "itinye bill, mmefu na bill payment ya na vendor, akaụntụ na receipt ziri ezi.",
          quickCheck: [
            { objective: "O4", q: "Onye na-eweta ngwa zitere bill a ga-akwụ n'ime ụbọchị 30. Gịnị ka ị ga-etinye taa?", options: ["Expense", "Bill", "Invoice", "Sales receipt"], answer: 1, why: "Bill na-edekọ ihe azụmahịa ga-akwụ ma emechaa." },
            { objective: "O4", q: "Ị kwụrụ bill ahụ izu abụọ ka e mesịrị. Gịnị ka ị ga-edekọ?", options: ["Expense ọhụrụ maka otu ego ahụ", "Deposit", "Bill payment megide bill ahụ", "Ọ dịghị ihe"], answer: 2, why: "Bill payment na-emechi bill ahụ n'agụghị ụgwọ ahụ ugboro abụọ." }
          ]
        },
        {
          title: "Bank feed na reconciliation ụlọ akụ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Dakọọ ahịrị bank feed na ndekọ ma reconcile akaụntụ ụlọ akụ ruo difference nke efu.",
          text: [
            "QuickBooks nwere ike ijikọ n'ụlọ akụ azụmahịa ma budata ihe omume ya. Nke ahụ bụ bank feed. Ahịrị ọ bụla e budatara na-echere ka i lelee ya. Ọ bụrụ na i tinyelarị ya, dakọọ ya (match) na ndekọ ahụ. Ọ bụrụ na ọ bụghị, gbakwunye ya ya na onye a kwụrụ na akaụntụ ziri ezi. Agbakwunyela ahịrị e tinyelarị, ma ọ bụghị ya a ga-agụ ya ugboro abụọ. Onye nwe azụmahịa na-ejikọ ụlọ akụ; onye na-edekọ akaụntụ anaghị arịọ okwuntughe ụlọ akụ onye nwe ya.",
            "Bank reconciliation na-egosi na QuickBooks na bank statement kwekọrọ. Otu ugboro kwa ọnwa, were statement ahụ, tinye ego ikpeazụ ya (ending balance) na ụbọchị ya, ma kaa akara (tick) deposit na ụgwọ ọ bụla na QuickBooks dị na statement ahụ. Mgbe difference bụ efu, mechaa reconciliation ahụ.",
            "Ọ bụrụ na difference abụghị efu, chọọ ihe ndị na-akpatakarị ya: ụgwọ ụlọ akụ (bank fee) ma ọ bụ interest a tinyeghị, ndekọ e dere ego ezighi ezi, ndekọ e mere ugboro abụọ, ma ọ bụ ndekọ dị n'ọnwa ezighi ezi. Check ndị ụlọ akụ na-akwụbeghị (uncleared) na-anọ n'akaghị akara; ha ga-apụta n'ọnwa na-abịa.",
            "Emela ka reconciliation ruo efu n'ike site n'ichepụta ndekọ. Ọ bụrụ na ị chọtaghị nsogbu ahụ, dee ndetu ma jụọ onye nwe ya ma ọ bụ accountant."
          ],
          steps: ["Lelee ahịrị bank feed ọhụrụ ọ bụla.", "Dakọọ ya na ndekọ dị adị, ma ọ bụ gbakwunye ya ya na onye a kwụrụ na akaụntụ ziri ezi.", "Nweta bank statement nke ọnwa ahụ.", "Malite reconciliation ma tinye ụbọchị ikpeazụ na ego ikpeazụ nke statement ahụ.", "Kaa akara ndekọ ọ bụla dị na statement ahụ.", "Chọta ma dozie ihe ọ bụla na-egbochi difference ịbụ efu.", "Mechaa mgbe difference bụ efu, ma ọ bụ dee ndetu ma rịọ enyemaka."],
          words: [["Bank feed", "ihe omume ụlọ akụ QuickBooks na-ebudata ka i lelee ha."], ["Match (dakọọ)", "ijikọ ahịrị ụlọ akụ e budatara na ndekọ dịbu na QuickBooks."], ["Reconcile", "ilele na ndekọ gị na bank statement kwekọrọ, ahịrị n'ahịrị."], ["Difference", "ọdịiche dị n'etiti QuickBooks na bank statement n'oge reconciliation; ọ kwesịrị ịbụ efu."], ["Uncleared check", "check i dere nke ụlọ akụ na-akwụbeghị."]],
          slides: [
            { title: "Lelee bank feed", bullets: ["I tinyelarị ya? Dakọọ ya", "I tinyebeghị ya? Gbakwunye ya ya na akaụntụ ziri ezi", "Agbakwunyela ahịrị ugboro abụọ"] },
            { title: "Reconcile otu ugboro kwa ọnwa", bullets: ["Tinye ụbọchị ikpeazụ na ego ikpeazụ nke statement", "Kaa akara ahịrị ọ bụla dị na statement", "Mechaa mgbe difference bụ efu"] },
            { title: "Mgbe ọ na-adabaghị", bullets: ["Bank fee ma ọ bụ interest efuru", "Ego ezighi ezi, ndekọ ugboro abụọ ma ọ bụ ọnwa ezighi ezi", "Uncleared check na-echere ọnwa na-abịa"] },
            { title: "Nọgide n'eziokwu na nchekwa", bullets: ["Emela ya n'ike site na ndekọ e chepụtara", "Dee ndetu ma rịọ enyemaka", "Arịọla okwuntughe ụlọ akụ onye nwe ya"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Mee statement omume n'akwụkwọ: ego mbido $1,000; deposit $250 na $400; ụgwọ $120, $45 na $60; bank fee $5; ego ikpeazụ $1,420. Ndekọ akwụkwọ gị nwere ahịrị niile ewezuga bank fee ahụ, gbakwunyere check $75 ụlọ akụ na-akwụbeghị. Kaa akara ahịrị ndị dakọrọ, chọta ihe na-egbochi difference ịbụ efu, ma dee ihe ị ga-etinye. Na test drive, meghee ibe banking ma lee otu ahịrị e budatara si echere ka a dakọọ ha ma ọ bụ gbakwunye ha.",
          youCanNow: "ịdakọ bank feed ma reconcile akaụntụ ụlọ akụ ruo difference nke efu, ma ọ bụ dee ihe ka na-adabaghị.",
          quickCheck: [
            { objective: "O5", q: "Ahịrị bank feed bụ ụgwọ i tinyelarị dị ka bill payment. Gịnị ka ị ga-eme?", options: ["Dakọọ ya na bill payment ahụ", "Gbakwunye ya dị ka expense ọhụrụ", "Hichapụ bill ahụ", "Leghara ya anya ruo mgbe ebighị ebi"], answer: 0, why: "Ịdakọ na-ejikọ ahịrị ụlọ akụ ahụ na ndekọ gị n'agụghị ya ugboro abụọ." },
            { objective: "O5", q: "Reconciliation gị dị iche site na $5, statement na-egosikwa bank fee $5. Kedu nzọụkwụ kacha mma?", options: ["Chepụta ndekọ maka ego ọ bụla", "Hapụ reconciliation n'ọnwa a", "Gbanwee ego nke statement", "Tinye bank fee $5 ahụ dị ka expense"], answer: 3, why: "Bank fee efuru bụ ihe na-akpatakarị ya; itinye ya na-edozi difference ahụ n'eziokwu." }
          ]
        },
        {
          title: "Akụkọ na njedebe ọnwa",
          objectives: ["O6"],
          minutes: 6,
          goal: "Gbaa ma kọwaa profit and loss, balance sheet na akụkọ invoice ndị ka ghere oghe.",
          text: [
            "Profit and loss (P&L) na-egosi income wepụ expenses maka otu oge, dị ka otu ọnwa. Ọ bụrụ na income ka ukwuu, azụmahịa nwetara uru (profit); ọ bụrụ na expenses ka ukwuu, o nwere mfu (loss). Balance sheet na-egosi, n'otu ụbọchị, ihe azụmahịa nwere (assets), ihe ọ ji (liabilities) na òkè onye nwe ya (equity).",
            "Akụkọ accounts receivable aging na-egosi ndị ahịa ka ji ego na otu ha si gafee oge. Akụkọ accounts payable aging na-egosi bill ndị azụmahịa ka ji. Akụkọ abụọ ndị a na-agwa onye nwe ya onye ọ ga-akpọ na ihe ọ ga-akwụ ọzọ.",
            "Njedebe ọnwa (month-end close) bụ ndepụta onye na-edekọ akaụntụ na-agbaso kwa ọnwa: e tinyela ihe niile e rere, ụgwọ a kwụrụ, bill na mmefu; e lelela bank feed; e reconcilela akaụntụ ụlọ akụ na credit card ọ bụla; e tinyela receipt; a gbaala akụkọ ma zigara onye nwe ya ya na obere ndetu. Nonprofit nwekwara ike ịgba akụkọ dịka mmemme ma ọ bụ grant si dị.",
            "Gbaa akụkọ site na mpaghara Reports; chọọ akụkọ ahụ site n'aha ya. Akụkọ dị mma naanị dịka ndekọ dị n'azụ ya si dị, ya mere buru ụzọ reconcile."
          ],
          steps: ["Mechaa itinye ihe e rere, ụgwọ a kwụrụ, bill na mmefu nke ọnwa ahụ.", "Lelee bank feed ma reconcile akaụntụ ụlọ akụ na kaadị ọ bụla.", "Gbaa profit and loss maka ọnwa ahụ.", "Gbaa balance sheet maka ụbọchị ikpeazụ nke ọnwa ahụ.", "Gbaa akụkọ accounts receivable aging.", "Dee onye nwe ya obere ndetu: uru ma ọ bụ mfu, ndị ji ego na bill a ga-akwụ n'oge na-adịghị anya."],
          words: [["Profit and loss (P&L)", "akụkọ income wepụ expenses maka otu oge; a na-akpọkwa ya income statement."], ["Balance sheet", "akụkọ assets, liabilities na equity n'otu ụbọchị."], ["Aging report", "akụkọ ego a ji, e kewara dịka ụbọchị ole o si gafee oge."], ["Month-end close", "ndepụta na-emechi akwụkwọ ego maka otu ọnwa."]],
          slides: [
            { title: "Profit and loss", bullets: ["Income wepụ expenses maka otu oge", "Uru ma ọ bụ mfu nke ọnwa ahụ"] },
            { title: "Balance sheet", bullets: ["N'otu ụbọchị", "Assets, liabilities na equity"] },
            { title: "Onye ji gịnị", bullets: ["A/R aging: ndị ahịa ji azụmahịa", "A/P aging: bill azụmahịa ji"] },
            { title: "Ndepụta njedebe ọnwa", bullets: ["E tinyela ihe niile, e lelela bank feed", "E reconcilela akaụntụ ụlọ akụ na kaadị ọ bụla", "A gbaala akụkọ, obere ndetu nye onye nwe ya"] }
          ],
          sources: [TESTDRIVE],
          tryIt: "Na test drive, gbaa profit and loss maka ọnwa gara aga na akụkọ accounts receivable aging. Dee ahịrịokwu atọ maka onye nwe ya: ngụkọta income na ngụkọta expenses nke ọnwa ahụ, ma e nwere uru ma ọ bụ mfu, na onye ahịa ji ego kacha ukwuu. Ị nweghị kọmputa? Jiri ọrụ gị site na nkuzi ndị gara aga dee otu ndetu ahụ n'akwụkwọ.",
          youCanNow: "ịgba akụkọ ndị bụ isi, ịkọwara onye nwe ya ha, na imechi otu ọnwa.",
          quickCheck: [
            { objective: "O6", q: "Kedu akụkọ na-egosi ma azụmahịa nwetara ego n'ọnwa gara aga?", options: ["Balance sheet", "Profit and loss", "Ndepụta vendor", "Chart of accounts"], answer: 1, why: "Profit and loss na-egosi income wepụ expenses maka otu oge." },
            { objective: "O6", q: "Onye nwe ya jụrụ ndị ahịa na-akwụ ụgwọ n'oge gafere. Kedu akụkọ ị ga-agba?", options: ["Accounts payable aging", "Profit and loss", "Accounts receivable aging", "Balance sheet"], answer: 2, why: "Akụkọ A/R aging na-edepụta ndị ahịa ji ego na otu ha si gafee oge." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Bill, ụlọ akụ na njedebe ọnwa",
        questions: [
          { objective: "O4", q: "I ji kaadị azụmahịa kwụọ $45 maka mmanụ ụgbọala taa. Kedu fọm dabara?", options: ["Bill", "Invoice", "Expense", "Sales receipt"], answer: 2, why: "Expense na-edekọ ihe a kwụrụ ụgwọ ya ozugbo." },
          { objective: "O4", q: "Tupu ịkwụ contractor ọhụrụ ụgwọ, onye na-edekọ akaụntụ nwere nlezianya na-:", options: ["Anata Form W-9 ma lelee irs.gov maka iwu ịtinye akwụkwọ", "Akwụ ego aka n'enweghị ndekọ", "Edekọ ụgwọ ahụ dị ka income", "Arịọ okwuntughe ụlọ akụ contractor ahụ"], answer: 0, why: "W-9 na-enye azụmahịa nkọwa contractor ahụ maka ndekọ na akwụkwọ ọ na-etinye." },
          { objective: "O5", q: "Reconciliation anaghị eru efu, ị chọtaghịkwa ihe kpatara ya. Gịnị ka ị ga-eme?", options: ["Gbakwunye ndekọ e chepụtara iji mee ya n'ike", "Hichapụ ndekọ ochie", "Gbanwee ego nke statement", "Dee ndetu ma jụọ onye nwe ya ma ọ bụ accountant"], answer: 3, why: "Ime ya n'ike na-ezo ezi nsogbu ahụ; ndetu na ajụjụ na-eme ka akwụkwọ ego nọgide n'eziokwu." },
          { objective: "O5", q: "Check $75 i dere adịghị na statement ọnwa a. Na reconciliation, ị:", options: ["Hichapụ check ahụ", "Hapụ ya n'akaghị akara; ọ ga-apụta ma emechaa", "Tinye ya ọzọ", "Dee ya dị ka income"], answer: 1, why: "Uncleared check na-anọ n'akaghị akara ruo mgbe ọ pụtara na statement." },
          { objective: "O6", q: "Balance sheet na-egosi:", options: ["Assets, liabilities na equity n'otu ụbọchị", "Naanị ihe e rere n'ọnwa gara aga", "Nọmba ekwentị onye ahịa ọ bụla", "Ahịrị bank feed"], answer: 0, why: "Balance sheet bụ foto assets, liabilities na equity n'otu ụbọchị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Idekọ Akaụntụ na QuickBooks",
    questions: [
      { objective: "O1", q: "Kedu nke bụ isi ọrụ onye na-edekọ akaụntụ na QuickBooks?", options: ["Inye ndụmọdụ iwu", "Idekọ invoice, bill na ihe omume ụlọ akụ", "Ịbịanye aka n'audit dị ka CPA", "Ịhọrọ ebe onye nwe ya ga-etinye ego"], answer: 1, why: "Idekọ ihe e rere, bill na ihe omume ụlọ akụ n'ụzọ ziri ezi bụ isi ọrụ ahụ." },
      { objective: "O1", q: "Ebee ka ị ga-elele nkọwa na ụgwọ ugbu a maka ule QuickBooks Certified User?", options: ["Ozi na soshal midia", "Ndetu ochie nke enyi", "Ogbako ọ bụla n'ịntanetị", "Ibe gọọmentị Certiport maka asambodo Intuit"], answer: 3, why: "Ụgwọ na nkọwa ule na-agbanwe, ya mere ibe gọọmentị bụ ebe a ga-elele." },
      { objective: "O1", q: "Onye ahịa jụrụ otu o ga-esi belata ụtụ isi ya. Dị ka onye na-edekọ akaụntụ, ị:", options: ["Ezipụ ya n'aka ọkachamara ụtụ isi ma ọ bụ irs.gov", "Chee azịza", "Gbanwee nọmba ya", "Gwa ya na ụtụ isi bụ nhọrọ"], answer: 0, why: "Onye na-edekọ akaụntụ na-edebe ndekọ; ndụmọdụ ụtụ isi na-esi n'aka ọkachamara ụtụ isi ma ọ bụ IRS." },
      { objective: "O2", q: "Vacuum ọhụrụ azụmahịa ihicha ụlọ nwere bụ kedu ụdị akaụntụ?", options: ["Income", "Expense", "Asset", "Liability"], answer: 2, why: "Ngwaọrụ azụmahịa nwere bụ asset." },
      { objective: "O2", q: "Ego e ji na credit card azụmahịa bụ:", options: ["Liability", "Asset", "Income", "Equity"], answer: 0, why: "Ego azụmahịa ji na kaadị bụ liability." },
      { objective: "O2", q: "Gịnị ka double-entry bookkeeping pụtara?", options: ["Ị na-ede ndekọ ọ bụla ugboro abụọ", "Mmadụ abụọ ga-akwado ndekọ ọ bụla", "Ọ bụ naanị income ka a na-edekọ", "Ndekọ ọ bụla na-agbanwe opekata mpe akaụntụ abụọ"], answer: 3, why: "Ndekọ ọ bụla nwere akụkụ abụọ, nke na-eme ka akwụkwọ ego nọrọ n'nhata." },
      { objective: "O3", q: "Olee mgbe onye na-edekọ akaụntụ na-eji invoice?", options: ["Mgbe onye ahịa kwụrụ ụgwọ n'oge ọ zụrụ ihe", "Mgbe onye ahịa ga-akwụ ma emechaa", "Mgbe azụmahịa na-azụta ngwa ọrụ", "Mgbe ụlọ akụ na-ana ụgwọ"], answer: 1, why: "Invoice bụ maka onye ahịa na-akwụ ma emechaa." },
      { objective: "O3", q: "Iziga invoice $200 na-eme ka income rịa elu, ya na:", options: ["Accounts payable", "Ego n'ụlọ akụ", "Accounts receivable", "Mmefu ụgwọ ụlọ"], answer: 2, why: "Invoice na-eke ego onye ahịa ji: accounts receivable." },
      { objective: "O3", q: "Onye ahịa ji check kwụọ invoice ka ghere oghe. Gịnị ka ị ga-edekọ?", options: ["Ụgwọ a kwụrụ megide invoice ahụ, wee deposit ụlọ akụ", "Sales receipt ọhụrụ", "Bill", "Invoice ọhụrụ"], answer: 0, why: "Idekọ ụgwọ ahụ megide invoice na-emechi ya, deposit ahụ na-adakọkwa na ụlọ akụ." },
      { objective: "O4", q: "Onye bụ vendor?", options: ["Onye ahịa ji ego", "Onye nwe azụmahịa", "Ahịrị bank feed", "Azụmahịa ị na-azụta ihe n'aka ya, dị ka ụlọ ahịa ngwa ọrụ"], answer: 3, why: "Vendor bụ onye ọ bụla azụmahịa na-azụta ihe n'aka ya." },
      { objective: "O4", q: "A ga-akwụ bill onye na-eweta ngwa n'ime ụbọchị 30. Mgbe e tinyere ya, ọ na-aga na:", options: ["Accounts receivable", "Accounts payable", "Income ihe e rere", "Equity onye nwe"], answer: 1, why: "Bill a kwụbeghị bụ ego azụmahịa ji: accounts payable." },
      { objective: "O4", q: "Gịnị na-akwado mmefu ọ bụla ma ọ bụrụ na onye ọ bụla ajụọ ma emechaa?", options: ["Ego a chere echiche", "Nọmba ekwentị vendor", "Receipt etinyere ma ọ bụ nọmba ya e dere", "Ncheta onye nwe ya"], answer: 2, why: "Receipt bụ ihe akaebe dị n'azụ mmefu ọ bụla." },
      { objective: "O5", q: "Gịnị bụ bank feed?", options: ["Ihe omume ụlọ akụ QuickBooks na-ebudata ka i lelee ha", "Ụgwọ ụlọ akụ na-ana", "Ndepụta ndị ahịa", "Okwuntughe ụlọ akụ onye nwe ya"], answer: 0, why: "Bank feed na-ebubata ahịrị ụlọ akụ ka a dakọọ ma ọ bụ gbakwunye ha." },
      { objective: "O5", q: "Reconciliation agwụla mgbe:", options: ["I kaala akara ọkara ahịrị", "Obi dị onye nwe ya ụtọ", "Ọnwa agwụla", "Difference bụ efu"], answer: 3, why: "Difference nke efu na-egosi na QuickBooks na statement kwekọrọ." },
      { objective: "O5", q: "E tinyelarị ahịrị ụlọ akụ e budatara na QuickBooks. Ịgbakwunye ya ọzọ ga-:", options: ["Edozi reconciliation", "Agụ ya ugboro abụọ", "Emechi ọnwa", "Akwụ vendor ụgwọ"], answer: 1, why: "Ịgbakwunye ahịrị e tinyelarị ọzọ na-eke ndekọ ugboro abụọ; dakọọ ya kama." },
      { objective: "O6", q: "Income bụ $4,000, expenses bụkwa $3,100 maka ọnwa ahụ. Profit and loss na-egosi:", options: ["Mfu $900", "Uru $7,100", "Uru $900", "Ọ dịghị mgbanwe"], answer: 2, why: "Income wepụ expenses: $4,000 wepụ $3,100 bụ uru $900." },
      { objective: "O6", q: "Tupu ịgba akụkọ njedebe ọnwa, onye na-edekọ akaụntụ kwesịrị ibu ụzọ:", options: ["Reconcile akaụntụ ụlọ akụ na kaadị ọ bụla", "Hichapụ invoice ochie", "Zipu akụkọ n'eleleghị ha", "Gbanwee chart of accounts"], answer: 0, why: "Akụkọ dị mma naanị dịka ndekọ dị n'azụ ha si dị, ya mere buru ụzọ reconcile." },
      { objective: "O6", q: "Kedu akụkọ na-egosi bill ndị azụmahịa ka ji?", options: ["Profit and loss", "Accounts receivable aging", "Chart of accounts", "Accounts payable aging"], answer: 3, why: "Akụkọ A/P aging na-edepụta bill a kwụbeghị na ogologo oge ha ghere oghe." },
      { objective: "O2", q: "Gịnị mere onye na-edekọ akaụntụ ga-eji otu akaụntụ ahụ mgbe niile maka otu ụdị ụgwọ?", options: ["QuickBooks na-ana ụgwọ maka akaụntụ ọhụrụ", "Ka akụkọ tụnyere ọnwa na ọnwa n'ụzọ ziri ezi", "N'ihi na a pụghị ịgbanwe aha akaụntụ", "Ka bank feed kwụsị"], answer: 1, why: "Akaụntụ na-agbanweghị agbanwe na-eme ka akụkọ zie ezi ma nwee ike itụnyere." },
      { objective: "O5", q: "Onye ahịa chọrọ inye gị okwuntughe ụlọ akụ ịntanetị ya ka i jikọọ bank feed. Gịnị ka ị ga-eme?", options: ["Nara ya ma chekwaa ya na ndetu", "Zigara onwe gị ya n'ozi", "Jụ; onye nwe ya na-ejikọ ụlọ akụ ma ọ bụ nye gị ohere ojiji nke gị", "Tinye ya na folda a na-ekerịta"], answer: 2, why: "Ndị na-edekọ akaụntụ anaghị anara okwuntughe ụlọ akụ onye nwe ya; onye nwe ya na-ejikọ ụlọ akụ ma ọ bụ tinye gị dị ka onye ọrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 6, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Chart of accounts", objective: "O2", notYet: "Akaụntụ erughị 12, ma ọ bụ e dere ọtụtụ n'ime ha ụdị ezighi ezi.", meets: "Opekata mpe akaụntụ 12, nke ọ bụla nwere ụdị ziri ezi, nwee aha doro anya.", exceeds: "Na-akọwakwa ihe mere a chọrọ akaụntụ ọ bụla maka azụmahịa a, gụnyere akaụntụ nonprofit ma ọ bụ nke ụdị azụmahịa ahụ." },
      { name: "Ihe e rere na ụgwọ a kwụrụ", objective: "O3", notYet: "E dekọrọ ụgwọ a kwụrụ dị ka ihe e rere ọhụrụ, ma ọ bụ invoice enweghị onye ahịa, ụbọchị ma ọ bụ ego.", meets: "Opekata mpe invoice 3 na ụgwọ a kwụrụ 2, nke ọ bụla nwere onye ahịa, ụbọchị, ego na akaụntụ income; invoice a kwụrụ na-egosi na a kwụrụ ha.", exceeds: "Na-edekọkwa deposit ụlọ akụ maka ụgwọ ọ bụla ma dee invoice ndị ka ghere oghe." },
      { name: "Bill na mmefu", objective: "O4", notYet: "E ji expense ọhụrụ kwụọ bill, ma ọ bụ ndekọ enweghị akaụntụ ma ọ bụ receipt.", meets: "Opekata mpe bill ma ọ bụ mmefu 4 nwere vendor, ụbọchị, ego, akaụntụ na receipt e dere.", exceeds: "Na-egosikwa bill payment na contractor e hazịrị ya na ndetu W-9." },
      { name: "Reconciliation ụlọ akụ", objective: "O5", notYet: "Enweghị reconciliation, ma ọ bụ e mere ya ka ọ ruo efu n'ike site na ndekọ e chepụtara.", meets: "Reconciliation na-ejedebe na difference nke efu, ma ọ bụ nwee ndetu eziokwu nke ihe ka na-adabaghị.", exceeds: "Na-edepụtakwa ihe kpatara difference ọ bụla (fee, mperi ide, ndekọ ugboro abụọ, uncleared check) na otu e si dozie ya." },
      { name: "Nchịkọta akụkọ", objective: "O6", notYet: "Nchịkọta ahụ enweghị uru ma ọ bụ mfu, ma ọ bụ nọmba ndị ahụ adakọghị na ndekọ.", meets: "Na-ekwu ngụkọta income, ngụkọta expenses na uru ma ọ bụ mfu, na ndị ka ji ego.", exceeds: "Na-akpọkwa aha bill a ga-akwụ n'oge na-adịghị anya na otu ihe onye nwe ya nwere ike ime." },
      { name: "Atụmatụ asambodo", objective: "O1", notYet: "Ọ dịghị asambodo a kpọrọ aha, ma ọ bụ enweghị ụbọchị.", meets: "Na-akpọ aha asambodo Intuit, ibe gọọmentị a ga-elele na ụbọchị maka ilele ya na maka ule omume.", exceeds: "Na-edepụtakwa ndị were mmadụ n'ọrụ ma ọ bụ ndị ahịa atọ a ga-akpọtụrụ na ụbọchị a ga-akpọtụrụ onye ọ bụla." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe were ule asambodo Intuit QuickBooks ma ọ bụ idekọ akaụntụ n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ọrụ idekọ akaụntụ, ọkwa ọfịs na-eji QuickBooks ma ọ bụ onye ahịa idekọ akaụntụ na-akwụ ụgwọ n'ime ọnwa 6",
      "Ndị nwe obere azụmahịa na nonprofit nọ n'ihe ọmụmụ a na-reconcile akwụkwọ ego nke ha kwa ọnwa (nsochi ụbọchị 30)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ tablet nwere web browser maka QuickBooks Online test drive n'efu (e meghere na windo nzuzo); ihuenyo ekwentị dị obere maka ọtụtụ omume",
      "Akwụkwọ, mkpịsị ode na calculator maka ndetu \"Nwalee ya ugbu a\", n'ihi na test drive anaghị echekwa",
      "Mbipụta statement ụlọ akụ omume na ndepụta ihe omume ego maka otu ndị na-enweghị kọmputa",
      "Ihe dị ka nkeji 75 ruo 90 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "N'ụlọ kọmputa ma ọ bụ klas: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, ya na test drive meghere na ihuenyo ọ bụla.",
      "Test drive na-amalitegharị ma anaghị echekwa; chetara ndị na-amụ ihe ka ha dee ndekọ ọ bụla maka ọrụ ikpeazụ.",
      "Ihuenyo na aha menu na-agbanwe; ọ bụrụ na onye na-amụ ihe achọtaghị ihe, gosi ya igbe nchọta kama ụzọ menu kpọmkwem.",
      "Ekwela ka ndị na-amụ ihe dee ezi okwuntughe ụlọ akụ, nọmba akaụntụ ma ọ bụ ozi onye ahịa n'omume; jiri ụlọ ọrụ ihe atụ ma ọ bụ nọmba e chepụtara.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Tupu ndị na-amụ ihe emee atụmatụ maka asambodo, mee ka ha meghee ibe gọọmentị Certiport na Intuit Academy n'onwe ha iji lelee ụgwọ na ndị ruru eru ugbu a."
    ]
  }
};

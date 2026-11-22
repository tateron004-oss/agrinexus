"use strict";

// Koach Learn course (Igbo translation of shared/bookkeeping-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "bookkeeping-basics-ig",
  lang: "ig",
  translationOf: "bookkeeping-basics",
  category: "Entrepreneurs",
  name: "Mmalite Idekọ Akaụntụ Azụmahịa",
  skills: "Idekọ ego na-abata na ego na-apụ, Idebe akwụkwọ nnata ego (receipt), Ikewapụ ego azụmahịa na ego nke gị, Ime ledger na spreadsheet, Ịtụnyere akwụkwọ gị na nke ụlọ akụ, Ịgụ profit-and-loss",
  outcome: "idebe ledger dị mfe na spreadsheet maka ego azụmahịa gị na-abata na nke na-apụ, nwee receipt na-akwado ya, tụnyere ya na akwụkwọ ụlọ akụ ma ọ bụ mobile money gị, ma gụọ profit-and-loss nke otu ọnwa iji hụ ma ị nwetara uru.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-arụ ihe ego na-abata ma na-apụ na ya: onye na-edozi ntutu, onye na-ere nri, azụmahịa ihicha ụlọ, ụka ma ọ bụ otu na-enyere ndị ntorobịa aka (nonprofit), onye ọrụ ugbo na-ere akwa ọkụkọ ma ọ bụ akwụkwọ nri, ma ọ bụ onye nwere obere azụmahịa n'ịntanetị.",
    "Ị ga-amụta idekọ ihe ọ bụla ị rere na ego ọ bụla ị mefuru, idebe receipt na-egosi ha, ikewapụ ego azụmahịa na ego nke gị, ime ledger dị mfe na spreadsheet n'efu, ilele ya kwa ọnwa, na ịgụ profit-and-loss dị mfe.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" ị ga-eji nọmba nke gị ma ọ bụ ihe atụ mee. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Idekọ akaụntụ bụ ndekọ ahụ. Maka ụtụ isi na ajụjụ gbasara iwu, gwa onye na-ahụ maka akaụntụ (accountant) ma ọ bụ ọkachamara ụtụ isi okwu."
  ],
  finalTask: "Mee ledger na spreadsheet ma dee ego azụmahịa nke otu ọnwa, nke ezi ma ọ bụ nke ihe atụ (opekata mpe 10), nke ọ bụla nwere ụbọchị, nkọwa, ụdị (category), ego na nọmba receipt. Tụnyere ledger ahụ na akwụkwọ ụlọ akụ ma ọ bụ mobile money gị, wee mee profit-and-loss nke otu ọnwa na-egosi ego niile batara, ego e mefuru dị ka ụdị ha si dị, na uru ma ọ bụ mfu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-arụ ihe ego na-abata ma na-apụ na ya: ndị nwe obere azụmahịa, ndị na-ere ahịa n'ahịa, ndị ọrụ ugbo na-ere ihe ha kụrụ, ndị nwere obere azụmahịa n'ịntanetị, na ndị na-elekọta ego ụka ma ọ bụ obere otu nonprofit. Ọtụtụ na-edebe ego n'isi ha, n'igbe ego ma ọ bụ n'otu akaụntụ nke onwe ha.",
    startingPoint: "Ha nwere ike iji ego nkịtị na mobile money ma ọ bụ akaụntụ ụlọ akụ, ma nwee ike imeghe ekwentị ma ọ bụ kọmputa. Ole na ole na-edekọ ihe, ọtụtụ ejibeghị formula spreadsheet mgbe ọ bụla.",
    gap: "Na-enweghị ndekọ, ha amaghị ma azụmahịa ahụ na-enweta uru, ngwaahịa ndị na-akwụ ụgwọ, ma ọ bụ ihe ha ga-egosi onye na-agbazinye ego, onye na-enye onyinye (grant) ma ọ bụ ọfịs ụtụ isi. Ledger dị mfe nwere receipt, nlele kwa ọnwa na akwụkwọ ụlọ akụ, na profit-and-loss nke otu ọnwa na-emechi oghere ahụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; nọmba dị mfe",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa a na-ekerịta nwere spreadsheet n'efu (Google Sheets ma ọ bụ Excel)",
      "Oge: ihe dị ka nkeji 5 kwa nkuzi, na omume site na nọmba nke ha ma ọ bụ ihe atụ",
      "Nzuzo: etinyela nọmba akaụntụ ụlọ akụ ma ọ bụ ozi nzuzo ndị ahịa n'ime ngwa AI",
      "Iwu ụtụ isi dị iche site na mba ruo mba; ihe ọmụmụ a na-edebe ndekọ ma na-eziga ajụjụ ụtụ isi n'aka accountant"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na spreadsheet nwere ike ibu ụzọ were \"Excel na Spreadsheet\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ego na-abata na ego na-apụ n'azụmahịa ma ọ bụ nonprofit", action: "ịmata nke bụ ego na-abata (income) na nke bụ mmefu (expense)", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ihe e rere na ihe e zụrụ n'otu izu", action: "idebe receipt, invoice ma ọ bụ mpempe ahịa ụbọchị nwere nọmba dị ka ihe akaebe maka azụmahịa ọ bụla", standard: "nke mere na ahịrị ọ bụla na ledger nwere nọmba receipt ị nwere ike ịchọta" },
    { id: "O3", condition: "Site n'iji akaụntụ azụmahịa iche, mobile money till ma ọ bụ obere akpa ego", action: "ikewapụ ego azụmahịa na ego nke gị ma dekọọ ego ị na-akwụ onwe gị dị ka owner's draw", standard: "n'agwakọtaghị mmefu nke onwe gị na ndekọ azụmahịa" },
    { id: "O4", condition: "Site n'iji spreadsheet n'efu dị ka Google Sheets ma ọ bụ Excel", action: "ime ledger nwere kọlụm asaa, ụdị (category) a kara aka na formula balance na-aga n'ihu", standard: "nke mere na balance na-agbanwe nke ọma mgbe e dere ahịrị ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ledger gị na akwụkwọ ụlọ akụ ma ọ bụ mobile money nke otu ọnwa", action: "ịtụnyere ledger ahụ na akwụkwọ ahụ (reconcile) ma dozie ihe ọ bụla dị iche", standard: "ruo mgbe balance ha dabara, na-echeta ego nkịtị na ụgwọ na-agabeghị" },
    { id: "O6", condition: "Mgbe e nyere gị ndekọ ledger nke otu ọnwa", action: "ime profit-and-loss site na SUMIF ma kọwaa ihe ọ na-egosi", standard: "nwere ngụkọta ziri ezi na ahịrịokwu abụọ bụ eziokwu banyere ihe ọ pụtara" }
  ],
  chapters: [
    {
      name: "Isi 1: Debe ezigbo ndekọ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe idekọ akaụntụ bụ na ihe mere o ji dị mkpa",
          minutes: 4,
          goal: "Kọwaa ihe idekọ akaụntụ na-edekọ ma kpọọ aha ụdị ego abụọ ọ na-eso.",
          text: [
            "Idekọ akaụntụ (bookkeeping) bụ ide oge ọ bụla ego batara ma ọ bụ pụrụ n'azụmahịa gị, n'otu ebe, n'usoro. Ọ bụghị mgbakọ siri ike. Ọ bụ omume.",
            "Ego na-abata bụ income: ihe e rere, ego ndị ahịa kwụrụ, ụgwọ ọrụ, na maka nonprofit, onyinye na grant. Ego na-apụ bụ mmefu (expenses): ngwongwo, ụgwọ ụlọ, mmanụ ụgbọala, mkpụrụ ubi, ekwentị, mgbasa ozi, ụgwọ ndị ọrụ.",
            "IRS (ọfịs ụtụ isi United States) kwuru na ezigbo ndekọ na-enyere gị aka ịhụ otu azụmahịa gị si aga n'ihu na ịkwado akwụkwọ ụtụ isi gị (tax return). Ha na-egosikwa mmefu ndị ị nwere ike iwepụ (deduct). Ndekọ dị ọcha na-enyere gị aka inweta mbinye ego, ịrịọ grant, ịza ajụjụ ọfịs ụtụ isi, na ịhụ ngwaahịa ma ọ bụ ọrụ ndị na-ewetara gị ego n'ezie.",
            "Ihe atụ: otu nwanyị na-ere achịcha n'ahịa ngwụcha izu. O chere na ọ na-eme nke ọma n'ihi na igbe ego ya juru. Mgbe o dere ego ntụ ọka, bọta, igbe na ụgwọ ahịa, ọ hụrụ na cupcake na-ewetara ya ego mana achịcha (bread) anaghị akwụ ụgwọ ya nke ọma. Ugbu a ọ nwere ike ikpebi ihe ọ ga-eme."
          ],
          words: [["Idekọ akaụntụ (bookkeeping)", "idebe ndekọ e dere ede nke ego niile na-abata na nke na-apụ n'azụmahịa."], ["Income", "ego na-abata: ihe e rere, ụgwọ ọrụ, onyinye, grant."], ["Mmefu (expense)", "ego e mefuru iji rụọ azụmahịa, dị ka ngwongwo, ụgwọ ụlọ na mmanụ ụgbọala."], ["Iwepụ (deduct)", "iwepụ mmefu azụmahịa e kwere mgbe ị na-agụ ụtụ isi i ji."]],
          slides: [
            { title: "Idekọ akaụntụ bụ omume", bullets: ["Dee ego niile na-abata na nke na-apụ", "N'otu ebe, n'usoro", "Ọ bụghị mgbakọ siri ike"] },
            { title: "Ụdị ego abụọ", bullets: ["Income: ihe e rere, ụgwọ ọrụ, onyinye, grant", "Mmefu: ngwongwo, ụgwọ ụlọ, mmanụ, mkpụrụ ubi, ụgwọ ndị ọrụ"] },
            { title: "Ihe mere o ji dị mkpa", bullets: ["Hụ otu azụmahịa si aga n'ezie", "Kwadebe ụtụ isi ma gosi ihe ị ga-ewepụ", "Nweta mbinye ego na grant; zaa ajụjụ"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Chee echiche maka azụmahịa gị, ma ọ bụ nke ị chọrọ ịmalite. Dee ụdị income ise, ma ọ bụ ego na-abata, na ụdị mmefu asatọ, ma ọ bụ ego na-apụ, ọ ga-enwe.",
          youCanNow: "ikwu ihe idekọ akaụntụ bụ, ikewa ego n'income na mmefu, na ịkọwa ihe mere ndekọ ji dị mkpa.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ idekọ akaụntụ?", options: ["Ide oge ọ bụla ego batara ma ọ bụ pụrụ, n'otu ebe, n'usoro", "Ime mgbakọ siri ike otu ugboro n'afọ", "Iziga akwụkwọ ụtụ isi gị", "Ịgụ ego dị n'igbe n'abalị"], answer: 0, why: "Nkuzi ahụ kwuru na idekọ akaụntụ bụ omume ide ego ọ bụla na-abata na nke na-apụ, n'usoro." },
            { objective: "O1", q: "Onye na-eme achịcha chere na ọ na-eme nke ọma n'ihi na igbe ego ya juru. Gịnị ga-egosi ya ngwaahịa na-ewetara ya ego n'ezie?", options: ["Ịgụkwa ego ahụ ọzọ", "Ịjụ ndị ahịa ihe ha na-amasị", "Ide mmefu ya, dị ka ntụ ọka, igbe na ụgwọ ahịa, n'akụkụ ihe o rere", "Ịbawanye ọnụ ahịa niile"], answer: 2, why: "Ide mmefu n'akụkụ ihe e rere gosiri na cupcake na-ewete ego mana achịcha anaghị akwụ ụgwọ ya nke ọma." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Idebe receipt na ihe akaebe ndị ọzọ",
          minutes: 5,
          goal: "Hazie usoro dị mfe iji debe receipt na invoice ọ bụla.",
          text: [
            "Ndekọ ọ bụla n'akwụkwọ gị kwesịrị inwe ihe akaebe n'azụ ya. IRS na-akpọ ha supporting documents (akwụkwọ nkwado). Maka ihe e rere, ha gụnyere akwụkwọ receipt, invoice, mpempe igwe ndekọ ego na ndekọ ego e tinyere n'ụlọ akụ. Maka ihe e zụrụ na mmefu, ha gụnyere receipt, invoice, akwụkwọ kaadị na ndekọ ụgwọ e kwụrụ n'ịntanetị.",
            "Receipt akwụkwọ na-achapụ achapụ ma na-efu efu. Usoro dị mfe: see foto receipt ọ bụla n'otu ụbọchị ahụ, nye ya nọmba, ma chekwaa ya na folda nke ọnwa ahụ, dị ka 2026-10. Debe akwụkwọ ahụ n'enveloppu nwere otu ọnwa ahụ n'elu ya. Dee nọmba receipt n'ime ledger gị, ka i wee chọta ihe akaebe nke ahịrị ọ bụla.",
            "Ogologo oge idebe ndekọ: IRS kwuru ka ị debe ha ogologo oge ị nwere ike ịchọ igosi income ma ọ bụ ihe e wepụrụ n'akwụkwọ ụtụ isi. Maka ọtụtụ akwụkwọ ụtụ isi US, nke ahụ bụ afọ 3, mana ụfọdụ ọnọdụ ka ogologo, dị ka opekata mpe afọ 4 maka ndekọ ụtụ isi ndị ọrụ (employment tax). Lelee peeji IRS maka ọnọdụ gị. Ọ bụrụ na ị nọghị na US, lelee ọfịs ụtụ isi mba gị, dị ka Kenya Revenue Authority, ma ọ bụ jụọ accountant.",
            "Maka ihe e rere n'ego nkịtị na-enweghị receipt, dị ka akwa ọkụkọ e rere n'ọnụ ụzọ ugbo, dee mpempe ahịa ụbọchị dị mfe: ụbọchị, ihe i rere, ole, na ngụkọta. Mpempe ahụ bụ ihe akaebe gị."
          ],
          steps: ["Mee otu folda kwa ọnwa n'ekwentị ma ọ bụ kọmputa gị, na otu enveloppu kwa ọnwa maka akwụkwọ.", "See foto receipt ọ bụla n'otu ụbọchị ahụ.", "Nye receipt ọ bụla nọmba ma dee ya n'akwụkwọ ahụ.", "Dee ihe e rere n'ego nkịtị na mpempe ahịa ụbọchị.", "Debe ndekọ ogologo oge ọfịs ụtụ isi gị kwuru, ma ọ bụ jụọ accountant."],
          words: [["Receipt", "akwụkwọ ma ọ bụ ndekọ eletrọnịk na-egosi na ị kwụrụ ụgwọ ma ọ bụ na a kwụrụ gị."], ["Invoice", "akwụkwọ ụgwọ ị na-ezigara onye ahịa, ma ọ bụ nke onye na-ere gị ngwongwo zitere gị, na-egosi ihe e rere na ọnụ ahịa ya."], ["Supporting document", "ihe akaebe n'azụ ndekọ n'akwụkwọ gị, dị ka receipt, invoice ma ọ bụ akwụkwọ ụlọ akụ."]],
          slides: [
            { title: "Ndekọ ọ bụla chọrọ ihe akaebe", bullets: ["Ihe e rere: invoice, akwụkwọ receipt, ndekọ ego e tinyere", "Mmefu: receipt, invoice, akwụkwọ kaadị"] },
            { title: "Usoro receipt dị mfe", bullets: ["See ya foto n'otu ụbọchị ahụ", "Nye ya nọmba ma debe ya dị ka ọnwa si dị", "Dee nọmba ahụ na ledger gị"] },
            { title: "Ihe e rere n'ego na-enweghị receipt", bullets: ["Debe mpempe ahịa ụbọchị", "Ụbọchị, ihe e rere, ole, ngụkọta"] },
            { title: "Ogologo oge idebe ndekọ", bullets: ["US: ọtụtụ mgbe afọ 3, ụfọdụ ọnọdụ ka ogologo", "Ndekọ ụtụ isi ndị ọrụ: opekata mpe afọ 4", "Lelee irs.gov, ọfịs ụtụ isi gị ma ọ bụ accountant"] }
          ],
          sources: [
            { name: "IRS: What kind of records should I keep", url: "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" },
            { name: "IRS: How long should I keep records?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records" }
          ],
          tryIt: "Mee folda receipt nke ọnwa a n'ekwentị ma ọ bụ kọmputa gị. See foto receipt atọ ị nwere (nke azụmahịa ma ọ bụ nke ụbọchị niile maka omume), nye ha nọmba 1, 2 na 3, ma chekwaa ha na folda ahụ.",
          youCanNow: "idebe, inye nọmba na ịhazi receipt ka ndekọ ọ bụla n'akwụkwọ gị nwee ihe akaebe n'azụ ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka IRS na-akpọ receipt, invoice na ndekọ ego e tinyere n'ụlọ akụ?", options: ["Akwụkwọ ụtụ isi", "Supporting documents", "Ledger", "Akwụkwọ profit-and-loss"], answer: 1, why: "IRS na-akpọ akwụkwọ ndị na-egosi ndekọ ọ bụla supporting documents." },
            { objective: "O2", q: "Ị kwụrụ ụgwọ ngwongwo ma nweta receipt akwụkwọ. Gịnị ka ị ga-eme n'otu ụbọchị ahụ?", options: ["Tinye ya n'akpa uwe maka mgbe e mesịrị", "Tụfuo ya ozugbo i chetara ego ole", "Dee ego ahụ n'aka gị", "See ya foto, nye ya nọmba ma chekwaa ya na folda ọnwa a"], answer: 3, why: "Ise foto na inye receipt nọmba n'otu ụbọchị ahụ na-egbochi ya ịchapụ ma ọ bụ ifu efu." }
          ]
        },
        {
          objectives: ["O1","O3"],
          title: "Ikewapụ ego azụmahịa na ego nke gị",
          minutes: 5,
          goal: "Hazie ebe iche maka ego azụmahịa ma kwụọ onwe gị ụgwọ n'ebumnuche.",
          text: [
            "Mgbe e gwakọtara ego azụmahịa na ego nke gị n'otu akaụntụ ma ọ bụ n'otu akpa ego, ị gaghị ama ma azụmahịa ahụ na-enweta uru. Nri ehihie azụmahịa, ịzụrụ ezinụlọ nri na ịzụ ngwongwo ga-adị otu.",
            "Mepee akaụntụ iche maka azụmahịa: akaụntụ azụmahịa n'ụlọ akụ ma ọ bụ credit union, ma ọ bụ akaụntụ mobile money ma ọ bụ till iche e ji naanị maka azụmahịa. Tinye ihe ọ bụla i rere n'ime ya. Kwụọ mmefu azụmahịa ọ bụla site na ya.",
            "Mgbe ị chọrọ ego maka onwe gị, bufee ego a kara aka site n'akaụntụ azụmahịa gaa n'akaụntụ nke gị, ma dee ya dị ka owner's draw ma ọ bụ ụgwọ gị. Nke ahụ abụghị mmefu azụmahịa; ọ bụ gị na-ewepụ uru. Ọ bụrụ na i ji ego nke gị kwụọ mmefu azụmahịa, dee ya na ledger ma debe receipt.",
            "Nonprofit nwere otu nzọụkwụ ọzọ: ọ bụrụ na onye na-enye onyinye nyere ego maka otu ebumnuche, dị ka mmemme egwuregwu ndị ntorobịa, debe ndekọ ya ka e mefuo ya maka ebumnuche ahụ. Otu kọlụm ma ọ bụ ụdị (category) maka ya ezuola ịmalite."
          ],
          steps: ["Mepee akaụntụ azụmahịa iche, mobile money till ma ọ bụ akpa ego.", "Tinye ihe niile e rere na onyinye niile n'ime ya.", "Kwụọ mmefu azụmahịa niile site na ya.", "Kwụọ onwe gị site n'ibufe ego a kara aka, ma dekọọ ya dị ka owner's draw.", "Ọ bụrụ na i ji ego nke gị maka azụmahịa, dekọọ ya ma debe receipt."],
          words: [["Owner's draw", "ego onye nwe azụmahịa na-ewepụ n'azụmahịa maka onwe ya. Ọ bụghị mmefu azụmahịa."], ["Commingling", "ịgwakọta ego azụmahịa na ego nke gị n'otu akaụntụ."], ["Restricted donation", "onyinye onye nyere kwuru na a ga-eji ya naanị maka otu ebumnuche."]],
          slides: [
            { title: "Ego agwakọtara na-ezo eziokwu", bullets: ["Ị gaghị ama ma azụmahịa na-enweta uru", "Mmefu nke gị na nke azụmahịa ga-adị otu"] },
            { title: "Nye azụmahịa ego nke ya", bullets: ["Akaụntụ ụlọ akụ, credit union ma ọ bụ mobile money iche", "Ihe niile e rere na-abata, mmefu azụmahịa na-apụ"] },
            { title: "Kwụọ onwe gị n'ebumnuche", bullets: ["Bufee ego a kara aka n'akaụntụ nke gị", "Dekọọ ya dị ka owner's draw, ọ bụghị mmefu"] },
            { title: "Nonprofit", bullets: ["Debe ndekọ onyinye e nyere maka otu ebumnuche", "Mefuo ha maka ebumnuche ahụ"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Lee ụgwọ 10 ikpeazụ e kwụrụ site n'akaụntụ ma ọ bụ akpa ego ị na-eji maka azụmahịa gị (ma ọ bụ nke gị, maka omume). Dee B n'akụkụ nke azụmahịa na P n'akụkụ nke gị. Dee otu ị ga-esi kewapụ ha site ugbu a gaa n'ihu.",
          youCanNow: "ikewapụ ego azụmahịa na ego nke gị ma kwụọ onwe gị n'ụzọ ị nwere ike iso.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ owner's draw?", options: ["Mmefu azụmahịa", "Mbinye ego site n'ụlọ akụ", "Ego ị na-ebufe site n'azụmahịa gaa n'aka gị, e wepụtara n'uru", "Onyinye e nyere azụmahịa"], answer: 2, why: "Owner's draw bụ gị na-ewepụ uru; ọ bụghị mmefu azụmahịa." },
            { objective: "O1", q: "Ị na-arụ azụmahịa gị site n'akaụntụ nke gị, ị maghịkwa ma ọ na-enweta uru. Gịnị bụ ihe mbụ ị ga-edozi?", options: ["Mepee akaụntụ iche ma ọ bụ mobile money till naanị maka azụmahịa", "Mefuo obere ego na nri ezinụlọ", "Kwụsị idebe receipt", "Jiri naanị ego nkịtị"], answer: 0, why: "Akaụntụ iche na-ekewapụ ego azụmahịa, ka ị hụ ihe azụmahịa ahụ na-enweta na ihe ọ na-emefu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Debe ezigbo ndekọ",
        questions: [
          { objective: "O1", q: "Kedu nke bụ mmefu maka obere ugbo?", options: ["Ego e nwetara n'ire tomato", "Grant site n'aka onye na-enye onyinye", "Ego onye ahịa kwụrụ", "Mkpụrụ ubi na fatịlaịza"], answer: 3, why: "Mmefu bụ ego e ji arụ azụmahịa, dị ka mkpụrụ ubi na fatịlaịza." },
          { objective: "O1", q: "Dị ka IRS si kwuo, ezigbo ndekọ na-enyere gị aka:", options: ["Ịghara ịkwụ ụtụ isi mgbe ọ bụla", "Ịhụ otu azụmahịa gị si aga n'ihu ma kwadebe akwụkwọ ụtụ isi", "Ịghara ide receipt", "Inweta ngwongwo n'efu"], answer: 1, why: "IRS kwuru na ndekọ na-enyere gị aka ilekọta azụmahịa gị na ịkwadebe akwụkwọ ụtụ isi gị." },
          { objective: "O2", q: "Ị na-ere akwa ọkụkọ n'ego nkịtị na-enweghị receipt. Gịnị bụ ihe akaebe gị?", options: ["Mpempe ahịa ụbọchị nwere ụbọchị, ihe e rere, ole na ngụkọta", "Ihe ị chetara n'isi", "Ọ dịghị ihe a chọrọ", "Foto ọkụkọ gị"], answer: 0, why: "Mpempe ahịa ụbọchị e dere ede na-edekọ ihe e rere n'ego nkịtị." },
          { objective: "O2", q: "Gịnị mere ị ga-eji dee nọmba receipt na ledger gị?", options: ["Ọ na-eme ka ledger dị ogologo", "Ụlọ akụ chọrọ ya", "Ka i wee chọta ihe akaebe nke ahịrị ọ bụla", "Ọ na-agbanwe ngụkọta"], answer: 2, why: "Nọmba na-ejikọta ndekọ ọ bụla na ihe akaebe ya." },
          { objective: "O3", q: "Ị na-ebufe ego site n'akaụntụ azụmahịa gaa n'akaụntụ nke gị iji kwụọ onwe gị. Kedu otu ị ga-esi dekọọ ya?", options: ["Dị ka mmefu azụmahịa", "Dị ka owner's draw", "Dị ka ihe e rere", "Ị gaghị edekọ ya"], answer: 1, why: "Ego onye nwe azụmahịa wepụrụ bụ owner's draw, ọ bụghị mmefu azụmahịa." }
        ]
      }
    },
    {
      name: "Isi 2: Ledger gị na uru gị",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ledger dị mfe na spreadsheet",
          minutes: 6,
          goal: "Mee ledger na spreadsheet n'efu nwere kọlụm ziri ezi na balance na-aga n'ihu.",
          text: [
            "Ledger bụ ndepụta ego ọ bụla na-abata na nke na-apụ, otu ahịrị maka azụmahịa (transaction) ọ bụla. Spreadsheet n'efu dị ka Google Sheets ma ọ bụ Microsoft Excel na-arụ ọrụ nke ọma, ọ na-agụkọtakwa nọmba maka gị.",
            "Jiri kọlụm asaa: Ụbọchị, Nkọwa, Ụdị (category), Ego batara, Ego pụrụ, Balance, Nọmba receipt. Tinye balance mmalite gị n'ahịrị mbụ. N'ime cell Balance nke ahịrị na-esote, dee formula na-ewere balance dị n'elu, gbakwunye ego batara ma wepụ ego pụrụ. Dịka ọmụmaatụ, ọ bụrụ na Balance bụ kọlụm F, Ego batara bụ D na Ego pụrụ bụ E, ahịrị 3 ga-abụ =F2+D3-E3. Detuo formula ahụ gbadaa.",
            "Họrọ obere ndepụta ụdị ma jiri otu okwu ahụ oge niile, dịka ọmụmaatụ: Ihe e rere, Onyinye, Ngwongwo (Supplies), Ụgwọ ụlọ, Mmanụ ụgbọala, Ekwentị, Mgbasa ozi, Ụgwọ ndị ọrụ, Owner's draw. Otu okwu ahụ na-eme ka ọ dị mfe ịgụkọta ụdị ọ bụla ma e mesịa.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ịhazi mpempe ahụ: jụọ ya ka ọ kọwaa formula ma ọ bụ tụọ aro ụdị maka ụdị azụmahịa gị. Etinyela nọmba akaụntụ ụlọ akụ ma ọ bụ ozi nzuzo ndị ahịa n'ime ya."
          ],
          steps: ["Mepee spreadsheet ọhụrụ efu, nye ya aha, dịka ọmụmaatụ \"2026 Ledger\", ma kpọọ taabụ mbụ Ledger.", "Dee isiokwu kọlụm: Ụbọchị, Nkọwa, Ụdị, Ego batara, Ego pụrụ, Balance, Receipt #.", "Tinye balance mmalite gị na kọlụm Balance nke ahịrị 2.", "N'ahịrị 3 nke Balance, dee =F2+D3-E3 ma detuo ya gbadaa.", "Dee ndepụta ụdị gị n'otu nkuku ma ọ bụ na taabụ nke abụọ, ma jiri naanị okwu ndị ahụ."],
          words: [["Ledger", "ndepụta ego ọ bụla na-abata na nke na-apụ, otu ahịrị maka azụmahịa ọ bụla."], ["Transaction", "otu oge ego mere njem: ihe e rere, ụgwọ e kwụrụ, ihe e zụrụ."], ["Formula", "mgbakọ n'ime cell spreadsheet nke na-amalite na =."], ["Ụdị (category)", "aha na-achịkọta ego yiri onwe ha, dị ka Mmanụ ụgbọala ma ọ bụ Ngwongwo."]],
          slides: [
            { title: "Ledger: otu ahịrị kwa transaction", bullets: ["Ego ọ bụla na-abata na nke na-apụ", "Spreadsheet n'efu na-agụkọta ya"] },
            { title: "Kọlụm asaa", bullets: ["Ụbọchị, Nkọwa, Ụdị", "Ego batara, Ego pụrụ", "Balance, Receipt #"] },
            { title: "Balance na-aga n'ihu", bullets: ["Malite na balance mmalite gị", "Ahịrị na-esote: =F2+D3-E3", "Detuo formula ahụ gbadaa"] },
            { title: "Otu okwu ụdị oge niile", bullets: ["Ihe e rere, Onyinye, Ngwongwo, Ụgwọ ụlọ, Mmanụ", "Ekwentị, Mgbasa ozi, Ụgwọ ndị ọrụ, Owner's draw"] }
          ],
          tryIt: "Mee ledger ugbu a na Google Sheets ma ọ bụ Excel nwere kọlụm asaa ahụ, balance mmalite na formula balance na-aga n'ihu. Dee azụmahịa atọ nke izu a, nke ezi ma ọ bụ nke ihe atụ, ma lelee na balance na-agbanwe nke ọma.",
          youCanNow: "ime ledger na spreadsheet nwere ụdị na balance na-aga n'ihu.",
          quickCheck: [
            { objective: "O4", q: "Na ledger, gịnị ka ahịrị ọ bụla na-ejide?", options: ["Otu ọnwa niile", "Otu transaction", "Aha na adreesị otu onye ahịa", "Ngụkọta otu ụdị"], answer: 1, why: "Ledger na-edepụta ego ọ bụla na-abata na nke na-apụ, otu ahịrị kwa transaction." },
            { objective: "O4", q: "I dere \"ngwongwo\" otu izu na \"ihe eji arụ ọrụ\" n'izu ọzọ maka otu mmefu ahụ. Gịnị ka ị ga-eme?", options: ["Debe okwu abụọ ahụ", "Hichapụ ahịrị ndị ahụ", "Gbanwee ha ka ha bụrụ otu okwu ụdị ma jiri naanị okwu ahụ site ugbu a", "Tinye kọlụm ọhụrụ maka okwu ọ bụla"], answer: 2, why: "Iji otu okwu ụdị oge niile na-eme ka ọ dị mfe ịgụkọta ụdị ọ bụla ma e mesịa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Idekọ kwa izu na ịtụnyere ya na ụlọ akụ",
          minutes: 5,
          goal: "Mee ka ledger dị ọhụrụ ma tụnyere ya na akwụkwọ ụlọ akụ ma ọ bụ mobile money gị.",
          text: [
            "Idekọ akaụntụ na-arụ ọrụ nke ọma dị ka obere omume kwa izu, dịka ọmụmaatụ nkeji 20 n'ụtụtụ Mọnde ọ bụla. Chịkọta receipt, mpempe ahịa na invoice nke izu ahụ, ma dee nke ọ bụla dị ka otu ahịrị na ledger nwere ụdị ya na nọmba receipt ya.",
            "Otu ugboro kwa ọnwa, tụnyere ledger gị na akwụkwọ (statement) ụlọ akụ, credit union ma ọ bụ mobile money gị. A na-akpọ nke a reconciling. Kaa akara n'ahịrị ọ bụla dị n'akwụkwọ ahụ dabara n'ahịrị dị na ledger gị. Ihe ọ bụla dị n'akwụkwọ ahụ na-adịghị na ledger gị, dị ka ụgwọ ụlọ akụ ma ọ bụ ego onye ahịa kwụrụ i chefuru, ka a gbakwunye. Ihe ọ bụla dị na ledger gị na-adịghị n'akwụkwọ ahụ nwere ike ịbụ ego nkịtị, ma ọ bụ mperi a ga-edozi.",
            "Na njedebe, balance dị na ledger gị kwesịrị ịdaba na balance akwụkwọ ahụ, mgbe i chetara ego nkịtị dị n'aka gị na ụgwọ na-agabeghị (not cleared). Ọ bụrụ na ọ dabaghị, chọọ ahịrị na-adịghị ya, nọmba e dere ugboro abụọ, ma ọ bụ mkpụrụ nọmba e gbanwere ọnọdụ, dị ka 54 e dere dị ka 45.",
            "Ihe atụ: ledger nke otu nonprofit bọọlụ ndị ntorobịa dị dollar 15 n'okpuru nke ụlọ akụ. Onye na-elekọta ego ahụ chọtara onyinye dollar 15 batara site n'app ekwentị mana e dekọghị ya, gbakwunye ya, ugbu a ha dabara."
          ],
          steps: ["Họrọ oge kwa izu iji melite ledger.", "Dee receipt, mpempe ahịa na invoice ọ bụla nwere ụdị na nọmba receipt.", "Otu ugboro kwa ọnwa, nweta akwụkwọ ụlọ akụ ma ọ bụ mobile money gị.", "Kaa akara n'ahịrị ọ bụla dị n'akwụkwọ ahụ dabara na ledger; gbakwunye ndị na-adịghị ya.", "Tụnyere balance ha. Ọ bụrụ na ha dị iche, chọọ ahịrị na-adịghị ya, nke e dere ugboro abụọ ma ọ bụ mkpụrụ nọmba e gbanwere ọnọdụ."],
          words: [["Reconcile", "ịtụnyere ndekọ gị na akwụkwọ ụlọ akụ ma ọ bụ mobile money ma dozie ihe dị iche."], ["Statement", "ndepụta azụmahịa ụlọ akụ gị ma ọ bụ onye na-enye mobile money na-enye gị maka otu oge."], ["Cleared", "mgbe ụgwọ agafeela ma pụta n'akwụkwọ ahụ."]],
          slides: [
            { title: "Omume kwa izu", bullets: ["Ihe dị ka nkeji 20, otu ụbọchị kwa izu", "Dee receipt, mpempe ahịa na invoice"] },
            { title: "Reconcile otu ugboro kwa ọnwa", bullets: ["Nweta akwụkwọ ụlọ akụ ma ọ bụ mobile money", "Kaa akara n'ahịrị ọ bụla dabara", "Gbakwunye ihe na-adịghị ya, dị ka ụgwọ ụlọ akụ"] },
            { title: "Mgbe ọ dabaghị", bullets: ["Ahịrị na-adịghị ya", "Nọmba e dere ugboro abụọ", "Mkpụrụ e gbanwere ọnọdụ: 54 e dere dị ka 45"] }
          ],
          tryIt: "Budata ma ọ bụ meghee akwụkwọ ọnwa gara aga nke akaụntụ azụmahịa gị ma ọ bụ mobile money (ma ọ bụ nke gị, maka omume). Họrọ ahịrị ise n'akwụkwọ ahụ ma lelee na nke ọ bụla dị na ledger gị. Gbakwunye ndị na-adịghị ya.",
          youCanNow: "ime ka ledger gị dị ọhụrụ kwa izu ma tụnyere ya na akwụkwọ gị kwa ọnwa.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka reconciling pụtara?", options: ["Ime atụmatụ ego maka ọnwa na-abịa", "Ịkwụ ụgwọ gị niile", "Ide ledger ọhụrụ", "Ịtụnyere ledger gị na akwụkwọ ụlọ akụ ma ọ bụ mobile money gị"], answer: 3, why: "Reconciling bụ ịkaa akara n'ahịrị ọ bụla dị n'akwụkwọ ahụ megide ledger gị na idozi ihe na-adịghị ya." },
            { objective: "O5", q: "Ego onye ahịa kwụrụ dị n'akwụkwọ ụlọ akụ gị mana ọ dịghị na ledger gị. Gịnị ka ị ga-eme?", options: ["Gbakwunye ya na ledger", "Leghara ya anya", "Hichapụ ya n'akwụkwọ ahụ", "Chere ruo afọ ọzọ"], answer: 0, why: "Ihe ọ bụla dị n'akwụkwọ ahụ na-adịghị na ledger ka a gbakwunye." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịgụ profit-and-loss dị mfe",
          minutes: 6,
          goal: "Mee profit-and-loss nke otu ọnwa site na ledger gị ma kwuo ihe ọ na-agwa gị.",
          text: [
            "Profit-and-loss, a na-akpọkwa ya P&L ma ọ bụ income statement, bụ nchịkọta dị mkpụmkpụ maka otu oge dị ka otu ọnwa. Ọ na-egosi ngụkọta income, ngụkọta mmefu dị ka ụdị ha si dị, na ọdịiche dị n'etiti ha. Income wepụ mmefu bụ uru (profit). Ọ bụrụ na mmefu ka ukwuu, ọ bụ mfu (loss).",
            "Ị nwere ike ime ya site na ledger gị. Na taabụ ọhụrụ, depụta ụdị ọ bụla. N'akụkụ nke ọ bụla, jiri formula SUMIF gụkọta ụdị ahụ. Dịka ọmụmaatụ, =SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E) na-agụkọta ego pụrụ niile nke ụdị ha bụ Supplies (ngwongwo), ọ bụrụ na aha taabụ ledger gị bụ Ledger (kọlụm C bụ Ụdị, kọlụm E bụ Ego pụrụ). Gụkọta ụdị income, gụkọta ụdị mmefu, ma wepụ. Owner's draw abụghị mmefu, ya mere hapụ ya na mmefu.",
            "Wee gụọ ya. Ị nwetara uru? Kedu mmefu kachasị ukwuu? Ọ̀ toro site n'ọnwa gara aga? Maka ugbo, ọnwa owuwe ihe ubi ọ kwụrụ ụgwọ ọnwa ndị ahịa adịghị ike? Maka nonprofit, ego mmemme ọ nọrọ n'ime grant?",
            "P&L na-agwa gị otu azụmahịa si aga. Ọ bụghị akwụkwọ ụtụ isi gị. Iwu ụtụ isi na-ekpebi ihe a na-agụ na mgbe a na-agụ ya, ha dịkwa iche site na mba ruo mba. Were ledger gị, receipt gị na P&L gị gaa n'aka accountant ma ọ bụ ọkachamara ụtụ isi maka ụtụ isi."
          ],
          steps: ["Tinye taabụ ọhụrụ a na-akpọ P&L ma depụta ụdị gị.", "N'akụkụ ụdị ọ bụla, jiri SUMIF gụkọta ya site na ledger.", "Gụkọta ụdị income na ụdị mmefu (hapụ owner's draw).", "Wepụ: income wepụ mmefu = uru ma ọ bụ mfu.", "Dee ahịrịokwu abụọ banyere ihe nọmba ndị ahụ na-agwa gị."],
          words: [["Profit-and-loss (P&L)", "nchịkọta income, mmefu na uru ma ọ bụ mfu maka otu oge."], ["Uru (profit)", "ihe fọdụrụ mgbe income karịrị mmefu."], ["Mfu (loss)", "mgbe mmefu karịrị income."], ["SUMIF", "formula spreadsheet na-agụkọta naanị ahịrị ndị dabara n'otu aha."]],
          slides: [
            { title: "Profit-and-loss n'otu ahịrị", bullets: ["Income wepụ mmefu = uru", "Mmefu ka ukwuu? Nke ahụ bụ mfu"] },
            { title: "Mee ya site na ledger gị", bullets: ["Depụta ụdị na taabụ ọhụrụ", "Jiri SUMIF gụkọta nke ọ bụla", "Hapụ owner's draw na mmefu"] },
            { title: "Gụọ ya", bullets: ["Uru ka ọ bụ mfu?", "Mmefu kachasị ukwuu? Ọ na-eto?", "Ọnwa ọma kwụrụ ụgwọ ọnwa ndị adịghị ike?"] },
            { title: "Ọ bụghị akwụkwọ ụtụ isi", bullets: ["Iwu ụtụ isi na-ekpebi ihe a na-agụ", "Were ndekọ gị gaa n'aka accountant"] }
          ],
          sources: [{ name: "IRS: Recordkeeping for small businesses", url: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping" }],
          tryIt: "Ọrụ ikpeazụ: dee opekata mpe azụmahịa 10 nke ezi ma ọ bụ nke ihe atụ maka otu ọnwa na ledger gị, nwere ụdị na nọmba receipt, ma tụnyere ha na akwụkwọ ụlọ akụ. Wee mee taabụ P&L site na SUMIF, chọta uru ma ọ bụ mfu gị, ma dee ahịrịokwu abụọ banyere ihe ọ na-agwa gị.",
          youCanNow: "ime ma gụọ profit-and-loss nke otu ọnwa site na ledger nke gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka a na-akpọ income wepụ mmefu mgbe income ka ukwuu?", options: ["Owner's draw", "Mfu", "Uru", "Balance"], answer: 2, why: "Income wepụ mmefu bụ uru; ọ bụrụ na mmefu ka ukwuu, ọ bụ mfu." },
            { objective: "O6", q: "Ị na-eme P&L gị. Ebee ka owner's draw na-aga?", options: ["N'ụdị mmefu kachasị ukwuu", "N'income", "Na ngwongwo", "Hapụ ya na mmefu"], answer: 3, why: "Owner's draw abụghị mmefu azụmahịa, ya mere ọ naghị abanye na mmefu dị na P&L." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ledger gị na uru gị",
        questions: [
          { objective: "O4", q: "Kedu kọlụm ndị na-eme ezigbo ledger dị mfe?", options: ["Ụbọchị, Nkọwa, Ụdị, Ego batara, Ego pụrụ, Balance, Receipt #", "Aha, Ụbọchị ọmụmụ, Ihe ụtọ", "Naanị Ngụkọta", "Okwuntughe na nọmba kaadị onye ahịa"], answer: 0, why: "Kọlụm ndị a na-edekọ transaction ọ bụla ma jikọta ya na ihe akaebe ya." },
          { objective: "O4", q: "Gịnị mere ị ga-eji jiri otu okwu ụdị oge niile?", options: ["Spreadsheet agaghị emeghe ma ọ bụghị ya", "Iji mee ka ledger nwee agba mara mma", "Ka i wee gụkọta ụdị ọ bụla ma e mesịa", "N'ihi na ụlọ akụ chọrọ ya"], answer: 2, why: "Okwu dabara na-ekwe ka SUMIF gụkọta ụdị ọ bụla nke ọma." },
          { objective: "O5", q: "Ledger gị dị dollar 15 n'okpuru akwụkwọ ụlọ akụ. Gịnị ka ị ga-ebu ụzọ chọọ?", options: ["Ụlọ akụ ọhụrụ", "App spreadsheet ọhụrụ", "Ọ dịghị ihe; obere ọdịiche adịghị mkpa", "Ego e tinyere ma ọ bụ ụgwọ dị n'akwụkwọ ụlọ akụ mana ọ dịghị na ledger"], answer: 3, why: "Ọdịiche na-apụtakarị ahịrị na-adịghị ya, nke e dere ugboro abụọ ma ọ bụ nke e dehiere." },
          { objective: "O6", q: "Income bụ 2,000, mmefu bụ 1,500, owner's draw bụ 300. Gịnị bụ uru?", options: ["200", "500", "3,800", "1,500"], answer: 1, why: "Uru bụ income wepụ mmefu: 2,000 - 1,500 = 500. Owner's draw abụghị mmefu." },
          { objective: "O6", q: "Onye ka ị ga-agwa okwu banyere ụtụ isi gị?", options: ["Accountant ma ọ bụ ọkachamara ụtụ isi", "Onye ị na-amaghị dere ihe n'ịntanetị", "Ọ dịghị onye; P&L bụ akwụkwọ ụtụ isi gị", "Ndị ahịa gị"], answer: 0, why: "P&L abụghị akwụkwọ ụtụ isi; accountant maara iwu ụtụ isi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Idekọ Akaụntụ Azụmahịa",
    questions: [
      { objective: "O1", q: "Idekọ akaụntụ pụtara:", options: ["Ịgụ akwụkwọ gbasara azụmahịa", "Ịkọ uru gị na njedebe afọ", "Ide ego niile na-abata na nke na-apụ", "Idebe akwụkwọ ndekọ ndụ (diary)"], answer: 2, why: "Idekọ akaụntụ na-edekọ ego ọ bụla na-abata na nke na-apụ." },
      { objective: "O1", q: "Maka nonprofit, kedu nke bụ income?", options: ["Onyinye", "Ụgwọ ụlọ ọfịs", "Nri nkenke maka ndị ọrụ afọ ofufo", "Ink igwe mbipụta"], answer: 0, why: "Onyinye na grant bụ ego na-abata." },
      { objective: "O2", q: "Kedu nke bụ ihe atụ nke supporting document maka mmefu?", options: ["Ozi ederede site n'aka enyi", "Kaadị azụmahịa", "Ndepụta ihe ị ga-eme", "Receipt ma ọ bụ invoice"], answer: 3, why: "IRS depụtara receipt, invoice na akwụkwọ ụlọ akụ dị ka ihe akaebe mmefu." },
      { objective: "O2", q: "Gịnị bụ ụzọ kacha mfe iji gbochie receipt akwụkwọ ịchapụ ma ọ bụ ifu efu?", options: ["Debe ha n'akpa uwe", "See ha foto ma debe ha n'otu ụbọchị ahụ", "Tụfuo ha mgbe otu izu gachara", "Nye ndị ahịa ha"], answer: 1, why: "Foto e sere n'otu ụbọchị ahụ, e debere dị ka ọnwa si dị, na-echekwa ihe akaebe ahụ." },
      { objective: "O2", q: "Maka ọtụtụ akwụkwọ ụtụ isi US, iwu bụ isi nke IRS bụ idebe ndekọ maka:", options: ["Otu izu", "Afọ 3, ma karịa n'ụfọdụ ọnọdụ", "Otu ọnwa", "Mgbe ọ bụla; a chọghị ndekọ"], answer: 1, why: "IRS kwuru afọ 3 n'ọtụtụ ọnọdụ, ma ka ogologo n'ụfọdụ ọnọdụ." },
      { objective: "O2", q: "Ndekọ ụtụ isi ndị ọrụ (employment tax) kwesịrị ka e debe ha opekata mpe:", options: ["Otu ọnwa", "Otu afọ", "Afọ 4", "Ụbọchị 10"], answer: 2, why: "IRS kwuru opekata mpe afọ 4 mgbe ụtụ isi ahụ ruru ma ọ bụ e kwụrụ ya." },
      { objective: "O3", q: "Gịnị mere ị ga-eji debe ego azụmahịa n'akaụntụ ma ọ bụ akpa ego nke ya?", options: ["Ka i wee mara ma azụmahịa ahụ na-enweta uru", "N'ihi na ịgwakọta ego na-atọ ụtọ", "Ka ị ghara idebe receipt", "Iji zoo ihe e rere"], answer: 0, why: "Ego agwakọtara na-ezo otu azụmahịa si aga n'ezie." },
      { objective: "O3", q: "I ji kaadị nke gị kwụọ ụgwọ ngwongwo azụmahịa. Gịnị ka ị ga-eme?", options: ["Chefuo ya", "Dekọọ ya dị ka ihe e rere", "Tụfuo receipt ahụ", "Dekọọ ya na ledger ma debe receipt"], answer: 3, why: "Idekọ ya na-eme ka akwụkwọ zuo oke ma ihe akaebe dịrị n'udo." },
      { objective: "O3", q: "Onye na-enye onyinye nyere ego naanị maka mmemme egwuregwu ndị ntorobịa. Nonprofit ahụ kwesịrị:", options: ["Imefu ya n'ihe ọ bụla", "Ịlaghachi ya ozugbo", "Ịghara idekọ ya", "Idebe ndekọ ya ka e mefuo ya na mmemme ahụ"], answer: 3, why: "A ga-edebe ndekọ onyinye e kpachiri ma jiri ya maka ebumnuche ya." },
      { objective: "O4", q: "Ledger nwere:", options: ["Otu peeji kwa onye ahịa", "Otu ahịrị kwa transaction", "Naanị ngụkọta afọ", "Naanị mmefu"], answer: 1, why: "Ihe e rere, ụgwọ e kwụrụ ma ọ bụ ihe e zụrụ ọ bụla bụ ahịrị nke ya." },
      { objective: "O4", q: "Na spreadsheet, formula na-amalite na:", options: ["#", "$", "=", "?"], answer: 2, why: "Formula spreadsheet na-amalite na akara nhata (=)." },
      { objective: "O4", q: "Balance bụ kọlụm F, Ego batara D, Ego pụrụ E. Balance na-aga n'ihu n'ahịrị 3 bụ:", options: ["=F2+D3-E3", "=D3*E3", "=F2-D3-E3", "=E3"], answer: 0, why: "Were balance dị n'elu, gbakwunye ego batara ma wepụ ego pụrụ." },
      { objective: "O5", q: "Gịnị bụ ezigbo omume iji mee ka akwụkwọ gị dị ọhụrụ?", options: ["Melite ya otu ugboro kwa izu n'oge a kara aka", "Melite ya naanị mgbe ọfịs ụtụ isi dere gị akwụkwọ", "Melite ya otu ugboro n'ọtụtụ afọ", "Emeliteghị ya mgbe ọ bụla"], answer: 0, why: "Obere omume kwa izu na-eme ka ndekọ zuo oke ma dị mfe." },
      { objective: "O5", q: "Reconciling pụtara:", options: ["Ime udo na onye ahịa", "Ihichapụ receipt ochie", "Ịtụnyere ledger gị na akwụkwọ ụlọ akụ ma ọ bụ mobile money", "Imeghe akaụntụ ọhụrụ"], answer: 2, why: "Reconciling na-achọta ma dozie ọdịiche dị n'etiti akwụkwọ gị na akwụkwọ ụlọ akụ." },
      { objective: "O5", q: "Ụgwọ ụlọ akụ dị n'akwụkwọ ụlọ akụ mana ọ dịghị na ledger gị. Ị kwesịrị:", options: ["Ileghara ya anya", "Ịgbakwunye ya na ledger", "Imechi akaụntụ ahụ", "Ihichapụ akwụkwọ ahụ"], answer: 1, why: "Ihe ọ bụla bụ eziokwu dị n'akwụkwọ ụlọ akụ kwesịrị ịdị na ledger." },
      { objective: "O5", q: "I dere 45 kama 54. Ụdị mperi a bụ:", options: ["Ahịrị na-adịghị ya", "Ndekọ ugboro abụọ", "Ụdị ọhụrụ", "Mkpụrụ nọmba e gbanwere ọnọdụ"], answer: 3, why: "Mkpụrụ nọmba e gbanwere ọnọdụ bụ ihe a na-ahụkarị na-eme ka akwụkwọ ghara ịdaba." },
      { objective: "O6", q: "Profit-and-loss na-egosi:", options: ["Naanị balance ụlọ akụ gị", "Aha ndị ahịa gị", "Income, mmefu na ọdịiche dị n'etiti ha maka otu oge", "Akara kredit gị (credit score)"], answer: 2, why: "P&L na-achịkọta income, mmefu na uru ma ọ bụ mfu." },
      { objective: "O6", q: "Kedu formula na-agụkọta ego Supplies niile site na ledger?", options: ["=SUM(Supplies)", "=Supplies+1", "=AVERAGE(C:C)", "=SUMIF(Ledger!C:C,\"Supplies\",Ledger!E:E)"], answer: 3, why: "SUMIF na-agụkọta naanị ahịrị ndị ụdị ha bụ Supplies." },
      { objective: "O6", q: "Mmefu karịrị income n'ọnwa a. Nke ahụ bụ:", options: ["Mfu", "Uru", "Owner's draw", "Receipt"], answer: 0, why: "Mgbe mmefu karịrị income, ihe ọ na-ebute bụ mfu." },
      { objective: "O6", q: "P&L gị dị njikere. Ọ̀ bụ akwụkwọ ụtụ isi gị?", options: ["Ee, ziga ya n'ọfịs ụtụ isi otu o si dị", "Mba; were ndekọ gị gaa n'aka accountant maka ụtụ isi", "Ee, ọ bụrụ na o gosiri uru", "Naanị maka nonprofit"], answer: 1, why: "Iwu ụtụ isi na-ekpebi ihe a na-agụ; accountant nwere ike ịkwadebe ụtụ isi gị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      2,
      6,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "E hazirila ledger",
        objective: "O4",
        notYet: "Kọlụm ụfọdụ adịghị ma ọ bụ balance anaghị agbanwe.",
        meets: "Kọlụm asaa niile, balance mmalite na balance na-aga n'ihu nke ziri ezi mgbe ahịrị ọ bụla gachara.",
        exceeds: "O nwekwara ndepụta ụdị a kara aka na taabụ nke ya, e ji otu okwu ahụ oge niile."
      },
      {
        name: "E kewara income na mmefu",
        objective: "O1",
        notYet: "Ahịrị ụfọdụ nọ n'ụdị ezighi ezi ma ọ bụ enweghị ụdị.",
        meets: "Opekata mpe transaction 10, nke ọ bụla nwere ụdị income ma ọ bụ mmefu ziri ezi.",
        exceeds: "E dekọrọ owner's draw na ego nke onwe ọ bụla e ji maka azụmahịa n'ụzọ ziri ezi."
      },
      {
        name: "Ihe akaebe maka ahịrị ọ bụla",
        objective: "O2",
        notYet: "Ahịrị ụfọdụ enweghị nọmba receipt ma ọ bụ ihe akaebe.",
        meets: "Ahịrị ọ bụla nwere nọmba receipt dabara na receipt ma ọ bụ mpempe ahịa e chekwara.",
        exceeds: "Receipt dị na folda nke ọnwa ahụ, e debekwara akwụkwọ ha n'enveloppu dabara."
      },
      {
        name: "E tụnyere ya na akwụkwọ ụlọ akụ",
        objective: "O5",
        notYet: "E tụnyereghị ledger ahụ na akwụkwọ ụlọ akụ.",
        meets: "E kara akara n'ahịrị akwụkwọ ụlọ akụ, gbakwunye ahịrị na-adịghị ya, balance dabara ma ọ bụ e kọwara ọdịiche ya.",
        exceeds: "Nwere ike ịkpọ aha ọdịiche ọ bụla a hụrụ na otu e si dozie ya."
      },
      {
        name: "E gụrụ profit-and-loss",
        objective: "O6",
        notYet: "Enweghị P&L, ma ọ bụ ngụkọta ezighi ezi.",
        meets: "P&L nwere ngụkọta SUMIF, e hapụrụ owner's draw, ma gosi uru ma ọ bụ mfu.",
        exceeds: "Ahịrịokwu abụọ doro anya na-ekwu ihe nọmba ndị ahụ pụtara na otu ihe a ga-agbanwe n'ọnwa na-abịa."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe ka na-emelite ledger ha kwa izu ma na-eme reconcile kwa ọnwa n'oge nsochi ụbọchị 30",
      "Ndị na-amụ ihe jiri ndekọ ha rịọ mbinye ego ma ọ bụ grant, ma ọ bụ wetara ha accountant n'oge ụtụ isi",
      "Ndị na-amụ ihe malitere ihe ọmụmụ azụmahịa Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere spreadsheet n'efu: Google Sheets ma ọ bụ Microsoft Excel",
      "Receipt nke otu ọnwa, nke ezi ma ọ bụ nke ihe atụ, na akwụkwọ ụlọ akụ ma ọ bụ mobile money (ma ọ bụ nke ihe atụ)",
      "Igwefoto ekwentị maka foto receipt, na enveloppu maka receipt akwụkwọ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kwadebe azụmahịa ihe atụ nke otu ọnwa na akwụkwọ ụlọ akụ ihe atụ maka ndị na-amụ ihe na-achọghị iji nọmba nke ha.",
      "Mee ledger na formula balance na-aga n'ihu ọnụ n'otu ihuenyo, wee hapụ ndị na-amụ ihe ka ha detuo ya.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye nọmba akaụntụ ma ọ bụ ozi ndị ahịa n'ime ngwa AI ma ọ bụ n'ihuenyo a na-ekerịta.",
      "Enyela ndụmọdụ ụtụ isi; ziga ajụjụ ụtụ isi n'aka accountant ma ọ bụ ọfịs ụtụ isi.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

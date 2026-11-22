"use strict";

// Koach Learn course (Igbo translation of shared/real-estate-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  arello: { name: "ARELLO (otu ndị ọrụ iwu ikike ala na ụlọ): Ndepụta ụlọ ọrụ na-achịkwa", url: "https://arello.org/resources/regulatory-agencies/" },
  caDre: { name: "California Department of Real Estate: Ihe a chọrọ maka ikike salesperson", url: "https://www.dre.ca.gov/Examinees/RequirementsSales.html" },
  txTrec: { name: "Texas Real Estate Commission: Ịghọ sales agent", url: "https://www.trec.texas.gov/become-licensed/sales-agent" },
  hudFha: { name: "HUD: Nchịkọta Fair Housing Act", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" },
  cfpbLe: { name: "CFPB: Gịnị bụ Loan Estimate?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-loan-estimate-en-1995/" },
  cfpbCd: { name: "CFPB: Gịnị bụ Closing Disclosure?", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-closing-disclosure-en-1983/" },
  cfpbHome: { name: "CFPB: Ịzụta ụlọ (Owning a Home)", url: "https://www.consumerfinance.gov/owning-a-home/" }
};

module.exports = {
  id: "real-estate-license-prep-ig",
  lang: "ig",
  translationOf: "real-estate-license-prep",
  category: "Workforce Development",
  name: "Nkwadebe maka Ule Ikike Real Estate (Ala na Ụlọ)",
  skills: "Ịchọta nzọụkwụ ikike nke steeti gị, Iji okwu gbasara ala na inwe ihe, Itinye iwu agency na fair housing n'ọrụ, Ịgbaso nkwekọrịta ruo closing, Ịgbakọ mgbakọ ule real estate, Ime atụmatụ ọmụmụ na ule nwere ụbọchị",
  outcome: "ịchọta nzọụkwụ ikike real estate nke steeti gị na peeji gọọmentị, ịkọwa isi echiche ule ahụ na-anwale (ala na ụlọ, agency, fair housing, nkwekọrịta na closing), ịgbakọ mgbakọ a na-ahụkarị n'ule, na ịgbaso atụmatụ ọmụmụ na ule nwere ụbọchị nke gị onwe gị mere.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ịghọ salesperson real estate nwere ikike (a na-akpọ ya sales agent na steeti ụfọdụ): ndị na-agbanwe ọrụ, ndị na-amalite obere azụmahịa, ndị agha mbụ (veterans), ndị nne na nna na-alaghachi n'ọrụ, na onye ọ bụla chọrọ ọrụ ọ ga-eto n'ime ya. Ọtụtụ ndị agent na-arụ ọrụ dị ka ndị ọrụ nweere onwe ha n'okpuru broker nwere ikike, ya mere ọ dabakwara ndị na-azụ ahịa.",
    "Na US, steeti ọ bụla na-enye ndị agent real estate ikike. Ụlọ ọrụ na-achịkwa ya na steeti ahụ na-ekpebi klas a ga-ebu ụzọ were (pre-license), ule, nlele akụkọ ndụ (background check) na ego a ga-akwụ. Ihe ọmụmụ a na-AKWADO gị; ọ naghị enye ikike, ọ naghị anọchikwa klas pre-license steeti gị kwadoro. Nkuzi ọ bụla na-egosi gị ebe ị ga-elele iwu steeti gị.",
    "Ị ga-amụta isi echiche ọtụtụ ule steeti na-anwale, mee omume mgbakọ site na nọmba e chepụtara echepụta, ma mechaa atụmatụ ọmụmụ na ule nwere ụbọchị nke gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ n'ekwentị. Ihe ọmụmụ a na-akụzi otu real estate si arụ ọrụ; ọ naghị enye ndụmọdụ gbasara ịzụ ala ma ọ bụ itinye ego (investing)."
  ],
  finalTask: "Mee Atụmatụ Ọmụmụ na Ule Ikike Real Estate nke gị (peeji otu ma ọ bụ abụọ): (1) ụlọ ọrụ na-achịkwa steeti gị, ezi peeji i jiri, na nzọụkwụ ọ depụtara (afọ, klas pre-license, ule, mkpịsị aka ma ọ bụ background check, broker na-akwado gị), nke ọ bụla nwere ụbọchị ebumnuche; (2) isiokwu sitere na ndepụta isiokwu ule (exam content outline) steeti gị, ebe i kara isiokwu atọ kacha sie gị ike, na atụmatụ maka nke ọ bụla; (3) peeji iwu otu gbasara ọrụ agency, klas asaa e chebere n'iwu fair housing gọọmentị etiti, na akụkụ nkwekọrịta ziri ezi; (4) ajụjụ mgbakọ omume ise (commission, loan-to-value, ụtụ ala, proration, mbara ala) ebe i gosiri otu i si gbakọọ; (5) usoro ọmụmụ kwa izu ruo ụbọchị ule i chọrọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye US na-akwado maka ikike salesperson (sales agent) real estate nke steeti: ndị na-agbanwe ọrụ, ndị nwe obere azụmahịa, ndị na-azụ ahịa, ndị agha mbụ, ndị na-alaghachi n'ọrụ na ndị ntorobịa gafere afọ 18. Ụfọdụ gụchara naanị ụlọ akwụkwọ sekọndrị ma ọ bụ GED; ụfọdụ na-asụ Bekee dị ka asụsụ nke abụọ.",
    startingPoint: "Ha nwere ike ịgụ obere fọm ma jiri kalkuleta gbakọọ mgbakọ dị mfe. Ọtụtụ amaghị onye na-enye ndị agent ikike na steeti ha, usoro nzọụkwụ ikike, ma ọ bụ okwu iwu ule ahụ na-eji (fee simple, easement, fiduciary, consideration, proration).",
    gap: "Ọtụtụ ndị mmadụ na-akwụ ụgwọ klas ma ọ bụ ule n'enweghị atụmatụ, na-echefu otu nzọụkwụ (dị ka mkpịsị aka ma ọ bụ broker na-akwado ha), ma ọ bụ na-ada ule n'ihi okwu na mgbakọ. Onye na-amụ ihe maara nzọụkwụ gọọmentị, isi echiche na mgbakọ ule, nwekwa atụmatụ nwere ụbọchị, nwere ohere ka ukwuu ịgafe ule ma malite ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 7 ruo 8); a na-akọwa okwu iwu ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ iji gụọ peeji gọọmentị steeti; akwụkwọ, mkpịsị ode na kalkuleta dị mfe maka ọrụ ọ bụla",
      "Oge: nkuzi nkeji 4 ruo 6 dabara n'akụkụ ọrụ",
      "Iwu dị iche site na steeti: awa klas, ụdị ule, akara ịgafe na ego ka a na-elele na peeji ụlọ ọrụ na-achịkwa steeti, a naghị eche ya echiche",
      "Ihe ọmụmụ a na-akwado; ọ naghị anọchi klas pre-license steeti kwadoro, ọ naghịkwa enye ikike",
      "Ọ dịghị ndụmọdụ gbasara itinye ego, iwu ma ọ bụ ụtụ isi; mgbakọ na-eji nọmba e chepụtara echepụta maka omume naanị"
    ],
    prerequisites: "Ọ dịghị. Ndị chọrọ ịmụgharị pasentị nwere ike ibu ụzọ were \"Everyday Math\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji weebụsaịtị gọọmentị nke ụlọ ọrụ na-achịkwa real estate na steeti gị", action: "idepụta nzọụkwụ iji nweta ikike salesperson n'usoro ziri ezi", standard: "n'enweghị nzọụkwụ ọ bụla fọdụrụ, na aha peeji gọọmentị ahụ" },
    { id: "O2", condition: "Mgbe e nyere gị nkọwa dị mkpụmkpụ nke ala ma ọ bụ ọnọdụ inwe ihe", action: "ịmata okwu real estate ziri ezi maka ya", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ọnọdụ gbasara onye ahịa (client) ma ọ bụ onye na-achọ ụlọ", action: "ịhọrọ omume na-agbaso ọrụ agency na iwu fair housing", standard: "ma nweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi ma kpọọ aha iwu ahụ" },
    { id: "O4", condition: "Mgbe e nyere gị ihe atụ nke onyinye ịzụta (purchase offer)", action: "ilele na o nwere akụkụ nkwekọrịta ziri ezi ma tinye nzọụkwụ closing n'usoro", standard: "n'enweghị akụkụ fọdụrụ, na oge ngosipụta gọọmentị etiti ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị ajụjụ okwu dị ka nke ule na kalkuleta", action: "ịgbakọ commission, loan-to-value, ụtụ ala, proration na mbara ala", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi, na-egosi otu i si gbakọọ" },
    { id: "O6", condition: "Site n'iji ndepụta isiokwu ule steeti gị na kalenda", action: "ide atụmatụ ọmụmụ na ule nwere ụbọchị", standard: "nke kpuchiri isiokwu ọ bụla dị na ndepụta na isiokwu atọ kacha sie gị ike" }
  ],
  chapters: [
    {
      name: "Isi 1: Ikike na isi echiche",
      lessons: [
        {
          title: "Otu ikike real estate si arụ ọrụ na steeti gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta nzọụkwụ steeti gị maka ikike salesperson site na peeji gọọmentị.",
          text: [
            "O nweghị ikike real estate nke mba niile na US. Steeti ọ bụla nwere ụlọ ọrụ na-achịkwa nke ya, a na-akpọkarị ya real estate commission ma ọ bụ department of real estate. Ọ na-ekpebi klas, ule, background check na ego. ARELLO, otu ndị ọrụ iwu ikike, na-edebe ndepụta ụlọ ọrụ ndị a ị nwere ike iji chọta nke gị.",
            "Nzọụkwụ yiri onwe ha n'ọtụtụ steeti: gbasoo iwu afọ, mechaa klas pre-license steeti kwadoro, tinye akwụkwọ, gafee background check (mgbe ụfọdụ mkpịsị aka), gafee ule, ma rụọ ọrụ n'okpuru broker nwere ikike. Ọtụtụ ule nwere akụkụ mba niile na akụkụ iwu steeti.",
            "Nkọwa zuru ezu dị iche nke ukwuu. California na-achọ ihe ọmụmụ atọ nke ọkwa kọleji (Real Estate Principles, Real Estate Practice na otu nhọrọ). Texas na-achọ awa klas 180 n'ime ihe ọmụmụ isii, mkpịsị aka n'aka ndị uwe ojii steeti, na ule Pearson na-enye. Steeti gị nwere ike ịdị iche, ya mere gụọ peeji steeti gị mgbe niile."
          ],
          steps: ["Chọta ụlọ ọrụ na-achịkwa real estate na steeti gị (jiri ndepụta ARELLO ma ọ bụ chọọ aha steeti gị na \"real estate commission\" ma lelee .gov).", "Meghee peeji maka ikike salesperson ma ọ bụ sales agent ọhụrụ.", "Dee nzọụkwụ ọ bụla n'usoro: afọ, klas, akwụkwọ arịrịọ, background check, ule, broker.", "Dee adreesị peeji ahụ na ụbọchị i lere ya."],
          words: [["Ụlọ ọrụ na-achịkwa real estate (regulator)", "ọfịs steeti na-enye ndị agent ikike ma na-eme ka e debe iwu, dị ka real estate commission."], ["Salesperson (sales agent)", "ikike real estate mbụ; ị na-arụ ọrụ n'okpuru broker."], ["Broker", "ikike dị elu karị; broker nwere ike ịchị ọfịs real estate ma lekọta ndị salesperson."], ["Pre-license education", "klas steeti kwadoro ị ga-emecha tupu ule ma ọ bụ ikike."], ["Sponsoring broker", "broker kwetara ilekọta gị ozugbo i nwetara ikike."]],
          slides: [
            { title: "Ikike na-esite na steeti", bullets: ["O nweghị ikike real estate nke mba niile", "Ụlọ ọrụ na-achịkwa steeti gị na-ekpebi klas, ule na ego", "ARELLO na-edepụta ụlọ ọrụ ndị a"] },
            { title: "Nzọụkwụ n'ọtụtụ steeti", bullets: ["Iwu afọ na klas pre-license", "Akwụkwọ arịrịọ na background check", "Ule (mgbe ụfọdụ akụkụ mba na nke steeti)", "Ọrụ n'okpuru broker nwere ikike"] },
            { title: "Steeti dị iche: ihe atụ abụọ", bullets: ["California: ihe ọmụmụ atọ nke ọkwa kọleji", "Texas: awa 180 n'ime ihe ọmụmụ isii, ule Pearson", "Gụọ peeji steeti gị mgbe niile"] }
          ],
          sources: [SRC.arello, SRC.caDre, SRC.txTrec],
          tryIt: "Chọta ụlọ ọrụ na-achịkwa real estate na steeti gị. N'akwụkwọ, depụta nzọụkwụ ọ bụla maka ikike salesperson n'usoro, ya na adreesị peeji ahụ na ụbọchị taa. Gbaa okirikiri na nzọụkwụ ọ bụla ị maghị na mbụ.",
          youCanNow: "ịchọta ụlọ ọrụ na-achịkwa real estate na steeti gị ma depụta nzọụkwụ maka ikike salesperson n'usoro.",
          quickCheck: [
            { objective: "O1", q: "Onye na-ekpebi klas na ule maka ikike salesperson real estate?", options: ["Otu bọọdụ real estate nke mba niile", "Ụlọ ọrụ real estate ị sonyeere", "Ụlọ ọrụ na-achịkwa real estate na steeti gị", "Ụlọ akụ na-agbazinye ndị na-azụ ụlọ ego"], answer: 2, why: "Steeti ọ bụla na-enye ikike real estate, ụlọ ọrụ na-achịkwa steeti ahụ na-ekpebikwa ihe a chọrọ." },
            { objective: "O1", q: "Weebụsaịtị i hụrụ kwuru na klas ahụ na-ewe awa 60. Gịnị ka ị ga-eme?", options: ["Lelee awa ahụ na peeji gọọmentị nke ụlọ ọrụ na-achịkwa steeti gị", "Kwere ya ma ọ bụrụ na ọ dị mma n'anya", "Kwụọ ụgwọ klas kacha dị ọnụ ala ugbu a", "Jụọ enyi gị nọ na steeti ọzọ"], answer: 0, why: "Awa dị iche site na steeti ma na-agbanwe, ya mere naanị peeji gọọmentị steeti gị bụ nke a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          title: "Okwu gbasara ala na inwe ihe ule na-eji",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mata okwu ziri ezi maka ọnọdụ ala ma ọ bụ inwe ihe.",
          text: [
            "Real property bụ ala na ihe niile jikọtara na ya, dị ka ụlọ, ngere ma ọ bụ osisi, tinyere ikike so ya. Personal property bụ ihe a na-ebugharị, dị ka oche ogologo (couch). Fixture bụbu personal property ma ugbu a e jikọtala ya, dị ka fan elu ụlọ ma ọ bụ dishwasher e wuru n'ime, ya mere ọ na-esokarị ụlọ ahụ.",
            "Inwe real property pụtara ijide ngwugwu ikike: ijide ya, iji ya, ịnụ ụtọ ya, igbochi ndị ọzọ, na ire ya ma ọ bụ inyefe ya. Fee simple bụ ụdị inwe ihe kacha zuo oke. Mgbe mmadụ abụọ ma ọ bụ karịa nwe ihe ọnụ, joint tenancy na-enwekarị right of survivorship (òkè onye nwụrụ anwụ na-agara ndị nwe ya ndị ọzọ), ma tenancy in common enweghị ya.",
            "Deed na-ebufe inwe ihe; title bụ ikike inwe ihe n'onwe ya. Ihe na-egbochi ma ọ bụ na-ebunye ala ibu bụ encumbrance: lien (nkwupụta ego, dị ka mortgage ma ọ bụ ụtụ a kwụghị) na easement (ikike iji ala onye ọzọ, dị ka eriri ọkụ ma ọ bụ mmiri). A na-akọwa ala n'ụzọ atọ: metes and bounds, usoro nyocha rectangular (gọọmentị), na lot and block site na maapụ e debere."
          ],
          words: [["Real property", "ala, ihe jikọtara na ya, na ikike inwe ya."], ["Fixture", "ihe e jikọtara na ala ma ọ bụ ụlọ, ya mere a na-agụ ya dị ka akụkụ ya."], ["Fee simple", "ụdị inwe ihe kacha zuo oke."], ["Right of survivorship", "mgbe otu n'ime ndị nwe ihe ọnụ nwụrụ, òkè ya na-agara ndị ọzọ nwe ya."], ["Encumbrance", "ihe ọ bụla na-egbochi ma ọ bụ na-ebunye ala ibu, dị ka lien ma ọ bụ easement."], ["Lien", "nkwupụta ego iwu kwadoro n'elu ala ma ọ bụ ụlọ."], ["Easement", "ikike iji akụkụ ala onye ọzọ maka otu ebumnuche a kara aka."]],
          slides: [
            { title: "Real property na personal property", bullets: ["Real: ala na ihe jikọtara na ya", "Personal: ihe a na-ebugharị", "Fixture: e jikọtara ya, ya mere ọ na-anọkarị"] },
            { title: "Inwe ihe", bullets: ["Ngwugwu ikike: ijide, iji, ịnụ ụtọ, igbochi, ire", "Fee simple: inwe ihe kacha zuo oke", "Joint tenancy nwere survivorship; tenancy in common enweghị"] },
            { title: "Title na ihe na-egbochi", bullets: ["Deed na-ebufe inwe ihe; title bụ inwe ihe ahụ", "Lien: nkwupụta ego", "Easement: ikike iji ala onye ọzọ"] },
            { title: "Ịkọwa ala", bullets: ["Metes and bounds", "Nyocha rectangular (gọọmentị)", "Lot and block site na maapụ e debere"] }
          ],
          tryIt: "Mee kaadị flash 10 n'akwụkwọ: okwu ahụ n'ihu, na nkọwa dị mfe nke gị na otu ihe atụ n'azụ (real property, personal property, fixture, fee simple, joint tenancy, tenancy in common, deed, title, lien, easement). Nwalee onwe gị ugboro abụọ.",
          youCanNow: "ịkpọ aha okwu real estate ziri ezi maka ọnọdụ ala na inwe ihe a na-ahụkarị.",
          quickCheck: [
            { objective: "O2", q: "Ụlọ ọrụ ọkụ nwere ikike ịgafe eriri n'azụ ogige otu ụlọ. Nke a bụ:", options: ["Fixture", "Fee simple", "Personal property", "Easement"], answer: 3, why: "Easement bụ ikike iji akụkụ ala onye ọzọ maka otu ebumnuche a kara aka." },
            { objective: "O2", q: "Ụmụnne nwanyị abụọ nwe otu ụlọ. Mgbe otu nwụrụ, òkè ya na-agara nke ọzọ ozugbo. O yikarịrị ka ha jide title dị ka:", options: ["Tenants in common", "Joint tenants", "Ndị na-agba ụlọ (renters)", "Ndị nwe lien"], answer: 1, why: "Joint tenancy na-enwekarị right of survivorship; tenancy in common enweghị ya." }
          ]
        },
        {
          title: "Ọrụ agency na fair housing",
          objectives: ["O3"],
          minutes: 6,
          goal: "Họrọ omume na-agbaso ọrụ agency na iwu fair housing n'ọnọdụ e nyere gị.",
          text: [
            "Mgbe ị na-anọchite anya onye ahịa (client), ị bụ agent ya, i jikwa ya ụgwọ ọrụ fiduciary. Ọtụtụ akwụkwọ na-edepụta ha dị ka OLDCAR: Obedience (irube isi n'ntụziaka iwu kwadoro), Loyalty (iguzosi ike), Disclosure (ikpughe eziokwu dị mkpa), Confidentiality (idebe ihe nzuzo), Accounting (ịkọ akụkọ ego ị na-ejide) na Reasonable care (ilezi anya nke ọma). Iwu steeti gị na-ekpebi ọrụ ndị a kpọmkwem na fọm ngosipụta.",
            "Ịnọchite anya ma onye na-azụ ma onye na-ere n'otu azụmahịa ka a na-akpọ dual agency. Steeti ụfọdụ na-ekwe ya naanị ma ọ bụrụ na akụkụ abụọ ahụ kwere n'ederede, ụfọdụ na-egbochi ya ma ọ bụ machibido ya. Lelee iwu steeti gị.",
            "Fair Housing Act gọọmentị etiti machibidoro ịkpa ókè n'ụlọ obibi n'ihi agbụrụ (race), agba akpụkpọ (color), mba a mụrụ mmadụ (national origin), okpukpe, mmekọahụ (sex), ọnọdụ ezinụlọ (dị ka inwe ụmụaka) ma ọ bụ nkwarụ. Steeti na obodo nwere ike ịgbakwunye otu ndị ọzọ. Omume megidere iwu gụnyere steering (iduga ndị mmadụ ma ọ bụ isi n'ebe ụfọdụ wezuga ha n'ihi otu e chebere), blockbusting (ịkpali ndị nwe ụlọ ire n'ịdọ aka na ntị na otu ndị na-abata) na redlining (ịjụ inye mbinye ego ma ọ bụ inshọransị n'ebe ụfọdụ)."
          ],
          steps: ["Jụọ: onye bụ onye ahịa m, gịnị ka m ji ya?", "Jụọ: arịrịọ a ọ na-emeso mmadụ iche n'ihi otu e chebere?", "Ọ bụrụ ee, emela ya; kọwaa iwu ahụ nke ọma.", "Dee ihe mere ma gwa broker gị."],
          words: [["Agent", "onye e nyere ikike ime ihe n'aha onye ọzọ (onye ahịa ma ọ bụ principal)."], ["Fiduciary", "onye nọ n'ọnọdụ ntụkwasị obi nke ga-ebu ụzọ tinye ọdịmma onye ahịa."], ["Dual agency", "otu agent ma ọ bụ otu ụlọ ọrụ brokerage na-anọchite anya ma onye na-azụ ma onye na-ere n'otu azụmahịa."], ["Otu e chebere (protected class)", "otu ndị iwu na-echebe pụọ n'ịkpa ókè, dị ka agbụrụ ma ọ bụ nkwarụ."], ["Steering", "iduga ndị mmadụ ma ọ bụ isi n'ebe ụfọdụ wezuga ha n'ihi otu e chebere; ọ megidere iwu."]],
          slides: [
            { title: "Ọrụ gị nye onye ahịa (OLDCAR)", bullets: ["Obedience, Loyalty, Disclosure", "Confidentiality, Accounting, Reasonable care", "Iwu steeti gị na-ekpebi ọrụ ndị a kpọmkwem"] },
            { title: "Dual agency", bullets: ["Ịnọchite anya akụkụ abụọ n'otu azụmahịa", "Iwu dị iche: nkwenye, oke ma ọ bụ mmachibido", "Lelee steeti gị"] },
            { title: "Fair Housing Act: otu 7", bullets: ["Agbụrụ, agba akpụkpọ, mba a mụrụ mmadụ, okpukpe", "Mmekọahụ, ọnọdụ ezinụlọ, nkwarụ", "Steeti na obodo nwere ike ịgbakwunye ndị ọzọ"] },
            { title: "Omume megidere iwu", bullets: ["Steering", "Blockbusting", "Redlining"] }
          ],
          sources: [SRC.hudFha],
          tryIt: "Dee ọnọdụ atọ dị mkpụmkpụ ebe onye na-ere ma ọ bụ onye na-azụ na-arịọ gị ime ihe na-ezighị ezi (dịka ọmụmaatụ, \"Egosila ezinụlọ nwere ụmụaka ụlọ m\"). Maka nke ọ bụla, dee otu e chebere metụtara ya na otu ahịrịokwu nwere nkwanye ugwu ị ga-ekwu kama.",
          youCanNow: "itinye ọrụ agency na iwu fair housing n'ọrụ iji họrọ omume ziri ezi na ndị ahịa.",
          quickCheck: [
            { objective: "O3", q: "Onye na-ere kwuru, \"Gosi ụlọ m naanị ndị na-enweghị ụmụaka.\" Gịnị ka ị ga-eme?", options: ["Kọwaa na ọnọdụ ezinụlọ bụ otu e chebere, na ị ga-egosi onye ọ bụla ya", "Kwenye, ebe ọ bụ na onye na-ere bụ onye ahịa gị", "Gosi ya naanị n'ụbọchị ọrụ", "Jụọ ndị na-azụ ụmụaka ole ha nwere"], answer: 0, why: "Ọnọdụ ezinụlọ bụ otu e chebere n'okpuru Fair Housing Act, obedience na-ekpuchikwa naanị ntụziaka iwu kwadoro." },
            { objective: "O3", q: "Onye na-ere gị gwara gị ọnụ ahịa kacha ala ọ ga-anabata. Onye na-azụ jụrụ gị ya. Kedu ọrụ metụtara nke a?", options: ["Accounting", "Confidentiality", "Disclosure nye onye na-azụ", "Obedience nye onye na-azụ"], answer: 1, why: "Agent na-edebe ozi nzuzo onye ahịa, dị ka ọnụ ahịa kacha ala ya, na nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ikike na isi echiche",
        questions: [
          { objective: "O1", q: "Kedu nke na-abụkarị nzọụkwụ MBỤ iji nweta ikike salesperson?", options: ["Ịbanye n'ọfịs sponsoring broker", "Ide ule steeti", "Inweta onye ahịa mbụ gị", "Ịgụ ihe ụlọ ọrụ na-achịkwa steeti gị chọrọ"], answer: 3, why: "Ị chọrọ ndepụta nzọụkwụ gọọmentị tupu ị kwụọ ụgwọ klas ma ọ bụ ule." },
          { objective: "O2", q: "Dishwasher e wuru n'ime, nke e jikọtara na kichin, o yikarịrị ka ọ bụ:", options: ["Personal property", "Fixture", "Easement", "Lien"], answer: 1, why: "Ihe e jikọtara na ala ma ọ bụ ụlọ bụ fixture, ọ na-esokarịkwa ụlọ ahụ." },
          { objective: "O2", q: "Ụgwọ ụtụ ala a kwụghị na-enye county nkwupụta n'elu ụlọ ahụ. Nke a bụ:", options: ["Lien", "Deed", "Fee simple", "Joint tenancy"], answer: 0, why: "Lien bụ nkwupụta ego iwu kwadoro n'elu ala ma ọ bụ ụlọ." },
          { objective: "O3", q: "Agent gwara onye na-azụ, \"Ọ ga-adị gị mma karị n'agbata obi ndị nwere okpukpe gị.\" Nke a bụ:", options: ["Ezigbo ọrụ ndị ahịa", "Blockbusting", "Steering, nke megidere iwu", "Redlining"], answer: 2, why: "Iduga ndị mmadụ ma ọ bụ isi n'ebe ụfọdụ wezuga ha n'ihi otu e chebere bụ steering." },
          { objective: "O3", q: "Kedu nke na-ABỤGHỊ otu e chebere n'okpuru Fair Housing Act gọọmentị etiti?", options: ["Nkwarụ", "Mba a mụrụ mmadụ", "Ọnọdụ ezinụlọ", "Otu egwuregwu kacha amasị gị"], answer: 3, why: "Otu asaa nke gọọmentị etiti bụ agbụrụ, agba akpụkpọ, mba a mụrụ mmadụ, okpukpe, mmekọahụ, ọnọdụ ezinụlọ na nkwarụ." }
        ]
      }
    },
    {
      name: "Isi 2: Nkwekọrịta, mgbakọ na atụmatụ ule gị",
      lessons: [
        {
          title: "Nkwekọrịta na ụzọ ruo closing",
          objectives: ["O4"],
          minutes: 6,
          goal: "Lelee onyinye ịzụta maka akụkụ nkwekọrịta ziri ezi ma tinye nzọụkwụ closing n'usoro.",
          text: [
            "Nkwekọrịta ziri ezi chọrọ: ndị iwu kwere ka ha bịanye aka (competent), onyinye na nnabata (nkwekọrịta abụọ), consideration (ihe bara uru akụkụ ọ bụla na-enye), na ebumnuche iwu kwadoro. Nkwekọrịta ịzụ ma ọ bụ ire real estate ga-abụrịrị n'ederede ka e nwee ike ịmanye ya; a na-akpọ iwu a statute of frauds.",
            "Nkwekọrịta bụ void ma ọ bụrụ na ọ dịbeghị mgbe ọ bụla ziri ezi (dịka ọmụmaatụ, ebumnuche megidere iwu). Ọ bụ voidable ma ọ bụrụ na otu akụkụ nwere ike ịkagbu ya, dịka ọmụmaatụ mgbe nwatakịrị (minor) bịanyere aka na ya. Ọtụtụ onyinye ịzụta nwere contingency, dị ka inweta mbinye ego ma ọ bụ nlele ụlọ dị mma, na earnest money, ego nkwụnye na-egosi na onye na-azụ dị njikere n'ezie.",
            "Ụzọ a na-ahụkarị bụ: onyinye, nnabata, imeghe escrow ma ọ bụ onye na-ahụ maka closing, nlele ụlọ, appraisal na nkwado mbinye ego, njegharị ikpeazụ (walk-through), na closing. Iwu gọọmentị etiti na-echebe onye na-agbazinye ego: onye na-agbazinye ego na-enye Loan Estimate n'ime ụbọchị ọrụ atọ ka e tinyechara akwụkwọ arịrịọ mbinye ego, na Closing Disclosure opekata mpe ụbọchị ọrụ atọ tupu closing, ka onye na-azụ nwee ike ịtụnyere ha."
          ],
          steps: ["Lelee na e dere aha ndị otu ahụ, na ha nwere ike ịbịanye aka.", "Lelee na e nwere onyinye doro anya na nnabata e bịanyere aka.", "Lelee ọnụ ahịa, earnest money na ihe akụkụ ọ bụla na-enye (consideration).", "Lelee na ọ dị n'ederede, na ebumnuche ya kwadoro iwu.", "Depụta contingency ndị ahụ na oge njedebe ha.", "Tinye nzọụkwụ closing n'usoro, ya na oge Loan Estimate na Closing Disclosure."],
          words: [["Consideration", "ihe bara uru akụkụ ọ bụla na-enye, dị ka ego ma ọ bụ nkwa."], ["Statute of frauds", "iwu na-ekwu na nkwekọrịta real estate ga-abụrịrị n'ederede ka e nwee ike ịmanye ya."], ["Void / voidable", "void: ọ dịbeghị mgbe ọ bụla nkwekọrịta ziri ezi; voidable: ọ ziri ezi, mana otu akụkụ nwere ike ịkagbu ya."], ["Contingency", "ọnọdụ ga-emerịrị ka azụmahịa ahụ gaa n'ihu, dị ka nkwado mbinye ego."], ["Earnest money", "ego nkwụnye onye na-azụ na-akwụ iji gosi na ọ dị njikere n'ezie."], ["Closing Disclosure", "fọm ikpeazụ onye na-agbazinye ego nwere usoro mbinye ego na ụgwọ closing."]],
          slides: [
            { title: "Akụkụ nkwekọrịta ziri ezi", bullets: ["Ndị otu nwere ike ịbịanye aka (competent)", "Onyinye na nnabata", "Consideration na ebumnuche iwu kwadoro", "N'ederede maka real estate"] },
            { title: "Void, voidable, contingency", bullets: ["Void: ọ dịbeghị mgbe ziri ezi", "Voidable: otu akụkụ nwere ike ịkagbu ya", "Contingency: ọnọdụ, dị ka nkwado mbinye ego"] },
            { title: "Ụzọ ruo closing", bullets: ["Onyinye, nnabata, escrow", "Nlele ụlọ, appraisal, nkwado mbinye ego", "Walk-through, wee closing"] },
            { title: "Fọm mbinye ego gọọmentị etiti (CFPB)", bullets: ["Loan Estimate: n'ime ụbọchị ọrụ 3 ka i tinyechara akwụkwọ", "Closing Disclosure: ụbọchị ọrụ 3+ tupu closing"] }
          ],
          sources: [SRC.cfpbLe, SRC.cfpbCd, SRC.cfpbHome],
          tryIt: "Dee obere onyinye ịzụta e chepụtara echepụta (aha, adreesị, ọnụ ahịa, earnest money, otu contingency, mbinye aka). Wee jiri nzọụkwụ isii dị n'elu lelee ya ma depụta ihe fọdụrụ. Mechie ya site n'itinye nzọụkwụ closing n'usoro.",
          youCanNow: "ilele onyinye ịzụta maka akụkụ nkwekọrịta ziri ezi ma tinye nzọụkwụ ruo closing n'usoro.",
          quickCheck: [
            { objective: "O4", q: "Onye na-azụ na onye na-ere kwekọrịtara ire ụlọ naanị n'ekwentị. N'okpuru statute of frauds, azụmahịa ahụ:", options: ["E nwere ike ịmanye ya kpam kpam", "E nwere ike ịmanye ya mgbe otu izu gachara", "N'ozuzu, e nweghị ike ịmanye ya ruo mgbe ọ dị n'ederede", "Megidere iwu"], answer: 2, why: "N'ozuzu, nkwekọrịta real estate ga-abụrịrị n'ederede ka e nwee ike ịmanye ya." },
            { objective: "O4", q: "Mgbe ole ka onye na-agbazinye ego ga-enweta Closing Disclosure?", options: ["Opekata mpe ụbọchị ọrụ atọ tupu closing", "N'ụbọchị closing", "N'ime otu ọnwa ka closing gachara", "Tupu e nye onyinye"], answer: 0, why: "CFPB kwuru na onye na-agbazinye ego na-enye Closing Disclosure opekata mpe ụbọchị ọrụ atọ tupu closing." }
          ]
        },
        {
          title: "Mgbakọ ule real estate",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ commission, loan-to-value, ụtụ ala, proration na mbara ala.",
          text: [
            "Maka omume naanị: nọmba niile dị ebe a bụ nke e chepụtara echepụta. Commission: ọnụ ahịa ire mụbaa site na rate. Ire $300,000 na 6% bụ $18,000. Ọ bụrụ na ọfịs listing nwetara ọkara, nke ahụ bụ $9,000; ọ bụrụ na split agent ahụ bụ 60%, agent ahụ ga-enweta $5,400.",
            "Loan-to-value (LTV) bụ mbinye ego kewaa site n'uru ụlọ. Mbinye ego $240,000 n'ụlọ $300,000 bụ 0.80, ya bụ 80%. Ụtụ ala bụ assessed value mụbaa site na rate ụtụ: $200,000 mụbaa site na 1.5% bụ $3,000 kwa afọ, ya bụ $250 kwa ọnwa.",
            "Proration na-ekewa ụgwọ site n'ụbọchị. Ọ bụrụ na ụtụ afọ bụ $3,650, afọ ahụ nwekwa ụbọchị 365, nke ahụ bụ $10 kwa ụbọchị; ọ bụrụ na onye na-ere nwere ụlọ ahụ ụbọchị 120, onye na-azụ ga-akwụkwa ụgwọ ahụ emesia, onye na-ere ji onye na-azụ $1,200. Mbara ala (area): ogologo mụbaa site n'obosara. Ala dị ụkwụ 50 n'ụkwụ 120 bụ square feet 6,000. Otu acre bụ square feet 43,560. Lelee ma ule gị na-eji afọ ụbọchị 360 ka ọ bụ 365."
          ],
          steps: ["Gụọ ajụjụ ahụ ma dọọ ahịrị n'okpuru ihe ọ na-ajụ.", "Dee usoro (part = whole times rate).", "Gbanwee pasentị ka ọ bụrụ desimal (6% = 0.06).", "Mee otu nzọụkwụ n'otu oge n'akwụkwọ.", "Jụọ: azịza a ọ nwere isi?"],
          words: [["Commission", "ego a na-akwụ maka ire ihe, nke na-abụkarị pasentị nke ọnụ ahịa ire."], ["Split", "otu e si ekekọrịta commission n'etiti ọfịs ma ọ bụ n'etiti broker na agent."], ["Loan-to-value (LTV)", "mbinye ego kewaa site n'uru ụlọ, dị ka pasentị."], ["Assessed value", "uru gọọmentị obodo na-eji gbakọọ ụtụ ala."], ["Proration", "ikewa ụgwọ n'etiti onye na-azụ na onye na-ere site n'ụbọchị onye ọ bụla nwere ụlọ ahụ."]],
          slides: [
            { title: "Commission", bullets: ["Ọnụ ahịa ire x rate", "$300,000 x 6% = $18,000", "Ọkara nye ọfịs listing = $9,000; split 60% = $5,400"] },
            { title: "LTV na ụtụ ala", bullets: ["LTV = mbinye ego / uru: $240,000 / $300,000 = 80%", "Ụtụ = assessed value x rate: $200,000 x 1.5% = $3,000"] },
            { title: "Proration na mbara ala", bullets: ["$3,650 / 365 = $10 kwa ụbọchị; ụbọchị 120 = $1,200", "50 ft x 120 ft = 6,000 sq ft", "1 acre = 43,560 sq ft"] },
            { title: "Usoro", bullets: ["Dọọ ahịrị n'okpuru ajụjụ", "Dee usoro, jiri desimal", "Lelee na azịza ahụ nwere isi"] }
          ],
          tryIt: "Maka omume naanị. Gbakọọ n'akwụkwọ site na kalkuleta: (1) commission 5% na $250,000; (2) LTV nke mbinye ego $180,000 n'ụlọ $200,000; (3) ụtụ afọ na assessed value $150,000 na 2%; (4) òkè onye na-ere n'ụtụ afọ $1,825 maka ụbọchị 73 (afọ ụbọchị 365); (5) square feet n'ala dị ụkwụ 80 n'ụkwụ 100. Azịza: $12,500; 90%; $3,000; $365; 8,000.",
          youCanNow: "ịgbakọ mgbakọ a na-ahụkarị n'ule real estate ma gosi otu i si gbakọọ.",
          quickCheck: [
            { objective: "O5", q: "Maka omume naanị: gịnị bụ LTV nke mbinye ego $270,000 n'ụlọ $300,000?", options: ["80%", "85%", "111%", "90%"], answer: 3, why: "$270,000 kewaa site na $300,000 bụ 0.90, ya bụ 90%." },
            { objective: "O5", q: "Maka omume naanị: ala dị ụkwụ 100 n'ụkwụ 150. Square feet ole ka ọ bụ?", options: ["250", "15,000", "1,500", "43,560"], answer: 1, why: "Mbara ala bụ ogologo mụbaa site n'obosara: 100 mụbaa site na 150 bụ square feet 15,000." }
          ]
        },
        {
          title: "Atụmatụ ọmụmụ na ule gị",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Dee atụmatụ ọmụmụ na ule nwere ụbọchị site na ndepụta isiokwu ule steeti gị.",
          text: [
            "Steeti gị ma ọ bụ ụlọ ọrụ na-enye ule ya na-ebipụta candidate handbook. Ọ na-enwekarị ndepụta isiokwu ule (exam content outline: isiokwu na ọnụ ọgụgụ ajụjụ na nke ọ bụla), iwu ụbọchị ule, ID ị ga-ebute na otu esi ahazi oge ule. Budata ya site na saịtị gọọmentị, ọ bụghị site na mbipụta onye ọzọ tinyere.",
            "Gbanwee ndepụta ahụ ka ọ bụrụ atụmatụ. Depụta isiokwu ọ bụla, nye onwe gị akara 1 ruo 3 na nke ọ bụla, ma kaa atọ kacha sie gị ike. Tinye ụbọchị ndị dị mkpa na kalenda site n'ịgụ azụ site n'ụbọchị ule i chọrọ: mechaa klas, tinye akwụkwọ, nye mkpịsị aka, hazie oge ule. Wee debe oge ọmụmụ dị mkpụmkpụ kwa izu, ya na ajụjụ omume na mgbakọ kwa izu.",
            "Ule omume na-enyere aka kachasị mgbe ị na-enyochagharị azịza ọ bụla ezighi ezi ma dee ihe mere azịza ziri ezi ji ziri ezi. Kpachara anya maka saịtị ọ bụla na-ekwe nkwa \"guaranteed pass\" ma ọ bụ na-ere ezi ajụjụ ule; nke ahụ bụ aghụghọ ma ọ bụ ịgha ụgha n'ule, steeti nwekwara ike ịjụ inye gị ikike n'ihi ya."
          ],
          steps: ["Budata candidate handbook steeti gị site na saịtị gọọmentị.", "Depụta isiokwu dị na ndepụta isiokwu ule.", "Nye onwe gị akara 1 ruo 3 n'isiokwu ọ bụla; kaa atọ kacha sie gị ike.", "Họrọ ụbọchị ule i chọrọ ma gụọ azụ ruo nzọụkwụ ọ bụla.", "Hazie oge ọmụmụ kwa izu nwere ajụjụ omume na mgbakọ.", "Nyochagharịa azịza ọ bụla ezighi ezi ma dee ihe mere azịza ziri ezi ji ziri ezi."],
          words: [["Candidate handbook", "ntuziaka gọọmentị maka ule: isiokwu, iwu, ID na ịhazi oge."], ["Ndepụta isiokwu ule (exam content outline)", "ndepụta isiokwu dị n'ule na otu nke ọ bụla si dị mkpa."], ["Ụbọchị ebumnuche (target date)", "ụbọchị ị chọrọ ide ule; ị na-eme atụmatụ site n'ịgụ azụ site na ya."]],
          slides: [
            { title: "Malite site na handbook gọọmentị", bullets: ["Ndepụta isiokwu ule", "Iwu ụbọchị ule na ID", "Otu esi ahazi oge ule"] },
            { title: "Mee atụmatụ ahụ", bullets: ["Nye isiokwu ọ bụla akara 1 ruo 3", "Kaa atọ kacha sie gị ike", "Gụọ azụ site n'ụbọchị ule i chọrọ"] },
            { title: "Mụọ ihe n'ụzọ amamihe", bullets: ["Ajụjụ omume na mgbakọ kwa izu", "Nyochagharịa azịza ọ bụla ezighi ezi", "Ọ dịghị \"guaranteed pass\" ma ọ bụ ajụjụ e zuru ezu"] }
          ],
          sources: [SRC.arello, SRC.txTrec, SRC.caDre],
          tryIt: "Ọrụ ikpeazụ: mee Atụmatụ Ọmụmụ na Ule Ikike Real Estate gị: nzọụkwụ steeti gị nwere ụbọchị na peeji gọọmentị, isiokwu ndepụta ahụ ebe i kara atọ kacha sie gị ike, peeji iwu gbasara agency, fair housing na nkwekọrịta, ajụjụ mgbakọ ise i gbakọrọ, na usoro kwa izu ruo ụbọchị ule gị.",
          youCanNow: "ịgbanwe ndepụta isiokwu ule steeti gị ka ọ bụrụ atụmatụ ọmụmụ na ule nwere ụbọchị ma gbasoo ya.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ndepụta isiokwu atụmatụ ọmụmụ gị kwesịrị isi?", options: ["Ihe e dere na soshal midia", "Ndepụta isiokwu ule gọọmentị steeti gị", "Isiokwu ọ bụla kacha amasị gị", "Saịtị na-ere ezi ajụjụ ule"], answer: 1, why: "Ndepụta isiokwu gọọmentị na-egosi ihe ule ahụ na-anwale n'ezie." },
            { objective: "O6", q: "Ị na-emehie ajụjụ proration mgbe niile n'ule omume. Kedu atụmatụ kacha mma?", options: ["Hapụ proration; ọ bụ naanị ajụjụ ole na ole", "Dee ule ahụ ngwa ngwa", "Kaa ya dị ka isiokwu na-esi ike ma tinye omume mgbakọ kwa izu", "Zụta ngwugwu \"guaranteed pass\""], answer: 2, why: "Ịka isiokwu na-esi ike na ime ha omume kwa izu na-emechi oghere ahụ tupu ụbọchị ule." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nkwekọrịta, mgbakọ na atụmatụ ule gị",
        questions: [
          { objective: "O4", q: "Kedu nke na-ABỤGHỊ otu n'ime akụkụ nkwekọrịta ziri ezi?", options: ["Onyinye na nnabata", "Consideration", "Stampụ notary na peeji ọ bụla", "Ebumnuche iwu kwadoro"], answer: 2, why: "Nkwekọrịta ziri ezi chọrọ ndị otu nwere ike ịbịanye aka, nkwekọrịta abụọ, consideration na ebumnuche iwu kwadoro; stampụ na peeji ọ bụla esoghị n'ime ha." },
          { objective: "O4", q: "Onyinye ịzụta kwuru na azụmahịa ahụ ga-aga n'ihu naanị ma ọ bụrụ na onye na-azụ nwetara mbinye ego. Nke a bụ:", options: ["Contingency", "Lien", "Easement", "Commission"], answer: 0, why: "Contingency bụ ọnọdụ ga-emerịrị ka azụmahịa ahụ gaa n'ihu." },
          { objective: "O5", q: "Maka omume naanị: ire $400,000 na commission 5% bụ:", options: ["$2,000", "$4,000", "$200,000", "$20,000"], answer: 3, why: "$400,000 mụbaa site na 0.05 bụ $20,000." },
          { objective: "O5", q: "Maka omume naanị: assessed value $250,000 na rate ụtụ 2% na-enye ụtụ afọ nke:", options: ["$5,000", "$500", "$50,000", "$2,500"], answer: 0, why: "$250,000 mụbaa site na 0.02 bụ $5,000." },
          { objective: "O6", q: "Kedu ụzọ kacha mma iji ule omume?", options: ["Buru naanị azịza n'isi", "Nyochagharịa azịza ọ bụla ezighi ezi ma dee ihe mere nke ziri ezi ji ziri ezi", "Dee ya otu ugboro wee kwụsị", "Kesaa ajụjụ ndị ahụ n'ịntanetị"], answer: 1, why: "Inyocha ihe mere azịza ọ bụla ji ziri ezi na-ewulite nghọta ezi ule ahụ na-anwale." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Ule Ikike Real Estate (Ala na Ụlọ)",
    questions: [
      { objective: "O1", q: "Onye na-enye ikike salesperson real estate na US?", options: ["Gọọmentị etiti", "Ụlọ ọrụ na-achịkwa real estate na steeti ọ bụla", "National Association of Realtors", "Ụlọ akụ dị n'obodo gị"], answer: 1, why: "Ikike na-esite na steeti, site n'aka ụlọ ọrụ na-achịkwa real estate na steeti ahụ." },
      { objective: "O1", q: "Kedu nzọụkwụ na-abịa n'ọtụtụ steeti tupu ị nwee ike ịrụ ọrụ dị ka salesperson?", options: ["Inwe ụlọ", "Ire ụlọ ise", "Ịgafe ule steeti na background check", "Ịghọ broker"], answer: 2, why: "Ọtụtụ steeti na-achọ ule na background check, wee rụọ ọrụ n'okpuru broker." },
      { objective: "O1", q: "Salesperson ga-arụ ọrụ n'okpuru:", options: ["Broker nwere ikike", "Ụlọ akụ", "Onye na-enyocha ụlọ", "Ụlọ ọrụ title"], answer: 0, why: "Broker nwere ikike na-elekọta ndị salesperson." },
      { objective: "O2", q: "Kedu nke bụ personal property?", options: ["Furnace e wuru n'ime", "Osisi dị n'ogige", "Ala ahụ", "Sofa dị n'ime ọnụ ụlọ obibi"], answer: 3, why: "Personal property bụ ihe a na-ebugharị; e jikọtaghị sofa ahụ." },
      { objective: "O2", q: "Ụdị inwe ihe kacha zuo oke bụ:", options: ["Easement", "Fee simple", "Lien", "Lease"], answer: 1, why: "Fee simple na-enye onye nwe ya ngwugwu ikike kacha zuo oke." },
      { objective: "O2", q: "Kedu ụzọ ịkọwa ala na-eji maapụ e debere nke subdivision?", options: ["Metes and bounds", "Fee simple", "Lot and block", "Proration"], answer: 2, why: "Lot and block na-ezo aka n'ala dị na maapụ subdivision e debere." },
      { objective: "O2", q: "Ndị nwe ihe ọnụ, ndị òkè ha anaghị agafe onwe ha ozugbo mgbe ha nwụrụ, na-ejide title dị ka:", options: ["Tenants in common", "Joint tenants", "Ndị broker", "Ndị nwe lien"], answer: 0, why: "Tenancy in common enweghị right of survivorship." },
      { objective: "O3", q: "Kedu nke bụ otu n'ime ọrụ fiduciary agent nye onye ahịa ya?", options: ["Ịgwa akụkụ nke ọzọ ọnụ ahịa kacha ala onye ahịa", "Loyalty (iguzosi ike)", "Ịhọrọrọ onye ahịa onye ga-agbazinye ya ego", "Ileghara ntụziaka iwu kwadoro nke onye ahịa anya"], answer: 1, why: "Loyalty bụ isi ọrụ fiduciary (OLDCAR)." },
      { objective: "O3", q: "Ịgwa ndị nwe ụlọ ka ha ree ngwa ngwa n'ihi na otu ndị na-abata a na-akpọ:", options: ["Steering", "Redlining", "Dual agency", "Blockbusting"], answer: 3, why: "Blockbusting na-akpali ndị nwe ụlọ ire site n'ịkpali egwu gbasara otu ndị na-abata." },
      { objective: "O3", q: "Ịjụ inye mbinye ego n'ebe ụfọdụ n'ihi ndị bi ebe ahụ a na-akpọ:", options: ["Redlining", "Proration", "Steering", "Escrow"], answer: 0, why: "Redlining bụ ịjụ inye mbinye ego ma ọ bụ inshọransị n'ebe ụfọdụ; ọ megidere iwu." },
      { objective: "O3", q: "Onye na-azụ na-eji wheelchair rịọrọ ịhụ otu ụlọ. N'okpuru Fair Housing Act, ị:", options: ["Gosi naanị ụlọ nwere ramp n'ajụghị ya", "Jụ n'ihi steepụ", "Gosi ya ụlọ ahụ n'otu ọnọdụ ahụ i ji egosi onye ọ bụla", "Rịọ akwụkwọ dọkịta"], answer: 2, why: "Nkwarụ bụ otu e chebere, ya mere onye na-azụ ahụ na-enweta otu nsọpụrụ dịka ndị ọzọ." },
      { objective: "O4", q: "Nkwekọrịta nwatakịrị (minor) bịanyere aka, nke nwatakịrị ahụ nwere ike ịkagbu, bụ:", options: ["Void", "Voidable", "E nwere ike ịmanye ya kpam kpam", "Lien"], answer: 1, why: "Voidable pụtara na ọ ziri ezi, mana otu akụkụ nwere ike ịkagbu ya." },
      { objective: "O4", q: "N'ime ụbọchị ọrụ ole ka e tinyechara akwụkwọ arịrịọ mbinye ego ka onye na-agbazinye ego ga-enye Loan Estimate?", options: ["Atọ", "Iri", "Iri atọ", "Otu"], answer: 0, why: "CFPB kwuru na Loan Estimate na-abịa n'ime ụbọchị ọrụ atọ ka e tinyechara akwụkwọ arịrịọ." },
      { objective: "O4", q: "Earnest money bụ:", options: ["Commission agent", "Ụtụ ala kwa afọ", "Lien n'elu ụlọ ahụ", "Ego nkwụnye na-egosi na onye na-azụ dị njikere n'ezie"], answer: 3, why: "Earnest money bụ ego nkwụnye ezi obi nke onye na-azụ." },
      { objective: "O5", q: "Maka omume naanị: agent nwetara split 50% nke commission $9,000. Agent ahụ na-enweta:", options: ["$900", "$9,000", "$4,500", "$18,000"], answer: 2, why: "$9,000 mụbaa site na 0.50 bụ $4,500." },
      { objective: "O5", q: "Maka omume naanị: mbinye ego $160,000 n'ụlọ $200,000 nwere LTV nke:", options: ["60%", "125%", "40%", "80%"], answer: 3, why: "$160,000 kewaa site na $200,000 bụ 0.80, ya bụ 80%." },
      { objective: "O5", q: "Maka omume naanị: ụtụ afọ bụ $3,650 (afọ ụbọchị 365). Onye na-ere nwere ụlọ ahụ ụbọchị 30. Òkè onye na-ere bụ:", options: ["$300", "$365", "$100", "$3,000"], answer: 0, why: "$3,650 kewaa site na 365 bụ $10 kwa ụbọchị; ụbọchị 30 bụ $300." },
      { objective: "O5", q: "Square feet ole dị n'otu acre?", options: ["5,280", "43,560", "10,000", "640"], answer: 1, why: "Otu acre bụ square feet 43,560." },
      { objective: "O6", q: "Candidate handbook steeti gị na-agwakarị gị:", options: ["Ezi ajụjụ dị n'ule ahụ", "Ụlọ ị ga-azụta", "Ndepụta isiokwu ule na iwu ụbọchị ule", "Ụgwọ ọnwa gị n'ọdịnihu"], answer: 2, why: "Handbook ahụ na-enye ndepụta isiokwu, iwu, ID a chọrọ na ịhazi oge." },
      { objective: "O6", q: "Ezigbo atụmatụ ọmụmụ na-amalite site na:", options: ["Ịhọrọ ụbọchị ule i chọrọ ma gụọ azụ ruo nzọụkwụ ọ bụla", "Ịzụta ihe ọmụmụ kacha dị oke ọnụ", "Ịmụ naanị isiokwu kacha amasị gị", "Ichere ruo mgbe ị chere na ị dị njikere"], answer: 0, why: "Ime atụmatụ site n'ịgụ azụ site n'ụbọchị ebumnuche na-etinye nzọụkwụ na oge ọmụmụ ọ bụla na kalenda." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 7, 8, 12, 14, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Nzọụkwụ gọọmentị", objective: "O1", notYet: "Nzọụkwụ fọdụrụ, ha anọghị n'usoro, ma ọ bụ e depụtara ha site na saịtị na-abụghị nke gọọmentị.", meets: "E depụtara nzọụkwụ ọ bụla dị na peeji ụlọ ọrụ na-achịkwa steeti n'usoro, ya na adreesị peeji ahụ na ụbọchị e lere ya.", exceeds: "E dekwara ego na akwụkwọ maka nzọụkwụ ọ bụla kpọmkwem otu peeji gọọmentị si kwuo ya." },
      { name: "Isi okwu", objective: "O2", notYet: "Ọtụtụ okwu gbasara ala ma ọ bụ inwe ihe ezighi ezi ma ọ bụ adịghị na peeji iwu ahụ.", meets: "Peeji iwu ahụ na-akọwa isi okwu gbasara ala na inwe ihe nke ọma n'okwu dị mfe.", exceeds: "Okwu ọ bụla nwere ihe atụ sitere na ndụ nke onye na-amụ ihe chepụtara." },
      { name: "Agency na fair housing", objective: "O3", notYet: "Ọrụ fiduciary ma ọ bụ otu asaa e chebere n'iwu gọọmentị etiti adịghị ma ọ bụ ezighi ezi.", meets: "Ọ na-edepụta ọrụ ndị ahụ na otu asaa niile nke gọọmentị etiti, tinyere steering, blockbusting na redlining.", exceeds: "Ọ na-agbakwunye otu ndị ọzọ e chebere na steeti ma ọ bụ obodo onye na-amụ ihe, ya na ebe o si nweta ya." },
      { name: "Nkwekọrịta na closing", objective: "O4", notYet: "Akụkụ nkwekọrịta ma ọ bụ nzọụkwụ closing adịghị, ma ọ bụ oge Loan Estimate na Closing Disclosure ezighi ezi.", meets: "Ọ na-edepụta akụkụ ọ bụla nke nkwekọrịta ziri ezi na nzọụkwụ closing n'usoro, ya na oge ngosipụta ziri ezi.", exceeds: "Ọ na-agbakwunye contingency na oge njedebe ha site n'ihe atụ onyinye." },
      { name: "Mgbakọ", objective: "O5", notYet: "Ihe na-erughị 4 n'ime ajụjụ 5 ziri ezi, ma ọ bụ e gosighi otu e si gbakọọ.", meets: "Opekata mpe 4 n'ime ajụjụ 5 ziri ezi, a gosikwara otu e si gbakọọ.", exceeds: "5 niile ziri ezi, tinyere otu ajụjụ ọzọ onye na-amụ ihe dere ma gbakọọ." },
      { name: "Atụmatụ nwere ụbọchị", objective: "O6", notYet: "O nweghị ụbọchị ebumnuche, ma ọ bụ isiokwu esiteghị na ndepụta isiokwu gọọmentị.", meets: "Ọ na-ekpuchi isiokwu ọ bụla dị na ndepụta, kaa atọ kacha sie ike, ma nwee oge ọmụmụ kwa izu ruo ụbọchị ebumnuche.", exceeds: "O nwekwara ụbọchị inyochagharị ule omume na ụbọchị ule ndabere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mechara klas pre-license steeti kwadoro n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe gafere ule real estate steeti, na n'ugboro ole (ha n'onwe ha kọrọ)",
      "Ndị na-amụ ihe nwetara ikike ma na-arụ ọrụ n'okpuru sponsoring broker n'ime ọnwa 12"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa iji gụọ peeji gọọmentị nke ụlọ ọrụ na-achịkwa steeti na candidate handbook",
      "Akwụkwọ, mkpịsị ode na kalkuleta dị mfe",
      "Kalenda (n'akwụkwọ ma ọ bụ n'ekwentị) maka atụmatụ ọmụmụ na ule",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ bụrụ na otu ahụ si n'otu steeti, meghee peeji ụlọ ọrụ na-achịkwa steeti ahụ ọnụ na Nkuzi 1 ma jiri candidate handbook ya na Nkuzi 6.",
      "Mee ka o doo anya na ihe ọmụmụ a na-akwado ndị na-amụ ihe; ọ naghị anọchi klas pre-license steeti kwadoro, ọ naghịkwa enye ikike.",
      "Mee nkuzi mgbakọ n'abụọ n'abụọ na bọọdụ: otu na-agbakọ, nke ọzọ na-elele nzọụkwụ ya.",
      "Jiri ime ihe dị ka ihe nkiri (role play) maka ọnọdụ fair housing; kwụsị ma kpọọ aha iwu ahụ oge ọ bụla.",
      "Enyela ndụmọdụ gbasara ịzụ ala, itinye ego, mbinye ego ma ọ bụ ụtụ isi; duga ndị na-amụ ihe n'isi iyi gọọmentị na ndị ọkachamara nwere ikike.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

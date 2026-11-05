"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-government-contracts.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-government-contracts-ig",
  lang: "ig",
  translationOf: "smallbiz-government-contracts",
  category: "Small Business",
  name: "Inweta Nkwekọrịta Ọrụ Gọọmentị",
  skills: "Ịdebanye aha na SAM.gov, Ịhọrọ koodu NAICS, Iji asambodo SBA na California, Ịchọta ohere nkwekọrịta, Ịgụ solicitation, Ide capability statement",
  outcome: "idebanye aha azụmahịa gị ka i nwee ike ire ihe nye gọọmentị, ịhọrọ koodu NAICS gị, ịchọta ohere nkwekọrịta dabara gị, ịgụ solicitation iji kpebie ma ị ga-etinye arịrịọ (bid), na ide capability statement nke otu peeji.",
  about: [
    "Gọọmentị etiti (federal), nke steeti na nke obodo na-azụ ihe fọrọ nke nta ka ọ bụrụ ihe niile: ihicha ụlọ, nri maka mmemme, iwu ụlọ, ilekọta ogige, mbipụta akwụkwọ, IT, ọzụzụ, ibu ngwaahịa n'ụgbọala na ndị ọzọ. E debere otu akụkụ n'ime ihe ndị a ha na-azụ maka obere azụmahịa, ụfọdụ kwa maka obere azụmahịa nke ụmụ nwanyị nwe, nke ndị agha mbụ (veterans) nwe na ndị ọzọ nwere asambodo.",
    "Ihe ọmụmụ a na-akuzi gị nzọụkwụ ndị a n'usoro: ịdebanye aha na SAM.gov na inweta Unique Entity ID gị, ịhọrọ koodu NAICS, ịghọta asambodo SBA na asambodo Small Business na DVBE nke California, ịchọta ohere, ịgụ solicitation, na ide capability statement ị nwere ike iziga ndị na-azụ ihe.",
    "Iwu, oke na weebụsaịtị na-agbanwe. Nkuzi ọ bụla na-egosi peeji gọọmentị ị ga-elele. Enyemaka n'efu dị site n'aka APEX Accelerators, ọfịs SBA nke mpaghara na Small Business Development Centers; ọ dịghị mkpa ka ị kwụọ onye ọ bụla ụgwọ iji debanye aha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme ozugbo. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee capability statement nke otu peeji maka azụmahịa gị nwere akụkụ anọ: ihe ị kacha mara ime (core competencies), ọrụ i merela na mbụ (past performance), ihe mere gị iche, na ozi ụlọ ọrụ (aha iwu, UEI, koodu NAICS, asambodo, ozi kọntaktị). Wee chọta otu ezi ohere na SAM.gov ma ọ bụ Cal eProcure dabara otu koodu NAICS dị na statement gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ọtụtụ n'ime ha bụ ndị nwe azụmahịa si n'obodo pere mpe (minority), ụmụ nwanyị na ndị agha mbụ na California, ndị na-ere ọrụ ma ọ bụ ngwaahịa dị ka ihicha ụlọ, nri maka mmemme, iwu ụlọ, ilekọta ogige, mbipụta akwụkwọ, IT, ọzụzụ ma ọ bụ ibu ngwaahịa, ma chọọ ire ihe nye gọọmentị etiti, nke steeti na nke obodo.",
    startingPoint: "Ha na-agba azụmahịa na-arụ ọrụ nwere ndị ahịa, ma mara ọrụ ha nke ọma. Ọtụtụ edebanyebeghị aha na SAM.gov mgbe ọ bụla, achọbeghị koodu NAICS, ma ọ bụ gụọ solicitation gọọmentị.",
    gap: "Ndị na-azụ ihe maka gọọmentị na-emefu ọtụtụ ego n'obere azụmahịa na azụmahịa nwere asambodo, mana nzọụkwụ ndebanye aha, koodu na solicitation ogologo na-egbochi ọtụtụ ndị nwe azụmahịa, ụlọ ọrụ aghụghọ na-anakwa ụgwọ maka ndebanye aha bụ n'efu. Ndị na-amụ ihe kwesịrị idebanye aha n'onwe ha n'efu, ịchọta bid dabara ha, ikpebi mgbe ha ga-etinye bid, na iji capability statement gosi azụmahịa ha.",
    constraints: [
      "Iwu, size standards na oke asambodo na-agbanwe; ndị na-amụ ihe na-elele SAM.gov, SBA na California Department of General Services",
      "Nzuzo: ozi ụlọ akụ na EIN na-aba naanị na SAM.gov, ọ bụghị mgbe ọ bụla n'ime ngwa AI ma ọ bụ email",
      "Ihe egwu aghụghọ: ihe e nyere dị ka nke gọọmentị iji debanye aha ma ọ bụ melite ya maka ụgwọ",
      "Oge: ihe dị ka nkeji 60 n'ozuzu, gbakwunye oge maka ezi ndebanye aha",
      "Okwu dị mfe maka ndị nwe azụmahịa bụ ndị ọhụrụ n'ire ihe nye gọọmentị"
    ],
    prerequisites: "Azụmahịa e debanyere aha nwere aha iwu, adreesị na EIN ma ọ bụ nọmba ụtụ isi (tax ID)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị aha iwu azụmahịa gị, adreesị, EIN na ozi ụlọ akụ", action: "idebanye aha azụmahịa gị na SAM.gov n'onwe gị ma nweta UEI", standard: "n'efu, na-emelite ya kwa ụbọchị 365 ma na-eleghara ihe e nyere maka ụgwọ ndebanye aha anya" },
    { id: "O2", condition: "Site n'iji peeji NAICS nke Census na SBA Size Standards Tool", action: "ịhọrọ koodu NAICS bụ isi ma lelee ma azụmahịa gị ọ bụ obere maka ya", standard: "ka koodu ahụ dabara ọrụ gị bụ isi" },
    { id: "O3", condition: "Mgbe e nyere gị iwu ndị bụ isi maka asambodo SBA na California", action: "ịmata asambodo ndị azụmahịa gị nwere ike iru eru maka ha na ebe a ga-etinye arịrịọ", standard: "na-akpọ aha saịtị ziri ezi maka nke ọ bụla" },
    { id: "O4", condition: "Site n'iji SAM.gov na Cal eProcure", action: "ịchọta ma chekwaa nchọ maka ohere dabara koodu NAICS gị", standard: "ka ohere ọhụrụ dabara gị bịa n'email gị" },
    { id: "O5", condition: "Mgbe e nyere gị solicitation", action: "ịchọta statement of work ya, ntụziaka, evaluation criteria na ụbọchị njedebe, ma kpebie ma ị ga-etinye bid", standard: "na-aza ajụjụ bid ma ọ bụ no-bid niile" },
    { id: "O6", condition: "Maka ndị na-azụ ihe maka gọọmentị na prime contractors", action: "ide capability statement nke otu peeji nwere core competencies, past performance, ihe mere gị iche na ozi ụlọ ọrụ", standard: "n'enweghị nọmba nzuzo dị ka ozi ụlọ akụ ma ọ bụ EIN" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado ire ihe nye gọọmentị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịdebanye aha na SAM.gov na inweta UEI",
          minutes: 6,
          goal: "Chịkọta ihe ị chọrọ ma debanye aha azụmahịa gị na SAM.gov n'onwe gị, n'efu.",
          text: [
            "SAM.gov (System for Award Management) bụ saịtị gọọmentị US e ji eme azụmahịa na ụlọ ọrụ gọọmentị etiti (federal agencies). Iji tinye bid ma nweta nkwekọrịta federal, azụmahịa gị ga-edebanye aha n'ebe ahụ. Ndebanye aha na-enye gị Unique Entity ID (UEI), koodu nwere mkpụrụ 12 nke mkpụrụedemede na nọmba na-egosi onye azụmahịa gị bụ.",
            "Ị nwere ike ịrịọ naanị UEI n'emeghị ndebanye aha zuru ezu, mana jiri naanị UEI ị pụghị itinye arịrịọ ozugbo maka onyinye (awards) federal. Maka nkwekọrịta, mezuo ndebanye aha zuru ezu. Ị ga-emelite ya kwa ụbọchị 365 ka ọ nọgide na-arụ ọrụ.",
            "Ịdebanye aha na SAM.gov bụ n'efu. Ụfọdụ ụlọ ọrụ na-ezipu email ma ọ bụ akwụkwọ ozi dị ka nke gọọmentị, na-ekwu na ha ga-edebanye aha gị ma ọ bụ melite ya maka ụgwọ, ma ọ bụ na-adọ gị aka na ntị na ndebanye aha gị na-achọ ịgwụ. Ọ dịghị mgbe ị ga-akwụ ha ụgwọ. Debanye aha naanị na sam.gov, ma nweta enyemaka n'efu site n'aka APEX Accelerator ma ọ bụrụ na ihe agbachie gị.",
            "Tupu ịmalite, chịkọta aha iwu azụmahịa gị na adreesị ebe ọ dị otu IRS si dee ha, Employer Identification Number (EIN) gị ma ọ bụ tax ID, na ozi ụlọ akụ maka ịnata ụgwọ. Dee ihe ndị a naanị na SAM.gov n'onwe ya, ọ bụghị mgbe ọ bụla n'ime ngwa AI ma ọ bụ email."
          ],
          steps: ["Chịkọta aha iwu azụmahịa gị, adreesị ebe ọ dị, EIN na ozi ụlọ akụ.", "Gaa na sam.gov ma mepụta login.", "Họrọ idebanye aha ụlọ ọrụ gị (entity), ọ bụghị naanị inweta UEI.", "Zaa akụkụ ọ bụla; aha azụmahịa na adreesị ga-adaba na ndekọ IRS.", "Dee UEI gị na ụbọchị ndebanye aha gị ga-agwụ.", "Debe ncheta ka ị melite ya tupu ụbọchị 365."],
          words: [["SAM.gov", "System for Award Management, saịtị federal ebe azụmahịa na-edebanye aha iji ree ihe nye gọọmentị."], ["UEI", "Unique Entity ID: koodu nwere mkpụrụ 12 na-egosi gọọmentị onye azụmahịa gị bụ."], ["EIN", "Employer Identification Number: nọmba ụtụ isi azụmahịa gị site n'IRS."], ["APEX Accelerator", "ebe ndụmọdụ n'efu na-enyere azụmahịa aka ire ihe nye gọọmentị."]],
          slides: [
            { title: "SAM.gov bụ ọnụ ụzọ mbata", bullets: ["Debanye aha iji tinye bid na nkwekọrịta federal", "Ị na-enweta Unique Entity ID nwere mkpụrụ 12", "Melite ya kwa ụbọchị 365"] },
            { title: "Naanị UEI na ndebanye aha zuru ezu", bullets: ["Naanị UEI: ị pụghị itinye arịrịọ maka awards", "Ndebanye aha zuru ezu: ọ dị mkpa maka nkwekọrịta"] },
            { title: "Ọ bụ n'efu", bullets: ["Leghara ihe e nyere maka ụgwọ ndebanye aha anya", "Debanye aha naanị na sam.gov", "Enyemaka n'efu: APEX Accelerators"] },
            { title: "Nwee ihe ndị a njikere", bullets: ["Aha iwu na adreesị dabara na nke IRS", "EIN ma ọ bụ tax ID na ozi ụlọ akụ", "Dee ha naanị na SAM.gov"] }
          ],
          sources: [
            { name: "SAM.gov: Ndebanye aha ụlọ ọrụ (Entity registration)", url: "https://sam.gov/content/entity-registration" },
            { name: "SBA: Ihe ndị bụ isi achọrọ maka nkwekọrịta gọọmentị", url: "https://www.sba.gov/federal-contracting/contracting-guide/basic-requirements" }
          ],
          tryIt: "Mee ndepụta nlele ndebanye aha SAM.gov maka azụmahịa gị: aha iwu, adreesị ebe ọ dị, EIN, ozi ụlọ akụ, onye a ga-akpọtụrụ. Kaa akara n'ihe ndị i nweburu. Ọ bụrụ na i debanyelarị aha, chọta ụbọchị ọ ga-agwụ ma debe ncheta maka imelite ya.",
          youCanNow: "ịkwado ma mezuo ndebanye aha SAM.gov n'efu, ịkọwa ihe UEI bụ, na ịhụ aghụghọ ndị na-anakwa ụgwọ ndebanye aha.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka aha iwu na adreesị gị na SAM.gov ga-adaba na ya?", options: ["Ihe IRS nwere maka azụmahịa gị", "Peeji soshal midia gị", "Akara (logo) gị", "Adreesị ozi nke gị n'onwe gị"], answer: 0, why: "Aha iwu na adreesị gị ga-adaba kpọmkwem na nke IRS." },
            { objective: "O1", q: "Otu nzọụkwụ ndebanye aha SAM.gov agbachiela gị. Ebee ka ị ga-enweta enyemaka n'efu?", options: ["Ụlọ ọrụ zitere gị email na ha ga-enyere aka maka $300", "APEX Accelerator", "Ngwa AI, site n'itinye ozi ụlọ akụ gị n'ime ya", "Ọ dịghị ebe; ị ga-akwụ mmadụ ụgwọ"], answer: 1, why: "APEX Accelerators na-enye enyemaka n'efu; ọ dịghị mgbe ị ga-akwụ ụgwọ iji debanye aha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhọrọ koodu NAICS na ịlele nha azụmahịa gị",
          minutes: 5,
          goal: "Họrọ koodu NAICS bụ isi ma lelee ma azụmahịa gị ọ bụ obere maka ya.",
          text: [
            "Koodu NAICS (North American Industry Classification System) na-ekewa azụmahịa site n'ihe ha na-ere. A na-enye nkwekọrịta gọọmentị ọ bụla otu koodu NAICS, ndị na-azụ ihe na-achọkwa azụmahịa site na koodu. Dịka ọmụmaatụ, e nwere koodu maka ọrụ ihicha ụlọ, mbipụta akwụkwọ maka azụmahịa na nhazi sistemụ kọmputa.",
            "Chọọ koodu na peeji NAICS nke US Census Bureau (census.gov/naics) site n'ide okwu na-akọwa ọrụ gị. Họrọ otu koodu bụ isi maka ọrụ gị bụ isi, ma tinyekwa ndị ọzọ maka ihe ndị ọzọ ị na-ere.",
            "Koodu NAICS ọ bụla nwere size standard: nha kachasị ukwuu azụmahịa nwere ike ịdị ma ka bụrụ obere maka koodu ahụ, a na-atụ ya site n'ego a na-anata kwa afọ ma ọ bụ ọnụọgụ ndị ọrụ. Ọtụtụ ndị na-emepụta ngwaahịa nwere ndị ọrụ 500 ma ọ bụ ole na-erughị ya, na ọtụtụ ndị na-anaghị emepụta ngwaahịa na-enweta ihe na-erughị $7.5 nde kwa afọ n'nkezi, bụ obere, mana ọ na-adị iche. Lelee nke gị site na SBA Size Standards Tool.",
            "Ịbụ obere maka otu koodu na-eme ka i nwee ike ịsọ mpi maka nkwekọrịta e debere maka obere azụmahịa n'okpuru koodu ahụ."
          ],
          steps: ["Depụta ihe ị na-ere n'okwu dị mfe.", "Chọọ koodu dabara na census.gov/naics.", "Họrọ otu koodu bụ isi na abụọ ma ọ bụ atọ ndị ọzọ.", "Lelee koodu ọ bụla site na SBA Size Standards Tool.", "Tinye koodu ndị ahụ na ndebanye aha SAM.gov gị."],
          words: [["Koodu NAICS", "nọmba na-akọwa ụdị azụmahịa ị bụ."], ["Koodu NAICS bụ isi", "koodu maka ngwaahịa ma ọ bụ ọrụ gị bụ isi."], ["Size standard", "nha kachasị ukwuu azụmahịa nwere ike ịdị ma ka bụrụ obere maka koodu NAICS."], ["Set-aside", "nkwekọrịta nke naanị ụfọdụ azụmahịa, dị ka obere azụmahịa, nwere ike ịsọ mpi maka ya."]],
          slides: [
            { title: "Ihe koodu NAICS na-eme", bullets: ["Ha na-ekewa azụmahịa site n'ihe ha na-ere", "Nkwekọrịta ọ bụla nwere otu koodu", "Ndị na-azụ ihe na-achọ azụmahịa site na koodu"] },
            { title: "Ịchọta koodu gị", bullets: ["Chọọ na census.gov/naics", "Otu koodu bụ isi maka ọrụ gị bụ isi", "Tinye koodu maka ihe ndị ọzọ ị na-ere"] },
            { title: "Size standards", bullets: ["Koodu ọ bụla nwere oke obere azụmahịa", "Site n'ego kwa afọ ma ọ bụ ọnụọgụ ndị ọrụ", "Lelee site na SBA Size Standards Tool"] }
          ],
          sources: [
            { name: "SBA: Size standards", url: "https://www.sba.gov/federal-contracting/contracting-guide/size-standards" },
            { name: "US Census Bureau: NAICS", url: "https://www.census.gov/naics/" }
          ],
          tryIt: "Chọọ ọrụ gị bụ isi na census.gov/naics ma dee koodu NAICS gị bụ isi na abụọ ọzọ. Wee lelee otu n'ime ha na SBA Size Standards Tool ma dee ma azụmahịa gị ọ bụ obere.",
          youCanNow: "ịhọrọ koodu NAICS maka azụmahịa gị ma lelee ma ị bụ obere maka nke ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Koodu NAICS ole ka a na-enye nkwekọrịta gọọmentị ọ bụla?", options: ["Ọ dịghị", "Iri", "Otu", "Ọnụọgụ ọ bụla onye na-etinye bid chọrọ"], answer: 2, why: "A na-enye nkwekọrịta ọ bụla otu koodu NAICS, ndị na-azụ ihe na-achọkwa site na koodu." },
            { objective: "O2", q: "Ị na-agba ụlọ ọrụ ihicha ụlọ nke na-erekwa ụfọdụ ngwa ihicha. Kedu otu ị ga-esi họrọ koodu?", options: ["Họrọ otu koodu n'atụmatụghị", "Họrọ naanị koodu ngwa ahụ", "Hapụ koodu; ndị na-azụ ihe na-achọ site n'aha", "Họrọ ihicha ụlọ dị ka koodu bụ isi ma tinye ndị ọzọ maka ihe ndị ọzọ ị na-ere"], answer: 3, why: "Họrọ otu koodu bụ isi maka ọrụ gị bụ isi ma tinye ndị ọzọ maka ihe ndị ọzọ ị na-ere." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Asambodo SBA na nke California",
          minutes: 6,
          goal: "Kpebie asambodo federal na nke California azụmahịa gị nwere ike iru eru maka ha.",
          text: [
            "Asambodo (certifications) na-eme ka i nwee ike ịsọ mpi maka nkwekọrịta e debere maka ụfọdụ obere azụmahịa. A na-etinye arịrịọ maka asambodo federal na certifications.sba.gov. Nke ọ bụla nwere iwu; ndị a bụ isi ihe, ya mere lelee peeji SBA maka ndepụta zuru ezu.",
            "8(a) Business Development: maka obere azụmahịa nke ụmụ amaala US ndị nọ n'ọnọdụ ọha na ego na-esighị ike (socially and economically disadvantaged) nwe ma na-achịkwa opekata mpe 51%, nwere oke maka akụ onwe onye (net worth), ego a na-enweta na akụ, na-achọkarị afọ abụọ n'azụmahịa, ma bụrụ mmemme otu ugboro ruo afọ itoolu. HUBZone: ọfịs gị bụ isi dị na HUBZone (Historically Underutilized Business Zone) ma opekata mpe 35% nke ndị ọrụ gị bi n'otu. Women-Owned Small Business (WOSB): ụmụ nwanyị bụ ụmụ amaala US nwe ma na-achịkwa opekata mpe 51%; gọọmentị na-achọ inye WOSB 5% nke ego nkwekọrịta. Nke ndị agha mbụ nwe (VOSB) na nke ndị agha mbụ nwere nkwarụ site n'ọrụ agha nwe (SDVOSB): mmemme VetCert nke SBA na-enye ha asambodo kemgbe 2023.",
            "California nwere asambodo nke ya site n'Office of Small Business and DVBE Services nke Department of General Services, a na-etinye arịrịọ ha na Cal eProcure. Small Business (SB): onye nwe ya bụ onye kwụụrụ onwe ya, ọfịs bụ isi dị na California, na, gụnyere ndị mmekọ ya (affiliates), ndị ọrụ 100 ma ọ bụ ole na-erughị ya na nkezi ego a na-anata kwa afọ nke $19 nde ma ọ bụ ole na-erughị ya (ma ọ bụ onye na-emepụta ngwaahịa nwere ndị ọrụ 100 ma ọ bụ ole na-erughị ya). Disabled Veteran Business Enterprise (DVBE): ndị agha mbụ nwere nkwarụ nwe ma na-elekọta opekata mpe 51%, ha nwere nkwarụ metụtara ọrụ agha nke opekata mpe 10%.",
            "Ọtụtụ obodo, county na mpaghara ụlọ akwụkwọ na-anabatakwa asambodo steeti. Jụọ APEX Accelerator ndị dabara gị."
          ],
          words: [["8(a)", "mmemme SBA maka obere azụmahịa nke ndị nọ n'ọnọdụ ọha na ego na-esighị ike nwe."], ["HUBZone", "Historically Underutilized Business Zone; azụmahịa dị n'ebe ahụ nwere ike inweta enyemaka nkwekọrịta."], ["WOSB", "Women-Owned Small Business: obere azụmahịa ụmụ nwanyị nwe."], ["SDVOSB", "Service-Disabled Veteran-Owned Small Business: obere azụmahịa nke ndị agha mbụ nwere nkwarụ site n'ọrụ agha nwe."], ["DVBE", "Disabled Veteran Business Enterprise, asambodo California."]],
          slides: [
            { title: "Ihe mere ị ga-eji nweta asambodo", bullets: ["Sọọ mpi maka nkwekọrịta e debere maka ụfọdụ azụmahịa", "Federal: certifications.sba.gov"] },
            { title: "Asambodo federal", bullets: ["8(a): ndị nwe nọ n'ọnọdụ na-esighị ike, ruo afọ 9", "HUBZone: ọfịs n'ime zone, 35% nke ndị ọrụ bi n'otu", "WOSB: 51% ụmụ nwanyị nwe; VOSB/SDVOSB: SBA VetCert"] },
            { title: "Asambodo California", bullets: ["Tinye arịrịọ na Cal eProcure (DGS)", "SB: ọfịs na CA, ndị ọrụ 100 ma ọ bụ ole na-erughị, ego ruo $19M", "DVBE: 51% nke ndị agha mbụ nwere nkwarụ nwe"] },
            { title: "Nweta enyemaka n'efu", bullets: ["APEX Accelerators", "Ọfịs SBA nke mpaghara", "Lelee iwu zuru ezu nke mmemme ọ bụla"] }
          ],
          sources: [
            { name: "SBA: Mmemme 8(a) Business Development", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
            { name: "SBA: Mmemme HUBZone", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program" },
            { name: "SBA: Mmemme Women-Owned Small Business", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contract-program" },
            { name: "SBA: Enyemaka nkwekọrịta maka ndị agha mbụ (VetCert)", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/veteran-contracting-assistance-programs" },
            { name: "California DGS: Tinye arịrịọ maka asambodo Small Business na DVBE", url: "https://www.dgs.ca.gov/PD/Services/Page-Content/Procurement-Division-Services-List-Folder/Apply-for-or-Re-apply-as-Small-Business-Disabled-Veteran-Business-Enterprise" }
          ],
          tryIt: "Mee tebụl nke asambodo isii dị na nkuzi a (8(a), HUBZone, WOSB, VOSB ma ọ bụ SDVOSB, California SB, California DVBE). Maka nke ọ bụla, dee ee, ikekwe ma ọ bụ mba maka azụmahịa gị, na otu iwu na-ekpebi ya. Gbaa okirikiri na nke ị ga-ebu ụzọ lelee.",
          youCanNow: "ịkpọ aha asambodo SBA na California ndị bụ isi, ịlele ndị azụmahịa gị nwere ike iru eru maka ha, na ịmata ebe a ga-etinye arịrịọ.",
          quickCheck: [
            { objective: "O3", q: "Ebee ka ị na-etinye arịrịọ maka asambodo SBA federal?", options: ["certifications.sba.gov", "census.gov/naics", "Ọfịs county ọ bụla", "Weebụsaịtị onwe onye na-anakwa ụgwọ"], answer: 0, why: "A na-etinye arịrịọ maka asambodo federal na certifications.sba.gov." },
            { objective: "O3", q: "Ị bụ onye agha mbụ nwere nkwarụ nwe azụmahịa na California. Kedu asambodo steeti ị ga-eleba anya na ya?", options: ["HUBZone", "DVBE site na Cal eProcure", "WOSB", "Ọ dịghị; California enweghị asambodo"], answer: 1, why: "DVBE nke California bụ maka azụmahịa nke ndị agha mbụ nwere nkwarụ nwe ma na-elekọta opekata mpe 51%." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado ire ihe nye gọọmentị",
        questions: [
          { objective: "O1", q: "Gịnị ka ị na-enweta mgbe i debanyere aha na SAM.gov?", options: ["Mbinye ego n'ụlọ akụ", "Unique Entity ID (UEI)", "Nkwekọrịta e kwere nkwa ya", "Ikike azụmahịa (business license)"], answer: 1, why: "Ndebanye aha SAM.gov na-enye azụmahịa gị Unique Entity ID nwere mkpụrụ 12." },
          { objective: "O1", q: "Otu ụlọ ọrụ zitere email na ha ga-emelite ndebanye aha SAM.gov gị maka $500. Gịnị ka ị ga-eme?", options: ["Kwụọ ngwa ngwa tupu ọ gwụ", "Zipu ha EIN na ozi ụlọ akụ gị", "Zaa ya na okwuntughe gị", "Leghara ya anya ma melite ya n'onwe gị n'efu na sam.gov"], answer: 3, why: "Ndebanye aha SAM.gov bụ n'efu; ọ dịghị mgbe ị ga-akwụ onye ọzọ ụgwọ." },
          { objective: "O1", q: "Ugboro ole ka ị ga-emelite ndebanye aha SAM.gov gị?", options: ["Kwa ụbọchị 365", "Kwa afọ 10", "Ọ dịghị mgbe", "Kwa izu"], answer: 0, why: "SAM.gov kwuru na ị ga-emelite ya kwa ụbọchị 365 ka ọ nọgide na-arụ ọrụ." },
          { objective: "O2", q: "Gịnị ka koodu NAICS na-akọwa?", options: ["Akaụntụ ụlọ akụ gị", "Adreesị ụlọ gị", "Ụdị azụmahịa ị bụ na ihe ị na-ere", "Akara kredit gị"], answer: 2, why: "Koodu NAICS na-ekewa azụmahịa site na ngwaahịa ma ọ bụ ọrụ ha." },
          { objective: "O3", q: "Ọfịs gị bụ isi dị na HUBZone, 40% nke ndị ọrụ gị bikwa n'otu. Kedu asambodo ị ga-eleba anya na ya?", options: ["WOSB", "DVBE", "Naanị 8(a)", "HUBZone"], answer: 3, why: "HUBZone chọrọ ọfịs bụ isi na HUBZone na opekata mpe 35% nke ndị ọrụ bi n'otu." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchọta na inweta nkwekọrịta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọta ohere",
          minutes: 5,
          goal: "Chọọ ohere dabara koodu NAICS gị na SAM.gov na Cal eProcure ma chekwaa nchọ ahụ.",
          text: [
            "Ụlọ ọrụ gọọmentị federal na-etinye ohere nkwekọrịta na SAM.gov. Chọọ Contract Opportunities site na koodu NAICS gị, steeti gị na ụdị set-aside, dị ka obere azụmahịa, 8(a), HUBZone, WOSB ma ọ bụ SDVOSB. Chekwaa nchọ gị ka ohere ọhụrụ dabara gị bịa n'email gị.",
            "Ụlọ ọrụ steeti California na-etinye bid na Cal eProcure (caleprocure.ca.gov). Debanye aha n'ebe ahụ, tinye okwu nchọ (keywords) na koodu ngwaahịa UNSPSC na profaịlụ gị, ma gbanwuo ọkwa (notifications). Cal eProcure na-egosikwa ihe ngalaba gọọmentị zụrụ na mbụ na ọnụ ahịa ha, nke na-enyere gị aka ịtọ ọnụ ahịa nke gị.",
            "Ọ dịghị mkpa ka ị buru ụzọ nweta nnukwu nkwekọrịta. Ọtụtụ obere azụmahịa na-amalite dị ka subcontractors nye prime contractors ka ukwuu. Ngalaba California nwere SB/DVBE Advocates na-enyere azụmahịa nwere asambodo aka, APEX Accelerators na-enyekwara gị aka ịchọta bid n'efu.",
            "Chọọ ohere dabara ihe ị na-eme nke ọma ugbu a, n'ebe ị nwere ike ije ozi, na nha ị nwere ike ijikwa."
          ],
          steps: ["Na SAM.gov, chọọ Contract Opportunities site na koodu NAICS gị na steeti gị.", "Họrọ set-asides ị ruru eru maka ha.", "Chekwaa nchọ ahụ ka ohere ọhụrụ bịa n'email.", "Debanye aha na Cal eProcure ma tinye keywords na koodu UNSPSC maka ọkwa.", "Kpọtụrụ APEX Accelerator ma ọ bụ SB/DVBE Advocate maka ohere."],
          words: [["Ohere nkwekọrịta (contract opportunity)", "ọkwa e tinyere na gọọmentị chọrọ ịzụ ihe."], ["Prime contractor", "azụmahịa nwere nkwekọrịta ahụ na gọọmentị."], ["Subcontractor", "azụmahịa prime contractor were ka ọ rụọ otu akụkụ nke ọrụ ahụ."], ["UNSPSC", "koodu ngwaahịa na ọrụ sistemụ bid nke California na-eji."]],
          slides: [
            { title: "Federal: SAM.gov", bullets: ["Chọọ Contract Opportunities site na NAICS na steeti", "Họrọ set-asides gị", "Chekwaa nchọ maka ọkwa email"] },
            { title: "California: Cal eProcure", bullets: ["Debanye aha ma tinye keywords na koodu UNSPSC", "Gbanwuo ọkwa bid", "Hụ ihe e zụrụ na mbụ na ọnụ ahịa ha"] },
            { title: "Malite ebe ị nwere ike imeri", bullets: ["Rụọ ọrụ dị ka subcontractor nye prime contractor", "SB/DVBE Advocates na APEX Accelerators na-enyere aka", "Daba na nka gị, ebe gị na nha gị"] }
          ],
          sources: [
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "California DGS: Otu esi eme azụmahịa na State of California", url: "https://www.dgs.ca.gov/PD/Resources/Page-Content/Procurement-Division-Resources-List-Folder/How-to-do-business-with-the-state-of-California" },
            { name: "Cal eProcure: Chọta ohere bid", url: "https://caleprocure.ca.gov/pages/Events-BS3/event-search.aspx" }
          ],
          tryIt: "Chọọ Contract Opportunities na SAM.gov site n'iji koodu NAICS gị bụ isi na steeti gị. Dee ohere abụọ: ụlọ ọrụ gọọmentị ahụ, ihe ha chọrọ, set-aside na ụbọchị njedebe. Chekwaa nchọ ahụ.",
          youCanNow: "ịchọta ohere nkwekọrịta federal na California dabara koodu gị ma debe ọkwa.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka ụlọ ọrụ steeti California na-etinye bid?", options: ["Naanị SAM.gov", "Soshal midia", "Cal eProcure", "Census Bureau"], answer: 2, why: "Ụlọ ọrụ steeti California na-etinye bid na Cal eProcure." },
            { objective: "O4", q: "Ị hụrụ nnukwu nkwekọrịta dị anya n'ebe ị na-arụ ọrụ, nke ị na-agaghị enwe ike ijikwa. Gịnị ka ị ga-eme?", options: ["Tinye bid n'agbanyeghị", "Rịọ AI ka o tinye bid maka gị", "Detuo ihe ụlọ ọrụ ọzọ nyere", "Chọọ ohere dabara ihe ị na-eme nke ọma na nha ị nwere ike ijikwa"], answer: 3, why: "Chọọ ọrụ ị na-eme nke ọma, n'ebe ị nwere ike ije ozi, na nha ị nwere ike ijikwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgụ solicitation",
          minutes: 6,
          goal: "Gụọ akụkụ ndị bụ isi nke solicitation ma kpebie ma ị ga-etinye bid.",
          text: [
            "Solicitation bụ arịrịọ gọọmentị maka ihe ndị mmadụ ga-enye (offers). A nwere ike ịkpọ ya Request for Quote (RFQ), Request for Proposal (RFP) ma ọ bụ Invitation for Bid (IFB). Ha nwere ike ịdị ogologo, mana ị ga-ebu ụzọ chọta naanị akụkụ ole na ole bụ isi.",
            "Chọta ihe ndị a: statement of work (ihe ha chọrọ ka e mee), ntụziaka (ihe ị ga-eziga na otu), evaluation criteria (otu ha ga-esi họrọ onye meriri, dị ka ọnụ ahịa kacha ala ma ọ bụ uru kacha mma), ụbọchị na oge njedebe, oge njedebe maka ajụjụ, na aha contracting officer. Lelekwa amendments, ndị bụ mgbanwe e tinyere mgbe e mesịrị.",
            "Wee kpebie bid ma ọ bụ no bid. Jụọ: Anyị nwere ike ịrụ ọrụ a nke ọma? Anyị na-emezu ihe niile a chọrọ, dị ka ikike (licenses), inshọransị na set-aside? Anyị nwere ike iweta ya n'oge na n'ọnụ ahịa ga-enye anyị uru? Anyị nwere ọrụ yiri ya anyị mere na mbụ ka anyị gosi?",
            "Ịhapụ otu ntụziaka, dị ka oke peeji ma ọ bụ fọm a chọrọ, nwere ike ime ka a jụ ihe i nyere. Mee ndepụta nlele site na ntụziaka ahụ ma kaa akara n'ihe ọ bụla tupu i zipu. Ngwa enyemaka AI nwere ike inyere gị aka ichikọta solicitation ọha dị ogologo, mana ị ga-agụ ezi ntụziaka ahụ n'onwe gị."
          ],
          steps: ["Chọta statement of work, ntụziaka na evaluation criteria.", "Dee ụbọchị na oge njedebe, oge njedebe ajụjụ na contracting officer.", "Lelee amendments.", "Zaa ajụjụ anọ bid ma ọ bụ no-bid.", "Ọ bụrụ na ị ga-etinye bid, mee ntụziaka ka ọ bụrụ ndepụta nlele ma kaa akara n'ihe ọ bụla."],
          words: [["Solicitation", "arịrịọ gọọmentị maka offers, dị ka RFQ, RFP ma ọ bụ IFB."], ["Statement of work", "akụkụ na-ekwu kpọmkwem ọrụ a chọrọ."], ["Evaluation criteria", "otu gọọmentị ga-esi họrọ onye meriri."], ["Amendment", "mgbanwe na solicitation e tinyere mgbe o bu ụzọ pụta."], ["Contracting officer", "onye gọọmentị nwere ikike ịbịanye aka na nkwekọrịta ahụ."]],
          slides: [
            { title: "Aha ị ga-ahụ", bullets: ["RFQ: Request for Quote", "RFP: Request for Proposal", "IFB: Invitation for Bid"] },
            { title: "Buru ụzọ chọta akụkụ ndị a", bullets: ["Statement of work na ntụziaka", "Evaluation criteria", "Ụbọchị njedebe, oge njedebe ajụjụ, amendments"] },
            { title: "Bid ma ọ bụ no bid?", bullets: ["Anyị nwere ike ime ya nke ọma?", "Anyị na-emezu ihe niile a chọrọ?", "Anyị nwere ike iweta ya n'oge na n'uru? Ọrụ mbụ?"] },
            { title: "Soro ntụziaka ọ bụla", bullets: ["Otu mperi nwere ike ime ka a jụ gị", "Mee ndepụta nlele ma kaa akara n'ihe ọ bụla"] }
          ],
          tryIt: "Meghee otu n'ime ohere ndị i chọtara na nkuzi gara aga. Dee statement of work n'otu ahịrịokwu, evaluation criteria, ụbọchị na oge njedebe, na oge njedebe ajụjụ. Wee zaa ajụjụ anọ bid ma ọ bụ no-bid ma kpebie.",
          youCanNow: "ịchọta akụkụ ndị bụ isi nke solicitation ma mee mkpebi bid ma ọ bụ no-bid doro anya.",
          quickCheck: [
            { objective: "O5", q: "Kedu aha ọzọ a na-akpọ solicitation?", options: ["Request for Proposal (RFP)", "Capability statement", "UEI", "Size standard"], answer: 0, why: "A nwere ike ịkpọ solicitation RFQ, RFP ma ọ bụ IFB." },
            { objective: "O5", q: "Ntụziaka ahụ kwuru na oke peeji bụ 10. Gịnị ka ị ga-eme?", options: ["Zipu peeji 15 iji gosi ihe ka ukwuu", "Tinye ya na ndepụta nlele gị ma kaa ya akara tupu i zipu", "Hapụ AI ka o kpebie ogologo ya", "Leghara ya anya; ọ bụ naanị ndụmọdụ"], answer: 1, why: "Ịhapụ otu ntụziaka, dị ka oke peeji, nwere ike ime ka a jụ ihe i nyere." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide capability statement",
          minutes: 6,
          goal: "Dee capability statement nke otu peeji na-agwa onye na-azụ ihe ihe ị na-eme na otu ọ ga-esi kpọtụrụ gị.",
          text: [
            "Capability statement bụ nchịkọta nke otu peeji banyere azụmahịa gị maka ndị na-azụ ihe maka gọọmentị na prime contractors. Ị na-ezipu ya mgbe ị zutere ndị na-azụ ihe, na mmemme ịkpọtụrụ ndị azụmahịa (outreach events), na mgbe ị na-egosi onwe gị nye contracting officer ma ọ bụ SB/DVBE Advocate.",
            "O nwere akụkụ anọ. Core competencies: ihe ị kacha mara ime, n'isi okwu dị mkpụmkpụ. Past performance: ọrụ abụọ ma ọ bụ atọ i merela, na ụdị onye ahịa, ihe i mere na ihe si na ya pụta. Differentiators: ihe mere gị iche, dị ka ọsọ ọsọ, nka pụrụ iche ma ọ bụ ịnọ n'obodo ahụ. Ozi ụlọ ọrụ: aha iwu, UEI, koodu CAGE ma ọ bụrụ na i nwere ya, koodu NAICS, asambodo, na ozi kọntaktị.",
            "Mee ka ọ bụrụ otu peeji, dị mfe ilegharị anya, nwee logo gị na ozi kọntaktị n'elu. Jiri okwu onye na-azụ ihe si na statement of work mgbe ha dabara. Mee ụdị maka ụdị onye na-azụ ihe ọ bụla ma ọ bụrụ na ị na-ere ọrụ dị iche iche.",
            "Ngwa enyemaka AI nwere ike inyere gị aka ime ka isi okwu dị mkpụmkpụ ma ọ bụ doo anya karị. Etinyela nọmba nzuzo dị ka ozi ụlọ akụ gị ma ọ bụ EIN n'ime ya; ọ dị mma igosi UEI na koodu NAICS gị."
          ],
          steps: ["Dee core competencies atọ ruo ise dị ka isi okwu dị mkpụmkpụ.", "Tinye ihe atụ past performance abụọ ma ọ bụ atọ: ụdị onye ahịa, ọrụ, ihe si na ya pụta.", "Dee differentiators abụọ ma ọ bụ atọ.", "Tinye ozi ụlọ ọrụ: aha iwu, UEI, koodu CAGE, koodu NAICS, asambodo na kọntaktị.", "Mee ka ọ dabara n'otu peeji ma chekwaa ya dị ka PDF."],
          words: [["Capability statement", "nchịkọta nke otu peeji banyere azụmahịa gị maka ndị na-azụ ihe maka gọọmentị."], ["Core competencies", "ihe azụmahịa gị kacha mara ime."], ["Past performance", "ọrụ i merela na mbụ nke na-egosi na ị nwere ike ime ya."], ["Differentiator", "ihe na-eme ka azụmahịa gị dị iche na ndị ọzọ."], ["Koodu CAGE", "koodu na-egosi azụmahịa na-arụ ọrụ maka gọọmentị, a na-enye ya mgbe i debanyere aha na SAM."]],
          slides: [
            { title: "Ihe ọ bụ", bullets: ["Otu peeji banyere azụmahịa gị", "Maka ndị na-azụ ihe maka gọọmentị na prime contractors", "Zipu ya mgbe ị na-egosi onwe gị"] },
            { title: "Akụkụ anọ", bullets: ["Core competencies", "Past performance", "Differentiators", "Ozi ụlọ ọrụ: UEI, NAICS, asambodo, kọntaktị"] },
            { title: "Mee ka ọ dị mfe ilegharị anya", bullets: ["Otu peeji, logo na kọntaktị n'elu", "Jiri okwu onye na-azụ ihe mgbe ha dabara", "Ụdị maka ụdị onye na-azụ ihe ọ bụla"] },
            { title: "Iji AI mee ka ọ maa mma", bullets: ["Mee ka isi okwu dị mkpụmkpụ ma doo anya", "Ozi ụlọ akụ ma ọ bụ EIN adịghị na prompts", "Ọ dị mma igosi UEI na koodu NAICS"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee capability statement gị nke otu peeji nwere core competencies, past performance, differentiators na ozi ụlọ ọrụ. Wee chọta otu ezi ohere na SAM.gov ma ọ bụ Cal eProcure dabara otu koodu NAICS dị na statement gị ma dee aha ya na ụbọchị njedebe ya.",
          youCanNow: "ide capability statement nke otu peeji ma jikọta ya na ezi ohere gọọmentị.",
          quickCheck: [
            { objective: "O6", q: "Kedu ogologo capability statement kwesịrị ịdị?", options: ["Peeji iri", "Ogologo dị ka o kwere omume", "Otu peeji", "Otu ahịrịokwu"], answer: 2, why: "Ọ bụ nchịkọta nke otu peeji dị mfe ilegharị anya." },
            { objective: "O6", q: "Ị na-ede akụkụ ozi ụlọ ọrụ gị. Gịnị ka ị ga-ahapụ?", options: ["UEI gị", "Koodu NAICS gị", "Ozi kọntaktị gị", "Ozi ụlọ akụ gị na EIN"], answer: 3, why: "Ọ dị mma igosi UEI na koodu NAICS; ọ dịghị mma igosi nọmba nzuzo dị ka ozi ụlọ akụ na EIN." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchọta na inweta nkwekọrịta",
        questions: [
          { objective: "O4", q: "Ebee ka ụlọ ọrụ gọọmentị federal na-etinye ohere nkwekọrịta?", options: ["SAM.gov", "Saịtị soshal midia", "Weebụsaịtị ụlọ akụ gị", "DMV"], answer: 0, why: "A na-etinye ohere nkwekọrịta federal na SAM.gov." },
          { objective: "O5", q: "Kedu akụkụ nke solicitation na-agwa gị otu a ga-esi họrọ onye meriri?", options: ["Peeji mkpuchi", "Evaluation criteria", "Logo ụlọ ọrụ gọọmentị ahụ", "Nọmba peeji"], answer: 1, why: "Evaluation criteria na-akọwa otu a ga-esi kpee ikpe offers." },
          { objective: "O5", q: "Ị nweghị ike iweta ya n'ụbọchị a chọrọ. Gịnị bụ mkpebi amamihe?", options: ["Tinye bid n'agbanyeghị ma tụọ anya", "Kwe nkwa ma bịa n'azụ oge", "Kpebie na ị gaghị etinye bid maka nke a", "Leghara ụbọchị ahụ anya"], answer: 2, why: "Ọ bụrụ na ị nweghị ike imezu ihe dị mkpa a chọrọ, no-bid na-echebe aha ọma gị." },
          { objective: "O6", q: "Kedu nke dabara n'akụkụ ozi ụlọ ọrụ nke capability statement?", options: ["Nọmba akaụntụ ụlọ akụ gị", "EIN gị", "Okwuntughe gị", "UEI gị na koodu NAICS"], answer: 3, why: "UEI, koodu NAICS, asambodo na ozi kọntaktị na-enyere ndị na-azụ ihe aka ịchọta gị ma lelee gị." },
          { objective: "O6", q: "Kedu ezigbo ụzọ obere azụmahịa ọhụrụ ga-esi malite?", options: ["Tinye bid naanị na nkwekọrịta kacha ukwuu", "Rụọ ọrụ dị ka subcontractor nye prime contractor", "Kwụọ mmadụ ụgwọ ka o nweta nkwekọrịta maka gị", "Chere ka gọọmentị kpọọ gị"], answer: 1, why: "Ịbụ subcontractor na-ewulite past performance n'enweghị nnukwu ihe egwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Inweta Nkwekọrịta Ọrụ Gọọmentị",
    questions: [
      { objective: "O1", q: "Gịnị bụ SAM.gov?", options: ["Saịtị federal ebe azụmahịa na-edebanye aha iji ree ihe nye gọọmentị", "Mmemme mbinye ego", "Fọm ụtụ isi", "Naanị weebụsaịtị steeti"], answer: 0, why: "SAM.gov bụ System for Award Management." },
      { objective: "O1", q: "Mkpụrụ ole ka UEI nwere?", options: ["4", "12", "20", "100"], answer: 1, why: "UEI bụ koodu nwere mkpụrụ 12 nke mkpụrụedemede na nọmba." },
      { objective: "O1", q: "Jiri naanị UEI na-enweghị ndebanye aha zuru ezu, ị:", options: ["Nwere ike inweta nkwekọrịta ọ bụla", "Na-anata ụgwọ n'onwe ya", "Enweghị ike itinye arịrịọ ozugbo maka awards federal", "Nwere asambodo 8(a)"], answer: 2, why: "SAM.gov kwuru na naanị UEI anaghị ekwe ka i tinye arịrịọ maka awards federal." },
      { objective: "O1", q: "Ego ole ka ndebanye aha SAM.gov na-efu?", options: ["$500", "$99 kwa afọ", "Pasent nke nkwekọrịta ọ bụla", "Ọ dịghị; ọ bụ n'efu"], answer: 3, why: "Ndebanye aha bụ n'efu; leghara ihe e nyere maka ụgwọ ndebanye aha anya." },
      { objective: "O1", q: "Ebee ka ị ga-ede ozi ụlọ akụ gị maka SAM.gov?", options: ["Naanị na SAM.gov n'onwe ya", "N'ime ngwa enyemaka AI", "N'email nye onye ị na-amaghị", "Na soshal midia"], answer: 0, why: "Ozi nzuzo na-aba naanị na saịtị gọọmentị ahụ." },
      { objective: "O2", q: "Ebee ka ị nwere ike ịchọ koodu NAICS?", options: ["Blọọgụ ọ bụla", "census.gov/naics", "Igwefoto ekwentị gị", "Ozi ederede"], answer: 1, why: "US Census Bureau na-ebipụta koodu NAICS." },
      { objective: "O2", q: "Size standard na-agwa gị:", options: ["Nha logo gị", "Otu ọfịs gị ga-esi buo ibu", "Nha kachasị ukwuu ị nwere ike ịdị ma ka bụrụ obere maka koodu NAICS", "Nkwekọrịta ole ị nwere ike inweta"], answer: 2, why: "Size standards na-etọ oke obere azụmahịa maka koodu NAICS ọ bụla." },
      { objective: "O2", q: "Set-aside bụ:", options: ["Ego ụtụ isi a na-akwụghachi", "Mbinye ego", "Ụgwọ ntaramahụhụ maka ịbịa n'azụ oge", "Nkwekọrịta nke naanị ụfọdụ azụmahịa nwere ike ịsọ mpi maka ya"], answer: 3, why: "Set-asides na-edebe nkwekọrịta maka otu ndị dị ka obere azụmahịa." },
      { objective: "O3", q: "Ebee ka ị na-etinye arịrịọ maka asambodo SBA federal dị ka WOSB na VetCert?", options: ["certifications.sba.gov", "Naanị onye ndụmọdụ a na-akwụ ụgwọ", "Ọba akwụkwọ county gị", "irs.gov"], answer: 0, why: "A na-etinye arịrịọ maka asambodo SBA na certifications.sba.gov." },
      { objective: "O3", q: "Kedu asambodo bụ maka azụmahịa nke ụmụ nwanyị bụ ụmụ amaala US nwe ma na-achịkwa opekata mpe 51%?", options: ["HUBZone", "WOSB", "DVBE", "Naanị 8(a)"], answer: 1, why: "WOSB pụtara Women-Owned Small Business." },
      { objective: "O3", q: "Onye na-enye obere azụmahịa nke ndị agha mbụ nwe na nke ndị agha mbụ nwere nkwarụ nwe asambodo maka nkwekọrịta federal ugbu a?", options: ["IRS", "Obodo gị", "SBA, site na VetCert", "Ọ dịghị onye"], answer: 2, why: "Mmemme VetCert nke SBA weghaara inye asambodo ahụ na 2023." },
      { objective: "O3", q: "Ebee ka ị na-etinye arịrịọ maka asambodo Small Business na DVBE nke California?", options: ["SAM.gov", "FBI", "Ụlọ akụ", "Cal eProcure, site na Department of General Services"], answer: 3, why: "A na-eme asambodo SB na DVBE nke California site na Cal eProcure." },
      { objective: "O3", q: "DVBE nke California ga-abụ nke opekata mpe 51% n'aka:", options: ["Ndị agha mbụ nwere nkwarụ", "Ndị enyi ndị agha mbụ ọ bụla", "Ndị na-etinye ego si na steeti ọzọ", "Ndị ọrụ gọọmentị"], answer: 0, why: "Ndị agha mbụ nwere nkwarụ nwe ma na-elekọta opekata mpe 51% nke DVBE." },
      { objective: "O4", q: "Kedu otu ị ga-esi mee ka e zitere gị ohere SAM.gov ọhụrụ?", options: ["Kpọọ ụlọ ọrụ gọọmentị ọ bụla kwa ụbọchị", "Chekwaa nchọ gị ka ohere dabara gị bịa n'email", "Kwụọ ụgwọ maka ọkwa", "Ị pụghị"], answer: 1, why: "Nchọ e chekwara na-ezitere gị ohere ọhụrụ dabara gị n'email." },
      { objective: "O6", q: "Prime contractor bụ:", options: ["Onye ọrụ gọọmentị", "Ụlọ akụ", "Azụmahịa nwere nkwekọrịta ahụ na gọọmentị", "Asambodo"], answer: 2, why: "Prime nwere nkwekọrịta ahụ ma nwee ike iwe subcontractors." },
      { objective: "O4", q: "Onye nwere ike inyere gị aka ịchọta bid n'efu?", options: ["Ụlọ ọrụ na-anakwa ụgwọ iji debanye aha gị", "Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye", "APEX Accelerator"], answer: 3, why: "APEX Accelerators na-enye enyemaka n'efu maka nkwekọrịta gọọmentị." },
      { objective: "O5", q: "Gịnị bụ amendment na solicitation?", options: ["Mgbanwe e tinyere mgbe o bu ụzọ pụta", "Logo ụlọ ọrụ gị", "Fọm ụtụ isi", "Ego e tinyere n'ụlọ akụ"], answer: 0, why: "Amendments na-agbanwe solicitation, ya mere lelee ha mgbe niile." },
      { objective: "O5", q: "Kedu akụkụ na-ekwu kpọmkwem ọrụ a chọrọ?", options: ["Ụbọchị njedebe", "Statement of work", "Aha ọkwa contracting officer", "Adreesị ụlọ ọrụ gọọmentị ahụ"], answer: 1, why: "Statement of work na-akọwa ọrụ ahụ." },
      { objective: "O5", q: "Gịnị mere ị ga-eji mee ntụziaka solicitation ka ọ bụrụ ndepụta nlele?", options: ["Ime ka ọ dị ogologo", "Ịhapụ nzọụkwụ ụfọdụ", "Ịhapụ otu ntụziaka nwere ike ime ka a jụ ihe i nyere", "SAM.gov chọrọ ya"], answer: 2, why: "Ndepụta nlele na-enyere gị aka imezu ntụziaka ọ bụla." },
      { objective: "O6", q: "Kedu nke bụ akụkụ nke capability statement?", options: ["Okwuntughe ụlọ akụ gị", "Naanị adreesị ụlọ gị", "Akụkọ ihe mere eme nke peeji iri", "Past performance"], answer: 3, why: "Past performance na-egosi ndị na-azụ ihe na ị nwere ike ime ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      5,
      9,
      13,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Core competencies",
        objective: "O6",
        notYet: "Ọ doghị anya ma ọ bụ ọ dịghị ya, dị ka \"anyị na-eme ihe niile\".",
        meets: "Isi okwu dị mkpụmkpụ nke ihe azụmahịa ahụ kacha mara ime.",
        exceeds: "Na-eji okwu onye na-azụ ihe si na statement of work mgbe ha dabara."
      },
      {
        name: "Past performance",
        objective: "O6",
        notYet: "Ọ dịghị ọrụ mbụ, ma ọ bụ ọrụ na-enweghị ihe si na ha pụta.",
        meets: "Ọrụ abụọ ma ọ bụ atọ nwere ụdị onye ahịa, ihe e mere na ihe si na ya pụta.",
        exceeds: "Na-ahọrọ ọrụ ndị kacha yie ọrụ ndị na-azụ ihe maka gọọmentị chọrọ."
      },
      {
        name: "Differentiators",
        objective: "O6",
        notYet: "Ọ dịghị ihe mere azụmahịa ahụ iche.",
        meets: "Na-ekwu nke ọma ihe mere azụmahịa ahụ iche.",
        exceeds: "Na-akwado isi okwu ọ bụla site n'eziokwu si n'ezi ọrụ, dị ka ọsọ ọsọ ma ọ bụ ịnọ n'obodo ahụ."
      },
      {
        name: "Ozi ụlọ ọrụ",
        objective: "O2",
        notYet: "UEI ma ọ bụ koodu NAICS adịghị ya, ma ọ bụ ọ na-egosi ozi ụlọ akụ ma ọ bụ EIN.",
        meets: "Aha iwu, UEI, koodu NAICS, asambodo na ozi kọntaktị, n'enweghị nọmba nzuzo ọ bụla.",
        exceeds: "E lelere koodu NAICS bụ isi na size standard ya."
      },
      {
        name: "Ohere dabara ya",
        objective: "O4",
        notYet: "Ọ dịghị ohere a chọtara, ma ọ bụ ọ dabaghị na koodu NAICS dị na statement ahụ.",
        meets: "Otu ezi ohere na SAM.gov ma ọ bụ Cal eProcure dabara koodu NAICS dị na statement ahụ.",
        exceeds: "E chekwara nchọ ahụ ma dee mkpebi bid ma ọ bụ no-bid."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Azụmahịa nwere ndebanye aha SAM.gov na-arụ ọrụ n'ime ụbọchị 60 (nnyocha nsochi)",
      "Azụmahịa tinyere arịrịọ maka asambodo SBA ma ọ bụ California, ma ọ bụ zipu bid mbụ ma ọ bụ offer subcontract",
      "Nkwekọrịta ma ọ bụ subcontracts e nwetara n'ime ọnwa 12, dị ka ndị na-amụ ihe ma ọ bụ ndị mmekọ kọrọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Aha iwu azụmahịa gị, adreesị, EIN na ozi ụlọ akụ, e dere naanị na SAM.gov",
      "Ngwa enyemaka AI n'efu maka ime ka isi okwu capability statement dị mkpụmkpụ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunye oge iji mezuo ezi ndebanye aha"
    ],
    facilitatorNotes: [
      "Soro APEX Accelerator ma ọ bụ SB/DVBE Advocate nọ nso rụkọọ ọrụ iji zaa ajụjụ gbasara ndebanye aha na asambodo.",
      "Gosi ezi ihe atụ nke email aghụghọ na-anakwa ụgwọ ndebanye aha ka ndị na-amụ ihe nwee ike ịmata ya.",
      "Chetara ndị na-amụ ihe ka ha ghara ide ozi ụlọ akụ ma ọ bụ EIN ha mgbe ọ bụla n'ime ngwa AI ma ọ bụ email.",
      "Jiri ezi solicitation ọha maka omume bid ma ọ bụ no-bid, ma mee ka ndị na-amụ ihe rụkọọ ndepụta nlele ntụziaka ahụ ọnụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

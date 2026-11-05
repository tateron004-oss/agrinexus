"use strict";

// Koach Learn course (Igbo translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Codes in this course are practice examples only: code sets change every year.

module.exports = {
  id: "medical-billing-coding-ig",
  lang: "ig",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Mmalite Ịkwụ Ụgwọ Ahụike na Ide Koodu (Medical Billing and Coding)",
  skills: "Ịhọrọ asambodo billing na coding, Ịgbaso usoro ịkwụ ụgwọ, Ịhọrọ ezi otu koodu, Ịchọ koodu n'ụzọ ziri ezi, Ijupụta akwụkwọ arịrịọ ụgwọ (claim) omume, Ichebe ozi nzuzo onye ọrịa (HIPAA)",
  outcome: "ịgbanwe nleta dọkịta e chepụtara echepụta ka ọ bụrụ claim omume zuru ezu: ịhọrọ ezi koodu ọrịa na koodu ọrụ, ijupụta igbe ndị bụ isi n'akwụkwọ claim, ịlele ya tupu ọ pụọ, na idebe ozi onye ọrịa na nzuzo.",
  about: [
    "Ndị na-eme billing na coding ahụike na-agbanwe nleta dọkịta ka ọ bụrụ koodu na claim (akwụkwọ arịrịọ ụgwọ), ka ụlọ ọrụ inshọransị kwụọ ọfịs dọkịta ụgwọ. A na-arụ ọtụtụ ọrụ ndị a n'ọfịs, ụfọdụ na-arụ ha n'ụlọ (remote). Ihe ọmụmụ a bụ nzọụkwụ mbụ maka ndị na-achọ ọrụ, ndị agha mbụ (veterans), ndị na-alọta site n'ụlọ mkpọrọ na ndị okenye na-agbanwe ọrụ.",
    "Ị ga-amụta ihe ọrụ ahụ bụ, asambodo ndị were mmadụ n'ọrụ na-arịọ (dị ka CBCS nke NHA, CPC nke AAPC na CCA nke AHIMA), otu ụgwọ si aga site n'ịbanye ruo n'ịkwụ ụgwọ, otu koodu atọ bụ isi, otu esi achọ koodu n'ụzọ ziri ezi, otu esi ejupụta claim omume, na otu esi echebe ozi nzuzo onye ọrịa n'okpuru HIPAA.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị asambodo. Asambodo ọ bụla nwere iwu nke ya, ọzụzụ, ụgwọ na ule, ya mere ị ga-elele ha na peeji gọọmentị ha. Ndị ọrịa na nleta niile nọ n'ihe ọmụmụ a bụ ndị e chepụtara echepụta, koodu ndị ahụ bụkwa maka omume naanị: koodu na-agbanwe kwa afọ, ya mere ezigbo onye coder na-eji akwụkwọ koodu nke afọ a mgbe niile.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ na spreadsheet n'efu. E nwere obere nnwale mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Gbanwee nleta e chepụtara echepụta dị na Nkuzi 6 ka ọ bụrụ claim omume zuru ezu: dee koodu ọrịa na koodu ọrụ, jupụta igbe ndị bụ isi n'akwụkwọ claim 1500 omume (n'akwụkwọ ma ọ bụ na spreadsheet), lelee ya site na ndepụta nlele gị tupu izipu, ma dee atụmatụ otu peeji na-akpọ aha asambodo ị ga-achọ, ebe ị ga-amụ ihe na ụbọchị ule ị chọrọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-achọ ọrụ ọfịs kwụsiri ike n'ahụike: ndị na-achọ ọrụ, ndị agha mbụ (veterans), ndị na-alọta site n'ụlọ mkpọrọ, ndị ntorobịa, ndị si mba ọzọ bịa na ndị okenye na-alọghachi n'ịmụ ihe. Ọtụtụ arụbeghị ọrụ n'ọfịs ahụike. Ụfọdụ chọrọ ọrụ n'ụlọ (remote).",
    startingPoint: "Ha nwere ike ịgụ na ide bekee kwa ụbọchị ma jiri ekwentị ma ọ bụ kọmputa ọba akwụkwọ. Ọtụtụ amaghị okwu ahụike, otu koodu, okwu inshọransị ma ọ bụ otu esi akwụ ụgwọ claim.",
    gap: "Ọrụ billing na coding na-arịọ asambodo na nka ndị bụ isi site n'ụbọchị mbụ: ịmata usoro ịkwụ ụgwọ, ịhọrọ ezi otu koodu, iji nlezianya chọọ koodu, ijupụta claim na idebe ozi ahụike na nzuzo. Ndị na-amụ ihe chọrọ map doro anya nke ọrụ ahụ na asambodo ya, na omume na nzọụkwụ ọ bụla, tupu ha akwụọ ụgwọ maka mmemme ọzụzụ ma ọ bụ ule.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ahụike na inshọransị ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ na-arụ ọrụ maka ọrụ ọ bụla",
      "Akwụkwọ koodu na ụfọdụ ngwa coding na-efu ego; ihe ọmụmụ a na-eji ngwa gọọmentị n'efu na ihe atụ e chepụtara echepụta",
      "Koodu na-agbanwe kwa afọ: koodu ọ bụla e gosiri bụ maka omume naanị",
      "Nzuzo: e jighị ezi ozi onye ọrịa ọ bụla ebe ọ bụla n'ihe ọmụmụ a",
      "Ụfọdụ asambodo na-ajụ maka akụkọ ndụ gara aga; ndị na-amụ ihe na-elele iwu mmemme ọ bụla n'onwe ha"
    ],
    prerequisites: "Ọ dịghị. \"Excel na Spreadsheet\" na \"Ịghọta Ozi Ahụike\" na-enyere aka mana a chọghị ha."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji peeji gọọmentị nke NHA, AAPC na AHIMA", action: "iji asambodo billing na coding atọ tụnyere ma dee atụmatụ ọmụmụ na ule nwere ụbọchị", standard: "ma lelee ihe a chọrọ na peeji gọọmentị, ọ bụghị ịkọ nkọ" },
    { id: "O2", condition: "Mgbe e nyere gị nzọụkwụ nleta dọkịta n'usoro na-ezighi ezi", action: "itinye nzọụkwụ usoro ịkwụ ụgwọ n'usoro, site n'ịhazi oge ruo n'ịkwụ ụgwọ", standard: "n'enweghị nzọụkwụ ọ bụla fọdụrụ" },
    { id: "O3", condition: "Mgbe e nyere gị akụkụ ise nke nleta e chepụtara echepụta", action: "ijikọ akụkụ ọ bụla na ezi otu koodu ya: ICD-10-CM maka ọrịa, CPT maka ọrụ dọkịta, HCPCS Level II maka ngwa", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ọrịa site n'akwụkwọ nleta e chepụtara echepụta", action: "ịchọ koodu ọrịa site n'ịchọta okwu ahụ na index ma kwado ya na ndepụta koodu", standard: "mgbe niile, ọ dịghị mgbe i ji naanị index de koodu" },
    { id: "O5", condition: "Mgbe e nyere gị nleta e chepụtara echepụta na akwụkwọ claim omume na-enweghị ihe e dere", action: "ijupụta igbe claim ndị bụ isi ma chọta ihe mere a jụrụ claim omume", standard: "nke mere na onye ọrịa, inshọransị, koodu na ụgwọ dabara na nleta ahụ" },
    { id: "O6", condition: "N'ọnọdụ omume n'ebe ọrụ", action: "ịkọrọ naanị ndị chọrọ ya ozi onye ọrịa, na naanị ihe kacha nta ha chọrọ", standard: "n'ọnọdụ ọ bụla, na-agbaso HIPAA" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, asambodo na koodu",
      lessons: [
        {
          title: "Ọrụ ahụ na asambodo ndị were mmadụ n'ọrụ na-arịọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jiri asambodo billing na coding atọ tụnyere ma họrọ otu ị ga-achọ.",
          text: [
            "Onye coder ahụike na-agụ ihe dọkịta dere ma na-agbanwe ọrịa na ọrụ e mere ka ha bụrụ koodu. Onye biller ahụike na-eji koodu ndị ahụ ezigara ụlọ ọrụ inshọransị claim ma na-eso ya ruo mgbe a kwụrụ ya. N'obere ọfịs, otu onye na-emekarị ha abụọ.",
            "Ndị were mmadụ n'ọrụ na-arịọkarị asambodo. Atọ a na-ahụkarị: Certified Billing and Coding Specialist (CBCS) site na NHA, National Healthcareer Association; Certified Professional Coder (CPC) site na AAPC; na Certified Coding Associate (CCA) site na AHIMA, American Health Information Management Association.",
            "Nke ọ bụla nwere iwu nke ya. Dịka ọmụmaatụ, CBCS nke NHA na-arịọ asambodo high school ma ọ bụ GED, gbakwunyere mmemme ọzụzụ ma ọ bụ ahụmahụ ọrụ e lekọtara. Ụgwọ, iwu ule na ihe a chọrọ na-agbanwe, ya mere gụọ peeji gọọmentị nke ọ bụla tupu ị kwụọ ụgwọ ọ bụla. Ihe ọmụmụ a na-akwado gị; ọ naghị enye gị asambodo.",
            "Kpachara anya maka mmemme na-ekwe nkwa ọrụ ma ọ bụ asambodo n'ime ụbọchị ole na ole. Jụọ ụlọ akwụkwọ ọ bụla ule asambodo ọ na-akwado gị maka ya, ma lelee ule ahụ na peeji gọọmentị."
          ],
          steps: ["Meghee peeji gọọmentị maka CBCS (nhanow.com), CPC (aapc.com) na CCA (ahima.org).", "Maka nke ọ bụla, dee onye na-enye ya, ihe ị chọrọ tupu ule ahụ, na otu ị ga-esi were ule ahụ.", "Lee mgbasa ozi ọrụ dị nso gị ma gụọ asambodo ha na-arịọkarị.", "Họrọ otu ị ga-achọ, ma dee ọnwa ị chọrọ iwere ule ahụ."],
          words: [["Onye coder ahụike (medical coder)", "onye na-agbanwe ihe dọkịta dere ka ọ bụrụ koodu a kara aka."], ["Onye biller ahụike (medical biller)", "onye na-ezigara ụlọ ọrụ inshọransị claim ma na-eso ha ruo mgbe a kwụrụ ha."], ["Asambodo (certification)", "ihe akaebe site n'ụlọ ọrụ na-enye ule na i gafere ule ya; a na-akpọkwa ya credential."], ["Claim", "akwụkwọ ụgwọ e zigara ụlọ ọrụ inshọransị na-arịọ ya ka ọ kwụọ maka nleta."]],
          slides: [
            { title: "Coder na biller", bullets: ["Coder: na-agbanwe ihe dọkịta dere ka ọ bụrụ koodu", "Biller: na-ezipu claim ma na-eso ya ruo mgbe a kwụrụ ya", "Obere ọfịs: otu onye na-emekarị ha abụọ"] },
            { title: "Asambodo atọ a na-ahụkarị", bullets: ["CBCS site na NHA", "CPC site na AAPC", "CCA site na AHIMA"] },
            { title: "Lelee tupu ị kwụọ ụgwọ", bullets: ["Iwu, ụgwọ na ule na-agbanwe", "Gụọ peeji gọọmentị nke ọ bụla", "Ihe ọmụmụ a na-akwado gị; ọ bụghị asambodo"] },
            { title: "Họrọ ụzọ gị", bullets: ["Gụọ ihe mgbasa ozi ọrụ dị nso gị na-arịọ", "Họrọ otu asambodo", "Dee ọnwa ị chọrọ iwere ule"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Mee tebụl nwere kọlụm atọ n'akwụkwọ ma ọ bụ na spreadsheet: CBCS, CPC, CCA. Maka nke ọ bụla, dee onye na-enye ya na ihe ị chọrọ tupu ule ahụ, site na peeji gọọmentị. Mgbe ahụ lee mgbasa ozi ọrụ ise dị nso gị ma gbaa okirikiri gburugburu asambodo ị ga-achọ.",
          youCanNow: "ikwu ihe ndị biller na coder na-eme, ịkpọ aha asambodo atọ na ndị na-enye ha, na ịhọrọ otu ị ga-achọ.",
          quickCheck: [
            { objective: "O1", q: "Onye na-enye asambodo CPC?", options: ["Ọfịs dọkịta ị na-arụrụ ọrụ", "AAPC", "Ọfịs ụgbọala steeti gị", "Ụlọ akwụkwọ ịntanetị ọ bụla"], answer: 1, why: "Certified Professional Coder (CPC) bụ asambodo AAPC." },
            { objective: "O1", q: "Weebụsaịtị na-ekwu na ị nwere ike ịbụ coder nwere asambodo n'ụbọchị atọ maka obere ụgwọ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Kwụọ ngwa ngwa tupu ọnụ ahịa arịgo", "Gwa ndị were mmadụ n'ọrụ na i nwere asambodo", "Lelee iwu ezi ule ahụ na peeji gọọmentị", "Hapụ ọzụzụ; weebụsaịtị ahụ ezuola"], answer: 2, why: "Naanị ụlọ ọrụ na-enye asambodo ahụ nwere ike ịgwa gị ezi iwu na ule ya." }
          ]
        },
        {
          title: "Otu ụgwọ si aga: usoro ịkwụ ụgwọ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tinye nzọụkwụ usoro ịkwụ ụgwọ n'usoro, site n'ịhazi oge ruo n'ịkwụ ụgwọ.",
          text: [
            "Usoro ịkwụ ụgwọ (billing cycle), nke a na-akpọkwa revenue cycle, bụ ụzọ site n'oge onye ọrịa hazịrị nleta ruo n'oge a kwụchara ọfịs ahụ ụgwọ niile.",
            "Nzọụkwụ ndị bụ isi: 1) Hazie oge nleta ma lelee inshọransị. 2) Debanye onye ọrịa (check-in): kwado aha ya, ụbọchị ọmụmụ ya na kaadị inshọransị ya. 3) Dọkịta na-ahụ onye ọrịa ma na-ede ihe. 4) Coder na-agbanwe ihe e dere ka ọ bụrụ koodu. 5) Biller na-eme claim ma na-elele ya. 6) A na-ezigara ụlọ ọrụ inshọransị claim ahụ. 7) Ụlọ ọrụ inshọransị na-akwụ ụgwọ, na-akwụ akụkụ, ma ọ bụ na-ajụ ya, ma na-ezite nkọwa. 8) Ọfịs na-arịọ onye ọrịa ka ọ kwụọ ihe o ji, dị ka copay, ma na-eso ihe ọ bụla a na-akwụbeghị.",
            "Mperi na mmalite usoro na-akpata nsogbu ma emechaa. Nọmba inshọransị ezighi ezi n'oge check-in nwere ike ime ka a jụ claim izu ole na ole ka e mesịrị. Ọ bụ ya mere check-in a kpachaara anya ji dị mkpa dị ka coding a kpachaara anya."
          ],
          steps: ["Hazie oge ma lelee inshọransị.", "Debanye onye ọrịa ma kwado ozi ya.", "Dọkịta na-ahụ onye ọrịa ma na-ede ihe.", "De koodu maka nleta ahụ.", "Mee claim ma lelee ya.", "Zipu claim ahụ.", "Gụọ ụgwọ a kwụrụ ma ọ bụ ịjụ ahụ.", "Rịọ onye ọrịa ka ọ kwụọ òkè ya ma soro ya."],
          words: [["Usoro ịkwụ ụgwọ (billing cycle / revenue cycle)", "nzọụkwụ niile site n'ịhazi nleta ruo n'ịnata ụgwọ niile."], ["Copay", "ego a kara aka onye ọrịa na-akwụ maka nleta."], ["Deductible", "ego onye ọrịa na-akwụ kwa afọ tupu inshọransị amalite ịkwụ maka ọtụtụ ọrụ."], ["Payer", "ụlọ ọrụ inshọransị ma ọ bụ mmemme gọọmentị na-akwụ claim."], ["Ịjụ (denial)", "mgbe payer jụrụ ịkwụ claim."]],
          slides: [
            { title: "Site n'ịhazi oge ruo n'ịkwụ ụgwọ", bullets: ["A na-akpọ ya billing cycle ma ọ bụ revenue cycle", "Nzọụkwụ ọ bụla na-emetụta ịnata ụgwọ"] },
            { title: "Mmalite usoro", bullets: ["1. Hazie oge ma lelee inshọransị", "2. Check-in: aha, ụbọchị ọmụmụ, kaadị inshọransị", "3. Dọkịta na-ahụ onye ọrịa ma na-ede ihe"] },
            { title: "Etiti usoro", bullets: ["4. De koodu maka nleta", "5. Mee claim ma lelee ya", "6. Zigara payer ya"] },
            { title: "Njedebe usoro", bullets: ["7. Payer na-akwụ, na-akwụ akụkụ ma ọ bụ na-ajụ", "8. Rịọ onye ọrịa ka ọ kwụọ òkè ya ma soro ya", "Mperi mbụ na-ebute ịjụ ma emechaa"] }
          ],
          tryIt: "Dee nzọụkwụ asatọ nke usoro ịkwụ ụgwọ n'obere mpempe akwụkwọ asatọ. Gwakọta ha, mgbe ahụ tinyeghachi ha n'usoro n'elegharaghị anya. N'akụkụ nzọụkwụ ọ bụla, dee otu mperi nwere ike ime ebe ahụ, dịka ọmụmaatụ aha e dehiere n'oge check-in.",
          youCanNow: "ịkpọ nzọụkwụ usoro ịkwụ ụgwọ n'usoro na ikwu otu mperi mbụ nwere ike isi kpata ịjụ ma emechaa.",
          quickCheck: [
            { objective: "O2", q: "Kedu nzọụkwụ na-esote ozugbo coder gbanwechara ihe e dere ka ọ bụrụ koodu?", options: ["Ịhazi oge nleta", "Ịdebanye onye ọrịa", "Payer na-ezite ụgwọ", "Biller na-eme claim ma na-elele ya"], answer: 3, why: "Coding na-ebu ụzọ; mgbe ahụ biller na-eji koodu ndị ahụ eme claim ma lelee ya." },
            { objective: "O2", q: "N'oge check-in, e dehiere nọmba inshọransị onye ọrịa. Gịnị kacha nwee ike ime?", options: ["A nwere ike ịjụ claim ahụ ma emechaa", "Ọ dịghị ihe; coder ga-ahụ ya", "A ga-akwụ dọkịta ngwa ngwa", "Copay onye ọrịa ga-ebelata"], answer: 0, why: "Payer na-atụnyere claim na ndekọ ndị otu ya; nọmba ezighi ezi na-ebutekarị ịjụ." }
          ]
        },
        {
          title: "Otu koodu atọ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Jikọọ akụkụ ọ bụla nke nleta na ezi otu koodu ya.",
          text: [
            "Claim na-aza ajụjụ abụọ: gịnị mere onye ọrịa ji bịa, gịnịkwa ka ọfịs mere? Otu koodu dị iche iche na-aza nke ọ bụla.",
            "Koodu ICD-10-CM na-ekwu GỊNỊ MERE: ọrịa, ihe ịrịba ama ma ọ bụ mgbaàmà. Ha na-amalite n'otu mkpụrụedemede, sochie ya nọmba, ma nwee ike inwe ntụpọ, dịka ọmụmaatụ I10 maka ọbara mgbali elu nke a na-amaghị ihe kpatara ya (ihe atụ omume). Na US, National Center for Health Statistics (NCHS) nke CDC na-elekọta ICD-10-CM.",
            "Koodu CPT na-ekwu IHE dọkịta ma ọ bụ onye ọkachamara ọzọ mere: nleta ọfịs, nnwale ụlọ nyocha, usoro ọgwụgwọ. Ha bụ nọmba ise, dịka ọmụmaatụ 36415 maka ịdọta ọbara site na akwara (ihe atụ omume). American Medical Association (AMA) nwe CPT ma na-emelite ya. CMS na-akpọ CPT \"HCPCS Level I\".",
            "Koodu HCPCS Level II na-ekpuchi ihe CPT anaghị ekpuchi, dị ka ngwa, akụrụngwa na njem ụgbọ ndị ọrịa (ambulance). Ha bụ otu mkpụrụedemede na nọmba anọ. CMS (Centers for Medicare & Medicaid Services) na-elekọta ha. A na-emelite otu koodu niile kwa afọ, ya mere jiri akwụkwọ ma ọ bụ ngwa nke afọ a mgbe niile."
          ],
          words: [["Ọrịa a chọpụtara (diagnosis)", "nsogbu ahụike dọkịta chọpụtara ma ọ bụ na-agwọ."], ["ICD-10-CM", "otu koodu maka ọrịa na US."], ["CPT", "otu koodu nọmba ise nke AMA maka ọrụ na usoro ọgwụgwọ; a na-akpọkwa ya HCPCS Level I."], ["HCPCS Level II", "otu koodu CMS maka ngwa, akụrụngwa na ihe ndị ọzọ CPT anaghị ekpuchi; otu mkpụrụedemede na nọmba anọ."], ["CMS", "Centers for Medicare & Medicaid Services, ụlọ ọrụ gọọmentị etiti na-elekọta Medicare ma na-arụkọ ọrụ na steeti maka Medicaid."]],
          slides: [
            { title: "Ajụjụ abụọ claim ọ bụla na-aza", bullets: ["GỊNỊ MERE onye ọrịa ji bịa? (ọrịa)", "GỊNỊ ka ọfịs mere? (ọrụ ma ọ bụ ihe)"] },
            { title: "ICD-10-CM: gịnị mere", bullets: ["Ọrịa, ihe ịrịba ama na mgbaàmà", "Mkpụrụedemede + nọmba, ọtụtụ mgbe ntụpọ: I10", "NCHS nke CDC na-elekọta ya na US"] },
            { title: "CPT: ihe e mere", bullets: ["Ọrụ dọkịta na ndị ọkachamara ndị ọzọ", "Nọmba ise: 36415 (ihe atụ omume)", "AMA nwe ya; a na-akpọkwa ya HCPCS Level I"] },
            { title: "HCPCS Level II: ngwa na ihe ndị ọzọ", bullets: ["Ngwa, akụrụngwa, njem ambulance", "Otu mkpụrụedemede + nọmba anọ", "CMS na-elekọta ya; otu niile na-agbanwe kwa afọ"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (Level I bụ CPT, CMS na-elekọta Level II)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Omume naanị. Maka nleta a e chepụtara echepụta, dee otu koodu maka akụkụ ọ bụla: (1) akpịrị na-afụ ụfụ, (2) nleta ọfịs na dọkịta, (3) nnwale strep ngwa ngwa, (4) ọbara mgbali elu, (5) osisi nkwado ije (crutches) abụọ onye ọrịa na-ebuga n'ụlọ. Azịza: 1 na 4 bụ ICD-10-CM, 2 na 3 bụ CPT, 5 bụ HCPCS Level II.",
          youCanNow: "ikwu otu koodu na-aza ihe mere onye ọrịa ji bịa na nke na-aza ihe e mere, na ijikọ akụkụ nke nleta na ICD-10-CM, CPT ma ọ bụ HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Kedu otu koodu ị na-eji maka ọrịa onye ọrịa?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Koodu zip"], answer: 2, why: "Koodu ICD-10-CM na-ekwu ihe mere onye ọrịa ji bịa: ọrịa, ihe ịrịba ama ma ọ bụ mgbaàmà." },
            { objective: "O3", q: "Onye ọrịa jiri ihe nkwado ije (walker) laa n'ụlọ. Kedu otu koodu na-ekpuchikarị walker ahụ?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "A chọghị koodu ọ bụla"], answer: 0, why: "Akụrụngwa na ngwa CPT anaghị ekpuchi na-eji koodu HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, asambodo na koodu",
        questions: [
          { objective: "O1", q: "Kedu asambodo NHA na-enye maka billing na coding?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "Asambodo billing na coding nke NHA bụ Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "Gịnị bụ usoro ịkwụ ụgwọ (billing cycle)?", options: ["Nzọụkwụ site n'ịhazi nleta ruo n'ịnata ụgwọ niile", "Igwe ịnyịnya (bicycle) maka ndị ọrụ ọfịs", "Usoro oge dọkịta kwa ụbọchị", "Usoro koodu na claim"], answer: 0, why: "Usoro ịkwụ ụgwọ (revenue cycle) na-amalite n'ịhazi oge ruo n'ụgwọ ikpeazụ." },
          { objective: "O2", q: "Payer kwụrụ akụkụ nke claim. Gịnị bụkarị nzọụkwụ na-esote?", options: ["Hichapụ claim ahụ", "Rịọ onye ọrịa ka ọ kwụọ òkè ya ma soro ya", "Gbanwee ọrịa ahụ", "Hazie nleta ọhụrụ"], answer: 1, why: "Mgbe payer kwụrụ òkè ya, ọfịs na-arịọ onye ọrịa ka ọ kwụọ òkè nke ya, dị ka copay ma ọ bụ deductible." },
          { objective: "O3", q: "Kedu ụdị koodu CPT?", options: ["Otu mkpụrụedemede na nọmba anọ", "Mkpụrụedemede, nọmba na ntụpọ", "Nọmba ise", "Okwu nwere mkpụrụedemede iri"], answer: 2, why: "Koodu CPT bụ nọmba ise; ICD-10-CM na-amalite na mkpụrụedemede, HCPCS Level II bụkwa otu mkpụrụedemede na nọmba anọ." },
          { objective: "O3", q: "Onye na-elekọta ICD-10-CM na United States?", options: ["National Center for Health Statistics nke CDC", "American Medical Association", "Ọfịs dọkịta ọ bụla", "Onye were onye ọrịa n'ọrụ"], answer: 0, why: "NCHS nke CDC na-elekọta ụdị ICD-10 nke US, nke a na-akpọ ICD-10-CM." }
        ]
      }
    },
    {
      name: "Isi 2: Koodu, claim na nzuzo",
      lessons: [
        {
          title: "Ịchọ koodu n'ụzọ ziri ezi",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chọọ koodu ọrịa na index ma kwado ya na ndepụta koodu.",
          text: [
            "ICD-10-CM nwere akụkụ abụọ bụ isi. Alphabetic index na-edepụta ọrịa site n'aha ha, dị ka index nke akwụkwọ. Tabular list na-egosi koodu ọ bụla n'usoro, ya na ihe e dere banyere mgbe a ga-eji ya na mgbe a gaghị eji ya.",
            "Iwu ndị coder na-agbaso: buru ụzọ chọta okwu bụ isi na index, mgbe ahụ kwado koodu ahụ na tabular list mgbe niile. Ejila naanị index de koodu, n'ihi na tabular list nwere ike ịsị gbakwunye mkpụrụ ọzọ ma ọ bụ jiri koodu ọzọ.",
            "Chọọ ọrịa ahụ, ọ bụghị akụkụ ahụ. Maka \"acute sore throat\" (akpịrị na-afụ ụfụ na mberede), okwu bụ isi bụ pharyngitis (okwu ahụike maka akpịrị na-afụ ụfụ ma zaa aza). Mgbe ahụ gụọ ihe e dere na tabular list tupu ị họrọ koodu. CPT nwekwara index na ndepụta koodu nke ya, ọ na-arụkwa ọrụ otu ụzọ ahụ.",
            "Omume n'efu: ICD-10-CM Browser Tool nke CDC na-ekwe ka ị chọọ otu koodu ahụ n'ịntanetị. N'ezi ọrụ, ị na-eji akwụkwọ koodu nke afọ a ma ọ bụ ngwa onye were gị n'ọrụ na-akwụ ụgwọ ya, na ihe dọkịta dere, ọ bụghị ịkọ nkọ."
          ],
          steps: ["Gụọ ihe dọkịta dere ma chọta ọrịa ahụ.", "Chọta okwu bụ isi maka ọrịa ahụ na alphabetic index.", "Dee koodu index ahụ na-egosi.", "Gaa na koodu ahụ na tabular list.", "Gụọ ihe e dere: \"includes\", \"excludes\", na ma a chọrọ mkpụrụ ndị ọzọ.", "Họrọ koodu dabara kpọmkwem na ihe e dere."],
          words: [["Alphabetic index", "akụkụ akwụkwọ koodu na-edepụta ọrịa site n'aha, A ruo Z."], ["Tabular list", "akụkụ akwụkwọ koodu na-edepụta koodu ọ bụla n'usoro, ya na iwu maka iji ya."], ["Okwu bụ isi (main term)", "okwu maka ọrịa ahụ ị na-ebu ụzọ chọọ, ọ bụghị akụkụ ahụ."], ["Ịdị kpọmkwem (specificity)", "otu koodu si dị kpọmkwem; ndị coder na-eji koodu kacha dị kpọmkwem nke ihe dọkịta dere kwadoro."]],
          slides: [
            { title: "Akụkụ abụọ nke akwụkwọ koodu", bullets: ["Alphabetic index: ọrịa A ruo Z", "Tabular list: koodu ọ bụla n'usoro, ya na iwu"] },
            { title: "Iwu nzọụkwụ abụọ", bullets: ["1. Chọta okwu bụ isi na index", "2. Kwado koodu ahụ na tabular list", "Ejila naanị index de koodu"] },
            { title: "Chọọ ọrịa ahụ", bullets: ["Okwu bụ isi = ọrịa ahụ, ọ bụghị akụkụ ahụ", "Gụọ ihe e dere \"includes\" na \"excludes\"", "Jiri koodu kacha dị kpọmkwem ihe e dere kwadoro"] },
            { title: "Mee omume n'efu", bullets: ["ICD-10-CM Browser Tool nke CDC", "N'ọrụ: akwụkwọ nke afọ a ma ọ bụ ngwa onye were gị n'ọrụ", "Jiri ihe dọkịta dere de koodu, ọ bụghị ịkọ nkọ"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM na ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Omume naanị. Meghee ICD-10-CM Browser Tool nke CDC site na njikọ isi iyi. Chọọ ọrịa ndị a e chepụtara echepụta: \"acute pharyngitis\", \"essential hypertension\" na \"type 2 diabetes without complications\". Maka nke ọ bụla, dee okwu bụ isi i chọrọ, koodu i chọtara na otu ihe e dere i gụrụ tupu ị họrọ ya.",
          youCanNow: "ịchọ koodu ọrịa na nzọụkwụ abụọ, index wee tabular list, na ikwu ihe mere ị naghị akwụsị na index.",
          quickCheck: [
            { objective: "O4", q: "I chọtara koodu na alphabetic index. Gịnị ka ị ga-eme ọzọ?", options: ["Tinye ya na claim ozugbo", "Kwado ya na tabular list ma gụọ ihe e dere banyere ya", "Jụọ onye ọrịa ma ọ dị ka ọ ziri ezi", "Họrọ koodu kacha dị mkpụmkpụ dị nso"], answer: 1, why: "Tabular list nwere iwu ma nwee ike ịchọ mkpụrụ ndị ọzọ; ejila naanị index de koodu." },
            { objective: "O4", q: "Ihe e dere na-ekwu \"acute bronchitis\". Kedu okwu bụ isi ị ga-achọ?", options: ["Acute", "Obi (chest)", "Ngụgụ (lungs)", "Bronchitis"], answer: 3, why: "Ị na-achọ ọrịa ahụ (bronchitis), mgbe ahụ chọta \"acute\" n'okpuru ya." }
          ]
        },
        {
          title: "Ijupụta claim na idozi ịjụ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Jupụta igbe ndị bụ isi nke claim 1500 omume ma chọta ihe mere a jụrụ claim.",
          text: [
            "Ọfịs ndị dọkịta na-eji akwụkwọ claim 1500 arịọ ụgwọ, nke National Uniform Claim Committee (NUCC) na-elekọta. Ụdị akwụkwọ e ji eme ihe ugbu a bụ akwụkwọ 02/12. A na-ezipu ọtụtụ claim n'ịntanetị taa, mana claim ịntanetị nwere otu ozi ahụ, ya mere ịmụta akwụkwọ ahụ na-akụziri gị ozi ahụ.",
            "Igbe ndị bụ isi ị ga-amata (omume): Igbe 1a, nọmba ID onye nwere inshọransị site na kaadị inshọransị. Igbe 2, aha onye ọrịa. Igbe 21, koodu ọrịa, e dere A, B, C na ndị ọzọ. Igbe 24, ahịrị ọrụ: ụbọchị ọrụ (24A), koodu CPT ma ọ bụ HCPCS (24D), diagnosis pointer na-ejikọ ọrụ ahụ na mkpụrụedemede ọrịa na Igbe 21 (24E) na ụgwọ (24F). Igbe 33, onye na-eme billing (billing provider).",
            "Tupu claim apụọ, lelee ya: ezi onye ọrịa na ID, ọrụ ọ bụla nwere diagnosis pointer, koodu bụ nke afọ a, ụbọchị na ụgwọ dabara na nleta. Ijide mperi ugbu a dị ọnụ ala karịa idozi ịjụ ma emechaa.",
            "Mgbe a jụrụ claim, payer na-ezite remittance (nkọwa nke ụgwọ) nwere ihe kpatara ya. Ihe ndị na-akpatakarị ya: ID ma ọ bụ aha ezighi ezi, koodu na-efu efu ma ọ bụ nke na-adịghị mma, ọrụ a na-ekpuchighị, prior authorization na-efu efu, claim e zigara ugboro abụọ, ma ọ bụ e zigara ya n'oge gafere. Chọta ihe kpatara ya, dozie ya, ma zighachi ya ma ọ bụ mee mkpesa (appeal) dịka iwu payer si dị."
          ],
          steps: ["Detuo ID onye nwere inshọransị (1a) na aha onye ọrịa (2) kpọmkwem site na kaadị e chepụtara echepụta.", "Dee koodu ọrịa na Igbe 21 dị ka A, B, C.", "N'ahịrị ọrụ ọ bụla na Igbe 24, dee ụbọchị, koodu CPT ma ọ bụ HCPCS, diagnosis pointer na ụgwọ.", "Jupụta billing provider (33).", "Lelee claim ahụ site na ndepụta nlele gị tupu izipu.", "Ọ bụrụ na a jụrụ ya, gụọ ihe kpatara ya, dozie ya ma zighachi ya dịka iwu payer si dị."],
          words: [["Akwụkwọ claim 1500", "akwụkwọ claim a kara aka maka ọfịs ndị dọkịta, nke NUCC na-elekọta."], ["Diagnosis pointer", "mkpụrụedemede n'ahịrị ọrụ (A, B, C) na-ejikọ ya na ọrịa na Igbe 21."], ["Remittance (EOB ma ọ bụ ERA)", "nkọwa payer banyere ihe ọ kwụrụ ma ọ bụ jụrụ, na ihe kpatara ya."], ["Prior authorization", "nkwado site na payer tupu e mee ụfọdụ ọrụ."], ["Clean claim", "claim na-enweghị mperi, nke mere na a ga-akwụ ya na nke mbụ."]],
          slides: [
            { title: "Akwụkwọ claim 1500", bullets: ["NUCC na-elekọta ya; ụdị akwụkwọ 02/12", "Claim ịntanetị nwere otu ozi ahụ"] },
            { title: "Igbe ndị bụ isi (omume)", bullets: ["1a: ID onye nwere inshọransị  •  2: aha onye ọrịa", "21: koodu ọrịa A, B, C...", "24: ụbọchị, koodu, pointer, ụgwọ  •  33: billing provider"] },
            { title: "Lelee tupu i zipu", bullets: ["Ezi onye ọrịa na ID", "Ahịrị ọrụ ọ bụla nwere pointer", "Koodu nke afọ a; ụbọchị na ụgwọ dabara"] },
            { title: "Ihe na-akpatakarị ịjụ", bullets: ["ID ma ọ bụ aha ezighi ezi; koodu na-efu efu ma ọ bụ nke na-adịghị mma", "A na-ekpuchighị ya; enweghị prior authorization", "E zigara ugboro abụọ ma ọ bụ n'oge gafere: dozie, wee zighachi"] }
          ],
          sources: [
            { name: "NUCC: Akwụkwọ claim 1500", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Omume naanị. Onye ọrịa e chepụtara echepụta: Sam Rivera, ID inshọransị ABC123456. Nleta n'ụbọchị ị họọrọ: nleta ọfịs (99213) maka akpịrị na-afụ ụfụ (J02.9) ya na nnwale strep ngwa ngwa (87880), ụgwọ $100 na $25 (e chepụtara echepụta). N'akwụkwọ ma ọ bụ na spreadsheet, jupụta Igbe 1a, 2, 21, 24 (ahịrị abụọ) na 33 (\"Practice Clinic\"). Mgbe ahụ claim ahụ alọghachi: \"invalid member ID\". Dee ihe ị ga-elele na ihe ị ga-edozi.",
          youCanNow: "ijupụta igbe ndị bụ isi nke claim omume, ịlele ya tupu ọ pụọ, na ịchọta na idozi ihe kpatara ịjụ.",
          quickCheck: [
            { objective: "O5", q: "Ebee ka koodu ọrịa na-aga n'akwụkwọ 1500?", options: ["Igbe 2", "Igbe 33", "Igbe 21", "Igbe 1a"], answer: 2, why: "Igbe 21 na-ejide koodu ọrịa, e dere A, B, C na ndị ọzọ." },
            { objective: "O5", q: "A jụrụ claim na \"service requires prior authorization\". Gịnị na-efu efu?", options: ["Nkwado payer tupu ọrụ ahụ", "Aha etiti onye ọrịa", "Mbipụta nke abụọ nke claim", "Mbinye aka dọkịta n'akwụkwọ ndekọ"], answer: 0, why: "Prior authorization bụ nkwado payer tupu ụfọdụ ọrụ; n'enweghị ya, a na-ajụ claim ahụ." }
          ]
        },
        {
          title: "Ichebe ozi nzuzo onye ọrịa, na claim omume gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kọrọ naanị ndị chọrọ ya ozi onye ọrịa, na naanị ihe ha chọrọ.",
          text: [
            "Ndị biller na coder na-ahụ ozi ahụike nzuzo kwa ụbọchị: aha, ụbọchị ọmụmụ, ọrịa, nọmba inshọransị. HIPAA bụ iwu gọọmentị etiti na-echebe ya. Privacy Rule ya na-ekpuchi atụmatụ ahụike, ọtụtụ ọfịs dọkịta na ụlọ ọgwụ, na ụlọ ọrụ na-arụrụ ha ọrụ, dị ka ụlọ ọrụ billing.",
            "Protected health information (PHI) bụ ozi ahụike ọ bụla nwere ike igosi onye mmadụ bụ. Iwu \"minimum necessary\" (naanị ihe kacha nta dị mkpa) pụtara na ị na-eji ma na-ekesa naanị ihe ọrụ ahụ chọrọ. Payer nwere ike ịchọ koodu ọrịa na claim; onye ọrụ ibe gị n'ọnụ ụlọ ezumike achọghị ịnụ ya.",
            "Omume kwa ụbọchị: kpọchie ihuenyo gị mgbe ị na-apụ, ekwula maka ndị ọrịa n'ihu ọha, kwado onye ọ bụla na-akpọ oku, zipu claim naanị site na sistemụ a kwadoro, ma ezitela PHI site na email ma ọ bụ ozi ederede nke onwe gị. Ọ bụrụ na ị hụ mperi nzuzo, gwa onye isi gị ma ọ bụ privacy officer ozugbo.",
            "Ugbu a, jikọta ihe niile n'ọrụ ikpeazụ gị: claim omume zuru ezu na atụmatụ asambodo gị."
          ],
          steps: ["Tupu ị kọọ, jụọ: onye a nwere ihe ọrụ mere o ji kwesị ịma?", "Kọọ naanị ihe kacha nta ha chọrọ.", "Kwado onye na-akpọ oku tupu i nye ihe ọ bụla.", "Kpọchie ihuenyo gị ma jiri naanị sistemụ a kwadoro.", "Kọọrọ onye isi gị ma ọ bụ privacy officer mperi nzuzo."],
          words: [["HIPAA", "iwu gọọmentị etiti na-echebe nzuzo na nchekwa ozi ahụike."], ["PHI", "protected health information: ozi ahụike nwere ike igosi onye mmadụ bụ."], ["Minimum necessary", "echiche HIPAA nke iji ma ọ bụ ikesa naanị ozi ọrụ ahụ chọrọ."], ["Privacy officer", "onye n'ebe ọrụ na-ahụ maka iwu nzuzo na akụkọ."]],
          slides: [
            { title: "HIPAA na-echebe ndị ọrịa", bullets: ["Iwu nzuzo gọọmentị etiti maka ozi ahụike", "Na-ekpuchi atụmatụ ahụike, ọtụtụ dọkịta na ụlọ ọrụ billing ha"] },
            { title: "Minimum necessary", bullets: ["Kọọ naanị ndị chọrọ ya maka ọrụ", "Kọọ naanị ihe ha chọrọ"] },
            { title: "Omume kwa ụbọchị", bullets: ["Kpọchie ihuenyo gị", "Ekwula maka ndị ọrịa n'ihu ọha", "Kwado onye na-akpọ oku", "Naanị sistemụ a kwadoro, ọ dịghị mgbe email nke onwe gị"] },
            { title: "Ọrụ ikpeazụ", bullets: ["Mechaa claim omume ahụ", "Lelee ya site na ndepụta nlele gị tupu izipu", "Dee atụmatụ asambodo gị nwere ụbọchị"] }
          ],
          sources: [
            { name: "HHS: HIPAA maka ndị ọkachamara (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Ọrụ ikpeazụ, omume naanị. Nleta e chepụtara echepụta: Ana Lee, ID inshọransị XYZ987654, hụrụ dọkịta (99213) maka ọbara mgbali elu (I10) ma e si n'akwara dọta ya ọbara (36415); ụgwọ e chepụtara echepụta $100 na $15. Jupụta claim 1500 omume (Igbe 1a, 2, 21, 24, 33), lelee ya site na ndepụta nlele tupu izipu nke gị onwe gị dere, ma tinye atụmatụ otu peeji: asambodo gị, ebe ị ga-amụ ihe, na ụbọchị ule ị chọrọ. Ejila ezi ozi onye ọrịa ọ bụla.",
          youCanNow: "ichebe ozi onye ọrịa site n'iwu minimum necessary na ịgbanwe nleta e chepụtara echepụta ka ọ bụrụ claim omume zuru ezu, nke e lelere.",
          quickCheck: [
            { objective: "O6", q: "Onye na-akpọ oku sị na ya bụ nwanne nwanyị onye ọrịa ma jụọ maka ọrịa ya. Gịnị ka ị ga-eme?", options: ["Gụọrọ ya ọrịa ahụ ka i nyere aka", "Zitere ya ya n'ozi ederede ma emechaa", "Gwa ya naanị koodu ọrịa", "Soro iwu ọfịs gị kwado onye nwere ike ịnata ozi; ekesala ya"], answer: 3, why: "HIPAA na-egbochi onye nwere ike ịnata PHI; ị na-agbaso iwu ọfịs gị ma kesaghị ihe ọ bụla ruo mgbe i kwadoro." },
            { objective: "O6", q: "Gịnị ka \"minimum necessary\" pụtara?", options: ["Kesaa naanị ozi ọrụ ahụ chọrọ", "Rụọ ọrụ awa kacha nta o kwere omume", "De naanị otu ọrịa na claim ọ bụla", "Gbaa ọnụ ahịa kacha ala"], answer: 0, why: "N'okpuru HIPAA, ị na-eji ma na-ekesa naanị ozi ọrụ ahụ chọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Koodu, claim na nzuzo",
        questions: [
          { objective: "O4", q: "Gịnị mere ndị coder anaghị eji naanị alphabetic index de koodu?", options: ["Index anaghị adị ọhụrụ mgbe niile", "Index enweghị koodu ọ bụla", "Tabular list nwere iwu ma nwee ike ịchọ mkpụrụ ndị ọzọ", "Ndị payer anaghị anabata koodu index"], answer: 2, why: "Ihe e dere na tabular list nwere ike ịgbanwe koodu ma ọ bụ chọọ mkpụrụ ndị ọzọ." },
          { objective: "O5", q: "Gịnị ka diagnosis pointer na Igbe 24E na-eme?", options: ["Na-egosi adreesị payer", "Na-ejikọ ahịrị ọrụ na ọrịa na Igbe 21", "Na-egosi ụlọ onye ọrịa", "Na-edepụta akwụkwọ ikike dọkịta"], answer: 1, why: "Mkpụrụedemede pointer na-ejikọ ọrụ ọ bụla na ọrịa na-akọwa ya." },
          { objective: "O5", q: "A jụrụ claim dị ka \"duplicate\". Kedu nzọụkwụ mbụ kacha mma?", options: ["Lelee ma e zigaraworị ma ọ bụ kwụọ otu claim ahụ", "Zipu ya ugboro atọ ọzọ", "Gbanwee koodu ka ọ dị iche", "Rịọ onye ọrịa ka ọ kwụọ ihe niile"], answer: 0, why: "Ịjụ duplicate pụtara na payer nwereworị ya; lelee ọnọdụ ya kama izighachi ya." },
          { objective: "O6", q: "Ị chọrọ ịpụ na tebụl gị ma claim dị n'ihuenyo. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ ghere oghe; ị ga-alọta ngwa ngwa", "Rịọ onye ọbịa ka o lekọta ya", "Tụgharịa ihuenyo chee mgbidi ihu", "Kpọchie ihuenyo gị"], answer: 3, why: "Ịkpọchi ihuenyo gị na-egbochi ndị na-ekwesịghị ịhụ PHI." },
          { objective: "O6", q: "Kedu nke bụ protected health information (PHI)?", options: ["Akwụkwọ claim na-enweghị ihe e dere", "Oge ọfịs na-emeghe", "Aha onye ọrịa ya na ọrịa ya", "Aha akwụkwọ koodu"], answer: 2, why: "Ozi ahụike nwere ike igosi onye mmadụ bụ bụ PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ịkwụ Ụgwọ Ahụike na Ide Koodu",
    questions: [
      { objective: "O1", q: "Gịnị ka onye coder ahụike na-eme?", options: ["Na-agbanwe ihe dọkịta dere ka ọ bụrụ koodu a kara aka", "Na-adọta ọbara n'ahụ ndị ọrịa", "Na-ere atụmatụ inshọransị", "Na-edozi kọmputa ọfịs"], answer: 0, why: "Ndị coder na-agbanwe ọrịa na ọrụ sitere n'ihe e dere ka ha bụrụ koodu." },
      { objective: "O1", q: "Ebee ka ị ga-elele ihe a chọrọ na ụgwọ asambodo ugbu a?", options: ["Ozi na soshal midia", "Enyi wereworị ya ọtụtụ afọ gara aga", "Peeji gọọmentị nke ụlọ ọrụ na-enye asambodo ahụ", "Mgbasa ozi ọzụzụ ọ bụla"], answer: 2, why: "Iwu na ụgwọ na-agbanwe; peeji gọọmentị nwere nke ugbu a." },
      { objective: "O1", q: "Kedu ụzọ abụọ ziri ezi?", options: ["CPC site na NHA", "CBCS site na AHIMA", "CCA site na AAPC", "CCA site na AHIMA"], answer: 3, why: "CCA bụ nke AHIMA; CPC bụ nke AAPC; CBCS bụ nke NHA." },
      { objective: "O1", q: "Gịnị ka ihe ọmụmụ a na-enye gị?", options: ["Akwụkwọ ikike coding", "Nkwadebe maka ule asambodo", "Ọrụ e kwere nkwa ya", "Asambodo CPC"], answer: 1, why: "Ihe ọmụmụ a na-akwado gị; asambodo na-abịa naanị site n'ịgafe ule gọọmentị." },
      { objective: "O2", q: "Kedu nzọụkwụ mbụ nke usoro ịkwụ ụgwọ?", options: ["Hazie oge nleta ma lelee inshọransị", "Zipu claim", "Rịọ onye ọrịa ka ọ kwụọ ụgwọ", "De koodu maka nleta"], answer: 0, why: "Usoro ahụ na-amalite mgbe a hazịrị nleta ma lelee inshọransị." },
      { objective: "O2", q: "Kedu nzọụkwụ na-abịa ozugbo tupu izipu claim?", options: ["Check-in onye ọrịa", "Ime claim na ilele ya", "Ịhazi oge", "Ụgwọ payer"], answer: 1, why: "Biller na-eme claim ma lelee ya, wee zipu ya." },
      { objective: "O2", q: "Gịnị bụ copay?", options: ["Mbipụta nke claim", "Ụgwọ si n'aka payer gaa n'aka dọkịta", "Ego a kara aka onye ọrịa na-akwụ maka nleta", "Mperi coding"], answer: 2, why: "Copay bụ ego a kara aka onye ọrịa na-akwụ." },
      { objective: "O3", q: "Onye ọrịa bịara na ụkwara. Kedu otu koodu na-akọwa ụkwara ahụ?", options: ["CPT", "HCPCS Level II", "Ọ dịghị", "ICD-10-CM"], answer: 3, why: "Ihe ịrịba ama, mgbaàmà na ọrịa na-eji ICD-10-CM." },
      { objective: "O3", q: "Onye nwe ma na-emelite otu koodu CPT?", options: ["American Medical Association", "Onye were onye ọrịa n'ọrụ", "Steeti ọ bụla", "NUCC"], answer: 0, why: "AMA nwe CPT; CMS na-akpọ ya HCPCS Level I." },
      { objective: "O3", q: "Kedu koodu yiri koodu HCPCS Level II?", options: ["99213", "I10", "E0100 (ihe atụ omume)", "36415"], answer: 2, why: "Koodu HCPCS Level II bụ otu mkpụrụedemede, sochie ya nọmba anọ." },
      { objective: "O3", q: "Ugboro ole ka otu koodu na-agbanwe?", options: ["Ọ dịghị mgbe", "Kwa afọ", "Kwa afọ 50", "Naanị mgbe dọkịta rịọrọ"], answer: 1, why: "A na-emelite otu koodu kwa afọ, ya mere ndị coder na-eji akwụkwọ ma ọ bụ ngwa nke afọ a." },
      { objective: "O4", q: "N'akwụkwọ koodu, kedu akụkụ na-edepụta ọrịa site na A ruo Z?", options: ["Alphabetic index", "Tabular list", "Akwụkwọ claim", "Remittance"], answer: 0, why: "Alphabetic index na-edepụta ọrịa site n'aha ha." },
      { objective: "O4", q: "Dọkịta dere \"chronic sinusitis\". Gịnị ka ị ga-ebu ụzọ chọọ?", options: ["Chronic", "Imi", "Sinusitis", "Isi"], answer: 2, why: "Chọọ ọrịa ahụ (sinusitis), mgbe ahụ okwu \"chronic\" n'okpuru ya." },
      { objective: "O4", q: "Kedu ngwa gọọmentị n'efu maka ime omume ịchọ ICD-10-CM?", options: ["Ebe mkparịta ụka coding ọ bụla", "Nnwale na soshal midia", "Akwụkwọ claim 1500", "ICD-10-CM Browser Tool nke CDC"], answer: 3, why: "NCHS nke CDC na-enye ICD-10-CM Browser Tool n'efu." },
      { objective: "O5", q: "Ebee ka nọmba ID onye nwere inshọransị na-aga n'akwụkwọ 1500?", options: ["Igbe 21", "Igbe 1a", "Igbe 24F", "Igbe 33"], answer: 1, why: "Igbe 1a na-ejide nọmba ID onye nwere inshọransị site na kaadị inshọransị." },
      { objective: "O5", q: "Onye na-elekọta akwụkwọ claim 1500?", options: ["National Uniform Claim Committee (NUCC)", "Onye ọrịa", "AMA", "Dọkịta ọ bụla"], answer: 0, why: "NUCC na-elekọta akwụkwọ claim 1500." },
      { objective: "O5", q: "Gịnị bụ \"clean claim\"?", options: ["Claim e bipụtara n'akwụkwọ ọhụrụ", "Claim na-enweghị ụgwọ", "Claim na-enweghị mperi nke a ga-akwụ na nke mbụ", "Claim e zigara site na email"], answer: 2, why: "Clean claim enweghị mperi, ya mere payer nwere ike ịkwụ ya na nke mbụ." },
      { objective: "O5", q: "Gịnị ka remittance (EOB ma ọ bụ ERA) na-agwa gị?", options: ["Adreesị ụlọ onye ọrịa", "Usoro oge echi", "Nọmba akwụkwọ ikike dọkịta", "Ihe payer kwụrụ ma ọ bụ jụrụ, na ihe kpatara ya"], answer: 3, why: "Remittance na-akọwa ụgwọ ma ọ bụ ịjụ ma na-enye ihe kpatara ya." },
      { objective: "O6", q: "Onye ọrụ ibe gị nọ n'ezumike jụrụ ihe na-eme onye ọrịa i dere koodu ya. Gịnị ka ị ga-eme?", options: ["Gwa ya; ọ na-arụkwa ọrụ ebe a", "Ekesala; o nweghị ihe ọrụ mere o ji kwesị ịma", "Gwa ya na nzuzo nwayọọ", "Gosi ya claim ahụ"], answer: 1, why: "N'okpuru iwu minimum necessary, PHI na-aga naanị n'aka ndị chọrọ ya maka ọrụ ha." },
      { objective: "O6", q: "Kedu omume na-echebe PHI?", options: ["Iziga claim site na email nke onwe gị", "Ikwu maka ndị ọrịa n'ime ụgbọ ala ọha", "Iji naanị sistemụ ọrụ a kwadoro ezipu claim", "Ịhapụ claim n'elu igwe mbipụta"], answer: 2, why: "Sistemụ a kwadoro na-echebe PHI; email nke onwe gị na okwu n'ihu ọha anaghị echebe ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ asambodo", objective: "O1", notYet: "Akpọghị aha asambodo ọ bụla, ma ọ bụ e chere ihe a chọrọ kama ilele ya.", meets: "Na-akpọ aha otu asambodo na onye na-enye ya, ya na ihe a chọrọ na ụbọchị ule e si na peeji gọọmentị were.", exceeds: "Na-edepụtakwa mmemme ọzụzụ, ụbọchị ọmụmụ kwa izu na ihe mgbasa ozi ọrụ dị nso na-arịọ." },
      { name: "Ezi otu koodu", objective: "O3", notYet: "E jiri CPT de koodu ọrịa, ma ọ bụ jiri ICD-10-CM de koodu ọrụ.", meets: "Ọrịa ahụ na-eji ICD-10-CM, ọrụ ọ bụla na-ejikwa CPT.", exceeds: "Nwere ike ịkọwa ihe mere koodu ọ bụla ji dị n'otu koodu ya." },
      { name: "E chọrọ koodu n'ụzọ ziri ezi", objective: "O4", notYet: "E detuuru koodu n'elelighị ha, ma ọ bụ were ha naanị site na index.", meets: "E chọtara ọrịa ọ bụla na index ma kwado ya na tabular list (ma ọ bụ ngwa CDC).", exceeds: "Na-edekọ okwu bụ isi e chọrọ na otu iwu e gụrụ maka koodu ọ bụla." },
      { name: "E jupụtara igbe claim", objective: "O5", notYet: "Igbe na-efu efu, ma ọ bụ ID, koodu ma ọ bụ ụgwọ adabaghị na nleta.", meets: "E jupụtara Igbe 1a, 2, 21, 24 na 33 ma ha dabara na nleta; ahịrị ọrụ ọ bụla nwere pointer.", exceeds: "Gụnyere ndepụta nlele tupu izipu e dere ede nke jidere opekata mpe otu mperi e tinyere n'ime ya." },
      { name: "Usoro ịkwụ ụgwọ na nsochi", objective: "O2", notYet: "Enweghị ike ikwu ihe na-eme mgbe e zigachara claim.", meets: "Na-ekwu nzọụkwụ site n'izipu ruo n'ịkwụ ụgwọ, na ihe a ga-eme ma a jụ ya.", exceeds: "Na-akpọ aha ihe abụọ na-akpata ịjụ na otu esi edozi nke ọ bụla." },
      { name: "E debere nzuzo", objective: "O6", notYet: "Na-eji ezi ozi onye ọrịa, ma ọ bụ na-ekesa PHI nye onye na-achọghị ya.", meets: "Na-eji naanị ozi e chepụtara echepụta ma na-edebe claim ahụ na nzuzo.", exceeds: "Na-edepụta omume kwa ụbọchị atọ na-echebe PHI n'ebe ọrụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha na mmemme ọzụzụ billing na coding ma ọ bụ debanye aha maka ule asambodo n'ime ụbọchị 90",
      "Ndị na-amụ ihe gafere ule CBCS, CPC ma ọ bụ CCA (ha n'onwe ha kọrọ)",
      "Ndị na-amụ ihe e were n'ọrụ billing, coding, ọnụ ụzọ ọfịs (front desk) ma ọ bụ ndebanye aha ndị ọrịa n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji asambodo gọọmentị na ICD-10-CM Browser Tool nke CDC",
      "Akwụkwọ na pen, ma ọ bụ spreadsheet n'efu (Google Sheets ma ọ bụ Excel), maka claim omume",
      "Ọdịdị akwụkwọ claim 1500 omume e bipụtara ma ọ bụ e sere ese (igbe 1a, 2, 21, 24, 33)",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge mkpụmkpụ"
    ],
    facilitatorNotes: [
      "Mesie ike na koodu niile n'ihe ọmụmụ a bụ ihe atụ omume; hụ na ndị na-amụ ihe maara na koodu na-agbanwe kwa afọ.",
      "Ejila ezi ndekọ ndị ọrịa ma ọ bụ ezi kaadị inshọransị na klas; jiri naanị ndị ọrịa e chepụtara echepụta.",
      "Bute mbipụta mgbasa ozi ọrụ dị nso ka ndị na-amụ ihe hụ asambodo ndị were mmadụ n'ọrụ na-arịọ.",
      "Tinye otu mperi (ID ezighi ezi ma ọ bụ pointer na-efu efu) na claim ihe atụ ma hapụ otu dị iche iche ka ha chọta ya.",
      "Jiri rubric tụọ ọrụ ikpeazụ ma nye nzaghachi n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Ndị na-amụ ihe nwere ndekọ mpụ: gwa ha ka ha jụọ ụlọ ọrụ asambodo na mmemme ọzụzụ ọ bụla maka iwu nke ya, ma lelee ihe ọrụ chọrọ na steeti ha."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of shared/pharmacy-technician-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Safety: no real doses or dosing advice. All prescriptions and math problems use made-up drugs ("Drug X") and are marked practice only.

module.exports = {
  id: "pharmacy-technician-prep-ig",
  lang: "ig",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Nkwadebe Onye Enyemaka Ụlọ Ọgwụ (Pharmacy Technician)",
  skills: "Ịhọrọ asambodo na ịlele iwu steeti gị, Ịgụ akwụkwọ ọgwụ (prescription), Mgbakọ ọgwụ maka omume, Nlele nchekwa ọgwụ, Ịmara ihe na-aga n'aka onye pharmacist, Ichebe ozi nzuzo ndị ọrịa (HIPAA)",
  outcome: "ide atụmatụ ọmụmụ na ule nke gị maka ule onye enyemaka ụlọ ọgwụ, ma gosi nka ndị bụ isi ule ahụ na-anwale: ịgụ akwụkwọ ọgwụ omume, ịza mgbakọ ọgwụ omume, ime nlele nchekwa onye enyemaka na-eme, iziga ajụjụ gbasara ahụike n'aka onye pharmacist, na idebe ozi ndị ọrịa na nzuzo.",
  about: [
    "Ndị enyemaka ụlọ ọgwụ (pharmacy technicians) na-enyere ndị pharmacist aka n'ụlọ ahịa ọgwụ, n'ụlọ ọgwụ ukwu (hospital), n'ụlọ ọgwụ na-eziga ọgwụ site na post, na n'ụlọ ọgwụ obodo. Ha na-anabata akwụkwọ ọgwụ, tinye ha na kọmputa, gụọ ọgwụ ma tinye ya aha, lekọta ngwaahịa ma nyere ndị ahịa aka. Ọtụtụ steeti na-achọ ka ndị enyemaka debanye aha n'ụlọ ọrụ steeti na-ahụ maka ụlọ ọgwụ (state board of pharmacy), ọtụtụ ndị were mmadụ n'ọrụ na-arịọkwa asambodo mba.",
    "Ihe ọmụmụ a na-akwado gị maka ụzọ ahụ. Ị ga-atụnyere asambodo mba abụọ ahụ (CPhT nke PTCB, nke a na-enweta site n'ịgafe ule PTCE, na CPhT nke NHA, nke a na-enweta site n'ịgafe ule ExCPT), lelee iwu steeti gị, gụọ akwụkwọ ọgwụ omume, mee mgbakọ ọgwụ omume, mụta nlele nchekwa na iwu gọọmentị etiti (federal) onye enyemaka na-agbaso, ma chebe ozi nzuzo ndị ọrịa n'okpuru HIPAA.",
    "Ihe ọmụmụ a anaghị enye gị asambodo ma ọ bụ debanye aha gị, ọ dịghịkwa mgbe ọ na-enye ndụmọdụ ahụike. Akwụkwọ ọgwụ na mgbakọ ọ bụla bụ ihe e chepụtara echepụta, e dekwara na ọ bụ naanị maka omume. Ajụjụ ndị ọrịa gbasara ọgwụ na-aga mgbe niile n'aka onye pharmacist.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ. Obere nnwale na-eso nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ. Ọrụ ikpeazụ gị bụ atụmatụ ọmụmụ na ule nke gị, ya na akwụkwọ omume."
  ],
  finalTask: "Dee atụmatụ ọmụmụ na ule nke gị maka ọrụ onye enyemaka ụlọ ọgwụ: kpọọ aha ule ị ga-ede (PTCE ma ọ bụ ExCPT), ihe state board of pharmacy gị na-achọ, na ụbọchị ọmụmụ kwa izu ruo ụbọchị ule ị chọrọ. Tinye akwụkwọ omume: akwụkwọ ọgwụ 5 e chepụtara echepụta nke ị gụrụ ma lelee, mgbakọ omume 10 nwere usoro ọrụ gị, na ndepụta ajụjụ ndị ahịa 5 ị ga-eziga n'aka onye pharmacist.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-achọ ọrụ ahụike kwụsiri ike n'enweghị ogologo agụmakwụkwọ: ndị na-achọ ọrụ, ndị ntorobịa, ndị si mba ọzọ bịa, ndị agha mbụ (veterans) na ndị okenye na-alọghachi ịmụ ihe. Ụfọdụ na-arụlarị ọrụ n'ụlọ ahịa. Ọtụtụ arụbeghị ọrụ n'ụlọ ọgwụ mgbe ọ bụla.",
    startingPoint: "Ha nwere ike ịgụ bekee kwa ụbọchị, mee mgbakọ dị mfe na igwe mgbakọ (calculator), ma jiri ekwentị ma ọ bụ kọmputa ọba akwụkwọ. Ọtụtụ amaghị aha ọgwụ, mkpụrụ okwu nkenke dị n'akwụkwọ ọgwụ, mgbakọ ọgwụ ma ọ bụ iwu ụlọ ọgwụ.",
    gap: "Ọrụ na ule onye enyemaka ụlọ ọgwụ na-atụ anya ịgụ akwụkwọ ọgwụ nke ọma, mgbakọ a kpachapụrụ anya, nlele nchekwa, ịmara iwu gọọmentị etiti na nke steeti, na idebe nzuzo nke ọma. Mperi nwere ike imerụ ndị ọrịa ahụ. Ndị na-amụ ihe kwesịrị ịmata ụzọ asambodo na iwu steeti ha, ma mee omume nka ndị a n'enweghị ihe egwu tupu ọzụzụ ma ọ bụ ule.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ụlọ ọgwụ ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ na igwe mgbakọ dị mfe ezuola",
      "Nchekwa: enweghị ezi ọgwụ ma ọ bụ ndụmọdụ ọgwụ; ọgwụ na nọmba niile bụ ihe e chepụtara, e dekwara na ọ bụ naanị maka omume",
      "Iwu dị iche site na steeti gaa na steeti: ndị na-amụ ihe na-elele state board of pharmacy nke ha",
      "Asambodo na ndebanye aha steeti nwere ike ịjụ gbasara ndekọ mpụ; ndị na-amụ ihe na-elele iwu gọọmentị",
      "Nzuzo: enweghị ezi ozi onye ọrịa n'ọrụ ọ bụla"
    ],
    prerequisites: "Mgbakọ dị mfe: ọkara (fractions), ntụpọ (decimals) na ịmụba. \"Health Literacy\" na-enye aka mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji peeji gọọmentị nke PTCB, NHA na state board of pharmacy", action: "ịtụnyere ule mba abụọ maka ndị enyemaka ma dee atụmatụ ọmụmụ na ule dabara n'iwu steeti gị", standard: "ma lelee ihe ọ bụla a chọrọ na peeji gọọmentị" },
    { id: "O2", condition: "Mgbe e nyere gị akwụkwọ ọgwụ e chepụtara echepụta", action: "ịkpọ aha akụkụ ya ma dee ntụziaka ya ọzọ n'okwu dị mfe", standard: "ma nweta opekata mpe 4 n'ime akwụkwọ ọgwụ omume 5 ziri ezi kpamkpam" },
    { id: "O3", condition: "Mgbe e nyere gị mgbakọ naanị maka omume nwere nọmba e chepụtara na igwe mgbakọ dị mfe", action: "ịza mgbakọ ọgwụ gbasara ngbanwe nha, ọnụọgụ na ụbọchị ole ọgwụ ga-ezu", standard: "ma nweta opekata mpe 8 n'ime 10 ziri ezi, na-egosi usoro ọrụ" },
    { id: "O4", condition: "Mgbe e nyere gị iwu ọgwụ omume e mejupụtara na karama ngwaahịa ya", action: "ịlele onye ọrịa, ọgwụ, ike ọgwụ na NDC megide akwụkwọ ọgwụ ma gosi ihe ọ bụla na-adabaghị", standard: "ma hụ ihe ọ bụla na-adabaghị e zoro ezo" },
    { id: "O5", condition: "Mgbe e nyere gị ọnọdụ ụlọ ọgwụ omume", action: "ikewa ọrụ ọ bụla n'ọrụ onye enyemaka ma ọ bụ ọrụ onye pharmacist ma gbasoo iwu ndị ọzọ maka ọgwụ a na-achịkwa (controlled substances)", standard: "ma ziga ajụjụ ahụike ọ bụla n'aka onye pharmacist" },
    { id: "O6", condition: "N'ihu tebụl ụlọ ọgwụ ma ọ bụ n'ekwentị", action: "ikesa ozi onye ọrịa naanị ndị chọrọ ya, ma naanị obere ihe ha chọrọ", standard: "n'ọnọdụ omume ọ bụla, na-agbaso HIPAA" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, akwụkwọ ọgwụ na mgbakọ",
      lessons: [
        {
          title: "Ọrụ ahụ, asambodo na iwu steeti gị",
          objectives: ["O1"],
          minutes: 5,
          goal: "Tụnyere ule PTCE na ExCPT ma chọta iwu steeti gị maka ndị enyemaka.",
          text: [
            "Ndị enyemaka ụlọ ọgwụ na-anabata akwụkwọ ọgwụ, tinye ha na kọmputa, gụọ ọgwụ ma tinye ya aha, lekọta ngwaahịa, nara ego ma nyere ndị ahịa aka. Onye pharmacist na-elele ọrụ ahụ ma zaa ajụjụ ọ bụla gbasara ọgwụ.",
            "E nwere asambodo mba abụọ, ha abụọ na-enye aha Certified Pharmacy Technician (CPhT). PTCB, Pharmacy Technician Certification Board, na-enye ya ndị gafere ule PTCE. Iji ruo eru, ị ga-agụrịrị mmemme ọzụzụ PTCB nabatara ma ọ bụ nwee ahụmahụ ọrụ zuru ezu. NHA, National Healthcareer Association, na-enye ya ndị gafere ule ExCPT, ya na mmemme ọzụzụ ma ọ bụ ahụmahụ ọrụ a na-elekọta.",
            "State board of pharmacy gị (ụlọ ọrụ steeti na-ahụ maka ụlọ ọgwụ) na-ekpebi ihe ndị enyemaka nwere ike ime, na ma ị ga-edebanye aha ma ọ bụ nweta ikike (license) tupu ị rụọ ọrụ. Iwu dị iche nke ukwuu n'etiti steeti. National Association of Boards of Pharmacy (NABP) na-edepụta board ọ bụla nke steeti.",
            "Ụgwọ, ihe e ji ruo eru na iwu ule na-agbanwe, asambodo abụọ ahụ na-arịọkwa gị ka ị kọọ ndekọ mpụ ma ọ bụ ikpe board. Gụọ peeji gọọmentị tupu ị kwụọ ụgwọ. Ihe ọmụmụ a na-akwado gị; ọ naghị enye gị asambodo ma ọ bụ debanye aha gị."
          ],
          steps: ["Meghee peeji CPhT nke PTCB na peeji pharmacy technician nke NHA.", "Dee maka nke ọ bụla: aha ule ahụ, otu esi eru eru na ugboro ole a na-emeghari ya.", "Chọta state board of pharmacy gị na ndepụta NABP.", "Dee ihe steeti gị na-achọ tupu ị rụọ ọrụ dị ka onye enyemaka.", "Họrọ ule gị na ọnwa ị chọrọ ide ya."],
          words: [["Onye enyemaka ụlọ ọgwụ (pharmacy technician)", "onye ọrụ a zụrụ azụ na-enyere onye pharmacist aka ịkwadebe na inye ọgwụ."], ["Pharmacist", "onye ọkachamara nwere ikike na-elele akwụkwọ ọgwụ ma na-adụ ndị ọrịa ọdụ gbasara ọgwụ."], ["CPhT", "Certified Pharmacy Technician, aha PTCB ma ọ bụ NHA na-enye mgbe ule ha gasịrị."], ["State board of pharmacy", "ụlọ ọrụ steeti na-enye ndị pharmacist ikike ma na-edo iwu maka ndị enyemaka."]],
          slides: [
            { title: "Ihe ndị enyemaka na-eme", bullets: ["Ịnabata na ịtinye akwụkwọ ọgwụ", "Ịgụ, itinye aha na idebe ọgwụ", "Inyere ndị ahịa aka; onye pharmacist na-elele ma na-adụ ọdụ"] },
            { title: "Ule mba abụọ", bullets: ["PTCB: ule PTCE", "NHA: ule ExCPT", "Ha abụọ na-enye aha CPhT"] },
            { title: "Steeti gị na-ekpebi", bullets: ["Ndebanye aha ma ọ bụ ikike tupu ị rụọ ọrụ", "Ihe ndị enyemaka nwere ike ime", "Chọta board gị na ndepụta NABP"] },
            { title: "Lelee tupu ị kwụọ ụgwọ", bullets: ["Ụgwọ na iwu na-agbanwe", "Ha abụọ na-ajụ gbasara ndekọ mpụ ma ọ bụ ikpe board", "Ihe ọmụmụ a na-akwado gị; ọ naghị enye asambodo"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: Board ụlọ ọgwụ nke steeti", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Mee tebụl nwere kọlụm abụọ: PTCE na ExCPT. Dejupụta onye na-enye ya, otu esi eru eru na ugboro ole a na-emeghari ya, site na peeji gọọmentị. N'okpuru ya, dee ihe state board of pharmacy gị na-achọ tupu ị rụọ ọrụ dị ka onye enyemaka, na adreesị weebụ ebe ị hụrụ ya.",
          youCanNow: "ikwu ihe ndị enyemaka na-eme, ịkpọ aha ule mba abụọ na ndị na-enye ha, na ịchọta iwu steeti gị maka ndị enyemaka.",
          quickCheck: [
            { objective: "O1", q: "Onye na-enye ule PTCE?", options: ["Ọfịs ụgbọala nke steeti gị", "Ụlọ ahịa ọgwụ ọ bụla", "PTCB, Pharmacy Technician Certification Board", "FDA"], answer: 2, why: "PTCB na-enye PTCE; ịgafe ya na-enweta CPhT nke PTCB." },
            { objective: "O1", q: "Onye na-ekpebi ma ị ga-edebanye aha tupu ị rụọ ọrụ dị ka onye enyemaka?", options: ["State board of pharmacy gị", "Onye njikwa ụlọ ahịa", "Onye ahịa", "Mgbasa ozi ọzụzụ"], answer: 0, why: "State board of pharmacy ọ bụla na-edo iwu ndebanye aha na ọrụ ndị enyemaka." }
          ]
        },
        {
          title: "Ịgụ akwụkwọ ọgwụ (prescription)",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kpọọ aha akụkụ akwụkwọ ọgwụ omume ma dee ntụziaka ya ọzọ n'okwu dị mfe.",
          text: [
            "Akwụkwọ ọgwụ nwere akụkụ a kara aka: aha onye ọrịa na ụbọchị ọmụmụ ya, aha ọgwụ, ike ọgwụ (dịka ọmụmaatụ 10 mg), ụdị ọgwụ (mkpụrụ ọgwụ, capsule, mmiri ọgwụ), ntụziaka (a na-akpọ ya sig), ọnụọgụ, ugboro ole a ga-emeghari ya (refills), ụbọchị, na aha na mbinye aka onye dere ya.",
            "Ntụziaka na-ejikarị mkpụrụ okwu nkenke Latin. Ndị a na-ahụkarị: po (site n'ọnụ), bid (ugboro abụọ n'ụbọchị), tid (ugboro atọ n'ụbọchị), qid (ugboro anọ n'ụbọchị), prn (mgbe ọ dị mkpa), hs (mgbe ị na-aga ihi ụra). Aha dị na karama ga-abụrịrị n'okwu dị mfe, ya mere \"1 tab po bid\" ga-abụ \"Ṅụọ mkpụrụ ọgwụ 1 site n'ọnụ ugboro abụọ n'ụbọchị.\"",
            "Ụfọdụ mkpụrụ okwu nkenke na-ebute mperi, ya mere otu ndị na-ahụ maka nchekwa na-ekwu ka a ghara iji ha. Dịka ọmụmaatụ, e chere na \"QD\" (kwa ụbọchị) bụ \"QID\" (ugboro anọ n'ụbọchị), a gụkwara \"U\" maka units dị ka efu (0). Lezie ntụpọ anya: dee 0.5 mg (nwere efu n'ihu), adịla mgbe ị ga-ede .5 mg, adịkwala mgbe ị ga-ede 5.0 mg (efu n'azụ nwere ike ịgụ dị ka 50).",
            "Ọ bụrụ na ihe ọ bụla edoghị anya, na-efu efu ma ọ bụ yie ka ọ dịghị mma, echela echiche. Gosi ya onye pharmacist."
          ],
          steps: ["Lelee aha onye ọrịa na ụbọchị ọmụmụ ya.", "Chọta aha ọgwụ, ike ya na ụdị ya.", "Gụọ sig ma dee ya ọzọ n'okwu dị mfe.", "Lelee ọnụọgụ, refills, ụbọchị na onye dere ya.", "Gosi onye pharmacist ihe ọ bụla edoghị anya ma ọ bụ na-efu efu."],
          words: [["Sig", "ntụziaka dị n'akwụkwọ ọgwụ na-agwa onye ọrịa otu ọ ga-esi ṅụọ ọgwụ ahụ."], ["Ike ọgwụ (strength)", "ọnụọgụ ọgwụ dị n'otu mkpụrụ, dịka ọmụmaatụ 10 mg n'otu mkpụrụ ọgwụ."], ["Ụdị ọgwụ (dosage form)", "ụdị ọgwụ ahụ: mkpụrụ ọgwụ, capsule, mmiri ọgwụ, ude na ndị ọzọ."], ["Refill", "ikike ịnwetaghachi otu akwụkwọ ọgwụ ahụ ọzọ."], ["Onye dere ọgwụ (prescriber)", "onye nwere ikike dere akwụkwọ ọgwụ ahụ, dị ka dọkịta ma ọ bụ nurse practitioner."]],
          slides: [
            { title: "Akụkụ akwụkwọ ọgwụ", bullets: ["Aha onye ọrịa na ụbọchị ọmụmụ", "Ọgwụ, ike ya na ụdị ya", "Sig, ọnụọgụ, refills, ụbọchị, onye dere ya"] },
            { title: "Mkpụrụ okwu nkenke a na-ahụkarị", bullets: ["po = site n'ọnụ  •  prn = mgbe ọ dị mkpa", "bid = ugboro abụọ n'ụbọchị  •  tid = ugboro atọ", "qid = ugboro anọ  •  hs = mgbe ị na-aga ihi ụra"] },
            { title: "Ide ihe na-ebute mperi", bullets: ["QD nwere ike ịgụ dị ka QID: dee \"daily\" (kwa ụbọchị)", "U nwere ike iyi 0: dee \"units\"", "Dee 0.5 (efu n'ihu), adịla mgbe ị ga-ede 5.0 (efu n'azụ)"] },
            { title: "Mgbe obi abụọ dị", bullets: ["Echela echiche", "Gosi ya onye pharmacist"] }
          ],
          tryIt: "Naanị maka omume, ọgwụ e chepụtara echepụta. Dee sig ọ bụla ọzọ n'okwu dị mfe: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Azịza: (1) Ṅụọ mkpụrụ ọgwụ 1 site n'ọnụ ugboro abụọ n'ụbọchị. (2) Ṅụọ capsule 2 site n'ọnụ mgbe ị na-aga ihi ụra. (3) Ṅụọ mkpụrụ ọgwụ 1 site n'ọnụ awa 6 ọ bụla mgbe ọ dị mkpa. Wee depụta akụkụ ndị na-efu efu n'ederede a: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "ịkpọ aha akụkụ akwụkwọ ọgwụ, ịgụ mkpụrụ okwu nkenke sig a na-ahụkarị, ịhụ ide ihe na-ebute mperi, na igosi onye pharmacist iwu edoghị anya.",
          quickCheck: [
            { objective: "O2", q: "N'omume, gịnị ka \"1 tab po tid\" pụtara?", options: ["Ṅụọ mkpụrụ ọgwụ 1 mgbe ị na-aga ihi ụra", "Ṅụọ mkpụrụ ọgwụ 1 site n'ọnụ ugboro atọ n'ụbọchị", "Ṅụọ mkpụrụ ọgwụ 1 ụbọchị abụọ ọ bụla", "Ṅụọ mkpụrụ ọgwụ 3 otu mgbe"], answer: 1, why: "po pụtara site n'ọnụ, tid pụtakwara ugboro atọ n'ụbọchị." },
            { objective: "O2", q: "Akwụkwọ ọgwụ omume enweghị ntụziaka (sig). Gịnị ka ị ga-eme?", options: ["Dee ntụziaka a na-ahụkarị n'onwe gị", "Hapụ aha ahụ ka ọ tọgbọ chakoo", "Jụọ onye ahịa otu ọ na-esi ṅụọ ya", "Gosi ya onye pharmacist"], answer: 3, why: "A naghị eche echiche maka akụkụ na-efu efu ma ọ bụ edoghị anya; onye pharmacist na onye dere ya na-edozi ya." }
          ]
        },
        {
          title: "Mgbakọ ọgwụ maka omume",
          objectives: ["O3"],
          minutes: 6,
          goal: "Za mgbakọ naanị maka omume gbasara ngbanwe nha, ọnụọgụ na ụbọchị ole ọgwụ ga-ezu.",
          text: [
            "Naanị maka omume: ndị a bụ nọmba e chepụtara maka ịkwadebe ule, ọ bụghị ntụziaka maka ezi onye ọrịa. N'ezi ọrụ, onye pharmacist na-elele mgbakọ ọ bụla.",
            "Ngbanwe ị ga-amara: 1 gram (g) = 1,000 milligrams (mg). 1 liter (L) = 1,000 milliliters (mL). 1 kilogram (kg) ruru ihe dị ka 2.2 pounds (lb). 1 teaspoon (tsp) = 5 mL, 1 tablespoon (tbsp) = 15 mL. 1 fluid ounce ruru ihe dị ka 30 mL.",
            "Ụbọchị ọgwụ ga-ezu (days' supply) na-egosi ogologo oge ọgwụ ahụ ga-eru: ụbọchị = ọnụọgụ ÷ ihe a na-eji kwa ụbọchị. Omume: Drug X, mkpụrụ ọgwụ 1 ugboro abụọ n'ụbọchị, mkpụrụ ọgwụ 60. Ihe a na-eji kwa ụbọchị = 2. 60 ÷ 2 = ụbọchị 30. Ọnụọgụ na-aga n'ụzọ nke ọzọ: ọnụọgụ = ihe kwa ụbọchị × ụbọchị. Omume: Drug Y, capsule 1 ugboro atọ n'ụbọchị maka ụbọchị 10 = 3 × 10 = capsule 30.",
            "Dee nha (units) mgbe niile, hazie mgbakọ ahụ tupu ị pịa igwe mgbakọ, ma lelee ma azịza ahụ nwere isi. Ọgwụ ụbọchị 30 nke ruru mkpụrụ 6,000 enweghị isi."
          ],
          steps: ["Dee ihe ị maara, ya na nha ya.", "Dee ihe ị chọrọ ịchọta.", "Gbanwee gaa n'otu nha ma ọ dị mkpa.", "Hazie mgbakọ ahụ, wee gbakọọ.", "Jụọ: azịza a nwere isi?"],
          words: [["mg", "milligram: otu ụzọ n'ime ụzọ puku (1,000) nke gram."], ["mL", "milliliter: otu ụzọ n'ime ụzọ puku (1,000) nke liter."], ["Ụbọchị ọgwụ ga-ezu (days' supply)", "ụbọchị ole akwụkwọ ọgwụ ga-eru ma a ṅụọ ya dị ka e kwuru."], ["Ngbanwe (conversion)", "ịgbanwe nọmba site n'otu nha gaa n'ọzọ, dị ka gram gaa na milligram."]],
          slides: [
            { title: "Naanị maka omume", bullets: ["Nọmba e chepụtara maka ịkwadebe ule", "Onye pharmacist na-elele mgbakọ ezi ọrụ ọ bụla"] },
            { title: "Ngbanwe ị ga-amara", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Ụbọchị ọgwụ ga-ezu na ọnụọgụ", bullets: ["Ụbọchị = ọnụọgụ ÷ ihe kwa ụbọchị", "Mkpụrụ ọgwụ 60 ÷ 2 kwa ụbọchị = ụbọchị 30", "Ọnụọgụ = kwa ụbọchị × ụbọchị: 3 × 10 = 30"] },
            { title: "Rụọ ọrụ dị ka ọkachamara", bullets: ["Dee nha mgbe niile", "Hazie tupu ị gbakọọ", "Lelee ma azịza ahụ nwere isi"] }
          ],
          tryIt: "Naanị maka omume, nọmba e chepụtara. Zaa ma gosi usoro ọrụ gị: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, mkpụrụ ọgwụ 1 ugboro 3 n'ụbọchị, mkpụrụ ọgwụ 90: ụbọchị ole ọ ga-ezu? (5) Drug Y, capsule 2 ugboro abụọ n'ụbọchị maka ụbọchị 14: ọnụọgụ? Azịza: 2,500 mg; 15 mL; 60 kg; ụbọchị 30; capsule 56.",
          youCanNow: "ịgbanwe nha a na-ahụkarị ma gbakọọ ụbọchị ọgwụ ga-ezu na ọnụọgụ na mgbakọ omume, na-egosi usoro ọrụ gị.",
          quickCheck: [
            { objective: "O3", q: "Naanị maka omume: milligram ole dị na gram 0.5?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, ya mere 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Naanị maka omume: Drug X, mkpụrụ ọgwụ 1 ugboro abụọ n'ụbọchị, mkpụrụ ọgwụ 28. Ụbọchị ole ọ ga-ezu?", options: ["Ụbọchị 14", "Ụbọchị 28", "Ụbọchị 56", "Ụbọchị 7"], answer: 0, why: "Ụbọchị = mkpụrụ ọgwụ 28 ÷ 2 kwa ụbọchị = ụbọchị 14." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, akwụkwọ ọgwụ na mgbakọ",
        questions: [
          { objective: "O1", q: "Kedu ule NHA na-enye maka ndị enyemaka ụlọ ọgwụ?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "Ule NHA maka ndị enyemaka ụlọ ọgwụ bụ ExCPT." },
          { objective: "O1", q: "Ebee ka ị ga-ahụ state board of pharmacy gị?", options: ["Ndepụta board ụlọ ọgwụ nke NABP", "Mgbasa ozi ụlọ ọrụ ọgwụ", "Weebụsaịtị kupọn", "Azụ karama ọgwụ"], answer: 0, why: "NABP na-edepụta state board of pharmacy ọ bụla na weebụsaịtị ya." },
          { objective: "O2", q: "Gịnị ka \"prn\" pụtara n'akwụkwọ ọgwụ omume?", options: ["Site n'ọnụ", "Mgbe ị na-aga ihi ụra", "Ugboro abụọ n'ụbọchị", "Mgbe ọ dị mkpa"], answer: 3, why: "prn pụtara mgbe ọ dị mkpa." },
          { objective: "O2", q: "Kedu ụzọ isi dee ike ọgwụ n'enweghị ihe egwu?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Jiri efu n'ihu, ejikwala efu n'azụ, ka a ghara ịgụhie 0.5 mg." },
          { objective: "O3", q: "Naanị maka omume: tablespoon 2 ruru milliliter ole?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, ya mere 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Isi 2: Nchekwa, iwu na nzuzo",
      lessons: [
        {
          title: "Nlele nchekwa: ọgwụ kwesịrị ekwesị maka onye ọrịa kwesịrị ekwesị",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lelee iwu ọgwụ omume megide akwụkwọ ọgwụ ma gosi ihe ọ bụla na-adabaghị.",
          text: [
            "Ọtụtụ mperi na-esi n'obere ndahie: onye ọrịa ezighi ezi, ọgwụ nwere aha yiri ibe ya, ike ọgwụ ezighi ezi, ma ọ bụ karama ezighi ezi site n'elu shelf. Ndị enyemaka na-enyere aka ịhụ ha tupu onye pharmacist emee nlele ikpeazụ.",
            "Jiri ihe njirimara onye ọrịa abụọ, dị ka aha zuru ezu na ụbọchị ọmụmụ, oge ọ bụla ị na-anabata ma ọ bụ na-enye akwụkwọ ọgwụ. Mmadụ abụọ nwere ike inwe otu aha.",
            "Ngwugwu ọgwụ ọ bụla nwere National Drug Code (NDC), nọmba nwere akụkụ atọ nke FDA na-egosi onye mere ya, ngwaahịa ahụ na ngwugwu ya. Ịtụnyere NDC dị na karama ngwaahịa na nke dị na kọmputa (ọtụtụ mgbe site n'ịgụ barcode) na-egosi na ị họrọ ọgwụ, ike na ngwugwu ziri ezi. FDA na-eme atụmatụ ịgbanwe NDC ka ọ bụrụ otu ụdị nwere mkpụrụ 12 n'ọdịnihu, ya mere mụta echiche ahụ, ọ bụghị otu ogologo.",
            "Lezie anya maka ọgwụ ndị aha ha yiri ibe ha n'ile anya ma ọ bụ n'ụda. Gụọ aha zuru ezu, ike na ụdị dị na karama, ọ bụghị naanị mkpụrụ akwụkwọ mbụ. Ọ bụrụ na ihe ọ bụla adabaghị, kwụsị ma gwa onye pharmacist."
          ],
          steps: ["Kwado ihe njirimara onye ọrịa abụọ: aha na ụbọchị ọmụmụ.", "Tụnyere aha ọgwụ dị na karama na akwụkwọ ọgwụ, mkpụrụ akwụkwọ n'otu n'otu.", "Tụnyere ike ọgwụ na ụdị ya.", "Gụọ barcode ma ọ bụ tụnyere NDC dị na karama ngwaahịa.", "Kwụsị ma gosi onye pharmacist ihe ọ bụla na-adabaghị."],
          words: [["NDC", "National Drug Code: nọmba nwere akụkụ atọ nke FDA maka onye mere ọgwụ, ngwaahịa ya na ngwugwu ya."], ["Ihe njirimara onye ọrịa", "ozi dị ka aha zuru ezu na ụbọchị ọmụmụ e ji ama na ọ bụ ezi onye ahụ."], ["Ọgwụ ndị aha ha yiri ibe ha", "ọgwụ ndị aha ha yiri ibe ha n'ile anya ma ọ bụ n'ụda, ndị dị mfe ịgwakọta."], ["Karama ngwaahịa (stock bottle)", "nnukwu akpa ọgwụ ụlọ ọgwụ na-agụpụta ọgwụ site na ya."]],
          slides: [
            { title: "Obere ndahie, nnukwu mmerụ", bullets: ["Onye ọrịa ma ọ bụ ike ọgwụ ezighi ezi", "Aha ọgwụ yiri ibe ha", "Karama ezighi ezi site n'elu shelf"] },
            { title: "Ihe njirimara onye ọrịa abụọ", bullets: ["Aha zuru ezu na ụbọchị ọmụmụ", "Mgbe a na-eweta ya na mgbe a na-abịa iburu ya"] },
            { title: "Tụnyere NDC", bullets: ["Nọmba akụkụ atọ nke FDA: onye mere ya, ngwaahịa, ngwugwu", "Gụọ barcode ma ọ bụ tụnyere ya na kọmputa", "Ọ na-akwado ọgwụ, ike na ngwugwu"] },
            { title: "Gụọ aha niile dị na karama", bullets: ["Aha zuru ezu, ike na ụdị", "Ọ bụghị naanị mkpụrụ akwụkwọ mbụ", "Ihe adabaghị? Kwụsị ma gwa onye pharmacist"] }
          ],
          sources: [
            { name: "FDA: National Drug Code Directory", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Naanị maka omume. Dee iwu ọgwụ omume atọ e chepụtara echepụta n'akwụkwọ, nke ọ bụla nwere aha onye ọrịa, ụbọchị ọmụmụ, ọgwụ, ike ọgwụ na NDC. Rịọ enyi gị ka o depụta ha dị ka \"aha karama ngwaahịa\" ma gbanwee otu ihe na nzuzo n'ime abụọ n'ime ha. Tụnyere ụzọ abụọ ọ bụla dị ka i siri mụta ma gbaa gburugburu n'ihe ọ bụla na-adabaghị.",
          youCanNow: "ịlele iwu ọgwụ omume megide akwụkwọ ọgwụ site n'iji ihe njirimara onye ọrịa abụọ na NDC, ma gosi ihe ọ bụla na-adabaghị.",
          quickCheck: [
            { objective: "O4", q: "Kedu ụzọ abụọ bụ ihe njirimara onye ọrịa abụọ?", options: ["Aha zuru ezu na ụbọchị ọmụmụ", "Aha na agba kacha amasị ya", "Aha ọgwụ na ike ya", "Ụdị ekwentị na email"], answer: 0, why: "A na-ejikọkarị aha zuru ezu na ụbọchị ọmụmụ iji kwado na ọ bụ ezi onye ọrịa ahụ." },
            { objective: "O4", q: "NDC dị na karama ngwaahịa adabaghị na nke kọmputa. Gịnị ka ị ga-eme?", options: ["Mejupụta ya; aha ahụ dị nso", "Gbanwee kọmputa ka o dabara", "Kwụsị ma gwa onye pharmacist", "Nye onye ahịa mbelata ọnụahịa"], answer: 2, why: "NDC na-adabaghị nwere ike ịpụta ọgwụ, ike ma ọ bụ ngwugwu ezighi ezi, ya mere ị ga-akwụsị ma gosi ya." }
          ]
        },
        {
          title: "Ọrụ gị, ọrụ onye pharmacist na ọgwụ a na-achịkwa",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kewaa ọrụ omume n'ọrụ onye enyemaka ma ọ bụ ọrụ onye pharmacist.",
          text: [
            "Ndị enyemaka na-arụ ọrụ aka: ịnabata na ịtinye akwụkwọ ọgwụ, ịgụ, itinye aha, ilekọta ngwaahịa, ịhazi inshọransị na inyere aka n'ebe a na-akwụ ụgwọ. Ndị pharmacist na-arụ ọrụ ahụike: nlele ikpeazụ, ịdụ ọdụ otu esi aṅụ ọgwụ, mmetụta ọjọọ (side effects), otu ọgwụ si emetụta ibe ya, na ajụjụ ọ bụla dị ka \"Ọ dị mma maka m?\". Steeti gị na-edo oke ahụ n'ezie, ya mere mụta iwu steeti gị.",
            "Iwu dị mfe: ọ bụrụ na onye ahịa ajụọ gbasara ahụike ya ma ọ bụ ọgwụ ya, azịza bụ \"Ka m kpọọrọ gị onye pharmacist.\" Enyela ndụmọdụ nke gị mgbe ọ bụla, ọbụlagodi ma ị chere na ị maara.",
            "Ọgwụ a na-achịkwa (controlled substances) bụ ọgwụ ụlọ ọrụ gọọmentị etiti Drug Enforcement Administration (DEA) na-etinye na Schedules I ruo V, dabere n'ojiji ahụike a nabatara na ihe egwu nke iji ha eme ihe ọjọọ na ịdabere na ha. Ọgwụ Schedule I enweghị ojiji ahụike a nabatara na US; ọgwụ Schedule II nwere nnukwu ihe egwu nke iji ha eme ihe ọjọọ; ihe egwu ahụ na-ebelata ka a na-aga na Schedule V. Ha nwere iwu ndị ọzọ maka nchekwa, ịgụ ọnụ, ndekọ na refills, steeti nwekwara ike ịgbakwunye.",
            "Maka ule, mara schedule ise ahụ, mara na ụlọ ọgwụ na-edebe ndekọ nke ọma maka ọgwụ ọ bụla a na-achịkwa, na na a na-akọrọ onye pharmacist ozugbo ma ọnụ ọgụ ọ bụla efuo."
          ],
          steps: ["Jụọ: nke a ọ bụ ọrụ aka ka ọ bụ ajụjụ ahụike?", "Ọrụ aka: rụọ ya nke ọma, na-agbaso iwu ụlọ ahịa na iwu steeti.", "Ajụjụ ahụike ma ọ bụ ọgwụ: kpọọ onye pharmacist.", "Ọgwụ a na-achịkwa: gbasoo iwu ndị ọzọ maka ịgụ ọnụ, ndekọ na nchekwa.", "Ihe ọ bụla na-efu efu ma ọ bụ dị iche: gwa onye pharmacist ozugbo."],
          words: [["Ịdụ ọdụ (counseling)", "mgbe onye pharmacist na-akọwara onye ọrịa otu ọ ga-esi ṅụọ ọgwụ na ihe ọ ga-elezi anya."], ["Ọgwụ a na-achịkwa (controlled substance)", "ọgwụ iwu na-achịkwa nke ọma n'ihi na a pụrụ iji ya mee ihe ọjọọ ma ọ bụ ọ pụrụ ime ka mmadụ dabere na ya."], ["DEA", "Drug Enforcement Administration, ụlọ ọrụ gọọmentị etiti na-amanye iwu ọgwụ a na-achịkwa."], ["Schedule", "otu n'ime otu ise (I ruo V) a na-etinye ọgwụ a na-achịkwa."]],
          slides: [
            { title: "Ọrụ onye enyemaka", bullets: ["Ịtinye, ịgụ, itinye aha, idebe", "Inshọransị na ebe a na-akwụ ụgwọ", "A na-arụ ya nke ọma, dị ka iwu steeti si dị"] },
            { title: "Ọrụ onye pharmacist", bullets: ["Nlele ikpeazụ na ịdụ ọdụ", "Mmetụta ọjọọ na otu ọgwụ si emetụta ibe ya", "Ajụjụ ọ bụla dị ka \"Ọ dị mma maka m?\""] },
            { title: "Ọgwụ a na-achịkwa", bullets: ["DEA Schedules I ruo V", "I: enweghị ojiji ahụike a nabatara; II: nnukwu ihe egwu", "Iwu ndị ọzọ maka nchekwa, ịgụ ọnụ, ndekọ, refills"] },
            { title: "Kwuo ya oge niile", bullets: ["\"Ka m kpọọrọ gị onye pharmacist.\"", "Enyela ndụmọdụ ahụike nke gị mgbe ọ bụla"] }
          ],
          sources: [
            { name: "DEA: Drug scheduling", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: Board ụlọ ọgwụ nke steeti (iwu ndị enyemaka)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Naanị maka omume. Kewaa ndị a n'Onye enyemaka ma ọ bụ Onye pharmacist: (1) ịgụ mkpụrụ ọgwụ maka iwu e mejupụtara, (2) onye ahịa jụrụ ma ọ nwere ike ịṅụ ọgwụ ọhụrụ ya na ọgwụ allergy ya, (3) idebe ngwaahịa e wetara, (4) onye ahịa jụrụ mmetụta ọjọọ ọ ga-atụ anya ya, (5) ịtinye akwụkwọ ọgwụ ọhụrụ. Azịza: 1, 3 na 5 Onye enyemaka; 2 na 4 Onye pharmacist. Wee dee okwu ị ga-ekwu iji ziga ajụjụ n'aka onye pharmacist.",
          youCanNow: "ịmata ọrụ onye enyemaka na ọrụ onye pharmacist, iziga ajụjụ ahụike ọ bụla n'aka onye pharmacist, na ịkpọ aha schedule ise nke ọgwụ a na-achịkwa.",
          quickCheck: [
            { objective: "O5", q: "Onye ahịa jụrụ ma ọgwụ ọhụrụ ya dị mma iji mmanya ṅụọ. Gịnị ka ị ga-ekwu?", options: ["\"Ọ ga-adị mma.\"", "\"Lelee n'ịntanetị.\"", "\"Aṅụkwala mmanya ọzọ.\"", "\"Ka m kpọọrọ gị onye pharmacist.\""], answer: 3, why: "Ajụjụ gbasara nchekwa na otu ọgwụ si emetụta ibe ya bụ nke ahụike; naanị onye pharmacist na-aza ha." },
            { objective: "O5", q: "Kedu ụlọ ọrụ gọọmentị etiti na-etinye ọgwụ na Schedules I ruo V?", options: ["DEA", "Ụlọ ọrụ post", "IRS", "Ọfịs ụgbọala nke steeti"], answer: 0, why: "DEA na-amanye schedule ọgwụ a na-achịkwa." }
          ]
        },
        {
          title: "Nzuzo n'ihu tebụl, na atụmatụ ọmụmụ gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kesaa ozi onye ọrịa naanị ndị chọrọ ya, ma naanị ihe ha chọrọ.",
          text: [
            "Ụlọ ọgwụ na-ejide ozi ahụike nzuzo: aha, ụbọchị ọmụmụ, ọgwụ, inshọransị. HIPAA, iwu nzuzo ahụike nke gọọmentị etiti, na-echebe ya. Echiche ya nke \"minimum necessary\" (obere ihe dị mkpa) pụtara na ị na-eji ma na-ekesa naanị ihe dị mkpa maka ọrụ ahụ.",
            "N'ihu tebụl: kwuo okwu nwayọọ, agụpụtala aha ọgwụ n'olu dị elu ka ndị nọ n'ahịrị nụ, ma kwado ihe njirimara abụọ tupu i nyefee akpa ọgwụ. N'ekwentị: kwado onye na-akpọ oku tupu ị kesaa ihe ọ bụla, ma gbasoo iwu ụlọ ahịa gbasara onye nwere ike ịbịa buru ọgwụ maka onye ọzọ.",
            "Etinyela ihe gbasara ndị ahịa n'ịntanetị mgbe ọ bụla, elela ndekọ onye agbata obi gị ma ọ bụ onye a ma ama n'ihi ịmata ihe, ma debe ihuenyo na akwụkwọ ebe a na-adịghị ahụ ha. Kọọrọ onye pharmacist ma ọ bụ onye na-ahụ maka nzuzo (privacy officer) mperi nzuzo ozugbo.",
            "Ugbu a, mee ọrụ ikpeazụ gị: atụmatụ ọmụmụ na ule gị na akwụkwọ omume."
          ],
          steps: ["Jụọ: onye a chọrọ ozi a maka ọrụ ya ma ọ bụ maka nlekọta?", "Kesaa naanị obere ihe ha chọrọ.", "Kwado ihe njirimara abụọ tupu i nye ọgwụ.", "Kwuo okwu nwayọọ ma zoo ihuenyo na akwụkwọ.", "Kọọ mperi nzuzo ozugbo."],
          words: [["HIPAA", "iwu gọọmentị etiti na-echebe nzuzo na nchekwa ozi ahụike."], ["PHI", "protected health information: ozi ahụike nwere ike igosi onye mmadụ bụ."], ["Minimum necessary", "iji ma ọ bụ ikesa naanị ozi dị mkpa maka ọrụ ahụ."]],
          slides: [
            { title: "HIPAA n'ụlọ ọgwụ", bullets: ["Aha, ụbọchị ọmụmụ, ọgwụ, inshọransị", "Kesaa naanị obere ihe dị mkpa"] },
            { title: "N'ihu tebụl", bullets: ["Kwuo okwu nwayọọ", "Agụpụtala aha ọgwụ n'olu dị elu", "Ihe njirimara abụọ tupu i nyefee akpa"] },
            { title: "Emela ihe ndị a mgbe ọ bụla", bullets: ["Itinye ihe gbasara ndị ahịa n'ịntanetị", "Ilele ndekọ n'ihi ịmata ihe", "Ịhapụ ihuenyo ma ọ bụ akwụkwọ ebe a na-ahụ ha"] },
            { title: "Ọrụ ikpeazụ", bullets: ["Ule gị na iwu steeti gị", "Ụbọchị ọmụmụ kwa izu ruo ụbọchị ule", "Akwụkwọ omume e tinyere n'ime ya"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Ọrụ ikpeazụ. Dee atụmatụ ọmụmụ na ule gị: ule ahụ (PTCE ma ọ bụ ExCPT), ihe state board gị na-achọ, na ụbọchị ọmụmụ kwa izu ruo ụbọchị ule ị chọrọ. Tinye akwụkwọ omume gị: akwụkwọ ọgwụ 5 e chepụtara echepụta nke ị gụrụ ma lelee, mgbakọ omume 10 nwere usoro ọrụ, na ajụjụ ndị ahịa 5 ị ga-eziga n'aka onye pharmacist. Ejila ezi ozi onye ọrịa ọ bụla.",
          youCanNow: "ichebe nzuzo ndị ọrịa n'ihu tebụl na n'ekwentị, na ịgbaso atụmatụ nke gị e dere ede gaa n'ule onye enyemaka ụlọ ọgwụ.",
          quickCheck: [
            { objective: "O6", q: "Onye na-akpọ oku kwuru na ọ bụ onye agbata obi otu onye ahịa, ma jụọ ọgwụ o buru. Gịnị ka ị ga-eme?", options: ["Gwa ya; ọ na-eme naanị obiọma", "Gụọrọ ya ndepụta ọgwụ ya", "Ekesala ihe ọ bụla ma gbasoo iwu ụlọ ahịa", "Gwa ya naanị ọgwụ mbụ"], answer: 2, why: "HIPAA na-echebe ozi ya; onye agbata obi enweghị ikike inweta ya." },
            { objective: "O6", q: "Gịnị na-enyere aka ichebe nzuzo n'ihu tebụl?", options: ["Ịgụpụta aha ọgwụ n'olu dị elu", "Ikwu okwu nwayọọ na ịkwado ihe njirimara abụọ", "Ịhapụ akpa ọgwụ ka ha ghere oghe n'elu tebụl", "Igosi ndị nọ n'ahịrị ihuenyo"], answer: 1, why: "Olu dị nwayọọ na nlele njirimara na-edebe ozi ahụike na nzuzo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nchekwa, iwu na nzuzo",
        questions: [
          { objective: "O4", q: "Gịnị ka NDC na-egosi?", options: ["Inshọransị onye ọrịa", "Ikike onye pharmacist", "Adreesị ụlọ ahịa", "Onye mere ọgwụ, ngwaahịa ya na ngwugwu ya"], answer: 3, why: "NDC bụ nọmba akụkụ atọ nke FDA maka onye mere ya, ngwaahịa na ngwugwu." },
          { objective: "O4", q: "Ndị ahịa abụọ nwere otu aha. Kedu otu ị ga-esi hụ na i nyere ezi onye akpa ọgwụ?", options: ["Jụọkwa ụbọchị ọmụmụ", "Nye onye bu ụzọ bịa", "Jụọ ihe ọgwụ ahụ bụ maka ya", "Lelee akpụkpọ ụkwụ ha"], answer: 0, why: "Ihe njirimara nke abụọ dị ka ụbọchị ọmụmụ na-ekewa ndị nwere otu aha." },
          { objective: "O5", q: "Kedu ọrụ bụ ọrụ onye pharmacist?", options: ["Idebe ngwaahịa n'elu shelf", "Ịdụ onye ọrịa ọdụ gbasara mmetụta ọjọọ", "Ịnara ego n'ebe a na-akwụ ụgwọ", "Ịgụ mkpụrụ ọgwụ"], answer: 1, why: "Ịdụ ọdụ gbasara mmetụta ọjọọ bụ ọrụ ahụike nke onye pharmacist." },
          { objective: "O5", q: "Ọnụ ọgụ ọgwụ a na-achịkwa erughị. Gịnị ka ị ga-eme?", options: ["Dozie nọmba ahụ na ndekọ", "Leghara ya anya ruo ọnwa ọzọ", "Gwa onye pharmacist ozugbo", "Nwayọọ nye iwu ka e weta ọzọ"], answer: 2, why: "Ọgwụ a na-achịkwa nwere ndekọ siri ike; a na-akọ ọnụ ọgụ ọ bụla na-efu efu ozugbo." },
          { objective: "O6", q: "Gịnị ka \"minimum necessary\" pụtara n'ụlọ ọgwụ?", options: ["Iji akpa kacha nta", "Imejupụta iwu ole na ole", "Ịnara ọnụahịa kacha ala", "Ikesa naanị ozi dị mkpa maka ọrụ ahụ"], answer: 3, why: "N'okpuru HIPAA, ị na-eji ma na-ekesa naanị ihe dị mkpa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe Onye Enyemaka Ụlọ Ọgwụ",
    questions: [
      { objective: "O1", q: "Ịgafe PTCE na-enweta aha kedu?", options: ["Certified Pharmacy Technician (CPhT) site na PTCB", "Registered Pharmacist", "Certified Professional Coder", "Licensed Practical Nurse"], answer: 0, why: "PTCB na-enye CPhT ndị gafere PTCE." },
      { objective: "O1", q: "Iwu maka ndị enyemaka dị iche na steeti ọ bụla. Ebee ka ị ga-elele nke gị?", options: ["Mgbasa ozi ọgwụ", "State board of pharmacy gị", "Enyi nọ na steeti ọzọ", "Peeji DEA maka iwe mmadụ n'ọrụ"], answer: 1, why: "State board of pharmacy ọ bụla na-edo iwu ndị enyemaka." },
      { objective: "O1", q: "Gịnị ka ihe ọmụmụ a na-emere gị?", options: ["Ọ na-edebanye aha gị na steeti gị", "Ọ na-enye gị CPhT", "Ọ na-akwado gị maka ule onye enyemaka", "Ọ na-ekwe ka ị dụọ ndị ọrịa ọdụ"], answer: 2, why: "Ihe ọmụmụ a na-akwado gị; ule ahụ na steeti na-enye asambodo." },
      { objective: "O2", q: "Kedu nke ỌBỤGHỊ otu n'ime akụkụ a na-ahụkarị n'akwụkwọ ọgwụ?", options: ["Aha onye ọrịa", "Ike ọgwụ", "Ntụziaka (sig)", "Ụlọ ahịa kacha amasị onye ọrịa"], answer: 3, why: "Akwụkwọ ọgwụ nwere onye ọrịa, ọgwụ, ike, ụdị, sig, ọnụọgụ, refills, ụbọchị na onye dere ya." },
      { objective: "O2", q: "N'omume, \"hs\" n'akwụkwọ ọgwụ pụtara:", options: ["Mgbe ị na-aga ihi ụra", "Site n'ọnụ", "Mgbe ọ dị mkpa", "Ugboro anọ n'ụbọchị"], answer: 0, why: "hs pụtara mgbe ị na-aga ihi ụra." },
      { objective: "O2", q: "Gịnị mere \"QD\" ji dị na ndepụta ihe a na-ekwesịghị iji?", options: ["Ọ dị ogologo nke ukwuu", "Enwere ike ịgụhie ya dị ka QID (ugboro anọ n'ụbọchị)", "Ọ pụtara site n'ọnụ", "Ọ bụ aha ọgwụ"], answer: 1, why: "E chere na QD bụ QID; ide \"daily\" na-egbochi mperi ahụ." },
      { objective: "O2", q: "Naanị maka omume: \"Drug X 2 tabs po bid\" n'okwu dị mfe bụ:", options: ["Ṅụọ mkpụrụ ọgwụ 2 mgbe ị na-aga ihi ụra", "Ṅụọ mkpụrụ ọgwụ 1 ugboro abụọ n'ụbọchị", "Ṅụọ mkpụrụ ọgwụ 2 site n'ọnụ ugboro abụọ n'ụbọchị", "Ṅụọ mkpụrụ ọgwụ 2 awa 2 ọ bụla"], answer: 2, why: "po pụtara site n'ọnụ, bid pụtakwara ugboro abụọ n'ụbọchị." },
      { objective: "O3", q: "Naanị maka omume: teaspoon 1 ruru milliliter ole?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Naanị maka omume: Drug X, capsule 1 ugboro 4 n'ụbọchị, capsule 120. Ụbọchị ole ọ ga-ezu?", options: ["Ụbọchị 30", "Ụbọchị 40", "Ụbọchị 120", "Ụbọchị 4"], answer: 0, why: "120 ÷ 4 kwa ụbọchị = ụbọchị 30." },
      { objective: "O3", q: "Naanị maka omume: gram 3 ruru milligram ole?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, ya mere 3 g = 3,000 mg." },
      { objective: "O3", q: "Naanị maka omume: 176 lb ruru ihe dị ka kilogram ole?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Gịnị mere ị ga-eji tụnyere NDC dị na karama ngwaahịa?", options: ["Ịchọta ọnụahịa", "Ịkwado ọgwụ, ike na ngwugwu ziri ezi", "Ịchọta adreesị onye ọrịa", "Ọ dịghị mkpa"], answer: 1, why: "NDC na-egosi kpọmkwem ngwaahịa na ngwugwu ya." },
      { objective: "O4", q: "Ọgwụ abụọ nwere aha malitere otu ụzọ. Gịnị na-echebe onye ọrịa?", options: ["Ịgụ naanị mkpụrụ akwụkwọ mbụ", "Ịhọrọ karama kacha nso gị", "Ịrịọ onye ahịa ka ọ họrọ", "Ịgụ aha zuru ezu, ike na ụdị"], answer: 3, why: "A na-ahụ aha yiri ibe ha site n'ịgụ ihe niile dị na karama." },
      { objective: "O4", q: "Ị hụrụ na iwu ọgwụ na karama adabaghị. Gịnị ka ị ga-eme?", options: ["Kwụsị ma gosi ya onye pharmacist", "Mechaa ngwa ngwa ma tụọ anya na ọ dị mma", "Dozie akwụkwọ ọgwụ ahụ n'onwe gị", "Tụfuo karama ahụ"], answer: 0, why: "Ihe ọ bụla na-adabaghị na-akwụsị ọrụ ahụ ruo mgbe onye pharmacist lelere ya." },
      { objective: "O5", q: "Onye ahịa jụrụ ma ọgwụ ya abụọ dị mma iji ọnụ ṅụọ. Onye na-aza ya?", options: ["Onye enyemaka", "Onye ahịa ọzọ", "Onye pharmacist", "Onye na-anara ego"], answer: 2, why: "Ajụjụ gbasara otu ọgwụ si emetụta ibe ya bụ nke ahụike, ọ na-agakwa n'aka onye pharmacist." },
      { objective: "O5", q: "Ọgwụ a na-achịkwa nke Schedule I bụ:", options: ["Ọgwụ nwere obere ihe egwu nke iji ha eme ihe ọjọọ", "Ọgwụ enweghị ojiji ahụike a nabatara na US", "Vitamin", "Ọgwụ niile a na-ede n'akwụkwọ ọgwụ"], answer: 1, why: "Ọgwụ Schedule I enweghị ojiji ahụike a nabatara na US, ha nwekwara nnukwu ihe egwu nke iji ha eme ihe ọjọọ." },
      { objective: "O5", q: "Kedu nke bụ ọrụ onye enyemaka?", options: ["Ịdụ ọdụ gbasara mmetụta ọjọọ", "Ime nlele ikpeazụ", "Ịdụ ọdụ gbasara otu ọgwụ si emetụta ibe ya", "Ịtinye akwụkwọ ọgwụ ọhụrụ na kọmputa"], answer: 3, why: "Ịtinye akwụkwọ ọgwụ bụ ọrụ aka; onye pharmacist na-elele ma na-adụ ọdụ." },
      { objective: "O6", q: "Kedu iwu na-echebe ozi ahụike ndị ọrịa?", options: ["HIPAA", "OSHA", "Clean Air Act", "Iwu ụtụ isi"], answer: 0, why: "HIPAA na-echebe nzuzo ozi ahụike." },
      { objective: "O6", q: "Onye a ma ama bịara n'ụlọ ahịa gị nweta ọgwụ. Gịnị ka ị ga-eme?", options: ["Lelee ndekọ ya ka ị hụ ihe ọ na-aṅụ", "Tinye n'ịntanetị na ọ bịara", "Lekọta ya dị ka onye ahịa ọ bụla ma ekesala ihe ọ bụla", "Gwa ndị enyi gị"], answer: 2, why: "Ilele ma ọ bụ ikesa ndekọ n'enweghị ihe kpatara ya n'ọrụ na-emebi iwu HIPAA." },
      { objective: "O6", q: "Ị hụrụ na onye ọrụ ibe gị hapụrụ akwụkwọ onye ahịa n'elu tebụl. Gịnị ka ị ga-eme?", options: ["Hapụ ha", "Gụọ ha", "Nye ha onye ahịa na-esote", "Zoo ha ebe a na-adịghị ahụ ha ma gwa onye pharmacist"], answer: 3, why: "Chebe ozi ahụ ma kọọ ndahie nzuzo ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ ọmụmụ na ule", objective: "O1", notYet: "Enweghị aha ule, ma ọ bụ iwu steeti adịghị ya ma ọ bụ bụ echiche.", meets: "Ọ na-akpọ aha ule ahụ na onye na-enye ya, ihe state board na-achọ ya na adreesị weebụ ya, na ụbọchị kwa izu ruo ụbọchị ule.", exceeds: "Ọ na-akpọkwa aha mmemme ọzụzụ na otu onye na-amụ ihe ga-esi ruo eru maka ule ahụ." },
      { name: "Akwụkwọ ọgwụ a gụrụ", objective: "O2", notYet: "Erughị 4 n'ime akwụkwọ ọgwụ 5 ka a gụrụ nke ọma, ma ọ bụ e gosighị akụkụ na-efu efu.", meets: "Opekata mpe 4 n'ime akwụkwọ ọgwụ omume 5 nwere akụkụ niile a kpọrọ aha na ntụziaka n'okwu dị mfe.", exceeds: "Ha 5 niile ziri ezi, a hụkwara mkpụrụ okwu nkenke ọ bụla na-ebute mperi." },
      { name: "Mgbakọ omume", objective: "O3", notYet: "Erughị 8 n'ime 10 ziri ezi, ma ọ bụ e gosighị usoro ọrụ.", meets: "Opekata mpe 8 n'ime mgbakọ omume 10 ziri ezi, nwere nha na usoro ọrụ.", exceeds: "10 n'ime 10 ziri ezi, e dekwara nlele ma azịza nwere isi maka azịza ọ bụla." },
      { name: "Nlele nchekwa", objective: "O4", notYet: "E hụghị otu ihe na-adabaghị e zoro ezo.", meets: "E gbara gburugburu n'ihe ọ bụla na-adabaghị e zoro ezo n'aha, ike ọgwụ ma ọ bụ NDC.", exceeds: "Ọ na-akọwa otu ihe ọ bụla na-adabaghị gaara esi merụọ onye ọrịa ahụ." },
      { name: "Ajụjụ maka onye pharmacist", objective: "O5", notYet: "Ọ na-enye ndụmọdụ nke ya n'ajụjụ ahụike.", meets: "Ọ na-edepụta ajụjụ ndị ahịa 5 na-aga n'aka onye pharmacist na okwu e ji enyefe ha.", exceeds: "Ọ na-akọwakwa iwu ndị ọzọ maka ọgwụ a na-achịkwa." },
      { name: "Nzuzo", objective: "O6", notYet: "Ọ na-eji ezi ozi onye ọrịa n'ebe ọ bụla n'akwụkwọ omume.", meets: "Ọ na-eji naanị ozi e chepụtara echepụta.", exceeds: "Ọ na-edepụta omume atọ n'ihu tebụl ma ọ bụ n'ekwentị na-echebe nzuzo." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha na mmemme ọzụzụ onye enyemaka ụlọ ọgwụ ma ọ bụ debanye aha na state board ha n'ime ụbọchị 90",
      "Ndị na-amụ ihe gafere PTCE ma ọ bụ ExCPT (ha n'onwe ha kọrọ)",
      "Ndị na-amụ ihe e were n'ọrụ dị ka ndị enyemaka ụlọ ọgwụ ma ọ bụ ndị enyemaka a na-azụ azụ n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji PTCB, NHA, NABP na state board",
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị mfe",
      "Akwụkwọ ọgwụ e chepụtara echepụta na aha karama ngwaahịa e bipụtara maka omume nlele nchekwa",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Mee ka ọgwụ na nọmba ọ bụla bụrụ ihe e chepụtara; azala ajụjụ ndị na-amụ ihe gbasara ọgwụ nke ha. Ziga ha n'aka onye pharmacist ha.",
      "Bipụta peeji ndị enyemaka nke state board of pharmacy gị ka otu ahụ hụ ezi iwu ya.",
      "Zoo ihe na-adabaghị (aha, ike ọgwụ, NDC) n'aha karama omume ma hapụ ndị nọ n'abụọ ka ha chọta ha.",
      "Mee ka ndị na-amụ ihe kwuo \"Ka m kpọọrọ gị onye pharmacist\" n'olu dị elu n'egwuregwu omume.",
      "Ndị na-amụ ihe nwere ndekọ mpụ: gwa ha ka ha gụọ iwu PTCB, NHA na state board ha gbasara ikwupụta akụkọ ndụ tupu ha akwụọ ụgwọ maka ọzụzụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of shared/it-support-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const A_PLUS = { name: "CompTIA A+ certification (official page)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "CompTIA A+ Core 1 (220-1201) exam details", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "CompTIA A+ Core 2 (220-1202) exam details", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "US Bureau of Labor Statistics: Computer Support Specialists", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-ig",
  lang: "ig",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Ntọala Enyemaka IT (Nkwadebe maka CompTIA A+)",
  skills: "Ịkpọ aha akụkụ kọmputa, Ịlele njikọ netwọk, Iji ngwa sistemụ arụmọrụ, Idozi nsogbu nzọụkwụ n'nzọụkwụ, Ide tiketi help desk, Ịhazi atụmatụ maka ule A+",
  outcome: "ịrụ ọrụ dị ka onye teknịshan help desk na-amalite ọrụ: ịkpọ aha akụkụ kọmputa, ịlele njikọ netwọk site na ipconfig na ping, iji ngwa dị n'ime sistemụ, idozi nsogbu site n'usoro nzọụkwụ isii, ide tiketi doro anya, na ịgbaso atụmatụ ọmụmụ gị nwere ụbọchị maka ule CompTIA A+ abụọ ahụ.",
  about: [
    "Enyemaka IT (a na-akpọkwa ya help desk ma ọ bụ desktop support) bụ ọrụ mbụ a na-ahụkarị na teknụzụ. Ndị teknịshan enyemaka na-enyere ndị mmadụ aka mgbe kọmputa, printa, ekwentị ma ọ bụ netwọk kwụsịrị ịrụ ọrụ. Asambodo mmalite a kacha mara amara maka ọrụ a bụ CompTIA A+.",
    "Ihe ọmụmụ a na-akwado gị maka A+. Ọ naghị enye gị asambodo ahụ. Iji nweta A+, ị ga-agafe ule abụọ, Core 1 na Core 2, n'ebe ule ma ọ bụ n'ịntanetị. Lelee peeji CompTIA ọfịshal maka ule ndị dị ugbu a, ọnụahịa na ụzọ e si ede ule tupu i debanye aha.",
    "Ị ga-eme omume na kọmputa nke gị site na ngwa n'efu dị n'ime ya. Ọ dịghị mkpa imeghe kọmputa ma ọ bụ ịzụ ihe ọ bụla. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe na ọrụ \"Nwalee ya ugbu a\" na ajụjụ nkenke abụọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe.",
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-amalite: ndị na-achọ ọrụ, ndị agha mbụ (veterans), ndị ntorobịa, ndị na-alọta site n'ụlọ mkpọrọ, ndị kwabatara na mba ọzọ, na ndị okenye na-agbanwe ọrụ."
  ],
  finalTask: "Mee ngwugwu mmalite enyemaka IT gị: (1) tiketi help desk omume maka nsogbu n'ezie ma ọ bụ nke i chepụtara, nke e dere na nzọụkwụ isii nke idozi nsogbu niile na ngalaba tiketi sitere na Nkuzi 6; (2) ndetu otu peeji gbasara kọmputa gị: sistemụ arụmọrụ ya na ụdị ya, ebe nchekwa fọdụrụ, adreesị IP, default gateway na ma ping rụrụ ọrụ; na (3) atụmatụ ọmụmụ na ule A+ gị nwere ụbọchị ebumnuche maka Core 1 na maka Core 2, ngalaba (domain) nke ule ọ bụla na ibu ha, na awa ole ị ga-amụ kwa izu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-achọ ọrụ mbụ ha na teknụzụ: ndị na-achọ ọrụ, ndị agha mbụ, ndị na-alọta site n'ụlọ mkpọrọ, ndị kwabatara na ndị na-agbanwe ọrụ. Ọtụtụ na-eji ekwentị na kọmputa kwa ụbọchị, ma ha edozibeghị otu mgbe ọ bụla ma ọ bụ rụọ ọrụ na IT.",
    startingPoint: "Ha nwere ike iji web browser, email na ngwa (app) a na-ahụkarị. Ọtụtụ ejibeghị command prompt, lee anya n'ime ntọala sistemụ, ma ọ bụ dee tiketi enyemaka. Ọ bụ mmadụ ole na ole maara ihe ule A+ na-ekpuchi.",
    gap: "Ọrụ help desk na-achọ nkà ntọala gbasara hardware, netwọk, sistemụ arụmọrụ na idozi nsogbu, ọtụtụ mgbe kwa CompTIA A+. Ndị na-amụ ihe chọrọ ihe oyiyi doro anya nke ọrụ ahụ, omume aka n'ezie na ngwa n'ezie, na atụmatụ nwere ụbọchị ka ha were n'ezie dee ule abụọ ahụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu teknụzụ ọ bụla",
      "Ngwaọrụ: otu kọmputa Windows ma ọ bụ Mac (kọmputa ọba akwụkwọ na-arụ maka ọtụtụ ọrụ, mana a pụrụ igbochi ụfọdụ iwu (command) ebe ahụ)",
      "Emeghela kọmputa ma ọ bụ power supply; a na-amụ hardware site na foto ma ọ bụ naanị site na ngwaọrụ ochie a gbanyụrụ ma wepụ na ọkụ",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ na oge ịhụ ndị mmadụ",
      "Iwu ule, ọnụahịa na ụdị ule na-agbanwe: ndị na-amụ ihe na-elele comptia.org tupu ha edebanye aha"
    ],
    prerequisites: "Ịdị jụụ n'iji kọmputa, òké (mouse) na keyboard. Ọ bụrụ na nke ahụ dị ọhụrụ, buru ụzọ were \"Nka Mbụ nke Kọmputa\". \"Mmalite Nchekwa Ịntanetị (Cybersecurity)\" bụ ihe ọmụmụ na-enye aka ka e were ya n'akụkụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị foto ma ọ bụ ndepụta akụkụ kọmputa", action: "ịmata akụkụ hardware ọ bụla bụ isi ma kwuo ihe ọ na-eme", standard: "ma nweta opekata mpe 8 n'ime 10 ziri ezi" },
    { id: "O2", condition: "Site n'iji kọmputa Windows ma ọ bụ Mac nke gị", action: "ịgba ipconfig (ma ọ bụ lelee ntọala netwọk) na ping iji dee adreesị IP na default gateway ma nwalee njikọ ahụ", standard: "n'enweghị onye nyere gị aka, ma kwuo ihe adreesị 169.254 pụtara" },
    { id: "O3", condition: "Site n'iji kọmputa nke gị", action: "ịchọta ụdị sistemụ arụmọrụ, ebe nchekwa fọdụrụ, mmemme na-arụ ọrụ na ọnọdụ mmelite site na ngwa dị n'ime ya", standard: "n'ime nkeji 10" },
    { id: "O4", condition: "Mgbe e nyere gị nsogbu kọmputa sitere n'aka onye ọrụ", action: "itinye usoro idozi nsogbu nke CompTIA nwere nzọụkwụ isii n'ọrụ ma dee nzọụkwụ ọ bụla", standard: "na nzọụkwụ isii niile n'usoro ziri ezi" },
    { id: "O5", condition: "Mgbe e nyere gị oku ma ọ bụ ozi sitere n'aka onye ọrụ nwere nsogbu", action: "ide tiketi help desk na azịza nkenke nwere nkwanye ugwu nye onye ọrụ ahụ", standard: "ma dejupụta ngalaba tiketi ọ bụla, na-enweghị ịta ụta ma ọ bụ okwu teknụzụ siri ike n'azịza ahụ" },
    { id: "O6", condition: "Site n'iji peeji ule CompTIA A+ ọfịshal", action: "ide atụmatụ ọmụmụ na ule nwere ụbọchị ebumnuche maka Core 1 na Core 2", standard: "nke na-ekpuchi ngalaba ule ọ bụla na ibu ya, na oge ọmụmụ kwa izu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, hardware na netwọk",
      lessons: [
        {
          title: "Ọrụ help desk na ule A+ abụọ ahụ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Depụta ule A+ abụọ ahụ, koodu ha na isiokwu ndị bụ isi nke ọ bụla na-ekpuchi.",
          text: [
            "Onye teknịshan enyemaka na-aza oku, chat na tiketi, na-edozi kọmputa na akaụntụ, na-edozi nsogbu a na-ahụkarị, ma mara mgbe ọ ga-enyefe nsogbu siri ike n'aka onye teknịshan ka ya. Aha ọrụ gụnyere help desk technician, IT support specialist, desktop support na field technician.",
            "CompTIA A+ bụ asambodo mmalite a ma ama maka ọrụ a. Ọ bụ CompTIA na-enye ya, ọ bụghị ihe ọmụmụ a. Ị ga-agafe ule abụọ. Core 1 (220-1201) na-ekpuchi ngwaọrụ mkpanaka, netwọk, hardware, virtualization na cloud, na idozi nsogbu hardware na netwọk. Core 2 (220-1202) na-ekpuchi sistemụ arụmọrụ, nchekwa, idozi nsogbu sọftwụia na usoro ọrụ. Ị nwere ike ide ha n'usoro ọ bụla.",
            "Mgbe anyị lelere n'October 2026, ule ọ bụla nwere ruo ajụjụ 90 n'ime nkeji 90, ya na ajụjụ nhọrọ, drag-and-drop na performance-based (obere ọrụ aka). CompTIA na-atụ aro ihe dị ka ọnwa 12 nke ahụmahụ aka, mana nke a bụ naanị ndụmọdụ. Ule, ọnụahịa na ụdị ule na-agbanwe, ya mere lelee peeji ọfịshal mgbe niile tupu i debanye aha.",
            "Ule ọ bụla na-edepụta ngalaba (domain), ya bụ isiokwu, na ibu nke ọ bụla, ya bụ òkè ule ahụ isiokwu ahụ were. Oge ọmụmụ gị kwesịrị ịgbaso ibu ndị ahụ."
          ],
          steps: ["Meghee peeji CompTIA A+ ọfịshal.", "Meghee peeji ule Core 1 na Core 2.", "Dee koodu ule ọ bụla na ngalaba ya na ibu ha.", "Chọta ọnụahịa dị ugbu a na ụzọ e si ede ule (ebe ule ma ọ bụ n'ịntanetị) na saịtị ọfịshal."],
          words: [["Help desk", "otu ndị mmadụ na-akpọtụrụ mgbe teknụzụ ha anaghị arụ ọrụ."], ["Asambodo (certification)", "akwụkwọ ikike ị na-enweta site n'ịgafe ule, nke na-egosi na i nwere nkà ụfọdụ."], ["Ngalaba (domain)", "isiokwu nke ule. Ibu ya bụ òkè ajụjụ gbasara ya."], ["Performance-based question", "ọrụ ule ebe ị na-eme ihe, dị ka ijikọ ntọala ma ọ bụ idozi nhazi, kama ịhọrọ otu azịza."]],
          slides: [
            { title: "Ihe onye teknịshan enyemaka na-eme", bullets: ["Na-aza oku, chat na tiketi", "Na-edozi kọmputa, printa na akaụntụ", "Na-edozi nsogbu a na-ahụkarị; na-enyefe ndị siri ike"] },
            { title: "CompTIA A+ = ule abụọ", bullets: ["Core 1 (220-1201): hardware, netwọk, mkpanaka, cloud, idozi nsogbu", "Core 2 (220-1202): sistemụ arụmọrụ, nchekwa, sọftwụia, usoro ọrụ", "Gafee ha abụọ, n'usoro ọ bụla"] },
            { title: "Ụdị ule (e lelere Oct 2026)", bullets: ["Ruo ajụjụ 90, nkeji 90 maka nke ọ bụla", "Nhọrọ, drag-and-drop, performance-based", "Lelee comptia.org maka nkọwa na ọnụahịa dị ugbu a"] },
            { title: "Ihe ọmụmụ a na-akwado gị", bullets: ["Ọ naghị enye A+", "CompTIA na-enye ya mgbe i gafere ule abụọ ahụ"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Meghee peeji Core 1 na Core 2 ọfịshal. N'akwụkwọ, mee kọlụm abụọ, otu maka ule ọ bụla. Dee koodu ule ahụ, wee dee ngalaba ọ bụla na ibu ya. Gbaa okirikiri gburugburu ngalaba kacha ibu n'ule ọ bụla: ebe ahụ ka ị ga-etinye oge ọmụmụ kacha ukwuu.",
          youCanNow: "ịkpọ aha ule A+ abụọ ahụ, koodu ha na ngalaba ha ndị bụ isi, ma chọta nkọwa dị ugbu a na peeji ọfịshal.",
          quickCheck: [
            { objective: "O6", q: "Ule ole ka ị ga-agafe iji nweta CompTIA A+?", options: ["Otu", "Abụọ: Core 1 na Core 2", "Atọ", "Ọ dịghị; ihe ọmụmụ a na-enye ya"], answer: 1, why: "A+ chọrọ ma Core 1 ma Core 2; ihe ọmụmụ a na-akwado gị naanị." },
            { objective: "O6", q: "Ebee ka i kwesịrị ịlele ọnụahịa A+ na ụdị ule dị ugbu a?", options: ["Ihe e dere na forum n'afọ gara aga", "Enyi gafere na 2019", "Weebụsaịtị CompTIA ọfịshal", "Vidiyo ọ bụla gbasara A+"], answer: 2, why: "Ọnụahịa na ụdị ule na-agbanwe; peeji ọfịshal bụ naanị ebe a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          title: "N'ime kọmputa: akụkụ hardware ndị bụ isi",
          objectives: ["O1"],
          minutes: 6,
          goal: "Mata akụkụ hardware ndị bụ isi nke kọmputa ma kwuo ihe nke ọ bụla na-eme.",
          text: [
            "Hardware bụ akụkụ ndị ị pụrụ imetụ aka. Motherboard bụ bọọdụ bụ isi ihe niile na-abanye na ya. CPU (processor) na-eche echiche. RAM (ebe nchekwa nwa oge) na-ejide ihe ị na-arụ ugbu a, ọ na-ehichapụ mgbe ọkụ gbanyụrụ. Ebe nchekwa (storage) na-edebe faịlụ gị mgbe ọkụ gbanyụrụ: SSD (solid-state drive, na-agba ọsọ, enweghị akụkụ na-akpali akpali) ma ọ bụ HDD (hard disk drive, na-adị nwayọọ, nwere diski na-agba gburugburu).",
            "Power supply (PSU) na-agbanwe ọkụ si na mgbidi ka ọ bụrụ ọkụ akụkụ ndị ahụ na-eji. Graphics card (GPU) na-ese foto na ihuenyo; ọtụtụ kọmputa nwere graphics wuru n'ime CPU. Ọdụ (port) dị n'èzí gụnyere USB (USB-A na USB-C dị obere nke ị pụrụ ịtụgharị), HDMI na DisplayPort maka ihuenyo, na Ethernet maka netwọk waya.",
            "Ihe ịrịba ama a na-ahụkarị na help desk: kọmputa na-adị nwayọọ mgbe ọtụtụ mmemme mepere emepe nwere ike ịchọ RAM karịa; kọmputa na-ewe ogologo oge ịmalite nwere ike inwe hard drive fọrọ nke nta ka ọ jupụta ma ọ bụ nke ochie.",
            "Nchekwa buru ụzọ: ọ dịghị mkpa imeghe kọmputa maka ihe ọmụmụ a. Onye teknịshan na-agbanyụ kọmputa ma wepụ ya na ọkụ mgbe niile tupu o meghee ya, na-eyi anti-static wrist strap, anaghịkwa emeghe power supply ma ọ bụ batrị zara aza."
          ],
          words: [["Hardware", "akụkụ kọmputa ndị a na-ahụ anya ma metụ aka."], ["CPU", "processor; akụkụ na-agba mmemme ma na-agụkọ ọnụ."], ["RAM", "ebe nchekwa nwa oge na-ejide mmemme na faịlụ mepere emepe; ọ na-ehichapụ mgbe ọkụ gbanyụrụ."], ["SSD / HDD", "draịvụ nchekwa na-edebe faịlụ mgbe ọkụ gbanyụrụ. SSD na-agba ọsọ karịa, enweghịkwa akụkụ na-akpali akpali."], ["Motherboard", "bọọdụ sekit bụ isi na-ejikọ akụkụ niile."], ["ESD", "electrostatic discharge: obere ọkụ static nwere ike imebi akụkụ kọmputa."]],
          slides: [
            { title: "Akụkụ ndị bụ isi", bullets: ["Motherboard: na-ejikọ ihe niile", "CPU: na-eche echiche", "RAM: ebe nchekwa nwa oge, na-ehichapụ mgbe ọkụ gbanyụrụ", "SSD ma ọ bụ HDD: na-edebe faịlụ gị"] },
            { title: "Akụkụ na ọdụ ndị ọzọ", bullets: ["Power supply (PSU) na graphics (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Ihe ịrịba ama n'ọrụ", bullets: ["Nwayọọ mgbe ọtụtụ mmemme mepere: ikekwe RAM adịghị ezu", "Ọmalite nwayọọ: draịvụ jupụtara ma ọ bụ nke ochie"] },
            { title: "Nchekwa", bullets: ["Gbanyụọ ma wepụ na ọkụ tupu i meghee", "Anti-static wrist strap", "Emeghela power supply ma ọ bụ batrị zara aza"] }
          ],
          tryIt: "Lee kọmputa gị naanị site n'èzí. Depụta ọdụ ọ bụla ị hụrụ ma kpọọ ya aha (USB-A, USB-C, HDMI, Ethernet, headphone). Wee, na Windows meghee Settings > System > About, ma ọ bụ na Mac meghee Apple menu > About This Mac, ma dee processor gị na RAM (ebe nchekwa) ole kọmputa ahụ nwere.",
          youCanNow: "ịkpọ aha akụkụ kọmputa ndị bụ isi, kwuo ihe nke ọ bụla na-eme, ma chọta processor na RAM nke kọmputa gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu akụkụ na-edebe faịlụ gị mgbe a gbanyụrụ kọmputa?", options: ["RAM", "CPU", "Power supply", "SSD ma ọ bụ hard drive"], answer: 3, why: "Ebe nchekwa (SSD ma ọ bụ HDD) na-edebe faịlụ; RAM na-ehichapụ mgbe ọkụ gbanyụrụ." },
            { objective: "O1", q: "Tupu imeghe kọmputa desktop, gịnị ka onye teknịshan na-ebu ụzọ eme?", options: ["Gbanyụọ ya ma wepụ ya na ọkụ", "Meghee power supply", "Wepụ batrị mgbe ọ na-arụ ọrụ", "Fesa mmiri ka ọ jụọ oyi"], answer: 0, why: "Buru ụzọ gbanyụọ ma wepụ na ọkụ; nke a na-echebe gị na akụkụ ndị ahụ." }
          ]
        },
        {
          title: "Ntọala netwọk: adreesị IP, ipconfig na ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Lelee njikọ netwọk kọmputa site na ipconfig na ping ma dee ihe ị hụrụ.",
          text: [
            "Ngwaọrụ ọ bụla dị na netwọk na-enweta adreesị IP, dị ka adreesị okporo ụzọ maka data. N'ụlọ, ọ na-adịkarị ka 192.168.x.x ma ọ bụ 10.x.x.x. Router gị na-ekesa adreesị ndị a n'onwe ya site n'ọrụ a na-akpọ DHCP. Default gateway bụ adreesị router: ọnụ ụzọ si na netwọk ụlọ gị gaa n'ịntanetị.",
            "Ọ bụrụ na kọmputa Windows gosiri adreesị na-amalite na 169.254, o nweghị ike inweta adreesị site na DHCP. Nke ahụ bụ ihe ịrịba ama dị ukwuu: lelee waya ma ọ bụ Wi-Fi, wee lelee router.",
            "Ngwa abụọ onye teknịshan ọ bụla na-eji: ipconfig na-egosi adreesị IP gị na default gateway (na Windows, meghee Command Prompt ma pịnye ipconfig). ping na-ezipu obere ozi nnwale na ngwaọrụ ọzọ ma gosi ma ọ zara. Buru ụzọ ping default gateway; ọ bụrụ na nke ahụ rụrụ ọrụ, ping weebụsaịtị dị ka comptia.org.",
            "Mee omume ndị a naanị na kọmputa na netwọk nke gị. Ụfọdụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe ọrụ na-egbochi command prompt; ọ bụrụ otu ahụ, jiri ntọala netwọk chọta adreesị IP gị kama."
          ],
          steps: ["Windows: pịa igodo Windows, pịnye cmd ma meghee Command Prompt. Mac: meghee Terminal.", "Windows: pịnye ipconfig ma pịa Enter. Dee IPv4 address na default gateway. Mac: chọta adreesị IP na router na System Settings > Network.", "Pịnye ping sochiri adreesị gateway gị, dịka ọmụmaatụ ping 192.168.1.1, ma pịa Enter.", "Na Mac, pịa Control na C ka ping kwụsị.", "Gụọ ihe ọ gosiri: azịza (replies) pụtara na njikọ ahụ na-arụ ọrụ; \"timed out\" ma ọ bụ \"unreachable\" pụtara na ọ naghị arụ."],
          words: [["Adreesị IP", "nọmba na-amata ngwaọrụ na netwọk."], ["DHCP", "ọrụ ahụ, nke na-adịkarị na router, na-enye ngwaọrụ adreesị IP ha n'onwe ya."], ["Default gateway", "adreesị router; ụzọ si na netwọk gị pụọ n'ịntanetị."], ["ipconfig", "iwu (command) Windows na-egosi ntọala netwọk gị."], ["ping", "iwu na-anwale ma ngwaọrụ ọzọ na-aza site na netwọk."], ["Router", "igbe na-ejikọ netwọk ụlọ gị na ịntanetị."]],
          slides: [
            { title: "Adreesị na netwọk", bullets: ["Ngwaọrụ ọ bụla na-enweta adreesị IP", "Adreesị ụlọ: ọtụtụ mgbe 192.168.x.x ma ọ bụ 10.x.x.x", "DHCP na-ekesa ha; router bụ gateway"] },
            { title: "Ihe ịrịba ama 169.254", bullets: ["Windows na-egosi 169.254.x.x", "O nweghị ike inweta adreesị site na DHCP", "Lelee waya ma ọ bụ Wi-Fi, wee lelee router"] },
            { title: "Ngwa abụọ", bullets: ["ipconfig: na-egosi adreesị gị na gateway", "ping: na-anwale ma ngwaọrụ ọzọ na-aza", "Buru ụzọ ping gateway, wee ping weebụsaịtị"] },
            { title: "Mee omume n'enweghị nsogbu", bullets: ["Naanị na kọmputa na netwọk nke gị", "E gbochiri iwu ahụ? Jiri ntọala netwọk"] }
          ],
          sources: [CORE1],
          tryIt: "Na kọmputa nke gị, gbasoo nzọụkwụ ndị ahụ. Dee adreesị IP gị na default gateway, wee ping gateway ma ping comptia.org. Dee \"ọ na-arụ\" ma ọ bụ \"ọ naghị arụ\" maka nke ọ bụla. Debe ndetu a maka ọrụ ikpeazụ gị.",
          youCanNow: "ịchọta adreesị IP gị na default gateway, nwalee njikọ site na ping, ma kwuo ihe adreesị 169.254 pụtara.",
          quickCheck: [
            { objective: "O2", q: "Laptop Windows na-egosi adreesị IP 169.254.20.5. Gịnị ka nke a na-agwa gị?", options: ["Ịntanetị na-agba ọsọ nke ukwuu", "O nwetaghị adreesị site na DHCP", "Laptop ahụ nwere virus", "Ihuenyo ahụ chọrọ ịgbanwe"], answer: 1, why: "Adreesị 169.254 pụtara na ngwaọrụ ahụ erughị DHCP, ya mere lelee njikọ na router." },
            { objective: "O2", q: "Kedu iwu na-egosi adreesị IP na default gateway nke kọmputa Windows?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "ipconfig na-egosi ntọala netwọk gị; ping na-anwale njikọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, hardware na netwọk",
        questions: [
          { objective: "O6", q: "Kedu ule na-ekpuchi sistemụ arụmọrụ na nchekwa?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Ha abụọ na-ekpuchi naanị hardware", "Ọ dịghị nke ọ bụla"], answer: 1, why: "Core 2 na-ekpuchi sistemụ arụmọrụ, nchekwa, idozi nsogbu sọftwụia na usoro ọrụ." },
          { objective: "O1", q: "Onye ọrụ kwuru na kọmputa na-adị nwayọọ mgbe ọtụtụ mmemme mepere emepe. Kedu akụkụ nwere ike ịbụ ihe kpatara ya?", options: ["RAM ezughị ezu", "Ọdụ HDMI", "Keyboard", "Waya monitor"], answer: 0, why: "RAM na-ejide mmemme mepere emepe; ọ bụrụ na o pere mpe, kọmputa na-adị nwayọọ mgbe ọtụtụ mepere." },
          { objective: "O1", q: "Kedu akụkụ na-eche echiche bụ isi ma na-agba mmemme?", options: ["Power supply", "Ọdụ Ethernet", "Hard drive", "CPU"], answer: 3, why: "CPU (processor) na-agba mmemme ma na-agụkọ ọnụ." },
          { objective: "O2", q: "Gịnị bụ default gateway?", options: ["Weebụsaịtị kacha agba ọsọ", "Ụdị waya", "Adreesị router, ụzọ e si apụ n'ịntanetị", "Okwuntughe kọmputa"], answer: 2, why: "Default gateway bụ router na-ejikọ netwọk gị na ịntanetị." },
          { objective: "O2", q: "I ping gateway gị ma nweta azịza, mana ping weebụsaịtị adaghị. Ebee ka nsogbu ahụ nwere ike ịdị?", options: ["N'etiti router na ịntanetị", "Na RAM kọmputa", "Na keyboard", "Na ihuenyo"], answer: 0, why: "Kọmputa ahụ na-eru router, ya mere nkwụsị ahụ dị n'ofe router: njikọ ịntanetị." }
        ]
      }
    },
    {
      name: "Isi 2: Sistemụ, idozi nsogbu na atụmatụ gị",
      lessons: [
        {
          title: "Ngwa sistemụ arụmọrụ ị na-eji kwa ụbọchị",
          objectives: ["O3"],
          minutes: 5,
          goal: "Chọta ụdị sistemụ, ebe nchekwa fọdụrụ, mmemme na-arụ ọrụ na ọnọdụ mmelite na kọmputa nke gị.",
          text: [
            "Sistemụ arụmọrụ (OS) bụ mmemme bụ isi na-agba kọmputa: Windows, macOS, Linux, ma ọ bụ na ekwentị Android na iOS. A+ Core 2 na-atụ anya ka ị mara ụzọ gị n'ime ha.",
            "Na Windows: Settings > System > About na-egosi ụdị ya. Settings > System > Storage na-egosi ebe fọdụrụ. Task Manager (pịa Ctrl + Shift + Esc) na-egosi mmemme na-arụ ọrụ na otu CPU na memory si arụsi ọrụ ike; ị nwere ike imechi mmemme kpọnwụrụ akpọnwụ ebe ahụ. Settings > Windows Update na-egosi ma mmelite na-eche.",
            "Na Mac: Apple menu > About This Mac na-egosi ụdị ya. Activity Monitor (chọọ ya site na Spotlight) na-egosi mmemme na-arụ ọrụ. System Settings > General > Software Update na-egosi mmelite. Storage dị n'okpuru System Settings > General > Storage.",
            "Omume nchekwa ọma bụ akụkụ nke ọrụ ahụ: wụnye mmelite, hapụ antivirus dị n'ime ya ka ọ na-arụ (Microsoft Defender na Windows), jiri akaụntụ nkịtị (ọ bụghị admin) maka ọrụ kwa ụbọchị, ma kpọchie ihuenyo mgbe ị na-apụ (igodo Windows + L na Windows)."
          ],
          steps: ["Chọta aha OS na ụdị ya.", "Chọta ebe nchekwa ole fọdụrụ.", "Meghee Task Manager ma ọ bụ Activity Monitor ma chọta mmemme na-eji memory kacha ukwuu.", "Lelee mmelite.", "Kpọchie ihuenyo gị, wee meghee ya."],
          words: [["Sistemụ arụmọrụ (OS)", "sọftwụia bụ isi na-agba kọmputa ma ọ bụ ekwentị, dị ka Windows ma ọ bụ macOS."], ["Task Manager", "ngwa Windows na-egosi mmemme na-arụ ọrụ ma na-ekwe ka i mechie nke kpọnwụrụ akpọnwụ."], ["Activity Monitor", "ngwa Mac na-egosi mmemme na-arụ ọrụ."], ["Akaụntụ admin", "akaụntụ nwere ike ịwụnye sọftwụia ma gbanwee ntọala. Ọrụ kwa ụbọchị kwesịrị iji akaụntụ nkịtị."]],
          slides: [
            { title: "Mara sistemụ arụmọrụ", bullets: ["Windows, macOS, Linux; Android na iOS na ekwentị", "Core 2 na-anwale ha niile"] },
            { title: "Ngwa Windows", bullets: ["Settings > System > About: ụdị", "Settings > System > Storage: ebe fọdụrụ", "Ctrl + Shift + Esc: Task Manager", "Settings > Windows Update"] },
            { title: "Ngwa Mac", bullets: ["Apple menu > About This Mac", "Activity Monitor", "System Settings > General > Software Update"] },
            { title: "Omume nchekwa", bullets: ["Wụnye mmelite; hapụ antivirus ka ọ na-arụ", "Ọrụ kwa ụbọchị na akaụntụ nkịtị", "Kpọchie ihuenyo mgbe ị na-apụ"] }
          ],
          sources: [CORE2],
          tryIt: "Na kọmputa nke gị, dee: aha OS na ụdị ya, ebe nchekwa fọdụrụ, mmemme na-eji memory kacha ukwuu ugbu a, na ma mmelite ọ bụla na-eche. Tinye nke a na ndetu netwọk gị sitere na Nkuzi 3. Ugbu a i nwere ọtụtụ n'ime akụkụ 2 nke ọrụ ikpeazụ gị.",
          youCanNow: "iji ngwa dị n'ime kọmputa lelee ụdị ya, ebe nchekwa, mmemme na-arụ ọrụ na mmelite.",
          quickCheck: [
            { objective: "O3", q: "Mmemme kpọnwụrụ akpọnwụ na Windows. Kedu ngwa na-ekwe ka i mechie ya?", options: ["Task Manager", "Paint", "Recycle Bin", "Calculator"], answer: 0, why: "Task Manager na-egosi mmemme na-arụ ọrụ ma nwee ike imechi nke kpọnwụrụ akpọnwụ." },
            { objective: "O3", q: "Kedu omume ka mma maka ọrụ kwa ụbọchị?", options: ["Iji akaụntụ admin mgbe niile", "Ịgbanyụ mmelite", "Iji akaụntụ nkịtị ma hapụ mmelite ka ọ na-arụ", "Ịgbanyụ antivirus ka ọ gbaa ọsọ"], answer: 2, why: "Akaụntụ nkịtị na mmelite dị ọhụrụ na-ebelata mmebi ma ọ bụrụ na ihe mebiri." }
          ]
        },
        {
          title: "Usoro idozi nsogbu nwere nzọụkwụ isii",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tinye nzọụkwụ isii nke CompTIA maka idozi nsogbu n'otu nsogbu, n'usoro.",
          text: [
            "Ndị teknịshan ọma anaghị akọ nkọ. Ha na-agbaso usoro. Ebumnuche A+ na-eji nzọụkwụ isii: 1. Mata nsogbu ahụ. 2. Chepụta echiche gbasara ihe nwere ike ịkpata ya (jụọ ihe doro anya). 3. Nwalee echiche ahụ ka ịchọta ihe kpatara ya. 4. Mee atụmatụ ma dozie ya. 5. Hụ na sistemụ niile na-arụ ọrụ ma, ọ bụrụ na ọ ga-enyere aka, mee ihe ga-egbochi ka ọ ghara imeghachi. 6. Dee ihe ị hụrụ, ihe i mere na ihe si na ya pụta.",
            "Nzọụkwụ 1 pụtara ịjụ onye ọrụ ajụjụ: Gịnị mere? Kedu mgbe ọ malitere? Ọ dị ihe gbanwere? Ọ nwere ozi njehie (error message)? Chekwaa data dị mkpa (back up) tupu i gbanwee ihe ọ bụla.",
            "Nzọụkwụ 2 pụtara ịmalite n'ihe dị mfe nwere ike ịkpata ya: Ọ jikọrọ na ọkụ? Wi-Fi gbanyere? E malitegharịrị ya (restart)? Ọ bụrụ na echiche mbụ gị ezighi ezi, chepụta nke ọhụrụ ma nwalee ọzọ, ma ọ bụ bulie ya elu (escalate), ya bụ nyefee ya onye teknịshan ka gị.",
            "Ọmụmaatụ: printa anaghị ebipụta. Echiche: ọ nọ offline. Nnwale: ihuenyo printa na-egosi na akwụkwọ rapaara n'ime ya (paper jam). Ndozi: wepụ akwụkwọ ahụ n'enweghị nsogbu. Nlele: bipụta peeji nnwale. Dee ya: \"Akwụkwọ rapaara na tray 2, e wepụrụ ya, e bipụtara peeji nnwale.\""
          ],
          steps: ["Mata nsogbu ahụ: jụọ ajụjụ, chekwaa data.", "Chepụta echiche gbasara ihe kpatara ya: malite n'ihe doro anya.", "Nwalee echiche ahụ. O zighi ezi? Chepụta nke ọhụrụ ma ọ bụ bulie ya elu.", "Mee atụmatụ ma dozie ya.", "Hụ na ọ na-arụ ọrụ ma gbochie ka ọ ghara imeghachi ma ọ bụrụ na i nwere ike.", "Dee ihe ị hụrụ, ihe i mere na ihe si na ya pụta."],
          words: [["Idozi nsogbu (troubleshooting)", "ịchọta na idozi ihe kpatara nsogbu nzọụkwụ n'nzọụkwụ."], ["Echiche gbasara ihe kpatara ya", "ihe kacha mma i chere na-akpata nsogbu ahụ."], ["Bulie elu (escalate)", "nyefee nsogbu onye nwere nkà ma ọ bụ ikike karịa."], ["Dee ya (document)", "dee ihe ị hụrụ na ihe i mere, ọtụtụ mgbe n'ime tiketi."]],
          slides: [
            { title: "Nzọụkwụ isii ahụ", bullets: ["1 Mata  2 Echiche  3 Nwalee", "4 Atụmatụ na ndozi  5 Lelee  6 Dee ya"] },
            { title: "Nzọụkwụ 1: mata", bullets: ["Gịnị mere? Mgbe ole? Gịnị gbanwere?", "Ọ nwere ozi njehie?", "Chekwaa data tupu mgbanwe"] },
            { title: "Nzọụkwụ 2 na 3", bullets: ["Jụọ ihe doro anya: ọkụ, waya, restart", "Echiche ezighi ezi? Nwaa nke ọhụrụ ma ọ bụ bulie ya elu"] },
            { title: "Nzọụkwụ 4 ruo 6", bullets: ["Dozie ya, wee lelee sistemụ niile", "Gbochie ka ọ ghara imeghachi ma ọ bụrụ na i nwere ike", "Dee ihe niile"] }
          ],
          sources: [CORE1],
          tryIt: "Họrọ nsogbu n'ezie i nwere (laptop na-adị nwayọọ, enweghị Wi-Fi, ekwentị na-anaghị chaji) ma ọ bụ jiri: \"Onye ọrụ enweghị ike ijikọ na Wi-Fi mgbe ọ gbanwere tebụl.\" Dee nzọụkwụ isii niile maka ya n'akwụkwọ, ya na ihe ị ga-ajụ, lelee ma dee na nzọụkwụ ọ bụla.",
          youCanNow: "idozi nsogbu site na nzọụkwụ isii nke idozi nsogbu ma dee nke ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Kedu nzọụkwụ MBỤ nke idozi nsogbu?", options: ["Gbanwee hard drive", "Dee ndozi ahụ", "Mata nsogbu ahụ", "Hụ na sistemụ niile na-arụ ọrụ"], answer: 2, why: "Ị ga-aghọta nsogbu ahụ tupu i chee ihe kpatara ya." },
            { objective: "O4", q: "I doziri nsogbu ahụ. Gịnị na-abịa tupu ide ya?", options: ["Hụ na sistemụ niile na-arụ ọrụ", "Mechie tiketi n'agwaghị onye ọrụ", "Chepụta echiche ọhụrụ", "Chekwaa data na nke mbụ ya"], answer: 0, why: "Nzọụkwụ 5 bụ ihụ na ihe niile na-arụ ọrụ; nzọụkwụ 6 bụ ide ya." }
          ]
        },
        {
          title: "Tiketi, ikwurịta okwu na ndị ọrụ, na atụmatụ ọmụmụ A+ gị",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Dee tiketi help desk zuru ezu na atụmatụ ọmụmụ na ule A+ nwere ụbọchị.",
          text: [
            "Tiketi bụ ndekọ nke otu nsogbu. Tiketi ọma nwere: aha onye ọrụ na otu e si akpọtụrụ ya (n'ọrụ n'ezie, site na sistemụ ụlọ ọrụ ahụ), ngwaọrụ ahụ, nchịkọta nkenke, nkọwa na ozi njehie ọ bụla, priority (otu o si dị ngwa), nzọụkwụ e mere, na ihe si na ya pụta. Dee ya ka onye teknịshan ọzọ nwee ike iburu ya ma ghọta ya.",
            "Otu i si ekwu okwu dị mkpa dị ka ndozi ahụ. Gee ntị n'egbochighị ya, kwughachi nsogbu ahụ, jiri okwu dị mfe, ataghị onye ọrụ ụta, gwa ya oge ị ga-enye ya ozi ọhụrụ, ma soro ya kwado na edozila ya tupu i mechie tiketi. Debe ozi ya na nzuzo.",
            "Ugbu a, hazie ule gị. Jiri ibu ngalaba i dere na Nkuzi 1. Họrọ ụbọchị ebumnuche maka ule ọ bụla. Nye ngalaba ndị ka ibu izu karịa. Jiri omume n'efu: akwụkwọ exam objectives n'efu nke CompTIA, kọmputa nke gị, na nnwale ihe ọmụma ndị dị ebe a. Ọtụtụ ndị na-amụ awa 5 ruo 10 kwa izu; họrọ ihe dabara ndụ gị ma dee ya.",
            "Tupu i debanye aha, lelee peeji ọfịshal maka ọnụahịa dị ugbu a, mmemme mbelata ọnụahịa ọ bụla na ụzọ e si ede ule. Ụlọ ọrụ workforce, mmemme ndị agha mbụ na mmemme re-entry na-enyere aka mgbe ụfọdụ n'ụgwọ ule, ya mere jụọ nke gị."
          ],
          steps: ["Tiketi: dejupụta onye ọrụ, ngwaọrụ, nchịkọta, nkọwa, priority, nzọụkwụ e mere na ihe si na ya pụta.", "Azịza: kelee ya, kwuo ihe ị hụrụ n'okwu dị mfe, kwuo ihe ga-esote na mgbe ọ ga-eme.", "Atụmatụ: dee ụbọchị ebumnuche maka Core 1 na Core 2.", "Depụta ngalaba ọ bụla na ibu ya na izu ole ị na-enye ya.", "Dee awa ọmụmụ gị kwa izu na ebe ị ga-amụ ihe.", "Lelee peeji ọfịshal maka ọnụahịa na ụzọ e si ede ule; jụọ mmemme dị nso maka enyemaka n'ụgwọ."],
          words: [["Tiketi", "ndekọ e dere ede nke otu arịrịọ enyemaka, site na mmalite ruo na njedebe."], ["Priority", "otu tiketi si dị ngwa, ọtụtụ mgbe low, medium, high ma ọ bụ critical."], ["Atụmatụ ọmụmụ", "usoro oge e dere ede nke ihe ị ga-amụ, mgbe ị ga-amụ ya, na ụbọchị ule gị."]],
          slides: [
            { title: "Tiketi zuru ezu", bullets: ["Onye ọrụ, ngwaọrụ, nchịkọta, nkọwa, ozi njehie", "Priority, nzọụkwụ e mere, ihe si na ya pụta", "Onye teknịshan ọzọ nwere ike iburu ya"] },
            { title: "Ikwurịta okwu na ndị ọrụ", bullets: ["Gee ntị ma kwughachi nsogbu ahụ", "Okwu dị mfe, enweghị ịta ụta", "Kwuo mgbe ị ga-enye ozi ọhụrụ; kwado ndozi ahụ"] },
            { title: "Atụmatụ A+ gị", bullets: ["Ụbọchị ebumnuche maka Core 1 na maka Core 2", "Izu karịa maka ngalaba ndị ka ibu", "Awa kwa izu e dere ede"] },
            { title: "Tupu i debanye aha", bullets: ["Lelee comptia.org maka ọnụahịa na ụzọ e si ede ule", "Jụọ mmemme workforce, ndị agha mbụ ma ọ bụ re-entry maka enyemaka"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Ọrụ ikpeazụ: dee tiketi maka nsogbu Nkuzi 5 gị na ngalaba niile na nzọụkwụ isii ahụ, ya na azịza ahịrịokwu abụọ nye onye ọrụ. Tinye ndetu kọmputa gị sitere na Nkuzi 3 na 4 n'otu peeji. Wee dee atụmatụ ọmụmụ na ule A+ gị: ụbọchị ebumnuche maka Core 1 na Core 2, ngalaba ọ bụla na ibu ya, na awa gị kwa izu.",
          youCanNow: "ide tiketi enyemaka doro anya, zaa onye ọrụ n'ụzọ nwere nkwanye ugwu, ma gbasoo atụmatụ gị nwere ụbọchị ruo n'ule A+ abụọ ahụ.",
          quickCheck: [
            { objective: "O5", q: "Kedu nchịkọta tiketi kacha baa uru?", options: ["\"Ọ mebiri.\"", "\"Onye ọrụ amaghị kọmputa.\"", "\"Nyere m aka!!\"", "\"Laptop enweghị ike ijikọ na Wi-Fi ọfịs kemgbe ọ kwagara na tebụl 14; njehie: no internet.\""], answer: 3, why: "Ọ na-akpọ aha ngwaọrụ, nsogbu, mgbe ọ malitere na njehie ahụ, n'enweghị ịta ụta." },
            { objective: "O6", q: "Core 1 nwere ngalaba bara 28% na otu bara 11%. Kedu otu i kwesịrị isi hazie?", options: ["Nye ha abụọ otu oge", "Nye ngalaba 28% oge ọmụmụ karịa", "Hapụ ngalaba 28%", "Mụọ naanị ngalaba 11%"], answer: 1, why: "Ibu ka ukwuu pụtara ajụjụ karịa, ya mere ha kwesịrị oge ọmụmụ karịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Sistemụ, idozi nsogbu na atụmatụ gị",
        questions: [
          { objective: "O3", q: "Ebee ka ị na-ahụ ụdị Windows?", options: ["Task Manager > Startup", "Recycle Bin", "Settings > System > About", "Menu printa"], answer: 2, why: "Settings > System > About na-egosi edition na ụdị Windows." },
          { objective: "O4", q: "Monitor gbara oji. Kedu echiche i kwesịrị ibu ụzọ nwalee?", options: ["Motherboard anwụọla", "Waya ọkụ ma ọ bụ waya vidiyo atọpụla", "A ga-awụnyeghachi sistemụ arụmọrụ", "CPU na-adị nwayọọ nke ukwuu"], answer: 1, why: "Jụọ ihe doro anya: waya na ọkụ bụ ihe a na-ahụkarị ma dịkwa mfe ilele." },
          { objective: "O4", q: "Echiche mbụ gị adịghị mma. Gịnị ka ị na-eme?", options: ["Chepụta echiche ọhụrụ ma nwalee ya, ma ọ bụ bulie ya elu", "Mechie tiketi", "Gwa onye ọrụ na a pụghị idozi ya", "Gbanwee kọmputa"], answer: 0, why: "Usoro ahụ na-alaghachi azụ: echiche ọhụrụ, ma ọ bụ ibuli ya elu ma ọ bụrụ na i kwụsịrị." },
          { objective: "O5", q: "Iwe na-ewe onye ọrụ n'ihi na laptop ya mebiri tupu oge njedebe ọrụ ya. Kedu azịza mbụ kacha mma?", options: ["\"Ọ ga-abụ gị mebiri ya.\"", "\"Nke ahụ abụghị nsogbu m.\"", "Jiri okwu teknụzụ ka o tụkwasị gị obi", "Gee ntị, kwughachi nsogbu ahụ, ma kwuo ihe ị ga-eme ọzọ"], answer: 3, why: "Ige ntị, ịkwado na ịkwado nzọụkwụ na-esote doro anya na-eme ka onye ọrụ dajụọ ma nyekwa gị eziokwu." },
          { objective: "O6", q: "Kedu nke bụ akụkụ nke atụmatụ ọmụmụ A+ zuru ezu?", options: ["Ụbọchị ebumnuche maka ule abụọ ahụ na awa ọmụmụ kwa izu", "Naanị aha asambodo ahụ", "Ndepụta kọmputa ndị ị masịrị", "Social Security number gị"], answer: 0, why: "Ụbọchị, ngalaba na awa kwa izu na-eme ka ebumnuche ghọọ atụmatụ ị pụrụ ịgbaso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Enyemaka IT (Nkwadebe maka CompTIA A+)",
    questions: [
      { objective: "O6", q: "Onye na-enye asambodo A+?", options: ["Ihe ọmụmụ a", "CompTIA, mgbe i gafere ule abụọ ahụ", "Ụlọ ọrụ ịntanetị gị", "Onye were mmadụ n'ọrụ ọ bụla"], answer: 1, why: "CompTIA na-enye A+; ihe ọmụmụ a na-akwado gị." },
      { objective: "O6", q: "Koodu ule 220-1201 bụ maka:", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "220-1201 bụ Core 1; 220-1202 bụ Core 2." },
      { objective: "O6", q: "Ajụjụ performance-based na-arịọ gị ka:", options: ["I mee obere ọrụ aka", "I dee edemede", "Gị na mmadụ kparịta ụka", "I weta kọmputa nke gị"], answer: 0, why: "Ajụjụ performance-based na-eme ka i mee ihe, dị ka ịhazi ma ọ bụ idozi ntọala." },
      { objective: "O1", q: "Kedu akụkụ bụ ebe nchekwa nwa oge na-ehichapụ mgbe ọkụ gbanyụrụ?", options: ["SSD", "HDD", "Power supply", "RAM"], answer: 3, why: "RAM na-ejide ọrụ mepere emepe naanị mgbe kọmputa gbanye." },
      { objective: "O1", q: "Kedu nke bụ eziokwu gbasara SSD ma e jiri ya tụnyere HDD?", options: ["O nwere diski na-agba gburugburu", "Ọ na-agba ọsọ karịa ọtụtụ mgbe, enweghịkwa akụkụ na-akpali akpali", "Ọ na-edebe naanị egwu", "Ọ bụ ụdị ihuenyo"], answer: 1, why: "SSD na-eji chip na-enweghị akụkụ na-akpali akpali, ya mere ọ na-agba ọsọ karịa." },
      { objective: "O1", q: "Kedu ọdụ na-ejikọ kọmputa na netwọk waya?", options: ["Ethernet", "HDMI", "Ọdụ headphone", "USB-C naanị maka chaji"], answer: 0, why: "Ethernet bụ ọdụ netwọk waya; HDMI bụ maka ihuenyo." },
      { objective: "O1", q: "Kedu ihe onye teknịshan na-ekwesịghị imeghe MGBE Ọ BỤLA?", options: ["Igbe desktop, mgbe e wepụrụ ya na ọkụ", "Menu ntọala laptop", "Power supply", "Tiketi"], answer: 2, why: "Power supply na-ejide ọkụ dị egwu e chekwara n'ime ya; a na-agbanwe ha, anaghị emeghe ha." },
      { objective: "O2", q: "Gịnị ka DHCP na-eme?", options: ["Na-ebipụta akwụkwọ", "Na-ekesa adreesị IP n'onwe ya", "Na-egbochi virus", "Na-achaji batrị"], answer: 1, why: "DHCP, nke na-adịkarị na router, na-enye ngwaọrụ adreesị IP ha." },
      { objective: "O2", q: "Kedu iwu na-anwale ma ngwaọrụ ọzọ na-aza site na netwọk?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "ping na-ezipu ozi nnwale ma gosi ma azịza na-alọghachi." },
      { objective: "O2", q: "Kedu adreesị nwere ike ịbụ adreesị netwọk ụlọ nkịtị?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x bụ adreesị ụlọ a na-ahụkarị; 169.254 pụtara na DHCP adaghị, 999 abụghịkwa nke ziri ezi." },
      { objective: "O3", q: "Kedu igodo na-emeghe Task Manager na Windows?", options: ["Ctrl + P", "Ctrl + Shift + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Shift + Esc na-emeghe Task Manager; Windows + L na-akpọchi ihuenyo." },
      { objective: "O3", q: "Na Mac, kedu ngwa na-egosi mmemme na-arụ ọrụ?", options: ["Activity Monitor", "Notes", "Photos", "Calendar"], answer: 0, why: "Activity Monitor bụ Task Manager nke Mac." },
      { objective: "O3", q: "Ị na-apụ na tebụl gị n'ọrụ. Gịnị ka ị na-eme?", options: ["Hapụ ihuenyo ka ọ dị mepere emepe", "Gbanyụọ antivirus", "Kpọchie ihuenyo", "Banye dị ka admin"], answer: 2, why: "Ịkpọchi ihuenyo na-egbochi ndị ọzọ iji akaụntụ gị." },
      { objective: "O4", q: "Hazie ndị a n'usoro: Nwalee echiche, Mata nsogbu, Chepụta echiche.", options: ["Echiche, Mata, Nwalee", "Nwalee, Echiche, Mata", "Mata, Nwalee, Echiche", "Mata, Echiche, Nwalee"], answer: 3, why: "Mata nsogbu ahụ, chepụta echiche, wee nwalee ya." },
      { objective: "O4", q: "Gịnị ka i kwesịrị ime tupu ịgbanwe ihe na kọmputa onye ọrụ?", options: ["Chekwaa data dị mkpa (back up)", "Hichapụ faịlụ ochie", "Gbanwee okwuntughe ya", "Wụnyeghachi sistemụ ahụ"], answer: 0, why: "Ibu ụzọ chekwaa data na-echebe data onye ọrụ ma ọ bụrụ na ndozi adaghị nke ọma." },
      { objective: "O4", q: "Kedu nzọụkwụ IKPEAZỤ nke usoro idozi nsogbu?", options: ["Nwalee echiche ahụ", "Dee ihe a hụrụ, ihe e mere na ihe si na ya pụta", "Mata nsogbu ahụ", "Malitegharịa kọmputa"], answer: 1, why: "Nzọụkwụ 6 bụ ide ya, ka ndị ọzọ mụta ihe na ya ma ndekọ ahụ zuo ezu." },
      { objective: "O5", q: "Kedu nke kwesịrị ịdị na tiketi help desk?", options: ["Echiche gị gbasara onye ọrụ", "Njakịrị gbasara nsogbu ahụ", "Nzọụkwụ e mere na ihe si na ya pụta", "Ozi ụlọ akụ onye ọrụ"], answer: 2, why: "Nzọụkwụ na ihe si na ha pụta na-enyere onye teknịshan ọ bụla aka ịghọta ihe mere." },
      { objective: "O5", q: "Kedu mgbe i kwesịrị imechi tiketi?", options: ["Ozugbo ị malitere ọrụ", "Mgbe onye ọrụ kwadoro na edozila ya", "Mgbe onye ọrụ akwụsịla ịza ruo otu awa", "Tupu i nwalee ndozi ahụ"], answer: 1, why: "Ịkwado ya na onye ọrụ na-eme ka i jide n'aka na edozila nsogbu ahụ n'ezie." },
      { objective: "O5", q: "Kedu azịza kacha mma nye onye ọrụ?", options: ["\"DHCP lease gị adaghị, ọ doro anya.\"", "\"I mehiere ọzọ.\"", "\"Jụọ onye ọzọ.\"", "\"Laptop gị enweghị ike inweta adreesị netwọk. Edozigharịrị m ya, ọ na-arụ ọrụ ugbu a. Biko kpọọ ma ọ bụrụ na ọ mee ọzọ.\""], answer: 3, why: "Ọ na-eji okwu dị mfe, enweghị ịta ụta, ma gwa onye ọrụ ihe ọ ga-eme ọzọ." },
      { objective: "O6", q: "Ebee ka i kwesịrị ịlele ọnụahịa A+ na ụzọ e si ede ule dị ugbu a tupu i debanye aha?", options: ["Weebụsaịtị CompTIA ọfịshal", "Okwu e dere na soshal midia", "Akwụkwọ ọgụgụ ochie", "Mgbasa ozi pop-up"], answer: 0, why: "Naanị saịtị ọfịshal nwere ọnụahịa, ụdị ule na ụzọ e si ede ule dị ugbu a." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndetu kọmputa", objective: "O3", notYet: "Ụdị OS, ebe nchekwa fọdụrụ ma ọ bụ mmelite adịghị.", meets: "Ọ na-edepụta OS na ụdị ya, ebe nchekwa fọdụrụ, mmemme kacha eji memory na ọnọdụ mmelite.", exceeds: "Ọ na-edepụtakwa processor na RAM ma kwuo ihe ha pụtara maka ọsọ kọmputa." },
      { name: "Nlele netwọk", objective: "O2", notYet: "Enweghị adreesị IP ma ọ bụ gateway, ma ọ bụ a nwaleghị ping.", meets: "Ọ na-edekọ adreesị IP na gateway na ihe si na ping gateway na weebụsaịtị pụta.", exceeds: "Ọ na-akọwa ihe nsonaazụ ga-apụta ma ọ bụrụ na otu ping adaghị, gụnyere adreesị 169.254." },
      { name: "Nzọụkwụ idozi nsogbu", objective: "O4", notYet: "Nzọụkwụ adịghị ma ọ bụ ha adịghị n'usoro, ma ọ bụ ndozi ahụ bụ nkọ.", meets: "Nzọụkwụ isii niile n'usoro, ya na ihe a jụrụ, e nwalere na e mere.", exceeds: "O nwere echiche nke abụọ ma ọ bụ ebe a ga-ebuli ya elu, na ụzọ ga-egbochi ka ọ ghara imeghachi." },
      { name: "Tiketi na azịza", objective: "O5", notYet: "Tiketi edoghị anya ma ọ bụ azịza ahụ na-ata onye ọrụ ụta ma ọ bụ na-eji okwu teknụzụ siri ike.", meets: "E dejupụtara ngalaba tiketi ọ bụla; azịza ahụ nwere nkwanye ugwu, dị mfe ma na-ekwu ihe ga-esote.", exceeds: "Onye ọzọ nwere ike ịgbaso tiketi ahụ n'ajụghị ajụjụ ọ bụla." },
      { name: "Atụmatụ ọmụmụ na ule", objective: "O6", notYet: "Enweghị ụbọchị, ma ọ bụ ngalaba adịghị.", meets: "Ụbọchị ebumnuche maka Core 1 na Core 2, ngalaba ọ bụla na ibu ya, awa kwa izu.", exceeds: "Atụmatụ ahụ na-enye ngalaba ndị ka ibu izu karịa ma kpọọ aha ebe a ga-elele ọnụahịa na nweta enyemaka n'ụgwọ." },
      { name: "Okwu hardware", objective: "O1", notYet: "A kpọrọ akụkụ hardware aha n'ụzọ na-ezighi ezi na ndetu ma ọ bụ tiketi.", meets: "A kpọrọ akụkụ na ọdụ aha nke ọma.", exceeds: "Ọ na-ejikọ ihe ịrịba ama na akụkụ nwere ike ịkpata ya, dịka ọmụmaatụ ịdị nwayọọ mgbe ọtụtụ mmemme mepere na RAM pere mpe." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha ma ọ bụ gafere A+ Core 1 ma ọ bụ Core 2 n'ime ọnwa 6 (nnyocha nsochi)",
      "Ndị na-amụ ihe tinyere akwụkwọ maka ma ọ bụ malitere ọrụ IT support, help desk ma ọ bụ teknịshan n'ime ọnwa 6",
      "Mmemme mmekọ (ụlọ ọrụ workforce, ọrụ ndị agha mbụ na re-entry) na-akọ na ndị na-amụ ihe na-abanye n'ọzụzụ ma ọ bụ ọrụ IT"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Otu kọmputa Windows ma ọ bụ Mac nwere ịntanetị (nke gị ma ọ bụ nke ọba akwụkwọ; a pụrụ igbochi command prompt na ụfọdụ kọmputa ọha)",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ akwụkwọ dijitalụ, maka ndetu, tiketi na atụmatụ",
      "Peeji CompTIA A+ Core 1 na Core 2 ọfịshal",
      "Ihe dị ka nkeji 90 n'ozuzu, n'oge nkenke, gbakwunyere oge ọmụmụ na-aga n'ihu maka ule ndị ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ; jiri nsonaazụ ya kpebie nkuzi ndị chọrọ oge karịa.",
      "Ọ bụrụ na i nwere kọmputa ochie a wepụrụ na ọkụ, gosi akụkụ ndị ahụ ka igbe ya mepere emepe; ndị na-amụ ihe anaghị emeghe ngwaọrụ n'onwe ha ma ọ bụrụ na a zụbeghị ha ma lekọta ha anya.",
      "N'ụlọ kọmputa, lelee na command prompt na-arụ ọrụ tupu Nkuzi 3, ma ọ bụ gosi peeji ntọala netwọk kama.",
      "Kekọọ ndị na-amụ ihe abụọ abụọ ka ha mee ka onye ọrụ na onye teknịshan maka Nkuzi 6, wee gbanwee ọnọdụ.",
      "Chetara ndị na-amụ ihe na ihe ọmụmụ a na-akwado ha, ọ naghị enye A+; nyere ha aka ịchọta mmemme dị nso na-enyere aka n'ụgwọ ule.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-fundraising-grants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-fundraising-grants-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-fundraising-grants",
  category: "Non Profits",
  name: "AI maka Inweta Onyinye na Ide Arịrịọ Grant",
  skills: "Ịchọta ohere grant, Ịgụ ntuziaka onye na-enye grant, Iji AI dee nkọwa mkpa, Iji AI dee arịrịọ onyinye, Ịlele na ime ka ihe mbụ ọ bụla dabara gị",
  outcome: "ịchọta grant dabara mmemme gị, iji AI dee nkọwa mkpa na nkọwa mmemme na-agbaso ntuziaka onye na-enye grant ahụ, na ide email arịrịọ onyinye, na-elele eziokwu ọ bụla ma na-edebe ozi ndị na-enye onyinye na nzuzo.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị isi nzukọ na-adịghị achọ uru (nonprofit) na nzukọ okpukpe, ndị ọrụ na-ahụ maka inweta onyinye, na ndị ọrụ afọ ofufo na-achọ ego ma na-ede arịrịọ grant, ọtụtụ mgbe n'enweghị oge buru ibu na otu ndị ọrụ dị nta.",
    "Ị ga-amụta ebe ị ga-achọta grant, otu esi agụ ntuziaka onye na-enye grant, otu esi eji AI dee akụkụ grant a na-ahụkarị na arịrịọ onyinye, na otu esi elele ma mee ka ihe mbụ ọ bụla dabara gị ka o bụrụ eziokwu ma dị ka okwu gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ ị ga-eme n'aka gị. AI na-ede ihe mbụ; gị na-ekpebi, na-elele ma na-abịanye aka. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ezi ohere grant dabara mmemme ị na-eme. Jiri AI dee nkọwa mkpa (ihe dị ka okwu 250) na nkọwa mmemme na-agbaso ntuziaka onye na-enye grant ahụ, na-eji naanị eziokwu sitere na ndekọ gị na isi iyi ndị i lelere. Wee dee email arịrịọ onyinye nwere okwu 150 maka otu mmemme ahụ, jiri ihe nnọchi kama ozi ndị na-enye onyinye, ma dezie ha abụọ ka ha dị ka okwu nzukọ gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi nzukọ na-adịghị achọ uru na nzukọ okpukpe, ndị ọrụ na-ahụ maka inweta onyinye, na ndị ọrụ afọ ofufo na-achọ ego ma na-ede arịrịọ grant, ọtụtụ mgbe n'enweghị oge buru ibu na otu ndị ọrụ dị nta.",
    startingPoint: "Ha maara mmemme ha na obodo ha nke ọma, ma deela ụfọdụ arịrịọ onyinye ma ọ bụ obere arịrịọ grant. Ọtụtụ enweghị oge buru ibu maka nnyocha na ide ihe, ma ole na ole ejirila AI maka grant.",
    gap: "Ụbọchị njedebe grant na arịrịọ onyinye na-ewe ọtụtụ awa nke obere otu ndị ọrụ na-enweghị, ma otu akwụkwọ nkwado (attachment) a hapụrụ ma ọ bụ otu okwu ụgha nwere ike ime ka e funarị ego ahụ na ntụkwasị obi onye na-enye grant. Ndị na-amụ ihe kwesịrị iji AI chọta ohere dabara ha, gụọ ntuziaka ma dee ngwa ngwa, ma na-edebe eziokwu ọ bụla ka ọ bụrụ eziokwu, na-edebekwa ozi ndị na-enye onyinye na nzuzo.",
    constraints: [
      "Eziokwu: nọmba ọ bụla na-esi na ndekọ ma ọ bụ isi iyi e lelere; AI anaghị echepụta nsonaazụ, ndị mmekọ ma ọ bụ nkwado",
      "Nzuzo: ndepụta ndị na-enye onyinye, aha ha na akụkọ onyinye ha anaghị abanye na ngwa AI",
      "Grant gọọmentị etiti (federal) chọrọ ndebanye aha na SAM.gov, nke na-akwụghị ụgwọ ma na-ewe oge",
      "A na-elele okwu gbasara ụtụ isi na iwu n'aka onye na-agụ akaụntụ ma ọ bụ na ntuziaka IRS gọọmentị",
      "Oge: ndị ọrụ na ndị ọrụ afọ ofufo nwere ọrụ buru ibu, ya mere nkuzi ọ bụla na-ewe ihe dị ka nkeji 5"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ụfọdụ ahụmahụ n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị otu n'ime mmemme gị", action: "ịchọta opekata mpe ohere grant abụọ dabara ya, site n'iji Grants.gov, Candid ma ọ bụ ndị na-enye grant n'obodo gị", standard: "ma lelee ndị nwere ike itinye arịrịọ n'ọkwa ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ntuziaka ọha nke onye na-enye grant", action: "ime ndepụta nlele nke akụkụ ọ bụla, oke ọ bụla, akwụkwọ nkwado ọ bụla na ụbọchị njedebe ọ bụla site n'enyemaka AI", standard: "nke e lelere ahịrị n'ahịrị na akwụkwọ onye na-enye grant n'onwe ya" },
    { id: "O3", condition: "Mgbe e nyere gị eziokwu nke gị na isi iyi ndị e lelere", action: "iji AI dee nkọwa mkpa na nkọwa mmemme", standard: "ebe nọmba ọ bụla na-esi na ndekọ gị ma ọ bụ isi iyi i lelere" },
    { id: "O4", condition: "Maka otu mmemme", action: "ide obere email arịrịọ onyinye nwere otu akụkọ, ihe onyinye na-eme na otu arịrịọ doro anya", standard: "na-eji ihe nnọchi kama ozi ndị na-enye onyinye" },
    { id: "O5", condition: "Mgbe e nyere gị ụdị ndị na-enye onyinye dị iche iche", action: "ime ụdị akwụkwọ ekele (template) nwere ihe nnọchi nke gị onwe gị ga-eme ka ọ dabara onye ọ bụla", standard: "ebe a na-etinye aha na ego naanị na ebe nchekwa ndị na-enye onyinye gị ma ọ bụ mail merge" },
    { id: "O6", condition: "Tupu grant ma ọ bụ arịrịọ onyinye apụọ", action: "ịlele nọmba ọ bụla, okwu ọ bụla, ikike akụkọ ọ bụla na oke okwu", standard: "n'enweghị nsonaazụ, ndị mmekọ ma ọ bụ nkwado e chepụtara echepụta" }
  ],
  chapters: [
    {
      name: "Isi 1: Grant site na AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta grant dabara ebumnuche gị",
          minutes: 5,
          goal: "Chọta opekata mpe ohere grant abụọ dabara otu n'ime mmemme gị.",
          text: [
            "Grant na-esi n'ebe atọ bụ isi: gọọmentị (etiti, steeti na obodo), ntọala (foundation) nkeonwe na nke ezinụlọ, na ụlọ ọrụ azụmahịa. A na-edepụta grant gọọmentị etiti (federal) na Grants.gov. Nke ọ bụla nwere ọkwa ohere ego (notice of funding opportunity, ma ọ bụ NOFO), nke nwere akụkụ na-ekwu onye nwere ike itinye arịrịọ.",
            "Iji tinye arịrịọ maka grant gọọmentị etiti, nzukọ gị ga-ebu ụzọ debanye aha dị ka otu (entity) na SAM.gov, nke na-enye gị Unique Entity ID (UEI). Grants.gov kwuru na ndebanye aha anaghị akwụ ụgwọ. O nwere ike iwe oge, ya mere malite n'oge, ma akwụla ụlọ ọrụ ọ bụla na-ekwu na ọ ga-edebanye gị aha ma ọ bụrụ na i kwụrụ ụgwọ.",
            "Maka ntọala, Candid (candid.org) na-enye gị ohere ịchọ nzukọ na-adịghị achọ uru na ndị na-enye grant; ụfọdụ akụkụ ya chọrọ ịkwụ ụgwọ, ma ọtụtụ ọba akwụkwọ ọha na-enye ohere iji ya. Lelekwa ntọala obodo gị (community foundation), azụmahịa dị n'obodo gị, na òtù chọọchị gị ma ọ bụ netwọk okpukpe gị."
          ],
          steps: ["Họrọ otu mmemme chọrọ ego.", "Chọọ na Grants.gov maka ohere gọọmentị etiti n'ọrụ ahụ.", "Chọọ na Candid na ntọala obodo gị maka ndị na-enye grant n'obodo.", "Gụọ akụkụ ohere ọ bụla na-ekwu onye nwere ike itinye arịrịọ.", "Dee abụọ dabara gị, ya na ụbọchị njedebe ha."],
          words: [["Grant", "ego e nyere maka otu ebumnuche nke a na-agaghị akwụghachi."], ["NOFO", "notice of funding opportunity (ọkwa ohere ego): nkọwa gọọmentị nke grant gọọmentị etiti na iwu ya."], ["UEI", "Unique Entity ID: nọmba SAM.gov na-enye nzukọ gị maka grant gọọmentị etiti."]],
          slides: [
            { title: "Ebe grant na-esi", bullets: ["Gọọmentị: etiti, steeti, obodo", "Ntọala (foundation)", "Ụlọ ọrụ azụmahịa na netwọk okpukpe"] },
            { title: "Grant gọọmentị etiti (federal)", bullets: ["E depụtara ha na Grants.gov", "Gụọ akụkụ NOFO na-ekwu onye nwere ike itinye arịrịọ", "Bu ụzọ debanye aha na SAM.gov: ọ bụ n'efu"] },
            { title: "Ntọala", bullets: ["Chọọ na Candid (candid.org)", "Jụọ ọba akwụkwọ gị maka ohere iji ya", "Lelee ntọala obodo gị"] }
          ],
          sources: [
            { name: "Grants.gov: onye nwere ike inweta grant", url: "https://www.grants.gov/learn-grants/grant-eligibility" },
            { name: "Grants.gov: ndebanye aha onye na-arịọ", url: "https://www.grants.gov/applicants/applicant-registration" },
            { name: "SAM.gov", url: "https://sam.gov/" },
            { name: "Candid", url: "https://candid.org/" }
          ],
          tryIt: "Họrọ otu n'ime mmemme gị. Chọta ohere grant abụọ dabara ya, otu nke gọọmentị etiti ma ọ bụ steeti, na otu nke ntọala ma ọ bụ nke obodo. Dee aha onye na-enye grant ọ bụla, ụbọchị njedebe ya na onye nwere ike itinye arịrịọ n'otu ahịrị.",
          youCanNow: "ịchọta ohere grant dabara ebumnuche gị ma mara ndebanye aha grant gọọmentị etiti chọrọ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ebe atọ bụ isi grant na-esi?", options: ["Gọọmentị, ntọala na ụlọ ọrụ azụmahịa", "Ụlọ akụ, kaadị kredit na mbinye ego", "Ndị na-enye onyinye, ndị ọrụ afọ ofufo na ndị otu bọọdụ", "Ụlọ akwụkwọ, ụlọ ọgwụ na ụlọikpe"], answer: 0, why: "Grant na-esi na gọọmentị, ntọala nkeonwe na nke ezinụlọ, na ụlọ ọrụ azụmahịa." },
            { objective: "O1", q: "Ị chọrọ ịchọ ntọala na Candid mana i nweghị ike ịkwụ ụgwọ. Gịnị ka ị nwere ike ime?", options: ["Hapụ ntọala kpamkpam", "Jụọ ọba akwụkwọ ọha gị, n'ihi na ọtụtụ na-enye ohere iji ya", "Kwụọ onye ị na-amaghị ụgwọ maka ndepụta", "Rịọ AI ka ọ depụta ntọala niile"], answer: 1, why: "Ọtụtụ ọba akwụkwọ ọha na-enye ohere iji akụkụ Candid a na-akwụ ụgwọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgụ ntuziaka onye na-enye grant site n'enyemaka AI",
          minutes: 5,
          goal: "Gbanwee ntuziaka onye na-enye grant ka ọ bụrụ ndepụta nlele nke ihe ị ga-ezipu.",
          text: [
            "Onye ọ bụla na-enye grant na-ekwu ihe ọ chọrọ: akụkụ, oke okwu, ụdị mmefu ego (budget), akwụkwọ nkwado na ụbọchị njedebe. Ịhapụ otu n'ime ha nwere ike ime ka a jụ gị tupu mmadụ agụọ ọrụ gị.",
            "Ntuziaka bụ ihe ọha, ya mere ị nwere ike itinye ya n'ime ngwa enyemaka AI ma jụọ: \"Gbanwee ntuziaka grant ndị a ka ha bụrụ ndepụta nlele: akụkụ ọ bụla, oke okwu ma ọ bụ peeji ya, akwụkwọ nkwado ọ bụla, na ụbọchị njedebe ọ bụla.\"",
            "Wee lelee ndepụta ahụ na nke mbụ. AI nwere ike ịhapụ otu ihe ma ọ bụ gbanwee ụbọchị. Akwụkwọ onye na-enye grant n'onwe ya na-emeri mgbe niile."
          ],
          steps: ["Detuo ntuziaka ọha nke onye na-enye grant.", "Rịọ AI maka ndepụta nlele nke akụkụ, oke, akwụkwọ nkwado na ụbọchị njedebe.", "Tụnyere ndepụta ahụ ahịrị n'ahịrị na nke mbụ.", "Dozie ihe ọ bụla fọdụrụ ma ọ bụ nke ezighi ezi."],
          words: [["Ntuziaka (guidelines)", "iwu onye na-enye grant maka ihe ị ga-ezipu na otu ị ga-esi zipu ya."], ["Akwụkwọ nkwado (attachment)", "akwụkwọ ọzọ ị na-ezipu ya na arịrịọ ahụ, dị ka mmefu ego ma ọ bụ akwụkwọ ozi IRS."]],
          slides: [
            { title: "Ndị na-enye grant na-agwa gị ihe ha chọrọ", bullets: ["Akụkụ na oke okwu", "Ụdị mmefu ego na akwụkwọ nkwado", "Ụbọchị njedebe"] },
            { title: "Rịọ AI maka ndepụta nlele", bullets: ["Tinye ntuziaka ọha ahụ", "Akụkụ, oke, akwụkwọ nkwado, ụbọchị njedebe"] },
            { title: "Lelee ya", bullets: ["Tụnyere ahịrị n'ahịrị", "Akwụkwọ onye na-enye grant na-emeri mgbe niile"] }
          ],
          tryIt: "Were ntuziaka maka otu n'ime ohere abụọ gị. Rịọ ngwa enyemaka AI maka ndepụta nlele, wee lelee ya na nke mbụ ma dozie mperi ọ bụla.",
          youCanNow: "ịgbanwe ntuziaka onye na-enye grant ka ọ bụrụ ndepụta nlele ziri ezi maka ihe ị ga-ezipu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere i ji nwee ike itinye ntuziaka onye na-enye grant n'ime ngwa enyemaka AI?", options: ["N'ihi na ngwa AI na-adị na nzuzo mgbe niile", "N'ihi na onye na-enye grant kwuru ya", "N'ihi na ntuziaka bụ ihe ọha", "N'ihi na AI ga-ezipu ya maka gị"], answer: 2, why: "Ntuziaka bụ ihe ọha, ya mere itinye ya anaghị ekesa ihe nzuzo ọ bụla." },
            { objective: "O2", q: "Ndepụta AI kwuru na ụbọchị njedebe bụ March 15, mana ntuziaka kwuru March 1. Gịnị ka ị ga-eme?", options: ["Jiri March 15", "Họrọ ụbọchị dị n'etiti ha", "Jụọ AI ọzọ ruo mgbe o kwenyere", "Jiri March 1, site n'akwụkwọ onye na-enye grant"], answer: 3, why: "AI nwere ike ịgbanwe ụbọchị; akwụkwọ onye na-enye grant n'onwe ya na-emeri mgbe niile." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide nkọwa mkpa na nkọwa mmemme",
          minutes: 6,
          goal: "Jiri AI dee nkọwa mkpa na nkọwa mmemme site n'eziokwu nke gị.",
          text: [
            "Nkọwa mkpa (statement of need) na-ekwu nsogbu ị na-edozi, ndị ọ na-emetụta, na ihe mere o ji dị mkpa ugbu a. Nkọwa mmemme (program description) na-ekwu ihe ị ga-eme, maka onye, na ihe ga-agbanwe.",
            "Nye AI eziokwu gị, ọ bụghị peeji efu: \"Site n'iji naanị eziokwu ndị a, dee nkọwa mkpa nwere okwu 250 maka grant nye [ụdị onye na-enye grant]: [eziokwu gị na ọnụ ọgụgụ nwere isi iyi]. Etinyela ọnụ ọgụgụ ọ bụla m na-enyeghị gị.\"",
            "Wee dezie ya nke ọma. Tinye ezi akụkọ (site n'ikike, n'enweghị ozi na-egosi onye ahụ bụ), jiri okwu na ihe onye na-enye grant ahụ kacha chọọ, ma hụ na nọmba ọ bụla na-esi na ndekọ gị ma ọ bụ isi iyi i lelere. Ọtụtụ ndị na-enye grant na-ajụ ma e jiri AI; zaa n'eziokwu."
          ],
          steps: ["Chịkọta eziokwu gị: ndị ị na-ejere ozi, nọmba, nsonaazụ, ọnụ ọgụgụ nwere isi iyi.", "Rịọ AI ka o dee site n'iji naanị eziokwu ndị ahụ, n'ime oke okwu.", "Tinye ezi akụkọ site n'ikike, n'enweghị ozi na-egosi onye ahụ bụ.", "Jiri ihe onye na-enye grant kacha chọọ na okwu ya.", "Hụ na nọmba ọ bụla na-esi na ndekọ ma ọ bụ isi iyi."],
          words: [["Nkọwa mkpa (statement of need)", "akụkụ grant na-akọwa nsogbu ahụ na ihe mere o ji dị mkpa ugbu a."], ["Nkọwa mmemme (program description)", "akụkụ na-akọwa ihe ị ga-eme na ihe ga-agbanwe."], ["Nsonaazụ (outcome)", "mgbanwe na ndụ ndị mmadụ nke mmemme gị na-achọ."]],
          slides: [
            { title: "Akụkụ abụọ bụ isi", bullets: ["Mkpa: nsogbu ahụ, ndị ọ metụtara, ihe mere ugbu a", "Mmemme: ihe ị na-eme, maka onye, ihe na-agbanwe"] },
            { title: "Nye AI eziokwu gị", bullets: ["\"Site n'iji naanị eziokwu ndị a...\"", "\"Etinyela ọnụ ọgụgụ m na-enyeghị gị\"", "Nọrọ n'ime oke okwu"] },
            { title: "Dezie ya nke ọma", bullets: ["Tinye ezi akụkọ site n'ikike", "Jiri ihe onye na-enye grant kacha chọọ", "Hụ ebe nọmba ọ bụla si"] },
            { title: "Kwuo eziokwu", bullets: ["Zaa n'eziokwu ma a jụọ gị ma i jiri AI"] }
          ],
          tryIt: "Chịkọta eziokwu ise gbasara otu mmemme. Rịọ AI ka o dee nkọwa mkpa nwere okwu 250 site n'iji naanị eziokwu ndị ahụ. Kaa akara n'okpuru nọmba ọ bụla ma kwado ebe o si.",
          youCanNow: "iji AI dee nkọwa mkpa maka grant site n'eziokwu nke gị i lelere.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka nkọwa mmemme na-ekwu?", options: ["Ihe ị ga-eme, maka onye, na ihe ga-agbanwe", "Adreesị ụlọ ndị otu bọọdụ gị", "Ndepụta ndị na-enye gị onyinye", "Naanị ego mmefu niile"], answer: 0, why: "Nkọwa mmemme na-ekwu ihe ị ga-eme, maka onye na ihe ga-agbanwe." },
            { objective: "O3", q: "Ị chọrọ itinye akụkọ otu ezinụlọ na nkọwa mkpa gị. Gịnị ka ị ga-eme?", options: ["Jiri aha ha zuru ezu ka o yie eziokwu", "Nweta ikike ma wepụ ozi na-egosi onye ha bụ", "Ka AI chepụta akụkọ", "Detuo akụkọ site n'otu ọzọ"], answer: 1, why: "Ezi akụkọ chọrọ ikike na enweghị ozi na-egosi onye ahụ bụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Grant site na AI",
        questions: [
          { objective: "O1", q: "Ebee ka e depụtara ohere grant gọọmentị etiti?", options: ["Grants.gov", "Otu ìgwè na soshal midia", "Folda spam nke email gị", "Akwụkwọ nọmba ekwentị"], answer: 0, why: "Grants.gov na-edepụta ohere ego gọọmentị etiti." },
          { objective: "O1", q: "Otu ụlọ ọrụ kwuru na ọ ga-edebanye gị aha na SAM.gov ma ọ bụrụ na i kwụrụ ụgwọ. Gịnị ka ị maara?", options: ["Ị ga-akwụrịrị ya", "Ndebanye aha SAM.gov bụ n'efu, ya mere debanye aha n'onwe gị", "SAM.gov abụghị ihe dị mkpa", "Naanị ụlọ ọrụ nwere ike ịdebanye aha"], answer: 1, why: "Grants.gov kwuru na ndebanye aha bụ n'efu." },
          { objective: "O2", q: "Ndepụta AI hapụrụ otu akwụkwọ nkwado dị na ntuziaka. Kedu nke ziri ezi?", options: ["Ndepụta ahụ", "Ọ dịghị nke ọ bụla", "Ntuziaka onye na-enye grant", "Nke ọ bụla dị mkpụmkpụ"], answer: 2, why: "Akwụkwọ onye na-enye grant n'onwe ya na-emeri mgbe niile." },
          { objective: "O3", q: "Kedu prompt na-echebe gị pụọ n'ọnụ ọgụgụ e chepụtara echepụta?", options: ["\"Dee nkọwa mkpa.\"", "\"Mee ka ọ dị egwu.\"", "\"Tinye nọmba siri ike.\"", "\"Site n'iji naanị eziokwu ndị a, dee... Etinyela ọnụ ọgụgụ m na-enyeghị gị.\""], answer: 3, why: "Ịkpachi AI n'eziokwu gị na-akwụsị nọmba e chepụtara." },
          { objective: "O3", q: "Gịnị ka nkọwa mkpa na-akọwa?", options: ["Nsogbu ahụ, ndị ọ metụtara na ihe mere ugbu a", "Aha ndị otu bọọdụ gị", "Oge ọfịs gị na-emeghe", "Ndepụta ndị na-enye onyinye"], answer: 0, why: "Nke ahụ bụ ebumnuche akụkụ mkpa." }
        ]
      }
    },
    {
      name: "Isi 2: Ndị na-enye onyinye site na AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide arịrịọ onyinye site na AI",
          minutes: 5,
          goal: "Dee obere email arịrịọ onyinye maka otu mmemme.",
          text: [
            "Ezigbo arịrịọ onyinye dị mkpụmkpụ ma doo anya: otu onye ma ọ bụ otu mkpa, ihe onyinye na-eme, na otu arịrịọ doro anya. \"$50 na-enye otu izu nkuzi mgbe ụlọ akwụkwọ gwụrụ\" na-arụ ọrụ karịa \"biko kwado ọrụ anyị\", mana naanị ma ọ bụrụ na nọmba ahụ bụ eziokwu.",
            "Prompt: \"Dee email arịrịọ onyinye nwere okwu 150 maka mmemme nkuzi anyị mgbe ụlọ akwụkwọ gwụrụ. Kọọ obere akụkọ banyere [nwa akwụkwọ, n'enweghị aha], kwuo ihe [ego] na-enye, ma mechie ya n'otu arịrịọ doro anya na njikọ: [njikọ inye onyinye]. Ụda dị nro na nke olileanya.\"",
            "Edebe ndepụta ndị na-enye onyinye, aha ha na akụkọ onyinye ha n'ebe ngwa AI na-adịghị. Jiri ebe nchekwa ndị na-enye onyinye gị (donor database) ma ọ bụ mmemme email gị tinye aha mgbe ihe mbụ ahụ gwụchara."
          ],
          steps: ["Họrọ otu mmemme na otu eziokwu \"ihe onyinye na-eme\".", "Rịọ AI maka obere arịrịọ nwere akụkọ, eziokwu onyinye ahụ na otu arịrịọ.", "Lelee ego ọ bụla na mmefu ego gị.", "Tinye aha site n'ebe nchekwa ndị na-enye onyinye gị, ọ bụghị ngwa AI."],
          words: [["Arịrịọ onyinye (appeal)", "arịrịọ na-ajụ ndị mmadụ ka ha nye onyinye."], ["Oku ime ihe (call to action)", "otu ihe doro anya ị na-arịọ onye na-agụ ka o mee, dị ka \"Nye onyinye taa\"."]],
          slides: [
            { title: "Arịrịọ onyinye siri ike", bullets: ["Otu akụkọ ma ọ bụ otu mkpa", "Ihe onyinye na-eme: naanị ezi nọmba", "Otu arịrịọ doro anya"] },
            { title: "Prompt ahụ", bullets: ["Okwu 150, dị nro ma nwee olileanya", "Akụkọ n'enweghị aha", "Ihe nnọchi [ego] na [njikọ inye onyinye]"] },
            { title: "Debe ndị na-enye onyinye na nzuzo", bullets: ["Etinyela ndepụta ndị na-enye onyinye n'AI", "Tinye aha n'ebe nchekwa ndị na-enye onyinye gị"] }
          ],
          tryIt: "Jiri AI dee email arịrịọ onyinye nwere okwu 150 maka otu mmemme. Lelee na ego \"ihe onyinye na-eme\" bụ eziokwu site na mmefu ego gị.",
          youCanNow: "iji AI dee obere arịrịọ onyinye nke eziokwu.",
          quickCheck: [
            { objective: "O4", q: "Arịrịọ ole ka ezigbo arịrịọ onyinye kwesịrị inwe?", options: ["Ise", "Ọ dịghị nke ọ bụla", "Otu arịrịọ doro anya", "Otu maka mmemme ọ bụla"], answer: 2, why: "Ezigbo arịrịọ onyinye nwere otu onye ma ọ bụ otu mkpa, ihe onyinye na-eme na otu arịrịọ doro anya." },
            { objective: "O4", q: "Ị chọrọ ka AI dee arịrịọ nye ndị kacha enye gị onyinye, n'aha ha. Gịnị ka ị ga-eme?", options: ["Tinye ndepụta ndị na-enye onyinye gị n'AI", "Tinye aha na akụkọ onyinye ha", "Hapụ arịrịọ ahụ", "Dee ihe mbụ ahụ jiri ihe nnọchi, wee tinye aha n'ebe nchekwa ndị na-enye onyinye gị"], answer: 3, why: "Edebe ndepụta ndị na-enye onyinye n'ebe AI na-adịghị; tinye aha n'ebe nchekwa gị mgbe ihe mbụ ahụ gwụchara." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka ekele na ozi ọhụrụ dabara onye ọ bụla",
          minutes: 4,
          goal: "Jiri AI mee ụdị akwụkwọ ekele na ozi ọhụrụ nke gị onwe gị ga-eme ka ọ dabara onye ọ bụla.",
          text: [
            "Ndị na-enye onyinye a kelere ngwa ngwa ma gwa ihe onyinye ha mere na-enyekarị ọzọ. AI nwere ike inyere gị aka ide template maka ụdị ndị na-enye onyinye dị iche iche: ndị na-enye nke mbụ, ndị na-enye kwa ọnwa, ndị ọrụ afọ ofufo na-enyekwa onyinye, na ndị otu chọọchị nyere onyinye pụrụ iche.",
            "Jụọ: \"Dee template ekele atọ dị mkpụmkpụ: onye na-enye nke mbụ, onye na-enye kwa ọnwa, na onye na-enye onyinye buru ibu. Nke ọ bụla erughị okwu 100, dị nro, nwee ihe nnọchi [aha], [ego] na [mmemme] na otu ahịrịokwu gbasara ihe onyinye mere.\"",
            "Tinye aha na ego n'ebe nchekwa ndị na-enye onyinye gị ma ọ bụ mail merge. Tinye ahịrị i ji aka dee mgbe ị nwere ike. Ndị mmadụ na-ama mgbe mmadụ etinyeghị aka na ya."
          ],
          steps: ["Depụta ụdị ndị na-enye onyinye ị na-ekele.", "Rịọ AI maka template maka nke ọ bụla, nwere ihe nnọchi.", "Tinye otu ahịrịokwu ezi ihe onyinye mere na nke ọ bụla.", "Mee ka ọ dabara onye ọ bụla n'ebe nchekwa ndị na-enye onyinye gị ma tinye ahịrị nke gị."],
          words: [["Template", "ihe mbụ e dere nke ị nwere ike iji ọtụtụ ugboro, nwere oghere ị ga-ejupụta."], ["Mail merge", "ngwa na-etinye aha na ozi n'ime akwụkwọ ozi maka ọtụtụ mmadụ."], ["Ijide ndị na-enye onyinye (donor retention)", "ime ka ndị na-enye onyinye na-enye kwa afọ."]],
          slides: [
            { title: "Kelee ngwa ngwa, gosi ihe ọ mere", bullets: ["Ndị a kelere na-enye ọzọ", "Kwuo ihe onyinye ahụ mere"] },
            { title: "Template dị ka ụdị onye na-enye onyinye", bullets: ["Nke mbụ, kwa ọnwa, onyinye buru ibu", "Erughị okwu 100, nwere ihe nnọchi"] },
            { title: "Mee ka ọ bụrụ nke onye ọ bụla", bullets: ["Jupụta ya site n'ebe nchekwa ndị na-enye onyinye gị", "Tinye ahịrị i ji aka dee"] }
          ],
          tryIt: "Rịọ AI maka template ekele atọ maka ụdị ndị na-enye onyinye atọ. Tinye otu ahịrịokwu ezi ihe onyinye mere na nke ọ bụla.",
          youCanNow: "iji AI mee template ekele ma mee ka ha dabara onye ọ bụla n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O5", q: "Kedu ndị na-enye onyinye na-enyekarị ọzọ?", options: ["Ndị a kelere ngwa ngwa ma gwa ihe onyinye ha mere", "Ndị a na-anaghị aza", "Ndị na-enweta otu akwụkwọ ozi ahụ onye ọ bụla nwetara", "Ndị a kelere mgbe otu afọ gachara"], answer: 0, why: "Ekele ngwa ngwa na ozi gbasara ihe onyinye ahụ mere na-eme ka ndị na-enye onyinye nye ọzọ." },
            { objective: "O5", q: "I nwere template ekele dị njikere maka onye na-enye kwa ọnwa. Gịnị ga-eme ka o yie ihe mmadụ dere?", options: ["Iziga ya ugboro abụọ", "Itinye ahịrị i ji aka dee mgbe ị nwere ike", "Iji mkpụrụ edemede buru ibu", "Iwepụ ahịrịokwu gbasara ihe onyinye mere"], answer: 1, why: "Ndị mmadụ na-ama mgbe mmadụ etinyeghị aka na ya; ahịrị e ji aka dee na-enyere aka." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịlele, idezi na ikwu eziokwu",
          minutes: 5,
          goal: "Mee nlele ikpeazụ n'ihe mbụ grant ma ọ bụ arịrịọ onyinye ọ bụla tupu ọ pụọ.",
          text: [
            "Tupu ihe ọ bụla ruo onye na-enye grant ma ọ bụ onye na-enye onyinye, mee nlele ikpeazụ. Nọmba ọ bụla na-esi na ndekọ. Okwu ọ bụla bụ eziokwu. Akụkọ ọ bụla nwere ikike. E gbasoro oke okwu. Ọ dị ka okwu nzukọ gị, ọ bụghị nke igwe (robot).",
            "Ekwela ka AI chepụta nsonaazụ, ndị mmekọ ma ọ bụ nkwado. Onye na-enye grant chọtara otu okwu ụgha nwere ike ọ gaghị atụkwasị gị obi ọzọ.",
            "Gụpụta ya n'olu dị elu, ma rịọ otu onye ọrụ ibe gị maara mmemme ahụ ka ọ gụọ ya. Maka okwu gbasara iwu ma ọ bụ ụtụ isi, dị ka ihe a na-ewepụ n'ụtụ isi (tax-deductible), lelee ya n'aka onye na-agụ akaụntụ gị ma ọ bụ na ntuziaka IRS gọọmentị."
          ],
          steps: ["Hụ na nọmba ọ bụla na-esi na ndekọ ma ọ bụ isi iyi.", "Kwado na akụkọ ọ bụla nwere ikike ma o nweghị ozi na-egosi onye ahụ bụ.", "Lelee oke okwu na akụkụ ndị a chọrọ.", "Gụpụta ya n'olu dị elu.", "Rịọ onye ọrụ ibe gị maara mmemme ahụ ka o nyochaa ya."],
          words: [["Nkwado (endorsement)", "okwu ọha nke mmadụ ma ọ bụ otu na-ekwu na ha na-akwado gị."], ["Tax-deductible", "onyinye onye na-enye onyinye nwere ike iwepụ n'ego a na-atụ ụtụ isi na ya, dị ka iwu ụtụ isi si dị."]],
          slides: [
            { title: "Nlele ikpeazụ", bullets: ["Nọmba ọ bụla na-esi na ndekọ", "Akụkọ ọ bụla nwere ikike", "E gbasoro oke okwu"] },
            { title: "Echepụtala", bullets: ["Nsonaazụ", "Ndị mmekọ", "Nkwado"] },
            { title: "Nzọụkwụ ikpeazụ", bullets: ["Gụpụta ya n'olu dị elu", "Onye ọrụ ibe gị nyochaa ya", "Okwu ụtụ isi: lelee n'aka onye na-agụ akaụntụ ma ọ bụ IRS"] }
          ],
          sources: [
            { name: "IRS: Onyinye enyemaka (charitable contributions)", url: "https://www.irs.gov/charities-non-profits/charitable-contributions" }
          ],
          tryIt: "Ọrụ ikpeazụ: maka otu ezi ohere grant, mechaa nkọwa mkpa gị na nkọwa mmemme na-agbaso ntuziaka, ma mechaa arịrịọ onyinye nwere okwu 150 maka otu mmemme ahụ. Mee nlele ikpeazụ n'ha abụọ.",
          youCanNow: "ime akụkụ grant na arịrịọ onyinye nke eziokwu, nke e lelere, site n'enyemaka AI.",
          quickCheck: [
            { objective: "O6", q: "Kedu ezigbo ụzọ isi chọpụta ihe mbụ dị ka nke igwe (robot) dere?", options: ["Mee ka ọ dị ogologo", "Tinye ọnụ ọgụgụ ndị ọzọ", "Gụpụta ya n'olu dị elu", "Zipu ya ozugbo"], answer: 2, why: "Gụpụta ya n'olu dị elu ma rịọ onye ọrụ ibe gị maara mmemme ahụ ka ọ gụọ ya." },
            { objective: "O6", q: "Ihe mbụ grant gị kwuru na i jeere ụmụaka 300 ozi, mana ọ dịghị ndekọ na-egosi ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-ada mma", "Mee ya 250", "Jụọ AI ebe o si nweta nọmba ahụ", "Wepụ ya ma ọ bụ jiri nọmba sitere na ndekọ gị"], answer: 3, why: "Nọmba ọ bụla ga-esirịrị na ndekọ ma ọ bụ isi iyi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndị na-enye onyinye site na AI",
        questions: [
          { objective: "O4", q: "Kedu ahịrị arịrịọ onyinye kacha sie ike, ma ọ bụrụ na ọ bụ eziokwu?", options: ["\"Biko kwado ọrụ anyị.\"", "\"$50 na-enye otu izu nkuzi mgbe ụlọ akwụkwọ gwụrụ.\"", "\"Anyị chọrọ ego.\"", "\"Nye ma ọ bụrụ na ị nwere ike.\""], answer: 1, why: "Ihe onyinye na-eme nke doro anya ma bụrụ eziokwu na-enyere ndị na-enye onyinye aka ịhụ ihe onyinye ha na-eme." },
          { objective: "O5", q: "Ebee ka ị na-etinye aha ndị na-enye onyinye n'akwụkwọ ozi ekele?", options: ["Tinye ndepụta ndị na-enye onyinye n'AI", "Na soshal midia", "N'ebe nchekwa ndị na-enye onyinye gị ma ọ bụ mail merge", "Ọ dịghị ebe"], answer: 2, why: "Idebe ozi ndị na-enye onyinye na sistemụ nke gị na-echebe nzuzo." },
          { objective: "O6", q: "AI tinyere onye mmekọ unu na-anaghị arụkọ ọrụ. Gịnị ka ị ga-eme?", options: ["Hapụ ya, ọ na-ada mma", "Jụọ onye mmekọ ahụ ma emechaa", "Mee ka ọ dị nta", "Wepụ ya"], answer: 3, why: "Ekwela ka AI chepụta ndị mmekọ ma ọ bụ nkwado." },
          { objective: "O6", q: "Ihe mbụ kwuru na onyinye bụ tax-deductible. Ebee ka ị ga-elele?", options: ["Onye na-agụ akaụntụ ma ọ bụ ntuziaka IRS gọọmentị", "Mkparịta ụka AI ọzọ", "Onye na-enye onyinye", "Ọ dịghị ebe"], answer: 0, why: "Okwu gbasara ụtụ isi chọrọ isi iyi gọọmentị ma ọ bụ onye ọkachamara." },
          { objective: "O6", q: "Gịnị mere ị ga-eji rịọ onye ọrụ ibe gị maara mmemme ahụ ka ọ gụọ ihe mbụ ahụ?", options: ["Ka unu kerịta ụta", "O nwere ike ịhụ ihe ụgha ma ọ bụ ihe fọdụrụ", "Ka ọ dị ogologo", "Ọ baghị uru"], answer: 1, why: "Onye maara mmemme ahụ na-ahụ mperi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Inweta Onyinye na Ide Arịrịọ Grant",
    questions: [
      { objective: "O1", q: "Grant bụ:", options: ["Mbinye ego", "Ụgwọ ụtụ isi", "Ego maka otu ebumnuche nke a na-agaghị akwụghachi", "Ndepụta ndị na-enye onyinye"], answer: 2, why: "A naghị akwụghachi grant." },
      { objective: "O1", q: "NOFO pụtara:", options: ["New office for operations", "Nonprofit open forum", "Notice of financial obligation", "Notice of funding opportunity"], answer: 3, why: "NOFO na-akọwa grant gọọmentị etiti na iwu ya." },
      { objective: "O1", q: "Tupu itinye arịrịọ maka grant gọọmentị etiti, nzukọ gị ga-:", options: ["Debanye aha dị ka otu (entity) na SAM.gov", "Zụta ikike pụrụ iche", "Were onye na-agba ndị ọchịchị ume (lobbyist)", "Kwụọ Grants.gov ụgwọ"], answer: 0, why: "Grants.gov chọrọ ka e bu ụzọ debanye aha na SAM.gov." },
      { objective: "O1", q: "SAM.gov na-enye nzukọ gị:", options: ["Laptọọpụ n'efu", "Unique Entity ID (UEI)", "Grant e nyere", "Nloghachi ụtụ isi"], answer: 1, why: "UEI na-egosi onye nzukọ gị bụ maka grant gọọmentị etiti." },
      { objective: "O1", q: "Kedu ezigbo ebe ịchọ ntọala na-enye grant?", options: ["App ihu igwe", "Saịtị ịzụ ahịa", "Candid", "Egwuregwu"], answer: 2, why: "Candid na-edepụta nzukọ na-adịghị achọ uru na ndị na-enye grant." },
      { objective: "O1", q: "N'ebe dị na NOFO ka ị na-ahụ onye nwere ike itinye arịrịọ?", options: ["Akara (logo)", "Ala peeji", "Agba mkpuchi", "Akụkụ na-ekwu onye nwere ike itinye arịrịọ (eligibility)"], answer: 3, why: "NOFO ọ bụla nwere akụkụ eligibility." },
      { objective: "O2", q: "Gịnị mere ị ga-eji gbanwee ntuziaka ka ọ bụrụ ndepụta nlele?", options: ["Ịhapụ otu ihe nwere ike ime ka a jụ gị", "Ndị na-enye grant hụrụ ndepụta n'anya", "Ọ na-eme ka grant dị ogologo", "Iwu chọrọ ya"], answer: 0, why: "Ndepụta nlele na-enyere gị aka izipu ihe niile." },
      { objective: "O2", q: "Ndepụta nlele AI na ntuziaka onye na-enye grant ekwekọrịtaghị. Tụkwasị obi na:", options: ["AI", "Ntuziaka onye na-enye grant", "Nke ọ bụla dị mfe", "Ọ dịghị nke ọ bụla, chee echiche"], answer: 1, why: "Akwụkwọ onye na-enye grant n'onwe ya na-emeri." },
      { objective: "O3", q: "Ụzọ kacha mma isi malite nkọwa mkpa site na AI bụ:", options: ["Ịrịọ ya ka o chepụta nọmba siri ike", "Ịghara inye ya ihe ọ bụla", "Inye ya eziokwu gị ma gwa ya ka ọ ghara itinye ọnụ ọgụgụ", "Itinye faịlụ ndị ị na-ejere ozi"], answer: 2, why: "Eziokwu gị na-eme ka ihe mbụ ahụ bụrụ eziokwu." },
      { objective: "O3", q: "Nkọwa mmemme na-akọwa:", options: ["Naanị nọmba ụtụ isi gị", "Ihu igwe", "Ndị nọ na bọọdụ", "Ihe ị ga-eme, maka onye, na ihe ga-agbanwe"], answer: 3, why: "Nke ahụ bụ ọrụ ya na grant." },
      { objective: "O3", q: "Ị chọrọ itinye akụkọ onye ị na-ejere ozi. Ị chọrọ:", options: ["Ikike na enweghị ozi na-egosi onye ahụ bụ", "Aha ya zuru ezu na adreesị ya", "Ọ dịghị ihe", "Foto kaadị njirimara ya"], answer: 0, why: "Akụkọ chọrọ nkwenye na nzuzo." },
      { objective: "O3", q: "Onye na-enye grant jụrụ ma e jiri AI. Ị kwesịrị:", options: ["Ikwu mba", "Ịza n'eziokwu", "Ileghara ajụjụ ahụ anya", "Ịrịọ AI ka ọ zaa"], answer: 1, why: "Eziokwu na-echebe ntụkwasị obi." },
      { objective: "O4", q: "Arịrịọ onyinye siri ike nwere:", options: ["Arịrịọ iri", "Ọ dịghị arịrịọ", "Otu akụkọ, ihe onyinye na-eme, na otu arịrịọ doro anya", "Akụkọ ogologo nke afọ"], answer: 2, why: "Ihe dị mkpụmkpụ ma doo anya na-arụ ọrụ kacha mma." },
      { objective: "O4", q: "Gịnị bụ oku ime ihe (call to action)?", options: ["Oku ekwentị", "Ọkwa iwu", "Votu bọọdụ", "Otu ihe doro anya ị na-arịọ onye na-agụ ka o mee"], answer: 3, why: "Dị ka \"Nye onyinye taa\"." },
      { objective: "O4", q: "Kedu nke a na-ekwesịghị itinye n'ime ngwa AI MGBE Ọ BỤLA?", options: ["Ndepụta ndị na-enye onyinye gị na akụkọ onyinye ha", "\"Mee ka ọ dị nro karị\"", "Aha ọha nke mmemme ahụ", "Oke okwu"], answer: 0, why: "Ozi ndị na-enye onyinye bụ nzuzo." },
      { objective: "O5", q: "Gịnị mere ị ga-eji mee template ekele dị ka ụdị onye na-enye onyinye?", options: ["Iji chekwaa akwụkwọ", "Ndị na-enye onyinye dị iche iche chọrọ ozi dị iche iche", "Ndị na-enye onyinye chọrọ ya", "AI enweghị ike ide otu"], answer: 1, why: "Ndị na-enye nke mbụ na ndị na-enye kwa ọnwa nwere njikọ dị iche." },
      { objective: "O5", q: "Mail merge bụ:", options: ["Njikọ nzukọ abụọ na-adịghị achọ uru", "Ụgwọ ozi post", "Ngwa na-etinye aha n'akwụkwọ ozi maka ọtụtụ mmadụ", "Ụdị AI"], answer: 2, why: "Ọ na-eme ka akwụkwọ ozi dabara onye ọ bụla n'ebe ngwa AI na-adịghị." },
      { objective: "O5", q: "Gịnị na-eme ka ekele yie ihe mmadụ dere?", options: ["Ihe nnọchi ndị ọzọ", "Template dị ogologo", "Iziga ya n'oge gafere", "Ahịrị nke gị i ji aka dee"], answer: 3, why: "Ndị mmadụ na-ahụ mgbe mmadụ n'ezie tinyere aka." },
      { objective: "O6", q: "Na nlele ikpeazụ, nọmba ọ bụla ga-:", options: ["Esi na ndekọ ma ọ bụ isi iyi", "Bụrụ nke e mere ka ọ ka elu", "Buru ibu", "Si n'AI"], answer: 0, why: "Ezi nọmba na-edebe ntụkwasị obi." },
      { objective: "O6", q: "Ọ bụrụ na onye na-enye grant chọtara otu okwu ụgha:", options: ["Ọ dịghị ihe na-eme", "O nwere ike ọ gaghị atụkwasị gị obi ọzọ", "Ha na-enye karịa", "A na-atụ anya ya"], answer: 1, why: "Ọ na-esi ike iwughachi ntụkwasị obi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 6, 8, 12, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Grant dabara", objective: "O1", notYet: "Grant ahụ adabaghị mmemme ahụ, ma ọ bụ na e leleghị onye nwere ike itinye arịrịọ.", meets: "Otu ezi ohere dabara mmemme ahụ, ebe e lelere onye nwere ike itinye arịrịọ.", exceeds: "Na-ekwu maka ohere nke abụọ na ụbọchị njedebe nke ọ bụla." },
      { name: "Na-agbaso ntuziaka", objective: "O2", notYet: "E hapụrụ akụkụ, oke ma ọ bụ akwụkwọ nkwado a chọrọ.", meets: "Ihe mbụ ndị ahụ na-agbaso ndepụta nlele, akụkụ na oke okwu onye na-enye grant.", exceeds: "E lelere ndepụta nlele ahụ ahịrị n'ahịrị na akwụkwọ onye na-enye grant." },
      { name: "Mkpa na mmemme site n'eziokwu", objective: "O3", notYet: "Otu ọnụ ọgụgụ ma ọ bụ nsonaazụ enweghị ndekọ ma ọ bụ isi iyi.", meets: "Nkọwa mkpa nwere ihe dị ka okwu 250 na nkọwa mmemme na-eji naanị eziokwu e lelere.", exceeds: "Na-eji okwu na ihe onye na-enye grant kacha chọọ ma nwee akụkọ e nyere ikike ya." },
      { name: "Arịrịọ onyinye", objective: "O4", notYet: "Enweghị arịrịọ doro anya, ma ọ bụ ozi ndị na-enye onyinye dị na prompt.", meets: "Ihe dị ka okwu 150 nwere otu akụkọ, ihe onyinye na-eme na otu arịrịọ doro anya, na-eji ihe nnọchi.", exceeds: "Ego ahụ na ihe ọ na-enye sitere n'ezi ego mmemme ahụ na-efu." },
      { name: "Eziokwu ma dị ka okwu anyị", objective: "O6", notYet: "Nsonaazụ, onye mmekọ ma ọ bụ nkwado e chepụtara echepụta ka dị n'ime ya.", meets: "Okwu ọ bụla bụ eziokwu, ha abụọ dịkwa ka okwu nzukọ ahụ.", exceeds: "Onye ọrụ ibe maara mmemme ahụ agụọla ya ma kwado ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Arịrịọ grant e zipuru n'ime ụbọchị 90 (nnyocha nsochi)",
      "Grant e nyere na ego arịrịọ onyinye nwetara, dị ka nzukọ si kọọ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara nzukọ na-adịghị achọ uru n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu",
      "Eziokwu na ndekọ mmemme gị, na ntuziaka ọha nke otu onye na-enye grant",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge idezi ihe mbụ ndị ahụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị na-amụ ihe ka ha bute otu ezi ohere grant na nọmba mmemme ha na nnọkọ ahụ.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye ndepụta ndị na-enye onyinye, aha ha ma ọ bụ akụkọ onyinye ha n'ime ngwa AI mgbe ọ bụla.",
      "Dọọ ndị na-amụ ihe aka na ntị banyere ụlọ ọrụ na-ana ụgwọ iji debanye ha aha na SAM.gov; ọ bụ n'efu.",
      "Kewaa ndị na-amụ ihe abụọ abụọ ka ha gụpụta ihe mbụ ibe ha n'olu dị elu ma chọta isi iyi nọmba ọ bụla.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

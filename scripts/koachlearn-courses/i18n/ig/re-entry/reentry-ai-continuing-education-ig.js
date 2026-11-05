"use strict";

// Koach Learn course (Igbo translation of re-entry/reentry-ai-continuing-education.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "reentry-ai-continuing-education-ig",
  lang: "ig",
  translationOf: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "AI na Ịga n'Ihu n'Agụmakwụkwọ",
  skills: "Ịtọ ebumnuche mmụta jikọrọ n'ọrụ, Ịchọta mmemme n'efu na nke dị ọnụ ala, Iji AI dị ka onye nkuzi ọmụmụ, Ime atụmatụ ọmụmụ, Ịlele mmemme tupu i debanye aha, Ịkwado ịrịọ enyemaka ego maka akwụkwọ",
  outcome: "ịhọrọ ebumnuche mmụta na-eduga n'ọrụ, ịchọta ezi mmemme (klas high school equivalency, asambodo ma ọ bụ klas kọleji) ma lelee ya tupu i debanye aha, na iji ngwa enyemaka AI dị ka onye nkuzi nwere atụmatụ ọmụmụ kwa izu.",
  about: [
    "Ọtụtụ mmadụ na-alọta ụlọ dị njikere ịmụ ihe: imecha high school equivalency, inweta asambodo ọrụ aka, ịmalite community college, ma ọ bụ ịmụta nka kọmputa. Agụmakwụkwọ nwere ike imeghe ụzọ maka ọrụ ka mma.",
    "Ị ga-atọ ebumnuche na-eduga n'ọrụ, chọta mmemme n'efu na nke dị ọnụ ala, lelee mmemme tupu i debanye aha, kwado maka enyemaka ego, ma jiri ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini dị ka onye nkuzi nwere ndidi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. AI bụ onye enyemaka ọmụmụ, ọ bụghị ụzọ isi mee ọrụ ụlọ akwụkwọ gị maka gị; ụlọ akwụkwọ nwere iwu gbasara nke ahụ. Edela nọmba nzuzo ma ọ bụ ihe gbasara okwu ikpe gị n'ime AI. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ otu ebumnuche mmụta jikọrọ n'ọrụ. Chọta otu ezi mmemme maka ya ma lelee ya site n'ajụjụ ise (ọnụ ahịa, ogologo oge, usoro oge, ihe ị ga-enweta na njedebe, na otu o si enyere gị aka inweta ọrụ). Wee rịọ ngwa enyemaka AI maka atụmatụ ọmụmụ izu anọ, jiri ya kuziere gị ma nwalee gị n'isiokwu mbụ, ma tinye oge ọmụmụ abụọ mbụ gị na kalenda gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alọta ụlọ site n'ụlọ mkpọrọ (re-entry) chọrọ ịga n'ihu ịmụ ihe: imecha high school equivalency, inweta asambodo ọrụ aka, ịmalite community college ma ọ bụ ịmụta nka kọmputa iji nweta ọrụ ka mma.",
    startingPoint: "Ha nwere ike iji ekwentị nkịtị na ụfọdụ app. Ọtụtụ anọghị n'ụlọ akwụkwọ ọtụtụ afọ, amaghị otu esi elele mmemme ma ọ bụ arịọ enyemaka ego, ma ha ejibeghị AI nke ukwuu dị ka onye enyemaka ọmụmụ.",
    gap: "Agụmakwụkwọ nwere ike imeghe ụzọ maka ọrụ ka mma, mana ndị na-alọta ụlọ nwere ike imefu oge na ego na mmemme na-adịghị eduga n'ọrụ, ma ọ bụ n'aghụghọ nwere nnukwu mbinye ego. Ndị na-amụ ihe kwesịrị ịtọ ebumnuche jikọrọ n'ọrụ, chọta ma lelee ezi mmemme, jiri AI mụọ ihe n'eziokwu, ma kwado maka enyemaka ego.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ nwere ịntanetị",
      "Oge: nkuzi ihe dị ka nkeji 5 nke dabara n'etiti ọrụ na oge ịhụ ndị ọrụ",
      "Iwu ụlọ akwụkwọ: AI bụ onye enyemaka ọmụmụ, ọ bụghị ụzọ isi mee ọrụ ụlọ akwụkwọ",
      "Nzuzo: edela nọmba nzuzo, ozi ụtụ isi ma ọ bụ ihe gbasara okwu ikpe n'ime AI; fọm enyemaka ego naanị na studentaid.gov"
    ],
    prerequisites: "\"Mmalite AI na Obi Ike n'Ihe Dijitalụ\" ga-enyere aka, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ ị chọrọ", action: "ide ebumnuche mmụta jikọrọ n'ọrụ ahụ", standard: "n'otu ahịrịokwu, ma lelee iwu ikike ọrụ (license) ọ bụla na bọọdụ steeti" },
    { id: "O2", condition: "Site n'iji careeronestop.org, ọba akwụkwọ, ụlọ akwụkwọ ndị okenye ma ọ bụ community college", action: "ịchọta opekata mpe ezi mmemme abụọ dabara n'ebumnuche gị", standard: "na nọmba ekwentị e si na weebụsaịtị ha n'onwe ha were" },
    { id: "O3", condition: "Mgbe e nyere gị otu mmemme", action: "ịlele ya site n'ajụjụ ise gbasara ọnụ ahịa, ogologo oge, usoro oge, ihe ị ga-enweta na otu o si enyere gị aka inweta ọrụ", standard: "na azịza site na mmemme ahụ n'onwe ya, ma were nrụgide ọ bụla ịbịanye aka na nnukwu mbinye ego dị ka ihe ịdọ aka na ntị" },
    { id: "O4", condition: "Mgbe e nyere gị isiokwu site n'ebumnuche gị", action: "ịrịọ ngwa enyemaka AI ka ọ kọwaa ya, nye ọmụmaatụ ma nwalee gị", standard: "n'ekweghị ka AI mee ọrụ ụlọ akwụkwọ gị, ma lelee mperi na onye nkuzi gị ma ọ bụ akwụkwọ ọmụmụ gị" },
    { id: "O5", condition: "Mgbe e nyere gị oge ọrụ gị na oge ịhụ ndị ọrụ", action: "ime atụmatụ ọmụmụ izu anọ site n'enyemaka AI", standard: "nwere oge ọmụmụ dị mkpụmkpụ na-aga n'usoro, na oge abụọ mbụ na kalenda gị" },
    { id: "O6", condition: "Site n'iji studentaid.gov", action: "idepụta ebe a na-arịọ enyemaka ego gọọmentị etiti maka ụmụ akwụkwọ na ihe ị ga-akwado", standard: "na ajụjụ atọ maka ọfịs enyemaka ego, na ozi nzuzo e dere naanị na studentaid.gov" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ ụzọ gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịtọ ebumnuche mmụta na-eduga n'ọrụ",
          minutes: 5,
          goal: "Họrọ ebumnuche mmụta jikọrọ n'ezi ọrụ.",
          text: [
            "Mmụta na-aba uru karịa mgbe ọ na-eduga ebe ụfọdụ. Bido n'ọrụ ị chọrọ, wee laghachi azụ chọpụta ihe ị kwesịrị ịmụta.",
            "Jụọ AI: \"Achọrọ m ịrụ ọrụ dị ka onye na-anya forklift ma ọ bụ onye ndu n'ụlọ nkwakọba ngwaahịa. Kedu ọzụzụ ma ọ bụ asambodo ndị mmadụ na-enwetakarị maka nke ahụ? Kedu ndị dị mkpụmkpụ ma dị ọnụ ala?\" Ma ọ bụ: \"Achọrọ m ịbụ onye ọrụ ọkụ eletrik. Kedu nzọụkwụ ndị a na-esokarị?\"",
            "Ụfọdụ ọrụ chọrọ ikike ọrụ (license), ụfọdụ iwu ikike na-elekwa akụkọ ndekọ mpụ mmadụ. Jụọ bọọdụ ikike ọrụ steeti gị ma ọ bụ mmemme re-entry tupu i tinye oge na ego. AI nwere ike inye gị ndepụta mbụ, mana bọọdụ gọọmentị ahụ nwere okwu ikpeazụ."
          ],
          steps: ["Kpọọ aha ọrụ ị chọrọ.", "Jụọ AI ọzụzụ ndị mmadụ na-enwetakarị maka ya.", "Họrọ nzọụkwụ ọzọ kacha dị mkpụmkpụ ma baa uru.", "Ọ bụrụ na ọ chọrọ ikike ọrụ, jụọ bọọdụ ikike ọrụ steeti gị.", "Dee ebumnuche gị n'otu ahịrịokwu."],
          words: [["Asambodo (certificate)", "akwụkwọ na-egosi na i mechara mmemme ọzụzụ n'otu nka."], ["High school equivalency", "ule, dị ka GED, na-egosi na i nwere nka ọkwa high school (sekọndrị)."]],
          slides: [
            { title: "Bido n'ọrụ ahụ", bullets: ["Wee laghachi azụ", "Gịnị ka m kwesịrị ịmụta?"] },
            { title: "Jụọ AI", bullets: ["\"Kedu ọzụzụ ndị mmadụ na-enweta maka ọrụ a?\"", "\"Kedu nhọrọ dị mkpụmkpụ ma dị ọnụ ala?\""] },
            { title: "Lelee ikike ọrụ (license)", bullets: ["Ụfọdụ ọrụ chọrọ ikike ọrụ", "Iwu nwere ike ile akụkọ ndekọ mpụ", "Jụọ bọọdụ steeti gị ma ọ bụ mmemme re-entry"] }
          ],
          tryIt: "Dee ọrụ ị chọrọ. Jụọ ngwa enyemaka AI ọzụzụ ndị mmadụ na-enwetakarị maka ya, ma dee ebumnuche mmụta gị n'otu ahịrịokwu.",
          youCanNow: "ịtọ ebumnuche mmụta na-eduga n'ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ asambodo (certificate)?", options: ["Akara mmụta kọleji (degree)", "Ihe na-egosi na i mechara ọzụzụ n'otu nka", "Onyinye ọrụ", "Mbinye ego"], answer: 1, why: "Asambodo na-egosi na i mechara ọzụzụ n'otu nka." },
            { objective: "O1", q: "Ị chọrọ ịbụ onye ọrụ ọkụ eletrik. Kedu otu ị ga-esi bido ebumnuche mmụta gị?", options: ["Debanye aha na klas mbụ ị hụrụ", "Jụọ enyi gị klas kacha dị mfe", "Bido n'ọrụ ahụ, wee chọta ọzụzụ ọ chọrọ ma jụọ bọọdụ ikike ọrụ steeti", "Chere ruo mgbe mmadụ nyere gị ọzụzụ"], answer: 2, why: "Ịmalite n'ọrụ ahụ na ịjụ bọọdụ ikike ọrụ na-eduga gị n'ọzụzụ ziri ezi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịchọta mmemme n'efu na nke dị ọnụ ala",
          minutes: 5,
          goal: "Chọta opekata mpe ezi mmemme abụọ dabara n'ebumnuche gị.",
          text: [
            "E nwere ọtụtụ ebe ị nwere ike ịmụ ihe n'efu ma ọ bụ n'ego nta: ebe agụmakwụkwọ ndị okenye (ọtụtụ mgbe maka high school equivalency na Bekee), ọba akwụkwọ ọha, community college, mmemme re-entry, na American Job Center, nke nwere ike inye ndụmọdụ ọrụ na izipu gị n'ọzụzụ.",
            "Chọta American Job Center kacha nso gị site na CareerOneStop finder na careeronestop.org, weebụsaịtị US Department of Labor (Ngalaba Ọrụ US), ma ọ bụ kpọọ nọmba enyemaka ya 1-877-872-5627. Ọrụ ha dị iche n'ebe ọ bụla, ya mere kpọọ ma ọ bụ gaa ebe ahụ ka ị mata ihe nke gị na-enye.",
            "N'ịntanetị, ọtụtụ weebụsaịtị a ma ama na-enye nkuzi n'efu, dị ka Khan Academy maka mgbakọ na mwepụ na ịgụ akwụkwọ, na klas n'efu site na community college. Jụọ AI maka echiche, wee gaa na weebụsaịtị mmemme ọ bụla n'onwe ya ka ị hụ na ọ dị adị na ọnụ ahịa ya."
          ],
          steps: ["Jụọ AI ebe ndị mmadụ nọ n'ógbè gị nwere ike ịmụ nka gị.", "Chọọ American Job Center kacha nso gị na careeronestop.org.", "Lelee ọba akwụkwọ gị, ụlọ akwụkwọ ndị okenye na community college.", "Dee mmemme abụọ.", "Kwado nke ọ bụla na weebụsaịtị ya n'onwe ya ma ọ bụ site n'ekwentị."],
          words: [["American Job Center", "ọfịs US Department of Labor na-akwụ ụgwọ ya, nke na-enyere aka n'ọrụ na ọzụzụ."], ["Community college", "kọleji obodo dị ọnụ ala karịa, nwere asambodo na akara mmụta afọ abụọ."]],
          slides: [
            { title: "Ebe dị ọnụ ala isi mụọ ihe", bullets: ["Agụmakwụkwọ ndị okenye na ọba akwụkwọ", "Community college", "Mmemme re-entry na American Job Center"] },
            { title: "American Job Center", bullets: ["Chọta otu na careeronestop.org", "Nọmba enyemaka: 1-877-872-5627", "Ọrụ ha dị iche: kpọọ ka ị mata"] },
            { title: "N'ịntanetị", bullets: ["Nkuzi n'efu dị ka Khan Academy", "Kwado mmemme na weebụsaịtị ha n'onwe ha"] }
          ],
          sources: [{ name: "CareerOneStop: American Job Center Finder (US Department of Labor)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Chọta American Job Center kacha nso gị na careeronestop.org na otu mmemme ọzọ (ọba akwụkwọ, ụlọ akwụkwọ ndị okenye ma ọ bụ community college) maka ebumnuche gị. Dee ha abụọ, na nọmba ekwentị e si na weebụsaịtị ha n'onwe ha were.",
          youCanNow: "ịchọta mmemme n'efu na nke dị ọnụ ala maka ebumnuche mmụta gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ community college?", options: ["Kọleji obodo dị ọnụ ala karịa", "Ụlọ akwụkwọ dị naanị n'ịntanetị", "Ụlọ ọrụ nkeonwe na-achọta ọrụ", "High school maka naanị ndị okenye"], answer: 0, why: "Community college dị n'obodo, ọ na-adịkarịkwa ọnụ ala karịa kọleji ndị ọzọ." },
            { objective: "O2", q: "AI tụrụ aro mmemme ọzụzụ dị nso gị. Gịnị ka ị ga-eme?", options: ["Debanye aha ozugbo", "Kwụọ ego mbụ ka e chekwaara gị ọnọdụ", "Kesaa ya n'eleleghị ya", "Kwado ya na weebụsaịtị mmemme ahụ n'onwe ya"], answer: 3, why: "AI nwere ike ime mperi, ya mere ị na-akwado mmemme na weebụsaịtị ha n'onwe ha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịlele mmemme tupu i debanye aha",
          minutes: 5,
          goal: "Jụọ ajụjụ ise iji mara ma mmemme ọ bụ ezi ihe ma ọ ruru ya.",
          text: [
            "Ụfọdụ mmemme dị mma nke ukwuu. Ụfọdụ dị oke ọnụ ma ha anaghị eduga ebe ọ bụla, ole na ole bụkwa aghụghọ na-achụ ndị chọrọ mmalite ọhụrụ. Lelee tupu i bịanye aka ma ọ bụ kwụọ ụgwọ.",
            "Jụọ ajụjụ ise: Ego ole ka ọ ga-efu n'ozuzu, gụnyere akwụkwọ na ụgwọ ndị ọzọ? Ogologo oge ole ka ọ na-ewe, gịnị bụkwa usoro oge ya? Gịnị ka m ga-enweta na njedebe (asambodo, ikike ọrụ ma ọ bụ kredit)? Ụlọ akwụkwọ ahụ ọ nwere accreditation, ka ndị were mmadụ n'ọrụ ọ na-anabata asambodo ahụ? Ndị ole gụsịrị akwụkwọ na-enweta ọrụ, ọ na-enyekwa aka n'ịchọta ọrụ?",
            "AI nwere ike inyere gị aka ịkwado ajụjụ ndị ahụ ma kọwaa okwu dị ka \"accredited\". Mana azịza ga-esi na mmemme ahụ n'onwe ya, e dere ede, na nlele nke gị. Kpachara anya maka nrụgide ka i bịanye aka taa ma ọ bụ were nnukwu mbinye ego."
          ],
          steps: ["Jụọ maka ọnụ ahịa n'ozuzu.", "Jụọ maka ogologo oge na usoro oge.", "Jụọ ihe ị ga-enweta na njedebe.", "Jụọ ma o nwere accreditation ma ọ bụ ndị were mmadụ n'ọrụ na-anabata ya.", "Jụọ maka ndị nwetara ọrụ na enyemaka n'ịchọta ọrụ."],
          words: [["Accredited", "otu ndị ọrụ gọọmentị ma ọ bụ nke a nabatara na-elele ịdị mma ụlọ akwụkwọ kwadoro ya."], ["Enyemaka ịchọta ọrụ (job placement)", "enyemaka ịchọta ọrụ mgbe i mechara."]],
          slides: [
            { title: "Lelee tupu i bịanye aka", bullets: ["Ụfọdụ mmemme anaghị eduga ebe ọ bụla", "Ụfọdụ bụ aghụghọ"] },
            { title: "Ajụjụ ise", bullets: ["Ọnụ ahịa n'ozuzu? Ogologo oge na usoro oge?", "Gịnị ka m ga-enweta na njedebe?", "O nwere accreditation ka a na-anabata ya?", "Ndị nwetara ọrụ na enyemaka ịchọta ọrụ?"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Nrụgide ka i bịanye aka taa", "Nnukwu mbinye ego maka obere klas", "Enweghị azịza e dere ede"] }
          ],
          tryIt: "Họrọ otu mmemme site na Nkuzi 2. Rịọ ngwa enyemaka AI ka o nyere gị aka ịgbanwe ajụjụ ise ahụ ka ọ bụrụ obere ihe ị ga-agụ n'ekwentị, wee kpọọ ma ọ bụ lelee weebụsaịtị mmemme ahụ ma dee azịza ya.",
          youCanNow: "ịlele mmemme site n'ajụjụ ise tupu i debanye aha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka \"accredited\" pụtara?", options: ["Otu ndị na-elele ịdị mma kwadoro ya", "Ọ bụ n'efu", "Ọ dị naanị n'ịntanetị", "Gọọmentị na-elekọta ya"], answer: 0, why: "Accreditation pụtara na otu a nabatara lelere ịdị mma mmemme ahụ." },
            { objective: "O3", q: "Ụlọ akwụkwọ kwuru na ị ga-abịanye aka na nnukwu mbinye ego taa ka ị ghara itufu ọnọdụ gị. Gịnị ka ị ga-eme?", options: ["Bịanye aka ka ị ghara itufu ọnọdụ ahụ", "Bịanye aka mana chee na ị gaghị akwụ", "Were ya dị ka ihe ịdọ aka na ntị ma were oge lelee", "Rịọ AI ka ọ bịanye aka maka gị"], answer: 2, why: "Nrụgide ịbịanye aka na nnukwu mbinye ego ozugbo bụ ihe ịdọ aka na ntị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ ụzọ gị",
        questions: [
          { objective: "O1", q: "Ebee ka ọ kacha mma ịmalite ebumnuche mmụta?", options: ["Klas ọ bụla", "Klas ọ bụla a na-akpọsa nke ukwuu", "Ọrụ ị chọrọ, wee laghachi azụ", "Mmemme kacha ogologo"], answer: 2, why: "Ebumnuche ọrụ na-eme ka mmụta baa uru." },
          { objective: "O1", q: "AI kwuru na ọrụ chọrọ ikike ọrụ (license). Onye nwere okwu ikpeazụ n'iwu ya?", options: ["Bọọdụ ikike ọrụ steeti gị", "AI", "Enyi", "Ihe e dere na soshal midia"], answer: 0, why: "Bọọdụ gọọmentị na-etọ iwu ikike ọrụ." },
          { objective: "O2", q: "Ebee ka ị nwere ike ịchọta American Job Center kacha nso gị?", options: ["Weebụsaịtị gift card", "Mgbasa ozi na-apụta na mberede", "Ozi ederede ọ bụla", "careeronestop.org"], answer: 3, why: "CareerOneStop bụ ihe nchọta nke Department of Labor." },
          { objective: "O3", q: "Kedu ajụjụ na-elele uru mmemme?", options: ["\"Kedu agba ụlọ ahụ?\"", "\"Ndị ole gụsịrị akwụkwọ na-enweta ọrụ?\"", "\"Enwere m ike ịbịanye aka taa n'agụghị ya?\"", "\"Ị nwere ebe a na-adọba ụgbọala?\""], answer: 1, why: "Ndị nwetara ọrụ na-egosi ma ọ na-eduga ebe ụfọdụ." },
          { objective: "O3", q: "Mmemme na-arụgide gị ka i bịanye aka na nnukwu mbinye ego taa. Nke a bụ:", options: ["Ezigbo ohere", "Ihe ịdọ aka na ntị", "Iwu", "Ihe nkịtị n'ụlọ akwụkwọ niile"], answer: 1, why: "Nrụgide na nnukwu mbinye ego bụ ihe ịrịba ama ịdọ aka na ntị." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI mụọ ihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI dị ka onye nkuzi ọmụmụ",
          minutes: 5,
          goal: "Rịọ AI ka ọ kọwaa, nye ọmụmaatụ ma nwalee gị, n'emeghị ọrụ gị maka gị.",
          text: [
            "Ngwa enyemaka AI nwere ike ịbụ onye nkuzi nwere ndidi, n'oge ọ bụla n'ụbọchị. Rịọ ya ka ọ kọwaa isiokwu n'ụzọ dị mfe, nye ọmụmaatụ, ma nwalee gị: \"Ana m amụ fractions (ọnụọgụ nkewa) maka ule high school equivalency m. Kọwaa otu esi agbakọ fractions n'usoro dị mfe, nye m otu ọmụmaatụ, wee nye m ajụjụ omume atọ, otu n'otu oge.\"",
            "Ọ bụrụ na ị ghọtaghị, kwuo ya: \"Kọwaa ya n'ụzọ ọzọ.\" \"Jiri ego mee ọmụmaatụ.\" Ka ị na-anwa ajụjụ n'onwe gị, ka ị na-amụta karịa.",
            "Ekwela ka AI dee ọrụ ụlọ akwụkwọ gị ma ọ bụ were ule gị. Ụlọ akwụkwọ na-ewere nke ahụ dị ka aghụghọ n'ule, ị gaghịkwa amụta ihe. Lelekwa eziokwu: AI nwere ike ime mperi, ọbụlagodi na mgbakọ. Akwụkwọ ọmụmụ gị na onye nkuzi gị nwere okwu ikpeazụ."
          ],
          steps: ["Kwuo ihe ị na-amụ na ọkwa gị.", "Rịọ maka nkọwa dị mfe na otu ọmụmaatụ.", "Rịọ maka ajụjụ omume, otu n'otu oge.", "Rịọ maka nkọwa ọzọ ma ọ bụrụ na ihe kpọchiri gị.", "Mee ọrụ ụlọ akwụkwọ gị n'onwe gị; lelee eziokwu na onye nkuzi gị ma ọ bụ akwụkwọ gị."],
          words: [["Onye nkuzi (tutor)", "onye nkuzi na-enyere otu onye aka ịmụ ihe n'ọsọ nke ya."], ["Eziokwu n'agụmakwụkwọ (academic honesty)", "ime ọrụ nke gị n'onwe gị na ịgbaso iwu ụlọ akwụkwọ gị."]],
          slides: [
            { title: "Onye nkuzi n'oge ọ bụla", bullets: ["Ọ na-akọwa n'ụzọ dị mfe", "Ọ na-enye ọmụmaatụ", "Ọ na-ajụ gị ajụjụ, otu n'otu oge"] },
            { title: "Ihe kpọchiri gị?", bullets: ["\"Kọwaa ya n'ụzọ ọzọ.\"", "\"Jiri ego mee ọmụmaatụ.\""] },
            { title: "Mụọ ihe, emela aghụghọ", bullets: ["Mee ọrụ ụlọ akwụkwọ na ule gị n'onwe gị", "AI nwere ike ime mperi", "Onye nkuzi na akwụkwọ ọmụmụ nwere okwu ikpeazụ"] }
          ],
          tryIt: "Họrọ otu isiokwu site n'ebumnuche gị. Rịọ ngwa enyemaka AI ka ọ kọwaa ya n'ụzọ dị mfe, nye otu ọmụmaatụ ma nwalee gị n'ajụjụ atọ, otu n'otu oge.",
          youCanNow: "iji AI dị ka onye nkuzi ọmụmụ n'ụzọ eziokwu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ezigbo prompt maka nkuzi kwesịrị inwe?", options: ["Naanị okwu \"enyemaka\"", "Ọrụ ụlọ akwụkwọ gị ka AI mechaa ya", "Nọmba ID nwa akwụkwọ gị", "Ihe ị na-amụ na ọkwa gị"], answer: 3, why: "Ịgwa AI isiokwu na ọkwa gị na-enweta nkọwa dabara gị." },
            { objective: "O4", q: "Ị nwere edemede ị ga-enyefe, ọ na-agụkwa gị ka AI dee ya. Gịnị ka ị ga-eme?", options: ["Ka AI dee ya ma nyefee ya", "Rịọ AI ka ọ kọwaa isiokwu ahụ ma nwalee gị, wee dee ya n'onwe gị", "Detuo edemede onye ọzọ na klas", "Ahapụ ọrụ ahụ"], answer: 1, why: "Ikwe ka AI dee ọrụ ụlọ akwụkwọ na-emebi iwu ụlọ akwụkwọ ma mee ka ị ghara ịmụta ihe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime atụmatụ ọmụmụ dabara ndụ gị",
          minutes: 5,
          goal: "Mee atụmatụ ọmụmụ kwa izu gburugburu ọrụ na ihe ndị ọzọ ị na-eme.",
          text: [
            "Mgbe ị na-arụ ọrụ, na-aga ịhụ ndị ọrụ ma na-elekọta ezinụlọ, a ga-eme atụmatụ oge ọmụmụ. Oge ọmụmụ dị mkpụmkpụ na-aga n'usoro na-arụ ọrụ karịa ịgụ ihe niile n'oge ikpeazụ (cramming).",
            "Jụọ AI: \"Ana m arụ ọrụ site n'elekere 7 nke ụtụtụ ruo elekere 3:30 nke ehihie n'ụbọchị ọrụ, enwekwara m oge ịhụ ndị ọrụ n'ehihie Tuzde. Mee atụmatụ ọmụmụ izu anọ maka mgbakọ high school equivalency m, nwere oge nkeji 30 ugboro anọ n'izu na obere ntụleghachi na ngwụcha izu ọ bụla.\"",
            "Tinye oge ọmụmụ ndị ahụ na kalenda ekwentị gị nwere ncheta. Mụọ ihe n'ebe dị jụụ, dị ka ọba akwụkwọ, ma jiri Wi-Fi na kọmputa ọba akwụkwọ n'efu ma ọ bụrụ na ị chọrọ ha. Ọ bụrụ na ị hapụrụ otu oge ọmụmụ, adala mba; naanị mee nke na-esote."
          ],
          steps: ["Depụta oge ọrụ gị na oge ịhụ ndị ọrụ a kara aka.", "Rịọ AI maka atụmatụ izu anọ nwere oge ọmụmụ dị mkpụmkpụ.", "Tinye oge ọmụmụ na kalenda gị nwere ncheta.", "Chọta ebe dị jụụ ị ga-amụ ihe.", "Ọ bụrụ na ị hapụrụ otu, naanị mee nke na-esote."],
          words: [["Oge ọmụmụ (study session)", "oge a kara aka ị na-eji amụ ihe."], ["Cramming", "ịnwa ịmụta ọtụtụ ihe n'oge ikpeazụ."]],
          slides: [
            { title: "Mee atụmatụ oge ọmụmụ gị", bullets: ["Oge mkpụmkpụ na-aga n'usoro ka cramming mma"] },
            { title: "Rịọ AI maka atụmatụ", bullets: ["Oge ọrụ gị na oge ịhụ ndị ọrụ", "Oge ọmụmụ dị mkpụmkpụ, ugboro ole na ole n'izu", "Ntụleghachi na ngwụcha izu"] },
            { title: "Nọgide na ya", bullets: ["Ncheta na kalenda", "Ebe dị jụụ, dị ka ọba akwụkwọ", "Hapụrụ otu? Mee nke na-esote"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka atụmatụ ọmụmụ izu anọ dabara oge ọrụ gị na oge ịhụ ndị ọrụ. Tinye oge ọmụmụ abụọ mbụ gị na kalenda ekwentị gị.",
          youCanNow: "ime ma debe atụmatụ ọmụmụ dabara ndụ gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ cramming?", options: ["Ịmụ obere ihe kwa ụbọchị", "Ide ndetu na klas", "Ịmụta ọtụtụ ihe n'oge ikpeazụ", "Ịrịọ onye nkuzi enyemaka"], answer: 2, why: "Cramming pụtara ịnwa ịmụta ọtụtụ ihe obere oge tupu ule." },
            { objective: "O5", q: "Ị hapụrụ oge ọmụmụ Tuzde n'ihi ọrụ. Gịnị ka ị ga-eme?", options: ["Naanị mee oge ọmụmụ na-esote", "Kwụsị atụmatụ ahụ", "Mụọ ihe awa isii na Wenezde", "Malitegharịa atụmatụ ahụ niile"], answer: 0, why: "Ịhapụ otu oge ọmụmụ adịghị njọ; ịlaghachi n'usoro bụ ihe dị mkpa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkwado ịrịọ enyemaka ego maka akwụkwọ",
          minutes: 5,
          goal: "Chọta ebe a na-arịọ enyemaka ego gọọmentị etiti maka ụmụ akwụkwọ ma depụta ihe ị ga-akwado.",
          text: [
            "Maka kọleji na ọtụtụ ụlọ akwụkwọ ọrụ aka na United States, nzọụkwụ mbụ maka enyemaka ego bụ FAFSA, Free Application for Federal Student Aid (fọm n'efu maka enyemaka ego gọọmentị etiti nye ụmụ akwụkwọ). Dị ka aha ya si kwuo, ọ bụ n'efu. Rịọ naanị na weebụsaịtị gọọmentị, studentaid.gov; akwụla weebụsaịtị ọ bụla ego ka o dejupụta ya.",
            "Iwu gbasara ikpe mpụ e mara mmadụ na enyemaka ego ụmụ akwụkwọ agbanweela n'afọ ndị na-adịbeghị anya. Echela na ị gaghị enweta enyemaka. Lelee iwu ugbu a na studentaid.gov, ma ọ bụ jụọ ọfịs enyemaka ego nke ụlọ akwụkwọ ahụ; ha na-enyere ụmụ akwụkwọ aka n'ajụjụ ndị a kwa ụbọchị.",
            "AI nwere ike inyere gị aka ịghọta okwu (\"Gịnị bụ Pell Grant?\" \"Kedu ihe dị iche n'etiti grant na mbinye ego (loan)?\") ma mee ndepụta ajụjụ maka ọfịs enyemaka ego. Dee ozi nkeonwe gị na ozi ụtụ isi gị naanị na studentaid.gov, ọ bụghị mgbe ọ bụla n'ime AI. Grant adịghị mkpa ka a kwụghachi ya; mbinye ego ka a na-akwụghachi."
          ],
          steps: ["Gaa naanị na studentaid.gov maka FAFSA; ọ bụ n'efu.", "Lelee iwu ugbu a gbasara ikpe mpụ n'ebe ahụ ma ọ bụ na ọfịs enyemaka ego nke ụlọ akwụkwọ ahụ.", "Jiri AI kọwaa okwu ma kwado ajụjụ.", "Dee ozi nkeonwe naanị na weebụsaịtị gọọmentị ahụ.", "Mara ihe dị iche: a naghị akwụghachi grant, a na-akwụghachi mbinye ego."],
          words: [["FAFSA", "Free Application for Federal Student Aid, fọm n'efu maka enyemaka ego gọọmentị etiti nye ụmụ akwụkwọ, na studentaid.gov."], ["Grant", "ego maka akwụkwọ nke a naghịkarị akwụghachi."], ["Ọfịs enyemaka ego (financial aid office)", "ọfịs dị n'ụlọ akwụkwọ na-enyere ụmụ akwụkwọ aka ịkwụ ụgwọ akwụkwọ."]],
          slides: [
            { title: "Bido na FAFSA", bullets: ["Free Application for Federal Student Aid", "Naanị na studentaid.gov", "Akwụla weebụsaịtị ọ bụla ego ka o dejupụta ya"] },
            { title: "Ikpe mpụ na enyemaka ego", bullets: ["Iwu agbanweela n'afọ ndị na-adịbeghị anya", "Echela na ị gaghị enweta enyemaka", "Lelee studentaid.gov ma ọ bụ ọfịs enyemaka ego"] },
            { title: "Jiri AI n'amamihe", bullets: ["Kọwaa okwu dị ka Pell Grant", "Kwado ajụjụ maka ọfịs enyemaka ego", "Ozi nkeonwe naanị na weebụsaịtị gọọmentị"] }
          ],
          sources: [{ name: "Federal Student Aid: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Ọrụ ikpeazụ: dee ebumnuche mmụta gị jikọrọ n'ọrụ, lelee otu ezi mmemme site n'ajụjụ ise ahụ, rịọ AI maka atụmatụ ọmụmụ izu anọ, ka o kuziere gị ma nwalee gị n'isiokwu mbụ, ma tinye oge ọmụmụ abụọ mbụ gị na kalenda gị. Ọ bụrụ na mmemme ahụ bụ kọleji ma ọ bụ ụlọ akwụkwọ ọrụ aka, tinye ajụjụ atọ maka ọfịs enyemaka ego ya.",
          youCanNow: "ime atụmatụ, ịchọta, ịlele na ịkwụ ụgwọ maka ịga n'ihu n'agụmakwụkwọ, na iji AI dị ka onye nkuzi gị mụọ ihe.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka FAFSA pụtara?", options: ["Federal Aid for Students and Adults", "Free Application for Federal Student Aid", "First Approved Funding for School Admission", "Financial Account for Student Assistance"], answer: 1, why: "FAFSA bụ Free Application for Federal Student Aid." },
            { objective: "O6", q: "Weebụsaịtị na-arịọ ego ka o dejupụta FAFSA gị. Gịnị ka ị ga-eme?", options: ["Kwụọ ya ka ị chekwaa oge", "Nye ha ozi ụtụ isi gị", "Rịọ AI ka o dejupụta ya na nọmba Social Security gị", "Dejupụta ya n'efu na studentaid.gov"], answer: 3, why: "FAFSA bụ n'efu na studentaid.gov, ozi nzuzo na-agakwa naanị ebe ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI mụọ ihe",
        questions: [
          { objective: "O4", q: "Kedu nke bụ iji AI n'eziokwu maka akwụkwọ?", options: ["Idetuo azịza ya n'ọrụ ụlọ", "Ikwe ka o dee edemede gị ka i nyefee", "Ikwe ka o were ule gị", "Ịrịọ ya ka ọ kọwaa isiokwu ma nwalee gị"], answer: 3, why: "Ịkọwa na ịnwale na-enyere gị aka ịmụta ihe." },
          { objective: "O4", q: "Ị ghọtaghị nkọwa. Gịnị ka ị ga-ajụ?", options: ["\"Kọwaa ya n'ụzọ ọzọ.\"", "\"Mee ọrụ ụlọ m.\"", "\"Gịnị bụ okwuntughe m?\"", "Ọ dịghị ihe; kwụsị"], answer: 0, why: "Nkọwa ọhụrụ na-enyekarị aka." },
          { objective: "O5", q: "Kedu atụmatụ ọmụmụ kacha arụ ọrụ?", options: ["Ịmụ ihe naanị mgbe ọ masịrị gị", "Otu abalị ogologo tupu ule", "Oge ọmụmụ dị mkpụmkpụ na-aga n'usoro", "Enweghị atụmatụ"], answer: 2, why: "Oge ọmụmụ na-aga n'usoro ka cramming mma." },
          { objective: "O6", q: "Ebee ka ị na-edejupụta FAFSA?", options: ["Njikọ n'ozi ederede", "Weebụsaịtị ọ bụla na-ana ego", "N'ime mkparịta ụka AI", "studentaid.gov, n'efu"], answer: 3, why: "FAFSA bụ n'efu na weebụsaịtị gọọmentị." },
          { objective: "O6", q: "E mara gị ikpe mpụ, ị chọkwara enyemaka ego. Gịnị ka ị ga-eme?", options: ["Jụọ onye ị na-amaghị", "Chee na ị gaghị enweta enyemaka", "Lelee iwu ugbu a na studentaid.gov ma ọ bụ jụọ ọfịs enyemaka ego", "Ahapụ akwụkwọ"], answer: 2, why: "Iwu agbanweela; isi iyi gọọmentị maara iwu ugbu a." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI na Ịga n'Ihu n'Agụmakwụkwọ",
    questions: [
      { objective: "O1", q: "Ezigbo ebumnuche mmụta bụ:", options: ["Ihe ọ bụla", "Nke jikọrọ n'ọrụ ị chọrọ", "Ihe ọ bụla a na-akpọsa nke ukwuu", "Nke kacha ogologo"], answer: 1, why: "Ebumnuche ọrụ na-eme ka mmụta baa uru." },
      { objective: "O1", q: "Asambodo (certificate) bụ:", options: ["Ihe na-egosi na i mechara ọzụzụ n'otu nka", "Mbinye ego", "Onyinye ọrụ", "Akara nọmba ụgbọala"], answer: 0, why: "Asambodo na-egosi ndị were mmadụ n'ọrụ nka gị." },
      { objective: "O1", q: "Ule high school equivalency, dị ka GED:", options: ["Na-egosi nka ọkwa high school", "Bụ ule ịnya ụgbọala", "Bụ akwụkwọ ịrịọ ọrụ", "Bụ mbinye ego"], answer: 0, why: "Ọ bụ ụzọ ọzọ kama diplọma high school." },
      { objective: "O1", q: "Maka ọrụ chọrọ ikike ọrụ, lelee:", options: ["Naanị AI", "Bọọdụ ikike ọrụ steeti gị", "Asịrị", "Ọ dịghị ihe"], answer: 1, why: "Bọọdụ na-etọ ma na-akọwa iwu ahụ." },
      { objective: "O2", q: "Onye na-akwụ ụgwọ American Job Center bụ:", options: ["Ụlọ ọrụ soshal midia", "Ụlọ akụ nkeonwe", "US Department of Labor", "Onye na-agbazinye ego payday"], answer: 2, why: "Ha so na netwọk Department of Labor." },
      { objective: "O2", q: "Ọrụ dị n'American Job Center:", options: ["Dị naanị n'ịntanetị", "Bụ otu n'ebe niile", "Dị oke ọnụ", "Dị iche iche, ya mere kpọọ ma ọ bụ gaa ka ị mata"], answer: 3, why: "Ebe ọ bụla na-enye ọrụ dị iche." },
      { objective: "O2", q: "Community college bụ:", options: ["Ụlọ akụ", "Naanị mmemme ụlọ mkpọrọ", "Kọleji obodo dị ọnụ ala karịa", "Ụlọ ọrụ na-achọta ọrụ"], answer: 2, why: "Community college na-enye asambodo na akara mmụta." },
      { objective: "O2", q: "Mgbe AI tụrụ aro mmemme, ị kwesịrị:", options: ["Ịkwado ya na weebụsaịtị mmemme ahụ n'onwe ya", "Idebanye aha ozugbo", "Ịkwụ onye ị na-amaghị ego", "Ileghara ya anya"], answer: 0, why: "AI nwere ike idepụta mmemme na-adịghị adị." },
      { objective: "O3", q: "\"Accredited\" pụtara:", options: ["N'efu", "Dị oke ọnụ", "Naanị n'ịntanetị", "Otu ndị na-elele ịdị mma kwadoro ya"], answer: 3, why: "Accreditation na-elele ịdị mma." },
      { objective: "O3", q: "Job placement pụtara:", options: ["Tebụl", "Enyemaka ịchọta ọrụ mgbe i mechara", "Ule", "Mbinye ego"], answer: 1, why: "Ọ na-ejikọ ndị gụsịrị akwụkwọ na ọrụ." },
      { objective: "O3", q: "Azịza gbasara ọnụ ahịa mmemme kwesịrị isi na:", options: ["Naanị AI", "Mmemme ahụ, e dere ede", "Asịrị", "Mgbasa ozi na-apụta na mberede"], answer: 1, why: "Azịza e dere ede site na mmemme ahụ bụ nke a pụrụ ịtụkwasị obi." },
      { objective: "O4", q: "Ezigbo prompt maka nkuzi na-ekwu:", options: ["Nọmba okwu ikpe gị", "Nọmba Social Security gị", "Naanị \"enyemaka\"", "Ihe ị na-amụ na ọkwa gị"], answer: 3, why: "Isiokwu na ọkwa na-enyere AI aka ịkụzi nke ọma." },
      { objective: "O4", q: "AI mere mperi n'azịza mgbakọ. Onye nwere okwu ikpeazụ?", options: ["Onye nkuzi gị na akwụkwọ ọmụmụ gị", "AI", "Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye"], answer: 0, why: "AI nwere ike ime mperi, ọbụlagodi na mgbakọ." },
      { objective: "O4", q: "Ikwe ka AI dee ọrụ ụlọ akwụkwọ gị bụ:", options: ["Iwu", "Ihe a na-ekwe mgbe niile", "Megidere iwu ụlọ akwụkwọ, ị gaghịkwa amụta ihe", "Ezigbo omume"], answer: 2, why: "Eziokwu n'agụmakwụkwọ pụtara ime ọrụ nke gị n'onwe gị." },
      { objective: "O5", q: "Cramming pụtara:", options: ["Ọba akwụkwọ", "Ọmụmụ dị mkpụmkpụ na-aga n'usoro", "Otu ndị na-amụkọ ihe", "Ịmụta ọtụtụ ihe n'oge ikpeazụ"], answer: 3, why: "Cramming anaghị arụ ọrụ dị ka ọmụmụ na-aga n'usoro." },
      { objective: "O5", q: "Iji debe atụmatụ ọmụmụ, ị nwere ike:", options: ["Ịghara ime atụmatụ", "Ịdabere naanị na ncheta gị", "Itinye oge ọmụmụ na kalenda gị nwere ncheta", "Ịmụ ihe naanị n'ụbọchị ule"], answer: 2, why: "Ncheta na-eme ka ị nọgide n'usoro." },
      { objective: "O5", q: "Ọ bụrụ na ị hapụrụ otu oge ọmụmụ, ị kwesịrị:", options: ["Ịkwụsị mmemme ahụ", "Naanị ime nke na-esote", "Ịmalitegharị site na mbido", "Iche na olileanya adịghị"], answer: 1, why: "Otu oge ọmụmụ ị hapụrụ anaghị akwụsị ọganihu gị." },
      { objective: "O6", q: "FAFSA pụtara:", options: ["Free Application for Federal Student Aid", "Fast Application for Student Accounts", "Federal Account for Savings", "Financial Aid Service Agency"], answer: 0, why: "Ọ bụ fọm n'efu maka enyemaka ego gọọmentị etiti." },
      { objective: "O6", q: "Grant na-abụkarị:", options: ["Ego a naghị akwụghachi", "Ego a ga-akwụghachi ya na ọmụrụ nwa", "Ụdị kaadị kredit", "Ụgwọ"], answer: 0, why: "A naghị akwụghachi grant; a na-akwụghachi mbinye ego." },
      { objective: "O6", q: "Ozi nkeonwe na ozi ụtụ isi maka FAFSA kwesịrị ka e dee ya:", options: ["N'ime AI", "Naanị na studentaid.gov", "N'ozi ederede nye onye ị na-amaghị", "Na weebụsaịtị ọ bụla"], answer: 1, why: "Ozi nzuzo na-aga naanị na weebụsaịtị gọọmentị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 7, 8, 10, 11, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebumnuche jikọrọ n'ọrụ", objective: "O1", notYet: "Ebumnuche ahụ edoghị anya ma ọ bụ ejikọghị ya n'ọrụ.", meets: "Otu ahịrịokwu na-akpọ aha ọrụ ahụ na ọzụzụ ọ chọrọ.", exceeds: "Ọ na-ekwukwa ma ọrụ ahụ chọrọ ikike ọrụ steeti na ebe a ga-elele ya." },
      { name: "E lelere mmemme", objective: "O3", notYet: "Enweghị mmemme, ma ọ bụ a zaghị ajụjụ ise niile.", meets: "E lelere otu ezi mmemme site n'ajụjụ ise niile, mmemme ahụ zara ha.", exceeds: "Azịza gbasara ọnụ ahịa e dere ede, e jikwa mmemme nke abụọ tụnyere ya." },
      { name: "AI dị ka onye nkuzi", objective: "O4", notYet: "AI mere ọrụ ahụ, ma ọ bụ e meghị nnwale ọ bụla.", meets: "AI kọwara isiokwu mbụ, nye ọmụmaatụ ma nwalee onye na-amụ ihe.", exceeds: "Onye na-amụ ihe rịọrọ AI ka ọ kọwaa n'ụzọ ọzọ mgbe ihe kpọchiri ya." },
      { name: "Atụmatụ ọmụmụ na kalenda", objective: "O5", notYet: "Enweghị atụmatụ, ma ọ bụ enweghị oge ọmụmụ na kalenda.", meets: "Atụmatụ izu anọ nwere oge ọmụmụ dị mkpụmkpụ na-aga n'usoro, na oge abụọ mbụ na kalenda.", exceeds: "Oge ọmụmụ nwere ncheta ma dabara n'etiti ọrụ na oge ịhụ ndị ọrụ." },
      { name: "Ajụjụ enyemaka ego", objective: "O6", notYet: "Ọ dịghị ya mgbe mmemme ahụ bụ kọleji ma ọ bụ ụlọ akwụkwọ ọrụ aka.", meets: "Ajụjụ atọ maka ọfịs enyemaka ego.", exceeds: "Ọ na-ekwukwa ebe a na-edejupụta FAFSA n'efu." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha na mmemme high school equivalency, asambodo ma ọ bụ kọleji n'ime ụbọchị 90 (nnyocha nsochi)",
      "Ndị na-amụ ihe dejupụtara FAFSA ma ọ bụ rịọ enyemaka ego ọzọ n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ha na-eji AI dị ka onye nkuzi ọmụmụ kwa izu (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone ma ọ bụ kọmputa nwere ịntanetị na app kalenda",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Akwụkwọ na mkpịsị ode maka ebumnuche na ajụjụ gbasara mmemme",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nwee nọmba na adreesị American Job Center, ụlọ akwụkwọ ndị okenye na community college kacha nso n'aka.",
      "Kọwaa na AI bụ naanị onye enyemaka ọmụmụ; iji ya mee ọrụ ụlọ akwụkwọ na-emebi iwu ụlọ akwụkwọ.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee nọmba Social Security, ozi ụtụ isi ma ọ bụ ihe gbasara okwu ikpe n'ime AI; ọrụ FAFSA na-eme naanị na studentaid.gov, na nzuzo.",
      "Zipu ajụjụ gbasara ikpe mpụ na enyemaka ego na studentaid.gov ma ọ bụ ọfịs enyemaka ego, n'ihi na iwu na-agbanwe.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-donor-analytics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-donor-analytics-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-donor-analytics",
  category: "Non Profits",
  name: "Nnyocha Ndị Na-enye Onyinye site na AI",
  skills: "Ịkwadebe spreadsheet ndị na-enye onyinye n'enweghị nsogbu, Ịtụ ọnụ ọgụgụ ndị na-alọghachi na onyinye nkezi, Ikewa ndị na-enye onyinye n'otu n'otu, Iji AI kọwaa nọmba, Ịgbanwe ihe ị chọpụtara ka ọ bụrụ atụmatụ inweta onyinye",
  outcome: "were spreadsheet ndị na-enye onyinye nke e wepụrụ aha ha, gbakọọ ọnụ ọgụgụ ndị na-alọghachi, onyinye nkezi na otu ndị na-enye onyinye gị, jiri ngwa enyemaka AI kọwaa ihe nọmba ndị ahụ pụtara, ma dee atụmatụ otu peeji maka arịrịọ onyinye gị ọzọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ nzukọ na-adịghị achọ uru (nonprofit) na nzukọ okpukpe, ndị na-ahụ maka inweta onyinye, ndị otu bọọdụ na ndị ọrụ afọ ofufo nwere ndepụta ndị na-enye onyinye ma chọọ inweta ego karịa site n'ịghọta ya.",
    "Ị ga-amụta nọmba ole na ole dị mfe gbasara ndị na-enye onyinye, otu esi agbakọ ha na spreadsheet dị ka Google Sheets ma ọ bụ Microsoft Excel, otu esi eji AI kọwaa ha ma see eserese ha n'ekesaghị ozi nzuzo onye ọ bụla, na otu esi agbanwe ihe ị chọpụtara ka ọ bụrụ omume.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee mbipụta ndepụta ndị na-enye onyinye gị n'enweghị nsogbu (ma ọ bụ ndepụta omume sitere na Nkuzi 1), ebe e ji nọmba njirimara (ID) dochie aha na ozi ịkpọtụrụ. Gbakọọ ọnụ ọgụgụ ndị na-alọghachi na onyinye nkezi, kewaa ndị na-enye onyinye n'opekata mpe otu atọ, rịọ ngwa enyemaka AI ka ọ kọwaa ihe ndị ahụ ma tụọ aro otu omume maka otu ọ bụla, ma dee atụmatụ arịrịọ onyinye otu peeji nke gị onwe gị lelere.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ nzukọ na-adịghị achọ uru na nzukọ okpukpe, ndị na-ahụ maka inweta onyinye, ndị otu bọọdụ na ndị ọrụ afọ ofufo nwere ndepụta ndị na-enye onyinye ma chọọ inweta ego karịa site n'ịghọta ya.",
    startingPoint: "Ha na-edebe ndekọ ndị na-enye onyinye na spreadsheet ma ọ bụ sistemụ ndị na-enye onyinye, ma na-ezipu arịrịọ onyinye. Ọtụtụ agbakọbeghị ọnụ ọgụgụ ndị na-alọghachi, ekebeghị ndị na-enye onyinye n'otu, ma ọ bụ jiri AI kọwaa nọmba ha.",
    gap: "Mgbe i maghị ndị na-alọghachi na ndị na-apụ apụ, nzukọ na-ezigara onye ọ bụla otu arịrịọ ahụ ma tufuo ndị na-enye onyinye ha gaara edebe. Ndị na-amụ ihe kwesịrị ịgbanwe ndekọ nke ha ka ọ bụrụ nọmba ole na ole dị mkpa na atụmatụ, na-eji AI n'enweghị nsogbu n'ekpugheghị ozi ndị na-enye onyinye.",
    constraints: [
      "Nzuzo: a na-ewepụ aha, ozi ịkpọtụrụ na ndetu tupu nnyocha ọ bụla; naanị nọmba nchịkọta na-abanye n'AI",
      "Nka spreadsheet bụ isi: SUM, AVERAGE, ịhazi usoro (sort), nzacha (filter) na eserese dị mfe",
      "AI nwere ike ime mperi n'ịgbakọ ego ma chepụta nọmba ntụnyere, ya mere a na-elegharị nọmba ọ bụla anya",
      "Iwu gbasara ịkpọtụrụ ndị na-enye onyinye na ịpụ (opt-out), na iwu nzuzo nzukọ ahụ, na-arụ ọrụ",
      "Oge: ihe dị ka nkeji 60 n'ozuzu, na nkuzi nkeji 5"
    ],
    prerequisites: "Iji spreadsheet n'ụzọ bụ isi. \"Introduction to AI for Nonprofits\" ga-enyere aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta ndị na-enye onyinye", action: "ime mbipụta ọrụ na-enweghị aha, ebe e ji ID dochie aha ma hichapụ ozi ịkpọtụrụ", standard: "na-edebe naanị ID, ụbọchị onyinye, ego na mkpọsa" },
    { id: "O2", condition: "Mgbe e nyere gị spreadsheet ndị na-enye onyinye na-enweghị aha", action: "ịgbakọ ego niile e nwetara, onyinye nkezi na ọnụ ọgụgụ ndị na-alọghachi", standard: "na-enweta nọmba ọ bụla ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ID ndị na-enye onyinye gị na akụkọ onyinye ha", action: "ikewa ndị na-enye onyinye n'otu Ọhụrụ, Na-alọghachi, Kwụsịrị na Ukwu, ma gụọ ọnụ otu ọ bụla", standard: "ebe ID ọ bụla nọ n'otu" },
    { id: "O4", condition: "Mgbe e nyere gị nọmba nchịkọta gị", action: "ịrịọ ngwa enyemaka AI ka ọ kọwaa ha n'okwu dị mfe ma legharịa anya ịgbakọ ma ọ bụ nọmba ntụnyere ọ bụla o nyere", standard: "na-etinye naanị nọmba nchịkọta, ọ bụghị ndepụta ndị na-enye onyinye mgbe ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị ọnụ ọgụgụ otu ọ bụla", action: "ime eserese ogwe (bar chart) nwere aha doro anya na Google Sheets ma ọ bụ Excel", standard: "na-egosi otu ozi" },
    { id: "O6", condition: "Mgbe e nyere gị ihe ị chọpụtara", action: "ide atụmatụ arịrịọ onyinye otu peeji nwere otu omume, onye ga-eme ya na ụbọchị maka otu ọ bụla", standard: "na-eji ihe nnọchi maka aha ndị na-enye onyinye, nke onye isi gị lelere" }
  ],
  chapters: [
    {
      name: "Isi 1: Mara nọmba ndị na-enye gị onyinye",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkwadebe data ndị na-enye onyinye gị n'enweghị nsogbu",
          minutes: 5,
          goal: "Mee mbipụta ndepụta ndị na-enye onyinye dị ọcha, na-enweghị aha, nke dị mma inyocha.",
          text: [
            "Nnyocha ndị na-enye onyinye pụtara ilele ndekọ onyinye gị iji mụta onye na-enye, ego ole, ugboro ole, na ma ha na-alọghachi. Naanị spreadsheet ka ị chọrọ.",
            "Aha ndị na-enye onyinye, adreesị ha, email ha na ego ha nyere bụ ozi nzuzo, a ga-echebekwa ha. Tupu i jiri AI nyochaa ihe ọ bụla, mee mbipụta ma jiri ID dị ka D001 dochie aha ọ bụla. Hichapụ adreesị, nọmba ekwentị, email na ndetu. Debe naanị ID, ụbọchị onyinye, ego onyinye ahụ na, ọ bụrụ na i nwere ya, mkpọsa ma ọ bụ akpa ego (fund) ahụ.",
            "Debe ezi ndepụta ahụ na sistemụ ndị na-enye onyinye gị ma ọ bụ na faịlụ e chebere echebe. Mbipụta na-enweghị aha ka ị ga-eji rụọ ọrụ. Gbasoo iwu nzuzo nzukọ gị na nkwa ọ bụla unu kwere ndị na-enye onyinye."
          ],
          steps: ["Bupụta ma ọ bụ detuo ndepụta ndị na-enye onyinye gị na spreadsheet.", "Chekwaa mbipụta dị iche nke aha ya bụ \"donors-anonymous\".", "Jiri ID dị ka D001, D002 dochie aha ọ bụla.", "Hichapụ adreesị, nọmba ekwentị, email na ndetu.", "Debe naanị ID, ụbọchị onyinye, ego na mkpọsa."],
          words: [["Nnyocha ndị na-enye onyinye (donor analytics)", "ịmụ ndekọ onyinye iji mụta onye na-enye, ego ole, ugboro ole na ma ha na-alọghachi."], ["Na-enweghị aha (anonymous)", "ebe e wepụrụ aha na ozi ịkpọtụrụ ka onye ọ bụla ghara ịmata onye bụ onye."], ["Spreadsheet", "tebụl nwere ahịrị na kọlụm, dị ka Google Sheets ma ọ bụ Microsoft Excel."]],
          slides: [
            { title: "Ihe nnyocha ndị na-enye onyinye bụ", bullets: ["Onye na-enye, ego ole, ugboro ole", "Ma ndị na-enye onyinye na-alọghachi", "Naanị spreadsheet ka ị chọrọ"] },
            { title: "Buru ụzọ chebe ndị na-enye onyinye", bullets: ["Mee mbipụta dị iche", "Jiri ID dị ka D001 dochie aha", "Hichapụ adreesị, ekwentị, email, ndetu"] },
            { title: "Debe naanị", bullets: ["ID onye na-enye onyinye", "Ụbọchị na ego onyinye", "Mkpọsa ma ọ bụ akpa ego (fund)"] }
          ],
          tryIt: "Mee ndepụta omume na spreadsheet nwere ahịrị 12: ID (D001 ruo D010, ụfọdụ na-emegharị), ụbọchị onyinye (afọ gara aga na afọ a) na ego. Ma ọ bụ mee mbipụta na-enweghị aha nke ezi ndepụta gị site n'iso nzọụkwụ ndị ahụ.",
          youCanNow: "ịkwadebe ndepụta ndị na-enye onyinye dị mma inyocha, ebe e wepụrụ aha na ozi ịkpọtụrụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ị na-ehichapụ na mbipụta na-enweghị aha?", options: ["Adreesị, nọmba ekwentị, email na ndetu", "Ego onyinye", "Ụbọchị onyinye", "ID ndị na-enye onyinye"], answer: 0, why: "Hichapụ ozi ịkpọtụrụ na ndetu; debe ID, ụbọchị, ego na mkpọsa." },
            { objective: "O1", q: "Onye ọrụ afọ ofufo chọrọ inyocha ezi ndepụta ndị na-enye onyinye na laptọọpụ nke ya. Gịnị ka ị ga-eme?", options: ["Zigara ya ezi ndepụta ahụ n'email", "Nye ya mbipụta na-enweghị aha, debe ezi ndepụta na faịlụ e chebere echebe", "Bipụtara ya ezi ndepụta ahụ n'akwụkwọ", "Tinye ezi ndepụta ahụ n'AI maka ya"], answer: 1, why: "Chebe ezi ndepụta ahụ; jiri mbipụta na-enweghị aha rụọ ọrụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nọmba atọ nzukọ ọ bụla na-adịghị achọ uru kwesịrị ịmara",
          minutes: 6,
          goal: "Gbakọọ ego niile e nwetara, onyinye nkezi na ọnụ ọgụgụ ndị na-alọghachi.",
          text: [
            "Ego niile e nwetara bụ onyinye niile agbakọtara ọnụ. Onyinye nkezi bụ ego niile e nwetara kewara site n'ọnụ ọgụgụ onyinye. Na spreadsheet, =SUM() na-agbakọ kọlụm ọnụ, =AVERAGE() na-enyekwa nkezi.",
            "Ọnụ ọgụgụ ndị na-alọghachi (retention rate) na-agwa gị ole n'ime ndị nyere onyinye n'afọ gara aga nyekwara ọzọ n'afọ a. Gụọ ndị nyere onyinye n'afọ gara aga. Gụọ ole n'ime ha nyekwara n'afọ a. Kewaa nọmba nke abụọ site na nke mbụ ma mụbaa ya site na 100. Ọ bụrụ na ndị 40 nyere onyinye n'afọ gara aga ma 18 n'ime ha nyekwara ọzọ, ọnụ ọgụgụ ndị na-alọghachi bụ 18 / 40 = pasentị 45.",
            "Ndị na-alọghachi dị mkpa n'ihi na idebe onye na-enye onyinye na-efukarị obere ego karịa ịchọta onye ọhụrụ. Ọnụ ọgụgụ dị ala bụ ihe ịrịba ama na ị kwesịrị ịkele ndị na-enye onyinye ma na-agwa ha akụkọ ọhụrụ nke ọma karịa."
          ],
          steps: ["Ego niile e nwetara: =SUM() nke kọlụm ego.", "Onyinye nkezi: =AVERAGE() nke kọlụm ego.", "Gụọ ndị dị iche iche nyere onyinye n'afọ gara aga.", "Gụọ ole n'ime ha nyekwara n'afọ a.", "Ndị na-alọghachi = ndị nyeghachiri n'afọ a / ndị nyere n'afọ gara aga x 100."],
          words: [["Onyinye nkezi (average gift)", "ego niile e nwetara kewara site n'ọnụ ọgụgụ onyinye."], ["Ọnụ ọgụgụ ndị na-alọghachi (retention rate)", "pasentị ndị nyere onyinye n'afọ gara aga nyekwara ọzọ n'afọ a."], ["Fọmụla (formula)", "ngụkọ e dere n'ime igbe spreadsheet, na-amalite na =."]],
          slides: [
            { title: "Ego niile na nkezi", bullets: ["Ego niile e nwetara: =SUM(amounts)", "Onyinye nkezi: =AVERAGE(amounts)"] },
            { title: "Ọnụ ọgụgụ ndị na-alọghachi", bullets: ["Ndị nyere n'afọ gara aga nyekwara ọzọ", "Kewara site na ndị niile nyere n'afọ gara aga", "Mụbaa site na 100 = pasentị"] },
            { title: "Ọmụmaatụ", bullets: ["Ndị 40 nyere n'afọ gara aga", "18 n'ime ha nyekwara ọzọ", "18 / 40 = pasentị 45 na-alọghachi"] },
            { title: "Ihe mere o ji dị mkpa", bullets: ["Idebe ndị na-enye onyinye na-efu obere karịa ịchọta ndị ọhụrụ", "Ọnụ ọgụgụ dị ala = kelee ma gwa ha akụkọ nke ọma karịa"] }
          ],
          tryIt: "Site n'iji ndepụta omume gị ma ọ bụ ndepụta na-enweghị aha, gbakọọ ego niile e nwetara, onyinye nkezi na ọnụ ọgụgụ ndị na-alọghachi. Dee nọmba atọ ahụ.",
          youCanNow: "ịgbakọ ego niile e nwetara, onyinye nkezi na ọnụ ọgụgụ ndị na-alọghachi na spreadsheet.",
          quickCheck: [
            { objective: "O2", q: "Kedu fọmụla na-agbakọ kọlụm onyinye ọnụ?", options: ["=AVERAGE()", "=COUNT()", "=SUM()", "=IF()"], answer: 2, why: "=SUM() na-agbakọ kọlụm ọnụ; =AVERAGE() na-enye nkezi." },
            { objective: "O2", q: "Ndị 20 nyere onyinye n'afọ gara aga, 10 n'ime ha nyekwara ọzọ. Gịnị bụ ọnụ ọgụgụ ndị na-alọghachi gị?", options: ["Pasentị 10", "Pasentị 20", "Pasentị 200", "Pasentị 50"], answer: 3, why: "10 / 20 = 0.5, mụbaa site na 100 = pasentị 50." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ikewa ndị na-enye onyinye n'otu n'otu",
          minutes: 5,
          goal: "Kewaa ndị na-enye onyinye n'otu dị mfe ka otu ọ bụla nweta ozi kwesịrị ya.",
          text: [
            "Otu (segment) bụ ndị na-enye onyinye yitere n'ụzọ dị mkpa. Otu dị iche iche chọrọ ozi dị iche iche.",
            "Otu dị mfe ị ga-eji malite: Ọhụrụ (onyinye mbụ ha n'afọ a), Na-alọghachi (nyere n'afọ gara aga na n'afọ a), Kwụsịrị (nyere n'afọ gara aga mana ha enyeghị n'afọ a), na Ukwu (onyinye karịrị ego ị họọrọ, dị ka pasentị 10 kacha elu gị).",
            "Tinye kọlụm a na-akpọ Segment ma dejupụta ya maka ID ọ bụla. Ị nwere ike iji filter ma ọ bụ sort nke spreadsheet ahụ chịkọta ha. Gụọ ole ndị na-enye onyinye nọ n'otu ọ bụla."
          ],
          steps: ["Tinye kọlụm a na-akpọ Segment.", "Dee ID ọ bụla dị ka Ọhụrụ, Na-alọghachi, Kwụsịrị ma ọ bụ Ukwu.", "Jiri sort ma ọ bụ filter chịkọta ha.", "Gụọ ndị na-enye onyinye n'otu ọ bụla."],
          words: [["Otu (segment)", "ndị na-enye onyinye yitere n'ụzọ dị mkpa, dị ka ndị ọhụrụ ma ọ bụ ndị kwụsịrị."], ["Onye kwụsịrị (lapsed donor)", "onye nyere onyinye na mbụ mana o nyebeghị n'afọ a."]],
          slides: [
            { title: "Ihe otu (segment) bụ", bullets: ["Ndị na-enye onyinye yitere", "Otu ọ bụla na-enweta ozi kwesịrị ya"] },
            { title: "Otu anọ maka mmalite", bullets: ["Ọhụrụ: onyinye mbụ n'afọ a", "Na-alọghachi: nyere n'afọ gara aga na n'afọ a", "Kwụsịrị: nyere n'afọ gara aga, ọ bụghị n'afọ a", "Ukwu: karịrị ego ị họọrọ"] },
            { title: "Na spreadsheet", bullets: ["Tinye kọlụm Segment", "Jiri sort ma ọ bụ filter chịkọta", "Gụọ otu ọ bụla"] }
          ],
          tryIt: "Tinye kọlụm Segment na ndepụta gị. Dee otu maka ID ọ bụla ma gụọ ole bụ Ọhụrụ, Na-alọghachi, Kwụsịrị na Ukwu.",
          youCanNow: "ikewa ndị na-enye onyinye n'otu n'otu ma gụọ otu ọ bụla.",
          quickCheck: [
            { objective: "O3", q: "Kedu otu onye nyere onyinye n'afọ gara aga na n'afọ a nọ?", options: ["Na-alọghachi", "Ọhụrụ", "Kwụsịrị", "Ukwu"], answer: 0, why: "Ndị na-alọghachi nyere n'afọ gara aga na n'afọ a." },
            { objective: "O3", q: "Ị chọrọ ịhụ ndị niile kwụsịrị ọnụ. Gịnị ka ị ga-eme na spreadsheet?", options: ["Detegharịa ha na peeji ọhụrụ", "Jiri filter ma ọ bụ sort na kọlụm Segment", "Hichapụ ndị ọzọ niile", "Rịọ AI ka o chee onye ha bụ"], answer: 1, why: "Jiri filter ma ọ bụ sort nke spreadsheet chịkọta ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mara nọmba ndị na-enye gị onyinye",
        questions: [
          { objective: "O1", q: "Tupu i jiri AI nyochaa data ndị na-enye onyinye, gịnị ka ị kwesịrị ime?", options: ["Tinye ndepụta zuru ezu nwere aha", "Zigara ndị ọrụ afọ ofufo ya n'email", "Mee mbipụta ebe e ji ID dochie aha ma hichapụ ozi ịkpọtụrụ", "Tinye ya n'ịntanetị"], answer: 2, why: "Mbipụta na-enweghị aha na-echebe ozi nzuzo ndị na-enye onyinye." },
          { objective: "O2", q: "Ndị 40 nyere onyinye n'afọ gara aga, 18 n'ime ha nyekwara ọzọ n'afọ a. Gịnị bụ ọnụ ọgụgụ ndị na-alọghachi?", options: ["Pasentị 18", "Pasentị 40", "Pasentị 45", "Pasentị 58"], answer: 2, why: "18 kewara site na 40 bụ 0.45, ya bụ pasentị 45." },
          { objective: "O2", q: "Kedu fọmụla spreadsheet na-enye onyinye nkezi?", options: ["=COUNT()", "=TODAY()", "=MAX()", "=AVERAGE()"], answer: 3, why: "=AVERAGE() na-ekewa ego niile site n'ọnụ ọgụgụ onyinye." },
          { objective: "O3", q: "Onye nyere onyinye n'afọ gara aga mana o nyeghị n'afọ a. Kedu otu ọ nọ?", options: ["Ọhụrụ", "Kwụsịrị", "Na-alọghachi", "Ukwu"], answer: 1, why: "Ndị kwụsịrị nyere na mbụ mana ha enyeghị n'afọ a." },
          { objective: "O2", q: "Gịnị mere ndị na-alọghachi ji dị mkpa?", options: ["AI chọrọ ya", "Idebe ndị na-enye onyinye na-efukarị obere ego karịa ịchọta ndị ọhụrụ", "Ọ na-eme ka spreadsheet buo ibu", "Ọ na-ekpebi ọnụ ụtụ isi"], answer: 1, why: "Ọtụtụ ndị na-alọghachi na-eme ka onyinye na-abịa mgbe niile n'obere ego." }
        ]
      }
    },
    {
      name: "Isi 2: Site na nọmba gaa n'omume",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji AI kọwaa nọmba gị",
          minutes: 5,
          goal: "Rịọ ngwa enyemaka AI ka ọ kọwaa nọmba ndị na-enye onyinye na-enweghị aha n'okwu dị mfe.",
          text: [
            "Ị nwere ike itinye nọmba nchịkọta gị, ọ bụghị ndepụta ndị na-enye onyinye gị, n'ime ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini ma jụọ ihe ha pụtara.",
            "Dịka ọmụmaatụ: \"Ana m elekọta obere ụlọ nri ndị nọ ná mkpa (food bank). Afọ gara aga ndị 40 nyere onyinye, afọ a 35. Ndị na-alọghachi pasentị 45. Onyinye nkezi $85. Otu: 17 ọhụrụ, 18 na-alọghachi, 22 kwụsịrị, 4 ukwu. Kọwaa ihe nọmba ndị a na-agwa m n'okwu dị mfe na ajụjụ m kwesịrị ịjụ ọzọ.\"",
            "AI nwekwara ike ịtụ aro fọmụla ma ọ bụ ụdị eserese ma ọ bụrụ na ihe agbagwojuo gị anya. Lelee onwe gị ịgbakọ ọ bụla o mere; AI nwere ike ime mperi n'ịgbakọ ma chepụta nọmba ntụnyere (benchmark) dị ka ezi ihe."
          ],
          steps: ["Dee nọmba nchịkọta gị, ọ bụghị ndị na-enye onyinye otu otu.", "Kwuo ụdị nzukọ unu bụ.", "Rịọ AI ka ọ kọwaa nọmba ndị ahụ n'okwu dị mfe.", "Jụọ ajụjụ ndị ị kwesịrị ịjụ ọzọ.", "Legharịa ịgbakọ ọ bụla anya n'onwe gị."],
          words: [["Nọmba nchịkọta (summary numbers)", "ego niile, nkezi na ọnụ ọgụgụ, ọ bụghị ozi gbasara otu mmadụ."], ["Nọmba ntụnyere (benchmark)", "nọmba a na-ahụkarị nke e ji atụnyere; AI nwere ike ịchepụta ha, ya mere lelee ebe o si."]],
          slides: [
            { title: "Kesaa nchịkọta, ọ bụghị mmadụ", bullets: ["Ego niile, nkezi, ọnụ ọgụgụ", "Ọ dịghị mgbe aha ma ọ bụ onyinye otu onye nwere aha"] },
            { title: "Ezigbo prompt", bullets: ["Ihe nzukọ gị na-eme", "Nọmba nchịkọta gị", "\"Kọwaa n'okwu dị mfe; gịnị ka m ga-ajụ ọzọ?\""] },
            { title: "Lelee AI", bullets: ["Megharịa ịgbakọ ya n'onwe gị", "Kpachara anya na nọmba ntụnyere", "Jụọ ebe nọmba si"] }
          ],
          tryIt: "Tinye naanị nọmba nchịkọta gị (ego niile, ndị na-alọghachi, onyinye nkezi, ọnụ ọgụgụ otu ọ bụla) n'ime ngwa enyemaka AI ma rịọ ya ka ọ kọwaa ha ma tụọ aro ajụjụ atọ ị ga-ajụ ọzọ.",
          youCanNow: "iji ngwa enyemaka AI kọwaa nọmba ndị na-enye onyinye n'ekesaghị ozi nzuzo onye ọ bụla na-enye onyinye.",
          quickCheck: [
            { objective: "O4", q: "Ewezuga ịkọwa nọmba, gịnị ọzọ ka AI nwere ike inyere aka na nkuzi a?", options: ["Ịchọta adreesị ụlọ ndị na-enye onyinye", "Ikpebi ego ndị na-enye onyinye ga-enye", "Ịtụ aro fọmụla ma ọ bụ ụdị eserese", "Iziga arịrịọ onyinye n'onwe ya"], answer: 2, why: "AI nwere ike ịtụ aro fọmụla ma ọ bụ ụdị eserese ma ọ bụrụ na ihe agbagwojuo gị anya." },
            { objective: "O4", q: "AI kwuru na onyinye nkezi gị bụ $95, mana spreadsheet gị kwuru $85. Gịnị ka ị ga-eme?", options: ["Jiri $95", "Jiri nkezi nke abụọ ahụ", "Rịọ AI ka o kweta gị", "Legharịa ịgbakọ ahụ anya n'onwe gị ma jiri nọmba ziri ezi"], answer: 3, why: "AI nwere ike ime mperi n'ịgbakọ, ya mere lelee ịgbakọ ya n'onwe gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime eserese dị mfe",
          minutes: 4,
          goal: "Mee otu eserese na-egosi otu ndị na-enye onyinye gị nke ọma.",
          text: [
            "Eserese na-enyere bọọdụ na ndị otu gị aka ịhụ akụkọ ahụ ngwa ngwa. Eserese ogwe (bar chart) dabara nke ọma maka otu: otu ogwe maka Ọhụrụ, Na-alọghachi, Kwụsịrị na Ukwu.",
            "Na Google Sheets ma ọ bụ Excel, tinye aha otu na otu kọlụm na ọnụ ọgụgụ ha na kọlụm na-esote ya. Họrọ kọlụm abụọ ahụ, wee jiri menu Insert tinye eserese ma họrọ eserese ogwe (bar ma ọ bụ column chart).",
            "Nye eserese ahụ aha doro anya dị ka \"Ndị na-enye anyị onyinye n'afọ a site n'otu\". Mee ya ka ọ dị mfe: otu ozi n'otu eserese."
          ],
          steps: ["Mee obere tebụl: aha otu na ọnụ ọgụgụ.", "Họrọ kọlụm abụọ ahụ.", "Tinye eserese ma họrọ bar ma ọ bụ column chart.", "Nye ya aha doro anya.", "Lelee na nọmba ndị ahụ dabara na tebụl gị."],
          words: [["Eserese ogwe (bar chart)", "eserese na-atụnyere ego ma ọ bụ ọnụ ọgụgụ site n'iji ogwe dị iche iche n'ogologo."]],
          slides: [
            { title: "Ihe mere eserese", bullets: ["Bọọdụ gị na-ahụ akụkọ ahụ ngwa ngwa", "Otu ozi n'otu eserese"] },
            { title: "Mee ya", bullets: ["Tebụl: otu na ọnụ ọgụgụ", "Họrọ kọlụm abụọ ahụ", "Insert, wee họrọ bar chart"] },
            { title: "Mechaa ya", bullets: ["Tinye aha doro anya", "Lelee na nọmba ndị ahụ dabara"] }
          ],
          tryIt: "Mee eserese ogwe nke ọnụ ọgụgụ otu anọ gị nwere aha doro anya.",
          youCanNow: "ime eserese ogwe doro anya nke otu ndị na-enye onyinye maka ndị otu gị ma ọ bụ bọọdụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị na-ahọrọ tupu i tinye eserese?", options: ["Aha otu na ọnụ ọgụgụ ha", "Ndepụta ndị na-enye onyinye niile nwere aha", "Naanị aha eserese", "Kọlụm efu"], answer: 0, why: "Họrọ kọlụm aha otu na kọlụm ọnụ ọgụgụ, wee tinye eserese." },
            { objective: "O5", q: "Eserese gị na-agbalị igosi otu, ogo onyinye na ọnwa n'otu oge. Gịnị ka ị ga-eme?", options: ["Tinyekwuo agba", "Mee ka ọ bụrụ otu ozi n'otu eserese", "Wepụ aha ya", "Jiri eserese 3D"], answer: 1, why: "Mee ya ka ọ dị mfe: otu ozi n'otu eserese." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịgbanwe ihe ị chọpụtara ka ọ bụrụ atụmatụ arịrịọ onyinye",
          minutes: 6,
          goal: "Dee atụmatụ otu peeji nwere otu omume maka otu ọ bụla nke ndị na-enye onyinye.",
          text: [
            "Nọmba dị mkpa naanị ma ọ bụrụ na ha agbanwee ihe ị na-eme. Maka otu ọ bụla, họrọ otu omume. Ndị ọhụrụ: nnabata dị ọkụ na akụkọ banyere ihe onyinye ha mere. Ndị na-alọghachi: ekele na òkù ka ha nye onyinye kwa ọnwa. Ndị kwụsịrị: obere ozi \"agụụ unu na-agụ anyị\" (we miss you) nwere akụkọ ọhụrụ. Ndị ukwu: oku ma ọ bụ nleta onye ndu n'onwe ya.",
            "AI nwere ike ide ozi ọ bụla nke mbụ. Jiri ihe nnọchi dị ka [aha onye na-enye onyinye] na [ihe mmemme rụpụtara], wee dejupụta ha n'onwe gị na sistemụ ndị na-enye onyinye gị ma ọ bụ mail merge.",
            "Dee atụmatụ otu peeji: nọmba atọ dị mkpa gị, eserese ahụ, otu omume maka otu ọ bụla, onye ga-eme ya na mgbe. Gosi onye isi gị ya tupu i ziga ihe ọ bụla. Gbasoo iwu ọ bụla nzukọ gị nwere gbasara ịkpọtụrụ ndị na-enye onyinye na ịpụ (opt-out)."
          ],
          steps: ["Dee nọmba atọ dị mkpa gị n'elu.", "Tinye eserese gị.", "Họrọ otu omume maka otu ọ bụla.", "Rịọ AI ka o dee ozi ọ bụla nke mbụ na ihe nnọchi.", "Tinye onye ga-eme gịnị na mgbe, ma nweta nkwado."],
          words: [["Arịrịọ onyinye (appeal)", "arịrịọ na-ajụ ndị na-akwado unu ka ha nye onyinye."], ["Mail merge", "ngwa na-ejupụta akwụkwọ ozi ma ọ bụ email ọ bụla na ozi otu onye site na ndepụta."]],
          slides: [
            { title: "Otu omume maka otu ọ bụla", bullets: ["Ọhụrụ: nnabata na akụkọ", "Na-alọghachi: ekele na òkù inye kwa ọnwa", "Kwụsịrị: \"agụụ unu na-agụ anyị\" na akụkọ ọhụrụ", "Ukwu: oku onye ndu n'onwe ya"] },
            { title: "Iji AI dee ihe mbụ", bullets: ["Jiri [aha onye na-enye onyinye] na [ihe mmemme rụpụtara]", "Dejupụta ezi ozi n'onwe gị"] },
            { title: "Atụmatụ otu peeji gị", bullets: ["Nọmba atọ dị mkpa na eserese", "Omume maka otu ọ bụla", "Onye ga-eme ya na mgbe", "E kwadoro ya tupu iziga"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ arịrịọ onyinye otu peeji gị nwere nọmba atọ gị, eserese, otu omume maka otu ọ bụla na ndị ga-eme ha. Rịọ AI ka o dee ozi \"agụụ unu na-agụ anyị\" na ihe nnọchi, wee dezie ya n'okwu nke gị.",
          youCanNow: "ịgbanwe nọmba ndị na-enye onyinye ka ọ bụrụ atụmatụ arịrịọ onyinye bara uru nke na-asọpụrụ nzuzo ndị na-enye onyinye.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ ezigbo omume maka ndị ọhụrụ na-enye onyinye?", options: ["Leghara ha anya ruo afọ ọzọ", "Rịọ ha ozugbo ka ha nye kwa ọnwa", "Nnabata dị ọkụ na akụkọ banyere ihe onyinye ha mere", "Ozi \"agụụ unu na-agụ anyị\""], answer: 2, why: "Ndị ọhụrụ na-enweta nnabata dị ọkụ na akụkọ banyere ihe onyinye ha mere." },
            { objective: "O6", q: "I dechaala atụmatụ arịrịọ onyinye gị. Gịnị ka ị ga-eme tupu i ziga ihe ọ bụla?", options: ["Zigara ndị niile na-enye onyinye ya otu mgbe", "Tinye ya na soshal midia", "Rịọ AI ka o kwado ya", "Gosi onye isi gị ya ma gbasoo iwu ịkpọtụrụ ndị na-enye onyinye na ịpụ (opt-out)"], answer: 3, why: "Gosi onye isi gị ma gbasoo iwu unu gbasara ịkpọtụrụ ndị na-enye onyinye na ịpụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Site na nọmba gaa n'omume",
        questions: [
          { objective: "O4", q: "Gịnị dị mma itinye n'ime ngwa enyemaka AI?", options: ["Ndepụta ndị na-enye onyinye gị zuru ezu", "Email ndị na-enye onyinye", "Adreesị ụlọ ndị na-enye onyinye", "Nọmba nchịkọta dị ka ndị na-alọghachi na ọnụ ọgụgụ otu ọ bụla"], answer: 3, why: "Nchịkọta anaghị ekpughe onye ọ bụla." },
          { objective: "O4", q: "AI kwuru na \"ọtụtụ food bank na-edebe pasentị 70 nke ndị na-enye ha onyinye\". Gịnị ka ị ga-eme?", options: ["Jụọ ebe o si ma lelee ya tupu i jiri ya", "Tinye ya n'akụkọ bọọdụ ozugbo", "Were ya na ọ bụ eziokwu", "Hichapụ nọmba nke gị"], answer: 0, why: "AI nwere ike ịchepụta nọmba ntụnyere; lelee ebe o si." },
          { objective: "O5", q: "Kedu eserese dabara nke ọma iji tụnyere ọnụ ọgụgụ otu?", options: ["Maapụ", "Foto", "Eserese ogwe (bar chart)", "Kalenda"], answer: 2, why: "Ogwe na-eme ka ọ dị mfe ịtụnyere otu ọ bụla n'ịdị ukwuu." },
          { objective: "O6", q: "Gịnị bụ ezigbo omume maka ndị kwụsịrị?", options: ["Wepụ ha ruo mgbe ebighị ebi", "Jụọ ha nọmba ụlọ akụ ha", "Ezigala ihe ọ bụla", "Ozi \"agụụ unu na-agụ anyị\" nwere akụkọ ọhụrụ"], answer: 3, why: "Akụkọ ọhụrụ dị ọkụ na-akpọ ha ka ha lọghachi." },
          { objective: "O6", q: "Mgbe AI na-ede akwụkwọ ozi ndị na-enye onyinye, olee otu aha si apụta?", options: ["Ezi aha e dere na prompt", "Ọ dịghị aha mgbe ọ bụla, ọbụlagodi n'akwụkwọ ozi ikpeazụ", "Ihe nnọchi dị ka [aha onye na-enye onyinye] a ga-ejupụta emesia", "Naanị aha nna"], answer: 2, why: "Ihe nnọchi na-eme ka aha ghara ịbanye na ngwa AI ahụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nnyocha Ndị Na-enye Onyinye site na AI",
    questions: [
      { objective: "O1", q: "Nnyocha ndị na-enye onyinye bụ:", options: ["Ire ndepụta ndị na-enye onyinye", "Ịmụ ndekọ onyinye iji mụta onye na-enye, ego ole na ugboro ole", "Iche onye nwere ike inye onyinye", "Ụdị app AI"], answer: 1, why: "Ọ na-eji ndekọ nke gị eduzi inweta onyinye." },
      { objective: "O1", q: "Gịnị ka ị ji dochie aha ndị na-enye onyinye na mbipụta ọrụ gị?", options: ["ID dị ka D001", "Aha njakịrị", "Nọmba ekwentị", "Ọ dịghị ihe"], answer: 0, why: "ID na-ekwe ka ị nyochaa n'egosighị onye bụ onye." },
      { objective: "O1", q: "Kedu kọlụm ndị mbipụta na-enweghị aha kwesịrị idebe?", options: ["Adreesị ụlọ na email", "Ekwentị na ndetu", "ID, ụbọchị onyinye, ego na mkpọsa", "Ozi ụlọ akụ"], answer: 2, why: "Ndị ahụ bụ naanị ihe ị chọrọ maka nọmba ndị ahụ." },
      { objective: "O1", q: "Ebee ka ezi ndepụta ndị na-enye onyinye kwesịrị ịnọ?", options: ["Na sistemụ ndị na-enye onyinye gị ma ọ bụ na faịlụ e chebere echebe", "Na folda ọha", "Na mkparịta ụka AI", "N'ozi otu (group text)"], answer: 0, why: "Ndekọ nzuzo na-anọ ebe e chebere ha." },
      { objective: "O2", q: "A na-achọta ego niile e nwetara site na:", options: ["=TODAY()", "=COUNT() nke ụbọchị", "Ịkọ nkọ", "=SUM() nke ego ndị ahụ"], answer: 3, why: "=SUM() na-agbakọ onyinye niile ọnụ." },
      { objective: "O2", q: "Onyinye nkezi bụ:", options: ["Onyinye kacha ukwuu", "Ego niile e nwetara kewara site n'ọnụ ọgụgụ onyinye", "Ọnụ ọgụgụ ndị na-enye onyinye", "Onyinye kacha nta mụbara site na abụọ"], answer: 1, why: "Nke ahụ bụ ihe nkezi pụtara." },
      { objective: "O2", q: "Ndị 50 nyere onyinye n'afọ gara aga; 30 n'ime ha nyekwara ọzọ. Ndị na-alọghachi bụ:", options: ["Pasentị 30", "Pasentị 50", "Pasentị 60", "Pasentị 80"], answer: 2, why: "30 / 50 = 0.6, ya bụ pasentị 60." },
      { objective: "O2", q: "Ọnụ ọgụgụ ndị na-alọghachi dị ala na-egosi na ị kwesịrị:", options: ["Ịkwụsị ịchọ onyinye", "Ịbawanye ọnụ ahịa", "Ihichapụ ndị ochie na-enye onyinye", "Ịkele ma gwa ndị na-enye onyinye akụkọ nke ọma karịa"], answer: 3, why: "Ilekọta ndị na-enye onyinye nke ọma na-eme ka ha lọghachi." },
      { objective: "O3", q: "Onyinye mbụ otu onye nyere bụ n'afọ a. Otu ya bụ:", options: ["Ọhụrụ", "Kwụsịrị", "Na-alọghachi", "Ukwu"], answer: 0, why: "Ndị ọhụrụ nyere onyinye na nke mbụ n'afọ a." },
      { objective: "O3", q: "Otu (segment) bụ:", options: ["Otu onye na-enye onyinye", "Ụdị eserese", "Ndị na-enye onyinye yitere n'ụzọ dị mkpa", "Fọm ụtụ isi"], answer: 2, why: "Otu na-ekwe ka ị ziga ozi kwesịrị ya nye otu ọ bụla." },
      { objective: "O3", q: "Iji chịkọta ndị na-enye onyinye na spreadsheet, ị nwere ike:", options: ["Ibipụta ma bee akwụkwọ ahụ", "Ịrịọ ndị na-enye onyinye ka ha kewaa onwe ha", "Ihichapụ ahịrị", "Itinye kọlụm Segment ma jiri sort ma ọ bụ filter"], answer: 3, why: "Sort na filter na-achịkọta ahịrị site n'otu." },
      { objective: "O4", q: "Kedu prompt dị mma ma baa uru?", options: ["\"Nke a bụ aha na onyinye ndị niile na-enye anyị onyinye...\"", "\"Nke a bụ ihe nbanye ụlọ akụ anyị.\"", "\"Ndị na-alọghachi pasentị 45, onyinye nkezi $85, 22 kwụsịrị. Kọwaa n'okwu dị mfe.\"", "\"Chee onye na-enye anyị onyinye.\""], answer: 2, why: "Ọ na-ekesa naanị nọmba nchịkọta ma jụọ ajụjụ doro anya." },
      { objective: "O4", q: "AI gbakọrọ ihe na nọmba gị. Ị kwesịrị:", options: ["Ịtụkwasị ya obi kpamkpam", "Ilegharị ya anya n'onwe gị", "Iziga ya bọọdụ n'eleleghị ya", "Ileghara nọmba niile anya"], answer: 1, why: "AI nwere ike ime mperi n'ịgbakọ." },
      { objective: "O4", q: "Nọmba ntụnyere AI nyere na-enweghị ebe o si kwesịrị:", options: ["Ka e lelee ya tupu i jiri ya", "Ka e tinye ya n'akụkọ grant gị", "Ka e bipụta ya na weebụsaịtị gị", "Ka e kesaa ya ndị na-enye onyinye"], answer: 0, why: "AI nwere ike ịchepụta nọmba dị ka ezi ihe." },
      { objective: "O5", q: "Iji mee eserese na Sheets ma ọ bụ Excel, ị na-ebu ụzọ:", options: ["Mechie faịlụ ahụ", "Dee okwuntughe", "Họrọ tebụl aha otu na ọnụ ọgụgụ ha", "Hichapụ data ahụ"], answer: 2, why: "A na-esi na data a họọrọ ewu eserese ahụ." },
      { objective: "O5", q: "Ezigbo aha eserese bụ:", options: ["\"Ndị na-enye anyị onyinye n'afọ a site n'otu\"", "\"Eserese 1\"", "Enweghị aha", "\"Data\""], answer: 0, why: "Aha doro anya na-agwa ndị na-agụ ya ozi ahụ." },
      { objective: "O6", q: "Ezigbo omume maka ndị na-alọghachi bụ:", options: ["Ileghara ha anya", "Ịjụ ha okwuntughe ha", "Iwepụ ha na ndepụta", "Ekele na òkù ka ha nye onyinye kwa ọnwa"], answer: 3, why: "Ndị na-enye onyinye kwesịrị ntụkwasị obi bụ ndị kacha mma maka onyinye kwa ọnwa." },
      { objective: "O6", q: "Maka ndị ukwu na-enye onyinye, ezigbo omume bụ:", options: ["Naanị akwụkwọ ozi e dere maka mmadụ niile", "Oku ma ọ bụ nleta onye ndu n'onwe ya", "Ọ dịghị ịkpọtụrụ", "Ozi ederede na-arịọ nọmba kaadị"], answer: 1, why: "Ịkpọtụrụ onwe onye na-asọpụrụ nkwa ka ukwuu." },
      { objective: "O6", q: "Atụmatụ otu peeji gị kwesịrị inwe:", options: ["Adreesị onye ọ bụla na-enye onyinye", "Nọmba dị mkpa, eserese, omume, ndị ga-eme ya na ụbọchị", "Naanị eserese ahụ", "Naanị echiche AI"], answer: 1, why: "Atụmatụ na-ekwu ihe a ga-eme, onye ga-eme ya na mgbe." },
      { objective: "O6", q: "Tupu i ziga arịrịọ onyinye ọ bụla, ị kwesịrị:", options: ["Iziga ya onye ọ bụla otu mgbe n'eleleghị ya", "Ikwe ka AI ziga ya", "Ịhapụ ịgụgharị ya", "Inweta nkwado ma gbasoo iwu ịkpọtụrụ ndị na-enye onyinye na ịpụ (opt-out)"], answer: 3, why: "Nkwado na ịsọpụrụ ịpụ (opt-out) na-echebe ntụkwasị obi ndị na-enye onyinye." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      6,
      8,
      11,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Mbipụta n'enweghị nsogbu",
        objective: "O1",
        notYet: "Aha, adreesị, ekwentị, email ma ọ bụ ndetu ka dị na mbipụta ahụ.",
        meets: "E ji ID dochie aha; naanị ID, ụbọchị, ego na mkpọsa ka e debere.",
        exceeds: "Na-edekwa ebe ezi ndepụta ahụ dị na onye nwere ike imeghe ya."
      },
      {
        name: "Nọmba dị mkpa",
        objective: "O2",
        notYet: "Ọnụ ọgụgụ ndị na-alọghachi ma ọ bụ onyinye nkezi ezighi ezi.",
        meets: "Ego niile e nwetara, onyinye nkezi na ọnụ ọgụgụ ndị na-alọghachi ziri ezi niile.",
        exceeds: "Na-egosi fọmụla ma ọ bụ otu e si gbakọọ nọmba ọ bụla."
      },
      {
        name: "Otu ndị na-enye onyinye",
        objective: "O3",
        notYet: "Otu erughị atọ, ma ọ bụ a hapụrụ ụfọdụ ndị na-enye onyinye.",
        meets: "Opekata mpe otu atọ, ID ọ bụla nọ n'otu, ya na ọnụ ọgụgụ.",
        exceeds: "Na-eji otu anọ niile, ya na ego e kwuru maka ndị Ukwu."
      },
      {
        name: "E lelere nkọwa AI",
        objective: "O4",
        notYet: "E tinyere data gbasara otu onye na-enye onyinye, ma ọ bụ e jiri ịgbakọ ma ọ bụ nọmba ntụnyere AI n'eleleghị ha.",
        meets: "Naanị nọmba nchịkọta ka e tinyere; e legharịrị ịgbakọ AI na nọmba ntụnyere ọ bụla anya.",
        exceeds: "Na-edepụta ajụjụ ndị AI tụrụ aro ka a jụọ ọzọ na azịza ha."
      },
      {
        name: "Atụmatụ arịrịọ onyinye",
        objective: "O6",
        notYet: "Ọ dịghị omume maka otu, ma ọ bụ enweghị onye ga-eme ya ma ọ bụ ụbọchị.",
        meets: "Otu peeji nwere nọmba dị mkpa, eserese, otu omume maka otu ọ bụla, onye ga-eme ya na ụbọchị.",
        exceeds: "Ozi e dere na-eji ihe nnọchi, onye isi kwadokwara atụmatụ ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Nzukọ gbakọrọ ọnụ ọgụgụ ndị na-alọghachi na-enye ha onyinye na nke mbụ (nnyocha nsochi)",
      "Mgbanwe n'ọnụ ọgụgụ ndị na-alọghachi otu afọ emesia, dị ka nzukọ kọrọ",
      "Ndị kwụsịrị nyekwara onyinye ọzọ mgbe ha nwetara ozi \"agụụ unu na-agụ anyị\""
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere Google Sheets ma ọ bụ Excel",
      "Mbipụta na-enweghị aha nke ndepụta ndị na-enye onyinye gị, ma ọ bụ ndepụta omume sitere na Nkuzi 1",
      "Ngwa enyemaka AI n'efu, nke a na-eji naanị na nọmba nchịkọta",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Jiri ndepụta omume na klaasị; ndị na-amụ ihe na-arụ ọrụ na ezi data naanị na faịlụ nke ha e chebere echebe.",
      "Mee ngụkọ ọnụ ọgụgụ ndị na-alọghachi ọnụ tupu ndị na-amụ ihe anwaa nke ha.",
      "Gosi ihe atụ ebe ịgbakọ AI ezighi ezi ka ndị na-amụ ihe hụ ihe mere ha ji elegharị ya anya.",
      "Kpọọ onye isi ma ọ bụ onye ndu inweta onyinye ka e nwee ike ịkwado atụmatụ arịrịọ onyinye ozugbo.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-volunteer-recruitment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-volunteer-recruitment-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-volunteer-recruitment",
  category: "Non Profits",
  name: "Iji AI Chọta Ndị Ọrụ Afọ Ofufo",
  skills: "Ide nkọwa ọrụ onye ọrụ afọ ofufo, Ide ozi ịkpọ ndị mmadụ, Ime fọm ndebanye aha, Ide ozi nnabata na ozi ncheta, Ime ka ndị ọrụ afọ ofufo nọgide",
  outcome: "iji ngwa enyemaka AI n'efu dee nkọwa ọrụ doro anya maka onye ọrụ afọ ofufo, ozi ịkpọ ndị mmadụ na ozi nnabata, mee fọm ndebanye aha dị mfe, ma mee atụmatụ otu ị ga-esi kelee ma debe ndị ọrụ afọ ofufo ị chọtara.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ na ndị na-ahazi ndị ọrụ afọ ofufo n'òtù na-adịghị achọ uru (nonprofit) na n'òtù okpukpe, ndị chọrọ ndị inyeaka ọzọ maka mmemme dị ka ebe nkesa nri, nkuzi ụmụaka, mmemme, ihicha obodo na ndụmọdụ.",
    "Ị ga-eji ngwa enyemaka AI (dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) dee okwu ndị ahụ, jirikwa ngwa n'efu dị ka Google Forms ma ọ bụ Microsoft Forms nakọta ndebanye aha. Gị ka bụ onye isi n'ozi ọ bụla, ị na-edebekwa ozi onwe ndị ọrụ afọ ofufo n'ebe AI na-adịghị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu ịchọ ndị ọrụ zuru ezu maka otu ezi ọrụ afọ ofufo: nkọwa ọrụ, otu ozi na soshal midia, otu email nye ndị na-akwado unu, fọm ndebanye aha nwere ajụjụ ole na ole dị mfe, ozi nnabata na ozi ncheta otu izu tupu oge, na obere atụmatụ ekele. Jiri AI dee ihe mbụ, wee dezie akụkụ ọ bụla n'olu nke gị ma lelee ụbọchị na nkọwa niile.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ na ndị na-ahazi ndị ọrụ afọ ofufo n'òtù na-adịghị achọ uru na n'òtù okpukpe, ndị chọrọ ndị inyeaka ọzọ maka mmemme dị ka ebe nkesa nri, nkuzi ụmụaka, mmemme, ihicha obodo na ndụmọdụ.",
    startingPoint: "Ha na-arịọ naanị otu mmadụ ole na ole ahụ, ọtụtụ mgbe site n'ozi izugbe dị ka \"anyị chọrọ enyemaka\". Ụfọdụ na-eji email na soshal midia; mmadụ ole na ole edeela nkọwa ọrụ, mee fọm ndebanye aha ma ọ bụ mee atụmatụ otu ha ga-esi debe ndị ọrụ afọ ofufo.",
    gap: "Arịrịọ edoghị anya na-enweta azịza ole na ole, ndị ọrụ afọ ofufo ọhụrụ na-enweghị ntụzịaka anaghị alọghachi. Ndị na-ahazi chọrọ ngwugwu doro anya ha nwere ike iji ọtụtụ ugboro iji chọta, nabata ma debe ndị ọrụ afọ ofufo, na-eji AI ede ngwa ngwa ma na-echebe ozi ndị ọrụ afọ ofufo.",
    constraints: [
      "Oge: ndị na-ahazi nwere ọtụtụ ọrụ, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Nzuzo: ọ dịghị nọmba Social Security ma ọ bụ ụbọchị ọmụmụ na fọm dị mfe; ozi ndị ọrụ afọ ofufo na-anọ na ngwa fọm, ọ bụghị n'AI",
      "Nlele ndekọ (background check) maka ọrụ gbasara ụmụaka ma ọ bụ ndị na-enweghị ike ichebe onwe ha na-agbaso usoro òtù ahụ kwadoro",
      "Akụkọ chọrọ ikike ma ọ bụ ka ọ bụrụ akụkọ e chepụtara",
      "Ngwa n'efu dị ka Google Forms ma ọ bụ Microsoft Forms"
    ],
    prerequisites: "\"Mmalite AI maka Òtù Na-adịghị Achọ Uru\", ma ọ bụ ahụmahụ ụfọdụ n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị eziokwu gbasara otu ọrụ afọ ofufo", action: "ide nkọwa ọrụ na-ekwu ihe a ga-eme, mgbe, ebe, ihe mere o ji dị mkpa, nlele ndị a chọrọ na onye a ga-akpọtụrụ", standard: "ma lelee eziokwu ọ bụla ma tinye ozi nkịtị gị" },
    { id: "O2", condition: "Mgbe ị nwere nkọwa ọrụ gị", action: "iji AI dee obere ozi soshal midia na email nye ndị na-akwado unu", standard: "nke ọ bụla nwere otu arịrịọ omume na naanị akụkọ e chepụtara ma ọ bụ nke e kwadoro" },
    { id: "O3", condition: "Maka obodo gị", action: "idepụta ebe ọhụrụ ị ga-achọta ndị ọrụ afọ ofufo na ụzọ isi mee ka ọrụ ahụ dị mfe ịbanye", standard: "ma lelee na òtù ma ọ bụ saịtị ọ bụla dị adị tupu ịkpọtụrụ ya" },
    { id: "O4", condition: "Site n'iji Google Forms ma ọ bụ Microsoft Forms", action: "ime obere fọm ndebanye aha na-ajụ naanị ihe ị chọrọ", standard: "n'ajụghị ozi nzuzo ọ bụla, gị onwe gị nwalekwara fọm ahụ" },
    { id: "O5", condition: "Maka onye ọrụ afọ ofufo ọhụrụ", action: "ide ozi nnabata na ozi ncheta nwere ihe nnọchi", standard: "nwere ụbọchị, oge, ebe, ihe a ga-ebute na onye a ga-akpọtụrụ" },
    { id: "O6", condition: "Maka ndị ọrụ afọ ofufo ị chọtara", action: "ime atụmatụ otu ị ga-esi kelee ha, gwa ha ihe ọrụ ha mepụtara ma jụọ echiche ha", standard: "ma tinye ụbọchị ndị ahụ na kalenda gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịchọta ndị ọrụ afọ ofufo kwesịrị ekwesị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide nkọwa ọrụ doro anya maka onye ọrụ afọ ofufo",
          minutes: 5,
          goal: "Dee nkọwa ọrụ na-agwa onye ọrụ afọ ofufo kpọmkwem ihe a ga-eme, mgbe, ebe na ihe mere o ji dị mkpa.",
          text: [
            "Ndị mmadụ na-ekwe mgbe ha maara kpọmkwem ihe ha na-edebanye aha maka ya. Arịrịọ edoghị anya dị ka \"Anyị chọrọ enyemaka!\" na-enweta azịza ole na ole. Ọrụ doro anya na-enweta karịa.",
            "Ezigbo nkọwa ọrụ na-aza: Gịnị ka m ga-eme? Mgbe ole, ruo ogologo oge ole? Ebee? Nka ma ọ bụ nlele ndị ole ka a chọrọ (dịka ọmụmaatụ, nlele ndekọ iji rụọ ọrụ na ụmụaka)? Gịnị mere o ji dị mkpa? Onye ka m ga-akpọtụrụ?",
            "Nye AI eziokwu ndị ahụ ma rịọ ya ka o dee ha. Dịka ọmụmaatụ: \"Dee obere nkọwa ọrụ maka onye inyeaka n'ebe nkesa nri na Satọdee, 9 am ruo ehihie ugboro abụọ n'ọnwa, ibuli ihe ruru pound 20, ahụmahụ adịghị mkpa. Ka ọ dị nwayọọ ma doo anya, na-erughị okwu 150.\""
          ],
          steps: ["Dee ọrụ ndị a ga-arụ, oge, ebe na ihe ọ bụla a chọrọ.", "Dee otu ahịrịokwu gbasara ihe mere ọrụ ahụ ji dị mkpa.", "Rịọ AI ka o mee ihe i dere ka ọ bụrụ obere nkọwa ọrụ.", "Lelee eziokwu ọ bụla ma tinye ozi nkịtị gị n'onwe gị."],
          words: [["Nkọwa ọrụ", "obere ederede gbasara ọrụ afọ ofufo: ọrụ a ga-arụ, oge, ebe, ihe a chọrọ na ebumnuche."], ["Nlele ndekọ (background check)", "nlele ndekọ mmadụ, nke a na-achọkarị iji rụọ ọrụ na ụmụaka ma ọ bụ ndị na-enweghị ike ichebe onwe ha."]],
          slides: [
            { title: "Arịrịọ doro anya na-enweta \"ee\" karịa", bullets: ["\"Anyị chọrọ enyemaka!\" edoghị anya", "Kwuo kpọmkwem ihe, mgbe na ebe"] },
            { title: "Nkọwa ọrụ na-aza", bullets: ["Gịnị ka m ga-eme? Mgbe ole, ruo ogologo oge ole?", "Ebee? Nka ma ọ bụ nlele ndị ole?", "Gịnị mere o ji dị mkpa? Onye ka m ga-akpọtụrụ?"] },
            { title: "Ka AI dee ya", bullets: ["Nye ya eziokwu gị", "Rịọ ka ọ dị nwayọọ, doo anya, dịkwa mkpụmkpụ", "Lelee nkọwa ọ bụla n'onwe gị"] }
          ],
          tryIt: "Họrọ otu ezi ọrụ afọ ofufo òtù gị chọrọ. Dee eziokwu ndị ahụ, rịọ AI maka nkọwa ọrụ na-erughị okwu 150, ma dozie ihe ọ bụla na-ezighi ezi.",
          youCanNow: "iji enyemaka AI dee nkọwa ọrụ doro anya maka onye ọrụ afọ ofufo.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere nkọwa ọrụ doro anya ji enweta azịza karịa?", options: ["Ndị mmadụ na-ekwe mgbe ha maara kpọmkwem ihe ha na-edebanye aha maka ya", "Ọ dị ogologo karịa", "Ọ na-eji akara mkpu karịa", "Ọ na-ezo oge a chọrọ"], answer: 0, why: "Arịrịọ edoghị anya na-enweta azịza ole na ole; ọrụ doro anya na-enweta karịa." },
            { objective: "O1", q: "Ọrụ nkuzi gị gbasara ụmụaka. Gịnị ka nkọwa ahụ ga-ekwurịrị?", options: ["Ọ dịghị ihe ọzọ", "Na a chọrọ nlele ndekọ", "Aha ụmụaka ahụ", "Akara ụmụaka ahụ n'ụlọ akwụkwọ"], answer: 1, why: "Nkọwa ọrụ na-ekwu nlele ndị a chọrọ, dị ka nlele ndekọ iji rụọ ọrụ na ụmụaka." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide ozi na email ịkpọ ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Mee ka otu nkọwa ọrụ ghọọ ozi soshal midia na email nye ndị na-akwado unu.",
          text: [
            "Ebe dị iche iche chọrọ ogologo dị iche iche. Ozi soshal midia dị mkpụmkpụ ma nwee obi ụtọ, nwee otu omume doro anya. Email nye ndị na-akwado unu nwere ike ịkọ obere akụkọ ma nye nkọwa karịa.",
            "Rịọ AI maka ha abụọ site n'otu nkọwa ọrụ ahụ: \"Site na nkọwa ọrụ a, dee ozi Facebook nwere okwu 50 nwere otu arịrịọ omume, na email nwere okwu 150 nye ndị na-akwado anyị nke na-amalite n'obere akụkọ gbasara otu ezinụlọ anyị na-enyere aka.\" Jiri akụkọ e chepụtara ma ọ bụ nke e kwadoro; ekesala ozi onwe ezi mmadụ n'enweghị ikike ya.",
            "Rịọ maka ụdị ole na ole ma họrọ nke kacha dị ka okwu gị. Tinye ezi njikọ (link) ndebanye aha n'onwe gị."
          ],
          steps: ["Tinye nkọwa ọrụ gị n'ime AI.", "Rịọ maka obere ozi soshal midia nwere otu arịrịọ omume.", "Rịọ maka email ka ogologo nye ndị na-akwado unu.", "Rịọ maka ụdị abụọ nke ọ bụla ma họrọ otu.", "Tinye ezi njikọ ndebanye aha gị ma lelee nkọwa ndị ahụ."],
          words: [["Arịrịọ omume (call to action)", "otu ihe ị na-arịọ onye na-agụ ka o mee, dị ka \"Debanye aha ebe a\"."], ["Ndị na-akwado unu", "ndị maralarị ma hụ òtù gị n'anya: ndị na-enye onyinye, ndị otu, ndị ọrụ afọ ofufo gara aga."]],
          slides: [
            { title: "Mee ka ozi dabara ebe ọ ga-aga", bullets: ["Ozi soshal midia: mkpụmkpụ, otu omume", "Email: obere akụkọ na nkọwa karịa"] },
            { title: "Rịọ AI maka ha abụọ", bullets: ["Tinye nkọwa ọrụ ahụ", "Rịọ maka ozi na email", "Rịọ maka ụdị abụọ nke ọ bụla"] },
            { title: "Tupu i zipu ya", bullets: ["Họrọ nke dị ka okwu gị", "Tinye ezi njikọ ndebanye aha", "Ọ dịghị akụkọ onwe n'enweghị ikike"] }
          ],
          tryIt: "Jiri nkọwa ọrụ gị site na Nkuzi 1 nweta ozi soshal midia nwere okwu 50 na email nwere okwu 150 nye ndị na-akwado unu. Họrọ ụdị kacha mma nke ọ bụla ma dezie ya.",
          youCanNow: "ide ozi na email ịkpọ ndị mmadụ maka ndị na-agụ dị iche iche site n'otu nkọwa ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke ka ogologo, nwekwa ike ịkọ obere akụkọ?", options: ["Ozi soshal midia", "Ozi ncheta n'ekwentị", "Email nye ndị na-akwado unu", "Ajụjụ fọm"], answer: 2, why: "Ozi soshal midia dị mkpụmkpụ; email nye ndị na-akwado unu nwere ike ịkọ akụkọ ma nye nkọwa karịa." },
            { objective: "O2", q: "Ozi AI dere enweghị njikọ ndebanye aha. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o si dị", "Rịọ AI ka o chepụta njikọ", "Wepụ arịrịọ omume ahụ", "Tinye ezi njikọ ndebanye aha n'onwe gị"], answer: 3, why: "Tinye ezi njikọ ndebanye aha n'onwe gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iru ụdị ndị ọrụ afọ ofufo ọhụrụ",
          minutes: 5,
          goal: "Jiri AI chepụta ebe ị ga-achọta ndị ọrụ afọ ofufo na otu esi eme ka ọrụ dị mfe ịbanye.",
          text: [
            "Ọtụtụ òtù na-arịọ otu mmadụ ole na ole ahụ ugboro ugboro. AI maara nke ọma ịchepụta ebe ọhụrụ a ga-elele: kọleji na ụlọ akwụkwọ sekọndrị dị nso nke ụmụ akwụkwọ ha chọrọ awa ọrụ obodo, ndị were mmadụ n'ọrụ nwere ụbọchị ọrụ afọ ofufo, òtù okpukpe, ebe nnọkọ ndị agadi, na saịtị ịntanetị na-edepụta ọrụ afọ ofufo.",
            "Jụọ AI: \"Depụta ebe 10 n'obodo mepere emepe nke etiti ebe a ga-achọta ndị ọrụ afọ ofufo maka ebe nkesa nri na ngwụsị izu, na otu ahịrịokwu a ga-agwa ebe ọ bụla.\" Lelee na òtù ma ọ bụ saịtị ọ bụla o kpọrọ aha dị adị tupu ịkpọtụrụ ya.",
            "Jụọkwa otu esi eme ka ọ dị mfe ikwe: oge ọrụ dị mkpụmkpụ, ọrụ ezinụlọ nwere ike ime ọnụ, ọrụ a na-arụ site n'ụlọ dị ka ịkpọ oku ma ọ bụ ide kaadị, na akwụkwọ n'asụsụ ndị obodo gị na-asụ."
          ],
          steps: ["Rịọ AI maka ndepụta ebe ị ga-achọta ndị ọrụ afọ ofufo.", "Rịọ maka otu ahịrịokwu a ga-agwa ebe ọ bụla.", "Lelee na ebe ma ọ bụ saịtị ọ bụla dị adị.", "Jụọ otu esi eme ka ọrụ ahụ dị mfe ịbanye.", "Họrọ ebe atọ kacha mma ị ga-anwale."],
          words: [["Awa ọrụ obodo (service hours)", "awa ọrụ afọ ofufo ụlọ akwụkwọ ma ọ bụ mmemme na-arịọ ụmụ akwụkwọ ka ha rụchaa."], ["Ọrụ site n'ụlọ", "ọrụ afọ ofufo a na-arụ n'ụlọ, dị ka ịkpọ oku, ide kaadị ma ọ bụ enyemaka n'ịntanetị."]],
          slides: [
            { title: "Lee karịa mmadụ ole na ole ahụ", bullets: ["Ụlọ akwụkwọ na kọleji", "Ndị were mmadụ n'ọrụ nwere ụbọchị ọrụ afọ ofufo", "Òtù okpukpe na ebe nnọkọ ndị agadi"] },
            { title: "Chepụta echiche na AI", bullets: ["Rịọ maka ebe 10 na ihe a ga-ekwu", "Lelee na ebe ọ bụla dị adị"] },
            { title: "Mee ka \"ee\" dị mfe", bullets: ["Oge ọrụ dị mkpụmkpụ", "Ọrụ ezinụlọ na ọrụ site n'ụlọ", "Asụsụ ndị obodo gị"] }
          ],
          tryIt: "Rịọ AI maka ebe 10 ị ga-achọta ndị ọrụ afọ ofufo maka ọrụ gị n'obodo gị. Lelee ha, wee họrọ atọ kacha mma ma dee onye ị ga-akpọtụrụ.",
          youCanNow: "ịchọta ebe ọhụrụ ndị ọrụ afọ ofufo si abịa ma mee ka ọrụ dị mfe ịbanye.",
          quickCheck: [
            { objective: "O3", q: "Kedu ọrụ site n'ụlọ na-eme ka ọrụ dị mfe ịbanye?", options: ["Ịkpọ oku ma ọ bụ ide kaadị", "Ibuli igbe na Satọdee", "Ịnya ụgbọ ala nkesa", "Ịhazi ogbo mmemme"], answer: 0, why: "Ọrụ site n'ụlọ dị ka ịkpọ oku ma ọ bụ ide kaadị dị mfe ikwe." },
            { objective: "O3", q: "Ọtụtụ ezinụlọ unu na-enyere aka na-asụ Spanish, ị chọrọ ka ha bụrụkwa ndị ọrụ afọ ofufo. Gịnị na-enyere aka?", options: ["Naanị zipu ozi n'asụsụ Bekee", "Nye akwụkwọ n'asụsụ ndị obodo gị na-asụ", "Rịọ AI ka ọ họrọ ndị ọrụ afọ ofufo", "Chọọ oge ọrụ dị ogologo"], answer: 1, why: "Akwụkwọ n'asụsụ ndị obodo gị na-eme ka ọrụ dị mfe ịbanye." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịchọta ndị ọrụ afọ ofufo kwesịrị ekwesị",
        questions: [
          { objective: "O1", q: "Kedu arịrịọ ga-enweta azịza kacha ọtụtụ?", options: ["\"Anyị chọrọ enyemaka!\"", "\"Anyị chọrọ ndị ọrụ afọ ofufo, nkọwa ga-abịa emesịa.\"", "\"Onye inyeaka n'ebe nkesa nri, Satọdee 9 ruo ehihie, ugboro abụọ n'ọnwa, ahụmahụ adịghị mkpa.\"", "\"Onye ọ bụla?\""], answer: 2, why: "Ọrụ doro anya na-ekwu ihe, mgbe na ebe." },
          { objective: "O2", q: "Gịnị bụ arịrịọ omume (call to action)?", options: ["Otu ihe ị na-arịọ onye na-agụ ka o mee", "Oku ekwentị nye onye ọrụ afọ ofufo", "Ụdị AI", "Nzukọ ndị isi"], answer: 0, why: "Ọ na-agwa onye na-agụ nzọụkwụ na-esote, dị ka \"Debanye aha ebe a\"." },
          { objective: "O3", q: "AI kpọrọ aha otu òtù ọrụ afọ ofufo dị nso ị nụtụbeghị. Gịnị ka ị ga-eme?", options: ["Kpọtụrụ ha ozugbo ma zitere ha ndepụta ndị ọrụ afọ ofufo gị", "Tinye ya na weebụsaịtị gị", "Kwere na ọ dị adị", "Lelee na ọ dị adị tupu ịkpọtụrụ ha"], answer: 3, why: "AI nwere ike ichepụta aha; buru ụzọ lelee." },
          { objective: "O3", q: "Kedu ụzọ isi mee ka ọrụ dị mfe ịbanye?", options: ["Naanị oge ọrụ dị ogologo", "Nye oge ọrụ dị mkpụmkpụ na ọrụ site n'ụlọ", "Chọọ ahụmahụ afọ iri", "Nabata naanị ndị na-arụlarị ọrụ afọ ofufo"], answer: 1, why: "Ọrụ na-agbanwe agbanwe na-enye ọtụtụ mmadụ ohere ikwe." },
          { objective: "O2", q: "Ị chọrọ akụkọ n'email gị nye ndị na-akwado unu. Kedu nke enweghị nsogbu?", options: ["Aha na ọnọdụ ezi onye unu na-enyere aka n'enweghị ikike", "Akụkọ e chepụtara ma ọ bụ nke e kwadoro", "Adreesị ụlọ onye ọrụ afọ ofufo", "Ego onye na-enye onyinye nyere"], answer: 1, why: "Ekesala ozi onwe ezi mmadụ mgbe ọ bụla n'enweghị ikike." }
        ]
      }
    },
    {
      name: "Isi 2: Ndebanye aha, nnabata na idebe ndị ọrụ afọ ofufo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime fọm ndebanye aha dị mfe",
          minutes: 5,
          goal: "Mee obere fọm ndebanye aha n'ịntanetị ma jụọ naanị ihe ị chọrọ.",
          text: [
            "Ngwa fọm n'efu dị ka Google Forms ma ọ bụ Microsoft Forms na-eme ka ndị mmadụ debanye aha site na njikọ. Azịza na-aga na spredshiit (spreadsheet) gị na-achịkwa.",
            "Jụọ naanị ihe ị chọrọ: aha, email ma ọ bụ ekwentị, oge ọrụ ha nwere ike ịrụ, na ihe ọ bụla ị ga-amarịrị (dị ka asụsụ ha na-asụ). Ajụla nọmba Social Security, ụbọchị ọmụmụ ma ọ bụ ozi nzuzo ndị ọzọ na fọm dị mfe. Ọ bụrụ na a chọrọ nlele ndekọ, jiri usoro òtù gị kwadoro.",
            "AI nwere ike ịtụ aro ajụjụ na okwu: \"Tụọ aro ajụjụ 6 dị mkpụmkpụ maka fọm ndebanye aha onye ọrụ afọ ofufo n'ebe nkesa nri.\" Gị onwe gị na-eme fọm ahụ, azịza ndị ahụ na-anọkwa na ngwa fọm gị, ọ bụghị n'AI."
          ],
          steps: ["Mepee Google Forms ma ọ bụ Microsoft Forms ma malite fọm efu.", "Rịọ AI ka ọ tụọ aro ajụjụ dị mkpụmkpụ.", "Debe naanị ihe ị chọrọ n'ezie.", "Tinye nhọrọ oge ọrụ dị ka igbe akara (checkbox).", "Nwalee fọm ahụ n'onwe gị, wee detuo njikọ ekesa ya."],
          words: [["Fọm", "ajụjụ n'ịntanetị ndị mmadụ na-aza; a na-echekwara gị azịza ha."], ["Ozi nzuzo", "ozi nwere ike imerụ mmadụ ma ọ bụrụ na e kesara ya, dị ka nọmba ID ma ọ bụ ozi ahụike."]],
          slides: [
            { title: "Ngwa fọm n'efu", bullets: ["Google Forms ma ọ bụ Microsoft Forms", "Ndị mmadụ na-edebanye aha site na njikọ", "Azịza na-aga na spredshiit gị na-achịkwa"] },
            { title: "Jụọ naanị ihe ị chọrọ", bullets: ["Aha na otu a ga-esi kpọtụrụ ha", "Oge ọrụ ha nwere ike ịrụ", "Ọ dịghị nọmba ID ma ọ bụ ụbọchị ọmụmụ"] },
            { title: "Akụkụ AI", bullets: ["Ịtụ aro ajụjụ na okwu", "Gị na-eme fọm ahụ", "Azịza anaghị abanye n'AI mgbe ọ bụla"] }
          ],
          tryIt: "Mee fọm ndebanye aha maka ọrụ gị nwere ajụjụ na-erughị isii. Dejupụta ya n'onwe gị iji nwalee ya, ma detuo njikọ ya tinye n'ozi ịkpọ ndị mmadụ gị.",
          youCanNow: "ime obere fọm ndebanye aha ndị ọrụ afọ ofufo nke enweghị nsogbu.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka azịza ndebanye aha na-aga na ngwa fọm n'efu?", options: ["N'ime ngwa enyemaka AI", "Na peeji soshal midia gị", "Na spredshiit gị na-achịkwa", "Nye onye ọrụ afọ ofufo ọ bụla"], answer: 2, why: "Azịza na-aga na spredshiit gị na-achịkwa." },
            { objective: "O4", q: "Ọrụ ahụ chọrọ nlele ndekọ. Kedu otu ị ga-esi mee ya?", options: ["Tinye nọmba Social Security na fọm dị mfe ahụ", "Jụọ ụbọchị ọmụmụ na fọm ahụ", "Hapụ ya", "Jiri usoro nlele ndekọ òtù gị kwadoro"], answer: 3, why: "Anakọtala ozi nzuzo na fọm dị mfe; jiri usoro e kwadoro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ozi nnabata na ozi ncheta",
          minutes: 4,
          goal: "Dee ozi nnabata na ozi ncheta na-eme ka ndị ọrụ afọ ofufo ọhụrụ nwee njikere.",
          text: [
            "Ụbọchị ole na ole mbụ na-ekpebi ma onye ọrụ afọ ofufo ọhụrụ ga-alọghachi. Nnabata ngwa ngwa na-eme ka ndị mmadụ mara na a chọrọ ha, ma nwee njikere.",
            "Ezigbo ozi nnabata na-ekele, na-ekwenye ụbọchị, oge na ebe, na-ekwu ihe a ga-eyi ma ọ bụ ebute, na-akpọ aha onye a ga-akpọtụrụ, ma na-akọwa otu oge ọrụ mbụ ga-adị. Ozi ncheta ụbọchị ole na ole tupu oge na-ekwughachi isi ihe ndị ahụ.",
            "Rịọ AI maka ha abụọ, jiri ihe nnọchi: \"Dee email nnabata nwere obi ọma maka onye ọrụ afọ ofufo ọhụrụ n'ebe nkesa nri. Jiri [name], [shift date], [contact person]. Na-erughị okwu 120.\" Wee dejupụta nkọwa ndị ahụ na ngwa email gị ma ọ bụ mail merge, ọ bụghị n'AI."
          ],
          steps: ["Depụta ihe onye ọrụ afọ ofufo ọhụrụ kwesịrị ịma.", "Rịọ AI maka ozi nnabata nwere ihe nnọchi.", "Rịọ AI maka obere ozi ncheta maka ụbọchị ole na ole tupu oge.", "Dejupụta nkọwa ndị ahụ na ngwa email gị.", "Lelee ụbọchị na oge ọ bụla."],
          words: [["Nkwadebe onye ọhụrụ (onboarding)", "inyere onye ọrụ afọ ofufo ọhụrụ aka ịdị njikere: nnabata, ọzụzụ na oge ọrụ mbụ."], ["Ihe nnọchi (placeholder)", "ihe nnọchi anya dị ka [name] ị ga-eji ezi nkọwa dochie emesịa."]],
          slides: [
            { title: "Ụbọchị mbụ dị mkpa", bullets: ["Nnabata nwere obi ọma na-eme ka ndị mmadụ lọghachi"] },
            { title: "Ezigbo ozi nnabata na-ekwu", bullets: ["Daalụ", "Ụbọchị, oge na ebe", "Ihe a ga-eyi ma ọ bụ ebute", "Onye a ga-akpọtụrụ"] },
            { title: "Dee ya na ihe nnọchi", bullets: ["[name], [shift date], [contact person]", "Dejupụta nkọwa na ngwa email gị", "Zipu ozi ncheta ụbọchị ole na ole tupu oge"] }
          ],
          tryIt: "Rịọ AI maka email nnabata na ozi ncheta n'ekwentị nwere ihe nnọchi maka ọrụ gị. Dezie ha abụọ ka ha dị ka okwu òtù gị.",
          youCanNow: "ide ozi nnabata na ozi ncheta na-enyere ndị ọrụ afọ ofufo ọhụrụ aka ịbịa na njikere.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-ekpebi ma onye ọrụ afọ ofufo ọhụrụ ga-alọghachi?", options: ["Ụbọchị ole na ole mbụ", "Ogologo fọm ahụ", "Agba akwụkwọ mgbasa ozi ahụ", "Ọnụ ọgụgụ hashtag i jiri"], answer: 0, why: "Ụbọchị ole na ole mbụ na-ekpebi ma onye ọrụ afọ ofufo ọhụrụ ga-alọghachi." },
            { objective: "O5", q: "Onye ọrụ afọ ofufo ọhụrụ na-amalite na Satọdee, ọ nụbeghị ihe site n'aka gị. Gịnị ka ị ga-ebu ụzọ zipu?", options: ["Ọ dịghị ihe ruo Satọdee", "Nnabata nwere obi ọma nwere ụbọchị, oge, ebe, ihe a ga-ebute na onye a ga-akpọtụrụ", "Arịrịọ onyinye", "Akwụkwọ iwu dị ogologo"], answer: 1, why: "Ezigbo ozi nnabata na-ekwenye nkọwa ma kpọọ aha onye a ga-akpọtụrụ ka ha nwee njikere." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ikele na idebe ndị ọrụ afọ ofufo",
          minutes: 5,
          goal: "Mee atụmatụ dị mfe iji kelee ndị ọrụ afọ ofufo ma mụta ihe mere ha ji anọgide ma ọ bụ apụ.",
          text: [
            "Idebe onye ọrụ afọ ofufo dị mfe karịa ịchọta onye ọhụrụ. Ndị mmadụ na-anọgide mgbe ha chere na e kelere ha, na ha bara uru, na ha so n'otu ndị otu.",
            "Ụzọ dị mfe isi kelee: obere akwụkwọ ozi onwe mgbe oge ọrụ mbụ gwụchara, ịgwa ha ihe ọrụ ha mere ka o kwe omume (\"Otu ndị ọrụ Satọdee kwakọrọ igbe 300\"), ịkpọ aha ha n'ihu ọha na nnọkọ, na ịjụ echiche ha. AI nwere ike inye aka ide akwụkwọ ekele na obere nnyocha (survey), dị ka ajụjụ atọ gbasara ihe gara nke ọma na ihe a ga-agbanwe.",
            "Dee obere atụmatụ: mgbe ị ga-ekele ndị mmadụ, otu ị ga-esi gwa ha ihe ọrụ ha mepụtara, na mgbe ị ga-ajụ echiche ha. Wee tinye ya na kalenda gị."
          ],
          steps: ["Mee atụmatụ ekele mgbe oge ọrụ mbụ gwụchara.", "Mee atụmatụ otu ị ga-esi gwa ndị ọrụ afọ ofufo ihe ọrụ ha mepụtara.", "Rịọ AI ka o dee nnyocha echiche nwere ajụjụ atọ.", "Tinye ụbọchị ekele na nnyocha ahụ na kalenda gị."],
          words: [["Idebe ndị ọrụ afọ ofufo (retention)", "ime ka ndị ọrụ afọ ofufo na-alọghachi ruo ogologo oge."], ["Nnyocha echiche (feedback survey)", "ajụjụ ole na ole na-ajụ ndị mmadụ ihe gara nke ọma na ihe a ga-agbanwe."]],
          slides: [
            { title: "Ihe mere ndị mmadụ ji anọgide", bullets: ["Ha chere na e kelere ha", "Ha chere na ha bara uru", "Ha chere na ha so n'otu ndị otu"] },
            { title: "Ụzọ isi kelee", bullets: ["Akwụkwọ ozi mgbe oge ọrụ mbụ gwụchara", "Gwa ha ihe ha mepụtara: \"anyị kwakọrọ igbe 300\"", "Ịkpọ aha ha n'ihu ọha na ịjụ echiche ha"] },
            { title: "Atụmatụ idebe gị", bullets: ["Mgbe ị ga-ekele", "Otu ị ga-esi gwa ha ihe ọrụ ha mepụtara", "Mgbe ị ga-ajụ echiche ha"] }
          ],
          tryIt: "Ọrụ ikpeazụ: chịkọta ngwugwu ịchọ ndị ọrụ gị niile: nkọwa ọrụ, ozi soshal midia, email, fọm ndebanye aha, ozi nnabata, ozi ncheta na atụmatụ ekele. Dezie akụkụ ọ bụla ma lelee nkọwa niile.",
          youCanNow: "ịchọta, nabata ma debe ndị ọrụ afọ ofufo site n'ozi AI dere nke ị lelere ma mee ka ọ bụrụ nke gị.",
          quickCheck: [
            { objective: "O6", q: "Kedu ụzọ dị mfe isi kelee ndị ọrụ afọ ofufo?", options: ["Ịrịọ ha ka ha kpọta ndị enyi ise", "Iziga ha ụgwọ ngwa ọrụ", "Ịgwa ha ihe ọrụ ha mere ka o kwe omume", "Inye ha oge ọrụ ọzọ n'ajụghị ha"], answer: 2, why: "Ịgwa ha ihe e mepụtara, dị ka igbe e kwakọrọ, na-egosi ndị ọrụ afọ ofufo na ọrụ ha dị mkpa." },
            { objective: "O6", q: "I dere atụmatụ ekele mana ị na-echefu ya. Gịnị ka ị ga-eme?", options: ["Hapụ atụmatụ ahụ", "Rịọ AI ka o cheta ya", "Kelee ndị mmadụ naanị otu ugboro n'afọ", "Tinye nzọụkwụ ọ bụla na kalenda gị na ụbọchị ya"], answer: 3, why: "Dee atụmatụ ahụ ma tinye ya na kalenda gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndebanye aha, nnabata na idebe ndị ọrụ afọ ofufo",
        questions: [
          { objective: "O4", q: "Kedu ajụjụ na-ekwesịghị ịdị na fọm ndebanye aha dị mfe?", options: ["Oge ọrụ ole ka ị nwere ike ịrụ?", "Email ma ọ bụ ekwentị gị", "Asụsụ ị na-asụ", "Nọmba Social Security gị"], answer: 3, why: "Nọmba ID nzuzo ekwesịghị ịdị na fọm dị mfe." },
          { objective: "O4", q: "Ebee ka azịza fọm ndị ọrụ afọ ofufo kwesịrị ịnọ?", options: ["Na ngwa fọm na spredshiit gị", "Tinye n'ime mkparịta ụka AI", "Ebipụta n'ịntanetị", "N'ozi otu ìgwè n'ekwentị"], answer: 0, why: "Ozi onwe na-anọ na ngwa ị na-achịkwa, ọ bụghị n'AI." },
          { objective: "O5", q: "Ezigbo ozi nnabata nwere:", options: ["Naanị akara òtù (logo)", "Arịrịọ ego", "Ụbọchị, oge, ebe na onye a ga-akpọtụrụ", "Naanị \"Daalụ\""], answer: 2, why: "Nkọwa doro anya na-enyere ndị ọrụ afọ ofufo ọhụrụ aka ịbịa na njikere." },
          { objective: "O5", q: "Mgbe ole ka ị kwesịrị iziga ozi ncheta?", options: ["Otu ọnwa mgbe oge ọrụ gachara", "Mgbe ọ bụla", "Naanị ma ọ bụrụ na ha atụfuo ya", "Ụbọchị ole na ole tupu oge ọrụ"], answer: 3, why: "Ozi ncheta obere oge tupu ya na-enyere ndị mmadụ aka icheta." },
          { objective: "O6", q: "Kedu nke na-enyere aka ime ka ndị ọrụ afọ ofufo na-alọghachi?", options: ["Ịghara ịkpọtụrụ ha mgbe ọ bụla", "Oge ọrụ dị ogologo na-enweghị ezumike", "Ịgwa ha ihe ọrụ ha mere ka o kwe omume", "Ileghara echiche ha anya"], answer: 2, why: "Ndị mmadụ na-anọgide mgbe ha hụrụ uru ọrụ ha ma chee na e kelere ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji AI Chọta Ndị Ọrụ Afọ Ofufo",
    questions: [
      { objective: "O1", q: "Nkọwa ọrụ doro anya na-aza:", options: ["Naanị aha òtù ahụ", "Ihe, mgbe, ebe, ihe mere o ji dị mkpa na onye a ga-akpọtụrụ", "Ụgwọ ọnwa onye isi", "Ọ dịghị ihe kpọmkwem"], answer: 1, why: "Nkọwa doro anya na-enyere ndị mmadụ aka ikwe." },
      { objective: "O1", q: "Mgbe ole ka a na-achọkarị nlele ndekọ?", options: ["Maka ọrụ gbasara ụmụaka ma ọ bụ ndị na-enweghị ike ichebe onwe ha", "Maka email ọ bụla", "Ọ dịghị mgbe", "Naanị maka ndị na-enye onyinye"], answer: 0, why: "Òtù na-achọkarị nlele maka ọrụ gbasara ụmụaka ma ọ bụ ndị na-enweghị ike ichebe onwe ha." },
      { objective: "O1", q: "Gịnị ka ị na-enye AI iji dee nkọwa ọrụ?", options: ["Nọmba ekwentị ndị ọrụ afọ ofufo", "Okwuntughe gị", "Eziokwu gbasara ọrụ ahụ", "Ọ dịghị ihe"], answer: 2, why: "AI na-ede eziokwu ị nyere ya." },
      { objective: "O1", q: "Mgbe AI dechara nkọwa ọrụ, ị ga-:", options: ["Lelee eziokwu ọ bụla ma tinye ozi nkịtị gị", "Zipu ya n'agụghị ya", "Tinye adreesị onye ọrụ afọ ofufo", "Hichapụ ya"], answer: 0, why: "Gị bụ onye ga-aza maka izi ezi ya." },
      { objective: "O2", q: "Ozi soshal midia ịkpọ ndị mmadụ kwesịrị ịbụ:", options: ["Peeji iri n'ogologo", "Nke jupụtara n'akụkọ onwe", "Nke na-enweghị njikọ", "Mkpụmkpụ, nwee otu omume doro anya"], answer: 3, why: "Ozi dị mkpụmkpụ nwere otu omume na-arụ ọrụ kacha mma." },
      { objective: "O2", q: "Email nye ndị na-akwado unu nwere ike:", options: ["Igosi ego ndị na-enye onyinye nyere", "Ịkọ obere akụkọ ma nye nkọwa karịa", "Idepụta aha ndị unu na-enyere aka", "Ịhapụ njikọ ndebanye aha"], answer: 1, why: "Email na-enye ohere karịa maka akụkọ na nkọwa." },
      { objective: "O2", q: "Gịnị mere i ji arịọ AI maka ụdị abụọ?", options: ["Iji data okpukpu abụọ", "Ịhọrọ nke kacha dị ka okwu gị", "AI chọrọ ya", "Imegharị ndị na-agụ anya"], answer: 1, why: "Ịtụnyere ụdị dị iche iche na-enyere gị aka ịhọrọ olu gị." },
      { objective: "O3", q: "Kedu ezigbo ebe ọhụrụ ị ga-achọta ndị ọrụ afọ ofufo?", options: ["Naanị otu mmadụ ise ahụ", "Ndepụta ekwentị onwe onye ị na-amaghị", "Ndepụta email spam", "Ụlọ akwụkwọ sekọndrị dị nso nke chọrọ awa ọrụ obodo"], answer: 3, why: "Ụmụ akwụkwọ na-achọkarị awa ọrụ obodo." },
      { objective: "O3", q: "AI kpọrọ aha weebụsaịtị ọrụ afọ ofufo ị na-amaghị. Ị kwesịrị:", options: ["Buru ụzọ lelee na ọ dị adị", "Zitere ya ndepụta ndị ọrụ afọ ofufo gị", "Kwụọ ya ụgwọ ozugbo", "Tụkwasị ya obi"], answer: 0, why: "AI nwere ike ichepụta aha na saịtị." },
      { objective: "O3", q: "Kedu nke na-eme ka ọrụ dị mfe ịbanye?", options: ["Oge ọrụ awa 12", "Iwu ahụmahụ siri ike", "Ọrụ site n'ụlọ dị ka ide kaadị", "Akwụkwọ n'asụsụ Bekee naanị n'obodo ebe ndị mmadụ na-asụ Spanish"], answer: 2, why: "Ọrụ site n'ụlọ na ọrụ na-agbanwe agbanwe dabara ọtụtụ mmadụ." },
      { objective: "O4", q: "Kedu ngwa n'efu nwere ike ime fọm ndebanye aha?", options: ["Kalkuleta", "Ngwa foto", "Ngwa egwu", "Google Forms ma ọ bụ Microsoft Forms"], answer: 3, why: "Ha abụọ na-eme fọm n'ịntanetị na-echekwa azịza." },
      { objective: "O4", q: "Na fọm ndebanye aha dị mfe, jụọ:", options: ["Nkọwa ọ bụla ị nwere ike iche", "Nkọwa ụlọ akụ", "Naanị ihe ị chọrọ n'ezie", "Ụbọchị ọmụmụ na nọmba ID"], answer: 2, why: "Data dị ole na ole pụtara ihe egwu dị ntakịrị na ndebanye aha ngwa ngwa." },
      { objective: "O4", q: "Akụkụ AI n'ime fọm bụ:", options: ["Ichekwa azịza ndị ọrụ afọ ofufo", "Ịtụ aro ajụjụ na okwu", "Ime nlele ndekọ", "Ịnabata ndị ọrụ afọ ofufo"], answer: 1, why: "Gị na-eme fọm ahụ; azịza na-anọ na ngwa gị." },
      { objective: "O4", q: "Tupu i kesaa njikọ fọm gị, ị kwesịrị:", options: ["Dejupụta ya n'onwe gị iji nwalee ya", "Hichapụ ọkara ajụjụ n'enweghị usoro", "Zoo njikọ ahụ", "Rịọ AI ka o dejupụta ya"], answer: 0, why: "Nnwale na-achọpụta mperi tupu ndị ọrụ afọ ofufo ahụ ha." },
      { objective: "O5", q: "Nkwadebe onye ọhụrụ (onboarding) pụtara:", options: ["Iwepụ ndị ọrụ afọ ofufo", "Ịzụta ụgbọ mmiri", "Inyere onye ọrụ afọ ofufo ọhụrụ aka ịdị njikere", "Ide arịrịọ grant"], answer: 2, why: "Nkwadebe onye ọhụrụ gụnyere nnabata, ọzụzụ na oge ọrụ mbụ." },
      { objective: "O5", q: "Kedu otu aha onye ọrụ afọ ofufo kwesịrị isi pụta na prompt AI maka email nnabata?", options: ["Dị ka [name], a ga-ejupụta emesịa", "Aha zuru ezu na adreesị", "Aha na nọmba ekwentị", "Aha na ụbọchị ọmụmụ"], answer: 0, why: "Ihe nnọchi na-edebe ozi onwe n'ebe AI na-adịghị." },
      { objective: "O5", q: "Ebee ka ị na-ejupụta ezi nkọwa maka email nnabata?", options: ["Na mkparịta ụka AI", "N'ozi ọha", "Na ihuenyo a na-ekerịta n'ọba akwụkwọ", "Na ngwa email gị ma ọ bụ mail merge"], answer: 3, why: "Ezi nkọwa na-anọ na ngwa ị na-achịkwa." },
      { objective: "O6", q: "Gịnị mere ndị ọrụ afọ ofufo ji anọgide?", options: ["A naghị akpọtụrụ ha mgbe ọ bụla", "Ha chere na e kelere ha, na ha bara uru, na ha so n'otu ndị otu", "Ha enweghị nhọrọ", "Oge ọrụ na-aka ogologo"], answer: 1, why: "Ekele na ebumnuche na-eme ka ndị mmadụ na-alọghachi." },
      { objective: "O6", q: "Obere nnyocha echiche kwesịrị ịjụ:", options: ["Akaụntụ ụlọ akụ ha", "Ihe gara nke ọma na ihe a ga-agbanwe", "Akụkọ ahụike ha", "Okwuntughe ha"], answer: 1, why: "Echiche ha na-enyere gị aka ime ka ahụmahụ ahụ ka mma." },
      { objective: "O6", q: "Atụmatụ ekele gị kwesịrị:", options: ["Ịnọ naanị n'isi gị", "Ime ya otu ugboro n'afọ ise ọ bụla", "Ịhapụrụ AI ka o zipu ya", "Ịnọ na kalenda gị na ụbọchị ya"], answer: 3, why: "Ịhazi ya na kalenda na-eme ka o mee n'ezie." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 7, 11, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nkọwa ọrụ", objective: "O1", notYet: "O nweghị ihe, mgbe, ebe, ihe mere o ji dị mkpa ma ọ bụ onye a ga-akpọtụrụ.", meets: "Ọ na-aza ihe, mgbe, ebe, ihe mere o ji dị mkpa, nlele ọ bụla a chọrọ na onye a ga-akpọtụrụ.", exceeds: "Ọ dị mkpụmkpụ, nwee obi ọma, onye maara ọrụ ahụ lelekwara ya." },
      { name: "Ozi na email", objective: "O2", notYet: "O nweghị arịrịọ omume doro anya, ma ọ bụ e jiri akụkọ ezi mmadụ n'enweghị ikike.", meets: "Obere ozi na email nye ndị na-akwado unu, nke ọ bụla nwere otu omume na ezi njikọ ndebanye aha.", exceeds: "Onye na-amụ ihe nwalere ụdị dị iche iche ma họrọ nke kacha dị ka okwu òtù ahụ." },
      { name: "Fọm ndebanye aha", objective: "O4", notYet: "Ọ na-ajụ ozi nzuzo ma ọ bụ a nwaleghị ya.", meets: "Ajụjụ ole na ole dị mfe na-ajụ naanị ihe a chọrọ, onye na-amụ ihe nwalere ya.", exceeds: "Ọ na-ajụ asụsụ ma ọ bụ nhọrọ oge ọrụ na-enyere aka ikenye ndị ọrụ afọ ofufo ọrụ dabara ha." },
      { name: "Nnabata na ncheta", objective: "O5", notYet: "O nweghị ụbọchị, oge, ebe ma ọ bụ onye a ga-akpọtụrụ.", meets: "Ozi nnabata na ozi ncheta otu izu tupu oge, nwere isi nkọwa niile, na-eji ihe nnọchi.", exceeds: "Ọ na-akọwa otu oge ọrụ mbụ ga-adị na ihe a ga-eyi ma ọ bụ ebute." },
      { name: "Atụmatụ ekele", objective: "O6", notYet: "Ọ dịghị atụmatụ, ma ọ bụ ọ dịghị ụbọchị.", meets: "Ọ na-ekwu mgbe a ga-ekele ndị mmadụ, otu a ga-esi gwa ha ihe e mepụtara na mgbe a ga-ajụ echiche ha, na ụbọchị ya.", exceeds: "O nwere obere nnyocha echiche gbasara ihe gara nke ọma na ihe a ga-agbanwe." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndebanye aha ndị ọrụ afọ ofufo ọhụrụ maka ọrụ ahụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị ọrụ afọ ofufo ọhụrụ lọghachiri maka oge ọrụ nke abụọ",
      "Òtù ruru ìgwè ndị ọrụ afọ ofufo ọhụrụ, dị ka ụmụ akwụkwọ ma ọ bụ ndị were mmadụ n'ọrụ"
    ]
  },
  // ---- ADDIE: Mmejuputa ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu na Google Forms ma ọ bụ Microsoft Forms",
      "Eziokwu gbasara otu ezi ọrụ afọ ofufo",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Mee ka onye ọ bụla na-amụ ihe bute otu ezi ọrụ ha chọrọ mmadụ maka ya.",
      "Mee ka ndị na-amụ ihe dejupụta fọm ndebanye aha ibe ha iji nwalee ha.",
      "Chetara ndị na-amụ ihe ka ha ghara ịnakọta nọmba Social Security ma ọ bụ ụbọchị ọmụmụ na fọm dị mfe.",
      "Chetara ndị na-amụ ihe ka ha lelee na òtù ma ọ bụ weebụsaịtị ọ bụla AI tụrụ aro dị adị tupu ịkpọtụrụ ya.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

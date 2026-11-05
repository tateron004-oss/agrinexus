"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-employment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-employment-ig",
  lang: "ig",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "AI maka Ịchọ Ọrụ na Njikere Ọrụ",
  skills: "Ịchọta enyemaka ọrụ n'efu, Ịkpọ aha nka gị, Iji AI dee résumé otu peeji, Ime ka résumé dabara mgbasa ozi ọrụ, Ịmụ ịza ajụjụ ọnụ ọrụ, Ịhụ aghụghọ ọrụ",
  outcome: "iji ngwa enyemaka AI n'efu dee résumé otu peeji dabara n'ezi mgbasa ozi ọrụ, ịmụ ịza ajụjụ ọnụ ọrụ a na-ajụkarị, na ịhụ ihe ịrịba ama nke aghụghọ ọrụ.",
  about: [
    "Ịchọ ọrụ siri ike, karịsịa ma ọ bụrụ na e nwere oge ị rụghị ọrụ, ma ọ bụ na ọ bụ ọrụ a na-akwụ ego aka ka ị rụkarịrị, ma ọ bụ na ị nọ na-elekọta ezinụlọ gị. I nwere nka karịa ka i chere, ngwa n'efu nwekwara ike inyere gị aka igosi ha.",
    "Ị ga-achọta enyemaka ọrụ n'efu dị nso gị, gbanwee ahụmịhe gị (nke a kwụrụ ụgwọ na nke a kwụghị) ka ọ bụrụ ndepụta nka, jiri AI dee résumé otu peeji, mee ka ọ dabara n'ezi mgbasa ozi ọrụ, mụọ maka ajụjụ ọnụ, ma mụta ịhụ aghụghọ ọrụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Chọta ezi mgbasa ozi ọrụ ị nwere ike ịrịọ. Jiri ngwa enyemaka AI dee résumé otu peeji dabara na mgbasa ozi ahụ, n'enweghị nọmba nzuzo ọ bụla n'ime ya. Wee ka AI jụọ gị ajụjụ ọnụ atọ a na-ajụkarị, zaa nke ọ bụla n'olu dị elu, ma rịọ maka otu ndụmọdụ iji mee ka azịza ọ bụla ka mma.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-achọ ọrụ n'obodo ndị na-enweghị enyemaka zuru ezu, gụnyere ndị nwere oge ha na-arụghị ọrụ, ndị rụkarịrị ọrụ a na-akwụ ego aka, ndị na-elekọta ezinụlọ na-alọghachi n'ọrụ, ndị ntorobịa, na ndị bekee abụghị asụsụ mbụ ha.",
    startingPoint: "Ha nwere ezi ahụmịhe n'ọrụ na ndụ mana ha nwere ike ọ gaghị ahụ ya dị ka nka ọrụ. Ha nwere ike iji ekwentị, ma eleghị anya ntakịrị kọmputa. Ọ bụ mmadụ ole na ole nwere résumé ọhụrụ ma ọ bụ mụọla ajụjụ ọnụ, ndị aghụghọ ọrụ elegharawokwa ụfọdụ anya.",
    gap: "Ndị were mmadụ n'ọrụ na-atụ anya résumé dabara n'ọrụ ahụ na ajụjụ ọnụ e ji obi ike za, ndị aghụghọ ọrụ na-achụkwa ndị chọrọ ọrụ. Ndị na-amụ ihe kwesịrị igosi ezi nka ha, jiri ngwa n'efu na enyemaka ọrụ n'efu, ma chebe onwe ha mgbe ha na-achọ ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe enyemaka ọrụ",
      "Ego: naanị ngwa n'efu na enyemaka ọrụ n'efu",
      "Nzuzo: enweghị nọmba Social Security, ụbọchị ọmụmụ ma ọ bụ nọmba ID zuru ezu n'ime AI ma ọ bụ na résumé",
      "Eziokwu: nka ọ bụla dị na résumé ga-abụ eziokwu, nweekwa ezi ọmụmaatụ"
    ],
    prerequisites: "Ọ dịghị. Ndị na-ejibeghị ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji CareerOneStop ma ọ bụ nọmba 1-877-US-2JOBS", action: "ịchọta American Job Center kacha nso gị na otu ebe ọzọ ị ga-enweta enyemaka ọrụ n'efu", standard: "ma dee adreesị ya, nọmba ekwentị ya na oge mmeghe ya" },
    { id: "O2", condition: "Mgbe e nyere gị ahụmịhe gị nke a kwụrụ ụgwọ na nke a kwụghị", action: "iji ngwa enyemaka AI depụta nka ọrụ ọ na-egosi", standard: "na-edebe naanị nka ị nwere ike inye ezi ọmụmaatụ ya" },
    { id: "O3", condition: "Mgbe e nyere gị ndepụta nka gị na akụkọ ọrụ gị", action: "iji ngwa enyemaka AI na ngwa akwụkwọ n'efu dee résumé otu peeji", standard: "nwere akụkụ niile dị mkpa, n'enweghị nọmba Social Security ma ọ bụ ụbọchị ọmụmụ" },
    { id: "O4", condition: "Mgbe e nyere gị ezi mgbasa ozi ọrụ", action: "ịgbanwe résumé gị ka ọ dabara na nka na okwu dị na mgbasa ozi ahụ", standard: "na-eji naanị ezi ozi ma chekwaa otu mbipụta nwere aha ọrụ ahụ" },
    { id: "O5", condition: "Mgbe ngwa enyemaka AI na-eme onye na-ajụ ajụjụ ọnụ", action: "ịza ajụjụ ọnụ ọrụ a na-ajụkarị n'olu dị elu site n'obere ezi akụkọ", standard: "na-arịọ ma jiri otu ndụmọdụ n'azịza ọ bụla" },
    { id: "O6", condition: "Mgbe e nyere gị onyinye ọrụ ma ọ bụ mgbasa ozi ọrụ", action: "ilele ya maka ihe ịdọ aka na ntị nke aghụghọ ọrụ ma kwado ụlọ ọrụ ahụ n'onwe gị", standard: "tupu i kesaa nọmba ụlọ akụ ma ọ bụ nọmba Social Security ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado onwe gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta enyemaka ọrụ n'efu dị nso gị",
          minutes: 4,
          goal: "Chọta American Job Center kacha nso gị na otu ebe ọzọ ị ga-enweta enyemaka ọrụ n'efu.",
          text: [
            "American Job Centers bụ ebe enyemaka ọrụ ọha dị n'ofe obodo ahụ niile (United States). Ha na-enyere ndị na-achọ ọrụ aka ịchọ ọrụ, na-ezigara ha n'ọrụ (referral) ma na-etinye ha n'ọrụ, ọtụtụ n'ime ha na-enyekwa kọmputa, ọmụmụ ihe nta (workshop) na ozi gbasara ọzụzụ. Ụfọdụ ọrụ ha nwere iwu gbasara onye ruru eru, ha nwekwara ike ịdị iche site na steeti ruo steeti.",
            "Ị nwere ike ịchọta ebe kacha nso gị site n'iji American Job Center Finder na CareerOneStop, weebụsaịtị nke U.S. Department of Labor (Ngalaba Ọrụ nke gọọmentị US), ma ọ bụ site n'ịkpọ 1-877-US-2JOBS.",
            "Ọba akwụkwọ ọha na-enyekwa aka n'ịchọ ọrụ, n'ibipụta résumé na n'oge kọmputa n'efu. Ezi enyemaka ọrụ anaghị arịọ gị ka ị kwụọ ụgwọ iji nweta ọrụ."
          ],
          steps: ["Meghee American Job Center Finder na careeronestop.org, ma ọ bụ kpọọ 1-877-US-2JOBS.", "Dee ZIP code gị ma ọ bụ aha obodo gị.", "Dee adreesị, nọmba ekwentị na oge mmeghe nke ebe kacha nso.", "Jụọ ọba akwụkwọ gị enyemaka ịchọ ọrụ ọ na-enye."],
          words: [["American Job Center", "ebe ọha na-enyere ndị mmadụ aka ịchọta ọrụ na ọzụzụ."], ["Referral", "mgbe ebe enyemaka zigara gị n'ọrụ ma ọ bụ mmemme nwere ike ịdabara gị."]],
          sources: [
            { name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Ebe enyemaka ọrụ ọha dị n'ofe obodo niile", "Ịchọ ọrụ, referral na itinye gị n'ọrụ", "Ụfọdụ ọrụ dị iche site na steeti ruo steeti"] },
            { title: "Chọta nke gị", bullets: ["American Job Center Finder na careeronestop.org", "Ma ọ bụ kpọọ 1-877-US-2JOBS"] },
            { title: "Enyemaka n'efu ọzọ", bullets: ["Ọba akwụkwọ ọha: kọmputa, mbipụta, enyemaka ọrụ", "Ezi enyemaka ọrụ anaghị ana gị ego iji nweta ọrụ"] }
          ],
          tryIt: "Chọta American Job Center kacha nso gị ma dee adreesị ya, nọmba ekwentị ya na oge mmeghe ya.",
          youCanNow: "ịchọta ezi enyemaka ọrụ n'efu dị nso gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ CareerOneStop?", options: ["Weebụsaịtị U.S. Department of Labor na-enyere gị aka ịchọta ebe enyemaka ọrụ", "Ụlọ ọrụ ọrụ a na-akwụ ụgwọ", "Weebụsaịtị soshal midia", "Ụlọ akụ maka ndị na-achọ ọrụ"], answer: 0, why: "CareerOneStop bụ saịtị Department of Labor nwere American Job Center Finder." },
            { objective: "O1", q: "Ị chọrọ ibipụta résumé ma jiri kọmputa n'efu. Ebee ọzọ ka ị nwere ike ịga?", options: ["Weebụsaịtị na-ana ego ndebanye aha", "Ọba akwụkwọ ọha gị", "Ọfịs n'ụlọ onye ị na-amaghị", "Ụlọ ahịa na-agbanwe chekụ ka ọ bụrụ ego"], answer: 1, why: "Ọba akwụkwọ ọha na-enyere aka n'ịchọ ọrụ, mbipụta na oge kọmputa n'efu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkpọ aha nka gị, nke a kwụrụ ụgwọ na nke a kwụghị",
          minutes: 5,
          goal: "Gbanwee ahụmịhe ọrụ na ndụ gị ka ọ bụrụ ndepụta nka ọrụ.",
          text: [
            "Ọtụtụ mmadụ na-asị \"Enweghị m nka ọ bụla\" mgbe ha nwere ya n'ezie. Ilekọta ụmụaka ma ọ bụ nne ma ọ bụ nna meworo agadi, ijikwa ego ezinụlọ, isi nri maka mmemme ụka, idozi ụgbọala ndị agbata obi ma ọ bụ ịrụ ọrụ a na-akwụ ego aka, ha niile na-ewulite ezi nka.",
            "Gwa ngwa enyemaka AI ihe i merela, n'okwu dị mfe, ma rịọ ya ka ọ gbanwee ya ka ọ bụrụ nka ọrụ. Dịka ọmụmaatụ: \"Afọ ise ka m ji lekọta nne nne m, jikwaa ọgwụ ya na oge ọ ga-ahụ dọkịta, ma debe ego ezinụlọ. Nka ọrụ ndị ọ bụ ka nke a na-egosi?\"",
            "Họrọ nka ndị bụ eziokwu, ndị ị nwere ike inye ọmụmaatụ ha. Edebela ihe ọ bụla ị na-agaghị enwe ike ịkọwa n'ajụjụ ọnụ."
          ],
          steps: ["Dee ihe niile i merela: ọrụ a kwụrụ ụgwọ, ọrụ ego aka, ilekọta mmadụ, ọrụ afọ ofufo, ụlọ akwụkwọ.", "Rịọ AI ka o depụta nka ọrụ nke ọ bụla na-egosi.", "Debe naanị nka ị nwere ike inye ezi ọmụmaatụ ya.", "Chekwaa ndepụta ahụ maka résumé gị."],
          words: [["Nka (skill)", "ihe ị maara ime nke ọma, dị ka ịhazi oge, ilekọta ndị ahịa ma ọ bụ iji igwe ndekọ ego (cash register)."], ["Nka a na-ebufe (transferable skill)", "nka si n'otu akụkụ ndụ nke na-enyere aka n'ọrụ ọzọ dị iche."]],
          slides: [
            { title: "I nwere nka karịa ka i chere", bullets: ["Ilekọta mmadụ, ijikwa ego, isi nri maka mmemme", "Ọrụ ego aka, ọrụ afọ ofufo, idozi ihe"] },
            { title: "Rịọ AI ka ọ kpọọ aha ha", bullets: ["Kọwaa ihe i mere n'okwu dị mfe", "\"Nka ọrụ ndị ọ bụ ka nke a na-egosi?\""] },
            { title: "Ka ọ bụrụ eziokwu", bullets: ["Debe nka ị nwere ike inye ọmụmaatụ ha", "Wepụ ihe ọ bụla ị na-enweghị ike ịkwado"] }
          ],
          tryIt: "Dee ihe atọ i merela (nke a kwụrụ ụgwọ ma ọ bụ nke a kwụghị). Rịọ ngwa enyemaka AI ka ọ kpọọ aha nka ọrụ nke ọ bụla na-egosi. Debe ndị ị nwere ike inye ezi ọmụmaatụ ha.",
          youCanNow: "ịgbanwe ahụmịhe gị nke a kwụrụ ụgwọ na nke a kwụghị ka ọ bụrụ ndepụta nka ọrụ nke eziokwu.",
          quickCheck: [
            { objective: "O2", q: "Kedu ahụmịhe a na-akwụghị ụgwọ na-ewulite nka ọrụ?", options: ["Ilele TV", "Ihi ụra ogologo oge", "Isi nri maka mmemme ụka", "Ileghari soshal midia"], answer: 2, why: "Isi nri maka mmemme na-egosi nka ịhazi ihe, ịrụkọ ọrụ ọnụ na ijikwa nri." },
            { objective: "O2", q: "AI kwuru na ilekọta ụmụaka gị na-egosi \"project management\" mana ị nweghị ike inye ọmụmaatụ. Gịnị ka ị ga-eme?", options: ["Debe ya; ọ na-ada mma", "Chepụta ọmụmaatụ", "Tinye ya ugboro abụọ", "Wepụ ya na ndepụta gị"], answer: 3, why: "Debe naanị nka ị nwere ike iji ezi ọmụmaatụ kwado n'ajụjụ ọnụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji AI dee résumé otu peeji",
          minutes: 6,
          goal: "Jiri ngwa enyemaka AI na ngwa akwụkwọ n'efu dee résumé dị mfe nwere otu peeji.",
          text: [
            "Résumé bụ nchịkọta otu peeji nke nka na ahụmịhe gị. Résumé dị mfe ma dị ọcha ka mma karịa nke a chọrọ mma nke ukwuu.",
            "Nye AI ndepụta nka gị, ọrụ gị ma ọ bụ ihe ndị i mere ya na ụbọchị ha, na ọzụzụ ma ọ bụ ụlọ akwụkwọ ọ bụla. Rịọ maka résumé otu peeji nwere akụkụ ndị a: ahịrị kọntaktị, obere nchịkọta, nka, ahụmịhe, na agụmakwụkwọ ma ọ bụ ọzụzụ.",
            "Etinyela nọmba Social Security gị, ụbọchị ọmụmụ gị ma ọ bụ nọmba ID zuru ezu na résumé ma ọ bụ n'ime AI. Tinye nọmba ekwentị na email gị n'onwe gị n'akwụkwọ ikpeazụ. Detuo ihe ọ dere n'ime ngwa n'efu dị ka Google Docs ma ọ bụ Microsoft Word na weebụ, ma chekwaa ya dị ka PDF iji zipu ya."
          ],
          steps: ["Nye AI nka gị, ọrụ gị ma ọ bụ ihe ndị i mere ya na ụbọchị ha, na ọzụzụ.", "Rịọ maka résumé otu peeji: ahịrị kọntaktị, nchịkọta, nka, ahụmịhe, agụmakwụkwọ.", "Detuo ya n'ime Google Docs ma ọ bụ Word na weebụ.", "Tinye nọmba ekwentị na email gị n'onwe gị; ahapụ nọmba Social Security na ụbọchị ọmụmụ.", "Gụpụta ya n'olu dị elu, dozie mperi, ma chekwaa ya dị ka PDF."],
          words: [["Résumé", "nchịkọta otu peeji nke nka, ọrụ na ọzụzụ gị maka ndị were mmadụ n'ọrụ."], ["PDF", "ụdị faịlụ na-eme ka akwụkwọ gị dị otu ahụ na ngwaọrụ ọ bụla."]],
          slides: [
            { title: "Dị mfe ma dị ọcha ka mma", bullets: ["Otu peeji", "Dị mfe ịgụ"] },
            { title: "Akụkụ ise", bullets: ["Ahịrị kọntaktị na obere nchịkọta", "Nka", "Ahụmịhe", "Agụmakwụkwọ ma ọ bụ ọzụzụ"] },
            { title: "Chebe ya", bullets: ["Enweghị nọmba Social Security ma ọ bụ ụbọchị ọmụmụ", "Tinye nọmba ekwentị na email n'onwe gị", "Chekwaa ya dị ka PDF iji zipu ya"] }
          ],
          tryIt: "Jiri ndepụta nka gị site na Nkuzi 2 rịọ ngwa enyemaka AI maka résumé otu peeji. Detuo ya n'ime Google Docs ma ọ bụ Word na weebụ ma gụpụta ya n'olu dị elu.",
          youCanNow: "iji AI na ngwa akwụkwọ n'efu dee résumé dị mfe nwere otu peeji.",
          quickCheck: [
            { objective: "O3", q: "Kedu akụkụ ndị kwesịrị ịdị na résumé dị mfe?", options: ["Ahịrị kọntaktị, nchịkọta, nka, ahụmịhe, agụmakwụkwọ ma ọ bụ ọzụzụ", "Nọmba Social Security na ụbọchị ọmụmụ", "Foto juru otu peeji", "Ozi ụlọ akụ gị"], answer: 0, why: "Akụkụ ise ndị a na-enye ndị were mmadụ n'ọrụ ihe ha chọrọ n'otu peeji." },
            { objective: "O3", q: "Olee mgbe ị ga-etinye nọmba ekwentị na email gị na résumé?", options: ["Buru ụzọ dee ha n'ime AI", "Dee ha n'onwe gị n'akwụkwọ ikpeazụ", "Ahapụ ha", "Tinye ha n'ịntanetị"], answer: 1, why: "Ịtinye ha n'onwe gị n'akwụkwọ ahụ na-eme ka ozi nzuzo ghara ịbanye n'AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado onwe gị",
        questions: [
          { objective: "O1", q: "Kedu otu ị ga-esi chọta American Job Center kacha nso gị?", options: ["Ozi ederede onye ị na-amaghị", "American Job Center Finder na CareerOneStop, ma ọ bụ 1-877-US-2JOBS", "Mgbasa ozi na-apụta na mberede", "Weebụsaịtị a na-akwụ ụgwọ"], answer: 1, why: "Ndị a bụ ezi ụzọ gọọmentị isi chọta ebe enyemaka." },
          { objective: "O1", q: "Weebụsaịtị kwuru na ị ga-akwụ ụgwọ iji nweta ọrụ. Nke a bụ:", options: ["Ihe nkịtị", "Ihe iwu chọrọ", "Ihe ịdọ aka na ntị; ezi enyemaka ọrụ anaghị ana gị ego iji nweta ọrụ", "Ezigbo onyinye"], answer: 2, why: "Ezi ndị were mmadụ n'ọrụ na ebe enyemaka ọrụ anaghị ana gị ego iji nweta ọrụ." },
          { objective: "O2", q: "I lekọtara nne nne gị afọ ise. Na résumé, nke a na-egosi:", options: ["Ezi nka dị ka ịhazi oge na ijikwa ọgwụ", "Ọ dịghị ihe bara uru", "Oge ị ga-ezo", "Naanị isi nri"], answer: 0, why: "Ilekọta mmadụ na-ewulite ezi nka a na-ebufe." },
          { objective: "O2", q: "AI depụtara nka ị na-enweghị n'ezie. Ị kwesịrị:", options: ["Idebe ya", "Ichepụta ọmụmaatụ", "Itinye abụọ ọzọ", "Iwepụ ya"], answer: 3, why: "Debe naanị ihe ị nwere ike ịkwado n'ajụjụ ọnụ." },
          { objective: "O3", q: "Kedu nke na-ekwesịghị ịbanye na résumé gị ma ọ bụ n'ime AI?", options: ["Nka gị", "Nọmba Social Security gị", "Aha ọkwa ọrụ gị", "Ọzụzụ gị"], answer: 1, why: "Nọmba Social Security na ụbọchị ọmụmụ adịghị na résumé." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrịọ ọrụ na ajụjụ ọnụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka résumé gị dabara mgbasa ozi ọrụ",
          minutes: 5,
          goal: "Gbanwee résumé gị ka ọ dabara n'ihe ezi mgbasa ozi ọrụ na-arịọ.",
          text: [
            "Ndị were mmadụ n'ọrụ chọrọ ịhụ na ị dabara n'ọrụ ha. Mgbasa ozi ọrụ na-edepụta ihe ha chọrọ. Mgbe résumé gị jiri otu nka na okwu ahụ, ọ na-adị mfe ịhụ na ị dabara.",
            "Tinye mgbasa ozi ọrụ ahụ na résumé gị n'ime AI ma jụọ: \"Kedu nka ndị dị na mgbasa ozi a m na-egosiworị? Tụọ aro mgbanwe na résumé m ka ọ dabakwuo, na-eji naanị ezi ozi.\"",
            "Ka ọ bụrụ eziokwu. Ime ka ọ dabara pụtara igosi ezi nka gị n'okwu onye were mmadụ n'ọrụ, ọ bụghị ịtinye ihe ị na-emebeghị."
          ],
          steps: ["Chọta ezi mgbasa ozi ọrụ ị nwere ike ịrịọ.", "Tinye mgbasa ozi ahụ na résumé gị n'ime AI (enweghị nọmba nzuzo).", "Jụọ nka ndị dabara na ihe ị ga-agbanwe, na-eji naanị ezi ozi.", "Melite résumé gị ma chekwaa mbipụta ọhụrụ nwere aha ọrụ ahụ."],
          words: [["Mgbasa ozi ọrụ (job posting)", "ozi onye were mmadụ n'ọrụ na-akọwa ọrụ na ihe ha chọrọ."], ["Okwu isi (keywords)", "okwu ndị dị mkpa na mgbasa ozi ọrụ, dị ka \"customer service\" ma ọ bụ \"forklift\"."]],
          slides: [
            { title: "Gosi na ị dabara", bullets: ["Mgbasa ozi ahụ na-edepụta ihe ha chọrọ", "Jiri otu nka na okwu ahụ"] },
            { title: "Jụọ AI", bullets: ["Tinye mgbasa ozi ahụ na résumé gị", "\"Kedu nka m na-egosiworị?\"", "\"Tụọ aro ezi mgbanwe ka ọ dabakwuo.\""] },
            { title: "Nọgide n'eziokwu", bullets: ["Ezi nka gị, n'okwu ha", "Chekwaa otu mbipụta nwere aha ọrụ ọ bụla"] }
          ],
          tryIt: "Chọta otu ezi mgbasa ozi ọrụ dị nso gị. Rịọ ngwa enyemaka AI ka o tụnyere ya na résumé gị ma tụọ aro mgbanwe nke eziokwu. Chekwaa mbipụta ọhụrụ maka ọrụ ahụ.",
          youCanNow: "ime ka résumé gị dabara n'ezi mgbasa ozi ọrụ n'eziokwu.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ime ka résumé \"dabara\" pụtara?", options: ["Ịtinye ọrụ ị na-arụbeghị", "Iji otu ụdị mkpụrụ akwụkwọ dị ka onye were mmadụ n'ọrụ", "Igosi ezi nka gị n'okwu onye were mmadụ n'ọrụ", "Ime ka ọ bụrụ peeji abụọ"], answer: 2, why: "Ime ka ọ dabara na-egosi ezi nka gị site n'iji okwu mgbasa ozi ahụ." },
            { objective: "O4", q: "Mgbasa ozi ahụ na-arịọ \"customer service\", i nyekwara ndị na-azụ ahịa aka n'ọrụ ego aka. Gịnị ka ị ga-eme?", options: ["Ahapụ ya", "Kwuo na ị jikwara ụlọ ahịa ahụ", "Dee \"enweghị ahụmịhe\"", "Kọwaa ya dị ka customer service, ya na ezi nkọwa ya"], answer: 3, why: "Ezi ahụmịhe gị dabara n'okwu isi ha, ya mere ị na-ekwu ya n'eziokwu n'okwu ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịmụ maka ajụjụ ọnụ",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI mụọ ịza ajụjụ ọnụ ọrụ a na-ajụkarị.",
          text: [
            "Ajụjụ ọnụ na-adị mfe karị mgbe i mụrụ ya. Ngwa enyemaka AI nwere ike ime onye na-ajụ ajụjụ ọnụ. Jụọ: \"Mee onye na-ajụ ajụjụ ọnụ maka ọrụ a. Jụọ m otu ajụjụ a na-ajụkarị n'otu oge ma chere azịza m. Mgbe azịza ọ bụla gasịrị, nye m otu ndụmọdụ.\"",
            "Ajụjụ a na-ajụkarị gụnyere: \"Gwa m banyere onwe gị.\" \"Gịnị mere i ji chọọ ọrụ a?\" \"Gwa m banyere oge i doziri nsogbu.\" Jiri obere ezi akụkọ: ihe mere, ihe i mere, na otu o si gwụ.",
            "Kwuo azịza gị n'olu dị elu, ọ bụghị naanị n'uche gị. Ọ bụrụ na e nwere oge ị rụghị ọrụ, mụọ otu ahịrịokwu dị mkpụmkpụ nke eziokwu banyere ya, wee kwuo ihe ị dị njikere ime ugbu a."
          ],
          steps: ["Rịọ AI ka ọ bụrụ onye na-ajụ ajụjụ ọnụ maka mgbasa ozi ọrụ gị.", "Zaa otu ajụjụ n'otu oge, n'olu dị elu, wee dee ya.", "Jiri obere ezi akụkọ: ihe mere, ihe i mere, ihe si na ya pụta.", "Rịọ maka otu ndụmọdụ mgbe azịza ọ bụla gasịrị ma nwaa ọzọ."],
          words: [["Ajụjụ ọnụ (interview)", "nzukọ ebe onye were mmadụ n'ọrụ na-ajụ gị ajụjụ iji kpebie ma ọ ga-ewe gị n'ọrụ."], ["Oge enweghị ọrụ (work gap)", "oge ị nọghị n'ọrụ a na-akwụ ụgwọ."]],
          slides: [
            { title: "AI nwere ike ime onye na-ajụ ajụjụ", bullets: ["Otu ajụjụ n'otu oge", "Otu ndụmọdụ mgbe azịza ọ bụla gasịrị"] },
            { title: "Ajụjụ a na-ajụkarị", bullets: ["\"Gwa m banyere onwe gị.\"", "\"Gịnị mere i ji chọọ ọrụ a?\"", "\"Gwa m banyere oge i doziri nsogbu.\""] },
            { title: "Jiri obere akụkọ zaa", bullets: ["Ihe mere", "Ihe i mere", "Otu o si gwụ"] },
            { title: "Mụọ ya n'olu dị elu", bullets: ["Kwuo ya, echela ya naanị n'uche", "Oge enweghị ọrụ: otu ahịrịokwu eziokwu, wee gaa n'ihu"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI ka ọ jụọ gị ajụjụ ọnụ maka ọrụ si na Nkuzi 4. Zaa ajụjụ abụọ n'olu dị elu, dee azịza gị, ma rịọ maka otu ndụmọdụ maka nke ọ bụla.",
          youCanNow: "iji AI mụọ ịza ajụjụ ọnụ ma mee ka azịza gị ka mma site na ndụmọdụ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị ga-arịọ AI ka o mee mgbe azịza ọ bụla ị mụrụ gasịrị?", options: ["Nye otu ndụmọdụ iji mee ka ọ ka mma", "Dee azịza gị maka gị", "Kwụsị ajụjụ ọnụ ahụ", "Gaa n'ọrụ ọzọ"], answer: 0, why: "Otu ndụmọdụ n'otu oge na-enyere gị aka ime ka azịza ọ bụla ka mma." },
            { objective: "O5", q: "Onye na-ajụ ajụjụ ọnụ jụrụ maka afọ abụọ ị na-elekọta ezinụlọ gị. Gịnị ka ị ga-ekwu?", options: ["Chepụta ọrụ", "Otu ahịrịokwu dị mkpụmkpụ nke eziokwu, wee kwuo ihe ị dị njikere ime ugbu a", "Ajụla ịza", "Kwuo maka ya nkeji iri"], answer: 1, why: "Azịza dị mkpụmkpụ nke eziokwu, ya na ilekwasị anya n'ihe ị nwere ike ime ugbu a, kacha sie ike." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhụ aghụghọ ọrụ",
          minutes: 5,
          goal: "Mata ihe ịdọ aka na ntị nke aghụghọ ọrụ ma mara ihe ị ga-eme.",
          text: [
            "Ndị aghụghọ ọrụ na-achụ ndị chọrọ ọrụ. Federal Trade Commission (FTC) na-adọ aka na ntị na ezi ndị were mmadụ n'ọrụ agaghị arịọ gị mgbe ọ bụla ka ị kwụọ ụgwọ iji nweta ọrụ.",
            "Ihe ịdọ aka na ntị ndị ọzọ: ha na-ezitere gị chekụ ma rịọ gị ka i zighachi ụfọdụ n'ego ahụ ma ọ bụ zụta gift card; ha na-ekwe nkwa ụgwọ buru ibu maka obere ọrụ; ọrụ ahụ bụ ịnata ngwongwo ma zigharịa ha; ma ọ bụ onyinye ọrụ ahụ si n'ebe ọ na-adịghị bịa na mberede.",
            "Ọ bụrụ na onyinye dị mma karịa ka o kwesịrị, kwụsị. Chọọ maka ụlọ ọrụ ahụ n'onwe gị, kpọọ ezi nọmba ekwentị ya, ma ọ bụ jụọ na American Job Center gị. Enyela nọmba ụlọ akụ gị ma ọ bụ nọmba Social Security gị tupu i kwado na ọ bụ ezi ọrụ."
          ],
          steps: ["Akwụla ụgwọ mgbe ọ bụla iji nweta ọrụ.", "Etinyela chekụ n'ụlọ akụ wee zighachi ego.", "Chọọ maka ụlọ ọrụ ahụ n'onwe gị ma kpọọ ezi nọmba ya.", "Jụọ American Job Center gị ma ọ bụrụ na obi abụọ dị gị."],
          words: [["Aghụghọ chekụ adịgboroja (fake check scam)", "onye aghụghọ zitere chekụ, rịọ gị ka i zighachi ụfọdụ, wee chekụ ahụ ghara ịrụ ọrụ, ị ga-ejikwa ụlọ akụ ụgwọ."], ["FTC", "Federal Trade Commission, ụlọ ọrụ gọọmentị US na-echebe ndị ahịa pụọ n'aghụghọ."]],
          sources: [{ name: "FTC: Job Scams", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Akwụla ụgwọ mgbe ọ bụla iji nweta ọrụ", bullets: ["FTC: ezi ndị were mmadụ n'ọrụ anaghị arịọ gị ka ị kwụọ ụgwọ", "Enweghị ụgwọ maka ngwa ọrụ, ọzụzụ ma ọ bụ nkwa"] },
            { title: "Ihe ịdọ aka na ntị ndị ọzọ", bullets: ["Zighachi ego site na chekụ", "Ụgwọ buru ibu maka obere ọrụ", "Ịzigharị ngwongwo", "Onyinye ọrụ na-abịa na mberede"] },
            { title: "Chebe onwe gị", bullets: ["Chọọ maka ụlọ ọrụ ahụ n'onwe gị", "Kpọọ ezi nọmba ya", "Jụọ American Job Center gị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mgbe résumé gị dabara n'ezi mgbasa ozi ọrụ, ka AI jụọ gị ajụjụ ọnụ atọ, zaa nke ọ bụla n'olu dị elu, ma rịọ maka otu ndụmọdụ iji mee ka azịza ọ bụla ka mma. Lelee mgbasa ozi ahụ maka ihe ịdọ aka na ntị nke aghụghọ ọ bụla.",
          youCanNow: "ịrịọ ezi ọrụ site na résumé dabara na ya, ịmụ maka ajụjụ ọnụ, na ịhụ aghụghọ ọrụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ ọrụ?", options: ["Mgbasa ozi nwere ezi adreesị ụlọ ọrụ", "Ajụjụ ọnụ n'ọfịs ụlọ ọrụ ahụ", "Nkwa ụgwọ buru ibu maka obere ọrụ", "Ọrụ e depụtara na American Job Center gị"], answer: 2, why: "Onyinye ndị na-ekwe nkwa ụgwọ buru ibu maka obere ọrụ bụ ihe ịrịba ama aghụghọ a na-ahụkarị." },
            { objective: "O6", q: "\"Onye were mmadụ n'ọrụ\" ọhụrụ zitere ozi na-arịọ nọmba ụlọ akụ gị tupu ajụjụ ọnụ ọ bụla. Gịnị ka ị ga-eme?", options: ["Zipu ya ka a kwụọ gị ngwa ngwa", "Zipu ọkara nọmba ahụ", "Rịọ enyi gị ka o zipu nke ya", "Kwụsị ma chọọ maka ụlọ ọrụ ahụ n'onwe gị"], answer: 3, why: "Enyela nọmba ụlọ akụ gị tupu i kwado na ọ bụ ezi ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrịọ ọrụ na ajụjụ ọnụ",
        questions: [
          { objective: "O4", q: "Gịnị mere ị ga-eji mee ka résumé gị dabara mgbasa ozi ọrụ?", options: ["Ka onye were mmadụ n'ọrụ hụ na ị dabara n'ọrụ ahụ", "Ime ka ọ dị ogologo", "Ịtinye nka ị na-enweghị", "Ọ baghị uru"], answer: 0, why: "Ime ka ọ dabara na-egosi na ị dabara n'ezie, n'okwu onye were mmadụ n'ọrụ." },
          { objective: "O4", q: "Mgbe ị na-eme ka ọ dabara, ị kwesịrị:", options: ["Ịtinye ọrụ ị na-arụbeghị", "Idetuo mgbasa ozi ahụ okwu n'okwu", "Iji ezi nka gị n'okwu onye were mmadụ n'ọrụ", "Iwepụ ahụmịhe gị niile"], answer: 2, why: "Ime ka ọ dabara n'eziokwu bụ ebumnuche." },
          { objective: "O5", q: "Kedu ezigbo ụzọ isi zaa \"Gwa m banyere oge i doziri nsogbu\"?", options: ["\"Enweghị m nsogbu mgbe ọ bụla.\"", "Ogologo ndepụta ọrụ", "\"Amaghị m.\"", "Obere ezi akụkọ: ihe mere, ihe i mere, otu o si gwụ"], answer: 3, why: "Obere akụkọ na-egosi nka gị nke ọma." },
          { objective: "O6", q: "\"Ụlọ ọrụ\" zitere gị chekụ ma rịọ gị ka i jiri ụfọdụ n'ime ya zụta gift card. Nke a bụ:", options: ["Ọrụ nkịtị n'ụbọchị mbụ", "Aghụghọ chekụ adịgboroja", "Ego ọzọ (bonus)", "Ọzụzụ"], answer: 1, why: "FTC depụtara nke a dị ka aghụghọ ọrụ a na-ahụkarị." },
          { objective: "O6", q: "Ị maghị ma onyinye ọrụ ọ bụ eziokwu. Gịnị ka ị ga-eme?", options: ["Chọọ maka ụlọ ọrụ ahụ n'onwe gị ma kpọọ ezi nọmba ya", "Zipu nọmba ụlọ akụ gị ka i lelee", "Kwụọ ụgwọ ahụ ka ị mata", "Nabata ya ozugbo"], answer: 0, why: "Ilele n'onwe gị na-echebe gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ịchọ Ọrụ na Njikere Ọrụ",
    questions: [
      { objective: "O1", q: "American Job Centers na-enyere aka na:", options: ["Mbinye ego ụgbọala", "Ịchọ ọrụ, referral na itinye gị n'ọrụ", "Naanị ịkwụ ụtụ isi", "Ịzụ ụlọ"], answer: 1, why: "Ha bụ ebe enyemaka ọrụ ọha." },
      { objective: "O1", q: "Onye na-arụ CareerOneStop bụ:", options: ["Ụlọ ọrụ egwuregwu vidiyo", "Ụlọ akụ", "U.S. Department of Labor", "Weebụsaịtị soshal midia"], answer: 2, why: "Ọ bụ weebụsaịtị Department of Labor." },
      { objective: "O1", q: "Kedu nọmba ekwentị na-enyere gị aka ịchọta ebe enyemaka ọrụ?", options: ["1-877-US-2JOBS", "911", "Nọmba si na mgbasa ozi na-apụta na mberede", "Nọmba ụlọ akụ gị"], answer: 0, why: "1-877-US-2JOBS bụ nọmba enyemaka ọrụ nke Labor Department." },
      { objective: "O2", q: "Kedu ahụmịhe nwere ike ịgụ dị ka nka ọrụ?", options: ["Naanị ọrụ ọfịs", "Naanị ọrụ chọrọ asambodo", "Ọ dịghị nke a na-akwụghị ụgwọ", "Ilekọta mmadụ, ọrụ afọ ofufo, ọrụ ego aka na ọrụ a kwụrụ ụgwọ"], answer: 3, why: "Ọrụ a na-akwụghị ụgwọ na ọrụ nkịtị na-ewulite ezi nka." },
      { objective: "O2", q: "Nka a na-ebufe (transferable skill) bụ:", options: ["Nka na-ebufe ego", "Nka si n'otu akụkụ ndụ nke na-enyere aka n'ọrụ ọzọ", "Tiketi ụgbọ ala", "Ụdị résumé"], answer: 1, why: "Ọ na-esi n'otu ebe gaa n'ebe ọzọ." },
      { objective: "O2", q: "Kedu nka kwesịrị ịnọ na ndepụta gị?", options: ["Ndị ị nwere ike inye ezi ọmụmaatụ ha", "Ihe niile AI tụrụ aro", "Ndị na-ada mma", "Ndị si na résumé enyi gị"], answer: 0, why: "Ị ga-enwerịrị ike ịkwado ha." },
      { objective: "O3", q: "Ezigbo résumé bụ:", options: ["Peeji ise", "Nke juru na foto", "Otu peeji, dị mfe ma dị ọcha", "Nke e ji aka dee"], answer: 2, why: "Dị mkpụmkpụ ma doo anya kacha dịrị ndị were mmadụ n'ọrụ mfe." },
      { objective: "O3", q: "Kedu nke na-ekwesịghị ịbanye na résumé mgbe ọ bụla?", options: ["Nka", "Ahụmịhe", "Ọzụzụ", "Nọmba Social Security"], answer: 3, why: "Nọmba nzuzo adịghị na résumé." },
      { objective: "O3", q: "Gịnị mere ị ga-eji chekwaa résumé gị dị ka PDF?", options: ["Ọ na-eme ka ọ dị otu ahụ na ngwaọrụ ọ bụla", "Ọ na-eme ka ọ dị ogologo", "Ọ na-agbakwunye agba", "Ndị were mmadụ n'ọrụ na-akwụ ụgwọ ya"], answer: 0, why: "PDF na-edebe nhazi ahụ otu ahụ." },
      { objective: "O3", q: "Ebee ka ị nwere ike ide résumé n'efu?", options: ["Ụlọ ọrụ nhazi a na-akwụ ụgwọ", "Google Docs ma ọ bụ Word na weebụ", "Ozi ederede", "Igwe mgbakọ"], answer: 1, why: "Ha abụọ bụ ngwa akwụkwọ n'efu." },
      { objective: "O4", q: "Okwu isi (keywords) bụ:", options: ["Okwuntughe", "Mkpịsị ugodi ụlọ gị", "Okwu ndị dị mkpa na mgbasa ozi ọrụ", "Koodu ụlọ akụ"], answer: 2, why: "Iji ha na-egosi na ị dabara." },
      { objective: "O4", q: "Ezigbo prompt maka ime ka résumé dabara na-arịọ AI ka ọ:", options: ["Chepụta ahụmịhe", "Dee aha ọhụrụ maka gị", "Mee ka résumé ahụ bụrụ peeji atọ", "Tụọ aro ezi mgbanwe ka ọ dabakwuo"], answer: 3, why: "Ime ka ọ dabara n'eziokwu bụ nka ahụ." },
      { objective: "O4", q: "Ị na-arịọ ọrụ abụọ dị iche. Ị kwesịrị:", options: ["Ichekwa mbipụta résumé nwere aha ọrụ ọ bụla", "Iji otu résumé maka ọrụ niile n'agbanweghị ya", "Ịghara ịrịọ", "Idetuo mgbasa ozi ọ bụla n'ime résumé gị"], answer: 0, why: "Ọrụ ọ bụla na-enweta mbipụta nke ya dabara na ya." },
      { objective: "O5", q: "Kedu otu AI nwere ike isi nyere gị aka ịkwado maka ajụjụ ọnụ?", options: ["Ọ na-aga ajụjụ ọnụ n'ọnọdụ gị", "Ọ na-eme onye na-ajụ ajụjụ ma na-enye ndụmọdụ", "Ọ na-ekwe nkwa na ị ga-enweta ọrụ", "Ọ na-akpọ onye were mmadụ n'ọrụ"], answer: 1, why: "Ịmụ ihe ya na ndụmọdụ na-ewulite obi ike." },
      { objective: "O5", q: "Mụọ azịza ajụjụ ọnụ:", options: ["Naanị n'uche gị", "Ọ dịghị mgbe", "N'olu dị elu", "Naanị n'ide ede"], answer: 2, why: "Ikwu ha n'olu dị elu na-akwado gị maka nke ezi." },
      { objective: "O5", q: "Akụkọ azịza siri ike gụnyere:", options: ["Naanị nsogbu ahụ", "Akụkọ onye ọzọ", "Ọ dịghị ihe doro anya", "Ihe mere, ihe i mere, na otu o si gwụ"], answer: 3, why: "Ụdị ahụ na-egosi nka gị." },
      { objective: "O5", q: "Ọ bụrụ na i nwere oge enweghị ọrụ, mụọ:", options: ["Otu ahịrịokwu dị mkpụmkpụ nke eziokwu, wee kwuo ihe ị dị njikere ime ugbu a", "Izo ya", "Ogologo arịrịọ mgbaghara", "Ọrụ e chepụtara echepụta"], answer: 0, why: "Eziokwu na mkpụmkpụ, wee lekwasị anya n'ihu." },
      { objective: "O6", q: "Dị ka FTC si kwuo, ezi ndị were mmadụ n'ọrụ:", options: ["Na-ana obere ụgwọ", "Anaghị arịọ gị mgbe ọ bụla ka ị kwụọ ụgwọ iji nweta ọrụ", "Chọrọ gift card", "Na-akwụ ụgwọ site na chekụ ị ga-eweghachi ụfọdụ"], answer: 1, why: "Ịkwụ ụgwọ iji nweta ọrụ bụ ihe ịrịba ama aghụghọ." },
      { objective: "O6", q: "Kedu ọrụ bụ aghụghọ a na-ahụkarị?", options: ["Onye na-anata ego n'ụlọ ahịa a ma ama", "Onye enyemaka n'ọba akwụkwọ", "Ịnata ngwongwo ma zigharịa ha site n'ụlọ", "Onye na-anya ụgbọ ala ụlọ akwụkwọ"], answer: 2, why: "Ọrụ ịzigharị ngwongwo bụ aghụghọ a ma ama." },
      { objective: "O6", q: "Olee mgbe ị ga-enye onye ọhụrụ were gị n'ọrụ nọmba ụlọ akụ gị?", options: ["N'ozi ederede mbụ", "Iji nweta ajụjụ ọnụ", "Tupu ị hụ mgbasa ozi ọrụ", "Naanị mgbe i kwadoro na ọ bụ ezi ọrụ"], answer: 3, why: "Buru ụzọ kwado na ọrụ ahụ bụ eziokwu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      7,
      10,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Résumé otu peeji",
        objective: "O3",
        notYet: "Ọ karịrị otu peeji, akụkụ ụfọdụ adịghị, ma ọ bụ e tinyere nọmba nzuzo.",
        meets: "Otu peeji nwere ahịrị kọntaktị, nchịkọta, nka, ahụmịhe na agụmakwụkwọ, n'enweghị nọmba nzuzo.",
        exceeds: "Agụpụtara ya n'olu dị elu, doziri mperi, ma chekwaa ya dị ka PDF."
      },
      {
        name: "Dabara na mgbasa ozi ahụ",
        objective: "O4",
        notYet: "Résumé ahụ anaghị eji nka ma ọ bụ okwu mgbasa ozi ahụ, ma ọ bụ na ọ na-agbakwunye ihe na-abụghị eziokwu.",
        meets: "Ọ na-eji nka ndị dị mkpa na mgbasa ozi ahụ n'okwu nke eziokwu.",
        exceeds: "E chekwara ya dị ka mbipụta dị iche nwere aha ọrụ ahụ."
      },
      {
        name: "Ezi nka",
        objective: "O2",
        notYet: "Ọ na-edepụta nka onye na-amụ ihe na-enweghị ike inye ọmụmaatụ ha.",
        meets: "Nka ọ bụla nwere ezi ọmụmaatụ site n'ọrụ a kwụrụ ụgwọ ma ọ bụ nke a kwụghị.",
        exceeds: "Ọ gụnyere nka a na-akwụghị ụgwọ dị ka ilekọta mmadụ ma ọ bụ ọrụ afọ ofufo, ya na ọmụmaatụ doro anya."
      },
      {
        name: "Azịza ajụjụ ọnụ",
        objective: "O5",
        notYet: "Azịza erughị atọ, ma ọ bụ e kwughị ha n'olu dị elu.",
        meets: "E zara ajụjụ atọ n'olu dị elu, rịọkwa otu ndụmọdụ maka nke ọ bụla.",
        exceeds: "Nwaa azịza ọ bụla ọzọ site n'iji ndụmọdụ ahụ, ya na obere ezi akụkọ."
      },
      {
        name: "Ilele aghụghọ",
        objective: "O6",
        notYet: "Eleghị mgbasa ozi ahụ maka ihe ịdọ aka na ntị.",
        meets: "Lelere mgbasa ozi ahụ maka ihe ịrịba ama aghụghọ ma chọọ maka ụlọ ọrụ ahụ.",
        exceeds: "Nwere ike ikwu ihe ịdọ aka na ntị ndị dị na ndị na-adịghị."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rịọrọ opekata mpe otu ọrụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ajụjụ ọnụ ọrụ ma ọ bụ ọrụ n'ime ụbọchị 90",
      "Ndị na-amụ ihe gara American Job Center ma ọ bụ kọọ na ha zere aghụghọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe enyemaka ọrụ",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Google Docs ma ọ bụ Word na weebụ (n'efu) iji dee ma chekwaa résumé",
      "Ezi mgbasa ozi ọrụ onye na-amụ ihe nwere ike ịrịọ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Buru ụzọ nyere ndị na-amụ ihe aka ịchọta nka a na-akwụghị ụgwọ; ọtụtụ chere na ha enweghị nke ọ bụla.",
      "Lelee prompt na résumé ọ bụla maka nọmba Social Security, ụbọchị ọmụmụ na nọmba nzuzo ndị ọzọ.",
      "Kpọkọta ndị na-amụ ihe abụọ abụọ maka ịmụ ajụjụ ọnụ ka ha zaakwa n'olu dị elu nye ezi mmadụ.",
      "Soro American Job Center dị nso rụkọọ ọrụ, ma kpọọ otu onye ọrụ ya ma ọ bụrụ na ị nwere ike.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

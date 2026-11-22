"use strict";

// Koach Learn course (Igbo translation of leadership/lead-coaching-mentoring.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-coaching-mentoring-ig",
  lang: "ig",
  translationOf: "lead-coaching-mentoring",
  category: "Leadership Development",
  name: "Ịkụzi Mmadụ (Coaching) na Ịdu Mmadụ (Mentoring)",
  skills: "Ịmata ọdịiche dị n'etiti coaching na mentoring, Ige ntị nke ọma, Ịjụ ajụjụ dị ike, Iduzi mkparịta ụka GROW, Ịtọ ebumnuche uto, Nkwekọrịta mentoring na iso uto anya",
  outcome: "iduzi mkparịta ụka coaching site n'iji usoro GROW, na-ege ntị nke ọma ma na-ajụ ajụjụ mepere emepe, inyere mmadụ aka ịtọ ebumnuche uto doro anya, ikwekọrịta otu mmekọrịta mentoring ga-esi arụ ọrụ, na iso uto ya anya ka oge na-aga.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-enyere ndị ọzọ aka itolite: ndị njikwa, ndị isi otu, ndị nkuzi, ndị nkuzi egwuregwu, ndị pastọ, ndị isi ndị ntorobịa, na ndị ọrụ nwere ahụmahụ na-edu ndị ọhụrụ.",
    "Coaching na mentoring bụ nka ị nwere ike ịmụ ma na-eme. Ị ga-amụta ọdịiche dị n'etiti ha, otu esi ege ntị ka ndị mmadụ chee na a nụrụ ha, otu esi ajụ ajụjụ na-enyere ndị mmadụ aka iche echiche, otu esi eduzi mkparịta ụka site n'usoro GROW, na otu esi atọ ebumnuche uto ma soro ya anya.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Ọ bụrụ na ị nwere ike, chọta onye mmekọ omume (onye ọrụ ibe gị, enyi ma ọ bụ onye ezinụlọ) maka ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee mkparịta ụka coaching nkeji 20 gị na onye mmekọ omume site n'iji GROW. Gee ntị karịa ka ị na-ekwu okwu, ma jụọ opekata mpe ajụjụ mepere emepe ise. Ọnụ, deenụ ebumnuche uto ya n'ụdị doro anya a pụrụ ịtụ, nkwekọrịta mentoring nke otu paragraf (ugboro ole unu ga-ezute, otu unu ga-esi ezute, ruo ogologo oge ole, na ihe bụ nzuzo), na ihe nsochi dị mfe nwere ụbọchị nleta atọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi otu, ndị nlekọta, ndị njikwa, ndị nkuzi, ndị isi obodo na ndị isi otu enyemaka (nonprofit), na ndị ọrụ nwere ahụmahụ chọrọ ime coaching ma ọ bụ mentoring nye ndị ọzọ.",
    startingPoint: "A na-arịọkarị ha enyemaka, ha na-azakarịkwa site n'inye ndụmọdụ. Ọ bụ mmadụ ole na ole meworo ige ntị nke ọma, ajụjụ mepere emepe, mkparịta ụka coaching nwere usoro ma ọ bụ nkwekọrịta mentoring e dere ede.",
    gap: "Inye azịza na-eme ka ndị mmadụ na-adabere na gị, ọ na-ahapụkwa ihe ha chọrọ n'ezie. Ndị isi kwesịrị ige ntị, ịjụ ajụjụ mepere emepe, iduzi mkparịta ụka site na GROW, inyere aka ịtọ ebumnuche uto doro anya ma soro uto anya, ka ndị ha na-akwado mụta iche echiche n'onwe ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Oge: nkuzi dị mkpụmkpụ, gbakwunyere mkparịta ụka omume nkeji 20",
      "Ọ chọrọ onye mmekọ omume maka ọrụ ikpeazụ",
      "Nzuzo: ihe e kwuru na coaching na mentoring na-anọ na nzuzo ma ọ bụrụ na a kwekọrịtaghị ihe ọzọ",
      "A na-agwa mmadụ ntụziaka nchekwa ozugbo, ọ bụghị site na coaching"
    ],
    prerequisites: "Ọ dịghị. \"Ilekọta Otu Ndị Ọrụ\" bụ ihe ọmụmụ na-enye aka ịgụ ya na nke a."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọnọdụ ebe mmadụ chọrọ enyemaka", action: "ịhọrọ ma ọ chọrọ coaching, mentoring ma ọ bụ ịgwa ya ihe ọ ga-eme", standard: "ma nweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" },
    { id: "O2", condition: "N'ime mkparịta ụka", action: "ige ntị n'egbochighị onye ahụ okwu ma chịkọta ihe ị nụrụ", standard: "nke mere na onye ahụ ga-ekweta na ị ghọtara ma ọ bụ mezie gị" },
    { id: "O3", condition: "Mgbe mmadụ rịọrọ gị ndụmọdụ", action: "ịjụ ajụjụ mepere emepe na-amalite na \"gịnị\" ma ọ bụ \"kedu otu\" kama inye ndụmọdụ", standard: "na-ajụ opekata mpe ajụjụ mepere emepe ise n'otu mkparịta ụka" },
    { id: "O4", condition: "N'ime mkparịta ụka coaching nkeji 20", action: "iduzi mkparịta ụka ahụ site na Goal, Reality, Options na Will", standard: "na-ejedebe na nzọụkwụ mbụ, ụbọchị na akara nkwa (commitment)" },
    { id: "O5", condition: "Mgbe mmadụ chọrọ itolite otu nka", action: "ide ebumnuche uto doro anya nwere obere nzọụkwụ mmụta", standard: "na-ekwu gịnị, ole na mgbe ọ ga-agwụ, nke onye ahụ nwe n'onwe ya" },
    { id: "O6", condition: "Mgbe ị na-amalite mmekọrịta mentoring", action: "ide nkwekọrịta mentoring nke otu paragraf na ihe nsochi nwere ụbọchị nleta atọ", standard: "na-ekpuchi ugboro ole, otu esi ezute, ogologo oge ole na ihe bụ nzuzo" }
  ],
  chapters: [
    {
      name: "Isi 1: Mkparịta ụka coaching",
      lessons: [
        {
          objectives: ["O1"],
          title: "Coaching na mentoring: gịnị bụ ọdịiche ha?",
          minutes: 4,
          goal: "Họrọ ma ọnọdụ chọrọ coaching, mentoring ma ọ bụ naanị ịgwa mmadụ ihe ọ ga-eme.",
          text: [
            "Coaching na-enyere mmadụ aka ịchọta azịza nke ya site n'ajụjụ na ige ntị. Onye coach adịghị mkpa ịmara ọrụ ahụ karịa; onye a na-akụzi (coachee) na-eme ọtụtụ n'ime iche echiche. Ọ na-arụ ọrụ nke ọma mgbe mmadụ nwere nka ma ọ bụ ihe ọmụma mana ọ kpọchiri akpọchi, ma ọ bụ chọrọ ime ka uche ikpe ya too.",
            "Mentoring bụ mmekọrịta ogologo oge ebe onye nwere ahụmahụ karịa na-ekesa ndụmọdụ, akụkọ, ndị ọ maara na ihe ọ mụtara. Onye mentor na-arụkarị n'otu ngalaba ọrụ ahụ. Ọ na-arụ ọrụ nke ọma maka nhọrọ ọrụ, ịmụta \"otu ihe si arụ ọrụ n'ezie\" na iwulite ndị ị maara.",
            "Mgbe ụfọdụ, ha abụọ adabaghị, ị ga-agwa ya ihe ọ ga-eme. Onye ọrụ ọhụrụ na-achọ ime mperi nchekwa chọrọ ntụziaka, ọ bụghị ajụjụ. Ezigbo ndị isi na-agbanwe n'etiti ịgwa, coaching na mentoring dabere n'ihe onye ahụ chọrọ."
          ],
          words: [["Coaching", "inyere mmadụ aka ịchọta azịza nke ya site n'ịjụ ajụjụ na ige ntị."], ["Mentoring", "mmekọrịta ogologo oge ebe onye nwere ahụmahụ karịa na-ekesa ndụmọdụ na ihe ọ mụtara."], ["Mentee", "onye a na-edu (onye na-anata mentoring)."], ["Coachee", "onye a na-akụzi (onye na-anata coaching)."]],
          slides: [
            { title: "Coaching", bullets: ["Ajụjụ na ige ntị", "Onye ahụ na-eche echiche n'onwe ya", "Ọ dị mma mgbe ọ kpọchiri akpọchi ma ọ bụ na-eme ka uche ikpe ya too"] },
            { title: "Mentoring", bullets: ["Mmekọrịta ogologo oge", "Ọ na-ekesa ahụmahụ, ndụmọdụ na ndị ọ maara", "Ọ dị mma maka ọrụ na otu ihe si arụ ọrụ n'ezie"] },
            { title: "Mgbe ụfọdụ, naanị gwa ya", bullets: ["Ihe egwu nchekwa", "Ọrụ ọhụrụ kpamkpam", "Gbanwee ụzọ ka o kwekọọ n'ihe a chọrọ"] }
          ],
          tryIt: "Dee ezi ọnọdụ atọ site n'ọrụ gị ma ọ bụ ndụ gị ebe mmadụ rịọrọ gị enyemaka. Maka nke ọ bụla, dee ma coaching, mentoring ma ọ bụ ịgwa ya ihe ga-enyekarị aka, na ihe kpatara ya.",
          youCanNow: "ịmata ọdịiche dị n'etiti coaching na mentoring ma họrọ ụzọ ziri ezi maka ọnọdụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ mentoring?", options: ["Ntụziaka nchekwa otu ugboro", "Mmekọrịta ogologo oge ebe onye nwere ahụmahụ karịa na-ekesa ndụmọdụ na ihe ọ mụtara", "Ịjụ naanị ajụjụ ee ma ọ bụ mba", "Nyocha arụmọrụ"], answer: 1, why: "Mentoring na-ekesa ahụmahụ ka oge na-aga, na-abụkarị n'otu ngalaba ọrụ ahụ." },
            { objective: "O1", q: "Otu onye n'otu gị chọrọ ịmata otu e si enye nkwalite n'ọkwa n'ezie n'ngalaba gị. Kedu ụzọ kacha dabara?", options: ["Gwa ya ka ọ gụọ iwu ahụ naanị ya", "Kụziere ya naanị site n'ajụjụ", "Hapụ ya ruo oge nyocha", "Duo ya site n'ikesa ahụmahụ gị na ndị ị maara"], answer: 3, why: "Mentoring dabara maka nhọrọ ọrụ na ịmụta otu ihe si arụ ọrụ n'ezie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ige ntị ka ndị mmadụ chee na a nụrụ ha",
          minutes: 5,
          goal: "Gee ntị nke ọma ma gosi na ị ghọtara site n'ịchịkọta ihe ị nụrụ.",
          text: [
            "Ọtụtụ n'ime anyị na-ege ntị ma na-eche ihe anyị ga-ekwu ọzọ. Na coaching, nke ahụ na-egbochi gị. Ige ntị nke ọma pụtara inye onye nke ọzọ uche gị niile: tinye ekwentị n'akụkụ, lee ya anya, egbochila ya okwu, ma ọ bụ banye n'okwu ya na akụkọ nke gị.",
            "Gosi na ị na-ege ntị. Kwee isi, kwuo \"gaa n'ihu\", na mgbe nkeji ole na ole gachara, chịkọta ihe ị nụrụ: \"Ya bụ, ihe m na-anụ bụ na ị chọrọ idu ọrụ ahụ mana ị na-echegbu onwe gị na otu gị agaghị eso gị. Ọ bụ otu ahụ?\" Nchịkọta dị mma na-eme ka onye ahụ nụ echiche nke ya ma mezie gị ma ọ bụrụ na i mehiere.",
            "Gee ntị maka mmetụta na ihe ọ ji kpọrọ ihe, ọ bụghị naanị eziokwu: \"Ọ dị ka iwe na-ewe gị\" ma ọ bụ \"Ọ dị ka ikpe ziri ezi dị gị mkpa nke ukwuu.\" Mụta ịnọ jụụ. Nkwụsịtụ na-abịakarị tupu echiche kacha mma onye ahụ apụta."
          ],
          steps: ["Tinye ekwentị gị n'akụkụ ma chee onye ahụ ihu.", "Egbochila ya okwu ma ọ bụ banye na akụkọ nke gị.", "Gbaa ya ume: kwee isi, \"gaa n'ihu\".", "Chịkọta ihe ị nụrụ ma jụọ ma ọ ziri ezi.", "Kpọọ aha mmetụta ị hụrụ.", "Hapụ ka ọ nọọ jụụ."],
          words: [["Ige ntị nke ọma (active listening)", "ige ntị n'uche gị niile ma gosi na ị ghọtara, dịka ọmụmaatụ site n'ịchịkọta."], ["Ịchịkọta (summarize)", "ikwughachi isi ihe ndị ahụ n'obere, n'okwu nke gị."]],
          slides: [
            { title: "Ige ntị nke ọma", bullets: ["Ekwentị n'akụkụ, anya gị n'ahụ ya", "Egbochila ya okwu", "Ebanyela na akụkọ nke gị"] },
            { title: "Gosi na ị na-ege ntị", bullets: ["Kwee isi, \"gaa n'ihu\"", "Chịkọta: \"Ya bụ, ihe m na-anụ bụ...\"", "Jụọ: \"Ọ bụ otu ahụ?\""] },
            { title: "Gee ntị nke ọma karịa", bullets: ["Nụ mmetụta na ihe ọ ji kpọrọ ihe, ọ bụghị naanị eziokwu", "Hapụ ka ọ nọọ jụụ: echiche ọma na-esokarị ya"] }
          ],
          tryIt: "Rịọ onye mmekọ gị ka o kwuo okwu nkeji atọ banyere ihe ọ chọrọ ime ka ọ ka mma. Enyela ndụmọdụ. Wee chịkọta ihe ị nụrụ n'ahịrịokwu abụọ ma jụọ, \"Ọ bụ otu ahụ ka m ghọtara ya?\"",
          youCanNow: "ige ntị n'uche gị niile ma chịkọta ihe ị nụrụ ka onye nke ọzọ chee na a nụrụ ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-egbochi ige ntị nke ọma?", options: ["Iche ihe ị ga-ekwu ọzọ", "Ikwe isi", "Ịchịkọta", "Ịhapụ ka a nọọ jụụ"], answer: 0, why: "Iche azịza gị pụtara na ị naghị ege ntị nke ọma." },
            { objective: "O2", q: "Mgbe mmadụ na-ekwu maka nsogbu, ị chetara akụkọ nke gị yiri ya. Gịnị ka ị ga-eme?", options: ["Kọọ akụkọ gị ozugbo", "Gbochie ya okwu ka i nye ndụmọdụ", "Nọgide na-ege ntị ma chịkọta ihe o kwuru", "Lee ekwentị gị"], answer: 2, why: "Ige ntị nke ọma pụtara ịghara ịbanye na akụkọ nke gị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịjụ ajụjụ dị ike",
          minutes: 5,
          goal: "Gbanwee ndụmọdụ ka ọ bụrụ ajụjụ mepere emepe na-enyere ndị mmadụ aka iche echiche n'onwe ha.",
          text: [
            "Ajụjụ dị ike na-emepe emepe (a pụghị iji ee ma ọ bụ mba zaa ya), dị mkpụmkpụ, ma bụrụ maka echiche onye nke ọzọ. Ọ na-amalitekarị na \"gịnị\" ma ọ bụ \"kedu otu\": \"Kedu ka ihe ịga nke ọma ga-adị?\" \"Gịnị ka ị nwalerela?\" \"Gịnị na-egbochi gị n'ezie?\"",
            "Kpachara anya maka ndụmọdụ yi uwe ajụjụ, dị ka \"Ị chere maka ịkpọ ya oku?\" Nke ahụ bụ echiche gị, ọ bụghị nke ya. Kpachakwa anya n'ajụjụ \"gịnị kpatara\" (why), nke nwere ike ịdị ka ịta ụta. \"Gịnị dugara gị n'ime nke ahụ?\" na-adịkarị nro karịa \"Gịnị kpatara i ji mee nke ahụ?\"",
            "Otu ajụjụ dị ike bụ \"Gịnị ọzọ?\" Ọ na-enyere ndị mmadụ aka ịgafe azịza mbụ ha. Jụọ otu ajụjụ n'otu oge, wee kwụsị ma gee ntị."
          ],
          steps: ["Malite na \"gịnị\" ma ọ bụ \"kedu otu\".", "Mee ka ọ dị mkpụmkpụ ma bụrụ maka echiche ya.", "Zere ndụmọdụ yi uwe ajụjụ.", "Gbanwee \"gịnị kpatara\" ka ọ bụrụ \"gịnị dugara gị...\".", "Jụọ \"Gịnị ọzọ?\"", "Jụọ otu ajụjụ, wee kwụsị ma gee ntị."],
          words: [["Ajụjụ mepere emepe (open question)", "ajụjụ a na-apụghị iji naanị ee ma ọ bụ mba zaa."], ["Ajụjụ mechiri emechi (closed question)", "ajụjụ a na-aza site n'ee, mba ma ọ bụ otu eziokwu."]],
          slides: [
            { title: "Ajụjụ dị ike bụ", bullets: ["Nke mepere emepe, dị mkpụmkpụ", "Maka echiche ya", "Na-amalitekarị na \"gịnị\" ma ọ bụ \"kedu otu\""] },
            { title: "Ọmụmaatụ", bullets: ["\"Kedu ka ihe ịga nke ọma ga-adị?\"", "\"Gịnị ka ị nwalerela?\"", "\"Gịnị na-egbochi gị n'ezie?\"", "\"Gịnị ọzọ?\""] },
            { title: "Kpachara anya maka", bullets: ["Ndụmọdụ yi uwe ajụjụ", "Ajụjụ \"gịnị kpatara\" dị ka ịta ụta", "Ịjụ ajụjụ abụọ n'otu oge"] }
          ],
          tryIt: "Dee ndụmọdụ atọ ị na-enyekarị ndị mmadụ. Gbanwee nke ọ bụla ka ọ bụrụ ajụjụ mepere emepe. Dịka ọmụmaatụ, \"Ị kwesịrị ịjụ onye isi gị\" ga-aghọ \"Onye nwere ike inyere gị aka na nke a?\"",
          youCanNow: "ịjụ ajụjụ mkpụmkpụ mepere emepe na-enyere ndị mmadụ aka ịchọta azịza nke ha.",
          quickCheck: [
            { objective: "O3", q: "Gịnị na-eme ka ajụjụ \"mepee emepe\"?", options: ["Ọ dị ogologo nke ukwuu", "A pụghị iji ee ma ọ bụ mba zaa ya", "O nwere ndụmọdụ gị n'ime ya", "Ọ na-amalite na \"gịnị kpatara\""], answer: 1, why: "Ajụjụ mepere emepe na-akpọ onye ahụ ka o chee echiche ma kọwaa." },
            { objective: "O3", q: "Ị chọrọ ịkọwa echiche gị, \"Gwa onye nlekọta gị okwu.\" Kedu otu ị ga-esi gbanwee ya ka ọ bụrụ ajụjụ coaching?", options: ["\"Ị chere maka ịgwa onye nlekọta gị okwu?\"", "\"Gịnị kpatara na ị gwabeghị onye nlekọta gị okwu?\"", "\"Ị kwesịrị ịgwa onye nlekọta gị okwu.\"", "\"Onye nwere ike inyere gị aka na nke a?\""], answer: 3, why: "Ajụjụ mepere emepe na-ekwe ka ọ chọta echiche ahụ; ndị ọzọ bụ ndụmọdụ ma ọ bụ ịta ụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mkparịta ụka coaching",
        questions: [
          { objective: "O1", q: "Na coaching, onye na-eme ọtụtụ n'ime iche echiche?", options: ["Onye coach", "Onye a na-akụzi", "Onye isi", "Akwụkwọ"], answer: 1, why: "Coaching na-enyere onye ahụ aka ịchọta azịza nke ya." },
          { objective: "O1", q: "Onye ọrụ ọhụrụ na-achọ iji igwe n'ụzọ na-adịghị mma. Kedu ụzọ kacha dabara?", options: ["Mkparịta ụka coaching ogologo", "Nkwekọrịta mentoring", "Gwa ya nke ọma otu esi eme ya n'enweghị ihe egwu", "Jụọ \"Gịnị ọzọ?\""], answer: 2, why: "Ihe egwu nchekwa chọrọ ntụziaka doro anya." },
          { objective: "O2", q: "Kedu nchịkọta dị mma mgbe ị na-ege ntị?", options: ["\"Nke ahụ mekwara m otu oge...\"", "\"Ị kwesịrị ịhapụ ọrụ ahụ.\"", "\"Ka ọ dị, ka anyị gaa n'ihu.\"", "\"Ya bụ, ị chọrọ idu ọrụ ahụ mana ị na-echegbu onwe gị na otu gị agaghị eso gị. Ọ bụ otu ahụ?\""], answer: 3, why: "Ọ na-ekwughachi isi ihe ndị ahụ ma lelee ma ị ghọtara." },
          { objective: "O3", q: "Kedu nke bụ ajụjụ mepere emepe?", options: ["\"Gịnị ka ị nwalerela?\"", "\"Ị kpọrọ ya oku?\"", "\"Ọ bụ Tuzde?\"", "\"I mechaala?\""], answer: 0, why: "A pụghị iji ee ma ọ bụ mba zaa ya." },
          { objective: "O3", q: "\"Ị chere maka ịkpọ ya oku?\" bụ nsogbu n'ihi na ọ bụ:", options: ["Ogologo nke ukwuu", "Ndụmọdụ yi uwe ajụjụ", "Mepere emepe nke ukwuu", "Maka mmetụta"], answer: 1, why: "Ọ na-ebute echiche nke gị kama ịdọpụta nke ya." }
        ]
      }
    },
    {
      name: "Isi 2: Uto na-adịgide adịgide",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iduzi mkparịta ụka site n'usoro GROW",
          minutes: 6,
          goal: "Duzie mkparịta ụka coaching site na Goal, Reality, Options na Will.",
          text: [
            "GROW bụ maapụ dị mfe a na-ejikarị maka mkparịta ụka coaching. G bụ Goal (ebumnuche): gịnị ka ọ chọrọ site na mkparịta ụka a na n'ọdịnihu? R bụ Reality (ọnọdụ ugbu a): gịnị na-eme ugbu a, gịnị ka ọ nwalerela? O bụ Options (nhọrọ): gịnị ka o nwere ike ime? W bụ Will (ụzọ n'ihu): gịnị ka ọ ga-eme, oleekwa mgbe?",
            "Were oge na Reality tupu i gbaga na Options. Ọtụtụ mgbe, onye ahụ na-ahụ azịza ahụ ozugbo ọnọdụ ahụ doro anya. Na Options, rịọ maka ọtụtụ echiche, na \"gịnị ọzọ?\", tupu ịhọrọ. Ọ bụrụ na i nwere echiche, ị nwere ike inye ya n'ikpeazụ, dị ka otu nhọrọ n'etiti ọtụtụ.",
            "Mechie na nkwa doro anya: \"Gịnị bụ nzọụkwụ mbụ gị, oleekwa mgbe ị ga-eme ya?\" Jụọ ka o si ji n'aka n'ọkwa 1 ruo 10. Ọ bụrụ na ọ dị ala, jụọ ihe ga-eme ka ọ rịa elu."
          ],
          steps: ["Goal: \"Gịnị ka ị chọrọ inweta site na mkparịta ụka a?\"", "Reality: \"Gịnị na-eme ugbu a? Gịnị ka ị nwalerela?\"", "Options: \"Gịnị ka ị nwere ike ime? Gịnị ọzọ?\"", "Will: \"Gịnị ka ị ga-eme, ruo mgbe ole?\"", "Lelee nkwa: \"Ole ka i ji n'aka, 1 ruo 10?\""],
          words: [["Usoro GROW", "maapụ coaching nwere nzọụkwụ anọ: Goal (ebumnuche), Reality (ọnọdụ ugbu a), Options (nhọrọ), Will (ihe ị ga-eme)."], ["Nkwa (commitment)", "nkwa doro anya ime otu ihe kpọmkwem n'otu oge a kara aka."]],
          slides: [
            { title: "Usoro GROW", bullets: ["Goal: gịnị ka ị chọrọ?", "Reality: gịnị na-eme ugbu a?", "Options: gịnị ka ị nwere ike ime?", "Will: gịnị ka ị ga-eme, ruo mgbe ole?"] },
            { title: "Were oge na Reality", bullets: ["Azịza na-apụtakarị ozugbo ihe doro anya", "Agbagala na ngwọta ngwa ngwa"] },
            { title: "Nhọrọ, wee nkwa", bullets: ["Rịọ maka ọtụtụ echiche, na \"gịnị ọzọ?\"", "Nye echiche gị n'ikpeazụ, dị ka otu nhọrọ", "\"Ole ka i ji n'aka, 1 ruo 10?\""] }
          ],
          tryIt: "Dee otu ajụjụ GROW maka nzọụkwụ ọ bụla na kaadị. Gị na onye mmekọ gị, meenụ mkparịta ụka GROW nkeji 15 banyere ihe ọ chọrọ ime ka ọ ka mma. Mechie na nzọụkwụ mbụ ya na ụbọchị.",
          youCanNow: "iduzi mkparịta ụka coaching site n'ebumnuche ruo nzọụkwụ ọzọ doro anya o kwere nkwa ya, site na GROW.",
          quickCheck: [
            { objective: "O4", q: "Na GROW, gịnị ka O na-anọchi anya ya?", options: ["Options (nhọrọ)", "Outcome (nsonaazụ)", "Order (iwu)", "Opinion (echiche)"], answer: 0, why: "GROW bụ Goal, Reality, Options, Will." },
            { objective: "O4", q: "Mgbe nkeji iri gachara, onye ahụ kpọrọ naanị otu nhọrọ. Gịnị ka ị ga-ajụ?", options: ["\"Nke ahụ ọ bụ azịza ikpeazụ gị?\"", "\"Nke a bụ ihe m ga-eme.\"", "\"Gịnị ọzọ?\"", "\"Gịnị kpatara naanị otu?\""], answer: 2, why: "\"Gịnị ọzọ?\" na-enyere ndị mmadụ aka ịgafe azịza mbụ ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịtọ ebumnuche uto",
          minutes: 5,
          goal: "Nyere mmadụ aka ịgbanwe ọchịchọ ka ọ bụrụ ebumnuche uto doro anya a pụrụ ịtụ.",
          text: [
            "Ebumnuche uto bụ maka ime ka otu nka too, ọ bụghị naanị imecha otu ọrụ. \"Ịka mma n'ikwu okwu n'ihu ọha\" bụ ọchịchọ. Ebumnuche doro anya na-ekwu gịnị, ole na mgbe ọ ga-agwụ: \"Idu nzukọ otu nke Mọnde naanị m, izu atọ n'usoro, tupu ngwụcha Machị.\"",
            "Ọtụtụ ndị na-eji SMART elele ebumnuche: Specific (doro anya kpọmkwem), Measurable (a pụrụ ịtụ), Achievable (a pụrụ inweta), Relevant (dabara adaba) na Time-bound (nwere oge a kara aka). Onye ahụ kwesịrị inwe ebumnuche ahụ. Jụọ ihe ọ chọrọ itolite, na ihe mere o ji dị ya mkpa, tupu i tinye ihe ọrụ ahụ chọrọ.",
            "Kewaa ebumnuche ahụ n'obere nzọụkwụ mmụta: ihe a ga-agụ ma ọ bụ lee, onye a ga-ele anya ma ọ bụ soro (shadow), ohere ime omume, na onye ga-enye nzaghachi. Ọtụtụ uto na-esi n'ime ihe, ọ bụghị naanị n'ihe ọmụmụ."
          ],
          steps: ["Jụọ ihe ọ chọrọ itolite na ihe mere o ji dị ya mkpa.", "Dee ya dị ka gịnị, ole, ruo mgbe ole.", "Lelee ya site na SMART.", "Depụta nzọụkwụ mmụta: gụọ, lee onye ọzọ, mee omume, nweta nzaghachi.", "Kwekọrịta nzọụkwụ mbụ."],
          words: [["Ebumnuche uto", "ebumnuche ime ka otu nka ma ọ bụ ikike too."], ["SMART", "nlele ebumnuche: Specific, Measurable, Achievable, Relevant, Time-bound (doro anya, a pụrụ ịtụ, a pụrụ inweta, dabara adaba, nwere oge)."], ["Shadowing", "ịmụta ihe site n'ile onye ọzọ anya ka ọ na-arụ ọrụ ahụ."]],
          slides: [
            { title: "Ọchịchọ na ebumnuche", bullets: ["Ọchịchọ: \"Ịka mma n'ikwu okwu n'ihu ọha\"", "Ebumnuche: \"Idu nzukọ Mọnde naanị m, izu 3 n'usoro, tupu ngwụcha Machị\""] },
            { title: "Lelee ya site na SMART", bullets: ["Specific na Measurable", "Achievable na Relevant", "Time-bound"] },
            { title: "Ebumnuche ya, ihe kpatara ya", bullets: ["Jụọ ihe ọ chọrọ itolite", "Jụọ ihe mere o ji dị ya mkpa"] },
            { title: "Nzọụkwụ mmụta", bullets: ["Gụọ ma ọ bụ lee", "Soro onye ọzọ (shadow)", "Mee omume", "Nweta nzaghachi"] }
          ],
          tryIt: "Gị na onye mmekọ omume gị, gbanweenụ otu ọchịchọ ka ọ bụrụ ebumnuche uto SMART. Wee depụta nzọụkwụ mmụta atọ, gụnyere opekata mpe otu ohere ime omume.",
          youCanNow: "inyere mmadụ aka ide ebumnuche uto doro anya na nzọụkwụ mmụta ga-eru ya.",
          quickCheck: [
            { objective: "O5", q: "Kedu nke bụ ọchịchọ kama ebumnuche uto doro anya?", options: ["\"Iweta akụkọ ọnwa ọ bụla naanị m na nzukọ abụọ tupu Juun\"", "\"Ịka mma n'ikwu okwu n'ihu ọha\"", "\"Iduzi nzukọ nchekwa atọ naanị m tupu ngwụcha ọnwa atọ a\"", "\"Ịkụziri ndị ọrụ ọhụrụ abụọ igbe ego (till) tupu May 1\""], answer: 1, why: "Ebumnuche doro anya na-ekwu gịnị, ole na mgbe ọ ga-agwụ; ọchịchọ anaghị ekwu ya." },
            { objective: "O5", q: "Onye ị na-edu chọrọ ịka mma n'ịgwọ ndị ahịa iwe na-ewe. Kedu nzọụkwụ mmụta ị ga-ebu ụzọ tinye?", options: ["Naanị ihe ọmụmụ ogologo n'ịntanetị", "Ọ dịghị ihe ruo afọ ọzọ", "Soro onye ọrụ ibe nwere nka, wee mee omume na nzaghachi", "Gụọ akụkọ ihe mere eme nke ụlọ ọrụ ahụ"], answer: 2, why: "Ọtụtụ uto na-esi n'ime ihe na ime omume na nzaghachi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nkwekọrịta mentoring na iso uto anya",
          minutes: 5,
          goal: "Dee nkwekọrịta mentoring dị mfe na ihe nsochi iji soro uto mmadụ anya.",
          text: [
            "Mmekọrịta mentoring na-arụ ọrụ nke ọma karịa ma e nwee obere nkwekọrịta na mmalite. Kwekọrịta nzube ya, ugboro ole unu ga-ezute (dịka ọmụmaatụ otu ugboro n'ọnwa ruo ọnwa isii), otu unu ga-esi ezute (ihu na ihu, ekwentị ma ọ bụ vidiyo), ihe bụ nzuzo, onye na-ahazi ihe a ga-ekwu (na-abụkarị mentee), na otu onye ọ bụla nwere ike isi kwụsị ya n'obiọma.",
            "Soro uto anya ka unu abụọ hụ ọganihu. Ihe nsochi dị mfe nwere ike ịbụ akwụkwọ ma ọ bụ spreadsheet unu na-ekerịta nwere ebumnuche, nzọụkwụ mmụta, ụbọchị nleta, ihe a nwalere, ihe a mụtara, na nzọụkwụ ọzọ. Mee ememe ọganihu, ọbụlagodi obere nzọụkwụ.",
            "Na nleta ọ bụla, legharịa anya n'ebumnuche ahụ, jụọ ihe gara nke ọma na ihe siri ike, ma kwekọrịta nzọụkwụ ọzọ. Na njedebe, lelee ọnụ ihe gbanwere, ma kparịta ihe na-abịa ọzọ: ebumnuche ọhụrụ, onye mentor ọhụrụ, ma ọ bụ ịghọ onye mentor n'onwe gị."
          ],
          steps: ["Kwekọrịta nzube, ugboro ole, otu, na ruo ogologo oge ole.", "Kwekọrịta ihe na-anọ na nzuzo na onye na-ahazi ihe a ga-ekwu.", "Kwekọrịta otu onye ọ bụla nwere ike isi kwụsị ya n'obiọma.", "Hazie ihe nsochi: ebumnuche, nzọụkwụ, ụbọchị, ihe a mụtara, nzọụkwụ ọzọ.", "Na nleta ọ bụla: lelee, tụgharịa uche, nzọụkwụ ọzọ.", "Na njedebe, lelee ihe gbanwere na ihe na-abịa ọzọ."],
          words: [["Nkwekọrịta mentoring", "obere nghọta e dere ede banyere otu mmekọrịta mentoring ga-esi arụ ọrụ."], ["Ihe nsochi (tracker)", "ndekọ dị mfe nke ọganihu n'ebumnuche, nwere ụbọchị."], ["Nleta (check-in)", "nzukọ a haziri ahazi iji lelee ọganihu."]],
          slides: [
            { title: "Nkwekọrịta mentoring", bullets: ["Nzube, ugboro ole, otu, ogologo oge ole", "Ihe na-anọ na nzuzo", "Mentee na-ahazikarị ihe a ga-ekwu", "Otu esi akwụsị ya n'obiọma"] },
            { title: "Ihe nsochi dị mfe", bullets: ["Ebumnuche na nzọụkwụ mmụta", "Ụbọchị nleta", "Ihe a nwalere na ihe a mụtara, nzọụkwụ ọzọ"] },
            { title: "Nleta ọ bụla", bullets: ["Legharịa anya n'ebumnuche", "Gịnị gara nke ọma? Gịnị siri ike?", "Kwekọrịta nzọụkwụ ọzọ; mee ememe ọganihu"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee mkparịta ụka GROW nkeji 20 gị na onye mmekọ gị. Wee deenụ ọnụ ebumnuche uto SMART ya, nkwekọrịta mentoring nke otu paragraf, na ihe nsochi nwere ụbọchị nleta atọ.",
          youCanNow: "ịhazi mmekọrịta mentoring nwere nkwekọrịta doro anya ma soro uto mmadụ anya ka oge na-aga.",
          quickCheck: [
            { objective: "O6", q: "Onye na-ahazikarị ihe a ga-ekwu na nzukọ mentoring?", options: ["Onye njikwa onye mentor", "Onye mentor", "Ngalaba ndị ọrụ (HR)", "Mentee"], answer: 3, why: "Mentee na-ahazikarị ya, n'ihi na ọ bụ uto nke ya." },
            { objective: "O6", q: "Na nleta, onye ị na-edu emeela obere ọganihu. Gịnị ka ị ga-eme?", options: ["Mee ememe ya ma kwekọrịta nzọụkwụ ọzọ", "Kwuo na o zughị ezu", "Gaa ozugbo n'ebumnuche ọhụrụ", "Kagbuo nleta na-esote"], answer: 0, why: "Ime ememe obere ọganihu na-eme ka ndị mmadụ nwee mkpali." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Uto na-adịgide adịgide",
        questions: [
          { objective: "O4", q: "Gịnị ka R dị na GROW na-anọchi anya ya?", options: ["Results (nsonaazụ)", "Rules (iwu)", "Reward (ụgwọ ọrụ)", "Reality (ọnọdụ ugbu a)"], answer: 3, why: "Reality: ihe na-eme ugbu a." },
          { objective: "O4", q: "Olee mgbe ị ga-enye echiche nke gị na nzọụkwụ Options?", options: ["Na mbụ, ka ọ ghara ịla oge n'iyi", "N'ikpeazụ, dị ka otu nhọrọ n'etiti ọtụtụ", "Ọ dịghị mgbe ọ bụla, n'ọnọdụ ọ bụla", "Naanị n'ederede"], answer: 1, why: "Inye ya n'ikpeazụ na-eme ka echiche ya bụrụ nke mbụ." },
          { objective: "O5", q: "Kedu nke bụ ebumnuche uto doro anya?", options: ["\"Ịbụ onye isi ka mma\"", "\"Ịgbalịsi ike karịa\"", "\"Idu nzukọ Mọnde naanị m izu atọ n'usoro tupu ngwụcha Machị\"", "\"Ịmụta ihe\""], answer: 2, why: "Ọ na-ekwu gịnị, ole na mgbe ọ ga-agwụ." },
          { objective: "O6", q: "Onye na-ahazikarị ihe a ga-ekwu na nzukọ mentoring?", options: ["Mentee", "Onye isi onye mentor", "HR", "Ọ dịghị onye"], answer: 0, why: "Mmekọrịta ahụ bụ maka uto mentee." },
          { objective: "O6", q: "Gịnị ka ihe nsochi uto dị mfe nwere?", options: ["Naanị echiche onye mentor", "Okwuntughe nzuzo", "Ọ dịghị ihe e dere ede", "Ebumnuche, nzọụkwụ, ụbọchị nleta, ihe a mụtara na nzọụkwụ ọzọ"], answer: 3, why: "Ndị a na-eme ka mmadụ abụọ ahụ hụ ọganihu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkụzi Mmadụ (Coaching) na Ịdu Mmadụ (Mentoring)",
    questions: [
      { objective: "O1", q: "Coaching bụ isi ihe gbasara:", options: ["Ịgwa ndị mmadụ ihe ha ga-eme", "Inyere ndị mmadụ aka ịchọta azịza nke ha site n'ajụjụ na ige ntị", "Inye onyinye", "Ịlele ndị bịara"], answer: 1, why: "Onye a na-akụzi na-eche echiche." },
      { objective: "O1", q: "Mentoring na-abụkarị:", options: ["Iwu otu ugboro", "Ule", "Mmekọrịta ogologo oge ebe a na-ekesa ahụmahụ", "Ntaramahụhụ"], answer: 2, why: "Ndị mentor na-ekesa ahụmahụ ka oge na-aga." },
      { objective: "O1", q: "Onye ọrụ nwere nka kpọchiri akpọchi n'ịhọrọ n'etiti ụzọ abụọ dị mma. Kedu nke kacha dabara?", options: ["Coaching", "Ịgwa ya azịza", "Ileghara ya anya", "Ịdọ aka na ntị e dere ede"], answer: 0, why: "O nwere nka; coaching na-enyere ya aka iji uche ikpe ya." },
      { objective: "O2", q: "Ige ntị nke ọma pụtara:", options: ["Ịlele ekwentị gị mgbe ọ na-ekwu okwu", "Iche azịza gị", "Ịkọ akụkọ nke gị ozugbo", "Inye ya uche gị niile, n'egbochighị ya okwu"], answer: 3, why: "Uche n'egbochighị okwu na-enyere ndị mmadụ aka iche echiche." },
      { objective: "O2", q: "Gịnị mere ị ga-eji chịkọta ihe ị nụrụ?", options: ["Iji mechie mkparịta ụka", "Ka ọ nụ echiche nke ya ma nwee ike imezi gị", "Iji gosi na ị ma ihe karịa", "Iji gbanwee isiokwu"], answer: 1, why: "Nchịkọta na-elele nghọta ma na-enyere aka ịtụgharị uche." },
      { objective: "O2", q: "Onye ahụ gbachiri nkịtị mgbe ị jụrụ ajụjụ. Ị kwesịrị:", options: ["Iji ndụmọdụ mejupụta ịgbachi nkịtị ahụ", "Ịjụ ajụjụ atọ ọzọ", "Ịhapụ ka ọ nọọ jụụ; echiche ọma na-esokarị ya", "Imechi nzukọ ahụ"], answer: 2, why: "Ịnọ jụụ na-enye ndị mmadụ ohere iche echiche." },
      { objective: "O3", q: "Kedu ajụjụ coaching kacha dị ike?", options: ["\"I mere ya?\"", "\"Ọ bụ na nke ahụ apụtaghị ìhè?\"", "\"Gịnị kpatara i ji mee nke ahụ?\"", "\"Gịnị na-egbochi gị n'ezie?\""], answer: 3, why: "Ọ mepere emepe ma na-eru n'obi okwu ahụ." },
      { objective: "O3", q: "Ụzọ dị nro isi jụọ \"Gịnị kpatara i ji mee nke ahụ?\" bụ:", options: ["\"Gịnị dugara gị n'ime nke ahụ?\"", "\"Onye gwara gị mee nke ahụ?\"", "\"Ị na-eme egwu?\"", "\"Ị maghị nke ka mma?\""], answer: 0, why: "Ọ na-enyocha echiche n'enweghị ịta ụta." },
      { objective: "O3", q: "Ajụjụ \"Gịnị ọzọ?\" na-enyere ndị mmadụ aka:", options: ["Ịkwụsị ikwu okwu", "Ịgafe azịza mbụ ha", "Ikwenye na gị", "Iche na a na-ata ha ụta"], answer: 1, why: "Azịza mbụ anaghị abụkarị naanị ya." },
      { objective: "O4", q: "GROW na-anọchi anya:", options: ["Grade, Review, Order, Wait", "Give, Rest, Own, Win", "Goal, Reality, Options, Will", "Growth, Rules, Outcome, Work"], answer: 2, why: "Goal, Reality, Options, Will (ma ọ bụ Way forward, ụzọ n'ihu)." },
      { objective: "O4", q: "Kedu ajụjụ GROW dị na nzọụkwụ Will?", options: ["\"Gịnị ka ị ga-eme, ruo mgbe ole?\"", "\"Gịnị na-eme ugbu a?\"", "\"Gịnị ka ị chọrọ site na mkparịta ụka a?\"", "\"Gịnị ka ị nwere ike ime?\""], answer: 0, why: "Will bụ maka nkwa ime ihe." },
      { objective: "O4", q: "Mmadụ nyere nkwa ya akara 4 n'ime 10. Ị ga-ajụ:", options: ["\"Gịnị kpatara o ji dị ala otu a?\"", "Ọ dịghị ihe", "\"Naanị mee ya otú ọ dị.\"", "\"Gịnị ga-eme ka ọ rịa elu?\""], answer: 3, why: "Ọ na-enyere ya aka iwepụ ihe na-egbochi ya." },
      { objective: "O4", q: "Gịnị mere ị ga-eji were oge na Reality tupu Options?", options: ["Ọ na-eju oge", "Azịza na-apụtakarị ozugbo ọnọdụ ahụ doro anya", "Nhọrọ anaghị aba uru mgbe ọ bụla", "Iji chọta onye a ga-ata ụta"], answer: 1, why: "Nghọta doro anya banyere ugbu a na-eduga na nhọrọ ka mma." },
      { objective: "O5", q: "SMART na-anọchi anya:", options: ["Simple, Modern, Active, Ready, True", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Many, Able, Real, Total", "Short, Main, All, Right, Today"], answer: 1, why: "Nlele ise ndị a na-eme ka ebumnuche doo anya." },
      { objective: "O5", q: "Onye kwesịrị inwe ebumnuche uto?", options: ["Onye na-eto eto ahụ", "Naanị onye njikwa", "Ọka iwu ụlọ ọrụ ahụ", "Ọ dịghị onye"], answer: 0, why: "Ndị mmadụ na-ekwe nkwa n'ebumnuche ha nwe." },
      { objective: "O5", q: "Ebee ka ọtụtụ uto si abịa?", options: ["Naanị ịgụ akwụkwọ", "Naanị asambodo", "Ime ihe na ime omume, na nzaghachi", "Ichere"], answer: 2, why: "Omume na nzaghachi na-ewulite nka." },
      { objective: "O6", q: "Nkwekọrịta mentoring kwesịrị inwe:", options: ["Ụgwọ ọnwa onye mentor", "Ugboro ole unu ga-ezute, ihe bụ nzuzo na otu esi akwụsị ya n'obiọma", "Naanị ụbọchị mmalite", "Ndepụta mperi mentee"], answer: 1, why: "Usoro doro anya na-egbochi mgbagwoju anya ma emechaa." },
      { objective: "O6", q: "Na nleta mentoring ọ bụla, ị kwesịrị:", options: ["Ịmalite ebumnuche ọhụrụ oge ọ bụla", "Ikwu naanị maka onwe gị", "Ịkagbu ma ọ bụrụ na ihe na-aga nke ọma", "Ilegharị anya n'ebumnuche, tụgharịa uche ma kwekọrịta nzọụkwụ ọzọ"], answer: 3, why: "Nlele mgbe niile na-eme ka uto nọrọ n'ụzọ." },
      { objective: "O6", q: "Gịnị mere ị ga-eji mee ememe obere ọganihu?", options: ["Ọ na-eme ka ndị mmadụ nwee mkpali", "Ọ na-anọchi ebumnuche ahụ", "Iwu chọrọ ya", "Ọ na-akwụsị mmekọrịta ahụ"], answer: 0, why: "Ịhụ ọganihu na-eme ka ndị mmadụ nọgide." },
      { objective: "O6", q: "Na njedebe mmekọrịta mentoring, ezigbo nzọụkwụ bụ:", options: ["Ịkwụsị ikwu okwu", "Ịzonarị ihe nsochi ahụ", "Ilele ihe gbanwere ma kparịta ihe na-abịa ọzọ", "Ịmalitegharị site na mmalite"], answer: 2, why: "Nlele na-emechi nke ọma ma na-egosi nzọụkwụ uto ọzọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      6,
      9,
      10,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ige ntị",
        objective: "O2",
        notYet: "Kwuru okwu karịa onye mmekọ ahụ ma ọ bụ na-egbochi ya okwu ọtụtụ mgbe.",
        meets: "Gere ntị karịa ka o kwuru okwu ma chịkọta ihe ọ nụrụ opekata mpe otu ugboro.",
        exceeds: "Kpọrọ aha mmetụta ma ọ bụ ihe ọ ji kpọrọ ihe ọ nụrụ, onye mmekọ ahụ wee kweta."
      },
      {
        name: "Ajụjụ mepere emepe",
        objective: "O3",
        notYet: "Ajụjụ mepere emepe erughị ise, ma ọ bụ ọtụtụ ndụmọdụ.",
        meets: "Opekata mpe ajụjụ mepere emepe ise, otu n'otu oge.",
        exceeds: "Jiri \"Gịnị ọzọ?\" ma zere ajụjụ \"gịnị kpatara\" na-ata ụta."
      },
      {
        name: "Mkparịta ụka GROW",
        objective: "O4",
        notYet: "Wụfere otu nzọụkwụ ma ọ bụ gbaga ozugbo n'inye ndụmọdụ.",
        meets: "Kpuchiri Goal, Reality, Options na Will ma mechie na nzọụkwụ mbụ na ụbọchị.",
        exceeds: "Rịọrọ akara nkwa 1 ruo 10 na ihe ga-eme ka ọ rịa elu."
      },
      {
        name: "Ebumnuche uto",
        objective: "O5",
        notYet: "Ebumnuche ahụ bụ ọchịchọ, dị ka \"ịka mma n'ikwu okwu n'ihu ọha\".",
        meets: "Ebumnuche doro anya na-ekwu gịnị, ole na mgbe ọ ga-agwụ, nke onye mmekọ ahụ nwe.",
        exceeds: "E kewara ya n'obere nzọụkwụ mmụta nwere omume na nzaghachi."
      },
      {
        name: "Nkwekọrịta na ihe nsochi",
        objective: "O6",
        notYet: "Nkwekọrịta ma ọ bụ ihe nsochi adịghị.",
        meets: "Nkwekọrịta otu paragraf (ugboro ole, otu, ogologo oge ole, ihe bụ nzuzo) na ihe nsochi nwere ụbọchị nleta atọ.",
        exceeds: "Ọ na-ekwukwa otu onye ọ bụla nwere ike isi kwụsị ya n'obiọma."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe malitere mmekọrịta coaching ma ọ bụ mentoring n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị mentee ruru ebumnuche uto ha n'ụbọchị a kara aka",
      "Ndị na-amụ ihe were ihe ọmụmụ ndu (leadership) Koach Learn ọzọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa iji lee nkuzi ndị ahụ",
      "Onye mmekọ omume maka mkparịta ụka nkeji 20",
      "Akwụkwọ ma ọ bụ akwụkwọ unu na-ekerịta maka ebumnuche, nkwekọrịta na ihe nsochi",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kekọọ ndị na-amụ ihe abụọ abụọ maka omume GROW; mee ka ha gbanwee ọrụ coach na coachee.",
      "Jiri onye nke atọ dị ka onye nlegharị anya na-agụ ọnụ ajụjụ mepere emepe na nchịkọta.",
      "Rịọ ndị mmekọ ka ha jiri ezi ebumnuche nke na-adịghị oke mkpa, ma debe ihe e kwuru na nzuzo.",
      "Chetara ndị na-amụ ihe na mperi nchekwa chọrọ ịgwa mmadụ ihe ọ ga-eme, ọ bụghị coaching.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye nzaghachi n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};

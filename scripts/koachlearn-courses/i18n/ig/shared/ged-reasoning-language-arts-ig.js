"use strict";

// Koach Learn course (Igbo translation of shared/ged-reasoning-language-arts.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// The GED test is taken in English, so the English example sentences in the grammar lessons and questions stay in English; only the explanations are in Igbo.

const GED_SUBJECTS = { name: "GED Testing Service: isiokwu ule (oge, ụdị ajụjụ, edemede)", url: "https://ged.com/about_test/test_subjects/" };
const GED_RLA = { name: "GED Testing Service: Reasoning Through Language Arts", url: "https://ged.com/about_test/test_subjects/language_arts/" };
const GED_SCORES = { name: "GED Testing Service: akara ule", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: ule nlele n'efu (n'asụsụ bekee na Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, ule omume gọọmentị nke GED", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, ule ọzọ dị ka asambodo ụlọ akwụkwọ sekọndrị (ezi weebụsaịtị ya)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-reasoning-language-arts-ig",
  lang: "ig",
  translationOf: "ged-reasoning-language-arts",
  category: "Workforce Development",
  name: "Nkwadebe Ule GED: Reasoning Through Language Arts (Ịgụ na Ide Ihe)",
  skills: "Ịchọta isi echiche na ihe akaebe, Ime nchoputa site n'ihe ederede (inference), Idozi grammar na akara edemede, Ịtụle arụmụka na ihe akaebe, Ide extended response (edemede), Ime atụmatụ ọmụmụ",
  outcome: "ịgụ obere akụkọ ma zaa ajụjụ dị ka nke GED banyere isi echiche ya, ihe akaebe ya na grammar ya, ma dee extended response (edemede) omume n'ime nkeji 45 nke na-ahọrọ arụmụka nwere ihe akaebe ka mma ma kọwaa ihe kpatara ya site n'ihe akaebe.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye na-akwado maka ule GED Reasoning Through Language Arts: ndị na-achọ ọrụ, ndị na-alọta site n'ụlọ mkpọrọ, ndị agha mbụ (veterans), ndị ntorobịa, ndị si mba ọzọ bịa na onye ọ bụla na-alọghachi n'ịmụ ihe. Asambodo GED nwere ike imeghe ụzọ maka ọrụ, mmemme ọzụzụ na kọleji.",
    "Ihe ọmụmụ a na-akwado gị maka ule ahụ. Ọ naghị enye gị asambodo GED. GED Testing Service na-ahazi ule ahụ, steeti gị na-ekpebikwa iwu maka iwere ya. Ụfọdụ steeti na-eji ule ọzọ a na-akpọ HiSET. Lelee ged.com na ọfịs agụmakwụkwọ ndị okenye nke steeti gị maka iwu, ụgwọ na ebe ule ugbu a.",
    "Ị ga-amụta otu ule ahụ si arụ ọrụ, ịgụ ihe maka isi echiche na ihe akaebe, idozi mperi grammar a na-ahụkarị, ịtụle arụmụka, na ide extended response (edemede). Nkuzi ọ bụla nwere ọmụmaatụ e mere eme, omume \"Nwalee ya ugbu a\" nwere azịza a kọwara akọwa, na obere nnwale nwere ajụjụ abụọ.",
    "E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ ikpeazụ bụ edemede omume ị ga-ede n'ime nkeji 45 ma tụọ akara ya site na rubric."
  ],
  finalTask: "Dee extended response GED omume n'ime nkeji 45 banyere akụkọ abụọ gbasara ọba akwụkwọ dị na Nkuzi 6. Họrọ arụmụka nwere ihe akaebe ka mma, kọwaa ihe kpatara ya site n'opekata mpe ihe akaebe abụọ si n'akụkọ ndị ahụ, ma jiri mmalite, paragraf ndị dị n'etiti na njedebe. Mgbe ahụ, gụgharịa ya maka mperi grammar ma tụọ akara edemede gị site na rubric ihe ọmụmụ a.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-akwado maka ule GED Reasoning Through Language Arts: ndị na-achọ ọrụ, ndị na-alọta site n'ụlọ mkpọrọ, ndị agha mbụ, ndị ntorobịa hapụrụ ụlọ akwụkwọ, ndị si mba ọzọ bịa na ndị okenye na-alọghachi n'ịmụ ihe mgbe ọtụtụ afọ gachara.",
    startingPoint: "Ha nwere ike ịgụ ihe nkịtị dị ka akara ụzọ, fọm na obere akụkọ. Ọtụtụ edebeghị edemede ma ọ bụ mụọ grammar ọtụtụ afọ, ụfọdụ na-atụ egwu ule ma ọ bụ ka na-amụ asụsụ bekee.",
    gap: "Ọtụtụ ọrụ, mmemme ọzụzụ na kọleji na-arịọ diplọma ụlọ akwụkwọ sekọndrị ma ọ bụ asambodo dị ka ya. Ndị na-amụ ihe kwesịrị ịgụ ihe nke ọma maka ihe akaebe, ịtụle arụmụka, iji grammar ziri ezi na ide edemede n'oge a kara aka. Ule na-anwale nka ndị a, ha ga-ejikwa ha n'ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ na nkuzi; akụkọ omume dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị, kọmputa ọba akwụkwọ, ma ọ bụ akwụkwọ na mkpịsị ode",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ, oge ịhụ ndị ọrụ na ezinụlọ",
      "Iwu ule, ụgwọ na ule steeti na-eji (GED ma ọ bụ HiSET) na-agbanwe; ndị na-amụ ihe na-elele ged.com na steeti ha",
      "Ụfọdụ ndị na-amụ ihe na-atụ egwu ule; omume adịghị egwu, a na-akọwakwa azịza"
    ],
    prerequisites: "Ọ dịghị. Ndị na-agụ ihe n'okpuru ọkwa klas 6 nwere ike iwere klas ịgụ akwụkwọ maka ndị okenye n'otu oge ahụ."
  },
  // ---- ADDIE: Nhazi ----
  objectives: [
    { id: "O1", condition: "Site n'iji weebụsaịtị gọọmentị GED", action: "ịkpọ aha akụkụ, ụdị ajụjụ na oge nke ule asụsụ GED ma dee atụmatụ ọmụmụ nwere ụbọchị", standard: "na-akpọ aha akụkụ ule ọ bụla na opekata mpe otu ụbọchị ọmụmụ kwa izu ruo ụbọchị ule" },
    { id: "O2", condition: "Mgbe e nyere gị obere akụkọ", action: "ịchọta isi echiche, nkọwa ndị na-akwado ya na nchoputa nke ihe akaebe na-akwado", standard: "na-egosi kpọmkwem ahịrịokwu na-akwado azịza ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ahịrịokwu nwere mperi", action: "idozi mperi grammar, akara edemede, mkpụrụedemede ukwu na nhọrọ okwu", standard: "na-enweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị obere arụmụka", action: "ịchọta claim na ihe akaebe ma kpebie ma ihe akaebe ọ bụla siri ike ma ọ bụ adịghị ike", standard: "na-enye ihe kpatara mkpebi ọ bụla" },
    { id: "O5", condition: "Mgbe e nyere gị akụkọ abụọ na-ekwekọghị, na elekere nkeji 45", action: "ide extended response nke na-ahọrọ arụmụka nwere ihe akaebe ka mma ma kọwaa ihe kpatara ya site n'ihe akaebe", standard: "nwere mmalite, opekata mpe ihe akaebe abụọ si n'akụkọ ndị ahụ, na njedebe" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịgụ nke ọma na ide ihe n'ụzọ ziri ezi",
      lessons: [
        {
          title: "Otu ule asụsụ GED si arụ ọrụ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha akụkụ ule asụsụ GED ma dee atụmatụ ọmụmụ nwere ụbọchị.",
          text: [
            "GED nwere ule anọ: Math, Reasoning Through Language Arts (RLA), Science na Social Studies. Ị nwere ike iwere ha otu n'otu. GED Testing Service na-eme ule ahụ. Ụfọdụ steeti na-eji ule ọzọ dị ka asambodo ụlọ akwụkwọ sekọndrị, HiSET, ya mere lelee ule steeti gị na-eji.",
            "Na ged.com, e dere na ule RLA bụ nkeji 150 n'akụkụ atọ, nwere ezumike nkeji 10 n'etiti akụkụ 2 na 3. Ọ na-anwale ịgụ ihe maka nghọta, ịchọta na ime arụmụka, na grammar na asụsụ. Otu akụkụ bụ edemede a na-akpọ extended response, nwere nkeji 45.",
            "Ọtụtụ ajụjụ bụ multiple choice (ịhọrọ otu azịza). Ndị ọzọ na-arịọ gị ka ị dọkpụrụ ma tọgbọ (drag and drop), họrọ otu ebe na ihuenyo, ma ọ bụ họrọ site na ndepụta drop-down n'ime ahịrịokwu. Ged.com kwuru na akara ngafe bụ 145 maka isiokwu ọ bụla. Oge na iwu nwere ike ịgbanwe, ya mere lelee ged.com tupu i debanye aha.",
            "Atụmatụ ka mma karịa ịgụsi ike n'otu abalị. Obere omume ụbọchị anọ ma ọ bụ ise kwa izu na-arụ ọrụ karịa otu abalị ogologo. Ged.com nwere ule nlele n'efu na ule omume gọọmentị, GED Ready, nke na-egosi ma ị nwere ike ịgafe."
          ],
          steps: ["Gaa na ged.com ma gụọ peeji Reasoning Through Language Arts.", "Dee oge, akụkụ ya na ụdị ajụjụ ya.", "Were ule nlele RLA n'efu ka ị hụ ebe ị nọ.", "Họrọ izu ị chọrọ iwere ule ma gụọ izu ole fọdụrụ.", "Dee opekata mpe otu ụbọchị ọmụmụ kwa izu, ya na nkuzi ma ọ bụ nka maka ụbọchị ahụ."],
          words: [["GED", "ule dị ka asambodo ụlọ akwụkwọ sekọndrị; ịgafe isiokwu anọ ahụ niile na-enye asambodo ọtụtụ ndị were mmadụ n'ọrụ na kọleji na-anabata dị ka diplọma."], ["HiSET", "ule ọzọ dị ka asambodo ụlọ akwụkwọ sekọndrị nke ụfọdụ steeti na-eji."], ["Extended response", "okwu GED maka edemede ị na-ede n'ule ahụ."], ["Drop-down", "ndepụta na-emeghe mgbe ị pịara ya, ka ị họrọ otu azịza."], ["Atụmatụ ọmụmụ", "kalenda nke ihe ị ga-amụ na mgbe ị ga-amụ ya."]],
          slides: [
            { title: "Isiokwu GED anọ", bullets: ["Math", "Reasoning Through Language Arts (RLA)", "Science", "Social Studies"] },
            { title: "Ule RLA (lelee ged.com)", bullets: ["Nkeji 150, akụkụ atọ, otu ezumike nkeji 10", "Ịgụ maka nghọta, arụmụka, grammar", "Otu edemede: extended response, nkeji 45"] },
            { title: "Ụdị ajụjụ", bullets: ["Multiple choice", "Drag and drop", "Ịhọrọ otu ebe", "Drop-down"] },
            { title: "Mee atụmatụ", bullets: ["Buru ụzọ were ule nlele n'efu", "Họrọ izu ị ga-ewere ule", "Mụọ ntakịrị, ọtụtụ ụbọchị n'izu"] }
          ],
          sources: [GED_SUBJECTS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Meghee ged.com ma were ule nlele RLA n'efu (ma ọ bụ gụọ peeji RLA ma ọ bụrụ na ị nweghị ike iwere ya ugbu a). Mgbe ahụ dee atụmatụ ọmụmụ gị: izu ị chọrọ iwere ule, na otu ụbọchị kwa izu ya na nka ị ga-eme omume ya (ịgụ ihe, grammar, arụmụka ma ọ bụ edemede). Debe ya; ị ga-agbakwunye na ya.",
          youCanNow: "ịkpọ aha akụkụ ule asụsụ GED ma soro atụmatụ ọmụmụ nwere ụbọchị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ extended response n'ule asụsụ GED?", options: ["Ndepụta okwu ọhụrụ", "Ajụjụ ọnụ a na-ekwu n'olu", "Edemede ị na-ede n'ule ahụ", "Akụkụ math"], answer: 2, why: "Ged.com na-akpọ edemede e dere ede extended response." },
            { objective: "O1", q: "Ule gị fọdụrụ izu 8. Kedu atụmatụ kacha mma?", options: ["Mụọ nkeji 30 n'ụbọchị anọ kwa izu, ya na nka maka ụbọchị ọ bụla", "Mụọ abalị niile n'ụbọchị tupu ule", "Were ule n'enweghị omume ka ị hụ ihe ga-eme", "Gụọ naanị ndụmọdụ edemede"], answer: 0, why: "Obere omume a na-eme mgbe niile, nwere nka a kara aka kwa ụbọchị, na-ewuli nka karịa ịgụsi ike n'otu abalị." }
          ]
        },
        {
          title: "Isi echiche, nkọwa na nchoputa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Chọta isi echiche, nkọwa abụọ na-akwado ya na otu nchoputa n'obere akụkọ.",
          text: [
            "Isi echiche bụ ihe akụkọ ahụ niile na-ekwu maka ya. Nkọwa na-akwado ya bụ eziokwu, ọmụmaatụ na ihe kpatara nke na-akwado ya. Jụọ: \"Ọ bụrụ na m ga-ekwu akụkọ a n'otu ahịrịokwu, gịnị ka m ga-ekwu?\"",
            "Ọmụmaatụ e mere eme. Akụkọ: \"Ọtụtụ ụlọ nkwakọba ngwaahịa na-arụ ọrụ abalị niile ugbu a. Ọrụ abalị na-akwụkarị ụgwọ karịa kwa elekere. Mana ndị ọrụ abalị na-ekwu na ụra na-esiri ha ike, ụfọdụ na-ekwukwa na ọ na-esiri ike ịhụ ezinụlọ ha.\" Isi echiche: ọrụ abalị na-akwụ ụgwọ karịa mana o nwere ihe ọ na-efu ndị ọrụ. Nkọwa: ọ na-akwụ karịa; ndị ọrụ na-akọ nsogbu ụra; oge ezinụlọ na-esi ike.",
            "Nchoputa (inference) bụ amamihe ị nwetara site n'ihe ịrịba ama dị n'akụkọ ahụ. E deghị ya otu okwu n'otu okwu, mana akụkọ ahụ na-akwado ya. Site n'akụkọ a, ị nwere ike ịchọpụta na onye ọrụ nwere ụmụaka nwere ike iche echiche ugboro abụọ tupu o were ọrụ abalị. Ị nweghị ike ịchọpụta na ọrụ abalị megidere iwu; ọ dịghị ihe na-ekwu nke ahụ.",
            "N'ule ahụ, gosi mgbe niile ahịrịokwu na-egosi na azịza gị ziri ezi. Ọ bụrụ na ị nweghị ike igosi ya, azịza ahụ nwere ike ọ gaghị ezi ezi."
          ],
          steps: ["Buru ụzọ gụọ ajụjụ ahụ, ka ị mara ihe ị ga-achọ.", "Gụọ akụkọ ahụ otu ugboro site na mmalite ruo na njedebe.", "Kwuo isi echiche n'otu ahịrịokwu.", "Chọta nkọwa abụọ na-akwado ya.", "Maka nchoputa, họrọ azịza akụkọ ahụ na-akwado, ma chọta ahịrịokwu na-egosi ya."],
          words: [["Isi echiche", "ihe akụkọ na-ekwu maka ya karịsịa."], ["Nkọwa na-akwado", "eziokwu, ọmụmaatụ ma ọ bụ ihe kpatara nke na-akwado isi echiche."], ["Nchoputa (inference)", "ihe ị kpebiri site n'ihe ịrịba ama dị n'akụkọ."], ["Ihe akaebe", "okwu dị n'akụkọ ahụ na-egosi na azịza ziri ezi."]],
          slides: [
            { title: "Isi echiche", bullets: ["Ihe akụkọ ahụ na-ekwu maka ya karịsịa", "Kwuo ya n'otu ahịrịokwu"] },
            { title: "Nkọwa na-akwado", bullets: ["Eziokwu, ọmụmaatụ na ihe kpatara", "Ha na-akwado isi echiche"] },
            { title: "Nchoputa", bullets: ["Amamihe site n'ihe ịrịba ama dị n'akụkọ", "E deghị ya otu okwu n'otu okwu", "Akụkọ ahụ ga-akwado ya"] },
            { title: "Gosi ya", bullets: ["Gosi ahịrịokwu na-egosi azịza gị", "Ọ dịghị ahịrịokwu ị ga-egosi? Họrọ ọzọ"] }
          ],
          tryIt: "Akụkọ omume: \"Obodo ahụ mepere ebe ajụ oyi (cooling centers) atọ ọhụrụ n'oge okpomọkụ a. N'ụbọchị karịrị 100 degrees, ha nọ n'oghe ruo elekere 10 nke abalị. Ndị agadi na ndị na-enweghị igwe ajụ oyi (air conditioning) bịara karịa.\" 1) Isi echiche? 2) Nkọwa abụọ? 3) Kedu nchoputa akụkọ ahụ na-akwado: (a) obodo ahụ chọrọ ichebe ndị mmadụ pụọ n'okpomọkụ, ma ọ bụ (b) ebe ndị ahụ na-efu ego karịrị akarị? Azịza: 1) Obodo ahụ mepere ebe ajụ oyi iji nyere ndị mmadụ aka n'oge okpomọkụ. 2) Ha nọ n'oghe ruo elekere 10 nke abalị n'ụbọchị okpomọkụ dị ukwuu; ọtụtụ ndị bịara bụ ndị agadi na ndị na-enweghị igwe ajụ oyi. 3) (a). Ọ dịghị ihe akụkọ ahụ kwuru gbasara ego.",
          youCanNow: "ịchọta isi echiche, nkọwa na nchoputa a kwadoro, ma gosi ihe akaebe ya.",
          quickCheck: [
            { objective: "O2", q: "Akụkọ kwuru na ụlọ achịcha tinyere ọrụ mgbede, were mmadụ ise n'ọrụ ma ree achịcha karịa 30%. Gịnị bụ isi echiche?", options: ["Achịcha dị mma maka ahụ", "Ịtinye ọrụ mgbede nyeere ụlọ achịcha ahụ aka ito", "E were mmadụ ise n'ọrụ", "Ụlọ achịcha na-emechi n'abalị"], answer: 1, why: "Akụkọ ahụ niile bụ banyere ọrụ mgbede na-enyere ụlọ achịcha aka; ndị e were n'ọrụ na ahịa bụ nkọwa." },
            { objective: "O2", q: "Kedu nke bụ nchoputa, ọ bụghị nkọwa e dere n'akụkọ ahụ?", options: ["Eziokwu e detuuru otu okwu n'otu okwu site n'akụkọ ahụ", "Aha akụkọ ahụ", "Ọnụ ọgụgụ paragraf", "Ihe ị kpebiri site n'ihe ịrịba ama akụkọ ahụ nyere"], answer: 3, why: "Nchoputa bụ ihe ị kpebiri nke ihe ịrịba ama na-akwado, ọ bụghị eziokwu e kwuru ozugbo." }
          ]
        },
        {
          title: "Idozi grammar na akara edemede",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dozie ụdị mperi grammar na akara edemede ise a na-ahụkarị n'ahịrịokwu.",
          text: [
            "Ọtụtụ ajụjụ RLA na-egosi ahịrịokwu nwere nhọrọ drop-down ma jụọ nke ziri ezi. E dere ule ahụ n'asụsụ bekee, ya mere ọmụmaatụ ndị a dị n'asụsụ bekee. Mperi ole na ole na-apụta ugboro ugboro. Mụta ha, ị ga-enweta ọtụtụ akara.",
            "1) Subject na verb ga-ekwekọ: \"The list of jobs is long\" (subject bụ list, ọ bụghị jobs). 2) Ahịrịokwu zuru ezu: \"Because the bus was late.\" bụ fragment; dozie ya: \"I was late because the bus was late.\" 3) Run-on: \"I applied I got the job\" chọrọ full stop, semicolon ma ọ bụ okwu njikọ: \"I applied, and I got the job.\"",
            "4) Okwu ndị ụda ha yiri: their (nke ha), there (ebe), they're (they are: ha na-...); its (nke ya, maka ihe), it's (it is); your (nke gị), you're (you are). 5) Mkpụrụedemede ukwu na apostrophe ('): aha mmadụ, ebe na ụbọchị na-amalite na mkpụrụedemede ukwu (Monday, Texas); apostrophe na-egosi onye nwe ihe (the manager's office) ma ọ bụ mkpụrụedemede fọrọ (don't), ọ bụghị ọtụtụ (two shifts, ọ bụghị two shift's).",
            "Okwu njikọ (transition) na-ejikọ echiche: however (mana), therefore (ya mere), for example (dịka ọmụmaatụ), in addition (na mgbakwunye). Họrọ nke dabara n'ihe ahịrịokwu abụọ ahụ pụtara."
          ],
          steps: ["Gụọ ahịrịokwu ahụ niile, ọ bụghị naanị akụkụ e dọrọ ahịrị n'okpuru ya.", "Chọta subject na verb, ma lelee na ha kwekọrọ.", "Lelee na ọ bụ ahịrịokwu zuru ezu, ọ bụghị ahịrịokwu abụọ e jikọrọ n'ụzọ na-ezighi ezi.", "Lelee okwu ndị ụda ha yiri, mkpụrụedemede ukwu na apostrophe.", "Gụọ nhọrọ ị họrọ n'ime ahịrịokwu ahụ ọzọ ka ị hụ na ọ dị mma."],
          words: [["Subject", "onye ma ọ bụ ihe ahịrịokwu na-ekwu maka ya."], ["Verb", "okwu omume ma ọ bụ ịdị, dị ka runs ma ọ bụ is."], ["Fragment", "akụkụ ahịrịokwu na-enweghị ike iguzo naanị ya."], ["Run-on", "ahịrịokwu abụọ e jikọrọ n'enweghị akara edemede ziri ezi."], ["Transition", "okwu na-ejikọ echiche abụọ, dị ka however ma ọ bụ therefore."]],
          slides: [
            { title: "Mperi ise ị ga-achọpụta", bullets: ["Subject na verb na-ekwekọghị", "Fragment na run-on", "Okwu ndị ụda ha yiri", "Mkpụrụedemede ukwu na apostrophe"] },
            { title: "Okwu ndị ụda ha yiri", bullets: ["their / there / they're", "its / it's", "your / you're"] },
            { title: "Apostrophe", bullets: ["Onye nwe ihe: the manager's office", "Mkpụrụedemede fọrọ: don't, it's", "Ọ bụghị maka ọtụtụ nkịtị: two shifts"] },
            { title: "Okwu njikọ", bullets: ["however = mana", "therefore = ya mere", "for example, in addition"] }
          ],
          tryIt: "Dozie ahịrịokwu ọ bụla. 1) \"The box of gloves are on the shelf.\" 2) \"Their going to the job fair on friday.\" 3) \"I finished my shift I went home.\" 4) \"The company changed it's hours.\" 5) \"Because I wanted to learn.\" Azịza: 1) \"is\" (subject bụ box). 2) \"They're going to the job fair on Friday.\" 3) \"I finished my shift, and I went home.\" 4) \"its\" (nke ya). 5) Tinye isi echiche: \"I signed up for class because I wanted to learn.\"",
          youCanNow: "ịchọpụta na idozi mperi grammar na akara edemede a na-ahụkarị n'ule ahụ.",
          quickCheck: [
            { objective: "O3", q: "Kedu ahịrịokwu ziri ezi?", options: ["The team of nurses are ready.", "The team of nurses were ready.", "The team of nurses is ready.", "The team of nurses be ready."], answer: 2, why: "Subject bụ team (otu otu), ya mere verb bụ is." },
            { objective: "O3", q: "Kedu okwu dabara: \"___ going to start training on Monday.\"", options: ["There", "They're", "Their", "Thier"], answer: 1, why: "They're pụtara they are: ha ga-amalite ọzụzụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịgụ nke ọma na ide ihe n'ụzọ ziri ezi",
        questions: [
          { objective: "O1", q: "Dị ka ged.com si kwuo, kedu ụdị ajụjụ dị n'ule asụsụ GED?", options: ["Naanị eziokwu ma ọ bụ ụgha", "Naanị azịza a na-ekwu n'olu", "Naanị edemede", "Multiple choice, drag and drop, ịhọrọ otu ebe, drop-down na otu edemede"], answer: 3, why: "Ged.com depụtara ụdị ajụjụ ndị a na otu extended response." },
          { objective: "O2", q: "Akụkọ kwuru na ụlọ ọgwụ tinyere oge Satọdee, ndị nne na nna na-arụ ọrụ bịara okpukpu abụọ. Kedu nchoputa a kwadoro?", options: ["Ọtụtụ ndị nne na nna na-arụ ọrụ enweghị ike ịbịa n'ụbọchị izu ọrụ", "Ụlọ ọgwụ ahụ ga-emechi n'oge na-adịghị anya", "Satọdee bụ ụbọchị ezumike", "Ndị dọkịta anaghị amasị Satọdee"], answer: 0, why: "Ndị nne na nna na-arụ ọrụ bịara karịa mgbe e mepere Satọdee, nke na-egosi na ụbọchị izu ọrụ siri ha ike." },
          { objective: "O2", q: "Kedu otu ị ga-esi lelee na azịza gị banyere akụkọ ziri ezi?", options: ["Họrọ azịza kacha ogologo", "Gosi ahịrịokwu dị n'akụkọ ahụ na-egosi ya", "Họrọ azịza kacha masị gị", "Họrọ C mgbe niile"], answer: 1, why: "Azịza ziri ezi bụ nke okwu dị n'akụkọ ahụ na-akwado." },
          { objective: "O3", q: "Kedu ahịrịokwu ziri ezi?", options: ["The store changed it's hours.", "The store changed its hours.", "The store changed its' hours.", "The store changed it is hours."], answer: 1, why: "Its na-enweghị apostrophe pụtara nke ya." },
          { objective: "O3", q: "\"I passed the test I was so happy.\" Gịnị bụ nsogbu ya?", options: ["Ọ bụ run-on; ọ chọrọ full stop ma ọ bụ okwu njikọ", "E dehiere otu okwu", "Ọ chọrọ mkpụrụedemede ukwu na test", "Ọ dịghị nsogbu"], answer: 0, why: "E jikọrọ ahịrịokwu abụọ zuru ezu n'enweghị ihe ọ bụla n'etiti ha." }
        ]
      }
    },
    {
      name: "Isi 2: Arụmụka na extended response",
      lessons: [
        {
          title: "Claim, ihe akaebe na ihe kpatara siri ike",
          objectives: ["O4"],
          minutes: 5,
          goal: "Chọta claim na ihe akaebe n'arụmụka ma kpebie ma ihe akaebe ọ bụla siri ike ma ọ bụ adịghị ike.",
          text: [
            "Arụmụka na-anwa ime ka i kwere ihe. Claim bụ ihe onye dere ya chọrọ ka i kwere. Ihe akaebe bụ ihe o ji egosi na ọ bụ eziokwu.",
            "Ihe akaebe siri ike doro anya, a pụkwara ịlele ya: ọnụ ọgụgụ site na nnyocha ma ọ bụ ndekọ, eziokwu, ma ọ bụ ọkachamara n'ihe ahụ. Ihe akaebe na-adịghị ike bụ mmetụta, akụkọ otu onye e ji anọchi anya mmadụ niile, onye a ma ama nke na-abụghị ọkachamara, ma ọ bụ okwu na-enweghị ihe akaebe.",
            "Ọmụmaatụ e mere eme. Claim: \"Obodo anyị kwesịrị itinye ụzọ bọs na-aga ebe ụlọ ọrụ mmepụta dị.\" Ihe akaebe A: \"Nnyocha county mere n'aka ndị ọrụ 600 chọpụtara na 1 n'ime 4 na-agbaghara ọrụ n'ihi enweghị ụgbọ.\" Siri ike: ọnụ ọgụgụ site na nnyocha. Ihe akaebe B: \"Nwanne nne m kwuru na bọs ahụ ga-adị mma.\" Adịghị ike: echiche otu onye.",
            "Lezie anya maka aghụghọ: okwu dị ka \"onye ọ bụla maara\", ịwakpo mmadụ kama echiche ya, na naanị nhọrọ abụọ mgbe e nwere ọtụtụ."
          ],
          steps: ["Chọta claim: gịnị ka onye dere ya chọrọ ka i kwere?", "Dọọ ahịrị n'okpuru ihe akaebe ọ bụla.", "Jụọ: ọ doro anya, enwere m ike ịlele ya?", "Kpebie ma ọ siri ike ma ọ bụ adịghị ike, ma dee otu ihe kpatara ya."],
          words: [["Arụmụka", "ihe e dere ede na-anwa ime ka i kwere ihe."], ["Claim", "isi okwu onye dere ihe chọrọ ka i kwere."], ["Ihe akaebe siri ike", "eziokwu ma ọ bụ ọnụ ọgụgụ doro anya ị nwere ike ịlele, ma ọ bụ ọkachamara n'ihe ahụ."], ["Ihe akaebe na-adịghị ike", "mmetụta, otu akụkọ, ma ọ bụ okwu na-enweghị ihe akaebe."]],
          slides: [
            { title: "Akụkụ arụmụka", bullets: ["Claim: ihe onye dere ya chọrọ ka i kwere", "Ihe akaebe: ihe o ji egosi ya"] },
            { title: "Ihe akaebe siri ike", bullets: ["Ọnụ ọgụgụ site na nnyocha ma ọ bụ ndekọ", "Eziokwu ị nwere ike ịlele", "Ọkachamara n'ihe ahụ"] },
            { title: "Ihe akaebe na-adịghị ike", bullets: ["Mmetụta ma ọ bụ \"onye ọ bụla maara\"", "Akụkọ otu onye", "Onye a ma ama na-abụghị ọkachamara"] },
            { title: "Lezie anya maka aghụghọ", bullets: ["Ịwakpo mmadụ, ọ bụghị echiche ya", "Naanị nhọrọ abụọ mgbe e nwere ọtụtụ"] }
          ],
          tryIt: "Arụmụka omume: \"Obodo kwesịrị ịkụ osisi ndị ọzọ n'etiti obodo. Nnyocha obodo tụrụ na okporo ụzọ nwere osisi dị ihe dị ka 10 degrees jụrụ oyi karịa n'oge okpomọkụ. Otu onye ọbụ abụ obodo kwuru na osisi na-adị mma ile anya. Onye ọ bụla na-ekwenyeghị kpọrọ okike asị.\" Chọta claim ma kpebie ike nkwado ọ bụla. Azịza: Claim: kụọ osisi ndị ọzọ n'etiti obodo. Nnyocha obodo: siri ike (ọnụ ọgụgụ a tụrụ site na nnyocha). Onye ọbụ abụ: adịghị ike (ọ bụghị ọkachamara; ọ bụ naanị echiche). \"Onye ọ bụla na-ekwenyeghị kpọrọ okike asị\": adịghị ike (ọ na-awakpo mmadụ kama inye ihe akaebe).",
          youCanNow: "ịchọta claim, ịkewapụ ihe akaebe siri ike na nke na-adịghị ike, ma kwuo ihe kpatara ya.",
          quickCheck: [
            { objective: "O4", q: "Kedu ihe akaebe kacha sie ike na mmemme ọzụzụ ọrụ na-arụ ọrụ?", options: ["Onye isi ya kwuru na ọ dị mma", "Onye a ma ama nwere mmasị na ya", "Ndekọ na-egosi na 70% nke ndị gụchara nwetara ọrụ n'ime ọnwa isii", "Onye ọ bụla maara na ọ na-arụ ọrụ"], answer: 2, why: "Ọ bụ ọnụ ọgụgụ doro anya site na ndekọ a pụrụ ịlele." },
            { objective: "O4", q: "\"Onye agbata obi m dara ọrịa mgbe o risịrị nri ebe ahụ, ya mere ụlọ nri ahụ adịghị mma.\" Ụdị ihe akaebe gịnị ka nke a bụ?", options: ["Ihe akaebe ọkachamara", "Nnyocha", "Data gọọmentị", "Adịghị ike: akụkọ otu onye"], answer: 3, why: "Otu akụkọ anaghị egosi ihe gbasara nri ọ bụla e rere ebe ahụ." }
          ]
        },
        {
          title: "Ịtụnyere arụmụka abụọ na ịhazi edemede gị",
          objectives: ["O4", "O5"],
          minutes: 5,
          goal: "Tụnyere arụmụka abụọ ma dee obere atụmatụ maka extended response.",
          text: [
            "N'ule ahụ, ị ga-agụ akụkọ abụọ na-akwado akụkụ dị iche iche. Ged.com kwuru na ị ga-enyocha ha, kpebie arụmụka nwere ihe akaebe kacha kwenye ekwenye, ma kọwaa ihe kpatara ya. A naghị ajụ gị akụkụ ị kwadoro; ị na-ekpe ikpe n'ihe akaebe.",
            "Jiri chaatị dị mfe. Maka akụkọ ọ bụla, dee claim, ihe akaebe, na akara maka siri ike ma ọ bụ adịghị ike. Akụkọ nwere ihe akaebe siri ike karịa na-abụkarị nhọrọ gị, ọbụlagodi ma ọ bụrụ na gị onwe gị kwenyere n'akụkụ nke ọzọ.",
            "Were ihe dị ka nkeji 10 hazie ya. Atụmatụ gị: 1) thesis gị, otu ahịrịokwu na-ekwu arụmụka nwere nkwado ka mma; 2) ihe akaebe abụọ ma ọ bụ atọ site n'akụkọ ahụ na ihe mere ha ji sie ike; 3) otu adịghị ike n'akụkọ nke ọzọ.",
            "Akụkọ omume dị na Nkuzi 6. Taa, mee omume chaatị ahụ site n'iji edemede echiche abụọ dị mkpụmkpụ na-ekwekọghị, dị ka akwụkwọ ozi abụọ e degaara onye nchịkọta akụkọ (letters to the editor)."
          ],
          steps: ["Gụọ akụkọ abụọ ahụ ma chọta claim nke ọ bụla.", "Mee chaatị nwere kọlụm abụọ: ihe akaebe dị n'akụkọ ọ bụla.", "Kaa akara ihe akaebe ọ bụla ma ọ siri ike ma ọ bụ adịghị ike.", "Dee otu ahịrịokwu thesis: arụmụka nwere nkwado ka mma.", "Depụta ihe akaebe ị ga-eji na paragraf ọ bụla dị n'etiti."],
          words: [["Thesis", "otu ahịrịokwu na-ekwu isi okwu gị; n'edemede GED, arụmụka nwere nkwado ka mma."], ["Nyochaa (analyze)", "lee akụkụ ya anya nke ọma ka ị hụ otu ha si arụ ọrụ."], ["Paragraf etiti (body paragraph)", "paragraf dị n'etiti na-enye otu ihe kpatara ya na ihe akaebe."]],
          slides: [
            { title: "Ihe edemede ahụ na-arịọ", bullets: ["Gụọ akụkọ abụọ na-ekwekọghị", "Kpebie nke nwere ihe akaebe kacha kwenye ekwenye", "Kọwaa ihe kpatara ya; ọ bụghị akụkụ masịrị gị"] },
            { title: "Mee chaatị", bullets: ["Claim nke akụkọ ọ bụla", "Ihe akaebe ya", "Siri ike ka ọ bụ adịghị ike?"] },
            { title: "Hazie ya n'ihe dị ka nkeji 10", bullets: ["Thesis: arụmụka nwere nkwado ka mma", "Ihe akaebe 2 ma ọ bụ 3 na ihe mere ha ji sie ike", "Otu adịghị ike n'akụkọ nke ọzọ"] }
          ],
          sources: [GED_RLA],
          tryIt: "Omume: Akụkọ 1 kwuru na izu ọrụ nwere ụbọchị anọ dị mma, ma kpọọ ndekọ otu ụlọ ọrụ: ụbọchị ọrịa si na 6 daa na 4 maka onye ọrụ ọ bụla n'otu afọ. Akụkọ 2 kwuru na ọ dịghị mma n'ihi na \"ndị ọrụ ga-aghọ ndị umengwụ\", otu onye njikwa \"nwere mmetụta\" na ọrụ ga-ebelata. Dee thesis. Azịza: \"Akụkọ 1 nwere nkwado ka mma n'ihi na ọ na-eji ndekọ ụlọ ọrụ banyere ụbọchị ọrịa, ebe Akụkọ 2 na-adabere na mmetụta na-enweghị data.\"",
          youCanNow: "ịtụnyere arụmụka abụọ site na chaatị ma dee thesis na atụmatụ maka edemede gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka extended response GED na-arịọ gị ime?", options: ["Ide akụkọ ndụ gị", "Ikpebi arụmụka nwere ihe akaebe kacha kwenye ekwenye ma kọwaa ihe kpatara ya", "Ịchịkọta akwụkwọ akụkọ ifo", "Ide abụ uri"], answer: 1, why: "Ged.com kwuru na ị na-enyocha akụkọ abụọ ma kọwaa arụmụka nwere ihe akaebe ka mma." },
            { objective: "O4", q: "Ị kwenyere n'Akụkọ B, mana Akụkọ A nwere ihe akaebe siri ike karịa. Kedu nke thesis gị kwesịrị ịhọrọ?", options: ["Akụkọ A, n'ihi na o nwere nkwado ka mma", "Akụkọ B, n'ihi na ị kwenyere na ya", "Ọ dịghị nke ọ bụla", "Ha abụọ n'otu ọkwa"], answer: 0, why: "Edemede ahụ na-ekpe ikpe n'ihe akaebe, ọ bụghị n'echiche gị banyere isiokwu ahụ." }
          ]
        },
        {
          title: "Ide extended response n'ime nkeji 45",
          objectives: ["O5"],
          minutes: 6,
          goal: "Dee extended response n'oge a kara aka nke na-ahọrọ arụmụka nwere nkwado ka mma ma kọwaa ihe kpatara ya site n'ihe akaebe.",
          text: [
            "Jiri usoro dị mfe. Mmalite (ahịrịokwu 2 ruo 3): kpọọ aha isiokwu ahụ ma nye thesis gị. Paragraf etiti (abụọ ma ọ bụ atọ): nke ọ bụla na-enye otu ihe kpatara ya, na-ehota ma ọ bụ na-akọwa ihe akaebe site n'akụkọ ahụ, ma na-akọwa ihe mere o ji sie ike ma ọ bụ adịghị ike. Njedebe (ahịrịokwu 2): kwughachi thesis gị n'okwu ọhụrụ.",
            "Akụkọ omume (e mere ha maka ihe ọmụmụ a). Akụkọ A, nke onye na-elekọta ọba akwụkwọ obodo: \"Hapụ isi ọba akwụkwọ ka ọ nọrọ n'oghe ruo elekere 9 nke abalị. N'oge nnwale ọnwa atọ, igwe na-agụ ndị na-abata n'ọnụ ụzọ dekọrọ ihe dị ka nleta 340 mgbe elekere 6 nke mgbede gachara kwa izu. Ndekọ kọmputa anyị na-egosi na 6 n'ime 10 oge ịchọ ọrụ mere mgbe elekere 6 nke mgbede gachara. Oge ndị ọzọ ahụ na-efu ihe na-erughị 1% nke mmefu ego anyị.\" Akụkọ B, nke onye otu kansụl: \"Mechie ya n'elekere 6 nke mgbede. Agafere m ya otu mgbede, ọ dị ka ọ tọgbọrọ chakoo. Ndị mmadụ nwere ike iji ekwentị ha. Ọ bụ imefu ego n'efu.\"",
            "Atụmatụ oge: ihe dị ka nkeji 10 maka ịgụ na ịhazi, nkeji 30 maka ide, nkeji 5 maka ịgụgharị. Jiri okwu njikọ (first, in addition, however, therefore). Dee n'ahịrịokwu zuru ezu na n'okwu nke gị, ma hota obere akụkụ nke akụkọ ndị ahụ dị ka ihe akaebe.",
            "Gụgharịa maka mperi ndị dị na Nkuzi 3: subject na verb, run-on, okwu ndị ụda ha yiri, mkpụrụedemede ukwu na apostrophe."
          ],
          steps: ["Tọọ elekere nkeji 45.", "Gụọ akụkọ abụọ ahụ ma dejupụta chaatị siri ike ma ọ bụ adịghị ike gị (ihe dị ka nkeji 10).", "Dee mmalite ya na thesis gị.", "Dee paragraf etiti abụọ ma ọ bụ atọ, nke ọ bụla nwere ihe akaebe na ihe mere o ji sie ike ma ọ bụ adịghị ike.", "Dee obere njedebe.", "Gụgharịa ya na nkeji 5 ikpeazụ."],
          words: [["Mmalite (introduction)", "paragraf mbụ; ọ na-akpọ aha isiokwu ma nye thesis gị."], ["Njedebe (conclusion)", "paragraf ikpeazụ; ọ na-ekwughachi isi okwu gị."], ["Hota (quote)", "detuo okwu ole na ole kpọmkwem site n'akụkọ ahụ, n'ime akara nhota."], ["Gụgharịa (proofread)", "gụọ ihe i dere ọzọ ka ị chọta ma dozie mperi."]],
          slides: [
            { title: "Usoro edemede", bullets: ["Mmalite nwere thesis gị", "Paragraf etiti abụọ ma ọ bụ atọ nwere ihe akaebe", "Obere njedebe"] },
            { title: "Paragraf etiti ọ bụla", bullets: ["Otu ihe kpatara ya", "Ihe akaebe site n'akụkọ ahụ", "Ihe mere o ji sie ike, ma ọ bụ ihe mere akụkụ nke ọzọ adịghị ike"] },
            { title: "Atụmatụ oge nkeji 45", bullets: ["Ihe dị ka nkeji 10: gụọ ma hazie", "Ihe dị ka nkeji 30: dee", "Ihe dị ka nkeji 5: gụgharịa"] }
          ],
          tryIt: "Ọrụ ikpeazụ: tọọ elekere nkeji 45 ma dee extended response gị banyere akụkọ ọba akwụkwọ dị n'elu. Mgbe ahụ gụgharịa ya ma tụọ akara ya site na rubric. Thesis ọmụmaatụ: \"Akụkọ A nwere nkwado ka mma n'ihi na ọ na-eji ọnụ ọgụgụ nleta na ndekọ kọmputa nke ọba akwụkwọ n'onwe ya, ebe Akụkọ B na-adabere n'ihe otu onye hụrụ otu mgbede na echiche.\" Ihe akaebe siri ike ị ga-eji: ihe dị ka nleta 340 mgbe elekere 6 nke mgbede gachara kwa izu; 6 n'ime 10 oge ịchọ ọrụ mgbe elekere 6 nke mgbede gachara; ọ na-efu ihe na-erughị 1% nke mmefu ego. Adịghị ike nke B: otu nleta, enweghị ọnụ ọgụgụ.",
          youCanNow: "ide extended response zuru ezu n'oge a kara aka nke na-ekpe ikpe n'arụmụka abụọ site n'ihe akaebe ha.",
          quickCheck: [
            { objective: "O5", q: "Gịnị kwesịrị ịdị na mmalite gị?", options: ["Ndepụta iwu grammar", "Ihe akaebe niile", "Isiokwu ahụ na thesis gị", "Aha gị na adreesị gị"], answer: 2, why: "Mmalite na-akpọ aha isiokwu ma kwuo arụmụka nwere nkwado ka mma." },
            { objective: "O5", q: "N'akụkọ ọba akwụkwọ ahụ, kedu ihe akaebe kacha sie ike?", options: ["\"Ọ dị ka ọ tọgbọrọ chakoo\" otu mgbede", "\"Ndị mmadụ nwere ike iji ekwentị ha\"", "\"Ọ bụ imefu ego n'efu\"", "Igwe ọnụ ụzọ dekọrọ ihe dị ka nleta 340 mgbe elekere 6 nke mgbede gachara kwa izu"], answer: 3, why: "Ọ bụ ọnụ ọgụgụ doro anya site na ndekọ a pụrụ ịlele." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Arụmụka na extended response",
        questions: [
          { objective: "O4", q: "Gịnị bụ claim n'arụmụka?", options: ["Isi okwu onye dere ya chọrọ ka i kwere", "Aha ya", "Ahịrịokwu kacha ogologo", "Mperi grammar"], answer: 0, why: "Claim bụ ihe onye dere ya na-anwa ime ka i kwere." },
          { objective: "O4", q: "\"Ndị chọrọ ka ọba akwụkwọ nọrọ n'oghe ogologo oge bụ naanị ndị umengwụ.\" Gịnị dị njọ na nkwado a?", options: ["Ọ na-eji ọnụ ọgụgụ karịrị akarị", "Ọ na-ehota ọkachamara", "Ọ na-awakpo mmadụ kama inye ihe akaebe", "Ọ dịghị ihe; ọ bụ ihe akaebe siri ike"], answer: 2, why: "Ịwakpo ndị na-ekwekọghị abụghị ihe akaebe banyere echiche ahụ." },
          { objective: "O5", q: "Ihe dị ka oge ole ka ị ga-eji gụọ ma hazie n'edemede nkeji 45?", options: ["Nkeji 0", "Ihe dị ka nkeji 40", "Ihe dị ka nkeji 2", "Ihe dị ka nkeji 10"], answer: 3, why: "Ihe dị ka nkeji 10 maka ịhazi na-ahapụ ihe dị ka nkeji 30 maka ide na 5 maka ịgụgharị." },
          { objective: "O5", q: "Gịnị ka paragraf etiti siri ike nwere?", options: ["Otu ihe kpatara ya, ihe akaebe site n'akụkọ ahụ na ihe mere o ji sie ike", "Naanị echiche gị", "Isiokwu ọhụrụ", "Ndepụta okwu na-enweghị ahịrịokwu"], answer: 0, why: "Paragraf etiti ọ bụla na-ejikọ otu ihe kpatara ya na ihe akaebe ma kọwaa ya." },
          { objective: "O1", q: "Ebee ka ị ga-elele iwu ule GED, oge na ụgwọ ugbu a?", options: ["Ihe enyi gị na-echeta", "Ozi na soshal midia", "Ged.com na ọfịs agụmakwụkwọ ndị okenye nke steeti gị", "Akwụkwọ ọgụgụ ochie"], answer: 2, why: "Iwu na ụgwọ na-agbanwe; weebụsaịtị gọọmentị na steeti gị nwere nke ugbu a." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe Ule GED: Reasoning Through Language Arts",
    questions: [
      { objective: "O1", q: "Kedu ule ihe ọmụmụ a na-akwado gị maka ya?", options: ["Ule GED Reasoning Through Language Arts", "Ule akwụkwọ ịnya ụgbọala", "Ule ịpị mkpụrụedemede", "Ajụjụ ọnụ maka ịbụ nwa amaala"], answer: 0, why: "Ihe ọmụmụ a na-akwado gị maka ule GED RLA; ọ naghị enye asambodo ahụ." },
      { objective: "O1", q: "Kedu ule ọzọ dị ka asambodo ụlọ akwụkwọ sekọndrị ụfọdụ steeti na-eji?", options: ["SAT", "HiSET", "CDL", "ESL"], answer: 1, why: "HiSET bụ ule ọzọ dị ka asambodo ụlọ akwụkwọ sekọndrị e ji n'ụfọdụ steeti." },
      { objective: "O1", q: "Gịnị bụ nzọụkwụ mbụ kacha mma maka atụmatụ ọmụmụ?", options: ["Debanye aha maka ule echi", "Hapụ akụkụ ndị siri ike", "Were ule nlele n'efu ka ị hụ ebe ị nọ", "Mụọ naanị n'abalị tupu ule"], answer: 2, why: "Ule nlele na-egosi nka ndị chọrọ omume karịa." },
      { objective: "O1", q: "Dị ka ged.com si kwuo, ogologo oge ole ka akụkụ edemede nke ule RLA na-ewe?", options: ["Nkeji 10", "Awa 2", "Ọ dịghị edemede", "Nkeji 45"], answer: 3, why: "Ged.com depụtara nkeji 45 maka extended response." },
      { objective: "O2", q: "Isi echiche nke akụkọ bụ:", options: ["Okwu mbụ", "Ihe akụkọ ahụ na-ekwu maka ya karịsịa", "Okwu kacha sie ike", "Naanị ahịrịokwu ikpeazụ"], answer: 1, why: "Isi echiche bụ akụkọ ahụ e kwuru n'otu ahịrịokwu." },
      { objective: "O2", q: "Akụkọ kwuru na ụlọ ọrụ mmepụta tinyere ọzụzụ nchekwa, mmerụ ahụ wee belata ọkara. Kedu nkọwa na-akwado \"ọzụzụ mere ka ụlọ ọrụ ahụ dị nchebe karịa\"?", options: ["Mmerụ ahụ belatara ọkara", "Ụlọ ọrụ ahụ buru ibu", "Ọzụzụ ahụ dị na Mọnde", "Ụlọ ọrụ ahụ na-eme oche"], answer: 0, why: "Mbelata mmerụ ahụ bụ ihe akaebe na nchekwa ka mma." },
      { objective: "O2", q: "Kedu nchoputa a kwadoro site na: \"Ahịrị ndị mmadụ n'ụlọ nri enyemaka (food bank) mụbara okpukpu abụọ mgbe ụlọ ọrụ mmepụta ahụ mechiri\"?", options: ["Ụlọ nri enyemaka ahụ na-emechi", "Ọnụ ahịa nri dara", "Ọtụtụ ndị tụfuru ọrụ ha chọrọ enyemaka nri", "Ụlọ ọrụ mmepụta ahụ meghere ọzọ"], answer: 2, why: "Oge mmechi ahụ na ahịrị toro ogologo na-akwado nchoputa a." },
      { objective: "O3", q: "Kedu ahịrịokwu ziri ezi?", options: ["The list of tasks are on the board.", "The list of tasks is on the board.", "The list of tasks were on the board.", "The list of tasks be on the board."], answer: 1, why: "Subject bụ list (otu ndepụta), ya mere verb bụ is." },
      { objective: "O3", q: "Kedu ahịrịokwu jiri mkpụrụedemede ukwu n'ụzọ ziri ezi?", options: ["I start work on monday in ohio.", "I Start Work on Monday in Ohio.", "i start work on Monday in ohio.", "I start work on Monday in Ohio."], answer: 3, why: "Ụbọchị na ebe na-ewere mkpụrụedemede ukwu; okwu ndị ọzọ anaghị ewere." },
      { objective: "O3", q: "Kedu nke bụ fragment?", options: ["I got the job.", "Because the shift ended late.", "She called the manager.", "We passed."], answer: 1, why: "Ọ nweghị ike iguzo naanị ya; ọ chọrọ isi echiche, dị ka \"I was tired because the shift ended late.\"" },
      { objective: "O3", q: "Họrọ okwu ziri ezi: \"___ a good day to apply.\"", options: ["Its", "Its'", "It's", "It"], answer: 2, why: "It's pụtara it is: ọ bụ ụbọchị ọma iji tinye akwụkwọ." },
      { objective: "O4", q: "Kedu nke bụ ihe akaebe siri ike?", options: ["Akụkọ steeti na-egosi ọrụ nọọsụ ọhụrụ 2,000 n'afọ gara aga", "\"Amaara m ya naanị\"", "Echiche onye a ma ama na fim banyere ọrụ nọọsụ", "\"Onye ọ bụla na-ekwu ya\""], answer: 0, why: "Ọnụ ọgụgụ doro anya site n'akụkọ gọọmentị bụ ihe a pụrụ ịlele." },
      { objective: "O4", q: "\"Ma anyị kwụsị ụzọ bọs niile ma ọ bụ obodo ahụ ga-enweghị ego.\" Gịnị bụ aghụghọ ya?", options: ["Ọ na-eji nnyocha", "Ọ na-ehota ọkachamara", "Ọ bụ eziokwu", "Ọ na-enye naanị nhọrọ abụọ mgbe e nwere ọtụtụ"], answer: 3, why: "E nwere nhọrọ ndị ọzọ, dị ka ịkwụsị ụfọdụ ụzọ ma ọ bụ ịchọta ego ọhụrụ." },
      { objective: "O4", q: "Gịnị mere akụkọ otu onye ji bụrụ ihe akaebe na-adịghị ike maka nnukwu claim?", options: ["Akụkọ bụ ụgha mgbe niile", "Otu ihe mere nwere ike ọ gaghị abụ eziokwu maka ọtụtụ mmadụ", "Akụkọ dị ogologo nke ukwuu", "Ọ megidere iwu"], answer: 1, why: "Otu ọmụmaatụ anaghị egosi ihe bụ eziokwu n'ozuzu." },
      { objective: "O4", q: "Iji kpee ikpe n'arụmụka, ị ga-ebu ụzọ chọta:", options: ["Okwu kacha ogologo", "Afọ onye dere ya", "Claim na ihe akaebe ya", "Mperi grammar"], answer: 2, why: "Ị na-ekpe ikpe n'arụmụka site n'otu ihe akaebe ya si kwado claim ya." },
      { objective: "O5", q: "N'edemede GED, thesis gị kwesịrị ikwu:", options: ["Arụmụka nwere nkwado ka mma", "Agba kacha masị gị", "Onye dere ihe masịrị gị", "Na ha abụọ zuru oke"], answer: 0, why: "Ọrụ ahụ bụ ikpebi arụmụka nwere ihe akaebe kacha kwenye ekwenye." },
      { objective: "O5", q: "Kedu ezigbo ụzọ isi jiri ihe akaebe n'edemede gị?", options: ["Detuo akụkọ niile", "Chepụta ọnụ ọgụgụ", "Hapụ ihe akaebe", "Hota obere akụkụ ma kọwaa ihe mere o ji sie ike"], answer: 3, why: "Obere nhota na nkọwa gị na-egosi na i nyochara ihe akaebe ahụ." },
      { objective: "O5", q: "Gịnị ka ị na-eme na nkeji ole na ole ikpeazụ nke edemede?", options: ["Malite edemede ọhụrụ", "Gụgharịa maka grammar na akara edemede", "Hichapụ thesis gị", "Pụọ n'ọnụ ụlọ"], answer: 1, why: "Ịgụgharị na-achọpụta mperi ndị na-efu akara." },
      { objective: "O5", q: "Kedu njedebe kacha mma?", options: ["\"The end.\"", "\"Ọba akwụkwọ na-amasị m.\"", "\"N'ihi na Akụkọ A na-eji ndekọ na ọnụ ọgụgụ, Akụkọ B na-eji naanị echiche, Akụkọ A nwere nkwado ka mma.\"", "\"Ụfọdụ ndị kwenyere, ụfọdụ ekwenyeghị.\""], answer: 2, why: "Ọ na-ekwughachi thesis na isi ihe kpatara ya n'okwu ọhụrụ." },
      { objective: "O2", q: "Mgbe ị maghị azịza banyere akụkọ nke ọma, ị kwesịrị:", options: ["Ilegharị anya chọta ahịrịokwu na-egosi azịza", "Ịhọrọ nhọrọ kacha mkpụmkpụ", "Ịhapụ ịgụ ma kọọ nkọ", "Ịhọrọ azịza nwere okwu kacha sie ike"], answer: 0, why: "Akụkọ ahụ na-akwado azịza ziri ezi, ya mere laghachi chọta ihe akaebe ya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 3, 4, 6, 7, 10, 11, 13, 15, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, mee omume akụkụ ahụ ma dee edemede ọhụrụ n'akụkọ abụọ ọhụrụ.",
    criteria: [
      { name: "Thesis doro anya", objective: "O5", notYet: "Enweghị thesis, ma ọ bụ ọ na-ekwu akụkụ onye dere ya kwenyere kama nke nwere nkwado ka mma.", meets: "Mmalite nwere otu ahịrịokwu na-ekwu arụmụka nwere nkwado ka mma.", exceeds: "Thesis ahụ na-akpọkwa aha isi ihe kpatara ya, dị ka ndekọ megide echiche." },
      { name: "Ihe akaebe site n'akụkọ", objective: "O4", notYet: "Enweghị ihe akaebe site n'akụkọ ndị ahụ, ma ọ bụ e chepụtara ihe akaebe.", meets: "Opekata mpe ihe akaebe abụọ site n'akụkọ ndị ahụ, a kọwara nke ọ bụla dị ka siri ike ma ọ bụ adịghị ike.", exceeds: "Ọ na-egosikwa aghụghọ ma ọ bụ adịghị ike n'akụkọ nke ọzọ ma kọwaa ya." },
      { name: "Nhazi", objective: "O5", notYet: "Otu ngọngọ ederede, ma ọ bụ echiche na-awụgharị.", meets: "Mmalite, opekata mpe paragraf etiti abụọ na njedebe, ya na okwu njikọ.", exceeds: "Paragraf etiti ọ bụla na-amalite na ahịrịokwu isiokwu doro anya nke na-ejikọ na thesis." },
      { name: "Grammar na akara edemede", objective: "O3", notYet: "Ọtụtụ mperi na-eme ka o sie ike ịgụ.", meets: "Mperi nta ole na ole, mana ihe ọ pụtara na-edo anya mgbe niile.", exceeds: "Ọ fọrọ nke nta ka ọ ghara inwe mperi; okwu ndị ụda ha yiri, mkpụrụedemede ukwu na apostrophe niile ziri ezi." },
      { name: "Ịgụ ihe n'ụzọ ziri ezi", objective: "O2", notYet: "Ọ ghọtaghị isi echiche nke akụkọ n'ụzọ ziri ezi.", meets: "Ọ na-akọwa isi echiche nke akụkọ ọ bụla n'ụzọ ziri ezi.", exceeds: "Ọ na-eji obere nhota kpọmkwem dabara n'ihe akụkọ ndị ahụ kwuru." },
      { name: "Atụmatụ na oge", objective: "O1", notYet: "O mechaghị n'ime nkeji 45, o nweghịkwa atụmatụ ọmụmụ.", meets: "O mechara n'ime nkeji 45, atụmatụ ọmụmụ nwekwara ụbọchị ruo izu ule.", exceeds: "O debanyekwara aha maka ule omume GED Ready ma ọ bụ ezi ụbọchị ule na ged.com." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ karịa n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe weere GED Ready ma ọ bụ ule nlele n'efu nke ged.com n'ime ụbọchị 30",
      "Ndị na-amụ ihe debanyere aha ma ọ bụ gafere ule asụsụ GED n'ime ụbọchị 90 (ha n'onwe ha kọrọ)",
      "Mmemme ndị mmekọ na-akọ na ndị na-amụ ihe ka ukwuu na-aga n'ihu na ọzụzụ ọrụ ma ọ bụ klas kọleji"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị, ma ọ bụ nkuzi e biri ebi",
      "Akwụkwọ na mkpịsị ode maka chaatị, azịza omume na edemede",
      "Elekere (elekere ekwentị na-arụ ọrụ) maka edemede nkeji 45",
      "Ule nlele n'efu nke ged.com; GED Ready ma ọ bụrụ na onye na-amụ ihe họrọ ịzụta ya",
      "Ihe dị ka nkeji 90 n'ozuzu maka nkuzi na nnwale, gbakwunyere nkeji 45 maka edemede ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite na ule mbido na ule nlele RLA n'efu nke ged.com, wee kewaa ndị na-amụ ihe dị ka nka ha kacha chọọ si dị.",
      "Mee otu chaatị siri ike ma ọ bụ adịghị ike n'olu dị elu tupu ndị na-amụ ihe anwaa nke ha.",
      "Mee ka ndị na-amụ ihe gụọ edemede n'olu dị elu n'abụọ n'abụọ ma nye ndụmọdụ n'otu ahịrị rubric n'otu oge.",
      "Lelee ule steeti gị na-eji (GED ma ọ bụ HiSET) ma kesaa ebe ule dị nso na enyemaka ụgwọ ọ bụla.",
      "Mee ka omume ghara ịdị egwu; ọtụtụ ndị okenye na-amụ ihe ka na-atụ egwu ule site n'oge ha nọ n'ụlọ akwụkwọ."
    ]
  }
};

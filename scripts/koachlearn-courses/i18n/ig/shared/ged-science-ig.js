"use strict";

// Koach Learn course (Igbo translation of shared/ged-science.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: isiokwu ule (oge, ụdị ajụjụ, igwe mgbakọ)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SCIENCE = { name: "GED Testing Service: ule Sayensị", url: "https://ged.com/about_test/test_subjects/science/" };
const GED_SCORES = { name: "GED Testing Service: akara ule", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: ule nlereanya n'efu (Bekee na Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, ule omume gọọmentị nke GED", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, ule ọzọ yiri asambodo ụlọ akwụkwọ sekọndrị (saịtị gọọmentị ya)", url: "https://hiset.org/" };

module.exports = {
  id: "ged-science-ig",
  lang: "ig",
  translationOf: "ged-science",
  category: "Workforce Development",
  name: "Nkwadebe Ule GED: Sayensị",
  skills: "Ịgụ akụkụ edemede sayensị, Ịhụ ihe na-agbanwe (variables) na nnwale sayensị, Ịgụ tebụl na eserese, Mgbakọ sayensị (mean, median, range, usoro mgbakọ), Ịtụle nkwubi okwu, Ime atụmatụ ọmụmụ",
  outcome: "ịgụ akụkụ edemede sayensị, tebụl ma ọ bụ eserese ma zaa ajụjụ dị ka nke GED banyere ya, ịkpọ aha ihe na-agbanwe (variables) na nnwale sayensị, ime mgbakọ sayensị ule ahụ na-ajụ, na ịmata ma data ahụ ọ na-akwado nkwubi okwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye na-akwado maka ule Sayensị GED: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị bụbu ndị agha, ndị ntorobịa, ndị si mba ọzọ bịa na onye ọ bụla na-alọghachi n'ịmụ ihe. Ọ dịghị mkpa ka ị bụrụ ọkachamara sayensị. Ule ahụ bụ karịsịa banyere ịgụ sayensị, ịghọta nnwale sayensị na iji nọmba na eserese arụ ọrụ.",
    "Ihe ọmụmụ a na-akwado gị maka ule ahụ. Ọ naghị enye gị asambodo GED. GED Testing Service na-eme ule ahụ, steeti gị na-esetịkwa iwu maka iwere ya. Ụfọdụ steeti na-eji ule ọzọ a na-akpọ HiSET. Lelee ged.com na ọfịs agụmakwụkwọ ndị okenye nke steeti gị maka iwu, ụgwọ na ebe ule nke ugbu a.",
    "Nkuzi ọ bụla na-akụzi otu nka site n'ọmụmaatụ a rụchara arụcha na omume \"Nwalee ya ugbu a\" nwere azịza a kọwara akọwa, wee nwee obere nnwale ajụjụ abụọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe.",
    "Ọrụ ikpeazụ bụ obere nnwale sayensị nke gị n'enweghị ihe egwu na kichin: ị ga-ahazi nnwale ziri ezi, dee data n'ime tebụl, chọta nkezi, see eserese ma dee nkwubi okwu nke data ahụ na-akwado."
  ],
  finalTask: "Hazie ma mee obere nnwale sayensị n'enweghị ihe egwu na kichin (dịka ọmụmaatụ: ọ̀ bụ ịkwagharị mmiri na-agbanwe ka shuga si agbaze ngwa ngwa na mmiri?). Dee ajụjụ na hypothesis, kpọọ aha ihe na-agbanwe nke independent, dependent na controlled, mee nnwale ọ bụla ugboro atọ, dee nsonaazụ n'ime tebụl, chọta nkezi (mean) maka otu ọ bụla, see eserese ogwe (bar graph), ma dee nkwubi okwu ahịrịokwu abụọ nke data ahụ na-akwado. Tinye atụmatụ ọmụmụ GED gị nwere ụbọchị n'ala ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-akwado maka ule Sayensị GED: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị bụbu ndị agha, ndị ntorobịa hapụrụ ụlọ akwụkwọ, ndị si mba ọzọ bịa na ndị okenye na-alọghachi n'ịmụ ihe mgbe ọtụtụ afọ gachara.",
    startingPoint: "Ha nwere ike ịgụ ihe e dere kwa ụbọchị ma mee mgbakọ dị mfe. Ọtụtụ amụbeghị sayensị n'ọtụtụ afọ, ma na-eche na ọ siri ike ma ọ bụ jupụta n'ihe a ga-eburu n'isi. Ụfọdụ ka na-ewuli obi ike ha na Bekee ma ọ bụ mgbakọ.",
    gap: "Ule Sayensị GED bụ banyere ịgụ edemede sayensị, ịghọta otu nnwale sayensị si arụ ọrụ, na iji nọmba, tebụl na eserese. Ndị a bụ nka a pụrụ ịmụta, a na-ejikwa ha arụ ọrụ na ahụike, ụlọ nrụpụta ngwaahịa, ụlọ nyocha (lab) na ọrụ aka.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu sayensị ọ bụla",
      "Ngwaọrụ: ekwentị, kọmputa ọba akwụkwọ, ma ọ bụ akwụkwọ na mkpịsị ode; igwe mgbakọ dị mfe na-enyere aka",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ, oge ịhụ ndị ọrụ na ezinụlọ",
      "Nchekwa: nnwale n'ụlọ na-eji naanị mmiri, shuga, nnu na mmiri pọmpụ nke dị ka ụlọ ma ọ bụ dị ọkụ nwa ntakịrị; enweghị okpomọkụ, ọkụ ma ọ bụ kemịkalụ",
      "Iwu ule, ụgwọ na ule steeti ọ bụla na-eji (GED ma ọ bụ HiSET) na-agbanwe; ndị na-amụ ihe na-elele ged.com na steeti ha"
    ],
    prerequisites: "Ọ dịghị. Ndị chọrọ enyemaka na nkezi (average) ma ọ bụ ịgụ eserese nwere ike iwere ihe ọmụmụ GED Math ma ọ bụ ihe ọmụmụ mgbakọ kwa ụbọchị n'otu oge ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji weebụsaịtị gọọmentị GED", action: "idepụta akụkụ, ụdị ajụjụ, oge na ngwaọrụ nke ule Sayensị GED ma dee atụmatụ ọmụmụ nwere ụbọchị", standard: "na-akpọ aha akụkụ nka atọ niile ma nwee opekata mpe otu ụbọchị ọmụmụ kwa izu ruo ule ahụ" },
    { id: "O2", condition: "Mgbe e nyere gị obere akụkụ edemede sayensị", action: "ịchọpụta isi echiche na nkwupụta nke ihe akaebe dị n'edemede ahụ na-akwado", standard: "na-egosi ahịrịokwu ma ọ bụ nọmba na-akwado azịza ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị nkọwa nnwale sayensị", action: "ịkpọ aha hypothesis na ihe na-agbanwe nke independent, dependent na controlled", standard: "na-enweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị tebụl ma ọ bụ eserese", action: "ịgụ nọmba, ịkọwa ụzọ data na-aga, na ịhọrọ nkwubi okwu data ahụ na-akwado", standard: "n'atụnyeghị eziokwu ndị na-adịghị na data ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị obere data ma ọ bụ usoro mgbakọ (formula)", action: "ịgbakọ mean, median, mode na range ma ọ bụ iji usoro mgbakọ ahụ chọta azịza", standard: "nwere unit ziri ezi ma na-enweta opekata mpe 4 n'ime 5 ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịgụ sayensị na ịghọta nnwale sayensị",
      lessons: [
        {
          title: "Otu ule Sayensị GED si arụ ọrụ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta akụkụ na ngwaọrụ nke ule Sayensị GED ma dee atụmatụ ọmụmụ nwere ụbọchị.",
          text: [
            "GED nwere ule anọ: Math, Reasoning Through Language Arts (ịgụ na ide Bekee), Science (Sayensị) na Social Studies (ọmụmụ ọha). Ị nwere ike iwere ha otu n'otu. GED Testing Service na-eme ule ahụ. Ụfọdụ steeti na-eji ule ọzọ yiri asambodo ụlọ akwụkwọ sekọndrị, HiSET, ya mere lelee ule steeti gị na-eji.",
            "Na ged.com, e dere na ule Sayensị na-ewe nkeji 90 n'enweghị ezumike. Ọ na-ekpuchi akụkụ nka atọ: ịgụ sayensị ka ị ghọta ihe ọ pụtara, ịhazi na ịkọwa nnwale sayensị, na iji nọmba na eserese na sayensị. Ajụjụ bụ nhọrọ ọtụtụ (multiple choice), dejupụta oghere, dọrọ ma tụba (drag and drop), họrọ ebe na ndepụta na-agbada (drop-down).",
            "Ị na-enweta igwe mgbakọ dị n'ihuenyo na mpempe akwụkwọ ntụaka igwe mgbakọ, ged.com kwukwara na ị nwere ike ibute igwe mgbakọ TI-30XS nke gị n'ebe ule. Ged.com kwukwara na ọ dịghị mkpa ka i buru usoro mgbakọ n'isi: e nyere ozi ị chọrọ n'ajụjụ ọ bụla. Ọ bụghị ule ihe e buru n'isi; ọ na-anwale otu ị si agụ ihe ma na-eche echiche.",
            "Ged.com dere na akara ngafe bụ 145 maka isiokwu ọ bụla. Oge na iwu nwere ike ịgbanwe, ya mere lelee ged.com tupu i debe oge. Ged.com nwere ule nlereanya n'efu na ule omume gọọmentị ya, GED Ready."
          ],
          steps: ["Gaa na ged.com ma gụọ peeji ule Sayensị.", "Dee oge, akụkụ nka atọ ahụ na ngwaọrụ ị na-enweta.", "Were ule nlereanya Sayensị n'efu ka ị hụ ebe ị nọ.", "Họrọ izu ị chọrọ iwere ule ahụ.", "Dee opekata mpe otu ụbọchị ọmụmụ kwa izu, na nka ị ga-amụ."],
          words: [["GED", "ule yiri asambodo ụlọ akwụkwọ sekọndrị; ịgafe isiokwu anọ niile na-enye asambodo ọtụtụ ndị were mmadụ n'ọrụ na kọleji na-anabata dị ka diploma."], ["HiSET", "ule ọzọ yiri asambodo ụlọ akwụkwọ sekọndrị nke ụfọdụ steeti na-eji."], ["TI-30XS", "ụdị igwe mgbakọ aka nke ule GED na-eji n'ihuenyo ma kwe ka e bute n'ebe ule."], ["Mpempe ntụaka igwe mgbakọ", "mpempe akwụkwọ e nyere n'ule nke na-egosi otu esi eji bọtịnụ igwe mgbakọ ahụ."]],
          slides: [
            { title: "Ule Sayensị GED (lelee ged.com)", bullets: ["Nkeji 90, enweghị ezumike", "Nhọrọ ọtụtụ na ụdị ajụjụ ndị ọzọ", "Akara ngafe e dere: 145"] },
            { title: "Akụkụ nka atọ", bullets: ["Ịgụ sayensị ka ị ghọta ihe ọ pụtara", "Ịhazi na ịkọwa nnwale sayensị", "Iji nọmba na eserese"] },
            { title: "Ngwaọrụ ị na-enweta", bullets: ["Igwe mgbakọ n'ihuenyo na mpempe ntụaka", "Ị nwere ike ibute TI-30XS n'ebe ule", "E nyere ozi ị chọrọ n'ajụjụ ọ bụla"] },
            { title: "Mee atụmatụ", bullets: ["Buru ụzọ were ule nlereanya n'efu", "Họrọ izu ị chọrọ iwere ule", "Mụọ obere ihe, ọtụtụ ụbọchị n'izu"] }
          ],
          sources: [GED_SUBJECTS, GED_SCIENCE, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Meghee ged.com ma were ule nlereanya Sayensị n'efu (ma ọ bụ gụọ peeji Sayensị ma ọ bụrụ na ị pụghị iwere ya ugbu a). Dee atụmatụ ọmụmụ gị: izu ị chọrọ iwere ule na otu ụbọchị kwa izu na nka ị ga-amụ: ịgụ sayensị, nnwale sayensị, ma ọ bụ nọmba na eserese. Debe ya maka ọrụ ikpeazụ.",
          youCanNow: "ịkpọ aha akụkụ na ngwaọrụ nke ule Sayensị GED ma soro atụmatụ ọmụmụ nwere ụbọchị.",
          quickCheck: [
            { objective: "O1", q: "Dịka ged.com si kwuo, gịnị ka ị ga-eburu n'isi maka ule Sayensị GED?", options: ["Usoro mgbakọ ọ bụla dị na sayensị", "Tebụl periodic", "Ọ bụghị usoro mgbakọ: e nyere ozi ị chọrọ n'ajụjụ ọ bụla", "Aha ndị sayensị niile"], answer: 2, why: "Ged.com kwuru na ọ dịghị mkpa ka i buru usoro mgbakọ n'isi; e nyere ozi ị chọrọ." },
            { objective: "O1", q: "Kedu nke bụ otu n'ime akụkụ nka atọ nke ule Sayensị?", options: ["Ịhazi na ịkọwa nnwale sayensị", "Ịsụpe okwu sayensị", "Ise anụmanụ", "Iwu kọmputa"], answer: 0, why: "Ged.com depụtara ịgụ ka ị ghọta, nnwale sayensị, na nọmba na eserese." }
          ]
        },
        {
          title: "Ịgụ akụkụ edemede sayensị",
          objectives: ["O2"],
          minutes: 5,
          goal: "Chọpụta isi echiche nke akụkụ edemede sayensị na nkwupụta ihe akaebe ya na-akwado.",
          text: [
            "Akụkụ edemede sayensị na-adị ka ihe siri ike n'ihi okwu ọhụrụ, mana ị na-agụ ha otu ị si agụ edemede ọ bụla. Chọta ihe ọ na-ekwu karịsịa, ma chọta eziokwu na nọmba na-akwado ya. Ọtụtụ mgbe, edemede ahụ na-akọwa okwu siri ike n'ime ya. Chọọ \"a na-akpọ\", \"pụtara\" ma ọ bụ okwu dị n'etiti kọma n'azụ ya.",
            "Ọmụmaatụ a rụchara. \"Ọsụsọ na-eme ka ahụ jụọ oyi. Mgbe ọsụsọ na-akpọ nkụ (evaporate), ya bụ na-esi n'ihe mmiri gbanwee ghọọ gas, ọ na-ewepụ okpomọkụ n'akpụkpọ ahụ. N'ụbọchị iru mmiri (humid), ikuku ejuputala mmiri, ya mere ọsụsọ na-akpọ nkụ nwayọọ.\" Isi echiche: ọsụsọ na-eme ka ahụ jụọ oyi site n'ịkpọ nkụ. Nkwupụta a kwadoro: ị nwere ike inwe okpomọkụ karịa n'ụbọchị iru mmiri n'ihi na ọsụsọ na-akpọ nkụ nwayọọ.",
            "A na-akwado nkwupụta naanị ma ọ bụrụ na edemede ahụ nyere ihe akaebe maka ya. \"Ọsụsọ na-ere abụba\" adịghị akwado; edemede ahụ ekwughị ihe ọ bụla banyere abụba. Họrọ azịza edemede ahụ gosipụtara, ọ bụghị nke kachasị yie sayensị."
          ],
          steps: ["Buru ụzọ gụọ ajụjụ ahụ.", "Gụọ edemede ahụ; gbaa okwu ọhụrụ gburugburu ma chọọ ihe ha pụtara n'akụkụ ha.", "Kwuo isi echiche n'otu ahịrịokwu.", "Maka nhọrọ azịza ọ bụla, jụọ: ebee ka edemede ahụ gosipụtara nke a?", "Hichapụ nhọrọ ndị na-atụnye eziokwu edemede ahụ na-enyeghị."],
          words: [["Ịkpọ nkụ (evaporate)", "isi n'ihe mmiri gbanwee ghọọ gas, dị ka mmiri dị n'ala na-akpọ nkụ."], ["Iru mmiri (humid)", "mgbe ikuku jupụtara na mmiri a na-adịghị ahụ anya (vapor)."], ["Nkwupụta (claim)", "okwu na-ekwu na ihe bụ eziokwu."], ["A kwadoro (supported)", "ihe akaebe dị n'edemede ma ọ bụ data na-akwado ya."]],
          slides: [
            { title: "Gụọ sayensị dị ka edemede ọ bụla", bullets: ["Gịnị ka ọ na-ekwu karịsịa?", "Kedu eziokwu na nọmba na-akwado ya?"] },
            { title: "Okwu ọhụrụ", bullets: ["Chọọ \"a na-akpọ\" ma ọ bụ \"pụtara\"", "Chọọ nkọwa dị n'etiti kọma n'azụ okwu ahụ"] },
            { title: "A kwadoro ya ka ọ bụ na a kwadoghị?", bullets: ["A kwadoro: edemede ahụ gosipụtara ya", "A kwadoghị: ọ na-atụnye eziokwu na-adịghị n'edemede", "Ahọrọla azịza naanị n'ihi na ọ dị ka nke onye maara ihe"] }
          ],
          tryIt: "Edemede omume: \"Osisi na-eme nri nke ha site na photosynthesis. Ha na-eji ìhè, mmiri na carbon dioxide, gas dị n'ikuku, eme shuga. N'ihi nke a, ha na-ahapụ oxygen.\" 1) Isi echiche? 2) Kedu nkwupụta a kwadoro: (a) osisi e debere n'ime kọbọd gbara ọchịchịrị ga-enwe nsogbu ime nri, ma ọ bụ (b) osisi chọrọ soda iji too? Azịza: 1) Osisi na-eme nri site n'ìhè, mmiri na carbon dioxide. 2) (a): edemede ahụ kwuru na osisi chọrọ ìhè. (b) adịghị n'edemede ahụ.",
          youCanNow: "ịchọta isi echiche nke akụkụ edemede sayensị ma họrọ nkwupụta ihe akaebe ya na-akwado.",
          quickCheck: [
            { objective: "O2", q: "Edemede kwuru, \"Vaccine na-akụzi immune system, usoro nchekwa ahụ, ka ọ mata nje.\" Gịnị ka \"immune system\" pụtara ebe a?", options: ["Ụdị nje", "Usoro nchekwa ahụ", "Ọfịs dọkịta", "Ụdị ọgwụ ị na-elo"], answer: 1, why: "E nyere ihe ọ pụtara n'etiti kọma ozugbo n'azụ okwu ahụ." },
            { objective: "O2", q: "Edemede kwuru na steel (ígwè) na-amị nchara ngwa ngwa n'ikuku mmiri nwere nnu. Kedu nkwupụta a kwadoro?", options: ["Steel anaghị amị nchara mgbe ọ bụla", "Nnu na-eme ka steel sie ike", "Nchara na-adị naanị n'ọzara", "Akwa mmiri steel dị nso n'oké osimiri nwere ike ịchọ nchebe karịa pụọ na nchara"], answer: 3, why: "Ikuku oké osimiri nwere mmiri na nnu, edemede ahụ kwukwara na nke ahụ na-eme ka nchara bịa ngwa ngwa." }
          ]
        },
        {
          title: "Nnwale sayensị: hypothesis na ihe na-agbanwe",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kpọọ aha hypothesis na ihe na-agbanwe nke independent, dependent na controlled na nnwale sayensị.",
          text: [
            "Nnwale sayensị na-anwale ajụjụ. Hypothesis bụ echiche a pụrụ ịnwale banyere azịza ya, a na-edekarị ya \"Ọ bụrụ na ..., mgbe ahụ ...\". Dịka ọmụmaatụ: \"Ọ bụrụ na osisi enweta awa ìhè karịa, mgbe ahụ ha ga-eto ogologo karịa.\"",
            "Independent variable bụ otu ihe onye sayensị na-agbanwe n'ebumnuche (awa ìhè). Dependent variable bụ ihe a na-atụ iji hụ mmetụta ya (ogologo osisi). Controlled variables bụ ihe a na-edobe otu ka nnwale ahụ zie ezi (otu ụdị osisi, otu ite, otu mmiri, otu ala).",
            "Ụzọ isi cheta: dependent variable na-adabere (depends) n'independent variable. Ogologo na-adabere n'ìhè. Nnwale ziri ezi na-agbanwe naanị otu ihe n'otu oge. Ọ bụrụ na ị gbanwee ìhè na mmiri ọnụ, ị gaghị ama nke mere ka osisi too.",
            "Nnwale sayensị dị mma na-emeghachi nnwale ọ bụla ọtụtụ ugboro, ọtụtụ mgbe nwekwa control group, otu na-enweghị mgbanwe ọ bụla, iji tụnyere ya. Ịmeghachi ọtụtụ ugboro na-eme ka nsonaazụ ahụ ka a pụrụ ịtụkwasị obi."
          ],
          steps: ["Chọta ajụjụ a na-anwale.", "Chọta otu ihe a gbanwere n'ebumnuche: independent variable.", "Chọta ihe a na-atụ: dependent variable.", "Depụta ihe a na-edobe otu: controlled variables.", "Lelee na naanị otu ihe na-agbanwe, ma na-emeghachi nnwale ahụ."],
          words: [["Hypothesis", "echiche a pụrụ ịnwale, a na-edekarị ya \"Ọ bụrụ na ..., mgbe ahụ ...\"."], ["Independent variable", "otu ihe ị na-agbanwe n'ebumnuche."], ["Dependent variable", "ihe ị na-atụ iji hụ mmetụta ya."], ["Controlled variable", "ihe ị na-edobe otu ka nnwale ahụ zie ezi."], ["Control group", "otu na-enweghị mgbanwe, e ji tụnyere ndị ọzọ."]],
          slides: [
            { title: "Hypothesis", bullets: ["Echiche a pụrụ ịnwale", "\"Ọ bụrụ na ìhè karịa, mgbe ahụ osisi ga-eto ogologo karịa\""] },
            { title: "Ụdị ihe na-agbanwe (variables) atọ", bullets: ["Independent: ihe ị na-agbanwe", "Dependent: ihe ị na-atụ", "Controlled: ihe ị na-edobe otu"] },
            { title: "Nnwale ziri ezi", bullets: ["Gbanwee naanị otu ihe", "Meghachi nnwale ọ bụla", "Tụnyere ya na control group"] }
          ],
          tryIt: "Omume: Onye ọrụ na-anwale ma uwe aka (glove) ọhụrụ ọ na-eme ka aka dị ọkụ karịa. Ndị ọrụ iri na-eyi uwe aka ọhụrụ, iri ọzọ na-eyi nke ochie, n'èzí nkeji 30 n'otu oge. A na-atụ okpomọkụ aka. Kpọọ aha: 1) independent variable, 2) dependent variable, 3) controlled variables abụọ, 4) hypothesis. Azịza: 1) ụdị uwe aka; 2) okpomọkụ aka; 3) oge n'èzí, otu ihu igwe, otu oge n'ụbọchị; 4) \"Ọ bụrụ na ndị ọrụ eyi uwe aka ọhụrụ, mgbe ahụ aka ha ga-adị ọkụ karịa.\"",
          youCanNow: "ịgụ nnwale sayensị ma kpọọ aha hypothesis ya na ihe na-agbanwe ya, ma hụ nnwale na-ezighị ezi.",
          quickCheck: [
            { objective: "O3", q: "Nwa akwụkwọ na-anwale ma nnu ọ na-agbanwe ka ice si agbaze ngwa ngwa. Gịnị bụ dependent variable?", options: ["Ole nnu", "Nha ice ahụ", "Okpomọkụ ime ụlọ", "Oge ọ na-ewe ice ahụ ịgbaze"], answer: 3, why: "Oge ịgbaze bụ ihe a na-atụ; ọ na-adabere na nnu." },
            { objective: "O3", q: "Gịnị mere nnwale sayensị ga-eji gbanwee naanị otu ihe n'otu oge?", options: ["Ka ị mata mgbanwe kpatara nsonaazụ ahụ", "Ka ọ dị ngwa", "Ka o jiri obere akwụkwọ", "Ọ dịghị mkpa"], answer: 0, why: "Ọ bụrụ na ihe abụọ agbanwee, ị gaghị ama nke mere ọdịiche ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịgụ sayensị na ịghọta nnwale sayensị",
        questions: [
          { objective: "O1", q: "Kedu ngwaọrụ ged.com kwuru na ị na-enweta n'ule Sayensị?", options: ["Ekwentị", "Igwe mgbakọ n'ihuenyo na mpempe ntụaka igwe mgbakọ", "Akwụkwọ ọgụgụ sayensị", "Akwụkwọ usoro mgbakọ i dere"], answer: 1, why: "Ged.com depụtara igwe mgbakọ n'ihuenyo na mpempe ntụaka igwe mgbakọ." },
          { objective: "O2", q: "Edemede kwuru, \"Mmega ahụ na-ebuli heart rate, ọnụ ọgụgụ ugboro obi na-akụ kwa nkeji.\" Kedu nkwupụta a kwadoro?", options: ["Mmega ahụ na-ebelata heart rate", "A na-atụ heart rate na maịl", "Mmega ahụ na-eme ka obi kụọ ugboro karịa kwa nkeji", "Heart rate anaghị agbanwe"], answer: 2, why: "Edemede ahụ kwuru na mmega ahụ na-ebuli ugboro obi na-akụ kwa nkeji." },
          { objective: "O3", q: "\"Ọ bụrụ na m na-agba tomato mmiri kwa ụbọchị, mgbe ahụ ha ga-amị mkpụrụ karịa.\" Gịnị bụ nke a?", options: ["Nkwubi okwu", "Hypothesis", "Tebụl data", "Control group"], answer: 1, why: "Ọ bụ echiche a pụrụ ịnwale nke \"Ọ bụrụ na ..., mgbe ahụ ...\"." },
          { objective: "O3", q: "Na nnwale tomato ahụ, gịnị bụ independent variable?", options: ["Ugboro ole a na-agba osisi mmiri", "Ole mkpụrụ", "Ụdị ala", "Nha ite"], answer: 0, why: "Ịgba mmiri bụ ihe a gbanwere n'ebumnuche." },
          { objective: "O3", q: "Kedu nke bụ controlled variable na nnwale tomato ahụ?", options: ["Ugboro ole a na-agba ha mmiri", "Ọnụ ọgụgụ tomato toro", "Hypothesis", "Otu ụdị osisi tomato maka otu ọ bụla"], answer: 3, why: "Iji otu ụdị osisi na-eme ka nnwale ahụ zie ezi." }
        ]
      }
    },
    {
      name: "Isi 2: Nọmba, tebụl na eserese na sayensị",
      lessons: [
        {
          title: "Ịgụ tebụl na eserese",
          objectives: ["O4"],
          minutes: 5,
          goal: "Gụọ nọmba site na tebụl ma ọ bụ eserese, kọwaa ụzọ ọ na-aga ma họrọ nkwubi okwu data ahụ na-akwado.",
          text: [
            "Ọtụtụ ajụjụ sayensị na-enye gị tebụl ma ọ bụ eserese (graph). Buru ụzọ gụọ aha ya, akara ya na unit ya. N'eserese, akara dị n'ala (x-axis) na-abụkarị independent variable, akara dị n'akụkụ (y-axis) na-abụkarị dependent variable.",
            "Ọmụmaatụ a rụchara. Tebụl: \"Awa ìhè kwa ụbọchị: 4, 8, 12. Nkezi ogologo osisi mgbe izu 3 gachara: 5 cm, 9 cm, 14 cm.\" Gụọ otu nọmba: n'awa 8, osisi toro 9 cm. Ụzọ ọ na-aga: ka ìhè na-arị elu, ogologo na-arị elu. Nkwubi okwu a kwadoro: na nnwale a, ìhè karịa sooro osisi toro ogologo karịa.",
            "Agafela data ahụ. Tebụl ahụ egosighị awa ìhè 20, ya mere ị pụghị ikwu ihe na-eme mgbe ahụ. O gosighịkwa mmiri ma ọ bụ ala, ya mere nkwubi okwu banyere ha adịghị akwado.",
            "Ụdị eserese: eserese ogwe (bar graph) na-atụnyere otu dị iche iche, eserese ahịrị (line graph) na-egosi mgbanwe ka oge na-aga ma ọ bụ ụzọ data na-aga, eserese okirikiri (pie chart) na-egosi akụkụ nke otu ihe zuru ezu."
          ],
          steps: ["Gụọ aha, akara na unit.", "Chọta nọmba ajụjụ ahụ na-ajụ.", "Kọwaa ụzọ ọ na-aga: na-arị elu, na-agbada, ma ọ bụ enweghị usoro doro anya.", "Họrọ nkwubi okwu nke na-anọ n'ime data ahụ.", "Hichapụ azịza banyere ihe data ahụ na-egosighị."],
          words: [["Ụzọ data na-aga (trend)", "ụzọ data na-aga n'ozuzu: na-arị elu, na-agbada ma ọ bụ na-anọ otu."], ["X-axis", "ahịrị dị n'ala eserese, site n'aka ekpe ruo aka nri."], ["Y-axis", "ahịrị dị n'akụkụ eserese, site n'ala ruo n'elu."], ["Unit", "ihe e ji atụ nọmba, dị ka cm, digrii ma ọ bụ nkeji."]],
          slides: [
            { title: "Buru ụzọ gụọ akara", bullets: ["Aha, akara na unit", "N'ala (x-axis): na-abụkarị ihe a gbanwere", "N'akụkụ (y-axis): na-abụkarị ihe a tụrụ"] },
            { title: "Chọta ụzọ ọ na-aga", bullets: ["Na-arị elu, na-agbada, ma ọ bụ enweghị usoro doro anya", "Kwuo ya n'otu ahịrịokwu"] },
            { title: "Nọrọ n'ime data", bullets: ["Echepụtala ihe karịrị nọmba e gosiri", "Enweghị nkwubi okwu banyere ihe a na-atụghị"] },
            { title: "Ụdị eserese", bullets: ["Ogwe (bar): na-atụnyere otu dị iche iche", "Ahịrị (line): mgbanwe ka oge na-aga", "Okirikiri (pie): akụkụ nke otu ihe zuru ezu"] }
          ],
          tryIt: "Tebụl omume: \"Okpomọkụ mmiri (digrii C): 10, 20, 30, 40. Oge shuga cube na-ewe ịgbaze (sekọnd): 120, 90, 60, 40.\" 1) Ogologo oge ole na digrii 30? 2) Kedu ụzọ ọ na-aga? 3) Kedu nkwubi okwu a kwadoro: (a) na nnwale a, mmiri dị ọkụ karịa mere ka shuga gbazee ngwa ngwa, ma ọ bụ (b) nnu na-agbaze ngwa ngwa karịa shuga? Azịza: 1) sekọnd 60. 2) Ka okpomọkụ na-arị elu, oge ịgbaze na-agbada. 3) (a); a nwaleghị nnu.",
          youCanNow: "ịgụ tebụl ma ọ bụ eserese, ịkọwa ụzọ ọ na-aga, na ịhọrọ nkwubi okwu data ahụ na-akwado.",
          quickCheck: [
            { objective: "O4", q: "Eserese na-egosi nkezi okpomọkụ otu obodo na-arị elu kwa afọ iri site na 1980 ruo 2020. Kedu ụzọ ọ na-aga?", options: ["Na-agbada", "Enweghị mgbanwe", "Na-arị elu ka oge na-aga", "A pụghị ịgụ ya"], answer: 2, why: "Nọmba ndị ahụ na-arị elu n'afọ iri ọ bụla." },
            { objective: "O4", q: "Tebụl na-egosi ogologo osisi maka awa ìhè 4, 8 na 12. Kedu nkwubi okwu gafere data ahụ?", options: ["Osisi nwere awa 8 toro ogologo karịa nke nwere awa 4", "Osisi e nyere awa ìhè 24 ga-akacha ogologo", "Ogologo rịrị elu ka ìhè rịrị elu", "Osisi nwere awa 12 tokarịrị na nnwale a"], answer: 1, why: "A nwaleghị awa 24, ya mere data ahụ apụghị ịgwa gị nke ahụ." }
          ]
        },
        {
          title: "Mgbakọ sayensị: nkezi, range na usoro mgbakọ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ mean, median, mode na range nke data ma jiri usoro mgbakọ e nyere.",
          text: [
            "Data (maka omume naanị): heart rate mgbe ije gachara, n'ugboro kwa nkeji: 80, 84, 84, 90, 92. Mean (nkezi): gbakọta ha ọnụ ma kee ya site n'ọnụ ọgụgụ ha: 430 / 5 = 86. Median: nọmba dị n'etiti mgbe ha nọ n'usoro: 84. Mode: nọmba pụtara ugboro kachasị: 84. Range: nke kachasị ukwuu wepụ nke kachasị nta: 92 - 80 = 12.",
            "Ọ bụrụ na ọnụ ọgụgụ nọmba bụ ọnụ ọgụgụ abụọ abụọ (even), median bụ nkezi nke nọmba abụọ dị n'etiti. Maka 3, 5, 7, 9: (5 + 7) / 2 = 6.",
            "E nyere usoro mgbakọ n'ule ahụ. Tinye nọmba ndị ahụ ma debe unit. Speed (ọsọ) = distance (anya) / time (oge): ụgbọ ala ibu na-aga maịl 120 n'awa 2, ya mere speed = 120 / 2 = maịl 60 kwa awa. Density = mass / volume: ngọngọ gram 40 nwere volume cubic centimeter 20 nwere density 40 / 20 = gram 2 kwa cubic centimeter.",
            "Lelee na azịza gị nwere isi. Mean ga-adị n'etiti nọmba kachasị nta na nke kachasị ukwuu. Dee unit ya n'azịza ọ bụla."
          ],
          steps: ["Tinye data n'usoro site na nke kachasị nta ruo nke kachasị ukwuu.", "Mean: gbakọta nọmba niile ma kee ya site n'ọnụ ọgụgụ ha.", "Median: chọta nke dị n'etiti (ma ọ bụ nkezi nke nọmba abụọ dị n'etiti).", "Mode: nọmba pụtara ugboro kachasị. Range: nke kachasị ukwuu wepụ nke kachasị nta.", "Maka usoro mgbakọ: dee ya, tinye nọmba, gbakọọ ya, ma tinye unit."],
          words: [["Mean (nkezi)", "average: ngụkọta kee site n'ọnụ ọgụgụ nọmba."], ["Median", "nọmba dị n'etiti mgbe nọmba nọ n'usoro."], ["Mode", "nọmba na-apụtakarị ugboro kachasị."], ["Range", "nọmba kachasị ukwuu wepụ nke kachasị nta."], ["Density", "ole mass dị n'otu ohere: mass kee site na volume."]],
          slides: [
            { title: "Nọmba anọ na-akọwa data", bullets: ["Mean: ngụkọta kee site n'ọnụ ọgụgụ", "Median: nọmba dị n'etiti n'usoro", "Mode: nọmba na-apụtakarị", "Range: nke kachasị ukwuu wepụ nke kachasị nta"] },
            { title: "Ọmụmaatụ a rụchara", bullets: ["Data: 80, 84, 84, 90, 92", "Mean 86, median 84, mode 84, range 12"] },
            { title: "Iji usoro mgbakọ e nyere", bullets: ["Speed = distance / time", "Density = mass / volume", "Tinye nọmba, gbakọọ, dee unit"] }
          ],
          tryIt: "Maka omume naanị. 1) Nkeji ọ na-ewe ice cube ịgbaze na nnwale ise: 6, 7, 7, 8, 12. Chọta mean, median, mode na range. 2) Onye na-agba igwe na-aga maịl 30 n'awa 3. Speed = distance / time. Azịza: 1) Mean 40 / 5 = nkeji 8; median 7; mode 7; range 12 - 6 = nkeji 6. 2) 30 / 3 = maịl 10 kwa awa.",
          youCanNow: "ịchọta mean, median, mode na range nke data ma jiri usoro mgbakọ sayensị nwere unit ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Data: 2, 4, 4, 6, 9. Gịnị bụ mean?", options: ["4", "5", "6", "7"], answer: 1, why: "2 + 4 + 4 + 6 + 9 = 25, na 25 / 5 = 5." },
            { objective: "O5", q: "Nkume nwere mass gram 60 na volume cubic centimeter 20. Density = mass / volume. Gịnị bụ density ya?", options: ["Gram 40 kwa cubic centimeter", "Gram 1,200 kwa cubic centimeter", "Gram 80 kwa cubic centimeter", "Gram 3 kwa cubic centimeter"], answer: 3, why: "60 / 20 = gram 3 kwa cubic centimeter." }
          ]
        },
        {
          title: "Ịchịkọta ya ọnụ: nnwale ziri ezi nke gị",
          objectives: ["O3", "O4", "O5"],
          minutes: 6,
          goal: "Hazie nnwale ziri ezi, dee data n'ime tebụl, chọta mean ma dee nkwubi okwu data ahụ na-akwado.",
          text: [
            "Ugbu a, jiri nka niile n'otu oge. Ọtụtụ ajụjụ ule na-akọwa nnwale sayensị dum nwere tebụl, wee jụọ maka ihe na-agbanwe, mgbakọ na nkwubi okwu. Ime obere nnwale n'onwe gị na-eme ka ajụjụ ndị a dị mfe karịa.",
            "Ọmụmaatụ kichin n'enweghị ihe egwu. Ajụjụ: ịkwagharị mmiri ọ na-agbanwe ka shuga si agbaze ngwa ngwa? Hypothesis: ọ bụrụ na a kwagharịa mmiri ahụ, mgbe ahụ shuga ga-agbaze ngwa ngwa karịa. Independent variable: a kwagharịrị ma ọ bụ a kwagharịghị. Dependent variable: oge ịgbaze (sekọnd). Controlled: otu iko, otu ole mmiri pọmpụ, otu okpomọkụ mmiri, otu shuga cube kwa oge. Mee nnwale atọ nke ọ bụla.",
            "Nsonaazụ nlereanya (maka omume naanị). A kwagharịrị: sekọnd 40, 45, 50; mean 45. A kwagharịghị: sekọnd 170, 180, 190; mean 180. Nkwubi okwu: na nnwale a, ịkwagharị mere ka shuga gbazee ngwa ngwa, ihe dị ka ugboro 4 ngwa ngwa n'nkezi. Eserese ogwe nwere ogwe abụọ (a kwagharịrị, a kwagharịghị) na-egosi nke a nke ọma.",
            "Nchekwa: jiri naanị mmiri pọmpụ dị ka ụlọ ma ọ bụ dị ọkụ nwa ntakịrị site na pọmpụ, shuga ma ọ bụ nnu, na iko dị ọcha. Enweghị stovu, enweghị ọkụ, enweghị kemịkalụ ihicha ihe. Aṅụla ma ọ bụ detụ ihe ọ bụla ọnụ n'oge nnwale ahụ."
          ],
          steps: ["Dee ajụjụ gị na hypothesis \"Ọ bụrụ na ..., mgbe ahụ ...\".", "Kpọọ aha independent, dependent na controlled variables.", "Mee opekata mpe nnwale atọ nke otu ọ bụla ma dee nsonaazụ n'ime tebụl.", "Chọta mean maka otu ọ bụla.", "See eserese ogwe ma dee nkwubi okwu ahịrịokwu abụọ nke na-anọ n'ime data gị."],
          words: [["Nnwale otu ugboro (trial)", "otu oge e mere nnwale sayensị."], ["Tebụl data", "ahịrị na kọlụm na-ejide nsonaazụ gị."], ["Nkwubi okwu (conclusion)", "ihe nsonaazụ ahụ gosiri, n'otu ahịrịokwu ma ọ bụ abụọ."]],
          slides: [
            { title: "Nnwale ziri ezi nke gị", bullets: ["Ajụjụ na hypothesis", "Independent, dependent, controlled variables", "Nnwale atọ kwa otu"] },
            { title: "Dee ma gbakọọ", bullets: ["Dee nsonaazụ n'ime tebụl", "Chọta mean nke otu ọ bụla", "See eserese ogwe"] },
            { title: "Dee nkwubi okwu", bullets: ["Kwuo ihe data ahụ gosiri", "Nọrọ n'ime data gị", "Kpọọ aha otu ụzọ isi mee ka nnwale ahụ ka mma"] },
            { title: "Nọrọ n'enweghị ihe egwu", bullets: ["Naanị mmiri pọmpụ, shuga ma ọ bụ nnu", "Enweghị stovu, ọkụ ma ọ bụ kemịkalụ", "Adetụla ma ọ bụ ṅụọ ihe nlereanya ndị ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee obere nnwale sayensị nke gị n'enweghị ihe egwu na kichin (ịkwagharị na shuga, ma ọ bụ nnwale ọzọ nwere otu mgbanwe jiri mmiri, shuga ma ọ bụ nnu). Dee ajụjụ, hypothesis na ihe na-agbanwe, dee nnwale atọ kwa otu n'ime tebụl, chọta mean nke ọ bụla, see eserese ogwe ma dee nkwubi okwu ahịrịokwu abụọ. Tinye atụmatụ ọmụmụ GED gị nwere ụbọchị n'ala ya ma jiri rubric tụọ ya akara.",
          youCanNow: "ịhazi ma mee nnwale ziri ezi, ide data ma chọta nkezi ya, na ide nkwubi okwu data ahụ na-akwado.",
          quickCheck: [
            { objective: "O3", q: "Na nnwale ịkwagharị, gịnị ga-anọrịrị otu ka nnwale ahụ zie ezi?", options: ["Ole mmiri na okpomọkụ ya", "Ma a kwagharịrị mmiri ahụ", "Oge ịgbaze", "Nkwubi okwu"], answer: 0, why: "Ole mmiri na okpomọkụ ya bụ controlled variables; naanị ịkwagharị na-agbanwe." },
            { objective: "O4", q: "Mean a kwagharịrị: sekọnd 45. Mean a kwagharịghị: sekọnd 180. Kedu nkwubi okwu a kwadoro?", options: ["Ịkwagharị na-eme ka shuga too ụtọ karịa", "Na nnwale a, ịkwagharị mere ka shuga gbazee ngwa ngwa", "Nnu na-agbaze ngwa ngwa karịa shuga", "Ịkwagharị enweghị mmetụta"], answer: 1, why: "Iko ndị a kwagharịrị gbazere ngwa ngwa nke ukwuu, nkwubi okwu ahụ na-anọkwa n'ime data." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nọmba, tebụl na eserese na sayensị",
        questions: [
          { objective: "O4", q: "N'ọtụtụ eserese sayensị, gịnị ka e gosiri na axis dị n'ala (x-axis)?", options: ["Aha ya", "Nkwubi okwu", "Na-abụkarị independent variable, ihe a gbanwere", "Unit ego"], answer: 2, why: "X-axis na-egosikarị ihe onye sayensị gbanwere." },
          { objective: "O4", q: "Kedu eserese kacha mma iji tụnyere nkezi ogologo osisi n'otu atọ?", options: ["Eserese ogwe (bar graph)", "Maapụ", "Eserese okirikiri (pie chart) nke ubi dum", "Foto"], answer: 0, why: "Eserese ogwe na-atụnyere otu dị iche iche n'akụkụ n'akụkụ." },
          { objective: "O5", q: "Data: 10, 12, 15, 15, 18. Gịnị bụ range?", options: ["15", "14", "13", "8"], answer: 3, why: "18 - 10 = 8." },
          { objective: "O5", q: "Data: 3, 8, 6, 1, 7. Gịnị bụ median?", options: ["3", "6", "7", "5"], answer: 1, why: "N'usoro: 1, 3, 6, 7, 8. Nọmba dị n'etiti bụ 6." },
          { objective: "O5", q: "Ụgbọ ala bọs na-aga maịl 150 n'awa 3. Speed = distance / time. Gịnị bụ speed ya?", options: ["Maịl 450 kwa awa", "Maịl 153 kwa awa", "Maịl 50 kwa awa", "Maịl 147 kwa awa"], answer: 2, why: "150 / 3 = maịl 50 kwa awa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe Ule GED: Sayensị",
    questions: [
      { objective: "O1", q: "Gịnị ka ihe ọmụmụ a na-emere gị?", options: ["Ọ na-akwado gị maka ule Sayensị GED", "Ọ na-enye gị asambodo GED", "Ọ na-eme gị onye sayensị nwere ikike", "Ọ na-anọchi ule GED"], answer: 0, why: "Ihe ọmụmụ a na-akwado gị; GED Testing Service na-eme ule ahụ, steeti gị na-enyekwa asambodo ahụ." },
      { objective: "O1", q: "Kedu ule ọzọ yiri asambodo ụlọ akwụkwọ sekọndrị nke ụfọdụ steeti na-eji?", options: ["ACT", "CDL", "HiSET", "TOEFL"], answer: 2, why: "HiSET bụ ule ọzọ yiri asambodo ụlọ akwụkwọ sekọndrị." },
      { objective: "O1", q: "Kedu akụkụ nka ged.com depụtara n'ule Sayensị?", options: ["Iburu aha ọkpụkpụ n'isi", "Iji nọmba na eserese na sayensị", "Ise maapụ", "Ide abụ uri"], answer: 1, why: "Akụkụ atọ ahụ bụ ịgụ ka ị ghọta, nnwale sayensị, na nọmba na eserese." },
      { objective: "O1", q: "Ebee ka ị ga-elele oge, ụgwọ na iwu ule GED nke ugbu a?", options: ["Akwụkwọ mgbasa ozi ochie", "Enyi", "Okwu e dere n'okpuru vidiyo", "Ged.com na ọfịs agụmakwụkwọ ndị okenye nke steeti gị"], answer: 3, why: "Iwu na ụgwọ na-agbanwe; isi iyi gọọmentị nwere nke ugbu a." },
      { objective: "O2", q: "Edemede na-akọwa okwu ọhụrụ n'etiti kọma ozugbo n'azụ ya. Gịnị ka ị ga-eme?", options: ["Wụfee edemede ahụ", "Jiri ihe ọ pụtara ahụ ghọta edemede ahụ", "Chepụta ihe ọzọ ọ pụtara", "Chọọ ya n'ekwentị gị n'oge ule"], answer: 1, why: "Edemede na-akọwakarị okwu siri ike n'ime ya." },
      { objective: "O2", q: "Edemede kwuru na aṅụ na-ebu pollen site n'otu ifuru gaa n'ọzọ, nke na-enyere ọtụtụ ihe ọkụkụ aka ịmị mkpụrụ. Kedu nkwupụta a kwadoro?", options: ["Aṅụ ole na ole nwere ike ime ka ụfọdụ ihe ọkụkụ mịa mkpụrụ ole na ole", "Aṅụ na-eme nri niile", "Aṅụ na-eri mkpụrụ osisi", "Ifuru achọghị pollen"], answer: 0, why: "Ọ bụrụ na aṅụ na-enyere ihe ọkụkụ aka ịmị mkpụrụ, aṅụ ole na ole nwere ike ibelata mkpụrụ." },
      { objective: "O2", q: "Kedu nhọrọ azịza ị ga-ehichapụ?", options: ["Nke edemede ahụ gosipụtara", "Nke nwere nọmba sitere n'edemede ahụ", "Nke na-atụnye eziokwu edemede ahụ enyeghị mgbe ọ bụla", "Nke na-ekwughachi isi echiche"], answer: 2, why: "Azịza na-atụnye eziokwu na-adịghị n'edemede adịghị akwado." },
      { objective: "O3", q: "Gịnị bụ hypothesis?", options: ["Azịza ikpeazụ", "Echiche a pụrụ ịnwale, a na-edekarị ya \"Ọ bụrụ na ..., mgbe ahụ ...\"", "Eserese", "Ndepụta ngwaọrụ"], answer: 1, why: "Hypothesis bụ echiche a pụrụ ịnwale banyere ihe ga-eme." },
      { objective: "O3", q: "Nnwale na-elele ma egwu ọ na-agbanwe ka ndị ọrụ si akwakọba igbe ngwa ngwa. Gịnị bụ independent variable?", options: ["Ọnụ ọgụgụ igbe a kwakọbara", "Nha igbe", "Oge n'ụbọchị", "Egwu ma ọ bụ enweghị egwu"], answer: 3, why: "Egwu bụ otu ihe a gbanwere n'ebumnuche." },
      { objective: "O3", q: "Na nnwale egwu ahụ, gịnị bụ dependent variable?", options: ["Ọnụ ọgụgụ igbe a kwakọbara", "Egwu ma ọ bụ enweghị egwu", "Aha ndị ọrụ", "Ụdị teepu"], answer: 0, why: "Igbe a kwakọbara bụ ihe a na-atụ." },
      { objective: "O3", q: "Gịnị mere a ga-eji meghachi nnwale ọ bụla ọtụtụ ugboro?", options: ["Iji ngwongwo karịa", "Ime ka nnwale ahụ dị ogologo", "Ime ka nsonaazụ ahụ ka a pụrụ ịtụkwasị obi", "Ịgbanwe ihe na-agbanwe karịa"], answer: 2, why: "Nnwale karịa na-ebelata ohere na otu nsonaazụ dị iche ga-eduhie gị." },
      { objective: "O3", q: "Gịnị bụ control group?", options: ["Otu nwere ndị mmadụ kachasị", "Otu na-enweghị mgbanwe, maka ntụnyere", "Ndị sayensị na-eme nnwale ahụ", "Otu na-agbanwe ihe abụọ"], answer: 1, why: "Control group na-egosi ihe na-eme n'enweghị mgbanwe ahụ." },
      { objective: "O4", q: "Eserese ahịrị na-egosi okpomọkụ onye ọrịa na-agbada kwa awa mgbe ọ ṅụchara ọgwụ (maka omume naanị). Kedu ụzọ ọ na-aga?", options: ["Na-agbada", "Na-arị elu", "Na-anọ otu", "Enweghị data"], answer: 0, why: "Nọmba ndị ahụ na-agbada kwa awa." },
      { objective: "O4", q: "Gịnị ka ị ga-ebu ụzọ gụọ n'eserese?", options: ["Nọmba kachasị nta", "Naanị nhọrọ azịza", "Agba ogwe ndị ahụ", "Aha, akara na unit"], answer: 3, why: "Akara na unit na-agwa gị ihe nọmba ndị ahụ pụtara." },
      { objective: "O4", q: "Tebụl nwalere mmiri digrii 10, 20 na 30. Kedu okwu gafere data ahụ?", options: ["A nwalere mmiri digrii 30", "Nsonaazụ digrii 20 dị na tebụl", "Na digrii 100, shuga na-agbaze ozugbo", "Nnwale ahụ jiri okpomọkụ atọ"], answer: 2, why: "A nwaleghị digrii 100, ya mere data ahụ apụghị igosi nke ahụ." },
      { objective: "O4", q: "Kedu eserese na-egosi akụkụ nke otu ihe zuru ezu?", options: ["Eserese ahịrị", "Eserese okirikiri (pie chart)", "Scatter plot", "Ahịrị nọmba"], answer: 1, why: "Eserese okirikiri na-ekewa otu ihe zuru ezu n'akụkụ." },
      { objective: "O5", q: "Data: 5, 7, 7, 9, 12. Gịnị bụ mode?", options: ["5", "8", "12", "7"], answer: 3, why: "7 na-apụtakarị ugboro kachasị." },
      { objective: "O5", q: "Data: 6, 8, 10, 12. Gịnị bụ median?", options: ["9", "8", "10", "36"], answer: 0, why: "Nọmba abụọ dị n'etiti bụ 8 na 10, na (8 + 10) / 2 = 9." },
      { objective: "O5", q: "Ụgbọ ala na-aga maịl 200 n'awa 4. Speed = distance / time. Gịnị bụ speed ya?", options: ["Maịl 800 kwa awa", "Maịl 50 kwa awa", "Maịl 204 kwa awa", "Maịl 196 kwa awa"], answer: 1, why: "200 / 4 = maịl 50 kwa awa." },
      { objective: "O5", q: "Data: 20, 30, 40. Gịnị bụ mean?", options: ["90", "20", "30", "40"], answer: 2, why: "20 + 30 + 40 = 90, na 90 / 3 = 30." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 3, 5, 8, 9, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma mee nnwale ahụ ọzọ.",
    criteria: [
      { name: "Ajụjụ na hypothesis", objective: "O3", notYet: "Enweghị ajụjụ, ma ọ bụ a pụghị ịnwale hypothesis ahụ.", meets: "Ajụjụ doro anya na hypothesis \"Ọ bụrụ na ..., mgbe ahụ ...\".", exceeds: "Hypothesis ahụ kwukwara ihe mere onye dere ya ji atụ anya nsonaazụ ahụ." },
      { name: "Ihe na-agbanwe na nnwale ziri ezi", objective: "O3", notYet: "Ihe na-agbanwe adịghị, ma ọ bụ ihe karịrị otu na-agbanwe.", meets: "A kpọrọ aha independent, dependent na opekata mpe controlled variables abụọ; naanị otu ihe na-agbanwe.", exceeds: "O nwekwara control group ma kọwaa ihe mere controlled variable ọ bụla ji dị mkpa." },
      { name: "Data na mgbakọ", objective: "O5", notYet: "Nnwale na-erughị atọ kwa otu, ma ọ bụ mean ezighị ezi.", meets: "Nnwale atọ kwa otu n'ime tebụl, nwere mean ziri ezi na unit.", exceeds: "O nyekwara range nke otu ọ bụla ma kwuo otu nnwale ndị ahụ si dị iche." },
      { name: "Eserese na nkwubi okwu", objective: "O4", notYet: "Enweghị eserese, ma ọ bụ nkwubi okwu ahụ na-ekwu ihe karịrị ihe data gosiri.", meets: "Eserese ogwe nwere akara na nkwubi okwu ahịrịokwu abụọ nke na-anọ n'ime data.", exceeds: "Ọ kpọkwara aha otu ụzọ isi mee ka nnwale ahụ ka mma oge ọzọ." },
      { name: "Ịgụ nsonaazụ", objective: "O2", notYet: "Nkwubi okwu ahụ adabaghị na nọmba ndị ahụ.", meets: "Nkwubi okwu ahụ dabara na nọmba dị na tebụl.", exceeds: "Ọ na-egosi kpọmkwem nọmba na-akwado nkwubi okwu ahụ." },
      { name: "Atụmatụ ọmụmụ", objective: "O1", notYet: "Enweghị atụmatụ ọmụmụ, ma ọ bụ enweghị ụbọchị.", meets: "Atụmatụ ọmụmụ nwere opekata mpe otu ụbọchị kwa izu ruo izu ule a chọrọ.", exceeds: "O nwekwara ụbọchị maka GED Ready ma ọ bụ ụbọchị ule e debere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ karịa n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe weere GED Ready ma ọ bụ ule nlereanya n'efu nke ged.com n'ime ụbọchị 30",
      "Ndị na-amụ ihe debere ma ọ bụ gafere ule Sayensị GED n'ime ụbọchị 90 (ha onwe ha kọrọ)",
      "Mmemme ndị mmekọ na-akọ na ndị na-amụ ihe karịa na-aga n'ọzụzụ ọrụ na ahụike, ụlọ nyocha (lab) ma ọ bụ ọrụ aka"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị, ma ọ bụ nkuzi e bipụtara",
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ dị mfe (igwe mgbakọ ekwentị na-arụ ọrụ maka omume)",
      "Maka ọrụ ikpeazụ: iko abụọ dị ọcha, mmiri pọmpụ, shuga cube ma ọ bụ nnu, ngaji, na oge (timer) ekwentị",
      "Ule nlereanya n'efu nke ged.com; GED Ready ma ọ bụrụ na onye na-amụ ihe họrọ ịzụta ya",
      "Ihe dị ka nkeji 90 maka nkuzi na nnwale, gbakwunye ihe dị ka nkeji 45 maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite n'ule mbido na ule nlereanya Sayensị n'efu nke ged.com iji chọpụta akụkụ nka onye ọ bụla na-amụ ihe kachasị chọọ.",
      "Buru ụzọ mee nnwale ịkwagharị ahụ dị ka ngosipụta otu, wee mee ka ndị na-amụ ihe hazie nnwale nke ha nwere otu mgbanwe.",
      "Lelee atụmatụ nnwale ọ bụla maka nchekwa tupu ndị na-amụ ihe emee ya: enweghị ihe na-enye okpomọkụ, ọkụ, kemịkalụ ma ọ bụ ịdetụ ọnụ.",
      "Mee omume ịgụ eserese n'olu dị elu: aha, akara, unit, ụzọ ọ na-aga, wee nkwubi okwu.",
      "Lelee ule steeti gị na-eji (GED ma ọ bụ HiSET) ma kesaa ebe ule dị nso na enyemaka ụgwọ ọ bụla."
    ]
  }
};

"use strict";

// Koach Learn course (Igbo translation of shared/ged-math.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Translated from the English file.
// US course: GED, HiSET, ged.com and the TI-30XS keep their names. Numbers and math expressions stay exactly as in the English.

const GED_SUBJECTS = { name: "GED Testing Service: Isiokwu ule (Mgbakọ na mwepụ)", url: "https://www.ged.com/about-test/test-subjects.html" };
const GED_MATH = { name: "GED Testing Service: Ule mgbakọ na mwepụ, mpempe akwụkwọ fọmụla na ajụjụ ihe atụ", url: "https://ged.com/about_test/test_subjects/math/" };
const GED_PRACTICE = { name: "GED Testing Service: Ule ihe atụ n'efu na GED Ready", url: "https://www.ged.com/practice-test/" };
const GED_CALC = { name: "GED Testing Service: Mpempe akwụkwọ nkọwa kalkụleta TI-30XS (PDF)", url: "https://www.ged.com/wp-content/uploads/calculator_sheet.pdf" };
const HISET = { name: "HiSET: ule nhatanha nke ụlọ akwụkwọ sekọndrị", url: "https://hiset.org/" };

module.exports = {
  id: "ged-math-ig",
  lang: "ig",
  translationOf: "ged-math",
  category: "Workforce Development",
  name: "Ịkwado maka Ule GED: Mgbakọ na Mwepụ",
  skills: "Ịmara ule Math nke GED na ime atụmatụ ọmụmụ, Mgbakọ ọnụọgụ na-enweghị kalkụleta, Oke, pasentị na data, Idozi nhata na enweghị nhata, Jiometrị na mpempe akwụkwọ fọmụla, Mkpọda, eserese na fọnshọn",
  outcome: "idozi ụdị ajụjụ Math GED ndị bụ isi (mgbakọ ọnụọgụ, pasentị na data, nhata, jiometrị na mpempe akwụkwọ fọmụla, na eserese) ma gbasoo atụmatụ ọmụmụ na ule nwere ụbọchị nke ga-eme ka ị dị njikere ide ule Math nke GED.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye na-achọ asambodo nhatanha nke ụlọ akwụkwọ sekọndrị (high school): ndị ntorobịa, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị kwabatara ọhụrụ, ndị agha mbụ (veterans) na onye ọ bụla na-alaghachi n'ọmụmụ ihe. Asambodo na-emeghe ụzọ maka ọrụ, ọzụzụ na kọleji.",
    "Ule GED nwere isiokwu anọ, Math (a na-akpọ Mathematical Reasoning) bụ otu n'ime ha. GED Testing Service na-enye ya na kọmputa. Ule Math gụnyere Mgbakọ Mbụ (Basic Math), Jiometrị (Geometry), Aljebra Mbụ (Basic Algebra), na Eserese na Fọnshọn (Graphs and Functions). A na-enye gị mpempe akwụkwọ fọmụla, ya mere ị chọghị iburu fọmụla n'isi. Ụfọdụ steeti na-eji ule HiSET kama GED, ma ọ bụ ha abụọ; ọfịs agụmakwụkwọ ndị okenye nke steeti gị ma ọ bụ ged.com ga-agwa gị nke ọ bụ.",
    "Ị ga-amụta otu ule Math si arụ ọrụ, wee mee omume maka ụdị ajụjụ ọ bụla site n'ihe atụ e dozirila na ajụjụ omume nwere nkọwa azịza ha. Ị ga-emecha site n'atụmatụ ọmụmụ na ule nke gị nwere ụbọchị.",
    "Ihe ọmụmụ a na-akwado gị maka ule ahụ; ọ naghị enye gị asambodo GED. Naanị ịgafe ezi ule GED na-enye ya. Lelee ged.com maka iwu steeti gị ugbu a, ego ọ na-efu, ide ule n'ebe ule ma ọ bụ n'ịntanetị, na ule omume gọọmentị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji isii, nwere obere nnwale mgbe ọ gwụchara, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee atụmatụ ọmụmụ na ule Math GED nke gị: were ule ihe atụ GED Math n'efu na ged.com ma dee akara i nwetara; depụta isiokwu 3 kacha sie gị ike site na ya na site na nnwale ihe ọmụmụ a; dee usoro ọmụmụ kwa izu nwere ezi ụbọchị maka izu 6 ruo 8 na-abịa (isiokwu ole, ụbọchị ole, ogologo oge ole); dozie ajụjụ omume 12 (2 site na nkuzi ọ bụla) ma kọwaa nke ọ bụla i mehiere; ma dee ụbọchị ị chọrọ iwe ule omume gọọmentị GED Ready na ule Math GED, mgbe i lelechara iwu na ego steeti gị na ged.com.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa na-enweghị asambodo ụlọ akwụkwọ sekọndrị: ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị kwabatara ọhụrụ, ndị agha mbụ, nne na nna, na ndị ọrụ chọrọ asambodo maka ọrụ, nkwalite ma ọ bụ kọleji. Ọtụtụ hapụrụ ụlọ akwụkwọ ọtụtụ afọ gara aga; ụfọdụ nwere ahụmahụ ọjọọ na Math.",
    startingPoint: "Ha nwere ike ịgbakọ, wepụ, mụbaa na kee ọnụọgụ zuru ezu, ọtụtụ mgbe site na kalkụleta. Ọtụtụ echefuola ọkara (fractions), ọnụọgụ na-adịghị mma (negative) na pasentị, ha amaghịkwa aljebra ma ọ bụ mara ya ntakịrị. Ọtụtụ ahụbeghị ụdị ule GED ma ọ bụ kalkụleta ya.",
    gap: "Ule Math GED na-ajụ mgbakọ ọnụọgụ, pasentị na data, aljebra, jiometrị na mpempe akwụkwọ fọmụla, na eserese, n'ime nkeji 115 na kọmputa. Ndị na-amụ ihe kwesịrị ịmara ụdị ule ahụ, mee omume maka ụdị ajụjụ ọ bụla site n'ihe atụ e dozirila, ma gbasoo atụmatụ ọmụmụ ka ha were ule mgbe ha dị njikere. Ịgafe ya na-emeghe ọrụ, ọzụzụ na kọleji.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu Math ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa maka ule ihe atụ GED n'efu; akwụkwọ na pensụl maka omume",
      "Kalkụleta: mee omume na TI-30XS ma ọ bụrụ na ọ ga-ekwe omume, ma ọ bụ kalkụleta sayensị n'efu n'ịntanetị",
      "Oge: nkuzi nkeji 5 ruo 6, gbakwunyere usoro ọmụmụ kwa izu nke onye na-amụ ihe na-edozi",
      "Iwu, ego na ụzọ ide ule dị iche site na steeti ruo steeti ma nwee ike ịgbanwe: zipụ mgbe niile na ged.com ma ọ bụ ọfịs steeti",
      "Egwu Math: ọtụtụ ihe atụ e dozirila, ịlele azịza, na-enweghị nrụgide oge n'omume"
    ],
    prerequisites: "Ịgbakọ, iwepụ, ịmụba na ikewa ọnụọgụ zuru ezu. Ndị na-amụ ihe na-ejighị n'aka n'ọkara, ọnụọgụ ntụpọ (decimals) na pasentị nwere ike ibu ụzọ were \"Mgbakọ na Mwepụ Kwa Ụbọchị maka Ọrụ na Ndụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ged.com na ule ihe atụ GED Math n'efu", action: "ịkpọ aha akụkụ ihe ule Math GED, oge ya, iwu kalkụleta na ụdị ajụjụ ya, ma dee atụmatụ ọmụmụ na ule nwere ụbọchị", standard: "nwere usoro kwa izu maka izu 6 ruo 8 na ụbọchị ule ị chọrọ" },
    { id: "O2", condition: "Na-enweghị kalkụleta", action: "idozi ajụjụ gbasara usoro ọrụ, ọkara, ọnụọgụ na-adịghị mma, ekspọnent na mgbọrọgwụ abụọ (square root)", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ajụjụ okwu na obere data", action: "idozi ajụjụ oke, nha oke na pasentị, ma chọta mean, median, mode na range", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ajụjụ okwu ma ọ bụ nhata", action: "ide na idozi nhata na enweghị nhata nwere otu mgbanwe (variable)", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi, ma lelee azịza ọ bụla site n'itinye ya azụ" },
    { id: "O5", condition: "Site n'iji mpempe akwụkwọ fọmụla na kalkụleta", action: "ịgbakọ gburugburu (perimeter), mpaghara (area), olu (volume) na akụkụ na-efu efu nke triangle nwere akụkụ ziri ezi", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi, nwee ụdị nha ziri ezi" },
    { id: "O6", condition: "Mgbe e nyere gị eserese, tebụl, ntụpọ abụọ ma ọ bụ fọnshọn", action: "ịchọta mkpọda (slope), ịgụ uru ọnụọgụ ma gbakọọ fọnshọn ahụ", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Ule ahụ, ọnụọgụ na data",
      lessons: [
        {
          title: "Ule Math GED na atụmatụ ọmụmụ gị",
          objectives: ["O1"],
          minutes: 6,
          goal: "Kọwaa otu ule Math GED si arụ ọrụ ma malite atụmatụ ọmụmụ nwere ụbọchị.",
          text: [
            "Ule GED nwere isiokwu anọ: Math, Reasoning Through Language Arts (asụsụ), Science (sayensị) na Social Studies (ọmụmụ obodo). Ị nwere ike iwe ha otu otu. A na-akpọ ule Math Mathematical Reasoning. O nwere akụkụ anọ: Mgbakọ Mbụ, Jiometrị, Aljebra Mbụ, na Eserese na Fọnshọn.",
            "Dị ka ged.com si kwuo, ule Math bụ nkeji 115, gụnyere oge maka ntụziaka na nlegharị anya. O nwere akụkụ, nwee obere ezumike n'etiti ha. A na-enye kalkụleta dị na ihuenyo n'akụkụ 2; n'ebe ule, ị nwere ike iweta kalkụleta TI-30XS nke gị. Ụfọdụ ajụjụ ga-abụrịrị na-enweghị kalkụleta, ya mere ị chọkwara mgbakọ n'isi na n'akwụkwọ. A na-enye gị mpempe akwụkwọ fọmụla na mpempe akwụkwọ nkọwa kalkụleta, ya mere ị chọghị iburu fọmụla n'isi.",
            "Ụdị ajụjụ gụnyere ịhọrọ otu n'ime ọtụtụ (multiple choice), ịdọrọ na ịtọgbọ (drag and drop), idejupụta oghere (fill-in-the-blank), ịhọrọ mpaghara (pịa n'eserese ma ọ bụ foto) na menu na-ada ada (drop down). Lelee ged.com tupu i were ule, n'ihi na nkọwa nwere ike ịgbanwe. N'ụfọdụ steeti, a na-eji ule HiSET kama GED, ma ọ bụ ha abụọ; steeti gị na-ekpebi.",
            "Malite site n'ule ihe atụ GED Math n'efu na ged.com. Ọ na-egosi gị ihuenyo na ụdị ajụjụ. Jiri ya chọta isiokwu ndị na-esiri gị ike. Mgbe ị na-abịaru nso, ule omume gọọmentị, GED Ready, na-agwa gị ma ọ ga-abụ na ị dị njikere (lelee ego ọ na-efu na ged.com). Wee dozie atụmatụ ọmụmụ: nnọkọ dị mkpụmkpụ, ọtụtụ ụbọchị n'izu, otu isiokwu n'otu oge."
          ],
          steps: ["Gaa na ged.com ma gụọ peeji ule Math na iwu steeti gị.", "Were ule ihe atụ GED Math n'efu ma dee akara i nwetara.", "Depụta isiokwu ndị siri gị ike.", "Họrọ ụbọchị na oge ọmụmụ maka izu 6 ruo 8 na-abịa, nwere ezi ụbọchị.", "Tinye otu isiokwu n'ụbọchị ọmụmụ ọ bụla, malite na nke kacha sie gị ike.", "Họrọ ụbọchị iwe GED Ready, na ụbọchị ị chọrọ iwe ezi ule ahụ."],
          words: [["GED", "ule nhatanha nke ụlọ akwụkwọ sekọndrị site na GED Testing Service; ịgafe isiokwu anọ ahụ na-enye asambodo nhatanha nke ụlọ akwụkwọ sekọndrị."], ["HiSET", "ule nhatanha ọzọ nke ụlọ akwụkwọ sekọndrị a na-eji n'ụfọdụ steeti."], ["Mpempe akwụkwọ fọmụla", "peeji nwere fọmụla Math a na-enye gị n'oge ule."], ["TI-30XS", "ụdị kalkụleta sayensị a na-eji n'ule Math GED."], ["GED Ready", "ule omume gọọmentị GED na-egosi ma ọ ga-abụ na ị dị njikere."], ["Atụmatụ ọmụmụ", "usoro e dere ede nke ihe ị ga-amụ na mgbe ị ga-amụ ya."]],
          slides: [
            { title: "GED Math (Mathematical Reasoning)", bullets: ["Mgbakọ Mbụ, Jiometrị, Aljebra Mbụ, Eserese na Fọnshọn", "Nkeji 115, na kọmputa, nwere obere ezumike", "A na-enye mpempe akwụkwọ fọmụla na nkọwa kalkụleta"] },
            { title: "Kalkụleta na ụdị ajụjụ", bullets: ["Kalkụleta ihuenyo n'akụkụ 2; ma ọ bụ TI-30XS nke gị n'ebe ule", "Ụfọdụ ajụjụ na-enweghị kalkụleta", "Multiple choice, drag and drop, fill-in, select an area, drop down"] },
            { title: "Ule omume", bullets: ["Ule ihe atụ GED Math n'efu na ged.com", "GED Ready: ule omume gọọmentị (lelee ego ọ na-efu)", "Ụfọdụ steeti na-eji HiSET: lelee steeti gị"] },
            { title: "Atụmatụ ọmụmụ gị", bullets: ["Malite na isiokwu kacha sie gị ike", "Nnọkọ dị mkpụmkpụ, ọtụtụ ụbọchị n'izu, ezi ụbọchị", "Họrọ ụbọchị GED Ready na ụbọchị ule ị chọrọ"] }
          ],
          tryIt: "Gaa na ged.com ma were ule ihe atụ GED Math n'efu. Dee akara i nwetara na isiokwu ndị siri gị ike. Wee n'akwụkwọ mee kalenda maka izu 6 ruo 8 na-abịa: gbaa ụbọchị ọmụmụ gị okirikiri, dee oge maka nke ọ bụla, ma tinye isiokwu kacha sie gị ike n'ụbọchị mbụ. Nke a bụ mmalite ọrụ ikpeazụ gị.",
          youCanNow: "ịkọwa ule Math GED (ihe dị n'ime ya, oge, kalkụleta, mpempe akwụkwọ fọmụla, ụdị ajụjụ) ma malite atụmatụ ọmụmụ nwere ụbọchị.",
          quickCheck: [
            { objective: "O1", q: "Ị ga-eburu fọmụla n'isi maka ule Math GED?", options: ["Ee, fọmụla ọ bụla", "Mba, a na-enye mpempe akwụkwọ fọmụla", "Naanị ndị dị n'azụ kalkụleta", "Naanị ma ọ bụrụ na i dere ule n'ịntanetị"], answer: 1, why: "GED Testing Service na-enye mpempe akwụkwọ fọmụla n'oge ule." },
            { objective: "O1", q: "Ebee ka i kwesịrị ilele iwu GED na ego steeti gị ugbu a?", options: ["Ozi n'ịntanetị ọha (social media)", "Enyi dere ule ọtụtụ afọ gara aga", "ged.com ma ọ bụ ọfịs agụmakwụkwọ ndị okenye nke steeti gị", "Naanị ihe ọmụmụ a"], answer: 2, why: "Iwu na ego na-agbanwe ma dị iche site na steeti; saịtị gọọmentị bụ isi iyi ya." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE, HISET]
        },
        {
          title: "Mgbakọ ọnụọgụ na-enweghị kalkụleta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dozie ajụjụ usoro ọrụ, ọkara, ọnụọgụ na-adịghị mma, ekspọnent na mgbọrọgwụ abụọ n'aka.",
          text: [
            "Usoro ọrụ: buru ụzọ mee ihe dị na Parentesis (akara mkpọchi), wee mee Ekspọnent, wee Mụbaa ma Kee site n'aka ekpe gaa n'aka nri, wee Gbakọọ ma Wepụ site n'aka ekpe gaa n'aka nri. Ụfọdụ na-echeta ya dị ka PEMDAS. Ihe atụ: 3 + 4 x (6 - 2)^2 / 8. Parentesis: 6 - 2 = 4. Ekspọnent: 4^2 = 16. Mụbaa ma kee site n'aka ekpe: 4 x 16 = 64, 64 / 8 = 8. Gbakọọ: 3 + 8 = 11.",
            "Ọkara: iji mụbaa, mụbaa ndị dị n'elu na ndị dị n'ala: 2/3 x 3/4 = 6/12 = 1/2. Iji kee, tụgharịa ọkara nke abụọ ma mụbaa: 3/4 / 1/2 = 3/4 x 2/1 = 6/4 = 1 1/2. Iji tụnyere ọkara na ọnụọgụ ntụpọ, gbanwee ha niile ka ha bụrụ ọnụọgụ ntụpọ: 2/3 dị ihe dị ka 0.667, ya mere site na nke kacha nta: 0.65, 2/3, 0.7.",
            "Ọnụọgụ na-adịghị mma (negative): -5 + 8 = 3. Iwepụ ọnụọgụ na-adịghị mma bụ ịgbakọ: 6 - (-2) = 8. Na-adịghị mma mụbaa na-adịghị mma na-enye ezigbo (positive): -3 x -4 = 12; na-adịghị mma mụbaa ezigbo na-enye na-adịghị mma: -3 x 4 = -12. N'ahịrị ọnụọgụ, ọnụọgụ na-ebuwanye ibu ka ị na-aga n'aka nri.",
            "Ekspọnent na mgbọrọgwụ: 2^5 pụtara 2 x 2 x 2 x 2 x 2 = 32. Mgbọrọgwụ abụọ (square root) na-emegharị squaring: mgbọrọgwụ abụọ nke 49 bụ 7, n'ihi na 7 x 7 = 49. Mgbọrọgwụ abụọ nke 50 karịrị 7 ntakịrị, n'ihi na 50 dị n'etiti 49 na 64."
          ],
          steps: ["Buru ụzọ mee parentesis.", "Wee mee ekspọnent na mgbọrọgwụ.", "Wee mụbaa ma kee, site n'aka ekpe gaa n'aka nri.", "Wee gbakọọ ma wepụ, site n'aka ekpe gaa n'aka nri.", "Ọkara: mụbaa ozugbo n'ofe; iji kee, tụgharịa nke abụọ ma mụbaa.", "Akara: akara yiri onwe ha mụbaa na-enye ezigbo, akara dị iche na-enye na-adịghị mma."],
          words: [["Usoro ọrụ", "usoro e kwekọrịtara maka ime nzọụkwụ Math: parentesis, ekspọnent, ịmụba na ikewa, ịgbakọ na iwepụ."], ["Ekspọnent", "obere ọnụọgụ dị n'elu nke na-ekwu ugboro ole ị ga-amụba ọnụọgụ n'onwe ya: 2^3 = 2 x 2 x 2."], ["Mgbọrọgwụ abụọ", "ọnụọgụ nke, ma i mụbaa ya n'onwe ya, na-enye ọnụọgụ ahụ: mgbọrọgwụ abụọ nke 25 bụ 5."], ["Ọnụọgụ na-adịghị mma", "ọnụọgụ dị obere karịa efu, dị ka -4."], ["Ahịrị ọnụọgụ", "ahịrị nwere ọnụọgụ n'usoro; ọnụọgụ na-ebuwanye ibu ka ị na-aga n'aka nri."]],
          slides: [
            { title: "Usoro ọrụ", bullets: ["Parentesis, Ekspọnent", "Mụbaa ma Kee, site n'aka ekpe gaa n'aka nri", "Gbakọọ ma Wepụ, site n'aka ekpe gaa n'aka nri", "3 + 4 x (6 - 2)^2 / 8 = 11"] },
            { title: "Ọkara", bullets: ["Mụbaa: 2/3 x 3/4 = 6/12 = 1/2", "Kee: tụgharịa ma mụbaa: 3/4 / 1/2 = 1 1/2", "Tụnyere: gbanwee ka ha bụrụ ọnụọgụ ntụpọ"] },
            { title: "Ọnụọgụ na-adịghị mma", bullets: ["-5 + 8 = 3", "6 - (-2) = 8", "-3 x -4 = 12; -3 x 4 = -12"] },
            { title: "Ekspọnent na mgbọrọgwụ", bullets: ["2^5 = 32", "Mgbọrọgwụ abụọ nke 49 = 7", "Mgbọrọgwụ abụọ nke 50 karịrị 7 ntakịrị"] }
          ],
          tryIt: "Mee omume na-enweghị kalkụleta (azịza dị n'okpuru): (1) 10 - 2 x 3 + 4. (2) 5/6 x 3/5. (3) 2/3 / 4/9. (4) -7 - (-10). (5) 3^3 - mgbọrọgwụ abụọ nke 16. Azịza: (1) 10 - 6 + 4 = 8 (buru ụzọ mụbaa). (2) 15/30 = 1/2. (3) 2/3 x 9/4 = 18/12 = 1 1/2. (4) -7 + 10 = 3. (5) 27 - 4 = 23. Maka nke ọ bụla i mehiere, chọta nzọụkwụ ebe ọ gara njọ ma dee iwu ị chọrọ.",
          youCanNow: "ịrụ usoro ọrụ, ọkara, ọnụọgụ na-adịghị mma, ekspọnent na mgbọrọgwụ abụọ n'aka.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ 8 + 12 / 4?", options: ["5", "20", "14", "11"], answer: 3, why: "Kee tupu ịgbakọ: 12 / 4 = 3, wee 8 + 3 = 11." },
            { objective: "O2", q: "Gịnị bụ -6 x -5?", options: ["30", "-30", "-11", "11"], answer: 0, why: "Na-adịghị mma mụbaa na-adịghị mma na-enye ezigbo: 30." }
          ],
          sources: [GED_MATH]
        },
        {
          title: "Oke, nha oke, pasentị na data",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dozie ajụjụ oke, nha oke na pasentị ma chọta mean, median, mode na range.",
          text: [
            "Oke (ratio) na-atụnyere ọnụọgụ abụọ: iko ntụ ọka 3 maka iko shuga 2 ọ bụla bụ 3:2. Nha oke (proportion) na-ekwu na oke abụọ hara nha. Iji dozie ya, mụbaa n'obe (cross-multiply). Ihe atụ: iko ntụ ọka 3 na-eme kuki 24. Ole ka ọ ga-ewe maka kuki 40? 3/24 = x/40, ya mere 24x = 120 na x = iko 5.",
            "Ajụjụ pasentị atọ: (1) Gịnị bụ 35% nke 80? 0.35 x 80 = 28. (2) 18 bụ pasentị ole nke 72? 18 / 72 = 0.25 = 25%. (3) Mgbanwe pasentị: ọnụahịa si $40 gaa $50. Mgbanwe ahụ bụ $10, na 10 / 40 = 0.25, ya mere ọ rịgoro 25%. Kee mgbanwe ahụ mgbe niile site na ọnụọgụ MBỤ.",
            "Data: maka ọnụọgụ 4, 7, 7, 9, 13, mean (nkezi) bụ ngụkọta kere site n'ọnụ ọgụgụ ha: 40 / 5 = 8. Median bụ ọnụọgụ dị n'etiti mgbe ha nọ n'usoro: 7. Mode bụ ọnụọgụ pụtara ugboro kacha ọtụtụ: 7. Range bụ nke kacha ibu wepụ nke kacha nta: 13 - 4 = 9. Ọ bụrụ na e nwere ọnụọgụ abụọ n'etiti, median bụ ọkara ụzọ n'etiti ha.",
            "Ohere (probability) bụ ohere ihe ga-eme: ọnụ ọgụgụ ụzọ o nwere ike isi mee / ngụkọta nsonaazụ niile. Akpa nwere marbul uhie 3 na marbul acha anụnụ anụnụ 9: ohere uhie bụ 3/12 = 1/4, ma ọ bụ 25%."
          ],
          steps: ["Nha oke: dee ọkara abụọ hara nha, nwee otu ụdị nha n'otu ebe, wee mụbaa n'obe ma kee.", "Pasentị nke ọnụọgụ: gbanwee pasentị ka ọ bụrụ ọnụọgụ ntụpọ ma mụbaa.", "Pasentị ole: akụkụ / ihe niile, wee gbanwee ya ka ọ bụrụ pasentị.", "Mgbanwe pasentị: mgbanwe / nke mbụ.", "Mean: gbakọọ, wee kee site n'ọnụ ọgụgụ ha. Median: tinye n'usoro, chọta nke dị n'etiti.", "Mode: nke kacha pụta. Range: nke kacha ibu wepụ nke kacha nta."],
          words: [["Oke (ratio)", "ntụnyere ọnụọgụ abụọ, dị ka 3:2."], ["Nha oke (proportion)", "oke abụọ hara nha, dị ka 3/24 = 5/40."], ["Ịmụba n'obe", "ịmụba elu ọkara ọ bụla site n'ala nke ọzọ iji dozie nha oke."], ["Mean", "nkezi: gbakọọ ọnụọgụ ndị ahụ ma kee site n'ọnụ ọgụgụ ha."], ["Median", "ọnụọgụ dị n'etiti mgbe ọnụọgụ ndị ahụ nọ n'usoro."], ["Mode", "ọnụọgụ na-apụta ugboro kacha ọtụtụ."], ["Range", "ọnụọgụ kacha ibu wepụ nke kacha nta."], ["Ohere (probability)", "ohere ihe ga-eme, site na 0 (ọ dịghị mgbe) ruo 1 (mgbe niile)."]],
          slides: [
            { title: "Oke na nha oke", bullets: ["Iko 3 maka kuki 24; iko x maka 40", "3/24 = x/40, ya mere 24x = 120", "x = iko 5"] },
            { title: "Ajụjụ pasentị atọ", bullets: ["35% nke 80 = 0.35 x 80 = 28", "18 n'ime 72 = 18 / 72 = 25%", "$40 gaa $50: 10 / 40 = mmụba 25%"] },
            { title: "Data: 4, 7, 7, 9, 13", bullets: ["Mean: 40 / 5 = 8", "Median: 7; Mode: 7", "Range: 13 - 4 = 9"] },
            { title: "Ohere (probability)", bullets: ["Ụzọ o nwere ike isi mee / ngụkọta nsonaazụ", "Uhie 3 n'ime marbul 12: 3/12 = 1/4 = 25%"] }
          ],
          tryIt: "Mee omume (azịza dị n'okpuru): (1) Oke map bụ 1 inch : 20 miles. Miles ole bụ 3.5 inches? (2) Gịnị bụ 15% nke 260? (3) Ekwentị $250 bụ $200 ugbu a. Gịnị bụ mbelata pasentị? (4) Chọta mean, median, mode na range nke 12, 15, 15, 18, 20, 22. Azịza: (1) 70 miles. (2) 39. (3) 50 / 250 = mbelata 20%. (4) Mean 102 / 6 = 17; median ọkara ụzọ n'etiti 15 na 18 = 16.5; mode 15; range 10.",
          youCanNow: "idozi nha oke na ụdị ajụjụ pasentị atọ ahụ, ma kọwaa data site na mean, median, mode na range.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ median nke 3, 9, 4, 8, 6?", options: ["4", "9", "6", "30"], answer: 2, why: "N'usoro: 3, 4, 6, 8, 9. Ọnụọgụ dị n'etiti bụ 6." },
            { objective: "O3", q: "Ihe $60 rịgoro ruo $75. Gịnị bụ mmụba pasentị?", options: ["15%", "20%", "80%", "25%"], answer: 3, why: "Mgbanwe ahụ bụ 15, na 15 / 60 = 0.25 = 25%." }
          ],
          sources: [GED_SUBJECTS]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ule ahụ, ọnụọgụ na data",
        questions: [
          { objective: "O1", q: "Kedu nke bụ otu n'ime akụkụ anọ nke ule Math GED?", options: ["Nsụpe okwu", "Eserese na Fọnshọn", "Akụkọ ihe mere eme ụwa", "Ọsọ ịpị akwụkwọ (typing)"], answer: 1, why: "Ule Math gụnyere Mgbakọ Mbụ, Jiometrị, Aljebra Mbụ, na Eserese na Fọnshọn." },
          { objective: "O2", q: "Gịnị bụ 2 + 3 x 4^2?", options: ["50", "80", "26", "400"], answer: 0, why: "Ekspọnent mbụ: 16. Mụbaa: 48. Gbakọọ: 50." },
          { objective: "O2", q: "Gịnị bụ 3/4 / 3/8?", options: ["9/32", "1/2", "3/8", "2"], answer: 3, why: "Tụgharịa ma mụbaa: 3/4 x 8/3 = 24/12 = 2." },
          { objective: "O3", q: "Ndị ọrụ 5 nwere ike ịkwakọ igbe 40 n'otu awa. N'otu ọsọ ahụ, igbe ole ka ndị ọrụ 8 nwere ike ịkwakọ?", options: ["43", "50", "64", "80"], answer: 2, why: "40/5 = x/8, ya mere 5x = 320 na x = 64." },
          { objective: "O3", q: "Gịnị bụ mean nke 10, 14, 15 na 21?", options: ["15", "14.5", "11", "60"], answer: 0, why: "Ngụkọta 60, kere site n'ọnụọgụ 4, bụ 15." }
        ]
      }
    },
    {
      name: "Isi 2: Aljebra, jiometrị na eserese",
      lessons: [
        {
          title: "Idozi nhata na enweghị nhata",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dee ma dozie nhata na enweghị nhata nwere otu mgbanwe, ma lelee azịza ọ bụla.",
          text: [
            "Mgbanwe (variable) bụ mkpụrụedemede, dị ka x, na-anọchi anya ọnụọgụ a na-amaghị. Okwu na-aghọ Math: \"5 karịa ugboro abụọ nke otu ọnụọgụ\" bụ 2x + 5. \"Otu ọnụọgụ e wepụrụ 7\" bụ x - 7. \"Mmụba nke 4 na otu ọnụọgụ\" bụ 4x.",
            "Iji dozie nhata, mee otu ihe ahụ n'akụkụ abụọ ruo mgbe x nọ naanị ya. Buru ụzọ megharịa ịgbakọ ma ọ bụ iwepụ, wee megharịa ịmụba ma ọ bụ ikewa. Ihe atụ: 3x - 7 = 20. Gbakwunye 7: 3x = 27. Kee site na 3: x = 9. Lelee: 3 x 9 - 7 = 20. Ee. Ihe atụ nwere parentesis: 2(x + 4) = 18. Kee site na 2: x + 4 = 9, ya mere x = 5.",
            "Ajụjụ okwu: atụmatụ ekwentị na-efu $25 kwa ọnwa gbakwunyere $0.10 maka ozi (text) ọ bụla. Ụgwọ ahụ bụ $32. Ozi ole? 25 + 0.10t = 32. Wepụ 25: 0.10t = 7. Kee site na 0.10: t = ozi 70.",
            "Enweghị nhata na-eji <, >, <= ma ọ bụ >=, a na-edozikwa ha otu ụzọ ahụ, nwee otu iwu: mgbe ị mụbara ma ọ bụ kee akụkụ abụọ site n'ọnụọgụ na-adịghị mma, tụgharịa akara ahụ. 4x + 3 > 19 na-enye 4x > 16, ya mere x > 4. Mana -2x <= 10 na-enye x >= -5. N'ajụjụ multiple choice, ị nwekwara ike ilele site n'itinye azịza ọ bụla azụ n'ime ajụjụ ahụ."
          ],
          steps: ["Gbanwee okwu ndị ahụ ka ha bụrụ nhata nwere mkpụrụedemede maka ihe a na-amaghị.", "Megharịa ịgbakọ ma ọ bụ iwepụ n'akụkụ abụọ.", "Megharịa ịmụba ma ọ bụ ikewa n'akụkụ abụọ.", "Enweghị nhata: tụgharịa akara ma ọ bụrụ na ị mụbara ma ọ bụ kee site n'ọnụọgụ na-adịghị mma.", "Lelee: tinye azịza gị azụ n'ime ajụjụ mbụ ahụ."],
          words: [["Mgbanwe (variable)", "mkpụrụedemede na-anọchi anya ọnụọgụ a na-amaghị."], ["Ngosipụta (expression)", "ọnụọgụ, mkpụrụedemede na ọrụ na-enweghị akara nhata, dị ka 2x + 5."], ["Nhata (equation)", "ahịrịokwu Math nwere akara nhata, dị ka 3x - 7 = 20."], ["Enweghị nhata (inequality)", "ahịrịokwu Math na-eji <, >, <= ma ọ bụ >= kama akara nhata."], ["Idozi", "ịchọta uru mgbanwe ahụ na-eme ka ahịrịokwu ahụ bụrụ eziokwu."]],
          slides: [
            { title: "Okwu ka ọ ghọọ Math", bullets: ["5 karịa ugboro abụọ nke otu ọnụọgụ: 2x + 5", "Otu ọnụọgụ e wepụrụ 7: x - 7", "Mmụba nke 4 na otu ọnụọgụ: 4x"] },
            { title: "Idozi nhata", bullets: ["3x - 7 = 20", "Gbakwunye 7: 3x = 27; kee site na 3: x = 9", "Lelee: 3 x 9 - 7 = 20"] },
            { title: "Ajụjụ okwu", bullets: ["$25 kwa ọnwa + $0.10 kwa ozi = $32", "25 + 0.10t = 32, ya mere 0.10t = 7", "t = ozi 70"] },
            { title: "Enweghị nhata", bullets: ["Dozie ya dị ka nhata", "Mụbaa ma ọ bụ kee site n'ọnụọgụ na-adịghị mma: tụgharịa akara", "-2x <= 10 na-enye x >= -5"] }
          ],
          tryIt: "Mee omume (azịza dị n'okpuru): (1) Dee \"8 erughị ugboro 3 nke otu ọnụọgụ\" dị ka ngosipụta. (2) Dozie 5x + 6 = 41. (3) Dozie 4(x - 2) = 28. (4) Taksi na-ana $3 gbakwunyere $2 kwa mile. Njem ahụ fụrụ $19. Miles ole? (5) Dozie -3x + 1 > 13. Azịza: (1) 3x - 8. (2) 5x = 35, x = 7. (3) x - 2 = 7, x = 9. (4) 3 + 2m = 19, m = miles 8. (5) -3x > 12, ya mere x < -4 (tụgharịa akara). Lelee azịza ọ bụla site n'itinye ya azụ.",
          youCanNow: "ịgbanwe okwu ka ha bụrụ nhata, idozi nhata na enweghị nhata, ma lelee azịza gị.",
          quickCheck: [
            { objective: "O4", q: "Dozie: x / 4 + 3 = 8", options: ["x = 44", "x = 5", "x = 20", "x = 1.25"], answer: 2, why: "Wepụ 3: x / 4 = 5. Mụbaa site na 4: x = 20." },
            { objective: "O4", q: "Dozie: -5x < 20", options: ["x > -4", "x < -4", "x < 4", "x > 4"], answer: 0, why: "Kee site na -5 ma tụgharịa akara: x > -4." }
          ],
          sources: [GED_SUBJECTS]
        },
        {
          title: "Jiometrị site na mpempe akwụkwọ fọmụla na kalkụleta",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gbakọọ gburugburu, mpaghara, olu na akụkụ na-efu efu nke triangle akụkụ ziri ezi site na mpempe akwụkwọ fọmụla na kalkụleta.",
          text: [
            "Gburugburu (perimeter) bụ ogologo gburugburu ọdịdị; gbakọọ akụkụ ya. Mpaghara (area) bụ ohere dị n'ime ya, na square units. Olu (volume) bụ ohere dị n'ime ihe 3-D, na cubic units. Rektangul 8 feet na 5 feet nwere gburugburu 2 x (8 + 5) = 26 feet na mpaghara 8 x 5 = 40 square feet. Triangle nwere base 10 na ogo 6 nwere mpaghara 1/2 x 10 x 6 = 30.",
            "Okirikiri na-eji pi, ihe dị ka 3.14 (kalkụleta nwere bọtịnụ pi). Maka okirikiri nwere radius 3: mpaghara = pi x r^2 = ihe dị ka 28.27 square units; gburugburu okirikiri (circumference) = 2 x pi x r = ihe dị ka 18.85. Diameter bụ ugboro abụọ radius, ya mere gụọ nke ọma nke ajụjụ ahụ nyere.",
            "Olu: igbe 4 na 3 na 2 nwere olu 4 x 3 x 2 = 24 cubic units. Silinda nwere radius 2 na ogo 5 nwere olu pi x r^2 x h = pi x 4 x 5 = ihe dị ka 62.83 cubic units.",
            "Triangle akụkụ ziri ezi (right triangle): a^2 + b^2 = c^2 (Pythagorean theorem), ebe c bụ akụkụ kacha ogologo, nke chere nkuku square ihu. Ọ bụrụ na ụkwụ ya abụọ bụ 6 na 8, c^2 = 36 + 64 = 100, ya mere c = 10. A na-enye gị mpempe akwụkwọ fọmụla n'ule: jiri mpempe akwụkwọ nke ugbu a site na ged.com mee omume ka ị mara ebe fọmụla ọ bụla dị. Na TI-30XS, jiri bọtịnụ (-) maka ọnụọgụ na-adịghị mma na bọtịnụ x^2 maka squares; mpempe akwụkwọ nkọwa kalkụleta GED na-egosi bọtịnụ ndị ahụ."
          ],
          steps: ["See ọdịdị ahụ ma dee aha ihe ị maara.", "Kpebie: gburugburu (gburugburu ya), mpaghara (n'ime, larịị) ma ọ bụ olu (n'ime, 3-D)?", "Chọta fọmụla ahụ na mpempe akwụkwọ fọmụla.", "Tinye ọnụọgụ ndị ahụ ma jiri kalkụleta.", "Dee ụdị nha: feet, square feet ma ọ bụ cubic feet.", "Jụọ: azịza a ọ kwekọrọ na foto ahụ?"],
          words: [["Gburugburu (perimeter)", "ogologo gburugburu ọdịdị larịị."], ["Mpaghara (area)", "ohere dị n'ime ọdịdị larịị, na square units."], ["Olu (volume)", "ohere dị n'ime ihe 3-D, na cubic units."], ["Radius", "ogologo site n'etiti okirikiri ruo n'ọnụ ya; diameter bụ ugboro abụọ radius."], ["Pi", "ọnụọgụ ihe dị ka 3.14 a na-eji maka okirikiri."], ["Pythagorean theorem", "maka triangle akụkụ ziri ezi, a^2 + b^2 = c^2, ebe c bụ akụkụ kacha ogologo."]],
          slides: [
            { title: "Gburugburu, mpaghara, olu", bullets: ["Gburugburu: gburugburu ya, na units", "Mpaghara: n'ime ọdịdị larịị, square units", "Olu: n'ime ihe 3-D, cubic units"] },
            { title: "Rektangul na triangle", bullets: ["Rektangul 8 na 5: gburugburu 26, mpaghara 40", "Triangle: 1/2 x base x ogo", "Base 10, ogo 6: mpaghara 30"] },
            { title: "Okirikiri na silinda", bullets: ["Mpaghara = pi x r^2; radius 3: ihe dị ka 28.27", "Circumference = 2 x pi x r", "Olu silinda = pi x r^2 x h"] },
            { title: "Triangle akụkụ ziri ezi", bullets: ["a^2 + b^2 = c^2", "Ụkwụ 6 na 8: c = 10", "Jiri mpempe akwụkwọ fọmụla nke ugbu a site na ged.com mee omume"] }
          ],
          tryIt: "Mee omume site na kalkụleta na mpempe akwụkwọ fọmụla si na ged.com (azịza dị n'okpuru): (1) Mpaghara na gburugburu rektangul 12 m na 7 m. (2) Mpaghara okirikiri nwere diameter 10 inches. (3) Olu igbe 6 ft na 2 ft na 3 ft. (4) Ubube 13-foot dabere na mgbidi, ụkwụ ya dị 5 feet site na mgbidi. Ruo ebe ole n'elu mgbidi ka o ruru? Azịza: (1) mpaghara 84 square meters, gburugburu 38 m. (2) radius 5, mpaghara ihe dị ka 78.54 square inches. (3) 36 cubic feet. (4) 5^2 + b^2 = 13^2, ya mere b^2 = 169 - 25 = 144, b = 12 feet.",
          youCanNow: "ịchọta gburugburu, mpaghara, olu na akụkụ na-efu efu nke triangle akụkụ ziri ezi, nwee ụdị nha ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Ọnụ ụlọ bụ 14 feet na 10 feet. Gịnị bụ mpaghara ya?", options: ["24 square feet", "48 feet", "140 cubic feet", "140 square feet"], answer: 3, why: "Mpaghara = ogologo x obosara = 140, na square feet." },
            { objective: "O5", q: "Triangle akụkụ ziri ezi nwere ụkwụ 9 na 12. Ogologo ole ka akụkụ kacha ogologo dị?", options: ["21", "15", "225", "108"], answer: 1, why: "81 + 144 = 225, mgbọrọgwụ abụọ nke 225 bụ 15." }
          ],
          sources: [GED_MATH, GED_CALC]
        },
        {
          title: "Mkpọda, eserese na fọnshọn",
          objectives: ["O6", "O1"],
          minutes: 6,
          goal: "Chọta mkpọda, gụọ eserese na tebụl, gbakọọ fọnshọn, ma mechaa atụmatụ ọmụmụ na ule gị.",
          text: [
            "Grid coordinate nwere x-axis (n'ofe) na y-axis (elu na ala). A na-ede ntụpọ dị ka (x, y): (3, 5) pụtara 3 n'ofe, 5 elu. Mkpọda (slope) na-egosi otu ahịrị si dị elu: ịrị elu kere site na ịga n'ofe (rise over run), ma ọ bụ (y2 - y1) / (x2 - x1). Site na (1, 3) ruo (4, 9): (9 - 3) / (4 - 1) = 6 / 3 = 2. Ahịrị na-arịgo site n'aka ekpe gaa n'aka nri nwere mkpọda ezigbo (positive); nke na-agbada, mkpọda na-adịghị mma (negative).",
            "Enwere ike ide ahịrị dị ka y = mx + b, ebe m bụ mkpọda na b bụ ebe ahịrị ahụ gafere y-axis. Site na tebụl ebe x = 0, 1, 2 na-enye y = 5, 8, 11, y na-arịgo 3 oge ọ bụla, ya mere m = 3, ma mgbe x = 0, y = 5, ya mere b = 5: y = 3x + 5.",
            "Fọnshọn (function) na-enye otu nsonaazụ maka ntinye ọ bụla. f(x) = x^2 - 3x pụtara: were ntinye ahụ, square ya, wepụ ugboro 3 ya. f(4) = 16 - 12 = 4. N'eserese, chọta uru ahụ site n'ịga n'ofe ruo x ị chọrọ, wee gaa elu ma ọ bụ ala ruo n'ahịrị, wee gaa n'ofe gụọ y.",
            "Mechaa atụmatụ gị. Lee akara gị na nnwale ndị dị mkpụmkpụ, nnwale ihe ọmụma na ule ihe atụ. Tinye isiokwu 3 kacha sie gị ike na mbụ n'usoro ọmụmụ kwa izu gị, tinye ụbọchị nlegharị anya, ma họrọ ụbọchị maka GED Ready na ezi ule ahụ, mgbe i lelechara iwu steeti gị na ged.com."
          ],
          steps: ["Mkpọda: wepụ uru y, wepụ uru x n'otu usoro ahụ, kee.", "y = mx + b: m bụ mkpọda, b bụ uru y mgbe x = 0.", "Site na tebụl: ole y na-agbanwe mgbe ọ bụla x rịgoro 1 bụ mkpọda.", "Fọnshọn: dochie x n'ọnụọgụ ahụ ma soro usoro ọrụ.", "Atụmatụ: isiokwu kacha sie ike na mbụ, ezi ụbọchị, GED Ready tupu ezi ule ahụ."],
          words: [["Grid coordinate", "grid nwere x-axis na y-axis maka idebe ntụpọ."], ["Ụzọ abụọ n'usoro (ordered pair)", "ntụpọ e dere dị ka (x, y)."], ["Mkpọda (slope)", "otu ahịrị si dị elu: ịrị elu kere site na ịga n'ofe."], ["y-intercept", "ebe ahịrị gafere y-axis; b dị na y = mx + b."], ["Fọnshọn (function)", "iwu na-enye naanị otu nsonaazụ maka ntinye ọ bụla, dị ka f(x) = 2x + 1."]],
          slides: [
            { title: "Mkpọda = rise / run", bullets: ["(y2 - y1) / (x2 - x1)", "(1, 3) ruo (4, 9): 6 / 3 = 2", "Na-arịgo site n'aka ekpe gaa n'aka nri: ezigbo; na-agbada: na-adịghị mma"] },
            { title: "y = mx + b", bullets: ["m: mkpọda; b: ebe ọ gafere y-axis", "Tebụl x = 0, 1, 2 na-enye y = 5, 8, 11", "Ya mere y = 3x + 5"] },
            { title: "Fọnshọn", bullets: ["f(x) = x^2 - 3x", "f(4) = 16 - 12 = 4", "Eserese: gaa na x, chọta ahịrị, gụọ y"] },
            { title: "Mechaa atụmatụ gị", bullets: ["Isiokwu 3 kacha sie ike na mbụ", "Ezi ụbọchị, ụbọchị nlegharị anya", "Ụbọchị GED Ready, wee ụbọchị ule gị"] }
          ],
          tryIt: "Mee omume (azịza dị n'okpuru): (1) Chọta mkpọda site na (2, 1) ruo (6, 9). (2) Dee nhata ahịrị nwere mkpọda -2 nke gafere y-axis na 7. (3) Ọ bụrụ na f(x) = 3x - 4, chọta f(5). (4) Tebụl nwere x = 0, 1, 2 na y = 10, 7, 4. Gịnị bụ mkpọda? Azịza: (1) 8 / 4 = 2. (2) y = -2x + 7. (3) 15 - 4 = 11. (4) y na-agbada 3 oge ọ bụla, ya mere -3. Wee mechaa ọrụ ikpeazụ gị: usoro kwa izu gị nwere ụbọchị, ajụjụ omume 12 gị nwere nkọwa nke i mehiere, na ụbọchị GED Ready na ule gị.",
          youCanNow: "ịchọta mkpọda, ide y = mx + b, ịgụ eserese na tebụl, ịgbakọ fọnshọn, ma gbasoo atụmatụ ọmụmụ na ule GED Math nwere ụbọchị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ mkpọda site na (0, 2) ruo (3, 11)?", options: ["2", "9", "1/3", "3"], answer: 3, why: "(11 - 2) / (3 - 0) = 9 / 3 = 3." },
            { objective: "O6", q: "Ọ bụrụ na f(x) = 2x + 1, gịnị bụ f(6)?", options: ["9", "13", "8", "12"], answer: 1, why: "2 x 6 + 1 = 13." }
          ],
          sources: [GED_SUBJECTS, GED_PRACTICE]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Aljebra, jiometrị na eserese",
        questions: [
          { objective: "O4", q: "Kedu nhata dabara \"Ugboro abụọ nke otu ọnụọgụ gbakwunyere 9 bụ 25\"?", options: ["2 + x + 9 = 25", "2(x + 9) = 25", "2x + 9 = 25", "x + 9 = 2 x 25"], answer: 2, why: "Ugboro abụọ nke otu ọnụọgụ bụ 2x, gbakwunyere 9, hara 25." },
          { objective: "O4", q: "Dozie: 7x - 4 = 31", options: ["x = 5", "x = 27", "x = 3.9", "x = 35"], answer: 0, why: "Gbakwunye 4: 7x = 35. Kee site na 7: x = 5." },
          { objective: "O5", q: "Gịnị bụ olu igbe 5 na 4 na 2 inches?", options: ["11 cubic inches", "20 square inches", "22 inches", "40 cubic inches"], answer: 3, why: "Olu = 5 x 4 x 2 = 40 cubic inches." },
          { objective: "O5", q: "Okirikiri nwere radius 7. Ihe dị ka ole bụ circumference ya?", options: ["21.99", "43.98", "153.94", "49"], answer: 1, why: "2 x pi x 7 dị ihe dị ka 43.98." },
          { objective: "O6", q: "Na y = 4x - 2, gịnị bụ mkpọda?", options: ["-2", "2", "4", "x"], answer: 2, why: "Na y = mx + b, m bụ mkpọda, ya mere ọ bụ 4." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkwado maka Ule GED: Mgbakọ na Mwepụ",
    questions: [
      { objective: "O1", q: "Ogologo oge ole ka ule Math GED na-ewe, dị ka ged.com si kwuo?", options: ["Nkeji 30", "Nkeji 115", "Awa 3", "Enweghị oke oge"], answer: 1, why: "ged.com kwuru na ule Math bụ nkeji 115, gụnyere ntụziaka na nlegharị anya." },
      { objective: "O1", q: "Kedu ngwa n'efu na-egosi gị ihuenyo ule Math GED na ụdị ajụjụ ya?", options: ["Ule ihe atụ GED Math na ged.com", "App ajụjụ ọ bụla", "Egwuregwu vidiyo", "Ọ dịghị nke dị"], answer: 0, why: "ged.com na-enye ule ihe atụ Math n'efu." },
      { objective: "O1", q: "Kedu ụdị kalkụleta ị nwere ike iweta n'ebe ule GED?", options: ["Ekwentị ọ bụla", "Kalkụleta eserese (graphing)", "A dịghị ekwe kalkụleta ọ bụla mgbe ọ bụla", "TI-30XS"], answer: 3, why: "ged.com kwuru na ị nwere ike iweta TI-30XS nke gị; a na-enye nke ihuenyo n'akụkụ 2." },
      { objective: "O1", q: "Steeti gị na-eji HiSET. Gịnị ka nke ahụ pụtara?", options: ["Ị nweghị ike inweta asambodo", "Ị ga-akwaga steeti ọzọ", "HiSET bụ ule nhatanha sekọndrị ọzọ steeti gị na-eji; lelee iwu ya", "Ị na-ewe naanị ule Math"], answer: 2, why: "Ụfọdụ steeti na-eji HiSET kama GED, ma ọ bụ ha abụọ." },
      { objective: "O2", q: "Gịnị bụ 20 - 4 x 3 + 2?", options: ["50", "10", "6", "18"], answer: 1, why: "Buru ụzọ mụbaa: 12. Wee 20 - 12 + 2 = 10." },
      { objective: "O2", q: "Gịnị bụ 4/5 x 5/8?", options: ["1/2", "9/13", "20/13", "32/25"], answer: 0, why: "20/40 = 1/2." },
      { objective: "O2", q: "Kedu ọnụọgụ dị n'etiti 8 na 9?", options: ["Mgbọrọgwụ abụọ nke 60", "Mgbọrọgwụ abụọ nke 100", "Mgbọrọgwụ abụọ nke 70", "Mgbọrọgwụ abụọ nke 81"], answer: 2, why: "64 < 70 < 81, ya mere mgbọrọgwụ abụọ nke 70 dị n'etiti 8 na 9." },
      { objective: "O3", q: "Gịnị bụ 40% nke 150?", options: ["40", "6", "110", "60"], answer: 3, why: "0.40 x 150 = 60." },
      { objective: "O3", q: "Usoro nri na-eji iko osikapa 2 maka mmadụ 6. Iko ole maka mmadụ 15?", options: ["5", "4", "7.5", "45"], answer: 0, why: "2/6 = x/15, ya mere 6x = 30 na x = 5." },
      { objective: "O3", q: "Gịnị bụ range nke 5, 12, 3, 9, 20?", options: ["9", "17", "49", "20"], answer: 1, why: "Nke kacha ibu wepụ nke kacha nta: 20 - 3 = 17." },
      { objective: "O3", q: "Akpa nwere marbul akwụkwọ ndụ 4 na marbul odo 6. Gịnị bụ ohere ịhọrọ akwụkwọ ndụ?", options: ["4/6", "1/4", "2/5", "6/10"], answer: 2, why: "Akwụkwọ ndụ 4 n'ime ngụkọta 10 = 4/10 = 2/5." },
      { objective: "O4", q: "Dozie: 6x + 5 = 47", options: ["x = 8.67", "x = 6", "x = 42", "x = 7"], answer: 3, why: "Wepụ 5: 6x = 42. Kee site na 6: x = 7." },
      { objective: "O4", q: "Ebe mmega ahụ (gym) na-ana $40 iji banye gbakwunyere $20 kwa ọnwa. I kwụrụ $160. Ọnwa ole?", options: ["6", "8", "10", "4"], answer: 0, why: "40 + 20m = 160, ya mere 20m = 120 na m = 6." },
      { objective: "O4", q: "Dozie: 10 - 2x >= 4", options: ["x >= 3", "x <= 3", "x <= -3", "x >= 7"], answer: 1, why: "Wepụ 10: -2x >= -6. Kee site na -2 ma tụgharịa: x <= 3." },
      { objective: "O5", q: "Gịnị bụ mpaghara triangle nwere base 12 na ogo 5?", options: ["60", "17", "30", "120"], answer: 2, why: "1/2 x 12 x 5 = 30." },
      { objective: "O5", q: "Ogige rektangul bụ 30 feet na 20 feet. Ogologo ngere ole na-aga gburugburu ya?", options: ["600 feet", "50 feet", "100 square feet", "100 feet"], answer: 3, why: "Gburugburu = 2 x (30 + 20) = 100 feet." },
      { objective: "O5", q: "Silinda nwere radius 3 na ogo 10. Ihe dị ka ole bụ olu ya?", options: ["282.74 cubic units", "94.25 cubic units", "30 cubic units", "188.50 cubic units"], answer: 0, why: "pi x 9 x 10 dị ihe dị ka 282.74." },
      { objective: "O6", q: "Gịnị bụ mkpọda site na (2, 7) ruo (5, 1)?", options: ["2", "-2", "-1/2", "6"], answer: 1, why: "(1 - 7) / (5 - 2) = -6 / 3 = -2." },
      { objective: "O6", q: "Ahịrị nwere mkpọda 5 ma gafee y-axis na -3. Nhata ya bụ:", options: ["y = -3x + 5", "y = 5x", "y = 5x - 3", "y = x - 8"], answer: 2, why: "y = mx + b nwere m = 5 na b = -3." },
      { objective: "O6", q: "Ọ bụrụ na f(x) = x^2 + 2, gịnị bụ f(-3)?", options: ["-7", "-1", "8", "11"], answer: 3, why: "(-3)^2 = 9, na 9 + 2 = 11." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 7, 9, 11, 13, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ, wee kesaa atụmatụ ahụ na onye nkuzi ma ọ bụ onye gị na ya na-amụ ihe.",
    criteria: [
      { name: "Ọ maara ule ahụ", objective: "O1", notYet: "O webeghị ule ihe atụ n'efu, ma ọ bụ atụmatụ ahụ enweghị eziokwu ule site na ged.com.", meets: "E dere akara ule ihe atụ; e depụtara akụkụ ihe ule, oge, iwu kalkụleta na ụdị ajụjụ site na ged.com.", exceeds: "Ọ depụtakwara iwu steeti ahụ (GED ma ọ bụ HiSET), otu esi ahazi ule na ego ọ na-efu ugbu a, site na saịtị gọọmentị." },
      { name: "Atụmatụ ọmụmụ nwere ụbọchị", objective: "O1", notYet: "Enweghị ụbọchị, ma ọ bụ enweghị usoro isiokwu.", meets: "Ụbọchị ọmụmụ maka izu 6 ruo 8 nwere ezi ụbọchị na oge, isiokwu 3 kacha sie ike na mbụ, ụbọchị GED Ready na ụbọchị ule a chọrọ.", exceeds: "Ọ gụnyere ụbọchị nlegharị anya na atụmatụ ndabere maka nnọkọ ndị a tụfuru." },
      { name: "Mgbakọ ọnụọgụ na data", objective: "O3", notYet: "Ihe na-erughị 3 n'ime ajụjụ omume ọnụọgụ na data 4 ziri ezi.", meets: "Opekata mpe 3 n'ime ajụjụ ọnụọgụ na data 4 (Nkuzi 2 na 3) ziri ezi, a kọwakwara nke ọ bụla e mehiere.", exceeds: "Ha niile ziri ezi, e gosikwara ọrụ ahụ nke ọma nzọụkwụ na nzọụkwụ." },
      { name: "Aljebra", objective: "O4", notYet: "E doziri nhata omume n'eleleghị ha, ma ọ bụ otu ma ọ bụ ha abụọ adịghị mma.", meets: "Ajụjụ aljebra abụọ ahụ ziri ezi ma e lelere ha site n'itinye azịza azụ.", exceeds: "Ọ na-akọwa iwu ịtụgharị akara maka enweghị nhata n'okwu nke ya." },
      { name: "Jiometrị na eserese", objective: "O6", notYet: "E jiri fọmụla na-ezighi ezi, ụdị nha adịghị, ma ọ bụ akara mkpọda ezighi ezi.", meets: "Ajụjụ jiometrị na eserese (Nkuzi 5 na 6) ziri ezi n'ọtụtụ, nwee ụdị nha ziri ezi na akara mkpọda ziri ezi.", exceeds: "O nwere ike igosi ebe fọmụla ọ bụla dị na mpempe akwụkwọ fọmụla ma see eserese maka ajụjụ mkpọda." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a nwere atụmatụ ọmụmụ na ule nwere ụbọchị nke ruru rubric",
      "Mmụba site n'ule mbido ruo n'ule ikpeazụ",
      "Ndị na-amụ ihe were GED Ready ma ọ bụ ule ihe atụ gọọmentị ọzọ n'ime ụbọchị 60 ma nweta akara ka elu (nnyocha nsochi)",
      "Ndị na-amụ ihe gafere ule Math GED (ma ọ bụ Math HiSET) n'ime ọnwa 6, na ndị gara n'ihu mechaa asambodo ahụ niile"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, pensụl na kalenda",
      "Kalkụleta TI-30XS ma ọ bụrụ na ọ ga-ekwe omume, ma ọ bụ kalkụleta sayensị n'efu n'ịntanetị",
      "Mpempe akwụkwọ fọmụla GED nke ugbu a na mpempe akwụkwọ nkọwa kalkụleta TI-30XS site na ged.com",
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka ule ihe atụ GED Math n'efu",
      "Ihe dị ka awa 2 ruo 3 maka ihe ọmụmụ a, wee usoro ọmụmụ kwa izu nke onye na-amụ ihe n'onwe ya"
    ],
    facilitatorNotes: [
      "Nye ule mbido dị ka mmalite na-enweghị akara; ọtụtụ ndị na-amụ ihe na-atụ egwu Math.",
      "Rụọ ihe atụ ọ bụla na bọọdụ, wee mee ka ndị na-amụ ihe rụọ nke na-esote abụọ abụọ tupu ha arụọ naanị ha.",
      "Bipụta mpempe akwụkwọ fọmụla na mpempe akwụkwọ nkọwa kalkụleta nke ugbu a site na ged.com ka ndị na-amụ ihe jiri ihe ha ga-ahụ mee omume.",
      "Nyere ndị na-amụ ihe aka ilele iwu steeti ha (GED ma ọ bụ HiSET, afọ, ID, ego, n'ịntanetị ma ọ bụ n'ebe ule) na saịtị gọọmentị; ekwula ego ma ọ bụ akara ngafe site n'ncheta.",
      "Na mmemme ụlọ mkpọrọ ma ọ bụ re-entry, jụọ ọfịs agụmakwụkwọ otu e si ahazi ule n'ebe ahụ.",
      "Jikọta ihe ọmụmụ a na \"Mgbakọ na Mwepụ Kwa Ụbọchị maka Ọrụ na Ndụ\" maka ndị na-amụ ihe chọrọ omume ọzọ na ọkara na pasentị."
    ]
  }
};

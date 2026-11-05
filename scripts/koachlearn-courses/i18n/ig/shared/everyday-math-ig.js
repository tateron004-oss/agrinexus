"use strict";

// Koach Learn course (Igbo translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. All money and pay examples are made up for practice.

const DOL_OT = { name: "U.S. Department of Labor: Overtime pay (n'asụsụ bekee)", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: Social Security and Medicare withholding rates (n'asụsụ bekee)", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals, akwụkwọ mmụta mmefu ego n'efu (n'asụsụ bekee)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-ig",
  lang: "ig",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Mgbakọ na Mwepụ Kwa Ụbọchị maka Ọrụ na Ndụ",
  skills: "Fraction, decimal na percent, Mbelata ọnụahịa, ụtụ isi, tip na mmụba ụgwọ, Ọnụahịa otu unit na ịzụ nke ka mma, Ntụle na awa ọrụ, Ilele paystub, Ịhazi budget kwa ọnwa",
  outcome: "ime mgbakọ ị na-ahụ n'ọrụ na n'ụlọ: iji fraction, decimal na percent, ịchọta ihe ka mma ịzụ, ịtụ ihe na ịgbanwe unit, ilele paystub gị, na ịhazi budget kwa ọnwa site n'ụgwọ ọrụ gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ inwekwa obi ike na ọnụọgụ: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị si mba ọzọ bịa, ndị nne na nna, na onye ọ bụla na-alaghachi n'ịmụ ihe. Ọ dịghị mkpa ka i cheta mgbakọ ụlọ akwụkwọ. Anyị na-amalite site na mbido, na ihe ndị dị adị dị ka akara ọnụahịa mbelata, eriri ntụle na ụgwọ ọrụ.",
    "Ị ga-eme omume fraction, decimal na percent; gbakọọ mbelata ọnụahịa, ụtụ isi ahịa (sales tax), tip na mmụba ụgwọ; tụnyere ọnụahịa otu unit n'ụlọ ahịa; tụọ ma gbanwee unit maka ọrụ; lelee ahịrị ọ bụla nke paystub; ma hazie budget kwa ọnwa.",
    "Ndị a bụ otu nka ahụ ọtụtụ ule ọrụ na ule GED Math (ule US na-enye asambodo dị ka nke ụlọ akwụkwọ sekọndrị) na-amalite. Mgbe i mechara, \"Ịkwado maka Ule GED: Mgbakọ na Mwepụ\" bụ ezigbo nzọụkwụ ọzọ. Ihe ọmụmụ a anaghị enye asambodo ma ọ bụ diploma; ọ na-ewulite nka.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ihe atụ e gbakọrọ agbakọ na ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ na kalkuleta ekwentị. Obere nnwale nwere ajụjụ 2 na-eso nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ. Ihe atụ ụgwọ ọrụ na ego niile bụ ndị e chepụtara maka omume."
  ],
  finalTask: "Mee \"Mpempe Mgbakọ Ọrụ na Ego\" nke gị n'otu peeji: (1) lelee paystub omume (ma ọ bụ nke gị, kpuchie ọnụọgụ nzuzo) otu ahịrị n'otu ahịrị: awa ugboro ọnụ ụgwọ, overtime, ihe e wepụrụ na net pay; (2) gbanwee ụgwọ ahụ ka ọ bụrụ ego kwa ọnwa ma hazie budget kwa ọnwa nwere ahịrị ego nchekwa, ebe mmefu na-agafeghị ego na-abata; (3) tụnyere ọnụahịa otu unit nke ihe 3 ị na-azụkarị ma dee nke ka mma ịzụ. Debe ya ma melite ya kwa ọnwa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-alaghachi n'ịmụ ihe: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị si mba ọzọ bịa, ndị nne na nna, na ndị ọrụ meworo agadi. Ọtụtụ hapụrụ ụlọ akwụkwọ n'oge ma ọ bụ emebeghị mgbakọ n'akwụkwọ ọtụtụ afọ, ụfọdụ na-atụkwa ụjọ maka ọnụọgụ.",
    startingPoint: "Ha nwere ike ịgbakọ, iwepụ ma jiri kalkuleta ekwentị mee mgbakọ dị mfe. Ọtụtụ enweghị obi ike na fraction, percent, ịgbanwe unit na ihe e wepụrụ na paystub, ọ bụkwa mmadụ ole na ole na-edebe budget e dere ede.",
    gap: "Ọrụ na ndụ kwa ụbọchị chọrọ mgbakọ ngwa ngwa na nke ziri ezi: ịtụ ihe n'ọrụ, ịgụ awa, ilele ụgwọ ọrụ, ịchọta ezi ọnụahịa na ime ka ego ruo njedebe ọnwa. Mperi na-efu ego, a pụkwara ọ gaghị ahụ ha na paystub. Nka ndị a bụkwa ntọala maka ule GED Math na ọtụtụ ule a na-enye tupu e were mmadụ n'ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; ọtụtụ ihe atụ e gbakọrọ agbakọ",
      "Ngwa: akwụkwọ, pensụl na kalkuleta ekwentị nkịtị; enweghị mmemme pụrụ iche",
      "Ụjọ mgbakọ: obere nzọụkwụ, lelee azịza n'ụzọ abụọ, enweghị nrụgide oge",
      "Nzuzo: paystub omume bụ ndị e chepụtara; kpuchie ọnụọgụ Social Security na akaụntụ na nke ezi",
      "Iwu na-agbanwe (ọnụ ụtụ isi, overtime) na-eduga n'isi iyi gọọmentị; iwu steeti dị iche iche"
    ],
    prerequisites: "Ịgbakọ, iwepụ na ịmụba nkịtị, site na kalkuleta ma ọ bụ n'enweghị ya."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị fraction, decimal, percent na eriri ntụle", action: "ịgbanwe n'etiti fraction, decimal na percent ma gụọ eriri ntụle ruo 1/8 inch kacha nso", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọnụahịa, ụgwọ ihe i riri ma ọ bụ ọnụ ụgwọ ọrụ", action: "ịgbakọ mbelata ọnụahịa, ụtụ isi ahịa, tip ma ọ bụ mmụba ụgwọ site n'iji percent", standard: "ruo cent kacha nso" },
    { id: "O3", condition: "Mgbe e nyere gị nha abụọ nke otu ngwaahịa na ọnụahịa ha", action: "ịgbakọ ọnụahịa otu unit nke ọ bụla ma họrọ nke ka mma ịzụ", standard: "ma họrọ nke ziri ezi opekata mpe na 4 n'ime ụzọ 5" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ dị ka ịtọ ala ime ụlọ ma ọ bụ idekọ oge ọrụ", action: "ịgbanwe unit ma gbakọọ area ma ọ bụ awa ọrụ", standard: "na unit ziri ezi, na-agbago elu mgbe ị chọrọ ihe zuru ezu" },
    { id: "O5", condition: "Mgbe e nyere gị paystub", action: "ilele awa, ọnụ ụgwọ, overtime, ihe e wepụrụ na net pay otu ahịrị n'otu ahịrị", standard: "ka ahịrị ọ bụla dabara ruo cent, ma ọ bụ dee mperi ahụ ka ị jụọ maka ya" },
    { id: "O6", condition: "Mgbe e nyere gị ụgwọ ọrụ na-abịa mgbe niile", action: "ịhazi budget kwa ọnwa nwere ego nchekwa ma mee ka mmefu ghara ịgafe ego na-abata", standard: "ka e dee ụdị mmefu ọ bụla ma lelee mkpokọta" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọnụọgụ ị na-eji kwa ụbọchị",
      lessons: [
        {
          title: "Fraction, decimal, percent na eriri ntụle",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gbanwee n'etiti fraction, decimal na percent ma gụọ eriri ntụle.",
          text: [
            "Fraction, decimal na percent bụ ụzọ atọ e si ede otu ọnụọgụ ahụ. Ọkara pizza bụ 1/2, ma ọ bụ 0.5, ma ọ bụ 50%. Otu ụzọ n'ime anọ bụ 1/4, 0.25 ma ọ bụ 25%. Ụzọ atọ n'ime anọ bụ 3/4, 0.75 ma ọ bụ 75%.",
            "Iji gbanwee fraction ka ọ bụrụ decimal, kee ọnụọgụ dị n'elu site n'ọnụọgụ dị n'ala: 3/8 bụ 3 kere 8, nke bụ 0.375. Iji gbanwee decimal ka ọ bụrụ percent, bugharịa ntụpọ decimal ebe abụọ gaa n'aka nri: 0.375 bụ 37.5%. Iji si n'percent gaa na decimal, bugharịa ya ebe abụọ gaa n'aka ekpe: 15% bụ 0.15.",
            "Eriri ntụle na US na-egosi inch ọ bụla kere ụzọ 16 site n'obere akara. Akara kacha ogologo n'etiti inch bụ 1/2. Akara na-esote n'ogologo bụ 1/4 na 3/4. Mgbe ahụ 1/8, 3/8, 5/8 na 7/8. Ndị kacha nta bụ ụzọ iri na isii (sixteenths). Ọ bụrụ na eriri ahụ akwụsị akara 3 nke 1/8 gafere 5, ọ na-agụ 5 na 3/8 inch.",
            "Ịgbakọ fraction nwere otu ọnụọgụ n'ala dị mfe: gbakọọ ndị dị n'elu ma hapụ nke dị n'ala. 1/8 + 3/8 = 4/8, nke bụ otu ihe ahụ na 1/2."
          ],
          steps: ["Fraction gaa na decimal: kee nke elu site na nke ala.", "Decimal gaa na percent: bugharịa ntụpọ ebe 2 gaa n'aka nri.", "Percent gaa na decimal: bugharịa ntụpọ ebe 2 gaa n'aka ekpe.", "Eriri ntụle: chọta inch zuru ezu, wee gụọ akara gafere ya.", "Mee ka ọ dị mfe: 4/8 bụ otu ihe ahụ na 1/2."],
          words: [["Fraction", "otu akụkụ nke ihe zuru ezu, e dere ọnụọgụ n'elu na ọnụọgụ n'ala, dị ka 3/4."], ["Numerator", "ọnụọgụ dị n'elu fraction: akụkụ ole ị nwere."], ["Denominator", "ọnụọgụ dị n'ala fraction: akụkụ ole hà nhata na-eme ihe zuru ezu."], ["Decimal", "ọnụọgụ nwere ntụpọ, dị ka 0.75, na-egosi akụkụ nke ihe zuru ezu."], ["Percent (%)", "akụkụ n'ime 100. 25% pụtara 25 n'ime 100."]],
          slides: [
            { title: "Ụzọ atọ e si ede otu ọnụọgụ", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Ịgbanwe", bullets: ["Fraction gaa na decimal: kee nke elu site na nke ala (3/8 = 0.375)", "Decimal gaa na percent: ntụpọ ebe 2 gaa n'aka nri (37.5%)", "Percent gaa na decimal: ntụpọ ebe 2 gaa n'aka ekpe (15% = 0.15)"] },
            { title: "Ịgụ eriri ntụle", bullets: ["Akara kacha ogologo n'etiti: 1/2", "Mgbe ahụ 1/4 na 3/4, wee ụzọ asatọ, wee ụzọ iri na isii", "Inch 5 na akara 3 nke 1/8 = 5 3/8 in"] }
          ],
          tryIt: "Omume (azịza dị n'okpuru): (1) Dee 1/4 dị ka decimal na percent. (2) Dee 0.6 dị ka percent. (3) Dee 8% dị ka decimal. (4) Gbanwee 5/8 ka ọ bụrụ decimal. (5) Gbakọọ 1/4 + 1/4. Azịza: (1) 0.25 na 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, nke bụ 1/2. Ọ bụrụ na i nwere eriri ntụle ma ọ bụ rula, tụọ ihe 3 n'ụlọ ruo 1/8 inch kacha nso.",
          youCanNow: "ịgbanwe n'etiti fraction, decimal na percent ma gụọ eriri ntụle ruo 1/8 inch kacha nso.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ 3/4 dị ka percent?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 kere 4 bụ 0.75, ịbugharị ntụpọ ebe abụọ gaa n'aka nri na-enye 75%." },
            { objective: "O1", q: "Gịnị bụ 6% dị ka decimal?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Bugharịa ntụpọ ebe abụọ gaa n'aka ekpe: 6% = 0.06." }
          ]
        },
        {
          title: "Mbelata ọnụahịa, ụtụ isi ahịa, tip na mmụba ụgwọ",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gbakọọ mbelata ọnụahịa, ụtụ isi ahịa, tip na mmụba ụgwọ site n'iji percent.",
          text: [
            "Iji chọta percent nke ọnụọgụ, gbanwee percent ahụ ka ọ bụrụ decimal ma mụbaa. 20% nke $45 bụ 0.20 x 45 = $9.",
            "Mbelata ọnụahịa (discount): wepụ ya n'ọnụahịa. Jaketị $45 nke e belatara 20% na-efu 45 - 9 = $36. Ụtụ isi ahịa (sales tax): tinye ya. Ọ bụrụ na ọnụ ụtụ isi bụ 8%, ụtụ isi na $36 bụ 0.08 x 36 = $2.88, ya mere ị ga-akwụ $38.88. Ọnụ ụtụ isi ahịa dị iche na steeti na obodo ọ bụla; lelee ụlọ ọrụ ụtụ isi steeti gị ma ọ bụ lee akwụkwọ nnata ego (receipt).",
            "Tip n'enweghị kalkuleta: chọta 10% site n'ibugharị ntụpọ otu ebe gaa n'aka ekpe, wee wulite site na ya. Na ụgwọ $28, 10% bụ $2.80, 5% bụ ọkara ya, $1.40, ya mere 15% bụ $2.80 + $1.40 = $4.20. 20% bụ 10% ugboro abụọ: $5.60.",
            "Mmụba ụgwọ (raise): mmụba 3% na $16.00 kwa awa bụ 0.03 x 16 = $0.48, ya mere ọnụ ụgwọ ọhụrụ bụ $16.48 kwa awa. Lezie okwu anya: \"20% off\" pụtara na ị na-akwụ 80% nke ọnụahịa; \"20% more\" pụtara na ị na-akwụ 120%."
          ],
          steps: ["Gbanwee percent ka ọ bụrụ decimal.", "Mụbaa ya na ego ahụ.", "Mbelata: wepụ. Ụtụ isi ma ọ bụ tip: tinye. Mmụba ụgwọ: tinye ya n'ọnụ ụgwọ ochie.", "Mee ka ego ruo cent kacha nso.", "Lelee: azịza ahụ ọ dabara? Mbelata ga-adị obere karịa ọnụahịa."],
          words: [["Mbelata ọnụahịa (discount)", "ego e wepụrụ n'ọnụahịa."], ["Ụtụ isi ahịa (sales tax)", "ụtụ isi a na-agbakwunye n'ọnụahịa mgbe ị na-akwụ ụgwọ; ọnụ ya dabere na steeti na obodo gị."], ["Tip", "ego mgbakwunye ị na-enye maka ọrụ e mere gị, a na-agbakọkarị ya dị ka percent nke ụgwọ."], ["Mmụba ụgwọ (raise)", "mmụba n'ọnụ ụgwọ ọrụ gị."], ["Ime ka ọ ruo (round)", "ime ka ọnụọgụ dị mfe; a na-eme ka ego ruo cent kacha nso."]],
          slides: [
            { title: "Percent nke ọnụọgụ", bullets: ["Gbanwee percent ka ọ bụrụ decimal", "Mụbaa: 20% nke $45 = 0.20 x 45 = $9"] },
            { title: "Mbelata na ụtụ isi", bullets: ["20% off na $45: 45 - 9 = $36", "Ụtụ isi 8% na $36: 0.08 x 36 = $2.88", "Ị ga-akwụ $38.88; ọnụ ụtụ isi dị iche na steeti na obodo"] },
            { title: "Tip n'isi gị", bullets: ["10%: bugharịa ntụpọ otu ebe gaa n'aka ekpe", "Ụgwọ $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Mmụba ụgwọ", bullets: ["3% nke $16.00 = $0.48", "Ọnụ ụgwọ ọhụrụ: $16.48 kwa awa", "20% off = kwụọ 80%; 20% more = kwụọ 120%"] }
          ],
          tryIt: "Omume (azịza dị n'okpuru): (1) Akpụkpọ ụkwụ ọrụ $60 nwere mbelata 25%. Gịnị bụ ọnụahịa ya ugbu a? (2) Ụtụ isi bụ 7% na ihe $50. Gịnị bụ mkpokọta? (3) Chọta tip 20% na ụgwọ $35. (4) Ọnụ ụgwọ gị $15.50 nwetara mmụba 4%. Gịnị bụ ọnụ ụgwọ ọhụrụ? Azịza: (1) $45; (2) ụtụ isi $3.50, mkpokọta $53.50; (3) $7.00; (4) $0.62 karịa, $16.12 kwa awa. Wee lee ezi akwụkwọ nnata ego (receipt) ma chọta ọnụ ụtụ isi ebe obibi gị nara.",
          youCanNow: "ịgbakọ mbelata ọnụahịa, ụtụ isi ahịa, tip na mmụba ụgwọ ruo cent kacha nso.",
          quickCheck: [
            { objective: "O2", q: "Uwe oyi $80 nwere mbelata 25%. Gịnị bụ ọnụahịa ya ugbu a?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% nke 80 bụ 20, na 80 - 20 = $60." },
            { objective: "O2", q: "Gịnị bụ tip 15% na ụgwọ $40?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% bụ $4.00 na 5% bụ $2.00, ya mere 15% bụ $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: State tax agency links (n'asụsụ bekee)", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Ọnụahịa otu unit: ịchọta nke ka mma ịzụ",
          objectives: ["O3"],
          minutes: 5,
          goal: "Gbakọọ ọnụahịa otu unit ma họrọ nke ka mma ịzụ.",
          text: [
            "Ọnụahịa otu unit (unit price) bụ ọnụ otu unit: otu ounce, otu pound, otu mkpụrụ. Ọ na-enyere gị aka ịtụnyere nha dị iche iche n'ụzọ ziri ezi. Iji chọta ya, kee ọnụahịa site n'ọnụọgụ unit.",
            "Ihe atụ: igbe cereal ounce 24 na-efu $4.80. $4.80 / 24 = $0.20 kwa ounce. Igbe ounce 36 na-efu $6.12. $6.12 / 36 = $0.17 kwa ounce. Igbe nke ka ukwuu bụ nke ka mma ịzụ.",
            "Nke ka ukwuu anaghị adị ọnụ ala mgbe niile. Akpa osikapa pound 2 na $3.18 bụ $1.59 kwa pound. Akpa pound 5 na $8.45 bụ $1.69 kwa pound. N'ebe a, akpa nke nta bụ nke ka mma ịzụ. Ọtụtụ ụlọ ahịa na-ebipụta ọnụahịa otu unit n'obere mkpụrụ edemede n'akara ọnụahịa dị na shelf; lelee na akara abụọ ahụ na-eji otu unit ahụ.",
            "Nke ka mma ịzụ na-aka mma naanị ma ọ bụrụ na ị ga-eji ya tupu ọ mebie, ma ị nwekwara ike ịkwụ ụgwọ ya n'izu a. Ọnụahịa otu unit na-enyekwa aka n'ọrụ, dị ka mgbe a na-azụ ngwa ọrụ."
          ],
          steps: ["Dee ọnụahịa na nha nke ihe ọ bụla.", "Lelee na unit dabara (ounce na ounce).", "Kee: ọnụahịa / nha = ọnụahịa otu unit.", "Tụnyere: nke ọnụahịa otu unit ya dị ala bụ nke ka mma ịzụ.", "Jụọ: ọ̀ ga m eji ya niile, ọ̀ ga m enwe ike ịkwụ ya ugbu a?"],
          words: [["Ọnụahịa otu unit (unit price)", "ọnụ otu unit, dị ka otu ounce ma ọ bụ otu pound."], ["Ounce (oz)", "obere unit ịdị arọ; ounce 16 na-eme 1 pound."], ["Pound (lb)", "unit ịdị arọ hà nhata ounce 16."], ["Akara ọnụahịa shelf (shelf tag)", "akara ọnụahịa dị na shelf ụlọ ahịa; ọ na-egosikarị ọnụahịa otu unit."]],
          slides: [
            { title: "Ọnụahịa otu unit = ọnụahịa / nha", bullets: ["Ọnụ otu ounce, pound ma ọ bụ otu ihe", "Tụnyere nha dị iche iche n'ụzọ ziri ezi"] },
            { title: "Ihe atụ cereal", bullets: ["24 oz na $4.80 = $0.20 kwa ounce", "36 oz na $6.12 = $0.17 kwa ounce", "Igbe nke ka ukwuu meriri ebe a"] },
            { title: "Nke ka ukwuu anaghị adị ọnụ ala mgbe niile", bullets: ["Osikapa 2 lb $3.18 = $1.59 kwa pound", "Osikapa 5 lb $8.45 = $1.69 kwa pound", "Akpa nke nta meriri ebe a"] },
            { title: "Ịzụ ihe n'amamihe", bullets: ["Lelee akara shelf, otu unit ahụ n'abụọ", "Ị̀ ga-eji ya tupu ọ mebie?", "Ị̀ nwere ike ịkwụ ya n'izu a?"] }
          ],
          tryIt: "Omume (azịza dị n'okpuru): (1) Akwa 12 na $3.60 ka ọ bụ akwa 18 na $5.04? (2) Mmanya mkpụrụ osisi (juice) 64 oz na $3.84 ka ọ bụ 128 oz na $6.40? Azịza: (1) $0.30 kwa akwa ma $0.28 kwa akwa: akwa 18 ka mma; (2) $0.06 kwa ounce ma $0.05 kwa ounce: 128 oz ka mma. Wee, n'ụlọ ahịa ma ọ bụ na weebụsaịtị ụlọ ahịa, chọta ọnụahịa otu unit nke ihe 3 ị na-azụkarị na nha abụọ ma dee nke ka mma ịzụ. Nke a ga-aba na mpempe ọrụ ikpeazụ gị.",
          youCanNow: "ịchọta ọnụahịa otu unit ma họrọ nke ka mma ịzụ, ma mara mgbe nha ka ukwuu na-erughị ya.",
          quickCheck: [
            { objective: "O3", q: "Akpa nduku pound 10 na-efu $5.90. Gịnị bụ ọnụahịa otu unit?", options: ["$0.59 kwa pound", "$5.90 kwa pound", "$1.69 kwa pound", "$59.00 kwa pound"], answer: 0, why: "$5.90 / 10 = $0.59 kwa pound." },
            { objective: "O3", q: "Ncha A: mkpụrụ 3 na $2.70. Ncha B: mkpụrụ 8 na $8.00. Kedu nke ka mma ịzụ?", options: ["Ncha B, n'ihi na ọ nwere mkpụrụ karịa", "Ha na-efu otu ego kwa mkpụrụ", "Ncha B, n'ihi na ọ dị oke ọnụ", "Ncha A, na $0.90 kwa mkpụrụ ma $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 na $8.00 / 8 = $1.00, ya mere A na-efu obere ego kwa mkpụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọnụọgụ ị na-eji kwa ụbọchị",
        questions: [
          { objective: "O1", q: "Gịnị bụ 1/8 dị ka decimal?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 kere 8 bụ 0.125." },
          { objective: "O1", q: "N'eriri ntụle, akara kacha ogologo n'etiti inch 4 na 5 bụ:", options: ["4 1/2 inch", "4 1/8 inch", "4 1/16 inch", "5 inch"], answer: 0, why: "Akara kacha ogologo n'etiti inch bụ akara 1/2." },
          { objective: "O2", q: "Ụtụ isi ahịa bụ 6% na ihe $25 i zụrụ. Ego ole bụ ụtụ isi ahụ?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Ụgwọ gị si na $14.00 gaa na $14.70 kwa awa. Mmụba percent ole ka nke ahụ bụ?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "Mmụba ahụ bụ $0.70, na 0.70 / 14.00 = 0.05, nke bụ 5%." },
          { objective: "O3", q: "Kedu nke ka mma ịzụ: peanut butter 16 oz na $3.20 ka ọ bụ 40 oz na $7.20?", options: ["16 oz, na $0.20 kwa ounce", "Ha bụ otu", "40 oz, na $0.18 kwa ounce", "Ị nweghị ike ịma"], answer: 2, why: "$3.20 / 16 = $0.20 na $7.20 / 40 = $0.18, ya mere ite 40 oz na-efu obere ego kwa ounce." }
        ]
      }
    },
    {
      name: "Isi 2: Mgbakọ maka ọrụ na ego",
      lessons: [
        {
          title: "Ịtụ ihe, ịgbanwe unit na ịgụ awa ọrụ",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gbanwee unit ma gbakọọ area na awa ọrụ maka ọrụ.",
          text: [
            "Unit a na-ejikarị na US: inch 12 = 1 foot, feet 3 = 1 yard, ounce 16 = 1 pound, pint 2 = 1 quart, quart 4 = 1 gallon. Ụfọdụ ọrụ na-eji metric: 1 inch = 2.54 centimeter, 1 kilogram dị ihe dị ka pound 2.2. Iji gbanwee unit buru ibu ka ọ bụrụ obere unit, mụbaa; iji gbanwee obere unit ka ọ bụrụ unit buru ibu, kee. Inch 90 / 12 = feet 7.5.",
            "Area bụ oghere ihe dị larịị na-ekpuchi: ogologo x obosara, na square unit. Ime ụlọ feet 12 na feet 10 bụ 12 x 10 = 120 square feet. Ọ bụrụ na otu igbe ihe ntọ ala (flooring) na-ekpuchi 20 square feet, ị chọrọ 120 / 20 = igbe 6. Ndị ọrụ na-agbakwunyekarị ihe dị ka 10% maka ibipụ na mperi: 120 x 1.10 = 132, na 132 / 20 = 6.6. Ị pụghị ịzụ 0.6 nke igbe, ya mere gbagoo ELU ruo 7.",
            "Awa ọrụ: gụọ site na mmalite ruo njedebe, wee wepụ ezumike a na-adịghị akwụ ụgwọ ya. Oge ọrụ site na 7:30 am ruo 4:00 pm bụ awa 8 1/2; wepụ nri ehihie nkeji 30 a na-adịghị akwụ ụgwọ ya, ọ bụ awa 8. Ọtụtụ kaadị oge (timecard) na-eji awa decimal: nkeji 15 = 0.25, nkeji 30 = 0.5, nkeji 45 = 0.75. Ụfọdụ ebe ọrụ na-eji elekere awa 24: 15:00 bụ 3:00 pm."
          ],
          steps: ["Dee ihe i nwere na unit ị chọrọ.", "Unit buru ibu gaa na obere: mụbaa. Obere gaa na nke buru ibu: kee.", "Area: ogologo x obosara, na square unit.", "Mgbe ị chọrọ ihe zuru ezu (igbe, akpa): gbagoo elu mgbe niile.", "Awa: oge njedebe wepụ oge mmalite, wepụ ezumike a na-adịghị akwụ ụgwọ ya; gbanwee nkeji ka ọ bụrụ decimal site n'ike ya na 60."],
          words: [["Unit", "ihe ị na-eji atụ, dị ka inch, feet, pound ma ọ bụ awa."], ["Ịgbanwe (convert)", "ịgbanwe ntụle site n'otu unit gaa na nke ọzọ."], ["Area", "oghere ihe dị larịị na-ekpuchi: ogologo ugboro obosara, na square unit."], ["Square feet (sq ft)", "unit maka area mgbe ị na-atụ na feet."], ["Metric", "usoro ntụle a na-eji n'ọtụtụ ụwa: centimeter, meter, kilogram, liter."], ["Awa decimal", "oge e dere dị ka decimal, dị ka awa 7.75 maka awa 7 na nkeji 45."]],
          slides: [
            { title: "Unit ị ga-amata", bullets: ["12 in = 1 ft; 3 ft = 1 yd", "16 oz = 1 lb; 4 qt = 1 gal", "1 in = 2.54 cm; 1 kg dị ihe dị ka 2.2 lb", "Buru ibu gaa na obere: mụbaa. Obere gaa na buru ibu: kee"] },
            { title: "Area maka ọrụ", bullets: ["Ime ụlọ 12 ft x 10 ft = 120 sq ft", "Tinye 10% maka ibipụ: 132 sq ft", "20 sq ft kwa igbe: 6.6, ya mere zụta igbe 7"] },
            { title: "Ịgụ awa", bullets: ["7:30 am ruo 4:00 pm = awa 8.5", "Wepụ nri ehihie nkeji 30 a na-adịghị akwụ = awa 8", "Nkeji 15 = 0.25, nkeji 30 = 0.5, nkeji 45 = 0.75"] }
          ],
          tryIt: "Omume (azịza dị n'okpuru): (1) Gbanwee feet 5 ka ọ bụrụ inch. (2) Gbanwee ounce 48 ka ọ bụrụ pound. (3) Ime ụlọ nchekwa bụ feet 9 na feet 14. Gịnị bụ area ya? (4) Agba na-ekpuchi ihe dị ka 350 square feet kwa gallon (na kom a e chepụtara). Ị ga-ekpuchi 800 square feet. Gallon ole ka ị ga-azụ? (5) Ị na-arụ ọrụ site na 6:45 am ruo 3:15 pm, nwere nri ehihie nkeji 30 a na-adịghị akwụ. Awa ole, dị ka decimal? Azịza: (1) inch 60; (2) pound 3; (3) 126 square feet; (4) 800 / 350 = 2.29, ya mere zụta gallon 3; (5) awa 8.5 wepụ 0.5 = awa 8.0.",
          youCanNow: "ịgbanwe unit, ịchọta area, ịgbago elu maka ihe zuru ezu na ịgụ awa ọrụ gị dị ka decimal.",
          quickCheck: [
            { objective: "O4", q: "Ị chọrọ akpa 4.2 nke ngwakọta concrete. Akpa ole ka ị ga-azụ?", options: ["4", "4.2", "42", "5"], answer: 3, why: "Ị pụghị ịzụ akụkụ nke akpa, ya mere gbagoo elu ruo 5." },
            { objective: "O4", q: "Awa 7 na nkeji 45 bụ awa ole dị ka decimal?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, ya mere ọ bụ awa 7.75." }
          ]
        },
        {
          title: "Ilele paystub gị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Lelee awa, ọnụ ụgwọ, overtime, ihe e wepụrụ na net pay na paystub.",
          text: [
            "Paystub na-egosi otu e si gbakọọ ụgwọ ọrụ gị. Gross pay bụ ihe i nwetara tupu e wepụ ihe ọ bụla. Deductions bụ ego e wepụrụ, dị ka ụtụ isi. Net pay bụ ihe ị na-enweta n'ezie: gross pay wepụ deductions. YTD pụtara year to date: mkpokọta ruo ugbu a n'afọ a.",
            "Paystub omume (e chepụtara ya): awa 45 na $18.00 kwa awa. N'okpuru iwu gọọmentị etiti (federal), ndị ọrụ a na-akwụ kwa awa nke iwu ahụ kpuchiri na-enweta overtime maka awa karịrị 40 n'izu ọrụ, opekata mpe ugboro otu na ọkara. Ya mere: 40 x $18.00 = $720.00 ụgwọ nkịtị. Ọnụ overtime bụ $18.00 x 1.5 = $27.00, na 5 x $27.00 = $135.00. Gross pay = $855.00. Ụfọdụ steeti nwere iwu overtime ndị ọzọ; lelee ụlọ ọrụ ọrụ steeti gị.",
            "Deductions na paystub a: Social Security 6.2% nke $855.00 = $53.01. Medicare 1.45% = $12.40. Ụtụ isi federal $60.00 na ụtụ isi steeti $20.00 (ndị a dabere na fọm W-4 gị na steeti gị; e chepụtara ha ebe a). Mkpokọta deductions = $145.41. Net pay = $855.00 - $145.41 = $709.59.",
            "Ọ bụrụ na ahịrị ezighi ezi, dee ụbọchị ụgwọ, ahịrị ahụ na ihe ị tụrụ anya ya, wee buru ụzọ jụọ payroll ma ọ bụ onye isi gị. Ọ bụrụ na e mezighị ya, ị nwere ike ịkpọtụrụ ụlọ ọrụ ọrụ steeti gị ma ọ bụ Wage and Hour Division nke U.S. Department of Labor. Debe paystub gị, ma kpuchie ọnụọgụ Social Security gị tupu i gosi onye ọ bụla."
          ],
          steps: ["Tụnyere awa ahụ na ndekọ nke gị banyere awa i ji rụọ ọrụ.", "Ụgwọ nkịtị: ruo awa 40 x ọnụ ụgwọ gị.", "Overtime: awa karịrị 40 x (ọnụ ụgwọ x 1.5), ma ọ bụrụ na iwu ahụ kpuchiri gị.", "Gross pay = ụgwọ nkịtị + overtime + ụgwọ ọ bụla ọzọ.", "Gbakọọ deductions niile.", "Net pay = gross pay - mkpokọta deductions. Ọ̀ dabara na paystub ahụ?", "Ọ bụrụ na ọ dabaghị, dee ya ma jụọ payroll."],
          words: [["Paystub", "akwụkwọ ma ọ bụ ndekọ n'ịntanetị na-egosi otu e si gbakọọ ụgwọ ọrụ gị."], ["Gross pay", "ihe i nwetara tupu e wepụ ihe ọ bụla."], ["Net pay", "ihe ị na-ebu ala mgbe e wepụchara deductions; a na-akpọkwa ya take-home pay."], ["Deduction", "ego e wepụrụ n'ụgwọ ọrụ gị, dị ka ụtụ isi ma ọ bụ inshọransị."], ["Overtime", "ụgwọ mgbakwunye, opekata mpe ugboro 1.5 nke ọnụ ụgwọ gị, maka awa karịrị 40 n'izu ọrụ nke iwu federal kpuchiri."], ["YTD (year to date)", "mkpokọta site na Jenụwarị 1 ruo ụgwọ ọrụ a."], ["W-4", "fọm ị na-enye onye were gị n'ọrụ nke na-ekpebi ego ụtụ isi federal a ga-ewepụ."]],
          slides: [
            { title: "Okwu paystub", bullets: ["Gross pay: ihe i nwetara tupu deductions", "Deductions: ụtụ isi na ego ndị ọzọ e wepụrụ", "Net pay: ihe ị na-ebu ala", "YTD: mkpokọta ruo ugbu a n'afọ a"] },
            { title: "Paystub omume: awa 45 na $18.00", bullets: ["Nkịtị: 40 x $18.00 = $720.00", "Overtime: 5 x $27.00 = $135.00", "Gross pay: $855.00"] },
            { title: "Deductions na net pay", bullets: ["Social Security 6.2% = $53.01; Medicare 1.45% = $12.40", "Federal $60.00 + steeti $20.00 (e chepụtara)", "Net: $855.00 - $145.41 = $709.59"] },
            { title: "Ọ bụrụ na ihe ezighi ezi", bullets: ["Dee ụbọchị, ahịrị na ihe ị tụrụ anya ya", "Buru ụzọ jụọ payroll ma ọ bụ onye isi gị", "Wee ụlọ ọrụ ọrụ steeti gị ma ọ bụ DOL Wage and Hour Division"] }
          ],
          tryIt: "Omume (azịza dị n'okpuru): I rụrụ ọrụ awa 42 na $16.00 kwa awa. Deductions: Social Security 6.2%, Medicare 1.45%, ụtụ isi federal $45.00, ụtụ isi steeti $15.00 (e chepụtara). Chọta (1) ụgwọ nkịtị, (2) ụgwọ overtime, (3) gross pay, (4) mkpokọta deductions, (5) net pay. Azịza: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Wee lelee ezi paystub nke gị n'otu ụzọ ahụ, kpuchie ọnụọgụ nzuzo.",
          youCanNow: "ilele ahịrị ọ bụla nke paystub ma mara ihe ị ga-eme ma ọ bụrụ na ihe adabaghị.",
          quickCheck: [
            { objective: "O5", q: "Gross pay bụ $600.00, mkpokọta deductions bụ $95.00. Gịnị bụ net pay?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Net pay = gross pay - deductions = 600 - 95 = $505.00." },
            { objective: "O5", q: "Ị na-enweta $20.00 kwa awa, iwu overtime federal kpuchikwara gị. Gịnị bụ ọnụ overtime gị?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Ugboro otu na ọkara: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Ịhazi budget kwa ọnwa site n'ụgwọ ọrụ gị",
          objectives: ["O6"],
          minutes: 6,
          goal: "Hazie budget kwa ọnwa nwere ego nchekwa nke na-eme ka mmefu ghara ịgafe ego na-abata.",
          text: [
            "Budget bụ atụmatụ maka ego gị. Malite na net pay (take-home) kwa ọnwa. Ọnwa dị ntakịrị ogologo karịa izu 4, ya mere emela naanị ụgwọ izu ugboro 4. A na-akwụ kwa izu: net kwa izu x 52 / 12. A na-akwụ kwa izu abụọ: net x 26 / 12. Ihe atụ: $700 kwa izu x 52 = $36,400 kwa afọ, / 12 = $3,033.33 kwa ọnwa.",
            "Depụta mmefu gị: buru ụzọ dee mkpa (ụlọ, ọkụ na mmiri, nri, njem, ekwentị, nlekọta ụmụaka, ụgwọ kacha nta a ga-akwụ na ụgwọ i ji), wee ego nchekwa, wee ihe ị chọrọ. Ihe atụ: ụlọ $1,200, ọkụ na mmiri $150, ekwentị $50, nri $400, njem $200, ụgwọ $150, ego nchekwa $150. Mkpokọta bụ $2,300, nke na-ahapụ $733.33 maka mkpa ndị ọzọ na ihe ị chọrọ.",
            "Iwu ahụ: mkpokọta mmefu (gụnyere ego nchekwa) ga-adị nhata ma ọ bụ dị obere karịa ego na-abata. Ọ bụrụ na ọ karịrị, wepụ otu ihe ị chọrọ, belata otu ụgwọ, ma ọ bụ chọta ego ọzọ. Lelee mkpokọta site n'ịgbakọ ha ugboro abụọ, ma ọ bụ site na kalkuleta.",
            "Soro ya otu ọnwa. Dee ihe ị na-emefu n'ezie, wee tụnyere ya na atụmatụ gị ma gbanwee ya. Akwụkwọ \"Your Money, Your Goals\" nke Consumer Financial Protection Bureau (CFPB) n'efu nwere mpempe ọrụ ị nwere ike ibipụta."
          ],
          steps: ["Chọta net pay kwa ọnwa (kwa izu x 52 / 12, ma ọ bụ kwa izu abụọ x 26 / 12).", "Depụta mkpa: ụlọ, ọkụ na mmiri, nri, njem, ekwentị, nlekọta ụmụaka, ụgwọ kacha nta.", "Tinye ahịrị ego nchekwa, ọ bụrụgodị obere.", "Tinye ihe ị chọrọ n'ikpeazụ.", "Mkpokọta mmefu ga-adị nhata ma ọ bụ n'okpuru ego na-abata.", "Soro ya otu ọnwa ma gbanwee ya."],
          words: [["Budget", "atụmatụ maka otu ị ga-esi jiri ego gị kwa ọnwa."], ["Ego na-abata (income)", "ego na-abata, dị ka net pay gị."], ["Mmefu (expense)", "ego na-apụ, dị ka ụgwọ ụlọ ma ọ bụ nri."], ["Mmefu na-adịgide (fixed expense)", "mmefu nke na-adị otu kwa ọnwa, dị ka ụgwọ ụlọ."], ["Mmefu na-agbanwe (variable expense)", "mmefu nke na-agbanwe kwa ọnwa, dị ka nri ma ọ bụ mmanụ ụgbọala."]],
          slides: [
            { title: "Ego na-abata kwa ọnwa", bullets: ["Ụgwọ kwa izu x 52 / 12", "Kwa izu abụọ: x 26 / 12", "$700 kwa izu = $3,033.33 kwa ọnwa"] },
            { title: "Usoro mmefu", bullets: ["Mkpa buru ụzọ: ụlọ, ọkụ na mmiri, nri, njem", "Wee ego nchekwa, ọ bụrụgodị obere", "Wee ihe ị chọrọ"] },
            { title: "Iwu ahụ", bullets: ["Mmefu + ego nchekwa nhata ma ọ bụ n'okpuru ego na-abata", "Ọ bụrụ na ọ karịrị: wepụ ihe ị chọrọ, belata ụgwọ, ma ọ bụ nweta ego karịa", "Gbakọọ mkpokọta ugboro abụọ iji lelee"] },
            { title: "Soro ya ma gbanwee", bullets: ["Dee ezi mmefu gị otu ọnwa", "Tụnyere ya na atụmatụ gị", "Mpempe ọrụ CFPB n'efu: Your Money, Your Goals"] }
          ],
          tryIt: "Mechaa ọrụ ikpeazụ gị. Jiri net pay sitere na paystub gị na Nkuzi 5 (ma ọ bụ nke gị) ma gbanwee ya ka ọ bụrụ ego na-abata kwa ọnwa. Dee budget nwere mkpa, ahịrị ego nchekwa na ihe ị chọrọ. Gbakọọ ya ugboro abụọ. Ọ bụrụ na mmefu karịrị ego na-abata, gbanwee ya ruo mgbe ọ dabara. Tinye nlele paystub gị, budget na ntụnyere ọnụahịa otu unit 3 n'otu peeji: \"Mpempe Mgbakọ Ọrụ na Ego\" gị.",
          youCanNow: "ịgbanwe ụgwọ ọrụ ka ọ bụrụ ego na-abata kwa ọnwa ma hazie budget nke dabara ma nwee ego nchekwa.",
          quickCheck: [
            { objective: "O6", q: "Ị na-ebu ala $500 kwa izu. Gịnị bụ ego na-abata kwa ọnwa?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; ịmụba ya na 4 na-ahapụ ụbọchị ndị fọdụrụ." },
            { objective: "O6", q: "Mmefu i zubere karịrị ego na-abata gị $50. Gịnị ka ị ga-eme?", options: ["Hapụ atụmatụ ahụ ma tụọ anya", "Wepụ ahịrị ego nchekwa ma leghara ya anya", "Were payday loan kwa ọnwa", "Wepụ ma ọ bụ belata ụfọdụ mmefu ruo mgbe mmefu dabara"], answer: 3, why: "Budget na-arụ ọrụ naanị mgbe mmefu dị nhata ma ọ bụ n'okpuru ego na-abata." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Mgbakọ maka ọrụ na ego",
        questions: [
          { objective: "O4", q: "Ime ụlọ bụ feet 15 na feet 11. Gịnị bụ area ya?", options: ["26 square feet", "165 square feet", "52 square feet", "1,511 square feet"], answer: 1, why: "Area = ogologo x obosara = 15 x 11 = 165 square feet." },
          { objective: "O4", q: "Inch 60 bụ feet ole?", options: ["feet 5", "feet 720", "feet 6", "feet 48"], answer: 0, why: "Obere unit gaa na nke buru ibu: kee. 60 / 12 = feet 5." },
          { objective: "O5", q: "Na paystub, gịnị bụ gross pay?", options: ["Ihe ị na-ebu ala", "Naanị ụtụ isi", "Ụgwọ otu awa", "Ihe i nwetara tupu deductions"], answer: 3, why: "Gross pay bụ mkpokọta i nwetara tupu e wepụ ihe ọ bụla." },
          { objective: "O5", q: "Paystub gị na-egosi awa 38, ma ndekọ nke gị na-ekwu 41. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Ekwula ihe ọ bụla", "Hapụ ọrụ ahụ", "Dee ụbọchị na awa ma jụọ payroll", "Gbanwee paystub ahụ n'onwe gị"], answer: 2, why: "Malite na payroll ma ọ bụ onye isi gị, jide ndekọ nke gị n'aka." },
          { objective: "O6", q: "Kedu nke dabara n'akụkụ mkpa nke budget?", options: ["Ụgwọ ụlọ", "Egwuregwu vidiyo ọhụrụ", "Tiketi egwu", "Nri a zụtara n'èzí kwa abalị"], answer: 0, why: "Ụgwọ ụlọ bụ mkpa; ndị ọzọ bụ ihe ị chọrọ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mgbakọ na Mwepụ Kwa Ụbọchị maka Ọrụ na Ndụ",
    questions: [
      { objective: "O1", q: "Kedu nke bụ otu ihe ahụ na 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% pụtara 50 n'ime 100, nke bụ 1/2 ma ọ bụ 0.5." },
      { objective: "O1", q: "Gịnị bụ 0.4 dị ka percent?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Bugharịa ntụpọ ebe abụọ gaa n'aka nri: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, nke bụ 3/4"], answer: 3, why: "Otu ọnụọgụ n'ala: gbakọọ ndị dị n'elu. 6/8 na-adị mfe ka ọ bụrụ 3/4." },
      { objective: "O2", q: "Gịnị bụ 10% nke $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Bugharịa ntụpọ otu ebe gaa n'aka ekpe: $7.30." },
      { objective: "O2", q: "Igwe ịkpụ oghere (drill) $120 nwere mbelata 30%. Gịnị bụ ọnụahịa ya ugbu a?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% nke 120 bụ 36, na 120 - 36 = $84." },
      { objective: "O2", q: "\"20% off\" pụtara na ị na-akwụ percent ole nke ọnụahịa?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% nke ọnụahịa." },
      { objective: "O2", q: "Ọnụ ụtụ isi ahịa:", options: ["Bụ otu n'ebe niile na US", "Bụ 10% mgbe niile", "Ụlọ ahịa na-edozi ya", "Dị iche na steeti na obodo, ya mere lelee ụlọ ọrụ ụtụ isi steeti gị ma ọ bụ receipt"], answer: 3, why: "Steeti na ọtụtụ obodo na-edozi ọnụ ụtụ isi ahịa nke ha." },
      { objective: "O3", q: "Kedu otu ị ga-esi chọta ọnụahịa otu unit?", options: ["Ọnụahịa x nha", "Ọnụahịa / nha", "Nha / 100", "Ọnụahịa - nha"], answer: 1, why: "Kee ọnụahịa site n'ọnụọgụ unit." },
      { objective: "O3", q: "Ncha akwa: 50 oz na $6.00 ka ọ bụ 100 oz na $13.00. Kedu nke ka mma ịzụ?", options: ["100 oz, n'ihi na ọ ka ukwuu", "Ha bụ otu", "50 oz, na $0.12 kwa ounce ma $0.13", "Ị nweghị ike ịma"], answer: 2, why: "$6.00 / 50 = $0.12 na $13.00 / 100 = $0.13, ya mere karama nke nta na-efu obere ego kwa ounce." },
      { objective: "O3", q: "Tupu ị zụta nha ka ukwuu, ị ga-ajụkwa:", options: ["Ọ̀ ga m eji ya tupu ọ mebie, ọ̀ ga m enwe ike ịkwụ ya ugbu a?", "Igbe ahụ ọ̀ nwere agba mara mma?", "Ọ̀ dị na shelf kacha elu?", "Ụlọ ahịa ahụ ọ̀ nwere ebe a na-adọba ụgbọala?"], answer: 0, why: "Ọnụahịa otu unit dị ala na-echekwa ego naanị ma ọ bụrụ na i jiri ya ma nwee ike ịkwụ ya." },
      { objective: "O4", q: "Quart ole dị na gallon 3?", options: ["7", "3", "16", "12"], answer: 3, why: "Quart 4 = 1 gallon, ya mere 3 x 4 = quart 12." },
      { objective: "O4", q: "Igbe tile ọ bụla na-ekpuchi 15 square feet. Ị chọrọ 100 square feet. Igbe ole?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, ị gbagoo elu ruo igbe 7 zuru ezu." },
      { objective: "O4", q: "Ị na-arụ ọrụ site na 8:00 am ruo 4:30 pm, nwere nri ehihie nkeji 30 a na-adịghị akwụ. Awa ole?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "8:00 ruo 4:30 bụ awa 8.5, wepụ awa 0.5 = awa 8.0." },
      { objective: "O5", q: "Net pay bụ:", options: ["Gross pay wepụ deductions", "Gross pay gbakwunye deductions", "Naanị overtime gị", "Ọnụ ụgwọ gị kwa awa"], answer: 0, why: "Net pay bụ ihe fọdụrụ mgbe e wepụchara deductions." },
      { objective: "O5", q: "N'okpuru iwu federal, ndị ọrụ a na-akwụ kwa awa nke iwu kpuchiri na-enweta overtime maka awa karịrị:", options: ["35 n'izu ọrụ", "8 n'ọnwa", "50 n'izu ọrụ", "40 n'izu ọrụ"], answer: 3, why: "Iwu federal bụ ugboro otu na ọkara maka awa karịrị 40 n'izu ọrụ." },
      { objective: "O5", q: "I rụrụ ọrụ awa 44 na $15.00 kwa awa, nwere overtime. Gịnị bụ gross pay?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, gbakwunye 4 x $22.50 = $90, ya mere $690.00." },
      { objective: "O5", q: "Tupu i gosi onye na-enyere gị aka paystub, ị kwesịrị:", options: ["Itinye ya n'ịntanetị", "Itinye okwuntughe gị na ya", "Ikpuchi ọnụọgụ Social Security gị", "Ịtụfu ya"], answer: 2, why: "Ọnụọgụ Social Security gị bụ nzuzo, a pụkwara iji ya zuo njirimara gị." },
      { objective: "O6", q: "A na-akwụ gị kwa izu abụọ, ị na-ebu ala $1,200. Gịnị bụ ego na-abata kwa ọnwa?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "N'ime budget dabara, mkpokọta mmefu gụnyere ego nchekwa:", options: ["Karịrị ego na-abata", "Dị nhata ma ọ bụ obere karịa ego na-abata", "Bụ $0 kpọmkwem mgbe niile", "Edeghị ya ede"], answer: 1, why: "Mmefu nhata ma ọ bụ n'okpuru ego na-abata na-egbochi gị ịbanye n'ụgwọ ọhụrụ." },
      { objective: "O6", q: "Kedu nke bụ mmefu na-agbanwe?", options: ["Ụgwọ ụlọ na-adị otu", "Ụgwọ ụgbọala na-adịgide", "Atụmatụ ekwentị na-adịgide", "Nri, nke na-agbanwe kwa ọnwa"], answer: 3, why: "Mmefu na-agbanwe na-agbanwe site n'otu ọnwa gaa na nke ọzọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, megharịa akụkụ ahụ site na nzọụkwụ nkuzi ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "E lelere paystub", objective: "O5", notYet: "E leleghị ụfọdụ ahịrị, ma ọ bụ e nwere mperi mgbakọ na gross ma ọ bụ net pay.", meets: "E lelere awa, ọnụ ụgwọ, overtime, deductions na net pay; ahịrị ọ bụla dabara ruo cent ma ọ bụ e dere mperi ahụ.", exceeds: "Na-edekwa ihe a ga-agwa payroll maka mperi ọ bụla na ebe a ga-aga ọzọ." },
      { name: "Ego na-abata kwa ọnwa", objective: "O6", notYet: "E jiri 4 mụbaa ụgwọ kwa izu, ma ọ bụ e jiri gross pay kama net.", meets: "A chọtara net pay kwa ọnwa site na x 52 / 12 ma ọ bụ x 26 / 12.", exceeds: "Na-egosi otu o si gbakọọ ya ma lelee ya n'ụzọ ọzọ." },
      { name: "Budget dabara", objective: "O6", notYet: "Mmefu karịrị ego na-abata, ma ọ bụ enweghị ahịrị ego nchekwa.", meets: "E depụtara mkpa, ego nchekwa na ihe a chọrọ; mmefu nhata ma ọ bụ n'okpuru ego na-abata; e lelere mkpokọta.", exceeds: "Gụnyere atụmatụ iso ezi mmefu na ụbọchị a ga-enyocha ya." },
      { name: "Ọnụahịa otu unit", objective: "O3", notYet: "Ntụnyere erughị 3, ma ọ bụ unit adabaghị.", meets: "Ntụnyere 3 nwere ọnụahịa otu unit ziri ezi na akara nke ka mma ịzụ.", exceeds: "Na-ekwu mgbe nha ka ukwuu abụghị nhọrọ ka mma na ihe mere." },
      { name: "Percent", objective: "O2", notYet: "Azịza omume maka mbelata, ụtụ isi, tip ma ọ bụ mmụba ụgwọ na-ezighi ezi ọtụtụ mgbe.", meets: "Opekata mpe 4 n'ime omume percent 5 ziri ezi, ruo cent.", exceeds: "Nwere ike ịkọwara onye ọzọ ụzọ dị mfe ahụ (10%, wee wulite)." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma mezue Mpempe Mgbakọ Ọrụ na Ego dị ka rubric si dị",
      "Ndị na-amụ ihe kwuru na ha hụrụ mperi paystub ma ọ bụ chekwaa ego site n'ọnụahịa otu unit n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe na-edebe budget e dere ede opekata mpe ọnwa 2",
      "Ndị na-amụ ihe gara n'ihu na \"Ịkwado maka Ule GED: Mgbakọ na Mwepụ\" ma ọ bụ gafere ule mgbakọ maka ọrụ n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, pensụl na kalkuleta nkịtị (kalkuleta ekwentị dị mma)",
      "Eriri ntụle ma ọ bụ rula nwere akara 1/8 inch",
      "Paystub omume e chepụtara na Nkuzi 5, ma ọ bụ nke onye na-amụ ihe, ọnụọgụ nzuzo kpuchiri",
      "Akwụkwọ nnata ego (receipt) ụlọ ahịa ma ọ bụ akara shelf maka ọnụahịa otu unit",
      "Ihe dị ka awa 2 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọtụtụ ndị okenye na-atụ ụjọ maka mgbakọ. Malite na ule mbido dị ka mmega ahụ \"enweghị akara\" ma mee ememe maka uto ha na ule ikpeazụ.",
      "Buru ụzọ gbakọọ ihe atụ ọ bụla na bọọdụ, wee hapụ ndị na-amụ ihe ka ha nwaa nke na-esote n'abụọ n'abụọ.",
      "Kụzie ilele azịza n'ụzọ abụọ (chepụta ihe ọ ga-adị, wee gbakọọ) ka ndị na-amụ ihe tụkwasị ọrụ nke ha obi.",
      "Mgbe ndị na-amụ ihe wetara ezi paystub, mee ka ha buru ụzọ kpuchie ọnụọgụ Social Security na ụlọ akụ. Ajụjụ ụtụ isi na overtime karịrị ndị bụ isi na-aga na payroll, ụlọ ọrụ ọrụ steeti ma ọ bụ DOL Wage and Hour Division.",
      "Ekpela onye ọ bụla ikpe maka budget ya; ebumnuche bụ atụmatụ dabara, ọ bụghị nke zuru oke.",
      "Duga ndị na-amụ ihe chọrọ diploma na \"Ịkwado maka Ule GED: Mgbakọ na Mwepụ\"."
    ]
  }
};

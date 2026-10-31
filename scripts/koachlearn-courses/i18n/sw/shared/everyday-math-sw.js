"use strict";

// Koach Learn course (Swahili translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// Mifano yote ya pesa na mshahara imebuniwa kwa ajili ya mazoezi.

const DOL_OT = { name: "U.S. Department of Labor (Idara ya Kazi ya Marekani): Malipo ya muda wa ziada (overtime)", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: Viwango vya makato ya Social Security na Medicare", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (vifaa vya bure vya kupanga bajeti)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-sw",
  lang: "sw",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Hesabu za Kila Siku kwa Kazi na Maisha",
  skills: "Sehemu, desimali na asilimia, Punguzo, kodi, bakshishi na nyongeza ya mshahara, Bei kwa kipimo kimoja na ununuzi bora, Vipimo na saa za kazi, Kukagua hati ya mshahara, Kupanga bajeti ya mwezi",
  outcome: "kufanya hesabu unazokutana nazo kazini na nyumbani: kutumia sehemu, desimali na asilimia, kupata ununuzi bora, kupima na kubadilisha vipimo, kukagua hati yako ya mshahara, na kupanga bajeti ya mwezi kutokana na mshahara wako.",
  about: [
    "Kozi hii ni kwa watu wazima wanaotaka kujiamini tena na namba: wanaotafuta kazi, wanaorudi nyumbani kutoka gerezani, wahamiaji, wazazi na yeyote anayerudi kujifunza. Huhitaji kukumbuka hesabu za shule. Tunaanza mwanzo kabisa, kwa vitu halisi kama lebo ya bei ya punguzo, utepe wa kupimia na hundi ya mshahara.",
    "Utafanya mazoezi ya sehemu, desimali na asilimia; utahesabu punguzo, kodi ya mauzo, bakshishi na nyongeza ya mshahara; utalinganisha bei kwa kipimo kimoja dukani; utapima na kubadilisha vipimo kwa kazi fulani; utakagua kila mstari wa hati ya mshahara; na utapanga bajeti ya mwezi.",
    "Huu ni ujuzi ule ule ambao majaribio mengi ya kazi na mtihani wa Hesabu wa GED (cheti cha Marekani kinacholingana na kumaliza sekondari) huanza nao. Ukimaliza, kozi \"Maandalizi ya Mtihani wa GED: Hesabu\" ni hatua nzuri inayofuata. Kozi hii haitoi cheti wala diploma; inajenga ujuzi.",
    "Kila somo linachukua kama dakika tano, lenye mifano iliyofanyiwa kazi na kazi ya \"Jaribu sasa\" kwenye karatasi au kikokotoo cha simu. Jaribio fupi la maswali 2 linafuata kila somo, jaribio la maarifa linamaliza kila sura, na mtihani wa maswali 20 unamaliza kozi. Mifano yote ya mshahara na pesa imebuniwa kwa ajili ya mazoezi."
  ],
  finalTask: "Tengeneza \"Karatasi yako ya Hesabu za Kazi na Pesa\" kwenye ukurasa mmoja: (1) kagua hati ya mshahara ya mazoezi (au yako mwenyewe, ukifunika namba za binafsi) mstari kwa mstari: saa mara kiwango, muda wa ziada, makato na mshahara halisi; (2) geuza mshahara huo kuwa kipato cha mwezi na upange bajeti ya mwezi yenye mstari wa akiba, ambapo matumizi hayazidi kipato; (3) linganisha bei kwa kipimo kimoja ya vitu 3 unavyonunua mara kwa mara na uandike ukubwa upi ni ununuzi bora. Iweke na uisasishe kila mwezi.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Watu wazima wanaorudi kujifunza: wanaotafuta kazi, wanaorudi nyumbani kutoka gerezani, wahamiaji, wazazi na wafanyakazi wenye umri mkubwa. Wengi waliacha shule mapema au hawajafanya hesabu kwenye karatasi kwa miaka mingi, na wengine huwa na wasiwasi kuhusu namba.",
    startingPoint: "Wanaweza kujumlisha, kutoa na kutumia kikokotoo cha simu kwa hesabu rahisi. Wengi hawana uhakika na sehemu, asilimia, kubadilisha vipimo na makato kwenye hati ya mshahara, na wachache huandika bajeti.",
    gap: "Kazi na maisha ya kila siku yanahitaji hesabu za haraka na sahihi: kupima kazini, kuhesabu saa, kukagua mshahara, kujua bei halisi na kufanya pesa itoshe mwezi mzima. Makosa yanagharimu pesa na yanaweza kupita bila kuonekana kwenye hati ya mshahara. Ujuzi huu pia ni msingi wa mtihani wa Hesabu wa GED na majaribio mengi ya kuajiriwa.",
    constraints: [
      "Kiwango cha kusoma: maneno rahisi na sentensi fupi; mifano mingi iliyofanyiwa kazi",
      "Vifaa: karatasi, penseli na kikokotoo rahisi cha simu; hakuna programu maalum",
      "Wasiwasi wa hesabu: hatua ndogo, kagua majibu kwa njia mbili, hakuna shinikizo la muda",
      "Faragha: hati za mshahara za mazoezi zimebuniwa; funika namba ya Social Security na namba za akaunti kwenye hati halisi",
      "Sheria zinazobadilika (viwango vya kodi, muda wa ziada) zinaelekeza kwenye vyanzo rasmi; sheria za majimbo zinatofautiana"
    ],
    prerequisites: "Kujumlisha, kutoa na kuzidisha kwa msingi, kwa kikokotoo au bila."
  },
  // ---- ADDIE: Usanifu ----
  objectives: [
    { id: "O1", condition: "Ukipewa sehemu, desimali, asilimia na utepe wa kupimia", action: "kubadilisha kati ya sehemu, desimali na asilimia na kusoma utepe wa kupimia hadi 1/8 inchi iliyo karibu", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O2", condition: "Ukipewa bei, bili au kiwango cha mshahara", action: "kuhesabu punguzo, kodi ya mauzo, bakshishi au nyongeza ya mshahara kwa kutumia asilimia", standard: "hadi senti iliyo karibu" },
    { id: "O3", condition: "Ukipewa ukubwa miwili ya bidhaa ile ile na bei zake", action: "kuhesabu bei kwa kipimo kimoja ya kila moja na kuchagua ununuzi bora", standard: "ukichagua sahihi katika angalau jozi 4 kati ya 5" },
    { id: "O4", condition: "Ukipewa kazi kama kuweka sakafu chumbani au kuandika saa za zamu", action: "kubadilisha vipimo na kuhesabu eneo au saa ulizofanya kazi", standard: "kwa kipimo sahihi, na kukadiria juu unapohitaji vitu vizima" },
    { id: "O5", condition: "Ukipewa hati ya mshahara", action: "kukagua saa, kiwango cha mshahara, muda wa ziada, makato na mshahara halisi mstari kwa mstari", standard: "kila mstari ukilingana hadi senti, au kosa likiandikwa ili uulize" },
    { id: "O6", condition: "Ukipewa mshahara wa kawaida", action: "kupanga bajeti ya mwezi yenye akiba na inayoweka matumizi sawa na kipato au chini yake", standard: "kila kundi likiandikwa na jumla zikikaguliwa" }
  ],
  chapters: [
    {
      name: "Sura 1: Namba unazotumia kila siku",
      lessons: [
        {
          title: "Sehemu, desimali, asilimia na utepe wa kupimia",
          objectives: ["O1"],
          minutes: 6,
          goal: "Badilisha kati ya sehemu, desimali na asilimia na usome utepe wa kupimia.",
          text: [
            "Sehemu, desimali na asilimia ni njia tatu za kuandika kiasi kile kile. Nusu ya pizza ni 1/2, au 0.5, au 50%. Robo ni 1/4, 0.25 au 25%. Robo tatu ni 3/4, 0.75 au 75%.",
            "Kubadilisha sehemu kuwa desimali, gawa namba ya juu kwa namba ya chini: 3/8 ni 3 gawa kwa 8, ambayo ni 0.375. Kubadilisha desimali kuwa asilimia, sogeza nukta nafasi mbili kulia: 0.375 ni 37.5%. Kutoka asilimia kwenda desimali, isogeze nafasi mbili kushoto: 15% ni 0.15.",
            "Utepe wa kupimia nchini Marekani unaonyesha inchi zilizogawanywa kwa alama ndogo 16. Alama ndefu zaidi katikati ya inchi ni 1/2. Alama zinazofuata kwa urefu ni 1/4 na 3/4. Kisha 1/8, 3/8, 5/8 na 7/8. Fupi zaidi ni za kumi na sita (1/16). Utepe ukisimama alama 3 za 1/8 baada ya 5, unasoma inchi 5 na 3/8.",
            "Kujumlisha sehemu zenye namba ya chini ile ile ni rahisi: jumlisha za juu na uache ya chini ilivyo. 1/8 + 3/8 = 4/8, ambayo ni sawa na 1/2."
          ],
          steps: ["Sehemu kwenda desimali: gawa ya juu kwa ya chini.", "Desimali kwenda asilimia: sogeza nukta nafasi 2 kulia.", "Asilimia kwenda desimali: sogeza nukta nafasi 2 kushoto.", "Utepe wa kupimia: tafuta inchi kamili, kisha hesabu alama baada yake.", "Rahisisha: 4/8 ni sawa na 1/2."],
          words: [["Sehemu (fraction)", "kipande cha kitu kizima, kinachoandikwa namba ya juu juu ya namba ya chini, kama 3/4."], ["Kiasi (numerator)", "namba ya juu ya sehemu: una vipande vingapi."], ["Kigawe (denominator)", "namba ya chini ya sehemu: vipande vingapi sawa vinafanya kitu kizima."], ["Desimali", "namba yenye nukta, kama 0.75, inayoonyesha sehemu ya kitu kizima."], ["Asilimia (%)", "sehemu kati ya 100. 25% maana yake 25 kati ya 100."]],
          slides: [
            { title: "Njia tatu za kuandika kiasi kile kile", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Kubadilisha", bullets: ["Sehemu kwenda desimali: gawa ya juu kwa ya chini (3/8 = 0.375)", "Desimali kwenda asilimia: nukta nafasi 2 kulia (37.5%)", "Asilimia kwenda desimali: nukta nafasi 2 kushoto (15% = 0.15)"] },
            { title: "Kusoma utepe wa kupimia", bullets: ["Alama ndefu zaidi ya katikati: 1/2", "Kisha 1/4 na 3/4, kisha za nane, kisha za kumi na sita", "Inchi 5 na alama 3 za nane = 5 3/8 in"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Andika 1/4 kama desimali na asilimia. (2) Andika 0.6 kama asilimia. (3) Andika 8% kama desimali. (4) Badilisha 5/8 kuwa desimali. (5) Jumlisha 1/4 + 1/4. Majibu: (1) 0.25 na 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, ambayo ni 1/2. Ukiwa na utepe wa kupimia au rula, pima vitu 3 nyumbani hadi 1/8 inchi iliyo karibu.",
          youCanNow: "kubadilisha kati ya sehemu, desimali na asilimia na kusoma utepe wa kupimia hadi 1/8 inchi iliyo karibu.",
          quickCheck: [
            { objective: "O1", q: "3/4 ni asilimia ngapi?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 gawa kwa 4 ni 0.75, na kusogeza nukta nafasi mbili kulia kunatoa 75%." },
            { objective: "O1", q: "6% ni desimali gani?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Sogeza nukta nafasi mbili kushoto: 6% = 0.06." }
          ]
        },
        {
          title: "Punguzo, kodi ya mauzo, bakshishi na nyongeza ya mshahara",
          objectives: ["O2"],
          minutes: 6,
          goal: "Hesabu punguzo, kodi ya mauzo, bakshishi na nyongeza ya mshahara kwa asilimia.",
          text: [
            "Kupata asilimia ya namba, badilisha asilimia kuwa desimali kisha uzidishe. 20% ya $45 ni 0.20 x 45 = $9.",
            "Punguzo: litoe kutoka kwenye bei. Koti la $45 lenye punguzo la 20% linagharimu 45 - 9 = $36. Kodi ya mauzo: iongeze. Kiwango cha kodi kikiwa 8%, kodi ya $36 ni 0.08 x 36 = $2.88, kwa hiyo unalipa $38.88. Viwango vya kodi ya mauzo vinatofautiana kila jimbo na jiji; angalia ofisi ya kodi ya jimbo lako au angalia risiti.",
            "Bakshishi bila kikokotoo: pata 10% kwa kusogeza nukta nafasi moja kushoto, kisha jenga kutoka hapo. Kwenye bili ya $28, 10% ni $2.80, 5% ni nusu yake, $1.40, kwa hiyo 15% ni $2.80 + $1.40 = $4.20. 20% ni mara mbili ya 10%: $5.60.",
            "Nyongeza ya mshahara: nyongeza ya 3% kwenye $16.00 kwa saa ni 0.03 x 16 = $0.48, kwa hiyo kiwango kipya ni $16.48 kwa saa. Angalia maneno: \"punguzo la 20%\" maana yake unalipa 80% ya bei; \"20% zaidi\" maana yake unalipa 120%."
          ],
          steps: ["Badilisha asilimia kuwa desimali.", "Zidisha kwa kiasi.", "Punguzo: toa. Kodi au bakshishi: ongeza. Nyongeza ya mshahara: ongeza kwenye kiwango cha zamani.", "Kadiria pesa hadi senti iliyo karibu.", "Kagua: je, jibu lina maana? Punguzo lazima liwe dogo kuliko bei."],
          words: [["Punguzo", "pesa inayotolewa kwenye bei."], ["Kodi ya mauzo", "kodi inayoongezwa kwenye bei unapolipa; kiwango kinategemea jimbo na jiji lako."], ["Bakshishi", "pesa ya ziada unayotoa kwa huduma, mara nyingi kama asilimia ya bili."], ["Nyongeza ya mshahara", "kuongezeka kwa kiwango chako cha mshahara."], ["Kukadiria", "kufanya namba iwe rahisi zaidi; pesa hukadiriwa hadi senti iliyo karibu."]],
          slides: [
            { title: "Asilimia ya namba", bullets: ["Badilisha asilimia kuwa desimali", "Zidisha: 20% ya $45 = 0.20 x 45 = $9"] },
            { title: "Punguzo na kodi", bullets: ["Punguzo la 20% kwenye $45: 45 - 9 = $36", "Kodi ya 8% kwenye $36: 0.08 x 36 = $2.88", "Unalipa $38.88; viwango vya kodi vinatofautiana kwa jimbo na jiji"] },
            { title: "Bakshishi kichwani", bullets: ["10%: sogeza nukta nafasi moja kushoto", "Bili ya $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Nyongeza ya mshahara", bullets: ["3% ya $16.00 = $0.48", "Kiwango kipya: $16.48 kwa saa", "Punguzo la 20% = lipa 80%; 20% zaidi = lipa 120%"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Buti za kazi za $60 zina punguzo la 25%. Bei ya punguzo ni ngapi? (2) Kodi ni 7% kwenye bidhaa ya $50. Jumla ni ngapi? (3) Pata bakshishi ya 20% kwenye bili ya $35. (4) Kiwango chako cha $15.50 kinapata nyongeza ya 4%. Kiwango kipya ni kipi? Majibu: (1) $45; (2) kodi $3.50, jumla $53.50; (3) $7.00; (4) $0.62 zaidi, $16.12 kwa saa. Kisha angalia risiti halisi na upate kiwango cha kodi kilichotozwa eneo lako.",
          youCanNow: "kuhesabu punguzo, kodi ya mauzo, bakshishi na nyongeza ya mshahara hadi senti iliyo karibu.",
          quickCheck: [
            { objective: "O2", q: "Koti la $80 lina punguzo la 25%. Bei ya punguzo ni ngapi?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% ya 80 ni 20, na 80 - 20 = $60." },
            { objective: "O2", q: "Bakshishi ya 15% kwenye bili ya $40 ni ngapi?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% ni $4.00 na 5% ni $2.00, kwa hiyo 15% ni $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: Viungo vya ofisi za kodi za majimbo", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Bei kwa kipimo kimoja: kupata ununuzi bora",
          objectives: ["O3"],
          minutes: 5,
          goal: "Hesabu bei kwa kipimo kimoja na uchague ununuzi bora.",
          text: [
            "Bei kwa kipimo kimoja ni gharama ya kipimo kimoja: aunsi moja, ratili (pound) moja, kitu kimoja. Inakusaidia kulinganisha ukubwa tofauti kwa haki. Kuipata, gawa bei kwa idadi ya vipimo.",
            "Mfano: boksi la nafaka (cereal) la aunsi 24 linagharimu $4.80. $4.80 / 24 = $0.20 kwa aunsi. Boksi la aunsi 36 linagharimu $6.12. $6.12 / 36 = $0.17 kwa aunsi. Boksi kubwa ndilo ununuzi bora.",
            "Kubwa si mara zote rahisi zaidi. Mfuko wa mchele wa ratili 2 kwa $3.18 ni $1.59 kwa ratili. Mfuko wa ratili 5 kwa $8.45 ni $1.69 kwa ratili. Hapa mfuko mdogo ndio ununuzi bora. Maduka mengi huchapisha bei kwa kipimo kimoja kwa herufi ndogo kwenye lebo ya rafu; hakikisha lebo zote mbili zinatumia kipimo kile kile.",
            "Ununuzi bora ni bora tu kama utautumia kabla haujaharibika na unaweza kuumudu wiki hii. Bei kwa kipimo kimoja pia zinasaidia kazini, kwa mfano unapoagiza vifaa."
          ],
          steps: ["Andika bei na ukubwa wa kila bidhaa.", "Hakikisha vipimo vinalingana (aunsi na aunsi).", "Gawa: bei / ukubwa = bei kwa kipimo kimoja.", "Linganisha: bei ndogo zaidi kwa kipimo kimoja ndiyo ununuzi bora.", "Jiulize: nitautumia wote, na ninaweza kuumudu sasa?"],
          words: [["Bei kwa kipimo kimoja", "gharama ya kipimo kimoja, kama aunsi moja au ratili moja."], ["Aunsi (oz)", "kipimo kidogo cha uzito; aunsi 16 zinafanya ratili 1."], ["Ratili (pound, lb)", "kipimo cha uzito kinacholingana na aunsi 16."], ["Lebo ya rafu", "lebo ya bei kwenye rafu ya duka; mara nyingi inaonyesha bei kwa kipimo kimoja."]],
          slides: [
            { title: "Bei kwa kipimo kimoja = bei / ukubwa", bullets: ["Gharama ya aunsi moja, ratili moja au kitu kimoja", "Linganisha ukubwa tofauti kwa haki"] },
            { title: "Mfano wa nafaka", bullets: ["oz 24 kwa $4.80 = $0.20 kwa aunsi", "oz 36 kwa $6.12 = $0.17 kwa aunsi", "Hapa boksi kubwa linashinda"] },
            { title: "Kubwa si mara zote rahisi zaidi", bullets: ["Mchele lb 2 $3.18 = $1.59 kwa ratili", "Mchele lb 5 $8.45 = $1.69 kwa ratili", "Hapa mfuko mdogo unashinda"] },
            { title: "Kununua kwa busara", bullets: ["Angalia lebo ya rafu, kipimo kile kile kwenye zote mbili", "Utaitumia kabla haijaharibika?", "Unaweza kuimudu wiki hii?"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Mayai 12 kwa $3.60 au mayai 18 kwa $5.04? (2) Juisi oz 64 kwa $3.84 au oz 128 kwa $6.40? Majibu: (1) $0.30 kwa yai dhidi ya $0.28 kwa yai: mayai 18 ni bora; (2) $0.06 kwa aunsi dhidi ya $0.05 kwa aunsi: oz 128 ni bora. Kisha, dukani au kwenye tovuti ya duka, pata bei kwa kipimo kimoja ya vitu 3 unavyonunua mara kwa mara katika ukubwa miwili na uandike ununuzi bora. Hii inaingia kwenye karatasi ya kazi yako ya mwisho.",
          youCanNow: "kupata bei kwa kipimo kimoja na kuchagua ununuzi bora, na kujua lini ukubwa mkubwa haufai.",
          quickCheck: [
            { objective: "O3", q: "Mfuko wa viazi wa ratili 10 unagharimu $5.90. Bei kwa kipimo kimoja ni ngapi?", options: ["$0.59 kwa ratili", "$5.90 kwa ratili", "$1.69 kwa ratili", "$59.00 kwa ratili"], answer: 0, why: "$5.90 / 10 = $0.59 kwa ratili." },
            { objective: "O3", q: "Sabuni A: vipande 3 kwa $2.70. Sabuni B: vipande 8 kwa $8.00. Upi ni ununuzi bora?", options: ["Sabuni B, kwa sababu ina vipande vingi zaidi", "Zinagharimu sawa kwa kipande", "Sabuni B, kwa sababu inagharimu zaidi", "Sabuni A, $0.90 kwa kipande dhidi ya $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 na $8.00 / 8 = $1.00, kwa hiyo A inagharimu kidogo kwa kipande." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Namba unazotumia kila siku",
        questions: [
          { objective: "O1", q: "1/8 ni desimali gani?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 gawa kwa 8 ni 0.125." },
          { objective: "O1", q: "Kwenye utepe wa kupimia, alama ndefu zaidi kati ya inchi 4 na 5 ni:", options: ["Inchi 4 1/2", "Inchi 4 1/8", "Inchi 4 1/16", "Inchi 5"], answer: 0, why: "Alama ndefu zaidi katikati ya inchi ni alama ya 1/2." },
          { objective: "O2", q: "Kodi ya mauzo ni 6% kwenye ununuzi wa $25. Kodi ni ngapi?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Mshahara wako unapanda kutoka $14.00 hadi $14.70 kwa saa. Hiyo ni nyongeza ya asilimia ngapi?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "Nyongeza ni $0.70, na 0.70 / 14.00 = 0.05, ambayo ni 5%." },
          { objective: "O3", q: "Upi ni ununuzi bora: siagi ya karanga oz 16 kwa $3.20 au oz 40 kwa $7.20?", options: ["oz 16, $0.20 kwa aunsi", "Ni sawa", "oz 40, $0.18 kwa aunsi", "Huwezi kujua"], answer: 2, why: "$3.20 / 16 = $0.20 na $7.20 / 40 = $0.18, kwa hiyo chupa ya oz 40 inagharimu kidogo kwa aunsi." }
        ]
      }
    },
    {
      name: "Sura 2: Hesabu za kazi na pesa",
      lessons: [
        {
          title: "Kupima, kubadilisha vipimo na kuhesabu saa za kazi",
          objectives: ["O4"],
          minutes: 6,
          goal: "Badilisha vipimo na uhesabu eneo na saa ulizofanya kazi kwa kazi fulani.",
          text: [
            "Vipimo vya kawaida vya Marekani: inchi 12 = futi 1, futi 3 = yadi 1, aunsi 16 = ratili 1, painti 2 = kwati 1, kwati 4 = galoni 1. Kazi nyingine hutumia mfumo wa mita: inchi 1 = sentimita 2.54, na kilo 1 ni kama ratili 2.2. Kubadilisha kipimo kikubwa kuwa vipimo vidogo, zidisha; kubadilisha vipimo vidogo kuwa kipimo kikubwa, gawa. Inchi 90 / 12 = futi 7.5.",
            "Eneo ni nafasi inayofunikwa na uso bapa: urefu x upana, kwa vipimo vya mraba. Chumba cha futi 12 kwa futi 10 ni 12 x 10 = futi za mraba 120. Kama boksi moja la sakafu linafunika futi za mraba 20, unahitaji 120 / 20 = boksi 6. Mara nyingi wafanyakazi huongeza karibu 10% ya ziada kwa ajili ya vipande vinavyokatwa na makosa: 120 x 1.10 = 132, na 132 / 20 = 6.6. Huwezi kununua 0.6 ya boksi, kwa hiyo kadiria JUU hadi 7.",
            "Saa za kazi: hesabu kutoka mwanzo hadi mwisho, kisha toa mapumziko yasiyolipwa. Zamu ya saa 7:30 am hadi 4:00 pm ni saa 8 1/2; ukitoa chakula cha mchana cha dakika 30 kisicholipwa ni saa 8. Kadi nyingi za muda hutumia saa kwa desimali: dakika 15 = 0.25, dakika 30 = 0.5, dakika 45 = 0.75. Sehemu nyingine za kazi hutumia saa ya mfumo wa saa 24: 15:00 ni 3:00 pm. (Hizi ni saa za kimataifa, si saa za Kiswahili.)"
          ],
          steps: ["Andika ulicho nacho na kipimo unachohitaji.", "Kipimo kikubwa kwenda kidogo: zidisha. Kidogo kwenda kikubwa: gawa.", "Eneo: urefu x upana, kwa vipimo vya mraba.", "Unahitaji vitu vizima (maboksi, mifuko): kadiria juu kila mara.", "Saa: muda wa mwisho toa muda wa kuanza, toa mapumziko yasiyolipwa; badilisha dakika kuwa desimali kwa kugawa kwa 60."],
          words: [["Kipimo (unit)", "unachopimia, kama inchi, futi, ratili au saa."], ["Kubadilisha vipimo", "kugeuza kipimo kutoka aina moja kwenda nyingine."], ["Eneo", "nafasi inayofunikwa na uso bapa: urefu mara upana, kwa vipimo vya mraba."], ["Futi za mraba (sq ft)", "kipimo cha eneo unapopima kwa futi."], ["Mfumo wa mita (metric)", "mfumo wa vipimo unaotumika sehemu kubwa ya dunia: sentimita, mita, kilo, lita."], ["Saa kwa desimali", "muda ulioandikwa kama desimali, kama saa 7.75 kwa saa 7 na dakika 45."]],
          slides: [
            { title: "Vipimo vya kujua", bullets: ["in 12 = ft 1; ft 3 = yd 1", "oz 16 = lb 1; qt 4 = gal 1", "in 1 = cm 2.54; kg 1 ni kama lb 2.2", "Kikubwa kwenda kidogo: zidisha. Kidogo kwenda kikubwa: gawa"] },
            { title: "Eneo kwa kazi", bullets: ["Chumba ft 12 x ft 10 = sq ft 120", "Ongeza 10% kwa vipande: sq ft 132", "sq ft 20 kwa boksi: 6.6, kwa hiyo nunua maboksi 7"] },
            { title: "Kuhesabu saa", bullets: ["7:30 am hadi 4:00 pm = saa 8.5", "Toa dakika 30 za chakula zisizolipwa = saa 8", "Dakika 15 = 0.25, dakika 30 = 0.5, dakika 45 = 0.75"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): (1) Badilisha futi 5 kuwa inchi. (2) Badilisha aunsi 48 kuwa ratili. (3) Chumba cha kuhifadhia ni futi 9 kwa futi 14. Eneo ni ngapi? (4) Rangi inafunika karibu futi za mraba 350 kwa galoni (kwenye kopo hili la kubuni). Lazima ufunike futi za mraba 800. Unanunua galoni ngapi? (5) Unafanya kazi 6:45 am hadi 3:15 pm na chakula cha mchana cha dakika 30 kisicholipwa. Ni saa ngapi, kwa desimali? Majibu: (1) inchi 60; (2) ratili 3; (3) futi za mraba 126; (4) 800 / 350 = 2.29, kwa hiyo nunua galoni 3; (5) saa 8.5 toa 0.5 = saa 8.0.",
          youCanNow: "kubadilisha vipimo, kupata eneo, kukadiria juu kwa vitu vizima na kuhesabu saa zako za kazi kwa desimali.",
          quickCheck: [
            { objective: "O4", q: "Unahitaji mifuko 4.2 ya mchanganyiko wa saruji. Unanunua mifuko mingapi?", options: ["4", "4.2", "42", "5"], answer: 3, why: "Huwezi kununua sehemu ya mfuko, kwa hiyo kadiria juu hadi 5." },
            { objective: "O4", q: "Saa 7 na dakika 45 ni saa ngapi kwa desimali?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, kwa hiyo ni saa 7.75." }
          ]
        },
        {
          title: "Kukagua hati yako ya mshahara",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kagua saa, kiwango, muda wa ziada, makato na mshahara halisi kwenye hati ya mshahara.",
          text: [
            "Hati ya mshahara (paystub) inaonyesha jinsi mshahara wako ulivyohesabiwa. Mshahara ghafi ni ulichopata kabla ya kitu chochote kutolewa. Makato ni kiasi kinachotolewa, kama kodi. Mshahara halisi ndio unaoupata kweli: mshahara ghafi toa makato. YTD maana yake tangu mwanzo wa mwaka: jumla hadi sasa mwaka huu.",
            "Hati ya mshahara ya mazoezi (imebuniwa): saa 45 kwa $18.00 kwa saa. Chini ya sheria ya shirikisho ya Marekani, wafanyakazi wa saa wanaohusika hupata malipo ya muda wa ziada kwa saa zinazozidi 40 katika wiki ya kazi, angalau mara moja na nusu. Kwa hiyo: 40 x $18.00 = $720.00 mshahara wa kawaida. Kiwango cha muda wa ziada ni $18.00 x 1.5 = $27.00, na 5 x $27.00 = $135.00. Mshahara ghafi = $855.00. Baadhi ya majimbo yana sheria za ziada za muda wa ziada; uliza ofisi ya kazi ya jimbo lako.",
            "Makato kwenye hati hii: Social Security 6.2% ya $855.00 = $53.01. Medicare 1.45% = $12.40. Kodi ya mapato ya shirikisho $60.00 na kodi ya jimbo $20.00 (hizi zinategemea fomu yako ya W-4 na jimbo lako; hapa zimebuniwa). Jumla ya makato = $145.41. Mshahara halisi = $855.00 - $145.41 = $709.59.",
            "Mstari ukiwa si sahihi, andika tarehe ya malipo, mstari huo na ulichotarajia, kisha uliza kwanza ofisi ya mishahara (payroll) au msimamizi wako. Kama hakijarekebishwa, unaweza kuwasiliana na ofisi ya kazi ya jimbo lako au Wage and Hour Division ya U.S. Department of Labor. Hifadhi hati zako za mshahara, na funika namba yako ya Social Security kabla ya kumwonyesha mtu yeyote."
          ],
          steps: ["Linganisha saa na kumbukumbu yako mwenyewe ya saa ulizofanya kazi.", "Mshahara wa kawaida: hadi saa 40 x kiwango chako.", "Muda wa ziada: saa zinazozidi 40 x (kiwango x 1.5), kama unahusika.", "Mshahara ghafi = mshahara wa kawaida + muda wa ziada + malipo mengine yoyote.", "Jumlisha makato yote.", "Mshahara halisi = mshahara ghafi - jumla ya makato. Unalingana na hati?", "Kama sivyo, liandike na uulize ofisi ya mishahara."],
          words: [["Hati ya mshahara (paystub)", "karatasi au kumbukumbu ya mtandaoni inayoonyesha jinsi mshahara wako ulivyohesabiwa."], ["Mshahara ghafi", "ulichopata kabla ya kitu chochote kutolewa."], ["Mshahara halisi", "unachopeleka nyumbani baada ya makato."], ["Makato", "kiasi kinachotolewa kwenye mshahara wako, kama kodi au bima."], ["Muda wa ziada (overtime)", "malipo ya ziada, angalau mara 1.5 ya kiwango chako, kwa saa zinazohusika zinazozidi 40 katika wiki ya kazi chini ya sheria ya shirikisho."], ["YTD (tangu mwanzo wa mwaka)", "jumla kuanzia Januari 1 hadi hundi hii ya mshahara."], ["W-4", "fomu unayompa mwajiri wako inayoweka kiasi cha kodi ya mapato ya shirikisho kinachokatwa."]],
          slides: [
            { title: "Maneno ya hati ya mshahara", bullets: ["Mshahara ghafi: uliopata kabla ya makato", "Makato: kodi na kiasi kingine kinachotolewa", "Mshahara halisi: unachopeleka nyumbani", "YTD: jumla hadi sasa mwaka huu"] },
            { title: "Hati ya mazoezi: saa 45 kwa $18.00", bullets: ["Kawaida: 40 x $18.00 = $720.00", "Muda wa ziada: 5 x $27.00 = $135.00", "Mshahara ghafi: $855.00"] },
            { title: "Makato na mshahara halisi", bullets: ["Social Security 6.2% = $53.01; Medicare 1.45% = $12.40", "Shirikisho $60.00 + jimbo $20.00 (zimebuniwa)", "Halisi: $855.00 - $145.41 = $709.59"] },
            { title: "Kitu kikiwa si sahihi", bullets: ["Andika tarehe, mstari na ulichotarajia", "Uliza kwanza ofisi ya mishahara au msimamizi wako", "Kisha ofisi ya kazi ya jimbo au DOL Wage and Hour Division"] }
          ],
          tryIt: "Mazoezi (majibu yako chini): Ulifanya kazi saa 42 kwa $16.00 kwa saa. Makato: Social Security 6.2%, Medicare 1.45%, kodi ya shirikisho $45.00, kodi ya jimbo $15.00 (zimebuniwa). Pata (1) mshahara wa kawaida, (2) malipo ya muda wa ziada, (3) mshahara ghafi, (4) jumla ya makato, (5) mshahara halisi. Majibu: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Kisha kagua hati yako halisi ya mshahara kwa njia ile ile, ukifunika namba za binafsi.",
          youCanNow: "kukagua kila mstari wa hati ya mshahara na kujua la kufanya kitu kisipolingana.",
          quickCheck: [
            { objective: "O5", q: "Mshahara ghafi ni $600.00 na makato yote ni $95.00. Mshahara halisi ni ngapi?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Mshahara halisi = mshahara ghafi - makato = 600 - 95 = $505.00." },
            { objective: "O5", q: "Unapata $20.00 kwa saa na unahusika na muda wa ziada wa shirikisho. Kiwango chako cha muda wa ziada ni kipi?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Mara moja na nusu: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Kupanga bajeti ya mwezi kutokana na mshahara wako",
          objectives: ["O6"],
          minutes: 6,
          goal: "Panga bajeti ya mwezi yenye akiba inayoweka matumizi sawa na kipato au chini yake.",
          text: [
            "Bajeti ni mpango wa pesa zako. Anza na mshahara halisi wa mwezi unaoupeleka nyumbani. Miezi ni mirefu kidogo kuliko wiki 4, kwa hiyo usizidishe tu mshahara wa wiki kwa 4. Unalipwa kila wiki: mshahara halisi wa wiki x 52 / 12. Unalipwa kila wiki mbili: mshahara halisi x 26 / 12. Mfano: $700 kwa wiki x 52 = $36,400 kwa mwaka, / 12 = $3,033.33 kwa mwezi.",
            "Orodhesha matumizi yako: mahitaji kwanza (kodi ya nyumba, huduma kama umeme na maji, chakula, usafiri, simu, malezi ya watoto, malipo ya chini ya madeni), kisha akiba, kisha matakwa. Mfano: kodi ya nyumba $1,200, huduma $150, simu $50, chakula $400, usafiri $200, deni $150, akiba $150. Jumla ni $2,300, ambayo inaacha $733.33 kwa mahitaji na matakwa mengine.",
            "Kanuni: jumla ya matumizi (pamoja na akiba) lazima iwe sawa na kipato au chini yake. Ikizidi, ondoa takwa moja, punguza bili, au tafuta kipato zaidi. Kagua jumla kwa kuzijumlisha mara ya pili, au kwa kikokotoo.",
            "Ifuatilie kwa mwezi mmoja. Andika unachotumia kweli, kisha linganisha na mpango wako na urekebishe. Vifaa vya bure vya \"Your Money, Your Goals\" vya Consumer Financial Protection Bureau (ofisi ya Marekani ya kulinda watumiaji wa huduma za fedha) vina karatasi za kazi unazoweza kuchapisha."
          ],
          steps: ["Pata mshahara halisi wa mwezi (wa wiki x 52 / 12, au wa kila wiki mbili x 26 / 12).", "Orodhesha mahitaji: kodi ya nyumba, huduma, chakula, usafiri, simu, malezi ya watoto, malipo ya chini ya madeni.", "Ongeza mstari wa akiba, hata kama ni mdogo.", "Ongeza matakwa mwisho.", "Jumla ya matumizi lazima iwe sawa na kipato au chini yake.", "Fuatilia kwa mwezi mmoja na urekebishe."],
          words: [["Bajeti", "mpango wa jinsi utakavyotumia pesa zako kila mwezi."], ["Kipato", "pesa inayoingia, kama mshahara unaopeleka nyumbani."], ["Matumizi", "pesa inayotoka, kama kodi ya nyumba au chakula."], ["Matumizi ya kudumu", "matumizi yaliyo sawa kila mwezi, kama kodi ya nyumba."], ["Matumizi yanayobadilika", "matumizi yanayobadilika kila mwezi, kama chakula au mafuta ya gari."]],
          slides: [
            { title: "Kipato cha mwezi", bullets: ["Mshahara wa wiki x 52 / 12", "Kila wiki mbili: x 26 / 12", "$700 kwa wiki = $3,033.33 kwa mwezi"] },
            { title: "Mpangilio wa matumizi", bullets: ["Mahitaji kwanza: kodi ya nyumba, huduma, chakula, usafiri", "Kisha akiba, hata kiasi kidogo", "Kisha matakwa"] },
            { title: "Kanuni", bullets: ["Matumizi + akiba sawa na kipato au chini yake", "Ikizidi: ondoa takwa, punguza bili, au pata zaidi", "Jumlisha mara mbili ili kukagua"] },
            { title: "Fuatilia na urekebishe", bullets: ["Andika matumizi halisi kwa mwezi mmoja", "Linganisha na mpango wako", "Karatasi za bure za CFPB: Your Money, Your Goals"] }
          ],
          tryIt: "Maliza kazi yako ya mwisho. Tumia mshahara halisi kutoka hati ya mshahara ya Somo la 5 (au yako mwenyewe) na uugeuze kuwa kipato cha mwezi. Andika bajeti yenye mahitaji, mstari wa akiba na matakwa. Ijumlishe mara mbili. Matumizi yakizidi kipato, ibadilishe hadi itoshe. Weka ukaguzi wa hati ya mshahara, bajeti na ulinganisho 3 wa bei kwa kipimo kimoja kwenye ukurasa mmoja: \"Karatasi yako ya Hesabu za Kazi na Pesa\".",
          youCanNow: "kugeuza mshahara kuwa kipato cha mwezi na kupanga bajeti inayolingana na yenye akiba.",
          quickCheck: [
            { objective: "O6", q: "Unapeleka nyumbani $500 kwa wiki. Kipato chako cha mwezi ni kipi?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; kuzidisha kwa 4 kunaacha siku za ziada." },
            { objective: "O6", q: "Matumizi uliyopanga yanazidi kipato chako kwa $50. Unafanya nini?", options: ["Kuacha mpango ulivyo na kutumaini", "Kuondoa mstari wa akiba na kuusahau", "Kutumia mkopo wa haraka wa mshahara (payday loan) kila mwezi", "Kuondoa au kupunguza baadhi ya matumizi hadi yatoshe"], answer: 3, why: "Bajeti inafanya kazi tu matumizi yakiwa sawa na kipato au chini yake." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Hesabu za kazi na pesa",
        questions: [
          { objective: "O4", q: "Chumba ni futi 15 kwa futi 11. Eneo ni ngapi?", options: ["Futi za mraba 26", "Futi za mraba 165", "Futi za mraba 52", "Futi za mraba 1,511"], answer: 1, why: "Eneo = urefu x upana = 15 x 11 = futi za mraba 165." },
          { objective: "O4", q: "Inchi 60 ni futi ngapi?", options: ["Futi 5", "Futi 720", "Futi 6", "Futi 48"], answer: 0, why: "Kipimo kidogo kwenda kikubwa: gawa. 60 / 12 = futi 5." },
          { objective: "O5", q: "Kwenye hati ya mshahara, mshahara ghafi ni nini?", options: ["Unachopeleka nyumbani", "Kodi tu", "Malipo ya saa moja", "Ulichopata kabla ya makato"], answer: 3, why: "Mshahara ghafi ni jumla uliyopata kabla ya kitu chochote kutolewa." },
          { objective: "O5", q: "Hati yako ya mshahara inaonyesha saa 38, lakini kumbukumbu yako inasema 41. Unafanya nini kwanza?", options: ["Kunyamaza", "Kuacha kazi", "Kuandika tarehe na saa na kuuliza ofisi ya mishahara", "Kubadilisha hati ya mshahara mwenyewe"], answer: 2, why: "Anza na ofisi ya mishahara au msimamizi wako, ukiwa na kumbukumbu yako mkononi." },
          { objective: "O6", q: "Kipi kinaingia katika sehemu ya mahitaji ya bajeti?", options: ["Kodi ya nyumba", "Mchezo mpya wa video", "Tiketi za tamasha", "Chakula cha kununua kila usiku"], answer: 0, why: "Kodi ya nyumba ni hitaji; vingine ni matakwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Hesabu za Kila Siku kwa Kazi na Maisha",
    questions: [
      { objective: "O1", q: "Kipi ni sawa na 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% maana yake 50 kati ya 100, ambayo ni 1/2 au 0.5." },
      { objective: "O1", q: "0.4 ni asilimia ngapi?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Sogeza nukta nafasi mbili kulia: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, ambayo ni 3/4"], answer: 3, why: "Namba ya chini ni ile ile: jumlisha za juu. 6/8 inarahisishwa kuwa 3/4." },
      { objective: "O2", q: "10% ya $73.00 ni ngapi?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Sogeza nukta nafasi moja kushoto: $7.30." },
      { objective: "O2", q: "Keekee (drill) la $120 lina punguzo la 30%. Bei ya punguzo ni ngapi?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% ya 120 ni 36, na 120 - 36 = $84." },
      { objective: "O2", q: "\"Punguzo la 20%\" maana yake unalipa asilimia ngapi ya bei?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% ya bei." },
      { objective: "O2", q: "Viwango vya kodi ya mauzo:", options: ["Ni sawa kila mahali Marekani", "Ni 10% kila mara", "Vinawekwa na duka", "Vinatofautiana kwa jimbo na jiji, kwa hiyo angalia ofisi ya kodi ya jimbo lako au risiti"], answer: 3, why: "Majimbo na majiji mengi huweka viwango vyao wenyewe vya kodi ya mauzo." },
      { objective: "O3", q: "Unapataje bei kwa kipimo kimoja?", options: ["Bei x ukubwa", "Bei / ukubwa", "Ukubwa / 100", "Bei - ukubwa"], answer: 1, why: "Gawa bei kwa idadi ya vipimo." },
      { objective: "O3", q: "Sabuni ya kufulia: oz 50 kwa $6.00 au oz 100 kwa $13.00. Upi ni ununuzi bora?", options: ["oz 100, kwa sababu ni kubwa", "Ni sawa", "oz 50, $0.12 kwa aunsi dhidi ya $0.13", "Huwezi kujua"], answer: 2, why: "$6.00 / 50 = $0.12 na $13.00 / 100 = $0.13, kwa hiyo chupa ndogo inagharimu kidogo kwa aunsi." },
      { objective: "O3", q: "Kabla ya kununua ukubwa mkubwa, unapaswa pia kujiuliza:", options: ["Nitaitumia kabla haijaharibika, na ninaweza kuimudu sasa?", "Boksi lina rangi nzuri?", "Iko kwenye rafu ya juu?", "Duka lina sehemu ya kuegesha magari?"], answer: 0, why: "Bei ndogo kwa kipimo kimoja inaokoa pesa tu kama utaitumia na unaweza kuilipia." },
      { objective: "O4", q: "Galoni 3 zina kwati ngapi?", options: ["7", "3", "16", "12"], answer: 3, why: "Kwati 4 = galoni 1, kwa hiyo 3 x 4 = kwati 12." },
      { objective: "O4", q: "Maboksi ya vigae yanafunika futi za mraba 15. Unahitaji futi za mraba 100. Maboksi mangapi?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, na unakadiria juu hadi maboksi 7 mazima." },
      { objective: "O4", q: "Unafanya kazi 8:00 am hadi 4:30 pm na chakula cha mchana cha dakika 30 kisicholipwa. Ni saa ngapi?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "8:00 hadi 4:30 ni saa 8.5, toa saa 0.5 = saa 8.0." },
      { objective: "O5", q: "Mshahara halisi ni:", options: ["Mshahara ghafi toa makato", "Mshahara ghafi jumlisha makato", "Muda wako wa ziada tu", "Kiwango chako cha saa"], answer: 0, why: "Mshahara halisi ni kinachobaki baada ya makato kutolewa." },
      { objective: "O5", q: "Chini ya sheria ya shirikisho, wafanyakazi wa saa wanaohusika hupata muda wa ziada kwa saa zinazozidi:", options: ["35 katika wiki ya kazi", "8 katika mwezi", "50 katika wiki ya kazi", "40 katika wiki ya kazi"], answer: 3, why: "Kanuni ya shirikisho ni mara moja na nusu kwa saa zinazozidi 40 katika wiki ya kazi." },
      { objective: "O5", q: "Ulifanya kazi saa 44 kwa $15.00 kwa saa pamoja na muda wa ziada. Mshahara ghafi ni ngapi?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, jumlisha 4 x $22.50 = $90, kwa hiyo $690.00." },
      { objective: "O5", q: "Kabla ya kumwonyesha hati ya mshahara mtu anayekusaidia, unapaswa:", options: ["Kuiweka mtandaoni", "Kuongeza nywila yako juu yake", "Kufunika namba yako ya Social Security", "Kuitupa"], answer: 2, why: "Namba yako ya Social Security ni ya siri na inaweza kutumiwa kuiba utambulisho wako." },
      { objective: "O6", q: "Unalipwa kila wiki mbili na unapeleka nyumbani $1,200. Kipato chako cha mwezi ni kipi?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "Katika bajeti inayolingana, jumla ya matumizi pamoja na akiba ni:", options: ["Zaidi ya kipato", "Sawa na kipato au chini yake", "$0 kamili kila mara", "Haiandikwi"], answer: 1, why: "Matumizi yaliyo sawa na kipato au chini yake yanakuepusha na deni jipya." },
      { objective: "O6", q: "Kipi ni matumizi yanayobadilika?", options: ["Kodi ya nyumba isiyobadilika", "Malipo ya gari yasiyobadilika", "Kifurushi cha simu kisichobadilika", "Chakula, ambacho kinabadilika kila mwezi"], answer: 3, why: "Matumizi yanayobadilika hubadilika kutoka mwezi mmoja hadi mwingine." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: { title: "Jaribio la awali: Unajua nini tayari?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rudia sehemu hiyo kwa hatua za somo na uikague tena.",
    criteria: [
      { name: "Hati ya mshahara imekaguliwa", objective: "O5", notYet: "Baadhi ya mistari haijakaguliwa, au kuna makosa ya hesabu katika mshahara ghafi au halisi.", meets: "Saa, kiwango, muda wa ziada, makato na mshahara halisi vimekaguliwa; kila mstari unalingana hadi senti au kosa limeandikwa.", exceeds: "Pia anaandika atakachoiambia ofisi ya mishahara kuhusu kosa lolote na wapi pa kwenda baadaye." },
      { name: "Kipato cha mwezi", objective: "O6", notYet: "Mshahara wa wiki umezidishwa kwa 4, au mshahara ghafi umetumika badala ya halisi.", meets: "Mshahara halisi wa mwezi umepatikana kwa x 52 / 12 au x 26 / 12.", exceeds: "Anaonyesha hesabu na kuikagua kwa njia ya pili." },
      { name: "Bajeti inayolingana", objective: "O6", notYet: "Matumizi yanazidi kipato, au hakuna mstari wa akiba.", meets: "Mahitaji, akiba na matakwa yameorodheshwa; matumizi ni sawa na kipato au chini yake; jumla zimekaguliwa.", exceeds: "Ina mpango wa kufuatilia matumizi halisi na tarehe ya kuipitia." },
      { name: "Bei kwa kipimo kimoja", objective: "O3", notYet: "Ulinganisho chini ya 3, au vipimo havilingani.", meets: "Ulinganisho 3 wenye bei sahihi kwa kipimo kimoja na ununuzi bora umewekwa alama.", exceeds: "Anaonyesha lini ukubwa mkubwa si chaguo bora na kwa nini." },
      { name: "Asilimia", objective: "O2", notYet: "Majibu ya mazoezi ya punguzo, kodi, bakshishi au nyongeza ya mshahara mara nyingi si sahihi.", meets: "Angalau mazoezi 4 kati ya 5 ya asilimia ni sahihi, hadi senti.", exceeds: "Anaweza kumweleza mtu mwingine njia ya mkato (10%, kisha jenga)." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kukamilisha Karatasi ya Hesabu za Kazi na Pesa kwa rubriki",
      "Wanafunzi wanaoripoti kugundua kosa kwenye hati ya mshahara au kuokoa pesa kwa bei kwa kipimo kimoja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoweka bajeti iliyoandikwa kwa angalau miezi 2",
      "Wanafunzi wanaoendelea na \"Maandalizi ya Mtihani wa GED: Hesabu\" au wanaofaulu jaribio la hesabu la kazi ndani ya miezi 6"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Karatasi, penseli na kikokotoo rahisi (kikokotoo cha simu kinatosha)",
      "Utepe wa kupimia au rula yenye alama za 1/8 inchi",
      "Hati ya mshahara ya mazoezi iliyobuniwa katika Somo la 5, au ya mwanafunzi mwenyewe yenye namba za binafsi zilizofunikwa",
      "Risiti za duka au lebo za rafu kwa bei kwa kipimo kimoja",
      "Kama saa 2 kwa jumla: masomo, mazoezi, majaribio na kazi ya mwisho"
    ],
    facilitatorNotes: [
      "Watu wazima wengi huwa na wasiwasi kuhusu hesabu. Anza na jaribio la awali kama zoezi la kupasha moto \"bila alama\" na msherehekee maendeleo kwenye mtihani wa mwisho.",
      "Fanya kila mfano ubaoni kwanza, kisha waache wanafunzi wajaribu unaofuata wawili wawili.",
      "Fundisha kukagua majibu kwa njia mbili (kadirio, kisha hesabu kamili) ili wanafunzi waamini kazi yao wenyewe.",
      "Wanafunzi wakileta hati halisi za mshahara, waambie wafunike kwanza namba za Social Security na za benki. Maswali ya kodi na muda wa ziada yanayozidi msingi yaende kwa ofisi ya mishahara, ofisi ya kazi ya jimbo au DOL Wage and Hour Division.",
      "Usimhukumu mtu yeyote kwa bajeti yake; lengo ni mpango unaolingana, si mpango kamili.",
      "Waelekeze wanafunzi wanaotaka diploma kwenye \"Maandalizi ya Mtihani wa GED: Hesabu\"."
    ]
  }
};

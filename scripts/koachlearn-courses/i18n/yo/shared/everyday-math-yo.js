"use strict";

// Koach Learn course (Yoruba translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// All money and pay examples are made up for practice.

const DOL_OT = { name: "U.S. Department of Labor: Owó àfikún àkókò (overtime)", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: Ìdá-ọgọ́rùn-ún tí a ń yọ fún Social Security àti Medicare", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (ohun èlò ètò ìnáwó ọ̀fẹ́)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-yo",
  lang: "yo",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Ìṣirò Ojoojúmọ́ fún Iṣẹ́ àti Ìgbésí Ayé",
  skills: "Ìdá, decimal àti ìdá-ọgọ́rùn-ún, Ẹ̀dínwó, owó-orí, owó ìmoore àti àfikún owó-iṣẹ́, Iye owó ẹyọ kan àti ọjà tó dára jù láti rà, Wíwọ̀n nǹkan àti wákàtí iṣẹ́, Ṣíṣàyẹ̀wò ìwé owó-iṣẹ́, Ṣíṣe ètò ìnáwó oṣooṣù",
  outcome: "ṣe ìṣirò tí o máa ń bá pàdé níbi iṣẹ́ àti nílé: lo ìdá (fraction), decimal àti ìdá-ọgọ́rùn-ún (percent), wá ọjà tó dára jù láti rà, wọn nǹkan kí o sì yí ẹyọ ìwọ̀n padà, ṣàyẹ̀wò ìwé owó-iṣẹ́ rẹ (paystub), kí o sì ṣe ètò ìnáwó oṣooṣù (budget) láti inú owó-iṣẹ́ rẹ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ ní ìgboyà nínú nọ́mbà padà: àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri, àwọn òbí àti ẹnikẹ́ni tó ń padà sí ẹ̀kọ́. O kò nílò láti rántí ìṣirò ilé-ìwé. A máa bẹ̀rẹ̀ láti ìbẹ̀rẹ̀, pẹ̀lú nǹkan gidi bí àmì iye owó ọjà, téèpù ìwọ̀n àti ìwé owó-iṣẹ́.",
    "O máa kọ́ ìdá, decimal àti ìdá-ọgọ́rùn-ún; ṣírò ẹ̀dínwó, owó-orí ọjà, owó ìmoore àti àfikún owó-iṣẹ́; fi iye owó ẹyọ kan wé ara wọn ní ilé ìtajà; wọn nǹkan kí o sì yí ẹyọ ìwọ̀n padà fún iṣẹ́ kan; ṣàyẹ̀wò gbogbo ìlà ìwé owó-iṣẹ́; kí o sì ṣe ètò ìnáwó oṣooṣù.",
    "Àwọn ọgbọ́n kan náà yìí ni ọ̀pọ̀ ìdánwò iṣẹ́ àti ìdánwò GED Math (ìdánwò ìṣirò fún ìwé-ẹ̀rí ilé-ìwé gíga ní US) fi ń bẹ̀rẹ̀. Tí o bá parí, \"GED Test Preparation: Math\" jẹ́ ìgbésẹ̀ tó dára tó kàn. Ẹ̀kọ́ yìí kò fúnni ní ìwé-ẹ̀rí; ó ń kọ́ ọgbọ́n náà.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú àpẹẹrẹ tí a ti ṣírò àti iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé tàbí ẹ̀rọ ìṣirò fóònù. Ìbéèrè kíákíá 2 wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì parí ẹ̀kọ́ náà. Gbogbo àpẹẹrẹ owó àti owó-iṣẹ́ jẹ́ àṣeṣe fún ìdánrawò."
  ],
  finalTask: "Ṣe \"Ìwé Ìṣirò Iṣẹ́ àti Owó\" tìrẹ lójú ìwé kan: (1) ṣàyẹ̀wò ìwé owó-iṣẹ́ àṣeṣe (tàbí tìrẹ, pẹ̀lú àwọn nọ́mbà àdáni tí o ti bò) ní ìlà-ìlà: wákàtí lọ́nà iye owó wákàtí, owó àfikún àkókò, àyọkúrò àti owó tí o ń mú lọ sílé; (2) yí owó-iṣẹ́ náà padà sí owó oṣooṣù kí o sì ṣe ètò ìnáwó oṣooṣù tó ní ìlà ìfipamọ́, níbi tí ìnáwó kò ti ju owó tó ń wọlé lọ; (3) fi iye owó ẹyọ kan ti nǹkan 3 tí o máa ń rà wé ara wọn, kí o sì kọ ìwọ̀n wo ló dára jù láti rà. Pa á mọ́ kí o sì máa ṣe àtúnṣe rẹ̀ lóṣooṣù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tó ń padà sí ẹ̀kọ́: àwọn tó ń wá iṣẹ́, àwọn tó ń padà sílé láti ẹ̀wọ̀n, àwọn aṣíkiri, àwọn òbí àti àwọn òṣìṣẹ́ àgbà. Ọ̀pọ̀ fi ilé-ìwé sílẹ̀ ní kùtùkùtù tàbí wọn kò tíì ṣe ìṣirò lórí ìwé fún ọ̀pọ̀ ọdún, àwọn kan sì máa ń ní ìbẹ̀rù nípa nọ́mbà.",
    startingPoint: "Wọ́n lè ròpọ̀, yọkúrò, kí wọ́n sì lo ẹ̀rọ ìṣirò fóònù fún ìṣirò kékeré. Ọ̀pọ̀ kò dá wọn lójú pẹ̀lú ìdá, ìdá-ọgọ́rùn-ún, yíyí ẹyọ ìwọ̀n padà àti àyọkúrò lórí ìwé owó-iṣẹ́, díẹ̀ ló sì ń kọ ètò ìnáwó sílẹ̀.",
    gap: "Iṣẹ́ àti ìgbésí ayé ojoojúmọ́ nílò ìṣirò kíákíá tó tọ̀nà: wíwọ̀n nǹkan níbi iṣẹ́, kíka wákàtí, ṣíṣàyẹ̀wò owó-iṣẹ́, wíwá iye owó gidi àti mímú kí owó tó di òpin oṣù. Àṣìṣe ń náni lówó, ó sì lè farapamọ́ lórí ìwé owó-iṣẹ́. Àwọn ọgbọ́n yìí tún jẹ́ ìpìlẹ̀ fún ìdánwò GED Math àti ọ̀pọ̀ ìdánwò ìgbanisíṣẹ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ àpẹẹrẹ tí a ti ṣírò",
      "Irinṣẹ́: ìwé, pẹ́ńsù àti ẹ̀rọ ìṣirò fóònù lásán; kò sí ètò kọ̀mpútà pàtàkì",
      "Ìbẹ̀rù ìṣirò: ìgbésẹ̀ kékeré, ṣàyẹ̀wò ìdáhùn ní ọ̀nà méjì, kò sí ìkánjú àkókò",
      "Àṣírí: àwọn ìwé owó-iṣẹ́ ìdánrawò jẹ́ àṣeṣe; bo nọ́mbà Social Security àti nọ́mbà àkáǹtì lórí èyí gidi",
      "Àwọn òfin tó ń yí padà (ìdá owó-orí, owó àfikún àkókò) ń tọ́ka sí orísun ìjọba; òfin ìpínlẹ̀ yàtọ̀ síra"
    ],
    prerequisites: "Ìrọ̀pọ̀, ìyọkúrò àti ìsọdipúpọ̀ ìpìlẹ̀, pẹ̀lú ẹ̀rọ ìṣirò tàbí láìsí rẹ̀."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ìdá, decimal, ìdá-ọgọ́rùn-ún àti téèpù ìwọ̀n", action: "yí ìdá, decimal àti ìdá-ọgọ́rùn-ún padà sí ara wọn, kí o sì ka téèpù ìwọ̀n dé 1/8 inch tó súnmọ́ jù", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O2", condition: "Tí a bá fún ọ ní iye owó, ìwé owó ọjà tàbí iye owó wákàtí", action: "ṣírò ẹ̀dínwó, owó-orí ọjà, owó ìmoore tàbí àfikún owó-iṣẹ́ nípa lílo ìdá-ọgọ́rùn-ún", standard: "dé kọ́bọ̀ (cent) tó súnmọ́ jù" },
    { id: "O3", condition: "Tí a bá fún ọ ní ìwọ̀n méjì ti ọjà kan náà àti iye owó wọn", action: "ṣírò iye owó ẹyọ kan fún ọ̀kọ̀ọ̀kan, kí o sì yan èyí tó dára jù láti rà", standard: "kí o sì yan tọ̀nà ní ó kéré tán 4 nínú àwọn méjì-méjì 5" },
    { id: "O4", condition: "Tí a bá fún ọ ní iṣẹ́ kan bí títẹ́ ilẹ̀ yàrá tàbí kíkọ àkókò iṣẹ́ sílẹ̀", action: "yí ẹyọ ìwọ̀n padà, kí o sì ṣírò ààyè (area) tàbí wákàtí tí o ṣiṣẹ́", standard: "pẹ̀lú ẹyọ ìwọ̀n tó tọ́, kí o sì gbé e sókè nígbà tí o bá nílò odindi nǹkan" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìwé owó-iṣẹ́ (paystub)", action: "ṣàyẹ̀wò wákàtí, iye owó wákàtí, owó àfikún àkókò, àyọkúrò àti owó tí o ń mú lọ sílé ní ìlà-ìlà", standard: "kí gbogbo ìlà sì bá a mu dé kọ́bọ̀, tàbí kí o kọ àṣìṣe náà sílẹ̀ láti béèrè nípa rẹ̀" },
    { id: "O6", condition: "Tí a bá fún ọ ní owó-iṣẹ́ tó ń wọlé déédéé", action: "ṣe ètò ìnáwó oṣooṣù tó ní ìfipamọ́, tí ìnáwó kò sì ju owó tó ń wọlé lọ", standard: "pẹ̀lú gbogbo ìsọ̀rí tí a kọ sílẹ̀ àti àpapọ̀ tí a ti ṣàyẹ̀wò" }
  ],
  chapters: [
    {
      name: "Orí 1: Àwọn nọ́mbà tí o ń lò lójoojúmọ́",
      lessons: [
        {
          title: "Ìdá, decimal, ìdá-ọgọ́rùn-ún àti téèpù ìwọ̀n",
          objectives: ["O1"],
          minutes: 6,
          goal: "Yí ìdá, decimal àti ìdá-ọgọ́rùn-ún padà sí ara wọn, kí o sì ka téèpù ìwọ̀n.",
          text: [
            "Ìdá, decimal àti ìdá-ọgọ́rùn-ún jẹ́ ọ̀nà mẹ́ta láti kọ iye kan náà. Ìdajì pízà jẹ́ 1/2, tàbí 0.5, tàbí 50%. Ìdá mẹ́rin kan jẹ́ 1/4, 0.25 tàbí 25%. Ìdá mẹ́rin mẹ́ta jẹ́ 3/4, 0.75 tàbí 75%.",
            "Láti yí ìdá padà sí decimal, fi nọ́mbà ìsàlẹ̀ pín nọ́mbà òkè: 3/8 ni 3 pín sí 8, èyí tó jẹ́ 0.375. Láti yí decimal padà sí ìdá-ọgọ́rùn-ún, gbé pọ́ìntì decimal náà sí ọ̀tún ní ààyè méjì: 0.375 di 37.5%. Láti ìdá-ọgọ́rùn-ún sí decimal, gbé e sí òsì ní ààyè méjì: 15% di 0.15.",
            "Téèpù ìwọ̀n ní US ń pín inch kọ̀ọ̀kan sí àmì kékeré 16. Àmì tó gùn jù ní àárín inch ni 1/2. Àwọn àmì tó gùn tẹ̀lé e ni 1/4 àti 3/4. Lẹ́yìn náà 1/8, 3/8, 5/8 àti 7/8. Àwọn tó kúrú jù ni ìdá kẹrìndínlógún (sixteenths). Tí téèpù bá dúró ní àmì 1/8 mẹ́ta kọjá 5, ó kà 5 àti 3/8 inch.",
            "Ríròpọ̀ ìdá tí nọ́mbà ìsàlẹ̀ wọn jẹ́ ọ̀kan náà rọrùn: ro àwọn nọ́mbà òkè pọ̀ kí o sì fi ìsàlẹ̀ sílẹ̀ bí ó ti wà. 1/8 + 3/8 = 4/8, èyí tó jẹ́ ọ̀kan náà pẹ̀lú 1/2."
          ],
          steps: ["Ìdá sí decimal: fi ìsàlẹ̀ pín òkè.", "Decimal sí ìdá-ọgọ́rùn-ún: gbé pọ́ìntì sí ọ̀tún ní ààyè 2.", "Ìdá-ọgọ́rùn-ún sí decimal: gbé pọ́ìntì sí òsì ní ààyè 2.", "Téèpù ìwọ̀n: wá odindi inch, lẹ́yìn náà ka àwọn àmì tó kọjá rẹ̀.", "Mú un rọrùn: 4/8 jẹ́ ọ̀kan náà pẹ̀lú 1/2."],
          words: [["Ìdá (fraction)", "apá kan nínú odindi, tí a kọ bí nọ́mbà òkè lórí nọ́mbà ìsàlẹ̀, bí 3/4."], ["Numerator", "nọ́mbà òkè ìdá: iye apá tí o ní."], ["Denominator", "nọ́mbà ìsàlẹ̀ ìdá: iye apá tó dọ́gba tó ń ṣe odindi kan."], ["Decimal", "nọ́mbà tó ní pọ́ìntì, bí 0.75, tó ń fi apá odindi hàn."], ["Ìdá-ọgọ́rùn-ún (percent, %)", "apá nínú 100. 25% túmọ̀ sí 25 nínú 100."]],
          slides: [
            { title: "Ọ̀nà mẹ́ta láti kọ iye kan náà", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Yíyí padà", bullets: ["Ìdá sí decimal: fi ìsàlẹ̀ pín òkè (3/8 = 0.375)", "Decimal sí ìdá-ọgọ́rùn-ún: pọ́ìntì sí ọ̀tún ní ààyè 2 (37.5%)", "Ìdá-ọgọ́rùn-ún sí decimal: pọ́ìntì sí òsì ní ààyè 2 (15% = 0.15)"] },
            { title: "Kíka téèpù ìwọ̀n", bullets: ["Àmì àárín tó gùn jù: 1/2", "Lẹ́yìn náà 1/4 àti 3/4, lẹ́yìn náà ìdá kẹjọ, lẹ́yìn náà ìdá kẹrìndínlógún", "5 inch àti àmì ìdá kẹjọ 3 = 5 3/8 in"] }
          ],
          tryIt: "Ìdánrawò (ìdáhùn wà nísàlẹ̀): (1) Kọ 1/4 bí decimal àti ìdá-ọgọ́rùn-ún. (2) Kọ 0.6 bí ìdá-ọgọ́rùn-ún. (3) Kọ 8% bí decimal. (4) Yí 5/8 padà sí decimal. (5) Ro 1/4 + 1/4 pọ̀. Ìdáhùn: (1) 0.25 àti 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, èyí tó jẹ́ 1/2. Tí o bá ní téèpù ìwọ̀n tàbí rúlà, wọn nǹkan 3 nílé dé 1/8 inch tó súnmọ́ jù.",
          youCanNow: "yí ìdá, decimal àti ìdá-ọgọ́rùn-ún padà sí ara wọn, kí o sì ka téèpù ìwọ̀n dé 1/8 inch tó súnmọ́ jù.",
          quickCheck: [
            { objective: "O1", q: "Kí ni 3/4 bí ìdá-ọgọ́rùn-ún?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 pín sí 4 jẹ́ 0.75, gbígbé pọ́ìntì sí ọ̀tún ní ààyè méjì sì fún wa ní 75%." },
            { objective: "O1", q: "Kí ni 6% bí decimal?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Gbé pọ́ìntì sí òsì ní ààyè méjì: 6% = 0.06." }
          ]
        },
        {
          title: "Ẹ̀dínwó, owó-orí ọjà, owó ìmoore àti àfikún owó-iṣẹ́",
          objectives: ["O2"],
          minutes: 6,
          goal: "Ṣírò ẹ̀dínwó, owó-orí ọjà, owó ìmoore àti àfikún owó-iṣẹ́ pẹ̀lú ìdá-ọgọ́rùn-ún.",
          text: [
            "Láti wá ìdá-ọgọ́rùn-ún nọ́mbà kan, yí ìdá-ọgọ́rùn-ún padà sí decimal kí o sì sọ ọ́ di púpọ̀. 20% ti $45 ni 0.20 x 45 = $9.",
            "Ẹ̀dínwó (discount): yọ ọ́ kúrò nínú iye owó. Jákẹ́ẹ̀tì $45 pẹ̀lú ẹ̀dínwó 20% jẹ́ 45 - 9 = $36. Owó-orí ọjà (sales tax): fi kún un. Tí ìdá owó-orí bá jẹ́ 8%, owó-orí lórí $36 ni 0.08 x 36 = $2.88, nítorí náà o máa san $38.88. Ìdá owó-orí ọjà yàtọ̀ ní ìpínlẹ̀ àti ìlú kọ̀ọ̀kan; ṣàyẹ̀wò ilé-iṣẹ́ owó-orí ìpínlẹ̀ rẹ tàbí wo rìsíìtì kan.",
            "Owó ìmoore (tip) láìsí ẹ̀rọ ìṣirò: wá 10% nípa gbígbé pọ́ìntì sí òsì ní ààyè kan, lẹ́yìn náà kọ́ ọ sókè láti ibẹ̀. Lórí ìwé owó $28, 10% jẹ́ $2.80, 5% jẹ́ ìdajì rẹ̀, $1.40, nítorí náà 15% jẹ́ $2.80 + $1.40 = $4.20. 20% jẹ́ ìlọ́po méjì 10%: $5.60.",
            "Àfikún owó-iṣẹ́ (raise): àfikún 3% lórí $16.00 fún wákàtí kan jẹ́ 0.03 x 16 = $0.48, nítorí náà iye owó tuntun jẹ́ $16.48 fún wákàtí kan. Ṣọ́ra fún àwọn ọ̀rọ̀: \"20% off\" (ẹ̀dínwó 20%) túmọ̀ sí pé o máa san 80% iye owó; \"20% more\" (20% sí i) túmọ̀ sí pé o máa san 120%."
          ],
          steps: ["Yí ìdá-ọgọ́rùn-ún padà sí decimal.", "Sọ ọ́ di púpọ̀ pẹ̀lú iye náà.", "Ẹ̀dínwó: yọ ọ́ kúrò. Owó-orí tàbí owó ìmoore: fi kún un. Àfikún owó-iṣẹ́: fi kún iye owó àtijọ́.", "Gbé owó dé kọ́bọ̀ (cent) tó súnmọ́ jù.", "Ṣàyẹ̀wò: ṣé ìdáhùn náà mọ́gbọ́n dání? Ẹ̀dínwó gbọ́dọ̀ kéré ju iye owó lọ."],
          words: [["Ẹ̀dínwó (discount)", "owó tí a yọ kúrò nínú iye owó."], ["Owó-orí ọjà (sales tax)", "owó-orí tí a fi kún iye owó níbi ìsanwó; ìdá rẹ̀ dá lórí ìpínlẹ̀ àti ìlú rẹ."], ["Owó ìmoore (tip)", "owó àfikún tí o fún ẹni tó ṣiṣẹ́ fún ọ, tí a sábà máa ń ṣírò bí ìdá-ọgọ́rùn-ún ìwé owó."], ["Àfikún owó-iṣẹ́ (raise)", "ìbísí nínú iye owó-iṣẹ́ rẹ."], ["Gbígbé dé ibi tó súnmọ́ (round)", "mímú nọ́mbà rọrùn; a máa ń gbé owó dé kọ́bọ̀ (cent) tó súnmọ́ jù."]],
          slides: [
            { title: "Ìdá-ọgọ́rùn-ún nọ́mbà kan", bullets: ["Yí ìdá-ọgọ́rùn-ún padà sí decimal", "Sọ ọ́ di púpọ̀: 20% ti $45 = 0.20 x 45 = $9"] },
            { title: "Ẹ̀dínwó àti owó-orí", bullets: ["Ẹ̀dínwó 20% lórí $45: 45 - 9 = $36", "Owó-orí 8% lórí $36: 0.08 x 36 = $2.88", "O máa san $38.88; ìdá owó-orí yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀ àti ìlú sí ìlú"] },
            { title: "Owó ìmoore ní orí rẹ", bullets: ["10%: gbé pọ́ìntì sí òsì ní ààyè kan", "Ìwé owó $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Àfikún owó-iṣẹ́", bullets: ["3% ti $16.00 = $0.48", "Iye owó tuntun: $16.48 fún wákàtí kan", "Ẹ̀dínwó 20% = san 80%; 20% sí i = san 120%"] }
          ],
          tryIt: "Ìdánrawò (ìdáhùn wà nísàlẹ̀): (1) Bàtà iṣẹ́ $60 ní ẹ̀dínwó 25%. Kí ni iye owó títà rẹ̀? (2) Owó-orí jẹ́ 7% lórí ọjà $50. Kí ni àpapọ̀? (3) Wá owó ìmoore 20% lórí ìwé owó $35. (4) Iye owó-iṣẹ́ rẹ $15.50 gba àfikún 4%. Kí ni iye owó tuntun? Ìdáhùn: (1) $45; (2) owó-orí $3.50, àpapọ̀ $53.50; (3) $7.00; (4) $0.62 sí i, $16.12 fún wákàtí kan. Lẹ́yìn náà wo rìsíìtì gidi kan kí o sì wá ìdá owó-orí tí agbègbè rẹ gbà.",
          youCanNow: "ṣírò ẹ̀dínwó, owó-orí ọjà, owó ìmoore àti àfikún owó-iṣẹ́ dé kọ́bọ̀ (cent) tó súnmọ́ jù.",
          quickCheck: [
            { objective: "O2", q: "Ẹ̀wù òtútù $80 ní ẹ̀dínwó 25%. Kí ni iye owó títà rẹ̀?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% ti 80 jẹ́ 20, 80 - 20 = $60." },
            { objective: "O2", q: "Kí ni owó ìmoore 15% lórí ìwé owó $40?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% jẹ́ $4.00, 5% sì jẹ́ $2.00, nítorí náà 15% jẹ́ $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: Àwọn ìjápọ̀ sí ilé-iṣẹ́ owó-orí ìpínlẹ̀", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Iye owó ẹyọ kan: wíwá ọjà tó dára jù láti rà",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣírò iye owó ẹyọ kan, kí o sì yan ọjà tó dára jù láti rà.",
          text: [
            "Iye owó ẹyọ kan (unit price) ni iye owó fún ẹyọ kan: ounce kan, pound kan, tàbí ohun kan. Ó ń jẹ́ kí o fi ìwọ̀n tó yàtọ̀ síra wé ara wọn lọ́nà tó tọ́. Láti wá a, fi iye ẹyọ pín iye owó.",
            "Àpẹẹrẹ: páálí cereal 24-ounce jẹ́ $4.80. $4.80 / 24 = $0.20 fún ounce kan. Páálí 36-ounce jẹ́ $6.12. $6.12 / 36 = $0.17 fún ounce kan. Páálí ńlá ló dára jù láti rà.",
            "Èyí tó tóbi kì í fi gbogbo ìgbà wọ́n kéré. Àpò ìrẹsì 2-pound fún $3.18 jẹ́ $1.59 fún pound kan. Àpò 5-pound fún $8.45 jẹ́ $1.69 fún pound kan. Níbí, àpò kékeré ló dára jù láti rà. Ọ̀pọ̀ ilé ìtajà ń tẹ iye owó ẹyọ kan ní lẹ́tà kékeré sórí àmì iye owó ṣẹ́ẹ̀fù; rí i dájú pé àmì méjèèjì lo ẹyọ ìwọ̀n kan náà.",
            "Ọjà tó dára jù láti rà dára jù nìkan tí o bá máa lò ó kí ó tó bàjẹ́, tí o sì lè ra á ní ọ̀sẹ̀ yìí. Iye owó ẹyọ kan tún ń ṣèrànwọ́ níbi iṣẹ́, fún àpẹẹrẹ nígbà tí o bá ń ra ohun èlò iṣẹ́."
          ],
          steps: ["Kọ iye owó àti ìwọ̀n ọjà kọ̀ọ̀kan sílẹ̀.", "Rí i dájú pé ẹyọ ìwọ̀n bá ara wọn mu (ounce pẹ̀lú ounce).", "Pín: iye owó / ìwọ̀n = iye owó ẹyọ kan.", "Fi wé ara wọn: iye owó ẹyọ kan tó kéré jù ló dára jù láti rà.", "Béèrè: ṣé màá lo gbogbo rẹ̀, ṣé mo sì lè rà á báyìí?"],
          words: [["Iye owó ẹyọ kan (unit price)", "iye owó fún ẹyọ kan, bí ounce kan tàbí pound kan."], ["Ounce (oz)", "ẹyọ ìwọ̀n kékeré fún òṣùwọ̀n; ounce 16 ló ń ṣe pound 1."], ["Pound (lb)", "ẹyọ ìwọ̀n òṣùwọ̀n tó dọ́gba pẹ̀lú ounce 16."], ["Àmì iye owó ṣẹ́ẹ̀fù (shelf tag)", "àmì iye owó lórí ṣẹ́ẹ̀fù ilé ìtajà; ó sábà máa ń fi iye owó ẹyọ kan hàn."]],
          slides: [
            { title: "Iye owó ẹyọ kan = iye owó / ìwọ̀n", bullets: ["Iye owó fún ounce kan, pound kan tàbí ohun kan", "Fi ìwọ̀n tó yàtọ̀ síra wé ara wọn lọ́nà tó tọ́"] },
            { title: "Àpẹẹrẹ cereal", bullets: ["24 oz fún $4.80 = $0.20 fún ounce kan", "36 oz fún $6.12 = $0.17 fún ounce kan", "Páálí ńlá ló borí níbí"] },
            { title: "Èyí tó tóbi kì í fi gbogbo ìgbà wọ́n kéré", bullets: ["Ìrẹsì 2 lb $3.18 = $1.59 fún pound kan", "Ìrẹsì 5 lb $8.45 = $1.69 fún pound kan", "Àpò kékeré ló borí níbí"] },
            { title: "Rírà pẹ̀lú ọgbọ́n", bullets: ["Ṣàyẹ̀wò àmì ṣẹ́ẹ̀fù, ẹyọ ìwọ̀n kan náà lórí méjèèjì", "Ṣé o máa lò ó kí ó tó bàjẹ́?", "Ṣé o lè rà á ní ọ̀sẹ̀ yìí?"] }
          ],
          tryIt: "Ìdánrawò (ìdáhùn wà nísàlẹ̀): (1) Ẹyin 12 fún $3.60 tàbí ẹyin 18 fún $5.04? (2) Oje 64 oz fún $3.84 tàbí 128 oz fún $6.40? Ìdáhùn: (1) $0.30 fún ẹyin kan sí $0.28 fún ẹyin kan: ẹyin 18 ló dára jù; (2) $0.06 fún ounce kan sí $0.05 fún ounce kan: 128 oz ló dára jù. Lẹ́yìn náà, ní ilé ìtajà tàbí lórí ojú-òpó wẹ́ẹ̀bù ilé ìtajà kan, wá iye owó ẹyọ kan ti nǹkan 3 tí o máa ń rà ní ìwọ̀n méjì, kí o sì kọ èyí tó dára jù láti rà sílẹ̀. Èyí máa wà lórí ìwé iṣẹ́ ìkẹyìn rẹ.",
          youCanNow: "wá iye owó ẹyọ kan kí o sì yan ọjà tó dára jù láti rà, kí o sì mọ ìgbà tí ìwọ̀n ńlá kò tọ́ sí i.",
          quickCheck: [
            { objective: "O3", q: "Àpò ọ̀dùnkún 10-pound jẹ́ $5.90. Kí ni iye owó ẹyọ kan?", options: ["$0.59 fún pound kan", "$5.90 fún pound kan", "$1.69 fún pound kan", "$59.00 fún pound kan"], answer: 0, why: "$5.90 / 10 = $0.59 fún pound kan." },
            { objective: "O3", q: "Ọṣẹ A: ọṣẹ 3 fún $2.70. Ọṣẹ B: ọṣẹ 8 fún $8.00. Èwo ló dára jù láti rà?", options: ["Ọṣẹ B, nítorí ó pọ̀ jù", "Iye owó wọn jẹ́ ọ̀kan náà fún ọṣẹ kan", "Ọṣẹ B, nítorí ó wọ́n jù", "Ọṣẹ A, ní $0.90 fún ọṣẹ kan sí $1.00"], answer: 3, why: "$2.70 / 3 = $0.90, $8.00 / 8 = $1.00, nítorí náà A kéré ní owó fún ọṣẹ kan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Àwọn nọ́mbà tí o ń lò lójoojúmọ́",
        questions: [
          { objective: "O1", q: "Kí ni 1/8 bí decimal?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 pín sí 8 jẹ́ 0.125." },
          { objective: "O1", q: "Lórí téèpù ìwọ̀n, àmì tó gùn jù láàárín inch 4 àti 5 ni:", options: ["4 1/2 inch", "4 1/8 inch", "4 1/16 inch", "5 inch"], answer: 0, why: "Àmì tó gùn jù ní àárín inch ni àmì 1/2." },
          { objective: "O2", q: "Owó-orí ọjà jẹ́ 6% lórí rírà $25. Èló ni owó-orí náà?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "Owó-iṣẹ́ rẹ lọ láti $14.00 sí $14.70 fún wákàtí kan. Àfikún ìdá-ọgọ́rùn-ún mélòó nìyẹn?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "Àfikún náà jẹ́ $0.70, 0.70 / 14.00 = 0.05, èyí tó jẹ́ 5%." },
          { objective: "O3", q: "Èwo ló dára jù láti rà: bọ́tà ẹ̀pà 16 oz fún $3.20 tàbí 40 oz fún $7.20?", options: ["16 oz, ní $0.20 fún ounce kan", "Wọ́n jẹ́ ọ̀kan náà", "40 oz, ní $0.18 fún ounce kan", "O kò lè mọ̀"], answer: 2, why: "$3.20 / 16 = $0.20, $7.20 / 40 = $0.18, nítorí náà ìgò 40 oz kéré ní owó fún ounce kan." }
        ]
      }
    },
    {
      name: "Orí 2: Ìṣirò fún iṣẹ́ àti owó",
      lessons: [
        {
          title: "Wíwọ̀n, yíyí ẹyọ ìwọ̀n padà àti kíka wákàtí iṣẹ́",
          objectives: ["O4"],
          minutes: 6,
          goal: "Yí ẹyọ ìwọ̀n padà, kí o sì ṣírò ààyè àti wákàtí iṣẹ́ fún iṣẹ́ kan.",
          text: [
            "Àwọn ẹyọ ìwọ̀n US tí a sábà ń lò: 12 inch = 1 foot, 3 feet = 1 yard, 16 ounce = 1 pound, 2 pint = 1 quart, 4 quart = 1 gallon. Àwọn iṣẹ́ kan ń lo metric: 1 inch = 2.54 centimeter, 1 kilogram sì jẹ́ nǹkan bí 2.2 pound. Láti yí ẹyọ ńlá padà sí ẹyọ kékeré, sọ ọ́ di púpọ̀; láti yí ẹyọ kékeré padà sí ẹyọ ńlá, pín in. 90 inch / 12 = 7.5 feet.",
            "Ààyè (area) ni ibi tí ojú pẹrẹsẹ kan bò: gígùn x fífẹ̀, ní ẹyọ onígun mẹ́rin (square). Yàrá 12 feet lọ́nà 10 feet jẹ́ 12 x 10 = 120 square feet. Tí páálí ohun ìtẹ́lẹ̀ kan bá bo 20 square feet, o nílò 120 / 20 = páálí 6. Àwọn òṣìṣẹ́ sábà máa ń fi nǹkan bí 10% kún un fún gígé àti àṣìṣe: 120 x 1.10 = 132, 132 / 20 = 6.6. O kò lè ra 0.6 páálí, nítorí náà gbé e SÓKÈ sí 7.",
            "Wákàtí iṣẹ́: ka láti ìbẹ̀rẹ̀ dé òpin, lẹ́yìn náà yọ àkókò ìsinmi tí a kò sanwó fún kúrò. Iṣẹ́ láti 7:30 am sí 4:00 pm jẹ́ wákàtí 8 1/2; yọ ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò sanwó fún kúrò, ó di wákàtí 8. Ọ̀pọ̀ káàdì àkókò ń lo wákàtí decimal: ìṣẹ́jú 15 = 0.25, ìṣẹ́jú 30 = 0.5, ìṣẹ́jú 45 = 0.75. Àwọn ibi iṣẹ́ kan ń lo aago wákàtí 24: 15:00 jẹ́ 3:00 pm."
          ],
          steps: ["Kọ ohun tí o ní àti ẹyọ ìwọ̀n tí o nílò sílẹ̀.", "Ẹyọ ńlá sí kékeré: sọ di púpọ̀. Kékeré sí ńlá: pín in.", "Ààyè: gígùn x fífẹ̀, ní ẹyọ onígun mẹ́rin.", "Tí o bá nílò odindi nǹkan (páálí, àpò): máa gbé e sókè nígbà gbogbo.", "Wákàtí: àkókò òpin yọ àkókò ìbẹ̀rẹ̀, yọ ìsinmi tí a kò sanwó fún; yí ìṣẹ́jú padà sí decimal nípa pípín sí 60."],
          words: [["Ẹyọ ìwọ̀n (unit)", "ohun tí o fi ń wọn, bí inch, feet, pound tàbí wákàtí."], ["Yíyí padà (convert)", "yíyí ìwọ̀n kan padà láti ẹyọ kan sí ẹyọ míì."], ["Ààyè (area)", "ibi tí ojú pẹrẹsẹ kan bò: gígùn lọ́nà fífẹ̀, ní ẹyọ onígun mẹ́rin."], ["Square feet (sq ft)", "ẹyọ ìwọ̀n ààyè nígbà tí o bá ń wọn ní feet."], ["Metric", "ètò ìwọ̀n tí a ń lò ní ọ̀pọ̀ jù lọ ayé: centimeter, meter, kilogram, liter."], ["Wákàtí decimal", "àkókò tí a kọ bí decimal, bí wákàtí 7.75 fún wákàtí 7 ìṣẹ́jú 45."]],
          slides: [
            { title: "Àwọn ẹyọ ìwọ̀n láti mọ̀", bullets: ["12 in = 1 ft; 3 ft = 1 yd", "16 oz = 1 lb; 4 qt = 1 gal", "1 in = 2.54 cm; 1 kg jẹ́ nǹkan bí 2.2 lb", "Ńlá sí kékeré: sọ di púpọ̀. Kékeré sí ńlá: pín in"] },
            { title: "Ààyè fún iṣẹ́ kan", bullets: ["Yàrá 12 ft x 10 ft = 120 sq ft", "Fi 10% kún un fún gígé: 132 sq ft", "20 sq ft fún páálí kan: 6.6, nítorí náà ra páálí 7"] },
            { title: "Kíka wákàtí", bullets: ["7:30 am sí 4:00 pm = wákàtí 8.5", "Yọ ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò sanwó fún = wákàtí 8", "15 min = 0.25, 30 min = 0.5, 45 min = 0.75"] }
          ],
          tryIt: "Ìdánrawò (ìdáhùn wà nísàlẹ̀): (1) Yí 5 feet padà sí inch. (2) Yí 48 ounce padà sí pound. (3) Yàrá ìkẹ́rùsí kan jẹ́ 9 feet lọ́nà 14 feet. Kí ni ààyè rẹ̀? (4) Kun ń bo nǹkan bí 350 square feet fún gallon kan (lórí agolo àṣeṣe yìí). O gbọ́dọ̀ bo 800 square feet. Gallon mélòó ni o máa rà? (5) O ṣiṣẹ́ láti 6:45 am sí 3:15 pm pẹ̀lú ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò sanwó fún. Wákàtí mélòó, bí decimal? Ìdáhùn: (1) 60 inch; (2) 3 pound; (3) 126 square feet; (4) 800 / 350 = 2.29, nítorí náà ra gallon 3; (5) wákàtí 8.5 yọ 0.5 = wákàtí 8.0.",
          youCanNow: "yí ẹyọ ìwọ̀n padà, wá ààyè, gbé e sókè fún odindi nǹkan, kí o sì ka wákàtí iṣẹ́ rẹ bí decimal.",
          quickCheck: [
            { objective: "O4", q: "O nílò àpò símẹ́ǹtì àdàpọ̀ 4.2. Àpò mélòó ni o máa rà?", options: ["4", "4.2", "42", "5"], answer: 3, why: "O kò lè ra apá kan àpò, nítorí náà gbé e sókè sí 5." },
            { objective: "O4", q: "Wákàtí 7 àti ìṣẹ́jú 45 jẹ́ wákàtí mélòó bí decimal?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, nítorí náà ó jẹ́ wákàtí 7.75." }
          ]
        },
        {
          title: "Ṣíṣàyẹ̀wò ìwé owó-iṣẹ́ rẹ",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò wákàtí, iye owó wákàtí, owó àfikún àkókò, àyọkúrò àti owó tí o ń mú lọ sílé lórí ìwé owó-iṣẹ́.",
          text: [
            "Ìwé owó-iṣẹ́ (paystub) ń fi bí a ṣe ṣírò owó-iṣẹ́ rẹ hàn. Owó-iṣẹ́ àpapọ̀ (gross pay) ni ohun tí o rí kí a tó yọ ohunkóhun kúrò. Àyọkúrò (deductions) ni owó tí a yọ kúrò, bí owó-orí. Owó tí o ń mú lọ sílé (net pay) ni ohun tí o rí gbà ní ti gidi: owó-iṣẹ́ àpapọ̀ yọ àyọkúrò. YTD túmọ̀ sí \"year to date\": àpapọ̀ títí di ìsinsìnyí ní ọdún yìí.",
            "Ìwé owó-iṣẹ́ ìdánrawò (àṣeṣe): wákàtí 45 ní $18.00 fún wákàtí kan. Lábẹ́ òfin ìjọba àpapọ̀ (federal), àwọn òṣìṣẹ́ onígbàwákàtí tí òfin bò máa ń gba owó àfikún àkókò fún wákàtí tó ju 40 lọ ní ọ̀sẹ̀ iṣẹ́ kan, ó kéré tán ìlọ́po kan àbọ̀. Nítorí náà: 40 x $18.00 = $720.00 owó-iṣẹ́ déédéé. Iye owó àfikún àkókò jẹ́ $18.00 x 1.5 = $27.00, 5 x $27.00 = $135.00. Owó-iṣẹ́ àpapọ̀ = $855.00. Àwọn ìpínlẹ̀ kan ní òfin àfikún àkókò míì; ṣàyẹ̀wò ọ́fíìsì iṣẹ́ ìpínlẹ̀ rẹ.",
            "Àyọkúrò lórí ìwé yìí: Social Security 6.2% ti $855.00 = $53.01. Medicare 1.45% = $12.40. Owó-orí owó-wọlé federal $60.00 àti owó-orí ìpínlẹ̀ $20.00 (wọ̀nyí dá lórí fọ́ọ̀mù W-4 rẹ àti ìpínlẹ̀ rẹ; àṣeṣe ni wọ́n níbí). Àpapọ̀ àyọkúrò = $145.41. Owó tí o ń mú lọ sílé = $855.00 - $145.41 = $709.59.",
            "Tí ìlà kan bá jẹ́ àṣìṣe, kọ ọjọ́ ìsanwó, ìlà náà àti ohun tí o retí sílẹ̀, lẹ́yìn náà kọ́kọ́ béèrè lọ́wọ́ ẹ̀ka ìsanwó (payroll) tàbí alábòójútó rẹ. Tí wọn kò bá ṣàtúnṣe rẹ̀, o lè kàn sí ọ́fíìsì iṣẹ́ ìpínlẹ̀ rẹ tàbí Wage and Hour Division ti U.S. Department of Labor. Pa àwọn ìwé owó-iṣẹ́ rẹ mọ́, kí o sì bo nọ́mbà Social Security rẹ kí o tó fi ọ̀kan han ẹnikẹ́ni."
          ],
          steps: ["Fi wákàtí wé àkọsílẹ̀ tìrẹ ti wákàtí tí o ṣiṣẹ́.", "Owó-iṣẹ́ déédéé: títí dé wákàtí 40 x iye owó wákàtí rẹ.", "Àfikún àkókò: wákàtí tó ju 40 lọ x (iye owó wákàtí x 1.5), tí òfin bá bò ọ́.", "Owó-iṣẹ́ àpapọ̀ = owó-iṣẹ́ déédéé + àfikún àkókò + owó míì.", "Ro gbogbo àyọkúrò pọ̀.", "Owó tí o ń mú lọ sílé = owó-iṣẹ́ àpapọ̀ - àpapọ̀ àyọkúrò. Ṣé ó bá ìwé náà mu?", "Tí kò bá bá a mu, kọ ọ́ sílẹ̀ kí o sì béèrè lọ́wọ́ payroll."],
          words: [["Ìwé owó-iṣẹ́ (paystub)", "ìwé tàbí àkọsílẹ̀ orí ayélujára tó ń fi bí a ṣe ṣírò owó-iṣẹ́ rẹ hàn."], ["Owó-iṣẹ́ àpapọ̀ (gross pay)", "ohun tí o rí kí a tó yọ ohunkóhun kúrò."], ["Owó tí o ń mú lọ sílé (net pay)", "ohun tí o ń mú lọ sílé lẹ́yìn àyọkúrò; a tún ń pè é ní take-home pay."], ["Àyọkúrò (deduction)", "owó tí a yọ kúrò nínú owó-iṣẹ́ rẹ, bí owó-orí tàbí owó ìbánigbófò."], ["Owó àfikún àkókò (overtime)", "owó àfikún, ó kéré tán ìlọ́po 1.5 iye owó wákàtí rẹ, fún wákàtí tó ju 40 lọ ní ọ̀sẹ̀ iṣẹ́ kan lábẹ́ òfin federal, fún àwọn tí òfin bò."], ["YTD (year to date)", "àpapọ̀ láti January 1 títí dé owó-iṣẹ́ yìí."], ["W-4", "fọ́ọ̀mù tí o fún agbanisíṣẹ́ rẹ tó ń pinnu iye owó-orí owó-wọlé federal tí a máa yọ."]],
          slides: [
            { title: "Àwọn ọ̀rọ̀ ìwé owó-iṣẹ́", bullets: ["Owó-iṣẹ́ àpapọ̀ (gross): ohun tí o rí kí a tó yọ nǹkan", "Àyọkúrò: owó-orí àti owó míì tí a yọ kúrò", "Owó tí o ń mú lọ sílé (net)", "YTD: àpapọ̀ títí di ìsinsìnyí ní ọdún yìí"] },
            { title: "Ìwé ìdánrawò: wákàtí 45 ní $18.00", bullets: ["Déédéé: 40 x $18.00 = $720.00", "Àfikún àkókò: 5 x $27.00 = $135.00", "Owó-iṣẹ́ àpapọ̀: $855.00"] },
            { title: "Àyọkúrò àti owó tí o ń mú lọ sílé", bullets: ["Social Security 6.2% = $53.01; Medicare 1.45% = $12.40", "Federal $60.00 + ìpínlẹ̀ $20.00 (àṣeṣe)", "Net: $855.00 - $145.41 = $709.59"] },
            { title: "Tí nǹkan kan kò bá tọ̀nà", bullets: ["Kọ ọjọ́, ìlà náà àti ohun tí o retí sílẹ̀", "Kọ́kọ́ béèrè lọ́wọ́ payroll tàbí alábòójútó rẹ", "Lẹ́yìn náà ọ́fíìsì iṣẹ́ ìpínlẹ̀ rẹ tàbí DOL Wage and Hour Division"] }
          ],
          tryIt: "Ìdánrawò (ìdáhùn wà nísàlẹ̀): O ṣiṣẹ́ wákàtí 42 ní $16.00 fún wákàtí kan. Àyọkúrò: Social Security 6.2%, Medicare 1.45%, owó-orí federal $45.00, owó-orí ìpínlẹ̀ $15.00 (àṣeṣe). Wá (1) owó-iṣẹ́ déédéé, (2) owó àfikún àkókò, (3) owó-iṣẹ́ àpapọ̀, (4) àpapọ̀ àyọkúrò, (5) owó tí o ń mú lọ sílé. Ìdáhùn: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Lẹ́yìn náà ṣàyẹ̀wò ìwé owó-iṣẹ́ gidi tìrẹ lọ́nà kan náà, pẹ̀lú àwọn nọ́mbà àdáni tí o ti bò.",
          youCanNow: "ṣàyẹ̀wò gbogbo ìlà ìwé owó-iṣẹ́, kí o sì mọ ohun tí o máa ṣe tí nǹkan kan kò bá bá ìṣirò mu.",
          quickCheck: [
            { objective: "O5", q: "Owó-iṣẹ́ àpapọ̀ jẹ́ $600.00, àpapọ̀ àyọkúrò sì jẹ́ $95.00. Kí ni owó tí o ń mú lọ sílé?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Owó tí o ń mú lọ sílé = owó-iṣẹ́ àpapọ̀ - àyọkúrò = 600 - 95 = $505.00." },
            { objective: "O5", q: "O ń gba $20.00 fún wákàtí kan, òfin àfikún àkókò federal sì bò ọ́. Kí ni iye owó àfikún àkókò rẹ?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Ìlọ́po kan àbọ̀: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Ṣíṣe ètò ìnáwó oṣooṣù láti inú owó-iṣẹ́ rẹ",
          objectives: ["O6"],
          minutes: 6,
          goal: "Ṣe ètò ìnáwó oṣooṣù tó ní ìfipamọ́, tí ìnáwó kò sì ju owó tó ń wọlé lọ.",
          text: [
            "Ètò ìnáwó (budget) jẹ́ ètò fún owó rẹ. Bẹ̀rẹ̀ pẹ̀lú owó tí o ń mú lọ sílé (net) lóṣooṣù. Oṣù gùn díẹ̀ ju ọ̀sẹ̀ 4 lọ, nítorí náà má kàn sọ owó ọ̀sẹ̀ di púpọ̀ pẹ̀lú 4. Tí wọ́n bá ń sanwó lọ́sọ̀ọ̀sẹ̀: net ọ̀sẹ̀ x 52 / 12. Tí wọ́n bá ń sanwó lọ́sẹ̀ méjì-méjì: net x 26 / 12. Àpẹẹrẹ: $700 lọ́sẹ̀ x 52 = $36,400 lọ́dún, / 12 = $3,033.33 lóṣù.",
            "Kọ ìnáwó rẹ sílẹ̀: àwọn ohun tí o nílò kọ́kọ́ (owó ilé, iná àti omi, oúnjẹ, ìrìnnà, fóònù, ìtọ́jú ọmọ, ìsanwó gbèsè tó kéré jù), lẹ́yìn náà ìfipamọ́, lẹ́yìn náà àwọn ohun tí o fẹ́. Àpẹẹrẹ: owó ilé $1,200, iná àti omi $150, fóònù $50, oúnjẹ $400, ìrìnnà $200, gbèsè $150, ìfipamọ́ $150. Àpapọ̀ rẹ̀ jẹ́ $2,300, èyí tó ṣẹ́ $733.33 kù fún àwọn ohun míì tí o nílò àti tí o fẹ́.",
            "Òfin náà: àpapọ̀ ìnáwó (pẹ̀lú ìfipamọ́) gbọ́dọ̀ dọ́gba tàbí kéré ju owó tó ń wọlé lọ. Tí ó bá pọ̀ jù, yọ ohun tí o fẹ́ kan kúrò, dín ìwé owó kan kù, tàbí wá owó míì tó máa wọlé. Ṣàyẹ̀wò àpapọ̀ nípa ríròpọ̀ wọn lẹ́ẹ̀kejì, tàbí pẹ̀lú ẹ̀rọ ìṣirò.",
            "Tọpinpin rẹ̀ fún oṣù kan. Kọ ohun tí o ná ní ti gidi sílẹ̀, lẹ́yìn náà fi wé ètò rẹ kí o sì ṣàtúnṣe. Àwọn ohun èlò ọ̀fẹ́ \"Your Money, Your Goals\" ti Consumer Financial Protection Bureau (CFPB, ilé-iṣẹ́ ìjọba US tó ń dáàbò bo àwọn oníbàárà nínú ọ̀ràn owó) ní àwọn ìwé iṣẹ́ tí o lè tẹ̀ jáde."
          ],
          steps: ["Wá owó tí o ń mú lọ sílé lóṣooṣù (ọ̀sẹ̀ x 52 / 12, tàbí ọ̀sẹ̀ méjì-méjì x 26 / 12).", "Kọ àwọn ohun tí o nílò: owó ilé, iná àti omi, oúnjẹ, ìrìnnà, fóònù, ìtọ́jú ọmọ, gbèsè tó kéré jù.", "Fi ìlà ìfipamọ́ kún un, kódà tí ó bá kéré.", "Fi àwọn ohun tí o fẹ́ kún un ní ìkẹyìn.", "Àpapọ̀ ìnáwó gbọ́dọ̀ dọ́gba tàbí kéré ju owó tó ń wọlé lọ.", "Tọpinpin rẹ̀ fún oṣù kan kí o sì ṣàtúnṣe."],
          words: [["Ètò ìnáwó (budget)", "ètò bí o ṣe máa lo owó rẹ lóṣooṣù."], ["Owó tó ń wọlé (income)", "owó tó ń wọlé sọ́dọ̀ rẹ, bí owó tí o ń mú lọ sílé."], ["Ìnáwó (expense)", "owó tó ń jáde, bí owó ilé tàbí oúnjẹ."], ["Ìnáwó tí kì í yí padà (fixed expense)", "ìnáwó tó jẹ́ ọ̀kan náà lóṣooṣù, bí owó ilé."], ["Ìnáwó tó ń yí padà (variable expense)", "ìnáwó tó ń yí padà lóṣooṣù, bí oúnjẹ tàbí epo."]],
          slides: [
            { title: "Owó tó ń wọlé lóṣooṣù", bullets: ["Owó ọ̀sẹ̀ x 52 / 12", "Ọ̀sẹ̀ méjì-méjì: x 26 / 12", "$700 lọ́sẹ̀ = $3,033.33 lóṣù"] },
            { title: "Ètò ìnáwó ní ìtẹ̀léra", bullets: ["Àwọn ohun tí o nílò kọ́kọ́: owó ilé, iná àti omi, oúnjẹ, ìrìnnà", "Lẹ́yìn náà ìfipamọ́, kódà iye kékeré", "Lẹ́yìn náà àwọn ohun tí o fẹ́"] },
            { title: "Òfin náà", bullets: ["Ìnáwó + ìfipamọ́ dọ́gba tàbí kéré ju owó tó ń wọlé lọ", "Tí ó bá pọ̀ jù: yọ ohun tí o fẹ́ kan, dín ìwé owó kan kù, tàbí wá owó sí i", "Ro àpapọ̀ pọ̀ lẹ́ẹ̀mejì láti ṣàyẹ̀wò"] },
            { title: "Tọpinpin kí o sì ṣàtúnṣe", bullets: ["Kọ ìnáwó gidi sílẹ̀ fún oṣù kan", "Fi wé ètò rẹ", "Ìwé iṣẹ́ CFPB ọ̀fẹ́: Your Money, Your Goals"] }
          ],
          tryIt: "Parí iṣẹ́ ìkẹyìn rẹ. Lo owó tí o ń mú lọ sílé láti ìwé owó-iṣẹ́ Ẹ̀kọ́ 5 (tàbí tìrẹ) kí o sì yí i padà sí owó oṣooṣù. Kọ ètò ìnáwó pẹ̀lú àwọn ohun tí o nílò, ìlà ìfipamọ́ àti àwọn ohun tí o fẹ́. Ro ó pọ̀ lẹ́ẹ̀mejì. Tí ìnáwó bá ju owó tó ń wọlé lọ, yí i padà títí yóò fi bá a mu. Fi àyẹ̀wò ìwé owó-iṣẹ́ rẹ, ètò ìnáwó àti ìfiwéra iye owó ẹyọ kan 3 sí ojú ìwé kan: \"Ìwé Ìṣirò Iṣẹ́ àti Owó\" rẹ.",
          youCanNow: "yí owó-iṣẹ́ padà sí owó oṣooṣù, kí o sì ṣe ètò ìnáwó tó dọ́gba tó sì ní ìfipamọ́.",
          quickCheck: [
            { objective: "O6", q: "O ń mú $500 lọ sílé lọ́sẹ̀. Kí ni owó tó ń wọlé fún ọ lóṣù?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; sísọ di púpọ̀ pẹ̀lú 4 fi àwọn ọjọ́ àfikún sílẹ̀." },
            { objective: "O6", q: "Ìnáwó tí o ṣètò fi $50 ju owó tó ń wọlé lọ. Kí ni o máa ṣe?", options: ["Fi ètò náà sílẹ̀ bí ó ti wà kí o sì retí", "Yọ ìlà ìfipamọ́ kúrò kí o sì gbàgbé rẹ̀", "Gba payday loan (awin kíákíá tó ga ní èlé) lóṣooṣù", "Yọ tàbí dín àwọn ìnáwó kan kù títí ìnáwó yóò fi bá a mu"], answer: 3, why: "Ètò ìnáwó ń ṣiṣẹ́ nìkan nígbà tí ìnáwó bá dọ́gba tàbí kéré ju owó tó ń wọlé lọ." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìṣirò fún iṣẹ́ àti owó",
        questions: [
          { objective: "O4", q: "Yàrá kan jẹ́ 15 feet lọ́nà 11 feet. Kí ni ààyè rẹ̀?", options: ["26 square feet", "165 square feet", "52 square feet", "1,511 square feet"], answer: 1, why: "Ààyè = gígùn x fífẹ̀ = 15 x 11 = 165 square feet." },
          { objective: "O4", q: "Feet mélòó ni 60 inch?", options: ["5 feet", "720 feet", "6 feet", "48 feet"], answer: 0, why: "Ẹyọ kékeré sí ńlá: pín in. 60 / 12 = 5 feet." },
          { objective: "O5", q: "Lórí ìwé owó-iṣẹ́, kí ni owó-iṣẹ́ àpapọ̀ (gross pay)?", options: ["Ohun tí o ń mú lọ sílé", "Owó-orí nìkan", "Owó fún wákàtí kan", "Ohun tí o rí kí a tó yọ àyọkúrò"], answer: 3, why: "Owó-iṣẹ́ àpapọ̀ ni àpapọ̀ ohun tí o rí kí a tó yọ ohunkóhun kúrò." },
          { objective: "O5", q: "Ìwé owó-iṣẹ́ rẹ fi wákàtí 38 hàn, ṣùgbọ́n àkọsílẹ̀ tìrẹ sọ 41. Kí ni o kọ́kọ́ máa ṣe?", options: ["Má sọ nǹkan kan", "Fi iṣẹ́ náà sílẹ̀", "Kọ àwọn ọjọ́ àti wákàtí sílẹ̀ kí o sì béèrè lọ́wọ́ payroll", "Ṣàtúnṣe ìwé owó-iṣẹ́ náà fúnra rẹ"], answer: 2, why: "Bẹ̀rẹ̀ pẹ̀lú payroll tàbí alábòójútó rẹ, pẹ̀lú àkọsílẹ̀ tìrẹ lọ́wọ́." },
          { objective: "O6", q: "Èwo ló wà nínú apá àwọn ohun tí o nílò nínú ètò ìnáwó?", options: ["Owó ilé", "Eré fídíò tuntun", "Tíkẹ́ẹ̀tì eré orin", "Oúnjẹ tí a rà ní òde lálẹ́ọ̀ọ̀lẹ́"], answer: 0, why: "Owó ilé jẹ́ ohun tí o nílò; àwọn yòókù jẹ́ ohun tí o fẹ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣirò Ojoojúmọ́ fún Iṣẹ́ àti Ìgbésí Ayé",
    questions: [
      { objective: "O1", q: "Èwo ló jẹ́ ọ̀kan náà pẹ̀lú 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% túmọ̀ sí 50 nínú 100, èyí tó jẹ́ 1/2 tàbí 0.5." },
      { objective: "O1", q: "Kí ni 0.4 bí ìdá-ọgọ́rùn-ún?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Gbé pọ́ìntì sí ọ̀tún ní ààyè méjì: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, èyí tó jẹ́ 3/4"], answer: 3, why: "Nọ́mbà ìsàlẹ̀ kan náà: ro àwọn òkè pọ̀. 6/8 di 3/4 nígbà tí a bá mú un rọrùn." },
      { objective: "O2", q: "Kí ni 10% ti $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Gbé pọ́ìntì sí òsì ní ààyè kan: $7.30." },
      { objective: "O2", q: "Ẹ̀rọ ìlu ihò (drill) $120 ní ẹ̀dínwó 30%. Kí ni iye owó títà rẹ̀?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% ti 120 jẹ́ 36, 120 - 36 = $84." },
      { objective: "O2", q: "\"20% off\" (ẹ̀dínwó 20%) túmọ̀ sí pé o máa san ìdá-ọgọ́rùn-ún mélòó nínú iye owó?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% iye owó." },
      { objective: "O2", q: "Ìdá owó-orí ọjà:", options: ["Jẹ́ ọ̀kan náà níbi gbogbo ní US", "Máa ń jẹ́ 10% nígbà gbogbo", "Ilé ìtajà ló ń pinnu rẹ̀", "Yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀ àti ìlú sí ìlú, nítorí náà ṣàyẹ̀wò ilé-iṣẹ́ owó-orí ìpínlẹ̀ rẹ tàbí rìsíìtì"], answer: 3, why: "Àwọn ìpínlẹ̀ àti ọ̀pọ̀ ìlú ń pinnu ìdá owó-orí ọjà tiwọn." },
      { objective: "O3", q: "Báwo ni o ṣe ń wá iye owó ẹyọ kan?", options: ["Iye owó x ìwọ̀n", "Iye owó / ìwọ̀n", "Ìwọ̀n / 100", "Iye owó - ìwọ̀n"], answer: 1, why: "Fi iye ẹyọ pín iye owó." },
      { objective: "O3", q: "Ọṣẹ ìfọṣọ: 50 oz fún $6.00 tàbí 100 oz fún $13.00. Èwo ló dára jù láti rà?", options: ["100 oz, nítorí ó tóbi jù", "Wọ́n jẹ́ ọ̀kan náà", "50 oz, ní $0.12 fún ounce kan sí $0.13", "O kò lè mọ̀"], answer: 2, why: "$6.00 / 50 = $0.12, $13.00 / 100 = $0.13, nítorí náà ìgò kékeré kéré ní owó fún ounce kan." },
      { objective: "O3", q: "Kí o tó ra ìwọ̀n ńlá, o tún gbọ́dọ̀ béèrè pé:", options: ["Ṣé màá lò ó kí ó tó bàjẹ́, ṣé mo sì lè rà á báyìí?", "Ṣé àwọ̀ páálí náà rẹwà?", "Ṣé ó wà lórí ṣẹ́ẹ̀fù òkè?", "Ṣé ilé ìtajà náà ní ibi ìgbọ́kọ̀sí?"], answer: 0, why: "Iye owó ẹyọ kan tó kéré ń fi owó pamọ́ nìkan tí o bá lò ó, tí o sì lè sanwó rẹ̀." },
      { objective: "O4", q: "Quart mélòó ló wà nínú gallon 3?", options: ["7", "3", "16", "12"], answer: 3, why: "4 quart = 1 gallon, nítorí náà 3 x 4 = 12 quart." },
      { objective: "O4", q: "Páálí táílì ń bo 15 square feet. O nílò 100 square feet. Páálí mélòó?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, o sì gbé e sókè sí odindi páálí 7." },
      { objective: "O4", q: "O ṣiṣẹ́ láti 8:00 am sí 4:30 pm pẹ̀lú ìsinmi oúnjẹ ọ̀sán ìṣẹ́jú 30 tí a kò sanwó fún. Wákàtí mélòó?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "8:00 sí 4:30 jẹ́ wákàtí 8.5, yọ wákàtí 0.5 = wákàtí 8.0." },
      { objective: "O5", q: "Owó tí o ń mú lọ sílé (net pay) ni:", options: ["Owó-iṣẹ́ àpapọ̀ yọ àyọkúrò", "Owó-iṣẹ́ àpapọ̀ pẹ̀lú àyọkúrò", "Owó àfikún àkókò rẹ nìkan", "Iye owó wákàtí rẹ"], answer: 0, why: "Owó tí o ń mú lọ sílé ni ohun tó ṣẹ́ kù lẹ́yìn tí a yọ àyọkúrò." },
      { objective: "O5", q: "Lábẹ́ òfin federal, àwọn òṣìṣẹ́ onígbàwákàtí tí òfin bò máa ń gba owó àfikún àkókò fún wákàtí tó ju:", options: ["35 lọ ní ọ̀sẹ̀ iṣẹ́ kan", "8 lọ ní oṣù kan", "50 lọ ní ọ̀sẹ̀ iṣẹ́ kan", "40 lọ ní ọ̀sẹ̀ iṣẹ́ kan"], answer: 3, why: "Òfin federal ni ìlọ́po kan àbọ̀ fún wákàtí tó ju 40 lọ ní ọ̀sẹ̀ iṣẹ́ kan." },
      { objective: "O5", q: "O ṣiṣẹ́ wákàtí 44 ní $15.00 fún wákàtí kan pẹ̀lú owó àfikún àkókò. Kí ni owó-iṣẹ́ àpapọ̀?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, pẹ̀lú 4 x $22.50 = $90, nítorí náà $690.00." },
      { objective: "O5", q: "Kí o tó fi ìwé owó-iṣẹ́ han ẹni tó ń ràn ọ́ lọ́wọ́, o gbọ́dọ̀:", options: ["Fi í sórí ayélujára", "Kọ ọ̀rọ̀ aṣínà rẹ sí i", "Bo nọ́mbà Social Security rẹ", "Jù ú nù"], answer: 2, why: "Nọ́mbà Social Security rẹ jẹ́ àṣírí, a sì lè lò ó láti jí ìdánimọ̀ rẹ." },
      { objective: "O6", q: "Wọ́n ń sanwó fún ọ lọ́sẹ̀ méjì-méjì, o sì ń mú $1,200 lọ sílé. Kí ni owó tó ń wọlé fún ọ lóṣù?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "Nínú ètò ìnáwó tó dọ́gba, àpapọ̀ ìnáwó pẹ̀lú ìfipamọ́:", options: ["Ju owó tó ń wọlé lọ", "Dọ́gba tàbí kéré ju owó tó ń wọlé lọ", "Máa ń jẹ́ $0 gẹ́lẹ́ nígbà gbogbo", "A kò kọ ọ́ sílẹ̀"], answer: 1, why: "Ìnáwó tó dọ́gba tàbí kéré ju owó tó ń wọlé lọ ń pa ọ́ mọ́ kúrò nínú gbèsè tuntun." },
      { objective: "O6", q: "Èwo ni ìnáwó tó ń yí padà?", options: ["Owó ilé tí kì í yí padà", "Ìsanwó ọkọ̀ tí kì í yí padà", "Ètò fóònù tí kì í yí padà", "Oúnjẹ, tó ń yí padà lóṣooṣù"], answer: 3, why: "Ìnáwó tó ń yí padà máa ń yàtọ̀ láti oṣù dé oṣù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe pẹ̀lú àwọn ìgbésẹ̀ ẹ̀kọ́ náà kí o sì tún un ṣàyẹ̀wò.",
    criteria: [
      { name: "Ìwé owó-iṣẹ́ tí a ṣàyẹ̀wò", objective: "O5", notYet: "A kò ṣàyẹ̀wò àwọn ìlà kan, tàbí àṣìṣe ìṣirò wà nínú owó-iṣẹ́ àpapọ̀ tàbí owó tí a ń mú lọ sílé.", meets: "A ṣàyẹ̀wò wákàtí, iye owó wákàtí, àfikún àkókò, àyọkúrò àti owó tí a ń mú lọ sílé; gbogbo ìlà bá a mu dé kọ́bọ̀ tàbí a kọ àṣìṣe sílẹ̀.", exceeds: "Ó tún kọ ohun tí yóò sọ fún payroll nípa àṣìṣe kankan àti ibi tí yóò lọ lẹ́yìn náà." },
      { name: "Owó tó ń wọlé lóṣooṣù", objective: "O6", notYet: "Ó sọ owó ọ̀sẹ̀ di púpọ̀ pẹ̀lú 4, tàbí ó lo owó-iṣẹ́ àpapọ̀ dípò net.", meets: "Ó wá owó tí a ń mú lọ sílé lóṣooṣù pẹ̀lú x 52 / 12 tàbí x 26 / 12.", exceeds: "Ó fi ìṣirò náà hàn, ó sì ṣàyẹ̀wò rẹ̀ lọ́nà kejì." },
      { name: "Ètò ìnáwó tó dọ́gba", objective: "O6", notYet: "Ìnáwó ju owó tó ń wọlé lọ, tàbí kò sí ìlà ìfipamọ́.", meets: "Ó kọ àwọn ohun tí a nílò, ìfipamọ́ àti àwọn ohun tí a fẹ́; ìnáwó dọ́gba tàbí kéré ju owó tó ń wọlé lọ; a ti ṣàyẹ̀wò àpapọ̀.", exceeds: "Ó ní ètò láti tọpinpin ìnáwó gidi àti ọjọ́ láti ṣàyẹ̀wò rẹ̀." },
      { name: "Iye owó ẹyọ kan", objective: "O3", notYet: "Ìfiwéra tí kò tó 3, tàbí ẹyọ ìwọ̀n kò bá ara wọn mu.", meets: "Ìfiwéra 3 pẹ̀lú iye owó ẹyọ kan tó tọ̀nà, a sì sàmì sí èyí tó dára jù láti rà.", exceeds: "Ó kọ ìgbà tí ìwọ̀n ńlá kì í ṣe yíyàn tó dára jù àti ìdí rẹ̀." },
      { name: "Ìdá-ọgọ́rùn-ún", objective: "O2", notYet: "Ìdáhùn ìdánrawò fún ẹ̀dínwó, owó-orí, owó ìmoore tàbí àfikún owó-iṣẹ́ sábà máa ń jẹ́ àṣìṣe.", meets: "Ó kéré tán 4 nínú ìbéèrè ìdánrawò ìdá-ọgọ́rùn-ún 5 tọ̀nà, dé kọ́bọ̀.", exceeds: "Ó lè ṣàlàyé ọ̀nà kúkúrú (10%, lẹ́yìn náà kọ́ ọ sókè) fún ẹlòmíì." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì parí Ìwé Ìṣirò Iṣẹ́ àti Owó gẹ́gẹ́ bí rubric",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé wọ́n rí àṣìṣe lórí ìwé owó-iṣẹ́ tàbí fi owó pamọ́ pẹ̀lú iye owó ẹyọ kan láàárín ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ń kọ ètò ìnáwó sílẹ̀ fún ó kéré tán oṣù 2",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n tẹ̀síwájú sí \"GED Test Preparation: Math\" tàbí yege ìdánwò ìṣirò iṣẹ́ kan láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé, pẹ́ńsù àti ẹ̀rọ ìṣirò lásán (ẹ̀rọ ìṣirò fóònù dára)",
      "Téèpù ìwọ̀n tàbí rúlà tó ní àmì 1/8 inch",
      "Ìwé owó-iṣẹ́ ìdánrawò àṣeṣe nínú Ẹ̀kọ́ 5, tàbí ti akẹ́kọ̀ọ́ fúnra rẹ̀ pẹ̀lú àwọn nọ́mbà àdáni tí a ti bò",
      "Rìsíìtì ilé ìtajà tàbí àmì ṣẹ́ẹ̀fù fún iye owó ẹyọ kan",
      "Nǹkan bí wákàtí 2 lápapọ̀: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ọ̀pọ̀ àgbàlagbà máa ń bẹ̀rù ìṣirò. Bẹ̀rẹ̀ pẹ̀lú ìdánwò ṣáájú bí ìgbaradì \"láìsí máàkì\", kí o sì ṣe àjọyọ̀ ìtẹ̀síwájú wọn nínú ìdánwò ìkẹyìn.",
      "Kọ́kọ́ ṣírò àpẹẹrẹ kọ̀ọ̀kan lórí pátákó, lẹ́yìn náà jẹ́ kí àwọn akẹ́kọ̀ọ́ gbìyànjú èyí tó tẹ̀lé ní méjì-méjì.",
      "Kọ́ wọn láti ṣàyẹ̀wò ìdáhùn lọ́nà méjì (fojú díwọ̀n, lẹ́yìn náà ṣírò) kí wọ́n lè gbẹ́kẹ̀ lé iṣẹ́ ara wọn.",
      "Nígbà tí àwọn akẹ́kọ̀ọ́ bá mú ìwé owó-iṣẹ́ gidi wá, jẹ́ kí wọ́n kọ́kọ́ bo nọ́mbà Social Security àti nọ́mbà báńkì. Ìbéèrè nípa owó-orí àti àfikún àkókò tó kọjá ìpìlẹ̀ lọ sọ́dọ̀ payroll, ọ́fíìsì iṣẹ́ ìpínlẹ̀ tàbí DOL Wage and Hour Division.",
      "Má ṣe dá ètò ìnáwó ẹnikẹ́ni lẹ́jọ́; èrò náà ni ètò tó dọ́gba, kì í ṣe èyí tí kò ní àbùkù.",
      "Tọ́ àwọn akẹ́kọ̀ọ́ tó fẹ́ ìwé-ẹ̀rí sọ́nà sí \"GED Test Preparation: Math\"."
    ]
  }
};

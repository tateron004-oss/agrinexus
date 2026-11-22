"use strict";

// Koach Learn course (Yoruba translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: US names (NHA, AAPC, AHIMA, CMS, CDC, HIPAA, NUCC) stay as written. Codes are practice examples only.

module.exports = {
  id: "medical-billing-coding-yo",
  lang: "yo",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Ìpìlẹ̀ Medical Billing àti Coding (Ìwé-owó àti Kóòdù Ìtọ́jú)",
  skills: "Yíyan ìwé-ẹ̀rí billing àti coding, Títẹ̀lé ìyípo ìwé-owó, Yíyan ẹ̀ka kóòdù tó tọ́, Wíwá kóòdù lọ́nà tó tọ́, Kíkún claim àṣeṣe, Dídáàbò bo àṣírí aláìsàn (HIPAA)",
  outcome: "sọ ìbẹ̀wò dókítà àròsọ kan di claim àṣeṣe tó péye: yan kóòdù àìsàn àti kóòdù iṣẹ́ tó tọ́, kún àwọn àpótí pàtàkì inú fọ́ọ̀mù claim, ṣàyẹ̀wò rẹ̀ kí ó tó lọ, kí o sì pa ìsọfúnni aláìsàn mọ́ ní àṣírí.",
  about: [
    "Àwọn medical biller àti coder ń sọ ìbẹ̀wò dókítà di kóòdù àti claim (ìbéèrè owó), kí ilé-iṣẹ́ ìbánigbófò (insurance) lè san owó fún ọ́fíìsì dókítà. Ọ̀pọ̀ iṣẹ́ yìí wà nínú ọ́fíìsì, àwọn kan sì ṣeé ṣe láti ilé. Ẹ̀kọ́ yìí jẹ́ ìgbésẹ̀ àkọ́kọ́ fún àwọn tí ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀ (veterans), àwọn tí ń padà sílé láti ẹ̀wọ̀n àti àwọn àgbàlagbà tí ń yí iṣẹ́ padà.",
    "O máa kọ́ ohun tí iṣẹ́ náà jẹ́, àwọn ìwé-ẹ̀rí tí àwọn agbanisíṣẹ́ ń béèrè (bí CBCS láti NHA, CPC láti AAPC àti CCA láti AHIMA), bí ìwé-owó ṣe ń rìn láti ìforúkọsílẹ̀ dé ìsanwó, àwọn ẹ̀ka kóòdù pàtàkì mẹ́ta, bí a ṣe ń wá kóòdù lọ́nà tó tọ́, bí a ṣe ń kún claim àṣeṣe, àti bí a ṣe ń dáàbò bo àṣírí aláìsàn lábẹ́ òfin HIPAA.",
    "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀. Kò fún ọ ní ìwé-ẹ̀rí. Ìwé-ẹ̀rí kọ̀ọ̀kan ní òfin, ìdálẹ́kọ̀ọ́, owó àti ìdánwò tirẹ̀, nítorí náà o máa ṣàyẹ̀wò wọn lórí ojú-ìwé ìjọba tàbí ti àjọ náà fúnra rẹ̀. Gbogbo aláìsàn àti ìbẹ̀wò inú ẹ̀kọ́ yìí jẹ́ àròsọ, àwọn kóòdù sì wà fún àṣeṣe nìkan: kóòdù ń yí padà lọ́dọọdún, nítorí náà coder gidi máa ń lo ìwé kóòdù ti ọdún yìí nígbà gbogbo.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" lórí ìwé tàbí nínú spreadsheet ọ̀fẹ́. Ìbéèrè kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Sọ ìbẹ̀wò àròsọ inú Ẹ̀kọ́ 6 di claim àṣeṣe tó péye: kọ kóòdù àìsàn àti àwọn kóòdù iṣẹ́, kún àwọn àpótí pàtàkì inú fọ́ọ̀mù claim 1500 àṣeṣe (lórí ìwé tàbí nínú spreadsheet), ṣàyẹ̀wò rẹ̀ pẹ̀lú àkọsílẹ̀ àyẹ̀wò-ṣáájú-fífiránṣẹ́ rẹ, kí o sì kọ ètò ojú-ìwé kan tí ó dárúkọ ìwé-ẹ̀rí tí o fẹ́ gbà, ibi tí o ti máa kẹ́kọ̀ọ́, àti ọjọ́ ìdánwò tí o fojú sí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí ń wá iṣẹ́ ọ́fíìsì tó dúró sán-ún nínú ètò ìlera: àwọn tí ń wá iṣẹ́, àwọn ológun tẹ́lẹ̀, àwọn tí ń padà sílé láti ẹ̀wọ̀n, ọ̀dọ́, àwọn aṣíkiri àti àwọn àgbàlagbà tí ń padà sí ẹ̀kọ́. Ọ̀pọ̀ kò tíì ṣiṣẹ́ nínú ọ́fíìsì ìtọ́jú rí. Àwọn kan fẹ́ iṣẹ́ láti ilé.",
    startingPoint: "Wọ́n lè ka àti kọ Gẹ̀ẹ́sì ojoojúmọ́, wọ́n sì lè lo fóònù tàbí kọ̀mpútà ilé-ìkàwé. Ọ̀pọ̀ kò mọ ọ̀rọ̀ ìtọ́jú, ẹ̀ka kóòdù, ọ̀rọ̀ ìbánigbófò tàbí bí a ṣe ń san claim.",
    gap: "Iṣẹ́ billing àti coding ń béèrè ìwé-ẹ̀rí àti ọgbọ́n ìpìlẹ̀ láti ọjọ́ àkọ́kọ́: mímọ ìyípo ìwé-owó, yíyan ẹ̀ka kóòdù tó tọ́, wíwá kóòdù pẹ̀lú ìṣọ́ra, kíkún claim àti pípa ìsọfúnni ìlera mọ́ ní àṣírí. Àwọn akẹ́kọ̀ọ́ nílò àwòrán tó ṣe kedere ti iṣẹ́ náà àti àwọn ìwé-ẹ̀rí, àti àṣeṣe fún ìgbésẹ̀ kọ̀ọ̀kan, kí wọ́n tó sanwó fún ètò ìdálẹ́kọ̀ọ́ tàbí ìdánwò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ ìtọ́jú àti ti ìbánigbófò",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé; ìwé lásán tó fún gbogbo iṣẹ́",
      "Ìwé kóòdù àti àwọn irinṣẹ́ coding kan ń náni lówó; ẹ̀kọ́ yìí ń lo irinṣẹ́ ọ̀fẹ́ ti ìjọba àti àpẹẹrẹ àròsọ",
      "Kóòdù ń yí padà lọ́dọọdún: gbogbo kóòdù tí a fi hàn wà fún àṣeṣe nìkan",
      "Àṣírí: a kò lo ìsọfúnni aláìsàn gidi níbìkan nínú ẹ̀kọ́ yìí",
      "Àwọn ìwé-ẹ̀rí kan ń béèrè nípa ìtàn ẹni (background); akẹ́kọ̀ọ́ ń ṣàyẹ̀wò òfin ètò kọ̀ọ̀kan fúnra rẹ̀"
    ],
    prerequisites: "Kò sí. \"Excel àti Spreadsheet\" àti \"Ìmọ̀ Ìlera\" máa ràn ọ́ lọ́wọ́, ṣùgbọ́n wọn kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Ní lílo ojú-ìwé ìjọba ti NHA, AAPC àti AHIMA", action: "fi ìwé-ẹ̀rí billing àti coding mẹ́ta wéra, kí o sì kọ ètò ẹ̀kọ́ àti ìdánwò pẹ̀lú ọjọ́", standard: "pẹ̀lú àwọn ohun tí wọ́n béèrè tí o ṣàyẹ̀wò lórí ojú-ìwé ìjọba, kì í ṣe ìfojúsùn" },
    { id: "O2", condition: "Tí a bá fún ọ ní àwọn ìgbésẹ̀ ìbẹ̀wò dókítà tí kò wà létòlétò", action: "to àwọn ìgbésẹ̀ ìyípo ìwé-owó létòlétò, láti ṣíṣètò ìbẹ̀wò dé ìsanwó", standard: "láìsí ìgbésẹ̀ kankan tó sọnù" },
    { id: "O3", condition: "Tí a bá fún ọ ní apá márùn-ún ti ìbẹ̀wò àròsọ kan", action: "so apá kọ̀ọ̀kan mọ́ ẹ̀ka kóòdù tó tọ́: ICD-10-CM fún àìsàn, CPT fún iṣẹ́ dókítà, HCPCS Level II fún àwọn ohun èlò", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà" },
    { id: "O4", condition: "Tí a bá fún ọ ní àìsàn kan láti inú àkọsílẹ̀ ìbẹ̀wò àròsọ", action: "wá kóòdù àìsàn nípa rírí ọ̀rọ̀ náà nínú index, lẹ́yìn náà kí o fìdí rẹ̀ múlẹ̀ nínú àkọsílẹ̀ kóòdù", standard: "nígbà gbogbo, láìfi index nìkan ṣe kóòdù láéláé" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìbẹ̀wò àròsọ kan àti fọ́ọ̀mù claim àṣeṣe òfìfo", action: "kún àwọn àpótí pàtàkì inú claim, kí o sì rí ìdí tí wọ́n fi kọ claim àṣeṣe kan", standard: "pẹ̀lú aláìsàn, ìbánigbófò, kóòdù àti owó tí ó bá ìbẹ̀wò náà mu" },
    { id: "O6", condition: "Nínú àwọn ipò àṣeṣe níbi iṣẹ́", action: "pín ìsọfúnni aláìsàn fún àwọn tí ó nílò rẹ̀ nìkan, àti èyí tí ó kéré jù tí wọ́n nílò nìkan", standard: "ní gbogbo ipò, ní títẹ̀lé HIPAA" }
  ],
  chapters: [
    {
      name: "Orí 1: Iṣẹ́ náà, àwọn ìwé-ẹ̀rí àti àwọn kóòdù",
      lessons: [
        {
          title: "Iṣẹ́ náà àti àwọn ìwé-ẹ̀rí tí agbanisíṣẹ́ ń béèrè",
          objectives: ["O1"],
          minutes: 5,
          goal: "Fi ìwé-ẹ̀rí billing àti coding mẹ́ta wéra, kí o sì yan ọ̀kan tí o máa lépa.",
          text: [
            "Medical coder máa ń ka àkọsílẹ̀ dókítà, ó sì ń sọ àìsàn àti àwọn iṣẹ́ tí wọ́n ṣe di kóòdù. Medical biller máa ń lo àwọn kóòdù yẹn láti fi claim ránṣẹ́ sí ilé-iṣẹ́ ìbánigbófò, ó sì ń tẹ̀lé e títí wọ́n fi sanwó. Nínú ọ́fíìsì kékeré, ẹnìkan ṣoṣo sábà máa ń ṣe méjèèjì.",
            "Àwọn agbanisíṣẹ́ sábà máa ń béèrè ìwé-ẹ̀rí. Mẹ́ta tí ó wọ́pọ̀: Certified Billing and Coding Specialist (CBCS) láti NHA, ìyẹn National Healthcareer Association; Certified Professional Coder (CPC) láti AAPC; àti Certified Coding Associate (CCA) láti AHIMA, ìyẹn American Health Information Management Association.",
            "Ọ̀kọ̀ọ̀kan ní òfin tirẹ̀. Fún àpẹẹrẹ, CBCS ti NHA ń béèrè ìwé-ẹ̀rí ilé-ìwé gíga (high school diploma) tàbí GED, pẹ̀lú ètò ìdálẹ́kọ̀ọ́ tàbí ìrírí iṣẹ́ lábẹ́ àbójútó. Owó, òfin ìdánwò àti àwọn ohun tí wọ́n béèrè ń yí padà, nítorí náà ka ojú-ìwé ìjọba ti ọ̀kọ̀ọ̀kan kí o tó san owó kankan. Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; kò fún ọ ní ìwé-ẹ̀rí.",
            "Ṣọ́ra fún àwọn ètò tí ń ṣèlérí iṣẹ́ tàbí ìwé-ẹ̀rí láàárín ọjọ́ díẹ̀. Béèrè lọ́wọ́ ilé-ìwé èyíkéyìí irú ìdánwò ìwé-ẹ̀rí tí ó ń múra rẹ sílẹ̀ fún, kí o sì ṣàyẹ̀wò ìdánwò náà lórí ojú-ìwé ìjọba rẹ̀."
          ],
          steps: ["Ṣí ojú-ìwé ìjọba ti CBCS (nhanow.com), CPC (aapc.com) àti CCA (ahima.org).", "Fún ọ̀kọ̀ọ̀kan, kọ ẹni tí ó ń fúnni, ohun tí o nílò kí o tó ṣe ìdánwò, àti bí o ṣe ń ṣe ìdánwò náà.", "Wo àwọn ìkéde iṣẹ́ tí ó wà nítòsí rẹ, kí o sì ka ìwé-ẹ̀rí tí wọ́n ń béèrè jù.", "Yan ọ̀kan tí o máa lépa, kí o sì kọ oṣù tí o fojú sí fún ìdánwò."],
          words: [["Medical coder", "ẹni tí ń sọ àkọsílẹ̀ dókítà di kóòdù tí gbogbo ènìyàn ń lò."], ["Medical biller", "ẹni tí ń fi claim ránṣẹ́ sí ilé-iṣẹ́ ìbánigbófò, tí ó sì ń tẹ̀lé e títí wọ́n fi sanwó."], ["Ìwé-ẹ̀rí (certification)", "ẹ̀rí láti ọ̀dọ̀ àjọ tí ń ṣe ìdánwò pé o yege ìdánwò rẹ̀; a tún ń pè é ní credential."], ["Claim", "ìwé-owó tí a fi ránṣẹ́ sí ilé-iṣẹ́ ìbánigbófò láti béèrè pé kí ó sanwó fún ìbẹ̀wò kan."]],
          slides: [
            { title: "Coder àti biller", bullets: ["Coder: ń sọ àkọsílẹ̀ dókítà di kóòdù", "Biller: ń fi claim ránṣẹ́, ó sì ń tẹ̀lé e títí wọ́n fi sanwó", "Ọ́fíìsì kékeré: ẹnìkan ṣoṣo sábà máa ń ṣe méjèèjì"] },
            { title: "Ìwé-ẹ̀rí mẹ́ta tí ó wọ́pọ̀", bullets: ["CBCS láti NHA", "CPC láti AAPC", "CCA láti AHIMA"] },
            { title: "Ṣàyẹ̀wò kí o tó sanwó", bullets: ["Òfin, owó àti ìdánwò ń yí padà", "Ka ojú-ìwé ìjọba ti ọ̀kọ̀ọ̀kan", "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; kì í ṣe ìwé-ẹ̀rí"] },
            { title: "Yan ọ̀nà rẹ", bullets: ["Ka ohun tí àwọn ìkéde iṣẹ́ nítòsí ń béèrè", "Yan ìwé-ẹ̀rí kan", "Kọ oṣù tí o fojú sí fún ìdánwò"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Ṣe tábìlì oníkọ̀lọ́ọ̀mù mẹ́ta lórí ìwé tàbí nínú spreadsheet: CBCS, CPC, CCA. Fún ọ̀kọ̀ọ̀kan, kọ ẹni tí ó ń fúnni àti ohun tí o nílò kí o tó ṣe ìdánwò, láti ojú-ìwé ìjọba rẹ̀. Lẹ́yìn náà wo ìkéde iṣẹ́ márùn-ún nítòsí rẹ, kí o sì yí ìlà ká ìwé-ẹ̀rí tí o máa lépa.",
          youCanNow: "sọ ohun tí biller àti coder ń ṣe, dárúkọ ìwé-ẹ̀rí mẹ́ta àti ẹni tí ó ń fúnni, kí o sì yan ọ̀kan tí o máa lépa.",
          quickCheck: [
            { objective: "O1", q: "Ta ni ó ń fúnni ní ìwé-ẹ̀rí CPC?", options: ["Ọ́fíìsì dókítà tí o ń ṣiṣẹ́ fún", "AAPC", "Ọ́fíìsì ọkọ̀ ti ìpínlẹ̀ rẹ", "Ilé-ìwé orí ayélujára èyíkéyìí"], answer: 1, why: "Certified Professional Coder (CPC) jẹ́ ìwé-ẹ̀rí AAPC." },
            { objective: "O1", q: "Ojú-òpó wẹ́ẹ̀bù kan sọ pé o lè di coder tó ní ìwé-ẹ̀rí láàárín ọjọ́ mẹ́ta fún owó díẹ̀. Kí ni o kọ́kọ́ ṣe?", options: ["Sanwó kíákíá kí owó tó gòkè", "Sọ fún àwọn agbanisíṣẹ́ pé o ní ìwé-ẹ̀rí", "Ṣàyẹ̀wò òfin ìdánwò gidi lórí ojú-ìwé ìjọba", "Fo ìdálẹ́kọ̀ọ́; ojú-òpó náà ti tó"], answer: 2, why: "Àjọ tí ń fúnni ní ìwé-ẹ̀rí nìkan ló lè sọ òfin àti ìdánwò rẹ̀ gidi fún ọ." }
          ]
        },
        {
          title: "Bí ìwé-owó ṣe ń rìn: ìyípo ìwé-owó",
          objectives: ["O2"],
          minutes: 5,
          goal: "To àwọn ìgbésẹ̀ ìyípo ìwé-owó létòlétò, láti ṣíṣètò ìbẹ̀wò dé ìsanwó.",
          text: [
            "Ìyípo ìwé-owó (billing cycle), tí a tún ń pè ní revenue cycle, ni ọ̀nà láti ìgbà tí aláìsàn bá ṣètò ìbẹ̀wò títí di ìgbà tí wọ́n bá san gbogbo owó fún ọ́fíìsì.",
            "Àwọn ìgbésẹ̀ pàtàkì: 1) Ṣètò ìbẹ̀wò, kí o sì ṣàyẹ̀wò ìbánigbófò. 2) Forúkọ aláìsàn sílẹ̀ (check-in): fìdí orúkọ rẹ̀, ọjọ́ ìbí àti káàdì ìbánigbófò rẹ̀ múlẹ̀. 3) Dókítà rí aláìsàn, ó sì kọ àkọsílẹ̀. 4) Coder sọ àkọsílẹ̀ náà di kóòdù. 5) Biller ṣe claim, ó sì ṣàyẹ̀wò rẹ̀. 6) A fi claim ránṣẹ́ sí ilé-iṣẹ́ ìbánigbófò. 7) Ilé-iṣẹ́ ìbánigbófò sanwó, san apá kan, tàbí kọ̀ ọ́, ó sì fi àlàyé ránṣẹ́. 8) Ọ́fíìsì béèrè owó tí aláìsàn jẹ, bí copay, ó sì tẹ̀lé ohunkóhun tí wọn kò tíì san.",
            "Àṣìṣe ní ìbẹ̀rẹ̀ ìyípo máa ń fa ìṣòro lẹ́yìn náà. Nọ́mbà ìbánigbófò tí kò tọ́ nígbà check-in lè mú kí wọ́n kọ claim ní ọ̀sẹ̀ díẹ̀ lẹ́yìn náà. Ìdí nìyẹn tí check-in pẹ̀lú ìṣọ́ra ṣe ṣe pàtàkì bí coding pẹ̀lú ìṣọ́ra."
          ],
          steps: ["Ṣètò ìbẹ̀wò, kí o sì ṣàyẹ̀wò ìbánigbófò.", "Forúkọ aláìsàn sílẹ̀, kí o sì fìdí ìsọfúnni rẹ̀ múlẹ̀.", "Dókítà rí aláìsàn, ó sì kọ àkọsílẹ̀.", "Ṣe kóòdù fún ìbẹ̀wò náà.", "Ṣe claim, kí o sì ṣàyẹ̀wò rẹ̀.", "Fi claim ránṣẹ́.", "Ka ìsanwó tàbí ìkọ̀sílẹ̀.", "Béèrè ìpín ti aláìsàn, kí o sì tẹ̀lé e."],
          words: [["Ìyípo ìwé-owó (billing cycle tàbí revenue cycle)", "gbogbo ìgbésẹ̀ láti ṣíṣètò ìbẹ̀wò títí wọ́n fi san gbogbo owó."], ["Copay", "iye owó kan pàtó tí aláìsàn ń san fún ìbẹ̀wò."], ["Deductible", "iye tí aláìsàn ń san lọ́dọọdún kí ìbánigbófò tó bẹ̀rẹ̀ sí í sanwó fún ọ̀pọ̀ iṣẹ́."], ["Payer (olùsanwó)", "ilé-iṣẹ́ ìbánigbófò tàbí ètò ìjọba tí ń san claim."], ["Denial (ìkọ̀sílẹ̀)", "nígbà tí olùsanwó kọ̀ láti san claim kan."]],
          slides: [
            { title: "Láti ṣíṣètò dé ìsanwó", bullets: ["A ń pè é ní billing cycle tàbí revenue cycle", "Gbogbo ìgbésẹ̀ ló kan gbígba owó"] },
            { title: "Ìbẹ̀rẹ̀ ìyípo", bullets: ["1. Ṣètò ìbẹ̀wò, kí o sì ṣàyẹ̀wò ìbánigbófò", "2. Check-in: orúkọ, ọjọ́ ìbí, káàdì ìbánigbófò", "3. Dókítà rí aláìsàn, ó sì kọ àkọsílẹ̀"] },
            { title: "Àárín ìyípo", bullets: ["4. Ṣe kóòdù fún ìbẹ̀wò", "5. Ṣe claim, kí o sì ṣàyẹ̀wò rẹ̀", "6. Fi ránṣẹ́ sí olùsanwó"] },
            { title: "Ìparí ìyípo", bullets: ["7. Olùsanwó sanwó, san apá kan tàbí kọ̀ ọ́", "8. Béèrè ìpín ti aláìsàn, kí o sì tẹ̀lé e", "Àṣìṣe ìbẹ̀rẹ̀ ń fa ìkọ̀sílẹ̀ lẹ́yìn"] }
          ],
          tryIt: "Kọ ìgbésẹ̀ mẹ́jọ ti ìyípo ìwé-owó sórí bébà kékeré mẹ́jọ. Dà wọ́n pọ̀, lẹ́yìn náà tò wọ́n padà létòlétò láìwò. Lẹ́gbẹ̀ẹ́ ìgbésẹ̀ kọ̀ọ̀kan, kọ àṣìṣe kan tí ó lè ṣẹlẹ̀ níbẹ̀, fún àpẹẹrẹ orúkọ tí a kọ ní àṣìṣe nígbà check-in.",
          youCanNow: "to àwọn ìgbésẹ̀ ìyípo ìwé-owó létòlétò, kí o sì sọ bí àṣìṣe ìbẹ̀rẹ̀ ṣe lè fa ìkọ̀sílẹ̀ lẹ́yìn náà.",
          quickCheck: [
            { objective: "O2", q: "Ìgbésẹ̀ wo ló tẹ̀lé e gẹ́lẹ́ lẹ́yìn tí coder bá sọ àkọsílẹ̀ di kóòdù?", options: ["Ṣíṣètò ìbẹ̀wò", "Fífi orúkọ aláìsàn sílẹ̀", "Olùsanwó fi owó ránṣẹ́", "Biller ṣe claim, ó sì ṣàyẹ̀wò rẹ̀"], answer: 3, why: "Coding ló kọ́kọ́ wá; lẹ́yìn náà biller ṣe claim láti inú àwọn kóòdù yẹn, ó sì ṣàyẹ̀wò rẹ̀." },
            { objective: "O2", q: "Nígbà check-in, wọ́n tẹ nọ́mbà ìbánigbófò aláìsàn ní àṣìṣe. Kí ló ṣeé ṣe jù kí ó ṣẹlẹ̀?", options: ["Wọ́n lè kọ claim náà lẹ́yìn náà", "Kò sí nǹkan; coder máa rí i", "Dókítà máa gba owó kíákíá", "Copay aláìsàn máa dín kù"], answer: 0, why: "Olùsanwó ń fi claim wé àkọsílẹ̀ àwọn ọmọ ẹgbẹ́ rẹ̀; nọ́mbà tí kò tọ́ sábà máa ń yọrí sí ìkọ̀sílẹ̀." }
          ]
        },
        {
          title: "Àwọn ẹ̀ka kóòdù mẹ́ta",
          objectives: ["O3"],
          minutes: 6,
          goal: "So apá kọ̀ọ̀kan ìbẹ̀wò mọ́ ẹ̀ka kóòdù tó tọ́.",
          text: [
            "Claim kan ń dáhùn ìbéèrè méjì: kí ló dé tí aláìsàn fi wá, kí sì ni ọ́fíìsì ṣe? Ẹ̀ka kóòdù ọ̀tọ̀ọ̀tọ̀ ló ń dáhùn ọ̀kọ̀ọ̀kan.",
            "Kóòdù ICD-10-CM ń sọ ÌDÍ: àìsàn, àmì tàbí ohun tí aláìsàn ń rò. Wọ́n ń bẹ̀rẹ̀ pẹ̀lú lẹ́tà kan, lẹ́yìn náà nọ́mbà, wọ́n sì lè ní àmì dot, fún àpẹẹrẹ I10 fún ẹ̀jẹ̀ ríru tí a kò mọ ohun tó fà á (àpẹẹrẹ àṣeṣe). Ní US, National Center for Health Statistics (NCHS) ti CDC ló ń bójú tó ICD-10-CM.",
            "Kóòdù CPT ń sọ OHUN tí dókítà tàbí òṣìṣẹ́ ìlera míì ṣe: ìbẹ̀wò ọ́fíìsì, àyẹ̀wò lab, iṣẹ́ abẹ tàbí ìtọ́jú kan. Wọ́n jẹ́ nọ́mbà márùn-ún, fún àpẹẹrẹ 36415 fún fífa ẹ̀jẹ̀ láti inú iṣan (àpẹẹrẹ àṣeṣe). American Medical Association (AMA) ló ni CPT, òun ló sì ń ṣe àtúnṣe rẹ̀. CMS ń pe CPT ní \"HCPCS Level I\".",
            "Kóòdù HCPCS Level II ń bo àwọn nǹkan tí CPT kò bò, bí ohun èlò, ẹ̀rọ àti ìrìn ọkọ̀ àlàfíà (ambulance). Wọ́n jẹ́ lẹ́tà kan àti nọ́mbà mẹ́rin. CMS (Centers for Medicare & Medicaid Services) ló ń bójú tó wọn. A ń ṣe àtúnṣe gbogbo ẹ̀ka kóòdù lọ́dọọdún, nítorí náà máa lo ìwé tàbí irinṣẹ́ ti ọdún yìí nígbà gbogbo."
          ],
          words: [["Àìsàn (diagnosis)", "ìṣòro ìlera tí dókítà rí tàbí tí ó ń tọ́jú."], ["ICD-10-CM", "ẹ̀ka kóòdù fún àìsàn ní US."], ["CPT", "ẹ̀ka kóòdù oní-nọ́mbà-márùn-ún ti AMA fún iṣẹ́ àti ìtọ́jú; a tún ń pè é ní HCPCS Level I."], ["HCPCS Level II", "ẹ̀ka kóòdù CMS fún ohun èlò, ẹ̀rọ àti àwọn nǹkan míì tí CPT kò bò; lẹ́tà kan àti nọ́mbà mẹ́rin."], ["CMS", "Centers for Medicare & Medicaid Services, àjọ ìjọba àpapọ̀ US tí ń ṣe àkóso Medicare, tí ó sì ń bá àwọn ìpínlẹ̀ ṣiṣẹ́ lórí Medicaid."]],
          slides: [
            { title: "Ìbéèrè méjì tí gbogbo claim ń dáhùn", bullets: ["KÍ LÓ DÉ tí aláìsàn fi wá? (àìsàn)", "KÍ NI ọ́fíìsì ṣe? (iṣẹ́ tàbí nǹkan)"] },
            { title: "ICD-10-CM: ìdí", bullets: ["Àìsàn, àmì àti ohun tí aláìsàn ń rò", "Lẹ́tà + nọ́mbà, nígbà míì pẹ̀lú dot: I10", "NCHS ti CDC ló ń bójú tó o ní US"] },
            { title: "CPT: ohun tí a ṣe", bullets: ["Iṣẹ́ dókítà àti àwọn òṣìṣẹ́ ìlera míì", "Nọ́mbà márùn-ún: 36415 (àpẹẹrẹ àṣeṣe)", "AMA ló ni í; a tún ń pè é ní HCPCS Level I"] },
            { title: "HCPCS Level II: ohun èlò àti àfikún", bullets: ["Ohun èlò, ẹ̀rọ, ìrìn ambulance", "Lẹ́tà kan + nọ́mbà mẹ́rin", "CMS ló ń bójú tó o; gbogbo ẹ̀ka ń yí padà lọ́dọọdún"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (Level I jẹ́ CPT, CMS ló ń bójú tó Level II)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Àṣeṣe nìkan. Fún ìbẹ̀wò àròsọ yìí, kọ ẹ̀ka kóòdù fún apá kọ̀ọ̀kan: (1) ọ̀fun dídùn, (2) ìbẹ̀wò ọ́fíìsì pẹ̀lú dókítà, (3) àyẹ̀wò strep kíákíá, (4) ẹ̀jẹ̀ ríru, (5) igi ìrìn méjì (crutches) tí aláìsàn gbé lọ sílé. Ìdáhùn: 1 àti 4 jẹ́ ICD-10-CM, 2 àti 3 jẹ́ CPT, 5 jẹ́ HCPCS Level II.",
          youCanNow: "sọ ẹ̀ka kóòdù tí ń dáhùn ìdí tí aláìsàn fi wá àti èyí tí ń dáhùn ohun tí a ṣe, kí o sì so àwọn apá ìbẹ̀wò mọ́ ICD-10-CM, CPT tàbí HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Ẹ̀ka kóòdù wo ni o máa lò fún àìsàn aláìsàn?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Zip code"], answer: 2, why: "Kóòdù ICD-10-CM ń sọ ìdí tí aláìsàn fi wá: àìsàn, àmì tàbí ohun tí ó ń rò." },
            { objective: "O3", q: "Aláìsàn kan lọ sílé pẹ̀lú walker (ẹ̀rọ ìrànlọ́wọ́ ìrìn). Ẹ̀ka kóòdù wo ló sábà máa ń bo walker náà?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "Kò nílò kóòdù kankan"], answer: 0, why: "Ẹ̀rọ àti ohun èlò tí CPT kò bò ń lo kóòdù HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Iṣẹ́ náà, àwọn ìwé-ẹ̀rí àti àwọn kóòdù",
        questions: [
          { objective: "O1", q: "Ìwé-ẹ̀rí wo ni NHA ń fúnni fún billing àti coding?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "Ìwé-ẹ̀rí billing àti coding ti NHA ni Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "Kí ni ìyípo ìwé-owó (billing cycle)?", options: ["Àwọn ìgbésẹ̀ láti ṣíṣètò ìbẹ̀wò títí wọ́n fi san gbogbo owó", "Kẹ̀kẹ́ fún àwọn òṣìṣẹ́ ọ́fíìsì", "Ètò ojoojúmọ́ dókítà", "Bí àwọn kóòdù ṣe tò lórí claim"], answer: 0, why: "Ìyípo ìwé-owó (revenue cycle) ń bẹ̀rẹ̀ láti ṣíṣètò ìbẹ̀wò títí dé ìsanwó tó kẹ́yìn." },
          { objective: "O2", q: "Olùsanwó san apá kan claim. Kí ni ìgbésẹ̀ tó sábà máa ń tẹ̀lé e?", options: ["Pa claim náà rẹ́", "Béèrè ìpín ti aláìsàn, kí o sì tẹ̀lé e", "Yí àìsàn padà", "Ṣètò ìbẹ̀wò tuntun"], answer: 1, why: "Lẹ́yìn ìpín ti olùsanwó, ọ́fíìsì máa ń béèrè ìpín ti aláìsàn, bí copay tàbí deductible." },
          { objective: "O3", q: "Èwo ni ìrísí kóòdù CPT?", options: ["Lẹ́tà kan àti nọ́mbà mẹ́rin", "Lẹ́tà kan, nọ́mbà àti dot", "Nọ́mbà márùn-ún", "Ọ̀rọ̀ olólẹ́tà mẹ́wàá"], answer: 2, why: "Kóòdù CPT jẹ́ nọ́mbà márùn-ún; ICD-10-CM ń bẹ̀rẹ̀ pẹ̀lú lẹ́tà, HCPCS Level II sì jẹ́ lẹ́tà kan pẹ̀lú nọ́mbà mẹ́rin." },
          { objective: "O3", q: "Ta ni ó ń bójú tó ICD-10-CM ní United States?", options: ["National Center for Health Statistics ti CDC", "American Medical Association", "Ọ́fíìsì dókítà kọ̀ọ̀kan", "Agbanisíṣẹ́ aláìsàn"], answer: 0, why: "NCHS ní CDC ló ń bójú tó ẹ̀dà ICD-10 ti US, tí a ń pè ní ICD-10-CM." }
        ]
      }
    },
    {
      name: "Orí 2: Kóòdù, claim àti àṣírí",
      lessons: [
        {
          title: "Wíwá kóòdù lọ́nà tó tọ́",
          objectives: ["O4"],
          minutes: 5,
          goal: "Wá kóòdù àìsàn nínú index, kí o sì fìdí rẹ̀ múlẹ̀ nínú àkọsílẹ̀ kóòdù.",
          text: [
            "ICD-10-CM ní apá pàtàkì méjì. Alphabetic index ń to àwọn àìsàn ní orúkọ, bí index ìwé. Tabular list ń fi gbogbo kóòdù hàn létòlétò, pẹ̀lú àkọsílẹ̀ nípa ìgbà tí a lè lò ó àti ìgbà tí a kò gbọ́dọ̀ lò ó.",
            "Òfin tí àwọn coder ń tẹ̀lé: kọ́kọ́ wá ọ̀rọ̀ pàtàkì nínú index, lẹ́yìn náà máa fìdí kóòdù múlẹ̀ nínú tabular list nígbà gbogbo. Má ṣe kóòdù láti inú index nìkan láéláé, nítorí tabular list lè sọ pé kí o fi lẹ́tà tàbí nọ́mbà kún un, tàbí kí o lo kóòdù míì.",
            "Wá àìsàn náà, kì í ṣe ẹ̀yà ara. Fún \"acute sore throat\" (ọ̀fun dídùn òjijì), ọ̀rọ̀ pàtàkì ni pharyngitis (ọ̀rọ̀ ìṣègùn fún ọ̀fun tí ń dùn, tí ó sì wú). Lẹ́yìn náà ka àwọn àkọsílẹ̀ inú tabular list kí o tó yan kóòdù. CPT náà ní index àti àkọsílẹ̀ kóòdù tirẹ̀, ó sì ń ṣiṣẹ́ bákan náà.",
            "Àṣeṣe ọ̀fẹ́: ICD-10-CM Browser Tool ti CDC jẹ́ kí o wá inú ẹ̀ka kóòdù náà lórí ayélujára. Nínú iṣẹ́ gidi, o máa lo ìwé kóòdù ti ọdún yìí tàbí irinṣẹ́ tí agbanisíṣẹ́ rẹ ń sanwó fún, àti àkọsílẹ̀ dókítà, kì í ṣe ìfojúsùn láéláé."
          ],
          steps: ["Ka àkọsílẹ̀ dókítà, kí o sì wá àìsàn náà.", "Wá ọ̀rọ̀ pàtàkì fún àìsàn náà nínú alphabetic index.", "Kọ kóòdù tí index tọ́ka sí sílẹ̀.", "Lọ sí kóòdù yẹn nínú tabular list.", "Ka àwọn àkọsílẹ̀: \"includes\", \"excludes\", àti bóyá a nílò àfikún lẹ́tà tàbí nọ́mbà.", "Yan kóòdù tí ó bá àkọsílẹ̀ dókítà mu gẹ́lẹ́."],
          words: [["Alphabetic index", "apá ìwé kóòdù tí ń to àwọn àìsàn ní orúkọ, láti A dé Z."], ["Tabular list", "apá ìwé kóòdù tí ń to gbogbo kóòdù létòlétò, pẹ̀lú òfin lílò wọn."], ["Ọ̀rọ̀ pàtàkì (main term)", "ọ̀rọ̀ fún àìsàn tí o kọ́kọ́ wá, kì í ṣe ẹ̀yà ara."], ["Specificity", "bí kóòdù ṣe péye tó; àwọn coder ń lo kóòdù tó péye jù tí àkọsílẹ̀ dókítà fi ẹ̀rí hàn."]],
          slides: [
            { title: "Apá méjì ìwé kóòdù", bullets: ["Alphabetic index: àwọn àìsàn láti A dé Z", "Tabular list: gbogbo kóòdù létòlétò, pẹ̀lú òfin"] },
            { title: "Òfin ìgbésẹ̀ méjì", bullets: ["1. Wá ọ̀rọ̀ pàtàkì nínú index", "2. Fìdí kóòdù múlẹ̀ nínú tabular list", "Má ṣe kóòdù láti inú index nìkan láéláé"] },
            { title: "Wá àìsàn náà", bullets: ["Ọ̀rọ̀ pàtàkì = àìsàn, kì í ṣe ẹ̀yà ara", "Ka àkọsílẹ̀ \"includes\" àti \"excludes\"", "Lo kóòdù tó péye jù tí àkọsílẹ̀ fi ẹ̀rí hàn"] },
            { title: "Ṣe àṣeṣe lọ́fẹ̀ẹ́", bullets: ["ICD-10-CM Browser Tool ti CDC", "Níbi iṣẹ́: ìwé ti ọdún yìí tàbí irinṣẹ́ agbanisíṣẹ́", "Ṣe kóòdù láti àkọsílẹ̀ dókítà, kì í ṣe ìfojúsùn"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM àti ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Àṣeṣe nìkan. Ṣí ICD-10-CM Browser Tool ti CDC láti inú ìjápọ̀ orísun. Wá àwọn àìsàn àròsọ wọ̀nyí: \"acute pharyngitis\", \"essential hypertension\" àti \"type 2 diabetes without complications\". Fún ọ̀kọ̀ọ̀kan, kọ ọ̀rọ̀ pàtàkì tí o wá, kóòdù tí o rí, àti àkọsílẹ̀ kan tí o kà kí o tó yàn án.",
          youCanNow: "wá kóòdù àìsàn ní ìgbésẹ̀ méjì, index lẹ́yìn náà tabular list, kí o sì sọ ìdí tí o kò fi gbọ́dọ̀ dúró sí index.",
          quickCheck: [
            { objective: "O4", q: "O rí kóòdù kan nínú alphabetic index. Kí ni o máa ṣe tẹ̀lé e?", options: ["Fi sórí claim lẹ́sẹ̀kẹsẹ̀", "Fìdí rẹ̀ múlẹ̀ nínú tabular list, kí o sì ka àkọsílẹ̀ rẹ̀", "Béèrè lọ́wọ́ aláìsàn bóyá ó dára", "Yan kóòdù tí ó kúrú jù nítòsí"], answer: 1, why: "Tabular list ló ní òfin, ó sì lè nílò àfikún; má ṣe kóòdù láti inú index nìkan láéláé." },
            { objective: "O4", q: "Àkọsílẹ̀ sọ pé \"acute bronchitis\". Kí ni ọ̀rọ̀ pàtàkì tí o máa wá?", options: ["Acute", "Àyà (chest)", "Ẹ̀dọ̀fóró (lungs)", "Bronchitis"], answer: 3, why: "O máa wá àìsàn náà (bronchitis), lẹ́yìn náà wá \"acute\" lábẹ́ rẹ̀." }
          ]
        },
        {
          title: "Kíkún claim àti títún ìkọ̀sílẹ̀ ṣe",
          objectives: ["O5"],
          minutes: 6,
          goal: "Kún àwọn àpótí pàtàkì inú claim 1500 àṣeṣe, kí o sì rí ìdí tí wọ́n fi kọ claim kan.",
          text: [
            "Ọ́fíìsì dókítà ń lo fọ́ọ̀mù claim 1500, tí National Uniform Claim Committee (NUCC) ń bójú tó. Ẹ̀dà ìwé tí a ń lò ni fọ́ọ̀mù 02/12. Lónìí, a ń fi ọ̀pọ̀ claim ránṣẹ́ lórí ẹ̀rọ (electronic), ṣùgbọ́n claim orí ẹ̀rọ ní ìsọfúnni kan náà, nítorí náà kíkọ́ fọ́ọ̀mù ìwé ń kọ́ ọ ní dátà náà.",
            "Àwọn àpótí pàtàkì tí o gbọ́dọ̀ mọ̀ (àṣeṣe): Àpótí 1a, nọ́mbà ID ẹni tí ìbánigbófò bò, láti inú káàdì ìbánigbófò. Àpótí 2, orúkọ aláìsàn. Àpótí 21, àwọn kóòdù àìsàn, tí a fi A, B, C àti bẹ́ẹ̀ bẹ́ẹ̀ lọ sàmì sí. Àpótí 24, àwọn ìlà iṣẹ́: ọjọ́ iṣẹ́ (24A), kóòdù CPT tàbí HCPCS (24D), diagnosis pointer tí ó so iṣẹ́ mọ́ lẹ́tà àìsàn kan nínú Àpótí 21 (24E), àti owó (24F). Àpótí 33, olùpèsè tí ń béèrè owó (billing provider).",
            "Kí claim tó lọ, ṣàyẹ̀wò rẹ̀: aláìsàn àti ID tó tọ́, gbogbo iṣẹ́ ní diagnosis pointer, kóòdù jẹ́ ti ọdún yìí, ọjọ́ àti owó bá ìbẹ̀wò mu. Rírí àṣìṣe báyìí kò wọ́n tó títún ìkọ̀sílẹ̀ ṣe lẹ́yìn náà.",
            "Nígbà tí wọ́n bá kọ claim, olùsanwó máa ń fi remittance (àlàyé ìsanwó) ránṣẹ́ pẹ̀lú ìdí. Àwọn ìdí tí ó wọ́pọ̀: ID tàbí orúkọ tí kò tọ́, kóòdù tí ó sọnù tàbí tí kò bófin mu, iṣẹ́ tí ìbánigbófò kò bò, prior authorization tí ó sọnù, claim ẹ̀ẹ̀mejì (duplicate), tàbí fífi ránṣẹ́ pẹ́ jù. Wá ìdí náà, tún un ṣe, kí o sì tún fi ránṣẹ́ tàbí pe ẹjọ́ (appeal) gẹ́gẹ́ bí òfin olùsanwó."
          ],
          steps: ["Da ID ẹni tí ìbánigbófò bò (1a) àti orúkọ aláìsàn (2) kọ gẹ́lẹ́ láti inú káàdì àròsọ.", "Kọ àwọn kóòdù àìsàn sínú Àpótí 21 gẹ́gẹ́ bí A, B, C.", "Lórí ìlà iṣẹ́ kọ̀ọ̀kan nínú Àpótí 24, kọ ọjọ́, kóòdù CPT tàbí HCPCS, diagnosis pointer àti owó.", "Kún billing provider (33).", "Ṣàyẹ̀wò claim pẹ̀lú àkọsílẹ̀ àyẹ̀wò-ṣáájú-fífiránṣẹ́ rẹ.", "Tí wọ́n bá kọ̀ ọ́, ka ìdí náà, tún ohun tó fà á ṣe, kí o sì tún fi ránṣẹ́ gẹ́gẹ́ bí òfin olùsanwó."],
          words: [["Fọ́ọ̀mù claim 1500", "fọ́ọ̀mù claim ìwé tí gbogbo ọ́fíìsì dókítà ń lò, tí NUCC ń bójú tó."], ["Diagnosis pointer", "lẹ́tà tí ó wà lórí ìlà iṣẹ́ (A, B, C) tí ó so ó mọ́ àìsàn kan nínú Àpótí 21."], ["Remittance (EOB tàbí ERA)", "àlàyé olùsanwó nípa ohun tí ó san tàbí kọ̀, àti ìdí rẹ̀."], ["Prior authorization", "ìfọwọ́sí láti ọ̀dọ̀ olùsanwó kí a tó ṣe àwọn iṣẹ́ kan."], ["Clean claim", "claim tí kò ní àṣìṣe, kí wọ́n lè san án ní ìgbà àkọ́kọ́."]],
          slides: [
            { title: "Fọ́ọ̀mù claim 1500", bullets: ["NUCC ló ń bójú tó o; ẹ̀dà ìwé 02/12", "Claim orí ẹ̀rọ ní dátà kan náà"] },
            { title: "Àwọn àpótí pàtàkì (àṣeṣe)", bullets: ["1a: ID ẹni tí ìbánigbófò bò  •  2: orúkọ aláìsàn", "21: kóòdù àìsàn A, B, C...", "24: ọjọ́, kóòdù, pointer, owó  •  33: billing provider"] },
            { title: "Ṣàyẹ̀wò kí o tó fi ránṣẹ́", bullets: ["Aláìsàn àti ID tó tọ́", "Gbogbo ìlà iṣẹ́ ní pointer", "Kóòdù ti ọdún yìí; ọjọ́ àti owó bá a mu"] },
            { title: "Àwọn ìdí ìkọ̀sílẹ̀ tí ó wọ́pọ̀", bullets: ["ID tàbí orúkọ tí kò tọ́; kóòdù tó sọnù tàbí tí kò bófin mu", "Ìbánigbófò kò bò ó; kò sí prior authorization", "Ẹ̀ẹ̀mejì tàbí pẹ́ jù: tún un ṣe, lẹ́yìn náà tún fi ránṣẹ́"] }
          ],
          sources: [
            { name: "NUCC: 1500 Claim Form", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Àṣeṣe nìkan. Aláìsàn àròsọ: Sam Rivera, ID ìbánigbófò ABC123456. Ìbẹ̀wò ní ọjọ́ tí o yàn: ìbẹ̀wò ọ́fíìsì (99213) fún ọ̀fun dídùn (J02.9) pẹ̀lú àyẹ̀wò strep kíákíá (87880), owó $100 àti $25 (àròsọ). Lórí ìwé tàbí nínú spreadsheet, kún Àpótí 1a, 2, 21, 24 (ìlà méjì) àti 33 (\"Practice Clinic\"). Lẹ́yìn náà claim náà padà wá: \"invalid member ID\". Kọ ohun tí o máa ṣàyẹ̀wò àti ohun tí o máa tún ṣe.",
          youCanNow: "kún àwọn àpótí pàtàkì inú claim àṣeṣe, ṣàyẹ̀wò rẹ̀ kí ó tó lọ, kí o sì rí ìdí ìkọ̀sílẹ̀, kí o sì tún un ṣe.",
          quickCheck: [
            { objective: "O5", q: "Ibo ni àwọn kóòdù àìsàn ń lọ lórí fọ́ọ̀mù 1500?", options: ["Àpótí 2", "Àpótí 33", "Àpótí 21", "Àpótí 1a"], answer: 2, why: "Àpótí 21 ló ń gba àwọn kóòdù àìsàn, tí a fi A, B, C àti bẹ́ẹ̀ bẹ́ẹ̀ lọ sàmì sí." },
            { objective: "O5", q: "Wọ́n kọ claim kan pẹ̀lú \"service requires prior authorization\". Kí ló sọnù?", options: ["Ìfọwọ́sí olùsanwó kí a tó ṣe iṣẹ́ náà", "Orúkọ àárín aláìsàn", "Ẹ̀dà kejì claim náà", "Ìbuwọ́lù dókítà lórí fáìlì ìwé"], answer: 0, why: "Prior authorization ni ìfọwọ́sí olùsanwó kí a tó ṣe àwọn iṣẹ́ kan; láìsí i, wọ́n máa kọ claim náà." }
          ]
        },
        {
          title: "Dídáàbò bo àṣírí aláìsàn, àti claim àṣeṣe rẹ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Pín ìsọfúnni aláìsàn fún àwọn tí ó nílò rẹ̀ nìkan, àti ohun tí wọ́n nílò nìkan.",
          text: [
            "Àwọn biller àti coder ń rí ìsọfúnni ìlera àdáni lójoojúmọ́: orúkọ, ọjọ́ ìbí, àìsàn, nọ́mbà ìbánigbófò. HIPAA ni òfin ìjọba àpapọ̀ US tí ń dáàbò bò ó. Privacy Rule rẹ̀ bo àwọn ètò ìbánigbófò ìlera, ọ̀pọ̀ ọ́fíìsì dókítà àti ilé-ìwòsàn, àti àwọn ilé-iṣẹ́ tí ń ṣiṣẹ́ fún wọn, bí ilé-iṣẹ́ billing.",
            "Protected health information (PHI) ni ìsọfúnni ìlera èyíkéyìí tí ó lè fi ẹni kan hàn. Òfin \"minimum necessary\" (èyí tí ó kéré jù tí a nílò) túmọ̀ sí pé o máa lo tàbí pín ohun tí iṣẹ́ náà nílò nìkan. Olùsanwó lè nílò kóòdù àìsàn lórí claim; alábàáṣiṣẹ́ kan nínú yàrá ìsinmi kò nílò láti gbọ́ ọ.",
            "Ìwà ojoojúmọ́: tì ojú-iboju rẹ nígbà tí o bá kúrò, má sọ̀rọ̀ nípa aláìsàn ní gbangba láéláé, ṣàyẹ̀wò ẹni tí ó ń pè, fi claim ránṣẹ́ nípasẹ̀ ètò tí a fọwọ́ sí nìkan, má sì fi PHI ránṣẹ́ láti àkọọ́lẹ̀ ìmeèlì tàbí fóònù ti ara rẹ láéláé. Tí o bá rí àṣìṣe àṣírí, sọ fún alábòójútó rẹ tàbí privacy officer lẹ́sẹ̀kẹsẹ̀.",
            "Báyìí, kó gbogbo rẹ̀ pọ̀ nínú iṣẹ́ ìkẹyìn rẹ: claim àṣeṣe tó péye àti ètò ìwé-ẹ̀rí rẹ."
          ],
          steps: ["Kí o tó pín nǹkan, béèrè pé: ṣé ẹni yìí ní ìdí iṣẹ́ láti mọ̀ ọ́n?", "Pín èyí tí ó kéré jù tí wọ́n nílò nìkan.", "Fìdí ẹni tí ó ń pè múlẹ̀ kí o tó fúnni ní ohunkóhun.", "Tì ojú-iboju rẹ, kí o sì lo ètò tí a fọwọ́ sí nìkan.", "Ròyìn àṣìṣe àṣírí fún alábòójútó rẹ tàbí privacy officer."],
          words: [["HIPAA", "òfin ìjọba àpapọ̀ US tí ń dáàbò bo àṣírí àti ààbò ìsọfúnni ìlera."], ["PHI", "protected health information: ìsọfúnni ìlera tí ó lè fi ẹni kan hàn."], ["Minimum necessary", "èrò HIPAA pé ká lo tàbí pín ìsọfúnni tí iṣẹ́ náà nílò nìkan."], ["Privacy officer", "ẹni tí ó ń bójú tó òfin àṣírí àti ìròyìn rẹ̀ níbi iṣẹ́."]],
          slides: [
            { title: "HIPAA ń dáàbò bo aláìsàn", bullets: ["Òfin àṣírí ìjọba àpapọ̀ fún ìsọfúnni ìlera", "Ó bo ètò ìbánigbófò, ọ̀pọ̀ dókítà àti ilé-iṣẹ́ billing wọn"] },
            { title: "Minimum necessary", bullets: ["Pín fún àwọn tí ó nílò rẹ̀ fún iṣẹ́ nìkan", "Pín ohun tí wọ́n nílò nìkan"] },
            { title: "Ìwà ojoojúmọ́", bullets: ["Tì ojú-iboju rẹ", "Má sọ̀rọ̀ nípa aláìsàn ní gbangba", "Fìdí ẹni tí ó ń pè múlẹ̀", "Ètò tí a fọwọ́ sí nìkan, má lo ìmeèlì ti ara rẹ láéláé"] },
            { title: "Iṣẹ́ ìkẹyìn", bullets: ["Parí claim àṣeṣe", "Ṣàyẹ̀wò rẹ̀ pẹ̀lú àkọsílẹ̀ àyẹ̀wò-ṣáájú-fífiránṣẹ́ rẹ", "Kọ ètò ìwé-ẹ̀rí rẹ pẹ̀lú ọjọ́"] }
          ],
          sources: [
            { name: "HHS: HIPAA fún àwọn òṣìṣẹ́ (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn, àṣeṣe nìkan. Ìbẹ̀wò àròsọ: Ana Lee, ID ìbánigbófò XYZ987654, rí dókítà (99213) fún ẹ̀jẹ̀ ríru (I10), wọ́n sì fa ẹ̀jẹ̀ láti inú iṣan rẹ̀ (36415); owó àròsọ $100 àti $15. Kún claim 1500 àṣeṣe (Àpótí 1a, 2, 21, 24, 33), ṣàyẹ̀wò rẹ̀ pẹ̀lú àkọsílẹ̀ àyẹ̀wò-ṣáájú-fífiránṣẹ́ tí o kọ fúnra rẹ, kí o sì fi ètò ojú-ìwé kan kún un: ìwé-ẹ̀rí rẹ, ibi tí o ti máa kẹ́kọ̀ọ́, àti ọjọ́ ìdánwò tí o fojú sí. Má lo ìsọfúnni aláìsàn gidi kankan.",
          youCanNow: "dáàbò bo ìsọfúnni aláìsàn pẹ̀lú òfin minimum necessary, kí o sì sọ ìbẹ̀wò àròsọ kan di claim àṣeṣe tó péye tí o ti ṣàyẹ̀wò.",
          quickCheck: [
            { objective: "O6", q: "Obìnrin kan pè, ó sọ pé òun ni àbúrò tàbí ẹ̀gbọ́n aláìsàn kan, ó sì béèrè àìsàn rẹ̀. Kí ni o máa ṣe?", options: ["Ka àìsàn náà fún un láti ṣèrànwọ́", "Fi ránṣẹ́ sí i lórí fóònù lẹ́yìn náà", "Sọ kóòdù àìsàn nìkan fún un", "Tẹ̀lé òfin ọ́fíìsì rẹ láti fìdí ẹni tí ó lè gba ìsọfúnni múlẹ̀; má ṣe pín in"], answer: 3, why: "HIPAA ń dín àwọn tí ó lè gba PHI kù; o máa tẹ̀lé òfin ọ́fíìsì rẹ, o kò sì ní pín nǹkan kan títí o fi fìdí rẹ̀ múlẹ̀." },
            { objective: "O6", q: "Kí ni \"minimum necessary\" túmọ̀ sí?", options: ["Pín ìsọfúnni tí iṣẹ́ náà nílò nìkan", "Ṣiṣẹ́ wákàtí tí ó kéré jù", "Ṣe kóòdù àìsàn kan ṣoṣo fún claim kọ̀ọ̀kan", "Gba owó tí ó kéré jù"], answer: 0, why: "Lábẹ́ HIPAA, o máa lo tàbí pín ìsọfúnni tí iṣẹ́ náà nílò nìkan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Kóòdù, claim àti àṣírí",
        questions: [
          { objective: "O4", q: "Kí ló dé tí àwọn coder kò fi ń ṣe kóòdù láti inú alphabetic index nìkan láéláé?", options: ["Index kì í ṣe ti ọdún yìí nígbà gbogbo", "Kò sí kóòdù nínú index", "Tabular list ní òfin, ó sì lè nílò àfikún lẹ́tà tàbí nọ́mbà", "Àwọn olùsanwó kì í gba kóòdù index"], answer: 2, why: "Àkọsílẹ̀ inú tabular list lè yí kóòdù padà tàbí béèrè àfikún lẹ́tà tàbí nọ́mbà." },
          { objective: "O5", q: "Kí ni diagnosis pointer nínú Àpótí 24E ń ṣe?", options: ["Ó ń fi àdírẹ́sì olùsanwó hàn", "Ó ń so ìlà iṣẹ́ kan mọ́ àìsàn kan nínú Àpótí 21", "Ó ń tọ́ka sí ilé aláìsàn", "Ó ń kọ ìwé-àṣẹ dókítà sílẹ̀"], answer: 1, why: "Lẹ́tà pointer ń so iṣẹ́ kọ̀ọ̀kan mọ́ àìsàn tí ó ṣàlàyé rẹ̀." },
          { objective: "O5", q: "Wọ́n kọ claim kan gẹ́gẹ́ bí \"duplicate\". Kí ni ìgbésẹ̀ àkọ́kọ́ tó dára jù?", options: ["Ṣàyẹ̀wò bóyá a ti fi claim kan náà ránṣẹ́ tàbí wọ́n ti san án", "Fi ránṣẹ́ ní ìgbà mẹ́ta sí i", "Yí àwọn kóòdù padà kí ó lè dà bí ọ̀tọ̀", "Béèrè gbogbo owó lọ́wọ́ aláìsàn"], answer: 0, why: "Ìkọ̀sílẹ̀ duplicate túmọ̀ sí pé olùsanwó ti ní i; ṣàyẹ̀wò ipò rẹ̀ dípò kí o tún fi ránṣẹ́." },
          { objective: "O6", q: "O nílò láti kúrò ní tábìlì rẹ nígbà tí claim kan wà lójú-iboju. Kí ni o máa ṣe?", options: ["Fi sílẹ̀ ní ṣíṣí; o kò ní pẹ́", "Ní kí àlejò kan bá ọ ṣọ́ ọ", "Yí ojú-iboju sí ògiri", "Tì ojú-iboju rẹ"], answer: 3, why: "Títì ojú-iboju rẹ ń pa PHI mọ́ kúrò lọ́wọ́ àwọn tí kò yẹ kí wọ́n rí i." },
          { objective: "O6", q: "Èwo ni protected health information (PHI)?", options: ["Fọ́ọ̀mù claim òfìfo", "Àkókò tí ọ́fíìsì ń ṣí", "Orúkọ aláìsàn pẹ̀lú àìsàn rẹ̀", "Orúkọ ìwé kóòdù kan"], answer: 2, why: "Ìsọfúnni ìlera tí ó lè fi ẹni kan hàn jẹ́ PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìpìlẹ̀ Medical Billing àti Coding",
    questions: [
      { objective: "O1", q: "Kí ni medical coder ń ṣe?", options: ["Ó ń sọ àkọsílẹ̀ dókítà di kóòdù tí gbogbo ènìyàn ń lò", "Ó ń fa ẹ̀jẹ̀ lára aláìsàn", "Ó ń ta ètò ìbánigbófò", "Ó ń tún kọ̀mpútà ọ́fíìsì ṣe"], answer: 0, why: "Àwọn coder ń sọ àìsàn àti iṣẹ́ inú àkọsílẹ̀ di kóòdù." },
      { objective: "O1", q: "Ibo ni o yẹ kí o ti ṣàyẹ̀wò ohun tí ìwé-ẹ̀rí kan ń béèrè àti owó rẹ̀ lọ́wọ́lọ́wọ́?", options: ["Ìfiránṣẹ́ kan lórí social media", "Ọ̀rẹ́ kan tí ó ṣe é ní ọdún púpọ̀ sẹ́yìn", "Ojú-ìwé ìjọba ti àjọ tí ń fúnni ní ìwé-ẹ̀rí", "Ìpolówó ìdálẹ́kọ̀ọ́ èyíkéyìí"], answer: 2, why: "Òfin àti owó ń yí padà; ojú-ìwé ìjọba ló ní ti ìsinsìnyí." },
      { objective: "O1", q: "Èwo ni ìsopọ̀ tó tọ́?", options: ["CPC láti NHA", "CBCS láti AHIMA", "CCA láti AAPC", "CCA láti AHIMA"], answer: 3, why: "CCA jẹ́ ti AHIMA; CPC jẹ́ ti AAPC; CBCS jẹ́ ti NHA." },
      { objective: "O1", q: "Kí ni ẹ̀kọ́ yìí ń fún ọ?", options: ["Ìwé-àṣẹ coding", "Ìmúrasílẹ̀ fún ìdánwò ìwé-ẹ̀rí", "Iṣẹ́ tí ó dájú", "Ìwé-ẹ̀rí CPC"], answer: 1, why: "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; ìwé-ẹ̀rí ń wá láti yíyege ìdánwò ìjọba nìkan." },
      { objective: "O2", q: "Èwo ni ìgbésẹ̀ àkọ́kọ́ ìyípo ìwé-owó?", options: ["Ṣètò ìbẹ̀wò, kí o sì ṣàyẹ̀wò ìbánigbófò", "Fi claim ránṣẹ́", "Béèrè owó lọ́wọ́ aláìsàn", "Ṣe kóòdù fún ìbẹ̀wò"], answer: 0, why: "Ìyípo ń bẹ̀rẹ̀ nígbà tí a bá ṣètò ìbẹ̀wò, tí a sì ṣàyẹ̀wò ìbánigbófò." },
      { objective: "O2", q: "Ìgbésẹ̀ wo ló wá gẹ́lẹ́ ṣáájú fífi claim ránṣẹ́?", options: ["Check-in aláìsàn", "Ṣíṣe claim àti ṣíṣàyẹ̀wò rẹ̀", "Ṣíṣètò ìbẹ̀wò", "Ìsanwó olùsanwó"], answer: 1, why: "Biller ń ṣe claim, ó sì ń ṣàyẹ̀wò rẹ̀, lẹ́yìn náà ó fi ránṣẹ́." },
      { objective: "O2", q: "Kí ni copay?", options: ["Ẹ̀dà claim kan", "Owó tí olùsanwó san fún dókítà", "Iye owó kan pàtó tí aláìsàn ń san fún ìbẹ̀wò", "Àṣìṣe coding"], answer: 2, why: "Copay ni iye owó kan pàtó tí aláìsàn ń san." },
      { objective: "O3", q: "Aláìsàn kan wá pẹ̀lú ikọ́. Ẹ̀ka kóòdù wo ló ń ṣàpèjúwe ikọ́ náà?", options: ["CPT", "HCPCS Level II", "Kò sí", "ICD-10-CM"], answer: 3, why: "Àmì, ohun tí aláìsàn ń rò àti àìsàn ń lo ICD-10-CM." },
      { objective: "O3", q: "Ta ni ó ni ẹ̀ka kóòdù CPT, tí ó sì ń ṣe àtúnṣe rẹ̀?", options: ["American Medical Association", "Agbanisíṣẹ́ aláìsàn", "Ìpínlẹ̀ kọ̀ọ̀kan", "NUCC"], answer: 0, why: "AMA ló ni CPT; CMS ń pè é ní HCPCS Level I." },
      { objective: "O3", q: "Kóòdù wo ló dà bí kóòdù HCPCS Level II?", options: ["99213", "I10", "E0100 (àpẹẹrẹ àṣeṣe)", "36415"], answer: 2, why: "Kóòdù HCPCS Level II jẹ́ lẹ́tà kan tí nọ́mbà mẹ́rin tẹ̀lé." },
      { objective: "O3", q: "Báwo ni àwọn ẹ̀ka kóòdù ṣe ń yí padà tó?", options: ["Láéláé", "Lọ́dọọdún", "Ní gbogbo ọdún 50", "Nígbà tí dókítà bá béèrè nìkan"], answer: 1, why: "A ń ṣe àtúnṣe àwọn ẹ̀ka kóòdù lọ́dọọdún, nítorí náà àwọn coder ń lo ìwé tàbí irinṣẹ́ ti ọdún yìí." },
      { objective: "O4", q: "Nínú ìwé kóòdù, apá wo ló ń to àwọn àìsàn láti A dé Z?", options: ["Alphabetic index", "Tabular list", "Fọ́ọ̀mù claim", "Remittance"], answer: 0, why: "Alphabetic index ń to àwọn àìsàn ní orúkọ." },
      { objective: "O4", q: "Dókítà kọ \"chronic sinusitis\". Kí ni o máa kọ́kọ́ wá?", options: ["Chronic", "Imú (nose)", "Sinusitis", "Orí (head)"], answer: 2, why: "Wá àìsàn náà (sinusitis), lẹ́yìn náà wá ọ̀rọ̀ \"chronic\" lábẹ́ rẹ̀." },
      { objective: "O4", q: "Kí ni irinṣẹ́ ìjọba ọ̀fẹ́ fún ṣíṣe àṣeṣe wíwá ICD-10-CM?", options: ["Ẹgbẹ́ ìjíròrò coding èyíkéyìí lórí ayélujára", "Ìbéèrè-ìdánwò lórí social media", "Fọ́ọ̀mù claim 1500", "ICD-10-CM Browser Tool ti CDC"], answer: 3, why: "NCHS ti CDC ń pèsè ICD-10-CM Browser Tool lọ́fẹ̀ẹ́." },
      { objective: "O5", q: "Ibo ni nọ́mbà ID ẹni tí ìbánigbófò bò ń lọ lórí fọ́ọ̀mù 1500?", options: ["Àpótí 21", "Àpótí 1a", "Àpótí 24F", "Àpótí 33"], answer: 1, why: "Àpótí 1a ló ń gba nọ́mbà ID ẹni tí ìbánigbófò bò láti inú káàdì ìbánigbófò." },
      { objective: "O5", q: "Ta ni ó ń bójú tó fọ́ọ̀mù claim 1500?", options: ["National Uniform Claim Committee (NUCC)", "Aláìsàn", "AMA", "Dókítà kọ̀ọ̀kan"], answer: 0, why: "NUCC ló ń bójú tó fọ́ọ̀mù claim 1500." },
      { objective: "O5", q: "Kí ni \"clean claim\"?", options: ["Claim tí a tẹ̀ sórí bébà tuntun", "Claim tí kò ní owó kankan", "Claim tí kò ní àṣìṣe, tí wọ́n lè san ní ìgbà àkọ́kọ́", "Claim tí a fi ránṣẹ́ lórí ìmeèlì"], answer: 2, why: "Clean claim kò ní àṣìṣe, nítorí náà olùsanwó lè san án ní ìgbà àkọ́kọ́." },
      { objective: "O5", q: "Kí ni remittance (EOB tàbí ERA) ń sọ fún ọ?", options: ["Àdírẹ́sì ilé aláìsàn", "Ètò ọ̀la", "Nọ́mbà ìwé-àṣẹ dókítà", "Ohun tí olùsanwó san tàbí kọ̀, àti ìdí rẹ̀"], answer: 3, why: "Remittance ń ṣàlàyé ìsanwó tàbí ìkọ̀sílẹ̀, ó sì ń fúnni ní ìdí." },
      { objective: "O6", q: "Alábàáṣiṣẹ́ kan tí ó wà ní ìsinmi béèrè ohun tó ń ṣe aláìsàn kan tí o ṣe kóòdù fún. Kí ni o máa ṣe?", options: ["Sọ fún un; òun náà ń ṣiṣẹ́ níbí", "Má ṣe pín in; kò ní ìdí iṣẹ́ láti mọ̀ ọ́n", "Sọ ọ́ ní kẹ́lẹ́kẹ́lẹ́", "Fi claim hàn án"], answer: 1, why: "Lábẹ́ òfin minimum necessary, PHI ń lọ sọ́dọ̀ àwọn tí ó nílò rẹ̀ fún iṣẹ́ wọn nìkan." },
      { objective: "O6", q: "Ìwà wo ló ń dáàbò bo PHI?", options: ["Fífi claim ránṣẹ́ láti ìmeèlì ti ara rẹ", "Sísọ̀rọ̀ nípa aláìsàn nínú bọ́ọ̀sì", "Lílo ètò iṣẹ́ tí a fọwọ́ sí nìkan láti fi claim ránṣẹ́", "Fífi claim sílẹ̀ lórí ẹ̀rọ ìtẹ̀wé"], answer: 2, why: "Ètò tí a fọwọ́ sí ń dáàbò bo PHI; ìmeèlì ti ara ẹni àti ọ̀rọ̀ ní gbangba kò ṣe bẹ́ẹ̀." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò ìwé-ẹ̀rí", objective: "O1", notYet: "Kò dárúkọ ìwé-ẹ̀rí kankan, tàbí ó ṣe ìfojúsùn nípa àwọn ohun tí wọ́n béèrè dípò kí ó ṣàyẹ̀wò wọn.", meets: "Ó dárúkọ ìwé-ẹ̀rí kan àti ẹni tí ó ń fúnni, pẹ̀lú àwọn ohun tí wọ́n béèrè àti ọjọ́ ìdánwò tí ó fojú sí, láti ojú-ìwé ìjọba.", exceeds: "Ó tún kọ ètò ìdálẹ́kọ̀ọ́ kan, ọjọ́ ẹ̀kọ́ ọlọ́sọ̀ọ̀sẹ̀, àti ohun tí àwọn ìkéde iṣẹ́ nítòsí ń béèrè." },
      { name: "Ẹ̀ka kóòdù tó tọ́", objective: "O3", notYet: "Ó fi CPT ṣe kóòdù àìsàn, tàbí ó fi ICD-10-CM ṣe kóòdù iṣẹ́.", meets: "Àìsàn ń lo ICD-10-CM, iṣẹ́ kọ̀ọ̀kan sì ń lo CPT.", exceeds: "Ó lè ṣàlàyé ìdí tí kóòdù kọ̀ọ̀kan fi jẹ́ ti ẹ̀ka kóòdù rẹ̀." },
      { name: "Kóòdù tí a wá lọ́nà tó tọ́", objective: "O4", notYet: "Ó da kóòdù kọ láìṣàyẹ̀wò, tàbí ó mú un láti inú index nìkan.", meets: "Ó rí àìsàn kọ̀ọ̀kan nínú index, ó sì fìdí rẹ̀ múlẹ̀ nínú tabular list (tàbí irinṣẹ́ CDC).", exceeds: "Ó kọ ọ̀rọ̀ pàtàkì tí ó wá àti òfin kan tí ó kà fún kóòdù kọ̀ọ̀kan." },
      { name: "Àwọn àpótí claim tí a kún", objective: "O5", notYet: "Àwọn àpótí kan sọnù, tàbí ID, kóòdù tàbí owó kò bá ìbẹ̀wò mu.", meets: "Ó kún Àpótí 1a, 2, 21, 24 àti 33, wọ́n sì bá ìbẹ̀wò mu; gbogbo ìlà iṣẹ́ ní pointer.", exceeds: "Ó ní àkọsílẹ̀ àyẹ̀wò-ṣáájú-fífiránṣẹ́ tí a kọ sílẹ̀, tí ó rí ó kéré tán àṣìṣe kan tí a mọ̀ọ́mọ̀ fi sínú rẹ̀." },
      { name: "Ìyípo ìwé-owó àti títẹ̀lé e", objective: "O2", notYet: "Kò lè sọ ohun tí ó ń ṣẹlẹ̀ lẹ́yìn tí a fi claim ránṣẹ́.", meets: "Ó sọ àwọn ìgbésẹ̀ láti fífiránṣẹ́ dé ìsanwó, àti ohun tí a ó ṣe tí wọ́n bá kọ̀ ọ́.", exceeds: "Ó dárúkọ ìdí ìkọ̀sílẹ̀ méjì àti àtúnṣe fún ọ̀kọ̀ọ̀kan." },
      { name: "Àṣírí tí a pa mọ́", objective: "O6", notYet: "Ó lo ìsọfúnni aláìsàn gidi, tàbí ó pín PHI fún ẹni tí kò nílò rẹ̀.", meets: "Ó lo ìsọfúnni àròsọ nìkan, ó sì pa claim náà mọ́ ní àṣírí.", exceeds: "Ó kọ ìwà ojoojúmọ́ mẹ́ta tí ń dáàbò bo PHI níbi iṣẹ́." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ sílẹ̀ fún ètò ìdálẹ́kọ̀ọ́ billing àti coding tàbí fún ìdánwò ìwé-ẹ̀rí láàárín ọjọ́ 90",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n yege ìdánwò CBCS, CPC tàbí CCA (gẹ́gẹ́ bí wọ́n ṣe ròyìn)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n gbà síṣẹ́ billing, coding, front desk tàbí ìforúkọsílẹ̀ aláìsàn láàárín oṣù 6"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì fún àwọn ojú-ìwé ìwé-ẹ̀rí ìjọba àti ICD-10-CM Browser Tool ti CDC",
      "Ìwé àti gègé, tàbí spreadsheet ọ̀fẹ́ (Google Sheets tàbí Excel), fún claim àṣeṣe",
      "Àwòrán fọ́ọ̀mù claim 1500 àṣeṣe tí a tẹ̀ jáde tàbí tí a yà (àpótí 1a, 2, 21, 24, 33)",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Tẹnu mọ́ ọn pé gbogbo kóòdù inú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ àṣeṣe; rí i dájú pé àwọn akẹ́kọ̀ọ́ mọ̀ pé kóòdù ń yí padà lọ́dọọdún.",
      "Má ṣe lo àkọsílẹ̀ aláìsàn gidi tàbí káàdì ìbánigbófò gidi nínú kíláàsì láéláé; lo àwọn aláìsàn àròsọ nìkan.",
      "Mú ìkéde iṣẹ́ tí ó wà nítòsí tí a tẹ̀ jáde wá, kí àwọn akẹ́kọ̀ọ́ lè rí ìwé-ẹ̀rí tí àwọn agbanisíṣẹ́ ń béèrè.",
      "Fi àṣìṣe kan (ID tí kò tọ́ tàbí pointer tí ó sọnù) sínú claim àpẹẹrẹ kan, kí o sì jẹ́ kí àwọn ẹgbẹ́ wá a rí.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "Àwọn akẹ́kọ̀ọ́ tí ó ní àkọsílẹ̀ ẹ̀ṣẹ̀: sọ fún wọn kí wọ́n béèrè lọ́wọ́ àjọ ìwé-ẹ̀rí àti ètò ìdálẹ́kọ̀ọ́ kọ̀ọ̀kan nípa òfin tirẹ̀, kí wọ́n sì ṣàyẹ̀wò àwọn ohun tí iṣẹ́ ń béèrè ní ìpínlẹ̀ wọn."
    ]
  }
};

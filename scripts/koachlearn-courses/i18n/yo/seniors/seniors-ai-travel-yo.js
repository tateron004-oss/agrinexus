"use strict";

// Koach Learn course (Yoruba translation of seniors/seniors-ai-travel.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "seniors-ai-travel-yo",
  lang: "yo",
  translationOf: "seniors-ai-travel",
  category: "Seniors and Technology",
  name: "AI gẹ́gẹ́ bí Alábàárìn Ìrìn-àjò",
  skills: "Ṣíṣe ètò ìrìn-àjò pẹ̀lú AI, Ṣíṣàyẹ̀wò òtítọ́ ìrìn-àjò lórí ojú-òpó wẹ́ẹ̀bù ìjọba, Ṣíṣe àkọsílẹ̀ ẹrù, Lílo app máàpù àti app ìtúmọ̀, Wíwà láìléwu àti níbàáṣepọ̀ nígbà ìrìn-àjò",
  outcome: "lo olùrànlọ́wọ́ AI láti ṣètò ìrìn-àjò kúkúrú tí kò ní kán ọ lójú, ṣàyẹ̀wò àwọn òtítọ́ pàtàkì lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti àjọ náà, ṣe àkọsílẹ̀ ẹrù, kí o sì lo máàpù àti irinṣẹ́ ìtúmọ̀ lórí fóònù rẹ nígbà ìrìn-àjò.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbàlagbà tí wọ́n fẹ́ rin ìrìn-àjò, yálà láti lọ kí àwọn ọmọ-ọmọ ní apá kejì orílẹ̀-èdè, láti lọ wo ìlú pẹ̀lú bọ́ọ̀sì ìrìn-àjò, tàbí láti lọ rí ibi tí wọ́n ti ń lá àlá rẹ̀ tipẹ́.",
    "O máa lo olùrànlọ́wọ́ AI ọ̀fẹ́ bí ChatGPT, Microsoft Copilot tàbí Google Gemini láti ṣètò ìrìn-àjò onírọ̀rùn tí ó bá agbára àti àìní rẹ mu, lẹ́yìn náà o máa ṣàyẹ̀wò àwọn òtítọ́ pàtàkì (òfin káàdì ìdánimọ̀ (ID), àkókò ìṣísílẹ̀, iye owó) lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti ibẹ̀ fúnra rẹ̀. O tún máa lo máàpù, ìtúmọ̀ àti pínpín ibi tí o wà lórí fóònù rẹ.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Àwọn iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" máa kọ́ ètò gidi fún ìrìn-àjò tí o fẹ́ lọ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣètò ìrìn-àjò ọjọ́ mẹ́ta pẹ̀lú olùrànlọ́wọ́ AI: ètò ọjọ́ dé ọjọ́ tí kò kánjú, tí ó ní àkókò ìsinmi, àkọsílẹ̀ ẹrù tí ó ní àwọn oògùn rẹ àti ID rẹ, àti òtítọ́ mẹ́ta tí o ti ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti àjọ náà (bí ID tí o nílò láti wọ ọkọ̀ òfurufú àti àkókò ìṣísílẹ̀ ibi tí o máa lọ). Pín ètò náà pẹ̀lú ẹnìkan nínú ẹbí rẹ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbàlagbà tí wọ́n fẹ́ rin ìrìn-àjò, nítòsí tàbí ọ̀nà jíjìn, láti lọ kí ẹbí, láti rí ibi tuntun tàbí láti sinmi díẹ̀. Wọ́n sábà máa ń rìn díẹ̀díẹ̀, wọ́n sì lè ní àìní ìlera bí oògùn ojoojúmọ́ tàbí àìlèrìn jìnnà.",
    startingPoint: "Wọ́n ti rin ìrìn-àjò rí, nígbà púpọ̀ pẹ̀lú máàpù ìwé, aṣojú ìrìn-àjò (travel agent), tàbí ẹbí tí ó ṣètò fún wọn. Ọ̀pọ̀ ń lo smartphone, ṣùgbọ́n wọn kò tíì lo olùrànlọ́wọ́ AI, ìtọ́sọ́nà lórí máàpù, app ìtúmọ̀ tàbí pínpín ibi tí wọ́n wà rí.",
    gap: "Ṣíṣètò ìrìn-àjò lè dà bí ẹrù tí ó wúwo jù, àṣìṣe bí ID tí kò tọ́, ibi ìwòran tí ó ti pa, tàbí oògùn tí a gbàgbé sì lè ba ìrìn-àjò jẹ́. Olùrànlọ́wọ́ AI àti irinṣẹ́ fóònù ń ran àwọn àgbàlagbà lọ́wọ́ láti ṣètò bí ó ti wù wọ́n, kí wọ́n sì rìn fúnra wọn, níwọ̀n ìgbà tí wọ́n bá ń ṣàyẹ̀wò òtítọ́ lórí ojú-òpó ìjọba tàbí ti àjọ náà, tí wọ́n sì ń ṣọ́ra fún jìbìtì ìrìn-àjò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn, gbólóhùn kúkúrú, àti ìgbésẹ̀ tí ó tóbi tí ó sì rọrùn",
      "Ẹ̀rọ: smartphone tí ó ní íńtánẹ́ẹ̀tì, app máàpù àti app ìtúmọ̀",
      "Àkókò: nǹkan bí ìṣẹ́jú 5 fún ẹ̀kọ́ kọ̀ọ̀kan, láìkánjú",
      "Òfin ìrìn-àjò, àkókò ìṣísílẹ̀ àti iye owó ń yí padà; àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò lórí ojú-òpó ìjọba bí tsa.gov",
      "Ìlera àti ìpamọ́: oògùn ń tẹ̀lé ìmọ̀ràn oníṣègùn-oògùn (pharmacist); kò sí ìṣòwò báńkì lórí Wi-Fi gbogbo ènìyàn"
    ],
    prerequisites: "Ó dára láti kọ́kọ́ ṣe \"AI fún Àwọn Àgbàlagbà: Lílo Olùrànlọ́wọ́ AI\", ṣùgbọ́n kò pọn dandan."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú olùrànlọ́wọ́ AI ọ̀fẹ́", action: "béèrè ètò ìrìn-àjò ọjọ́ dé ọjọ́ tí ó sọ ibi, ìgbà, àwọn tí ń lọ, ohun tí o fẹ́ràn àti bí o ṣe ń yára tó", standard: "pẹ̀lú àkókò ìsinmi, láìsí ohun tí ó pọ̀ ju ohun tí o lè ṣe láìrẹ̀wẹ̀sì" },
    { id: "O2", condition: "Tí a bá fún ọ ní ètò ìrìn-àjò láti ọ̀dọ̀ AI", action: "ṣàyẹ̀wò àwọn òtítọ́ pàtàkì bí àkókò ìṣísílẹ̀, iye owó àti òfin ID lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti àjọ náà", standard: "kí o ṣàyẹ̀wò ó kéré tán òtítọ́ mẹ́ta kí o tó gbẹ́kẹ̀lé wọn" },
    { id: "O3", condition: "Tí o bá mọ ìrìn-àjò rẹ àti àìní ìlera rẹ", action: "béèrè àkọsílẹ̀ ẹrù tí a pín sí ìsọ̀rí, tí ó ní àwọn oògùn rẹ àti ID rẹ", standard: "pẹ̀lú oògùn àti ID nínú àpò ọwọ́ rẹ" },
    { id: "O4", condition: "Pẹ̀lú app máàpù lórí fóònù rẹ", action: "gba ìtọ́sọ́nà fún rírìn, wíwakọ̀ tàbí ọkọ̀ èrò, kí o sì tẹ̀lé ohùn tí ń sọ ibi tí o máa yà", standard: "pẹ̀lú hòtẹ́ẹ̀lì rẹ tí o ti fi pamọ́ bí ibi àyànfẹ́" },
    { id: "O5", condition: "Nígbà tí o bá nílò èdè míì", action: "lo app ìtúmọ̀ láti ka àmì ìkọ̀wé tàbí láti ní ìjíròrò kékeré", standard: "pẹ̀lú àwọn àìní pàtàkì, bí àléjì, tí o ti kọ sílẹ̀ ṣáájú tí òṣìṣẹ́ sì ti ṣàyẹ̀wò rẹ̀" },
    { id: "O6", condition: "Ṣáájú àti nígbà ìrìn-àjò", action: "pín ètò rẹ pẹ̀lú ẹbí, kí o sì dá jìbìtì ìrìn-àjò mọ̀", standard: "kí o máa ṣe ìforúkọsílẹ̀ (booking) nìkan láti ojú-òpó ìjọba tàbí ti àjọ náà, tàbí láti ọ̀dọ̀ aṣojú tí o gbẹ́kẹ̀lé" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò ìrìn-àjò rẹ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ṣíṣe ètò ìrìn-àjò onírọ̀rùn pẹ̀lú AI",
          minutes: 5,
          goal: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún ètò ìrìn-àjò ọjọ́ dé ọjọ́ tí ó bá bí o ṣe ń yára tó mu.",
          text: [
            "Ètò ìrìn-àjò (itinerary) jẹ́ ètò ọjọ́ dé ọjọ́ fún ìrìn-àjò kan. Olùrànlọ́wọ́ AI lè kọ àkọ́pẹrẹ rẹ̀ láàárín ìṣẹ́jú-àáyá díẹ̀, ó sì lè yí i padà ní iye ìgbà tí o bá fẹ́.",
            "Sọ fún un ibi, ìgbà, iye ọjọ́, àwọn tí ń lọ, àti ohun tí o nílò: \"Ṣètò ìrìn-àjò ọjọ́ mẹ́ta onírọ̀rùn sí Savannah, Georgia ní oṣù April fún ènìyàn méjì tí wọ́n wà ní ọdún 70 sí 79. A fẹ́ràn ìtàn àti ọgbà òdòdó, a ń rìn díẹ̀díẹ̀, a sì fẹ́ sinmi ní ọ̀sán ọjọ́ kọ̀ọ̀kan. Kò gbọdọ̀ ju ohun méjì lọ lójúmọ́.\"",
            "Béèrè ìyípadà títí yóò fi bá ọ mu: \"Fi ibi tí a ti lè jókòó jẹun ọ̀sán kún un nítòsí ohun kọ̀ọ̀kan ní òwúrọ̀.\" \"Àwọn ibi wo ló ní ẹ̀rọ agbéniga (elevator), tàbí tí ó rọrùn fún ẹni tí ń lo ọ̀pá ìtìlẹ̀?\""
          ],
          steps: ["Sọ ibi, ìgbà àti iye ọjọ́.", "Sọ àwọn tí ń lọ àti ohun tí ẹ fẹ́ràn.", "Sọ bí o ṣe ń yára tó àti àìní èyíkéyìí, bí ìsinmi tàbí ìrìn tí ó rọrùn.", "Béèrè ìyípadà títí yóò fi bá ọ mu."],
          words: [["Itinerary (ètò ìrìn-àjò)", "ètò ọjọ́ dé ọjọ́ fún ìrìn-àjò kan."], ["Accessible (ó rọrùn láti dé)", "ó rọrùn láti dé àti láti lò fún àwọn tí kò lè rìn dáadáa, tí kò gbọ́ràn dáadáa tàbí tí kò ríran dáadáa."]],
          slides: [
            { title: "Ètò láàárín ìṣẹ́jú-àáyá díẹ̀", bullets: ["Itinerary jẹ́ ètò ọjọ́ dé ọjọ́", "AI kọ àkọ́pẹrẹ, ìwọ ló ń tún un ṣe"] },
            { title: "Sọ fún olùrànlọ́wọ́ náà", bullets: ["Ibi, ìgbà, iye ọjọ́", "Àwọn tí ń lọ àti ohun tí ẹ fẹ́ràn", "Bí o ṣe ń yára tó àti àìní rẹ"] },
            { title: "Jẹ́ kí ó bá ọ mu", bullets: ["\"Fi ìsinmi kún un ní ọ̀sán ọjọ́ kọ̀ọ̀kan.\"", "\"Àwọn ibi wo ló rọrùn fún ẹni tí ń lo ọ̀pá ìtìlẹ̀?\""] }
          ],
          tryIt: "Yan ìrìn-àjò kan tí o fẹ́ lọ. Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún ètò ìrìn-àjò ọjọ́ mẹ́ta onírọ̀rùn pẹ̀lú bí o ṣe ń yára tó àti àìní rẹ, lẹ́yìn náà béèrè ìyípadà kan.",
          youCanNow: "béèrè lọ́wọ́ AI fún ètò ìrìn-àjò tí ó bá bí o ṣe ń yára tó àti àìní rẹ mu.",
          quickCheck: [
            { objective: "O1", q: "Kí ni itinerary (ètò ìrìn-àjò)?", options: ["Àkọsílẹ̀ ẹrù", "Ètò ọjọ́ dé ọjọ́ fún ìrìn-àjò kan", "Tíkẹ́ẹ̀tì ọkọ̀ òfurufú", "Fọ́ọ̀mù ìdánilójú (insurance) ìrìn-àjò"], answer: 1, why: "Itinerary jẹ́ ètò ìrìn-àjò ọjọ́ dé ọjọ́ tí AI lè kọ, tí ó sì lè yí padà." },
            { objective: "O1", q: "Ètò AI ní ohun mẹ́rin lójúmọ́, ó sì máa ń rẹ̀ ọ́ kíákíá. Kí ni o máa béèrè?", options: ["\"Ṣètò ìlú míì.\"", "Kò sí nǹkan; o máa fara dà á", "\"Mú un gùn sí i.\"", "\"Kò gbọdọ̀ ju ohun méjì lọ lójúmọ́, pẹ̀lú ìsinmi ní ọ̀sán ọjọ́ kọ̀ọ̀kan.\""], answer: 3, why: "Béèrè ìyípadà títí ètò náà yóò fi bá bí o ṣe ń yára tó àti àìní rẹ mu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ṣíṣàyẹ̀wò òtítọ́ ìrìn-àjò lórí ojú-òpó ìjọba tàbí ti àjọ náà",
          minutes: 5,
          goal: "Ṣàyẹ̀wò àwọn òtítọ́ pàtàkì nínú ètò ìrìn-àjò AI kí o tó gbẹ́kẹ̀lé wọn.",
          text: [
            "Ètò ìrìn-àjò láti ọ̀dọ̀ AI lè ní àṣìṣe: ilé ìkóhun-ìṣẹ̀ǹbáyé-sí (museum) tí ó ti pa, àkókò ìṣísílẹ̀ àtijọ́, iye owó tí kò tọ́, tàbí òfin tí ó ti yí padà. Máa ṣàyẹ̀wò àwọn òtítọ́ tí ó lè ba ìrìn-àjò rẹ jẹ́ nígbà gbogbo.",
            "Ṣàyẹ̀wò àkókò ìṣísílẹ̀ àti iye owó lórí ojú-òpó wẹ́ẹ̀bù ibẹ̀ fúnra rẹ̀. Ṣàyẹ̀wò àkókò ọkọ̀ òfurufú àti ọkọ̀ ojú-irin lọ́dọ̀ ilé-iṣẹ́ ọkọ̀ náà. Nípa ID: láti May 7, 2025, àwọn tí ń wọ ọkọ̀ òfurufú nínú United States nílò ìwé-àṣẹ ìwakọ̀ tàbí káàdì ID tí ó bá òfin REAL ID mu, tàbí ID míì tí wọ́n gbà bí ìwé ìrìnnà (passport). Ojú-òpó wẹ́ẹ̀bù TSA, tsa.gov, ṣe àkọsílẹ̀ gbogbo ID tí wọ́n gbà.",
            "Béèrè lọ́wọ́ olùrànlọ́wọ́ náà: \"Kí ni nínú ètò yìí ni mo yẹ kí n tún ṣàyẹ̀wò?\" Ó lè tọ́ka sí àwọn òtítọ́ tí ó ṣe pàtàkì, ṣùgbọ́n ìwọ ni o máa ṣàyẹ̀wò wọn lórí ojú-òpó ìjọba tàbí ti àjọ náà."
          ],
          steps: ["Béèrè lọ́wọ́ AI àwọn òtítọ́ tí o yẹ kí o tún ṣàyẹ̀wò.", "Ṣàyẹ̀wò àkókò ìṣísílẹ̀ àti iye owó lórí ojú-òpó ibi kọ̀ọ̀kan fúnra rẹ̀.", "Ṣàyẹ̀wò àkókò ọkọ̀ òfurufú tàbí ọkọ̀ ojú-irin lọ́dọ̀ ilé-iṣẹ́ náà.", "Ṣàyẹ̀wò òfin ID lórí tsa.gov kí o tó wọ ọkọ̀ òfurufú."],
          words: [["REAL ID", "ìwé-àṣẹ ìwakọ̀ tàbí ID ìpínlẹ̀ tí ó bá òfin ìjọba àpapọ̀ mu; ó sábà máa ń ní ìràwọ̀ ní igun rẹ̀."], ["TSA", "Transportation Security Administration, àjọ tí ń yẹ àwọn arìnrìn-àjò wò ní pápákọ̀ òfurufú US."]],
          slides: [
            { title: "Ètò AI lè ti di àtijọ́", bullets: ["Ibi tí ó ti pa", "Àkókò ìṣísílẹ̀ tàbí iye owó àtijọ́", "Òfin tí ó ti yí padà"] },
            { title: "Ṣàyẹ̀wò lórí ojú-òpó ìjọba tàbí ti àjọ náà", bullets: ["Àkókò àti iye owó: ojú-òpó ibẹ̀ fúnra rẹ̀", "Ọkọ̀ òfurufú àti ọkọ̀ ojú-irin: ilé-iṣẹ́ náà", "Òfin ID: tsa.gov"] },
            { title: "Wíwọ ọkọ̀ òfurufú nínú US", bullets: ["REAL ID tàbí ID míì tí wọ́n gbà ni a nílò láti May 2025", "Wọ́n gba ìwé ìrìnnà (passport)", "Wo gbogbo àkọsílẹ̀ náà lórí tsa.gov"] }
          ],
          sources: [{ name: "TSA: REAL ID", url: "https://www.tsa.gov/real-id" }],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ náà àwọn òtítọ́ nínú ètò ìrìn-àjò rẹ tí o yẹ kí o tún ṣàyẹ̀wò. Lẹ́yìn náà ṣàyẹ̀wò àkókò ìṣísílẹ̀ ibi kan lórí ojú-òpó rẹ̀ fúnra rẹ̀, kí o sì ṣàyẹ̀wò bóyá ID rẹ bá òfin REAL ID mu (wá ìràwọ̀ náà) tàbí ID míì tí tsa.gov gbà.",
          youCanNow: "ṣàyẹ̀wò àwọn òtítọ́ pàtàkì nínú ètò ìrìn-àjò AI lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti àjọ náà.",
          quickCheck: [
            { objective: "O2", q: "Níbo ni o ti máa ṣàyẹ̀wò àkókò ìṣísílẹ̀ museum kan?", options: ["Lórí ojú-òpó wẹ́ẹ̀bù museum náà fúnra rẹ̀", "Nínú ìdáhùn AI nìkan", "Lórí ojú-òpó ìjíròrò àwọn arìnrìn-àjò", "Nínú ìwé ìtọ́sọ́nà àtijọ́"], answer: 0, why: "AI lè fún ọ ní àkókò àtijọ́; ojú-òpó ibẹ̀ fúnra rẹ̀ ní àkókò tí ó wà báyìí." },
            { objective: "O2", q: "O fẹ́ wọ ọkọ̀ òfurufú nínú US, kò sì dá ọ lójú bóyá wọ́n máa gba ID rẹ. Kí ni o máa ṣe?", options: ["Retí pé kò sí wàhálà", "Béèrè lọ́wọ́ AI kí o sì gbà á gbọ́", "Ṣàyẹ̀wò àkọsílẹ̀ ID tí wọ́n gbà lórí tsa.gov", "Mú káàdì ilé-ìkàwé dání"], answer: 2, why: "Ojú-òpó wẹ́ẹ̀bù TSA, tsa.gov, ṣe àkọsílẹ̀ gbogbo ID tí wọ́n gbà fún wíwọ ọkọ̀ òfurufú." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ṣíṣe àkọsílẹ̀ ẹrù tí ó gbọ́n",
          minutes: 4,
          goal: "Béèrè lọ́wọ́ AI fún àkọsílẹ̀ ẹrù tí ó bá ìrìn-àjò rẹ àti àìní ìlera rẹ mu.",
          text: [
            "Àkọsílẹ̀ ẹrù ń dá àníyàn tí gbogbo arìnrìn-àjò mọ̀ dúró: \"Ṣé mo gbàgbé nǹkan kan?\" Béèrè lọ́wọ́ olùrànlọ́wọ́ náà fún àkọsílẹ̀ kan gẹ́gẹ́ bí ìrìn-àjò rẹ, àsìkò ọdún àti àwọn ohun tí o máa ṣe.",
            "Fún àpẹẹrẹ: \"Ṣe àkọsílẹ̀ ẹrù fún ọjọ́ mẹ́ta ní Savannah ní oṣù April. Mo ń lo oògùn lójoojúmọ́, mo sì ń lo gíláàsì ìkàwé àti ẹ̀rọ ìgbọ́ràn. Pín in sí: ìwé pàtàkì, oògùn àti ìlera, aṣọ, àti ẹ̀rọ.\"",
            "Fi oògùn sínú àpò ọwọ́ rẹ nínú àpótí tí wọ́n ti wà tẹ́lẹ̀, pẹ̀lú díẹ̀ sí i bí ìdádúró bá ṣẹlẹ̀, kí o sì mú àkọsílẹ̀ àwọn oògùn rẹ àti nọ́mbà fóònù dókítà rẹ dání. Oníṣègùn-oògùn (pharmacist) rẹ lè gbà ọ́ nímọ̀ràn nípa rírin ìrìn-àjò pẹ̀lú oògùn."
          ],
          steps: ["Sọ fún AI ibi, àsìkò, iye ọjọ́ àti àwọn ohun tí o máa ṣe.", "Sọ àwọn àìní ìlera, bí oògùn tàbí ẹ̀rọ ìgbọ́ràn.", "Ní kí ó pín àkọsílẹ̀ náà sí ìsọ̀rí.", "Fi oògùn àti ID sínú àpò ọwọ́ rẹ."],
          words: [["Àpò ọwọ́ (carry-on bag)", "àpò tí o máa ń mú dání pẹ̀lú rẹ nínú ọkọ̀ òfurufú, bọ́ọ̀sì tàbí ọkọ̀ ojú-irin."]],
          slides: [
            { title: "Kò ní sí ìgbàgbé mọ́", bullets: ["Béèrè lọ́wọ́ AI fún àkọsílẹ̀ ẹrù", "Gẹ́gẹ́ bí ibi, àsìkò àti ohun tí o máa ṣe"] },
            { title: "Pín àkọsílẹ̀ náà sí ìsọ̀rí", bullets: ["Ìwé pàtàkì", "Oògùn àti ìlera", "Aṣọ àti ẹ̀rọ"] },
            { title: "Oògùn ń bá ọ rìn", bullets: ["Nínú àpò ọwọ́ rẹ, nínú àpótí rẹ̀ àkọ́kọ́", "Díẹ̀ sí i fún ìdádúró", "Àkọsílẹ̀ oògùn àti nọ́mbà dókítà rẹ"] }
          ],
          tryIt: "Béèrè lọ́wọ́ olùrànlọ́wọ́ AI fún àkọsílẹ̀ ẹrù tí a pín sí ìsọ̀rí fún ìrìn-àjò rẹ, pẹ̀lú àwọn àìní ìlera rẹ. Fi ohunkóhun tí ó gbàgbé kún un, kí o sì fi àkọsílẹ̀ náà pamọ́ tàbí tẹ̀ ẹ́ jáde.",
          youCanNow: "ṣe àkọsílẹ̀ ẹrù pẹ̀lú AI tí ó ní àwọn àìní ìlera rẹ.",
          quickCheck: [
            { objective: "O3", q: "Kí nìdí tí o fi máa ní kí AI pín àkọsílẹ̀ ẹrù sí ìsọ̀rí?", options: ["Kí àkọsílẹ̀ náà lè gùn sí i", "Kí ó lè rọrùn láti ṣàyẹ̀wò ní apá kọ̀ọ̀kan, bí ìwé pàtàkì àti oògùn", "Kí o lè kó ẹrù díẹ̀", "Kí AI lè rántí ìrìn-àjò rẹ"], answer: 1, why: "Pípín in sí ìwé pàtàkì, oògùn, aṣọ àti ẹ̀rọ ń mú kí àkọsílẹ̀ náà rọrùn láti ṣàyẹ̀wò." },
            { objective: "O3", q: "O ń lo oògùn lójoojúmọ́. Báwo ni o ṣe máa kó o?", options: ["Nínú àpótí ẹrù tí o fi lé wọn lọ́wọ́ (checked suitcase)", "Láìsí àpótí nínú ọ̀rá", "Èyí tí ó tó fún ọjọ́ kọ̀ọ̀kan nìkan", "Nínú àpò ọwọ́ rẹ, nínú àpótí rẹ̀ àkọ́kọ́, pẹ̀lú díẹ̀ sí i"], answer: 3, why: "Fi oògùn sínú àpò ọwọ́ rẹ nínú àpótí rẹ̀ àkọ́kọ́, pẹ̀lú díẹ̀ sí i bí ìdádúró bá ṣẹlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò ìrìn-àjò rẹ",
        questions: [
          { objective: "O1", q: "Kí ni itinerary (ètò ìrìn-àjò)?", options: ["Tíkẹ́ẹ̀tì ọkọ̀ òfurufú", "Àpótí ẹrù", "Ètò ìrìn-àjò ọjọ́ dé ọjọ́", "Ìwé ìrìnnà (passport)"], answer: 2, why: "Itinerary ń ṣàlàyé ọjọ́ kọ̀ọ̀kan nínú ìrìn-àjò." },
          { objective: "O1", q: "Ìbéèrè wo ni yóò mú ètò ìrìn-àjò tí ó dára jù wá?", options: ["\"Ṣètò ìrìn-àjò ọjọ́ 3 onírọ̀rùn sí Savannah ní oṣù April fún ènìyàn méjì ní ọdún 70 sí 79 tí wọ́n fẹ́ràn ọgbà òdòdó, tí wọ́n sì nílò ìsinmi ní ọ̀sán.\"", "\"ìrìn-àjò\"", "\"rírin ìrìn\"", "\"lọ sí ibì kan\""], answer: 0, why: "Ó sọ ibi, ìgbà, àwọn ènìyàn, ohun tí wọ́n fẹ́ràn àti bí wọ́n ṣe ń yára tó." },
          { objective: "O2", q: "AI sọ pé museum kan ń ṣí ní 9 òwúrọ̀. Báwo ni o ṣe máa ṣàyẹ̀wò?", options: ["Fi ọgbọ́n inú dá a", "Gba AI gbọ́", "Béèrè lọ́wọ́ àjèjì", "Lórí ojú-òpó wẹ́ẹ̀bù museum náà fúnra rẹ̀"], answer: 3, why: "Ojú-òpó ibẹ̀ fúnra rẹ̀ ní àkókò tí ó wà báyìí." },
          { objective: "O2", q: "Láti May 2025, láti wọ ọkọ̀ òfurufú nínú US o nílò:", options: ["Káàdì ilé-ìkàwé nìkan", "ID tí ó bá òfin REAL ID mu tàbí ID míì tí wọ́n gbà bí ìwé ìrìnnà (passport)", "Kò sí ID rárá", "Káàdì báńkì"], answer: 1, why: "TSA ń béèrè REAL ID tàbí ID míì tí wọ́n gbà." },
          { objective: "O3", q: "Níbo ni oògùn yẹ kí ó wà nígbà tí o bá ń rin ìrìn-àjò?", options: ["Nínú ẹrù tí o fi lé wọn lọ́wọ́ nìkan", "Nínú àpò ọwọ́ rẹ", "Kí o fi sílẹ̀ nílé", "Nínú àpò àjèjì"], answer: 1, why: "Wíwà pẹ̀lú rẹ ń dènà kí wọ́n sọnù." }
        ]
      }
    },
    {
      name: "Orí 2: Lójú ọ̀nà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Lílo máàpù àti ìtọ́sọ́nà lórí fóònù rẹ",
          minutes: 5,
          goal: "Gba ìtọ́sọ́nà fún rírìn tàbí wíwakọ̀ pẹ̀lú app máàpù.",
          text: [
            "Àwọn app máàpù bí Google Maps àti Apple Maps ń fi ibi tí o wà hàn, àti bí o ṣe máa dé ibi tí o ń lọ, pẹ̀lú ọkọ̀, ní ẹsẹ̀, tàbí pẹ̀lú ọkọ̀ èrò (transit).",
            "Ṣí app máàpù kí o sì tẹ orúkọ ibẹ̀ sínú àpótí ìwádìí, tàbí sọ ọ́ fún olùrànlọ́wọ́ ohùn rẹ: \"Hey Siri, walking directions to Forsyth Park.\" Tẹ Directions, yan rírìn, wíwakọ̀ tàbí transit, lẹ́yìn náà tẹ Start. App náà máa sọ ibi tí o máa yà ní ọ̀kọ̀ọ̀kan.",
            "Ṣáájú ìrìn-àjò, fi hòtẹ́ẹ̀lì rẹ pamọ́ bí ibi àyànfẹ́ (favorite), kí ìpadàbọ̀ lè jẹ́ títẹ̀ ẹ̀ẹ̀kan péré. Ìtọ́sọ́nà ń lo bátìrì fóònù rẹ, nítorí náà mú ẹ̀rọ ìgbaná (charger) tàbí bátìrì kékeré dání."
          ],
          steps: ["Ṣí app máàpù rẹ.", "Tẹ tàbí sọ ibi tí o fẹ́ lọ.", "Tẹ Directions kí o sì yan rírìn, wíwakọ̀ tàbí transit.", "Tẹ Start kí o sì tẹ̀lé ohùn tí ń sọ ibi tí o máa yà.", "Fi hòtẹ́ẹ̀lì rẹ pamọ́ bí ibi àyànfẹ́."],
          words: [["GPS", "ètò tí ó ń jẹ́ kí fóònù rẹ mọ ibi tí o wà lórí máàpù."], ["Transit", "ọkọ̀ èrò fún gbogbo ènìyàn bí bọ́ọ̀sì àti ọkọ̀ ojú-irin."]],
          slides: [
            { title: "Fóònù rẹ mọ ọ̀nà", bullets: ["Google Maps tàbí Apple Maps", "Ọkọ̀, rírìn ní ẹsẹ̀ tàbí transit"] },
            { title: "Gba ìtọ́sọ́nà", bullets: ["Tẹ tàbí sọ orúkọ ibẹ̀", "Tẹ Directions, yan bí o ṣe máa lọ", "Tẹ Start fún ohùn tí ń darí rẹ"] },
            { title: "Ìmọ̀ràn ìrìn-àjò", bullets: ["Fi hòtẹ́ẹ̀lì rẹ pamọ́ bí ibi àyànfẹ́", "Mú charger tàbí bátìrì kékeré dání"] }
          ],
          tryIt: "Lo app máàpù rẹ láti gba ìtọ́sọ́nà rírìn láti ilé rẹ sí ṣọ́ọ̀bù tàbí ọgbà ìṣeré tí ó wà nítòsí. Tẹ Start kí o sì gbọ́ ìtọ́ni àkọ́kọ́.",
          youCanNow: "gba ìtọ́sọ́nà kí o sì tẹ̀lé e pẹ̀lú app máàpù.",
          quickCheck: [
            { objective: "O4", q: "Kí ni Transit túmọ̀ sí nínú app máàpù?", options: ["Rírìn nìkan", "Ọ̀nà ìwakọ̀", "Bọ́ọ̀sì àti ọkọ̀ ojú-irin", "Iye owó takisí"], answer: 2, why: "Transit túmọ̀ sí ọkọ̀ èrò fún gbogbo ènìyàn, bí bọ́ọ̀sì àti ọkọ̀ ojú-irin." },
            { objective: "O4", q: "O ń rìn níta, o sì fẹ́ ọ̀nà tí ó rọrùn láti padà sí hòtẹ́ẹ̀lì rẹ. Kí ni o yẹ kí o ti ṣe ṣáájú ìrìn-àjò?", options: ["Fi hòtẹ́ẹ̀lì pamọ́ bí ibi àyànfẹ́ nínú app máàpù", "Kọ orúkọ hòtẹ́ẹ̀lì sí ọwọ́ rẹ", "Pa fóònù rẹ", "Pa app máàpù rẹ́"], answer: 0, why: "Fífi hòtẹ́ẹ̀lì pamọ́ bí ibi àyànfẹ́ ń mú kí ìpadàbọ̀ jẹ́ títẹ̀ ẹ̀ẹ̀kan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sísọ̀rọ̀ àti kíkàwé ní èdè míì",
          minutes: 5,
          goal: "Lo app ìtúmọ̀ láti ka àmì ìkọ̀wé tàbí láti ní ìjíròrò kékeré.",
          text: [
            "Ṣé o ń rìnrìn-àjò lọ sí òkè-òkun, tàbí o ń pàdé àna tuntun tí ó ń sọ èdè míì? Àwọn app ìtúmọ̀ bí Google Translate àti app Translate ti iPhone lè ràn ọ́ lọ́wọ́.",
            "Tẹ tàbí sọ gbólóhùn kan, ó sì máa fi ìtúmọ̀ rẹ̀ hàn, ó sì máa kà á sókè. Ọ̀nà ìjíròrò (conversation mode) ń jẹ́ kí ènìyàn méjì sọ̀rọ̀ ní ìtẹ̀léra. Ọ̀nà kámẹ́rà (camera mode) ń jẹ́ kí o na fóònù rẹ sí àmì ìkọ̀wé tàbí àkọsílẹ̀ oúnjẹ (menu), kí o sì rí i ní èdè rẹ.",
            "Ìtúmọ̀ dára ṣùgbọ́n kò pé. Fún ọ̀rọ̀ pàtàkì, bí àìní ìlera tàbí àléjì, mú káàdì tí a ti kọ ní èdè ibẹ̀ ṣáájú dání, kí o sì jẹ́ kí òṣìṣẹ́ hòtẹ́ẹ̀lì tàbí ilé-oògùn ṣàyẹ̀wò rẹ̀. Ọ̀pọ̀ app ń jẹ́ kí o gba èdè kan sílẹ̀ (download) kí o tó lọ, kí ó lè ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì."
          ],
          steps: ["Ṣí app ìtúmọ̀ kí o sì yan èdè méjèèjì.", "Tẹ tàbí sọ gbólóhùn rẹ.", "Lo conversation mode láti sọ̀rọ̀ ní ìtẹ̀léra.", "Lo camera mode fún àmì ìkọ̀wé àti menu.", "Gba èdè náà sílẹ̀ kí o tó rin ìrìn-àjò."],
          words: [["Túmọ̀ (translate)", "yí ọ̀rọ̀ padà láti èdè kan sí èdè míì."], ["Offline (láìsí íńtánẹ́ẹ̀tì)", "ṣíṣiṣẹ́ láìsí ìsopọ̀ íńtánẹ́ẹ̀tì."]],
          slides: [
            { title: "Ògbufọ̀ inú àpò rẹ", bullets: ["Google Translate tàbí app Translate", "Tẹ̀ ẹ́, sọ ọ́, tàbí lo kámẹ́rà"] },
            { title: "Ọ̀nà mẹ́ta láti lò ó", bullets: ["Sọ gbólóhùn kan", "Conversation mode: ẹ máa sọ̀rọ̀ ní ìtẹ̀léra", "Camera mode: àmì ìkọ̀wé àti menu"] },
            { title: "Múra sílẹ̀", bullets: ["Kò pé fún ọ̀rọ̀ ìlera", "Mú káàdì àléjì tàbí ìlera tí a kọ sílẹ̀ dání", "Gba èdè náà sílẹ̀ kí o tó lọ"] }
          ],
          tryIt: "Ṣí app ìtúmọ̀ kan. Túmọ̀ \"Jọ̀ọ́, níbo ni ilé ìgbọ̀nsẹ̀ wà?\" sí èdè tí o lè nílò, kí o sì gbọ́ bí ó ṣe ń kà á sókè.",
          youCanNow: "lo app ìtúmọ̀ láti sọ̀rọ̀, ka àmì ìkọ̀wé àti menu, kí o sì múra sílẹ̀ fún àwọn àìní pàtàkì.",
          quickCheck: [
            { objective: "O5", q: "Kí ni camera mode nínú app ìtúmọ̀ ń ṣe?", options: ["Ó ń ya fọ́tò ìrìn-àjò", "Ó ń fi àmì ìkọ̀wé tàbí menu hàn ní èdè rẹ nígbà tí o bá na fóònù sí i", "Ó ń gba ìpè fídíò sílẹ̀", "Ó ń wá hòtẹ́ẹ̀lì rẹ"], answer: 1, why: "Camera mode ń túmọ̀ ohun tí kámẹ́rà fóònù rí, bí àmì ìkọ̀wé àti menu." },
            { objective: "O5", q: "O máa wà níbi tí kò sí íńtánẹ́ẹ̀tì. Kí ni o máa ṣe kí o tó lọ?", options: ["Kò sí nǹkan; app náà máa ń ṣiṣẹ́ nígbà gbogbo", "Ra ìwé atúmọ̀-èdè nìkan", "Gba èdè náà sílẹ̀ nínú app", "Pa app náà rẹ́"], answer: 2, why: "Ọ̀pọ̀ app ń jẹ́ kí o gba èdè sílẹ̀ kí wọ́n lè ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwà láìléwu àti níbàáṣepọ̀ nígbà ìrìn-àjò",
          minutes: 5,
          goal: "Pín ètò rẹ àti ibi tí o wà pẹ̀lú ẹbí, kí o sì yẹra fún jìbìtì ìrìn-àjò.",
          text: [
            "Jẹ́ kí ẹbí mọ ibi tí o wà. Pín ètò ìrìn-àjò rẹ pẹ̀lú ẹnìkan nínú ẹbí, kí o sì ronú nípa pínpín ibi tí o wà láti fóònù rẹ fún àkókò ìrìn-àjò náà (lórí iPhone, app Find My; lórí Android, pínpín ibi tí o wà nínú Google Maps). O lè dá pínpín náà dúró nígbàkígbà.",
            "Ṣọ́ra fún jìbìtì ìrìn-àjò: ojú-òpó ìforúkọsílẹ̀ (booking) èké, ìpè tí ó sọ pé o \"jẹ ẹ̀bùn\" ìrìn-àjò, àti ọ̀rọ̀ nípa ìṣòro ọkọ̀ òfurufú rẹ tí ó ní kí o pe nọ́mbà àjèjì tàbí kí o sanwó. Ṣe booking láti ojú-òpó ilé-iṣẹ́ ọkọ̀ òfurufú, hòtẹ́ẹ̀lì tàbí ọkọ̀ ojú-irin fúnra wọn tàbí láti ọ̀dọ̀ aṣojú tí o gbẹ́kẹ̀lé, kí o sì ṣàyẹ̀wò ọ̀rọ̀ èyíkéyìí nípa pípe nọ́mbà tí ó wà lórí ojú-òpó wẹ́ẹ̀bù wọn gidi.",
            "Fi ẹ̀dà ID rẹ àti àkọsílẹ̀ oògùn rẹ pamọ́ sí ibi tí kò léwu, yàtọ̀ sí àwọn ti àkọ́kọ́, kí o sì yẹra fún títẹ ìsọfúnni báńkì lórí Wi-Fi gbogbo ènìyàn ní hòtẹ́ẹ̀lì tàbí pápákọ̀ òfurufú."
          ],
          steps: ["Pín ètò ìrìn-àjò rẹ pẹ̀lú ẹnìkan nínú ẹbí.", "Tan pínpín ibi tí o wà fún ìrìn-àjò náà tí o bá fẹ́.", "Ṣe booking nìkan láti ojú-òpó ìjọba tàbí ti ilé-iṣẹ́ náà, tàbí aṣojú tí o gbẹ́kẹ̀lé.", "Ṣàyẹ̀wò ọ̀rọ̀ ìrìn-àjò lórí nọ́mbà ilé-iṣẹ́ náà gidi.", "Yẹra fún iṣẹ́ báńkì lórí Wi-Fi gbogbo ènìyàn."],
          words: [["Pínpín ibi tí o wà (location sharing)", "jíjẹ́ kí àwọn ènìyàn tí o yàn rí ibi tí fóònù rẹ wà lórí máàpù."], ["Wi-Fi gbogbo ènìyàn (public Wi-Fi)", "íńtánẹ́ẹ̀tì aláìlókùn ọ̀fẹ́ ní àwọn ibi bí hòtẹ́ẹ̀lì àti pápákọ̀ òfurufú, tí àwọn míì lè máa lò pẹ̀lú rẹ."]],
          slides: [
            { title: "Jẹ́ kí ẹbí mọ̀", bullets: ["Pín ètò ìrìn-àjò rẹ", "Pín ibi tí o wà fún ìrìn-àjò náà", "Dá pínpín dúró nígbàkígbà"] },
            { title: "Jìbìtì ìrìn-àjò", bullets: ["Ojú-òpó booking èké", "\"O ti jẹ ẹ̀bùn ìrìn-àjò!\"", "Ọ̀rọ̀ nípa ìṣòro ọkọ̀ òfurufú pẹ̀lú nọ́mbà àjèjì"] },
            { title: "Wà láìléwu", bullets: ["Ṣe booking lórí ojú-òpó ìjọba tàbí ti ilé-iṣẹ́ náà", "Pe nọ́mbà láti ojú-òpó wẹ́ẹ̀bù gidi", "Kò sí iṣẹ́ báńkì lórí Wi-Fi gbogbo ènìyàn"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò ìrìn-àjò ọjọ́ mẹ́ta rẹ tí kò kánjú, tí ó ní àkókò ìsinmi, àkọsílẹ̀ ẹrù rẹ tí ó ní oògùn àti ID, àti òtítọ́ mẹ́ta tí o ti ṣàyẹ̀wò lórí ojú-òpó wẹ́ẹ̀bù ìjọba tàbí ti àjọ náà. Pín ètò náà pẹ̀lú ẹnìkan nínú ẹbí rẹ.",
          youCanNow: "ṣètò ìrìn-àjò pẹ̀lú AI, ṣàyẹ̀wò rẹ̀, kó ẹrù fún un, rí ọ̀nà rẹ, kí o sì wà láìléwu àti níbàáṣepọ̀.",
          quickCheck: [
            { objective: "O6", q: "Kí ni pínpín ibi tí o wà (location sharing) ń ṣe?", options: ["Ó ń fi ibi tí o wà han gbogbo ènìyàn lórí íńtánẹ́ẹ̀tì", "Ó ń jẹ́ kí ẹbí tí o yàn rí ibi tí fóònù rẹ wà", "Ó ń ṣe booking hòtẹ́ẹ̀lì rẹ", "Ó ń tan GPS fún àwọn àjèjì"], answer: 1, why: "Location sharing ń fi ibi tí fóònù rẹ wà han àwọn ènìyàn tí o yàn, o sì lè dá a dúró nígbàkígbà." },
            { objective: "O6", q: "Ojú-òpó wẹ́ẹ̀bù kan fún ọ ní hòtẹ́ẹ̀lì rẹ ní ìdajì owó tí o bá san án nípasẹ̀ wire transfer lónìí. Kí ni o máa ṣe?", options: ["San án kíákíá kí ó tó parí", "Fi ìsọfúnni báńkì rẹ ránṣẹ́", "Béèrè lọ́wọ́ ojú-òpó náà bóyá òótọ́ ni", "Ṣe booking láti ojú-òpó hòtẹ́ẹ̀lì náà fúnra rẹ̀ tàbí aṣojú tí o gbẹ́kẹ̀lé"], answer: 3, why: "Ojú-òpó booking èké pọ̀; ṣe booking nìkan láti ojú-òpó ilé-iṣẹ́ náà gidi tàbí aṣojú tí o gbẹ́kẹ̀lé." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Lójú ọ̀nà",
        questions: [
          { objective: "O4", q: "Nínú app máàpù, lẹ́yìn tí o bá ti yan ibi tí o ń lọ, o máa tẹ:", options: ["Pín ọ̀rọ̀ aṣínà", "Pa rẹ́ (Delete)", "Kámẹ́rà", "Directions, lẹ́yìn náà Start"], answer: 3, why: "Directions àti Start ló ń bẹ̀rẹ̀ ìtọ́sọ́nà pẹ̀lú ohùn." },
          { objective: "O4", q: "Kí nìdí tí o fi máa fi hòtẹ́ẹ̀lì rẹ pamọ́ bí ibi àyànfẹ́?", options: ["Ìpadàbọ̀ máa jẹ́ títẹ̀ ẹ̀ẹ̀kan", "Ó ń mú kí yàrá dín owó kù", "Ó ń fagi lé booking", "Ó ń fi ọ̀rọ̀ aṣínà rẹ ránṣẹ́"], answer: 0, why: "Ibi àyànfẹ́ ń mú kí ó yára láti padà síbẹ̀." },
          { objective: "O5", q: "Camera mode nínú app ìtúmọ̀ ń jẹ́ kí o:", options: ["Pe ilé", "Ya fọ́tò ara rẹ (selfie)", "Na fóònù sí àmì ìkọ̀wé tàbí menu kí o sì kà á ní èdè rẹ", "San owó oúnjẹ"], answer: 2, why: "Ó ń túmọ̀ ọ̀rọ̀ tí kámẹ́rà rí." },
          { objective: "O5", q: "Fún àléjì oúnjẹ tí ó le ní òkè-òkun, ètò tí ó dára jù ni:", options: ["Fi ọgbọ́n inú dá a", "Gbára lé app nìkan ní àkókò náà", "Má sọ nǹkan", "Mú káàdì tí a kọ ní èdè ibẹ̀ dání kí òṣìṣẹ́ sì ṣàyẹ̀wò rẹ̀"], answer: 3, why: "App ìtúmọ̀ kò pé fún àìní ìlera." },
          { objective: "O6", q: "Ọ̀rọ̀ ìránṣẹ́ kan sọ pé ìṣòro wà pẹ̀lú ọkọ̀ òfurufú rẹ, ó sì ní kí o pe nọ́mbà tí ó wà nínú rẹ̀. O máa:", options: ["Sanwó lẹ́sẹ̀kẹsẹ̀", "Pe nọ́mbà tí ó wà nínú ọ̀rọ̀ náà", "Pe nọ́mbà tí ó wà lórí ojú-òpó wẹ́ẹ̀bù ilé-iṣẹ́ ọkọ̀ òfurufú náà gidi dípò rẹ̀", "Fi nọ́mbà káàdì rẹ ránṣẹ́"], answer: 2, why: "Nọ́mbà gidi kò léwu; nọ́mbà inú ọ̀rọ̀ ìránṣẹ́ lè jẹ́ jìbìtì." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: AI gẹ́gẹ́ bí Alábàárìn Ìrìn-àjò",
    questions: [
      { objective: "O1", q: "Olùrànlọ́wọ́ AI lè ran ìrìn-àjò lọ́wọ́ nípa:", options: ["Rírà tíkẹ́ẹ̀tì láìsí ìwọ", "Kíkọ àkọ́pẹrẹ ètò ọjọ́ dé ọjọ́", "Ṣíṣe ìlérí iye owó", "Kíkó ẹrù rẹ"], answer: 1, why: "Ó ń kọ àkọ́pẹrẹ ètò tí ìwọ yóò tún ṣe, tí ìwọ yóò sì ṣàyẹ̀wò." },
      { objective: "O1", q: "Sísọ bí o ṣe ń yára tó àti àìní rẹ fún AI ń ràn án lọ́wọ́ láti:", options: ["Ṣe ètò tí ó bá ọ mu", "Gba owó díẹ̀", "Ṣe booking hòtẹ́ẹ̀lì", "Pe ẹbí"], answer: 0, why: "Àlàyé kíkún ń mú kí ètò náà ṣeé ṣe." },
      { objective: "O1", q: "\"Accessible\" túmọ̀ sí:", options: ["Ó rọrùn láti lò fún àwọn tí kò lè rìn, gbọ́ràn tàbí ríran dáadáa", "Ó wọ́n", "Ó jìnnà", "Ó ti pa"], answer: 0, why: "Ibi tí ó jẹ́ accessible rọrùn fún gbogbo ènìyàn láti lò." },
      { objective: "O2", q: "Ètò ìrìn-àjò AI lè ní:", options: ["Òtítọ́ pípé nìkan", "Àkókò ìṣísílẹ̀ àtijọ́ tàbí ibi tí ó ti pa", "Ìwé ìrìnnà rẹ", "Tíkẹ́ẹ̀tì gidi"], answer: 1, why: "AI lè ṣàṣìṣe tàbí kí ó ti di àtijọ́." },
      { objective: "O2", q: "Ìbéèrè tí ó dára láti bi AI nípa ètò rẹ ni:", options: ["\"Ṣe booking gbogbo rẹ̀ báyìí.\"", "\"Kí ni ọ̀rọ̀ aṣínà mi?\"", "\"Kí ni nínú ètò yìí ni mo yẹ kí n tún ṣàyẹ̀wò?\"", "\"Sanwó fún mi.\""], answer: 2, why: "Ó ń tọ́ka sí àwọn òtítọ́ tí o máa ṣàyẹ̀wò." },
      { objective: "O2", q: "Níbo ni o ti máa ṣàyẹ̀wò òfin ID fún wíwọ ọkọ̀ òfurufú nínú US?", options: ["Ọ̀rọ̀ ìránṣẹ́ jìbìtì ìrìn-àjò", "Ìpolówó tí ó yọ jáde lójijì (pop-up)", "Ìfiránṣẹ́ lórí ìkànnì àjọlò", "tsa.gov"], answer: 3, why: "TSA ló ń ṣe òfin ID ní pápákọ̀ òfurufú." },
      { objective: "O2", q: "Káàdì REAL ID sábà máa ń ní:", options: ["Barcode nìkan", "Kò ní fọ́tò", "Ìràwọ̀ ní igun rẹ̀", "Ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Ìràwọ̀ náà ló ń fi káàdì tí ó bá òfin REAL ID mu hàn." },
      { objective: "O2", q: "Yàtọ̀ sí REAL ID, ID kan tí wọ́n gbà fún ọkọ̀ òfurufú nínú US ni:", options: ["Ìwé ìrìnnà (passport)", "Káàdì ilé-ìkàwé", "Ìwé-ẹ̀rí rírà ọjà", "Káàdì iṣẹ́"], answer: 0, why: "TSA ń gba ìwé ìrìnnà (passport)." },
      { objective: "O3", q: "Àkọsílẹ̀ ẹrù tí a pín sí ìsọ̀rí lè ní apá fún:", options: ["Kò sí nǹkan", "Bàtà nìkan", "Ìpanu nìkan", "Ìwé pàtàkì, oògùn, aṣọ àti ẹ̀rọ"], answer: 3, why: "Pípín in sí ìsọ̀rí ń mú kí ó rọrùn láti ṣàyẹ̀wò." },
      { objective: "O3", q: "Ó yẹ kí a kó oògùn:", options: ["Láìsí àpótí nínú ẹrù tí a fi lé wọn lọ́wọ́", "Sínú àpò ọwọ́ rẹ, nínú àpótí rẹ̀ àkọ́kọ́", "Sílẹ̀ nílé", "Sínú ẹrù ọ̀rẹ́ rẹ"], answer: 1, why: "Jẹ́ kí wọ́n wà pẹ̀lú rẹ, kí orúkọ wọn sì hàn kedere." },
      { objective: "O3", q: "Ta ló lè gbà ọ́ nímọ̀ràn nípa rírin ìrìn-àjò pẹ̀lú oògùn?", options: ["Ojú-òpó wẹ́ẹ̀bù èyíkéyìí", "Oníṣègùn-oògùn (pharmacist) rẹ", "Ìpolówó pop-up", "Àjèjì"], answer: 1, why: "Oníṣègùn-oògùn mọ̀ nípa oògùn." },
      { objective: "O4", q: "GPS ń jẹ́ kí fóònù rẹ:", options: ["Ya fọ́tò", "Túmọ̀ èdè", "San owó ìnáwó", "Mọ ibi tí o wà lórí máàpù"], answer: 3, why: "GPS ń wá ibi tí o wà." },
      { objective: "O4", q: "\"Transit\" nínú app máàpù túmọ̀ sí:", options: ["Bọ́ọ̀sì àti ọkọ̀ ojú-irin", "Rírìn nìkan", "Wíwọ ọkọ̀ òfurufú", "Wíwakọ̀ nìkan"], answer: 0, why: "Transit jẹ́ ọkọ̀ èrò fún gbogbo ènìyàn." },
      { objective: "O4", q: "Ìtọ́sọ́nà ń lo bátìrì, nítorí náà mú dání:", options: ["ID kejì", "Ọ̀rọ̀ aṣínà míì", "Charger tàbí bátìrì kékeré", "Kámẹ́rà"], answer: 2, why: "Ìtọ́sọ́nà ń jẹ bátìrì." },
      { objective: "O5", q: "Conversation mode nínú app ìtúmọ̀:", options: ["Ń pa ohùn", "Ń pe ilé", "Ń ṣe booking hòtẹ́ẹ̀lì", "Ń jẹ́ kí ènìyàn méjì sọ̀rọ̀ ní ìtẹ̀léra"], answer: 3, why: "Ó ń túmọ̀ síwá sẹ́yìn." },
      { objective: "O5", q: "Gbígba èdè sílẹ̀ kí o tó lọ ń jẹ́ kí app náà ṣiṣẹ́:", options: ["Yára sí i lórí Wi-Fi nìkan", "Nílé nìkan", "Láìsí íńtánẹ́ẹ̀tì (offline)", "Kò ní ṣiṣẹ́ láé"], answer: 2, why: "Èdè tí a ti gbà sílẹ̀ ń ṣiṣẹ́ láìsí íńtánẹ́ẹ̀tì." },
      { objective: "O6", q: "Pínpín ibi tí o wà ń jẹ́ kí:", options: ["Àwọn àjèjì máa tọpa rẹ", "Ẹbí tí o yàn rí ibi tí fóònù rẹ wà", "Hòtẹ́ẹ̀lì gba owó púpọ̀ sí i", "Ilé-iṣẹ́ ọkọ̀ òfurufú fagi lé ìrìn-àjò"], answer: 1, why: "Àwọn tí o yàn nìkan ló lè rí i." },
      { objective: "O6", q: "Ìpè kan sọ pé o ti jẹ ẹ̀bùn ìrìn-àjò ọ̀fẹ́ ṣùgbọ́n o gbọ́dọ̀ san owó kan. Èyí jẹ́:", options: ["Ó ṣeé ṣe kí ó jẹ́ jìbìtì", "Ẹ̀bùn gidi", "Òfin owó-orí", "Ohun tí ó wọ́pọ̀"], answer: 0, why: "Ẹ̀bùn tí ó ní kí o sanwó jẹ́ jìbìtì." },
      { objective: "O6", q: "Ọ̀nà tí kò léwu jù láti ṣe booking ìrìn-àjò ni:", options: ["Láti ojú-òpó ìjọba tàbí ti ilé-iṣẹ́ náà, tàbí aṣojú tí o gbẹ́kẹ̀lé", "Láti link inú ọ̀rọ̀ ìránṣẹ́ tí o kò retí", "Láti ìpolówó pop-up", "Nípa fífi gift card ránṣẹ́"], answer: 0, why: "Ojú-òpó gidi ń dènà jìbìtì booking èké." },
      { objective: "O6", q: "Lórí Wi-Fi gbogbo ènìyàn ní pápákọ̀ òfurufú, yẹra fún:", options: ["Kíka ìròyìn", "Títẹ ìsọfúnni báńkì", "Ṣíṣàyẹ̀wò ojú-ọjọ́", "Wíwo máàpù"], answer: 1, why: "Àwọn míì lè máa lo Wi-Fi gbogbo ènìyàn pẹ̀lú rẹ." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 5, 8, 9, 11, 14, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ètò onírọ̀rùn", objective: "O1", notYet: "Kò sí ètò ọjọ́ dé ọjọ́, tàbí ohun tí ó pọ̀ jù láìsí ìsinmi.", meets: "Ètò ọjọ́ mẹ́ta, ọjọ́ dé ọjọ́, tí kò kánjú, pẹ̀lú àkókò ìsinmi.", exceeds: "Ètò náà tún sọ ibi tí a ti lè jókòó tàbí ibi tí ó rọrùn láti dé níbi tí ó bá yẹ." },
      { name: "Àkọsílẹ̀ ẹrù", objective: "O3", notYet: "Kò sí àkọsílẹ̀, tàbí oògùn tàbí ID kò sí nínú rẹ̀.", meets: "Àkọsílẹ̀ ẹrù tí a pín sí ìsọ̀rí, tí ó ní oògùn àti ID.", exceeds: "Ó sọ pé oògùn àti ID wà nínú àpò ọwọ́, pẹ̀lú àkọsílẹ̀ oògùn àti nọ́mbà dókítà." },
      { name: "Òtítọ́ tí a ṣàyẹ̀wò", objective: "O2", notYet: "Òtítọ́ tí a ṣàyẹ̀wò kò tó mẹ́ta, tàbí ó ṣàyẹ̀wò wọn lọ́dọ̀ AI nìkan.", meets: "Òtítọ́ mẹ́ta tí a ṣàyẹ̀wò lórí ojú-òpó ìjọba tàbí ti àjọ náà, bí tsa.gov àti ojú-òpó ibi kan fúnra rẹ̀.", exceeds: "Ó lè sọ ojú-òpó tí òtítọ́ kọ̀ọ̀kan ti wá, ó sì tún ohunkóhun tí kò tọ́ ṣe." },
      { name: "A pín in pẹ̀lú ẹbí", objective: "O6", notYet: "A kò pín ètò náà.", meets: "A pín ètò náà pẹ̀lú ẹnìkan nínú ẹbí.", exceeds: "Ó tún fohùn ṣọ̀kan lórí pínpín ibi tí ó wà fún ìrìn-àjò náà tàbí àkókò láti máa pe ara wọn." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n rin ìrìn-àjò tàbí jáde fún ọjọ́ kan nípa lílo ètò AI wọn láàárín ọjọ́ 60 (ìwádìí lẹ́yìn náà)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ṣàyẹ̀wò òtítọ́ ìrìn-àjò lórí ojú-òpó ìjọba tàbí ti àjọ náà, tàbí pé àwọn yẹra fún jìbìtì ìrìn-àjò",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ míì nínú Seniors and Technology láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Smartphone tí ó ní íńtánẹ́ẹ̀tì, app máàpù (Google Maps tàbí Apple Maps) àti app ìtúmọ̀",
      "Olùrànlọ́wọ́ AI ọ̀fẹ́ (ChatGPT, Microsoft Copilot tàbí Google Gemini)",
      "Ìwé àti kálámù, tàbí àkọsílẹ̀ lórí fóònù, fún ètò náà àti àkọsílẹ̀ ẹrù",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àkókò kúkúrú tí kò kánjú: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣètò ìrìn-àjò gidi tàbí ìjáde ọjọ́ kan tí wọ́n máa gbádùn; èyí ń mú kí ìdánrawò náà ní ìtumọ̀.",
      "Fi bí a ṣe ń ṣàyẹ̀wò òtítọ́ kan lórí tsa.gov àti lórí ojú-òpó ibi kan fúnra rẹ̀ hàn lórí ojú-iboju ńlá.",
      "Ṣe ìdánrawò ìtọ́sọ́nà pẹ̀lú ìrìn kúkúrú nítòsí ibi ìpàdé kí àwọn akẹ́kọ̀ọ́ lè gbọ́ ohùn tí ń sọ ibi tí wọ́n máa yà.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé ìbéèrè nípa oògùn ń lọ sọ́dọ̀ oníṣègùn-oògùn wọn, àti láti yẹra fún iṣẹ́ báńkì lórí Wi-Fi gbogbo ènìyàn.",
      "Fi rubric ṣe àmì iṣẹ́ ìkẹyìn, kí o sì fún wọn ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};

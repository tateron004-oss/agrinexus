"use strict";

// Koach Learn course (Yoruba translation of non-profits/nonprofit-volunteer-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-volunteer-management-yo",
  lang: "yo",
  translationOf: "nonprofit-volunteer-management",
  category: "Non Profits",
  name: "Ìṣàkóso Àwọn Olùyọ̀ǹda",
  skills: "Kíkọ àpèjúwe ipa olùyọ̀ǹda, Wíwá àti ṣíṣàyẹ̀wò àwọn olùyọ̀ǹda, Kíkí wọn káàbọ̀ àti kíkọ́ wọn, Ṣíṣe ètò àkókò àti àbójútó, Ìmọrírì àti mímú wọn dúró, Kíkọ àkọsílẹ̀ wákàtí olùyọ̀ǹda",
  outcome: "ṣe ètò olùyọ̀ǹda láti ìbẹ̀rẹ̀ dé òpin: kọ àpèjúwe ipa tó yé, wá àwọn olùyọ̀ǹda kí o sì ṣàyẹ̀wò wọn láìléwu, kí wọn káàbọ̀ kí o sì kọ́ wọn, ṣe ètò àkókò fún wọn kí o sì bójútó wọn, dúpẹ́ lọ́wọ́ wọn lọ́nà tí yóò mú wọn padà wá, kí o sì kọ àkọsílẹ̀ wákàtí wọn.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn olùṣètò olùyọ̀ǹda, òṣìṣẹ́ àjọ aláìlérè, àwọn aṣáájú ṣọ́ọ̀ṣì àti iṣẹ́ ìránṣẹ́, ẹgbẹ́ òbí ní ilé-ìwé, ẹgbẹ́ eré ìdárayá ọ̀dọ́, ilé ìfúnni-lóúnjẹ (food bank) àti ẹnikẹ́ni tí ó gbára lé àwọn olùyọ̀ǹda.",
    "Àwọn olùyọ̀ǹda ń fi àkókò wọn ṣiṣẹ́ lọ́fẹ̀ẹ́, nítorí náà bí o ṣe ń ṣàkóso wọn ló ń pinnu bóyá wọn yóò padà wá. O máa kọ́ bí a ṣe ń kọ àpèjúwe ipa, bí a ṣe ń wá àwọn ènìyàn tó tọ́ kí a sì ṣàyẹ̀wò wọn (pẹ̀lú àyẹ̀wò ìtàn-ẹni fún ipa tó kan àwọn ọmọdé tàbí àgbàlagbà tí ó nílò ààbò), bí a ṣe ń kọ́ wọn, ṣe ètò àkókò fún wọn, bójútó wọn, dúpẹ́ lọ́wọ́ wọn, mú wọn dúró, kí a sì kọ àkọsílẹ̀ wákàtí wọn.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" tí o lè lò fún ipa olùyọ̀ǹda gidi kan. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Fún ìbéèrè nípa òfin, ìbánigbófò àti owó-orí, béèrè lọ́wọ́ akọ́ṣẹ́mọṣẹ́ kí o sì wo àwọn orísun ìjọba tí a dárúkọ nínú àwọn ẹ̀kọ́. (Tí o bá fẹ́ lo AI láti wá àwọn olùyọ̀ǹda, wo ẹ̀kọ́ nípa AI fún wíwá olùyọ̀ǹda.)"
  ],
  finalTask: "Ṣe àpò-iṣẹ́ olùyọ̀ǹda (volunteer kit) fún ipa gidi kan: àpèjúwe ipa, ọ̀rọ̀ ìpè fún olùyọ̀ǹda àti àwọn ìgbésẹ̀ àyẹ̀wò (pẹ̀lú àyẹ̀wò ìtàn-ẹni tí ipa náà bá kan àwọn ọmọdé tàbí àgbàlagbà tí ó nílò ààbò), ìlapa ìpàdé ìfáàráàlẹ̀ ìṣẹ́jú 30, ètò àkókò oṣù kan pẹ̀lú alábòójútó tí a dárúkọ, èrò ìmọrírì méjì, àti ìwé ìforúkọsílẹ̀ tàbí spreadsheet tó rọrùn tí ó ń kọ àkọsílẹ̀ wákàtí.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn olùṣètò olùyọ̀ǹda, òṣìṣẹ́ àjọ aláìlérè, àwọn aṣáájú ṣọ́ọ̀ṣì àti iṣẹ́ ìránṣẹ́, ẹgbẹ́ òbí ní ilé-ìwé, ẹgbẹ́ eré ìdárayá ọ̀dọ́, ilé ìfúnni-lóúnjẹ àti ẹnikẹ́ni tí iṣẹ́ rẹ̀ gbára lé àwọn olùyọ̀ǹda.",
    startingPoint: "Wọ́n ti wá olùyọ̀ǹda tàbí bá wọn ṣiṣẹ́ láìsí ètò kan pàtó, nígbà púpọ̀ nípasẹ̀ ọ̀rọ̀ ẹnu. Díẹ̀ ló ń lo àpèjúwe ipa tí a kọ sílẹ̀, àyẹ̀wò tó bá ewu mu, ìpàdé ìfáàráàlẹ̀ tí a ti ṣètò, tàbí ọ̀nà kan láti kọ àkọsílẹ̀ wákàtí.",
    gap: "Àwọn olùyọ̀ǹda ń fi àkókò wọn ṣiṣẹ́ lọ́fẹ̀ẹ́, nítorí náà ètò tí kò dára, àìsí ìdálẹ́kọ̀ọ́ tàbí àìdúpẹ́ máa ń mú wọn lọ, àyẹ̀wò tí kò lágbára sì lè fi àwọn ọmọdé àti àgbàlagbà tí ó nílò ààbò sínú ewu. Àpò-iṣẹ́ olùyọ̀ǹda tó pé ń ran àwọn àjọ lọ́wọ́ láti mú àwọn olùyọ̀ǹda rere dúró, dáàbò bo àwọn ènìyàn tí wọ́n ń sìn, kí wọ́n sì fi iṣẹ́ wọn hàn àwọn olùfowópamọ́ (funders).",
    constraints: [
      "Àwọn olùṣètò sábà máa ń ṣiṣẹ́ ìdajì-àkókò tàbí jẹ́ olùyọ̀ǹda fúnra wọn; ẹ̀kọ́ ìṣẹ́jú 5",
      "Irinṣẹ́ ọ̀fẹ́ tàbí olówó pọ́ọ́kú: ìwé, spreadsheet, fọ́ọ̀mù ìforúkọsílẹ̀ ọ̀fẹ́",
      "Òfin àyẹ̀wò ìtàn-ẹni yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀, láti ètò sí ètò àti láti ilé-iṣẹ́ ìbánigbófò sí òmíràn; àwọn akẹ́kọ̀ọ́ ń béèrè lọ́wọ́ ilé-iṣẹ́ ìbánigbófò wọn àti agbẹjọ́rò",
      "Ìkọ̀kọ̀: àkọsílẹ̀ olùyọ̀ǹda àti ti àwọn ènìyàn tí a ń sìn wà ní ìkọ̀kọ̀; kò sí orúkọ tàbí fọ́tò ẹnikẹ́ni láìgbàṣẹ",
      "Kò sí ìmọ̀ràn owó-orí; a ń tọ́ka àwọn olùyọ̀ǹda sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún ipa olùyọ̀ǹda kan tí àjọ rẹ nílò", action: "kọ àpèjúwe ipa tí ó sọ ipa rere rẹ̀, àwọn iṣẹ́ náà, àkókò, àwọn ọgbọ́n tí a nílò àti ẹni tí olùyọ̀ǹda náà máa jábọ̀ fún", standard: "pẹ̀lú gbogbo apá márùn-ún àti gbólóhùn ìbẹ̀rẹ̀ nípa ipa rere rẹ̀" },
    { id: "O2", condition: "Tí a bá fún ọ ní ipa olùyọ̀ǹda kan àti àwọn tí ó ń sìn", action: "kọ ọ̀rọ̀ ìpè fún olùyọ̀ǹda kí o sì yan àwọn ìgbésẹ̀ àyẹ̀wò tí ó bá ewu ipa náà mu", standard: "pẹ̀lú ẹlẹ́rìí (references) àti àyẹ̀wò ìtàn-ẹni pẹ̀lú àṣẹ tí a kọ sílẹ̀ fún ipa èyíkéyìí tó kan àwọn ọmọdé tàbí àgbàlagbà tí ó nílò ààbò" },
    { id: "O3", condition: "Fún àwọn olùyọ̀ǹda tuntun nínú ipa rẹ", action: "ṣètò ìpàdé ìfáàráàlẹ̀ ìṣẹ́jú 30 kí o sì kọ́ wọn ní ipa náà ní ìgbésẹ̀ mẹ́rin: ṣàlàyé, fi hàn, jẹ́ kí wọ́n gbìyànjú, kí o sì fún wọn ní èsì", standard: "tí ó ní ààbò, ìkọ̀kọ̀, ìforúkọsílẹ̀ àti bí a ṣe ń fagilé" },
    { id: "O4", condition: "Pẹ̀lú spreadsheet, kàlẹ́ńdà àjọlò tàbí ìwé", action: "ṣe ètò àkókò oṣù kan pẹ̀lú aṣáájú àsìkò-iṣẹ́ tí a dárúkọ, àwọn adípò àti ọ̀rọ̀ ìránnilétí", standard: "tí gbogbo àsìkò-iṣẹ́ ní ènìyàn, tí aṣáájú kan sì wà fún ọ̀kọ̀ọ̀kan" },
    { id: "O5", condition: "Fún àwọn olùyọ̀ǹda tí o ń ṣàkóso", action: "ṣètò ìmọrírì pàtó kí o sì dá àwọn ìdí tí àwọn olùyọ̀ǹda fi máa ń kúrò mọ̀", standard: "pẹ̀lú ọpẹ́ kékeré kan àti àkókò ìmọrírì ńlá kan" },
    { id: "O6", condition: "Fún ipa olùyọ̀ǹda kan", action: "ṣe ìwé ìforúkọsílẹ̀ tàbí spreadsheet tí ó ń kọ àkọsílẹ̀ wákàtí olùyọ̀ǹda, kí o sì lo àpapọ̀ rẹ̀", standard: "tí ó ń kọ orúkọ, ọjọ́, ìbẹ̀rẹ̀, ìparí, wákàtí àti ipa sílẹ̀, tí àkọsílẹ̀ sì wà ní ìkọ̀kọ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Mímú àwọn olùyọ̀ǹda wọlé",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àpèjúwe ipa olùyọ̀ǹda",
          minutes: 5,
          goal: "Kọ àpèjúwe ipa tó yé, tí ó sì fani mọ́ra, fún iṣẹ́ olùyọ̀ǹda kan.",
          text: [
            "Àwọn olùyọ̀ǹda máa ń ṣe dáadáa jù nígbà tí wọ́n bá mọ ohun tí a ń béèrè lọ́wọ́ wọn gan-an. Àpèjúwe ipa dà bí àpèjúwe iṣẹ́ kúkúrú: ó sọ ohun tí ipa náà jẹ́, ìdí tí ó fi ṣe pàtàkì, ohun tí olùyọ̀ǹda máa ṣe, àkókò tí ó nílò, ọgbọ́n tàbí ìwà tí a nílò, ìdálẹ́kọ̀ọ́ tàbí àyẹ̀wò èyíkéyìí, àti ẹni tí wọ́n máa jábọ̀ fún.",
            "Jẹ́ kí ó fani mọ́ra. Bẹ̀rẹ̀ pẹ̀lú ipa rere rẹ̀: \"Ran ìdílé 200 lọ́wọ́ láti rí oúnjẹ ní gbogbo ọjọ́ Àbámẹ́ta.\" Sọ òótọ́ nípa àkókò, títí kan bí ó ṣe pẹ́ tó tí o retí pé kí wọ́n dúró (ayẹyẹ kan, tàbí oṣù mẹ́fà). Fún wọn ní ipa kúkúrú tí ó rọrùn àti àwọn tí ó gùn; ọ̀pọ̀ ènìyàn lè fún ọ ní wákàtí méjì ṣùgbọ́n kì í ṣe ní gbogbo ọ̀sẹ̀.",
            "Kọ àpèjúwe tirẹ̀ fún ipa kọ̀ọ̀kan. Ilé ìfúnni-lóúnjẹ lè ní àwọn akíni-káàbọ̀, àwọn olùtò-ẹrù, àwọn awakọ̀ àti olùrànlọ́wọ́ fún kíkọ dátà sínú kọ̀mpútà, ọ̀kọ̀ọ̀kan pẹ̀lú ohun tí ó nílò tí ó yàtọ̀."
          ],
          steps: ["Dárúkọ ipa náà kí o sì sọ ìdí tí ó fi ṣe pàtàkì.", "Kọ ohun tí olùyọ̀ǹda máa ṣe sílẹ̀.", "Sọ ìgbà wo, fún bí ó ṣe pẹ́ tó, àti fún oṣù mélòó.", "Kọ àwọn ọgbọ́n, ìwà àti òdiwọ̀n ọjọ́-orí èyíkéyìí.", "Kọ ìdálẹ́kọ̀ọ́, àyẹ̀wò àti ẹni tí wọ́n máa jábọ̀ fún."],
          words: [["Àpèjúwe ipa", "àkọsílẹ̀ kúkúrú nípa iṣẹ́ olùyọ̀ǹda: kí ni, ìgbà wo, kí nìdí, àti ohun tí a nílò."], ["Olùṣètò olùyọ̀ǹda", "ẹni tí ó ń wá, ṣètò àti ran àwọn olùyọ̀ǹda lọ́wọ́."]],
          slides: [
            { title: "Àpèjúwe ipa máa ń sọ", bullets: ["Ipa náà àti ìdí tí ó fi ṣe pàtàkì", "Ohun tí wọn yóò ṣe, ìgbà wo àti fún bí ó ṣe pẹ́ tó", "Ọgbọ́n tí a nílò, ìdálẹ́kọ̀ọ́ àti àyẹ̀wò", "Ẹni tí wọ́n máa jábọ̀ fún"] },
            { title: "Jẹ́ kí ó fani mọ́ra", bullets: ["Bẹ̀rẹ̀ pẹ̀lú ipa rere: \"Ran ìdílé 200 lọ́wọ́ ní gbogbo ọjọ́ Àbámẹ́ta\"", "Sọ òótọ́ nípa àkókò", "Fún wọn ní ipa kúkúrú tí ó rọrùn pẹ̀lú"] },
            { title: "Ipa kan, àpèjúwe kan", bullets: ["Akíni-káàbọ̀, olùtò-ẹrù, awakọ̀, kíkọ dátà", "Iṣẹ́ tó yàtọ̀, ohun tí a nílò tó yàtọ̀"] }
          ],
          tryIt: "Yan ipa olùyọ̀ǹda kan tí àjọ rẹ nílò. Kọ àpèjúwe rẹ̀ pẹ̀lú gbogbo apá márùn-ún. Bẹ̀rẹ̀ pẹ̀lú gbólóhùn kan nípa ipa rere rẹ̀.",
          youCanNow: "kọ àpèjúwe ipa tó yé tí ó ń sọ fún àwọn olùyọ̀ǹda ohun tí a ń béèrè gan-an àti ìdí tí ó fi ṣe pàtàkì.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àpèjúwe ipa olùyọ̀ǹda?", options: ["Káàdì ọpẹ́ fún àwọn olùyọ̀ǹda", "Àpèjúwe iṣẹ́ kúkúrú tí ó sọ ohun tí ipa náà jẹ́, ìdí tí ó fi ṣe pàtàkì àti ohun tí a ń béèrè", "Ìwé ìforúkọsílẹ̀", "Fọ́ọ̀mù àyẹ̀wò ìtàn-ẹni"], answer: 1, why: "Àpèjúwe ipa ń sọ fún àwọn olùyọ̀ǹda ohun tí a ń béèrè lọ́wọ́ wọn gan-an, bí àpèjúwe iṣẹ́ kúkúrú." },
            { objective: "O1", q: "Àpèjúwe rẹ sọ pé \"Wá ṣèrànwọ́ nígbà míì.\" Kí ni o máa kọ́kọ́ fi kún un?", options: ["Kò sí nǹkan; ọ̀rọ̀ tí kò ṣe kedere dára jù", "Àkọsílẹ̀ gbogbo òfin tí o ní", "Owó-oṣù olùyọ̀ǹda náà", "Ìgbà wo àti fún bí ó ṣe pẹ́ tó, àti ipa rere tí iṣẹ́ náà ń ṣe"], answer: 3, why: "Àwọn olùyọ̀ǹda nílò òótọ́ nípa àkókò àti ìdí tí ipa náà fi ṣe pàtàkì." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Wíwá àti ṣíṣàyẹ̀wò àwọn olùyọ̀ǹda",
          minutes: 6,
          goal: "Wá àwọn olùyọ̀ǹda fún ipa kan kí o sì yan àwọn ìgbésẹ̀ àyẹ̀wò tó tọ́ fún un.",
          text: [
            "Ìdí tí ó wọ́pọ̀ jù tí àwọn ènìyàn fi ń yọ̀ǹda ara wọn ni pé ẹnìkan béèrè lọ́wọ́ wọn. Béèrè fúnra rẹ, nípasẹ̀ àwọn olùyọ̀ǹda tí o ní báyìí, ilé ìjọsìn, ilé-ìwé, àwọn agbanisíṣẹ́ tí ó ní ètò olùyọ̀ǹda, pátákó ìkéde àdúgbò àti ìkànnì àjọlò (social media). Pín àpèjúwe ipa náà àti ọ̀nà tó rọrùn láti forúkọ sílẹ̀.",
            "Àyẹ̀wò ń dáàbò bo àwọn ènìyàn tí o ń sìn, àwọn olùyọ̀ǹda rẹ àti àjọ rẹ. Jẹ́ kí ó bá ewu ipa náà mu. Gbogbo ipa: fọ́ọ̀mù ìbéèrè pẹ̀lú ìsọfúnni ìkànsí àti ẹni tí a lè pè ní pàjáwìrì, àti ìjíròrò kúkúrú. Àwọn ipa tí ewu wọn ga jù, pàápàá iṣẹ́ èyíkéyìí pẹ̀lú àwọn ọmọdé tàbí àgbàlagbà tí ó nílò ààbò (àwọn àgbà, àwọn ènìyàn tí ó ní àìlera ara), tún nílò àyẹ̀wò ẹlẹ́rìí àti àyẹ̀wò ìtàn-ẹni, tí a ṣe pẹ̀lú àṣẹ tí ẹni náà kọ sílẹ̀, nípasẹ̀ ilé-iṣẹ́ tí a gbẹ́kẹ̀ lé.",
            "Àwọn òfin nípa àyẹ̀wò ìtàn-ẹni fún olùyọ̀ǹda yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀ àti láti ètò sí ètò, ilé-iṣẹ́ ìbánigbófò rẹ sì lè ní ohun tí ó ń béèrè. Béèrè lọ́wọ́ ilé-iṣẹ́ ìbánigbófò rẹ àti agbẹjọ́rò ohun tí ó kàn ọ́. Fi àwọn òfin ààbò kún un pẹ̀lú: fún àpẹẹrẹ, kò sí àgbàlagbà kankan tí ó máa dá wà pẹ̀lú ọmọdé níbi tí a kò ti rí wọn, a sì máa ń jábọ̀ gbogbo ìdààmú fún ẹnì kan tí a dárúkọ."
          ],
          steps: ["Béèrè lọ́wọ́ àwọn ènìyàn fúnra rẹ; lo àwọn olùyọ̀ǹda tí o ní àti àwọn alábàáṣiṣẹ́ àdúgbò.", "Pín àpèjúwe ipa náà àti ọ̀nà ìforúkọsílẹ̀ tó rọrùn.", "Fún gbogbo ipa: fọ́ọ̀mù ìbéèrè, ẹni tí a lè pè ní pàjáwìrì àti ìjíròrò kúkúrú.", "Fún ipa pẹ̀lú ọmọdé tàbí àgbàlagbà tí ó nílò ààbò: ẹlẹ́rìí àti àyẹ̀wò ìtàn-ẹni pẹ̀lú àṣẹ tí a kọ sílẹ̀.", "Ṣàyẹ̀wò òfin ìpínlẹ̀ àti ohun tí ilé-iṣẹ́ ìbánigbófò rẹ ń béèrè.", "Ṣe òfin ààbò, bí: kò sí àgbàlagbà tí ó máa dá wà pẹ̀lú ọmọdé níbi tí a kò ti rí wọn."],
          words: [["Àyẹ̀wò olùyọ̀ǹda (screening)", "àwọn ìgbésẹ̀ tí o ń gbé láti rí i dájú pé olùyọ̀ǹda tọ́, tí kò sì léwu fún ipa kan."], ["Àyẹ̀wò ìtàn-ẹni (background check)", "wíwá inú àkọsílẹ̀ gbogbogbò, bí àkọsílẹ̀ ìwà ọ̀daràn, tí a ṣe pẹ̀lú àṣẹ ẹni náà."], ["Àgbàlagbà tí ó nílò ààbò", "àgbàlagbà tí ó lè nílò ààbò àfikún, bí àwọn àgbà kan tàbí àwọn ènìyàn tí ó ní àìlera ara."]],
          slides: [
            { title: "Wá wọn nípa bíbéèrè", bullets: ["Ọ̀pọ̀ ènìyàn ń yọ̀ǹda nítorí pé ẹnìkan béèrè lọ́wọ́ wọn", "Àwọn olùyọ̀ǹda tí o ní, ilé ìjọsìn, ilé-ìwé", "Agbanisíṣẹ́, pátákó ìkéde àdúgbò, ìkànnì àjọlò"] },
            { title: "Ṣàyẹ̀wò gẹ́gẹ́ bí ewu", bullets: ["Gbogbo ipa: fọ́ọ̀mù ìbéèrè, ẹni ìpè pàjáwìrì, ìjíròrò", "Ọmọdé tàbí àgbàlagbà tí ó nílò ààbò: ẹlẹ́rìí + àyẹ̀wò ìtàn-ẹni", "Nígbà gbogbo pẹ̀lú àṣẹ tí a kọ sílẹ̀"] },
            { title: "Ṣàyẹ̀wò àwọn òfin", bullets: ["Òfin ìpínlẹ̀ yàtọ̀ síra", "Ilé-iṣẹ́ ìbánigbófò rẹ lè ní ohun tí ó ń béèrè", "Béèrè lọ́wọ́ ilé-iṣẹ́ ìbánigbófò rẹ àti agbẹjọ́rò"] },
            { title: "Òfin ààbò", bullets: ["Kò sí àgbàlagbà tí ó máa dá wà pẹ̀lú ọmọdé níbi tí a kò ti rí wọn", "Jábọ̀ gbogbo ìdààmú fún ẹnì kan tí a dárúkọ"] }
          ],
          tryIt: "Fún ipa tí o ṣàpèjúwe ní Ẹ̀kọ́ 1, kọ ọ̀rọ̀ ìpè kúkúrú fún olùyọ̀ǹda, kí o sì kọ ibi mẹ́ta tí o máa pín in sí. Lẹ́yìn náà kọ àwọn ìgbésẹ̀ àyẹ̀wò tí ipa náà nílò, kí o sì ṣàlàyé ìdí rẹ̀ gẹ́gẹ́ bí ewu rẹ̀.",
          youCanNow: "wá àwọn olùyọ̀ǹda fúnra rẹ kí o sì yan àwọn ìgbésẹ̀ àyẹ̀wò tí ó bá ewu ipa kọ̀ọ̀kan mu.",
          quickCheck: [
            { objective: "O2", q: "Kí ni gbogbo ipa olùyọ̀ǹda, kódà èyí tí ewu rẹ̀ kéré, gbọ́dọ̀ ní nínú àyẹ̀wò?", options: ["Fọ́ọ̀mù ìbéèrè pẹ̀lú ìsọfúnni ìkànsí àti ẹni ìpè pàjáwìrì, àti ìjíròrò kúkúrú", "Àyẹ̀wò ìtàn-ẹni fún gbogbo ènìyàn", "Kò sí àyẹ̀wò rárá", "Àyẹ̀wò ìtàn gbèsè (credit check)"], answer: 0, why: "Gbogbo ipa ló ń gba fọ́ọ̀mù ìbéèrè, ẹni ìpè pàjáwìrì àti ìjíròrò kúkúrú; àwọn ipa tí ewu wọn ga ń fi kún un." },
            { objective: "O2", q: "Ipa tuntun kan ní àwọn olùyọ̀ǹda tí ó ń kàwé fún àwọn àgbà ní ilé ìtọ́jú. Kí ni o máa fi kún un?", options: ["Kò sí nǹkan àfikún", "Lẹ́tà ọpẹ́ tí ó gùn jù", "Ẹlẹ́rìí àti àyẹ̀wò ìtàn-ẹni pẹ̀lú àṣẹ tí a kọ sílẹ̀", "Ìfiránṣẹ́ sórí ìkànnì àjọlò nípa àwọn olùgbé ibẹ̀"], answer: 2, why: "Àwọn ipa pẹ̀lú àgbàlagbà tí ó nílò ààbò nílò àyẹ̀wò ẹlẹ́rìí àti àyẹ̀wò ìtàn-ẹni tí a ṣe pẹ̀lú àṣẹ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kíkí àwọn olùyọ̀ǹda káàbọ̀ àti kíkọ́ wọn",
          minutes: 5,
          goal: "Ṣètò ìpàdé ìfáàráàlẹ̀ kúkúrú àti ìdálẹ́kọ̀ọ́ ipa tí ó ń múra àwọn olùyọ̀ǹda tuntun sílẹ̀, tí ó sì ń kí wọn káàbọ̀.",
          text: [
            "Ọjọ́ àkọ́kọ́ ló ń pinnu bóyá ọ̀pọ̀ olùyọ̀ǹda yóò padà wá. Ìkáàbọ̀ (onboarding) ni gbogbo ohun tí ó ń ṣẹlẹ̀ láti ìgbà tí wọ́n bá sọ \"bẹ́ẹ̀ ni\" títí wọn yóò fi ní ìgboyà nínú ipa náà: ọ̀rọ̀ ìkáàbọ̀, ìpàdé ìfáàráàlẹ̀, ìdálẹ́kọ̀ọ́ fún ipa náà àti àsìkò-iṣẹ́ àkọ́kọ́ tí ó ní ọ̀rẹ́.",
            "Ìpàdé ìfáàráàlẹ̀ ń sọ nípa iṣẹ́ àjọ náà àti àwọn tí ẹ ń sìn, ibi tí nǹkan wà, ẹni tí wọ́n lè béèrè lọ́wọ́ rẹ̀, ààbò àti ìgbésẹ̀ pàjáwìrì, òfin ìkọ̀kọ̀ (fún àpẹẹrẹ, kí wọ́n má pín orúkọ tàbí fọ́tò àwọn tí ẹ ń sìn), àti bí wọ́n ṣe ń forúkọ sílẹ̀ àti bí wọ́n ṣe ń fagilé àsìkò-iṣẹ́. Ìdálẹ́kọ̀ọ́ ipa ń fi bí wọ́n ṣe ń ṣe iṣẹ́ náà hàn wọ́n: ṣàlàyé, fi hàn, jẹ́ kí wọ́n gbìyànjú, lẹ́yìn náà fún wọn ní èsì. Àkọsílẹ̀ àyẹ̀wò kúkúrú tàbí fídíò ń ràn wọ́n lọ́wọ́ láti rántí.",
            "Fi olùyọ̀ǹda tuntun ṣe ọ̀rẹ́ (buddy) pẹ̀lú olùyọ̀ǹda tí ó ní ìrírí fún àsìkò-iṣẹ́ àkọ́kọ́ wọn, kí o sì béèrè lọ́wọ́ wọn lẹ́yìn rẹ̀: \"Báwo ló ṣe lọ? Kí ló ṣòro láti yé ọ?\""
          ],
          steps: ["Fi ọ̀rọ̀ ìkáàbọ̀ ránṣẹ́ pẹ̀lú àkókò, ibi àti ẹni tí wọ́n máa béèrè fún.", "Ṣe ìpàdé ìfáàráàlẹ̀: iṣẹ́ àjọ, ibi tí nǹkan wà, ààbò, ìkọ̀kọ̀, ìforúkọsílẹ̀ àti ìfagilé.", "Kọ́ wọn ní ipa náà: ṣàlàyé, fi hàn, jẹ́ kí wọ́n gbìyànjú, fún wọn ní èsì.", "Fún wọn ní àkọsílẹ̀ àyẹ̀wò tó rọrùn.", "Fi wọ́n ṣe ọ̀rẹ́ pẹ̀lú olùyọ̀ǹda kan.", "Béèrè bí ó ṣe lọ lẹ́yìn àsìkò-iṣẹ́ àkọ́kọ́."],
          words: [["Ìkáàbọ̀ (onboarding)", "àwọn ìgbésẹ̀ tí ó ń ran olùyọ̀ǹda tuntun lọ́wọ́ láti bẹ̀rẹ̀ kí ó sì rí i pé a gbà á tọwọ́tẹsẹ̀."], ["Ìpàdé ìfáàráàlẹ̀ (orientation)", "ìpàdé àkọ́kọ́ tí ó ń ṣàlàyé àjọ náà, àwọn òfin àti ààbò."], ["Ìpamọ́ àṣírí (confidentiality)", "fífi ìsọfúnni àdáni nípa àwọn ènìyàn tí o ń sìn pamọ́."]],
          slides: [
            { title: "Ọjọ́ àkọ́kọ́ ṣe pàtàkì", bullets: ["Ọ̀rọ̀ ìkáàbọ̀", "Ìpàdé ìfáàráàlẹ̀", "Ìdálẹ́kọ̀ọ́ ipa", "Àsìkò-iṣẹ́ àkọ́kọ́ tí ó ní ọ̀rẹ́"] },
            { title: "Ìpàdé ìfáàráàlẹ̀ ń sọ nípa", bullets: ["Iṣẹ́ àjọ àti àwọn tí ẹ ń sìn", "Ibi tí nǹkan wà, ẹni tí wọ́n lè béèrè, ààbò", "Òfin ìkọ̀kọ̀", "Ìforúkọsílẹ̀ àti ìfagilé"] },
            { title: "Ìdálẹ́kọ̀ọ́ tí ó ń dúró", bullets: ["Ṣàlàyé, fi hàn, jẹ́ kí wọ́n gbìyànjú, fún wọn ní èsì", "Àkọsílẹ̀ àyẹ̀wò kúkúrú tàbí fídíò"] },
            { title: "Lẹ́yìn àsìkò-iṣẹ́ àkọ́kọ́", bullets: ["Fi wọ́n ṣe ọ̀rẹ́ pẹ̀lú olùyọ̀ǹda kan", "Béèrè: \"Báwo ló ṣe lọ? Kí ló ṣòro láti yé ọ?\""] }
          ],
          tryIt: "Kọ ìlapa ìpàdé ìfáàráàlẹ̀ ìṣẹ́jú 30 fún ipa rẹ, pẹ̀lú àkókò fún apá kọ̀ọ̀kan. Lẹ́yìn náà kọ ìdálẹ́kọ̀ọ́ ipa náà ní ìgbésẹ̀ mẹ́rin: ṣàlàyé, fi hàn, gbìyànjú, èsì.",
          youCanNow: "kí àwọn olùyọ̀ǹda tuntun káàbọ̀ kí o sì kọ́ wọn kí wọ́n lè wà láìléwu, ní ìgboyà, kí wọ́n sì fẹ́ padà wá.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ìkáàbọ̀ (onboarding)?", options: ["Ímeèlì àkọ́kọ́ tí o fi ránṣẹ́ nìkan", "Fífi òpin sí ipa olùyọ̀ǹda kan", "Gbogbo nǹkan láti \"bẹ́ẹ̀ ni\" títí wọn yóò fi ní ìgboyà nínú ipa náà", "Kíka wákàtí olùyọ̀ǹda"], answer: 2, why: "Ìkáàbọ̀ ní ọ̀rọ̀ ìkáàbọ̀, ìpàdé ìfáàráàlẹ̀, ìdálẹ́kọ̀ọ́ ipa àti àsìkò-iṣẹ́ àkọ́kọ́ tí ó ní ọ̀rẹ́." },
            { objective: "O3", q: "Olùyọ̀ǹda tuntun kan máa bẹ̀rẹ̀ ní ọjọ́ Àbámẹ́ta. Kí ló máa ràn án lọ́wọ́ jù ní àsìkò-iṣẹ́ àkọ́kọ́?", options: ["Fi í ṣe ọ̀rẹ́ pẹ̀lú olùyọ̀ǹda tí ó ní ìrírí kí o sì béèrè bí ó ṣe lọ lẹ́yìn rẹ̀", "Fi í sílẹ̀ kí ó dá a mọ̀ fúnra rẹ̀", "Fún un ní iṣẹ́ tí ó le jù", "Fo ìpàdé ìfáàráàlẹ̀ kọjá láti fi àkókò pamọ́"], answer: 0, why: "Ọ̀rẹ́ ń fún wọn ní ẹni tí wọ́n lè béèrè lọ́wọ́ rẹ̀, ìbéèrè lẹ́yìn rẹ̀ sì ń fi ohun tí ó ṣòro láti yé hàn." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Mímú àwọn olùyọ̀ǹda wọlé",
        questions: [
          { objective: "O1", q: "Ọ̀nà wo ló dára jù láti bẹ̀rẹ̀ àpèjúwe ipa olùyọ̀ǹda?", options: ["Pẹ̀lú àwọn òfin", "Pẹ̀lú ipa rere tí iṣẹ́ náà ń ṣe", "Pẹ̀lú ọjọ́ ìparí", "Pẹ̀lú àyẹ̀wò ìtàn-ẹni"], answer: 1, why: "Bíbẹ̀rẹ̀ pẹ̀lú ipa rere ń jẹ́ kí ipa náà fani mọ́ra." },
          { objective: "O2", q: "Kí ni ìdí tí ó wọ́pọ̀ jù tí àwọn ènìyàn fi ń bẹ̀rẹ̀ sí í yọ̀ǹda ara wọn?", options: ["Ẹnìkan béèrè lọ́wọ́ wọn", "Pátákó ìpolówó ńlá", "Fọ́ọ̀mù owó-orí", "Ímeèlì láìròtẹ́lẹ̀"], answer: 0, why: "Bíbéèrè lọ́wọ́ ẹnìkan fúnra rẹ ni irinṣẹ́ tí ó lágbára jù láti wá olùyọ̀ǹda." },
          { objective: "O2", q: "Olùyọ̀ǹda kan máa kọ́ àwọn ọmọdé lẹ́yìn ilé-ìwé. Àyẹ̀wò wo ni a nílò?", options: ["Kò sí", "Orúkọ nìkan", "Ẹ̀rín músẹ́ ní ẹnu ọ̀nà nìkan", "Fọ́ọ̀mù ìbéèrè, ẹlẹ́rìí àti àyẹ̀wò ìtàn-ẹni pẹ̀lú àṣẹ tí a kọ sílẹ̀"], answer: 3, why: "Àwọn ipa pẹ̀lú ọmọdé nílò àyẹ̀wò tí ó lágbára jù." },
          { objective: "O2", q: "Ta ni o yẹ kí o béèrè lọ́wọ́ rẹ̀ nípa òfin àyẹ̀wò ìtàn-ẹni fún àwọn olùyọ̀ǹda rẹ?", options: ["Ọ̀rẹ́ olùyọ̀ǹda kan", "Kò sí ẹnìkan", "Ilé-iṣẹ́ ìbánigbófò rẹ àti agbẹjọ́rò", "Ìfiránṣẹ́ kan lórí ìkànnì àjọlò"], answer: 2, why: "Òfin yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀, ilé-iṣẹ́ ìbánigbófò sì lè ní ohun tí wọ́n ń béèrè." },
          { objective: "O3", q: "Èwo ló yẹ kí ó wà nínú ìpàdé ìfáàráàlẹ̀ olùyọ̀ǹda?", options: ["Òfin ìkọ̀kọ̀ nípa àwọn ènìyàn tí ẹ ń sìn", "Àdírẹ́sì ilé àwọn tí ẹ ń sìn", "Owó-oṣù àwọn òṣìṣẹ́", "Ọ̀rọ̀ òfófó nípa àwọn olùfowọ́sí"], answer: 0, why: "Àwọn olùyọ̀ǹda gbọ́dọ̀ mọ bí wọ́n ṣe ń dáàbò bo ìkọ̀kọ̀ àwọn ènìyàn." }
        ]
      }
    },
    {
      name: "Orí 2: Mímú àwọn olùyọ̀ǹda dúró",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ṣíṣe ètò àkókò àti bíbójútó àwọn olùyọ̀ǹda",
          minutes: 5,
          goal: "Ṣe ètò àkókò olùyọ̀ǹda pẹ̀lú àwọn adípò, kí o sì bójútó àwọn olùyọ̀ǹda lọ́nà tí ó ń ràn wọ́n lọ́wọ́.",
          text: [
            "Jẹ́ kí ètò àkókò rọrùn láti rí, kí ó sì rọrùn láti yí padà. Kàlẹ́ńdà àjọlò, irinṣẹ́ ìforúkọsílẹ̀ ọ̀fẹ́ tàbí spreadsheet tó rọrùn máa ṣiṣẹ́. Gbé àwọn àsìkò-iṣẹ́ jáde ní kùtùkùtù, fi ìránnilétí ránṣẹ́ ní ọjọ́ kan tàbí méjì ṣáájú, kí o sì jẹ́ kí ìfagilé rọrùn kí àwọn ènìyàn lè sọ fún ọ dípò kí wọ́n kàn má wá. Ṣe àkọsílẹ̀ àwọn adípò fún àwọn àsìkò-iṣẹ́ pàtàkì.",
            "Gbogbo àsìkò-iṣẹ́ gbọ́dọ̀ ní alábòójútó tàbí olùyọ̀ǹda aṣáájú tí a dárúkọ, tí ó ń kí àwọn ènìyàn káàbọ̀, pín iṣẹ́, dáhùn ìbéèrè, tí ó sì ń yanjú ìṣòro. Bíbójútó àwọn olùyọ̀ǹda dà bí ṣíṣàkóso òṣìṣẹ́, ṣùgbọ́n ó fúyẹ́ jù: iṣẹ́ tí ó ṣe kedere, bíbéèrè bí nǹkan ṣe ń lọ déédéé, àti èsì tí ó yára tí ó sì ní inúrere.",
            "Tí olùyọ̀ǹda kan kò bá ṣe dáadáa, bá a sọ̀rọ̀ ní ìkọ̀kọ̀, sọ ohun náà pàtó, kí o sì béèrè ohun tí yóò ràn án lọ́wọ́. Nígbà míì ipa míì máa bá a mu jù. Tí ẹnìkan bá rú òfin ààbò tàbí òfin ìwà, tẹ̀lé ìlànà àjọ rẹ, èyí tí ó lè ní fífi òpin sí ipa olùyọ̀ǹda rẹ̀."
          ],
          steps: ["Lo kàlẹ́ńdà àjọlò, irinṣẹ́ ìforúkọsílẹ̀ tàbí spreadsheet.", "Gbé àsìkò-iṣẹ́ jáde ní kùtùkùtù kí o sì fi ìránnilétí ránṣẹ́.", "Jẹ́ kí ìfagilé rọrùn; ní àkọsílẹ̀ àwọn adípò.", "Dárúkọ alábòójútó fún gbogbo àsìkò-iṣẹ́.", "Fún wọn ní iṣẹ́ tí ó ṣe kedere àti èsì tí ó yára tí ó ní inúrere.", "Yanjú ìṣòro ní ìkọ̀kọ̀; tẹ̀lé ìlànà fún rírú òfin ààbò."],
          words: [["Àsìkò-iṣẹ́ (shift)", "àkókò kan pàtó tí olùyọ̀ǹda ń ṣiṣẹ́."], ["Aṣáájú àsìkò-iṣẹ́ (shift lead)", "ẹni tí ó ń bójútó àwọn olùyọ̀ǹda nígbà àsìkò-iṣẹ́ kan."], ["Àkọsílẹ̀ àwọn adípò", "àwọn olùyọ̀ǹda tí o lè pè nígbà tí ẹnìkan bá fagilé."]],
          slides: [
            { title: "Ètò àkókò tí ó ń ṣiṣẹ́", bullets: ["Rọrùn láti rí, rọrùn láti yí padà", "Gbé jáde ní kùtùkùtù, rán wọn létí ní ọjọ́ kan tàbí méjì ṣáájú", "Ìfagilé tó rọrùn àti àkọsílẹ̀ àwọn adípò"] },
            { title: "Aṣáájú tí a dárúkọ fún gbogbo àsìkò-iṣẹ́", bullets: ["Ó ń kí àwọn ènìyàn káàbọ̀", "Ó ń pín iṣẹ́, ó ń dáhùn ìbéèrè", "Ó ń yanjú ìṣòro"] },
            { title: "Bíbójútó àwọn olùyọ̀ǹda", bullets: ["Iṣẹ́ tí ó ṣe kedere àti bíbéèrè bí nǹkan ṣe ń lọ", "Èsì tí ó yára tí ó ní inúrere", "Kò ṣe dáadáa? Bá a sọ̀rọ̀ ní ìkọ̀kọ̀; gbìyànjú ipa míì"] }
          ],
          tryIt: "Ṣe ètò àkókò oṣù kan fún ipa rẹ nínú spreadsheet tàbí lórí ìwé: àwọn ọjọ́, àkókò àsìkò-iṣẹ́, orúkọ àwọn olùyọ̀ǹda, aṣáájú àsìkò-iṣẹ́ tí a dárúkọ àti orúkọ adípò méjì. Kọ ọ̀rọ̀ ìránnilétí tí o máa fi ránṣẹ́.",
          youCanNow: "ṣe ètò àkókò olùyọ̀ǹda pẹ̀lú ìránnilétí àti àwọn adípò, kí o sì bójútó àwọn olùyọ̀ǹda lọ́nà tí ó ṣe kedere tí ó sì ń ràn wọ́n lọ́wọ́.",
          quickCheck: [
            { objective: "O4", q: "Kí ni àkọsílẹ̀ àwọn adípò?", options: ["Ẹ̀dà ìṣúná owó", "Àkọsílẹ̀ àwọn olùyọ̀ǹda tí ó ti kúrò", "Ètò àkókò àtijọ́", "Àwọn ènìyàn tí o lè pè nígbà tí ẹnìkan bá fagilé àsìkò-iṣẹ́ pàtàkì"], answer: 3, why: "Àkọsílẹ̀ àwọn adípò ń jẹ́ kí àwọn àsìkò-iṣẹ́ pàtàkì ní ènìyàn nígbà tí ètò bá yí padà." },
            { objective: "O4", q: "Olùyọ̀ǹda kan ń ṣàṣìṣe léraléra nínú ipa rẹ̀. Kí ni o máa kọ́kọ́ ṣe?", options: ["Sọ fún gbogbo ẹgbẹ́ nípa rẹ̀", "Bá a sọ̀rọ̀ ní ìkọ̀kọ̀, sọ ohun náà pàtó, kí o sì béèrè ohun tí yóò ràn án lọ́wọ́", "Dẹ́kun fífi í sínú ètò àkókò láìsọ ìdí", "Má ṣe kà á sí"], answer: 1, why: "Yanjú ìṣòro ní ìkọ̀kọ̀ àti pẹ̀lú inúrere; ipa míì lè bá a mu jù." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìmọrírì àti mímú àwọn olùyọ̀ǹda dúró",
          minutes: 5,
          goal: "Ṣètò ìmọrírì tí ó bá àwọn olùyọ̀ǹda rẹ mu, kí o sì mọ ìdí tí àwọn olùyọ̀ǹda fi ń kúrò.",
          text: [
            "Àwọn olùyọ̀ǹda sábà máa ń dẹ́kun wíwá nítorí pé wọ́n rò pé a kò nílò wọn, ètò kò dára, a kò kọ́ wọn, tàbí a kò dúpẹ́ lọ́wọ́ wọn, tàbí nítorí pé ọwọ́ wọn dí nínú ayé. Mímú wọn dúró rọrùn, kò sì gbówó lórí tó wíwá àwọn tuntun.",
            "Máa dúpẹ́ lọ́wọ́ àwọn ènìyàn léraléra àti ní pàtó: \"Àsìkò-iṣẹ́ ọjọ́ Àbámẹ́ta rẹ ràn wá lọ́wọ́ láti di àpótí 600 ní oṣù yìí.\" Pín ìtàn nípa ipa rere iṣẹ́ náà, pẹ̀lú àṣẹ àwọn tí ẹ ń sìn. Da ọpẹ́ kékeré ojoojúmọ́ (lẹ́tà kékeré, ìyìn ní gbangba, text) pọ̀ mọ́ àwọn àkókò ìmọrírì ńlá (ayẹyẹ ìmọrírì, ìwé-ẹ̀rí, lẹ́tà ìjẹ́rìí fún iṣẹ́ tàbí ilé-ìwé).",
            "Béèrè lọ́wọ́ àwọn olùyọ̀ǹda ohun tí wọ́n fẹ́: ọgbọ́n tuntun, ọ̀rẹ́, ipò aṣáájú, àkókò tí ó rọrùn. Fún wọn ní àǹfààní láti dàgbà, bí kíkọ́ àwọn olùyọ̀ǹda tuntun tàbí ṣíṣe aṣáájú àsìkò-iṣẹ́. Béèrè ìdí lọ́wọ́ àwọn tí ó ń kúrò, kí o sì lo ohun tí o kọ́."
          ],
          steps: ["Máa dúpẹ́ lọ́wọ́ àwọn ènìyàn léraléra àti ní pàtó.", "Pín ìtàn ipa rere, pẹ̀lú àṣẹ.", "Da ọpẹ́ kékeré pọ̀ mọ́ àwọn àkókò ìmọrírì ńlá.", "Béèrè ohun tí olùyọ̀ǹda kọ̀ọ̀kan fẹ́ láti inú iṣẹ́ náà.", "Fún wọn ní ipa tí ó ń mú wọn dàgbà.", "Béèrè ìdí lọ́wọ́ àwọn tí ó ń kúrò."],
          words: [["Mímú olùyọ̀ǹda dúró (retention)", "mímú kí àwọn olùyọ̀ǹda máa padà wá fún ìgbà pípẹ́."], ["Ìmọrírì (recognition)", "fífi hàn àwọn olùyọ̀ǹda pé a rí iṣẹ́ wọn, a sì mọyì rẹ̀."]],
          slides: [
            { title: "Ìdí tí àwọn olùyọ̀ǹda fi ń kúrò", bullets: ["Wọ́n rò pé a kò nílò wọn tàbí a kò kọ́ wọn", "Ètò tí kò dára", "A kò dúpẹ́ lọ́wọ́ wọn rí, tàbí ọwọ́ wọn dí nínú ayé"] },
            { title: "Dúpẹ́ lọ́wọ́ wọn dáadáa", bullets: ["Léraléra àti ní pàtó", "Pín ìtàn ipa rere, pẹ̀lú àṣẹ", "Ọpẹ́ kékeré pẹ̀lú àwọn àkókò ìmọrírì ńlá"] },
            { title: "Ràn wọ́n lọ́wọ́ láti dàgbà", bullets: ["Béèrè ohun tí wọ́n fẹ́", "Fún wọn ní ipa ìdálẹ́kọ̀ọ́ àti ipò aṣáájú", "Béèrè ìdí lọ́wọ́ àwọn tí ó ń kúrò"] }
          ],
          tryIt: "Kọ èrò ìmọrírì méjì fún àwọn olùyọ̀ǹda rẹ: ọpẹ́ kékeré kan tí o lè fúnni ní ọ̀sẹ̀ yìí àti àkókò ìmọrírì ńlá kan fún ọdún yìí. Lẹ́yìn náà kọ ìbéèrè mẹ́ta tí o máa bi olùyọ̀ǹda kan nípa ohun tí ó fẹ́ láti inú ipa náà.",
          youCanNow: "mọrírì àwọn olùyọ̀ǹda lọ́nà tí ó ṣe pàtàkì sí wọn, kí o sì gbé ìgbésẹ̀ lórí àwọn ìdí tí àwọn olùyọ̀ǹda fi ń kúrò.",
          quickCheck: [
            { objective: "O5", q: "Èwo ni ìdí tí ó wọ́pọ̀ tí àwọn olùyọ̀ǹda fi ń dẹ́kun wíwá?", options: ["Wọ́n rò pé a kò nílò wọn tàbí a kò dúpẹ́ lọ́wọ́ wọn", "A dúpẹ́ lọ́wọ́ wọn jù", "Àwọn àsìkò-iṣẹ́ wà létòlétò dáadáa", "Wọ́n ní ọ̀rẹ́ (buddy)"], answer: 0, why: "Rírò pé a kò nílò wọn, ètò tí kò dára, àìkọ́ wọn tàbí àìdúpẹ́ máa ń mú àwọn olùyọ̀ǹda lọ." },
            { objective: "O5", q: "Olùyọ̀ǹda olóòótọ́ kan sọ pé òun fẹ́ kọ́ ọgbọ́n aṣáájú. Kí ni o máa fún un?", options: ["Kò sí nǹkan; olùyọ̀ǹda kì í dàgbà", "Iṣẹ́ kan náà sí i", "Àǹfààní láti ṣe aṣáájú àsìkò-iṣẹ́ tàbí kọ́ àwọn olùyọ̀ǹda tuntun", "Ipa tí ó kéré jù"], answer: 2, why: "Àwọn ipa ìdàgbàsókè bí ṣíṣe aṣáájú àsìkò-iṣẹ́ ń ràn wá lọ́wọ́ láti mú àwọn olùyọ̀ǹda tí ó fẹ́ ṣe jù bẹ́ẹ̀ lọ dúró." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ àkọsílẹ̀ wákàtí olùyọ̀ǹda",
          minutes: 5,
          goal: "Ṣe ètò tó rọrùn láti kọ àkọsílẹ̀ wákàtí olùyọ̀ǹda kí o sì lo àwọn nọ́mbà náà.",
          text: [
            "Kọ ẹni tí ó yọ̀ǹda, ìgbà wo, fún bí ó ṣe pẹ́ tó àti nínú ipa wo sílẹ̀. Ìwé ìforúkọsílẹ̀ tí a dà kọ sínú spreadsheet máa ṣiṣẹ́ fún ẹgbẹ́ kékeré; fọ́ọ̀mù ọ̀fẹ́ tàbí app olùyọ̀ǹda lè ṣiṣẹ́ fún àwọn ẹgbẹ́ ńlá. Jẹ́ kí ó rọrùn kí àwọn ènìyàn lè forúkọ sílẹ̀ nígbà tí wọ́n dé àti nígbà tí wọ́n lọ.",
            "Àwọn nọ́mbà náà ń ràn ọ́ lọ́wọ́: wọ́n ń fi ipa rere hàn nínú ìròyìn ẹ̀bùn owó (grant report) àti fún ìgbìmọ̀ àjọ rẹ, wọ́n ń ràn ọ́ lọ́wọ́ láti ṣètò iye ènìyàn tí o nílò, wọ́n sì ń ràn ọ́ lọ́wọ́ láti dúpẹ́ lọ́wọ́ àwọn olùyọ̀ǹda rẹ tí ó jẹ́ olóòótọ́ jù. Ọ̀pọ̀ olùyọ̀ǹda tún nílò ẹ̀rí wákàtí fún ilé-ìwé, owó ìrànlọ́wọ́ ẹ̀kọ́ (scholarship), ilé-ẹjọ́ tàbí iṣẹ́ àwùjọ tí a pàṣẹ, tàbí ìwé ìbéèrè iṣẹ́. Múra sílẹ̀ láti fọwọ́ sí lẹ́tà tàbí fọ́ọ̀mù tí ó jẹ́rìí sí wákàtí wọn.",
            "Pa àkọsílẹ̀ olùyọ̀ǹda mọ́ ní ìkọ̀kọ̀ àti láìléwu, kí o sì gba ohun tí o nílò nìkan. Ọ̀rọ̀ nípa owó-orí fún àwọn olùyọ̀ǹda: IRS (àjọ owó-orí US) sọ pé iye owó àkókò olùyọ̀ǹda kò ṣeé yọ kúrò nínú owó-orí, bí ó tilẹ̀ jẹ́ pé àwọn owó kan tí wọ́n ná láti àpò ara wọn tí a kò dá padà fún wọn lè ṣeé yọ. Tọ́ka àwọn olùyọ̀ǹda sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí dípò kí o fún wọn ní ìmọ̀ràn owó-orí."
          ],
          steps: ["Yan ọ̀nà ìforúkọsílẹ̀: ìwé, fọ́ọ̀mù tàbí app.", "Kọ orúkọ, ọjọ́, àkókò ìbẹ̀rẹ̀ àti ìparí, àti ipa sílẹ̀.", "Tẹ dátà náà sínú spreadsheet kan ní ọ̀sẹ̀ kọ̀ọ̀kan.", "Ṣírò àpapọ̀ wákàtí fún olùyọ̀ǹda kọ̀ọ̀kan, fún oṣù kọ̀ọ̀kan àti fún ètò kọ̀ọ̀kan.", "Lo àpapọ̀ náà nínú ìròyìn, ètò àti ọpẹ́.", "Pa àkọsílẹ̀ mọ́ ní ìkọ̀kọ̀; fọwọ́ sí lẹ́tà ẹ̀rí wákàtí nígbà tí wọ́n bá béèrè."],
          words: [["Ìwé ìforúkọsílẹ̀ (sign-in sheet)", "fọ́ọ̀mù tó rọrùn níbi tí àwọn olùyọ̀ǹda ti ń kọ orúkọ wọn àti àkókò tí wọ́n bẹ̀rẹ̀ àti tí wọ́n parí."], ["Ẹ̀rí wákàtí", "lẹ́tà tàbí fọ́ọ̀mù tí a fọwọ́ sí tí ó jẹ́rìí sí iye wákàtí tí ẹnìkan fi yọ̀ǹda."], ["Ìròyìn ẹ̀bùn owó (grant report)", "ìròyìn sí olùfowópamọ́ tí ó ń fi ohun tí a fi owó wọn ṣe hàn."]],
          slides: [
            { title: "Kọ àwọn ìpìlẹ̀ sílẹ̀", bullets: ["Ta ni, ìgbà wo, fún bí ó ṣe pẹ́ tó, ipa wo", "Ìwé, fọ́ọ̀mù ọ̀fẹ́, tàbí app", "Jẹ́ kí ó rọrùn"] },
            { title: "Lo àwọn nọ́mbà náà", bullets: ["Ìròyìn ẹ̀bùn owó àti ìròyìn sí ìgbìmọ̀", "Ṣíṣètò àsìkò-iṣẹ́", "Dídúpẹ́ lọ́wọ́ àwọn olùyọ̀ǹda olóòótọ́"] },
            { title: "Ẹ̀rí wákàtí", bullets: ["Fún ilé-ìwé, owó ìrànlọ́wọ́ ẹ̀kọ́, ilé-ẹjọ́ tàbí iṣẹ́", "Múra sílẹ̀ láti fọwọ́ sí lẹ́tà tàbí fọ́ọ̀mù"] },
            { title: "Ìkọ̀kọ̀ àti owó-orí", bullets: ["Gba ohun tí o nílò nìkan; pa á mọ́ láìléwu", "Àkókò olùyọ̀ǹda kò ṣeé yọ kúrò nínú owó-orí (IRS)", "Tọ́ka sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí"] }
          ],
          sources: [{ name: "IRS Publication 526, Charitable Contributions", url: "https://www.irs.gov/publications/p526" }],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe àpò-iṣẹ́ olùyọ̀ǹda rẹ fún ipa kan: àpèjúwe ipa, ọ̀rọ̀ ìpè fún olùyọ̀ǹda àti àwọn ìgbésẹ̀ àyẹ̀wò, ìlapa ìpàdé ìfáàráàlẹ̀ ìṣẹ́jú 30, ètò àkókò oṣù kan pẹ̀lú aṣáájú àsìkò-iṣẹ́, èrò ìmọrírì méjì, àti ìwé ìforúkọsílẹ̀ tàbí spreadsheet pẹ̀lú ọ̀wọ̀n fún orúkọ, ọjọ́, ìbẹ̀rẹ̀, ìparí, wákàtí àti ipa.",
          youCanNow: "kọ àkọsílẹ̀ wákàtí olùyọ̀ǹda lọ́nà tó rọrùn, kí o sì lo àwọn nọ́mbà náà fún ìròyìn, ètò, ọpẹ́ àti ẹ̀rí wákàtí.",
          quickCheck: [
            { objective: "O6", q: "Kí ló dé tí a fi ń kọ àkọsílẹ̀ wákàtí olùyọ̀ǹda?", options: ["Láti gba owó lọ́wọ́ àwọn olùyọ̀ǹda", "Láti fi ipa rere hàn nínú ìròyìn ẹ̀bùn owó àti ti ìgbìmọ̀, àti láti ṣètò iye ènìyàn", "Láti pín ìsọfúnni àwọn olùyọ̀ǹda ní gbangba", "Nítorí pé a ń san owó fún àwọn olùyọ̀ǹda ní wákàtí"], answer: 1, why: "Àpapọ̀ wákàtí ń fi ipa rere hàn, ń ran ètò lọ́wọ́, ó sì ń ràn ọ́ lọ́wọ́ láti dúpẹ́ lọ́wọ́ àwọn olùyọ̀ǹda olóòótọ́." },
            { objective: "O6", q: "Olùyọ̀ǹda kan béèrè bóyá òun lè yọ iye owó àkókò òun kúrò nínú owó-orí. Kí ni o máa ṣe?", options: ["Sọ pé bẹ́ẹ̀ ni, ní iye owó wákàtí èyíkéyìí", "Bá a ṣe owó-orí rẹ̀", "Má ṣe dá ìbéèrè náà lóhùn", "Tọ́ka rẹ̀ sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí"], answer: 3, why: "Ẹ̀kọ́ náà sọ pé kí o má fún wọn ní ìmọ̀ràn owó-orí; tọ́ka àwọn olùyọ̀ǹda sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Mímú àwọn olùyọ̀ǹda dúró",
        questions: [
          { objective: "O4", q: "Àwọn olùyọ̀ǹda ń pàdánù àsìkò-iṣẹ́ láìsọ fún ọ. Kí ló máa kọ́kọ́ ṣèrànwọ́?", options: ["Lé gbogbo wọn kúrò", "Dẹ́kun ṣíṣe ètò àkókò", "Fi ìránnilétí ránṣẹ́ kí o sì jẹ́ kí ìfagilé rọrùn", "Fi àsìkò-iṣẹ́ gùn sí ìlọ́po méjì"], answer: 2, why: "Ìránnilétí àti ìfagilé tó rọrùn ń dín àìwá kù." },
          { objective: "O4", q: "Ta ni a gbọ́dọ̀ dárúkọ fún gbogbo àsìkò-iṣẹ́?", options: ["Olùfowọ́sí kan", "Aṣáájú àsìkò-iṣẹ́ tàbí alábòójútó", "Olùyọ̀ǹda tí ó ṣẹ̀ṣẹ̀ dé jù", "Kò sí ẹnìkan"], answer: 1, why: "Aṣáájú tí a dárúkọ ń kí àwọn ènìyàn káàbọ̀, ó ń tọ́ wọn sọ́nà, ó sì ń yanjú ìṣòro." },
          { objective: "O5", q: "Ọpẹ́ wo ló ṣeé ṣe jù kí ó ṣe pàtàkì sí olùyọ̀ǹda?", options: ["\"Ẹ ṣé o, gbogbo yín.\"", "Kò sí ọpẹ́; iṣẹ́ olùyọ̀ǹda ni", "Ímeèlì gbogbogbò lẹ́ẹ̀kan lọ́dún", "\"Àsìkò-iṣẹ́ ọjọ́ Àbámẹ́ta rẹ ràn wá lọ́wọ́ láti di àpótí 600 ní oṣù yìí.\""], answer: 3, why: "Ọpẹ́ pàtó tí ó dárúkọ ipa rere ló ṣe pàtàkì jù." },
          { objective: "O6", q: "Ọ̀dọ́ kan nílò ẹ̀rí wákàtí olùyọ̀ǹda 40 fún ilé-ìwé. O yẹ kí o:", options: ["Lo àkọsílẹ̀ wákàtí rẹ kí o sì fọwọ́ sí lẹ́tà tí ó jẹ́rìí sí wọn", "Kọ̀ jálẹ̀", "Méfò iye wákàtí náà", "Sọ fún un pé kí ó lọ béèrè lọ́wọ́ IRS"], answer: 0, why: "Àkọsílẹ̀ tó dára ń jẹ́ kí o lè jẹ́rìí sí wákàtí ní pípé." },
          { objective: "O6", q: "Gẹ́gẹ́ bí IRS ti sọ, ṣé olùyọ̀ǹda lè yọ iye owó àkókò rẹ̀ kúrò nínú owó-orí?", options: ["Bẹ́ẹ̀ ni, ní iye èyíkéyìí tí ó bá yàn", "Bẹ́ẹ̀ ni, ní owó-oṣù tí ó kéré jù (minimum wage)", "Rárá, iye owó àkókò tàbí iṣẹ́ kò ṣeé yọ", "Ní òpin ọ̀sẹ̀ nìkan"], answer: 2, why: "IRS Publication 526 sọ pé iye owó àkókò rẹ kò ṣeé yọ kúrò nínú owó-orí." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣàkóso Àwọn Olùyọ̀ǹda",
    questions: [
      { objective: "O1", q: "Àpèjúwe ipa olùyọ̀ǹda gbọ́dọ̀ ní:", options: ["Orúkọ ipa náà nìkan", "Ohun tí wọn yóò ṣe, ìgbà wo, ìdí tí ó fi ṣe pàtàkì àti ẹni tí wọ́n máa jábọ̀ fún", "Owó-oṣù olùyọ̀ǹda náà", "Orúkọ àwọn olùfowọ́sí"], answer: 1, why: "Àlàyé tí ó ṣe kedere ń ran àwọn olùyọ̀ǹda lọ́wọ́ láti ṣàṣeyọrí." },
      { objective: "O1", q: "Kí ló dé tí a fi ń fúnni ní ipa kúkúrú tí ó rọrùn?", options: ["Ọ̀pọ̀ ènìyàn lè fúnni ní àkókò díẹ̀ ṣùgbọ́n kì í ṣe ní gbogbo ọ̀sẹ̀", "Wọ́n rọrùn láti gbàgbé", "Wọn kò nílò ìdálẹ́kọ̀ọ́", "Wọ́n ń rọ́pò òṣìṣẹ́"], answer: 0, why: "Àwọn ipa tí ó rọrùn ń ṣí ilẹ̀kùn fún àwọn olùyọ̀ǹda púpọ̀ sí i." },
      { objective: "O1", q: "Ilé ìfúnni-lóúnjẹ kan nílò àwọn akíni-káàbọ̀, olùtò-ẹrù àti awakọ̀. Àpèjúwe ipa mélòó ni?", options: ["Ọ̀kan fún gbogbo wọn", "Kò sí", "Ọ̀kan fún ipa kọ̀ọ̀kan", "Fún àwọn awakọ̀ nìkan"], answer: 2, why: "Ipa kọ̀ọ̀kan ní iṣẹ́ àti ohun tí ó nílò tí ó yàtọ̀." },
      { objective: "O2", q: "Ọ̀nà wíwá olùyọ̀ǹda wo ló sábà máa ń ṣiṣẹ́ jù?", options: ["Dídúró kí àwọn ènìyàn wá ọ rí", "Fífi ìkéde sílẹ̀ lẹ́ẹ̀kan kí o sì máa retí", "Bíbéèrè lọ́wọ́ òṣìṣẹ́ nìkan", "Bíbéèrè lọ́wọ́ àwọn ènìyàn fúnra rẹ, títí kan nípasẹ̀ àwọn olùyọ̀ǹda tí o ní"], answer: 3, why: "Bíbéèrè fúnra ẹni ló ń mú olùyọ̀ǹda púpọ̀ jù wá." },
      { objective: "O2", q: "Àyẹ̀wò gbọ́dọ̀ bá èwo mu?", options: ["Ewu ipa náà", "Ìrísí olùyọ̀ǹda náà", "Ojú ọjọ́", "Ìṣesí olùṣètò"], answer: 0, why: "Àwọn ipa tí ewu wọn ga nílò àyẹ̀wò púpọ̀ sí i." },
      { objective: "O2", q: "A gbọ́dọ̀ ṣe àyẹ̀wò ìtàn-ẹni:", options: ["Ní ìkọ̀kọ̀ láìsọ fún un", "Pẹ̀lú àṣẹ tí ẹni náà kọ sílẹ̀", "Lẹ́yìn ìṣẹ̀lẹ̀ kan nìkan", "Nípa bíbéèrè lọ́wọ́ àwọn aládùúgbò"], answer: 1, why: "A nílò àṣẹ, ó sì ń fi ọ̀wọ̀ hàn." },
      { objective: "O2", q: "Èwo ni òfin ààbò tó dára fún ètò àwọn ọ̀dọ́?", options: ["Àgbàlagbà èyíkéyìí lè dá wà pẹ̀lú ọmọdé níbikíbi", "A máa ń fi ìdààmú pamọ́", "Kò sí àgbàlagbà tí ó máa dá wà pẹ̀lú ọmọdé níbi tí a kò ti rí wọn", "Àyẹ̀wò kò pọn dandan"], answer: 2, why: "Òfin yìí ń dáàbò bo àwọn ọmọdé àti àwọn olùyọ̀ǹda." },
      { objective: "O2", q: "Òfin fún àyẹ̀wò ìtàn-ẹni olùyọ̀ǹda:", options: ["Bákan náà ni níbi gbogbo", "Kò sí", "Àwọn olùyọ̀ǹda ló ń ṣe é", "Yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀ àti láti ètò sí ètò; béèrè lọ́wọ́ ilé-iṣẹ́ ìbánigbófò rẹ àti agbẹjọ́rò"], answer: 3, why: "Ohun tí a ń béèrè yàtọ̀ síra, nítorí náà ṣàyẹ̀wò ohun tí ó kàn ọ́." },
      { objective: "O3", q: "Ìkáàbọ̀ (onboarding) túmọ̀ sí:", options: ["Gbogbo ohun tí ó ń ran olùyọ̀ǹda tuntun lọ́wọ́ láti bẹ̀rẹ̀ kí ó sì rí i pé a gbà á tọwọ́tẹsẹ̀", "Lílé olùyọ̀ǹda kúrò", "Kíkówó jọ", "Rírà ẹ̀rọ"], answer: 0, why: "Ó ní ìkáàbọ̀, ìpàdé ìfáàráàlẹ̀, ìdálẹ́kọ̀ọ́ àti àsìkò-iṣẹ́ àkọ́kọ́." },
      { objective: "O3", q: "Ìgbésẹ̀ mẹ́rin ìdálẹ́kọ̀ọ́ ipa ni:", options: ["Kà, fọwọ́ sí, lọ, gbàgbé", "Ṣàlàyé, fi hàn, jẹ́ kí wọ́n gbìyànjú, fún wọn ní èsì", "Sọ, dánwò, kùnà, tún ṣe", "Wò, dúró, méfò, lọ"], answer: 1, why: "Ìdálẹ́kọ̀ọ́ fi-hàn-kí-o-gbìyànjú ń kọ́ ọgbọ́n àti ìgboyà." },
      { objective: "O3", q: "Fífi olùyọ̀ǹda tuntun ṣe ọ̀rẹ́ pẹ̀lú ẹlòmíì ń ṣèrànwọ́ nítorí pé:", options: ["Ó ń fi iṣẹ́ ìwé kún un ní ìlọ́po méjì", "Ó ń rọ́pò ìpàdé ìfáàráàlẹ̀", "Wọ́n ní ẹni tí wọ́n lè béèrè lọ́wọ́ rẹ̀ ní àsìkò-iṣẹ́ àkọ́kọ́", "Ọ̀rẹ́ náà ló ń ṣe gbogbo iṣẹ́"], answer: 2, why: "Ọ̀rẹ́ ń jẹ́ kí àsìkò-iṣẹ́ àkọ́kọ́ rọrùn, kí ó sì ní ọ̀rẹ́." },
      { objective: "O3", q: "Olùyọ̀ǹda kan gbé fọ́tò ẹni tí ẹ ń sìn sórí ayélujára. Ẹ̀kọ́ ìpàdé ìfáàráàlẹ̀ wo ni ó fò?", options: ["Ibi ìgbọ́kọ̀sí", "Òfin ìkọ̀kọ̀", "Ìpanu", "Kíkówó jọ"], answer: 1, why: "Àwọn olùyọ̀ǹda gbọ́dọ̀ pa ìdánimọ̀ àwọn tí ẹ ń sìn mọ́ ní ìkọ̀kọ̀." },
      { objective: "O4", q: "Ètò àkókò olùyọ̀ǹda tó dára:", options: ["Rọrùn láti rí, ó sì rọrùn láti yí padà", "Wà ní orí ẹnì kan ṣoṣo", "A gbé e jáde ní alẹ́ ọjọ́ tó ṣáájú", "A kì í pín in rárá"], answer: 0, why: "Rírí rẹ̀ kedere àti yíyí i padà lọ́nà rọrùn ń dín àlàfo kù." },
      { objective: "O4", q: "Àkọsílẹ̀ àwọn adípò wà fún:", options: ["Lílé àwọn olùyọ̀ǹda kúrò", "Ìròyìn ẹ̀bùn owó", "Pípa ètò àkókò àtijọ́ mọ́", "Pípè nígbà tí ẹnìkan bá fagilé àsìkò-iṣẹ́ pàtàkì"], answer: 3, why: "Àwọn adípò ń jẹ́ kí àwọn àsìkò-iṣẹ́ pàtàkì ní ènìyàn." },
      { objective: "O4", q: "Olùyọ̀ǹda kan ń ní ìṣòro nínú ipa kíkọ dátà ṣùgbọ́n ó fẹ́ràn bíbá àwọn ènìyàn sọ̀rọ̀. O lè:", options: ["Má ṣe kà á sí", "Dójú tì í ní gbangba", "Bá a sọ̀rọ̀ ní ìkọ̀kọ̀ kí o sì fún un ní ipa akíni-káàbọ̀", "Yọ ọ́ kúrò láìsọ nǹkan kan"], answer: 2, why: "Ipa tí ó bá a mu jù sábà máa ń yanjú ìṣòro náà." },
      { objective: "O5", q: "Èwo ni ìdí tí ó wọ́pọ̀ tí àwọn olùyọ̀ǹda fi ń dẹ́kun wíwá?", options: ["A dúpẹ́ lọ́wọ́ wọn jù", "Wọ́n rò pé a kò nílò wọn tàbí a kò dúpẹ́ lọ́wọ́ wọn rí", "Àwọn àsìkò-iṣẹ́ wà létòlétò dáadáa", "Wọ́n ní ìdálẹ́kọ̀ọ́ tí ó ṣe kedere"], answer: 1, why: "Rírò pé a kò nílò wọn tàbí àìdúpẹ́ ń lé àwọn ènìyàn lọ." },
      { objective: "O5", q: "Nígbà tí o bá ń pín ìtàn ipa rere nípa àwọn ènìyàn tí ẹ ń sìn, o yẹ kí o:", options: ["Gba àṣẹ wọn", "Lo orúkọ wọn ní kíkún láìbéèrè", "Hùmọ̀ àwọn àlàyé kan", "Pín àdírẹ́sì ilé wọn"], answer: 0, why: "Ọ̀wọ̀ àti ìkọ̀kọ̀ ló kọ́kọ́ ṣe pàtàkì." },
      { objective: "O5", q: "Olùyọ̀ǹda tí ó ti pẹ́ fẹ́ dàgbà. O lè:", options: ["Fi í sínú iṣẹ́ kan náà títí láé", "Ní kí ó máa lọ", "Fún un ní iṣẹ́ ìmọ́tótó nìkan sí i", "Pè é láti kọ́ àwọn olùyọ̀ǹda tuntun tàbí ṣe aṣáájú àsìkò-iṣẹ́"], answer: 3, why: "Àwọn ipa ìdàgbàsókè ń jẹ́ kí àwọn olùyọ̀ǹda tí ó ti fi ara jì máa kópa." },
      { objective: "O6", q: "Àkọsílẹ̀ ìforúkọsílẹ̀ olùyọ̀ǹda gbọ́dọ̀ ní:", options: ["Ìsọfúnni báńkì wọn", "Orúkọ, ọjọ́, àkókò ìbẹ̀rẹ̀ àti ìparí, àti ipa", "Ọ̀rọ̀ aṣínà wọn", "Ìbuwọ́lù nìkan"], answer: 1, why: "Àwọn ìpìlẹ̀ wọ̀nyí ń jẹ́ kí o lè ṣírò àpapọ̀ wákàtí ní pípé." },
      { objective: "O6", q: "Olùyọ̀ǹda kan béèrè bóyá òun lè yọ owó epo tí òun fi wakọ̀ lọ síbi iṣẹ́ olùyọ̀ǹda kúrò nínú owó-orí. O yẹ kí o:", options: ["Sọ pé bẹ́ẹ̀ ni, iye èyíkéyìí", "Sọ pé ó lòdì sí òfin", "Tọ́ka rẹ̀ sí IRS Publication 526 àti akọ́ṣẹ́mọṣẹ́ owó-orí", "Má ṣe dá ìbéèrè náà lóhùn"], answer: 2, why: "Àwọn owó kan tí a ná láti àpò ara ẹni lè ṣeé yọ; kí wọ́n ṣàyẹ̀wò orísun ìjọba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      2,
      4,
      6,
      8,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Àpèjúwe ipa",
        objective: "O1",
        notYet: "Àkókò, àwọn iṣẹ́ tàbí ẹni tí wọ́n máa jábọ̀ fún kò sí nínú rẹ̀.",
        meets: "Gbogbo apá márùn-ún wà, ó sì bẹ̀rẹ̀ pẹ̀lú ipa rere.",
        exceeds: "Ó tún fúnni ní ipa kúkúrú tí ó rọrùn fún àwọn tí kò ní àkókò púpọ̀."
      },
      {
        name: "Wíwá àti àyẹ̀wò olùyọ̀ǹda",
        objective: "O2",
        notYet: "Kò sí àyẹ̀wò, tàbí ipa tí ó kan àwọn ọmọdé tàbí àgbàlagbà tí ó nílò ààbò kò ní àyẹ̀wò ìtàn-ẹni.",
        meets: "Ọ̀rọ̀ ìpè fún olùyọ̀ǹda àti àyẹ̀wò tí ó bá ewu ipa náà mu, pẹ̀lú àṣẹ tí a kọ sílẹ̀ fún àwọn àyẹ̀wò.",
        exceeds: "Ó tún fi àwọn òfin ààbò kún un, ó sì kọ ọ́ sílẹ̀ láti ṣàyẹ̀wò pẹ̀lú ilé-iṣẹ́ ìbánigbófò àti agbẹjọ́rò."
      },
      {
        name: "Ìpàdé ìfáàráàlẹ̀ àti ìdálẹ́kọ̀ọ́",
        objective: "O3",
        notYet: "Kò sí ètò ìpàdé ìfáàráàlẹ̀, tàbí ààbò àti ìkọ̀kọ̀ kò sí nínú rẹ̀.",
        meets: "Ìlapa ìṣẹ́jú 30 pẹ̀lú àkókò, tí ó ní ààbò, ìkọ̀kọ̀, ìforúkọsílẹ̀ àti ìfagilé, pẹ̀lú ṣàlàyé, fi hàn, gbìyànjú, èsì.",
        exceeds: "Ó tún ní ọ̀rẹ́ (buddy) àti bíbéèrè bí ó ṣe lọ lẹ́yìn àsìkò-iṣẹ́ àkọ́kọ́."
      },
      {
        name: "Ètò àkókò àti àbójútó",
        objective: "O4",
        notYet: "Àwọn àsìkò-iṣẹ́ kò ní aṣáájú tàbí kò sí àwọn adípò.",
        meets: "Ètò àkókò oṣù kan pẹ̀lú aṣáájú àsìkò-iṣẹ́ tí a dárúkọ, adípò méjì àti ọ̀rọ̀ ìránnilétí.",
        exceeds: "Ó tún sọ bí àwọn olùyọ̀ǹda ṣe ń fagilé àti ẹni tí ó ń yanjú ìṣòro."
      },
      {
        name: "Ìmọrírì àti wákàtí",
        objective: "O5",
        notYet: "Kò sí ètò ọpẹ́ tàbí kò sí ọ̀nà láti kọ àkọsílẹ̀ wákàtí.",
        meets: "Èrò ìmọrírì kékeré kan àti ńlá kan, àti ìwé ìforúkọsílẹ̀ pẹ̀lú orúkọ, ọjọ́, ìbẹ̀rẹ̀, ìparí, wákàtí àti ipa.",
        exceeds: "Ó tún sọ bí a ṣe máa lo àpapọ̀ wákàtí nínú ìròyìn àti ọpẹ́."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olùyọ̀ǹda tí wọ́n ṣì ń ṣiṣẹ́ ní ọjọ́ 90 lẹ́yìn àsìkò-iṣẹ́ àkọ́kọ́ wọn, ní ìfiwéra pẹ̀lú ṣáájú ẹ̀kọ́ náà",
      "Àwọn ipa pẹ̀lú ọmọdé tàbí àgbàlagbà tí ó nílò ààbò tí ó ní àyẹ̀wò àti òfin ààbò tí a kọ sílẹ̀",
      "Àpapọ̀ wákàtí olùyọ̀ǹda tí a kọ sílẹ̀ tí a sì ròyìn fún ìgbìmọ̀ tàbí nínú ìròyìn ẹ̀bùn owó"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tàbí fóònù pẹ̀lú spreadsheet ọ̀fẹ́ tàbí irinṣẹ́ ìforúkọsílẹ̀, tàbí ìwé",
      "Ipa olùyọ̀ǹda gidi kan láti ṣètò fún",
      "Ìwé tàbí dọ́kúmẹ́ńtì fún àpò-iṣẹ́ olùyọ̀ǹda",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, àṣeṣe, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣe àpò-iṣẹ́ náà fún ipa gidi kan ní àjọ tirẹ̀ kí ó lè ṣetán fún lílò.",
      "Fún àwọn ipa pẹ̀lú ọmọdé tàbí àgbàlagbà tí ó nílò ààbò, tẹnu mọ́ àyẹ̀wò àti òfin ààbò, kí o sì sọ fún àwọn akẹ́kọ̀ọ́ láti jẹ́rìí sí ohun tí a ń béèrè pẹ̀lú ilé-iṣẹ́ ìbánigbófò wọn àti agbẹjọ́rò.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti má ṣe gba ìsọfúnni olùyọ̀ǹda ju èyí tí wọ́n nílò lọ, kí wọ́n sì pa àkọsílẹ̀ mọ́ ní ìkọ̀kọ̀.",
      "Pa àwọn akẹ́kọ̀ọ́ pọ̀ ní méjì-méjì láti pààrọ̀ àti ṣàyẹ̀wò àpèjúwe ipa àti ìlapa ìpàdé ìfáàráàlẹ̀ ara wọn.",
      "Fi rubric ṣe àmì fún àpò-iṣẹ́ náà, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
